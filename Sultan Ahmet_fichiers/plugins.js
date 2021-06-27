function isMobile() {
    var t, e = !1;
    return t = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0), e
}

function viewport() {
    var t = window, e = "inner";
    return "innerWidth" in window || (e = "client", t = document.documentElement || document.body), {
        width: t[e + "Width"],
        height: t[e + "Height"]
    }
}

function launch_audio() {
    var t = window.AudioContext || window.webkitAudioContext || !1;
    if (t) {
        var e, i, n = new t, s = n.createAnalyser(), o = new XMLHttpRequest;

        function r() {
            playing = !0, (i = n.createBufferSource()).buffer = e, i.connect(s), s.connect(n.destination), i.loop = !0, i.start(0)
        }

        o.open("GET", "/music/music.mp3", !0), o.responseType = "arraybuffer", o.onload = function () {
            n.decodeAudioData(o.response, function (t) {
                e = t, $(".play_btn").bind("touchstart", function () {
                    playing || r()
                }), $(".pause_btn").bind("touchstart", function () {
                    i.stop(0), playing = !1
                }), $(".play_btn").bind("click", function () {
                    playing || r()
                }), $(".pause_btn").bind("click", function () {
                    i.stop(), playing = !1
                }), isHandheld || mobilePlatform || r()
            })
        }, o.send();
        new Uint8Array(s.frequencyBinCount);
        var a = document.getElementById("canvas"), h = a.width, l = a.height - 2, c = 1, u = 2, d = "#fff", p = 80,
            f = [];
        canvasCtx = a.getContext("2d"), gradient = canvasCtx.createLinearGradient(0, 0, 0, 60), gradient.addColorStop(1, "#CCCCCC"), gradient.addColorStop(.3, "#999999"), gradient.addColorStop(0, "#666666"), function t() {
            var e = new Uint8Array(s.frequencyBinCount);
            s.getByteFrequencyData(e);
            var i = Math.round(e.length / p);
            canvasCtx.clearRect(0, 0, h, l);
            for (var n = 0; n < p; n++) {
                var o = e[n * i] / 6;
                f.length < Math.round(p) && f.push(o), canvasCtx.fillStyle = d, o < f[n] ? canvasCtx.fillRect(3 * n, l - --f[n], c, u) : (canvasCtx.fillRect(3 * n, l - o, c, u), f[n] = o), canvasCtx.fillStyle = gradient, canvasCtx.fillRect(3 * n, l - o + u, c, l)
            }
            requestAnimationFrame(t)
        }()
    }
}

