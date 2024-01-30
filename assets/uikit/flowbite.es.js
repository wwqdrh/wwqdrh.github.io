var Pt = Object.defineProperty;
var Ot = (e, t, r) => t in e ? Pt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ee = (e, t, r) => (Ot(e, typeof t != "symbol" ? t + "" : t, r), r);
function F() {
}
const bt = (e) => e;
function B(e, t) {
  for (const r in t)
    e[r] = t[r];
  return (
    /** @type {T & S} */
    e
  );
}
function pt(e) {
  return e();
}
function $e() {
  return /* @__PURE__ */ Object.create(null);
}
function X(e) {
  e.forEach(pt);
}
function ye(e) {
  return typeof e == "function";
}
function ve(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function jt(e) {
  return Object.keys(e).length === 0;
}
function Ft(e, ...t) {
  if (e == null) {
    for (const n of t)
      n(void 0);
    return F;
  }
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function Rt(e, t, r) {
  e.$$.on_destroy.push(Ft(t, r));
}
function oe(e, t, r, n) {
  if (e) {
    const o = mt(e, t, r, n);
    return e[0](o);
  }
}
function mt(e, t, r, n) {
  return e[1] && n ? B(r.ctx.slice(), e[1](n(t))) : r.ctx;
}
function ie(e, t, r, n) {
  if (e[2] && n) {
    const o = e[2](n(r));
    if (t.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const i = [], a = Math.max(t.dirty.length, o.length);
      for (let l = 0; l < a; l += 1)
        i[l] = t.dirty[l] | o[l];
      return i;
    }
    return t.dirty | o;
  }
  return t.dirty;
}
function ae(e, t, r, n, o, i) {
  if (o) {
    const a = mt(t, r, n, i);
    e.p(a, o);
  }
}
function le(e) {
  if (e.ctx.length > 32) {
    const t = [], r = e.ctx.length / 32;
    for (let n = 0; n < r; n++)
      t[n] = -1;
    return t;
  }
  return -1;
}
function ne(e) {
  const t = {};
  for (const r in e)
    r[0] !== "$" && (t[r] = e[r]);
  return t;
}
function Ce(e, t) {
  const r = {};
  t = new Set(t);
  for (const n in e)
    !t.has(n) && n[0] !== "$" && (r[n] = e[n]);
  return r;
}
function Nt(e, t, r) {
  return e.set(r), t;
}
function Tt(e) {
  return e && ye(e.destroy) ? e.destroy : F;
}
function Fe(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
const ht = typeof window < "u";
let Wt = ht ? () => window.performance.now() : () => Date.now(), qe = ht ? (e) => requestAnimationFrame(e) : F;
const te = /* @__PURE__ */ new Set();
function yt(e) {
  te.forEach((t) => {
    t.c(e) || (te.delete(t), t.f());
  }), te.size !== 0 && qe(yt);
}
function Lt(e) {
  let t;
  return te.size === 0 && qe(yt), {
    promise: new Promise((r) => {
      te.add(t = { c: e, f: r });
    }),
    abort() {
      te.delete(t);
    }
  };
}
function U(e, t) {
  e.appendChild(t);
}
function vt(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function Bt(e) {
  const t = W("style");
  return t.textContent = "/* empty */", Ut(vt(e), t), t.sheet;
}
function Ut(e, t) {
  return U(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function j(e, t, r) {
  e.insertBefore(t, r || null);
}
function P(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function kt(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function W(e) {
  return document.createElement(e);
}
function Ae(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Ie(e) {
  return document.createTextNode(e);
}
function Re() {
  return Ie(" ");
}
function De() {
  return Ie("");
}
function $(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function w(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
const Vt = ["width", "height"];
function qt(e, t) {
  const r = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const n in t)
    t[n] == null ? e.removeAttribute(n) : n === "style" ? e.style.cssText = t[n] : n === "__value" ? e.value = e[n] = t[n] : r[n] && r[n].set && Vt.indexOf(n) === -1 ? e[n] = t[n] : w(e, n, t[n]);
}
function Dt(e, t) {
  Object.keys(t).forEach((r) => {
    Zt(e, r, t[r]);
  });
}
function Zt(e, t, r) {
  t in e ? e[t] = typeof e[t] == "boolean" && r === "" ? !0 : r : w(e, t, r);
}
function et(e) {
  return /-/.test(e) ? Dt : qt;
}
function Jt(e) {
  return Array.from(e.childNodes);
}
function _t(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Xt(e, t, { bubbles: r = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: r, cancelable: n });
}
const Se = /* @__PURE__ */ new Map();
let Me = 0;
function Ht(e) {
  let t = 5381, r = e.length;
  for (; r--; )
    t = (t << 5) - t ^ e.charCodeAt(r);
  return t >>> 0;
}
function Kt(e, t) {
  const r = { stylesheet: Bt(t), rules: {} };
  return Se.set(e, r), r;
}
function tt(e, t, r, n, o, i, a, l = 0) {
  const s = 16.666 / n;
  let u = `{
`;
  for (let m = 0; m <= 1; m += s) {
    const k = t + (r - t) * i(m);
    u += m * 100 + `%{${a(k, 1 - k)}}
`;
  }
  const c = u + `100% {${a(r, 1 - r)}}
}`, d = `__svelte_${Ht(c)}_${l}`, h = vt(e), { stylesheet: g, rules: f } = Se.get(h) || Kt(h, e);
  f[d] || (f[d] = !0, g.insertRule(`@keyframes ${d} ${c}`, g.cssRules.length));
  const v = e.style.animation || "";
  return e.style.animation = `${v ? `${v}, ` : ""}${d} ${n}ms linear ${o}ms 1 both`, Me += 1, d;
}
function Qt(e, t) {
  const r = (e.style.animation || "").split(", "), n = r.filter(
    t ? (i) => i.indexOf(t) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = r.length - n.length;
  o && (e.style.animation = n.join(", "), Me -= o, Me || Yt());
}
function Yt() {
  qe(() => {
    Me || (Se.forEach((e) => {
      const { ownerNode: t } = e.stylesheet;
      t && P(t);
    }), Se.clear());
  });
}
let me;
function pe(e) {
  me = e;
}
function Ze() {
  if (!me)
    throw new Error("Function called outside component initialization");
  return me;
}
function $t(e) {
  Ze().$$.on_mount.push(e);
}
function Ne(e, t) {
  return Ze().$$.context.set(e, t), t;
}
function er(e) {
  return Ze().$$.context.get(e);
}
function de(e, t) {
  const r = e.$$.callbacks[t.type];
  r && r.slice().forEach((n) => n.call(this, t));
}
const ee = [], Te = [];
let re = [];
const rt = [], tr = /* @__PURE__ */ Promise.resolve();
let We = !1;
function rr() {
  We || (We = !0, tr.then(wt));
}
function he(e) {
  re.push(e);
}
const Pe = /* @__PURE__ */ new Set();
let Q = 0;
function wt() {
  if (Q !== 0)
    return;
  const e = me;
  do {
    try {
      for (; Q < ee.length; ) {
        const t = ee[Q];
        Q++, pe(t), nr(t.$$);
      }
    } catch (t) {
      throw ee.length = 0, Q = 0, t;
    }
    for (pe(null), ee.length = 0, Q = 0; Te.length; )
      Te.pop()();
    for (let t = 0; t < re.length; t += 1) {
      const r = re[t];
      Pe.has(r) || (Pe.add(r), r());
    }
    re.length = 0;
  } while (ee.length);
  for (; rt.length; )
    rt.pop()();
  We = !1, Pe.clear(), pe(e);
}
function nr(e) {
  if (e.fragment !== null) {
    e.update(), X(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(he);
  }
}
function or(e) {
  const t = [], r = [];
  re.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach((n) => n()), re = t;
}
let fe;
function ir() {
  return fe || (fe = Promise.resolve(), fe.then(() => {
    fe = null;
  })), fe;
}
function Oe(e, t, r) {
  e.dispatchEvent(Xt(`${t ? "intro" : "outro"}${r}`));
}
const xe = /* @__PURE__ */ new Set();
let L;
function Le() {
  L = {
    r: 0,
    c: [],
    p: L
    // parent group
  };
}
function Be() {
  L.r || X(L.c), L = L.p;
}
function I(e, t) {
  e && e.i && (xe.delete(e), e.i(t));
}
function E(e, t, r, n) {
  if (e && e.o) {
    if (xe.has(e))
      return;
    xe.add(e), L.c.push(() => {
      xe.delete(e), n && (r && e.d(1), n());
    }), e.o(t);
  } else
    n && n();
}
const ar = { duration: 0 };
function nt(e, t, r, n) {
  let i = t(e, r, { direction: "both" }), a = n ? 0 : 1, l = null, s = null, u = null, c;
  function d() {
    u && Qt(e, u);
  }
  function h(f, v) {
    const m = (
      /** @type {Program['d']} */
      f.b - a
    );
    return v *= Math.abs(m), {
      a,
      b: f.b,
      d: m,
      duration: v,
      start: f.start,
      end: f.start + v,
      group: f.group
    };
  }
  function g(f) {
    const {
      delay: v = 0,
      duration: m = 300,
      easing: k = bt,
      tick: S = F,
      css: M
    } = i || ar, z = {
      start: Wt() + v,
      b: f
    };
    f || (z.group = L, L.r += 1), "inert" in e && (f ? c !== void 0 && (e.inert = c) : (c = /** @type {HTMLElement} */
    e.inert, e.inert = !0)), l || s ? s = z : (M && (d(), u = tt(e, a, f, m, v, k, M)), f && S(0, 1), l = h(z, m), he(() => Oe(e, f, "start")), Lt((p) => {
      if (s && p > s.start && (l = h(s, m), s = null, Oe(e, l.b, "start"), M && (d(), u = tt(
        e,
        a,
        l.b,
        l.duration,
        0,
        k,
        i.css
      ))), l) {
        if (p >= l.end)
          S(a = l.b, 1 - a), Oe(e, l.b, "end"), s || (l.b ? d() : --l.group.r || X(l.group.c)), l = null;
        else if (p >= l.start) {
          const C = p - l.start;
          a = l.a + l.d * k(C / l.duration), S(a, 1 - a);
        }
      }
      return !!(l || s);
    }));
  }
  return {
    run(f) {
      ye(i) ? ir().then(() => {
        i = i({ direction: f ? "in" : "out" }), g(f);
      }) : g(f);
    },
    end() {
      d(), l = s = null;
    }
  };
}
function ze(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function xt(e, t) {
  const r = {}, n = {}, o = { $$scope: 1 };
  let i = e.length;
  for (; i--; ) {
    const a = e[i], l = t[i];
    if (l) {
      for (const s in a)
        s in l || (n[s] = 1);
      for (const s in l)
        o[s] || (r[s] = l[s], o[s] = 1);
      e[i] = l;
    } else
      for (const s in a)
        o[s] = 1;
  }
  for (const a in n)
    a in r || (r[a] = void 0);
  return r;
}
function lr(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function Ct(e) {
  e && e.c();
}
function Je(e, t, r) {
  const { fragment: n, after_update: o } = e.$$;
  n && n.m(t, r), he(() => {
    const i = e.$$.on_mount.map(pt).filter(ye);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : X(i), e.$$.on_mount = [];
  }), o.forEach(he);
}
function Xe(e, t) {
  const r = e.$$;
  r.fragment !== null && (or(r.after_update), X(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function sr(e, t) {
  e.$$.dirty[0] === -1 && (ee.push(e), rr(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function He(e, t, r, n, o, i, a, l = [-1]) {
  const s = me;
  pe(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: F,
    not_equal: o,
    bound: $e(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: $e(),
    dirty: l,
    skip_bound: !1,
    root: t.target || s.$$.root
  };
  a && a(u.root);
  let c = !1;
  if (u.ctx = r ? r(e, t.props || {}, (d, h, ...g) => {
    const f = g.length ? g[0] : h;
    return u.ctx && o(u.ctx[d], u.ctx[d] = f) && (!u.skip_bound && u.bound[d] && u.bound[d](f), c && sr(e, d)), h;
  }) : [], u.update(), c = !0, X(u.before_update), u.fragment = n ? n(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const d = Jt(t.target);
      u.fragment && u.fragment.l(d), d.forEach(P);
    } else
      u.fragment && u.fragment.c();
    t.intro && I(e.$$.fragment), Je(e, t.target, t.anchor), wt();
  }
  pe(s);
}
class Ke {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ee(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ee(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Xe(this, 1), this.$destroy = F;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, r) {
    if (!ye(r))
      return F;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(r), () => {
      const o = n.indexOf(r);
      o !== -1 && n.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !jt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ur = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ur);
const Y = [];
function At(e, t = F) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function o(l) {
    if (ve(e, l) && (e = l, r)) {
      const s = !Y.length;
      for (const u of n)
        u[1](), Y.push(u, e);
      if (s) {
        for (let u = 0; u < Y.length; u += 2)
          Y[u][0](Y[u + 1]);
        Y.length = 0;
      }
    }
  }
  function i(l) {
    o(l(e));
  }
  function a(l, s = F) {
    const u = [l, s];
    return n.add(u), n.size === 1 && (r = t(o, i) || F), l(e), () => {
      n.delete(u), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: i, subscribe: a };
}
function cr() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = St(t)) && (n && (n += " "), n += r);
  return n;
}
function St(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", n = 0; n < e.length; n++)
    e[n] && (t = St(e[n])) && (r && (r += " "), r += t);
  return r;
}
var Qe = "-";
function dr(e) {
  var t = gr(e), r = e.conflictingClassGroups, n = e.conflictingClassGroupModifiers, o = n === void 0 ? {} : n;
  function i(l) {
    var s = l.split(Qe);
    return s[0] === "" && s.length !== 1 && s.shift(), Mt(s, t) || fr(l);
  }
  function a(l, s) {
    var u = r[l] || [];
    return s && o[l] ? [].concat(u, o[l]) : u;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: a
  };
}
function Mt(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], n = t.nextPart.get(r), o = n ? Mt(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var i = e.join(Qe);
    return (a = t.validators.find(function(l) {
      var s = l.validator;
      return s(i);
    })) == null ? void 0 : a.classGroupId;
  }
}
var ot = /^\[(.+)\]$/;
function fr(e) {
  if (ot.test(e)) {
    var t = ot.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function gr(e) {
  var t = e.theme, r = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = pr(Object.entries(e.classGroups), r);
  return o.forEach(function(i) {
    var a = i[0], l = i[1];
    Ue(l, n, a, t);
  }), n;
}
function Ue(e, t, r, n) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : it(t, o);
      i.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (br(o)) {
        Ue(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(function(a) {
      var l = a[0], s = a[1];
      Ue(s, it(t, l), r, n);
    });
  });
}
function it(e, t) {
  var r = e;
  return t.split(Qe).forEach(function(n) {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function br(e) {
  return e.isThemeGetter;
}
function pr(e, t) {
  return t ? e.map(function(r) {
    var n = r[0], o = r[1], i = o.map(function(a) {
      return typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(function(l) {
        var s = l[0], u = l[1];
        return [t + s, u];
      })) : a;
    });
    return [n, i];
  }) : e;
}
function mr(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function o(i, a) {
    r.set(i, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(a) {
      var l = r.get(a);
      if (l !== void 0)
        return l;
      if ((l = n.get(a)) !== void 0)
        return o(a, l), l;
    },
    set: function(a, l) {
      r.has(a) ? r.set(a, l) : o(a, l);
    }
  };
}
var zt = "!";
function hr(e) {
  var t = e.separator || ":", r = t.length === 1, n = t[0], o = t.length;
  return function(a) {
    for (var l = [], s = 0, u = 0, c, d = 0; d < a.length; d++) {
      var h = a[d];
      if (s === 0) {
        if (h === n && (r || a.slice(d, d + o) === t)) {
          l.push(a.slice(u, d)), u = d + o;
          continue;
        }
        if (h === "/") {
          c = d;
          continue;
        }
      }
      h === "[" ? s++ : h === "]" && s--;
    }
    var g = l.length === 0 ? a : a.substring(u), f = g.startsWith(zt), v = f ? g.substring(1) : g, m = c && c > u ? c - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: f,
      baseClassName: v,
      maybePostfixModifierPosition: m
    };
  };
}
function yr(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(n) {
    var o = n[0] === "[";
    o ? (t.push.apply(t, r.sort().concat([n])), r = []) : r.push(n);
  }), t.push.apply(t, r.sort()), t;
}
function vr(e) {
  return {
    cache: mr(e.cacheSize),
    splitModifiers: hr(e),
    ...dr(e)
  };
}
var kr = /\s+/;
function _r(e, t) {
  var r = t.splitModifiers, n = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(kr).map(function(a) {
    var l = r(a), s = l.modifiers, u = l.hasImportantModifier, c = l.baseClassName, d = l.maybePostfixModifierPosition, h = n(d ? c.substring(0, d) : c), g = !!d;
    if (!h) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (h = n(c), !h)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      g = !1;
    }
    var f = yr(s).join(":"), v = u ? f + zt : f;
    return {
      isTailwindClass: !0,
      modifierId: v,
      classGroupId: h,
      originalClassName: a,
      hasPostfixModifier: g
    };
  }).reverse().filter(function(a) {
    if (!a.isTailwindClass)
      return !0;
    var l = a.modifierId, s = a.classGroupId, u = a.hasPostfixModifier, c = l + s;
    return i.has(c) ? !1 : (i.add(c), o(s, u).forEach(function(d) {
      return i.add(l + d);
    }), !0);
  }).reverse().map(function(a) {
    return a.originalClassName;
  }).join(" ");
}
function wr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n, o, i, a = l;
  function l(u) {
    var c = t[0], d = t.slice(1), h = d.reduce(function(g, f) {
      return f(g);
    }, c());
    return n = vr(h), o = n.cache.get, i = n.cache.set, a = s, s(u);
  }
  function s(u) {
    var c = o(u);
    if (c)
      return c;
    var d = _r(u, n);
    return i(u, d), d;
  }
  return function() {
    return a(cr.apply(null, arguments));
  };
}
function A(e) {
  var t = function(n) {
    return n[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var It = /^\[(?:([a-z-]+):)?(.+)\]$/i, xr = /^\d+\/\d+$/, Cr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ar = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Sr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Mr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function R(e) {
  return J(e) || Cr.has(e) || xr.test(e) || Ve(e);
}
function Ve(e) {
  return H(e, "length", Or);
}
function zr(e) {
  return H(e, "size", Gt);
}
function Ir(e) {
  return H(e, "position", Gt);
}
function Gr(e) {
  return H(e, "url", jr);
}
function we(e) {
  return H(e, "number", J);
}
function J(e) {
  return !Number.isNaN(Number(e));
}
function Er(e) {
  return e.endsWith("%") && J(e.slice(0, -1));
}
function ge(e) {
  return at(e) || H(e, "number", at);
}
function _(e) {
  return It.test(e);
}
function be() {
  return !0;
}
function V(e) {
  return Ar.test(e);
}
function Pr(e) {
  return H(e, "", Fr);
}
function H(e, t, r) {
  var n = It.exec(e);
  return n ? n[1] ? n[1] === t : r(n[2]) : !1;
}
function Or(e) {
  return Sr.test(e);
}
function Gt() {
  return !1;
}
function jr(e) {
  return e.startsWith("url(");
}
function at(e) {
  return Number.isInteger(Number(e));
}
function Fr(e) {
  return Mr.test(e);
}
function Rr() {
  var e = A("colors"), t = A("spacing"), r = A("blur"), n = A("brightness"), o = A("borderColor"), i = A("borderRadius"), a = A("borderSpacing"), l = A("borderWidth"), s = A("contrast"), u = A("grayscale"), c = A("hueRotate"), d = A("invert"), h = A("gap"), g = A("gradientColorStops"), f = A("gradientColorStopPositions"), v = A("inset"), m = A("margin"), k = A("opacity"), S = A("padding"), M = A("saturate"), z = A("scale"), p = A("sepia"), C = A("skew"), N = A("space"), T = A("translate"), D = function() {
    return ["auto", "contain", "none"];
  }, G = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, y = function() {
    return ["auto", _, t];
  }, x = function() {
    return [_, t];
  }, ke = function() {
    return ["", R];
  }, K = function() {
    return ["auto", J, _];
  }, se = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, b = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, Z = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Ge = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, ue = function() {
    return ["", "0", _];
  }, Ye = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ce = function() {
    return [J, we];
  }, _e = function() {
    return [J, _];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [be],
      spacing: [R],
      blur: ["none", "", V, _],
      brightness: ce(),
      borderColor: [e],
      borderRadius: ["none", "", "full", V, _],
      borderSpacing: x(),
      borderWidth: ke(),
      contrast: ce(),
      grayscale: ue(),
      hueRotate: _e(),
      invert: ue(),
      gap: x(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Er, Ve],
      inset: y(),
      margin: y(),
      opacity: ce(),
      padding: x(),
      saturate: ce(),
      scale: ce(),
      sepia: ue(),
      skew: _e(),
      space: x(),
      translate: x()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", _]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [V]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ye()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ye()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(se(), [_])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: G()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": G()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": G()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ge]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: y()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", _]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ue()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ue()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ge]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [be]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ge]
        }, _]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [be]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ge]
        }, _]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", _]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", _]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(Ge())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(Ge(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(Ge(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [S]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [S]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [S]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [S]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [S]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [S]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [S]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [S]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [S]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [N]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [N]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", _, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", _, R]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [V]
        }, V, _]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [_, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", _, R]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [_, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", V, Ve]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", we]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [be]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", _]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", J, we]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", _, R]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", _]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", _]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [k]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [k]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(b(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", R]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", _, R]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: x()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", _]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", _]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [k]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(se(), [Ir])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", zr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Gr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [f]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(b(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: b()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(b())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [_, R]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [R]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ke()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [R]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", V, Pr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [be]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": Z()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [s]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", V, _]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [M]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [p]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [s]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [M]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [p]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", _]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: _e()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", _]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: _e()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", _]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [z]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [z]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [z]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ge, _]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [T]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [T]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [C]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [C]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", _]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", _]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", _]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [R, we]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var q = /* @__PURE__ */ wr(Rr);
function Nr(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function Et(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Tr(e, { delay: t = 0, duration: r = 400, easing: n = Nr, amount: o = 5, opacity: i = 0 } = {}) {
  const a = getComputedStyle(e), l = +a.opacity, s = a.filter === "none" ? "" : a.filter, u = l * (1 - i), [c, d] = Fe(o);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (h, g) => `opacity: ${l - u * g}; filter: ${s} blur(${g * c}${d});`
  };
}
function Wr(e, { delay: t = 0, duration: r = 400, easing: n = bt } = {}) {
  const o = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (i) => `opacity: ${i * o}`
  };
}
function Lr(e, { delay: t = 0, duration: r = 400, easing: n = Et, x: o = 0, y: i = 0, opacity: a = 0 } = {}) {
  const l = getComputedStyle(e), s = +l.opacity, u = l.transform === "none" ? "" : l.transform, c = s * (1 - a), [d, h] = Fe(o), [g, f] = Fe(i);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (v, m) => `
			transform: ${u} translate(${(1 - v) * d}${h}, ${(1 - v) * g}${f});
			opacity: ${s - c * m}`
  };
}
function Br(e, { delay: t = 0, duration: r = 400, easing: n = Et, axis: o = "y" } = {}) {
  const i = getComputedStyle(e), a = +i.opacity, l = o === "y" ? "height" : "width", s = parseFloat(i[l]), u = o === "y" ? ["top", "bottom"] : ["left", "right"], c = u.map(
    (k) => `${k[0].toUpperCase()}${k.slice(1)}`
  ), d = parseFloat(i[`padding${c[0]}`]), h = parseFloat(i[`padding${c[1]}`]), g = parseFloat(i[`margin${c[0]}`]), f = parseFloat(i[`margin${c[1]}`]), v = parseFloat(
    i[`border${c[0]}Width`]
  ), m = parseFloat(
    i[`border${c[1]}Width`]
  );
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (k) => `overflow: hidden;opacity: ${Math.min(k * 20, 1) * a};${l}: ${k * s}px;padding-${u[0]}: ${k * d}px;padding-${u[1]}: ${k * h}px;margin-${u[0]}: ${k * g}px;margin-${u[1]}: ${k * f}px;border-${u[0]}-width: ${k * v}px;border-${u[1]}-width: ${k * m}px;`
  };
}
const Ur = (e) => ({}), lt = (e) => ({}), Vr = (e) => ({}), st = (e) => ({}), qr = (e) => ({}), ut = (e) => ({});
function Dr(e) {
  let t;
  const r = (
    /*#slots*/
    e[22].arrowdown
  ), n = oe(
    r,
    e,
    /*$$scope*/
    e[21],
    lt
  ), o = n || Jr();
  return {
    c() {
      o && o.c();
    },
    m(i, a) {
      o && o.m(i, a), t = !0;
    },
    p(i, a) {
      n && n.p && (!t || a & /*$$scope*/
      2097152) && ae(
        n,
        r,
        i,
        /*$$scope*/
        i[21],
        t ? ie(
          r,
          /*$$scope*/
          i[21],
          a,
          Ur
        ) : le(
          /*$$scope*/
          i[21]
        ),
        lt
      );
    },
    i(i) {
      t || (I(o, i), t = !0);
    },
    o(i) {
      E(o, i), t = !1;
    },
    d(i) {
      o && o.d(i);
    }
  };
}
function Zr(e) {
  let t;
  const r = (
    /*#slots*/
    e[22].arrowup
  ), n = oe(
    r,
    e,
    /*$$scope*/
    e[21],
    st
  ), o = n || Xr();
  return {
    c() {
      o && o.c();
    },
    m(i, a) {
      o && o.m(i, a), t = !0;
    },
    p(i, a) {
      n && n.p && (!t || a & /*$$scope*/
      2097152) && ae(
        n,
        r,
        i,
        /*$$scope*/
        i[21],
        t ? ie(
          r,
          /*$$scope*/
          i[21],
          a,
          Vr
        ) : le(
          /*$$scope*/
          i[21]
        ),
        st
      );
    },
    i(i) {
      t || (I(o, i), t = !0);
    },
    o(i) {
      E(o, i), t = !1;
    },
    d(i) {
      o && o.d(i);
    }
  };
}
function Jr(e) {
  let t, r;
  return {
    c() {
      t = Ae("svg"), r = Ae("path"), w(r, "stroke", "currentColor"), w(r, "stroke-linecap", "round"), w(r, "stroke-linejoin", "round"), w(r, "stroke-width", "2"), w(r, "d", "m1 1 4 4 4-4"), w(t, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), w(t, "aria-hidden", "true"), w(t, "xmlns", "http://www.w3.org/2000/svg"), w(t, "fill", "none"), w(t, "viewBox", "0 0 10 6");
    },
    m(n, o) {
      j(n, t, o), U(t, r);
    },
    p: F,
    d(n) {
      n && P(t);
    }
  };
}
function Xr(e) {
  let t, r;
  return {
    c() {
      t = Ae("svg"), r = Ae("path"), w(r, "stroke", "currentColor"), w(r, "stroke-linecap", "round"), w(r, "stroke-linejoin", "round"), w(r, "stroke-width", "2"), w(r, "d", "M9 5 5 1 1 5"), w(t, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), w(t, "aria-hidden", "true"), w(t, "xmlns", "http://www.w3.org/2000/svg"), w(t, "fill", "none"), w(t, "viewBox", "0 0 10 6");
    },
    m(n, o) {
      j(n, t, o), U(t, r);
    },
    p: F,
    d(n) {
      n && P(t);
    }
  };
}
function Hr(e) {
  let t, r, n;
  const o = (
    /*#slots*/
    e[22].default
  ), i = oe(
    o,
    e,
    /*$$scope*/
    e[21],
    null
  );
  return {
    c() {
      t = W("div"), r = W("div"), i && i.c(), w(
        r,
        "class",
        /*contentClass*/
        e[3]
      ), w(t, "class", "uikit-hidden");
    },
    m(a, l) {
      j(a, t, l), U(t, r), i && i.m(r, null), n = !0;
    },
    p(a, l) {
      i && i.p && (!n || l & /*$$scope*/
      2097152) && ae(
        i,
        o,
        a,
        /*$$scope*/
        a[21],
        n ? ie(
          o,
          /*$$scope*/
          a[21],
          l,
          null
        ) : le(
          /*$$scope*/
          a[21]
        ),
        null
      ), (!n || l & /*contentClass*/
      8) && w(
        r,
        "class",
        /*contentClass*/
        a[3]
      );
    },
    i(a) {
      n || (I(i, a), n = !0);
    },
    o(a) {
      E(i, a), n = !1;
    },
    d(a) {
      a && P(t), i && i.d(a);
    }
  };
}
function Kr(e) {
  let t, r, n, o;
  const i = (
    /*#slots*/
    e[22].default
  ), a = oe(
    i,
    e,
    /*$$scope*/
    e[21],
    null
  );
  return {
    c() {
      t = W("div"), r = W("div"), a && a.c(), w(
        r,
        "class",
        /*contentClass*/
        e[3]
      );
    },
    m(l, s) {
      j(l, t, s), U(t, r), a && a.m(r, null), o = !0;
    },
    p(l, s) {
      e = l, a && a.p && (!o || s & /*$$scope*/
      2097152) && ae(
        a,
        i,
        e,
        /*$$scope*/
        e[21],
        o ? ie(
          i,
          /*$$scope*/
          e[21],
          s,
          null
        ) : le(
          /*$$scope*/
          e[21]
        ),
        null
      ), (!o || s & /*contentClass*/
      8) && w(
        r,
        "class",
        /*contentClass*/
        e[3]
      );
    },
    i(l) {
      o || (I(a, l), l && he(() => {
        o && (n || (n = nt(
          t,
          /*multiple*/
          e[4],
          /*transitionParams*/
          e[1],
          !0
        )), n.run(1));
      }), o = !0);
    },
    o(l) {
      E(a, l), l && (n || (n = nt(
        t,
        /*multiple*/
        e[4],
        /*transitionParams*/
        e[1],
        !1
      )), n.run(0)), o = !1;
    },
    d(l) {
      l && P(t), a && a.d(l), l && n && n.end();
    }
  };
}
function Qr(e) {
  let t, r, n, o, i, a, l, s, u, c, d, h;
  const g = (
    /*#slots*/
    e[22].header
  ), f = oe(
    g,
    e,
    /*$$scope*/
    e[21],
    ut
  ), v = [Zr, Dr], m = [];
  function k(p, C) {
    return (
      /*open*/
      p[0] ? 0 : 1
    );
  }
  o = k(e), i = m[o] = v[o](e);
  const S = [Kr, Hr], M = [];
  function z(p, C) {
    return (
      /*open*/
      p[0] ? 0 : 1
    );
  }
  return l = z(e), s = M[l] = S[l](e), {
    c() {
      t = W("h2"), r = W("button"), f && f.c(), n = Re(), i.c(), a = Re(), s.c(), u = De(), w(r, "type", "button"), w(
        r,
        "class",
        /*buttonClass*/
        e[2]
      ), w(
        r,
        "aria-expanded",
        /*open*/
        e[0]
      ), w(t, "class", "group");
    },
    m(p, C) {
      j(p, t, C), U(t, r), f && f.m(r, null), U(r, n), m[o].m(r, null), j(p, a, C), M[l].m(p, C), j(p, u, C), c = !0, d || (h = $(
        r,
        "click",
        /*handleToggle*/
        e[6]
      ), d = !0);
    },
    p(p, [C]) {
      f && f.p && (!c || C & /*$$scope*/
      2097152) && ae(
        f,
        g,
        p,
        /*$$scope*/
        p[21],
        c ? ie(
          g,
          /*$$scope*/
          p[21],
          C,
          qr
        ) : le(
          /*$$scope*/
          p[21]
        ),
        ut
      );
      let N = o;
      o = k(p), o === N ? m[o].p(p, C) : (Le(), E(m[N], 1, 1, () => {
        m[N] = null;
      }), Be(), i = m[o], i ? i.p(p, C) : (i = m[o] = v[o](p), i.c()), I(i, 1), i.m(r, null)), (!c || C & /*buttonClass*/
      4) && w(
        r,
        "class",
        /*buttonClass*/
        p[2]
      ), (!c || C & /*open*/
      1) && w(
        r,
        "aria-expanded",
        /*open*/
        p[0]
      );
      let T = l;
      l = z(p), l === T ? M[l].p(p, C) : (Le(), E(M[T], 1, 1, () => {
        M[T] = null;
      }), Be(), s = M[l], s ? s.p(p, C) : (s = M[l] = S[l](p), s.c()), I(s, 1), s.m(u.parentNode, u));
    },
    i(p) {
      c || (I(f, p), I(i), I(s), c = !0);
    },
    o(p) {
      E(f, p), E(i), E(s), c = !1;
    },
    d(p) {
      p && (P(t), P(a), P(u)), f && f.d(p), m[o].d(), M[l].d(p), d = !1, h();
    }
  };
}
function Yr(e, t, r) {
  let n, o, { $$slots: i = {}, $$scope: a } = t, { open: l = !1 } = t, { activeClass: s = void 0 } = t, { inactiveClass: u = void 0 } = t, { defaultClass: c = "uikit-flex uikit-items-center uikit-justify-between uikit-w-full uikit-font-medium uikit-text-left group-first:uikit-rounded-t-xl uikit-border-gray-200 dark:uikit-border-gray-700" } = t, { transitionType: d = "slide" } = t, { transitionParams: h = {} } = t, { paddingFlush: g = "uikit-py-5" } = t, { paddingDefault: f = "uikit-p-5" } = t, { textFlushOpen: v = "uikit-text-gray-900 dark:uikit-text-white" } = t, { textFlushDefault: m = "uikit-text-gray-500 dark:uikit-text-gray-400" } = t, { borderClass: k = "uikit-border-s uikit-border-e group-first:uikit-border-t" } = t, { borderOpenClass: S = "uikit-border-s uikit-border-e" } = t, { borderBottomClass: M = "uikit-border-b" } = t, { borderSharedClass: z = "uikit-border-gray-200 dark:uikit-border-gray-700" } = t, { classActive: p = void 0 } = t, { classInactive: C = void 0 } = t, N = q(s, p), T = q(u, C);
  const D = (b, Z) => {
    switch (d) {
      case "blur":
        return Tr(b, Z);
      case "fly":
        return Lr(b, Z);
      case "fade":
        return Wr(b, Z);
      default:
        return Br(b, Z);
    }
  }, G = er("ctx") ?? {}, y = {}, x = G.selected ?? At();
  Rt(e, x, (b) => r(23, o = b));
  let ke = l;
  l = !1, $t(() => (ke && Nt(x, o = y, o), x.subscribe((b) => r(0, l = b === y))));
  const K = (b) => x.set(l ? {} : y);
  let se;
  return e.$$set = (b) => {
    r(29, t = B(B({}, t), ne(b))), "open" in b && r(0, l = b.open), "activeClass" in b && r(7, s = b.activeClass), "inactiveClass" in b && r(8, u = b.inactiveClass), "defaultClass" in b && r(9, c = b.defaultClass), "transitionType" in b && r(10, d = b.transitionType), "transitionParams" in b && r(1, h = b.transitionParams), "paddingFlush" in b && r(11, g = b.paddingFlush), "paddingDefault" in b && r(12, f = b.paddingDefault), "textFlushOpen" in b && r(13, v = b.textFlushOpen), "textFlushDefault" in b && r(14, m = b.textFlushDefault), "borderClass" in b && r(15, k = b.borderClass), "borderOpenClass" in b && r(16, S = b.borderOpenClass), "borderBottomClass" in b && r(17, M = b.borderBottomClass), "borderSharedClass" in b && r(18, z = b.borderSharedClass), "classActive" in b && r(19, p = b.classActive), "classInactive" in b && r(20, C = b.classInactive), "$$scope" in b && r(21, a = b.$$scope);
  }, e.$$.update = () => {
    r(2, se = q([
      c,
      G.flush || k,
      M,
      z,
      G.flush ? g : f,
      l && (G.flush ? v : N || G.activeClass),
      !l && (G.flush ? m : T || G.inactiveClass),
      t.class
    ])), e.$$.dirty & /*paddingFlush, paddingDefault, borderOpenClass, borderBottomClass, borderSharedClass*/
    464896 && r(3, n = q([
      G.flush ? g : f,
      G.flush ? "" : S,
      M,
      z
    ]));
  }, t = ne(t), [
    l,
    h,
    se,
    n,
    D,
    x,
    K,
    s,
    u,
    c,
    d,
    g,
    f,
    v,
    m,
    k,
    S,
    M,
    z,
    p,
    C,
    a,
    i
  ];
}
class $r extends Ke {
  constructor(t) {
    super(), He(this, t, Yr, Qr, ve, {
      open: 0,
      activeClass: 7,
      inactiveClass: 8,
      defaultClass: 9,
      transitionType: 10,
      transitionParams: 1,
      paddingFlush: 11,
      paddingDefault: 12,
      textFlushOpen: 13,
      textFlushDefault: 14,
      borderClass: 15,
      borderOpenClass: 16,
      borderBottomClass: 17,
      borderSharedClass: 18,
      classActive: 19,
      classInactive: 20
    });
  }
}
function je(e) {
  let t, r, n, o, i;
  const a = (
    /*#slots*/
    e[12].default
  ), l = oe(
    a,
    e,
    /*$$scope*/
    e[11],
    null
  );
  let s = [
    { role: (
      /*role*/
      e[4]
    ) },
    /*$$restProps*/
    e[6],
    { class: (
      /*divClass*/
      e[5]
    ) }
  ], u = {};
  for (let c = 0; c < s.length; c += 1)
    u = B(u, s[c]);
  return {
    c() {
      t = W(
        /*tag*/
        e[1]
      ), l && l.c(), et(
        /*tag*/
        e[1]
      )(t, u);
    },
    m(c, d) {
      j(c, t, d), l && l.m(t, null), e[18](t), n = !0, o || (i = [
        Tt(r = /*use*/
        e[2].call(
          null,
          t,
          /*options*/
          e[3]
        )),
        $(
          t,
          "click",
          /*click_handler*/
          e[13]
        ),
        $(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[14]
        ),
        $(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[15]
        ),
        $(
          t,
          "focusin",
          /*focusin_handler*/
          e[16]
        ),
        $(
          t,
          "focusout",
          /*focusout_handler*/
          e[17]
        )
      ], o = !0);
    },
    p(c, d) {
      l && l.p && (!n || d & /*$$scope*/
      2048) && ae(
        l,
        a,
        c,
        /*$$scope*/
        c[11],
        n ? ie(
          a,
          /*$$scope*/
          c[11],
          d,
          null
        ) : le(
          /*$$scope*/
          c[11]
        ),
        null
      ), et(
        /*tag*/
        c[1]
      )(t, u = xt(s, [
        (!n || d & /*role*/
        16) && { role: (
          /*role*/
          c[4]
        ) },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        c[6],
        (!n || d & /*divClass*/
        32) && { class: (
          /*divClass*/
          c[5]
        ) }
      ])), r && ye(r.update) && d & /*options*/
      8 && r.update.call(
        null,
        /*options*/
        c[3]
      );
    },
    i(c) {
      n || (I(l, c), n = !0);
    },
    o(c) {
      E(l, c), n = !1;
    },
    d(c) {
      c && P(t), l && l.d(c), e[18](null), o = !1, X(i);
    }
  };
}
function en(e) {
  let t = (
    /*tag*/
    e[1]
  ), r, n, o = (
    /*tag*/
    e[1] && je(e)
  );
  return {
    c() {
      o && o.c(), r = De();
    },
    m(i, a) {
      o && o.m(i, a), j(i, r, a), n = !0;
    },
    p(i, [a]) {
      /*tag*/
      i[1] ? t ? ve(
        t,
        /*tag*/
        i[1]
      ) ? (o.d(1), o = je(i), t = /*tag*/
      i[1], o.c(), o.m(r.parentNode, r)) : o.p(i, a) : (o = je(i), t = /*tag*/
      i[1], o.c(), o.m(r.parentNode, r)) : t && (o.d(1), o = null, t = /*tag*/
      i[1]);
    },
    i(i) {
      n || (I(o, i), n = !0);
    },
    o(i) {
      E(o, i), n = !1;
    },
    d(i) {
      i && P(r), o && o.d(i);
    }
  };
}
function tn(e, t, r) {
  const n = ["tag", "color", "rounded", "border", "shadow", "node", "use", "options", "role"];
  let o = Ce(t, n), { $$slots: i = {}, $$scope: a } = t;
  const l = () => {
  };
  Ne("background", !0);
  let { tag: s = o.href ? "a" : "div" } = t, { color: u = "default" } = t, { rounded: c = !1 } = t, { border: d = !1 } = t, { shadow: h = !1 } = t, { node: g = void 0 } = t, { use: f = l } = t, { options: v = {} } = t, { role: m = void 0 } = t;
  const k = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    orange: "bg-orange-50 dark:bg-orange-800",
    none: ""
  }, S = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  }, M = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let z;
  function p(y) {
    de.call(this, e, y);
  }
  function C(y) {
    de.call(this, e, y);
  }
  function N(y) {
    de.call(this, e, y);
  }
  function T(y) {
    de.call(this, e, y);
  }
  function D(y) {
    de.call(this, e, y);
  }
  function G(y) {
    Te[y ? "unshift" : "push"](() => {
      g = y, r(0, g);
    });
  }
  return e.$$set = (y) => {
    r(23, t = B(B({}, t), ne(y))), r(6, o = Ce(t, n)), "tag" in y && r(1, s = y.tag), "color" in y && r(7, u = y.color), "rounded" in y && r(8, c = y.rounded), "border" in y && r(9, d = y.border), "shadow" in y && r(10, h = y.shadow), "node" in y && r(0, g = y.node), "use" in y && r(2, f = y.use), "options" in y && r(3, v = y.options), "role" in y && r(4, m = y.role), "$$scope" in y && r(11, a = y.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*color*/
    128 && r(7, u = u ?? "default"), e.$$.dirty & /*color*/
    128 && Ne("color", u), r(5, z = q(k[u], S[u], c && "rounded-lg", d && "border", M[u], h && "shadow-md", t.class));
  }, t = ne(t), [
    g,
    s,
    f,
    v,
    m,
    z,
    o,
    u,
    c,
    d,
    h,
    a,
    i,
    p,
    C,
    N,
    T,
    D,
    G
  ];
}
class rn extends Ke {
  constructor(t) {
    super(), He(this, t, tn, en, ve, {
      tag: 1,
      color: 7,
      rounded: 8,
      border: 9,
      shadow: 10,
      node: 0,
      use: 2,
      options: 3,
      role: 4
    });
  }
}
function ct(e, t, r) {
  const n = e.slice();
  return n[10] = t[r], n;
}
function dt(e, t, r) {
  const n = e.slice();
  return n[13] = t[r], n;
}
function ft(e) {
  let t, r = (
    /*desc*/
    e[13] + ""
  ), n;
  return {
    c() {
      t = W("p"), n = Ie(r), w(t, "class", "mb-2 text-gray-500 dark:text-gray-400");
    },
    m(o, i) {
      j(o, t, i), U(t, n);
    },
    p(o, i) {
      i & /*items*/
      1 && r !== (r = /*desc*/
      o[13] + "") && _t(n, r);
    },
    d(o) {
      o && P(t);
    }
  };
}
function nn(e) {
  let t, r = ze(
    /*item*/
    e[10].descriptions
  ), n = [];
  for (let o = 0; o < r.length; o += 1)
    n[o] = ft(dt(e, r, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      t = Re();
    },
    m(o, i) {
      for (let a = 0; a < n.length; a += 1)
        n[a] && n[a].m(o, i);
      j(o, t, i);
    },
    p(o, i) {
      if (i & /*items*/
      1) {
        r = ze(
          /*item*/
          o[10].descriptions
        );
        let a;
        for (a = 0; a < r.length; a += 1) {
          const l = dt(o, r, a);
          n[a] ? n[a].p(l, i) : (n[a] = ft(l), n[a].c(), n[a].m(t.parentNode, t));
        }
        for (; a < n.length; a += 1)
          n[a].d(1);
        n.length = r.length;
      }
    },
    d(o) {
      o && P(t), kt(n, o);
    }
  };
}
function on(e) {
  let t, r = (
    /*item*/
    (e[10].title || "a title") + ""
  ), n;
  return {
    c() {
      t = W("span"), n = Ie(r), w(t, "slot", "header");
    },
    m(o, i) {
      j(o, t, i), U(t, n);
    },
    p(o, i) {
      i & /*items*/
      1 && r !== (r = /*item*/
      (o[10].title || "a title") + "") && _t(n, r);
    },
    d(o) {
      o && P(t);
    }
  };
}
function gt(e) {
  let t, r;
  return t = new $r({
    props: {
      $$slots: {
        header: [on],
        default: [nn]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ct(t.$$.fragment);
    },
    m(n, o) {
      Je(t, n, o), r = !0;
    },
    p(n, o) {
      const i = {};
      o & /*$$scope, items*/
      65537 && (i.$$scope = { dirty: o, ctx: n }), t.$set(i);
    },
    i(n) {
      r || (I(t.$$.fragment, n), r = !0);
    },
    o(n) {
      E(t.$$.fragment, n), r = !1;
    },
    d(n) {
      Xe(t, n);
    }
  };
}
function an(e) {
  let t, r, n = ze(
    /*items*/
    e[0]
  ), o = [];
  for (let a = 0; a < n.length; a += 1)
    o[a] = gt(ct(e, n, a));
  const i = (a) => E(o[a], 1, 1, () => {
    o[a] = null;
  });
  return {
    c() {
      for (let a = 0; a < o.length; a += 1)
        o[a].c();
      t = De();
    },
    m(a, l) {
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(a, l);
      j(a, t, l), r = !0;
    },
    p(a, l) {
      if (l & /*items*/
      1) {
        n = ze(
          /*items*/
          a[0]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const u = ct(a, n, s);
          o[s] ? (o[s].p(u, l), I(o[s], 1)) : (o[s] = gt(u), o[s].c(), I(o[s], 1), o[s].m(t.parentNode, t));
        }
        for (Le(), s = n.length; s < o.length; s += 1)
          i(s);
        Be();
      }
    },
    i(a) {
      if (!r) {
        for (let l = 0; l < n.length; l += 1)
          I(o[l]);
        r = !0;
      }
    },
    o(a) {
      o = o.filter(Boolean);
      for (let l = 0; l < o.length; l += 1)
        E(o[l]);
      r = !1;
    },
    d(a) {
      a && P(t), kt(o, a);
    }
  };
}
function ln(e) {
  let t, r;
  const n = [
    /*$$restProps*/
    e[2],
    { class: (
      /*frameClass*/
      e[1]
    ) },
    { color: "none" }
  ];
  let o = {
    $$slots: { default: [an] },
    $$scope: { ctx: e }
  };
  for (let i = 0; i < n.length; i += 1)
    o = B(o, n[i]);
  return t = new rn({ props: o }), {
    c() {
      Ct(t.$$.fragment);
    },
    m(i, a) {
      Je(t, i, a), r = !0;
    },
    p(i, [a]) {
      const l = a & /*$$restProps, frameClass*/
      6 ? xt(n, [
        a & /*$$restProps*/
        4 && lr(
          /*$$restProps*/
          i[2]
        ),
        a & /*frameClass*/
        2 && { class: (
          /*frameClass*/
          i[1]
        ) },
        n[2]
      ]) : {};
      a & /*$$scope, items*/
      65537 && (l.$$scope = { dirty: a, ctx: i }), t.$set(l);
    },
    i(i) {
      r || (I(t.$$.fragment, i), r = !0);
    },
    o(i) {
      E(t.$$.fragment, i), r = !1;
    },
    d(i) {
      Xe(t, i);
    }
  };
}
function sn(e, t, r) {
  const n = ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass", "items"];
  let o = Ce(t, n), { multiple: i = !1 } = t, { flush: a = !1 } = t, { activeClass: l = "uikit-bg-gray-100 dark:uikit-bg-gray-800 uikit-text-gray-900 dark:uikit-text-white focus:uikit-ring-4 focus:uikit-ring-gray-200 dark:focus:uikit-ring-gray-800" } = t, { inactiveClass: s = "uikit-text-gray-500 dark:uikit-text-gray-400 hover:uikit-bg-gray-100 hover:dark:uikit-bg-gray-800" } = t, { defaultClass: u = "uikit-text-gray-500 dark:uikit-text-gray-400" } = t, { items: c = [] } = t;
  const d = {
    flush: a,
    activeClass: q(l, t.classActive),
    inactiveClass: q(s, t.classInactive),
    selected: i ? void 0 : At()
  };
  Ne("ctx", d);
  let h;
  return e.$$set = (g) => {
    r(9, t = B(B({}, t), ne(g))), r(2, o = Ce(t, n)), "multiple" in g && r(3, i = g.multiple), "flush" in g && r(4, a = g.flush), "activeClass" in g && r(5, l = g.activeClass), "inactiveClass" in g && r(6, s = g.inactiveClass), "defaultClass" in g && r(7, u = g.defaultClass), "items" in g && r(0, c = g.items);
  }, e.$$.update = () => {
    r(1, h = q(u, t.class));
  }, t = ne(t), [
    c,
    h,
    o,
    i,
    a,
    l,
    s,
    u
  ];
}
class un extends Ke {
  constructor(t) {
    super(), He(this, t, sn, ln, ve, {
      multiple: 3,
      flush: 4,
      activeClass: 5,
      inactiveClass: 6,
      defaultClass: 7,
      items: 0
    });
  }
}
const dn = (e, t) => (e || (e = window.document.createElement("div"), document.body.appendChild(e)), new un({
  target: e,
  props: {
    ...t
  }
}));
export {
  dn as FnAccordion
};
