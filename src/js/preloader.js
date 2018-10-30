// let
//     img = document.images,
//     img_total_count = images.length,
//     img_loaded_count = 0;
// per_display = document.getElementById('per');
// preloader = document.getElementById('preloader');
//
// for (let i = 0; i < img_total_count; i++) {
//     img_clone = new Image();
//     img_clone.onload = img_loaded;
//     img_clone.onerror = img_loaded;
//     image_clone.src = images[i].src;
// }
//
// function img_loaded() {
//     img_total_count++;
//     per_display.innerHTML = (((100 / img_total_count) * img_loaded_count) << 0) + '%';
//     if (img_loaded_count >= img_total_count) {
//         setTimeout(function () {
//             if
//             (!preloader.classList.contains('done')) {
//                 preloader.classList.add('done');
//             }
//         }, 10000);
//     }
// }



window.onload = function () {

    setTimeout(function () {
        let preloader = document.getElementById('preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 10000);
};
