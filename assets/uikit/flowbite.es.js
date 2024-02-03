var Al = Object.defineProperty;
var Ol = (t, e, i) => e in t ? Al(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var li = (t, e, i) => (Ol(t, typeof e != "symbol" ? e + "" : e, i), i);
function le() {
}
const Xt = (t) => t;
function L(t, e) {
  for (const i in e)
    t[i] = e[i];
  return (
    /** @type {T & S} */
    t
  );
}
function Dr(t) {
  return t();
}
function Zi() {
  return /* @__PURE__ */ Object.create(null);
}
function we(t) {
  t.forEach(Dr);
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
function Il(t) {
  return Object.keys(t).length === 0;
}
function Pl(t, ...e) {
  if (t == null) {
    for (const n of e)
      n(void 0);
    return le;
  }
  const i = t.subscribe(...e);
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
function Qt(t, e, i) {
  t.$$.on_destroy.push(Pl(e, i));
}
function X(t, e, i, n) {
  if (t) {
    const r = Br(t, e, i, n);
    return t[0](r);
  }
}
function Br(t, e, i, n) {
  return t[1] && n ? L(i.ctx.slice(), t[1](n(e))) : i.ctx;
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
    const o = Br(e, i, n, l);
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
function F(t) {
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
function Fr(t, e, i) {
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
const Ll = ["", !0, 1, "true", "contenteditable"], jr = typeof window < "u";
let Pi = jr ? () => window.performance.now() : () => Date.now(), Li = jr ? (t) => requestAnimationFrame(t) : le;
const ot = /* @__PURE__ */ new Set();
function Wr(t) {
  ot.forEach((e) => {
    e.c(t) || (ot.delete(e), e.f());
  }), ot.size !== 0 && Li(Wr);
}
function Mi(t) {
  let e;
  return ot.size === 0 && Li(Wr), {
    promise: new Promise((i) => {
      ot.add(e = { c: t, f: i });
    }),
    abort() {
      ot.delete(e);
    }
  };
}
function R(t, e) {
  t.appendChild(e);
}
function Ur(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Ml(t) {
  const e = M("style");
  return e.textContent = "/* empty */", Nl(Ur(t), e), e.sheet;
}
function Nl(t, e) {
  return R(
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
function M(t) {
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
function B(t, e, i, n) {
  return t.addEventListener(e, i, n), () => t.removeEventListener(e, i, n);
}
function zl(t) {
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
const Rl = ["width", "height"];
function ue(t, e) {
  const i = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in e)
    e[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = e[n] : n === "__value" ? t.value = t[n] = e[n] : i[n] && i[n].set && Rl.indexOf(n) === -1 ? t[n] = e[n] : h(t, n, e[n]);
}
function Dt(t, e) {
  for (const i in e)
    h(t, i, e[i]);
}
function Dl(t, e) {
  Object.keys(e).forEach((i) => {
    Bl(t, i, e[i]);
  });
}
function Bl(t, e, i) {
  e in t ? t[e] = typeof t[e] == "boolean" && i === "" ? !0 : i : h(t, e, i);
}
function ft(t) {
  return /-/.test(t) ? Dl : ue;
}
function Fl(t) {
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
function jl(t) {
  return Array.from(t.childNodes);
}
function Ce(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function Wl(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = /** @type {string} */
  e);
}
function Ul(t, e, i) {
  ~Ll.indexOf(i) ? Wl(t, e) : Ce(t, e);
}
function Gr(t, e, { bubbles: i = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: i, cancelable: n });
}
function $i(t, e) {
  return new t(e);
}
const Bt = /* @__PURE__ */ new Map();
let Ft = 0;
function Gl(t) {
  let e = 5381, i = t.length;
  for (; i--; )
    e = (e << 5) - e ^ t.charCodeAt(i);
  return e >>> 0;
}
function Hl(t, e) {
  const i = { stylesheet: Ml(e), rules: {} };
  return Bt.set(t, i), i;
}
function jt(t, e, i, n, r, l, o, s = 0) {
  const u = 16.666 / n;
  let a = `{
`;
  for (let b = 0; b <= 1; b += u) {
    const _ = e + (i - e) * l(b);
    a += b * 100 + `%{${o(_, 1 - _)}}
`;
  }
  const f = a + `100% {${o(i, 1 - i)}}
}`, c = `__svelte_${Gl(f)}_${s}`, d = Ur(t), { stylesheet: k, rules: g } = Bt.get(d) || Hl(d, t);
  g[c] || (g[c] = !0, k.insertRule(`@keyframes ${c} ${f}`, k.cssRules.length));
  const m = t.style.animation || "";
  return t.style.animation = `${m ? `${m}, ` : ""}${c} ${n}ms linear ${r}ms 1 both`, Ft += 1, c;
}
function Wt(t, e) {
  const i = (t.style.animation || "").split(", "), n = i.filter(
    e ? (l) => l.indexOf(e) < 0 : (l) => l.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), r = i.length - n.length;
  r && (t.style.animation = n.join(", "), Ft -= r, Ft || Vl());
}
function Vl() {
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
function ql(t) {
  St().$$.on_destroy.push(t);
}
function je() {
  const t = St();
  return (e, i, { cancelable: n = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const l = Gr(
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
function U(t, e) {
  const i = t.$$.callbacks[e.type];
  i && i.slice().forEach((n) => n.call(this, e));
}
const lt = [], Ee = [];
let st = [];
const mi = [], Xl = /* @__PURE__ */ Promise.resolve();
let hi = !1;
function Ql() {
  hi || (hi = !0, Xl.then(Hr));
}
function Oe(t) {
  st.push(t);
}
function Kt(t) {
  mi.push(t);
}
const oi = /* @__PURE__ */ new Set();
let nt = 0;
function Hr() {
  if (nt !== 0)
    return;
  const t = pt;
  do {
    try {
      for (; nt < lt.length; ) {
        const e = lt[nt];
        nt++, bt(e), Kl(e.$$);
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
function Kl(t) {
  if (t.fragment !== null) {
    t.update(), we(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Oe);
  }
}
function Yl(t) {
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
  t.dispatchEvent(Gr(`${e ? "intro" : "outro"}${i}`));
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
function C(t, e, i, n) {
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
function Jl(t, e, i) {
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
      css: b
    } = r || zi;
    b && (o = jt(t, 0, 1, k, d, g, b, u++)), m(0, 1);
    const _ = Pi() + d, w = _ + k;
    s && s.abort(), l = !0, Oe(() => Je(t, !0, "start")), s = Mi((y) => {
      if (l) {
        if (y >= w)
          return m(1, 0), Je(t, !0, "end"), a(), l = !1;
        if (y >= _) {
          const p = g((y - _) / k);
          m(p, 1 - p);
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
function Zl(t, e, i) {
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
    const m = Pi() + f, b = m + c;
    Oe(() => Je(t, !1, "start")), "inert" in t && (u = /** @type {HTMLElement} */
    t.inert, t.inert = !0), Mi((_) => {
      if (l) {
        if (_ >= b)
          return k(0, 1), Je(t, !1, "end"), --s.r || we(s.c), !1;
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
      easing: _ = Xt,
      tick: w = le,
      css: y
    } = l || zi, p = {
      start: Pi() + m,
      b: g
    };
    g || (p.group = ze, ze.r += 1), "inert" in t && (g ? f !== void 0 && (t.inert = f) : (f = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), s || u ? u = p : (y && (c(), a = jt(t, o, g, b, m, _, y)), g && w(0, 1), s = d(p, b), Oe(() => Je(t, g, "start")), Mi((S) => {
      if (u && S > u.start && (s = d(u, b), u = null, Je(t, s.b, "start"), y && (c(), a = jt(
        t,
        o,
        s.b,
        s.duration,
        0,
        _,
        l.css
      ))), s) {
        if (S >= s.end)
          w(o = s.b, 1 - o), Je(t, s.b, "end"), u || (s.b ? c() : --s.group.r || we(s.group.c)), s = null;
        else if (S >= s.start) {
          const O = S - s.start;
          o = s.a + s.d * _(O / s.duration), w(o, 1 - o);
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
    const l = t.$$.on_mount.map(Dr).filter(me);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : we(l), t.$$.on_mount = [];
  }), r.forEach(Oe);
}
function x(t, e) {
  const i = t.$$;
  i.fragment !== null && (Yl(i.after_update), we(i.on_destroy), i.fragment && i.fragment.d(e), i.on_destroy = i.fragment = null, i.ctx = []);
}
function xl(t, e) {
  t.$$.dirty[0] === -1 && (lt.push(t), Ql(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
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
    return a.ctx && r(a.ctx[c], a.ctx[c] = g) && (!a.skip_bound && a.bound[c] && a.bound[c](g), f && xl(t, c)), d;
  }) : [], a.update(), f = !0, we(a.before_update), a.fragment = n ? n(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = jl(e.target);
      a.fragment && a.fragment.l(c), c.forEach(E);
    } else
      a.fragment && a.fragment.c();
    e.intro && v(t.$$.fragment), Z(t, e.target, e.anchor), Hr();
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
    this.$$set && !Il(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const $l = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add($l);
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
function Vr() {
  for (var t = 0, e, i, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (i = qr(e)) && (n && (n += " "), n += i);
  return n;
}
function qr(t) {
  if (typeof t == "string")
    return t;
  for (var e, i = "", n = 0; n < t.length; n++)
    t[n] && (e = qr(t[n])) && (i && (i += " "), i += e);
  return i;
}
var Ri = "-";
function eo(t) {
  var e = io(t), i = t.conflictingClassGroups, n = t.conflictingClassGroupModifiers, r = n === void 0 ? {} : n;
  function l(s) {
    var u = s.split(Ri);
    return u[0] === "" && u.length !== 1 && u.shift(), Xr(u, e) || to(s);
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
function Xr(t, e) {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  var i = t[0], n = e.nextPart.get(i), r = n ? Xr(t.slice(1), n) : void 0;
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
function to(t) {
  if (en.test(t)) {
    var e = en.exec(t)[1], i = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}
function io(t) {
  var e = t.theme, i = t.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, r = ro(Object.entries(t.classGroups), i);
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
      if (no(r)) {
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
function no(t) {
  return t.isThemeGetter;
}
function ro(t, e) {
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
function lo(t) {
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
var Qr = "!";
function oo(t) {
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
    var k = s.length === 0 ? o : o.substring(a), g = k.startsWith(Qr), m = g ? k.substring(1) : k, b = f && f > a ? f - a : void 0;
    return {
      modifiers: s,
      hasImportantModifier: g,
      baseClassName: m,
      maybePostfixModifierPosition: b
    };
  };
}
function so(t) {
  if (t.length <= 1)
    return t;
  var e = [], i = [];
  return t.forEach(function(n) {
    var r = n[0] === "[";
    r ? (e.push.apply(e, i.sort().concat([n])), i = []) : i.push(n);
  }), e.push.apply(e, i.sort()), e;
}
function uo(t) {
  return {
    cache: lo(t.cacheSize),
    splitModifiers: oo(t),
    ...eo(t)
  };
}
var ao = /\s+/;
function fo(t, e) {
  var i = e.splitModifiers, n = e.getClassGroupId, r = e.getConflictingClassGroupIds, l = /* @__PURE__ */ new Set();
  return t.trim().split(ao).map(function(o) {
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
    var g = so(u).join(":"), m = a ? g + Qr : g;
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
function co() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  var n, r, l, o = s;
  function s(a) {
    var f = e[0], c = e.slice(1), d = c.reduce(function(k, g) {
      return g(k);
    }, f());
    return n = uo(d), r = n.cache.get, l = n.cache.set, o = u, u(a);
  }
  function u(a) {
    var f = r(a);
    if (f)
      return f;
    var c = fo(a, n);
    return l(a, c), c;
  }
  return function() {
    return o(Vr.apply(null, arguments));
  };
}
function ke(t) {
  var e = function(n) {
    return n[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var Kr = /^\[(?:([a-z-]+):)?(.+)\]$/i, ko = /^\d+\/\d+$/, go = /* @__PURE__ */ new Set(["px", "full", "screen"]), mo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ho = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, bo = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Me(t) {
  return Ye(t) || go.has(t) || ko.test(t) || _i(t);
}
function _i(t) {
  return tt(t, "length", Co);
}
function _o(t) {
  return tt(t, "size", Yr);
}
function po(t) {
  return tt(t, "position", Yr);
}
function yo(t) {
  return tt(t, "url", So);
}
function Pt(t) {
  return tt(t, "number", Ye);
}
function Ye(t) {
  return !Number.isNaN(Number(t));
}
function vo(t) {
  return t.endsWith("%") && Ye(t.slice(0, -1));
}
function gt(t) {
  return nn(t) || tt(t, "number", nn);
}
function fe(t) {
  return Kr.test(t);
}
function mt() {
  return !0;
}
function Ue(t) {
  return mo.test(t);
}
function wo(t) {
  return tt(t, "", To);
}
function tt(t, e, i) {
  var n = Kr.exec(t);
  return n ? n[1] ? n[1] === e : i(n[2]) : !1;
}
function Co(t) {
  return ho.test(t);
}
function Yr() {
  return !1;
}
function So(t) {
  return t.startsWith("url(");
}
function nn(t) {
  return Number.isInteger(Number(t));
}
function To(t) {
  return bo.test(t);
}
function Eo() {
  var t = ke("colors"), e = ke("spacing"), i = ke("blur"), n = ke("brightness"), r = ke("borderColor"), l = ke("borderRadius"), o = ke("borderSpacing"), s = ke("borderWidth"), u = ke("contrast"), a = ke("grayscale"), f = ke("hueRotate"), c = ke("invert"), d = ke("gap"), k = ke("gradientColorStops"), g = ke("gradientColorStopPositions"), m = ke("inset"), b = ke("margin"), _ = ke("opacity"), w = ke("padding"), y = ke("saturate"), p = ke("scale"), S = ke("sepia"), O = ke("skew"), T = ke("space"), j = ke("translate"), q = function() {
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
  }, I = function() {
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
      borderSpacing: W(),
      borderWidth: ge(),
      contrast: Ae(),
      grayscale: pe(),
      hueRotate: Ne(),
      invert: pe(),
      gap: W(),
      gradientColorStops: [t],
      gradientColorStopPositions: [vo, _i],
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
        "space-x": [T]
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
        "space-y": [T]
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
        decoration: [].concat(I(), ["wavy"])
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
        bg: [].concat(D(), [po])
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
        bg: ["auto", "cover", "contain", _o]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, yo]
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
        "border-opacity": [_]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(I(), ["hidden"])
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
        "divide-opacity": [_]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: I()
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
        outline: [""].concat(I())
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
        shadow: ["", "inner", "none", Ue, wo]
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
        saturate: [y]
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
        "backdrop-opacity": [_]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [y]
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
        "skew-x": [O]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [O]
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
var P = /* @__PURE__ */ co(Eo);
function Ao(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function Jr(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Oo(t) {
  const e = Math.cos(t * Math.PI * 0.5);
  return Math.abs(e) < 1e-14 ? 1 : 1 - e;
}
function Di(t, { delay: e = 0, duration: i = 400, easing: n = Ao, amount: r = 5, opacity: l = 0 } = {}) {
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
function yt(t, { delay: e = 0, duration: i = 400, easing: n = Jr, x: r = 0, y: l = 0, opacity: o = 0 } = {}) {
  const s = getComputedStyle(t), u = +s.opacity, a = s.transform === "none" ? "" : s.transform, f = u * (1 - o), [c, d] = gi(r), [k, g] = gi(l);
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (m, b) => `
			transform: ${a} translate(${(1 - m) * c}${d}, ${(1 - m) * k}${g});
			opacity: ${u - f * b}`
  };
}
function Bi(t, { delay: e = 0, duration: i = 400, easing: n = Jr, axis: r = "y" } = {}) {
  const l = getComputedStyle(t), o = +l.opacity, s = r === "y" ? "height" : "width", u = parseFloat(l[s]), a = r === "y" ? ["top", "bottom"] : ["left", "right"], f = a.map(
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
    css: (_) => `overflow: hidden;opacity: ${Math.min(_ * 20, 1) * o};${s}: ${_ * u}px;padding-${a[0]}: ${_ * c}px;padding-${a[1]}: ${_ * d}px;margin-${a[0]}: ${_ * k}px;margin-${a[1]}: ${_ * g}px;border-${a[0]}-width: ${_ * m}px;border-${a[1]}-width: ${_ * b}px;`
  };
}
const Io = (t) => ({}), rn = (t) => ({}), Po = (t) => ({}), ln = (t) => ({}), Lo = (t) => ({}), on = (t) => ({});
function Mo(t) {
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
  ), r = n || zo();
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
          Io
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
      C(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function No(t) {
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
        ln
      );
    },
    i(l) {
      e || (v(r, l), e = !0);
    },
    o(l) {
      C(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function zo(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "m1 1 4 4 4-4"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    p: le,
    d(n) {
      n && E(e);
    }
  };
}
function Ro(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5 5 1 1 5"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    p: le,
    d(n) {
      n && E(e);
    }
  };
}
function Do(t) {
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
      e = M("div"), i = M("div"), l && l.c(), h(
        i,
        "class",
        /*contentClass*/
        t[3]
      ), h(e, "class", "uikit-hidden");
    },
    m(o, s) {
      A(o, e, s), R(e, i), l && l.m(i, null), n = !0;
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
      C(l, o), n = !1;
    },
    d(o) {
      o && E(e), l && l.d(o);
    }
  };
}
function Bo(t) {
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
      e = M("div"), i = M("div"), o && o.c(), h(
        i,
        "class",
        /*contentClass*/
        t[3]
      );
    },
    m(s, u) {
      A(s, e, u), R(e, i), o && o.m(i, null), r = !0;
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
      C(o, s), s && (n || (n = Re(
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
function Fo(t) {
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
  ), m = [No, Mo], b = [];
  function _(S, O) {
    return (
      /*open*/
      S[0] ? 0 : 1
    );
  }
  r = _(t), l = b[r] = m[r](t);
  const w = [Bo, Do], y = [];
  function p(S, O) {
    return (
      /*open*/
      S[0] ? 0 : 1
    );
  }
  return s = p(t), u = y[s] = w[s](t), {
    c() {
      e = M("h2"), i = M("button"), g && g.c(), n = H(), l.c(), o = H(), u.c(), a = ae(), h(i, "type", "button"), h(
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
    m(S, O) {
      A(S, e, O), R(e, i), g && g.m(i, null), R(i, n), b[r].m(i, null), A(S, o, O), y[s].m(S, O), A(S, a, O), f = !0, c || (d = B(
        i,
        "click",
        /*handleToggle*/
        t[6]
      ), c = !0);
    },
    p(S, [O]) {
      g && g.p && (!f || O & /*$$scope*/
      2097152) && K(
        g,
        k,
        S,
        /*$$scope*/
        S[21],
        f ? Q(
          k,
          /*$$scope*/
          S[21],
          O,
          Lo
        ) : Y(
          /*$$scope*/
          S[21]
        ),
        on
      );
      let T = r;
      r = _(S), r === T ? b[r].p(S, O) : (oe(), C(b[T], 1, 1, () => {
        b[T] = null;
      }), se(), l = b[r], l ? l.p(S, O) : (l = b[r] = m[r](S), l.c()), v(l, 1), l.m(i, null)), (!f || O & /*buttonClass*/
      4) && h(
        i,
        "class",
        /*buttonClass*/
        S[2]
      ), (!f || O & /*open*/
      1) && h(
        i,
        "aria-expanded",
        /*open*/
        S[0]
      );
      let j = s;
      s = p(S), s === j ? y[s].p(S, O) : (oe(), C(y[j], 1, 1, () => {
        y[j] = null;
      }), se(), u = y[s], u ? u.p(S, O) : (u = y[s] = w[s](S), u.c()), v(u, 1), u.m(a.parentNode, a));
    },
    i(S) {
      f || (v(g, S), v(l), v(u), f = !0);
    },
    o(S) {
      C(g, S), C(l), C(u), f = !1;
    },
    d(S) {
      S && (E(e), E(o), E(a)), g && g.d(S), b[r].d(), y[s].d(S), c = !1, d();
    }
  };
}
function jo(t, e, i) {
  let n, r, { $$slots: l = {}, $$scope: o } = e, { open: s = !1 } = e, { activeClass: u = void 0 } = e, { inactiveClass: a = void 0 } = e, { defaultClass: f = "uikit-flex uikit-items-center uikit-justify-between uikit-w-full uikit-font-medium uikit-text-left group-first:uikit-rounded-t-xl uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { transitionType: c = "slide" } = e, { transitionParams: d = {} } = e, { paddingFlush: k = "uikit-py-5" } = e, { paddingDefault: g = "uikit-p-5" } = e, { textFlushOpen: m = "uikit-text-gray-900 dark:uikit-text-white" } = e, { textFlushDefault: b = "uikit-text-gray-500 dark:uikit-text-gray-400" } = e, { borderClass: _ = "uikit-border-s uikit-border-e group-first:uikit-border-t" } = e, { borderOpenClass: w = "uikit-border-s uikit-border-e" } = e, { borderBottomClass: y = "uikit-border-b" } = e, { borderSharedClass: p = "uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { classActive: S = void 0 } = e, { classInactive: O = void 0 } = e, T = P(u, S), j = P(a, O);
  const q = (I, te) => {
    switch (c) {
      case "blur":
        return Di(I, te);
      case "fly":
        return yt(I, te);
      case "fade":
        return Jt(I, te);
      default:
        return Bi(I, te);
    }
  }, ee = Be("ctx") ?? {}, z = {}, W = ee.selected ?? Tt();
  Qt(t, W, (I) => i(23, r = I));
  let ge = s;
  s = !1, Ke(() => (ge && Fr(W, r = z, r), W.subscribe((I) => i(0, s = I === z))));
  const N = (I) => W.set(s ? {} : z);
  let D;
  return t.$$set = (I) => {
    i(29, e = L(L({}, e), F(I))), "open" in I && i(0, s = I.open), "activeClass" in I && i(7, u = I.activeClass), "inactiveClass" in I && i(8, a = I.inactiveClass), "defaultClass" in I && i(9, f = I.defaultClass), "transitionType" in I && i(10, c = I.transitionType), "transitionParams" in I && i(1, d = I.transitionParams), "paddingFlush" in I && i(11, k = I.paddingFlush), "paddingDefault" in I && i(12, g = I.paddingDefault), "textFlushOpen" in I && i(13, m = I.textFlushOpen), "textFlushDefault" in I && i(14, b = I.textFlushDefault), "borderClass" in I && i(15, _ = I.borderClass), "borderOpenClass" in I && i(16, w = I.borderOpenClass), "borderBottomClass" in I && i(17, y = I.borderBottomClass), "borderSharedClass" in I && i(18, p = I.borderSharedClass), "classActive" in I && i(19, S = I.classActive), "classInactive" in I && i(20, O = I.classInactive), "$$scope" in I && i(21, o = I.$$scope);
  }, t.$$.update = () => {
    i(2, D = P([
      f,
      ee.flush || _,
      y,
      p,
      ee.flush ? k : g,
      s && (ee.flush ? m : T || ee.activeClass),
      !s && (ee.flush ? b : j || ee.inactiveClass),
      e.class
    ])), t.$$.dirty & /*paddingFlush, paddingDefault, borderOpenClass, borderBottomClass, borderSharedClass*/
    464896 && i(3, n = P([
      ee.flush ? k : g,
      ee.flush ? "" : w,
      y,
      p
    ]));
  }, e = F(e), [
    s,
    d,
    D,
    n,
    q,
    W,
    N,
    u,
    a,
    f,
    c,
    k,
    g,
    m,
    b,
    _,
    w,
    y,
    p,
    S,
    O,
    o,
    l
  ];
}
class Wo extends re {
  constructor(e) {
    super(), ne(this, e, jo, Fo, J, {
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
    a = L(a, u[f]);
  return {
    c() {
      e = M(
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
        B(
          e,
          "click",
          /*click_handler*/
          t[13]
        ),
        B(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[14]
        ),
        B(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[15]
        ),
        B(
          e,
          "focusin",
          /*focusin_handler*/
          t[16]
        ),
        B(
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
      C(s, f), n = !1;
    },
    d(f) {
      f && E(e), s && s.d(f), t[18](null), r = !1, we(l);
    }
  };
}
function Uo(t) {
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
      C(r, l), n = !1;
    },
    d(l) {
      l && E(i), r && r.d(l);
    }
  };
}
function Go(t, e, i) {
  const n = ["tag", "color", "rounded", "border", "shadow", "node", "use", "options", "role"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = () => {
  };
  He("background", !0);
  let { tag: u = r.href ? "a" : "div" } = e, { color: a = "default" } = e, { rounded: f = !1 } = e, { border: c = !1 } = e, { shadow: d = !1 } = e, { node: k = void 0 } = e, { use: g = s } = e, { options: m = {} } = e, { role: b = void 0 } = e;
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
  }, y = {
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
  function O(z) {
    U.call(this, t, z);
  }
  function T(z) {
    U.call(this, t, z);
  }
  function j(z) {
    U.call(this, t, z);
  }
  function q(z) {
    U.call(this, t, z);
  }
  function ee(z) {
    Ee[z ? "unshift" : "push"](() => {
      k = z, i(0, k);
    });
  }
  return t.$$set = (z) => {
    i(23, e = L(L({}, e), F(z))), i(6, r = ie(e, n)), "tag" in z && i(1, u = z.tag), "color" in z && i(7, a = z.color), "rounded" in z && i(8, f = z.rounded), "border" in z && i(9, c = z.border), "shadow" in z && i(10, d = z.shadow), "node" in z && i(0, k = z.node), "use" in z && i(2, g = z.use), "options" in z && i(3, m = z.options), "role" in z && i(4, b = z.role), "$$scope" in z && i(11, o = z.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*color*/
    128 && i(7, a = a ?? "default"), t.$$.dirty & /*color*/
    128 && He("color", a), i(5, p = P(_[a], w[a], f && "uikit-rounded-lg", c && "uikit-border", y[a], d && "uikit-shadow-md", e.class));
  }, e = F(e), [
    k,
    u,
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
    O,
    T,
    j,
    q,
    ee
  ];
}
class it extends re {
  constructor(e) {
    super(), ne(this, e, Go, Uo, J, {
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
      e = M("p"), n = be(i), h(e, "class", "mb-2 text-gray-500 dark:text-gray-400");
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
      r && E(e);
    }
  };
}
function Ho(t) {
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
function Vo(t) {
  let e, i = (
    /*item*/
    (t[10].title || "a title") + ""
  ), n;
  return {
    c() {
      e = M("span"), n = be(i), h(e, "slot", "header");
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
      r && E(e);
    }
  };
}
function fn(t) {
  let e, i;
  return e = new Wo({
    props: {
      $$slots: {
        header: [Vo],
        default: [Ho]
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
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function qo(t) {
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
        C(r[s]);
      i = !1;
    },
    d(o) {
      o && E(e), Qe(r, o);
    }
  };
}
function Xo(t) {
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
    $$slots: { default: [qo] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = L(r, n[l]);
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
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function Qo(t, e, i) {
  const n = ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass", "items"];
  let r = ie(e, n), { multiple: l = !1 } = e, { flush: o = !1 } = e, { activeClass: s = "uikit-bg-gray-100 dark:uikit-bg-gray-800 uikit-text-gray-900 dark:uikit-text-white focus:uikit-ring-4 focus:uikit-ring-gray-200 dark:focus:uikit-ring-gray-800" } = e, { inactiveClass: u = "uikit-text-gray-500 dark:uikit-text-gray-400 hover:uikit-bg-gray-100 hover:dark:uikit-bg-gray-800" } = e, { defaultClass: a = "uikit-text-gray-500 dark:uikit-text-gray-400" } = e, { items: f = [] } = e;
  const c = {
    flush: o,
    activeClass: P(s, e.classActive),
    inactiveClass: P(u, e.classInactive),
    selected: l ? void 0 : Tt()
  };
  He("ctx", c);
  let d;
  return t.$$set = (k) => {
    i(9, e = L(L({}, e), F(k))), i(2, r = ie(e, n)), "multiple" in k && i(3, l = k.multiple), "flush" in k && i(4, o = k.flush), "activeClass" in k && i(5, s = k.activeClass), "inactiveClass" in k && i(6, u = k.inactiveClass), "defaultClass" in k && i(7, a = k.defaultClass), "items" in k && i(0, f = k.items);
  }, t.$$.update = () => {
    i(1, d = P(a, e.class));
  }, e = F(e), [
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
class Ko extends re {
  constructor(e) {
    super(), ne(this, e, Qo, Xo, J, {
      multiple: 3,
      flush: 4,
      activeClass: 5,
      inactiveClass: 6,
      defaultClass: 7,
      items: 0
    });
  }
}
const Wd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Ko({
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
}, Yo = (t) => ({}), cn = (t) => ({ close: (
  /*close*/
  t[4]
) }), Jo = (t) => ({}), dn = (t) => ({ close: (
  /*close*/
  t[4]
) });
function Zo(t) {
  let e, i;
  const n = [
    /*$$restProps*/
    t[5]
  ];
  let r = {
    $$slots: { default: [$o] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = L(r, n[l]);
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
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function xo(t) {
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
      1 && v(n, 1)) : (n = kn(r), n.c(), v(n, 1), n.m(e.parentNode, e)) : n && (oe(), C(n, 1, 1, () => {
        n = null;
      }), se());
    },
    i(r) {
      i || (v(n), i = !0);
    },
    o(r) {
      C(n), i = !1;
    },
    d(r) {
      r && E(e), n && n.d(r);
    }
  };
}
function $o(t) {
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
          Yo
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
    $$slots: { default: [es] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < l.length; s += 1)
    o = L(o, l[s]);
  return i = new it({ props: o }), {
    c() {
      e = M("div"), $(i.$$.fragment);
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
      C(i.$$.fragment, s), s && (n || (n = Re(
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
          Jo
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
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function ts(t) {
  let e, i, n, r;
  const l = [xo, Zo], o = [];
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
      e = s(u), e === f ? o[e].p(u, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      C(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function is(t, e, i) {
  const n = ["transition", "params", "open", "dismissable"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e, { transition: s = Jt } = e, { params: u = {} } = e, { open: a = !0 } = e, { dismissable: f = !1 } = e;
  const c = je();
  function d(k) {
    k != null && k.stopPropagation && k.stopPropagation(), i(0, a = !1);
  }
  return t.$$set = (k) => {
    e = L(L({}, e), F(k)), i(5, r = ie(e, n)), "transition" in k && i(1, s = k.transition), "params" in k && i(2, u = k.params), "open" in k && i(0, a = k.open), "dismissable" in k && i(3, f = k.dismissable), "$$scope" in k && i(7, o = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && c(a ? "open" : "close");
  }, [a, s, u, f, d, r, l, o];
}
class ns extends re {
  constructor(e) {
    super(), ne(this, e, is, ts, J, {
      transition: 1,
      params: 2,
      open: 0,
      dismissable: 3
    });
  }
}
const rs = (t) => ({ svgSize: t & /*size*/
4 }), gn = (t) => ({
  svgSize: (
    /*svgSizes*/
    t[5][
      /*size*/
      t[2]
    ]
  )
}), ls = (t) => ({ svgSize: t & /*size*/
4 }), mn = (t) => ({
  svgSize: (
    /*svgSizes*/
    t[5][
      /*size*/
      t[2]
    ]
  )
});
function os(t) {
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
    c = L(c, f[d]);
  return {
    c() {
      e = M("button"), s && s.c(), i = H(), a && a.c(), ue(e, c);
    },
    m(d, k) {
      A(d, e, k), s && s.m(e, null), R(e, i), a && a.m(e, null), e.autofocus && e.focus(), r = !0, l || (o = B(
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
          rs
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
      C(a, d), r = !1;
    },
    d(d) {
      d && E(e), s && s.d(), a && a.d(d), l = !1, o();
    }
  };
}
function ss(t) {
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
    a = L(a, u[f]);
  return {
    c() {
      e = M("a"), l && l.c(), i = H(), s && s.c(), ue(e, a);
    },
    m(f, c) {
      A(f, e, c), l && l.m(e, null), R(e, i), s && s.m(e, null), r = !0;
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
          ls
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
      C(s, f), r = !1;
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
      e = M("span"), i = be(
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
      n && E(e);
    }
  };
}
function bn(t) {
  let e, i;
  return {
    c() {
      e = M("span"), i = be(
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
      n && E(e);
    }
  };
}
function us(t) {
  let e, i, n, r;
  const l = [ss, os], o = [];
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
      e = s(u), e === f ? o[e].p(u, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      C(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function as(t, e, i) {
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
    i(14, e = L(L({}, e), F(w))), i(6, r = ie(e, n)), "color" in w && i(7, u = w.color), "name" in w && i(0, a = w.name), "ariaLabel" in w && i(1, f = w.ariaLabel), "size" in w && i(2, c = w.size), "href" in w && i(3, d = w.href), "$$scope" in w && i(8, o = w.$$scope);
  }, t.$$.update = () => {
    i(4, m = P(
      "focus:uikit-outline-none uikit-whitespace-normal",
      g[c],
      k[u],
      u === "default" && (s ? "hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-600" : "hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700"),
      e.class
    ));
  }, e = F(e), [
    a,
    f,
    c,
    d,
    m,
    b,
    r,
    u,
    o,
    l,
    _
  ];
}
class fs extends re {
  constructor(e) {
    super(), ne(this, e, as, us, J, {
      color: 7,
      name: 0,
      ariaLabel: 1,
      size: 2,
      href: 3
    });
  }
}
function cs(t) {
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
      r && E(e);
    }
  };
}
function ds(t) {
  let e, i;
  const n = [
    { name: (
      /*name*/
      t[0]
    ) },
    /*$$restProps*/
    t[1],
    {
      class: P(
        "uikit-ms-auto",
        /*$$props*/
        t[2].class
      )
    }
  ];
  let r = {
    $$slots: {
      default: [
        cs,
        ({ svgSize: l }) => ({ 4: l }),
        ({ svgSize: l }) => l ? 16 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = L(r, n[l]);
  return e = new fs({ props: r }), e.$on(
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
          class: P(
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
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function ks(t, e, i) {
  const n = ["name"];
  let r = ie(e, n), { name: l = "Close" } = e;
  function o(s) {
    U.call(this, t, s);
  }
  return t.$$set = (s) => {
    i(2, e = L(L({}, e), F(s))), i(1, r = ie(e, n)), "name" in s && i(0, l = s.name);
  }, e = F(e), [l, r, e, o];
}
class Fi extends re {
  constructor(e) {
    super(), ne(this, e, ks, ds, J, { name: 0 });
  }
}
const gs = (t) => ({ close: t & /*close*/
1048576 }), _n = (t) => ({ close: (
  /*close*/
  t[20]
) }), ms = (t) => ({}), pn = (t) => ({});
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
          ms
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
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function hs(t) {
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
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function bs(t) {
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
      e = M("div"), r && r.c();
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
      C(r, l), i = !1;
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
  ), r = n || _s(t);
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
          gs
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
      C(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function _s(t) {
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
      C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      x(e, r);
    }
  };
}
function ps(t) {
  let e, i, n, r, l, o, s = (
    /*$$slots*/
    t[4].icon && yn(t)
  );
  const u = [bs, hs], a = [];
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
      16 && v(s, 1)) : (s = yn(d), s.c(), v(s, 1), s.m(e.parentNode, e)) : s && (oe(), C(s, 1, 1, () => {
        s = null;
      }), se());
      let g = i;
      i = f(d), i === g ? a[i].p(d, k) : (oe(), C(a[g], 1, 1, () => {
        a[g] = null;
      }), se(), n = a[i], n ? n.p(d, k) : (n = a[i] = u[i](d), n.c()), v(n, 1), n.m(r.parentNode, r)), /*dismissable*/
      d[1] ? c ? (c.p(d, k), k & /*dismissable*/
      2 && v(c, 1)) : (c = vn(d), c.c(), v(c, 1), c.m(l.parentNode, l)) : c && (oe(), C(c, 1, 1, () => {
        c = null;
      }), se());
    },
    i(d) {
      o || (v(s), v(n), v(c), o = !0);
    },
    o(d) {
      C(s), C(n), C(c), o = !1;
    },
    d(d) {
      d && (E(e), E(r), E(l)), s && s.d(d), a[i].d(d), c && c.d(d);
    }
  };
}
function ys(t) {
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
        ps,
        ({ close: l }) => ({ 20: l }),
        ({ close: l }) => l ? 1048576 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = L(r, n[l]);
  return e = new ns({ props: r }), e.$on(
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
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function vs(t, e, i) {
  const n = ["open", "dismissable", "defaultClass"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Xe(l);
  let { open: u = !0 } = e, { dismissable: a = !1 } = e, { defaultClass: f = "uikit-p-4 uikit-gap-3 uikit-text-sm" } = e, c;
  const d = je(), k = (T, j) => {
    d("onEnd"), T(j);
  };
  function g(T) {
    U.call(this, t, T);
  }
  function m(T) {
    U.call(this, t, T);
  }
  function b(T) {
    U.call(this, t, T);
  }
  function _(T) {
    U.call(this, t, T);
  }
  function w(T) {
    U.call(this, t, T);
  }
  function y(T) {
    U.call(this, t, T);
  }
  function p(T) {
    U.call(this, t, T);
  }
  function S(T) {
    U.call(this, t, T);
  }
  function O(T) {
    U.call(this, t, T);
  }
  return t.$$set = (T) => {
    i(19, e = L(L({}, e), F(T))), i(5, r = ie(e, n)), "open" in T && i(0, u = T.open), "dismissable" in T && i(1, a = T.dismissable), "defaultClass" in T && i(6, f = T.defaultClass), "$$scope" in T && i(18, o = T.$$scope);
  }, t.$$.update = () => {
    i(2, c = P(f, (s.icon || a) && "uikit-flex uikit-items-center", e.class));
  }, e = F(e), [
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
    b,
    _,
    w,
    y,
    p,
    S,
    O,
    o
  ];
}
class ws extends re {
  constructor(e) {
    super(), ne(this, e, vs, ys, J, { open: 0, dismissable: 1, defaultClass: 6 });
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
}, zt = (t, e) => t ? !!((t.provider === "" || t.provider.match(_t)) && (e && t.prefix === "" || t.prefix.match(_t)) && t.name.match(_t)) : !1, Zr = Object.freeze(
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
  ...Zr,
  ...Ut
}), pi = Object.freeze({
  ...xt,
  body: "",
  hidden: !1
});
function Cs(t, e) {
  const i = {};
  !t.hFlip != !e.hFlip && (i.hFlip = !0), !t.vFlip != !e.vFlip && (i.vFlip = !0);
  const n = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return n && (i.rotate = n), i;
}
function wn(t, e) {
  const i = Cs(t, e);
  for (const n in pi)
    n in Ut ? n in t && !(n in i) && (i[n] = Ut[n]) : n in e ? i[n] = e[n] : n in t && (i[n] = t[n]);
  return i;
}
function Ss(t, e) {
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
function Ts(t, e, i) {
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
function xr(t, e) {
  const i = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return i;
  t.not_found instanceof Array && t.not_found.forEach((r) => {
    e(r, null), i.push(r);
  });
  const n = Ss(t);
  for (const r in n) {
    const l = n[r];
    l && (e(r, Ts(t, r, l)), i.push(r));
  }
  return i;
}
const Es = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Zr
};
function ui(t, e) {
  for (const i in e)
    if (i in t && typeof t[i] != typeof e[i])
      return !1;
  return !0;
}
function $r(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !ui(t, Es))
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
function As(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function xe(t, e) {
  const i = Cn[t] || (Cn[t] = /* @__PURE__ */ Object.create(null));
  return i[e] || (i[e] = As(t, e));
}
function ji(t, e) {
  return $r(e) ? xr(e, (i, n) => {
    n ? t.icons[i] = n : t.missing.add(i);
  }) : [];
}
function Os(t, e, i) {
  try {
    if (typeof i.body == "string")
      return t.icons[e] = { ...i }, !0;
  } catch {
  }
  return !1;
}
let vt = !1;
function el(t) {
  return typeof t == "boolean" && (vt = t), vt;
}
function Is(t) {
  const e = typeof t == "string" ? Zt(t, !0, vt) : t;
  if (e) {
    const i = xe(e.provider, e.prefix), n = e.name;
    return i.icons[n] || (i.missing.has(n) ? null : void 0);
  }
}
function Ps(t, e) {
  const i = Zt(t, !0, vt);
  if (!i)
    return !1;
  const n = xe(i.provider, i.prefix);
  return Os(n, i.name, e);
}
function Ls(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), vt && !e && !t.prefix) {
    let r = !1;
    return $r(t) && (t.prefix = "", xr(t, (l, o) => {
      o && Ps(l, o) && (r = !0);
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
const tl = Object.freeze({
  width: null,
  height: null
}), il = Object.freeze({
  // Dimensions
  ...tl,
  // Transformations
  ...Ut
}), Ms = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Ns = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Sn(t, e, i) {
  if (e === 1)
    return t;
  if (i = i || 100, typeof t == "number")
    return Math.ceil(t * e * i) / i;
  if (typeof t != "string")
    return t;
  const n = t.split(Ms);
  if (n === null || !n.length)
    return t;
  const r = [];
  let l = n.shift(), o = Ns.test(l);
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
const zs = (t) => t === "unset" || t === "undefined" || t === "none";
function Rs(t, e) {
  const i = {
    ...xt,
    ...t
  }, n = {
    ...il,
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
    let y;
    switch (w < 0 && (w -= Math.floor(w / 4) * 4), w = w % 4, w) {
      case 1:
        y = r.height / 2 + r.top, m.unshift(
          "rotate(90 " + y.toString() + " " + y.toString() + ")"
        );
        break;
      case 2:
        m.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        y = r.width / 2 + r.left, m.unshift(
          "rotate(-90 " + y.toString() + " " + y.toString() + ")"
        );
        break;
    }
    w % 2 === 1 && (r.left !== r.top && (y = r.left, r.left = r.top, r.top = y), r.width !== r.height && (y = r.width, r.width = r.height, r.height = y)), m.length && (l = '<g transform="' + m.join(" ") + '">' + l + "</g>");
  });
  const o = n.width, s = n.height, u = r.width, a = r.height;
  let f, c;
  o === null ? (c = s === null ? "1em" : s === "auto" ? a : s, f = Sn(c, u / a)) : (f = o === "auto" ? u : o, c = s === null ? Sn(f, a / u) : s === "auto" ? a : s);
  const d = {}, k = (g, m) => {
    zs(m) || (d[g] = m.toString());
  };
  return k("width", f), k("height", c), d.viewBox = r.left.toString() + " " + r.top.toString() + " " + u.toString() + " " + a.toString(), {
    attributes: d,
    body: l
  };
}
const Ds = /\sid="(\S+)"/g, Bs = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Fs = 0;
function js(t, e = Bs) {
  const i = [];
  let n;
  for (; n = Ds.exec(t); )
    i.push(n[1]);
  if (!i.length)
    return t;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return i.forEach((l) => {
    const o = typeof e == "function" ? e(l) : e + (Fs++).toString(), s = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
      "$1" + o + r + "$3"
    );
  }), t = t.replace(new RegExp(r, "g"), ""), t;
}
const yi = /* @__PURE__ */ Object.create(null);
function Ws(t, e) {
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
function Us(t, e) {
  const i = Wi(e);
  return i === null ? !1 : (Ui[t] = i, !0);
}
function Gi(t) {
  return Ui[t];
}
const Gs = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let Tn = Gs();
function Hs(t, e) {
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
function Vs(t) {
  return t === 404;
}
const qs = (t, e, i) => {
  const n = [], r = Hs(t, e), l = "icons";
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
function Xs(t) {
  if (typeof t == "string") {
    const e = Gi(t);
    if (e)
      return e.path;
  }
  return "/";
}
const Qs = (t, e, i) => {
  if (!Tn) {
    i("abort", 424);
    return;
  }
  let n = Xs(e.provider);
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
        i(Vs(o) ? "abort" : "next", o);
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
}, Ks = {
  prepare: qs,
  send: Qs
};
function Ys(t) {
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
function nl(t, e) {
  t.forEach((i) => {
    const n = i.loaderCallbacks;
    n && (i.loaderCallbacks = n.filter((r) => r.id !== e));
  });
}
function Js(t) {
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
      }), o.pending.length !== s && (i || nl([t], l.id), l.callback(
        o.loaded.slice(0),
        o.missing.slice(0),
        o.pending.slice(0),
        l.abort
      ));
    });
  }));
}
let Zs = 0;
function xs(t, e, i) {
  const n = Zs++, r = nl.bind(null, i, n);
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
function $s(t, e = !0, i = !1) {
  const n = [];
  return t.forEach((r) => {
    const l = typeof r == "string" ? Zt(r, e, i) : r;
    l && n.push(l);
  }), n;
}
var eu = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function tu(t, e, i, n) {
  const r = t.resources.length, l = t.random ? Math.floor(Math.random() * r) : t.index;
  let o;
  if (t.random) {
    let O = t.resources.slice(0);
    for (o = []; O.length > 1; ) {
      const T = Math.floor(Math.random() * O.length);
      o.push(O[T]), O = O.slice(0, T).concat(O.slice(T + 1));
    }
    o = o.concat(O);
  } else
    o = t.resources.slice(l).concat(t.resources.slice(0, l));
  const s = Date.now();
  let u = "pending", a = 0, f, c = null, d = [], k = [];
  typeof n == "function" && k.push(n);
  function g() {
    c && (clearTimeout(c), c = null);
  }
  function m() {
    u === "pending" && (u = "aborted"), g(), d.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), d = [];
  }
  function b(O, T) {
    T && (k = []), typeof O == "function" && k.push(O);
  }
  function _() {
    return {
      startTime: s,
      payload: e,
      status: u,
      queriesSent: a,
      queriesPending: d.length,
      subscribe: b,
      abort: m
    };
  }
  function w() {
    u = "failed", k.forEach((O) => {
      O(void 0, f);
    });
  }
  function y() {
    d.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), d = [];
  }
  function p(O, T, j) {
    const q = T !== "success";
    switch (d = d.filter((ee) => ee !== O), u) {
      case "pending":
        break;
      case "failed":
        if (q || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (T === "abort") {
      f = j, w();
      return;
    }
    if (q) {
      f = j, d.length || (o.length ? S() : w());
      return;
    }
    if (g(), y(), !t.random) {
      const ee = t.resources.indexOf(O.resource);
      ee !== -1 && ee !== t.index && (t.index = ee);
    }
    u = "completed", k.forEach((ee) => {
      ee(j);
    });
  }
  function S() {
    if (u !== "pending")
      return;
    g();
    const O = o.shift();
    if (O === void 0) {
      if (d.length) {
        c = setTimeout(() => {
          g(), u === "pending" && (y(), w());
        }, t.timeout);
        return;
      }
      w();
      return;
    }
    const T = {
      status: "pending",
      resource: O,
      callback: (j, q) => {
        p(T, j, q);
      }
    };
    d.push(T), a++, c = setTimeout(S, t.rotate), i(O, e, T.callback);
  }
  return setTimeout(S), _;
}
function rl(t) {
  const e = {
    ...eu,
    ...t
  };
  let i = [];
  function n() {
    i = i.filter((s) => s().status === "pending");
  }
  function r(s, u, a) {
    const f = tu(
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
function iu(t) {
  if (!ai[t]) {
    const e = Gi(t);
    if (!e)
      return;
    const i = rl(e), n = {
      config: e,
      redundancy: i
    };
    ai[t] = n;
  }
  return ai[t];
}
function nu(t, e, i) {
  let n, r;
  if (typeof t == "string") {
    const l = vi(t);
    if (!l)
      return i(void 0, 424), En;
    r = l.send;
    const o = iu(t);
    o && (n = o.redundancy);
  } else {
    const l = Wi(t);
    if (l) {
      n = rl(l);
      const o = t.resources ? t.resources[0] : "", s = vi(o);
      s && (r = s.send);
    }
  }
  return !n || !r ? (i(void 0, 424), En) : n.query(e, r, i)().abort;
}
const An = "iconify2", wt = "iconify", ll = wt + "-count", On = wt + "-version", ol = 36e5, ru = 168;
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
  return Hi(t, ll, e.toString());
}
function Si(t) {
  return parseInt(wi(t, ll)) || 0;
}
const $t = {
  local: !0,
  session: !0
}, sl = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Vi = !1;
function lu(t) {
  Vi = t;
}
let Lt = typeof window > "u" ? {} : window;
function ul(t) {
  const e = t + "Storage";
  try {
    if (Lt && Lt[e] && typeof Lt[e].length == "number")
      return Lt[e];
  } catch {
  }
  $t[t] = !1;
}
function al(t, e) {
  const i = ul(t);
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
  const r = Math.floor(Date.now() / ol) - ru, l = (s) => {
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
    l(s) || (s === o - 1 ? (o--, Ci(i, o)) : sl[t].add(s));
}
function fl() {
  if (!Vi) {
    lu(!0);
    for (const t in $t)
      al(t, (e) => {
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
function ou(t, e) {
  const i = t.lastModifiedCached;
  if (
    // Matches or newer
    i && i >= e
  )
    return i === e;
  if (t.lastModifiedCached = e, i)
    for (const n in $t)
      al(n, (r) => {
        const l = r.data;
        return r.provider !== t.provider || l.prefix !== t.prefix || l.lastModified === e;
      });
  return !0;
}
function su(t, e) {
  Vi || fl();
  function i(n) {
    let r;
    if (!$t[n] || !(r = ul(n)))
      return;
    const l = sl[n];
    let o;
    if (l.size)
      l.delete(o = Array.from(l).shift());
    else if (o = Si(r), !Ci(r, o + 1))
      return;
    const s = {
      cached: Math.floor(Date.now() / ol),
      provider: t.provider,
      data: e
    };
    return Hi(
      r,
      wt + o.toString(),
      JSON.stringify(s)
    );
  }
  e.lastModified && !ou(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), i("local") || i("session"));
}
function Pn() {
}
function uu(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, Js(t);
  }));
}
function au(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: i, prefix: n } = t, r = t.iconsToLoad;
    delete t.iconsToLoad;
    let l;
    if (!r || !(l = vi(i)))
      return;
    l.prepare(i, n, r).forEach((s) => {
      nu(i, s, (u) => {
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
            }), su(t, u);
          } catch (a) {
            console.error(a);
          }
        uu(t);
      });
    });
  }));
}
const fu = (t, e) => {
  const i = $s(t, !0, el()), n = Ys(i);
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
    r[a][f].length && au(u, r[a][f]);
  }), e ? xs(e, n, l) : Pn;
};
function cu(t, e) {
  const i = {
    ...t
  };
  for (const n in e) {
    const r = e[n], l = typeof r;
    n in tl ? (r === null || r && (l === "string" || l === "number")) && (i[n] = r) : l === typeof i[n] && (i[n] = n === "rotate" ? r % 4 : r);
  }
  return i;
}
const du = /[\s,]+/;
function ku(t, e) {
  e.split(du).forEach((i) => {
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
function gu(t, e = 0) {
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
function mu(t, e) {
  let i = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in e)
    i += " " + n + '="' + e[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + i + ">" + t + "</svg>";
}
function hu(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function bu(t) {
  return "data:image/svg+xml," + hu(t);
}
function _u(t) {
  return 'url("' + bu(t) + '")';
}
const Ln = {
  ...il,
  inline: !1
}, pu = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, yu = {
  display: "inline-block"
}, Ti = {
  "background-color": "currentColor"
}, cl = {
  "background-color": "transparent"
}, Mn = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Nn = {
  "-webkit-mask": Ti,
  mask: Ti,
  background: cl
};
for (const t in Nn) {
  const e = Nn[t];
  for (const i in Mn)
    e[t + "-" + i] = Mn[i];
}
function vu(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function wu(t, e) {
  const i = cu(Ln, e), n = e.mode || "svg", r = n === "svg" ? { ...pu } : {};
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
          typeof w == "string" && ku(i, w);
          break;
        case "color":
          l = l + (l.length > 0 && l.trim().slice(-1) !== ";" ? ";" : "") + "color: " + w + "; ";
          break;
        case "rotate":
          typeof w == "string" ? i[_] = gu(w) : typeof w == "number" && (i[_] = w);
          break;
        case "ariaHidden":
        case "aria-hidden":
          w !== !0 && w !== "true" && delete r["aria-hidden"];
          break;
        default:
          if (_.slice(0, 3) === "on:")
            break;
          Ln[_] === void 0 && (r[_] = w);
      }
  }
  const o = Rs(t, i), s = o.attributes;
  if (i.inline && (l = "vertical-align: -0.125em; " + l), n === "svg") {
    Object.assign(r, s), l !== "" && (r.style = l);
    let _ = 0, w = e.id;
    return typeof w == "string" && (w = w.replace(/-/g, "_")), {
      svg: !0,
      attributes: r,
      body: js(o.body, w ? () => w + "ID" + _++ : "iconifySvelte")
    };
  }
  const { body: u, width: a, height: f } = t, c = n === "mask" || (n === "bg" ? !1 : u.indexOf("currentColor") !== -1), d = mu(u, {
    ...s,
    width: a + "",
    height: f + ""
  }), g = {
    "--svg": _u(d)
  }, m = (_) => {
    const w = s[_];
    w && (g[_] = vu(w));
  };
  m("width"), m("height"), Object.assign(g, yu, c ? Ti : cl);
  let b = "";
  for (const _ in g)
    b += _ + ": " + g[_] + ";";
  return r.style = b + l, {
    svg: !1,
    attributes: r
  };
}
el(!0);
Ws("", Ks);
if (typeof document < "u" && typeof window < "u") {
  fl();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, i = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !Ls(n)) && console.error(i);
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
          Us(i, r) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
function Cu(t, e, i, n, r) {
  function l() {
    e.loading && (e.loading.abort(), e.loading = null);
  }
  if (typeof t == "object" && t !== null && typeof t.body == "string")
    return e.name = "", l(), { data: { ...xt, ...t } };
  let o;
  if (typeof t != "string" || (o = Zt(t, !1, !0)) === null)
    return l(), null;
  const s = Is(o);
  if (!s)
    return i && (!e.loading || e.loading.name !== t) && (l(), e.name = "", e.loading = {
      name: t,
      abort: fu([o], n)
    }), null;
  l(), e.name !== t && (e.name = t, r && !e.destroyed && r(t));
  const u = ["iconify"];
  return o.prefix !== "" && u.push("iconify--" + o.prefix), o.provider !== "" && u.push("iconify--" + o.provider), { data: s, classes: u };
}
function Su(t, e) {
  return t ? wu({
    ...xt,
    ...t
  }, e) : null;
}
function zn(t) {
  let e;
  function i(l, o) {
    return (
      /*data*/
      l[0].svg ? Eu : Tu
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
function Tu(t) {
  let e, i = [
    /*data*/
    t[0].attributes
  ], n = {};
  for (let r = 0; r < i.length; r += 1)
    n = L(n, i[r]);
  return {
    c() {
      e = M("span"), ue(e, n);
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
function Eu(t) {
  let e, i = (
    /*data*/
    t[0].body + ""
  ), n = [
    /*data*/
    t[0].attributes
  ], r = {};
  for (let l = 0; l < n.length; l += 1)
    r = L(r, n[l]);
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
function Au(t) {
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
function Ou(t, e, i) {
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
  }), ql(() => {
    i(1, n.destroyed = !0, n), n.loading && (n.loading.abort(), i(1, n.loading = null, n));
  }), t.$$set = (a) => {
    i(6, e = L(L({}, e), F(a)));
  }, t.$$.update = () => {
    {
      const a = Cu(e.icon, n, r, u, s);
      i(0, o = a ? Su(a.data, e) : null), o && a.classes && i(
        0,
        o.attributes.class = (typeof e.class == "string" ? e.class + " " : "") + a.classes.join(" "),
        o
      );
    }
  }, e = F(e), [o, n, r, l];
}
class Iu extends re {
  constructor(e) {
    super(), ne(this, e, Ou, Au, J, {});
  }
}
function Pu(t) {
  let e, i;
  return e = new Iu({
    props: {
      class: P(
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
      2 && (l.class = P(
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
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Lu(t) {
  let e;
  return {
    c() {
      e = M("div"), h(
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
function Mu(t) {
  let e, i, n, r;
  const l = [Lu, Pu], o = [];
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
      e = s(u), e === f ? o[e].p(u, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      C(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function Nu(t, e, i) {
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
    super(), ne(this, e, Nu, Mu, J, { name: 0, className: 1, uikit: 2 });
  }
}
function zu(t) {
  let e, i, n, r;
  return {
    c() {
      e = M("span"), i = be(
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
      l && (E(e), E(n), E(r));
    }
  };
}
function Ru(t) {
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
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Du(t) {
  let e, i;
  return e = new ws({
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
        icon: [Ru],
        default: [zu]
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
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Bu(t, e, i) {
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
class Fu extends re {
  constructor(e) {
    super(), ne(this, e, Bu, Du, J, { mode: 1, info: 2, open: 0, duration: 5 });
  }
}
const Rn = "uikit_msg_panel";
let fi = 0;
const Ud = (t, e, i) => {
  fi += 1;
  let n = window.document.getElementById(Rn);
  n || (n = window.document.createElement("div"), n.id = Rn, n.style.position = "absolute", n.style.top = "5px", n.style.right = "5px", n.style.display = "flex", n.style.flexDirection = "column", n.style.rowGap = "10px", n.style.zIndex = "100", document.body.appendChild(n)), t || (t = window.document.createElement("div"), n.appendChild(t));
  const r = new Fu({
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
function ju(t) {
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
      e = M("div"), r && r.c(), h(
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
      C(r, l), i = !1;
    },
    d(l) {
      l && E(e), r && r.d(l);
    }
  };
}
function Wu(t, e, i) {
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
  let b;
  return t.$$set = (_) => {
    i(13, e = L(L({}, e), F(_))), "color" in _ && i(1, o = _.color), "rounded" in _ && i(2, s = _.rounded), "size" in _ && i(3, u = _.size), "border" in _ && i(4, a = _.border), "placement" in _ && i(5, f = _.placement), "offset" in _ && i(6, c = _.offset), "$$scope" in _ && i(7, r = _.$$scope);
  }, t.$$.update = () => {
    i(0, b = P("uikit-flex-shrink-0", s ? "uikit-rounded" : "uikit-rounded-full", a && "uikit-border-2 uikit-border-white dark:uikit-border-gray-800", k[u], d[o], l.default && "uikit-inline-flex uikit-items-center uikit-justify-center", f && "uikit-absolute " + g[f], f && c && m[f], e.class));
  }, e = F(e), [b, o, s, u, a, f, c, r, n];
}
class qi extends re {
  constructor(e) {
    super(), ne(this, e, Wu, ju, J, {
      color: 1,
      rounded: 2,
      size: 3,
      border: 4,
      placement: 5,
      offset: 6
    });
  }
}
function Uu(t) {
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
    r = L(r, n[l]);
  return {
    c() {
      e = M("img"), ue(e, r);
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
function Gu(t) {
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
      C(r, l), n = !1;
    },
    d(l) {
      l && E(i), r && r.d(l);
    }
  };
}
function Hu(t) {
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
  ), r = n || qu(t);
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
      C(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function Vu(t) {
  let e, i, n;
  return {
    c() {
      e = M("img"), h(
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
function qu(t) {
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
    r = L(r, n[l]);
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
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function ci(t) {
  let e, i, n, r, l, o;
  const s = [Vu, Hu], u = [];
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
    d = L(d, c[k]);
  return {
    c() {
      e = M(
        /*href*/
        t[2] ? "a" : "div"
      ), n.c(), r = H(), f && f.c(), ft(
        /*href*/
        t[2] ? "a" : "div"
      )(e, d);
    },
    m(k, g) {
      A(k, e, g), u[i].m(e, null), R(e, r), f && f.m(e, null), o = !0;
    },
    p(k, g) {
      let m = i;
      i = a(k), i === m ? u[i].p(k, g) : (oe(), C(u[m], 1, 1, () => {
        u[m] = null;
      }), se(), n = u[i], n ? n.p(k, g) : (n = u[i] = s[i](k), n.c()), v(n, 1), n.m(e, r)), /*dot*/
      k[0] ? f ? (f.p(k, g), g & /*dot*/
      1 && v(f, 1)) : (f = Dn(k), f.c(), v(f, 1), f.m(e, null)) : f && (oe(), C(f, 1, 1, () => {
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
      C(n), C(f), o = !1;
    },
    d(k) {
      k && E(e), u[i].d(), f && f.d();
    }
  };
}
function Xu(t) {
  let e, i, n, r;
  const l = [Gu, Uu], o = [];
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
      e = s(u), e === f ? o[e].p(u, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      C(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function Qu(t, e, i) {
  const n = ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Xe(l);
  let { src: u = "" } = e, { href: a = void 0 } = e, { rounded: f = !1 } = e, { border: c = !1 } = e, { stacked: d = !1 } = e, { dot: k = void 0 } = e, { alt: g = "" } = e, { size: m = "md" } = e;
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
    i(14, e = L(L({}, e), F(w))), i(7, r = ie(e, n)), "src" in w && i(1, u = w.src), "href" in w && i(2, a = w.href), "rounded" in w && i(3, f = w.rounded), "border" in w && i(8, c = w.border), "stacked" in w && i(9, d = w.stacked), "dot" in w && i(0, k = w.dot), "alt" in w && i(4, g = w.alt), "size" in w && i(10, m = w.size), "$$scope" in w && i(11, o = w.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*dot*/
    1 && i(0, k = k && {
      placement: "top-right",
      color: "gray",
      size: "lg",
      ...k
    }), i(5, _ = P(f ? "uikit-rounded-full" : "uikit-rounded", c && "uikit-p-1 uikit-ring-2 uikit-ring-gray-300 dark:uikit-ring-gray-500", b[m], d && "uikit-border-2 -uikit-ms-4 uikit-border-white dark:uikit-border-gray-800", "uikit-bg-gray-100 dark:uikit-bg-gray-600 uikit-text-gray-600 dark:uikit-text-gray-300", e.class));
  }, e = F(e), [
    k,
    u,
    a,
    f,
    g,
    _,
    s,
    r,
    c,
    d,
    m,
    o,
    l
  ];
}
class dl extends re {
  constructor(e) {
    super(), ne(this, e, Qu, Xu, J, {
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
function Ku(t) {
  let e, i;
  const n = [
    /*$$props*/
    t[2]
  ];
  let r = {};
  for (let l = 0; l < n.length; l += 1)
    r = L(r, n[l]);
  return e = new dl({ props: r }), {
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
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function Yu(t) {
  let e, i;
  const n = [
    /*$$props*/
    t[2]
  ];
  let r = {
    $$slots: { default: [Ju] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = L(r, n[l]);
  return e = new dl({ props: r }), {
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
      C(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function Ju(t) {
  let e;
  return {
    c() {
      e = M("div");
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
function Zu(t) {
  let e, i, n, r;
  const l = [Yu, Ku], o = [];
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
      e = s(u), e === f ? o[e].p(u, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      C(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function xu(t, e, i) {
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
    i(2, e = L(L({}, e), F(s))), "slotdefault" in s && i(0, n = s.slotdefault);
  }, t.$$.update = () => {
    t.$$.dirty & /*slotdefault, domdefault*/
    3 && n && r && l();
  }, e = F(e), [n, r, e, o];
}
class $u extends re {
  constructor(e) {
    super(), ne(this, e, xu, Zu, J, { slotdefault: 0 });
  }
}
const Gd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new $u({
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
function ea(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d, k, g, m, b, _, w, y, p;
  const S = (
    /*#slots*/
    t[9].default
  ), O = X(
    S,
    t,
    /*$$scope*/
    t[8],
    null
  );
  return {
    c() {
      e = M("div"), i = M("div"), r = H(), l = M("div"), s = H(), u = M("div"), f = H(), c = M("div"), k = H(), g = M("div"), b = H(), _ = M("div"), O && O.c(), h(i, "class", n = P(
        /*top*/
        t[2],
        /*$$props*/
        t[7].classTop
      )), h(l, "class", o = P(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[7].classLeftTop
      )), h(u, "class", a = P(
        /*leftMid*/
        t[4],
        /*$$props*/
        t[7].classLeftMid
      )), h(c, "class", d = P(
        /*leftBot*/
        t[5],
        /*$$props*/
        t[7].classLeftBot
      )), h(g, "class", m = P(
        /*right*/
        t[6],
        /*$$props*/
        t[7].classRight
      )), h(_, "class", w = P(
        /*slot*/
        t[1],
        /*$$props*/
        t[7].classSlot
      )), h(e, "class", y = P(
        /*div*/
        t[0],
        /*$$props*/
        t[7].class
      ));
    },
    m(T, j) {
      A(T, e, j), R(e, i), R(e, r), R(e, l), R(e, s), R(e, u), R(e, f), R(e, c), R(e, k), R(e, g), R(e, b), R(e, _), O && O.m(_, null), p = !0;
    },
    p(T, [j]) {
      (!p || j & /*top, $$props*/
      132 && n !== (n = P(
        /*top*/
        T[2],
        /*$$props*/
        T[7].classTop
      ))) && h(i, "class", n), (!p || j & /*leftTop, $$props*/
      136 && o !== (o = P(
        /*leftTop*/
        T[3],
        /*$$props*/
        T[7].classLeftTop
      ))) && h(l, "class", o), (!p || j & /*leftMid, $$props*/
      144 && a !== (a = P(
        /*leftMid*/
        T[4],
        /*$$props*/
        T[7].classLeftMid
      ))) && h(u, "class", a), (!p || j & /*leftBot, $$props*/
      160 && d !== (d = P(
        /*leftBot*/
        T[5],
        /*$$props*/
        T[7].classLeftBot
      ))) && h(c, "class", d), (!p || j & /*right, $$props*/
      192 && m !== (m = P(
        /*right*/
        T[6],
        /*$$props*/
        T[7].classRight
      ))) && h(g, "class", m), O && O.p && (!p || j & /*$$scope*/
      256) && K(
        O,
        S,
        T,
        /*$$scope*/
        T[8],
        p ? Q(
          S,
          /*$$scope*/
          T[8],
          j,
          null
        ) : Y(
          /*$$scope*/
          T[8]
        ),
        null
      ), (!p || j & /*slot, $$props*/
      130 && w !== (w = P(
        /*slot*/
        T[1],
        /*$$props*/
        T[7].classSlot
      ))) && h(_, "class", w), (!p || j & /*div, $$props*/
      129 && y !== (y = P(
        /*div*/
        T[0],
        /*$$props*/
        T[7].class
      ))) && h(e, "class", y);
    },
    i(T) {
      p || (v(O, T), p = !0);
    },
    o(T) {
      C(O, T), p = !1;
    },
    d(T) {
      T && E(e), O && O.d(T);
    }
  };
}
function ta(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-xl uikit-h-[600px] uikit-w-[300px] uikit-shadow-xl" } = e, { slot: o = "uikit-rounded-xl uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: s = "uikit-w-[148px] uikit-h-[18px] uikit-bg-gray-800 uikit-top-0 uikit-rounded-b-[1rem] uikit-left-1/2 -uikit-translate-x-1/2 uikit-absolute" } = e, { leftTop: u = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftMid: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: f = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: c = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (d) => {
    i(7, e = L(L({}, e), F(d))), "div" in d && i(0, l = d.div), "slot" in d && i(1, o = d.slot), "top" in d && i(2, s = d.top), "leftTop" in d && i(3, u = d.leftTop), "leftMid" in d && i(4, a = d.leftMid), "leftBot" in d && i(5, f = d.leftBot), "right" in d && i(6, c = d.right), "$$scope" in d && i(8, r = d.$$scope);
  }, e = F(e), [l, o, s, u, a, f, c, e, r, n];
}
class ia extends re {
  constructor(e) {
    super(), ne(this, e, ta, ea, J, {
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
function na(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d, k, g, m, b, _;
  const w = (
    /*#slots*/
    t[8].default
  ), y = X(
    w,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = M("div"), i = M("div"), r = H(), l = M("div"), s = H(), u = M("div"), f = H(), c = M("div"), k = H(), g = M("div"), y && y.c(), h(i, "class", n = P(
        /*top*/
        t[2],
        /*$$props*/
        t[6].classTop
      )), h(l, "class", o = P(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[6].classLeftTop
      )), h(u, "class", a = P(
        /*leftBot*/
        t[4],
        /*$$props*/
        t[6].classLeftBot
      )), h(c, "class", d = P(
        /*right*/
        t[5],
        /*$$props*/
        t[6].classRight
      )), h(g, "class", m = P(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(e, "class", b = P(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      ));
    },
    m(p, S) {
      A(p, e, S), R(e, i), R(e, r), R(e, l), R(e, s), R(e, u), R(e, f), R(e, c), R(e, k), R(e, g), y && y.m(g, null), _ = !0;
    },
    p(p, [S]) {
      (!_ || S & /*top, $$props*/
      68 && n !== (n = P(
        /*top*/
        p[2],
        /*$$props*/
        p[6].classTop
      ))) && h(i, "class", n), (!_ || S & /*leftTop, $$props*/
      72 && o !== (o = P(
        /*leftTop*/
        p[3],
        /*$$props*/
        p[6].classLeftTop
      ))) && h(l, "class", o), (!_ || S & /*leftBot, $$props*/
      80 && a !== (a = P(
        /*leftBot*/
        p[4],
        /*$$props*/
        p[6].classLeftBot
      ))) && h(u, "class", a), (!_ || S & /*right, $$props*/
      96 && d !== (d = P(
        /*right*/
        p[5],
        /*$$props*/
        p[6].classRight
      ))) && h(c, "class", d), y && y.p && (!_ || S & /*$$scope*/
      128) && K(
        y,
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
        ) : Y(
          /*$$scope*/
          p[7]
        ),
        null
      ), (!_ || S & /*slot, $$props*/
      66 && m !== (m = P(
        /*slot*/
        p[1],
        /*$$props*/
        p[6].classSlot
      ))) && h(g, "class", m), (!_ || S & /*div, $$props*/
      65 && b !== (b = P(
        /*div*/
        p[0],
        /*$$props*/
        p[6].class
      ))) && h(e, "class", b);
    },
    i(p) {
      _ || (v(y, p), _ = !0);
    },
    o(p) {
      C(y, p), _ = !1;
    },
    d(p) {
      p && E(e), y && y.d(p);
    }
  };
}
function ra(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[600px] uikit-w-[300px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: s = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftTop: u = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -luikit-eft-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = L(L({}, e), F(c))), "div" in c && i(0, l = c.div), "slot" in c && i(1, o = c.slot), "top" in c && i(2, s = c.top), "leftTop" in c && i(3, u = c.leftTop), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, r = c.$$scope);
  }, e = F(e), [l, o, s, u, a, f, e, r, n];
}
class la extends re {
  constructor(e) {
    super(), ne(this, e, ra, na, J, {
      div: 0,
      slot: 1,
      top: 2,
      leftTop: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function oa(t) {
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
      e = M("div"), i = M("div"), k && k.c(), l = H(), o = M("div"), u = H(), a = M("div"), h(i, "class", n = P(
        /*inner*/
        t[0],
        /*$$props*/
        t[4].classInner
      )), h(e, "class", r = P(
        /*div*/
        t[3],
        /*$$props*/
        t[4].class
      )), h(o, "class", s = P(
        /*bot*/
        t[1],
        /*$$props*/
        t[4].classBot
      )), h(a, "class", f = P(
        /*botUnder*/
        t[2],
        /*$$props*/
        t[4].classBotUnder
      ));
    },
    m(g, m) {
      A(g, e, m), R(e, i), k && k.m(i, null), A(g, l, m), A(g, o, m), A(g, u, m), A(g, a, m), c = !0;
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
      17 && n !== (n = P(
        /*inner*/
        g[0],
        /*$$props*/
        g[4].classInner
      ))) && h(i, "class", n), (!c || m & /*div, $$props*/
      24 && r !== (r = P(
        /*div*/
        g[3],
        /*$$props*/
        g[4].class
      ))) && h(e, "class", r), (!c || m & /*bot, $$props*/
      18 && s !== (s = P(
        /*bot*/
        g[1],
        /*$$props*/
        g[4].classBot
      ))) && h(o, "class", s), (!c || m & /*botUnder, $$props*/
      20 && f !== (f = P(
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
      C(k, g), c = !1;
    },
    d(g) {
      g && (E(e), E(l), E(o), E(u), E(a)), k && k.d(g);
    }
  };
}
function sa(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { inner: l = "uikit-rounded-xl uikit-overflow-hidden uikit-h-[140px] md:uikit-h-[262px]" } = e, { bot: o = "uikit-relative uikit-mx-auto uikit-bg-gray-900 dark:uikit-bg-gray-700 uikit-rounded-b-xl uikit-h-[24px] uikit-max-w-[301px] md:uikit-h-[42px] md:uikit-max-w-[512px]" } = e, { botUnder: s = "uikit-relative uikit-mx-auto uikit-bg-gray-800 uikit-rounded-b-xl uikit-h-[55px] uikit-max-w-[83px] md:uikit-h-[95px] md:uikit-max-w-[142px]" } = e, { div: u = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[16px] uikit-rounded-t-xl uikit-h-[172px] uikit-max-w-[301px] md:uikit-h-[294px] md:uikit-max-w-[512px]" } = e;
  return t.$$set = (a) => {
    i(4, e = L(L({}, e), F(a))), "inner" in a && i(0, l = a.inner), "bot" in a && i(1, o = a.bot), "botUnder" in a && i(2, s = a.botUnder), "div" in a && i(3, u = a.div), "$$scope" in a && i(5, r = a.$$scope);
  }, e = F(e), [l, o, s, u, e, r, n];
}
class ua extends re {
  constructor(e) {
    super(), ne(this, e, sa, oa, J, { inner: 0, bot: 1, botUnder: 2, div: 3 });
  }
}
function aa(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d, k, g, m, b, _;
  const w = (
    /*#slots*/
    t[8].default
  ), y = X(
    w,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = M("div"), i = M("div"), r = H(), l = M("div"), s = H(), u = M("div"), f = H(), c = M("div"), k = H(), g = M("div"), y && y.c(), h(i, "class", n = P(
        /*top*/
        t[2],
        /*$$props*/
        t[6].classTop
      )), h(l, "class", o = P(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[6].classLeftTop
      )), h(u, "class", a = P(
        /*leftBot*/
        t[4],
        /*$$props*/
        t[6].classLeftBot
      )), h(c, "class", d = P(
        /*right*/
        t[5],
        /*$$props*/
        t[6].classRight
      )), h(g, "class", m = P(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(e, "class", b = P(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      ));
    },
    m(p, S) {
      A(p, e, S), R(e, i), R(e, r), R(e, l), R(e, s), R(e, u), R(e, f), R(e, c), R(e, k), R(e, g), y && y.m(g, null), _ = !0;
    },
    p(p, [S]) {
      (!_ || S & /*top, $$props*/
      68 && n !== (n = P(
        /*top*/
        p[2],
        /*$$props*/
        p[6].classTop
      ))) && h(i, "class", n), (!_ || S & /*leftTop, $$props*/
      72 && o !== (o = P(
        /*leftTop*/
        p[3],
        /*$$props*/
        p[6].classLeftTop
      ))) && h(l, "class", o), (!_ || S & /*leftBot, $$props*/
      80 && a !== (a = P(
        /*leftBot*/
        p[4],
        /*$$props*/
        p[6].classLeftBot
      ))) && h(u, "class", a), (!_ || S & /*right, $$props*/
      96 && d !== (d = P(
        /*right*/
        p[5],
        /*$$props*/
        p[6].classRight
      ))) && h(c, "class", d), y && y.p && (!_ || S & /*$$scope*/
      128) && K(
        y,
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
        ) : Y(
          /*$$scope*/
          p[7]
        ),
        null
      ), (!_ || S & /*slot, $$props*/
      66 && m !== (m = P(
        /*slot*/
        p[1],
        /*$$props*/
        p[6].classSlot
      ))) && h(g, "class", m), (!_ || S & /*div, $$props*/
      65 && b !== (b = P(
        /*div*/
        p[0],
        /*$$props*/
        p[6].class
      ))) && h(e, "class", b);
    },
    i(p) {
      _ || (v(y, p), _ = !0);
    },
    o(p) {
      C(y, p), _ = !1;
    },
    d(p) {
      p && E(e), y && y.d(p);
    }
  };
}
function fa(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[600px] uikit-w-[300px] uikit-shadow-xl" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: s = "uikit-w-[148px] uikit-h-[18px] uikit-bg-gray-800 uikit-top-0 uikit-rounded-b-[1rem] uikit-left-1/2 -uikit-translate-x-1/2 uikit-absolute" } = e, { leftTop: u = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = L(L({}, e), F(c))), "div" in c && i(0, l = c.div), "slot" in c && i(1, o = c.slot), "top" in c && i(2, s = c.top), "leftTop" in c && i(3, u = c.leftTop), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, r = c.$$scope);
  }, e = F(e), [l, o, s, u, a, f, e, r, n];
}
class ca extends re {
  constructor(e) {
    super(), ne(this, e, fa, aa, J, {
      div: 0,
      slot: 1,
      top: 2,
      leftTop: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function da(t) {
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
      e = M("div"), i = M("div"), d && d.c(), l = H(), o = M("div"), s = M("div"), h(i, "class", n = P(
        /*inner*/
        t[1],
        /*$$props*/
        t[4].classInner
      )), h(e, "class", r = P(
        /*div*/
        t[0],
        /*$$props*/
        t[4].class
      )), h(s, "class", u = P(
        /*botCen*/
        t[3],
        /*$$props*/
        t[4].classBotCen
      )), h(o, "class", a = P(
        /*bot*/
        t[2],
        /*$$props*/
        t[4].classBot
      ));
    },
    m(k, g) {
      A(k, e, g), R(e, i), d && d.m(i, null), A(k, l, g), A(k, o, g), R(o, s), f = !0;
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
      18 && n !== (n = P(
        /*inner*/
        k[1],
        /*$$props*/
        k[4].classInner
      ))) && h(i, "class", n), (!f || g & /*div, $$props*/
      17 && r !== (r = P(
        /*div*/
        k[0],
        /*$$props*/
        k[4].class
      ))) && h(e, "class", r), (!f || g & /*botCen, $$props*/
      24 && u !== (u = P(
        /*botCen*/
        k[3],
        /*$$props*/
        k[4].classBotCen
      ))) && h(s, "class", u), (!f || g & /*bot, $$props*/
      20 && a !== (a = P(
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
      C(d, k), f = !1;
    },
    d(k) {
      k && (E(e), E(l), E(o)), d && d.d(k);
    }
  };
}
function ka(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[8px] uikit-rounded-t-xl uikit-h-[172px] uikit-max-w-[301px] md:uikit-h-[294px] md:uikit-max-w-[512px]" } = e, { inner: o = "uikit-rounded-lg uikit-overflow-hidden uikit-h-[156px] md:uikit-h-[278px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { bot: s = "uikit-relative uikit-mx-auto uikit-bg-gray-900 dark:uikit-bg-gray-700 uikit-rounded-b-xl uikit-rounded-t-sm uikit-h-[17px] uikit-max-w-[351px] md:uikit-h-[21px] md:uikit-max-w-[597px]" } = e, { botCen: u = "uikit-absolute uikit-left-1/2 uikit-top-0 -uikit-translate-x-1/2 uikit-rounded-b-xl uikit-w-[56px] uikit-h-[5px] md:uikit-w-[96px] md:uikit-h-[8px] uikit-bg-gray-800" } = e;
  return t.$$set = (a) => {
    i(4, e = L(L({}, e), F(a))), "div" in a && i(0, l = a.div), "inner" in a && i(1, o = a.inner), "bot" in a && i(2, s = a.bot), "botCen" in a && i(3, u = a.botCen), "$$scope" in a && i(5, r = a.$$scope);
  }, e = F(e), [l, o, s, u, e, r, n];
}
class ga extends re {
  constructor(e) {
    super(), ne(this, e, ka, da, J, { div: 0, inner: 1, bot: 2, botCen: 3 });
  }
}
function ma(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d, k, g, m, b, _;
  const w = (
    /*#slots*/
    t[8].default
  ), y = X(
    w,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = M("div"), n = H(), r = M("div"), l = M("div"), s = H(), u = M("div"), f = H(), c = M("div"), y && y.c(), g = H(), m = M("div"), h(e, "class", i = P(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      )), h(l, "class", o = P(
        /*rightTop*/
        t[2],
        /*$$props*/
        t[6].classRightTop
      )), h(u, "class", a = P(
        /*rightBot*/
        t[3],
        /*$$props*/
        t[6].classRightBot
      )), h(c, "class", d = P(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(r, "class", k = P(
        /*top*/
        t[4],
        /*$$props*/
        t[6].classTop
      )), h(m, "class", b = P(
        /*bot*/
        t[5],
        /*$$props*/
        t[6].classBot
      ));
    },
    m(p, S) {
      A(p, e, S), A(p, n, S), A(p, r, S), R(r, l), R(r, s), R(r, u), R(r, f), R(r, c), y && y.m(c, null), A(p, g, S), A(p, m, S), _ = !0;
    },
    p(p, [S]) {
      (!_ || S & /*div, $$props*/
      65 && i !== (i = P(
        /*div*/
        p[0],
        /*$$props*/
        p[6].class
      ))) && h(e, "class", i), (!_ || S & /*rightTop, $$props*/
      68 && o !== (o = P(
        /*rightTop*/
        p[2],
        /*$$props*/
        p[6].classRightTop
      ))) && h(l, "class", o), (!_ || S & /*rightBot, $$props*/
      72 && a !== (a = P(
        /*rightBot*/
        p[3],
        /*$$props*/
        p[6].classRightBot
      ))) && h(u, "class", a), y && y.p && (!_ || S & /*$$scope*/
      128) && K(
        y,
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
        ) : Y(
          /*$$scope*/
          p[7]
        ),
        null
      ), (!_ || S & /*slot, $$props*/
      66 && d !== (d = P(
        /*slot*/
        p[1],
        /*$$props*/
        p[6].classSlot
      ))) && h(c, "class", d), (!_ || S & /*top, $$props*/
      80 && k !== (k = P(
        /*top*/
        p[4],
        /*$$props*/
        p[6].classTop
      ))) && h(r, "class", k), (!_ || S & /*bot, $$props*/
      96 && b !== (b = P(
        /*bot*/
        p[5],
        /*$$props*/
        p[6].classBot
      ))) && h(m, "class", b);
    },
    i(p) {
      _ || (v(y, p), _ = !0);
    },
    o(p) {
      C(y, p), _ = !1;
    },
    d(p) {
      p && (E(e), E(n), E(r), E(g), E(m)), y && y.d(p);
    }
  };
}
function ha(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-bg-gray-800 dark:uikit-bg-gray-700 uikit-rounded-t-[2.5rem] uikit-h-[63px] uikit-max-w-[133px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-h-[193px] uikit-w-[188px]" } = e, { rightTop: s = "uikit-h-[41px] uikit-w-[6px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[16px] uikit-top-[40px] uikit-rounded-r-lg" } = e, { rightBot: u = "uikit-h-[32px] uikit-w-[6px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[16px] uikit-top-[88px] uikit-rounded-r-lg" } = e, { top: a = "uikit-relative uikit-mx-auto uikit-border-gray-900 dark:uikit-bg-gray-800 dark:uikit-border-gray-800 uikit-border-[10px] uikit-rounded-[2.5rem] uikit-h-[213px] uikit-w-[208px]" } = e, { bot: f = "uikit-relative uikit-mx-auto uikit-bg-gray-800 dark:uikit-bg-gray-700 uikit-rounded-b-[2.5rem] uikit-h-[63px] uikit-max-w-[133px]" } = e;
  return t.$$set = (c) => {
    i(6, e = L(L({}, e), F(c))), "div" in c && i(0, l = c.div), "slot" in c && i(1, o = c.slot), "rightTop" in c && i(2, s = c.rightTop), "rightBot" in c && i(3, u = c.rightBot), "top" in c && i(4, a = c.top), "bot" in c && i(5, f = c.bot), "$$scope" in c && i(7, r = c.$$scope);
  }, e = F(e), [l, o, s, u, a, f, e, r, n];
}
class ba extends re {
  constructor(e) {
    super(), ne(this, e, ha, ma, J, {
      div: 0,
      slot: 1,
      rightTop: 2,
      rightBot: 3,
      top: 4,
      bot: 5
    });
  }
}
function _a(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d, k, g, m, b, _;
  const w = (
    /*#slots*/
    t[8].default
  ), y = X(
    w,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = M("div"), i = M("div"), r = H(), l = M("div"), s = H(), u = M("div"), f = H(), c = M("div"), k = H(), g = M("div"), y && y.c(), h(i, "class", n = P(
        /*leftTop*/
        t[2],
        /*$$props*/
        t[6].classLeftTop
      )), h(l, "class", o = P(
        /*leftMid*/
        t[3],
        /*$$props*/
        t[6].classLeftMid
      )), h(u, "class", a = P(
        /*leftBot*/
        t[4],
        /*$$props*/
        t[6].classLeftBot
      )), h(c, "class", d = P(
        /*right*/
        t[5],
        /*$$props*/
        t[6].classRight
      )), h(g, "class", m = P(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(e, "class", b = P(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      ));
    },
    m(p, S) {
      A(p, e, S), R(e, i), R(e, r), R(e, l), R(e, s), R(e, u), R(e, f), R(e, c), R(e, k), R(e, g), y && y.m(g, null), _ = !0;
    },
    p(p, [S]) {
      (!_ || S & /*leftTop, $$props*/
      68 && n !== (n = P(
        /*leftTop*/
        p[2],
        /*$$props*/
        p[6].classLeftTop
      ))) && h(i, "class", n), (!_ || S & /*leftMid, $$props*/
      72 && o !== (o = P(
        /*leftMid*/
        p[3],
        /*$$props*/
        p[6].classLeftMid
      ))) && h(l, "class", o), (!_ || S & /*leftBot, $$props*/
      80 && a !== (a = P(
        /*leftBot*/
        p[4],
        /*$$props*/
        p[6].classLeftBot
      ))) && h(u, "class", a), (!_ || S & /*right, $$props*/
      96 && d !== (d = P(
        /*right*/
        p[5],
        /*$$props*/
        p[6].classRight
      ))) && h(c, "class", d), y && y.p && (!_ || S & /*$$scope*/
      128) && K(
        y,
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
        ) : Y(
          /*$$scope*/
          p[7]
        ),
        null
      ), (!_ || S & /*slot, $$props*/
      66 && m !== (m = P(
        /*slot*/
        p[1],
        /*$$props*/
        p[6].classSlot
      ))) && h(g, "class", m), (!_ || S & /*div, $$props*/
      65 && b !== (b = P(
        /*div*/
        p[0],
        /*$$props*/
        p[6].class
      ))) && h(e, "class", b);
    },
    i(p) {
      _ || (v(y, p), _ = !0);
    },
    o(p) {
      C(y, p), _ = !1;
    },
    d(p) {
      p && E(e), y && y.d(p);
    }
  };
}
function pa(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { div: l = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[454px] uikit-max-w-[341px] md:uikit-h-[682px] md:uikit-max-w-[512px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-h-[426px] md:uikit-h-[654px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { leftTop: s = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftMid: u = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -ruikit-ight-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = L(L({}, e), F(c))), "div" in c && i(0, l = c.div), "slot" in c && i(1, o = c.slot), "leftTop" in c && i(2, s = c.leftTop), "leftMid" in c && i(3, u = c.leftMid), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, r = c.$$scope);
  }, e = F(e), [l, o, s, u, a, f, e, r, n];
}
class ya extends re {
  constructor(e) {
    super(), ne(this, e, pa, _a, J, {
      div: 0,
      slot: 1,
      leftTop: 2,
      leftMid: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function va(t) {
  let e;
  return {
    c() {
      e = M("div"), e.textContent = "Unknow device", h(e, "class", "uikit-border uikit-p-3 uikit-text-xl");
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
function wa(t) {
  let e, i, n;
  var r = (
    /*component*/
    t[0]
  );
  function l(o) {
    return {
      props: {
        $$slots: { default: [Ca] },
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
          C(a.$$.fragment, 1, 0, () => {
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
      e && C(e.$$.fragment, o), n = !1;
    },
    d(o) {
      o && E(i), e && x(e, o);
    }
  };
}
function Ca(t) {
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
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Sa(t) {
  let e, i, n, r;
  const l = [wa, va], o = [];
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
      e = s(u), e === f ? o[e].p(u, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      C(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function Ta(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { device: l = "default" } = e;
  const o = {
    android: ia,
    ios: ca,
    tablet: ya,
    default: la,
    smartwatch: ba,
    laptop: ga,
    desktop: ua
  };
  let s;
  return t.$$set = (u) => {
    "device" in u && i(1, l = u.device), "$$scope" in u && i(3, r = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*device*/
    2 && i(0, s = o[l]);
  }, [s, l, n, r];
}
class Ea extends re {
  constructor(e) {
    super(), ne(this, e, Ta, Sa, J, { device: 1 });
  }
}
const Hd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Ea({
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
}, Aa = (t, e) => {
  const i = (n) => {
    n != null && n.target && t && !t.contains(n.target) && !n.defaultPrevented && e();
  };
  return document.addEventListener("click", i, !0), {
    destroy() {
      document.removeEventListener("click", i, !0);
    }
  };
}, Oa = (t) => ({ hidden: t & /*hidden*/
1 }), Bn = (t) => ({ hidden: (
  /*hidden*/
  t[0]
) });
function Fn(t) {
  let e, i, n, r, l, o, s;
  function u(m, b) {
    if (
      /*backdrop*/
      m[4] && /*activateClickOutside*/
      m[1]
    )
      return Pa;
    if (
      /*backdrop*/
      m[4] && !/*activateClickOutside*/
      m[1]
    )
      return Ia;
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
      class: n = P(
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
    g = L(g, k[m]);
  return {
    c() {
      f && f.c(), e = H(), i = M("div"), d && d.c(), ue(i, g);
    },
    m(m, b) {
      f && f.m(m, b), A(m, e, b), A(m, i, b), d && d.m(i, null), l = !0, o || (s = at(
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
      t = m, a === (a = u(t)) && f ? f.p(t, b) : (f && f.d(1), f = a && a(t), f && (f.c(), f.m(e.parentNode, e))), d && d.p && (!l || b & /*$$scope, hidden*/
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
          b,
          Oa
        ) : Y(
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
        65708 && n !== (n = P(
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
      m && (E(e), E(i)), f && f.d(m), d && d.d(m), m && r && r.end(), o = !1, s();
    }
  };
}
function Ia(t) {
  let e;
  return {
    c() {
      e = M("div"), h(e, "role", "presentation"), h(
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
function Pa(t) {
  let e, i, n;
  return {
    c() {
      e = M("div"), h(e, "role", "presentation"), h(
        e,
        "class",
        /*backdropDivClass*/
        t[13]
      );
    },
    m(r, l) {
      A(r, e, l), i || (n = B(
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
function La(t) {
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
      1 && v(n, 1)) : (n = Fn(r), n.c(), v(n, 1), n.m(e.parentNode, e));
    },
    i(r) {
      i || (v(n), i = !0);
    },
    o(r) {
      C(n), i = !1;
    },
    d(r) {
      r && E(e), n && n.d(r);
    }
  };
}
function Ma(t, e, i) {
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
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e, { activateClickOutside: s = !0 } = e, { hidden: u = !0 } = e, { position: a = "uikit-fixed" } = e, { leftOffset: f = "uikit-inset-y-0 uikit-start-0" } = e, { rightOffset: c = "uikit-inset-y-0 uikit-end-0" } = e, { topOffset: d = "uikit-inset-x-0 uikit-top-0" } = e, { bottomOffset: k = "uikit-inset-x-0 uikit-bottom-0" } = e, { width: g = "uikit-w-80" } = e, { backdrop: m = !0 } = e, { bgColor: b = "uikit-bg-gray-900" } = e, { bgOpacity: _ = "uikit-bg-opacity-75" } = e, { placement: w = "left" } = e, { id: y = "drawer-example" } = e, { divClass: p = "uikit-overflow-y-auto uikit-z-50 uikit-p-4 uikit-bg-white dark:uikit-bg-gray-800" } = e, { transitionParams: S = {} } = e, { transitionType: O = "fly" } = e;
  function T(N, D) {
    switch (O) {
      case "slide":
        return Bi(N, D);
      case "blur":
        return Di(N, D);
      case "fade":
        return Jt(N, D);
      default:
        return yt(N, D);
    }
  }
  const j = {
    left: f,
    right: c,
    top: d,
    bottom: k
  }, q = () => {
    i(0, u = !u);
  }, ee = () => s && !u && q();
  let z = P("uikit-fixed uikit-top-0 uikit-start-0 uikit-z-50 uikit-w-full uikit-h-full", m && b, m && _);
  function W(N, D) {
    return s ? Aa(N, D) : void 0;
  }
  const ge = () => !u && q();
  return t.$$set = (N) => {
    i(16, e = L(L({}, e), F(N))), i(15, r = ie(e, n)), "activateClickOutside" in N && i(1, s = N.activateClickOutside), "hidden" in N && i(0, u = N.hidden), "position" in N && i(2, a = N.position), "leftOffset" in N && i(17, f = N.leftOffset), "rightOffset" in N && i(18, c = N.rightOffset), "topOffset" in N && i(19, d = N.topOffset), "bottomOffset" in N && i(20, k = N.bottomOffset), "width" in N && i(3, g = N.width), "backdrop" in N && i(4, m = N.backdrop), "bgColor" in N && i(21, b = N.bgColor), "bgOpacity" in N && i(22, _ = N.bgOpacity), "placement" in N && i(5, w = N.placement), "id" in N && i(6, y = N.id), "divClass" in N && i(7, p = N.divClass), "transitionParams" in N && i(8, S = N.transitionParams), "transitionType" in N && i(23, O = N.transitionType), "$$scope" in N && i(24, o = N.$$scope);
  }, e = F(e), [
    u,
    s,
    a,
    g,
    m,
    w,
    y,
    p,
    S,
    T,
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
    O,
    o,
    l,
    ge
  ];
}
class Na extends re {
  constructor(e) {
    super(), ne(this, e, Ma, La, J, {
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
function za(t) {
  let e;
  return {
    c() {
      e = M("div");
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
function Ra(t) {
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
    $$slots: { default: [za] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < r.length; s += 1)
    o = L(o, r[s]);
  return (
    /*hidden*/
    t[1] !== void 0 && (o.hidden = /*hidden*/
    t[1]), e = new Na({ props: o }), Ee.push(() => Yt(e, "hidden", l)), {
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
        C(e.$$.fragment, s), n = !1;
      },
      d(s) {
        x(e, s);
      }
    }
  );
}
function Da(t, e, i) {
  let { slotdefault: n } = e, r = !0;
  function l() {
    i(1, r = !r);
  }
  let o = { x: -320, duration: 200, easing: Oo }, s;
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
    i(3, e = L(L({}, e), F(c))), "slotdefault" in c && i(4, n = c.slotdefault);
  }, t.$$.update = () => {
    t.$$.dirty & /*slotdefault, domdefault*/
    17 && n && s && u();
  }, e = F(e), [
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
class Ba extends re {
  constructor(e) {
    super(), ne(this, e, Da, Ra, J, { slotdefault: 4, toggle: 5 });
  }
  get toggle() {
    return this.$$.ctx[5];
  }
}
const Vd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Ba({
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
function Fa(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M15 19l-7-7 7-7"), h(e, "aria-hidden", "true"), h(e, "class", "uikit-w-5 uikit-h-5 sm:uikit-w-6 sm:uikit-h-6"), h(e, "fill", "none"), h(e, "stroke", "currentColor"), h(e, "viewBox", "0 0 24 24"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    d(n) {
      n && E(e);
    }
  };
}
function ja(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5l7 7-7 7"), h(e, "aria-hidden", "true"), h(e, "class", "uikit-w-5 uikit-h-5 sm:uikit-w-6 sm:uikit-h-6"), h(e, "fill", "none"), h(e, "stroke", "currentColor"), h(e, "viewBox", "0 0 24 24"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    d(n) {
      n && E(e);
    }
  };
}
function Wa(t) {
  let e, i, n, r;
  function l(u, a) {
    return (
      /*forward*/
      u[0] ? ja : Fa
    );
  }
  let o = l(t), s = o(t);
  return {
    c() {
      e = M("span"), s.c(), i = H(), n = M("span"), r = be(
        /*name*/
        t[1]
      ), h(n, "class", "uikit-sr-only"), h(e, "class", "uikit-inline-flex uikit-justify-center uikit-items-center uikit-w-8 uikit-h-8 uikit-rounded-full sm:uikit-w-10 sm:uikit-h-10 uikit-bg-white/30 dark:uikit-bg-gray-800/30 group-hover:uikit-bg-white/50 dark:group-hover:uikit-bg-gray-800/60 group-focus:uikit-ring-4 group-focus:uikit-ring-white dark:group-focus:uikit-ring-gray-800/70 group-focus:uikit-outline-none");
    },
    m(u, a) {
      A(u, e, a), s.m(e, null), R(e, i), R(e, n), R(n, r);
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
function Ua(t) {
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
  ), s = o || Wa(t);
  return {
    c() {
      e = M("button"), s && s.c(), h(e, "type", "button"), h(
        e,
        "class",
        /*buttonCls*/
        t[2]
      );
    },
    m(u, a) {
      A(u, e, a), s && s.m(e, null), i = !0, n || (r = B(
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
      C(s, u), i = !1;
    },
    d(u) {
      u && E(e), s && s.d(u), n = !1, r();
    }
  };
}
function Ga(t, e, i) {
  let { $$slots: n = {}, $$scope: r } = e, { forward: l } = e, { name: o } = e, s;
  function u(a) {
    U.call(this, t, a);
  }
  return t.$$set = (a) => {
    i(6, e = L(L({}, e), F(a))), "forward" in a && i(0, l = a.forward), "name" in a && i(1, o = a.name), "$$scope" in a && i(3, r = a.$$scope);
  }, t.$$.update = () => {
    i(2, s = P("uikit-flex uikit-absolute uikit-top-0 uikit-z-30 uikit-justify-center uikit-items-center uikit-px-4 uikit-h-full uikit-group focus:uikit-outline-none uikit-text-white dark:uikit-text-gray-300", l ? "uikit-end-0" : "uikit-start-0", e.class));
  }, e = F(e), [l, o, s, r, n, u];
}
class Ei extends re {
  constructor(e) {
    super(), ne(this, e, Ga, Ua, J, { forward: 0, name: 1 });
  }
}
const Ai = ({ lastSlideChange: t, slideDuration: e, slideDurationRatio: i = 1 }) => t && (/* @__PURE__ */ new Date()).getTime() - t.getTime() < e * i ? (console.warn("Can't change slide yet, too soon"), !1) : !0, Ha = (t) => ({}), jn = (t) => ({
  ControlButton: Ei,
  changeSlide: (
    /*changeSlide*/
    t[1]
  )
});
function Va(t) {
  let e, i, n, r;
  return e = new Ei({
    props: {
      name: "Previous",
      forward: !1,
      class: P(
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
      class: P(
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
      4 && (s.class = P(
        /*$$props*/
        l[2].class
      )), e.$set(s);
      const u = {};
      o & /*$$props*/
      4 && (u.class = P(
        /*$$props*/
        l[2].class
      )), n.$set(u);
    },
    i(l) {
      r || (v(e.$$.fragment, l), v(n.$$.fragment, l), r = !0);
    },
    o(l) {
      C(e.$$.fragment, l), C(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && E(i), x(e, l), x(n, l);
    }
  };
}
function qa(t) {
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
  ), r = n || Va(t);
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
          Ha
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
      C(r, l), e = !1;
    },
    d(l) {
      r && r.d(l);
    }
  };
}
function Xa(t, e, i) {
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
    i(2, e = L(L({}, e), F(c))), "$$scope" in c && i(3, l = c.$$scope);
  }, e = F(e), [o, u, e, l, r, a, f];
}
class Qa extends re {
  constructor(e) {
    super(), ne(this, e, Xa, qa, J, {});
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
const Ka = (t) => ({ selected: t & /*$state*/
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
function Ya(t) {
  let e, i;
  return e = new qi({
    props: {
      class: P(
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
      7 && (l.class = P(
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
  ), s = X(
    o,
    t,
    /*$$scope*/
    t[5],
    Un
  ), u = s || Ya(t);
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
      e = M("button"), u && u.c(), i = H();
    },
    m(f, c) {
      A(f, e, c), u && u.m(e, null), R(e, i), n = !0, r || (l = B(e, "click", a), r = !0);
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
          Ka
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
      C(u, f), n = !1;
    },
    d(f) {
      f && E(e), u && u.d(f), r = !1, l();
    }
  };
}
function Ja(t) {
  let e, i, n, r = ve(
    /*$state*/
    t[2].images
  ), l = [];
  for (let s = 0; s < r.length; s += 1)
    l[s] = Gn(Wn(t, r, s));
  const o = (s) => C(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      e = M("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      h(e, "class", i = P(
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
      16 && i !== (i = P(
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
        C(l[u]);
      n = !1;
    },
    d(s) {
      s && E(e), Qe(l, s);
    }
  };
}
function Za(t, e, i) {
  let n, { $$slots: r = {}, $$scope: l } = e, { activeClass: o = "uikit-opacity-100" } = e, { inactiveClass: s = "uikit-opacity-60" } = e;
  const u = Be("state");
  Qt(t, u, (f) => i(2, n = f));
  const a = (f) => Fr(u, n.index = f, n);
  return t.$$set = (f) => {
    i(4, e = L(L({}, e), F(f))), "activeClass" in f && i(0, o = f.activeClass), "inactiveClass" in f && i(1, s = f.inactiveClass), "$$scope" in f && i(5, l = f.$$scope);
  }, e = F(e), [
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
class xa extends re {
  constructor(e) {
    super(), ne(this, e, Za, Ja, J, { activeClass: 0, inactiveClass: 1 });
  }
}
function $a(t) {
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
      r[0]) ? (oe(), C(n, 1, 1, le), se(), n = Hn(r), n.c(), v(n, 1), n.m(i.parentNode, i)) : n.p(r, l);
    },
    d(r) {
      r && E(i), n.d(r);
    }
  };
}
function ef(t) {
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
      r[0]) ? (oe(), C(n, 1, 1, le), se(), n = Vn(r), n.c(), v(n, 1), n.m(i.parentNode, i)) : n.p(r, l);
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
    o = L(o, l[s]);
  return {
    c() {
      e = M("img"), ue(e, o);
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
        r && (n && n.end(1), i = Jl(
          e,
          yt,
          /*transitionSlideIn*/
          t[4]
        ), i.start());
      }), r = !0);
    },
    o(s) {
      i && i.invalidate(), s && (n = Zl(
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
    l = L(l, r[o]);
  return {
    c() {
      e = M("img"), ue(e, l);
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
function tf(t) {
  let e;
  function i(l, o) {
    return (
      /*transition*/
      l[1] ? ef : $a
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
function nf(t, e, i) {
  let n, r, l;
  const o = ["image", "transition"];
  let s = ie(e, o), u;
  const a = Be("state");
  Qt(t, a, (d) => i(7, u = d));
  let { image: f } = e, { transition: c = null } = e;
  return t.$$set = (d) => {
    i(8, e = L(L({}, e), F(d))), i(6, s = ie(e, o)), "image" in d && i(0, f = d.image), "transition" in d && i(1, c = d.transition);
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
    }), i(2, l = P("uikit-absolute uikit-block !uikit-w-full uikit-h-full uikit-object-cover", e.class));
  }, e = F(e), [
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
class kl extends re {
  constructor(e) {
    super(), ne(this, e, nf, tf, J, { image: 0, transition: 1 });
  }
}
const rf = (t) => ({ index: t[0] & /*index*/
1 }), qn = (t) => ({
  index: (
    /*index*/
    t[0]
  ),
  Controls: Qa,
  Indicators: xa
}), lf = (t) => ({ index: t[0] & /*index*/
1 }), Xn = (t) => ({ Slide: kl, index: (
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
      e = M("link"), h(e, "rel", "preload"), h(e, "href", i = /*image*/
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
function of(t) {
  let e, i;
  return e = new kl({
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
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function sf(t) {
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
  ), m = g || of(t);
  let b = [
    /*$$restProps*/
    t[12],
    {
      class: o = P(
        Zn,
        /*activeDragGesture*/
        t[6] === void 0 ? "uikit-transition-transform" : "",
        /*$$props*/
        t[13].class
      )
    }
  ], _ = {};
  for (let p = 0; p < b.length; p += 1)
    _ = L(_, b[p]);
  const w = (
    /*#slots*/
    t[18].default
  ), y = X(
    w,
    t,
    /*$$scope*/
    t[17],
    qn
  );
  return {
    c() {
      d && d.c(), e = ae(), i = H(), n = H(), r = M("div"), l = M("div"), m && m.c(), u = H(), y && y.c(), ue(l, _), h(r, "class", "uikit-relative"), h(r, "role", "button"), h(
        r,
        "aria-label",
        /*ariaLabel*/
        t[4]
      ), h(r, "tabindex", "0");
    },
    m(p, S) {
      d && d.m(document.head, null), R(document.head, e), A(p, i, S), A(p, n, S), A(p, r, S), R(r, l), m && m.m(l, null), R(r, u), y && y.m(r, null), t[19](r), a = !0, f || (c = [
        B(document, "mousemove", function() {
          me(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        B(document, "mouseup", function() {
          me(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        B(document, "touchmove", function() {
          me(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        B(document, "touchend", function() {
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
        B(
          r,
          "mousedown",
          /*onDragStart*/
          t[11],
          { passive: !1 }
        ),
        B(
          r,
          "touchstart",
          /*onDragStart*/
          t[11],
          { passive: !1 }
        ),
        B(r, "mousemove", function() {
          me(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        B(r, "mouseup", function() {
          me(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        B(r, "touchmove", function() {
          me(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        B(r, "touchend", function() {
          me(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        })
      ], f = !0);
    },
    p(p, S) {
      t = p, /*images*/
      t[1].length > 0 ? d ? d.p(t, S) : (d = Kn(t), d.c(), d.m(e.parentNode, e)) : d && (d.d(1), d = null), g ? g.p && (!a || S[0] & /*$$scope, index*/
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
          S,
          lf
        ) : Y(
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
        8256 && o !== (o = P(
          Zn,
          /*activeDragGesture*/
          t[6] === void 0 ? "uikit-transition-transform" : "",
          /*$$props*/
          t[13].class
        ))) && { class: o }
      ])), s && me(s.update) && S[0] & /*duration*/
      8 && s.update.call(
        null,
        /*duration*/
        t[3]
      ), y && y.p && (!a || S[0] & /*$$scope, index*/
      131073) && K(
        y,
        w,
        t,
        /*$$scope*/
        t[17],
        a ? Q(
          w,
          /*$$scope*/
          t[17],
          S,
          rf
        ) : Y(
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
      a || (v(m, p), v(y, p), a = !0);
    },
    o(p) {
      C(m, p), C(y, p), a = !1;
    },
    d(p) {
      p && (E(i), E(n), E(r)), d && d.d(p), E(e), m && m.d(p), y && y.d(p), t[19](null), f = !1, we(c);
    }
  };
}
const Jn = 0.25;
let Zn = "uikit-grid uikit-overflow-hidden uikit-relative uikit-rounded-lg uikit-h-56 sm:uikit-h-64 xl:uikit-h-80 2xl:uikit-h-96";
function uf(t, e, i) {
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
  const b = je(), { set: _, subscribe: w, update: y } = Tt({
    images: a,
    index: f,
    forward: !0,
    slideDuration: c,
    lastSlideChange: /* @__PURE__ */ new Date()
  }), p = {
    set: (I) => _({
      index: I.index,
      images: I.images,
      lastSlideChange: /* @__PURE__ */ new Date(),
      slideDuration: c,
      forward: S
    }),
    subscribe: w,
    update: y
  };
  let S = !0;
  He("state", p), w((I) => {
    i(0, f = I.index), S = I.forward, b("change", a[f]);
  }), Ke(() => {
    b("change", a[f]);
  });
  const O = () => {
    y((I) => Ai({
      lastSlideChange: I.lastSlideChange,
      slideDuration: c,
      slideDurationRatio: Jn
    }) ? (I.index = I.index >= a.length - 1 ? 0 : I.index + 1, I.lastSlideChange = /* @__PURE__ */ new Date(), { ...I }) : I);
  }, T = () => {
    y((I) => Ai({
      lastSlideChange: I.lastSlideChange,
      slideDuration: c,
      slideDurationRatio: Jn
    }) ? (I.index = I.index <= 0 ? a.length - 1 : I.index - 1, I.lastSlideChange = /* @__PURE__ */ new Date(), { ...I }) : I);
  }, j = (I, te) => {
    i(7, ee = I);
    let de;
    return te > 0 && (de = setInterval(O, te)), {
      update: (pe) => {
        clearInterval(de), pe > 0 && (de = setInterval(O, pe));
      },
      destroy: () => clearInterval(de)
    };
  };
  let q, ee, z = 0, W = null;
  const ge = (I) => {
    const te = I == null ? void 0 : I.clientX;
    if (te)
      return te;
    let de = I;
    if (/^touch/.test(de == null ? void 0 : de.type))
      return de.touches[0].clientX;
  }, N = (I) => {
    i(16, W = I), I.cancelable && I.preventDefault();
    const te = ge(I), de = ee.getBoundingClientRect().width;
    te === void 0 || de === void 0 || i(6, q = {
      start: te,
      position: te,
      width: de,
      timestamp: Date.now()
    });
  };
  function D(I) {
    Ee[I ? "unshift" : "push"](() => {
      ee = I, i(7, ee);
    });
  }
  return t.$$set = (I) => {
    i(13, e = L(L({}, e), F(I))), i(12, o = ie(e, l)), "images" in I && i(1, a = I.images), "index" in I && i(0, f = I.index), "slideDuration" in I && i(14, c = I.slideDuration), "transition" in I && i(2, d = I.transition), "duration" in I && i(3, k = I.duration), "ariaLabel" in I && i(4, g = I.ariaLabel), "imgClass" in I && i(5, m = I.imgClass), "$$scope" in I && i(17, u = I.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*activeDragGesture*/
    64 && i(9, n = q === void 0 ? void 0 : (I) => {
      const te = ge(I);
      if (!q || te === void 0)
        return;
      const { start: de, width: pe } = q;
      i(15, z = Math.min(100, Math.max(-100, (te - de) / pe * 100))), i(6, q.position = te, q);
    }), t.$$.dirty[0] & /*activeDragGesture, percentOffset, touchEvent*/
    98368 && i(8, r = q === void 0 ? void 0 : (I) => {
      var Le;
      if (q) {
        const { timestamp: Ae, position: Ne, start: _e } = q, V = Date.now() - Ae, ye = Ne - _e;
        Math.abs(ye) >= 30 && V <= 250 && V > 0 ? ye > 0 ? T() : O() : z > 50 ? T() : z < -50 ? O() : (W == null ? void 0 : W.constructor.name) === "TouchEvent" && ((Le = W == null ? void 0 : W.target) == null || Le.dispatchEvent(new Event("click", { bubbles: !0 })));
      }
      i(15, z = 0), i(6, q = void 0), i(16, W = null);
    });
  }, e = F(e), [
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
    u,
    s,
    D
  ];
}
class af extends re {
  constructor(e) {
    super(), ne(
      this,
      e,
      uf,
      sf,
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
function ff(t) {
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
      C(e.$$.fragment, l), C(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && E(i), x(e, l), x(n, l);
    }
  };
}
function cf(t) {
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
      e = M("div"), $(i.$$.fragment), h(e, "slot", "slide");
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
      C(i.$$.fragment, r), n = !1;
    },
    d(r) {
      r && E(e), x(i);
    }
  };
}
function df(t) {
  let e, i, n;
  return i = new af({
    props: {
      images: (
        /*images*/
        t[0]
      ),
      duration: 3900,
      $$slots: {
        slide: [
          cf,
          ({ index: r, Slide: l }) => ({ 1: r, 2: l }),
          ({ index: r, Slide: l }) => (r ? 2 : 0) | (l ? 4 : 0)
        ],
        default: [
          ff,
          ({ Indicators: r, Controls: l }) => ({ 3: r, 4: l }),
          ({ Indicators: r, Controls: l }) => (r ? 8 : 0) | (l ? 16 : 0)
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = M("div"), $(i.$$.fragment), h(e, "class", "max-w-4xl space-y-4");
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
      C(i.$$.fragment, r), n = !1;
    },
    d(r) {
      r && E(e), x(i);
    }
  };
}
function kf(t, e, i) {
  let { images: n = [] } = e;
  return t.$$set = (r) => {
    "images" in r && i(0, n = r.images);
  }, [n];
}
class gf extends re {
  constructor(e) {
    super(), ne(this, e, kf, df, J, { images: 0 });
  }
}
const qd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new gf({
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
}), mf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, hf = {
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
function gl(t) {
  return t === "x" ? "y" : "x";
}
function Xi(t) {
  return t === "y" ? "height" : "width";
}
function ti(t) {
  return ["top", "bottom"].includes($e(t)) ? "y" : "x";
}
function Qi(t) {
  return gl(ti(t));
}
function bf(t, e, i) {
  i === void 0 && (i = !1);
  const n = At(t), r = Qi(t), l = Xi(r);
  let o = r === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[l] > e.floating[l] && (o = Ht(o)), [o, Ht(o)];
}
function _f(t) {
  const e = Ht(t);
  return [Ii(t), e, Ii(e)];
}
function Ii(t) {
  return t.replace(/start|end/g, (e) => hf[e]);
}
function pf(t, e, i) {
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
function yf(t, e, i, n) {
  const r = At(t);
  let l = pf($e(t), i === "start", n);
  return r && (l = l.map((o) => o + "-" + r), e && (l = l.concat(l.map(Ii)))), l;
}
function Ht(t) {
  return t.replace(/left|right|bottom|top/g, (e) => mf[e]);
}
function vf(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ml(t) {
  return typeof t != "number" ? vf(t) : {
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
const wf = async (t, e, i) => {
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
      name: b,
      fn: _
    } = s[m], {
      x: w,
      y,
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
    f = w ?? f, c = y ?? c, k = {
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
async function hl(t, e) {
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
  } = Et(e, t), g = ml(k), b = s[d ? c === "floating" ? "reference" : "floating" : c], _ = Vt(await l.getClippingRect({
    element: (i = await (l.isElement == null ? void 0 : l.isElement(b))) == null || i ? b : b.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(s.floating)),
    boundary: a,
    rootBoundary: f,
    strategy: u
  })), w = c === "floating" ? {
    ...o.floating,
    x: n,
    y: r
  } : o.reference, y = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(s.floating)), p = await (l.isElement == null ? void 0 : l.isElement(y)) ? await (l.getScale == null ? void 0 : l.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Vt(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: y,
    strategy: u
  }) : w);
  return {
    top: (_.top - S.top + g.top) / p.y,
    bottom: (S.bottom - _.bottom + g.bottom) / p.y,
    left: (_.left - S.left + g.left) / p.x,
    right: (S.right - _.right + g.right) / p.x
  };
}
const Cf = (t) => ({
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
    const c = ml(f), d = {
      x: i,
      y: n
    }, k = Qi(r), g = Xi(k), m = await o.getDimensions(a), b = k === "y", _ = b ? "top" : "left", w = b ? "bottom" : "right", y = b ? "clientHeight" : "clientWidth", p = l.reference[g] + l.reference[k] - d[k] - l.floating[g], S = d[k] - l.reference[k], O = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a));
    let T = O ? O[y] : 0;
    (!T || !await (o.isElement == null ? void 0 : o.isElement(O))) && (T = s.floating[y] || l.floating[g]);
    const j = p / 2 - S / 2, q = T / 2 - m[g] / 2 - 1, ee = ct(c[_], q), z = ct(c[w], q), W = ee, ge = T - m[g] - z, N = T / 2 - m[g] / 2 + j, D = Oi(W, N, ge), I = !u.arrow && At(r) != null && N !== D && l.reference[g] / 2 - (N < W ? ee : z) - m[g] / 2 < 0, te = I ? N < W ? N - W : N - ge : 0;
    return {
      [k]: d[k] + te,
      data: {
        [k]: D,
        centerOffset: N - D - te,
        ...I && {
          alignmentOffset: te
        }
      },
      reset: I
    };
  }
}), Sf = function(t) {
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
        ...b
      } = Et(t, e);
      if ((i = l.arrow) != null && i.alignmentOffset)
        return {};
      const _ = $e(r), w = $e(s) === s, y = await (u.isRTL == null ? void 0 : u.isRTL(a.floating)), p = d || (w || !m ? [Ht(s)] : _f(s));
      !d && g !== "none" && p.push(...yf(s, m, g, y));
      const S = [s, ...p], O = await hl(e, b), T = [];
      let j = ((n = l.flip) == null ? void 0 : n.overflows) || [];
      if (f && T.push(O[_]), c) {
        const W = bf(r, o, y);
        T.push(O[W[0]], O[W[1]]);
      }
      if (j = [...j, {
        placement: r,
        overflows: T
      }], !T.every((W) => W <= 0)) {
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
        let N = (ee = j.filter((D) => D.overflows[0] <= 0).sort((D, I) => D.overflows[1] - I.overflows[1])[0]) == null ? void 0 : ee.placement;
        if (!N)
          switch (k) {
            case "bestFit": {
              var z;
              const D = (z = j.map((I) => [I.placement, I.overflows.filter((te) => te > 0).reduce((te, de) => te + de, 0)]).sort((I, te) => I[1] - te[1])[0]) == null ? void 0 : z[0];
              D && (N = D);
              break;
            }
            case "initialPlacement":
              N = s;
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
async function Tf(t, e) {
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
const Ef = function(t) {
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
      } = e, u = await Tf(e, t);
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
}, Af = function(t) {
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
        ...u
      } = Et(t, e), a = {
        x: i,
        y: n
      }, f = await hl(e, u), c = ti($e(r)), d = gl(c);
      let k = a[d], g = a[c];
      if (l) {
        const b = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", w = k + f[b], y = k - f[_];
        k = Oi(w, k, y);
      }
      if (o) {
        const b = c === "y" ? "top" : "left", _ = c === "y" ? "bottom" : "right", w = g + f[b], y = g - f[_];
        g = Oi(w, g, y);
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
  return bl(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Te(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function We(t) {
  var e;
  return (e = (bl(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function bl(t) {
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
function Of(t) {
  return ["table", "td", "th"].includes(qe(t));
}
function Ki(t) {
  const e = Yi(), i = Ie(t);
  return i.transform !== "none" || i.perspective !== "none" || (i.containerType ? i.containerType !== "normal" : !1) || !e && (i.backdropFilter ? i.backdropFilter !== "none" : !1) || !e && (i.filter ? i.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (i.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (i.contain || "").includes(n));
}
function _l(t) {
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
function pl(t) {
  const e = dt(t);
  return ii(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : De(e) && Ot(e) ? e : pl(e);
}
function Ct(t, e, i) {
  var n;
  e === void 0 && (e = []), i === void 0 && (i = !0);
  const r = pl(t), l = r === ((n = t.ownerDocument) == null ? void 0 : n.body), o = Te(r);
  return l ? e.concat(o, o.visualViewport || [], Ot(r) ? r : [], o.frameElement && i ? Ct(o.frameElement) : []) : e.concat(r, Ct(r, [], i));
}
function yl(t) {
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
  } = yl(e);
  let o = (l ? Gt(i.width) : i.width) / n, s = (l ? Gt(i.height) : i.height) / r;
  return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: o,
    y: s
  };
}
const If = /* @__PURE__ */ Ve(0);
function vl(t) {
  const e = Te(t);
  return !Yi() || !e.visualViewport ? If : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Pf(t, e, i) {
  return e === void 0 && (e = !1), !i || e && i !== Te(t) ? !1 : e;
}
function et(t, e, i, n) {
  e === void 0 && (e = !1), i === void 0 && (i = !1);
  const r = t.getBoundingClientRect(), l = Ji(t);
  let o = Ve(1);
  e && (n ? Fe(n) && (o = ut(n)) : o = ut(t));
  const s = Pf(l, i, n) ? vl(l) : Ve(0);
  let u = (r.left + s.x) / o.x, a = (r.top + s.y) / o.y, f = r.width / o.x, c = r.height / o.y;
  if (l) {
    const d = Te(l), k = n && Fe(n) ? Te(n) : n;
    let g = d.frameElement;
    for (; g && n && k !== d; ) {
      const m = ut(g), b = g.getBoundingClientRect(), _ = Ie(g), w = b.left + (g.clientLeft + parseFloat(_.paddingLeft)) * m.x, y = b.top + (g.clientTop + parseFloat(_.paddingTop)) * m.y;
      u *= m.x, a *= m.y, f *= m.x, c *= m.y, u += w, a += y, g = Te(g).frameElement;
    }
  }
  return Vt({
    width: f,
    height: c,
    x: u,
    y: a
  });
}
const Lf = [":popover-open", ":modal"];
function wl(t) {
  let e = !1, i = 0, n = 0;
  function r(l) {
    try {
      e = e || t.matches(l);
    } catch {
    }
  }
  if (Lf.forEach((l) => {
    r(l);
  }), e) {
    const l = _l(t);
    if (l) {
      const o = l.getBoundingClientRect();
      i = o.x, n = o.y;
    }
  }
  return [e, i, n];
}
function Mf(t) {
  let {
    elements: e,
    rect: i,
    offsetParent: n,
    strategy: r
  } = t;
  const l = We(n), [o] = e ? wl(e.floating) : [!1];
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
function Nf(t) {
  return Array.from(t.getClientRects());
}
function Cl(t) {
  return et(We(t)).left + ni(t).scrollLeft;
}
function zf(t) {
  const e = We(t), i = ni(t), n = t.ownerDocument.body, r = Ze(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), l = Ze(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -i.scrollLeft + Cl(t);
  const s = -i.scrollTop;
  return Ie(n).direction === "rtl" && (o += Ze(e.clientWidth, n.clientWidth) - r), {
    width: r,
    height: l,
    x: o,
    y: s
  };
}
function Rf(t, e) {
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
function Df(t, e) {
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
    n = Rf(t, i);
  else if (e === "document")
    n = zf(We(t));
  else if (Fe(e))
    n = Df(e, i);
  else {
    const r = vl(t);
    n = {
      ...e,
      x: e.x - r.x,
      y: e.y - r.y
    };
  }
  return Vt(n);
}
function Sl(t, e) {
  const i = dt(t);
  return i === e || !Fe(i) || ii(i) ? !1 : Ie(i).position === "fixed" || Sl(i, e);
}
function Bf(t, e) {
  const i = e.get(t);
  if (i)
    return i;
  let n = Ct(t, [], !1).filter((s) => Fe(s) && qe(s) !== "body"), r = null;
  const l = Ie(t).position === "fixed";
  let o = l ? dt(t) : t;
  for (; Fe(o) && !ii(o); ) {
    const s = Ie(o), u = Ki(o);
    !u && s.position === "fixed" && (r = null), (l ? !u && !r : !u && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Ot(o) && !u && Sl(t, o)) ? n = n.filter((f) => f !== o) : r = s, o = dt(o);
  }
  return e.set(t, n), n;
}
function Ff(t) {
  let {
    element: e,
    boundary: i,
    rootBoundary: n,
    strategy: r
  } = t;
  const o = [...i === "clippingAncestors" ? Bf(e, this._c) : [].concat(i), n], s = o[0], u = o.reduce((a, f) => {
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
function jf(t) {
  const {
    width: e,
    height: i
  } = yl(t);
  return {
    width: e,
    height: i
  };
}
function Wf(t, e, i, n) {
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
      l && (a.x = Cl(l));
  let f = s.left + u.scrollLeft - a.x, c = s.top + u.scrollTop - a.y;
  const [d, k, g] = wl(n);
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
function Tl(t, e) {
  const i = Te(t);
  if (!De(t))
    return i;
  let n = tr(t, e);
  for (; n && Of(n) && Ie(n).position === "static"; )
    n = tr(n, e);
  return n && (qe(n) === "html" || qe(n) === "body" && Ie(n).position === "static" && !Ki(n)) ? i : n || _l(t) || i;
}
const Uf = async function(t) {
  const e = this.getOffsetParent || Tl, i = this.getDimensions;
  return {
    reference: Wf(t.reference, await e(t.floating), t.strategy, t.floating),
    floating: {
      x: 0,
      y: 0,
      ...await i(t.floating)
    }
  };
};
function Gf(t) {
  return Ie(t).direction === "rtl";
}
const Hf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Mf,
  getDocumentElement: We,
  getClippingRect: Ff,
  getOffsetParent: Tl,
  getElementRects: Uf,
  getClientRects: Nf,
  getDimensions: jf,
  getScale: ut,
  isElement: Fe,
  isRTL: Gf
};
function Vf(t, e) {
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
    const k = Mt(f), g = Mt(r.clientWidth - (a + c)), m = Mt(r.clientHeight - (f + d)), b = Mt(a), w = {
      rootMargin: -k + "px " + -g + "px " + -m + "px " + -b + "px",
      threshold: Ze(0, ct(1, u)) || 1
    };
    let y = !0;
    function p(S) {
      const O = S[0].intersectionRatio;
      if (O !== u) {
        if (!y)
          return o();
        O ? o(!1, O) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      y = !1;
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
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, a = Ji(t), f = r || l ? [...a ? Ct(a) : [], ...Ct(e)] : [];
  f.forEach((_) => {
    r && _.addEventListener("scroll", i, {
      passive: !0
    }), l && _.addEventListener("resize", i);
  });
  const c = a && s ? Vf(a, i) : null;
  let d = -1, k = null;
  o && (k = new ResizeObserver((_) => {
    let [w] = _;
    w && w.target === a && k && (k.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var y;
      (y = k) == null || y.observe(e);
    })), i();
  }), a && !u && k.observe(a), k.observe(e));
  let g, m = u ? et(t) : null;
  u && b();
  function b() {
    const _ = et(t);
    m && (_.x !== m.x || _.y !== m.y || _.width !== m.width || _.height !== m.height) && i(), m = _, g = requestAnimationFrame(b);
  }
  return i(), () => {
    var _;
    f.forEach((w) => {
      r && w.removeEventListener("scroll", i), l && w.removeEventListener("resize", i);
    }), c == null || c(), (_ = k) == null || _.disconnect(), k = null, u && cancelAnimationFrame(g);
  };
}
const qf = Af, Xf = Sf, Qf = Cf, Kf = (t, e, i) => {
  const n = /* @__PURE__ */ new Map(), r = {
    platform: Hf,
    ...i
  }, l = {
    ...r.platform,
    _c: n
  };
  return wf(t, e, {
    ...r,
    platform: l
  });
};
function nr(t) {
  let e;
  return {
    c() {
      e = M("div");
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
    $$slots: { default: [Yf] },
    $$scope: { ctx: t }
  };
  for (let l = 0; l < n.length; l += 1)
    r = L(r, n[l]);
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
      e = M("div"), h(
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
function Yf(t) {
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
      C(l, s), n = !1;
    },
    d(s) {
      s && (E(e), E(i)), l && l.d(s), o && o.d(s);
    }
  };
}
function Jf(t) {
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
      9 && v(l, 1)) : (l = rr(o), l.c(), v(l, 1), l.m(i.parentNode, i)) : l && (oe(), C(l, 1, 1, () => {
        l = null;
      }), se());
    },
    i(o) {
      n || (v(l), n = !0);
    },
    o(o) {
      C(l), n = !1;
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
function Zf(t, e, i) {
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
  let l = ie(e, r), { $$slots: o = {}, $$scope: s } = e, { activeContent: u = !1 } = e, { arrow: a = !0 } = e, { offset: f = 8 } = e, { placement: c = "top" } = e, { trigger: d = "hover" } = e, { triggeredBy: k = void 0 } = e, { reference: g = void 0 } = e, { strategy: m = "absolute" } = e, { open: b = !1 } = e, { yOnly: _ = !1 } = e, { middlewares: w = [Xf(), qf()] } = e;
  const y = je();
  let p, S, O, T, j, q = [], ee = !1;
  const z = () => (ee = !0, setTimeout(() => ee = !1, 250)), W = (V) => {
    S === void 0 && console.error("trigger undefined"), !g && q.includes(V.target) && S !== V.target && (i(3, S = V.target), z()), p && V.type === "focusin" && !b && z(), i(0, b = p && V.type === "click" && !ee ? !b : !0);
  }, ge = (V) => V.matches(":hover"), N = (V) => V.contains(document.activeElement), D = (V) => V != null ? `${V}px` : "", I = (V) => {
    u ? setTimeout(
      () => {
        const ye = [S, O, ...q].filter(Boolean);
        V.type === "mouseleave" && ye.some(ge) || V.type === "focusout" && ye.some(N) || i(0, b = !1);
      },
      100
    ) : i(0, b = !1);
  };
  let te;
  const de = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function pe() {
    Kf(S, O, { placement: c, strategy: m, middleware: n }).then(({ x: V, y: ye, middlewareData: Se, placement: G, strategy: ri }) => {
      O.style.position = ri, O.style.left = _ ? "0" : D(V), O.style.top = D(ye), Se.arrow && T instanceof HTMLDivElement && (i(20, T.style.left = D(Se.arrow.x), T), i(20, T.style.top = D(Se.arrow.y), T), i(21, te = de[G.split("-")[0]]), i(20, T.style[te] = D(-T.offsetWidth / 2 - (e.border ? 1 : 0)), T));
    });
  }
  function Le(V, ye) {
    O = V;
    let Se = ir(ye, O, pe);
    return {
      update(G) {
        Se(), Se = ir(G, O, pe);
      },
      destroy() {
        Se();
      }
    };
  }
  Ke(() => {
    const V = [
      ["focusin", W, !0],
      ["focusout", I, !0],
      ["click", W, p],
      ["mouseenter", W, !p],
      ["mouseleave", I, !p]
    ];
    return k ? q = [...document.querySelectorAll(k)] : q = j.previousElementSibling ? [j.previousElementSibling] : [], q.length || console.error("No triggers found."), q.forEach((ye) => {
      ye.tabIndex < 0 && (ye.tabIndex = 0);
      for (const [Se, G, ri] of V)
        ri && ye.addEventListener(Se, G);
    }), g ? (i(3, S = document.querySelector(g) ?? document.body), S === document.body ? console.error(`Popup reference not found: '${g}'`) : (S.addEventListener("focusout", I), p || S.addEventListener("mouseleave", I))) : i(3, S = q[0]), () => {
      q.forEach((ye) => {
        if (ye)
          for (const [Se, G] of V)
            ye.removeEventListener(Se, G);
      }), S && (S.removeEventListener("focusout", I), S.removeEventListener("mouseleave", I));
    };
  });
  let Ae;
  function Ne(V) {
    return i(20, T = V), {
      destroy() {
        i(20, T = null);
      }
    };
  }
  function _e(V) {
    Ee[V ? "unshift" : "push"](() => {
      j = V, i(5, j);
    });
  }
  return t.$$set = (V) => {
    i(36, e = L(L({}, e), F(V))), i(11, l = ie(e, r)), "activeContent" in V && i(1, u = V.activeContent), "arrow" in V && i(2, a = V.arrow), "offset" in V && i(12, f = V.offset), "placement" in V && i(13, c = V.placement), "trigger" in V && i(14, d = V.trigger), "triggeredBy" in V && i(15, k = V.triggeredBy), "reference" in V && i(16, g = V.reference), "strategy" in V && i(17, m = V.strategy), "open" in V && i(0, b = V.open), "yOnly" in V && i(18, _ = V.yOnly), "middlewares" in V && i(19, w = V.middlewares), "$$scope" in V && i(24, s = V.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*trigger*/
    16384 && i(4, p = d === "click"), t.$$.dirty[0] & /*open*/
    1 && y("show", b), t.$$.dirty[0] & /*placement, referenceEl*/
    8200 && c && (i(3, S), i(13, c)), t.$$.dirty[0] & /*middlewares, offset, arrowEl*/
    1576960 && (n = [
      ...w,
      Ef(+f),
      T && Qf({ element: T, padding: 10 })
    ]), i(6, Ae = Vr("uikit-absolute uikit-pointer-events-none uikit-block uikit-w-[10px] uikit-h-[10px] uikit-rotate-45 uikit-bg-inherit uikit-border-inherit", e.border && te === "bottom" && "uikit-border-b uikit-border-e", e.border && te === "top" && "uikit-border-t uikit-border-s ", e.border && te === "right" && "uikit-border-t uikit-border-e ", e.border && te === "left" && "uikit-border-b uikit-border-s "));
  }, e = F(e), [
    b,
    u,
    a,
    S,
    p,
    j,
    Ae,
    W,
    I,
    Le,
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
    T,
    te,
    o,
    _e,
    s
  ];
}
class xf extends re {
  constructor(e) {
    super(), ne(
      this,
      e,
      Zf,
      Jf,
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
const $f = (t) => ({}), or = (t) => ({}), ec = (t) => ({}), sr = (t) => ({});
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
      e = M("div"), r && r.c(), h(
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
          ec
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
      C(r, l), i = !1;
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
      e = M("div"), r && r.c(), h(
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
          $f
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
      C(r, l), i = !1;
    },
    d(l) {
      l && E(e), r && r.d(l);
    }
  };
}
function tc(t) {
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
      o && o.c(), e = H(), i = M("ul"), u && u.c(), n = H(), a && a.c(), r = ae(), h(
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
      64 && v(o, 1)) : (o = ur(f), o.c(), v(o, 1), o.m(e.parentNode, e)) : o && (oe(), C(o, 1, 1, () => {
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
      64 && v(a, 1)) : (a = ar(f), a.c(), v(a, 1), a.m(r.parentNode, r)) : a && (oe(), C(a, 1, 1, () => {
        a = null;
      }), se());
    },
    i(f) {
      l || (v(o), v(u, f), v(a), l = !0);
    },
    o(f) {
      C(o), C(u, f), C(a), l = !1;
    },
    d(f) {
      f && (E(e), E(i), E(n), E(r)), o && o.d(f), u && u.d(f), a && a.d(f);
    }
  };
}
function ic(t) {
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
    $$slots: { default: [tc] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < r.length; s += 1)
    o = L(o, r[s]);
  return (
    /*open*/
    t[0] !== void 0 && (o.open = /*open*/
    t[0]), e = new xf({ props: o }), Ee.push(() => Yt(e, "open", l)), e.$on(
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
        C(e.$$.fragment, s), n = !1;
      },
      d(s) {
        x(e, s);
      }
    }
  );
}
function nc(t, e, i) {
  const n = ["activeUrl", "open", "containerClass", "headerClass", "footerClass", "activeClass"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Xe(l), u = Tt("");
  let { activeUrl: a = "" } = e, { open: f = !1 } = e, { containerClass: c = "uikit-divide-y z-50" } = e, { headerClass: d = "uikit-py-1 uikit-overflow-hidden uikit-rounded-t-lg" } = e, { footerClass: k = "uikit-py-1 uikit-overflow-hidden uikit-rounded-b-lg" } = e, { activeClass: g = "uikit-text-primary-700 dark:uikit-text-primary-700 hover:uikit-text-primary-900 dark:hover:uikit-text-primary-900" } = e, m = P(g, e.classActive);
  He("DropdownType", { activeClass: m }), He("activeUrl", u);
  let b = P(c, e.classContainer), _ = P(d, e.classHeader), w = P("py-1", e.class), y = P(k, e.classFooter);
  function p(O) {
    f = O, i(0, f);
  }
  function S(O) {
    U.call(this, t, O);
  }
  return t.$$set = (O) => {
    i(18, e = L(L({}, e), F(O))), i(5, r = ie(e, n)), "activeUrl" in O && i(7, a = O.activeUrl), "open" in O && i(0, f = O.open), "containerClass" in O && i(8, c = O.containerClass), "headerClass" in O && i(9, d = O.headerClass), "footerClass" in O && i(10, k = O.footerClass), "activeClass" in O && i(11, g = O.activeClass), "$$scope" in O && i(15, o = O.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*activeUrl*/
    128 && u.set(a), i(5, r.arrow = r.arrow ?? !1, r), i(5, r.trigger = r.trigger ?? "click", r), i(5, r.placement = r.placement ?? "bottom", r), i(5, r.color = r.color ?? "dropdown", r), i(5, r.shadow = r.shadow ?? !0, r), i(5, r.rounded = r.rounded ?? !0, r);
  }, e = F(e), [
    f,
    b,
    _,
    w,
    y,
    r,
    s,
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
class rc extends re {
  constructor(e) {
    super(), ne(this, e, nc, ic, J, {
      activeUrl: 7,
      open: 0,
      containerClass: 8,
      headerClass: 9,
      footerClass: 10,
      activeClass: 11
    });
  }
}
function lc(t) {
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
      C(r, l), n = !1;
    },
    d(l) {
      l && E(i), r && r.d(l);
    }
  };
}
function oc(t) {
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
    u = L(u, s[a]);
  return {
    c() {
      e = M("button"), o && o.c(), ue(e, u);
    },
    m(a, f) {
      A(a, e, f), o && o.m(e, null), e.autofocus && e.focus(), i = !0, n || (r = [
        B(
          e,
          "click",
          /*click_handler_1*/
          t[22]
        ),
        B(
          e,
          "change",
          /*change_handler_1*/
          t[23]
        ),
        B(
          e,
          "keydown",
          /*keydown_handler_1*/
          t[24]
        ),
        B(
          e,
          "keyup",
          /*keyup_handler_1*/
          t[25]
        ),
        B(
          e,
          "touchstart",
          /*touchstart_handler_1*/
          t[26],
          { passive: !0 }
        ),
        B(
          e,
          "touchend",
          /*touchend_handler_1*/
          t[27]
        ),
        B(
          e,
          "touchcancel",
          /*touchcancel_handler_1*/
          t[28]
        ),
        B(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[29]
        ),
        B(
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
      C(o, a), i = !1;
    },
    d(a) {
      a && E(e), o && o.d(a), n = !1, we(r);
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
    u = L(u, s[a]);
  return {
    c() {
      e = M("a"), o && o.c(), ue(e, u);
    },
    m(a, f) {
      A(a, e, f), o && o.m(e, null), i = !0, n || (r = [
        B(
          e,
          "click",
          /*click_handler*/
          t[13]
        ),
        B(
          e,
          "change",
          /*change_handler*/
          t[14]
        ),
        B(
          e,
          "keydown",
          /*keydown_handler*/
          t[15]
        ),
        B(
          e,
          "keyup",
          /*keyup_handler*/
          t[16]
        ),
        B(
          e,
          "touchstart",
          /*touchstart_handler*/
          t[17],
          { passive: !0 }
        ),
        B(
          e,
          "touchend",
          /*touchend_handler*/
          t[18]
        ),
        B(
          e,
          "touchcancel",
          /*touchcancel_handler*/
          t[19]
        ),
        B(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[20]
        ),
        B(
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
      C(o, a), i = !1;
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
    o = L(o, l[s]);
  return {
    c() {
      e = M(
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
      C(r, s), i = !1;
    },
    d(s) {
      s && E(e), r && r.d(s);
    }
  };
}
function uc(t) {
  let e, i, n, r;
  const l = [sc, oc, lc], o = [];
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
      e = s(u), e === f ? o[e].p(u, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      C(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function ac(t, e, i) {
  const n = ["pill", "outline", "size", "href", "type", "color", "shadow", "tag", "checked"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Be("group");
  let { pill: u = !1 } = e, { outline: a = !1 } = e, { size: f = s ? "sm" : "md" } = e, { href: c = void 0 } = e, { type: d = "button" } = e, { color: k = s ? a ? "dark" : "alternative" : "primary" } = e, { shadow: g = !1 } = e, { tag: m = "button" } = e, { checked: b = void 0 } = e;
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
  }, y = {
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
  }, O = {
    xs: "uikit-px-3 uikit-py-2 uikit-text-xs",
    sm: "uikit-px-4 uikit-py-2 uikit-text-sm",
    md: "uikit-px-5 uikit-py-2.5 uikit-text-sm",
    lg: "uikit-px-5 uikit-py-3 uikit-text-base",
    xl: "uikit-px-6 uikit-py-3.5 uikit-text-base"
  }, T = () => a || k === "alternative" || k === "light";
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
  function I(G) {
    U.call(this, t, G);
  }
  function te(G) {
    U.call(this, t, G);
  }
  function de(G) {
    U.call(this, t, G);
  }
  function pe(G) {
    U.call(this, t, G);
  }
  function Le(G) {
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
  function Se(G) {
    U.call(this, t, G);
  }
  return t.$$set = (G) => {
    i(39, e = L(L({}, e), F(G))), i(4, r = ie(e, n)), "pill" in G && i(5, u = G.pill), "outline" in G && i(6, a = G.outline), "size" in G && i(7, f = G.size), "href" in G && i(0, c = G.href), "type" in G && i(1, d = G.type), "color" in G && i(8, k = G.color), "shadow" in G && i(9, g = G.shadow), "tag" in G && i(2, m = G.tag), "checked" in G && i(10, b = G.checked), "$$scope" in G && i(11, o = G.$$scope);
  }, t.$$.update = () => {
    i(3, j = P(
      "uikit-text-center uikit-font-medium",
      s ? "focus-within:uikit-ring-2" : "focus-within:uikit-ring-4",
      s && "focus-within:uikit-z-10",
      s || "focus-within:uikit-outline-none",
      "uikit-inline-flex uikit-items-center uikit-justify-center " + O[f],
      a && b && "uikit-border dark:uikit-border-gray-900",
      a && b && w[k],
      a && !b && S[k],
      !a && b && w[k],
      !a && !b && _[k],
      k === "alternative" && (s && !b ? "dark:uikit-bg-gray-700 dark:uikit-text-white dark:uikit-border-gray-700 dark:hover:uikit-border-gray-600 dark:hover:uikit-bg-gray-600" : "dark:uikit-bg-transparent dark:uikit-border-gray-600 dark:hover:uikit-border-gray-700"),
      a && k === "dark" && (s ? b ? "uikit-bg-gray-900 uikit-border-gray-800 dark:uikit-border-white dark:uikit-bg-gray-600" : "dark:uikit-text-white uikit-border-gray-800 dark:uikit-border-white" : "dark:uikit-text-gray-400 dark:uikit-border-gray-700"),
      y[k],
      T() && s && "uikit-border-s-0 first:uikit-border-s",
      s ? u && "first:uikit-rounded-s-full last:uikit-rounded-e-full" || "first:uikit-rounded-s-lg last:uikit-rounded-e-lg" : u && "uikit-rounded-full" || "uikit-rounded-lg",
      g && "uikit-shadow-lg",
      g && p[k],
      e.disabled && "uikit-cursor-not-allowed uikit-opacity-50",
      e.class
    ));
  }, e = F(e), [
    c,
    d,
    m,
    j,
    r,
    u,
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
    I,
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
      ac,
      uc,
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
function fc(t) {
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
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function cc(t) {
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
    o = L(o, l[s]);
  return {
    c() {
      e = M("label"), r && r.c(), ue(e, o);
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
      C(r, s), i = !1;
    },
    d(s) {
      s && E(e), r && r.d(s), t[8](null);
    }
  };
}
function dc(t) {
  let e, i, n, r;
  const l = [cc, fc], o = [];
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
      e = s(u), e === f ? o[e].p(u, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      C(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function kc(t, e, i) {
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
    i(10, e = L(L({}, e), F(g))), i(3, l = ie(e, r)), "color" in g && i(4, u = g.color), "defaultClass" in g && i(5, a = g.defaultClass), "show" in g && i(0, f = g.show), "$$scope" in g && i(6, s = g.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*node, color*/
    18) {
      const g = c == null ? void 0 : c.control;
      i(4, u = g != null && g.disabled ? "disabled" : u);
    }
    i(2, n = P(a, d[u], e.class));
  }, e = F(e), [
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
class gc extends re {
  constructor(e) {
    super(), ne(this, e, kc, dc, J, { color: 4, defaultClass: 5, show: 0 });
  }
}
function mc(t) {
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
    a = L(a, u[d]);
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
  return l = Fl(
    /*$$binding_groups*/
    t[22][0]
  ), {
    c() {
      e = M("input"), n = H(), c && c.c(), ue(e, a), l.p(e);
    },
    m(d, k) {
      A(d, e, k), e.autofocus && e.focus(), e.checked = e.__value === /*group*/
      t[0], A(d, n, k), c && c.m(d, k), r = !0, o || (s = [
        B(
          e,
          "change",
          /*input_change_handler*/
          t[21]
        ),
        B(
          e,
          "blur",
          /*blur_handler*/
          t[10]
        ),
        B(
          e,
          "change",
          /*change_handler*/
          t[11]
        ),
        B(
          e,
          "click",
          /*click_handler*/
          t[12]
        ),
        B(
          e,
          "focus",
          /*focus_handler*/
          t[13]
        ),
        B(
          e,
          "keydown",
          /*keydown_handler*/
          t[14]
        ),
        B(
          e,
          "keypress",
          /*keypress_handler*/
          t[15]
        ),
        B(
          e,
          "keyup",
          /*keyup_handler*/
          t[16]
        ),
        B(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[17]
        ),
        B(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[18]
        ),
        B(
          e,
          "mouseover",
          /*mouseover_handler*/
          t[19]
        ),
        B(
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
      C(c, d), r = !1;
    },
    d(d) {
      d && (E(e), E(n)), c && c.d(d), l.r(), o = !1, we(s);
    }
  };
}
function hc(t) {
  let e, i;
  return e = new gc({
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
      $$slots: { default: [mc] },
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
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
const bc = {
  primary: "uikit-text-primary-600 focus:uikit-ring-primary-500 dark:focus:uikit-ring-primary-600",
  secondary: "uikit-text-secondary-600 focus:uikit-ring-secondary-500 dark:focus:uikit-ring-secondary-600",
  red: "uikit-text-red-600 focus:uikit-ring-red-500 dark:focus:uikit-ring-red-600",
  green: "uikit-text-green-600 focus:uikit-ring-green-500 dark:focus:uikit-ring-green-600",
  purple: "uikit-text-purple-600 focus:uikit-ring-purple-500 dark:focus:uikit-ring-purple-600",
  teal: "uikit-text-teal-600 focus:uikit-ring-teal-500 dark:focus:uikit-ring-teal-600",
  yellow: "uikit-text-yellow-400 focus:uikit-ring-yellow-500 dark:focus:uikit-ring-yellow-600",
  orange: "uikit-text-orange-500 focus:uikit-ring-orange-500 dark:focus:uikit-ring-orange-600",
  blue: "uikit-text-blue-600 focus:uikit-ring-blue-500 dark:focus:uikit-ring-blue-600"
}, fr = (t, e) => P(t ? "uikit-inline-flex" : "uikit-flex", "uikit-items-center", e);
let _c = "uikit-me-2";
const cr = (t, e, i, n, r) => P(
  "uikit-w-4 uikit-h-4 uikit-bg-gray-100 uikit-border-gray-300 dark:uikit-ring-offset-gray-800 focus:uikit-ring-2",
  _c,
  n ? "dark:uikit-bg-gray-600 dark:uikit-border-gray-500" : "dark:uikit-bg-gray-700 dark:uikit-border-gray-600",
  t && "uikit-sr-only uikit-peer",
  i && "uikit-rounded",
  bc[e],
  r
);
function pc(t, e, i) {
  const n = ["color", "custom", "inline", "group", "value"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Xe(l);
  let { color: u = "primary" } = e, { custom: a = !1 } = e, { inline: f = !1 } = e, { group: c = "" } = e, { value: d = "" } = e, k = Be("background");
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
  function y(z) {
    U.call(this, t, z);
  }
  function p(z) {
    U.call(this, t, z);
  }
  function S(z) {
    U.call(this, t, z);
  }
  function O(z) {
    U.call(this, t, z);
  }
  function T(z) {
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
    i(6, e = L(L({}, e), F(z))), i(8, r = ie(e, n)), "color" in z && i(1, u = z.color), "custom" in z && i(2, a = z.custom), "inline" in z && i(3, f = z.inline), "group" in z && i(0, c = z.group), "value" in z && i(4, d = z.value), "$$scope" in z && i(23, o = z.$$scope);
  }, e = F(e), [
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
    b,
    _,
    w,
    y,
    p,
    S,
    O,
    T,
    j,
    q,
    ee,
    g,
    o
  ];
}
class yc extends re {
  constructor(e) {
    super(), ne(this, e, pc, hc, J, {
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
function vc(t) {
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
      C(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && E(i), x(n, l);
    }
  };
}
function wc(t) {
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
    $$slots: { default: [wc] },
    $$scope: { ctx: t }
  };
  return (
    /*group*/
    t[1] !== void 0 && (s.group = /*group*/
    t[1]), i = new yc({ props: s }), Ee.push(() => Yt(i, "group", o)), {
      c() {
        e = M("li"), $(i.$$.fragment), r = H();
      },
      m(u, a) {
        A(u, e, a), Z(i, e, null), R(e, r), l = !0;
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
        C(i.$$.fragment, u), l = !1;
      },
      d(u) {
        u && E(e), x(i);
      }
    }
  );
}
function Cc(t) {
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
        C(r[s]);
      i = !1;
    },
    d(o) {
      o && E(e), Qe(r, o);
    }
  };
}
function Sc(t) {
  let e, i, n, r;
  return e = new qt({
    props: {
      $$slots: { default: [vc] },
      $$scope: { ctx: t }
    }
  }), n = new rc({
    props: {
      class: "uikit-w-44 uikit-p-3 uikit-space-y-3 uikit-text-sm",
      $$slots: { default: [Cc] },
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
      C(e.$$.fragment, l), C(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && E(i), x(e, l), x(n, l);
    }
  };
}
function Tc(t, e, i) {
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
class Ec extends re {
  constructor(e) {
    super(), ne(this, e, Tc, Sc, J, { items: 0 });
  }
}
const Xd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Ec({
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
function Ac(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[9].default
  ), l = X(
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
      class: i = P(
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
  ], s = {};
  for (let u = 0; u < o.length; u += 1)
    s = L(s, o[u]);
  return {
    c() {
      e = M("aside"), l && l.c(), ue(e, s);
    },
    m(u, a) {
      A(u, e, a), l && l.m(e, null), n = !0;
    },
    p(u, [a]) {
      l && l.p && (!n || a & /*$$scope*/
      256) && K(
        l,
        r,
        u,
        /*$$scope*/
        u[8],
        n ? Q(
          r,
          /*$$scope*/
          u[8],
          a,
          null
        ) : Y(
          /*$$scope*/
          u[8]
        ),
        null
      ), ue(e, s = ce(o, [
        a & /*$$restProps*/
        8 && /*$$restProps*/
        u[3],
        (!n || a & /*mode, $$props*/
        17 && i !== (i = P(
          /*asideClass*/
          u[2][
            /*mode*/
            u[0]
          ],
          /*$$props*/
          u[4].class,
          "uikit-duration-100"
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
      C(l, u), n = !1;
    },
    d(u) {
      u && E(e), l && l.d(u);
    }
  };
}
function Oc(t, e, i) {
  const n = ["mode", "activeUrl", "nonActiveClass", "activeClass", "ariaLabel"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Tt("");
  let { mode: u = "normal" } = e, { activeUrl: a = "" } = e, { nonActiveClass: f = "uikit-flex uikit-items-center uikit-p-2 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { activeClass: c = "uikit-flex uikit-items-center uikit-p-2 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-bg-gray-200 dark:uikit-bg-gray-700 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { ariaLabel: d = "Sidebar" } = e;
  He("sidebarContext", { activeClass: c, nonActiveClass: f }), He("activeUrl", s);
  const k = { normal: "uikit-w-64", mini: "uikit-w-12" };
  return t.$$set = (g) => {
    i(4, e = L(L({}, e), F(g))), i(3, r = ie(e, n)), "mode" in g && i(0, u = g.mode), "activeUrl" in g && i(5, a = g.activeUrl), "nonActiveClass" in g && i(6, f = g.nonActiveClass), "activeClass" in g && i(7, c = g.activeClass), "ariaLabel" in g && i(1, d = g.ariaLabel), "$$scope" in g && i(8, o = g.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*activeUrl*/
    32 && s.set(a);
  }, e = F(e), [
    u,
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
class Ic extends re {
  constructor(e) {
    super(), ne(this, e, Oc, Ac, J, {
      mode: 0,
      activeUrl: 5,
      nonActiveClass: 6,
      activeClass: 7,
      ariaLabel: 1
    });
  }
}
function Pc(t) {
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
      class: i = P(
        /*ulClass*/
        t[0],
        /*$$props*/
        t[2].class
      )
    }
  ], s = {};
  for (let u = 0; u < o.length; u += 1)
    s = L(s, o[u]);
  return {
    c() {
      e = M("ul"), l && l.c(), ue(e, s);
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
        5 && i !== (i = P(
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
      C(l, u), n = !1;
    },
    d(u) {
      u && E(e), l && l.d(u);
    }
  };
}
function Lc(t, e, i) {
  const n = ["ulClass", "borderClass", "border"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e, { ulClass: s = "uikit-space-y-2" } = e, { borderClass: u = "uikit-pt-4 uikit-mt-4 uikit-border-t uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { border: a = !1 } = e;
  return a && (s += " " + u), t.$$set = (f) => {
    i(2, e = L(L({}, e), F(f))), i(1, r = ie(e, n)), "ulClass" in f && i(0, s = f.ulClass), "borderClass" in f && i(3, u = f.borderClass), "border" in f && i(4, a = f.border), "$$scope" in f && i(5, o = f.$$scope);
  }, e = F(e), [s, r, e, u, a, o, l];
}
class Mc extends re {
  constructor(e) {
    super(), ne(this, e, Lc, Pc, J, { ulClass: 0, borderClass: 3, border: 4 });
  }
}
const Nc = (t) => ({}), gr = (t) => ({}), zc = (t) => ({}), mr = (t) => ({});
function hr(t) {
  let e;
  const i = (
    /*#slots*/
    t[13].subtext
  ), n = X(
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
          Nc
        ) : Y(
          /*$$scope*/
          r[12]
        ),
        gr
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Rc(t) {
  let e, i, n, r, l, o, s, u, a, f;
  const c = (
    /*#slots*/
    t[13].icon
  ), d = X(
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
    m = L(m, g[b]);
  return {
    c() {
      e = M("li"), i = M("a"), d && d.c(), n = H(), r = M("span"), l = be(
        /*label*/
        t[1]
      ), s = H(), k && k.c(), h(r, "class", o = /*spanClass*/
      t[5][
        /*mode*/
        t[2]
      ]), ue(i, m);
    },
    m(b, _) {
      A(b, e, _), R(e, i), d && d.m(i, null), R(i, n), R(i, r), R(r, l), R(i, s), k && k.m(i, null), u = !0, a || (f = [
        B(
          i,
          "blur",
          /*blur_handler*/
          t[14]
        ),
        B(
          i,
          "click",
          /*click_handler*/
          t[22]
        ),
        B(
          i,
          "focus",
          /*focus_handler*/
          t[15]
        ),
        B(
          i,
          "keydown",
          /*keydown_handler*/
          t[16]
        ),
        B(
          i,
          "keypress",
          /*keypress_handler*/
          t[17]
        ),
        B(
          i,
          "keyup",
          /*keyup_handler*/
          t[18]
        ),
        B(
          i,
          "mouseenter",
          /*mouseenter_handler*/
          t[19]
        ),
        B(
          i,
          "mouseleave",
          /*mouseleave_handler*/
          t[20]
        ),
        B(
          i,
          "mouseover",
          /*mouseover_handler*/
          t[21]
        )
      ], a = !0);
    },
    p(b, [_]) {
      d && d.p && (!u || _ & /*$$scope*/
      4096) && K(
        d,
        c,
        b,
        /*$$scope*/
        b[12],
        u ? Q(
          c,
          /*$$scope*/
          b[12],
          _,
          zc
        ) : Y(
          /*$$scope*/
          b[12]
        ),
        mr
      ), (!u || _ & /*label*/
      2) && Ce(
        l,
        /*label*/
        b[1]
      ), (!u || _ & /*mode*/
      4 && o !== (o = /*spanClass*/
      b[5][
        /*mode*/
        b[2]
      ])) && h(r, "class", o), /*$$slots*/
      b[7].subtext && /*mode*/
      b[2] === "normal" ? k ? (k.p(b, _), _ & /*$$slots, mode*/
      132 && v(k, 1)) : (k = hr(b), k.c(), v(k, 1), k.m(i, null)) : k && (oe(), C(k, 1, 1, () => {
        k = null;
      }), se()), ue(i, m = ce(g, [
        _ & /*$$restProps*/
        64 && /*$$restProps*/
        b[6],
        (!u || _ & /*href*/
        1) && { href: (
          /*href*/
          b[0]
        ) },
        (!u || _ & /*aClass*/
        16) && { class: (
          /*aClass*/
          b[4]
        ) }
      ]));
    },
    i(b) {
      u || (v(d, b), v(k), u = !0);
    },
    o(b) {
      C(d, b), C(k), u = !1;
    },
    d(b) {
      b && E(e), d && d.d(b), k && k.d(), a = !1, we(f);
    }
  };
}
function Dc(t, e, i) {
  let n, r;
  const l = ["href", "label", "mode", "activeClass", "nonActiveClass", "onclick"];
  let o = ie(e, l), { $$slots: s = {}, $$scope: u } = e;
  const a = Xe(s);
  let { href: f = "" } = e, { label: c = "" } = e, { mode: d = "normal" } = e, { activeClass: k = void 0 } = e, { nonActiveClass: g = void 0 } = e, { onclick: m = (N) => {
  } } = e;
  const b = Be("sidebarContext") ?? {}, _ = Be("activeUrl");
  let w = "";
  _.subscribe((N) => {
    i(10, w = N);
  });
  const y = {
    normal: "uikit-flex-1 uikit-ms-3 uikit-whitespace-nowrap",
    mini: ""
  }, p = {
    normal: "uikit-flex uikit-items-center",
    mini: "uikit-flex uikit-flex-col uikit-items-center uikit-justify-center uikit-space-y-2"
  };
  function S(N) {
    U.call(this, t, N);
  }
  function O(N) {
    U.call(this, t, N);
  }
  function T(N) {
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
    i(26, e = L(L({}, e), F(N))), i(6, o = ie(e, l)), "href" in N && i(0, f = N.href), "label" in N && i(1, c = N.label), "mode" in N && i(2, d = N.mode), "activeClass" in N && i(8, k = N.activeClass), "nonActiveClass" in N && i(9, g = N.nonActiveClass), "onclick" in N && i(3, m = N.onclick), "$$scope" in N && i(12, u = N.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*sidebarUrl, href*/
    1025 && i(11, n = w ? f === w : !1), i(4, r = P(
      p[d],
      n ? k ?? b.activeClass : g ?? b.nonActiveClass,
      e.class
    ));
  }, e = F(e), [
    f,
    c,
    d,
    m,
    r,
    y,
    o,
    a,
    k,
    g,
    w,
    n,
    u,
    s,
    S,
    O,
    T,
    j,
    q,
    ee,
    z,
    W,
    ge
  ];
}
class Bc extends re {
  constructor(e) {
    super(), ne(this, e, Dc, Rc, J, {
      href: 0,
      label: 1,
      mode: 2,
      activeClass: 8,
      nonActiveClass: 9,
      onclick: 3
    });
  }
}
const Fc = (t) => ({}), br = (t) => ({}), jc = (t) => ({}), _r = (t) => ({}), Wc = (t) => ({}), pr = (t) => ({});
function Uc(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "m1 1 4 4 4-4"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    p: le,
    i: le,
    o: le,
    d(n) {
      n && E(e);
    }
  };
}
function Gc(t) {
  let e;
  const i = (
    /*#slots*/
    t[14].arrowdown
  ), n = X(
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
      8192) && K(
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
          Fc
        ) : Y(
          /*$$scope*/
          r[13]
        ),
        br
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Hc(t) {
  let e, i, n, r;
  const l = [qc, Vc], o = [];
  function s(u, a) {
    return (
      /*$$slots*/
      u[11].arrowup ? 0 : 1
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
      e = s(u), e === f ? o[e].p(u, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      C(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function Vc(t) {
  let e, i;
  return {
    c() {
      e = he("svg"), i = he("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5 5 1 1 5"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, r) {
      A(n, e, r), R(e, i);
    },
    p: le,
    i: le,
    o: le,
    d(n) {
      n && E(e);
    }
  };
}
function qc(t) {
  let e;
  const i = (
    /*#slots*/
    t[14].arrowup
  ), n = X(
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
      8192) && K(
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
          jc
        ) : Y(
          /*$$scope*/
          r[13]
        ),
        _r
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
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
  ), o = X(
    l,
    t,
    /*$$scope*/
    t[13],
    null
  );
  return {
    c() {
      e = M("ul"), o && o.c(), h(e, "class", i = /*ulClass*/
      t[6][
        /*mode*/
        t[2]
      ]);
    },
    m(s, u) {
      A(s, e, u), o && o.m(e, null), r = !0;
    },
    p(s, u) {
      t = s, o && o.p && (!r || u & /*$$scope*/
      8192) && K(
        o,
        l,
        t,
        /*$$scope*/
        t[13],
        r ? Q(
          l,
          /*$$scope*/
          t[13],
          u,
          null
        ) : Y(
          /*$$scope*/
          t[13]
        ),
        null
      ), (!r || u & /*mode*/
      4 && i !== (i = /*ulClass*/
      t[6][
        /*mode*/
        t[2]
      ])) && h(e, "class", i);
    },
    i(s) {
      r || (v(o, s), s && Oe(() => {
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
    o(s) {
      C(o, s), s && (n || (n = Re(
        e,
        /*multiple*/
        t[7],
        /*transitionParams*/
        t[3],
        !1
      )), n.run(0)), r = !1;
    },
    d(s) {
      s && E(e), o && o.d(s), s && n && n.end();
    }
  };
}
function Xc(t) {
  let e, i, n, r, l, o, s, u, a, f, c, d, k, g;
  const m = (
    /*#slots*/
    t[14].icon
  ), b = X(
    m,
    t,
    /*$$scope*/
    t[13],
    pr
  ), _ = [Hc, Gc, Uc], w = [];
  function y(T, j) {
    return (
      /*isOpen*/
      T[0] && /*mode*/
      T[2] === "normal" ? 0 : (
        /*$$slots*/
        T[11].arrowdown && /*mode*/
        T[2] === "normal" ? 1 : (
          /*mode*/
          T[2] === "normal" ? 2 : -1
        )
      )
    );
  }
  ~(u = y(t)) && (a = w[u] = _[u](t));
  let p = [
    /*$$restProps*/
    t[9],
    {
      class: f = P(
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
  for (let T = 0; T < p.length; T += 1)
    S = L(S, p[T]);
  let O = (
    /*isOpen*/
    t[0] && /*mode*/
    t[2] === "normal" && yr(t)
  );
  return {
    c() {
      e = M("li"), i = M("button"), b && b.c(), n = H(), r = M("span"), l = be(
        /*label*/
        t[1]
      ), s = H(), a && a.c(), c = H(), O && O.c(), h(r, "class", o = /*spanClass*/
      t[5][
        /*mode*/
        t[2]
      ]), ue(i, S);
    },
    m(T, j) {
      A(T, e, j), R(e, i), b && b.m(i, null), R(i, n), R(i, r), R(r, l), R(i, s), ~u && w[u].m(i, null), i.autofocus && i.focus(), R(e, c), O && O.m(e, null), d = !0, k || (g = B(
        i,
        "click",
        /*click_handler*/
        t[15]
      ), k = !0);
    },
    p(T, [j]) {
      b && b.p && (!d || j & /*$$scope*/
      8192) && K(
        b,
        m,
        T,
        /*$$scope*/
        T[13],
        d ? Q(
          m,
          /*$$scope*/
          T[13],
          j,
          Wc
        ) : Y(
          /*$$scope*/
          T[13]
        ),
        pr
      ), (!d || j & /*label*/
      2) && Ce(
        l,
        /*label*/
        T[1]
      ), (!d || j & /*mode*/
      4 && o !== (o = /*spanClass*/
      T[5][
        /*mode*/
        T[2]
      ])) && h(r, "class", o);
      let q = u;
      u = y(T), u === q ? ~u && w[u].p(T, j) : (a && (oe(), C(w[q], 1, 1, () => {
        w[q] = null;
      }), se()), ~u ? (a = w[u], a ? a.p(T, j) : (a = w[u] = _[u](T), a.c()), v(a, 1), a.m(i, null)) : a = null), ue(i, S = ce(p, [
        j & /*$$restProps*/
        512 && /*$$restProps*/
        T[9],
        (!d || j & /*mode, $$props*/
        1028 && f !== (f = P(
          /*btnClass*/
          T[4][
            /*mode*/
            T[2]
          ],
          /*$$props*/
          T[10].class
        ))) && { class: f },
        { "aria-controls": "sidebar-dropdown" }
      ])), /*isOpen*/
      T[0] && /*mode*/
      T[2] === "normal" ? O ? (O.p(T, j), j & /*isOpen, mode*/
      5 && v(O, 1)) : (O = yr(T), O.c(), v(O, 1), O.m(e, null)) : O && (oe(), C(O, 1, 1, () => {
        O = null;
      }), se());
    },
    i(T) {
      d || (v(b, T), v(a), v(O), d = !0);
    },
    o(T) {
      C(b, T), C(a), C(O), d = !1;
    },
    d(T) {
      T && E(e), b && b.d(T), ~u && w[u].d(), O && O.d(), k = !1, g();
    }
  };
}
function Qc(t, e, i) {
  const n = ["label", "mode", "transitionType", "transitionParams", "isOpen"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e;
  const s = Xe(l);
  let { label: u = "" } = e, { mode: a = "normal" } = e, { transitionType: f = "slide" } = e, { transitionParams: c = {} } = e;
  const d = {
    normal: "uikit-flex uikit-items-center uikit-p-2 uikit-w-full uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg uikit-transition uikit-duration-75 uikit-group hover:uikit-bg-gray-100 dark:uikit-text-white dark:hover:uikit-bg-gray-700",
    mini: "uikit-flex uikit-flex-col uikit-items-center uikit-mx-auto uikit-justify-center uikit-space-y-2"
  }, k = {
    normal: "uikit-flex-1 uikit-ms-3 uikit-text-left uikit-whitespace-nowrap",
    mini: "uikit-flex-1"
  }, g = {
    normal: "uikit-py-2 uikit-space-y-2",
    mini: "uikit-hidden"
  }, m = (y, p) => {
    switch (f) {
      case "blur":
        return Di(y, p);
      case "fly":
        return yt(y, p);
      case "fade":
        return Jt(y, p);
      default:
        return Bi(y, p);
    }
  };
  let { isOpen: b = !1 } = e;
  const _ = () => {
    i(0, b = !b);
  }, w = () => _();
  return t.$$set = (y) => {
    i(10, e = L(L({}, e), F(y))), i(9, r = ie(e, n)), "label" in y && i(1, u = y.label), "mode" in y && i(2, a = y.mode), "transitionType" in y && i(12, f = y.transitionType), "transitionParams" in y && i(3, c = y.transitionParams), "isOpen" in y && i(0, b = y.isOpen), "$$scope" in y && i(13, o = y.$$scope);
  }, e = F(e), [
    b,
    u,
    a,
    c,
    d,
    k,
    g,
    m,
    _,
    r,
    e,
    s,
    f,
    o,
    l,
    w
  ];
}
class Kc extends re {
  constructor(e) {
    super(), ne(this, e, Qc, Xc, J, {
      label: 1,
      mode: 2,
      transitionType: 12,
      transitionParams: 3,
      isOpen: 0
    });
  }
}
function Yc(t) {
  let e, i, n, r, l, o, s = [
    /*$$restProps*/
    t[5],
    { href: (
      /*href*/
      t[1]
    ) },
    {
      class: r = P(
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
    u = L(u, s[a]);
  return {
    c() {
      e = M("li"), i = M("a"), n = be(
        /*label*/
        t[2]
      ), ue(i, u);
    },
    m(a, f) {
      A(a, e, f), R(e, i), R(i, n), l || (o = [
        B(
          i,
          "blur",
          /*blur_handler*/
          t[7]
        ),
        B(
          i,
          "click",
          /*click_handler*/
          t[8]
        ),
        B(
          i,
          "focus",
          /*focus_handler*/
          t[9]
        ),
        B(
          i,
          "keydown",
          /*keydown_handler*/
          t[10]
        ),
        B(
          i,
          "keypress",
          /*keypress_handler*/
          t[11]
        ),
        B(
          i,
          "keyup",
          /*keyup_handler*/
          t[12]
        ),
        B(
          i,
          "mouseenter",
          /*mouseenter_handler*/
          t[13]
        ),
        B(
          i,
          "mouseleave",
          /*mouseleave_handler*/
          t[14]
        ),
        B(
          i,
          "mouseover",
          /*mouseover_handler*/
          t[15]
        )
      ], l = !0);
    },
    p(a, [f]) {
      f & /*label*/
      4 && Ul(
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
        89 && r !== (r = P(
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
function Jc(t, e, i) {
  const n = ["aClass", "href", "label", "activeClass", "active"];
  let r = ie(e, n), { aClass: l = "uikit-flex uikit-items-center uikit-p-2 uikit-ps-11 uikit-w-full uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg uikit-transition uikit-duration-75 uikit-group hover:uikit-bg-gray-100 dark:uikit-text-white dark:hover:uikit-bg-gray-700" } = e, { href: o = "" } = e, { label: s = "" } = e, { activeClass: u = "uikit-flex uikit-items-center uikit-p-2 uikit-ps-11 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-bg-gray-200 dark:uikit-bg-gray-700 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { active: a = !1 } = e;
  function f(y) {
    U.call(this, t, y);
  }
  function c(y) {
    U.call(this, t, y);
  }
  function d(y) {
    U.call(this, t, y);
  }
  function k(y) {
    U.call(this, t, y);
  }
  function g(y) {
    U.call(this, t, y);
  }
  function m(y) {
    U.call(this, t, y);
  }
  function b(y) {
    U.call(this, t, y);
  }
  function _(y) {
    U.call(this, t, y);
  }
  function w(y) {
    U.call(this, t, y);
  }
  return t.$$set = (y) => {
    i(6, e = L(L({}, e), F(y))), i(5, r = ie(e, n)), "aClass" in y && i(0, l = y.aClass), "href" in y && i(1, o = y.href), "label" in y && i(2, s = y.label), "activeClass" in y && i(3, u = y.activeClass), "active" in y && i(4, a = y.active);
  }, e = F(e), [
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
    b,
    _,
    w
  ];
}
class Zc extends re {
  constructor(e) {
    super(), ne(this, e, Jc, Yc, J, {
      aClass: 0,
      href: 1,
      label: 2,
      activeClass: 3,
      active: 4
    });
  }
}
function xc(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[5].default
  ), l = X(
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
      class: i = P(
        /*divClass*/
        t[1][
          /*mode*/
          t[0]
        ],
        /*$$props*/
        t[3].class
      )
    }
  ], s = {};
  for (let u = 0; u < o.length; u += 1)
    s = L(s, o[u]);
  return {
    c() {
      e = M("div"), l && l.c(), ue(e, s);
    },
    m(u, a) {
      A(u, e, a), l && l.m(e, null), n = !0;
    },
    p(u, [a]) {
      l && l.p && (!n || a & /*$$scope*/
      16) && K(
        l,
        r,
        u,
        /*$$scope*/
        u[4],
        n ? Q(
          r,
          /*$$scope*/
          u[4],
          a,
          null
        ) : Y(
          /*$$scope*/
          u[4]
        ),
        null
      ), ue(e, s = ce(o, [
        a & /*$$restProps*/
        4 && /*$$restProps*/
        u[2],
        (!n || a & /*mode, $$props*/
        9 && i !== (i = P(
          /*divClass*/
          u[1][
            /*mode*/
            u[0]
          ],
          /*$$props*/
          u[3].class
        ))) && { class: i }
      ]));
    },
    i(u) {
      n || (v(l, u), n = !0);
    },
    o(u) {
      C(l, u), n = !1;
    },
    d(u) {
      u && E(e), l && l.d(u);
    }
  };
}
function $c(t, e, i) {
  const n = ["mode"];
  let r = ie(e, n), { $$slots: l = {}, $$scope: o } = e, { mode: s = "normal" } = e;
  const u = {
    normal: "uikit-overflow-y-auto uikit-py-4 uikit-px-3 uikit-bg-gray-50 uikit-rounded dark:uikit-bg-gray-800",
    mini: "uikit-overflow-y-auto uikit-py-4 uikit-bg-gray-50 uikit-rounded dark:uikit-bg-gray-800"
  };
  return t.$$set = (a) => {
    i(3, e = L(L({}, e), F(a))), i(2, r = ie(e, n)), "mode" in a && i(0, s = a.mode), "$$scope" in a && i(4, o = a.$$scope);
  }, e = F(e), [s, u, r, e, o, l];
}
class ed extends re {
  constructor(e) {
    super(), ne(this, e, $c, xc, J, { mode: 0 });
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
function td(t) {
  let e, i;
  return e = new Bc({
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
        subtext: [rd],
        icon: [nd]
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function id(t) {
  let e, i;
  return e = new Kc({
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
        icon: [od],
        default: [ld]
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function nd(t) {
  let e, i, n;
  return e = new ei({
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
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      C(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && E(i), x(e, r);
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
      e = M("span"), n = be(i), h(e, "class", "uikit-inline-flex uikit-justify-center uikit-items-center uikit-p-3 uikit-ms-3 uikit-w-3 uikit-h-3 uikit-text-sm uikit-font-medium uikit-text-primary-600 uikit-bg-primary-200 uikit-rounded-full dark:uikit-bg-primary-900 dark:uikit-text-primary-200");
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
      r && E(e);
    }
  };
}
function rd(t) {
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
      n && E(e), i && i.d(n);
    }
  };
}
function Sr(t) {
  let e, i;
  return e = new Zc({
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function ld(t) {
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
    m(o, s) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(o, s);
      A(o, e, s), i = !0;
    },
    p(o, s) {
      if (s & /*items*/
      2) {
        n = ve(
          /*children*/
          o[8] || []
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
        C(r[s]);
      i = !1;
    },
    d(o) {
      o && E(e), Qe(r, o);
    }
  };
}
function od(t) {
  let e, i, n;
  return e = new ei({
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
      n || (v(e.$$.fragment, r), n = !0);
    },
    o(r) {
      C(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && E(i), x(e, r);
    }
  };
}
function Tr(t) {
  let e, i, n, r;
  const l = [id, td], o = [];
  function s(u, a) {
    return (
      /*children*/
      u[8] && /*children*/
      u[8].length > 0 ? 0 : 1
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
      e = s(u), e === f ? o[e].p(u, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      C(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function sd(t) {
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
    m(o, s) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(o, s);
      A(o, e, s), i = !0;
    },
    p(o, s) {
      if (s & /*mode, items, activeUrl*/
      7) {
        n = ve(
          /*items*/
          o[1]
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
        C(r[s]);
      i = !1;
    },
    d(o) {
      o && E(e), Qe(r, o);
    }
  };
}
function ud(t) {
  let e, i;
  return e = new Mc({
    props: {
      $$slots: { default: [sd] },
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function ad(t) {
  let e, i;
  return e = new ed({
    props: {
      mode: (
        /*mode*/
        t[0]
      ),
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
      r & /*mode*/
      1 && (l.mode = /*mode*/
      n[0]), r & /*$$scope, items, mode, activeUrl*/
      16391 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (v(e.$$.fragment, n), i = !0);
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
  let e, i;
  return e = new Ic({
    props: {
      mode: (
        /*mode*/
        t[0]
      ),
      activeUrl: (
        /*activeUrl*/
        t[2]
      ),
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
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function cd(t, e, i) {
  let { mode: n = "normal" } = e, r;
  Ke(() => {
    i(2, r = window.location.pathname);
  });
  let { items: l = [] } = e;
  function o() {
    i(0, n = n === "normal" ? "mini" : "normal");
  }
  return t.$$set = (s) => {
    "mode" in s && i(0, n = s.mode), "items" in s && i(1, l = s.items);
  }, window && window.location && i(2, r = window.location.pathname), [n, l, r, o];
}
let dd = class extends re {
  constructor(e) {
    super(), ne(this, e, cd, fd, J, { mode: 0, items: 1, toggle: 3 });
  }
  get toggle() {
    return this.$$.ctx[3];
  }
};
const Kd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new dd({
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
function kd(t) {
  let e, i, n, r, l = [
    /*$$restProps*/
    t[5],
    { role: "status" },
    {
      class: r = P(
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
    o = L(o, l[s]);
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
      A(s, e, u), R(e, i), R(e, n);
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
        65 && r !== (r = P(
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
function gd(t, e, i) {
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
    i(6, e = L(L({}, e), F(g))), i(5, r = ie(e, n)), "color" in g && i(7, l = g.color), "bg" in g && i(0, o = g.bg), "customColor" in g && i(8, s = g.customColor), "size" in g && i(9, u = g.size), "currentFill" in g && i(1, a = g.currentFill), "currentColor" in g && i(2, f = g.currentColor);
  }, e = F(e), [
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
class El extends re {
  constructor(e) {
    super(), ne(this, e, gd, kd, J, {
      color: 7,
      bg: 0,
      customColor: 8,
      size: 9,
      currentFill: 1,
      currentColor: 2
    });
  }
}
function md(t) {
  let e, i;
  return e = new El({
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
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function hd(t) {
  let e, i, n;
  return i = new qt({
    props: {
      outline: (
        /*buttonoutline*/
        t[3]
      ),
      color: "dark",
      $$slots: { default: [bd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = M("div"), $(i.$$.fragment), h(e, "class", "uikit-flex uikit-flex-wrap uikit-items-center uikit-gap-2");
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
      C(i.$$.fragment, r), n = !1;
    },
    d(r) {
      r && E(e), x(i);
    }
  };
}
function bd(t) {
  let e, i, n;
  return e = new El({
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
      C(e.$$.fragment, r), n = !1;
    },
    d(r) {
      r && E(i), x(e, r);
    }
  };
}
function _d(t) {
  let e, i, n, r;
  const l = [hd, md], o = [];
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
      e = s(u), e === f ? o[e].p(u, a) : (oe(), C(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = l[e](u), i.c()), v(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (v(i), r = !0);
    },
    o(u) {
      C(i), r = !1;
    },
    d(u) {
      u && E(n), o[e].d(u);
    }
  };
}
function pd(t, e, i) {
  let { size: n = "4" } = e, { color: r = "green" } = e, { button: l = !1 } = e, { buttonoutline: o = !1 } = e;
  return t.$$set = (s) => {
    "size" in s && i(0, n = s.size), "color" in s && i(1, r = s.color), "button" in s && i(2, l = s.button), "buttonoutline" in s && i(3, o = s.buttonoutline);
  }, [n, r, l, o];
}
class yd extends re {
  constructor(e) {
    super(), ne(this, e, pd, _d, J, {
      size: 0,
      color: 1,
      button: 2,
      buttonoutline: 3
    });
  }
}
const Yd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new yd({
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
}, vd = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;
function wd(t) {
  function e(i) {
    if (!(i.key === "Tab" || i.keyCode === 9))
      return;
    const r = Array.from(t.querySelectorAll(vd));
    let l = r.indexOf(document.activeElement ?? t);
    l === -1 && i.shiftKey && (l = 0), l += r.length + (i.shiftKey ? -1 : 1), l %= r.length, r[l].focus(), i.preventDefault();
  }
  return document.addEventListener("keydown", e, !0), {
    destroy() {
      document.removeEventListener("keydown", e, !0);
    }
  };
}
const Cd = (t) => ({}), Er = (t) => ({}), Sd = (t) => ({}), Ar = (t) => ({});
function Or(t) {
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
    $$slots: { default: [Od] },
    $$scope: { ctx: t }
  };
  for (let k = 0; k < c.length; k += 1)
    d = L(d, c[k]);
  return l = new it({ props: d }), {
    c() {
      e = M("div"), i = H(), n = M("div"), r = M("div"), $(l.$$.fragment), h(
        e,
        "class",
        /*backdropCls*/
        t[12]
      ), h(r, "class", o = "uikit-flex uikit-relative " + /*sizes*/
      t[8][
        /*size*/
        t[2]
      ] + " uikit-w-full uikit-max-h-full"), h(n, "class", s = P(
        /*dialogClass*/
        t[4],
        /*$$props*/
        t[14].classDialog,
        .../*getPlacementClasses*/
        t[7]()
      )), h(n, "tabindex", "-1"), h(n, "aria-modal", "true"), h(n, "role", "dialog");
    },
    m(k, g) {
      A(k, e, g), A(k, i, g), A(k, n, g), R(n, r), Z(l, r, null), u = !0, a || (f = [
        B(
          n,
          "keydown",
          /*handleKeys*/
          t[13]
        ),
        B(n, "wheel", zl(
          /*wheel_handler*/
          t[23]
        ), { passive: !1 }),
        at(
          /*prepareFocus*/
          t[6].call(null, n)
        ),
        at(wd.call(null, n)),
        B(
          n,
          "click",
          /*onAutoClose*/
          t[9]
        ),
        B(
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
      16400 && s !== (s = P(
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
      C(l.$$.fragment, k), u = !1;
    },
    d(k) {
      k && (E(e), E(i), E(n)), x(l), a = !1, we(f);
    }
  };
}
function Ir(t) {
  let e, i;
  return e = new it({
    props: {
      color: (
        /*$$restProps*/
        t[15].color
      ),
      class: "uikit-flex uikit-justify-between uikit-items-center uikit-p-4 uikit-rounded-t-lg",
      $$slots: { default: [Ed] },
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
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Td(t) {
  let e, i, n;
  return {
    c() {
      e = M("h3"), i = be(
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
      r && E(e);
    }
  };
}
function Pr(t) {
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
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Ed(t) {
  let e, i, n;
  const r = (
    /*#slots*/
    t[22].header
  ), l = X(
    r,
    t,
    /*$$scope*/
    t[25],
    Ar
  ), o = l || Td(t);
  let s = (
    /*dismissable*/
    t[3] && Pr(t)
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
          Sd
        ) : Y(
          /*$$scope*/
          u[25]
        ),
        Ar
      ) : o && o.p && (!n || a & /*$$restProps, title*/
      32770) && o.p(u, n ? a : -1), /*dismissable*/
      u[3] ? s ? (s.p(u, a), a & /*dismissable*/
      8 && v(s, 1)) : (s = Pr(u), s.c(), v(s, 1), s.m(i.parentNode, i)) : s && (oe(), C(s, 1, 1, () => {
        s = null;
      }), se());
    },
    i(u) {
      n || (v(o, u), v(s), n = !0);
    },
    o(u) {
      C(o, u), C(s), n = !1;
    },
    d(u) {
      u && (E(e), E(i)), o && o.d(u), s && s.d(u);
    }
  };
}
function Lr(t) {
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
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Mr(t) {
  let e, i;
  return e = new it({
    props: {
      color: (
        /*$$restProps*/
        t[15].color
      ),
      class: "uikit-flex uikit-items-center uikit-p-6 uikit-space-x-2 rtl:uikit-space-x-reverse uikit-rounded-b-lg",
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
      n[15].color), r & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: n }), e.$set(l);
    },
    i(n) {
      i || (v(e.$$.fragment, n), i = !0);
    },
    o(n) {
      C(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Ad(t) {
  let e;
  const i = (
    /*#slots*/
    t[22].footer
  ), n = X(
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
          Cd
        ) : Y(
          /*$$scope*/
          r[25]
        ),
        Er
      );
    },
    i(r) {
      e || (v(n, r), e = !0);
    },
    o(r) {
      C(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Od(t) {
  let e, i, n, r, l, o, s, u, a, f = (
    /*$$slots*/
    (t[16].header || /*title*/
    t[1]) && Ir(t)
  ), c = (
    /*dismissable*/
    t[3] && !/*$$slots*/
    t[16].header && !/*title*/
    t[1] && Lr(t)
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
    t[16].footer && Mr(t)
  );
  return {
    c() {
      f && f.c(), e = H(), i = M("div"), c && c.c(), n = H(), k && k.c(), l = H(), g && g.c(), o = ae(), h(i, "class", r = P(
        "uikit-p-6 uikit-space-y-6 uikit-flex-1 uikit-overflow-y-auto uikit-overscroll-contain",
        /*$$props*/
        t[14].bodyClass
      )), h(i, "role", "document");
    },
    m(m, b) {
      f && f.m(m, b), A(m, e, b), A(m, i, b), c && c.m(i, null), R(i, n), k && k.m(i, null), A(m, l, b), g && g.m(m, b), A(m, o, b), s = !0, u || (a = [
        B(i, "keydown", xi(
          /*handleKeys*/
          t[13]
        )),
        B(i, "wheel", xi(
          /*wheel_handler_1*/
          t[24]
        ), { passive: !0 })
      ], u = !0);
    },
    p(m, b) {
      /*$$slots*/
      m[16].header || /*title*/
      m[1] ? f ? (f.p(m, b), b & /*$$slots, title*/
      65538 && v(f, 1)) : (f = Ir(m), f.c(), v(f, 1), f.m(e.parentNode, e)) : f && (oe(), C(f, 1, 1, () => {
        f = null;
      }), se()), /*dismissable*/
      m[3] && !/*$$slots*/
      m[16].header && !/*title*/
      m[1] ? c ? (c.p(m, b), b & /*dismissable, $$slots, title*/
      65546 && v(c, 1)) : (c = Lr(m), c.c(), v(c, 1), c.m(i, n)) : c && (oe(), C(c, 1, 1, () => {
        c = null;
      }), se()), k && k.p && (!s || b & /*$$scope*/
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
          b,
          null
        ) : Y(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!s || b & /*$$props*/
      16384 && r !== (r = P(
        "uikit-p-6 uikit-space-y-6 uikit-flex-1 uikit-overflow-y-auto uikit-overscroll-contain",
        /*$$props*/
        m[14].bodyClass
      ))) && h(i, "class", r), /*$$slots*/
      m[16].footer ? g ? (g.p(m, b), b & /*$$slots*/
      65536 && v(g, 1)) : (g = Mr(m), g.c(), v(g, 1), g.m(o.parentNode, o)) : g && (oe(), C(g, 1, 1, () => {
        g = null;
      }), se());
    },
    i(m) {
      s || (v(f), v(c), v(k, m), v(g), s = !0);
    },
    o(m) {
      C(f), C(c), C(k, m), C(g), s = !1;
    },
    d(m) {
      m && (E(e), E(i), E(l), E(o)), f && f.d(m), c && c.d(), k && k.d(m), g && g.d(m), u = !1, we(a);
    }
  };
}
function Id(t) {
  let e, i, n = (
    /*open*/
    t[0] && Or(t)
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
      1 && v(n, 1)) : (n = Or(r), n.c(), v(n, 1), n.m(e.parentNode, e)) : n && (oe(), C(n, 1, 1, () => {
        n = null;
      }), se());
    },
    i(r) {
      i || (v(n), i = !0);
    },
    o(r) {
      C(n), i = !1;
    },
    d(r) {
      r && E(e), n && n.d(r);
    }
  };
}
function Pd(t, e, i) {
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
  let { open: u = !1 } = e, { title: a = "" } = e, { size: f = "md" } = e, { placement: c = "center" } = e, { autoclose: d = !1 } = e, { dismissable: k = !0 } = e, { backdropClass: g = "uikit-fixed uikit-inset-0 uikit-z-40 uikit-bg-gray-900 uikit-bg-opacity-50 dark:uikit-bg-opacity-80" } = e, { defaultClass: m = "uikit-relative uikit-flex uikit-flex-col uikit-mx-auto" } = e, { outsideclose: b = !1 } = e, { dialogClass: _ = "uikit-fixed uikit-top-0 uikit-start-0 uikit-end-0 uikit-h-modal md:uikit-inset-0 md:uikit-h-full uikit-z-50 uikit-w-full uikit-p-4 uikit-flex" } = e;
  const w = je();
  function y(D) {
    const I = document.createTreeWalker(D, NodeFilter.SHOW_ELEMENT);
    let te;
    for (; te = I.nextNode(); )
      if (te instanceof HTMLElement) {
        const de = te, [pe, Le] = ee(de);
        (pe || Le) && (de.tabIndex = 0);
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
  }, O = (D) => {
    const I = D.target;
    d && (I == null ? void 0 : I.tagName) === "BUTTON" && j(D);
  }, T = (D) => {
    const I = D.target;
    b && I === D.currentTarget && j(D);
  }, j = (D) => {
    D.preventDefault(), i(0, u = !1);
  };
  let q;
  const ee = (D) => [
    D.scrollWidth > D.clientWidth && ["scroll", "auto"].indexOf(getComputedStyle(D).overflowX) >= 0,
    D.scrollHeight > D.clientHeight && ["scroll", "auto"].indexOf(getComputedStyle(D).overflowY) >= 0
  ];
  let z = P(g, e.classBackdrop);
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
    i(14, e = L(L({}, e), F(D))), i(15, r = ie(e, n)), "open" in D && i(0, u = D.open), "title" in D && i(1, a = D.title), "size" in D && i(2, f = D.size), "placement" in D && i(17, c = D.placement), "autoclose" in D && i(18, d = D.autoclose), "dismissable" in D && i(3, k = D.dismissable), "backdropClass" in D && i(19, g = D.backdropClass), "defaultClass" in D && i(20, m = D.defaultClass), "outsideclose" in D && i(21, b = D.outsideclose), "dialogClass" in D && i(4, _ = D.dialogClass), "$$scope" in D && i(25, o = D.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && w(u ? "open" : "close"), i(5, q = P(m, "uikit-w-full uikit-divide-y", e.class));
  }, e = F(e), [
    u,
    a,
    f,
    k,
    _,
    q,
    y,
    p,
    S,
    O,
    T,
    j,
    z,
    W,
    e,
    r,
    s,
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
class Ld extends re {
  constructor(e) {
    super(), ne(this, e, Pd, Id, J, {
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
      e = M("p"), n = be(i), r = H(), h(e, "class", "uikit-text-base uikit-leading-relaxed uikit-text-gray-500 dark:uikit-text-gray-400");
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
      l && E(e);
    }
  };
}
function Md(t) {
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
          const s = Nr(r, i, o);
          n[o] ? n[o].p(s, l) : (n[o] = zr(s), n[o].c(), n[o].m(e.parentNode, e));
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
function Rr(t) {
  let e, i, n, r;
  return e = new qt({
    props: {
      $$slots: { default: [Nd] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), n = new qt({
    props: {
      color: "alternative",
      $$slots: { default: [zd] },
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
      C(e.$$.fragment, l), C(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && E(i), x(e, l), x(n, l);
    }
  };
}
function Nd(t) {
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
function zd(t) {
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
function Rd(t) {
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
      2 && v(n, 1)) : (n = Rr(r), n.c(), v(n, 1), n.m(e.parentNode, e)) : n && (oe(), C(n, 1, 1, () => {
        n = null;
      }), se());
    },
    i(r) {
      i || (v(n), i = !0);
    },
    o(r) {
      C(n), i = !1;
    },
    d(r) {
      r && E(e), n && n.d(r);
    }
  };
}
function Dd(t) {
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
      footer: [Rd],
      default: [Md]
    },
    $$scope: { ctx: t }
  };
  return (
    /*clickOutsideModal*/
    t[3] !== void 0 && (l.open = /*clickOutsideModal*/
    t[3]), e = new Ld({ props: l }), Ee.push(() => Yt(e, "open", r)), {
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
        C(e.$$.fragment, o), n = !1;
      },
      d(o) {
        x(e, o);
      }
    }
  );
}
function Bd(t, e, i) {
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
class Fd extends re {
  constructor(e) {
    super(), ne(this, e, Bd, Dd, J, {
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
const Jd = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Fd({
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
  Wd as FnAccordion,
  Ud as FnAlert,
  Gd as FnAvatar,
  qd as FnCarousel,
  Hd as FnDeviceMockup,
  Vd as FnDrawer,
  Xd as FnDropdown,
  Jd as FnModal,
  Kd as FnSidebar,
  Yd as FnSpinner
};
