var Ml = Object.defineProperty;
var Nl = (t, e, i) => e in t ? Ml(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var oi = (t, e, i) => (Nl(t, typeof e != "symbol" ? e + "" : e, i), i);
function ne() {
}
const Kt = (t) => t;
function M(t, e) {
  for (const i in e)
    t[i] = e[i];
  return (
    /** @type {T & S} */
    t
  );
}
function Ur(t) {
  return t();
}
function Zi() {
  return /* @__PURE__ */ Object.create(null);
}
function we(t) {
  t.forEach(Ur);
}
function me(t) {
  return typeof t == "function";
}
function X(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Lt;
function pt(t, e) {
  return t === e ? !0 : (Lt || (Lt = document.createElement("a")), Lt.href = e, t === Lt.href);
}
function zl(t) {
  return Object.keys(t).length === 0;
}
function Rl(t, ...e) {
  if (t == null) {
    for (const n of e)
      n(void 0);
    return ne;
  }
  const i = t.subscribe(...e);
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
function Qt(t, e, i) {
  t.$$.on_destroy.push(Rl(e, i));
}
function K(t, e, i, n) {
  if (t) {
    const r = Gr(t, e, i, n);
    return t[0](r);
  }
}
function Gr(t, e, i, n) {
  return t[1] && n ? M(i.ctx.slice(), t[1](n(e))) : i.ctx;
}
function Q(t, e, i, n) {
  if (t[2] && n) {
    const r = t[2](n(i));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const l = [], o = Math.max(e.dirty.length, r.length);
      for (let u = 0; u < o; u += 1)
        l[u] = e.dirty[u] | r[u];
      return l;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function Y(t, e, i, n, r, l) {
  if (r) {
    const o = Gr(e, i, n, l);
    t.p(o, r);
  }
}
function J(t) {
  if (t.ctx.length > 32) {
    const e = [], i = t.ctx.length / 32;
    for (let n = 0; n < i; n++)
      e[n] = -1;
    return e;
  }
  return -1;
}
function B(t) {
  const e = {};
  for (const i in t)
    i[0] !== "$" && (e[i] = t[i]);
  return e;
}
function re(t, e) {
  const i = {};
  e = new Set(e);
  for (const n in t)
    !e.has(n) && n[0] !== "$" && (i[n] = t[n]);
  return i;
}
function Ke(t) {
  const e = {};
  for (const i in t)
    e[i] = !0;
  return e;
}
function Hr(t, e, i) {
  return t.set(i), e;
}
function xe(t) {
  return t && me(t.destroy) ? t.destroy : ne;
}
function gi(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const Dl = ["", !0, 1, "true", "contenteditable"], Vr = typeof window < "u";
let Li = Vr ? () => window.performance.now() : () => Date.now(), Pi = Vr ? (t) => requestAnimationFrame(t) : ne;
const st = /* @__PURE__ */ new Set();
function qr(t) {
  st.forEach((e) => {
    e.c(t) || (st.delete(e), e.f());
  }), st.size !== 0 && Pi(qr);
}
function Mi(t) {
  let e;
  return st.size === 0 && Pi(qr), {
    promise: new Promise((i) => {
      st.add(e = { c: t, f: i });
    }),
    abort() {
      st.delete(e);
    }
  };
}
function R(t, e) {
  t.appendChild(e);
}
function Xr(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Bl(t) {
  const e = P("style");
  return e.textContent = "/* empty */", Fl(Xr(t), e), e.sheet;
}
function Fl(t, e) {
  return R(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function A(t, e, i) {
  t.insertBefore(e, i || null);
}
function T(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function je(t, e) {
  for (let i = 0; i < t.length; i += 1)
    t[i] && t[i].d(e);
}
function P(t) {
  return document.createElement(t);
}
function he(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function be(t) {
  return document.createTextNode(t);
}
function H() {
  return be(" ");
}
function ae() {
  return be("");
}
function F(t, e, i, n) {
  return t.addEventListener(e, i, n), () => t.removeEventListener(e, i, n);
}
function jl(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function xi(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function h(t, e, i) {
  i == null ? t.removeAttribute(e) : t.getAttribute(e) !== i && t.setAttribute(e, i);
}
const Wl = ["width", "height"];
function ue(t, e) {
  const i = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in e)
    e[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = e[n] : n === "__value" ? t.value = t[n] = e[n] : i[n] && i[n].set && Wl.indexOf(n) === -1 ? t[n] = e[n] : h(t, n, e[n]);
}
function Bt(t, e) {
  for (const i in e)
    h(t, i, e[i]);
}
function Ul(t, e) {
  Object.keys(e).forEach((i) => {
    Gl(t, i, e[i]);
  });
}
function Gl(t, e, i) {
  e in t ? t[e] = typeof t[e] == "boolean" && i === "" ? !0 : i : h(t, e, i);
}
function ft(t) {
  return /-/.test(t) ? Ul : ue;
}
function Hl(t) {
  let e;
  return {
    /* push */
    p(...i) {
      e = i, e.forEach((n) => t.push(n));
    },
    /* remove */
    r() {
      e.forEach((i) => t.splice(t.indexOf(i), 1));
    }
  };
}
function Vl(t) {
  return Array.from(t.childNodes);
}
function Ce(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function ql(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = /** @type {string} */
  e);
}
function Xl(t, e, i) {
  ~Dl.indexOf(i) ? ql(t, e) : Ce(t, e);
}
function Kr(t, e, { bubbles: i = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: i, cancelable: n });
}
function $i(t, e) {
  return new t(e);
}
const Ft = /* @__PURE__ */ new Map();
let jt = 0;
function Kl(t) {
  let e = 5381, i = t.length;
  for (; i--; )
    e = (e << 5) - e ^ t.charCodeAt(i);
  return e >>> 0;
}
function Ql(t, e) {
  const i = { stylesheet: Bl(e), rules: {} };
  return Ft.set(t, i), i;
}
function Wt(t, e, i, n, r, l, o, u = 0) {
  const s = 16.666 / n;
  let a = `{
`;
  for (let b = 0; b <= 1; b += s) {
    const _ = e + (i - e) * l(b);
    a += b * 100 + `%{${o(_, 1 - _)}}
`;
  }
  const f = a + `100% {${o(i, 1 - i)}}
}`, c = `__svelte_${Kl(f)}_${u}`, d = Xr(t), { stylesheet: k, rules: g } = Ft.get(d) || Ql(d, t);
  g[c] || (g[c] = !0, k.insertRule(`@keyframes ${c} ${f}`, k.cssRules.length));
  const m = t.style.animation || "";
  return t.style.animation = `${m ? `${m}, ` : ""}${c} ${n}ms linear ${r}ms 1 both`, jt += 1, c;
}
function Ut(t, e) {
  const i = (t.style.animation || "").split(", "), n = i.filter(
    e ? (l) => l.indexOf(e) < 0 : (l) => l.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), r = i.length - n.length;
  r && (t.style.animation = n.join(", "), jt -= r, jt || Yl());
}
function Yl() {
  Pi(() => {
    jt || (Ft.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && T(e);
    }), Ft.clear());
  });
}
let yt;
function bt(t) {
  yt = t;
}
function Tt() {
  if (!yt)
    throw new Error("Function called outside component initialization");
  return yt;
}
function Qe(t) {
  Tt().$$.on_mount.push(t);
}
function Jl(t) {
  Tt().$$.on_destroy.push(t);
}
function We() {
  const t = Tt();
  return (e, i, { cancelable: n = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const l = Kr(
        /** @type {string} */
        e,
        i,
        { cancelable: n }
      );
      return r.slice().forEach((o) => {
        o.call(t, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function Ve(t, e) {
  return Tt().$$.context.set(t, e), e;
}
function Be(t) {
  return Tt().$$.context.get(t);
}
function U(t, e) {
  const i = t.$$.callbacks[e.type];
  i && i.slice().forEach((n) => n.call(this, e));
}
const ot = [], Se = [];
let ut = [];
const mi = [], Zl = /* @__PURE__ */ Promise.resolve();
let hi = !1;
function xl() {
  hi || (hi = !0, Zl.then(Qr));
}
function Ie(t) {
  ut.push(t);
}
function Yt(t) {
  mi.push(t);
}
const si = /* @__PURE__ */ new Set();
let rt = 0;
function Qr() {
  if (rt !== 0)
    return;
  const t = yt;
  do {
    try {
      for (; rt < ot.length; ) {
        const e = ot[rt];
        rt++, bt(e), $l(e.$$);
      }
    } catch (e) {
      throw ot.length = 0, rt = 0, e;
    }
    for (bt(null), ot.length = 0, rt = 0; Se.length; )
      Se.pop()();
    for (let e = 0; e < ut.length; e += 1) {
      const i = ut[e];
      si.has(i) || (si.add(i), i());
    }
    ut.length = 0;
  } while (ot.length);
  for (; mi.length; )
    mi.pop()();
  hi = !1, si.clear(), bt(t);
}
function $l(t) {
  if (t.fragment !== null) {
    t.update(), we(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ie);
  }
}
function eo(t) {
  const e = [], i = [];
  ut.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : i.push(n)), i.forEach((n) => n()), ut = e;
}
let kt;
function Ni() {
  return kt || (kt = Promise.resolve(), kt.then(() => {
    kt = null;
  })), kt;
}
function Je(t, e, i) {
  t.dispatchEvent(Kr(`${e ? "intro" : "outro"}${i}`));
}
const zt = /* @__PURE__ */ new Set();
let ze;
function oe() {
  ze = {
    r: 0,
    c: [],
    p: ze
    // parent group
  };
}
function se() {
  ze.r || we(ze.c), ze = ze.p;
}
function y(t, e) {
  t && t.i && (zt.delete(t), t.i(e));
}
function C(t, e, i, n) {
  if (t && t.o) {
    if (zt.has(t))
      return;
    zt.add(t), ze.c.push(() => {
      zt.delete(t), n && (i && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
const zi = { duration: 0 };
function to(t, e, i) {
  const n = { direction: "in" };
  let r = e(t, i, n), l = !1, o, u, s = 0;
  function a() {
    o && Ut(t, o);
  }
  function f() {
    const {
      delay: d = 0,
      duration: k = 300,
      easing: g = Kt,
      tick: m = ne,
      css: b
    } = r || zi;
    b && (o = Wt(t, 0, 1, k, d, g, b, s++)), m(0, 1);
    const _ = Li() + d, w = _ + k;
    u && u.abort(), l = !0, Ie(() => Je(t, !0, "start")), u = Mi((v) => {
      if (l) {
        if (v >= w)
          return m(1, 0), Je(t, !0, "end"), a(), l = !1;
        if (v >= _) {
          const p = g((v - _) / k);
          m(p, 1 - p);
        }
      }
      return l;
    });
  }
  let c = !1;
  return {
    start() {
      c || (c = !0, Ut(t), me(r) ? (r = r(n), Ni().then(f)) : f());
    },
    invalidate() {
      c = !1;
    },
    end() {
      l && (a(), l = !1);
    }
  };
}
function io(t, e, i) {
  const n = { direction: "out" };
  let r = e(t, i, n), l = !0, o;
  const u = ze;
  u.r += 1;
  let s;
  function a() {
    const {
      delay: f = 0,
      duration: c = 300,
      easing: d = Kt,
      tick: k = ne,
      css: g
    } = r || zi;
    g && (o = Wt(t, 1, 0, c, f, d, g));
    const m = Li() + f, b = m + c;
    Ie(() => Je(t, !1, "start")), "inert" in t && (s = /** @type {HTMLElement} */
    t.inert, t.inert = !0), Mi((_) => {
      if (l) {
        if (_ >= b)
          return k(0, 1), Je(t, !1, "end"), --u.r || we(u.c), !1;
        if (_ >= m) {
          const w = d((_ - m) / c);
          k(1 - w, w);
        }
      }
      return l;
    });
  }
  return me(r) ? Ni().then(() => {
    r = r(n), a();
  }) : a(), {
    end(f) {
      f && "inert" in t && (t.inert = s), f && r.tick && r.tick(1, 0), l && (o && Ut(t, o), l = !1);
    }
  };
}
function Re(t, e, i, n) {
  let l = e(t, i, { direction: "both" }), o = n ? 0 : 1, u = null, s = null, a = null, f;
  function c() {
    a && Ut(t, a);
  }
  function d(g, m) {
    const b = (
      /** @type {Program['d']} */
      g.b - o
    );
    return m *= Math.abs(b), {
      a: o,
      b: g.b,
      d: b,
      duration: m,
      start: g.start,
      end: g.start + m,
      group: g.group
    };
  }
  function k(g) {
    const {
      delay: m = 0,
      duration: b = 300,
      easing: _ = Kt,
      tick: w = ne,
      css: v
    } = l || zi, p = {
      start: Li() + m,
      b: g
    };
    g || (p.group = ze, ze.r += 1), "inert" in t && (g ? f !== void 0 && (t.inert = f) : (f = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), u || s ? s = p : (v && (c(), a = Wt(t, o, g, b, m, _, v)), g && w(0, 1), u = d(p, b), Ie(() => Je(t, g, "start")), Mi((S) => {
      if (s && S > s.start && (u = d(s, b), s = null, Je(t, u.b, "start"), v && (c(), a = Wt(
        t,
        o,
        u.b,
        u.duration,
        0,
        _,
        l.css
      ))), u) {
        if (S >= u.end)
          w(o = u.b, 1 - o), Je(t, u.b, "end"), s || (u.b ? c() : --u.group.r || we(u.group.c)), u = null;
        else if (S >= u.start) {
          const I = S - u.start;
          o = u.a + u.d * _(I / u.duration), w(o, 1 - o);
        }
      }
      return !!(u || s);
    }));
  }
  return {
    run(g) {
      me(l) ? Ni().then(() => {
        l = l({ direction: g ? "in" : "out" }), k(g);
      }) : k(g);
    },
    end() {
      c(), u = s = null;
    }
  };
}
function ve(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function ce(t, e) {
  const i = {}, n = {}, r = { $$scope: 1 };
  let l = t.length;
  for (; l--; ) {
    const o = t[l], u = e[l];
    if (u) {
      for (const s in o)
        s in u || (n[s] = 1);
      for (const s in u)
        r[s] || (i[s] = u[s], r[s] = 1);
      t[l] = u;
    } else
      for (const s in o)
        r[s] = 1;
  }
  for (const o in n)
    o in i || (i[o] = void 0);
  return i;
}
function Le(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Jt(t, e, i) {
  const n = t.$$.props[e];
  n !== void 0 && (t.$$.bound[n] = i, i(t.$$.ctx[n]));
}
function $(t) {
  t && t.c();
}
function Z(t, e, i) {
  const { fragment: n, after_update: r } = t.$$;
  n && n.m(e, i), Ie(() => {
    const l = t.$$.on_mount.map(Ur).filter(me);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : we(l), t.$$.on_mount = [];
  }), r.forEach(Ie);
}
function x(t, e) {
  const i = t.$$;
  i.fragment !== null && (eo(i.after_update), we(i.on_destroy), i.fragment && i.fragment.d(e), i.on_destroy = i.fragment = null, i.ctx = []);
}
function no(t, e) {
  t.$$.dirty[0] === -1 && (ot.push(t), xl(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function te(t, e, i, n, r, l, o, u = [-1]) {
  const s = yt;
  bt(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: ne,
    not_equal: r,
    bound: Zi(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Zi(),
    dirty: u,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  o && o(a.root);
  let f = !1;
  if (a.ctx = i ? i(t, e.props || {}, (c, d, ...k) => {
    const g = k.length ? k[0] : d;
    return a.ctx && r(a.ctx[c], a.ctx[c] = g) && (!a.skip_bound && a.bound[c] && a.bound[c](g), f && no(t, c)), d;
  }) : [], a.update(), f = !0, we(a.before_update), a.fragment = n ? n(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = Vl(e.target);
      a.fragment && a.fragment.l(c), c.forEach(T);
    } else
      a.fragment && a.fragment.c();
    e.intro && y(t.$$.fragment), Z(t, e.target, e.anchor), Qr();
  }
  bt(s);
}
class ie {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    oi(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    oi(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    x(this, 1), this.$destroy = ne;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, i) {
    if (!me(i))
      return ne;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(i), () => {
      const r = n.indexOf(i);
      r !== -1 && n.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !zl(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const ro = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ro);
const lt = [];
function Et(t, e = ne) {
  let i;
  const n = /* @__PURE__ */ new Set();
  function r(u) {
    if (X(t, u) && (t = u, i)) {
      const s = !lt.length;
      for (const a of n)
        a[1](), lt.push(a, t);
      if (s) {
        for (let a = 0; a < lt.length; a += 2)
          lt[a][0](lt[a + 1]);
        lt.length = 0;
      }
    }
  }
  function l(u) {
    r(u(t));
  }
  function o(u, s = ne) {
    const a = [u, s];
    return n.add(a), n.size === 1 && (i = e(r, l) || ne), u(t), () => {
      n.delete(a), n.size === 0 && i && (i(), i = null);
    };
  }
  return { set: r, update: l, subscribe: o };
}
function Yr() {
  for (var t = 0, e, i, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (i = Jr(e)) && (n && (n += " "), n += i);
  return n;
}
function Jr(t) {
  if (typeof t == "string")
    return t;
  for (var e, i = "", n = 0; n < t.length; n++)
    t[n] && (e = Jr(t[n])) && (i && (i += " "), i += e);
  return i;
}
var Ri = "-";
function lo(t) {
  var e = so(t), i = t.conflictingClassGroups, n = t.conflictingClassGroupModifiers, r = n === void 0 ? {} : n;
  function l(u) {
    var s = u.split(Ri);
    return s[0] === "" && s.length !== 1 && s.shift(), Zr(s, e) || oo(u);
  }
  function o(u, s) {
    var a = i[u] || [];
    return s && r[u] ? [].concat(a, r[u]) : a;
  }
  return {
    getClassGroupId: l,
    getConflictingClassGroupIds: o
  };
}
function Zr(t, e) {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  var i = t[0], n = e.nextPart.get(i), r = n ? Zr(t.slice(1), n) : void 0;
  if (r)
    return r;
  if (e.validators.length !== 0) {
    var l = t.join(Ri);
    return (o = e.validators.find(function(u) {
      var s = u.validator;
      return s(l);
    })) == null ? void 0 : o.classGroupId;
  }
}
var en = /^\[(.+)\]$/;
function oo(t) {
  if (en.test(t)) {
    var e = en.exec(t)[1], i = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}
function so(t) {
  var e = t.theme, i = t.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, r = ao(Object.entries(t.classGroups), i);
  return r.forEach(function(l) {
    var o = l[0], u = l[1];
    bi(u, n, o, e);
  }), n;
}
function bi(t, e, i, n) {
  t.forEach(function(r) {
    if (typeof r == "string") {
      var l = r === "" ? e : tn(e, r);
      l.classGroupId = i;
      return;
    }
    if (typeof r == "function") {
      if (uo(r)) {
        bi(r(n), e, i, n);
        return;
      }
      e.validators.push({
        validator: r,
        classGroupId: i
      });
      return;
    }
    Object.entries(r).forEach(function(o) {
      var u = o[0], s = o[1];
      bi(s, tn(e, u), i, n);
    });
  });
}
function tn(t, e) {
  var i = t;
  return e.split(Ri).forEach(function(n) {
    i.nextPart.has(n) || i.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(n);
  }), i;
}
function uo(t) {
  return t.isThemeGetter;
}
function ao(t, e) {
  return e ? t.map(function(i) {
    var n = i[0], r = i[1], l = r.map(function(o) {
      return typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(function(u) {
        var s = u[0], a = u[1];
        return [e + s, a];
      })) : o;
    });
    return [n, l];
  }) : t;
}
function fo(t) {
  if (t < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var e = 0, i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function r(l, o) {
    i.set(l, o), e++, e > t && (e = 0, n = i, i = /* @__PURE__ */ new Map());
  }
  return {
    get: function(o) {
      var u = i.get(o);
      if (u !== void 0)
        return u;
      if ((u = n.get(o)) !== void 0)
        return r(o, u), u;
    },
    set: function(o, u) {
      i.has(o) ? i.set(o, u) : r(o, u);
    }
  };
}
var xr = "!";
function co(t) {
  var e = t.separator || ":", i = e.length === 1, n = e[0], r = e.length;
  return function(o) {
    for (var u = [], s = 0, a = 0, f, c = 0; c < o.length; c++) {
      var d = o[c];
      if (s === 0) {
        if (d === n && (i || o.slice(c, c + r) === e)) {
          u.push(o.slice(a, c)), a = c + r;
          continue;
        }
        if (d === "/") {
          f = c;
          continue;
        }
      }
      d === "[" ? s++ : d === "]" && s--;
    }
    var k = u.length === 0 ? o : o.substring(a), g = k.startsWith(xr), m = g ? k.substring(1) : k, b = f && f > a ? f - a : void 0;
    return {
      modifiers: u,
      hasImportantModifier: g,
      baseClassName: m,
      maybePostfixModifierPosition: b
    };
  };
}
function ko(t) {
  if (t.length <= 1)
    return t;
  var e = [], i = [];
  return t.forEach(function(n) {
    var r = n[0] === "[";
    r ? (e.push.apply(e, i.sort().concat([n])), i = []) : i.push(n);
  }), e.push.apply(e, i.sort()), e;
}
function go(t) {
  return {
    cache: fo(t.cacheSize),
    splitModifiers: co(t),
    ...lo(t)
  };
}
var mo = /\s+/;
function ho(t, e) {
  var i = e.splitModifiers, n = e.getClassGroupId, r = e.getConflictingClassGroupIds, l = /* @__PURE__ */ new Set();
  return t.trim().split(mo).map(function(o) {
    var u = i(o), s = u.modifiers, a = u.hasImportantModifier, f = u.baseClassName, c = u.maybePostfixModifierPosition, d = n(c ? f.substring(0, c) : f), k = !!c;
    if (!d) {
      if (!c)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if (d = n(f), !d)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      k = !1;
    }
    var g = ko(s).join(":"), m = a ? g + xr : g;
    return {
      isTailwindClass: !0,
      modifierId: m,
      classGroupId: d,
      originalClassName: o,
      hasPostfixModifier: k
    };
  }).reverse().filter(function(o) {
    if (!o.isTailwindClass)
      return !0;
    var u = o.modifierId, s = o.classGroupId, a = o.hasPostfixModifier, f = u + s;
    return l.has(f) ? !1 : (l.add(f), r(s, a).forEach(function(c) {
      return l.add(u + c);
    }), !0);
  }).reverse().map(function(o) {
    return o.originalClassName;
  }).join(" ");
}
function bo() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  var n, r, l, o = u;
  function u(a) {
    var f = e[0], c = e.slice(1), d = c.reduce(function(k, g) {
      return g(k);
    }, f());
    return n = go(d), r = n.cache.get, l = n.cache.set, o = s, s(a);
  }
  function s(a) {
    var f = r(a);
    if (f)
      return f;
    var c = ho(a, n);
    return l(a, c), c;
  }
  return function() {
    return o(Yr.apply(null, arguments));
  };
}
function ke(t) {
  var e = function(n) {
    return n[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var $r = /^\[(?:([a-z-]+):)?(.+)\]$/i, _o = /^\d+\/\d+$/, po = /* @__PURE__ */ new Set(["px", "full", "screen"]), yo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, wo = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Me(t) {
  return Ye(t) || po.has(t) || _o.test(t) || _i(t);
}
function _i(t) {
  return it(t, "length", Io);
}
function Co(t) {
  return it(t, "size", el);
}
function So(t) {
  return it(t, "position", el);
}
function To(t) {
  return it(t, "url", Oo);
}
function Pt(t) {
  return it(t, "number", Ye);
}
function Ye(t) {
  return !Number.isNaN(Number(t));
}
function Eo(t) {
  return t.endsWith("%") && Ye(t.slice(0, -1));
}
function gt(t) {
  return nn(t) || it(t, "number", nn);
}
function fe(t) {
  return $r.test(t);
}
function mt() {
  return !0;
}
function Ge(t) {
  return yo.test(t);
}
function Ao(t) {
  return it(t, "", Lo);
}
function it(t, e, i) {
  var n = $r.exec(t);
  return n ? n[1] ? n[1] === e : i(n[2]) : !1;
}
function Io(t) {
  return vo.test(t);
}
function el() {
  return !1;
}
function Oo(t) {
  return t.startsWith("url(");
}
function nn(t) {
  return Number.isInteger(Number(t));
}
function Lo(t) {
  return wo.test(t);
}
function Po() {
  var t = ke("colors"), e = ke("spacing"), i = ke("blur"), n = ke("brightness"), r = ke("borderColor"), l = ke("borderRadius"), o = ke("borderSpacing"), u = ke("borderWidth"), s = ke("contrast"), a = ke("grayscale"), f = ke("hueRotate"), c = ke("invert"), d = ke("gap"), k = ke("gradientColorStops"), g = ke("gradientColorStopPositions"), m = ke("inset"), b = ke("margin"), _ = ke("opacity"), w = ke("padding"), v = ke("saturate"), p = ke("scale"), S = ke("sepia"), I = ke("skew"), E = ke("space"), j = ke("translate"), q = function() {
    return ["auto", "contain", "none"];
  }, ee = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, z = function() {
    return ["auto", fe, e];
  }, W = function() {
    return [fe, e];
  }, ge = function() {
    return ["", Me];
  }, N = function() {
    return ["auto", Ye, fe];
  }, D = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, L = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, le = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, de = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, pe = function() {
    return ["", "0", fe];
  }, Pe = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Ae = function() {
    return [Ye, Pt];
  }, Ne = function() {
    return [Ye, fe];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [mt],
      spacing: [Me],
      blur: ["none", "", Ge, fe],
      brightness: Ae(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Ge, fe],
      borderSpacing: W(),
      borderWidth: ge(),
      contrast: Ae(),
      grayscale: pe(),
      hueRotate: Ne(),
      invert: pe(),
      gap: W(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Eo, _i],
      inset: z(),
      margin: z(),
      opacity: Ae(),
      padding: W(),
      saturate: Ae(),
      scale: Ae(),
      sepia: pe(),
      skew: Ne(),
      space: W(),
      translate: W()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", fe]
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
        columns: [Ge]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Pe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Pe()
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
        object: [].concat(D(), [fe])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ee()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ee()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ee()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: q()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": q()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": q()
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
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
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
        z: ["auto", gt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: z()
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
        flex: ["1", "auto", "initial", "none", fe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: pe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: pe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", gt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [mt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", gt]
        }, fe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [mt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [gt]
        }, fe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
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
        "auto-cols": ["auto", "min", "max", "fr", fe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", fe]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [d]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [d]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [d]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(de())
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
        content: ["normal"].concat(de(), ["baseline"])
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
        "place-content": [].concat(de(), ["baseline"])
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
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [E]
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
        "space-y": [E]
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
        w: ["auto", "min", "max", "fit", fe, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", fe, Me]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Ge]
        }, Ge, fe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [fe, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", fe, Me]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [fe, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ge, _i]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [mt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", fe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ye, Pt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", fe, Me]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", fe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", fe]
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
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [_]
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
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [_]
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
        decoration: [].concat(L(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Me]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", fe, Me]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
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
        indent: W()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", fe]
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
        content: ["none", fe]
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
        "bg-opacity": [_]
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
        bg: [].concat(D(), [So])
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
        bg: ["auto", "cover", "contain", Co]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, To]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [k]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [k]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [l]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [l]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [l]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [l]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [l]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [l]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [l]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [l]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [l]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [l]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [l]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [l]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [l]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [l]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [l]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [u]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [u]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [u]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [u]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [u]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [u]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [u]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [u]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [u]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [_]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(L(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [u]
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
        "divide-y": [u]
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
        "divide-opacity": [_]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: L()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [r]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [r]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [r]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [r]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [r]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [r]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [r]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [r]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(L())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [fe, Me]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Me]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ge()
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
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [_]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Me]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Ge, Ao]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [mt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": le()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        blur: [i]
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
        "drop-shadow": ["", "none", Ge, fe]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [a]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [v]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [S]
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
        "backdrop-blur": [i]
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
        "backdrop-grayscale": [a]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [_]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [v]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [S]
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
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", fe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Ne()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", fe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Ne()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", fe]
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
        scale: [p]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [p]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [p]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [gt, fe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [j]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [j]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [I]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [I]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", fe]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", fe]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
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
        "scroll-m": W()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": W()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": W()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": W()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": W()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": W()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": W()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": W()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": W()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": W()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": W()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": W()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": W()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": W()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": W()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": W()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": W()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": W()
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
        "will-change": ["auto", "scroll", "contents", "transform", fe]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Me, Pt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
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
var O = /* @__PURE__ */ bo(Po);
function Mo(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function tl(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function No(t) {
  const e = Math.cos(t * Math.PI * 0.5);
  return Math.abs(e) < 1e-14 ? 1 : 1 - e;
}
function Di(t, { delay: e = 0, duration: i = 400, easing: n = Mo, amount: r = 5, opacity: l = 0 } = {}) {
  const o = getComputedStyle(t), u = +o.opacity, s = o.filter === "none" ? "" : o.filter, a = u * (1 - l), [f, c] = gi(r);
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (d, k) => `opacity: ${u - a * k}; filter: ${s} blur(${k * f}${c});`
  };
}
function Zt(t, { delay: e = 0, duration: i = 400, easing: n = Kt } = {}) {
  const r = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (l) => `opacity: ${l * r}`
  };
}
function vt(t, { delay: e = 0, duration: i = 400, easing: n = tl, x: r = 0, y: l = 0, opacity: o = 0 } = {}) {
  const u = getComputedStyle(t), s = +u.opacity, a = u.transform === "none" ? "" : u.transform, f = s * (1 - o), [c, d] = gi(r), [k, g] = gi(l);
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (m, b) => `
			transform: ${a} translate(${(1 - m) * c}${d}, ${(1 - m) * k}${g});
			opacity: ${s - f * b}`
  };
}
function Bi(t, { delay: e = 0, duration: i = 400, easing: n = tl, axis: r = "y" } = {}) {
  const l = getComputedStyle(t), o = +l.opacity, u = r === "y" ? "height" : "width", s = parseFloat(l[u]), a = r === "y" ? ["top", "bottom"] : ["left", "right"], f = a.map(
    (_) => `${_[0].toUpperCase()}${_.slice(1)}`
  ), c = parseFloat(l[`padding${f[0]}`]), d = parseFloat(l[`padding${f[1]}`]), k = parseFloat(l[`margin${f[0]}`]), g = parseFloat(l[`margin${f[1]}`]), m = parseFloat(
    l[`border${f[0]}Width`]
  ), b = parseFloat(
    l[`border${f[1]}Width`]
  );
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (_) => `overflow: hidden;opacity: ${Math.min(_ * 20, 1) * o};${u}: ${_ * s}px;padding-${a[0]}: ${_ * c}px;padding-${a[1]}: ${_ * d}px;margin-${a[0]}: ${_ * k}px;margin-${a[1]}: ${_ * g}px;border-${a[0]}-width: ${_ * m}px;border-${a[1]}-width: ${_ * b}px;`
  };
}
const zo = (t) => ({}), rn = (t) => ({}), Ro = (t) => ({}), ln = (t) => ({}), Do = (t) => ({}), on = (t) => ({});
function Bo(t) {
  let e;
  const i = (
    /*#slots*/
    t[22].arrowdown
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[21],
    rn
  ), r = n || jo();
  return {
    c() {
      r && r.c();
    },
    m(l, o) {
      r && r.m(l, o), e = !0;
    },
    p(l, o) {
      n && n.p && (!e || o & /*$$scope*/
      2097152) && Y(
        n,
        i,
        l,
        /*$$scope*/
        l[21],
        e ? Q(
          i,
          /*$$scope*/
          l[21],
          o,
          zo
        ) : J(
          /*$$scope*/
          l[21]
        ),
        rn
      );
    },
    i(l) {
      e || (y(r, l), e = !0);
    },
    o(l) {
      C(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function Fo(t) {
  let e;
  const i = (
    /*#slots*/
    t[22].arrowup
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[21],
    ln
  ), r = n || Wo();
  return {
    c() {
      r && r.c();
    },
    m(l, o) {
      r && r.m(l, o), e = !0;
    },
    p(l, o) {
      n && n.p && (!e || o & /*$$scope*/
      2097152) && Y(
        n,
        i,
        l,
        /*$$scope*/
        l[21],
        e ? Q(
          i,
          /*$$scope*/
          l[21],
          o,
          Ro
        ) : J(
          /*$$scope*/
          l[21]
        ),
        ln
      );
    },
    i(l) {
      e || (y(r, l), e = !0);
    },
    o(l) {
      C(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function jo(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "m1 1 4 4 4-4"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    p: ne,
    d(n) {
      n && T(e);
    }
  };
}
function Wo(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5 5 1 1 5"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    p: ne,
    d(n) {
      n && T(e);
    }
  };
}
function Uo(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[22].default
  ), l = K(
    r,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = P("div"), i = P("div"), l && l.c(), h(
        i,
        "class",
        /*contentClass*/
        t[3]
      ), h(e, "class", "uikit-hidden");
    },
    m(o, u) {
      A(o, e, u), R(e, i), l && l.m(i, null), n = !0;
    },
    p(o, u) {
      l && l.p && (!n || u & /*$$scope*/
      2097152) && Y(
        l,
        r,
        o,
        /*$$scope*/
        o[21],
        n ? Q(
          r,
          /*$$scope*/
          o[21],
          u,
          null
        ) : J(
          /*$$scope*/
          o[21]
        ),
        null
      ), (!n || u & /*contentClass*/
      8) && h(
        i,
        "class",
        /*contentClass*/
        o[3]
      );
    },
    i(o) {
      n || (y(l, o), n = !0);
    },
    o(o) {
      C(l, o), n = !1;
    },
    d(o) {
      o && T(e), l && l.d(o);
    }
  };
}
function Go(t) {
  let e, i, n, r;
  const l = (
    /*#slots*/
    t[22].default
  ), o = K(
    l,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = P("div"), i = P("div"), o && o.c(), h(
        i,
        "class",
        /*contentClass*/
        t[3]
      );
    },
    m(u, s) {
      A(u, e, s), R(e, i), o && o.m(i, null), r = !0;
    },
    p(u, s) {
      t = u, o && o.p && (!r || s & /*$$scope*/
      2097152) && Y(
        o,
        l,
        t,
        /*$$scope*/
        t[21],
        r ? Q(
          l,
          /*$$scope*/
          t[21],
          s,
          null
        ) : J(
          /*$$scope*/
          t[21]
        ),
        null
      ), (!r || s & /*contentClass*/
      8) && h(
        i,
        "class",
        /*contentClass*/
        t[3]
      );
    },
    i(u) {
      r || (y(o, u), u && Ie(() => {
        r && (n || (n = Re(
          e,
          /*multiple*/
          t[4],
          /*transitionParams*/
          t[1],
          !0
        )), n.run(1));
      }), r = !0);
    },
    o(u) {
      C(o, u), u && (n || (n = Re(
        e,
        /*multiple*/
        t[4],
        /*transitionParams*/
        t[1],
        !1
      )), n.run(0)), r = !1;
    },
    d(u) {
      u && T(e), o && o.d(u), u && n && n.end();
    }
  };
}
function Ho(t) {
  let e, i, n, r, l, o, u, s, a, f, c, d;
  const k = (
    /*#slots*/
    t[22].header
  ), g = K(
    k,
    t,
    /*$$scope*/
    t[21],
    on
  ), m = [Fo, Bo], b = [];
  function _(S, I) {
    return (
      /*open*/
      S[0] ? 0 : 1
    );
  }
  r = _(t), l = b[r] = m[r](t);
  const w = [Go, Uo], v = [];
  function p(S, I) {
    return (
      /*open*/
      S[0] ? 0 : 1
    );
  }
  return u = p(t), s = v[u] = w[u](t), {
    c() {
      e = P("h2"), i = P("button"), g && g.c(), n = H(), l.c(), o = H(), s.c(), a = ae(), h(i, "type", "button"), h(
        i,
        "class",
        /*buttonClass*/
        t[2]
      ), h(
        i,
        "aria-expanded",
        /*open*/
        t[0]
      ), h(e, "class", "group");
    },
    m(S, I) {
      A(S, e, I), R(e, i), g && g.m(i, null), R(i, n), b[r].m(i, null), A(S, o, I), v[u].m(S, I), A(S, a, I), f = !0, c || (d = F(
        i,
        "click",
        /*handleToggle*/
        t[6]
      ), c = !0);
    },
    p(S, [I]) {
      g && g.p && (!f || I & /*$$scope*/
      2097152) && Y(
        g,
        k,
        S,
        /*$$scope*/
        S[21],
        f ? Q(
          k,
          /*$$scope*/
          S[21],
          I,
          Do
        ) : J(
          /*$$scope*/
          S[21]
        ),
        on
      );
      let E = r;
      r = _(S), r === E ? b[r].p(S, I) : (oe(), C(b[E], 1, 1, () => {
        b[E] = null;
      }), se(), l = b[r], l ? l.p(S, I) : (l = b[r] = m[r](S), l.c()), y(l, 1), l.m(i, null)), (!f || I & /*buttonClass*/
      4) && h(
        i,
        "class",
        /*buttonClass*/
        S[2]
      ), (!f || I & /*open*/
      1) && h(
        i,
        "aria-expanded",
        /*open*/
        S[0]
      );
      let j = u;
      u = p(S), u === j ? v[u].p(S, I) : (oe(), C(v[j], 1, 1, () => {
        v[j] = null;
      }), se(), s = v[u], s ? s.p(S, I) : (s = v[u] = w[u](S), s.c()), y(s, 1), s.m(a.parentNode, a));
    },
    i(S) {
      f || (y(g, S), y(l), y(s), f = !0);
    },
    o(S) {
      C(g, S), C(l), C(s), f = !1;
    },
    d(S) {
      S && (T(e), T(o), T(a)), g && g.d(S), b[r].d(), v[u].d(S), c = !1, d();
    }
  };
}
function Vo(t, e, i) {
  let n, r, { $$slots: l = {}, $$scope: o } = e, { open: u = !1 } = e, { activeClass: s = void 0 } = e, { inactiveClass: a = void 0 } = e, { defaultClass: f = "uikit-flex uikit-items-center uikit-justify-between uikit-w-full uikit-font-medium uikit-text-left group-first:uikit-rounded-t-xl uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { transitionType: c = "slide" } = e, { transitionParams: d = {} } = e, { paddingFlush: k = "uikit-py-5" } = e, { paddingDefault: g = "uikit-p-5" } = e, { textFlushOpen: m = "uikit-text-gray-900 dark:uikit-text-white" } = e, { textFlushDefault: b = "uikit-text-gray-500 dark:uikit-text-gray-400" } = e, { borderClass: _ = "uikit-border-s uikit-border-e group-first:uikit-border-t" } = e, { borderOpenClass: w = "uikit-border-s uikit-border-e" } = e, { borderBottomClass: v = "uikit-border-b" } = e, { borderSharedClass: p = "uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { classActive: S = void 0 } = e, { classInactive: I = void 0 } = e, E = O(s, S), j = O(a, I);
  const q = (L, le) => {
    switch (c) {
      case "blur":
        return Di(L, le);
      case "fly":
        return vt(L, le);
      case "fade":
        return Zt(L, le);
      default:
        return Bi(L, le);
    }
  }, ee = Be("ctx") ?? {}, z = {}, W = ee.selected ?? Et();
  Qt(t, W, (L) => i(23, r = L));
  let ge = u;
  u = !1, Qe(() => (ge && Hr(W, r = z, r), W.subscribe((L) => i(0, u = L === z))));
  const N = (L) => W.set(u ? {} : z);
  let D;
  return t.$$set = (L) => {
    i(29, e = M(M({}, e), B(L))), "open" in L && i(0, u = L.open), "activeClass" in L && i(7, s = L.activeClass), "inactiveClass" in L && i(8, a = L.inactiveClass), "defaultClass" in L && i(9, f = L.defaultClass), "transitionType" in L && i(10, c = L.transitionType), "transitionParams" in L && i(1, d = L.transitionParams), "paddingFlush" in L && i(11, k = L.paddingFlush), "paddingDefault" in L && i(12, g = L.paddingDefault), "textFlushOpen" in L && i(13, m = L.textFlushOpen), "textFlushDefault" in L && i(14, b = L.textFlushDefault), "borderClass" in L && i(15, _ = L.borderClass), "borderOpenClass" in L && i(16, w = L.borderOpenClass), "borderBottomClass" in L && i(17, v = L.borderBottomClass), "borderSharedClass" in L && i(18, p = L.borderSharedClass), "classActive" in L && i(19, S = L.classActive), "classInactive" in L && i(20, I = L.classInactive), "$$scope" in L && i(21, o = L.$$scope);
  }, t.$$.update = () => {
    i(2, D = O([
      f,
      ee.flush || _,
      v,
      p,
      ee.flush ? k : g,
      u && (ee.flush ? m : E || ee.activeClass),
      !u && (ee.flush ? b : j || ee.inactiveClass),
      e.class
    ])), t.$$.dirty & /*paddingFlush, paddingDefault, borderOpenClass, borderBottomClass, borderSharedClass*/
    464896 && i(3, n = O([
      ee.flush ? k : g,
      ee.flush ? "" : w,
      v,
      p
    ]));
  }, e = B(e), [
    u,
    d,
    D,
    n,
    q,
    W,
    N,
    s,
    a,
    f,
    c,
    k,
    g,
    m,
    b,
    _,
    w,
    v,
    p,
    S,
    I,
    o,
    l
  ];
}
class qo extends ie {
  constructor(e) {
    super(), te(this, e, Vo, Ho, X, {
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
function ui(t) {
  let e, i, n, r, l;
  const o = (
    /*#slots*/
    t[12].default
  ), u = K(
    o,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let s = [
    { role: (
      /*role*/
      t[4]
    ) },
    /*$$restProps*/
    t[6],
    { class: (
      /*divClass*/
      t[5]
    ) }
  ], a = {};
  for (let f = 0; f < s.length; f += 1)
    a = M(a, s[f]);
  return {
    c() {
      e = P(
        /*tag*/
        t[1]
      ), u && u.c(), ft(
        /*tag*/
        t[1]
      )(e, a);
    },
    m(f, c) {
      A(f, e, c), u && u.m(e, null), t[18](e), n = !0, r || (l = [
        xe(i = /*use*/
        t[2].call(
          null,
          e,
          /*options*/
          t[3]
        )),
        F(
          e,
          "click",
          /*click_handler*/
          t[13]
        ),
        F(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[14]
        ),
        F(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[15]
        ),
        F(
          e,
          "focusin",
          /*focusin_handler*/
          t[16]
        ),
        F(
          e,
          "focusout",
          /*focusout_handler*/
          t[17]
        )
      ], r = !0);
    },
    p(f, c) {
      u && u.p && (!n || c & /*$$scope*/
      2048) && Y(
        u,
        o,
        f,
        /*$$scope*/
        f[11],
        n ? Q(
          o,
          /*$$scope*/
          f[11],
          c,
          null
        ) : J(
          /*$$scope*/
          f[11]
        ),
        null
      ), ft(
        /*tag*/
        f[1]
      )(e, a = ce(s, [
        (!n || c & /*role*/
        16) && { role: (
          /*role*/
          f[4]
        ) },
        c & /*$$restProps*/
        64 && /*$$restProps*/
        f[6],
        (!n || c & /*divClass*/
        32) && { class: (
          /*divClass*/
          f[5]
        ) }
      ])), i && me(i.update) && c & /*options*/
      8 && i.update.call(
        null,
        /*options*/
        f[3]
      );
    },
    i(f) {
      n || (y(u, f), n = !0);
    },
    o(f) {
      C(u, f), n = !1;
    },
    d(f) {
      f && T(e), u && u.d(f), t[18](null), r = !1, we(l);
    }
  };
}
function Xo(t) {
  let e = (
    /*tag*/
    t[1]
  ), i, n, r = (
    /*tag*/
    t[1] && ui(t)
  );
  return {
    c() {
      r && r.c(), i = ae();
    },
    m(l, o) {
      r && r.m(l, o), A(l, i, o), n = !0;
    },
    p(l, [o]) {
      /*tag*/
      l[1] ? e ? X(
        e,
        /*tag*/
        l[1]
      ) ? (r.d(1), r = ui(l), e = /*tag*/
      l[1], r.c(), r.m(i.parentNode, i)) : r.p(l, o) : (r = ui(l), e = /*tag*/
      l[1], r.c(), r.m(i.parentNode, i)) : e && (r.d(1), r = null, e = /*tag*/
      l[1]);
    },
    i(l) {
      n || (y(r, l), n = !0);
    },
    o(l) {
      C(r, l), n = !1;
    },
    d(l) {
      l && T(i), r && r.d(l);
    }
  };
}
function Ko(t, e, i) {
  const n = ["tag", "color", "rounded", "border", "shadow", "node", "use", "options", "role"];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e;
  const u = () => {
  };
  Ve("background", !0);
  let { tag: s = r.href ? "a" : "div" } = e, { color: a = "default" } = e, { rounded: f = !1 } = e, { border: c = !1 } = e, { shadow: d = !1 } = e, { node: k = void 0 } = e, { use: g = u } = e, { options: m = {} } = e, { role: b = void 0 } = e;
  const _ = {
    gray: "uikit-bg-gray-50 dark:uikit-bg-gray-800",
    red: "uikit-bg-red-50 dark:uikit-bg-gray-800",
    yellow: "uikit-bg-yellow-50 dark:uikit-bg-gray-800 ",
    green: "uikit-bg-green-50 dark:uikit-bg-gray-800 ",
    indigo: "uikit-bg-indigo-50 dark:uikit-bg-gray-800 ",
    purple: "uikit-bg-purple-50 dark:uikit-bg-gray-800 ",
    pink: "uikit-bg-pink-50 dark:uikit-bg-gray-800 ",
    blue: "uikit-bg-blue-50 dark:uikit-bg-gray-800 ",
    light: "uikit-bg-gray-50 dark:uikit-bg-gray-700",
    dark: "uikit-bg-gray-50 dark:uikit-bg-gray-800",
    default: "uikit-bg-white dark:uikit-bg-gray-800",
    dropdown: "uikit-bg-white dark:uikit-bg-gray-700",
    navbar: "uikit-bg-white dark:uikit-bg-gray-900",
    navbarUl: "uikit-bg-gray-50 dark:uikit-bg-gray-800",
    form: "uikit-bg-gray-50 dark:uikit-bg-gray-700",
    primary: "uikit-bg-primary-50 dark:uikit-bg-gray-800 ",
    orange: "uikit-bg-orange-50 dark:uikit-bg-orange-800",
    none: ""
  }, w = {
    gray: "uikit-text-gray-800 dark:uikit-text-gray-300",
    red: "uikit-text-red-800 dark:uikit-text-red-400",
    yellow: "uikit-text-yellow-800 dark:uikit-text-yellow-300",
    green: "uikit-text-green-800 dark:uikit-text-green-400",
    indigo: "uikit-text-indigo-800 dark:uikit-text-indigo-400",
    purple: "uikit-text-purple-800 dark:uikit-text-purple-400",
    pink: "uikit-text-pink-800 dark:uikit-text-pink-400",
    blue: "uikit-text-blue-800 dark:uikit-text-blue-400",
    light: "uikit-text-gray-700 dark:uikit-text-gray-300",
    dark: "uikit-text-gray-700 dark:uikit-text-gray-300",
    default: "uikit-text-gray-500 dark:uikit-text-gray-400",
    dropdown: "uikit-text-gray-700 dark:uikit-text-gray-200",
    navbar: "uikit-text-gray-700 dark:uikit-text-gray-200",
    navbarUl: "uikit-text-gray-700 dark:uikit-text-gray-400",
    form: "uikit-text-gray-900 dark:uikit-text-white",
    primary: "uikit-text-primary-800 dark:uikit-text-primary-400",
    orange: "uikit-text-orange-800 dark:uikit-text-orange-400",
    none: ""
  }, v = {
    gray: "uikit-border-gray-300 dark:uikit-border-gray-800 uikit-divide-gray-300 dark:uikit-divide-gray-800",
    red: "uikit-border-red-300 dark:uikit-border-red-800 uikit-divide-red-300 dark:uikit-divide-red-800",
    yellow: "uikit-border-yellow-300 dark:uikit-border-yellow-800 uikit-divide-yellow-300 dark:uikit-divide-yellow-800",
    green: "uikit-border-green-300 dark:uikit-border-green-800 uikit-divide-green-300 dark:uikit-divide-green-800",
    indigo: "uikit-border-indigo-300 dark:uikit-border-indigo-800 uikit-divide-indigo-300 dark:uikit-divide-indigo-800",
    purple: "uikit-border-purple-300 dark:uikit-border-purple-800 uikit-divide-purple-300 dark:uikit-divide-purple-800",
    pink: "uikit-border-pink-300 dark:uikit-border-pink-800 uikit-divide-pink-300 dark:uikit-divide-pink-800",
    blue: "uikit-border-blue-300 dark:uikit-border-blue-800 uikit-divide-blue-300 dark:uikit-divide-blue-800",
    light: "uikit-border-gray-500 uikit-divide-gray-500",
    dark: "uikit-border-gray-500 uikit-divide-gray-500",
    default: "uikit-border-gray-200 dark:uikit-border-gray-700 uikit-divide-gray-200 dark:uikit-divide-gray-700",
    dropdown: "uikit-border-gray-100 dark:uikit-border-gray-600 uikit-divide-gray-100 dark:uikit-divide-gray-600",
    navbar: "uikit-border-gray-100 dark:uikit-border-gray-700 uikit-divide-gray-100 dark:uikit-divide-gray-700",
    navbarUl: "uikit-border-gray-100 dark:uikit-border-gray-700 uikit-divide-gray-100 dark:uikit-divide-gray-700",
    form: "uikit-border-gray-300 dark:uikit-border-gray-700 uikit-divide-gray-300 dark:uikit-divide-gray-700",
    primary: "uikit-border-primary-500 dark:uikit-border-primary-200  uikit-divide-primary-500 dark:uikit-divide-primary-200 ",
    orange: "uikit-border-orange-300 dark:uikit-border-orange-800 uikit-divide-orange-300 dark:uikit-divide-orange-800",
    none: ""
  };
  let p;
  function S(z) {
    U.call(this, t, z);
  }
  function I(z) {
    U.call(this, t, z);
  }
  function E(z) {
    U.call(this, t, z);
  }
  function j(z) {
    U.call(this, t, z);
  }
  function q(z) {
    U.call(this, t, z);
  }
  function ee(z) {
    Se[z ? "unshift" : "push"](() => {
      k = z, i(0, k);
    });
  }
  return t.$$set = (z) => {
    i(23, e = M(M({}, e), B(z))), i(6, r = re(e, n)), "tag" in z && i(1, s = z.tag), "color" in z && i(7, a = z.color), "rounded" in z && i(8, f = z.rounded), "border" in z && i(9, c = z.border), "shadow" in z && i(10, d = z.shadow), "node" in z && i(0, k = z.node), "use" in z && i(2, g = z.use), "options" in z && i(3, m = z.options), "role" in z && i(4, b = z.role), "$$scope" in z && i(11, o = z.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*color*/
    128 && i(7, a = a ?? "default"), t.$$.dirty & /*color*/
    128 && Ve("color", a), i(5, p = O(_[a], w[a], f && "uikit-rounded-lg", c && "uikit-border", v[a], d && "uikit-shadow-md", e.class));
  }, e = B(e), [
    k,
    s,
    g,
    m,
    b,
    p,
    r,
    a,
    f,
    c,
    d,
    o,
    l,
    S,
    I,
    E,
    j,
    q,
    ee
  ];
}
class nt extends ie {
  constructor(e) {
    super(), te(this, e, Ko, Xo, X, {
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
function sn(t, e, i) {
  const n = t.slice();
  return n[10] = e[i], n;
}
function un(t, e, i) {
  const n = t.slice();
  return n[13] = e[i], n;
}
function an(t) {
  let e, i = (
    /*desc*/
    t[13] + ""
  ), n;
  return {
    c() {
      e = P("p"), n = be(i), h(e, "class", "mb-2 text-gray-500 dark:text-gray-400");
    },
    m(r, l) {
      A(r, e, l), R(e, n);
    },
    p(r, l) {
      l & /*items*/
      1 && i !== (i = /*desc*/
      r[13] + "") && Ce(n, i);
    },
    d(r) {
      r && T(e);
    }
  };
}
function Qo(t) {
  let e, i = ve(
    /*item*/
    t[10].descriptions
  ), n = [];
  for (let r = 0; r < i.length; r += 1)
    n[r] = an(un(t, i, r));
  return {
    c() {
      for (let r = 0; r < n.length; r += 1)
        n[r].c();
      e = H();
    },
    m(r, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(r, l);
      A(r, e, l);
    },
    p(r, l) {
      if (l & /*items*/
      1) {
        i = ve(
          /*item*/
          r[10].descriptions
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = un(r, i, o);
          n[o] ? n[o].p(u, l) : (n[o] = an(u), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = i.length;
      }
    },
    d(r) {
      r && T(e), je(n, r);
    }
  };
}
function Yo(t) {
  let e, i = (
    /*item*/
    (t[10].title || "a title") + ""
  ), n;
  return {
    c() {
      e = P("span"), n = be(i), h(e, "slot", "header");
    },
    m(r, l) {
      A(r, e, l), R(e, n);
    },
    p(r, l) {
      l & /*items*/
      1 && i !== (i = /*item*/
      (r[10].title || "a title") + "") && Ce(n, i);
    },
    d(r) {
      r && T(e);
    }
  };
}
function fn(t) {
  let e, i;
  return e = new qo({
    props: {
      $$slots: {
        header: [Yo],
        default: [Qo]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r & /*$$scope, items*/
      65537 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Jo(t) {
  let e, i, n = ve(
    /*items*/
    t[0]
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = fn(sn(t, n, o));
  const l = (o) => C(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = ae();
    },
    m(o, u) {
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(o, u);
      A(o, e, u), i = !0;
    },
    p(o, u) {
      if (u & /*items*/
      1) {
        n = ve(
          /*items*/
          o[0]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const a = sn(o, n, s);
          r[s] ? (r[s].p(a, u), y(r[s], 1)) : (r[s] = fn(a), r[s].c(), y(r[s], 1), r[s].m(e.parentNode, e));
        }
        for (oe(), s = n.length; s < r.length; s += 1)
          l(s);
        se();
      }
    },
    i(o) {
      if (!i) {
        for (let u = 0; u < n.length; u += 1)
          y(r[u]);
        i = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let u = 0; u < r.length; u += 1)
        C(r[u]);
      i = !1;
    },
    d(o) {
      o && T(e), je(r, o);
    }
  };
}
function Zo(t) {
  let e, i;
  const n = [
    /*$$restProps*/
    t[2],
    { class: (
      /*frameClass*/
      t[1]
    ) },
    { color: "none" }
  ];
  let r = {
    $$slots: { default: [Jo] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new nt({ props: r }), {
    c() {
      $(e.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), i = !0;
    },
    p(l, [o]) {
      const u = o & /*$$restProps, frameClass*/
      6 ? ce(n, [
        o & /*$$restProps*/
        4 && Le(
          /*$$restProps*/
          l[2]
        ),
        o & /*frameClass*/
        2 && { class: (
          /*frameClass*/
          l[1]
        ) },
        n[2]
      ]) : {};
      o & /*$$scope, items*/
      65537 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
    },
    i(l) {
      i || (y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function xo(t, e, i) {
  const n = ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass", "items"];
  let r = re(e, n), { multiple: l = !1 } = e, { flush: o = !1 } = e, { activeClass: u = "uikit-bg-gray-100 dark:uikit-bg-gray-800 uikit-text-gray-900 dark:uikit-text-white focus:uikit-ring-4 focus:uikit-ring-gray-200 dark:focus:uikit-ring-gray-800" } = e, { inactiveClass: s = "uikit-text-gray-500 dark:uikit-text-gray-400 hover:uikit-bg-gray-100 hover:dark:uikit-bg-gray-800" } = e, { defaultClass: a = "uikit-text-gray-500 dark:uikit-text-gray-400" } = e, { items: f = [] } = e;
  const c = {
    flush: o,
    activeClass: O(u, e.classActive),
    inactiveClass: O(s, e.classInactive),
    selected: l ? void 0 : Et()
  };
  Ve("ctx", c);
  let d;
  return t.$$set = (k) => {
    i(9, e = M(M({}, e), B(k))), i(2, r = re(e, n)), "multiple" in k && i(3, l = k.multiple), "flush" in k && i(4, o = k.flush), "activeClass" in k && i(5, u = k.activeClass), "inactiveClass" in k && i(6, s = k.inactiveClass), "defaultClass" in k && i(7, a = k.defaultClass), "items" in k && i(0, f = k.items);
  }, t.$$.update = () => {
    i(1, d = O(a, e.class));
  }, e = B(e), [
    f,
    d,
    r,
    l,
    o,
    u,
    s,
    a
  ];
}
class $o extends ie {
  constructor(e) {
    super(), te(this, e, xo, Zo, X, {
      multiple: 3,
      flush: 4,
      activeClass: 5,
      inactiveClass: 6,
      defaultClass: 7,
      items: 0
    });
  }
}
const rk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new $o({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let r in i) {
      let l = i[r];
      n.$on(r, (o) => {
        l(o.detail);
      });
    }
  return n;
}, es = (t) => ({}), cn = (t) => ({ close: (
  /*close*/
  t[4]
) }), ts = (t) => ({}), dn = (t) => ({ close: (
  /*close*/
  t[4]
) });
function is(t) {
  let e, i;
  const n = [
    /*$$restProps*/
    t[5]
  ];
  let r = {
    $$slots: { default: [rs] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new nt({ props: r }), {
    c() {
      $(e.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), i = !0;
    },
    p(l, o) {
      const u = o & /*$$restProps*/
      32 ? ce(n, [Le(
        /*$$restProps*/
        l[5]
      )]) : {};
      o & /*$$scope*/
      128 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
    },
    i(l) {
      i || (y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function ns(t) {
  let e, i, n = (
    /*open*/
    t[0] && kn(t)
  );
  return {
    c() {
      n && n.c(), e = ae();
    },
    m(r, l) {
      n && n.m(r, l), A(r, e, l), i = !0;
    },
    p(r, l) {
      /*open*/
      r[0] ? n ? (n.p(r, l), l & /*open*/
      1 && y(n, 1)) : (n = kn(r), n.c(), y(n, 1), n.m(e.parentNode, e)) : n && (oe(), C(n, 1, 1, () => {
        n = null;
      }), se());
    },
    i(r) {
      i || (y(n), i = !0);
    },
    o(r) {
      C(n), i = !1;
    },
    d(r) {
      r && T(e), n && n.d(r);
    }
  };
}
function rs(t) {
  let e;
  const i = (
    /*#slots*/
    t[6].default
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[7],
    cn
  );
  return {
    c() {
      n && n.c();
    },
    m(r, l) {
      n && n.m(r, l), e = !0;
    },
    p(r, l) {
      n && n.p && (!e || l & /*$$scope*/
      128) && Y(
        n,
        i,
        r,
        /*$$scope*/
        r[7],
        e ? Q(
          i,
          /*$$scope*/
          r[7],
          l,
          es
        ) : J(
          /*$$scope*/
          r[7]
        ),
        cn
      );
    },
    i(r) {
      e || (y(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function kn(t) {
  let e, i, n, r;
  const l = [
    /*$$restProps*/
    t[5]
  ];
  let o = {
    $$slots: { default: [ls] },
    $$scope: { ctx: t }
  };
  for (let u = 0; u < l.length; u += 1)
    o = M(o, l[u]);
  return i = new nt({ props: o }), {
    c() {
      e = P("div"), $(i.$$.fragment);
    },
    m(u, s) {
      A(u, e, s), Z(i, e, null), r = !0;
    },
    p(u, s) {
      t = u;
      const a = s & /*$$restProps*/
      32 ? ce(l, [Le(
        /*$$restProps*/
        t[5]
      )]) : {};
      s & /*$$scope*/
      128 && (a.$$scope = { dirty: s, ctx: t }), i.$set(a);
    },
    i(u) {
      r || (y(i.$$.fragment, u), u && Ie(() => {
        r && (n || (n = Re(
          e,
          /*transition*/
          t[1],
          /*params*/
          t[2],
          !0
        )), n.run(1));
      }), r = !0);
    },
    o(u) {
      C(i.$$.fragment, u), u && (n || (n = Re(
        e,
        /*transition*/
        t[1],
        /*params*/
        t[2],
        !1
      )), n.run(0)), r = !1;
    },
    d(u) {
      u && T(e), x(i), u && n && n.end();
    }
  };
}
function ls(t) {
  let e;
  const i = (
    /*#slots*/
    t[6].default
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[7],
    dn
  );
  return {
    c() {
      n && n.c();
    },
    m(r, l) {
      n && n.m(r, l), e = !0;
    },
    p(r, l) {
      n && n.p && (!e || l & /*$$scope*/
      128) && Y(
        n,
        i,
        r,
        /*$$scope*/
        r[7],
        e ? Q(
          i,
          /*$$scope*/
          r[7],
          l,
          ts
        ) : J(
          /*$$scope*/
          r[7]
        ),
        dn
      );
    },
    i(r) {
      e || (y(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function os(t) {
  let e, i, n, r;
  const l = [ns, is], o = [];
  function u(s, a) {
    return (
      /*dismissable*/
      s[3] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(s, a) {
      o[e].m(s, a), A(s, n, a), r = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(s, a) : (i = o[e] = l[e](s), i.c()), y(i, 1), i.m(n.parentNode, n));
    },
    i(s) {
      r || (y(i), r = !0);
    },
    o(s) {
      C(i), r = !1;
    },
    d(s) {
      s && T(n), o[e].d(s);
    }
  };
}
function ss(t, e, i) {
  const n = ["transition", "params", "open", "dismissable"];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e, { transition: u = Zt } = e, { params: s = {} } = e, { open: a = !0 } = e, { dismissable: f = !1 } = e;
  const c = We();
  function d(k) {
    k != null && k.stopPropagation && k.stopPropagation(), i(0, a = !1);
  }
  return t.$$set = (k) => {
    e = M(M({}, e), B(k)), i(5, r = re(e, n)), "transition" in k && i(1, u = k.transition), "params" in k && i(2, s = k.params), "open" in k && i(0, a = k.open), "dismissable" in k && i(3, f = k.dismissable), "$$scope" in k && i(7, o = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && c(a ? "open" : "close");
  }, [a, u, s, f, d, r, l, o];
}
class us extends ie {
  constructor(e) {
    super(), te(this, e, ss, os, X, {
      transition: 1,
      params: 2,
      open: 0,
      dismissable: 3
    });
  }
}
const as = (t) => ({ svgSize: t & /*size*/
4 }), gn = (t) => ({
  svgSize: (
    /*svgSizes*/
    t[5][
      /*size*/
      t[2]
    ]
  )
}), fs = (t) => ({ svgSize: t & /*size*/
4 }), mn = (t) => ({
  svgSize: (
    /*svgSizes*/
    t[5][
      /*size*/
      t[2]
    ]
  )
});
function cs(t) {
  let e, i, n, r, l, o, u = (
    /*name*/
    t[0] && hn(t)
  );
  const s = (
    /*#slots*/
    t[9].default
  ), a = K(
    s,
    t,
    /*$$scope*/
    t[8],
    gn
  );
  let f = [
    { type: "button" },
    /*$$restProps*/
    t[6],
    { class: (
      /*buttonClass*/
      t[4]
    ) },
    {
      "aria-label": n = /*ariaLabel*/
      t[1] ?? /*name*/
      t[0]
    }
  ], c = {};
  for (let d = 0; d < f.length; d += 1)
    c = M(c, f[d]);
  return {
    c() {
      e = P("button"), u && u.c(), i = H(), a && a.c(), ue(e, c);
    },
    m(d, k) {
      A(d, e, k), u && u.m(e, null), R(e, i), a && a.m(e, null), e.autofocus && e.focus(), r = !0, l || (o = F(
        e,
        "click",
        /*click_handler*/
        t[10]
      ), l = !0);
    },
    p(d, k) {
      /*name*/
      d[0] ? u ? u.p(d, k) : (u = hn(d), u.c(), u.m(e, i)) : u && (u.d(1), u = null), a && a.p && (!r || k & /*$$scope, size*/
      260) && Y(
        a,
        s,
        d,
        /*$$scope*/
        d[8],
        r ? Q(
          s,
          /*$$scope*/
          d[8],
          k,
          as
        ) : J(
          /*$$scope*/
          d[8]
        ),
        gn
      ), ue(e, c = ce(f, [
        { type: "button" },
        k & /*$$restProps*/
        64 && /*$$restProps*/
        d[6],
        (!r || k & /*buttonClass*/
        16) && { class: (
          /*buttonClass*/
          d[4]
        ) },
        (!r || k & /*ariaLabel, name*/
        3 && n !== (n = /*ariaLabel*/
        d[1] ?? /*name*/
        d[0])) && { "aria-label": n }
      ]));
    },
    i(d) {
      r || (y(a, d), r = !0);
    },
    o(d) {
      C(a, d), r = !1;
    },
    d(d) {
      d && T(e), u && u.d(), a && a.d(d), l = !1, o();
    }
  };
}
function ds(t) {
  let e, i, n, r, l = (
    /*name*/
    t[0] && bn(t)
  );
  const o = (
    /*#slots*/
    t[9].default
  ), u = K(
    o,
    t,
    /*$$scope*/
    t[8],
    mn
  );
  let s = [
    { href: (
      /*href*/
      t[3]
    ) },
    /*$$restProps*/
    t[6],
    { class: (
      /*buttonClass*/
      t[4]
    ) },
    {
      "aria-label": n = /*ariaLabel*/
      t[1] ?? /*name*/
      t[0]
    }
  ], a = {};
  for (let f = 0; f < s.length; f += 1)
    a = M(a, s[f]);
  return {
    c() {
      e = P("a"), l && l.c(), i = H(), u && u.c(), ue(e, a);
    },
    m(f, c) {
      A(f, e, c), l && l.m(e, null), R(e, i), u && u.m(e, null), r = !0;
    },
    p(f, c) {
      /*name*/
      f[0] ? l ? l.p(f, c) : (l = bn(f), l.c(), l.m(e, i)) : l && (l.d(1), l = null), u && u.p && (!r || c & /*$$scope, size*/
      260) && Y(
        u,
        o,
        f,
        /*$$scope*/
        f[8],
        r ? Q(
          o,
          /*$$scope*/
          f[8],
          c,
          fs
        ) : J(
          /*$$scope*/
          f[8]
        ),
        mn
      ), ue(e, a = ce(s, [
        (!r || c & /*href*/
        8) && { href: (
          /*href*/
          f[3]
        ) },
        c & /*$$restProps*/
        64 && /*$$restProps*/
        f[6],
        (!r || c & /*buttonClass*/
        16) && { class: (
          /*buttonClass*/
          f[4]
        ) },
        (!r || c & /*ariaLabel, name*/
        3 && n !== (n = /*ariaLabel*/
        f[1] ?? /*name*/
        f[0])) && { "aria-label": n }
      ]));
    },
    i(f) {
      r || (y(u, f), r = !0);
    },
    o(f) {
      C(u, f), r = !1;
    },
    d(f) {
      f && T(e), l && l.d(), u && u.d(f);
    }
  };
}
function hn(t) {
  let e, i;
  return {
    c() {
      e = P("span"), i = be(
        /*name*/
        t[0]
      ), h(e, "class", "uikit-sr-only");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    p(n, r) {
      r & /*name*/
      1 && Ce(
        i,
        /*name*/
        n[0]
      );
    },
    d(n) {
      n && T(e);
    }
  };
}
function bn(t) {
  let e, i;
  return {
    c() {
      e = P("span"), i = be(
        /*name*/
        t[0]
      ), h(e, "class", "uikit-sr-only");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    p(n, r) {
      r & /*name*/
      1 && Ce(
        i,
        /*name*/
        n[0]
      );
    },
    d(n) {
      n && T(e);
    }
  };
}
function ks(t) {
  let e, i, n, r;
  const l = [ds, cs], o = [];
  function u(s, a) {
    return (
      /*href*/
      s[3] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(s, a) {
      o[e].m(s, a), A(s, n, a), r = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(s, a) : (i = o[e] = l[e](s), i.c()), y(i, 1), i.m(n.parentNode, n));
    },
    i(s) {
      r || (y(i), r = !0);
    },
    o(s) {
      C(i), r = !1;
    },
    d(s) {
      s && T(n), o[e].d(s);
    }
  };
}
function gs(t, e, i) {
  const n = ["color", "name", "ariaLabel", "size", "href"];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e;
  const u = Be("background");
  let { color: s = "default" } = e, { name: a = void 0 } = e, { ariaLabel: f = void 0 } = e, { size: c = "md" } = e, { href: d = void 0 } = e;
  const k = {
    dark: "uikit-text-gray-500 hover:uikit-text-gray-900 hover:uikit-bg-gray-200 dark:uikit-text-gray-400 dark:hover:uikit-text-white dark:hover:uikit-bg-gray-600",
    gray: "uikit-text-gray-500 focus:uikit-ring-gray-400 hover:uikit-bg-gray-200 dark:hover:uikit-bg-gray-800 dark:hover:uikit-text-gray-300",
    red: "uikit-text-red-500 focus:uikit-ring-red-400 hover:uikit-bg-red-200 dark:hover:uikit-bg-red-800 dark:hover:uikit-text-red-300",
    yellow: "uikit-text-yellow-500 focus:uikit-ring-yellow-400 hover:uikit-bg-yellow-200 dark:hover:uikit-bg-yellow-800 dark:hover:uikit-text-yellow-300",
    green: "uikit-text-green-500 focus:uikit-ring-green-400 hover:uikit-bg-green-200 dark:hover:uikit-bg-green-800 dark:hover:uikit-text-green-300",
    indigo: "uikit-text-indigo-500 focus:uikit-ring-indigo-400 hover:uikit-bg-indigo-200 dark:hover:uikit-bg-indigo-800 dark:hover:uikit-text-indigo-300",
    purple: "uikit-text-purple-500 focus:uikit-ring-purple-400 hover:uikit-bg-purple-200 dark:hover:uikit-bg-purple-800 dark:hover:uikit-text-purple-300",
    pink: "uikit-text-pink-500 focus:uikit-ring-pink-400 hover:uikit-bg-pink-200 dark:hover:uikit-bg-pink-800 dark:hover:uikit-text-pink-300",
    blue: "uikit-text-blue-500 focus:uikit-ring-blue-400 hover:uikit-bg-blue-200 dark:hover:uikit-bg-blue-800 dark:hover:uikit-text-blue-300",
    primary: "uikit-text-primary-500 focus:uikit-ring-primary-400 hover:uikit-bg-primary-200 dark:hover:uikit-bg-primary-800 dark:hover:uikit-text-primary-300",
    default: "focus:uikit-ring-gray-400"
  }, g = {
    xs: "uikit-m-0.5 uikit-rounded-sm focus:uikit-ring-1 uikit-p-0.5",
    sm: "uikit-m-0.5 uikit-rounded focus:uikit-ring-1 uikit-p-0.5",
    md: "uikit-m-0.5 uikit-rounded-lg focus:uikit-ring-2 uikit-p-1.5",
    lg: "uikit-m-0.5 uikit-rounded-lg focus:uikit-ring-2 uikit-p-2.5"
  };
  let m;
  const b = {
    xs: "uikit-w-3 uikit-h-3",
    sm: "uikit-w-3.5 uikit-h-3.5",
    md: "uikit-w-5 uikit-h-5",
    lg: "uikit-w-5 uikit-h-5"
  };
  function _(w) {
    U.call(this, t, w);
  }
  return t.$$set = (w) => {
    i(14, e = M(M({}, e), B(w))), i(6, r = re(e, n)), "color" in w && i(7, s = w.color), "name" in w && i(0, a = w.name), "ariaLabel" in w && i(1, f = w.ariaLabel), "size" in w && i(2, c = w.size), "href" in w && i(3, d = w.href), "$$scope" in w && i(8, o = w.$$scope);
  }, t.$$.update = () => {
    i(4, m = O(
      "focus:uikit-outline-none uikit-whitespace-normal",
      g[c],
      k[s],
      s === "default" && (u ? "hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-600" : "hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700"),
      e.class
    ));
  }, e = B(e), [
    a,
    f,
    c,
    d,
    m,
    b,
    r,
    s,
    o,
    l,
    _
  ];
}
class ms extends ie {
  constructor(e) {
    super(), te(this, e, gs, ks, X, {
      color: 7,
      name: 0,
      ariaLabel: 1,
      size: 2,
      href: 3
    });
  }
}
function hs(t) {
  let e, i, n;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "fill-rule", "evenodd"), h(i, "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"), h(i, "clip-rule", "evenodd"), h(e, "class", n = /*svgSize*/
      t[4]), h(e, "fill", "currentColor"), h(e, "viewBox", "0 0 20 20"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, l) {
      A(r, e, l), R(e, i);
    },
    p(r, l) {
      l & /*svgSize*/
      16 && n !== (n = /*svgSize*/
      r[4]) && h(e, "class", n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function bs(t) {
  let e, i;
  const n = [
    { name: (
      /*name*/
      t[0]
    ) },
    /*$$restProps*/
    t[1],
    {
      class: O(
        "uikit-ms-auto",
        /*$$props*/
        t[2].class
      )
    }
  ];
  let r = {
    $$slots: {
      default: [
        hs,
        ({ svgSize: l }) => ({ 4: l }),
        ({ svgSize: l }) => l ? 16 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new ms({ props: r }), e.$on(
    "click",
    /*click_handler*/
    t[3]
  ), {
    c() {
      $(e.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), i = !0;
    },
    p(l, [o]) {
      const u = o & /*name, $$restProps, twMerge, $$props*/
      7 ? ce(n, [
        o & /*name*/
        1 && { name: (
          /*name*/
          l[0]
        ) },
        o & /*$$restProps*/
        2 && Le(
          /*$$restProps*/
          l[1]
        ),
        o & /*twMerge, $$props*/
        4 && {
          class: O(
            "uikit-ms-auto",
            /*$$props*/
            l[2].class
          )
        }
      ]) : {};
      o & /*$$scope, svgSize*/
      48 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
    },
    i(l) {
      i || (y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function _s(t, e, i) {
  const n = ["name"];
  let r = re(e, n), { name: l = "Close" } = e;
  function o(u) {
    U.call(this, t, u);
  }
  return t.$$set = (u) => {
    i(2, e = M(M({}, e), B(u))), i(1, r = re(e, n)), "name" in u && i(0, l = u.name);
  }, e = B(e), [l, r, e, o];
}
class Fi extends ie {
  constructor(e) {
    super(), te(this, e, _s, bs, X, { name: 0 });
  }
}
const ps = (t) => ({ close: t & /*close*/
1048576 }), _n = (t) => ({ close: (
  /*close*/
  t[20]
) }), ys = (t) => ({}), pn = (t) => ({});
function yn(t) {
  let e;
  const i = (
    /*#slots*/
    t[7].icon
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[18],
    pn
  );
  return {
    c() {
      n && n.c();
    },
    m(r, l) {
      n && n.m(r, l), e = !0;
    },
    p(r, l) {
      n && n.p && (!e || l & /*$$scope*/
      262144) && Y(
        n,
        i,
        r,
        /*$$scope*/
        r[18],
        e ? Q(
          i,
          /*$$scope*/
          r[18],
          l,
          ys
        ) : J(
          /*$$scope*/
          r[18]
        ),
        pn
      );
    },
    i(r) {
      e || (y(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function vs(t) {
  let e;
  const i = (
    /*#slots*/
    t[7].default
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[18],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(r, l) {
      n && n.m(r, l), e = !0;
    },
    p(r, l) {
      n && n.p && (!e || l & /*$$scope*/
      262144) && Y(
        n,
        i,
        r,
        /*$$scope*/
        r[18],
        e ? Q(
          i,
          /*$$scope*/
          r[18],
          l,
          null
        ) : J(
          /*$$scope*/
          r[18]
        ),
        null
      );
    },
    i(r) {
      e || (y(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function ws(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[7].default
  ), r = K(
    n,
    t,
    /*$$scope*/
    t[18],
    null
  );
  return {
    c() {
      e = P("div"), r && r.c();
    },
    m(l, o) {
      A(l, e, o), r && r.m(e, null), i = !0;
    },
    p(l, o) {
      r && r.p && (!i || o & /*$$scope*/
      262144) && Y(
        r,
        n,
        l,
        /*$$scope*/
        l[18],
        i ? Q(
          n,
          /*$$scope*/
          l[18],
          o,
          null
        ) : J(
          /*$$scope*/
          l[18]
        ),
        null
      );
    },
    i(l) {
      i || (y(r, l), i = !0);
    },
    o(l) {
      C(r, l), i = !1;
    },
    d(l) {
      l && T(e), r && r.d(l);
    }
  };
}
function vn(t) {
  let e;
  const i = (
    /*#slots*/
    t[7]["close-button"]
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[18],
    _n
  ), r = n || Cs(t);
  return {
    c() {
      r && r.c();
    },
    m(l, o) {
      r && r.m(l, o), e = !0;
    },
    p(l, o) {
      n ? n.p && (!e || o & /*$$scope, close*/
      1310720) && Y(
        n,
        i,
        l,
        /*$$scope*/
        l[18],
        e ? Q(
          i,
          /*$$scope*/
          l[18],
          o,
          ps
        ) : J(
          /*$$scope*/
          l[18]
        ),
        _n
      ) : r && r.p && (!e || o & /*$$restProps, close*/
      1048608) && r.p(l, e ? o : -1);
    },
    i(l) {
      e || (y(r, l), e = !0);
    },
    o(l) {
      C(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function Cs(t) {
  let e, i;
  function n(...r) {
    return (
      /*click_handler_1*/
      t[8](
        /*close*/
        t[20],
        ...r
      )
    );
  }
  return e = new Fi({
    props: {
      name: "",
      class: "uikit-ms-auto -uikit-me-1.5 -uikit-my-1.5 dark:hover:uikit-bg-gray-700",
      color: (
        /*$$restProps*/
        t[5].color
      )
    }
  }), e.$on("click", n), e.$on(
    "click",
    /*click_handler*/
    t[9]
  ), e.$on(
    "change",
    /*change_handler*/
    t[10]
  ), e.$on(
    "keydown",
    /*keydown_handler*/
    t[11]
  ), e.$on(
    "keyup",
    /*keyup_handler*/
    t[12]
  ), e.$on(
    "focus",
    /*focus_handler*/
    t[13]
  ), e.$on(
    "blur",
    /*blur_handler*/
    t[14]
  ), e.$on(
    "mouseenter",
    /*mouseenter_handler*/
    t[15]
  ), e.$on(
    "mouseleave",
    /*mouseleave_handler*/
    t[16]
  ), {
    c() {
      $(e.$$.fragment);
    },
    m(r, l) {
      Z(e, r, l), i = !0;
    },
    p(r, l) {
      t = r;
      const o = {};
      l & /*$$restProps*/
      32 && (o.color = /*$$restProps*/
      t[5].color), e.$set(o);
    },
    i(r) {
      i || (y(e.$$.fragment, r), i = !0);
    },
    o(r) {
      C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      x(e, r);
    }
  };
}
function Ss(t) {
  let e, i, n, r, l, o, u = (
    /*$$slots*/
    t[4].icon && yn(t)
  );
  const s = [ws, vs], a = [];
  function f(d, k) {
    return (
      /*$$slots*/
      d[4].icon || /*dismissable*/
      d[1] ? 0 : 1
    );
  }
  i = f(t), n = a[i] = s[i](t);
  let c = (
    /*dismissable*/
    t[1] && vn(t)
  );
  return {
    c() {
      u && u.c(), e = H(), n.c(), r = H(), c && c.c(), l = ae();
    },
    m(d, k) {
      u && u.m(d, k), A(d, e, k), a[i].m(d, k), A(d, r, k), c && c.m(d, k), A(d, l, k), o = !0;
    },
    p(d, k) {
      /*$$slots*/
      d[4].icon ? u ? (u.p(d, k), k & /*$$slots*/
      16 && y(u, 1)) : (u = yn(d), u.c(), y(u, 1), u.m(e.parentNode, e)) : u && (oe(), C(u, 1, 1, () => {
        u = null;
      }), se());
      let g = i;
      i = f(d), i === g ? a[i].p(d, k) : (oe(), C(a[g], 1, 1, () => {
        a[g] = null;
      }), se(), n = a[i], n ? n.p(d, k) : (n = a[i] = s[i](d), n.c()), y(n, 1), n.m(r.parentNode, r)), /*dismissable*/
      d[1] ? c ? (c.p(d, k), k & /*dismissable*/
      2 && y(c, 1)) : (c = vn(d), c.c(), y(c, 1), c.m(l.parentNode, l)) : c && (oe(), C(c, 1, 1, () => {
        c = null;
      }), se());
    },
    i(d) {
      o || (y(u), y(n), y(c), o = !0);
    },
    o(d) {
      C(u), C(n), C(c), o = !1;
    },
    d(d) {
      d && (T(e), T(r), T(l)), u && u.d(d), a[i].d(d), c && c.d(d);
    }
  };
}
function Ts(t) {
  let e, i;
  const n = [
    { dismissable: (
      /*dismissable*/
      t[1]
    ) },
    { open: (
      /*open*/
      t[0]
    ) },
    { color: "primary" },
    { role: "alert" },
    { rounded: !0 },
    /*$$restProps*/
    t[5],
    { class: (
      /*divClass*/
      t[2]
    ) }
  ];
  let r = {
    $$slots: {
      default: [
        Ss,
        ({ close: l }) => ({ 20: l }),
        ({ close: l }) => l ? 1048576 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new us({ props: r }), e.$on(
    "close",
    /*close_handler*/
    t[17]
  ), {
    c() {
      $(e.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), i = !0;
    },
    p(l, [o]) {
      const u = o & /*dismissable, open, $$restProps, divClass*/
      39 ? ce(n, [
        o & /*dismissable*/
        2 && { dismissable: (
          /*dismissable*/
          l[1]
        ) },
        o & /*open*/
        1 && { open: (
          /*open*/
          l[0]
        ) },
        n[2],
        n[3],
        n[4],
        o & /*$$restProps*/
        32 && Le(
          /*$$restProps*/
          l[5]
        ),
        o & /*divClass*/
        4 && { class: (
          /*divClass*/
          l[2]
        ) }
      ]) : {};
      o & /*$$scope, $$restProps, close, dismissable, $$slots*/
      1310770 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
    },
    i(l) {
      i || (y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function Es(t, e, i) {
  const n = ["open", "dismissable", "defaultClass"];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e;
  const u = Ke(l);
  let { open: s = !0 } = e, { dismissable: a = !1 } = e, { defaultClass: f = "uikit-p-4 uikit-gap-3 uikit-text-sm" } = e, c;
  const d = We(), k = (E, j) => {
    d("onEnd"), E(j);
  };
  function g(E) {
    U.call(this, t, E);
  }
  function m(E) {
    U.call(this, t, E);
  }
  function b(E) {
    U.call(this, t, E);
  }
  function _(E) {
    U.call(this, t, E);
  }
  function w(E) {
    U.call(this, t, E);
  }
  function v(E) {
    U.call(this, t, E);
  }
  function p(E) {
    U.call(this, t, E);
  }
  function S(E) {
    U.call(this, t, E);
  }
  function I(E) {
    U.call(this, t, E);
  }
  return t.$$set = (E) => {
    i(19, e = M(M({}, e), B(E))), i(5, r = re(e, n)), "open" in E && i(0, s = E.open), "dismissable" in E && i(1, a = E.dismissable), "defaultClass" in E && i(6, f = E.defaultClass), "$$scope" in E && i(18, o = E.$$scope);
  }, t.$$.update = () => {
    i(2, c = O(f, (u.icon || a) && "uikit-flex uikit-items-center", e.class));
  }, e = B(e), [
    s,
    a,
    c,
    d,
    u,
    r,
    f,
    l,
    k,
    g,
    m,
    b,
    _,
    w,
    v,
    p,
    S,
    I,
    o
  ];
}
class As extends ie {
  constructor(e) {
    super(), te(this, e, Es, Ts, X, { open: 0, dismissable: 1, defaultClass: 6 });
  }
}
const _t = /^[a-z0-9]+(-[a-z0-9]+)*$/, xt = (t, e, i, n = "") => {
  const r = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (r.length < 2 || r.length > 3)
      return null;
    n = r.shift().slice(1);
  }
  if (r.length > 3 || !r.length)
    return null;
  if (r.length > 1) {
    const u = r.pop(), s = r.pop(), a = {
      // Allow provider without '@': "provider:prefix:name"
      provider: r.length > 0 ? r[0] : n,
      prefix: s,
      name: u
    };
    return e && !Rt(a) ? null : a;
  }
  const l = r[0], o = l.split("-");
  if (o.length > 1) {
    const u = {
      provider: n,
      prefix: o.shift(),
      name: o.join("-")
    };
    return e && !Rt(u) ? null : u;
  }
  if (i && n === "") {
    const u = {
      provider: n,
      prefix: "",
      name: l
    };
    return e && !Rt(u, i) ? null : u;
  }
  return null;
}, Rt = (t, e) => t ? !!((t.provider === "" || t.provider.match(_t)) && (e && t.prefix === "" || t.prefix.match(_t)) && t.name.match(_t)) : !1, il = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Gt = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), $t = Object.freeze({
  ...il,
  ...Gt
}), pi = Object.freeze({
  ...$t,
  body: "",
  hidden: !1
});
function Is(t, e) {
  const i = {};
  !t.hFlip != !e.hFlip && (i.hFlip = !0), !t.vFlip != !e.vFlip && (i.vFlip = !0);
  const n = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return n && (i.rotate = n), i;
}
function wn(t, e) {
  const i = Is(t, e);
  for (const n in pi)
    n in Gt ? n in t && !(n in i) && (i[n] = Gt[n]) : n in e ? i[n] = e[n] : n in t && (i[n] = t[n]);
  return i;
}
function Os(t, e) {
  const i = t.icons, n = t.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  function l(o) {
    if (i[o])
      return r[o] = [];
    if (!(o in r)) {
      r[o] = null;
      const u = n[o] && n[o].parent, s = u && l(u);
      s && (r[o] = [u].concat(s));
    }
    return r[o];
  }
  return (e || Object.keys(i).concat(Object.keys(n))).forEach(l), r;
}
function Ls(t, e, i) {
  const n = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null);
  let l = {};
  function o(u) {
    l = wn(
      n[u] || r[u],
      l
    );
  }
  return o(e), i.forEach(o), wn(t, l);
}
function nl(t, e) {
  const i = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return i;
  t.not_found instanceof Array && t.not_found.forEach((r) => {
    e(r, null), i.push(r);
  });
  const n = Os(t);
  for (const r in n) {
    const l = n[r];
    l && (e(r, Ls(t, r, l)), i.push(r));
  }
  return i;
}
const Ps = {
  provider: "",
  aliases: {},
  not_found: {},
  ...il
};
function ai(t, e) {
  for (const i in e)
    if (i in t && typeof t[i] != typeof e[i])
      return !1;
  return !0;
}
function rl(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !ai(t, Ps))
    return null;
  const i = e.icons;
  for (const r in i) {
    const l = i[r];
    if (!r.match(_t) || typeof l.body != "string" || !ai(
      l,
      pi
    ))
      return null;
  }
  const n = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const r in n) {
    const l = n[r], o = l.parent;
    if (!r.match(_t) || typeof o != "string" || !i[o] && !n[o] || !ai(
      l,
      pi
    ))
      return null;
  }
  return e;
}
const Cn = /* @__PURE__ */ Object.create(null);
function Ms(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function $e(t, e) {
  const i = Cn[t] || (Cn[t] = /* @__PURE__ */ Object.create(null));
  return i[e] || (i[e] = Ms(t, e));
}
function ji(t, e) {
  return rl(e) ? nl(e, (i, n) => {
    n ? t.icons[i] = n : t.missing.add(i);
  }) : [];
}
function Ns(t, e, i) {
  try {
    if (typeof i.body == "string")
      return t.icons[e] = { ...i }, !0;
  } catch {
  }
  return !1;
}
let wt = !1;
function ll(t) {
  return typeof t == "boolean" && (wt = t), wt;
}
function zs(t) {
  const e = typeof t == "string" ? xt(t, !0, wt) : t;
  if (e) {
    const i = $e(e.provider, e.prefix), n = e.name;
    return i.icons[n] || (i.missing.has(n) ? null : void 0);
  }
}
function Rs(t, e) {
  const i = xt(t, !0, wt);
  if (!i)
    return !1;
  const n = $e(i.provider, i.prefix);
  return Ns(n, i.name, e);
}
function Ds(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), wt && !e && !t.prefix) {
    let r = !1;
    return rl(t) && (t.prefix = "", nl(t, (l, o) => {
      o && Rs(l, o) && (r = !0);
    })), r;
  }
  const i = t.prefix;
  if (!Rt({
    provider: e,
    prefix: i,
    name: "a"
  }))
    return !1;
  const n = $e(e, i);
  return !!ji(n, t);
}
const ol = Object.freeze({
  width: null,
  height: null
}), sl = Object.freeze({
  // Dimensions
  ...ol,
  // Transformations
  ...Gt
}), Bs = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Fs = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Sn(t, e, i) {
  if (e === 1)
    return t;
  if (i = i || 100, typeof t == "number")
    return Math.ceil(t * e * i) / i;
  if (typeof t != "string")
    return t;
  const n = t.split(Bs);
  if (n === null || !n.length)
    return t;
  const r = [];
  let l = n.shift(), o = Fs.test(l);
  for (; ; ) {
    if (o) {
      const u = parseFloat(l);
      isNaN(u) ? r.push(l) : r.push(Math.ceil(u * e * i) / i);
    } else
      r.push(l);
    if (l = n.shift(), l === void 0)
      return r.join("");
    o = !o;
  }
}
const js = (t) => t === "unset" || t === "undefined" || t === "none";
function Ws(t, e) {
  const i = {
    ...$t,
    ...t
  }, n = {
    ...sl,
    ...e
  }, r = {
    left: i.left,
    top: i.top,
    width: i.width,
    height: i.height
  };
  let l = i.body;
  [i, n].forEach((g) => {
    const m = [], b = g.hFlip, _ = g.vFlip;
    let w = g.rotate;
    b ? _ ? w += 2 : (m.push(
      "translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"
    ), m.push("scale(-1 1)"), r.top = r.left = 0) : _ && (m.push(
      "translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"
    ), m.push("scale(1 -1)"), r.top = r.left = 0);
    let v;
    switch (w < 0 && (w -= Math.floor(w / 4) * 4), w = w % 4, w) {
      case 1:
        v = r.height / 2 + r.top, m.unshift(
          "rotate(90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
      case 2:
        m.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        v = r.width / 2 + r.left, m.unshift(
          "rotate(-90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
    }
    w % 2 === 1 && (r.left !== r.top && (v = r.left, r.left = r.top, r.top = v), r.width !== r.height && (v = r.width, r.width = r.height, r.height = v)), m.length && (l = '<g transform="' + m.join(" ") + '">' + l + "</g>");
  });
  const o = n.width, u = n.height, s = r.width, a = r.height;
  let f, c;
  o === null ? (c = u === null ? "1em" : u === "auto" ? a : u, f = Sn(c, s / a)) : (f = o === "auto" ? s : o, c = u === null ? Sn(f, a / s) : u === "auto" ? a : u);
  const d = {}, k = (g, m) => {
    js(m) || (d[g] = m.toString());
  };
  return k("width", f), k("height", c), d.viewBox = r.left.toString() + " " + r.top.toString() + " " + s.toString() + " " + a.toString(), {
    attributes: d,
    body: l
  };
}
const Us = /\sid="(\S+)"/g, Gs = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Hs = 0;
function Vs(t, e = Gs) {
  const i = [];
  let n;
  for (; n = Us.exec(t); )
    i.push(n[1]);
  if (!i.length)
    return t;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return i.forEach((l) => {
    const o = typeof e == "function" ? e(l) : e + (Hs++).toString(), u = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + u + ')([")]|\\.[a-z])', "g"),
      "$1" + o + r + "$3"
    );
  }), t = t.replace(new RegExp(r, "g"), ""), t;
}
const yi = /* @__PURE__ */ Object.create(null);
function qs(t, e) {
  yi[t] = e;
}
function vi(t) {
  return yi[t] || yi[""];
}
function Wi(t) {
  let e;
  if (typeof t.resources == "string")
    e = [t.resources];
  else if (e = t.resources, !(e instanceof Array) || !e.length)
    return null;
  return {
    // API hosts
    resources: e,
    // Root path
    path: t.path || "/",
    // URL length limit
    maxURL: t.maxURL || 500,
    // Timeout before next host is used.
    rotate: t.rotate || 750,
    // Timeout before failing query.
    timeout: t.timeout || 5e3,
    // Randomise default API end point.
    random: t.random === !0,
    // Start index
    index: t.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: t.dataAfterTimeout !== !1
  };
}
const Ui = /* @__PURE__ */ Object.create(null), ht = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Dt = [];
for (; ht.length > 0; )
  ht.length === 1 || Math.random() > 0.5 ? Dt.push(ht.shift()) : Dt.push(ht.pop());
Ui[""] = Wi({
  resources: ["https://api.iconify.design"].concat(Dt)
});
function Xs(t, e) {
  const i = Wi(e);
  return i === null ? !1 : (Ui[t] = i, !0);
}
function Gi(t) {
  return Ui[t];
}
const Ks = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let Tn = Ks();
function Qs(t, e) {
  const i = Gi(t);
  if (!i)
    return 0;
  let n;
  if (!i.maxURL)
    n = 0;
  else {
    let r = 0;
    i.resources.forEach((o) => {
      r = Math.max(r, o.length);
    });
    const l = e + ".json?icons=";
    n = i.maxURL - r - i.path.length - l.length;
  }
  return n;
}
function Ys(t) {
  return t === 404;
}
const Js = (t, e, i) => {
  const n = [], r = Qs(t, e), l = "icons";
  let o = {
    type: l,
    provider: t,
    prefix: e,
    icons: []
  }, u = 0;
  return i.forEach((s, a) => {
    u += s.length + 1, u >= r && a > 0 && (n.push(o), o = {
      type: l,
      provider: t,
      prefix: e,
      icons: []
    }, u = s.length), o.icons.push(s);
  }), n.push(o), n;
};
function Zs(t) {
  if (typeof t == "string") {
    const e = Gi(t);
    if (e)
      return e.path;
  }
  return "/";
}
const xs = (t, e, i) => {
  if (!Tn) {
    i("abort", 424);
    return;
  }
  let n = Zs(e.provider);
  switch (e.type) {
    case "icons": {
      const l = e.prefix, u = e.icons.join(","), s = new URLSearchParams({
        icons: u
      });
      n += l + ".json?" + s.toString();
      break;
    }
    case "custom": {
      const l = e.uri;
      n += l.slice(0, 1) === "/" ? l.slice(1) : l;
      break;
    }
    default:
      i("abort", 400);
      return;
  }
  let r = 503;
  Tn(t + n).then((l) => {
    const o = l.status;
    if (o !== 200) {
      setTimeout(() => {
        i(Ys(o) ? "abort" : "next", o);
      });
      return;
    }
    return r = 501, l.json();
  }).then((l) => {
    if (typeof l != "object" || l === null) {
      setTimeout(() => {
        l === 404 ? i("abort", l) : i("next", r);
      });
      return;
    }
    setTimeout(() => {
      i("success", l);
    });
  }).catch(() => {
    i("next", r);
  });
}, $s = {
  prepare: Js,
  send: xs
};
function eu(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, i = /* @__PURE__ */ Object.create(null);
  t.sort((r, l) => r.provider !== l.provider ? r.provider.localeCompare(l.provider) : r.prefix !== l.prefix ? r.prefix.localeCompare(l.prefix) : r.name.localeCompare(l.name));
  let n = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((r) => {
    if (n.name === r.name && n.prefix === r.prefix && n.provider === r.provider)
      return;
    n = r;
    const l = r.provider, o = r.prefix, u = r.name, s = i[l] || (i[l] = /* @__PURE__ */ Object.create(null)), a = s[o] || (s[o] = $e(l, o));
    let f;
    u in a.icons ? f = e.loaded : o === "" || a.missing.has(u) ? f = e.missing : f = e.pending;
    const c = {
      provider: l,
      prefix: o,
      name: u
    };
    f.push(c);
  }), e;
}
function ul(t, e) {
  t.forEach((i) => {
    const n = i.loaderCallbacks;
    n && (i.loaderCallbacks = n.filter((r) => r.id !== e));
  });
}
function tu(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let i = !1;
    const n = t.provider, r = t.prefix;
    e.forEach((l) => {
      const o = l.icons, u = o.pending.length;
      o.pending = o.pending.filter((s) => {
        if (s.prefix !== r)
          return !0;
        const a = s.name;
        if (t.icons[a])
          o.loaded.push({
            provider: n,
            prefix: r,
            name: a
          });
        else if (t.missing.has(a))
          o.missing.push({
            provider: n,
            prefix: r,
            name: a
          });
        else
          return i = !0, !0;
        return !1;
      }), o.pending.length !== u && (i || ul([t], l.id), l.callback(
        o.loaded.slice(0),
        o.missing.slice(0),
        o.pending.slice(0),
        l.abort
      ));
    });
  }));
}
let iu = 0;
function nu(t, e, i) {
  const n = iu++, r = ul.bind(null, i, n);
  if (!e.pending.length)
    return r;
  const l = {
    id: n,
    icons: e,
    callback: t,
    abort: r
  };
  return i.forEach((o) => {
    (o.loaderCallbacks || (o.loaderCallbacks = [])).push(l);
  }), r;
}
function ru(t, e = !0, i = !1) {
  const n = [];
  return t.forEach((r) => {
    const l = typeof r == "string" ? xt(r, e, i) : r;
    l && n.push(l);
  }), n;
}
var lu = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function ou(t, e, i, n) {
  const r = t.resources.length, l = t.random ? Math.floor(Math.random() * r) : t.index;
  let o;
  if (t.random) {
    let I = t.resources.slice(0);
    for (o = []; I.length > 1; ) {
      const E = Math.floor(Math.random() * I.length);
      o.push(I[E]), I = I.slice(0, E).concat(I.slice(E + 1));
    }
    o = o.concat(I);
  } else
    o = t.resources.slice(l).concat(t.resources.slice(0, l));
  const u = Date.now();
  let s = "pending", a = 0, f, c = null, d = [], k = [];
  typeof n == "function" && k.push(n);
  function g() {
    c && (clearTimeout(c), c = null);
  }
  function m() {
    s === "pending" && (s = "aborted"), g(), d.forEach((I) => {
      I.status === "pending" && (I.status = "aborted");
    }), d = [];
  }
  function b(I, E) {
    E && (k = []), typeof I == "function" && k.push(I);
  }
  function _() {
    return {
      startTime: u,
      payload: e,
      status: s,
      queriesSent: a,
      queriesPending: d.length,
      subscribe: b,
      abort: m
    };
  }
  function w() {
    s = "failed", k.forEach((I) => {
      I(void 0, f);
    });
  }
  function v() {
    d.forEach((I) => {
      I.status === "pending" && (I.status = "aborted");
    }), d = [];
  }
  function p(I, E, j) {
    const q = E !== "success";
    switch (d = d.filter((ee) => ee !== I), s) {
      case "pending":
        break;
      case "failed":
        if (q || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (E === "abort") {
      f = j, w();
      return;
    }
    if (q) {
      f = j, d.length || (o.length ? S() : w());
      return;
    }
    if (g(), v(), !t.random) {
      const ee = t.resources.indexOf(I.resource);
      ee !== -1 && ee !== t.index && (t.index = ee);
    }
    s = "completed", k.forEach((ee) => {
      ee(j);
    });
  }
  function S() {
    if (s !== "pending")
      return;
    g();
    const I = o.shift();
    if (I === void 0) {
      if (d.length) {
        c = setTimeout(() => {
          g(), s === "pending" && (v(), w());
        }, t.timeout);
        return;
      }
      w();
      return;
    }
    const E = {
      status: "pending",
      resource: I,
      callback: (j, q) => {
        p(E, j, q);
      }
    };
    d.push(E), a++, c = setTimeout(S, t.rotate), i(I, e, E.callback);
  }
  return setTimeout(S), _;
}
function al(t) {
  const e = {
    ...lu,
    ...t
  };
  let i = [];
  function n() {
    i = i.filter((u) => u().status === "pending");
  }
  function r(u, s, a) {
    const f = ou(
      e,
      u,
      s,
      (c, d) => {
        n(), a && a(c, d);
      }
    );
    return i.push(f), f;
  }
  function l(u) {
    return i.find((s) => u(s)) || null;
  }
  return {
    query: r,
    find: l,
    setIndex: (u) => {
      e.index = u;
    },
    getIndex: () => e.index,
    cleanup: n
  };
}
function En() {
}
const fi = /* @__PURE__ */ Object.create(null);
function su(t) {
  if (!fi[t]) {
    const e = Gi(t);
    if (!e)
      return;
    const i = al(e), n = {
      config: e,
      redundancy: i
    };
    fi[t] = n;
  }
  return fi[t];
}
function uu(t, e, i) {
  let n, r;
  if (typeof t == "string") {
    const l = vi(t);
    if (!l)
      return i(void 0, 424), En;
    r = l.send;
    const o = su(t);
    o && (n = o.redundancy);
  } else {
    const l = Wi(t);
    if (l) {
      n = al(l);
      const o = t.resources ? t.resources[0] : "", u = vi(o);
      u && (r = u.send);
    }
  }
  return !n || !r ? (i(void 0, 424), En) : n.query(e, r, i)().abort;
}
const An = "iconify2", Ct = "iconify", fl = Ct + "-count", In = Ct + "-version", cl = 36e5, au = 168;
function wi(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function Hi(t, e, i) {
  try {
    return t.setItem(e, i), !0;
  } catch {
  }
}
function On(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function Ci(t, e) {
  return Hi(t, fl, e.toString());
}
function Si(t) {
  return parseInt(wi(t, fl)) || 0;
}
const ei = {
  local: !0,
  session: !0
}, dl = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Vi = !1;
function fu(t) {
  Vi = t;
}
let Mt = typeof window > "u" ? {} : window;
function kl(t) {
  const e = t + "Storage";
  try {
    if (Mt && Mt[e] && typeof Mt[e].length == "number")
      return Mt[e];
  } catch {
  }
  ei[t] = !1;
}
function gl(t, e) {
  const i = kl(t);
  if (!i)
    return;
  const n = wi(i, In);
  if (n !== An) {
    if (n) {
      const u = Si(i);
      for (let s = 0; s < u; s++)
        On(i, Ct + s.toString());
    }
    Hi(i, In, An), Ci(i, 0);
    return;
  }
  const r = Math.floor(Date.now() / cl) - au, l = (u) => {
    const s = Ct + u.toString(), a = wi(i, s);
    if (typeof a == "string") {
      try {
        const f = JSON.parse(a);
        if (typeof f == "object" && typeof f.cached == "number" && f.cached > r && typeof f.provider == "string" && typeof f.data == "object" && typeof f.data.prefix == "string" && // Valid item: run callback
        e(f, u))
          return !0;
      } catch {
      }
      On(i, s);
    }
  };
  let o = Si(i);
  for (let u = o - 1; u >= 0; u--)
    l(u) || (u === o - 1 ? (o--, Ci(i, o)) : dl[t].add(u));
}
function ml() {
  if (!Vi) {
    fu(!0);
    for (const t in ei)
      gl(t, (e) => {
        const i = e.data, n = e.provider, r = i.prefix, l = $e(
          n,
          r
        );
        if (!ji(l, i).length)
          return !1;
        const o = i.lastModified || -1;
        return l.lastModifiedCached = l.lastModifiedCached ? Math.min(l.lastModifiedCached, o) : o, !0;
      });
  }
}
function cu(t, e) {
  const i = t.lastModifiedCached;
  if (
    // Matches or newer
    i && i >= e
  )
    return i === e;
  if (t.lastModifiedCached = e, i)
    for (const n in ei)
      gl(n, (r) => {
        const l = r.data;
        return r.provider !== t.provider || l.prefix !== t.prefix || l.lastModified === e;
      });
  return !0;
}
function du(t, e) {
  Vi || ml();
  function i(n) {
    let r;
    if (!ei[n] || !(r = kl(n)))
      return;
    const l = dl[n];
    let o;
    if (l.size)
      l.delete(o = Array.from(l).shift());
    else if (o = Si(r), !Ci(r, o + 1))
      return;
    const u = {
      cached: Math.floor(Date.now() / cl),
      provider: t.provider,
      data: e
    };
    return Hi(
      r,
      Ct + o.toString(),
      JSON.stringify(u)
    );
  }
  e.lastModified && !cu(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), i("local") || i("session"));
}
function Ln() {
}
function ku(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, tu(t);
  }));
}
function gu(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: i, prefix: n } = t, r = t.iconsToLoad;
    delete t.iconsToLoad;
    let l;
    if (!r || !(l = vi(i)))
      return;
    l.prepare(i, n, r).forEach((u) => {
      uu(i, u, (s) => {
        if (typeof s != "object")
          u.icons.forEach((a) => {
            t.missing.add(a);
          });
        else
          try {
            const a = ji(
              t,
              s
            );
            if (!a.length)
              return;
            const f = t.pendingIcons;
            f && a.forEach((c) => {
              f.delete(c);
            }), du(t, s);
          } catch (a) {
            console.error(a);
          }
        ku(t);
      });
    });
  }));
}
const mu = (t, e) => {
  const i = ru(t, !0, ll()), n = eu(i);
  if (!n.pending.length) {
    let s = !0;
    return e && setTimeout(() => {
      s && e(
        n.loaded,
        n.missing,
        n.pending,
        Ln
      );
    }), () => {
      s = !1;
    };
  }
  const r = /* @__PURE__ */ Object.create(null), l = [];
  let o, u;
  return n.pending.forEach((s) => {
    const { provider: a, prefix: f } = s;
    if (f === u && a === o)
      return;
    o = a, u = f, l.push($e(a, f));
    const c = r[a] || (r[a] = /* @__PURE__ */ Object.create(null));
    c[f] || (c[f] = []);
  }), n.pending.forEach((s) => {
    const { provider: a, prefix: f, name: c } = s, d = $e(a, f), k = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    k.has(c) || (k.add(c), r[a][f].push(c));
  }), l.forEach((s) => {
    const { provider: a, prefix: f } = s;
    r[a][f].length && gu(s, r[a][f]);
  }), e ? nu(e, n, l) : Ln;
};
function hu(t, e) {
  const i = {
    ...t
  };
  for (const n in e) {
    const r = e[n], l = typeof r;
    n in ol ? (r === null || r && (l === "string" || l === "number")) && (i[n] = r) : l === typeof i[n] && (i[n] = n === "rotate" ? r % 4 : r);
  }
  return i;
}
const bu = /[\s,]+/;
function _u(t, e) {
  e.split(bu).forEach((i) => {
    switch (i.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
function pu(t, e = 0) {
  const i = t.replace(/^-?[0-9.]*/, "");
  function n(r) {
    for (; r < 0; )
      r += 4;
    return r % 4;
  }
  if (i === "") {
    const r = parseInt(t);
    return isNaN(r) ? 0 : n(r);
  } else if (i !== t) {
    let r = 0;
    switch (i) {
      case "%":
        r = 25;
        break;
      case "deg":
        r = 90;
    }
    if (r) {
      let l = parseFloat(t.slice(0, t.length - i.length));
      return isNaN(l) ? 0 : (l = l / r, l % 1 === 0 ? n(l) : 0);
    }
  }
  return e;
}
function yu(t, e) {
  let i = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in e)
    i += " " + n + '="' + e[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + i + ">" + t + "</svg>";
}
function vu(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function wu(t) {
  return "data:image/svg+xml," + vu(t);
}
function Cu(t) {
  return 'url("' + wu(t) + '")';
}
const Pn = {
  ...sl,
  inline: !1
}, Su = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Tu = {
  display: "inline-block"
}, Ti = {
  "background-color": "currentColor"
}, hl = {
  "background-color": "transparent"
}, Mn = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Nn = {
  "-webkit-mask": Ti,
  mask: Ti,
  background: hl
};
for (const t in Nn) {
  const e = Nn[t];
  for (const i in Mn)
    e[t + "-" + i] = Mn[i];
}
function Eu(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function Au(t, e) {
  const i = hu(Pn, e), n = e.mode || "svg", r = n === "svg" ? { ...Su } : {};
  t.body.indexOf("xlink:") === -1 && delete r["xmlns:xlink"];
  let l = typeof e.style == "string" ? e.style : "";
  for (let _ in e) {
    const w = e[_];
    if (w !== void 0)
      switch (_) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          i[_] = w === !0 || w === "true" || w === 1;
          break;
        case "flip":
          typeof w == "string" && _u(i, w);
          break;
        case "color":
          l = l + (l.length > 0 && l.trim().slice(-1) !== ";" ? ";" : "") + "color: " + w + "; ";
          break;
        case "rotate":
          typeof w == "string" ? i[_] = pu(w) : typeof w == "number" && (i[_] = w);
          break;
        case "ariaHidden":
        case "aria-hidden":
          w !== !0 && w !== "true" && delete r["aria-hidden"];
          break;
        default:
          if (_.slice(0, 3) === "on:")
            break;
          Pn[_] === void 0 && (r[_] = w);
      }
  }
  const o = Ws(t, i), u = o.attributes;
  if (i.inline && (l = "vertical-align: -0.125em; " + l), n === "svg") {
    Object.assign(r, u), l !== "" && (r.style = l);
    let _ = 0, w = e.id;
    return typeof w == "string" && (w = w.replace(/-/g, "_")), {
      svg: !0,
      attributes: r,
      body: Vs(o.body, w ? () => w + "ID" + _++ : "iconifySvelte")
    };
  }
  const { body: s, width: a, height: f } = t, c = n === "mask" || (n === "bg" ? !1 : s.indexOf("currentColor") !== -1), d = yu(s, {
    ...u,
    width: a + "",
    height: f + ""
  }), g = {
    "--svg": Cu(d)
  }, m = (_) => {
    const w = u[_];
    w && (g[_] = Eu(w));
  };
  m("width"), m("height"), Object.assign(g, Tu, c ? Ti : hl);
  let b = "";
  for (const _ in g)
    b += _ + ": " + g[_] + ";";
  return r.style = b + l, {
    svg: !1,
    attributes: r
  };
}
ll(!0);
qs("", $s);
if (typeof document < "u" && typeof window < "u") {
  ml();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, i = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !Ds(n)) && console.error(i);
      } catch {
        console.error(i);
      }
    });
  }
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let i in e) {
        const n = "IconifyProviders[" + i + "] is invalid.";
        try {
          const r = e[i];
          if (typeof r != "object" || !r || r.resources === void 0)
            continue;
          Xs(i, r) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
function Iu(t, e, i, n, r) {
  function l() {
    e.loading && (e.loading.abort(), e.loading = null);
  }
  if (typeof t == "object" && t !== null && typeof t.body == "string")
    return e.name = "", l(), { data: { ...$t, ...t } };
  let o;
  if (typeof t != "string" || (o = xt(t, !1, !0)) === null)
    return l(), null;
  const u = zs(o);
  if (!u)
    return i && (!e.loading || e.loading.name !== t) && (l(), e.name = "", e.loading = {
      name: t,
      abort: mu([o], n)
    }), null;
  l(), e.name !== t && (e.name = t, r && !e.destroyed && r(t));
  const s = ["iconify"];
  return o.prefix !== "" && s.push("iconify--" + o.prefix), o.provider !== "" && s.push("iconify--" + o.provider), { data: u, classes: s };
}
function Ou(t, e) {
  return t ? Au({
    ...$t,
    ...t
  }, e) : null;
}
function zn(t) {
  let e;
  function i(l, o) {
    return (
      /*data*/
      l[0].svg ? Pu : Lu
    );
  }
  let n = i(t), r = n(t);
  return {
    c() {
      r.c(), e = ae();
    },
    m(l, o) {
      r.m(l, o), A(l, e, o);
    },
    p(l, o) {
      n === (n = i(l)) && r ? r.p(l, o) : (r.d(1), r = n(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      l && T(e), r.d(l);
    }
  };
}
function Lu(t) {
  let e, i = [
    /*data*/
    t[0].attributes
  ], n = {};
  for (let r = 0; r < i.length; r += 1)
    n = M(n, i[r]);
  return {
    c() {
      e = P("span"), ue(e, n);
    },
    m(r, l) {
      A(r, e, l);
    },
    p(r, l) {
      ue(e, n = ce(i, [l & /*data*/
      1 && /*data*/
      r[0].attributes]));
    },
    d(r) {
      r && T(e);
    }
  };
}
function Pu(t) {
  let e, i = (
    /*data*/
    t[0].body + ""
  ), n = [
    /*data*/
    t[0].attributes
  ], r = {};
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return {
    c() {
      e = he("svg"), Bt(e, r);
    },
    m(l, o) {
      A(l, e, o), e.innerHTML = i;
    },
    p(l, o) {
      o & /*data*/
      1 && i !== (i = /*data*/
      l[0].body + "") && (e.innerHTML = i), Bt(e, r = ce(n, [o & /*data*/
      1 && /*data*/
      l[0].attributes]));
    },
    d(l) {
      l && T(e);
    }
  };
}
function Mu(t) {
  let e, i = (
    /*data*/
    t[0] && zn(t)
  );
  return {
    c() {
      i && i.c(), e = ae();
    },
    m(n, r) {
      i && i.m(n, r), A(n, e, r);
    },
    p(n, [r]) {
      /*data*/
      n[0] ? i ? i.p(n, r) : (i = zn(n), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null);
    },
    i: ne,
    o: ne,
    d(n) {
      n && T(e), i && i.d(n);
    }
  };
}
function Nu(t, e, i) {
  const n = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let r = !1, l = 0, o;
  const u = (a) => {
    typeof e.onLoad == "function" && e.onLoad(a), We()("load", { icon: a });
  };
  function s() {
    i(3, l++, l);
  }
  return Qe(() => {
    i(2, r = !0);
  }), Jl(() => {
    i(1, n.destroyed = !0, n), n.loading && (n.loading.abort(), i(1, n.loading = null, n));
  }), t.$$set = (a) => {
    i(6, e = M(M({}, e), B(a)));
  }, t.$$.update = () => {
    {
      const a = Iu(e.icon, n, r, s, u);
      i(0, o = a ? Ou(a.data, e) : null), o && a.classes && i(
        0,
        o.attributes.class = (typeof e.class == "string" ? e.class + " " : "") + a.classes.join(" "),
        o
      );
    }
  }, e = B(e), [o, n, r, l];
}
class zu extends ie {
  constructor(e) {
    super(), te(this, e, Nu, Mu, X, {});
  }
}
function Ru(t) {
  let e, i;
  return e = new zu({
    props: {
      class: O(
        "uikit-h-full uikit-w-8 uikit-text-white uikit-bg-black uikit-opacity-30",
        /*className*/
        t[1]
      ),
      icon: (
        /*name*/
        t[0]
      )
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r & /*className*/
      2 && (l.class = O(
        "uikit-h-full uikit-w-8 uikit-text-white uikit-bg-black uikit-opacity-30",
        /*className*/
        n[1]
      )), r & /*name*/
      1 && (l.icon = /*name*/
      n[0]), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Du(t) {
  let e;
  return {
    c() {
      e = P("div"), h(
        e,
        "class",
        /*className*/
        t[1]
      );
    },
    m(i, n) {
      A(i, e, n), t[4](e);
    },
    p(i, n) {
      n & /*className*/
      2 && h(
        e,
        "class",
        /*className*/
        i[1]
      );
    },
    i: ne,
    o: ne,
    d(i) {
      i && T(e), t[4](null);
    }
  };
}
function Bu(t) {
  let e, i, n, r;
  const l = [Du, Ru], o = [];
  function u(s, a) {
    return (
      /*uikit*/
      s[2] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(s, a) {
      o[e].m(s, a), A(s, n, a), r = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(s, a) : (i = o[e] = l[e](s), i.c()), y(i, 1), i.m(n.parentNode, n));
    },
    i(s) {
      r || (y(i), r = !0);
    },
    o(s) {
      C(i), r = !1;
    },
    d(s) {
      s && T(n), o[e].d(s);
    }
  };
}
function Fu(t, e, i) {
  let { name: n = "" } = e, { className: r = "" } = e, { uikit: l = !0 } = e, o;
  function u(s) {
    Se[s ? "unshift" : "push"](() => {
      o = s, i(3, o);
    });
  }
  return t.$$set = (s) => {
    "name" in s && i(0, n = s.name), "className" in s && i(1, r = s.className), "uikit" in s && i(2, l = s.uikit);
  }, t.$$.update = () => {
    t.$$.dirty & /*icondom, name*/
    9 && window && window.uikit_icons && o && window.uikit_icons.FnIcon(o, n);
  }, [n, r, l, o, u];
}
class ti extends ie {
  constructor(e) {
    super(), te(this, e, Fu, Bu, X, { name: 0, className: 1, uikit: 2 });
  }
}
function ju(t) {
  let e, i, n, r;
  return {
    c() {
      e = P("span"), i = be(
        /*mode*/
        t[1]
      ), n = H(), r = be(
        /*info*/
        t[2]
      ), h(e, "class", "uikit-font-medium");
    },
    m(l, o) {
      A(l, e, o), R(e, i), A(l, n, o), A(l, r, o);
    },
    p(l, o) {
      o & /*mode*/
      2 && Ce(
        i,
        /*mode*/
        l[1]
      ), o & /*info*/
      4 && Ce(
        r,
        /*info*/
        l[2]
      );
    },
    d(l) {
      l && (T(e), T(n), T(r));
    }
  };
}
function Wu(t) {
  let e, i;
  return e = new ti({
    props: {
      name: "InfoCircleSolid",
      slot: "icon",
      className: "uikit-w-4 uikit-h-4"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p: ne,
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Uu(t) {
  let e, i;
  return e = new As({
    props: {
      open: (
        /*open*/
        t[0]
      ),
      border: !0,
      dismissable: !0,
      color: (
        /*modeColor*/
        t[3].get(
          /*mode*/
          t[1]
        )
      ),
      $$slots: {
        icon: [Wu],
        default: [ju]
      },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "onEnd",
    /*onEnd_handler*/
    t[6]
  ), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, [r]) {
      const l = {};
      r & /*open*/
      1 && (l.open = /*open*/
      n[0]), r & /*mode*/
      2 && (l.color = /*modeColor*/
      n[3].get(
        /*mode*/
        n[1]
      )), r & /*$$scope, info, mode*/
      134 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Gu(t, e, i) {
  let { mode: n = "info" } = e, { info: r = "a default message" } = e, { open: l = !0 } = e, { duration: o = 0 } = e, u = /* @__PURE__ */ new Map([
    ["debug", ""],
    ["info", "blue"],
    ["success", "green"],
    ["warn", "yellow"],
    ["danger", "red"],
    ["dark", "dark"]
  ]);
  const s = We();
  Qe(() => {
    o > 0 && setTimeout(
      () => {
        i(0, l = !1);
      },
      o
    );
  });
  const a = () => {
    s("onEnd");
  };
  return t.$$set = (f) => {
    "mode" in f && i(1, n = f.mode), "info" in f && i(2, r = f.info), "open" in f && i(0, l = f.open), "duration" in f && i(5, o = f.duration);
  }, [l, n, r, u, s, o, a];
}
class Hu extends ie {
  constructor(e) {
    super(), te(this, e, Gu, Uu, X, { mode: 1, info: 2, open: 0, duration: 5 });
  }
}
const Rn = "uikit_msg_panel";
let ci = 0;
const lk = (t, e, i) => {
  ci += 1;
  let n = window.document.getElementById(Rn);
  n || (n = window.document.createElement("div"), n.id = Rn, n.style.position = "absolute", n.style.top = "5px", n.style.right = "5px", n.style.display = "flex", n.style.flexDirection = "column", n.style.rowGap = "10px", n.style.zIndex = "100", document.body.appendChild(n)), t || (t = window.document.createElement("div"), n.appendChild(t));
  const r = new Hu({
    target: t,
    props: {
      ...e
    }
  });
  if (r.$on("onEnd", () => {
    r.$destroy(), ci -= 1, ci == 0 && document.body.removeChild(n);
  }), i)
    for (let l in i) {
      let o = i[l];
      r.$on(l, (u) => {
        o(u.detail);
      });
    }
  return r;
};
function Vu(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[8].default
  ), r = K(
    n,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = P("div"), r && r.c(), h(
        e,
        "class",
        /*dotClass*/
        t[0]
      );
    },
    m(l, o) {
      A(l, e, o), r && r.m(e, null), i = !0;
    },
    p(l, [o]) {
      r && r.p && (!i || o & /*$$scope*/
      128) && Y(
        r,
        n,
        l,
        /*$$scope*/
        l[7],
        i ? Q(
          n,
          /*$$scope*/
          l[7],
          o,
          null
        ) : J(
          /*$$scope*/
          l[7]
        ),
        null
      ), (!i || o & /*dotClass*/
      1) && h(
        e,
        "class",
        /*dotClass*/
        l[0]
      );
    },
    i(l) {
      i || (y(r, l), i = !0);
    },
    o(l) {
      C(r, l), i = !1;
    },
    d(l) {
      l && T(e), r && r.d(l);
    }
  };
}
function qu(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e;
  const l = Ke(n);
  let { color: o = "gray" } = e, { rounded: u = !1 } = e, { size: s = "md" } = e, { border: a = !1 } = e, { placement: f = void 0 } = e, { offset: c = !0 } = e;
  const d = {
    gray: "uikit-bg-gray-200",
    dark: "uikit-bg-gray-900 dark:uikit-bg-gray-700",
    blue: "uikit-bg-blue-600",
    orange: "uikit-bg-orange-600",
    green: "uikit-bg-green-500",
    red: "uikit-bg-red-500",
    purple: "uikit-bg-purple-500",
    indigo: "uikit-bg-indigo-500",
    yellow: "uikit-bg-yellow-300",
    teal: "uikit-bg-teal-500",
    none: ""
  }, k = {
    xs: "uikit-w-2 uikit-h-2",
    sm: "uikit-w-2.5 uikit-h-2.5",
    md: "uikit-w-3 uikit-h-3",
    lg: "uikit-w-3.5 uikit-h-3.5",
    xl: "uikit-w-6 uikit-h-6"
  }, g = {
    // top
    "top-left": "uikit-top-0 uikit-start-0",
    "top-center": "uikit-top-0 uikit-start-1/2 -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
    "top-right": "uikit-top-0 uikit-end-0",
    // center
    "center-left": "uikit-top-1/2 -uikit-translate-y-1/2 uikit-start-0",
    center: "top-1/2 -uikit-translate-y-1/2 uikit-start-1/2 -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
    "center-right": "uikit-top-1/2 -uikit-translate-y-1/2 uikit-end-0",
    // bottom
    "bottom-left": "uikit-bottom-0 uikit-start-0",
    "bottom-center": "uikit-bottom-0 uikit-start-1/2 -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
    "bottom-right": "uikit-bottom-0 uikit-end-0"
  }, m = {
    // top
    "top-left": "-uikit-translate-x-1/3 rtl:uikit-translate-x-1/3 -uikit-translate-y-1/3",
    "top-center": "-uikit-translate-y-1/3",
    "top-right": "uikit-translate-x-1/3 rtl:-uikit-translate-x-1/3 -uikit-translate-y-1/3",
    // center
    "center-left": "-uikit-translate-x-1/3 rtl:uikit-translate-x-1/3",
    center: "",
    "center-right": "uikit-translate-x-1/3 rtl:-uikit-translate-x-1/3",
    // bottom
    "bottom-left": "-uikit-translate-x-1/3 rtl:uikit-translate-x-1/3 uikit-translate-y-1/3",
    "bottom-center": "uikit-translate-y-1/3",
    "bottom-right": "uikit-translate-x-1/3 rtl:-uikit-translate-x-1/3 uikit-translate-y-1/3"
  };
  let b;
  return t.$$set = (_) => {
    i(13, e = M(M({}, e), B(_))), "color" in _ && i(1, o = _.color), "rounded" in _ && i(2, u = _.rounded), "size" in _ && i(3, s = _.size), "border" in _ && i(4, a = _.border), "placement" in _ && i(5, f = _.placement), "offset" in _ && i(6, c = _.offset), "$$scope" in _ && i(7, r = _.$$scope);
  }, t.$$.update = () => {
    i(0, b = O("uikit-flex-shrink-0", u ? "uikit-rounded" : "uikit-rounded-full", a && "uikit-border-2 uikit-border-white dark:uikit-border-gray-800", k[s], d[o], l.default && "uikit-inline-flex uikit-items-center uikit-justify-center", f && "uikit-absolute " + g[f], f && c && m[f], e.class));
  }, e = B(e), [b, o, u, s, a, f, c, r, n];
}
class qi extends ie {
  constructor(e) {
    super(), te(this, e, qu, Vu, X, {
      color: 1,
      rounded: 2,
      size: 3,
      border: 4,
      placement: 5,
      offset: 6
    });
  }
}
function Xu(t) {
  let e, i, n = [
    { alt: (
      /*alt*/
      t[4]
    ) },
    { src: i = /*src*/
    t[1] },
    /*$$restProps*/
    t[7],
    { class: (
      /*avatarClass*/
      t[5]
    ) }
  ], r = {};
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return {
    c() {
      e = P("img"), ue(e, r);
    },
    m(l, o) {
      A(l, e, o);
    },
    p(l, o) {
      ue(e, r = ce(n, [
        o & /*alt*/
        16 && { alt: (
          /*alt*/
          l[4]
        ) },
        o & /*src*/
        2 && !pt(e.src, i = /*src*/
        l[1]) && { src: i },
        o & /*$$restProps*/
        128 && /*$$restProps*/
        l[7],
        o & /*avatarClass*/
        32 && { class: (
          /*avatarClass*/
          l[5]
        ) }
      ]));
    },
    i: ne,
    o: ne,
    d(l) {
      l && T(e);
    }
  };
}
function Ku(t) {
  let e = (
    /*href*/
    t[2] ? "a" : "div"
  ), i, n, r = (
    /*href*/
    (t[2] ? "a" : "div") && di(t)
  );
  return {
    c() {
      r && r.c(), i = ae();
    },
    m(l, o) {
      r && r.m(l, o), A(l, i, o), n = !0;
    },
    p(l, o) {
      /*href*/
      l[2], e ? X(
        e,
        /*href*/
        l[2] ? "a" : "div"
      ) ? (r.d(1), r = di(l), e = /*href*/
      l[2] ? "a" : "div", r.c(), r.m(i.parentNode, i)) : r.p(l, o) : (r = di(l), e = /*href*/
      l[2] ? "a" : "div", r.c(), r.m(i.parentNode, i));
    },
    i(l) {
      n || (y(r, l), n = !0);
    },
    o(l) {
      C(r, l), n = !1;
    },
    d(l) {
      l && T(i), r && r.d(l);
    }
  };
}
function Qu(t) {
  let e;
  const i = (
    /*#slots*/
    t[12].default
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[11],
    null
  ), r = n || Ju(t);
  return {
    c() {
      r && r.c();
    },
    m(l, o) {
      r && r.m(l, o), e = !0;
    },
    p(l, o) {
      n ? n.p && (!e || o & /*$$scope*/
      2048) && Y(
        n,
        i,
        l,
        /*$$scope*/
        l[11],
        e ? Q(
          i,
          /*$$scope*/
          l[11],
          o,
          null
        ) : J(
          /*$$scope*/
          l[11]
        ),
        null
      ) : r && r.p && (!e || o & /*rounded*/
      8) && r.p(l, e ? o : -1);
    },
    i(l) {
      e || (y(r, l), e = !0);
    },
    o(l) {
      C(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function Yu(t) {
  let e, i, n;
  return {
    c() {
      e = P("img"), h(
        e,
        "alt",
        /*alt*/
        t[4]
      ), pt(e.src, i = /*src*/
      t[1]) || h(e, "src", i), h(e, "class", n = /*rounded*/
      t[3] ? "uikit-rounded-full" : "uikit-rounded");
    },
    m(r, l) {
      A(r, e, l);
    },
    p(r, l) {
      l & /*alt*/
      16 && h(
        e,
        "alt",
        /*alt*/
        r[4]
      ), l & /*src*/
      2 && !pt(e.src, i = /*src*/
      r[1]) && h(e, "src", i), l & /*rounded*/
      8 && n !== (n = /*rounded*/
      r[3] ? "uikit-rounded-full" : "uikit-rounded") && h(e, "class", n);
    },
    i: ne,
    o: ne,
    d(r) {
      r && T(e);
    }
  };
}
function Ju(t) {
  let e, i, n;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "fill-rule", "evenodd"), h(i, "d", "M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"), h(i, "clip-rule", "evenodd"), h(e, "class", n = "uikit-w-full uikit-h-full " + /*rounded*/
      (t[3] ? "uikit-rounded-full" : "uikit-rounded")), h(e, "fill", "currentColor"), h(e, "viewBox", "0 0 16 16"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, l) {
      A(r, e, l), R(e, i);
    },
    p(r, l) {
      l & /*rounded*/
      8 && n !== (n = "uikit-w-full uikit-h-full " + /*rounded*/
      (r[3] ? "uikit-rounded-full" : "uikit-rounded")) && h(e, "class", n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function Dn(t) {
  let e, i;
  const n = [
    { border: !0 },
    { offset: (
      /*rounded*/
      t[3]
    ) },
    /*dot*/
    t[0]
  ];
  let r = {};
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new qi({ props: r }), {
    c() {
      $(e.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), i = !0;
    },
    p(l, o) {
      const u = o & /*rounded, dot*/
      9 ? ce(n, [
        n[0],
        o & /*rounded*/
        8 && { offset: (
          /*rounded*/
          l[3]
        ) },
        o & /*dot*/
        1 && Le(
          /*dot*/
          l[0]
        )
      ]) : {};
      e.$set(u);
    },
    i(l) {
      i || (y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function di(t) {
  let e, i, n, r, l, o;
  const u = [Yu, Qu], s = [];
  function a(k, g) {
    return (
      /*src*/
      k[1] ? 0 : 1
    );
  }
  i = a(t), n = s[i] = u[i](t);
  let f = (
    /*dot*/
    t[0] && Dn(t)
  ), c = [
    { href: (
      /*href*/
      t[2]
    ) },
    /*$$restProps*/
    t[7],
    {
      class: l = "uikit-relative uikit-flex uikit-justify-center uikit-items-center " + /*avatarClass*/
      t[5]
    }
  ], d = {};
  for (let k = 0; k < c.length; k += 1)
    d = M(d, c[k]);
  return {
    c() {
      e = P(
        /*href*/
        t[2] ? "a" : "div"
      ), n.c(), r = H(), f && f.c(), ft(
        /*href*/
        t[2] ? "a" : "div"
      )(e, d);
    },
    m(k, g) {
      A(k, e, g), s[i].m(e, null), R(e, r), f && f.m(e, null), o = !0;
    },
    p(k, g) {
      let m = i;
      i = a(k), i === m ? s[i].p(k, g) : (oe(), C(s[m], 1, 1, () => {
        s[m] = null;
      }), se(), n = s[i], n ? n.p(k, g) : (n = s[i] = u[i](k), n.c()), y(n, 1), n.m(e, r)), /*dot*/
      k[0] ? f ? (f.p(k, g), g & /*dot*/
      1 && y(f, 1)) : (f = Dn(k), f.c(), y(f, 1), f.m(e, null)) : f && (oe(), C(f, 1, 1, () => {
        f = null;
      }), se()), ft(
        /*href*/
        k[2] ? "a" : "div"
      )(e, d = ce(c, [
        (!o || g & /*href*/
        4) && { href: (
          /*href*/
          k[2]
        ) },
        g & /*$$restProps*/
        128 && /*$$restProps*/
        k[7],
        (!o || g & /*avatarClass*/
        32 && l !== (l = "uikit-relative uikit-flex uikit-justify-center uikit-items-center " + /*avatarClass*/
        k[5])) && { class: l }
      ]));
    },
    i(k) {
      o || (y(n), y(f), o = !0);
    },
    o(k) {
      C(n), C(f), o = !1;
    },
    d(k) {
      k && T(e), s[i].d(), f && f.d();
    }
  };
}
function Zu(t) {
  let e, i, n, r;
  const l = [Ku, Xu], o = [];
  function u(s, a) {
    return !/*src*/
    s[1] || /*href*/
    s[2] || /*$$slots*/
    s[6].default || /*dot*/
    s[0] ? 0 : 1;
  }
  return e = u(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(s, a) {
      o[e].m(s, a), A(s, n, a), r = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(s, a) : (i = o[e] = l[e](s), i.c()), y(i, 1), i.m(n.parentNode, n));
    },
    i(s) {
      r || (y(i), r = !0);
    },
    o(s) {
      C(i), r = !1;
    },
    d(s) {
      s && T(n), o[e].d(s);
    }
  };
}
function xu(t, e, i) {
  const n = ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e;
  const u = Ke(l);
  let { src: s = "" } = e, { href: a = void 0 } = e, { rounded: f = !1 } = e, { border: c = !1 } = e, { stacked: d = !1 } = e, { dot: k = void 0 } = e, { alt: g = "" } = e, { size: m = "md" } = e;
  const b = {
    xs: "uikit-w-6 uikit-h-6",
    sm: "uikit-w-8 uikit-h-8",
    md: "uikit-w-10 uikit-h-10",
    lg: "uikit-w-20 uikit-h-20",
    xl: "uikit-w-36 uikit-h-36",
    none: ""
  };
  let _;
  return t.$$set = (w) => {
    i(14, e = M(M({}, e), B(w))), i(7, r = re(e, n)), "src" in w && i(1, s = w.src), "href" in w && i(2, a = w.href), "rounded" in w && i(3, f = w.rounded), "border" in w && i(8, c = w.border), "stacked" in w && i(9, d = w.stacked), "dot" in w && i(0, k = w.dot), "alt" in w && i(4, g = w.alt), "size" in w && i(10, m = w.size), "$$scope" in w && i(11, o = w.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*dot*/
    1 && i(0, k = k && {
      placement: "top-right",
      color: "gray",
      size: "lg",
      ...k
    }), i(5, _ = O(f ? "uikit-rounded-full" : "uikit-rounded", c && "uikit-p-1 uikit-ring-2 uikit-ring-gray-300 dark:uikit-ring-gray-500", b[m], d && "uikit-border-2 -uikit-ms-4 uikit-border-white dark:uikit-border-gray-800", "uikit-bg-gray-100 dark:uikit-bg-gray-600 uikit-text-gray-600 dark:uikit-text-gray-300", e.class));
  }, e = B(e), [
    k,
    s,
    a,
    f,
    g,
    _,
    u,
    r,
    c,
    d,
    m,
    o,
    l
  ];
}
class bl extends ie {
  constructor(e) {
    super(), te(this, e, xu, Zu, X, {
      src: 1,
      href: 2,
      rounded: 3,
      border: 8,
      stacked: 9,
      dot: 0,
      alt: 4,
      size: 10
    });
  }
}
function $u(t) {
  let e, i;
  const n = [
    /*$$props*/
    t[2]
  ];
  let r = {};
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new bl({ props: r }), {
    c() {
      $(e.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), i = !0;
    },
    p(l, o) {
      const u = o & /*$$props*/
      4 ? ce(n, [Le(
        /*$$props*/
        l[2]
      )]) : {};
      e.$set(u);
    },
    i(l) {
      i || (y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function ea(t) {
  let e, i;
  const n = [
    /*$$props*/
    t[2]
  ];
  let r = {
    $$slots: { default: [ta] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new bl({ props: r }), {
    c() {
      $(e.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), i = !0;
    },
    p(l, o) {
      const u = o & /*$$props*/
      4 ? ce(n, [Le(
        /*$$props*/
        l[2]
      )]) : {};
      o & /*$$scope, domdefault*/
      34 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
    },
    i(l) {
      i || (y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function ta(t) {
  let e;
  return {
    c() {
      e = P("div");
    },
    m(i, n) {
      A(i, e, n), t[3](e);
    },
    p: ne,
    d(i) {
      i && T(e), t[3](null);
    }
  };
}
function ia(t) {
  let e, i, n, r;
  const l = [ea, $u], o = [];
  function u(s, a) {
    return (
      /*slotdefault*/
      s[0] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(s, a) {
      o[e].m(s, a), A(s, n, a), r = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(s, a) : (i = o[e] = l[e](s), i.c()), y(i, 1), i.m(n.parentNode, n));
    },
    i(s) {
      r || (y(i), r = !0);
    },
    o(s) {
      C(i), r = !1;
    },
    d(s) {
      s && T(n), o[e].d(s);
    }
  };
}
function na(t, e, i) {
  let { slotdefault: n } = e, r;
  const l = () => {
    n && r && (i(1, r.innerHTML = "", r), r.appendChild(n));
  };
  Qe(() => {
    l();
  });
  function o(u) {
    Se[u ? "unshift" : "push"](() => {
      r = u, i(1, r);
    });
  }
  return t.$$set = (u) => {
    i(2, e = M(M({}, e), B(u))), "slotdefault" in u && i(0, n = u.slotdefault);
  }, t.$$.update = () => {
    t.$$.dirty & /*slotdefault, domdefault*/
    3 && n && r && l();
  }, e = B(e), [n, r, e, o];
}
class ra extends ie {
  constructor(e) {
    super(), te(this, e, na, ia, X, { slotdefault: 0 });
  }
}
const ok = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new ra({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let r in i) {
      let l = i[r];
      n.$on(r, (o) => {
        l(o.detail);
      });
    }
  return n;
};
function la(t) {
  let e, i, n, r, l, o, u, s, a, f, c, d, k, g, m, b, _, w, v, p;
  const S = (
    /*#slots*/
    t[9].default
  ), I = K(
    S,
    t,
    /*$$scope*/
    t[8],
    null
  );
  return {
    c() {
      e = P("div"), i = P("div"), r = H(), l = P("div"), u = H(), s = P("div"), f = H(), c = P("div"), k = H(), g = P("div"), b = H(), _ = P("div"), I && I.c(), h(i, "class", n = O(
        /*top*/
        t[2],
        /*$$props*/
        t[7].classTop
      )), h(l, "class", o = O(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[7].classLeftTop
      )), h(s, "class", a = O(
        /*leftMid*/
        t[4],
        /*$$props*/
        t[7].classLeftMid
      )), h(c, "class", d = O(
        /*leftBot*/
        t[5],
        /*$$props*/
        t[7].classLeftBot
      )), h(g, "class", m = O(
        /*right*/
        t[6],
        /*$$props*/
        t[7].classRight
      )), h(_, "class", w = O(
        /*slot*/
        t[1],
        /*$$props*/
        t[7].classSlot
      )), h(e, "class", v = O(
        /*div*/
        t[0],
        /*$$props*/
        t[7].class
      ));
    },
    m(E, j) {
      A(E, e, j), R(e, i), R(e, r), R(e, l), R(e, u), R(e, s), R(e, f), R(e, c), R(e, k), R(e, g), R(e, b), R(e, _), I && I.m(_, null), p = !0;
    },
    p(E, [j]) {
      (!p || j & /*top, $$props*/
      132 && n !== (n = O(
        /*top*/
        E[2],
        /*$$props*/
        E[7].classTop
      ))) && h(i, "class", n), (!p || j & /*leftTop, $$props*/
      136 && o !== (o = O(
        /*leftTop*/
        E[3],
        /*$$props*/
        E[7].classLeftTop
      ))) && h(l, "class", o), (!p || j & /*leftMid, $$props*/
      144 && a !== (a = O(
        /*leftMid*/
        E[4],
        /*$$props*/
        E[7].classLeftMid
      ))) && h(s, "class", a), (!p || j & /*leftBot, $$props*/
      160 && d !== (d = O(
        /*leftBot*/
        E[5],
        /*$$props*/
        E[7].classLeftBot
      ))) && h(c, "class", d), (!p || j & /*right, $$props*/
      192 && m !== (m = O(
        /*right*/
        E[6],
        /*$$props*/
        E[7].classRight
      ))) && h(g, "class", m), I && I.p && (!p || j & /*$$scope*/
      256) && Y(
        I,
        S,
        E,
        /*$$scope*/
        E[8],
        p ? Q(
          S,
          /*$$scope*/
          E[8],
          j,
          null
        ) : J(
          /*$$scope*/
          E[8]
        ),
        null
      ), (!p || j & /*slot, $$props*/
      130 && w !== (w = O(
        /*slot*/
        E[1],
        /*$$props*/
        E[7].classSlot
      ))) && h(_, "class", w), (!p || j & /*div, $$props*/
      129 && v !== (v = O(
        /*div*/
        E[0],
        /*$$props*/
        E[7].class
      ))) && h(e, "class", v);
    },
    i(E) {
      p || (y(I, E), p = !0);
    },
    o(E) {
      C(I, E), p = !1;
    },
    d(E) {
      E && T(e), I && I.d(E);
    }
  };
}
function oa(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-xl uikit-h-[600px] uikit-w-[300px] uikit-shadow-xl" } = e, { slot: o = "uikit-rounded-xl uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: u = "uikit-w-[148px] uikit-h-[18px] uikit-bg-gray-800 uikit-top-0 uikit-rounded-b-[1rem] uikit-left-1/2 -uikit-translate-x-1/2 uikit-absolute" } = e, { leftTop: s = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftMid: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: f = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: c = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (d) => {
    i(7, e = M(M({}, e), B(d))), "div" in d && i(0, l = d.div), "slot" in d && i(1, o = d.slot), "top" in d && i(2, u = d.top), "leftTop" in d && i(3, s = d.leftTop), "leftMid" in d && i(4, a = d.leftMid), "leftBot" in d && i(5, f = d.leftBot), "right" in d && i(6, c = d.right), "$$scope" in d && i(8, r = d.$$scope);
  }, e = B(e), [l, o, u, s, a, f, c, e, r, n];
}
class sa extends ie {
  constructor(e) {
    super(), te(this, e, oa, la, X, {
      div: 0,
      slot: 1,
      top: 2,
      leftTop: 3,
      leftMid: 4,
      leftBot: 5,
      right: 6
    });
  }
}
function ua(t) {
  let e, i, n, r, l, o, u, s, a, f, c, d, k, g, m, b, _;
  const w = (
    /*#slots*/
    t[8].default
  ), v = K(
    w,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = P("div"), i = P("div"), r = H(), l = P("div"), u = H(), s = P("div"), f = H(), c = P("div"), k = H(), g = P("div"), v && v.c(), h(i, "class", n = O(
        /*top*/
        t[2],
        /*$$props*/
        t[6].classTop
      )), h(l, "class", o = O(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[6].classLeftTop
      )), h(s, "class", a = O(
        /*leftBot*/
        t[4],
        /*$$props*/
        t[6].classLeftBot
      )), h(c, "class", d = O(
        /*right*/
        t[5],
        /*$$props*/
        t[6].classRight
      )), h(g, "class", m = O(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(e, "class", b = O(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      ));
    },
    m(p, S) {
      A(p, e, S), R(e, i), R(e, r), R(e, l), R(e, u), R(e, s), R(e, f), R(e, c), R(e, k), R(e, g), v && v.m(g, null), _ = !0;
    },
    p(p, [S]) {
      (!_ || S & /*top, $$props*/
      68 && n !== (n = O(
        /*top*/
        p[2],
        /*$$props*/
        p[6].classTop
      ))) && h(i, "class", n), (!_ || S & /*leftTop, $$props*/
      72 && o !== (o = O(
        /*leftTop*/
        p[3],
        /*$$props*/
        p[6].classLeftTop
      ))) && h(l, "class", o), (!_ || S & /*leftBot, $$props*/
      80 && a !== (a = O(
        /*leftBot*/
        p[4],
        /*$$props*/
        p[6].classLeftBot
      ))) && h(s, "class", a), (!_ || S & /*right, $$props*/
      96 && d !== (d = O(
        /*right*/
        p[5],
        /*$$props*/
        p[6].classRight
      ))) && h(c, "class", d), v && v.p && (!_ || S & /*$$scope*/
      128) && Y(
        v,
        w,
        p,
        /*$$scope*/
        p[7],
        _ ? Q(
          w,
          /*$$scope*/
          p[7],
          S,
          null
        ) : J(
          /*$$scope*/
          p[7]
        ),
        null
      ), (!_ || S & /*slot, $$props*/
      66 && m !== (m = O(
        /*slot*/
        p[1],
        /*$$props*/
        p[6].classSlot
      ))) && h(g, "class", m), (!_ || S & /*div, $$props*/
      65 && b !== (b = O(
        /*div*/
        p[0],
        /*$$props*/
        p[6].class
      ))) && h(e, "class", b);
    },
    i(p) {
      _ || (y(v, p), _ = !0);
    },
    o(p) {
      C(v, p), _ = !1;
    },
    d(p) {
      p && T(e), v && v.d(p);
    }
  };
}
function aa(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[600px] uikit-w-[300px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: u = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftTop: s = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -luikit-eft-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = M(M({}, e), B(c))), "div" in c && i(0, l = c.div), "slot" in c && i(1, o = c.slot), "top" in c && i(2, u = c.top), "leftTop" in c && i(3, s = c.leftTop), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, r = c.$$scope);
  }, e = B(e), [l, o, u, s, a, f, e, r, n];
}
class fa extends ie {
  constructor(e) {
    super(), te(this, e, aa, ua, X, {
      div: 0,
      slot: 1,
      top: 2,
      leftTop: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function ca(t) {
  let e, i, n, r, l, o, u, s, a, f, c;
  const d = (
    /*#slots*/
    t[6].default
  ), k = K(
    d,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      e = P("div"), i = P("div"), k && k.c(), l = H(), o = P("div"), s = H(), a = P("div"), h(i, "class", n = O(
        /*inner*/
        t[0],
        /*$$props*/
        t[4].classInner
      )), h(e, "class", r = O(
        /*div*/
        t[3],
        /*$$props*/
        t[4].class
      )), h(o, "class", u = O(
        /*bot*/
        t[1],
        /*$$props*/
        t[4].classBot
      )), h(a, "class", f = O(
        /*botUnder*/
        t[2],
        /*$$props*/
        t[4].classBotUnder
      ));
    },
    m(g, m) {
      A(g, e, m), R(e, i), k && k.m(i, null), A(g, l, m), A(g, o, m), A(g, s, m), A(g, a, m), c = !0;
    },
    p(g, [m]) {
      k && k.p && (!c || m & /*$$scope*/
      32) && Y(
        k,
        d,
        g,
        /*$$scope*/
        g[5],
        c ? Q(
          d,
          /*$$scope*/
          g[5],
          m,
          null
        ) : J(
          /*$$scope*/
          g[5]
        ),
        null
      ), (!c || m & /*inner, $$props*/
      17 && n !== (n = O(
        /*inner*/
        g[0],
        /*$$props*/
        g[4].classInner
      ))) && h(i, "class", n), (!c || m & /*div, $$props*/
      24 && r !== (r = O(
        /*div*/
        g[3],
        /*$$props*/
        g[4].class
      ))) && h(e, "class", r), (!c || m & /*bot, $$props*/
      18 && u !== (u = O(
        /*bot*/
        g[1],
        /*$$props*/
        g[4].classBot
      ))) && h(o, "class", u), (!c || m & /*botUnder, $$props*/
      20 && f !== (f = O(
        /*botUnder*/
        g[2],
        /*$$props*/
        g[4].classBotUnder
      ))) && h(a, "class", f);
    },
    i(g) {
      c || (y(k, g), c = !0);
    },
    o(g) {
      C(k, g), c = !1;
    },
    d(g) {
      g && (T(e), T(l), T(o), T(s), T(a)), k && k.d(g);
    }
  };
}
function da(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { inner: l = "uikit-rounded-xl uikit-overflow-hidden uikit-h-[140px] md:uikit-h-[262px]" } = e, { bot: o = "uikit-relative uikit-mx-auto uikit-bg-gray-900 dark:uikit-bg-gray-700 uikit-rounded-b-xl uikit-h-[24px] uikit-max-w-[301px] md:uikit-h-[42px] md:uikit-max-w-[512px]" } = e, { botUnder: u = "uikit-relative uikit-mx-auto uikit-bg-gray-800 uikit-rounded-b-xl uikit-h-[55px] uikit-max-w-[83px] md:uikit-h-[95px] md:uikit-max-w-[142px]" } = e, { div: s = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[16px] uikit-rounded-t-xl uikit-h-[172px] uikit-max-w-[301px] md:uikit-h-[294px] md:uikit-max-w-[512px]" } = e;
  return t.$$set = (a) => {
    i(4, e = M(M({}, e), B(a))), "inner" in a && i(0, l = a.inner), "bot" in a && i(1, o = a.bot), "botUnder" in a && i(2, u = a.botUnder), "div" in a && i(3, s = a.div), "$$scope" in a && i(5, r = a.$$scope);
  }, e = B(e), [l, o, u, s, e, r, n];
}
class ka extends ie {
  constructor(e) {
    super(), te(this, e, da, ca, X, { inner: 0, bot: 1, botUnder: 2, div: 3 });
  }
}
function ga(t) {
  let e, i, n, r, l, o, u, s, a, f, c, d, k, g, m, b, _;
  const w = (
    /*#slots*/
    t[8].default
  ), v = K(
    w,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = P("div"), i = P("div"), r = H(), l = P("div"), u = H(), s = P("div"), f = H(), c = P("div"), k = H(), g = P("div"), v && v.c(), h(i, "class", n = O(
        /*top*/
        t[2],
        /*$$props*/
        t[6].classTop
      )), h(l, "class", o = O(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[6].classLeftTop
      )), h(s, "class", a = O(
        /*leftBot*/
        t[4],
        /*$$props*/
        t[6].classLeftBot
      )), h(c, "class", d = O(
        /*right*/
        t[5],
        /*$$props*/
        t[6].classRight
      )), h(g, "class", m = O(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(e, "class", b = O(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      ));
    },
    m(p, S) {
      A(p, e, S), R(e, i), R(e, r), R(e, l), R(e, u), R(e, s), R(e, f), R(e, c), R(e, k), R(e, g), v && v.m(g, null), _ = !0;
    },
    p(p, [S]) {
      (!_ || S & /*top, $$props*/
      68 && n !== (n = O(
        /*top*/
        p[2],
        /*$$props*/
        p[6].classTop
      ))) && h(i, "class", n), (!_ || S & /*leftTop, $$props*/
      72 && o !== (o = O(
        /*leftTop*/
        p[3],
        /*$$props*/
        p[6].classLeftTop
      ))) && h(l, "class", o), (!_ || S & /*leftBot, $$props*/
      80 && a !== (a = O(
        /*leftBot*/
        p[4],
        /*$$props*/
        p[6].classLeftBot
      ))) && h(s, "class", a), (!_ || S & /*right, $$props*/
      96 && d !== (d = O(
        /*right*/
        p[5],
        /*$$props*/
        p[6].classRight
      ))) && h(c, "class", d), v && v.p && (!_ || S & /*$$scope*/
      128) && Y(
        v,
        w,
        p,
        /*$$scope*/
        p[7],
        _ ? Q(
          w,
          /*$$scope*/
          p[7],
          S,
          null
        ) : J(
          /*$$scope*/
          p[7]
        ),
        null
      ), (!_ || S & /*slot, $$props*/
      66 && m !== (m = O(
        /*slot*/
        p[1],
        /*$$props*/
        p[6].classSlot
      ))) && h(g, "class", m), (!_ || S & /*div, $$props*/
      65 && b !== (b = O(
        /*div*/
        p[0],
        /*$$props*/
        p[6].class
      ))) && h(e, "class", b);
    },
    i(p) {
      _ || (y(v, p), _ = !0);
    },
    o(p) {
      C(v, p), _ = !1;
    },
    d(p) {
      p && T(e), v && v.d(p);
    }
  };
}
function ma(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[600px] uikit-w-[300px] uikit-shadow-xl" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: u = "uikit-w-[148px] uikit-h-[18px] uikit-bg-gray-800 uikit-top-0 uikit-rounded-b-[1rem] uikit-left-1/2 -uikit-translate-x-1/2 uikit-absolute" } = e, { leftTop: s = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = M(M({}, e), B(c))), "div" in c && i(0, l = c.div), "slot" in c && i(1, o = c.slot), "top" in c && i(2, u = c.top), "leftTop" in c && i(3, s = c.leftTop), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, r = c.$$scope);
  }, e = B(e), [l, o, u, s, a, f, e, r, n];
}
class ha extends ie {
  constructor(e) {
    super(), te(this, e, ma, ga, X, {
      div: 0,
      slot: 1,
      top: 2,
      leftTop: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function ba(t) {
  let e, i, n, r, l, o, u, s, a, f;
  const c = (
    /*#slots*/
    t[6].default
  ), d = K(
    c,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      e = P("div"), i = P("div"), d && d.c(), l = H(), o = P("div"), u = P("div"), h(i, "class", n = O(
        /*inner*/
        t[1],
        /*$$props*/
        t[4].classInner
      )), h(e, "class", r = O(
        /*div*/
        t[0],
        /*$$props*/
        t[4].class
      )), h(u, "class", s = O(
        /*botCen*/
        t[3],
        /*$$props*/
        t[4].classBotCen
      )), h(o, "class", a = O(
        /*bot*/
        t[2],
        /*$$props*/
        t[4].classBot
      ));
    },
    m(k, g) {
      A(k, e, g), R(e, i), d && d.m(i, null), A(k, l, g), A(k, o, g), R(o, u), f = !0;
    },
    p(k, [g]) {
      d && d.p && (!f || g & /*$$scope*/
      32) && Y(
        d,
        c,
        k,
        /*$$scope*/
        k[5],
        f ? Q(
          c,
          /*$$scope*/
          k[5],
          g,
          null
        ) : J(
          /*$$scope*/
          k[5]
        ),
        null
      ), (!f || g & /*inner, $$props*/
      18 && n !== (n = O(
        /*inner*/
        k[1],
        /*$$props*/
        k[4].classInner
      ))) && h(i, "class", n), (!f || g & /*div, $$props*/
      17 && r !== (r = O(
        /*div*/
        k[0],
        /*$$props*/
        k[4].class
      ))) && h(e, "class", r), (!f || g & /*botCen, $$props*/
      24 && s !== (s = O(
        /*botCen*/
        k[3],
        /*$$props*/
        k[4].classBotCen
      ))) && h(u, "class", s), (!f || g & /*bot, $$props*/
      20 && a !== (a = O(
        /*bot*/
        k[2],
        /*$$props*/
        k[4].classBot
      ))) && h(o, "class", a);
    },
    i(k) {
      f || (y(d, k), f = !0);
    },
    o(k) {
      C(d, k), f = !1;
    },
    d(k) {
      k && (T(e), T(l), T(o)), d && d.d(k);
    }
  };
}
function _a(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[8px] uikit-rounded-t-xl uikit-h-[172px] uikit-max-w-[301px] md:uikit-h-[294px] md:uikit-max-w-[512px]" } = e, { inner: o = "uikit-rounded-lg uikit-overflow-hidden uikit-h-[156px] md:uikit-h-[278px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { bot: u = "uikit-relative uikit-mx-auto uikit-bg-gray-900 dark:uikit-bg-gray-700 uikit-rounded-b-xl uikit-rounded-t-sm uikit-h-[17px] uikit-max-w-[351px] md:uikit-h-[21px] md:uikit-max-w-[597px]" } = e, { botCen: s = "uikit-absolute uikit-left-1/2 uikit-top-0 -uikit-translate-x-1/2 uikit-rounded-b-xl uikit-w-[56px] uikit-h-[5px] md:uikit-w-[96px] md:uikit-h-[8px] uikit-bg-gray-800" } = e;
  return t.$$set = (a) => {
    i(4, e = M(M({}, e), B(a))), "div" in a && i(0, l = a.div), "inner" in a && i(1, o = a.inner), "bot" in a && i(2, u = a.bot), "botCen" in a && i(3, s = a.botCen), "$$scope" in a && i(5, r = a.$$scope);
  }, e = B(e), [l, o, u, s, e, r, n];
}
class pa extends ie {
  constructor(e) {
    super(), te(this, e, _a, ba, X, { div: 0, inner: 1, bot: 2, botCen: 3 });
  }
}
function ya(t) {
  let e, i, n, r, l, o, u, s, a, f, c, d, k, g, m, b, _;
  const w = (
    /*#slots*/
    t[8].default
  ), v = K(
    w,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = P("div"), n = H(), r = P("div"), l = P("div"), u = H(), s = P("div"), f = H(), c = P("div"), v && v.c(), g = H(), m = P("div"), h(e, "class", i = O(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      )), h(l, "class", o = O(
        /*rightTop*/
        t[2],
        /*$$props*/
        t[6].classRightTop
      )), h(s, "class", a = O(
        /*rightBot*/
        t[3],
        /*$$props*/
        t[6].classRightBot
      )), h(c, "class", d = O(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(r, "class", k = O(
        /*top*/
        t[4],
        /*$$props*/
        t[6].classTop
      )), h(m, "class", b = O(
        /*bot*/
        t[5],
        /*$$props*/
        t[6].classBot
      ));
    },
    m(p, S) {
      A(p, e, S), A(p, n, S), A(p, r, S), R(r, l), R(r, u), R(r, s), R(r, f), R(r, c), v && v.m(c, null), A(p, g, S), A(p, m, S), _ = !0;
    },
    p(p, [S]) {
      (!_ || S & /*div, $$props*/
      65 && i !== (i = O(
        /*div*/
        p[0],
        /*$$props*/
        p[6].class
      ))) && h(e, "class", i), (!_ || S & /*rightTop, $$props*/
      68 && o !== (o = O(
        /*rightTop*/
        p[2],
        /*$$props*/
        p[6].classRightTop
      ))) && h(l, "class", o), (!_ || S & /*rightBot, $$props*/
      72 && a !== (a = O(
        /*rightBot*/
        p[3],
        /*$$props*/
        p[6].classRightBot
      ))) && h(s, "class", a), v && v.p && (!_ || S & /*$$scope*/
      128) && Y(
        v,
        w,
        p,
        /*$$scope*/
        p[7],
        _ ? Q(
          w,
          /*$$scope*/
          p[7],
          S,
          null
        ) : J(
          /*$$scope*/
          p[7]
        ),
        null
      ), (!_ || S & /*slot, $$props*/
      66 && d !== (d = O(
        /*slot*/
        p[1],
        /*$$props*/
        p[6].classSlot
      ))) && h(c, "class", d), (!_ || S & /*top, $$props*/
      80 && k !== (k = O(
        /*top*/
        p[4],
        /*$$props*/
        p[6].classTop
      ))) && h(r, "class", k), (!_ || S & /*bot, $$props*/
      96 && b !== (b = O(
        /*bot*/
        p[5],
        /*$$props*/
        p[6].classBot
      ))) && h(m, "class", b);
    },
    i(p) {
      _ || (y(v, p), _ = !0);
    },
    o(p) {
      C(v, p), _ = !1;
    },
    d(p) {
      p && (T(e), T(n), T(r), T(g), T(m)), v && v.d(p);
    }
  };
}
function va(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-bg-gray-800 dark:uikit-bg-gray-700 uikit-rounded-t-[2.5rem] uikit-h-[63px] uikit-max-w-[133px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-h-[193px] uikit-w-[188px]" } = e, { rightTop: u = "uikit-h-[41px] uikit-w-[6px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[16px] uikit-top-[40px] uikit-rounded-r-lg" } = e, { rightBot: s = "uikit-h-[32px] uikit-w-[6px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[16px] uikit-top-[88px] uikit-rounded-r-lg" } = e, { top: a = "uikit-relative uikit-mx-auto uikit-border-gray-900 dark:uikit-bg-gray-800 dark:uikit-border-gray-800 uikit-border-[10px] uikit-rounded-[2.5rem] uikit-h-[213px] uikit-w-[208px]" } = e, { bot: f = "uikit-relative uikit-mx-auto uikit-bg-gray-800 dark:uikit-bg-gray-700 uikit-rounded-b-[2.5rem] uikit-h-[63px] uikit-max-w-[133px]" } = e;
  return t.$$set = (c) => {
    i(6, e = M(M({}, e), B(c))), "div" in c && i(0, l = c.div), "slot" in c && i(1, o = c.slot), "rightTop" in c && i(2, u = c.rightTop), "rightBot" in c && i(3, s = c.rightBot), "top" in c && i(4, a = c.top), "bot" in c && i(5, f = c.bot), "$$scope" in c && i(7, r = c.$$scope);
  }, e = B(e), [l, o, u, s, a, f, e, r, n];
}
class wa extends ie {
  constructor(e) {
    super(), te(this, e, va, ya, X, {
      div: 0,
      slot: 1,
      rightTop: 2,
      rightBot: 3,
      top: 4,
      bot: 5
    });
  }
}
function Ca(t) {
  let e, i, n, r, l, o, u, s, a, f, c, d, k, g, m, b, _;
  const w = (
    /*#slots*/
    t[8].default
  ), v = K(
    w,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = P("div"), i = P("div"), r = H(), l = P("div"), u = H(), s = P("div"), f = H(), c = P("div"), k = H(), g = P("div"), v && v.c(), h(i, "class", n = O(
        /*leftTop*/
        t[2],
        /*$$props*/
        t[6].classLeftTop
      )), h(l, "class", o = O(
        /*leftMid*/
        t[3],
        /*$$props*/
        t[6].classLeftMid
      )), h(s, "class", a = O(
        /*leftBot*/
        t[4],
        /*$$props*/
        t[6].classLeftBot
      )), h(c, "class", d = O(
        /*right*/
        t[5],
        /*$$props*/
        t[6].classRight
      )), h(g, "class", m = O(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(e, "class", b = O(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      ));
    },
    m(p, S) {
      A(p, e, S), R(e, i), R(e, r), R(e, l), R(e, u), R(e, s), R(e, f), R(e, c), R(e, k), R(e, g), v && v.m(g, null), _ = !0;
    },
    p(p, [S]) {
      (!_ || S & /*leftTop, $$props*/
      68 && n !== (n = O(
        /*leftTop*/
        p[2],
        /*$$props*/
        p[6].classLeftTop
      ))) && h(i, "class", n), (!_ || S & /*leftMid, $$props*/
      72 && o !== (o = O(
        /*leftMid*/
        p[3],
        /*$$props*/
        p[6].classLeftMid
      ))) && h(l, "class", o), (!_ || S & /*leftBot, $$props*/
      80 && a !== (a = O(
        /*leftBot*/
        p[4],
        /*$$props*/
        p[6].classLeftBot
      ))) && h(s, "class", a), (!_ || S & /*right, $$props*/
      96 && d !== (d = O(
        /*right*/
        p[5],
        /*$$props*/
        p[6].classRight
      ))) && h(c, "class", d), v && v.p && (!_ || S & /*$$scope*/
      128) && Y(
        v,
        w,
        p,
        /*$$scope*/
        p[7],
        _ ? Q(
          w,
          /*$$scope*/
          p[7],
          S,
          null
        ) : J(
          /*$$scope*/
          p[7]
        ),
        null
      ), (!_ || S & /*slot, $$props*/
      66 && m !== (m = O(
        /*slot*/
        p[1],
        /*$$props*/
        p[6].classSlot
      ))) && h(g, "class", m), (!_ || S & /*div, $$props*/
      65 && b !== (b = O(
        /*div*/
        p[0],
        /*$$props*/
        p[6].class
      ))) && h(e, "class", b);
    },
    i(p) {
      _ || (y(v, p), _ = !0);
    },
    o(p) {
      C(v, p), _ = !1;
    },
    d(p) {
      p && T(e), v && v.d(p);
    }
  };
}
function Sa(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[454px] uikit-max-w-[341px] md:uikit-h-[682px] md:uikit-max-w-[512px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-h-[426px] md:uikit-h-[654px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { leftTop: u = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftMid: s = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -ruikit-ight-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = M(M({}, e), B(c))), "div" in c && i(0, l = c.div), "slot" in c && i(1, o = c.slot), "leftTop" in c && i(2, u = c.leftTop), "leftMid" in c && i(3, s = c.leftMid), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, r = c.$$scope);
  }, e = B(e), [l, o, u, s, a, f, e, r, n];
}
class Ta extends ie {
  constructor(e) {
    super(), te(this, e, Sa, Ca, X, {
      div: 0,
      slot: 1,
      leftTop: 2,
      leftMid: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function Ea(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Unknow device", h(e, "class", "uikit-border uikit-p-3 uikit-text-xl");
    },
    m(i, n) {
      A(i, e, n);
    },
    p: ne,
    i: ne,
    o: ne,
    d(i) {
      i && T(e);
    }
  };
}
function Aa(t) {
  let e, i, n;
  var r = (
    /*component*/
    t[0]
  );
  function l(o) {
    return {
      props: {
        $$slots: { default: [Ia] },
        $$scope: { ctx: o }
      }
    };
  }
  return r && (e = $i(r, l(t))), {
    c() {
      e && $(e.$$.fragment), i = ae();
    },
    m(o, u) {
      e && Z(e, o, u), A(o, i, u), n = !0;
    },
    p(o, u) {
      const s = {};
      if (u & /*$$scope*/
      8 && (s.$$scope = { dirty: u, ctx: o }), u & /*component*/
      1 && r !== (r = /*component*/
      o[0])) {
        if (e) {
          oe();
          const a = e;
          C(a.$$.fragment, 1, 0, () => {
            x(a, 1);
          }), se();
        }
        r ? (e = $i(r, l(o)), $(e.$$.fragment), y(e.$$.fragment, 1), Z(e, i.parentNode, i)) : e = null;
      } else
        r && e.$set(s);
    },
    i(o) {
      n || (e && y(e.$$.fragment, o), n = !0);
    },
    o(o) {
      e && C(e.$$.fragment, o), n = !1;
    },
    d(o) {
      o && T(i), e && x(e, o);
    }
  };
}
function Ia(t) {
  let e;
  const i = (
    /*#slots*/
    t[2].default
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(r, l) {
      n && n.m(r, l), e = !0;
    },
    p(r, l) {
      n && n.p && (!e || l & /*$$scope*/
      8) && Y(
        n,
        i,
        r,
        /*$$scope*/
        r[3],
        e ? Q(
          i,
          /*$$scope*/
          r[3],
          l,
          null
        ) : J(
          /*$$scope*/
          r[3]
        ),
        null
      );
    },
    i(r) {
      e || (y(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Oa(t) {
  let e, i, n, r;
  const l = [Aa, Ea], o = [];
  function u(s, a) {
    return (
      /*component*/
      s[0] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(s, a) {
      o[e].m(s, a), A(s, n, a), r = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(s, a) : (i = o[e] = l[e](s), i.c()), y(i, 1), i.m(n.parentNode, n));
    },
    i(s) {
      r || (y(i), r = !0);
    },
    o(s) {
      C(i), r = !1;
    },
    d(s) {
      s && T(n), o[e].d(s);
    }
  };
}
function La(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { device: l = "default" } = e;
  const o = {
    android: sa,
    ios: ha,
    tablet: Ta,
    default: fa,
    smartwatch: wa,
    laptop: pa,
    desktop: ka
  };
  let u;
  return t.$$set = (s) => {
    "device" in s && i(1, l = s.device), "$$scope" in s && i(3, r = s.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*device*/
    2 && i(0, u = o[l]);
  }, [u, l, n, r];
}
class Pa extends ie {
  constructor(e) {
    super(), te(this, e, La, Oa, X, { device: 1 });
  }
}
const sk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Pa({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let r in i) {
      let l = i[r];
      n.$on(r, (o) => {
        l(o.detail);
      });
    }
  return n;
}, Ma = (t, e) => {
  const i = (n) => {
    n != null && n.target && t && !t.contains(n.target) && !n.defaultPrevented && e();
  };
  return document.addEventListener("click", i, !0), {
    destroy() {
      document.removeEventListener("click", i, !0);
    }
  };
}, Na = (t) => ({ hidden: t & /*hidden*/
1 }), Bn = (t) => ({ hidden: (
  /*hidden*/
  t[0]
) });
function Fn(t) {
  let e, i, n, r, l, o, u;
  function s(m, b) {
    if (
      /*backdrop*/
      m[4] && /*activateClickOutside*/
      m[1]
    )
      return Ra;
    if (
      /*backdrop*/
      m[4] && !/*activateClickOutside*/
      m[1]
    )
      return za;
  }
  let a = s(t), f = a && a(t);
  const c = (
    /*#slots*/
    t[25].default
  ), d = K(
    c,
    t,
    /*$$scope*/
    t[24],
    Bn
  );
  let k = [
    { id: (
      /*id*/
      t[6]
    ) },
    /*$$restProps*/
    t[15],
    {
      class: n = O(
        /*divClass*/
        t[7],
        /*width*/
        t[3],
        /*position*/
        t[2],
        /*placements*/
        t[10][
          /*placement*/
          t[5]
        ],
        /*$$props*/
        t[16].class
      )
    },
    { tabindex: "-1" },
    { "aria-controls": (
      /*id*/
      t[6]
    ) },
    { "aria-labelledby": (
      /*id*/
      t[6]
    ) }
  ], g = {};
  for (let m = 0; m < k.length; m += 1)
    g = M(g, k[m]);
  return {
    c() {
      f && f.c(), e = H(), i = P("div"), d && d.c(), ue(i, g);
    },
    m(m, b) {
      f && f.m(m, b), A(m, e, b), A(m, i, b), d && d.m(i, null), l = !0, o || (u = xe(
        /*clickOutsideWrapper*/
        t[14].call(
          null,
          i,
          /*handleClickOutside*/
          t[12]
        )
      ), o = !0);
    },
    p(m, b) {
      t = m, a === (a = s(t)) && f ? f.p(t, b) : (f && f.d(1), f = a && a(t), f && (f.c(), f.m(e.parentNode, e))), d && d.p && (!l || b & /*$$scope, hidden*/
      16777217) && Y(
        d,
        c,
        t,
        /*$$scope*/
        t[24],
        l ? Q(
          c,
          /*$$scope*/
          t[24],
          b,
          Na
        ) : J(
          /*$$scope*/
          t[24]
        ),
        Bn
      ), ue(i, g = ce(k, [
        (!l || b & /*id*/
        64) && { id: (
          /*id*/
          t[6]
        ) },
        b & /*$$restProps*/
        32768 && /*$$restProps*/
        t[15],
        (!l || b & /*divClass, width, position, placement, $$props*/
        65708 && n !== (n = O(
          /*divClass*/
          t[7],
          /*width*/
          t[3],
          /*position*/
          t[2],
          /*placements*/
          t[10][
            /*placement*/
            t[5]
          ],
          /*$$props*/
          t[16].class
        ))) && { class: n },
        { tabindex: "-1" },
        (!l || b & /*id*/
        64) && { "aria-controls": (
          /*id*/
          t[6]
        ) },
        (!l || b & /*id*/
        64) && { "aria-labelledby": (
          /*id*/
          t[6]
        ) }
      ]));
    },
    i(m) {
      l || (y(d, m), m && Ie(() => {
        l && (r || (r = Re(
          i,
          /*multiple*/
          t[9],
          /*transitionParams*/
          t[8],
          !0
        )), r.run(1));
      }), l = !0);
    },
    o(m) {
      C(d, m), m && (r || (r = Re(
        i,
        /*multiple*/
        t[9],
        /*transitionParams*/
        t[8],
        !1
      )), r.run(0)), l = !1;
    },
    d(m) {
      m && (T(e), T(i)), f && f.d(m), d && d.d(m), m && r && r.end(), o = !1, u();
    }
  };
}
function za(t) {
  let e;
  return {
    c() {
      e = P("div"), h(e, "role", "presentation"), h(
        e,
        "class",
        /*backdropDivClass*/
        t[13]
      );
    },
    m(i, n) {
      A(i, e, n);
    },
    p: ne,
    d(i) {
      i && T(e);
    }
  };
}
function Ra(t) {
  let e, i, n;
  return {
    c() {
      e = P("div"), h(e, "role", "presentation"), h(
        e,
        "class",
        /*backdropDivClass*/
        t[13]
      );
    },
    m(r, l) {
      A(r, e, l), i || (n = F(
        e,
        "click",
        /*click_handler*/
        t[26]
      ), i = !0);
    },
    p: ne,
    d(r) {
      r && T(e), i = !1, n();
    }
  };
}
function Da(t) {
  let e, i, n = !/*hidden*/
  t[0] && Fn(t);
  return {
    c() {
      n && n.c(), e = ae();
    },
    m(r, l) {
      n && n.m(r, l), A(r, e, l), i = !0;
    },
    p(r, [l]) {
      /*hidden*/
      r[0] ? n && (oe(), C(n, 1, 1, () => {
        n = null;
      }), se()) : n ? (n.p(r, l), l & /*hidden*/
      1 && y(n, 1)) : (n = Fn(r), n.c(), y(n, 1), n.m(e.parentNode, e));
    },
    i(r) {
      i || (y(n), i = !0);
    },
    o(r) {
      C(n), i = !1;
    },
    d(r) {
      r && T(e), n && n.d(r);
    }
  };
}
function Ba(t, e, i) {
  const n = [
    "activateClickOutside",
    "hidden",
    "position",
    "leftOffset",
    "rightOffset",
    "topOffset",
    "bottomOffset",
    "width",
    "backdrop",
    "bgColor",
    "bgOpacity",
    "placement",
    "id",
    "divClass",
    "transitionParams",
    "transitionType"
  ];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e, { activateClickOutside: u = !0 } = e, { hidden: s = !0 } = e, { position: a = "uikit-fixed" } = e, { leftOffset: f = "uikit-inset-y-0 uikit-start-0" } = e, { rightOffset: c = "uikit-inset-y-0 uikit-end-0" } = e, { topOffset: d = "uikit-inset-x-0 uikit-top-0" } = e, { bottomOffset: k = "uikit-inset-x-0 uikit-bottom-0" } = e, { width: g = "uikit-w-80" } = e, { backdrop: m = !0 } = e, { bgColor: b = "uikit-bg-gray-900" } = e, { bgOpacity: _ = "uikit-bg-opacity-75" } = e, { placement: w = "left" } = e, { id: v = "drawer-example" } = e, { divClass: p = "uikit-overflow-y-auto uikit-z-50 uikit-p-4 uikit-bg-white dark:uikit-bg-gray-800" } = e, { transitionParams: S = {} } = e, { transitionType: I = "fly" } = e;
  function E(N, D) {
    switch (I) {
      case "slide":
        return Bi(N, D);
      case "blur":
        return Di(N, D);
      case "fade":
        return Zt(N, D);
      default:
        return vt(N, D);
    }
  }
  const j = {
    left: f,
    right: c,
    top: d,
    bottom: k
  }, q = () => {
    i(0, s = !s);
  }, ee = () => u && !s && q();
  let z = O("uikit-fixed uikit-top-0 uikit-start-0 uikit-z-50 uikit-w-full uikit-h-full", m && b, m && _);
  function W(N, D) {
    return u ? Ma(N, D) : void 0;
  }
  const ge = () => !s && q();
  return t.$$set = (N) => {
    i(16, e = M(M({}, e), B(N))), i(15, r = re(e, n)), "activateClickOutside" in N && i(1, u = N.activateClickOutside), "hidden" in N && i(0, s = N.hidden), "position" in N && i(2, a = N.position), "leftOffset" in N && i(17, f = N.leftOffset), "rightOffset" in N && i(18, c = N.rightOffset), "topOffset" in N && i(19, d = N.topOffset), "bottomOffset" in N && i(20, k = N.bottomOffset), "width" in N && i(3, g = N.width), "backdrop" in N && i(4, m = N.backdrop), "bgColor" in N && i(21, b = N.bgColor), "bgOpacity" in N && i(22, _ = N.bgOpacity), "placement" in N && i(5, w = N.placement), "id" in N && i(6, v = N.id), "divClass" in N && i(7, p = N.divClass), "transitionParams" in N && i(8, S = N.transitionParams), "transitionType" in N && i(23, I = N.transitionType), "$$scope" in N && i(24, o = N.$$scope);
  }, e = B(e), [
    s,
    u,
    a,
    g,
    m,
    w,
    v,
    p,
    S,
    E,
    j,
    q,
    ee,
    z,
    W,
    r,
    e,
    f,
    c,
    d,
    k,
    b,
    _,
    I,
    o,
    l,
    ge
  ];
}
class Fa extends ie {
  constructor(e) {
    super(), te(this, e, Ba, Da, X, {
      activateClickOutside: 1,
      hidden: 0,
      position: 2,
      leftOffset: 17,
      rightOffset: 18,
      topOffset: 19,
      bottomOffset: 20,
      width: 3,
      backdrop: 4,
      bgColor: 21,
      bgOpacity: 22,
      placement: 5,
      id: 6,
      divClass: 7,
      transitionParams: 8,
      transitionType: 23
    });
  }
}
function ja(t) {
  let e;
  return {
    c() {
      e = P("div");
    },
    m(i, n) {
      A(i, e, n), t[6](e);
    },
    p: ne,
    d(i) {
      i && T(e), t[6](null);
    }
  };
}
function Wa(t) {
  let e, i, n;
  const r = [
    { transitionType: "fly" },
    {
      transitionParams: (
        /*transitionParams*/
        t[2]
      )
    },
    { id: "sidebar1" },
    /*$$props*/
    t[3]
  ];
  function l(u) {
    t[7](u);
  }
  let o = {
    $$slots: { default: [ja] },
    $$scope: { ctx: t }
  };
  for (let u = 0; u < r.length; u += 1)
    o = M(o, r[u]);
  return (
    /*hidden*/
    t[1] !== void 0 && (o.hidden = /*hidden*/
    t[1]), e = new Fa({ props: o }), Se.push(() => Jt(e, "hidden", l)), {
      c() {
        $(e.$$.fragment);
      },
      m(u, s) {
        Z(e, u, s), n = !0;
      },
      p(u, [s]) {
        const a = s & /*transitionParams, $$props*/
        12 ? ce(r, [
          r[0],
          s & /*transitionParams*/
          4 && {
            transitionParams: (
              /*transitionParams*/
              u[2]
            )
          },
          r[2],
          s & /*$$props*/
          8 && Le(
            /*$$props*/
            u[3]
          )
        ]) : {};
        s & /*$$scope, domdefault*/
        513 && (a.$$scope = { dirty: s, ctx: u }), !i && s & /*hidden*/
        2 && (i = !0, a.hidden = /*hidden*/
        u[1], Yt(() => i = !1)), e.$set(a);
      },
      i(u) {
        n || (y(e.$$.fragment, u), n = !0);
      },
      o(u) {
        C(e.$$.fragment, u), n = !1;
      },
      d(u) {
        x(e, u);
      }
    }
  );
}
function Ua(t, e, i) {
  let { slotdefault: n } = e, r = !0;
  function l() {
    i(1, r = !r);
  }
  let o = { x: -320, duration: 200, easing: No }, u;
  const s = () => {
    n && u && (i(0, u.innerHTML = "", u), u.appendChild(n));
  };
  Qe(() => {
    s();
  });
  function a(c) {
    Se[c ? "unshift" : "push"](() => {
      u = c, i(0, u);
    });
  }
  function f(c) {
    r = c, i(1, r);
  }
  return t.$$set = (c) => {
    i(3, e = M(M({}, e), B(c))), "slotdefault" in c && i(4, n = c.slotdefault);
  }, t.$$.update = () => {
    t.$$.dirty & /*slotdefault, domdefault*/
    17 && n && u && s();
  }, e = B(e), [
    u,
    r,
    o,
    e,
    n,
    l,
    a,
    f
  ];
}
class Ga extends ie {
  constructor(e) {
    super(), te(this, e, Ua, Wa, X, { slotdefault: 4, toggle: 5 });
  }
  get toggle() {
    return this.$$.ctx[5];
  }
}
const uk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Ga({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let r in i) {
      let l = i[r];
      n.$on(r, (o) => {
        l(o.detail);
      });
    }
  return n;
};
function Ha(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M15 19l-7-7 7-7"), h(e, "aria-hidden", "true"), h(e, "class", "uikit-w-5 uikit-h-5 sm:uikit-w-6 sm:uikit-h-6"), h(e, "fill", "none"), h(e, "stroke", "currentColor"), h(e, "viewBox", "0 0 24 24"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    d(n) {
      n && T(e);
    }
  };
}
function Va(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5l7 7-7 7"), h(e, "aria-hidden", "true"), h(e, "class", "uikit-w-5 uikit-h-5 sm:uikit-w-6 sm:uikit-h-6"), h(e, "fill", "none"), h(e, "stroke", "currentColor"), h(e, "viewBox", "0 0 24 24"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    d(n) {
      n && T(e);
    }
  };
}
function qa(t) {
  let e, i, n, r;
  function l(s, a) {
    return (
      /*forward*/
      s[0] ? Va : Ha
    );
  }
  let o = l(t), u = o(t);
  return {
    c() {
      e = P("span"), u.c(), i = H(), n = P("span"), r = be(
        /*name*/
        t[1]
      ), h(n, "class", "uikit-sr-only"), h(e, "class", "uikit-inline-flex uikit-justify-center uikit-items-center uikit-w-8 uikit-h-8 uikit-rounded-full sm:uikit-w-10 sm:uikit-h-10 uikit-bg-white/30 dark:uikit-bg-gray-800/30 group-hover:uikit-bg-white/50 dark:group-hover:uikit-bg-gray-800/60 group-focus:uikit-ring-4 group-focus:uikit-ring-white dark:group-focus:uikit-ring-gray-800/70 group-focus:uikit-outline-none");
    },
    m(s, a) {
      A(s, e, a), u.m(e, null), R(e, i), R(e, n), R(n, r);
    },
    p(s, a) {
      o !== (o = l(s)) && (u.d(1), u = o(s), u && (u.c(), u.m(e, i))), a & /*name*/
      2 && Ce(
        r,
        /*name*/
        s[1]
      );
    },
    d(s) {
      s && T(e), u.d();
    }
  };
}
function Xa(t) {
  let e, i, n, r;
  const l = (
    /*#slots*/
    t[4].default
  ), o = K(
    l,
    t,
    /*$$scope*/
    t[3],
    null
  ), u = o || qa(t);
  return {
    c() {
      e = P("button"), u && u.c(), h(e, "type", "button"), h(
        e,
        "class",
        /*buttonCls*/
        t[2]
      );
    },
    m(s, a) {
      A(s, e, a), u && u.m(e, null), i = !0, n || (r = F(
        e,
        "click",
        /*click_handler*/
        t[5]
      ), n = !0);
    },
    p(s, [a]) {
      o ? o.p && (!i || a & /*$$scope*/
      8) && Y(
        o,
        l,
        s,
        /*$$scope*/
        s[3],
        i ? Q(
          l,
          /*$$scope*/
          s[3],
          a,
          null
        ) : J(
          /*$$scope*/
          s[3]
        ),
        null
      ) : u && u.p && (!i || a & /*name, forward*/
      3) && u.p(s, i ? a : -1), (!i || a & /*buttonCls*/
      4) && h(
        e,
        "class",
        /*buttonCls*/
        s[2]
      );
    },
    i(s) {
      i || (y(u, s), i = !0);
    },
    o(s) {
      C(u, s), i = !1;
    },
    d(s) {
      s && T(e), u && u.d(s), n = !1, r();
    }
  };
}
function Ka(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { forward: l } = e, { name: o } = e, u;
  function s(a) {
    U.call(this, t, a);
  }
  return t.$$set = (a) => {
    i(6, e = M(M({}, e), B(a))), "forward" in a && i(0, l = a.forward), "name" in a && i(1, o = a.name), "$$scope" in a && i(3, r = a.$$scope);
  }, t.$$.update = () => {
    i(2, u = O("uikit-flex uikit-absolute uikit-top-0 uikit-z-30 uikit-justify-center uikit-items-center uikit-px-4 uikit-h-full uikit-group focus:uikit-outline-none uikit-text-white dark:uikit-text-gray-300", l ? "uikit-end-0" : "uikit-start-0", e.class));
  }, e = B(e), [l, o, u, r, n, s];
}
class Ei extends ie {
  constructor(e) {
    super(), te(this, e, Ka, Xa, X, { forward: 0, name: 1 });
  }
}
const Ai = ({ lastSlideChange: t, slideDuration: e, slideDurationRatio: i = 1 }) => t && (/* @__PURE__ */ new Date()).getTime() - t.getTime() < e * i ? (console.warn("Can't change slide yet, too soon"), !1) : !0, Qa = (t) => ({}), jn = (t) => ({
  ControlButton: Ei,
  changeSlide: (
    /*changeSlide*/
    t[1]
  )
});
function Ya(t) {
  let e, i, n, r;
  return e = new Ei({
    props: {
      name: "Previous",
      forward: !1,
      class: O(
        /*$$props*/
        t[2].class
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[5]
  ), n = new Ei({
    props: {
      name: "Next",
      forward: !0,
      class: O(
        /*$$props*/
        t[2].class
      )
    }
  }), n.$on(
    "click",
    /*click_handler_1*/
    t[6]
  ), {
    c() {
      $(e.$$.fragment), i = H(), $(n.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), A(l, i, o), Z(n, l, o), r = !0;
    },
    p(l, o) {
      const u = {};
      o & /*$$props*/
      4 && (u.class = O(
        /*$$props*/
        l[2].class
      )), e.$set(u);
      const s = {};
      o & /*$$props*/
      4 && (s.class = O(
        /*$$props*/
        l[2].class
      )), n.$set(s);
    },
    i(l) {
      r || (y(e.$$.fragment, l), y(n.$$.fragment, l), r = !0);
    },
    o(l) {
      C(e.$$.fragment, l), C(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && T(i), x(e, l), x(n, l);
    }
  };
}
function Ja(t) {
  let e;
  const i = (
    /*#slots*/
    t[4].default
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[3],
    jn
  ), r = n || Ya(t);
  return {
    c() {
      r && r.c();
    },
    m(l, o) {
      r && r.m(l, o), e = !0;
    },
    p(l, [o]) {
      n ? n.p && (!e || o & /*$$scope*/
      8) && Y(
        n,
        i,
        l,
        /*$$scope*/
        l[3],
        e ? Q(
          i,
          /*$$scope*/
          l[3],
          o,
          Qa
        ) : J(
          /*$$scope*/
          l[3]
        ),
        jn
      ) : r && r.p && (!e || o & /*$$props*/
      4) && r.p(l, e ? o : -1);
    },
    i(l) {
      e || (y(r, l), e = !0);
    },
    o(l) {
      C(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function Za(t, e, i) {
  let n, { $$slots: r = {}, $$scope: l } = e;
  const o = Be("state");
  Qt(t, o, (c) => i(7, n = c));
  const { update: u } = o;
  function s(c) {
    Ai({
      lastSlideChange: n.lastSlideChange,
      slideDuration: n.slideDuration,
      slideDurationRatio: 0.75
    }) && u(c ? (d) => (d.forward = !0, d.index = d.index >= d.images.length - 1 ? 0 : d.index + 1, d.lastSlideChange = /* @__PURE__ */ new Date(), { ...d }) : (d) => (d.forward = !1, d.index = d.index <= 0 ? d.images.length - 1 : d.index - 1, d.lastSlideChange = /* @__PURE__ */ new Date(), { ...d }));
  }
  const a = () => s(!1), f = () => s(!0);
  return t.$$set = (c) => {
    i(2, e = M(M({}, e), B(c))), "$$scope" in c && i(3, l = c.$$scope);
  }, e = B(e), [o, s, e, l, r, a, f];
}
class xa extends ie {
  constructor(e) {
    super(), te(this, e, Za, Ja, X, {});
  }
}
function Wn(t, e, i) {
  const n = t.slice();
  n[8] = e[i], n[11] = i;
  const r = (
    /*$state*/
    n[2].index === /*idx*/
    n[11]
  );
  return n[9] = r, n;
}
const $a = (t) => ({ selected: t & /*$state*/
4 }), Un = (t) => ({
  Indicator: qi,
  selected: (
    /*selected*/
    t[9]
  ),
  index: (
    /*idx*/
    t[11]
  )
});
function ef(t) {
  let e, i;
  return e = new qi({
    props: {
      class: O(
        "uikit-bg-gray-100 hover:uikit-bg-gray-300",
        /*selected*/
        t[9] ? (
          /*activeClass*/
          t[0]
        ) : (
          /*inactiveClass*/
          t[1]
        )
      )
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r & /*$state, activeClass, inactiveClass*/
      7 && (l.class = O(
        "uikit-bg-gray-100 hover:uikit-bg-gray-300",
        /*selected*/
        n[9] ? (
          /*activeClass*/
          n[0]
        ) : (
          /*inactiveClass*/
          n[1]
        )
      )), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Gn(t) {
  let e, i, n, r, l;
  const o = (
    /*#slots*/
    t[6].default
  ), u = K(
    o,
    t,
    /*$$scope*/
    t[5],
    Un
  ), s = u || ef(t);
  function a() {
    return (
      /*click_handler*/
      t[7](
        /*idx*/
        t[11]
      )
    );
  }
  return {
    c() {
      e = P("button"), s && s.c(), i = H();
    },
    m(f, c) {
      A(f, e, c), s && s.m(e, null), R(e, i), n = !0, r || (l = F(e, "click", a), r = !0);
    },
    p(f, c) {
      t = f, u ? u.p && (!n || c & /*$$scope, $state*/
      36) && Y(
        u,
        o,
        t,
        /*$$scope*/
        t[5],
        n ? Q(
          o,
          /*$$scope*/
          t[5],
          c,
          $a
        ) : J(
          /*$$scope*/
          t[5]
        ),
        Un
      ) : s && s.p && (!n || c & /*$state, activeClass, inactiveClass*/
      7) && s.p(t, n ? c : -1);
    },
    i(f) {
      n || (y(s, f), n = !0);
    },
    o(f) {
      C(s, f), n = !1;
    },
    d(f) {
      f && T(e), s && s.d(f), r = !1, l();
    }
  };
}
function tf(t) {
  let e, i, n, r = ve(
    /*$state*/
    t[2].images
  ), l = [];
  for (let u = 0; u < r.length; u += 1)
    l[u] = Gn(Wn(t, r, u));
  const o = (u) => C(l[u], 1, 1, () => {
    l[u] = null;
  });
  return {
    c() {
      e = P("div");
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      h(e, "class", i = O(
        "uikit-flex uikit-absolute uikit-bottom-5 uikit-start-1/2 uikit-z-30 uikit-space-x-3 rtl:uikit-space-x-reverse -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
        /*$$props*/
        t[4].class
      ));
    },
    m(u, s) {
      A(u, e, s);
      for (let a = 0; a < l.length; a += 1)
        l[a] && l[a].m(e, null);
      n = !0;
    },
    p(u, [s]) {
      if (s & /*$state, twMerge, activeClass, inactiveClass, $$scope, Indicator*/
      39) {
        r = ve(
          /*$state*/
          u[2].images
        );
        let a;
        for (a = 0; a < r.length; a += 1) {
          const f = Wn(u, r, a);
          l[a] ? (l[a].p(f, s), y(l[a], 1)) : (l[a] = Gn(f), l[a].c(), y(l[a], 1), l[a].m(e, null));
        }
        for (oe(), a = r.length; a < l.length; a += 1)
          o(a);
        se();
      }
      (!n || s & /*$$props*/
      16 && i !== (i = O(
        "uikit-flex uikit-absolute uikit-bottom-5 uikit-start-1/2 uikit-z-30 uikit-space-x-3 rtl:uikit-space-x-reverse -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
        /*$$props*/
        u[4].class
      ))) && h(e, "class", i);
    },
    i(u) {
      if (!n) {
        for (let s = 0; s < r.length; s += 1)
          y(l[s]);
        n = !0;
      }
    },
    o(u) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1)
        C(l[s]);
      n = !1;
    },
    d(u) {
      u && T(e), je(l, u);
    }
  };
}
function nf(t, e, i) {
  let n, { $$slots: r = {}, $$scope: l } = e, { activeClass: o = "uikit-opacity-100" } = e, { inactiveClass: u = "uikit-opacity-60" } = e;
  const s = Be("state");
  Qt(t, s, (f) => i(2, n = f));
  const a = (f) => Hr(s, n.index = f, n);
  return t.$$set = (f) => {
    i(4, e = M(M({}, e), B(f))), "activeClass" in f && i(0, o = f.activeClass), "inactiveClass" in f && i(1, u = f.inactiveClass), "$$scope" in f && i(5, l = f.$$scope);
  }, e = B(e), [
    o,
    u,
    n,
    s,
    e,
    l,
    r,
    a
  ];
}
class rf extends ie {
  constructor(e) {
    super(), te(this, e, nf, tf, X, { activeClass: 0, inactiveClass: 1 });
  }
}
function lf(t) {
  let e = (
    /*image*/
    t[0]
  ), i, n = Hn(t);
  return {
    c() {
      n.c(), i = ae();
    },
    m(r, l) {
      n.m(r, l), A(r, i, l);
    },
    p(r, l) {
      l & /*image*/
      1 && X(e, e = /*image*/
      r[0]) ? (oe(), C(n, 1, 1, ne), se(), n = Hn(r), n.c(), y(n, 1), n.m(i.parentNode, i)) : n.p(r, l);
    },
    d(r) {
      r && T(i), n.d(r);
    }
  };
}
function of(t) {
  let e = (
    /*image*/
    t[0]
  ), i, n = Vn(t);
  return {
    c() {
      n.c(), i = ae();
    },
    m(r, l) {
      n.m(r, l), A(r, i, l);
    },
    p(r, l) {
      l & /*image*/
      1 && X(e, e = /*image*/
      r[0]) ? (oe(), C(n, 1, 1, ne), se(), n = Vn(r), n.c(), y(n, 1), n.m(i.parentNode, i)) : n.p(r, l);
    },
    d(r) {
      r && T(i), n.d(r);
    }
  };
}
function Hn(t) {
  let e, i, n, r, l = [
    { alt: "..." },
    /*image*/
    t[0],
    /*$$restProps*/
    t[6],
    { class: (
      /*imgClass*/
      t[2]
    ) }
  ], o = {};
  for (let u = 0; u < l.length; u += 1)
    o = M(o, l[u]);
  return {
    c() {
      e = P("img"), ue(e, o);
    },
    m(u, s) {
      A(u, e, s), r = !0;
    },
    p(u, s) {
      t = u, ue(e, o = ce(l, [
        { alt: "..." },
        s & /*image*/
        1 && /*image*/
        t[0],
        s & /*$$restProps*/
        64 && /*$$restProps*/
        t[6],
        (!r || s & /*imgClass*/
        4) && { class: (
          /*imgClass*/
          t[2]
        ) }
      ]));
    },
    i(u) {
      r || (u && Ie(() => {
        r && (n && n.end(1), i = to(
          e,
          vt,
          /*transitionSlideIn*/
          t[4]
        ), i.start());
      }), r = !0);
    },
    o(u) {
      i && i.invalidate(), u && (n = io(
        e,
        vt,
        /*transitionSlideOut*/
        t[3]
      )), r = !1;
    },
    d(u) {
      u && T(e), u && n && n.end();
    }
  };
}
function Vn(t) {
  let e, i, n, r = [
    { alt: "..." },
    /*image*/
    t[0],
    /*$$restProps*/
    t[6],
    { class: (
      /*imgClass*/
      t[2]
    ) }
  ], l = {};
  for (let o = 0; o < r.length; o += 1)
    l = M(l, r[o]);
  return {
    c() {
      e = P("img"), ue(e, l);
    },
    m(o, u) {
      A(o, e, u), n = !0;
    },
    p(o, u) {
      ue(e, l = ce(r, [
        { alt: "..." },
        u & /*image*/
        1 && /*image*/
        o[0],
        u & /*$$restProps*/
        64 && /*$$restProps*/
        o[6],
        (!n || u & /*imgClass*/
        4) && { class: (
          /*imgClass*/
          o[2]
        ) }
      ]));
    },
    i(o) {
      n || (o && Ie(() => {
        n && (i || (i = Re(
          e,
          /*transition*/
          t[1],
          {},
          !0
        )), i.run(1));
      }), n = !0);
    },
    o(o) {
      o && (i || (i = Re(
        e,
        /*transition*/
        t[1],
        {},
        !1
      )), i.run(0)), n = !1;
    },
    d(o) {
      o && T(e), o && i && i.end();
    }
  };
}
function sf(t) {
  let e;
  function i(l, o) {
    return (
      /*transition*/
      l[1] ? of : lf
    );
  }
  let n = i(t), r = n(t);
  return {
    c() {
      r.c(), e = ae();
    },
    m(l, o) {
      r.m(l, o), A(l, e, o);
    },
    p(l, [o]) {
      n === (n = i(l)) && r ? r.p(l, o) : (r.d(1), r = n(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: ne,
    o: ne,
    d(l) {
      l && T(e), r.d(l);
    }
  };
}
function uf(t, e, i) {
  let n, r, l;
  const o = ["image", "transition"];
  let u = re(e, o), s;
  const a = Be("state");
  Qt(t, a, (d) => i(7, s = d));
  let { image: f } = e, { transition: c = null } = e;
  return t.$$set = (d) => {
    i(8, e = M(M({}, e), B(d))), i(6, u = re(e, o)), "image" in d && i(0, f = d.image), "transition" in d && i(1, c = d.transition);
  }, t.$$.update = () => {
    t.$$.dirty & /*$state*/
    128 && i(4, n = {
      x: s.forward ? "100%" : "-100%",
      opacity: 1,
      width: "100%",
      height: "100%",
      duration: s.slideDuration
    }), t.$$.dirty & /*$state*/
    128 && i(3, r = {
      x: s.forward ? "-100%" : "100%",
      opacity: 0.9,
      width: "100%",
      height: "100%",
      duration: s.slideDuration
    }), i(2, l = O("uikit-absolute uikit-block !uikit-w-full uikit-h-full uikit-object-cover", e.class));
  }, e = B(e), [
    f,
    c,
    l,
    r,
    n,
    a,
    u,
    s
  ];
}
class _l extends ie {
  constructor(e) {
    super(), te(this, e, uf, sf, X, { image: 0, transition: 1 });
  }
}
const af = (t) => ({ index: t[0] & /*index*/
1 }), qn = (t) => ({
  index: (
    /*index*/
    t[0]
  ),
  Controls: xa,
  Indicators: rf
}), ff = (t) => ({ index: t[0] & /*index*/
1 }), Xn = (t) => ({ Slide: _l, index: (
  /*index*/
  t[0]
) });
function Kn(t, e, i) {
  const n = t.slice();
  return n[29] = e[i], n;
}
function Qn(t) {
  let e, i = ve(
    /*images*/
    t[1]
  ), n = [];
  for (let r = 0; r < i.length; r += 1)
    n[r] = Yn(Kn(t, i, r));
  return {
    c() {
      for (let r = 0; r < n.length; r += 1)
        n[r].c();
      e = ae();
    },
    m(r, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(r, l);
      A(r, e, l);
    },
    p(r, l) {
      if (l[0] & /*images*/
      2) {
        i = ve(
          /*images*/
          r[1]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Kn(r, i, o);
          n[o] ? n[o].p(u, l) : (n[o] = Yn(u), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = i.length;
      }
    },
    d(r) {
      r && T(e), je(n, r);
    }
  };
}
function Yn(t) {
  let e, i;
  return {
    c() {
      e = P("link"), h(e, "rel", "preload"), h(e, "href", i = /*image*/
      t[29].src), h(e, "as", "image");
    },
    m(n, r) {
      A(n, e, r);
    },
    p(n, r) {
      r[0] & /*images*/
      2 && i !== (i = /*image*/
      n[29].src) && h(e, "href", i);
    },
    d(n) {
      n && T(e);
    }
  };
}
function cf(t) {
  let e, i;
  return e = new _l({
    props: {
      image: (
        /*images*/
        t[1][
          /*index*/
          t[0]
        ]
      ),
      class: (
        /*imgClass*/
        t[5]
      ),
      transition: (
        /*transition*/
        t[2]
      )
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r[0] & /*images, index*/
      3 && (l.image = /*images*/
      n[1][
        /*index*/
        n[0]
      ]), r[0] & /*imgClass*/
      32 && (l.class = /*imgClass*/
      n[5]), r[0] & /*transition*/
      4 && (l.transition = /*transition*/
      n[2]), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function df(t) {
  let e, i, n, r, l, o, u, s, a, f, c, d = (
    /*images*/
    t[1].length > 0 && Qn(t)
  );
  const k = (
    /*#slots*/
    t[18].slide
  ), g = K(
    k,
    t,
    /*$$scope*/
    t[17],
    Xn
  ), m = g || cf(t);
  let b = [
    /*$$restProps*/
    t[12],
    {
      class: o = O(
        Zn,
        /*activeDragGesture*/
        t[6] === void 0 ? "uikit-transition-transform" : "",
        /*$$props*/
        t[13].class
      )
    }
  ], _ = {};
  for (let p = 0; p < b.length; p += 1)
    _ = M(_, b[p]);
  const w = (
    /*#slots*/
    t[18].default
  ), v = K(
    w,
    t,
    /*$$scope*/
    t[17],
    qn
  );
  return {
    c() {
      d && d.c(), e = ae(), i = H(), n = H(), r = P("div"), l = P("div"), m && m.c(), s = H(), v && v.c(), ue(l, _), h(r, "class", "uikit-relative"), h(r, "role", "button"), h(
        r,
        "aria-label",
        /*ariaLabel*/
        t[4]
      ), h(r, "tabindex", "0");
    },
    m(p, S) {
      d && d.m(document.head, null), R(document.head, e), A(p, i, S), A(p, n, S), A(p, r, S), R(r, l), m && m.m(l, null), R(r, s), v && v.m(r, null), t[19](r), a = !0, f || (c = [
        F(document, "mousemove", function() {
          me(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        F(document, "mouseup", function() {
          me(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        F(document, "touchmove", function() {
          me(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        F(document, "touchend", function() {
          me(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        xe(u = /*loop*/
        t[10].call(
          null,
          l,
          /*duration*/
          t[3]
        )),
        F(
          r,
          "mousedown",
          /*onDragStart*/
          t[11],
          { passive: !1 }
        ),
        F(
          r,
          "touchstart",
          /*onDragStart*/
          t[11],
          { passive: !1 }
        ),
        F(r, "mousemove", function() {
          me(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        F(r, "mouseup", function() {
          me(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        F(r, "touchmove", function() {
          me(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        F(r, "touchend", function() {
          me(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        })
      ], f = !0);
    },
    p(p, S) {
      t = p, /*images*/
      t[1].length > 0 ? d ? d.p(t, S) : (d = Qn(t), d.c(), d.m(e.parentNode, e)) : d && (d.d(1), d = null), g ? g.p && (!a || S[0] & /*$$scope, index*/
      131073) && Y(
        g,
        k,
        t,
        /*$$scope*/
        t[17],
        a ? Q(
          k,
          /*$$scope*/
          t[17],
          S,
          ff
        ) : J(
          /*$$scope*/
          t[17]
        ),
        Xn
      ) : m && m.p && (!a || S[0] & /*images, index, imgClass, transition*/
      39) && m.p(t, a ? S : [-1, -1]), ue(l, _ = ce(b, [
        S[0] & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12],
        (!a || S[0] & /*activeDragGesture, $$props*/
        8256 && o !== (o = O(
          Zn,
          /*activeDragGesture*/
          t[6] === void 0 ? "uikit-transition-transform" : "",
          /*$$props*/
          t[13].class
        ))) && { class: o }
      ])), u && me(u.update) && S[0] & /*duration*/
      8 && u.update.call(
        null,
        /*duration*/
        t[3]
      ), v && v.p && (!a || S[0] & /*$$scope, index*/
      131073) && Y(
        v,
        w,
        t,
        /*$$scope*/
        t[17],
        a ? Q(
          w,
          /*$$scope*/
          t[17],
          S,
          af
        ) : J(
          /*$$scope*/
          t[17]
        ),
        qn
      ), (!a || S[0] & /*ariaLabel*/
      16) && h(
        r,
        "aria-label",
        /*ariaLabel*/
        t[4]
      );
    },
    i(p) {
      a || (y(m, p), y(v, p), a = !0);
    },
    o(p) {
      C(m, p), C(v, p), a = !1;
    },
    d(p) {
      p && (T(i), T(n), T(r)), d && d.d(p), T(e), m && m.d(p), v && v.d(p), t[19](null), f = !1, we(c);
    }
  };
}
const Jn = 0.25;
let Zn = "uikit-grid uikit-overflow-hidden uikit-relative uikit-rounded-lg uikit-h-56 sm:uikit-h-64 xl:uikit-h-80 2xl:uikit-h-96";
function kf(t, e, i) {
  let n, r;
  const l = [
    "images",
    "index",
    "slideDuration",
    "transition",
    "duration",
    "ariaLabel",
    "imgClass"
  ];
  let o = re(e, l), { $$slots: u = {}, $$scope: s } = e, { images: a } = e, { index: f = 0 } = e, { slideDuration: c = 1e3 } = e, { transition: d = null } = e, { duration: k = 0 } = e, { ariaLabel: g = "Draggable Carousel" } = e, { imgClass: m = "" } = e;
  const b = We(), { set: _, subscribe: w, update: v } = Et({
    images: a,
    index: f,
    forward: !0,
    slideDuration: c,
    lastSlideChange: /* @__PURE__ */ new Date()
  }), p = {
    set: (L) => _({
      index: L.index,
      images: L.images,
      lastSlideChange: /* @__PURE__ */ new Date(),
      slideDuration: c,
      forward: S
    }),
    subscribe: w,
    update: v
  };
  let S = !0;
  Ve("state", p), w((L) => {
    i(0, f = L.index), S = L.forward, b("change", a[f]);
  }), Qe(() => {
    b("change", a[f]);
  });
  const I = () => {
    v((L) => Ai({
      lastSlideChange: L.lastSlideChange,
      slideDuration: c,
      slideDurationRatio: Jn
    }) ? (L.index = L.index >= a.length - 1 ? 0 : L.index + 1, L.lastSlideChange = /* @__PURE__ */ new Date(), { ...L }) : L);
  }, E = () => {
    v((L) => Ai({
      lastSlideChange: L.lastSlideChange,
      slideDuration: c,
      slideDurationRatio: Jn
    }) ? (L.index = L.index <= 0 ? a.length - 1 : L.index - 1, L.lastSlideChange = /* @__PURE__ */ new Date(), { ...L }) : L);
  }, j = (L, le) => {
    i(7, ee = L);
    let de;
    return le > 0 && (de = setInterval(I, le)), {
      update: (pe) => {
        clearInterval(de), pe > 0 && (de = setInterval(I, pe));
      },
      destroy: () => clearInterval(de)
    };
  };
  let q, ee, z = 0, W = null;
  const ge = (L) => {
    const le = L == null ? void 0 : L.clientX;
    if (le)
      return le;
    let de = L;
    if (/^touch/.test(de == null ? void 0 : de.type))
      return de.touches[0].clientX;
  }, N = (L) => {
    i(16, W = L), L.cancelable && L.preventDefault();
    const le = ge(L), de = ee.getBoundingClientRect().width;
    le === void 0 || de === void 0 || i(6, q = {
      start: le,
      position: le,
      width: de,
      timestamp: Date.now()
    });
  };
  function D(L) {
    Se[L ? "unshift" : "push"](() => {
      ee = L, i(7, ee);
    });
  }
  return t.$$set = (L) => {
    i(13, e = M(M({}, e), B(L))), i(12, o = re(e, l)), "images" in L && i(1, a = L.images), "index" in L && i(0, f = L.index), "slideDuration" in L && i(14, c = L.slideDuration), "transition" in L && i(2, d = L.transition), "duration" in L && i(3, k = L.duration), "ariaLabel" in L && i(4, g = L.ariaLabel), "imgClass" in L && i(5, m = L.imgClass), "$$scope" in L && i(17, s = L.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*activeDragGesture*/
    64 && i(9, n = q === void 0 ? void 0 : (L) => {
      const le = ge(L);
      if (!q || le === void 0)
        return;
      const { start: de, width: pe } = q;
      i(15, z = Math.min(100, Math.max(-100, (le - de) / pe * 100))), i(6, q.position = le, q);
    }), t.$$.dirty[0] & /*activeDragGesture, percentOffset, touchEvent*/
    98368 && i(8, r = q === void 0 ? void 0 : (L) => {
      var Pe;
      if (q) {
        const { timestamp: Ae, position: Ne, start: _e } = q, V = Date.now() - Ae, ye = Ne - _e;
        Math.abs(ye) >= 30 && V <= 250 && V > 0 ? ye > 0 ? E() : I() : z > 50 ? E() : z < -50 ? I() : (W == null ? void 0 : W.constructor.name) === "TouchEvent" && ((Pe = W == null ? void 0 : W.target) == null || Pe.dispatchEvent(new Event("click", { bubbles: !0 })));
      }
      i(15, z = 0), i(6, q = void 0), i(16, W = null);
    });
  }, e = B(e), [
    f,
    a,
    d,
    k,
    g,
    m,
    q,
    ee,
    r,
    n,
    j,
    N,
    o,
    e,
    c,
    z,
    W,
    s,
    u,
    D
  ];
}
class gf extends ie {
  constructor(e) {
    super(), te(
      this,
      e,
      kf,
      df,
      X,
      {
        images: 1,
        index: 0,
        slideDuration: 14,
        transition: 2,
        duration: 3,
        ariaLabel: 4,
        imgClass: 5
      },
      null,
      [-1, -1]
    );
  }
}
function mf(t) {
  let e, i, n, r;
  return e = new /*Controls*/
  t[4]({}), n = new /*Indicators*/
  t[3]({}), {
    c() {
      $(e.$$.fragment), i = H(), $(n.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), A(l, i, o), Z(n, l, o), r = !0;
    },
    i(l) {
      r || (y(e.$$.fragment, l), y(n.$$.fragment, l), r = !0);
    },
    o(l) {
      C(e.$$.fragment, l), C(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && T(i), x(e, l), x(n, l);
    }
  };
}
function hf(t) {
  let e, i, n;
  return i = new /*Slide*/
  t[2]({
    props: {
      image: (
        /*images*/
        t[0][
          /*index*/
          t[1]
        ]
      )
    }
  }), {
    c() {
      e = P("div"), $(i.$$.fragment), h(e, "slot", "slide");
    },
    m(r, l) {
      A(r, e, l), Z(i, e, null), n = !0;
    },
    p(r, l) {
      const o = {};
      l & /*images, index*/
      3 && (o.image = /*images*/
      r[0][
        /*index*/
        r[1]
      ]), i.$set(o);
    },
    i(r) {
      n || (y(i.$$.fragment, r), n = !0);
    },
    o(r) {
      C(i.$$.fragment, r), n = !1;
    },
    d(r) {
      r && T(e), x(i);
    }
  };
}
function bf(t) {
  let e, i, n;
  return i = new gf({
    props: {
      images: (
        /*images*/
        t[0]
      ),
      duration: 3900,
      $$slots: {
        slide: [
          hf,
          ({ index: r, Slide: l }) => ({ 1: r, 2: l }),
          ({ index: r, Slide: l }) => (r ? 2 : 0) | (l ? 4 : 0)
        ],
        default: [
          mf,
          ({ Indicators: r, Controls: l }) => ({ 3: r, 4: l }),
          ({ Indicators: r, Controls: l }) => (r ? 8 : 0) | (l ? 16 : 0)
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = P("div"), $(i.$$.fragment), h(e, "class", "max-w-4xl space-y-4");
    },
    m(r, l) {
      A(r, e, l), Z(i, e, null), n = !0;
    },
    p(r, [l]) {
      const o = {};
      l & /*images*/
      1 && (o.images = /*images*/
      r[0]), l & /*$$scope, images, index*/
      35 && (o.$$scope = { dirty: l, ctx: r }), i.$set(o);
    },
    i(r) {
      n || (y(i.$$.fragment, r), n = !0);
    },
    o(r) {
      C(i.$$.fragment, r), n = !1;
    },
    d(r) {
      r && T(e), x(i);
    }
  };
}
function _f(t, e, i) {
  let { images: n = [] } = e;
  return t.$$set = (r) => {
    "images" in r && i(0, n = r.images);
  }, [n];
}
class pf extends ie {
  constructor(e) {
    super(), te(this, e, _f, bf, X, { images: 0 });
  }
}
const ak = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new pf({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let r in i) {
      let l = i[r];
      n.$on(r, (o) => {
        l(o.detail);
      });
    }
  return n;
}, ct = Math.min, Ze = Math.max, Ht = Math.round, Nt = Math.floor, qe = (t) => ({
  x: t,
  y: t
}), yf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, vf = {
  start: "end",
  end: "start"
};
function Ii(t, e, i) {
  return Ze(t, ct(e, i));
}
function At(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function et(t) {
  return t.split("-")[0];
}
function It(t) {
  return t.split("-")[1];
}
function pl(t) {
  return t === "x" ? "y" : "x";
}
function Xi(t) {
  return t === "y" ? "height" : "width";
}
function ii(t) {
  return ["top", "bottom"].includes(et(t)) ? "y" : "x";
}
function Ki(t) {
  return pl(ii(t));
}
function wf(t, e, i) {
  i === void 0 && (i = !1);
  const n = It(t), r = Ki(t), l = Xi(r);
  let o = r === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (o = Vt(o)), [o, Vt(o)];
}
function Cf(t) {
  const e = Vt(t);
  return [Oi(t), e, Oi(e)];
}
function Oi(t) {
  return t.replace(/start|end/g, (e) => vf[e]);
}
function Sf(t, e, i) {
  const n = ["left", "right"], r = ["right", "left"], l = ["top", "bottom"], o = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return i ? e ? r : n : e ? n : r;
    case "left":
    case "right":
      return e ? l : o;
    default:
      return [];
  }
}
function Tf(t, e, i, n) {
  const r = It(t);
  let l = Sf(et(t), i === "start", n);
  return r && (l = l.map((o) => o + "-" + r), e && (l = l.concat(l.map(Oi)))), l;
}
function Vt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => yf[e]);
}
function Ef(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function yl(t) {
  return typeof t != "number" ? Ef(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function qt(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function xn(t, e, i) {
  let {
    reference: n,
    floating: r
  } = t;
  const l = ii(e), o = Ki(e), u = Xi(o), s = et(e), a = l === "y", f = n.x + n.width / 2 - r.width / 2, c = n.y + n.height / 2 - r.height / 2, d = n[u] / 2 - r[u] / 2;
  let k;
  switch (s) {
    case "top":
      k = {
        x: f,
        y: n.y - r.height
      };
      break;
    case "bottom":
      k = {
        x: f,
        y: n.y + n.height
      };
      break;
    case "right":
      k = {
        x: n.x + n.width,
        y: c
      };
      break;
    case "left":
      k = {
        x: n.x - r.width,
        y: c
      };
      break;
    default:
      k = {
        x: n.x,
        y: n.y
      };
  }
  switch (It(e)) {
    case "start":
      k[o] -= d * (i && a ? -1 : 1);
      break;
    case "end":
      k[o] += d * (i && a ? -1 : 1);
      break;
  }
  return k;
}
const Af = async (t, e, i) => {
  const {
    placement: n = "bottom",
    strategy: r = "absolute",
    middleware: l = [],
    platform: o
  } = i, u = l.filter(Boolean), s = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let a = await o.getElementRects({
    reference: t,
    floating: e,
    strategy: r
  }), {
    x: f,
    y: c
  } = xn(a, n, s), d = n, k = {}, g = 0;
  for (let m = 0; m < u.length; m++) {
    const {
      name: b,
      fn: _
    } = u[m], {
      x: w,
      y: v,
      data: p,
      reset: S
    } = await _({
      x: f,
      y: c,
      initialPlacement: n,
      placement: d,
      strategy: r,
      middlewareData: k,
      rects: a,
      platform: o,
      elements: {
        reference: t,
        floating: e
      }
    });
    f = w ?? f, c = v ?? c, k = {
      ...k,
      [b]: {
        ...k[b],
        ...p
      }
    }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (a = S.rects === !0 ? await o.getElementRects({
      reference: t,
      floating: e,
      strategy: r
    }) : S.rects), {
      x: f,
      y: c
    } = xn(a, d, s)), m = -1);
  }
  return {
    x: f,
    y: c,
    placement: d,
    strategy: r,
    middlewareData: k
  };
};
async function vl(t, e) {
  var i;
  e === void 0 && (e = {});
  const {
    x: n,
    y: r,
    platform: l,
    rects: o,
    elements: u,
    strategy: s
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: c = "floating",
    altBoundary: d = !1,
    padding: k = 0
  } = At(e, t), g = yl(k), b = u[d ? c === "floating" ? "reference" : "floating" : c], _ = qt(await l.getClippingRect({
    element: (i = await (l.isElement == null ? void 0 : l.isElement(b))) == null || i ? b : b.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(u.floating)),
    boundary: a,
    rootBoundary: f,
    strategy: s
  })), w = c === "floating" ? {
    ...o.floating,
    x: n,
    y: r
  } : o.reference, v = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u.floating)), p = await (l.isElement == null ? void 0 : l.isElement(v)) ? await (l.getScale == null ? void 0 : l.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = qt(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: w,
    offsetParent: v,
    strategy: s
  }) : w);
  return {
    top: (_.top - S.top + g.top) / p.y,
    bottom: (S.bottom - _.bottom + g.bottom) / p.y,
    left: (_.left - S.left + g.left) / p.x,
    right: (S.right - _.right + g.right) / p.x
  };
}
const If = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: i,
      y: n,
      placement: r,
      rects: l,
      platform: o,
      elements: u,
      middlewareData: s
    } = e, {
      element: a,
      padding: f = 0
    } = At(t, e) || {};
    if (a == null)
      return {};
    const c = yl(f), d = {
      x: i,
      y: n
    }, k = Ki(r), g = Xi(k), m = await o.getDimensions(a), b = k === "y", _ = b ? "top" : "left", w = b ? "bottom" : "right", v = b ? "clientHeight" : "clientWidth", p = l.reference[g] + l.reference[k] - d[k] - l.floating[g], S = d[k] - l.reference[k], I = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a));
    let E = I ? I[v] : 0;
    (!E || !await (o.isElement == null ? void 0 : o.isElement(I))) && (E = u.floating[v] || l.floating[g]);
    const j = p / 2 - S / 2, q = E / 2 - m[g] / 2 - 1, ee = ct(c[_], q), z = ct(c[w], q), W = ee, ge = E - m[g] - z, N = E / 2 - m[g] / 2 + j, D = Ii(W, N, ge), L = !s.arrow && It(r) != null && N !== D && l.reference[g] / 2 - (N < W ? ee : z) - m[g] / 2 < 0, le = L ? N < W ? N - W : N - ge : 0;
    return {
      [k]: d[k] + le,
      data: {
        [k]: D,
        centerOffset: N - D - le,
        ...L && {
          alignmentOffset: le
        }
      },
      reset: L
    };
  }
}), Of = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var i, n;
      const {
        placement: r,
        middlewareData: l,
        rects: o,
        initialPlacement: u,
        platform: s,
        elements: a
      } = e, {
        mainAxis: f = !0,
        crossAxis: c = !0,
        fallbackPlacements: d,
        fallbackStrategy: k = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: m = !0,
        ...b
      } = At(t, e);
      if ((i = l.arrow) != null && i.alignmentOffset)
        return {};
      const _ = et(r), w = et(u) === u, v = await (s.isRTL == null ? void 0 : s.isRTL(a.floating)), p = d || (w || !m ? [Vt(u)] : Cf(u));
      !d && g !== "none" && p.push(...Tf(u, m, g, v));
      const S = [u, ...p], I = await vl(e, b), E = [];
      let j = ((n = l.flip) == null ? void 0 : n.overflows) || [];
      if (f && E.push(I[_]), c) {
        const W = wf(r, o, v);
        E.push(I[W[0]], I[W[1]]);
      }
      if (j = [...j, {
        placement: r,
        overflows: E
      }], !E.every((W) => W <= 0)) {
        var q, ee;
        const W = (((q = l.flip) == null ? void 0 : q.index) || 0) + 1, ge = S[W];
        if (ge)
          return {
            data: {
              index: W,
              overflows: j
            },
            reset: {
              placement: ge
            }
          };
        let N = (ee = j.filter((D) => D.overflows[0] <= 0).sort((D, L) => D.overflows[1] - L.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!N)
          switch (k) {
            case "bestFit": {
              var z;
              const D = (z = j.map((L) => [L.placement, L.overflows.filter((le) => le > 0).reduce((le, de) => le + de, 0)]).sort((L, le) => L[1] - le[1])[0]) == null ? void 0 : z[0];
              D && (N = D);
              break;
            }
            case "initialPlacement":
              N = u;
              break;
          }
        if (r !== N)
          return {
            reset: {
              placement: N
            }
          };
      }
      return {};
    }
  };
};
async function Lf(t, e) {
  const {
    placement: i,
    platform: n,
    elements: r
  } = t, l = await (n.isRTL == null ? void 0 : n.isRTL(r.floating)), o = et(i), u = It(i), s = ii(i) === "y", a = ["left", "top"].includes(o) ? -1 : 1, f = l && s ? -1 : 1, c = At(e, t);
  let {
    mainAxis: d,
    crossAxis: k,
    alignmentAxis: g
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...c
  };
  return u && typeof g == "number" && (k = u === "end" ? g * -1 : g), s ? {
    x: k * f,
    y: d * a
  } : {
    x: d * a,
    y: k * f
  };
}
const Pf = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var i, n;
      const {
        x: r,
        y: l,
        placement: o,
        middlewareData: u
      } = e, s = await Lf(e, t);
      return o === ((i = u.offset) == null ? void 0 : i.placement) && (n = u.arrow) != null && n.alignmentOffset ? {} : {
        x: r + s.x,
        y: l + s.y,
        data: {
          ...s,
          placement: o
        }
      };
    }
  };
}, Mf = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: i,
        y: n,
        placement: r
      } = e, {
        mainAxis: l = !0,
        crossAxis: o = !1,
        limiter: u = {
          fn: (b) => {
            let {
              x: _,
              y: w
            } = b;
            return {
              x: _,
              y: w
            };
          }
        },
        ...s
      } = At(t, e), a = {
        x: i,
        y: n
      }, f = await vl(e, s), c = ii(et(r)), d = pl(c);
      let k = a[d], g = a[c];
      if (l) {
        const b = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", w = k + f[b], v = k - f[_];
        k = Ii(w, k, v);
      }
      if (o) {
        const b = c === "y" ? "top" : "left", _ = c === "y" ? "bottom" : "right", w = g + f[b], v = g - f[_];
        g = Ii(w, g, v);
      }
      const m = u.fn({
        ...e,
        [d]: k,
        [c]: g
      });
      return {
        ...m,
        data: {
          x: m.x - i,
          y: m.y - n
        }
      };
    }
  };
};
function Xe(t) {
  return wl(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Ee(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Ue(t) {
  var e;
  return (e = (wl(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function wl(t) {
  return t instanceof Node || t instanceof Ee(t).Node;
}
function Fe(t) {
  return t instanceof Element || t instanceof Ee(t).Element;
}
function De(t) {
  return t instanceof HTMLElement || t instanceof Ee(t).HTMLElement;
}
function $n(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Ee(t).ShadowRoot;
}
function Ot(t) {
  const {
    overflow: e,
    overflowX: i,
    overflowY: n,
    display: r
  } = Oe(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + i) && !["inline", "contents"].includes(r);
}
function Nf(t) {
  return ["table", "td", "th"].includes(Xe(t));
}
function Qi(t) {
  const e = Yi(), i = Oe(t);
  return i.transform !== "none" || i.perspective !== "none" || (i.containerType ? i.containerType !== "normal" : !1) || !e && (i.backdropFilter ? i.backdropFilter !== "none" : !1) || !e && (i.filter ? i.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (i.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (i.contain || "").includes(n));
}
function Cl(t) {
  let e = dt(t);
  for (; De(e) && !ni(e); ) {
    if (Qi(e))
      return e;
    e = dt(e);
  }
  return null;
}
function Yi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ni(t) {
  return ["html", "body", "#document"].includes(Xe(t));
}
function Oe(t) {
  return Ee(t).getComputedStyle(t);
}
function ri(t) {
  return Fe(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function dt(t) {
  if (Xe(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    $n(t) && t.host || // Fallback.
    Ue(t)
  );
  return $n(e) ? e.host : e;
}
function Sl(t) {
  const e = dt(t);
  return ni(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : De(e) && Ot(e) ? e : Sl(e);
}
function St(t, e, i) {
  var n;
  e === void 0 && (e = []), i === void 0 && (i = !0);
  const r = Sl(t), l = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = Ee(r);
  return l ? e.concat(o, o.visualViewport || [], Ot(r) ? r : [], o.frameElement && i ? St(o.frameElement) : []) : e.concat(r, St(r, [], i));
}
function Tl(t) {
  const e = Oe(t);
  let i = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const r = De(t), l = r ? t.offsetWidth : i, o = r ? t.offsetHeight : n, u = Ht(i) !== l || Ht(n) !== o;
  return u && (i = l, n = o), {
    width: i,
    height: n,
    $: u
  };
}
function Ji(t) {
  return Fe(t) ? t : t.contextElement;
}
function at(t) {
  const e = Ji(t);
  if (!De(e))
    return qe(1);
  const i = e.getBoundingClientRect(), {
    width: n,
    height: r,
    $: l
  } = Tl(e);
  let o = (l ? Ht(i.width) : i.width) / n, u = (l ? Ht(i.height) : i.height) / r;
  return (!o || !Number.isFinite(o)) && (o = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: o,
    y: u
  };
}
const zf = /* @__PURE__ */ qe(0);
function El(t) {
  const e = Ee(t);
  return !Yi() || !e.visualViewport ? zf : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Rf(t, e, i) {
  return e === void 0 && (e = !1), !i || e && i !== Ee(t) ? !1 : e;
}
function tt(t, e, i, n) {
  e === void 0 && (e = !1), i === void 0 && (i = !1);
  const r = t.getBoundingClientRect(), l = Ji(t);
  let o = qe(1);
  e && (n ? Fe(n) && (o = at(n)) : o = at(t));
  const u = Rf(l, i, n) ? El(l) : qe(0);
  let s = (r.left + u.x) / o.x, a = (r.top + u.y) / o.y, f = r.width / o.x, c = r.height / o.y;
  if (l) {
    const d = Ee(l), k = n && Fe(n) ? Ee(n) : n;
    let g = d.frameElement;
    for (; g && n && k !== d; ) {
      const m = at(g), b = g.getBoundingClientRect(), _ = Oe(g), w = b.left + (g.clientLeft + parseFloat(_.paddingLeft)) * m.x, v = b.top + (g.clientTop + parseFloat(_.paddingTop)) * m.y;
      s *= m.x, a *= m.y, f *= m.x, c *= m.y, s += w, a += v, g = Ee(g).frameElement;
    }
  }
  return qt({
    width: f,
    height: c,
    x: s,
    y: a
  });
}
const Df = [":popover-open", ":modal"];
function Al(t) {
  let e = !1, i = 0, n = 0;
  function r(l) {
    try {
      e = e || t.matches(l);
    } catch {
    }
  }
  if (Df.forEach((l) => {
    r(l);
  }), e) {
    const l = Cl(t);
    if (l) {
      const o = l.getBoundingClientRect();
      i = o.x, n = o.y;
    }
  }
  return [e, i, n];
}
function Bf(t) {
  let {
    elements: e,
    rect: i,
    offsetParent: n,
    strategy: r
  } = t;
  const l = Ue(n), [o] = e ? Al(e.floating) : [!1];
  if (n === l || o)
    return i;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = qe(1);
  const a = qe(0), f = De(n);
  if ((f || !f && r !== "fixed") && ((Xe(n) !== "body" || Ot(l)) && (u = ri(n)), De(n))) {
    const c = tt(n);
    s = at(n), a.x = c.x + n.clientLeft, a.y = c.y + n.clientTop;
  }
  return {
    width: i.width * s.x,
    height: i.height * s.y,
    x: i.x * s.x - u.scrollLeft * s.x + a.x,
    y: i.y * s.y - u.scrollTop * s.y + a.y
  };
}
function Ff(t) {
  return Array.from(t.getClientRects());
}
function Il(t) {
  return tt(Ue(t)).left + ri(t).scrollLeft;
}
function jf(t) {
  const e = Ue(t), i = ri(t), n = t.ownerDocument.body, r = Ze(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), l = Ze(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -i.scrollLeft + Il(t);
  const u = -i.scrollTop;
  return Oe(n).direction === "rtl" && (o += Ze(e.clientWidth, n.clientWidth) - r), {
    width: r,
    height: l,
    x: o,
    y: u
  };
}
function Wf(t, e) {
  const i = Ee(t), n = Ue(t), r = i.visualViewport;
  let l = n.clientWidth, o = n.clientHeight, u = 0, s = 0;
  if (r) {
    l = r.width, o = r.height;
    const a = Yi();
    (!a || a && e === "fixed") && (u = r.offsetLeft, s = r.offsetTop);
  }
  return {
    width: l,
    height: o,
    x: u,
    y: s
  };
}
function Uf(t, e) {
  const i = tt(t, !0, e === "fixed"), n = i.top + t.clientTop, r = i.left + t.clientLeft, l = De(t) ? at(t) : qe(1), o = t.clientWidth * l.x, u = t.clientHeight * l.y, s = r * l.x, a = n * l.y;
  return {
    width: o,
    height: u,
    x: s,
    y: a
  };
}
function er(t, e, i) {
  let n;
  if (e === "viewport")
    n = Wf(t, i);
  else if (e === "document")
    n = jf(Ue(t));
  else if (Fe(e))
    n = Uf(e, i);
  else {
    const r = El(t);
    n = {
      ...e,
      x: e.x - r.x,
      y: e.y - r.y
    };
  }
  return qt(n);
}
function Ol(t, e) {
  const i = dt(t);
  return i === e || !Fe(i) || ni(i) ? !1 : Oe(i).position === "fixed" || Ol(i, e);
}
function Gf(t, e) {
  const i = e.get(t);
  if (i)
    return i;
  let n = St(t, [], !1).filter((u) => Fe(u) && Xe(u) !== "body"), r = null;
  const l = Oe(t).position === "fixed";
  let o = l ? dt(t) : t;
  for (; Fe(o) && !ni(o); ) {
    const u = Oe(o), s = Qi(o);
    !s && u.position === "fixed" && (r = null), (l ? !s && !r : !s && u.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Ot(o) && !s && Ol(t, o)) ? n = n.filter((f) => f !== o) : r = u, o = dt(o);
  }
  return e.set(t, n), n;
}
function Hf(t) {
  let {
    element: e,
    boundary: i,
    rootBoundary: n,
    strategy: r
  } = t;
  const o = [...i === "clippingAncestors" ? Gf(e, this._c) : [].concat(i), n], u = o[0], s = o.reduce((a, f) => {
    const c = er(e, f, r);
    return a.top = Ze(c.top, a.top), a.right = ct(c.right, a.right), a.bottom = ct(c.bottom, a.bottom), a.left = Ze(c.left, a.left), a;
  }, er(e, u, r));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function Vf(t) {
  const {
    width: e,
    height: i
  } = Tl(t);
  return {
    width: e,
    height: i
  };
}
function qf(t, e, i, n) {
  const r = De(e), l = Ue(e), o = i === "fixed", u = tt(t, !0, o, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = qe(0);
  if (r || !r && !o)
    if ((Xe(e) !== "body" || Ot(l)) && (s = ri(e)), r) {
      const m = tt(e, !0, o, e);
      a.x = m.x + e.clientLeft, a.y = m.y + e.clientTop;
    } else
      l && (a.x = Il(l));
  let f = u.left + s.scrollLeft - a.x, c = u.top + s.scrollTop - a.y;
  const [d, k, g] = Al(n);
  return d && (f += k, c += g, r && (f += e.clientLeft, c += e.clientTop)), {
    x: f,
    y: c,
    width: u.width,
    height: u.height
  };
}
function tr(t, e) {
  return !De(t) || Oe(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Ll(t, e) {
  const i = Ee(t);
  if (!De(t))
    return i;
  let n = tr(t, e);
  for (; n && Nf(n) && Oe(n).position === "static"; )
    n = tr(n, e);
  return n && (Xe(n) === "html" || Xe(n) === "body" && Oe(n).position === "static" && !Qi(n)) ? i : n || Cl(t) || i;
}
const Xf = async function(t) {
  const e = this.getOffsetParent || Ll, i = this.getDimensions;
  return {
    reference: qf(t.reference, await e(t.floating), t.strategy, t.floating),
    floating: {
      x: 0,
      y: 0,
      ...await i(t.floating)
    }
  };
};
function Kf(t) {
  return Oe(t).direction === "rtl";
}
const Qf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Bf,
  getDocumentElement: Ue,
  getClippingRect: Hf,
  getOffsetParent: Ll,
  getElementRects: Xf,
  getClientRects: Ff,
  getDimensions: Vf,
  getScale: at,
  isElement: Fe,
  isRTL: Kf
};
function Yf(t, e) {
  let i = null, n;
  const r = Ue(t);
  function l() {
    var u;
    clearTimeout(n), (u = i) == null || u.disconnect(), i = null;
  }
  function o(u, s) {
    u === void 0 && (u = !1), s === void 0 && (s = 1), l();
    const {
      left: a,
      top: f,
      width: c,
      height: d
    } = t.getBoundingClientRect();
    if (u || e(), !c || !d)
      return;
    const k = Nt(f), g = Nt(r.clientWidth - (a + c)), m = Nt(r.clientHeight - (f + d)), b = Nt(a), w = {
      rootMargin: -k + "px " + -g + "px " + -m + "px " + -b + "px",
      threshold: Ze(0, ct(1, s)) || 1
    };
    let v = !0;
    function p(S) {
      const I = S[0].intersectionRatio;
      if (I !== s) {
        if (!v)
          return o();
        I ? o(!1, I) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      v = !1;
    }
    try {
      i = new IntersectionObserver(p, {
        ...w,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      i = new IntersectionObserver(p, w);
    }
    i.observe(t);
  }
  return o(!0), l;
}
function ir(t, e, i, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: l = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = n, a = Ji(t), f = r || l ? [...a ? St(a) : [], ...St(e)] : [];
  f.forEach((_) => {
    r && _.addEventListener("scroll", i, {
      passive: !0
    }), l && _.addEventListener("resize", i);
  });
  const c = a && u ? Yf(a, i) : null;
  let d = -1, k = null;
  o && (k = new ResizeObserver((_) => {
    let [w] = _;
    w && w.target === a && k && (k.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var v;
      (v = k) == null || v.observe(e);
    })), i();
  }), a && !s && k.observe(a), k.observe(e));
  let g, m = s ? tt(t) : null;
  s && b();
  function b() {
    const _ = tt(t);
    m && (_.x !== m.x || _.y !== m.y || _.width !== m.width || _.height !== m.height) && i(), m = _, g = requestAnimationFrame(b);
  }
  return i(), () => {
    var _;
    f.forEach((w) => {
      r && w.removeEventListener("scroll", i), l && w.removeEventListener("resize", i);
    }), c == null || c(), (_ = k) == null || _.disconnect(), k = null, s && cancelAnimationFrame(g);
  };
}
const Jf = Mf, Zf = Of, xf = If, $f = (t, e, i) => {
  const n = /* @__PURE__ */ new Map(), r = {
    platform: Qf,
    ...i
  }, l = {
    ...r.platform,
    _c: n
  };
  return Af(t, e, {
    ...r,
    platform: l
  });
};
function nr(t) {
  let e;
  return {
    c() {
      e = P("div");
    },
    m(i, n) {
      A(i, e, n), t[23](e);
    },
    p: ne,
    d(i) {
      i && T(e), t[23](null);
    }
  };
}
function rr(t) {
  let e, i;
  const n = [
    { use: (
      /*init*/
      t[9]
    ) },
    { options: (
      /*referenceEl*/
      t[3]
    ) },
    { role: "tooltip" },
    {
      tabindex: (
        /*activeContent*/
        t[1] ? -1 : void 0
      )
    },
    /*$$restProps*/
    t[11]
  ];
  let r = {
    $$slots: { default: [ec] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new nt({ props: r }), e.$on("focusin", function() {
    me(He(
      /*activeContent*/
      t[1],
      /*showHandler*/
      t[7]
    )) && He(
      /*activeContent*/
      t[1],
      /*showHandler*/
      t[7]
    ).apply(this, arguments);
  }), e.$on("focusout", function() {
    me(He(
      /*activeContent*/
      t[1],
      /*hideHandler*/
      t[8]
    )) && He(
      /*activeContent*/
      t[1],
      /*hideHandler*/
      t[8]
    ).apply(this, arguments);
  }), e.$on("mouseenter", function() {
    me(He(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*showHandler*/
      t[7]
    )) && He(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*showHandler*/
      t[7]
    ).apply(this, arguments);
  }), e.$on("mouseleave", function() {
    me(He(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*hideHandler*/
      t[8]
    )) && He(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*hideHandler*/
      t[8]
    ).apply(this, arguments);
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), i = !0;
    },
    p(l, o) {
      t = l;
      const u = o[0] & /*init, referenceEl, activeContent, $$restProps*/
      2570 ? ce(n, [
        o[0] & /*init*/
        512 && { use: (
          /*init*/
          t[9]
        ) },
        o[0] & /*referenceEl*/
        8 && { options: (
          /*referenceEl*/
          t[3]
        ) },
        n[2],
        o[0] & /*activeContent*/
        2 && {
          tabindex: (
            /*activeContent*/
            t[1] ? -1 : void 0
          )
        },
        o[0] & /*$$restProps*/
        2048 && Le(
          /*$$restProps*/
          t[11]
        )
      ]) : {};
      o[0] & /*$$scope, arrowClass, arrow*/
      16777284 && (u.$$scope = { dirty: o, ctx: t }), e.$set(u);
    },
    i(l) {
      i || (y(e.$$.fragment, l), i = !0);
    },
    o(l) {
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function lr(t) {
  let e, i, n;
  return {
    c() {
      e = P("div"), h(
        e,
        "class",
        /*arrowClass*/
        t[6]
      );
    },
    m(r, l) {
      A(r, e, l), i || (n = xe(
        /*initArrow*/
        t[10].call(null, e)
      ), i = !0);
    },
    p(r, l) {
      l[0] & /*arrowClass*/
      64 && h(
        e,
        "class",
        /*arrowClass*/
        r[6]
      );
    },
    d(r) {
      r && T(e), i = !1, n();
    }
  };
}
function ec(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[22].default
  ), l = K(
    r,
    t,
    /*$$scope*/
    t[24],
    null
  );
  let o = (
    /*arrow*/
    t[2] && lr(t)
  );
  return {
    c() {
      l && l.c(), e = H(), o && o.c(), i = ae();
    },
    m(u, s) {
      l && l.m(u, s), A(u, e, s), o && o.m(u, s), A(u, i, s), n = !0;
    },
    p(u, s) {
      l && l.p && (!n || s[0] & /*$$scope*/
      16777216) && Y(
        l,
        r,
        u,
        /*$$scope*/
        u[24],
        n ? Q(
          r,
          /*$$scope*/
          u[24],
          s,
          null
        ) : J(
          /*$$scope*/
          u[24]
        ),
        null
      ), /*arrow*/
      u[2] ? o ? o.p(u, s) : (o = lr(u), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(u) {
      n || (y(l, u), n = !0);
    },
    o(u) {
      C(l, u), n = !1;
    },
    d(u) {
      u && (T(e), T(i)), l && l.d(u), o && o.d(u);
    }
  };
}
function tc(t) {
  let e, i, n, r = !/*referenceEl*/
  t[3] && nr(t), l = (
    /*open*/
    t[0] && /*referenceEl*/
    t[3] && rr(t)
  );
  return {
    c() {
      r && r.c(), e = H(), l && l.c(), i = ae();
    },
    m(o, u) {
      r && r.m(o, u), A(o, e, u), l && l.m(o, u), A(o, i, u), n = !0;
    },
    p(o, u) {
      /*referenceEl*/
      o[3] ? r && (r.d(1), r = null) : r ? r.p(o, u) : (r = nr(o), r.c(), r.m(e.parentNode, e)), /*open*/
      o[0] && /*referenceEl*/
      o[3] ? l ? (l.p(o, u), u[0] & /*open, referenceEl*/
      9 && y(l, 1)) : (l = rr(o), l.c(), y(l, 1), l.m(i.parentNode, i)) : l && (oe(), C(l, 1, 1, () => {
        l = null;
      }), se());
    },
    i(o) {
      n || (y(l), n = !0);
    },
    o(o) {
      C(l), n = !1;
    },
    d(o) {
      o && (T(e), T(i)), r && r.d(o), l && l.d(o);
    }
  };
}
function He(t, e) {
  return t ? e : () => {
  };
}
function ic(t, e, i) {
  let n;
  const r = [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "reference",
    "strategy",
    "open",
    "yOnly",
    "middlewares"
  ];
  let l = re(e, r), { $$slots: o = {}, $$scope: u } = e, { activeContent: s = !1 } = e, { arrow: a = !0 } = e, { offset: f = 8 } = e, { placement: c = "top" } = e, { trigger: d = "hover" } = e, { triggeredBy: k = void 0 } = e, { reference: g = void 0 } = e, { strategy: m = "absolute" } = e, { open: b = !1 } = e, { yOnly: _ = !1 } = e, { middlewares: w = [Zf(), Jf()] } = e;
  const v = We();
  let p, S, I, E, j, q = [], ee = !1;
  const z = () => (ee = !0, setTimeout(() => ee = !1, 250)), W = (V) => {
    S === void 0 && console.error("trigger undefined"), !g && q.includes(V.target) && S !== V.target && (i(3, S = V.target), z()), p && V.type === "focusin" && !b && z(), i(0, b = p && V.type === "click" && !ee ? !b : !0);
  }, ge = (V) => V.matches(":hover"), N = (V) => V.contains(document.activeElement), D = (V) => V != null ? `${V}px` : "", L = (V) => {
    s ? setTimeout(
      () => {
        const ye = [S, I, ...q].filter(Boolean);
        V.type === "mouseleave" && ye.some(ge) || V.type === "focusout" && ye.some(N) || i(0, b = !1);
      },
      100
    ) : i(0, b = !1);
  };
  let le;
  const de = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function pe() {
    $f(S, I, { placement: c, strategy: m, middleware: n }).then(({ x: V, y: ye, middlewareData: Te, placement: G, strategy: li }) => {
      I.style.position = li, I.style.left = _ ? "0" : D(V), I.style.top = D(ye), Te.arrow && E instanceof HTMLDivElement && (i(20, E.style.left = D(Te.arrow.x), E), i(20, E.style.top = D(Te.arrow.y), E), i(21, le = de[G.split("-")[0]]), i(20, E.style[le] = D(-E.offsetWidth / 2 - (e.border ? 1 : 0)), E));
    });
  }
  function Pe(V, ye) {
    I = V;
    let Te = ir(ye, I, pe);
    return {
      update(G) {
        Te(), Te = ir(G, I, pe);
      },
      destroy() {
        Te();
      }
    };
  }
  Qe(() => {
    const V = [
      ["focusin", W, !0],
      ["focusout", L, !0],
      ["click", W, p],
      ["mouseenter", W, !p],
      ["mouseleave", L, !p]
    ];
    return k ? q = [...document.querySelectorAll(k)] : q = j.previousElementSibling ? [j.previousElementSibling] : [], q.length || console.error("No triggers found."), q.forEach((ye) => {
      ye.tabIndex < 0 && (ye.tabIndex = 0);
      for (const [Te, G, li] of V)
        li && ye.addEventListener(Te, G);
    }), g ? (i(3, S = document.querySelector(g) ?? document.body), S === document.body ? console.error(`Popup reference not found: '${g}'`) : (S.addEventListener("focusout", L), p || S.addEventListener("mouseleave", L))) : i(3, S = q[0]), () => {
      q.forEach((ye) => {
        if (ye)
          for (const [Te, G] of V)
            ye.removeEventListener(Te, G);
      }), S && (S.removeEventListener("focusout", L), S.removeEventListener("mouseleave", L));
    };
  });
  let Ae;
  function Ne(V) {
    return i(20, E = V), {
      destroy() {
        i(20, E = null);
      }
    };
  }
  function _e(V) {
    Se[V ? "unshift" : "push"](() => {
      j = V, i(5, j);
    });
  }
  return t.$$set = (V) => {
    i(36, e = M(M({}, e), B(V))), i(11, l = re(e, r)), "activeContent" in V && i(1, s = V.activeContent), "arrow" in V && i(2, a = V.arrow), "offset" in V && i(12, f = V.offset), "placement" in V && i(13, c = V.placement), "trigger" in V && i(14, d = V.trigger), "triggeredBy" in V && i(15, k = V.triggeredBy), "reference" in V && i(16, g = V.reference), "strategy" in V && i(17, m = V.strategy), "open" in V && i(0, b = V.open), "yOnly" in V && i(18, _ = V.yOnly), "middlewares" in V && i(19, w = V.middlewares), "$$scope" in V && i(24, u = V.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*trigger*/
    16384 && i(4, p = d === "click"), t.$$.dirty[0] & /*open*/
    1 && v("show", b), t.$$.dirty[0] & /*placement, referenceEl*/
    8200 && c && (i(3, S), i(13, c)), t.$$.dirty[0] & /*middlewares, offset, arrowEl*/
    1576960 && (n = [
      ...w,
      Pf(+f),
      E && xf({ element: E, padding: 10 })
    ]), i(6, Ae = Yr("uikit-absolute uikit-pointer-events-none uikit-block uikit-w-[10px] uikit-h-[10px] uikit-rotate-45 uikit-bg-inherit uikit-border-inherit", e.border && le === "bottom" && "uikit-border-b uikit-border-e", e.border && le === "top" && "uikit-border-t uikit-border-s ", e.border && le === "right" && "uikit-border-t uikit-border-e ", e.border && le === "left" && "uikit-border-b uikit-border-s "));
  }, e = B(e), [
    b,
    s,
    a,
    S,
    p,
    j,
    Ae,
    W,
    L,
    Pe,
    Ne,
    l,
    f,
    c,
    d,
    k,
    g,
    m,
    _,
    w,
    E,
    le,
    o,
    _e,
    u
  ];
}
class nc extends ie {
  constructor(e) {
    super(), te(
      this,
      e,
      ic,
      tc,
      X,
      {
        activeContent: 1,
        arrow: 2,
        offset: 12,
        placement: 13,
        trigger: 14,
        triggeredBy: 15,
        reference: 16,
        strategy: 17,
        open: 0,
        yOnly: 18,
        middlewares: 19
      },
      null,
      [-1, -1]
    );
  }
}
const rc = (t) => ({}), or = (t) => ({}), lc = (t) => ({}), sr = (t) => ({});
function ur(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[12].header
  ), r = K(
    n,
    t,
    /*$$scope*/
    t[15],
    sr
  );
  return {
    c() {
      e = P("div"), r && r.c(), h(
        e,
        "class",
        /*headerCls*/
        t[2]
      );
    },
    m(l, o) {
      A(l, e, o), r && r.m(e, null), i = !0;
    },
    p(l, o) {
      r && r.p && (!i || o & /*$$scope*/
      32768) && Y(
        r,
        n,
        l,
        /*$$scope*/
        l[15],
        i ? Q(
          n,
          /*$$scope*/
          l[15],
          o,
          lc
        ) : J(
          /*$$scope*/
          l[15]
        ),
        sr
      );
    },
    i(l) {
      i || (y(r, l), i = !0);
    },
    o(l) {
      C(r, l), i = !1;
    },
    d(l) {
      l && T(e), r && r.d(l);
    }
  };
}
function ar(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[12].footer
  ), r = K(
    n,
    t,
    /*$$scope*/
    t[15],
    or
  );
  return {
    c() {
      e = P("div"), r && r.c(), h(
        e,
        "class",
        /*footerCls*/
        t[4]
      );
    },
    m(l, o) {
      A(l, e, o), r && r.m(e, null), i = !0;
    },
    p(l, o) {
      r && r.p && (!i || o & /*$$scope*/
      32768) && Y(
        r,
        n,
        l,
        /*$$scope*/
        l[15],
        i ? Q(
          n,
          /*$$scope*/
          l[15],
          o,
          rc
        ) : J(
          /*$$scope*/
          l[15]
        ),
        or
      );
    },
    i(l) {
      i || (y(r, l), i = !0);
    },
    o(l) {
      C(r, l), i = !1;
    },
    d(l) {
      l && T(e), r && r.d(l);
    }
  };
}
function oc(t) {
  let e, i, n, r, l, o = (
    /*$$slots*/
    t[6].header && ur(t)
  );
  const u = (
    /*#slots*/
    t[12].default
  ), s = K(
    u,
    t,
    /*$$scope*/
    t[15],
    null
  );
  let a = (
    /*$$slots*/
    t[6].footer && ar(t)
  );
  return {
    c() {
      o && o.c(), e = H(), i = P("ul"), s && s.c(), n = H(), a && a.c(), r = ae(), h(
        i,
        "class",
        /*ulCls*/
        t[3]
      );
    },
    m(f, c) {
      o && o.m(f, c), A(f, e, c), A(f, i, c), s && s.m(i, null), A(f, n, c), a && a.m(f, c), A(f, r, c), l = !0;
    },
    p(f, c) {
      /*$$slots*/
      f[6].header ? o ? (o.p(f, c), c & /*$$slots*/
      64 && y(o, 1)) : (o = ur(f), o.c(), y(o, 1), o.m(e.parentNode, e)) : o && (oe(), C(o, 1, 1, () => {
        o = null;
      }), se()), s && s.p && (!l || c & /*$$scope*/
      32768) && Y(
        s,
        u,
        f,
        /*$$scope*/
        f[15],
        l ? Q(
          u,
          /*$$scope*/
          f[15],
          c,
          null
        ) : J(
          /*$$scope*/
          f[15]
        ),
        null
      ), /*$$slots*/
      f[6].footer ? a ? (a.p(f, c), c & /*$$slots*/
      64 && y(a, 1)) : (a = ar(f), a.c(), y(a, 1), a.m(r.parentNode, r)) : a && (oe(), C(a, 1, 1, () => {
        a = null;
      }), se());
    },
    i(f) {
      l || (y(o), y(s, f), y(a), l = !0);
    },
    o(f) {
      C(o), C(s, f), C(a), l = !1;
    },
    d(f) {
      f && (T(e), T(i), T(n), T(r)), o && o.d(f), s && s.d(f), a && a.d(f);
    }
  };
}
function sc(t) {
  let e, i, n;
  const r = [
    { activeContent: !0 },
    /*$$restProps*/
    t[5],
    { class: (
      /*containerCls*/
      t[1]
    ) }
  ];
  function l(u) {
    t[13](u);
  }
  let o = {
    $$slots: { default: [oc] },
    $$scope: { ctx: t }
  };
  for (let u = 0; u < r.length; u += 1)
    o = M(o, r[u]);
  return (
    /*open*/
    t[0] !== void 0 && (o.open = /*open*/
    t[0]), e = new nc({ props: o }), Se.push(() => Jt(e, "open", l)), e.$on(
      "show",
      /*show_handler*/
      t[14]
    ), {
      c() {
        $(e.$$.fragment);
      },
      m(u, s) {
        Z(e, u, s), n = !0;
      },
      p(u, [s]) {
        const a = s & /*$$restProps, containerCls*/
        34 ? ce(r, [
          r[0],
          s & /*$$restProps*/
          32 && Le(
            /*$$restProps*/
            u[5]
          ),
          s & /*containerCls*/
          2 && { class: (
            /*containerCls*/
            u[1]
          ) }
        ]) : {};
        s & /*$$scope, $$slots*/
        32832 && (a.$$scope = { dirty: s, ctx: u }), !i && s & /*open*/
        1 && (i = !0, a.open = /*open*/
        u[0], Yt(() => i = !1)), e.$set(a);
      },
      i(u) {
        n || (y(e.$$.fragment, u), n = !0);
      },
      o(u) {
        C(e.$$.fragment, u), n = !1;
      },
      d(u) {
        x(e, u);
      }
    }
  );
}
function uc(t, e, i) {
  const n = ["activeUrl", "open", "containerClass", "headerClass", "footerClass", "activeClass"];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e;
  const u = Ke(l), s = Et("");
  let { activeUrl: a = "" } = e, { open: f = !1 } = e, { containerClass: c = "uikit-divide-y z-50" } = e, { headerClass: d = "uikit-py-1 uikit-overflow-hidden uikit-rounded-t-lg" } = e, { footerClass: k = "uikit-py-1 uikit-overflow-hidden uikit-rounded-b-lg" } = e, { activeClass: g = "uikit-text-primary-700 dark:uikit-text-primary-700 hover:uikit-text-primary-900 dark:hover:uikit-text-primary-900" } = e, m = O(g, e.classActive);
  Ve("DropdownType", { activeClass: m }), Ve("activeUrl", s);
  let b = O(c, e.classContainer), _ = O(d, e.classHeader), w = O("py-1", e.class), v = O(k, e.classFooter);
  function p(I) {
    f = I, i(0, f);
  }
  function S(I) {
    U.call(this, t, I);
  }
  return t.$$set = (I) => {
    i(18, e = M(M({}, e), B(I))), i(5, r = re(e, n)), "activeUrl" in I && i(7, a = I.activeUrl), "open" in I && i(0, f = I.open), "containerClass" in I && i(8, c = I.containerClass), "headerClass" in I && i(9, d = I.headerClass), "footerClass" in I && i(10, k = I.footerClass), "activeClass" in I && i(11, g = I.activeClass), "$$scope" in I && i(15, o = I.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*activeUrl*/
    128 && s.set(a), i(5, r.arrow = r.arrow ?? !1, r), i(5, r.trigger = r.trigger ?? "click", r), i(5, r.placement = r.placement ?? "bottom", r), i(5, r.color = r.color ?? "dropdown", r), i(5, r.shadow = r.shadow ?? !0, r), i(5, r.rounded = r.rounded ?? !0, r);
  }, e = B(e), [
    f,
    b,
    _,
    w,
    v,
    r,
    u,
    a,
    c,
    d,
    k,
    g,
    l,
    p,
    S,
    o
  ];
}
class ac extends ie {
  constructor(e) {
    super(), te(this, e, uc, sc, X, {
      activeUrl: 7,
      open: 0,
      containerClass: 8,
      headerClass: 9,
      footerClass: 10,
      activeClass: 11
    });
  }
}
function fc(t) {
  let e = (
    /*tag*/
    t[2]
  ), i, n, r = (
    /*tag*/
    t[2] && ki(t)
  );
  return {
    c() {
      r && r.c(), i = ae();
    },
    m(l, o) {
      r && r.m(l, o), A(l, i, o), n = !0;
    },
    p(l, o) {
      /*tag*/
      l[2] ? e ? X(
        e,
        /*tag*/
        l[2]
      ) ? (r.d(1), r = ki(l), e = /*tag*/
      l[2], r.c(), r.m(i.parentNode, i)) : r.p(l, o) : (r = ki(l), e = /*tag*/
      l[2], r.c(), r.m(i.parentNode, i)) : e && (r.d(1), r = null, e = /*tag*/
      l[2]);
    },
    i(l) {
      n || (y(r, l), n = !0);
    },
    o(l) {
      C(r, l), n = !1;
    },
    d(l) {
      l && T(i), r && r.d(l);
    }
  };
}
function cc(t) {
  let e, i, n, r;
  const l = (
    /*#slots*/
    t[12].default
  ), o = K(
    l,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let u = [
    { type: (
      /*type*/
      t[1]
    ) },
    /*$$restProps*/
    t[4],
    { class: (
      /*buttonClass*/
      t[3]
    ) }
  ], s = {};
  for (let a = 0; a < u.length; a += 1)
    s = M(s, u[a]);
  return {
    c() {
      e = P("button"), o && o.c(), ue(e, s);
    },
    m(a, f) {
      A(a, e, f), o && o.m(e, null), e.autofocus && e.focus(), i = !0, n || (r = [
        F(
          e,
          "click",
          /*click_handler_1*/
          t[22]
        ),
        F(
          e,
          "change",
          /*change_handler_1*/
          t[23]
        ),
        F(
          e,
          "keydown",
          /*keydown_handler_1*/
          t[24]
        ),
        F(
          e,
          "keyup",
          /*keyup_handler_1*/
          t[25]
        ),
        F(
          e,
          "touchstart",
          /*touchstart_handler_1*/
          t[26],
          { passive: !0 }
        ),
        F(
          e,
          "touchend",
          /*touchend_handler_1*/
          t[27]
        ),
        F(
          e,
          "touchcancel",
          /*touchcancel_handler_1*/
          t[28]
        ),
        F(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[29]
        ),
        F(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[30]
        )
      ], n = !0);
    },
    p(a, f) {
      o && o.p && (!i || f[0] & /*$$scope*/
      2048) && Y(
        o,
        l,
        a,
        /*$$scope*/
        a[11],
        i ? Q(
          l,
          /*$$scope*/
          a[11],
          f,
          null
        ) : J(
          /*$$scope*/
          a[11]
        ),
        null
      ), ue(e, s = ce(u, [
        (!i || f[0] & /*type*/
        2) && { type: (
          /*type*/
          a[1]
        ) },
        f[0] & /*$$restProps*/
        16 && /*$$restProps*/
        a[4],
        (!i || f[0] & /*buttonClass*/
        8) && { class: (
          /*buttonClass*/
          a[3]
        ) }
      ]));
    },
    i(a) {
      i || (y(o, a), i = !0);
    },
    o(a) {
      C(o, a), i = !1;
    },
    d(a) {
      a && T(e), o && o.d(a), n = !1, we(r);
    }
  };
}
function dc(t) {
  let e, i, n, r;
  const l = (
    /*#slots*/
    t[12].default
  ), o = K(
    l,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let u = [
    { href: (
      /*href*/
      t[0]
    ) },
    /*$$restProps*/
    t[4],
    { class: (
      /*buttonClass*/
      t[3]
    ) },
    { role: "button" }
  ], s = {};
  for (let a = 0; a < u.length; a += 1)
    s = M(s, u[a]);
  return {
    c() {
      e = P("a"), o && o.c(), ue(e, s);
    },
    m(a, f) {
      A(a, e, f), o && o.m(e, null), i = !0, n || (r = [
        F(
          e,
          "click",
          /*click_handler*/
          t[13]
        ),
        F(
          e,
          "change",
          /*change_handler*/
          t[14]
        ),
        F(
          e,
          "keydown",
          /*keydown_handler*/
          t[15]
        ),
        F(
          e,
          "keyup",
          /*keyup_handler*/
          t[16]
        ),
        F(
          e,
          "touchstart",
          /*touchstart_handler*/
          t[17],
          { passive: !0 }
        ),
        F(
          e,
          "touchend",
          /*touchend_handler*/
          t[18]
        ),
        F(
          e,
          "touchcancel",
          /*touchcancel_handler*/
          t[19]
        ),
        F(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[20]
        ),
        F(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[21]
        )
      ], n = !0);
    },
    p(a, f) {
      o && o.p && (!i || f[0] & /*$$scope*/
      2048) && Y(
        o,
        l,
        a,
        /*$$scope*/
        a[11],
        i ? Q(
          l,
          /*$$scope*/
          a[11],
          f,
          null
        ) : J(
          /*$$scope*/
          a[11]
        ),
        null
      ), ue(e, s = ce(u, [
        (!i || f[0] & /*href*/
        1) && { href: (
          /*href*/
          a[0]
        ) },
        f[0] & /*$$restProps*/
        16 && /*$$restProps*/
        a[4],
        (!i || f[0] & /*buttonClass*/
        8) && { class: (
          /*buttonClass*/
          a[3]
        ) },
        { role: "button" }
      ]));
    },
    i(a) {
      i || (y(o, a), i = !0);
    },
    o(a) {
      C(o, a), i = !1;
    },
    d(a) {
      a && T(e), o && o.d(a), n = !1, we(r);
    }
  };
}
function ki(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[12].default
  ), r = K(
    n,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let l = [
    /*$$restProps*/
    t[4],
    { class: (
      /*buttonClass*/
      t[3]
    ) }
  ], o = {};
  for (let u = 0; u < l.length; u += 1)
    o = M(o, l[u]);
  return {
    c() {
      e = P(
        /*tag*/
        t[2]
      ), r && r.c(), ft(
        /*tag*/
        t[2]
      )(e, o);
    },
    m(u, s) {
      A(u, e, s), r && r.m(e, null), i = !0;
    },
    p(u, s) {
      r && r.p && (!i || s[0] & /*$$scope*/
      2048) && Y(
        r,
        n,
        u,
        /*$$scope*/
        u[11],
        i ? Q(
          n,
          /*$$scope*/
          u[11],
          s,
          null
        ) : J(
          /*$$scope*/
          u[11]
        ),
        null
      ), ft(
        /*tag*/
        u[2]
      )(e, o = ce(l, [
        s[0] & /*$$restProps*/
        16 && /*$$restProps*/
        u[4],
        (!i || s[0] & /*buttonClass*/
        8) && { class: (
          /*buttonClass*/
          u[3]
        ) }
      ]));
    },
    i(u) {
      i || (y(r, u), i = !0);
    },
    o(u) {
      C(r, u), i = !1;
    },
    d(u) {
      u && T(e), r && r.d(u);
    }
  };
}
function kc(t) {
  let e, i, n, r;
  const l = [dc, cc, fc], o = [];
  function u(s, a) {
    return (
      /*href*/
      s[0] ? 0 : (
        /*tag*/
        s[2] === "button" ? 1 : 2
      )
    );
  }
  return e = u(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(s, a) {
      o[e].m(s, a), A(s, n, a), r = !0;
    },
    p(s, a) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(s, a) : (i = o[e] = l[e](s), i.c()), y(i, 1), i.m(n.parentNode, n));
    },
    i(s) {
      r || (y(i), r = !0);
    },
    o(s) {
      C(i), r = !1;
    },
    d(s) {
      s && T(n), o[e].d(s);
    }
  };
}
function gc(t, e, i) {
  const n = ["pill", "outline", "size", "href", "type", "color", "shadow", "tag", "checked"];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e;
  const u = Be("group");
  let { pill: s = !1 } = e, { outline: a = !1 } = e, { size: f = u ? "sm" : "md" } = e, { href: c = void 0 } = e, { type: d = "button" } = e, { color: k = u ? a ? "dark" : "alternative" : "primary" } = e, { shadow: g = !1 } = e, { tag: m = "button" } = e, { checked: b = void 0 } = e;
  const _ = {
    alternative: "uikit-text-gray-900 uikit-bg-white uikit-border uikit-border-gray-200 hover:uikit-bg-gray-100 dark:uikit-bg-gray-800 dark:uikit-text-gray-400 hover:uikit-text-primary-700 focus-within:uikit-text-primary-700 dark:focus-within:uikit-text-white dark:hover:uikit-text-white",
    blue: "uikit-text-white uikit-bg-blue-700 hover:uikit-bg-blue-800 dark:uikit-bg-blue-600 dark:hover:uikit-bg-blue-700",
    dark: "uikit-text-white uikit-bg-gray-800 hover:uikit-bg-gray-900 dark:uikit-bg-gray-800 dark:hover:uikit-bg-gray-700",
    green: "uikit-text-white uikit-bg-green-700 hover:uikit-bg-green-800 dark:uikit-bg-green-600 dark:hover:uikit-bg-green-700",
    light: "uikit-text-gray-900 uikit-bg-white uikit-border uikit-border-gray-300 hover:uikit-bg-gray-100 dark:uikit-bg-gray-800 dark:uikit-text-white dark:uikit-border-gray-600 dark:hover:uikit-bg-gray-700 dark:hover:uikit-border-gray-600",
    primary: "uikit-text-white uikit-bg-primary-700 hover:uikit-bg-primary-800 dark:uikit-bg-primary-600 dark:hover:uikit-bg-primary-700",
    purple: "uikit-text-white uikit-bg-purple-700 hover:uikit-bg-purple-800 dark:uikit-bg-purple-600 dark:hover:uikit-bg-purple-700",
    red: "uikit-text-white uikit-bg-red-700 hover:uikit-bg-red-800 dark:uikit-bg-red-600 dark:hover:uikit-bg-red-700",
    yellow: "uikit-text-white uikit-bg-yellow-400 hover:uikit-bg-yellow-500 ",
    none: ""
  }, w = {
    alternative: "uikit-text-primary-700 uikit-border dark:uikit-text-primary-500 uikit-bg-gray-100 dark:uikit-bg-gray-700 uikit-border-gray-300 uikit-shadow-gray-300 dark:uikit-shadow-gray-800 uikit-shadow-inner",
    blue: "uikit-text-blue-900 uikit-bg-blue-400 dark:uikit-bg-blue-500 uikit-shadow-blue-700 dark:uikit-shadow-blue-800 uikit-shadow-inner",
    dark: "uikit-text-white uikit-bg-gray-500 dark:uikit-bg-gray-600 uikit-shadow-gray-800 dark:uikit-shadow-gray-900 uikit-shadow-inner",
    green: "uikit-text-green-900 uikit-bg-green-400 dark:uikit-bg-green-500 uikit-shadow-green-700 dark:uikit-shadow-green-800 uikit-shadow-inner",
    light: "uikit-text-gray-900 uikit-bg-gray-100 uikit-border uikit-border-gray-300 dark:uikit-bg-gray-500 dark:uikit-text-gray-900 dark:uikit-border-gray-700 uikit-shadow-gray-300 dark:uikit-shadow-gray-700 uikit-shadow-inner",
    primary: "uikit-text-primary-900 uikit-bg-primary-400 dark:uikit-bg-primary-500 uikit-shadow-primary-700 dark:uikit-shadow-primary-800 uikit-shadow-inner",
    purple: "uikit-text-purple-900 uikit-bg-purple-400 dark:uikit-bg-purple-500 uikit-shadow-purple-700 dark:uikit-shadow-purple-800 uikit-shadow-inner",
    red: "uikit-text-red-900 uikit-bg-red-400 dark:uikit-bg-red-500 uikit-shadow-red-700 dark:uikit-shadow-red-800 uikit-shadow-inner",
    yellow: "uikit-text-yellow-900 uikit-bg-yellow-300 dark:uikit-bg-yellow-400 uikit-shadow-yellow-500 dark:uikit-shadow-yellow-700 uikit-shadow-inner",
    none: ""
  }, v = {
    alternative: "focus-within:uikit-ring-gray-200 dark:focus-within:uikit-ring-gray-700",
    blue: "focus-within:uikit-ring-blue-300 dark:focus-within:uikit-ring-blue-800",
    dark: "focus-within:uikit-ring-gray-300 dark:focus-within:uikit-ring-gray-700",
    green: "focus-within:uikit-ring-green-300 dark:focus-within:uikit-ring-green-800",
    light: "focus-within:uikit-ring-gray-200 dark:focus-within:uikit-ring-gray-700",
    primary: "focus-within:uikit-ring-primary-300 dark:focus-within:uikit-ring-primary-800",
    purple: "focus-within:uikit-ring-purple-300 dark:focus-within:uikit-ring-purple-900",
    red: "focus-within:uikit-ring-red-300 dark:focus-within:uikit-ring-red-900",
    yellow: "focus-within:uikit-ring-yellow-300 dark:focus-within:uikit-ring-yellow-900",
    none: ""
  }, p = {
    alternative: "uikit-shadow-gray-500/50 dark:uikit-shadow-gray-800/80",
    blue: "uikit-shadow-blue-500/50 dark:uikit-shadow-blue-800/80",
    dark: "uikit-shadow-gray-500/50 dark:uikit-shadow-gray-800/80",
    green: "uikit-shadow-green-500/50 dark:uikit-shadow-green-800/80",
    light: "uikit-shadow-gray-500/50 dark:uikit-shadow-gray-800/80",
    primary: "uikit-shadow-primary-500/50 dark:uikit-shadow-primary-800/80",
    purple: "uikit-shadow-purple-500/50 dark:uikit-shadow-purple-800/80",
    red: "uikit-shadow-red-500/50 dark:uikit-shadow-red-800/80 ",
    yellow: "uikit-shadow-yellow-500/50 dark:uikit-shadow-yellow-800/80 ",
    none: ""
  }, S = {
    alternative: "uikit-text-gray-900 dark:uikit-text-gray-400 hover:uikit-text-white uikit-border uikit-border-gray-800 hover:uikit-bg-gray-900 focus-within:uikit-bg-gray-900 focus-within:uikit-text-white focus-within:uikit-ring-gray-300 dark:uikit-border-gray-600 dark:hover:uikit-text-white dark:hover:uikit-bg-gray-600 dark:focus-within:uikit-ring-gray-800",
    blue: "uikit-text-blue-700 hover:uikit-text-white uikit-border uikit-border-blue-700 hover:uikit-bg-blue-800 dark:uikit-border-blue-500 dark:uikit-text-blue-500 dark:hover:uikit-text-white dark:hover:uikit-bg-blue-600",
    dark: "uikit-text-gray-900 hover:uikit-text-white uikit-border uikit-border-gray-800 hover:uikit-bg-gray-900 focus-within:uikit-bg-gray-900 focus-within:uikit-text-white dark:uikit-border-gray-600 dark:hover:uikit-text-white dark:hover:uikit-bg-gray-600",
    green: "uikit-text-green-700 hover:uikit-text-white uikit-border uikit-border-green-700 hover:uikit-bg-green-800 dark:uikit-border-green-500 dark:uikit-text-green-500 dark:hover:uikit-text-white dark:hover:uikit-bg-green-600",
    light: "uikit-text-gray-500 hover:uikit-text-gray-900 uikit-bg-white uikit-border uikit-border-gray-200 dark:uikit-border-gray-600 dark:hover:uikit-text-white dark:uikit-text-gray-400 hover:uikit-bg-gray-50 dark:uikit-bg-gray-700 dark:hover:uikit-bg-gray-600",
    primary: "uikit-text-primary-700 hover:uikit-text-white uikit-border uikit-border-primary-700 hover:uikit-bg-primary-700 dark:uikit-border-primary-500 dark:uikit-text-primary-500 dark:hover:uikit-text-white dark:hover:uikit-bg-primary-600",
    purple: "uikit-text-purple-700 hover:uikit-text-white uikit-border uikit-border-purple-700 hover:uikit-bg-purple-800 dark:uikit-border-purple-400 dark:uikit-text-purple-400 dark:hover:uikit-text-white dark:hover:uikit-bg-purple-500",
    red: "uikit-text-red-700 hover:uikit-text-white uikit-border uikit-border-red-700 hover:uikit-bg-red-800 dark:uikit-border-red-500 dark:uikit-text-red-500 dark:hover:uikit-text-white dark:hover:uikit-bg-red-600",
    yellow: "uikit-text-yellow-400 hover:uikit-text-white uikit-border uikit-border-yellow-400 hover:uikit-bg-yellow-500 dark:uikit-border-yellow-300 dark:uikit-text-yellow-300 dark:hover:uikit-text-white dark:hover:uikit-bg-yellow-400",
    none: ""
  }, I = {
    xs: "uikit-px-3 uikit-py-2 uikit-text-xs",
    sm: "uikit-px-4 uikit-py-2 uikit-text-sm",
    md: "uikit-px-5 uikit-py-2.5 uikit-text-sm",
    lg: "uikit-px-5 uikit-py-3 uikit-text-base",
    xl: "uikit-px-6 uikit-py-3.5 uikit-text-base"
  }, E = () => a || k === "alternative" || k === "light";
  let j;
  function q(G) {
    U.call(this, t, G);
  }
  function ee(G) {
    U.call(this, t, G);
  }
  function z(G) {
    U.call(this, t, G);
  }
  function W(G) {
    U.call(this, t, G);
  }
  function ge(G) {
    U.call(this, t, G);
  }
  function N(G) {
    U.call(this, t, G);
  }
  function D(G) {
    U.call(this, t, G);
  }
  function L(G) {
    U.call(this, t, G);
  }
  function le(G) {
    U.call(this, t, G);
  }
  function de(G) {
    U.call(this, t, G);
  }
  function pe(G) {
    U.call(this, t, G);
  }
  function Pe(G) {
    U.call(this, t, G);
  }
  function Ae(G) {
    U.call(this, t, G);
  }
  function Ne(G) {
    U.call(this, t, G);
  }
  function _e(G) {
    U.call(this, t, G);
  }
  function V(G) {
    U.call(this, t, G);
  }
  function ye(G) {
    U.call(this, t, G);
  }
  function Te(G) {
    U.call(this, t, G);
  }
  return t.$$set = (G) => {
    i(39, e = M(M({}, e), B(G))), i(4, r = re(e, n)), "pill" in G && i(5, s = G.pill), "outline" in G && i(6, a = G.outline), "size" in G && i(7, f = G.size), "href" in G && i(0, c = G.href), "type" in G && i(1, d = G.type), "color" in G && i(8, k = G.color), "shadow" in G && i(9, g = G.shadow), "tag" in G && i(2, m = G.tag), "checked" in G && i(10, b = G.checked), "$$scope" in G && i(11, o = G.$$scope);
  }, t.$$.update = () => {
    i(3, j = O(
      "uikit-text-center uikit-font-medium",
      u ? "focus-within:uikit-ring-2" : "focus-within:uikit-ring-4",
      u && "focus-within:uikit-z-10",
      u || "focus-within:uikit-outline-none",
      "uikit-inline-flex uikit-items-center uikit-justify-center " + I[f],
      a && b && "uikit-border dark:uikit-border-gray-900",
      a && b && w[k],
      a && !b && S[k],
      !a && b && w[k],
      !a && !b && _[k],
      k === "alternative" && (u && !b ? "dark:uikit-bg-gray-700 dark:uikit-text-white dark:uikit-border-gray-700 dark:hover:uikit-border-gray-600 dark:hover:uikit-bg-gray-600" : "dark:uikit-bg-transparent dark:uikit-border-gray-600 dark:hover:uikit-border-gray-700"),
      a && k === "dark" && (u ? b ? "uikit-bg-gray-900 uikit-border-gray-800 dark:uikit-border-white dark:uikit-bg-gray-600" : "dark:uikit-text-white uikit-border-gray-800 dark:uikit-border-white" : "dark:uikit-text-gray-400 dark:uikit-border-gray-700"),
      v[k],
      E() && u && "uikit-border-s-0 first:uikit-border-s",
      u ? s && "first:uikit-rounded-s-full last:uikit-rounded-e-full" || "first:uikit-rounded-s-lg last:uikit-rounded-e-lg" : s && "uikit-rounded-full" || "uikit-rounded-lg",
      g && "uikit-shadow-lg",
      g && p[k],
      e.disabled && "uikit-cursor-not-allowed uikit-opacity-50",
      e.class
    ));
  }, e = B(e), [
    c,
    d,
    m,
    j,
    r,
    s,
    a,
    f,
    k,
    g,
    b,
    o,
    l,
    q,
    ee,
    z,
    W,
    ge,
    N,
    D,
    L,
    le,
    de,
    pe,
    Pe,
    Ae,
    Ne,
    _e,
    V,
    ye,
    Te
  ];
}
class Xt extends ie {
  constructor(e) {
    super(), te(
      this,
      e,
      gc,
      kc,
      X,
      {
        pill: 5,
        outline: 6,
        size: 7,
        href: 0,
        type: 1,
        color: 8,
        shadow: 9,
        tag: 2,
        checked: 10
      },
      null,
      [-1, -1]
    );
  }
}
function mc(t) {
  let e;
  const i = (
    /*#slots*/
    t[7].default
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(r, l) {
      n && n.m(r, l), e = !0;
    },
    p(r, l) {
      n && n.p && (!e || l & /*$$scope*/
      64) && Y(
        n,
        i,
        r,
        /*$$scope*/
        r[6],
        e ? Q(
          i,
          /*$$scope*/
          r[6],
          l,
          null
        ) : J(
          /*$$scope*/
          r[6]
        ),
        null
      );
    },
    i(r) {
      e || (y(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function hc(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[7].default
  ), r = K(
    n,
    t,
    /*$$scope*/
    t[6],
    null
  );
  let l = [
    /*$$restProps*/
    t[3],
    { class: (
      /*labelClass*/
      t[2]
    ) }
  ], o = {};
  for (let u = 0; u < l.length; u += 1)
    o = M(o, l[u]);
  return {
    c() {
      e = P("label"), r && r.c(), ue(e, o);
    },
    m(u, s) {
      A(u, e, s), r && r.m(e, null), t[8](e), i = !0;
    },
    p(u, s) {
      r && r.p && (!i || s & /*$$scope*/
      64) && Y(
        r,
        n,
        u,
        /*$$scope*/
        u[6],
        i ? Q(
          n,
          /*$$scope*/
          u[6],
          s,
          null
        ) : J(
          /*$$scope*/
          u[6]
        ),
        null
      ), ue(e, o = ce(l, [
        s & /*$$restProps*/
        8 && /*$$restProps*/
        u[3],
        (!i || s & /*labelClass*/
        4) && { class: (
          /*labelClass*/
          u[2]
        ) }
      ]));
    },
    i(u) {
      i || (y(r, u), i = !0);
    },
    o(u) {
      C(r, u), i = !1;
    },
    d(u) {
      u && T(e), r && r.d(u), t[8](null);
    }
  };
}
function bc(t) {
  let e, i, n, r;
  const l = [hc, mc], o = [];
  function u(s, a) {
    return (
      /*show*/
      s[0] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(s, a) {
      o[e].m(s, a), A(s, n, a), r = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(s, a) : (i = o[e] = l[e](s), i.c()), y(i, 1), i.m(n.parentNode, n));
    },
    i(s) {
      r || (y(i), r = !0);
    },
    o(s) {
      C(i), r = !1;
    },
    d(s) {
      s && T(n), o[e].d(s);
    }
  };
}
function _c(t, e, i) {
  let n;
  const r = ["color", "defaultClass", "show"];
  let l = re(e, r), { $$slots: o = {}, $$scope: u } = e, { color: s = "gray" } = e, { defaultClass: a = "uikit-text-sm rtl:uikit-text-right uikit-font-medium uikit-block" } = e, { show: f = !0 } = e, c;
  const d = {
    gray: "uikit-text-gray-900 dark:uikit-text-gray-300",
    green: "uikit-text-green-700 dark:uikit-text-green-500",
    red: "uikit-text-red-700 dark:uikit-text-red-500",
    disabled: "uikit-text-gray-400 dark:uikit-text-gray-500"
  };
  function k(g) {
    Se[g ? "unshift" : "push"](() => {
      c = g, i(1, c);
    });
  }
  return t.$$set = (g) => {
    i(10, e = M(M({}, e), B(g))), i(3, l = re(e, r)), "color" in g && i(4, s = g.color), "defaultClass" in g && i(5, a = g.defaultClass), "show" in g && i(0, f = g.show), "$$scope" in g && i(6, u = g.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*node, color*/
    18) {
      const g = c == null ? void 0 : c.control;
      i(4, s = g != null && g.disabled ? "disabled" : s);
    }
    i(2, n = O(a, d[s], e.class));
  }, e = B(e), [
    f,
    c,
    n,
    l,
    s,
    a,
    u,
    o,
    k
  ];
}
class pc extends ie {
  constructor(e) {
    super(), te(this, e, _c, bc, X, { color: 4, defaultClass: 5, show: 0 });
  }
}
function yc(t) {
  let e, i, n, r, l, o, u, s = [
    { type: "radio" },
    { __value: (
      /*value*/
      t[4]
    ) },
    /*$$restProps*/
    t[8],
    {
      class: i = cr(
        /*custom*/
        t[2],
        /*color*/
        t[1],
        !1,
        /*background*/
        t[5],
        /*$$slots*/
        t[7].default || /*$$props*/
        t[6].class
      )
    }
  ], a = {};
  for (let d = 0; d < s.length; d += 1)
    a = M(a, s[d]);
  const f = (
    /*#slots*/
    t[9].default
  ), c = K(
    f,
    t,
    /*$$scope*/
    t[23],
    null
  );
  return l = Hl(
    /*$$binding_groups*/
    t[22][0]
  ), {
    c() {
      e = P("input"), n = H(), c && c.c(), ue(e, a), l.p(e);
    },
    m(d, k) {
      A(d, e, k), e.autofocus && e.focus(), e.checked = e.__value === /*group*/
      t[0], A(d, n, k), c && c.m(d, k), r = !0, o || (u = [
        F(
          e,
          "change",
          /*input_change_handler*/
          t[21]
        ),
        F(
          e,
          "blur",
          /*blur_handler*/
          t[10]
        ),
        F(
          e,
          "change",
          /*change_handler*/
          t[11]
        ),
        F(
          e,
          "click",
          /*click_handler*/
          t[12]
        ),
        F(
          e,
          "focus",
          /*focus_handler*/
          t[13]
        ),
        F(
          e,
          "keydown",
          /*keydown_handler*/
          t[14]
        ),
        F(
          e,
          "keypress",
          /*keypress_handler*/
          t[15]
        ),
        F(
          e,
          "keyup",
          /*keyup_handler*/
          t[16]
        ),
        F(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[17]
        ),
        F(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[18]
        ),
        F(
          e,
          "mouseover",
          /*mouseover_handler*/
          t[19]
        ),
        F(
          e,
          "paste",
          /*paste_handler*/
          t[20]
        )
      ], o = !0);
    },
    p(d, k) {
      ue(e, a = ce(s, [
        { type: "radio" },
        (!r || k & /*value*/
        16) && { __value: (
          /*value*/
          d[4]
        ) },
        k & /*$$restProps*/
        256 && /*$$restProps*/
        d[8],
        (!r || k & /*custom, color, $$slots, $$props*/
        198 && i !== (i = cr(
          /*custom*/
          d[2],
          /*color*/
          d[1],
          !1,
          /*background*/
          d[5],
          /*$$slots*/
          d[7].default || /*$$props*/
          d[6].class
        ))) && { class: i }
      ])), k & /*group*/
      1 && (e.checked = e.__value === /*group*/
      d[0]), c && c.p && (!r || k & /*$$scope*/
      8388608) && Y(
        c,
        f,
        d,
        /*$$scope*/
        d[23],
        r ? Q(
          f,
          /*$$scope*/
          d[23],
          k,
          null
        ) : J(
          /*$$scope*/
          d[23]
        ),
        null
      );
    },
    i(d) {
      r || (y(c, d), r = !0);
    },
    o(d) {
      C(c, d), r = !1;
    },
    d(d) {
      d && (T(e), T(n)), c && c.d(d), l.r(), o = !1, we(u);
    }
  };
}
function vc(t) {
  let e, i;
  return e = new pc({
    props: {
      class: fr(
        /*inline*/
        t[3],
        /*$$props*/
        t[6].class
      ),
      show: (
        /*$$slots*/
        t[7].default
      ),
      $$slots: { default: [yc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, [r]) {
      const l = {};
      r & /*inline, $$props*/
      72 && (l.class = fr(
        /*inline*/
        n[3],
        /*$$props*/
        n[6].class
      )), r & /*$$slots*/
      128 && (l.show = /*$$slots*/
      n[7].default), r & /*$$scope, value, $$restProps, custom, color, $$slots, $$props, group*/
      8389079 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
const wc = {
  primary: "uikit-text-primary-600 focus:uikit-ring-primary-500 dark:focus:uikit-ring-primary-600",
  secondary: "uikit-text-secondary-600 focus:uikit-ring-secondary-500 dark:focus:uikit-ring-secondary-600",
  red: "uikit-text-red-600 focus:uikit-ring-red-500 dark:focus:uikit-ring-red-600",
  green: "uikit-text-green-600 focus:uikit-ring-green-500 dark:focus:uikit-ring-green-600",
  purple: "uikit-text-purple-600 focus:uikit-ring-purple-500 dark:focus:uikit-ring-purple-600",
  teal: "uikit-text-teal-600 focus:uikit-ring-teal-500 dark:focus:uikit-ring-teal-600",
  yellow: "uikit-text-yellow-400 focus:uikit-ring-yellow-500 dark:focus:uikit-ring-yellow-600",
  orange: "uikit-text-orange-500 focus:uikit-ring-orange-500 dark:focus:uikit-ring-orange-600",
  blue: "uikit-text-blue-600 focus:uikit-ring-blue-500 dark:focus:uikit-ring-blue-600"
}, fr = (t, e) => O(t ? "uikit-inline-flex" : "uikit-flex", "uikit-items-center", e);
let Cc = "uikit-me-2";
const cr = (t, e, i, n, r) => O(
  "uikit-w-4 uikit-h-4 uikit-bg-gray-100 uikit-border-gray-300 dark:uikit-ring-offset-gray-800 focus:uikit-ring-2",
  Cc,
  n ? "dark:uikit-bg-gray-600 dark:uikit-border-gray-500" : "dark:uikit-bg-gray-700 dark:uikit-border-gray-600",
  t && "uikit-sr-only uikit-peer",
  i && "uikit-rounded",
  wc[e],
  r
);
function Sc(t, e, i) {
  const n = ["color", "custom", "inline", "group", "value"];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e;
  const u = Ke(l);
  let { color: s = "primary" } = e, { custom: a = !1 } = e, { inline: f = !1 } = e, { group: c = "" } = e, { value: d = "" } = e, k = Be("background");
  const g = [[]];
  function m(z) {
    U.call(this, t, z);
  }
  function b(z) {
    U.call(this, t, z);
  }
  function _(z) {
    U.call(this, t, z);
  }
  function w(z) {
    U.call(this, t, z);
  }
  function v(z) {
    U.call(this, t, z);
  }
  function p(z) {
    U.call(this, t, z);
  }
  function S(z) {
    U.call(this, t, z);
  }
  function I(z) {
    U.call(this, t, z);
  }
  function E(z) {
    U.call(this, t, z);
  }
  function j(z) {
    U.call(this, t, z);
  }
  function q(z) {
    U.call(this, t, z);
  }
  function ee() {
    c = this.__value, i(0, c);
  }
  return t.$$set = (z) => {
    i(6, e = M(M({}, e), B(z))), i(8, r = re(e, n)), "color" in z && i(1, s = z.color), "custom" in z && i(2, a = z.custom), "inline" in z && i(3, f = z.inline), "group" in z && i(0, c = z.group), "value" in z && i(4, d = z.value), "$$scope" in z && i(23, o = z.$$scope);
  }, e = B(e), [
    c,
    s,
    a,
    f,
    d,
    k,
    e,
    u,
    r,
    l,
    m,
    b,
    _,
    w,
    v,
    p,
    S,
    I,
    E,
    j,
    q,
    ee,
    g,
    o
  ];
}
class Tc extends ie {
  constructor(e) {
    super(), te(this, e, Sc, vc, X, {
      color: 1,
      custom: 2,
      inline: 3,
      group: 0,
      value: 4
    });
  }
}
function dr(t, e, i) {
  const n = t.slice();
  return n[4] = e[i], n[6] = i, n;
}
function Ec(t) {
  let e = (
    /*group*/
    (t[1] > -1 ? (
      /*items*/
      t[0][
        /*group*/
        t[1]
      ]
    ) : "select a value") + ""
  ), i, n, r;
  return n = new ti({
    props: {
      name: "ChevronDownSolid",
      className: "uikit-w-3 uikit-h-3 uikit-ms-2 uikit-text-white dark:uikit-text-white"
    }
  }), {
    c() {
      i = be(e), $(n.$$.fragment);
    },
    m(l, o) {
      A(l, i, o), Z(n, l, o), r = !0;
    },
    p(l, o) {
      (!r || o & /*group, items*/
      3) && e !== (e = /*group*/
      (l[1] > -1 ? (
        /*items*/
        l[0][
          /*group*/
          l[1]
        ]
      ) : "select a value") + "") && Ce(i, e);
    },
    i(l) {
      r || (y(n.$$.fragment, l), r = !0);
    },
    o(l) {
      C(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && T(i), x(n, l);
    }
  };
}
function Ac(t) {
  let e = (
    /*item*/
    t[4] + ""
  ), i;
  return {
    c() {
      i = be(e);
    },
    m(n, r) {
      A(n, i, r);
    },
    p(n, r) {
      r & /*items*/
      1 && e !== (e = /*item*/
      n[4] + "") && Ce(i, e);
    },
    d(n) {
      n && T(i);
    }
  };
}
function kr(t) {
  let e, i, n, r, l;
  function o(s) {
    t[2](s);
  }
  let u = {
    name: "group1",
    value: (
      /*idx*/
      t[6]
    ),
    $$slots: { default: [Ac] },
    $$scope: { ctx: t }
  };
  return (
    /*group*/
    t[1] !== void 0 && (u.group = /*group*/
    t[1]), i = new Tc({ props: u }), Se.push(() => Jt(i, "group", o)), {
      c() {
        e = P("li"), $(i.$$.fragment), r = H();
      },
      m(s, a) {
        A(s, e, a), Z(i, e, null), R(e, r), l = !0;
      },
      p(s, a) {
        const f = {};
        a & /*$$scope, items*/
        129 && (f.$$scope = { dirty: a, ctx: s }), !n && a & /*group*/
        2 && (n = !0, f.group = /*group*/
        s[1], Yt(() => n = !1)), i.$set(f);
      },
      i(s) {
        l || (y(i.$$.fragment, s), l = !0);
      },
      o(s) {
        C(i.$$.fragment, s), l = !1;
      },
      d(s) {
        s && T(e), x(i);
      }
    }
  );
}
function Ic(t) {
  let e, i, n = ve(
    /*items*/
    t[0]
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = kr(dr(t, n, o));
  const l = (o) => C(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = ae();
    },
    m(o, u) {
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(o, u);
      A(o, e, u), i = !0;
    },
    p(o, u) {
      if (u & /*group, items*/
      3) {
        n = ve(
          /*items*/
          o[0]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const a = dr(o, n, s);
          r[s] ? (r[s].p(a, u), y(r[s], 1)) : (r[s] = kr(a), r[s].c(), y(r[s], 1), r[s].m(e.parentNode, e));
        }
        for (oe(), s = n.length; s < r.length; s += 1)
          l(s);
        se();
      }
    },
    i(o) {
      if (!i) {
        for (let u = 0; u < n.length; u += 1)
          y(r[u]);
        i = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let u = 0; u < r.length; u += 1)
        C(r[u]);
      i = !1;
    },
    d(o) {
      o && T(e), je(r, o);
    }
  };
}
function Oc(t) {
  let e, i, n, r;
  return e = new Xt({
    props: {
      $$slots: { default: [Ec] },
      $$scope: { ctx: t }
    }
  }), n = new ac({
    props: {
      class: "uikit-w-44 uikit-p-3 uikit-space-y-3 uikit-text-sm",
      $$slots: { default: [Ic] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment), i = H(), $(n.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), A(l, i, o), Z(n, l, o), r = !0;
    },
    p(l, [o]) {
      const u = {};
      o & /*$$scope, group, items*/
      131 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      const s = {};
      o & /*$$scope, items, group*/
      131 && (s.$$scope = { dirty: o, ctx: l }), n.$set(s);
    },
    i(l) {
      r || (y(e.$$.fragment, l), y(n.$$.fragment, l), r = !0);
    },
    o(l) {
      C(e.$$.fragment, l), C(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && T(i), x(e, l), x(n, l);
    }
  };
}
function Lc(t, e, i) {
  let n = -1;
  const r = We();
  let { items: l = [] } = e;
  function o(u) {
    n = u, i(1, n);
  }
  return t.$$set = (u) => {
    "items" in u && i(0, l = u.items);
  }, t.$$.update = () => {
    t.$$.dirty & /*group*/
    2 && n > -1 && r("change", n);
  }, [l, n, o];
}
class Pc extends ie {
  constructor(e) {
    super(), te(this, e, Lc, Oc, X, { items: 0 });
  }
}
const fk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Pc({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let r in i) {
      let l = i[r];
      n.$on(r, (o) => {
        l(o.detail);
      });
    }
  return n;
};
function Mc(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[9].default
  ), l = K(
    r,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let o = [
    /*$$restProps*/
    t[3],
    {
      class: i = O(
        /*asideClass*/
        t[2][
          /*mode*/
          t[0]
        ],
        /*$$props*/
        t[4].class,
        "uikit-duration-100"
      )
    },
    { "aria-label": (
      /*ariaLabel*/
      t[1]
    ) }
  ], u = {};
  for (let s = 0; s < o.length; s += 1)
    u = M(u, o[s]);
  return {
    c() {
      e = P("aside"), l && l.c(), ue(e, u);
    },
    m(s, a) {
      A(s, e, a), l && l.m(e, null), n = !0;
    },
    p(s, [a]) {
      l && l.p && (!n || a & /*$$scope*/
      256) && Y(
        l,
        r,
        s,
        /*$$scope*/
        s[8],
        n ? Q(
          r,
          /*$$scope*/
          s[8],
          a,
          null
        ) : J(
          /*$$scope*/
          s[8]
        ),
        null
      ), ue(e, u = ce(o, [
        a & /*$$restProps*/
        8 && /*$$restProps*/
        s[3],
        (!n || a & /*mode, $$props*/
        17 && i !== (i = O(
          /*asideClass*/
          s[2][
            /*mode*/
            s[0]
          ],
          /*$$props*/
          s[4].class,
          "uikit-duration-100"
        ))) && { class: i },
        (!n || a & /*ariaLabel*/
        2) && { "aria-label": (
          /*ariaLabel*/
          s[1]
        ) }
      ]));
    },
    i(s) {
      n || (y(l, s), n = !0);
    },
    o(s) {
      C(l, s), n = !1;
    },
    d(s) {
      s && T(e), l && l.d(s);
    }
  };
}
function Nc(t, e, i) {
  const n = ["mode", "activeUrl", "nonActiveClass", "activeClass", "ariaLabel"];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e;
  const u = Et("");
  let { mode: s = "normal" } = e, { activeUrl: a = "" } = e, { nonActiveClass: f = "uikit-flex uikit-items-center uikit-p-2 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { activeClass: c = "uikit-flex uikit-items-center uikit-p-2 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-bg-gray-200 dark:uikit-bg-gray-700 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { ariaLabel: d = "Sidebar" } = e;
  Ve("sidebarContext", { activeClass: c, nonActiveClass: f }), Ve("activeUrl", u);
  const k = { normal: "uikit-w-64", mini: "uikit-w-12" };
  return t.$$set = (g) => {
    i(4, e = M(M({}, e), B(g))), i(3, r = re(e, n)), "mode" in g && i(0, s = g.mode), "activeUrl" in g && i(5, a = g.activeUrl), "nonActiveClass" in g && i(6, f = g.nonActiveClass), "activeClass" in g && i(7, c = g.activeClass), "ariaLabel" in g && i(1, d = g.ariaLabel), "$$scope" in g && i(8, o = g.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*activeUrl*/
    32 && u.set(a);
  }, e = B(e), [
    s,
    d,
    k,
    r,
    e,
    a,
    f,
    c,
    o,
    l
  ];
}
class zc extends ie {
  constructor(e) {
    super(), te(this, e, Nc, Mc, X, {
      mode: 0,
      activeUrl: 5,
      nonActiveClass: 6,
      activeClass: 7,
      ariaLabel: 1
    });
  }
}
function Rc(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[6].default
  ), l = K(
    r,
    t,
    /*$$scope*/
    t[5],
    null
  );
  let o = [
    /*$$restProps*/
    t[1],
    {
      class: i = O(
        /*ulClass*/
        t[0],
        /*$$props*/
        t[2].class
      )
    }
  ], u = {};
  for (let s = 0; s < o.length; s += 1)
    u = M(u, o[s]);
  return {
    c() {
      e = P("ul"), l && l.c(), ue(e, u);
    },
    m(s, a) {
      A(s, e, a), l && l.m(e, null), n = !0;
    },
    p(s, [a]) {
      l && l.p && (!n || a & /*$$scope*/
      32) && Y(
        l,
        r,
        s,
        /*$$scope*/
        s[5],
        n ? Q(
          r,
          /*$$scope*/
          s[5],
          a,
          null
        ) : J(
          /*$$scope*/
          s[5]
        ),
        null
      ), ue(e, u = ce(o, [
        a & /*$$restProps*/
        2 && /*$$restProps*/
        s[1],
        (!n || a & /*ulClass, $$props*/
        5 && i !== (i = O(
          /*ulClass*/
          s[0],
          /*$$props*/
          s[2].class
        ))) && { class: i }
      ]));
    },
    i(s) {
      n || (y(l, s), n = !0);
    },
    o(s) {
      C(l, s), n = !1;
    },
    d(s) {
      s && T(e), l && l.d(s);
    }
  };
}
function Dc(t, e, i) {
  const n = ["ulClass", "borderClass", "border"];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e, { ulClass: u = "uikit-space-y-2" } = e, { borderClass: s = "uikit-pt-4 uikit-mt-4 uikit-border-t uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { border: a = !1 } = e;
  return a && (u += " " + s), t.$$set = (f) => {
    i(2, e = M(M({}, e), B(f))), i(1, r = re(e, n)), "ulClass" in f && i(0, u = f.ulClass), "borderClass" in f && i(3, s = f.borderClass), "border" in f && i(4, a = f.border), "$$scope" in f && i(5, o = f.$$scope);
  }, e = B(e), [u, r, e, s, a, o, l];
}
class Bc extends ie {
  constructor(e) {
    super(), te(this, e, Dc, Rc, X, { ulClass: 0, borderClass: 3, border: 4 });
  }
}
const Fc = (t) => ({}), gr = (t) => ({}), jc = (t) => ({}), mr = (t) => ({});
function hr(t) {
  let e;
  const i = (
    /*#slots*/
    t[13].subtext
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[12],
    gr
  );
  return {
    c() {
      n && n.c();
    },
    m(r, l) {
      n && n.m(r, l), e = !0;
    },
    p(r, l) {
      n && n.p && (!e || l & /*$$scope*/
      4096) && Y(
        n,
        i,
        r,
        /*$$scope*/
        r[12],
        e ? Q(
          i,
          /*$$scope*/
          r[12],
          l,
          Fc
        ) : J(
          /*$$scope*/
          r[12]
        ),
        gr
      );
    },
    i(r) {
      e || (y(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Wc(t) {
  let e, i, n, r, l, o, u, s, a, f;
  const c = (
    /*#slots*/
    t[13].icon
  ), d = K(
    c,
    t,
    /*$$scope*/
    t[12],
    mr
  );
  let k = (
    /*$$slots*/
    t[7].subtext && /*mode*/
    t[2] === "normal" && hr(t)
  ), g = [
    /*$$restProps*/
    t[6],
    { href: (
      /*href*/
      t[0]
    ) },
    { class: (
      /*aClass*/
      t[4]
    ) }
  ], m = {};
  for (let b = 0; b < g.length; b += 1)
    m = M(m, g[b]);
  return {
    c() {
      e = P("li"), i = P("a"), d && d.c(), n = H(), r = P("span"), l = be(
        /*label*/
        t[1]
      ), u = H(), k && k.c(), h(r, "class", o = /*spanClass*/
      t[5][
        /*mode*/
        t[2]
      ]), ue(i, m);
    },
    m(b, _) {
      A(b, e, _), R(e, i), d && d.m(i, null), R(i, n), R(i, r), R(r, l), R(i, u), k && k.m(i, null), s = !0, a || (f = [
        F(
          i,
          "blur",
          /*blur_handler*/
          t[14]
        ),
        F(
          i,
          "click",
          /*click_handler*/
          t[22]
        ),
        F(
          i,
          "focus",
          /*focus_handler*/
          t[15]
        ),
        F(
          i,
          "keydown",
          /*keydown_handler*/
          t[16]
        ),
        F(
          i,
          "keypress",
          /*keypress_handler*/
          t[17]
        ),
        F(
          i,
          "keyup",
          /*keyup_handler*/
          t[18]
        ),
        F(
          i,
          "mouseenter",
          /*mouseenter_handler*/
          t[19]
        ),
        F(
          i,
          "mouseleave",
          /*mouseleave_handler*/
          t[20]
        ),
        F(
          i,
          "mouseover",
          /*mouseover_handler*/
          t[21]
        )
      ], a = !0);
    },
    p(b, [_]) {
      d && d.p && (!s || _ & /*$$scope*/
      4096) && Y(
        d,
        c,
        b,
        /*$$scope*/
        b[12],
        s ? Q(
          c,
          /*$$scope*/
          b[12],
          _,
          jc
        ) : J(
          /*$$scope*/
          b[12]
        ),
        mr
      ), (!s || _ & /*label*/
      2) && Ce(
        l,
        /*label*/
        b[1]
      ), (!s || _ & /*mode*/
      4 && o !== (o = /*spanClass*/
      b[5][
        /*mode*/
        b[2]
      ])) && h(r, "class", o), /*$$slots*/
      b[7].subtext && /*mode*/
      b[2] === "normal" ? k ? (k.p(b, _), _ & /*$$slots, mode*/
      132 && y(k, 1)) : (k = hr(b), k.c(), y(k, 1), k.m(i, null)) : k && (oe(), C(k, 1, 1, () => {
        k = null;
      }), se()), ue(i, m = ce(g, [
        _ & /*$$restProps*/
        64 && /*$$restProps*/
        b[6],
        (!s || _ & /*href*/
        1) && { href: (
          /*href*/
          b[0]
        ) },
        (!s || _ & /*aClass*/
        16) && { class: (
          /*aClass*/
          b[4]
        ) }
      ]));
    },
    i(b) {
      s || (y(d, b), y(k), s = !0);
    },
    o(b) {
      C(d, b), C(k), s = !1;
    },
    d(b) {
      b && T(e), d && d.d(b), k && k.d(), a = !1, we(f);
    }
  };
}
function Uc(t, e, i) {
  let n, r;
  const l = ["href", "label", "mode", "activeClass", "nonActiveClass", "onclick"];
  let o = re(e, l), { $$slots: u = {}, $$scope: s } = e;
  const a = Ke(u);
  let { href: f = "" } = e, { label: c = "" } = e, { mode: d = "normal" } = e, { activeClass: k = void 0 } = e, { nonActiveClass: g = void 0 } = e, { onclick: m = (N) => {
  } } = e;
  const b = Be("sidebarContext") ?? {}, _ = Be("activeUrl");
  let w = "";
  _.subscribe((N) => {
    i(10, w = N);
  });
  const v = {
    normal: "uikit-flex-1 uikit-ms-3 uikit-whitespace-nowrap",
    mini: ""
  }, p = {
    normal: "uikit-flex uikit-items-center",
    mini: "uikit-flex uikit-flex-col uikit-items-center uikit-justify-center uikit-space-y-2"
  };
  function S(N) {
    U.call(this, t, N);
  }
  function I(N) {
    U.call(this, t, N);
  }
  function E(N) {
    U.call(this, t, N);
  }
  function j(N) {
    U.call(this, t, N);
  }
  function q(N) {
    U.call(this, t, N);
  }
  function ee(N) {
    U.call(this, t, N);
  }
  function z(N) {
    U.call(this, t, N);
  }
  function W(N) {
    U.call(this, t, N);
  }
  const ge = (N) => {
    m && m(N);
  };
  return t.$$set = (N) => {
    i(26, e = M(M({}, e), B(N))), i(6, o = re(e, l)), "href" in N && i(0, f = N.href), "label" in N && i(1, c = N.label), "mode" in N && i(2, d = N.mode), "activeClass" in N && i(8, k = N.activeClass), "nonActiveClass" in N && i(9, g = N.nonActiveClass), "onclick" in N && i(3, m = N.onclick), "$$scope" in N && i(12, s = N.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*sidebarUrl, href*/
    1025 && i(11, n = w ? f === w : !1), i(4, r = O(
      p[d],
      n ? k ?? b.activeClass : g ?? b.nonActiveClass,
      e.class
    ));
  }, e = B(e), [
    f,
    c,
    d,
    m,
    r,
    v,
    o,
    a,
    k,
    g,
    w,
    n,
    s,
    u,
    S,
    I,
    E,
    j,
    q,
    ee,
    z,
    W,
    ge
  ];
}
class Gc extends ie {
  constructor(e) {
    super(), te(this, e, Uc, Wc, X, {
      href: 0,
      label: 1,
      mode: 2,
      activeClass: 8,
      nonActiveClass: 9,
      onclick: 3
    });
  }
}
const Hc = (t) => ({}), br = (t) => ({}), Vc = (t) => ({}), _r = (t) => ({}), qc = (t) => ({}), pr = (t) => ({});
function Xc(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "m1 1 4 4 4-4"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    p: ne,
    i: ne,
    o: ne,
    d(n) {
      n && T(e);
    }
  };
}
function Kc(t) {
  let e;
  const i = (
    /*#slots*/
    t[14].arrowdown
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[13],
    br
  );
  return {
    c() {
      n && n.c();
    },
    m(r, l) {
      n && n.m(r, l), e = !0;
    },
    p(r, l) {
      n && n.p && (!e || l & /*$$scope*/
      8192) && Y(
        n,
        i,
        r,
        /*$$scope*/
        r[13],
        e ? Q(
          i,
          /*$$scope*/
          r[13],
          l,
          Hc
        ) : J(
          /*$$scope*/
          r[13]
        ),
        br
      );
    },
    i(r) {
      e || (y(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Qc(t) {
  let e, i, n, r;
  const l = [Jc, Yc], o = [];
  function u(s, a) {
    return (
      /*$$slots*/
      s[11].arrowup ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(s, a) {
      o[e].m(s, a), A(s, n, a), r = !0;
    },
    p(s, a) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(s, a) : (i = o[e] = l[e](s), i.c()), y(i, 1), i.m(n.parentNode, n));
    },
    i(s) {
      r || (y(i), r = !0);
    },
    o(s) {
      C(i), r = !1;
    },
    d(s) {
      s && T(n), o[e].d(s);
    }
  };
}
function Yc(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5 5 1 1 5"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    p: ne,
    i: ne,
    o: ne,
    d(n) {
      n && T(e);
    }
  };
}
function Jc(t) {
  let e;
  const i = (
    /*#slots*/
    t[14].arrowup
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[13],
    _r
  );
  return {
    c() {
      n && n.c();
    },
    m(r, l) {
      n && n.m(r, l), e = !0;
    },
    p(r, l) {
      n && n.p && (!e || l & /*$$scope*/
      8192) && Y(
        n,
        i,
        r,
        /*$$scope*/
        r[13],
        e ? Q(
          i,
          /*$$scope*/
          r[13],
          l,
          Vc
        ) : J(
          /*$$scope*/
          r[13]
        ),
        _r
      );
    },
    i(r) {
      e || (y(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function yr(t) {
  let e, i, n, r;
  const l = (
    /*#slots*/
    t[14].default
  ), o = K(
    l,
    t,
    /*$$scope*/
    t[13],
    null
  );
  return {
    c() {
      e = P("ul"), o && o.c(), h(e, "class", i = /*ulClass*/
      t[6][
        /*mode*/
        t[2]
      ]);
    },
    m(u, s) {
      A(u, e, s), o && o.m(e, null), r = !0;
    },
    p(u, s) {
      t = u, o && o.p && (!r || s & /*$$scope*/
      8192) && Y(
        o,
        l,
        t,
        /*$$scope*/
        t[13],
        r ? Q(
          l,
          /*$$scope*/
          t[13],
          s,
          null
        ) : J(
          /*$$scope*/
          t[13]
        ),
        null
      ), (!r || s & /*mode*/
      4 && i !== (i = /*ulClass*/
      t[6][
        /*mode*/
        t[2]
      ])) && h(e, "class", i);
    },
    i(u) {
      r || (y(o, u), u && Ie(() => {
        r && (n || (n = Re(
          e,
          /*multiple*/
          t[7],
          /*transitionParams*/
          t[3],
          !0
        )), n.run(1));
      }), r = !0);
    },
    o(u) {
      C(o, u), u && (n || (n = Re(
        e,
        /*multiple*/
        t[7],
        /*transitionParams*/
        t[3],
        !1
      )), n.run(0)), r = !1;
    },
    d(u) {
      u && T(e), o && o.d(u), u && n && n.end();
    }
  };
}
function Zc(t) {
  let e, i, n, r, l, o, u, s, a, f, c, d, k, g;
  const m = (
    /*#slots*/
    t[14].icon
  ), b = K(
    m,
    t,
    /*$$scope*/
    t[13],
    pr
  ), _ = [Qc, Kc, Xc], w = [];
  function v(E, j) {
    return (
      /*isOpen*/
      E[0] && /*mode*/
      E[2] === "normal" ? 0 : (
        /*$$slots*/
        E[11].arrowdown && /*mode*/
        E[2] === "normal" ? 1 : (
          /*mode*/
          E[2] === "normal" ? 2 : -1
        )
      )
    );
  }
  ~(s = v(t)) && (a = w[s] = _[s](t));
  let p = [
    /*$$restProps*/
    t[9],
    {
      class: f = O(
        /*btnClass*/
        t[4][
          /*mode*/
          t[2]
        ],
        /*$$props*/
        t[10].class
      )
    },
    { "aria-controls": "sidebar-dropdown" }
  ], S = {};
  for (let E = 0; E < p.length; E += 1)
    S = M(S, p[E]);
  let I = (
    /*isOpen*/
    t[0] && /*mode*/
    t[2] === "normal" && yr(t)
  );
  return {
    c() {
      e = P("li"), i = P("button"), b && b.c(), n = H(), r = P("span"), l = be(
        /*label*/
        t[1]
      ), u = H(), a && a.c(), c = H(), I && I.c(), h(r, "class", o = /*spanClass*/
      t[5][
        /*mode*/
        t[2]
      ]), ue(i, S);
    },
    m(E, j) {
      A(E, e, j), R(e, i), b && b.m(i, null), R(i, n), R(i, r), R(r, l), R(i, u), ~s && w[s].m(i, null), i.autofocus && i.focus(), R(e, c), I && I.m(e, null), d = !0, k || (g = F(
        i,
        "click",
        /*click_handler*/
        t[15]
      ), k = !0);
    },
    p(E, [j]) {
      b && b.p && (!d || j & /*$$scope*/
      8192) && Y(
        b,
        m,
        E,
        /*$$scope*/
        E[13],
        d ? Q(
          m,
          /*$$scope*/
          E[13],
          j,
          qc
        ) : J(
          /*$$scope*/
          E[13]
        ),
        pr
      ), (!d || j & /*label*/
      2) && Ce(
        l,
        /*label*/
        E[1]
      ), (!d || j & /*mode*/
      4 && o !== (o = /*spanClass*/
      E[5][
        /*mode*/
        E[2]
      ])) && h(r, "class", o);
      let q = s;
      s = v(E), s === q ? ~s && w[s].p(E, j) : (a && (oe(), C(w[q], 1, 1, () => {
        w[q] = null;
      }), se()), ~s ? (a = w[s], a ? a.p(E, j) : (a = w[s] = _[s](E), a.c()), y(a, 1), a.m(i, null)) : a = null), ue(i, S = ce(p, [
        j & /*$$restProps*/
        512 && /*$$restProps*/
        E[9],
        (!d || j & /*mode, $$props*/
        1028 && f !== (f = O(
          /*btnClass*/
          E[4][
            /*mode*/
            E[2]
          ],
          /*$$props*/
          E[10].class
        ))) && { class: f },
        { "aria-controls": "sidebar-dropdown" }
      ])), /*isOpen*/
      E[0] && /*mode*/
      E[2] === "normal" ? I ? (I.p(E, j), j & /*isOpen, mode*/
      5 && y(I, 1)) : (I = yr(E), I.c(), y(I, 1), I.m(e, null)) : I && (oe(), C(I, 1, 1, () => {
        I = null;
      }), se());
    },
    i(E) {
      d || (y(b, E), y(a), y(I), d = !0);
    },
    o(E) {
      C(b, E), C(a), C(I), d = !1;
    },
    d(E) {
      E && T(e), b && b.d(E), ~s && w[s].d(), I && I.d(), k = !1, g();
    }
  };
}
function xc(t, e, i) {
  const n = ["label", "mode", "transitionType", "transitionParams", "isOpen"];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e;
  const u = Ke(l);
  let { label: s = "" } = e, { mode: a = "normal" } = e, { transitionType: f = "slide" } = e, { transitionParams: c = {} } = e;
  const d = {
    normal: "uikit-flex uikit-items-center uikit-p-2 uikit-w-full uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg uikit-transition uikit-duration-75 uikit-group hover:uikit-bg-gray-100 dark:uikit-text-white dark:hover:uikit-bg-gray-700",
    mini: "uikit-flex uikit-flex-col uikit-items-center uikit-mx-auto uikit-justify-center uikit-space-y-2"
  }, k = {
    normal: "uikit-flex-1 uikit-ms-3 uikit-text-left uikit-whitespace-nowrap",
    mini: "uikit-flex-1"
  }, g = {
    normal: "uikit-py-2 uikit-space-y-2",
    mini: "uikit-hidden"
  }, m = (v, p) => {
    switch (f) {
      case "blur":
        return Di(v, p);
      case "fly":
        return vt(v, p);
      case "fade":
        return Zt(v, p);
      default:
        return Bi(v, p);
    }
  };
  let { isOpen: b = !1 } = e;
  const _ = () => {
    i(0, b = !b);
  }, w = () => _();
  return t.$$set = (v) => {
    i(10, e = M(M({}, e), B(v))), i(9, r = re(e, n)), "label" in v && i(1, s = v.label), "mode" in v && i(2, a = v.mode), "transitionType" in v && i(12, f = v.transitionType), "transitionParams" in v && i(3, c = v.transitionParams), "isOpen" in v && i(0, b = v.isOpen), "$$scope" in v && i(13, o = v.$$scope);
  }, e = B(e), [
    b,
    s,
    a,
    c,
    d,
    k,
    g,
    m,
    _,
    r,
    e,
    u,
    f,
    o,
    l,
    w
  ];
}
class $c extends ie {
  constructor(e) {
    super(), te(this, e, xc, Zc, X, {
      label: 1,
      mode: 2,
      transitionType: 12,
      transitionParams: 3,
      isOpen: 0
    });
  }
}
function ed(t) {
  let e, i, n, r, l, o, u = [
    /*$$restProps*/
    t[5],
    { href: (
      /*href*/
      t[1]
    ) },
    {
      class: r = O(
        /*active*/
        t[4] ? (
          /*activeClass*/
          t[3]
        ) : (
          /*aClass*/
          t[0]
        ),
        /*$$props*/
        t[6].class
      )
    }
  ], s = {};
  for (let a = 0; a < u.length; a += 1)
    s = M(s, u[a]);
  return {
    c() {
      e = P("li"), i = P("a"), n = be(
        /*label*/
        t[2]
      ), ue(i, s);
    },
    m(a, f) {
      A(a, e, f), R(e, i), R(i, n), l || (o = [
        F(
          i,
          "blur",
          /*blur_handler*/
          t[7]
        ),
        F(
          i,
          "click",
          /*click_handler*/
          t[8]
        ),
        F(
          i,
          "focus",
          /*focus_handler*/
          t[9]
        ),
        F(
          i,
          "keydown",
          /*keydown_handler*/
          t[10]
        ),
        F(
          i,
          "keypress",
          /*keypress_handler*/
          t[11]
        ),
        F(
          i,
          "keyup",
          /*keyup_handler*/
          t[12]
        ),
        F(
          i,
          "mouseenter",
          /*mouseenter_handler*/
          t[13]
        ),
        F(
          i,
          "mouseleave",
          /*mouseleave_handler*/
          t[14]
        ),
        F(
          i,
          "mouseover",
          /*mouseover_handler*/
          t[15]
        )
      ], l = !0);
    },
    p(a, [f]) {
      f & /*label*/
      4 && Xl(
        n,
        /*label*/
        a[2],
        s.contenteditable
      ), ue(i, s = ce(u, [
        f & /*$$restProps*/
        32 && /*$$restProps*/
        a[5],
        f & /*href*/
        2 && { href: (
          /*href*/
          a[1]
        ) },
        f & /*active, activeClass, aClass, $$props*/
        89 && r !== (r = O(
          /*active*/
          a[4] ? (
            /*activeClass*/
            a[3]
          ) : (
            /*aClass*/
            a[0]
          ),
          /*$$props*/
          a[6].class
        )) && { class: r }
      ]));
    },
    i: ne,
    o: ne,
    d(a) {
      a && T(e), l = !1, we(o);
    }
  };
}
function td(t, e, i) {
  const n = ["aClass", "href", "label", "activeClass", "active"];
  let r = re(e, n), { aClass: l = "uikit-flex uikit-items-center uikit-p-2 uikit-ps-11 uikit-w-full uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg uikit-transition uikit-duration-75 uikit-group hover:uikit-bg-gray-100 dark:uikit-text-white dark:hover:uikit-bg-gray-700" } = e, { href: o = "" } = e, { label: u = "" } = e, { activeClass: s = "uikit-flex uikit-items-center uikit-p-2 uikit-ps-11 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-bg-gray-200 dark:uikit-bg-gray-700 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { active: a = !1 } = e;
  function f(v) {
    U.call(this, t, v);
  }
  function c(v) {
    U.call(this, t, v);
  }
  function d(v) {
    U.call(this, t, v);
  }
  function k(v) {
    U.call(this, t, v);
  }
  function g(v) {
    U.call(this, t, v);
  }
  function m(v) {
    U.call(this, t, v);
  }
  function b(v) {
    U.call(this, t, v);
  }
  function _(v) {
    U.call(this, t, v);
  }
  function w(v) {
    U.call(this, t, v);
  }
  return t.$$set = (v) => {
    i(6, e = M(M({}, e), B(v))), i(5, r = re(e, n)), "aClass" in v && i(0, l = v.aClass), "href" in v && i(1, o = v.href), "label" in v && i(2, u = v.label), "activeClass" in v && i(3, s = v.activeClass), "active" in v && i(4, a = v.active);
  }, e = B(e), [
    l,
    o,
    u,
    s,
    a,
    r,
    e,
    f,
    c,
    d,
    k,
    g,
    m,
    b,
    _,
    w
  ];
}
class id extends ie {
  constructor(e) {
    super(), te(this, e, td, ed, X, {
      aClass: 0,
      href: 1,
      label: 2,
      activeClass: 3,
      active: 4
    });
  }
}
function nd(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[5].default
  ), l = K(
    r,
    t,
    /*$$scope*/
    t[4],
    null
  );
  let o = [
    /*$$restProps*/
    t[2],
    {
      class: i = O(
        /*divClass*/
        t[1][
          /*mode*/
          t[0]
        ],
        /*$$props*/
        t[3].class
      )
    }
  ], u = {};
  for (let s = 0; s < o.length; s += 1)
    u = M(u, o[s]);
  return {
    c() {
      e = P("div"), l && l.c(), ue(e, u);
    },
    m(s, a) {
      A(s, e, a), l && l.m(e, null), n = !0;
    },
    p(s, [a]) {
      l && l.p && (!n || a & /*$$scope*/
      16) && Y(
        l,
        r,
        s,
        /*$$scope*/
        s[4],
        n ? Q(
          r,
          /*$$scope*/
          s[4],
          a,
          null
        ) : J(
          /*$$scope*/
          s[4]
        ),
        null
      ), ue(e, u = ce(o, [
        a & /*$$restProps*/
        4 && /*$$restProps*/
        s[2],
        (!n || a & /*mode, $$props*/
        9 && i !== (i = O(
          /*divClass*/
          s[1][
            /*mode*/
            s[0]
          ],
          /*$$props*/
          s[3].class
        ))) && { class: i }
      ]));
    },
    i(s) {
      n || (y(l, s), n = !0);
    },
    o(s) {
      C(l, s), n = !1;
    },
    d(s) {
      s && T(e), l && l.d(s);
    }
  };
}
function rd(t, e, i) {
  const n = ["mode"];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e, { mode: u = "normal" } = e;
  const s = {
    normal: "uikit-overflow-y-auto uikit-py-4 uikit-px-3 uikit-bg-gray-50 uikit-rounded dark:uikit-bg-gray-800",
    mini: "uikit-overflow-y-auto uikit-py-4 uikit-bg-gray-50 uikit-rounded dark:uikit-bg-gray-800"
  };
  return t.$$set = (a) => {
    i(3, e = M(M({}, e), B(a))), i(2, r = re(e, n)), "mode" in a && i(0, u = a.mode), "$$scope" in a && i(4, o = a.$$scope);
  }, e = B(e), [u, s, r, e, o, l];
}
class ld extends ie {
  constructor(e) {
    super(), te(this, e, rd, nd, X, { mode: 0 });
  }
}
function vr(t, e, i) {
  const n = t.slice();
  return n[4] = e[i].href, n[5] = e[i].label, n[6] = e[i].tips, n[7] = e[i].icon, n[8] = e[i].children, n[9] = e[i].onclick, n;
}
function wr(t, e, i) {
  const n = t.slice();
  return n[5] = e[i].label, n[4] = e[i].href, n;
}
function od(t) {
  let e, i;
  return e = new Gc({
    props: {
      label: (
        /*label*/
        t[5]
      ),
      href: (
        /*href*/
        t[4]
      ),
      onclick: (
        /*onclick*/
        t[9]
      ),
      mode: (
        /*mode*/
        t[0]
      ),
      active: (
        /*activeUrl*/
        t[2] === /*href*/
        t[4]
      ),
      $$slots: {
        subtext: [ad],
        icon: [ud]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r & /*items*/
      2 && (l.label = /*label*/
      n[5]), r & /*items*/
      2 && (l.href = /*href*/
      n[4]), r & /*items*/
      2 && (l.onclick = /*onclick*/
      n[9]), r & /*mode*/
      1 && (l.mode = /*mode*/
      n[0]), r & /*activeUrl, items*/
      6 && (l.active = /*activeUrl*/
      n[2] === /*href*/
      n[4]), r & /*$$scope, items*/
      16386 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function sd(t) {
  let e, i;
  return e = new $c({
    props: {
      mode: (
        /*mode*/
        t[0]
      ),
      label: (
        /*label*/
        t[5]
      ),
      $$slots: {
        icon: [cd],
        default: [fd]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r & /*mode*/
      1 && (l.mode = /*mode*/
      n[0]), r & /*items*/
      2 && (l.label = /*label*/
      n[5]), r & /*$$scope, items*/
      16386 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function ud(t) {
  let e, i, n;
  return e = new ti({
    props: {
      name: (
        /*icon*/
        t[7]
      ),
      className: "uikit-w-5 uikit-h-5 uikit-text-gray-500 uikit-transition uikit-duration-75 dark:uikit-text-gray-400 group-hover:uikit-text-gray-900 dark:group-hover:uikit-text-white"
    }
  }), {
    c() {
      $(e.$$.fragment), i = H();
    },
    m(r, l) {
      Z(e, r, l), A(r, i, l), n = !0;
    },
    p(r, l) {
      const o = {};
      l & /*items*/
      2 && (o.name = /*icon*/
      r[7]), e.$set(o);
    },
    i(r) {
      n || (y(e.$$.fragment, r), n = !0);
    },
    o(r) {
      C(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && T(i), x(e, r);
    }
  };
}
function Cr(t) {
  let e, i = (
    /*tips*/
    t[6] + ""
  ), n;
  return {
    c() {
      e = P("span"), n = be(i), h(e, "class", "uikit-inline-flex uikit-justify-center uikit-items-center uikit-p-3 uikit-ms-3 uikit-w-3 uikit-h-3 uikit-text-sm uikit-font-medium uikit-text-primary-600 uikit-bg-primary-200 uikit-rounded-full dark:uikit-bg-primary-900 dark:uikit-text-primary-200");
    },
    m(r, l) {
      A(r, e, l), R(e, n);
    },
    p(r, l) {
      l & /*items*/
      2 && i !== (i = /*tips*/
      r[6] + "") && Ce(n, i);
    },
    d(r) {
      r && T(e);
    }
  };
}
function ad(t) {
  let e, i = (
    /*tips*/
    t[6] && Cr(t)
  );
  return {
    c() {
      i && i.c(), e = H();
    },
    m(n, r) {
      i && i.m(n, r), A(n, e, r);
    },
    p(n, r) {
      /*tips*/
      n[6] ? i ? i.p(n, r) : (i = Cr(n), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null);
    },
    d(n) {
      n && T(e), i && i.d(n);
    }
  };
}
function Sr(t) {
  let e, i;
  return e = new id({
    props: {
      label: (
        /*label*/
        t[5]
      ),
      href: (
        /*href*/
        t[4]
      )
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r & /*items*/
      2 && (l.label = /*label*/
      n[5]), r & /*items*/
      2 && (l.href = /*href*/
      n[4]), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function fd(t) {
  let e, i, n = ve(
    /*children*/
    t[8] || []
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = Sr(wr(t, n, o));
  const l = (o) => C(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = H();
    },
    m(o, u) {
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(o, u);
      A(o, e, u), i = !0;
    },
    p(o, u) {
      if (u & /*items*/
      2) {
        n = ve(
          /*children*/
          o[8] || []
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const a = wr(o, n, s);
          r[s] ? (r[s].p(a, u), y(r[s], 1)) : (r[s] = Sr(a), r[s].c(), y(r[s], 1), r[s].m(e.parentNode, e));
        }
        for (oe(), s = n.length; s < r.length; s += 1)
          l(s);
        se();
      }
    },
    i(o) {
      if (!i) {
        for (let u = 0; u < n.length; u += 1)
          y(r[u]);
        i = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let u = 0; u < r.length; u += 1)
        C(r[u]);
      i = !1;
    },
    d(o) {
      o && T(e), je(r, o);
    }
  };
}
function cd(t) {
  let e, i, n;
  return e = new ti({
    props: {
      name: (
        /*icon*/
        t[7]
      ),
      className: "uikit-w-5 uikit-h-5 uikit-text-gray-500 uikit-transition uikit-duration-75 dark:uikit-text-gray-400 group-hover:uikit-text-gray-900 dark:group-hover:uikit-text-white"
    }
  }), {
    c() {
      $(e.$$.fragment), i = H();
    },
    m(r, l) {
      Z(e, r, l), A(r, i, l), n = !0;
    },
    p(r, l) {
      const o = {};
      l & /*items*/
      2 && (o.name = /*icon*/
      r[7]), e.$set(o);
    },
    i(r) {
      n || (y(e.$$.fragment, r), n = !0);
    },
    o(r) {
      C(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && T(i), x(e, r);
    }
  };
}
function Tr(t) {
  let e, i, n, r;
  const l = [sd, od], o = [];
  function u(s, a) {
    return (
      /*children*/
      s[8] && /*children*/
      s[8].length > 0 ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(s, a) {
      o[e].m(s, a), A(s, n, a), r = !0;
    },
    p(s, a) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(s, a) : (i = o[e] = l[e](s), i.c()), y(i, 1), i.m(n.parentNode, n));
    },
    i(s) {
      r || (y(i), r = !0);
    },
    o(s) {
      C(i), r = !1;
    },
    d(s) {
      s && T(n), o[e].d(s);
    }
  };
}
function dd(t) {
  let e, i, n = ve(
    /*items*/
    t[1]
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = Tr(vr(t, n, o));
  const l = (o) => C(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = ae();
    },
    m(o, u) {
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(o, u);
      A(o, e, u), i = !0;
    },
    p(o, u) {
      if (u & /*mode, items, activeUrl*/
      7) {
        n = ve(
          /*items*/
          o[1]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const a = vr(o, n, s);
          r[s] ? (r[s].p(a, u), y(r[s], 1)) : (r[s] = Tr(a), r[s].c(), y(r[s], 1), r[s].m(e.parentNode, e));
        }
        for (oe(), s = n.length; s < r.length; s += 1)
          l(s);
        se();
      }
    },
    i(o) {
      if (!i) {
        for (let u = 0; u < n.length; u += 1)
          y(r[u]);
        i = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let u = 0; u < r.length; u += 1)
        C(r[u]);
      i = !1;
    },
    d(o) {
      o && T(e), je(r, o);
    }
  };
}
function kd(t) {
  let e, i;
  return e = new Bc({
    props: {
      $$slots: { default: [dd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r & /*$$scope, items, mode, activeUrl*/
      16391 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function gd(t) {
  let e, i;
  return e = new ld({
    props: {
      mode: (
        /*mode*/
        t[0]
      ),
      $$slots: { default: [kd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r & /*mode*/
      1 && (l.mode = /*mode*/
      n[0]), r & /*$$scope, items, mode, activeUrl*/
      16391 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function md(t) {
  let e, i;
  return e = new zc({
    props: {
      mode: (
        /*mode*/
        t[0]
      ),
      activeUrl: (
        /*activeUrl*/
        t[2]
      ),
      $$slots: { default: [gd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, [r]) {
      const l = {};
      r & /*mode*/
      1 && (l.mode = /*mode*/
      n[0]), r & /*activeUrl*/
      4 && (l.activeUrl = /*activeUrl*/
      n[2]), r & /*$$scope, mode, items, activeUrl*/
      16391 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function hd(t, e, i) {
  let { mode: n = "normal" } = e, r;
  Qe(() => {
    i(2, r = window.location.pathname);
  });
  let { items: l = [] } = e;
  function o() {
    i(0, n = n === "normal" ? "mini" : "normal");
  }
  return t.$$set = (u) => {
    "mode" in u && i(0, n = u.mode), "items" in u && i(1, l = u.items);
  }, window && window.location && i(2, r = window.location.pathname), [n, l, r, o];
}
let bd = class extends ie {
  constructor(e) {
    super(), te(this, e, hd, md, X, { mode: 0, items: 1, toggle: 3 });
  }
  get toggle() {
    return this.$$.ctx[3];
  }
};
const dk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new bd({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let r in i) {
      let l = i[r];
      n.$on(r, (o) => {
        l(o.detail);
      });
    }
  return n;
};
function _d(t) {
  let e, i, n, r, l = [
    /*$$restProps*/
    t[5],
    { role: "status" },
    {
      class: r = O(
        "uikit-inline -uikit-mt-px uikit-animate-spin dark:uikit-text-gray-600",
        /*iconsize*/
        t[3],
        /*bg*/
        t[0],
        /*fillColorClass*/
        t[4],
        /*$$props*/
        t[6].class
      )
    },
    { viewBox: "0 0 100 101" },
    { fill: "none" },
    { xmlns: "http://www.w3.org/2000/svg" }
  ], o = {};
  for (let u = 0; u < l.length; u += 1)
    o = M(o, l[u]);
  return {
    c() {
      e = he("svg"), i = he("path"), n = he("path"), h(i, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), h(
        i,
        "fill",
        /*currentColor*/
        t[2]
      ), h(n, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), h(
        n,
        "fill",
        /*currentFill*/
        t[1]
      ), Bt(e, o);
    },
    m(u, s) {
      A(u, e, s), R(e, i), R(e, n);
    },
    p(u, [s]) {
      s & /*currentColor*/
      4 && h(
        i,
        "fill",
        /*currentColor*/
        u[2]
      ), s & /*currentFill*/
      2 && h(
        n,
        "fill",
        /*currentFill*/
        u[1]
      ), Bt(e, o = ce(l, [
        s & /*$$restProps*/
        32 && /*$$restProps*/
        u[5],
        { role: "status" },
        s & /*bg, $$props*/
        65 && r !== (r = O(
          "uikit-inline -uikit-mt-px uikit-animate-spin dark:uikit-text-gray-600",
          /*iconsize*/
          u[3],
          /*bg*/
          u[0],
          /*fillColorClass*/
          u[4],
          /*$$props*/
          u[6].class
        )) && { class: r },
        { viewBox: "0 0 100 101" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" }
      ]));
    },
    i: ne,
    o: ne,
    d(u) {
      u && T(e);
    }
  };
}
function pd(t, e, i) {
  const n = ["color", "bg", "customColor", "size", "currentFill", "currentColor"];
  let r = re(e, n), { color: l = "primary" } = e, { bg: o = "uikit-text-gray-300" } = e, { customColor: u = "" } = e, { size: s = "8" } = e, { currentFill: a = "currentFill" } = e, { currentColor: f = "currentColor" } = e, c = `uikit-w-${s} uikit-h-${s}`;
  a !== "currentFill" && (l = void 0);
  const d = {
    primary: "uikit-fill-primary-600",
    blue: "uikit-fill-blue-600",
    gray: "uikit-fill-gray-600 dark:uikit-fill-gray-300",
    green: "uikit-fill-green-500",
    red: "uikit-fill-red-600",
    yellow: "uikit-fill-yellow-400",
    pink: "uikit-fill-pink-600",
    purple: "uikit-fill-purple-600",
    white: "uikit-fill-white",
    custom: u
  };
  let k = l === void 0 ? "" : d[l] ?? d.blue;
  return t.$$set = (g) => {
    i(6, e = M(M({}, e), B(g))), i(5, r = re(e, n)), "color" in g && i(7, l = g.color), "bg" in g && i(0, o = g.bg), "customColor" in g && i(8, u = g.customColor), "size" in g && i(9, s = g.size), "currentFill" in g && i(1, a = g.currentFill), "currentColor" in g && i(2, f = g.currentColor);
  }, e = B(e), [
    o,
    a,
    f,
    c,
    k,
    r,
    e,
    l,
    u,
    s
  ];
}
class Pl extends ie {
  constructor(e) {
    super(), te(this, e, pd, _d, X, {
      color: 7,
      bg: 0,
      customColor: 8,
      size: 9,
      currentFill: 1,
      currentColor: 2
    });
  }
}
function yd(t) {
  let e, i;
  return e = new Pl({
    props: {
      size: (
        /*size*/
        t[0]
      ),
      color: (
        /*color*/
        t[1]
      )
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r & /*size*/
      1 && (l.size = /*size*/
      n[0]), r & /*color*/
      2 && (l.color = /*color*/
      n[1]), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function vd(t) {
  let e, i, n;
  return i = new Xt({
    props: {
      outline: (
        /*buttonoutline*/
        t[3]
      ),
      color: "dark",
      $$slots: { default: [wd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = P("div"), $(i.$$.fragment), h(e, "class", "uikit-flex uikit-flex-wrap uikit-items-center uikit-gap-2");
    },
    m(r, l) {
      A(r, e, l), Z(i, e, null), n = !0;
    },
    p(r, l) {
      const o = {};
      l & /*buttonoutline*/
      8 && (o.outline = /*buttonoutline*/
      r[3]), l & /*$$scope, size*/
      17 && (o.$$scope = { dirty: l, ctx: r }), i.$set(o);
    },
    i(r) {
      n || (y(i.$$.fragment, r), n = !0);
    },
    o(r) {
      C(i.$$.fragment, r), n = !1;
    },
    d(r) {
      r && T(e), x(i);
    }
  };
}
function wd(t) {
  let e, i, n;
  return e = new Pl({
    props: {
      class: "uikit-me-3",
      size: (
        /*size*/
        t[0]
      )
    }
  }), {
    c() {
      $(e.$$.fragment), i = be(`
            Loading ...`);
    },
    m(r, l) {
      Z(e, r, l), A(r, i, l), n = !0;
    },
    p(r, l) {
      const o = {};
      l & /*size*/
      1 && (o.size = /*size*/
      r[0]), e.$set(o);
    },
    i(r) {
      n || (y(e.$$.fragment, r), n = !0);
    },
    o(r) {
      C(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && T(i), x(e, r);
    }
  };
}
function Cd(t) {
  let e, i, n, r;
  const l = [vd, yd], o = [];
  function u(s, a) {
    return (
      /*button*/
      s[2] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(s, a) {
      o[e].m(s, a), A(s, n, a), r = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(s, a) : (i = o[e] = l[e](s), i.c()), y(i, 1), i.m(n.parentNode, n));
    },
    i(s) {
      r || (y(i), r = !0);
    },
    o(s) {
      C(i), r = !1;
    },
    d(s) {
      s && T(n), o[e].d(s);
    }
  };
}
function Sd(t, e, i) {
  let { size: n = "4" } = e, { color: r = "green" } = e, { button: l = !1 } = e, { buttonoutline: o = !1 } = e;
  return t.$$set = (u) => {
    "size" in u && i(0, n = u.size), "color" in u && i(1, r = u.color), "button" in u && i(2, l = u.button), "buttonoutline" in u && i(3, o = u.buttonoutline);
  }, [n, r, l, o];
}
class Td extends ie {
  constructor(e) {
    super(), te(this, e, Sd, Cd, X, {
      size: 0,
      color: 1,
      button: 2,
      buttonoutline: 3
    });
  }
}
const kk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Td({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let r in i) {
      let l = i[r];
      n.$on(r, (o) => {
        l(o.detail);
      });
    }
  return n;
}, Ed = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;
function Ad(t) {
  function e(i) {
    if (!(i.key === "Tab" || i.keyCode === 9))
      return;
    const r = Array.from(t.querySelectorAll(Ed));
    let l = r.indexOf(document.activeElement ?? t);
    l === -1 && i.shiftKey && (l = 0), l += r.length + (i.shiftKey ? -1 : 1), l %= r.length, r[l].focus(), i.preventDefault();
  }
  return document.addEventListener("keydown", e, !0), {
    destroy() {
      document.removeEventListener("keydown", e, !0);
    }
  };
}
const Id = (t) => ({}), Er = (t) => ({}), Od = (t) => ({}), Ar = (t) => ({});
function Ir(t) {
  let e, i, n, r, l, o, u, s, a, f;
  const c = [
    { rounded: !0 },
    { shadow: !0 },
    /*$$restProps*/
    t[15],
    { class: (
      /*frameClass*/
      t[5]
    ) }
  ];
  let d = {
    $$slots: { default: [Nd] },
    $$scope: { ctx: t }
  };
  for (let k = 0; k < c.length; k += 1)
    d = M(d, c[k]);
  return l = new nt({ props: d }), {
    c() {
      e = P("div"), i = H(), n = P("div"), r = P("div"), $(l.$$.fragment), h(
        e,
        "class",
        /*backdropCls*/
        t[12]
      ), h(r, "class", o = "uikit-flex uikit-relative " + /*sizes*/
      t[8][
        /*size*/
        t[2]
      ] + " uikit-w-full uikit-max-h-full"), h(n, "class", u = O(
        /*dialogClass*/
        t[4],
        /*$$props*/
        t[14].classDialog,
        .../*getPlacementClasses*/
        t[7]()
      )), h(n, "tabindex", "-1"), h(n, "aria-modal", "true"), h(n, "role", "dialog");
    },
    m(k, g) {
      A(k, e, g), A(k, i, g), A(k, n, g), R(n, r), Z(l, r, null), s = !0, a || (f = [
        F(
          n,
          "keydown",
          /*handleKeys*/
          t[13]
        ),
        F(n, "wheel", jl(
          /*wheel_handler*/
          t[23]
        ), { passive: !1 }),
        xe(
          /*prepareFocus*/
          t[6].call(null, n)
        ),
        xe(Ad.call(null, n)),
        F(
          n,
          "click",
          /*onAutoClose*/
          t[9]
        ),
        F(
          n,
          "mousedown",
          /*onOutsideClose*/
          t[10]
        )
      ], a = !0);
    },
    p(k, g) {
      const m = g & /*$$restProps, frameClass*/
      32800 ? ce(c, [
        c[0],
        c[1],
        g & /*$$restProps*/
        32768 && Le(
          /*$$restProps*/
          k[15]
        ),
        g & /*frameClass*/
        32 && { class: (
          /*frameClass*/
          k[5]
        ) }
      ]) : {};
      g & /*$$scope, $$restProps, $$slots, $$props, dismissable, title*/
      33669130 && (m.$$scope = { dirty: g, ctx: k }), l.$set(m), (!s || g & /*size*/
      4 && o !== (o = "uikit-flex uikit-relative " + /*sizes*/
      k[8][
        /*size*/
        k[2]
      ] + " uikit-w-full uikit-max-h-full")) && h(r, "class", o), (!s || g & /*dialogClass, $$props*/
      16400 && u !== (u = O(
        /*dialogClass*/
        k[4],
        /*$$props*/
        k[14].classDialog,
        .../*getPlacementClasses*/
        k[7]()
      ))) && h(n, "class", u);
    },
    i(k) {
      s || (y(l.$$.fragment, k), s = !0);
    },
    o(k) {
      C(l.$$.fragment, k), s = !1;
    },
    d(k) {
      k && (T(e), T(i), T(n)), x(l), a = !1, we(f);
    }
  };
}
function Or(t) {
  let e, i;
  return e = new nt({
    props: {
      color: (
        /*$$restProps*/
        t[15].color
      ),
      class: "uikit-flex uikit-justify-between uikit-items-center uikit-p-4 uikit-rounded-t-lg",
      $$slots: { default: [Pd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r & /*$$restProps*/
      32768 && (l.color = /*$$restProps*/
      n[15].color), r & /*$$scope, $$restProps, dismissable, title*/
      33587210 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Ld(t) {
  let e, i, n;
  return {
    c() {
      e = P("h3"), i = be(
        /*title*/
        t[1]
      ), h(e, "class", n = "uikit-text-xl uikit-font-semibold " + /*$$restProps*/
      (t[15].color ? "" : "uikit-text-gray-900 dark:uikit-text-white") + " uikit-p-0");
    },
    m(r, l) {
      A(r, e, l), R(e, i);
    },
    p(r, l) {
      l & /*title*/
      2 && Ce(
        i,
        /*title*/
        r[1]
      ), l & /*$$restProps*/
      32768 && n !== (n = "uikit-text-xl uikit-font-semibold " + /*$$restProps*/
      (r[15].color ? "" : "uikit-text-gray-900 dark:uikit-text-white") + " uikit-p-0") && h(e, "class", n);
    },
    d(r) {
      r && T(e);
    }
  };
}
function Lr(t) {
  let e, i;
  return e = new Fi({
    props: {
      name: "Close modal",
      color: (
        /*$$restProps*/
        t[15].color
      )
    }
  }), e.$on(
    "click",
    /*hide*/
    t[11]
  ), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r & /*$$restProps*/
      32768 && (l.color = /*$$restProps*/
      n[15].color), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Pd(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[22].header
  ), l = K(
    r,
    t,
    /*$$scope*/
    t[25],
    Ar
  ), o = l || Ld(t);
  let u = (
    /*dismissable*/
    t[3] && Lr(t)
  );
  return {
    c() {
      o && o.c(), e = H(), u && u.c(), i = ae();
    },
    m(s, a) {
      o && o.m(s, a), A(s, e, a), u && u.m(s, a), A(s, i, a), n = !0;
    },
    p(s, a) {
      l ? l.p && (!n || a & /*$$scope*/
      33554432) && Y(
        l,
        r,
        s,
        /*$$scope*/
        s[25],
        n ? Q(
          r,
          /*$$scope*/
          s[25],
          a,
          Od
        ) : J(
          /*$$scope*/
          s[25]
        ),
        Ar
      ) : o && o.p && (!n || a & /*$$restProps, title*/
      32770) && o.p(s, n ? a : -1), /*dismissable*/
      s[3] ? u ? (u.p(s, a), a & /*dismissable*/
      8 && y(u, 1)) : (u = Lr(s), u.c(), y(u, 1), u.m(i.parentNode, i)) : u && (oe(), C(u, 1, 1, () => {
        u = null;
      }), se());
    },
    i(s) {
      n || (y(o, s), y(u), n = !0);
    },
    o(s) {
      C(o, s), C(u), n = !1;
    },
    d(s) {
      s && (T(e), T(i)), o && o.d(s), u && u.d(s);
    }
  };
}
function Pr(t) {
  let e, i;
  return e = new Fi({
    props: {
      name: "Close modal",
      class: "uikit-absolute uikit-top-3 uikit-end-2.5",
      color: (
        /*$$restProps*/
        t[15].color
      )
    }
  }), e.$on(
    "click",
    /*hide*/
    t[11]
  ), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r & /*$$restProps*/
      32768 && (l.color = /*$$restProps*/
      n[15].color), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Mr(t) {
  let e, i;
  return e = new nt({
    props: {
      color: (
        /*$$restProps*/
        t[15].color
      ),
      class: "uikit-flex uikit-items-center uikit-p-6 uikit-space-x-2 rtl:uikit-space-x-reverse uikit-rounded-b-lg",
      $$slots: { default: [Md] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, r) {
      const l = {};
      r & /*$$restProps*/
      32768 && (l.color = /*$$restProps*/
      n[15].color), r & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Md(t) {
  let e;
  const i = (
    /*#slots*/
    t[22].footer
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[25],
    Er
  );
  return {
    c() {
      n && n.c();
    },
    m(r, l) {
      n && n.m(r, l), e = !0;
    },
    p(r, l) {
      n && n.p && (!e || l & /*$$scope*/
      33554432) && Y(
        n,
        i,
        r,
        /*$$scope*/
        r[25],
        e ? Q(
          i,
          /*$$scope*/
          r[25],
          l,
          Id
        ) : J(
          /*$$scope*/
          r[25]
        ),
        Er
      );
    },
    i(r) {
      e || (y(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Nd(t) {
  let e, i, n, r, l, o, u, s, a, f = (
    /*$$slots*/
    (t[16].header || /*title*/
    t[1]) && Or(t)
  ), c = (
    /*dismissable*/
    t[3] && !/*$$slots*/
    t[16].header && !/*title*/
    t[1] && Pr(t)
  );
  const d = (
    /*#slots*/
    t[22].default
  ), k = K(
    d,
    t,
    /*$$scope*/
    t[25],
    null
  );
  let g = (
    /*$$slots*/
    t[16].footer && Mr(t)
  );
  return {
    c() {
      f && f.c(), e = H(), i = P("div"), c && c.c(), n = H(), k && k.c(), l = H(), g && g.c(), o = ae(), h(i, "class", r = O(
        "uikit-p-6 uikit-space-y-6 uikit-flex-1 uikit-overflow-y-auto uikit-overscroll-contain",
        /*$$props*/
        t[14].bodyClass
      )), h(i, "role", "document");
    },
    m(m, b) {
      f && f.m(m, b), A(m, e, b), A(m, i, b), c && c.m(i, null), R(i, n), k && k.m(i, null), A(m, l, b), g && g.m(m, b), A(m, o, b), u = !0, s || (a = [
        F(i, "keydown", xi(
          /*handleKeys*/
          t[13]
        )),
        F(i, "wheel", xi(
          /*wheel_handler_1*/
          t[24]
        ), { passive: !0 })
      ], s = !0);
    },
    p(m, b) {
      /*$$slots*/
      m[16].header || /*title*/
      m[1] ? f ? (f.p(m, b), b & /*$$slots, title*/
      65538 && y(f, 1)) : (f = Or(m), f.c(), y(f, 1), f.m(e.parentNode, e)) : f && (oe(), C(f, 1, 1, () => {
        f = null;
      }), se()), /*dismissable*/
      m[3] && !/*$$slots*/
      m[16].header && !/*title*/
      m[1] ? c ? (c.p(m, b), b & /*dismissable, $$slots, title*/
      65546 && y(c, 1)) : (c = Pr(m), c.c(), y(c, 1), c.m(i, n)) : c && (oe(), C(c, 1, 1, () => {
        c = null;
      }), se()), k && k.p && (!u || b & /*$$scope*/
      33554432) && Y(
        k,
        d,
        m,
        /*$$scope*/
        m[25],
        u ? Q(
          d,
          /*$$scope*/
          m[25],
          b,
          null
        ) : J(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!u || b & /*$$props*/
      16384 && r !== (r = O(
        "uikit-p-6 uikit-space-y-6 uikit-flex-1 uikit-overflow-y-auto uikit-overscroll-contain",
        /*$$props*/
        m[14].bodyClass
      ))) && h(i, "class", r), /*$$slots*/
      m[16].footer ? g ? (g.p(m, b), b & /*$$slots*/
      65536 && y(g, 1)) : (g = Mr(m), g.c(), y(g, 1), g.m(o.parentNode, o)) : g && (oe(), C(g, 1, 1, () => {
        g = null;
      }), se());
    },
    i(m) {
      u || (y(f), y(c), y(k, m), y(g), u = !0);
    },
    o(m) {
      C(f), C(c), C(k, m), C(g), u = !1;
    },
    d(m) {
      m && (T(e), T(i), T(l), T(o)), f && f.d(m), c && c.d(), k && k.d(m), g && g.d(m), s = !1, we(a);
    }
  };
}
function zd(t) {
  let e, i, n = (
    /*open*/
    t[0] && Ir(t)
  );
  return {
    c() {
      n && n.c(), e = ae();
    },
    m(r, l) {
      n && n.m(r, l), A(r, e, l), i = !0;
    },
    p(r, [l]) {
      /*open*/
      r[0] ? n ? (n.p(r, l), l & /*open*/
      1 && y(n, 1)) : (n = Ir(r), n.c(), y(n, 1), n.m(e.parentNode, e)) : n && (oe(), C(n, 1, 1, () => {
        n = null;
      }), se());
    },
    i(r) {
      i || (y(n), i = !0);
    },
    o(r) {
      C(n), i = !1;
    },
    d(r) {
      r && T(e), n && n.d(r);
    }
  };
}
function Rd(t, e, i) {
  const n = [
    "open",
    "title",
    "size",
    "placement",
    "autoclose",
    "dismissable",
    "backdropClass",
    "defaultClass",
    "outsideclose",
    "dialogClass"
  ];
  let r = re(e, n), { $$slots: l = {}, $$scope: o } = e;
  const u = Ke(l);
  let { open: s = !1 } = e, { title: a = "" } = e, { size: f = "md" } = e, { placement: c = "center" } = e, { autoclose: d = !1 } = e, { dismissable: k = !0 } = e, { backdropClass: g = "uikit-fixed uikit-inset-0 uikit-z-40 uikit-bg-gray-900 uikit-bg-opacity-50 dark:uikit-bg-opacity-80" } = e, { defaultClass: m = "uikit-relative uikit-flex uikit-flex-col uikit-mx-auto" } = e, { outsideclose: b = !1 } = e, { dialogClass: _ = "uikit-fixed uikit-top-0 uikit-start-0 uikit-end-0 uikit-h-modal md:uikit-inset-0 md:uikit-h-full uikit-z-50 uikit-w-full uikit-p-4 uikit-flex" } = e;
  const w = We();
  function v(D) {
    const L = document.createTreeWalker(D, NodeFilter.SHOW_ELEMENT);
    let le;
    for (; le = L.nextNode(); )
      if (le instanceof HTMLElement) {
        const de = le, [pe, Pe] = ee(de);
        (pe || Pe) && (de.tabIndex = 0);
      }
    D.focus();
  }
  const p = () => {
    switch (c) {
      case "top-left":
        return ["uikit-justify-start", "uikit-items-start"];
      case "top-center":
        return ["uikit-justify-center", "uikit-items-start"];
      case "top-right":
        return ["uikit-justify-end", "uikit-items-start"];
      case "center-left":
        return ["uikit-justify-start", "uikit-items-center"];
      case "center":
        return ["uikit-justify-center", "uikit-items-center"];
      case "center-right":
        return ["uikit-justify-end", "uikit-items-center"];
      case "bottom-left":
        return ["uikit-justify-start", "uikit-items-end"];
      case "bottom-center":
        return ["uikit-justify-center", "uikit-items-end"];
      case "bottom-right":
        return ["uikit-justify-end", "uikit-items-end"];
      default:
        return ["uikit-justify-center", "uikit-items-center"];
    }
  }, S = {
    xs: "uikit-max-w-md",
    sm: "uikit-max-w-lg",
    md: "uikit-max-w-2xl",
    lg: "uikit-max-w-4xl",
    xl: "uikit-max-w-7xl"
  }, I = (D) => {
    const L = D.target;
    d && (L == null ? void 0 : L.tagName) === "BUTTON" && j(D);
  }, E = (D) => {
    const L = D.target;
    b && L === D.currentTarget && j(D);
  }, j = (D) => {
    D.preventDefault(), i(0, s = !1);
  };
  let q;
  const ee = (D) => [
    D.scrollWidth > D.clientWidth && ["scroll", "auto"].indexOf(getComputedStyle(D).overflowX) >= 0,
    D.scrollHeight > D.clientHeight && ["scroll", "auto"].indexOf(getComputedStyle(D).overflowY) >= 0
  ];
  let z = O(g, e.classBackdrop);
  function W(D) {
    if (D.key === "Escape" && k)
      return j(D);
  }
  function ge(D) {
    U.call(this, t, D);
  }
  function N(D) {
    U.call(this, t, D);
  }
  return t.$$set = (D) => {
    i(14, e = M(M({}, e), B(D))), i(15, r = re(e, n)), "open" in D && i(0, s = D.open), "title" in D && i(1, a = D.title), "size" in D && i(2, f = D.size), "placement" in D && i(17, c = D.placement), "autoclose" in D && i(18, d = D.autoclose), "dismissable" in D && i(3, k = D.dismissable), "backdropClass" in D && i(19, g = D.backdropClass), "defaultClass" in D && i(20, m = D.defaultClass), "outsideclose" in D && i(21, b = D.outsideclose), "dialogClass" in D && i(4, _ = D.dialogClass), "$$scope" in D && i(25, o = D.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && w(s ? "open" : "close"), i(5, q = O(m, "uikit-w-full uikit-divide-y", e.class));
  }, e = B(e), [
    s,
    a,
    f,
    k,
    _,
    q,
    v,
    p,
    S,
    I,
    E,
    j,
    z,
    W,
    e,
    r,
    u,
    c,
    d,
    g,
    m,
    b,
    l,
    ge,
    N,
    o
  ];
}
class Dd extends ie {
  constructor(e) {
    super(), te(this, e, Rd, zd, X, {
      open: 0,
      title: 1,
      size: 2,
      placement: 17,
      autoclose: 18,
      dismissable: 3,
      backdropClass: 19,
      defaultClass: 20,
      outsideclose: 21,
      dialogClass: 4
    });
  }
}
function Nr(t, e, i) {
  const n = t.slice();
  return n[9] = e[i], n;
}
function zr(t) {
  let e, i = (
    /*item*/
    t[9] + ""
  ), n, r;
  return {
    c() {
      e = P("p"), n = be(i), r = H(), h(e, "class", "uikit-text-base uikit-leading-relaxed uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(l, o) {
      A(l, e, o), R(e, n), R(e, r);
    },
    p(l, o) {
      o & /*descriptions*/
      4 && i !== (i = /*item*/
      l[9] + "") && Ce(n, i);
    },
    d(l) {
      l && T(e);
    }
  };
}
function Bd(t) {
  let e, i = ve(
    /*descriptions*/
    t[2]
  ), n = [];
  for (let r = 0; r < i.length; r += 1)
    n[r] = zr(Nr(t, i, r));
  return {
    c() {
      for (let r = 0; r < n.length; r += 1)
        n[r].c();
      e = ae();
    },
    m(r, l) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(r, l);
      A(r, e, l);
    },
    p(r, l) {
      if (l & /*descriptions*/
      4) {
        i = ve(
          /*descriptions*/
          r[2]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Nr(r, i, o);
          n[o] ? n[o].p(u, l) : (n[o] = zr(u), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = i.length;
      }
    },
    d(r) {
      r && T(e), je(n, r);
    }
  };
}
function Rr(t) {
  let e, i, n, r;
  return e = new Xt({
    props: {
      $$slots: { default: [Fd] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), n = new Xt({
    props: {
      color: "alternative",
      $$slots: { default: [jd] },
      $$scope: { ctx: t }
    }
  }), n.$on(
    "click",
    /*click_handler_1*/
    t[7]
  ), {
    c() {
      $(e.$$.fragment), i = H(), $(n.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), A(l, i, o), Z(n, l, o), r = !0;
    },
    p(l, o) {
      const u = {};
      o & /*$$scope*/
      4096 && (u.$$scope = { dirty: o, ctx: l }), e.$set(u);
      const s = {};
      o & /*$$scope*/
      4096 && (s.$$scope = { dirty: o, ctx: l }), n.$set(s);
    },
    i(l) {
      r || (y(e.$$.fragment, l), y(n.$$.fragment, l), r = !0);
    },
    o(l) {
      C(e.$$.fragment, l), C(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && T(i), x(e, l), x(n, l);
    }
  };
}
function Fd(t) {
  let e;
  return {
    c() {
      e = be("I accept");
    },
    m(i, n) {
      A(i, e, n);
    },
    d(i) {
      i && T(e);
    }
  };
}
function jd(t) {
  let e;
  return {
    c() {
      e = be("Decline");
    },
    m(i, n) {
      A(i, e, n);
    },
    d(i) {
      i && T(e);
    }
  };
}
function Wd(t) {
  let e, i, n = (
    /*footer*/
    t[1] && Rr(t)
  );
  return {
    c() {
      n && n.c(), e = ae();
    },
    m(r, l) {
      n && n.m(r, l), A(r, e, l), i = !0;
    },
    p(r, l) {
      /*footer*/
      r[1] ? n ? (n.p(r, l), l & /*footer*/
      2 && y(n, 1)) : (n = Rr(r), n.c(), y(n, 1), n.m(e.parentNode, e)) : n && (oe(), C(n, 1, 1, () => {
        n = null;
      }), se());
    },
    i(r) {
      i || (y(n), i = !0);
    },
    o(r) {
      C(n), i = !1;
    },
    d(r) {
      r && T(e), n && n.d(r);
    }
  };
}
function Ud(t) {
  let e, i, n;
  function r(o) {
    t[8](o);
  }
  let l = {
    title: (
      /*title*/
      t[0]
    ),
    autoclose: !0,
    outsideclose: !0,
    $$slots: {
      footer: [Wd],
      default: [Bd]
    },
    $$scope: { ctx: t }
  };
  return (
    /*clickOutsideModal*/
    t[3] !== void 0 && (l.open = /*clickOutsideModal*/
    t[3]), e = new Dd({ props: l }), Se.push(() => Jt(e, "open", r)), {
      c() {
        $(e.$$.fragment);
      },
      m(o, u) {
        Z(e, o, u), n = !0;
      },
      p(o, [u]) {
        const s = {};
        u & /*title*/
        1 && (s.title = /*title*/
        o[0]), u & /*$$scope, footer, descriptions*/
        4102 && (s.$$scope = { dirty: u, ctx: o }), !i && u & /*clickOutsideModal*/
        8 && (i = !0, s.open = /*clickOutsideModal*/
        o[3], Yt(() => i = !1)), e.$set(s);
      },
      i(o) {
        n || (y(e.$$.fragment, o), n = !0);
      },
      o(o) {
        C(e.$$.fragment, o), n = !1;
      },
      d(o) {
        x(e, o);
      }
    }
  );
}
function Gd(t, e, i) {
  let n = !1, { title: r = "" } = e, { footer: l = !1 } = e, { descriptions: o = [] } = e;
  function u() {
    i(3, n = !n);
  }
  let s = We();
  const a = (d) => s("success", d), f = (d) => s("fail", d);
  function c(d) {
    n = d, i(3, n);
  }
  return t.$$set = (d) => {
    "title" in d && i(0, r = d.title), "footer" in d && i(1, l = d.footer), "descriptions" in d && i(2, o = d.descriptions);
  }, [
    r,
    l,
    o,
    n,
    s,
    u,
    a,
    f,
    c
  ];
}
class Hd extends ie {
  constructor(e) {
    super(), te(this, e, Gd, Ud, X, {
      title: 0,
      footer: 1,
      descriptions: 2,
      toggle: 5
    });
  }
  get toggle() {
    return this.$$.ctx[5];
  }
}
const gk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Hd({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let r in i) {
      let l = i[r];
      n.$on(r, (o) => {
        l(o.detail);
      });
    }
  return n;
};
function Dr(t, e, i) {
  const n = t.slice();
  return n[7] = e[i], n;
}
const Vd = (t) => ({ item: t & /*items*/
1 }), Br = (t) => ({ item: (
  /*items*/
  t[0][0]
) }), qd = (t) => ({ item: t & /*items*/
1 }), Fr = (t) => ({ item: (
  /*item*/
  t[7]
) });
function jr(t) {
  let e;
  const i = (
    /*#slots*/
    t[6].default
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[5],
    Br
  );
  return {
    c() {
      n && n.c();
    },
    m(r, l) {
      n && n.m(r, l), e = !0;
    },
    p(r, l) {
      n && n.p && (!e || l & /*$$scope, items*/
      33) && Y(
        n,
        i,
        r,
        /*$$scope*/
        r[5],
        e ? Q(
          i,
          /*$$scope*/
          r[5],
          l,
          Vd
        ) : J(
          /*$$scope*/
          r[5]
        ),
        Br
      );
    },
    i(r) {
      e || (y(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Xd(t) {
  let e, i, n, r, l, o;
  return {
    c() {
      e = P("div"), i = P("img"), o = H(), pt(i.src, n = /*item*/
      t[7].src) || h(i, "src", n), h(i, "alt", r = /*item*/
      t[7].alt), h(i, "class", l = O(
        /*imgClass*/
        t[1],
        /*$$props*/
        t[3].classImg
      ));
    },
    m(u, s) {
      A(u, e, s), R(e, i), A(u, o, s);
    },
    p(u, s) {
      s & /*items*/
      1 && !pt(i.src, n = /*item*/
      u[7].src) && h(i, "src", n), s & /*items*/
      1 && r !== (r = /*item*/
      u[7].alt) && h(i, "alt", r), s & /*imgClass, $$props*/
      10 && l !== (l = O(
        /*imgClass*/
        u[1],
        /*$$props*/
        u[3].classImg
      )) && h(i, "class", l);
    },
    d(u) {
      u && (T(e), T(o));
    }
  };
}
function Wr(t) {
  let e;
  const i = (
    /*#slots*/
    t[6].default
  ), n = K(
    i,
    t,
    /*$$scope*/
    t[5],
    Fr
  ), r = n || Xd(t);
  return {
    c() {
      r && r.c();
    },
    m(l, o) {
      r && r.m(l, o), e = !0;
    },
    p(l, o) {
      n ? n.p && (!e || o & /*$$scope, items*/
      33) && Y(
        n,
        i,
        l,
        /*$$scope*/
        l[5],
        e ? Q(
          i,
          /*$$scope*/
          l[5],
          o,
          qd
        ) : J(
          /*$$scope*/
          l[5]
        ),
        Fr
      ) : r && r.p && (!e || o & /*items, imgClass, $$props*/
      11) && r.p(l, e ? o : -1);
    },
    i(l) {
      e || (y(r, l), e = !0);
    },
    o(l) {
      C(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function Kd(t) {
  let e, i, n, r, l = ve(
    /*items*/
    t[0]
  ), o = [];
  for (let c = 0; c < l.length; c += 1)
    o[c] = Wr(Dr(t, l, c));
  const u = (c) => C(o[c], 1, 1, () => {
    o[c] = null;
  });
  let s = null;
  l.length || (s = jr(t));
  let a = [
    /*$$restProps*/
    t[4],
    { class: (
      /*divClass*/
      t[2]
    ) }
  ], f = {};
  for (let c = 0; c < a.length; c += 1)
    f = M(f, a[c]);
  return {
    c() {
      e = P("div");
      for (let c = 0; c < o.length; c += 1)
        o[c].c();
      s && s.c(), ue(e, f);
    },
    m(c, d) {
      A(c, e, d);
      for (let k = 0; k < o.length; k += 1)
        o[k] && o[k].m(e, null);
      s && s.m(e, null), i = !0, n || (r = xe(Qd.call(null, e)), n = !0);
    },
    p(c, [d]) {
      if (d & /*items, twMerge, imgClass, $$props, $$scope*/
      43) {
        l = ve(
          /*items*/
          c[0]
        );
        let k;
        for (k = 0; k < l.length; k += 1) {
          const g = Dr(c, l, k);
          o[k] ? (o[k].p(g, d), y(o[k], 1)) : (o[k] = Wr(g), o[k].c(), y(o[k], 1), o[k].m(e, null));
        }
        for (oe(), k = l.length; k < o.length; k += 1)
          u(k);
        se(), !l.length && s ? s.p(c, d) : l.length ? s && (oe(), C(s, 1, 1, () => {
          s = null;
        }), se()) : (s = jr(c), s.c(), y(s, 1), s.m(e, null));
      }
      ue(e, f = ce(a, [
        d & /*$$restProps*/
        16 && /*$$restProps*/
        c[4],
        (!i || d & /*divClass*/
        4) && { class: (
          /*divClass*/
          c[2]
        ) }
      ]));
    },
    i(c) {
      if (!i) {
        for (let d = 0; d < l.length; d += 1)
          y(o[d]);
        i = !0;
      }
    },
    o(c) {
      o = o.filter(Boolean);
      for (let d = 0; d < o.length; d += 1)
        C(o[d]);
      i = !1;
    },
    d(c) {
      c && T(e), je(o, c), s && s.d(), n = !1, r();
    }
  };
}
function Qd(t) {
  getComputedStyle(t).gap === "normal" && (t.style.gap = "inherit");
}
function Yd(t, e, i) {
  let n;
  const r = ["items", "imgClass"];
  let l = re(e, r), { $$slots: o = {}, $$scope: u } = e, { items: s = [] } = e, { imgClass: a = "uikit-h-auto uikit-max-w-full uikit-rounded-lg" } = e;
  return t.$$set = (f) => {
    i(3, e = M(M({}, e), B(f))), i(4, l = re(e, r)), "items" in f && i(0, s = f.items), "imgClass" in f && i(1, a = f.imgClass), "$$scope" in f && i(5, u = f.$$scope);
  }, t.$$.update = () => {
    i(2, n = O("uikit-grid", e.class));
  }, e = B(e), [s, a, n, e, l, u, o];
}
class Jd extends ie {
  constructor(e) {
    super(), te(this, e, Yd, Kd, X, { items: 0, imgClass: 1 });
  }
}
function Zd(t) {
  let e, i;
  return e = new Jd({
    props: {
      items: (
        /*images*/
        t[0]
      ),
      class: O(
        "uikit-gap-4",
        /*colClass*/
        t[2][
          /*col*/
          t[1]
        ]
      )
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, r) {
      Z(e, n, r), i = !0;
    },
    p(n, [r]) {
      const l = {};
      r & /*images*/
      1 && (l.items = /*images*/
      n[0]), r & /*col*/
      2 && (l.class = O(
        "uikit-gap-4",
        /*colClass*/
        n[2][
          /*col*/
          n[1]
        ]
      )), e.$set(l);
    },
    i(n) {
      i || (y(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function xd(t, e, i) {
  let { images: n = [] } = e, { col: r = "2" } = e;
  const l = {
    1: "uikit-grid-cols-1",
    2: "uikit-grid-cols-2",
    3: "uikit-grid-cols-3",
    4: "uikit-grid-cols-4",
    5: "uikit-grid-cols-5",
    6: "uikit-grid-cols-6",
    7: "uikit-grid-cols-7",
    8: "uikit-grid-cols-8",
    9: "uikit-grid-cols-9",
    10: "uikit-grid-cols-10",
    11: "uikit-grid-cols-11",
    12: "uikit-grid-cols-12"
  };
  return t.$$set = (o) => {
    "images" in o && i(0, n = o.images), "col" in o && i(1, r = o.col);
  }, [n, r, l];
}
class $d extends ie {
  constructor(e) {
    super(), te(this, e, xd, Zd, X, { images: 0, col: 1 });
  }
}
const mk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new $d({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let r in i) {
      let l = i[r];
      n.$on(r, (o) => {
        l(o.detail);
      });
    }
  return n;
};
function ek(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "single page";
    },
    m(i, n) {
      A(i, e, n), t[4](e);
    },
    p: ne,
    i: ne,
    o: ne,
    d(i) {
      i && T(e), t[4](null);
    }
  };
}
function tk(t, e, i) {
  let { pages: n = [] } = e, { idx: r = -1 } = e;
  function l(s) {
    i(1, r = s);
  }
  let o;
  function u(s) {
    Se[s ? "unshift" : "push"](() => {
      o = s, i(0, o), i(2, n), i(1, r);
    });
  }
  return t.$$set = (s) => {
    "pages" in s && i(2, n = s.pages), "idx" in s && i(1, r = s.idx);
  }, t.$$.update = () => {
    t.$$.dirty & /*layout, pages, idx*/
    7 && o && n && n.length > r && r >= 0 && (i(0, o.innerHTML = "", o), o.appendChild(n[r]));
  }, [o, r, n, l, u];
}
class ik extends ie {
  constructor(e) {
    super(), te(this, e, tk, ek, X, { pages: 2, idx: 1, change: 3 });
  }
  get change() {
    return this.$$.ctx[3];
  }
}
const hk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  let n;
  if ((!e.mode || e.mode === "single") && (n = new ik({
    target: t,
    props: {
      ...e
    }
  })), i)
    for (let r in i) {
      let l = i[r];
      n.$on(r, (o) => {
        l(o.detail);
      });
    }
  return n;
};
export {
  rk as FnAccordion,
  lk as FnAlert,
  ok as FnAvatar,
  ak as FnCarousel,
  sk as FnDeviceMockup,
  uk as FnDrawer,
  fk as FnDropdown,
  mk as FnGallery,
  hk as FnLayouts,
  gk as FnModal,
  dk as FnSidebar,
  kk as FnSpinner
};
