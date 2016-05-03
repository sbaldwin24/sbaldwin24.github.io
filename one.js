! function(a, b) {
    function c(a) {
        var b = a.length,
            c = ib.type(a);
        return ib.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a) }

    function d(a) {
        var b = xb[a] = {};
        return ib.each(a.match(kb) || [], function(a, c) { b[c] = !0 }), b }

    function e(a, c, d, e) {
        if (ib.acceptData(a)) {
            var f, g, h = ib.expando,
                i = "string" == typeof c,
                j = a.nodeType,
                k = j ? ib.cache : a,
                l = j ? a[h] : a[h] && h;
            if (l && k[l] && (e || k[l].data) || !i || d !== b) return l || (j ? a[h] = l = _.pop() || ib.guid++ : l = h), k[l] || (k[l] = {}, j || (k[l].toJSON = ib.noop)), ("object" == typeof c || "function" == typeof c) && (e ? k[l] = ib.extend(k[l], c) : k[l].data = ib.extend(k[l].data, c)), f = k[l], e || (f.data || (f.data = {}), f = f.data), d !== b && (f[ib.camelCase(c)] = d), i ? (g = f[c], null == g && (g = f[ib.camelCase(c)])) : g = f, g } }

    function f(a, b, c) {
        if (ib.acceptData(a)) {
            var d, e, f, g = a.nodeType,
                i = g ? ib.cache : a,
                j = g ? a[ib.expando] : ib.expando;
            if (i[j]) {
                if (b && (f = c ? i[j] : i[j].data)) { ib.isArray(b) ? b = b.concat(ib.map(b, ib.camelCase)) : b in f ? b = [b] : (b = ib.camelCase(b), b = b in f ? [b] : b.split(" "));
                    for (d = 0, e = b.length; e > d; d++) delete f[b[d]];
                    if (!(c ? h : ib.isEmptyObject)(f)) return }(c || (delete i[j].data, h(i[j]))) && (g ? ib.cleanData([a], !0) : ib.support.deleteExpando || i != i.window ? delete i[j] : i[j] = null) } } }

    function g(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(zb, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try { d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : yb.test(d) ? ib.parseJSON(d) : d } catch (f) {}
                ib.data(a, c, d) } else d = b }
        return d }

    function h(a) {
        var b;
        for (b in a)
            if (("data" !== b || !ib.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0 }

    function i() {
        return !0 }

    function j() {
        return !1 }

    function k(a, b) { do a = a[b]; while (a && 1 !== a.nodeType);
        return a }

    function l(a, b, c) {
        if (b = b || 0, ib.isFunction(b)) return ib.grep(a, function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c });
        if (b.nodeType) return ib.grep(a, function(a) {
            return a === b === c });
        if ("string" == typeof b) {
            var d = ib.grep(a, function(a) {
                return 1 === a.nodeType });
            if (Rb.test(b)) return ib.filter(b, d, !c);
            b = ib.filter(b, d) }
        return ib.grep(a, function(a) {
            return ib.inArray(a, b) >= 0 === c }) }

    function m(a) {
        var b = Ub.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            for (; b.length;) c.createElement(b.pop());
        return c }

    function n(a, b) {
        return a.getElementsByTagName(b)[0] || a.appendChild(a.ownerDocument.createElement(b)) }

    function o(a) {
        var b = a.getAttributeNode("type");
        return a.type = (b && b.specified) + "/" + a.type, a }

    function p(a) {
        var b = ec.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function q(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) ib._data(c, "globalEval", !b || ib._data(b[d], "globalEval")) }

    function r(a, b) {
        if (1 === b.nodeType && ib.hasData(a)) {
            var c, d, e, f = ib._data(a),
                g = ib._data(b, f),
                h = f.events;
            if (h) { delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) ib.event.add(b, c, h[c][d]) }
            g.data && (g.data = ib.extend({}, g.data)) } }

    function s(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !ib.support.noCloneEvent && b[ib.expando]) { e = ib._data(b);
                for (d in e.events) ib.removeEvent(b, d, e.handle);
                b.removeAttribute(ib.expando) } "script" === c && b.text !== a.text ? (o(b).text = a.text, p(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ib.support.html5Clone && a.innerHTML && !ib.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bc.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) } }

    function t(a, c) {
        var d, e, f = 0,
            g = typeof a.getElementsByTagName !== V ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== V ? a.querySelectorAll(c || "*") : b;
        if (!g)
            for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) !c || ib.nodeName(e, c) ? g.push(e) : ib.merge(g, t(e, c));
        return c === b || c && ib.nodeName(a, c) ? ib.merge([a], g) : g }

    function u(a) { bc.test(a.type) && (a.defaultChecked = a.checked) }

    function v(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yc.length; e--;)
            if (b = yc[e] + c, b in a) return b;
        return d }

    function w(a, b) {
        return a = b || a, "none" === ib.css(a, "display") || !ib.contains(a.ownerDocument, a) }

    function x(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ib._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && w(d) && (f[g] = ib._data(d, "olddisplay", B(d.nodeName)))) : f[g] || (e = w(d), (c && "none" !== c || !e) && ib._data(d, "olddisplay", e ? c : ib.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a }

    function y(a, b, c) {
        var d = rc.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ib.css(a, c + xc[f], !0, e)), d ? ("content" === c && (g -= ib.css(a, "padding" + xc[f], !0, e)), "margin" !== c && (g -= ib.css(a, "border" + xc[f] + "Width", !0, e))) : (g += ib.css(a, "padding" + xc[f], !0, e), "padding" !== c && (g += ib.css(a, "border" + xc[f] + "Width", !0, e)));
        return g }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = kc(a),
            g = ib.support.boxSizing && "border-box" === ib.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = lc(a, b, f), (0 > e || null == e) && (e = a.style[b]), sc.test(e)) return e;
            d = g && (ib.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0 }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px" }

    function B(a) {
        var b = W,
            c = uc[a];
        return c || (c = C(a, b), "none" !== c && c || (jc = (jc || ib("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (jc[0].contentWindow || jc[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = C(a, b), jc.detach()), uc[a] = c), c }

    function C(a, b) {
        var c = ib(b.createElement(a)).appendTo(b.body),
            d = ib.css(c[0], "display");
        return c.remove(), d }

    function D(a, b, c, d) {
        var e;
        if (ib.isArray(b)) ib.each(b, function(b, e) { c || Ac.test(a) ? d(a, e) : D(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== ib.type(b)) d(a, b);
        else
            for (e in b) D(a + "[" + e + "]", b[e], c, d) }

    function E(a) {
        return function(b, c) { "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(kb) || [];
            if (ib.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } }

    function F(a, c, d, e) {
        function f(i) {
            var j;
            return g[i] = !0, ib.each(a[i] || [], function(a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || h || g[k] ? h ? !(j = k) : b : (c.dataTypes.unshift(k), f(k), !1) }), j }
        var g = {},
            h = a === Rc;
        return f(c.dataTypes[0]) || !g["*"] && f("*") }

    function G(a, c) {
        var d, e, f = ib.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
        return d && ib.extend(!0, a, d), a }

    function H(a, c, d) {
        var e, f, g, h, i = a.contents,
            j = a.dataTypes,
            k = a.responseFields;
        for (h in k) h in d && (c[k[h]] = d[h]);
        for (;
            "*" === j[0];) j.shift(), f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f)
            for (h in i)
                if (i[h] && i[h].test(f)) { j.unshift(h);
                    break }
        if (j[0] in d) g = j[0];
        else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) { g = h;
                    break }
                e || (e = h) }
            g = g || e }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b }

    function I(a, b) {
        var c, d, e, f, g = {},
            h = 0,
            i = a.dataTypes.slice(),
            j = i[0];
        if (a.dataFilter && (b = a.dataFilter(b, a.dataType)), i[1])
            for (e in a.converters) g[e.toLowerCase()] = a.converters[e];
        for (; d = i[++h];)
            if ("*" !== d) {
                if ("*" !== j && j !== d) {
                    if (e = g[j + " " + d] || g["* " + d], !e)
                        for (c in g)
                            if (f = c.split(" "), f[1] === d && (e = g[j + " " + f[0]] || g["* " + f[0]])) { e === !0 ? e = g[c] : g[c] !== !0 && (d = f[0], i.splice(h--, 0, d));
                                break }
                    if (e !== !0)
                        if (e && a["throws"]) b = e(b);
                        else try { b = e(b) } catch (k) {
                            return { state: "parsererror", error: e ? k : "No conversion from " + j + " to " + d } } }
                j = d }
        return { state: "success", data: b } }

    function J() {
        try {
            return new a.XMLHttpRequest } catch (b) {} }

    function K() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }

    function L() {
        return setTimeout(function() { $c = b }), $c = ib.now() }

    function M(a, b) { ib.each(b, function(b, c) {
            for (var d = (ed[b] || []).concat(ed["*"]), e = 0, f = d.length; f > e; e++)
                if (d[e].call(a, b, c)) return }) }

    function N(a, b, c) {
        var d, e, f = 0,
            g = dd.length,
            h = ib.Deferred().always(function() { delete i.elem }),
            i = function() {
                if (e) return !1;
                for (var b = $c || L(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({ elem: a, props: ib.extend({}, b), opts: ib.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: $c || L(), duration: c.duration, tweens: [], createTween: function(b, c) {
                    var d = ib.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d }, stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this } }),
            k = j.props;
        for (O(k, j.opts.specialEasing); g > f; f++)
            if (d = dd[f].call(j, a, k, j.opts)) return d;
        return M(j, k), ib.isFunction(j.opts.start) && j.opts.start.call(a, j), ib.fx.timer(ib.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }

    function O(a, b) {
        var c, d, e, f, g;
        for (e in a)
            if (d = ib.camelCase(e), f = b[d], c = a[e], ib.isArray(c) && (f = c[1], c = a[e] = c[0]), e !== d && (a[d] = c, delete a[e]), g = ib.cssHooks[d], g && "expand" in g) { c = g.expand(c), delete a[d];
                for (e in c) e in a || (a[e] = c[e], b[e] = f) } else b[d] = f }

    function P(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m = this,
            n = a.style,
            o = {},
            p = [],
            q = a.nodeType && w(a);
        c.queue || (k = ib._queueHooks(a, "fx"), null == k.unqueued && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function() { k.unqueued || l() }), k.unqueued++, m.always(function() { m.always(function() { k.unqueued--, ib.queue(a, "fx").length || k.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], "inline" === ib.css(a, "display") && "none" === ib.css(a, "float") && (ib.support.inlineBlockNeedsLayout && "inline" !== B(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ib.support.shrinkWrapBlocks || m.always(function() { n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2] }));
        for (e in b)
            if (g = b[e], ad.exec(g)) {
                if (delete b[e], i = i || "toggle" === g, g === (q ? "hide" : "show")) continue;
                p.push(e) }
        if (f = p.length) { h = ib._data(a, "fxshow") || ib._data(a, "fxshow", {}), "hidden" in h && (q = h.hidden), i && (h.hidden = !q), q ? ib(a).show() : m.done(function() { ib(a).hide() }), m.done(function() {
                var b;
                ib._removeData(a, "fxshow");
                for (b in o) ib.style(a, b, o[b]) });
            for (e = 0; f > e; e++) d = p[e], j = m.createTween(d, q ? h[d] : 0), o[d] = h[d] || ib.style(a, d), d in h || (h[d] = j.start, q && (j.end = j.start, j.start = "width" === d || "height" === d ? 1 : 0)) } }

    function Q(a, b, c, d, e) {
        return new Q.prototype.init(a, b, c, d, e) }

    function R(a, b) {
        var c, d = { height: a },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xc[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d }

    function S(a) {
        return ib.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 }
    var T, U, V = typeof b,
        W = a.document,
        X = a.location,
        Y = a.jQuery,
        Z = a.$,
        $ = {},
        _ = [],
        ab = "1.9.1",
        bb = _.concat,
        cb = _.push,
        db = _.slice,
        eb = _.indexOf,
        fb = $.toString,
        gb = $.hasOwnProperty,
        hb = ab.trim,
        ib = function(a, b) {
            return new ib.fn.init(a, b, U) },
        jb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        kb = /\S+/g,
        lb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mb = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        nb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ob = /^[\],:{}\s]*$/,
        pb = /(?:^|:|,)(?:\s*\[)+/g,
        qb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        rb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        sb = /^-ms-/,
        tb = /-([\da-z])/gi,
        ub = function(a, b) {
            return b.toUpperCase() },
        vb = function(a) {
            (W.addEventListener || "load" === a.type || "complete" === W.readyState) && (wb(), ib.ready()) },
        wb = function() { W.addEventListener ? (W.removeEventListener("DOMContentLoaded", vb, !1), a.removeEventListener("load", vb, !1)) : (W.detachEvent("onreadystatechange", vb), a.detachEvent("onload", vb)) };
    ib.fn = ib.prototype = { jquery: ab, constructor: ib, init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : mb.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof ib ? c[0] : c, ib.merge(this, ib.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : W, !0)), nb.test(e[1]) && ib.isPlainObject(c))
                        for (e in c) ib.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this }
                if (f = W.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1, this[0] = f }
                return this.context = W, this.selector = a, this }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ib.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), ib.makeArray(a, this)) }, selector: "", length: 0, size: function() {
            return this.length }, toArray: function() {
            return db.call(this) }, get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a] }, pushStack: function(a) {
            var b = ib.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b }, each: function(a, b) {
            return ib.each(this, a, b) }, ready: function(a) {
            return ib.ready.promise().done(a), this }, slice: function() {
            return this.pushStack(db.apply(this, arguments)) }, first: function() {
            return this.eq(0) }, last: function() {
            return this.eq(-1) }, eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, map: function(a) {
            return this.pushStack(ib.map(this, function(b, c) {
                return a.call(b, c, b) })) }, end: function() {
            return this.prevObject || this.constructor(null) }, push: cb, sort: [].sort, splice: [].splice }, ib.fn.init.prototype = ib.fn, ib.extend = ib.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {},
            i = 1,
            j = arguments.length,
            k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || ib.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
            if (null != (f = arguments[i]))
                for (e in f) a = h[e], d = f[e], h !== d && (k && d && (ib.isPlainObject(d) || (c = ib.isArray(d))) ? (c ? (c = !1, g = a && ib.isArray(a) ? a : []) : g = a && ib.isPlainObject(a) ? a : {}, h[e] = ib.extend(k, g, d)) : d !== b && (h[e] = d));
        return h }, ib.extend({ noConflict: function(b) {
            return a.$ === ib && (a.$ = Z), b && a.jQuery === ib && (a.jQuery = Y), ib }, isReady: !1, readyWait: 1, holdReady: function(a) { a ? ib.readyWait++ : ib.ready(!0) }, ready: function(a) {
            if (a === !0 ? !--ib.readyWait : !ib.isReady) {
                if (!W.body) return setTimeout(ib.ready);
                ib.isReady = !0, a !== !0 && --ib.readyWait > 0 || (T.resolveWith(W, [ib]), ib.fn.trigger && ib(W).trigger("ready").off("ready")) } }, isFunction: function(a) {
            return "function" === ib.type(a) }, isArray: Array.isArray || function(a) {
            return "array" === ib.type(a) }, isWindow: function(a) {
            return null != a && a == a.window }, isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a) }, type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? $[fb.call(a)] || "object" : typeof a }, isPlainObject: function(a) {
            if (!a || "object" !== ib.type(a) || a.nodeType || ib.isWindow(a)) return !1;
            try {
                if (a.constructor && !gb.call(a, "constructor") && !gb.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) {
                return !1 }
            var d;
            for (d in a);
            return d === b || gb.call(a, d) }, isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0 }, error: function(a) {
            throw Error(a) }, parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || W;
            var d = nb.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = ib.buildFragment([a], b, e), e && ib(e).remove(), ib.merge([], d.childNodes)) }, parseJSON: function(c) {
            return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c : "string" == typeof c && (c = ib.trim(c), c && ob.test(c.replace(qb, "@").replace(rb, "]").replace(pb, ""))) ? Function("return " + c)() : (ib.error("Invalid JSON: " + c), b) }, parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try { a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c)) } catch (f) { d = b }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || ib.error("Invalid XML: " + c), d }, noop: function() {}, globalEval: function(b) { b && ib.trim(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) }, camelCase: function(a) {
            return a.replace(sb, "ms-").replace(tb, ub) }, nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a }, trim: hb && !hb.call("ï»¿Â ") ? function(a) {
            return null == a ? "" : hb.call(a) } : function(a) {
            return null == a ? "" : (a + "").replace(lb, "") }, makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ib.merge(d, "string" == typeof a ? [a] : a) : cb.call(d, a)), d }, inArray: function(a, b, c) {
            var d;
            if (b) {
                if (eb) return eb.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c }
            return -1 }, merge: function(a, c) {
            var d = c.length,
                e = a.length,
                f = 0;
            if ("number" == typeof d)
                for (; d > f; f++) a[e++] = c[f];
            else
                for (; c[f] !== b;) a[e++] = c[f++];
            return a.length = e, a }, grep: function(a, b, c) {
            var d, e = [],
                f = 0,
                g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e }, map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
            else
                for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
            return bb.apply([], i) }, guid: 1, proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (f = a[c], c = a, a = f), ib.isFunction(a) ? (d = db.call(arguments, 2), e = function() {
                return a.apply(c || this, d.concat(db.call(arguments))) }, e.guid = a.guid = a.guid || ib.guid++, e) : b }, access: function(a, c, d, e, f, g, h) {
            var i = 0,
                j = a.length,
                k = null == d;
            if ("object" === ib.type(d)) { f = !0;
                for (i in d) ib.access(a, c, i, d[i], !0, g, h) } else if (e !== b && (f = !0, ib.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                    return k.call(ib(a), c) })), c))
                for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g }, now: function() {
            return (new Date).getTime() } }), ib.ready.promise = function(b) {
        if (!T)
            if (T = ib.Deferred(), "complete" === W.readyState) setTimeout(ib.ready);
            else if (W.addEventListener) W.addEventListener("DOMContentLoaded", vb, !1), a.addEventListener("load", vb, !1);
        else { W.attachEvent("onreadystatechange", vb), a.attachEvent("onload", vb);
            var c = !1;
            try { c = null == a.frameElement && W.documentElement } catch (d) {}
            c && c.doScroll && function e() {
                if (!ib.isReady) {
                    try { c.doScroll("left") } catch (a) {
                        return setTimeout(e, 50) }
                    wb(), ib.ready() } }() }
        return T.promise(b) }, ib.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) { $["[object " + b + "]"] = b.toLowerCase() }), U = ib(W);
    var xb = {};
    ib.Callbacks = function(a) { a = "string" == typeof a ? xb[a] || d(a) : ib.extend({}, a);
        var c, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function(b) {
                for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++)
                    if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) { e = !1;
                        break }
                c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable()) },
            m = { add: function() {
                    if (j) {
                        var b = j.length;! function d(b) { ib.each(b, function(b, c) {
                                var e = ib.type(c); "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c) }) }(arguments), c ? g = j.length : e && (i = b, l(e)) }
                    return this }, remove: function() {
                    return j && ib.each(arguments, function(a, b) {
                        for (var d;
                            (d = ib.inArray(b, j, d)) > -1;) j.splice(d, 1), c && (g >= d && g--, h >= d && h--) }), this }, has: function(a) {
                    return a ? ib.inArray(a, j) > -1 : !(!j || !j.length) }, empty: function() {
                    return j = [], this }, disable: function() {
                    return j = k = e = b, this }, disabled: function() {
                    return !j }, lock: function() {
                    return k = b, e || m.disable(), this }, locked: function() {
                    return !k }, fireWith: function(a, b) {
                    return b = b || [], b = [a, b.slice ? b.slice() : b], !j || f && !k || (c ? k.push(b) : l(b)), this }, fire: function() {
                    return m.fireWith(this, arguments), this }, fired: function() {
                    return !!f } };
        return m }, ib.extend({ Deferred: function(a) {
            var b = [
                    ["resolve", "done", ib.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ib.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ib.Callbacks("memory")]
                ],
                c = "pending",
                d = { state: function() {
                        return c }, always: function() {
                        return e.done(arguments).fail(arguments), this }, then: function() {
                        var a = arguments;
                        return ib.Deferred(function(c) { ib.each(b, function(b, f) {
                                var g = f[0],
                                    h = ib.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = h && h.apply(this, arguments);
                                    a && ib.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments) }) }), a = null }).promise() }, promise: function(a) {
                        return null != a ? ib.extend(a, d) : d } },
                e = {};
            return d.pipe = d.then, ib.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function(a) {
            var b, c, d, e = 0,
                f = db.call(arguments),
                g = f.length,
                h = 1 !== g || a && ib.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : ib.Deferred(),
                j = function(a, c, d) {
                    return function(e) { c[a] = this, d[a] = arguments.length > 1 ? db.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d) } };
            if (g > 1)
                for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && ib.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise() } }), ib.support = function() {
        var b, c, d, e, f, g, h, i, j, k, l = W.createElement("div");
        if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c = l.getElementsByTagName("*"), d = l.getElementsByTagName("a")[0], !c || !d || !c.length) return {};
        f = W.createElement("select"), h = f.appendChild(W.createElement("option")), e = l.getElementsByTagName("input")[0], d.style.cssText = "top:1px;float:left;opacity:.5", b = { getSetAttribute: "t" !== l.className, leadingWhitespace: 3 === l.firstChild.nodeType, tbody: !l.getElementsByTagName("tbody").length, htmlSerialize: !!l.getElementsByTagName("link").length, style: /top/.test(d.getAttribute("style")), hrefNormalized: "/a" === d.getAttribute("href"), opacity: /^0.5/.test(d.style.opacity), cssFloat: !!d.style.cssFloat, checkOn: !!e.value, optSelected: h.selected, enctype: !!W.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== W.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === W.compatMode, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, e.checked = !0, b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
        try { delete l.test } catch (m) { b.deleteExpando = !1 }
        e = W.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = W.createDocumentFragment(), g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, l.attachEvent && (l.attachEvent("onclick", function() { b.noCloneEvent = !1 }), l.cloneNode(!0).click());
        for (k in { submit: !0, change: !0, focusin: !0 }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
        return l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === l.style.backgroundClip, ib(function() {
            var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                g = W.getElementsByTagName("body")[0];
            g && (c = W.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", b.boxSizing = 4 === l.offsetWidth, b.doesNotIncludeMarginInBodyOffset = 1 !== g.offsetTop, a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || { width: "4px" }).width, d = l.appendChild(W.createElement("div")), d.style.cssText = l.style.cssText = f, d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), typeof l.style.zoom !== V && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), g.removeChild(c), c = l = e = d = null) }), c = f = g = h = d = e = null, b }();
    var yb = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        zb = /([A-Z])/g;
    ib.extend({ cache: {}, expando: "jQuery" + (ab + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function(a) {
            return a = a.nodeType ? ib.cache[a[ib.expando]] : a[ib.expando], !!a && !h(a) }, data: function(a, b, c) {
            return e(a, b, c) }, removeData: function(a, b) {
            return f(a, b) }, _data: function(a, b, c) {
            return e(a, b, c, !0) }, _removeData: function(a, b) {
            return f(a, b, !0) }, acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && ib.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b } }), ib.fn.extend({ data: function(a, c) {
            var d, e, f = this[0],
                h = 0,
                i = null;
            if (a === b) {
                if (this.length && (i = ib.data(f), 1 === f.nodeType && !ib._data(f, "parsedAttrs"))) {
                    for (d = f.attributes; d.length > h; h++) e = d[h].name, e.indexOf("data-") || (e = ib.camelCase(e.slice(5)), g(f, e, i[e]));
                    ib._data(f, "parsedAttrs", !0) }
                return i }
            return "object" == typeof a ? this.each(function() { ib.data(this, a) }) : ib.access(this, function(c) {
                return c === b ? f ? g(f, a, ib.data(f, a)) : null : (this.each(function() { ib.data(this, a, c) }), b) }, null, c, arguments.length > 1, null, !0) }, removeData: function(a) {
            return this.each(function() { ib.removeData(this, a) }) } }), ib.extend({ queue: function(a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = ib._data(a, c), d && (!e || ib.isArray(d) ? e = ib._data(a, c, ib.makeArray(d)) : e.push(d)), e || []) : b }, dequeue: function(a, b) { b = b || "fx";
            var c = ib.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = ib._queueHooks(a, b),
                g = function() { ib.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), f.cur = e, e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ib._data(a, c) || ib._data(a, c, { empty: ib.Callbacks("once memory").add(function() { ib._removeData(a, b + "queue"), ib._removeData(a, c) }) }) } }), ib.fn.extend({ queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), d > arguments.length ? ib.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = ib.queue(this, a, c);
                ib._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && ib.dequeue(this, a) }) }, dequeue: function(a) {
            return this.each(function() { ib.dequeue(this, a) }) }, delay: function(a, b) {
            return a = ib.fx ? ib.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() { clearTimeout(d) } }) }, clearQueue: function(a) {
            return this.queue(a || "fx", []) }, promise: function(a, c) {
            var d, e = 1,
                f = ib.Deferred(),
                g = this,
                h = this.length,
                i = function() {--e || f.resolveWith(g, [g]) };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = ib._data(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c) } });
    var Ab, Bb, Cb = /[\t\r\n]/g,
        Db = /\r/g,
        Eb = /^(?:input|select|textarea|button|object)$/i,
        Fb = /^(?:a|area)$/i,
        Gb = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Hb = /^(?:checked|selected)$/i,
        Ib = ib.support.getSetAttribute,
        Jb = ib.support.input;
    ib.fn.extend({ attr: function(a, b) {
            return ib.access(this, ib.attr, a, b, arguments.length > 1) }, removeAttr: function(a) {
            return this.each(function() { ib.removeAttr(this, a) }) }, prop: function(a, b) {
            return ib.access(this, ib.prop, a, b, arguments.length > 1) }, removeProp: function(a) {
            return a = ib.propFix[a] || a, this.each(function() {
                try { this[a] = b, delete this[a] } catch (c) {} }) }, addClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = "string" == typeof a && a;
            if (ib.isFunction(a)) return this.each(function(b) { ib(this).addClass(a.call(this, b, this.className)) });
            if (i)
                for (b = (a || "").match(kb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Cb, " ") : " ")) {
                        for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                        c.className = ib.trim(d) }
            return this }, removeClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = 0 === arguments.length || "string" == typeof a && a;
            if (ib.isFunction(a)) return this.each(function(b) { ib(this).removeClass(a.call(this, b, this.className)) });
            if (i)
                for (b = (a || "").match(kb) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Cb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        c.className = a ? ib.trim(d) : "" }
            return this }, toggleClass: function(a, b) {
            var c = typeof a,
                d = "boolean" == typeof b;
            return this.each(ib.isFunction(a) ? function(c) { ib(this).toggleClass(a.call(this, c, this.className, b), b) } : function() {
                if ("string" === c)
                    for (var e, f = 0, g = ib(this), h = b, i = a.match(kb) || []; e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                else(c === V || "boolean" === c) && (this.className && ib._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ib._data(this, "__className__") || "") }) }, hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Cb, " ").indexOf(b) >= 0) return !0;
            return !1 }, val: function(a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = ib.isFunction(a), this.each(function(c) {
                var f, g = ib(this);
                1 === this.nodeType && (f = e ? a.call(this, c, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : ib.isArray(f) && (f = ib.map(f, function(a) {
                    return null == a ? "" : a + "" })), d = ib.valHooks[this.type] || ib.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f)) })) : f ? (d = ib.valHooks[f.type] || ib.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, "string" == typeof c ? c.replace(Db, "") : null == c ? "" : c)) : void 0 } }), ib.extend({ valHooks: { option: { get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text } }, select: { get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (ib.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ib.nodeName(c.parentNode, "optgroup"))) {
                            if (b = ib(c).val(), f) return b;
                            g.push(b) }
                    return g }, set: function(a, b) {
                    var c = ib.makeArray(b);
                    return ib(a).find("option").each(function() { this.selected = ib.inArray(ib(this).val(), c) >= 0 }), c.length || (a.selectedIndex = -1), c } } }, attr: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? typeof a.getAttribute === V ? ib.prop(a, c, d) : (f = 1 !== h || !ib.isXMLDoc(a), f && (c = c.toLowerCase(), e = ib.attrHooks[c] || (Gb.test(c) ? Bb : Ab)), d === b ? e && f && "get" in e && null !== (g = e.get(a, c)) ? g : (typeof a.getAttribute !== V && (g = a.getAttribute(c)), null == g ? b : g) : null !== d ? e && f && "set" in e && (g = e.set(a, d, c)) !== b ? g : (a.setAttribute(c, d + ""), d) : (ib.removeAttr(a, c), b)) : void 0 }, removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(kb);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = ib.propFix[c] || c, Gb.test(c) ? !Ib && Hb.test(c) ? a[ib.camelCase("default-" + c)] = a[d] = !1 : a[d] = !1 : ib.attr(a, c, ""), a.removeAttribute(Ib ? c : d) }, attrHooks: { type: { set: function(a, b) {
                    if (!ib.support.radioValue && "radio" === b && ib.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b } } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !ib.isXMLDoc(a), g && (c = ib.propFix[c] || c, f = ib.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0 }, propHooks: { tabIndex: { get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : Eb.test(a.nodeName) || Fb.test(a.nodeName) && a.href ? 0 : b } } } }), Bb = {
        get: function(a, c) {
            var d = ib.prop(a, c),
                e = "boolean" == typeof d && a.getAttribute(c),
                f = "boolean" == typeof d ? Jb && Ib ? null != e : Hb.test(c) ? a[ib.camelCase("default-" + c)] : !!e : a.getAttributeNode(c);
            return f && f.value !== !1 ? c.toLowerCase() : b },
        set: function(a, b, c) {
            return b === !1 ? ib.removeAttr(a, c) : Jb && Ib || !Hb.test(c) ? a.setAttribute(!Ib && ib.propFix[c] || c, c) : a[ib.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, Jb && Ib || (ib.attrHooks.value = { get: function(a, c) {
            var d = a.getAttributeNode(c);
            return ib.nodeName(a, "input") ? a.defaultValue : d && d.specified ? d.value : b }, set: function(a, c, d) {
            return ib.nodeName(a, "input") ? (a.defaultValue = c, b) : Ab && Ab.set(a, c, d) } }), Ib || (Ab = ib.valHooks.button = { get: function(a, c) {
            var d = a.getAttributeNode(c);
            return d && ("id" === c || "name" === c || "coords" === c ? "" !== d.value : d.specified) ? d.value : b }, set: function(a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", "value" === d || c === a.getAttribute(d) ? c : b } }, ib.attrHooks.contenteditable = { get: Ab.get, set: function(a, b, c) { Ab.set(a, "" === b ? !1 : b, c) } }, ib.each(["width", "height"], function(a, c) { ib.attrHooks[c] = ib.extend(ib.attrHooks[c], { set: function(a, d) {
                return "" === d ? (a.setAttribute(c, "auto"), d) : b } }) })), ib.support.hrefNormalized || (ib.each(["href", "src", "width", "height"], function(a, c) { ib.attrHooks[c] = ib.extend(ib.attrHooks[c], { get: function(a) {
                var d = a.getAttribute(c, 2);
                return null == d ? b : d } }) }), ib.each(["href", "src"], function(a, b) { ib.propHooks[b] = { get: function(a) {
                return a.getAttribute(b, 4) } } })), ib.support.style || (ib.attrHooks.style = { get: function(a) {
            return a.style.cssText || b }, set: function(a, b) {
            return a.style.cssText = b + "" } }), ib.support.optSelected || (ib.propHooks.selected = ib.extend(ib.propHooks.selected, { get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } })), ib.support.enctype || (ib.propFix.enctype = "encoding"), ib.support.checkOn || ib.each(["radio", "checkbox"], function() { ib.valHooks[this] = { get: function(a) {
                return null === a.getAttribute("value") ? "on" : a.value } } }), ib.each(["radio", "checkbox"], function() { ib.valHooks[this] = ib.extend(ib.valHooks[this], { set: function(a, c) {
                return ib.isArray(c) ? a.checked = ib.inArray(ib(a).val(), c) >= 0 : b } }) });
    var Kb = /^(?:input|select|textarea)$/i,
        Lb = /^key/,
        Mb = /^(?:mouse|contextmenu)|click/,
        Nb = /^(?:focusinfocus|focusoutblur)$/,
        Ob = /^([^.]*)(?:\.(.+)|)$/;
    ib.event = { global: {}, add: function(a, c, d, e, f) {
                var g, h, i, j, k, l, m, n, o, p, q, r = ib._data(a);
                if (r) {
                    for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = ib.guid++), (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function(a) {
                            return typeof ib === V || a && ib.event.triggered === a.type ? b : ib.event.dispatch.apply(l.elem, arguments) }, l.elem = a), c = (c || "").match(kb) || [""], i = c.length; i--;) g = Ob.exec(c[i]) || [], o = q = g[1], p = (g[2] || "").split(".").sort(), k = ib.event.special[o] || {}, o = (f ? k.delegateType : k.bindType) || o, k = ib.event.special[o] || {}, m = ib.extend({ type: o, origType: q, data: e, handler: d, guid: d.guid, selector: f, needsContext: f && ib.expr.match.needsContext.test(f), namespace: p.join(".") }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), ib.event.global[o] = !0;
                    a = null } }, remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ib.hasData(a) && ib._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(kb) || [""], j = b.length; j--;)
                        if (h = Ob.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = ib.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ib.removeEvent(a, n, q.handle), delete k[n]) } else
                            for (n in k) ib.event.remove(a, n + b[j], c, d, !0);
                    ib.isEmptyObject(k) && (delete q.handle, ib._removeData(a, "events")) } }, trigger: function(c, d, e, f) {
                var g, h, i, j, k, l, m, n = [e || W],
                    o = gb.call(c, "type") ? c.type : c,
                    p = gb.call(c, "namespace") ? c.namespace.split(".") : [];
                if (i = l = e = e || W, 3 !== e.nodeType && 8 !== e.nodeType && !Nb.test(o + ib.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), h = 0 > o.indexOf(":") && "on" + o, c = c[ib.expando] ? c : new ib.Event(o, "object" == typeof c && c), c.isTrigger = !0, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : ib.makeArray(d, [c]), k = ib.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                    if (!f && !k.noBubble && !ib.isWindow(e)) {
                        for (j = k.delegateType || o, Nb.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), l = i;
                        l === (e.ownerDocument || W) && n.push(l.defaultView || l.parentWindow || a) }
                    for (m = 0;
                        (i = n[m++]) && !c.isPropagationStopped();) c.type = m > 1 ? j : k.bindType || o, g = (ib._data(i, "events") || {})[c.type] && ib._data(i, "handle"), g && g.apply(i, d), g = h && i[h], g && ib.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                    if (c.type = o, !(f || c.isDefaultPrevented() || k._default && k._default.apply(e.ownerDocument, d) !== !1 || "click" === o && ib.nodeName(e, "a") || !ib.acceptData(e) || !h || !e[o] || ib.isWindow(e))) { l = e[h], l && (e[h] = null), ib.event.triggered = o;
                        try { e[o]() } catch (q) {}
                        ib.event.triggered = b, l && (e[h] = l) }
                    return c.result } }, dispatch: function(a) { a = ib.event.fix(a);
                var c, d, e, f, g, h = [],
                    i = db.call(arguments),
                    j = (ib._data(this, "events") || {})[a.type] || [],
                    k = ib.event.special[a.type] || {};
                if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    for (h = ib.event.handlers.call(this, a, j), c = 0;
                        (f = h[c++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = f.elem, g = 0;
                            (e = f.handlers[g++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, d = ((ib.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function(a, c) {
                var d, e, f, g, h = [],
                    i = c.delegateCount,
                    j = a.target;
                if (i && j.nodeType && (!a.button || "click" !== a.type))
                    for (; j != this; j = j.parentNode || this)
                        if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                            for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? ib(d, this).index(j) >= 0 : ib.find(d, this, null, [j]).length), f[d] && f.push(e);
                            f.length && h.push({ elem: j, handlers: f }) }
                return c.length > i && h.push({ elem: this, handlers: c.slice(i) }), h }, fix: function(a) {
                if (a[ib.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Mb.test(e) ? this.mouseHooks : Lb.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ib.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = f.srcElement || W), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, c) {
                    var d, e, f, g = c.button,
                        h = c.fromElement;
                    return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || W, f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a } }, special: { load: { noBubble: !0 }, click: { trigger: function() {
                        return ib.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : b } }, focus: { trigger: function() {
                        if (this !== W.activeElement && this.focus) try {
                            return this.focus(), !1 } catch (a) {} }, delegateType: "focusin" }, blur: { trigger: function() {
                        return this === W.activeElement && this.blur ? (this.blur(), !1) : b }, delegateType: "focusout" }, beforeunload: { postDispatch: function(a) { a.result !== b && (a.originalEvent.returnValue = a.result) } } }, simulate: function(a, b, c, d) {
                var e = ib.extend(new ib.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
                d ? ib.event.trigger(e, null, b) : ib.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, ib.removeEvent = W.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === V && (a[d] = null), a.detachEvent(d, c)) }, ib.Event = function(a, c) {
            return this instanceof ib.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, c && ib.extend(this, c), this.timeStamp = a && a.timeStamp || ib.now(), this[ib.expando] = !0, b) : new ib.Event(a, c) }, ib.Event.prototype = { isDefaultPrevented: j, isPropagationStopped: j, isImmediatePropagationStopped: j, preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function() { this.isImmediatePropagationStopped = i, this.stopPropagation() } }, ib.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(a, b) { ib.event.special[a] = { delegateType: b, bindType: b, handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !ib.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), ib.support.submitBubbles || (ib.event.special.submit = { setup: function() {
                return ib.nodeName(this, "form") ? !1 : (ib.event.add(this, "click._submit keypress._submit", function(a) {
                    var c = a.target,
                        d = ib.nodeName(c, "input") || ib.nodeName(c, "button") ? c.form : b;
                    d && !ib._data(d, "submitBubbles") && (ib.event.add(d, "submit._submit", function(a) { a._submit_bubble = !0 }), ib._data(d, "submitBubbles", !0)) }), b) }, postDispatch: function(a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ib.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function() {
                return ib.nodeName(this, "form") ? !1 : (ib.event.remove(this, "._submit"), b) } }), ib.support.changeBubbles || (ib.event.special.change = { setup: function() {
                return Kb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ib.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), ib.event.add(this, "click._change", function(a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), ib.event.simulate("change", this, a, !0) })), !1) : (ib.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    Kb.test(b.nodeName) && !ib._data(b, "changeBubbles") && (ib.event.add(b, "change._change", function(a) {!this.parentNode || a.isSimulated || a.isTrigger || ib.event.simulate("change", this.parentNode, a, !0) }), ib._data(b, "changeBubbles", !0)) }), b) }, handle: function(a) {
                var c = a.target;
                return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b }, teardown: function() {
                return ib.event.remove(this, "._change"), !Kb.test(this.nodeName) } }), ib.support.focusinBubbles || ib.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
            var c = 0,
                d = function(a) { ib.event.simulate(b, a.target, ib.event.fix(a), !0) };
            ib.event.special[b] = { setup: function() { 0 === c++ && W.addEventListener(a, d, !0) }, teardown: function() { 0 === --c && W.removeEventListener(a, d, !0) } } }), ib.fn.extend({ on: function(a, c, d, e, f) {
                var g, h;
                if ("object" == typeof a) { "string" != typeof c && (d = d || c, c = b);
                    for (g in a) this.on(g, c, d, a[g], f);
                    return this }
                if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = j;
                else if (!e) return this;
                return 1 === f && (h = e, e = function(a) {
                    return ib().off(a), h.apply(this, arguments) }, e.guid = h.guid || (h.guid = ib.guid++)), this.each(function() { ib.event.add(this, a, e, d, c) }) }, one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1) }, off: function(a, c, d) {
                var e, f;
                if (a && a.preventDefault && a.handleObj) return e = a.handleObj, ib(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
                if ("object" == typeof a) {
                    for (f in a) this.off(f, c, a[f]);
                    return this }
                return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), this.each(function() { ib.event.remove(this, a, d, c) }) }, bind: function(a, b, c) {
                return this.on(a, null, b, c) }, unbind: function(a, b) {
                return this.off(a, null, b) }, delegate: function(a, b, c, d) {
                return this.on(b, a, c, d) }, undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) }, trigger: function(a, b) {
                return this.each(function() { ib.event.trigger(a, b, this) }) }, triggerHandler: function(a, c) {
                var d = this[0];
                return d ? ib.event.trigger(a, c, d, !0) : b } }),
        function(a, b) {
            function c(a) {
                return ob.test(a + "") }

            function d() {
                var a, b = [];
                return a = function(c, d) {
                    return b.push(c += " ") > y.cacheLength && delete a[b.shift()], a[c] = d } }

            function e(a) {
                return a[N] = !0, a }

            function f(a) {
                var b = F.createElement("div");
                try {
                    return a(b) } catch (c) {
                    return !1 } finally { b = null } }

            function g(a, b, c, d) {
                var e, f, g, h, i, j, k, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== F && E(b), b = b || F, c = c || [], !a || "string" != typeof a) return c;
                if (1 !== (h = b.nodeType) && 9 !== h) return [];
                if (!H && !d) {
                    if (e = pb.exec(a))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && L(b, f) && f.id === g) return c.push(f), c } else {
                            if (e[2]) return Z.apply(c, $.call(b.getElementsByTagName(a), 0)), c;
                            if ((g = e[3]) && P.getByClassName && b.getElementsByClassName) return Z.apply(c, $.call(b.getElementsByClassName(g), 0)), c }
                    if (P.qsa && !I.test(a)) {
                        if (k = !0, n = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = l(a), (k = b.getAttribute("id")) ? n = k.replace(sb, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                            o = nb.test(a) && b.parentNode || b, p = j.join(",") }
                        if (p) try {
                            return Z.apply(c, $.call(o.querySelectorAll(p), 0)), c } catch (q) {} finally { k || b.removeAttribute("id") } } }
                return u(a.replace(gb, "$1"), b, c, d) }

            function h(a, b) {
                var c = b && a,
                    d = c && (~b.sourceIndex || W) - (~a.sourceIndex || W);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1 }

            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a } }

            function j(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a } }

            function k(a) {
                return e(function(b) {
                    return b = +b, e(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

            function l(a, b) {
                var c, d, e, f, h, i, j, k = T[a + " "];
                if (k) return b ? 0 : k.slice(0);
                for (h = a, i = [], j = y.preFilter; h;) {
                    (!c || (d = hb.exec(h))) && (d && (h = h.slice(d[0].length) || h), i.push(e = [])), c = !1, (d = jb.exec(h)) && (c = d.shift(), e.push({ value: c, type: d[0].replace(gb, " ") }), h = h.slice(c.length));
                    for (f in y.filter) !(d = mb[f].exec(h)) || j[f] && !(d = j[f](d)) || (c = d.shift(), e.push({ value: c, type: f, matches: d }), h = h.slice(c.length));
                    if (!c) break }
                return b ? h.length : h ? g.error(a) : T(a, i).slice(0) }

            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d }

            function n(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = R++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f) } : function(b, c, g) {
                    var h, i, j, k = Q + " " + f;
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e)
                                if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                                    if ((h = i[1]) === !0 || h === x) return h === !0 } else if (i = j[d] = [k], i[1] = a(b, c, g) || x, i[1] === !0) return !0 } }

            function o(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0 } : a[0] }

            function p(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g }

            function q(a, b, c, d, f, g) {
                return d && !d[N] && (d = q(d)), f && !f[N] && (f = q(f, g)), e(function(e, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        q = e || t(b || "*", h.nodeType ? [h] : h, []),
                        r = !a || !e && b ? q : p(q, m, a, h, i),
                        s = c ? f || (e ? a : o || d) ? [] : g : r;
                    if (c && c(r, s, h, i), d)
                        for (j = p(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                    if (e) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                                f(null, s = [], j, i) }
                            for (k = s.length; k--;)(l = s[k]) && (j = f ? _.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l)) } } else s = p(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : Z.apply(g, s) }) }

            function r(a) {
                for (var b, c, d, e = a.length, f = y.relative[a[0].type], g = f || y.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                        return a === b }, g, !0), j = n(function(a) {
                        return _.call(b, a) > -1 }, g, !0), k = [function(a, c, d) {
                        return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d)) }]; e > h; h++)
                    if (c = y.relative[a[h].type]) k = [n(o(k), c)];
                    else {
                        if (c = y.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !y.relative[a[d].type]; d++);
                            return q(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1)).replace(gb, "$1"), c, d > h && r(a.slice(h, d)), e > d && r(a = a.slice(d)), e > d && m(a)) }
                        k.push(c) }
                return o(k) }

            function s(a, b) {
                var c = 0,
                    d = b.length > 0,
                    f = a.length > 0,
                    h = function(e, h, i, j, k) {
                        var l, m, n, o = [],
                            q = 0,
                            r = "0",
                            s = e && [],
                            t = null != k,
                            u = D,
                            v = e || f && y.find.TAG("*", k && h.parentNode || h),
                            w = Q += null == u ? 1 : Math.random() || .1;
                        for (t && (D = h !== F && h, x = c); null != (l = v[r]); r++) {
                            if (f && l) {
                                for (m = 0; n = a[m++];)
                                    if (n(l, h, i)) { j.push(l);
                                        break }
                                t && (Q = w, x = ++c) }
                            d && ((l = !n && l) && q--, e && s.push(l)) }
                        if (q += r, d && r !== q) {
                            for (m = 0; n = b[m++];) n(s, o, h, i);
                            if (e) {
                                if (q > 0)
                                    for (; r--;) s[r] || o[r] || (o[r] = Y.call(j));
                                o = p(o) }
                            Z.apply(j, o), t && !e && o.length > 0 && q + b.length > 1 && g.uniqueSort(j) }
                        return t && (Q = w, D = u), s };
                return d ? e(h) : h }

            function t(a, b, c) {
                for (var d = 0, e = b.length; e > d; d++) g(a, b[d], c);
                return c }

            function u(a, b, c, d) {
                var e, f, g, h, i, j = l(a);
                if (!d && 1 === j.length) {
                    if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && !H && y.relative[f[1].type]) {
                        if (b = y.find.ID(g.matches[0].replace(ub, vb), b)[0], !b) return c;
                        a = a.slice(f.shift().value.length) }
                    for (e = mb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !y.relative[h = g.type]);)
                        if ((i = y.find[h]) && (d = i(g.matches[0].replace(ub, vb), nb.test(f[0].type) && b.parentNode || b))) {
                            if (f.splice(e, 1), a = d.length && m(f), !a) return Z.apply(c, $.call(d, 0)), c;
                            break } }
                return B(a, j)(d, b, H, c, nb.test(a)), c }

            function v() {}
            var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
                O = a.document,
                P = {},
                Q = 0,
                R = 0,
                S = d(),
                T = d(),
                U = d(),
                V = typeof b,
                W = 1 << 31,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.slice,
                _ = X.indexOf || function(a) {
                    for (var b = 0, c = this.length; c > b; b++)
                        if (this[b] === a) return b;
                    return -1 },
                ab = "[\\x20\\t\\r\\n\\f]",
                bb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                cb = bb.replace("w", "w#"),
                db = "([*^$|!~]?=)",
                eb = "\\[" + ab + "*(" + bb + ")" + ab + "*(?:" + db + ab + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + cb + ")|)|)" + ab + "*\\]",
                fb = ":(" + bb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + eb.replace(3, 8) + ")*)|.*)\\)|)",
                gb = RegExp("^" + ab + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ab + "+$", "g"),
                hb = RegExp("^" + ab + "*," + ab + "*"),
                jb = RegExp("^" + ab + "*([\\x20\\t\\r\\n\\f>+~])" + ab + "*"),
                kb = RegExp(fb),
                lb = RegExp("^" + cb + "$"),
                mb = { ID: RegExp("^#(" + bb + ")"), CLASS: RegExp("^\\.(" + bb + ")"), NAME: RegExp("^\\[name=['\"]?(" + bb + ")['\"]?\\]"), TAG: RegExp("^(" + bb.replace("w", "w*") + ")"), ATTR: RegExp("^" + eb), PSEUDO: RegExp("^" + fb), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ab + "*(even|odd|(([+-]|)(\\d*)n|)" + ab + "*(?:([+-]|)" + ab + "*(\\d+)|))" + ab + "*\\)|)", "i"), needsContext: RegExp("^" + ab + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ab + "*((?:-\\d)?\\d*)" + ab + "*\\)|)(?=[^-]|$)", "i") },
                nb = /[\x20\t\r\n\f]*[+~]/,
                ob = /^[^{]+\{\s*\[native code/,
                pb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                qb = /^(?:input|select|textarea|button)$/i,
                rb = /^h\d$/i,
                sb = /'|\\/g,
                tb = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                ub = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                vb = function(a, b) {
                    var c = "0x" + b - 65536;
                    return c !== c ? b : 0 > c ? String.fromCharCode(c + 65536) : String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c) };
            try { $.call(O.documentElement.childNodes, 0)[0].nodeType } catch (wb) { $ = function(a) {
                    for (var b, c = []; b = this[a++];) c.push(b);
                    return c } }
            A = g.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1 }, E = g.setDocument = function(a) {
                var d = a ? a.ownerDocument || a : O;
                return d !== F && 9 === d.nodeType && d.documentElement ? (F = d, G = d.documentElement, H = A(d), P.tagNameNoComments = f(function(a) {
                    return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length }), P.attributes = f(function(a) { a.innerHTML = "<select></select>";
                    var b = typeof a.lastChild.getAttribute("multiple");
                    return "boolean" !== b && "string" !== b }), P.getByClassName = f(function(a) {
                    return a.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", a.getElementsByClassName && a.getElementsByClassName("e").length ? (a.lastChild.className = "e", 2 === a.getElementsByClassName("e").length) : !1 }), P.getByName = f(function(a) { a.id = N + 0, a.innerHTML = "<a name='" + N + "'></a><div name='" + N + "'></div>", G.insertBefore(a, G.firstChild);
                    var b = d.getElementsByName && d.getElementsByName(N).length === 2 + d.getElementsByName(N + 0).length;
                    return P.getIdNotName = !d.getElementById(N), G.removeChild(a), b }), y.attrHandle = f(function(a) {
                    return a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute !== V && "#" === a.firstChild.getAttribute("href") }) ? {} : { href: function(a) {
                        return a.getAttribute("href", 2) }, type: function(a) {
                        return a.getAttribute("type") } }, P.getIdNotName ? (y.find.ID = function(a, b) {
                    if (typeof b.getElementById !== V && !H) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : [] } }, y.filter.ID = function(a) {
                    var b = a.replace(ub, vb);
                    return function(a) {
                        return a.getAttribute("id") === b } }) : (y.find.ID = function(a, c) {
                    if (typeof c.getElementById !== V && !H) {
                        var d = c.getElementById(a);
                        return d ? d.id === a || typeof d.getAttributeNode !== V && d.getAttributeNode("id").value === a ? [d] : b : [] } }, y.filter.ID = function(a) {
                    var b = a.replace(ub, vb);
                    return function(a) {
                        var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
                        return c && c.value === b } }), y.find.TAG = P.tagNameNoComments ? function(a, c) {
                    return typeof c.getElementsByTagName !== V ? c.getElementsByTagName(a) : b } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d }
                    return f }, y.find.NAME = P.getByName && function(a, c) {
                    return typeof c.getElementsByName !== V ? c.getElementsByName(name) : b }, y.find.CLASS = P.getByClassName && function(a, c) {
                    return typeof c.getElementsByClassName === V || H ? b : c.getElementsByClassName(a) }, J = [], I = [":focus"], (P.qsa = c(d.querySelectorAll)) && (f(function(a) { a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || I.push("\\[" + ab + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), a.querySelectorAll(":checked").length || I.push(":checked") }), f(function(a) { a.innerHTML = "<input type='hidden' i=''/>", a.querySelectorAll("[i^='']").length && I.push("[*^$]=" + ab + "*(?:\"\"|'')"), a.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), I.push(",.*:") })), (P.matchesSelector = c(K = G.matchesSelector || G.mozMatchesSelector || G.webkitMatchesSelector || G.oMatchesSelector || G.msMatchesSelector)) && f(function(a) { P.disconnectedMatch = K.call(a, "div"), K.call(a, "[s!='']:x"), J.push("!=", fb) }), I = RegExp(I.join("|")), J = RegExp(J.join("|")), L = c(G.contains) || G.compareDocumentPosition ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1 }, M = G.compareDocumentPosition ? function(a, b) {
                    var c;
                    return a === b ? (C = !0, 0) : (c = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b)) ? 1 & c || a.parentNode && 11 === a.parentNode.nodeType ? a === d || L(O, a) ? -1 : b === d || L(O, b) ? 1 : 0 : 4 & c ? -1 : 1 : a.compareDocumentPosition ? -1 : 1 } : function(a, b) {
                    var c, e = 0,
                        f = a.parentNode,
                        g = b.parentNode,
                        i = [a],
                        j = [b];
                    if (a === b) return C = !0, 0;
                    if (!f || !g) return a === d ? -1 : b === d ? 1 : f ? -1 : g ? 1 : 0;
                    if (f === g) return h(a, b);
                    for (c = a; c = c.parentNode;) i.unshift(c);
                    for (c = b; c = c.parentNode;) j.unshift(c);
                    for (; i[e] === j[e];) e++;
                    return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0 }, C = !1, [0, 0].sort(M), P.detectDuplicates = C, F) : F }, g.matches = function(a, b) {
                return g(a, null, null, b) }, g.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== F && E(a), b = b.replace(tb, "='$1']"), !(!P.matchesSelector || H || J && J.test(b) || I.test(b))) try {
                    var c = K.call(a, b);
                    if (c || P.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c } catch (d) {}
                return g(b, F, null, [a]).length > 0 }, g.contains = function(a, b) {
                return (a.ownerDocument || a) !== F && E(a), L(a, b) }, g.attr = function(a, b) {
                var c;
                return (a.ownerDocument || a) !== F && E(a), H || (b = b.toLowerCase()), (c = y.attrHandle[b]) ? c(a) : H || P.attributes ? a.getAttribute(b) : ((c = a.getAttributeNode(b)) || a.getAttribute(b)) && a[b] === !0 ? b : c && c.specified ? c.value : null }, g.error = function(a) {
                throw Error("Syntax error, unrecognized expression: " + a) }, g.uniqueSort = function(a) {
                var b, c = [],
                    d = 1,
                    e = 0;
                if (C = !P.detectDuplicates, a.sort(M), C) {
                    for (; b = a[d]; d++) b === a[d - 1] && (e = c.push(d));
                    for (; e--;) a.splice(c[e], 1) }
                return a }, z = g.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += z(a) } else if (3 === e || 4 === e) return a.nodeValue } else
                    for (; b = a[d]; d++) c += z(b);
                return c }, y = g.selectors = { cacheLength: 50, createPseudo: e, match: mb, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) {
                        return a[1] = a[1].replace(ub, vb), a[3] = (a[4] || a[5] || "").replace(ub, vb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || g.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && g.error(a[0]), a }, PSEUDO: function(a) {
                        var b, c = !a[5] && a[2];
                        return mb.CHILD.test(a[0]) ? null : (a[4] ? a[2] = a[4] : c && kb.test(c) && (b = l(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) {
                        return "*" === a ? function() {
                            return !0 } : (a = a.replace(ub, vb).toLowerCase(), function(b) {
                            return b.nodeName && b.nodeName.toLowerCase() === a }) }, CLASS: function(a) {
                        var b = S[a + " "];
                        return b || (b = RegExp("(^|" + ab + ")" + a + "(" + ab + "|$)")) && S(a, function(a) {
                            return b.test(a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "") }) }, ATTR: function(a, b, c) {
                        return function(d) {
                            var e = g.attr(d, a);
                            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling" }
                                    return !0 }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === Q && j[1], m = j[0] === Q && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) { k[a] = [Q, n, m];
                                            break } } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === Q) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [Q, m]), l !== b)););
                                return m -= e, m === d || 0 === m % d && m / d >= 0 } } }, PSEUDO: function(a, b) {
                        var c, d = y.pseudos[a] || y.setFilters[a.toLowerCase()] || g.error("unsupported pseudo: " + a);
                        return d[N] ? d(b) : d.length > 1 ? (c = [a, a, "", b], y.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                            for (var e, f = d(a, b), g = f.length; g--;) e = _.call(a, f[g]), a[e] = !(c[e] = f[g]) }) : function(a) {
                            return d(a, 0, c) }) : d } }, pseudos: { not: e(function(a) {
                        var b = [],
                            c = [],
                            d = B(a.replace(gb, "$1"));
                        return d[N] ? e(function(a, b, c, e) {
                            for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), !c.pop() } }), has: e(function(a) {
                        return function(b) {
                            return g(a, b).length > 0 } }), contains: e(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || z(b)).indexOf(a) > -1 } }), lang: e(function(a) {
                        return lb.test(a || "") || g.error("unsupported lang: " + a), a = a.replace(ub, vb).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = H ? b.getAttribute("xml:lang") || b.getAttribute("lang") : b.lang) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1 } }), target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id }, root: function(a) {
                        return a === G }, focus: function(a) {
                        return a === F.activeElement && (!F.hasFocus || F.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function(a) {
                        return a.disabled === !1 }, disabled: function(a) {
                        return a.disabled === !0 }, checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                        return !0 }, parent: function(a) {
                        return !y.pseudos.empty(a) }, header: function(a) {
                        return rb.test(a.nodeName) }, input: function(a) {
                        return qb.test(a.nodeName) }, button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b }, text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type) }, first: k(function() {
                        return [0] }), last: k(function(a, b) {
                        return [b - 1] }), eq: k(function(a, b, c) {
                        return [0 > c ? c + b : c] }), even: k(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a }), odd: k(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a }), lt: k(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a }), gt: k(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; b > ++d;) a.push(d);
                        return a }) } };
            for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) y.pseudos[w] = i(w);
            for (w in { submit: !0, reset: !0 }) y.pseudos[w] = j(w);
            B = g.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = U[a + " "];
                if (!f) {
                    for (b || (b = l(a)), c = b.length; c--;) f = r(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = U(a, s(e, d)) }
                return f }, y.pseudos.nth = y.pseudos.eq, y.filters = v.prototype = y.pseudos, y.setFilters = new v, E(), g.attr = ib.attr, ib.find = g, ib.expr = g.selectors, ib.expr[":"] = ib.expr.pseudos, ib.unique = g.uniqueSort, ib.text = g.getText, ib.isXMLDoc = g.isXML, ib.contains = g.contains }(a);
    var Pb = /Until$/,
        Qb = /^(?:parents|prev(?:Until|All))/,
        Rb = /^.[^:#\[\.,]*$/,
        Sb = ib.expr.match.needsContext,
        Tb = { children: !0, contents: !0, next: !0, prev: !0 };
    ib.fn.extend({ find: function(a) {
            var b, c, d, e = this.length;
            if ("string" != typeof a) return d = this, this.pushStack(ib(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (ib.contains(d[b], this)) return !0 }));
            for (c = [], b = 0; e > b; b++) ib.find(a, this[b], c);
            return c = this.pushStack(e > 1 ? ib.unique(c) : c), c.selector = (this.selector ? this.selector + " " : "") + a, c }, has: function(a) {
            var b, c = ib(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (ib.contains(this, c[b])) return !0 }) }, not: function(a) {
            return this.pushStack(l(this, a, !1)) }, filter: function(a) {
            return this.pushStack(l(this, a, !0)) }, is: function(a) {
            return !!a && ("string" == typeof a ? Sb.test(a) ? ib(a, this.context).index(this[0]) >= 0 : ib.filter(a, this).length > 0 : this.filter(a).length > 0) }, closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Sb.test(a) || "string" != typeof a ? ib(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c.ownerDocument && c !== b && 11 !== c.nodeType;) {
                    if (g ? g.index(c) > -1 : ib.find.matchesSelector(c, a)) { f.push(c);
                        break }
                    c = c.parentNode }
            return this.pushStack(f.length > 1 ? ib.unique(f) : f) }, index: function(a) {
            return a ? "string" == typeof a ? ib.inArray(this[0], ib(a)) : ib.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) {
            var c = "string" == typeof a ? ib(a, b) : ib.makeArray(a && a.nodeType ? [a] : a),
                d = ib.merge(this.get(), c);
            return this.pushStack(ib.unique(d)) }, addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } }), ib.fn.andSelf = ib.fn.addBack, ib.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null },
        parents: function(a) {
            return ib.dir(a, "parentNode") },
        parentsUntil: function(a, b, c) {
            return ib.dir(a, "parentNode", c) },
        next: function(a) {
            return k(a, "nextSibling") },
        prev: function(a) {
            return k(a, "previousSibling") },
        nextAll: function(a) {
            return ib.dir(a, "nextSibling") },
        prevAll: function(a) {
            return ib.dir(a, "previousSibling") },
        nextUntil: function(a, b, c) {
            return ib.dir(a, "nextSibling", c) },
        prevUntil: function(a, b, c) {
            return ib.dir(a, "previousSibling", c) },
        siblings: function(a) {
            return ib.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return ib.sibling(a.firstChild) },
        contents: function(a) {
            return ib.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ib.merge([], a.childNodes) }
    }, function(a, b) { ib.fn[a] = function(c, d) {
            var e = ib.map(this, b, c);
            return Pb.test(a) || (d = c), d && "string" == typeof d && (e = ib.filter(d, e)), e = this.length > 1 && !Tb[a] ? ib.unique(e) : e, this.length > 1 && Qb.test(a) && (e = e.reverse()), this.pushStack(e) } }), ib.extend({ filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"), 1 === b.length ? ib.find.matchesSelector(b[0], a) ? [b[0]] : [] : ib.find.matches(a, b) }, dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !ib(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
            return e }, sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c } });
    var Ub = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Vb = / jQuery\d+="(?:null|\d+)"/g,
        Wb = RegExp("<(?:" + Ub + ")[\\s/>]", "i"),
        Xb = /^\s+/,
        Yb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Zb = /<([\w:]+)/,
        $b = /<tbody/i,
        _b = /<|&#?\w+;/,
        ac = /<(?:script|style|link)/i,
        bc = /^(?:checkbox|radio)$/i,
        cc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dc = /^$|\/(?:java|ecma)script/i,
        ec = /^true\/(.*)/,
        fc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        gc = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ib.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        hc = m(W),
        ic = hc.appendChild(W.createElement("div"));
    gc.optgroup = gc.option, gc.tbody = gc.tfoot = gc.colgroup = gc.caption = gc.thead, gc.th = gc.td, ib.fn.extend({ text: function(a) {
            return ib.access(this, function(a) {
                return a === b ? ib.text(this) : this.empty().append((this[0] && this[0].ownerDocument || W).createTextNode(a)) }, null, a, arguments.length) }, wrapAll: function(a) {
            if (ib.isFunction(a)) return this.each(function(b) { ib(this).wrapAll(a.call(this, b)) });
            if (this[0]) {
                var b = ib(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a }).append(this) }
            return this }, wrapInner: function(a) {
            return this.each(ib.isFunction(a) ? function(b) { ib(this).wrapInner(a.call(this, b)) } : function() {
                var b = ib(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) {
            var b = ib.isFunction(a);
            return this.each(function(c) { ib(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function() {
            return this.parent().each(function() { ib.nodeName(this, "body") || ib(this).replaceWith(this.childNodes) }).end() }, append: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(a) }) }, prepend: function() {
            return this.domManip(arguments, !0, function(a) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(a, this.firstChild) }) }, before: function() {
            return this.domManip(arguments, !1, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() {
            return this.domManip(arguments, !1, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, remove: function(a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)(!a || ib.filter(a, [c]).length > 0) && (b || 1 !== c.nodeType || ib.cleanData(t(c)), c.parentNode && (b && ib.contains(c.ownerDocument, c) && q(t(c, "script")), c.parentNode.removeChild(c)));
            return this }, empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ib.cleanData(t(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && ib.nodeName(a, "select") && (a.options.length = 0) }
            return this }, clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return ib.clone(this, a, b) }) }, html: function(a) {
            return ib.access(this, function(a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Vb, "") : b;
                if (!("string" != typeof a || ac.test(a) || !ib.support.htmlSerialize && Wb.test(a) || !ib.support.leadingWhitespace && Xb.test(a) || gc[(Zb.exec(a) || ["", ""])[1].toLowerCase()])) { a = a.replace(Yb, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (ib.cleanData(t(c, !1)), c.innerHTML = a);
                        c = 0 } catch (f) {} }
                c && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function(a) {
            var b = ib.isFunction(a);
            return b || "string" == typeof a || (a = ib(a).not(this).detach()), this.domManip([a], !0, function(a) {
                var b = this.nextSibling,
                    c = this.parentNode;
                c && (ib(this).remove(), c.insertBefore(a, b)) }) }, detach: function(a) {
            return this.remove(a, !0) }, domManip: function(a, c, d) { a = bb.apply([], a);
            var e, f, g, h, i, j, k = 0,
                l = this.length,
                m = this,
                q = l - 1,
                r = a[0],
                s = ib.isFunction(r);
            if (s || !(1 >= l || "string" != typeof r || ib.support.checkClone) && cc.test(r)) return this.each(function(e) {
                var f = m.eq(e);
                s && (a[0] = r.call(this, e, c ? f.html() : b)), f.domManip(a, c, d) });
            if (l && (j = ib.buildFragment(a, this[0].ownerDocument, !1, this), e = j.firstChild, 1 === j.childNodes.length && (j = e), e)) {
                for (c = c && ib.nodeName(e, "tr"), h = ib.map(t(j, "script"), o), g = h.length; l > k; k++) f = j, k !== q && (f = ib.clone(f, !0, !0), g && ib.merge(h, t(f, "script"))), d.call(c && ib.nodeName(this[k], "table") ? n(this[k], "tbody") : this[k], f, k);
                if (g)
                    for (i = h[h.length - 1].ownerDocument, ib.map(h, p), k = 0; g > k; k++) f = h[k], dc.test(f.type || "") && !ib._data(f, "globalEval") && ib.contains(i, f) && (f.src ? ib.ajax({ url: f.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : ib.globalEval((f.text || f.textContent || f.innerHTML || "").replace(fc, "")));
                j = e = null }
            return this } }), ib.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { ib.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = ib(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ib(f[d])[b](c), cb.apply(e, c.get());
            return this.pushStack(e) } }), ib.extend({ clone: function(a, b, c) {
            var d, e, f, g, h, i = ib.contains(a.ownerDocument, a);
            if (ib.support.html5Clone || ib.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ic.innerHTML = a.outerHTML, ic.removeChild(f = ic.firstChild)), !(ib.support.noCloneEvent && ib.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ib.isXMLDoc(a)))
                for (d = t(f), h = t(a), g = 0; null != (e = h[g]); ++g) d[g] && s(e, d[g]);
            if (b)
                if (c)
                    for (h = h || t(a), d = d || t(f), g = 0; null != (e = h[g]); g++) r(e, d[g]);
                else r(a, f);
            return d = t(f, "script"), d.length > 0 && q(d, !i && t(a, "script")), d = h = e = null, f }, buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, n = m(b), o = [], p = 0; l > p; p++)
                if (f = a[p], f || 0 === f)
                    if ("object" === ib.type(f)) ib.merge(o, f.nodeType ? [f] : f);
                    else if (_b.test(f)) {
                for (h = h || n.appendChild(b.createElement("div")), i = (Zb.exec(f) || ["", ""])[1].toLowerCase(), k = gc[i] || gc._default, h.innerHTML = k[1] + f.replace(Yb, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!ib.support.leadingWhitespace && Xb.test(f) && o.push(b.createTextNode(Xb.exec(f)[0])), !ib.support.tbody)
                    for (f = "table" !== i || $b.test(f) ? "<table>" !== k[1] || $b.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ib.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (ib.merge(o, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = n.lastChild } else o.push(b.createTextNode(f));
            for (h && n.removeChild(h), ib.support.appendChecked || ib.grep(t(o, "input"), u), p = 0; f = o[p++];)
                if ((!d || -1 === ib.inArray(f, d)) && (g = ib.contains(f.ownerDocument, f), h = t(n.appendChild(f), "script"), g && q(h), c))
                    for (e = 0; f = h[e++];) dc.test(f.type || "") && c.push(f);
            return h = null, n }, cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = ib.expando, i = ib.cache, j = ib.support.deleteExpando, k = ib.event.special; null != (c = a[g]); g++)
                if ((b || ib.acceptData(c)) && (e = c[h], f = e && i[e])) {
                    if (f.events)
                        for (d in f.events) k[d] ? ib.event.remove(c, d) : ib.removeEvent(c, d, f.handle);
                    i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== V ? c.removeAttribute(h) : c[h] = null, _.push(e)) } } });
    var jc, kc, lc, mc = /alpha\([^)]*\)/i,
        nc = /opacity\s*=\s*([^)]*)/,
        oc = /^(top|right|bottom|left)$/,
        pc = /^(none|table(?!-c[ea]).+)/,
        qc = /^margin/,
        rc = RegExp("^(" + jb + ")(.*)$", "i"),
        sc = RegExp("^(" + jb + ")(?!px)[a-z%]+$", "i"),
        tc = RegExp("^([+-])=(" + jb + ")", "i"),
        uc = { BODY: "block" },
        vc = { position: "absolute", visibility: "hidden", display: "block" },
        wc = { letterSpacing: 0, fontWeight: 400 },
        xc = ["Top", "Right", "Bottom", "Left"],
        yc = ["Webkit", "O", "Moz", "ms"];
    ib.fn.extend({ css: function(a, c) {
            return ib.access(this, function(a, c, d) {
                var e, f, g = {},
                    h = 0;
                if (ib.isArray(c)) {
                    for (f = kc(a), e = c.length; e > h; h++) g[c[h]] = ib.css(a, c[h], !1, f);
                    return g }
                return d !== b ? ib.style(a, c, d) : ib.css(a, c) }, a, c, arguments.length > 1) }, show: function() {
            return x(this, !0) }, hide: function() {
            return x(this) }, toggle: function(a) {
            var b = "boolean" == typeof a;
            return this.each(function() {
                (b ? a : w(this)) ? ib(this).show(): ib(this).hide() }) } }), ib.extend({ cssHooks: { opacity: { get: function(a, b) {
                    if (b) {
                        var c = lc(a, "opacity");
                        return "" === c ? "1" : c } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": ib.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = ib.camelCase(c),
                    j = a.style;
                if (c = ib.cssProps[i] || (ib.cssProps[i] = v(j, i)), h = ib.cssHooks[c] || ib.cssHooks[i], d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = tc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(ib.css(a, c)), g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || ib.cssNumber[i] || (d += "px"), ib.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b))) try { j[c] = d } catch (k) {} } }, css: function(a, c, d, e) {
            var f, g, h, i = ib.camelCase(c);
            return c = ib.cssProps[i] || (ib.cssProps[i] = v(a.style, i)), h = ib.cssHooks[c] || ib.cssHooks[i], h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lc(a, c, e)), "normal" === g && c in wc && (g = wc[c]), "" === d || d ? (f = parseFloat(g), d === !0 || ib.isNumeric(f) ? f || 0 : g) : g }, swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e } }), a.getComputedStyle ? (kc = function(b) {
        return a.getComputedStyle(b, null) }, lc = function(a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h.getPropertyValue(c) || h[c] : b,
            j = a.style;
        return h && ("" !== i || ib.contains(a.ownerDocument, a) || (i = ib.style(a, c)), sc.test(i) && qc.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i }) : W.documentElement.currentStyle && (kc = function(a) {
        return a.currentStyle }, lc = function(a, c, d) {
        var e, f, g, h = d || kc(a),
            i = h ? h[c] : b,
            j = a.style;
        return null == i && j && j[c] && (i = j[c]), sc.test(i) && !oc.test(c) && (e = j.left, f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i }), ib.each(["height", "width"], function(a, c) { ib.cssHooks[c] = { get: function(a, d, e) {
                return d ? 0 === a.offsetWidth && pc.test(ib.css(a, "display")) ? ib.swap(a, vc, function() {
                    return A(a, c, e) }) : A(a, c, e) : b }, set: function(a, b, d) {
                var e = d && kc(a);
                return y(a, b, d ? z(a, c, d, ib.support.boxSizing && "border-box" === ib.css(a, "boxSizing", !1, e), e) : 0) } } }), ib.support.opacity || (ib.cssHooks.opacity = { get: function(a, b) {
            return nc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = ib.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === ib.trim(f.replace(mc, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = mc.test(f) ? f.replace(mc, e) : f + " " + e) } }), ib(function() { ib.support.reliableMarginRight || (ib.cssHooks.marginRight = { get: function(a, c) {
                return c ? ib.swap(a, { display: "inline-block" }, lc, [a, "marginRight"]) : b } }), !ib.support.pixelPosition && ib.fn.position && ib.each(["top", "left"], function(a, c) { ib.cssHooks[c] = { get: function(a, d) {
                    return d ? (d = lc(a, c), sc.test(d) ? ib(a).position()[c] + "px" : d) : b } } }) }), ib.expr && ib.expr.filters && (ib.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !ib.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || ib.css(a, "display")) }, ib.expr.filters.visible = function(a) {
        return !ib.expr.filters.hidden(a) }), ib.each({ margin: "", padding: "", border: "Width" }, function(a, b) { ib.cssHooks[a + b] = { expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + xc[d] + b] = f[d] || f[d - 2] || f[0];
                return e } }, qc.test(a) || (ib.cssHooks[a + b].set = y) });
    var zc = /%20/g,
        Ac = /\[\]$/,
        Bc = /\r?\n/g,
        Cc = /^(?:submit|button|image|reset|file)$/i,
        Dc = /^(?:input|select|textarea|keygen)/i;
    ib.fn.extend({ serialize: function() {
            return ib.param(this.serializeArray()) }, serializeArray: function() {
            return this.map(function() {
                var a = ib.prop(this, "elements");
                return a ? ib.makeArray(a) : this }).filter(function() {
                var a = this.type;
                return this.name && !ib(this).is(":disabled") && Dc.test(this.nodeName) && !Cc.test(a) && (this.checked || !bc.test(a)) }).map(function(a, b) {
                var c = ib(this).val();
                return null == c ? null : ib.isArray(c) ? ib.map(c, function(a) {
                    return { name: b.name, value: a.replace(Bc, "\r\n") } }) : { name: b.name, value: c.replace(Bc, "\r\n") } }).get() } }), ib.param = function(a, c) {
        var d, e = [],
            f = function(a, b) { b = ib.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
        if (c === b && (c = ib.ajaxSettings && ib.ajaxSettings.traditional), ib.isArray(a) || a.jquery && !ib.isPlainObject(a)) ib.each(a, function() { f(this.name, this.value) });
        else
            for (d in a) D(d, a[d], c, f);
        return e.join("&").replace(zc, "+") }, ib.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { ib.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), ib.fn.hover = function(a, b) {
        return this.mouseenter(a).mouseleave(b || a) };
    var Ec, Fc, Gc = ib.now(),
        Hc = /\?/,
        Ic = /#.*$/,
        Jc = /([?&])_=[^&]*/,
        Kc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Lc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mc = /^(?:GET|HEAD)$/,
        Nc = /^\/\//,
        Oc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Pc = ib.fn.load,
        Qc = {},
        Rc = {},
        Sc = "*/".concat("*");
    try { Fc = X.href } catch (Tc) { Fc = W.createElement("a"), Fc.href = "", Fc = Fc.href }
    Ec = Oc.exec(Fc.toLowerCase()) || [], ib.fn.load = function(a, c, d) {
        if ("string" != typeof a && Pc) return Pc.apply(this, arguments);
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), ib.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && ib.ajax({ url: a, type: g, dataType: "html", data: c }).done(function(a) { f = arguments, h.html(e ? ib("<div>").append(ib.parseHTML(a)).find(e) : a) }).complete(d && function(a, b) { h.each(d, f || [a.responseText, b, a]) }), this }, ib.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { ib.fn[b] = function(a) {
            return this.on(b, a) } }), ib.each(["get", "post"], function(a, c) { ib[c] = function(a, d, e, f) {
            return ib.isFunction(d) && (f = f || e, e = d, d = b), ib.ajax({ url: a, type: c, dataType: f, data: d, success: e }) } }), ib.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Fc, type: "GET", isLocal: Lc.test(Ec[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Sc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": a.String, "text html": !0, "text json": ib.parseJSON, "text xml": ib.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) {
            return b ? G(G(a, ib.ajaxSettings), b) : G(ib.ajaxSettings, a) }, ajaxPrefilter: E(Qc), ajaxTransport: E(Rc), ajax: function(a, c) {
            function d(a, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, d && (t = H(m, w, d)), a >= 200 && 300 > a || 304 === a ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (ib.lastModified[g] = v), v = w.getResponseHeader("etag"), v && (ib.etag[g] = v)), 204 === a ? (f = !0, x = "nocontent") : 304 === a ? (f = !0, x = "notmodified") : (f = I(m, t), x = f.state, l = f.data, s = f.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [w, m, f ? l : s]), q.fireWith(n, [w, x]), j && (o.trigger("ajaxComplete", [w, m]), --ib.active || ib.event.trigger("ajaxStop"))) } "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = ib.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? ib(n) : ib.event,
                p = ib.Deferred(),
                q = ib.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = { readyState: 0, getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!l)
                                for (l = {}; b = Kc.exec(h);) l[b[1].toLowerCase()] = b[2];
                            b = l[a.toLowerCase()] }
                        return null == b ? null : b }, getAllResponseHeaders: function() {
                        return 2 === u ? h : null }, setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this }, overrideMimeType: function(a) {
                        return u || (m.mimeType = a), this }, statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this }, abort: function(a) {
                        var b = a || v;
                        return k && k.abort(b), d(0, b), this } };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fc) + "").replace(Ic, "").replace(Nc, Ec[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = ib.trim(m.dataType || "*").toLowerCase().match(kb) || [""], null == m.crossDomain && (e = Oc.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Ec[1] && e[2] === Ec[2] && (e[3] || ("http:" === e[1] ? 80 : 443)) == (Ec[3] || ("http:" === Ec[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = ib.param(m.data, m.traditional)), F(Qc, m, c, w), 2 === u) return w;
            j = m.global, j && 0 === ib.active++ && ib.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Mc.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hc.test(g) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = Jc.test(g) ? g.replace(Jc, "$1_=" + Gc++) : g + (Hc.test(g) ? "&" : "?") + "_=" + Gc++)), m.ifModified && (ib.lastModified[g] && w.setRequestHeader("If-Modified-Since", ib.lastModified[g]), ib.etag[g] && w.setRequestHeader("If-None-Match", ib.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sc + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in { success: 1, error: 1, complete: 1 }) w[f](m[f]);
            if (k = F(Rc, m, c, w)) { w.readyState = 1, j && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() { w.abort("timeout") }, m.timeout));
                try { u = 1, k.send(s, d) } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x) } } else d(-1, "No Transport");
            return w }, getScript: function(a, c) {
            return ib.get(a, b, c, "script") }, getJSON: function(a, b, c) {
            return ib.get(a, b, c, "json") } }), ib.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(a) {
                return ib.globalEval(a), a } } }), ib.ajaxPrefilter("script", function(a) { a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), ib.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = W.head || ib("head")[0] || W.documentElement;
            return { send: function(b, e) { c = W.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
                        (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success")) }, d.insertBefore(c, d.firstChild) }, abort: function() { c && c.onload(b, !0) } } } });
    var Uc = [],
        Vc = /(=)\?(?=&|$)|\?\?/;
    ib.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
            var a = Uc.pop() || ib.expando + "_" + Gc++;
            return this[a] = !0, a } }), ib.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Vc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = ib.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(Vc, "$1" + f) : c.jsonp !== !1 && (c.url += (Hc.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || ib.error(f + " was not called"), h[0] }, c.dataTypes[0] = "json", g = a[f], a[f] = function() { h = arguments }, e.always(function() { a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Uc.push(f)), h && ib.isFunction(g) && g(h[0]), h = g = b }), "script") : b });
    var Wc, Xc, Yc = 0,
        Zc = a.ActiveXObject && function() {
            var a;
            for (a in Wc) Wc[a](b, !0) };
    ib.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && J() || K() } : J, Xc = ib.ajaxSettings.xhr(), ib.support.cors = !!Xc && "withCredentials" in Xc, Xc = ib.support.ajax = !!Xc, Xc && ib.ajaxTransport(function(c) {
        if (!c.crossDomain || ib.support.cors) {
            var d;
            return { send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                        for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h]) } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function(a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState))
                                if (d = b, g && (i.onreadystatechange = ib.noop, Zc && delete Wc[g]), e) 4 !== i.readyState && i.abort();
                                else { l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                    try { k = i.statusText } catch (m) { k = "" }
                                    h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404 } } catch (n) { e || f(-1, n) }
                        l && f(h, k, l, j) }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yc, Zc && (Wc || (Wc = {}, ib(a).unload(Zc)), Wc[g] = d), i.onreadystatechange = d) : d() }, abort: function() { d && d(b, !0) } } } });
    var $c, _c, ad = /^(?:toggle|show|hide)$/,
        bd = RegExp("^(?:([+-])=|)(" + jb + ")([a-z%]*)$", "i"),
        cd = /queueHooks$/,
        dd = [P],
        ed = { "*": [function(a, b) {
                var c, d, e = this.createTween(a, b),
                    f = bd.exec(b),
                    g = e.cur(),
                    h = +g || 0,
                    i = 1,
                    j = 20;
                if (f) {
                    if (c = +f[2], d = f[3] || (ib.cssNumber[a] ? "" : "px"), "px" !== d && h) { h = ib.css(e.elem, a, !0) || c || 1;
                        do i = i || ".5", h /= i, ib.style(e.elem, a, h + d); while (i !== (i = e.cur() / g) && 1 !== i && --j) }
                    e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c }
                return e }] };
    ib.Animation = ib.extend(N, { tweener: function(a, b) { ib.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ed[c] = ed[c] || [], ed[c].unshift(b) }, prefilter: function(a, b) { b ? dd.unshift(a) : dd.push(a) } }), ib.Tween = Q, Q.prototype = { constructor: Q, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ib.cssNumber[c] ? "" : "px") }, cur: function() {
            var a = Q.propHooks[this.prop];
            return a && a.get ? a.get(this) : Q.propHooks._default.get(this) }, run: function(a) {
            var b, c = Q.propHooks[this.prop];
            return this.pos = b = this.options.duration ? ib.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Q.propHooks._default.set(this), this } }, Q.prototype.init.prototype = Q.prototype, Q.propHooks = { _default: { get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ib.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function(a) { ib.fx.step[a.prop] ? ib.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ib.cssProps[a.prop]] || ib.cssHooks[a.prop]) ? ib.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, Q.propHooks.scrollTop = Q.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, ib.each(["toggle", "show", "hide"], function(a, b) {
        var c = ib.fn[b];
        ib.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(R(b, !0), a, d, e) } }), ib.fn.extend({ fadeTo: function(a, b, c, d) {
            return this.filter(w).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) {
            var e = ib.isEmptyObject(a),
                f = ib.speed(b, c, d),
                g = function() {
                    var b = N(this, ib.extend({}, a), f);
                    g.finish = function() { b.stop(!0) }, (e || ib._data(this, "finish")) && b.stop(!0) };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d) };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = ib.timers,
                    g = ib._data(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && cd.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && ib.dequeue(this, a) }) }, finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = ib._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = ib.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, ib.queue(this, a, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish }) } }), ib.each({ slideDown: R("show"), slideUp: R("hide"), slideToggle: R("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { ib.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d) } }), ib.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? ib.extend({}, a) : { complete: c || !c && b || ib.isFunction(a) && a, duration: a, easing: c && b || b && !ib.isFunction(b) && b };
        return d.duration = ib.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ib.fx.speeds ? ib.fx.speeds[d.duration] : ib.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() { ib.isFunction(d.old) && d.old.call(this), d.queue && ib.dequeue(this, d.queue) }, d }, ib.easing = { linear: function(a) {
            return a }, swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2 } }, ib.timers = [], ib.fx = Q.prototype.init, ib.fx.tick = function() {
        var a, c = ib.timers,
            d = 0;
        for ($c = ib.now(); c.length > d; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || ib.fx.stop(), $c = b }, ib.fx.timer = function(a) { a() && ib.timers.push(a) && ib.fx.start() }, ib.fx.interval = 13, ib.fx.start = function() { _c || (_c = setInterval(ib.fx.tick, ib.fx.interval)) }, ib.fx.stop = function() { clearInterval(_c), _c = null }, ib.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ib.fx.step = {}, ib.expr && ib.expr.filters && (ib.expr.filters.animated = function(a) {
        return ib.grep(ib.timers, function(b) {
            return a === b.elem }).length }), ib.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) { ib.offset.setOffset(this, a, b) });
        var c, d, e = { top: 0, left: 0 },
            f = this[0],
            g = f && f.ownerDocument;
        return g ? (c = g.documentElement, ib.contains(c, f) ? (typeof f.getBoundingClientRect !== V && (e = f.getBoundingClientRect()), d = S(g), { top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0), left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0) }) : e) : void 0 }, ib.offset = { setOffset: function(a, b, c) {
            var d = ib.css(a, "position"); "static" === d && (a.style.position = "relative");
            var e, f, g = ib(a),
                h = g.offset(),
                i = ib.css(a, "top"),
                j = ib.css(a, "left"),
                k = ("absolute" === d || "fixed" === d) && ib.inArray("auto", [i, j]) > -1,
                l = {},
                m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), ib.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l) } }, ib.fn.extend({ position: function() {
            if (this[0]) {
                var a, b, c = { top: 0, left: 0 },
                    d = this[0];
                return "fixed" === ib.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ib.nodeName(a[0], "html") || (c = a.offset()), c.top += ib.css(a[0], "borderTopWidth", !0), c.left += ib.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - ib.css(d, "marginTop", !0), left: b.left - c.left - ib.css(d, "marginLeft", !0) } } }, offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || W.documentElement; a && !ib.nodeName(a, "html") && "static" === ib.css(a, "position");) a = a.offsetParent;
                return a || W.documentElement }) } }), ib.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, c) {
        var d = /Y/.test(c);
        ib.fn[a] = function(e) {
            return ib.access(this, function(a, e, f) {
                var g = S(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? ib(g).scrollLeft() : f, d ? f : ib(g).scrollTop()) : a[e] = f, b) }, a, e, arguments.length, null) } }), ib.each({ Height: "height", Width: "width" }, function(a, c) { ib.each({ padding: "inner" + a, content: c, "": "outer" + a }, function(d, e) { ib.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return ib.access(this, function(c, d, e) {
                    var f;
                    return ib.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? ib.css(c, d, h) : ib.style(c, d, e, h) }, c, g ? e : b, g, null) } }) }), a.jQuery = a.$ = ib, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return ib })
}(window), ! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery) }(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h) } }

    function c() { f = null }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = { version: "3.1.12", setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this)) }, teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height") }, getLineHeight: function(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16 }, getPageHeight: function(b) {
            return a(b).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };
    a.fn.extend({ mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) {
            return this.unbind("mousewheel", a) } }) }),
