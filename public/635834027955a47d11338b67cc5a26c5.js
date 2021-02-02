if (function(t, e) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return e(t) } : e(t) }("undefined" != typeof window ? window : this, function(t, e) {
        "use strict";

        function n(t, e) {
            e = e || nt;
            var n = e.createElement("script");
            n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
        }

        function i(t) {
            var e = !!t && "length" in t && t.length,
                n = gt.type(t);
            return "function" !== n && !gt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function o(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() }

        function r(t, e, n) { return gt.isFunction(e) ? gt.grep(t, function(t, i) { return !!e.call(t, i, t) !== n }) : e.nodeType ? gt.grep(t, function(t) { return t === e !== n }) : "string" != typeof e ? gt.grep(t, function(t) { return st.call(e, t) > -1 !== n }) : Et.test(e) ? gt.filter(e, t, n) : (e = gt.filter(e, t), gt.grep(t, function(t) { return st.call(e, t) > -1 !== n && 1 === t.nodeType })) }

        function a(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function s(t) { var e = {}; return gt.each(t.match(Dt) || [], function(t, n) { e[n] = !0 }), e }

        function l(t) { return t }

        function c(t) { throw t }

        function u(t, e, n, i) { var o; try { t && gt.isFunction(o = t.promise) ? o.call(t).done(e).fail(n) : t && gt.isFunction(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i)) } catch (t) { n.apply(void 0, [t]) } }

        function d() { nt.removeEventListener("DOMContentLoaded", d), t.removeEventListener("load", d), gt.ready() }

        function f() { this.expando = gt.expando + f.uid++ }

        function p(t) { return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ht.test(t) ? JSON.parse(t) : t) }

        function h(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(Mt, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                    try { n = p(n) } catch (o) {}
                    Ft.set(t, e, n)
                } else n = void 0;
            return n
        }

        function g(t, e, n, i) {
            var o, r = 1,
                a = 20,
                s = i ? function() { return i.cur() } : function() { return gt.css(t, e, "") },
                l = s(),
                c = n && n[3] || (gt.cssNumber[e] ? "" : "px"),
                u = (gt.cssNumber[e] || "px" !== c && +l) && _t.exec(gt.css(t, e));
            if (u && u[3] !== c) {
                c = c || u[3], n = n || [], u = +l || 1;
                do r = r || ".5", u /= r, gt.style(t, e, u + c); while (r !== (r = s() / l) && 1 !== r && --a)
            }
            return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
        }

        function m(t) {
            var e, n = t.ownerDocument,
                i = t.nodeName,
                o = Ut[i];
            return o ? o : (e = n.body.appendChild(n.createElement(i)), o = gt.css(e, "display"), e.parentNode.removeChild(e), "none" === o && (o = "block"), Ut[i] = o, o)
        }

        function v(t, e) { for (var n, i, o = [], r = 0, a = t.length; r < a; r++) i = t[r], i.style && (n = i.style.display, e ? ("none" === n && (o[r] = Rt.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && zt(i) && (o[r] = m(i))) : "none" !== n && (o[r] = "none", Rt.set(i, "display", n))); for (r = 0; r < a; r++) null != o[r] && (t[r].style.display = o[r]); return t }

        function y(t, e) { var n; return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && o(t, e) ? gt.merge([t], n) : n }

        function b(t, e) { for (var n = 0, i = t.length; n < i; n++) Rt.set(t[n], "globalEval", !e || Rt.get(e[n], "globalEval")) }

        function w(t, e, n, i, o) {
            for (var r, a, s, l, c, u, d = e.createDocumentFragment(), f = [], p = 0, h = t.length; p < h; p++)
                if (r = t[p], r || 0 === r)
                    if ("object" === gt.type(r)) gt.merge(f, r.nodeType ? [r] : r);
                    else if (Kt.test(r)) {
                for (a = a || d.appendChild(e.createElement("div")), s = (Xt.exec(r) || ["", ""])[1].toLowerCase(), l = Gt[s] || Gt._default, a.innerHTML = l[1] + gt.htmlPrefilter(r) + l[2], u = l[0]; u--;) a = a.lastChild;
                gt.merge(f, a.childNodes), a = d.firstChild, a.textContent = ""
            } else f.push(e.createTextNode(r));
            for (d.textContent = "", p = 0; r = f[p++];)
                if (i && gt.inArray(r, i) > -1) o && o.push(r);
                else if (c = gt.contains(r.ownerDocument, r), a = y(d.appendChild(r), "script"), c && b(a), n)
                for (u = 0; r = a[u++];) Qt.test(r.type || "") && n.push(r);
            return d
        }

        function x() { return !0 }

        function T() { return !1 }

        function C() { try { return nt.activeElement } catch (t) {} }

        function k(t, e, n, i, o, r) {
            var a, s;
            if ("object" == typeof e) { "string" != typeof n && (i = i || n, n = void 0); for (s in e) k(t, s, n, i, e[s], r); return t }
            if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = T;
            else if (!o) return t;
            return 1 === r && (a = o, o = function(t) { return gt().off(t), a.apply(this, arguments) }, o.guid = a.guid || (a.guid = gt.guid++)), t.each(function() { gt.event.add(this, e, o, i, n) })
        }

        function E(t, e) { return o(t, "table") && o(11 !== e.nodeType ? e : e.firstChild, "tr") ? gt(">tbody", t)[0] || t : t }

        function S(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }

        function $(t) { var e = oe.exec(t.type); return e ? t.type = e[1] : t.removeAttribute("type"), t }

        function j(t, e) {
            var n, i, o, r, a, s, l, c;
            if (1 === e.nodeType) {
                if (Rt.hasData(t) && (r = Rt.access(t), a = Rt.set(e, r), c = r.events)) {
                    delete a.handle, a.events = {};
                    for (o in c)
                        for (n = 0, i = c[o].length; n < i; n++) gt.event.add(e, o, c[o][n])
                }
                Ft.hasData(t) && (s = Ft.access(t), l = gt.extend({}, s), Ft.set(e, l))
            }
        }

        function A(t, e) { var n = e.nodeName.toLowerCase(); "input" === n && Vt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue) }

        function O(t, e, i, o) {
            e = rt.apply([], e);
            var r, a, s, l, c, u, d = 0,
                f = t.length,
                p = f - 1,
                h = e[0],
                g = gt.isFunction(h);
            if (g || f > 1 && "string" == typeof h && !pt.checkClone && ie.test(h)) return t.each(function(n) {
                var r = t.eq(n);
                g && (e[0] = h.call(this, n, r.html())), O(r, e, i, o)
            });
            if (f && (r = w(e, t[0].ownerDocument, !1, t, o), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || o)) {
                for (s = gt.map(y(r, "script"), S), l = s.length; d < f; d++) c = r, d !== p && (c = gt.clone(c, !0, !0), l && gt.merge(s, y(c, "script"))), i.call(t[d], c, d);
                if (l)
                    for (u = s[s.length - 1].ownerDocument, gt.map(s, $), d = 0; d < l; d++) c = s[d], Qt.test(c.type || "") && !Rt.access(c, "globalEval") && gt.contains(u, c) && (c.src ? gt._evalUrl && gt._evalUrl(c.src) : n(c.textContent.replace(re, ""), u))
            }
            return t
        }

        function D(t, e, n) { for (var i, o = e ? gt.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || gt.cleanData(y(i)), i.parentNode && (n && gt.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i)); return t }

        function N(t, e, n) { var i, o, r, a, s = t.style; return n = n || le(t), n && (a = n.getPropertyValue(e) || n[e], "" !== a || gt.contains(t.ownerDocument, t) || (a = gt.style(t, e)), !pt.pixelMarginRight() && se.test(a) && ae.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 !== a ? a + "" : a }

        function I(t, e) { return { get: function() { return t() ? void delete this.get : (this.get = e).apply(this, arguments) } } }

        function L(t) {
            if (t in he) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = pe.length; n--;)
                if (t = pe[n] + e, t in he) return t
        }

        function P(t) { var e = gt.cssProps[t]; return e || (e = gt.cssProps[t] = L(t) || t), e }

        function R(t, e, n) { var i = _t.exec(e); return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e }

        function F(t, e, n, i, o) { var r, a = 0; for (r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; r < 4; r += 2) "margin" === n && (a += gt.css(t, n + Wt[r], !0, o)), i ? ("content" === n && (a -= gt.css(t, "padding" + Wt[r], !0, o)), "margin" !== n && (a -= gt.css(t, "border" + Wt[r] + "Width", !0, o))) : (a += gt.css(t, "padding" + Wt[r], !0, o), "padding" !== n && (a += gt.css(t, "border" + Wt[r] + "Width", !0, o))); return a }

        function H(t, e, n) {
            var i, o = le(t),
                r = N(t, e, o),
                a = "border-box" === gt.css(t, "boxSizing", !1, o);
            return se.test(r) ? r : (i = a && (pt.boxSizingReliable() || r === t.style[e]), "auto" === r && (r = t["offset" + e[0].toUpperCase() + e.slice(1)]), r = parseFloat(r) || 0, r + F(t, e, n || (a ? "border" : "content"), i, o) + "px")
        }

        function M(t, e, n, i, o) { return new M.prototype.init(t, e, n, i, o) }

        function q() { me && (nt.hidden === !1 && t.requestAnimationFrame ? t.requestAnimationFrame(q) : t.setTimeout(q, gt.fx.interval), gt.fx.tick()) }

        function _() { return t.setTimeout(function() { ge = void 0 }), ge = gt.now() }

        function W(t, e) {
            var n, i = 0,
                o = { height: t };
            for (e = e ? 1 : 0; i < 4; i += 2 - e) n = Wt[i], o["margin" + n] = o["padding" + n] = t;
            return e && (o.opacity = o.width = t), o
        }

        function z(t, e, n) {
            for (var i, o = (V.tweeners[e] || []).concat(V.tweeners["*"]), r = 0, a = o.length; r < a; r++)
                if (i = o[r].call(n, e, t)) return i
        }

        function B(t, e, n) {
            var i, o, r, a, s, l, c, u, d = "width" in e || "height" in e,
                f = this,
                p = {},
                h = t.style,
                g = t.nodeType && zt(t),
                m = Rt.get(t, "fxshow");
            n.queue || (a = gt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, f.always(function() { f.always(function() { a.unqueued--, gt.queue(t, "fx").length || a.empty.fire() }) }));
            for (i in e)
                if (o = e[i], ve.test(o)) {
                    if (delete e[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    p[i] = m && m[i] || gt.style(t, i)
                }
            if (l = !gt.isEmptyObject(e), l || !gt.isEmptyObject(p)) { d && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = m && m.display, null == c && (c = Rt.get(t, "display")), u = gt.css(t, "display"), "none" === u && (c ? u = c : (v([t], !0), c = t.style.display || c, u = gt.css(t, "display"), v([t]))), ("inline" === u || "inline-block" === u && null != c) && "none" === gt.css(t, "float") && (l || (f.done(function() { h.display = c }), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), l = !1; for (i in p) l || (m ? "hidden" in m && (g = m.hidden) : m = Rt.access(t, "fxshow", { display: c }), r && (m.hidden = !g), g && v([t], !0), f.done(function() { g || v([t]), Rt.remove(t, "fxshow"); for (i in p) gt.style(t, i, p[i]) })), l = z(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0)) }
        }

        function U(t, e) {
            var n, i, o, r, a;
            for (n in t)
                if (i = gt.camelCase(n), o = e[i], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), a = gt.cssHooks[i], a && "expand" in a) { r = a.expand(r), delete t[i]; for (n in r) n in t || (t[n] = r[n], e[n] = o) } else e[i] = o
        }

        function V(t, e, n) {
            var i, o, r = 0,
                a = V.prefilters.length,
                s = gt.Deferred().always(function() { delete l.elem }),
                l = function() { if (o) return !1; for (var e = ge || _(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(r); return s.notifyWith(t, [c, r, n]), r < 1 && l ? n : (l || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1) },
                c = s.promise({
                    elem: t,
                    props: gt.extend({}, e),
                    opts: gt.extend(!0, { specialEasing: {}, easing: gt.easing._default }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: ge || _(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) { var i = gt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing); return c.tweens.push(i), i },
                    stop: function(e) {
                        var n = 0,
                            i = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n < i; n++) c.tweens[n].run(1);
                        return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this
                    }
                }),
                u = c.props;
            for (U(u, c.opts.specialEasing); r < a; r++)
                if (i = V.prefilters[r].call(c, t, u, c.opts)) return gt.isFunction(i.stop) && (gt._queueHooks(c.elem, c.opts.queue).stop = gt.proxy(i.stop, i)), i;
            return gt.map(u, z, c), gt.isFunction(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), gt.fx.timer(gt.extend(l, { elem: t, anim: c, queue: c.opts.queue })), c
        }

        function X(t) { var e = t.match(Dt) || []; return e.join(" ") }

        function Q(t) { return t.getAttribute && t.getAttribute("class") || "" }

        function G(t, e, n, i) {
            var o;
            if (Array.isArray(e)) gt.each(e, function(e, o) { n || je.test(t) ? i(t, o) : G(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i) });
            else if (n || "object" !== gt.type(e)) i(t, e);
            else
                for (o in e) G(t + "[" + o + "]", e[o], n, i)
        }

        function K(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0,
                    r = e.toLowerCase().match(Dt) || [];
                if (gt.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function J(t, e, n, i) {
            function o(s) { var l; return r[s] = !0, gt.each(t[s] || [], function(t, s) { var c = s(e, n, i); return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1) }), l }
            var r = {},
                a = t === qe;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function Y(t, e) { var n, i, o = gt.ajaxSettings.flatOptions || {}; for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]); return i && gt.extend(!0, t, i), t }

        function Z(t, e, n) {
            for (var i, o, r, a, s = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (o in s)
                    if (s[o] && s[o].test(i)) { l.unshift(o); break }
            if (l[0] in n) r = l[0];
            else {
                for (o in n) {
                    if (!l[0] || t.converters[o + " " + l[0]]) { r = o; break }
                    a || (a = o)
                }
                r = r || a
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
        }

        function tt(t, e, n, i) {
            var o, r, a, s, l, c = {},
                u = t.dataTypes.slice();
            if (u[1])
                for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
            for (r = u.shift(); r;)
                if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (a = c[l + " " + r] || c["* " + r], !a)
                    for (o in c)
                        if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) { a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0], u.unshift(s[1])); break }
                if (a !== !0)
                    if (a && t["throws"]) e = a(e);
                    else try { e = a(e) } catch (d) { return { state: "parsererror", error: a ? d : "No conversion from " + l + " to " + r } }
            }
            return { state: "success", data: e }
        }
        var et = [],
            nt = t.document,
            it = Object.getPrototypeOf,
            ot = et.slice,
            rt = et.concat,
            at = et.push,
            st = et.indexOf,
            lt = {},
            ct = lt.toString,
            ut = lt.hasOwnProperty,
            dt = ut.toString,
            ft = dt.call(Object),
            pt = {},
            ht = "3.2.1",
            gt = function(t, e) { return new gt.fn.init(t, e) },
            mt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            vt = /^-ms-/,
            yt = /-([a-z])/g,
            bt = function(t, e) { return e.toUpperCase() };
        gt.fn = gt.prototype = {
            jquery: ht,
            constructor: gt,
            length: 0,
            toArray: function() { return ot.call(this) },
            get: function(t) { return null == t ? ot.call(this) : t < 0 ? this[t + this.length] : this[t] },
            pushStack: function(t) { var e = gt.merge(this.constructor(), t); return e.prevObject = this, e },
            each: function(t) { return gt.each(this, t) },
            map: function(t) { return this.pushStack(gt.map(this, function(e, n) { return t.call(e, n, e) })) },
            slice: function() { return this.pushStack(ot.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(t) {
                var e = this.length,
                    n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            },
            end: function() { return this.prevObject || this.constructor() },
            push: at,
            sort: et.sort,
            splice: et.splice
        }, gt.extend = gt.fn.extend = function() {
            var t, e, n, i, o, r, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || gt.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (t = arguments[s]))
                    for (e in t) n = a[e], i = t[e], a !== i && (c && i && (gt.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && gt.isPlainObject(n) ? n : {}, a[e] = gt.extend(c, r, i)) : void 0 !== i && (a[e] = i));
            return a
        }, gt.extend({
            expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) { throw new Error(t) },
            noop: function() {},
            isFunction: function(t) { return "function" === gt.type(t) },
            isWindow: function(t) { return null != t && t === t.window },
            isNumeric: function(t) { var e = gt.type(t); return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t)) },
            isPlainObject: function(t) { var e, n; return !(!t || "[object Object]" !== ct.call(t)) && (!(e = it(t)) || (n = ut.call(e, "constructor") && e.constructor, "function" == typeof n && dt.call(n) === ft)) },
            isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 },
            type: function(t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ct.call(t)] || "object" : typeof t },
            globalEval: function(t) { n(t) },
            camelCase: function(t) { return t.replace(vt, "ms-").replace(yt, bt) },
            each: function(t, e) {
                var n, o = 0;
                if (i(t))
                    for (n = t.length; o < n && e.call(t[o], o, t[o]) !== !1; o++);
                else
                    for (o in t)
                        if (e.call(t[o], o, t[o]) === !1) break; return t
            },
            trim: function(t) { return null == t ? "" : (t + "").replace(mt, "") },
            makeArray: function(t, e) { var n = e || []; return null != t && (i(Object(t)) ? gt.merge(n, "string" == typeof t ? [t] : t) : at.call(n, t)), n },
            inArray: function(t, e, n) { return null == e ? -1 : st.call(e, t, n) },
            merge: function(t, e) { for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i]; return t.length = o, t },
            grep: function(t, e, n) { for (var i, o = [], r = 0, a = t.length, s = !n; r < a; r++) i = !e(t[r], r), i !== s && o.push(t[r]); return o },
            map: function(t, e, n) {
                var o, r, a = 0,
                    s = [];
                if (i(t))
                    for (o = t.length; a < o; a++) r = e(t[a], a, n), null != r && s.push(r);
                else
                    for (a in t) r = e(t[a], a, n), null != r && s.push(r);
                return rt.apply([], s)
            },
            guid: 1,
            proxy: function(t, e) { var n, i, o; if ("string" == typeof e && (n = t[e], e = t, t = n), gt.isFunction(t)) return i = ot.call(arguments, 2), o = function() { return t.apply(e || this, i.concat(ot.call(arguments))) }, o.guid = t.guid = t.guid || gt.guid++, o },
            now: Date.now,
            support: pt
        }), "function" == typeof Symbol && (gt.fn[Symbol.iterator] = et[Symbol.iterator]), gt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) { lt["[object " + e + "]"] = e.toLowerCase() });
        var wt = function(t) {
            function e(t, e, n, i) {
                var o, r, a, s, l, c, u, f = e && e.ownerDocument,
                    h = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return n;
                if (!i && ((e ? e.ownerDocument || e : _) !== I && N(e), e = e || I, P)) {
                    if (11 !== h && (l = vt.exec(t)))
                        if (o = l[1]) { if (9 === h) { if (!(a = e.getElementById(o))) return n; if (a.id === o) return n.push(a), n } else if (f && (a = f.getElementById(o)) && M(e, a) && a.id === o) return n.push(a), n } else { if (l[2]) return Y.apply(n, e.getElementsByTagName(t)), n; if ((o = l[3]) && T.getElementsByClassName && e.getElementsByClassName) return Y.apply(n, e.getElementsByClassName(o)), n }
                    if (T.qsa && !V[t + " "] && (!R || !R.test(t))) {
                        if (1 !== h) f = e, u = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((s = e.getAttribute("id")) ? s = s.replace(xt, Tt) : e.setAttribute("id", s = q), c = S(t), r = c.length; r--;) c[r] = "#" + s + " " + p(c[r]);
                            u = c.join(","), f = yt.test(t) && d(e.parentNode) || e
                        }
                        if (u) try { return Y.apply(n, f.querySelectorAll(u)), n } catch (g) {} finally { s === q && e.removeAttribute("id") }
                    }
                }
                return j(t.replace(st, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) { return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = i }
                var e = [];
                return t
            }

            function i(t) { return t[q] = !0, t }

            function o(t) { var e = I.createElement("fieldset"); try { return !!t(e) } catch (n) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }

            function r(t, e) { for (var n = t.split("|"), i = n.length; i--;) C.attrHandle[n[i]] = e }

            function a(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function s(t) { return function(e) { var n = e.nodeName.toLowerCase(); return "input" === n && e.type === t } }

            function l(t) { return function(e) { var n = e.nodeName.toLowerCase(); return ("input" === n || "button" === n) && e.type === t } }

            function c(t) { return function(e) { return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && kt(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

            function u(t) { return i(function(e) { return e = +e, i(function(n, i) { for (var o, r = t([], n.length, e), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o])) }) }) }

            function d(t) { return t && "undefined" != typeof t.getElementsByTagName && t }

            function f() {}

            function p(t) { for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value; return i }

            function h(t, e, n) {
                var i = e.dir,
                    o = e.next,
                    r = o || i,
                    a = n && "parentNode" === r,
                    s = z++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || a) return t(e, n, o);
                    return !1
                } : function(e, n, l) {
                    var c, u, d, f = [W, s];
                    if (l) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || a) && t(e, n, l)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || a)
                                if (d = e[q] || (e[q] = {}), u = d[e.uniqueID] || (d[e.uniqueID] = {}), o && o === e.nodeName.toLowerCase()) e = e[i] || e;
                                else { if ((c = u[r]) && c[0] === W && c[1] === s) return f[2] = c[2]; if (u[r] = f, f[2] = t(e, n, l)) return !0 } return !1
                }
            }

            function g(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) { for (var o = 0, r = n.length; o < r; o++) e(t, n[o], i); return i }

            function v(t, e, n, i, o) { for (var r, a = [], s = 0, l = t.length, c = null != e; s < l; s++)(r = t[s]) && (n && !n(r, i, o) || (a.push(r), c && e.push(s))); return a }

            function y(t, e, n, o, r, a) {
                return o && !o[q] && (o = y(o)), r && !r[q] && (r = y(r, a)), i(function(i, a, s, l) {
                    var c, u, d, f = [],
                        p = [],
                        h = a.length,
                        g = i || m(e || "*", s.nodeType ? [s] : s, []),
                        y = !t || !i && e ? g : v(g, f, t, s, l),
                        b = n ? r || (i ? t : h || o) ? [] : a : y;
                    if (n && n(y, b, s, l), o)
                        for (c = v(b, p), o(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                                r(null, b = [], c, l)
                            }
                            for (u = b.length; u--;)(d = b[u]) && (c = r ? tt(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
                        }
                    } else b = v(b === a ? b.splice(h, b.length) : b), r ? r(null, a, b, l) : Y.apply(a, b)
                })
            }

            function b(t) {
                for (var e, n, i, o = t.length, r = C.relative[t[0].type], a = r || C.relative[" "], s = r ? 1 : 0, l = h(function(t) { return t === e }, a, !0), c = h(function(t) { return tt(e, t) > -1 }, a, !0), u = [function(t, n, i) { var o = !r && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i)); return e = null, o }]; s < o; s++)
                    if (n = C.relative[t[s].type]) u = [h(g(u), n)];
                    else {
                        if (n = C.filter[t[s].type].apply(null, t[s].matches), n[q]) { for (i = ++s; i < o && !C.relative[t[i].type]; i++); return y(s > 1 && g(u), s > 1 && p(t.slice(0, s - 1).concat({ value: " " === t[s - 2].type ? "*" : "" })).replace(st, "$1"), n, s < i && b(t.slice(s, i)), i < o && b(t = t.slice(i)), i < o && p(t)) }
                        u.push(n)
                    }
                return g(u)
            }

            function w(t, n) {
                var o = n.length > 0,
                    r = t.length > 0,
                    a = function(i, a, s, l, c) {
                        var u, d, f, p = 0,
                            h = "0",
                            g = i && [],
                            m = [],
                            y = A,
                            b = i || r && C.find.TAG("*", c),
                            w = W += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (c && (A = a === I || a || c); h !== x && null != (u = b[h]); h++) {
                            if (r && u) {
                                for (d = 0, a || u.ownerDocument === I || (N(u), s = !P); f = t[d++];)
                                    if (f(u, a || I, s)) { l.push(u); break }
                                c && (W = w)
                            }
                            o && ((u = !f && u) && p--, i && g.push(u))
                        }
                        if (p += h, o && h !== p) {
                            for (d = 0; f = n[d++];) f(g, m, a, s);
                            if (i) {
                                if (p > 0)
                                    for (; h--;) g[h] || m[h] || (m[h] = K.call(l));
                                m = v(m)
                            }
                            Y.apply(l, m), c && !i && m.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                        }
                        return c && (W = w, A = y), g
                    };
                return o ? i(a) : a
            }
            var x, T, C, k, E, S, $, j, A, O, D, N, I, L, P, R, F, H, M, q = "sizzle" + 1 * new Date,
                _ = t.document,
                W = 0,
                z = 0,
                B = n(),
                U = n(),
                V = n(),
                X = function(t, e) { return t === e && (D = !0), 0 },
                Q = {}.hasOwnProperty,
                G = [],
                K = G.pop,
                J = G.push,
                Y = G.push,
                Z = G.slice,
                tt = function(t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]",
                it = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                at = new RegExp(nt + "+", "g"),
                st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                lt = new RegExp("^" + nt + "*," + nt + "*"),
                ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                dt = new RegExp(rt),
                ft = new RegExp("^" + it + "$"),
                pt = { ID: new RegExp("^#(" + it + ")"), CLASS: new RegExp("^\\.(" + it + ")"), TAG: new RegExp("^(" + it + "|[*])"), ATTR: new RegExp("^" + ot), PSEUDO: new RegExp("^" + rt), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"), bool: new RegExp("^(?:" + et + ")$", "i"), needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i") },
                ht = /^(?:input|select|textarea|button)$/i,
                gt = /^h\d$/i,
                mt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                wt = function(t, e, n) { var i = "0x" + e - 65536; return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) },
                xt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Tt = function(t, e) { return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t },
                Ct = function() { N() },
                kt = h(function(t) { return t.disabled === !0 && ("form" in t || "label" in t) }, { dir: "parentNode", next: "legend" });
            try { Y.apply(G = Z.call(_.childNodes), _.childNodes), G[_.childNodes.length].nodeType } catch (Et) {
                Y = {
                    apply: G.length ? function(t, e) { J.apply(t, Z.call(e)) } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            T = e.support = {}, E = e.isXML = function(t) { var e = t && (t.ownerDocument || t).documentElement; return !!e && "HTML" !== e.nodeName }, N = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : _;
                return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, L = I.documentElement, P = !E(I), _ !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), T.attributes = o(function(t) { return t.className = "i", !t.getAttribute("className") }), T.getElementsByTagName = o(function(t) { return t.appendChild(I.createComment("")), !t.getElementsByTagName("*").length }), T.getElementsByClassName = mt.test(I.getElementsByClassName), T.getById = o(function(t) { return L.appendChild(t).id = q, !I.getElementsByName || !I.getElementsByName(q).length }), T.getById ? (C.filter.ID = function(t) { var e = t.replace(bt, wt); return function(t) { return t.getAttribute("id") === e } }, C.find.ID = function(t, e) { if ("undefined" != typeof e.getElementById && P) { var n = e.getElementById(t); return n ? [n] : [] } }) : (C.filter.ID = function(t) { var e = t.replace(bt, wt); return function(t) { var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id"); return n && n.value === e } }, C.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && P) {
                        var n, i, o, r = e.getElementById(t);
                        if (r) {
                            if (n = r.getAttributeNode("id"), n && n.value === t) return [r];
                            for (o = e.getElementsByName(t), i = 0; r = o[i++];)
                                if (n = r.getAttributeNode("id"), n && n.value === t) return [r]
                        }
                        return []
                    }
                }), C.find.TAG = T.getElementsByTagName ? function(t, e) { return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : T.qsa ? e.querySelectorAll(t) : void 0 } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) { for (; n = r[o++];) 1 === n.nodeType && i.push(n); return i }
                    return r
                }, C.find.CLASS = T.getElementsByClassName && function(t, e) { if ("undefined" != typeof e.getElementsByClassName && P) return e.getElementsByClassName(t) }, F = [], R = [], (T.qsa = mt.test(I.querySelectorAll)) && (o(function(t) { L.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || R.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + q + "-]").length || R.push("~="), t.querySelectorAll(":checked").length || R.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || R.push(".#.+[+~]") }), o(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var e = I.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && R.push("name" + nt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"), L.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), R.push(",.*:")
                })), (T.matchesSelector = mt.test(H = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && o(function(t) { T.disconnectedMatch = H.call(t, "*"), H.call(t, "[s!='']:x"), F.push("!=", rt) }), R = R.length && new RegExp(R.join("|")), F = F.length && new RegExp(F.join("|")), e = mt.test(L.compareDocumentPosition), M = e || mt.test(L.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, X = e ? function(t, e) { if (t === e) return D = !0, 0; var n = !t.compareDocumentPosition - !e.compareDocumentPosition; return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !T.sortDetached && e.compareDocumentPosition(t) === n ? t === I || t.ownerDocument === _ && M(_, t) ? -1 : e === I || e.ownerDocument === _ && M(_, e) ? 1 : O ? tt(O, t) - tt(O, e) : 0 : 4 & n ? -1 : 1) } : function(t, e) {
                    if (t === e) return D = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        s = [t],
                        l = [e];
                    if (!o || !r) return t === I ? -1 : e === I ? 1 : o ? -1 : r ? 1 : O ? tt(O, t) - tt(O, e) : 0;
                    if (o === r) return a(t, e);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (n = e; n = n.parentNode;) l.unshift(n);
                    for (; s[i] === l[i];) i++;
                    return i ? a(s[i], l[i]) : s[i] === _ ? -1 : l[i] === _ ? 1 : 0
                }, I) : I
            }, e.matches = function(t, n) { return e(t, null, null, n) }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== I && N(t), n = n.replace(ut, "='$1']"), T.matchesSelector && P && !V[n + " "] && (!F || !F.test(n)) && (!R || !R.test(n))) try { var i = H.call(t, n); if (i || T.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i } catch (o) {}
                return e(n, I, null, [t]).length > 0
            }, e.contains = function(t, e) { return (t.ownerDocument || t) !== I && N(t), M(t, e) }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== I && N(t);
                var n = C.attrHandle[e.toLowerCase()],
                    i = n && Q.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
                return void 0 !== i ? i : T.attributes || !P ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.escape = function(t) { return (t + "").replace(xt, Tt) }, e.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (D = !T.detectDuplicates, O = !T.sortStable && t.slice(0), t.sort(X), D) { for (; e = t[o++];) e === t[o] && (i = n.push(o)); for (; i--;) t.splice(n[i], 1) }
                return O = null, t
            }, k = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) { if (1 === o || 9 === o || 11 === o) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) n += k(t) } else if (3 === o || 4 === o) return t.nodeValue } else
                    for (; e = t[i++];) n += k(e);
                return n
            }, C = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pt,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(t) { return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t }, PSEUDO: function(t) { var e, n = !t[6] && t[2]; return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3)) } },
                filter: {
                    TAG: function(t) { var e = t.replace(bt, wt).toLowerCase(); return "*" === t ? function() { return !0 } : function(t) { return t.nodeName && t.nodeName.toLowerCase() === e } },
                    CLASS: function(t) { var e = B[t + " "]; return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function(t) { return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "") }) },
                    ATTR: function(t, n, i) { return function(o) { var r = e.attr(o, t); return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            s = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) { return !!t.parentNode } : function(e, n, l) {
                            var c, u, d, f, p, h, g = r !== a ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = s && e.nodeName.toLowerCase(),
                                y = !l && !s,
                                b = !1;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (f = e; f = f[g];)
                                            if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                        h = g = "only" === t && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (f = m, d = f[q] || (f[q] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[t] || [], p = c[0] === W && c[1], b = p && c[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (b = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++b && f === e) { u[t] = [W, p, b]; break }
                                } else if (y && (f = e, d = f[q] || (f[q] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[t] || [], p = c[0] === W && c[1], b = p), b === !1)
                                    for (;
                                        (f = ++p && f && f[g] || (b = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (d = f[q] || (f[q] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[t] = [W, b]), f !== e)););
                                return b -= o, b === i || b % i === 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) { var o, r = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t); return r[q] ? r(n) : r.length > 1 ? (o = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) { for (var i, o = r(t, n), a = o.length; a--;) i = tt(t, o[a]), t[i] = !(e[i] = o[a]) }) : function(t) { return r(t, 0, o) }) : r }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            o = $(t.replace(st, "$1"));
                        return o[q] ? i(function(t, e, n, i) { for (var r, a = o(t, null, i, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r)) }) : function(t, i, r) { return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop() }
                    }),
                    has: i(function(t) { return function(n) { return e(t, n).length > 0 } }),
                    contains: i(function(t) {
                        return t = t.replace(bt, wt),
                            function(e) { return (e.textContent || e.innerText || k(e)).indexOf(t) > -1 }
                    }),
                    lang: i(function(t) {
                        return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1;
                            }
                    }),
                    target: function(e) { var n = t.location && t.location.hash; return n && n.slice(1) === e.id },
                    root: function(t) { return t === L },
                    focus: function(t) { return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) },
                    enabled: c(!1),
                    disabled: c(!0),
                    checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected },
                    selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, t.selected === !0 },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) { return !C.pseudos.empty(t) },
                    header: function(t) { return gt.test(t.nodeName) },
                    input: function(t) { return ht.test(t.nodeName) },
                    button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e },
                    text: function(t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) },
                    first: u(function() { return [0] }),
                    last: u(function(t, e) { return [e - 1] }),
                    eq: u(function(t, e, n) { return [n < 0 ? n + e : n] }),
                    even: u(function(t, e) { for (var n = 0; n < e; n += 2) t.push(n); return t }),
                    odd: u(function(t, e) { for (var n = 1; n < e; n += 2) t.push(n); return t }),
                    lt: u(function(t, e, n) { for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i); return t }),
                    gt: u(function(t, e, n) { for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i); return t })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) C.pseudos[x] = s(x);
            for (x in { submit: !0, reset: !0 }) C.pseudos[x] = l(x);
            return f.prototype = C.filters = C.pseudos, C.setFilters = new f, S = e.tokenize = function(t, n) { var i, o, r, a, s, l, c, u = U[t + " "]; if (u) return n ? 0 : u.slice(0); for (s = t, l = [], c = C.preFilter; s;) { i && !(o = lt.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ct.exec(s)) && (i = o.shift(), r.push({ value: i, type: o[0].replace(st, " ") }), s = s.slice(i.length)); for (a in C.filter) !(o = pt[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({ value: i, type: a, matches: o }), s = s.slice(i.length)); if (!i) break } return n ? s.length : s ? e.error(t) : U(t, l).slice(0) }, $ = e.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = V[t + " "];
                if (!r) {
                    for (e || (e = S(t)), n = e.length; n--;) r = b(e[n]), r[q] ? i.push(r) : o.push(r);
                    r = V(t, w(o, i)), r.selector = t
                }
                return r
            }, j = e.select = function(t, e, n, i) {
                var o, r, a, s, l, c = "function" == typeof t && t,
                    u = !i && S(t = c.selector || t);
                if (n = n || [], 1 === u.length) {
                    if (r = u[0] = u[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === e.nodeType && P && C.relative[r[1].type]) {
                        if (e = (C.find.ID(a.matches[0].replace(bt, wt), e) || [])[0], !e) return n;
                        c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = pt.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !C.relative[s = a.type]);)
                        if ((l = C.find[s]) && (i = l(a.matches[0].replace(bt, wt), yt.test(r[0].type) && d(e.parentNode) || e))) { if (r.splice(o, 1), t = i.length && p(r), !t) return Y.apply(n, i), n; break }
                }
                return (c || $(t, u))(i, e, !P, n, !e || yt.test(t) && d(e.parentNode) || e), n
            }, T.sortStable = q.split("").sort(X).join("") === q, T.detectDuplicates = !!D, N(), T.sortDetached = o(function(t) { return 1 & t.compareDocumentPosition(I.createElement("fieldset")) }), o(function(t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || r("type|href|height|width", function(t, e, n) { if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), T.attributes && o(function(t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || r("value", function(t, e, n) { if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue }), o(function(t) { return null == t.getAttribute("disabled") }) || r(et, function(t, e, n) { var i; if (!n) return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null }), e
        }(t);
        gt.find = wt, gt.expr = wt.selectors, gt.expr[":"] = gt.expr.pseudos, gt.uniqueSort = gt.unique = wt.uniqueSort, gt.text = wt.getText, gt.isXMLDoc = wt.isXML, gt.contains = wt.contains, gt.escapeSelector = wt.escape;
        var xt = function(t, e, n) {
                for (var i = [], o = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && gt(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            Tt = function(t, e) { for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t); return n },
            Ct = gt.expr.match.needsContext,
            kt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Et = /^.[^:#\[\.,]*$/;
        gt.filter = function(t, e, n) { var i = e[0]; return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? gt.find.matchesSelector(i, t) ? [i] : [] : gt.find.matches(t, gt.grep(e, function(t) { return 1 === t.nodeType })) }, gt.fn.extend({
            find: function(t) {
                var e, n, i = this.length,
                    o = this;
                if ("string" != typeof t) return this.pushStack(gt(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (gt.contains(o[e], this)) return !0
                }));
                for (n = this.pushStack([]), e = 0; e < i; e++) gt.find(t, o[e], n);
                return i > 1 ? gt.uniqueSort(n) : n
            },
            filter: function(t) { return this.pushStack(r(this, t || [], !1)) },
            not: function(t) { return this.pushStack(r(this, t || [], !0)) },
            is: function(t) { return !!r(this, "string" == typeof t && Ct.test(t) ? gt(t) : t || [], !1).length }
        });
        var St, $t = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            jt = gt.fn.init = function(t, e, n) {
                var i, o;
                if (!t) return this;
                if (n = n || St, "string" == typeof t) {
                    if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : $t.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof gt ? e[0] : e, gt.merge(this, gt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : nt, !0)), kt.test(i[1]) && gt.isPlainObject(e))
                            for (i in e) gt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    return o = nt.getElementById(i[2]), o && (this[0] = o, this.length = 1), this
                }
                return t.nodeType ? (this[0] = t, this.length = 1, this) : gt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(gt) : gt.makeArray(t, this)
            };
        jt.prototype = gt.fn, St = gt(nt);
        var At = /^(?:parents|prev(?:Until|All))/,
            Ot = { children: !0, contents: !0, next: !0, prev: !0 };
        gt.fn.extend({
            has: function(t) {
                var e = gt(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; t < n; t++)
                        if (gt.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var n, i = 0,
                    o = this.length,
                    r = [],
                    a = "string" != typeof t && gt(t);
                if (!Ct.test(t))
                    for (; i < o; i++)
                        for (n = this[i]; n && n !== e; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && gt.find.matchesSelector(n, t))) { r.push(n); break }
                return this.pushStack(r.length > 1 ? gt.uniqueSort(r) : r)
            },
            index: function(t) { return t ? "string" == typeof t ? st.call(gt(t), this[0]) : st.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(t, e) { return this.pushStack(gt.uniqueSort(gt.merge(this.get(), gt(t, e)))) },
            addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }
        }), gt.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return xt(t, "parentNode") }, parentsUntil: function(t, e, n) { return xt(t, "parentNode", n) }, next: function(t) { return a(t, "nextSibling") }, prev: function(t) { return a(t, "previousSibling") }, nextAll: function(t) { return xt(t, "nextSibling") }, prevAll: function(t) { return xt(t, "previousSibling") }, nextUntil: function(t, e, n) { return xt(t, "nextSibling", n) }, prevUntil: function(t, e, n) { return xt(t, "previousSibling", n) }, siblings: function(t) { return Tt((t.parentNode || {}).firstChild, t) }, children: function(t) { return Tt(t.firstChild) }, contents: function(t) { return o(t, "iframe") ? t.contentDocument : (o(t, "template") && (t = t.content || t), gt.merge([], t.childNodes)) } }, function(t, e) { gt.fn[t] = function(n, i) { var o = gt.map(this, e, n); return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = gt.filter(i, o)), this.length > 1 && (Ot[t] || gt.uniqueSort(o), At.test(t) && o.reverse()), this.pushStack(o) } });
        var Dt = /[^\x20\t\r\n\f]+/g;
        gt.Callbacks = function(t) {
            t = "string" == typeof t ? s(t) : gt.extend({}, t);
            var e, n, i, o, r = [],
                a = [],
                l = -1,
                c = function() {
                    for (o = o || t.once, i = e = !0; a.length; l = -1)
                        for (n = a.shift(); ++l < r.length;) r[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = r.length, n = !1);
                    t.memory || (n = !1), e = !1, o && (r = n ? [] : "")
                },
                u = {
                    add: function() { return r && (n && !e && (l = r.length - 1, a.push(n)), function i(e) { gt.each(e, function(e, n) { gt.isFunction(n) ? t.unique && u.has(n) || r.push(n) : n && n.length && "string" !== gt.type(n) && i(n) }) }(arguments), n && !e && c()), this },
                    remove: function() {
                        return gt.each(arguments, function(t, e) {
                            for (var n;
                                (n = gt.inArray(e, r, n)) > -1;) r.splice(n, 1), n <= l && l--
                        }), this
                    },
                    has: function(t) { return t ? gt.inArray(t, r) > -1 : r.length > 0 },
                    empty: function() { return r && (r = []), this },
                    disable: function() { return o = a = [], r = n = "", this },
                    disabled: function() { return !r },
                    lock: function() { return o = a = [], n || e || (r = n = ""), this },
                    locked: function() { return !!o },
                    fireWith: function(t, n) { return o || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || c()), this },
                    fire: function() { return u.fireWith(this, arguments), this },
                    fired: function() { return !!i }
                };
            return u
        }, gt.extend({
            Deferred: function(e) {
                var n = [
                        ["notify", "progress", gt.Callbacks("memory"), gt.Callbacks("memory"), 2],
                        ["resolve", "done", gt.Callbacks("once memory"), gt.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", gt.Callbacks("once memory"), gt.Callbacks("once memory"), 1, "rejected"]
                    ],
                    i = "pending",
                    o = {
                        state: function() { return i },
                        always: function() { return r.done(arguments).fail(arguments), this },
                        "catch": function(t) { return o.then(null, t) },
                        pipe: function() {
                            var t = arguments;
                            return gt.Deferred(function(e) {
                                gt.each(n, function(n, i) {
                                    var o = gt.isFunction(t[i[4]]) && t[i[4]];
                                    r[i[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && gt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(e, i, o) {
                            function r(e, n, i, o) {
                                return function() {
                                    var s = this,
                                        u = arguments,
                                        d = function() {
                                            var t, d;
                                            if (!(e < a)) {
                                                if (t = i.apply(s, u), t === n.promise()) throw new TypeError("Thenable self-resolution");
                                                d = t && ("object" == typeof t || "function" == typeof t) && t.then, gt.isFunction(d) ? o ? d.call(t, r(a, n, l, o), r(a, n, c, o)) : (a++, d.call(t, r(a, n, l, o), r(a, n, c, o), r(a, n, l, n.notifyWith))) : (i !== l && (s = void 0, u = [t]), (o || n.resolveWith)(s, u))
                                            }
                                        },
                                        f = o ? d : function() { try { d() } catch (t) { gt.Deferred.exceptionHook && gt.Deferred.exceptionHook(t, f.stackTrace), e + 1 >= a && (i !== c && (s = void 0, u = [t]), n.rejectWith(s, u)) } };
                                    e ? f() : (gt.Deferred.getStackHook && (f.stackTrace = gt.Deferred.getStackHook()), t.setTimeout(f))
                                }
                            }
                            var a = 0;
                            return gt.Deferred(function(t) { n[0][3].add(r(0, t, gt.isFunction(o) ? o : l, t.notifyWith)), n[1][3].add(r(0, t, gt.isFunction(e) ? e : l)), n[2][3].add(r(0, t, gt.isFunction(i) ? i : c)) }).promise()
                        },
                        promise: function(t) { return null != t ? gt.extend(t, o) : o }
                    },
                    r = {};
                return gt.each(n, function(t, e) {
                    var a = e[2],
                        s = e[5];
                    o[e[1]] = a.add, s && a.add(function() { i = s }, n[3 - t][2].disable, n[0][2].lock), a.add(e[3].fire), r[e[0]] = function() { return r[e[0] + "With"](this === r ? void 0 : this, arguments), this }, r[e[0] + "With"] = a.fireWith
                }), o.promise(r), e && e.call(r, r), r
            },
            when: function(t) {
                var e = arguments.length,
                    n = e,
                    i = Array(n),
                    o = ot.call(arguments),
                    r = gt.Deferred(),
                    a = function(t) { return function(n) { i[t] = this, o[t] = arguments.length > 1 ? ot.call(arguments) : n, --e || r.resolveWith(i, o) } };
                if (e <= 1 && (u(t, r.done(a(n)).resolve, r.reject, !e), "pending" === r.state() || gt.isFunction(o[n] && o[n].then))) return r.then();
                for (; n--;) u(o[n], a(n), r.reject);
                return r.promise()
            }
        });
        var Nt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        gt.Deferred.exceptionHook = function(e, n) { t.console && t.console.warn && e && Nt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n) }, gt.readyException = function(e) { t.setTimeout(function() { throw e }) };
        var It = gt.Deferred();
        gt.fn.ready = function(t) { return It.then(t)["catch"](function(t) { gt.readyException(t) }), this }, gt.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (t === !0 ? --gt.readyWait : gt.isReady) || (gt.isReady = !0, t !== !0 && --gt.readyWait > 0 || It.resolveWith(nt, [gt]))
            }
        }), gt.ready.then = It.then, "complete" === nt.readyState || "loading" !== nt.readyState && !nt.documentElement.doScroll ? t.setTimeout(gt.ready) : (nt.addEventListener("DOMContentLoaded", d), t.addEventListener("load", d));
        var Lt = function(t, e, n, i, o, r, a) {
                var s = 0,
                    l = t.length,
                    c = null == n;
                if ("object" === gt.type(n)) { o = !0; for (s in n) Lt(t, e, s, n[s], !0, r, a) } else if (void 0 !== i && (o = !0, gt.isFunction(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) { return c.call(gt(t), n) })), e))
                    for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
                return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
            },
            Pt = function(t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType };
        f.uid = 1, f.prototype = {
            cache: function(t) { var e = t[this.expando]; return e || (e = {}, Pt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e },
            set: function(t, e, n) {
                var i, o = this.cache(t);
                if ("string" == typeof e) o[gt.camelCase(e)] = n;
                else
                    for (i in e) o[gt.camelCase(i)] = e[i];
                return o
            },
            get: function(t, e) { return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][gt.camelCase(e)] },
            access: function(t, e, n) { return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e) },
            remove: function(t, e) { var n, i = t[this.expando]; if (void 0 !== i) { if (void 0 !== e) { Array.isArray(e) ? e = e.map(gt.camelCase) : (e = gt.camelCase(e), e = e in i ? [e] : e.match(Dt) || []), n = e.length; for (; n--;) delete i[e[n]] }(void 0 === e || gt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]) } },
            hasData: function(t) { var e = t[this.expando]; return void 0 !== e && !gt.isEmptyObject(e) }
        };
        var Rt = new f,
            Ft = new f,
            Ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Mt = /[A-Z]/g;
        gt.extend({ hasData: function(t) { return Ft.hasData(t) || Rt.hasData(t) }, data: function(t, e, n) { return Ft.access(t, e, n) }, removeData: function(t, e) { Ft.remove(t, e) }, _data: function(t, e, n) { return Rt.access(t, e, n) }, _removeData: function(t, e) { Rt.remove(t, e) } }), gt.fn.extend({
            data: function(t, e) {
                var n, i, o, r = this[0],
                    a = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = Ft.get(r), 1 === r.nodeType && !Rt.get(r, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = gt.camelCase(i.slice(5)), h(r, i, o[i])));
                        Rt.set(r, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() { Ft.set(this, t) }) : Lt(this, function(e) { var n; if (r && void 0 === e) { if (n = Ft.get(r, t), void 0 !== n) return n; if (n = h(r, t), void 0 !== n) return n } else this.each(function() { Ft.set(this, t, e) }) }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) { return this.each(function() { Ft.remove(this, t) }) }
        }), gt.extend({
            queue: function(t, e, n) { var i; if (t) return e = (e || "fx") + "queue", i = Rt.get(t, e), n && (!i || Array.isArray(n) ? i = Rt.access(t, e, gt.makeArray(n)) : i.push(n)), i || [] },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = gt.queue(t, e),
                    i = n.length,
                    o = n.shift(),
                    r = gt._queueHooks(t, e),
                    a = function() { gt.dequeue(t, e) };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(t, e) { var n = e + "queueHooks"; return Rt.get(t, n) || Rt.access(t, n, { empty: gt.Callbacks("once memory").add(function() { Rt.remove(t, [e + "queue", n]) }) }) }
        }), gt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? gt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = gt.queue(this, t, e);
                    gt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && gt.dequeue(this, t)
                })
            },
            dequeue: function(t) { return this.each(function() { gt.dequeue(this, t) }) },
            clearQueue: function(t) { return this.queue(t || "fx", []) },
            promise: function(t, e) {
                var n, i = 1,
                    o = gt.Deferred(),
                    r = this,
                    a = this.length,
                    s = function() {--i || o.resolveWith(r, [r]) };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = Rt.get(r[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(e)
            }
        });
        var qt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            _t = new RegExp("^(?:([+-])=|)(" + qt + ")([a-z%]*)$", "i"),
            Wt = ["Top", "Right", "Bottom", "Left"],
            zt = function(t, e) { return t = e || t, "none" === t.style.display || "" === t.style.display && gt.contains(t.ownerDocument, t) && "none" === gt.css(t, "display") },
            Bt = function(t, e, n, i) {
                var o, r, a = {};
                for (r in e) a[r] = t.style[r], t.style[r] = e[r];
                o = n.apply(t, i || []);
                for (r in e) t.style[r] = a[r];
                return o
            },
            Ut = {};
        gt.fn.extend({ show: function() { return v(this, !0) }, hide: function() { return v(this) }, toggle: function(t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() { zt(this) ? gt(this).show() : gt(this).hide() }) } });
        var Vt = /^(?:checkbox|radio)$/i,
            Xt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
            Qt = /^$|\/(?:java|ecma)script/i,
            Gt = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        Gt.optgroup = Gt.option, Gt.tbody = Gt.tfoot = Gt.colgroup = Gt.caption = Gt.thead, Gt.th = Gt.td;
        var Kt = /<|&#?\w+;/;
        ! function() {
            var t = nt.createDocumentFragment(),
                e = t.appendChild(nt.createElement("div")),
                n = nt.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), pt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", pt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Jt = nt.documentElement,
            Yt = /^key/,
            Zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            te = /^([^.]*)(?:\.(.+)|)/;
        gt.event = {
            global: {},
            add: function(t, e, n, i, o) {
                var r, a, s, l, c, u, d, f, p, h, g, m = Rt.get(t);
                if (m)
                    for (n.handler && (r = n, n = r.handler, o = r.selector), o && gt.find.matchesSelector(Jt, o), n.guid || (n.guid = gt.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(e) { return "undefined" != typeof gt && gt.event.triggered !== e.type ? gt.event.dispatch.apply(t, arguments) : void 0 }), e = (e || "").match(Dt) || [""], c = e.length; c--;) s = te.exec(e[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (d = gt.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = gt.event.special[p] || {}, u = gt.extend({ type: p, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && gt.expr.match.needsContext.test(o), namespace: h.join(".") }, r), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && d.setup.call(t, i, h, a) !== !1 || t.addEventListener && t.addEventListener(p, a)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), gt.event.global[p] = !0)
            },
            remove: function(t, e, n, i, o) {
                var r, a, s, l, c, u, d, f, p, h, g, m = Rt.hasData(t) && Rt.get(t);
                if (m && (l = m.events)) {
                    for (e = (e || "").match(Dt) || [""], c = e.length; c--;)
                        if (s = te.exec(e[c]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                            for (d = gt.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = f.length; r--;) u = f[r], !o && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(t, u));
                            a && !f.length && (d.teardown && d.teardown.call(t, h, m.handle) !== !1 || gt.removeEvent(t, p, m.handle), delete l[p])
                        } else
                            for (p in l) gt.event.remove(t, p + e[c], n, i, !0);
                    gt.isEmptyObject(l) && Rt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, n, i, o, r, a, s = gt.event.fix(t),
                    l = new Array(arguments.length),
                    c = (Rt.get(this, "events") || {})[s.type] || [],
                    u = gt.event.special[s.type] || {};
                for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (s.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, s) !== !1) {
                    for (a = gt.event.handlers.call(this, s, c), e = 0;
                        (o = a[e++]) && !s.isPropagationStopped();)
                        for (s.currentTarget = o.elem, n = 0;
                            (r = o.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, i = ((gt.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), void 0 !== i && (s.result = i) === !1 && (s.preventDefault(), s.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, s), s.result
                }
            },
            handlers: function(t, e) {
                var n, i, o, r, a, s = [],
                    l = e.delegateCount,
                    c = t.target;
                if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== t.type || c.disabled !== !0)) {
                            for (r = [], a = {}, n = 0; n < l; n++) i = e[n], o = i.selector + " ", void 0 === a[o] && (a[o] = i.needsContext ? gt(o, this).index(c) > -1 : gt.find(o, this, null, [c]).length), a[o] && r.push(i);
                            r.length && s.push({ elem: c, handlers: r })
                        }
                return c = this, l < e.length && s.push({ elem: c, handlers: e.slice(l) }), s
            },
            addProp: function(t, e) { Object.defineProperty(gt.Event.prototype, t, { enumerable: !0, configurable: !0, get: gt.isFunction(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
            fix: function(t) { return t[gt.expando] ? t : new gt.Event(t) },
            special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== C() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function() { if (this === C() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function() { if ("checkbox" === this.type && this.click && o(this, "input")) return this.click(), !1 }, _default: function(t) { return o(t.target, "a") } }, beforeunload: { postDispatch: function(t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } }
        }, gt.removeEvent = function(t, e, n) { t.removeEventListener && t.removeEventListener(e, n) }, gt.Event = function(t, e) { return this instanceof gt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? x : T, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && gt.extend(this, e), this.timeStamp = t && t.timeStamp || gt.now(), void(this[gt.expando] = !0)) : new gt.Event(t, e) }, gt.Event.prototype = {
            constructor: gt.Event,
            isDefaultPrevented: T,
            isPropagationStopped: T,
            isImmediatePropagationStopped: T,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = x, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = x, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = x, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, gt.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(t) { var e = t.button; return null == t.which && Yt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Zt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which } }, gt.event.addProp), gt.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(t, e) {
            gt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return o && (o === i || gt.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), gt.fn.extend({ on: function(t, e, n, i) { return k(this, t, e, n, i) }, one: function(t, e, n, i) { return k(this, t, e, n, i, 1) }, off: function(t, e, n) { var i, o; if (t && t.preventDefault && t.handleObj) return i = t.handleObj, gt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" == typeof t) { for (o in t) this.off(o, e, t[o]); return this } return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = T), this.each(function() { gt.event.remove(this, t, n, e) }) } });
        var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ne = /<script|<style|<link/i,
            ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
            oe = /^true\/(.*)/,
            re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        gt.extend({
            htmlPrefilter: function(t) { return t.replace(ee, "<$1></$2>") },
            clone: function(t, e, n) {
                var i, o, r, a, s = t.cloneNode(!0),
                    l = gt.contains(t.ownerDocument, t);
                if (!(pt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || gt.isXMLDoc(t)))
                    for (a = y(s), r = y(t), i = 0, o = r.length; i < o; i++) A(r[i], a[i]);
                if (e)
                    if (n)
                        for (r = r || y(t), a = a || y(s), i = 0, o = r.length; i < o; i++) j(r[i], a[i]);
                    else j(t, s);
                return a = y(s, "script"), a.length > 0 && b(a, !l && y(t, "script")), s
            },
            cleanData: function(t) {
                for (var e, n, i, o = gt.event.special, r = 0; void 0 !== (n = t[r]); r++)
                    if (Pt(n)) {
                        if (e = n[Rt.expando]) {
                            if (e.events)
                                for (i in e.events) o[i] ? gt.event.remove(n, i) : gt.removeEvent(n, i, e.handle);
                            n[Rt.expando] = void 0
                        }
                        n[Ft.expando] && (n[Ft.expando] = void 0)
                    }
            }
        }), gt.fn.extend({
            detach: function(t) { return D(this, t, !0) },
            remove: function(t) { return D(this, t) },
            text: function(t) { return Lt(this, function(t) { return void 0 === t ? gt.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t) }) }, null, t, arguments.length) },
            append: function() {
                return O(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = E(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return O(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = E(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() { return O(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this) }) },
            after: function() { return O(this, arguments, function(t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) },
            empty: function() { for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (gt.cleanData(y(t, !1)), t.textContent = ""); return this },
            clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function() { return gt.clone(this, t, e) }) },
            html: function(t) {
                return Lt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !ne.test(t) && !Gt[(Xt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = gt.htmlPrefilter(t);
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (gt.cleanData(y(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return O(this, arguments, function(e) {
                    var n = this.parentNode;
                    gt.inArray(this, t) < 0 && (gt.cleanData(y(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), gt.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) { gt.fn[t] = function(t) { for (var n, i = [], o = gt(t), r = o.length - 1, a = 0; a <= r; a++) n = a === r ? this : this.clone(!0), gt(o[a])[e](n), at.apply(i, n.get()); return this.pushStack(i) } });
        var ae = /^margin/,
            se = new RegExp("^(" + qt + ")(?!px)[a-z%]+$", "i"),
            le = function(e) { var n = e.ownerDocument.defaultView; return n && n.opener || (n = t), n.getComputedStyle(e) };
        ! function() {
            function e() {
                if (s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Jt.appendChild(a);
                    var e = t.getComputedStyle(s);
                    n = "1%" !== e.top, r = "2px" === e.marginLeft, i = "4px" === e.width, s.style.marginRight = "50%", o = "4px" === e.marginRight, Jt.removeChild(a), s = null
                }
            }
            var n, i, o, r, a = nt.createElement("div"),
                s = nt.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pt.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), gt.extend(pt, { pixelPosition: function() { return e(), n }, boxSizingReliable: function() { return e(), i }, pixelMarginRight: function() { return e(), o }, reliableMarginLeft: function() { return e(), r } }))
        }();
        var ce = /^(none|table(?!-c[ea]).+)/,
            ue = /^--/,
            de = { position: "absolute", visibility: "hidden", display: "block" },
            fe = { letterSpacing: "0", fontWeight: "400" },
            pe = ["Webkit", "Moz", "ms"],
            he = nt.createElement("div").style;
        gt.extend({
            cssHooks: { opacity: { get: function(t, e) { if (e) { var n = N(t, "opacity"); return "" === n ? "1" : n } } } },
            cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { "float": "cssFloat" },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, a, s = gt.camelCase(e),
                        l = ue.test(e),
                        c = t.style;
                    return l || (e = P(s)), a = gt.cssHooks[e] || gt.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : c[e] : (r = typeof n, "string" === r && (o = _t.exec(n)) && o[1] && (n = g(t, e, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (gt.cssNumber[s] ? "" : "px")), pt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n)), void 0)
                }
            },
            css: function(t, e, n, i) {
                var o, r, a, s = gt.camelCase(e),
                    l = ue.test(e);
                return l || (e = P(s)), a = gt.cssHooks[e] || gt.cssHooks[s], a && "get" in a && (o = a.get(t, !0, n)), void 0 === o && (o = N(t, e, i)), "normal" === o && e in fe && (o = fe[e]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
            }
        }), gt.each(["height", "width"], function(t, e) {
            gt.cssHooks[e] = {
                get: function(t, n, i) { if (n) return !ce.test(gt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? H(t, e, i) : Bt(t, de, function() { return H(t, e, i) }) },
                set: function(t, n, i) {
                    var o, r = i && le(t),
                        a = i && F(t, e, i, "border-box" === gt.css(t, "boxSizing", !1, r), r);
                    return a && (o = _t.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = gt.css(t, e)), R(t, n, a)
                }
            }
        }), gt.cssHooks.marginLeft = I(pt.reliableMarginLeft, function(t, e) { if (e) return (parseFloat(N(t, "marginLeft")) || t.getBoundingClientRect().left - Bt(t, { marginLeft: 0 }, function() { return t.getBoundingClientRect().left })) + "px" }), gt.each({ margin: "", padding: "", border: "Width" }, function(t, e) { gt.cssHooks[t + e] = { expand: function(n) { for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + Wt[i] + e] = r[i] || r[i - 2] || r[0]; return o } }, ae.test(t) || (gt.cssHooks[t + e].set = R) }), gt.fn.extend({
            css: function(t, e) {
                return Lt(this, function(t, e, n) {
                    var i, o, r = {},
                        a = 0;
                    if (Array.isArray(e)) { for (i = le(t), o = e.length; a < o; a++) r[e[a]] = gt.css(t, e[a], !1, i); return r }
                    return void 0 !== n ? gt.style(t, e, n) : gt.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), gt.Tween = M, M.prototype = { constructor: M, init: function(t, e, n, i, o, r) { this.elem = t, this.prop = n, this.easing = o || gt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (gt.cssNumber[n] ? "" : "px") }, cur: function() { var t = M.propHooks[this.prop]; return t && t.get ? t.get(this) : M.propHooks._default.get(this) }, run: function(t) { var e, n = M.propHooks[this.prop]; return this.options.duration ? this.pos = e = gt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this } }, M.prototype.init.prototype = M.prototype, M.propHooks = { _default: { get: function(t) { var e; return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = gt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) }, set: function(t) { gt.fx.step[t.prop] ? gt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[gt.cssProps[t.prop]] && !gt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : gt.style(t.elem, t.prop, t.now + t.unit) } } }, M.propHooks.scrollTop = M.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, gt.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 }, _default: "swing" }, gt.fx = M.prototype.init, gt.fx.step = {};
        var ge, me, ve = /^(?:toggle|show|hide)$/,
            ye = /queueHooks$/;
        gt.Animation = gt.extend(V, { tweeners: { "*": [function(t, e) { var n = this.createTween(t, e); return g(n.elem, t, _t.exec(e), n), n }] }, tweener: function(t, e) { gt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Dt); for (var n, i = 0, o = t.length; i < o; i++) n = t[i], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(e) }, prefilters: [B], prefilter: function(t, e) { e ? V.prefilters.unshift(t) : V.prefilters.push(t) } }), gt.speed = function(t, e, n) { var i = t && "object" == typeof t ? gt.extend({}, t) : { complete: n || !n && e || gt.isFunction(t) && t, duration: t, easing: n && e || e && !gt.isFunction(e) && e }; return gt.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in gt.fx.speeds ? i.duration = gt.fx.speeds[i.duration] : i.duration = gt.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() { gt.isFunction(i.old) && i.old.call(this), i.queue && gt.dequeue(this, i.queue) }, i }, gt.fn.extend({
                fadeTo: function(t, e, n, i) { return this.filter(zt).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i) },
                animate: function(t, e, n, i) {
                    var o = gt.isEmptyObject(t),
                        r = gt.speed(e, n, i),
                        a = function() {
                            var e = V(this, gt.extend({}, t), r);
                            (o || Rt.get(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            r = gt.timers,
                            a = Rt.get(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && ye.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                        !e && n || gt.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, n = Rt.get(this),
                            i = n[t + "queue"],
                            o = n[t + "queueHooks"],
                            r = gt.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, gt.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), gt.each(["toggle", "show", "hide"], function(t, e) {
                var n = gt.fn[e];
                gt.fn[e] = function(t, i, o) { return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(W(e, !0), t, i, o) }
            }), gt.each({ slideDown: W("show"), slideUp: W("hide"), slideToggle: W("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) { gt.fn[t] = function(t, n, i) { return this.animate(e, t, n, i) } }), gt.timers = [], gt.fx.tick = function() {
                var t, e = 0,
                    n = gt.timers;
                for (ge = gt.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
                n.length || gt.fx.stop(), ge = void 0
            }, gt.fx.timer = function(t) { gt.timers.push(t), gt.fx.start() }, gt.fx.interval = 13, gt.fx.start = function() { me || (me = !0, q()) }, gt.fx.stop = function() { me = null }, gt.fx.speeds = { slow: 600, fast: 200, _default: 400 }, gt.fn.delay = function(e, n) {
                return e = gt.fx ? gt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                    var o = t.setTimeout(n, e);
                    i.stop = function() { t.clearTimeout(o) }
                })
            },
            function() {
                var t = nt.createElement("input"),
                    e = nt.createElement("select"),
                    n = e.appendChild(nt.createElement("option"));
                t.type = "checkbox", pt.checkOn = "" !== t.value, pt.optSelected = n.selected, t = nt.createElement("input"), t.value = "t", t.type = "radio", pt.radioValue = "t" === t.value
            }();
        var be, we = gt.expr.attrHandle;
        gt.fn.extend({ attr: function(t, e) { return Lt(this, gt.attr, t, e, arguments.length > 1) }, removeAttr: function(t) { return this.each(function() { gt.removeAttr(this, t) }) } }), gt.extend({
            attr: function(t, e, n) { var i, o, r = t.nodeType; if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof t.getAttribute ? gt.prop(t, e, n) : (1 === r && gt.isXMLDoc(t) || (o = gt.attrHooks[e.toLowerCase()] || (gt.expr.match.bool.test(e) ? be : void 0)), void 0 !== n ? null === n ? void gt.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : (i = gt.find.attr(t, e), null == i ? void 0 : i)) },
            attrHooks: { type: { set: function(t, e) { if (!pt.radioValue && "radio" === e && o(t, "input")) { var n = t.value; return t.setAttribute("type", e), n && (t.value = n), e } } } },
            removeAttr: function(t, e) {
                var n, i = 0,
                    o = e && e.match(Dt);
                if (o && 1 === t.nodeType)
                    for (; n = o[i++];) t.removeAttribute(n)
            }
        }), be = { set: function(t, e, n) { return e === !1 ? gt.removeAttr(t, n) : t.setAttribute(n, n), n } }, gt.each(gt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = we[e] || gt.find.attr;
            we[e] = function(t, e, i) { var o, r, a = e.toLowerCase(); return i || (r = we[a], we[a] = o, o = null != n(t, e, i) ? a : null, we[a] = r), o }
        });
        var xe = /^(?:input|select|textarea|button)$/i,
            Te = /^(?:a|area)$/i;
        gt.fn.extend({ prop: function(t, e) { return Lt(this, gt.prop, t, e, arguments.length > 1) }, removeProp: function(t) { return this.each(function() { delete this[gt.propFix[t] || t] }) } }), gt.extend({ prop: function(t, e, n) { var i, o, r = t.nodeType; if (3 !== r && 8 !== r && 2 !== r) return 1 === r && gt.isXMLDoc(t) || (e = gt.propFix[e] || e, o = gt.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e] }, propHooks: { tabIndex: { get: function(t) { var e = gt.find.attr(t, "tabindex"); return e ? parseInt(e, 10) : xe.test(t.nodeName) || Te.test(t.nodeName) && t.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), pt.optSelected || (gt.propHooks.selected = {
            get: function(t) { var e = t.parentNode; return e && e.parentNode && e.parentNode.selectedIndex, null },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), gt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { gt.propFix[this.toLowerCase()] = this }), gt.fn.extend({
            addClass: function(t) {
                var e, n, i, o, r, a, s, l = 0;
                if (gt.isFunction(t)) return this.each(function(e) { gt(this).addClass(t.call(this, e, Q(this))) });
                if ("string" == typeof t && t)
                    for (e = t.match(Dt) || []; n = this[l++];)
                        if (o = Q(n), i = 1 === n.nodeType && " " + X(o) + " ") {
                            for (a = 0; r = e[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = X(i), o !== s && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, o, r, a, s, l = 0;
                if (gt.isFunction(t)) return this.each(function(e) { gt(this).removeClass(t.call(this, e, Q(this))) });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(Dt) || []; n = this[l++];)
                        if (o = Q(n), i = 1 === n.nodeType && " " + X(o) + " ") {
                            for (a = 0; r = e[a++];)
                                for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                            s = X(i), o !== s && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : gt.isFunction(t) ? this.each(function(n) { gt(this).toggleClass(t.call(this, n, Q(this), e), e) }) : this.each(function() {
                    var e, i, o, r;
                    if ("string" === n)
                        for (i = 0, o = gt(this), r = t.match(Dt) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== n || (e = Q(this), e && Rt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Rt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + X(Q(n)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var Ce = /\r/g;
        gt.fn.extend({
            val: function(t) {
                var e, n, i, o = this[0]; {
                    if (arguments.length) return i = gt.isFunction(t), this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, gt(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = gt.map(o, function(t) { return null == t ? "" : t + "" })), e = gt.valHooks[this.type] || gt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return e = gt.valHooks[o.type] || gt.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Ce, "") : null == n ? "" : n)
                }
            }
        }), gt.extend({
            valHooks: {
                option: { get: function(t) { var e = gt.find.attr(t, "value"); return null != e ? e : X(gt.text(t)) } },
                select: {
                    get: function(t) {
                        var e, n, i, r = t.options,
                            a = t.selectedIndex,
                            s = "select-one" === t.type,
                            l = s ? null : [],
                            c = s ? a + 1 : r.length;
                        for (i = a < 0 ? c : s ? a : 0; i < c; i++)
                            if (n = r[i], (n.selected || i === a) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                                if (e = gt(n).val(), s) return e;
                                l.push(e)
                            }
                        return l
                    },
                    set: function(t, e) { for (var n, i, o = t.options, r = gt.makeArray(e), a = o.length; a--;) i = o[a], (i.selected = gt.inArray(gt.valHooks.option.get(i), r) > -1) && (n = !0); return n || (t.selectedIndex = -1), r }
                }
            }
        }), gt.each(["radio", "checkbox"], function() { gt.valHooks[this] = { set: function(t, e) { if (Array.isArray(e)) return t.checked = gt.inArray(gt(t).val(), e) > -1 } }, pt.checkOn || (gt.valHooks[this].get = function(t) { return null === t.getAttribute("value") ? "on" : t.value }) });
        var ke = /^(?:focusinfocus|focusoutblur)$/;
        gt.extend(gt.event, {
            trigger: function(e, n, i, o) {
                var r, a, s, l, c, u, d, f = [i || nt],
                    p = ut.call(e, "type") ? e.type : e,
                    h = ut.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = s = i = i || nt, 3 !== i.nodeType && 8 !== i.nodeType && !ke.test(p + gt.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[gt.expando] ? e : new gt.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : gt.makeArray(n, [e]), d = gt.event.special[p] || {}, o || !d.trigger || d.trigger.apply(i, n) !== !1)) {
                    if (!o && !d.noBubble && !gt.isWindow(i)) {
                        for (l = d.delegateType || p, ke.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;
                        s === (i.ownerDocument || nt) && f.push(s.defaultView || s.parentWindow || t)
                    }
                    for (r = 0;
                        (a = f[r++]) && !e.isPropagationStopped();) e.type = r > 1 ? l : d.bindType || p, u = (Rt.get(a, "events") || {})[e.type] && Rt.get(a, "handle"), u && u.apply(a, n), u = c && a[c], u && u.apply && Pt(a) && (e.result = u.apply(a, n), e.result === !1 && e.preventDefault());
                    return e.type = p, o || e.isDefaultPrevented() || d._default && d._default.apply(f.pop(), n) !== !1 || !Pt(i) || c && gt.isFunction(i[p]) && !gt.isWindow(i) && (s = i[c], s && (i[c] = null), gt.event.triggered = p, i[p](), gt.event.triggered = void 0, s && (i[c] = s)), e.result
                }
            },
            simulate: function(t, e, n) {
                var i = gt.extend(new gt.Event, n, { type: t, isSimulated: !0 });
                gt.event.trigger(i, null, e)
            }
        }), gt.fn.extend({ trigger: function(t, e) { return this.each(function() { gt.event.trigger(t, e, this) }) }, triggerHandler: function(t, e) { var n = this[0]; if (n) return gt.event.trigger(t, e, n, !0) } }), gt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) { gt.fn[e] = function(t, n) { return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e) } }), gt.fn.extend({ hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) } }), pt.focusin = "onfocusin" in t, pt.focusin || gt.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
            var n = function(t) { gt.event.simulate(e, t.target, gt.event.fix(t)) };
            gt.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = Rt.access(i, e);
                    o || i.addEventListener(t, n, !0), Rt.access(i, e, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = Rt.access(i, e) - 1;
                    o ? Rt.access(i, e, o) : (i.removeEventListener(t, n, !0), Rt.remove(i, e))
                }
            }
        });
        var Ee = t.location,
            Se = gt.now(),
            $e = /\?/;
        gt.parseXML = function(e) { var n; if (!e || "string" != typeof e) return null; try { n = (new t.DOMParser).parseFromString(e, "text/xml") } catch (i) { n = void 0 } return n && !n.getElementsByTagName("parsererror").length || gt.error("Invalid XML: " + e), n };
        var je = /\[\]$/,
            Ae = /\r?\n/g,
            Oe = /^(?:submit|button|image|reset|file)$/i,
            De = /^(?:input|select|textarea|keygen)/i;
        gt.param = function(t, e) {
            var n, i = [],
                o = function(t, e) {
                    var n = gt.isFunction(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                };
            if (Array.isArray(t) || t.jquery && !gt.isPlainObject(t)) gt.each(t, function() { o(this.name, this.value) });
            else
                for (n in t) G(n, t[n], e, o);
            return i.join("&")
        }, gt.fn.extend({ serialize: function() { return gt.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var t = gt.prop(this, "elements"); return t ? gt.makeArray(t) : this }).filter(function() { var t = this.type; return this.name && !gt(this).is(":disabled") && De.test(this.nodeName) && !Oe.test(t) && (this.checked || !Vt.test(t)) }).map(function(t, e) { var n = gt(this).val(); return null == n ? null : Array.isArray(n) ? gt.map(n, function(t) { return { name: e.name, value: t.replace(Ae, "\r\n") } }) : { name: e.name, value: n.replace(Ae, "\r\n") } }).get() } });
        var Ne = /%20/g,
            Ie = /#.*$/,
            Le = /([?&])_=[^&]*/,
            Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Re = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Fe = /^(?:GET|HEAD)$/,
            He = /^\/\//,
            Me = {},
            qe = {},
            _e = "*/".concat("*"),
            We = nt.createElement("a");
        We.href = Ee.href, gt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: Ee.href, type: "GET", isLocal: Re.test(Ee.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": _e, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": gt.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(t, e) { return e ? Y(Y(t, gt.ajaxSettings), e) : Y(gt.ajaxSettings, t) },
            ajaxPrefilter: K(Me),
            ajaxTransport: K(qe),
            ajax: function(e, n) {
                function i(e, n, i, s) {
                    var c, f, p, w, x, T = n;
                    u || (u = !0, l && t.clearTimeout(l), o = void 0, a = s || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (w = Z(h, C, i)), w = tt(h, w, C, c), c ? (h.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (gt.lastModified[r] = x), x = C.getResponseHeader("etag"), x && (gt.etag[r] = x)), 204 === e || "HEAD" === h.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, f = w.data, p = w.error, c = !p)) : (p = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (n || T) + "", c ? v.resolveWith(g, [f, T, C]) : v.rejectWith(g, [C, T, p]), C.statusCode(b), b = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? f : p]), y.fireWith(g, [C, T]), d && (m.trigger("ajaxComplete", [C, h]), --gt.active || gt.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var o, r, a, s, l, c, u, d, f, p, h = gt.ajaxSetup({}, n),
                    g = h.context || h,
                    m = h.context && (g.nodeType || g.jquery) ? gt(g) : gt.event,
                    v = gt.Deferred(),
                    y = gt.Callbacks("once memory"),
                    b = h.statusCode || {},
                    w = {},
                    x = {},
                    T = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (u) {
                                if (!s)
                                    for (s = {}; e = Pe.exec(a);) s[e[1].toLowerCase()] = e[2];
                                e = s[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() { return u ? a : null },
                        setRequestHeader: function(t, e) { return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this },
                        overrideMimeType: function(t) { return null == u && (h.mimeType = t), this },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (u) C.always(t[C.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]];
                            return this
                        },
                        abort: function(t) { var e = t || T; return o && o.abort(e), i(0, e), this }
                    };
                if (v.promise(C), h.url = ((e || h.url || Ee.href) + "").replace(He, Ee.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Dt) || [""], null == h.crossDomain) { c = nt.createElement("a"); try { c.href = h.url, c.href = c.href, h.crossDomain = We.protocol + "//" + We.host != c.protocol + "//" + c.host } catch (k) { h.crossDomain = !0 } }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = gt.param(h.data, h.traditional)), J(Me, h, n, C), u) return C;
                d = gt.event && h.global, d && 0 === gt.active++ && gt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Fe.test(h.type), r = h.url.replace(Ie, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ne, "+")) : (p = h.url.slice(r.length), h.data && (r += ($e.test(r) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (r = r.replace(Le, "$1"), p = ($e.test(r) ? "&" : "?") + "_=" + Se++ + p), h.url = r + p), h.ifModified && (gt.lastModified[r] && C.setRequestHeader("If-Modified-Since", gt.lastModified[r]), gt.etag[r] && C.setRequestHeader("If-None-Match", gt.etag[r])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + _e + "; q=0.01" : "") : h.accepts["*"]);
                for (f in h.headers) C.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || u)) return C.abort();
                if (T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), o = J(qe, h, n, C)) {
                    if (C.readyState = 1, d && m.trigger("ajaxSend", [C, h]), u) return C;
                    h.async && h.timeout > 0 && (l = t.setTimeout(function() { C.abort("timeout") }, h.timeout));
                    try { u = !1, o.send(w, i) } catch (k) {
                        if (u) throw k;
                        i(-1, k)
                    }
                } else i(-1, "No Transport");
                return C
            },
            getJSON: function(t, e, n) { return gt.get(t, e, n, "json") },
            getScript: function(t, e) { return gt.get(t, void 0, e, "script") }
        }), gt.each(["get", "post"], function(t, e) { gt[e] = function(t, n, i, o) { return gt.isFunction(n) && (o = o || i, i = n, n = void 0), gt.ajax(gt.extend({ url: t, type: e, dataType: o, data: n, success: i }, gt.isPlainObject(t) && t)) } }), gt._evalUrl = function(t) { return gt.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, gt.fn.extend({
            wrapAll: function(t) { var e; return this[0] && (gt.isFunction(t) && (t = t.call(this[0])), e = gt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() { for (var t = this; t.firstElementChild;) t = t.firstElementChild; return t }).append(this)), this },
            wrapInner: function(t) {
                return gt.isFunction(t) ? this.each(function(e) { gt(this).wrapInner(t.call(this, e)) }) : this.each(function() {
                    var e = gt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) { var e = gt.isFunction(t); return this.each(function(n) { gt(this).wrapAll(e ? t.call(this, n) : t) }) },
            unwrap: function(t) { return this.parent(t).not("body").each(function() { gt(this).replaceWith(this.childNodes) }), this }
        }), gt.expr.pseudos.hidden = function(t) { return !gt.expr.pseudos.visible(t) }, gt.expr.pseudos.visible = function(t) { return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length) }, gt.ajaxSettings.xhr = function() { try { return new t.XMLHttpRequest } catch (e) {} };
        var ze = { 0: 200, 1223: 204 },
            Be = gt.ajaxSettings.xhr();
        pt.cors = !!Be && "withCredentials" in Be, pt.ajax = Be = !!Be, gt.ajaxTransport(function(e) {
            var n, i;
            if (pt.cors || Be && !e.crossDomain) return {
                send: function(o, r) {
                    var a, s = e.xhr();
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (a in o) s.setRequestHeader(a, o[a]);
                    n = function(t) { return function() { n && (n = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(ze[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders())) } }, s.onload = n(), i = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() { 4 === s.readyState && t.setTimeout(function() { n && i() }) }, n = n("abort");
                    try { s.send(e.hasContent && e.data || null) } catch (l) { if (n) throw l }
                },
                abort: function() { n && n() }
            }
        }), gt.ajaxPrefilter(function(t) { t.crossDomain && (t.contents.script = !1) }), gt.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(t) { return gt.globalEval(t), t } } }), gt.ajaxPrefilter("script", function(t) { void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET") }), gt.ajaxTransport("script", function(t) { if (t.crossDomain) { var e, n; return { send: function(i, o) { e = gt("<script>").prop({ charset: t.scriptCharset, src: t.url }).on("load error", n = function(t) { e.remove(), n = null, t && o("error" === t.type ? 404 : 200, t.type) }), nt.head.appendChild(e[0]) }, abort: function() { n && n() } } } });
        var Ue = [],
            Ve = /(=)\?(?=&|$)|\?\?/;
        gt.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = Ue.pop() || gt.expando + "_" + Se++; return this[t] = !0, t } }), gt.ajaxPrefilter("json jsonp", function(e, n, i) { var o, r, a, s = e.jsonp !== !1 && (Ve.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(e.data) && "data"); if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = gt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ve, "$1" + o) : e.jsonp !== !1 && (e.url += ($e.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() { return a || gt.error(o + " was not called"), a[0] }, e.dataTypes[0] = "json", r = t[o], t[o] = function() { a = arguments }, i.always(function() { void 0 === r ? gt(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Ue.push(o)), a && gt.isFunction(r) && r(a[0]), a = r = void 0 }), "script" }), pt.createHTMLDocument = function() { var t = nt.implementation.createHTMLDocument("").body; return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length }(), gt.parseHTML = function(t, e, n) { if ("string" != typeof t) return []; "boolean" == typeof e && (n = e, e = !1); var i, o, r; return e || (pt.createHTMLDocument ? (e = nt.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = nt.location.href, e.head.appendChild(i)) : e = nt), o = kt.exec(t), r = !n && [], o ? [e.createElement(o[1])] : (o = w([t], e, r), r && r.length && gt(r).remove(), gt.merge([], o.childNodes)) }, gt.fn.load = function(t, e, n) {
            var i, o, r, a = this,
                s = t.indexOf(" ");
            return s > -1 && (i = X(t.slice(s)), t = t.slice(0, s)), gt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && gt.ajax({ url: t, type: o || "GET", dataType: "html", data: e }).done(function(t) { r = arguments, a.html(i ? gt("<div>").append(gt.parseHTML(t)).find(i) : t) }).always(n && function(t, e) { a.each(function() { n.apply(this, r || [t.responseText, e, t]) }) }), this
        }, gt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) { gt.fn[e] = function(t) { return this.on(e, t) } }), gt.expr.pseudos.animated = function(t) { return gt.grep(gt.timers, function(e) { return t === e.elem }).length }, gt.offset = {
            setOffset: function(t, e, n) {
                var i, o, r, a, s, l, c, u = gt.css(t, "position"),
                    d = gt(t),
                    f = {};
                "static" === u && (t.style.position = "relative"), s = d.offset(), r = gt.css(t, "top"), l = gt.css(t, "left"), c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1, c ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), gt.isFunction(e) && (e = e.call(t, n, gt.extend({}, s))), null != e.top && (f.top = e.top - s.top + a), null != e.left && (f.left = e.left - s.left + o), "using" in e ? e.using.call(t, f) : d.css(f)
            }
        }, gt.fn.extend({
            offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { gt.offset.setOffset(this, t, e) }); var e, n, i, o, r = this[0]; if (r) return r.getClientRects().length ? (i = r.getBoundingClientRect(), e = r.ownerDocument, n = e.documentElement, o = e.defaultView, { top: i.top + o.pageYOffset - n.clientTop, left: i.left + o.pageXOffset - n.clientLeft }) : { top: 0, left: 0 } },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = { top: 0, left: 0 };
                    return "fixed" === gt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), o(t[0], "html") || (i = t.offset()), i = { top: i.top + gt.css(t[0], "borderTopWidth", !0), left: i.left + gt.css(t[0], "borderLeftWidth", !0) }), { top: e.top - i.top - gt.css(n, "marginTop", !0), left: e.left - i.left - gt.css(n, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map(function() { for (var t = this.offsetParent; t && "static" === gt.css(t, "position");) t = t.offsetParent; return t || Jt }) }
        }), gt.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, e) {
            var n = "pageYOffset" === e;
            gt.fn[t] = function(i) { return Lt(this, function(t, i, o) { var r; return gt.isWindow(t) ? r = t : 9 === t.nodeType && (r = t.defaultView), void 0 === o ? r ? r[e] : t[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o) }, t, i, arguments.length) }
        }), gt.each(["top", "left"], function(t, e) { gt.cssHooks[e] = I(pt.pixelPosition, function(t, n) { if (n) return n = N(t, e), se.test(n) ? gt(t).position()[e] + "px" : n }) }), gt.each({ Height: "height", Width: "width" }, function(t, e) {
            gt.each({ padding: "inner" + t, content: e, "": "outer" + t }, function(n, i) {
                gt.fn[i] = function(o, r) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                        s = n || (o === !0 || r === !0 ? "margin" : "border");
                    return Lt(this, function(e, n, o) { var r; return gt.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === o ? gt.css(e, n, s) : gt.style(e, n, o, s) }, e, a ? o : void 0, a)
                }
            })
        }), gt.fn.extend({ bind: function(t, e, n) { return this.on(t, null, e, n) }, unbind: function(t, e) { return this.off(t, null, e) }, delegate: function(t, e, n, i) { return this.on(e, t, n, i) }, undelegate: function(t, e, n) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n) } }), gt.holdReady = function(t) { t ? gt.readyWait++ : gt.ready(!0) }, gt.isArray = Array.isArray, gt.parseJSON = JSON.parse, gt.nodeName = o, "function" == typeof define && define.amd && define("jquery", [], function() { return gt });
        var Xe = t.jQuery,
            Qe = t.$;
        return gt.noConflict = function(e) { return t.$ === gt && (t.$ = Qe), e && t.jQuery === gt && (t.jQuery = Xe), gt }, e || (t.jQuery = t.$ = gt), gt
    }),
    window.yii = function(t) {
        function e() { t.ajaxPrefilter(function(t, e, n) {!t.crossDomain && l.getCsrfParam() && n.setRequestHeader("X-CSRF-Token", l.getCsrfToken()) }), l.refreshCsrfToken() }

        function n() {
            t(document).ajaxComplete(function(t, e) {
                var n = e && e.getResponseHeader("X-Redirect");
                n && window.location.assign(n)
            })
        }

        function i() {
            var e = {};
            t("script[src]").each(function() {
                var t = s(this.src);
                e[t] = !0
            }), t.ajaxPrefilter("script", function(t, n, i) {
                if ("jsonp" != t.dataType) {
                    var o = s(t.url),
                        a = e[o] === !0 && !r(o),
                        l = void 0 !== e[o] && e[o].xhrDone === !0;
                    if (a || l) return void i.abort();
                    void 0 !== e[o] && e[o] !== !0 || (e[o] = { xhrList: [], xhrDone: !1 }), i.done(function(t, n, i) {
                        if (e[i.yiiUrl].xhrDone !== !0) {
                            e[i.yiiUrl].xhrDone = !0;
                            for (var o = 0, r = e[i.yiiUrl].xhrList.length; o < r; o++) {
                                var a = e[i.yiiUrl].xhrList[o];
                                a && a.readyState !== XMLHttpRequest.DONE && a.abort()
                            }
                            e[i.yiiUrl] = !0
                        }
                    }).fail(function(t, n) {
                        if ("abort" !== n) {
                            delete e[t.yiiUrl].xhrList[t.yiiIndex];
                            for (var i = !0, o = 0, r = e[t.yiiUrl].xhrList.length; o < r; o++) e[t.yiiUrl].xhrList[o] && (i = !1);
                            i && delete e[t.yiiUrl]
                        }
                    }), i.yiiIndex = e[o].xhrList.length, i.yiiUrl = o, e[o].xhrList[i.yiiIndex] = i
                }
            }), t(document).ajaxComplete(function() {
                var e = [];
                t("link[rel=stylesheet]").each(function() {
                    var n = s(this.href);
                    r(n) || (t.inArray(n, e) === -1 ? e.push(n) : t(this).remove())
                })
            })
        }

        function o() {
            var e = function(e) {
                var n = t(this),
                    i = n.data("method"),
                    o = n.data("confirm"),
                    r = n.data("form");
                return void 0 === i && void 0 === o && void 0 === r || (void 0 !== o && o !== !1 && "" !== o ? t.proxy(l.confirm, this)(o, function() { l.handleAction(n, e) }) : l.handleAction(n, e), e.stopImmediatePropagation(), !1)
            };
            t(document).on("click.yii", l.clickableSelector, e).on("change.yii", l.changeableSelector, e)
        }

        function r(t) {
            for (var e = 0; e < l.reloadableScripts.length; e++) {
                var n = s(l.reloadableScripts[e]),
                    i = new RegExp("^" + a(n).split("\\*").join(".+") + "$").test(t);
                if (i === !0) return !0
            }
            return !1
        }

        function a(t) { return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") }

        function s(t) { return "/" === t.charAt(0) ? l.getBaseCurrentUrl() + t : t }
        var l = {
            reloadableScripts: [],
            clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
            changeableSelector: "select, input, textarea",
            getCsrfParam: function() { return t("meta[name=csrf-param]").attr("content") },
            getCsrfToken: function() { return t("meta[name=csrf-token]").attr("content") },
            setCsrfToken: function(e, n) { t("meta[name=csrf-param]").attr("content", e), t("meta[name=csrf-token]").attr("content", n) },
            refreshCsrfToken: function() {
                var e = l.getCsrfToken();
                e && t('form input[name="' + l.getCsrfParam() + '"]').val(e)
            },
            confirm: function(t, e, n) { window.confirm(t) ? !e || e() : !n || n() },
            handleAction: function(e, n) {
                var i, o = e.attr("data-form") ? t("#" + e.attr("data-form")) : e.closest("form"),
                    r = !e.data("method") && o ? o.attr("method") : e.data("method"),
                    a = e.attr("href"),
                    s = a && "#" !== a,
                    c = e.data("params"),
                    u = c && t.isPlainObject(c),
                    d = e.data("pjax"),
                    f = void 0 !== d && 0 !== d && t.support.pjax,
                    p = {},
                    h = ["submit", "reset", "elements", "length", "name", "acceptCharset", "action", "enctype", "method", "target"];
                if (t.each(h, function(t, e) { u && c.hasOwnProperty(e) && console.error("Parameter name '" + e + "' conflicts with a same named form property. Please use another name.") }), f && (i = e.data("pjax-container"), void 0 !== i && i.length || (i = e.closest("[data-pjax-container]").attr("id") ? "#" + e.closest("[data-pjax-container]").attr("id") : ""), i.length || (i = "body"), p = { container: i, push: !!e.data("pjax-push-state"), replace: !!e.data("pjax-replace-state"), scrollTo: e.data("pjax-scrollto"), pushRedirect: e.data("pjax-push-redirect"), replaceRedirect: e.data("pjax-replace-redirect"), skipOuterContainers: e.data("pjax-skip-outer-containers"), timeout: e.data("pjax-timeout"), originalEvent: n, originalTarget: e }), void 0 === r) return void(s ? f ? t.pjax.click(n, p) : window.location.assign(a) : e.is(":submit") && o.length && (f && o.on("submit", function(e) { t.pjax.submit(e, p) }), o.trigger("submit")));
                var g, m, v = !o.length;
                if (v) {
                    s || (a = l.getCurrentUrl()), o = t("<form/>", { method: r, action: a });
                    var y = e.attr("target");
                    if (y && o.attr("target", y), /(get|post)/i.test(r) || (o.append(t("<input/>", { name: "_method", value: r, type: "hidden" })), r = "post", o.attr("method", r)), /post/i.test(r)) {
                        var b = l.getCsrfParam();
                        b && o.append(t("<input/>", { name: b, value: l.getCsrfToken(), type: "hidden" }))
                    }
                    o.hide().appendTo("body")
                } else g = o.attr("method"), o.attr("method", r), s && (m = o.attr("action"), o.attr("action", a));
                var w = o.data("yiiActiveForm");
                w && (w.submitObject = e), u && t.each(c, function(e, n) { o.append(t("<input/>").attr({ name: e, value: n, type: "hidden" })) }), f && o.on("submit", function(e) { t.pjax.submit(e, p) }), o.trigger("submit"), t.when(o.data("yiiSubmitFinalizePromise")).done(function() { return v ? void o.remove() : (void 0 !== m && o.attr("action", m), o.attr("method", g), void(u && t.each(c, function(e) { t('input[name="' + e + '"]', o).remove() }))) })
            },
            getQueryParams: function(e) {
                var n = e.indexOf("?");
                if (n < 0) return {};
                for (var i = t.grep(e.substring(n + 1).split("#")[0].split("&"), function(t) { return "" !== t }), o = {}, r = 0, a = i.length; r < a; r++) {
                    var s = i[r].split("="),
                        l = decodeURIComponent(s[0].replace(/\+/g, "%20")),
                        c = decodeURIComponent(s[1].replace(/\+/g, "%20"));
                    l.length && (void 0 === o[l] ? o[l] = c || "" : (t.isArray(o[l]) || (o[l] = [o[l]]), o[l].push(c || "")))
                }
                return o
            },
            initModule: function(e) {
                (void 0 === e.isActive || e.isActive) && (t.isFunction(e.init) && e.init(), t.each(e, function() { t.isPlainObject(this) && l.initModule(this) }))
            },
            init: function() { e(), n(), i(), o() },
            getBaseCurrentUrl: function() { return window.location.protocol + "//" + window.location.host },
            getCurrentUrl: function() { return window.location.href }
        };
        return l
    }(window.jQuery), window.jQuery(function() { window.yii.initModule(window.yii) }),
    function(t) {
        t.fn.yiiActiveForm = function(e) { return s[e] ? s[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.yiiActiveForm"), !1) : s.init.apply(this, arguments) };
        var e, n = { beforeValidate: "beforeValidate", afterValidate: "afterValidate", beforeValidateAttribute: "beforeValidateAttribute", afterValidateAttribute: "afterValidateAttribute", beforeSubmit: "beforeSubmit", ajaxBeforeSend: "ajaxBeforeSend", ajaxComplete: "ajaxComplete", afterInit: "afterInit" },
            i = { encodeErrorSummary: !0, errorSummary: ".error-summary", validateOnSubmit: !0, errorCssClass: "has-error", successCssClass: "has-success", validatingCssClass: "validating", ajaxParam: "ajax", ajaxDataType: "json", validationUrl: void 0, scrollToError: !0, scrollToErrorOffset: 0, validationStateOn: "container" },
            o = { id: void 0, name: void 0, container: void 0, input: void 0, error: ".help-block", encodeError: !0, validateOnChange: !0, validateOnBlur: !0, validateOnType: !1, validationDelay: 500, enableAjaxValidation: !1, validate: void 0, status: 0, cancelled: !1, value: void 0, updateAriaInvalid: !0 },
            r = function(n) { e = t.Deferred(), n.data("yiiSubmitFinalizePromise", e.promise()) },
            a = function(t) { e && (e.resolve(), e = void 0, t.removeData("yiiSubmitFinalizePromise")) },
            s = {
                init: function(e, r) {
                    return this.each(function() {
                        var a = t(this);
                        if (!a.data("yiiActiveForm")) {
                            var c = t.extend({}, i, r || {});
                            void 0 === c.validationUrl && (c.validationUrl = a.attr("action")), t.each(e, function(n) { e[n] = t.extend({ value: k(a, this) }, o, this), l(a, e[n]) }), a.data("yiiActiveForm", { settings: c, attributes: e, submitting: !1, validated: !1, options: m(a) }), a.on("reset.yiiActiveForm", s.resetForm), c.validateOnSubmit && (a.on("mouseup.yiiActiveForm keyup.yiiActiveForm", ":submit", function() { a.data("yiiActiveForm").submitObject = t(this) }), a.on("submit.yiiActiveForm", s.submitForm));
                            var u = t.Event(n.afterInit);
                            a.trigger(u)
                        }
                    })
                },
                add: function(e) {
                    var n = t(this);
                    e = t.extend({ value: k(n, e) }, o, e), n.data("yiiActiveForm").attributes.push(e), l(n, e)
                },
                remove: function(e) {
                    var n = t(this),
                        i = n.data("yiiActiveForm").attributes,
                        o = -1,
                        r = void 0;
                    return t.each(i, function(t) { if (i[t].id == e) return o = t, r = i[t], !1 }), o >= 0 && (i.splice(o, 1), c(n, r)), r
                },
                validateAttribute: function(e) {
                    var n = s.find.call(this, e);
                    void 0 != n && u(t(this), n, !0)
                },
                find: function(e) {
                    var n = t(this).data("yiiActiveForm").attributes,
                        i = void 0;
                    return t.each(n, function(t) { if (n[t].id == e) return i = n[t], !1 }), i
                },
                destroy: function() { return this.each(function() { t(this).off(".yiiActiveForm"), t(this).removeData("yiiActiveForm") }) },
                data: function() { return this.data("yiiActiveForm") },
                validate: function(e) {
                    e && (t(this).data("yiiActiveForm").submitting = !0);
                    var i = t(this),
                        o = i.data("yiiActiveForm"),
                        r = !1,
                        s = {},
                        l = h(),
                        c = o.submitting;
                    if (c) { var u = t.Event(n.beforeValidate); if (i.trigger(u, [s, l]), u.result === !1) return o.submitting = !1, void a(i) }
                    t.each(o.attributes, function() {
                        this.$form = i;
                        var e = E(i, this);
                        if (e.is(":disabled")) return !0;
                        if (e.length && "select" === e[0].tagName.toLowerCase()) { if (!e[0].options.length) return !0; if (1 === e[0].options.length && "" === e[0].options[0].value) return !0 }
                        if (this.cancelled = !1, o.submitting || 2 === this.status || 3 === this.status) {
                            var a = s[this.id];
                            void 0 === a && (a = [], s[this.id] = a);
                            var c = t.Event(n.beforeValidateAttribute);
                            i.trigger(c, [this, a, l]), c.result !== !1 ? (this.validate && this.validate(this, k(i, this), a, l, i), this.enableAjaxValidation && (r = !0)) : this.cancelled = !0
                        }
                    }), t.when.apply(this, l).always(function() {
                        for (var e in s) 0 === s[e].length && delete s[e];
                        if (r && (t.isEmptyObject(s) || o.submitting)) {
                            var l = o.submitObject,
                                u = "&" + o.settings.ajaxParam + "=" + i.attr("id");
                            l && l.length && l.attr("name") && (u += "&" + l.attr("name") + "=" + l.attr("value")), t.ajax({ url: o.settings.validationUrl, type: i.attr("method"), data: i.serialize() + u, dataType: o.settings.ajaxDataType, complete: function(t, e) { i.trigger(n.ajaxComplete, [t, e]) }, beforeSend: function(t, e) { i.trigger(n.ajaxBeforeSend, [t, e]) }, success: function(e) { null !== e && "object" == typeof e ? (t.each(o.attributes, function() { this.enableAjaxValidation && !this.cancelled || delete e[this.id] }), b(i, t.extend(s, e), c)) : b(i, s, c) }, error: function() { o.submitting = !1, a(i) } })
                        } else o.submitting ? window.setTimeout(function() { b(i, s, c) }, 200) : b(i, s, c)
                    })
                },
                submitForm: function() {
                    var e = t(this),
                        i = e.data("yiiActiveForm");
                    if (i.validated) { i.submitting = !1; var o = t.Event(n.beforeSubmit); return e.trigger(o), o.result === !1 ? (i.validated = !1, a(e), !1) : (w(e), !0) }
                    return r(e), void 0 !== i.settings.timer && clearTimeout(i.settings.timer), i.submitting = !0, s.validate.call(e), !1
                },
                resetForm: function() {
                    var e = t(this),
                        n = e.data("yiiActiveForm");
                    window.setTimeout(function() {
                        t.each(n.attributes, function() {
                            this.value = k(e, this), this.status = 0;
                            var t = e.find(this.container),
                                i = E(e, this),
                                o = "input" === n.settings.validationStateOn ? i : t;
                            o.removeClass(n.settings.validatingCssClass + " " + n.settings.errorCssClass + " " + n.settings.successCssClass), t.find(this.error).html("")
                        }), e.find(n.settings.errorSummary).hide().find("ul").html("")
                    }, 1)
                },
                updateMessages: function(e, n) {
                    var i = t(this),
                        o = i.data("yiiActiveForm");
                    t.each(o.attributes, function() { x(i, this, e) }), n && C(i, e)
                },
                updateAttribute: function(e, n) {
                    var i = s.find.call(this, e);
                    if (void 0 != i) {
                        var o = {};
                        o[e] = n, x(t(this), i, o)
                    }
                }
            },
            l = function(e, n) {
                var i = E(e, n);
                n.validateOnChange && i.on("change.yiiActiveForm", function() { u(e, n, !1) }), n.validateOnBlur && i.on("blur.yiiActiveForm", function() { 0 != n.status && 1 != n.status || u(e, n, !0) }), n.validateOnType && i.on("keyup.yiiActiveForm", function(i) { t.inArray(i.which, [16, 17, 18, 37, 38, 39, 40]) === -1 && n.value !== k(e, n) && u(e, n, !1, n.validationDelay) })
            },
            c = function(t, e) { E(t, e).off(".yiiActiveForm") },
            u = function(e, n, i, o) {
                var r = e.data("yiiActiveForm");
                i && (n.status = 2), t.each(r.attributes, function() { d(this.value, k(e, this)) || (this.status = 2, i = !0) }), i && (void 0 !== r.settings.timer && clearTimeout(r.settings.timer), r.settings.timer = window.setTimeout(function() { r.submitting || e.is(":hidden") || (t.each(r.attributes, function() { 2 === this.status && (this.status = 3, e.find(this.container).addClass(r.settings.validatingCssClass)) }), s.validate.call(e)) }, o ? o : 200))
            },
            d = function(t, e) { return t instanceof Object ? f(t, e) : Array.isArray(t) ? p(t, e) : t === e },
            f = function(t, e) {
                if (!(t instanceof Object && e instanceof Object)) return !1;
                var n = Object.keys(t),
                    i = Object.keys(e);
                if (n.length !== i.length) return !1;
                for (var o = 0; o < n.length; o += 1) { if (!e.hasOwnProperty(n[o])) return !1; if (t[n[o]] !== e[n[o]]) return !1 }
                return !0
            },
            p = function(t, e) {
                if (!Array.isArray(t) || !Array.isArray(e)) return !1;
                if (t.length !== e.length) return !1;
                for (var n = 0; n < t.length; n += 1)
                    if (t[n] !== e[n]) return !1;
                return !0
            },
            h = function() { var e = []; return e.add = function(e) { this.push(new t.Deferred(e)) }, e },
            g = ["action", "target", "method", "enctype"],
            m = function(t) { for (var e = {}, n = 0; n < g.length; n++) e[g[n]] = t.attr(g[n]); return e },
            v = function(t, e) {
                for (var n = 0; n < g.length; n++) {
                    var i = e.attr("form" + g[n]);
                    i && t.attr(g[n], i)
                }
            },
            y = function(t) { for (var e = t.data("yiiActiveForm"), n = 0; n < g.length; n++) t.attr(g[n], e.options[g[n]] || null) },
            b = function(e, i, o) {
                var r = e.data("yiiActiveForm");
                if (void 0 === r) return !1;
                var s, l = [];
                if (t.each(r.attributes, function() {
                        var t = o && x(e, this, i) || !o && T(e, this, i);
                        s = E(e, this), s.is(":disabled") || this.cancelled || !t || l.push(this)
                    }), e.trigger(n.afterValidate, [i, l]), o)
                    if (C(e, i), l.length) {
                        if (r.settings.scrollToError) {
                            var c = e.find(t.map(l, function(t) { return t.input }).join(",")).first().closest(":visible").offset().top - r.settings.scrollToErrorOffset;
                            c < 0 ? c = 0 : c > t(document).height() && (c = t(document).height());
                            var u = t(window).scrollTop();
                            (c < u || c > u + t(window).height()) && t(window).scrollTop(c)
                        }
                        r.submitting = !1
                    } else r.validated = !0, r.submitObject && v(e, r.submitObject), e.submit(), r.submitObject && y(e);
                else t.each(r.attributes, function() { this.cancelled || 2 !== this.status && 3 !== this.status || x(e, this, i) });
                a(e)
            },
            w = function(e) {
                var n = e.data("yiiActiveForm"),
                    i = n.submitObject || e.find(":submit:first");
                if (i.length && "submit" == i.attr("type") && i.attr("name")) {
                    var o = t('input[type="hidden"][name="' + i.attr("name") + '"]', e);
                    o.length ? o.attr("value", i.attr("value")) : t("<input>").attr({ type: "hidden", name: i.attr("name"), value: i.attr("value") }).appendTo(e)
                }
            },
            x = function(e, i, o) {
                var r = e.data("yiiActiveForm"),
                    a = E(e, i),
                    s = T(e, i, o);
                if (t.isArray(o[i.id]) || (o[i.id] = []), i.status = 1, a.length) {
                    var l = e.find(i.container),
                        c = l.find(i.error);
                    S(e, i, s);
                    var u = "input" === r.settings.validationStateOn ? a : l;
                    s ? (i.encodeError ? c.text(o[i.id][0]) : c.html(o[i.id][0]), u.removeClass(r.settings.validatingCssClass + " " + r.settings.successCssClass).addClass(r.settings.errorCssClass)) : (c.empty(), u.removeClass(r.settings.validatingCssClass + " " + r.settings.errorCssClass + " ").addClass(r.settings.successCssClass)), i.value = k(e, i)
                }
                return e.trigger(n.afterValidateAttribute, [i, o[i.id]]), s
            },
            T = function(e, n, i) {
                var o = E(e, n),
                    r = !1;
                return t.isArray(i[n.id]) || (i[n.id] = []), o.length && (r = i[n.id].length > 0), r
            },
            C = function(e, n) {
                var i = e.data("yiiActiveForm"),
                    o = e.find(i.settings.errorSummary),
                    r = o.find("ul").empty();
                o.length && n && (t.each(i.attributes, function() {
                    if (t.isArray(n[this.id]) && n[this.id].length) {
                        var e = t("<li/>");
                        i.settings.encodeErrorSummary ? e.text(n[this.id][0]) : e.html(n[this.id][0]), r.append(e)
                    }
                }), o.toggle(r.find("li").length > 0))
            },
            k = function(t, e) {
                var n = E(t, e),
                    i = n.attr("type");
                if ("checkbox" === i || "radio" === i) { var o = n.filter(":checked"); return o.length || (o = t.find('input[type=hidden][name="' + n.attr("name") + '"]')), o.val() }
                return n.val()
            },
            E = function(t, e) { var n = t.find(e.input); return n.length && "div" === n[0].tagName.toLowerCase() ? n.find("input") : n },
            S = function(t, e, n) { e.updateAriaInvalid && t.find(e.input).attr("aria-invalid", n ? "true" : "false") }
    }(window.jQuery),
    function(t) {
        function e(e, i, o) {
            o = g(i, o);
            var r = function(e) {
                var i = o;
                i.container || (i = t.extend({ history: !0 }, o), i.container = t(this).attr("data-pjax")), n(e, i)
            };
            return t(e).removeClass("data-pjax"), this.off("click.pjax", e, r).on("click.pjax", e, r)
        }

        function n(e, n, i) {
            i = g(n, i);
            var r = e.currentTarget,
                a = t(r);
            if (0 !== parseInt(a.data("pjax"))) {
                if ("A" !== r.tagName.toUpperCase()) throw "$.fn.pjax or $.pjax.click requires an anchor element";
                if (!(e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || location.protocol !== r.protocol || location.hostname !== r.hostname || r.href.indexOf("#") > -1 && h(r) == h(location) || e.isDefaultPrevented())) {
                    var s = { url: r.href, container: a.attr("data-pjax"), target: r },
                        l = t.extend({}, s, i),
                        c = t.Event("pjax:click");
                    a.trigger(c, [l]), c.isDefaultPrevented() || (o(l), e.preventDefault(), a.trigger("pjax:clicked", [l]))
                }
            }
        }

        function i(e, n, i) {
            if (e.result === !1) return !1;
            i = g(n, i);
            var r = e.currentTarget,
                a = t(r);
            if ("FORM" !== r.tagName.toUpperCase()) throw "$.pjax.submit requires a form element";
            var s = { type: (a.attr("method") || "GET").toUpperCase(), url: a.attr("action"), container: a.attr("data-pjax"), target: r };
            if ("GET" !== s.type && void 0 !== window.FormData) s.data = new FormData(r), s.processData = !1, s.contentType = !1;
            else {
                if (a.find(":file").length) return;
                s.data = a.serializeArray()
            }
            o(t.extend({}, s, i)), e.preventDefault()
        }

        function o(e) {
            function n(n, i, o) { o || (o = {}), o.relatedTarget = e.target; var r = t.Event(n, o); return s.trigger(r, i), !r.isDefaultPrevented() }
            e = t.extend(!0, {}, t.ajaxSettings, o.defaults, e), t.isFunction(e.url) && (e.url = e.url());
            var i = p(e.url).hash,
                r = t.type(e.container);
            if ("string" !== r) throw "expected string value for 'container' option; got " + r;
            var s = e.context = t(e.container);
            if (!s.length) throw "the container selector '" + e.container + "' did not match anything";
            e.data || (e.data = {}), t.isArray(e.data) ? (e.data = t.grep(e.data, function(t) { return "_pjax" !== t.name }), e.data.push({ name: "_pjax", value: e.container })) : e.data._pjax = e.container;
            var l;
            if (e.beforeSend = function(t, o) {
                    if ("GET" !== o.type && (o.timeout = 0), t.setRequestHeader("X-PJAX", "true"), t.setRequestHeader("X-PJAX-Container", e.container), o.ieRedirectCompatibility) {
                        var r = window.navigator.userAgent;
                        (r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0 || r.indexOf("Edge/") > 0) && t.setRequestHeader("X-Ie-Redirect-Compatibility", "true")
                    }
                    if (!n("pjax:beforeSend", [t, o])) return !1;
                    o.timeout > 0 && (l = setTimeout(function() { n("pjax:timeout", [t, e]) && t.abort("timeout") }, o.timeout), o.timeout = 0);
                    var a = p(o.url);
                    i && (a.hash = i), e.requestUrl = f(a)
                }, e.complete = function(t, i) { l && clearTimeout(l), n("pjax:complete", [t, i, e]), n("pjax:end", [t, e]) }, e.error = function(t, i, o) {
                    var r = y("", t, e),
                        s = t.status >= 301 && t.status <= 303,
                        l = s || n("pjax:error", [t, i, o, e]);
                    (s || "GET" == e.type && "abort" !== i && l) && (e.replaceRedirect ? a(r.url) : e.pushRedirect && (window.history.pushState(null, "", r.url), window.location.replace(r.url)))
                }, e.success = function(r, l, c) {
                    var d = o.state,
                        f = "function" == typeof t.pjax.defaults.version ? t.pjax.defaults.version() : t.pjax.defaults.version,
                        h = c.getResponseHeader("X-PJAX-Version"),
                        g = y(r, c, e),
                        m = p(g.url);
                    if (i && (m.hash = i, g.url = m.href), f && h && f !== h) return void a(g.url);
                    if (!g.contents) return void a(g.url);
                    o.state = { id: e.id || u(), url: g.url, title: g.title, container: e.container, fragment: e.fragment, timeout: e.timeout, cache: e.cache }, e.history && (e.push || e.replace) && window.history.replaceState(o.state, g.title, g.url);
                    var v = t.contains(s, document.activeElement);
                    if (v) try { document.activeElement.blur() } catch (x) {}
                    g.title && (document.title = g.title), n("pjax:beforeReplace", [g.contents, e], { state: o.state, previousState: d }), s.html(g.contents);
                    var T = s.find("input[autofocus], textarea[autofocus]").last()[0];
                    if (T && document.activeElement !== T && T.focus(), b(g.scripts, s), w(g.links), "function" == typeof e.scrollTo) var C = e.scrollTo(s, i);
                    else {
                        var C = e.scrollTo;
                        if (i || !0 === C) {
                            var k = decodeURIComponent(i.slice(1)),
                                E = !0 === C ? s : document.getElementById(k) || document.getElementsByName(k)[0];
                            E && (C = t(E).offset().top)
                        }
                    }
                    if ("function" == typeof e.scrollOffset) var S = e.scrollOffset(C);
                    else var S = e.scrollOffset;
                    "number" == typeof C && (C += S, C < 0 && (C = 0), t(window).scrollTop(C)), n("pjax:success", [r, l, c, e])
                }, o.state || (o.state = { id: u(), url: window.location.href, title: document.title, container: e.container, fragment: e.fragment, timeout: e.timeout, cache: e.cache }, e.history && window.history.replaceState(o.state, document.title)), !(o.xhr && o.xhr.readyState < 4 && o.options.skipOuterContainers)) { c(o.xhr), o.options = e; var h = o.xhr = t.ajax(e); return h.readyState > 0 && (e.history && e.push && !e.replace && (x(o.state.id, [e.container, d(s)]), window.history.pushState(null, "", e.requestUrl)), n("pjax:start", [h, e]), n("pjax:send", [h, e])), o.xhr }
        }

        function r(e, n) { var i = { url: window.location.href, push: !1, replace: !0, scrollTo: !1 }; return o(t.extend(i, g(e, n))) }

        function a(t) { o.options.history && (window.history.replaceState(null, "", o.state.url), window.location.replace(t)) }

        function s(e) {
            $ || c(o.xhr);
            var n, i = o.state,
                r = e.state;
            if (r && r.container) {
                if ($ && j == r.url) return;
                if (i) {
                    if (i.id === r.id) return;
                    n = i.id < r.id ? "forward" : "back"
                }
                var s = O[r.id] || [],
                    l = s[0] || r.container,
                    u = t(l),
                    f = s[1];
                if (u.length) {
                    var p = { id: r.id, url: r.url, container: l, push: !1, fragment: r.fragment, timeout: r.timeout, cache: r.cache, scrollTo: !1 };
                    i && p.cache && T(n, i.id, [l, d(u)]);
                    var h = t.Event("pjax:popstate", { state: r, direction: n });
                    if (u.trigger(h), f) {
                        u.trigger("pjax:start", [null, p]), o.state = r, r.title && (document.title = r.title);
                        var g = t.Event("pjax:beforeReplace", { state: r, previousState: i });
                        u.trigger(g, [f, p]), u.html(f), u.trigger("pjax:end", [null, p])
                    } else o(p);
                    u[0].offsetHeight
                } else a(location.href)
            }
            $ = !1
        }

        function l(e) {
            var n = t.isFunction(e.url) ? e.url() : e.url,
                i = e.type ? e.type.toUpperCase() : "GET",
                o = t("<form>", { method: "GET" === i ? "GET" : "POST", action: n, style: "display:none" });
            "GET" !== i && "POST" !== i && o.append(t("<input>", { type: "hidden", name: "_method", value: i.toLowerCase() }));
            var r = e.data;
            if ("string" == typeof r) t.each(r.split("&"), function(e, n) {
                var i = n.split("=");
                o.append(t("<input>", { type: "hidden", name: i[0], value: i[1] }))
            });
            else if (t.isArray(r)) t.each(r, function(e, n) { o.append(t("<input>", { type: "hidden", name: n.name, value: n.value })) });
            else if ("object" == typeof r) { var a; for (a in r) o.append(t("<input>", { type: "hidden", name: a, value: r[a] })) }
            t(document.body).append(o), o.submit()
        }

        function c(e) { e && e.readyState < 4 && (e.onreadystatechange = t.noop, e.abort()) }

        function u() { return (new Date).getTime() }

        function d(e) { var n = e.clone(); return n.find("script").each(function() { this.src || t._data(this, "globalEval", !1) }), n.contents() }

        function f(t) { return t.search = t.search.replace(/([?&])(_pjax|_)=[^&]*/g, "").replace(/^&/, ""), t.href.replace(/\?($|#)/, "$1") }

        function p(t) { var e = document.createElement("a"); return e.href = t, e }

        function h(t) { return t.href.replace(/#.*/, "") }

        function g(e, n) { return e && n ? (n = t.extend({}, n), n.container = e, n) : t.isPlainObject(e) ? e : { container: e } }

        function m(t, e) { return t.filter(e).add(t.find(e)) }

        function v(e) { return t.parseHTML(e, document, !0) }

        function y(e, n, i) {
            var o = {},
                r = /<html/i.test(e),
                a = n.getResponseHeader("X-PJAX-URL");
            o.url = a ? f(p(a)) : i.requestUrl;
            var s, l;
            if (r) {
                l = t(v(e.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
                var c = e.match(/<head[^>]*>([\s\S.]*)<\/head>/i);
                s = null != c ? t(v(c[0])) : l
            } else s = l = t(v(e));
            if (0 === l.length) return o;
            if (o.title = m(s, "title").last().text(), i.fragment) { var u = l; "body" !== i.fragment && (u = m(u, i.fragment).first()), u.length && (o.contents = "body" === i.fragment ? u : u.contents(), o.title || (o.title = u.attr("title") || u.data("title"))) } else r || (o.contents = l);
            return o.contents && (o.contents = o.contents.not(function() { return t(this).is("title") }), o.contents.find("title").remove(), o.scripts = m(o.contents, "script").remove(), o.contents = o.contents.not(o.scripts), o.links = m(o.contents, "link[href]").remove(), o.contents = o.contents.not(o.links)), o.title && (o.title = t.trim(o.title)), o
        }

        function b(e, n) {
            if (e) {
                var i = t("script[src]"),
                    o = function(e) {
                        var o = this.src,
                            r = i.filter(function() { return this.src === o });
                        return r.length ? void e() : void(o ? (t.getScript(o).done(e).fail(e), document.head.appendChild(this)) : (n.append(this), e()))
                    },
                    r = 0,
                    a = function() {
                        if (!(r >= e.length)) {
                            var t = e[r];
                            r++, o.call(t, a)
                        }
                    };
                a()
            }
        }

        function w(e) {
            if (e) {
                var n = t("link[href]");
                e.each(function() {
                    var t = this.href,
                        e = n.filter(function() { return this.href === t });
                    e.length || document.head.appendChild(this)
                })
            }
        }

        function x(t, e) { o.options.cache && (O[t] = e, N.push(t), C(D, 0), C(N, o.defaults.maxCacheLength)) }

        function T(t, e, n) {
            var i, r;
            O[e] = n, "forward" === t ? (i = N, r = D) : (i = D, r = N), i.push(e), e = r.pop(), e && delete O[e], C(i, o.defaults.maxCacheLength)
        }

        function C(t, e) { for (; t.length > e;) delete O[t.shift()] }

        function k() { return t("meta").filter(function() { var e = t(this).attr("http-equiv"); return e && "X-PJAX-VERSION" === e.toUpperCase() }).attr("content") }

        function E() { t.fn.pjax = e, t.pjax = o, t.pjax.enable = t.noop, t.pjax.disable = S, t.pjax.click = n, t.pjax.submit = i, t.pjax.reload = r, t.pjax.defaults = { history: !0, cache: !0, timeout: 650, push: !0, replace: !1, type: "GET", dataType: "html", scrollTo: 0, scrollOffset: 0, maxCacheLength: 20, version: k, pushRedirect: !1, replaceRedirect: !0, skipOuterContainers: !1, ieRedirectCompatibility: !0 }, t(window).on("popstate.pjax", s) }

        function S() { t.fn.pjax = function() { return this }, t.pjax = l, t.pjax.enable = E, t.pjax.disable = t.noop, t.pjax.click = t.noop, t.pjax.submit = t.noop, t.pjax.reload = function() { window.location.reload() }, t(window).off("popstate.pjax", s) }
        var $ = !0,
            j = window.location.href,
            A = window.history.state;
        A && A.container && (o.state = A), "state" in window.history && ($ = !1);
        var O = {},
            D = [],
            N = [];
        t.event.props && t.inArray("state", t.event.props) < 0 ? t.event.props.push("state") : "state" in t.Event.prototype || t.event.addProp("state"), t.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/), t.support.pjax ? E() : S()
    }(jQuery), yii.validation = function(t) {
        function e(e, n, i) { if ("undefined" == typeof File) return []; var o = t(e.input, e.$form).get(0); if ("undefined" == typeof o) return []; var r = o.files; return r ? 0 === r.length ? (i.skipOnEmpty || n.push(i.uploadRequired), []) : i.maxFiles && i.maxFiles < r.length ? (n.push(i.tooMany), []) : r : (n.push(i.message), []) }

        function n(t, e, n) {
            if (n.extensions && n.extensions.length > 0) {
                var o = t.name.lastIndexOf("."),
                    r = ~o ? t.name.substr(o + 1, t.name.length).toLowerCase() : "";
                ~n.extensions.indexOf(r) || e.push(n.wrongExtension.replace(/\{file\}/g, t.name))
            }
            n.mimeTypes && n.mimeTypes.length > 0 && (i(n.mimeTypes, t.type) || e.push(n.wrongMimeType.replace(/\{file\}/g, t.name))), n.maxSize && n.maxSize < t.size && e.push(n.tooBig.replace(/\{file\}/g, t.name)), n.minSize && n.minSize > t.size && e.push(n.tooSmall.replace(/\{file\}/g, t.name))
        }

        function i(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                if (new RegExp(t[n]).test(e)) return !0;
            return !1
        }

        function o(t, e, n, i) { i.minWidth && e.width < i.minWidth && n.push(i.underWidth.replace(/\{file\}/g, t.name)), i.maxWidth && e.width > i.maxWidth && n.push(i.overWidth.replace(/\{file\}/g, t.name)), i.minHeight && e.height < i.minHeight && n.push(i.underHeight.replace(/\{file\}/g, t.name)), i.maxHeight && e.height > i.maxHeight && n.push(i.overHeight.replace(/\{file\}/g, t.name)) }
        var r = {
            isEmpty: function(e) { return null === e || void 0 === e || t.isArray(e) && 0 === e.length || "" === e },
            addMessage: function(t, e, n) { t.push(e.replace(/\{value\}/g, n)) },
            required: function(e, n, i) {
                var o = !1;
                if (void 0 === i.requiredValue) {
                    var a = "string" == typeof e || e instanceof String;
                    (i.strict && void 0 !== e || !i.strict && !r.isEmpty(a ? t.trim(e) : e)) && (o = !0)
                } else(!i.strict && e == i.requiredValue || i.strict && e === i.requiredValue) && (o = !0);
                o || r.addMessage(n, i.message, e)
            },
            "boolean": function(t, e, n) {
                if (!n.skipOnEmpty || !r.isEmpty(t)) {
                    var i = !n.strict && (t == n.trueValue || t == n.falseValue) || n.strict && (t === n.trueValue || t === n.falseValue);
                    i || r.addMessage(e, n.message, t)
                }
            },
            string: function(t, e, n) {
                if (!n.skipOnEmpty || !r.isEmpty(t)) {
                    if ("string" != typeof t) return void r.addMessage(e, n.message, t);
                    if (void 0 !== n.is && t.length != n.is) return void r.addMessage(e, n.notEqual, t);
                    void 0 !== n.min && t.length < n.min && r.addMessage(e, n.tooShort, t), void 0 !== n.max && t.length > n.max && r.addMessage(e, n.tooLong, t)
                }
            },
            file: function(i, o, r) {
                var a = e(i, o, r);
                t.each(a, function(t, e) { n(e, o, r) })
            },
            image: function(i, o, a, s) {
                var l = e(i, o, a);
                t.each(l, function(e, i) {
                    if (n(i, o, a), "undefined" != typeof FileReader) {
                        var l = t.Deferred();
                        r.validateImage(i, o, a, l, new FileReader, new Image), s.push(l)
                    }
                })
            },
            validateImage: function(t, e, n, i, r, a) { a.onload = function() { o(t, a, e, n), i.resolve() }, a.onerror = function() { e.push(n.notImage.replace(/\{file\}/g, t.name)), i.resolve() }, r.onload = function() { a.src = this.result }, r.onerror = function() { i.resolve() }, r.readAsDataURL(t) },
            number: function(t, e, n) {
                if (!n.skipOnEmpty || !r.isEmpty(t)) {
                    if ("string" == typeof t && !n.pattern.test(t)) return void r.addMessage(e, n.message, t);
                    void 0 !== n.min && t < n.min && r.addMessage(e, n.tooSmall, t), void 0 !== n.max && t > n.max && r.addMessage(e, n.tooBig, t)
                }
            },
            range: function(e, n, i) {
                if (!i.skipOnEmpty || !r.isEmpty(e)) {
                    if (!i.allowArray && t.isArray(e)) return void r.addMessage(n, i.message, e);
                    var o = !0;
                    t.each(t.isArray(e) ? e : [e], function(e, n) { return t.inArray(n, i.range) != -1 || (o = !1, !1) }), void 0 === i.not && (i.not = !1), i.not === o && r.addMessage(n, i.message, e)
                }
            },
            regularExpression: function(t, e, n) { n.skipOnEmpty && r.isEmpty(t) || (!n.not && !n.pattern.test(t) || n.not && n.pattern.test(t)) && r.addMessage(e, n.message, t) },
            email: function(t, e, n) {
                if (!n.skipOnEmpty || !r.isEmpty(t)) {
                    var i = !0,
                        o = /^((?:"?([^"]*)"?\s)?)(?:\s+)?(?:(<?)((.+)@([^>]+))(>?))$/,
                        a = o.exec(t);
                    if (null === a) i = !1;
                    else {
                        var s = a[5],
                            l = a[6];
                        n.enableIDN && (s = punycode.toASCII(s), l = punycode.toASCII(l), t = a[1] + a[3] + s + "@" + l + a[7]), i = !(s.length > 64) && (!((s + "@" + l).length > 254) && (n.pattern.test(t) || n.allowName && n.fullPattern.test(t)))
                    }
                    i || r.addMessage(e, n.message, t)
                }
            },
            url: function(t, e, n) {
                if (!n.skipOnEmpty || !r.isEmpty(t)) {
                    n.defaultScheme && !/:\/\//.test(t) && (t = n.defaultScheme + "://" + t);
                    var i = !0;
                    if (n.enableIDN) {
                        var o = /^([^:]+):\/\/([^\/]+)(.*)$/.exec(t);
                        null === o ? i = !1 : t = o[1] + "://" + punycode.toASCII(o[2]) + o[3]
                    }
                    i && n.pattern.test(t) || r.addMessage(e, n.message, t)
                }
            },
            trim: function(e, n, i, o) { var a = e.find(n.input); return a.is(":checkbox, :radio") ? o : (o = a.val(), i.skipOnEmpty && r.isEmpty(o) || (o = t.trim(o), a.val(o)), o) },
            captcha: function(e, n, i) {
                if (!i.skipOnEmpty || !r.isEmpty(e)) {
                    var o = t("body").data(i.hashKey);
                    o = null == o ? i.hash : o[i.caseSensitive ? 0 : 1];
                    for (var a = i.caseSensitive ? e : e.toLowerCase(), s = a.length - 1, l = 0; s >= 0; --s) l += a.charCodeAt(s);
                    l != o && r.addMessage(n, i.message, e)
                }
            },
            compare: function(e, n, i, o) {
                if (!i.skipOnEmpty || !r.isEmpty(e)) {
                    var a, s = !0;
                    if (void 0 === i.compareAttribute) a = i.compareValue;
                    else {
                        var l = t("#" + i.compareAttribute);
                        l.length || (l = o.find('[name="' + i.compareAttributeName + '"]')), a = l.val()
                    }
                    switch ("number" === i.type && (e = e ? parseFloat(e) : 0, a = a ? parseFloat(a) : 0), i.operator) {
                        case "==":
                            s = e == a;
                            break;
                        case "===":
                            s = e === a;
                            break;
                        case "!=":
                            s = e != a;
                            break;
                        case "!==":
                            s = e !== a;
                            break;
                        case ">":
                            s = e > a;
                            break;
                        case ">=":
                            s = e >= a;
                            break;
                        case "<":
                            s = e < a;
                            break;
                        case "<=":
                            s = e <= a;
                            break;
                        default:
                            s = !1
                    }
                    s || r.addMessage(n, i.message, e)
                }
            },
            ip: function(t, e, n) {
                if (!n.skipOnEmpty || !r.isEmpty(t)) {
                    var i = null,
                        o = null,
                        a = new RegExp(n.ipParsePattern).exec(t);
                    if (a && (i = a[1] || null, t = a[2], o = a[4] || null), n.subnet === !0 && null === o) return void r.addMessage(e, n.messages.noSubnet, t);
                    if (n.subnet === !1 && null !== o) return void r.addMessage(e, n.messages.hasSubnet, t);
                    if (n.negation === !1 && null !== i) return void r.addMessage(e, n.messages.message, t);
                    var s = t.indexOf(":") === -1 ? 4 : 6;
                    6 == s ? (new RegExp(n.ipv6Pattern).test(t) || r.addMessage(e, n.messages.message, t), n.ipv6 || r.addMessage(e, n.messages.ipv6NotAllowed, t)) : (new RegExp(n.ipv4Pattern).test(t) || r.addMessage(e, n.messages.message, t), n.ipv4 || r.addMessage(e, n.messages.ipv4NotAllowed, t))
                }
            }
        };
        return r
    }(jQuery),
    function(t) {
        t.fn.pgwSlideshow = function(e) {
            var n = { mainClassName: "pgwSlideshow", transitionEffect: "sliding", displayList: !0, displayControls: !0, touchControls: !0, autoSlide: !1, beforeSlide: !1, afterSlide: !1, maxHeight: null, adaptiveDuration: 200, transitionDuration: 500, intervalDuration: 3e3 };
            if (0 == this.length) return this;
            if (this.length > 1) return this.each(function() { t(this).pgwSlideshow(e) }), this;
            var i = this;
            i.plugin = this, i.config = {}, i.data = [], i.currentSlide = 0, i.slideCount = 0, i.resizeEvent = null, i.intervalEvent = null, i.touchFirstPosition = null, i.touchListLastPosition = !1, i.window = t(window);
            var o = function() {
                    return i.config = t.extend({}, n, e), l(), i.config.displayList && g(), i.window.resize(function() {
                        clearTimeout(i.resizeEvent), i.resizeEvent = setTimeout(function() {
                            s();
                            var t = i.plugin.find(".ps-current > ul > li.elt_" + i.currentSlide + " img").height();
                            r(t), i.config.displayList && (g(), m())
                        }, 100)
                    }), i.config.autoSlide && h(), !0
                },
                r = function(t, e) { var n = i.plugin.find(".ps-caption").height(); return i.plugin.find(".ps-caption").is(":visible") && (t += n), i.config.maxHeight && t + i.plugin.find(".ps-list").height() > i.config.maxHeight && (t = i.config.maxHeight - i.plugin.find(".ps-list").height()), "function" == typeof i.plugin.find(".ps-current").animate ? i.plugin.find(".ps-current").stop().animate({ height: t }, i.config.adaptiveDuration, function() { i.config.maxHeight && i.plugin.find(".ps-current > ul > li img").css("max-height", t + "px") }) : (i.plugin.find(".ps-current").css("height", t), i.config.maxHeight && i.plugin.find(".ps-current > ul > li img").css("max-height", t + "px")), !0 },
                a = function() { var e = 0; return i.plugin.show(), i.plugin.find(".ps-list > ul > li").show().each(function() { e += t(this).width() }), i.plugin.find(".ps-list > ul").width(e), !0 },
                s = function() { return i.plugin.width() <= 480 ? i.plugin.addClass("narrow").removeClass("wide") : i.plugin.addClass("wide").removeClass("narrow"), !0 },
                l = function() {
                    if (i.plugin.removeClass("pgwSlideshow").removeClass(i.config.mainClassName), i.plugin.wrap('<div class="ps-list"></div>'), i.plugin = i.plugin.parent(), i.plugin.wrap('<div class="' + i.config.mainClassName + '"></div>'), i.plugin = i.plugin.parent(), i.plugin.prepend('<div class="ps-current"><ul></ul><span class="ps-caption"></span></div>'), i.slideCount = i.plugin.find(".ps-list > ul > li").length, 0 == i.slideCount) throw new Error("pgwSlideshow - No slider item has been found");
                    i.slideCount > 1 && (i.config.displayControls && (i.plugin.find(".ps-current").prepend('<span class="ps-prev"><span class="ps-prevIcon"></span></span>'), i.plugin.find(".ps-current").append('<span class="ps-next"><span class="ps-nextIcon"></span></span>'), i.plugin.find(".ps-current .ps-prev").click(function() { i.previousSlide() }), i.plugin.find(".ps-current .ps-next").click(function() { i.nextSlide() })), i.config.touchControls && (i.plugin.find(".ps-current").on("touchstart", function(t) { try { t.originalEvent.touches[0].clientX && null == i.touchFirstPosition && (i.touchFirstPosition = t.originalEvent.touches[0].clientX) } catch (t) { i.touchFirstPosition = null } }), i.plugin.find(".ps-current").on("touchmove", function(t) { try { t.originalEvent.touches[0].clientX && null != i.touchFirstPosition && (t.originalEvent.touches[0].clientX > i.touchFirstPosition + 50 ? (i.touchFirstPosition = null, i.previousSlide()) : t.originalEvent.touches[0].clientX < i.touchFirstPosition - 50 && (i.touchFirstPosition = null, i.nextSlide())) } catch (t) { i.touchFirstPosition = null } }), i.plugin.find(".ps-current").on("touchend", function(t) { i.touchFirstPosition = null })));
                    var e = 1;
                    return i.plugin.find(".ps-list > ul > li").each(function() {
                        var n = c(t(this));
                        n.id = e, i.data.push(n), t(this).addClass("elt_" + n.id), t(this).wrapInner('<span class="ps-item' + (1 == e ? " ps-selected" : "") + '"></span>');
                        var o = t('<li class="elt_' + e + '"></li>');
                        n.image ? o.html('<img src="' + n.image + '" alt="' + (n.title ? n.title : "") + '">') : n.thumbnail && o.html('<img src="' + n.thumbnail + '" alt="' + (n.title ? n.title : "") + '">'), n.link && o.html('<a href="' + n.link + '"' + (n.linkTarget ? ' target="' + n.linkTarget + '"' : "") + ">" + o.html() + "</a>"), i.plugin.find(".ps-current > ul").append(o), t(this).css("cursor", "pointer").click(function(t) { t.preventDefault(), p(n.id) }), e++
                    }), i.config.displayList ? (a(), i.plugin.find(".ps-list").prepend('<span class="ps-prev"><span class="ps-prevIcon"></span></span>'), i.plugin.find(".ps-list").append('<span class="ps-next"><span class="ps-nextIcon"></span></span>'), i.plugin.find(".ps-list").show()) : i.plugin.find(".ps-list").hide(), i.config.autoSlide && i.plugin.on("mouseenter", function() { clearInterval(i.intervalEvent), i.intervalEvent = null }).on("mouseleave", function() { h() }), i.plugin.find(".ps-current > ul > li").hide(), p(1), i.plugin.find(".ps-current > ul > li.elt_1 img").on("load", function() {
                        s();
                        var t = i.plugin.find(".ps-current > ul > li.elt_1 img").height();
                        r(t)
                    }), s(), i.plugin.show(), !0
                },
                c = function(t) {
                    var e = {},
                        n = t.find("a").attr("href");
                    if ("undefined" != typeof n && "" != n) { e.link = n; var i = t.find("a").attr("target"); "undefined" != typeof i && "" != i && (e.linkTarget = i) }
                    var o = t.find("img").attr("src");
                    "undefined" != typeof o && "" != o && (e.thumbnail = o);
                    var r = t.find("img").attr("data-large-src");
                    "undefined" != typeof r && "" != r && (e.image = r);
                    var a = t.find("img").attr("alt");
                    "undefined" != typeof a && "" != a && (e.title = a);
                    var s = t.find("img").attr("data-description");
                    return "undefined" != typeof s && "" != s && (e.description = s), e
                },
                u = function(t) {
                    var e = "";
                    t.title && (e += "<b>" + t.title + "</b>"), t.description && ("" != e && (e += "<br>"), e += t.description), "" != e && (t.link && (e = '<a href="' + t.link + '"' + (t.linkTarget ? ' target="' + t.linkTarget + '"' : "") + ">" + e + "</a>"), "function" == typeof i.plugin.find(".ps-caption").fadeIn ? (i.plugin.find(".ps-caption").html(e), i.plugin.find(".ps-caption").fadeIn(i.config.transitionDuration / 2)) : (i.plugin.find(".ps-caption").html(e), i.plugin.find(".ps-caption").show())), i.plugin.find(".ps-list > ul > li .ps-item").removeClass("ps-selected"), i.plugin.find(".ps-list > ul > li.elt_" + t.id + " .ps-item").addClass("ps-selected"), i.config.displayList && (g(), m()), i.config.displayControls && ("function" == typeof i.plugin.find(".ps-current > .ps-prev").fadeIn ? i.plugin.find(".ps-current > .ps-prev, .ps-current > .ps-next").fadeIn(i.config.transitionDuration / 2) : i.plugin.find(".ps-current > .ps-prev, .ps-current > .ps-next").show()), "function" == typeof i.config.afterSlide && i.config.afterSlide(t.id);
                    var n = i.plugin.find(".ps-current .elt_" + t.id + " img").height();
                    return r(n, !0), !0
                },
                d = function(e) {
                    var n = i.plugin.find(".ps-current > ul");
                    if (n.find("li").not(".elt_" + i.currentSlide).not(".elt_" + e.id).each(function() { "function" == typeof t(this).stop && t(this).stop(), t(this).css("position", "").css("z-index", 1).hide() }), i.currentSlide > 0) { var o = n.find(".elt_" + i.currentSlide); "function" != typeof o.animate && (o.animate = function(t, e, n) { o.css(t), n && n() }), "function" == typeof o.stop && o.stop(), o.css("position", "absolute").animate({ opacity: 0 }, i.config.transitionDuration, function() { o.css("position", "").css("z-index", 1).hide() }) }
                    i.currentSlide = e.id;
                    var r = n.find(".elt_" + e.id);
                    return "function" != typeof r.animate && (r.animate = function(t, e, n) { r.css(t), n && n() }), "function" == typeof r.stop && r.stop(), r.css("position", "absolute").show().animate({ opacity: 1 }, i.config.transitionDuration, function() { r.css("position", "").css("z-index", 2).css("display", "block"), u(e) }), !0
                },
                f = function(t, e) {
                    var n = i.plugin.find(".ps-current > ul");
                    if ("undefined" == typeof e && (e = "left"), 0 == i.currentSlide) n.find(".elt_1").css({ position: "", left: "", opacity: 1, "z-index": 2 }).show(), i.plugin.find(".ps-list > li.elt_1").css("opacity", "1"), u(t);
                    else {
                        if (i.transitionInProgress) return !1;
                        i.transitionInProgress = !0;
                        var o = n.width();
                        if ("left" == e) var r = -o,
                            a = o;
                        else var r = o,
                            a = -o;
                        var s = n.find(".elt_" + i.currentSlide);
                        "function" != typeof s.animate && (s.animate = function(t, e, n) { s.css(t), n && n() }), s.css("position", "absolute").animate({ left: r }, i.config.transitionDuration, function() { s.css("position", "").css("z-index", 1).css("left", "").css("opacity", 0).hide() });
                        var l = n.find(".elt_" + t.id);
                        "function" != typeof l.animate && (l.animate = function(t, e, n) { l.css(t), n && n() }), l.css("position", "absolute").css("left", a).css("opacity", 1).show().animate({ left: 0 }, i.config.transitionDuration, function() { l.css("position", "").css("left", "").css("z-index", 2).show(), i.transitionInProgress = !1, u(t) })
                    }
                    return i.currentSlide = t.id, !0
                },
                p = function(t, e, n) { if (t == i.currentSlide) return !1; var o = i.data[t - 1]; if ("undefined" == typeof o) throw new Error("pgwSlideshow - The element " + t + " is undefined"); return "undefined" == typeof n && (n = "left"), "function" == typeof i.config.beforeSlide && i.config.beforeSlide(t), "function" == typeof i.plugin.find(".ps-caption").fadeOut ? i.plugin.find(".ps-caption, .ps-prev, .ps-next").fadeOut(i.config.transitionDuration / 2) : i.plugin.find(".ps-caption, .ps-prev, .ps-next").hide(), "sliding" == i.config.transitionEffect ? f(o, n) : d(o), "undefined" != typeof e && i.config.autoSlide && h(), !0 },
                h = function() {
                    return clearInterval(i.intervalEvent), i.slideCount > 1 && i.config.autoSlide && (i.intervalEvent = setInterval(function() {
                        if (i.currentSlide + 1 <= i.slideCount) var t = i.currentSlide + 1;
                        else var t = 1;
                        p(t)
                    }, i.config.intervalDuration)), !0
                },
                g = function() {
                    if (!i.config.displayList) return !1;
                    a();
                    var t = i.plugin.find(".ps-list"),
                        e = t.width(),
                        n = i.plugin.find(".ps-list > ul"),
                        o = n.width();
                    if (o > e) {
                        n.css("margin", "0 45px");
                        var r = parseInt(n.css("margin-left")),
                            s = parseInt(n.css("margin-right"));
                        e -= r + s, t.find(".ps-prev").show().unbind("click").click(function() {
                            var t = parseInt(n.css("left")),
                                r = t + e;
                            0 == t ? r = -(o - e) : r > 0 && (r = 0), "function" == typeof n.animate ? n.animate({ left: r }, i.config.transitionDuration) : n.css("left", r)
                        }), t.find(".ps-next").show().unbind("click").click(function() {
                            var t = parseInt(n.css("left")),
                                r = t - e,
                                a = -(o - e);
                            t == a ? r = 0 : r < a && (r = a), "function" == typeof n.animate ? n.animate({ left: r }, i.config.transitionDuration) : n.css("left", r)
                        }), i.config.touchControls && (i.plugin.find(".ps-list > ul").on("touchmove", function(e) {
                            try {
                                if (e.originalEvent.touches[0].clientX) {
                                    var o = 0 == i.touchListLastPosition ? 0 : i.touchListLastPosition;
                                    nbPixels = 0 == i.touchListLastPosition ? 1 : Math.abs(o - e.originalEvent.touches[0].clientX), i.touchListLastPosition = e.originalEvent.touches[0].clientX;
                                    var r = "";
                                    o > e.originalEvent.touches[0].clientX ? r = "left" : o < e.originalEvent.touches[0].clientX && (r = "right")
                                }
                                var a = parseInt(n.css("left"));
                                if ("left" == r) {
                                    var s = t.width(),
                                        l = n.width(),
                                        c = parseInt(n.css("margin-left")),
                                        u = parseInt(n.css("margin-right"));
                                    s -= c + u;
                                    var d = -(l - s),
                                        f = a - nbPixels;
                                    f > d && n.css("left", f)
                                } else if ("right" == r) {
                                    var f = a + nbPixels;
                                    f < 0 ? n.css("left", f) : n.css("left", 0)
                                }
                            } catch (e) { i.touchListLastPosition = !1 }
                        }), i.plugin.find(".ps-list > ul").on("touchend", function(t) { i.touchListLastPosition = !1 }))
                    } else {
                        var r = parseInt((e - o) / 2);
                        n.css("left", 0).css("margin-left", r), t.find(".ps-prev").hide(), t.find(".ps-next").hide(), i.plugin.find(".ps-list > ul").unbind("touchstart touchmove touchend")
                    }
                    return !0
                },
                m = function() {
                    var t = i.plugin.find(".ps-list").width(),
                        e = i.plugin.find(".ps-list > ul"),
                        n = e.width(),
                        o = parseInt(e.css("margin-left")),
                        r = parseInt(e.css("margin-right"));
                    t -= o + r;
                    var a = Math.abs(parseInt(e.css("left"))),
                        s = a + t,
                        l = i.plugin.find(".ps-list .ps-selected").position().left,
                        c = l + i.plugin.find(".ps-list .ps-selected").width();
                    if (l < a || c > s || n > t && s > c) { var u = -(n - t); - l < u ? e.css("left", u) : e.css("left", -l) }
                    return !0
                };
            return i.startSlide = function() { return i.config.autoSlide = !0, h(), !0 }, i.stopSlide = function() { return i.config.autoSlide = !1, clearInterval(i.intervalEvent), !0 }, i.getCurrentSlide = function() { return i.currentSlide }, i.getSlideCount = function() { return i.slideCount }, i.displaySlide = function(t) { return p(t, !0), !0 }, i.nextSlide = function() {
                if (i.currentSlide + 1 <= i.slideCount) var t = i.currentSlide + 1;
                else var t = 1;
                return p(t, !0, "left"), !0
            }, i.previousSlide = function() {
                if (i.currentSlide - 1 >= 1) var t = i.currentSlide - 1;
                else var t = i.slideCount;
                return p(t, !0, "right"), !0
            }, i.destroy = function(e) { return clearInterval(i.intervalEvent), "undefined" != typeof e ? (i.plugin.find(".ps-list > ul > li").each(function() { t(this).attr("style", null).removeClass().unbind("click"), t(this).html(t(this).find("span").html()) }), i.plugin.find(".ps-current").remove(), i.plugin.find(".ps-list").find(".ps-prev, .ps-next").remove(), i.plugin.find(".ps-list > ul").addClass(i.config.mainClassName).attr("style", ""), i.plugin.find(".ps-list > ul").unwrap().unwrap(), i.hide()) : i.parent().parent().remove(), i.plugin = null, i.data = [], i.config = {}, i.currentSlide = 0, i.slideCount = 0, i.resizeEvent = null, i.intervalEvent = null, i.touchFirstPosition = null, i.window = null, !0 }, i.reload = function(e) {
                return i.destroy(!0), i = this, i.plugin = this, i.window = t(window), i.plugin.show(), i.config = t.extend({}, n, e), l(), i.window.resize(function() {
                    clearTimeout(i.resizeEvent), i.resizeEvent = setTimeout(function() {
                        s();
                        var t = i.plugin.find(".ps-current > ul > li.elt_" + i.currentSlide + " img").css("max-height", "").height();
                        r(t), i.config.displayList && (g(), m())
                    }, 100)
                }), i.config.autoSlide && h(), !0
            }, o(), this
        }
    }(window.Zepto || window.jQuery),
    function(t, e, n, i) {
        "use strict";
        var o = n("html"),
            r = n(t),
            a = n(e),
            s = n.fancybox = function() { s.open.apply(this, arguments) },
            l = navigator.userAgent.match(/msie/i),
            c = null,
            u = e.createTouch !== i,
            d = function(t) { return t && t.hasOwnProperty && t instanceof n },
            f = function(t) { return t && "string" === n.type(t) },
            p = function(t) { return f(t) && t.indexOf("%") > 0 },
            h = function(t) { return t && !(t.style.overflow && "hidden" === t.style.overflow) && (t.clientWidth && t.scrollWidth > t.clientWidth || t.clientHeight && t.scrollHeight > t.clientHeight) },
            g = function(t, e) { var n = parseInt(t, 10) || 0; return e && p(t) && (n = s.getViewport()[e] / 100 * n), Math.ceil(n) },
            m = function(t, e) { return g(t, e) + "px" };
        n.extend(s, {
            version: "2.1.7",
            defaults: { padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !u, fitToView: !0, aspectRatio: !1, topRatio: .5, leftRatio: .5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3e3, preload: 3, modal: !1, loop: !0, ajax: { dataType: "html", headers: { "X-fancyBox": !0 } }, iframe: { scrolling: "auto", preload: !0 }, swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" }, keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] }, direction: { next: "left", prev: "right" }, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: { wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>', loading: '<div id="fancybox-loading"><div></div></div>' }, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0, openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: { overlay: !0, title: !0 }, onCancel: n.noop, beforeLoad: n.noop, afterLoad: n.noop, beforeShow: n.noop, afterShow: n.noop, beforeChange: n.noop, beforeClose: n.noop, afterClose: n.noop },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: { timer: null, isActive: !1 },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(t, e) { if (t && (n.isPlainObject(e) || (e = {}), !1 !== s.close(!0))) return n.isArray(t) || (t = d(t) ? n(t).get() : [t]), n.each(t, function(o, r) { var a, l, c, u, p, h, g, m = {}; "object" === n.type(r) && (r.nodeType && (r = n(r)), d(r) ? (m = { href: r.data("fancybox-href") || r.attr("href"), title: n("<div/>").text(r.data("fancybox-title") || r.attr("title") || "").html(), isDom: !0, element: r }, n.metadata && n.extend(!0, m, r.metadata())) : m = r), a = e.href || m.href || (f(r) ? r : null), l = e.title !== i ? e.title : m.title || "", c = e.content || m.content, u = c ? "html" : e.type || m.type, !u && m.isDom && (u = r.data("fancybox-type"), u || (p = r.prop("class").match(/fancybox\.(\w+)/), u = p ? p[1] : null)), f(a) && (u || (s.isImage(a) ? u = "image" : s.isSWF(a) ? u = "swf" : "#" === a.charAt(0) ? u = "inline" : f(r) && (u = "html", c = r)), "ajax" === u && (h = a.split(/\s+/, 2), a = h.shift(), g = h.shift())), c || ("inline" === u ? a ? c = n(f(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : m.isDom && (c = r) : "html" === u ? c = a : u || a || !m.isDom || (u = "inline", c = r)), n.extend(m, { href: a, type: u, content: c, title: l, selector: g }), t[o] = m }), s.opts = n.extend(!0, {}, s.defaults, e), e.keys !== i && (s.opts.keys = !!e.keys && n.extend({}, s.defaults.keys, e.keys)), s.group = t, s._start(s.opts.index) },
            cancel: function() {
                var t = s.coming;
                t && !1 === s.trigger("onCancel") || (s.hideLoading(), t && (s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), t.wrap && t.wrap.stop(!0, !0).trigger("onReset").remove(), s.coming = null, s.current || s._afterZoomOut(t)))
            },
            close: function(t) { s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isActive && (s.isOpen && t !== !0 ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut()))) },
            play: function(t) {
                var e = function() { clearTimeout(s.player.timer) },
                    n = function() { e(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed)) },
                    i = function() { e(), a.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd") },
                    o = function() { s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, a.bind({ "onCancel.player beforeClose.player": i, "onUpdate.player": n, "beforeLoad.player": e }), n(), s.trigger("onPlayStart")) };
                t === !0 || !s.player.isActive && t !== !1 ? o() : i()
            },
            next: function(t) {
                var e = s.current;
                e && (f(t) || (t = e.direction.next), s.jumpto(e.index + 1, t, "next"))
            },
            prev: function(t) {
                var e = s.current;
                e && (f(t) || (t = e.direction.prev), s.jumpto(e.index - 1, t, "prev"))
            },
            jumpto: function(t, e, n) {
                var o = s.current;
                o && (t = g(t), s.direction = e || o.direction[t >= o.index ? "next" : "prev"], s.router = n || "jumpto", o.loop && (t < 0 && (t = o.group.length + t % o.group.length), t %= o.group.length), o.group[t] !== i && (s.cancel(), s._start(t)))
            },
            reposition: function(t, e) {
                var i, o = s.current,
                    r = o ? o.wrap : null;
                r && (i = s._getPosition(e), t && "scroll" === t.type ? (delete i.position, r.stop(!0, !0).animate(i, 200)) : (r.css(i), o.pos = n.extend({}, o.dim, i)))
            },
            update: function(t) {
                var e = t && t.originalEvent && t.originalEvent.type,
                    n = !e || "orientationchange" === e;
                n && (clearTimeout(c), c = null), s.isOpen && !c && (c = setTimeout(function() {
                    var i = s.current;
                    i && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (n || "load" === e || "resize" === e && i.autoResize) && s._setDimension(), "scroll" === e && i.canShrink || s.reposition(t), s.trigger("onUpdate"), c = null)
                }, n && !u ? 0 : 300))
            },
            toggle: function(t) { s.isOpen && (s.current.fitToView = "boolean" === n.type(t) ? t : !s.current.fitToView, u && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update()) },
            hideLoading: function() { a.unbind(".loading"), n("#fancybox-loading").remove() },
            showLoading: function() {
                var t, e;
                s.hideLoading(), t = n(s.opts.tpl.loading).click(s.cancel).appendTo("body"), a.bind("keydown.loading", function(t) { 27 === (t.which || t.keyCode) && (t.preventDefault(), s.cancel()) }), s.defaults.fixed || (e = s.getViewport(), t.css({ position: "absolute", top: .5 * e.h + e.y, left: .5 * e.w + e.x })), s.trigger("onLoading")
            },
            getViewport: function() {
                var e = s.current && s.current.locked || !1,
                    n = { x: r.scrollLeft(), y: r.scrollTop() };
                return e && e.length ? (n.w = e[0].clientWidth, n.h = e[0].clientHeight) : (n.w = u && t.innerWidth ? t.innerWidth : r.width(), n.h = u && t.innerHeight ? t.innerHeight : r.height()), n
            },
            unbindEvents: function() { s.wrap && d(s.wrap) && s.wrap.unbind(".fb"), a.unbind(".fb"), r.unbind(".fb") },
            bindEvents: function() {
                var t, e = s.current;
                e && (r.bind("orientationchange.fb" + (u ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), s.update), t = e.keys, t && a.bind("keydown.fb", function(o) {
                    var r = o.which || o.keyCode,
                        a = o.target || o.srcElement;
                    return (27 !== r || !s.coming) && void(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || a && (a.type || n(a).is("[contenteditable]")) || n.each(t, function(t, a) { return e.group.length > 1 && a[r] !== i ? (s[t](a[r]), o.preventDefault(), !1) : n.inArray(r, a) > -1 ? (s[t](), o.preventDefault(), !1) : void 0 }))
                }), n.fn.mousewheel && e.mouseWheel && s.wrap.bind("mousewheel.fb", function(t, i, o, r) {
                    for (var a = t.target || null, l = n(a), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));) c = h(l[0]), l = n(l).parent();
                    0 === i || c || s.group.length > 1 && !e.canShrink && (r > 0 || o > 0 ? s.prev(r > 0 ? "down" : "left") : (r < 0 || o < 0) && s.next(r < 0 ? "up" : "right"), t.preventDefault())
                }))
            },
            trigger: function(t, e) {
                var i, o = e || s.coming || s.current;
                if (o) {
                    if (n.isFunction(o[t]) && (i = o[t].apply(o, Array.prototype.slice.call(arguments, 1))), i === !1) return !1;
                    o.helpers && n.each(o.helpers, function(e, i) { i && s.helpers[e] && n.isFunction(s.helpers[e][t]) && s.helpers[e][t](n.extend(!0, {}, s.helpers[e].defaults, i), o) })
                }
                a.trigger(t)
            },
            isImage: function(t) { return f(t) && t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i) },
            isSWF: function(t) { return f(t) && t.match(/\.(swf)((\?|#).*)?$/i) },
            _start: function(t) { var e, i, o, r, a, l = {}; if (t = g(t), e = s.group[t] || null, !e) return !1; if (l = n.extend(!0, {}, s.opts, e), r = l.margin, a = l.padding, "number" === n.type(r) && (l.margin = [r, r, r, r]), "number" === n.type(a) && (l.padding = [a, a, a, a]), l.modal && n.extend(!0, l, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = s.group, l.index = t, s.coming = l, !1 === s.trigger("beforeLoad")) return void(s.coming = null); if (o = l.type, i = l.href, !o) return s.coming = null, !(!s.current || !s.router || "jumpto" === s.router) && (s.current.index = t, s[s.router](s.direction)); if (s.isActive = !0, "image" !== o && "swf" !== o || (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === o && (l.aspectRatio = !0), "iframe" === o && u && (l.scrolling = "scroll"), l.wrap = n(l.tpl.wrap).addClass("fancybox-" + (u ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), n.extend(l, { skin: n(".fancybox-skin", l.wrap), outer: n(".fancybox-outer", l.wrap), inner: n(".fancybox-inner", l.wrap) }), n.each(["Top", "Right", "Bottom", "Left"], function(t, e) { l.skin.css("padding" + e, m(l.padding[t])) }), s.trigger("onReady"), "inline" === o || "html" === o) { if (!l.content || !l.content.length) return s._error("content") } else if (!i) return s._error("href"); "image" === o ? s._loadImage() : "ajax" === o ? s._loadAjax() : "iframe" === o ? s._loadIframe() : s._afterLoad() },
            _error: function(t) { n.extend(s.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: t, content: s.coming.tpl.error }), s._afterLoad() },
            _loadImage: function() {
                var t = s.imgPreload = new Image;
                t.onload = function() { this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad() }, t.onerror = function() { this.onload = this.onerror = null, s._error("image") }, t.src = s.coming.href, t.complete !== !0 && s.showLoading()
            },
            _loadAjax: function() {
                var t = s.coming;
                s.showLoading(), s.ajaxLoad = n.ajax(n.extend({}, t.ajax, { url: t.href, error: function(t, e) { s.coming && "abort" !== e ? s._error("ajax", t) : s.hideLoading() }, success: function(e, n) { "success" === n && (t.content = e, s._afterLoad()) } }))
            },
            _loadIframe: function() {
                var t = s.coming,
                    e = n(t.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", u ? "auto" : t.iframe.scrolling).attr("src", t.href);
                n(t.wrap).bind("onReset", function() { try { n(this).find("iframe").hide().attr("src", "//about:blank").end().empty() } catch (t) {} }), t.iframe.preload && (s.showLoading(), e.one("load", function() { n(this).data("ready", 1), u || n(this).bind("load.fb", s.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad() })), t.content = e.appendTo(t.inner), t.iframe.preload || s._afterLoad()
            },
            _preloadImages: function() {
                var t, e, n = s.group,
                    i = s.current,
                    o = n.length,
                    r = i.preload ? Math.min(i.preload, o - 1) : 0;
                for (e = 1; e <= r; e += 1) t = n[(i.index + e) % o], "image" === t.type && t.href && ((new Image).src = t.href)
            },
            _afterLoad: function() {
                var t, e, i, o, r, a, l = s.coming,
                    c = s.current,
                    u = "fancybox-placeholder";
                if (s.hideLoading(), l && s.isActive !== !1) {
                    if (!1 === s.trigger("afterLoad", l, c)) return l.wrap.stop(!0).trigger("onReset").remove(), void(s.coming = null);
                    switch (c && (s.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), s.unbindEvents(), t = l, e = l.content, i = l.type, o = l.scrolling, n.extend(s, { wrap: t.wrap, skin: t.skin, outer: t.outer, inner: t.inner, current: t, previous: c }), r = t.href, i) {
                        case "inline":
                        case "ajax":
                        case "html":
                            t.selector ? e = n("<div>").html(e).find(t.selector) : d(e) && (e.data(u) || e.data(u, n('<div class="' + u + '"></div>').insertAfter(e).hide()), e = e.show().detach(), t.wrap.bind("onReset", function() { n(this).find(e).length && e.hide().replaceAll(e.data(u)).data(u, !1) }));
                            break;
                        case "image":
                            e = t.tpl.image.replace(/\{href\}/g, r);
                            break;
                        case "swf":
                            e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + r + '"></param>', a = "", n.each(t.swf, function(t, n) { e += '<param name="' + t + '" value="' + n + '"></param>', a += " " + t + '="' + n + '"' }), e += '<embed src="' + r + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
                    }
                    d(e) && e.parent().is(t.inner) || t.inner.append(e), s.trigger("beforeShow"), t.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? c.prevMethod && s.transitions[c.prevMethod]() : n(".fancybox-wrap").not(t.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? t.nextMethod : t.openMethod](), s._preloadImages()
                }
            },
            _setDimension: function() {
                var t, e, i, o, r, a, l, c, u, d, f, h, v, y, b, w = s.getViewport(),
                    x = 0,
                    T = !1,
                    C = !1,
                    k = s.wrap,
                    E = s.skin,
                    S = s.inner,
                    $ = s.current,
                    j = $.width,
                    A = $.height,
                    O = $.minWidth,
                    D = $.minHeight,
                    N = $.maxWidth,
                    I = $.maxHeight,
                    L = $.scrolling,
                    P = $.scrollOutside ? $.scrollbarWidth : 0,
                    R = $.margin,
                    F = g(R[1] + R[3]),
                    H = g(R[0] + R[2]);
                if (k.add(E).add(S).width("auto").height("auto").removeClass("fancybox-tmp"), t = g(E.outerWidth(!0) - E.width()), e = g(E.outerHeight(!0) - E.height()), i = F + t, o = H + e, r = p(j) ? (w.w - i) * g(j) / 100 : j, a = p(A) ? (w.h - o) * g(A) / 100 : A, "iframe" === $.type) { if (y = $.content, $.autoHeight && y && 1 === y.data("ready")) try { y[0].contentWindow.document.location && (S.width(r).height(9999), b = y.contents().find("body"), P && b.css("overflow-x", "hidden"), a = b.outerHeight(!0)) } catch (M) {} } else($.autoWidth || $.autoHeight) && (S.addClass("fancybox-tmp"), $.autoWidth || S.width(r), $.autoHeight || S.height(a), $.autoWidth && (r = S.width()), $.autoHeight && (a = S.height()), S.removeClass("fancybox-tmp"));
                if (j = g(r), A = g(a), u = r / a, O = g(p(O) ? g(O, "w") - i : O), N = g(p(N) ? g(N, "w") - i : N), D = g(p(D) ? g(D, "h") - o : D), I = g(p(I) ? g(I, "h") - o : I), l = N, c = I, $.fitToView && (N = Math.min(w.w - i, N), I = Math.min(w.h - o, I)), h = w.w - F, v = w.h - H, $.aspectRatio ? (j > N && (j = N, A = g(j / u)), A > I && (A = I, j = g(A * u)), j < O && (j = O, A = g(j / u)), A < D && (A = D, j = g(A * u))) : (j = Math.max(O, Math.min(j, N)), $.autoHeight && "iframe" !== $.type && (S.width(j), A = S.height()), A = Math.max(D, Math.min(A, I))), $.fitToView)
                    if (S.width(j).height(A), k.width(j + t), d = k.width(), f = k.height(), $.aspectRatio)
                        for (;
                            (d > h || f > v) && j > O && A > D && !(x++ > 19);) A = Math.max(D, Math.min(I, A - 10)), j = g(A * u), j < O && (j = O, A = g(j / u)), j > N && (j = N, A = g(j / u)), S.width(j).height(A), k.width(j + t), d = k.width(), f = k.height();
                    else j = Math.max(O, Math.min(j, j - (d - h))), A = Math.max(D, Math.min(A, A - (f - v)));
                P && "auto" === L && A < a && j + t + P < h && (j += P), S.width(j).height(A), k.width(j + t), d = k.width(), f = k.height(), T = (d > h || f > v) && j > O && A > D, C = $.aspectRatio ? j < l && A < c && j < r && A < a : (j < l || A < c) && (j < r || A < a), n.extend($, { dim: { width: m(d), height: m(f) }, origWidth: r, origHeight: a, canShrink: T, canExpand: C, wPadding: t, hPadding: e, wrapSpace: f - E.outerHeight(!0), skinSpace: E.height() - A }), !y && $.autoHeight && A > D && A < I && !C && S.height("auto")
            },
            _getPosition: function(t) {
                var e = s.current,
                    n = s.getViewport(),
                    i = e.margin,
                    o = s.wrap.width() + i[1] + i[3],
                    r = s.wrap.height() + i[0] + i[2],
                    a = { position: "absolute", top: i[0], left: i[3] };
                return e.autoCenter && e.fixed && !t && r <= n.h && o <= n.w ? a.position = "fixed" : e.locked || (a.top += n.y, a.left += n.x), a.top = m(Math.max(a.top, a.top + (n.h - r) * e.topRatio)), a.left = m(Math.max(a.left, a.left + (n.w - o) * e.leftRatio)), a
            },
            _afterZoomIn: function() {
                var t = s.current;
                t && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible").addClass("fancybox-opened").hide().show(0), s.update(), (t.closeClick || t.nextClick && s.group.length > 1) && s.inner.css("cursor", "pointer").bind("click.fb", function(e) { n(e.target).is("a") || n(e.target).parent().is("a") || (e.preventDefault(), s[t.closeClick ? "close" : "next"]()) }), t.closeBtn && n(t.tpl.closeBtn).appendTo(s.skin).bind("click.fb", function(t) { t.preventDefault(), s.close() }), t.arrows && s.group.length > 1 && ((t.loop || t.index > 0) && n(t.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (t.loop || t.index < s.group.length - 1) && n(t.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), t.loop || t.index !== t.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play(!0)) : s.play(!1))
            },
            _afterZoomOut: function(t) { t = t || s.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(s, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null }), s.trigger("afterClose", t) }
        }), s.transitions = {
            getOrigPosition: function() {
                var t = s.current,
                    e = t.element,
                    n = t.orig,
                    i = {},
                    o = 50,
                    r = 50,
                    a = t.hPadding,
                    l = t.wPadding,
                    c = s.getViewport();
                return !n && t.isDom && e.is(":visible") && (n = e.find("img:first"), n.length || (n = e)), d(n) ? (i = n.offset(), n.is("img") && (o = n.outerWidth(), r = n.outerHeight())) : (i.top = c.y + (c.h - r) * t.topRatio, i.left = c.x + (c.w - o) * t.leftRatio), ("fixed" === s.wrap.css("position") || t.locked) && (i.top -= c.y, i.left -= c.x), i = { top: m(i.top - a * t.topRatio), left: m(i.left - l * t.leftRatio), width: m(o + l), height: m(r + a) }
            },
            step: function(t, e) {
                var n, i, o, r = e.prop,
                    a = s.current,
                    l = a.wrapSpace,
                    c = a.skinSpace;
                "width" !== r && "height" !== r || (n = e.end === e.start ? 1 : (t - e.start) / (e.end - e.start), s.isClosing && (n = 1 - n), i = "width" === r ? a.wPadding : a.hPadding, o = t - i, s.skin[r](g("width" === r ? o : o - l * n)), s.inner[r](g("width" === r ? o : o - l * n - c * n)))
            },
            zoomIn: function() {
                var t = s.current,
                    e = t.pos,
                    i = t.openEffect,
                    o = "elastic" === i,
                    r = n.extend({ opacity: 1 }, e);
                delete r.position, o ? (e = this.getOrigPosition(), t.openOpacity && (e.opacity = .1)) : "fade" === i && (e.opacity = .1), s.wrap.css(e).animate(r, { duration: "none" === i ? 0 : t.openSpeed, easing: t.openEasing, step: o ? this.step : null, complete: s._afterZoomIn })
            },
            zoomOut: function() {
                var t = s.current,
                    e = t.closeEffect,
                    n = "elastic" === e,
                    i = { opacity: .1 };
                n && (i = this.getOrigPosition(), t.closeOpacity && (i.opacity = .1)), s.wrap.animate(i, { duration: "none" === e ? 0 : t.closeSpeed, easing: t.closeEasing, step: n ? this.step : null, complete: s._afterZoomOut })
            },
            changeIn: function() {
                var t, e = s.current,
                    n = e.nextEffect,
                    i = e.pos,
                    o = { opacity: 1 },
                    r = s.direction,
                    a = 200;
                i.opacity = .1, "elastic" === n && (t = "down" === r || "up" === r ? "top" : "left", "down" === r || "right" === r ? (i[t] = m(g(i[t]) - a), o[t] = "+=" + a + "px") : (i[t] = m(g(i[t]) + a), o[t] = "-=" + a + "px")), "none" === n ? s._afterZoomIn() : s.wrap.css(i).animate(o, { duration: e.nextSpeed, easing: e.nextEasing, complete: s._afterZoomIn })
            },
            changeOut: function() {
                var t = s.previous,
                    e = t.prevEffect,
                    i = { opacity: .1 },
                    o = s.direction,
                    r = 200;
                "elastic" === e && (i["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=" + r + "px"), t.wrap.animate(i, { duration: "none" === e ? 0 : t.prevSpeed, easing: t.prevEasing, complete: function() { n(this).trigger("onReset").remove() } })
            }
        }, s.helpers.overlay = {
            defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !u, fixed: !0 },
            overlay: null,
            fixed: !1,
            el: n("html"),
            create: function(t) {
                var e;
                t = n.extend({}, this.defaults, t), this.overlay && this.close(), e = s.coming ? s.coming.parent : t.parent, this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(e && e.length ? e : "body"), this.fixed = !1, t.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(t) {
                var e = this;
                t = n.extend({}, this.defaults, t), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(t), this.fixed || (r.bind("resize.overlay", n.proxy(this.update, this)), this.update()), t.closeClick && this.overlay.bind("click.overlay", function(t) { if (n(t.target).hasClass("fancybox-overlay")) return s.isActive ? s.close() : e.close(), !1 }), this.overlay.css(t.css).show()
            },
            close: function() { r.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), r.scrollTop(this.scrollV).scrollLeft(this.scrollH)), n(".fancybox-overlay").remove().hide(), n.extend(this, { overlay: null, fixed: !1 }) },
            update: function() {
                var t, n = "100%";
                this.overlay.width(n).height("100%"), l ? (t = Math.max(e.documentElement.offsetWidth, e.body.offsetWidth), a.width() > t && (n = a.width())) : a.width() > r.width() && (n = a.width()), this.overlay.width(n).height(a.height())
            },
            onReady: function(t, e) {
                var i = this.overlay;
                n(".fancybox-overlay").stop(!0, !0), i || this.create(t), t.locked && this.fixed && e.fixed && (e.locked = this.overlay.append(e.wrap), e.fixed = !1), t.showEarly === !0 && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(t, e) { e.locked && !this.el.hasClass("fancybox-lock") && (this.fixPosition !== !1 && n("*:not(object)").filter(function() { return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap") }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = r.scrollTop(), this.scrollH = r.scrollLeft(), this.el.addClass("fancybox-lock"), r.scrollTop(this.scrollV).scrollLeft(this.scrollH)), this.open(t) },
            onUpdate: function() { this.fixed || this.update() },
            afterClose: function(t) { this.overlay && !s.coming && this.overlay.fadeOut(t.speedOut, n.proxy(this.close, this)) }
        }, s.helpers.title = {
            defaults: { type: "float", position: "bottom" },
            beforeShow: function(t) {
                var e, i, o = s.current,
                    r = o.title,
                    a = t.type;
                if (n.isFunction(r) && (r = r.call(o.element, o)), f(r) && "" !== n.trim(r)) {
                    switch (e = n('<div class="fancybox-title fancybox-title-' + a + '-wrap">' + r + "</div>"), a) {
                        case "inside":
                            i = s.skin;
                            break;
                        case "outside":
                            i = s.wrap;
                            break;
                        case "over":
                            i = s.inner;
                            break;
                        default:
                            i = s.skin, e.appendTo("body"), l && e.width(e.width()), e.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(g(e.css("margin-bottom")))
                    }
                    e["top" === t.position ? "prependTo" : "appendTo"](i)
                }
            }
        }, n.fn.fancybox = function(t) {
            var e, i = n(this),
                o = this.selector || "",
                r = function(r) {
                    var a, l, c = n(this).blur(),
                        u = e;
                    r.ctrlKey || r.altKey || r.shiftKey || r.metaKey || c.is(".fancybox-wrap") || (a = t.groupAttr || "data-fancybox-group", l = c.attr(a), l || (a = "rel", l = c.get(0)[a]), l && "" !== l && "nofollow" !== l && (c = o.length ? n(o) : i, c = c.filter("[" + a + '="' + l + '"]'), u = c.index(this)), t.index = u, s.open(c, t) !== !1 && r.preventDefault())
                };
            return t = t || {}, e = t.index || 0, o && t.live !== !1 ? a.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", r) : i.unbind("click.fb-start").bind("click.fb-start", r), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, a.ready(function() {
            var e, r;
            n.scrollbarWidth === i && (n.scrollbarWidth = function() {
                var t = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                    e = t.children(),
                    i = e.innerWidth() - e.height(99).innerWidth();
                return t.remove(), i
            }), n.support.fixedPosition === i && (n.support.fixedPosition = function() {
                var t = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                    e = 20 === t[0].offsetTop || 15 === t[0].offsetTop;
                return t.remove(), e
            }()), n.extend(s.defaults, { scrollbarWidth: n.scrollbarWidth(), fixed: n.support.fixedPosition, parent: n("body") }), e = n(t).width(), o.addClass("fancybox-lock-test"), r = n(t).width(), o.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (r - e) + "px;}</style>").appendTo("head")
        })
    }(window, document, jQuery), ! function(t, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e() }(this, function() {
        return function(t) {
            function e(i) { if (n[i]) return n[i].exports; var o = n[i] = { i: i, l: !1, exports: {} }; return t[i].call(o.exports, o, o.exports, e), o.l = !0, o.exports }
            var n = {};
            return e.m = t, e.c = n, e.d = function(t, n, i) { e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: i }) }, e.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function(t, n) {
                if (1 & n && (t = e(t)), 8 & n) return t;
                if (4 & n && "object" == typeof t && t && t.__esModule) return t;
                var i = Object.create(null);
                if (e.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t)
                    for (var o in t) e.d(i, o, function(e) { return t[e] }.bind(null, o));
                return i
            }, e.n = function(t) { var n = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return e.d(n, "a", n), n }, e.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 0)
        }([function(t, e, n) {
            "use strict";

            function i(t) { return t && t.__esModule ? t : { "default": t } }

            function o(t, e) { var n = "data-clipboard-" + t; if (e.hasAttribute(n)) return e.getAttribute(n) }
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                a = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
                }(),
                s = i(n(1)),
                l = i(n(3)),
                c = i(n(4)),
                u = function(t) {
                    function e(t, n) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, e); var i = function(t, e) { if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !e || "object" != typeof e && "function" != typeof e ? t : e }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)); return i.resolveOptions(n), i.listenClick(t), i }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, l["default"]), a(e, [{
                        key: "resolveOptions",
                        value: function() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === r(t.container) ? t.container : document.body
                        }
                    }, {
                        key: "listenClick",
                        value: function(t) {
                            var e = this;
                            this.listener = (0, c["default"])(t, "click", function(t) { return e.onClick(t) })
                        }
                    }, {
                        key: "onClick",
                        value: function(t) {
                            var e = t.delegateTarget || t.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new s["default"]({ action: this.action(e), target: this.target(e), text: this.text(e), container: this.container, trigger: e, emitter: this })
                        }
                    }, { key: "defaultAction", value: function(t) { return o("action", t) } }, { key: "defaultTarget", value: function(t) { var e = o("target", t); if (e) return document.querySelector(e) } }, { key: "defaultText", value: function(t) { return o("text", t) } }, { key: "destroy", value: function() { this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null) } }], [{
                        key: "isSupported",
                        value: function() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                e = "string" == typeof t ? [t] : t,
                                n = !!document.queryCommandSupported;
                            return e.forEach(function(t) { n = n && !!document.queryCommandSupported(t) }), n
                        }
                    }]), e
                }();
            t.exports = u
        }, function(t, e, n) {
            "use strict";
            var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) { return typeof t } : function(t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t },
                r = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var i = e[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                        }
                    }
                    return function(e, n, i) { return n && t(e.prototype, n), i && t(e, i), e }
                }(),
                a = n(2),
                s = (i = a) && i.__esModule ? i : { "default": i },
                l = function() {
                    function t(e) {! function(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }(this, t), this.resolveOptions(e), this.initSelection() }
                    return r(t, [{
                        key: "resolveOptions",
                        value: function() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                        }
                    }, { key: "initSelection", value: function() { this.text ? this.selectFake() : this.target && this.selectTarget() } }, {
                        key: "selectFake",
                        value: function() {
                            var t = this,
                                e = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function() { return t.removeFake() }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, s["default"])(this.fakeElem), this.copyText()
                        }
                    }, { key: "removeFake", value: function() { this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null) } }, { key: "selectTarget", value: function() { this.selectedText = (0, s["default"])(this.target), this.copyText() } }, {
                        key: "copyText",
                        value: function() {
                            var t = void 0;
                            try { t = document.execCommand(this.action) } catch (e) { t = !1 }
                            this.handleResult(t)
                        }
                    }, { key: "handleResult", value: function(t) { this.emitter.emit(t ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) }) } }, { key: "clearSelection", value: function() { this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges() } }, { key: "destroy", value: function() { this.removeFake() } }, { key: "action", set: function() { var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy"; if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"') }, get: function() { return this._action } }, {
                        key: "target",
                        set: function(t) {
                            if (void 0 !== t) {
                                if (!t || "object" !== (void 0 === t ? "undefined" : o(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = t
                            }
                        },
                        get: function() { return this._target }
                    }]), t
                }();
            t.exports = l
        }, function(t, e) {
            t.exports = function(t) {
                var e;
                if ("SELECT" === t.nodeName) t.focus(), e = t.value;
                else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                    var n = t.hasAttribute("readonly");
                    n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
                } else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var i = window.getSelection(),
                        o = document.createRange();
                    o.selectNodeContents(t), i.removeAllRanges(), i.addRange(o), e = i.toString()
                }
                return e
            }
        }, function(t, e) {
            function n() {}
            n.prototype = {
                on: function(t, e, n) { var i = this.e || (this.e = {}); return (i[t] || (i[t] = [])).push({ fn: e, ctx: n }), this },
                once: function(t, e, n) {
                    function i() { o.off(t, i), e.apply(n, arguments) }
                    var o = this;
                    return i._ = e, this.on(t, i, n)
                },
                emit: function(t) { for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, o = n.length; i < o; i++) n[i].fn.apply(n[i].ctx, e); return this },
                off: function(t, e) {
                    var n = this.e || (this.e = {}),
                        i = n[t],
                        o = [];
                    if (i && e)
                        for (var r = 0, a = i.length; r < a; r++) i[r].fn !== e && i[r].fn._ !== e && o.push(i[r]);
                    return o.length ? n[t] = o : delete n[t], this
                }
            }, t.exports = n
        }, function(t, e, n) {
            var i = n(5),
                o = n(6);
            t.exports = function(t, e, n) { if (!t && !e && !n) throw new Error("Missing required arguments"); if (!i.string(e)) throw new TypeError("Second argument must be a String"); if (!i.fn(n)) throw new TypeError("Third argument must be a Function"); if (i.node(t)) return f = e, p = n, (d = t).addEventListener(f, p), { destroy: function() { d.removeEventListener(f, p) } }; if (i.nodeList(t)) return l = t, c = e, u = n, Array.prototype.forEach.call(l, function(t) { t.addEventListener(c, u) }), { destroy: function() { Array.prototype.forEach.call(l, function(t) { t.removeEventListener(c, u) }) } }; if (i.string(t)) return r = t, a = e, s = n, o(document.body, r, a, s); throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList"); var r, a, s, l, c, u, d, f, p }
        }, function(t, e) { e.node = function(t) { return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType }, e.nodeList = function(t) { var n = Object.prototype.toString.call(t); return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0])) }, e.string = function(t) { return "string" == typeof t || t instanceof String }, e.fn = function(t) { return "[object Function]" === Object.prototype.toString.call(t) } }, function(t, e, n) {
            function i(t, e, n, i, r) { var a = function(t, e, n, i) { return function(n) { n.delegateTarget = o(n.target, e), n.delegateTarget && i.call(t, n) } }.apply(this, arguments); return t.addEventListener(n, a, r), { destroy: function() { t.removeEventListener(n, a, r) } } }
            var o = n(7);
            t.exports = function(t, e, n, o, r) { return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function(t) { return i(t, e, n, o, r) })) }
        }, function(t, e) {
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var n = Element.prototype;
                n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
            }
            t.exports = function(t, e) {
                for (; t && 9 !== t.nodeType;) {
                    if ("function" == typeof t.matches && t.matches(e)) return t;
                    t = t.parentNode
                }
            }
        }])
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) { "use strict"; var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
        for (var n in e)
            if (void 0 !== t.style[n]) return { end: e[n] };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function() { n = !0 });
        var o = function() { n || t(i).trigger(t.support.transition.end) };
        return setTimeout(o, e), this
    }, t(function() { t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) { if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments) } }) })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(e) { t(e).on("click", n, this.close) };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
        function n() { a.detach().trigger("closed.bs.alert").remove() }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t("#" === r ? [] : r);
        e && e.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() { return t.fn.alert = o, this }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.button"),
                r = "object" == typeof e && e;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var n = function(e, i) { this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1 };
    n.VERSION = "3.3.7", n.DEFAULTS = { loadingText: "loading..." }, n.prototype.setState = function(e) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() { i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1)) }, this), 0)
    }, n.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) { var n = this.$element.find("input"); "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() { return t.fn.button = i, this }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = t(n.target).closest(".btn");
        e.call(i, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) { t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type)) })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.carousel"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                a = "string" == typeof e ? e : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : a ? o[a]() : r.interval && o.pause().cycle()
        })
    }
    var n = function(e, n) { this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, n.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function(e) { return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, n.prototype.getItemIndex = function(t) { return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, n.prototype.getItemForDirection = function(t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1,
            r = (n + o) % this.$items.length;
        return this.$items.eq(r)
    }, n.prototype.to = function(t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function(e) { return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, n.prototype.next = function() { if (!this.sliding) return this.slide("next") }, n.prototype.prev = function() { if (!this.sliding) return this.slide("prev") }, n.prototype.slide = function(e, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(e, o),
            a = this.interval,
            s = "next" == e ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var c = r[0],
            u = t.Event("slide.bs.carousel", { relatedTarget: c, direction: s });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = t(this.$indicators.children()[this.getItemIndex(r)]);
                d && d.addClass("active")
            }
            var f = t.Event("slid.bs.carousel", { relatedTarget: c, direction: s });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function() { r.removeClass([e, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(f) }, 0) }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), a && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() { return t.fn.carousel = i, this };
    var o = function(n) {
        var i, o = t(this),
            r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var a = t.extend({}, r.data(), o.data()),
                s = o.attr("data-slide-to");
            s && (a.interval = !1), e.call(r, a), s && r.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) { var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""); return t(i) }

    function n(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.collapse"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = { toggle: !0 }, i.prototype.dimension = function() { var t = this.$element.hasClass("width"); return t ? "width" : "height" }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() { this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
                    if (!t.support.transition) return s.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, i.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, i.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
            var o = t(i);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() { return t.fn.collapse = o, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = t(this);
        o.attr("data-target") || i.preventDefault();
        var r = e(o),
            a = r.data("bs.collapse"),
            s = a ? "toggle" : o.data();
        n.call(r, s)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(o).remove(), t(r).each(function() {
            var i = t(this),
                o = e(i),
                r = { relatedTarget: this };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function i(e) {
        return this.each(function() {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new a(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        a = function(e) { t(e).on("click.bs.dropdown", this.toggle) };
    a.VERSION = "3.3.7", a.prototype.toggle = function(i) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o),
                a = r.hasClass("open");
            if (n(), !a) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var s = { relatedTarget: this };
                if (r.trigger(i = t.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, a.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = e(i),
                    a = o.hasClass("open");
                if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var s = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + s);
                if (l.length) {
                    var c = l.index(n.target);
                    38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() { return t.fn.dropdown = s, this }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, i) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                a = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new n(this, a)), "string" == typeof e ? r[e](i) : a.show && r.show(i)
        })
    }
    var n = function(e, n) { this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, n.prototype.toggle = function(t) { return this.isShown ? this.hide() : this.show(t) }, n.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { i.$element.one("mouseup.dismiss.bs.modal", function(e) { t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0) }) }), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = t.Event("shown.bs.modal", { relatedTarget: e });
            o ? i.$dialog.one("bsTransitionEnd", function() { i.$element.trigger("focus").trigger(r) }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(e) { e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal()) }, n.prototype.enforceFocus = function() { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) { document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, n.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, n.prototype.resize = function() { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, n.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") })
    }, n.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, n.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() { i.removeBackdrop(), e && e() };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, n.prototype.handleUpdate = function() { this.adjustDialog() }, n.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" })
    }, n.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, n.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, n.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() { return t.fn.modal = i, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = t(this),
            o = i.attr("href"),
            r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            a = r.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(o) && o }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) { t.isDefaultPrevented() || r.one("hidden.bs.modal", function() { i.is(":visible") && i.trigger("focus") }) }), e.call(r, a, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e) };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, n.prototype.init = function(e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var a = o[r];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle()
    }, n.prototype.getDefaults = function() { return n.DEFAULTS }, n.prototype.getOptions = function(e) { return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e }, n.prototype.getDelegateOptions = function() {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) { n[t] != i && (e[t] = i) }), e
    }, n.prototype.enter = function(e) { var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() { "in" == n.hoverState && n.show() }, n.options.delay.show)) : n.show()) }, n.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function(e) { var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type); if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() { "out" == n.hoverState && n.hide() }, n.options.delay.hide)) : n.hide() }, n.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(s);
            c && (s = s.replace(l, "") || "top"), r.detach().css({ top: 0, left: 0, display: "block" }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                d = r[0].offsetWidth,
                f = r[0].offsetHeight;
            if (c) {
                var p = s,
                    h = this.getPosition(this.$viewport);
                s = "bottom" == s && u.bottom + f > h.bottom ? "top" : "top" == s && u.top - f < h.top ? "bottom" : "right" == s && u.right + d > h.width ? "left" : "left" == s && u.left - d < h.left ? "right" : s, r.removeClass(p).addClass(s)
            }
            var g = this.getCalculatedOffset(s, u, d, f);
            this.applyPlacement(g, s);
            var m = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function(e, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(i[0], t.extend({ using: function(t) { i.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != r && (e.top = e.top + r - c);
        var u = this.getViewportAdjustedDelta(n, e, l, c);
        u.left ? e.left += u.left : e.top += u.top;
        var d = /top|bottom/.test(n),
            f = d ? 2 * u.left - o + l : 2 * u.top - r + c,
            p = d ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(f, i[0][p], d)
    }, n.prototype.replaceArrow = function(t, e, n) { this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "") }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(e) {
        function i() { "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e() }
        var o = this,
            r = t(this.$tip),
            a = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(a), !a.isDefaultPrevented()) return r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, n.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() { return this.getTitle() }, n.prototype.getPosition = function(e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, { width: o.right - o.left, height: o.bottom - o.top }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            a = i ? { top: 0, left: 0 } : r ? null : e.offset(),
            s = { scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
            l = i ? { width: t(window).width(), height: t(window).height() } : null;
        return t.extend({}, o, s, l, a)
    }, n.prototype.getCalculatedOffset = function(t, e, n, i) { return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - n / 2 } : "top" == t ? { top: e.top - i, left: e.left + e.width / 2 - n / 2 } : "left" == t ? { top: e.top + e.height / 2 - i / 2, left: e.left - n } : { top: e.top + e.height / 2 - i / 2, left: e.left + e.width } }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
        var o = { top: 0, left: 0 };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - r - a.scroll,
                l = e.top + r - a.scroll + i;
            s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
        } else {
            var c = e.left - r,
                u = e.left + r + n;
            c < a.left ? o.left = a.left - c : u > a.right && (o.left = a.left + a.width - u)
        }
        return o
    }, n.prototype.getTitle = function() {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function(t) { do t += ~~(1e6 * Math.random()); while (document.getElementById(t)); return t }, n.prototype.tip = function() { if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, n.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, n.prototype.enable = function() { this.enabled = !0 }, n.prototype.disable = function() { this.enabled = !1 }, n.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, n.prototype.toggle = function(e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() { t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n,
        t.fn.tooltip.noConflict = function() { return t.fn.tooltip = i, this }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.popover"),
                r = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
        })
    }
    var n = function(t, e) { this.init("popover", t, e) };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() { return n.DEFAULTS }, n.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, n.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() { return t.fn.popover = i, this }
}(jQuery), + function(t) {
    "use strict";

    function e(n, i) { this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process() }

    function n(n) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, e.prototype.refresh = function() {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + i, o]
            ] || null
        }).sort(function(t, e) { return t[0] - e[0] }).each(function() { e.offsets.push(this[0]), e.targets.push(this[1]) })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return a != (t = r[r.length - 1]) && this.activate(t);
        if (a && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) a != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() { t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() { return t.fn.scrollspy = i, this }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e) { this.element = t(e) };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                a = t.Event("show.bs.tab", { relatedTarget: o[0] });
            if (o.trigger(r), e.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var s = t(i);
                this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() { o.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: o[0] }) })
            }
        }
    }, n.prototype.activate = function(e, i, o) {
        function r() { a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o() }
        var a = i.find("> .active"),
            s = o && t.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() { return t.fn.tab = i, this };
    var o = function(n) { n.preventDefault(), e.call(t(this), "show") };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.affix"),
                r = "object" == typeof e && e;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) { this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = { offset: 0, target: window }, n.prototype.getState = function(t, e, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            a = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + a <= t - i) && "bottom";
        var s = null == this.affixed,
            l = s ? o : r.top,
            c = s ? a : e;
        return null != n && o <= n ? "top" : null != i && l + c >= t - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var s = this.getState(a, e, o, r);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({ top: a - e - r })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() { return t.fn.affix = i, this }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery);
