var Ol = Object.defineProperty;
var Il = (t, e, i) => e in t ? Ol(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var li = (t, e, i) => (Il(t, typeof e != "symbol" ? e + "" : e, i), i);
function le() {
}
const Xt = (t) => t;
function M(t, e) {
  for (const i in e)
    t[i] = e[i];
  return (
    /** @type {T & S} */
    t
  );
}
function Br(t) {
  return t();
}
function Zi() {
  return /* @__PURE__ */ Object.create(null);
}
function we(t) {
  t.forEach(Br);
}
function me(t) {
  return typeof t == "function";
}
function J(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let It;
function ki(t, e) {
  return t === e ? !0 : (It || (It = document.createElement("a")), It.href = e, t === It.href);
}
function Pl(t) {
  return Object.keys(t).length === 0;
}
function Ll(t, ...e) {
  if (t == null) {
    for (const n of e)
      n(void 0);
    return le;
  }
  const i = t.subscribe(...e);
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
function Qt(t, e, i) {
  t.$$.on_destroy.push(Ll(e, i));
}
function X(t, e, i, n) {
  if (t) {
    const r = Fr(t, e, i, n);
    return t[0](r);
  }
}
function Fr(t, e, i, n) {
  return t[1] && n ? M(i.ctx.slice(), t[1](n(e))) : i.ctx;
}
function Q(t, e, i, n) {
  if (t[2] && n) {
    const r = t[2](n(i));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const l = [], o = Math.max(e.dirty.length, r.length);
      for (let s = 0; s < o; s += 1)
        l[s] = e.dirty[s] | r[s];
      return l;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function K(t, e, i, n, r, l) {
  if (r) {
    const o = Fr(e, i, n, l);
    t.p(o, r);
  }
}
function Y(t) {
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
function ie(t, e) {
  const i = {};
  e = new Set(e);
  for (const n in t)
    !e.has(n) && n[0] !== "$" && (i[n] = t[n]);
  return i;
}
function Xe(t) {
  const e = {};
  for (const i in t)
    e[i] = !0;
  return e;
}
function jr(t, e, i) {
  return t.set(i), e;
}
function at(t) {
  return t && me(t.destroy) ? t.destroy : le;
}
function gi(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const Ml = ["", !0, 1, "true", "contenteditable"], Wr = typeof window < "u";
let Pi = Wr ? () => window.performance.now() : () => Date.now(), Li = Wr ? (t) => requestAnimationFrame(t) : le;
const ot = /* @__PURE__ */ new Set();
function Ur(t) {
  ot.forEach((e) => {
    e.c(t) || (ot.delete(e), e.f());
  }), ot.size !== 0 && Li(Ur);
}
function Mi(t) {
  let e;
  return ot.size === 0 && Li(Ur), {
    promise: new Promise((i) => {
      ot.add(e = { c: t, f: i });
    }),
    abort() {
      ot.delete(e);
    }
  };
}
function z(t, e) {
  t.appendChild(e);
}
function Gr(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Nl(t) {
  const e = N("style");
  return e.textContent = "/* empty */", zl(Gr(t), e), e.sheet;
}
function zl(t, e) {
  return z(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function A(t, e, i) {
  t.insertBefore(e, i || null);
}
function E(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Qe(t, e) {
  for (let i = 0; i < t.length; i += 1)
    t[i] && t[i].d(e);
}
function N(t) {
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
function D(t, e, i, n) {
  return t.addEventListener(e, i, n), () => t.removeEventListener(e, i, n);
}
function Rl(t) {
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
const Dl = ["width", "height"];
function ue(t, e) {
  const i = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in e)
    e[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = e[n] : n === "__value" ? t.value = t[n] = e[n] : i[n] && i[n].set && Dl.indexOf(n) === -1 ? t[n] = e[n] : h(t, n, e[n]);
}
function Dt(t, e) {
  for (const i in e)
    h(t, i, e[i]);
}
function Bl(t, e) {
  Object.keys(e).forEach((i) => {
    Fl(t, i, e[i]);
  });
}
function Fl(t, e, i) {
  e in t ? t[e] = typeof t[e] == "boolean" && i === "" ? !0 : i : h(t, e, i);
}
function ft(t) {
  return /-/.test(t) ? Bl : ue;
}
function jl(t) {
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
function Wl(t) {
  return Array.from(t.childNodes);
}
function Ce(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function Ul(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = /** @type {string} */
  e);
}
function Gl(t, e, i) {
  ~Ml.indexOf(i) ? Ul(t, e) : Ce(t, e);
}
function Hr(t, e, { bubbles: i = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: i, cancelable: n });
}
function $i(t, e) {
  return new t(e);
}
const Bt = /* @__PURE__ */ new Map();
let Ft = 0;
function Hl(t) {
  let e = 5381, i = t.length;
  for (; i--; )
    e = (e << 5) - e ^ t.charCodeAt(i);
  return e >>> 0;
}
function Vl(t, e) {
  const i = { stylesheet: Nl(e), rules: {} };
  return Bt.set(t, i), i;
}
function jt(t, e, i, n, r, l, o, s = 0) {
  const u = 16.666 / n;
  let a = `{
`;
  for (let p = 0; p <= 1; p += u) {
    const b = e + (i - e) * l(p);
    a += p * 100 + `%{${o(b, 1 - b)}}
`;
  }
  const f = a + `100% {${o(i, 1 - i)}}
}`, c = `__svelte_${Hl(f)}_${s}`, d = Gr(t), { stylesheet: k, rules: g } = Bt.get(d) || Vl(d, t);
  g[c] || (g[c] = !0, k.insertRule(`@keyframes ${c} ${f}`, k.cssRules.length));
  const m = t.style.animation || "";
  return t.style.animation = `${m ? `${m}, ` : ""}${c} ${n}ms linear ${r}ms 1 both`, Ft += 1, c;
}
function Wt(t, e) {
  const i = (t.style.animation || "").split(", "), n = i.filter(
    e ? (l) => l.indexOf(e) < 0 : (l) => l.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), r = i.length - n.length;
  r && (t.style.animation = n.join(", "), Ft -= r, Ft || ql());
}
function ql() {
  Li(() => {
    Ft || (Bt.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && E(e);
    }), Bt.clear());
  });
}
let pt;
function bt(t) {
  pt = t;
}
function St() {
  if (!pt)
    throw new Error("Function called outside component initialization");
  return pt;
}
function Ke(t) {
  St().$$.on_mount.push(t);
}
function Xl(t) {
  St().$$.on_destroy.push(t);
}
function je() {
  const t = St();
  return (e, i, { cancelable: n = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const l = Hr(
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
function He(t, e) {
  return St().$$.context.set(t, e), e;
}
function Be(t) {
  return St().$$.context.get(t);
}
function j(t, e) {
  const i = t.$$.callbacks[e.type];
  i && i.slice().forEach((n) => n.call(this, e));
}
const lt = [], Ee = [];
let st = [];
const mi = [], Ql = /* @__PURE__ */ Promise.resolve();
let hi = !1;
function Kl() {
  hi || (hi = !0, Ql.then(Vr));
}
function Oe(t) {
  st.push(t);
}
function Kt(t) {
  mi.push(t);
}
const oi = /* @__PURE__ */ new Set();
let nt = 0;
function Vr() {
  if (nt !== 0)
    return;
  const t = pt;
  do {
    try {
      for (; nt < lt.length; ) {
        const e = lt[nt];
        nt++, bt(e), Yl(e.$$);
      }
    } catch (e) {
      throw lt.length = 0, nt = 0, e;
    }
    for (bt(null), lt.length = 0, nt = 0; Ee.length; )
      Ee.pop()();
    for (let e = 0; e < st.length; e += 1) {
      const i = st[e];
      oi.has(i) || (oi.add(i), i());
    }
    st.length = 0;
  } while (lt.length);
  for (; mi.length; )
    mi.pop()();
  hi = !1, oi.clear(), bt(t);
}
function Yl(t) {
  if (t.fragment !== null) {
    t.update(), we(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Oe);
  }
}
function Jl(t) {
  const e = [], i = [];
  st.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : i.push(n)), i.forEach((n) => n()), st = e;
}
let kt;
function Ni() {
  return kt || (kt = Promise.resolve(), kt.then(() => {
    kt = null;
  })), kt;
}
function Je(t, e, i) {
  t.dispatchEvent(Hr(`${e ? "intro" : "outro"}${i}`));
}
const Nt = /* @__PURE__ */ new Set();
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
function v(t, e) {
  t && t.i && (Nt.delete(t), t.i(e));
}
function S(t, e, i, n) {
  if (t && t.o) {
    if (Nt.has(t))
      return;
    Nt.add(t), ze.c.push(() => {
      Nt.delete(t), n && (i && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
const zi = { duration: 0 };
function Zl(t, e, i) {
  const n = { direction: "in" };
  let r = e(t, i, n), l = !1, o, s, u = 0;
  function a() {
    o && Wt(t, o);
  }
  function f() {
    const {
      delay: d = 0,
      duration: k = 300,
      easing: g = Xt,
      tick: m = le,
      css: p
    } = r || zi;
    p && (o = jt(t, 0, 1, k, d, g, p, u++)), m(0, 1);
    const b = Pi() + d, y = b + k;
    s && s.abort(), l = !0, Oe(() => Je(t, !0, "start")), s = Mi((w) => {
      if (l) {
        if (w >= y)
          return m(1, 0), Je(t, !0, "end"), a(), l = !1;
        if (w >= b) {
          const _ = g((w - b) / k);
          m(_, 1 - _);
        }
      }
      return l;
    });
  }
  let c = !1;
  return {
    start() {
      c || (c = !0, Wt(t), me(r) ? (r = r(n), Ni().then(f)) : f());
    },
    invalidate() {
      c = !1;
    },
    end() {
      l && (a(), l = !1);
    }
  };
}
function xl(t, e, i) {
  const n = { direction: "out" };
  let r = e(t, i, n), l = !0, o;
  const s = ze;
  s.r += 1;
  let u;
  function a() {
    const {
      delay: f = 0,
      duration: c = 300,
      easing: d = Xt,
      tick: k = le,
      css: g
    } = r || zi;
    g && (o = jt(t, 1, 0, c, f, d, g));
    const m = Pi() + f, p = m + c;
    Oe(() => Je(t, !1, "start")), "inert" in t && (u = /** @type {HTMLElement} */
    t.inert, t.inert = !0), Mi((b) => {
      if (l) {
        if (b >= p)
          return k(0, 1), Je(t, !1, "end"), --s.r || we(s.c), !1;
        if (b >= m) {
          const y = d((b - m) / c);
          k(1 - y, y);
        }
      }
      return l;
    });
  }
  return me(r) ? Ni().then(() => {
    r = r(n), a();
  }) : a(), {
    end(f) {
      f && "inert" in t && (t.inert = u), f && r.tick && r.tick(1, 0), l && (o && Wt(t, o), l = !1);
    }
  };
}
function Re(t, e, i, n) {
  let l = e(t, i, { direction: "both" }), o = n ? 0 : 1, s = null, u = null, a = null, f;
  function c() {
    a && Wt(t, a);
  }
  function d(g, m) {
    const p = (
      /** @type {Program['d']} */
      g.b - o
    );
    return m *= Math.abs(p), {
      a: o,
      b: g.b,
      d: p,
      duration: m,
      start: g.start,
      end: g.start + m,
      group: g.group
    };
  }
  function k(g) {
    const {
      delay: m = 0,
      duration: p = 300,
      easing: b = Xt,
      tick: y = le,
      css: w
    } = l || zi, _ = {
      start: Pi() + m,
      b: g
    };
    g || (_.group = ze, ze.r += 1), "inert" in t && (g ? f !== void 0 && (t.inert = f) : (f = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), s || u ? u = _ : (w && (c(), a = jt(t, o, g, p, m, b, w)), g && y(0, 1), s = d(_, p), Oe(() => Je(t, g, "start")), Mi((C) => {
      if (u && C > u.start && (s = d(u, p), u = null, Je(t, s.b, "start"), w && (c(), a = jt(
        t,
        o,
        s.b,
        s.duration,
        0,
        b,
        l.css
      ))), s) {
        if (C >= s.end)
          y(o = s.b, 1 - o), Je(t, s.b, "end"), u || (s.b ? c() : --s.group.r || we(s.group.c)), s = null;
        else if (C >= s.start) {
          const T = C - s.start;
          o = s.a + s.d * b(T / s.duration), y(o, 1 - o);
        }
      }
      return !!(s || u);
    }));
  }
  return {
    run(g) {
      me(l) ? Ni().then(() => {
        l = l({ direction: g ? "in" : "out" }), k(g);
      }) : k(g);
    },
    end() {
      c(), s = u = null;
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
    const o = t[l], s = e[l];
    if (s) {
      for (const u in o)
        u in s || (n[u] = 1);
      for (const u in s)
        r[u] || (i[u] = s[u], r[u] = 1);
      t[l] = s;
    } else
      for (const u in o)
        r[u] = 1;
  }
  for (const o in n)
    o in i || (i[o] = void 0);
  return i;
}
function Pe(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Yt(t, e, i) {
  const n = t.$$.props[e];
  n !== void 0 && (t.$$.bound[n] = i, i(t.$$.ctx[n]));
}
function $(t) {
  t && t.c();
}
function Z(t, e, i) {
  const { fragment: n, after_update: r } = t.$$;
  n && n.m(e, i), Oe(() => {
    const l = t.$$.on_mount.map(Br).filter(me);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : we(l), t.$$.on_mount = [];
  }), r.forEach(Oe);
}
function x(t, e) {
  const i = t.$$;
  i.fragment !== null && (Jl(i.after_update), we(i.on_destroy), i.fragment && i.fragment.d(e), i.on_destroy = i.fragment = null, i.ctx = []);
}
function $l(t, e) {
  t.$$.dirty[0] === -1 && (lt.push(t), Kl(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ne(t, e, i, n, r, l, o, s = [-1]) {
  const u = pt;
  bt(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: le,
    not_equal: r,
    bound: Zi(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Zi(),
    dirty: s,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  o && o(a.root);
  let f = !1;
  if (a.ctx = i ? i(t, e.props || {}, (c, d, ...k) => {
    const g = k.length ? k[0] : d;
    return a.ctx && r(a.ctx[c], a.ctx[c] = g) && (!a.skip_bound && a.bound[c] && a.bound[c](g), f && $l(t, c)), d;
  }) : [], a.update(), f = !0, we(a.before_update), a.fragment = n ? n(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = Wl(e.target);
      a.fragment && a.fragment.l(c), c.forEach(E);
    } else
      a.fragment && a.fragment.c();
    e.intro && v(t.$$.fragment), Z(t, e.target, e.anchor), Vr();
  }
  bt(u);
}
class re {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    li(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    li(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    x(this, 1), this.$destroy = le;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, i) {
    if (!me(i))
      return le;
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
    this.$$set && !Pl(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const eo = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(eo);
const rt = [];
function Tt(t, e = le) {
  let i;
  const n = /* @__PURE__ */ new Set();
  function r(s) {
    if (J(t, s) && (t = s, i)) {
      const u = !rt.length;
      for (const a of n)
        a[1](), rt.push(a, t);
      if (u) {
        for (let a = 0; a < rt.length; a += 2)
          rt[a][0](rt[a + 1]);
        rt.length = 0;
      }
    }
  }
  function l(s) {
    r(s(t));
  }
  function o(s, u = le) {
    const a = [s, u];
    return n.add(a), n.size === 1 && (i = e(r, l) || le), s(t), () => {
      n.delete(a), n.size === 0 && i && (i(), i = null);
    };
  }
  return { set: r, update: l, subscribe: o };
}
function qr() {
  for (var t = 0, e, i, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (i = Xr(e)) && (n && (n += " "), n += i);
  return n;
}
function Xr(t) {
  if (typeof t == "string")
    return t;
  for (var e, i = "", n = 0; n < t.length; n++)
    t[n] && (e = Xr(t[n])) && (i && (i += " "), i += e);
  return i;
}
var Ri = "-";
function to(t) {
  var e = no(t), i = t.conflictingClassGroups, n = t.conflictingClassGroupModifiers, r = n === void 0 ? {} : n;
  function l(s) {
    var u = s.split(Ri);
    return u[0] === "" && u.length !== 1 && u.shift(), Qr(u, e) || io(s);
  }
  function o(s, u) {
    var a = i[s] || [];
    return u && r[s] ? [].concat(a, r[s]) : a;
  }
  return {
    getClassGroupId: l,
    getConflictingClassGroupIds: o
  };
}
function Qr(t, e) {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  var i = t[0], n = e.nextPart.get(i), r = n ? Qr(t.slice(1), n) : void 0;
  if (r)
    return r;
  if (e.validators.length !== 0) {
    var l = t.join(Ri);
    return (o = e.validators.find(function(s) {
      var u = s.validator;
      return u(l);
    })) == null ? void 0 : o.classGroupId;
  }
}
var en = /^\[(.+)\]$/;
function io(t) {
  if (en.test(t)) {
    var e = en.exec(t)[1], i = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}
function no(t) {
  var e = t.theme, i = t.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, r = lo(Object.entries(t.classGroups), i);
  return r.forEach(function(l) {
    var o = l[0], s = l[1];
    bi(s, n, o, e);
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
      if (ro(r)) {
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
      var s = o[0], u = o[1];
      bi(u, tn(e, s), i, n);
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
function ro(t) {
  return t.isThemeGetter;
}
function lo(t, e) {
  return e ? t.map(function(i) {
    var n = i[0], r = i[1], l = r.map(function(o) {
      return typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(function(s) {
        var u = s[0], a = s[1];
        return [e + u, a];
      })) : o;
    });
    return [n, l];
  }) : t;
}
function oo(t) {
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
      var s = i.get(o);
      if (s !== void 0)
        return s;
      if ((s = n.get(o)) !== void 0)
        return r(o, s), s;
    },
    set: function(o, s) {
      i.has(o) ? i.set(o, s) : r(o, s);
    }
  };
}
var Kr = "!";
function so(t) {
  var e = t.separator || ":", i = e.length === 1, n = e[0], r = e.length;
  return function(o) {
    for (var s = [], u = 0, a = 0, f, c = 0; c < o.length; c++) {
      var d = o[c];
      if (u === 0) {
        if (d === n && (i || o.slice(c, c + r) === e)) {
          s.push(o.slice(a, c)), a = c + r;
          continue;
        }
        if (d === "/") {
          f = c;
          continue;
        }
      }
      d === "[" ? u++ : d === "]" && u--;
    }
    var k = s.length === 0 ? o : o.substring(a), g = k.startsWith(Kr), m = g ? k.substring(1) : k, p = f && f > a ? f - a : void 0;
    return {
      modifiers: s,
      hasImportantModifier: g,
      baseClassName: m,
      maybePostfixModifierPosition: p
    };
  };
}
function uo(t) {
  if (t.length <= 1)
    return t;
  var e = [], i = [];
  return t.forEach(function(n) {
    var r = n[0] === "[";
    r ? (e.push.apply(e, i.sort().concat([n])), i = []) : i.push(n);
  }), e.push.apply(e, i.sort()), e;
}
function ao(t) {
  return {
    cache: oo(t.cacheSize),
    splitModifiers: so(t),
    ...to(t)
  };
}
var fo = /\s+/;
function co(t, e) {
  var i = e.splitModifiers, n = e.getClassGroupId, r = e.getConflictingClassGroupIds, l = /* @__PURE__ */ new Set();
  return t.trim().split(fo).map(function(o) {
    var s = i(o), u = s.modifiers, a = s.hasImportantModifier, f = s.baseClassName, c = s.maybePostfixModifierPosition, d = n(c ? f.substring(0, c) : f), k = !!c;
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
    var g = uo(u).join(":"), m = a ? g + Kr : g;
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
    var s = o.modifierId, u = o.classGroupId, a = o.hasPostfixModifier, f = s + u;
    return l.has(f) ? !1 : (l.add(f), r(u, a).forEach(function(c) {
      return l.add(s + c);
    }), !0);
  }).reverse().map(function(o) {
    return o.originalClassName;
  }).join(" ");
}
function ko() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  var n, r, l, o = s;
  function s(a) {
    var f = e[0], c = e.slice(1), d = c.reduce(function(k, g) {
      return g(k);
    }, f());
    return n = ao(d), r = n.cache.get, l = n.cache.set, o = u, u(a);
  }
  function u(a) {
    var f = r(a);
    if (f)
      return f;
    var c = co(a, n);
    return l(a, c), c;
  }
  return function() {
    return o(qr.apply(null, arguments));
  };
}
function ke(t) {
  var e = function(n) {
    return n[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var Yr = /^\[(?:([a-z-]+):)?(.+)\]$/i, go = /^\d+\/\d+$/, mo = /* @__PURE__ */ new Set(["px", "full", "screen"]), ho = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, bo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _o = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Me(t) {
  return Ye(t) || mo.has(t) || go.test(t) || _i(t);
}
function _i(t) {
  return tt(t, "length", So);
}
function po(t) {
  return tt(t, "size", Jr);
}
function yo(t) {
  return tt(t, "position", Jr);
}
function vo(t) {
  return tt(t, "url", To);
}
function Pt(t) {
  return tt(t, "number", Ye);
}
function Ye(t) {
  return !Number.isNaN(Number(t));
}
function wo(t) {
  return t.endsWith("%") && Ye(t.slice(0, -1));
}
function gt(t) {
  return nn(t) || tt(t, "number", nn);
}
function fe(t) {
  return Yr.test(t);
}
function mt() {
  return !0;
}
function Ue(t) {
  return ho.test(t);
}
function Co(t) {
  return tt(t, "", Eo);
}
function tt(t, e, i) {
  var n = Yr.exec(t);
  return n ? n[1] ? n[1] === e : i(n[2]) : !1;
}
function So(t) {
  return bo.test(t);
}
function Jr() {
  return !1;
}
function To(t) {
  return t.startsWith("url(");
}
function nn(t) {
  return Number.isInteger(Number(t));
}
function Eo(t) {
  return _o.test(t);
}
function Ao() {
  var t = ke("colors"), e = ke("spacing"), i = ke("blur"), n = ke("brightness"), r = ke("borderColor"), l = ke("borderRadius"), o = ke("borderSpacing"), s = ke("borderWidth"), u = ke("contrast"), a = ke("grayscale"), f = ke("hueRotate"), c = ke("invert"), d = ke("gap"), k = ke("gradientColorStops"), g = ke("gradientColorStopPositions"), m = ke("inset"), p = ke("margin"), b = ke("opacity"), y = ke("padding"), w = ke("saturate"), _ = ke("scale"), C = ke("sepia"), T = ke("skew"), P = ke("space"), U = ke("translate"), q = function() {
    return ["auto", "contain", "none"];
  }, ee = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, L = function() {
    return ["auto", fe, e];
  }, G = function() {
    return [fe, e];
  }, ge = function() {
    return ["", Me];
  }, F = function() {
    return ["auto", Ye, fe];
  }, R = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, O = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, te = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, de = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, pe = function() {
    return ["", "0", fe];
  }, Le = function() {
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
      blur: ["none", "", Ue, fe],
      brightness: Ae(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Ue, fe],
      borderSpacing: G(),
      borderWidth: ge(),
      contrast: Ae(),
      grayscale: pe(),
      hueRotate: Ne(),
      invert: pe(),
      gap: G(),
      gradientColorStops: [t],
      gradientColorStopPositions: [wo, _i],
      inset: L(),
      margin: L(),
      opacity: Ae(),
      padding: G(),
      saturate: Ae(),
      scale: Ae(),
      sepia: pe(),
      skew: Ne(),
      space: G(),
      translate: G()
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
        columns: [Ue]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Le()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Le()
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
        object: [].concat(R(), [fe])
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
        basis: L()
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
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
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
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
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
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [p]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [p]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [p]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [p]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [p]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [p]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [p]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [p]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [p]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [P]
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
        "space-y": [P]
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
          screen: [Ue]
        }, Ue, fe]
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
        text: ["base", Ue, _i]
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
        "placeholder-opacity": [b]
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
        "text-opacity": [b]
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
        decoration: [].concat(O(), ["wavy"])
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
        indent: G()
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
        "bg-opacity": [b]
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
        bg: [].concat(R(), [yo])
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
        bg: ["auto", "cover", "contain", po]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vo]
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
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(O(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
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
        "divide-y": [s]
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
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: O()
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
        outline: [""].concat(O())
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
        "ring-opacity": [b]
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
        shadow: ["", "inner", "none", Ue, Co]
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
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": te()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": te()
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
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ue, fe]
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
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [C]
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
        "backdrop-contrast": [u]
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
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [C]
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
        scale: [_]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [_]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [_]
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
        "translate-x": [U]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [U]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [T]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [T]
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
        "scroll-m": G()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": G()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": G()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": G()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": G()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": G()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": G()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": G()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": G()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": G()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": G()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": G()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": G()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": G()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": G()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": G()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": G()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": G()
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
var I = /* @__PURE__ */ ko(Ao);
function Oo(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function Zr(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Io(t) {
  const e = Math.cos(t * Math.PI * 0.5);
  return Math.abs(e) < 1e-14 ? 1 : 1 - e;
}
function Di(t, { delay: e = 0, duration: i = 400, easing: n = Oo, amount: r = 5, opacity: l = 0 } = {}) {
  const o = getComputedStyle(t), s = +o.opacity, u = o.filter === "none" ? "" : o.filter, a = s * (1 - l), [f, c] = gi(r);
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (d, k) => `opacity: ${s - a * k}; filter: ${u} blur(${k * f}${c});`
  };
}
function Jt(t, { delay: e = 0, duration: i = 400, easing: n = Xt } = {}) {
  const r = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (l) => `opacity: ${l * r}`
  };
}
function yt(t, { delay: e = 0, duration: i = 400, easing: n = Zr, x: r = 0, y: l = 0, opacity: o = 0 } = {}) {
  const s = getComputedStyle(t), u = +s.opacity, a = s.transform === "none" ? "" : s.transform, f = u * (1 - o), [c, d] = gi(r), [k, g] = gi(l);
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (m, p) => `
			transform: ${a} translate(${(1 - m) * c}${d}, ${(1 - m) * k}${g});
			opacity: ${u - f * p}`
  };
}
function Bi(t, { delay: e = 0, duration: i = 400, easing: n = Zr, axis: r = "y" } = {}) {
  const l = getComputedStyle(t), o = +l.opacity, s = r === "y" ? "height" : "width", u = parseFloat(l[s]), a = r === "y" ? ["top", "bottom"] : ["left", "right"], f = a.map(
    (b) => `${b[0].toUpperCase()}${b.slice(1)}`
  ), c = parseFloat(l[`padding${f[0]}`]), d = parseFloat(l[`padding${f[1]}`]), k = parseFloat(l[`margin${f[0]}`]), g = parseFloat(l[`margin${f[1]}`]), m = parseFloat(
    l[`border${f[0]}Width`]
  ), p = parseFloat(
    l[`border${f[1]}Width`]
  );
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (b) => `overflow: hidden;opacity: ${Math.min(b * 20, 1) * o};${s}: ${b * u}px;padding-${a[0]}: ${b * c}px;padding-${a[1]}: ${b * d}px;margin-${a[0]}: ${b * k}px;margin-${a[1]}: ${b * g}px;border-${a[0]}-width: ${b * m}px;border-${a[1]}-width: ${b * p}px;`
  };
}
const Po = (t) => ({}), rn = (t) => ({}), Lo = (t) => ({}), ln = (t) => ({}), Mo = (t) => ({}), on = (t) => ({});
function No(t) {
  let e;
  const i = (
    /*#slots*/
    t[22].arrowdown
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[21],
    rn
  ), r = n || Ro();
  return {
    c() {
      r && r.c();
    },
    m(l, o) {
      r && r.m(l, o), e = !0;
    },
    p(l, o) {
      n && n.p && (!e || o & /*$$scope*/
      2097152) && K(
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
          Po
        ) : Y(
          /*$$scope*/
          l[21]
        ),
        rn
      );
    },
    i(l) {
      e || (v(r, l), e = !0);
    },
    o(l) {
      S(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function zo(t) {
  let e;
  const i = (
    /*#slots*/
    t[22].arrowup
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[21],
    ln
  ), r = n || Do();
  return {
    c() {
      r && r.c();
    },
    m(l, o) {
      r && r.m(l, o), e = !0;
    },
    p(l, o) {
      n && n.p && (!e || o & /*$$scope*/
      2097152) && K(
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
          Lo
        ) : Y(
          /*$$scope*/
          l[21]
        ),
        ln
      );
    },
    i(l) {
      e || (v(r, l), e = !0);
    },
    o(l) {
      S(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function Ro(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "m1 1 4 4 4-4"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, r) {
      A(n, e, r), z(e, i);
    },
    p: le,
    d(n) {
      n && E(e);
    }
  };
}
function Do(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5 5 1 1 5"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, r) {
      A(n, e, r), z(e, i);
    },
    p: le,
    d(n) {
      n && E(e);
    }
  };
}
function Bo(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[22].default
  ), l = X(
    r,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = N("div"), i = N("div"), l && l.c(), h(
        i,
        "class",
        /*contentClass*/
        t[3]
      ), h(e, "class", "uikit-hidden");
    },
    m(o, s) {
      A(o, e, s), z(e, i), l && l.m(i, null), n = !0;
    },
    p(o, s) {
      l && l.p && (!n || s & /*$$scope*/
      2097152) && K(
        l,
        r,
        o,
        /*$$scope*/
        o[21],
        n ? Q(
          r,
          /*$$scope*/
          o[21],
          s,
          null
        ) : Y(
          /*$$scope*/
          o[21]
        ),
        null
      ), (!n || s & /*contentClass*/
      8) && h(
        i,
        "class",
        /*contentClass*/
        o[3]
      );
    },
    i(o) {
      n || (v(l, o), n = !0);
    },
    o(o) {
      S(l, o), n = !1;
    },
    d(o) {
      o && E(e), l && l.d(o);
    }
  };
}
function Fo(t) {
  let e, i, n, r;
  const l = (
    /*#slots*/
    t[22].default
  ), o = X(
    l,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = N("div"), i = N("div"), o && o.c(), h(
        i,
        "class",
        /*contentClass*/
        t[3]
      );
    },
    m(s, u) {
      A(s, e, u), z(e, i), o && o.m(i, null), r = !0;
    },
    p(s, u) {
      t = s, o && o.p && (!r || u & /*$$scope*/
      2097152) && K(
        o,
        l,
        t,
        /*$$scope*/
        t[21],
        r ? Q(
          l,
          /*$$scope*/
          t[21],
          u,
          null
        ) : Y(
          /*$$scope*/
          t[21]
        ),
        null
      ), (!r || u & /*contentClass*/
      8) && h(
        i,
        "class",
        /*contentClass*/
        t[3]
      );
    },
    i(s) {
      r || (v(o, s), s && Oe(() => {
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
    o(s) {
      S(o, s), s && (n || (n = Re(
        e,
        /*multiple*/
        t[4],
        /*transitionParams*/
        t[1],
        !1
      )), n.run(0)), r = !1;
    },
    d(s) {
      s && E(e), o && o.d(s), s && n && n.end();
    }
  };
}
function jo(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d;
  const k = (
    /*#slots*/
    t[22].header
  ), g = X(
    k,
    t,
    /*$$scope*/
    t[21],
    on
  ), m = [zo, No], p = [];
  function b(C, T) {
    return (
      /*open*/
      C[0] ? 0 : 1
    );
  }
  r = b(t), l = p[r] = m[r](t);
  const y = [Fo, Bo], w = [];
  function _(C, T) {
    return (
      /*open*/
      C[0] ? 0 : 1
    );
  }
  return s = _(t), u = w[s] = y[s](t), {
    c() {
      e = N("h2"), i = N("button"), g && g.c(), n = H(), l.c(), o = H(), u.c(), a = ae(), h(i, "type", "button"), h(
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
    m(C, T) {
      A(C, e, T), z(e, i), g && g.m(i, null), z(i, n), p[r].m(i, null), A(C, o, T), w[s].m(C, T), A(C, a, T), f = !0, c || (d = D(
        i,
        "click",
        /*handleToggle*/
        t[6]
      ), c = !0);
    },
    p(C, [T]) {
      g && g.p && (!f || T & /*$$scope*/
      2097152) && K(
        g,
        k,
        C,
        /*$$scope*/
        C[21],
        f ? Q(
          k,
          /*$$scope*/
          C[21],
          T,
          Mo
        ) : Y(
          /*$$scope*/
          C[21]
        ),
        on
      );
      let P = r;
      r = b(C), r === P ? p[r].p(C, T) : (oe(), S(p[P], 1, 1, () => {
        p[P] = null;
      }), se(), l = p[r], l ? l.p(C, T) : (l = p[r] = m[r](C), l.c()), v(l, 1), l.m(i, null)), (!f || T & /*buttonClass*/
      4) && h(
        i,
        "class",
        /*buttonClass*/
        C[2]
      ), (!f || T & /*open*/
      1) && h(
        i,
        "aria-expanded",
        /*open*/
        C[0]
      );
      let U = s;
      s = _(C), s === U ? w[s].p(C, T) : (oe(), S(w[U], 1, 1, () => {
        w[U] = null;
      }), se(), u = w[s], u ? u.p(C, T) : (u = w[s] = y[s](C), u.c()), v(u, 1), u.m(a.parentNode, a));
    },
    i(C) {
      f || (v(g, C), v(l), v(u), f = !0);
    },
    o(C) {
      S(g, C), S(l), S(u), f = !1;
    },
    d(C) {
      C && (E(e), E(o), E(a)), g && g.d(C), p[r].d(), w[s].d(C), c = !1, d();
    }
  };
}
function Wo(t, e, i) {
  let n, r, { $$slots: l = {}, $$scope: o } = e, { open: s = !1 } = e, { activeClass: u = void 0 } = e, { inactiveClass: a = void 0 } = e, { defaultClass: f = "uikit-flex uikit-items-center uikit-justify-between uikit-w-full uikit-font-medium uikit-text-left group-first:uikit-rounded-t-xl uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { transitionType: c = "slide" } = e, { transitionParams: d = {} } = e, { paddingFlush: k = "uikit-py-5" } = e, { paddingDefault: g = "uikit-p-5" } = e, { textFlushOpen: m = "uikit-text-gray-900 dark:uikit-text-white" } = e, { textFlushDefault: p = "uikit-text-gray-500 dark:uikit-text-gray-400" } = e, { borderClass: b = "uikit-border-s uikit-border-e group-first:uikit-border-t" } = e, { borderOpenClass: y = "uikit-border-s uikit-border-e" } = e, { borderBottomClass: w = "uikit-border-b" } = e, { borderSharedClass: _ = "uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { classActive: C = void 0 } = e, { classInactive: T = void 0 } = e, P = I(u, C), U = I(a, T);
  const q = (O, te) => {
    switch (c) {
      case "blur":
        return Di(O, te);
      case "fly":
        return yt(O, te);
      case "fade":
        return Jt(O, te);
      default:
        return Bi(O, te);
    }
  }, ee = Be("ctx") ?? {}, L = {}, G = ee.selected ?? Tt();
  Qt(t, G, (O) => i(23, r = O));
  let ge = s;
  s = !1, Ke(() => (ge && jr(G, r = L, r), G.subscribe((O) => i(0, s = O === L))));
  const F = (O) => G.set(s ? {} : L);
  let R;
  return t.$$set = (O) => {
    i(29, e = M(M({}, e), B(O))), "open" in O && i(0, s = O.open), "activeClass" in O && i(7, u = O.activeClass), "inactiveClass" in O && i(8, a = O.inactiveClass), "defaultClass" in O && i(9, f = O.defaultClass), "transitionType" in O && i(10, c = O.transitionType), "transitionParams" in O && i(1, d = O.transitionParams), "paddingFlush" in O && i(11, k = O.paddingFlush), "paddingDefault" in O && i(12, g = O.paddingDefault), "textFlushOpen" in O && i(13, m = O.textFlushOpen), "textFlushDefault" in O && i(14, p = O.textFlushDefault), "borderClass" in O && i(15, b = O.borderClass), "borderOpenClass" in O && i(16, y = O.borderOpenClass), "borderBottomClass" in O && i(17, w = O.borderBottomClass), "borderSharedClass" in O && i(18, _ = O.borderSharedClass), "classActive" in O && i(19, C = O.classActive), "classInactive" in O && i(20, T = O.classInactive), "$$scope" in O && i(21, o = O.$$scope);
  }, t.$$.update = () => {
    i(2, R = I([
      f,
      ee.flush || b,
      w,
      _,
      ee.flush ? k : g,
      s && (ee.flush ? m : P || ee.activeClass),
      !s && (ee.flush ? p : U || ee.inactiveClass),
      e.class
    ])), t.$$.dirty & /*paddingFlush, paddingDefault, borderOpenClass, borderBottomClass, borderSharedClass*/
    464896 && i(3, n = I([
      ee.flush ? k : g,
      ee.flush ? "" : y,
      w,
      _
    ]));
  }, e = B(e), [
    s,
    d,
    R,
    n,
    q,
    G,
    F,
    u,
    a,
    f,
    c,
    k,
    g,
    m,
    p,
    b,
    y,
    w,
    _,
    C,
    T,
    o,
    l
  ];
}
class Uo extends re {
  constructor(e) {
    super(), ne(this, e, Wo, jo, J, {
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
function si(t) {
  let e, i, n, r, l;
  const o = (
    /*#slots*/
    t[12].default
  ), s = X(
    o,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let u = [
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
  for (let f = 0; f < u.length; f += 1)
    a = M(a, u[f]);
  return {
    c() {
      e = N(
        /*tag*/
        t[1]
      ), s && s.c(), ft(
        /*tag*/
        t[1]
      )(e, a);
    },
    m(f, c) {
      A(f, e, c), s && s.m(e, null), t[18](e), n = !0, r || (l = [
        at(i = /*use*/
        t[2].call(
          null,
          e,
          /*options*/
          t[3]
        )),
        D(
          e,
          "click",
          /*click_handler*/
          t[13]
        ),
        D(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[14]
        ),
        D(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[15]
        ),
        D(
          e,
          "focusin",
          /*focusin_handler*/
          t[16]
        ),
        D(
          e,
          "focusout",
          /*focusout_handler*/
          t[17]
        )
      ], r = !0);
    },
    p(f, c) {
      s && s.p && (!n || c & /*$$scope*/
      2048) && K(
        s,
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
        ) : Y(
          /*$$scope*/
          f[11]
        ),
        null
      ), ft(
        /*tag*/
        f[1]
      )(e, a = ce(u, [
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
      n || (v(s, f), n = !0);
    },
    o(f) {
      S(s, f), n = !1;
    },
    d(f) {
      f && E(e), s && s.d(f), t[18](null), r = !1, we(l);
    }
  };
}
function Go(t) {
  let e = (
    /*tag*/
    t[1]
  ), i, n, r = (
    /*tag*/
    t[1] && si(t)
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
      l[1] ? e ? J(
        e,
        /*tag*/
        l[1]
      ) ? (r.d(1), r = si(l), e = /*tag*/
      l[1], r.c(), r.m(i.parentNode, i)) : r.p(l, o) : (r = si(l), e = /*tag*/
      l[1], r.c(), r.m(i.parentNode, i)) : e && (r.d(1), r = null, e = /*tag*/
      l[1]);
    },
    i(l) {
      n || (v(r, l), n = !0);
    },
    o(l) {
      S(r, l), n = !1;
    },
    d(l) {
      l && E(i), r && r.d(l);
    }
  };
}
function Ho(t, e, i) {
  const n = ["tag", "color", "rounded", "border", "shadow", "node", "use", "options", "role"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = () => {
  };
  He("background", !0);
  let { tag: u = r.href ? "a" : "div" } = e, { color: a = "default" } = e, { rounded: f = !1 } = e, { border: c = !1 } = e, { shadow: d = !1 } = e, { node: k = void 0 } = e, { use: g = s } = e, { options: m = {} } = e, { role: p = void 0 } = e;
  const b = {
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
  }, y = {
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
  }, w = {
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
  let _;
  function C(L) {
    j.call(this, t, L);
  }
  function T(L) {
    j.call(this, t, L);
  }
  function P(L) {
    j.call(this, t, L);
  }
  function U(L) {
    j.call(this, t, L);
  }
  function q(L) {
    j.call(this, t, L);
  }
  function ee(L) {
    Ee[L ? "unshift" : "push"](() => {
      k = L, i(0, k);
    });
  }
  return t.$$set = (L) => {
    i(23, e = M(M({}, e), B(L))), i(6, r = ie(e, n)), "tag" in L && i(1, u = L.tag), "color" in L && i(7, a = L.color), "rounded" in L && i(8, f = L.rounded), "border" in L && i(9, c = L.border), "shadow" in L && i(10, d = L.shadow), "node" in L && i(0, k = L.node), "use" in L && i(2, g = L.use), "options" in L && i(3, m = L.options), "role" in L && i(4, p = L.role), "$$scope" in L && i(11, o = L.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*color*/
    128 && i(7, a = a ?? "default"), t.$$.dirty & /*color*/
    128 && He("color", a), i(5, _ = I(b[a], y[a], f && "uikit-rounded-lg", c && "uikit-border", w[a], d && "uikit-shadow-md", e.class));
  }, e = B(e), [
    k,
    u,
    g,
    m,
    p,
    _,
    r,
    a,
    f,
    c,
    d,
    o,
    l,
    C,
    T,
    P,
    U,
    q,
    ee
  ];
}
class it extends re {
  constructor(e) {
    super(), ne(this, e, Ho, Go, J, {
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
      e = N("p"), n = be(i), h(e, "class", "mb-2 text-gray-500 dark:text-gray-400");
    },
    m(r, l) {
      A(r, e, l), z(e, n);
    },
    p(r, l) {
      l & /*items*/
      1 && i !== (i = /*desc*/
      r[13] + "") && Ce(n, i);
    },
    d(r) {
      r && E(e);
    }
  };
}
function Vo(t) {
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
          const s = un(r, i, o);
          n[o] ? n[o].p(s, l) : (n[o] = an(s), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = i.length;
      }
    },
    d(r) {
      r && E(e), Qe(n, r);
    }
  };
}
function qo(t) {
  let e, i = (
    /*item*/
    (t[10].title || "a title") + ""
  ), n;
  return {
    c() {
      e = N("span"), n = be(i), h(e, "slot", "header");
    },
    m(r, l) {
      A(r, e, l), z(e, n);
    },
    p(r, l) {
      l & /*items*/
      1 && i !== (i = /*item*/
      (r[10].title || "a title") + "") && Ce(n, i);
    },
    d(r) {
      r && E(e);
    }
  };
}
function fn(t) {
  let e, i;
  return e = new Uo({
    props: {
      $$slots: {
        header: [qo],
        default: [Vo]
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Xo(t) {
  let e, i, n = ve(
    /*items*/
    t[0]
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = fn(sn(t, n, o));
  const l = (o) => S(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = ae();
    },
    m(o, s) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(o, s);
      A(o, e, s), i = !0;
    },
    p(o, s) {
      if (s & /*items*/
      1) {
        n = ve(
          /*items*/
          o[0]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = sn(o, n, u);
          r[u] ? (r[u].p(a, s), v(r[u], 1)) : (r[u] = fn(a), r[u].c(), v(r[u], 1), r[u].m(e.parentNode, e));
        }
        for (oe(), u = n.length; u < r.length; u += 1)
          l(u);
        se();
      }
    },
    i(o) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          v(r[s]);
        i = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        S(r[s]);
      i = !1;
    },
    d(o) {
      o && E(e), Qe(r, o);
    }
  };
}
function Qo(t) {
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
    $$slots: { default: [Xo] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new it({ props: r }), {
    c() {
      $(e.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), i = !0;
    },
    p(l, [o]) {
      const s = o & /*$$restProps, frameClass*/
      6 ? ce(n, [
        o & /*$$restProps*/
        4 && Pe(
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
      65537 && (s.$$scope = { dirty: o, ctx: l }), e.$set(s);
    },
    i(l) {
      i || (v(e.$$.fragment, l), i = !0);
    },
    o(l) {
      S(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function Ko(t, e, i) {
  const n = ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass", "items"];
  let r = ie(e, n), { multiple: l = !1 } = e, { flush: o = !1 } = e, { activeClass: s = "uikit-bg-gray-100 dark:uikit-bg-gray-800 uikit-text-gray-900 dark:uikit-text-white focus:uikit-ring-4 focus:uikit-ring-gray-200 dark:focus:uikit-ring-gray-800" } = e, { inactiveClass: u = "uikit-text-gray-500 dark:uikit-text-gray-400 hover:uikit-bg-gray-100 hover:dark:uikit-bg-gray-800" } = e, { defaultClass: a = "uikit-text-gray-500 dark:uikit-text-gray-400" } = e, { items: f = [] } = e;
  const c = {
    flush: o,
    activeClass: I(s, e.classActive),
    inactiveClass: I(u, e.classInactive),
    selected: l ? void 0 : Tt()
  };
  He("ctx", c);
  let d;
  return t.$$set = (k) => {
    i(9, e = M(M({}, e), B(k))), i(2, r = ie(e, n)), "multiple" in k && i(3, l = k.multiple), "flush" in k && i(4, o = k.flush), "activeClass" in k && i(5, s = k.activeClass), "inactiveClass" in k && i(6, u = k.inactiveClass), "defaultClass" in k && i(7, a = k.defaultClass), "items" in k && i(0, f = k.items);
  }, t.$$.update = () => {
    i(1, d = I(a, e.class));
  }, e = B(e), [
    f,
    d,
    r,
    l,
    o,
    s,
    u,
    a
  ];
}
class Yo extends re {
  constructor(e) {
    super(), ne(this, e, Ko, Qo, J, {
      multiple: 3,
      flush: 4,
      activeClass: 5,
      inactiveClass: 6,
      defaultClass: 7,
      items: 0
    });
  }
}
const Ud = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Yo({
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
}, Jo = (t) => ({}), cn = (t) => ({ close: (
  /*close*/
  t[4]
) }), Zo = (t) => ({}), dn = (t) => ({ close: (
  /*close*/
  t[4]
) });
function xo(t) {
  let e, i;
  const n = [
    /*$$restProps*/
    t[5]
  ];
  let r = {
    $$slots: { default: [es] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new it({ props: r }), {
    c() {
      $(e.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), i = !0;
    },
    p(l, o) {
      const s = o & /*$$restProps*/
      32 ? ce(n, [Pe(
        /*$$restProps*/
        l[5]
      )]) : {};
      o & /*$$scope*/
      128 && (s.$$scope = { dirty: o, ctx: l }), e.$set(s);
    },
    i(l) {
      i || (v(e.$$.fragment, l), i = !0);
    },
    o(l) {
      S(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function $o(t) {
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
      1 && v(n, 1)) : (n = kn(r), n.c(), v(n, 1), n.m(e.parentNode, e)) : n && (oe(), S(n, 1, 1, () => {
        n = null;
      }), se());
    },
    i(r) {
      i || (v(n), i = !0);
    },
    o(r) {
      S(n), i = !1;
    },
    d(r) {
      r && E(e), n && n.d(r);
    }
  };
}
function es(t) {
  let e;
  const i = (
    /*#slots*/
    t[6].default
  ), n = X(
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
      128) && K(
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
          Jo
        ) : Y(
          /*$$scope*/
          r[7]
        ),
        cn
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
    },
    o(r) {
      S(n, r), e = !1;
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
    $$slots: { default: [ts] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < l.length; s += 1)
    o = M(o, l[s]);
  return i = new it({ props: o }), {
    c() {
      e = N("div"), $(i.$$.fragment);
    },
    m(s, u) {
      A(s, e, u), Z(i, e, null), r = !0;
    },
    p(s, u) {
      t = s;
      const a = u & /*$$restProps*/
      32 ? ce(l, [Pe(
        /*$$restProps*/
        t[5]
      )]) : {};
      u & /*$$scope*/
      128 && (a.$$scope = { dirty: u, ctx: t }), i.$set(a);
    },
    i(s) {
      r || (v(i.$$.fragment, s), s && Oe(() => {
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
    o(s) {
      S(i.$$.fragment, s), s && (n || (n = Re(
        e,
        /*transition*/
        t[1],
        /*params*/
        t[2],
        !1
      )), n.run(0)), r = !1;
    },
    d(s) {
      s && E(e), x(i), s && n && n.end();
    }
  };
}
function ts(t) {
  let e;
  const i = (
    /*#slots*/
    t[6].default
  ), n = X(
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
      128) && K(
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
          Zo
        ) : Y(
          /*$$scope*/
          r[7]
        ),
        dn
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
    },
    o(r) {
      S(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function is(t) {
  let e, i, n, r;
  const l = [$o, xo], o = [];
  function s(u, a) {
    return (
      /*dismissable*/
      u[3] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), A(u, n, a), r = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      S(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function ns(t, e, i) {
  const n = ["transition", "params", "open", "dismissable"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e, { transition: s = Jt } = e, { params: u = {} } = e, { open: a = !0 } = e, { dismissable: f = !1 } = e;
  const c = je();
  function d(k) {
    k != null && k.stopPropagation && k.stopPropagation(), i(0, a = !1);
  }
  return t.$$set = (k) => {
    e = M(M({}, e), B(k)), i(5, r = ie(e, n)), "transition" in k && i(1, s = k.transition), "params" in k && i(2, u = k.params), "open" in k && i(0, a = k.open), "dismissable" in k && i(3, f = k.dismissable), "$$scope" in k && i(7, o = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && c(a ? "open" : "close");
  }, [a, s, u, f, d, r, l, o];
}
class rs extends re {
  constructor(e) {
    super(), ne(this, e, ns, is, J, {
      transition: 1,
      params: 2,
      open: 0,
      dismissable: 3
    });
  }
}
const ls = (t) => ({ svgSize: t & /*size*/
4 }), gn = (t) => ({
  svgSize: (
    /*svgSizes*/
    t[5][
      /*size*/
      t[2]
    ]
  )
}), os = (t) => ({ svgSize: t & /*size*/
4 }), mn = (t) => ({
  svgSize: (
    /*svgSizes*/
    t[5][
      /*size*/
      t[2]
    ]
  )
});
function ss(t) {
  let e, i, n, r, l, o, s = (
    /*name*/
    t[0] && hn(t)
  );
  const u = (
    /*#slots*/
    t[9].default
  ), a = X(
    u,
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
      e = N("button"), s && s.c(), i = H(), a && a.c(), ue(e, c);
    },
    m(d, k) {
      A(d, e, k), s && s.m(e, null), z(e, i), a && a.m(e, null), e.autofocus && e.focus(), r = !0, l || (o = D(
        e,
        "click",
        /*click_handler*/
        t[10]
      ), l = !0);
    },
    p(d, k) {
      /*name*/
      d[0] ? s ? s.p(d, k) : (s = hn(d), s.c(), s.m(e, i)) : s && (s.d(1), s = null), a && a.p && (!r || k & /*$$scope, size*/
      260) && K(
        a,
        u,
        d,
        /*$$scope*/
        d[8],
        r ? Q(
          u,
          /*$$scope*/
          d[8],
          k,
          ls
        ) : Y(
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
      r || (v(a, d), r = !0);
    },
    o(d) {
      S(a, d), r = !1;
    },
    d(d) {
      d && E(e), s && s.d(), a && a.d(d), l = !1, o();
    }
  };
}
function us(t) {
  let e, i, n, r, l = (
    /*name*/
    t[0] && bn(t)
  );
  const o = (
    /*#slots*/
    t[9].default
  ), s = X(
    o,
    t,
    /*$$scope*/
    t[8],
    mn
  );
  let u = [
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
  for (let f = 0; f < u.length; f += 1)
    a = M(a, u[f]);
  return {
    c() {
      e = N("a"), l && l.c(), i = H(), s && s.c(), ue(e, a);
    },
    m(f, c) {
      A(f, e, c), l && l.m(e, null), z(e, i), s && s.m(e, null), r = !0;
    },
    p(f, c) {
      /*name*/
      f[0] ? l ? l.p(f, c) : (l = bn(f), l.c(), l.m(e, i)) : l && (l.d(1), l = null), s && s.p && (!r || c & /*$$scope, size*/
      260) && K(
        s,
        o,
        f,
        /*$$scope*/
        f[8],
        r ? Q(
          o,
          /*$$scope*/
          f[8],
          c,
          os
        ) : Y(
          /*$$scope*/
          f[8]
        ),
        mn
      ), ue(e, a = ce(u, [
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
      r || (v(s, f), r = !0);
    },
    o(f) {
      S(s, f), r = !1;
    },
    d(f) {
      f && E(e), l && l.d(), s && s.d(f);
    }
  };
}
function hn(t) {
  let e, i;
  return {
    c() {
      e = N("span"), i = be(
        /*name*/
        t[0]
      ), h(e, "class", "uikit-sr-only");
    },
    m(n, r) {
      A(n, e, r), z(e, i);
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
      n && E(e);
    }
  };
}
function bn(t) {
  let e, i;
  return {
    c() {
      e = N("span"), i = be(
        /*name*/
        t[0]
      ), h(e, "class", "uikit-sr-only");
    },
    m(n, r) {
      A(n, e, r), z(e, i);
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
      n && E(e);
    }
  };
}
function as(t) {
  let e, i, n, r;
  const l = [us, ss], o = [];
  function s(u, a) {
    return (
      /*href*/
      u[3] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), A(u, n, a), r = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      S(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function fs(t, e, i) {
  const n = ["color", "name", "ariaLabel", "size", "href"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Be("background");
  let { color: u = "default" } = e, { name: a = void 0 } = e, { ariaLabel: f = void 0 } = e, { size: c = "md" } = e, { href: d = void 0 } = e;
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
  const p = {
    xs: "uikit-w-3 uikit-h-3",
    sm: "uikit-w-3.5 uikit-h-3.5",
    md: "uikit-w-5 uikit-h-5",
    lg: "uikit-w-5 uikit-h-5"
  };
  function b(y) {
    j.call(this, t, y);
  }
  return t.$$set = (y) => {
    i(14, e = M(M({}, e), B(y))), i(6, r = ie(e, n)), "color" in y && i(7, u = y.color), "name" in y && i(0, a = y.name), "ariaLabel" in y && i(1, f = y.ariaLabel), "size" in y && i(2, c = y.size), "href" in y && i(3, d = y.href), "$$scope" in y && i(8, o = y.$$scope);
  }, t.$$.update = () => {
    i(4, m = I(
      "focus:uikit-outline-none uikit-whitespace-normal",
      g[c],
      k[u],
      u === "default" && (s ? "hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-600" : "hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700"),
      e.class
    ));
  }, e = B(e), [
    a,
    f,
    c,
    d,
    m,
    p,
    r,
    u,
    o,
    l,
    b
  ];
}
class cs extends re {
  constructor(e) {
    super(), ne(this, e, fs, as, J, {
      color: 7,
      name: 0,
      ariaLabel: 1,
      size: 2,
      href: 3
    });
  }
}
function ds(t) {
  let e, i, n;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "fill-rule", "evenodd"), h(i, "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"), h(i, "clip-rule", "evenodd"), h(e, "class", n = /*svgSize*/
      t[4]), h(e, "fill", "currentColor"), h(e, "viewBox", "0 0 20 20"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, l) {
      A(r, e, l), z(e, i);
    },
    p(r, l) {
      l & /*svgSize*/
      16 && n !== (n = /*svgSize*/
      r[4]) && h(e, "class", n);
    },
    d(r) {
      r && E(e);
    }
  };
}
function ks(t) {
  let e, i;
  const n = [
    { name: (
      /*name*/
      t[0]
    ) },
    /*$$restProps*/
    t[1],
    {
      class: I(
        "uikit-ms-auto",
        /*$$props*/
        t[2].class
      )
    }
  ];
  let r = {
    $$slots: {
      default: [
        ds,
        ({ svgSize: l }) => ({ 4: l }),
        ({ svgSize: l }) => l ? 16 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new cs({ props: r }), e.$on(
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
      const s = o & /*name, $$restProps, twMerge, $$props*/
      7 ? ce(n, [
        o & /*name*/
        1 && { name: (
          /*name*/
          l[0]
        ) },
        o & /*$$restProps*/
        2 && Pe(
          /*$$restProps*/
          l[1]
        ),
        o & /*twMerge, $$props*/
        4 && {
          class: I(
            "uikit-ms-auto",
            /*$$props*/
            l[2].class
          )
        }
      ]) : {};
      o & /*$$scope, svgSize*/
      48 && (s.$$scope = { dirty: o, ctx: l }), e.$set(s);
    },
    i(l) {
      i || (v(e.$$.fragment, l), i = !0);
    },
    o(l) {
      S(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function gs(t, e, i) {
  const n = ["name"];
  let r = ie(e, n), { name: l = "Close" } = e;
  function o(s) {
    j.call(this, t, s);
  }
  return t.$$set = (s) => {
    i(2, e = M(M({}, e), B(s))), i(1, r = ie(e, n)), "name" in s && i(0, l = s.name);
  }, e = B(e), [l, r, e, o];
}
class Fi extends re {
  constructor(e) {
    super(), ne(this, e, gs, ks, J, { name: 0 });
  }
}
const ms = (t) => ({ close: t & /*close*/
1048576 }), _n = (t) => ({ close: (
  /*close*/
  t[20]
) }), hs = (t) => ({}), pn = (t) => ({});
function yn(t) {
  let e;
  const i = (
    /*#slots*/
    t[7].icon
  ), n = X(
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
      262144) && K(
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
          hs
        ) : Y(
          /*$$scope*/
          r[18]
        ),
        pn
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
    },
    o(r) {
      S(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function bs(t) {
  let e;
  const i = (
    /*#slots*/
    t[7].default
  ), n = X(
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
      262144) && K(
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
        ) : Y(
          /*$$scope*/
          r[18]
        ),
        null
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
    },
    o(r) {
      S(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function _s(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[7].default
  ), r = X(
    n,
    t,
    /*$$scope*/
    t[18],
    null
  );
  return {
    c() {
      e = N("div"), r && r.c();
    },
    m(l, o) {
      A(l, e, o), r && r.m(e, null), i = !0;
    },
    p(l, o) {
      r && r.p && (!i || o & /*$$scope*/
      262144) && K(
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
        ) : Y(
          /*$$scope*/
          l[18]
        ),
        null
      );
    },
    i(l) {
      i || (v(r, l), i = !0);
    },
    o(l) {
      S(r, l), i = !1;
    },
    d(l) {
      l && E(e), r && r.d(l);
    }
  };
}
function vn(t) {
  let e;
  const i = (
    /*#slots*/
    t[7]["close-button"]
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[18],
    _n
  ), r = n || ps(t);
  return {
    c() {
      r && r.c();
    },
    m(l, o) {
      r && r.m(l, o), e = !0;
    },
    p(l, o) {
      n ? n.p && (!e || o & /*$$scope, close*/
      1310720) && K(
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
          ms
        ) : Y(
          /*$$scope*/
          l[18]
        ),
        _n
      ) : r && r.p && (!e || o & /*$$restProps, close*/
      1048608) && r.p(l, e ? o : -1);
    },
    i(l) {
      e || (v(r, l), e = !0);
    },
    o(l) {
      S(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function ps(t) {
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
      i || (v(e.$$.fragment, r), i = !0);
    },
    o(r) {
      S(e.$$.fragment, r), i = !1;
    },
    d(r) {
      x(e, r);
    }
  };
}
function ys(t) {
  let e, i, n, r, l, o, s = (
    /*$$slots*/
    t[4].icon && yn(t)
  );
  const u = [_s, bs], a = [];
  function f(d, k) {
    return (
      /*$$slots*/
      d[4].icon || /*dismissable*/
      d[1] ? 0 : 1
    );
  }
  i = f(t), n = a[i] = u[i](t);
  let c = (
    /*dismissable*/
    t[1] && vn(t)
  );
  return {
    c() {
      s && s.c(), e = H(), n.c(), r = H(), c && c.c(), l = ae();
    },
    m(d, k) {
      s && s.m(d, k), A(d, e, k), a[i].m(d, k), A(d, r, k), c && c.m(d, k), A(d, l, k), o = !0;
    },
    p(d, k) {
      /*$$slots*/
      d[4].icon ? s ? (s.p(d, k), k & /*$$slots*/
      16 && v(s, 1)) : (s = yn(d), s.c(), v(s, 1), s.m(e.parentNode, e)) : s && (oe(), S(s, 1, 1, () => {
        s = null;
      }), se());
      let g = i;
      i = f(d), i === g ? a[i].p(d, k) : (oe(), S(a[g], 1, 1, () => {
        a[g] = null;
      }), se(), n = a[i], n ? n.p(d, k) : (n = a[i] = u[i](d), n.c()), v(n, 1), n.m(r.parentNode, r)), /*dismissable*/
      d[1] ? c ? (c.p(d, k), k & /*dismissable*/
      2 && v(c, 1)) : (c = vn(d), c.c(), v(c, 1), c.m(l.parentNode, l)) : c && (oe(), S(c, 1, 1, () => {
        c = null;
      }), se());
    },
    i(d) {
      o || (v(s), v(n), v(c), o = !0);
    },
    o(d) {
      S(s), S(n), S(c), o = !1;
    },
    d(d) {
      d && (E(e), E(r), E(l)), s && s.d(d), a[i].d(d), c && c.d(d);
    }
  };
}
function vs(t) {
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
        ys,
        ({ close: l }) => ({ 20: l }),
        ({ close: l }) => l ? 1048576 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new rs({ props: r }), e.$on(
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
      const s = o & /*dismissable, open, $$restProps, divClass*/
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
        32 && Pe(
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
      1310770 && (s.$$scope = { dirty: o, ctx: l }), e.$set(s);
    },
    i(l) {
      i || (v(e.$$.fragment, l), i = !0);
    },
    o(l) {
      S(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function ws(t, e, i) {
  const n = ["open", "dismissable", "defaultClass"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Xe(l);
  let { open: u = !0 } = e, { dismissable: a = !1 } = e, { defaultClass: f = "uikit-p-4 uikit-gap-3 uikit-text-sm" } = e, c;
  const d = je(), k = (P, U) => {
    d("onEnd"), P(U);
  };
  function g(P) {
    j.call(this, t, P);
  }
  function m(P) {
    j.call(this, t, P);
  }
  function p(P) {
    j.call(this, t, P);
  }
  function b(P) {
    j.call(this, t, P);
  }
  function y(P) {
    j.call(this, t, P);
  }
  function w(P) {
    j.call(this, t, P);
  }
  function _(P) {
    j.call(this, t, P);
  }
  function C(P) {
    j.call(this, t, P);
  }
  function T(P) {
    j.call(this, t, P);
  }
  return t.$$set = (P) => {
    i(19, e = M(M({}, e), B(P))), i(5, r = ie(e, n)), "open" in P && i(0, u = P.open), "dismissable" in P && i(1, a = P.dismissable), "defaultClass" in P && i(6, f = P.defaultClass), "$$scope" in P && i(18, o = P.$$scope);
  }, t.$$.update = () => {
    i(2, c = I(f, (s.icon || a) && "uikit-flex uikit-items-center", e.class));
  }, e = B(e), [
    u,
    a,
    c,
    d,
    s,
    r,
    f,
    l,
    k,
    g,
    m,
    p,
    b,
    y,
    w,
    _,
    C,
    T,
    o
  ];
}
class Cs extends re {
  constructor(e) {
    super(), ne(this, e, ws, vs, J, { open: 0, dismissable: 1, defaultClass: 6 });
  }
}
const _t = /^[a-z0-9]+(-[a-z0-9]+)*$/, Zt = (t, e, i, n = "") => {
  const r = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (r.length < 2 || r.length > 3)
      return null;
    n = r.shift().slice(1);
  }
  if (r.length > 3 || !r.length)
    return null;
  if (r.length > 1) {
    const s = r.pop(), u = r.pop(), a = {
      // Allow provider without '@': "provider:prefix:name"
      provider: r.length > 0 ? r[0] : n,
      prefix: u,
      name: s
    };
    return e && !zt(a) ? null : a;
  }
  const l = r[0], o = l.split("-");
  if (o.length > 1) {
    const s = {
      provider: n,
      prefix: o.shift(),
      name: o.join("-")
    };
    return e && !zt(s) ? null : s;
  }
  if (i && n === "") {
    const s = {
      provider: n,
      prefix: "",
      name: l
    };
    return e && !zt(s, i) ? null : s;
  }
  return null;
}, zt = (t, e) => t ? !!((t.provider === "" || t.provider.match(_t)) && (e && t.prefix === "" || t.prefix.match(_t)) && t.name.match(_t)) : !1, xr = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Ut = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), xt = Object.freeze({
  ...xr,
  ...Ut
}), pi = Object.freeze({
  ...xt,
  body: "",
  hidden: !1
});
function Ss(t, e) {
  const i = {};
  !t.hFlip != !e.hFlip && (i.hFlip = !0), !t.vFlip != !e.vFlip && (i.vFlip = !0);
  const n = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return n && (i.rotate = n), i;
}
function wn(t, e) {
  const i = Ss(t, e);
  for (const n in pi)
    n in Ut ? n in t && !(n in i) && (i[n] = Ut[n]) : n in e ? i[n] = e[n] : n in t && (i[n] = t[n]);
  return i;
}
function Ts(t, e) {
  const i = t.icons, n = t.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  function l(o) {
    if (i[o])
      return r[o] = [];
    if (!(o in r)) {
      r[o] = null;
      const s = n[o] && n[o].parent, u = s && l(s);
      u && (r[o] = [s].concat(u));
    }
    return r[o];
  }
  return (e || Object.keys(i).concat(Object.keys(n))).forEach(l), r;
}
function Es(t, e, i) {
  const n = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null);
  let l = {};
  function o(s) {
    l = wn(
      n[s] || r[s],
      l
    );
  }
  return o(e), i.forEach(o), wn(t, l);
}
function $r(t, e) {
  const i = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return i;
  t.not_found instanceof Array && t.not_found.forEach((r) => {
    e(r, null), i.push(r);
  });
  const n = Ts(t);
  for (const r in n) {
    const l = n[r];
    l && (e(r, Es(t, r, l)), i.push(r));
  }
  return i;
}
const As = {
  provider: "",
  aliases: {},
  not_found: {},
  ...xr
};
function ui(t, e) {
  for (const i in e)
    if (i in t && typeof t[i] != typeof e[i])
      return !1;
  return !0;
}
function el(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !ui(t, As))
    return null;
  const i = e.icons;
  for (const r in i) {
    const l = i[r];
    if (!r.match(_t) || typeof l.body != "string" || !ui(
      l,
      pi
    ))
      return null;
  }
  const n = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const r in n) {
    const l = n[r], o = l.parent;
    if (!r.match(_t) || typeof o != "string" || !i[o] && !n[o] || !ui(
      l,
      pi
    ))
      return null;
  }
  return e;
}
const Cn = /* @__PURE__ */ Object.create(null);
function Os(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function xe(t, e) {
  const i = Cn[t] || (Cn[t] = /* @__PURE__ */ Object.create(null));
  return i[e] || (i[e] = Os(t, e));
}
function ji(t, e) {
  return el(e) ? $r(e, (i, n) => {
    n ? t.icons[i] = n : t.missing.add(i);
  }) : [];
}
function Is(t, e, i) {
  try {
    if (typeof i.body == "string")
      return t.icons[e] = { ...i }, !0;
  } catch {
  }
  return !1;
}
let vt = !1;
function tl(t) {
  return typeof t == "boolean" && (vt = t), vt;
}
function Ps(t) {
  const e = typeof t == "string" ? Zt(t, !0, vt) : t;
  if (e) {
    const i = xe(e.provider, e.prefix), n = e.name;
    return i.icons[n] || (i.missing.has(n) ? null : void 0);
  }
}
function Ls(t, e) {
  const i = Zt(t, !0, vt);
  if (!i)
    return !1;
  const n = xe(i.provider, i.prefix);
  return Is(n, i.name, e);
}
function Ms(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), vt && !e && !t.prefix) {
    let r = !1;
    return el(t) && (t.prefix = "", $r(t, (l, o) => {
      o && Ls(l, o) && (r = !0);
    })), r;
  }
  const i = t.prefix;
  if (!zt({
    provider: e,
    prefix: i,
    name: "a"
  }))
    return !1;
  const n = xe(e, i);
  return !!ji(n, t);
}
const il = Object.freeze({
  width: null,
  height: null
}), nl = Object.freeze({
  // Dimensions
  ...il,
  // Transformations
  ...Ut
}), Ns = /(-?[0-9.]*[0-9]+[0-9.]*)/g, zs = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Sn(t, e, i) {
  if (e === 1)
    return t;
  if (i = i || 100, typeof t == "number")
    return Math.ceil(t * e * i) / i;
  if (typeof t != "string")
    return t;
  const n = t.split(Ns);
  if (n === null || !n.length)
    return t;
  const r = [];
  let l = n.shift(), o = zs.test(l);
  for (; ; ) {
    if (o) {
      const s = parseFloat(l);
      isNaN(s) ? r.push(l) : r.push(Math.ceil(s * e * i) / i);
    } else
      r.push(l);
    if (l = n.shift(), l === void 0)
      return r.join("");
    o = !o;
  }
}
const Rs = (t) => t === "unset" || t === "undefined" || t === "none";
function Ds(t, e) {
  const i = {
    ...xt,
    ...t
  }, n = {
    ...nl,
    ...e
  }, r = {
    left: i.left,
    top: i.top,
    width: i.width,
    height: i.height
  };
  let l = i.body;
  [i, n].forEach((g) => {
    const m = [], p = g.hFlip, b = g.vFlip;
    let y = g.rotate;
    p ? b ? y += 2 : (m.push(
      "translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"
    ), m.push("scale(-1 1)"), r.top = r.left = 0) : b && (m.push(
      "translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"
    ), m.push("scale(1 -1)"), r.top = r.left = 0);
    let w;
    switch (y < 0 && (y -= Math.floor(y / 4) * 4), y = y % 4, y) {
      case 1:
        w = r.height / 2 + r.top, m.unshift(
          "rotate(90 " + w.toString() + " " + w.toString() + ")"
        );
        break;
      case 2:
        m.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        w = r.width / 2 + r.left, m.unshift(
          "rotate(-90 " + w.toString() + " " + w.toString() + ")"
        );
        break;
    }
    y % 2 === 1 && (r.left !== r.top && (w = r.left, r.left = r.top, r.top = w), r.width !== r.height && (w = r.width, r.width = r.height, r.height = w)), m.length && (l = '<g transform="' + m.join(" ") + '">' + l + "</g>");
  });
  const o = n.width, s = n.height, u = r.width, a = r.height;
  let f, c;
  o === null ? (c = s === null ? "1em" : s === "auto" ? a : s, f = Sn(c, u / a)) : (f = o === "auto" ? u : o, c = s === null ? Sn(f, a / u) : s === "auto" ? a : s);
  const d = {}, k = (g, m) => {
    Rs(m) || (d[g] = m.toString());
  };
  return k("width", f), k("height", c), d.viewBox = r.left.toString() + " " + r.top.toString() + " " + u.toString() + " " + a.toString(), {
    attributes: d,
    body: l
  };
}
const Bs = /\sid="(\S+)"/g, Fs = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let js = 0;
function Ws(t, e = Fs) {
  const i = [];
  let n;
  for (; n = Bs.exec(t); )
    i.push(n[1]);
  if (!i.length)
    return t;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return i.forEach((l) => {
    const o = typeof e == "function" ? e(l) : e + (js++).toString(), s = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
      "$1" + o + r + "$3"
    );
  }), t = t.replace(new RegExp(r, "g"), ""), t;
}
const yi = /* @__PURE__ */ Object.create(null);
function Us(t, e) {
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
], Rt = [];
for (; ht.length > 0; )
  ht.length === 1 || Math.random() > 0.5 ? Rt.push(ht.shift()) : Rt.push(ht.pop());
Ui[""] = Wi({
  resources: ["https://api.iconify.design"].concat(Rt)
});
function Gs(t, e) {
  const i = Wi(e);
  return i === null ? !1 : (Ui[t] = i, !0);
}
function Gi(t) {
  return Ui[t];
}
const Hs = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let Tn = Hs();
function Vs(t, e) {
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
function qs(t) {
  return t === 404;
}
const Xs = (t, e, i) => {
  const n = [], r = Vs(t, e), l = "icons";
  let o = {
    type: l,
    provider: t,
    prefix: e,
    icons: []
  }, s = 0;
  return i.forEach((u, a) => {
    s += u.length + 1, s >= r && a > 0 && (n.push(o), o = {
      type: l,
      provider: t,
      prefix: e,
      icons: []
    }, s = u.length), o.icons.push(u);
  }), n.push(o), n;
};
function Qs(t) {
  if (typeof t == "string") {
    const e = Gi(t);
    if (e)
      return e.path;
  }
  return "/";
}
const Ks = (t, e, i) => {
  if (!Tn) {
    i("abort", 424);
    return;
  }
  let n = Qs(e.provider);
  switch (e.type) {
    case "icons": {
      const l = e.prefix, s = e.icons.join(","), u = new URLSearchParams({
        icons: s
      });
      n += l + ".json?" + u.toString();
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
        i(qs(o) ? "abort" : "next", o);
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
}, Ys = {
  prepare: Xs,
  send: Ks
};
function Js(t) {
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
    const l = r.provider, o = r.prefix, s = r.name, u = i[l] || (i[l] = /* @__PURE__ */ Object.create(null)), a = u[o] || (u[o] = xe(l, o));
    let f;
    s in a.icons ? f = e.loaded : o === "" || a.missing.has(s) ? f = e.missing : f = e.pending;
    const c = {
      provider: l,
      prefix: o,
      name: s
    };
    f.push(c);
  }), e;
}
function rl(t, e) {
  t.forEach((i) => {
    const n = i.loaderCallbacks;
    n && (i.loaderCallbacks = n.filter((r) => r.id !== e));
  });
}
function Zs(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let i = !1;
    const n = t.provider, r = t.prefix;
    e.forEach((l) => {
      const o = l.icons, s = o.pending.length;
      o.pending = o.pending.filter((u) => {
        if (u.prefix !== r)
          return !0;
        const a = u.name;
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
      }), o.pending.length !== s && (i || rl([t], l.id), l.callback(
        o.loaded.slice(0),
        o.missing.slice(0),
        o.pending.slice(0),
        l.abort
      ));
    });
  }));
}
let xs = 0;
function $s(t, e, i) {
  const n = xs++, r = rl.bind(null, i, n);
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
function eu(t, e = !0, i = !1) {
  const n = [];
  return t.forEach((r) => {
    const l = typeof r == "string" ? Zt(r, e, i) : r;
    l && n.push(l);
  }), n;
}
var tu = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function iu(t, e, i, n) {
  const r = t.resources.length, l = t.random ? Math.floor(Math.random() * r) : t.index;
  let o;
  if (t.random) {
    let T = t.resources.slice(0);
    for (o = []; T.length > 1; ) {
      const P = Math.floor(Math.random() * T.length);
      o.push(T[P]), T = T.slice(0, P).concat(T.slice(P + 1));
    }
    o = o.concat(T);
  } else
    o = t.resources.slice(l).concat(t.resources.slice(0, l));
  const s = Date.now();
  let u = "pending", a = 0, f, c = null, d = [], k = [];
  typeof n == "function" && k.push(n);
  function g() {
    c && (clearTimeout(c), c = null);
  }
  function m() {
    u === "pending" && (u = "aborted"), g(), d.forEach((T) => {
      T.status === "pending" && (T.status = "aborted");
    }), d = [];
  }
  function p(T, P) {
    P && (k = []), typeof T == "function" && k.push(T);
  }
  function b() {
    return {
      startTime: s,
      payload: e,
      status: u,
      queriesSent: a,
      queriesPending: d.length,
      subscribe: p,
      abort: m
    };
  }
  function y() {
    u = "failed", k.forEach((T) => {
      T(void 0, f);
    });
  }
  function w() {
    d.forEach((T) => {
      T.status === "pending" && (T.status = "aborted");
    }), d = [];
  }
  function _(T, P, U) {
    const q = P !== "success";
    switch (d = d.filter((ee) => ee !== T), u) {
      case "pending":
        break;
      case "failed":
        if (q || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (P === "abort") {
      f = U, y();
      return;
    }
    if (q) {
      f = U, d.length || (o.length ? C() : y());
      return;
    }
    if (g(), w(), !t.random) {
      const ee = t.resources.indexOf(T.resource);
      ee !== -1 && ee !== t.index && (t.index = ee);
    }
    u = "completed", k.forEach((ee) => {
      ee(U);
    });
  }
  function C() {
    if (u !== "pending")
      return;
    g();
    const T = o.shift();
    if (T === void 0) {
      if (d.length) {
        c = setTimeout(() => {
          g(), u === "pending" && (w(), y());
        }, t.timeout);
        return;
      }
      y();
      return;
    }
    const P = {
      status: "pending",
      resource: T,
      callback: (U, q) => {
        _(P, U, q);
      }
    };
    d.push(P), a++, c = setTimeout(C, t.rotate), i(T, e, P.callback);
  }
  return setTimeout(C), b;
}
function ll(t) {
  const e = {
    ...tu,
    ...t
  };
  let i = [];
  function n() {
    i = i.filter((s) => s().status === "pending");
  }
  function r(s, u, a) {
    const f = iu(
      e,
      s,
      u,
      (c, d) => {
        n(), a && a(c, d);
      }
    );
    return i.push(f), f;
  }
  function l(s) {
    return i.find((u) => s(u)) || null;
  }
  return {
    query: r,
    find: l,
    setIndex: (s) => {
      e.index = s;
    },
    getIndex: () => e.index,
    cleanup: n
  };
}
function En() {
}
const ai = /* @__PURE__ */ Object.create(null);
function nu(t) {
  if (!ai[t]) {
    const e = Gi(t);
    if (!e)
      return;
    const i = ll(e), n = {
      config: e,
      redundancy: i
    };
    ai[t] = n;
  }
  return ai[t];
}
function ru(t, e, i) {
  let n, r;
  if (typeof t == "string") {
    const l = vi(t);
    if (!l)
      return i(void 0, 424), En;
    r = l.send;
    const o = nu(t);
    o && (n = o.redundancy);
  } else {
    const l = Wi(t);
    if (l) {
      n = ll(l);
      const o = t.resources ? t.resources[0] : "", s = vi(o);
      s && (r = s.send);
    }
  }
  return !n || !r ? (i(void 0, 424), En) : n.query(e, r, i)().abort;
}
const An = "iconify2", wt = "iconify", ol = wt + "-count", On = wt + "-version", sl = 36e5, lu = 168;
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
function In(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function Ci(t, e) {
  return Hi(t, ol, e.toString());
}
function Si(t) {
  return parseInt(wi(t, ol)) || 0;
}
const $t = {
  local: !0,
  session: !0
}, ul = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Vi = !1;
function ou(t) {
  Vi = t;
}
let Lt = typeof window > "u" ? {} : window;
function al(t) {
  const e = t + "Storage";
  try {
    if (Lt && Lt[e] && typeof Lt[e].length == "number")
      return Lt[e];
  } catch {
  }
  $t[t] = !1;
}
function fl(t, e) {
  const i = al(t);
  if (!i)
    return;
  const n = wi(i, On);
  if (n !== An) {
    if (n) {
      const s = Si(i);
      for (let u = 0; u < s; u++)
        In(i, wt + u.toString());
    }
    Hi(i, On, An), Ci(i, 0);
    return;
  }
  const r = Math.floor(Date.now() / sl) - lu, l = (s) => {
    const u = wt + s.toString(), a = wi(i, u);
    if (typeof a == "string") {
      try {
        const f = JSON.parse(a);
        if (typeof f == "object" && typeof f.cached == "number" && f.cached > r && typeof f.provider == "string" && typeof f.data == "object" && typeof f.data.prefix == "string" && // Valid item: run callback
        e(f, s))
          return !0;
      } catch {
      }
      In(i, u);
    }
  };
  let o = Si(i);
  for (let s = o - 1; s >= 0; s--)
    l(s) || (s === o - 1 ? (o--, Ci(i, o)) : ul[t].add(s));
}
function cl() {
  if (!Vi) {
    ou(!0);
    for (const t in $t)
      fl(t, (e) => {
        const i = e.data, n = e.provider, r = i.prefix, l = xe(
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
function su(t, e) {
  const i = t.lastModifiedCached;
  if (
    // Matches or newer
    i && i >= e
  )
    return i === e;
  if (t.lastModifiedCached = e, i)
    for (const n in $t)
      fl(n, (r) => {
        const l = r.data;
        return r.provider !== t.provider || l.prefix !== t.prefix || l.lastModified === e;
      });
  return !0;
}
function uu(t, e) {
  Vi || cl();
  function i(n) {
    let r;
    if (!$t[n] || !(r = al(n)))
      return;
    const l = ul[n];
    let o;
    if (l.size)
      l.delete(o = Array.from(l).shift());
    else if (o = Si(r), !Ci(r, o + 1))
      return;
    const s = {
      cached: Math.floor(Date.now() / sl),
      provider: t.provider,
      data: e
    };
    return Hi(
      r,
      wt + o.toString(),
      JSON.stringify(s)
    );
  }
  e.lastModified && !su(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), i("local") || i("session"));
}
function Pn() {
}
function au(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, Zs(t);
  }));
}
function fu(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: i, prefix: n } = t, r = t.iconsToLoad;
    delete t.iconsToLoad;
    let l;
    if (!r || !(l = vi(i)))
      return;
    l.prepare(i, n, r).forEach((s) => {
      ru(i, s, (u) => {
        if (typeof u != "object")
          s.icons.forEach((a) => {
            t.missing.add(a);
          });
        else
          try {
            const a = ji(
              t,
              u
            );
            if (!a.length)
              return;
            const f = t.pendingIcons;
            f && a.forEach((c) => {
              f.delete(c);
            }), uu(t, u);
          } catch (a) {
            console.error(a);
          }
        au(t);
      });
    });
  }));
}
const cu = (t, e) => {
  const i = eu(t, !0, tl()), n = Js(i);
  if (!n.pending.length) {
    let u = !0;
    return e && setTimeout(() => {
      u && e(
        n.loaded,
        n.missing,
        n.pending,
        Pn
      );
    }), () => {
      u = !1;
    };
  }
  const r = /* @__PURE__ */ Object.create(null), l = [];
  let o, s;
  return n.pending.forEach((u) => {
    const { provider: a, prefix: f } = u;
    if (f === s && a === o)
      return;
    o = a, s = f, l.push(xe(a, f));
    const c = r[a] || (r[a] = /* @__PURE__ */ Object.create(null));
    c[f] || (c[f] = []);
  }), n.pending.forEach((u) => {
    const { provider: a, prefix: f, name: c } = u, d = xe(a, f), k = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    k.has(c) || (k.add(c), r[a][f].push(c));
  }), l.forEach((u) => {
    const { provider: a, prefix: f } = u;
    r[a][f].length && fu(u, r[a][f]);
  }), e ? $s(e, n, l) : Pn;
};
function du(t, e) {
  const i = {
    ...t
  };
  for (const n in e) {
    const r = e[n], l = typeof r;
    n in il ? (r === null || r && (l === "string" || l === "number")) && (i[n] = r) : l === typeof i[n] && (i[n] = n === "rotate" ? r % 4 : r);
  }
  return i;
}
const ku = /[\s,]+/;
function gu(t, e) {
  e.split(ku).forEach((i) => {
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
function mu(t, e = 0) {
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
function hu(t, e) {
  let i = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in e)
    i += " " + n + '="' + e[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + i + ">" + t + "</svg>";
}
function bu(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function _u(t) {
  return "data:image/svg+xml," + bu(t);
}
function pu(t) {
  return 'url("' + _u(t) + '")';
}
const Ln = {
  ...nl,
  inline: !1
}, yu = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, vu = {
  display: "inline-block"
}, Ti = {
  "background-color": "currentColor"
}, dl = {
  "background-color": "transparent"
}, Mn = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Nn = {
  "-webkit-mask": Ti,
  mask: Ti,
  background: dl
};
for (const t in Nn) {
  const e = Nn[t];
  for (const i in Mn)
    e[t + "-" + i] = Mn[i];
}
function wu(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function Cu(t, e) {
  const i = du(Ln, e), n = e.mode || "svg", r = n === "svg" ? { ...yu } : {};
  t.body.indexOf("xlink:") === -1 && delete r["xmlns:xlink"];
  let l = typeof e.style == "string" ? e.style : "";
  for (let b in e) {
    const y = e[b];
    if (y !== void 0)
      switch (b) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          i[b] = y === !0 || y === "true" || y === 1;
          break;
        case "flip":
          typeof y == "string" && gu(i, y);
          break;
        case "color":
          l = l + (l.length > 0 && l.trim().slice(-1) !== ";" ? ";" : "") + "color: " + y + "; ";
          break;
        case "rotate":
          typeof y == "string" ? i[b] = mu(y) : typeof y == "number" && (i[b] = y);
          break;
        case "ariaHidden":
        case "aria-hidden":
          y !== !0 && y !== "true" && delete r["aria-hidden"];
          break;
        default:
          if (b.slice(0, 3) === "on:")
            break;
          Ln[b] === void 0 && (r[b] = y);
      }
  }
  const o = Ds(t, i), s = o.attributes;
  if (i.inline && (l = "vertical-align: -0.125em; " + l), n === "svg") {
    Object.assign(r, s), l !== "" && (r.style = l);
    let b = 0, y = e.id;
    return typeof y == "string" && (y = y.replace(/-/g, "_")), {
      svg: !0,
      attributes: r,
      body: Ws(o.body, y ? () => y + "ID" + b++ : "iconifySvelte")
    };
  }
  const { body: u, width: a, height: f } = t, c = n === "mask" || (n === "bg" ? !1 : u.indexOf("currentColor") !== -1), d = hu(u, {
    ...s,
    width: a + "",
    height: f + ""
  }), g = {
    "--svg": pu(d)
  }, m = (b) => {
    const y = s[b];
    y && (g[b] = wu(y));
  };
  m("width"), m("height"), Object.assign(g, vu, c ? Ti : dl);
  let p = "";
  for (const b in g)
    p += b + ": " + g[b] + ";";
  return r.style = p + l, {
    svg: !1,
    attributes: r
  };
}
tl(!0);
Us("", Ys);
if (typeof document < "u" && typeof window < "u") {
  cl();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, i = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !Ms(n)) && console.error(i);
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
          Gs(i, r) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
function Su(t, e, i, n, r) {
  function l() {
    e.loading && (e.loading.abort(), e.loading = null);
  }
  if (typeof t == "object" && t !== null && typeof t.body == "string")
    return e.name = "", l(), { data: { ...xt, ...t } };
  let o;
  if (typeof t != "string" || (o = Zt(t, !1, !0)) === null)
    return l(), null;
  const s = Ps(o);
  if (!s)
    return i && (!e.loading || e.loading.name !== t) && (l(), e.name = "", e.loading = {
      name: t,
      abort: cu([o], n)
    }), null;
  l(), e.name !== t && (e.name = t, r && !e.destroyed && r(t));
  const u = ["iconify"];
  return o.prefix !== "" && u.push("iconify--" + o.prefix), o.provider !== "" && u.push("iconify--" + o.provider), { data: s, classes: u };
}
function Tu(t, e) {
  return t ? Cu({
    ...xt,
    ...t
  }, e) : null;
}
function zn(t) {
  let e;
  function i(l, o) {
    return (
      /*data*/
      l[0].svg ? Au : Eu
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
      l && E(e), r.d(l);
    }
  };
}
function Eu(t) {
  let e, i = [
    /*data*/
    t[0].attributes
  ], n = {};
  for (let r = 0; r < i.length; r += 1)
    n = M(n, i[r]);
  return {
    c() {
      e = N("span"), ue(e, n);
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
      r && E(e);
    }
  };
}
function Au(t) {
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
      e = he("svg"), Dt(e, r);
    },
    m(l, o) {
      A(l, e, o), e.innerHTML = i;
    },
    p(l, o) {
      o & /*data*/
      1 && i !== (i = /*data*/
      l[0].body + "") && (e.innerHTML = i), Dt(e, r = ce(n, [o & /*data*/
      1 && /*data*/
      l[0].attributes]));
    },
    d(l) {
      l && E(e);
    }
  };
}
function Ou(t) {
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
    i: le,
    o: le,
    d(n) {
      n && E(e), i && i.d(n);
    }
  };
}
function Iu(t, e, i) {
  const n = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let r = !1, l = 0, o;
  const s = (a) => {
    typeof e.onLoad == "function" && e.onLoad(a), je()("load", { icon: a });
  };
  function u() {
    i(3, l++, l);
  }
  return Ke(() => {
    i(2, r = !0);
  }), Xl(() => {
    i(1, n.destroyed = !0, n), n.loading && (n.loading.abort(), i(1, n.loading = null, n));
  }), t.$$set = (a) => {
    i(6, e = M(M({}, e), B(a)));
  }, t.$$.update = () => {
    {
      const a = Su(e.icon, n, r, u, s);
      i(0, o = a ? Tu(a.data, e) : null), o && a.classes && i(
        0,
        o.attributes.class = (typeof e.class == "string" ? e.class + " " : "") + a.classes.join(" "),
        o
      );
    }
  }, e = B(e), [o, n, r, l];
}
class Pu extends re {
  constructor(e) {
    super(), ne(this, e, Iu, Ou, J, {});
  }
}
function Lu(t) {
  let e, i;
  return e = new Pu({
    props: {
      class: I(
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
      2 && (l.class = I(
        "uikit-h-full uikit-w-8 uikit-text-white uikit-bg-black uikit-opacity-30",
        /*className*/
        n[1]
      )), r & /*name*/
      1 && (l.icon = /*name*/
      n[0]), e.$set(l);
    },
    i(n) {
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Mu(t) {
  let e;
  return {
    c() {
      e = N("div"), h(
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
    i: le,
    o: le,
    d(i) {
      i && E(e), t[4](null);
    }
  };
}
function Nu(t) {
  let e, i, n, r;
  const l = [Mu, Lu], o = [];
  function s(u, a) {
    return (
      /*uikit*/
      u[2] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), A(u, n, a), r = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      S(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function zu(t, e, i) {
  let { name: n = "" } = e, { className: r = "" } = e, { uikit: l = !0 } = e, o;
  function s(u) {
    Ee[u ? "unshift" : "push"](() => {
      o = u, i(3, o);
    });
  }
  return t.$$set = (u) => {
    "name" in u && i(0, n = u.name), "className" in u && i(1, r = u.className), "uikit" in u && i(2, l = u.uikit);
  }, t.$$.update = () => {
    t.$$.dirty & /*icondom, name*/
    9 && window && window.uikit_icons && o && window.uikit_icons.FnIcon(o, n);
  }, [n, r, l, o, s];
}
class ei extends re {
  constructor(e) {
    super(), ne(this, e, zu, Nu, J, { name: 0, className: 1, uikit: 2 });
  }
}
function Ru(t) {
  let e, i, n, r;
  return {
    c() {
      e = N("span"), i = be(
        /*mode*/
        t[1]
      ), n = H(), r = be(
        /*info*/
        t[2]
      ), h(e, "class", "uikit-font-medium");
    },
    m(l, o) {
      A(l, e, o), z(e, i), A(l, n, o), A(l, r, o);
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
      l && (E(e), E(n), E(r));
    }
  };
}
function Du(t) {
  let e, i;
  return e = new ei({
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
    p: le,
    i(n) {
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Bu(t) {
  let e, i;
  return e = new Cs({
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
        icon: [Du],
        default: [Ru]
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Fu(t, e, i) {
  let { mode: n = "info" } = e, { info: r = "a default message" } = e, { open: l = !0 } = e, { duration: o = 0 } = e, s = /* @__PURE__ */ new Map([
    ["debug", ""],
    ["info", "blue"],
    ["success", "green"],
    ["warn", "yellow"],
    ["danger", "red"],
    ["dark", "dark"]
  ]);
  const u = je();
  Ke(() => {
    o > 0 && setTimeout(
      () => {
        i(0, l = !1);
      },
      o
    );
  });
  const a = () => {
    u("onEnd");
  };
  return t.$$set = (f) => {
    "mode" in f && i(1, n = f.mode), "info" in f && i(2, r = f.info), "open" in f && i(0, l = f.open), "duration" in f && i(5, o = f.duration);
  }, [l, n, r, s, u, o, a];
}
class ju extends re {
  constructor(e) {
    super(), ne(this, e, Fu, Bu, J, { mode: 1, info: 2, open: 0, duration: 5 });
  }
}
const Rn = "uikit_msg_panel";
let fi = 0;
const Gd = (t, e, i) => {
  fi += 1;
  let n = window.document.getElementById(Rn);
  n || (n = window.document.createElement("div"), n.id = Rn, n.style.position = "absolute", n.style.top = "5px", n.style.right = "5px", n.style.display = "flex", n.style.flexDirection = "column", n.style.rowGap = "10px", n.style.zIndex = "100", document.body.appendChild(n)), t || (t = window.document.createElement("div"), n.appendChild(t));
  const r = new ju({
    target: t,
    props: {
      ...e
    }
  });
  if (r.$on("onEnd", () => {
    r.$destroy(), fi -= 1, fi == 0 && document.body.removeChild(n);
  }), i)
    for (let l in i) {
      let o = i[l];
      r.$on(l, (s) => {
        o(s.detail);
      });
    }
  return r;
};
function Wu(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[8].default
  ), r = X(
    n,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = N("div"), r && r.c(), h(
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
      128) && K(
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
        ) : Y(
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
      i || (v(r, l), i = !0);
    },
    o(l) {
      S(r, l), i = !1;
    },
    d(l) {
      l && E(e), r && r.d(l);
    }
  };
}
function Uu(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e;
  const l = Xe(n);
  let { color: o = "gray" } = e, { rounded: s = !1 } = e, { size: u = "md" } = e, { border: a = !1 } = e, { placement: f = void 0 } = e, { offset: c = !0 } = e;
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
  let p;
  return t.$$set = (b) => {
    i(13, e = M(M({}, e), B(b))), "color" in b && i(1, o = b.color), "rounded" in b && i(2, s = b.rounded), "size" in b && i(3, u = b.size), "border" in b && i(4, a = b.border), "placement" in b && i(5, f = b.placement), "offset" in b && i(6, c = b.offset), "$$scope" in b && i(7, r = b.$$scope);
  }, t.$$.update = () => {
    i(0, p = I("uikit-flex-shrink-0", s ? "uikit-rounded" : "uikit-rounded-full", a && "uikit-border-2 uikit-border-white dark:uikit-border-gray-800", k[u], d[o], l.default && "uikit-inline-flex uikit-items-center uikit-justify-center", f && "uikit-absolute " + g[f], f && c && m[f], e.class));
  }, e = B(e), [p, o, s, u, a, f, c, r, n];
}
class qi extends re {
  constructor(e) {
    super(), ne(this, e, Uu, Wu, J, {
      color: 1,
      rounded: 2,
      size: 3,
      border: 4,
      placement: 5,
      offset: 6
    });
  }
}
function Gu(t) {
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
      e = N("img"), ue(e, r);
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
        2 && !ki(e.src, i = /*src*/
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
    i: le,
    o: le,
    d(l) {
      l && E(e);
    }
  };
}
function Hu(t) {
  let e = (
    /*href*/
    t[2] ? "a" : "div"
  ), i, n, r = (
    /*href*/
    (t[2] ? "a" : "div") && ci(t)
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
      l[2], e ? J(
        e,
        /*href*/
        l[2] ? "a" : "div"
      ) ? (r.d(1), r = ci(l), e = /*href*/
      l[2] ? "a" : "div", r.c(), r.m(i.parentNode, i)) : r.p(l, o) : (r = ci(l), e = /*href*/
      l[2] ? "a" : "div", r.c(), r.m(i.parentNode, i));
    },
    i(l) {
      n || (v(r, l), n = !0);
    },
    o(l) {
      S(r, l), n = !1;
    },
    d(l) {
      l && E(i), r && r.d(l);
    }
  };
}
function Vu(t) {
  let e;
  const i = (
    /*#slots*/
    t[12].default
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[11],
    null
  ), r = n || Xu(t);
  return {
    c() {
      r && r.c();
    },
    m(l, o) {
      r && r.m(l, o), e = !0;
    },
    p(l, o) {
      n ? n.p && (!e || o & /*$$scope*/
      2048) && K(
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
        ) : Y(
          /*$$scope*/
          l[11]
        ),
        null
      ) : r && r.p && (!e || o & /*rounded*/
      8) && r.p(l, e ? o : -1);
    },
    i(l) {
      e || (v(r, l), e = !0);
    },
    o(l) {
      S(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function qu(t) {
  let e, i, n;
  return {
    c() {
      e = N("img"), h(
        e,
        "alt",
        /*alt*/
        t[4]
      ), ki(e.src, i = /*src*/
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
      2 && !ki(e.src, i = /*src*/
      r[1]) && h(e, "src", i), l & /*rounded*/
      8 && n !== (n = /*rounded*/
      r[3] ? "uikit-rounded-full" : "uikit-rounded") && h(e, "class", n);
    },
    i: le,
    o: le,
    d(r) {
      r && E(e);
    }
  };
}
function Xu(t) {
  let e, i, n;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "fill-rule", "evenodd"), h(i, "d", "M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"), h(i, "clip-rule", "evenodd"), h(e, "class", n = "uikit-w-full uikit-h-full " + /*rounded*/
      (t[3] ? "uikit-rounded-full" : "uikit-rounded")), h(e, "fill", "currentColor"), h(e, "viewBox", "0 0 16 16"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(r, l) {
      A(r, e, l), z(e, i);
    },
    p(r, l) {
      l & /*rounded*/
      8 && n !== (n = "uikit-w-full uikit-h-full " + /*rounded*/
      (r[3] ? "uikit-rounded-full" : "uikit-rounded")) && h(e, "class", n);
    },
    d(r) {
      r && E(e);
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
      const s = o & /*rounded, dot*/
      9 ? ce(n, [
        n[0],
        o & /*rounded*/
        8 && { offset: (
          /*rounded*/
          l[3]
        ) },
        o & /*dot*/
        1 && Pe(
          /*dot*/
          l[0]
        )
      ]) : {};
      e.$set(s);
    },
    i(l) {
      i || (v(e.$$.fragment, l), i = !0);
    },
    o(l) {
      S(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function ci(t) {
  let e, i, n, r, l, o;
  const s = [qu, Vu], u = [];
  function a(k, g) {
    return (
      /*src*/
      k[1] ? 0 : 1
    );
  }
  i = a(t), n = u[i] = s[i](t);
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
      e = N(
        /*href*/
        t[2] ? "a" : "div"
      ), n.c(), r = H(), f && f.c(), ft(
        /*href*/
        t[2] ? "a" : "div"
      )(e, d);
    },
    m(k, g) {
      A(k, e, g), u[i].m(e, null), z(e, r), f && f.m(e, null), o = !0;
    },
    p(k, g) {
      let m = i;
      i = a(k), i === m ? u[i].p(k, g) : (oe(), S(u[m], 1, 1, () => {
        u[m] = null;
      }), se(), n = u[i], n ? n.p(k, g) : (n = u[i] = s[i](k), n.c()), v(n, 1), n.m(e, r)), /*dot*/
      k[0] ? f ? (f.p(k, g), g & /*dot*/
      1 && v(f, 1)) : (f = Dn(k), f.c(), v(f, 1), f.m(e, null)) : f && (oe(), S(f, 1, 1, () => {
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
      o || (v(n), v(f), o = !0);
    },
    o(k) {
      S(n), S(f), o = !1;
    },
    d(k) {
      k && E(e), u[i].d(), f && f.d();
    }
  };
}
function Qu(t) {
  let e, i, n, r;
  const l = [Hu, Gu], o = [];
  function s(u, a) {
    return !/*src*/
    u[1] || /*href*/
    u[2] || /*$$slots*/
    u[6].default || /*dot*/
    u[0] ? 0 : 1;
  }
  return e = s(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), A(u, n, a), r = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      S(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function Ku(t, e, i) {
  const n = ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Xe(l);
  let { src: u = "" } = e, { href: a = void 0 } = e, { rounded: f = !1 } = e, { border: c = !1 } = e, { stacked: d = !1 } = e, { dot: k = void 0 } = e, { alt: g = "" } = e, { size: m = "md" } = e;
  const p = {
    xs: "uikit-w-6 uikit-h-6",
    sm: "uikit-w-8 uikit-h-8",
    md: "uikit-w-10 uikit-h-10",
    lg: "uikit-w-20 uikit-h-20",
    xl: "uikit-w-36 uikit-h-36",
    none: ""
  };
  let b;
  return t.$$set = (y) => {
    i(14, e = M(M({}, e), B(y))), i(7, r = ie(e, n)), "src" in y && i(1, u = y.src), "href" in y && i(2, a = y.href), "rounded" in y && i(3, f = y.rounded), "border" in y && i(8, c = y.border), "stacked" in y && i(9, d = y.stacked), "dot" in y && i(0, k = y.dot), "alt" in y && i(4, g = y.alt), "size" in y && i(10, m = y.size), "$$scope" in y && i(11, o = y.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*dot*/
    1 && i(0, k = k && {
      placement: "top-right",
      color: "gray",
      size: "lg",
      ...k
    }), i(5, b = I(f ? "uikit-rounded-full" : "uikit-rounded", c && "uikit-p-1 uikit-ring-2 uikit-ring-gray-300 dark:uikit-ring-gray-500", p[m], d && "uikit-border-2 -uikit-ms-4 uikit-border-white dark:uikit-border-gray-800", "uikit-bg-gray-100 dark:uikit-bg-gray-600 uikit-text-gray-600 dark:uikit-text-gray-300", e.class));
  }, e = B(e), [
    k,
    u,
    a,
    f,
    g,
    b,
    s,
    r,
    c,
    d,
    m,
    o,
    l
  ];
}
class kl extends re {
  constructor(e) {
    super(), ne(this, e, Ku, Qu, J, {
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
function Yu(t) {
  let e, i;
  const n = [
    /*$$props*/
    t[2]
  ];
  let r = {};
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new kl({ props: r }), {
    c() {
      $(e.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), i = !0;
    },
    p(l, o) {
      const s = o & /*$$props*/
      4 ? ce(n, [Pe(
        /*$$props*/
        l[2]
      )]) : {};
      e.$set(s);
    },
    i(l) {
      i || (v(e.$$.fragment, l), i = !0);
    },
    o(l) {
      S(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function Ju(t) {
  let e, i;
  const n = [
    /*$$props*/
    t[2]
  ];
  let r = {
    $$slots: { default: [Zu] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new kl({ props: r }), {
    c() {
      $(e.$$.fragment);
    },
    m(l, o) {
      Z(e, l, o), i = !0;
    },
    p(l, o) {
      const s = o & /*$$props*/
      4 ? ce(n, [Pe(
        /*$$props*/
        l[2]
      )]) : {};
      o & /*$$scope, domdefault*/
      34 && (s.$$scope = { dirty: o, ctx: l }), e.$set(s);
    },
    i(l) {
      i || (v(e.$$.fragment, l), i = !0);
    },
    o(l) {
      S(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function Zu(t) {
  let e;
  return {
    c() {
      e = N("div");
    },
    m(i, n) {
      A(i, e, n), t[3](e);
    },
    p: le,
    d(i) {
      i && E(e), t[3](null);
    }
  };
}
function xu(t) {
  let e, i, n, r;
  const l = [Ju, Yu], o = [];
  function s(u, a) {
    return (
      /*slotdefault*/
      u[0] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), A(u, n, a), r = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      S(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function $u(t, e, i) {
  let { slotdefault: n } = e, r;
  const l = () => {
    n && r && (i(1, r.innerHTML = "", r), r.appendChild(n));
  };
  Ke(() => {
    l();
  });
  function o(s) {
    Ee[s ? "unshift" : "push"](() => {
      r = s, i(1, r);
    });
  }
  return t.$$set = (s) => {
    i(2, e = M(M({}, e), B(s))), "slotdefault" in s && i(0, n = s.slotdefault);
  }, t.$$.update = () => {
    t.$$.dirty & /*slotdefault, domdefault*/
    3 && n && r && l();
  }, e = B(e), [n, r, e, o];
}
class ea extends re {
  constructor(e) {
    super(), ne(this, e, $u, xu, J, { slotdefault: 0 });
  }
}
const Hd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new ea({
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
function ta(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d, k, g, m, p, b, y, w, _;
  const C = (
    /*#slots*/
    t[9].default
  ), T = X(
    C,
    t,
    /*$$scope*/
    t[8],
    null
  );
  return {
    c() {
      e = N("div"), i = N("div"), r = H(), l = N("div"), s = H(), u = N("div"), f = H(), c = N("div"), k = H(), g = N("div"), p = H(), b = N("div"), T && T.c(), h(i, "class", n = I(
        /*top*/
        t[2],
        /*$$props*/
        t[7].classTop
      )), h(l, "class", o = I(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[7].classLeftTop
      )), h(u, "class", a = I(
        /*leftMid*/
        t[4],
        /*$$props*/
        t[7].classLeftMid
      )), h(c, "class", d = I(
        /*leftBot*/
        t[5],
        /*$$props*/
        t[7].classLeftBot
      )), h(g, "class", m = I(
        /*right*/
        t[6],
        /*$$props*/
        t[7].classRight
      )), h(b, "class", y = I(
        /*slot*/
        t[1],
        /*$$props*/
        t[7].classSlot
      )), h(e, "class", w = I(
        /*div*/
        t[0],
        /*$$props*/
        t[7].class
      ));
    },
    m(P, U) {
      A(P, e, U), z(e, i), z(e, r), z(e, l), z(e, s), z(e, u), z(e, f), z(e, c), z(e, k), z(e, g), z(e, p), z(e, b), T && T.m(b, null), _ = !0;
    },
    p(P, [U]) {
      (!_ || U & /*top, $$props*/
      132 && n !== (n = I(
        /*top*/
        P[2],
        /*$$props*/
        P[7].classTop
      ))) && h(i, "class", n), (!_ || U & /*leftTop, $$props*/
      136 && o !== (o = I(
        /*leftTop*/
        P[3],
        /*$$props*/
        P[7].classLeftTop
      ))) && h(l, "class", o), (!_ || U & /*leftMid, $$props*/
      144 && a !== (a = I(
        /*leftMid*/
        P[4],
        /*$$props*/
        P[7].classLeftMid
      ))) && h(u, "class", a), (!_ || U & /*leftBot, $$props*/
      160 && d !== (d = I(
        /*leftBot*/
        P[5],
        /*$$props*/
        P[7].classLeftBot
      ))) && h(c, "class", d), (!_ || U & /*right, $$props*/
      192 && m !== (m = I(
        /*right*/
        P[6],
        /*$$props*/
        P[7].classRight
      ))) && h(g, "class", m), T && T.p && (!_ || U & /*$$scope*/
      256) && K(
        T,
        C,
        P,
        /*$$scope*/
        P[8],
        _ ? Q(
          C,
          /*$$scope*/
          P[8],
          U,
          null
        ) : Y(
          /*$$scope*/
          P[8]
        ),
        null
      ), (!_ || U & /*slot, $$props*/
      130 && y !== (y = I(
        /*slot*/
        P[1],
        /*$$props*/
        P[7].classSlot
      ))) && h(b, "class", y), (!_ || U & /*div, $$props*/
      129 && w !== (w = I(
        /*div*/
        P[0],
        /*$$props*/
        P[7].class
      ))) && h(e, "class", w);
    },
    i(P) {
      _ || (v(T, P), _ = !0);
    },
    o(P) {
      S(T, P), _ = !1;
    },
    d(P) {
      P && E(e), T && T.d(P);
    }
  };
}
function ia(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-xl uikit-h-[600px] uikit-w-[300px] uikit-shadow-xl" } = e, { slot: o = "uikit-rounded-xl uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: s = "uikit-w-[148px] uikit-h-[18px] uikit-bg-gray-800 uikit-top-0 uikit-rounded-b-[1rem] uikit-left-1/2 -uikit-translate-x-1/2 uikit-absolute" } = e, { leftTop: u = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftMid: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: f = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: c = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (d) => {
    i(7, e = M(M({}, e), B(d))), "div" in d && i(0, l = d.div), "slot" in d && i(1, o = d.slot), "top" in d && i(2, s = d.top), "leftTop" in d && i(3, u = d.leftTop), "leftMid" in d && i(4, a = d.leftMid), "leftBot" in d && i(5, f = d.leftBot), "right" in d && i(6, c = d.right), "$$scope" in d && i(8, r = d.$$scope);
  }, e = B(e), [l, o, s, u, a, f, c, e, r, n];
}
class na extends re {
  constructor(e) {
    super(), ne(this, e, ia, ta, J, {
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
function ra(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d, k, g, m, p, b;
  const y = (
    /*#slots*/
    t[8].default
  ), w = X(
    y,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = N("div"), i = N("div"), r = H(), l = N("div"), s = H(), u = N("div"), f = H(), c = N("div"), k = H(), g = N("div"), w && w.c(), h(i, "class", n = I(
        /*top*/
        t[2],
        /*$$props*/
        t[6].classTop
      )), h(l, "class", o = I(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[6].classLeftTop
      )), h(u, "class", a = I(
        /*leftBot*/
        t[4],
        /*$$props*/
        t[6].classLeftBot
      )), h(c, "class", d = I(
        /*right*/
        t[5],
        /*$$props*/
        t[6].classRight
      )), h(g, "class", m = I(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(e, "class", p = I(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      ));
    },
    m(_, C) {
      A(_, e, C), z(e, i), z(e, r), z(e, l), z(e, s), z(e, u), z(e, f), z(e, c), z(e, k), z(e, g), w && w.m(g, null), b = !0;
    },
    p(_, [C]) {
      (!b || C & /*top, $$props*/
      68 && n !== (n = I(
        /*top*/
        _[2],
        /*$$props*/
        _[6].classTop
      ))) && h(i, "class", n), (!b || C & /*leftTop, $$props*/
      72 && o !== (o = I(
        /*leftTop*/
        _[3],
        /*$$props*/
        _[6].classLeftTop
      ))) && h(l, "class", o), (!b || C & /*leftBot, $$props*/
      80 && a !== (a = I(
        /*leftBot*/
        _[4],
        /*$$props*/
        _[6].classLeftBot
      ))) && h(u, "class", a), (!b || C & /*right, $$props*/
      96 && d !== (d = I(
        /*right*/
        _[5],
        /*$$props*/
        _[6].classRight
      ))) && h(c, "class", d), w && w.p && (!b || C & /*$$scope*/
      128) && K(
        w,
        y,
        _,
        /*$$scope*/
        _[7],
        b ? Q(
          y,
          /*$$scope*/
          _[7],
          C,
          null
        ) : Y(
          /*$$scope*/
          _[7]
        ),
        null
      ), (!b || C & /*slot, $$props*/
      66 && m !== (m = I(
        /*slot*/
        _[1],
        /*$$props*/
        _[6].classSlot
      ))) && h(g, "class", m), (!b || C & /*div, $$props*/
      65 && p !== (p = I(
        /*div*/
        _[0],
        /*$$props*/
        _[6].class
      ))) && h(e, "class", p);
    },
    i(_) {
      b || (v(w, _), b = !0);
    },
    o(_) {
      S(w, _), b = !1;
    },
    d(_) {
      _ && E(e), w && w.d(_);
    }
  };
}
function la(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[600px] uikit-w-[300px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: s = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftTop: u = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -luikit-eft-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = M(M({}, e), B(c))), "div" in c && i(0, l = c.div), "slot" in c && i(1, o = c.slot), "top" in c && i(2, s = c.top), "leftTop" in c && i(3, u = c.leftTop), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, r = c.$$scope);
  }, e = B(e), [l, o, s, u, a, f, e, r, n];
}
class oa extends re {
  constructor(e) {
    super(), ne(this, e, la, ra, J, {
      div: 0,
      slot: 1,
      top: 2,
      leftTop: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function sa(t) {
  let e, i, n, r, l, o, s, u, a, f, c;
  const d = (
    /*#slots*/
    t[6].default
  ), k = X(
    d,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      e = N("div"), i = N("div"), k && k.c(), l = H(), o = N("div"), u = H(), a = N("div"), h(i, "class", n = I(
        /*inner*/
        t[0],
        /*$$props*/
        t[4].classInner
      )), h(e, "class", r = I(
        /*div*/
        t[3],
        /*$$props*/
        t[4].class
      )), h(o, "class", s = I(
        /*bot*/
        t[1],
        /*$$props*/
        t[4].classBot
      )), h(a, "class", f = I(
        /*botUnder*/
        t[2],
        /*$$props*/
        t[4].classBotUnder
      ));
    },
    m(g, m) {
      A(g, e, m), z(e, i), k && k.m(i, null), A(g, l, m), A(g, o, m), A(g, u, m), A(g, a, m), c = !0;
    },
    p(g, [m]) {
      k && k.p && (!c || m & /*$$scope*/
      32) && K(
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
        ) : Y(
          /*$$scope*/
          g[5]
        ),
        null
      ), (!c || m & /*inner, $$props*/
      17 && n !== (n = I(
        /*inner*/
        g[0],
        /*$$props*/
        g[4].classInner
      ))) && h(i, "class", n), (!c || m & /*div, $$props*/
      24 && r !== (r = I(
        /*div*/
        g[3],
        /*$$props*/
        g[4].class
      ))) && h(e, "class", r), (!c || m & /*bot, $$props*/
      18 && s !== (s = I(
        /*bot*/
        g[1],
        /*$$props*/
        g[4].classBot
      ))) && h(o, "class", s), (!c || m & /*botUnder, $$props*/
      20 && f !== (f = I(
        /*botUnder*/
        g[2],
        /*$$props*/
        g[4].classBotUnder
      ))) && h(a, "class", f);
    },
    i(g) {
      c || (v(k, g), c = !0);
    },
    o(g) {
      S(k, g), c = !1;
    },
    d(g) {
      g && (E(e), E(l), E(o), E(u), E(a)), k && k.d(g);
    }
  };
}
function ua(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { inner: l = "uikit-rounded-xl uikit-overflow-hidden uikit-h-[140px] md:uikit-h-[262px]" } = e, { bot: o = "uikit-relative uikit-mx-auto uikit-bg-gray-900 dark:uikit-bg-gray-700 uikit-rounded-b-xl uikit-h-[24px] uikit-max-w-[301px] md:uikit-h-[42px] md:uikit-max-w-[512px]" } = e, { botUnder: s = "uikit-relative uikit-mx-auto uikit-bg-gray-800 uikit-rounded-b-xl uikit-h-[55px] uikit-max-w-[83px] md:uikit-h-[95px] md:uikit-max-w-[142px]" } = e, { div: u = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[16px] uikit-rounded-t-xl uikit-h-[172px] uikit-max-w-[301px] md:uikit-h-[294px] md:uikit-max-w-[512px]" } = e;
  return t.$$set = (a) => {
    i(4, e = M(M({}, e), B(a))), "inner" in a && i(0, l = a.inner), "bot" in a && i(1, o = a.bot), "botUnder" in a && i(2, s = a.botUnder), "div" in a && i(3, u = a.div), "$$scope" in a && i(5, r = a.$$scope);
  }, e = B(e), [l, o, s, u, e, r, n];
}
class aa extends re {
  constructor(e) {
    super(), ne(this, e, ua, sa, J, { inner: 0, bot: 1, botUnder: 2, div: 3 });
  }
}
function fa(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d, k, g, m, p, b;
  const y = (
    /*#slots*/
    t[8].default
  ), w = X(
    y,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = N("div"), i = N("div"), r = H(), l = N("div"), s = H(), u = N("div"), f = H(), c = N("div"), k = H(), g = N("div"), w && w.c(), h(i, "class", n = I(
        /*top*/
        t[2],
        /*$$props*/
        t[6].classTop
      )), h(l, "class", o = I(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[6].classLeftTop
      )), h(u, "class", a = I(
        /*leftBot*/
        t[4],
        /*$$props*/
        t[6].classLeftBot
      )), h(c, "class", d = I(
        /*right*/
        t[5],
        /*$$props*/
        t[6].classRight
      )), h(g, "class", m = I(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(e, "class", p = I(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      ));
    },
    m(_, C) {
      A(_, e, C), z(e, i), z(e, r), z(e, l), z(e, s), z(e, u), z(e, f), z(e, c), z(e, k), z(e, g), w && w.m(g, null), b = !0;
    },
    p(_, [C]) {
      (!b || C & /*top, $$props*/
      68 && n !== (n = I(
        /*top*/
        _[2],
        /*$$props*/
        _[6].classTop
      ))) && h(i, "class", n), (!b || C & /*leftTop, $$props*/
      72 && o !== (o = I(
        /*leftTop*/
        _[3],
        /*$$props*/
        _[6].classLeftTop
      ))) && h(l, "class", o), (!b || C & /*leftBot, $$props*/
      80 && a !== (a = I(
        /*leftBot*/
        _[4],
        /*$$props*/
        _[6].classLeftBot
      ))) && h(u, "class", a), (!b || C & /*right, $$props*/
      96 && d !== (d = I(
        /*right*/
        _[5],
        /*$$props*/
        _[6].classRight
      ))) && h(c, "class", d), w && w.p && (!b || C & /*$$scope*/
      128) && K(
        w,
        y,
        _,
        /*$$scope*/
        _[7],
        b ? Q(
          y,
          /*$$scope*/
          _[7],
          C,
          null
        ) : Y(
          /*$$scope*/
          _[7]
        ),
        null
      ), (!b || C & /*slot, $$props*/
      66 && m !== (m = I(
        /*slot*/
        _[1],
        /*$$props*/
        _[6].classSlot
      ))) && h(g, "class", m), (!b || C & /*div, $$props*/
      65 && p !== (p = I(
        /*div*/
        _[0],
        /*$$props*/
        _[6].class
      ))) && h(e, "class", p);
    },
    i(_) {
      b || (v(w, _), b = !0);
    },
    o(_) {
      S(w, _), b = !1;
    },
    d(_) {
      _ && E(e), w && w.d(_);
    }
  };
}
function ca(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[600px] uikit-w-[300px] uikit-shadow-xl" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: s = "uikit-w-[148px] uikit-h-[18px] uikit-bg-gray-800 uikit-top-0 uikit-rounded-b-[1rem] uikit-left-1/2 -uikit-translate-x-1/2 uikit-absolute" } = e, { leftTop: u = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = M(M({}, e), B(c))), "div" in c && i(0, l = c.div), "slot" in c && i(1, o = c.slot), "top" in c && i(2, s = c.top), "leftTop" in c && i(3, u = c.leftTop), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, r = c.$$scope);
  }, e = B(e), [l, o, s, u, a, f, e, r, n];
}
class da extends re {
  constructor(e) {
    super(), ne(this, e, ca, fa, J, {
      div: 0,
      slot: 1,
      top: 2,
      leftTop: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function ka(t) {
  let e, i, n, r, l, o, s, u, a, f;
  const c = (
    /*#slots*/
    t[6].default
  ), d = X(
    c,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      e = N("div"), i = N("div"), d && d.c(), l = H(), o = N("div"), s = N("div"), h(i, "class", n = I(
        /*inner*/
        t[1],
        /*$$props*/
        t[4].classInner
      )), h(e, "class", r = I(
        /*div*/
        t[0],
        /*$$props*/
        t[4].class
      )), h(s, "class", u = I(
        /*botCen*/
        t[3],
        /*$$props*/
        t[4].classBotCen
      )), h(o, "class", a = I(
        /*bot*/
        t[2],
        /*$$props*/
        t[4].classBot
      ));
    },
    m(k, g) {
      A(k, e, g), z(e, i), d && d.m(i, null), A(k, l, g), A(k, o, g), z(o, s), f = !0;
    },
    p(k, [g]) {
      d && d.p && (!f || g & /*$$scope*/
      32) && K(
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
        ) : Y(
          /*$$scope*/
          k[5]
        ),
        null
      ), (!f || g & /*inner, $$props*/
      18 && n !== (n = I(
        /*inner*/
        k[1],
        /*$$props*/
        k[4].classInner
      ))) && h(i, "class", n), (!f || g & /*div, $$props*/
      17 && r !== (r = I(
        /*div*/
        k[0],
        /*$$props*/
        k[4].class
      ))) && h(e, "class", r), (!f || g & /*botCen, $$props*/
      24 && u !== (u = I(
        /*botCen*/
        k[3],
        /*$$props*/
        k[4].classBotCen
      ))) && h(s, "class", u), (!f || g & /*bot, $$props*/
      20 && a !== (a = I(
        /*bot*/
        k[2],
        /*$$props*/
        k[4].classBot
      ))) && h(o, "class", a);
    },
    i(k) {
      f || (v(d, k), f = !0);
    },
    o(k) {
      S(d, k), f = !1;
    },
    d(k) {
      k && (E(e), E(l), E(o)), d && d.d(k);
    }
  };
}
function ga(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[8px] uikit-rounded-t-xl uikit-h-[172px] uikit-max-w-[301px] md:uikit-h-[294px] md:uikit-max-w-[512px]" } = e, { inner: o = "uikit-rounded-lg uikit-overflow-hidden uikit-h-[156px] md:uikit-h-[278px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { bot: s = "uikit-relative uikit-mx-auto uikit-bg-gray-900 dark:uikit-bg-gray-700 uikit-rounded-b-xl uikit-rounded-t-sm uikit-h-[17px] uikit-max-w-[351px] md:uikit-h-[21px] md:uikit-max-w-[597px]" } = e, { botCen: u = "uikit-absolute uikit-left-1/2 uikit-top-0 -uikit-translate-x-1/2 uikit-rounded-b-xl uikit-w-[56px] uikit-h-[5px] md:uikit-w-[96px] md:uikit-h-[8px] uikit-bg-gray-800" } = e;
  return t.$$set = (a) => {
    i(4, e = M(M({}, e), B(a))), "div" in a && i(0, l = a.div), "inner" in a && i(1, o = a.inner), "bot" in a && i(2, s = a.bot), "botCen" in a && i(3, u = a.botCen), "$$scope" in a && i(5, r = a.$$scope);
  }, e = B(e), [l, o, s, u, e, r, n];
}
class ma extends re {
  constructor(e) {
    super(), ne(this, e, ga, ka, J, { div: 0, inner: 1, bot: 2, botCen: 3 });
  }
}
function ha(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d, k, g, m, p, b;
  const y = (
    /*#slots*/
    t[8].default
  ), w = X(
    y,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = N("div"), n = H(), r = N("div"), l = N("div"), s = H(), u = N("div"), f = H(), c = N("div"), w && w.c(), g = H(), m = N("div"), h(e, "class", i = I(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      )), h(l, "class", o = I(
        /*rightTop*/
        t[2],
        /*$$props*/
        t[6].classRightTop
      )), h(u, "class", a = I(
        /*rightBot*/
        t[3],
        /*$$props*/
        t[6].classRightBot
      )), h(c, "class", d = I(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(r, "class", k = I(
        /*top*/
        t[4],
        /*$$props*/
        t[6].classTop
      )), h(m, "class", p = I(
        /*bot*/
        t[5],
        /*$$props*/
        t[6].classBot
      ));
    },
    m(_, C) {
      A(_, e, C), A(_, n, C), A(_, r, C), z(r, l), z(r, s), z(r, u), z(r, f), z(r, c), w && w.m(c, null), A(_, g, C), A(_, m, C), b = !0;
    },
    p(_, [C]) {
      (!b || C & /*div, $$props*/
      65 && i !== (i = I(
        /*div*/
        _[0],
        /*$$props*/
        _[6].class
      ))) && h(e, "class", i), (!b || C & /*rightTop, $$props*/
      68 && o !== (o = I(
        /*rightTop*/
        _[2],
        /*$$props*/
        _[6].classRightTop
      ))) && h(l, "class", o), (!b || C & /*rightBot, $$props*/
      72 && a !== (a = I(
        /*rightBot*/
        _[3],
        /*$$props*/
        _[6].classRightBot
      ))) && h(u, "class", a), w && w.p && (!b || C & /*$$scope*/
      128) && K(
        w,
        y,
        _,
        /*$$scope*/
        _[7],
        b ? Q(
          y,
          /*$$scope*/
          _[7],
          C,
          null
        ) : Y(
          /*$$scope*/
          _[7]
        ),
        null
      ), (!b || C & /*slot, $$props*/
      66 && d !== (d = I(
        /*slot*/
        _[1],
        /*$$props*/
        _[6].classSlot
      ))) && h(c, "class", d), (!b || C & /*top, $$props*/
      80 && k !== (k = I(
        /*top*/
        _[4],
        /*$$props*/
        _[6].classTop
      ))) && h(r, "class", k), (!b || C & /*bot, $$props*/
      96 && p !== (p = I(
        /*bot*/
        _[5],
        /*$$props*/
        _[6].classBot
      ))) && h(m, "class", p);
    },
    i(_) {
      b || (v(w, _), b = !0);
    },
    o(_) {
      S(w, _), b = !1;
    },
    d(_) {
      _ && (E(e), E(n), E(r), E(g), E(m)), w && w.d(_);
    }
  };
}
function ba(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-bg-gray-800 dark:uikit-bg-gray-700 uikit-rounded-t-[2.5rem] uikit-h-[63px] uikit-max-w-[133px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-h-[193px] uikit-w-[188px]" } = e, { rightTop: s = "uikit-h-[41px] uikit-w-[6px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[16px] uikit-top-[40px] uikit-rounded-r-lg" } = e, { rightBot: u = "uikit-h-[32px] uikit-w-[6px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[16px] uikit-top-[88px] uikit-rounded-r-lg" } = e, { top: a = "uikit-relative uikit-mx-auto uikit-border-gray-900 dark:uikit-bg-gray-800 dark:uikit-border-gray-800 uikit-border-[10px] uikit-rounded-[2.5rem] uikit-h-[213px] uikit-w-[208px]" } = e, { bot: f = "uikit-relative uikit-mx-auto uikit-bg-gray-800 dark:uikit-bg-gray-700 uikit-rounded-b-[2.5rem] uikit-h-[63px] uikit-max-w-[133px]" } = e;
  return t.$$set = (c) => {
    i(6, e = M(M({}, e), B(c))), "div" in c && i(0, l = c.div), "slot" in c && i(1, o = c.slot), "rightTop" in c && i(2, s = c.rightTop), "rightBot" in c && i(3, u = c.rightBot), "top" in c && i(4, a = c.top), "bot" in c && i(5, f = c.bot), "$$scope" in c && i(7, r = c.$$scope);
  }, e = B(e), [l, o, s, u, a, f, e, r, n];
}
class _a extends re {
  constructor(e) {
    super(), ne(this, e, ba, ha, J, {
      div: 0,
      slot: 1,
      rightTop: 2,
      rightBot: 3,
      top: 4,
      bot: 5
    });
  }
}
function pa(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d, k, g, m, p, b;
  const y = (
    /*#slots*/
    t[8].default
  ), w = X(
    y,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = N("div"), i = N("div"), r = H(), l = N("div"), s = H(), u = N("div"), f = H(), c = N("div"), k = H(), g = N("div"), w && w.c(), h(i, "class", n = I(
        /*leftTop*/
        t[2],
        /*$$props*/
        t[6].classLeftTop
      )), h(l, "class", o = I(
        /*leftMid*/
        t[3],
        /*$$props*/
        t[6].classLeftMid
      )), h(u, "class", a = I(
        /*leftBot*/
        t[4],
        /*$$props*/
        t[6].classLeftBot
      )), h(c, "class", d = I(
        /*right*/
        t[5],
        /*$$props*/
        t[6].classRight
      )), h(g, "class", m = I(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(e, "class", p = I(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      ));
    },
    m(_, C) {
      A(_, e, C), z(e, i), z(e, r), z(e, l), z(e, s), z(e, u), z(e, f), z(e, c), z(e, k), z(e, g), w && w.m(g, null), b = !0;
    },
    p(_, [C]) {
      (!b || C & /*leftTop, $$props*/
      68 && n !== (n = I(
        /*leftTop*/
        _[2],
        /*$$props*/
        _[6].classLeftTop
      ))) && h(i, "class", n), (!b || C & /*leftMid, $$props*/
      72 && o !== (o = I(
        /*leftMid*/
        _[3],
        /*$$props*/
        _[6].classLeftMid
      ))) && h(l, "class", o), (!b || C & /*leftBot, $$props*/
      80 && a !== (a = I(
        /*leftBot*/
        _[4],
        /*$$props*/
        _[6].classLeftBot
      ))) && h(u, "class", a), (!b || C & /*right, $$props*/
      96 && d !== (d = I(
        /*right*/
        _[5],
        /*$$props*/
        _[6].classRight
      ))) && h(c, "class", d), w && w.p && (!b || C & /*$$scope*/
      128) && K(
        w,
        y,
        _,
        /*$$scope*/
        _[7],
        b ? Q(
          y,
          /*$$scope*/
          _[7],
          C,
          null
        ) : Y(
          /*$$scope*/
          _[7]
        ),
        null
      ), (!b || C & /*slot, $$props*/
      66 && m !== (m = I(
        /*slot*/
        _[1],
        /*$$props*/
        _[6].classSlot
      ))) && h(g, "class", m), (!b || C & /*div, $$props*/
      65 && p !== (p = I(
        /*div*/
        _[0],
        /*$$props*/
        _[6].class
      ))) && h(e, "class", p);
    },
    i(_) {
      b || (v(w, _), b = !0);
    },
    o(_) {
      S(w, _), b = !1;
    },
    d(_) {
      _ && E(e), w && w.d(_);
    }
  };
}
function ya(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[454px] uikit-max-w-[341px] md:uikit-h-[682px] md:uikit-max-w-[512px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-h-[426px] md:uikit-h-[654px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { leftTop: s = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftMid: u = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -ruikit-ight-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = M(M({}, e), B(c))), "div" in c && i(0, l = c.div), "slot" in c && i(1, o = c.slot), "leftTop" in c && i(2, s = c.leftTop), "leftMid" in c && i(3, u = c.leftMid), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, r = c.$$scope);
  }, e = B(e), [l, o, s, u, a, f, e, r, n];
}
class va extends re {
  constructor(e) {
    super(), ne(this, e, ya, pa, J, {
      div: 0,
      slot: 1,
      leftTop: 2,
      leftMid: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function wa(t) {
  let e;
  return {
    c() {
      e = N("div"), e.textContent = "Unknow device", h(e, "class", "uikit-border uikit-p-3 uikit-text-xl");
    },
    m(i, n) {
      A(i, e, n);
    },
    p: le,
    i: le,
    o: le,
    d(i) {
      i && E(e);
    }
  };
}
function Ca(t) {
  let e, i, n;
  var r = (
    /*component*/
    t[0]
  );
  function l(o) {
    return {
      props: {
        $$slots: { default: [Sa] },
        $$scope: { ctx: o }
      }
    };
  }
  return r && (e = $i(r, l(t))), {
    c() {
      e && $(e.$$.fragment), i = ae();
    },
    m(o, s) {
      e && Z(e, o, s), A(o, i, s), n = !0;
    },
    p(o, s) {
      const u = {};
      if (s & /*$$scope*/
      8 && (u.$$scope = { dirty: s, ctx: o }), s & /*component*/
      1 && r !== (r = /*component*/
      o[0])) {
        if (e) {
          oe();
          const a = e;
          S(a.$$.fragment, 1, 0, () => {
            x(a, 1);
          }), se();
        }
        r ? (e = $i(r, l(o)), $(e.$$.fragment), v(e.$$.fragment, 1), Z(e, i.parentNode, i)) : e = null;
      } else
        r && e.$set(u);
    },
    i(o) {
      n || (e && v(e.$$.fragment, o), n = !0);
    },
    o(o) {
      e && S(e.$$.fragment, o), n = !1;
    },
    d(o) {
      o && E(i), e && x(e, o);
    }
  };
}
function Sa(t) {
  let e;
  const i = (
    /*#slots*/
    t[2].default
  ), n = X(
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
      8) && K(
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
        ) : Y(
          /*$$scope*/
          r[3]
        ),
        null
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
    },
    o(r) {
      S(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Ta(t) {
  let e, i, n, r;
  const l = [Ca, wa], o = [];
  function s(u, a) {
    return (
      /*component*/
      u[0] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), A(u, n, a), r = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      S(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function Ea(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { device: l = "default" } = e;
  const o = {
    android: na,
    ios: da,
    tablet: va,
    default: oa,
    smartwatch: _a,
    laptop: ma,
    desktop: aa
  };
  let s;
  return t.$$set = (u) => {
    "device" in u && i(1, l = u.device), "$$scope" in u && i(3, r = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*device*/
    2 && i(0, s = o[l]);
  }, [s, l, n, r];
}
class Aa extends re {
  constructor(e) {
    super(), ne(this, e, Ea, Ta, J, { device: 1 });
  }
}
const Vd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Aa({
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
}, Oa = (t, e) => {
  const i = (n) => {
    n != null && n.target && t && !t.contains(n.target) && !n.defaultPrevented && e();
  };
  return document.addEventListener("click", i, !0), {
    destroy() {
      document.removeEventListener("click", i, !0);
    }
  };
}, Ia = (t) => ({ hidden: t & /*hidden*/
1 }), Bn = (t) => ({ hidden: (
  /*hidden*/
  t[0]
) });
function Fn(t) {
  let e, i, n, r, l, o, s;
  function u(m, p) {
    if (
      /*backdrop*/
      m[4] && /*activateClickOutside*/
      m[1]
    )
      return La;
    if (
      /*backdrop*/
      m[4] && !/*activateClickOutside*/
      m[1]
    )
      return Pa;
  }
  let a = u(t), f = a && a(t);
  const c = (
    /*#slots*/
    t[25].default
  ), d = X(
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
      class: n = I(
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
      f && f.c(), e = H(), i = N("div"), d && d.c(), ue(i, g);
    },
    m(m, p) {
      f && f.m(m, p), A(m, e, p), A(m, i, p), d && d.m(i, null), l = !0, o || (s = at(
        /*clickOutsideWrapper*/
        t[14].call(
          null,
          i,
          /*handleClickOutside*/
          t[12]
        )
      ), o = !0);
    },
    p(m, p) {
      t = m, a === (a = u(t)) && f ? f.p(t, p) : (f && f.d(1), f = a && a(t), f && (f.c(), f.m(e.parentNode, e))), d && d.p && (!l || p & /*$$scope, hidden*/
      16777217) && K(
        d,
        c,
        t,
        /*$$scope*/
        t[24],
        l ? Q(
          c,
          /*$$scope*/
          t[24],
          p,
          Ia
        ) : Y(
          /*$$scope*/
          t[24]
        ),
        Bn
      ), ue(i, g = ce(k, [
        (!l || p & /*id*/
        64) && { id: (
          /*id*/
          t[6]
        ) },
        p & /*$$restProps*/
        32768 && /*$$restProps*/
        t[15],
        (!l || p & /*divClass, width, position, placement, $$props*/
        65708 && n !== (n = I(
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
        (!l || p & /*id*/
        64) && { "aria-controls": (
          /*id*/
          t[6]
        ) },
        (!l || p & /*id*/
        64) && { "aria-labelledby": (
          /*id*/
          t[6]
        ) }
      ]));
    },
    i(m) {
      l || (v(d, m), m && Oe(() => {
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
      S(d, m), m && (r || (r = Re(
        i,
        /*multiple*/
        t[9],
        /*transitionParams*/
        t[8],
        !1
      )), r.run(0)), l = !1;
    },
    d(m) {
      m && (E(e), E(i)), f && f.d(m), d && d.d(m), m && r && r.end(), o = !1, s();
    }
  };
}
function Pa(t) {
  let e;
  return {
    c() {
      e = N("div"), h(e, "role", "presentation"), h(
        e,
        "class",
        /*backdropDivClass*/
        t[13]
      );
    },
    m(i, n) {
      A(i, e, n);
    },
    p: le,
    d(i) {
      i && E(e);
    }
  };
}
function La(t) {
  let e, i, n;
  return {
    c() {
      e = N("div"), h(e, "role", "presentation"), h(
        e,
        "class",
        /*backdropDivClass*/
        t[13]
      );
    },
    m(r, l) {
      A(r, e, l), i || (n = D(
        e,
        "click",
        /*click_handler*/
        t[26]
      ), i = !0);
    },
    p: le,
    d(r) {
      r && E(e), i = !1, n();
    }
  };
}
function Ma(t) {
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
      r[0] ? n && (oe(), S(n, 1, 1, () => {
        n = null;
      }), se()) : n ? (n.p(r, l), l & /*hidden*/
      1 && v(n, 1)) : (n = Fn(r), n.c(), v(n, 1), n.m(e.parentNode, e));
    },
    i(r) {
      i || (v(n), i = !0);
    },
    o(r) {
      S(n), i = !1;
    },
    d(r) {
      r && E(e), n && n.d(r);
    }
  };
}
function Na(t, e, i) {
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
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e, { activateClickOutside: s = !0 } = e, { hidden: u = !0 } = e, { position: a = "uikit-fixed" } = e, { leftOffset: f = "uikit-inset-y-0 uikit-start-0" } = e, { rightOffset: c = "uikit-inset-y-0 uikit-end-0" } = e, { topOffset: d = "uikit-inset-x-0 uikit-top-0" } = e, { bottomOffset: k = "uikit-inset-x-0 uikit-bottom-0" } = e, { width: g = "uikit-w-80" } = e, { backdrop: m = !0 } = e, { bgColor: p = "uikit-bg-gray-900" } = e, { bgOpacity: b = "uikit-bg-opacity-75" } = e, { placement: y = "left" } = e, { id: w = "drawer-example" } = e, { divClass: _ = "uikit-overflow-y-auto uikit-z-50 uikit-p-4 uikit-bg-white dark:uikit-bg-gray-800" } = e, { transitionParams: C = {} } = e, { transitionType: T = "fly" } = e;
  function P(F, R) {
    switch (T) {
      case "slide":
        return Bi(F, R);
      case "blur":
        return Di(F, R);
      case "fade":
        return Jt(F, R);
      default:
        return yt(F, R);
    }
  }
  const U = {
    left: f,
    right: c,
    top: d,
    bottom: k
  }, q = () => {
    i(0, u = !u);
  }, ee = () => s && !u && q();
  let L = I("uikit-fixed uikit-top-0 uikit-start-0 uikit-z-50 uikit-w-full uikit-h-full", m && p, m && b);
  function G(F, R) {
    return s ? Oa(F, R) : void 0;
  }
  const ge = () => !u && q();
  return t.$$set = (F) => {
    i(16, e = M(M({}, e), B(F))), i(15, r = ie(e, n)), "activateClickOutside" in F && i(1, s = F.activateClickOutside), "hidden" in F && i(0, u = F.hidden), "position" in F && i(2, a = F.position), "leftOffset" in F && i(17, f = F.leftOffset), "rightOffset" in F && i(18, c = F.rightOffset), "topOffset" in F && i(19, d = F.topOffset), "bottomOffset" in F && i(20, k = F.bottomOffset), "width" in F && i(3, g = F.width), "backdrop" in F && i(4, m = F.backdrop), "bgColor" in F && i(21, p = F.bgColor), "bgOpacity" in F && i(22, b = F.bgOpacity), "placement" in F && i(5, y = F.placement), "id" in F && i(6, w = F.id), "divClass" in F && i(7, _ = F.divClass), "transitionParams" in F && i(8, C = F.transitionParams), "transitionType" in F && i(23, T = F.transitionType), "$$scope" in F && i(24, o = F.$$scope);
  }, e = B(e), [
    u,
    s,
    a,
    g,
    m,
    y,
    w,
    _,
    C,
    P,
    U,
    q,
    ee,
    L,
    G,
    r,
    e,
    f,
    c,
    d,
    k,
    p,
    b,
    T,
    o,
    l,
    ge
  ];
}
class za extends re {
  constructor(e) {
    super(), ne(this, e, Na, Ma, J, {
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
function Ra(t) {
  let e;
  return {
    c() {
      e = N("div");
    },
    m(i, n) {
      A(i, e, n), t[6](e);
    },
    p: le,
    d(i) {
      i && E(e), t[6](null);
    }
  };
}
function Da(t) {
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
  function l(s) {
    t[7](s);
  }
  let o = {
    $$slots: { default: [Ra] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < r.length; s += 1)
    o = M(o, r[s]);
  return (
    /*hidden*/
    t[1] !== void 0 && (o.hidden = /*hidden*/
    t[1]), e = new za({ props: o }), Ee.push(() => Yt(e, "hidden", l)), {
      c() {
        $(e.$$.fragment);
      },
      m(s, u) {
        Z(e, s, u), n = !0;
      },
      p(s, [u]) {
        const a = u & /*transitionParams, $$props*/
        12 ? ce(r, [
          r[0],
          u & /*transitionParams*/
          4 && {
            transitionParams: (
              /*transitionParams*/
              s[2]
            )
          },
          r[2],
          u & /*$$props*/
          8 && Pe(
            /*$$props*/
            s[3]
          )
        ]) : {};
        u & /*$$scope, domdefault*/
        513 && (a.$$scope = { dirty: u, ctx: s }), !i && u & /*hidden*/
        2 && (i = !0, a.hidden = /*hidden*/
        s[1], Kt(() => i = !1)), e.$set(a);
      },
      i(s) {
        n || (v(e.$$.fragment, s), n = !0);
      },
      o(s) {
        S(e.$$.fragment, s), n = !1;
      },
      d(s) {
        x(e, s);
      }
    }
  );
}
function Ba(t, e, i) {
  let { slotdefault: n } = e, r = !0;
  function l() {
    i(1, r = !r);
  }
  let o = { x: -320, duration: 200, easing: Io }, s;
  const u = () => {
    n && s && (i(0, s.innerHTML = "", s), s.appendChild(n));
  };
  Ke(() => {
    u();
  });
  function a(c) {
    Ee[c ? "unshift" : "push"](() => {
      s = c, i(0, s);
    });
  }
  function f(c) {
    r = c, i(1, r);
  }
  return t.$$set = (c) => {
    i(3, e = M(M({}, e), B(c))), "slotdefault" in c && i(4, n = c.slotdefault);
  }, t.$$.update = () => {
    t.$$.dirty & /*slotdefault, domdefault*/
    17 && n && s && u();
  }, e = B(e), [
    s,
    r,
    o,
    e,
    n,
    l,
    a,
    f
  ];
}
class Fa extends re {
  constructor(e) {
    super(), ne(this, e, Ba, Da, J, { slotdefault: 4, toggle: 5 });
  }
  get toggle() {
    return this.$$.ctx[5];
  }
}
const qd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Fa({
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
function ja(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M15 19l-7-7 7-7"), h(e, "aria-hidden", "true"), h(e, "class", "uikit-w-5 uikit-h-5 sm:uikit-w-6 sm:uikit-h-6"), h(e, "fill", "none"), h(e, "stroke", "currentColor"), h(e, "viewBox", "0 0 24 24"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, r) {
      A(n, e, r), z(e, i);
    },
    d(n) {
      n && E(e);
    }
  };
}
function Wa(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5l7 7-7 7"), h(e, "aria-hidden", "true"), h(e, "class", "uikit-w-5 uikit-h-5 sm:uikit-w-6 sm:uikit-h-6"), h(e, "fill", "none"), h(e, "stroke", "currentColor"), h(e, "viewBox", "0 0 24 24"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, r) {
      A(n, e, r), z(e, i);
    },
    d(n) {
      n && E(e);
    }
  };
}
function Ua(t) {
  let e, i, n, r;
  function l(u, a) {
    return (
      /*forward*/
      u[0] ? Wa : ja
    );
  }
  let o = l(t), s = o(t);
  return {
    c() {
      e = N("span"), s.c(), i = H(), n = N("span"), r = be(
        /*name*/
        t[1]
      ), h(n, "class", "uikit-sr-only"), h(e, "class", "uikit-inline-flex uikit-justify-center uikit-items-center uikit-w-8 uikit-h-8 uikit-rounded-full sm:uikit-w-10 sm:uikit-h-10 uikit-bg-white/30 dark:uikit-bg-gray-800/30 group-hover:uikit-bg-white/50 dark:group-hover:uikit-bg-gray-800/60 group-focus:uikit-ring-4 group-focus:uikit-ring-white dark:group-focus:uikit-ring-gray-800/70 group-focus:uikit-outline-none");
    },
    m(u, a) {
      A(u, e, a), s.m(e, null), z(e, i), z(e, n), z(n, r);
    },
    p(u, a) {
      o !== (o = l(u)) && (s.d(1), s = o(u), s && (s.c(), s.m(e, i))), a & /*name*/
      2 && Ce(
        r,
        /*name*/
        u[1]
      );
    },
    d(u) {
      u && E(e), s.d();
    }
  };
}
function Ga(t) {
  let e, i, n, r;
  const l = (
    /*#slots*/
    t[4].default
  ), o = X(
    l,
    t,
    /*$$scope*/
    t[3],
    null
  ), s = o || Ua(t);
  return {
    c() {
      e = N("button"), s && s.c(), h(e, "type", "button"), h(
        e,
        "class",
        /*buttonCls*/
        t[2]
      );
    },
    m(u, a) {
      A(u, e, a), s && s.m(e, null), i = !0, n || (r = D(
        e,
        "click",
        /*click_handler*/
        t[5]
      ), n = !0);
    },
    p(u, [a]) {
      o ? o.p && (!i || a & /*$$scope*/
      8) && K(
        o,
        l,
        u,
        /*$$scope*/
        u[3],
        i ? Q(
          l,
          /*$$scope*/
          u[3],
          a,
          null
        ) : Y(
          /*$$scope*/
          u[3]
        ),
        null
      ) : s && s.p && (!i || a & /*name, forward*/
      3) && s.p(u, i ? a : -1), (!i || a & /*buttonCls*/
      4) && h(
        e,
        "class",
        /*buttonCls*/
        u[2]
      );
    },
    i(u) {
      i || (v(s, u), i = !0);
    },
    o(u) {
      S(s, u), i = !1;
    },
    d(u) {
      u && E(e), s && s.d(u), n = !1, r();
    }
  };
}
function Ha(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { forward: l } = e, { name: o } = e, s;
  function u(a) {
    j.call(this, t, a);
  }
  return t.$$set = (a) => {
    i(6, e = M(M({}, e), B(a))), "forward" in a && i(0, l = a.forward), "name" in a && i(1, o = a.name), "$$scope" in a && i(3, r = a.$$scope);
  }, t.$$.update = () => {
    i(2, s = I("uikit-flex uikit-absolute uikit-top-0 uikit-z-30 uikit-justify-center uikit-items-center uikit-px-4 uikit-h-full uikit-group focus:uikit-outline-none uikit-text-white dark:uikit-text-gray-300", l ? "uikit-end-0" : "uikit-start-0", e.class));
  }, e = B(e), [l, o, s, r, n, u];
}
class Ei extends re {
  constructor(e) {
    super(), ne(this, e, Ha, Ga, J, { forward: 0, name: 1 });
  }
}
const Ai = ({ lastSlideChange: t, slideDuration: e, slideDurationRatio: i = 1 }) => t && (/* @__PURE__ */ new Date()).getTime() - t.getTime() < e * i ? (console.warn("Can't change slide yet, too soon"), !1) : !0, Va = (t) => ({}), jn = (t) => ({
  ControlButton: Ei,
  changeSlide: (
    /*changeSlide*/
    t[1]
  )
});
function qa(t) {
  let e, i, n, r;
  return e = new Ei({
    props: {
      name: "Previous",
      forward: !1,
      class: I(
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
      class: I(
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
      const s = {};
      o & /*$$props*/
      4 && (s.class = I(
        /*$$props*/
        l[2].class
      )), e.$set(s);
      const u = {};
      o & /*$$props*/
      4 && (u.class = I(
        /*$$props*/
        l[2].class
      )), n.$set(u);
    },
    i(l) {
      r || (v(e.$$.fragment, l), v(n.$$.fragment, l), r = !0);
    },
    o(l) {
      S(e.$$.fragment, l), S(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && E(i), x(e, l), x(n, l);
    }
  };
}
function Xa(t) {
  let e;
  const i = (
    /*#slots*/
    t[4].default
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[3],
    jn
  ), r = n || qa(t);
  return {
    c() {
      r && r.c();
    },
    m(l, o) {
      r && r.m(l, o), e = !0;
    },
    p(l, [o]) {
      n ? n.p && (!e || o & /*$$scope*/
      8) && K(
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
          Va
        ) : Y(
          /*$$scope*/
          l[3]
        ),
        jn
      ) : r && r.p && (!e || o & /*$$props*/
      4) && r.p(l, e ? o : -1);
    },
    i(l) {
      e || (v(r, l), e = !0);
    },
    o(l) {
      S(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function Qa(t, e, i) {
  let n, { $$slots: r = {}, $$scope: l } = e;
  const o = Be("state");
  Qt(t, o, (c) => i(7, n = c));
  const { update: s } = o;
  function u(c) {
    Ai({
      lastSlideChange: n.lastSlideChange,
      slideDuration: n.slideDuration,
      slideDurationRatio: 0.75
    }) && s(c ? (d) => (d.forward = !0, d.index = d.index >= d.images.length - 1 ? 0 : d.index + 1, d.lastSlideChange = /* @__PURE__ */ new Date(), { ...d }) : (d) => (d.forward = !1, d.index = d.index <= 0 ? d.images.length - 1 : d.index - 1, d.lastSlideChange = /* @__PURE__ */ new Date(), { ...d }));
  }
  const a = () => u(!1), f = () => u(!0);
  return t.$$set = (c) => {
    i(2, e = M(M({}, e), B(c))), "$$scope" in c && i(3, l = c.$$scope);
  }, e = B(e), [o, u, e, l, r, a, f];
}
class Ka extends re {
  constructor(e) {
    super(), ne(this, e, Qa, Xa, J, {});
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
const Ya = (t) => ({ selected: t & /*$state*/
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
function Ja(t) {
  let e, i;
  return e = new qi({
    props: {
      class: I(
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
      7 && (l.class = I(
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
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
  ), s = X(
    o,
    t,
    /*$$scope*/
    t[5],
    Un
  ), u = s || Ja(t);
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
      e = N("button"), u && u.c(), i = H();
    },
    m(f, c) {
      A(f, e, c), u && u.m(e, null), z(e, i), n = !0, r || (l = D(e, "click", a), r = !0);
    },
    p(f, c) {
      t = f, s ? s.p && (!n || c & /*$$scope, $state*/
      36) && K(
        s,
        o,
        t,
        /*$$scope*/
        t[5],
        n ? Q(
          o,
          /*$$scope*/
          t[5],
          c,
          Ya
        ) : Y(
          /*$$scope*/
          t[5]
        ),
        Un
      ) : u && u.p && (!n || c & /*$state, activeClass, inactiveClass*/
      7) && u.p(t, n ? c : -1);
    },
    i(f) {
      n || (v(u, f), n = !0);
    },
    o(f) {
      S(u, f), n = !1;
    },
    d(f) {
      f && E(e), u && u.d(f), r = !1, l();
    }
  };
}
function Za(t) {
  let e, i, n, r = ve(
    /*$state*/
    t[2].images
  ), l = [];
  for (let s = 0; s < r.length; s += 1)
    l[s] = Gn(Wn(t, r, s));
  const o = (s) => S(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      e = N("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      h(e, "class", i = I(
        "uikit-flex uikit-absolute uikit-bottom-5 uikit-start-1/2 uikit-z-30 uikit-space-x-3 rtl:uikit-space-x-reverse -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
        /*$$props*/
        t[4].class
      ));
    },
    m(s, u) {
      A(s, e, u);
      for (let a = 0; a < l.length; a += 1)
        l[a] && l[a].m(e, null);
      n = !0;
    },
    p(s, [u]) {
      if (u & /*$state, twMerge, activeClass, inactiveClass, $$scope, Indicator*/
      39) {
        r = ve(
          /*$state*/
          s[2].images
        );
        let a;
        for (a = 0; a < r.length; a += 1) {
          const f = Wn(s, r, a);
          l[a] ? (l[a].p(f, u), v(l[a], 1)) : (l[a] = Gn(f), l[a].c(), v(l[a], 1), l[a].m(e, null));
        }
        for (oe(), a = r.length; a < l.length; a += 1)
          o(a);
        se();
      }
      (!n || u & /*$$props*/
      16 && i !== (i = I(
        "uikit-flex uikit-absolute uikit-bottom-5 uikit-start-1/2 uikit-z-30 uikit-space-x-3 rtl:uikit-space-x-reverse -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
        /*$$props*/
        s[4].class
      ))) && h(e, "class", i);
    },
    i(s) {
      if (!n) {
        for (let u = 0; u < r.length; u += 1)
          v(l[u]);
        n = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        S(l[u]);
      n = !1;
    },
    d(s) {
      s && E(e), Qe(l, s);
    }
  };
}
function xa(t, e, i) {
  let n, { $$slots: r = {}, $$scope: l } = e, { activeClass: o = "uikit-opacity-100" } = e, { inactiveClass: s = "uikit-opacity-60" } = e;
  const u = Be("state");
  Qt(t, u, (f) => i(2, n = f));
  const a = (f) => jr(u, n.index = f, n);
  return t.$$set = (f) => {
    i(4, e = M(M({}, e), B(f))), "activeClass" in f && i(0, o = f.activeClass), "inactiveClass" in f && i(1, s = f.inactiveClass), "$$scope" in f && i(5, l = f.$$scope);
  }, e = B(e), [
    o,
    s,
    n,
    u,
    e,
    l,
    r,
    a
  ];
}
class $a extends re {
  constructor(e) {
    super(), ne(this, e, xa, Za, J, { activeClass: 0, inactiveClass: 1 });
  }
}
function ef(t) {
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
      1 && J(e, e = /*image*/
      r[0]) ? (oe(), S(n, 1, 1, le), se(), n = Hn(r), n.c(), v(n, 1), n.m(i.parentNode, i)) : n.p(r, l);
    },
    d(r) {
      r && E(i), n.d(r);
    }
  };
}
function tf(t) {
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
      1 && J(e, e = /*image*/
      r[0]) ? (oe(), S(n, 1, 1, le), se(), n = Vn(r), n.c(), v(n, 1), n.m(i.parentNode, i)) : n.p(r, l);
    },
    d(r) {
      r && E(i), n.d(r);
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
  for (let s = 0; s < l.length; s += 1)
    o = M(o, l[s]);
  return {
    c() {
      e = N("img"), ue(e, o);
    },
    m(s, u) {
      A(s, e, u), r = !0;
    },
    p(s, u) {
      t = s, ue(e, o = ce(l, [
        { alt: "..." },
        u & /*image*/
        1 && /*image*/
        t[0],
        u & /*$$restProps*/
        64 && /*$$restProps*/
        t[6],
        (!r || u & /*imgClass*/
        4) && { class: (
          /*imgClass*/
          t[2]
        ) }
      ]));
    },
    i(s) {
      r || (s && Oe(() => {
        r && (n && n.end(1), i = Zl(
          e,
          yt,
          /*transitionSlideIn*/
          t[4]
        ), i.start());
      }), r = !0);
    },
    o(s) {
      i && i.invalidate(), s && (n = xl(
        e,
        yt,
        /*transitionSlideOut*/
        t[3]
      )), r = !1;
    },
    d(s) {
      s && E(e), s && n && n.end();
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
      e = N("img"), ue(e, l);
    },
    m(o, s) {
      A(o, e, s), n = !0;
    },
    p(o, s) {
      ue(e, l = ce(r, [
        { alt: "..." },
        s & /*image*/
        1 && /*image*/
        o[0],
        s & /*$$restProps*/
        64 && /*$$restProps*/
        o[6],
        (!n || s & /*imgClass*/
        4) && { class: (
          /*imgClass*/
          o[2]
        ) }
      ]));
    },
    i(o) {
      n || (o && Oe(() => {
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
      o && E(e), o && i && i.end();
    }
  };
}
function nf(t) {
  let e;
  function i(l, o) {
    return (
      /*transition*/
      l[1] ? tf : ef
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
    i: le,
    o: le,
    d(l) {
      l && E(e), r.d(l);
    }
  };
}
function rf(t, e, i) {
  let n, r, l;
  const o = ["image", "transition"];
  let s = ie(e, o), u;
  const a = Be("state");
  Qt(t, a, (d) => i(7, u = d));
  let { image: f } = e, { transition: c = null } = e;
  return t.$$set = (d) => {
    i(8, e = M(M({}, e), B(d))), i(6, s = ie(e, o)), "image" in d && i(0, f = d.image), "transition" in d && i(1, c = d.transition);
  }, t.$$.update = () => {
    t.$$.dirty & /*$state*/
    128 && i(4, n = {
      x: u.forward ? "100%" : "-100%",
      opacity: 1,
      width: "100%",
      height: "100%",
      duration: u.slideDuration
    }), t.$$.dirty & /*$state*/
    128 && i(3, r = {
      x: u.forward ? "-100%" : "100%",
      opacity: 0.9,
      width: "100%",
      height: "100%",
      duration: u.slideDuration
    }), i(2, l = I("uikit-absolute uikit-block !uikit-w-full uikit-h-full uikit-object-cover", e.class));
  }, e = B(e), [
    f,
    c,
    l,
    r,
    n,
    a,
    s,
    u
  ];
}
class gl extends re {
  constructor(e) {
    super(), ne(this, e, rf, nf, J, { image: 0, transition: 1 });
  }
}
const lf = (t) => ({ index: t[0] & /*index*/
1 }), qn = (t) => ({
  index: (
    /*index*/
    t[0]
  ),
  Controls: Ka,
  Indicators: $a
}), of = (t) => ({ index: t[0] & /*index*/
1 }), Xn = (t) => ({ Slide: gl, index: (
  /*index*/
  t[0]
) });
function Qn(t, e, i) {
  const n = t.slice();
  return n[29] = e[i], n;
}
function Kn(t) {
  let e, i = ve(
    /*images*/
    t[1]
  ), n = [];
  for (let r = 0; r < i.length; r += 1)
    n[r] = Yn(Qn(t, i, r));
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
          const s = Qn(r, i, o);
          n[o] ? n[o].p(s, l) : (n[o] = Yn(s), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = i.length;
      }
    },
    d(r) {
      r && E(e), Qe(n, r);
    }
  };
}
function Yn(t) {
  let e, i;
  return {
    c() {
      e = N("link"), h(e, "rel", "preload"), h(e, "href", i = /*image*/
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
      n && E(e);
    }
  };
}
function sf(t) {
  let e, i;
  return e = new gl({
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function uf(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d = (
    /*images*/
    t[1].length > 0 && Kn(t)
  );
  const k = (
    /*#slots*/
    t[18].slide
  ), g = X(
    k,
    t,
    /*$$scope*/
    t[17],
    Xn
  ), m = g || sf(t);
  let p = [
    /*$$restProps*/
    t[12],
    {
      class: o = I(
        Zn,
        /*activeDragGesture*/
        t[6] === void 0 ? "uikit-transition-transform" : "",
        /*$$props*/
        t[13].class
      )
    }
  ], b = {};
  for (let _ = 0; _ < p.length; _ += 1)
    b = M(b, p[_]);
  const y = (
    /*#slots*/
    t[18].default
  ), w = X(
    y,
    t,
    /*$$scope*/
    t[17],
    qn
  );
  return {
    c() {
      d && d.c(), e = ae(), i = H(), n = H(), r = N("div"), l = N("div"), m && m.c(), u = H(), w && w.c(), ue(l, b), h(r, "class", "uikit-relative"), h(r, "role", "button"), h(
        r,
        "aria-label",
        /*ariaLabel*/
        t[4]
      ), h(r, "tabindex", "0");
    },
    m(_, C) {
      d && d.m(document.head, null), z(document.head, e), A(_, i, C), A(_, n, C), A(_, r, C), z(r, l), m && m.m(l, null), z(r, u), w && w.m(r, null), t[19](r), a = !0, f || (c = [
        D(document, "mousemove", function() {
          me(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        D(document, "mouseup", function() {
          me(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        D(document, "touchmove", function() {
          me(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        D(document, "touchend", function() {
          me(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        at(s = /*loop*/
        t[10].call(
          null,
          l,
          /*duration*/
          t[3]
        )),
        D(
          r,
          "mousedown",
          /*onDragStart*/
          t[11],
          { passive: !1 }
        ),
        D(
          r,
          "touchstart",
          /*onDragStart*/
          t[11],
          { passive: !1 }
        ),
        D(r, "mousemove", function() {
          me(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        D(r, "mouseup", function() {
          me(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        D(r, "touchmove", function() {
          me(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        D(r, "touchend", function() {
          me(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        })
      ], f = !0);
    },
    p(_, C) {
      t = _, /*images*/
      t[1].length > 0 ? d ? d.p(t, C) : (d = Kn(t), d.c(), d.m(e.parentNode, e)) : d && (d.d(1), d = null), g ? g.p && (!a || C[0] & /*$$scope, index*/
      131073) && K(
        g,
        k,
        t,
        /*$$scope*/
        t[17],
        a ? Q(
          k,
          /*$$scope*/
          t[17],
          C,
          of
        ) : Y(
          /*$$scope*/
          t[17]
        ),
        Xn
      ) : m && m.p && (!a || C[0] & /*images, index, imgClass, transition*/
      39) && m.p(t, a ? C : [-1, -1]), ue(l, b = ce(p, [
        C[0] & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12],
        (!a || C[0] & /*activeDragGesture, $$props*/
        8256 && o !== (o = I(
          Zn,
          /*activeDragGesture*/
          t[6] === void 0 ? "uikit-transition-transform" : "",
          /*$$props*/
          t[13].class
        ))) && { class: o }
      ])), s && me(s.update) && C[0] & /*duration*/
      8 && s.update.call(
        null,
        /*duration*/
        t[3]
      ), w && w.p && (!a || C[0] & /*$$scope, index*/
      131073) && K(
        w,
        y,
        t,
        /*$$scope*/
        t[17],
        a ? Q(
          y,
          /*$$scope*/
          t[17],
          C,
          lf
        ) : Y(
          /*$$scope*/
          t[17]
        ),
        qn
      ), (!a || C[0] & /*ariaLabel*/
      16) && h(
        r,
        "aria-label",
        /*ariaLabel*/
        t[4]
      );
    },
    i(_) {
      a || (v(m, _), v(w, _), a = !0);
    },
    o(_) {
      S(m, _), S(w, _), a = !1;
    },
    d(_) {
      _ && (E(i), E(n), E(r)), d && d.d(_), E(e), m && m.d(_), w && w.d(_), t[19](null), f = !1, we(c);
    }
  };
}
const Jn = 0.25;
let Zn = "uikit-grid uikit-overflow-hidden uikit-relative uikit-rounded-lg uikit-h-56 sm:uikit-h-64 xl:uikit-h-80 2xl:uikit-h-96";
function af(t, e, i) {
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
  let o = ie(e, l), { $$slots: s = {}, $$scope: u } = e, { images: a } = e, { index: f = 0 } = e, { slideDuration: c = 1e3 } = e, { transition: d = null } = e, { duration: k = 0 } = e, { ariaLabel: g = "Draggable Carousel" } = e, { imgClass: m = "" } = e;
  const p = je(), { set: b, subscribe: y, update: w } = Tt({
    images: a,
    index: f,
    forward: !0,
    slideDuration: c,
    lastSlideChange: /* @__PURE__ */ new Date()
  }), _ = {
    set: (O) => b({
      index: O.index,
      images: O.images,
      lastSlideChange: /* @__PURE__ */ new Date(),
      slideDuration: c,
      forward: C
    }),
    subscribe: y,
    update: w
  };
  let C = !0;
  He("state", _), y((O) => {
    i(0, f = O.index), C = O.forward, p("change", a[f]);
  }), Ke(() => {
    p("change", a[f]);
  });
  const T = () => {
    w((O) => Ai({
      lastSlideChange: O.lastSlideChange,
      slideDuration: c,
      slideDurationRatio: Jn
    }) ? (O.index = O.index >= a.length - 1 ? 0 : O.index + 1, O.lastSlideChange = /* @__PURE__ */ new Date(), { ...O }) : O);
  }, P = () => {
    w((O) => Ai({
      lastSlideChange: O.lastSlideChange,
      slideDuration: c,
      slideDurationRatio: Jn
    }) ? (O.index = O.index <= 0 ? a.length - 1 : O.index - 1, O.lastSlideChange = /* @__PURE__ */ new Date(), { ...O }) : O);
  }, U = (O, te) => {
    i(7, ee = O);
    let de;
    return te > 0 && (de = setInterval(T, te)), {
      update: (pe) => {
        clearInterval(de), pe > 0 && (de = setInterval(T, pe));
      },
      destroy: () => clearInterval(de)
    };
  };
  let q, ee, L = 0, G = null;
  const ge = (O) => {
    const te = O == null ? void 0 : O.clientX;
    if (te)
      return te;
    let de = O;
    if (/^touch/.test(de == null ? void 0 : de.type))
      return de.touches[0].clientX;
  }, F = (O) => {
    i(16, G = O), O.cancelable && O.preventDefault();
    const te = ge(O), de = ee.getBoundingClientRect().width;
    te === void 0 || de === void 0 || i(6, q = {
      start: te,
      position: te,
      width: de,
      timestamp: Date.now()
    });
  };
  function R(O) {
    Ee[O ? "unshift" : "push"](() => {
      ee = O, i(7, ee);
    });
  }
  return t.$$set = (O) => {
    i(13, e = M(M({}, e), B(O))), i(12, o = ie(e, l)), "images" in O && i(1, a = O.images), "index" in O && i(0, f = O.index), "slideDuration" in O && i(14, c = O.slideDuration), "transition" in O && i(2, d = O.transition), "duration" in O && i(3, k = O.duration), "ariaLabel" in O && i(4, g = O.ariaLabel), "imgClass" in O && i(5, m = O.imgClass), "$$scope" in O && i(17, u = O.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*activeDragGesture*/
    64 && i(9, n = q === void 0 ? void 0 : (O) => {
      const te = ge(O);
      if (!q || te === void 0)
        return;
      const { start: de, width: pe } = q;
      i(15, L = Math.min(100, Math.max(-100, (te - de) / pe * 100))), i(6, q.position = te, q);
    }), t.$$.dirty[0] & /*activeDragGesture, percentOffset, touchEvent*/
    98368 && i(8, r = q === void 0 ? void 0 : (O) => {
      var Le;
      if (q) {
        const { timestamp: Ae, position: Ne, start: _e } = q, V = Date.now() - Ae, ye = Ne - _e;
        Math.abs(ye) >= 30 && V <= 250 && V > 0 ? ye > 0 ? P() : T() : L > 50 ? P() : L < -50 ? T() : (G == null ? void 0 : G.constructor.name) === "TouchEvent" && ((Le = G == null ? void 0 : G.target) == null || Le.dispatchEvent(new Event("click", { bubbles: !0 })));
      }
      i(15, L = 0), i(6, q = void 0), i(16, G = null);
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
    U,
    F,
    o,
    e,
    c,
    L,
    G,
    u,
    s,
    R
  ];
}
class ff extends re {
  constructor(e) {
    super(), ne(
      this,
      e,
      af,
      uf,
      J,
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
function cf(t) {
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
      r || (v(e.$$.fragment, l), v(n.$$.fragment, l), r = !0);
    },
    o(l) {
      S(e.$$.fragment, l), S(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && E(i), x(e, l), x(n, l);
    }
  };
}
function df(t) {
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
      e = N("div"), $(i.$$.fragment), h(e, "slot", "slide");
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
      n || (v(i.$$.fragment, r), n = !0);
    },
    o(r) {
      S(i.$$.fragment, r), n = !1;
    },
    d(r) {
      r && E(e), x(i);
    }
  };
}
function kf(t) {
  let e, i, n;
  return i = new ff({
    props: {
      images: (
        /*images*/
        t[0]
      ),
      duration: 3900,
      $$slots: {
        slide: [
          df,
          ({ index: r, Slide: l }) => ({ 1: r, 2: l }),
          ({ index: r, Slide: l }) => (r ? 2 : 0) | (l ? 4 : 0)
        ],
        default: [
          cf,
          ({ Indicators: r, Controls: l }) => ({ 3: r, 4: l }),
          ({ Indicators: r, Controls: l }) => (r ? 8 : 0) | (l ? 16 : 0)
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = N("div"), $(i.$$.fragment), h(e, "class", "max-w-4xl space-y-4");
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
      n || (v(i.$$.fragment, r), n = !0);
    },
    o(r) {
      S(i.$$.fragment, r), n = !1;
    },
    d(r) {
      r && E(e), x(i);
    }
  };
}
function gf(t, e, i) {
  let { images: n = [] } = e;
  return t.$$set = (r) => {
    "images" in r && i(0, n = r.images);
  }, [n];
}
class mf extends re {
  constructor(e) {
    super(), ne(this, e, gf, kf, J, { images: 0 });
  }
}
const Xd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new mf({
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
}, ct = Math.min, Ze = Math.max, Gt = Math.round, Mt = Math.floor, Ve = (t) => ({
  x: t,
  y: t
}), hf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, bf = {
  start: "end",
  end: "start"
};
function Oi(t, e, i) {
  return Ze(t, ct(e, i));
}
function Et(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function $e(t) {
  return t.split("-")[0];
}
function At(t) {
  return t.split("-")[1];
}
function ml(t) {
  return t === "x" ? "y" : "x";
}
function Xi(t) {
  return t === "y" ? "height" : "width";
}
function ti(t) {
  return ["top", "bottom"].includes($e(t)) ? "y" : "x";
}
function Qi(t) {
  return ml(ti(t));
}
function _f(t, e, i) {
  i === void 0 && (i = !1);
  const n = At(t), r = Qi(t), l = Xi(r);
  let o = r === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (o = Ht(o)), [o, Ht(o)];
}
function pf(t) {
  const e = Ht(t);
  return [Ii(t), e, Ii(e)];
}
function Ii(t) {
  return t.replace(/start|end/g, (e) => bf[e]);
}
function yf(t, e, i) {
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
function vf(t, e, i, n) {
  const r = At(t);
  let l = yf($e(t), i === "start", n);
  return r && (l = l.map((o) => o + "-" + r), e && (l = l.concat(l.map(Ii)))), l;
}
function Ht(t) {
  return t.replace(/left|right|bottom|top/g, (e) => hf[e]);
}
function wf(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function hl(t) {
  return typeof t != "number" ? wf(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Vt(t) {
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
  const l = ti(e), o = Qi(e), s = Xi(o), u = $e(e), a = l === "y", f = n.x + n.width / 2 - r.width / 2, c = n.y + n.height / 2 - r.height / 2, d = n[s] / 2 - r[s] / 2;
  let k;
  switch (u) {
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
  switch (At(e)) {
    case "start":
      k[o] -= d * (i && a ? -1 : 1);
      break;
    case "end":
      k[o] += d * (i && a ? -1 : 1);
      break;
  }
  return k;
}
const Cf = async (t, e, i) => {
  const {
    placement: n = "bottom",
    strategy: r = "absolute",
    middleware: l = [],
    platform: o
  } = i, s = l.filter(Boolean), u = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let a = await o.getElementRects({
    reference: t,
    floating: e,
    strategy: r
  }), {
    x: f,
    y: c
  } = xn(a, n, u), d = n, k = {}, g = 0;
  for (let m = 0; m < s.length; m++) {
    const {
      name: p,
      fn: b
    } = s[m], {
      x: y,
      y: w,
      data: _,
      reset: C
    } = await b({
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
    f = y ?? f, c = w ?? c, k = {
      ...k,
      [p]: {
        ...k[p],
        ..._
      }
    }, C && g <= 50 && (g++, typeof C == "object" && (C.placement && (d = C.placement), C.rects && (a = C.rects === !0 ? await o.getElementRects({
      reference: t,
      floating: e,
      strategy: r
    }) : C.rects), {
      x: f,
      y: c
    } = xn(a, d, u)), m = -1);
  }
  return {
    x: f,
    y: c,
    placement: d,
    strategy: r,
    middlewareData: k
  };
};
async function bl(t, e) {
  var i;
  e === void 0 && (e = {});
  const {
    x: n,
    y: r,
    platform: l,
    rects: o,
    elements: s,
    strategy: u
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: c = "floating",
    altBoundary: d = !1,
    padding: k = 0
  } = Et(e, t), g = hl(k), p = s[d ? c === "floating" ? "reference" : "floating" : c], b = Vt(await l.getClippingRect({
    element: (i = await (l.isElement == null ? void 0 : l.isElement(p))) == null || i ? p : p.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)),
    boundary: a,
    rootBoundary: f,
    strategy: u
  })), y = c === "floating" ? {
    ...o.floating,
    x: n,
    y: r
  } : o.reference, w = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), _ = await (l.isElement == null ? void 0 : l.isElement(w)) ? await (l.getScale == null ? void 0 : l.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Vt(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: y,
    offsetParent: w,
    strategy: u
  }) : y);
  return {
    top: (b.top - C.top + g.top) / _.y,
    bottom: (C.bottom - b.bottom + g.bottom) / _.y,
    left: (b.left - C.left + g.left) / _.x,
    right: (C.right - b.right + g.right) / _.x
  };
}
const Sf = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: i,
      y: n,
      placement: r,
      rects: l,
      platform: o,
      elements: s,
      middlewareData: u
    } = e, {
      element: a,
      padding: f = 0
    } = Et(t, e) || {};
    if (a == null)
      return {};
    const c = hl(f), d = {
      x: i,
      y: n
    }, k = Qi(r), g = Xi(k), m = await o.getDimensions(a), p = k === "y", b = p ? "top" : "left", y = p ? "bottom" : "right", w = p ? "clientHeight" : "clientWidth", _ = l.reference[g] + l.reference[k] - d[k] - l.floating[g], C = d[k] - l.reference[k], T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a));
    let P = T ? T[w] : 0;
    (!P || !await (o.isElement == null ? void 0 : o.isElement(T))) && (P = s.floating[w] || l.floating[g]);
    const U = _ / 2 - C / 2, q = P / 2 - m[g] / 2 - 1, ee = ct(c[b], q), L = ct(c[y], q), G = ee, ge = P - m[g] - L, F = P / 2 - m[g] / 2 + U, R = Oi(G, F, ge), O = !u.arrow && At(r) != null && F !== R && l.reference[g] / 2 - (F < G ? ee : L) - m[g] / 2 < 0, te = O ? F < G ? F - G : F - ge : 0;
    return {
      [k]: d[k] + te,
      data: {
        [k]: R,
        centerOffset: F - R - te,
        ...O && {
          alignmentOffset: te
        }
      },
      reset: O
    };
  }
}), Tf = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var i, n;
      const {
        placement: r,
        middlewareData: l,
        rects: o,
        initialPlacement: s,
        platform: u,
        elements: a
      } = e, {
        mainAxis: f = !0,
        crossAxis: c = !0,
        fallbackPlacements: d,
        fallbackStrategy: k = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: m = !0,
        ...p
      } = Et(t, e);
      if ((i = l.arrow) != null && i.alignmentOffset)
        return {};
      const b = $e(r), y = $e(s) === s, w = await (u.isRTL == null ? void 0 : u.isRTL(a.floating)), _ = d || (y || !m ? [Ht(s)] : pf(s));
      !d && g !== "none" && _.push(...vf(s, m, g, w));
      const C = [s, ..._], T = await bl(e, p), P = [];
      let U = ((n = l.flip) == null ? void 0 : n.overflows) || [];
      if (f && P.push(T[b]), c) {
        const G = _f(r, o, w);
        P.push(T[G[0]], T[G[1]]);
      }
      if (U = [...U, {
        placement: r,
        overflows: P
      }], !P.every((G) => G <= 0)) {
        var q, ee;
        const G = (((q = l.flip) == null ? void 0 : q.index) || 0) + 1, ge = C[G];
        if (ge)
          return {
            data: {
              index: G,
              overflows: U
            },
            reset: {
              placement: ge
            }
          };
        let F = (ee = U.filter((R) => R.overflows[0] <= 0).sort((R, O) => R.overflows[1] - O.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!F)
          switch (k) {
            case "bestFit": {
              var L;
              const R = (L = U.map((O) => [O.placement, O.overflows.filter((te) => te > 0).reduce((te, de) => te + de, 0)]).sort((O, te) => O[1] - te[1])[0]) == null ? void 0 : L[0];
              R && (F = R);
              break;
            }
            case "initialPlacement":
              F = s;
              break;
          }
        if (r !== F)
          return {
            reset: {
              placement: F
            }
          };
      }
      return {};
    }
  };
};
async function Ef(t, e) {
  const {
    placement: i,
    platform: n,
    elements: r
  } = t, l = await (n.isRTL == null ? void 0 : n.isRTL(r.floating)), o = $e(i), s = At(i), u = ti(i) === "y", a = ["left", "top"].includes(o) ? -1 : 1, f = l && u ? -1 : 1, c = Et(e, t);
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
  return s && typeof g == "number" && (k = s === "end" ? g * -1 : g), u ? {
    x: k * f,
    y: d * a
  } : {
    x: d * a,
    y: k * f
  };
}
const Af = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var i, n;
      const {
        x: r,
        y: l,
        placement: o,
        middlewareData: s
      } = e, u = await Ef(e, t);
      return o === ((i = s.offset) == null ? void 0 : i.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: r + u.x,
        y: l + u.y,
        data: {
          ...u,
          placement: o
        }
      };
    }
  };
}, Of = function(t) {
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
        limiter: s = {
          fn: (p) => {
            let {
              x: b,
              y
            } = p;
            return {
              x: b,
              y
            };
          }
        },
        ...u
      } = Et(t, e), a = {
        x: i,
        y: n
      }, f = await bl(e, u), c = ti($e(r)), d = ml(c);
      let k = a[d], g = a[c];
      if (l) {
        const p = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", y = k + f[p], w = k - f[b];
        k = Oi(y, k, w);
      }
      if (o) {
        const p = c === "y" ? "top" : "left", b = c === "y" ? "bottom" : "right", y = g + f[p], w = g - f[b];
        g = Oi(y, g, w);
      }
      const m = s.fn({
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
function qe(t) {
  return _l(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Te(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function We(t) {
  var e;
  return (e = (_l(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function _l(t) {
  return t instanceof Node || t instanceof Te(t).Node;
}
function Fe(t) {
  return t instanceof Element || t instanceof Te(t).Element;
}
function De(t) {
  return t instanceof HTMLElement || t instanceof Te(t).HTMLElement;
}
function $n(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Te(t).ShadowRoot;
}
function Ot(t) {
  const {
    overflow: e,
    overflowX: i,
    overflowY: n,
    display: r
  } = Ie(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + i) && !["inline", "contents"].includes(r);
}
function If(t) {
  return ["table", "td", "th"].includes(qe(t));
}
function Ki(t) {
  const e = Yi(), i = Ie(t);
  return i.transform !== "none" || i.perspective !== "none" || (i.containerType ? i.containerType !== "normal" : !1) || !e && (i.backdropFilter ? i.backdropFilter !== "none" : !1) || !e && (i.filter ? i.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (i.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (i.contain || "").includes(n));
}
function pl(t) {
  let e = dt(t);
  for (; De(e) && !ii(e); ) {
    if (Ki(e))
      return e;
    e = dt(e);
  }
  return null;
}
function Yi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ii(t) {
  return ["html", "body", "#document"].includes(qe(t));
}
function Ie(t) {
  return Te(t).getComputedStyle(t);
}
function ni(t) {
  return Fe(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function dt(t) {
  if (qe(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    $n(t) && t.host || // Fallback.
    We(t)
  );
  return $n(e) ? e.host : e;
}
function yl(t) {
  const e = dt(t);
  return ii(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : De(e) && Ot(e) ? e : yl(e);
}
function Ct(t, e, i) {
  var n;
  e === void 0 && (e = []), i === void 0 && (i = !0);
  const r = yl(t), l = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = Te(r);
  return l ? e.concat(o, o.visualViewport || [], Ot(r) ? r : [], o.frameElement && i ? Ct(o.frameElement) : []) : e.concat(r, Ct(r, [], i));
}
function vl(t) {
  const e = Ie(t);
  let i = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const r = De(t), l = r ? t.offsetWidth : i, o = r ? t.offsetHeight : n, s = Gt(i) !== l || Gt(n) !== o;
  return s && (i = l, n = o), {
    width: i,
    height: n,
    $: s
  };
}
function Ji(t) {
  return Fe(t) ? t : t.contextElement;
}
function ut(t) {
  const e = Ji(t);
  if (!De(e))
    return Ve(1);
  const i = e.getBoundingClientRect(), {
    width: n,
    height: r,
    $: l
  } = vl(e);
  let o = (l ? Gt(i.width) : i.width) / n, s = (l ? Gt(i.height) : i.height) / r;
  return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: o,
    y: s
  };
}
const Pf = /* @__PURE__ */ Ve(0);
function wl(t) {
  const e = Te(t);
  return !Yi() || !e.visualViewport ? Pf : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Lf(t, e, i) {
  return e === void 0 && (e = !1), !i || e && i !== Te(t) ? !1 : e;
}
function et(t, e, i, n) {
  e === void 0 && (e = !1), i === void 0 && (i = !1);
  const r = t.getBoundingClientRect(), l = Ji(t);
  let o = Ve(1);
  e && (n ? Fe(n) && (o = ut(n)) : o = ut(t));
  const s = Lf(l, i, n) ? wl(l) : Ve(0);
  let u = (r.left + s.x) / o.x, a = (r.top + s.y) / o.y, f = r.width / o.x, c = r.height / o.y;
  if (l) {
    const d = Te(l), k = n && Fe(n) ? Te(n) : n;
    let g = d.frameElement;
    for (; g && n && k !== d; ) {
      const m = ut(g), p = g.getBoundingClientRect(), b = Ie(g), y = p.left + (g.clientLeft + parseFloat(b.paddingLeft)) * m.x, w = p.top + (g.clientTop + parseFloat(b.paddingTop)) * m.y;
      u *= m.x, a *= m.y, f *= m.x, c *= m.y, u += y, a += w, g = Te(g).frameElement;
    }
  }
  return Vt({
    width: f,
    height: c,
    x: u,
    y: a
  });
}
const Mf = [":popover-open", ":modal"];
function Cl(t) {
  let e = !1, i = 0, n = 0;
  function r(l) {
    try {
      e = e || t.matches(l);
    } catch {
    }
  }
  if (Mf.forEach((l) => {
    r(l);
  }), e) {
    const l = pl(t);
    if (l) {
      const o = l.getBoundingClientRect();
      i = o.x, n = o.y;
    }
  }
  return [e, i, n];
}
function Nf(t) {
  let {
    elements: e,
    rect: i,
    offsetParent: n,
    strategy: r
  } = t;
  const l = We(n), [o] = e ? Cl(e.floating) : [!1];
  if (n === l || o)
    return i;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ve(1);
  const a = Ve(0), f = De(n);
  if ((f || !f && r !== "fixed") && ((qe(n) !== "body" || Ot(l)) && (s = ni(n)), De(n))) {
    const c = et(n);
    u = ut(n), a.x = c.x + n.clientLeft, a.y = c.y + n.clientTop;
  }
  return {
    width: i.width * u.x,
    height: i.height * u.y,
    x: i.x * u.x - s.scrollLeft * u.x + a.x,
    y: i.y * u.y - s.scrollTop * u.y + a.y
  };
}
function zf(t) {
  return Array.from(t.getClientRects());
}
function Sl(t) {
  return et(We(t)).left + ni(t).scrollLeft;
}
function Rf(t) {
  const e = We(t), i = ni(t), n = t.ownerDocument.body, r = Ze(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), l = Ze(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -i.scrollLeft + Sl(t);
  const s = -i.scrollTop;
  return Ie(n).direction === "rtl" && (o += Ze(e.clientWidth, n.clientWidth) - r), {
    width: r,
    height: l,
    x: o,
    y: s
  };
}
function Df(t, e) {
  const i = Te(t), n = We(t), r = i.visualViewport;
  let l = n.clientWidth, o = n.clientHeight, s = 0, u = 0;
  if (r) {
    l = r.width, o = r.height;
    const a = Yi();
    (!a || a && e === "fixed") && (s = r.offsetLeft, u = r.offsetTop);
  }
  return {
    width: l,
    height: o,
    x: s,
    y: u
  };
}
function Bf(t, e) {
  const i = et(t, !0, e === "fixed"), n = i.top + t.clientTop, r = i.left + t.clientLeft, l = De(t) ? ut(t) : Ve(1), o = t.clientWidth * l.x, s = t.clientHeight * l.y, u = r * l.x, a = n * l.y;
  return {
    width: o,
    height: s,
    x: u,
    y: a
  };
}
function er(t, e, i) {
  let n;
  if (e === "viewport")
    n = Df(t, i);
  else if (e === "document")
    n = Rf(We(t));
  else if (Fe(e))
    n = Bf(e, i);
  else {
    const r = wl(t);
    n = {
      ...e,
      x: e.x - r.x,
      y: e.y - r.y
    };
  }
  return Vt(n);
}
function Tl(t, e) {
  const i = dt(t);
  return i === e || !Fe(i) || ii(i) ? !1 : Ie(i).position === "fixed" || Tl(i, e);
}
function Ff(t, e) {
  const i = e.get(t);
  if (i)
    return i;
  let n = Ct(t, [], !1).filter((s) => Fe(s) && qe(s) !== "body"), r = null;
  const l = Ie(t).position === "fixed";
  let o = l ? dt(t) : t;
  for (; Fe(o) && !ii(o); ) {
    const s = Ie(o), u = Ki(o);
    !u && s.position === "fixed" && (r = null), (l ? !u && !r : !u && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Ot(o) && !u && Tl(t, o)) ? n = n.filter((f) => f !== o) : r = s, o = dt(o);
  }
  return e.set(t, n), n;
}
function jf(t) {
  let {
    element: e,
    boundary: i,
    rootBoundary: n,
    strategy: r
  } = t;
  const o = [...i === "clippingAncestors" ? Ff(e, this._c) : [].concat(i), n], s = o[0], u = o.reduce((a, f) => {
    const c = er(e, f, r);
    return a.top = Ze(c.top, a.top), a.right = ct(c.right, a.right), a.bottom = ct(c.bottom, a.bottom), a.left = Ze(c.left, a.left), a;
  }, er(e, s, r));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Wf(t) {
  const {
    width: e,
    height: i
  } = vl(t);
  return {
    width: e,
    height: i
  };
}
function Uf(t, e, i, n) {
  const r = De(e), l = We(e), o = i === "fixed", s = et(t, !0, o, e);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Ve(0);
  if (r || !r && !o)
    if ((qe(e) !== "body" || Ot(l)) && (u = ni(e)), r) {
      const m = et(e, !0, o, e);
      a.x = m.x + e.clientLeft, a.y = m.y + e.clientTop;
    } else
      l && (a.x = Sl(l));
  let f = s.left + u.scrollLeft - a.x, c = s.top + u.scrollTop - a.y;
  const [d, k, g] = Cl(n);
  return d && (f += k, c += g, r && (f += e.clientLeft, c += e.clientTop)), {
    x: f,
    y: c,
    width: s.width,
    height: s.height
  };
}
function tr(t, e) {
  return !De(t) || Ie(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function El(t, e) {
  const i = Te(t);
  if (!De(t))
    return i;
  let n = tr(t, e);
  for (; n && If(n) && Ie(n).position === "static"; )
    n = tr(n, e);
  return n && (qe(n) === "html" || qe(n) === "body" && Ie(n).position === "static" && !Ki(n)) ? i : n || pl(t) || i;
}
const Gf = async function(t) {
  const e = this.getOffsetParent || El, i = this.getDimensions;
  return {
    reference: Uf(t.reference, await e(t.floating), t.strategy, t.floating),
    floating: {
      x: 0,
      y: 0,
      ...await i(t.floating)
    }
  };
};
function Hf(t) {
  return Ie(t).direction === "rtl";
}
const Vf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Nf,
  getDocumentElement: We,
  getClippingRect: jf,
  getOffsetParent: El,
  getElementRects: Gf,
  getClientRects: zf,
  getDimensions: Wf,
  getScale: ut,
  isElement: Fe,
  isRTL: Hf
};
function qf(t, e) {
  let i = null, n;
  const r = We(t);
  function l() {
    var s;
    clearTimeout(n), (s = i) == null || s.disconnect(), i = null;
  }
  function o(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), l();
    const {
      left: a,
      top: f,
      width: c,
      height: d
    } = t.getBoundingClientRect();
    if (s || e(), !c || !d)
      return;
    const k = Mt(f), g = Mt(r.clientWidth - (a + c)), m = Mt(r.clientHeight - (f + d)), p = Mt(a), y = {
      rootMargin: -k + "px " + -g + "px " + -m + "px " + -p + "px",
      threshold: Ze(0, ct(1, u)) || 1
    };
    let w = !0;
    function _(C) {
      const T = C[0].intersectionRatio;
      if (T !== u) {
        if (!w)
          return o();
        T ? o(!1, T) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      w = !1;
    }
    try {
      i = new IntersectionObserver(_, {
        ...y,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      i = new IntersectionObserver(_, y);
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
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, a = Ji(t), f = r || l ? [...a ? Ct(a) : [], ...Ct(e)] : [];
  f.forEach((b) => {
    r && b.addEventListener("scroll", i, {
      passive: !0
    }), l && b.addEventListener("resize", i);
  });
  const c = a && s ? qf(a, i) : null;
  let d = -1, k = null;
  o && (k = new ResizeObserver((b) => {
    let [y] = b;
    y && y.target === a && k && (k.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var w;
      (w = k) == null || w.observe(e);
    })), i();
  }), a && !u && k.observe(a), k.observe(e));
  let g, m = u ? et(t) : null;
  u && p();
  function p() {
    const b = et(t);
    m && (b.x !== m.x || b.y !== m.y || b.width !== m.width || b.height !== m.height) && i(), m = b, g = requestAnimationFrame(p);
  }
  return i(), () => {
    var b;
    f.forEach((y) => {
      r && y.removeEventListener("scroll", i), l && y.removeEventListener("resize", i);
    }), c == null || c(), (b = k) == null || b.disconnect(), k = null, u && cancelAnimationFrame(g);
  };
}
const Xf = Of, Qf = Tf, Kf = Sf, Yf = (t, e, i) => {
  const n = /* @__PURE__ */ new Map(), r = {
    platform: Vf,
    ...i
  }, l = {
    ...r.platform,
    _c: n
  };
  return Cf(t, e, {
    ...r,
    platform: l
  });
};
function nr(t) {
  let e;
  return {
    c() {
      e = N("div");
    },
    m(i, n) {
      A(i, e, n), t[23](e);
    },
    p: le,
    d(i) {
      i && E(e), t[23](null);
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
    $$slots: { default: [Jf] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = M(r, n[l]);
  return e = new it({ props: r }), e.$on("focusin", function() {
    me(Ge(
      /*activeContent*/
      t[1],
      /*showHandler*/
      t[7]
    )) && Ge(
      /*activeContent*/
      t[1],
      /*showHandler*/
      t[7]
    ).apply(this, arguments);
  }), e.$on("focusout", function() {
    me(Ge(
      /*activeContent*/
      t[1],
      /*hideHandler*/
      t[8]
    )) && Ge(
      /*activeContent*/
      t[1],
      /*hideHandler*/
      t[8]
    ).apply(this, arguments);
  }), e.$on("mouseenter", function() {
    me(Ge(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*showHandler*/
      t[7]
    )) && Ge(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*showHandler*/
      t[7]
    ).apply(this, arguments);
  }), e.$on("mouseleave", function() {
    me(Ge(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*hideHandler*/
      t[8]
    )) && Ge(
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
      const s = o[0] & /*init, referenceEl, activeContent, $$restProps*/
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
        2048 && Pe(
          /*$$restProps*/
          t[11]
        )
      ]) : {};
      o[0] & /*$$scope, arrowClass, arrow*/
      16777284 && (s.$$scope = { dirty: o, ctx: t }), e.$set(s);
    },
    i(l) {
      i || (v(e.$$.fragment, l), i = !0);
    },
    o(l) {
      S(e.$$.fragment, l), i = !1;
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
      e = N("div"), h(
        e,
        "class",
        /*arrowClass*/
        t[6]
      );
    },
    m(r, l) {
      A(r, e, l), i || (n = at(
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
      r && E(e), i = !1, n();
    }
  };
}
function Jf(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[22].default
  ), l = X(
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
    m(s, u) {
      l && l.m(s, u), A(s, e, u), o && o.m(s, u), A(s, i, u), n = !0;
    },
    p(s, u) {
      l && l.p && (!n || u[0] & /*$$scope*/
      16777216) && K(
        l,
        r,
        s,
        /*$$scope*/
        s[24],
        n ? Q(
          r,
          /*$$scope*/
          s[24],
          u,
          null
        ) : Y(
          /*$$scope*/
          s[24]
        ),
        null
      ), /*arrow*/
      s[2] ? o ? o.p(s, u) : (o = lr(s), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(s) {
      n || (v(l, s), n = !0);
    },
    o(s) {
      S(l, s), n = !1;
    },
    d(s) {
      s && (E(e), E(i)), l && l.d(s), o && o.d(s);
    }
  };
}
function Zf(t) {
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
    m(o, s) {
      r && r.m(o, s), A(o, e, s), l && l.m(o, s), A(o, i, s), n = !0;
    },
    p(o, s) {
      /*referenceEl*/
      o[3] ? r && (r.d(1), r = null) : r ? r.p(o, s) : (r = nr(o), r.c(), r.m(e.parentNode, e)), /*open*/
      o[0] && /*referenceEl*/
      o[3] ? l ? (l.p(o, s), s[0] & /*open, referenceEl*/
      9 && v(l, 1)) : (l = rr(o), l.c(), v(l, 1), l.m(i.parentNode, i)) : l && (oe(), S(l, 1, 1, () => {
        l = null;
      }), se());
    },
    i(o) {
      n || (v(l), n = !0);
    },
    o(o) {
      S(l), n = !1;
    },
    d(o) {
      o && (E(e), E(i)), r && r.d(o), l && l.d(o);
    }
  };
}
function Ge(t, e) {
  return t ? e : () => {
  };
}
function xf(t, e, i) {
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
  let l = ie(e, r), { $$slots: o = {}, $$scope: s } = e, { activeContent: u = !1 } = e, { arrow: a = !0 } = e, { offset: f = 8 } = e, { placement: c = "top" } = e, { trigger: d = "hover" } = e, { triggeredBy: k = void 0 } = e, { reference: g = void 0 } = e, { strategy: m = "absolute" } = e, { open: p = !1 } = e, { yOnly: b = !1 } = e, { middlewares: y = [Qf(), Xf()] } = e;
  const w = je();
  let _, C, T, P, U, q = [], ee = !1;
  const L = () => (ee = !0, setTimeout(() => ee = !1, 250)), G = (V) => {
    C === void 0 && console.error("trigger undefined"), !g && q.includes(V.target) && C !== V.target && (i(3, C = V.target), L()), _ && V.type === "focusin" && !p && L(), i(0, p = _ && V.type === "click" && !ee ? !p : !0);
  }, ge = (V) => V.matches(":hover"), F = (V) => V.contains(document.activeElement), R = (V) => V != null ? `${V}px` : "", O = (V) => {
    u ? setTimeout(
      () => {
        const ye = [C, T, ...q].filter(Boolean);
        V.type === "mouseleave" && ye.some(ge) || V.type === "focusout" && ye.some(F) || i(0, p = !1);
      },
      100
    ) : i(0, p = !1);
  };
  let te;
  const de = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function pe() {
    Yf(C, T, { placement: c, strategy: m, middleware: n }).then(({ x: V, y: ye, middlewareData: Se, placement: W, strategy: ri }) => {
      T.style.position = ri, T.style.left = b ? "0" : R(V), T.style.top = R(ye), Se.arrow && P instanceof HTMLDivElement && (i(20, P.style.left = R(Se.arrow.x), P), i(20, P.style.top = R(Se.arrow.y), P), i(21, te = de[W.split("-")[0]]), i(20, P.style[te] = R(-P.offsetWidth / 2 - (e.border ? 1 : 0)), P));
    });
  }
  function Le(V, ye) {
    T = V;
    let Se = ir(ye, T, pe);
    return {
      update(W) {
        Se(), Se = ir(W, T, pe);
      },
      destroy() {
        Se();
      }
    };
  }
  Ke(() => {
    const V = [
      ["focusin", G, !0],
      ["focusout", O, !0],
      ["click", G, _],
      ["mouseenter", G, !_],
      ["mouseleave", O, !_]
    ];
    return k ? q = [...document.querySelectorAll(k)] : q = U.previousElementSibling ? [U.previousElementSibling] : [], q.length || console.error("No triggers found."), q.forEach((ye) => {
      ye.tabIndex < 0 && (ye.tabIndex = 0);
      for (const [Se, W, ri] of V)
        ri && ye.addEventListener(Se, W);
    }), g ? (i(3, C = document.querySelector(g) ?? document.body), C === document.body ? console.error(`Popup reference not found: '${g}'`) : (C.addEventListener("focusout", O), _ || C.addEventListener("mouseleave", O))) : i(3, C = q[0]), () => {
      q.forEach((ye) => {
        if (ye)
          for (const [Se, W] of V)
            ye.removeEventListener(Se, W);
      }), C && (C.removeEventListener("focusout", O), C.removeEventListener("mouseleave", O));
    };
  });
  let Ae;
  function Ne(V) {
    return i(20, P = V), {
      destroy() {
        i(20, P = null);
      }
    };
  }
  function _e(V) {
    Ee[V ? "unshift" : "push"](() => {
      U = V, i(5, U);
    });
  }
  return t.$$set = (V) => {
    i(36, e = M(M({}, e), B(V))), i(11, l = ie(e, r)), "activeContent" in V && i(1, u = V.activeContent), "arrow" in V && i(2, a = V.arrow), "offset" in V && i(12, f = V.offset), "placement" in V && i(13, c = V.placement), "trigger" in V && i(14, d = V.trigger), "triggeredBy" in V && i(15, k = V.triggeredBy), "reference" in V && i(16, g = V.reference), "strategy" in V && i(17, m = V.strategy), "open" in V && i(0, p = V.open), "yOnly" in V && i(18, b = V.yOnly), "middlewares" in V && i(19, y = V.middlewares), "$$scope" in V && i(24, s = V.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*trigger*/
    16384 && i(4, _ = d === "click"), t.$$.dirty[0] & /*open*/
    1 && w("show", p), t.$$.dirty[0] & /*placement, referenceEl*/
    8200 && c && (i(3, C), i(13, c)), t.$$.dirty[0] & /*middlewares, offset, arrowEl*/
    1576960 && (n = [
      ...y,
      Af(+f),
      P && Kf({ element: P, padding: 10 })
    ]), i(6, Ae = qr("uikit-absolute uikit-pointer-events-none uikit-block uikit-w-[10px] uikit-h-[10px] uikit-rotate-45 uikit-bg-inherit uikit-border-inherit", e.border && te === "bottom" && "uikit-border-b uikit-border-e", e.border && te === "top" && "uikit-border-t uikit-border-s ", e.border && te === "right" && "uikit-border-t uikit-border-e ", e.border && te === "left" && "uikit-border-b uikit-border-s "));
  }, e = B(e), [
    p,
    u,
    a,
    C,
    _,
    U,
    Ae,
    G,
    O,
    Le,
    Ne,
    l,
    f,
    c,
    d,
    k,
    g,
    m,
    b,
    y,
    P,
    te,
    o,
    _e,
    s
  ];
}
class $f extends re {
  constructor(e) {
    super(), ne(
      this,
      e,
      xf,
      Zf,
      J,
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
const ec = (t) => ({}), or = (t) => ({}), tc = (t) => ({}), sr = (t) => ({});
function ur(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[12].header
  ), r = X(
    n,
    t,
    /*$$scope*/
    t[15],
    sr
  );
  return {
    c() {
      e = N("div"), r && r.c(), h(
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
      32768) && K(
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
          tc
        ) : Y(
          /*$$scope*/
          l[15]
        ),
        sr
      );
    },
    i(l) {
      i || (v(r, l), i = !0);
    },
    o(l) {
      S(r, l), i = !1;
    },
    d(l) {
      l && E(e), r && r.d(l);
    }
  };
}
function ar(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[12].footer
  ), r = X(
    n,
    t,
    /*$$scope*/
    t[15],
    or
  );
  return {
    c() {
      e = N("div"), r && r.c(), h(
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
      32768) && K(
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
          ec
        ) : Y(
          /*$$scope*/
          l[15]
        ),
        or
      );
    },
    i(l) {
      i || (v(r, l), i = !0);
    },
    o(l) {
      S(r, l), i = !1;
    },
    d(l) {
      l && E(e), r && r.d(l);
    }
  };
}
function ic(t) {
  let e, i, n, r, l, o = (
    /*$$slots*/
    t[6].header && ur(t)
  );
  const s = (
    /*#slots*/
    t[12].default
  ), u = X(
    s,
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
      o && o.c(), e = H(), i = N("ul"), u && u.c(), n = H(), a && a.c(), r = ae(), h(
        i,
        "class",
        /*ulCls*/
        t[3]
      );
    },
    m(f, c) {
      o && o.m(f, c), A(f, e, c), A(f, i, c), u && u.m(i, null), A(f, n, c), a && a.m(f, c), A(f, r, c), l = !0;
    },
    p(f, c) {
      /*$$slots*/
      f[6].header ? o ? (o.p(f, c), c & /*$$slots*/
      64 && v(o, 1)) : (o = ur(f), o.c(), v(o, 1), o.m(e.parentNode, e)) : o && (oe(), S(o, 1, 1, () => {
        o = null;
      }), se()), u && u.p && (!l || c & /*$$scope*/
      32768) && K(
        u,
        s,
        f,
        /*$$scope*/
        f[15],
        l ? Q(
          s,
          /*$$scope*/
          f[15],
          c,
          null
        ) : Y(
          /*$$scope*/
          f[15]
        ),
        null
      ), /*$$slots*/
      f[6].footer ? a ? (a.p(f, c), c & /*$$slots*/
      64 && v(a, 1)) : (a = ar(f), a.c(), v(a, 1), a.m(r.parentNode, r)) : a && (oe(), S(a, 1, 1, () => {
        a = null;
      }), se());
    },
    i(f) {
      l || (v(o), v(u, f), v(a), l = !0);
    },
    o(f) {
      S(o), S(u, f), S(a), l = !1;
    },
    d(f) {
      f && (E(e), E(i), E(n), E(r)), o && o.d(f), u && u.d(f), a && a.d(f);
    }
  };
}
function nc(t) {
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
  function l(s) {
    t[13](s);
  }
  let o = {
    $$slots: { default: [ic] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < r.length; s += 1)
    o = M(o, r[s]);
  return (
    /*open*/
    t[0] !== void 0 && (o.open = /*open*/
    t[0]), e = new $f({ props: o }), Ee.push(() => Yt(e, "open", l)), e.$on(
      "show",
      /*show_handler*/
      t[14]
    ), {
      c() {
        $(e.$$.fragment);
      },
      m(s, u) {
        Z(e, s, u), n = !0;
      },
      p(s, [u]) {
        const a = u & /*$$restProps, containerCls*/
        34 ? ce(r, [
          r[0],
          u & /*$$restProps*/
          32 && Pe(
            /*$$restProps*/
            s[5]
          ),
          u & /*containerCls*/
          2 && { class: (
            /*containerCls*/
            s[1]
          ) }
        ]) : {};
        u & /*$$scope, $$slots*/
        32832 && (a.$$scope = { dirty: u, ctx: s }), !i && u & /*open*/
        1 && (i = !0, a.open = /*open*/
        s[0], Kt(() => i = !1)), e.$set(a);
      },
      i(s) {
        n || (v(e.$$.fragment, s), n = !0);
      },
      o(s) {
        S(e.$$.fragment, s), n = !1;
      },
      d(s) {
        x(e, s);
      }
    }
  );
}
function rc(t, e, i) {
  const n = ["activeUrl", "open", "containerClass", "headerClass", "footerClass", "activeClass"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Xe(l), u = Tt("");
  let { activeUrl: a = "" } = e, { open: f = !1 } = e, { containerClass: c = "uikit-divide-y z-50" } = e, { headerClass: d = "uikit-py-1 uikit-overflow-hidden uikit-rounded-t-lg" } = e, { footerClass: k = "uikit-py-1 uikit-overflow-hidden uikit-rounded-b-lg" } = e, { activeClass: g = "uikit-text-primary-700 dark:uikit-text-primary-700 hover:uikit-text-primary-900 dark:hover:uikit-text-primary-900" } = e, m = I(g, e.classActive);
  He("DropdownType", { activeClass: m }), He("activeUrl", u);
  let p = I(c, e.classContainer), b = I(d, e.classHeader), y = I("py-1", e.class), w = I(k, e.classFooter);
  function _(T) {
    f = T, i(0, f);
  }
  function C(T) {
    j.call(this, t, T);
  }
  return t.$$set = (T) => {
    i(18, e = M(M({}, e), B(T))), i(5, r = ie(e, n)), "activeUrl" in T && i(7, a = T.activeUrl), "open" in T && i(0, f = T.open), "containerClass" in T && i(8, c = T.containerClass), "headerClass" in T && i(9, d = T.headerClass), "footerClass" in T && i(10, k = T.footerClass), "activeClass" in T && i(11, g = T.activeClass), "$$scope" in T && i(15, o = T.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*activeUrl*/
    128 && u.set(a), i(5, r.arrow = r.arrow ?? !1, r), i(5, r.trigger = r.trigger ?? "click", r), i(5, r.placement = r.placement ?? "bottom", r), i(5, r.color = r.color ?? "dropdown", r), i(5, r.shadow = r.shadow ?? !0, r), i(5, r.rounded = r.rounded ?? !0, r);
  }, e = B(e), [
    f,
    p,
    b,
    y,
    w,
    r,
    s,
    a,
    c,
    d,
    k,
    g,
    l,
    _,
    C,
    o
  ];
}
class lc extends re {
  constructor(e) {
    super(), ne(this, e, rc, nc, J, {
      activeUrl: 7,
      open: 0,
      containerClass: 8,
      headerClass: 9,
      footerClass: 10,
      activeClass: 11
    });
  }
}
function oc(t) {
  let e = (
    /*tag*/
    t[2]
  ), i, n, r = (
    /*tag*/
    t[2] && di(t)
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
      l[2] ? e ? J(
        e,
        /*tag*/
        l[2]
      ) ? (r.d(1), r = di(l), e = /*tag*/
      l[2], r.c(), r.m(i.parentNode, i)) : r.p(l, o) : (r = di(l), e = /*tag*/
      l[2], r.c(), r.m(i.parentNode, i)) : e && (r.d(1), r = null, e = /*tag*/
      l[2]);
    },
    i(l) {
      n || (v(r, l), n = !0);
    },
    o(l) {
      S(r, l), n = !1;
    },
    d(l) {
      l && E(i), r && r.d(l);
    }
  };
}
function sc(t) {
  let e, i, n, r;
  const l = (
    /*#slots*/
    t[12].default
  ), o = X(
    l,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let s = [
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
  ], u = {};
  for (let a = 0; a < s.length; a += 1)
    u = M(u, s[a]);
  return {
    c() {
      e = N("button"), o && o.c(), ue(e, u);
    },
    m(a, f) {
      A(a, e, f), o && o.m(e, null), e.autofocus && e.focus(), i = !0, n || (r = [
        D(
          e,
          "click",
          /*click_handler_1*/
          t[22]
        ),
        D(
          e,
          "change",
          /*change_handler_1*/
          t[23]
        ),
        D(
          e,
          "keydown",
          /*keydown_handler_1*/
          t[24]
        ),
        D(
          e,
          "keyup",
          /*keyup_handler_1*/
          t[25]
        ),
        D(
          e,
          "touchstart",
          /*touchstart_handler_1*/
          t[26],
          { passive: !0 }
        ),
        D(
          e,
          "touchend",
          /*touchend_handler_1*/
          t[27]
        ),
        D(
          e,
          "touchcancel",
          /*touchcancel_handler_1*/
          t[28]
        ),
        D(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[29]
        ),
        D(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[30]
        )
      ], n = !0);
    },
    p(a, f) {
      o && o.p && (!i || f[0] & /*$$scope*/
      2048) && K(
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
        ) : Y(
          /*$$scope*/
          a[11]
        ),
        null
      ), ue(e, u = ce(s, [
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
      i || (v(o, a), i = !0);
    },
    o(a) {
      S(o, a), i = !1;
    },
    d(a) {
      a && E(e), o && o.d(a), n = !1, we(r);
    }
  };
}
function uc(t) {
  let e, i, n, r;
  const l = (
    /*#slots*/
    t[12].default
  ), o = X(
    l,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let s = [
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
  ], u = {};
  for (let a = 0; a < s.length; a += 1)
    u = M(u, s[a]);
  return {
    c() {
      e = N("a"), o && o.c(), ue(e, u);
    },
    m(a, f) {
      A(a, e, f), o && o.m(e, null), i = !0, n || (r = [
        D(
          e,
          "click",
          /*click_handler*/
          t[13]
        ),
        D(
          e,
          "change",
          /*change_handler*/
          t[14]
        ),
        D(
          e,
          "keydown",
          /*keydown_handler*/
          t[15]
        ),
        D(
          e,
          "keyup",
          /*keyup_handler*/
          t[16]
        ),
        D(
          e,
          "touchstart",
          /*touchstart_handler*/
          t[17],
          { passive: !0 }
        ),
        D(
          e,
          "touchend",
          /*touchend_handler*/
          t[18]
        ),
        D(
          e,
          "touchcancel",
          /*touchcancel_handler*/
          t[19]
        ),
        D(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[20]
        ),
        D(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[21]
        )
      ], n = !0);
    },
    p(a, f) {
      o && o.p && (!i || f[0] & /*$$scope*/
      2048) && K(
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
        ) : Y(
          /*$$scope*/
          a[11]
        ),
        null
      ), ue(e, u = ce(s, [
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
      i || (v(o, a), i = !0);
    },
    o(a) {
      S(o, a), i = !1;
    },
    d(a) {
      a && E(e), o && o.d(a), n = !1, we(r);
    }
  };
}
function di(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[12].default
  ), r = X(
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
  for (let s = 0; s < l.length; s += 1)
    o = M(o, l[s]);
  return {
    c() {
      e = N(
        /*tag*/
        t[2]
      ), r && r.c(), ft(
        /*tag*/
        t[2]
      )(e, o);
    },
    m(s, u) {
      A(s, e, u), r && r.m(e, null), i = !0;
    },
    p(s, u) {
      r && r.p && (!i || u[0] & /*$$scope*/
      2048) && K(
        r,
        n,
        s,
        /*$$scope*/
        s[11],
        i ? Q(
          n,
          /*$$scope*/
          s[11],
          u,
          null
        ) : Y(
          /*$$scope*/
          s[11]
        ),
        null
      ), ft(
        /*tag*/
        s[2]
      )(e, o = ce(l, [
        u[0] & /*$$restProps*/
        16 && /*$$restProps*/
        s[4],
        (!i || u[0] & /*buttonClass*/
        8) && { class: (
          /*buttonClass*/
          s[3]
        ) }
      ]));
    },
    i(s) {
      i || (v(r, s), i = !0);
    },
    o(s) {
      S(r, s), i = !1;
    },
    d(s) {
      s && E(e), r && r.d(s);
    }
  };
}
function ac(t) {
  let e, i, n, r;
  const l = [uc, sc, oc], o = [];
  function s(u, a) {
    return (
      /*href*/
      u[0] ? 0 : (
        /*tag*/
        u[2] === "button" ? 1 : 2
      )
    );
  }
  return e = s(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), A(u, n, a), r = !0;
    },
    p(u, a) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      S(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function fc(t, e, i) {
  const n = ["pill", "outline", "size", "href", "type", "color", "shadow", "tag", "checked"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Be("group");
  let { pill: u = !1 } = e, { outline: a = !1 } = e, { size: f = s ? "sm" : "md" } = e, { href: c = void 0 } = e, { type: d = "button" } = e, { color: k = s ? a ? "dark" : "alternative" : "primary" } = e, { shadow: g = !1 } = e, { tag: m = "button" } = e, { checked: p = void 0 } = e;
  const b = {
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
  }, y = {
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
  }, w = {
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
  }, _ = {
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
  }, C = {
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
  }, T = {
    xs: "uikit-px-3 uikit-py-2 uikit-text-xs",
    sm: "uikit-px-4 uikit-py-2 uikit-text-sm",
    md: "uikit-px-5 uikit-py-2.5 uikit-text-sm",
    lg: "uikit-px-5 uikit-py-3 uikit-text-base",
    xl: "uikit-px-6 uikit-py-3.5 uikit-text-base"
  }, P = () => a || k === "alternative" || k === "light";
  let U;
  function q(W) {
    j.call(this, t, W);
  }
  function ee(W) {
    j.call(this, t, W);
  }
  function L(W) {
    j.call(this, t, W);
  }
  function G(W) {
    j.call(this, t, W);
  }
  function ge(W) {
    j.call(this, t, W);
  }
  function F(W) {
    j.call(this, t, W);
  }
  function R(W) {
    j.call(this, t, W);
  }
  function O(W) {
    j.call(this, t, W);
  }
  function te(W) {
    j.call(this, t, W);
  }
  function de(W) {
    j.call(this, t, W);
  }
  function pe(W) {
    j.call(this, t, W);
  }
  function Le(W) {
    j.call(this, t, W);
  }
  function Ae(W) {
    j.call(this, t, W);
  }
  function Ne(W) {
    j.call(this, t, W);
  }
  function _e(W) {
    j.call(this, t, W);
  }
  function V(W) {
    j.call(this, t, W);
  }
  function ye(W) {
    j.call(this, t, W);
  }
  function Se(W) {
    j.call(this, t, W);
  }
  return t.$$set = (W) => {
    i(39, e = M(M({}, e), B(W))), i(4, r = ie(e, n)), "pill" in W && i(5, u = W.pill), "outline" in W && i(6, a = W.outline), "size" in W && i(7, f = W.size), "href" in W && i(0, c = W.href), "type" in W && i(1, d = W.type), "color" in W && i(8, k = W.color), "shadow" in W && i(9, g = W.shadow), "tag" in W && i(2, m = W.tag), "checked" in W && i(10, p = W.checked), "$$scope" in W && i(11, o = W.$$scope);
  }, t.$$.update = () => {
    i(3, U = I(
      "uikit-text-center uikit-font-medium",
      s ? "focus-within:uikit-ring-2" : "focus-within:uikit-ring-4",
      s && "focus-within:uikit-z-10",
      s || "focus-within:uikit-outline-none",
      "uikit-inline-flex uikit-items-center uikit-justify-center " + T[f],
      a && p && "uikit-border dark:uikit-border-gray-900",
      a && p && y[k],
      a && !p && C[k],
      !a && p && y[k],
      !a && !p && b[k],
      k === "alternative" && (s && !p ? "dark:uikit-bg-gray-700 dark:uikit-text-white dark:uikit-border-gray-700 dark:hover:uikit-border-gray-600 dark:hover:uikit-bg-gray-600" : "dark:uikit-bg-transparent dark:uikit-border-gray-600 dark:hover:uikit-border-gray-700"),
      a && k === "dark" && (s ? p ? "uikit-bg-gray-900 uikit-border-gray-800 dark:uikit-border-white dark:uikit-bg-gray-600" : "dark:uikit-text-white uikit-border-gray-800 dark:uikit-border-white" : "dark:uikit-text-gray-400 dark:uikit-border-gray-700"),
      w[k],
      P() && s && "uikit-border-s-0 first:uikit-border-s",
      s ? u && "first:uikit-rounded-s-full last:uikit-rounded-e-full" || "first:uikit-rounded-s-lg last:uikit-rounded-e-lg" : u && "uikit-rounded-full" || "uikit-rounded-lg",
      g && "uikit-shadow-lg",
      g && _[k],
      e.disabled && "uikit-cursor-not-allowed uikit-opacity-50",
      e.class
    ));
  }, e = B(e), [
    c,
    d,
    m,
    U,
    r,
    u,
    a,
    f,
    k,
    g,
    p,
    o,
    l,
    q,
    ee,
    L,
    G,
    ge,
    F,
    R,
    O,
    te,
    de,
    pe,
    Le,
    Ae,
    Ne,
    _e,
    V,
    ye,
    Se
  ];
}
class qt extends re {
  constructor(e) {
    super(), ne(
      this,
      e,
      fc,
      ac,
      J,
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
function cc(t) {
  let e;
  const i = (
    /*#slots*/
    t[7].default
  ), n = X(
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
      64) && K(
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
        ) : Y(
          /*$$scope*/
          r[6]
        ),
        null
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
    },
    o(r) {
      S(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function dc(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[7].default
  ), r = X(
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
  for (let s = 0; s < l.length; s += 1)
    o = M(o, l[s]);
  return {
    c() {
      e = N("label"), r && r.c(), ue(e, o);
    },
    m(s, u) {
      A(s, e, u), r && r.m(e, null), t[8](e), i = !0;
    },
    p(s, u) {
      r && r.p && (!i || u & /*$$scope*/
      64) && K(
        r,
        n,
        s,
        /*$$scope*/
        s[6],
        i ? Q(
          n,
          /*$$scope*/
          s[6],
          u,
          null
        ) : Y(
          /*$$scope*/
          s[6]
        ),
        null
      ), ue(e, o = ce(l, [
        u & /*$$restProps*/
        8 && /*$$restProps*/
        s[3],
        (!i || u & /*labelClass*/
        4) && { class: (
          /*labelClass*/
          s[2]
        ) }
      ]));
    },
    i(s) {
      i || (v(r, s), i = !0);
    },
    o(s) {
      S(r, s), i = !1;
    },
    d(s) {
      s && E(e), r && r.d(s), t[8](null);
    }
  };
}
function kc(t) {
  let e, i, n, r;
  const l = [dc, cc], o = [];
  function s(u, a) {
    return (
      /*show*/
      u[0] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), A(u, n, a), r = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      S(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function gc(t, e, i) {
  let n;
  const r = ["color", "defaultClass", "show"];
  let l = ie(e, r), { $$slots: o = {}, $$scope: s } = e, { color: u = "gray" } = e, { defaultClass: a = "uikit-text-sm rtl:uikit-text-right uikit-font-medium uikit-block" } = e, { show: f = !0 } = e, c;
  const d = {
    gray: "uikit-text-gray-900 dark:uikit-text-gray-300",
    green: "uikit-text-green-700 dark:uikit-text-green-500",
    red: "uikit-text-red-700 dark:uikit-text-red-500",
    disabled: "uikit-text-gray-400 dark:uikit-text-gray-500"
  };
  function k(g) {
    Ee[g ? "unshift" : "push"](() => {
      c = g, i(1, c);
    });
  }
  return t.$$set = (g) => {
    i(10, e = M(M({}, e), B(g))), i(3, l = ie(e, r)), "color" in g && i(4, u = g.color), "defaultClass" in g && i(5, a = g.defaultClass), "show" in g && i(0, f = g.show), "$$scope" in g && i(6, s = g.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*node, color*/
    18) {
      const g = c == null ? void 0 : c.control;
      i(4, u = g != null && g.disabled ? "disabled" : u);
    }
    i(2, n = I(a, d[u], e.class));
  }, e = B(e), [
    f,
    c,
    n,
    l,
    u,
    a,
    s,
    o,
    k
  ];
}
class mc extends re {
  constructor(e) {
    super(), ne(this, e, gc, kc, J, { color: 4, defaultClass: 5, show: 0 });
  }
}
function hc(t) {
  let e, i, n, r, l, o, s, u = [
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
  for (let d = 0; d < u.length; d += 1)
    a = M(a, u[d]);
  const f = (
    /*#slots*/
    t[9].default
  ), c = X(
    f,
    t,
    /*$$scope*/
    t[23],
    null
  );
  return l = jl(
    /*$$binding_groups*/
    t[22][0]
  ), {
    c() {
      e = N("input"), n = H(), c && c.c(), ue(e, a), l.p(e);
    },
    m(d, k) {
      A(d, e, k), e.autofocus && e.focus(), e.checked = e.__value === /*group*/
      t[0], A(d, n, k), c && c.m(d, k), r = !0, o || (s = [
        D(
          e,
          "change",
          /*input_change_handler*/
          t[21]
        ),
        D(
          e,
          "blur",
          /*blur_handler*/
          t[10]
        ),
        D(
          e,
          "change",
          /*change_handler*/
          t[11]
        ),
        D(
          e,
          "click",
          /*click_handler*/
          t[12]
        ),
        D(
          e,
          "focus",
          /*focus_handler*/
          t[13]
        ),
        D(
          e,
          "keydown",
          /*keydown_handler*/
          t[14]
        ),
        D(
          e,
          "keypress",
          /*keypress_handler*/
          t[15]
        ),
        D(
          e,
          "keyup",
          /*keyup_handler*/
          t[16]
        ),
        D(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[17]
        ),
        D(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[18]
        ),
        D(
          e,
          "mouseover",
          /*mouseover_handler*/
          t[19]
        ),
        D(
          e,
          "paste",
          /*paste_handler*/
          t[20]
        )
      ], o = !0);
    },
    p(d, k) {
      ue(e, a = ce(u, [
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
      8388608) && K(
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
        ) : Y(
          /*$$scope*/
          d[23]
        ),
        null
      );
    },
    i(d) {
      r || (v(c, d), r = !0);
    },
    o(d) {
      S(c, d), r = !1;
    },
    d(d) {
      d && (E(e), E(n)), c && c.d(d), l.r(), o = !1, we(s);
    }
  };
}
function bc(t) {
  let e, i;
  return e = new mc({
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
      $$slots: { default: [hc] },
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
const _c = {
  primary: "uikit-text-primary-600 focus:uikit-ring-primary-500 dark:focus:uikit-ring-primary-600",
  secondary: "uikit-text-secondary-600 focus:uikit-ring-secondary-500 dark:focus:uikit-ring-secondary-600",
  red: "uikit-text-red-600 focus:uikit-ring-red-500 dark:focus:uikit-ring-red-600",
  green: "uikit-text-green-600 focus:uikit-ring-green-500 dark:focus:uikit-ring-green-600",
  purple: "uikit-text-purple-600 focus:uikit-ring-purple-500 dark:focus:uikit-ring-purple-600",
  teal: "uikit-text-teal-600 focus:uikit-ring-teal-500 dark:focus:uikit-ring-teal-600",
  yellow: "uikit-text-yellow-400 focus:uikit-ring-yellow-500 dark:focus:uikit-ring-yellow-600",
  orange: "uikit-text-orange-500 focus:uikit-ring-orange-500 dark:focus:uikit-ring-orange-600",
  blue: "uikit-text-blue-600 focus:uikit-ring-blue-500 dark:focus:uikit-ring-blue-600"
}, fr = (t, e) => I(t ? "uikit-inline-flex" : "uikit-flex", "uikit-items-center", e);
let pc = "uikit-me-2";
const cr = (t, e, i, n, r) => I(
  "uikit-w-4 uikit-h-4 uikit-bg-gray-100 uikit-border-gray-300 dark:uikit-ring-offset-gray-800 focus:uikit-ring-2",
  pc,
  n ? "dark:uikit-bg-gray-600 dark:uikit-border-gray-500" : "dark:uikit-bg-gray-700 dark:uikit-border-gray-600",
  t && "uikit-sr-only uikit-peer",
  i && "uikit-rounded",
  _c[e],
  r
);
function yc(t, e, i) {
  const n = ["color", "custom", "inline", "group", "value"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Xe(l);
  let { color: u = "primary" } = e, { custom: a = !1 } = e, { inline: f = !1 } = e, { group: c = "" } = e, { value: d = "" } = e, k = Be("background");
  const g = [[]];
  function m(L) {
    j.call(this, t, L);
  }
  function p(L) {
    j.call(this, t, L);
  }
  function b(L) {
    j.call(this, t, L);
  }
  function y(L) {
    j.call(this, t, L);
  }
  function w(L) {
    j.call(this, t, L);
  }
  function _(L) {
    j.call(this, t, L);
  }
  function C(L) {
    j.call(this, t, L);
  }
  function T(L) {
    j.call(this, t, L);
  }
  function P(L) {
    j.call(this, t, L);
  }
  function U(L) {
    j.call(this, t, L);
  }
  function q(L) {
    j.call(this, t, L);
  }
  function ee() {
    c = this.__value, i(0, c);
  }
  return t.$$set = (L) => {
    i(6, e = M(M({}, e), B(L))), i(8, r = ie(e, n)), "color" in L && i(1, u = L.color), "custom" in L && i(2, a = L.custom), "inline" in L && i(3, f = L.inline), "group" in L && i(0, c = L.group), "value" in L && i(4, d = L.value), "$$scope" in L && i(23, o = L.$$scope);
  }, e = B(e), [
    c,
    u,
    a,
    f,
    d,
    k,
    e,
    s,
    r,
    l,
    m,
    p,
    b,
    y,
    w,
    _,
    C,
    T,
    P,
    U,
    q,
    ee,
    g,
    o
  ];
}
class vc extends re {
  constructor(e) {
    super(), ne(this, e, yc, bc, J, {
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
function wc(t) {
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
  return n = new ei({
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
      r || (v(n.$$.fragment, l), r = !0);
    },
    o(l) {
      S(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && E(i), x(n, l);
    }
  };
}
function Cc(t) {
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
      n && E(i);
    }
  };
}
function kr(t) {
  let e, i, n, r, l;
  function o(u) {
    t[2](u);
  }
  let s = {
    name: "group1",
    value: (
      /*idx*/
      t[6]
    ),
    $$slots: { default: [Cc] },
    $$scope: { ctx: t }
  };
  return (
    /*group*/
    t[1] !== void 0 && (s.group = /*group*/
    t[1]), i = new vc({ props: s }), Ee.push(() => Yt(i, "group", o)), {
      c() {
        e = N("li"), $(i.$$.fragment), r = H();
      },
      m(u, a) {
        A(u, e, a), Z(i, e, null), z(e, r), l = !0;
      },
      p(u, a) {
        const f = {};
        a & /*$$scope, items*/
        129 && (f.$$scope = { dirty: a, ctx: u }), !n && a & /*group*/
        2 && (n = !0, f.group = /*group*/
        u[1], Kt(() => n = !1)), i.$set(f);
      },
      i(u) {
        l || (v(i.$$.fragment, u), l = !0);
      },
      o(u) {
        S(i.$$.fragment, u), l = !1;
      },
      d(u) {
        u && E(e), x(i);
      }
    }
  );
}
function Sc(t) {
  let e, i, n = ve(
    /*items*/
    t[0]
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = kr(dr(t, n, o));
  const l = (o) => S(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = ae();
    },
    m(o, s) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(o, s);
      A(o, e, s), i = !0;
    },
    p(o, s) {
      if (s & /*group, items*/
      3) {
        n = ve(
          /*items*/
          o[0]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = dr(o, n, u);
          r[u] ? (r[u].p(a, s), v(r[u], 1)) : (r[u] = kr(a), r[u].c(), v(r[u], 1), r[u].m(e.parentNode, e));
        }
        for (oe(), u = n.length; u < r.length; u += 1)
          l(u);
        se();
      }
    },
    i(o) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          v(r[s]);
        i = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        S(r[s]);
      i = !1;
    },
    d(o) {
      o && E(e), Qe(r, o);
    }
  };
}
function Tc(t) {
  let e, i, n, r;
  return e = new qt({
    props: {
      $$slots: { default: [wc] },
      $$scope: { ctx: t }
    }
  }), n = new lc({
    props: {
      class: "uikit-w-44 uikit-p-3 uikit-space-y-3 uikit-text-sm",
      $$slots: { default: [Sc] },
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
      const s = {};
      o & /*$$scope, group, items*/
      131 && (s.$$scope = { dirty: o, ctx: l }), e.$set(s);
      const u = {};
      o & /*$$scope, items, group*/
      131 && (u.$$scope = { dirty: o, ctx: l }), n.$set(u);
    },
    i(l) {
      r || (v(e.$$.fragment, l), v(n.$$.fragment, l), r = !0);
    },
    o(l) {
      S(e.$$.fragment, l), S(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && E(i), x(e, l), x(n, l);
    }
  };
}
function Ec(t, e, i) {
  let n = -1;
  const r = je();
  let { items: l = [] } = e;
  function o(s) {
    n = s, i(1, n);
  }
  return t.$$set = (s) => {
    "items" in s && i(0, l = s.items);
  }, t.$$.update = () => {
    t.$$.dirty & /*group*/
    2 && n > -1 && r("change", n);
  }, [l, n, o];
}
class Ac extends re {
  constructor(e) {
    super(), ne(this, e, Ec, Tc, J, { items: 0 });
  }
}
const Qd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Ac({
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
function Oc(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[8].default
  ), l = X(
    r,
    t,
    /*$$scope*/
    t[7],
    null
  );
  let o = [
    /*$$restProps*/
    t[2],
    {
      class: i = I(
        /*asideClass*/
        t[0],
        /*$$props*/
        t[3].class
      )
    },
    { "aria-label": (
      /*ariaLabel*/
      t[1]
    ) }
  ], s = {};
  for (let u = 0; u < o.length; u += 1)
    s = M(s, o[u]);
  return {
    c() {
      e = N("aside"), l && l.c(), ue(e, s);
    },
    m(u, a) {
      A(u, e, a), l && l.m(e, null), n = !0;
    },
    p(u, [a]) {
      l && l.p && (!n || a & /*$$scope*/
      128) && K(
        l,
        r,
        u,
        /*$$scope*/
        u[7],
        n ? Q(
          r,
          /*$$scope*/
          u[7],
          a,
          null
        ) : Y(
          /*$$scope*/
          u[7]
        ),
        null
      ), ue(e, s = ce(o, [
        a & /*$$restProps*/
        4 && /*$$restProps*/
        u[2],
        (!n || a & /*asideClass, $$props*/
        9 && i !== (i = I(
          /*asideClass*/
          u[0],
          /*$$props*/
          u[3].class
        ))) && { class: i },
        (!n || a & /*ariaLabel*/
        2) && { "aria-label": (
          /*ariaLabel*/
          u[1]
        ) }
      ]));
    },
    i(u) {
      n || (v(l, u), n = !0);
    },
    o(u) {
      S(l, u), n = !1;
    },
    d(u) {
      u && E(e), l && l.d(u);
    }
  };
}
function Ic(t, e, i) {
  const n = ["activeUrl", "asideClass", "nonActiveClass", "activeClass", "ariaLabel"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Tt("");
  let { activeUrl: u = "" } = e, { asideClass: a = "uikit-w-64" } = e, { nonActiveClass: f = "uikit-flex uikit-items-center uikit-p-2 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { activeClass: c = "uikit-flex uikit-items-center uikit-p-2 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-bg-gray-200 dark:uikit-bg-gray-700 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { ariaLabel: d = "Sidebar" } = e;
  return He("sidebarContext", { activeClass: c, nonActiveClass: f }), He("activeUrl", s), t.$$set = (k) => {
    i(3, e = M(M({}, e), B(k))), i(2, r = ie(e, n)), "activeUrl" in k && i(4, u = k.activeUrl), "asideClass" in k && i(0, a = k.asideClass), "nonActiveClass" in k && i(5, f = k.nonActiveClass), "activeClass" in k && i(6, c = k.activeClass), "ariaLabel" in k && i(1, d = k.ariaLabel), "$$scope" in k && i(7, o = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*activeUrl*/
    16 && s.set(u);
  }, e = B(e), [
    a,
    d,
    r,
    e,
    u,
    f,
    c,
    o,
    l
  ];
}
class Pc extends re {
  constructor(e) {
    super(), ne(this, e, Ic, Oc, J, {
      activeUrl: 4,
      asideClass: 0,
      nonActiveClass: 5,
      activeClass: 6,
      ariaLabel: 1
    });
  }
}
function Lc(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[6].default
  ), l = X(
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
      class: i = I(
        /*ulClass*/
        t[0],
        /*$$props*/
        t[2].class
      )
    }
  ], s = {};
  for (let u = 0; u < o.length; u += 1)
    s = M(s, o[u]);
  return {
    c() {
      e = N("ul"), l && l.c(), ue(e, s);
    },
    m(u, a) {
      A(u, e, a), l && l.m(e, null), n = !0;
    },
    p(u, [a]) {
      l && l.p && (!n || a & /*$$scope*/
      32) && K(
        l,
        r,
        u,
        /*$$scope*/
        u[5],
        n ? Q(
          r,
          /*$$scope*/
          u[5],
          a,
          null
        ) : Y(
          /*$$scope*/
          u[5]
        ),
        null
      ), ue(e, s = ce(o, [
        a & /*$$restProps*/
        2 && /*$$restProps*/
        u[1],
        (!n || a & /*ulClass, $$props*/
        5 && i !== (i = I(
          /*ulClass*/
          u[0],
          /*$$props*/
          u[2].class
        ))) && { class: i }
      ]));
    },
    i(u) {
      n || (v(l, u), n = !0);
    },
    o(u) {
      S(l, u), n = !1;
    },
    d(u) {
      u && E(e), l && l.d(u);
    }
  };
}
function Mc(t, e, i) {
  const n = ["ulClass", "borderClass", "border"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e, { ulClass: s = "uikit-space-y-2" } = e, { borderClass: u = "uikit-pt-4 uikit-mt-4 uikit-border-t uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { border: a = !1 } = e;
  return a && (s += " " + u), t.$$set = (f) => {
    i(2, e = M(M({}, e), B(f))), i(1, r = ie(e, n)), "ulClass" in f && i(0, s = f.ulClass), "borderClass" in f && i(3, u = f.borderClass), "border" in f && i(4, a = f.border), "$$scope" in f && i(5, o = f.$$scope);
  }, e = B(e), [s, r, e, u, a, o, l];
}
class Nc extends re {
  constructor(e) {
    super(), ne(this, e, Mc, Lc, J, { ulClass: 0, borderClass: 3, border: 4 });
  }
}
const zc = (t) => ({}), gr = (t) => ({}), Rc = (t) => ({}), mr = (t) => ({});
function hr(t) {
  let e;
  const i = (
    /*#slots*/
    t[11].subtext
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[10],
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
      1024) && K(
        n,
        i,
        r,
        /*$$scope*/
        r[10],
        e ? Q(
          i,
          /*$$scope*/
          r[10],
          l,
          zc
        ) : Y(
          /*$$scope*/
          r[10]
        ),
        gr
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
    },
    o(r) {
      S(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Dc(t) {
  let e, i, n, r, l, o, s, u, a;
  const f = (
    /*#slots*/
    t[11].icon
  ), c = X(
    f,
    t,
    /*$$scope*/
    t[10],
    mr
  );
  let d = (
    /*$$slots*/
    t[5].subtext && hr(t)
  ), k = [
    /*$$restProps*/
    t[4],
    { href: (
      /*href*/
      t[0]
    ) },
    { class: (
      /*aClass*/
      t[3]
    ) }
  ], g = {};
  for (let m = 0; m < k.length; m += 1)
    g = M(g, k[m]);
  return {
    c() {
      e = N("li"), i = N("a"), c && c.c(), n = H(), r = N("span"), l = be(
        /*label*/
        t[1]
      ), o = H(), d && d.c(), h(
        r,
        "class",
        /*spanClass*/
        t[2]
      ), ue(i, g);
    },
    m(m, p) {
      A(m, e, p), z(e, i), c && c.m(i, null), z(i, n), z(i, r), z(r, l), z(i, o), d && d.m(i, null), s = !0, u || (a = [
        D(
          i,
          "blur",
          /*blur_handler*/
          t[12]
        ),
        D(
          i,
          "click",
          /*click_handler*/
          t[13]
        ),
        D(
          i,
          "focus",
          /*focus_handler*/
          t[14]
        ),
        D(
          i,
          "keydown",
          /*keydown_handler*/
          t[15]
        ),
        D(
          i,
          "keypress",
          /*keypress_handler*/
          t[16]
        ),
        D(
          i,
          "keyup",
          /*keyup_handler*/
          t[17]
        ),
        D(
          i,
          "mouseenter",
          /*mouseenter_handler*/
          t[18]
        ),
        D(
          i,
          "mouseleave",
          /*mouseleave_handler*/
          t[19]
        ),
        D(
          i,
          "mouseover",
          /*mouseover_handler*/
          t[20]
        )
      ], u = !0);
    },
    p(m, [p]) {
      c && c.p && (!s || p & /*$$scope*/
      1024) && K(
        c,
        f,
        m,
        /*$$scope*/
        m[10],
        s ? Q(
          f,
          /*$$scope*/
          m[10],
          p,
          Rc
        ) : Y(
          /*$$scope*/
          m[10]
        ),
        mr
      ), (!s || p & /*label*/
      2) && Ce(
        l,
        /*label*/
        m[1]
      ), (!s || p & /*spanClass*/
      4) && h(
        r,
        "class",
        /*spanClass*/
        m[2]
      ), /*$$slots*/
      m[5].subtext ? d ? (d.p(m, p), p & /*$$slots*/
      32 && v(d, 1)) : (d = hr(m), d.c(), v(d, 1), d.m(i, null)) : d && (oe(), S(d, 1, 1, () => {
        d = null;
      }), se()), ue(i, g = ce(k, [
        p & /*$$restProps*/
        16 && /*$$restProps*/
        m[4],
        (!s || p & /*href*/
        1) && { href: (
          /*href*/
          m[0]
        ) },
        (!s || p & /*aClass*/
        8) && { class: (
          /*aClass*/
          m[3]
        ) }
      ]));
    },
    i(m) {
      s || (v(c, m), v(d), s = !0);
    },
    o(m) {
      S(c, m), S(d), s = !1;
    },
    d(m) {
      m && E(e), c && c.d(m), d && d.d(), u = !1, we(a);
    }
  };
}
function Bc(t, e, i) {
  let n, r;
  const l = ["href", "label", "spanClass", "activeClass", "nonActiveClass"];
  let o = ie(e, l), { $$slots: s = {}, $$scope: u } = e;
  const a = Xe(s);
  let { href: f = "" } = e, { label: c = "" } = e, { spanClass: d = "uikit-ms-3" } = e, { activeClass: k = void 0 } = e, { nonActiveClass: g = void 0 } = e;
  const m = Be("sidebarContext") ?? {}, p = Be("activeUrl");
  let b = "";
  p.subscribe((L) => {
    i(8, b = L);
  });
  function y(L) {
    j.call(this, t, L);
  }
  function w(L) {
    j.call(this, t, L);
  }
  function _(L) {
    j.call(this, t, L);
  }
  function C(L) {
    j.call(this, t, L);
  }
  function T(L) {
    j.call(this, t, L);
  }
  function P(L) {
    j.call(this, t, L);
  }
  function U(L) {
    j.call(this, t, L);
  }
  function q(L) {
    j.call(this, t, L);
  }
  function ee(L) {
    j.call(this, t, L);
  }
  return t.$$set = (L) => {
    i(23, e = M(M({}, e), B(L))), i(4, o = ie(e, l)), "href" in L && i(0, f = L.href), "label" in L && i(1, c = L.label), "spanClass" in L && i(2, d = L.spanClass), "activeClass" in L && i(6, k = L.activeClass), "nonActiveClass" in L && i(7, g = L.nonActiveClass), "$$scope" in L && i(10, u = L.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*sidebarUrl, href*/
    257 && i(9, n = b ? f === b : !1), i(3, r = I(
      n ? k ?? m.activeClass : g ?? m.nonActiveClass,
      e.class
    ));
  }, e = B(e), [
    f,
    c,
    d,
    r,
    o,
    a,
    k,
    g,
    b,
    n,
    u,
    s,
    y,
    w,
    _,
    C,
    T,
    P,
    U,
    q,
    ee
  ];
}
class Fc extends re {
  constructor(e) {
    super(), ne(this, e, Bc, Dc, J, {
      href: 0,
      label: 1,
      spanClass: 2,
      activeClass: 6,
      nonActiveClass: 7
    });
  }
}
const jc = (t) => ({}), br = (t) => ({}), Wc = (t) => ({}), _r = (t) => ({}), Uc = (t) => ({}), pr = (t) => ({});
function Gc(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "m1 1 4 4 4-4"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, r) {
      A(n, e, r), z(e, i);
    },
    p: le,
    i: le,
    o: le,
    d(n) {
      n && E(e);
    }
  };
}
function Hc(t) {
  let e;
  const i = (
    /*#slots*/
    t[13].arrowdown
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[12],
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
      4096) && K(
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
          jc
        ) : Y(
          /*$$scope*/
          r[12]
        ),
        br
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
    },
    o(r) {
      S(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Vc(t) {
  let e, i, n, r;
  const l = [Xc, qc], o = [];
  function s(u, a) {
    return (
      /*$$slots*/
      u[10].arrowup ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), A(u, n, a), r = !0;
    },
    p(u, a) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      S(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function qc(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5 5 1 1 5"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, r) {
      A(n, e, r), z(e, i);
    },
    p: le,
    i: le,
    o: le,
    d(n) {
      n && E(e);
    }
  };
}
function Xc(t) {
  let e;
  const i = (
    /*#slots*/
    t[13].arrowup
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[12],
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
      4096) && K(
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
          Wc
        ) : Y(
          /*$$scope*/
          r[12]
        ),
        _r
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
    },
    o(r) {
      S(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function yr(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[13].default
  ), l = X(
    r,
    t,
    /*$$scope*/
    t[12],
    null
  );
  return {
    c() {
      e = N("ul"), l && l.c(), h(
        e,
        "class",
        /*ulClass*/
        t[4]
      );
    },
    m(o, s) {
      A(o, e, s), l && l.m(e, null), n = !0;
    },
    p(o, s) {
      t = o, l && l.p && (!n || s & /*$$scope*/
      4096) && K(
        l,
        r,
        t,
        /*$$scope*/
        t[12],
        n ? Q(
          r,
          /*$$scope*/
          t[12],
          s,
          null
        ) : Y(
          /*$$scope*/
          t[12]
        ),
        null
      ), (!n || s & /*ulClass*/
      16) && h(
        e,
        "class",
        /*ulClass*/
        t[4]
      );
    },
    i(o) {
      n || (v(l, o), o && Oe(() => {
        n && (i || (i = Re(
          e,
          /*multiple*/
          t[6],
          /*transitionParams*/
          t[5],
          !0
        )), i.run(1));
      }), n = !0);
    },
    o(o) {
      S(l, o), o && (i || (i = Re(
        e,
        /*multiple*/
        t[6],
        /*transitionParams*/
        t[5],
        !1
      )), i.run(0)), n = !1;
    },
    d(o) {
      o && E(e), l && l.d(o), o && i && i.end();
    }
  };
}
function Qc(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d, k;
  const g = (
    /*#slots*/
    t[13].icon
  ), m = X(
    g,
    t,
    /*$$scope*/
    t[12],
    pr
  ), p = [Vc, Hc, Gc], b = [];
  function y(T, P) {
    return (
      /*isOpen*/
      T[0] ? 0 : (
        /*$$slots*/
        T[10].arrowdown ? 1 : 2
      )
    );
  }
  s = y(t), u = b[s] = p[s](t);
  let w = [
    /*$$restProps*/
    t[8],
    { type: "button" },
    {
      class: a = I(
        /*btnClass*/
        t[1],
        /*$$props*/
        t[9].class
      )
    },
    { "aria-controls": "sidebar-dropdown" }
  ], _ = {};
  for (let T = 0; T < w.length; T += 1)
    _ = M(_, w[T]);
  let C = (
    /*isOpen*/
    t[0] && yr(t)
  );
  return {
    c() {
      e = N("li"), i = N("button"), m && m.c(), n = H(), r = N("span"), l = be(
        /*label*/
        t[2]
      ), o = H(), u.c(), f = H(), C && C.c(), h(
        r,
        "class",
        /*spanClass*/
        t[3]
      ), ue(i, _);
    },
    m(T, P) {
      A(T, e, P), z(e, i), m && m.m(i, null), z(i, n), z(i, r), z(r, l), z(i, o), b[s].m(i, null), i.autofocus && i.focus(), z(e, f), C && C.m(e, null), c = !0, d || (k = D(
        i,
        "click",
        /*click_handler*/
        t[14]
      ), d = !0);
    },
    p(T, [P]) {
      m && m.p && (!c || P & /*$$scope*/
      4096) && K(
        m,
        g,
        T,
        /*$$scope*/
        T[12],
        c ? Q(
          g,
          /*$$scope*/
          T[12],
          P,
          Uc
        ) : Y(
          /*$$scope*/
          T[12]
        ),
        pr
      ), (!c || P & /*label*/
      4) && Ce(
        l,
        /*label*/
        T[2]
      ), (!c || P & /*spanClass*/
      8) && h(
        r,
        "class",
        /*spanClass*/
        T[3]
      );
      let U = s;
      s = y(T), s === U ? b[s].p(T, P) : (oe(), S(b[U], 1, 1, () => {
        b[U] = null;
      }), se(), u = b[s], u ? u.p(T, P) : (u = b[s] = p[s](T), u.c()), v(u, 1), u.m(i, null)), ue(i, _ = ce(w, [
        P & /*$$restProps*/
        256 && /*$$restProps*/
        T[8],
        { type: "button" },
        (!c || P & /*btnClass, $$props*/
        514 && a !== (a = I(
          /*btnClass*/
          T[1],
          /*$$props*/
          T[9].class
        ))) && { class: a },
        { "aria-controls": "sidebar-dropdown" }
      ])), /*isOpen*/
      T[0] ? C ? (C.p(T, P), P & /*isOpen*/
      1 && v(C, 1)) : (C = yr(T), C.c(), v(C, 1), C.m(e, null)) : C && (oe(), S(C, 1, 1, () => {
        C = null;
      }), se());
    },
    i(T) {
      c || (v(m, T), v(u), v(C), c = !0);
    },
    o(T) {
      S(m, T), S(u), S(C), c = !1;
    },
    d(T) {
      T && E(e), m && m.d(T), b[s].d(), C && C.d(), d = !1, k();
    }
  };
}
function Kc(t, e, i) {
  const n = [
    "btnClass",
    "label",
    "spanClass",
    "ulClass",
    "transitionType",
    "transitionParams",
    "isOpen"
  ];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Xe(l);
  let { btnClass: u = "uikit-flex uikit-items-center uikit-p-2 uikit-w-full uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg uikit-transition uikit-duration-75 uikit-group hover:uikit-bg-gray-100 dark:uikit-text-white dark:hover:uikit-bg-gray-700" } = e, { label: a = "" } = e, { spanClass: f = "uikit-flex-1 uikit-ms-3 uikit-text-left uikit-whitespace-nowrap" } = e, { ulClass: c = "uikit-py-2 uikit-space-y-2" } = e, { transitionType: d = "slide" } = e, { transitionParams: k = {} } = e;
  const g = (y, w) => {
    switch (d) {
      case "blur":
        return Di(y, w);
      case "fly":
        return yt(y, w);
      case "fade":
        return Jt(y, w);
      default:
        return Bi(y, w);
    }
  };
  let { isOpen: m = !1 } = e;
  const p = () => {
    i(0, m = !m);
  }, b = () => p();
  return t.$$set = (y) => {
    i(9, e = M(M({}, e), B(y))), i(8, r = ie(e, n)), "btnClass" in y && i(1, u = y.btnClass), "label" in y && i(2, a = y.label), "spanClass" in y && i(3, f = y.spanClass), "ulClass" in y && i(4, c = y.ulClass), "transitionType" in y && i(11, d = y.transitionType), "transitionParams" in y && i(5, k = y.transitionParams), "isOpen" in y && i(0, m = y.isOpen), "$$scope" in y && i(12, o = y.$$scope);
  }, e = B(e), [
    m,
    u,
    a,
    f,
    c,
    k,
    g,
    p,
    r,
    e,
    s,
    d,
    o,
    l,
    b
  ];
}
class Yc extends re {
  constructor(e) {
    super(), ne(this, e, Kc, Qc, J, {
      btnClass: 1,
      label: 2,
      spanClass: 3,
      ulClass: 4,
      transitionType: 11,
      transitionParams: 5,
      isOpen: 0
    });
  }
}
function Jc(t) {
  let e, i, n, r, l, o, s = [
    /*$$restProps*/
    t[5],
    { href: (
      /*href*/
      t[1]
    ) },
    {
      class: r = I(
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
  ], u = {};
  for (let a = 0; a < s.length; a += 1)
    u = M(u, s[a]);
  return {
    c() {
      e = N("li"), i = N("a"), n = be(
        /*label*/
        t[2]
      ), ue(i, u);
    },
    m(a, f) {
      A(a, e, f), z(e, i), z(i, n), l || (o = [
        D(
          i,
          "blur",
          /*blur_handler*/
          t[7]
        ),
        D(
          i,
          "click",
          /*click_handler*/
          t[8]
        ),
        D(
          i,
          "focus",
          /*focus_handler*/
          t[9]
        ),
        D(
          i,
          "keydown",
          /*keydown_handler*/
          t[10]
        ),
        D(
          i,
          "keypress",
          /*keypress_handler*/
          t[11]
        ),
        D(
          i,
          "keyup",
          /*keyup_handler*/
          t[12]
        ),
        D(
          i,
          "mouseenter",
          /*mouseenter_handler*/
          t[13]
        ),
        D(
          i,
          "mouseleave",
          /*mouseleave_handler*/
          t[14]
        ),
        D(
          i,
          "mouseover",
          /*mouseover_handler*/
          t[15]
        )
      ], l = !0);
    },
    p(a, [f]) {
      f & /*label*/
      4 && Gl(
        n,
        /*label*/
        a[2],
        u.contenteditable
      ), ue(i, u = ce(s, [
        f & /*$$restProps*/
        32 && /*$$restProps*/
        a[5],
        f & /*href*/
        2 && { href: (
          /*href*/
          a[1]
        ) },
        f & /*active, activeClass, aClass, $$props*/
        89 && r !== (r = I(
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
    i: le,
    o: le,
    d(a) {
      a && E(e), l = !1, we(o);
    }
  };
}
function Zc(t, e, i) {
  const n = ["aClass", "href", "label", "activeClass", "active"];
  let r = ie(e, n), { aClass: l = "uikit-flex uikit-items-center uikit-p-2 uikit-ps-11 uikit-w-full uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg uikit-transition uikit-duration-75 uikit-group hover:uikit-bg-gray-100 dark:uikit-text-white dark:hover:uikit-bg-gray-700" } = e, { href: o = "" } = e, { label: s = "" } = e, { activeClass: u = "uikit-flex uikit-items-center uikit-p-2 uikit-ps-11 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-bg-gray-200 dark:uikit-bg-gray-700 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { active: a = !1 } = e;
  function f(w) {
    j.call(this, t, w);
  }
  function c(w) {
    j.call(this, t, w);
  }
  function d(w) {
    j.call(this, t, w);
  }
  function k(w) {
    j.call(this, t, w);
  }
  function g(w) {
    j.call(this, t, w);
  }
  function m(w) {
    j.call(this, t, w);
  }
  function p(w) {
    j.call(this, t, w);
  }
  function b(w) {
    j.call(this, t, w);
  }
  function y(w) {
    j.call(this, t, w);
  }
  return t.$$set = (w) => {
    i(6, e = M(M({}, e), B(w))), i(5, r = ie(e, n)), "aClass" in w && i(0, l = w.aClass), "href" in w && i(1, o = w.href), "label" in w && i(2, s = w.label), "activeClass" in w && i(3, u = w.activeClass), "active" in w && i(4, a = w.active);
  }, e = B(e), [
    l,
    o,
    s,
    u,
    a,
    r,
    e,
    f,
    c,
    d,
    k,
    g,
    m,
    p,
    b,
    y
  ];
}
class xc extends re {
  constructor(e) {
    super(), ne(this, e, Zc, Jc, J, {
      aClass: 0,
      href: 1,
      label: 2,
      activeClass: 3,
      active: 4
    });
  }
}
function $c(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[4].default
  ), l = X(
    r,
    t,
    /*$$scope*/
    t[3],
    null
  );
  let o = [
    /*$$restProps*/
    t[1],
    {
      class: i = I(
        /*divClass*/
        t[0],
        /*$$props*/
        t[2].class
      )
    }
  ], s = {};
  for (let u = 0; u < o.length; u += 1)
    s = M(s, o[u]);
  return {
    c() {
      e = N("div"), l && l.c(), ue(e, s);
    },
    m(u, a) {
      A(u, e, a), l && l.m(e, null), n = !0;
    },
    p(u, [a]) {
      l && l.p && (!n || a & /*$$scope*/
      8) && K(
        l,
        r,
        u,
        /*$$scope*/
        u[3],
        n ? Q(
          r,
          /*$$scope*/
          u[3],
          a,
          null
        ) : Y(
          /*$$scope*/
          u[3]
        ),
        null
      ), ue(e, s = ce(o, [
        a & /*$$restProps*/
        2 && /*$$restProps*/
        u[1],
        (!n || a & /*divClass, $$props*/
        5 && i !== (i = I(
          /*divClass*/
          u[0],
          /*$$props*/
          u[2].class
        ))) && { class: i }
      ]));
    },
    i(u) {
      n || (v(l, u), n = !0);
    },
    o(u) {
      S(l, u), n = !1;
    },
    d(u) {
      u && E(e), l && l.d(u);
    }
  };
}
function ed(t, e, i) {
  const n = ["divClass"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e, { divClass: s = "uikit-overflow-y-auto uikit-py-4 uikit-px-3 uikit-bg-gray-50 uikit-rounded dark:uikit-bg-gray-800" } = e;
  return t.$$set = (u) => {
    i(2, e = M(M({}, e), B(u))), i(1, r = ie(e, n)), "divClass" in u && i(0, s = u.divClass), "$$scope" in u && i(3, o = u.$$scope);
  }, e = B(e), [s, r, e, o, l];
}
class td extends re {
  constructor(e) {
    super(), ne(this, e, ed, $c, J, { divClass: 0 });
  }
}
function vr(t, e, i) {
  const n = t.slice();
  return n[2] = e[i].href, n[3] = e[i].label, n[4] = e[i].tips, n[5] = e[i].icon, n[6] = e[i].children, n;
}
function wr(t, e, i) {
  const n = t.slice();
  return n[3] = e[i].label, n[2] = e[i].href, n;
}
function id(t) {
  let e, i;
  return e = new Fc({
    props: {
      label: (
        /*label*/
        t[3]
      ),
      href: (
        /*href*/
        t[2]
      ),
      active: (
        /*activeUrl*/
        t[1] === /*href*/
        t[2]
      ),
      spanClass: (
        /*tips*/
        t[4] ? Er : ""
      ),
      $$slots: {
        subtext: [ld],
        icon: [rd]
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
      1 && (l.label = /*label*/
      n[3]), r & /*items*/
      1 && (l.href = /*href*/
      n[2]), r & /*activeUrl, items*/
      3 && (l.active = /*activeUrl*/
      n[1] === /*href*/
      n[2]), r & /*items*/
      1 && (l.spanClass = /*tips*/
      n[4] ? Er : ""), r & /*$$scope, items*/
      2049 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function nd(t) {
  let e, i;
  return e = new Yc({
    props: {
      label: (
        /*label*/
        t[3]
      ),
      $$slots: {
        icon: [sd],
        default: [od]
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
      1 && (l.label = /*label*/
      n[3]), r & /*$$scope, items*/
      2049 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function rd(t) {
  let e, i, n;
  return e = new ei({
    props: {
      name: (
        /*icon*/
        t[5]
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
      1 && (o.name = /*icon*/
      r[5]), e.$set(o);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      S(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && E(i), x(e, r);
    }
  };
}
function Cr(t) {
  let e, i = (
    /*tips*/
    t[4] + ""
  ), n;
  return {
    c() {
      e = N("span"), n = be(i), h(e, "class", "uikit-inline-flex uikit-justify-center uikit-items-center uikit-p-3 uikit-ms-3 uikit-w-3 uikit-h-3 uikit-text-sm uikit-font-medium uikit-text-primary-600 uikit-bg-primary-200 uikit-rounded-full dark:uikit-bg-primary-900 dark:uikit-text-primary-200");
    },
    m(r, l) {
      A(r, e, l), z(e, n);
    },
    p(r, l) {
      l & /*items*/
      1 && i !== (i = /*tips*/
      r[4] + "") && Ce(n, i);
    },
    d(r) {
      r && E(e);
    }
  };
}
function ld(t) {
  let e, i = (
    /*tips*/
    t[4] && Cr(t)
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
      n[4] ? i ? i.p(n, r) : (i = Cr(n), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null);
    },
    d(n) {
      n && E(e), i && i.d(n);
    }
  };
}
function Sr(t) {
  let e, i;
  return e = new xc({
    props: {
      label: (
        /*label*/
        t[3]
      ),
      href: (
        /*href*/
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
      r & /*items*/
      1 && (l.label = /*label*/
      n[3]), r & /*items*/
      1 && (l.href = /*href*/
      n[2]), e.$set(l);
    },
    i(n) {
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function od(t) {
  let e, i, n = ve(
    /*children*/
    t[6] || []
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = Sr(wr(t, n, o));
  const l = (o) => S(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = H();
    },
    m(o, s) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(o, s);
      A(o, e, s), i = !0;
    },
    p(o, s) {
      if (s & /*items*/
      1) {
        n = ve(
          /*children*/
          o[6] || []
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = wr(o, n, u);
          r[u] ? (r[u].p(a, s), v(r[u], 1)) : (r[u] = Sr(a), r[u].c(), v(r[u], 1), r[u].m(e.parentNode, e));
        }
        for (oe(), u = n.length; u < r.length; u += 1)
          l(u);
        se();
      }
    },
    i(o) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          v(r[s]);
        i = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        S(r[s]);
      i = !1;
    },
    d(o) {
      o && E(e), Qe(r, o);
    }
  };
}
function sd(t) {
  let e, i, n;
  return e = new ei({
    props: {
      name: (
        /*icon*/
        t[5]
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
      1 && (o.name = /*icon*/
      r[5]), e.$set(o);
    },
    i(r) {
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      S(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && E(i), x(e, r);
    }
  };
}
function Tr(t) {
  let e, i, n, r;
  const l = [nd, id], o = [];
  function s(u, a) {
    return (
      /*children*/
      u[6] && /*children*/
      u[6].length > 0 ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), A(u, n, a), r = !0;
    },
    p(u, a) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      S(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function ud(t) {
  let e, i, n = ve(
    /*items*/
    t[0]
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = Tr(vr(t, n, o));
  const l = (o) => S(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      e = ae();
    },
    m(o, s) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(o, s);
      A(o, e, s), i = !0;
    },
    p(o, s) {
      if (s & /*items, activeUrl, spanClass*/
      3) {
        n = ve(
          /*items*/
          o[0]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = vr(o, n, u);
          r[u] ? (r[u].p(a, s), v(r[u], 1)) : (r[u] = Tr(a), r[u].c(), v(r[u], 1), r[u].m(e.parentNode, e));
        }
        for (oe(), u = n.length; u < r.length; u += 1)
          l(u);
        se();
      }
    },
    i(o) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          v(r[s]);
        i = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        S(r[s]);
      i = !1;
    },
    d(o) {
      o && E(e), Qe(r, o);
    }
  };
}
function ad(t) {
  let e, i;
  return e = new Nc({
    props: {
      $$slots: { default: [ud] },
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
      r & /*$$scope, items, activeUrl*/
      2051 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function fd(t) {
  let e, i;
  return e = new td({
    props: {
      $$slots: { default: [ad] },
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
      r & /*$$scope, items, activeUrl*/
      2051 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function cd(t) {
  let e, i;
  return e = new Pc({
    props: {
      activeUrl: (
        /*activeUrl*/
        t[1]
      ),
      $$slots: { default: [fd] },
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
      r & /*activeUrl*/
      2 && (l.activeUrl = /*activeUrl*/
      n[1]), r & /*$$scope, items, activeUrl*/
      2051 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
let Er = "uikit-flex-1 uikit-ms-3 uikit-whitespace-nowrap";
function dd(t, e, i) {
  let n;
  Ke(() => {
    i(1, n = window.location.pathname);
  });
  let { items: r = [] } = e;
  return t.$$set = (l) => {
    "items" in l && i(0, r = l.items);
  }, window && window.location && i(1, n = window.location.pathname), [r, n];
}
let kd = class extends re {
  constructor(e) {
    super(), ne(this, e, dd, cd, J, { items: 0 });
  }
};
const Yd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new kd({
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
function gd(t) {
  let e, i, n, r, l = [
    /*$$restProps*/
    t[5],
    { role: "status" },
    {
      class: r = I(
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
  for (let s = 0; s < l.length; s += 1)
    o = M(o, l[s]);
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
      ), Dt(e, o);
    },
    m(s, u) {
      A(s, e, u), z(e, i), z(e, n);
    },
    p(s, [u]) {
      u & /*currentColor*/
      4 && h(
        i,
        "fill",
        /*currentColor*/
        s[2]
      ), u & /*currentFill*/
      2 && h(
        n,
        "fill",
        /*currentFill*/
        s[1]
      ), Dt(e, o = ce(l, [
        u & /*$$restProps*/
        32 && /*$$restProps*/
        s[5],
        { role: "status" },
        u & /*bg, $$props*/
        65 && r !== (r = I(
          "uikit-inline -uikit-mt-px uikit-animate-spin dark:uikit-text-gray-600",
          /*iconsize*/
          s[3],
          /*bg*/
          s[0],
          /*fillColorClass*/
          s[4],
          /*$$props*/
          s[6].class
        )) && { class: r },
        { viewBox: "0 0 100 101" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" }
      ]));
    },
    i: le,
    o: le,
    d(s) {
      s && E(e);
    }
  };
}
function md(t, e, i) {
  const n = ["color", "bg", "customColor", "size", "currentFill", "currentColor"];
  let r = ie(e, n), { color: l = "primary" } = e, { bg: o = "uikit-text-gray-300" } = e, { customColor: s = "" } = e, { size: u = "8" } = e, { currentFill: a = "currentFill" } = e, { currentColor: f = "currentColor" } = e, c = `uikit-w-${u} uikit-h-${u}`;
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
    custom: s
  };
  let k = l === void 0 ? "" : d[l] ?? d.blue;
  return t.$$set = (g) => {
    i(6, e = M(M({}, e), B(g))), i(5, r = ie(e, n)), "color" in g && i(7, l = g.color), "bg" in g && i(0, o = g.bg), "customColor" in g && i(8, s = g.customColor), "size" in g && i(9, u = g.size), "currentFill" in g && i(1, a = g.currentFill), "currentColor" in g && i(2, f = g.currentColor);
  }, e = B(e), [
    o,
    a,
    f,
    c,
    k,
    r,
    e,
    l,
    s,
    u
  ];
}
class Al extends re {
  constructor(e) {
    super(), ne(this, e, md, gd, J, {
      color: 7,
      bg: 0,
      customColor: 8,
      size: 9,
      currentFill: 1,
      currentColor: 2
    });
  }
}
function hd(t) {
  let e, i;
  return e = new Al({
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function bd(t) {
  let e, i, n;
  return i = new qt({
    props: {
      outline: (
        /*buttonoutline*/
        t[3]
      ),
      color: "dark",
      $$slots: { default: [_d] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = N("div"), $(i.$$.fragment), h(e, "class", "uikit-flex uikit-flex-wrap uikit-items-center uikit-gap-2");
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
      n || (v(i.$$.fragment, r), n = !0);
    },
    o(r) {
      S(i.$$.fragment, r), n = !1;
    },
    d(r) {
      r && E(e), x(i);
    }
  };
}
function _d(t) {
  let e, i, n;
  return e = new Al({
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
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      S(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && E(i), x(e, r);
    }
  };
}
function pd(t) {
  let e, i, n, r;
  const l = [bd, hd], o = [];
  function s(u, a) {
    return (
      /*button*/
      u[2] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = l[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), A(u, n, a), r = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), S(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      S(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function yd(t, e, i) {
  let { size: n = "4" } = e, { color: r = "green" } = e, { button: l = !1 } = e, { buttonoutline: o = !1 } = e;
  return t.$$set = (s) => {
    "size" in s && i(0, n = s.size), "color" in s && i(1, r = s.color), "button" in s && i(2, l = s.button), "buttonoutline" in s && i(3, o = s.buttonoutline);
  }, [n, r, l, o];
}
class vd extends re {
  constructor(e) {
    super(), ne(this, e, yd, pd, J, {
      size: 0,
      color: 1,
      button: 2,
      buttonoutline: 3
    });
  }
}
const Jd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new vd({
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
}, wd = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;
function Cd(t) {
  function e(i) {
    if (!(i.key === "Tab" || i.keyCode === 9))
      return;
    const r = Array.from(t.querySelectorAll(wd));
    let l = r.indexOf(document.activeElement ?? t);
    l === -1 && i.shiftKey && (l = 0), l += r.length + (i.shiftKey ? -1 : 1), l %= r.length, r[l].focus(), i.preventDefault();
  }
  return document.addEventListener("keydown", e, !0), {
    destroy() {
      document.removeEventListener("keydown", e, !0);
    }
  };
}
const Sd = (t) => ({}), Ar = (t) => ({}), Td = (t) => ({}), Or = (t) => ({});
function Ir(t) {
  let e, i, n, r, l, o, s, u, a, f;
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
    $$slots: { default: [Id] },
    $$scope: { ctx: t }
  };
  for (let k = 0; k < c.length; k += 1)
    d = M(d, c[k]);
  return l = new it({ props: d }), {
    c() {
      e = N("div"), i = H(), n = N("div"), r = N("div"), $(l.$$.fragment), h(
        e,
        "class",
        /*backdropCls*/
        t[12]
      ), h(r, "class", o = "uikit-flex uikit-relative " + /*sizes*/
      t[8][
        /*size*/
        t[2]
      ] + " uikit-w-full uikit-max-h-full"), h(n, "class", s = I(
        /*dialogClass*/
        t[4],
        /*$$props*/
        t[14].classDialog,
        .../*getPlacementClasses*/
        t[7]()
      )), h(n, "tabindex", "-1"), h(n, "aria-modal", "true"), h(n, "role", "dialog");
    },
    m(k, g) {
      A(k, e, g), A(k, i, g), A(k, n, g), z(n, r), Z(l, r, null), u = !0, a || (f = [
        D(
          n,
          "keydown",
          /*handleKeys*/
          t[13]
        ),
        D(n, "wheel", Rl(
          /*wheel_handler*/
          t[23]
        ), { passive: !1 }),
        at(
          /*prepareFocus*/
          t[6].call(null, n)
        ),
        at(Cd.call(null, n)),
        D(
          n,
          "click",
          /*onAutoClose*/
          t[9]
        ),
        D(
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
        32768 && Pe(
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
      33669130 && (m.$$scope = { dirty: g, ctx: k }), l.$set(m), (!u || g & /*size*/
      4 && o !== (o = "uikit-flex uikit-relative " + /*sizes*/
      k[8][
        /*size*/
        k[2]
      ] + " uikit-w-full uikit-max-h-full")) && h(r, "class", o), (!u || g & /*dialogClass, $$props*/
      16400 && s !== (s = I(
        /*dialogClass*/
        k[4],
        /*$$props*/
        k[14].classDialog,
        .../*getPlacementClasses*/
        k[7]()
      ))) && h(n, "class", s);
    },
    i(k) {
      u || (v(l.$$.fragment, k), u = !0);
    },
    o(k) {
      S(l.$$.fragment, k), u = !1;
    },
    d(k) {
      k && (E(e), E(i), E(n)), x(l), a = !1, we(f);
    }
  };
}
function Pr(t) {
  let e, i;
  return e = new it({
    props: {
      color: (
        /*$$restProps*/
        t[15].color
      ),
      class: "uikit-flex uikit-justify-between uikit-items-center uikit-p-4 uikit-rounded-t-lg",
      $$slots: { default: [Ad] },
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Ed(t) {
  let e, i, n;
  return {
    c() {
      e = N("h3"), i = be(
        /*title*/
        t[1]
      ), h(e, "class", n = "uikit-text-xl uikit-font-semibold " + /*$$restProps*/
      (t[15].color ? "" : "uikit-text-gray-900 dark:uikit-text-white") + " uikit-p-0");
    },
    m(r, l) {
      A(r, e, l), z(e, i);
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
      r && E(e);
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Ad(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[22].header
  ), l = X(
    r,
    t,
    /*$$scope*/
    t[25],
    Or
  ), o = l || Ed(t);
  let s = (
    /*dismissable*/
    t[3] && Lr(t)
  );
  return {
    c() {
      o && o.c(), e = H(), s && s.c(), i = ae();
    },
    m(u, a) {
      o && o.m(u, a), A(u, e, a), s && s.m(u, a), A(u, i, a), n = !0;
    },
    p(u, a) {
      l ? l.p && (!n || a & /*$$scope*/
      33554432) && K(
        l,
        r,
        u,
        /*$$scope*/
        u[25],
        n ? Q(
          r,
          /*$$scope*/
          u[25],
          a,
          Td
        ) : Y(
          /*$$scope*/
          u[25]
        ),
        Or
      ) : o && o.p && (!n || a & /*$$restProps, title*/
      32770) && o.p(u, n ? a : -1), /*dismissable*/
      u[3] ? s ? (s.p(u, a), a & /*dismissable*/
      8 && v(s, 1)) : (s = Lr(u), s.c(), v(s, 1), s.m(i.parentNode, i)) : s && (oe(), S(s, 1, 1, () => {
        s = null;
      }), se());
    },
    i(u) {
      n || (v(o, u), v(s), n = !0);
    },
    o(u) {
      S(o, u), S(s), n = !1;
    },
    d(u) {
      u && (E(e), E(i)), o && o.d(u), s && s.d(u);
    }
  };
}
function Mr(t) {
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Nr(t) {
  let e, i;
  return e = new it({
    props: {
      color: (
        /*$$restProps*/
        t[15].color
      ),
      class: "uikit-flex uikit-items-center uikit-p-6 uikit-space-x-2 rtl:uikit-space-x-reverse uikit-rounded-b-lg",
      $$slots: { default: [Od] },
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      S(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Od(t) {
  let e;
  const i = (
    /*#slots*/
    t[22].footer
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[25],
    Ar
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
      33554432) && K(
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
          Sd
        ) : Y(
          /*$$scope*/
          r[25]
        ),
        Ar
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
    },
    o(r) {
      S(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Id(t) {
  let e, i, n, r, l, o, s, u, a, f = (
    /*$$slots*/
    (t[16].header || /*title*/
    t[1]) && Pr(t)
  ), c = (
    /*dismissable*/
    t[3] && !/*$$slots*/
    t[16].header && !/*title*/
    t[1] && Mr(t)
  );
  const d = (
    /*#slots*/
    t[22].default
  ), k = X(
    d,
    t,
    /*$$scope*/
    t[25],
    null
  );
  let g = (
    /*$$slots*/
    t[16].footer && Nr(t)
  );
  return {
    c() {
      f && f.c(), e = H(), i = N("div"), c && c.c(), n = H(), k && k.c(), l = H(), g && g.c(), o = ae(), h(i, "class", r = I(
        "uikit-p-6 uikit-space-y-6 uikit-flex-1 uikit-overflow-y-auto uikit-overscroll-contain",
        /*$$props*/
        t[14].bodyClass
      )), h(i, "role", "document");
    },
    m(m, p) {
      f && f.m(m, p), A(m, e, p), A(m, i, p), c && c.m(i, null), z(i, n), k && k.m(i, null), A(m, l, p), g && g.m(m, p), A(m, o, p), s = !0, u || (a = [
        D(i, "keydown", xi(
          /*handleKeys*/
          t[13]
        )),
        D(i, "wheel", xi(
          /*wheel_handler_1*/
          t[24]
        ), { passive: !0 })
      ], u = !0);
    },
    p(m, p) {
      /*$$slots*/
      m[16].header || /*title*/
      m[1] ? f ? (f.p(m, p), p & /*$$slots, title*/
      65538 && v(f, 1)) : (f = Pr(m), f.c(), v(f, 1), f.m(e.parentNode, e)) : f && (oe(), S(f, 1, 1, () => {
        f = null;
      }), se()), /*dismissable*/
      m[3] && !/*$$slots*/
      m[16].header && !/*title*/
      m[1] ? c ? (c.p(m, p), p & /*dismissable, $$slots, title*/
      65546 && v(c, 1)) : (c = Mr(m), c.c(), v(c, 1), c.m(i, n)) : c && (oe(), S(c, 1, 1, () => {
        c = null;
      }), se()), k && k.p && (!s || p & /*$$scope*/
      33554432) && K(
        k,
        d,
        m,
        /*$$scope*/
        m[25],
        s ? Q(
          d,
          /*$$scope*/
          m[25],
          p,
          null
        ) : Y(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!s || p & /*$$props*/
      16384 && r !== (r = I(
        "uikit-p-6 uikit-space-y-6 uikit-flex-1 uikit-overflow-y-auto uikit-overscroll-contain",
        /*$$props*/
        m[14].bodyClass
      ))) && h(i, "class", r), /*$$slots*/
      m[16].footer ? g ? (g.p(m, p), p & /*$$slots*/
      65536 && v(g, 1)) : (g = Nr(m), g.c(), v(g, 1), g.m(o.parentNode, o)) : g && (oe(), S(g, 1, 1, () => {
        g = null;
      }), se());
    },
    i(m) {
      s || (v(f), v(c), v(k, m), v(g), s = !0);
    },
    o(m) {
      S(f), S(c), S(k, m), S(g), s = !1;
    },
    d(m) {
      m && (E(e), E(i), E(l), E(o)), f && f.d(m), c && c.d(), k && k.d(m), g && g.d(m), u = !1, we(a);
    }
  };
}
function Pd(t) {
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
      1 && v(n, 1)) : (n = Ir(r), n.c(), v(n, 1), n.m(e.parentNode, e)) : n && (oe(), S(n, 1, 1, () => {
        n = null;
      }), se());
    },
    i(r) {
      i || (v(n), i = !0);
    },
    o(r) {
      S(n), i = !1;
    },
    d(r) {
      r && E(e), n && n.d(r);
    }
  };
}
function Ld(t, e, i) {
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
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Xe(l);
  let { open: u = !1 } = e, { title: a = "" } = e, { size: f = "md" } = e, { placement: c = "center" } = e, { autoclose: d = !1 } = e, { dismissable: k = !0 } = e, { backdropClass: g = "uikit-fixed uikit-inset-0 uikit-z-40 uikit-bg-gray-900 uikit-bg-opacity-50 dark:uikit-bg-opacity-80" } = e, { defaultClass: m = "uikit-relative uikit-flex uikit-flex-col uikit-mx-auto" } = e, { outsideclose: p = !1 } = e, { dialogClass: b = "uikit-fixed uikit-top-0 uikit-start-0 uikit-end-0 uikit-h-modal md:uikit-inset-0 md:uikit-h-full uikit-z-50 uikit-w-full uikit-p-4 uikit-flex" } = e;
  const y = je();
  function w(R) {
    const O = document.createTreeWalker(R, NodeFilter.SHOW_ELEMENT);
    let te;
    for (; te = O.nextNode(); )
      if (te instanceof HTMLElement) {
        const de = te, [pe, Le] = ee(de);
        (pe || Le) && (de.tabIndex = 0);
      }
    R.focus();
  }
  const _ = () => {
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
  }, C = {
    xs: "uikit-max-w-md",
    sm: "uikit-max-w-lg",
    md: "uikit-max-w-2xl",
    lg: "uikit-max-w-4xl",
    xl: "uikit-max-w-7xl"
  }, T = (R) => {
    const O = R.target;
    d && (O == null ? void 0 : O.tagName) === "BUTTON" && U(R);
  }, P = (R) => {
    const O = R.target;
    p && O === R.currentTarget && U(R);
  }, U = (R) => {
    R.preventDefault(), i(0, u = !1);
  };
  let q;
  const ee = (R) => [
    R.scrollWidth > R.clientWidth && ["scroll", "auto"].indexOf(getComputedStyle(R).overflowX) >= 0,
    R.scrollHeight > R.clientHeight && ["scroll", "auto"].indexOf(getComputedStyle(R).overflowY) >= 0
  ];
  let L = I(g, e.classBackdrop);
  function G(R) {
    if (R.key === "Escape" && k)
      return U(R);
  }
  function ge(R) {
    j.call(this, t, R);
  }
  function F(R) {
    j.call(this, t, R);
  }
  return t.$$set = (R) => {
    i(14, e = M(M({}, e), B(R))), i(15, r = ie(e, n)), "open" in R && i(0, u = R.open), "title" in R && i(1, a = R.title), "size" in R && i(2, f = R.size), "placement" in R && i(17, c = R.placement), "autoclose" in R && i(18, d = R.autoclose), "dismissable" in R && i(3, k = R.dismissable), "backdropClass" in R && i(19, g = R.backdropClass), "defaultClass" in R && i(20, m = R.defaultClass), "outsideclose" in R && i(21, p = R.outsideclose), "dialogClass" in R && i(4, b = R.dialogClass), "$$scope" in R && i(25, o = R.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && y(u ? "open" : "close"), i(5, q = I(m, "uikit-w-full uikit-divide-y", e.class));
  }, e = B(e), [
    u,
    a,
    f,
    k,
    b,
    q,
    w,
    _,
    C,
    T,
    P,
    U,
    L,
    G,
    e,
    r,
    s,
    c,
    d,
    g,
    m,
    p,
    l,
    ge,
    F,
    o
  ];
}
class Md extends re {
  constructor(e) {
    super(), ne(this, e, Ld, Pd, J, {
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
function zr(t, e, i) {
  const n = t.slice();
  return n[9] = e[i], n;
}
function Rr(t) {
  let e, i = (
    /*item*/
    t[9] + ""
  ), n, r;
  return {
    c() {
      e = N("p"), n = be(i), r = H(), h(e, "class", "uikit-text-base uikit-leading-relaxed uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(l, o) {
      A(l, e, o), z(e, n), z(e, r);
    },
    p(l, o) {
      o & /*descriptions*/
      4 && i !== (i = /*item*/
      l[9] + "") && Ce(n, i);
    },
    d(l) {
      l && E(e);
    }
  };
}
function Nd(t) {
  let e, i = ve(
    /*descriptions*/
    t[2]
  ), n = [];
  for (let r = 0; r < i.length; r += 1)
    n[r] = Rr(zr(t, i, r));
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
          const s = zr(r, i, o);
          n[o] ? n[o].p(s, l) : (n[o] = Rr(s), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = i.length;
      }
    },
    d(r) {
      r && E(e), Qe(n, r);
    }
  };
}
function Dr(t) {
  let e, i, n, r;
  return e = new qt({
    props: {
      $$slots: { default: [zd] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), n = new qt({
    props: {
      color: "alternative",
      $$slots: { default: [Rd] },
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
      const s = {};
      o & /*$$scope*/
      4096 && (s.$$scope = { dirty: o, ctx: l }), e.$set(s);
      const u = {};
      o & /*$$scope*/
      4096 && (u.$$scope = { dirty: o, ctx: l }), n.$set(u);
    },
    i(l) {
      r || (v(e.$$.fragment, l), v(n.$$.fragment, l), r = !0);
    },
    o(l) {
      S(e.$$.fragment, l), S(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && E(i), x(e, l), x(n, l);
    }
  };
}
function zd(t) {
  let e;
  return {
    c() {
      e = be("I accept");
    },
    m(i, n) {
      A(i, e, n);
    },
    d(i) {
      i && E(e);
    }
  };
}
function Rd(t) {
  let e;
  return {
    c() {
      e = be("Decline");
    },
    m(i, n) {
      A(i, e, n);
    },
    d(i) {
      i && E(e);
    }
  };
}
function Dd(t) {
  let e, i, n = (
    /*footer*/
    t[1] && Dr(t)
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
      2 && v(n, 1)) : (n = Dr(r), n.c(), v(n, 1), n.m(e.parentNode, e)) : n && (oe(), S(n, 1, 1, () => {
        n = null;
      }), se());
    },
    i(r) {
      i || (v(n), i = !0);
    },
    o(r) {
      S(n), i = !1;
    },
    d(r) {
      r && E(e), n && n.d(r);
    }
  };
}
function Bd(t) {
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
      footer: [Dd],
      default: [Nd]
    },
    $$scope: { ctx: t }
  };
  return (
    /*clickOutsideModal*/
    t[3] !== void 0 && (l.open = /*clickOutsideModal*/
    t[3]), e = new Md({ props: l }), Ee.push(() => Yt(e, "open", r)), {
      c() {
        $(e.$$.fragment);
      },
      m(o, s) {
        Z(e, o, s), n = !0;
      },
      p(o, [s]) {
        const u = {};
        s & /*title*/
        1 && (u.title = /*title*/
        o[0]), s & /*$$scope, footer, descriptions*/
        4102 && (u.$$scope = { dirty: s, ctx: o }), !i && s & /*clickOutsideModal*/
        8 && (i = !0, u.open = /*clickOutsideModal*/
        o[3], Kt(() => i = !1)), e.$set(u);
      },
      i(o) {
        n || (v(e.$$.fragment, o), n = !0);
      },
      o(o) {
        S(e.$$.fragment, o), n = !1;
      },
      d(o) {
        x(e, o);
      }
    }
  );
}
function Fd(t, e, i) {
  let n = !1, { title: r = "" } = e, { footer: l = !1 } = e, { descriptions: o = [] } = e;
  function s() {
    i(3, n = !n);
  }
  let u = je();
  const a = (d) => u("success", d), f = (d) => u("fail", d);
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
    u,
    s,
    a,
    f,
    c
  ];
}
class jd extends re {
  constructor(e) {
    super(), ne(this, e, Fd, Bd, J, {
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
const Zd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new jd({
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
export {
  Ud as FnAccordion,
  Gd as FnAlert,
  Hd as FnAvatar,
  Xd as FnCarousel,
  Vd as FnDeviceMockup,
  qd as FnDrawer,
  Qd as FnDropdown,
  Zd as FnModal,
  Yd as FnSidebar,
  Jd as FnSpinner
};