function() {
    "use strict";
    var a = this,
        b = a.Chart,
        c = function(a) { this.canvas = a.canvas, this.ctx = a;
            this.width = a.canvas.width, this.height = a.canvas.height;
            return this.aspectRatio = this.width / this.height, d.retinaScale(this), this };
    c.defaults = { global: { animation: !0, animationSteps: 60, animationEasing: "easeOutQuart", showScale: !0, scaleOverride: !1, scaleSteps: null, scaleStepWidth: null, scaleStartValue: null, scaleLineColor: "rgba(0,0,0,.1)", scaleLineWidth: 1, scaleShowLabels: !0, scaleLabel: "<%=value%>", scaleIntegersOnly: !0, scaleBeginAtZero: !1, scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", scaleFontSize: 12, scaleFontStyle: "normal", scaleFontColor: "#666", responsive: !1, maintainAspectRatio: !0, showTooltips: !0, tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"], tooltipFillColor: "rgba(0,0,0,0.8)", tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipFontSize: 14, tooltipFontStyle: "normal", tooltipFontColor: "#fff", tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipTitleFontSize: 14, tooltipTitleFontStyle: "bold", tooltipTitleFontColor: "#fff", tooltipYPadding: 6, tooltipXPadding: 6, tooltipCaretSize: 8, tooltipCornerRadius: 6, tooltipXOffset: 10, tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>", multiTooltipTemplate: "<%= value %>", multiTooltipKeyBackground: "#fff", onAnimationProgress: function() {}, onAnimationComplete: function() {} } }, c.types = {};
    var d = c.helpers = {},
        e = d.each = function(a, b, c) {
            var d = Array.prototype.slice.call(arguments, 3);
            if (a)
                if (a.length === +a.length) {
                    var e;
                    for (e = 0; e < a.length; e++) b.apply(c, [a[e], e].concat(d)) } else
                    for (var f in a) b.apply(c, [a[f], f].concat(d)) },
        f = d.clone = function(a) {
            var b = {};
            return e(a, function(c, d) { a.hasOwnProperty(d) && (b[d] = c) }), b },
        g = d.extend = function(a) {
            return e(Array.prototype.slice.call(arguments, 1), function(b) { e(b, function(c, d) { b.hasOwnProperty(d) && (a[d] = c) }) }), a },
        h = d.merge = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return a.unshift({}), g.apply(null, a) },
        i = d.indexOf = function(a, b) {
            if (Array.prototype.indexOf) return a.indexOf(b);
            for (var c = 0; c < a.length; c++)
                if (a[c] === b) return c;
            return -1 },
        j = (d.where = function(a, b) {
            var c = [];
            return d.each(a, function(a) { b(a) && c.push(a) }), c }, d.findNextWhere = function(a, b, c) { c || (c = -1);
            for (var d = c + 1; d < a.length; d++) {
                var e = a[d];
                if (b(e)) return e } }, d.findPreviousWhere = function(a, b, c) { c || (c = a.length);
            for (var d = c - 1; d >= 0; d--) {
                var e = a[d];
                if (b(e)) return e } }, d.inherits = function(a) {
            var b = this,
                c = a && a.hasOwnProperty("constructor") ? a.constructor : function() {
                    return b.apply(this, arguments) },
                d = function() { this.constructor = c };
            return d.prototype = b.prototype, c.prototype = new d, c.extend = j, a && g(c.prototype, a), c.__super__ = b.prototype, c }),
        k = d.noop = function() {},
        l = d.uid = function() {
            var a = 0;
            return function() {
                return "chart-" + a++ } }(),
        m = d.warn = function(a) { window.console && "function" == typeof window.console.warn && console.warn(a) },
        n = d.amd = "function" == typeof define && define.amd,
        o = d.isNumber = function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a) },
        p = d.max = function(a) {
            return Math.max.apply(Math, a) },
        q = d.min = function(a) {
            return Math.min.apply(Math, a) },
        r = (d.cap = function(a, b, c) {
            if (o(b)) {
                if (a > b) return b } else if (o(c) && c > a) return c;
            return a }, d.getDecimalPlaces = function(a) {
            return a % 1 !== 0 && o(a) ? a.toString().split(".")[1].length : 0 }),
        s = d.radians = function(a) {
            return a * (Math.PI / 180) },
        t = (d.getAngleFromPoint = function(a, b) {
            var c = b.x - a.x,
                d = b.y - a.y,
                e = Math.sqrt(c * c + d * d),
                f = 2 * Math.PI + Math.atan2(d, c);
            return 0 > c && 0 > d && (f += 2 * Math.PI), { angle: f, distance: e } }, d.aliasPixel = function(a) {
            return a % 2 === 0 ? 0 : .5 }),
        u = (d.splineCurve = function(a, b, c, d) {
            var e = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)),
                f = Math.sqrt(Math.pow(c.x - b.x, 2) + Math.pow(c.y - b.y, 2)),
                g = d * e / (e + f),
                h = d * f / (e + f);
            return { inner: { x: b.x - g * (c.x - a.x), y: b.y - g * (c.y - a.y) }, outer: { x: b.x + h * (c.x - a.x), y: b.y + h * (c.y - a.y) } } }, d.calculateOrderOfMagnitude = function(a) {
            return Math.floor(Math.log(a) / Math.LN10) }),
        v = (d.calculateScaleRange = function(a, b, c, d, e) {
            var f = 2,
                g = Math.floor(b / (1.5 * c)),
                h = f >= g,
                i = p(a),
                j = q(a);
            i === j && (i += .5, j >= .5 && !d ? j -= .5 : i += .5);
            for (var k = Math.abs(i - j), l = u(k), m = Math.ceil(i / (1 * Math.pow(10, l))) * Math.pow(10, l), n = d ? 0 : Math.floor(j / (1 * Math.pow(10, l))) * Math.pow(10, l), o = m - n, r = Math.pow(10, l), s = Math.round(o / r);
                (s > g || g > 2 * s) && !h;)
                if (s > g) r *= 2, s = Math.round(o / r), s % 1 !== 0 && (h = !0);
                else if (e && l >= 0) {
                if (r / 2 % 1 !== 0) break;
                r /= 2, s = Math.round(o / r) } else r /= 2, s = Math.round(o / r);
            return h && (s = f, r = o / s), { steps: s, stepValue: r, min: n, max: n + s * r } }, d.template = function(a, b) {
            function c(a, b) {
                var c = /\W/.test(a) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join(" ").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split(" ").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : d[a] = d[a];
                return b ? c(b) : c }
            if (a instanceof Function) return a(b);
            var d = {};
            return c(a, b) }),
        w = (d.generateLabels = function(a, b, c, d) {
            var f = new Array(b);
            return labelTemplateString && e(f, function(b, e) { f[e] = v(a, { value: c + d * (e + 1) }) }), f }, d.easingEffects = { linear: function(a) {
                return a }, easeInQuad: function(a) {
                return a * a }, easeOutQuad: function(a) {
                return -1 * a * (a - 2) }, easeInOutQuad: function(a) {
                return (a /= .5) < 1 ? .5 * a * a : -0.5 * (--a * (a - 2) - 1) }, easeInCubic: function(a) {
                return a * a * a }, easeOutCubic: function(a) {
                return 1 * ((a = a / 1 - 1) * a * a + 1) }, easeInOutCubic: function(a) {
                return (a /= .5) < 1 ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2) }, easeInQuart: function(a) {
                return a * a * a * a }, easeOutQuart: function(a) {
                return -1 * ((a = a / 1 - 1) * a * a * a - 1) }, easeInOutQuart: function(a) {
                return (a /= .5) < 1 ? .5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2) }, easeInQuint: function(a) {
                return 1 * (a /= 1) * a * a * a * a }, easeOutQuint: function(a) {
                return 1 * ((a = a / 1 - 1) * a * a * a * a + 1) }, easeInOutQuint: function(a) {
                return (a /= .5) < 1 ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2) }, easeInSine: function(a) {
                return -1 * Math.cos(a / 1 * (Math.PI / 2)) + 1 }, easeOutSine: function(a) {
                return 1 * Math.sin(a / 1 * (Math.PI / 2)) }, easeInOutSine: function(a) {
                return -0.5 * (Math.cos(Math.PI * a / 1) - 1) }, easeInExpo: function(a) {
                return 0 === a ? 1 : 1 * Math.pow(2, 10 * (a / 1 - 1)) }, easeOutExpo: function(a) {
                return 1 === a ? 1 : 1 * (-Math.pow(2, -10 * a / 1) + 1) }, easeInOutExpo: function(a) {
                return 0 === a ? 0 : 1 === a ? 1 : (a /= .5) < 1 ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (-Math.pow(2, -10 * --a) + 2) }, easeInCirc: function(a) {
                return a >= 1 ? a : -1 * (Math.sqrt(1 - (a /= 1) * a) - 1) }, easeOutCirc: function(a) {
                return 1 * Math.sqrt(1 - (a = a / 1 - 1) * a) }, easeInOutCirc: function(a) {
                return (a /= .5) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1) }, easeInElastic: function(a) {
                var b = 1.70158,
                    c = 0,
                    d = 1;
                return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), -(d * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c))) }, easeOutElastic: function(a) {
                var b = 1.70158,
                    c = 0,
                    d = 1;
                return 0 === a ? 0 : 1 == (a /= 1) ? 1 : (c || (c = .3), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), d * Math.pow(2, -10 * a) * Math.sin(2 * (1 * a - b) * Math.PI / c) + 1) }, easeInOutElastic: function(a) {
                var b = 1.70158,
                    c = 0,
                    d = 1;
                return 0 === a ? 0 : 2 == (a /= .5) ? 1 : (c || (c = .3 * 1.5), d < Math.abs(1) ? (d = 1, b = c / 4) : b = c / (2 * Math.PI) * Math.asin(1 / d), 1 > a ? -.5 * d * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c) : d * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (1 * a - b) * Math.PI / c) * .5 + 1) }, easeInBack: function(a) {
                var b = 1.70158;
                return 1 * (a /= 1) * a * ((b + 1) * a - b) }, easeOutBack: function(a) {
                var b = 1.70158;
                return 1 * ((a = a / 1 - 1) * a * ((b + 1) * a + b) + 1) }, easeInOutBack: function(a) {
                var b = 1.70158;
                return (a /= .5) < 1 ? .5 * a * a * (((b *= 1.525) + 1) * a - b) : .5 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2) }, easeInBounce: function(a) {
                return 1 - w.easeOutBounce(1 - a) }, easeOutBounce: function(a) {
                return (a /= 1) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 1 * (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) }, easeInOutBounce: function(a) {
                return .5 > a ? .5 * w.easeInBounce(2 * a) : .5 * w.easeOutBounce(2 * a - 1) + .5 } }),
        x = d.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                return window.setTimeout(a, 1e3 / 60) } }(),
        y = (d.cancelAnimFrame = function() {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(a) {
                return window.clearTimeout(a, 1e3 / 60) } }(), d.animationLoop = function(a, b, c, d, e, f) {
            var g = 0,
                h = w[c] || w.linear,
                i = function() { g++;
                    var c = g / b,
                        j = h(c);
                    a.call(f, j, c, g), d.call(f, j, c), b > g ? f.animationFrame = x(i) : e.apply(f) };
            x(i) }, d.getRelativePosition = function(a) {
            var b, c, d = a.originalEvent || a,
                e = a.currentTarget || a.srcElement,
                f = e.getBoundingClientRect();
            return d.touches ? (b = d.touches[0].clientX - f.left, c = d.touches[0].clientY - f.top) : (b = d.clientX - f.left, c = d.clientY - f.top), { x: b, y: c } }, d.addEvent = function(a, b, c) { a.addEventListener ? a.addEventListener(b, c) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c }),
        z = d.removeEvent = function(a, b, c) { a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent ? a.detachEvent("on" + b, c) : a["on" + b] = k },
        A = (d.bindEvents = function(a, b, c) { a.events || (a.events = {}), e(b, function(b) { a.events[b] = function() { c.apply(a, arguments) }, y(a.chart.canvas, b, a.events[b]) }) }, d.unbindEvents = function(a, b) { e(b, function(b, c) { z(a.chart.canvas, c, b) }) }),
        B = d.getMaximumWidth = function(a) {
            var b = a.parentNode;
            return b.clientWidth },
        C = d.getMaximumHeight = function(a) {
            var b = a.parentNode;
            return b.clientHeight },
        D = (d.getMaximumSize = d.getMaximumWidth, d.retinaScale = function(a) {
            var b = a.ctx,
                c = a.canvas.width,
                d = a.canvas.height;
            window.devicePixelRatio && (b.canvas.style.width = c + "px", b.canvas.style.height = d + "px", b.canvas.height = d * window.devicePixelRatio, b.canvas.width = c * window.devicePixelRatio, b.scale(window.devicePixelRatio, window.devicePixelRatio)) }),
        E = d.clear = function(a) { a.ctx.clearRect(0, 0, a.width, a.height) },
        F = d.fontString = function(a, b, c) {
            return b + " " + a + "px " + c },
        G = d.longestText = function(a, b, c) { a.font = b;
            var d = 0;
            return e(c, function(b) {
                var c = a.measureText(b).width;
                d = c > d ? c : d }), d },
        H = d.drawRoundedRectangle = function(a, b, c, d, e, f) { a.beginPath(), a.moveTo(b + f, c), a.lineTo(b + d - f, c), a.quadraticCurveTo(b + d, c, b + d, c + f), a.lineTo(b + d, c + e - f), a.quadraticCurveTo(b + d, c + e, b + d - f, c + e), a.lineTo(b + f, c + e), a.quadraticCurveTo(b, c + e, b, c + e - f), a.lineTo(b, c + f), a.quadraticCurveTo(b, c, b + f, c), a.closePath() };
    c.instances = {}, c.Type = function(a, b, d) { this.options = b, this.chart = d, this.id = l(), c.instances[this.id] = this, b.responsive && this.resize(), this.initialize.call(this, a) }, g(c.Type.prototype, { initialize: function() {
            return this }, clear: function() {
            return E(this.chart), this }, stop: function() {
            return d.cancelAnimFrame.call(a, this.animationFrame), this }, resize: function(a) { this.stop();
            var b = this.chart.canvas,
                c = B(this.chart.canvas),
                d = this.options.maintainAspectRatio ? c / this.chart.aspectRatio : C(this.chart.canvas);
            return b.width = this.chart.width = c, b.height = this.chart.height = d, D(this.chart), "function" == typeof a && a.apply(this, Array.prototype.slice.call(arguments, 1)), this }, reflow: k, render: function(a) {
            return a && this.reflow(), this.options.animation && !a ? d.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this }, generateLegend: function() {
            return v(this.options.legendTemplate, this) }, destroy: function() { this.clear(), A(this, this.events), delete c.instances[this.id] }, showTooltip: function(a, b) { "undefined" == typeof this.activeElements && (this.activeElements = []);
            var f = function(a) {
                var b = !1;
                return a.length !== this.activeElements.length ? b = !0 : (e(a, function(a, c) { a !== this.activeElements[c] && (b = !0) }, this), b) }.call(this, a);
            if (f || b) {
                if (this.activeElements = a, this.draw(), a.length > 0)
                    if (this.datasets && this.datasets.length > 1) {
                        for (var g, h, j = this.datasets.length - 1; j >= 0 && (g = this.datasets[j].points || this.datasets[j].bars || this.datasets[j].segments, h = i(g, a[0]), -1 === h); j--);
                        var k = [],
                            l = [],
                            m = function() {
                                var a, b, c, e, f, g = [],
                                    i = [],
                                    j = [];
                                return d.each(this.datasets, function(b) { a = b.points || b.bars || b.segments, a[h] && a[h].hasValue() && g.push(a[h]) }), d.each(g, function(a) { i.push(a.x), j.push(a.y), k.push(d.template(this.options.multiTooltipTemplate, a)), l.push({ fill: a._saved.fillColor || a.fillColor, stroke: a._saved.strokeColor || a.strokeColor }) }, this), f = q(j), c = p(j), e = q(i), b = p(i), { x: e > this.chart.width / 2 ? e : b, y: (f + c) / 2 } }.call(this, h);
                        new c.MultiTooltip({ x: m.x, y: m.y, xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, xOffset: this.options.tooltipXOffset, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, titleTextColor: this.options.tooltipTitleFontColor, titleFontFamily: this.options.tooltipTitleFontFamily, titleFontStyle: this.options.tooltipTitleFontStyle, titleFontSize: this.options.tooltipTitleFontSize, cornerRadius: this.options.tooltipCornerRadius, labels: k, legendColors: l, legendColorBackground: this.options.multiTooltipKeyBackground, title: a[0].label, chart: this.chart, ctx: this.chart.ctx }).draw() } else e(a, function(a) {
                        var b = a.tooltipPosition();
                        new c.Tooltip({ x: Math.round(b.x), y: Math.round(b.y), xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, caretHeight: this.options.tooltipCaretSize, cornerRadius: this.options.tooltipCornerRadius, text: v(this.options.tooltipTemplate, a), chart: this.chart }).draw() }, this);
                return this } }, toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments) } }), c.Type.extend = function(a) {
        var b = this,
            d = function() {
                return b.apply(this, arguments) };
        if (d.prototype = f(b.prototype), g(d.prototype, a), d.extend = c.Type.extend, a.name || b.prototype.name) {
            var e = a.name || b.prototype.name,
                i = c.defaults[b.prototype.name] ? f(c.defaults[b.prototype.name]) : {};
            c.defaults[e] = g(i, a.defaults), c.types[e] = d, c.prototype[e] = function(a, b) {
                var f = h(c.defaults.global, c.defaults[e], b || {});
                return new d(a, f, this) } } else m("Name not provided for this chart, so it hasn't been registered");
        return b }, c.Element = function(a) { g(this, a), this.initialize.apply(this, arguments), this.save() }, g(c.Element.prototype, { initialize: function() {}, restore: function(a) {
            return a ? e(a, function(a) { this[a] = this._saved[a] }, this) : g(this, this._saved), this }, save: function() {
            return this._saved = f(this), delete this._saved._saved, this }, update: function(a) {
            return e(a, function(a, b) { this._saved[b] = this[b], this[b] = a }, this), this }, transition: function(a, b) {
            return e(a, function(a, c) { this[c] = (a - this._saved[c]) * b + this._saved[c] }, this), this }, tooltipPosition: function() {
            return { x: this.x, y: this.y } }, hasValue: function() {
            return o(this.value) } }), c.Element.extend = j, c.Point = c.Element.extend({ display: !0, inRange: function(a, b) {
            var c = this.hitDetectionRadius + this.radius;
            return Math.pow(a - this.x, 2) + Math.pow(b - this.y, 2) < Math.pow(c, 2) }, draw: function() {
            if (this.display) {
                var a = this.ctx;
                a.beginPath(), a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), a.closePath(), a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.fillStyle = this.fillColor, a.fill(), a.stroke() } } }), c.Arc = c.Element.extend({ inRange: function(a, b) {
            var c = d.getAngleFromPoint(this, { x: a, y: b }),
                e = c.angle >= this.startAngle && c.angle <= this.endAngle,
                f = c.distance >= this.innerRadius && c.distance <= this.outerRadius;
            return e && f }, tooltipPosition: function() {
            var a = this.startAngle + (this.endAngle - this.startAngle) / 2,
                b = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return { x: this.x + Math.cos(a) * b, y: this.y + Math.sin(a) * b } }, draw: function(a) {
            var b = this.ctx;
            b.beginPath(), b.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), b.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), b.closePath(), b.strokeStyle = this.strokeColor, b.lineWidth = this.strokeWidth, b.fillStyle = this.fillColor, b.fill(), b.lineJoin = "bevel", this.showStroke && b.stroke() } }), c.Rectangle = c.Element.extend({ draw: function() {
            var a = this.ctx,
                b = this.width / 2,
                c = this.x - b,
                d = this.x + b,
                e = this.base - (this.base - this.y),
                f = this.strokeWidth / 2;
            this.showStroke && (c += f, d -= f, e += f), a.beginPath(), a.fillStyle = this.fillColor, a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.moveTo(c, this.base), a.lineTo(c, e), a.lineTo(d, e), a.lineTo(d, this.base), a.fill(), this.showStroke && a.stroke() }, height: function() {
            return this.base - this.y }, inRange: function(a, b) {
            return a >= this.x - this.width / 2 && a <= this.x + this.width / 2 && b >= this.y && b <= this.base } }), c.Tooltip = c.Element.extend({ draw: function() {
            var a = this.chart.ctx;
            a.font = F(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
            var b = 2,
                c = a.measureText(this.text).width + 2 * this.xPadding,
                d = this.fontSize + 2 * this.yPadding,
                e = d + this.caretHeight + b;
            this.x + c / 2 > this.chart.width ? this.xAlign = "left" : this.x - c / 2 < 0 && (this.xAlign = "right"), this.y - e < 0 && (this.yAlign = "below");
            var f = this.x - c / 2,
                g = this.y - e;
            switch (a.fillStyle = this.fillColor, this.yAlign) {
                case "above":
                    a.beginPath(), a.moveTo(this.x, this.y - b), a.lineTo(this.x + this.caretHeight, this.y - (b + this.caretHeight)), a.lineTo(this.x - this.caretHeight, this.y - (b + this.caretHeight)), a.closePath(), a.fill();
                    break;
                case "below":
                    g = this.y + b + this.caretHeight, a.beginPath(), a.moveTo(this.x, this.y + b), a.lineTo(this.x + this.caretHeight, this.y + b + this.caretHeight), a.lineTo(this.x - this.caretHeight, this.y + b + this.caretHeight), a.closePath(), a.fill() }
            switch (this.xAlign) {
                case "left":
                    f = this.x - c + (this.cornerRadius + this.caretHeight);
                    break;
                case "right":
                    f = this.x - (this.cornerRadius + this.caretHeight) }
            H(a, f, g, c, d, this.cornerRadius), a.fill(), a.fillStyle = this.textColor, a.textAlign = "center", a.textBaseline = "middle", a.fillText(this.text, f + c / 2, g + d / 2) } }), c.MultiTooltip = c.Element.extend({ initialize: function() { this.font = F(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = F(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
            var a = this.ctx.measureText(this.title).width,
                b = G(this.ctx, this.font, this.labels) + this.fontSize + 3,
                c = p([b, a]);
            this.width = c + 2 * this.xPadding;
            var d = this.height / 2;
            this.y - d < 0 ? this.y = d : this.y + d > this.chart.height && (this.y = this.chart.height - d), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset }, getLineHeight: function(a) {
            var b = this.y - this.height / 2 + this.yPadding,
                c = a - 1;
            return 0 === a ? b + this.titleFontSize / 2 : b + (1.5 * this.fontSize * c + this.fontSize / 2) + 1.5 * this.titleFontSize }, draw: function() { H(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
            var a = this.ctx;
            a.fillStyle = this.fillColor, a.fill(), a.closePath(), a.textAlign = "left", a.textBaseline = "middle", a.fillStyle = this.titleTextColor, a.font = this.titleFont, a.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), a.font = this.font, d.each(this.labels, function(b, c) { a.fillStyle = this.textColor, a.fillText(b, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(c + 1)), a.fillStyle = this.legendColorBackground, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize), a.fillStyle = this.legendColors[c].fill, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize) }, this) } }), c.Scale = c.Element.extend({ initialize: function() { this.fit() }, buildYLabels: function() { this.yLabels = [];
            for (var a = r(this.stepValue), b = 0; b <= this.steps; b++) this.yLabels.push(v(this.templateString, { value: (this.min + b * this.stepValue).toFixed(a) }));
            this.yLabelWidth = this.display && this.showLabels ? G(this.ctx, this.font, this.yLabels) : 0 }, addXLabel: function(a) { this.xLabels.push(a), this.valuesCount++, this.fit() }, removeXLabel: function() { this.xLabels.shift(), this.valuesCount--, this.fit() }, fit: function() { this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
            var a, b = this.endPoint - this.startPoint;
            for (this.calculateYRange(b), this.buildYLabels(), this.calculateXLabelRotation(); b > this.endPoint - this.startPoint;) b = this.endPoint - this.startPoint, a = this.yLabelWidth, this.calculateYRange(b), this.buildYLabels(), a < this.yLabelWidth && this.calculateXLabelRotation() }, calculateXLabelRotation: function() { this.ctx.font = this.font;
            var a, b, c = this.ctx.measureText(this.xLabels[0]).width,
                d = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = d / 2 + 3, this.xScalePaddingLeft = c / 2 > this.yLabelWidth + 10 ? c / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                var e, f = G(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = f;
                for (var g = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > g && 0 === this.xLabelRotation || this.xLabelWidth > g && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) e = Math.cos(s(this.xLabelRotation)), a = e * c, b = e * d, a + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = a + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = e * f;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(s(this.xLabelRotation)) * f + 3) } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding }, calculateYRange: k, drawingArea: function() {
            return this.startPoint - this.endPoint }, calculateY: function(a) {
            var b = this.drawingArea() / (this.min - this.max);
            return this.endPoint - b * (a - this.min) }, calculateX: function(a) {
            var b = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                c = b / (this.valuesCount - (this.offsetGridLines ? 0 : 1)),
                d = c * a + this.xScalePaddingLeft;
            return this.offsetGridLines && (d += c / 2), Math.round(d) }, update: function(a) { d.extend(this, a), this.fit() }, draw: function() {
            var a = this.ctx,
                b = (this.endPoint - this.startPoint) / this.steps,
                c = Math.round(this.xScalePaddingLeft);
            this.display && (a.fillStyle = this.textColor, a.font = this.font, e(this.yLabels, function(e, f) {
                var g = this.endPoint - b * f,
                    h = Math.round(g);
                a.textAlign = "right", a.textBaseline = "middle", this.showLabels && a.fillText(e, c - 10, g), a.beginPath(), f > 0 ? (a.lineWidth = this.gridLineWidth, a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor), h += d.aliasPixel(a.lineWidth), a.moveTo(c, h), a.lineTo(this.width, h), a.stroke(), a.closePath(), a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor, a.beginPath(), a.moveTo(c - 5, h), a.lineTo(c, h), a.stroke(), a.closePath() }, this), e(this.xLabels, function(b, c) {
                var d = this.calculateX(c) + t(this.lineWidth),
                    e = this.calculateX(c - (this.offsetGridLines ? .5 : 0)) + t(this.lineWidth),
                    f = this.xLabelRotation > 0;
                a.beginPath(), c > 0 ? (a.lineWidth = this.gridLineWidth, a.strokeStyle = this.gridLineColor) : (a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor), a.moveTo(e, this.endPoint), a.lineTo(e, this.startPoint - 3), a.stroke(), a.closePath(), a.lineWidth = this.lineWidth, a.strokeStyle = this.lineColor, a.beginPath(), a.moveTo(e, this.endPoint), a.lineTo(e, this.endPoint + 5), a.stroke(), a.closePath(), a.save(), a.translate(d, f ? this.endPoint + 12 : this.endPoint + 8), a.rotate(-1 * s(this.xLabelRotation)), a.font = this.font, a.textAlign = f ? "right" : "center", a.textBaseline = f ? "middle" : "top", a.fillText(b, 0, 0), a.restore() }, this)) } }), c.RadialScale = c.Element.extend({ initialize: function() { this.size = q([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 }, calculateCenterOffset: function(a) {
            var b = this.drawingArea / (this.max - this.min);
            return (a - this.min) * b }, update: function() { this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels() }, buildYLabels: function() { this.yLabels = [];
            for (var a = r(this.stepValue), b = 0; b <= this.steps; b++) this.yLabels.push(v(this.templateString, { value: (this.min + b * this.stepValue).toFixed(a) })) }, getCircumference: function() {
            return 2 * Math.PI / this.valuesCount }, setScaleSize: function() {
            var a, b, c, d, e, f, g, h, i, j, k, l, m = q([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                n = this.width,
                p = 0;
            for (this.ctx.font = F(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), b = 0; b < this.valuesCount; b++) a = this.getPointPosition(b, m), c = this.ctx.measureText(v(this.templateString, { value: this.labels[b] })).width + 5, 0 === b || b === this.valuesCount / 2 ? (d = c / 2, a.x + d > n && (n = a.x + d, e = b), a.x - d < p && (p = a.x - d, g = b)) : b < this.valuesCount / 2 ? a.x + c > n && (n = a.x + c, e = b) : b > this.valuesCount / 2 && a.x - c < p && (p = a.x - c, g = b);
            i = p, j = Math.ceil(n - this.width), f = this.getIndexAngle(e), h = this.getIndexAngle(g), k = j / Math.sin(f + Math.PI / 2), l = i / Math.sin(h + Math.PI / 2), k = o(k) ? k : 0, l = o(l) ? l : 0, this.drawingArea = m - (l + k) / 2, this.setCenterPoint(l, k) }, setCenterPoint: function(a, b) {
            var c = this.width - b - this.drawingArea,
                d = a + this.drawingArea;
            this.xCenter = (d + c) / 2, this.yCenter = this.height / 2 }, getIndexAngle: function(a) {
            var b = 2 * Math.PI / this.valuesCount;
            return a * b - Math.PI / 2 }, getPointPosition: function(a, b) {
            var c = this.getIndexAngle(a);
            return { x: Math.cos(c) * b + this.xCenter, y: Math.sin(c) * b + this.yCenter } }, draw: function() {
            if (this.display) {
                var a = this.ctx;
                if (e(this.yLabels, function(b, c) {
                        if (c > 0) {
                            var d, e = c * (this.drawingArea / this.steps),
                                f = this.yCenter - e;
                            if (this.lineWidth > 0)
                                if (a.strokeStyle = this.lineColor, a.lineWidth = this.lineWidth, this.lineArc) a.beginPath(), a.arc(this.xCenter, this.yCenter, e, 0, 2 * Math.PI), a.closePath(), a.stroke();
                                else { a.beginPath();
                                    for (var g = 0; g < this.valuesCount; g++) d = this.getPointPosition(g, this.calculateCenterOffset(this.min + c * this.stepValue)), 0 === g ? a.moveTo(d.x, d.y) : a.lineTo(d.x, d.y);
                                    a.closePath(), a.stroke() }
                            if (this.showLabels) {
                                if (a.font = F(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                    var h = a.measureText(b).width;
                                    a.fillStyle = this.backdropColor, a.fillRect(this.xCenter - h / 2 - this.backdropPaddingX, f - this.fontSize / 2 - this.backdropPaddingY, h + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY) }
                                a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = this.fontColor, a.fillText(b, this.xCenter, f) } } }, this), !this.lineArc) { a.lineWidth = this.angleLineWidth, a.strokeStyle = this.angleLineColor;
                    for (var b = this.valuesCount - 1; b >= 0; b--) {
                        if (this.angleLineWidth > 0) {
                            var c = this.getPointPosition(b, this.calculateCenterOffset(this.max));
                            a.beginPath(), a.moveTo(this.xCenter, this.yCenter), a.lineTo(c.x, c.y), a.stroke(), a.closePath() }
                        var d = this.getPointPosition(b, this.calculateCenterOffset(this.max) + 5);
                        a.font = F(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), a.fillStyle = this.pointLabelFontColor;
                        var f = this.labels.length,
                            g = this.labels.length / 2,
                            h = g / 2,
                            i = h > b || b > f - h,
                            j = b === h || b === f - h;
                        a.textAlign = 0 === b ? "center" : b === g ? "center" : g > b ? "left" : "right", a.textBaseline = j ? "middle" : i ? "bottom" : "top", a.fillText(this.labels[b], d.x, d.y) } } } } }), d.addEvent(window, "resize", function() {
        var a;
        return function() { clearTimeout(a), a = setTimeout(function() { e(c.instances, function(a) { a.options.responsive && a.resize(a.render, !0) }) }, 50) } }()), n ? define(function() {
        return c }) : "object" == typeof module && module.exports && (module.exports = c), a.Chart = c, c.noConflict = function() {
        return a.Chart = b, c }
}.call(this),
    function() { "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = { scaleBeginAtZero: !0, scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, barShowStroke: !0, barStrokeWidth: 2, barValueSpacing: 5, barDatasetSpacing: 1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>' };
        b.Type.extend({ name: "Bar", defaults: d, initialize: function(a) {
                var d = this.options;
                this.ScaleClass = b.Scale.extend({ offsetGridLines: !0, calculateBarX: function(a, b, c) {
                        var e = this.calculateBaseWidth(),
                            f = this.calculateX(c) - e / 2,
                            g = this.calculateBarWidth(a);
                        return f + g * b + b * d.barDatasetSpacing + g / 2 }, calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * d.barValueSpacing }, calculateBarWidth: function(a) {
                        var b = this.calculateBaseWidth() - (a - 1) * d.barDatasetSpacing;
                        return b / a } }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getBarsAtEvent(a) : [];
                    this.eachBars(function(a) { a.restore(["fillColor", "strokeColor"]) }), c.each(b, function(a) { a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke }), this.showTooltip(b) }), this.BarClass = b.Rectangle.extend({ strokeWidth: this.options.barStrokeWidth, showStroke: this.options.barShowStroke, ctx: this.chart.ctx }), c.each(a.datasets, function(b) {
                    var d = { label: b.label || null, fillColor: b.fillColor, strokeColor: b.strokeColor, bars: [] };
                    this.datasets.push(d), c.each(b.data, function(c, e) { d.bars.push(new this.BarClass({ value: c, label: a.labels[e], datasetLabel: b.label, strokeColor: b.strokeColor, fillColor: b.fillColor, highlightFill: b.highlightFill || b.fillColor, highlightStroke: b.highlightStroke || b.strokeColor })) }, this) }, this), this.buildScale(a.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(a, b, d) { c.extend(a, { width: this.scale.calculateBarWidth(this.datasets.length), x: this.scale.calculateBarX(this.datasets.length, d, b), y: this.scale.endPoint }), a.save() }, this), this.render() }, update: function() { this.scale.update(), c.each(this.activeElements, function(a) { a.restore(["fillColor", "strokeColor"]) }), this.eachBars(function(a) { a.save() }), this.render() }, eachBars: function(a) { c.each(this.datasets, function(b, d) { c.each(b.bars, a, this, d) }, this) }, getBarsAtEvent: function(a) {
                for (var b, d = [], e = c.getRelativePosition(a), f = function(a) { d.push(a.bars[b]) }, g = 0; g < this.datasets.length; g++)
                    for (b = 0; b < this.datasets[g].bars.length; b++)
                        if (this.datasets[g].bars[b].inRange(e.x, e.y)) return c.each(this.datasets, f), d;
                return d }, buildScale: function(a) {
                var b = this,
                    d = function() {
                        var a = [];
                        return b.eachBars(function(b) { a.push(b.value) }), a },
                    e = { templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: a.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function(a) {
                            var b = c.calculateScaleRange(d(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                            c.extend(this, b) }, xLabels: a, font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0, showLabels: this.options.scaleShowLabels, display: this.options.showScale };
                this.options.scaleOverride && c.extend(e, { calculateYRange: c.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth }), this.scale = new this.ScaleClass(e) }, addData: function(a, b) { c.each(a, function(a, c) { this.datasets[c].bars.push(new this.BarClass({ value: a, label: b, x: this.scale.calculateBarX(this.datasets.length, c, this.scale.valuesCount + 1), y: this.scale.endPoint, width: this.scale.calculateBarWidth(this.datasets.length), base: this.scale.endPoint, strokeColor: this.datasets[c].strokeColor, fillColor: this.datasets[c].fillColor })) }, this), this.scale.addXLabel(b), this.update() }, removeData: function() { this.scale.removeXLabel(), c.each(this.datasets, function(a) { a.bars.shift() }, this), this.update() }, reflow: function() { c.extend(this.BarClass.prototype, { y: this.scale.endPoint, base: this.scale.endPoint });
                var a = c.extend({ height: this.chart.height, width: this.chart.width });
                this.scale.update(a) }, draw: function(a) {
                var b = a || 1;
                this.clear();
                this.chart.ctx;
                this.scale.draw(b), c.each(this.datasets, function(a, d) { c.each(a.bars, function(a, c) { a.hasValue() && (a.base = this.scale.endPoint, a.transition({ x: this.scale.calculateBarX(this.datasets.length, d, c), y: this.scale.calculateY(a.value), width: this.scale.calculateBarWidth(this.datasets.length) }, b).draw()) }, this) }, this) } }) }.call(this),
    function() {
        "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = { segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, percentageInnerCutout: 50, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>' };
        b.Type.extend({
            name: "Doughnut",
            defaults: d,
            initialize: function(a) { this.segments = [], this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = b.Arc.extend({ ctx: this.chart.ctx, x: this.chart.width / 2, y: this.chart.height / 2 }), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                    c.each(this.segments, function(a) { a.restore(["fillColor"]) }), c.each(b, function(a) { a.fillColor = a.highlightColor }), this.showTooltip(b) }), this.calculateTotal(a), c.each(a, function(a, b) { this.addData(a, b, !0) }, this), this.render() },
            getSegmentsAtEvent: function(a) {
                var b = [],
                    d = c.getRelativePosition(a);
                return c.each(this.segments, function(a) { a.inRange(d.x, d.y) && b.push(a) }, this), b },
            addData: function(a, b, c) {
                var d = b || this.segments.length;
                this.segments.splice(d, 0, new this.SegmentArc({ value: a.value, outerRadius: this.options.animateScale ? 0 : this.outerRadius, innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout, fillColor: a.color, highlightColor: a.highlight || a.color, showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, startAngle: 1.5 * Math.PI, circumference: this.options.animateRotate ? 0 : this.calculateCircumference(a.value), label: a.label })), c || (this.reflow(), this.update())
            },
            calculateCircumference: function(a) {
                return 2 * Math.PI * (a / this.total) },
            calculateTotal: function(a) { this.total = 0, c.each(a, function(a) { this.total += a.value }, this) },
            update: function() { this.calculateTotal(this.segments), c.each(this.activeElements, function(a) { a.restore(["fillColor"]) }), c.each(this.segments, function(a) { a.save() }), this.render() },
            removeData: function(a) {
                var b = c.isNumber(a) ? a : this.segments.length - 1;
                this.segments.splice(b, 1), this.reflow(), this.update() },
            reflow: function() { c.extend(this.SegmentArc.prototype, { x: this.chart.width / 2, y: this.chart.height / 2 }), this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, c.each(this.segments, function(a) { a.update({ outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout }) }, this) },
            draw: function(a) {
                var b = a ? a : 1;
                this.clear(), c.each(this.segments, function(a, c) { a.transition({ circumference: this.calculateCircumference(a.value), outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout }, b), a.endAngle = a.startAngle + a.circumference, a.draw(), 0 === c && (a.startAngle = 1.5 * Math.PI), c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle) }, this) }
        }), b.types.Doughnut.extend({ name: "Pie", defaults: c.merge(d, { percentageInnerCutout: 0 }) })
    }.call(this),
    function() { "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = { scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, bezierCurve: !0, bezierCurveTension: .4, pointDot: !0, pointDotRadius: 4, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>' };
        b.Type.extend({ name: "Line", defaults: d, initialize: function(a) { this.PointClass = b.Point.extend({ strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx, inRange: function(a) {
                        return Math.pow(a - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2) } }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                    this.eachPoints(function(a) { a.restore(["fillColor", "strokeColor"]) }), c.each(b, function(a) { a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke }), this.showTooltip(b) }), c.each(a.datasets, function(b) {
                    var d = { label: b.label || null, fillColor: b.fillColor, strokeColor: b.strokeColor, pointColor: b.pointColor, pointStrokeColor: b.pointStrokeColor, points: [] };
                    this.datasets.push(d), c.each(b.data, function(c, e) { d.points.push(new this.PointClass({ value: c, label: a.labels[e], datasetLabel: b.label, strokeColor: b.pointStrokeColor, fillColor: b.pointColor, highlightFill: b.pointHighlightFill || b.pointColor, highlightStroke: b.pointHighlightStroke || b.pointStrokeColor })) }, this), this.buildScale(a.labels), this.eachPoints(function(a, b) { c.extend(a, { x: this.scale.calculateX(b), y: this.scale.endPoint }), a.save() }, this) }, this), this.render() }, update: function() { this.scale.update(), c.each(this.activeElements, function(a) { a.restore(["fillColor", "strokeColor"]) }), this.eachPoints(function(a) { a.save() }), this.render() }, eachPoints: function(a) { c.each(this.datasets, function(b) { c.each(b.points, a, this) }, this) }, getPointsAtEvent: function(a) {
                var b = [],
                    d = c.getRelativePosition(a);
                return c.each(this.datasets, function(a) { c.each(a.points, function(a) { a.inRange(d.x, d.y) && b.push(a) }) }, this), b }, buildScale: function(a) {
                var d = this,
                    e = function() {
                        var a = [];
                        return d.eachPoints(function(b) { a.push(b.value) }), a },
                    f = { templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: a.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function(a) {
                            var b = c.calculateScaleRange(e(), a, this.fontSize, this.beginAtZero, this.integersOnly);
                            c.extend(this, b) }, xLabels: a, font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth, showLabels: this.options.scaleShowLabels, display: this.options.showScale };
                this.options.scaleOverride && c.extend(f, { calculateYRange: c.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth }), this.scale = new b.Scale(f) }, addData: function(a, b) { c.each(a, function(a, c) { this.datasets[c].points.push(new this.PointClass({ value: a, label: b, x: this.scale.calculateX(this.scale.valuesCount + 1), y: this.scale.endPoint, strokeColor: this.datasets[c].pointStrokeColor, fillColor: this.datasets[c].pointColor })) }, this), this.scale.addXLabel(b), this.update() }, removeData: function() { this.scale.removeXLabel(), c.each(this.datasets, function(a) { a.points.shift() }, this), this.update() }, reflow: function() {
                var a = c.extend({ height: this.chart.height, width: this.chart.width });
                this.scale.update(a) }, draw: function(a) {
                var b = a || 1;
                this.clear();
                var d = this.chart.ctx,
                    e = function(a) {
                        return null !== a.value },
                    f = function(a, b, d) {
                        return c.findNextWhere(b, e, d) || a },
                    g = function(a, b, d) {
                        return c.findPreviousWhere(b, e, d) || a };
                this.scale.draw(b), c.each(this.datasets, function(a) {
                    var h = c.where(a.points, e);
                    c.each(a.points, function(a, c) { a.hasValue() && a.transition({ y: this.scale.calculateY(a.value), x: this.scale.calculateX(c) }, b) }, this), this.options.bezierCurve && c.each(h, function(a, b) {
                        var d = b > 0 && b < h.length - 1 ? this.options.bezierCurveTension : 0;
                        a.controlPoints = c.splineCurve(g(a, h, b), a, f(a, h, b), d), a.controlPoints.outer.y > this.scale.endPoint ? a.controlPoints.outer.y = this.scale.endPoint : a.controlPoints.outer.y < this.scale.startPoint && (a.controlPoints.outer.y = this.scale.startPoint), a.controlPoints.inner.y > this.scale.endPoint ? a.controlPoints.inner.y = this.scale.endPoint : a.controlPoints.inner.y < this.scale.startPoint && (a.controlPoints.inner.y = this.scale.startPoint) }, this), d.lineWidth = this.options.datasetStrokeWidth, d.strokeStyle = a.strokeColor, d.beginPath(), c.each(h, function(a, b) {
                        if (0 === b) d.moveTo(a.x, a.y);
                        else if (this.options.bezierCurve) {
                            var c = g(a, h, b);
                            d.bezierCurveTo(c.controlPoints.outer.x, c.controlPoints.outer.y, a.controlPoints.inner.x, a.controlPoints.inner.y, a.x, a.y) } else d.lineTo(a.x, a.y) }, this), d.stroke(), this.options.datasetFill && h.length > 0 && (d.lineTo(h[h.length - 1].x, this.scale.endPoint), d.lineTo(h[0].x, this.scale.endPoint), d.fillStyle = a.fillColor, d.closePath(), d.fill()), c.each(h, function(a) { a.draw() }) }, this) } }) }.call(this),
    function() { "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers,
            d = { scaleShowLabelBackdrop: !0, scaleBackdropColor: "rgba(255,255,255,0.75)", scaleBeginAtZero: !0, scaleBackdropPaddingY: 2, scaleBackdropPaddingX: 2, scaleShowLine: !0, segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>' };
        b.Type.extend({ name: "PolarArea", defaults: d, initialize: function(a) { this.segments = [], this.SegmentArc = b.Arc.extend({ showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, ctx: this.chart.ctx, innerRadius: 0, x: this.chart.width / 2, y: this.chart.height / 2 }), this.scale = new b.RadialScale({ display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, lineArc: !0, width: this.chart.width, height: this.chart.height, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, valuesCount: a.length }), this.updateScaleRange(a), this.scale.update(), c.each(a, function(a, b) { this.addData(a, b, !0) }, this), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getSegmentsAtEvent(a) : [];
                    c.each(this.segments, function(a) { a.restore(["fillColor"]) }), c.each(b, function(a) { a.fillColor = a.highlightColor }), this.showTooltip(b) }), this.render() }, getSegmentsAtEvent: function(a) {
                var b = [],
                    d = c.getRelativePosition(a);
                return c.each(this.segments, function(a) { a.inRange(d.x, d.y) && b.push(a) }, this), b }, addData: function(a, b, c) {
                var d = b || this.segments.length;
                this.segments.splice(d, 0, new this.SegmentArc({ fillColor: a.color, highlightColor: a.highlight || a.color, label: a.label, value: a.value, outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(a.value), circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(), startAngle: 1.5 * Math.PI })), c || (this.reflow(), this.update()) }, removeData: function(a) {
                var b = c.isNumber(a) ? a : this.segments.length - 1;
                this.segments.splice(b, 1), this.reflow(), this.update() }, calculateTotal: function(a) { this.total = 0, c.each(a, function(a) { this.total += a.value }, this), this.scale.valuesCount = this.segments.length }, updateScaleRange: function(a) {
                var b = [];
                c.each(a, function(a) { b.push(a.value) });
                var d = this.options.scaleOverride ? { steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                c.extend(this.scale, d, { size: c.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }) }, update: function() { this.calculateTotal(this.segments), c.each(this.segments, function(a) { a.save() }), this.render() }, reflow: function() { c.extend(this.SegmentArc.prototype, { x: this.chart.width / 2, y: this.chart.height / 2 }), this.updateScaleRange(this.segments), this.scale.update(), c.extend(this.scale, { xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }), c.each(this.segments, function(a) { a.update({ outerRadius: this.scale.calculateCenterOffset(a.value) }) }, this) }, draw: function(a) {
                var b = a || 1;
                this.clear(), c.each(this.segments, function(a, c) { a.transition({ circumference: this.scale.getCircumference(), outerRadius: this.scale.calculateCenterOffset(a.value) }, b), a.endAngle = a.startAngle + a.circumference, 0 === c && (a.startAngle = 1.5 * Math.PI), c < this.segments.length - 1 && (this.segments[c + 1].startAngle = a.endAngle), a.draw() }, this), this.scale.draw() } }) }.call(this),
    function() { "use strict";
        var a = this,
            b = a.Chart,
            c = b.helpers;
        b.Type.extend({ name: "Radar", defaults: { scaleShowLine: !0, angleShowLineOut: !0, scaleShowLabels: !1, scaleBeginAtZero: !0, angleLineColor: "rgba(0,0,0,.1)", angleLineWidth: 1, pointLabelFontFamily: "'Arial'", pointLabelFontStyle: "normal", pointLabelFontSize: 10, pointLabelFontColor: "#666", pointDot: !0, pointDotRadius: 3, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>' }, initialize: function(a) { this.PointClass = b.Point.extend({ strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx }), this.datasets = [], this.buildScale(a), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function(a) {
                    var b = "mouseout" !== a.type ? this.getPointsAtEvent(a) : [];
                    this.eachPoints(function(a) { a.restore(["fillColor", "strokeColor"]) }), c.each(b, function(a) { a.fillColor = a.highlightFill, a.strokeColor = a.highlightStroke }), this.showTooltip(b) }), c.each(a.datasets, function(b) {
                    var d = { label: b.label || null, fillColor: b.fillColor, strokeColor: b.strokeColor, pointColor: b.pointColor, pointStrokeColor: b.pointStrokeColor, points: [] };
                    this.datasets.push(d), c.each(b.data, function(c, e) {
                        var f;
                        this.scale.animation || (f = this.scale.getPointPosition(e, this.scale.calculateCenterOffset(c))), d.points.push(new this.PointClass({ value: c, label: a.labels[e], datasetLabel: b.label, x: this.options.animation ? this.scale.xCenter : f.x, y: this.options.animation ? this.scale.yCenter : f.y, strokeColor: b.pointStrokeColor, fillColor: b.pointColor, highlightFill: b.pointHighlightFill || b.pointColor, highlightStroke: b.pointHighlightStroke || b.pointStrokeColor })) }, this) }, this), this.render() }, eachPoints: function(a) { c.each(this.datasets, function(b) { c.each(b.points, a, this) }, this) }, getPointsAtEvent: function(a) {
                var b = c.getRelativePosition(a),
                    d = c.getAngleFromPoint({ x: this.scale.xCenter, y: this.scale.yCenter }, b),
                    e = 2 * Math.PI / this.scale.valuesCount,
                    f = Math.round((d.angle - 1.5 * Math.PI) / e),
                    g = [];
                return (f >= this.scale.valuesCount || 0 > f) && (f = 0), d.distance <= this.scale.drawingArea && c.each(this.datasets, function(a) { g.push(a.points[f]) }), g }, buildScale: function(a) { this.scale = new b.RadialScale({ display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, angleLineColor: this.options.angleLineColor, angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0, pointLabelFontColor: this.options.pointLabelFontColor, pointLabelFontSize: this.options.pointLabelFontSize, pointLabelFontFamily: this.options.pointLabelFontFamily, pointLabelFontStyle: this.options.pointLabelFontStyle, height: this.chart.height, width: this.chart.width, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, labels: a.labels, valuesCount: a.datasets[0].data.length }), this.scale.setScaleSize(), this.updateScaleRange(a.datasets), this.scale.buildYLabels() }, updateScaleRange: function(a) {
                var b = function() {
                        var b = [];
                        return c.each(a, function(a) { a.data ? b = b.concat(a.data) : c.each(a.points, function(a) { b.push(a.value) }) }), b }(),
                    d = this.options.scaleOverride ? { steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth } : c.calculateScaleRange(b, c.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                c.extend(this.scale, d) }, addData: function(a, b) { this.scale.valuesCount++, c.each(a, function(a, c) {
                    var d = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(a));
                    this.datasets[c].points.push(new this.PointClass({ value: a, label: b, x: d.x, y: d.y, strokeColor: this.datasets[c].pointStrokeColor, fillColor: this.datasets[c].pointColor })) }, this), this.scale.labels.push(b), this.reflow(), this.update() }, removeData: function() { this.scale.valuesCount--, this.scale.labels.shift(), c.each(this.datasets, function(a) { a.points.shift() }, this), this.reflow(), this.update() }, update: function() { this.eachPoints(function(a) { a.save() }), this.reflow(), this.render() }, reflow: function() { c.extend(this.scale, { width: this.chart.width, height: this.chart.height, size: c.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels() }, draw: function(a) {
                var b = a || 1,
                    d = this.chart.ctx;
                this.clear(), this.scale.draw(), c.each(this.datasets, function(a) { c.each(a.points, function(a, c) { a.hasValue() && a.transition(this.scale.getPointPosition(c, this.scale.calculateCenterOffset(a.value)), b) }, this), d.lineWidth = this.options.datasetStrokeWidth, d.strokeStyle = a.strokeColor, d.beginPath(), c.each(a.points, function(a, b) { 0 === b ? d.moveTo(a.x, a.y) : d.lineTo(a.x, a.y) }, this), d.closePath(), d.stroke(), d.fillStyle = a.fillColor, d.fill(), c.each(a.points, function(a) { a.hasValue() && a.draw() }) }, this) } }) }.call(this),
    function(a) {
        function b() {}

        function c(a) {
            function c(b) { b.prototype.option || (b.prototype.option = function(b) { a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b)) }) }

            function e(b, c) { a.fn[b] = function(e) {
                    if ("string" == typeof e) {
                        for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                            var j = this[h],
                                k = a.data(j, b);
                            if (k)
                                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                    var l = k[e].apply(k, g);
                                    if (void 0 !== l) return l } else f("no such method '" + e + "' for " + b + " instance");
                            else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'") }
                        return this }
                    return this.each(function() {
                        var d = a.data(this, b);
                        d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d)) }) } }
            if (a) {
                var f = "undefined" == typeof console ? b : function(a) { console.error(a) };
                return a.bridget = function(a, b) { c(b), e(a, b) }, a.bridget } }
        var d = Array.prototype.slice; "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c(a.jQuery) }(window),
    function(a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b, c }
        var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) { a.addEventListener(b, c, !1) } : c.attachEvent && (d = function(a, c, d) { a[c + d] = d.handleEvent ? function() {
                var c = b(a);
                d.handleEvent.call(d, c) } : function() {
                var c = b(a);
                d.call(a, c) }, a.attachEvent("on" + c, a[c + d]) });
        var e = function() {};
        c.removeEventListener ? e = function(a, b, c) { a.removeEventListener(b, c, !1) } : c.detachEvent && (e = function(a, b, c) { a.detachEvent("on" + b, a[b + c]);
            try { delete a[b + c] } catch (d) { a[b + c] = void 0 } });
        var f = { bind: d, unbind: e }; "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f }(this),
    function(a) {
        function b(a) { "function" == typeof a && (b.isReady ? a() : f.push(a)) }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== e.readyState;
            if (!b.isReady && !c) { b.isReady = !0;
                for (var d = 0, g = f.length; g > d; d++) {
                    var h = f[d];
                    h() } } }

        function d(d) {
            return d.bind(e, "DOMContentLoaded", c), d.bind(e, "readystatechange", c), d.bind(a, "load", c), b }
        var e = a.document,
            f = [];
        b.isReady = !1, "function" == typeof define && define.amd ? (b.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], d)) : a.docReady = d(a.eventie) }(this),
    function() {
        function a() {}

        function b(a, b) {
            for (var c = a.length; c--;)
                if (a[c].listener === b) return c;
            return -1 }

        function c(a) {
            return function() {
                return this[a].apply(this, arguments) } }
        var d = a.prototype,
            e = this,
            f = e.EventEmitter;
        d.getListeners = function(a) {
            var b, c, d = this._getEvents();
            if (a instanceof RegExp) { b = {};
                for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]) } else b = d[a] || (d[a] = []);
            return b }, d.flattenListeners = function(a) {
            var b, c = [];
            for (b = 0; a.length > b; b += 1) c.push(a[b].listener);
            return c }, d.getListenersAsObject = function(a) {
            var b, c = this.getListeners(a);
            return c instanceof Array && (b = {}, b[a] = c), b || c }, d.addListener = function(a, c) {
            var d, e = this.getListenersAsObject(a),
                f = "object" == typeof c;
            for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : { listener: c, once: !1 });
            return this }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
            return this.addListener(a, { listener: b, once: !0 }) }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
            return this.getListeners(a), this }, d.defineEvents = function(a) {
            for (var b = 0; a.length > b; b += 1) this.defineEvent(a[b]);
            return this }, d.removeListener = function(a, c) {
            var d, e, f = this.getListenersAsObject(a);
            for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
            return this }, d.off = c("removeListener"), d.addListeners = function(a, b) {
            return this.manipulateListeners(!1, a, b) }, d.removeListeners = function(a, b) {
            return this.manipulateListeners(!0, a, b) }, d.manipulateListeners = function(a, b, c) {
            var d, e, f = a ? this.removeListener : this.addListener,
                g = a ? this.removeListeners : this.addListeners;
            if ("object" != typeof b || b instanceof RegExp)
                for (d = c.length; d--;) f.call(this, b, c[d]);
            else
                for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
            return this }, d.removeEvent = function(a) {
            var b, c = typeof a,
                d = this._getEvents();
            if ("string" === c) delete d[a];
            else if (a instanceof RegExp)
                for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
            else delete this._events;
            return this }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
            var c, d, e, f, g = this.getListenersAsObject(a);
            for (e in g)
                if (g.hasOwnProperty(e))
                    for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
            return this }, d.trigger = c("emitEvent"), d.emit = function(a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(a, b) }, d.setOnceReturnValue = function(a) {
            return this._onceReturnValue = a, this }, d._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, d._getEvents = function() {
            return this._events || (this._events = {}) }, a.noConflict = function() {
            return e.EventEmitter = f, a }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return a }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a }.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b } }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style; "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b }(window),
    function(a) {
        function b(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b }

        function c() {
            for (var a = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, b = 0, c = g.length; c > b; b++) {
                var d = g[b];
                a[d] = 0 }
            return a }

        function d(a) {
            function d(a) {
                if ("string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var d = f(a);
                    if ("none" === d.display) return c();
                    var e = {};
                    e.width = a.offsetWidth, e.height = a.offsetHeight;
                    for (var k = e.isBorderBox = !(!j || !d[j] || "border-box" !== d[j]), l = 0, m = g.length; m > l; l++) {
                        var n = g[l],
                            o = d[n];
                        o = h(a, o);
                        var p = parseFloat(o);
                        e[n] = isNaN(p) ? 0 : p }
                    var q = e.paddingLeft + e.paddingRight,
                        r = e.paddingTop + e.paddingBottom,
                        s = e.marginLeft + e.marginRight,
                        t = e.marginTop + e.marginBottom,
                        u = e.borderLeftWidth + e.borderRightWidth,
                        v = e.borderTopWidth + e.borderBottomWidth,
                        w = k && i,
                        x = b(d.width);
                    x !== !1 && (e.width = x + (w ? 0 : q + u));
                    var y = b(d.height);
                    return y !== !1 && (e.height = y + (w ? 0 : r + v)), e.innerWidth = e.width - (q + u), e.innerHeight = e.height - (r + v), e.outerWidth = e.width + s, e.outerHeight = e.height + t, e } }

            function h(a, b) {
                if (e || -1 === b.indexOf("%")) return b;
                var c = a.style,
                    d = c.left,
                    f = a.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = a.currentStyle.left), c.left = b, b = c.pixelLeft, c.left = d, g && (f.left = g), b }
            var i, j = a("boxSizing");
            return function() {
                if (j) {
                    var a = document.createElement("div");
                    a.style.width = "200px", a.style.padding = "1px 2px 3px 4px", a.style.borderStyle = "solid", a.style.borderWidth = "1px 2px 3px 4px", a.style[j] = "border-box";
                    var c = document.body || document.documentElement;
                    c.appendChild(a);
                    var d = f(a);
                    i = 200 === b(d.width), c.removeChild(a) } }(), d }
        var e = a.getComputedStyle,
            f = e ? function(a) {
                return e(a, null) } : function(a) {
                return a.currentStyle },
            g = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"]; "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], d) : "object" == typeof exports ? module.exports = d(require("get-style-property")) : a.getSize = d(a.getStyleProperty) }(window),
    function(a, b) {
        function c(a, b) {
            return a[h](b) }

        function d(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a) } }

        function e(a, b) { d(a);
            for (var c = a.parentNode.querySelectorAll(b), e = 0, f = c.length; f > e; e++)
                if (c[e] === a) return !0;
            return !1 }

        function f(a, b) {
            return d(a), c(a, b) }
        var g, h = function() {
            if (b.matchesSelector) return "matchesSelector";
            for (var a = ["webkit", "moz", "ms", "o"], c = 0, d = a.length; d > c; c++) {
                var e = a[c],
                    f = e + "MatchesSelector";
                if (b[f]) return f } }();
        if (h) {
            var i = document.createElement("div"),
                j = c(i, "div");
            g = j ? c : f } else g = e; "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return g }) : window.matchesSelector = g }(this, Element.prototype),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a }

        function c(a) {
            for (var b in a) return !1;
            return b = null, !0 }

        function d(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase() }) }

        function e(a, e, f) {
            function h(a, b) { a && (this.element = a, this.layout = b, this.position = { x: 0, y: 0 }, this._create()) }
            var i = f("transition"),
                j = f("transform"),
                k = i && j,
                l = !!f("perspective"),
                m = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend" }[i],
                n = ["transform", "transition", "transitionDuration", "transitionProperty"],
                o = function() {
                    for (var a = {}, b = 0, c = n.length; c > b; b++) {
                        var d = n[b],
                            e = f(d);
                        e && e !== d && (a[d] = e) }
                    return a }();
            b(h.prototype, a.prototype), h.prototype._create = function() { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, h.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a) }, h.prototype.getSize = function() { this.size = e(this.element) }, h.prototype.css = function(a) {
                var b = this.element.style;
                for (var c in a) {
                    var d = o[c] || c;
                    b[d] = a[c] } }, h.prototype.getPosition = function() {
                var a = g(this.element),
                    b = this.layout.options,
                    c = b.isOriginLeft,
                    d = b.isOriginTop,
                    e = parseInt(a[c ? "left" : "right"], 10),
                    f = parseInt(a[d ? "top" : "bottom"], 10);
                e = isNaN(e) ? 0 : e, f = isNaN(f) ? 0 : f;
                var h = this.layout.size;
                e -= c ? h.paddingLeft : h.paddingRight, f -= d ? h.paddingTop : h.paddingBottom, this.position.x = e, this.position.y = f }, h.prototype.layoutPosition = function() {
                var a = this.layout.size,
                    b = this.layout.options,
                    c = {};
                b.isOriginLeft ? (c.left = this.position.x + a.paddingLeft + "px", c.right = "") : (c.right = this.position.x + a.paddingRight + "px", c.left = ""), b.isOriginTop ? (c.top = this.position.y + a.paddingTop + "px", c.bottom = "") : (c.bottom = this.position.y + a.paddingBottom + "px", c.top = ""), this.css(c), this.emitEvent("layout", [this]) };
            var p = l ? function(a, b) {
                return "translate3d(" + a + "px, " + b + "px, 0)" } : function(a, b) {
                return "translate(" + a + "px, " + b + "px)" };
            h.prototype._transitionTo = function(a, b) { this.getPosition();
                var c = this.position.x,
                    d = this.position.y,
                    e = parseInt(a, 10),
                    f = parseInt(b, 10),
                    g = e === this.position.x && f === this.position.y;
                if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
                var h = a - c,
                    i = b - d,
                    j = {},
                    k = this.layout.options;
                h = k.isOriginLeft ? h : -h, i = k.isOriginTop ? i : -i, j.transform = p(h, i), this.transition({ to: j, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, h.prototype.goTo = function(a, b) { this.setPosition(a, b), this.layoutPosition() }, h.prototype.moveTo = k ? h.prototype._transitionTo : h.prototype.goTo, h.prototype.setPosition = function(a, b) { this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10) }, h.prototype._nonTransition = function(a) { this.css(a.to), a.isCleaning && this._removeStyles(a.to);
                for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this) }, h.prototype._transition = function(a) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
                var b = this._transn;
                for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
                for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
                if (a.from) { this.css(a.from);
                    var d = this.element.offsetHeight;
                    d = null }
                this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0 };
            var q = j && d(j) + ",opacity";
            h.prototype.enableTransition = function() { this.isTransitioning || (this.css({ transitionProperty: q, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(m, this, !1)) }, h.prototype.transition = h.prototype[i ? "_transition" : "_nonTransition"], h.prototype.onwebkitTransitionEnd = function(a) { this.ontransitionend(a) }, h.prototype.onotransitionend = function(a) { this.ontransitionend(a) };
            var r = { "-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform" };
            h.prototype.ontransitionend = function(a) {
                if (a.target === this.element) {
                    var b = this._transn,
                        d = r[a.propertyName] || a.propertyName;
                    if (delete b.ingProperties[d], c(b.ingProperties) && this.disableTransition(), d in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[d]), d in b.onEnd) {
                        var e = b.onEnd[d];
                        e.call(this), delete b.onEnd[d] }
                    this.emitEvent("transitionEnd", [this]) } }, h.prototype.disableTransition = function() { this.removeTransitionStyles(), this.element.removeEventListener(m, this, !1), this.isTransitioning = !1 }, h.prototype._removeStyles = function(a) {
                var b = {};
                for (var c in a) b[c] = "";
                this.css(b) };
            var s = { transitionProperty: "", transitionDuration: "" };
            return h.prototype.removeTransitionStyles = function() { this.css(s) }, h.prototype.removeElem = function() { this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this]) }, h.prototype.remove = function() {
                if (!i || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                var a = this;
                this.on("transitionEnd", function() {
                    return a.removeElem(), !0 }), this.hide() }, h.prototype.reveal = function() { delete this.isHidden, this.css({ display: "" });
                var a = this.layout.options;
                this.transition({ from: a.hiddenStyle, to: a.visibleStyle, isCleaning: !0 }) }, h.prototype.hide = function() { this.isHidden = !0, this.css({ display: "" });
                var a = this.layout.options;
                this.transition({ from: a.visibleStyle, to: a.hiddenStyle, isCleaning: !0, onTransitionEnd: { opacity: function() { this.isHidden && this.css({ display: "none" }) } } }) }, h.prototype.destroy = function() { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, h }
        var f = a.getComputedStyle,
            g = f ? function(a) {
                return f(a, null) } : function(a) {
                return a.currentStyle }; "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], e) : (a.Outlayer = {}, a.Outlayer.Item = e(a.EventEmitter, a.getSize, a.getStyleProperty)) }(window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a }

        function c(a) {
            return "[object Array]" === l.call(a) }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b }

        function e(a, b) {
            var c = n(b, a); - 1 !== c && b.splice(c, 1) }

        function f(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c }).toLowerCase() }

        function g(c, g, l, n, o, p) {
            function q(a, c) {
                if ("string" == typeof a && (a = h.querySelector(a)), !a || !m(a)) return void(i && i.error("Bad " + this.constructor.namespace + " element: " + a));
                this.element = a, this.options = b({}, this.constructor.defaults), this.option(c);
                var d = ++r;
                this.element.outlayerGUID = d, s[d] = this, this._create(), this.options.isInitLayout && this.layout() }
            var r = 0,
                s = {};
            return q.namespace = "outlayer", q.Item = p, q.defaults = { containerStyle: { position: "relative" }, isInitLayout: !0, isOriginLeft: !0, isOriginTop: !0, isResizeBound: !0, isResizingContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }, b(q.prototype, l.prototype), q.prototype.option = function(a) {
                b(this.options, a)
            }, q.prototype._create = function() { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), b(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize() }, q.prototype.reloadItems = function() { this.items = this._itemize(this.element.children) }, q.prototype._itemize = function(a) {
                for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                    var g = b[e],
                        h = new c(g, this);
                    d.push(h) }
                return d }, q.prototype._filterFindItemElements = function(a) { a = d(a);
                for (var b = this.options.itemSelector, c = [], e = 0, f = a.length; f > e; e++) {
                    var g = a[e];
                    if (m(g))
                        if (b) { o(g, b) && c.push(g);
                            for (var h = g.querySelectorAll(b), i = 0, j = h.length; j > i; i++) c.push(h[i]) } else c.push(g) }
                return c }, q.prototype.getItemElements = function() {
                for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
                return a }, q.prototype.layout = function() { this._resetLayout(), this._manageStamps();
                var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, a), this._isLayoutInited = !0 }, q.prototype._init = q.prototype.layout, q.prototype._resetLayout = function() { this.getSize() }, q.prototype.getSize = function() { this.size = n(this.element) }, q.prototype._getMeasurement = function(a, b) {
                var c, d = this.options[a];
                d ? ("string" == typeof d ? c = this.element.querySelector(d) : m(d) && (c = d), this[a] = c ? n(c)[b] : d) : this[a] = 0 }, q.prototype.layoutItems = function(a, b) { a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout() }, q.prototype._getItemsForLayout = function(a) {
                for (var b = [], c = 0, d = a.length; d > c; c++) {
                    var e = a[c];
                    e.isIgnored || b.push(e) }
                return b }, q.prototype._layoutItems = function(a, b) {
                function c() { d.emitEvent("layoutComplete", [d, a]) }
                var d = this;
                if (!a || !a.length) return void c();
                this._itemsOn(a, "layout", c);
                for (var e = [], f = 0, g = a.length; g > f; f++) {
                    var h = a[f],
                        i = this._getItemLayoutPosition(h);
                    i.item = h, i.isInstant = b || h.isLayoutInstant, e.push(i) }
                this._processLayoutQueue(e) }, q.prototype._getItemLayoutPosition = function() {
                return { x: 0, y: 0 } }, q.prototype._processLayoutQueue = function(a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this._positionItem(d.item, d.x, d.y, d.isInstant) } }, q.prototype._positionItem = function(a, b, c, d) { d ? a.goTo(b, c) : a.moveTo(b, c) }, q.prototype._postLayout = function() { this.resizeContainer() }, q.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var a = this._getContainerSize();
                    a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1)) } }, q.prototype._getContainerSize = k, q.prototype._setContainerMeasure = function(a, b) {
                if (void 0 !== a) {
                    var c = this.size;
                    c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px" } }, q.prototype._itemsOn = function(a, b, c) {
                function d() {
                    return e++, e === f && c.call(g), !0 }
                for (var e = 0, f = a.length, g = this, h = 0, i = a.length; i > h; h++) {
                    var j = a[h];
                    j.on(b, d) } }, q.prototype.ignore = function(a) {
                var b = this.getItem(a);
                b && (b.isIgnored = !0) }, q.prototype.unignore = function(a) {
                var b = this.getItem(a);
                b && delete b.isIgnored }, q.prototype.stamp = function(a) {
                if (a = this._find(a)) { this.stamps = this.stamps.concat(a);
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        this.ignore(d) } } }, q.prototype.unstamp = function(a) {
                if (a = this._find(a))
                    for (var b = 0, c = a.length; c > b; b++) {
                        var d = a[b];
                        e(d, this.stamps), this.unignore(d) } }, q.prototype._find = function(a) {
                return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = d(a)) : void 0 }, q.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) { this._getBoundingRect();
                    for (var a = 0, b = this.stamps.length; b > a; a++) {
                        var c = this.stamps[a];
                        this._manageStamp(c) } } }, q.prototype._getBoundingRect = function() {
                var a = this.element.getBoundingClientRect(),
                    b = this.size;
                this._boundingRect = { left: a.left + b.paddingLeft + b.borderLeftWidth, top: a.top + b.paddingTop + b.borderTopWidth, right: a.right - (b.paddingRight + b.borderRightWidth), bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth) } }, q.prototype._manageStamp = k, q.prototype._getElementOffset = function(a) {
                var b = a.getBoundingClientRect(),
                    c = this._boundingRect,
                    d = n(a),
                    e = { left: b.left - c.left - d.marginLeft, top: b.top - c.top - d.marginTop, right: c.right - b.right - d.marginRight, bottom: c.bottom - b.bottom - d.marginBottom };
                return e }, q.prototype.handleEvent = function(a) {
                var b = "on" + a.type;
                this[b] && this[b](a) }, q.prototype.bindResize = function() { this.isResizeBound || (c.bind(a, "resize", this), this.isResizeBound = !0) }, q.prototype.unbindResize = function() { this.isResizeBound && c.unbind(a, "resize", this), this.isResizeBound = !1 }, q.prototype.onresize = function() {
                function a() { b.resize(), delete b.resizeTimeout }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var b = this;
                this.resizeTimeout = setTimeout(a, 100) }, q.prototype.resize = function() { this.isResizeBound && this.needsResizeLayout() && this.layout() }, q.prototype.needsResizeLayout = function() {
                var a = n(this.element),
                    b = this.size && a;
                return b && a.innerWidth !== this.size.innerWidth }, q.prototype.addItems = function(a) {
                var b = this._itemize(a);
                return b.length && (this.items = this.items.concat(b)), b }, q.prototype.appended = function(a) {
                var b = this.addItems(a);
                b.length && (this.layoutItems(b, !0), this.reveal(b)) }, q.prototype.prepended = function(a) {
                var b = this._itemize(a);
                if (b.length) {
                    var c = this.items.slice(0);
                    this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c) } }, q.prototype.reveal = function(a) {
                var b = a && a.length;
                if (b)
                    for (var c = 0; b > c; c++) {
                        var d = a[c];
                        d.reveal() } }, q.prototype.hide = function(a) {
                var b = a && a.length;
                if (b)
                    for (var c = 0; b > c; c++) {
                        var d = a[c];
                        d.hide() } }, q.prototype.getItem = function(a) {
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    if (d.element === a) return d } }, q.prototype.getItems = function(a) {
                if (a && a.length) {
                    for (var b = [], c = 0, d = a.length; d > c; c++) {
                        var e = a[c],
                            f = this.getItem(e);
                        f && b.push(f) }
                    return b } }, q.prototype.remove = function(a) { a = d(a);
                var b = this.getItems(a);
                if (b && b.length) { this._itemsOn(b, "remove", function() { this.emitEvent("removeComplete", [this, b]) });
                    for (var c = 0, f = b.length; f > c; c++) {
                        var g = b[c];
                        g.remove(), e(g, this.items) } } }, q.prototype.destroy = function() {
                var a = this.element.style;
                a.height = "", a.position = "", a.width = "";
                for (var b = 0, c = this.items.length; c > b; b++) {
                    var d = this.items[b];
                    d.destroy() }
                this.unbindResize(), delete this.element.outlayerGUID, j && j.removeData(this.element, this.constructor.namespace) }, q.data = function(a) {
                var b = a && a.outlayerGUID;
                return b && s[b] }, q.create = function(a, c) {
                function d() { q.apply(this, arguments) }
                return Object.create ? d.prototype = Object.create(q.prototype) : b(d.prototype, q.prototype), d.prototype.constructor = d, d.defaults = b({}, q.defaults), b(d.defaults, c), d.prototype.settings = {}, d.namespace = a, d.data = q.data, d.Item = function() { p.apply(this, arguments) }, d.Item.prototype = new p, g(function() {
                    for (var b = f(a), c = h.querySelectorAll(".js-" + b), e = "data-" + b + "-options", g = 0, k = c.length; k > g; g++) {
                        var l, m = c[g],
                            n = m.getAttribute(e);
                        try { l = n && JSON.parse(n) } catch (o) { i && i.error("Error parsing " + e + " on " + m.nodeName.toLowerCase() + (m.id ? "#" + m.id : "") + ": " + o);
                            continue }
                        var p = new d(m, l);
                        j && j.data(m, a, p) } }), j && j.bridget && j.bridget(a, d), d }, q.Item = p, q
        }
        var h = a.document,
            i = a.console,
            j = a.jQuery,
            k = function() {},
            l = Object.prototype.toString,
            m = "object" == typeof HTMLElement ? function(a) {
                return a instanceof HTMLElement } : function(a) {
                return a && "object" == typeof a && 1 === a.nodeType && "string" == typeof a.nodeName },
            n = Array.prototype.indexOf ? function(a, b) {
                return a.indexOf(b) } : function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1 };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], g) : a.Outlayer = g(a.eventie, a.docReady, a.EventEmitter, a.getSize, a.matchesSelector, a.Outlayer.Item)
    }(window),
    function(a) {
        function b(a) {
            function b() { a.Item.apply(this, arguments) }
            b.prototype = new a.Item, b.prototype._create = function() { this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {} }, b.prototype.updateSortData = function() {
                if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var a = this.layout.options.getSortData,
                        b = this.layout._sorters;
                    for (var c in a) {
                        var d = b[c];
                        this.sortData[c] = d(this.element, this) } } };
            var c = b.prototype.destroy;
            return b.prototype.destroy = function() { c.apply(this, arguments), this.css({ display: "" }) }, b } "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer)) }(window),
    function(a) {
        function b(a, b) {
            function c(a) { this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size) }
            return function() {
                function a(a) {
                    return function() {
                        return b.prototype[a].apply(this.isotope, arguments) } }
                for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                    var g = d[e];
                    c.prototype[g] = a(g) } }(), c.prototype.needsVerticalResizeLayout = function() {
                var b = a(this.isotope.element),
                    c = this.isotope.size && b;
                return c && b.innerHeight !== this.isotope.size.innerHeight }, c.prototype._getMeasurement = function() { this.isotope._getMeasurement.apply(this, arguments) }, c.prototype.getColumnWidth = function() { this.getSegmentSize("column", "Width") }, c.prototype.getRowHeight = function() { this.getSegmentSize("row", "Height") }, c.prototype.getSegmentSize = function(a, b) {
                var c = a + b,
                    d = "outer" + b;
                if (this._getMeasurement(c, d), !this[c]) {
                    var e = this.getFirstItemSize();
                    this[c] = e && e[d] || this.isotope.size["inner" + b] } }, c.prototype.getFirstItemSize = function() {
                var b = this.isotope.filteredItems[0];
                return b && b.element && a(b.element) }, c.prototype.layout = function() { this.isotope.layout.apply(this.isotope, arguments) }, c.prototype.getSize = function() { this.isotope.getSize(), this.size = this.isotope.size }, c.modes = {}, c.create = function(a, b) {
                function d() { c.apply(this, arguments) }
                return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d }, c } "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer)) }(window),
    function(a) {
        function b(a, b) {
            var d = a.create("masonry");
            return d.prototype._resetLayout = function() { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var a = this.cols;
                for (this.colYs = []; a--;) this.colYs.push(0);
                this.maxY = 0 }, d.prototype.measureColumns = function() {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var a = this.items[0],
                        c = a && a.element;
                    this.columnWidth = c && b(c).outerWidth || this.containerWidth }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1) }, d.prototype.getContainerWidth = function() {
                var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                    c = b(a);
                this.containerWidth = c && c.innerWidth }, d.prototype._getItemLayoutPosition = function(a) { a.getSize();
                var b = a.size.outerWidth % this.columnWidth,
                    d = b && 1 > b ? "round" : "ceil",
                    e = Math[d](a.size.outerWidth / this.columnWidth);
                e = Math.min(e, this.cols);
                for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c(f, g), i = { x: this.columnWidth * h, y: g }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
                return i }, d.prototype._getColGroup = function(a) {
                if (2 > a) return this.colYs;
                for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                    var e = this.colYs.slice(d, d + a);
                    b[d] = Math.max.apply(Math, e) }
                return b }, d.prototype._manageStamp = function(a) {
                var c = b(a),
                    d = this._getElementOffset(a),
                    e = this.options.isOriginLeft ? d.left : d.right,
                    f = e + c.outerWidth,
                    g = Math.floor(e / this.columnWidth);
                g = Math.max(0, g);
                var h = Math.floor(f / this.columnWidth);
                h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
                for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j]) }, d.prototype._getContainerSize = function() { this.maxY = Math.max.apply(Math, this.colYs);
                var a = { height: this.maxY };
                return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a }, d.prototype._getContainerFitWidth = function() {
                for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
                return (this.cols - a) * this.columnWidth - this.gutter }, d.prototype.needsResizeLayout = function() {
                var a = this.containerWidth;
                return this.getContainerWidth(), a !== this.containerWidth }, d }
        var c = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b) } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                if (e === b) return c }
            return -1 }; "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], b) : a.Masonry = b(a.Outlayer, a.getSize) }(window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a }

        function c(a, c) {
            var d = a.create("masonry"),
                e = d.prototype._getElementOffset,
                f = d.prototype.layout,
                g = d.prototype._getMeasurement;
            b(d.prototype, c.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
            var h = d.prototype.measureColumns;
            d.prototype.measureColumns = function() { this.items = this.isotope.filteredItems, h.call(this) };
            var i = d.prototype._manageStamp;
            return d.prototype._manageStamp = function() { this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments) }, d } "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], c) : c(a.Isotope.LayoutMode, a.Masonry) }(window),
    function(a) {
        function b(a) {
            var b = a.create("fitRows");
            return b.prototype._resetLayout = function() { this.x = 0, this.y = 0, this.maxY = 0 }, b.prototype._getItemLayoutPosition = function(a) { a.getSize(), 0 !== this.x && a.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
                var b = { x: this.x, y: this.y };
                return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += a.size.outerWidth, b }, b.prototype._getContainerSize = function() {
                return { height: this.maxY } }, b } "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : b(a.Isotope.LayoutMode) }(window),
    function(a) {
        function b(a) {
            var b = a.create("vertical", { horizontalAlignment: 0 });
            return b.prototype._resetLayout = function() { this.y = 0 }, b.prototype._getItemLayoutPosition = function(a) { a.getSize();
                var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                    c = this.y;
                return this.y += a.size.outerHeight, { x: b, y: c } }, b.prototype._getContainerSize = function() {
                return { height: this.y } }, b } "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : b(a.Isotope.LayoutMode) }(window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a }

        function c(a) {
            return "[object Array]" === k.call(a) }

        function d(a) {
            var b = [];
            if (c(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var d = 0, e = a.length; e > d; d++) b.push(a[d]);
            else b.push(a);
            return b }

        function e(a, b) {
            var c = l(b, a); - 1 !== c && b.splice(c, 1) }

        function f(a, c, f, i, k) {
            function l(a, b) {
                return function(c, d) {
                    for (var e = 0, f = a.length; f > e; e++) {
                        var g = a[e],
                            h = c.sortData[g],
                            i = d.sortData[g];
                        if (h > i || i > h) {
                            var j = void 0 !== b[g] ? b[g] : b,
                                k = j ? 1 : -1;
                            return (h > i ? 1 : -1) * k } }
                    return 0 } }
            var m = a.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
            m.Item = i, m.LayoutMode = k, m.prototype._create = function() { this.itemGUID = 0, this._sorters = {}, this._getSorters(), a.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
                for (var b in k.modes) this._initLayoutMode(b) }, m.prototype.reloadItems = function() { this.itemGUID = 0, a.prototype.reloadItems.call(this) }, m.prototype._itemize = function() {
                for (var b = a.prototype._itemize.apply(this, arguments), c = 0, d = b.length; d > c; c++) {
                    var e = b[c];
                    e.id = this.itemGUID++ }
                return this._updateItemsSortData(b), b }, m.prototype._initLayoutMode = function(a) {
                var c = k.modes[a],
                    d = this.options[a] || {};
                this.options[a] = c.options ? b(c.options, d) : d, this.modes[a] = new c(this) }, m.prototype.layout = function() {
                return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout() }, m.prototype._layout = function() {
                var a = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0 }, m.prototype.arrange = function(a) { this.option(a), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout() }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() {
                var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                return this._isInstant = a, a }, m.prototype._filter = function(a) {
                function b() { l.reveal(e), l.hide(f) }
                var c = this.options.filter;
                c = c || "*";
                for (var d = [], e = [], f = [], g = this._getFilterTest(c), h = 0, i = a.length; i > h; h++) {
                    var j = a[h];
                    if (!j.isIgnored) {
                        var k = g(j);
                        k && d.push(j), k && j.isHidden ? e.push(j) : k || j.isHidden || f.push(j) } }
                var l = this;
                return this._isInstant ? this._noTransition(b) : b(), d }, m.prototype._getFilterTest = function(a) {
                return g && this.options.isJQueryFiltering ? function(b) {
                    return g(b.element).is(a) } : "function" == typeof a ? function(b) {
                    return a(b.element) } : function(b) {
                    return f(b.element, a) } }, m.prototype.updateSortData = function(a) { this._getSorters(), a = d(a);
                var b = this.getItems(a);
                b = b.length ? b : this.items, this._updateItemsSortData(b) }, m.prototype._getSorters = function() {
                var a = this.options.getSortData;
                for (var b in a) {
                    var c = a[b];
                    this._sorters[b] = n(c) } }, m.prototype._updateItemsSortData = function(a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    d.updateSortData() } };
            var n = function() {
                function a(a) {
                    if ("string" != typeof a) return a;
                    var c = h(a).split(" "),
                        d = c[0],
                        e = d.match(/^\[(.+)\]$/),
                        f = e && e[1],
                        g = b(f, d),
                        i = m.sortDataParsers[c[1]];
                    return a = i ? function(a) {
                        return a && i(g(a)) } : function(a) {
                        return a && g(a) } }

                function b(a, b) {
                    var c;
                    return c = a ? function(b) {
                        return b.getAttribute(a) } : function(a) {
                        var c = a.querySelector(b);
                        return c && j(c) } }
                return a }();
            m.sortDataParsers = { parseInt: function(a) {
                    return parseInt(a, 10) }, parseFloat: function(a) {
                    return parseFloat(a) } }, m.prototype._sort = function() {
                var a = this.options.sortBy;
                if (a) {
                    var b = [].concat.apply(a, this.sortHistory),
                        c = l(b, this.options.sortAscending);
                    this.filteredItems.sort(c), a !== this.sortHistory[0] && this.sortHistory.unshift(a) } }, m.prototype._mode = function() {
                var a = this.options.layoutMode,
                    b = this.modes[a];
                if (!b) throw Error("No layout mode: " + a);
                return b.options = this.options[a], b }, m.prototype._resetLayout = function() { a.prototype._resetLayout.call(this), this._mode()._resetLayout() }, m.prototype._getItemLayoutPosition = function(a) {
                return this._mode()._getItemLayoutPosition(a) }, m.prototype._manageStamp = function(a) { this._mode()._manageStamp(a) }, m.prototype._getContainerSize = function() {
                return this._mode()._getContainerSize() }, m.prototype.needsResizeLayout = function() {
                return this._mode().needsResizeLayout() }, m.prototype.appended = function(a) {
                var b = this.addItems(a);
                if (b.length) {
                    var c = this._filterRevealAdded(b);
                    this.filteredItems = this.filteredItems.concat(c) } }, m.prototype.prepended = function(a) {
                var b = this._itemize(a);
                if (b.length) {
                    var c = this.items.slice(0);
                    this.items = b.concat(c), this._resetLayout(), this._manageStamps();
                    var d = this._filterRevealAdded(b);
                    this.layoutItems(c), this.filteredItems = d.concat(this.filteredItems) } }, m.prototype._filterRevealAdded = function(a) {
                var b = this._noTransition(function() {
                    return this._filter(a) });
                return this.layoutItems(b, !0), this.reveal(b), a }, m.prototype.insert = function(a) {
                var b = this.addItems(a);
                if (b.length) {
                    var c, d, e = b.length;
                    for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                    var f = this._filter(b);
                    for (this._noTransition(function() { this.hide(f) }), c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                    for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                    this.reveal(f) } };
            var o = m.prototype.remove;
            return m.prototype.remove = function(a) { a = d(a);
                var b = this.getItems(a);
                if (o.call(this, a), b && b.length)
                    for (var c = 0, f = b.length; f > c; c++) {
                        var g = b[c];
                        e(g, this.filteredItems) } }, m.prototype.shuffle = function() {
                for (var a = 0, b = this.items.length; b > a; a++) {
                    var c = this.items[a];
                    c.sortData.random = Math.random() }
                this.options.sortBy = "random", this._sort(), this._layout() }, m.prototype._noTransition = function(a) {
                var b = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var c = a.call(this);
                return this.options.transitionDuration = b, c }, m.prototype.getFilteredItemElements = function() {
                for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
                return a }, m }
        var g = a.jQuery,
            h = String.prototype.trim ? function(a) {
                return a.trim() } : function(a) {
                return a.replace(/^\s+|\s+$/g, "") },
            i = document.documentElement,
            j = i.textContent ? function(a) {
                return a.textContent } : function(a) {
                return a.innerText },
            k = Object.prototype.toString,
            l = Array.prototype.indexOf ? function(a, b) {
                return a.indexOf(b) } : function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1 }; "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], f) : a.Isotope = f(a.Outlayer, a.getSize, a.matchesSelector, a.Isotope.Item, a.Isotope.LayoutMode) }(window),
    function(a) {
        function b(a) {
            return new RegExp("(^|\\s+)" + a + "(\\s+|$)") }

        function c(a, b) {
            var c = d(a, b) ? f : e;
            c(a, b) }
        var d, e, f; "classList" in document.documentElement ? (d = function(a, b) {
            return a.classList.contains(b) }, e = function(a, b) { a.classList.add(b) }, f = function(a, b) { a.classList.remove(b) }) : (d = function(a, c) {
            return b(c).test(a.className) }, e = function(a, b) { d(a, b) || (a.className = a.className + " " + b) }, f = function(a, c) { a.className = a.className.replace(b(c), " ") });
        var g = { hasClass: d, addClass: e, removeClass: f, toggleClass: c, has: d, add: e, remove: f, toggle: c }; "function" == typeof define && define.amd ? define("classie/classie", g) : "object" == typeof exports ? module.exports = g : a.classie = g }(window),
    function(a) {
        function b() {
            function a(b) {
                for (var c in a.defaults) this[c] = a.defaults[c];
                for (c in b) this[c] = b[c] }
            return c.Rect = a, a.defaults = { x: 0, y: 0, width: 0, height: 0 }, a.prototype.contains = function(a) {
                var b = a.width || 0,
                    c = a.height || 0;
                return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c }, a.prototype.overlaps = function(a) {
                var b = this.x + this.width,
                    c = this.y + this.height,
                    d = a.x + a.width,
                    e = a.y + a.height;
                return this.x < d && b > a.x && this.y < e && c > a.y }, a.prototype.getMaximalFreeRects = function(b) {
                if (!this.overlaps(b)) return !1;
                var c, d = [],
                    e = this.x + this.width,
                    f = this.y + this.height,
                    g = b.x + b.width,
                    h = b.y + b.height;
                return this.y < b.y && (c = new a({ x: this.x, y: this.y, width: this.width, height: b.y - this.y }), d.push(c)), e > g && (c = new a({ x: g, y: this.y, width: e - g, height: this.height }), d.push(c)), f > h && (c = new a({ x: this.x, y: h, width: this.width, height: f - h }), d.push(c)), this.x < b.x && (c = new a({ x: this.x, y: this.y, width: b.x - this.x, height: this.height }), d.push(c)), d }, a.prototype.canFit = function(a) {
                return this.width >= a.width && this.height >= a.height }, a }
        var c = a.Packery = function() {}; "function" == typeof define && define.amd ? define("packery/js/rect", b) : (a.Packery = a.Packery || {}, a.Packery.Rect = b()) }(window),
    function(a) {
        function b(a) {
            function b(a, b, c) { this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset() }
            b.prototype.reset = function() { this.spaces = [], this.newSpaces = [];
                var b = new a({ x: 0, y: 0, width: this.width, height: this.height });
                this.spaces.push(b), this.sorter = c[this.sortDirection] || c.downwardLeftToRight }, b.prototype.pack = function(a) {
                for (var b = 0, c = this.spaces.length; c > b; b++) {
                    var d = this.spaces[b];
                    if (d.canFit(a)) { this.placeInSpace(a, d);
                        break } } }, b.prototype.placeInSpace = function(a, b) { a.x = b.x, a.y = b.y, this.placed(a) }, b.prototype.placed = function(a) {
                for (var c = [], d = 0, e = this.spaces.length; e > d; d++) {
                    var f = this.spaces[d],
                        g = f.getMaximalFreeRects(a);
                    g ? c.push.apply(c, g) : c.push(f) }
                this.spaces = c, b.mergeRects(this.spaces), this.spaces.sort(this.sorter) }, b.mergeRects = function(a) {
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    if (d) {
                        var e = a.slice(0);
                        e.splice(b, 1);
                        for (var f = 0, g = 0, h = e.length; h > g; g++) {
                            var i = e[g],
                                j = b > g ? 0 : 1;
                            d.contains(i) && (a.splice(g + j - f, 1), f++) } } }
                return a };
            var c = { downwardLeftToRight: function(a, b) {
                    return a.y - b.y || a.x - b.x }, rightwardTopToBottom: function(a, b) {
                    return a.x - b.x || a.y - b.y } };
            return b }
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b);
        else {
            var c = a.Packery = a.Packery || {};
            c.Packer = b(c.Rect) } }(window),
    function(a) {
        function b(a, b, c) {
            var d = a("transform"),
                e = function() { b.Item.apply(this, arguments) };
            e.prototype = new b.Item;
            var f = e.prototype._create;
            return e.prototype._create = function() { f.call(this), this.rect = new c, this.placeRect = new c }, e.prototype.dragStart = function() { this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1 }, e.prototype.dragMove = function(a, b) { this.didDrag = !0;
                var c = this.layout.size;
                a -= c.paddingLeft, b -= c.paddingTop, this.positionPlaceRect(a, b) }, e.prototype.dragStop = function() { this.getPosition();
                var a = this.position.x !== this.placeRect.x,
                    b = this.position.y !== this.placeRect.y;
                this.needsPositioning = a || b, this.didDrag = !1 }, e.prototype.positionPlaceRect = function(a, b, c) { this.placeRect.x = this.getPlaceRectCoord(a, !0), this.placeRect.y = this.getPlaceRectCoord(b, !1, c) }, e.prototype.getPlaceRectCoord = function(a, b, c) {
                var d = b ? "Width" : "Height",
                    e = this.size["outer" + d],
                    f = this.layout[b ? "columnWidth" : "rowHeight"],
                    g = this.layout.size["inner" + d];
                b || (g = Math.max(g, this.layout.maxY), this.layout.rowHeight || (g -= this.layout.gutter));
                var h;
                if (f) { f += this.layout.gutter, g += b ? this.layout.gutter : 0, a = Math.round(a / f);
                    var i;
                    i = this.layout.options.isHorizontal ? b ? "ceil" : "floor" : b ? "floor" : "ceil";
                    var j = Math[i](g / f);
                    j -= Math.ceil(e / f), h = j } else h = g - e;
                return a = c ? a : Math.min(a, h), a *= f || 1, Math.max(0, a) }, e.prototype.copyPlaceRectPosition = function() { this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y }, e } "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], b) : a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect) }(window),
    function(a) {
        function b(a, b, c, d, e, f) {
            function g(a, b) {
                return a.position.y - b.position.y || a.position.x - b.position.x }

            function h(a, b) {
                return a.position.x - b.position.x || a.position.y - b.position.y }
            var i = c.create("packery");
            return i.Item = f, i.prototype._create = function() { c.prototype._create.call(this), this.packer = new e, this.stamp(this.options.stamped);
                var a = this;
                this.handleDraggabilly = { dragStart: function(b) { a.itemDragStart(b.element) }, dragMove: function(b) { a.itemDragMove(b.element, b.position.x, b.position.y) }, dragEnd: function(b) { a.itemDragEnd(b.element) } }, this.handleUIDraggable = { start: function(b) { a.itemDragStart(b.currentTarget) }, drag: function(b, c) { a.itemDragMove(b.currentTarget, c.position.left, c.position.top) }, stop: function(b) { a.itemDragEnd(b.currentTarget) } } }, i.prototype._resetLayout = function() { this.getSize(), this._getMeasurements();
                var a = this.packer;
                this.options.isHorizontal ? (a.width = Number.POSITIVE_INFINITY, a.height = this.size.innerHeight + this.gutter, a.sortDirection = "rightwardTopToBottom") : (a.width = this.size.innerWidth + this.gutter, a.height = Number.POSITIVE_INFINITY, a.sortDirection = "downwardLeftToRight"), a.reset(), this.maxY = 0, this.maxX = 0 }, i.prototype._getMeasurements = function() { this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width") }, i.prototype._getItemLayoutPosition = function(a) {
                return this._packItem(a), a.rect }, i.prototype._packItem = function(a) { this._setRectSize(a.element, a.rect), this.packer.pack(a.rect), this._setMaxXY(a.rect) }, i.prototype._setMaxXY = function(a) { this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY) }, i.prototype._setRectSize = function(a, c) {
                var d = b(a),
                    e = d.outerWidth,
                    f = d.outerHeight,
                    g = this.columnWidth + this.gutter,
                    h = this.rowHeight + this.gutter;
                e = this.columnWidth ? Math.ceil(e / g) * g : e + this.gutter, f = this.rowHeight ? Math.ceil(f / h) * h : f + this.gutter, c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height) }, i.prototype._getContainerSize = function() {
                return this.options.isHorizontal ? { width: this.maxX - this.gutter } : { height: this.maxY - this.gutter } }, i.prototype._manageStamp = function(a) {
                var b, c = this.getItem(a);
                if (c && c.isPlacing) b = c.placeRect;
                else {
                    var e = this._getElementOffset(a);
                    b = new d({ x: this.options.isOriginLeft ? e.left : e.right, y: this.options.isOriginTop ? e.top : e.bottom }) }
                this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b) }, i.prototype.sortItemsByPosition = function() {
                var a = this.options.isHorizontal ? h : g;
                this.items.sort(a) }, i.prototype.fit = function(a, b, c) {
                var d = this.getItem(a);
                d && (this._getMeasurements(), this.stamp(d.element), d.getSize(), d.isPlacing = !0, b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, d.positionPlaceRect(b, c, !0), this._bindFitEvents(d), d.moveTo(d.placeRect.x, d.placeRect.y), this.layout(), this.unstamp(d.element), this.sortItemsByPosition(), d.isPlacing = !1, d.copyPlaceRectPosition()) }, i.prototype._bindFitEvents = function(a) {
                function b() { d++, 2 === d && c.emitEvent("fitComplete", [c, a]) }
                var c = this,
                    d = 0;
                a.on("layout", function() {
                    return b(), !0 }), this.on("layoutComplete", function() {
                    return b(), !0 }) }, i.prototype.resize = function() {
                var a = b(this.element),
                    c = this.size && a,
                    d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
                c && a[d] === this.size[d] || this.layout() }, i.prototype.itemDragStart = function(a) { this.stamp(a);
                var b = this.getItem(a);
                b && b.dragStart() }, i.prototype.itemDragMove = function(a, b, c) {
                function d() { f.layout(), delete f.dragTimeout }
                var e = this.getItem(a);
                e && e.dragMove(b, c);
                var f = this;
                this.clearDragTimeout(), this.dragTimeout = setTimeout(d, 40) }, i.prototype.clearDragTimeout = function() { this.dragTimeout && clearTimeout(this.dragTimeout) }, i.prototype.itemDragEnd = function(b) {
                var c, d = this.getItem(b);
                if (d && (c = d.didDrag, d.dragStop()), !d || !c && !d.needsPositioning) return void this.unstamp(b);
                a.add(d.element, "is-positioning-post-drag");
                var e = this._getDragEndLayoutComplete(b, d);
                d.needsPositioning ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y)) : d && d.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", e), this.layout() }, i.prototype._getDragEndLayoutComplete = function(b, c) {
                var d = c && c.needsPositioning,
                    e = 0,
                    f = d ? 2 : 1,
                    g = this;
                return function() {
                    return e++, e !== f ? !0 : (c && (a.remove(c.element, "is-positioning-post-drag"), c.isPlacing = !1, c.copyPlaceRectPosition()), g.unstamp(b), g.sortItemsByPosition(), d && g.emitEvent("dragItemPositioned", [g, c]), !0) } }, i.prototype.bindDraggabillyEvents = function(a) { a.on("dragStart", this.handleDraggabilly.dragStart), a.on("dragMove", this.handleDraggabilly.dragMove), a.on("dragEnd", this.handleDraggabilly.dragEnd) }, i.prototype.bindUIDraggableEvents = function(a) { a.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop) }, i.Rect = d, i.Packer = e, i } "function" == typeof define && define.amd ? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : a.Packery = b(a.classie, a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item) }(window),
    function(a) {
        function b(a, b) {
            for (var c in b) a[c] = b[c];
            return a }

        function c(a, c, d) {
            var e = a.create("packery"),
                f = e.prototype._getElementOffset,
                g = e.prototype._getMeasurement;
            b(e.prototype, c.prototype), e.prototype._getElementOffset = f, e.prototype._getMeasurement = g;
            var h = e.prototype._resetLayout;
            e.prototype._resetLayout = function() { this.packer = this.packer || new c.Packer, h.apply(this, arguments) };
            var i = e.prototype._getItemLayoutPosition;
            e.prototype._getItemLayoutPosition = function(a) {
                return a.rect = a.rect || new c.Rect, i.call(this, a) };
            var j = e.prototype._manageStamp;
            return e.prototype._manageStamp = function() { this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, j.apply(this, arguments) }, e.prototype.needsResizeLayout = function() {
                var a = d(this.element),
                    b = this.size && a,
                    c = this.options.isHorizontal ? "innerHeight" : "innerWidth";
                return b && a[c] !== this.size[c] }, e } "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], c) : c(a.Isotope.LayoutMode, a.Packery, a.getSize) }(window), Constants = { Layout: { MQ_MXWD_768: "only screen and (max-width : 768px)", DATA_LAYOUT_HRZ: "horizontal", DATA_LAYOUT_VER: "vertical", GRID_SIZER_SEL: ".grid-sizer", TILE_ITEM_SEL: ".item", TILE_LAYER_SEL: ".item .layer", MOB_SEC_NAV_SEL: ".mob-sec-nav", NAV_EXPND: "expanded" } },
    function(a, b, c, d) {
        var a = function(a) {
            this.loaderContext = "", this.errorContext = "", this.url = "", this.message = "<div>Server encountered error, please reload the page or try again after some time</div>", this.loaderSel = ".loader.overlay", a && (this.loaderContext = a.loaderContext, this.errorContext = a.errorContext, this.url = a.url);
            var b = this;
            c.ajaxSetup({ dataType: "json", cache: !1, headers: { "Cache-Control": "no-cache" }, timeout: 6e4, error: function() { b.loaderContext.find(b.loaderSel).hide(), b.errorContext.html(b.message).show() } })
        };
        a.prototype.makeRequest = function(a, b) { a.loaderContext != d && (this.loaderContext = a.loaderContext), a.url != d && (this.url = a.url), a.contentType != d && c.ajaxSetup({ contentType: a.contentType, dataType: "html" }), this.errorContext.html("").hide(), this.loaderContext.find(this.loaderSel).show();
            var e = c.ajax({ type: a.method, url: this.url, data: a.data }),
                f = this;
            e.done(function(a) { f.loaderContext.find(f.loaderSel).hide(), "application/json" == a.contentType ? a.content || a.error || a.success ? b.handleResponse(a) : f.errorContext.html(f.message).show() : (b.handleResponse(a), PepUniApp.GlobalSearch.getSessionId(a)) }) }, window.AjaxHelper = a
    }(window, document, jQuery),
    function(a, b, c, d) {
        var e = {};
        a.PepUniApp = e, e.Constants = Constants, e.Layout = { CONST: e.Constants.Layout, initTouchStates: function(a, d, e) { c(b).on("touchstart", a, function() { c(this).parent().find(d).addClass(e) }), c(b).on("touchend", a, function() { c(this).parent().find(d).removeClass(e) }), c(b).on("touchmove", a, function() { c(this).parent().find(d).removeClass(e) }), c(b).on("mouseenter", a, function() { c(this).parent().find(d).addClass(e) }), c(b).on("mouseleave", a, function() { c(this).parent().find(d).removeClass(e) }) }, toggleHrScroll: function(a) { a ? (c(".wrapper").mousewheel(function(a, b) { this.scrollLeft -= 60 * b, this.scrollLeft > 0 && !c(".aside").hasClass("collapsed") ? e.Layout.toggleSecMenu(!0) : 0 == this.scrollLeft && e.Layout.toggleSecMenu(!1), a.preventDefault() }), c(".wrapper").on("touchmove", function(a) {
                    var b = a.currentTarget.scrollLeft;
                    b > 0 && !c(".aside").hasClass("collapsed") && e.Layout.toggleSecMenu(!0) }), c(".wrapper").on("scroll", function(a) {
                    var b = a.currentTarget.scrollLeft;
                    0 == b && e.Layout.toggleSecMenu(!1) })) : (c(".wrapper").unbind("mousewheel"), c(".wrapper").unbind("touchmove")) }, isTouchDevice: function() {
                return "ontouchstart" in a || !!navigator.msMaxTouchPoints }, initScrollMark: function() {
                var b = c(".wrapper"),
                    e = c(".packery"),
                    f = c(".scroll-mark"),
                    g = (c(a).width(), this);
                (this.isTouchDevice() == d || 0 == this.isTouchDevice()) && (this.toggleScrollArrow(), b.scroll(function() { g.toggleScrollArrow() }), f.on("click", function() { c(this).hasClass("left") ? b.scrollLeft() > 0 && b.animate({ scrollLeft: b.scrollLeft() - 500 }, { duration: 500, complete: function() { g.toggleScrollArrow() } }) : c(this).hasClass("right") && b.scrollLeft() + b.width() < e.width() && b.animate({ scrollLeft: b.scrollLeft() + 500 }, { duration: 500, complete: function() { g.toggleScrollArrow() } }) })) }, toggleScrollArrow: function() {
                var a = c(".wrapper"),
                    b = c(".packery"),
                    d = c(".scroll-mark.left"),
                    e = c(".scroll-mark.right"),
                    f = a.scrollLeft(),
                    g = a.scrollLeft() + a.width();
                f > 0 && g < b.width() ? (d.show().addClass("hover").find("span.arrow").show(), e.show().addClass("hover").find("span.arrow").show()) : f > 0 ? (d.show().addClass("hover").find("span.arrow").show(), e.hide().removeClass("hover").find("span.arrow").hide()) : (d.hide().removeClass("hover").find("span.arrow").hide(), e.show().addClass("hover").find("span.arrow").show()) }, setScrollRegion: function() {
                try {
                    var b = a.matchMedia("only screen and (min-width : 769px)");
                    b.matches && (c(".packery").css("height", c(a).height() - c(".visible-header").height() - 10), c(".clipper").css("height", c(a).height() - c(".visible-header").height() - 10), c(".aside").css("height", c(a).height() - c(".visible-header").height() - 10)) } catch (d) { c(".packery").css("height", c(a).height() - c(".visible-header").height() - 10), c(".clipper").css("height", c(a).height() - c(".visible-header").height() - 10), c(".aside").css("height", c(a).height() - c(".visible-header").height() - 20) } }, initTileScale: function() {
                try {
                    var b = a.matchMedia("only screen and (max-width : 768px)");
                    b.matches && c(".item").css("height", c(".grid-sizer").width()) } catch (d) { c(".item").css("height", c(".grid-sizer").width()) } }, initMenuToggle: function(a) {
                var f;
                f = a !== d ? a : ".clipper", c(".aside span.toggle-menu").on("click", function() { c(this).hasClass("expanded") ? e.Layout.toggleSecMenu(!0, f) : e.Layout.toggleSecMenu(!1, f) }), c(".aside #sn_key, .aside #sn_school").on("click", function() { c(this).find(".hidden-lndsc").length > 0 ? e.Layout.toggleSecMenu(!1, f) : c("li#sn_schools_list").slideToggle(function() { e.Layout.setSecNavHeight() }) }), c(b).on("click", ".aside.sec-nav.collapsed li", function(a) { a.preventDefault(), c(this).find(".hidden-lndsc").length > 0 && e.Layout.toggleSecMenu(!1, f) }), c(".mob-sec-nav .nav-mark").on("click", function() { c(".aside").slideToggle(function() { e.Layout.setSecNavHeight() }), c(".mob-sec-nav").toggleClass("expanded") }) }, setSecNavHeight: function() {
                try {
                    var b = a.innerHeight ? a.innerHeight : c(a).height(),
                        d = c(".aside"),
                        e = a.matchMedia("only screen and (max-width : 768px)");
                    d.height(""), d.height() >= b - 100 && d.height(e.matches ? b - 100 : b - c(".visible-header").height()) } catch (f) {} }, toggleSecMenu: function(a, b) {
                var e, f = c(".aside");
                e = c(b !== d ? b : ".clipper"), f.length > 0 && a ? (f.addClass("collapsed"), e.css("padding-left", "62px"), f.find("span.toggle-menu").removeClass("expanded"), f.find("ul li a>span").addClass("hidden-lndsc"), f.find("li.sec-sub-nav").css("display", "").addClass("hidden-lndsc"), c(".scroll-mark.left").css("left", "62px")) : f.length > 0 && !a && (f.removeClass("collapsed"), e.css("padding-left", "205px"), f.find("span.toggle-menu").addClass("expanded"), f.find("ul li a>span").removeClass("hidden-lndsc"), f.find("li.sec-sub-nav").removeClass("hidden-lndsc"), c(".scroll-mark.left").css("left", "205px")) }, resetSecMenu: function(a) {
                var b = c("#main_content .packery"),
                    d = "#main_content",
                    f = !0;
                a.matches ? (c(d).css("padding-left", "18px"), c(".mob-sec-nav").removeClass("expanded"), c(".aside.sec-nav").removeClass("collapsed"), c(".aside.sec-nav").find("ul li a>span").removeClass("hidden-lndsc")) : (b.length > 0 && (f = !1), c(".aside").css("display", ""), e.Layout.toggleSecMenu(f, d)) }, initIsotope: function(b) { c("body").addClass("dark-bg");
                var f = !1,
                    g = c(".packery"),
                    h = !1;
                if ("horizontal" == b ? (c(".aside").css("display", ""), f = !0, h = !0, e.Layout.setScrollRegion()) : (e.Layout.toggleHrScroll(!1), c(".clipper").css("height", ""), c(a).off("resize", e.Layout.setScrollRegion), e.Layout.initTileScale()), c("html").hasClass("ie8")) {
                    var i = g.height(),
                        j = i / 4;
                    140 > j ? g.attr("id", "display_small") : 160 > j ? g.attr("id", "display_medium") : 180 > j ? g.attr("id", "display_square") : 210 > j ? g.attr("id", "display_large") : g.attr("id", "display_xlarge") }
                g.isotope({ itemSelector: ".item", layoutMode: "packery", packery: { columnWidth: ".grid-sizer", isHorizontal: f, isResizeBound: !0 }, getSortData: { order: "[data-order] parseInt" }, sortBy: "order" }), "horizontal" == b ? (e.Layout.toggleHrScroll(!0), e.Layout.initScrollMark(), !c("html").hasClass("ie8") && !a.location.hash || 0 != this.isTouchDevice() && this.isTouchDevice() != d || c(".wrapper").css("overflow-x", "hidden"), c(a).on("resize", e.Layout.setScrollRegion)) : g.isotope("reloadItems"), c(a).on("resize", function() { g.isotope("reloadItems") }) }, handleMediaChange: function(b) {
                var d = c(e.Layout.CONST.TILE_ITEM_SEL);
                b.matches ? (d.css("height", c(e.Layout.CONST.GRID_SIZER_SEL).width()), c(e.Layout.MOB_SEC_NAV_SEL).removeClass(e.Layout.CONST.NAV_EXPND), c(a).on("resize", e.Layout.initTileScale), e.Layout.initIsotope(e.Layout.CONST.DATA_LAYOUT_VER)) : (c(a).off("resize", e.Layout.initTileScale), d.css("height", ""), e.Layout.initIsotope(e.Layout.CONST.DATA_LAYOUT_HRZ)) } }, e.VideoHelper = { init: function() { this.rootPath = location.protocol + "//" + location.host;
                var a = this;
                this.videoTile = c(".packery .item a.video-tile"), this.videoOverlay = c(".video.overlay"), this.videoPlayer = this.videoOverlay.find("#video_player"), this.videoTile.on("click", function(b) { b.preventDefault(), a.videoOverlay.show(), a.playVideo(c(this).attr("data-source"), c(this).attr("data-frame")) }), this.videoOverlay.find("span.video-close").on("click", function() { a.closeOverlay() }) }, playVideo: function(a, b) { a !== d && "" !== a && (a = c.trim(a)), b !== d && "" !== b && (b = c.trim(b)), sourcePath = this.rootPath + a, framePath = this.rootPath + b, jwplayer("video_player").setup({ file: sourcePath, image: b, height: "100%", width: "100%", autostart: !0, analytics: { enabled: !1, cookies: !1 }, primary: "flash" }), jwplayer().onReady(function() { c("video").attr("crossorigin", "use-credentials") }), jwplayer().play(!1) }, closeOverlay: function() { jwplayer().play(!1), this.videoOverlay.hide() } } }(window, document, jQuery),
    function(a, b, c, d) { PepUniApp.PrimaryNav = { init: function() { this.top_left_navigation = c(".top-left-navigation"), this.expand_header_icon = c(".expand-header"), c(".secondary-navigation").length < 1 && c(".hspacer").css("padding-top", "60px"), PepUniApp.PrimaryNav.resizeHeader(), PepUniApp.PrimaryNav.select_primary_menu("#" + this.top_left_navigation.find("li:nth-child(2)").attr("id"));
                try { a.matchMedia("screen and (max-width: 768px)").matches && (this.top_left_navigation.find("li.active").removeClass("active").addClass("mobile-active"), this.top_left_navigation.find("li").removeClass("active")) } catch (b) {}
                c(".back-to-primary").on("click", function() {
                    var a = c(".top-left-navigation");
                    c("#primary_navigation").animate({ marginRight: "-100%" }, 500), a.animate({ width: "100%" }, 500), a.find("li.active").removeClass("active").addClass("mobile-active") }), this.top_left_navigation.find("li").on("click", function() {
                    if ("mnu_home" != c(this).attr("id")) { PepUniApp.PrimaryNav.select_primary_menu(c(this));
                        try { a.matchMedia("screen and (max-width: 768px)").matches && c(".top-left-navigation").animate({ width: "0%" }, 500) } catch (b) {} }
                    history.pushState({}, "", c(this).find("a.bookMark").attr("href")) }), c(".shortcut-to-primary").on("click", function() { PepUniApp.PrimaryNav.select_primary_menu(c(this).attr("href")), c(".expand-icon").addClass("shortcut-click"), c(".expand-icon").click();
                    try { a.matchMedia("screen and (max-width: 768px)").matches && c(".top-left-navigation").css({ width: "0%" }) } catch (b) {} }), PepUniApp.PrimaryNav.windowResize(), PepUniApp.PrimaryNav.linkTouch(), PepUniApp.PrimaryNav.primaryNavIconsClick() }, select_primary_menu: function(b) { c("#primary_navigation.top-right-container>div").hide(), c("#" + c(b).attr("primary-data-section")).show(), this.top_left_navigation.find("li").removeClass("active mobile-active"), c(b).addClass("active");
                try { a.matchMedia("screen and (max-width: 768px)").matches && (this.top_left_navigation.find("li.active").removeClass("active").addClass("mobile-active"), this.top_left_navigation.find("li").removeClass("active")) } catch (d) {} }, initTouchStates: function(a, d) { c(b).on("touchstart", a, function() { c(this).addClass(d) }), c(b).on("touchend", a, function() { c(this).removeClass(d) }), c(b).on("touchmove", a, function() { c(this).removeClass(d) }) }, linkTouch: function() { PepUniApp.PrimaryNav.initTouchStates(".top-left-navigation li", "active"), PepUniApp.PrimaryNav.initTouchStates(".expand-icon", "change-color") }, primaryNavIconsClick: function() {
                var a = this;
                this.expand_header_icon.on("click", function() { PepUniApp.UserProfile.resetValue(), c(this).toggleClass("selected"), c(".expand-header.selected").length < 2 ? PepUniApp.PrimaryNav.slideHeader() : (a.expand_header_icon.removeClass("selected"), c(this).addClass("selected"), PepUniApp.PrimaryNav.select_primary_menu("#" + a.top_left_navigation.find("li:nth-child(2)").attr("id"))), c(".top-left-navigation,.top-right-container").hide(), c(".expand-icon").hasClass("shortcut-click") ? history.pushState({}, "", c(".top-left-navigation ul li.active").find("a").attr("href")) : "primary-nav" == c(this).attr("data-header-content") && history.pushState({}, "", "?tab=progress"), c("." + c(this).attr("data-header-content")).show(), PepUniApp.GlobalSearch.toggleSearch(!1) }) }, slideHeader: function() {
                var a = this;
                c(".head_container").slideToggle(function() { PepUniApp.PrimaryNav.resizeHeader(), c(".expand-icon").hasClass("shortcut-click") ? c(".expand-icon").removeClass("shortcut-click") : PepUniApp.PrimaryNav.select_primary_menu("#" + a.top_left_navigation.find("li:nth-child(2)").attr("id")) }) }, setWidthAsWindow: function(a, b) { c(a).width(b) }, setHeightAsWindow: function(a, b) { c(a).height(b) }, setContainerWidth: function() {
                var a = c("body").innerWidth();
                PepUniApp.PrimaryNav.setWidthAsWindow(".head_container", a), PepUniApp.PrimaryNav.setWidthAsWindow(".visible-header", a), PepUniApp.PrimaryNav.setWidthAsWindow(".back-to-primary", a) }, setContainerHeight: function() {
                var b = a.innerHeight ? a.innerHeight : c(a).height();
                PepUniApp.PrimaryNav.setHeightAsWindow(".top-left-navigation", b - 63), PepUniApp.PrimaryNav.setHeightAsWindow(".top-right-container", b - 83);
                try { a.matchMedia("screen and (max-width: 768px)").matches ? c(".assignment").css({ height: "auto" }) : PepUniApp.PrimaryNav.setHeightAsWindow(".assignment", b - 83) } catch (d) { PepUniApp.PrimaryNav.setHeightAsWindow(".assignment", b - 83) }
                PepUniApp.Layout.setSecNavHeight() }, windowResize: function() {
                var b = this;
                c(a).resize(function() { PepUniApp.PrimaryNav.resizeHeader();
                    try { a.matchMedia("screen and (max-width: 768px)").matches ? (b.top_left_navigation.width("100%"), b.top_left_navigation.find("li.active").removeClass("active").addClass("mobile-active")) : (b.top_left_navigation.width(241), c("#primary_navigation").css("margin-right", ""), c(".mobile-active").removeClass("mobile-active").addClass("active")) } catch (d) {} }) }, resizeHeader: function() { PepUniApp.PrimaryNav.setContainerHeight() }, drawChart: function(b, e) {
                var f = [],
                    g = [];
                if (b !== d && b.length > 0 && (f = b), e !== d && e.length > 0 && (g = e), f.length === g.length) {
                    if (c("html").hasClass("ie8")) Chart.defaults.global.showTooltips = !1, c.each(g, function(a) { g[a] = "\n" + f[a] + "\n" + g[a] });
                    else { c(".learningHours canvas").remove();
                        var h = c("<canvas/>", { id: "myChart" }).height(100);
                        c(".learningHours").append(h), c("#myChart").css("height", "auto !important"), c("#myChart").attr("width", c(a).width() / 2.5), c("#myChart").css("max-width", c(a).width() / 2.5), Chart.defaults.global.responsive = !1 }
                    Chart.defaults.global.animation = !1, Chart.defaults.global.scaleShowLabels = !1, Chart.defaults.global.tooltipTemplate = "<%= value %>"; {
                        var i = { labels: g, datasets: [{ label: "My Second dataset", fillColor: "rgba(151,187,205,0)", strokeColor: "rgba(247,147,32,1) ", pointColor: "rgba(247,147,32,1) ", pointStrokeColor: "#fff", pointHighlightFill: "#fff", pointHighlightStroke: "rgba(151,187,205,1)", data: f }] },
                            j = c("#myChart").get(0).getContext("2d");
                        new Chart(j).Line(i, { bezierCurve: !1 }) } } }, primaryLoadPage: function() {
                var b = PepUniApp.PrimaryNav.getUrlParameter("tab");
                if ("progress" == b || "college" == b || "leadership" == b || "resources" == b || "sharing" == b) { PepUniApp.PrimaryNav.select_primary_menu("#mnu_" + b), c(".expand-icon").addClass("selected"), c(".head_container").slideToggle();
                    try { a.matchMedia("screen and (max-width: 768px)").matches && this.top_left_navigation.css({ width: "0%" }) } catch (d) {} } else PepUniApp.PrimaryNav.select_primary_menu("#" + this.top_left_navigation.find("li:nth-child(2)").attr("id")) }, getUrlParameter: function(b) {
                var c, e, f = decodeURIComponent(a.location.search.substring(1)),
                    g = f.split("&");
                for (e = 0; e < g.length; e++)
                    if (c = g[e].split("="), c[0] === b) return c[1] === d ? !0 : c[1];
                return !1 } } }(window, document, jQuery),
    function(a, b, c) { PepUniApp.UserProfile = { init: function() {
                var a = this;
                PepUniApp.UserProfile.checkUncheckRadio(), PepUniApp.UserProfile.disableEnableRadioBtn(), PepUniApp.UserProfile.checkUncheckLangRadio(), PepUniApp.UserProfile.disableEnableLangRadioBtn();
                var d = 0,
                    e = 0,
                    f = 0;
                this.prf_pmry_radio.each(function() { c(this).is(":checked") && (d = e), e++ }), global_var = [], global_var.push(d), this.prf_sec_checkbox.each(function() { c(this).is(":checked") && global_var.push(f), f++ }), init_disabled = [];
                var g = 0;
                this.prf_sec_checkbox.each(function() { c(this).is(":disabled") && init_disabled.push(g), g++ }), PepUniApp.UserProfile.deselectCheckbox(global_var[0]), PepUniApp.UserProfile.checkUncheckCheckboxes(), this.prf_pmry_radio.on("click", function() { PepUniApp.UserProfile.checkUncheckRadio(), a.profile_secondary_college.find("div").show(), PepUniApp.UserProfile.deselectCheckbox(a.profile_primary_college.find("input:radio[name=selectedCategories]").index(this)), PepUniApp.HomePersonalization.enableCheckboxes(a.profile_secondary_college), PepUniApp.UserProfile.disableCheckboxes(), PepUniApp.UserProfile.disableEnableCheckboxes() }), this.prf_lang_radio.on("click", function() { PepUniApp.UserProfile.checkUncheckLangRadio() }), this.prf_sec_checkbox.on("click", function() {
                    var b = a.profile_secondary_college.find('input[type="checkbox"]:checked').length;
                    3 >= b && PepUniApp.UserProfile.checkUncheckCheckboxes(), PepUniApp.HomePersonalization.disableCheckboxes(a.profile_secondary_college), PepUniApp.HomePersonalization.enableCheckboxes(a.profile_secondary_college), PepUniApp.UserProfile.disableCheckboxes(), PepUniApp.UserProfile.disableEnableCheckboxes() }), c(b).on("click", ".info-modal .close.profile-close", function() { c(".info-modal .close").removeClass("profile-close"), location.assign("/wps/myportal/pepsicouniversityroot/pepuhome") }), c(".info-modal .close").on("click", function() { c(".mask-top-of-mask,.info-modal").hide() });
                var h, i = { errorContext: c(".info-modal span"), loaderContext: c("body"), url: c("#frm_profile_page").attr("action") };
                h = new AjaxHelper(i), c("form#frm_profile_page").on("submit", function(b) { c(".info-modal .close").addClass("profile-close");
                    var d = c("form#frm_profile_page").serializeArray();
                    for (var e in d) "selectedCategoriesSec" == d[e].name && (d[e].name = "selectedCategories"), "selectedCategoriesLang" == d[e].name && (d[e].name = "selectedCategories");
                    reqObj = { method: "POST", data: c.param(d), contentType: "application/x-www-form-urlencoded; charset=UTF-8", url: c("form#frm_profile_page").attr("action") }, h.makeRequest(reqObj, a), b.preventDefault() }), c("#btn_logout").click(function() { PepUniApp.UserProfile.deleteCookie("isUserCategChanged"), PepUniApp.UserProfile.createIframe(), c("#profile_clickable").click() }) }, createIframe: function() {
                var a = b.createElement("iframe");
                a.src = "https://jam8.sapjam.com/auth/logout", a.scrolling = "auto", a.frameborder = "0", a.width = "0px", a.height = "0px", b.getElementById("logout").appendChild(a) }, deleteCookie: function(a) { b.cookie = escape(a) + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;" }, setValues: function(a, b, c) { this.updateSourceProfile = a, this.MOD = b, this.redirectUrl = c }, handleResponse: function() { c(".mask-top-of-mask,.info-modal,.info-modal span").show(), c(".info-modal span").html("Update <br/> Successful"), b.cookie = "isUserCategChanged=true" }, disableEnableCheckboxes: function() { this.profile_secondary_college.find('input[type="checkbox"]:disabled').parent().addClass("disabled"), this.profile_secondary_college.find('input[type="checkbox"]:not(:disabled)').parent().removeClass("disabled") }, disableEnableRadioBtn: function() { this.profile_primary_college.find('input[type="radio"]:disabled').parent().addClass("disabled"), this.profile_primary_college.find('input[type="radio"]:not(:disabled)').parent().removeClass("disabled") }, disableEnableLangRadioBtn: function() { this.profile_languages.find('input[type="radio"]:disabled').parent().addClass("disabled"), this.profile_languages.find('input[type="radio"]:not(:disabled)').parent().removeClass("disabled") }, checkUncheckCheckboxes: function() { this.profile_secondary_college.find('input[type="checkbox"]:checked').parent().addClass("selected"), this.profile_secondary_college.find('input[type="checkbox"]:not(:checked)').parent().removeClass("selected") }, deselectCheckbox: function(a) { 0 != a && (this.profile_secondary_college.find("div:eq(" + (a - 1) + ") input").prop("checked", !1).parent().removeClass("selected"), this.profile_secondary_college.find("div:eq(" + (a - 1) + ")").hide()) }, checkUncheckRadio: function() { this.profile_primary_college.find('input[type="radio"]:checked').parent().addClass("selected"), this.profile_primary_college.find('input[type="radio"]:not(:checked)').parent().removeClass("selected") }, checkUncheckLangRadio: function() { this.profile_languages.find('input[type="radio"]:checked').parent().addClass("selected"), this.profile_languages.find('input[type="radio"]:not(:checked)').parent().removeClass("selected") }, disableCheckboxes: function() {
                for (var a = 0; a < init_disabled.length; a++) this.profile_secondary_college.find("div:eq(" + init_disabled[a] + ") input").prop("disabled", !0) }, iterateCollege: function(a, b) { c(b).prop("disabled", !0), c(a).each(function(a, d) { c(b).each(function() { c(this).attr("id") === d && c(this).prop("disabled", !1) }) }) }, profileCollegeArray: function(a) {
                var b = [];
                return c(a).each(function(a, c) { b.push("pop_" + c) }), b }, setProfileArray: function(a, b, d) { this.profile_secondary_college = c("#profile_secondary_colleges"), this.profile_primary_college = c("#profile_primary_colleges"), this.profile_languages = c("#profile_languages"), this.prf_sec_checkbox = this.profile_secondary_college.find('input[type="checkbox"]'), this.prf_pmry_radio = this.profile_primary_college.find('input[type="radio"]'), this.prf_lang_radio = this.profile_languages.find('input[type="radio"]'), PepUniApp.UserProfile.iterateCollege(a, this.prf_pmry_radio), PepUniApp.UserProfile.iterateCollege(b, this.prf_sec_checkbox), PepUniApp.UserProfile.iterateCollege(d, this.prf_lang_radio), PepUniApp.UserProfile.init() }, resetValue: function() {
                var b = 1;
                for (this.prf_pmry_radio.removeAttr("checked"), this.profile_primary_college.find('input[type="radio"]:eq(' + global_var[0] + ")").prop("checked", !0), this.profile_secondary_college.find("div").show(), this.prf_sec_checkbox.removeAttr("checked"); b < global_var.length;) this.profile_secondary_college.find('input[type="checkbox"]:eq(' + global_var[b] + ")").prop("checked", !0).removeAttr("disabled"), b++;
                PepUniApp.UserProfile.deselectCheckbox(global_var[0]), 3 == this.profile_secondary_college.find('input[type="checkbox"]:checked').length ? this.profile_secondary_college.find('input[type="checkbox"]:not(:checked)').attr("disabled", "disabled") : this.prf_sec_checkbox.removeAttr("disabled"), PepUniApp.UserProfile.checkUncheckCheckboxes(), PepUniApp.UserProfile.checkUncheckRadio();
                try { a.matchMedia("screen and (max-width: 768px)").matches && (c("#primary_navigation").css({ marginRight: "-100%" }), c(".top-left-navigation").css({ width: "100%" })) } catch (d) {}
                PepUniApp.UserProfile.disableCheckboxes(), PepUniApp.UserProfile.disableEnableCheckboxes() }, checkDefaultLang: function() { this.profile_languages.find('input[type="radio"]:first').attr("checked", !0), this.profile_languages.find('input[type="radio"]:checked').parent().addClass("selected") } } }(window, document, jQuery),
    function(a, b, c) { PepUniApp.HomePersonalization = { init: function(a) {
                var d = this;
                this.secondary_college = c("#secondary_colleges"), this.primary_college = c("#dd_primary_college"), this.user_languages = c("#dd_user_languages"), this.sec_col_chbx = this.secondary_college.find('input[type="checkbox"]'), c("#txt_primary_college").val(this.primary_college.find("option:selected").text()), c("#txt_primary_college_value").val(this.primary_college.find("option:selected").val()), c("#txt_user_language").val(this.user_languages.find("option:selected").text().substring(this.user_languages.find("option:selected").text().lastIndexOf(";") + 1, this.user_languages.find("option:selected").text().length)), c("#txt_user_language_value").val(this.user_languages.find("option:selected").val()), PepUniApp.HomePersonalization.hideSelectedCollege(), PepUniApp.HomePersonalization.checkboxDisableCount(), PepUniApp.HomePersonalization.disableCheckboxes(d.secondary_college);
                var e, f = { errorContext: c(".info-modal span"), loaderContext: c("body"), url: c("#home_overlay").attr("action") };
                e = new AjaxHelper(f), c(".home-modal .close").click(function() { "noCollegesYet" == a ? (PepUniApp.UserProfile.checkDefaultLang(), reqObj = { method: "POST", data: c("form#frm_default_category").serialize(), contentType: "application/x-www-form-urlencoded; charset=UTF-8", url: c("form#frm_default_category").attr("action") }, e.makeRequest(reqObj, d)) : "noLanguagesYet" == a && (PepUniApp.UserProfile.checkDefaultLang(), reqObj = { method: "POST", data: c("form#frm_default_category_with_lang").serialize(), contentType: "application/x-www-form-urlencoded; charset=UTF-8", url: c("form#frm_default_category_with_lang").attr("action") }, e.makeRequest(reqObj, d)) }), c("#btn_profile_submit").on("click", function() { b.cookie = "isUserCategChanged=true" }), this.sec_col_chbx.on("click", function() { PepUniApp.HomePersonalization.disableCheckboxes(d.secondary_college), PepUniApp.HomePersonalization.enableCheckboxes(d.secondary_college), PepUniApp.HomePersonalization.disableInitCheckboxes(), PepUniApp.HomePersonalization.enableDisableCheckbox(d.secondary_college) }), PepUniApp.HomePersonalization.primaryCollegeChange(), PepUniApp.HomePersonalization.userLanguageChange(), PepUniApp.HomePersonalization.enableDisableCheckbox(d.secondary_college) }, handleResponse: function() { c(".modal-mask,.home-modal").hide(), PepUniApp.PrimaryNav.resizeHeader(), b.cookie = "isUserCategChanged=true" }, setHomeModalArray: function(a, b, c) { PepUniApp.HomePersonalization.init(), PepUniApp.UserProfile.iterateCollege(PepUniApp.UserProfile.profileCollegeArray(a), this.primary_college.find("option")), PepUniApp.UserProfile.iterateCollege(PepUniApp.UserProfile.profileCollegeArray(b), this.sec_col_chbx), PepUniApp.UserProfile.iterateCollege(PepUniApp.UserProfile.profileCollegeArray(c), this.user_languages.find("option")), PepUniApp.HomePersonalization.checkboxDisableCount(), PepUniApp.HomePersonalization.enableDisableCheckbox(this.secondary_college) }, userLanguageChange: function() {
                var a = this;
                this.user_languages.change(function() { c("#txt_user_language").val(a.user_languages.find("option:selected").text().substring(a.user_languages.find("option:selected").text().lastIndexOf(";") + 1, a.user_languages.find("option:selected").text().length)), c("#txt_user_language_value").val(a.user_languages.find("option:selected").val()) }) }, primaryCollegeChange: function() {
                var a = this;
                this.primary_college.change(function() { c("#txt_primary_college").val(a.primary_college.find("option:selected").text()), c("#txt_primary_college_value").val(a.primary_college.find("option:selected").val()), PepUniApp.HomePersonalization.hideSelectedCollege(), PepUniApp.HomePersonalization.disableCheckboxes(a.secondary_college), PepUniApp.HomePersonalization.enableCheckboxes(a.secondary_college), PepUniApp.HomePersonalization.disableInitCheckboxes() }) }, hideSelectedCollege: function() {
                var a;
                a = this.primary_college[0].selectedIndex, this.secondary_college.find("div").show(), this.secondary_college.find("div:nth-child(" + a + ")").find("input").prop("checked", !1), this.secondary_college.find("div:nth-child(" + a + ")").hide() }, disableInitCheckboxes: function() {
                for (var a = 0; a < init_chk.length; a++) this.secondary_college.find("div:eq(" + init_chk[a] + ") input").prop("disabled", !0) }, enableCheckboxes: function(a) { a.find('input[type="checkbox"]:checked').length < 3 && (a.find('input[type="checkbox"]:disabled').prop("disabled", !1), a.find('input[type="checkbox"]:not(:disabled)').parent().removeClass("disabled")) }, disableCheckboxes: function(a) { 3 == a.find('input[type="checkbox"]:checked').length && a.find('input[type="checkbox"]:not(:checked)').prop("disabled", !0) }, enableDisableCheckbox: function(a) { a.find('input[type="checkbox"]:disabled').parent().addClass("disabled"), a.find('input[type="checkbox"]:not(:disabled)').parent().removeClass("disabled") }, checkboxDisableCount: function() { init_chk = [];
                var a = 0;
                this.sec_col_chbx.each(function() { c(this).is(":disabled") && init_chk.push(a), a++ }) }, openHomePopup: function() { c(".modal-mask,.home-modal").show() } } }(window, document, jQuery),
    function(a, b, c, d) {
        PepUniApp.GlobalSearch = {
            init: function() {
                var a = this;
                this.searchContainer = c("div.global-search"), this.resultList = this.searchContainer.find(".results .tab-section > ul"), this.resultListActive = this.searchContainer.find(".results .tab-section.active > ul"), this.resultListCatalog = this.searchContainer.find(".results .tab-section#pepu_res > ul"), this.resultListBooks = this.searchContainer.find(".results .tab-section#books_res > ul"), this.resultListCollab = this.searchContainer.find(".results .tab-section#collab_res > ul"), this.resultContainer = this.searchContainer.find(".results"), this.errorContext = this.searchContainer.find(".alert.alert-danger"), this.tabs = this.searchContainer.find(".tabs > ul li"), this.tabContent = this.searchContainer.find(".tab-section"), this.tabContentCatalog = this.searchContainer.find(".tab-section#pepu_res"), this.searchInput = this.searchContainer.find('form input[type="text"]'), this.resPerPage = 10, this.paginationCatalog = this.searchContainer.find(".results .tab-section#pepu_res .paginate > ul"), this.paginationBooks = this.searchContainer.find(".results .tab-section#books_res .paginate > ul"), this.paginationCollab = this.searchContainer.find(".results .tab-section#collab_res .paginate > ul"), this.pageLinksSelCatalog = ".global-search .results .tab-section#pepu_res .paginate > ul li a", this.pageLinksSelBooks = ".global-search .results .tab-section#books_res .paginate > ul li a", this.pageLinksSelCollab = ".global-search .results .tab-section#collab_res .paginate > ul li a", this.defaultTab = "catalog", c("#global_search").on("click", function() { PepUniApp.GlobalSearch.toggleSearch(c(this).hasClass("selected") ? !1 : !0) }), c(".global-search .close-search").on("click", function(a) { a.preventDefault(), PepUniApp.GlobalSearch.toggleSearch(!1) }), c(".global-search form a.clear-input").on("click", function(a) { a.preventDefault(), c(this).parents("form").find('input[type="text"]').val("").focus() }), c(".global-search form").on("submit", function(b) { c("#books_res header .col-md-2.col-sm-2.col-xs-10").find("a").removeClass("cstmbold"), c("#books_res header .col-md-2.col-sm-2.col-xs-10 span.reset").css("display", "none"), c("#books_res .related-search").show(), b.preventDefault();
                    var e = c.trim(c(this).find('input[type="text"]').val());
                    a.keyword = e, "" !== a.keyword && a.keyword !== d ? a.validate(a.keyword) ? (a.resetTabs(), PepUniApp.GlobalSearch.perfromSearch(a.keyword, 1)) : alert("Following Special characters are not allowed in search: \", ', \\, }, {, [,] ,<, >. Please try your search again without these characters.") : alert("Please type a keyword to search.") }), this.initTabs(), this.handlePagination(), this.handlePaginationNew() },
            resetTabs: function() {
                var a = this;
                a.tabs.removeClass("active").eq(0).addClass("active"), a.tabContent.removeClass("active"), a.tabContentCatalog.addClass("active"), a.tabs.find("a").removeClass("resultPresent") },
            initTabs: function() {
                var a = this;
                this.tabs.on("click", function(b) { b.preventDefault(), a.tabs.removeClass("active"), a.tabContent.removeClass("active"), c(this).addClass("active"), tabName = c(this).find("a").data("section"), c("#" + tabName).toggleClass("active"), "collab_res" == tabName ? c(this).find("a").hasClass("resultPresent") || (c(this).find("a").addClass("resultPresent"), PepUniApp.GlobalSearch.perfromSearch(a.keyword, "collaborationSearch", "collaboration")) : "books_res" == tabName && (c(this).find("a").hasClass("resultPresent") || (c(this).find("a").addClass("resultPresent"), PepUniApp.GlobalSearch.perfromSearch(a.keyword, 0, "GSA"))) }) },
            setUrl: function(a) { this.url = a },
            toggleSearch: function(a) { a ? (c(".expand-header.selected").length && (PepUniApp.PrimaryNav.slideHeader(), c(".expand-header").removeClass("selected")), c(".global-search").slideDown(), c("#global_search").addClass("selected"), this.searchInput.focus()) : (this.resultList.html(""), this.errorContext.html("").hide(), this.resultContainer.hide(), this.searchInput.val(""), this.searchContainer.css("height", ""), c(".global-search").slideUp(), c("#global_search").removeClass("selected")) },
            perfromSearch: function(a, e, f) { this.errorContext.html("").hide(), this.resultContainer.hide(), this.searchContainer.css("height", "100%");
                var g, h, i, j = this;
                f === d && (f = "catalog"), i = "GSA" == f ? { type: "GET", data: { searchKey: a, page: e, searchType: f, extSourceType: "books24x7" } } : { type: "GET", data: { searchKey: a, page: e, searchType: f } }, g = { loaderContext: c("body"), errorContext: this.errorContext, url: j.url }, h = new AjaxHelper(g), h.makeRequest(i, this), b.activeElement.blur() },
            validate: function(a) {
                var b = ['"', "'", "\\", "}", "{", "[", "]", "<", ">"],
                    c = !1;
                for (i = 0; i < b.length; i++) a.indexOf(b[i]) > -1 && (c = !0);
                return c ? !1 : !0 },
            paginate: function(a, b) {
                var d, e = 0,
                    f = "",
                    g = 10,
                    h = "",
                    i = "",
                    j = 10;
                if (b % 10 == 0 && (j = 11), e = Math.ceil(a / this.resPerPage), 1 != e) { d = 10 * Math.floor(b / j), 1 == b && (h = "disabled"), f = '<li><a href="#" class="step prev ' + h + '">PREV</a></li>', 10 > e - d && (g = e - d);
                    for (var k = 1; g >= k; k++) {
                        var l = d + k,
                            m = "href='#'";
                        l === b && (m = "class='disabled'"), f += "<li><a " + m + ">" + l + "</a></li>" }
                    b == e && (i = "disabled"), f += '<li><a href="#" class="step next ' + i + '">NEXT</a></li>';
                    var n = c(".results ul li.active a").data("section"); "pepu_res" == n ? this.paginationCatalog.html(f) : this.paginationBooks.html(f) } },
            handlePagination: function() {
                var a = this;
                c(b).on("click", this.pageLinksSelCatalog, function(b) {
                    if (c(this).hasClass("disabled")) return !1;
                    if (c(this).hasClass("step prev")) {
                        var d = a.paginationCatalog.find("li a:not(.step)").filter(".disabled").text();
                        a.perfromSearch(a.keyword, parseInt(d) - 1) } else if (c(this).hasClass("step next")) {
                        var d = a.paginationCatalog.find("li a:not(.step)").filter(".disabled").text();
                        a.perfromSearch(a.keyword, parseInt(d) + 1) } else {
                        var e = parseInt(c(this).text());
                        a.perfromSearch(a.keyword, e) }
                    b.preventDefault()
                }), c(b).on("click", this.pageLinksSelBooks, function(b) {
                    var d = c("#searchForm input").val();
                    if (c(this).hasClass("disabled")) return !1;
                    if (c(this).hasClass("step prev")) {
                        var e = a.paginationBooks.find("li a:not(.step)").filter(".disabled").text();
                        e = parseInt(e) - 1, e = 10 * (e - 1), a.perfromSearch(d, parseInt(e), "GSA") } else if (c(this).hasClass("step next")) {
                        var e = a.paginationBooks.find("li a:not(.step)").filter(".disabled").text();
                        e = parseInt(e) + 1, e = 10 * (e - 1), a.perfromSearch(d, parseInt(e), "GSA") } else {
                        var f = parseInt(c(this).text());
                        f = 10 * (f - 1), a.perfromSearch(d, f, "GSA") }
                    b.preventDefault() })
            },
            paginateNew: function(a, b) {
                var c = "",
                    e = "",
                    f = "";
                (a == d || "" == a) && (e = "disabled"), c = '<li><a href="#" class="step prev ' + e + '" data-searchurl="' + a + '">PREV</a></li>', (b == d || "" == b) && (f = "disabled"), c += '<li><a href="#" class="step next ' + f + '" data-searchurl="' + b + '">NEXT</a></li>', this.paginationCollab.html(c) },
            handlePaginationNew: function() {
                var a = this;
                c(b).on("click", this.pageLinksSelCollab, function(b) {
                    if (c(this).hasClass("disabled")) return !1;
                    if (c(this).hasClass("step prev") && c(this).data("searchurl") != d) {
                        var e = c(this).data("searchurl");
                        a.perfromSearch(a.keyword, e, "collaboration") } else if (c(this).hasClass("step next") && c(this).data("searchurl") != d) {
                        var e = c(this).data("searchurl");
                        a.perfromSearch(a.keyword, e, "collaboration") }
                    b.preventDefault() }) },
            handleResponse: function(a) {
                var b, e = "",
                    f = c(".results ul li.active a").data("section");
                if ("pepu_res" == f) a.content.results !== d && "catalogSearch" == a.content.searchType && (b = a.content.results, b.length > 0 ? (c.each(b, function(a) { result = b[a], result.desc == d && (result.desc = ""), e += "<li>", e += '<a href="' + result.url + '">' + result.title + "</a>", e += "<p>" + result.desc + "</p>", e += "</li>" }), this.resultContainer.show(), this.paginationCatalog.html(""), a.content.totalCount !== d && a.content.totalCount > this.resPerPage ? (this.resPerPage = 10, this.paginate(a.content.totalCount, a.content.activePage)) : a.content.totalCount !== d && a.content.totalCount <= this.resPerPage && (this.resPerPage = a.content.totalCount, this.paginate(a.content.totalCount, a.content.activePage)), this.resultListCatalog.html(e)) : (this.resultContainer.show(), e += "" == a.content.error ? "<p>No results found for this keyword.</p>" : "<p>" + a.content.error + "</p>", this.paginationCatalog.html(""), this.resultListCatalog.html(e)));
                else if ("books_res" == f)
                    if (a.GSP.RES !== d) { b = a.GSP.RES.R;
                        var g = a.GSP.RES;
                        if (b != d && b.length > 0) { c(".results-found h6").find("span").html(g.SN + " - " + g.EN + " of " + g.M), c.each(b, function(a) { result = b[a], result.S == d && (result.S = ""), e += "<li>", e += '<div class="searchBox">', e += '<div class="contentBox">', ("" == result.MT.mp_title || result.MT.mp_title == d) && (result.MT.mp_title = "No Title"), e += "" == result.MT.mp_url || result.MT.mp_url == d ? '<a href="#">' + result.MT.mp_title + "</a>" : '<a href="' + result.MT.mp_url + '" target="_blank">' + result.MT.mp_title + "</a>", e += "VIDEO" == result.MT.mp_type ? '<div class="iconbox srcVideotmp"></div>' : "BOOK" == result.MT.mp_type ? '<div class="iconbox srcBooktmp"></div>' : "", e += "<p>" + result.S + "</p>", e += "</div></div>", e += "</li>" }), this.resultContainer.show(), this.paginationBooks.html("");
                            var h = Math.ceil(a.GSP.RES.SN / 10);
                            a.GSP.RES.M !== d && a.GSP.RES.M > this.resPerPage ? (this.resPerPage = 10, this.paginate(a.GSP.RES.M, h)) : a.GSP.RES.M !== d && a.GSP.RES.M <= this.resPerPage && (this.resPerPage = a.GSP.RES.M, this.paginate(a.GSP.RES.M, h)), this.resultListBooks.html(e) } else this.resultContainer.show(), a.GSP.error === d ? c(".results-found h6").find("span").text("0") : e += "<p>" + a.GSP.error + "</p>", this.paginationBooks.html(""), this.resultListBooks.html(e) } else this.resultContainer.show(), e += a.GSP.error === d ? "<p>No results found for this keyword.</p>" : "<p>" + a.GSP.error + "</p>", this.paginationBooks.html(""), this.resultListBooks.html(e);
                else a.content.results !== d && "collaboration" == a.content.searchType && (b = a.content.results, e = "", b.length > 0 ? (c.each(b, function(a) { result = b[a], result.title !== d && (result.desc == d && (result.desc = ""), e += "<li>", e += '<a href="' + result.url + '" target="_blank">' + result.title + "</a>", e += "<p>" + result.desc + "</p>", e += "</li>") }), this.resultListCollab.html(e), this.paginationCollab.html(""), this.paginateNew(a.content.previous, a.content.next), this.resultContainer.show()) : (e = "", this.paginateNew(a.content.previous, a.content.next), c(".results").show(), e += "" == a.content.error ? "<p>No results found for this keyword.</p>" : "<p>" + a.content.error + "</p>", this.resultListCollab.html(e), this.paginationCollab.html(""), this.resultContainer.show())) },
            getSessionId: function() {
                var a = c(".results ul li.active a").data("section");
                if ("books_res" == a) {
                    var b = c.trim(c(".global-search form").find('input[type="text"]').val()),
                        d = "/gsasearch/cluster?coutput=json&btnG=Google+Search&access=a&sort=date:D:L:d1&client=pu_frontend&lr=&oe=UTF-8&ie=UTF-8&num=10&wc=200&wc_mc=1&ud=1&exclude_apps=1&site=mp_pepu&entqr=3&entqrm=0";
                    if (b.match(/inmeta:mp_type=BOOK/g) || b.match(/inmeta:mp_type=VIDEO/g) || b.match(/inmeta:ds_type=books247/g) || b.match(/inmeta:ds_type=getabstract/g)) return !0;
                    c.ajax({ url: d + "&q=" + b, type: "post", dataType: "json", contentType: "application/json; charset=utf-8", success: function(a) { c(".related-search").find(".block").remove(), c(".related-search").find(".related-search-list").remove();
                            var b = a.clusters.length;
                            if (0 == b) c(".related-search").append("<p class='related-search-list'>This search query does not have related search terms.</p>");
                            else {
                                var d = a.clusters[0].clusters,
                                    e = d.length,
                                    f = Math.ceil(e / 2);
                                if (e > 0) {
                                    for (i = 0; f > i; i++) c(".related-search").append('<div class="block pull-left col-md-3"></div>');
                                    var g = c(".related-search").find(".block");
                                    c.each(d, function(a, b) {
                                        var c, d = b.label;
                                        c = g.eq(e > 2 ? e / 2 > a ? 0 : 1 : 0), c.append('<p class="related-search-list">\n            <a href="javascript:void(0);">' + d + "</a></p>") }), c(".related-search .block .related-search-list a").click(function() { c("#books_res header .col-md-2.col-sm-2.col-xs-10").find("a").removeClass("cstmbold"), c("#books_res header .col-md-2.col-sm-2.col-xs-10 span.reset").css("display", "none");
                                        var a = c(this).text();
                                        c.trim(c(".global-search form").find('input[type="text"]').val(a)), PepUniApp.GlobalSearch.perfromSearch(a, 0, "GSA") }) } } } }) } },
            performAppending: function(a, b, c, d, e, f) {
                var g = "";
                if ("" != b && "undefined" != b && (g += b), "" != d && "undefined" != d) {
                    var h = d.replace(/ /g, " OR ");
                    g += h }
                if ("" != c && "undefined" != c && (g = g + '"' + c + '"'), "" != e && "undefined" != e) {
                    var i = e.replace(/ /g, " -");
                    g += i }
                if ("" != f && "undefined" != f) {
                    var j = " inmeta:author~" + f;
                    g += j }
                return "" != a && "undefined" != a && "BOOKS" == a ? g += " inmeta:mp_type=BOOK" : "" != a && "undefined" != a && "VIDEO" == a && (g += " inmeta:mp_type=VIDEO"), g }
        }
    }(window, document, jQuery), $(document).ready(function() { $("#books_res header a.books24by7").click(function() { $("#books_res header .col-md-2.col-sm-2.col-xs-10 span.all").removeClass("cstmbold");
            var a = $("#searchForm input").val(),
                b = /inmeta:ds_type=getabstract/gi;
            (a.match(/inmeta:ds_type=books247/g) || a.match(/inmeta:ds_type=getabstract/g)) && (a = a.replace(b, "")), $(this).addClass("cstmbold"), $("#books_res header a.getAbstract").removeClass("cstmbold"), $("#books_res header .col-md-2.col-sm-2.col-xs-10 span.reset").css("display", "inline-block");
            var c = a + " inmeta:ds_type=books247";
            PepUniApp.GlobalSearch.perfromSearch(c, 0, "GSA"), $("#searchForm input[type=text]").val(c) }), $("#books_res header .col-md-2.col-sm-2.col-xs-10 span.reset").click(function() {
            var a = $("#searchForm input").val(),
                b = /inmeta:ds_type=getabstract/gi,
                c = /inmeta:ds_type=books247/gi;
            (a.match(/inmeta:ds_type=books247/g) || a.match(/inmeta:ds_type=getabstract/g)) && (a = a.replace(b, ""), a = a.replace(c, "")), $(this).css("display", "none"), $("#books_res header .col-md-2.col-sm-2.col-xs-10").find("a").removeClass("cstmbold"), PepUniApp.GlobalSearch.perfromSearch(a, 0, "GSA"), $("#searchForm input[type=text]").val(a) }), $("#books_res header .col-md-2.col-sm-2.col-xs-10 span.all").click(function() {
            var a = $("#searchForm input").val(),
                b = /inmeta:ds_type=getabstract/gi,
                c = /inmeta:ds_type=books247/gi;
            (a.match(/inmeta:ds_type=books247/g) || a.match(/inmeta:ds_type=getabstract/g)) && (a = a.replace(b, ""), a = a.replace(c, "")), $(this).addClass("cstmbold"), $("#books_res header .col-md-2.col-sm-2.col-xs-10").find("a").removeClass("cstmbold"), PepUniApp.GlobalSearch.perfromSearch(a, 0, "GSA"), $("#searchForm input[type=text]").val(a) }), $("#books_res header a.getAbstract").click(function() { $("#books_res header .col-md-2.col-sm-2.col-xs-10 span.all").removeClass("cstmbold");
            var a = $("#searchForm input").val(),
                b = /inmeta:ds_type=books247/gi;
            (a.match(/inmeta:ds_type=books247/g) || a.match(/inmeta:ds_type=getabstract/g)) && (a = a.replace(b, "")), $(this).addClass("cstmbold"), $("#books_res header a.books24by7").removeClass("cstmbold"), $("#books_res header .col-md-2.col-sm-2.col-xs-10 span.reset").css("display", "inline-block");
            var c = a + " inmeta:ds_type=getabstract";
            PepUniApp.GlobalSearch.perfromSearch(c, 0, "GSA"), $("#searchForm input[type=text]").val(c) }), $("#advancesearchform .searchinfo").click(function(a) { a.preventDefault(), $("#books_res header a").removeClass("cstmbold"), $("#books_res header .col-md-2.col-sm-2.col-xs-10 span.reset").css("display", "none");
            var b = "/gsasearch/cluster?coutput=json&btnG=Google+Search&access=a&sort=date:D:L:d1&client=pu_frontend&lr=&oe=UTF-8&ie=UTF-8&num=10&wc=200&wc_mc=1&ud=1&exclude_apps=1&site=mp_pepu&entqr=3&entqrm=0",
                c = $("select[name='selectedKeyword']").val(),
                d = $("input[name=all]").val(),
                e = $("input[name=phrase]").val(),
                f = $("input[name=any]").val(),
                g = $("input[name=none]").val(),
                h = $("input[name=author]").val(),
                j = PepUniApp.GlobalSearch.performAppending(c, d, e, f, g, h),
                k = [];
            k.push(c);
            var l = null,
                m = $(".rightsidefields");
            m.each(function() {
                var a = $(this).val(),
                    b = a.replace(/,/g, "");
                k.push(b), l = k.join() });
            var n = 0;
            return m.each(function() { "" != $(this).val() && n++ }), n > 0 ? ($("#books_res header:eq(0)").show(), $("#books_res .result-links").show(), $("#books_res .paginate").show(), $("#books_res .related-search").show(), $("#advance-search").css("display", "none"), PepUniApp.GlobalSearch.perfromSearch(j, 0, "GSA"), $.trim($(".global-search form").find('input[type="text"]').val("")), $("#searchForm input[type=text]").val(j), "" != (d || e || f || g) ? $.ajax({ url: b + "&as_q=" + d + "&as_epq=" + e + "&as_oq=" + f + "&as_eq=" + g, type: "post", dataType: "json", contentType: "application/json; charset=utf-8", success: function(a) { $(".related-search").find(".block").remove(), $(".related-search").find(".related-search-list").remove();
                    var b = a.clusters.length;
                    if (0 == b) $(".related-search").append("<p class='related-search-list'>This search query does not have related search terms.</p>");
                    else {
                        var c = a.clusters[0].clusters,
                            d = c.length,
                            e = Math.ceil(d / 2);
                        if (d > 0) {
                            for (i = 0; e > i; i++) $(".related-search").append('<div class="block pull-left col-md-3"></div>');
                            var f = $(".related-search").find(".block");
                            $.each(c, function(a, b) {
                                var c, e = b.label;
                                c = f.eq(d > 2 ? d / 2 > a ? 0 : 1 : 0), c.append('<p class="related-search-list"><a href="javascript:void(0);">' + e + "</a></p>") }), $(".related-search .block .related-search-list a").click(function() {
                                var a = $(this).text();
                                $.trim($(".global-search form").find('input[type="text"]').val(a)), PepUniApp.GlobalSearch.perfromSearch(a, 0, "GSA") }) } } } }) : $(".related-search").find(".block").remove(), void 0) : !0 }) }),
    function(a, b, c) { PepUniApp.Comments = { init: function() { PepUniApp.Comments.fetchComments(), c("#post").on("click", function() {
                    if ("" != c("#textData").val()) PepUniApp.Comments.postComment();
                    else {
                        var a = "Please enter text in comment box",
                            b = "";
                        b += '<div class="error_post">' + a + "</div>", c(".message_error").html(b) } }), c("#textData").on("keyup", function() { c(".message_error").html("") }), c(".bottom_leave").on("click", function() { c(".commentBox").addClass("post_comment") }), PepUniApp.Comments.initLoadMore() }, postComment: function() {
                {
                    var a = this;
                    c("#f_name").text() + " " + c("#l_name").text() }
                reqObj = { method: "POST", data: { data: c("#textData").val() } };
                var b, d = {};
                d.errorContext = c(".message_error"), d.loaderContext = c("body"), d.url = a.url, b = new AjaxHelper(d), b.makeRequest(reqObj, this), "" != c("#textData").val() && c("#textData").val("") }, initLoadMore: function() { c(".load_more").on("click", function() { c(".load_more").hide(), c(".comment-loader").show(), setTimeout(function() { PepUniApp.Comments.fetchComments() }, 2e3) }) }, fetchComments: function() {
                var a = this;
                reqObj = { method: "GET", data: { index: c(".load_comment").length } };
                var b, d = {};
                d.errorContext = c(".message_error"), d.loaderContext = c("body"), d.url = a.commentUrl, b = new AjaxHelper(d), b.makeRequest(reqObj, this) }, handleResponse: function(a) {
                var b = a.content.comments,
                    d = b.length,
                    e = "";
                c(".comment_wrapper").html(""), d > 0 && (c(".countComments").html(""), c(".countComments").html(d)), c.each(b, function(a) { b[a];
                    e += '<div class="load_comment commentsSection' + a + '" >', e += '<div class="imageContent">', e += '<div class="imageDiv genDiv"><img src="' + b[a].image + '"/></div>', e += "</div>", e += '<div class="userDetails">', e += '<div class="userName">' + b[a].userName + "</div>", e += '<div class="postedDate">' + b[a].currentDate + "</div>", e += '<div class="presentTime">' + b[a].currentTime + "</div>", e += "</div>", e += '<div class="data">' + b[a].data + "</div>", e += "</div>", e += '<div style="clear:both"></div>' }), c(".comment_wrapper").append(e), a.content.endOfResult ? (c(".load_more").hide(), c(".end_comments").show()) : (c(".load_more").show(), c(".end_comments").hide()), c(".comment-loader").hide() }, setUrl: function(a) { this.url = a }, setCommentUrl: function(a) { this.commentUrl = a } } }(window, document, jQuery),
    function(a, b, c) { PepUniApp.LearningPlan = { init: function() {
                var a = this;
                c(".menu3").on("click", function(b) { reqObj = { method: "POST" };
                    var d, e = {};
                    e.errorContext = c(".home-overlay-error"), e.loaderContext = c("body"), e.url = a.url, d = new AjaxHelper(e), d.makeRequest(reqObj, a), b.preventDefault() }), this.toggleTip(), this.showSafariTip() }, handleResponse: function(a) { a.success ? (c(".mask-top-of-mask,.info-modal").show(), c(".info-modal span").html("Course has been successfully added."), c(".info-modal .close").on("click", function() { location.reload() })) : a.error && (c(".mask-top-of-mask,.info-modal").show(), c(".info-modal span").html(a.error.errDesc)) }, setUrl: function(a) { this.url = a }, toggleTip: function() {
                var a = c("#course_tip");
                1 == PepUniApp.Layout.isTouchDevice() && a.toggleClass("visible-sm visible-md hidden") }, showSafariTip: function() {
                var a = "When submitting comments via the Safari browser, please adjust your Cookie settings by selecting â€œAlways Allowâ€ on mobile devices or â€œNever Blockâ€ from MacBook/PC.",
                    b = navigator.userAgent.toLowerCase();
                if (-1 != b.indexOf("safari") && -1 == b.indexOf("chrome")) {
                    var d = "<span class='safari-tip'>" + a + "</span>";
                    c("#myDiv").prepend(d) } } } }(window, document, jQuery),
    function(a, b, c, d) { PepUniApp.Share = { init: function(a, b) {
                var e = this;
                a !== d && b !== d && (this.mailtoStr = "mailto:?subject=" + a + "&body=" + b), c("#share_mail").on("click", function(a) { a.preventDefault(), e.openMailClient() }) }, onLoad: function() { c(a).load(function() {
                    var a = c(".share").height();
                    c(".share_popUp.popUpDiv").css({ top: a }) }), PepUniApp.popUp.share_popup(), PepUniApp.popUp.hidePopUp() }, share_popup: function() { c(".menu4.share").on("click", function() { c(".share_popUp.popUpDiv").show() }), c(".collaboration").on("click", function() { c("#collabLinkDiv").show() }), c(".email").on("click", function() { c("#collabLinkDiv").hide() }) }, hidePopUp: function() { c(".close_div").on("click", function() {
                    return c("#collabLinkDiv").hide(), c(".share_popUp.popUpDiv").hide(), !1 }) }, openMailClient: function() { a.location.href = this.mailtoStr } } }(window, document, jQuery),
    function(a, b, c) { PepUniApp.AllCourses = { initFirst: function() { c("#harvard").on("change", function() { c(".loader").show();
                    var a = c(this).find("option:selected").val();
                    PepUniApp.AllCourses.getCollegeData(a) }) }, initSecond: function() { c("#collegeName").on("change", function() { c(".loader").show();
                    var a = c(this).find("option:selected").val();
                    PepUniApp.AllCourses.getSchoolData(a) }) }, init: function() { c("#collegeName").on("change", function() { c(".loader").show();
                    var a = c(this).find("option:selected").val();
                    PepUniApp.AllCourses.getData(a) }) }, getData: function(a) {
                var b = this;
                reqObj = { method: "POST", data: { collegeName: a } };
                var d, e = {};
                e.errorContext = c(".message_error"), e.loaderContext = c("body"), e.url = b.url, reqObj.contentType = "application/x-www-form-urlencoded", d = new AjaxHelper(e), d.makeRequest(reqObj, this) }, getCollegeData: function(a) {
                var b = this;
                reqObj = { method: "POST", data: { harvard: a } };
                var d, e = {};
                e.errorContext = c(".message_error"), e.loaderContext = c("body"), e.url = b.urlCollege, reqObj.contentType = "application/x-www-form-urlencoded", d = new AjaxHelper(e), d.makeRequest(reqObj, this) }, getSchoolData: function(a) {
                var b = this;
                reqObj = { method: "POST", data: { collegeName: a } };
                var d, e = {};
                e.errorContext = c(".message_error"), e.loaderContext = c("body"), e.url = b.urlSchool, reqObj.contentType = "application/x-www-form-urlencoded", d = new AjaxHelper(e), d.makeRequest(reqObj, this) }, handleResponse: function(a) {
                var b = a;
                b = b.toString(), b.match(/primary_select/g), a ? b.match(/primary_selected/g) ? c(".response.primary_select").html(a) : b.match(/secondary_select/g) ? c(".response.seconday_select").html(a) : c(".response").html(a) : c(".failure_message").show() }, fetchCollegeUrl: function(a) { this.urlCollege = a }, fetchSchoolUrl: function(a) { this.urlSchool = a }, fetchUrl: function(a) { this.url = a } } }(window, document, jQuery),
    function(a, b, c) { PepUniApp.Admin = { init: function(a, b, d) { this.cacheUrl = a, this.pgUniqueName = b, this.cacheNavUrl = d, this.anchorLink = c("#admin_settings a.anchor"), this.adminOptions = c("#admin_settings ul.options"), this.editLinksSel = ".portal-admin-edit";
                var e = this;
                this.anchorLink.on("click", function(a) { a.preventDefault(), e.toggleOptions() }), this.adminOptions.find("a").on("click", function() { "toggle_edit" === c(this).attr("id") && c(e.editLinksSel).toggle(), e.toggleOptions() }), c("#clear_cache").on("click", function() { PepUniApp.Admin.fetchCacheUrl(e.cacheUrl, e.pgUniqueName) }), c("#clear_navigation_cache").on("click", function() { PepUniApp.Admin.fetchCacheUrl(e.cacheNavUrl, e.pgUniqueName) }), this.hideOnClick() }, hideOnClick: function() {
                var a = c("#admin_settings"),
                    d = this;
                c(b).mouseup(function(b) { a.is(b.target) || 0 !== a.has(b.target).length || (d.adminOptions.slideUp("fast"), d.anchorLink.removeClass("expand")) }) }, toggleOptions: function() {!this.anchorLink.hasClass("expand") && c(".expand-header.selected").length > 0 && (PepUniApp.PrimaryNav.slideHeader(), c(".expand-header").removeClass("selected")), this.adminOptions.slideToggle("fast"), this.anchorLink.toggleClass("expand") }, fetchCacheUrl: function(a, b) {
                var d = this;
                reqObj = { method: "POST", url: a, data: { pgUniqueName: b } };
                var e, f = {};
                f.errorContext = c(".message_error"), f.loaderContext = c("body"), f.url = d.url, e = new AjaxHelper(f), e.makeRequest(reqObj, this) }, handleResponse: function(a) { a ? location.reload() : c(".failure_message").show() }, fetchUrl: function(a) { this.url = a } } }(window, document, jQuery),
    function(a, b, c) { PepUniApp.FeedHelper = { init: function() { this.rootPath = location.protocol + "//" + location.host;
                var a = this;
                this.content = c("#myDiv div").html(), this.feedTile = c(".packery .item a.feed-tile"), this.feedOverlay = c(".feed.overlay"), this.feedContent = c(".feed.overlay #feed_container"), this.feedTile.on("click", function(b) { b.preventDefault(), a.feedContent.html(a.content), a.feedContent.find("iframe").css({ width: "90%", height: "90%", left: "5%" }), a.showSafariTip(), a.feedOverlay.show() }), this.feedOverlay.find("span.feed-close").on("click", function() { a.closeOverlayFeed() }) }, closeOverlayFeed: function() { this.feedOverlay.hide() }, showSafariTip: function() { this.feedOverlay.find(".safari-tip").remove();
                var a = 'To view the "Social Learning Feed", you must adjust your browser settings for Cookies by selecting "Always Allow" on mobile devices or "Never Block" from MacBook/PC.',
                    b = navigator.userAgent.toLowerCase();
                if (-1 != b.indexOf("safari") && -1 == b.indexOf("chrome")) {
                    var d = "<span class='safari-tip'>" + a + "</span>";
                    this.feedContent.before(d), this.feedContent.find("iframe").css({ width: "90%", height: "80%", left: "5%" }), c(".feed.overlay>div").addClass("with-tip") } } } }(window, document, jQuery),
    function(a, b, c) { PepUniApp.Initialize = { loadModules: function() {
                var b = c("#main_content .packery"),
                    d = c(".aside.sec-nav"),
                    e = "#main_content",
                    f = !0;
                try {
                    var g = a.matchMedia("only screen and (max-width : 768px)");
                    b.length > 0 && (PepUniApp.Layout.handleMediaChange(g), g.addListener(PepUniApp.Layout.handleMediaChange));
                    var h = a.matchMedia("only screen and (max-width : 768px)");
                    d.length > 0 && (PepUniApp.Layout.resetSecMenu(h), h.addListener(PepUniApp.Layout.resetSecMenu)) } catch (i) { b.length > 0 && PepUniApp.Layout.initIsotope("horizontal"), d.length > 0 && (b.length > 0 && (f = !1), d.css("display", ""), PepUniApp.Layout.toggleSecMenu(f, e)) }
                d.length > 0 && PepUniApp.Layout.initMenuToggle(e), PepUniApp.PrimaryNav.init(), PepUniApp.GlobalSearch.init(), PepUniApp.VideoHelper.init(), PepUniApp.FeedHelper.init(), PepUniApp.Layout.initTouchStates(".item > a", ".layer", "touch"), c(".loader.overlay, .video.overlay").on("click", function(a) { a.preventDefault() }), c(".loader.overlay, .video.overlay").on("mouseover", function(a) { a.preventDefault() }) } } }(window, document, jQuery);
//# sourceMappingURL=pepu-built.min.map
