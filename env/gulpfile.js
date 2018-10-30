const
    gulp = require('gulp'),
    sass = require('gulp-sass'), // препроцессор sass
    autoprefixer = require('gulp-autoprefixer'), // вендорные префексы css
    sourcemaps = require('gulp-sourcemaps'), // создание sourcemap
    nano = require('gulp-clean-css'), // жатие стилей
    babel = require('gulp-babel'), //подключаем babel
    uglify = require('gulp-uglify'), // Подключаем gulp-uglifyjs (для сжатия JS)
    concat = require('gulp-concat'), //конкатинация
    browsersync = require('browser-sync'),  // перезагрузка страницы браузера при изменении файлов
    watch = require('gulp-watch'), // наблюдение за ихменением файлов
    imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    clean = require('gulp-clean'), // Удаление папок и файлов
    rename = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    cache = require('gulp-cache'), // Подключаем библиотеку кеширования
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    htmlmin = require('gulp-htmlmin');

//переменные путей
var dir = '../',
    path = {
        src: {
            sass: dir + 'src/sass/**/*.*',
            js: dir + 'src/js/**/*.*',
            jsd: dir + 'src/js/',
            html: dir + 'src/src/*.*',
            css: dir + 'src/css/',
        }
    };

// tasks
//перезагрзка страницы
gulp.task('browsersync', function () {
    browsersync({
        // server: {baseDir: dir + '/src/'},// Директория для сервера
        proxy: "../src/", // проксирование вашего удаленного сервера, не важно на чем back-end
        // logPrefix: 'example.com', // префикс для лога bs, маловажная настройка
        //host:      'http://172.28.12.222/', // можно использовать ip сервера
        // port:      3000, // порт через который будет проксироваться сервер
        // open: 'external', // указываем, что наш url внешний
        // ghost:     true,
        // files:     [/*массив с путями к файлам и папкам за которыми вам нужно следить*/]
        notify: false
    });
});

// компиляция sass
gulp.task('sass', function () {
    return gulp.src(path.src.sass) // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true})) // Создаем префиксы
        .pipe(sourcemaps.init())
        .pipe(nano())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.src.css)) // Выгружаем результата в папку
        .pipe(browsersync.reload({stream: true})); // Обновляем CSS на странице при изменении
});

// js
gulp.task('scripts', function () {
    gulp.src(path.src.js)
        .pipe(sourcemaps.init())
        .pipe(concat('index.min.js'))
        .pipe(gulp.dest(path.src.jsd)); // Выгружаем в папку app/js
});

//очистка папки перед билдом
gulp.task('clean', function () {
    return gulp.src(path.dist.clean)               // выберае папку
        .pipe(clean({force: true}));                     // очистка
});

// выгружаем скомпилированный проект в продакшен
gulp.task('build', ['clean', 'img', 'sass'], function () {
    gulp.src(path.src.css + '**/*.css')  //css
        .pipe(gulp.dest(path.dist.css));

    gulp.src(path.src.js)               //js
        .pipe(gulp.dest(path.dist.js));
    gulp.src(path.src.libsjs)               //jslibs

        .pipe(gulp.dest(path.dist.img));
    gulp.src(path.src.html)               //folder
        .pipe(gulp.dest(path.dist.folder));
});

// наблюдение за изменением файлов
gulp.task('watch', ['sass'], function () {
    gulp.watch(path.src.sass, ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch(path.src.html, browsersync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(path.src.js, browsersync.reload); // Наблюдение за js файлами в корне проекта

});


// отмечаем скрипт по умолчанию
gulp.task('default', ['watch']);
