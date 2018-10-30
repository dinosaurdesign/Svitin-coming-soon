(function() {
        "use strict";
        function e() {
            throw new Error("Dynamic requires are not currently supported by rollup-plugin-commonjs")
        }
        function t(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e
        }
        function o(e, t) {
            return t = {
                exports: {}
            },
                e(t, t.exports),
                t.exports
        }
        // 25.4.1.5 NewPromiseCapability(C)
        function n(e) {
            var t, i;
            this.promise = new e(function(e, o) {
                    if (t !== void 0 || i !== void 0)
                        throw TypeError("Bad Promise constructor");
                    t = e,
                        i = o
                }
            ),
                this.resolve = b(t),
                this.reject = b(i)
        }
        function s(e) {
            return new Si(function(t, i) {
                    var o = document.createElement("img");
                    o.onload = function() {
                        return t(o)
                    }
                        ,
                        o.onerror = function() {
                            return i(new Error("Error loading image"))
                        }
                        ,
                        o.src = e
                }
            )
        }
        function r(e) {
            for (var t = e.length - 1; 0 < t; t--) {
                var o = c(Math.random() * (t + 1))
                    , n = [e[o], e[t]];
                e[t] = n[0],
                    e[o] = n[1]
            }
            return e
        }
        var a = Math.round
            , l = Math.max
            , d = Math.min
            , c = Math.floor
            , p = Math.ceil
            , m = "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global
            , g = "undefined" == typeof window ? "undefined" == typeof global ? "undefined" == typeof self ? {} : self : global : window
            , u = o(function(e, t) {
            t.__esModule = !0,
                t.default = function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }
        })
            , y = t(u)
            , x = o(function(e) {
                // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self // eslint-disable-next-line no-new-func
                    : Function("return this")();
                "number" == typeof __g && (__g = t)
            }// eslint-disable-line no-undef
        )
            , h = o(function(e) {
                var t = e.exports = {
                    version: "2.5.3"
                };
                "number" == typeof __e && (__e = t)
            }// eslint-disable-line no-undef
        )
            , v = h.version
            , b = function(e) {
            if ("function" != typeof e)
                throw TypeError(e + " is not a function!");
            return e
        }
            , S = function(e, t, i) {
            return (b(e),
            void 0 === t) ? e : 1 === i ? function(i) {
                    return e.call(t, i)
                }
                : 2 === i ? function(i, o) {
                        return e.call(t, i, o)
                    }
                    : 3 === i ? function(i, o, n) {
                            return e.call(t, i, o, n)
                        }
                        : function() /* ...args */
                        {
                            return e.apply(t, arguments)
                        }
        }
            , w = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
            , A = function(e) {
            if (!w(e))
                throw TypeError(e + " is not an object!");
            return e
        }
            , C = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
            , P = !C(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
            , B = x.document
            , _ = w(B) && w(B.createElement)
            , k = function(e) {
            return _ ? B.createElement(e) : {}
        }
            , I = !P && !C(function() {
            return 7 != Object.defineProperty(k("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
            , T = function(e, t) {
            if (!w(e))
                return e;
            var i, o;
            if (t && "function" == typeof (i = e.toString) && !w(o = i.call(e)))
                return o;
            if ("function" == typeof (i = e.valueOf) && !w(o = i.call(e)))
                return o;
            if (!t && "function" == typeof (i = e.toString) && !w(o = i.call(e)))
                return o;
            throw TypeError("Can't convert object to primitive value")
        }
            , R = Object.defineProperty
            , M = P ? Object.defineProperty : function(e, t, i) {
            if (A(e),
                t = T(t, !0),
                A(i),
                I)
                try {
                    return R(e, t, i)
                } catch (t) {/* empty */
                }
            if ("get"in i || "set"in i)
                throw TypeError("Accessors not supported!");
            return "value"in i && (e[t] = i.value),
                e
        }
            , f = {
            f: M
        }
            , E = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
            , V = P ? function(e, t, i) {
                return f.f(e, t, E(1, i))
            }
            : function(e, t, i) {
                return e[t] = i,
                    e
            }
            , j = function(e, t, i) {
            var o = e & j.F, n = e & j.G, s = e & j.S, r = e & j.P, a = e & j.B, l = e & j.W, d = n ? h : h[t] || (h[t] = {}), c = d.prototype, p = n ? x : s ? x[t] : (x[t] || {}).prototype, m, g, u;
            for (m in n && (i = t),
                i)
                g = !o && p && void 0 !== p[m],
                g && m in d || (u = g ? p[m] : i[m],
                    d[m] = n && "function" != typeof p[m] ? i[m]// bind timers to global for call from export context
                        : a && g ? S(u, x)// wrap global constructors for prevent change them in library
                            : l && p[m] == u ? function(e) {
                                var t = function(t, i, o) {
                                    if (this instanceof e) {
                                        switch (arguments.length) {
                                            case 0:
                                                return new e;
                                            case 1:
                                                return new e(t);
                                            case 2:
                                                return new e(t,i);
                                        }
                                        return new e(t,i,o)
                                    }
                                    return e.apply(this, arguments)
                                };
                                return t.prototype = e.prototype,
                                    t;
                                // make static versions for prototype methods
                            }(u) : r && "function" == typeof u ? S(Function.call, u) : u,
                r && ((d.virtual || (d.virtual = {}))[m] = u,
                e & j.R && c && !c[m] && V(c, m, u)))
        };
        // optional / simple context binding
        // Thank's IE8 for his funny defineProperty
        // typeof document.createElement is 'object' in old IE
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        // type bitmap
        j.F = 1,
            j.G = 2,
            j.S = 4,
            j.P = 8,
            j.B = 16,
            j.W = 32,
            j.U = 64,
            j.R = 128;
        // real proto method for `library`
        var L = j;
        // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
        L(L.S + L.F * !P, "Object", {
            defineProperty: f.f
        });
        var O = h.Object
            , F = function(e, t, i) {
            return O.defineProperty(e, t, i)
        }
            , W = o(function(e) {
            e.exports = {
                default: F,
                __esModule: !0
            }
        });
        t(W);
        var q = o(function(e, t) {
            t.__esModule = !0;
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(W);
            t.default = function() {
                function e(e, t) {
                    for (var n = 0, s; n < t.length; n++)
                        s = t[n],
                            s.enumerable = s.enumerable || !1,
                            s.configurable = !0,
                        "value"in s && (s.writable = !0),
                            (0,
                                o.default)(e, s.key, s)
                }
                return function(t, i, o) {
                    return i && e(t.prototype, i),
                    o && e(t, o),
                        t
                }
            }()
        })
            , D = t(q)
            , G = {}.hasOwnProperty
            , N = function(e, t) {
            return G.call(e, t)
        }
            , U = {}.toString
            , H = function(e) {
            return U.call(e).slice(8, -1)
        }
            , z = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == H(e) ? e.split("") : Object(e)
        }
            , Y = function(e) {
            if (e == null)
                throw TypeError("Can't call method on  " + e);
            return e
        }
            , $ = function(e) {
            return z(Y(e))
        }
            , Q = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? c : p)(e)
        }
            , X = function(e) {
            return 0 < e ? d(Q(e), 9007199254740991) : 0;
            // pow(2, 53) - 1 == 9007199254740991
        }
            , K = function(e, t) {
            return e = Q(e),
                0 > e ? l(e + t, 0) : d(e, t)
        }
            , Z = x["__core-js_shared__"] || (x["__core-js_shared__"] = {})
            , J = function(e) {
            return Z[e] || (Z[e] = {})
        }
            , ee = 0
            , te = Math.random()
            , ie = function(e) {
            return "Symbol(".concat(e === void 0 ? "" : e, ")_", (++ee + te).toString(36))
        }
            , oe = J("keys")
            , ne = function(e) {
            return oe[e] || (oe[e] = ie(e))
        }
            , se = function(e) {
            return function(t, i, o) {
                var n = $(t), s = X(n.length), r = K(o, s), a;
                // Array#includes uses SameValueZero equality algorithm
                // eslint-disable-next-line no-self-compare
                if (e && i != i) {
                    for (; s > r; )
                        // eslint-disable-next-line no-self-compare
                        if (a = n[r++],
                        a != a)
                            return !0;
                    // Array#indexOf ignores holes, Array#includes - not
                } else
                    for (; s > r; r++)
                        if ((e || r in n) && n[r] === i)
                            return e || r || 0;
                return !e && -1
            }
        }(!1)
            , re = ne("IE_PROTO")
            , ae = function(e, t) {
            var o = $(e), n = 0, s = [], r;
            for (r in o)
                r != re && N(o, r) && s.push(r);
            // Don't enum bug & hidden keys
            for (; t.length > n; )
                N(o, r = t[n++]) && (~se(s, r) || s.push(r));
            return s
        }
            , le = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            , de = Object.keys || function(e) {
            return ae(e, le)
        }
            , ce = Object.getOwnPropertySymbols
            , pe = {
            f: ce
        }
            , me = {}.propertyIsEnumerable
            , ge = {
            f: me
        }
            , ue = function(e) {
            return Object(Y(e))
        }
            , ye = Object.assign
            , xe = !ye || C(function() {
            var e = {}
                , t = {}
                , i = Symbol();
            // eslint-disable-next-line no-undef
            return e[i] = 7,
                ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"].forEach(function(e) {
                    t[e] = e
                }),
            7 != ye({}, e)[i] || "abcdefghijklmnopqrst" != Object.keys(ye({}, t)).join("")
        }) ? function(e) {
                for (// eslint-disable-line no-unused-vars
                    var t = ue(e), i = arguments.length, o = 1, n = pe.f, s = ge.f; i > o; )
                    for (var r = z(arguments[o++]), a = n ? de(r).concat(n(r)) : de(r), l = a.length, d = 0, c; l > d; )
                        s.call(r, c = a[d++]) && (t[c] = r[c]);
                return t
            }
            : ye;
        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        // eslint-disable-next-line no-prototype-builtins
        // 7.2.1 RequireObjectCoercible(argument)
        // to indexed object, toObject with fallback for non-array-like ES3 strings
        // 7.1.4 ToInteger
        // 7.1.15 ToLength
        // false -> Array#indexOf
        // true  -> Array#includes
        // IE 8- don't enum bug keys
        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        // 7.1.13 ToObject(argument)
        // 19.1.2.1 Object.assign(target, source, ...)
        // should work with symbols and should have deterministic property order (V8 bug)
        // 19.1.3.1 Object.assign(target, source)
        L(L.S + L.F, "Object", {
            assign: xe
        });
        var he = h.Object.assign
            , ve = o(function(e) {
            e.exports = {
                default: he,
                __esModule: !0
            }
        });
        t(ve);
        var be = o(function(e, t) {
            t.__esModule = !0;
            var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(ve);
            t.default = i.default || function(e) {
                for (var t = 1, o; t < arguments.length; t++)
                    for (var n in o = arguments[t],
                        o)
                        Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
                return e
            }
        })
            , fe = t(be)
            , Se = o(function(t) {
            (function(e) {
                    t.exports = e()
                }
            )(function() {
                var t = Math.sqrt
                    , o = Math.PI
                    , n = Math.pow
                    , s = Math.sin
                    , r = Math.cos
                    , m = Math.abs;
                return function d(c, t, n) {
                    function r(i, o) {
                        if (!t[i]) {
                            if (!c[i]) {
                                var p = "function" == typeof e && e;
                                if (!o && p)
                                    return p(i, !0);
                                if (s)
                                    return s(i, !0);
                                var a = new Error("Cannot find module '" + i + "'");
                                throw a.code = "MODULE_NOT_FOUND",
                                    a
                            }
                            var m = t[i] = {
                                exports: {}
                            };
                            c[i][0].call(m.exports, function(t) {
                                var e = c[i][1][t];
                                return r(e ? e : t)
                            }, m, m.exports, d, c, t, n)
                        }
                        return t[i].exports
                    }
                    for (var s = "function" == typeof e && e, i = 0; i < n.length; i++)
                        r(n[i]);
                    return r
                }({
                    1: [function(e, t) {
                        /**
                         * The `Matter.Body` module contains methods for creating and manipulating body models.
                         * A `Matter.Body` is a rigid body that can be simulated by a `Matter.Engine`.
                         * Factories for commonly used body configurations (such as rectangles, circles and other polygons) can be found in the module `Matter.Bodies`.
                         *
                         * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

                         * @class Body
                         */
                        var o = {};
                        t.exports = o;
                        var a = e("../geometry/Vertices")
                            , l = e("../geometry/Vector")
                            , i = e("../core/Sleeping")
                            , d = e("../render/Render")
                            , c = e("../core/Common")
                            , p = e("../geometry/Bounds")
                            , g = e("../geometry/Axes");
                        (function() {
                                o._inertiaScale = 4,
                                    o._nextCollidingGroupId = 1,
                                    o._nextNonCollidingGroupId = -1,
                                    o._nextCategory = 1,
                                    o.create = function(t) {
                                        var i = {
                                            id: c.nextId(),
                                            type: "body",
                                            label: "Body",
                                            parts: [],
                                            plugin: {},
                                            angle: 0,
                                            vertices: a.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                                            position: {
                                                x: 0,
                                                y: 0
                                            },
                                            force: {
                                                x: 0,
                                                y: 0
                                            },
                                            torque: 0,
                                            positionImpulse: {
                                                x: 0,
                                                y: 0
                                            },
                                            constraintImpulse: {
                                                x: 0,
                                                y: 0,
                                                angle: 0
                                            },
                                            totalContacts: 0,
                                            speed: 0,
                                            angularSpeed: 0,
                                            velocity: {
                                                x: 0,
                                                y: 0
                                            },
                                            angularVelocity: 0,
                                            isSensor: !1,
                                            isStatic: !1,
                                            isSleeping: !1,
                                            motion: 0,
                                            sleepThreshold: 60,
                                            density: .001,
                                            restitution: 0,
                                            friction: .1,
                                            frictionStatic: .5,
                                            frictionAir: .01,
                                            collisionFilter: {
                                                category: 1,
                                                mask: 4294967295,
                                                group: 0
                                            },
                                            slop: .05,
                                            timeScale: 1,
                                            render: {
                                                visible: !0,
                                                opacity: 1,
                                                sprite: {
                                                    xScale: 1,
                                                    yScale: 1,
                                                    xOffset: 0,
                                                    yOffset: 0
                                                },
                                                lineWidth: 0
                                            }
                                        }
                                            , o = c.extend(i, t);
                                        return e(o, t),
                                            o
                                    }
                                    ,
                                    o.nextGroup = function(e) {
                                        return e ? o._nextNonCollidingGroupId-- : o._nextCollidingGroupId++
                                    }
                                    ,
                                    o.nextCategory = function() {
                                        return o._nextCategory <<= 1,
                                            o._nextCategory
                                    }
                                ;
                                /**
                                 * Initialises body properties.
                                 * @method _initProperties
                                 * @private
                                 * @param {body} body
                                 * @param {} [options]
                                 */
                                var e = function(e, t) {
                                    t = t || {},
                                        o.set(e, {
                                            bounds: e.bounds || p.create(e.vertices),
                                            positionPrev: e.positionPrev || l.clone(e.position),
                                            anglePrev: e.anglePrev || e.angle,
                                            vertices: e.vertices,
                                            parts: e.parts || [e],
                                            isStatic: e.isStatic,
                                            isSleeping: e.isSleeping,
                                            parent: e.parent || e
                                        }),
                                        a.rotate(e.vertices, e.angle, e.position),
                                        g.rotate(e.axes, e.angle),
                                        p.update(e.bounds, e.vertices, e.velocity),
                                        o.set(e, {
                                            axes: t.axes || e.axes,
                                            area: t.area || e.area,
                                            mass: t.mass || e.mass,
                                            inertia: t.inertia || e.inertia
                                        });
                                    // render properties
                                    var i = e.isStatic ? "#2e2b44" : c.choose(["#006BA6", "#0496FF", "#FFBC42", "#D81159", "#8F2D56"]);
                                    e.render.fillStyle = e.render.fillStyle || i,
                                        e.render.strokeStyle = e.render.strokeStyle || "#000",
                                        e.render.sprite.xOffset += -(e.bounds.min.x - e.position.x) / (e.bounds.max.x - e.bounds.min.x),
                                        e.render.sprite.yOffset += -(e.bounds.min.y - e.position.y) / (e.bounds.max.y - e.bounds.min.y)
                                };
                                /**
                                 * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
                                 * Prefer to use the actual setter functions in performance critical situations.
                                 * @method set
                                 * @param {body} body
                                 * @param {} settings A property name (or map of properties and values) to set on the body.
                                 * @param {} value The value to set if `settings` is a single property name.
                                 */
                                o.set = function(e, t, n) {
                                    for (var s in "string" == typeof t && (s = t,
                                        t = {},
                                        t[s] = n),
                                        t)
                                        n = t[s],
                                        t.hasOwnProperty(s) && ("isStatic" === s ? o.setStatic(e, n) : "isSleeping" === s ? i.set(e, n) : "mass" === s ? o.setMass(e, n) : "density" === s ? o.setDensity(e, n) : "inertia" === s ? o.setInertia(e, n) : "vertices" === s ? o.setVertices(e, n) : "position" === s ? o.setPosition(e, n) : "angle" === s ? o.setAngle(e, n) : "velocity" === s ? o.setVelocity(e, n) : "angularVelocity" === s ? o.setAngularVelocity(e, n) : "parts" === s ? o.setParts(e, n) : e[s] = n)
                                }
                                    ,
                                    o.setStatic = function(e, t) {
                                        for (var o = 0, n; o < e.parts.length; o++)
                                            n = e.parts[o],
                                                n.isStatic = t,
                                                t ? (n._original = {
                                                    restitution: n.restitution,
                                                    friction: n.friction,
                                                    mass: n.mass,
                                                    inertia: n.inertia,
                                                    density: n.density,
                                                    inverseMass: n.inverseMass,
                                                    inverseInertia: n.inverseInertia
                                                },
                                                    n.restitution = 0,
                                                    n.friction = 1,
                                                    n.mass = n.inertia = n.density = 1 / 0,
                                                    n.inverseMass = n.inverseInertia = 0,
                                                    n.positionPrev.x = n.position.x,
                                                    n.positionPrev.y = n.position.y,
                                                    n.anglePrev = n.angle,
                                                    n.angularVelocity = 0,
                                                    n.speed = 0,
                                                    n.angularSpeed = 0,
                                                    n.motion = 0) : n._original && (n.restitution = n._original.restitution,
                                                    n.friction = n._original.friction,
                                                    n.mass = n._original.mass,
                                                    n.inertia = n._original.inertia,
                                                    n.density = n._original.density,
                                                    n.inverseMass = n._original.inverseMass,
                                                    n.inverseInertia = n._original.inverseInertia,
                                                    delete n._original)
                                    }
                                    ,
                                    o.setMass = function(e, t) {
                                        var i = e.inertia / (e.mass / 6);
                                        e.inertia = i * (t / 6),
                                            e.inverseInertia = 1 / e.inertia,
                                            e.mass = t,
                                            e.inverseMass = 1 / e.mass,
                                            e.density = e.mass / e.area
                                    }
                                    ,
                                    o.setDensity = function(e, t) {
                                        o.setMass(e, t * e.area),
                                            e.density = t
                                    }
                                    ,
                                    o.setInertia = function(e, t) {
                                        e.inertia = t,
                                            e.inverseInertia = 1 / e.inertia
                                    }
                                    ,
                                    o.setVertices = function(e, t) {
                                        e.vertices = t[0].body === e ? t : a.create(t, e),
                                            e.axes = g.fromVertices(e.vertices),
                                            e.area = a.area(e.vertices),
                                            o.setMass(e, e.density * e.area);
                                        // orient vertices around the centre of mass at origin (0, 0)
                                        var i = a.centre(e.vertices);
                                        a.translate(e.vertices, i, -1),
                                            o.setInertia(e, o._inertiaScale * a.inertia(e.vertices, e.mass)),
                                            a.translate(e.vertices, e.position),
                                            p.update(e.bounds, e.vertices, e.velocity)
                                    }
                                    ,
                                    o.setParts = function(e, t, n) {
                                        var s;
                                        // add all the parts, ensuring that the first part is always the parent body
                                        for (t = t.slice(0),
                                                 e.parts.length = 0,
                                                 e.parts.push(e),
                                                 e.parent = e,
                                                 s = 0; s < t.length; s++) {
                                            var r = t[s];
                                            r !== e && (r.parent = e,
                                                e.parts.push(r))
                                        }
                                        if (1 !== e.parts.length) {
                                            // find the convex hull of all parts to set on the parent body
                                            if (n = "undefined" == typeof n || n,
                                                n) {
                                                var l = [];
                                                for (s = 0; s < t.length; s++)
                                                    l = l.concat(t[s].vertices);
                                                a.clockwiseSort(l);
                                                var d = a.hull(l)
                                                    , c = a.centre(d);
                                                o.setVertices(e, d),
                                                    a.translate(e.vertices, c)
                                            }
                                            // sum the properties of all compound parts of the parent body
                                            var p = o._totalProperties(e);
                                            e.area = p.area,
                                                e.parent = e,
                                                e.position.x = p.centre.x,
                                                e.position.y = p.centre.y,
                                                e.positionPrev.x = p.centre.x,
                                                e.positionPrev.y = p.centre.y,
                                                o.setMass(e, p.mass),
                                                o.setInertia(e, p.inertia),
                                                o.setPosition(e, p.centre)
                                        }
                                    }
                                    ,
                                    o.setPosition = function(e, t) {
                                        var o = l.sub(t, e.position);
                                        e.positionPrev.x += o.x,
                                            e.positionPrev.y += o.y;
                                        for (var n = 0, s; n < e.parts.length; n++)
                                            s = e.parts[n],
                                                s.position.x += o.x,
                                                s.position.y += o.y,
                                                a.translate(s.vertices, o),
                                                p.update(s.bounds, s.vertices, e.velocity)
                                    }
                                    ,
                                    o.setAngle = function(e, t) {
                                        var o = t - e.angle;
                                        e.anglePrev += o;
                                        for (var n = 0, s; n < e.parts.length; n++)
                                            s = e.parts[n],
                                                s.angle += o,
                                                a.rotate(s.vertices, o, e.position),
                                                g.rotate(s.axes, o),
                                                p.update(s.bounds, s.vertices, e.velocity),
                                            0 < n && l.rotateAbout(s.position, o, e.position, s.position)
                                    }
                                    ,
                                    o.setVelocity = function(e, t) {
                                        e.positionPrev.x = e.position.x - t.x,
                                            e.positionPrev.y = e.position.y - t.y,
                                            e.velocity.x = t.x,
                                            e.velocity.y = t.y,
                                            e.speed = l.magnitude(e.velocity)
                                    }
                                    ,
                                    o.setAngularVelocity = function(e, t) {
                                        e.anglePrev = e.angle - t,
                                            e.angularVelocity = t,
                                            e.angularSpeed = m(e.angularVelocity)
                                    }
                                    ,
                                    o.translate = function(e, t) {
                                        o.setPosition(e, l.add(e.position, t))
                                    }
                                    ,
                                    o.rotate = function(e, t, i) {
                                        if (!i)
                                            o.setAngle(e, e.angle + t);
                                        else {
                                            var n = r(t)
                                                , a = s(t)
                                                , l = e.position.x - i.x
                                                , d = e.position.y - i.y;
                                            o.setPosition(e, {
                                                x: i.x + (l * n - d * a),
                                                y: i.y + (l * a + d * n)
                                            }),
                                                o.setAngle(e, e.angle + t)
                                        }
                                    }
                                    ,
                                    o.scale = function(e, t, n, s) {
                                        var r = 0
                                            , l = 0;
                                        s = s || e.position;
                                        for (var d = 0, c; d < e.parts.length; d++)
                                            c = e.parts[d],
                                                a.scale(c.vertices, t, n, s),
                                                c.axes = g.fromVertices(c.vertices),
                                                c.area = a.area(c.vertices),
                                                o.setMass(c, e.density * c.area),
                                                a.translate(c.vertices, {
                                                    x: -c.position.x,
                                                    y: -c.position.y
                                                }),
                                                o.setInertia(c, o._inertiaScale * a.inertia(c.vertices, c.mass)),
                                                a.translate(c.vertices, {
                                                    x: c.position.x,
                                                    y: c.position.y
                                                }),
                                            0 < d && (r += c.area,
                                                l += c.inertia),
                                                c.position.x = s.x + (c.position.x - s.x) * t,
                                                c.position.y = s.y + (c.position.y - s.y) * n,
                                                p.update(c.bounds, c.vertices, e.velocity);
                                        // handle parent body
                                        1 < e.parts.length && (e.area = r,
                                        !e.isStatic && (o.setMass(e, e.density * r),
                                            o.setInertia(e, l))),
                                        e.circleRadius && (t === n ? e.circleRadius *= t : e.circleRadius = null)
                                    }
                                    ,
                                    o.update = function(e, t, o, s) {
                                        var r = n(t * o * e.timeScale, 2)
                                            , d = 1 - e.frictionAir * o * e.timeScale
                                            , c = e.position.x - e.positionPrev.x
                                            , u = e.position.y - e.positionPrev.y;
                                        // from the previous step
                                        // update velocity with Verlet integration
                                        e.velocity.x = c * d * s + e.force.x / e.mass * r,
                                            e.velocity.y = u * d * s + e.force.y / e.mass * r,
                                            e.positionPrev.x = e.position.x,
                                            e.positionPrev.y = e.position.y,
                                            e.position.x += e.velocity.x,
                                            e.position.y += e.velocity.y,
                                            e.angularVelocity = (e.angle - e.anglePrev) * d * s + e.torque / e.inertia * r,
                                            e.anglePrev = e.angle,
                                            e.angle += e.angularVelocity,
                                            e.speed = l.magnitude(e.velocity),
                                            e.angularSpeed = m(e.angularVelocity);
                                        // transform the body geometry
                                        for (var y = 0, x; y < e.parts.length; y++)
                                            x = e.parts[y],
                                                a.translate(x.vertices, e.velocity),
                                            0 < y && (x.position.x += e.velocity.x,
                                                x.position.y += e.velocity.y),
                                            0 !== e.angularVelocity && (a.rotate(x.vertices, e.angularVelocity, e.position),
                                                g.rotate(x.axes, e.angularVelocity),
                                            0 < y && l.rotateAbout(x.position, e.angularVelocity, e.position, x.position)),
                                                p.update(x.bounds, x.vertices, e.velocity)
                                    }
                                    ,
                                    o.applyForce = function(e, t, i) {
                                        e.force.x += i.x,
                                            e.force.y += i.y;
                                        var o = {
                                            x: t.x - e.position.x,
                                            y: t.y - e.position.y
                                        };
                                        e.torque += o.x * i.y - o.y * i.x
                                    }
                                    ,
                                    o._totalProperties = function(e) {
                                        // sum the properties of all compound parts of the parent body
                                        for (var t = {
                                            mass: 0,
                                            area: 0,
                                            inertia: 0,
                                            centre: {
                                                x: 0,
                                                y: 0
                                            }
                                        }, o = 1 === e.parts.length ? 0 : 1; o < e.parts.length; o++) {
                                            var n = e.parts[o]
                                                , s = n.mass === 1 / 0 ? 1 : n.mass;
                                            t.mass += s,
                                                t.area += n.area,
                                                t.inertia += n.inertia,
                                                t.centre = l.add(t.centre, l.mult(n.position, s))
                                        }
                                        // from equations at:
                                        // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
                                        // http://output.to/sideway/default.asp?qno=121100087
                                        return t.centre = l.div(t.centre, t.mass),
                                            t
                                    }
                            }
                        )()
                    }
                        , {
                            "../core/Common": 14,
                            "../core/Sleeping": 22,
                            "../geometry/Axes": 25,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29,
                            "../render/Render": 31
                        }],
                    2: [function(e, t) {
                        /**
                         * The `Matter.Composite` module contains methods for creating and manipulating composite bodies.
                         * A composite body is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite`, therefore composites form a tree structure.
                         * It is important to use the functions in this module to modify composites, rather than directly modifying their properties.
                         * Note that the `Matter.World` object is also a type of `Matter.Composite` and as such all composite methods here can also operate on a `Matter.World`.
                         *
                         * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
                         *
                         * @class Composite
                         */
                        var o = {};
                        t.exports = o;
                        var n = e("../core/Events")
                            , a = e("../core/Common")
                            , l = e("./Body");
                        (function() {
                                o.create = function(e) {
                                    return a.extend({
                                        id: a.nextId(),
                                        type: "composite",
                                        parent: null,
                                        isModified: !1,
                                        bodies: [],
                                        constraints: [],
                                        composites: [],
                                        label: "Composite",
                                        plugin: {}
                                    }, e)
                                }
                                    ,
                                    o.setModified = function(e, t, n, s) {
                                        if (e.isModified = t,
                                        n && e.parent && o.setModified(e.parent, t, n, s),
                                            s)
                                            for (var r = 0, a; r < e.composites.length; r++)
                                                a = e.composites[r],
                                                    o.setModified(a, t, n, s)
                                    }
                                    ,
                                    o.add = function(e, t) {
                                        var s = [].concat(t);
                                        n.trigger(e, "beforeAdd", {
                                            object: t
                                        });
                                        for (var r = 0, l; r < s.length; r++)
                                            switch (l = s[r],
                                                l.type) {
                                                case "body":
                                                    // skip adding compound parts
                                                    if (l.parent !== l) {
                                                        a.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                                                        break
                                                    }
                                                    o.addBody(e, l);
                                                    break;
                                                case "constraint":
                                                    o.addConstraint(e, l);
                                                    break;
                                                case "composite":
                                                    o.addComposite(e, l);
                                                    break;
                                                case "mouseConstraint":
                                                    o.addConstraint(e, l.constraint);
                                            }
                                        return n.trigger(e, "afterAdd", {
                                            object: t
                                        }),
                                            e
                                    }
                                    ,
                                    o.remove = function(e, t, s) {
                                        var r = [].concat(t);
                                        n.trigger(e, "beforeRemove", {
                                            object: t
                                        });
                                        for (var a = 0, l; a < r.length; a++)
                                            switch (l = r[a],
                                                l.type) {
                                                case "body":
                                                    o.removeBody(e, l, s);
                                                    break;
                                                case "constraint":
                                                    o.removeConstraint(e, l, s);
                                                    break;
                                                case "composite":
                                                    o.removeComposite(e, l, s);
                                                    break;
                                                case "mouseConstraint":
                                                    o.removeConstraint(e, l.constraint);
                                            }
                                        return n.trigger(e, "afterRemove", {
                                            object: t
                                        }),
                                            e
                                    }
                                    ,
                                    o.addComposite = function(e, t) {
                                        return e.composites.push(t),
                                            t.parent = e,
                                            o.setModified(e, !0, !0, !1),
                                            e
                                    }
                                    ,
                                    o.removeComposite = function(e, t, n) {
                                        var s = a.indexOf(e.composites, t);
                                        if (-1 !== s && (o.removeCompositeAt(e, s),
                                            o.setModified(e, !0, !0, !1)),
                                            n)
                                            for (var r = 0; r < e.composites.length; r++)
                                                o.removeComposite(e.composites[r], t, !0);
                                        return e
                                    }
                                    ,
                                    o.removeCompositeAt = function(e, t) {
                                        return e.composites.splice(t, 1),
                                            o.setModified(e, !0, !0, !1),
                                            e
                                    }
                                    ,
                                    o.addBody = function(e, t) {
                                        return e.bodies.push(t),
                                            o.setModified(e, !0, !0, !1),
                                            e
                                    }
                                    ,
                                    o.removeBody = function(e, t, n) {
                                        var s = a.indexOf(e.bodies, t);
                                        if (-1 !== s && (o.removeBodyAt(e, s),
                                            o.setModified(e, !0, !0, !1)),
                                            n)
                                            for (var r = 0; r < e.composites.length; r++)
                                                o.removeBody(e.composites[r], t, !0);
                                        return e
                                    }
                                    ,
                                    o.removeBodyAt = function(e, t) {
                                        return e.bodies.splice(t, 1),
                                            o.setModified(e, !0, !0, !1),
                                            e
                                    }
                                    ,
                                    o.addConstraint = function(e, t) {
                                        return e.constraints.push(t),
                                            o.setModified(e, !0, !0, !1),
                                            e
                                    }
                                    ,
                                    o.removeConstraint = function(e, t, n) {
                                        var s = a.indexOf(e.constraints, t);
                                        if (-1 !== s && o.removeConstraintAt(e, s),
                                            n)
                                            for (var r = 0; r < e.composites.length; r++)
                                                o.removeConstraint(e.composites[r], t, !0);
                                        return e
                                    }
                                    ,
                                    o.removeConstraintAt = function(e, t) {
                                        return e.constraints.splice(t, 1),
                                            o.setModified(e, !0, !0, !1),
                                            e
                                    }
                                    ,
                                    o.clear = function(e, t, n) {
                                        if (n)
                                            for (var s = 0; s < e.composites.length; s++)
                                                o.clear(e.composites[s], t, !0);
                                        return t ? e.bodies = e.bodies.filter(function(e) {
                                            return e.isStatic
                                        }) : e.bodies.length = 0,
                                            e.constraints.length = 0,
                                            e.composites.length = 0,
                                            o.setModified(e, !0, !0, !1),
                                            e
                                    }
                                    ,
                                    o.allBodies = function(e) {
                                        for (var t = [].concat(e.bodies), n = 0; n < e.composites.length; n++)
                                            t = t.concat(o.allBodies(e.composites[n]));
                                        return t
                                    }
                                    ,
                                    o.allConstraints = function(e) {
                                        for (var t = [].concat(e.constraints), n = 0; n < e.composites.length; n++)
                                            t = t.concat(o.allConstraints(e.composites[n]));
                                        return t
                                    }
                                    ,
                                    o.allComposites = function(e) {
                                        for (var t = [].concat(e.composites), n = 0; n < e.composites.length; n++)
                                            t = t.concat(o.allComposites(e.composites[n]));
                                        return t
                                    }
                                    ,
                                    o.get = function(e, t, i) {
                                        var n, s;
                                        return ("body" === i ? n = o.allBodies(e) : "constraint" === i ? n = o.allConstraints(e) : "composite" === i ? n = o.allComposites(e).concat(e) : void 0,
                                            !n) ? null : (s = n.filter(function(e) {
                                            return e.id.toString() === t.toString()
                                        }),
                                            0 === s.length ? null : s[0])
                                    }
                                    ,
                                    o.move = function(e, t, i) {
                                        return o.remove(e, t),
                                            o.add(i, t),
                                            e
                                    }
                                    ,
                                    o.rebase = function(e) {
                                        for (var t = o.allBodies(e).concat(o.allConstraints(e)).concat(o.allComposites(e)), n = 0; n < t.length; n++)
                                            t[n].id = a.nextId();
                                        return o.setModified(e, !0, !0, !1),
                                            e
                                    }
                                    ,
                                    o.translate = function(e, t, n) {
                                        for (var s = n ? o.allBodies(e) : e.bodies, r = 0; r < s.length; r++)
                                            l.translate(s[r], t);
                                        return o.setModified(e, !0, !0, !1),
                                            e
                                    }
                                    ,
                                    o.rotate = function(e, t, n, a) {
                                        for (var d = r(t), c = s(t), p = a ? o.allBodies(e) : e.bodies, m = 0; m < p.length; m++) {
                                            var g = p[m]
                                                , u = g.position.x - n.x
                                                , y = g.position.y - n.y;
                                            l.setPosition(g, {
                                                x: n.x + (u * d - y * c),
                                                y: n.y + (u * c + y * d)
                                            }),
                                                l.rotate(g, t)
                                        }
                                        return o.setModified(e, !0, !0, !1),
                                            e
                                    }
                                    ,
                                    o.scale = function(e, t, n, s, r) {
                                        for (var a = r ? o.allBodies(e) : e.bodies, d = 0; d < a.length; d++) {
                                            var c = a[d]
                                                , p = c.position.x - s.x
                                                , m = c.position.y - s.y;
                                            l.setPosition(c, {
                                                x: s.x + p * t,
                                                y: s.y + m * n
                                            }),
                                                l.scale(c, t, n)
                                        }
                                        return o.setModified(e, !0, !0, !1),
                                            e
                                    }
                                    ,
                                    o.bounds = function(e) {
                                        for (var t = Matter.Composite.allBodies(e), o = [], n = 0, s; n < t.length; n += 1)
                                            s = t[n],
                                                o.push(s.bounds.min, s.bounds.max);
                                        return Matter.Bounds.create(o)
                                    }
                            }
                        )()
                    }
                        , {
                            "../core/Common": 14,
                            "../core/Events": 16,
                            "./Body": 1
                        }],
                    3: [function(e, t) {
                        /**
                         * The `Matter.World` module contains methods for creating and manipulating the world composite.
                         * A `Matter.World` is a `Matter.Composite` body, which is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite`.
                         * A `Matter.World` has a few additional properties including `gravity` and `bounds`.
                         * It is important to use the functions in the `Matter.Composite` module to modify the world composite, rather than directly modifying its properties.
                         * There are also a few methods here that alias those in `Matter.Composite` for easier readability.
                         *
                         * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
                         *
                         * @class World
                         * @extends Composite
                         */
                        var i = {};
                        t.exports = i;
                        var o = e("./Composite")
                            , n = e("../constraint/Constraint")
                            , s = e("../core/Common");
                        (function() {
                                i.create = function(e) {
                                    var t = o.create()
                                        , i = {
                                        label: "World",
                                        gravity: {
                                            x: 0,
                                            y: 1,
                                            scale: .001
                                        },
                                        bounds: {
                                            min: {
                                                x: -Infinity,
                                                y: -Infinity
                                            },
                                            max: {
                                                x: 1 / 0,
                                                y: 1 / 0
                                            }
                                        }
                                    };
                                    return s.extend(t, i, e)
                                }
                            }
                        )()
                    }
                        , {
                            "../constraint/Constraint": 12,
                            "../core/Common": 14,
                            "./Composite": 2
                        }],
                    4: [function(e, t) {
                        /**
                         * The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
                         *
                         * @class Contact
                         */
                        var i = {};
                        t.exports = i,
                            function() {
                                i.create = function(e) {
                                    return {
                                        id: i.id(e),
                                        vertex: e,
                                        normalImpulse: 0,
                                        tangentImpulse: 0
                                    }
                                }
                                    ,
                                    i.id = function(e) {
                                        return e.body.id + "_" + e.index
                                    }
                            }()
                    }
                        , {}],
                    5: [function(e, t) {
                        /**
                         * The `Matter.Detector` module contains methods for detecting collisions given a set of pairs.
                         *
                         * @class Detector
                         */
                            // TODO: speculative contacts
                        var o = {};
                        t.exports = o;
                        var i = e("./SAT")
                            , n = e("./Pair")
                            , s = e("../geometry/Bounds");
                        (function() {
                                o.collisions = function(e, t) {
                                    for (var r = [], a = t.pairs.table, l = 0; l < e.length; l++) {
                                        var d = e[l][0]
                                            , c = e[l][1];
                                        // mid phase
                                        if (!((d.isStatic || d.isSleeping) && (c.isStatic || c.isSleeping)) && o.canCollide(d.collisionFilter, c.collisionFilter) && s.overlaps(d.bounds, c.bounds))
                                            for (var p = 1 < d.parts.length ? 1 : 0, m; p < d.parts.length; p++) {
                                                m = d.parts[p];
                                                for (var g = 1 < c.parts.length ? 1 : 0, u; g < c.parts.length; g++)
                                                    if (u = c.parts[g],
                                                    m === d && u === c || s.overlaps(m.bounds, u.bounds)) {
                                                        // find a previous collision we could reuse
                                                        var y = n.id(m, u), x = a[y], h;
                                                        h = x && x.isActive ? x.collision : null;
                                                        // narrow phase
                                                        var v = i.collides(m, u, h);
                                                        v.collided && r.push(v)
                                                    }
                                            }
                                    }
                                    return r
                                }
                                    ,
                                    o.canCollide = function(e, t) {
                                        return e.group === t.group && 0 !== e.group ? 0 < e.group : 0 != (e.mask & t.category) && 0 != (t.mask & e.category)
                                    }
                            }
                        )()
                    }
                        , {
                            "../geometry/Bounds": 26,
                            "./Pair": 7,
                            "./SAT": 11
                        }],
                    6: [function(e, t) {
                        /**
                         * The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
                         *
                         * @class Grid
                         */
                        var o = {};
                        t.exports = o;
                        var n = e("./Pair")
                            , i = e("./Detector")
                            , s = e("../core/Common");
                        (function() {
                                o.create = function(e) {
                                    var t = {
                                        controller: o,
                                        detector: i.collisions,
                                        buckets: {},
                                        pairs: {},
                                        pairsList: [],
                                        bucketWidth: 48,
                                        bucketHeight: 48
                                    };
                                    return s.extend(t, e)
                                }
                                    ,
                                    o.update = function(e, t, n, s) {
                                        var r = n.world, a = e.buckets, l = !1, d, c, p, m, g;
                                        for (d = 0; d < t.length; d++) {
                                            var u = t[d];
                                            // if the body has changed grid region
                                            if ((!u.isSleeping || s) && !(u.bounds.max.x < r.bounds.min.x || u.bounds.min.x > r.bounds.max.x || u.bounds.max.y < r.bounds.min.y || u.bounds.min.y > r.bounds.max.y)) // don't update out of world bodies
                                            {
                                                var y = o._getRegion(e, u);
                                                if (!u.region || y.id !== u.region.id || s) {
                                                    (!u.region || s) && (u.region = y);
                                                    var x = o._regionUnion(y, u.region);
                                                    // update grid buckets affected by region change
                                                    // iterate over the union of both regions
                                                    for (c = x.startCol; c <= x.endCol; c++)
                                                        for (p = x.startRow; p <= x.endRow; p++) {
                                                            g = o._getBucketId(c, p),
                                                                m = a[g];
                                                            var h = c >= y.startCol && c <= y.endCol && p >= y.startRow && p <= y.endRow
                                                                , v = c >= u.region.startCol && c <= u.region.endCol && p >= u.region.startRow && p <= u.region.endRow;
                                                            !h && v && v && m && o._bucketRemoveBody(e, m, u),
                                                            (u.region === y || h && !v || s) && (!m && (m = o._createBucket(a, g)),
                                                                o._bucketAddBody(e, m, u))
                                                        }
                                                    // set the new region
                                                    u.region = y,
                                                        l = !0
                                                }
                                            }
                                        }
                                        // update pairs list only if pairs changed (i.e. a body changed region)
                                        l && (e.pairsList = o._createActivePairsList(e))
                                    }
                                    ,
                                    o.clear = function(e) {
                                        e.buckets = {},
                                            e.pairs = {},
                                            e.pairsList = []
                                    }
                                    ,
                                    o._regionUnion = function(e, t) {
                                        var i = d(e.startCol, t.startCol)
                                            , n = l(e.endCol, t.endCol)
                                            , s = d(e.startRow, t.startRow)
                                            , r = l(e.endRow, t.endRow);
                                        return o._createRegion(i, n, s, r)
                                    }
                                    ,
                                    o._getRegion = function(e, t) {
                                        var i = t.bounds
                                            , n = c(i.min.x / e.bucketWidth)
                                            , s = c(i.max.x / e.bucketWidth)
                                            , r = c(i.min.y / e.bucketHeight)
                                            , a = c(i.max.y / e.bucketHeight);
                                        return o._createRegion(n, s, r, a)
                                    }
                                    ,
                                    o._createRegion = function(e, t, i, o) {
                                        return {
                                            id: e + "," + t + "," + i + "," + o,
                                            startCol: e,
                                            endCol: t,
                                            startRow: i,
                                            endRow: o
                                        }
                                    }
                                    ,
                                    o._getBucketId = function(e, t) {
                                        return "C" + e + "R" + t
                                    }
                                    ,
                                    o._createBucket = function(e, t) {
                                        var i = e[t] = [];
                                        return i
                                    }
                                    ,
                                    o._bucketAddBody = function(e, t, o) {
                                        // add new pairs
                                        for (var s = 0, r; s < t.length; s++)
                                            if (r = t[s],
                                                !(o.id === r.id || o.isStatic && r.isStatic)) {
                                                // keep track of the number of buckets the pair exists in
                                                // important for Grid.update to work
                                                var a = n.id(o, r)
                                                    , l = e.pairs[a];
                                                l ? l[2] += 1 : e.pairs[a] = [o, r, 1]
                                            }
                                        // add to bodies (after pairs, otherwise pairs with self)
                                        t.push(o)
                                    }
                                    ,
                                    o._bucketRemoveBody = function(e, t, o) {
                                        t.splice(s.indexOf(t, o), 1);
                                        // update pair counts
                                        for (var r = 0; r < t.length; r++) {
                                            // keep track of the number of buckets the pair exists in
                                            // important for _createActivePairsList to work
                                            var a = t[r]
                                                , l = n.id(o, a)
                                                , d = e.pairs[l];
                                            d && (d[2] -= 1)
                                        }
                                    }
                                    ,
                                    o._createActivePairsList = function(e) {
                                        var t = [], i, o;
                                        // grid.pairs is used as a hashmap
                                        i = s.keys(e.pairs);
                                        // iterate over grid.pairs
                                        for (var n = 0; n < i.length; n++)
                                            o = e.pairs[i[n]],
                                                0 < o[2] ? t.push(o) : delete e.pairs[i[n]];
                                        return t
                                    }
                            }
                        )()
                    }
                        , {
                            "../core/Common": 14,
                            "./Detector": 5,
                            "./Pair": 7
                        }],
                    7: [function(e, t) {
                        /**
                         * The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
                         *
                         * @class Pair
                         */
                        var o = {};
                        t.exports = o;
                        var n = e("./Contact");
                        (function() {
                                o.create = function(e, t) {
                                    var i = e.bodyA
                                        , n = e.bodyB
                                        , s = e.parentA
                                        , r = e.parentB
                                        , a = {
                                        id: o.id(i, n),
                                        bodyA: i,
                                        bodyB: n,
                                        contacts: {},
                                        activeContacts: [],
                                        separation: 0,
                                        isActive: !0,
                                        isSensor: i.isSensor || n.isSensor,
                                        timeCreated: t,
                                        timeUpdated: t,
                                        inverseMass: s.inverseMass + r.inverseMass,
                                        friction: d(s.friction, r.friction),
                                        frictionStatic: l(s.frictionStatic, r.frictionStatic),
                                        restitution: l(s.restitution, r.restitution),
                                        slop: l(s.slop, r.slop)
                                    };
                                    return o.update(a, e, t),
                                        a
                                }
                                    ,
                                    o.update = function(e, t, s) {
                                        var r = e.contacts
                                            , a = t.supports
                                            , c = e.activeContacts
                                            , p = t.parentA
                                            , m = t.parentB;
                                        if (e.collision = t,
                                            e.inverseMass = p.inverseMass + m.inverseMass,
                                            e.friction = d(p.friction, m.friction),
                                            e.frictionStatic = l(p.frictionStatic, m.frictionStatic),
                                            e.restitution = l(p.restitution, m.restitution),
                                            e.slop = l(p.slop, m.slop),
                                            c.length = 0,
                                            t.collided) {
                                            for (var g = 0; g < a.length; g++) {
                                                var u = a[g]
                                                    , y = n.id(u)
                                                    , x = r[y];
                                                x ? c.push(x) : c.push(r[y] = n.create(u))
                                            }
                                            e.separation = t.depth,
                                                o.setActive(e, !0, s)
                                        } else
                                            !0 === e.isActive && o.setActive(e, !1, s)
                                    }
                                    ,
                                    o.setActive = function(e, t, i) {
                                        t ? (e.isActive = !0,
                                            e.timeUpdated = i) : (e.isActive = !1,
                                            e.activeContacts.length = 0)
                                    }
                                    ,
                                    o.id = function(e, t) {
                                        return e.id < t.id ? "A" + e.id + "B" + t.id : "A" + t.id + "B" + e.id
                                    }
                            }
                        )()
                    }
                        , {
                            "./Contact": 4
                        }],
                    8: [function(e, t) {
                        /**
                         * The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
                         *
                         * @class Pairs
                         */
                        var o = {};
                        t.exports = o;
                        var n = e("./Pair")
                            , s = e("../core/Common");
                        (function() {
                                o._pairMaxIdleLife = 1e3,
                                    o.create = function(e) {
                                        return s.extend({
                                            table: {},
                                            list: [],
                                            collisionStart: [],
                                            collisionActive: [],
                                            collisionEnd: []
                                        }, e)
                                    }
                                    ,
                                    o.update = function(e, t, o) {
                                        var r = e.list, a = e.table, l = e.collisionStart, d = e.collisionEnd, c = e.collisionActive, p = [], m, g, u, y;
                                        // clear collision state arrays, but maintain old reference
                                        for (l.length = 0,
                                                 d.length = 0,
                                                 c.length = 0,
                                                 y = 0; y < t.length; y++)
                                            m = t[y],
                                            m.collided && (g = n.id(m.bodyA, m.bodyB),
                                                p.push(g),
                                                u = a[g],
                                                u ? (u.isActive ? c.push(u) : l.push(u),
                                                    n.update(u, m, o)) : (u = n.create(m, o),
                                                    a[g] = u,
                                                    l.push(u),
                                                    r.push(u)));
                                        // deactivate previously active pairs that are now inactive
                                        for (y = 0; y < r.length; y++)
                                            u = r[y],
                                            u.isActive && -1 === s.indexOf(p, u.id) && (n.setActive(u, !1, o),
                                                d.push(u))
                                    }
                                    ,
                                    o.removeOld = function(e, t) {
                                        var n = e.list, s = e.table, r = [], a, l, d, c;
                                        for (c = 0; c < n.length; c++) {
                                            // never remove sleeping pairs
                                            if (a = n[c],
                                                l = a.collision,
                                            l.bodyA.isSleeping || l.bodyB.isSleeping) {
                                                a.timeUpdated = t;
                                                continue
                                            }
                                            // if pair is inactive for too long, mark it to be removed
                                            t - a.timeUpdated > o._pairMaxIdleLife && r.push(c)
                                        }
                                        // remove marked pairs
                                        for (c = 0; c < r.length; c++)
                                            d = r[c] - c,
                                                a = n[d],
                                                delete s[a.id],
                                                n.splice(d, 1)
                                    }
                                    ,
                                    o.clear = function(e) {
                                        return e.table = {},
                                            e.list.length = 0,
                                            e.collisionStart.length = 0,
                                            e.collisionActive.length = 0,
                                            e.collisionEnd.length = 0,
                                            e
                                    }
                            }
                        )()
                    }
                        , {
                            "../core/Common": 14,
                            "./Pair": 7
                        }],
                    9: [function(e, t) {
                        /**
                         * The `Matter.Query` module contains methods for performing collision queries.
                         *
                         * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
                         *
                         * @class Query
                         */
                        var o = {};
                        t.exports = o;
                        var n = e("../geometry/Vector")
                            , i = e("./SAT")
                            , s = e("../geometry/Bounds")
                            , r = e("../factory/Bodies")
                            , a = e("../geometry/Vertices");
                        (function() {
                                o.collides = function(e, t) {
                                    for (var o = [], n = 0, r; n < t.length; n++)
                                        if (r = t[n],
                                            s.overlaps(r.bounds, e.bounds))
                                            for (var a = 1 === r.parts.length ? 0 : 1, l; a < r.parts.length; a++)
                                                if (l = r.parts[a],
                                                    s.overlaps(l.bounds, e.bounds)) {
                                                    var d = i.collides(l, e);
                                                    if (d.collided) {
                                                        o.push(d);
                                                        break
                                                    }
                                                }
                                    return o
                                }
                                    ,
                                    o.ray = function(e, t, s, a) {
                                        a = a || 1e-100;
                                        for (var l = n.angle(t, s), d = n.magnitude(n.sub(t, s)), c = .5 * (s.x + t.x), p = .5 * (s.y + t.y), m = r.rectangle(c, p, d, a, {
                                            angle: l
                                        }), g = o.collides(m, e), u = 0, y; u < g.length; u += 1)
                                            y = g[u],
                                                y.body = y.bodyB = y.bodyA;
                                        return g
                                    }
                                    ,
                                    o.region = function(e, t, o) {
                                        for (var n = [], r = 0; r < e.length; r++) {
                                            var a = e[r]
                                                , l = s.overlaps(a.bounds, t);
                                            (l && !o || !l && o) && n.push(a)
                                        }
                                        return n
                                    }
                                    ,
                                    o.point = function(e, t) {
                                        for (var o = [], n = 0, r; n < e.length; n++)
                                            if (r = e[n],
                                                s.contains(r.bounds, t))
                                                for (var l = 1 === r.parts.length ? 0 : 1, d; l < r.parts.length; l++)
                                                    if (d = r.parts[l],
                                                    s.contains(d.bounds, t) && a.contains(d.vertices, t)) {
                                                        o.push(r);
                                                        break
                                                    }
                                        return o
                                    }
                            }
                        )()
                    }
                        , {
                            "../factory/Bodies": 23,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29,
                            "./SAT": 11
                        }],
                    10: [function(e, t) {
                        /**
                         * The `Matter.Resolver` module contains methods for resolving collision pairs.
                         *
                         * @class Resolver
                         */
                        var o = {};
                        t.exports = o;
                        var i = e("../geometry/Vertices")
                            , n = e("../geometry/Vector")
                            , s = e("../core/Common")
                            , r = e("../geometry/Bounds");
                        (function() {
                                o._restingThresh = 4,
                                    o._restingThreshTangent = 6,
                                    o._positionDampen = .9,
                                    o._positionWarming = .8,
                                    o._frictionNormalMultiplier = 5,
                                    o.preSolvePosition = function(e) {
                                        var t, o, n;
                                        // find total contacts on each body
                                        for (t = 0; t < e.length; t++)
                                            o = e[t],
                                            o.isActive && (n = o.activeContacts.length,
                                                o.collision.parentA.totalContacts += n,
                                                o.collision.parentB.totalContacts += n)
                                    }
                                    ,
                                    o.solvePosition = function(e, t) {
                                        var s = n._temp[0], r = n._temp[1], a = n._temp[2], l = n._temp[3], d, c, p, m, g, u, y, x, h;
                                        // find impulses required to resolve penetration
                                        for (d = 0; d < e.length; d++)
                                            c = e[d],
                                            !c.isActive || c.isSensor || (p = c.collision,
                                                m = p.parentA,
                                                g = p.parentB,
                                                u = p.normal,
                                                y = n.sub(n.add(g.positionImpulse, g.position, s), n.add(m.positionImpulse, n.sub(g.position, p.penetration, r), a), l),
                                                c.separation = n.dot(u, y));
                                        for (d = 0; d < e.length; d++)
                                            c = e[d],
                                            !c.isActive || c.isSensor || (p = c.collision,
                                                m = p.parentA,
                                                g = p.parentB,
                                                u = p.normal,
                                                h = (c.separation - c.slop) * t,
                                            (m.isStatic || g.isStatic) && (h *= 2),
                                            !(m.isStatic || m.isSleeping) && (x = o._positionDampen / m.totalContacts,
                                                m.positionImpulse.x += u.x * h * x,
                                                m.positionImpulse.y += u.y * h * x),
                                            !(g.isStatic || g.isSleeping) && (x = o._positionDampen / g.totalContacts,
                                                g.positionImpulse.x -= u.x * h * x,
                                                g.positionImpulse.y -= u.y * h * x))
                                    }
                                    ,
                                    o.postSolvePosition = function(e) {
                                        for (var t = 0, s; t < e.length; t++)
                                            if (s = e[t],
                                                s.totalContacts = 0,
                                            0 !== s.positionImpulse.x || 0 !== s.positionImpulse.y) {
                                                // update body geometry
                                                for (var a = 0, l; a < s.parts.length; a++)
                                                    l = s.parts[a],
                                                        i.translate(l.vertices, s.positionImpulse),
                                                        r.update(l.bounds, l.vertices, s.velocity),
                                                        l.position.x += s.positionImpulse.x,
                                                        l.position.y += s.positionImpulse.y;
                                                // move the body without changing velocity
                                                s.positionPrev.x += s.positionImpulse.x,
                                                    s.positionPrev.y += s.positionImpulse.y,
                                                    0 > n.dot(s.positionImpulse, s.velocity) ? (s.positionImpulse.x = 0,
                                                        s.positionImpulse.y = 0) : (s.positionImpulse.x *= o._positionWarming,
                                                        s.positionImpulse.y *= o._positionWarming)
                                            }
                                    }
                                    ,
                                    o.preSolveVelocity = function(e) {
                                        var t = n._temp[0], o = n._temp[1], s, r, a, l, d, c, p, m, g, u, y, x, h, v;
                                        for (s = 0; s < e.length; s++)
                                            if (a = e[s],
                                            a.isActive && !a.isSensor)
                                            // resolve each contact
                                                for (l = a.activeContacts,
                                                         d = a.collision,
                                                         c = d.parentA,
                                                         p = d.parentB,
                                                         m = d.normal,
                                                         g = d.tangent,
                                                         r = 0; r < l.length; r++)
                                                    u = l[r],
                                                        y = u.vertex,
                                                        x = u.normalImpulse,
                                                        h = u.tangentImpulse,
                                                    (0 !== x || 0 !== h) && (t.x = m.x * x + g.x * h,
                                                        t.y = m.y * x + g.y * h,
                                                    !(c.isStatic || c.isSleeping) && (v = n.sub(y, c.position, o),
                                                        c.positionPrev.x += t.x * c.inverseMass,
                                                        c.positionPrev.y += t.y * c.inverseMass,
                                                        c.anglePrev += n.cross(v, t) * c.inverseInertia),
                                                    !(p.isStatic || p.isSleeping) && (v = n.sub(y, p.position, o),
                                                        p.positionPrev.x -= t.x * p.inverseMass,
                                                        p.positionPrev.y -= t.y * p.inverseMass,
                                                        p.anglePrev -= n.cross(v, t) * p.inverseInertia))
                                    }
                                    ,
                                    o.solveVelocity = function(e, t) {
                                        for (var r = t * t, a = n._temp[0], l = n._temp[1], c = n._temp[2], p = n._temp[3], g = n._temp[4], u = n._temp[5], y = 0, x; y < e.length; y++)
                                            if (x = e[y],
                                            x.isActive && !x.isSensor) {
                                                var h = x.collision
                                                    , v = h.parentA
                                                    , b = h.parentB
                                                    , f = h.normal
                                                    , S = h.tangent
                                                    , C = x.activeContacts
                                                    , w = 1 / C.length;
                                                // update body velocities
                                                v.velocity.x = v.position.x - v.positionPrev.x,
                                                    v.velocity.y = v.position.y - v.positionPrev.y,
                                                    b.velocity.x = b.position.x - b.positionPrev.x,
                                                    b.velocity.y = b.position.y - b.positionPrev.y,
                                                    v.angularVelocity = v.angle - v.anglePrev,
                                                    b.angularVelocity = b.angle - b.anglePrev;
                                                // resolve each contact
                                                for (var P = 0; P < C.length; P++) {
                                                    var A = C[P]
                                                        , B = A.vertex
                                                        , _ = n.sub(B, v.position, l)
                                                        , k = n.sub(B, b.position, c)
                                                        , I = n.add(v.velocity, n.mult(n.perp(_), v.angularVelocity), p)
                                                        , T = n.add(b.velocity, n.mult(n.perp(k), b.angularVelocity), g)
                                                        , R = n.sub(I, T, u)
                                                        , M = n.dot(f, R)
                                                        , E = n.dot(S, R)
                                                        , V = m(E)
                                                        , L = s.sign(E)
                                                        , O = (1 + x.restitution) * M
                                                        , F = s.clamp(x.separation + M, 0, 1) * o._frictionNormalMultiplier
                                                        , W = E
                                                        , q = 1 / 0;
                                                    // raw impulses
                                                    // coulomb friction
                                                    V > x.friction * x.frictionStatic * F * r && (q = V,
                                                        W = s.clamp(x.friction * L * r, -q, q));
                                                    // modify impulses accounting for mass, inertia and offset
                                                    var D = n.cross(_, f)
                                                        , G = n.cross(k, f)
                                                        , N = w / (v.inverseMass + b.inverseMass + v.inverseInertia * D * D + b.inverseInertia * G * G);
                                                    // handle high velocity and resting collisions separately
                                                    if (O *= N,
                                                        W *= N,
                                                    0 > M && M * M > o._restingThresh * r)
                                                        A.normalImpulse = 0;
                                                    else {
                                                        // solve resting collision constraints using Erin Catto's method (GDC08)
                                                        // impulse constraint tends to 0
                                                        var U = A.normalImpulse;
                                                        A.normalImpulse = d(A.normalImpulse + O, 0),
                                                            O = A.normalImpulse - U
                                                    }
                                                    // handle high velocity and resting collisions separately
                                                    if (E * E > o._restingThreshTangent * r)
                                                        A.tangentImpulse = 0;
                                                    else {
                                                        // solve resting collision constraints using Erin Catto's method (GDC08)
                                                        // tangent impulse tends to -tangentSpeed or +tangentSpeed
                                                        var H = A.tangentImpulse;
                                                        A.tangentImpulse = s.clamp(A.tangentImpulse + W, -q, q),
                                                            W = A.tangentImpulse - H
                                                    }
                                                    // total impulse from contact
                                                    a.x = f.x * O + S.x * W,
                                                        a.y = f.y * O + S.y * W,
                                                    v.isStatic || v.isSleeping || (v.positionPrev.x += a.x * v.inverseMass,
                                                        v.positionPrev.y += a.y * v.inverseMass,
                                                        v.anglePrev += n.cross(_, a) * v.inverseInertia),
                                                    b.isStatic || b.isSleeping || (b.positionPrev.x -= a.x * b.inverseMass,
                                                        b.positionPrev.y -= a.y * b.inverseMass,
                                                        b.anglePrev -= n.cross(k, a) * b.inverseInertia)
                                                }
                                            }
                                    }
                            }
                        )()
                    }
                        , {
                            "../core/Common": 14,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29
                        }],
                    11: [function(e, t) {
                        /**
                         * The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
                         *
                         * @class SAT
                         */
                            // TODO: true circles and curves
                        var o = {};
                        t.exports = o;
                        var i = e("../geometry/Vertices")
                            , n = e("../geometry/Vector");
                        (function() {
                                var e = Number.MAX_VALUE;
                                o.collides = function(e, t, s) {
                                    var r = !1, a, l, d, c;
                                    if (s) {
                                        // estimate total motion
                                        var p = e.parent
                                            , m = t.parent
                                            , g = p.speed * p.speed + p.angularSpeed * p.angularSpeed + m.speed * m.speed + m.angularSpeed * m.angularSpeed;
                                        // we may be able to (partially) reuse collision result
                                        // but only safe if collision was resting
                                        r = s && s.collided && .2 > g,
                                            c = s
                                    } else
                                        c = {
                                            collided: !1,
                                            bodyA: e,
                                            bodyB: t
                                        };
                                    if (s && r) {
                                        // if we can reuse the collision result
                                        // we only need to test the previously found axis
                                        var u = c.axisBody
                                            , y = u === e ? t : e
                                            , x = [u.axes[s.axisNumber]];
                                        if (d = o._overlapAxes(u.vertices, y.vertices, x),
                                            c.reused = !0,
                                        0 >= d.overlap)
                                            return c.collided = !1,
                                                c
                                    } else {
                                        if (a = o._overlapAxes(e.vertices, t.vertices, e.axes),
                                        0 >= a.overlap)
                                            return c.collided = !1,
                                                c;
                                        if (l = o._overlapAxes(t.vertices, e.vertices, t.axes),
                                        0 >= l.overlap)
                                            return c.collided = !1,
                                                c;
                                        a.overlap < l.overlap ? (d = a,
                                            c.axisBody = e) : (d = l,
                                            c.axisBody = t),
                                            c.axisNumber = d.axisNumber
                                    }
                                    c.bodyA = e.id < t.id ? e : t,
                                        c.bodyB = e.id < t.id ? t : e,
                                        c.collided = !0,
                                        c.depth = d.overlap,
                                        c.parentA = c.bodyA.parent,
                                        c.parentB = c.bodyB.parent,
                                        e = c.bodyA,
                                        t = c.bodyB,
                                        c.normal = 0 > n.dot(d.axis, n.sub(t.position, e.position)) ? {
                                            x: d.axis.x,
                                            y: d.axis.y
                                        } : {
                                            x: -d.axis.x,
                                            y: -d.axis.y
                                        },
                                        c.tangent = n.perp(c.normal),
                                        c.penetration = c.penetration || {},
                                        c.penetration.x = c.normal.x * c.depth,
                                        c.penetration.y = c.normal.y * c.depth;
                                    // find support points, there is always either exactly one or two
                                    var h = o._findSupports(e, t, c.normal)
                                        , v = [];
                                    // find the supports from bodyB that are inside bodyA
                                    // find the supports from bodyA that are inside bodyB
                                    if (i.contains(e.vertices, h[0]) && v.push(h[0]),
                                    i.contains(e.vertices, h[1]) && v.push(h[1]),
                                    2 > v.length) {
                                        var b = o._findSupports(t, e, n.neg(c.normal));
                                        i.contains(t.vertices, b[0]) && v.push(b[0]),
                                        2 > v.length && i.contains(t.vertices, b[1]) && v.push(b[1])
                                    }
                                    // account for the edge case of overlapping but no vertex containment
                                    return 1 > v.length && (v = [h[0]]),
                                        c.supports = v,
                                        c
                                }
                                    ,
                                    o._overlapAxes = function(t, s, r) {
                                        for (var a = n._temp[0], l = n._temp[1], c = {
                                            overlap: e
                                        }, p = 0, m, g; p < r.length; p++) {
                                            if (g = r[p],
                                                o._projectToAxis(a, t, g),
                                                o._projectToAxis(l, s, g),
                                                m = d(a.max - l.min, l.max - a.min),
                                            0 >= m)
                                                return c.overlap = m,
                                                    c;
                                            m < c.overlap && (c.overlap = m,
                                                c.axis = g,
                                                c.axisNumber = p)
                                        }
                                        return c
                                    }
                                    ,
                                    o._projectToAxis = function(e, t, o) {
                                        for (var s = n.dot(t[0], o), r = s, a = 1, l; a < t.length; a += 1)
                                            l = n.dot(t[a], o),
                                                l > r ? r = l : l < s && (s = l);
                                        e.min = s,
                                            e.max = r
                                    }
                                    ,
                                    o._findSupports = function(t, o, s) {
                                        // find closest vertex on bodyB
                                        for (var r = e, a = n._temp[0], l = o.vertices, d = t.position, c = 0, p, m, g, u; c < l.length; c++)
                                            m = l[c],
                                                a.x = m.x - d.x,
                                                a.y = m.y - d.y,
                                                p = -n.dot(s, a),
                                            p < r && (r = p,
                                                g = m);
                                        // find next closest vertex using the two connected to it
                                        var y = 0 <= g.index - 1 ? g.index - 1 : l.length - 1;
                                        m = l[y],
                                            a.x = m.x - d.x,
                                            a.y = m.y - d.y,
                                            r = -n.dot(s, a),
                                            u = m;
                                        var x = (g.index + 1) % l.length;
                                        return m = l[x],
                                            a.x = m.x - d.x,
                                            a.y = m.y - d.y,
                                            p = -n.dot(s, a),
                                        p < r && (u = m),
                                            [g, u]
                                    }
                            }
                        )()
                    }
                        , {
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29
                        }],
                    12: [function(e, t) {
                        /**
                         * The `Matter.Constraint` module contains methods for creating and manipulating constraints.
                         * Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
                         * The stiffness of constraints can be modified to create springs or elastic.
                         *
                         * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
                         *
                         * @class Constraint
                         */
                        var o = {};
                        t.exports = o;
                        var i = e("../geometry/Vertices")
                            , n = e("../geometry/Vector")
                            , s = e("../core/Sleeping")
                            , r = e("../geometry/Bounds")
                            , a = e("../geometry/Axes")
                            , l = e("../core/Common");
                        (function() {
                                o._warming = .4,
                                    o._torqueDampen = 1,
                                    o._minLength = 1e-6,
                                    o.create = function(e) {
                                        var t = e;
                                        // if bodies defined but no points, use body centre
                                        t.bodyA && !t.pointA && (t.pointA = {
                                            x: 0,
                                            y: 0
                                        }),
                                        t.bodyB && !t.pointB && (t.pointB = {
                                            x: 0,
                                            y: 0
                                        });
                                        // calculate static length using initial world space points
                                        var i = t.bodyA ? n.add(t.bodyA.position, t.pointA) : t.pointA
                                            , o = t.bodyB ? n.add(t.bodyB.position, t.pointB) : t.pointB
                                            , s = n.magnitude(n.sub(i, o));
                                        t.length = "undefined" == typeof t.length ? s : t.length,
                                            t.id = t.id || l.nextId(),
                                            t.label = t.label || "Constraint",
                                            t.type = "constraint",
                                            t.stiffness = t.stiffness || (0 < t.length ? 1 : .7),
                                            t.damping = t.damping || 0,
                                            t.angularStiffness = t.angularStiffness || 0,
                                            t.angleA = t.bodyA ? t.bodyA.angle : t.angleA,
                                            t.angleB = t.bodyB ? t.bodyB.angle : t.angleB,
                                            t.plugin = {};
                                        // render
                                        var r = {
                                            visible: !0,
                                            lineWidth: 2,
                                            strokeStyle: "#ffffff",
                                            type: "line",
                                            anchors: !0
                                        };
                                        return 0 === t.length && .1 < t.stiffness ? (r.type = "pin",
                                            r.anchors = !1) : .9 > t.stiffness && (r.type = "spring"),
                                            t.render = l.extend(r, t.render),
                                            t
                                    }
                                    ,
                                    o.preSolveAll = function(e) {
                                        for (var t = 0; t < e.length; t += 1) {
                                            var o = e[t]
                                                , n = o.constraintImpulse;
                                            o.isStatic || 0 === n.x && 0 === n.y && 0 === n.angle || (o.position.x += n.x,
                                                o.position.y += n.y,
                                                o.angle += n.angle)
                                        }
                                    }
                                    ,
                                    o.solveAll = function(e, t) {
                                        // Solve fixed constraints first.
                                        for (var n = 0; n < e.length; n += 1) {
                                            var s = e[n]
                                                , r = !s.bodyA || s.bodyA && s.bodyA.isStatic
                                                , a = !s.bodyB || s.bodyB && s.bodyB.isStatic;
                                            (r || a) && o.solve(e[n], t)
                                        }
                                        // Solve free constraints last.
                                        for (n = 0; n < e.length; n += 1)
                                            s = e[n],
                                                r = !s.bodyA || s.bodyA && s.bodyA.isStatic,
                                                a = !s.bodyB || s.bodyB && s.bodyB.isStatic,
                                            r || a || o.solve(e[n], t)
                                    }
                                    ,
                                    o.solve = function(e, t) {
                                        var i = e.bodyA
                                            , s = e.bodyB
                                            , r = e.pointA
                                            , a = e.pointB;
                                        // prevent singularity
                                        // solve distance constraint with Gauss-Siedel method
                                        if (i || s) {
                                            i && !i.isStatic && (n.rotate(r, i.angle - e.angleA, r),
                                                e.angleA = i.angle),
                                            s && !s.isStatic && (n.rotate(a, s.angle - e.angleB, a),
                                                e.angleB = s.angle);
                                            var l = r
                                                , d = a;
                                            if (i && (l = n.add(i.position, r)),
                                            s && (d = n.add(s.position, a)),
                                            l && d) {
                                                var c = n.sub(l, d)
                                                    , p = n.magnitude(c);
                                                p < o._minLength && (p = o._minLength);
                                                var m = (p - e.length) / p, g = 1 > e.stiffness ? e.stiffness * t : e.stiffness, u = n.mult(c, m * g), y = (i ? i.inverseMass : 0) + (s ? s.inverseMass : 0), x = (i ? i.inverseInertia : 0) + (s ? s.inverseInertia : 0), h = y + x, v, b, f, S, C;
                                                if (e.damping) {
                                                    var w = n.create();
                                                    f = n.div(c, p),
                                                        C = n.sub(s && n.sub(s.position, s.positionPrev) || w, i && n.sub(i.position, i.positionPrev) || w),
                                                        S = n.dot(f, C)
                                                }
                                                i && !i.isStatic && (b = i.inverseMass / y,
                                                    i.constraintImpulse.x -= u.x * b,
                                                    i.constraintImpulse.y -= u.y * b,
                                                    i.position.x -= u.x * b,
                                                    i.position.y -= u.y * b,
                                                e.damping && (i.positionPrev.x -= e.damping * f.x * S * b,
                                                    i.positionPrev.y -= e.damping * f.y * S * b),
                                                    v = n.cross(r, u) / h * o._torqueDampen * i.inverseInertia * (1 - e.angularStiffness),
                                                    i.constraintImpulse.angle -= v,
                                                    i.angle -= v),
                                                s && !s.isStatic && (b = s.inverseMass / y,
                                                    s.constraintImpulse.x += u.x * b,
                                                    s.constraintImpulse.y += u.y * b,
                                                    s.position.x += u.x * b,
                                                    s.position.y += u.y * b,
                                                e.damping && (s.positionPrev.x += e.damping * f.x * S * b,
                                                    s.positionPrev.y += e.damping * f.y * S * b),
                                                    v = n.cross(a, u) / h * o._torqueDampen * s.inverseInertia * (1 - e.angularStiffness),
                                                    s.constraintImpulse.angle += v,
                                                    s.angle += v)
                                            }
                                        }
                                        // update reference angle
                                    }
                                    ,
                                    o.postSolveAll = function(e) {
                                        for (var t = 0; t < e.length; t++) {
                                            var l = e[t]
                                                , d = l.constraintImpulse;
                                            if (!(l.isStatic || 0 === d.x && 0 === d.y && 0 === d.angle)) {
                                                s.set(l, !1);
                                                // update geometry and reset
                                                for (var c = 0, p; c < l.parts.length; c++)
                                                    p = l.parts[c],
                                                        i.translate(p.vertices, d),
                                                    0 < c && (p.position.x += d.x,
                                                        p.position.y += d.y),
                                                    0 !== d.angle && (i.rotate(p.vertices, d.angle, l.position),
                                                        a.rotate(p.axes, d.angle),
                                                    0 < c && n.rotateAbout(p.position, d.angle, l.position, p.position)),
                                                        r.update(p.bounds, p.vertices, l.velocity);
                                                // dampen the cached impulse for warming next step
                                                d.angle *= o._warming,
                                                    d.x *= o._warming,
                                                    d.y *= o._warming
                                            }
                                        }
                                    }
                            }
                        )()
                    }
                        , {
                            "../core/Common": 14,
                            "../core/Sleeping": 22,
                            "../geometry/Axes": 25,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29
                        }],
                    13: [function(e, t) {
                        /**
                         * The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
                         * Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
                         *
                         * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
                         *
                         * @class MouseConstraint
                         */
                        var i = {};
                        t.exports = i;
                        var o = e("../geometry/Vertices")
                            , n = e("../core/Sleeping")
                            , s = e("../core/Mouse")
                            , r = e("../core/Events")
                            , a = e("../collision/Detector")
                            , l = e("./Constraint")
                            , d = e("../body/Composite")
                            , c = e("../core/Common")
                            , p = e("../geometry/Bounds");
                        (function() {
                                i.create = function(e, t) {
                                    var o = (e ? e.mouse : null) || (t ? t.mouse : null);
                                    o || (e && e.render && e.render.canvas ? o = s.create(e.render.canvas) : t && t.element ? o = s.create(t.element) : (o = s.create(),
                                        c.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
                                    var n = l.create({
                                        label: "Mouse Constraint",
                                        pointA: o.position,
                                        pointB: {
                                            x: 0,
                                            y: 0
                                        },
                                        length: .01,
                                        stiffness: .1,
                                        angularStiffness: 1,
                                        render: {
                                            strokeStyle: "#90EE90",
                                            lineWidth: 3
                                        }
                                    })
                                        , a = {
                                        type: "mouseConstraint",
                                        mouse: o,
                                        element: null,
                                        body: null,
                                        constraint: n,
                                        collisionFilter: {
                                            category: 1,
                                            mask: 4294967295,
                                            group: 0
                                        }
                                    }
                                        , p = c.extend(a, t);
                                    return r.on(e, "beforeUpdate", function() {
                                        var t = d.allBodies(e.world);
                                        i.update(p, t),
                                            i._triggerEvents(p)
                                    }),
                                        p
                                }
                                    ,
                                    i.update = function(e, t) {
                                        var s = e.mouse
                                            , l = e.constraint
                                            , d = e.body;
                                        if (!(0 === s.button))
                                            l.bodyB = e.body = null,
                                                l.pointB = null,
                                            d && r.trigger(e, "enddrag", {
                                                mouse: s,
                                                body: d
                                            });
                                        else if (!l.bodyB) {
                                            for (var c = 0; c < t.length; c++)
                                                if (d = t[c],
                                                p.contains(d.bounds, s.position) && a.canCollide(d.collisionFilter, e.collisionFilter))
                                                    for (var m = 1 < d.parts.length ? 1 : 0, g; m < d.parts.length; m++)
                                                        if (g = d.parts[m],
                                                            o.contains(g.vertices, s.position)) {
                                                            l.pointA = s.position,
                                                                l.bodyB = e.body = d,
                                                                l.pointB = {
                                                                    x: s.position.x - d.position.x,
                                                                    y: s.position.y - d.position.y
                                                                },
                                                                l.angleB = d.angle,
                                                                n.set(d, !1),
                                                                r.trigger(e, "startdrag", {
                                                                    mouse: s,
                                                                    body: d
                                                                });
                                                            break
                                                        }
                                        } else
                                            n.set(l.bodyB, !1),
                                                l.pointA = s.position
                                    }
                                    ,
                                    i._triggerEvents = function(e) {
                                        var t = e.mouse
                                            , i = t.sourceEvents;
                                        i.mousemove && r.trigger(e, "mousemove", {
                                            mouse: t
                                        }),
                                        i.mousedown && r.trigger(e, "mousedown", {
                                            mouse: t
                                        }),
                                        i.mouseup && r.trigger(e, "mouseup", {
                                            mouse: t
                                        }),
                                            s.clearSourceEvents(t)
                                    }
                            }
                        )()
                    }
                        , {
                            "../body/Composite": 2,
                            "../collision/Detector": 5,
                            "../core/Common": 14,
                            "../core/Events": 16,
                            "../core/Mouse": 19,
                            "../core/Sleeping": 22,
                            "../geometry/Bounds": 26,
                            "../geometry/Vertices": 29,
                            "./Constraint": 12
                        }],
                    14: [function(e, t) {
                        /**
                         * The `Matter.Common` module contains utility functions that are common to all modules.
                         *
                         * @class Common
                         */
                        var o = {};
                        t.exports = o,
                            function() {
                                o._nextId = 0,
                                    o._seed = 0,
                                    o._nowStartTime = +new Date,
                                    o.extend = function(e, t) {
                                        var n, s;
                                        "boolean" == typeof t ? (n = 2,
                                            s = t) : (n = 1,
                                            s = !0);
                                        for (var r = n, a; r < arguments.length; r++)
                                            if (a = arguments[r],
                                                a)
                                                for (var l in a)
                                                    s && a[l] && a[l].constructor === Object ? e[l] && e[l].constructor !== Object ? e[l] = a[l] : (e[l] = e[l] || {},
                                                        o.extend(e[l], s, a[l])) : e[l] = a[l];
                                        return e
                                    }
                                    ,
                                    o.clone = function(e, t) {
                                        return o.extend({}, t, e)
                                    }
                                    ,
                                    o.keys = function(e) {
                                        if (Object.keys)
                                            return Object.keys(e);
                                        // avoid hasOwnProperty for performance
                                        var t = [];
                                        for (var i in e)
                                            t.push(i);
                                        return t
                                    }
                                    ,
                                    o.values = function(e) {
                                        var t = [];
                                        if (Object.keys) {
                                            for (var o = Object.keys(e), n = 0; n < o.length; n++)
                                                t.push(e[o[n]]);
                                            return t
                                        }
                                        // avoid hasOwnProperty for performance
                                        for (var s in e)
                                            t.push(e[s]);
                                        return t
                                    }
                                    ,
                                    o.get = function(e, t, o, n) {
                                        t = t.split(".").slice(o, n);
                                        for (var s = 0; s < t.length; s += 1)
                                            e = e[t[s]];
                                        return e
                                    }
                                    ,
                                    o.set = function(e, t, i, n, s) {
                                        var r = t.split(".").slice(n, s);
                                        return o.get(e, t, 0, -1)[r[r.length - 1]] = i,
                                            i
                                    }
                                    ,
                                    o.shuffle = function(e) {
                                        for (var t = e.length - 1; 0 < t; t--) {
                                            var n = c(o.random() * (t + 1))
                                                , s = e[t];
                                            e[t] = e[n],
                                                e[n] = s
                                        }
                                        return e
                                    }
                                    ,
                                    o.choose = function(e) {
                                        return e[c(o.random() * e.length)]
                                    }
                                    ,
                                    o.isElement = function(e) {
                                        return "undefined" == typeof HTMLElement ? !!(e && e.nodeType && e.nodeName) : e instanceof HTMLElement
                                    }
                                    ,
                                    o.isArray = function(e) {
                                        return "[object Array]" === Object.prototype.toString.call(e)
                                    }
                                    ,
                                    o.isFunction = function(e) {
                                        return "function" == typeof e
                                    }
                                    ,
                                    o.isPlainObject = function(e) {
                                        return "object" == typeof e && e.constructor === Object
                                    }
                                    ,
                                    o.isString = function(e) {
                                        return "[object String]" === toString.call(e)
                                    }
                                    ,
                                    o.clamp = function(e, t, i) {
                                        return e < t ? t : e > i ? i : e
                                    }
                                    ,
                                    o.sign = function(e) {
                                        return 0 > e ? -1 : 1
                                    }
                                    ,
                                    o.now = function() {
                                        if (window.performance) {
                                            if (window.performance.now)
                                                return window.performance.now();
                                            if (window.performance.webkitNow)
                                                return window.performance.webkitNow()
                                        }
                                        return new Date - o._nowStartTime
                                    }
                                    ,
                                    o.random = function(t, i) {
                                        return t = "undefined" == typeof t ? 0 : t,
                                            i = "undefined" == typeof i ? 1 : i,
                                        t + e() * (i - t)
                                    }
                                ;
                                var e = function() {
                                    return o._seed = (9301 * o._seed + 49297) % 233280,
                                    o._seed / 233280
                                };
                                /**
                                 * Converts a CSS hex colour string into an integer.
                                 * @method colorToNumber
                                 * @param {string} colorString
                                 * @return {number} An integer representing the CSS hex string
                                 */
                                o.colorToNumber = function(e) {
                                    return e = e.replace("#", ""),
                                    3 == e.length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)),
                                        parseInt(e, 16)
                                }
                                    ,
                                    o.logLevel = 1,
                                    o.log = function() {
                                        console && 0 < o.logLevel && 3 >= o.logLevel && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                                    }
                                    ,
                                    o.info = function() {
                                        console && 0 < o.logLevel && 2 >= o.logLevel && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                                    }
                                    ,
                                    o.warn = function() {
                                        console && 0 < o.logLevel && 3 >= o.logLevel && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                                    }
                                    ,
                                    o.nextId = function() {
                                        return o._nextId++
                                    }
                                    ,
                                    o.indexOf = function(e, t) {
                                        if (e.indexOf)
                                            return e.indexOf(t);
                                        for (var o = 0; o < e.length; o++)
                                            if (e[o] === t)
                                                return o;
                                        return -1
                                    }
                                    ,
                                    o.map = function(e, t) {
                                        if (e.map)
                                            return e.map(t);
                                        for (var o = [], n = 0; n < e.length; n += 1)
                                            o.push(t(e[n]));
                                        return o
                                    }
                                    ,
                                    o.topologicalSort = function(e) {
                                        // https://github.com/mgechev/javascript-algorithms
                                        // Copyright (c) Minko Gechev (MIT license)
                                        // Modifications: tidy formatting and naming
                                        var t = []
                                            , i = []
                                            , n = [];
                                        for (var s in e)
                                            i[s] || n[s] || o._topologicalSort(s, i, n, e, t);
                                        return t
                                    }
                                    ,
                                    o._topologicalSort = function(e, t, n, s, r) {
                                        var a = s[e] || [];
                                        n[e] = !0;
                                        for (var l = 0, d; l < a.length; l += 1)
                                            (d = a[l],
                                                !n[d]) && (t[d] || o._topologicalSort(d, t, n, s, r));
                                        n[e] = !1,
                                            t[e] = !0,
                                            r.push(e)
                                    }
                                    ,
                                    o.chain = function() {
                                        for (var e = [], t = 0, o; t < arguments.length; t += 1)
                                            o = arguments[t],
                                                o._chained ? e.push.apply(e, o._chained) : e.push(o);
                                        var n = function() {
                                            for (var t = Array(arguments.length), o = 0, n = arguments.length, s; o < n; o++)
                                                t[o] = arguments[o];
                                            // https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
                                            for (o = 0; o < e.length; o += 1) {
                                                var r = e[o].apply(s, t);
                                                "undefined" != typeof r && (s = r)
                                            }
                                            return s
                                        };
                                        return n._chained = e,
                                            n
                                    }
                                    ,
                                    o.chainPathBefore = function(e, t, i) {
                                        return o.set(e, t, o.chain(i, o.get(e, t)))
                                    }
                                    ,
                                    o.chainPathAfter = function(e, t, i) {
                                        return o.set(e, t, o.chain(o.get(e, t), i))
                                    }
                            }()
                    }
                        , {}],
                    15: [function(e, t) {
                        /**
                         * The `Matter.Engine` module contains methods for creating and manipulating engines.
                         * An engine is a controller that manages updating the simulation of the world.
                         * See `Matter.Runner` for an optional game loop utility.
                         *
                         * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
                         *
                         * @class Engine
                         */
                        var o = {};
                        t.exports = o;
                        var i = e("../body/World")
                            , n = e("./Sleeping")
                            , s = e("../collision/Resolver")
                            , r = e("../render/Render")
                            , a = e("../collision/Pairs")
                            , l = e("./Metrics")
                            , d = e("../collision/Grid")
                            , c = e("./Events")
                            , p = e("../body/Composite")
                            , m = e("../constraint/Constraint")
                            , g = e("./Common")
                            , u = e("../body/Body");
                        (function() {
                                o.create = function(e, t) {
                                    t = g.isElement(e) ? t : e,
                                        e = g.isElement(e) ? e : null,
                                        t = t || {},
                                    (e || t.render) && g.warn("Engine.create: engine.render is deprecated (see docs)");
                                    var o = g.extend({
                                        positionIterations: 6,
                                        velocityIterations: 4,
                                        constraintIterations: 2,
                                        enableSleeping: !1,
                                        events: [],
                                        plugin: {},
                                        timing: {
                                            timestamp: 0,
                                            timeScale: 1
                                        },
                                        broadphase: {
                                            controller: d
                                        }
                                    }, t);
                                    // @deprecated
                                    if (e || o.render) {
                                        var n = {
                                            element: e,
                                            controller: r
                                        };
                                        o.render = g.extend(n, o.render)
                                    }
                                    // @deprecated
                                    return o.render && o.render.controller && (o.render = o.render.controller.create(o.render)),
                                    o.render && (o.render.engine = o),
                                        o.world = t.world || i.create(o.world),
                                        o.pairs = a.create(),
                                        o.broadphase = o.broadphase.controller.create(o.broadphase),
                                        o.metrics = o.metrics || {
                                            extended: !1
                                        },
                                        o
                                }
                                    ,
                                    o.update = function(e, t, r) {
                                        t = t || 1e3 / 60,
                                            r = r || 1;
                                        var l = e.world, d = e.timing, g = e.broadphase, u = [], y;
                                        // increment timestamp
                                        d.timestamp += t * d.timeScale;
                                        // create an event object
                                        var x = {
                                            timestamp: d.timestamp
                                        };
                                        c.trigger(e, "beforeUpdate", x);
                                        // get lists of all bodies and constraints, no matter what composites they are in
                                        var h = p.allBodies(l)
                                            , v = p.allConstraints(l);
                                        // if sleeping enabled, call the sleeping controller
                                        for (e.enableSleeping && n.update(h, d.timeScale),
                                                 o._bodiesApplyGravity(h, l.gravity),
                                                 o._bodiesUpdate(h, t, d.timeScale, r, l.bounds),
                                                 m.preSolveAll(h),
                                                 y = 0; y < e.constraintIterations; y++)
                                            m.solveAll(v, d.timeScale);
                                        m.postSolveAll(h),
                                            g.controller ? (l.isModified && g.controller.clear(g),
                                                g.controller.update(g, h, e, l.isModified),
                                                u = g.pairsList) : u = h,
                                        l.isModified && p.setModified(l, !1, !1, !0);
                                        // narrowphase pass: find actual collisions, then create or update collision pairs
                                        var b = g.detector(u, e)
                                            , f = e.pairs
                                            , S = d.timestamp;
                                        // update collision pairs
                                        for (a.update(f, b, S),
                                                 a.removeOld(f, S),
                                             e.enableSleeping && n.afterCollisions(f.list, d.timeScale),
                                             0 < f.collisionStart.length && c.trigger(e, "collisionStart", {
                                                 pairs: f.collisionStart
                                             }),
                                                 s.preSolvePosition(f.list),
                                                 y = 0; y < e.positionIterations; y++)
                                            s.solvePosition(f.list, d.timeScale);
                                        for (s.postSolvePosition(h),
                                                 m.preSolveAll(h),
                                                 y = 0; y < e.constraintIterations; y++)
                                            m.solveAll(v, d.timeScale);
                                        for (m.postSolveAll(h),
                                                 s.preSolveVelocity(f.list),
                                                 y = 0; y < e.velocityIterations; y++)
                                            s.solveVelocity(f.list, d.timeScale);
                                        // trigger collision events
                                        return 0 < f.collisionActive.length && c.trigger(e, "collisionActive", {
                                            pairs: f.collisionActive
                                        }),
                                        0 < f.collisionEnd.length && c.trigger(e, "collisionEnd", {
                                            pairs: f.collisionEnd
                                        }),
                                            o._bodiesClearForces(h),
                                            c.trigger(e, "afterUpdate", x),
                                            e
                                    }
                                    ,
                                    o.merge = function(e, t) {
                                        if (g.extend(e, t),
                                            t.world) {
                                            e.world = t.world,
                                                o.clear(e);
                                            for (var s = p.allBodies(e.world), r = 0, a; r < s.length; r++)
                                                a = s[r],
                                                    n.set(a, !1),
                                                    a.id = g.nextId()
                                        }
                                    }
                                    ,
                                    o.clear = function(e) {
                                        var t = e.world;
                                        a.clear(e.pairs);
                                        var i = e.broadphase;
                                        if (i.controller) {
                                            var o = p.allBodies(t);
                                            i.controller.clear(i),
                                                i.controller.update(i, o, e, !0)
                                        }
                                    }
                                    ,
                                    o._bodiesClearForces = function(e) {
                                        for (var t = 0, o; t < e.length; t++)
                                            o = e[t],
                                                o.force.x = 0,
                                                o.force.y = 0,
                                                o.torque = 0
                                    }
                                    ,
                                    o._bodiesApplyGravity = function(e, t) {
                                        var o = "undefined" == typeof t.scale ? .001 : t.scale;
                                        if ((0 !== t.x || 0 !== t.y) && 0 !== o)
                                            for (var n = 0, s; n < e.length; n++)
                                                s = e[n],
                                                s.isStatic || s.isSleeping || (s.force.y += s.mass * t.y * o,
                                                    s.force.x += s.mass * t.x * o)
                                    }
                                    ,
                                    o._bodiesUpdate = function(e, t, o, n) {
                                        for (var s = 0, r; s < e.length; s++)
                                            r = e[s],
                                            r.isStatic || r.isSleeping || u.update(r, t, o, n)
                                    }
                            }
                        )()
                    }
                        , {
                            "../body/Body": 1,
                            "../body/Composite": 2,
                            "../body/World": 3,
                            "../collision/Grid": 6,
                            "../collision/Pairs": 8,
                            "../collision/Resolver": 10,
                            "../constraint/Constraint": 12,
                            "../render/Render": 31,
                            "./Common": 14,
                            "./Events": 16,
                            "./Metrics": 18,
                            "./Sleeping": 22
                        }],
                    16: [function(e, t) {
                        /**
                         * The `Matter.Events` module contains methods to fire and listen to events on other objects.
                         *
                         * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
                         *
                         * @class Events
                         */
                        var i = {};
                        t.exports = i;
                        var o = e("./Common");
                        (function() {
                                i.on = function(e, t, o) {
                                    for (var n = t.split(" "), s = 0, r; s < n.length; s++)
                                        r = n[s],
                                            e.events = e.events || {},
                                            e.events[r] = e.events[r] || [],
                                            e.events[r].push(o);
                                    return o
                                }
                                    ,
                                    i.off = function(e, t, n) {
                                        if (!t)
                                            return void (e.events = {});
                                        // handle Events.off(object, callback)
                                        "function" == typeof t && (n = t,
                                            t = o.keys(e.events).join(" "));
                                        for (var s = t.split(" "), r = 0; r < s.length; r++) {
                                            var a = e.events[s[r]]
                                                , l = [];
                                            if (n && a)
                                                for (var d = 0; d < a.length; d++)
                                                    a[d] !== n && l.push(a[d]);
                                            e.events[s[r]] = l
                                        }
                                    }
                                    ,
                                    i.trigger = function(e, t, n) {
                                        var s, r, a, l;
                                        if (e.events) {
                                            n || (n = {}),
                                                s = t.split(" ");
                                            for (var d = 0; d < s.length; d++)
                                                if (r = s[d],
                                                    a = e.events[r],
                                                    a) {
                                                    l = o.clone(n, !1),
                                                        l.name = r,
                                                        l.source = e;
                                                    for (var c = 0; c < a.length; c++)
                                                        a[c].apply(e, [l])
                                                }
                                        }
                                    }
                            }
                        )()
                    }
                        , {
                            "./Common": 14
                        }],
                    17: [function(e, t) {
                        /**
                         * The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
                         *
                         * @class Matter
                         */
                        var i = {};
                        t.exports = i;
                        var o = e("./Plugin")
                            , n = e("./Common");
                        (function() {
                                i.name = "matter-js",
                                    i.version = "0.14.1",
                                    i.uses = [],
                                    i.used = [],
                                    i.use = function() {
                                        o.use(i, Array.prototype.slice.call(arguments))
                                    }
                                    ,
                                    i.before = function(e, t) {
                                        return e = e.replace(/^Matter./, ""),
                                            n.chainPathBefore(i, e, t)
                                    }
                                    ,
                                    i.after = function(e, t) {
                                        return e = e.replace(/^Matter./, ""),
                                            n.chainPathAfter(i, e, t)
                                    }
                            }
                        )()
                    }
                        , {
                            "./Common": 14,
                            "./Plugin": 20
                        }],
                    18: [function() {}
                        , {
                            "../body/Composite": 2,
                            "./Common": 14
                        }],
                    19: [function(e, t) {
                        /**
                         * The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
                         *
                         * @class Mouse
                         */
                        var i = {};
                        t.exports = i;
                        var o = e("../core/Common");
                        (function() {
                                i.create = function(e) {
                                    var t = {};
                                    return e || o.log("Mouse.create: element was undefined, defaulting to document.body", "warn"),
                                        t.element = e || document.body,
                                        t.absolute = {
                                            x: 0,
                                            y: 0
                                        },
                                        t.position = {
                                            x: 0,
                                            y: 0
                                        },
                                        t.mousedownPosition = {
                                            x: 0,
                                            y: 0
                                        },
                                        t.mouseupPosition = {
                                            x: 0,
                                            y: 0
                                        },
                                        t.offset = {
                                            x: 0,
                                            y: 0
                                        },
                                        t.scale = {
                                            x: 1,
                                            y: 1
                                        },
                                        t.wheelDelta = 0,
                                        t.button = -1,
                                        t.pixelRatio = t.element.getAttribute("data-pixel-ratio") || 1,
                                        t.sourceEvents = {
                                            mousemove: null,
                                            mousedown: null,
                                            mouseup: null,
                                            mousewheel: null
                                        },
                                        t.mousemove = function(e) {
                                            var o = i._getRelativeMousePosition(e, t.element, t.pixelRatio)
                                                , n = e.changedTouches;
                                            n && (t.button = 0,
                                                e.preventDefault()),
                                                t.absolute.x = o.x,
                                                t.absolute.y = o.y,
                                                t.position.x = t.absolute.x * t.scale.x + t.offset.x,
                                                t.position.y = t.absolute.y * t.scale.y + t.offset.y,
                                                t.sourceEvents.mousemove = e
                                        }
                                        ,
                                        t.mousedown = function(e) {
                                            var o = i._getRelativeMousePosition(e, t.element, t.pixelRatio)
                                                , n = e.changedTouches;
                                            n ? (t.button = 0,
                                                e.preventDefault()) : t.button = e.button,
                                                t.absolute.x = o.x,
                                                t.absolute.y = o.y,
                                                t.position.x = t.absolute.x * t.scale.x + t.offset.x,
                                                t.position.y = t.absolute.y * t.scale.y + t.offset.y,
                                                t.mousedownPosition.x = t.position.x,
                                                t.mousedownPosition.y = t.position.y,
                                                t.sourceEvents.mousedown = e
                                        }
                                        ,
                                        t.mouseup = function(e) {
                                            var o = i._getRelativeMousePosition(e, t.element, t.pixelRatio)
                                                , n = e.changedTouches;
                                            n && e.preventDefault(),
                                                t.button = -1,
                                                t.absolute.x = o.x,
                                                t.absolute.y = o.y,
                                                t.position.x = t.absolute.x * t.scale.x + t.offset.x,
                                                t.position.y = t.absolute.y * t.scale.y + t.offset.y,
                                                t.mouseupPosition.x = t.position.x,
                                                t.mouseupPosition.y = t.position.y,
                                                t.sourceEvents.mouseup = e
                                        }
                                        ,
                                        t.mousewheel = function(e) {
                                            t.wheelDelta = l(-1, d(1, e.wheelDelta || -e.detail)),
                                                e.preventDefault()
                                        }
                                        ,
                                        i.setElement(t, t.element),
                                        t
                                }
                                    ,
                                    i.setElement = function(e, t) {
                                        e.element = t,
                                            t.addEventListener("mousemove", e.mousemove),
                                            t.addEventListener("mousedown", e.mousedown),
                                            t.addEventListener("mouseup", e.mouseup),
                                            t.addEventListener("mousewheel", e.mousewheel),
                                            t.addEventListener("DOMMouseScroll", e.mousewheel),
                                            t.addEventListener("touchmove", e.mousemove),
                                            t.addEventListener("touchstart", e.mousedown),
                                            t.addEventListener("touchend", e.mouseup)
                                    }
                                    ,
                                    i.clearSourceEvents = function(e) {
                                        e.sourceEvents.mousemove = null,
                                            e.sourceEvents.mousedown = null,
                                            e.sourceEvents.mouseup = null,
                                            e.sourceEvents.mousewheel = null,
                                            e.wheelDelta = 0
                                    }
                                    ,
                                    i.setOffset = function(e, t) {
                                        e.offset.x = t.x,
                                            e.offset.y = t.y,
                                            e.position.x = e.absolute.x * e.scale.x + e.offset.x,
                                            e.position.y = e.absolute.y * e.scale.y + e.offset.y
                                    }
                                    ,
                                    i.setScale = function(e, t) {
                                        e.scale.x = t.x,
                                            e.scale.y = t.y,
                                            e.position.x = e.absolute.x * e.scale.x + e.offset.x,
                                            e.position.y = e.absolute.y * e.scale.y + e.offset.y
                                    }
                                    ,
                                    i._getRelativeMousePosition = function(e, t, i) {
                                        var o = t.getBoundingClientRect(), n = document.documentElement || document.body.parentNode || document.body, s = void 0 === window.pageXOffset ? n.scrollLeft : window.pageXOffset, r = void 0 === window.pageYOffset ? n.scrollTop : window.pageYOffset, a = e.changedTouches, l, d;
                                        return a ? (l = a[0].pageX - o.left - s,
                                            d = a[0].pageY - o.top - r) : (l = e.pageX - o.left - s,
                                            d = e.pageY - o.top - r),
                                            {
                                                x: l / (t.clientWidth / (t.width || t.clientWidth) * i),
                                                y: d / (t.clientHeight / (t.height || t.clientHeight) * i)
                                            }
                                    }
                            }
                        )()
                    }
                        , {
                            "../core/Common": 14
                        }],
                    20: [function(e, t) {
                        /**
                         * The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
                         *
                         * @class Plugin
                         */
                        var o = {};
                        t.exports = o;
                        var n = e("./Common");
                        (function() {
                                o._registry = {},
                                    o.register = function(e) {
                                        if (o.isPlugin(e) || n.warn("Plugin.register:", o.toString(e), "does not implement all required fields."),
                                        e.name in o._registry) {
                                            var t = o._registry[e.name]
                                                , i = o.versionParse(e.version).number
                                                , s = o.versionParse(t.version).number;
                                            i > s ? (n.warn("Plugin.register:", o.toString(t), "was upgraded to", o.toString(e)),
                                                o._registry[e.name] = e) : i < s ? n.warn("Plugin.register:", o.toString(t), "can not be downgraded to", o.toString(e)) : e !== t && n.warn("Plugin.register:", o.toString(e), "is already registered to different plugin object")
                                        } else
                                            o._registry[e.name] = e;
                                        return e
                                    }
                                    ,
                                    o.resolve = function(e) {
                                        return o._registry[o.dependencyParse(e).name]
                                    }
                                    ,
                                    o.toString = function(e) {
                                        return "string" == typeof e ? e : (e.name || "anonymous") + "@" + (e.version || e.range || "0.0.0")
                                    }
                                    ,
                                    o.isPlugin = function(e) {
                                        return e && e.name && e.version && e.install
                                    }
                                    ,
                                    o.isUsed = function(e, t) {
                                        return -1 < e.used.indexOf(t)
                                    }
                                    ,
                                    o.isFor = function(e, t) {
                                        var i = e.for && o.dependencyParse(e.for);
                                        return !e.for || t.name === i.name && o.versionSatisfies(t.version, i.range)
                                    }
                                    ,
                                    o.use = function(e, t) {
                                        if (e.uses = (e.uses || []).concat(t || []),
                                        0 === e.uses.length)
                                            return void n.warn("Plugin.use:", o.toString(e), "does not specify any dependencies to install.");
                                        for (var s = o.dependencies(e), r = n.topologicalSort(s), a = [], l = 0; l < r.length; l += 1)
                                            if (r[l] !== e.name) {
                                                var d = o.resolve(r[l]);
                                                if (!d) {
                                                    a.push("\u274C " + r[l]);
                                                    continue
                                                }
                                                o.isUsed(e, d.name) || (o.isFor(d, e) || (n.warn("Plugin.use:", o.toString(d), "is for", d.for, "but installed on", o.toString(e) + "."),
                                                    d._warned = !0),
                                                    d.install ? d.install(e) : (n.warn("Plugin.use:", o.toString(d), "does not specify an install function."),
                                                        d._warned = !0),
                                                    d._warned ? (a.push("\uD83D\uDD36 " + o.toString(d)),
                                                        delete d._warned) : a.push("\u2705 " + o.toString(d)),
                                                    e.used.push(d.name))
                                            }
                                        0 < a.length && n.info(a.join("  "))
                                    }
                                    ,
                                    o.dependencies = function(e, t) {
                                        var s = o.dependencyParse(e)
                                            , r = s.name;
                                        if (t = t || {},
                                            !(r in t)) {
                                            e = o.resolve(e) || e,
                                                t[r] = n.map(e.uses || [], function(t) {
                                                    o.isPlugin(t) && o.register(t);
                                                    var i = o.dependencyParse(t)
                                                        , r = o.resolve(t);
                                                    return r && !o.versionSatisfies(r.version, i.range) ? (n.warn("Plugin.dependencies:", o.toString(r), "does not satisfy", o.toString(i), "used by", o.toString(s) + "."),
                                                        r._warned = !0,
                                                        e._warned = !0) : !r && (n.warn("Plugin.dependencies:", o.toString(t), "used by", o.toString(s), "could not be resolved."),
                                                        e._warned = !0),
                                                        i.name
                                                });
                                            for (var a = 0; a < t[r].length; a += 1)
                                                o.dependencies(t[r][a], t);
                                            return t
                                        }
                                    }
                                    ,
                                    o.dependencyParse = function(e) {
                                        if (n.isString(e)) {
                                            var t = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/;
                                            return t.test(e) || n.warn("Plugin.dependencyParse:", e, "is not a valid dependency string."),
                                                {
                                                    name: e.split("@")[0],
                                                    range: e.split("@")[1] || "*"
                                                }
                                        }
                                        return {
                                            name: e.name,
                                            range: e.range || e.version
                                        }
                                    }
                                    ,
                                    o.versionParse = function(e) {
                                        var t = /^\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?$/;
                                        t.test(e) || n.warn("Plugin.versionParse:", e, "is not a valid version or range.");
                                        var i = e.split("-");
                                        e = i[0];
                                        var o = isNaN(+e[0])
                                            , s = o ? e.substr(1) : e
                                            , r = n.map(s.split("."), function(e) {
                                            return +e
                                        });
                                        return {
                                            isRange: o,
                                            version: s,
                                            range: e,
                                            operator: o ? e[0] : "",
                                            parts: r,
                                            prerelease: i[1],
                                            number: 1e8 * r[0] + 1e4 * r[1] + r[2]
                                        }
                                    }
                                    ,
                                    o.versionSatisfies = function(e, t) {
                                        t = t || "*";
                                        var i = o.versionParse(t)
                                            , n = i.parts
                                            , s = o.versionParse(e)
                                            , r = s.parts;
                                        if (i.isRange) {
                                            if ("*" === i.operator || "*" === e)
                                                return !0;
                                            if ("~" === i.operator)
                                                return r[0] === n[0] && r[1] === n[1] && r[2] >= n[2];
                                            if ("^" === i.operator)
                                                return 0 < n[0] ? r[0] === n[0] && s.number >= i.number : 0 < n[1] ? r[1] === n[1] && r[2] >= n[2] : r[2] === n[2]
                                        }
                                        return e === t || "*" === e
                                    }
                            }
                        )()
                    }
                        , {
                            "./Common": 14
                        }],
                    21: [function(e, t) {
                        /**
                         * The `Matter.Runner` module is an optional utility which provides a game loop,
                         * that handles continuously updating a `Matter.Engine` for you within a browser.
                         * It is intended for development and debugging purposes, but may also be suitable for simple games.
                         * If you are using your own game loop instead, then you do not need the `Matter.Runner` module.
                         * Instead just call `Engine.update(engine, delta)` in your own loop.
                         *
                         * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
                         *
                         * @class Runner
                         */
                        var i = {};
                        t.exports = i;
                        var o = e("./Events")
                            , n = e("./Engine")
                            , s = e("./Common");
                        (function() {
                                var e, t;
                                if ("undefined" != typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame,
                                    t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame),
                                    !e) {
                                    var r;
                                    e = function(e) {
                                        r = setTimeout(function() {
                                            e(s.now())
                                        }, 1e3 / 60)
                                    }
                                        ,
                                        t = function() {
                                            clearTimeout(r)
                                        }
                                }
                                /**
                                 * Creates a new Runner. The options parameter is an object that specifies any properties you wish to override the defaults.
                                 * @method create
                                 * @param {} options
                                 */
                                i.create = function(e) {
                                    var t = s.extend({
                                        fps: 60,
                                        correction: 1,
                                        deltaSampleSize: 60,
                                        counterTimestamp: 0,
                                        frameCounter: 0,
                                        deltaHistory: [],
                                        timePrev: null,
                                        timeScalePrev: 1,
                                        frameRequestId: null,
                                        isFixed: !1,
                                        enabled: !0
                                    }, e);
                                    return t.delta = t.delta || 1e3 / t.fps,
                                        t.deltaMin = t.deltaMin || 1e3 / t.fps,
                                        t.deltaMax = t.deltaMax || 1e3 / (.5 * t.fps),
                                        t.fps = 1e3 / t.delta,
                                        t
                                }
                                    ,
                                    i.run = function(t, o) {
                                        return "undefined" != typeof t.positionIterations && (o = t,
                                            t = i.create()),
                                            function n(s) {
                                                t.frameRequestId = e(n),
                                                s && t.enabled && i.tick(t, o, s)
                                            }(),
                                            t
                                    }
                                    ,
                                    i.tick = function(e, t, i) {
                                        var s = t.timing, r = 1, a = {
                                            timestamp: s.timestamp
                                        }, l;
                                        // create an event object
                                        o.trigger(e, "beforeTick", a),
                                            o.trigger(t, "beforeTick", a),
                                            e.isFixed ? l = e.delta : (l = i - e.timePrev || e.delta,
                                                e.timePrev = i,
                                                e.deltaHistory.push(l),
                                                e.deltaHistory = e.deltaHistory.slice(-e.deltaSampleSize),
                                                l = d.apply(null, e.deltaHistory),
                                                l = l < e.deltaMin ? e.deltaMin : l,
                                                l = l > e.deltaMax ? e.deltaMax : l,
                                                r = l / e.delta,
                                                e.delta = l),
                                        0 !== e.timeScalePrev && (r *= s.timeScale / e.timeScalePrev),
                                        0 === s.timeScale && (r = 0),
                                            e.timeScalePrev = s.timeScale,
                                            e.correction = r,
                                            e.frameCounter += 1,
                                        1e3 <= i - e.counterTimestamp && (e.fps = e.frameCounter * ((i - e.counterTimestamp) / 1e3),
                                            e.counterTimestamp = i,
                                            e.frameCounter = 0),
                                            o.trigger(e, "tick", a),
                                            o.trigger(t, "tick", a),
                                        t.world.isModified && t.render && t.render.controller && t.render.controller.clear && t.render.controller.clear(t.render),
                                            o.trigger(e, "beforeUpdate", a),
                                            n.update(t, l, r),
                                            o.trigger(e, "afterUpdate", a),
                                        t.render && t.render.controller && (o.trigger(e, "beforeRender", a),
                                            o.trigger(t, "beforeRender", a),
                                            t.render.controller.world(t.render),
                                            o.trigger(e, "afterRender", a),
                                            o.trigger(t, "afterRender", a)),
                                            o.trigger(e, "afterTick", a),
                                            o.trigger(t, "afterTick", a)
                                    }
                                    ,
                                    i.stop = function(e) {
                                        t(e.frameRequestId)
                                    }
                                    ,
                                    i.start = function(e, t) {
                                        i.run(e, t)
                                    }
                            }
                        )()
                    }
                        , {
                            "./Common": 14,
                            "./Engine": 15,
                            "./Events": 16
                        }],
                    22: [function(e, t) {
                        /**
                         * The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
                         *
                         * @class Sleeping
                         */
                        var o = {};
                        t.exports = o;
                        var i = e("./Events");
                        (function() {
                                o._motionWakeThreshold = .18,
                                    o._motionSleepThreshold = .08,
                                    o._minBias = .9,
                                    o.update = function(e, t) {
                                        // update bodies sleeping status
                                        for (var n = 0; n < e.length; n++) {
                                            var s = e[n]
                                                , r = s.speed * s.speed + s.angularSpeed * s.angularSpeed;
                                            // wake up bodies if they have a force applied
                                            if (0 !== s.force.x || 0 !== s.force.y) {
                                                o.set(s, !1);
                                                continue
                                            }
                                            var a = d(s.motion, r)
                                                , c = l(s.motion, r);
                                            // biased average motion estimation between frames
                                            s.motion = o._minBias * a + (1 - o._minBias) * c,
                                                0 < s.sleepThreshold && s.motion < o._motionSleepThreshold * (t * t * t) ? (s.sleepCounter += 1,
                                                s.sleepCounter >= s.sleepThreshold && o.set(s, !0)) : 0 < s.sleepCounter && (s.sleepCounter -= 1)
                                        }
                                    }
                                    ,
                                    o.afterCollisions = function(e, t) {
                                        // wake up bodies involved in collisions
                                        for (var n = 0, s; n < e.length; n++)
                                            // don't wake inactive pairs
                                            if (s = e[n],
                                                s.isActive) {
                                                var r = s.collision
                                                    , a = r.bodyA.parent
                                                    , l = r.bodyB.parent;
                                                // don't wake if at least one body is static
                                                if (!(a.isSleeping && l.isSleeping || a.isStatic || l.isStatic) && (a.isSleeping || l.isSleeping)) {
                                                    var d = a.isSleeping && !a.isStatic ? a : l
                                                        , c = d === a ? l : a;
                                                    !d.isStatic && c.motion > o._motionWakeThreshold * (t * t * t) && o.set(d, !1)
                                                }
                                            }
                                    }
                                    ,
                                    o.set = function(e, t) {
                                        var o = e.isSleeping;
                                        t ? (e.isSleeping = !0,
                                            e.sleepCounter = e.sleepThreshold,
                                            e.positionImpulse.x = 0,
                                            e.positionImpulse.y = 0,
                                            e.positionPrev.x = e.position.x,
                                            e.positionPrev.y = e.position.y,
                                            e.anglePrev = e.angle,
                                            e.speed = 0,
                                            e.angularSpeed = 0,
                                            e.motion = 0,
                                        !o && i.trigger(e, "sleepStart")) : (e.isSleeping = !1,
                                            e.sleepCounter = 0,
                                        o && i.trigger(e, "sleepEnd"))
                                    }
                            }
                        )()
                    }
                        , {
                            "./Events": 16
                        }],
                    23: [function(e, t) {
                        (function(i) {
                                /**
                                 * The `Matter.Bodies` module contains factory methods for creating rigid body models
                                 * with commonly used body configurations (such as rectangles, circles and other polygons).
                                 *
                                 * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
                                 *
                                 * @class Bodies
                                 */
                                    // TODO: true circle bodies
                                var n = {};
                                t.exports = n;
                                var a = e("../geometry/Vertices")
                                    , c = e("../core/Common")
                                    , m = e("../body/Body")
                                    , g = e("../geometry/Bounds")
                                    , u = e("../geometry/Vector")
                                    , h = "undefined" == typeof window ? "undefined" == typeof i ? null : i.decomp : window.decomp;
                                (function() {
                                        n.rectangle = function(e, t, i, o, n) {
                                            n = n || {};
                                            var s = {
                                                label: "Rectangle Body",
                                                position: {
                                                    x: e,
                                                    y: t
                                                },
                                                vertices: a.fromPath("L 0 0 L " + i + " 0 L " + i + " " + o + " L 0 " + o)
                                            };
                                            if (n.chamfer) {
                                                var r = n.chamfer;
                                                s.vertices = a.chamfer(s.vertices, r.radius, r.quality, r.qualityMin, r.qualityMax),
                                                    delete n.chamfer
                                            }
                                            return m.create(c.extend({}, s, n))
                                        }
                                            ,
                                            n.trapezoid = function(e, t, i, o, n, s) {
                                                s = s || {},
                                                    n *= .5;
                                                var r = (1 - 2 * n) * i, l = i * n, d = l + r, p = d + l, g;
                                                g = .5 > n ? "L 0 0 L " + l + " " + -o + " L " + d + " " + -o + " L " + p + " 0" : "L 0 0 L " + d + " " + -o + " L " + p + " 0";
                                                var u = {
                                                    label: "Trapezoid Body",
                                                    position: {
                                                        x: e,
                                                        y: t
                                                    },
                                                    vertices: a.fromPath(g)
                                                };
                                                if (s.chamfer) {
                                                    var y = s.chamfer;
                                                    u.vertices = a.chamfer(u.vertices, y.radius, y.quality, y.qualityMin, y.qualityMax),
                                                        delete s.chamfer
                                                }
                                                return m.create(c.extend({}, u, s))
                                            }
                                            ,
                                            n.circle = function(e, t, i, o, s) {
                                                o = o || {};
                                                // approximate circles with polygons until true circles implemented in SAT
                                                s = s || 25;
                                                var r = p(l(10, d(s, i)));
                                                // optimisation: always use even number of sides (half the number of unique axes)
                                                return 1 == r % 2 && (r += 1),
                                                    n.polygon(e, t, r, i, c.extend({}, {
                                                        label: "Circle Body",
                                                        circleRadius: i
                                                    }, o))
                                            }
                                            ,
                                            n.polygon = function(e, t, l, d, p) {
                                                if (p = p || {},
                                                3 > l)
                                                    return n.circle(e, t, d, p);
                                                for (var g = 2 * o / l, u = "", y = 0; y < l; y += 1) {
                                                    var x = .5 * g + y * g
                                                        , h = r(x) * d
                                                        , v = s(x) * d;
                                                    u += "L " + h.toFixed(3) + " " + v.toFixed(3) + " "
                                                }
                                                var b = {
                                                    label: "Polygon Body",
                                                    position: {
                                                        x: e,
                                                        y: t
                                                    },
                                                    vertices: a.fromPath(u)
                                                };
                                                if (p.chamfer) {
                                                    var f = p.chamfer;
                                                    b.vertices = a.chamfer(b.vertices, f.radius, f.quality, f.qualityMin, f.qualityMax),
                                                        delete p.chamfer
                                                }
                                                return m.create(c.extend({}, b, p))
                                            }
                                            ,
                                            n.fromVertices = function(e, t, o, n, s, r, l) {
                                                var d, p, y, x, b, f, S, C, w;
                                                for (n = n || {},
                                                         p = [],
                                                         s = "undefined" != typeof s && s,
                                                         r = "undefined" == typeof r ? .01 : r,
                                                         l = "undefined" == typeof l ? 10 : l,
                                                     h || c.warn("Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull."),
                                                     c.isArray(o[0]) || (o = [o]),
                                                         C = 0; C < o.length; C += 1)
                                                    if (x = o[C],
                                                        y = a.isConvex(x),
                                                    y || !h)
                                                        x = y ? a.clockwiseSort(x) : a.hull(x),
                                                            p.push({
                                                                position: {
                                                                    x: e,
                                                                    y: t
                                                                },
                                                                vertices: x
                                                            });
                                                    else {
                                                        // initialise a decomposition
                                                        var P = x.map(function(e) {
                                                            return [e.x, e.y]
                                                        });
                                                        // vertices are concave and simple, we can decompose into parts
                                                        h.makeCCW(P),
                                                        !1 !== r && h.removeCollinearPoints(P, r);
                                                        // use the quick decomposition algorithm (Bayazit)
                                                        var A = h.quickDecomp(P);
                                                        // for each decomposed chunk
                                                        for (b = 0; b < A.length; b++) {
                                                            var B = A[b]
                                                                , _ = B.map(function(e) {
                                                                return {
                                                                    x: e[0],
                                                                    y: e[1]
                                                                }
                                                            });
                                                            // convert vertices into the correct structure
                                                            0 < l && a.area(_) < l || p.push({
                                                                position: a.centre(_),
                                                                vertices: _
                                                            })
                                                        }
                                                    }
                                                // create body parts
                                                for (b = 0; b < p.length; b++)
                                                    p[b] = m.create(c.extend(p[b], n));
                                                // flag internal edges (coincident part edges)
                                                if (s) {
                                                    for (b = 0; b < p.length; b++) {
                                                        var I = p[b];
                                                        for (f = b + 1; f < p.length; f++) {
                                                            var T = p[f];
                                                            if (g.overlaps(I.bounds, T.bounds)) {
                                                                var R = I.vertices
                                                                    , M = T.vertices;
                                                                // iterate vertices of both parts
                                                                for (S = 0; S < I.vertices.length; S++)
                                                                    for (w = 0; w < T.vertices.length; w++) {
                                                                        // find distances between the vertices
                                                                        var E = u.magnitudeSquared(u.sub(R[(S + 1) % R.length], M[w]))
                                                                            , V = u.magnitudeSquared(u.sub(R[S], M[(w + 1) % M.length]));
                                                                        // if both vertices are very close, consider the edge concident (internal)
                                                                        E < 5 && V < 5 && (R[S].isInternal = !0,
                                                                            M[w].isInternal = !0)
                                                                    }
                                                            }
                                                        }
                                                    }
                                                }
                                                return 1 < p.length ? (d = m.create(c.extend({
                                                    parts: p.slice(0)
                                                }, n)),
                                                    m.setPosition(d, {
                                                        x: e,
                                                        y: t
                                                    }),
                                                    d) : p[0]
                                            }
                                    }
                                )()
                            }
                        ).call(this, "undefined" == typeof g ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : g)
                    }
                        , {
                            "../body/Body": 1,
                            "../core/Common": 14,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29
                        }],
                    24: [function(e, t) {
                        /**
                         * The `Matter.Composites` module contains factory methods for creating composite bodies
                         * with commonly used configurations (such as stacks and chains).
                         *
                         * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
                         *
                         * @class Composites
                         */
                        var i = {};
                        t.exports = i;
                        var o = e("../body/Composite")
                            , n = e("../constraint/Constraint")
                            , s = e("../core/Common")
                            , r = e("../body/Body")
                            , a = e("./Bodies");
                        (function() {
                                i.stack = function(e, t, n, s, a, l, d) {
                                    for (var c = o.create({
                                        label: "Stack"
                                    }), p = e, m = t, g = 0, u = 0, h, v; u < s; u++) {
                                        v = 0;
                                        for (var b = 0, f; b < n; b++)
                                            if (f = d(p, m, b, u, h, g),
                                                f) {
                                                var S = f.bounds.max.y - f.bounds.min.y
                                                    , C = f.bounds.max.x - f.bounds.min.x;
                                                S > v && (v = S),
                                                    r.translate(f, {
                                                        x: .5 * C,
                                                        y: .5 * S
                                                    }),
                                                    p = f.bounds.max.x + a,
                                                    o.addBody(c, f),
                                                    h = f,
                                                    g += 1
                                            } else
                                                p += a;
                                        m += v + l,
                                            p = e
                                    }
                                    return c
                                }
                                    ,
                                    i.chain = function(e, t, r, a, l, d) {
                                        for (var c = e.bodies, p = 1; p < c.length; p++) {
                                            var m = c[p - 1]
                                                , g = c[p]
                                                , u = m.bounds.max.y - m.bounds.min.y
                                                , y = m.bounds.max.x - m.bounds.min.x
                                                , x = g.bounds.max.y - g.bounds.min.y
                                                , h = g.bounds.max.x - g.bounds.min.x
                                                , v = s.extend({
                                                bodyA: m,
                                                pointA: {
                                                    x: y * t,
                                                    y: u * r
                                                },
                                                bodyB: g,
                                                pointB: {
                                                    x: h * a,
                                                    y: x * l
                                                }
                                            }, d);
                                            o.addConstraint(e, n.create(v))
                                        }
                                        return e.label += " Chain",
                                            e
                                    }
                                    ,
                                    i.mesh = function(e, t, i, r, a) {
                                        var l = e.bodies, d, c, p, m, g;
                                        for (d = 0; d < i; d++) {
                                            for (c = 1; c < t; c++)
                                                p = l[c - 1 + d * t],
                                                    m = l[c + d * t],
                                                    o.addConstraint(e, n.create(s.extend({
                                                        bodyA: p,
                                                        bodyB: m
                                                    }, a)));
                                            if (0 < d)
                                                for (c = 0; c < t; c++)
                                                    p = l[c + (d - 1) * t],
                                                        m = l[c + d * t],
                                                        o.addConstraint(e, n.create(s.extend({
                                                            bodyA: p,
                                                            bodyB: m
                                                        }, a))),
                                                    r && 0 < c && (g = l[c - 1 + (d - 1) * t],
                                                        o.addConstraint(e, n.create(s.extend({
                                                            bodyA: g,
                                                            bodyB: m
                                                        }, a)))),
                                                    r && c < t - 1 && (g = l[c + 1 + (d - 1) * t],
                                                        o.addConstraint(e, n.create(s.extend({
                                                            bodyA: g,
                                                            bodyB: m
                                                        }, a))))
                                        }
                                        return e.label += " Mesh",
                                            e
                                    }
                                    ,
                                    i.pyramid = function(e, t, o, n, s, a, l) {
                                        return i.stack(e, t, o, n, s, a, function(t, a, c, m, g, u) {
                                            var i = d(n, p(o / 2))
                                                , y = g ? g.bounds.max.x - g.bounds.min.x : 0;
                                            // retroactively fix the first body's position, since width was unknown
                                            if (!(m > i)) {
                                                m = i - m;
                                                var x = m
                                                    , h = o - 1 - m;
                                                if (!(c < x || c > h)) {
                                                    1 === u && r.translate(g, {
                                                        x: (c + (1 == o % 2 ? 1 : -1)) * y,
                                                        y: 0
                                                    });
                                                    var v = g ? c * y : 0;
                                                    return l(e + v + c * s, a, c, m, g, u)
                                                }
                                            }
                                            // reverse row order
                                        })
                                    }
                                    ,
                                    i.newtonsCradle = function(e, t, s, r, l) {
                                        for (var d = o.create({
                                            label: "Newtons Cradle"
                                        }), c = 0; c < s; c++) {
                                            var p = 1.9
                                                , m = a.circle(e + c * (r * p), t + l, r, {
                                                inertia: 1 / 0,
                                                restitution: 1,
                                                friction: 0,
                                                frictionAir: 1e-4,
                                                slop: 1
                                            })
                                                , g = n.create({
                                                pointA: {
                                                    x: e + c * (r * p),
                                                    y: t
                                                },
                                                bodyB: m
                                            });
                                            o.addBody(d, m),
                                                o.addConstraint(d, g)
                                        }
                                        return d
                                    }
                                    ,
                                    i.car = function(e, t, i, s, l) {
                                        var d = r.nextGroup(!0)
                                            , c = .5 * -i + 20
                                            , p = .5 * i - 20
                                            , m = o.create({
                                            label: "Car"
                                        })
                                            , g = a.rectangle(e, t, i, s, {
                                            collisionFilter: {
                                                group: d
                                            },
                                            chamfer: {
                                                radius: .5 * s
                                            },
                                            density: 2e-4
                                        })
                                            , u = a.circle(e + c, t + 0, l, {
                                            collisionFilter: {
                                                group: d
                                            },
                                            friction: .8
                                        })
                                            , y = a.circle(e + p, t + 0, l, {
                                            collisionFilter: {
                                                group: d
                                            },
                                            friction: .8
                                        })
                                            , x = n.create({
                                            bodyB: g,
                                            pointB: {
                                                x: c,
                                                y: 0
                                            },
                                            bodyA: u,
                                            stiffness: 1,
                                            length: 0
                                        })
                                            , h = n.create({
                                            bodyB: g,
                                            pointB: {
                                                x: p,
                                                y: 0
                                            },
                                            bodyA: y,
                                            stiffness: 1,
                                            length: 0
                                        });
                                        return o.addBody(m, g),
                                            o.addBody(m, u),
                                            o.addBody(m, y),
                                            o.addConstraint(m, x),
                                            o.addConstraint(m, h),
                                            m
                                    }
                                    ,
                                    i.softBody = function(e, t, o, n, r, l, d, c, p, m) {
                                        p = s.extend({
                                            inertia: 1 / 0
                                        }, p),
                                            m = s.extend({
                                                stiffness: .2,
                                                render: {
                                                    type: "line",
                                                    anchors: !1
                                                }
                                            }, m);
                                        var g = i.stack(e, t, o, n, r, l, function(e, t) {
                                            return a.circle(e, t, c, p)
                                        });
                                        return i.mesh(g, o, n, d, m),
                                            g.label = "Soft Body",
                                            g
                                    }
                            }
                        )()
                    }
                        , {
                            "../body/Body": 1,
                            "../body/Composite": 2,
                            "../constraint/Constraint": 12,
                            "../core/Common": 14,
                            "./Bodies": 23
                        }],
                    25: [function(e, t) {
                        /**
                         * The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
                         *
                         * @class Axes
                         */
                        var i = {};
                        t.exports = i;
                        var o = e("../geometry/Vector")
                            , n = e("../core/Common");
                        (function() {
                                i.fromVertices = function(e) {
                                    // find the unique axes, using edge normal gradients
                                    for (var t = {}, s = 0; s < e.length; s++) {
                                        var r = (s + 1) % e.length
                                            , a = o.normalise({
                                            x: e[r].y - e[s].y,
                                            y: e[s].x - e[r].x
                                        })
                                            , l = 0 === a.y ? 1 / 0 : a.x / a.y;
                                        // limit precision
                                        l = l.toFixed(3).toString(),
                                            t[l] = a
                                    }
                                    return n.values(t)
                                }
                                    ,
                                    i.rotate = function(e, t) {
                                        if (0 !== t)
                                            for (var o = r(t), n = s(t), a = 0; a < e.length; a++) {
                                                var l = e[a], d;
                                                d = l.x * o - l.y * n,
                                                    l.y = l.x * n + l.y * o,
                                                    l.x = d
                                            }
                                    }
                            }
                        )()
                    }
                        , {
                            "../core/Common": 14,
                            "../geometry/Vector": 28
                        }],
                    26: [function(e, t) {
                        /**
                         * The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
                         *
                         * @class Bounds
                         */
                        var i = {};
                        t.exports = i,
                            function() {
                                i.create = function(e) {
                                    var t = {
                                        min: {
                                            x: 0,
                                            y: 0
                                        },
                                        max: {
                                            x: 0,
                                            y: 0
                                        }
                                    };
                                    return e && i.update(t, e),
                                        t
                                }
                                    ,
                                    i.update = function(e, t, o) {
                                        e.min.x = 1 / 0,
                                            e.max.x = -Infinity,
                                            e.min.y = 1 / 0,
                                            e.max.y = -Infinity;
                                        for (var n = 0, s; n < t.length; n++)
                                            s = t[n],
                                            s.x > e.max.x && (e.max.x = s.x),
                                            s.x < e.min.x && (e.min.x = s.x),
                                            s.y > e.max.y && (e.max.y = s.y),
                                            s.y < e.min.y && (e.min.y = s.y);
                                        o && (0 < o.x ? e.max.x += o.x : e.min.x += o.x,
                                            0 < o.y ? e.max.y += o.y : e.min.y += o.y)
                                    }
                                    ,
                                    i.contains = function(e, t) {
                                        return t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y
                                    }
                                    ,
                                    i.overlaps = function(e, t) {
                                        return e.min.x <= t.max.x && e.max.x >= t.min.x && e.max.y >= t.min.y && e.min.y <= t.max.y
                                    }
                                    ,
                                    i.translate = function(e, t) {
                                        e.min.x += t.x,
                                            e.max.x += t.x,
                                            e.min.y += t.y,
                                            e.max.y += t.y
                                    }
                                    ,
                                    i.shift = function(e, t) {
                                        var i = e.max.x - e.min.x
                                            , o = e.max.y - e.min.y;
                                        e.min.x = t.x,
                                            e.max.x = t.x + i,
                                            e.min.y = t.y,
                                            e.max.y = t.y + o
                                    }
                            }()
                    }
                        , {}],
                    27: [function(e, t) {
                        /**
                         * The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
                         *
                         * To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
                         *
                         * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
                         *
                         * @class Svg
                         */
                        var o = {};
                        t.exports = o;
                        e("../geometry/Bounds");
                        (function() {
                                o.pathToVertices = function(e, t) {
                                    // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
                                    var n = [], s = 0, r = 0, a = 0, l, d, c, p, m, g, u, h, v, b, f, S;
                                    t = t || 15;
                                    var C = function(e, t, i) {
                                        // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
                                        var o = 1 == i % 2 && 1 < i;
                                        // when the last point doesn't equal the current point add the current point
                                        if (!v || e != v.x || t != v.y) {
                                            v && o ? (f = v.x,
                                                S = v.y) : (f = 0,
                                                S = 0);
                                            var s = {
                                                x: f + e,
                                                y: S + t
                                            };
                                            // set last point
                                            (o || !v) && (v = s),
                                                n.push(s),
                                                r = f + e,
                                                a = S + t
                                        }
                                    }
                                        , w = function(e) {
                                        var t = e.pathSegTypeAsLetter.toUpperCase();
                                        // skip path ends
                                        "Z" !== t && ("M" === t || "L" === t || "T" === t || "C" === t || "S" === t || "Q" === t ? (r = e.x,
                                            a = e.y) : "H" === t ? r = e.x : "V" === t ? a = e.y : void 0,
                                            C(r, a, e.pathSegType));
                                        // map segment to x and y
                                    };
                                    // ensure path is absolute
                                    for (o._svgPathToAbsolute(e),
                                             c = e.getTotalLength(),
                                             g = [],
                                             l = 0; l < e.pathSegList.numberOfItems; l += 1)
                                        g.push(e.pathSegList.getItem(l));
                                    // sample through path
                                    for (u = g.concat(); s < c; ) {
                                        // new segment
                                        if (b = e.getPathSegAtLength(s),
                                            m = g[b],
                                        m != h) {
                                            for (; u.length && u[0] != m; )
                                                w(u.shift());
                                            h = m
                                        }
                                        // add points in between when curving
                                        // TODO: adaptive sampling
                                        switch (m.pathSegTypeAsLetter.toUpperCase()) {
                                            case "C":
                                            case "T":
                                            case "S":
                                            case "Q":
                                            case "A":
                                                p = e.getPointAtLength(s),
                                                    C(p.x, p.y, 0);
                                        }
                                        // increment by sample value
                                        s += t
                                    }
                                    // add remaining segments not passed by sampling
                                    for (l = 0,
                                             d = u.length; l < d; ++l)
                                        w(u[l]);
                                    return n
                                }
                                    ,
                                    o._svgPathToAbsolute = function(e) {
                                        for (var t = e.pathSegList, o = 0, n = 0, s = t.numberOfItems, r = 0, a, l, d, c, p, m; r < s; ++r) {
                                            var g = t.getItem(r)
                                                , u = g.pathSegTypeAsLetter;
                                            /[MLHVCSQTA]/.test(u) ? ("x"in g && (o = g.x),
                                            "y"in g && (n = g.y)) : ("x1"in g && (d = o + g.x1),
                                            "x2"in g && (p = o + g.x2),
                                            "y1"in g && (c = n + g.y1),
                                            "y2"in g && (m = n + g.y2),
                                            "x"in g && (o += g.x),
                                            "y"in g && (n += g.y),
                                                "m" === u ? t.replaceItem(e.createSVGPathSegMovetoAbs(o, n), r) : "l" === u ? t.replaceItem(e.createSVGPathSegLinetoAbs(o, n), r) : "h" === u ? t.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(o), r) : "v" === u ? t.replaceItem(e.createSVGPathSegLinetoVerticalAbs(n), r) : "c" === u ? t.replaceItem(e.createSVGPathSegCurvetoCubicAbs(o, n, d, c, p, m), r) : "s" === u ? t.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(o, n, p, m), r) : "q" === u ? t.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(o, n, d, c), r) : "t" === u ? t.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(o, n), r) : "a" === u ? t.replaceItem(e.createSVGPathSegArcAbs(o, n, g.r1, g.r2, g.angle, g.largeArcFlag, g.sweepFlag), r) : "z" === u || "Z" === u ? (o = a,
                                                    n = l) : void 0);
                                            ("M" == u || "m" == u) && (a = o,
                                                l = n)
                                        }
                                        // http://phrogz.net/convert-svg-path-to-all-absolute-commands
                                        // Copyright (c) Gavin Kistner
                                        // http://phrogz.net/js/_ReuseLicense.txt
                                        // Modifications: tidy formatting and naming
                                    }
                            }
                        )()
                    }
                        , {
                            "../geometry/Bounds": 26
                        }],
                    28: [function(e, i) {
                        /**
                         * The `Matter.Vector` module contains methods for creating and manipulating vectors.
                         * Vectors are the basis of all the geometry related operations in the engine.
                         * A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
                         *
                         * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
                         *
                         * @class Vector
                         */
                            // TODO: consider params for reusing vector objects
                        var o = {};
                        i.exports = o,
                            function() {
                                o.create = function(e, t) {
                                    return {
                                        x: e || 0,
                                        y: t || 0
                                    }
                                }
                                    ,
                                    o.clone = function(e) {
                                        return {
                                            x: e.x,
                                            y: e.y
                                        }
                                    }
                                    ,
                                    o.magnitude = function(e) {
                                        return t(e.x * e.x + e.y * e.y)
                                    }
                                    ,
                                    o.magnitudeSquared = function(e) {
                                        return e.x * e.x + e.y * e.y
                                    }
                                    ,
                                    o.rotate = function(e, t, i) {
                                        var o = r(t)
                                            , n = s(t);
                                        i || (i = {});
                                        var a = e.x * o - e.y * n;
                                        return i.y = e.x * n + e.y * o,
                                            i.x = a,
                                            i
                                    }
                                    ,
                                    o.rotateAbout = function(e, t, i, o) {
                                        var n = r(t)
                                            , a = s(t);
                                        o || (o = {});
                                        var l = i.x + ((e.x - i.x) * n - (e.y - i.y) * a);
                                        return o.y = i.y + ((e.x - i.x) * a + (e.y - i.y) * n),
                                            o.x = l,
                                            o
                                    }
                                    ,
                                    o.normalise = function(e) {
                                        var t = o.magnitude(e);
                                        return 0 === t ? {
                                            x: 0,
                                            y: 0
                                        } : {
                                            x: e.x / t,
                                            y: e.y / t
                                        }
                                    }
                                    ,
                                    o.dot = function(e, t) {
                                        return e.x * t.x + e.y * t.y
                                    }
                                    ,
                                    o.cross = function(e, t) {
                                        return e.x * t.y - e.y * t.x
                                    }
                                    ,
                                    o.cross3 = function(e, t, i) {
                                        return (t.x - e.x) * (i.y - e.y) - (t.y - e.y) * (i.x - e.x)
                                    }
                                    ,
                                    o.add = function(e, t, i) {
                                        return i || (i = {}),
                                            i.x = e.x + t.x,
                                            i.y = e.y + t.y,
                                            i
                                    }
                                    ,
                                    o.sub = function(e, t, i) {
                                        return i || (i = {}),
                                            i.x = e.x - t.x,
                                            i.y = e.y - t.y,
                                            i
                                    }
                                    ,
                                    o.mult = function(e, t) {
                                        return {
                                            x: e.x * t,
                                            y: e.y * t
                                        }
                                    }
                                    ,
                                    o.div = function(e, t) {
                                        return {
                                            x: e.x / t,
                                            y: e.y / t
                                        }
                                    }
                                    ,
                                    o.perp = function(e, t) {
                                        return t = !0 === t ? -1 : 1,
                                            {
                                                x: t * -e.y,
                                                y: t * e.x
                                            }
                                    }
                                    ,
                                    o.neg = function(e) {
                                        return {
                                            x: -e.x,
                                            y: -e.y
                                        }
                                    }
                                    ,
                                    o.angle = function(e, t) {
                                        return Math.atan2(t.y - e.y, t.x - e.x)
                                    }
                                    ,
                                    o._temp = [o.create(), o.create(), o.create(), o.create(), o.create(), o.create()]
                            }()
                    }
                        , {}],
                    29: [function(e, i) {
                        /**
                         * The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
                         * A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
                         * A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
                         *
                         * See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
                         *
                         * @class Vertices
                         */
                        var o = {};
                        i.exports = o;
                        var a = e("../geometry/Vector")
                            , l = e("../core/Common");
                        (function() {
                                o.create = function(e, t) {
                                    for (var o = [], n = 0; n < e.length; n++) {
                                        var s = e[n]
                                            , r = {
                                            x: s.x,
                                            y: s.y,
                                            index: n,
                                            body: t,
                                            isInternal: !1
                                        };
                                        o.push(r)
                                    }
                                    return o
                                }
                                    ,
                                    o.fromPath = function(e, t) {
                                        var i = /L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/ig
                                            , n = [];
                                        return e.replace(i, function(e, t, i) {
                                            n.push({
                                                x: parseFloat(t),
                                                y: parseFloat(i)
                                            })
                                        }),
                                            o.create(n, t)
                                    }
                                    ,
                                    o.centre = function(e) {
                                        for (var t = o.area(e, !0), n = {
                                            x: 0,
                                            y: 0
                                        }, s = 0, r, l, d; s < e.length; s++)
                                            d = (s + 1) % e.length,
                                                r = a.cross(e[s], e[d]),
                                                l = a.mult(a.add(e[s], e[d]), r),
                                                n = a.add(n, l);
                                        return a.div(n, 6 * t)
                                    }
                                    ,
                                    o.mean = function(e) {
                                        for (var t = {
                                            x: 0,
                                            y: 0
                                        }, o = 0; o < e.length; o++)
                                            t.x += e[o].x,
                                                t.y += e[o].y;
                                        return a.div(t, e.length)
                                    }
                                    ,
                                    o.area = function(e, t) {
                                        for (var o = 0, n = e.length - 1, s = 0; s < e.length; s++)
                                            o += (e[n].x - e[s].x) * (e[n].y + e[s].y),
                                                n = s;
                                        return t ? o / 2 : m(o) / 2
                                    }
                                    ,
                                    o.inertia = function(e, t) {
                                        // find the polygon's moment of inertia, using second moment of area
                                        // from equations at http://www.physicsforums.com/showthread.php?t=25293
                                        for (var i = 0, o = 0, s = e, r = 0, l, d; r < s.length; r++)
                                            d = (r + 1) % s.length,
                                                l = m(a.cross(s[d], s[r])),
                                                i += l * (a.dot(s[d], s[d]) + a.dot(s[d], s[r]) + a.dot(s[r], s[r])),
                                                o += l;
                                        return t / 6 * (i / o)
                                    }
                                    ,
                                    o.translate = function(e, t, o) {
                                        var n;
                                        if (o)
                                            for (n = 0; n < e.length; n++)
                                                e[n].x += t.x * o,
                                                    e[n].y += t.y * o;
                                        else
                                            for (n = 0; n < e.length; n++)
                                                e[n].x += t.x,
                                                    e[n].y += t.y;
                                        return e
                                    }
                                    ,
                                    o.rotate = function(e, t, o) {
                                        if (0 !== t) {
                                            for (var n = r(t), a = s(t), l = 0; l < e.length; l++) {
                                                var d = e[l]
                                                    , c = d.x - o.x
                                                    , p = d.y - o.y;
                                                d.x = o.x + (c * n - p * a),
                                                    d.y = o.y + (c * a + p * n)
                                            }
                                            return e
                                        }
                                    }
                                    ,
                                    o.contains = function(e, t) {
                                        for (var o = 0; o < e.length; o++) {
                                            var n = e[o]
                                                , s = e[(o + 1) % e.length];
                                            if (0 < (t.x - n.x) * (s.y - n.y) + (t.y - n.y) * (n.x - s.x))
                                                return !1
                                        }
                                        return !0
                                    }
                                    ,
                                    o.scale = function(e, t, n, s) {
                                        if (1 === t && 1 === n)
                                            return e;
                                        s = s || o.centre(e);
                                        for (var r = 0, l, d; r < e.length; r++)
                                            l = e[r],
                                                d = a.sub(l, s),
                                                e[r].x = s.x + d.x * t,
                                                e[r].y = s.y + d.y * n;
                                        return e
                                    }
                                    ,
                                    o.chamfer = function(e, o, s, r, d) {
                                        o = "number" == typeof o ? [o] : o || [8],
                                            s = "undefined" == typeof s ? -1 : s,
                                            r = r || 2,
                                            d = d || 14;
                                        for (var c = [], p = 0; p < e.length; p++) {
                                            var m = e[0 <= p - 1 ? p - 1 : e.length - 1]
                                                , g = e[p]
                                                , u = e[(p + 1) % e.length]
                                                , y = o[p < o.length ? p : o.length - 1];
                                            if (0 === y) {
                                                c.push(g);
                                                continue
                                            }
                                            var x = a.normalise({
                                                x: g.y - m.y,
                                                y: m.x - g.x
                                            })
                                                , h = a.normalise({
                                                x: u.y - g.y,
                                                y: g.x - u.x
                                            })
                                                , v = t(2 * n(y, 2))
                                                , b = a.mult(l.clone(x), y)
                                                , f = a.normalise(a.mult(a.add(x, h), .5))
                                                , S = a.sub(g, a.mult(f, v))
                                                , C = s;
                                            -1 === s && (C = 1.75 * n(y, .32)),
                                                C = l.clamp(C, r, d),
                                            1 == C % 2 && (C += 1);
                                            for (var w = Math.acos(a.dot(x, h)), P = w / C, A = 0; A < C; A++)
                                                c.push(a.add(a.rotate(b, P * A), S))
                                        }
                                        return c
                                    }
                                    ,
                                    o.clockwiseSort = function(e) {
                                        var t = o.mean(e);
                                        return e.sort(function(e, i) {
                                            return a.angle(t, e) - a.angle(t, i)
                                        }),
                                            e
                                    }
                                    ,
                                    o.isConvex = function(e) {
                                        // http://paulbourke.net/geometry/polygonmesh/
                                        // Copyright (c) Paul Bourke (use permitted)
                                        var t = 0, o = e.length, n, s, r, a;
                                        if (3 > o)
                                            return null;
                                        for (n = 0; n < o; n++)
                                            if (s = (n + 1) % o,
                                                r = (n + 2) % o,
                                                a = (e[s].x - e[n].x) * (e[r].y - e[s].y),
                                                a -= (e[s].y - e[n].y) * (e[r].x - e[s].x),
                                                0 > a ? t |= 1 : 0 < a && (t |= 2),
                                            3 == t)
                                                return !1;
                                        return 0 != t || null
                                    }
                                    ,
                                    o.hull = function(e) {
                                        // http://geomalgorithms.com/a10-_hull-1.html
                                        var t = [], o = [], n, s;
                                        // sort vertices on x-axis (y-axis for ties)
                                        // build lower hull
                                        for (e = e.slice(0),
                                                 e.sort(function(e, t) {
                                                     var i = e.x - t.x;
                                                     return 0 == i ? e.y - t.y : i
                                                 }),
                                                 s = 0; s < e.length; s += 1) {
                                            for (n = e[s]; 2 <= o.length && 0 >= a.cross3(o[o.length - 2], o[o.length - 1], n); )
                                                o.pop();
                                            o.push(n)
                                        }
                                        // build upper hull
                                        for (s = e.length - 1; 0 <= s; s -= 1) {
                                            for (n = e[s]; 2 <= t.length && 0 >= a.cross3(t[t.length - 2], t[t.length - 1], n); )
                                                t.pop();
                                            t.push(n)
                                        }
                                        // concatenation of the lower and upper hulls gives the convex hull
                                        // omit last points because they are repeated at the beginning of the other list
                                        return t.pop(),
                                            o.pop(),
                                            t.concat(o)
                                    }
                            }
                        )()
                    }
                        , {
                            "../core/Common": 14,
                            "../geometry/Vector": 28
                        }],
                    30: [function(e, t) {
                        var i = t.exports = e("../core/Matter");
                        i.Body = e("../body/Body"),
                            i.Composite = e("../body/Composite"),
                            i.World = e("../body/World"),
                            i.Contact = e("../collision/Contact"),
                            i.Detector = e("../collision/Detector"),
                            i.Grid = e("../collision/Grid"),
                            i.Pairs = e("../collision/Pairs"),
                            i.Pair = e("../collision/Pair"),
                            i.Query = e("../collision/Query"),
                            i.Resolver = e("../collision/Resolver"),
                            i.SAT = e("../collision/SAT"),
                            i.Constraint = e("../constraint/Constraint"),
                            i.MouseConstraint = e("../constraint/MouseConstraint"),
                            i.Common = e("../core/Common"),
                            i.Engine = e("../core/Engine"),
                            i.Events = e("../core/Events"),
                            i.Mouse = e("../core/Mouse"),
                            i.Runner = e("../core/Runner"),
                            i.Sleeping = e("../core/Sleeping"),
                            i.Plugin = e("../core/Plugin"),
                            i.Bodies = e("../factory/Bodies"),
                            i.Composites = e("../factory/Composites"),
                            i.Axes = e("../geometry/Axes"),
                            i.Bounds = e("../geometry/Bounds"),
                            i.Svg = e("../geometry/Svg"),
                            i.Vector = e("../geometry/Vector"),
                            i.Vertices = e("../geometry/Vertices"),
                            i.Render = e("../render/Render"),
                            i.RenderPixi = e("../render/RenderPixi"),
                            i.World.add = i.Composite.add,
                            i.World.remove = i.Composite.remove,
                            i.World.addComposite = i.Composite.addComposite,
                            i.World.addBody = i.Composite.addBody,
                            i.World.addConstraint = i.Composite.addConstraint,
                            i.World.clear = i.Composite.clear,
                            i.Engine.run = i.Runner.run
                    }
                        , {
                            "../body/Body": 1,
                            "../body/Composite": 2,
                            "../body/World": 3,
                            "../collision/Contact": 4,
                            "../collision/Detector": 5,
                            "../collision/Grid": 6,
                            "../collision/Pair": 7,
                            "../collision/Pairs": 8,
                            "../collision/Query": 9,
                            "../collision/Resolver": 10,
                            "../collision/SAT": 11,
                            "../constraint/Constraint": 12,
                            "../constraint/MouseConstraint": 13,
                            "../core/Common": 14,
                            "../core/Engine": 15,
                            "../core/Events": 16,
                            "../core/Matter": 17,
                            "../core/Metrics": 18,
                            "../core/Mouse": 19,
                            "../core/Plugin": 20,
                            "../core/Runner": 21,
                            "../core/Sleeping": 22,
                            "../factory/Bodies": 23,
                            "../factory/Composites": 24,
                            "../geometry/Axes": 25,
                            "../geometry/Bounds": 26,
                            "../geometry/Svg": 27,
                            "../geometry/Vector": 28,
                            "../geometry/Vertices": 29,
                            "../render/Render": 31,
                            "../render/RenderPixi": 32
                        }],
                    31: [function(e, t) {
                        /**
                         * The `Matter.Render` module is a simple HTML5 canvas based renderer for visualising instances of `Matter.Engine`.
                         * It is intended for development and debugging purposes, but may also be suitable for simple games.
                         * It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
                         *
                         * @class Render
                         */
                        var n = {};
                        t.exports = n;
                        var s = e("../core/Common")
                            , r = e("../body/Composite")
                            , l = e("../geometry/Bounds")
                            , g = e("../core/Events")
                            , u = e("../collision/Grid")
                            , y = e("../geometry/Vector")
                            , x = e("../core/Mouse");
                        (function() {
                                var e, t;
                                "undefined" != typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                                    window.setTimeout(function() {
                                        e(s.now())
                                    }, 1e3 / 60)
                                }
                                    ,
                                    t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame),
                                    n.create = function(e) {
                                        var t = {
                                            controller: n,
                                            engine: null,
                                            element: null,
                                            canvas: null,
                                            mouse: null,
                                            frameRequestId: null,
                                            options: {
                                                width: 800,
                                                height: 600,
                                                pixelRatio: 1,
                                                background: "#18181d",
                                                wireframeBackground: "#0f0f13",
                                                hasBounds: !!e.bounds,
                                                enabled: !0,
                                                wireframes: !0,
                                                showSleeping: !0,
                                                showDebug: !1,
                                                showBroadphase: !1,
                                                showBounds: !1,
                                                showVelocity: !1,
                                                showCollisions: !1,
                                                showSeparations: !1,
                                                showAxes: !1,
                                                showPositions: !1,
                                                showAngleIndicator: !1,
                                                showIds: !1,
                                                showShadows: !1,
                                                showVertexNumbers: !1,
                                                showConvexHulls: !1,
                                                showInternalEdges: !1,
                                                showMousePosition: !1
                                            }
                                        }
                                            , o = s.extend(t, e);
                                        return o.canvas && (o.canvas.width = o.options.width || o.canvas.width,
                                            o.canvas.height = o.options.height || o.canvas.height),
                                            o.mouse = e.mouse,
                                            o.engine = e.engine,
                                            o.canvas = o.canvas || i(o.options.width, o.options.height),
                                            o.context = o.canvas.getContext("2d"),
                                            o.textures = {},
                                            o.bounds = o.bounds || {
                                                min: {
                                                    x: 0,
                                                    y: 0
                                                },
                                                max: {
                                                    x: o.canvas.width,
                                                    y: o.canvas.height
                                                }
                                            },
                                        1 !== o.options.pixelRatio && n.setPixelRatio(o, o.options.pixelRatio),
                                            s.isElement(o.element) ? o.element.appendChild(o.canvas) : !o.canvas.parentNode && s.log("Render.create: options.element was undefined, render.canvas was created but not appended", "warn"),
                                            o
                                    }
                                    ,
                                    n.run = function(t) {
                                        (function i() {
                                                t.frameRequestId = e(i),
                                                    n.world(t)
                                            }
                                        )()
                                    }
                                    ,
                                    n.stop = function(e) {
                                        t(e.frameRequestId)
                                    }
                                    ,
                                    n.setPixelRatio = function(e, t) {
                                        var i = e.options
                                            , o = e.canvas;
                                        "auto" === t && (t = h(o)),
                                            i.pixelRatio = t,
                                            o.setAttribute("data-pixel-ratio", t),
                                            o.width = i.width * t,
                                            o.height = i.height * t,
                                            o.style.width = i.width + "px",
                                            o.style.height = i.height + "px",
                                            e.context.scale(t, t)
                                    }
                                    ,
                                    n.lookAt = function(e, t, o, n) {
                                        n = !("undefined" != typeof n) || n,
                                            t = s.isArray(t) ? t : [t],
                                            o = o || {
                                                x: 0,
                                                y: 0
                                            };
                                        // find bounds of all objects
                                        for (var r = {
                                            min: {
                                                x: 1 / 0,
                                                y: 1 / 0
                                            },
                                            max: {
                                                x: -Infinity,
                                                y: -Infinity
                                            }
                                        }, a = 0; a < t.length; a += 1) {
                                            var l = t[a]
                                                , d = l.bounds ? l.bounds.min : l.min || l.position || l
                                                , c = l.bounds ? l.bounds.max : l.max || l.position || l;
                                            d && c && (d.x < r.min.x && (r.min.x = d.x),
                                            c.x > r.max.x && (r.max.x = c.x),
                                            d.y < r.min.y && (r.min.y = d.y),
                                            c.y > r.max.y && (r.max.y = c.y))
                                        }
                                        // find ratios
                                        var p = r.max.x - r.min.x + 2 * o.x
                                            , m = r.max.y - r.min.y + 2 * o.y
                                            , g = e.canvas.height
                                            , u = e.canvas.width
                                            , y = u / g
                                            , h = p / m
                                            , v = 1
                                            , b = 1;
                                        // find scale factor
                                        h > y ? b = h / y : v = y / h,
                                            e.options.hasBounds = !0,
                                            e.bounds.min.x = r.min.x,
                                            e.bounds.max.x = r.min.x + p * v,
                                            e.bounds.min.y = r.min.y,
                                            e.bounds.max.y = r.min.y + m * b,
                                        n && (e.bounds.min.x += .5 * p - .5 * (p * v),
                                            e.bounds.max.x += .5 * p - .5 * (p * v),
                                            e.bounds.min.y += .5 * m - .5 * (m * b),
                                            e.bounds.max.y += .5 * m - .5 * (m * b)),
                                            e.bounds.min.x -= o.x,
                                            e.bounds.max.x -= o.x,
                                            e.bounds.min.y -= o.y,
                                            e.bounds.max.y -= o.y,
                                        e.mouse && (x.setScale(e.mouse, {
                                            x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                                            y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height
                                        }),
                                            x.setOffset(e.mouse, e.bounds.min))
                                    }
                                    ,
                                    n.startViewTransform = function(e) {
                                        var t = e.bounds.max.x - e.bounds.min.x
                                            , i = e.bounds.max.y - e.bounds.min.y
                                            , o = t / e.options.width
                                            , n = i / e.options.height;
                                        e.context.scale(1 / o, 1 / n),
                                            e.context.translate(-e.bounds.min.x, -e.bounds.min.y)
                                    }
                                    ,
                                    n.endViewTransform = function(e) {
                                        e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0)
                                    }
                                    ,
                                    n.world = function(e) {
                                        var t = e.engine, o = t.world, s = e.canvas, a = e.context, d = e.options, c = r.allBodies(o), p = r.allConstraints(o), m = d.wireframes ? d.wireframeBackground : d.background, h = [], v = [], f = {
                                            timestamp: t.timing.timestamp
                                        }, S;
                                        // handle bounds
                                        if (g.trigger(e, "beforeRender", f),
                                        e.currentBackground !== m && b(e, m),
                                            a.globalCompositeOperation = "source-in",
                                            a.fillStyle = "transparent",
                                            a.fillRect(0, 0, s.width, s.height),
                                            a.globalCompositeOperation = "source-over",
                                            d.hasBounds) {
                                            // filter out bodies that are not in view
                                            for (S = 0; S < c.length; S++) {
                                                var C = c[S];
                                                l.overlaps(C.bounds, e.bounds) && h.push(C)
                                            }
                                            // filter out constraints that are not in view
                                            for (S = 0; S < p.length; S++) {
                                                var w = p[S]
                                                    , P = w.bodyA
                                                    , A = w.bodyB
                                                    , B = w.pointA
                                                    , _ = w.pointB;
                                                P && (B = y.add(P.position, w.pointA)),
                                                A && (_ = y.add(A.position, w.pointB)),
                                                B && _ && (l.contains(e.bounds, B) || l.contains(e.bounds, _)) && v.push(w)
                                            }
                                            // transform the view
                                            n.startViewTransform(e),
                                            e.mouse && (x.setScale(e.mouse, {
                                                x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                                                y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height
                                            }),
                                                x.setOffset(e.mouse, e.bounds.min))
                                        } else
                                            v = p,
                                                h = c;
                                        !d.wireframes || t.enableSleeping && d.showSleeping ? n.bodies(e, h, a) : (d.showConvexHulls && n.bodyConvexHulls(e, h, a),
                                            n.bodyWireframes(e, h, a)),
                                        d.showBounds && n.bodyBounds(e, h, a),
                                        (d.showAxes || d.showAngleIndicator) && n.bodyAxes(e, h, a),
                                        d.showPositions && n.bodyPositions(e, h, a),
                                        d.showVelocity && n.bodyVelocity(e, h, a),
                                        d.showIds && n.bodyIds(e, h, a),
                                        d.showSeparations && n.separations(e, t.pairs.list, a),
                                        d.showCollisions && n.collisions(e, t.pairs.list, a),
                                        d.showVertexNumbers && n.vertexNumbers(e, h, a),
                                        d.showMousePosition && n.mousePosition(e, e.mouse, a),
                                            n.constraints(v, a),
                                        d.showBroadphase && t.broadphase.controller === u && n.grid(e, t.broadphase, a),
                                        d.showDebug && n.debug(e, a),
                                        d.hasBounds && n.endViewTransform(e),
                                            g.trigger(e, "afterRender", f)
                                    }
                                    ,
                                    n.debug = function(e, t) {
                                        var o = t
                                            , n = e.engine
                                            , s = n.world
                                            , l = n.metrics
                                            , d = e.options
                                            , c = r.allBodies(s);
                                        if (500 <= n.timing.timestamp - (e.debugTimestamp || 0)) {
                                            var p = "";
                                            l.timing && (p += "fps: " + a(l.timing.fps) + "    "),
                                                e.debugString = p,
                                                e.debugTimestamp = n.timing.timestamp
                                        }
                                        if (e.debugString) {
                                            o.font = "12px Arial",
                                                o.fillStyle = d.wireframes ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)";
                                            for (var m = e.debugString.split("\n"), g = 0; g < m.length; g++)
                                                o.fillText(m[g], 50, 50 + 18 * g)
                                        }
                                    }
                                    ,
                                    n.constraints = function(e, t) {
                                        for (var n = t, r = 0, a; r < e.length; r++)
                                            if (a = e[r],
                                            a.render.visible && a.pointA && a.pointB) {
                                                var l = a.bodyA, d = a.bodyB, c, m;
                                                if (c = l ? y.add(l.position, a.pointA) : a.pointA,
                                                "pin" === a.render.type)
                                                    n.beginPath(),
                                                        n.arc(c.x, c.y, 3, 0, 2 * o),
                                                        n.closePath();
                                                else {
                                                    if (m = d ? y.add(d.position, a.pointB) : a.pointB,
                                                        n.beginPath(),
                                                        n.moveTo(c.x, c.y),
                                                    "spring" === a.render.type)
                                                        for (var g = y.sub(m, c), u = y.perp(y.normalise(g)), x = p(s.clamp(a.length / 5, 12, 20)), h = 1, v; h < x; h += 1)
                                                            v = 0 == h % 2 ? 1 : -1,
                                                                n.lineTo(c.x + g.x * (h / x) + 4 * (u.x * v), c.y + g.y * (h / x) + 4 * (u.y * v));
                                                    n.lineTo(m.x, m.y)
                                                }
                                                a.render.lineWidth && (n.lineWidth = a.render.lineWidth,
                                                    n.strokeStyle = a.render.strokeStyle,
                                                    n.stroke()),
                                                a.render.anchors && (n.fillStyle = a.render.strokeStyle,
                                                    n.beginPath(),
                                                    n.arc(c.x, c.y, 3, 0, 2 * o),
                                                    n.arc(m.x, m.y, 3, 0, 2 * o),
                                                    n.closePath(),
                                                    n.fill())
                                            }
                                    }
                                    ,
                                    n.bodyShadows = function(e, t, n) {
                                        for (var s = n, r = e.engine, a = 0, l; a < t.length; a++)
                                            if (l = t[a],
                                                l.render.visible) {
                                                if (l.circleRadius)
                                                    s.beginPath(),
                                                        s.arc(l.position.x, l.position.y, l.circleRadius, 0, 2 * o),
                                                        s.closePath();
                                                else {
                                                    s.beginPath(),
                                                        s.moveTo(l.vertices[0].x, l.vertices[0].y);
                                                    for (var c = 1; c < l.vertices.length; c++)
                                                        s.lineTo(l.vertices[c].x, l.vertices[c].y);
                                                    s.closePath()
                                                }
                                                var p = l.position.x - .5 * e.options.width
                                                    , g = l.position.y - .2 * e.options.height
                                                    , u = m(p) + m(g);
                                                s.shadowColor = "rgba(0,0,0,0.15)",
                                                    s.shadowOffsetX = .05 * p,
                                                    s.shadowOffsetY = .05 * g,
                                                    s.shadowBlur = 1 + 12 * d(1, u / 1e3),
                                                    s.fill(),
                                                    s.shadowColor = null,
                                                    s.shadowOffsetX = null,
                                                    s.shadowOffsetY = null,
                                                    s.shadowBlur = null
                                            }
                                    }
                                    ,
                                    n.bodies = function(e, t, n) {
                                        var s = n, r = e.engine, a = e.options, l = a.showInternalEdges || !a.wireframes, d, c, p, m;
                                        for (p = 0; p < t.length; p++)
                                            if (d = t[p],
                                                d.render.visible)
                                            // handle compound parts
                                                for (m = 1 < d.parts.length ? 1 : 0; m < d.parts.length; m++)
                                                    if (c = d.parts[m],
                                                        c.render.visible) {
                                                        if (a.showSleeping && d.isSleeping ? s.globalAlpha = .5 * c.render.opacity : 1 !== c.render.opacity && (s.globalAlpha = c.render.opacity),
                                                        c.render.sprite && c.render.sprite.texture && !a.wireframes) {
                                                            // part sprite
                                                            var g = c.render.sprite
                                                                , u = v(e, g.texture);
                                                            s.translate(c.position.x, c.position.y),
                                                                s.rotate(c.angle),
                                                                s.drawImage(u, u.width * -g.xOffset * g.xScale, u.height * -g.yOffset * g.yScale, u.width * g.xScale, u.height * g.yScale),
                                                                s.rotate(-c.angle),
                                                                s.translate(-c.position.x, -c.position.y)
                                                        } else {
                                                            // part polygon
                                                            if (c.circleRadius)
                                                                s.beginPath(),
                                                                    s.arc(c.position.x, c.position.y, c.circleRadius, 0, 2 * o);
                                                            else {
                                                                s.beginPath(),
                                                                    s.moveTo(c.vertices[0].x, c.vertices[0].y);
                                                                for (var y = 1; y < c.vertices.length; y++)
                                                                    !c.vertices[y - 1].isInternal || l ? s.lineTo(c.vertices[y].x, c.vertices[y].y) : s.moveTo(c.vertices[y].x, c.vertices[y].y),
                                                                    c.vertices[y].isInternal && !l && s.moveTo(c.vertices[(y + 1) % c.vertices.length].x, c.vertices[(y + 1) % c.vertices.length].y);
                                                                s.lineTo(c.vertices[0].x, c.vertices[0].y),
                                                                    s.closePath()
                                                            }
                                                            a.wireframes ? (s.lineWidth = 1,
                                                                s.strokeStyle = "#bbb",
                                                                s.stroke()) : (s.fillStyle = c.render.fillStyle,
                                                            c.render.lineWidth && (s.lineWidth = c.render.lineWidth,
                                                                s.strokeStyle = c.render.strokeStyle,
                                                                s.stroke()),
                                                                s.fill())
                                                        }
                                                        s.globalAlpha = 1
                                                    }
                                    }
                                    ,
                                    n.bodyWireframes = function(e, t, o) {
                                        var n = o, s = e.options.showInternalEdges, r, a, l, d, c;
                                        // render all bodies
                                        for (n.beginPath(),
                                                 l = 0; l < t.length; l++)
                                            if (r = t[l],
                                                r.render.visible)
                                            // handle compound parts
                                                for (c = 1 < r.parts.length ? 1 : 0; c < r.parts.length; c++) {
                                                    for (a = r.parts[c],
                                                             n.moveTo(a.vertices[0].x, a.vertices[0].y),
                                                             d = 1; d < a.vertices.length; d++)
                                                        !a.vertices[d - 1].isInternal || s ? n.lineTo(a.vertices[d].x, a.vertices[d].y) : n.moveTo(a.vertices[d].x, a.vertices[d].y),
                                                        a.vertices[d].isInternal && !s && n.moveTo(a.vertices[(d + 1) % a.vertices.length].x, a.vertices[(d + 1) % a.vertices.length].y);
                                                    n.lineTo(a.vertices[0].x, a.vertices[0].y)
                                                }
                                        n.lineWidth = 1,
                                            n.strokeStyle = "#bbb",
                                            n.stroke()
                                    }
                                    ,
                                    n.bodyConvexHulls = function(e, t, o) {
                                        var n = o, s, r, a;
                                        // render convex hulls
                                        for (n.beginPath(),
                                                 r = 0; r < t.length; r++)
                                            if (s = t[r],
                                            s.render.visible && 1 !== s.parts.length) {
                                                for (n.moveTo(s.vertices[0].x, s.vertices[0].y),
                                                         a = 1; a < s.vertices.length; a++)
                                                    n.lineTo(s.vertices[a].x, s.vertices[a].y);
                                                n.lineTo(s.vertices[0].x, s.vertices[0].y)
                                            }
                                        n.lineWidth = 1,
                                            n.strokeStyle = "rgba(255,255,255,0.2)",
                                            n.stroke()
                                    }
                                    ,
                                    n.vertexNumbers = function(e, t, o) {
                                        var n = o, s, r, a;
                                        for (s = 0; s < t.length; s++) {
                                            var l = t[s].parts;
                                            for (a = 1 < l.length ? 1 : 0; a < l.length; a++) {
                                                var d = l[a];
                                                for (r = 0; r < d.vertices.length; r++)
                                                    n.fillStyle = "rgba(255,255,255,0.2)",
                                                        n.fillText(s + "_" + r, d.position.x + .8 * (d.vertices[r].x - d.position.x), d.position.y + .8 * (d.vertices[r].y - d.position.y))
                                            }
                                        }
                                    }
                                    ,
                                    n.mousePosition = function(e, t, i) {
                                        var o = i;
                                        o.fillStyle = "rgba(255,255,255,0.8)",
                                            o.fillText(t.position.x + "  " + t.position.y, t.position.x + 5, t.position.y - 5)
                                    }
                                    ,
                                    n.bodyBounds = function(e, t, o) {
                                        var n = o
                                            , s = e.engine
                                            , r = e.options;
                                        n.beginPath();
                                        for (var a = 0, l; a < t.length; a++)
                                            if (l = t[a],
                                                l.render.visible)
                                                for (var d = t[a].parts, c = 1 < d.length ? 1 : 0, p; c < d.length; c++)
                                                    p = d[c],
                                                        n.rect(p.bounds.min.x, p.bounds.min.y, p.bounds.max.x - p.bounds.min.x, p.bounds.max.y - p.bounds.min.y);
                                        n.strokeStyle = r.wireframes ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)",
                                            n.lineWidth = 1,
                                            n.stroke()
                                    }
                                    ,
                                    n.bodyAxes = function(e, t, o) {
                                        var n = o, s = e.engine, r = e.options, a, l, d, c;
                                        for (n.beginPath(),
                                                 l = 0; l < t.length; l++) {
                                            var p = t[l]
                                                , m = p.parts;
                                            if (p.render.visible)
                                                if (r.showAxes)
                                                // render all axes
                                                    for (d = 1 < m.length ? 1 : 0; d < m.length; d++)
                                                        for (a = m[d],
                                                                 c = 0; c < a.axes.length; c++) {
                                                            var g = a.axes[c];
                                                            n.moveTo(a.position.x, a.position.y),
                                                                n.lineTo(a.position.x + 20 * g.x, a.position.y + 20 * g.y)
                                                        }
                                                else
                                                    for (d = 1 < m.length ? 1 : 0; d < m.length; d++)
                                                        for (a = m[d],
                                                                 c = 0; c < a.axes.length; c++)
                                                            n.moveTo(a.position.x, a.position.y),
                                                                n.lineTo((a.vertices[0].x + a.vertices[a.vertices.length - 1].x) / 2, (a.vertices[0].y + a.vertices[a.vertices.length - 1].y) / 2)
                                        }
                                        r.wireframes ? (n.strokeStyle = "indianred",
                                            n.lineWidth = 1) : (n.strokeStyle = "rgba(255, 255, 255, 0.4)",
                                            n.globalCompositeOperation = "overlay",
                                            n.lineWidth = 2),
                                            n.stroke(),
                                            n.globalCompositeOperation = "source-over"
                                    }
                                    ,
                                    n.bodyPositions = function(e, t, n) {
                                        var s = n, r = e.engine, a = e.options, l, d, c, p;
                                        // render current positions
                                        for (s.beginPath(),
                                                 c = 0; c < t.length; c++)
                                            if (l = t[c],
                                                l.render.visible)
                                            // handle compound parts
                                                for (p = 0; p < l.parts.length; p++)
                                                    d = l.parts[p],
                                                        s.arc(d.position.x, d.position.y, 3, 0, 2 * o, !1),
                                                        s.closePath();
                                        // render previous positions
                                        for (s.fillStyle = a.wireframes ? "indianred" : "rgba(0,0,0,0.5)",
                                                 s.fill(),
                                                 s.beginPath(),
                                                 c = 0; c < t.length; c++)
                                            l = t[c],
                                            l.render.visible && (s.arc(l.positionPrev.x, l.positionPrev.y, 2, 0, 2 * o, !1),
                                                s.closePath());
                                        s.fillStyle = "rgba(255,165,0,0.8)",
                                            s.fill()
                                    }
                                    ,
                                    n.bodyVelocity = function(e, t, o) {
                                        var n = o;
                                        n.beginPath();
                                        for (var s = 0, r; s < t.length; s++)
                                            r = t[s],
                                            r.render.visible && (n.moveTo(r.position.x, r.position.y),
                                                n.lineTo(r.position.x + 2 * (r.position.x - r.positionPrev.x), r.position.y + 2 * (r.position.y - r.positionPrev.y)));
                                        n.lineWidth = 3,
                                            n.strokeStyle = "cornflowerblue",
                                            n.stroke()
                                    }
                                    ,
                                    n.bodyIds = function(e, t, o) {
                                        var n = o, s, r;
                                        for (s = 0; s < t.length; s++)
                                            if (t[s].render.visible) {
                                                var a = t[s].parts;
                                                for (r = 1 < a.length ? 1 : 0; r < a.length; r++) {
                                                    var l = a[r];
                                                    n.font = "12px Arial",
                                                        n.fillStyle = "rgba(255,255,255,0.5)",
                                                        n.fillText(l.id, l.position.x + 10, l.position.y - 10)
                                                }
                                            }
                                    }
                                    ,
                                    n.collisions = function(e, t, o) {
                                        var n = o, s = e.options, r, a, l, d;
                                        // render collision positions
                                        for (n.beginPath(),
                                                 l = 0; l < t.length; l++)
                                            if (r = t[l],
                                                r.isActive)
                                                for (a = r.collision,
                                                         d = 0; d < r.activeContacts.length; d++) {
                                                    var c = r.activeContacts[d]
                                                        , p = c.vertex;
                                                    n.rect(p.x - 1.5, p.y - 1.5, 3.5, 3.5)
                                                }
                                        // render collision normals
                                        for (n.fillStyle = s.wireframes ? "rgba(255,255,255,0.7)" : "orange",
                                                 n.fill(),
                                                 n.beginPath(),
                                                 l = 0; l < t.length; l++)
                                            if (r = t[l],
                                            r.isActive && (a = r.collision,
                                            0 < r.activeContacts.length)) {
                                                var m = r.activeContacts[0].vertex.x
                                                    , g = r.activeContacts[0].vertex.y;
                                                2 === r.activeContacts.length && (m = (r.activeContacts[0].vertex.x + r.activeContacts[1].vertex.x) / 2,
                                                    g = (r.activeContacts[0].vertex.y + r.activeContacts[1].vertex.y) / 2),
                                                    a.bodyB === a.supports[0].body || !0 === a.bodyA.isStatic ? n.moveTo(m - 8 * a.normal.x, g - 8 * a.normal.y) : n.moveTo(m + 8 * a.normal.x, g + 8 * a.normal.y),
                                                    n.lineTo(m, g)
                                            }
                                        n.strokeStyle = s.wireframes ? "rgba(255,165,0,0.7)" : "orange",
                                            n.lineWidth = 1,
                                            n.stroke()
                                    }
                                    ,
                                    n.separations = function(e, t, o) {
                                        var n = o, s = e.options, r, a, l, d, c;
                                        // render separations
                                        for (n.beginPath(),
                                                 c = 0; c < t.length; c++)
                                            if (r = t[c],
                                                r.isActive) {
                                                a = r.collision,
                                                    l = a.bodyA,
                                                    d = a.bodyB;
                                                var p = 1;
                                                d.isStatic || l.isStatic || (p = .5),
                                                d.isStatic && (p = 0),
                                                    n.moveTo(d.position.x, d.position.y),
                                                    n.lineTo(d.position.x - a.penetration.x * p, d.position.y - a.penetration.y * p),
                                                    p = 1,
                                                d.isStatic || l.isStatic || (p = .5),
                                                l.isStatic && (p = 0),
                                                    n.moveTo(l.position.x, l.position.y),
                                                    n.lineTo(l.position.x + a.penetration.x * p, l.position.y + a.penetration.y * p)
                                            }
                                        n.strokeStyle = s.wireframes ? "rgba(255,165,0,0.5)" : "orange",
                                            n.stroke()
                                    }
                                    ,
                                    n.grid = function(e, t, o) {
                                        var n = o
                                            , r = e.options;
                                        n.strokeStyle = r.wireframes ? "rgba(255,180,0,0.1)" : "rgba(255,180,0,0.5)",
                                            n.beginPath();
                                        for (var a = s.keys(t.buckets), l = 0, d; l < a.length; l++)
                                            if (d = a[l],
                                                !(2 > t.buckets[d].length)) {
                                                var c = d.split(/C|R/);
                                                n.rect(.5 + parseInt(c[1], 10) * t.bucketWidth, .5 + parseInt(c[2], 10) * t.bucketHeight, t.bucketWidth, t.bucketHeight)
                                            }
                                        n.lineWidth = 1,
                                            n.stroke()
                                    }
                                    ,
                                    n.inspector = function(e, t) {
                                        var n = e.engine, s = e.selected, r = e.render, a = r.options, l;
                                        if (a.hasBounds) {
                                            var d = r.bounds.max.x - r.bounds.min.x
                                                , p = r.bounds.max.y - r.bounds.min.y
                                                , m = d / r.options.width
                                                , g = p / r.options.height;
                                            t.scale(1 / m, 1 / g),
                                                t.translate(-r.bounds.min.x, -r.bounds.min.y)
                                        }
                                        for (var u = 0, y; u < s.length; u++) {
                                            switch (y = s[u].data,
                                                t.translate(.5, .5),
                                                t.lineWidth = 1,
                                                t.strokeStyle = "rgba(255,165,0,0.9)",
                                                t.setLineDash([1, 2]),
                                                y.type) {
                                                case "body":
                                                    l = y.bounds,
                                                        t.beginPath(),
                                                        t.rect(c(l.min.x - 3), c(l.min.y - 3), c(l.max.x - l.min.x + 6), c(l.max.y - l.min.y + 6)),
                                                        t.closePath(),
                                                        t.stroke();
                                                    break;
                                                case "constraint":
                                                    // render constraint selections
                                                    var x = y.pointA;
                                                    y.bodyA && (x = y.pointB),
                                                        t.beginPath(),
                                                        t.arc(x.x, x.y, 10, 0, 2 * o),
                                                        t.closePath(),
                                                        t.stroke();
                                            }
                                            t.setLineDash([]),
                                                t.translate(-.5, -.5)
                                        }
                                        // render selection region
                                        null !== e.selectStart && (t.translate(.5, .5),
                                            t.lineWidth = 1,
                                            t.strokeStyle = "rgba(255,165,0,0.6)",
                                            t.fillStyle = "rgba(255,165,0,0.1)",
                                            l = e.selectBounds,
                                            t.beginPath(),
                                            t.rect(c(l.min.x), c(l.min.y), c(l.max.x - l.min.x), c(l.max.y - l.min.y)),
                                            t.closePath(),
                                            t.stroke(),
                                            t.fill(),
                                            t.translate(-.5, -.5)),
                                        a.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0)
                                    }
                                ;
                                /**
                                 * Description
                                 * @method _createCanvas
                                 * @private
                                 * @param {} width
                                 * @param {} height
                                 * @return canvas
                                 */
                                /*
    *
    *  Events Documentation
    *
    */
                                /**
                                 * Fired before rendering
                                 *
                                 * @event beforeRender
                                 * @param {} event An event object
                                 * @param {number} event.timestamp The engine.timing.timestamp of the event
                                 * @param {} event.source The source object of the event
                                 * @param {} event.name The name of the event
                                 */
                                /**
                                 * Fired after rendering
                                 *
                                 * @event afterRender
                                 * @param {} event An event object
                                 * @param {number} event.timestamp The engine.timing.timestamp of the event
                                 * @param {} event.source The source object of the event
                                 * @param {} event.name The name of the event
                                 */
                                /*
    *
    *  Properties Documentation
    *
    */
                                /**
                                 * A back-reference to the `Matter.Render` module.
                                 *
                                 * @property controller
                                 * @type render
                                 */
                                /**
                                 * A reference to the `Matter.Engine` instance to be used.
                                 *
                                 * @property engine
                                 * @type engine
                                 */
                                /**
                                 * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
                                 *
                                 * @property element
                                 * @type HTMLElement
                                 * @default null
                                 */
                                /**
                                 * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
                                 *
                                 * @property canvas
                                 * @type HTMLCanvasElement
                                 * @default null
                                 */
                                /**
                                 * The configuration options of the renderer.
                                 *
                                 * @property options
                                 * @type {}
                                 */
                                /**
                                 * The target width in pixels of the `render.canvas` to be created.
                                 *
                                 * @property options.width
                                 * @type number
                                 * @default 800
                                 */
                                /**
                                 * The target height in pixels of the `render.canvas` to be created.
                                 *
                                 * @property options.height
                                 * @type number
                                 * @default 600
                                 */
                                /**
                                 * A flag that specifies if `render.bounds` should be used when rendering.
                                 *
                                 * @property options.hasBounds
                                 * @type boolean
                                 * @default false
                                 */
                                /**
                                 * A `Bounds` object that specifies the drawing view region.
                                 * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
                                 * This allows for creating views that can pan or zoom around the scene.
                                 * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
                                 *
                                 * @property bounds
                                 * @type bounds
                                 */
                                /**
                                 * The 2d rendering context from the `render.canvas` element.
                                 *
                                 * @property context
                                 * @type CanvasRenderingContext2D
                                 */
                                /**
                                 * The sprite texture cache.
                                 *
                                 * @property textures
                                 * @type {}
                                 */
                                var i = function(e, t) {
                                    var i = document.createElement("canvas");
                                    return i.width = e,
                                        i.height = t,
                                        i.oncontextmenu = function() {
                                            return !1
                                        }
                                        ,
                                        i.onselectstart = function() {
                                            return !1
                                        }
                                        ,
                                        i
                                }
                                    , h = function(e) {
                                    var t = e.getContext("2d")
                                        , i = window.devicePixelRatio || 1
                                        , o = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                                    return i / o
                                }
                                    , v = function(e, t) {
                                    var i = e.textures[t];
                                    return i ? i : (i = e.textures[t] = new Image,
                                        i.src = t,
                                        i)
                                }
                                    , b = function(e, t) {
                                    var i = t;
                                    /(jpg|gif|png)$/.test(t) && (i = "url(" + t + ")"),
                                        e.canvas.style.background = i,
                                        e.canvas.style.backgroundSize = "contain",
                                        e.currentBackground = t
                                };
                                /**
                                 * Gets the pixel ratio of the canvas.
                                 * @method _getPixelRatio
                                 * @private
                                 * @param {HTMLElement} canvas
                                 * @return {Number} pixel ratio
                                 */
                                /**
                                 * Gets the requested texture (an Image) via its path
                                 * @method _getTexture
                                 * @private
                                 * @param {render} render
                                 * @param {string} imagePath
                                 * @return {Image} texture
                                 */
                                /**
                                 * Applies the background to the canvas using CSS.
                                 * @method applyBackground
                                 * @private
                                 * @param {render} render
                                 * @param {string} background
                                 */
                            }
                        )()
                    }
                        , {
                            "../body/Composite": 2,
                            "../collision/Grid": 6,
                            "../core/Common": 14,
                            "../core/Events": 16,
                            "../core/Mouse": 19,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28
                        }],
                    32: [function(e, t) {
                        /**
                         * The `Matter.RenderPixi` module is an example renderer using pixi.js.
                         * See also `Matter.Render` for a canvas based renderer.
                         *
                         * @class RenderPixi
                         * @deprecated the Matter.RenderPixi module will soon be removed from the Matter.js core.
                         * It will likely be moved to its own repository (but maintenance will be limited).
                         */
                        var o = {};
                        t.exports = o;
                        var n = e("../geometry/Bounds")
                            , s = e("../body/Composite")
                            , i = e("../core/Common")
                            , r = e("../core/Events")
                            , a = e("../geometry/Vector");
                        (function() {
                                var e, t;
                                "undefined" != typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                                    window.setTimeout(function() {
                                        e(i.now())
                                    }, 1e3 / 60)
                                }
                                    ,
                                    t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame),
                                    o.create = function(e) {
                                        i.warn("RenderPixi.create: Matter.RenderPixi is deprecated (see docs)");
                                        var t = i.extend({
                                            controller: o,
                                            engine: null,
                                            element: null,
                                            frameRequestId: null,
                                            canvas: null,
                                            renderer: null,
                                            container: null,
                                            spriteContainer: null,
                                            pixiOptions: null,
                                            options: {
                                                width: 800,
                                                height: 600,
                                                background: "#fafafa",
                                                wireframeBackground: "#222",
                                                hasBounds: !1,
                                                enabled: !0,
                                                wireframes: !0,
                                                showSleeping: !0,
                                                showDebug: !1,
                                                showBroadphase: !1,
                                                showBounds: !1,
                                                showVelocity: !1,
                                                showCollisions: !1,
                                                showAxes: !1,
                                                showPositions: !1,
                                                showAngleIndicator: !1,
                                                showIds: !1,
                                                showShadows: !1
                                            }
                                        }, e)
                                            , n = !t.options.wireframes && "transparent" === t.options.background;
                                        // init pixi
                                        return t.pixiOptions = t.pixiOptions || {
                                            view: t.canvas,
                                            transparent: n,
                                            antialias: !0,
                                            backgroundColor: e.background
                                        },
                                            t.mouse = e.mouse,
                                            t.engine = e.engine,
                                            t.renderer = t.renderer || new PIXI.WebGLRenderer(t.options.width,t.options.height,t.pixiOptions),
                                            t.container = t.container || new PIXI.Container,
                                            t.spriteContainer = t.spriteContainer || new PIXI.Container,
                                            t.canvas = t.canvas || t.renderer.view,
                                            t.bounds = t.bounds || {
                                                min: {
                                                    x: 0,
                                                    y: 0
                                                },
                                                max: {
                                                    x: t.options.width,
                                                    y: t.options.height
                                                }
                                            },
                                            r.on(t.engine, "beforeUpdate", function() {
                                                o.clear(t)
                                            }),
                                            t.textures = {},
                                            t.sprites = {},
                                            t.primitives = {},
                                            t.container.addChild(t.spriteContainer),
                                            i.isElement(t.element) ? t.element.appendChild(t.canvas) : i.warn("No \"render.element\" passed, \"render.canvas\" was not inserted into document."),
                                            t.canvas.oncontextmenu = function() {
                                                return !1
                                            }
                                            ,
                                            t.canvas.onselectstart = function() {
                                                return !1
                                            }
                                            ,
                                            t
                                    }
                                    ,
                                    o.run = function(t) {
                                        (function i() {
                                                t.frameRequestId = e(i),
                                                    o.world(t)
                                            }
                                        )()
                                    }
                                    ,
                                    o.stop = function(e) {
                                        t(e.frameRequestId)
                                    }
                                    ,
                                    o.clear = function(e) {
                                        // clear stage container
                                        for (var t = e.container, i = e.spriteContainer; t.children[0]; )
                                            t.removeChild(t.children[0]);
                                        // clear sprite batch
                                        for (; i.children[0]; )
                                            i.removeChild(i.children[0]);
                                        var o = e.sprites["bg-0"];
                                        // clear caches
                                        e.textures = {},
                                            e.sprites = {},
                                            e.primitives = {},
                                            e.sprites["bg-0"] = o,
                                        o && t.addChildAt(o, 0),
                                            e.container.addChild(e.spriteContainer),
                                            e.currentBackground = null,
                                            t.scale.set(1, 1),
                                            t.position.set(0, 0)
                                    }
                                    ,
                                    o.setBackground = function(e, t) {
                                        if (e.currentBackground !== t) {
                                            var o = t.indexOf && -1 !== t.indexOf("#")
                                                , n = e.sprites["bg-0"];
                                            if (o) {
                                                // if solid background color
                                                var s = i.colorToNumber(t);
                                                e.renderer.backgroundColor = s,
                                                n && e.container.removeChild(n)
                                            } else // initialise background sprite if needed
                                            if (!n) {
                                                var r = c(e, t);
                                                n = e.sprites["bg-0"] = new PIXI.Sprite(r),
                                                    n.position.x = 0,
                                                    n.position.y = 0,
                                                    e.container.addChildAt(n, 0)
                                            }
                                            e.currentBackground = t
                                        }
                                    }
                                    ,
                                    o.world = function(e) {
                                        var t = e.engine, r = t.world, l = e.renderer, d = e.container, c = e.options, p = s.allBodies(r), m = s.allConstraints(r), g = [], u;
                                        c.wireframes ? o.setBackground(e, c.wireframeBackground) : o.setBackground(e, c.background);
                                        // handle bounds
                                        var y = e.bounds.max.x - e.bounds.min.x
                                            , x = e.bounds.max.y - e.bounds.min.y
                                            , h = y / e.options.width
                                            , v = x / e.options.height;
                                        if (c.hasBounds) {
                                            // Hide bodies that are not in view
                                            for (u = 0; u < p.length; u++) {
                                                var b = p[u];
                                                b.render.sprite.visible = n.overlaps(b.bounds, e.bounds)
                                            }
                                            // filter out constraints that are not in view
                                            for (u = 0; u < m.length; u++) {
                                                var f = m[u]
                                                    , S = f.bodyA
                                                    , C = f.bodyB
                                                    , w = f.pointA
                                                    , P = f.pointB;
                                                S && (w = a.add(S.position, f.pointA)),
                                                C && (P = a.add(C.position, f.pointB)),
                                                w && P && (n.contains(e.bounds, w) || n.contains(e.bounds, P)) && g.push(f)
                                            }
                                            // transform the view
                                            d.scale.set(1 / h, 1 / v),
                                                d.position.set(-e.bounds.min.x * (1 / h), -e.bounds.min.y * (1 / v))
                                        } else
                                            g = m;
                                        for (u = 0; u < p.length; u++)
                                            o.body(e, p[u]);
                                        for (u = 0; u < g.length; u++)
                                            o.constraint(e, g[u]);
                                        l.render(d)
                                    }
                                    ,
                                    o.constraint = function(e, t) {
                                        var o = e.engine
                                            , n = t.bodyA
                                            , s = t.bodyB
                                            , r = t.pointA
                                            , a = t.pointB
                                            , l = e.container
                                            , d = t.render
                                            , c = "c-" + t.id
                                            , p = e.primitives[c];
                                        // initialise constraint primitive if not existing
                                        // don't render if constraint does not have two end points
                                        return p || (p = e.primitives[c] = new PIXI.Graphics),
                                            d.visible && t.pointA && t.pointB ? void (-1 === i.indexOf(l.children, p) && l.addChild(p),
                                                p.clear(),
                                                p.beginFill(0, 0),
                                                p.lineStyle(d.lineWidth, i.colorToNumber(d.strokeStyle), 1),
                                                n ? p.moveTo(n.position.x + r.x, n.position.y + r.y) : p.moveTo(r.x, r.y),
                                                s ? p.lineTo(s.position.x + a.x, s.position.y + a.y) : p.lineTo(a.x, a.y),
                                                p.endFill()) : void p.clear();
                                        // add to scene graph if not already there
                                    }
                                    ,
                                    o.body = function(e, t) {
                                        var o = e.engine
                                            , n = t.render;
                                        if (n.visible)
                                            if (n.sprite && n.sprite.texture) {
                                                var s = "b-" + t.id
                                                    , r = e.sprites[s]
                                                    , a = e.spriteContainer;
                                                // initialise body sprite if not existing
                                                r || (r = e.sprites[s] = l(e, t)),
                                                -1 === i.indexOf(a.children, r) && a.addChild(r),
                                                    r.position.x = t.position.x,
                                                    r.position.y = t.position.y,
                                                    r.rotation = t.angle,
                                                    r.scale.x = n.sprite.xScale || 1,
                                                    r.scale.y = n.sprite.yScale || 1
                                            } else {
                                                var c = "b-" + t.id
                                                    , p = e.primitives[c]
                                                    , m = e.container;
                                                // initialise body primitive if not existing
                                                p || (p = e.primitives[c] = d(e, t),
                                                    p.initialAngle = t.angle),
                                                -1 === i.indexOf(m.children, p) && m.addChild(p),
                                                    p.position.x = t.position.x,
                                                    p.position.y = t.position.y,
                                                    p.rotation = t.angle - p.initialAngle
                                            }
                                    }
                                ;
                                /**
                                 * Creates a body sprite
                                 * @method _createBodySprite
                                 * @private
                                 * @param {RenderPixi} render
                                 * @param {body} body
                                 * @return {PIXI.Sprite} sprite
                                 * @deprecated
                                 */
                                var l = function(e, t) {
                                    var i = t.render
                                        , o = i.sprite.texture
                                        , n = c(e, o)
                                        , s = new PIXI.Sprite(n);
                                    return s.anchor.x = t.render.sprite.xOffset,
                                        s.anchor.y = t.render.sprite.yOffset,
                                        s
                                }
                                    , d = function(e, t) {
                                    var o = t.render, n = e.options, s = new PIXI.Graphics, r = i.colorToNumber(o.fillStyle), a = i.colorToNumber(o.strokeStyle), l = i.colorToNumber(o.strokeStyle), d = i.colorToNumber("#bbb"), c = i.colorToNumber("#CD5C5C"), p;
                                    s.clear();
                                    // handle compound parts
                                    for (var m = 1 < t.parts.length ? 1 : 0; m < t.parts.length; m++) {
                                        p = t.parts[m],
                                            n.wireframes ? (s.beginFill(0, 0),
                                                s.lineStyle(1, d, 1)) : (s.beginFill(r, 1),
                                                s.lineStyle(o.lineWidth, a, 1)),
                                            s.moveTo(p.vertices[0].x - t.position.x, p.vertices[0].y - t.position.y);
                                        for (var g = 1; g < p.vertices.length; g++)
                                            s.lineTo(p.vertices[g].x - t.position.x, p.vertices[g].y - t.position.y);
                                        s.lineTo(p.vertices[0].x - t.position.x, p.vertices[0].y - t.position.y),
                                            s.endFill(),
                                        (n.showAngleIndicator || n.showAxes) && (s.beginFill(0, 0),
                                            n.wireframes ? s.lineStyle(1, c, 1) : s.lineStyle(1, l),
                                            s.moveTo(p.position.x - t.position.x, p.position.y - t.position.y),
                                            s.lineTo((p.vertices[0].x + p.vertices[p.vertices.length - 1].x) / 2 - t.position.x, (p.vertices[0].y + p.vertices[p.vertices.length - 1].y) / 2 - t.position.y),
                                            s.endFill())
                                    }
                                    return s
                                }
                                    , c = function(e, t) {
                                    var i = e.textures[t];
                                    return i || (i = e.textures[t] = PIXI.Texture.fromImage(t)),
                                        i
                                };
                                /**
                                 * Creates a body primitive
                                 * @method _createBodyPrimitive
                                 * @private
                                 * @param {RenderPixi} render
                                 * @param {body} body
                                 * @return {PIXI.Graphics} graphics
                                 * @deprecated
                                 */
                                /**
                                 * Gets the requested texture (a PIXI.Texture) via its path
                                 * @method _getTexture
                                 * @private
                                 * @param {RenderPixi} render
                                 * @param {string} imagePath
                                 * @return {PIXI.Texture} texture
                                 * @deprecated
                                 */
                            }
                        )()
                    }
                        , {
                            "../body/Composite": 2,
                            "../core/Common": 14,
                            "../core/Events": 16,
                            "../geometry/Bounds": 26,
                            "../geometry/Vector": 28
                        }]
                }, {}, [30])(30)
            })
        })
            , Ce = Se.Bodies
            , we = Se.Body
            , Pe = Se.Composite
            , Ae = Se.Composites
            , Be = Se.Constraint
            , _e = Se.Engine
            , ke = Se.Events
            , Ie = Se.Mouse
            , Te = Se.MouseConstraint
            , Re = Se.Render
            , Me = Se.Runner
            , Ee = Se.Vertices
            , Ve = Se.World
            , je = function() {
            function e(t) {
                var i = t.element
                    , o = t.width
                    , n = t.height
                    , s = t.gravity
                    , r = t.canvas
                    , a = t.options
                    , l = void 0 === a ? {} : a
                    , d = t.autoRender
                    , c = void 0 === d || d
                    , p = t.autoStart
                    , m = t.hasBounds
                    , g = t.isInteractive
                    , u = t.onUpdate
                    , x = void 0 === u ? null : u;
                y(this, e),
                    this.dimensions = {
                        width: o,
                        height: n
                    },
                    this.runner = Me.create(),
                    this.engine = _e.create(),
                    this.world = this.engine.world,
                    this.mouse = null,
                    this.mouseConstraint = null,
                    this.render = c ? Re.create({
                        element: i,
                        engine: this.engine,
                        options: fe({
                            width: o,
                            height: n,
                            background: "transparent",
                            wireframeBackground: "#333",
                            showAngleIndicator: !1,
                            wireframes: !1
                        }, l)
                    }) : null,
                    this.canvas = this.render ? this.render.canvas : i,
                    this.itemDefaults = {
                        restitution: .7
                    },
                    this.world.gravity = s || {
                        x: 0,
                        y: 2
                    },
                (void 0 === m || m) && this.addBounds(),
                (void 0 === g || g) && this.bindMouse(),
                (void 0 === p || p) && this.start(),
                x && ke.on(this.runner, "afterUpdate", x),
                c && (Re.run(this.render),
                    Re.lookAt(this.render, {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: o,
                            y: n
                        }
                    }))
            }
            return D(e, [{
                key: "destroy",
                value: function() {
                    this.stop(),
                        Ve.clear(this.world),
                        _e.clear(this.engine),
                    this.render && (Re.stop(this.render),
                        this.render.canvas.remove(),
                        this.render.canvas = null,
                        this.render.context = null,
                        this.render.textures = {})
                }
            }, {
                key: "resize",
                value: function(e, t) {
                    this.canvas.width = e,
                        this.canvas.height = t
                }
            }, {
                key: "bindMouse",
                value: function() {
                    this.mouse = Ie.create(this.canvas),
                        this.mouseConstraint = Te.create(this.engine, {
                            mouse: this.mouse,
                            constraint: {
                                stiffness: .2,
                                render: {
                                    visible: !1
                                }
                            }
                        }),
                        Ve.add(this.world, this.mouseConstraint),
                    this.render && (this.render.mouse = this.mouse)
                }
            }, {
                key: "start",
                value: function() {
                    Me.run(this.runner, this.engine)
                }
            }, {
                key: "stop",
                value: function() {
                    Me.stop(this.runner)
                }
            }, {
                key: "getBodies",
                value: function() {
                    return Pe.allBodies(this.world)
                }
            }, {
                key: "applyForce",
                value: function(e, t, i) {
                    we.applyForce(e, t, i)
                }
            }, {
                key: "addBounds",
                value: function() {
                    var e = this.dimensions
                        , t = e.width
                        , i = e.height
                        , o = {
                        isStatic: !0
                    };
                    Ve.add(this.world, [Ce.rectangle(t / 2, -25, t + 25, 50, o), Ce.rectangle(t / 2, i + 25, t + 25, 50, o), Ce.rectangle(t + 25, i / 2, 50, i + 50, o), Ce.rectangle(-25, i / 2, 50, i + 50, o)])
                }
            }, {
                key: "addBody",
                value: function(e) {
                    Ve.add(this.world, e)
                }
            }, {
                key: "removeBody",
                value: function(e) {
                    Ve.remove(this.world, e)
                }
            }, {
                key: "rotateBody",
                value: function(e, t) {
                    we.rotate(e, t)
                }
            }, {
                key: "positionBody",
                value: function(e, t) {
                    we.setPosition(e, t)
                }
            }, {
                key: "addEvent",
                value: function(e, t) {
                    ke.on(this.engine, e, t)
                }
            }, {
                key: "removeEvent",
                value: function(e, t) {
                    ke.off(this.engine, e, t)
                }
            }, {
                key: "addShape",
                value: function(e, t, i) {
                    var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}
                        , n = Ee.fromPath(i.join(" "))
                        , s = Ce.fromVertices(e, t, n, fe({}, this.itemDefaults, o));
                    return Ve.add(this.world, s),
                        s
                }
            }, {
                key: "addRectangle",
                value: function(e, t, i, o) {
                    var n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}
                        , s = Ce.rectangle(e, t, i, o, fe({}, this.itemDefaults, n));
                    return Ve.add(this.world, s),
                        s
                }
            }, {
                key: "addCircle",
                value: function(e, t, i) {
                    var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}
                        , n = Ce.circle(e, t, i, fe({}, this.itemDefaults, o));
                    return Ve.add(this.world, n),
                        n
                }
            }, {
                key: "addPolygon",
                value: function(e, t, i, o) {
                    var n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}
                        , s = Ce.polygon(e, t, i, o, fe({}, this.itemDefaults, n));
                    return Ve.add(this.world, s),
                        s
                }
            }, {
                key: "addItemToString",
                value: function(e) {
                    var t = e.item
                        , i = e.x
                        , o = e.y
                        , n = e.length
                        , s = e.parent
                        , r = e.offset
                        , l = void 0 === r ? 0 : r
                        , d = we.nextGroup(!0)
                        , c = a(n / 100)
                        , p = a(2 * (n / c))
                        , m = Ae.stack(i, o, 1, c, 2, 2, function(e, t) {
                        return Ce.rectangle(e, t, 2, p / 2, {
                            collisionFilter: {
                                group: d
                            },
                            frictionAir: .1,
                            render: {
                                fillStyle: "#333"
                            }
                        })
                    })
                        , g = m.bodies[m.bodies.length - 1]
                        , u = m.bodies[0].position
                        , y = g.position
                        , x = Be.create({
                        bodyA: t,
                        bodyB: g,
                        pointA: {
                            x: 0,
                            y: l
                        },
                        pointB: {
                            x: 0,
                            y: p / 4
                        },
                        stiffness: .9,
                        render: {
                            visible: !1
                        }
                    });
                    return we.set(t, {
                        density: 5e-5,
                        friction: 1,
                        position: {
                            x: y.x,
                            y: y.y + l
                        },
                        collisionFilter: g.collisionFilter
                    }),
                        Ae.chain(m, 0, .49, 0, -.49, {
                            stiffness: .9,
                            length: 0,
                            render: {
                                type: "line",
                                visible: !1
                            }
                        }),
                        Pe.add(m, Be.create({
                            bodyA: s,
                            bodyB: m.bodies[0],
                            pointA: {
                                x: u.x - (s ? s.position.x : 0),
                                y: u.y - (s ? s.position.y : 0)
                            },
                            pointB: {
                                x: 0,
                                y: 0
                            },
                            stiffness: .9
                        })),
                        Ve.add(this.world, [m, x]),
                        m
                }
            }]),
                e
        }()
            , Le = {}
            , Oe = P ? Object.defineProperties : function(e, t) {
            A(e);
            for (var o = de(t), n = o.length, s = 0, r; n > s; )
                f.f(e, r = o[s++], t[r]);
            return e
        }
            , Fe = x.document
            , We = Fe && Fe.documentElement
            , qe = ne("IE_PROTO")
            , De = function() {/* empty */
        }
            , Ge = function() {
            // Thrash, waste and sodomy: IE GC bug
            var e = k("iframe"), t = le.length, o;
            for (e.style.display = "none",
                     We.appendChild(e),
                     e.src = "javascript:",
                     o = e.contentWindow.document,
                     o.open(),
                     o.write("<script>document.F=Object</script>"),
                     o.close(),
                     Ge = o.F; t--; )
                delete Ge.prototype[le[t]];
            return Ge()
        }
            , Ne = Object.create || function(e, t) {
            var i;
            return null === e ? i = Ge() : (De.prototype = A(e),
                i = new De,
                De.prototype = null,
                i[qe] = e),
                void 0 === t ? i : Oe(i, t)
        }
            , Ue = o(function(e) {
            var t = J("wks")
                , i = x.Symbol
                , o = "function" == typeof i
                , n = e.exports = function(e) {
                    return t[e] || (t[e] = o && i[e] || (o ? i : ie)("Symbol." + e))
                }
            ;
            n.store = t
        })
            , He = f.f
            , ze = Ue("toStringTag")
            , Ye = function(e, t, i) {
            e && !N(e = i ? e : e.prototype, ze) && He(e, ze, {
                configurable: !0,
                value: t
            })
        }
            , $e = {};
        // true  -> String#at
        // false -> String#codePointAt
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        V($e, Ue("iterator"), function() {
            return this
        });
        var Qe = function(e, t, i) {
            e.prototype = Ne($e, {
                next: E(1, i)
            }),
                Ye(e, t + " Iterator")
        }
            , Xe = ne("IE_PROTO")
            , Ke = Object.prototype
            , Ze = Object.getPrototypeOf || function(e) {
            return e = ue(e),
                N(e, Xe) ? e[Xe] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Ke : null
        }
            , Je = Ue("iterator")
            , et = !([].keys && "next"in [].keys())
            , tt = function() {
            return this
        }
            , it = function(e, t, i, o, n, s, r) {
            Qe(i, t, o);
            var a = function(e) {
                return !et && e in p ? p[e] : "keys" === e ? function() {
                        return new i(this,e)
                    }
                    : "values" === e ? function() {
                            return new i(this,e)
                        }
                        : function() {
                            return new i(this,e)
                        }
            }, l = t + " Iterator", d = "values" == n, c = !1, p = e.prototype, m = p[Je] || p["@@iterator"] || n && p[n], g = !et && m || a(n), u = n ? d ? a("entries") : g : void 0, y = "Array" == t ? p.entries || m : m, x, h, v;
            // Fix native
            if (y && (v = Ze(y.call(new e)),
            v !== Object.prototype && v.next && (Ye(v, l, !0),
                !1)),
            d && m && "values" !== m.name && (c = !0,
                    g = function() {
                        return m.call(this)
                    }
            ),
            r && (et || c || !p[Je]) && V(p, Je, g),
                Le[t] = g,
                Le[l] = tt,
                n)
                if (x = {
                    values: d ? g : a("values"),
                    keys: s ? g : a("keys"),
                    entries: u
                },
                    r)
                    for (h in x)
                        h in p || V(p, h, x[h]);
                else
                    L(L.P + L.F * (et || c), t, x);
            return x
        }
            , ot = function(e) {
            return function(t, o) {
                var n = Y(t) + "", s = Q(o), i = n.length, r, l;
                return 0 > s || s >= i ? e ? "" : void 0 : (r = n.charCodeAt(s),
                    55296 > r || 56319 < r || s + 1 === i || 56320 > (l = n.charCodeAt(s + 1)) || 57343 < l ? e ? n.charAt(s) : r : e ? n.slice(s, s + 2) : (r - 55296 << 10) + (l - 56320) + 65536)
            }
        }(!0);
        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        // Safari has buggy iterators w/o `next`
        // 21.1.3.27 String.prototype[@@iterator]()
        it(String, "String", function(e) {
            this._t = e + "",
                this._i = 0
        }, function() {
            var e = this._t, t = this._i, i;
            return t >= e.length ? {
                value: void 0,
                done: !0
            } : (i = ot(e, t),
                this._i += i.length,
                {
                    value: i,
                    done: !1
                })
        });
        var nt = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
            , st = it(Array, "Array", function(e, t) {
            this._t = $(e),
                this._i = 0,
                this._k = t
        }, function() {
            var e = this._t
                , t = this._k
                , i = this._i++;
            return !e || i >= e.length ? (this._t = void 0,
                nt(1)) : "keys" == t ? nt(0, i) : "values" == t ? nt(0, e[i]) : nt(0, [i, e[i]])
        }, "values");
        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Le.Arguments = Le.Array;
        for (var rt = Ue("toStringTag"), at = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), lt = 0; lt < at.length; lt++) {
            var dt = at[lt]
                , ct = x[dt]
                , pt = ct && ct.prototype;
            pt && !pt[rt] && V(pt, rt, dt),
                Le[dt] = Le.Array
        }
        // getting tag from 19.1.3.6 Object.prototype.toString()
        var mt = Ue("toStringTag"), gt = "Arguments" == H(function() {
            return arguments
        }()), ut = function(e, t) {
            try {
                return e[t]
            } catch (t) {/* empty */
            }
        }, yt = function(e) {
            var t, i, o;
            return e === void 0 ? "Undefined" : null === e ? "Null"// @@toStringTag case
                : "string" == typeof (i = ut(t = Object(e), mt)) ? i // builtinTag case
                    : gt ? H(t)// ES3 arguments fallback
                        : "Object" == (o = H(t)) && "function" == typeof t.callee ? "Arguments" : o
        }, xt = function(e, t, i, o) {
            if (!(e instanceof t) || o !== void 0 && o in e)
                throw TypeError(i + ": incorrect invocation!");
            return e
        }, ht = function(t, e, i, o) {
            try {
                return o ? e(A(i)[0], i[1]) : e(i);
                // 7.4.6 IteratorClose(iterator, completion)
            } catch (i) {
                var n = t["return"];
                throw void 0 !== n && A(n.call(t)),
                    i
            }
        }, vt = Ue("iterator"), bt = Array.prototype, ft = function(e) {
            return e !== void 0 && (Le.Array === e || bt[vt] === e)
        }, St = Ue("iterator"), Ct = h.getIteratorMethod = function(e) {
            if (e != null)
                return e[St] || e["@@iterator"] || Le[yt(e)]
        }
            , wt = o(function(e) {
            var t = {}
                , i = {}
                , o = e.exports = function(e, o, n, s, r) {
                    var a = r ? function() {
                            return e
                        }
                        : Ct(e), l = S(n, s, o ? 2 : 1), d = 0, c, p, m, g;
                    if ("function" != typeof a)
                        throw TypeError(e + " is not iterable!");
                    // fast case for arrays with default iterator
                    if (ft(a)) {
                        for (c = X(e.length); c > d; d++)
                            if (g = o ? l(A(p = e[d])[0], p[1]) : l(e[d]),
                            g === t || g === i)
                                return g;
                    } else
                        for (m = a.call(e); !(p = m.next()).done; )
                            if (g = ht(m, l, p.value, o),
                            g === t || g === i)
                                return g
                }
            ;
            o.BREAK = t,
                o.RETURN = i
        }), Pt = Ue("species"), At = function(e, t) {
            var i = A(e).constructor, o;
            return i === void 0 || (o = A(i)[Pt]) == null ? t : b(o)
        }, Bt = function(e, t, i) {
            var o = i === void 0;
            switch (t.length) {
                case 0:
                    return o ? e() : e.call(i);
                case 1:
                    return o ? e(t[0]) : e.call(i, t[0]);
                case 2:
                    return o ? e(t[0], t[1]) : e.call(i, t[0], t[1]);
                case 3:
                    return o ? e(t[0], t[1], t[2]) : e.call(i, t[0], t[1], t[2]);
                case 4:
                    return o ? e(t[0], t[1], t[2], t[3]) : e.call(i, t[0], t[1], t[2], t[3]);
            }
            return e.apply(i, t)
        }, _t = x.process, kt = x.setImmediate, It = x.clearImmediate, Tt = x.MessageChannel, Rt = x.Dispatch, Mt = 0, Et = {}, Vt = function() {
            var e = +this;
            // eslint-disable-next-line no-prototype-builtins
            if (Et.hasOwnProperty(e)) {
                var t = Et[e];
                delete Et[e],
                    t()
            }
        }, jt = function(e) {
            Vt.call(e.data)
        }, Lt, Ot, Ft;
        // ES3 wrong here
        // fallback for IE11 Script Access Denied error
        // call something on iterator step with safe closing on error
        // check on default Array iterator
        // 7.3.20 SpeciesConstructor(O, defaultConstructor)
        // fast apply, http://jsperf.lnkit.com/fast-apply/5
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        kt && It || (kt = function(e) {
                for (var t = [], o = 1; arguments.length > o; )
                    t.push(arguments[o++]);
                return Et[++Mt] = function() {
                    Bt("function" == typeof e ? e : Function(e), t)
                }
                    ,
                    Lt(Mt),
                    Mt
            }
                ,
                It = function(e) {
                    delete Et[e]
                }
                ,
                "process" == H(_t) ? Lt = function(e) {
                        _t.nextTick(S(Vt, e, 1))
                    }
                    : Rt && Rt.now ? Lt = function(e) {
                        Rt.now(S(Vt, e, 1))
                    }
                    : Tt ? (Ot = new Tt,
                        Ft = Ot.port2,
                        Ot.port1.onmessage = jt,
                        Lt = S(Ft.postMessage, Ft, 1)) : x.addEventListener && "function" == typeof postMessage && !x.importScripts ? (Lt = function(e) {
                        x.postMessage(e + "", "*")
                    }
                        ,
                        x.addEventListener("message", jt, !1)) : "onreadystatechange"in k("script") ? Lt = function(e) {
                            We.appendChild(k("script")).onreadystatechange = function() {
                                We.removeChild(this),
                                    Vt.call(e)
                            }
                        }
                        : Lt = function(e) {
                            setTimeout(S(Vt, e, 1), 0)
                        }
        );
        var Wt = {
            set: kt,
            clear: It
        }
            , qt = Wt.set
            , Dt = x.MutationObserver || x.WebKitMutationObserver
            , Gt = x.process
            , Nt = x.Promise
            , Ut = "process" == H(Gt)
            , Ht = {
            f: function(e) {
                return new n(e)
            }
        }
            , zt = function(e) {
            try {
                return {
                    e: !1,
                    v: e()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
            , Yt = function(e, t) {
            if (A(e),
            w(t) && t.constructor === e)
                return t;
            var i = Ht.f(e)
                , o = i.resolve;
            return o(t),
                i.promise
        }
            , $t = Ue("species")
            , Qt = Ue("iterator")
            , Xt = !1;
        try {
            var Kt = [7][Qt]();
            Kt["return"] = function() {
                Xt = !0
            }
        } catch (t) {/* empty */
        }
        var Zt = function(e, t) {
            if (!t && !Xt)
                return !1;
            var i = !1;
            try {
                var o = [7]
                    , n = o[Qt]();
                n.next = function() {
                    return {
                        done: i = !0
                    }
                }
                    ,
                    o[Qt] = function() {
                        return n
                    }
                    ,
                    e(o)
            } catch (t) {/* empty */
            }
            return i
        }, Jt = Wt.set, ei = function() {
            var e = function() {
                var e, n;
                for (Ut && (e = Gt.domain) && e.exit(); t; ) {
                    n = t.fn,
                        t = t.next;
                    try {
                        n()
                    } catch (n) {
                        throw t ? o() : i = void 0,
                            n
                    }
                }
                i = void 0,
                e && e.enter()
            }, t, i, o;
            // Node.js
            if (Ut)
                o = function() {
                    Gt.nextTick(e)
                }
                ;
            else if (Dt && !(x.navigator && x.navigator.standalone)) {
                var n = !0
                    , s = document.createTextNode("");
                new Dt(e).observe(s, {
                    characterData: !0
                }),
                    o = function() {
                        s.data = n = !n
                    }
            } else if (Nt && Nt.resolve) {
                var r = Nt.resolve();
                o = function() {
                    r.then(e)
                }
            } else
                o = function() {
                    qt.call(x, e)
                }
                ;
            return function(e) {
                var n = {
                    fn: e,
                    next: void 0
                };
                i && (i.next = n),
                t || (t = n,
                    o()),
                    i = n
            }
        }(), ti = x.TypeError, ii = x.process, oi = x.Promise, ni = "process" == yt(ii), si = function() {/* empty */
        }, ri = xi = Ht.f, ai = !!function() {
            try {
                // correct subclassing with @@species support
                var e = oi.resolve(1)
                    , t = (e.constructor = {})[Ue("species")] = function(e) {
                        e(si, si)
                    }
                ;
                // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
                return (ni || "function" == typeof PromiseRejectionEvent) && e.then(si)instanceof t
            } catch (t) {/* empty */
            }
        }(), li = function(e) {
            var t;
            return !!(w(e) && "function" == typeof (t = e.then)) && t
        }, di = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var o = e._c;
                ei(function() {
                    for (var n = e._v, s = 1 == e._s, r = 0, a = function(t) {
                        var i = s ? t.ok : t.fail, o = t.resolve, r = t.reject, a = t.domain, l, d;
                        try {
                            i ? (!s && (2 == e._h && mi(e),
                                e._h = 1),
                                !0 === i ? l = n : (a && a.enter(),
                                    l = i(n),
                                a && a.exit()),
                                l === t.promise ? r(ti("Promise-chain cycle")) : (d = li(l)) ? d.call(l, o, r) : o(l)) : r(n)
                        } catch (t) {
                            r(t)
                        }
                    }; o.length > r; )
                        a(o[r++]);
                    // variable length - can't use forEach
                    e._c = [],
                        e._n = !1,
                    t && !e._h && ci(e)
                })
            }
        }, ci = function(e) {
            Jt.call(x, function() {
                var t = e._v, i = pi(e), o, n, s;
                if (i && (o = zt(function() {
                    ni ? ii.emit("unhandledRejection", t, e) : (n = x.onunhandledrejection) ? n({
                        promise: e,
                        reason: t
                    }) : (s = x.console) && s.error && s.error("Unhandled promise rejection", t)
                }),
                    e._h = ni || pi(e) ? 2 : 1),
                    e._a = void 0,
                i && o.e)
                    throw o.v
            })
        }, pi = function(e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        }, mi = function(e) {
            Jt.call(x, function() {
                var t;
                ni ? ii.emit("rejectionHandled", e) : (t = x.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        }, gi = function(e) {
            var t = this;
            t._d || (t._d = !0,
                t = t._w || t,
                t._v = e,
                t._s = 2,
            !t._a && (t._a = t._c.slice()),
                di(t, !0))
        }, ui = function(e) {
            var t = this, i;
            if (!t._d) {
                t._d = !0,
                    t = t._w || t;
                // unwrap
                try {
                    if (t === e)
                        throw ti("Promise can't be resolved itself");
                    (i = li(e)) ? ei(function() {
                        var o = {
                            _w: t,
                            _d: !1
                        };
                        // wrap
                        try {
                            i.call(e, S(ui, o, 1), S(gi, o, 1))
                        } catch (t) {
                            gi.call(o, t)
                        }
                    }) : (t._v = e,
                        t._s = 1,
                        di(t, !1))
                } catch (i) {
                    gi.call({
                        _w: t,
                        _d: !1
                    }, i)
                }
            }
        }, yi, xi, hi, vi;
        // helpers
        // constructor polyfill
        ai || (oi = function(e) {
                xt(this, oi, "Promise", "_h"),
                    b(e),
                    yi.call(this);
                try {
                    e(S(ui, this, 1), S(gi, this, 1))
                } catch (e) {
                    gi.call(this, e)
                }
            }
                ,
                yi = function() {
                    this._c = [],
                        this._a = void 0,
                        this._s = 0,
                        this._d = !1,
                        this._v = void 0,
                        this._h = 0,
                        this._n = !1
                }
                ,
                yi.prototype = function(e, t, i) {
                    for (var o in t)
                        i && e[o] ? e[o] = t[o] : V(e, o, t[o]);
                    return e
                }(oi.prototype, {
                    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
                    then: function(e, t) {
                        var i = ri(At(this, oi));
                        return i.ok = "function" != typeof e || e,
                            i.fail = "function" == typeof t && t,
                            i.domain = ni ? ii.domain : void 0,
                            this._c.push(i),
                        this._a && this._a.push(i),
                        this._s && di(this, !1),
                            i.promise
                    },
                    // 25.4.5.1 Promise.prototype.catch(onRejected)
                    catch: function(e) {
                        return this.then(void 0, e)
                    }
                }),
                hi = function() {
                    var e = new yi;
                    this.promise = e,
                        this.resolve = S(ui, e, 1),
                        this.reject = S(gi, e, 1)
                }
                ,
                Ht.f = ri = function(e) {
                    return e === oi || e === vi ? new hi(e) : xi(e)
                }
        ),
            L(L.G + L.W + L.F * !ai, {
                Promise: oi
            }),
            Ye(oi, "Promise"),
            function(e) {
                var t = "function" == typeof h[e] ? h[e] : x[e];
                P && t && !t[$t] && f.f(t, $t, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }("Promise"),
            vi = h.Promise,
            L(L.S + L.F * !ai, "Promise", {
                // 25.4.4.5 Promise.reject(r)
                reject: function(e) {
                    var t = ri(this)
                        , i = t.reject;
                    return i(e),
                        t.promise
                }
            }),
            L(L.S + L.F * !0, "Promise", {
                // 25.4.4.6 Promise.resolve(x)
                resolve: function(e) {
                    return Yt(this === vi ? oi : this, e)
                }
            }),
            L(L.S + L.F * !(ai && Zt(function(e) {
                oi.all(e)["catch"](si)
            })), "Promise", {
                // 25.4.4.1 Promise.all(iterable)
                all: function(e) {
                    var t = this
                        , i = ri(t)
                        , o = i.resolve
                        , n = i.reject
                        , s = zt(function() {
                        var i = []
                            , s = 0
                            , r = 1;
                        wt(e, !1, function(e) {
                            var a = s++
                                , l = !1;
                            i.push(void 0),
                                r++,
                                t.resolve(e).then(function(e) {
                                    l || (l = !0,
                                        i[a] = e,
                                    --r || o(i))
                                }, n)
                        }),
                        --r || o(i)
                    });
                    return s.e && n(s.v),
                        i.promise
                },
                // 25.4.4.4 Promise.race(iterable)
                race: function(e) {
                    var t = this
                        , i = ri(t)
                        , o = i.reject
                        , n = zt(function() {
                        wt(e, !1, function(e) {
                            t.resolve(e).then(i.resolve, o)
                        })
                    });
                    return n.e && o(n.v),
                        i.promise
                }
            }),
            L(L.P + L.R, "Promise", {
                finally: function(t) {
                    var i = At(this, h.Promise || x.Promise)
                        , e = "function" == typeof t;
                    return this.then(e ? function(e) {
                            return Yt(i, t()).then(function() {
                                return e
                            })
                        }
                        : t, e ? function(o) {
                            return Yt(i, t()).then(function() {
                                throw o
                            })
                        }
                        : t)
                }
            }),
            L(L.S, "Promise", {
                try: function(e) {
                    var t = Ht.f(this)
                        , i = zt(e);
                    return (i.e ? t.reject : t.resolve)(i.v),
                        t.promise
                }
            });
        var bi = h.Promise
            , fi = o(function(e) {
            e.exports = {
                default: bi,
                __esModule: !0
            }
        })
            , Si = t(fi)
            , Ci = [{
            url: "/images/luntik.png",
            width: 283,
            height: 300
        }, {
            url: "/images/luntik.png",
            width: 300,
            height: 298
        }, {
            url: "/images/luntik.png",
            width: 300,
            height: 228
        }, {
            url: "/images/luntik.png",
            width: 261,
            height: 300
        }, {
            url: "/images/luntik.png",
            width: 300,
            height: 300
        }, {
            url: "/images/luntik.png",
            width: 300,
            height: 272
        }, {
            url: "/images/luntik.png",
            width: 289,
            height: 300
        }, {
            url: "/images/luntik.png",
            width: 296,
            height: 300
        }, {
            url: "/images/luntik.png",
            width: 229,
            height: 300
        }, {
            url: "/images/luntik.png",
            width: 298,
            height: 300
        }, {
            url: "/images/luntik.png",
            width: 300,
            height: 228
        }, {
            url: "/images/luntik.png",
            width: 300,
            height: 114
        }, {
            url: "/images/luntik.png",
            width: 300,
            height: 250
        }, {
            url: "/images/luntik.png",
            width: 283,
            height: 300
        }, {
            url: "/images/luntik.png",
            width: 300,
            height: 268
        }]
            , wi = function() {
            function e(t) {
                var i = this;git i
                y(this, e),
                    this.images = r(Ci),
                    this.bodies = [],
                    this.bounds = [],
                    this.matter = new je({
                        element: t,
                        width: window.innerWidth,
                        height: window.innerHeight,
                        gravity: {
                            x: 0,
                            y: -.1
                        },
                        hasBounds: !1,
                        onUpdate: function() {
                            return i.onRenderUpdate()
                        }
                    }),
                    this.preloadImages(),
                    this.addBounds(),
                    this.createImages(),
                    window.addEventListener("resize", this.onResize.bind(this), !1)
            }
            return D(e, [{
                key: "preloadImages",
                value: function() {
                    this.images.forEach(function(e) {
                        var t = e.url;
                        s(t).catch(function() {})
                    })
                }
            }, {
                key: "addBounds",
                value: function() {
                    var e = 3 * window.innerHeight
                        , t = e / 2
                        , i = {
                        isStatic: !0
                    };
                    this.bounds.push(this.matter.addRectangle(window.innerWidth + 25, t, 50, e, i)),
                        this.bounds.push(this.matter.addRectangle(-25, t, 50, e, i))
                }
            }, {
                key: "addImage",
                value: function() {
                    var e = !!(0 < arguments.length && void 0 !== arguments[0]) && arguments[0]
                        , t = this.images[0]
                        , i = t.url
                        , o = t.width
                        , n = t.height
                        , s = 800 > window.innerWidth
                        , r = s ? .4 : .5
                        , a = window.innerWidth * Math.random()
                        , l = window.innerHeight * (e ? Math.random() + 1 : 1.5)
                        , d = this.matter.addRectangle(a, l, o * r, n * r, {
                        render: {
                            sprite: {
                                texture: i,
                                xScale: r,
                                yScale: r
                            }
                        }
                    });
                    this.matter.applyForce(d, {
                        x: a + 20 * (Math.random() - Math.random()),
                        y: l + 10
                    }, {
                        x: .5 * (Math.random() - Math.random()),
                        y: -Math.random() * (s ? .1 : .3)
                    }),
                        this.bodies.push(d),
                        this.images.push(this.images.shift())
                }
            }, {
                key: "createImages",
                value: function() {
                    for (var e = 0; 8 > e; e++)
                        this.addImage(!0)
                }
            }, {
                key: "onRenderUpdate",
                value: function() {
                    var e = this;
                    this.bodies.forEach(function(t, o) {
                        var i = t.position
                            , n = i.x
                            , s = i.y;
                        if (-200 > s) {
                            var r = e.bodies.splice(o, 1)[0];
                            e.matter.removeBody(r),
                                e.addImage()
                        }
                    })
                }
            }, {
                key: "onResize",
                value: function() {
                    var e = this;
                    this.bounds.forEach(function(t) {
                        e.matter.removeBody(t)
                    }),
                        this.bodies.forEach(function(t) {
                            e.matter.removeBody(t)
                        }),
                        this.bounds = [],
                        this.bodies = [],
                        this.matter.resize(window.innerWidth, window.innerHeight),
                        this.addBounds(),
                        this.createImages()
                }
            }]),
                e
        }();
        m.kickOutTheJams = function(e) {
            new wi(e)
        }
    }
)();