!function (t, e, i) {
    function n(t, e) {
        return typeof t === e
    }

    function s() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : v ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function o(t) {
        return t.replace(/([a-z])-([a-z])/g, function (t, e, i) {
            return e + i.toUpperCase()
        }).replace(/^-/, "")
    }

    function r(t) {
        return t.replace(/([A-Z])/g, function (t, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function a(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function h(t, i, n, o) {
        var r, a, h, l, c, u = "modernizr", d = s("div"),
            p = ((c = e.body) || ((c = s(v ? "svg" : "body")).fake = !0), c);
        if (parseInt(n, 10)) for (; n--;) h = s("div"), h.id = o ? o[n] : u + (n + 1), d.appendChild(h);
        return (r = s("style")).type = "text/css", r.id = "s" + u, (p.fake ? p : d).appendChild(r), p.appendChild(d), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(e.createTextNode(t)), d.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(p)), a = i(d, t), p.fake ? (p.parentNode.removeChild(p), g.style.overflow = l, g.offsetHeight) : d.parentNode.removeChild(d), !!a
    }

    function l(e, n) {
        var s = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; s--;) if (t.CSS.supports(r(e[s]), n)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in t) {
            for (var o = []; s--;) o.push("(" + r(e[s]) + ":" + n + ")");
            return h("@supports (" + (o = o.join(" or ")) + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == function (e, i, n) {
                    var s;
                    if ("getComputedStyle" in t) {
                        s = getComputedStyle.call(t, e, i);
                        var o = t.console;
                        null !== s ? n && (s = s.getPropertyValue(n)) : o && o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                    } else s = !i && e.currentStyle && e.currentStyle[n];
                    return s
                }(e, null, "position")
            })
        }
        return i
    }

    function c(t, e, r, h, c) {
        var u = t.charAt(0).toUpperCase() + t.slice(1), d = (t + " " + S.join(u + " ") + u).split(" ");
        return n(e, "string") || n(e, "undefined") ? function (t, e, r, a) {
            function h() {
                u && (delete _.style, delete _.modElem)
            }

            if (a = !n(a, "undefined") && a, !n(r, "undefined")) {
                var c = l(t, r);
                if (!n(c, "undefined")) return c
            }
            for (var u, d, p, f, m, g = ["modernizr", "tspan", "samp"]; !_.style && g.length;) u = !0, _.modElem = s(g.shift()), _.style = _.modElem.style;
            for (p = t.length, d = 0; p > d; d++) if (f = t[d], m = _.style[f], v = f, y = "-", !!~("" + v).indexOf(y) && (f = o(f)), _.style[f] !== i) {
                if (a || n(r, "undefined")) return h(), "pfx" != e || f;
                try {
                    _.style[f] = r
                } catch (t) {
                }
                if (_.style[f] != m) return h(), "pfx" != e || f
            }
            var v, y;
            return h(), !1
        }(d, e, h, c) : function (t, e, i) {
            var s;
            for (var o in t) if (t[o] in e) return !1 === i ? t[o] : (s = e[t[o]], n(s, "function") ? a(s, i || e) : s);
            return !1
        }(d = (t + " " + x.join(u + " ") + u).split(" "), e, r)
    }

    function u(t, e, n) {
        return c(t, i, i, e, n)
    }

    var d = [], p = [], f = {
        _version: "3.5.0",
        _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
        _q: [],
        on: function (t, e) {
            var i = this;
            setTimeout(function () {
                e(i[t])
            }, 0)
        },
        addTest: function (t, e, i) {
            p.push({name: t, fn: e, options: i})
        },
        addAsyncTest: function (t) {
            p.push({name: null, fn: t})
        }
    }, m = function () {
    };
    m.prototype = f, m = new m;
    var g = e.documentElement, v = "svg" === g.nodeName.toLowerCase(), y = function () {
        var t = !("onblur" in e.documentElement);
        return function (e, n) {
            var o;
            return !!e && (n && "string" != typeof n || (n = s(n || "div")), !(o = (e = "on" + e) in n) && t && (n.setAttribute || (n = s("div")), n.setAttribute(e, ""), o = "function" == typeof n[e], n[e] !== i && (n[e] = i), n.removeAttribute(e)), o)
        }
    }();
    f.hasEvent = y, m.addTest("canvas", function () {
        var t = s("canvas");
        return !(!t.getContext || !t.getContext("2d"))
    });
    var b = f._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    f._prefixes = b;
    var w = "Moz O ms Webkit", x = f._config.usePrefixes ? w.toLowerCase().split(" ") : [];
    f._domPrefixes = x;
    f.prefixedCSSValue = function (t, e) {
        var i = !1, n = s("div").style;
        if (t in n) {
            var o = x.length;
            for (n[t] = e, i = n[t]; o-- && !i;) n[t] = "-" + x[o] + "-" + e, i = n[t]
        }
        return "" === i && (i = !1), i
    };
    var S = f._config.usePrefixes ? w.split(" ") : [];
    f._cssomPrefixes = S;
    var T = function (e) {
        var n, s = b.length, o = t.CSSRule;
        if (void 0 === o) return i;
        if (!e) return !1;
        if ((n = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in o) return "@" + e;
        for (var r = 0; s > r; r++) {
            var a = b[r];
            if (a.toUpperCase() + "_" + n in o) return "@-" + a.toLowerCase() + "-" + e
        }
        return !1
    };
    f.atRule = T, m.addTest("localstorage", function () {
        var t = "modernizr";
        try {
            return localStorage.setItem(t, t), localStorage.removeItem(t), !0
        } catch (t) {
            return !1
        }
    });
    var E = f.testStyles = h;
    m.addTest("touchevents", function () {
        var i;
        if ("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch) i = !0; else {
            var n = ["@media (", b.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            E(n, function (t) {
                i = 9 === t.offsetTop
            })
        }
        return i
    });
    var k = {elem: s("modernizr")};
    m._q.push(function () {
        delete k.elem
    });
    var _ = {style: k.elem.style};
    m._q.unshift(function () {
        delete _.style
    }), f.testAllProps = c;
    var P = f.prefixed = function (t, e, i) {
        return 0 === t.indexOf("@") ? T(t) : (-1 != t.indexOf("-") && (t = o(t)), e ? c(t, e, i) : c(t, "pfx"))
    };
    f.prefixedCSS = function (t) {
        var e = P(t);
        return e && r(e)
    }, f.testAllProps = u, m.addTest("csstransforms", function () {
        return -1 === navigator.userAgent.indexOf("Android 2.") && u("transform", "scale(1)", !0)
    }), function () {
        var t, e, i, s, o, r, a;
        for (var h in p) if (p.hasOwnProperty(h)) {
            if (t = [], (e = p[h]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
            for (s = n(e.fn, "function") ? e.fn() : e.fn, o = 0; o < t.length; o++) r = t[o], a = r.split("."), 1 === a.length ? m[a[0]] = s : (!m[a[0]] || m[a[0]] instanceof Boolean || (m[a[0]] = new Boolean(m[a[0]])), m[a[0]][a[1]] = s), d.push((s ? "" : "no-") + a.join("-"))
        }
    }(), function (t) {
        var e = g.className, i = m._config.classPrefix || "";
        if (v && (e = e.baseVal), m._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            e = e.replace(n, "$1" + i + "js$2")
        }
        m._config.enableClasses && (e += " " + i + t.join(" " + i), v ? g.className.baseVal = e : g.className = e)
    }(d), delete f.addTest, delete f.addAsyncTest;
    for (var C = 0; C < m._q.length; C++) m._q[C]();
    t.Modernizr = m
}(window, document), function () {
    function t() {
    }

    function e(t, e) {
        for (var i = t.length; i--;) if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function () {
            return this[t].apply(this, arguments)
        }
    }

    var n = t.prototype, s = this, o = s.EventEmitter;
    n.getListeners = function (t) {
        var e, i, n = this._getEvents();
        if ("object" == typeof t) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function (t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function (t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && ((e = {})[t] = i), e || i
    }, n.addListener = function (t, i) {
        var n, s = this.getListenersAsObject(t), o = "object" == typeof i;
        for (n in s) s.hasOwnProperty(n) && -1 === e(s[n], i) && s[n].push(o ? i : {listener: i, once: !1});
        return this
    }, n.on = i("addListener"), n.addOnceListener = function (t, e) {
        return this.addListener(t, {listener: e, once: !0})
    }, n.once = i("addOnceListener"), n.defineEvent = function (t) {
        return this.getListeners(t), this
    }, n.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function (t, i) {
        var n, s, o = this.getListenersAsObject(t);
        for (s in o) o.hasOwnProperty(s) && (n = e(o[s], i), -1 !== n && o[s].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function (t, e, i) {
        var n, s, o = t ? this.removeListener : this.addListener, r = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp) for (n = i.length; n--;) o.call(this, e, i[n]); else for (n in e) e.hasOwnProperty(n) && (s = e[n]) && ("function" == typeof s ? o.call(this, n, s) : r.call(this, n, s));
        return this
    }, n.removeEvent = function (t) {
        var e, i = typeof t, n = this._getEvents();
        if ("string" === i) delete n[t]; else if ("object" === i) for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e]; else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function (t, e) {
        var i, n, s, o, r = this.getListenersAsObject(t);
        for (s in r) if (r.hasOwnProperty(s)) for (n = r[s].length; n--;) i = r[s][n], !0 === i.once && this.removeListener(t, i.listener), o = i.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function (t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, n._getEvents = function () {
        return this._events || (this._events = {})
    }, t.noConflict = function () {
        return s.EventEmitter = o, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this), function (t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }

    var i = document.documentElement, n = function () {
    };
    i.addEventListener ? n = function (t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function (t, i, n) {
        t[i + n] = n.handleEvent ? function () {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function () {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var s = function () {
    };
    i.removeEventListener ? s = function (t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (s = function (t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var o = {bind: n, unbind: s};
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : t.eventie = o
}(this), function (t, e) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
}(window, function (t, e, i) {
    function n(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function s(t) {
        var e, i = [];
        if (e = t, "[object Array]" === u.call(e)) i = t; else if ("number" == typeof t.length) for (var n = 0, s = t.length; s > n; n++) i.push(t[n]); else i.push(t);
        return i
    }

    function o(t, e, i) {
        if (!(this instanceof o)) return new o(t, e);
        "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = s(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), h && (this.jqDeferred = new h.Deferred);
        var r = this;
        setTimeout(function () {
            r.check()
        })
    }

    function r(t) {
        this.img = t
    }

    function a(t) {
        this.src = t, d[t] = this
    }

    var h = t.jQuery, l = t.console, c = void 0 !== l, u = Object.prototype.toString;
    o.prototype = new e, o.prototype.options = {}, o.prototype.getImages = function () {
        this.images = [];
        for (var t = 0, e = this.elements.length; e > t; t++) {
            var i = this.elements[t];
            "IMG" === i.nodeName && this.addImage(i);
            var n = i.nodeType;
            if (n && (1 === n || 9 === n || 11 === n)) for (var s = i.querySelectorAll("img"), o = 0, r = s.length; r > o; o++) {
                var a = s[o];
                this.addImage(a)
            }
        }
    }, o.prototype.addImage = function (t) {
        var e = new r(t);
        this.images.push(e)
    }, o.prototype.check = function () {
        function t(t, s) {
            return e.options.debug && c && l.log("confirm", t, s), e.progress(t), ++i === n && e.complete(), !0
        }

        var e = this, i = 0, n = this.images.length;
        if (this.hasAnyBroken = !1, n) for (var s = 0; n > s; s++) {
            var o = this.images[s];
            o.on("confirm", t), o.check()
        } else this.complete()
    }, o.prototype.progress = function (t) {
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
        var e = this;
        setTimeout(function () {
            e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
        })
    }, o.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var e = this;
        setTimeout(function () {
            if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                var i = e.hasAnyBroken ? "reject" : "resolve";
                e.jqDeferred[i](e)
            }
        })
    }, h && (h.fn.imagesLoaded = function (t, e) {
        return new o(this, t, e).jqDeferred.promise(h(this))
    }), r.prototype = new e, r.prototype.check = function () {
        var t = d[this.img.src] || new a(this.img.src);
        if (t.isConfirmed) this.confirm(t.isLoaded, "cached was confirmed"); else if (this.img.complete && void 0 !== this.img.naturalWidth) this.confirm(0 !== this.img.naturalWidth, "naturalWidth"); else {
            var e = this;
            t.on("confirm", function (t, i) {
                return e.confirm(t.isLoaded, i), !0
            }), t.check()
        }
    }, r.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emit("confirm", this, e)
    };
    var d = {};
    return a.prototype = new e, a.prototype.check = function () {
        if (!this.isChecked) {
            var t = new Image;
            i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
        }
    }, a.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, a.prototype.onload = function (t) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(t)
    }, a.prototype.onerror = function (t) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
    }, a.prototype.confirm = function (t, e) {
        this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
    }, a.prototype.unbindProxyEvents = function (t) {
        i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
    }, o
}), function (t, e, i) {
    var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (e) {
        t.setTimeout(e, 1e3 / 60)
    }, s = function () {
        var n = {}, s = e.createElement("div").style, o = function () {
            for (var t = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, i = t.length; e < i; e++) if (t[e] + "ransform" in s) return t[e].substr(0, t[e].length - 1);
            return !1
        }();

        function r(t) {
            return !1 !== o && ("" === o ? t : o + t.charAt(0).toUpperCase() + t.substr(1))
        }

        n.getTime = Date.now || function () {
            return (new Date).getTime()
        }, n.extend = function (t, e) {
            for (var i in e) t[i] = e[i]
        }, n.addEvent = function (t, e, i, n) {
            t.addEventListener(e, i, !!n)
        }, n.removeEvent = function (t, e, i, n) {
            t.removeEventListener(e, i, !!n)
        }, n.prefixPointerEvent = function (e) {
            return t.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e
        }, n.momentum = function (t, e, n, s, o, r) {
            var a, h, l = t - e, c = i.abs(l) / n;
            return h = c / (r = void 0 === r ? 6e-4 : r), (a = t + c * c / (2 * r) * (l < 0 ? -1 : 1)) < s ? (a = o ? s - o / 2.5 * (c / 8) : s, h = (l = i.abs(a - t)) / c) : a > 0 && (a = o ? o / 2.5 * (c / 8) : 0, h = (l = i.abs(t) + a) / c), {
                destination: i.round(a),
                duration: h
            }
        };
        var a = r("transform");
        return n.extend(n, {
            hasTransform: !1 !== a,
            hasPerspective: r("perspective") in s,
            hasTouch: "ontouchstart" in t,
            hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
            hasTransition: r("transition") in s
        }), n.isBadAndroid = function () {
            var e = t.navigator.appVersion;
            if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {
                var i = e.match(/Safari\/(\d+.\d)/);
                return !(i && "object" == typeof i && i.length >= 2) || parseFloat(i[1]) < 535.19
            }
            return !1
        }(), n.extend(n.style = {}, {
            transform: a,
            transitionTimingFunction: r("transitionTimingFunction"),
            transitionDuration: r("transitionDuration"),
            transitionDelay: r("transitionDelay"),
            transformOrigin: r("transformOrigin"),
            touchAction: r("touchAction")
        }), n.hasClass = function (t, e) {
            return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
        }, n.addClass = function (t, e) {
            if (!n.hasClass(t, e)) {
                var i = t.className.split(" ");
                i.push(e), t.className = i.join(" ")
            }
        }, n.removeClass = function (t, e) {
            if (n.hasClass(t, e)) {
                var i = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
                t.className = t.className.replace(i, " ")
            }
        }, n.offset = function (t) {
            for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, i -= t.offsetTop;
            return {left: e, top: i}
        }, n.preventDefaultException = function (t, e) {
            for (var i in e) if (e[i].test(t[i])) return !0;
            return !1
        }, n.extend(n.eventType = {}, {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3
        }), n.extend(n.ease = {}, {
            quadratic: {
                style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function (t) {
                    return t * (2 - t)
                }
            }, circular: {
                style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function (t) {
                    return i.sqrt(1 - --t * t)
                }
            }, back: {
                style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function (t) {
                    return (t -= 1) * t * (5 * t + 4) + 1
                }
            }, bounce: {
                style: "", fn: function (t) {
                    return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }
            }, elastic: {
                style: "", fn: function (t) {
                    return 0 === t ? 0 : 1 == t ? 1 : .4 * i.pow(2, -10 * t) * i.sin((t - .055) * (2 * i.PI) / .22) + 1
                }
            }
        }), n.tap = function (t, i) {
            var n = e.createEvent("Event");
            n.initEvent(i, !0, !0), n.pageX = t.pageX, n.pageY = t.pageY, t.target.dispatchEvent(n)
        }, n.click = function (i) {
            var n, s = i.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(s.tagName) || ((n = e.createEvent(t.MouseEvent ? "MouseEvents" : "Event")).initEvent("click", !0, !0), n.view = i.view || t, n.detail = 1, n.screenX = s.screenX || 0, n.screenY = s.screenY || 0, n.clientX = s.clientX || 0, n.clientY = s.clientY || 0, n.ctrlKey = !!i.ctrlKey, n.altKey = !!i.altKey, n.shiftKey = !!i.shiftKey, n.metaKey = !!i.metaKey, n.button = 0, n.relatedTarget = null, n._constructed = !0, s.dispatchEvent(n))
        }, n.getTouchAction = function (t, e) {
            var i = "none";
            return "vertical" === t ? i = "pan-y" : "horizontal" === t && (i = "pan-x"), e && "none" != i && (i += " pinch-zoom"), i
        }, n.getRect = function (t) {
            if (t instanceof SVGElement) {
                var e = t.getBoundingClientRect();
                return {top: e.top, left: e.left, width: e.width, height: e.height}
            }
            return {top: t.offsetTop, left: t.offsetLeft, width: t.offsetWidth, height: t.offsetHeight}
        }, n
    }();

    function o(i, n) {
        this.wrapper = "string" == typeof i ? e.querySelector(i) : i, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: .334,
            disablePointer: !s.hasPointer,
            disableTouch: s.hasPointer || !s.hasTouch,
            disableMouse: s.hasPointer || s.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/},
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: void 0 === t.onmousedown
        };
        for (var o in n) this.options[o] = n[o];
        this.translateZ = this.options.HWCompositing && s.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = s.hasTransition && this.options.useTransition, this.options.useTransform = s.hasTransform && this.options.useTransform, this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? s.ease[this.options.bounceEasing] || s.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, !0 === this.options.tap && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, 3 == this.options.probeType && (this.options.useTransition = !1), this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
    }

    function r(t, i, n) {
        var s = e.createElement("div"), o = e.createElement("div");
        return !0 === n && (s.style.cssText = "position:absolute;z-index:9999", o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), o.className = "iScrollIndicator", "h" == t ? (!0 === n && (s.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", o.style.height = "100%"), s.className = "iScrollHorizontalScrollbar") : (!0 === n && (s.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", o.style.width = "100%"), s.className = "iScrollVerticalScrollbar"), s.style.cssText += ";overflow:hidden", i || (s.style.pointerEvents = "none"), s.appendChild(o), s
    }

    function a(i, o) {
        this.wrapper = "string" == typeof o.el ? e.querySelector(o.el) : o.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = i, this.options = {
            listenX: !0,
            listenY: !0,
            interactive: !1,
            resize: !0,
            defaultScrollbars: !1,
            shrink: !1,
            fade: !1,
            speedRatioX: 0,
            speedRatioY: 0
        };
        for (var r in o) this.options[r] = o[r];
        if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (s.addEvent(this.indicator, "touchstart", this), s.addEvent(t, "touchend", this)), this.options.disablePointer || (s.addEvent(this.indicator, s.prefixPointerEvent("pointerdown"), this), s.addEvent(t, s.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (s.addEvent(this.indicator, "mousedown", this), s.addEvent(t, "mouseup", this))), this.options.fade) {
            this.wrapperStyle[s.style.transform] = this.scroller.translateZ;
            var a = s.style.transitionDuration;
            if (!a) return;
            this.wrapperStyle[a] = s.isBadAndroid ? "0.0001ms" : "0ms";
            var h = this;
            s.isBadAndroid && n(function () {
                alert("ok3"), "0.0001ms" === h.wrapperStyle[a] && (h.wrapperStyle[a] = "0s")
            }), this.wrapperStyle.opacity = "0"
        }
    }

    o.prototype = {
        version: "5.2.0-snapshot", _init: function () {
            this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
        }, destroy: function () {
            this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
        }, _transitionEnd: function (t) {
            t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        }, _start: function (t) {
            if (1 != s.eventType[t.type] && 0 !== (t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2)) return;
            if (this.enabled && (!this.initiated || s.eventType[t.type] === this.initiated)) {
                !this.options.preventDefault || s.isBadAndroid || s.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                var e, n = t.touches ? t.touches[0] : t;
                this.initiated = s.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = s.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, e = this.getComputedPosition(), this._translate(i.round(e.x), i.round(e.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = n.pageX, this.pointY = n.pageY, this._execEvent("beforeScrollStart")
            }
        }, _move: function (t) {
            if (this.enabled && s.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var e, n, o, r, a = t.touches ? t.touches[0] : t, h = a.pageX - this.pointX, l = a.pageY - this.pointY,
                    c = s.getTime();
                if (this.pointX = a.pageX, this.pointY = a.pageY, this.distX += h, this.distY += l, o = i.abs(this.distX), r = i.abs(this.distY), !(c - this.endTime > 300 && o < 10 && r < 10)) {
                    if (this.directionLocked || this.options.freeScroll || (o > r + this.options.directionLockThreshold ? this.directionLocked = "h" : r >= o + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) t.preventDefault(); else if ("horizontal" == this.options.eventPassthrough) return void (this.initiated = !1);
                        l = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) t.preventDefault(); else if ("vertical" == this.options.eventPassthrough) return void (this.initiated = !1);
                        h = 0
                    }
                    h = this.hasHorizontalScroll ? h : 0, l = this.hasVerticalScroll ? l : 0, e = this.x + h, n = this.y + l, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + h / 3 : e > 0 ? 0 : this.maxScrollX), (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + l / 3 : n > 0 ? 0 : this.maxScrollY), this.directionX = h > 0 ? -1 : h < 0 ? 1 : 0, this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, n), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y, 1 == this.options.probeType && this._execEvent("scroll")), this.options.probeType > 1 && this._execEvent("scroll")
                }
            }
        }, _end: function (t) {
            if (this.enabled && s.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !s.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                t.changedTouches && t.changedTouches[0];
                var e, n, o = s.getTime() - this.startTime, r = i.round(this.x), a = i.round(this.y),
                    h = i.abs(r - this.startX), l = i.abs(a - this.startY), c = 0, u = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = s.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(r, a), !this.moved) return this.options.tap && s.tap(t, this.options.tap), this.options.click && s.click(t), void this._execEvent("scrollCancel");
                    if (this._events.flick && o < 200 && h < 100 && l < 100) this._execEvent("flick"); else {
                        if (this.options.momentum && o < 300 && (e = this.hasHorizontalScroll ? s.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                            destination: r,
                            duration: 0
                        }, n = this.hasVerticalScroll ? s.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                            destination: a,
                            duration: 0
                        }, r = e.destination, a = n.destination, c = i.max(e.duration, n.duration), this.isInTransition = 1), this.options.snap) {
                            var d = this._nearestSnap(r, a);
                            this.currentPage = d, c = this.options.snapSpeed || i.max(i.max(i.min(i.abs(r - d.x), 1e3), i.min(i.abs(a - d.y), 1e3)), 300), r = d.x, a = d.y, this.directionX = 0, this.directionY = 0, u = this.options.bounceEasing
                        }
                        if (r != this.x || a != this.y) return (r > 0 || r < this.maxScrollX || a > 0 || a < this.maxScrollY) && (u = s.ease.quadratic), void this.scrollTo(r, a, c, u);
                        this._execEvent("scrollEnd")
                    }
                }
            }
        }, _resize: function () {
            var t = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
                t.refresh()
            }, this.options.resizePolling)
        }, resetPosition: function (t) {
            var e = this.x, i = this.y;
            return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (e != this.x || i != this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
        }, disable: function () {
            this.enabled = !1
        }, enable: function () {
            this.enabled = !0
        }, refresh: function () {
            s.getRect(this.wrapper), this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight;
            var t = s.getRect(this.scroller);
            this.scrollerWidth = t.width, this.scrollerHeight = t.height, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, s.hasPointer && !this.options.disablePointer && (this.wrapper.style[s.style.touchAction] = s.getTouchAction(this.options.eventPassthrough, !0), this.wrapper.style[s.style.touchAction] || (this.wrapper.style[s.style.touchAction] = s.getTouchAction(this.options.eventPassthrough, !1))), this.wrapperOffset = s.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
        }, on: function (t, e) {
            this._events[t] || (this._events[t] = []), this._events[t].push(e)
        }, off: function (t, e) {
            if (this._events[t]) {
                var i = this._events[t].indexOf(e);
                i > -1 && this._events[t].splice(i, 1)
            }
        }, _execEvent: function (t) {
            if (this._events[t]) {
                var e = 0, i = this._events[t].length;
                if (i) for (; e < i; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
            }
        }, scrollBy: function (t, e, i, n) {
            t = this.x + t, e = this.y + e, i = i || 0, this.scrollTo(t, e, i, n)
        }, scrollTo: function (t, e, i, n) {
            n = n || s.ease.circular, this.isInTransition = this.options.useTransition && i > 0;
            var o = this.options.useTransition && n.style;
            !i || o ? (o && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(t, e)) : this._animate(t, e, i, n.fn)
        }, scrollToElement: function (t, e, n, o, r) {
            if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                var a = s.offset(t);
                a.left -= this.wrapperOffset.left, a.top -= this.wrapperOffset.top;
                var h = s.getRect(t), l = s.getRect(this.wrapper);
                !0 === n && (n = i.round(h.width / 2 - l.width / 2)), !0 === o && (o = i.round(h.height / 2 - l.height / 2)), a.left -= n || 0, a.top -= o || 0, a.left = a.left > 0 ? 0 : a.left < this.maxScrollX ? this.maxScrollX : a.left, a.top = a.top > 0 ? 0 : a.top < this.maxScrollY ? this.maxScrollY : a.top, e = void 0 === e || null === e || "auto" === e ? i.max(i.abs(this.x - a.left), i.abs(this.y - a.top)) : e, this.scrollTo(a.left, a.top, e, r)
            }
        }, _transitionTime: function (t) {
            if (this.options.useTransition) {
                t = t || 0;
                var e = s.style.transitionDuration;
                if (e) {
                    if (this.scrollerStyle[e] = t + "ms", !t && s.isBadAndroid) {
                        this.scrollerStyle[e] = "0.0001ms";
                        var i = this;
                        n(function () {
                            alert("ok2"), "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s")
                        })
                    }
                    if (this.indicators) for (var o = this.indicators.length; o--;) this.indicators[o].transitionTime(t)
                }
            }
        }, _transitionTimingFunction: function (t) {
            if (this.scrollerStyle[s.style.transitionTimingFunction] = t, this.indicators) for (var e = this.indicators.length; e--;) this.indicators[e].transitionTimingFunction(t)
        }, _translate: function (t, e) {
            if (this.options.useTransform ? this.scrollerStyle[s.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = i.round(t), e = i.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicators) for (var n = this.indicators.length; n--;) this.indicators[n].updatePosition()
        }, _initEvents: function (e) {
            var i = e ? s.removeEvent : s.addEvent, n = this.options.bindToWrapper ? this.wrapper : t;
            i(t, "orientationchange", this), i(t, "resize", this), this.options.click && i(this.wrapper, "click", this, !0), this.options.disableMouse || (i(this.wrapper, "mousedown", this), i(n, "mousemove", this), i(n, "mousecancel", this), i(n, "mouseup", this)), s.hasPointer && !this.options.disablePointer && (i(this.wrapper, s.prefixPointerEvent("pointerdown"), this), i(n, s.prefixPointerEvent("pointermove"), this), i(n, s.prefixPointerEvent("pointercancel"), this), i(n, s.prefixPointerEvent("pointerup"), this)), s.hasTouch && !this.options.disableTouch && (i(this.wrapper, "touchstart", this), i(n, "touchmove", this), i(n, "touchcancel", this), i(n, "touchend", this)), i(this.scroller, "transitionend", this), i(this.scroller, "webkitTransitionEnd", this), i(this.scroller, "oTransitionEnd", this), i(this.scroller, "MSTransitionEnd", this)
        }, getComputedPosition: function () {
            var e, i, n = t.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (e = +((n = n[s.style.transform].split(")")[0].split(", "))[12] || n[4]), i = +(n[13] || n[5])) : (e = +n.left.replace(/[^-\d.]/g, ""), i = +n.top.replace(/[^-\d.]/g, "")), {
                x: e,
                y: i
            }
        }, _initIndicators: function () {
            var t, e = this.options.interactiveScrollbars, i = "string" != typeof this.options.scrollbars, n = [],
                s = this;
            this.indicators = [], this.options.scrollbars && (this.options.scrollY && (t = {
                el: r("v", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: i,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            }, this.wrapper.appendChild(t.el), n.push(t)), this.options.scrollX && (t = {
                el: r("h", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: i,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            }, this.wrapper.appendChild(t.el), n.push(t))), this.options.indicators && (n = n.concat(this.options.indicators));
            for (var o = n.length; o--;) this.indicators.push(new a(this, n[o]));

            function h(t) {
                if (s.indicators) for (var e = s.indicators.length; e--;) t.call(s.indicators[e])
            }

            this.options.fadeScrollbars && (this.on("scrollEnd", function () {
                h(function () {
                    this.fade()
                })
            }), this.on("scrollCancel", function () {
                h(function () {
                    this.fade()
                })
            }), this.on("scrollStart", function () {
                h(function () {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart", function () {
                h(function () {
                    this.fade(1, !0)
                })
            })), this.on("refresh", function () {
                h(function () {
                    this.refresh()
                })
            }), this.on("destroy", function () {
                h(function () {
                    this.destroy()
                }), delete this.indicators
            })
        }, _initWheel: function () {
            s.addEvent(this.wrapper, "wheel", this), s.addEvent(this.wrapper, "mousewheel", this), s.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function () {
                clearTimeout(this.wheelTimeout), this.wheelTimeout = null, s.removeEvent(this.wrapper, "wheel", this), s.removeEvent(this.wrapper, "mousewheel", this), s.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        }, _wheel: function (t) {
            if (this.enabled) {
                t.preventDefault();
                var e, n, s, o, r = this;
                if (void 0 === this.wheelTimeout && r._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function () {
                    r.options.snap || r._execEvent("scrollEnd"), r.wheelTimeout = void 0
                }, 400), "deltaX" in t) 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, n = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, n = -t.deltaY); else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, n = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed; else if ("wheelDelta" in t) e = n = t.wheelDelta / 120 * this.options.mouseWheelSpeed; else {
                    if (!("detail" in t)) return;
                    e = n = -t.detail / 3 * this.options.mouseWheelSpeed
                }
                if (e *= this.options.invertWheelDirection, n *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = n, n = 0), this.options.snap) return s = this.currentPage.pageX, o = this.currentPage.pageY, e > 0 ? s-- : e < 0 && s++, n > 0 ? o-- : n < 0 && o++, void this.goToPage(s, o);
                s = this.x + i.round(this.hasHorizontalScroll ? e : 0), o = this.y + i.round(this.hasVerticalScroll ? n : 0), this.directionX = e > 0 ? -1 : e < 0 ? 1 : 0, this.directionY = n > 0 ? -1 : n < 0 ? 1 : 0, s > 0 ? s = 0 : s < this.maxScrollX && (s = this.maxScrollX), o > 0 ? o = 0 : o < this.maxScrollY && (o = this.maxScrollY), this.scrollTo(s, o, 0), this.options.probeType > 1 && this._execEvent("scroll")
            }
        }, _initSnap: function () {
            this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function () {
                var t, e, n, o, r, a, h, l = 0, c = 0, u = 0, d = this.options.snapStepX || this.wrapperWidth,
                    p = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (!0 === this.options.snap) for (n = i.round(d / 2), o = i.round(p / 2); u > -this.scrollerWidth;) {
                        for (this.pages[l] = [], t = 0, r = 0; r > -this.scrollerHeight;) this.pages[l][t] = {
                            x: i.max(u, this.maxScrollX),
                            y: i.max(r, this.maxScrollY),
                            width: d,
                            height: p,
                            cx: u - n,
                            cy: r - o
                        }, r -= p, t++;
                        u -= d, l++
                    } else for (t = (a = this.options.snap).length, e = -1; l < t; l++) h = s.getRect(a[l]), (0 === l || h.left <= s.getRect(a[l - 1]).left) && (c = 0, e++), this.pages[c] || (this.pages[c] = []), u = i.max(-h.left, this.maxScrollX), r = i.max(-h.top, this.maxScrollY), n = u - i.round(h.width / 2), o = r - i.round(h.height / 2), this.pages[c][e] = {
                        x: u,
                        y: r,
                        width: h.width,
                        height: h.height,
                        cx: n,
                        cy: o
                    }, u > this.maxScrollX && c++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 == 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }), this.on("flick", function () {
                var t = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.x - this.startX), 1e3), i.min(i.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
            })
        }, _nearestSnap: function (t, e) {
            if (!this.pages.length) return {x: 0, y: 0, pageX: 0, pageY: 0};
            var n = 0, s = this.pages.length, o = 0;
            if (i.abs(t - this.absStartX) < this.snapThresholdX && i.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
            for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); n < s; n++) if (t >= this.pages[n][0].cx) {
                t = this.pages[n][0].x;
                break
            }
            for (s = this.pages[n].length; o < s; o++) if (e >= this.pages[0][o].cy) {
                e = this.pages[0][o].y;
                break
            }
            return n == this.currentPage.pageX && ((n += this.directionX) < 0 ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1), t = this.pages[n][0].x), o == this.currentPage.pageY && ((o += this.directionY) < 0 ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1), e = this.pages[0][o].y), {
                x: t,
                y: e,
                pageX: n,
                pageY: o
            }
        }, goToPage: function (t, e, n, s) {
            s = s || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
            var o = this.pages[t][e].x, r = this.pages[t][e].y;
            n = void 0 === n ? this.options.snapSpeed || i.max(i.max(i.min(i.abs(o - this.x), 1e3), i.min(i.abs(r - this.y), 1e3)), 300) : n, this.currentPage = {
                x: o,
                y: r,
                pageX: t,
                pageY: e
            }, this.scrollTo(o, r, n, s)
        }, next: function (t, e) {
            var i = this.currentPage.pageX, n = this.currentPage.pageY;
            ++i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++), this.goToPage(i, n, t, e)
        }, prev: function (t, e) {
            var i = this.currentPage.pageX, n = this.currentPage.pageY;
            --i < 0 && this.hasVerticalScroll && (i = 0, n--), this.goToPage(i, n, t, e)
        }, _initKeys: function (e) {
            var i, n = {pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40};
            if ("object" == typeof this.options.keyBindings) for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0)); else this.options.keyBindings = {};
            for (i in n) this.options.keyBindings[i] = this.options.keyBindings[i] || n[i];
            s.addEvent(t, "keydown", this), this.on("destroy", function () {
                s.removeEvent(t, "keydown", this)
            })
        }, _key: function (t) {
            if (this.enabled) {
                var e, n = this.options.snap, o = n ? this.currentPage.pageX : this.x,
                    r = n ? this.currentPage.pageY : this.y, a = s.getTime(), h = this.keyTime || 0;
                switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(i.round(e.x), i.round(e.y)), this.isInTransition = !1), this.keyAcceleration = a - h < 200 ? i.min(this.keyAcceleration + .25, 50) : 0, t.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? o += n ? 1 : this.wrapperWidth : r += n ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? o -= n ? 1 : this.wrapperWidth : r -= n ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.end:
                        o = n ? this.pages.length - 1 : this.maxScrollX, r = n ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        o = 0, r = 0;
                        break;
                    case this.options.keyBindings.left:
                        o += n ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        r += n ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        o -= n ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        r -= n ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return
                }
                n ? this.goToPage(o, r) : (o > 0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollX && (o = this.maxScrollX, this.keyAcceleration = 0), r > 0 ? (r = 0, this.keyAcceleration = 0) : r < this.maxScrollY && (r = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(o, r, 0), this.keyTime = a)
            }
        }, _animate: function (t, e, i, o) {
            var r = this, a = this.x, h = this.y, l = s.getTime(), c = l + i;
            this.isAnimating = !0, function u() {
                var d, p, f, m = s.getTime();
                if (m >= c) return r.isAnimating = !1, r._translate(t, e), void (r.resetPosition(r.options.bounceTime) || r._execEvent("scrollEnd"));
                f = o(m = (m - l) / i), d = (t - a) * f + a, p = (e - h) * f + h, r._translate(d, p), r.isAnimating && n(u), 3 == r.options.probeType && r._execEvent("scroll")
            }()
        }, handleEvent: function (t) {
            switch (t.type) {
                case"touchstart":
                case"pointerdown":
                case"MSPointerDown":
                case"mousedown":
                    this._start(t);
                    break;
                case"touchmove":
                case"pointermove":
                case"MSPointerMove":
                case"mousemove":
                    this._move(t);
                    break;
                case"touchend":
                case"pointerup":
                case"MSPointerUp":
                case"mouseup":
                case"touchcancel":
                case"pointercancel":
                case"MSPointerCancel":
                case"mousecancel":
                    this._end(t);
                    break;
                case"orientationchange":
                case"resize":
                    this._resize();
                    break;
                case"transitionend":
                case"webkitTransitionEnd":
                case"oTransitionEnd":
                case"MSTransitionEnd":
                    this._transitionEnd(t);
                    break;
                case"wheel":
                case"DOMMouseScroll":
                case"mousewheel":
                    this._wheel(t);
                    break;
                case"keydown":
                    this._key(t);
                    break;
                case"click":
                    this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation())
            }
        }
    }, a.prototype = {
        handleEvent: function (t) {
            switch (t.type) {
                case"touchstart":
                case"pointerdown":
                case"MSPointerDown":
                case"mousedown":
                    this._start(t);
                    break;
                case"touchmove":
                case"pointermove":
                case"MSPointerMove":
                case"mousemove":
                    this._move(t);
                    break;
                case"touchend":
                case"pointerup":
                case"MSPointerUp":
                case"mouseup":
                case"touchcancel":
                case"pointercancel":
                case"MSPointerCancel":
                case"mousecancel":
                    this._end(t)
            }
        }, destroy: function () {
            this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (s.removeEvent(this.indicator, "touchstart", this), s.removeEvent(this.indicator, s.prefixPointerEvent("pointerdown"), this), s.removeEvent(this.indicator, "mousedown", this), s.removeEvent(t, "touchmove", this), s.removeEvent(t, s.prefixPointerEvent("pointermove"), this), s.removeEvent(t, "mousemove", this), s.removeEvent(t, "touchend", this), s.removeEvent(t, s.prefixPointerEvent("pointerup"), this), s.removeEvent(t, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode && this.wrapper.parentNode.removeChild(this.wrapper)
        }, _start: function (e) {
            var i = e.touches ? e.touches[0] : e;
            e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = i.pageX, this.lastPointY = i.pageY, this.startTime = s.getTime(), this.options.disableTouch || s.addEvent(t, "touchmove", this), this.options.disablePointer || s.addEvent(t, s.prefixPointerEvent("pointermove"), this), this.options.disableMouse || s.addEvent(t, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
        }, _move: function (t) {
            var e, i, n, o, r = t.touches ? t.touches[0] : t, a = s.getTime();
            this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, e = r.pageX - this.lastPointX, this.lastPointX = r.pageX, i = r.pageY - this.lastPointY, this.lastPointY = r.pageY, n = this.x + e, o = this.y + i, this._pos(n, o), 1 == this.scroller.options.probeType && a - this.startTime > 300 ? (this.startTime = a, this.scroller._execEvent("scroll")) : this.scroller.options.probeType > 1 && this.scroller._execEvent("scroll"), t.preventDefault(), t.stopPropagation()
        }, _end: function (e) {
            if (this.initiated) {
                if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), s.removeEvent(t, "touchmove", this), s.removeEvent(t, s.prefixPointerEvent("pointermove"), this), s.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
                    var n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                        o = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.scroller.x - n.x), 1e3), i.min(i.abs(this.scroller.y - n.y), 1e3)), 300);
                    this.scroller.x == n.x && this.scroller.y == n.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = n, this.scroller.scrollTo(n.x, n.y, o, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        }, transitionTime: function (t) {
            t = t || 0;
            var e = s.style.transitionDuration;
            if (e && (this.indicatorStyle[e] = t + "ms", !t && s.isBadAndroid)) {
                this.indicatorStyle[e] = "0.0001ms";
                var i = this;
                n(function () {
                    alert("ok1"), "0.0001ms" === i.indicatorStyle[e] && (i.indicatorStyle[e] = "0s")
                })
            }
        }, transitionTimingFunction: function (t) {
            this.indicatorStyle[s.style.transitionTimingFunction] = t
        }, refresh: function () {
            this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (s.addClass(this.wrapper, "iScrollBothScrollbars"), s.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (s.removeClass(this.wrapper, "iScrollBothScrollbars"), s.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px")), s.getRect(this.wrapper), this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = i.max(i.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = i.max(i.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
        }, updatePosition: function () {
            var t = this.options.listenX && i.round(this.sizeRatioX * this.scroller.x) || 0,
                e = this.options.listenY && i.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = i.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = i.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = i.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = i.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[s.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
        }, _pos: function (t, e) {
            t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY), t = this.options.listenX ? i.round(t / this.sizeRatioX) : this.scroller.x, e = this.options.listenY ? i.round(e / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, e)
        }, fade: function (t, e) {
            if (!e || this.visible) {
                clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                var i = t ? 250 : 500, n = t ? 0 : 300;
                t = t ? "1" : "0", this.wrapperStyle[s.style.transitionDuration] = i + "ms", this.fadeTimeout = setTimeout(function (t) {
                    this.wrapperStyle.opacity = t, this.visible = +t
                }.bind(this, t), n)
            }
        }
    }, o.utils = s, "undefined" != typeof module && module.exports ? module.exports = o : "function" == typeof define && define.amd ? define(function () {
        return o
    }) : t.IScroll = o
}(window, document, Math), function () {
    $.fn.glDatePicker = function (t) {
        var e = this.data("glDatePicker");
        return e ? !0 === t ? e : this : this.each(function () {
            return $(this).data("glDatePicker", new O(this, t))
        })
    }, $.fn.glDatePicker.defaults = {
        cssName: "default",
        zIndex: 1e3,
        borderSize: 1,
        calendarOffset: {x: 0, y: 1},
        showAlways: !1,
        hideOnClick: !0,
        allowMonthSelect: !0,
        allowYearSelect: !0,
        todayDate: new Date,
        selectedDate: null,
        prevArrow: "◄",
        nextArrow: "►",
        selectableDates: null,
        selectableDateRange: null,
        specialDates: null,
        selectableMonths: null,
        selectableYears: null,
        selectableDOW: null,
        monthNames: null,
        dowNames: null,
        dowOffset: 0,
        onClick: function (t, e, i) {
            t.val(i.toLocaleDateString())
        },
        onHover: function () {
        },
        onShow: function (t) {
            t.show()
        },
        onHide: function (t) {
            t.hide()
        },
        firstDate: null
    };
    var O = function () {
        function a(t, e) {
            var i = this;
            i.el = $(t);
            var n = i.el;
            i.options = $.extend(!0, {}, $.fn.glDatePicker.defaults, e);
            var s = i.options;
            i.calendar = $($.find("[gldp-el=" + n.attr("gldp-id") + " ]")), s.selectedDate = s.selectedDate || s.todayDate, s.firstDate = new Date(s.firstDate || s.selectedDate)._first(), (n.attr("gldp-id") || "").length || n.attr("gldp-id", "gldp-" + Math.round(1e10 * Math.random())), n.addClass("gldp-el").bind("click", function (t) {
                i.show(t)
            }).bind("focus", function (t) {
                i.show(t)
            }), i.calendar.length && !s.showAlways && i.calendar.hide(), $(document).bind("mouseup", function (t) {
                t = t.target;
                var e = i.calendar;
                !n.is(t) && !e.is(t) && 0 === e.has(t).length && e.is(":visible") && i.hide()
            }), i.render()
        }

        return a.prototype = {
            show: function () {
                $.each($(".gldp-el").not(this.el), function (t, e) {
                    e.length && e.options.onHide(e.calendar)
                }), this.options.onShow(this.calendar)
            }, hide: function () {
                this.options && !this.options.showAlways && this.options.onHide(this.calendar)
            }, render: function (a) {
                var g = this, d = g.el, b = g.options, c = g.calendar, j = "gldp-" + b.cssName, t = b.todayDate._val(),
                    u = t.time, h = b.borderSize + "px", y = function (t, e, i) {
                        for (var n = [], s = t; s <= e; s++) n.push(s);
                        if (i) {
                            var o = [];
                            $.each(i, function (i, n) {
                                n >= t && n <= e && 0 > o._indexOf(n) && o.push(n)
                            }), n = o.length ? o : n
                        }
                        return n.sort(), n
                    }, H = y(0, 11, b.selectableMonths), v = y(t.year - 5, t.year + 5, b.selectableYears),
                    y = y(0, 6, b.selectableDOW), z = b.dowNames || "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    t = b.monthNames || "January February March April May June July August September October November December".split(" "),
                    f = d.outerWidth(), e, k = f / 7 + b.borderSize / 7 * 6, f = f / 8 + b.borderSize / 8 * 7;
                c.length ? eval(c.data("is")) || (f = c.outerWidth(), e = c.outerHeight(), k = f / 7 + b.borderSize / 7 * 6, f = e / 8 + b.borderSize / 8 * 7) : (g.calendar = c = $("<div/>").attr("gldp-el", d.attr("gldp-id")).data("is", !0).css({
                    display: b.showAlways ? void 0 : "none",
                    zIndex: b.zIndex,
                    width: 7 * k + "px"
                }), $("body").append(c)), d.is(":visible") || c.hide(), c.removeClass().addClass(j).children().remove(), j = function () {
                    var t = d.offset();
                    c.css({
                        top: t.top + d.outerHeight() + b.calendarOffset.y + "px",
                        left: t.left + b.calendarOffset.x + "px",
                        width: d.width()
                    })
                }, $(window).resize(j), j();
                var j = {width: k + "px", height: f + "px", lineHeight: f + "px"}, f = function (t) {
                    var e = new Date(b.firstDate);
                    for (t = t || 0; e.setMonth(e.getMonth() + t), e.setDate(Math.min(1, e._max())), 0 != t;) {
                        var i = e._val(), n = i.year;
                        if (-1 != H._indexOf(i.month)) {
                            if (-1 != v._indexOf(n)) break;
                            if (n < v[0] || n > v[v.length - 1]) return null
                        }
                    }
                    return e
                }, A = f(-1), B = f(1), f = b.firstDate = f();
                e = f._val();
                var I = e.month, J = e.year, f = new Date(f);
                e = Math.abs(Math.min(6, Math.max(0, b.dowOffset)));
                var l = f.getDay() - e, l = 1 > l ? -7 - l : -l, z = z.concat(z).slice(e, e + 7);
                for (f._add(l), e = $("<div/>").addClass(" core border monyear ").css($.extend({}, j, {borderWidth: h + " 0 0 " + h})).append($("<a/>").addClass("prev-arrow" + (A ? "" : "-off")).html(b.prevArrow)).mousedown(function () {
                    return !1
                }).click(function (t) {
                    "" != b.prevArrow && A && (t.stopPropagation(), A && (b.firstDate = A, g.render()))
                }), k = 5 * k - 5 * b.borderSize + b.borderSize, k = $("<div/>").addClass(" core border monyear title").css($.extend({}, j, {
                    width: k + "px",
                    borderTopWidth: h,
                    marginLeft: "-" + h
                })), l = $("<div/>").addClass(" core border monyear ").css($.extend({}, j, {
                    marginLeft: "-" + h,
                    borderWidth: h + " " + h + " 0 0"
                })).append($("<a/>").addClass("next-arrow" + (B ? "" : "-off")).html(b.nextArrow)).mousedown(function () {
                    return !1
                }).click(function (t) {
                    "" != b.nextArrow && B && (t.stopPropagation(), B && (b.firstDate = B, g.render()))
                }), c.append(e).append(k).append(l), l = e = 0; 7 > e; e++) for (var q = 0; 7 > q; q++, l++) {
                    var C = new Date(f), n = "day", r = b.zIndex + l, w = $("<div/>");
                    if (e) {
                        C._add(q + 7 * (e - 1));
                        var p = C._val(), x = p.time, K = null, s = !0, D = function (t, e) {
                            return !0 === t.repeatYear && e.setYear(p.year), !0 === t.repeatMonth && e.setMonth(p.month), e._val()
                        };
                        w.html(p.date), b.selectableDateRange && (s = !1, $.each(b.selectableDateRange, function (t, e) {
                            var i = e.from,
                                n = (n = e.to || null) || new Date(e.from.getFullYear(), e.from.getMonth(), e.from._max());
                            i = D(e, i), n = D(e, n);
                            if (x >= i.time && x <= n.time) return s = !0
                        })), b.selectableDates && ((b.selectableDateRange && !s || s && !b.selectableDateRange) && (s = !1), $.each(b.selectableDates, function (t, e) {
                            if (D(e, e.date).time == x) return s = !0
                        })), !s || 0 > v._indexOf(p.year) || 0 > H._indexOf(p.month) || 0 > y._indexOf(p.day) ? n = "noday" : (n = "sun mon tue wed thu fri sat".split(" ")[p.day], I != p.month && (n += " outday"), u == x && (n = "today", r += 50), b.selectedDate._time() == x && (n = "selected", r += 51), b.specialDates && $.each(b.specialDates, function (t, e) {
                            D(e, e.date).time == x && (n = e.cssClass || "special", r += 52, K = e.data)
                        }), w.mousedown(function () {
                            return !1
                        }).hover(function (t) {
                            t.stopPropagation(), t = $(this).data("data"), b.onHover(d, w, t.date, t.data)
                        }).click(function (t) {
                            t.stopPropagation(), t = $(this).data("data"), b.selectedDate = b.firstDate = t.date, g.render(function () {
                                !b.showAlways && b.hideOnClick && g.hide()
                            }), b.onClick(d, $(this), t.date, t.data)
                        }))
                    } else n = "dow", w.html(z[q]), C = null;
                    $.extend(j, {
                        borderTopWidth: h,
                        borderBottomWidth: h,
                        borderLeftWidth: 0 < e || !e && !q ? h : 0,
                        borderRightWidth: 0 < e || !e && 6 == q ? h : 0,
                        marginLeft: 0 < q ? "-" + h : 0,
                        marginTop: 0 < e ? "-" + h : 0,
                        zIndex: r
                    }), w.data("data", {date: C, data: K}).addClass(" core border " + n).css(j), c.append(w)
                }
                var N = function (t) {
                        b.allowMonthSelect && (L.css({display: t ? "inline-block" : "none"}), E.css({display: t ? "none" : "inline-block"})), b.allowYearSelect && (M.css({display: t ? "none" : "inline-block"}), F.css({display: t ? "inline-block" : "none"}))
                    }, u = function () {
                        b.firstDate = new Date(F.val(), E.val(), 1), g.render()
                    }, E = $("<select/>").hide().change(u), F = $("<select/>").hide().change(u),
                    L = $("<span/>").html(t[I]).mousedown(function () {
                        return !1
                    }).click(function (t) {
                        t.stopPropagation(), N(!1)
                    }), M = $("<span/>").html(J).mousedown(function () {
                        return !1
                    }).click(function (t) {
                        t.stopPropagation(), N(!0)
                    });
                $.each(t, function (t, e) {
                    if (b.allowMonthSelect && -1 != H._indexOf(t)) {
                        var i = $("<option/>").html(e).attr("value", t);
                        t == I && i.attr("selected", "selected"), E.append(i)
                    }
                }), $.each(v, function (t, e) {
                    if (b.allowYearSelect) {
                        var i = $("<option/>").html(e).attr("value", e);
                        e == J && i.attr("selected", "selected"), F.append(i)
                    }
                }), u = $("<div/>").append(L).append(E).append(M).append(F), k.children().remove(), k.append(u), (a || function () {
                })()
            }
        }, a
    }();
    Date.prototype._clear = function () {
        return this.setHours(0), this.setMinutes(0), this.setSeconds(0), this.setMilliseconds(0), this
    }, Date.prototype._time = function () {
        return this._clear().getTime()
    }, Date.prototype._max = function () {
        return [31, 28 + (1 == new Date(this.getYear(), 1, 29).getMonth() ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][this.getMonth()]
    }, Date.prototype._add = function (t) {
        this.setDate(this.getDate() + t)
    }, Date.prototype._first = function () {
        var t = new Date(this);
        return t.setDate(1), t
    }, Date.prototype._val = function () {
        return this._clear(), {
            year: this.getFullYear(),
            month: this.getMonth(),
            date: this.getDate(),
            time: this.getTime(),
            day: this.getDay()
        }
    }, Array.prototype._indexOf = function (t) {
        return $.inArray(t, this)
    }
}(), function () {
    "use strict";

    function t(e, n) {
        var s;
        if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = e, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !t.notNeeded(e)) {
            for (var o = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], r = 0, a = o.length; r < a; r++) this[o[r]] = h(this[o[r]], this);
            i && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function (t, i, n) {
                var s = Node.prototype.removeEventListener;
                "click" === t ? s.call(e, t, i.hijacked || i, n) : s.call(e, t, i, n)
            }, e.addEventListener = function (t, i, n) {
                var s = Node.prototype.addEventListener;
                "click" === t ? s.call(e, t, i.hijacked || (i.hijacked = function (t) {
                    t.propagationStopped || i(t)
                }), n) : s.call(e, t, i, n)
            }), "function" == typeof e.onclick && (s = e.onclick, e.addEventListener("click", function (t) {
                s(t)
            }, !1), e.onclick = null)
        }

        function h(t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        }
    }

    var e = navigator.userAgent.indexOf("Windows Phone") >= 0, i = navigator.userAgent.indexOf("Android") > 0 && !e,
        n = /iP(ad|hone|od)/.test(navigator.userAgent) && !e, s = n && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        o = n && /OS [6-7]_\d/.test(navigator.userAgent), r = navigator.userAgent.indexOf("BB10") > 0;
    t.prototype.needsClick = function (t) {
        switch (t.nodeName.toLowerCase()) {
            case"button":
            case"select":
            case"textarea":
                if (t.disabled) return !0;
                break;
            case"input":
                if (n && "file" === t.type || t.disabled) return !0;
                break;
            case"label":
            case"iframe":
            case"video":
                return !0
        }
        return /\bneedsclick\b/.test(t.className)
    }, t.prototype.needsFocus = function (t) {
        switch (t.nodeName.toLowerCase()) {
            case"textarea":
                return !0;
            case"select":
                return !i;
            case"input":
                switch (t.type) {
                    case"button":
                    case"checkbox":
                    case"file":
                    case"image":
                    case"radio":
                    case"submit":
                        return !1
                }
                return !t.disabled && !t.readOnly;
            default:
                return /\bneedsfocus\b/.test(t.className)
        }
    }, t.prototype.sendClick = function (t, e) {
        var i, n;
        document.activeElement && document.activeElement !== t && document.activeElement.blur(), n = e.changedTouches[0], (i = document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, t.dispatchEvent(i)
    }, t.prototype.determineEventType = function (t) {
        return i && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
    }, t.prototype.focus = function (t) {
        var e;
        n && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
    }, t.prototype.updateScrollParent = function (t) {
        var e, i;
        if (!(e = t.fastClickScrollParent) || !e.contains(t)) {
            i = t;
            do {
                if (i.scrollHeight > i.offsetHeight) {
                    e = i, t.fastClickScrollParent = i;
                    break
                }
                i = i.parentElement
            } while (i)
        }
        e && (e.fastClickLastScrollTop = e.scrollTop)
    }, t.prototype.getTargetElementFromEventTarget = function (t) {
        return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
    }, t.prototype.onTouchStart = function (t) {
        var e, i, o;
        if (t.targetTouches.length > 1) return !0;
        if (e = this.getTargetElementFromEventTarget(t.target), i = t.targetTouches[0], n) {
            if ((o = window.getSelection()).rangeCount && !o.isCollapsed) return !0;
            if (!s) {
                if (i.identifier && i.identifier === this.lastTouchIdentifier) return t.preventDefault(), !1;
                this.lastTouchIdentifier = i.identifier, this.updateScrollParent(e)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = i.pageX, this.touchStartY = i.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
    }, t.prototype.touchHasMoved = function (t) {
        var e = t.changedTouches[0], i = this.touchBoundary;
        return Math.abs(e.pageX - this.touchStartX) > i || Math.abs(e.pageY - this.touchStartY) > i
    }, t.prototype.onTouchMove = function (t) {
        return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
    }, t.prototype.findControl = function (t) {
        return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, t.prototype.onTouchEnd = function (t) {
        var e, r, a, h, l, c = this.targetElement;
        if (!this.trackingClick) return !0;
        if (t.timeStamp - this.lastClickTime < this.tapDelay) return this.cancelNextClick = !0, !0;
        if (t.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
        if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, r = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, o && (l = t.changedTouches[0], (c = document.elementFromPoint(l.pageX - window.pageXOffset, l.pageY - window.pageYOffset) || c).fastClickScrollParent = this.targetElement.fastClickScrollParent), "label" === (a = c.tagName.toLowerCase())) {
            if (e = this.findControl(c)) {
                if (this.focus(c), i) return !1;
                c = e
            }
        } else if (this.needsFocus(c)) return t.timeStamp - r > 100 || n && window.top !== window && "input" === a ? (this.targetElement = null, !1) : (this.focus(c), this.sendClick(c, t), n && "select" === a || (this.targetElement = null, t.preventDefault()), !1);
        return !(!n || s || !(h = c.fastClickScrollParent) || h.fastClickLastScrollTop === h.scrollTop) || (this.needsClick(c) || (t.preventDefault(), this.sendClick(c, t)), !1)
    }, t.prototype.onTouchCancel = function () {
        this.trackingClick = !1, this.targetElement = null
    }, t.prototype.onMouse = function (t) {
        return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
    }, t.prototype.onClick = function (t) {
        var e;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || ((e = this.onMouse(t)) || (this.targetElement = null), e)
    }, t.prototype.destroy = function () {
        var t = this.layer;
        i && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, t.notNeeded = function (t) {
        var e, n, s;
        if (void 0 === window.ontouchstart) return !0;
        if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
            if (!i) return !0;
            if (e = document.querySelector("meta[name=viewport]")) {
                if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
                if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0
            }
        }
        if (r && (s = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1] >= 10 && s[2] >= 3 && (e = document.querySelector("meta[name=viewport]"))) {
            if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
            if (document.documentElement.scrollWidth <= window.outerWidth) return !0
        }
        return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 && (e = document.querySelector("meta[name=viewport]")) && (-1 !== e.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
    }, t.attach = function (e, i) {
        return new t(e, i)
    }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return t
    }) : "undefined" != typeof module && module.exports ? (module.exports = t.attach, module.exports.FastClick = t) : window.FastClick = t
}(), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad", swing: function (t, e, i, n, s) {
        return jQuery.easing[jQuery.easing.def](t, e, i, n, s)
    }, easeInQuad: function (t, e, i, n, s) {
        return n * (e /= s) * e + i
    }, easeOutQuad: function (t, e, i, n, s) {
        return -n * (e /= s) * (e - 2) + i
    }, easeInOutQuad: function (t, e, i, n, s) {
        return (e /= s / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
    }, easeInCubic: function (t, e, i, n, s) {
        return n * (e /= s) * e * e + i
    }, easeOutCubic: function (t, e, i, n, s) {
        return n * ((e = e / s - 1) * e * e + 1) + i
    }, easeInOutCubic: function (t, e, i, n, s) {
        return (e /= s / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
    }, easeInQuart: function (t, e, i, n, s) {
        return n * (e /= s) * e * e * e + i
    }, easeOutQuart: function (t, e, i, n, s) {
        return -n * ((e = e / s - 1) * e * e * e - 1) + i
    }, easeInOutQuart: function (t, e, i, n, s) {
        return (e /= s / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
    }, easeInQuint: function (t, e, i, n, s) {
        return n * (e /= s) * e * e * e * e + i
    }, easeOutQuint: function (t, e, i, n, s) {
        return n * ((e = e / s - 1) * e * e * e * e + 1) + i
    }, easeInOutQuint: function (t, e, i, n, s) {
        return (e /= s / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
    }, easeInSine: function (t, e, i, n, s) {
        return -n * Math.cos(e / s * (Math.PI / 2)) + n + i
    }, easeOutSine: function (t, e, i, n, s) {
        return n * Math.sin(e / s * (Math.PI / 2)) + i
    }, easeInOutSine: function (t, e, i, n, s) {
        return -n / 2 * (Math.cos(Math.PI * e / s) - 1) + i
    }, easeInExpo: function (t, e, i, n, s) {
        return 0 == e ? i : n * Math.pow(2, 10 * (e / s - 1)) + i
    }, easeOutExpo: function (t, e, i, n, s) {
        return e == s ? i + n : n * (1 - Math.pow(2, -10 * e / s)) + i
    }, easeInOutExpo: function (t, e, i, n, s) {
        return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --e)) + i
    }, easeInCirc: function (t, e, i, n, s) {
        return -n * (Math.sqrt(1 - (e /= s) * e) - 1) + i
    }, easeOutCirc: function (t, e, i, n, s) {
        return n * Math.sqrt(1 - (e = e / s - 1) * e) + i
    }, easeInOutCirc: function (t, e, i, n, s) {
        return (e /= s / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
    }, easeInElastic: function (t, e, i, n, s) {
        var o = 1.70158, r = 0, a = n;
        if (0 == e) return i;
        if (1 == (e /= s)) return i + n;
        if (r || (r = .3 * s), a < Math.abs(n)) {
            a = n;
            o = r / 4
        } else o = r / (2 * Math.PI) * Math.asin(n / a);
        return -a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - o) * (2 * Math.PI) / r) + i
    }, easeOutElastic: function (t, e, i, n, s) {
        var o = 1.70158, r = 0, a = n;
        if (0 == e) return i;
        if (1 == (e /= s)) return i + n;
        if (r || (r = .3 * s), a < Math.abs(n)) {
            a = n;
            o = r / 4
        } else o = r / (2 * Math.PI) * Math.asin(n / a);
        return a * Math.pow(2, -10 * e) * Math.sin((e * s - o) * (2 * Math.PI) / r) + n + i
    }, easeInOutElastic: function (t, e, i, n, s) {
        var o = 1.70158, r = 0, a = n;
        if (0 == e) return i;
        if (2 == (e /= s / 2)) return i + n;
        if (r || (r = s * (.3 * 1.5)), a < Math.abs(n)) {
            a = n;
            o = r / 4
        } else o = r / (2 * Math.PI) * Math.asin(n / a);
        return e < 1 ? a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * s - o) * (2 * Math.PI) / r) * -.5 + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * s - o) * (2 * Math.PI) / r) * .5 + n + i
    }, easeInBack: function (t, e, i, n, s, o) {
        return void 0 == o && (o = 1.70158), n * (e /= s) * e * ((o + 1) * e - o) + i
    }, easeOutBack: function (t, e, i, n, s, o) {
        return void 0 == o && (o = 1.70158), n * ((e = e / s - 1) * e * ((o + 1) * e + o) + 1) + i
    }, easeInOutBack: function (t, e, i, n, s, o) {
        return void 0 == o && (o = 1.70158), (e /= s / 2) < 1 ? n / 2 * (e * e * ((1 + (o *= 1.525)) * e - o)) + i : n / 2 * ((e -= 2) * e * ((1 + (o *= 1.525)) * e + o) + 2) + i
    }, easeInBounce: function (t, e, i, n, s) {
        return n - jQuery.easing.easeOutBounce(t, s - e, 0, n, s) + i
    }, easeOutBounce: function (t, e, i, n, s) {
        return (e /= s) < 1 / 2.75 ? n * (7.5625 * e * e) + i : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
    }, easeInOutBounce: function (t, e, i, n, s) {
        return e < s / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, s) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - s, 0, n, s) + .5 * n + i
    }
}), function (t) {
    t.fn.shorten = function (e) {
        "use strict";
        var i = {
            showChars: 100,
            minHideChars: 10,
            ellipsesText: "...",
            moreText: "more",
            lessText: "less",
            onLess: function () {
            },
            onMore: function () {
            },
            errMsg: null,
            force: !1
        };
        return e && t.extend(i, e), !(t(this).data("jquery.shorten") && !i.force) && (t(this).data("jquery.shorten", !0), t(document).off("click", ".morelink"), t(document).on({
            click: function () {
                var e = t(this);
                return e.hasClass("less") ? (e.removeClass("less"), e.html(i.moreText), e.parent().prev().animate({height: "0%"}, 0, "linear", function () {
                    e.parent().prev().prev().show()
                }).hide(0, function () {
                    i.onLess(), t("body,html").stop(!0).animate({scrollTop: windowHeight / 1.5 + 1}, 600, "easeOutQuint")
                })) : (e.addClass("less"), e.html(i.lessText), e.parent().prev().animate({height: "100%"}, 0, "linear", function () {
                    e.parent().prev().prev().hide()
                }).show(0, function () {
                    i.onMore(), t("body,html").stop(!0).animate({scrollTop: e.parent().prev().position().top - 10}, 600, "easeOutQuint")
                })), !1
            }
        }, ".morelink"), this.each(function () {
            var e = t(this), n = e.html();
            if (e.text().length > i.showChars + i.minHideChars) {
                var s = n.substr(0, i.showChars);
                if (s.indexOf("<") >= 0) {
                    for (var o = !1, r = "", a = 0, h = [], l = null, c = 0, u = 0; u <= i.showChars; c++) if ("<" != n[c] || o || (o = !0, "/" == (l = n.substring(c + 1, n.indexOf(">", c)))[0] ? l != "/" + h[0] ? i.errMsg = "ERROR en HTML: the top of the stack should be the tag that closes" : h.shift() : "br" != l.toLowerCase() && h.unshift(l)), o && ">" == n[c] && (o = !1), o) r += n.charAt(c); else if (u++, a <= i.showChars) r += n.charAt(c), a++; else if (h.length > 0) {
                        for (j = 0; j < h.length; j++) r += "</" + h[j] + ">";
                        break
                    }
                    s = t("<div/>").html(r + '<span class="ellip">' + i.ellipsesText + "</span>").html()
                } else s += i.ellipsesText;
                var d = '<div class="shortcontent">' + s + '</div><div class="allcontent">' + n + '</div><span><a href="javascript://nop/" class="morelink">' + i.moreText + "</a></span>";
                e.html(d), e.find(".allcontent").hide(), t(".shortcontent p:last", e).css("margin-bottom", 0)
            }
        }))
    }
}(jQuery), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = function (e, i) {
        return void 0 === i && (i = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), t(i), i
    } : t(jQuery)
}(function (t) {
    t.fn.imageScale = function (i) {
        return this.each(function () {
            var n = this, s = t(this), o = s.data("imageScale"), r = "IMG" === this.tagName ? s : s.find("img");
            if (o) "string" == typeof i ? o[i]() : "object" == typeof i ? o[i.method || "scale"](!1, i) : o.scale(); else {
                var a = r[0].complete, h = t.extend({}, t.fn.imageScale.defaults, "object" == typeof i && i),
                    l = function () {
                        s.data("imageScale", o = new e(n, h)), o.scale(!0, h)
                    };
                a ? l.apply(s[0]) : r.on("load", l).attr("src", r.attr("src"))
            }
        })
    }, t.fn.imageScale.defaults = {
        scale: "best-fill",
        align: "center",
        parent: null,
        hideParentOverflow: !0,
        fadeInDuration: 0,
        rescaleOnResize: !1,
        didScale: function (t, e) {
        },
        logLevel: 0
    };
    var e = function (e, i) {
        var n = this;
        n.options = i, n.element = e;
        var s = n.$element = t(e), o = n.$img = "IMG" === e.tagName ? s : s.find("img"), r = n.img = o[0];
        n.src = o.attr("src"), n.imgWidth = r.naturalWidth || r.width, n.imgHeight = r.naturalHeight || r.height, s = n.$parent = i.parent ? i.parent : t(s.parent()[0]), n.parent = s[0], "static" === s.css("position") && s.css("position", "relative"), i.rescaleOnResize && t(window).resize(function (t) {
            n.scheduleScale()
        })
    };
    t.fn.imageScale.Constructor = e, e.prototype = {
        NONE: "none",
        FILL: "fill",
        BEST_FILL: "best-fill",
        BEST_FIT: "best-fit",
        BEST_FIT_DOWN_ONLY: "best-fit-down",
        ALIGN_LEFT: "left",
        ALIGN_RIGHT: "right",
        ALIGN_CENTER: "center",
        ALIGN_TOP: "top",
        ALIGN_BOTTOM: "bottom",
        ALIGN_TOP_LEFT: "top-left",
        ALIGN_TOP_RIGHT: "top-right",
        ALIGN_BOTTOM_LEFT: "bottom-left",
        ALIGN_BOTTOM_RIGHT: "bottom-right",
        constructor: e,
        element: null,
        options: null,
        scale: function (t, e) {
            if (!this._isDestroyed && !1 !== this._canScale) {
                var i = this, n = this.options, s = this.$parent, o = this.element, r = this.$element, a = this.$img;
                if (t) n.hideParentOverflow && s.css({overflow: "hidden"}); else if (this.src !== a.attr("src")) return this.destroy(), r.data("imageScale", null), void r.imageScale(n);
                if (this._didScheduleScale = !1, !n.rescaleOnResize || e || this._needUpdate(this.parent)) {
                    (a = (e = e || {}).transition) && (this._canScale = !1, r.css("transition", "all " + a + "ms"), setTimeout(function () {
                        i._canScale = null, r.css("transition", "null")
                    }, a));
                    a = e.destWidth ? e.destWidth : s.outerWidth();
                    var h = e.destHeight ? e.destHeight : s.outerHeight(),
                        l = e.destWidth ? e.destWidth : s.innerWidth(),
                        c = e.destHeight ? e.destHeight : s.innerHeight(),
                        u = (s = a - l, l = h - c, c = r.attr("data-scale"), r.attr("data-align")),
                        d = (c = c || n.scale, u || n.align);
                    u = n.fadeInDuration;
                    if (c) {
                        this._cacheDestWidth === a && this._cacheDestHeight === h && 2 < n.logLevel && console.log("imageScale - DEBUG NOTICE: The parent size hasn't changed: dest width: '" + a + "' - dest height: '" + h + "'.", o);
                        var p = this.imgWidth, f = this.imgHeight;
                        a && h && p && f ? (this._cacheDestWidth = a, this._cacheDestHeight = h, o = this._innerFrameForSize(c, d, p, f, a, h), s && (o.x -= s / 2), l && (o.y -= l / 2), r.css({
                            position: "absolute",
                            top: o.y + "px",
                            left: o.x + "px",
                            width: o.width + "px",
                            height: o.height + "px",
                            "max-width": "none"
                        }), t && u && (r.css({display: "none"}), r.fadeIn(u)), n.didScale.call(this, t, e)) : 0 < n.logLevel && console.error("imageScale - DEBUG ERROR: The dimensions are incorrect: source width: '" + p + "' - source height: '" + f + "' - dest width: '" + a + "' - dest height: '" + h + "'.", o)
                    } else 2 < n.logLevel && console.log("imageScale - DEBUG NOTICE: The scale property is null.", o)
                }
            }
        },
        destroy: function () {
            this._isDestroyed = !0, this.$element.removeData("imageScale")
        },
        _innerFrameForSize: function (t, e, i, n, s, o) {
            var r, a, h;
            if (h = {x: 0, y: 0, width: s, height: o}, t === this.FILL) return h;
            switch (r = s / i, a = o / n, t) {
                case this.BEST_FIT_DOWN_ONLY:
                    t !== this.BEST_FIT_DOWN_ONLY && 1 < this.options.logLevel && console.warn("imageScale - DEBUG WARNING: The scale '" + t + "' was not understood."), t = i > s || n > o ? r < a ? r : a : 1;
                    break;
                case this.BEST_FIT:
                    t = r < a ? r : a;
                    break;
                case this.NONE:
                    t = 1;
                    break;
                default:
                    t = r > a ? r : a
            }
            switch (i *= t, n *= t, h.width = Math.round(i), h.height = Math.round(n), e) {
                case this.ALIGN_LEFT:
                    h.x = 0, h.y = o / 2 - n / 2;
                    break;
                case this.ALIGN_RIGHT:
                    h.x = s - i, h.y = o / 2 - n / 2;
                    break;
                case this.ALIGN_TOP:
                    h.x = s / 2 - i / 2, h.y = 0;
                    break;
                case this.ALIGN_BOTTOM:
                    h.x = s / 2 - i / 2, h.y = o - n;
                    break;
                case this.ALIGN_TOP_LEFT:
                    h.x = 0, h.y = 0;
                    break;
                case this.ALIGN_TOP_RIGHT:
                    h.x = s - i, h.y = 0;
                    break;
                case this.ALIGN_BOTTOM_LEFT:
                    h.x = 0, h.y = o - n;
                    break;
                case this.ALIGN_BOTTOM_RIGHT:
                    h.x = s - i, h.y = o - n;
                    break;
                default:
                    e !== this.ALIGN_CENTER && 1 < this.options.logLevel && console.warn("imageScale - DEBUG WARNING: The align '" + e + "' was not understood."), h.x = s / 2 - i / 2, h.y = o / 2 - n / 2
            }
            return h
        },
        _needUpdate: function (t) {
            return t = t.clientHeight + " " + t.clientWidth, this._lastParentSize !== t && (this._lastParentSize = t, !0)
        },
        scheduleScale: function () {
            if (!this._didScheduleScale) if (window.requestAnimationFrame) {
                var t = this;
                this._didScheduleScale = !0, requestAnimationFrame(function () {
                    setTimeout(function () {
                        t.scale()
                    }, 0)
                })
            } else this.scale()
        }
    }
});