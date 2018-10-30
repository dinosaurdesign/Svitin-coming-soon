// Copyright 2012 Google Inc. All rights reserved.
(function () {

    var data = {
        "resource": {
            "version": "1",
            "macros": [],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": [
            [], []
        ]
    };
    var da = this, ha = function () {
        if (null === ea) {
            var a;
            a:{
                var b = da.document, c = b.querySelector && b.querySelector("script[nonce]");
                if (c) {
                    var d = c.nonce || c.getAttribute("nonce");
                    if (d && fa.test(d)) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
            ea = a || ""
        }
        return ea
    }, fa = /^[\w+/_-]+[=]{0,2}$/, ea = null, ia = function (a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.qf = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Xe = function (a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a,
                d)
        }
    };
    var g = function (a, b) {
        this.B = a;
        this.wd = b
    };
    g.prototype.Jd = function () {
        return this.B
    };
    g.prototype.getType = g.prototype.Jd;
    g.prototype.getData = function () {
        return this.wd
    };
    g.prototype.getData = g.prototype.getData;
    var ka = function (a) {
        return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
    }, la = function () {
        this.la = {};
        this.Ba = !1
    };
    la.prototype.get = function (a) {
        return this.la["dust." + a]
    };
    la.prototype.set = function (a, b) {
        !this.Ba && (this.la["dust." + a] = b)
    };
    la.prototype.has = function (a) {
        return this.la.hasOwnProperty("dust." + a)
    };
    var ma = function (a) {
        var b = [], c;
        for (c in a.la) a.la.hasOwnProperty(c) && b.push(c.substr(5));
        return b
    };
    la.prototype.remove = function (a) {
        !this.Ba && delete this.la["dust." + a]
    };
    la.prototype.L = function () {
        this.Ba = !0
    };
    var v = function (a) {
        this.oa = new la;
        this.h = [];
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (ka(b) ? this.h[Number(b)] = a[Number(b)] : this.oa.set(b, a[b]))
    };
    v.prototype.toString = function () {
        for (var a = [], b = 0; b < this.h.length; b++) {
            var c = this.h[b];
            null === c || void 0 === c ? a.push("") : a.push(c.toString())
        }
        return a.join(",")
    };
    v.prototype.set = function (a, b) {
        if ("length" == a) {
            if (!ka(b)) throw"RangeError: Length property must be a valid integer.";
            this.h.length = Number(b)
        } else ka(a) ? this.h[Number(a)] = b : this.oa.set(a, b)
    };
    v.prototype.set = v.prototype.set;
    v.prototype.get = function (a) {
        return "length" == a ? this.length() : ka(a) ? this.h[Number(a)] : this.oa.get(a)
    };
    v.prototype.get = v.prototype.get;
    v.prototype.length = function () {
        return this.h.length
    };
    v.prototype.U = function () {
        for (var a = ma(this.oa), b = 0; b < this.h.length; b++) a.push(b + "");
        return new v(a)
    };
    v.prototype.getKeys = v.prototype.U;
    v.prototype.remove = function (a) {
        ka(a) ? delete this.h[Number(a)] : this.oa.remove(a)
    };
    v.prototype.remove = v.prototype.remove;
    v.prototype.pop = function () {
        return this.h.pop()
    };
    v.prototype.pop = v.prototype.pop;
    v.prototype.push = function (a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    };
    v.prototype.push = v.prototype.push;
    v.prototype.shift = function () {
        return this.h.shift()
    };
    v.prototype.shift = v.prototype.shift;
    v.prototype.splice = function (a, b, c) {
        return new v(this.h.splice.apply(this.h, arguments))
    };
    v.prototype.splice = v.prototype.splice;
    v.prototype.unshift = function (a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    };
    v.prototype.unshift = v.prototype.unshift;
    v.prototype.has = function (a) {
        return ka(a) && this.h.hasOwnProperty(a) || this.oa.has(a)
    };
    var na = function () {
        function a(a, b) {
            c[a] = b
        }

        function b() {
            c = {};
            f = !1
        }

        var c = {}, d, e = {}, f = !1, h = {
            add: a, Wb: function (a, b, c) {
                e[a] || (e[a] = {});
                e[a][b] = c
            }, create: function (e) {
                var h = {
                    add: a, assert: function (a, b) {
                        if (!f) {
                            var h = c[a] || d;
                            h && h.apply(e, Array.prototype.slice.call(arguments, 0))
                        }
                    }, reset: b
                };
                h.add = h.add;
                h.assert = h.assert;
                h.reset = h.reset;
                return h
            }, yc: function (a) {
                return e[a] ? (b(), c = e[a], !0) : !1
            }, qa: function (a) {
                d = a
            }, reset: b, Ic: function (a) {
                f = a
            }
        };
        h.add = h.add;
        h.addToCache = h.Wb;
        h.loadFromCache = h.yc;
        h.registerDefaultPermission =
            h.qa;
        h.reset = h.reset;
        h.setPermitAllAsserts = h.Ic;
        return h
    };
    var oa = function () {
        function a(a, c) {
            if (b[a]) {
                if (b[a].Qa + c > b[a].max) throw Error("Quota exceeded");
                b[a].Qa += c
            }
        }

        var b = {}, c = void 0, d = void 0, e = {
            je: function (a) {
                c = a
            }, Xb: function () {
                c && a(c, 1)
            }, ke: function (a) {
                d = a
            }, X: function (b) {
                d && a(d, b)
            }, Ge: function (a, c) {
                b[a] = b[a] || {Qa: 0};
                b[a].max = c
            }, Id: function (a) {
                return b[a] && b[a].Qa || 0
            }, reset: function () {
                b = {}
            }, qd: a
        };
        e.onFnConsume = e.je;
        e.consumeFn = e.Xb;
        e.onStorageConsume = e.ke;
        e.consumeStorage = e.X;
        e.setMax = e.Ge;
        e.getConsumed = e.Id;
        e.reset = e.reset;
        e.consume = e.qd;
        return e
    };
    var pa = function (a, b, c) {
        this.M = a;
        this.I = b;
        this.aa = c;
        this.h = new la
    };
    pa.prototype.add = function (a, b) {
        this.h.Ba || (this.M.X(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.h.set(a, b))
    };
    pa.prototype.add = pa.prototype.add;
    pa.prototype.set = function (a, b) {
        this.h.Ba || (this.aa && this.aa.has(a) ? this.aa.set(a, b) : (this.M.X(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.h.set(a, b)))
    };
    pa.prototype.set = pa.prototype.set;
    pa.prototype.get = function (a) {
        return this.h.has(a) ? this.h.get(a) : this.aa ? this.aa.get(a) : void 0
    };
    pa.prototype.get = pa.prototype.get;
    pa.prototype.has = function (a) {
        return !!this.h.has(a) || !(!this.aa || !this.aa.has(a))
    };
    pa.prototype.has = pa.prototype.has;
    pa.prototype.K = function () {
        return this.M
    };
    pa.prototype.L = function () {
        this.h.L()
    };
    var qa = function () {
    }, ra = function (a) {
        return "function" == typeof a
    }, sa = function (a) {
        return "string" == typeof a
    }, ta = function (a) {
        return "number" == typeof a && !isNaN(a)
    }, ua = function (a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a))
    }, va = function (a, b) {
        if (Array.prototype.indexOf) {
            var c = a.indexOf(b);
            return "number" == typeof c ? c : -1
        }
        for (var d = 0; d < a.length; d++) if (a[d] === b) return d;
        return -1
    }, xa = function (a, b) {
        if (!ta(a) || !ta(b) || a > b) a = 0, b = 2147483647;
        return Math.floor(Math.random() * (b - a + 1) + a)
    }, ya = function (a) {
        return Math.round(Number(a)) ||
            0
    }, Aa = function (a) {
        return "false" == String(a).toLowerCase() ? !1 : !!a
    }, Ba = function (a) {
        var b = [];
        if (ua(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
        return b
    }, Ca = function () {
        return new Date
    }, Da = function () {
        this.prefix = "gtm.";
        this.values = {}
    };
    Da.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b
    };
    Da.prototype.get = function (a) {
        return this.values[this.prefix + a]
    };
    Da.prototype.contains = function (a) {
        return void 0 !== this.get(a)
    };
    var Ea = function (a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c
    }, Fa = function (a) {
        var b = !1;
        return function () {
            if (!b) try {
                a()
            } catch (c) {
            }
            b = !0
        }
    }, Ga = function (a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
    }, Ha = function (a) {
        for (var b in a) if (a.hasOwnProperty(b)) return !0;
        return !1
    };
    var w = function (a, b) {
        la.call(this);
        this.zc = a;
        this.Gd = b
    };
    ia(w, la);
    var Ja = function (a, b) {
        for (var c, d = 0; d < b.length && !(c = Ia(a, b[d]), c instanceof g); d++) ;
        return c
    }, Ia = function (a, b) {
        var c = a.get(String(b[0]));
        if (!(c && c instanceof w)) throw"Attempting to execute non-function " + b[0] + ".";
        return c.m.apply(c, [a].concat(b.slice(1)))
    };
    w.prototype.toString = function () {
        return this.zc
    };
    w.prototype.getName = function () {
        return this.zc
    };
    w.prototype.getName = w.prototype.getName;
    w.prototype.U = function () {
        return new v(ma(this))
    };
    w.prototype.getKeys = w.prototype.U;
    w.prototype.m = function (a, b) {
        var c, d = {
            F: function () {
                return a
            }, evaluate: function (b) {
                var c = a;
                return ua(b) ? Ia(c, b) : b
            }, ya: function (b) {
                return Ja(a, b)
            }, K: function () {
                return a.K()
            }, hc: function () {
                c || (c = a.I.create(d));
                return c
            }
        };
        a.K().Xb();
        return this.Gd.apply(d, Array.prototype.slice.call(arguments, 1))
    };
    w.prototype.invoke = w.prototype.m;
    var Ka = function () {
        la.call(this)
    };
    ia(Ka, la);
    Ka.prototype.U = function () {
        return new v(ma(this))
    };
    Ka.prototype.getKeys = Ka.prototype.U;
    /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var La = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, Ma = function (a) {
        if (null == a) return String(a);
        var b = La.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object"
    }, Na = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b)
    }, Oa = function (a) {
        if (!a || "object" != Ma(a) || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !Na(a, "constructor") && !Na(a.constructor.prototype, "isPrototypeOf")) return !1
        } catch (c) {
            return !1
        }
        for (var b in a) ;
        return void 0 ===
            b || Na(a, b)
    }, Pa = function (a, b) {
        var c = b || ("array" == Ma(a) ? [] : {}), d;
        for (d in a) if (Na(a, d)) {
            var e = a[d];
            "array" == Ma(e) ? ("array" != Ma(c[d]) && (c[d] = []), c[d] = Pa(e, c[d])) : Oa(e) ? (Oa(c[d]) || (c[d] = {}), c[d] = Pa(e, c[d])) : c[d] = e
        }
        return c
    };
    var Qa = function (a) {
        if (a instanceof v) {
            for (var b = [], c = a.length(), d = 0; d < c; d++) a.has(d) && (b[d] = Qa(a.get(d)));
            return b
        }
        if (a instanceof Ka) {
            for (var e = {}, f = a.U(), h = f.length(), k = 0; k < h; k++) e[f.get(k)] = Qa(a.get(f.get(k)));
            return e
        }
        return a instanceof w ? function () {
            for (var b = Array.prototype.slice.call(arguments, 0), c = 0; c < b.length; c++) b[c] = Ra(b[c]);
            var d = new pa(oa(), na());
            return Qa(a.m.apply(a, [d].concat(b)))
        } : a
    }, Ra = function (a) {
        if (ua(a)) {
            for (var b = [], c = 0; c < a.length; c++) a.hasOwnProperty(c) && (b[c] = Ra(a[c]));
            return new v(b)
        }
        if (Oa(a)) {
            var d =
                new Ka, e;
            for (e in a) a.hasOwnProperty(e) && d.set(e, Ra(a[e]));
            return d
        }
        if ("function" === typeof a) return new w("", function (b) {
            for (var c = Array.prototype.slice.call(arguments, 0), d = 0; d < c.length; d++) c[d] = Qa(this.evaluate(c[d]));
            return Ra(a.apply(a, c))
        });
        var f = typeof a;
        if (null === a || "string" === f || "number" === f || "boolean" === f) return a
    };
    var Sa = {
        control: function (a, b) {
            return new g(a, this.evaluate(b))
        }, fn: function (a, b, c) {
            var d = this.F(), e = this.evaluate(b);
            if (!(e instanceof v)) throw"Error: non-List value given for Fn argument names.";
            var f = Array.prototype.slice.call(arguments, 2);
            this.K().X(a.length + f.length);
            return new w(a, function () {
                return function (a) {
                    for (var b = new pa(d.M, d.I, d), c = Array.prototype.slice.call(arguments, 0), h = 0; h < c.length; h++) if (c[h] = this.evaluate(c[h]), c[h] instanceof g) return c[h];
                    for (var n = e.get("length"), p = 0; p < n; p++) p <
                    c.length ? b.set(e.get(p), c[p]) : b.set(e.get(p), void 0);
                    b.set("arguments", new v(c));
                    var q = Ja(b, f);
                    if (q instanceof g) return "return" === q.B ? q.getData() : q
                }
            }())
        }, list: function (a) {
            var b = this.K();
            b.X(arguments.length);
            for (var c = new v, d = 0; d < arguments.length; d++) {
                var e = this.evaluate(arguments[d]);
                "string" === typeof e && b.X(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        }, map: function (a) {
            for (var b = this.K(), c = new Ka, d = 0; d < arguments.length - 1; d += 2) {
                var e = this.evaluate(arguments[d]) + "", f = this.evaluate(arguments[d + 1]), h = e.length;
                h += "string" === typeof f ? f.length : 1;
                b.X(h);
                c.set(e, f)
            }
            return c
        }, undefined: function () {
        }
    };
    var x = function () {
        this.M = oa();
        this.I = na();
        this.za = new pa(this.M, this.I)
    };
    x.prototype.W = function (a, b) {
        var c = new w(a, b);
        c.L();
        this.za.set(a, c)
    };
    x.prototype.addInstruction = x.prototype.W;
    x.prototype.Vb = function (a, b) {
        Sa.hasOwnProperty(a) && this.W(b || a, Sa[a])
    };
    x.prototype.addNativeInstruction = x.prototype.Vb;
    x.prototype.K = function () {
        return this.M
    };
    x.prototype.getQuota = x.prototype.K;
    x.prototype.Xa = function () {
        this.M = oa();
        this.za.M = this.M
    };
    x.prototype.resetQuota = x.prototype.Xa;
    x.prototype.De = function () {
        this.I = na();
        this.za.I = this.I
    };
    x.prototype.resetPermissions = x.prototype.De;
    x.prototype.S = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.yb(c)
    };
    x.prototype.execute = x.prototype.S;
    x.prototype.yb = function (a) {
        for (var b, c = 0; c < arguments.length; c++) {
            var d = Ia(this.za, arguments[c]);
            b = d instanceof g || d instanceof w || d instanceof v || d instanceof Ka || null === d || void 0 === d || "string" === typeof d || "number" === typeof d || "boolean" === typeof d ? d : void 0
        }
        return b
    };
    x.prototype.run = x.prototype.yb;
    x.prototype.L = function () {
        this.za.L()
    };
    x.prototype.makeImmutable = x.prototype.L;
    var Ta = function (a) {
        for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
        return b
    };
    var Ua = {
        Ke: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function (a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (d = 1; d < arguments.length; d++) if (arguments[d] instanceof v) for (var e = arguments[d], f = 0; f < e.length(); f++) c.push(e.get(f)); else c.push(arguments[d]);
            return new v(c)
        },
        every: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) &&
                !b.m(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.m(a, this.get(e), e, this) && d.push(this.get(e));
            return new v(d)
        },
        forEach: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.m(a, this.get(d), d, this)
        },
        hasOwnProperty: function (a, b) {
            return this.has(b)
        },
        indexOf: function (a, b, c) {
            var d = this.length(), e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++) if (this.has(f) && this.get(f) ===
                b) return f;
            return -1
        },
        join: function (a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function (a, b, c) {
            var d = this.length(), e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--) if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function (a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.m(a, this.get(e), e, this));
            return new v(d)
        },
        pop: function () {
            return this.pop()
        },
        push: function (a, b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments,
                1))
        },
        reduce: function (a, b, c) {
            var d = this.length(), e, f;
            if (void 0 !== c) e = c, f = 0; else {
                if (0 == d) throw"TypeError: Reduce on List with no elements.";
                for (var h = 0; h < d; h++) if (this.has(h)) {
                    e = this.get(h);
                    f = h + 1;
                    break
                }
                if (h == d) throw"TypeError: Reduce on List with no elements.";
            }
            for (h = f; h < d; h++) this.has(h) && (e = b.m(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function (a, b, c) {
            var d = this.length(), e, f;
            if (void 0 !== c) e = c, f = d - 1; else {
                if (0 == d) throw"TypeError: ReduceRight on List with no elements.";
                for (var h = 1; h <= d; h++) if (this.has(d -
                    h)) {
                    e = this.get(d - h);
                    f = d - (h + 1);
                    break
                }
                if (h > d) throw"TypeError: ReduceRight on List with no elements.";
            }
            for (h = f; 0 <= h; h--) this.has(h) && (e = b.m(a, e, this.get(h), h, this));
            return e
        },
        reverse: function () {
            for (var a = Ta(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function () {
            return this.shift()
        },
        slice: function (a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b,
                c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new v(e)
        },
        some: function (a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && b.m(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function (a, b) {
            var c = Ta(this);
            void 0 === b ? c.sort() : c.sort(function (c, d) {
                return Number(b.m(a, c, d))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d)
        },
        splice: function (a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function () {
            return this.toString()
        },
        unshift: function (a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var y = {
            qc: {
                ADD: 0,
                AND: 1,
                APPLY: 2,
                ASSIGN: 3,
                BREAK: 4,
                CASE: 5,
                CONTINUE: 6,
                CONTROL: 49,
                CREATE_ARRAY: 7,
                CREATE_OBJECT: 8,
                DEFAULT: 9,
                DEFN: 50,
                DIVIDE: 10,
                DO: 11,
                EQUALS: 12,
                EXPRESSION_LIST: 13,
                FN: 51,
                FOR: 14,
                FOR_IN: 47,
                GET: 15,
                GET_CONTAINER_VARIABLE: 48,
                GET_INDEX: 16,
                GET_PROPERTY: 17,
                GREATER_THAN: 18,
                GREATER_THAN_EQUALS: 19,
                IDENTITY_EQUALS: 20,
                IDENTITY_NOT_EQUALS: 21,
                IF: 22,
                LESS_THAN: 23,
                LESS_THAN_EQUALS: 24,
                MODULUS: 25,
                MULTIPLY: 26,
                NEGATE: 27,
                NOT: 28,
                NOT_EQUALS: 29,
                NULL: 45,
                OR: 30,
                PLUS_EQUALS: 31,
                POST_DECREMENT: 32,
                POST_INCREMENT: 33,
                PRE_DECREMENT: 34,
                PRE_INCREMENT: 35,
                QUOTE: 46,
                RETURN: 36,
                SET_PROPERTY: 43,
                SUBTRACT: 37,
                SWITCH: 38,
                TERNARY: 39,
                TYPEOF: 40,
                UNDEFINED: 44,
                VAR: 41,
                WHILE: 42
            }
        },
        Va = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        Wa = new g("break"), Xa = new g("continue");
    y.add = function (a, b) {
        return this.evaluate(a) + this.evaluate(b)
    };
    y.and = function (a, b) {
        return this.evaluate(a) && this.evaluate(b)
    };
    y.apply = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!(c instanceof v)) throw"Error: Non-List argument given to Apply instruction.";
        if (null === a || void 0 === a) throw"TypeError: Can't read property " + b + " of " + a + ".";
        if ("boolean" == typeof a || "number" == typeof a) {
            if ("toString" == b) return a.toString();
            throw"TypeError: " + a + "." + b + " is not a function.";
        }
        if ("string" == typeof a) {
            if (0 <= va(Va, b)) return Ra(a[b].apply(a, Ta(c)));
            throw"TypeError: " + b + " is not a function";
        }
        if (a instanceof v) {
            if (a.has(b)) {
                var d =
                    a.get(b);
                if (d instanceof w) {
                    var e = Ta(c);
                    e.unshift(this.F());
                    return d.m.apply(d, e)
                }
                throw"TypeError: " + b + " is not a function";
            }
            if (0 <= va(Ua.Ke, b)) return e = Ta(c), e.unshift(this.F()), Ua[b].apply(a, e)
        }
        if (a instanceof w || a instanceof Ka) {
            if (a.has(b)) {
                d = a.get(b);
                if (d instanceof w) return e = Ta(c), e.unshift(this.F()), d.m.apply(d, e);
                throw"TypeError: " + b + " is not a function";
            }
            if ("toString" == b) return a instanceof w ? a.getName() : a.toString();
            if ("hasOwnProperty" == b) return a.has.apply(a, Ta(c))
        }
        throw"TypeError: Object has no '" +
        b + "' property.";
    };
    y.assign = function (a, b) {
        a = this.evaluate(a);
        if ("string" != typeof a) throw"Invalid key name given for assignment.";
        var c = this.F();
        if (!c.has(a)) throw"Attempting to assign to undefined value " + b;
        var d = this.evaluate(b);
        c.set(a, d);
        return d
    };
    y["break"] = function () {
        return Wa
    };
    y["case"] = function (a) {
        for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
            var d = this.evaluate(b[c]);
            if (d instanceof g) return d
        }
    };
    y["continue"] = function () {
        return Xa
    };
    y.xd = function (a, b, c) {
        var d = new v;
        b = this.evaluate(b);
        for (var e = 0; e < b.length; e++) d.push(b[e]);
        var f = [y.qc.FN, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
        this.F().set(a, this.evaluate(f))
    };
    y.Ad = function (a, b) {
        return this.evaluate(a) / this.evaluate(b)
    };
    y.Dd = function (a, b) {
        return this.evaluate(a) == this.evaluate(b)
    };
    y.Ed = function (a) {
        for (var b, c = 0; c < arguments.length; c++) b = this.evaluate(arguments[c]);
        return b
    };
    y.Hd = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        var d = this.F();
        if ("string" == typeof b) for (var e = 0; e < b.length; e++) {
            d.set(a, e);
            var f = this.ya(c);
            if (f instanceof g) {
                if ("break" == f.B) break;
                if ("return" == f.B) return f
            }
        } else if (b instanceof Ka || b instanceof v || b instanceof w) {
            var h = b.U(), k = h.length();
            for (e = 0; e < k; e++) if (d.set(a, h.get(e)), f = this.ya(c), f instanceof g) {
                if ("break" == f.B) break;
                if ("return" == f.B) return f
            }
        }
    };
    y.get = function (a) {
        return this.F().get(this.evaluate(a))
    };
    y.ic = function (a, b) {
        var c;
        a = this.evaluate(a);
        b = this.evaluate(b);
        if (void 0 === a || null === a) throw"TypeError: cannot access property of " + a + ".";
        a instanceof Ka || a instanceof v || a instanceof w ? c = a.get(b) : "string" == typeof a && ("length" == b ? c = a.length : ka(b) && (c = a[b]));
        return c
    };
    y.Kd = function (a, b) {
        return this.evaluate(a) > this.evaluate(b)
    };
    y.Ld = function (a, b) {
        return this.evaluate(a) >= this.evaluate(b)
    };
    y.Sd = function (a, b) {
        return this.evaluate(a) === this.evaluate(b)
    };
    y.Td = function (a, b) {
        return this.evaluate(a) !== this.evaluate(b)
    };
    y["if"] = function (a, b, c) {
        var d = [];
        this.evaluate(a) ? d = this.evaluate(b) : c && (d = this.evaluate(c));
        var e = this.ya(d);
        if (e instanceof g) return e
    };
    y.ae = function (a, b) {
        return this.evaluate(a) < this.evaluate(b)
    };
    y.be = function (a, b) {
        return this.evaluate(a) <= this.evaluate(b)
    };
    y.de = function (a, b) {
        return this.evaluate(a) % this.evaluate(b)
    };
    y.multiply = function (a, b) {
        return this.evaluate(a) * this.evaluate(b)
    };
    y.ee = function (a) {
        return -this.evaluate(a)
    };
    y.fe = function (a) {
        return !this.evaluate(a)
    };
    y.he = function (a, b) {
        return this.evaluate(a) != this.evaluate(b)
    };
    y["null"] = function () {
        return null
    };
    y.or = function (a, b) {
        return this.evaluate(a) || this.evaluate(b)
    };
    y.Ec = function (a, b) {
        var c = this.evaluate(a);
        this.evaluate(b);
        return c
    };
    y.Fc = function (a) {
        return this.evaluate(a)
    };
    y.quote = function (a) {
        return Array.prototype.slice.apply(arguments)
    };
    y["return"] = function (a) {
        return new g("return", this.evaluate(a))
    };
    y.setProperty = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (null === a || void 0 === a) throw"TypeError: Can't set property " + b + " of " + a + ".";
        (a instanceof w || a instanceof v || a instanceof Ka) && a.set(b, c);
        return c
    };
    y.Je = function (a, b) {
        return this.evaluate(a) - this.evaluate(b)
    };
    y["switch"] = function (a, b, c) {
        a = this.evaluate(a);
        b = this.evaluate(b);
        c = this.evaluate(c);
        if (!ua(b) || !ua(c)) throw"Error: Malformed switch instruction.";
        for (var d, e = !1, f = 0; f < b.length; f++) if (e || a === this.evaluate(b[f])) if (d = this.evaluate(c[f]), d instanceof g) {
            var h = d.B;
            if ("break" == h) return;
            if ("return" == h || "continue" == h) return d
        } else e = !0;
        if (c.length == b.length + 1 && (d = this.evaluate(c[c.length - 1]), d instanceof g && ("return" == d.B || "continue" == d.B))) return d
    };
    y.Le = function (a, b, c) {
        return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c)
    };
    y["typeof"] = function (a) {
        a = this.evaluate(a);
        return a instanceof w ? "function" : typeof a
    };
    y.undefined = function () {
    };
    y["var"] = function (a) {
        for (var b = this.F(), c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            "string" != typeof d || b.add(d, void 0)
        }
    };
    y["while"] = function (a, b, c, d) {
        var e, f = this.evaluate(d);
        if (this.evaluate(c) && (e = this.ya(f), e instanceof g)) {
            if ("break" == e.B) return;
            if ("return" == e.B) return e
        }
        for (; this.evaluate(a);) {
            e = this.ya(f);
            if (e instanceof g) {
                if ("break" == e.B) break;
                if ("return" == e.B) return e
            }
            this.evaluate(b)
        }
    };
    var $a = function () {
        this.oc = !1;
        this.H = new x;
        Ya(this);
        this.oc = !0
    };
    $a.prototype.Yd = function () {
        return this.oc
    };
    $a.prototype.isInitialized = $a.prototype.Yd;
    $a.prototype.S = function (a) {
        this.H.I.yc(String(a[0])) || (this.H.I.reset(), this.H.I.Ic(!0));
        return this.H.yb(a)
    };
    $a.prototype.execute = $a.prototype.S;
    $a.prototype.L = function () {
        this.H.L()
    };
    $a.prototype.makeImmutable = $a.prototype.L;
    var Ya = function (a) {
        function b(a, b) {
            e.H.Vb(a, String(b))
        }

        function c(a, b) {
            e.H.W(String(d[a]), b)
        }

        var d = y.qc, e = a;
        b("control", d.CONTROL);
        b("fn", d.FN);
        b("list", d.CREATE_ARRAY);
        b("map", d.CREATE_OBJECT);
        b("undefined", d.UNDEFINED);
        c("ADD", y.add);
        c("AND", y.and);
        c("APPLY", y.apply);
        c("ASSIGN", y.assign);
        c("BREAK", y["break"]);
        c("CASE", y["case"]);
        c("CONTINUE", y["continue"]);
        c("DEFAULT", y["case"]);
        c("DEFN", y.xd);
        c("DIVIDE", y.Ad);
        c("EQUALS", y.Dd);
        c("EXPRESSION_LIST", y.Ed);
        c("FOR_IN", y.Hd);
        c("GET", y.get);
        c("GET_INDEX",
            y.ic);
        c("GET_PROPERTY", y.ic);
        c("GREATER_THAN", y.Kd);
        c("GREATER_THAN_EQUALS", y.Ld);
        c("IDENTITY_EQUALS", y.Sd);
        c("IDENTITY_NOT_EQUALS", y.Td);
        c("IF", y["if"]);
        c("LESS_THAN", y.ae);
        c("LESS_THAN_EQUALS", y.be);
        c("MODULUS", y.de);
        c("MULTIPLY", y.multiply);
        c("NEGATE", y.ee);
        c("NOT", y.fe);
        c("NOT_EQUALS", y.he);
        c("NULL", y["null"]);
        c("OR", y.or);
        c("POST_DECREMENT", y.Ec);
        c("POST_INCREMENT", y.Ec);
        c("PRE_DECREMENT", y.Fc);
        c("PRE_INCREMENT", y.Fc);
        c("QUOTE", y.quote);
        c("RETURN", y["return"]);
        c("SET_PROPERTY", y.setProperty);
        c("SUBTRACT", y.Je);
        c("SWITCH", y["switch"]);
        c("TERNARY", y.Le);
        c("TYPEOF", y["typeof"]);
        c("VAR", y["var"]);
        c("WHILE", y["while"])
    };
    $a.prototype.W = function (a, b) {
        this.H.W(a, b)
    };
    $a.prototype.addInstruction = $a.prototype.W;
    $a.prototype.K = function () {
        return this.H.K()
    };
    $a.prototype.getQuota = $a.prototype.K;
    $a.prototype.Xa = function () {
        this.H.Xa()
    };
    $a.prototype.resetQuota = $a.prototype.Xa;
    $a.prototype.qa = function (a) {
        this.H.I.qa(a)
    };
    $a.prototype.Oa = function (a, b, c) {
        this.H.I.Wb(a, b, c)
    };
    var ab = function () {
        this.Ta = {}
    };
    ab.prototype.get = function (a) {
        return this.Ta.hasOwnProperty(a) ? this.Ta[a] : void 0
    };
    ab.prototype.add = function (a, b) {
        if (this.Ta.hasOwnProperty(a)) throw"Attempting to add a function which already exists: " + a + ".";
        var c = new w(a, function () {
            for (var a = Array.prototype.slice.call(arguments, 0), c = 0; c < a.length; c++) a[c] = this.evaluate(a[c]);
            return b.apply(this, a)
        });
        c.L();
        this.Ta[a] = c
    };
    ab.prototype.addAll = function (a) {
        for (var b in a) a.hasOwnProperty(b) && this.add(b, a[b])
    };
    var z = window, B = document, bb = navigator, cb = function (a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        }, db = function (a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
                a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
            })
        }, eb = function (a, b, c) {
            var d = B.createElement("script");
            d.type = "text/javascript";
            d.async = !0;
            d.src = a;
            db(d, b);
            c && (d.onerror = c);
            ha() && d.setAttribute("nonce", ha());
            var e = B.getElementsByTagName("script")[0] || B.body || B.head;
            e.parentNode.insertBefore(d, e);
            return d
        },
        fb = function (a, b) {
            var c = B.createElement("iframe");
            c.height = "0";
            c.width = "0";
            c.style.display = "none";
            c.style.visibility = "hidden";
            var d = B.body && B.body.lastChild || B.body || B.head;
            d.parentNode.insertBefore(c, d);
            db(c, b);
            void 0 !== a && (c.src = a);
            return c
        }, E = function (a, b, c) {
            var d = new Image(1, 1);
            d.onload = function () {
                d.onload = null;
                b && b()
            };
            d.onerror = function () {
                d.onerror = null;
                c && c()
            };
            d.src = a
        }, gb = function (a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        }, hb = function (a, b,
                          c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, !!d) : a.detachEvent && a.detachEvent("on" + b, c)
        }, H = function (a) {
            z.setTimeout(a, 0)
        }, kb = function (a) {
            var b = B.getElementById(a);
            if (b && jb(b, "id") != a) for (var c = 1; c < document.all[a].length; c++) if (jb(document.all[a][c], "id") == a) return document.all[a][c];
            return b
        }, jb = function (a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        }, lb = function (a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b =
                b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        }, mb = function (a) {
            var b = B.createElement("div");
            b.innerHTML = "A<div>" + a + "</div>";
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        }, nb = function (a) {
            bb.sendBeacon && bb.sendBeacon(a) || E(a)
        };
    var ob = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var pb = /:[0-9]+$/, qb = function (a, b, c) {
        for (var d = a.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") == b) {
                var h = f.slice(1).join("=");
                return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
            }
        }
    }, rb = function (a, b, c, d, e) {
        var f, h = function (a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        }, k = h(a.protocol) || h(z.location.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
            case "protocol":
                f = k;
                break;
            case "host":
                f = (a.hostname || z.location.hostname).replace(pb, "").toLowerCase();
                if (c) {
                    var l = /^www\d*\./.exec(f);
                    l && l[0] && (f = f.substr(l[0].length))
                }
                break;
            case "port":
                f = String(Number(a.hostname ? a.port : z.location.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
                break;
            case "path":
                f = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                var m = f.split("/");
                0 <= va(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
                f = m.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = qb(f, e));
                break;
            case "extension":
                var n = a.pathname.split(".");
                f = 1 < n.length ? n[n.length - 1] : "";
                f = f.split("/")[0];
                break;
            case "fragment":
                f =
                    a.hash.replace("#", "");
                break;
            default:
                f = a && a.href
        }
        return f
    }, sb = function (a) {
        var b = "";
        a && a.href && (b = a.hash ? a.href.replace(a.hash, "") : a.href);
        return b
    }, N = function (a) {
        var b = document.createElement("a");
        a && (ob.test(a), b.href = a);
        var c = b.pathname;
        "/" !== c[0] && (c = "/" + c);
        var d = b.hostname.replace(pb, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port
        }
    };
    var vb = function () {
        this.Wa = new $a;
        var a = new ab;
        a.addAll(tb());
        ub(this, function (b) {
            return a.get(b)
        })
    }, tb = function () {
        return {
            callInWindow: wb,
            callLater: yb,
            copyFromWindow: zb,
            encodeURI: encodeURI,
            encodeURIComponent: encodeURIComponent,
            getReferrer: Ab,
            getUrl: Bb,
            getUrlComponent: Cb,
            getUrlFragment: Db,
            isPlainObject: Eb,
            loadIframe: Fb,
            loadJavaScript: Gb,
            logToConsole: Hb,
            queryPermission: Ib,
            removeUrlFragment: Jb,
            replaceAll: Kb,
            sendPixel: Lb,
            setInWindow: Mb
        }
    };
    vb.prototype.S = function (a) {
        return this.Wa.S(a)
    };
    vb.prototype.execute = vb.prototype.S;
    var ub = function (a, b) {
        a.Wa.W("require", b)
    };
    vb.prototype.qa = function (a) {
        this.Wa.qa(a)
    };
    vb.prototype.Oa = function (a, b, c) {
        this.Wa.Oa(a, b, c)
    };

    function wb(a, b) {
        for (var c = a.split("."), d = z, e = d[c[0]], f = 1; e && f < c.length; f++) d = e, e = e[c[f]];
        if ("function" == Ma(e)) {
            var h = [];
            for (f = 1; f < arguments.length; f++) h.push(Qa(arguments[f]));
            e.apply(d, h)
        }
    }

    function yb(a) {
        var b = this.F();
        H(function () {
            a instanceof w && a.m(b)
        })
    }

    function Bb() {
        return z.location.href
    }

    function zb(a, b, c) {
        for (var d = a.split("."), e = z, f = 0; f < d.length - 1; f++) if (e = e[d[f]], void 0 === e || null === e) return;
        b && (void 0 === e[d[f]] || c && !e[d[f]]) && (e[d[f]] = Qa(b));
        return Ra(e[d[f]])
    }

    function Ab() {
        return B.referrer
    }

    function Cb(a, b, c, d, e) {
        var f;
        if (d && d instanceof v) {
            f = [];
            for (var h = 0; h < d.length(); h++) {
                var k = d.get(h);
                "string" == typeof k && f.push(k)
            }
        }
        return rb(N(a), b, c, f, e)
    }

    function Db(a) {
        return rb(N(a), "fragment")
    }

    function Eb(a) {
        return a instanceof Ka
    }

    function Fb(a, b) {
        var c = this.F();
        fb(a, function () {
            b instanceof w && b.m(c)
        })
    }

    var Nb = {};

    function Gb(a, b, c, d) {
        this.hc().assert("networkAccess", a);
        var e = this.F(), f = function () {
            b instanceof w && b.m(e)
        }, h = function () {
            c instanceof w && c.m(e)
        };
        d ? Nb[d] ? (Nb[d].onSuccess.push(f), Nb[d].onFailure.push(h)) : (Nb[d] = {
            onSuccess: [f],
            onFailure: [h]
        }, f = function () {
            for (var a = Nb[d].onSuccess, b = 0; b < a.length; b++) H(a[b]);
            a.push = function (a) {
                H(a);
                return 0
            }
        }, h = function () {
            for (var a = Nb[d].onFailure, b = 0; b < a.length; b++) H(a[b]);
            Nb[d] = null
        }, eb(a, f, h)) : eb(a, f, h)
    }

    function Hb() {
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = Qa(a[b]);
        console.log.apply(console, a)
    }

    function Jb(a) {
        return sb(N(a))
    }

    function Kb(a, b, c) {
        return a.replace(new RegExp(b, "g"), c)
    }

    function Lb(a, b, c) {
        var d = this.F();
        E(a, function () {
            b instanceof w && b.m(d)
        }, function () {
            c instanceof w && c.m(d)
        })
    }

    function Mb(a, b, c) {
        for (var d = a.split("."), e = z, f = 0; f < d.length - 1; f++) if (e = e[d[f]], void 0 === e) return !1;
        return void 0 === e[d[f]] || c ? (e[d[f]] = Qa(b), !0) : !1
    }

    function Ib(a, b) {
        try {
            return this.hc().assert.apply(null, Array.prototype.slice.call(arguments, 0)), !0
        } catch (c) {
            return !1
        }
    };var kc, lc = [], mc = [], nc = [], oc = [], pc = [], qc = {}, rc, sc, tc, uc = function (a) {
        var b = a["function"];
        if (!b) throw"Error: No function name given for function call.";
        var c = !!qc[b], d = {}, e;
        for (e in a) a.hasOwnProperty(e) && 0 === e.indexOf("vtp_") && (d[c ? e : e.substr(4)] = a[e]);
        return c ? qc[b](d) : kc(b, d)
    }, yc = function (a, b, c, d) {
        c = c || [];
        d = d || qa;
        var e = {}, f;
        for (f in a) a.hasOwnProperty(f) && (e[f] = xc(a[f], b, c, d));
        return e
    }, xc = function (a, b, c, d) {
        if (ua(a)) {
            var e;
            switch (a[0]) {
                case "function_id":
                    return a[1];
                case "list":
                    e = [];
                    for (var f = 1; f <
                    a.length; f++) e.push(xc(a[f], b, c, d));
                    return e;
                case "macro":
                    var h = a[1];
                    if (c[h]) return;
                    var k = lc[h];
                    if (!k || b(k)) return;
                    c[h] = !0;
                    try {
                        var l = yc(k, b, c, d);
                        e = uc(l);
                        tc && (e = tc.sd(e, l))
                    } catch (A) {
                        d(h, A), e = !1
                    }
                    c[h] = !1;
                    return e;
                case "map":
                    e = {};
                    for (var m = 1; m < a.length; m += 2) e[xc(a[m], b, c, d)] = xc(a[m + 1], b, c, d);
                    return e;
                case "template":
                    e = [];
                    for (var n = !1, p = 1; p < a.length; p++) {
                        var q = xc(a[p], b, c, d);
                        sc && (n = n || q === sc.Ja);
                        e.push(q)
                    }
                    return sc && n ? sc.td(e) : e.join("");
                case "escape":
                    e = xc(a[1], b, c, d);
                    if (sc && ua(a[1]) && "macro" === a[1][0] &&
                        sc.Zd(a)) return sc.qe(e);
                    e = String(e);
                    for (var r = 2; r < a.length; r++) Ob[a[r]] && (e = Ob[a[r]](e));
                    return e;
                case "tag":
                    var u = a[1];
                    if (!oc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                    return e = {bc: a[2], index: u};
                case "zb":
                    var t = zc({"function": a[1], arg0: a[2], arg1: a[3], ignore_case: a[5]}, b, c, d);
                    a[4] && (t = !t);
                    return t;
                default:
                    throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
            }
        }
        return a
    }, zc = function (a, b, c, d) {
        try {
            return rc(yc(a, b, c, d))
        } catch (e) {
            JSON.stringify(a)
        }
        return null
    };
    var Ac = null, Ec = function (a) {
        function b(a) {
            for (var b = 0; b < a.length; b++) d[a[b]] = !0
        }

        var c = [], d = [];
        Ac = Bc(a, Cc() || function () {
        });
        for (var e = 0; e < mc.length; e++) {
            var f = mc[e], h = Dc(f);
            if (h) {
                for (var k = f.add || [], l = 0; l < k.length; l++) c[k[l]] = !0;
                b(f.block || [])
            } else null === h && b(f.block || [])
        }
        var m = [];
        for (e = 0; e < oc.length; e++) c[e] && !d[e] && (m[e] = !0);
        return m
    }, Dc = function (a) {
        for (var b = a["if"] || [], c = 0; c < b.length; c++) {
            var d = Ac(b[c]);
            if (!d) return null === d ? null : !1
        }
        var e = a.unless || [];
        for (c = 0; c < e.length; c++) {
            d = Ac(e[c]);
            if (null ===
                d) return null;
            if (d) return !1
        }
        return !0
    };
    var Bc = function (a, b) {
        var c = [];
        return function (d) {
            void 0 === c[d] && (c[d] = zc(nc[d], a, void 0, b));
            return c[d]
        }
    };
     // todo проверить что за библиотека
    /*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
    var Hc = {}, Ic = null;
    Hc.o = "UA-120377628-1";
    var Jc = null, Kc = "//www.googletagmanager.com/a?id=" + Hc.o + "&cv=1", Lc = {}, Mc = {},
        Nc = B.currentScript ? B.currentScript.src : void 0, Oc = function () {
            var a = Ic.sequence || 0;
            Ic.sequence = a + 1;
            return a
        };
    var P = function () {
        var a = function (a) {
            return {
                toString: function () {
                    return a
                }
            }
        };
        return {
            Kb: a("convert_case_to"),
            Lb: a("convert_false_to"),
            Mb: a("convert_null_to"),
            Nb: a("convert_true_to"),
            Ob: a("convert_undefined_to"),
            P: a("function"),
            Lc: a("instance_name"),
            Mc: a("live_only"),
            Nc: a("malware_disabled"),
            Oc: a("once_per_event"),
            Qb: a("once_per_load"),
            Rb: a("setup_tags"),
            Pc: a("tag_id"),
            Sb: a("teardown_tags")
        }
    }();
    var Pc = new Da, Qc = {}, Tc = {
        set: function (a, b) {
            Pa(Rc(a, b), Qc)
        }, get: function (a) {
            return Sc(a, 2)
        }, reset: function () {
            Pc = new Da;
            Qc = {}
        }
    }, Sc = function (a, b) {
        return 2 != b ? Pc.get(a) : Uc(a)
    }, Uc = function (a, b, c) {
        var d = a.split(".");
        var e = function (a, b) {
            for (var c = 0; void 0 !== a && c < d.length; c++) {
                if (null === a) return !1;
                a = a[d[c]]
            }
            return void 0 !== a || 1 < c ? a : b.length ? e(Vc(b.pop()), b) : Wc(d)
        };
        return e(Qc.eventModel, [b, c]);
        return Wc(d)
    }, Wc = function (a) {
        for (var b = Qc, c = 0; c < a.length; c++) {
            if (null ===
                b) return !1;
            if (void 0 === b) break;
            b = b[a[c]]
        }
        return b
    };
    var Vc = function (a) {
        if (a) {
            var b = Wc(["gtag", "targets", a]);
            return Oa(b) ? b : void 0
        }
    }, Xc = function (a, b) {
        function c(a) {
            if (a) for (var b in a) a.hasOwnProperty(b) && (d[b] = null)
        }

        var d = {};
        c(Qc);
        delete d.eventModel;
        c(Vc(a));
        c(Vc(b));
        c(Qc.eventModel);
        var e = [], f;
        for (f in d) d.hasOwnProperty(f) && e.push(f);
        return e
    };
    var Yc = function (a, b) {
        Pc.set(a, b);
        Pa(Rc(a, b), Qc)
    }, Rc = function (a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c
    };
    var Zc = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), $c = {
        customPixels: ["nonGooglePixels"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"]
    }, ad = {
        customPixels: ["customScripts", "html"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels",
            "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
    }, bd = function (a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c
    };
    var cd = function (a) {
        var b = Sc("gtm.whitelist");
        b = ["google", "gtagfl", "oid", "op"];
        var c = b && bd(Ba(b), $c), d = Sc("gtm.blacklist") || Sc("tagTypeBlacklist") || [];
        Zc.test(z.location && z.location.hostname) && (d = Ba(d), d.push("nonGooglePixels", "nonGoogleScripts"));
        var e = d && bd(Ba(d), ad), f = {};
        return function (h) {
            var k = h && h[P.P];
            if (!k || "string" != typeof k) return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== f[k]) return f[k];
            var l = Mc[k] || [], m = a(k);
            if (b) {
                var n;
                if (n = m) a:{
                    if (0 > va(c, k)) if (l && 0 < l.length) for (var p = 0; p < l.length; p++) {
                        if (0 > va(c, l[p])) {
                            n = !1;
                            break a
                        }
                    } else {
                        n = !1;
                        break a
                    }
                    n = !0
                }
                m = n
            }
            var q = !1;
            if (d) {
                var r;
                if (!(r = 0 <=
                    va(e, k))) a:{
                    for (var u = l || [], t = new Da, A = 0; A < e.length; A++) t.set(e[A], !0);
                    for (var D = 0; D < u.length; D++) if (t.get(u[D])) {
                        r = !0;
                        break a
                    }
                    r = !1
                }
                q = r
            }
            return f[k] = !m || q
        }
    };
    var dd = {
        sd: function (a, b) {
            b[P.Kb] && "string" === typeof a && (a = 1 == b[P.Kb] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(P.Mb) && null === a && (a = b[P.Mb]);
            b.hasOwnProperty(P.Ob) && void 0 === a && (a = b[P.Ob]);
            b.hasOwnProperty(P.Nb) && !0 === a && (a = b[P.Nb]);
            b.hasOwnProperty(P.Lb) && !1 === a && (a = b[P.Lb]);
            return a
        }
    };
    var ed = function (a) {
        this.ne = a
    };
    ia(ed, Error);
    ed.prototype.getParameters = function () {
        return this.ne
    };
    var fd = function (a) {
        var b = Ic.zones;
        !b && a && (b = Ic.zones = a());
        return b
    }, gd = {
        active: !0, isWhitelisted: function () {
            return !0
        }
    };
    var hd = !1, id = 0, jd = [];

    function kd(a) {
        if (!hd) {
            var b = B.createEventObject, c = "complete" == B.readyState, d = "interactive" == B.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                hd = !0;
                for (var e = 0; e < jd.length; e++) H(jd[e])
            }
            jd.push = function () {
                for (var a = 0; a < arguments.length; a++) H(arguments[a]);
                return 0
            }
        }
    }

    function ld() {
        if (!hd && 140 > id) {
            id++;
            try {
                B.documentElement.doScroll("left"), kd()
            } catch (a) {
                z.setTimeout(ld, 50)
            }
        }
    }

    var md = function (a) {
        hd ? a() : jd.push(a)
    };
    var nd = !1, pd = function () {
        return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
    };
    var qd = function (a) {
        z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
        var b = z.GoogleAnalyticsObject;
        if (!z[b]) {
            var c = function () {
                c.q = c.q || [];
                c.q.push(arguments)
            };
            c.l = Number(Ca());
            z[b] = c
        }
        return z[b]
    }, rd = function (a, b, c, d) {
        b = String(b).replace(/\s+/g, "").split(",");
        var e = pd();
        e(a + "require", "linker");
        e(a + "linker:autoLink", b, c, d)
    };
    var vd = function () {
        return "&tc=" + oc.filter(function (a) {
            return a
        }).length
    }, wd = "0.005000" > Math.random(), xd = function () {
        var a = 0, b = 0;
        return {
            $d: function () {
                if (2 > a) return !1;
                1E3 <= Ca().getTime() - b && (a = 0);
                return 2 <= a
            }, ye: function () {
                1E3 <= Ca().getTime() - b && (a = 0);
                a++;
                b = Ca().getTime()
            }
        }
    }, yd = "", zd = function () {
        yd = [Kc, "&v=3&t=t", "&pid=" + xa(), "&rv=9o"].join("")
    }, Ad = {}, Bd = "", Cd = void 0, Dd = {}, Ed = {}, Fd = void 0, Gd = null, Hd = 1E3, Id = function () {
        var a = Cd;
        return void 0 === a ? "" : [yd, Ad[a] ? "" : "&es=1",
            Dd[a], vd(), Bd, "&z=0"].join("")
    }, Jd = function () {
        Fd && (z.clearTimeout(Fd), Fd = void 0);
        void 0 === Cd || Ad[Cd] && !Bd || (Ed[Cd] || Gd.$d() || 0 >= Hd-- ? Ed[Cd] = !0 : (Gd.ye(), E(Id()), Ad[Cd] = !0, Bd = ""))
    }, Kd = function (a, b, c) {
        if (wd && !Ed[a] && b) {
            a !== Cd && (Jd(), Cd = a);
            var d = c + String(b[P.P] || "").replace(/_/g, "");
            Bd = Bd ? Bd + "." + d : "&tr=" + d;
            Fd || (Fd = z.setTimeout(Jd, 500));
            2022 <= Id().length && Jd()
        }
    };

    function Ld(a, b, c, d, e, f) {
        var h = oc[a], k = Md(a, b, c, d, e, f);
        if (!k) return null;
        var l = xc(h[P.Rb], f.Z, [], Nd());
        if (l && l.length) {
            var m = l[0];
            k = Ld(m.index, b, k, 1 === m.bc ? e : k, e, f)
        }
        return k
    }

    function Md(a, b, c, d, e, f) {
        function h() {
            var b = yc(k, f.Z, [], l);
            b.vtp_gtmOnSuccess = function () {
                Kd(f.id, oc[a], "5");
                c()
            };
            b.vtp_gtmOnFailure = function () {
                Kd(f.id, oc[a], "6");
                d()
            };
            b.vtp_gtmTagId = k.tag_id;
            if (k[P.Nc]) d(); else {
                Kd(f.id, k, "1");
                try {
                    uc(b)
                } catch (D) {
                    Kd(f.id,
                        k, "7");
                    e()
                }
            }
        }

        var k = oc[a];
        if (f.Z(k)) return null;
        var l = Nd(), m = xc(k[P.Sb], f.Z, [], l);
        if (m && m.length) {
            var n = m[0], p = Ld(n.index, b, c, d, e, f);
            if (!p) return null;
            c = p;
            d = 2 === n.bc ? e : p
        }
        if (k[P.Qb] || k[P.Oc]) {
            var q = k[P.Qb] ? pc : b, r = c, u = d;
            if (!q[a]) {
                h = Fa(h);
                var t = Od(a, q, h);
                c = t.V;
                d = t.ma
            }
            return function () {
                q[a](r, u)
            }
        }
        return h
    }

    function Od(a, b, c) {
        var d = [], e = [];
        b[a] = Pd(d, e, c);
        return {
            V: function () {
                b[a] = Qd;
                for (var c = 0; c < d.length; c++) d[c]()
            }, ma: function () {
                b[a] = Rd;
                for (var c = 0; c < e.length; c++) e[c]()
            }
        }
    }

    function Pd(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Qd(a) {
        a()
    }

    function Rd(a, b) {
        b()
    }

    function Nd() {
        return function () {
        }
    };

    function Sd(a) {
        var b = 0, c = 0, d = !1;
        return {
            add: function () {
                c++;
                return Fa(function () {
                    b++;
                    d && b >= c && a()
                })
            }, $c: function () {
                d = !0;
                b >= c && a()
            }
        }
    }

    function Td(a, b) {
        if (!wd) return;
        var c = function (a) {
            var d = b.Z(oc[a]) ? "3" : "4", f = xc(oc[a][P.Rb], b.Z, [], qa);
            f && f.length && c(f[0].index);
            Kd(b.id, oc[a], d);
            var h = xc(oc[a][P.Sb], b.Z, [], qa);
            h && h.length && c(h[0].index)
        };
        c(a);
    }

    var Ud = !1;

    function Cc() {
        return function () {
        }
    };var Vd = function (a, b) {
        var c = {};
        c[P.P] = "__" + a;
        for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
        for (d in void 0) (void 0).hasOwnProperty(d) && (c[d] = (void 0)[d]);
        oc.push(c);
        return oc.length - 1
    };
    var Wd = "allow_ad_personalization_signals cookie_domain cookie_expires cookie_name cookie_path custom_params event_callback event_timeout groups send_to send_page_view session_duration user_properties".split(" ");
    var Xd = /[A-Z]+/, Yd = /\s/, Zd = function (a) {
        if (sa(a) && (a = a.trim(), !Yd.test(a))) {
            var b = a.indexOf("-");
            if (!(0 > b)) {
                var c = a.substring(0, b);
                if (Xd.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e]) return;
                    return {id: a, prefix: c, containerId: c + "-" + d[0], Y: d}
                }
            }
        }
    };
    var $d = null, ae = {}, be = {}, ce;

    function de() {
        $d = $d || !Ic.gtagRegistered;
        Ic.gtagRegistered = !0;
        return $d
    }

    var ee = function (a, b) {
        var c = {event: a};
        b && (c.eventModel = Pa(b), b.event_callback && (c.eventCallback = b.event_callback), b.event_timeout && (c.eventTimeout = b.event_timeout));
        return c
    };

    function fe(a) {
        if (void 0 === be[a.id]) {
            var b;
            if ("UA" == a.prefix) b = Vd("gtagua", {trackingId: a.id}); else if ("AW" == a.prefix) b = Vd("gtagaw", {conversionId: a}); else if ("DC" == a.prefix) b = Vd("gtagfl", {targetId: a.id}); else if ("GF" == a.prefix) b = Vd("gtaggf", {conversionId: a}); else if ("G" == a.prefix) b = Vd("get", {
                trackingId: a.id,
                isAutoTag: !0
            }); else if ("HA" == a.prefix) b = Vd("gtagha", {conversionId: a}); else return;
            if (!ce) {
                var c = {name: "send_to", dataLayerVersion: 2}, d = {};
                d[P.P] = "__v";
                for (var e in c) c.hasOwnProperty(e) && (d["vtp_" +
                e] = c[e]);
                lc.push(d);
                ce = ["macro", lc.length - 1]
            }
            var f = {arg0: ce, arg1: a.id, ignore_case: !1};
            f[P.P] = "_lc";
            nc.push(f);
            var h = {"if": [nc.length - 1], add: [b]};
            h["if"] && (h.add || h.block) && mc.push(h);
            be[a.id] = b
        }
    }

    var he = {
        event: function (a) {
            var b = a[1];
            if (sa(b) && !(3 < a.length)) {
                var c;
                if (2 < a.length) {
                    if (!Oa(a[2])) return;
                    c = a[2]
                }
                var d = ee(b, c);
                var e;
                var f = c, h = Sc("gtag.fields.send_to", 2);
                sa(h) || (h = "send_to");
                var k = f && f[h];
                void 0 === k && (k = Sc(h, 2), void 0 === k && (k = "default"));
                if (sa(k) || ua(k)) {
                    for (var l, m = k.toString().replace(/\s+/g, "").split(","), n = [], p = 0; p < m.length; p++) 0 <= m[p].indexOf("-") ? n.push(m[p]) : n = n.concat(ae[m[p]] || []);
                    l = n;
                    for (var q = {}, r = 0; r < l.length; ++r) {
                        var u = Zd(l[r]);
                        u && (q[u.id] =
                            u)
                    }
                    var t = [], A;
                    for (A in q) if (q.hasOwnProperty(A)) {
                        var D = q[A];
                        "AW" === D.prefix && D.Y[1] && t.push(D.containerId)
                    }
                    for (var C = 0; C < t.length; ++C) delete q[t[C]];
                    var M = [], F;
                    for (F in q) q.hasOwnProperty(F) && M.push(q[F]);
                    e = M
                } else e = void 0;
                if (!e) return;
                var G = de();
                G || ge();
                for (var J = [], I = 0; G && I < e.length; I++) {
                    var K = e[I];
                    J.push(K.id);
                    fe(K)
                }
                d.eventModel = d.eventModel || {};
                0 < e.length ? d.eventModel.send_to = J.join() : delete d.eventModel.send_to;
                return d
            }
        }, set: function (a) {
            var b;
            2 == a.length && Oa(a[1]) ?
                b = Pa(a[1]) : 3 == a.length && sa(a[1]) && (b = {}, b[a[1]] = a[2]);
            if (b) return b.eventModel = Pa(b), b.event = "gtag.set", b._clear = !0, b
        }, js: function (a) {
            if (2 == a.length && a[1].getTime) return {event: "gtm.js", "gtm.start": a[1].getTime()}
        }, config: function (a) {
            var b = a[2] || {};
            if (2 > a.length || !sa(a[1]) || !Oa(b)) return;
            var c = Zd(a[1]);
            if (!c) return;
            de() ? fe(c) : ge();
            var d = c.id, e;
            for (e in ae) if (ae.hasOwnProperty(e)) {
                var f = va(ae[e], d);
                0 <= f && ae[e].splice(f, 1)
            }
            var h = c.id, k = b.groups || "default";
            k = k.toString().split(",");
            for (var l = 0; l < k.length; l++) ae[k[l]] = ae[k[l]] || [], ae[k[l]].push(h);
            delete b.groups;
            Yc("gtag.targets." + c.id, void 0);
            Yc("gtag.targets." + c.id, Pa(b));
            var m = {};
            m.send_to = c.id;
            return ee("gtag.config", m);
        }
    }, ge = Fa(function () {
    });
    var ie = !1, je = [];

    function ke() {
        if (!ie) {
            ie = !0;
            for (var a = 0; a < je.length; a++) H(je[a])
        }
    };var le = [], me = !1, ne = function (a) {
        var b = a.eventCallback, c = Fa(function () {
            ra(b) && H(function () {
                b(Hc.o)
            })
        }), d = a.eventTimeout;
        d && z.setTimeout(c, Number(d));
        return c
    }, oe = function () {
        for (var a = !1; !me && 0 < le.length;) {
            me = !0;
            delete Qc.eventModel;
            var b = le.shift();
            if (ra(b)) try {
                b.call(Tc)
            } catch (ye) {
            } else if (ua(b)) {
                var c = b;
                if (sa(c[0])) {
                    var d = c[0].split("."), e = d.pop(), f = c.slice(1), h = Sc(d.join("."), 2);
                    if (void 0 !== h && null !== h) try {
                        h[e].apply(h, f)
                    } catch (ye) {
                    }
                }
            } else {
                var k = b;
                if (k && ("[object Arguments]" == Object.prototype.toString.call(k) ||
                    Object.prototype.hasOwnProperty.call(k, "callee"))) {
                    a:{
                        if (b.length && sa(b[0])) {
                            var l = he[b[0]];
                            if (l) {
                                b = l(b);
                                break a
                            }
                        }
                        b = void 0
                    }
                    if (!b) {
                        me = !1;
                        continue
                    }
                }
                var m;
                var n = void 0, p = b, q = p._clear;
                for (n in p) p.hasOwnProperty(n) && "_clear" !== n && (q && Yc(n, void 0), Yc(n, p[n]));
                var r = p.event;
                if (r) {
                    var u = p["gtm.uniqueEventId"];
                    u || (u = Oc(), p["gtm.uniqueEventId"] = u, Yc("gtm.uniqueEventId", u));
                    Jc = r;
                    var t;
                    var A, D, C = p, M = C.event, F = C["gtm.uniqueEventId"], G = Ic.zones;
                    D = G ? G.checkState(Hc.o, F) : gd;
                    if (D.active) {
                        var J = ne(C);
                        c:{
                            var I = D.isWhitelisted;
                            if ("gtm.js" == M) {
                                if (Ud) {
                                    A = !1;
                                    break c
                                }
                                Ud = !0
                            }
                            var K = F, R = M;
                            if (wd && !Ed[K] && Cd !== K) {
                                Jd();
                                Cd = K;
                                Bd = "";
                                var ja = Dd, W = K, aa, L = R;
                                aa = 0 === L.indexOf("gtm.") ? encodeURIComponent(L) : "*";
                                ja[W] = "&e=" + aa + "&eid=" + K;
                                Fd || (Fd = z.setTimeout(Jd, 500))
                            }
                            var S = cd(I), O = {id: F, name: M, callback: J || qa, Z: S, Ea: []};
                            O.Ea = Ec(S);
                            for (var za, Za = O, Sb = Sd(Za.callback), vc = [], xb = [], ib = 0; ib < oc.length; ib++) if (Za.Ea[ib]) {
                                var Fg = oc[ib];
                                var Tb = Sb.add();
                                try {
                                    var ze = Ld(ib, vc, Tb, Tb, Tb, Za);
                                    ze ? xb.push(ze) : (Td(ib, Za), Tb())
                                } catch (ye) {
                                    Tb()
                                }
                            }
                            Sb.$c();
                            for (var od = 0; od < xb.length; od++) xb[od]();
                            za = 0 < xb.length;
                            if ("gtm.js" === M || "gtm.sync" === M) d:{
                            }
                            if (za) {
                                for (var Gg = {
                                    __cl: !0,
                                    __evl: !0,
                                    __fsl: !0,
                                    __hl: !0,
                                    __jel: !0,
                                    __lcl: !0,
                                    __sdl: !0,
                                    __tl: !0,
                                    __ytl: !0
                                }, wc = 0; wc < O.Ea.length; wc++) if (O.Ea[wc]) {
                                    var Be = oc[wc];
                                    if (Be && !Gg[Be[P.P]]) {
                                        A = !0;
                                        break c
                                    }
                                }
                                A = !1
                            } else A = za
                        }
                        t = A ? !0 : !1
                    } else t = !1;
                    Jc = null;
                    m = t
                } else m = !1;
                a = m || a
            }
            me = !1
        }
        return !a
    }, pe = function () {
        var a = oe();
        try {
            var b = z["dataLayer"].hide;
            if (b && void 0 !== b[Hc.o] && b.end) {
                b[Hc.o] = !1;
                var c = !0, d;
                for (d in b) if (b.hasOwnProperty(d) && !0 ===
                    b[d]) {
                    c = !1;
                    break
                }
                c && (b.end(), b.end = null)
            }
        } catch (e) {
        }
        return a
    }, qe = function () {
        var a = cb("dataLayer", []), b = cb("google_tag_manager", {});
        b = b["dataLayer"] = b["dataLayer"] || {};
        jd.push(function () {
            b.gtmDom || (b.gtmDom = !0, a.push({event: "gtm.dom"}))
        });
        je.push(function () {
            b.gtmLoad || (b.gtmLoad = !0, a.push({event: "gtm.load"}))
        });
        var c = a.push;
        a.push = function () {
            var b = [].slice.call(arguments, 0);
            c.apply(a, b);
            for (le.push.apply(le, b); 300 < this.length;) this.shift();
            return oe()
        };
        le.push.apply(le, a.slice(0));
        H(pe)
    };
    var re = {};
    re.Ja = new String("undefined");
    re.cb = {};
    var se = function (a) {
        this.resolve = function (b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === re.Ja ? b : a[d]);
            return c.join("")
        }
    };
    se.prototype.toString = function () {
        return this.resolve("undefined")
    };
    se.prototype.valueOf = se.prototype.toString;
    re.td = function (a) {
        return new se(a)
    };
    var te = {};
    re.ze = function (a, b) {
        var c = Oc();
        te[c] = [a, b];
        return c
    };
    re.Yb = function (a) {
        var b = a ? 0 : 1;
        return function (a) {
            var c = te[a];
            if (c && "function" === typeof c[b]) c[b]();
            te[a] = void 0
        }
    };
    re.Zd = function (a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) b = b || 8 === a[d], c = c || 16 === a[d];
        return b && c
    };
    re.qe = function (a) {
        if (a === re.Ja) return a;
        var b = Oc();
        re.cb[b] = a;
        return 'google_tag_manager["' + Hc.o + '"].macro(' + b + ")"
    };
    re.Qc = se;
    var ue = new Da, ve = function (a, b) {
        function c(a) {
            var b = N(a), c = rb(b, "protocol"), d = rb(b, "host", !0), e = rb(b, "port"),
                f = rb(b, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === c || "http" == c && "80" == e || "https" == c && "443" == e) c = "web", e = "default";
            return [c, d, e, f]
        }

        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
        return !0
    };

    function we(a) {
        var b = a.arg0, c = a.arg1;
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var d;
                a:{
                    if (b) {
                        var e = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];
                        try {
                            for (var f = 0; f < e.length; f++) if (b[e[f]]) {
                                d = b[e[f]](c);
                                break a
                            }
                        } catch (u) {
                        }
                    }
                    d = !1
                }
                return d;
            case "_ew":
                var h, k;
                h = String(b);
                k = String(c);
                var l = h.length - k.length;
                return 0 <= l && h.indexOf(k, l) == l;
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var m;
                m = String(b).split(",");
                return 0 <= va(m, String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                var n;
                var p = a.ignore_case ? "i" : void 0;
                try {
                    var q = String(c) + p, r = ue.get(q);
                    r || (r = new RegExp(c, p), ue.set(q, r));
                    n = r.test(b)
                } catch (u) {
                    n = !1
                }
                return n;
            case "_sw":
                return 0 == String(b).indexOf(String(c));
            case "_um":
                return ve(b, c)
        }
        return !1
    };var xe = function () {
        return !1
    };

    function Ce(a, b, c, d) {
        return (d || "https:" == z.location.protocol ? a : b) + c
    }

    function De(a, b) {
        for (var c = b || (a instanceof v ? new v : new Ka), d = a.U(), e = 0; e < d.length(); e++) {
            var f = d.get(e);
            if (a.has(f)) {
                var h = a.get(f);
                h instanceof v ? (c.get(f) instanceof v || c.set(f, new v), De(h, c.get(f))) : h instanceof Ka ? (c.get(f) instanceof Ka || c.set(f, new Ka), De(h, c.get(f))) : c.set(f, h)
            }
        }
        return c
    }

    function Ee() {
        return Hc.o
    }

    function Fe() {
        return (new Date).getTime()
    }

    function Ge(a, b) {
        return Ra(Sc(a, b || 2))
    }

    function He() {
        return Jc
    }

    function Ie(a) {
        return mb('<a href="' + a + '"></a>')[0].href
    }

    function Je(a) {
        return ya(Qa(a))
    }

    function Ke(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    }

    function Le(a, b) {
        return xa(a, b)
    }

    function Me(a, b, c) {
        if (!(a instanceof v)) return null;
        for (var d = new Ka, e = !1, f = 0; f < a.length(); f++) {
            var h = a.get(f);
            h instanceof Ka && h.has(b) && h.has(c) && (d.set(h.get(b), h.get(c)), e = !0)
        }
        return e ? d : null
    }

    var Ne = function () {
        var a = new ab, b = tb();
        xe() && (b.loadJavaScript = qa, b.loadIframe = qa);
        a.addAll(b);
        a.addAll({
            buildSafeUrl: Ce,
            copy: De,
            copyFromDataLayer: Ge,
            decodeHtmlUrl: Ie,
            generateRandom: Le,
            generateUniqueNumber: Oc,
            getContainerId: Ee,
            getCurrentTime: Fe,
            getEventName: He,
            makeInteger: Je,
            makeString: Ke,
            tableToMap: Me
        });
        return function (b) {
            return a.get(b)
        }
    }, Pe = function () {
        var a = {networkAccess: Oe};
        return function (b, c, d) {
            return a[b] ? a[b](c, d) : qa
        }
    };

    function Oe(a, b) {
        var c = a.url_list || [];
        return function (a, e) {
            if (c.length) {
                for (var d = 0; d < c.length; d++) if (c[d] === e) return;
                throw b({permissionId: a, debugString: "\nURL = " + e});
            }
        }
    };var Qe, Se = function () {
        var a = data.runtime || [], b = data.permissions || {};
        Qe = new vb;
        kc = function (a, b) {
            var c = new Ka, d;
            for (d in b) b.hasOwnProperty(d) && c.set(d, Ra(b[d]));
            var e = Qe.S([a, c]);
            e instanceof g && "return" === e.B && (e = e.getData());
            return Qa(e)
        };
        rc = we;
        ub(Qe, Ne());
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if (!ua(d) || 3 > d.length) {
                if (0 == d.length) continue;
                return
            }
            Qe.S(d)
        }
        var e = function (a) {
            throw Re({permissionId: a, debugString: "The requested permission does not exist."});
        };
        Qe.qa(e);
        var f = Pe(), h;
        for (h in b) if (b.hasOwnProperty(h)) {
            var k =
                b[h], l = !1, m;
            for (m in k) if (k.hasOwnProperty(m)) {
                l = !0;
                var n = f(m, k[m], Re);
                Qe.Oa(h, m, n)
            }
            l || Qe.Oa(h, "default", e)
        }
    };

    function Re(a) {
        return new ed(a)
    };var Te = function (a, b) {
        var c = function () {
        };
        c.prototype = a.prototype;
        var d = new c;
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d
    };
    var Ue = function (a) {
        return encodeURIComponent(a)
    }, Ve = function (a, b) {
        if (!a) return !1;
        var c = rb(N(a), "host");
        if (!c) return !1;
        for (var d = 0; b && d < b.length; d++) {
            var e = b[d] && b[d].toLowerCase();
            if (e) {
                var f = c.length - e.length;
                0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                if (0 <= f && c.indexOf(e, f) == f) return !0
            }
        }
        return !1
    };
    var Q = function (a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
        return e ? d : null
    }, We = function (a, b) {
        Pa(a, b)
    }, Xe = function (a) {
        return ya(a)
    }, Ye = function (a, b) {
        return va(a, b)
    };
    var Ze = function (a) {
        var b = {
            "gtm.element": a,
            "gtm.elementClasses": a.className,
            "gtm.elementId": a["for"] || jb(a, "id") || "",
            "gtm.elementTarget": a.formTarget || a.target || ""
        };
        b["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || a.href || a.src || a.code || a.codebase || "";
        return b
    }, $e = function (a) {
        Ic.hasOwnProperty("autoEventsSettings") || (Ic.autoEventsSettings = {});
        var b = Ic.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a]
    }, af = function (a, b, c, d) {
        var e = $e(a), f = Ea(e, b, d);
        e[b] =
            c(f)
    }, bf = function (a, b, c) {
        var d = $e(a);
        return Ea(d, b, c)
    };
    var cf = !1;
    if (B.querySelectorAll) try {
        var df = B.querySelectorAll(":root");
        df && 1 == df.length && df[0] == B.documentElement && (cf = !0)
    } catch (a) {
    }
    var ef = cf;
    var ff = function (a, b, c) {
        for (var d = [], e = String(b || document.cookie).split(";"), f = 0; f < e.length; f++) {
            var h = e[f].split("="), k = h[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                var l = h.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                l && !0 === c && (l = decodeURIComponent(l));
                d.push(l)
            }
        }
        return d
    }, jf = function (a, b, c, d) {
        var e = gf(a, d);
        if (1 === e.length) return e[0].id;
        if (0 !== e.length) {
            e = hf(e, function (a) {
                return a.Bd
            }, b);
            if (1 === e.length) return e[0].id;
            e = hf(e, function (a) {
                return a.oe
            }, c);
            return e[0] ? e[0].id : void 0
        }
    }, mf = function (a, b,
                      c, d, e, f) {
        c = void 0 === c ? "/" : c;
        var h = d = void 0 === d ? "auto" : d, k = c;
        if (kf.test(document.location.hostname) || "/" === k && lf.test(h)) return !1;
        f && (b = encodeURIComponent(b));
        var l = b;
        l && 1200 < l.length && (l = l.substring(0, 1200));
        b = l;
        var m = a + "=" + b + "; path=" + c + "; ";
        void 0 !== e && (m += "expires=" + e.toGMTString() + "; ");
        if ("auto" === d) {
            var n = !1, p;
            a:{
                var q = [], r = document.location.hostname.split(".");
                if (4 === r.length) {
                    var u = r[r.length - 1];
                    if (parseInt(u, 10).toString() === u) {
                        p = ["none"];
                        break a
                    }
                }
                for (var t = r.length - 2; 0 <= t; t--) q.push(r.slice(t).join("."));
                q.push("none");
                p = q
            }
            for (var A = p, D = 0; D < A.length && !n; D++) n = mf(a, b, c, A[D], e);
            return n
        }
        d && "none" !== d && (m += "domain=" + d + ";");
        var C = document.cookie;
        document.cookie = m;
        return C != document.cookie || 0 <= ff(a).indexOf(b)
    };

    function hf(a, b, c) {
        for (var d = [], e = [], f, h = 0; h < a.length; h++) {
            var k = a[h], l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? (e = [k], f = l) : l === f && e.push(k)
        }
        return 0 < d.length ? d : e
    }

    function gf(a, b) {
        for (var c = [], d = ff(a), e = 0; e < d.length; e++) {
            var f = d[e].split("."), h = f.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = f.shift();
                k && (k = k.split("-"), c.push({id: f.join("."), Bd: 1 * k[0] || 1, oe: 1 * k[1] || 1}))
            }
        }
        return c
    }

    var lf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, kf = /(^|\.)doubleclick\.net$/i;
    var nf = window, of = document;
    var pf = function () {
        for (var a = nf.navigator.userAgent + (of.cookie || "") + (of.referrer || ""), b = a.length, c = nf.history.length; 0 < c;) a += c-- ^ b++;
        var d = 1, e, f, h;
        if (a) for (d = 0, f = a.length - 1; 0 <= f; f--) h = a.charCodeAt(f), d = (d << 6 & 268435455) + h + (h << 14), e = d & 266338304, d = 0 != e ? d ^ e >> 21 : d;
        return [Math.round(2147483647 * Math.random()) ^ d & 2147483647, Math.round(Date.now() / 1E3)].join(".")
    }, sf = function (a, b, c, d) {
        var e = qf(b);
        return jf(a, e, rf(c), d)
    };

    function qf(a) {
        if (!a) return 1;
        a = 0 === a.indexOf(".") ? a.substr(1) : a;
        return a.split(".").length
    }

    function rf(a) {
        if (!a || "/" === a) return 1;
        "/" !== a[0] && (a = "/" + a);
        "/" !== a[a.length - 1] && (a += "/");
        return a.split("/").length - 1
    }

    function tf(a, b) {
        var c = "" + qf(a), d = rf(b);
        1 < d && (c += "-" + d);
        return c
    };var uf = ["1"], vf = {}, zf = function (a, b, c) {
        b = b || "auto";
        c = c || "/";
        var d = wf(a);
        vf[d] || xf(d, b, c) || (yf(d, pf(), b, c), xf(d, b, c))
    };

    function yf(a, b, c, d) {
        var e;
        e = ["1", tf(c, d), b].join(".");
        mf(a, e, d, c, new Date(Ca().getTime() + 7776E6))
    }

    function xf(a, b, c) {
        var d = sf(a, b, c, uf);
        d && (vf[a] = d);
        return d
    }

    function wf(a) {
        return (a || "_gcl") + "_au"
    };

    function Af() {
        for (var a = Bf, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Cf() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }

    var Bf, Df, Ef = function (a) {
        Bf = Bf || Cf();
        Df = Df || Af();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length, e = c + 2 < a.length, f = a.charCodeAt(c), h = d ? a.charCodeAt(c + 1) : 0,
                k = e ? a.charCodeAt(c + 2) : 0, l = f >> 2, m = (f & 3) << 4 | h >> 4, n = (h & 15) << 2 | k >> 6,
                p = k & 63;
            e || (p = 64, d || (n = 64));
            b.push(Bf[l], Bf[m], Bf[n], Bf[p])
        }
        return b.join("")
    }, Ff = function (a) {
        function b(b) {
            for (; d < a.length;) {
                var c = a.charAt(d++), e = Df[c];
                if (null != e) return e;
                if (!/^[\s\xa0]*$/.test(c)) throw Error("Unknown base64 encoding at char: " + c);
            }
            return b
        }

        Bf = Bf || Cf();
        Df = Df ||
            Af();
        for (var c = "", d = 0; ;) {
            var e = b(-1), f = b(0), h = b(64), k = b(64);
            if (64 === k && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != k && (c += String.fromCharCode(h << 6 & 192 | k)))
        }
    };
    var Gf;

    function Hf(a, b) {
        if (!a || b === B.location.hostname) return !1;
        for (var c = 0; c < a.length; c++) if (a[c] instanceof RegExp) {
            if (a[c].test(b)) return !0
        } else if (0 <= b.indexOf(a[c])) return !0;
        return !1
    }

    var If = function () {
        var a = cb("google_tag_data", {}), b = a.gl;
        b && b.decorators || (b = {decorators: []}, a.gl = b);
        return b
    };
    var Jf = /(.*?)\*(.*?)\*(.*)/, Kf = /([^?#]+)(\?[^#]*)?(#.*)?/, Lf = /(.*?)(^|&)_gl=([^&]*)&?(.*)/,
        Nf = function (a) {
            var b = [], c;
            for (c in a) if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Ef(String(d))))
            }
            var e = b.join("*");
            return ["1", Mf(e), e].join("*")
        }, Mf = function (a, b) {
            var c = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 :
                b), a].join("*"), d;
            if (!(d = Gf)) {
                for (var e = Array(256), f = 0; 256 > f; f++) {
                    for (var h = f, k = 0; 8 > k; k++) h = h & 1 ? h >>> 1 ^ 3988292384 : h >>> 1;
                    e[f] = h
                }
                d = e
            }
            Gf = d;
            for (var l = 4294967295, m = 0; m < c.length; m++) l = l >>> 8 ^ Gf[(l ^ c.charCodeAt(m)) & 255];
            return ((l ^ -1) >>> 0).toString(36)
        }, Pf = function () {
            return function (a) {
                var b = N(z.location.href), c = b.search.replace("?", ""), d = qb(c, "_gl", !0) || "";
                a.query = Of(d) || {};
                var e = rb(b, "fragment").match(Lf);
                a.fragment = Of(e && e[3] || "") || {}
            }
        }, Of = function (a) {
            var b;
            b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    var c = Jf.exec(a);
                    if (c &&
                        "1" === c[1]) {
                        var d = c[3], e;
                        a:{
                            for (var f = c[2], h = 0; h < b; ++h) if (f === Mf(d, h)) {
                                e = !0;
                                break a
                            }
                            e = !1
                        }
                        if (e) {
                            for (var k = {}, l = d ? d.split("*") : [], m = 0; m < l.length; m += 2) k[l[m]] = Ff(l[m + 1]);
                            return k
                        }
                    }
                }
            } catch (n) {
            }
        };

    function Qf(a, b, c) {
        function d(a) {
            var b = a, c = Lf.exec(b), d = b;
            if (c) {
                var e = c[2], f = c[4];
                d = c[1];
                f && (d = d + e + f)
            }
            a = d;
            var h = a.charAt(a.length - 1);
            a && "&" !== h && (a += "&");
            return a + l
        }

        c = void 0 === c ? !1 : c;
        var e = Kf.exec(b);
        if (!e) return "";
        var f = e[1], h = e[2] || "", k = e[3] || "", l = "_gl=" + a;
        c ? k = "#" + d(k.substring(1)) : h = "?" + d(h.substring(1));
        return "" + f + h + k
    }

    function Rf(a, b, c) {
        for (var d = {}, e = {}, f = If().decorators, h = 0; h < f.length; ++h) {
            var k = f[h];
            (!c || k.forms) && Hf(k.domains, b) && (k.fragment ? Ga(e, k.callback()) : Ga(d, k.callback()))
        }
        if (Ha(d)) {
            var l = Nf(d);
            if (c) {
                if (a && a.action) {
                    var m = (a.method || "").toLowerCase();
                    if ("get" === m) {
                        for (var n = a.childNodes || [], p = !1, q = 0; q < n.length; q++) {
                            var r = n[q];
                            if ("_gl" === r.name) {
                                r.setAttribute("value", l);
                                p = !0;
                                break
                            }
                        }
                        if (!p) {
                            var u = B.createElement("input");
                            u.setAttribute("type", "hidden");
                            u.setAttribute("name", "_gl");
                            u.setAttribute("value",
                                l);
                            a.appendChild(u)
                        }
                    } else if ("post" === m) {
                        var t = Qf(l, a.action);
                        ob.test(t) && (a.action = t)
                    }
                }
            } else Sf(l, a, !1)
        }
        if (!c && Ha(e)) {
            var A = Nf(e);
            Sf(A, a, !0)
        }
    }

    function Sf(a, b, c) {
        if (b.href) {
            var d = Qf(a, b.href, void 0 === c ? !1 : c);
            ob.test(d) && (b.href = d)
        }
    }

    var Tf = function (a) {
        try {
            var b;
            a:{
                for (var c = a.target || a.srcElement || {}, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Rf(e, e.hostname, !1)
            }
        } catch (h) {
        }
    }, Uf = function (a) {
        try {
            var b = a.target || a.srcElement || {};
            if (b.action) {
                var c = rb(N(b.action), "host");
                Rf(b, c, !0)
            }
        } catch (d) {
        }
    }, Vf = function (a, b, c, d) {
        var e = If();
        e.init || (gb(B, "mousedown", Tf), gb(B, "keyup", Tf), gb(B, "submit", Uf), e.init = !0);
        var f = {
            callback: a,
            domains: b, fragment: "fragment" === c, forms: !!d
        };
        If().decorators.push(f)
    };
    var Wf = /^\w+$/, Xf = /^[\w-]+$/, Yf = /^~?[\w-]+$/, Zf = {aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha"},
        ag = function (a) {
            var b = ff(a, B.cookie), c = [];
            if (!b || 0 == b.length) return c;
            for (var d = 0; d < b.length; d++) {
                var e = b[d].split(".");
                3 == e.length && "GCL" == e[0] && e[1] && c.push(e[2])
            }
            return $f(c)
        };

    function bg(a) {
        return a && "string" == typeof a && a.match(Wf) ? a : "_gcl"
    }

    var cg = function (a) {
        if (a) {
            if ("string" == typeof a) {
                var b = bg(a);
                return {dc: b, aw: b, gf: b, ha: b}
            }
            if (a && "object" == typeof a) return {dc: bg(a.dc), aw: bg(a.aw), gf: bg(a.gf), ha: bg(a.ha)}
        }
        return {dc: "_gcl", aw: "_gcl", gf: "_gcl", ha: "_gcl"}
    }, dg = function () {
        var a = N(z.location.href), b = rb(a, "query", !1, void 0, "gclid"), c = rb(a, "query", !1, void 0, "gclsrc");
        if (!b || !c) {
            var d = a.hash.replace("#", "");
            b = b || qb(d, "gclid");
            c = c || qb(d, "gclsrc")
        }
        return void 0 !== b && b.match(Xf) ? {O: b, D: c} : null
    }, eg = function (a) {
        var b = a.split(".");
        return 3 !== b.length ||
        "GCL" !== b[0] ? 0 : 1E3 * (Number(b[1]) || 0)
    }, fg = function (a, b, c, d, e) {
        if (ua(b)) {
            var f = cg(e);
            Vf(function () {
                for (var b = {}, c = 0; c < a.length; ++c) {
                    var d = a[c], e = f[d], n = Zf[d];
                    if (e && n) {
                        var p = e + n, q = ff(p, B.cookie);
                        q.length && (b[p] = q.sort()[q.length - 1])
                    }
                }
                return b
            }, b, c, d)
        }
    }, $f = function (a) {
        return a.filter(function (a) {
            return Yf.test(a)
        })
    };
    var gg = /^\d+\.fls\.doubleclick\.net$/;

    function hg(a) {
        var b = N(z.location.href), c = rb(b, "host", !1);
        if (c && c.match(gg)) {
            var d = rb(b, "path").split(a + "=");
            if (1 < d.length) return d[1].split(";")[0].split("?")[0]
        }
    }

    var ig = function (a) {
        var b = hg("gclaw");
        if (b) return b.split(".");
        var c = cg(a);
        if ("_gcl" == c.aw) {
            var d = dg();
            if (d && (null == d.D || "aw.ds" == d.D)) return [d.O]
        }
        return ag(c.aw + "_aw")
    }, jg = function (a) {
        var b = hg("gcldc");
        if (b) return b.split(".");
        var c = cg(a);
        if ("_gcl" == c.dc) {
            var d = dg();
            if (d && ("ds" == d.D || "aw.ds" == d.D)) return [d.O]
        }
        return ag(c.dc + "_dc")
    }, kg = function (a) {
        var b = cg(a);
        if ("_gcl" == b.ha) {
            var c = dg();
            if (c && "ha" == c.D) return [c.O]
        }
        return ag(b.ha + "_ha")
    }, lg = function () {
        var a = hg("gac");
        if (a) return decodeURIComponent(a);
        for (var b = [], c = B.cookie.split(";"), d = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({Cb: f[1], value: f[2]})
        }
        var h = {};
        if (b && b.length) for (var k = 0; k < b.length; k++) {
            var l = b[k].value.split(".");
            "1" == l[0] && 3 == l.length && l[1] && (h[b[k].Cb] || (h[b[k].Cb] = []), h[b[k].Cb].push({
                timestamp: l[1],
                O: l[2]
            }))
        }
        var m = [], n;
        for (n in h) if (h.hasOwnProperty(n)) {
            for (var p = [], q = h[n], r = 0; r < q.length; r++) p.push(q[r].O);
            p = $f(p);
            p.length && m.push(n + ":" + p.join(","))
        }
        return m.join(";")
    }, mg = function (a,
                      b, c) {
        zf(a, b, c);
        var d = vf[wf(a)], e = dg() || {}, f = e.O, h = e.D;
        if (d && f && ("aw.ds" === h || "ds" === h)) {
            var k = Ic.joined_au = Ic.joined_au || {}, l = a || "_gcl";
            if (!k[l]) {
                nb("https://adservice.google.com/ddm/regclk" + ("?gclid=" + f + "&auiddc=" + d));
                var m = wf(a);
                vf[m] && yf(m, vf[m], b || "auto", c || "/");
                k[l] = !0
            }
        }
    };
    var ng;
    a:{
        ng = "g";
        break a;
        ng = "G"
    }
    var og = {"": "n", UA: "u", AW: "a", DC: "d", G: "e", GTM: ng}, pg = function (a) {
        var b = Hc.o.split("-"), c = b[0].toUpperCase();
        return (og[c] || "i") + "9o" + (a && "GTM" === c ? b[1] : "")
    };
    var qg = function (a) {
        return !(void 0 === a || null === a || 0 === (a + "").length)
    }, rg = function (a, b) {
        var c;
        if (2 === b.J) return a("ord", xa(1E11, 1E13)), !0;
        if (3 === b.J) return a("ord", "1"), a("num", xa(1E11, 1E13)), !0;
        if (4 === b.J) return qg(b.sessionId) && a("ord", b.sessionId), !0;
        if (5 === b.J) c = "1"; else if (6 === b.J) c = b.Gc; else return !1;
        qg(c) && a("qty", c);
        qg(b.hb) && a("cost", b.hb);
        qg(b.Db) && a("ord", b.Db);
        return !0
    }, sg = encodeURIComponent, tg = function (a, b) {
        function c(a, b, c) {
            f.hasOwnProperty(a) || (b += "", e += ";" + a + "=" + (c ? b : sg(b)))
        }

        var d = a.kb,
            e = a.protocol;
        e += a.Ya ? "//" + d + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
        e += ";src=" + sg(d) + (";type=" + sg(a.lb)) + (";cat=" + sg(a.wa));
        var f = a.vd || {}, h;
        for (h in f) f.hasOwnProperty(h) && (e += ";" + sg(h) + "=" + sg(f[h] + ""));
        if (rg(c, a)) {
            qg(a.Fb) && c("u", a.Fb);
            qg(a.tran) && c("tran", a.tran);
            c("gtm", pg());
            !1 === a.Yc && c("npa", "1");
            if (a.gb) {
                var k = jg(a.ja);
                k && k.length && c("gcldc", k.join("."));
                var l = ig(a.ja);
                l && l.length && c("gclaw", l.join("."));
                var m = lg();
                m && c("gac", m);
                zf(a.ja);
                var n = vf[wf(a.ja)];
                n && c("auiddc", n);
            }
            qg(a.ub) && c("prd", a.ub, !0);
            for (var p in a.Ga) a.Ga.hasOwnProperty(p) && c(p, a.Ga[p]);
            e += b || "";
            qg(a.Ua) && c("~oref", a.Ua);
            a.Ya ? fb(e + "?", a.V) : E(e + "?", a.V, a.ma)
        } else H(a.ma)
    };
    var wg = !!z.MutationObserver, xg = void 0, yg = function (a) {
        if (!xg) {
            var b = function () {
                var a = B.body;
                if (a) if (wg) (new MutationObserver(function () {
                    for (var a = 0; a < xg.length; a++) H(xg[a])
                })).observe(a, {childList: !0, subtree: !0}); else {
                    var b = !1;
                    gb(a, "DOMNodeInserted", function () {
                        b || (b = !0, H(function () {
                            b = !1;
                            for (var a = 0; a < xg.length; a++) H(xg[a])
                        }))
                    })
                }
            };
            xg = [];
            B.body ? b() : H(b)
        }
        xg.push(a)
    };
    var Kg = "www.googletagmanager.com/gtm.js";
    Kg = "www.googletagmanager.com/gtag/js";
    var Lg = Kg, Mg = function (a, b, c, d) {
        gb(a, b, c, d)
    }, Ng = function (a, b) {
        return z.setTimeout(a, b)
    }, T = function (a, b, c) {
        if (xe()) {
            b && H(b)
        } else return eb(a, b, c)
    }, Og = function () {
        return z.location.href
    }, Pg = function (a) {
        return rb(N(a), "fragment")
    }, Qg = function (a, b, c, d, e) {
        return rb(a, b, c, d, e)
    }, U = function (a, b) {
        return Sc(a, b || 2)
    }, Rg = function (a, b, c) {
        b && (a.eventCallback = b, c && (a.eventTimeout = c));
        return z["dataLayer"].push(a)
    }, Sg = function (a,
                      b) {
        z[a] = b
    }, V = function (a, b, c) {
        b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
        return z[a]
    }, Tg = function (a, b, c) {
        return ff(a, b, void 0 === c ? !0 : !!c)
    }, Ug = function (a, b, c) {
        var d = {prefix: a, path: b, domain: c};
        d = d || {};
        var e = cg(d.prefix), f = d.domain || "auto", h = d.path || "/", k = dg();
        if (null != k) {
            var l = (new Date).getTime(), m = new Date(l + 7776E6), n = Math.round(l / 1E3),
                p = ["GCL", n, k.O].join("."), q;
            q = !0 === d.uf ? ["GCL", n, "~" + k.O].join(".") : p;
            k.D && "aw.ds" != k.D || mf(e.aw + "_aw", q, h, f, m, !0);
            "aw.ds" != k.D && "ds" != k.D || mf(e.dc + "_dc", p, h, f, m, !0);
            "gf" ==
            k.D && mf(e.gf + "_gf", p, h, f, m, !0);
            "ha" == k.D && mf(e.ha + "_ha", p, h, f, m, !0)
        }
    }, Vg = function (a, b, c, d) {
        var e = Pf(), f = If();
        f.data || (f.data = {query: {}, fragment: {}}, e(f.data));
        var h = {}, k = f.data;
        k && (Ga(h, k.query), Ga(h, k.fragment));
        for (var l = cg(b), m = 0; m < a.length; ++m) {
            var n = a[m], p = Zf[n];
            if (void 0 !== p) {
                var q = l[n] + p, r = h[q];
                if (r) {
                    var u = Math.min(eg(r), (new Date).getTime()), t;
                    b:{
                        for (var A = u, D = ff(q, B.cookie), C = 0; C < D.length; ++C) if (eg(D[C]) > A) {
                            t = !0;
                            break b
                        }
                        t = !1
                    }
                    t || mf(q, r, c, d, new Date(u +
                        7776E6), !0)
                }
            }
        }
    }, Wg = function (a, b, c, d, e) {
        fg(a, b, c, d, e);
    }, Xg = function (a, b) {
        var c;
        a:{
            var d;
            d = 100;
            for (var e = {}, f = 0; f < b.length; f++) e[b[f]] = !0;
            for (var h = a, k = 0; h && k <= d; k++) {
                if (e[String(h.tagName).toLowerCase()]) {
                    c = h;
                    break a
                }
                h = h.parentElement
            }
            c = null
        }
        return c
    }, X = function (a, b, c, d) {
        var e = !d && "http:" == z.location.protocol;
        e && (e = 2 !== Yg());
        return (e ? b : a) + c
    }, Zg = function (a, b) {
        if (xe()) {
            b && H(b)
        } else fb(a, b)
    };
    var $g = function (a) {
        var b = 0;
        return b
    }, ah = function (a) {
    }, bh = function (a) {
        var b = !1;
        return b
    }, ch = function (a, b) {
        var c;
        a:{
            if (a &&
                ua(a)) for (var d = 0; d < a.length; d++) if (a[d] && b(a[d])) {
                c = a[d];
                break a
            }
            c = void 0
        }
        return c
    }, dh = function (a, b, c, d) {
        af(a, b, c, d)
    }, eh = function (a, b, c) {
        return bf(a, b, c)
    }, fh = function (a) {
        return !!bf(a, "init", !1)
    }, gh = function (a) {
        $e(a).init = !0
    };
    var Yg = function () {
        var a = Lg;
        if (Nc) {
            if (0 === Nc.toLowerCase().indexOf("https://")) return 2;
            if (0 === Nc.toLowerCase().indexOf("http://")) return 3
        }
        a = a.toLowerCase();
        for (var b = "https://" + a, c = "http://" + a, d = 1, e = B.getElementsByTagName("script"), f = 0; f < e.length && 100 > f; f++) {
            var h = e[f].src;
            if (h) {
                h = h.toLowerCase();
                if (0 === h.indexOf(c)) return 3;
                1 === d && 0 === h.indexOf(b) && (d = 2)
            }
        }
        return d
    };
    var ih = function (a, b) {
        return Uc(a, b, void 0)
    };
    var jh = function (a, b, c) {
        var d = (void 0 === c ? 0 : c) ? "www.googletagmanager.com/gtag/js" : Lg;
        d += "?id=" + encodeURIComponent(a) + "&l=dataLayer";
        if (b) for (var e in b) b[e] && b.hasOwnProperty(e) && (d += "&" + e + "=" + encodeURIComponent(b[e]));
        T(X("https://", "http://", d))
    };
    var lh = function (a, b, c) {
        a instanceof re.Qc && (a = a.resolve(re.ze(b, c)), b = qa);
        return {mb: a, V: b}
    };
    var yh = function (a, b, c) {
        this.n = a;
        this.t = b;
        this.p = c
    }, zh = function () {
        this.c = 1;
        this.e = [];
        this.p = null
    };

    function Ah(a) {
        var b = Ic, c = b.gss = b.gss || {};
        return c[a] = c[a] || new zh
    }

    var Bh = function (a, b) {
        Ah(a).p = b
    }, Ch = function (a, b, c) {
        var d = Math.floor(Ca().getTime() / 1E3);
        Ah(a).e.push(new yh(b, d, c))
    }, Dh = function (a) {
    };
    var Mh = window, Nh = document, Oh = function (a) {
        var b = Mh._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a && !0 === Mh["ga-disable-" + a]) return !0;
        try {
            var c = Mh.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
        } catch (f) {
        }
        for (var d = ff("AMP_TOKEN", Nh.cookie, !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
        return !1
    };
    var Th = function (a) {
        if (1 === Ah(a).c) {
            Ah(a).c = 2;
            var b = encodeURIComponent(a);
            eb(("http:" != z.location.protocol ? "https:" : "http:") + ("//www.googletagmanager.com/gtag/js?id=" + b + "&l=dataLayer&cx=c"))
        }
    }, Uh = function (a, b) {
    };
    var Z = {a: {}};
    Z.a.gtagha = ["google"], function () {
        function a(a) {
            function b(a, b) {
                void 0 !== b && c.push(a + "=" + b)
            }

            if (void 0 === a) return "";
            var c = [];
            b("hct_base_price", a.jc);
            b("hct_booking_xref", a.kc);
            b("hct_checkin_date", a.Od);
            b("hct_checkout_date", a.Pd);
            b("hct_currency_code", a.Qd);
            b("hct_partner_hotel_id", a.mc);
            b("hct_total_price", a.nc);
            return c.join(";")
        }

        function b(b, c, d, k) {
            var e = encodeURIComponent(b), f = encodeURIComponent(a(c)),
                h = "https://www.googletraveladservices.com/travel/clk/pagead/conversion/" + e + "/?data=" + f;
            d && (h +=
                kg(k).map(function (a) {
                    return "&gclha=" + encodeURIComponent(a)
                }).join(""));
            return h
        }

        function c(a, b, c, d) {
            var e = {};
            sa(a) ? e.kc = a : "number" === typeof a && (e.kc = String(a));
            sa(c) && (e.Qd = c);
            sa(b) ? e.nc = e.jc = b : "number" === typeof b && (e.nc = e.jc = String(b));
            if (!ua(d) || 0 == d.length) return e;
            var f = d[0];
            if (!Oa(f)) return e;
            sa(f.id) ? e.mc = f.id : "number" === typeof f.id && (e.mc = String(f.id));
            sa(f.start_date) && (e.Od = f.start_date);
            sa(f.end_date) && (e.Pd = f.end_date);
            return e
        }

        function d(a) {
            var b = Jc, e = a.vtp_gtmOnSuccess, k = a.vtp_gtmOnFailure,
                l = a.vtp_conversionId, m = l.containerId, n = function (a) {
                    return Uc(a, m, l.id)
                }, p = !1 !== n("conversion_linker"), q = n("conversion_cookie_prefix");
            if ("gtag.config" === b) p && Ug(q), H(e); else if ("purchase" === b) {
                var r = c(n("transaction_id"), n("value"), n("currency"), n("items"));
                d.Me(l.Y[0], r, p, q, e, k)
            } else H(k)
        }

        d.Me = function (a, c, d, k, l, m) {
            if (/^\d+$/.test(a)) {
                var e = b(a, c, d, k);
                E(e, l, m)
            } else H(m)
        };
        Z.__gtagha = d;
        Z.__gtagha.b = "gtagha";
        Z.__gtagha.g = !0
    }();
    Z.a.e = ["google"], function () {
        (function (a) {
            Z.__e = a;
            Z.__e.b = "e";
            Z.__e.g = !0
        })(function () {
            return Jc
        })
    }();

    Z.a.v = ["google"], function () {
        (function (a) {
            Z.__v = a;
            Z.__v.b = "v";
            Z.__v.g = !0
        })(function (a) {
            var b = a.vtp_name;
            if (!b || !b.replace) return !1;
            var c = U(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
            return void 0 !== c ? c : a.vtp_defaultValue
        })
    }();


    Z.a.gtagaw = ["google"], function () {
        var a = !1, b = !1, c = [], d = ["aw", "dc"],
            e = "send_to aw_remarketing aw_remarketing_only custom_params send_page_view language value currency transaction_id user_id conversion_linker conversion_cookie_prefix page_location page_referrer phone_conversion_number phone_conversion_callback phone_conversion_css_class items aw_merchant_id aw_feed_country aw_feed_language discount disable_merchant_reported_purchases allow_ad_personalization_signals".split(" "),
            f = function (a) {
                var b = V("google_trackConversion"),
                    c = a.gtm_onFailure;
                "function" == typeof b ? b(a) || c() : c()
            }, h = function () {
                for (; 0 < c.length;) f(c.shift())
            }, k = function () {
                a || (a = !0, T(X("https://", "http://", "www.googleadservices.com/pagead/conversion_async.js"), function () {
                    h();
                    c = {push: f}
                }, function () {
                    h();
                    a = !1
                }))
            }, l = function (a, c, d, e) {
                if (xe()) {
                } else if (c) {
                    var f = a.Y[0], h = a.Y[1], k = V("_googWcmImpl", function () {
                        k.q = k.q || [];
                        k.q.push(arguments)
                    });
                    V("_googWcmAk", f);
                    b || (b = !0, T(X("https://",
                        "http://", "www.gstatic.com/wcm/loader.js")));
                    var l = {ak: f, cl: h};
                    void 0 === d && (l.autoreplace = c);
                    k(2, d, l, c, e, new Date, e)
                }
            }, m = function (a) {
                if (a) {
                    for (var b = [], c = 0; c < a.length; ++c) {
                        var d = a[c];
                        d && b.push({
                            item_id: d.id,
                            quantity: d.quantity,
                            value: d.price,
                            start_date: d.start_date,
                            end_date: d.end_date
                        })
                    }
                    return b
                }
            }, n = function (a) {
                var b = a.vtp_conversionId, f = Jc, h = "gtag.config" == f, n = b.Y[0], p = b.Y[1], D = void 0 !== p,
                    C = b.containerId, M = D ? b.id : void 0, F = function (a) {
                        return Uc(a, C, M)
                    }, G = !1 !== F("conversion_linker"), J = F("conversion_cookie_prefix");
                if (h) {
                    var I = F("linker") || {};
                    G && ((I.accept_incoming || !1 !== I.accept_incoming && I.domains) && Vg(d, J), Ug(J));
                    I.domains && Wg(d, I.domains, I.url_position, !!I.decorate_forms, J);
                    if (D) {
                        var K = F("phone_conversion_number"), R = F("phone_conversion_callback"),
                            ja = F("phone_conversion_css_class"), W = F("phone_conversion_options");
                        l(b, K, R || ja, W)
                    }
                }
                var aa = !1 === F("aw_remarketing") || !1 === F("send_page_view");
                if (!h || !D && !aa) if (!0 === F("aw_remarketing_only") && (D = !1), !1 !== F("allow_ad_personalization_signals") || D) {
                    var L = {
                        google_conversion_id: n,
                        google_remarketing_only: !D,
                        onload_callback: a.vtp_gtmOnSuccess,
                        gtm_onFailure: a.vtp_gtmOnFailure,
                        google_conversion_format: "3",
                        google_conversion_color: "ffffff",
                        google_conversion_domain: "",
                        google_conversion_label: p,
                        google_conversion_language: F("language"),
                        google_conversion_value: F("value"),
                        google_conversion_currency: F("currency"),
                        google_conversion_order_id: F("transaction_id"),
                        google_user_id: F("user_id"),
                        google_conversion_page_url: F("page_location"),
                        google_conversion_referrer_url: F("page_referrer"),
                        google_gtm: pg(void 0)
                    };
                    !1 === F("allow_ad_personalization_signals") && (L.google_allow_ad_personalization_signals = !1);
                    L.google_read_gcl_cookie_opt_out = !G;
                    G && J && (Oa(J) ? L.google_gcl_cookie_prefix = J.aw : L.google_gcl_cookie_prefix = J);
                    var S = function () {
                        var a = F("custom_params"), b = {event: f};
                        if (ua(a)) {
                            for (var c = 0; c < a.length; ++c) {
                                var d = a[c], h = F(d);
                                void 0 !== h && (b[d] = h)
                            }
                            return b
                        }
                        var k = F("eventModel");
                        if (!k) return null;
                        Pa(k, b);
                        for (var l = 0; l < e.length; ++l) delete b[e[l]];
                        return b
                    }();
                    S && (L.google_custom_params = S);
                    !D && F("items") && (L.google_gtag_event_data =
                        {items: F("items"), value: F("value")});
                    if (D && "purchase" == f) {
                        F("aw_merchant_id") && (L.google_conversion_merchant_id = F("aw_merchant_id"), L.google_basket_feed_country = F("aw_feed_country"), L.google_basket_feed_language = F("aw_feed_language"), L.google_basket_discount = F("discount"), L.google_basket_transaction_type = f, L.google_disable_merchant_reported_conversions = !0 === F("disable_merchant_reported_purchases"), xe() && (L.google_disable_merchant_reported_conversions = !0));
                        var O = m(F("items"));
                        O && (L.google_conversion_items =
                            O)
                    }
                    c.push(L)
                }
                k()
            };
        Z.__gtagaw = n;
        Z.__gtagaw.b = "gtagaw";
        Z.__gtagaw.g = !0
    }();


    Z.a.get = ["google"], function () {
        (function (a) {
            Z.__get = a;
            Z.__get.b = "get";
            Z.__get.g = !0
        })(function (a) {
            if (a.vtp_isAutoTag) {
                for (var b = String(a.vtp_trackingId), c = Jc || "", d = {}, e = 0; e < Wd.length; e++) {
                    var f = ih(Wd[e], b);
                    void 0 !== f && (d[Wd[e]] = f)
                }
                var h = ih("custom_params", b);
                if (ua(h)) for (var k = 0; k < h.length; k++) {
                    var l = h[k], m = ih(l, b);
                    void 0 !== m && (d[l] = m)
                } else {
                    var n = U("eventModel");
                    Pa(n, d)
                }
                var p = Pa(d, void 0);
                Th(b);
                Ch(b, c, p);
                Dh(b)
            } else {
                var q = a.vtp_settings, r = q.eventParameters, u = q.userProperties, t = Q(a.vtp_eventParameters,
                    "name", "value");
                Pa(t, r);
                var A = Q(a.vtp_userProperties, "name", "value");
                Pa(A, u);
                r.user_properties = u;
                var D = String(q.streamId), C = String(a.vtp_eventName);
                Th(D);
                Ch(D, C, r);
                Dh(D)
            }
            a.vtp_gtmOnSuccess()
        })
    }();


    Z.a.gtagfl = [], function () {
        function a(a) {
            var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
            if (b) {
                var c = {
                    standard: 2,
                    unique: 3,
                    per_session: 4,
                    transactions: 5,
                    items_sold: 6,
                    "": 1
                }[(b[5] || "").toLowerCase()];
                if (c) return {
                    containerId: "DC-" + b[1],
                    Kc: b[3] ? a : "",
                    Tc: b[1],
                    Sc: b[3] || "",
                    wa: b[4] || "",
                    J: c
                }
            }
        }

        function b(a, b) {
            function c(b, c, e) {
                void 0 !== e && 0 !== (e + "").length && d.push(b + c + ":" + a(e + ""))
            }

            var d = [], e = b("items") || [];
            if (ua(e)) for (var l = 0; l < e.length; l++) {
                var m = e[l], n = l + 1;
                c("i", n, m.id);
                c("p", n, m.price);
                c("q", n, m.quantity);
                c("c", n, b("country"));
                c("l", n, b("language"))
            }
            return d.join("|")
        }

        function c(a, b, c) {
            var d = /^u([1-9]\d?|100)$/, e = a("custom_map") || {}, f = Xc(b, c), m = {}, n = {};
            if (Oa(e)) for (var p in e) if (e.hasOwnProperty(p) && d.test(p)) {
                var q = e[p];
                sa(q) && (m[p] = q)
            }
            for (var r = 0; r < f.length; r++) {
                var u = f[r];
                d.test(u) && (m[u] = u)
            }
            for (var t in m) m.hasOwnProperty(t) && (n[t] = a(m[t]));
            return n
        }

        (function (a) {
            Z.__gtagfl = a;
            Z.__gtagfl.b = "gtagfl";
            Z.__gtagfl.g = !0
        })(function (d) {
            var e = d.vtp_gtmOnSuccess, f = d.vtp_gtmOnFailure, h = a(d.vtp_targetId);
            if (h) {
                var k =
                    function (a) {
                        return Uc(a, h.containerId, h.Kc || void 0)
                    }, l = !1 !== k("conversion_linker"), m = k("conversion_cookie_prefix");
                if ("gtag.config" === Jc) l && (Ug(m), mg(m, void 0, void 0)), H(e); else {
                    var n = {}, p = k("dc_custom_params");
                    if (Oa(p)) for (var q in p) if (p.hasOwnProperty(q)) {
                        var r = p[q];
                        void 0 !== r && null !== r && (n[q] = r)
                    }
                    var u = "";
                    if (5 === h.J || 6 === h.J) u = b(Ue, k);
                    var t = c(k, h.containerId, h.Kc), A = 3 === Yg(), D = !0 === k("allow_custom_scripts");
                    if (xe() && D) {
                        D = !1
                    }
                    var C = {
                        wa: h.wa,
                        gb: l,
                        ja: m,
                        hb: k("value"),
                        J: h.J,
                        vd: n,
                        kb: h.Tc,
                        lb: h.Sc,
                        ma: f,
                        V: e,
                        Ua: sb(N(Og())),
                        ub: u,
                        protocol: A ? "http:" : "https:",
                        Gc: k("quantity"),
                        Ya: D,
                        sessionId: k("session_id"),
                        Db: k("transaction_id"),
                        Ga: t,
                        Yc: !1 !== k("allow_ad_personalization_signals")
                    };
                    tg(C, void 0)
                }
            } else H(f)
        })
    }();


    Z.a.gtagua = ["google"], function () {
        var a, b = {
                client_id: 1,
                client_storage: "storage",
                cookie_name: 1,
                cookie_domain: 1,
                cookie_expires: 1,
                cookie_path: 1,
                cookie_update: 1,
                sample_rate: 1,
                site_speed_sample_rate: 1,
                use_amp_client_id: 1,
                store_gac: 1,
                conversion_linker: "storeGac"
            }, c = {
                anonymize_ip: 1,
                app_id: 1,
                app_installer_id: 1,
                app_name: 1,
                app_version: 1,
                campaign: {
                    name: "campaignName",
                    source: "campaignSource",
                    medium: "campaignMedium",
                    term: "campaignTerm",
                    content: "campaignContent",
                    id: "campaignId"
                },
                currency: "currencyCode",
                description: "exDescription",
                fatal: "exFatal",
                language: 1,
                non_interaction: 1,
                page_hostname: "hostname",
                page_referrer: "referrer",
                page_path: "page",
                page_location: "location",
                page_title: "title",
                screen_name: 1,
                transport_type: "transport",
                user_id: 1
            }, d = {
                content_id: 1,
                event_category: 1,
                event_action: 1,
                event_label: 1,
                link_attribution: 1,
                linker: 1,
                method: 1,
                name: 1,
                send_page_view: 1,
                value: 1
            }, e = {cookie_name: 1, cookie_expires: "duration", levels: 1}, f = {
                anonymize_ip: 1,
                fatal: 1,
                non_interaction: 1,
                use_amp_client_id: 1,
                send_page_view: 1,
                store_gac: 1,
                conversion_linker: 1
            },
            h = function (a, b, c, d) {
                if (void 0 !== c) if (f[b] && (c = Aa(c)), "anonymize_ip" != b || c || (c = void 0), 1 === a) d[k(b)] = c; else if (sa(a)) d[a] = c; else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
            }, k = function (a) {
                return a && sa(a) ? a.replace(/(_[a-z])/g, function (a) {
                    return a[1].toUpperCase()
                }) : a
            }, l = function (a, b, c) {
                a.hasOwnProperty(b) || (a[b] = c)
            }, m = function (a, e, f) {
                var k = {}, m = {}, n = {}, p;
                var q = ih("experiments", a);
                if (ua(q)) {
                    for (var t = [], r = 0; r < q.length; r++) {
                        var u = q[r];
                        if (void 0 != u) {
                            var A = u.id, ja = u.variant;
                            void 0 !=
                            A && void 0 != ja && t.push(String(A) + "." + String(ja))
                        }
                    }
                    p = 0 < t.length ? t.join("!") : void 0
                } else p = void 0;
                p && l(m, "exp", p);
                var W = ih("custom_map", a);
                if (Oa(W)) for (var aa in W) if (W.hasOwnProperty(aa) && /^(dimension|metric)\d+$/.test(aa)) {
                    var L = ih(W[aa], a);
                    void 0 !== L && l(m, aa, L)
                }
                for (var S = Xc(a, void 0), O = 0; O < S.length; ++O) {
                    var Y = S[O], ba = ih(Y, a);
                    d.hasOwnProperty(Y) ? h(d[Y], Y, ba, k) : c.hasOwnProperty(Y) ? h(c[Y], Y, ba, m) : b.hasOwnProperty(Y) ? h(b[Y], Y, ba, n) : /^(dimension|metric|content_group)\d+$/.test(Y) && h(1, Y, ba, m)
                }
                var ca = String(Jc);
                l(n, "cookieDomain", "auto");
                l(m, "forceSSL", !0);
                var wa = "general";
                0 <= Ye("add_payment_info add_to_cart add_to_wishlist begin_checkout checkout_progress purchase refund remove_from_cart set_checkout_option".split(" "), ca) ? wa = "ecommerce" : 0 <= Ye("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "), ca) ? wa = "engagement" : "exception" == ca && (wa = "error");
                l(k, "eventCategory", wa);
                0 <= Ye(["view_item", "view_item_list", "view_promotion", "view_search_results"],
                    ca) && l(m, "nonInteraction", !0);
                "login" == ca || "sign_up" == ca || "share" == ca ? l(k, "eventLabel", ih("method", a)) : "search" == ca || "view_search_results" == ca ? l(k, "eventLabel", ih("search_term", a)) : "select_content" == ca && l(k, "eventLabel", ih("content_type", a));
                var za = k.linker || {};
                if (za.accept_incoming || 0 != za.accept_incoming && za.domains) n.allowLinker = !0;
                if (!1 === ih("allow_display_features", a) || !1 === ih("allow_ad_personalization_signals", a)) m.allowAdFeatures = !1;
                n.name = e;
                m["&gtm"] = pg(!0);
                m.hitCallback = f;
                k.T = m;
                k.$b = n;
                return k
            },
            n = function (a) {
                function b(a) {
                    var b = Pa(a, void 0);
                    b.list = a.list_name;
                    b.listPosition = a.list_position;
                    b.position = a.list_position || a.creative_slot;
                    b.creative = a.creative_name;
                    return b
                }

                function c(a) {
                    for (var c = [], d = 0; a && d < a.length; d++) a[d] && c.push(b(a[d]));
                    return c.length ? c : void 0
                }

                function d(a) {
                    return {
                        id: e("transaction_id"),
                        affiliation: e("affiliation"),
                        revenue: e("value"),
                        tax: e("tax"),
                        shipping: e("shipping"),
                        coupon: e("coupon"),
                        list: e("list_name") || a
                    }
                }

                for (var e = function (b) {
                        return Uc(b, a, void 0)
                    }, f = e("items"),
                         h, k = 0; f && k < f.length && !(h = f[k].list_name); k++) ;
                var m = e("custom_map");
                if (Oa(m)) for (k = 0; f && k < f.length; ++k) {
                    var n = f[k], p;
                    for (p in m) m.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && l(n, p, n[m[p]])
                }
                var q = null, r = Jc, u = e("promotions");
                "purchase" == r || "refund" == r ? q = {
                    action: r,
                    va: d(),
                    na: c(f)
                } : "add_to_cart" == r ? q = {
                    action: "add",
                    na: c(f)
                } : "remove_from_cart" == r ? q = {
                    action: "remove",
                    na: c(f)
                } : "view_item" == r ? q = {
                    action: "detail",
                    va: d(h),
                    na: c(f)
                } : "view_item_list" == r ? q = {action: "impressions", Ud: c(f)} : "view_promotion" ==
                r ? q = {
                    action: "promo_view",
                    vb: c(u)
                } : "select_content" == r && u && 0 < u.length ? q = {
                    action: "promo_click",
                    vb: c(u)
                } : "select_content" == r ? q = {
                    action: "click",
                    va: {list: e("list_name") || h},
                    na: c(f)
                } : "begin_checkout" == r || "checkout_progress" == r ? q = {
                    action: "checkout",
                    na: c(f),
                    va: {step: "begin_checkout" == r ? 1 : e("checkout_step"), option: e("checkout_option")}
                } : "set_checkout_option" == r && (q = {
                    action: "checkout_option",
                    va: {step: e("checkout_step"), option: e("checkout_option")}
                });
                q && (q.$e = e("currency"));
                return q
            }, p = {}, q = function (a, b) {
                var c =
                    p[a];
                p[a] = Pa(b, void 0);
                if (!c) return !1;
                for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
                for (d in c) if (c.hasOwnProperty(d) && c[d] !== b[d]) return !0;
                return !1
            }, r = function (b) {
                var c = b.vtp_trackingId, d = qd(void 0), f = "gtag_" + c.split("-").join("_"), p = function (a) {
                    var b = [].slice.call(arguments, 0);
                    b[0] = f + "." + b[0];
                    d.apply(window, b)
                }, r = function () {
                    var a = function (a, b) {
                        for (var c = 0; b && c < b.length; c++) p(a, b[c])
                    }, b = n(c);
                    if (b) {
                        var d = b.action;
                        if ("impressions" == d) a("ec:addImpression", b.Ud); else if ("promo_click" ==
                            d || "promo_view" == d) {
                            var e = b.vb;
                            a("ec:addPromo", b.vb);
                            e && 0 < e.length && "promo_click" == d && p("ec:setAction", d)
                        } else a("ec:addProduct", b.na), p("ec:setAction", d, b.va)
                    }
                }, u = function () {
                    if (xe()) {
                    } else {
                        var a = ih("optimize_id", c);
                        a && (p("require", a, {dataLayer: "dataLayer"}), p("require", "render"))
                    }
                }, G = m(c, f, b.vtp_gtmOnSuccess);
                q(f, G.$b) && d(function () {
                    pd() && pd().remove(f)
                });
                d("create", c, G.$b);
                (function () {
                    var a = ih("custom_map", c);
                    d(function () {
                        if (Oa(a)) {
                            var b = G.T, c = pd().getByName(f), d;
                            for (d in a) if (a.hasOwnProperty(d) && /^(dimension|metric)\d+$/.test(d)) {
                                var e = c.get(k(a[d]));
                                l(b, d, e)
                            }
                        }
                    })
                })();
                (function (a) {
                    if (a) {
                        var b = {};
                        if (Oa(a)) for (var c in e) e.hasOwnProperty(c) && h(e[c], c, a[c], b);
                        p("require", "linkid", b)
                    }
                })(G.linkAttribution);
                var J = G.linker;
                J && J.domains && rd(f + ".", J.domains, !!J.use_anchor, !!J.decorate_forms);
                var I = function (a, b, c) {
                    c && (b = "" + b);
                    G.T[a] = b
                }, K = Jc;
                "page_view" == K ? (u(), p("send", "pageview", G.T)) : "gtag.config" == K ? (u(), 0 !=
                G.sendPageView && p("send", "pageview", G.T)) : "screen_view" == K ? p("send", "screenview", G.T) : "timing_complete" == K ? (I("timingCategory", G.eventCategory, !0), I("timingVar", G.name, !0), I("timingValue", ya(G.value)), void 0 !== G.eventLabel && I("timingLabel", G.eventLabel, !0), p("send", "timing", G.T)) : "exception" == K ? p("send", "exception", G.T) : (0 <= Ye("view_item_list select_content view_item add_to_cart remove_from_cart begin_checkout set_checkout_option purchase refund view_promotion checkout_progress".split(" "), K) && (p("require",
                    "ec", "ec.js"), r()), I("eventCategory", G.eventCategory, !0), I("eventAction", G.eventAction || K, !0), void 0 !== G.eventLabel && I("eventLabel", G.eventLabel, !0), void 0 !== G.value && I("eventValue", ya(G.value)), p("send", "event", G.T));
                a || (a = !0, T("https://www.google-analytics.com/analytics.js", function () {
                    pd().loaded || b.vtp_gtmOnFailure()
                }, b.vtp_gtmOnFailure))
            };
        Z.__gtagua = r;
        Z.__gtagua.b = "gtagua";
        Z.__gtagua.g = !0
    }();


    var Vh = {
        macro: function (a) {
            if (re.cb.hasOwnProperty(a)) return re.cb[a]
        }
    };
    Vh.dataLayer = Tc;
    Vh.onHtmlSuccess = re.Yb(!0);
    Vh.onHtmlFailure = re.Yb(!1);
    Vh.callback = function (a) {
        Lc.hasOwnProperty(a) && ra(Lc[a]) && Lc[a]();
        delete Lc[a]
    };
    Vh.ed = function () {
        Ic[Hc.o] = Vh;
        Mc = Z.a;
        sc = sc || re;
        tc = dd
    };
    Vh.Vd = function () {
        Ic = z.google_tag_manager = z.google_tag_manager || {};
        if (Ic[Hc.o]) {
            var a = Ic.zones;
            a && a.unregisterChild(Hc.o)
        } else {
            for (var b = data.resource || {}, c = b.macros || [], d = 0; d < c.length; d++) lc.push(c[d]);
            for (var e = b.tags || [], f = 0; f < e.length; f++) oc.push(e[f]);
            for (var h = b.predicates || [], k = 0; k < h.length; k++) nc.push(h[k]);
            for (var l = b.rules || [], m = 0; m < l.length; m++) {
                for (var n = l[m], p = {}, q = 0; q < n.length; q++) p[n[q][0]] = Array.prototype.slice.call(n[q], 1);
                mc.push(p)
            }
            qc = Z;
            Se();
            Vh.ed();
            qe();
            hd = !1;
            id = 0;
            if ("interactive" ==
                B.readyState && !B.createEventObject || "complete" == B.readyState) kd(); else {
                gb(B, "DOMContentLoaded", kd);
                gb(B, "readystatechange", kd);
                if (B.createEventObject && B.documentElement.doScroll) {
                    var r = !0;
                    try {
                        r = !z.frameElement
                    } catch (t) {
                    }
                    r && ld()
                }
                gb(z, "load", kd)
            }
            ie = !1;
            "complete" === B.readyState ? ke() : gb(z, "load", ke);
            a:{
                if (!wd) break a;
                zd();
                Cd = void 0;
                Dd = {};
                Ad = {};
                Fd = void 0;
                Ed = {};
                Bd = "";
                Gd = xd();
                z.setInterval(zd, 864E5);
            }
        }
    };
    Vh.Vd();

})()