var is_mobile = function(t) { return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) }(navigator.userAgent || navigator.vendor || window.opera);
$(document).ready(function() {
    $("img[data-src]").length > 0 && $("img[data-src]").Lazy();
    var t = new ClipboardJS(".clipboard");
    $(".clipboard").each(function() { $(this).tooltip({ trigger: "manual", title: $(this).data("title") }) }), t.on("success", function(t) { t.clearSelection(), $(t.trigger).tooltip("show"), setTimeout(function() { $(t.trigger).tooltip("hide") }, 2e3) });
    var e = null,
        n = function() { e && (clearTimeout(e), e = null), e = setTimeout(function() { document.location.reload() }, 18e5) };
    n(), $(window).on("mousemove keydown keypress keyup change mouseenter scroll resize dblclick", n), $(document).on("pjax:success", function(t) { $("[data-ox-phs]", t.target).each(function() { ox_r("#" + $(this).attr("id")) }), $("body,html").animate({ scrollTop: $(t.target).offset().top }, 400) }), $(window).scroll(function() { $(this).scrollTop() > 0 ? $("#scroller").fadeIn() : $("#scroller").fadeOut() }), $("#scroller").click(function() { return $("body,html").animate({ scrollTop: 0 }, 400), !1 }), $("#currencies").popover({ html: !0, trigger: "hover click", placement: "auto", content: $("#currencies_popover").html() }), $("#weather").popover({ html: !0, trigger: "hover click", placement: "auto", content: $("#weather_popover").html() }), $(".menuMenuButton").click(function() { $("body").css("overflow", "hidden"), $("#mainMenu").fadeIn() }), $(".closeMainMenu").click(function() { $("#mainMenu").fadeOut(), $("body").css("overflow", "auto") }), $(".searchButton").click(function() { $("body").css("overflow", "hidden"), $("#searchForm").fadeIn() }), $(".closeSearchForm").click(function() { $("#searchForm").fadeOut(), $("body").css("overflow", "auto") });
    var i = { tpl: { wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (navigator.userAgent.match(/msie/i) ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">Запрос не может быть выполнен.<br/>Пожалуйста, попробуйте позже.</p>', closeBtn: '<a title="Закрыть" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Следующая" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Предыдущая" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>', loading: '<div id="fancybox-loading"><div></div></div>' }, live: !0 },
        o = function() {
            is_mobile ? $(".ps-current li:visible a, .fancybox").off("click.fb-start") : ($(".ps-current li a").fancybox(i), $(".fancybox").fancybox(i), $("img[data-media]").each(function() {
                var t = $(this).parent("a");
                t.length > 0 && t.fancybox(i)
            }))
        };
    $(window).resize(o), $(".pwslider").pgwSlideshow(), $(".ps-current").each(function(t) {
        var e = $("ul li a", $(this));
        e.attr("rel", "news-gallery-" + t)
    }), o(), $(".titlesList a").click(function() { var t = $(this).attr("href"); return t.length > 0 && $("html, body").animate({ scrollTop: $(t).offset().top - 50 }, 800), !1 }), is_mobile || $(".mainNewsList a").mouseover(function() { r($(this)) });
    var r = function(t) { var e = t.parent().index(); return !t.hasClass("active") && ($(".mainNewsOne>div").stop(!0, !0), $(".mainNewsList a").removeClass("active"), t.addClass("active"), $(".mainNewsOne>div").not(".active").hide(), $(".mainNewsOne>div.active").removeClass("active").animate({ opacity: 0 }, 500, function() { $(this).hide() }), $(".mainNewsOne>div:eq(" + e + ")").show(), void $(".mainNewsOne>div:eq(" + e + ")").addClass("active").animate({ opacity: 1 }, 500)) },
        a = function() {
            var t = $(".mainNewsList:first").outerHeight();
            $(".mainNewsList div").show().each(function() { if ($(this).height() + $(this).position().top > t) { var e = $(this).index() - 1; return $(".mainNewsList div:gt(" + e + ")").hide(), !1 } })
        };
    $(window).resize(a), a();
    var s = function() {
            if ($("body").hasClass("fixTopBanner")) {
                var t = $(".topBanner:first").height();
                t > 0 ? ($("body").css({ "padding-top": t + "px" }), $(window).scrollTop() > $(window).height() / 2 ? $(".topBanner").fadeOut() : $(".topBanner").fadeIn()) : setTimeout(s, 500)
            }
            var e = ($("body").width() - $("footer .container").width()) / 2;
            $(".side-banners-item").width(e - 15)
        },
        l = function() {
            var t = $(".bottomBanner:first").height();
            t > 0 ? ($("body").css({ "padding-bottom": t + "px" }), $(window).scrollTop() > $(window).height() / 2 ? $(".bottomBanner").fadeIn() : ($("body").css({ "padding-bottom": 0 }), $(".bottomBanner").fadeOut())) : ($("body").css({ "padding-bottom": 0 }), $(".bottomBanner").fadeOut(), setTimeout(s, 500))
        };
    $(window).resize(s), $(window).scroll(s), $(window).resize(l), $(window).scroll(l), s(), l(), $(".close-banner").on("click", function(t) { t.preventDefault(), $(this).parents(".bottomBanner").remove() });
    var c = function(t) {
        var e = $(".widget-last-news-list", t),
            n = "closed" == t.data("state"),
            i = $(".widget-last-news-toggler", t),
            o = 0;
        n ? e.find(".one,.lineDate").each(function() { o += $(this).outerHeight() }) : o = e.data("init-height"), e.animate({ height: o }, 200), t.data("state", n ? "opened" : "closed"), n ? ($(i).removeClass("fa-angle-down"), $(i).addClass("fa-angle-up"), t.addClass("widget-last-news-opened")) : ($(i).addClass("fa-angle-down"), $(i).removeClass("fa-angle-up"), t.removeClass("widget-last-news-opened"))
    };
    $(".widget-last-news-inner .one:first").on("click", function(t) { var e = $(this).parents(".widget-last-news"); "closed" == $(e).data("state") && (t.preventDefault(), c(e)) }), $(".widget-last-news-toggler").on("click", function(t) {
        t.preventDefault();
        var e = $(this).parents(".widget-last-news");
        c(e)
    });
    var u = function() {
            $(".widget-last-news-list").each(function() {
                var t = $(this).parents(".widget-last-news");
                if ("closed" == $(t).data("state")) {
                    var e = $(this).find(".one:first").outerHeight();
                    e > 64 && (e = 64), $(this).height(e), $(this).data("init-height", e)
                }
            })
        },
        d = function() {
            u();
            var t = $(".widget-last-news"),
                e = t.height();
            e > 0 ? $(window).scrollTop() > $(window).height() / 2 ? t.fadeIn() : t.fadeOut() : setTimeout(d, 500)
        };
    d(), $(window).resize(d), $(window).scroll(d), $(".broadcasting-sort").on("click", function(t) {
        t.preventDefault();
        var e = $(this).parents(".broadcasting").find(".broadcasting-content");
        e.toggleClass("reversed")
    }), window.brdcsturl && setInterval(function() {
        $.get(brdcsturl, function(t) {
            $(".broadcasting-content").html($(".broadcasting-item", t)), $(".broadcasting-content .pwslider").pgwSlideshow(), $(".broadcasting-content .ps-current").each(function(t) {
                var e = $("ul li a", $(this));
                e.attr("rel", "news-gallery-" + t)
            }), o()
        }, "html")
    }, 3e5), $(".flscrn").on("ox.show", function() {
        var t, e = $(this);
        e.css({ display: "flex" });
        var n = function() { $(e).hide(), clearInterval(t), $("body").removeClass("flscrn-body") },
            i = 10;
        $("body").addClass("flscrn-body");
        var o = $("<a/>", { text: i, href: "#", "class": "flscrn-cntr" }).on("click", function(t) { t.preventDefault(), n() }).appendTo(e);
        t = setInterval(function() {
            var t = parseInt(o.text());
            t ? o.text(--t) : n()
        }, 1e3)
    })
}), $(window).on("load", function() {
    if ($("#scrollable-banners").length) {
        var t = function() {
            var t = $("#content-wrapper"),
                e = $("#scrollable-banners"),
                n = t.offset().top + t.outerHeight(!0),
                i = $("body").outerHeight(!0) - n;
            e.sticky({ topSpacing: 30, bottomSpacing: i })
        };
        t(), setInterval(function() { t() }, 1500)
    }
}), ! function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function(t) {
    var e = Array.prototype.slice,
        n = Array.prototype.splice,
        i = { topSpacing: 0, bottomSpacing: 0, className: "is-sticky", wrapperClassName: "sticky-wrapper", center: !1, getWidthFrom: "", widthFromWrapper: !0, responsiveWidth: !1, zIndex: "inherit" },
        o = t(window),
        r = t(document),
        a = [],
        s = o.height(),
        l = function() {
            for (var e = o.scrollTop(), n = r.height(), i = n - s, l = e > i ? i - e : 0, c = 0, u = a.length; c < u; c++) {
                var d = a[c],
                    f = d.stickyWrapper.offset().top,
                    p = f - d.topSpacing - l;
                if (d.stickyWrapper.css("height", d.stickyElement.outerHeight()), e <= p) null !== d.currentTop && (d.stickyElement.css({ width: "", position: "", top: "", "z-index": "" }), d.stickyElement.parent().removeClass(d.className), d.stickyElement.trigger("sticky-end", [d]), d.currentTop = null);
                else {
                    var h = n - d.stickyElement.outerHeight() - d.topSpacing - d.bottomSpacing - e - l;
                    if (h < 0 ? h += d.topSpacing : h = d.topSpacing, d.currentTop !== h) {
                        var g;
                        d.getWidthFrom ? (padding = d.stickyElement.innerWidth() - d.stickyElement.width(), g = t(d.getWidthFrom).width() - padding || null) : d.widthFromWrapper && (g = d.stickyWrapper.width()), null == g && (g = d.stickyElement.width()), d.stickyElement.css("width", g).css("position", "fixed").css("top", h).css("z-index", d.zIndex), d.stickyElement.parent().addClass(d.className), null === d.currentTop ? d.stickyElement.trigger("sticky-start", [d]) : d.stickyElement.trigger("sticky-update", [d]), d.currentTop === d.topSpacing && d.currentTop > h || null === d.currentTop && h < d.topSpacing ? d.stickyElement.trigger("sticky-bottom-reached", [d]) : null !== d.currentTop && h === d.topSpacing && d.currentTop < h && d.stickyElement.trigger("sticky-bottom-unreached", [d]), d.currentTop = h
                    }
                    var m = d.stickyWrapper.parent(),
                        v = d.stickyElement.offset().top + d.stickyElement.outerHeight() >= m.offset().top + m.outerHeight() && d.stickyElement.offset().top <= d.topSpacing;
                    v ? d.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : d.stickyElement.css("position", "fixed").css("top", h).css("bottom", "").css("z-index", d.zIndex)
                }
            }
        },
        c = function() {
            s = o.height();
            for (var e = 0, n = a.length; e < n; e++) {
                var i = a[e],
                    r = null;
                i.getWidthFrom ? i.responsiveWidth && (r = t(i.getWidthFrom).width()) : i.widthFromWrapper && (r = i.stickyWrapper.width()), null != r && i.stickyElement.css("width", r)
            }
        },
        u = {
            init: function(e) {
                return this.each(function() {
                    var n = t.extend({}, i, e),
                        o = t(this),
                        r = o.attr("id"),
                        s = r ? r + "-" + i.wrapperClassName : i.wrapperClassName,
                        l = t("<div></div>").attr("id", s).addClass(n.wrapperClassName);
                    o.wrapAll(function() { if (0 == t(this).parent("#" + s).length) return l });
                    var c = o.parent();
                    n.center && c.css({ width: o.outerWidth(), marginLeft: "auto", marginRight: "auto" }), "right" === o.css("float") && o.css({ "float": "none" }).parent().css({ "float": "right" }), n.stickyElement = o, n.stickyWrapper = c, n.currentTop = null, a.push(n), u.setWrapperHeight(this), u.setupChangeListeners(this)
                })
            },
            setWrapperHeight: function(e) {
                var n = t(e),
                    i = n.parent();
                i && i.css("height", n.outerHeight())
            },
            setupChangeListeners: function(t) {
                if (window.MutationObserver) {
                    var e = new window.MutationObserver(function(e) {
                        (e[0].addedNodes.length || e[0].removedNodes.length) && u.setWrapperHeight(t)
                    });
                    e.observe(t, { subtree: !0, childList: !0 })
                } else window.addEventListener ? (t.addEventListener("DOMNodeInserted", function() { u.setWrapperHeight(t) }, !1), t.addEventListener("DOMNodeRemoved", function() { u.setWrapperHeight(t) }, !1)) : window.attachEvent && (t.attachEvent("onDOMNodeInserted", function() { u.setWrapperHeight(t) }), t.attachEvent("onDOMNodeRemoved", function() { u.setWrapperHeight(t) }))
            },
            update: l,
            unstick: function(e) {
                return this.each(function() {
                    for (var e = this, i = t(e), o = -1, r = a.length; r-- > 0;) a[r].stickyElement.get(0) === e && (n.call(a, r, 1), o = r);
                    o !== -1 && (i.unwrap(), i.css({ width: "", position: "", top: "", "float": "", "z-index": "" }))
                })
            }
        };
    window.addEventListener ? (window.addEventListener("scroll", l, !1), window.addEventListener("resize", c, !1)) : window.attachEvent && (window.attachEvent("onscroll", l), window.attachEvent("onresize", c)), t.fn.sticky = function(n) { return u[n] ? u[n].apply(this, e.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.sticky") : u.init.apply(this, arguments) }, t.fn.unstick = function(n) { return u[n] ? u[n].apply(this, e.call(arguments, 1)) : "object" != typeof n && n ? void t.error("Method " + n + " does not exist on jQuery.sticky") : u.unstick.apply(this, arguments) }, t(function() { setTimeout(l, 0) })
});