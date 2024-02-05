var jr = Object.defineProperty;
var Wr = (t, e, i) => e in t ? jr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var oi = (t, e, i) => (Wr(t, typeof e != "symbol" ? e + "" : e, i), i);
function le() {
}
const Qt = (t) => t;
function N(t, e) {
  for (const i in e)
    t[i] = e[i];
  return (
    /** @type {T & S} */
    t
  );
}
function Ql(t) {
  return t();
}
function Zi() {
  return /* @__PURE__ */ Object.create(null);
}
function Ce(t) {
  t.forEach(Ql);
}
function he(t) {
  return typeof t == "function";
}
function J(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Lt;
function yt(t, e) {
  return t === e ? !0 : (Lt || (Lt = document.createElement("a")), Lt.href = e, t === Lt.href);
}
function Ur(t) {
  return Object.keys(t).length === 0;
}
function Gr(t, ...e) {
  if (t == null) {
    for (const n of e)
      n(void 0);
    return le;
  }
  const i = t.subscribe(...e);
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
function Yt(t, e, i) {
  t.$$.on_destroy.push(Gr(e, i));
}
function X(t, e, i, n) {
  if (t) {
    const l = Yl(t, e, i, n);
    return t[0](l);
  }
}
function Yl(t, e, i, n) {
  return t[1] && n ? N(i.ctx.slice(), t[1](n(e))) : i.ctx;
}
function K(t, e, i, n) {
  if (t[2] && n) {
    const l = t[2](n(i));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const r = [], o = Math.max(e.dirty.length, l.length);
      for (let s = 0; s < o; s += 1)
        r[s] = e.dirty[s] | l[s];
      return r;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function Q(t, e, i, n, l, r) {
  if (l) {
    const o = Yl(e, i, n, r);
    t.p(o, l);
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
function ne(t, e) {
  const i = {};
  e = new Set(e);
  for (const n in t)
    !e.has(n) && n[0] !== "$" && (i[n] = t[n]);
  return i;
}
function Qe(t) {
  const e = {};
  for (const i in t)
    e[i] = !0;
  return e;
}
function Jl(t, e, i) {
  return t.set(i), e;
}
function je(t) {
  return t && he(t.destroy) ? t.destroy : le;
}
function gi(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const Hr = ["", !0, 1, "true", "contenteditable"], Zl = typeof window < "u";
let Pi = Zl ? () => window.performance.now() : () => Date.now(), Li = Zl ? (t) => requestAnimationFrame(t) : le;
const ut = /* @__PURE__ */ new Set();
function xl(t) {
  ut.forEach((e) => {
    e.c(t) || (ut.delete(e), e.f());
  }), ut.size !== 0 && Li(xl);
}
function Mi(t) {
  let e;
  return ut.size === 0 && Li(xl), {
    promise: new Promise((i) => {
      ut.add(e = { c: t, f: i });
    }),
    abort() {
      ut.delete(e);
    }
  };
}
function R(t, e) {
  t.appendChild(e);
}
function $l(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function Vr(t) {
  const e = M("style");
  return e.textContent = "/* empty */", qr($l(t), e), e.sheet;
}
function qr(t, e) {
  return R(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function E(t, e, i) {
  t.insertBefore(e, i || null);
}
function T(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Fe(t, e) {
  for (let i = 0; i < t.length; i += 1)
    t[i] && t[i].d(e);
}
function M(t) {
  return document.createElement(t);
}
function be(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function me(t) {
  return document.createTextNode(t);
}
function U() {
  return me(" ");
}
function ae() {
  return me("");
}
function D(t, e, i, n) {
  return t.addEventListener(e, i, n), () => t.removeEventListener(e, i, n);
}
function Xr(t) {
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
const Kr = ["width", "height"];
function ue(t, e) {
  const i = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in e)
    e[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = e[n] : n === "__value" ? t.value = t[n] = e[n] : i[n] && i[n].set && Kr.indexOf(n) === -1 ? t[n] = e[n] : h(t, n, e[n]);
}
function Ft(t, e) {
  for (const i in e)
    h(t, i, e[i]);
}
function Qr(t, e) {
  Object.keys(e).forEach((i) => {
    Yr(t, i, e[i]);
  });
}
function Yr(t, e, i) {
  e in t ? t[e] = typeof t[e] == "boolean" && i === "" ? !0 : i : h(t, e, i);
}
function ct(t) {
  return /-/.test(t) ? Qr : ue;
}
function Jr(t) {
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
function Zr(t) {
  return Array.from(t.childNodes);
}
function we(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function xr(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = /** @type {string} */
  e);
}
function $r(t, e, i) {
  ~Hr.indexOf(i) ? xr(t, e) : we(t, e);
}
function er(t, e, { bubbles: i = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: i, cancelable: n });
}
function $i(t, e) {
  return new t(e);
}
const jt = /* @__PURE__ */ new Map();
let Wt = 0;
function eo(t) {
  let e = 5381, i = t.length;
  for (; i--; )
    e = (e << 5) - e ^ t.charCodeAt(i);
  return e >>> 0;
}
function to(t, e) {
  const i = { stylesheet: Vr(e), rules: {} };
  return jt.set(t, i), i;
}
function Ut(t, e, i, n, l, r, o, s = 0) {
  const u = 16.666 / n;
  let a = `{
`;
  for (let b = 0; b <= 1; b += u) {
    const _ = e + (i - e) * r(b);
    a += b * 100 + `%{${o(_, 1 - _)}}
`;
  }
  const f = a + `100% {${o(i, 1 - i)}}
}`, c = `__svelte_${eo(f)}_${s}`, d = $l(t), { stylesheet: k, rules: g } = jt.get(d) || to(d, t);
  g[c] || (g[c] = !0, k.insertRule(`@keyframes ${c} ${f}`, k.cssRules.length));
  const m = t.style.animation || "";
  return t.style.animation = `${m ? `${m}, ` : ""}${c} ${n}ms linear ${l}ms 1 both`, Wt += 1, c;
}
function Gt(t, e) {
  const i = (t.style.animation || "").split(", "), n = i.filter(
    e ? (r) => r.indexOf(e) < 0 : (r) => r.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), l = i.length - n.length;
  l && (t.style.animation = n.join(", "), Wt -= l, Wt || io());
}
function io() {
  Li(() => {
    Wt || (jt.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && T(e);
    }), jt.clear());
  });
}
let vt;
function _t(t) {
  vt = t;
}
function Et() {
  if (!vt)
    throw new Error("Function called outside component initialization");
  return vt;
}
function Ye(t) {
  Et().$$.on_mount.push(t);
}
function no(t) {
  Et().$$.on_destroy.push(t);
}
function Ge() {
  const t = Et();
  return (e, i, { cancelable: n = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const r = er(
        /** @type {string} */
        e,
        i,
        { cancelable: n }
      );
      return l.slice().forEach((o) => {
        o.call(t, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function We(t, e) {
  return Et().$$.context.set(t, e), e;
}
function Re(t) {
  return Et().$$.context.get(t);
}
function W(t, e) {
  const i = t.$$.callbacks[e.type];
  i && i.slice().forEach((n) => n.call(this, e));
}
const st = [], Se = [];
let at = [];
const mi = [], lo = /* @__PURE__ */ Promise.resolve();
let hi = !1;
function ro() {
  hi || (hi = !0, lo.then(tr));
}
function Oe(t) {
  at.push(t);
}
function Jt(t) {
  mi.push(t);
}
const si = /* @__PURE__ */ new Set();
let rt = 0;
function tr() {
  if (rt !== 0)
    return;
  const t = vt;
  do {
    try {
      for (; rt < st.length; ) {
        const e = st[rt];
        rt++, _t(e), oo(e.$$);
      }
    } catch (e) {
      throw st.length = 0, rt = 0, e;
    }
    for (_t(null), st.length = 0, rt = 0; Se.length; )
      Se.pop()();
    for (let e = 0; e < at.length; e += 1) {
      const i = at[e];
      si.has(i) || (si.add(i), i());
    }
    at.length = 0;
  } while (st.length);
  for (; mi.length; )
    mi.pop()();
  hi = !1, si.clear(), _t(t);
}
function oo(t) {
  if (t.fragment !== null) {
    t.update(), Ce(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Oe);
  }
}
function so(t) {
  const e = [], i = [];
  at.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : i.push(n)), i.forEach((n) => n()), at = e;
}
let gt;
function Ni() {
  return gt || (gt = Promise.resolve(), gt.then(() => {
    gt = null;
  })), gt;
}
function Ze(t, e, i) {
  t.dispatchEvent(er(`${e ? "intro" : "outro"}${i}`));
}
const Rt = /* @__PURE__ */ new Set();
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
  ze.r || Ce(ze.c), ze = ze.p;
}
function p(t, e) {
  t && t.i && (Rt.delete(t), t.i(e));
}
function w(t, e, i, n) {
  if (t && t.o) {
    if (Rt.has(t))
      return;
    Rt.add(t), ze.c.push(() => {
      Rt.delete(t), n && (i && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
const zi = { duration: 0 };
function uo(t, e, i) {
  const n = { direction: "in" };
  let l = e(t, i, n), r = !1, o, s, u = 0;
  function a() {
    o && Gt(t, o);
  }
  function f() {
    const {
      delay: d = 0,
      duration: k = 300,
      easing: g = Qt,
      tick: m = le,
      css: b
    } = l || zi;
    b && (o = Ut(t, 0, 1, k, d, g, b, u++)), m(0, 1);
    const _ = Pi() + d, C = _ + k;
    s && s.abort(), r = !0, Oe(() => Ze(t, !0, "start")), s = Mi((v) => {
      if (r) {
        if (v >= C)
          return m(1, 0), Ze(t, !0, "end"), a(), r = !1;
        if (v >= _) {
          const y = g((v - _) / k);
          m(y, 1 - y);
        }
      }
      return r;
    });
  }
  let c = !1;
  return {
    start() {
      c || (c = !0, Gt(t), he(l) ? (l = l(n), Ni().then(f)) : f());
    },
    invalidate() {
      c = !1;
    },
    end() {
      r && (a(), r = !1);
    }
  };
}
function ao(t, e, i) {
  const n = { direction: "out" };
  let l = e(t, i, n), r = !0, o;
  const s = ze;
  s.r += 1;
  let u;
  function a() {
    const {
      delay: f = 0,
      duration: c = 300,
      easing: d = Qt,
      tick: k = le,
      css: g
    } = l || zi;
    g && (o = Ut(t, 1, 0, c, f, d, g));
    const m = Pi() + f, b = m + c;
    Oe(() => Ze(t, !1, "start")), "inert" in t && (u = /** @type {HTMLElement} */
    t.inert, t.inert = !0), Mi((_) => {
      if (r) {
        if (_ >= b)
          return k(0, 1), Ze(t, !1, "end"), --s.r || Ce(s.c), !1;
        if (_ >= m) {
          const C = d((_ - m) / c);
          k(1 - C, C);
        }
      }
      return r;
    });
  }
  return he(l) ? Ni().then(() => {
    l = l(n), a();
  }) : a(), {
    end(f) {
      f && "inert" in t && (t.inert = u), f && l.tick && l.tick(1, 0), r && (o && Gt(t, o), r = !1);
    }
  };
}
function De(t, e, i, n) {
  let r = e(t, i, { direction: "both" }), o = n ? 0 : 1, s = null, u = null, a = null, f;
  function c() {
    a && Gt(t, a);
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
      easing: _ = Qt,
      tick: C = le,
      css: v
    } = r || zi, y = {
      start: Pi() + m,
      b: g
    };
    g || (y.group = ze, ze.r += 1), "inert" in t && (g ? f !== void 0 && (t.inert = f) : (f = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), s || u ? u = y : (v && (c(), a = Ut(t, o, g, b, m, _, v)), g && C(0, 1), s = d(y, b), Oe(() => Ze(t, g, "start")), Mi((S) => {
      if (u && S > u.start && (s = d(u, b), u = null, Ze(t, s.b, "start"), v && (c(), a = Ut(
        t,
        o,
        s.b,
        s.duration,
        0,
        _,
        r.css
      ))), s) {
        if (S >= s.end)
          C(o = s.b, 1 - o), Ze(t, s.b, "end"), u || (s.b ? c() : --s.group.r || Ce(s.group.c)), s = null;
        else if (S >= s.start) {
          const A = S - s.start;
          o = s.a + s.d * _(A / s.duration), C(o, 1 - o);
        }
      }
      return !!(s || u);
    }));
  }
  return {
    run(g) {
      he(r) ? Ni().then(() => {
        r = r({ direction: g ? "in" : "out" }), k(g);
      }) : k(g);
    },
    end() {
      c(), s = u = null;
    }
  };
}
function _e(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function fe(t, e) {
  const i = {}, n = {}, l = { $$scope: 1 };
  let r = t.length;
  for (; r--; ) {
    const o = t[r], s = e[r];
    if (s) {
      for (const u in o)
        u in s || (n[u] = 1);
      for (const u in s)
        l[u] || (i[u] = s[u], l[u] = 1);
      t[r] = s;
    } else
      for (const u in o)
        l[u] = 1;
  }
  for (const o in n)
    o in i || (i[o] = void 0);
  return i;
}
function Pe(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Zt(t, e, i) {
  const n = t.$$.props[e];
  n !== void 0 && (t.$$.bound[n] = i, i(t.$$.ctx[n]));
}
function $(t) {
  t && t.c();
}
function Z(t, e, i) {
  const { fragment: n, after_update: l } = t.$$;
  n && n.m(e, i), Oe(() => {
    const r = t.$$.on_mount.map(Ql).filter(he);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : Ce(r), t.$$.on_mount = [];
  }), l.forEach(Oe);
}
function x(t, e) {
  const i = t.$$;
  i.fragment !== null && (so(i.after_update), Ce(i.on_destroy), i.fragment && i.fragment.d(e), i.on_destroy = i.fragment = null, i.ctx = []);
}
function fo(t, e) {
  t.$$.dirty[0] === -1 && (st.push(t), ro(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ee(t, e, i, n, l, r, o, s = [-1]) {
  const u = vt;
  _t(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: le,
    not_equal: l,
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
    return a.ctx && l(a.ctx[c], a.ctx[c] = g) && (!a.skip_bound && a.bound[c] && a.bound[c](g), f && fo(t, c)), d;
  }) : [], a.update(), f = !0, Ce(a.before_update), a.fragment = n ? n(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = Zr(e.target);
      a.fragment && a.fragment.l(c), c.forEach(T);
    } else
      a.fragment && a.fragment.c();
    e.intro && p(t.$$.fragment), Z(t, e.target, e.anchor), tr();
  }
  _t(u);
}
class te {
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
    x(this, 1), this.$destroy = le;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, i) {
    if (!he(i))
      return le;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(i), () => {
      const l = n.indexOf(i);
      l !== -1 && n.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Ur(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const co = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(co);
const ot = [];
function it(t, e = le) {
  let i;
  const n = /* @__PURE__ */ new Set();
  function l(s) {
    if (J(t, s) && (t = s, i)) {
      const u = !ot.length;
      for (const a of n)
        a[1](), ot.push(a, t);
      if (u) {
        for (let a = 0; a < ot.length; a += 2)
          ot[a][0](ot[a + 1]);
        ot.length = 0;
      }
    }
  }
  function r(s) {
    l(s(t));
  }
  function o(s, u = le) {
    const a = [s, u];
    return n.add(a), n.size === 1 && (i = e(l, r) || le), s(t), () => {
      n.delete(a), n.size === 0 && i && (i(), i = null);
    };
  }
  return { set: l, update: r, subscribe: o };
}
function ir() {
  for (var t = 0, e, i, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (i = nr(e)) && (n && (n += " "), n += i);
  return n;
}
function nr(t) {
  if (typeof t == "string")
    return t;
  for (var e, i = "", n = 0; n < t.length; n++)
    t[n] && (e = nr(t[n])) && (i && (i += " "), i += e);
  return i;
}
var Ri = "-";
function ko(t) {
  var e = mo(t), i = t.conflictingClassGroups, n = t.conflictingClassGroupModifiers, l = n === void 0 ? {} : n;
  function r(s) {
    var u = s.split(Ri);
    return u[0] === "" && u.length !== 1 && u.shift(), lr(u, e) || go(s);
  }
  function o(s, u) {
    var a = i[s] || [];
    return u && l[s] ? [].concat(a, l[s]) : a;
  }
  return {
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  };
}
function lr(t, e) {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  var i = t[0], n = e.nextPart.get(i), l = n ? lr(t.slice(1), n) : void 0;
  if (l)
    return l;
  if (e.validators.length !== 0) {
    var r = t.join(Ri);
    return (o = e.validators.find(function(s) {
      var u = s.validator;
      return u(r);
    })) == null ? void 0 : o.classGroupId;
  }
}
var en = /^\[(.+)\]$/;
function go(t) {
  if (en.test(t)) {
    var e = en.exec(t)[1], i = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}
function mo(t) {
  var e = t.theme, i = t.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, l = bo(Object.entries(t.classGroups), i);
  return l.forEach(function(r) {
    var o = r[0], s = r[1];
    bi(s, n, o, e);
  }), n;
}
function bi(t, e, i, n) {
  t.forEach(function(l) {
    if (typeof l == "string") {
      var r = l === "" ? e : tn(e, l);
      r.classGroupId = i;
      return;
    }
    if (typeof l == "function") {
      if (ho(l)) {
        bi(l(n), e, i, n);
        return;
      }
      e.validators.push({
        validator: l,
        classGroupId: i
      });
      return;
    }
    Object.entries(l).forEach(function(o) {
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
function ho(t) {
  return t.isThemeGetter;
}
function bo(t, e) {
  return e ? t.map(function(i) {
    var n = i[0], l = i[1], r = l.map(function(o) {
      return typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(function(s) {
        var u = s[0], a = s[1];
        return [e + u, a];
      })) : o;
    });
    return [n, r];
  }) : t;
}
function _o(t) {
  if (t < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var e = 0, i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function l(r, o) {
    i.set(r, o), e++, e > t && (e = 0, n = i, i = /* @__PURE__ */ new Map());
  }
  return {
    get: function(o) {
      var s = i.get(o);
      if (s !== void 0)
        return s;
      if ((s = n.get(o)) !== void 0)
        return l(o, s), s;
    },
    set: function(o, s) {
      i.has(o) ? i.set(o, s) : l(o, s);
    }
  };
}
var rr = "!";
function po(t) {
  var e = t.separator || ":", i = e.length === 1, n = e[0], l = e.length;
  return function(o) {
    for (var s = [], u = 0, a = 0, f, c = 0; c < o.length; c++) {
      var d = o[c];
      if (u === 0) {
        if (d === n && (i || o.slice(c, c + l) === e)) {
          s.push(o.slice(a, c)), a = c + l;
          continue;
        }
        if (d === "/") {
          f = c;
          continue;
        }
      }
      d === "[" ? u++ : d === "]" && u--;
    }
    var k = s.length === 0 ? o : o.substring(a), g = k.startsWith(rr), m = g ? k.substring(1) : k, b = f && f > a ? f - a : void 0;
    return {
      modifiers: s,
      hasImportantModifier: g,
      baseClassName: m,
      maybePostfixModifierPosition: b
    };
  };
}
function yo(t) {
  if (t.length <= 1)
    return t;
  var e = [], i = [];
  return t.forEach(function(n) {
    var l = n[0] === "[";
    l ? (e.push.apply(e, i.sort().concat([n])), i = []) : i.push(n);
  }), e.push.apply(e, i.sort()), e;
}
function vo(t) {
  return {
    cache: _o(t.cacheSize),
    splitModifiers: po(t),
    ...ko(t)
  };
}
var wo = /\s+/;
function Co(t, e) {
  var i = e.splitModifiers, n = e.getClassGroupId, l = e.getConflictingClassGroupIds, r = /* @__PURE__ */ new Set();
  return t.trim().split(wo).map(function(o) {
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
    var g = yo(u).join(":"), m = a ? g + rr : g;
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
    return r.has(f) ? !1 : (r.add(f), l(u, a).forEach(function(c) {
      return r.add(s + c);
    }), !0);
  }).reverse().map(function(o) {
    return o.originalClassName;
  }).join(" ");
}
function So() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  var n, l, r, o = s;
  function s(a) {
    var f = e[0], c = e.slice(1), d = c.reduce(function(k, g) {
      return g(k);
    }, f());
    return n = vo(d), l = n.cache.get, r = n.cache.set, o = u, u(a);
  }
  function u(a) {
    var f = l(a);
    if (f)
      return f;
    var c = Co(a, n);
    return r(a, c), c;
  }
  return function() {
    return o(ir.apply(null, arguments));
  };
}
function ge(t) {
  var e = function(n) {
    return n[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var or = /^\[(?:([a-z-]+):)?(.+)\]$/i, To = /^\d+\/\d+$/, Eo = /* @__PURE__ */ new Set(["px", "full", "screen"]), Io = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Oo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ao = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function Me(t) {
  return Je(t) || Eo.has(t) || To.test(t) || _i(t);
}
function _i(t) {
  return nt(t, "length", Ro);
}
function Po(t) {
  return nt(t, "size", sr);
}
function Lo(t) {
  return nt(t, "position", sr);
}
function Mo(t) {
  return nt(t, "url", Do);
}
function Mt(t) {
  return nt(t, "number", Je);
}
function Je(t) {
  return !Number.isNaN(Number(t));
}
function No(t) {
  return t.endsWith("%") && Je(t.slice(0, -1));
}
function mt(t) {
  return nn(t) || nt(t, "number", nn);
}
function ce(t) {
  return or.test(t);
}
function ht() {
  return !0;
}
function Ve(t) {
  return Io.test(t);
}
function zo(t) {
  return nt(t, "", Bo);
}
function nt(t, e, i) {
  var n = or.exec(t);
  return n ? n[1] ? n[1] === e : i(n[2]) : !1;
}
function Ro(t) {
  return Oo.test(t);
}
function sr() {
  return !1;
}
function Do(t) {
  return t.startsWith("url(");
}
function nn(t) {
  return Number.isInteger(Number(t));
}
function Bo(t) {
  return Ao.test(t);
}
function Fo() {
  var t = ge("colors"), e = ge("spacing"), i = ge("blur"), n = ge("brightness"), l = ge("borderColor"), r = ge("borderRadius"), o = ge("borderSpacing"), s = ge("borderWidth"), u = ge("contrast"), a = ge("grayscale"), f = ge("hueRotate"), c = ge("invert"), d = ge("gap"), k = ge("gradientColorStops"), g = ge("gradientColorStopPositions"), m = ge("inset"), b = ge("margin"), _ = ge("opacity"), C = ge("padding"), v = ge("saturate"), y = ge("scale"), S = ge("sepia"), A = ge("skew"), I = ge("space"), j = ge("translate"), V = function() {
    return ["auto", "contain", "none"];
  }, ie = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, P = function() {
    return ["auto", ce, e];
  }, G = function() {
    return [ce, e];
  }, ke = function() {
    return ["", Me];
  }, z = function() {
    return ["auto", Je, ce];
  }, B = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, L = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, re = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, de = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, ye = function() {
    return ["", "0", ce];
  }, Le = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Ie = function() {
    return [Je, Mt];
  }, Ne = function() {
    return [Je, ce];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ht],
      spacing: [Me],
      blur: ["none", "", Ve, ce],
      brightness: Ie(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Ve, ce],
      borderSpacing: G(),
      borderWidth: ke(),
      contrast: Ie(),
      grayscale: ye(),
      hueRotate: Ne(),
      invert: ye(),
      gap: G(),
      gradientColorStops: [t],
      gradientColorStopPositions: [No, _i],
      inset: P(),
      margin: P(),
      opacity: Ie(),
      padding: G(),
      saturate: Ie(),
      scale: Ie(),
      sepia: ye(),
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
        aspect: ["auto", "square", "video", ce]
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
        columns: [Ve]
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
        object: [].concat(B(), [ce])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ie()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ie()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ie()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: V()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": V()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": V()
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
        z: ["auto", mt]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: P()
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
        flex: ["1", "auto", "initial", "none", ce]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ye()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ye()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", mt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ht]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", mt]
        }, ce]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ht]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [mt]
        }, ce]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "auto-cols": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ce]
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
        p: [C]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [C]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [C]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [C]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [C]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [C]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [C]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [C]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [C]
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
        "space-x": [I]
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
        "space-y": [I]
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
        w: ["auto", "min", "max", "fit", ce, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", ce, Me]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Ve]
        }, Ve, ce]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ce, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", ce, Me]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ce, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ve, _i]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Mt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ht]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Je, Mt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ce, Me]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ce]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ce]
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
        "underline-offset": ["auto", ce, Me]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce]
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
        content: ["none", ce]
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
        bg: [].concat(B(), [Lo])
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
        bg: ["auto", "cover", "contain", Po]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Mo]
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
        rounded: [r]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [r]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [r]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [r]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [r]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [r]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [r]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [r]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [r]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [r]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [r]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [r]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [r]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [r]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [r]
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
        border: [].concat(L(), ["hidden"])
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
        divide: L()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [l]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [l]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [l]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [l]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [l]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [l]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [l]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [l]
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
        "outline-offset": [ce, Me]
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
        shadow: ["", "inner", "none", Ve, zo]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ht]
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
        "mix-blend": re()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": re()
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
        "drop-shadow": ["", "none", Ve, ce]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
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
        ease: ["linear", "in", "out", "in-out", ce]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", ce]
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
        scale: [y]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [y]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [y]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [mt, ce]
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
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ce]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce]
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
        "will-change": ["auto", "scroll", "contents", "transform", ce]
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
        stroke: [Me, Mt]
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
var O = /* @__PURE__ */ So(Fo);
function jo(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function ur(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function Wo(t) {
  const e = Math.cos(t * Math.PI * 0.5);
  return Math.abs(e) < 1e-14 ? 1 : 1 - e;
}
function Di(t, { delay: e = 0, duration: i = 400, easing: n = jo, amount: l = 5, opacity: r = 0 } = {}) {
  const o = getComputedStyle(t), s = +o.opacity, u = o.filter === "none" ? "" : o.filter, a = s * (1 - r), [f, c] = gi(l);
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (d, k) => `opacity: ${s - a * k}; filter: ${u} blur(${k * f}${c});`
  };
}
function xt(t, { delay: e = 0, duration: i = 400, easing: n = Qt } = {}) {
  const l = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (r) => `opacity: ${r * l}`
  };
}
function wt(t, { delay: e = 0, duration: i = 400, easing: n = ur, x: l = 0, y: r = 0, opacity: o = 0 } = {}) {
  const s = getComputedStyle(t), u = +s.opacity, a = s.transform === "none" ? "" : s.transform, f = u * (1 - o), [c, d] = gi(l), [k, g] = gi(r);
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (m, b) => `
			transform: ${a} translate(${(1 - m) * c}${d}, ${(1 - m) * k}${g});
			opacity: ${u - f * b}`
  };
}
function Bi(t, { delay: e = 0, duration: i = 400, easing: n = ur, axis: l = "y" } = {}) {
  const r = getComputedStyle(t), o = +r.opacity, s = l === "y" ? "height" : "width", u = parseFloat(r[s]), a = l === "y" ? ["top", "bottom"] : ["left", "right"], f = a.map(
    (_) => `${_[0].toUpperCase()}${_.slice(1)}`
  ), c = parseFloat(r[`padding${f[0]}`]), d = parseFloat(r[`padding${f[1]}`]), k = parseFloat(r[`margin${f[0]}`]), g = parseFloat(r[`margin${f[1]}`]), m = parseFloat(
    r[`border${f[0]}Width`]
  ), b = parseFloat(
    r[`border${f[1]}Width`]
  );
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (_) => `overflow: hidden;opacity: ${Math.min(_ * 20, 1) * o};${s}: ${_ * u}px;padding-${a[0]}: ${_ * c}px;padding-${a[1]}: ${_ * d}px;margin-${a[0]}: ${_ * k}px;margin-${a[1]}: ${_ * g}px;border-${a[0]}-width: ${_ * m}px;border-${a[1]}-width: ${_ * b}px;`
  };
}
const Uo = (t) => ({}), ln = (t) => ({}), Go = (t) => ({}), rn = (t) => ({}), Ho = (t) => ({}), on = (t) => ({});
function Vo(t) {
  let e;
  const i = (
    /*#slots*/
    t[22].arrowdown
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[21],
    ln
  ), l = n || Xo();
  return {
    c() {
      l && l.c();
    },
    m(r, o) {
      l && l.m(r, o), e = !0;
    },
    p(r, o) {
      n && n.p && (!e || o & /*$$scope*/
      2097152) && Q(
        n,
        i,
        r,
        /*$$scope*/
        r[21],
        e ? K(
          i,
          /*$$scope*/
          r[21],
          o,
          Uo
        ) : Y(
          /*$$scope*/
          r[21]
        ),
        ln
      );
    },
    i(r) {
      e || (p(l, r), e = !0);
    },
    o(r) {
      w(l, r), e = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function qo(t) {
  let e;
  const i = (
    /*#slots*/
    t[22].arrowup
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[21],
    rn
  ), l = n || Ko();
  return {
    c() {
      l && l.c();
    },
    m(r, o) {
      l && l.m(r, o), e = !0;
    },
    p(r, o) {
      n && n.p && (!e || o & /*$$scope*/
      2097152) && Q(
        n,
        i,
        r,
        /*$$scope*/
        r[21],
        e ? K(
          i,
          /*$$scope*/
          r[21],
          o,
          Go
        ) : Y(
          /*$$scope*/
          r[21]
        ),
        rn
      );
    },
    i(r) {
      e || (p(l, r), e = !0);
    },
    o(r) {
      w(l, r), e = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Xo(t) {
  let e, i;
  return {
    c() {
      e = be("svg"), i = be("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "m1 1 4 4 4-4"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, l) {
      E(n, e, l), R(e, i);
    },
    p: le,
    d(n) {
      n && T(e);
    }
  };
}
function Ko(t) {
  let e, i;
  return {
    c() {
      e = be("svg"), i = be("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5 5 1 1 5"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, l) {
      E(n, e, l), R(e, i);
    },
    p: le,
    d(n) {
      n && T(e);
    }
  };
}
function Qo(t) {
  let e, i, n;
  const l = (
    /*#slots*/
    t[22].default
  ), r = X(
    l,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = M("div"), i = M("div"), r && r.c(), h(
        i,
        "class",
        /*contentClass*/
        t[3]
      ), h(e, "class", "uikit-hidden");
    },
    m(o, s) {
      E(o, e, s), R(e, i), r && r.m(i, null), n = !0;
    },
    p(o, s) {
      r && r.p && (!n || s & /*$$scope*/
      2097152) && Q(
        r,
        l,
        o,
        /*$$scope*/
        o[21],
        n ? K(
          l,
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
      n || (p(r, o), n = !0);
    },
    o(o) {
      w(r, o), n = !1;
    },
    d(o) {
      o && T(e), r && r.d(o);
    }
  };
}
function Yo(t) {
  let e, i, n, l;
  const r = (
    /*#slots*/
    t[22].default
  ), o = X(
    r,
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
      E(s, e, u), R(e, i), o && o.m(i, null), l = !0;
    },
    p(s, u) {
      t = s, o && o.p && (!l || u & /*$$scope*/
      2097152) && Q(
        o,
        r,
        t,
        /*$$scope*/
        t[21],
        l ? K(
          r,
          /*$$scope*/
          t[21],
          u,
          null
        ) : Y(
          /*$$scope*/
          t[21]
        ),
        null
      ), (!l || u & /*contentClass*/
      8) && h(
        i,
        "class",
        /*contentClass*/
        t[3]
      );
    },
    i(s) {
      l || (p(o, s), s && Oe(() => {
        l && (n || (n = De(
          e,
          /*multiple*/
          t[4],
          /*transitionParams*/
          t[1],
          !0
        )), n.run(1));
      }), l = !0);
    },
    o(s) {
      w(o, s), s && (n || (n = De(
        e,
        /*multiple*/
        t[4],
        /*transitionParams*/
        t[1],
        !1
      )), n.run(0)), l = !1;
    },
    d(s) {
      s && T(e), o && o.d(s), s && n && n.end();
    }
  };
}
function Jo(t) {
  let e, i, n, l, r, o, s, u, a, f, c, d;
  const k = (
    /*#slots*/
    t[22].header
  ), g = X(
    k,
    t,
    /*$$scope*/
    t[21],
    on
  ), m = [qo, Vo], b = [];
  function _(S, A) {
    return (
      /*open*/
      S[0] ? 0 : 1
    );
  }
  l = _(t), r = b[l] = m[l](t);
  const C = [Yo, Qo], v = [];
  function y(S, A) {
    return (
      /*open*/
      S[0] ? 0 : 1
    );
  }
  return s = y(t), u = v[s] = C[s](t), {
    c() {
      e = M("h2"), i = M("button"), g && g.c(), n = U(), r.c(), o = U(), u.c(), a = ae(), h(i, "type", "button"), h(
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
    m(S, A) {
      E(S, e, A), R(e, i), g && g.m(i, null), R(i, n), b[l].m(i, null), E(S, o, A), v[s].m(S, A), E(S, a, A), f = !0, c || (d = D(
        i,
        "click",
        /*handleToggle*/
        t[6]
      ), c = !0);
    },
    p(S, [A]) {
      g && g.p && (!f || A & /*$$scope*/
      2097152) && Q(
        g,
        k,
        S,
        /*$$scope*/
        S[21],
        f ? K(
          k,
          /*$$scope*/
          S[21],
          A,
          Ho
        ) : Y(
          /*$$scope*/
          S[21]
        ),
        on
      );
      let I = l;
      l = _(S), l === I ? b[l].p(S, A) : (oe(), w(b[I], 1, 1, () => {
        b[I] = null;
      }), se(), r = b[l], r ? r.p(S, A) : (r = b[l] = m[l](S), r.c()), p(r, 1), r.m(i, null)), (!f || A & /*buttonClass*/
      4) && h(
        i,
        "class",
        /*buttonClass*/
        S[2]
      ), (!f || A & /*open*/
      1) && h(
        i,
        "aria-expanded",
        /*open*/
        S[0]
      );
      let j = s;
      s = y(S), s === j ? v[s].p(S, A) : (oe(), w(v[j], 1, 1, () => {
        v[j] = null;
      }), se(), u = v[s], u ? u.p(S, A) : (u = v[s] = C[s](S), u.c()), p(u, 1), u.m(a.parentNode, a));
    },
    i(S) {
      f || (p(g, S), p(r), p(u), f = !0);
    },
    o(S) {
      w(g, S), w(r), w(u), f = !1;
    },
    d(S) {
      S && (T(e), T(o), T(a)), g && g.d(S), b[l].d(), v[s].d(S), c = !1, d();
    }
  };
}
function Zo(t, e, i) {
  let n, l, { $$slots: r = {}, $$scope: o } = e, { open: s = !1 } = e, { activeClass: u = void 0 } = e, { inactiveClass: a = void 0 } = e, { defaultClass: f = "uikit-flex uikit-items-center uikit-justify-between uikit-w-full uikit-font-medium uikit-text-left group-first:uikit-rounded-t-xl uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { transitionType: c = "slide" } = e, { transitionParams: d = {} } = e, { paddingFlush: k = "uikit-py-5" } = e, { paddingDefault: g = "uikit-p-5" } = e, { textFlushOpen: m = "uikit-text-gray-900 dark:uikit-text-white" } = e, { textFlushDefault: b = "uikit-text-gray-500 dark:uikit-text-gray-400" } = e, { borderClass: _ = "uikit-border-s uikit-border-e group-first:uikit-border-t" } = e, { borderOpenClass: C = "uikit-border-s uikit-border-e" } = e, { borderBottomClass: v = "uikit-border-b" } = e, { borderSharedClass: y = "uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { classActive: S = void 0 } = e, { classInactive: A = void 0 } = e, I = O(u, S), j = O(a, A);
  const V = (L, re) => {
    switch (c) {
      case "blur":
        return Di(L, re);
      case "fly":
        return wt(L, re);
      case "fade":
        return xt(L, re);
      default:
        return Bi(L, re);
    }
  }, ie = Re("ctx") ?? {}, P = {}, G = ie.selected ?? it();
  Yt(t, G, (L) => i(23, l = L));
  let ke = s;
  s = !1, Ye(() => (ke && Jl(G, l = P, l), G.subscribe((L) => i(0, s = L === P))));
  const z = (L) => G.set(s ? {} : P);
  let B;
  return t.$$set = (L) => {
    i(29, e = N(N({}, e), F(L))), "open" in L && i(0, s = L.open), "activeClass" in L && i(7, u = L.activeClass), "inactiveClass" in L && i(8, a = L.inactiveClass), "defaultClass" in L && i(9, f = L.defaultClass), "transitionType" in L && i(10, c = L.transitionType), "transitionParams" in L && i(1, d = L.transitionParams), "paddingFlush" in L && i(11, k = L.paddingFlush), "paddingDefault" in L && i(12, g = L.paddingDefault), "textFlushOpen" in L && i(13, m = L.textFlushOpen), "textFlushDefault" in L && i(14, b = L.textFlushDefault), "borderClass" in L && i(15, _ = L.borderClass), "borderOpenClass" in L && i(16, C = L.borderOpenClass), "borderBottomClass" in L && i(17, v = L.borderBottomClass), "borderSharedClass" in L && i(18, y = L.borderSharedClass), "classActive" in L && i(19, S = L.classActive), "classInactive" in L && i(20, A = L.classInactive), "$$scope" in L && i(21, o = L.$$scope);
  }, t.$$.update = () => {
    i(2, B = O([
      f,
      ie.flush || _,
      v,
      y,
      ie.flush ? k : g,
      s && (ie.flush ? m : I || ie.activeClass),
      !s && (ie.flush ? b : j || ie.inactiveClass),
      e.class
    ])), t.$$.dirty & /*paddingFlush, paddingDefault, borderOpenClass, borderBottomClass, borderSharedClass*/
    464896 && i(3, n = O([
      ie.flush ? k : g,
      ie.flush ? "" : C,
      v,
      y
    ]));
  }, e = F(e), [
    s,
    d,
    B,
    n,
    V,
    G,
    z,
    u,
    a,
    f,
    c,
    k,
    g,
    m,
    b,
    _,
    C,
    v,
    y,
    S,
    A,
    o,
    r
  ];
}
class xo extends te {
  constructor(e) {
    super(), ee(this, e, Zo, Jo, J, {
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
  let e, i, n, l, r;
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
    a = N(a, u[f]);
  return {
    c() {
      e = M(
        /*tag*/
        t[1]
      ), s && s.c(), ct(
        /*tag*/
        t[1]
      )(e, a);
    },
    m(f, c) {
      E(f, e, c), s && s.m(e, null), t[18](e), n = !0, l || (r = [
        je(i = /*use*/
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
      ], l = !0);
    },
    p(f, c) {
      s && s.p && (!n || c & /*$$scope*/
      2048) && Q(
        s,
        o,
        f,
        /*$$scope*/
        f[11],
        n ? K(
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
      ), ct(
        /*tag*/
        f[1]
      )(e, a = fe(u, [
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
      ])), i && he(i.update) && c & /*options*/
      8 && i.update.call(
        null,
        /*options*/
        f[3]
      );
    },
    i(f) {
      n || (p(s, f), n = !0);
    },
    o(f) {
      w(s, f), n = !1;
    },
    d(f) {
      f && T(e), s && s.d(f), t[18](null), l = !1, Ce(r);
    }
  };
}
function $o(t) {
  let e = (
    /*tag*/
    t[1]
  ), i, n, l = (
    /*tag*/
    t[1] && ui(t)
  );
  return {
    c() {
      l && l.c(), i = ae();
    },
    m(r, o) {
      l && l.m(r, o), E(r, i, o), n = !0;
    },
    p(r, [o]) {
      /*tag*/
      r[1] ? e ? J(
        e,
        /*tag*/
        r[1]
      ) ? (l.d(1), l = ui(r), e = /*tag*/
      r[1], l.c(), l.m(i.parentNode, i)) : l.p(r, o) : (l = ui(r), e = /*tag*/
      r[1], l.c(), l.m(i.parentNode, i)) : e && (l.d(1), l = null, e = /*tag*/
      r[1]);
    },
    i(r) {
      n || (p(l, r), n = !0);
    },
    o(r) {
      w(l, r), n = !1;
    },
    d(r) {
      r && T(i), l && l.d(r);
    }
  };
}
function es(t, e, i) {
  const n = ["tag", "color", "rounded", "border", "shadow", "node", "use", "options", "role"];
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e;
  const s = () => {
  };
  We("background", !0);
  let { tag: u = l.href ? "a" : "div" } = e, { color: a = "default" } = e, { rounded: f = !1 } = e, { border: c = !1 } = e, { shadow: d = !1 } = e, { node: k = void 0 } = e, { use: g = s } = e, { options: m = {} } = e, { role: b = void 0 } = e;
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
  }, C = {
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
  let y;
  function S(P) {
    W.call(this, t, P);
  }
  function A(P) {
    W.call(this, t, P);
  }
  function I(P) {
    W.call(this, t, P);
  }
  function j(P) {
    W.call(this, t, P);
  }
  function V(P) {
    W.call(this, t, P);
  }
  function ie(P) {
    Se[P ? "unshift" : "push"](() => {
      k = P, i(0, k);
    });
  }
  return t.$$set = (P) => {
    i(23, e = N(N({}, e), F(P))), i(6, l = ne(e, n)), "tag" in P && i(1, u = P.tag), "color" in P && i(7, a = P.color), "rounded" in P && i(8, f = P.rounded), "border" in P && i(9, c = P.border), "shadow" in P && i(10, d = P.shadow), "node" in P && i(0, k = P.node), "use" in P && i(2, g = P.use), "options" in P && i(3, m = P.options), "role" in P && i(4, b = P.role), "$$scope" in P && i(11, o = P.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*color*/
    128 && i(7, a = a ?? "default"), t.$$.dirty & /*color*/
    128 && We("color", a), i(5, y = O(_[a], C[a], f && "uikit-rounded-lg", c && "uikit-border", v[a], d && "uikit-shadow-md", e.class));
  }, e = F(e), [
    k,
    u,
    g,
    m,
    b,
    y,
    l,
    a,
    f,
    c,
    d,
    o,
    r,
    S,
    A,
    I,
    j,
    V,
    ie
  ];
}
class lt extends te {
  constructor(e) {
    super(), ee(this, e, es, $o, J, {
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
      e = M("p"), n = me(i), h(e, "class", "mb-2 text-gray-500 dark:text-gray-400");
    },
    m(l, r) {
      E(l, e, r), R(e, n);
    },
    p(l, r) {
      r & /*items*/
      1 && i !== (i = /*desc*/
      l[13] + "") && we(n, i);
    },
    d(l) {
      l && T(e);
    }
  };
}
function ts(t) {
  let e, i = _e(
    /*item*/
    t[10].descriptions
  ), n = [];
  for (let l = 0; l < i.length; l += 1)
    n[l] = an(un(t, i, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = U();
    },
    m(l, r) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, r);
      E(l, e, r);
    },
    p(l, r) {
      if (r & /*items*/
      1) {
        i = _e(
          /*item*/
          l[10].descriptions
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const s = un(l, i, o);
          n[o] ? n[o].p(s, r) : (n[o] = an(s), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = i.length;
      }
    },
    d(l) {
      l && T(e), Fe(n, l);
    }
  };
}
function is(t) {
  let e, i = (
    /*item*/
    (t[10].title || "a title") + ""
  ), n;
  return {
    c() {
      e = M("span"), n = me(i), h(e, "slot", "header");
    },
    m(l, r) {
      E(l, e, r), R(e, n);
    },
    p(l, r) {
      r & /*items*/
      1 && i !== (i = /*item*/
      (l[10].title || "a title") + "") && we(n, i);
    },
    d(l) {
      l && T(e);
    }
  };
}
function fn(t) {
  let e, i;
  return e = new xo({
    props: {
      $$slots: {
        header: [is],
        default: [ts]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*$$scope, items*/
      65537 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function ns(t) {
  let e, i, n = _e(
    /*items*/
    t[0]
  ), l = [];
  for (let o = 0; o < n.length; o += 1)
    l[o] = fn(sn(t, n, o));
  const r = (o) => w(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      e = ae();
    },
    m(o, s) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(o, s);
      E(o, e, s), i = !0;
    },
    p(o, s) {
      if (s & /*items*/
      1) {
        n = _e(
          /*items*/
          o[0]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = sn(o, n, u);
          l[u] ? (l[u].p(a, s), p(l[u], 1)) : (l[u] = fn(a), l[u].c(), p(l[u], 1), l[u].m(e.parentNode, e));
        }
        for (oe(), u = n.length; u < l.length; u += 1)
          r(u);
        se();
      }
    },
    i(o) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          p(l[s]);
        i = !0;
      }
    },
    o(o) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1)
        w(l[s]);
      i = !1;
    },
    d(o) {
      o && T(e), Fe(l, o);
    }
  };
}
function ls(t) {
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
  let l = {
    $$slots: { default: [ns] },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < n.length; r += 1)
    l = N(l, n[r]);
  return e = new lt({ props: l }), {
    c() {
      $(e.$$.fragment);
    },
    m(r, o) {
      Z(e, r, o), i = !0;
    },
    p(r, [o]) {
      const s = o & /*$$restProps, frameClass*/
      6 ? fe(n, [
        o & /*$$restProps*/
        4 && Pe(
          /*$$restProps*/
          r[2]
        ),
        o & /*frameClass*/
        2 && { class: (
          /*frameClass*/
          r[1]
        ) },
        n[2]
      ]) : {};
      o & /*$$scope, items*/
      65537 && (s.$$scope = { dirty: o, ctx: r }), e.$set(s);
    },
    i(r) {
      i || (p(e.$$.fragment, r), i = !0);
    },
    o(r) {
      w(e.$$.fragment, r), i = !1;
    },
    d(r) {
      x(e, r);
    }
  };
}
function rs(t, e, i) {
  const n = ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass", "items"];
  let l = ne(e, n), { multiple: r = !1 } = e, { flush: o = !1 } = e, { activeClass: s = "uikit-bg-gray-100 dark:uikit-bg-gray-800 uikit-text-gray-900 dark:uikit-text-white focus:uikit-ring-4 focus:uikit-ring-gray-200 dark:focus:uikit-ring-gray-800" } = e, { inactiveClass: u = "uikit-text-gray-500 dark:uikit-text-gray-400 hover:uikit-bg-gray-100 hover:dark:uikit-bg-gray-800" } = e, { defaultClass: a = "uikit-text-gray-500 dark:uikit-text-gray-400" } = e, { items: f = [] } = e;
  const c = {
    flush: o,
    activeClass: O(s, e.classActive),
    inactiveClass: O(u, e.classInactive),
    selected: r ? void 0 : it()
  };
  We("ctx", c);
  let d;
  return t.$$set = (k) => {
    i(9, e = N(N({}, e), F(k))), i(2, l = ne(e, n)), "multiple" in k && i(3, r = k.multiple), "flush" in k && i(4, o = k.flush), "activeClass" in k && i(5, s = k.activeClass), "inactiveClass" in k && i(6, u = k.inactiveClass), "defaultClass" in k && i(7, a = k.defaultClass), "items" in k && i(0, f = k.items);
  }, t.$$.update = () => {
    i(1, d = O(a, e.class));
  }, e = F(e), [
    f,
    d,
    l,
    r,
    o,
    s,
    u,
    a
  ];
}
class os extends te {
  constructor(e) {
    super(), ee(this, e, rs, ls, J, {
      multiple: 3,
      flush: 4,
      activeClass: 5,
      inactiveClass: 6,
      defaultClass: 7,
      items: 0
    });
  }
}
const Ok = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new os({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let l in i) {
      let r = i[l];
      n.$on(l, (o) => {
        r(o.detail);
      });
    }
  return n;
}, ss = (t) => ({}), cn = (t) => ({ close: (
  /*close*/
  t[4]
) }), us = (t) => ({}), dn = (t) => ({ close: (
  /*close*/
  t[4]
) });
function as(t) {
  let e, i;
  const n = [
    /*$$restProps*/
    t[5]
  ];
  let l = {
    $$slots: { default: [cs] },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < n.length; r += 1)
    l = N(l, n[r]);
  return e = new lt({ props: l }), {
    c() {
      $(e.$$.fragment);
    },
    m(r, o) {
      Z(e, r, o), i = !0;
    },
    p(r, o) {
      const s = o & /*$$restProps*/
      32 ? fe(n, [Pe(
        /*$$restProps*/
        r[5]
      )]) : {};
      o & /*$$scope*/
      128 && (s.$$scope = { dirty: o, ctx: r }), e.$set(s);
    },
    i(r) {
      i || (p(e.$$.fragment, r), i = !0);
    },
    o(r) {
      w(e.$$.fragment, r), i = !1;
    },
    d(r) {
      x(e, r);
    }
  };
}
function fs(t) {
  let e, i, n = (
    /*open*/
    t[0] && kn(t)
  );
  return {
    c() {
      n && n.c(), e = ae();
    },
    m(l, r) {
      n && n.m(l, r), E(l, e, r), i = !0;
    },
    p(l, r) {
      /*open*/
      l[0] ? n ? (n.p(l, r), r & /*open*/
      1 && p(n, 1)) : (n = kn(l), n.c(), p(n, 1), n.m(e.parentNode, e)) : n && (oe(), w(n, 1, 1, () => {
        n = null;
      }), se());
    },
    i(l) {
      i || (p(n), i = !0);
    },
    o(l) {
      w(n), i = !1;
    },
    d(l) {
      l && T(e), n && n.d(l);
    }
  };
}
function cs(t) {
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
    m(l, r) {
      n && n.m(l, r), e = !0;
    },
    p(l, r) {
      n && n.p && (!e || r & /*$$scope*/
      128) && Q(
        n,
        i,
        l,
        /*$$scope*/
        l[7],
        e ? K(
          i,
          /*$$scope*/
          l[7],
          r,
          ss
        ) : Y(
          /*$$scope*/
          l[7]
        ),
        cn
      );
    },
    i(l) {
      e || (p(n, l), e = !0);
    },
    o(l) {
      w(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function kn(t) {
  let e, i, n, l;
  const r = [
    /*$$restProps*/
    t[5]
  ];
  let o = {
    $$slots: { default: [ds] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < r.length; s += 1)
    o = N(o, r[s]);
  return i = new lt({ props: o }), {
    c() {
      e = M("div"), $(i.$$.fragment);
    },
    m(s, u) {
      E(s, e, u), Z(i, e, null), l = !0;
    },
    p(s, u) {
      t = s;
      const a = u & /*$$restProps*/
      32 ? fe(r, [Pe(
        /*$$restProps*/
        t[5]
      )]) : {};
      u & /*$$scope*/
      128 && (a.$$scope = { dirty: u, ctx: t }), i.$set(a);
    },
    i(s) {
      l || (p(i.$$.fragment, s), s && Oe(() => {
        l && (n || (n = De(
          e,
          /*transition*/
          t[1],
          /*params*/
          t[2],
          !0
        )), n.run(1));
      }), l = !0);
    },
    o(s) {
      w(i.$$.fragment, s), s && (n || (n = De(
        e,
        /*transition*/
        t[1],
        /*params*/
        t[2],
        !1
      )), n.run(0)), l = !1;
    },
    d(s) {
      s && T(e), x(i), s && n && n.end();
    }
  };
}
function ds(t) {
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
    m(l, r) {
      n && n.m(l, r), e = !0;
    },
    p(l, r) {
      n && n.p && (!e || r & /*$$scope*/
      128) && Q(
        n,
        i,
        l,
        /*$$scope*/
        l[7],
        e ? K(
          i,
          /*$$scope*/
          l[7],
          r,
          us
        ) : Y(
          /*$$scope*/
          l[7]
        ),
        dn
      );
    },
    i(l) {
      e || (p(n, l), e = !0);
    },
    o(l) {
      w(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function ks(t) {
  let e, i, n, l;
  const r = [fs, as], o = [];
  function s(u, a) {
    return (
      /*dismissable*/
      u[3] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = r[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), E(u, n, a), l = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), w(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = r[e](u), i.c()), p(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      l || (p(i), l = !0);
    },
    o(u) {
      w(i), l = !1;
    },
    d(u) {
      u && T(n), o[e].d(u);
    }
  };
}
function gs(t, e, i) {
  const n = ["transition", "params", "open", "dismissable"];
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e, { transition: s = xt } = e, { params: u = {} } = e, { open: a = !0 } = e, { dismissable: f = !1 } = e;
  const c = Ge();
  function d(k) {
    k != null && k.stopPropagation && k.stopPropagation(), i(0, a = !1);
  }
  return t.$$set = (k) => {
    e = N(N({}, e), F(k)), i(5, l = ne(e, n)), "transition" in k && i(1, s = k.transition), "params" in k && i(2, u = k.params), "open" in k && i(0, a = k.open), "dismissable" in k && i(3, f = k.dismissable), "$$scope" in k && i(7, o = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && c(a ? "open" : "close");
  }, [a, s, u, f, d, l, r, o];
}
class ms extends te {
  constructor(e) {
    super(), ee(this, e, gs, ks, J, {
      transition: 1,
      params: 2,
      open: 0,
      dismissable: 3
    });
  }
}
const hs = (t) => ({ svgSize: t & /*size*/
4 }), gn = (t) => ({
  svgSize: (
    /*svgSizes*/
    t[5][
      /*size*/
      t[2]
    ]
  )
}), bs = (t) => ({ svgSize: t & /*size*/
4 }), mn = (t) => ({
  svgSize: (
    /*svgSizes*/
    t[5][
      /*size*/
      t[2]
    ]
  )
});
function _s(t) {
  let e, i, n, l, r, o, s = (
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
    c = N(c, f[d]);
  return {
    c() {
      e = M("button"), s && s.c(), i = U(), a && a.c(), ue(e, c);
    },
    m(d, k) {
      E(d, e, k), s && s.m(e, null), R(e, i), a && a.m(e, null), e.autofocus && e.focus(), l = !0, r || (o = D(
        e,
        "click",
        /*click_handler*/
        t[10]
      ), r = !0);
    },
    p(d, k) {
      /*name*/
      d[0] ? s ? s.p(d, k) : (s = hn(d), s.c(), s.m(e, i)) : s && (s.d(1), s = null), a && a.p && (!l || k & /*$$scope, size*/
      260) && Q(
        a,
        u,
        d,
        /*$$scope*/
        d[8],
        l ? K(
          u,
          /*$$scope*/
          d[8],
          k,
          hs
        ) : Y(
          /*$$scope*/
          d[8]
        ),
        gn
      ), ue(e, c = fe(f, [
        { type: "button" },
        k & /*$$restProps*/
        64 && /*$$restProps*/
        d[6],
        (!l || k & /*buttonClass*/
        16) && { class: (
          /*buttonClass*/
          d[4]
        ) },
        (!l || k & /*ariaLabel, name*/
        3 && n !== (n = /*ariaLabel*/
        d[1] ?? /*name*/
        d[0])) && { "aria-label": n }
      ]));
    },
    i(d) {
      l || (p(a, d), l = !0);
    },
    o(d) {
      w(a, d), l = !1;
    },
    d(d) {
      d && T(e), s && s.d(), a && a.d(d), r = !1, o();
    }
  };
}
function ps(t) {
  let e, i, n, l, r = (
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
    a = N(a, u[f]);
  return {
    c() {
      e = M("a"), r && r.c(), i = U(), s && s.c(), ue(e, a);
    },
    m(f, c) {
      E(f, e, c), r && r.m(e, null), R(e, i), s && s.m(e, null), l = !0;
    },
    p(f, c) {
      /*name*/
      f[0] ? r ? r.p(f, c) : (r = bn(f), r.c(), r.m(e, i)) : r && (r.d(1), r = null), s && s.p && (!l || c & /*$$scope, size*/
      260) && Q(
        s,
        o,
        f,
        /*$$scope*/
        f[8],
        l ? K(
          o,
          /*$$scope*/
          f[8],
          c,
          bs
        ) : Y(
          /*$$scope*/
          f[8]
        ),
        mn
      ), ue(e, a = fe(u, [
        (!l || c & /*href*/
        8) && { href: (
          /*href*/
          f[3]
        ) },
        c & /*$$restProps*/
        64 && /*$$restProps*/
        f[6],
        (!l || c & /*buttonClass*/
        16) && { class: (
          /*buttonClass*/
          f[4]
        ) },
        (!l || c & /*ariaLabel, name*/
        3 && n !== (n = /*ariaLabel*/
        f[1] ?? /*name*/
        f[0])) && { "aria-label": n }
      ]));
    },
    i(f) {
      l || (p(s, f), l = !0);
    },
    o(f) {
      w(s, f), l = !1;
    },
    d(f) {
      f && T(e), r && r.d(), s && s.d(f);
    }
  };
}
function hn(t) {
  let e, i;
  return {
    c() {
      e = M("span"), i = me(
        /*name*/
        t[0]
      ), h(e, "class", "uikit-sr-only");
    },
    m(n, l) {
      E(n, e, l), R(e, i);
    },
    p(n, l) {
      l & /*name*/
      1 && we(
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
      e = M("span"), i = me(
        /*name*/
        t[0]
      ), h(e, "class", "uikit-sr-only");
    },
    m(n, l) {
      E(n, e, l), R(e, i);
    },
    p(n, l) {
      l & /*name*/
      1 && we(
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
function ys(t) {
  let e, i, n, l;
  const r = [ps, _s], o = [];
  function s(u, a) {
    return (
      /*href*/
      u[3] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = r[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), E(u, n, a), l = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), w(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = r[e](u), i.c()), p(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      l || (p(i), l = !0);
    },
    o(u) {
      w(i), l = !1;
    },
    d(u) {
      u && T(n), o[e].d(u);
    }
  };
}
function vs(t, e, i) {
  const n = ["color", "name", "ariaLabel", "size", "href"];
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e;
  const s = Re("background");
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
  function _(C) {
    W.call(this, t, C);
  }
  return t.$$set = (C) => {
    i(14, e = N(N({}, e), F(C))), i(6, l = ne(e, n)), "color" in C && i(7, u = C.color), "name" in C && i(0, a = C.name), "ariaLabel" in C && i(1, f = C.ariaLabel), "size" in C && i(2, c = C.size), "href" in C && i(3, d = C.href), "$$scope" in C && i(8, o = C.$$scope);
  }, t.$$.update = () => {
    i(4, m = O(
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
    l,
    u,
    o,
    r,
    _
  ];
}
class ws extends te {
  constructor(e) {
    super(), ee(this, e, vs, ys, J, {
      color: 7,
      name: 0,
      ariaLabel: 1,
      size: 2,
      href: 3
    });
  }
}
function Cs(t) {
  let e, i, n;
  return {
    c() {
      e = be("svg"), i = be("path"), h(i, "fill-rule", "evenodd"), h(i, "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"), h(i, "clip-rule", "evenodd"), h(e, "class", n = /*svgSize*/
      t[4]), h(e, "fill", "currentColor"), h(e, "viewBox", "0 0 20 20"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      E(l, e, r), R(e, i);
    },
    p(l, r) {
      r & /*svgSize*/
      16 && n !== (n = /*svgSize*/
      l[4]) && h(e, "class", n);
    },
    d(l) {
      l && T(e);
    }
  };
}
function Ss(t) {
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
  let l = {
    $$slots: {
      default: [
        Cs,
        ({ svgSize: r }) => ({ 4: r }),
        ({ svgSize: r }) => r ? 16 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < n.length; r += 1)
    l = N(l, n[r]);
  return e = new ws({ props: l }), e.$on(
    "click",
    /*click_handler*/
    t[3]
  ), {
    c() {
      $(e.$$.fragment);
    },
    m(r, o) {
      Z(e, r, o), i = !0;
    },
    p(r, [o]) {
      const s = o & /*name, $$restProps, twMerge, $$props*/
      7 ? fe(n, [
        o & /*name*/
        1 && { name: (
          /*name*/
          r[0]
        ) },
        o & /*$$restProps*/
        2 && Pe(
          /*$$restProps*/
          r[1]
        ),
        o & /*twMerge, $$props*/
        4 && {
          class: O(
            "uikit-ms-auto",
            /*$$props*/
            r[2].class
          )
        }
      ]) : {};
      o & /*$$scope, svgSize*/
      48 && (s.$$scope = { dirty: o, ctx: r }), e.$set(s);
    },
    i(r) {
      i || (p(e.$$.fragment, r), i = !0);
    },
    o(r) {
      w(e.$$.fragment, r), i = !1;
    },
    d(r) {
      x(e, r);
    }
  };
}
function Ts(t, e, i) {
  const n = ["name"];
  let l = ne(e, n), { name: r = "Close" } = e;
  function o(s) {
    W.call(this, t, s);
  }
  return t.$$set = (s) => {
    i(2, e = N(N({}, e), F(s))), i(1, l = ne(e, n)), "name" in s && i(0, r = s.name);
  }, e = F(e), [r, l, e, o];
}
class Fi extends te {
  constructor(e) {
    super(), ee(this, e, Ts, Ss, J, { name: 0 });
  }
}
const Es = (t) => ({ close: t & /*close*/
1048576 }), _n = (t) => ({ close: (
  /*close*/
  t[20]
) }), Is = (t) => ({}), pn = (t) => ({});
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
    m(l, r) {
      n && n.m(l, r), e = !0;
    },
    p(l, r) {
      n && n.p && (!e || r & /*$$scope*/
      262144) && Q(
        n,
        i,
        l,
        /*$$scope*/
        l[18],
        e ? K(
          i,
          /*$$scope*/
          l[18],
          r,
          Is
        ) : Y(
          /*$$scope*/
          l[18]
        ),
        pn
      );
    },
    i(l) {
      e || (p(n, l), e = !0);
    },
    o(l) {
      w(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Os(t) {
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
    m(l, r) {
      n && n.m(l, r), e = !0;
    },
    p(l, r) {
      n && n.p && (!e || r & /*$$scope*/
      262144) && Q(
        n,
        i,
        l,
        /*$$scope*/
        l[18],
        e ? K(
          i,
          /*$$scope*/
          l[18],
          r,
          null
        ) : Y(
          /*$$scope*/
          l[18]
        ),
        null
      );
    },
    i(l) {
      e || (p(n, l), e = !0);
    },
    o(l) {
      w(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function As(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[7].default
  ), l = X(
    n,
    t,
    /*$$scope*/
    t[18],
    null
  );
  return {
    c() {
      e = M("div"), l && l.c();
    },
    m(r, o) {
      E(r, e, o), l && l.m(e, null), i = !0;
    },
    p(r, o) {
      l && l.p && (!i || o & /*$$scope*/
      262144) && Q(
        l,
        n,
        r,
        /*$$scope*/
        r[18],
        i ? K(
          n,
          /*$$scope*/
          r[18],
          o,
          null
        ) : Y(
          /*$$scope*/
          r[18]
        ),
        null
      );
    },
    i(r) {
      i || (p(l, r), i = !0);
    },
    o(r) {
      w(l, r), i = !1;
    },
    d(r) {
      r && T(e), l && l.d(r);
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
  ), l = n || Ps(t);
  return {
    c() {
      l && l.c();
    },
    m(r, o) {
      l && l.m(r, o), e = !0;
    },
    p(r, o) {
      n ? n.p && (!e || o & /*$$scope, close*/
      1310720) && Q(
        n,
        i,
        r,
        /*$$scope*/
        r[18],
        e ? K(
          i,
          /*$$scope*/
          r[18],
          o,
          Es
        ) : Y(
          /*$$scope*/
          r[18]
        ),
        _n
      ) : l && l.p && (!e || o & /*$$restProps, close*/
      1048608) && l.p(r, e ? o : -1);
    },
    i(r) {
      e || (p(l, r), e = !0);
    },
    o(r) {
      w(l, r), e = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function Ps(t) {
  let e, i;
  function n(...l) {
    return (
      /*click_handler_1*/
      t[8](
        /*close*/
        t[20],
        ...l
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
    m(l, r) {
      Z(e, l, r), i = !0;
    },
    p(l, r) {
      t = l;
      const o = {};
      r & /*$$restProps*/
      32 && (o.color = /*$$restProps*/
      t[5].color), e.$set(o);
    },
    i(l) {
      i || (p(e.$$.fragment, l), i = !0);
    },
    o(l) {
      w(e.$$.fragment, l), i = !1;
    },
    d(l) {
      x(e, l);
    }
  };
}
function Ls(t) {
  let e, i, n, l, r, o, s = (
    /*$$slots*/
    t[4].icon && yn(t)
  );
  const u = [As, Os], a = [];
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
      s && s.c(), e = U(), n.c(), l = U(), c && c.c(), r = ae();
    },
    m(d, k) {
      s && s.m(d, k), E(d, e, k), a[i].m(d, k), E(d, l, k), c && c.m(d, k), E(d, r, k), o = !0;
    },
    p(d, k) {
      /*$$slots*/
      d[4].icon ? s ? (s.p(d, k), k & /*$$slots*/
      16 && p(s, 1)) : (s = yn(d), s.c(), p(s, 1), s.m(e.parentNode, e)) : s && (oe(), w(s, 1, 1, () => {
        s = null;
      }), se());
      let g = i;
      i = f(d), i === g ? a[i].p(d, k) : (oe(), w(a[g], 1, 1, () => {
        a[g] = null;
      }), se(), n = a[i], n ? n.p(d, k) : (n = a[i] = u[i](d), n.c()), p(n, 1), n.m(l.parentNode, l)), /*dismissable*/
      d[1] ? c ? (c.p(d, k), k & /*dismissable*/
      2 && p(c, 1)) : (c = vn(d), c.c(), p(c, 1), c.m(r.parentNode, r)) : c && (oe(), w(c, 1, 1, () => {
        c = null;
      }), se());
    },
    i(d) {
      o || (p(s), p(n), p(c), o = !0);
    },
    o(d) {
      w(s), w(n), w(c), o = !1;
    },
    d(d) {
      d && (T(e), T(l), T(r)), s && s.d(d), a[i].d(d), c && c.d(d);
    }
  };
}
function Ms(t) {
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
  let l = {
    $$slots: {
      default: [
        Ls,
        ({ close: r }) => ({ 20: r }),
        ({ close: r }) => r ? 1048576 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < n.length; r += 1)
    l = N(l, n[r]);
  return e = new ms({ props: l }), e.$on(
    "close",
    /*close_handler*/
    t[17]
  ), {
    c() {
      $(e.$$.fragment);
    },
    m(r, o) {
      Z(e, r, o), i = !0;
    },
    p(r, [o]) {
      const s = o & /*dismissable, open, $$restProps, divClass*/
      39 ? fe(n, [
        o & /*dismissable*/
        2 && { dismissable: (
          /*dismissable*/
          r[1]
        ) },
        o & /*open*/
        1 && { open: (
          /*open*/
          r[0]
        ) },
        n[2],
        n[3],
        n[4],
        o & /*$$restProps*/
        32 && Pe(
          /*$$restProps*/
          r[5]
        ),
        o & /*divClass*/
        4 && { class: (
          /*divClass*/
          r[2]
        ) }
      ]) : {};
      o & /*$$scope, $$restProps, close, dismissable, $$slots*/
      1310770 && (s.$$scope = { dirty: o, ctx: r }), e.$set(s);
    },
    i(r) {
      i || (p(e.$$.fragment, r), i = !0);
    },
    o(r) {
      w(e.$$.fragment, r), i = !1;
    },
    d(r) {
      x(e, r);
    }
  };
}
function Ns(t, e, i) {
  const n = ["open", "dismissable", "defaultClass"];
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e;
  const s = Qe(r);
  let { open: u = !0 } = e, { dismissable: a = !1 } = e, { defaultClass: f = "uikit-p-4 uikit-gap-3 uikit-text-sm" } = e, c;
  const d = Ge(), k = (I, j) => {
    d("onEnd"), I(j);
  };
  function g(I) {
    W.call(this, t, I);
  }
  function m(I) {
    W.call(this, t, I);
  }
  function b(I) {
    W.call(this, t, I);
  }
  function _(I) {
    W.call(this, t, I);
  }
  function C(I) {
    W.call(this, t, I);
  }
  function v(I) {
    W.call(this, t, I);
  }
  function y(I) {
    W.call(this, t, I);
  }
  function S(I) {
    W.call(this, t, I);
  }
  function A(I) {
    W.call(this, t, I);
  }
  return t.$$set = (I) => {
    i(19, e = N(N({}, e), F(I))), i(5, l = ne(e, n)), "open" in I && i(0, u = I.open), "dismissable" in I && i(1, a = I.dismissable), "defaultClass" in I && i(6, f = I.defaultClass), "$$scope" in I && i(18, o = I.$$scope);
  }, t.$$.update = () => {
    i(2, c = O(f, (s.icon || a) && "uikit-flex uikit-items-center", e.class));
  }, e = F(e), [
    u,
    a,
    c,
    d,
    s,
    l,
    f,
    r,
    k,
    g,
    m,
    b,
    _,
    C,
    v,
    y,
    S,
    A,
    o
  ];
}
class zs extends te {
  constructor(e) {
    super(), ee(this, e, Ns, Ms, J, { open: 0, dismissable: 1, defaultClass: 6 });
  }
}
const pt = /^[a-z0-9]+(-[a-z0-9]+)*$/, $t = (t, e, i, n = "") => {
  const l = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (l.length < 2 || l.length > 3)
      return null;
    n = l.shift().slice(1);
  }
  if (l.length > 3 || !l.length)
    return null;
  if (l.length > 1) {
    const s = l.pop(), u = l.pop(), a = {
      // Allow provider without '@': "provider:prefix:name"
      provider: l.length > 0 ? l[0] : n,
      prefix: u,
      name: s
    };
    return e && !Dt(a) ? null : a;
  }
  const r = l[0], o = r.split("-");
  if (o.length > 1) {
    const s = {
      provider: n,
      prefix: o.shift(),
      name: o.join("-")
    };
    return e && !Dt(s) ? null : s;
  }
  if (i && n === "") {
    const s = {
      provider: n,
      prefix: "",
      name: r
    };
    return e && !Dt(s, i) ? null : s;
  }
  return null;
}, Dt = (t, e) => t ? !!((t.provider === "" || t.provider.match(pt)) && (e && t.prefix === "" || t.prefix.match(pt)) && t.name.match(pt)) : !1, ar = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Ht = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), ei = Object.freeze({
  ...ar,
  ...Ht
}), pi = Object.freeze({
  ...ei,
  body: "",
  hidden: !1
});
function Rs(t, e) {
  const i = {};
  !t.hFlip != !e.hFlip && (i.hFlip = !0), !t.vFlip != !e.vFlip && (i.vFlip = !0);
  const n = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return n && (i.rotate = n), i;
}
function wn(t, e) {
  const i = Rs(t, e);
  for (const n in pi)
    n in Ht ? n in t && !(n in i) && (i[n] = Ht[n]) : n in e ? i[n] = e[n] : n in t && (i[n] = t[n]);
  return i;
}
function Ds(t, e) {
  const i = t.icons, n = t.aliases || /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  function r(o) {
    if (i[o])
      return l[o] = [];
    if (!(o in l)) {
      l[o] = null;
      const s = n[o] && n[o].parent, u = s && r(s);
      u && (l[o] = [s].concat(u));
    }
    return l[o];
  }
  return (e || Object.keys(i).concat(Object.keys(n))).forEach(r), l;
}
function Bs(t, e, i) {
  const n = t.icons, l = t.aliases || /* @__PURE__ */ Object.create(null);
  let r = {};
  function o(s) {
    r = wn(
      n[s] || l[s],
      r
    );
  }
  return o(e), i.forEach(o), wn(t, r);
}
function fr(t, e) {
  const i = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return i;
  t.not_found instanceof Array && t.not_found.forEach((l) => {
    e(l, null), i.push(l);
  });
  const n = Ds(t);
  for (const l in n) {
    const r = n[l];
    r && (e(l, Bs(t, l, r)), i.push(l));
  }
  return i;
}
const Fs = {
  provider: "",
  aliases: {},
  not_found: {},
  ...ar
};
function ai(t, e) {
  for (const i in e)
    if (i in t && typeof t[i] != typeof e[i])
      return !1;
  return !0;
}
function cr(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !ai(t, Fs))
    return null;
  const i = e.icons;
  for (const l in i) {
    const r = i[l];
    if (!l.match(pt) || typeof r.body != "string" || !ai(
      r,
      pi
    ))
      return null;
  }
  const n = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const l in n) {
    const r = n[l], o = r.parent;
    if (!l.match(pt) || typeof o != "string" || !i[o] && !n[o] || !ai(
      r,
      pi
    ))
      return null;
  }
  return e;
}
const Cn = /* @__PURE__ */ Object.create(null);
function js(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function $e(t, e) {
  const i = Cn[t] || (Cn[t] = /* @__PURE__ */ Object.create(null));
  return i[e] || (i[e] = js(t, e));
}
function ji(t, e) {
  return cr(e) ? fr(e, (i, n) => {
    n ? t.icons[i] = n : t.missing.add(i);
  }) : [];
}
function Ws(t, e, i) {
  try {
    if (typeof i.body == "string")
      return t.icons[e] = { ...i }, !0;
  } catch {
  }
  return !1;
}
let Ct = !1;
function dr(t) {
  return typeof t == "boolean" && (Ct = t), Ct;
}
function Us(t) {
  const e = typeof t == "string" ? $t(t, !0, Ct) : t;
  if (e) {
    const i = $e(e.provider, e.prefix), n = e.name;
    return i.icons[n] || (i.missing.has(n) ? null : void 0);
  }
}
function Gs(t, e) {
  const i = $t(t, !0, Ct);
  if (!i)
    return !1;
  const n = $e(i.provider, i.prefix);
  return Ws(n, i.name, e);
}
function Hs(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), Ct && !e && !t.prefix) {
    let l = !1;
    return cr(t) && (t.prefix = "", fr(t, (r, o) => {
      o && Gs(r, o) && (l = !0);
    })), l;
  }
  const i = t.prefix;
  if (!Dt({
    provider: e,
    prefix: i,
    name: "a"
  }))
    return !1;
  const n = $e(e, i);
  return !!ji(n, t);
}
const kr = Object.freeze({
  width: null,
  height: null
}), gr = Object.freeze({
  // Dimensions
  ...kr,
  // Transformations
  ...Ht
}), Vs = /(-?[0-9.]*[0-9]+[0-9.]*)/g, qs = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Sn(t, e, i) {
  if (e === 1)
    return t;
  if (i = i || 100, typeof t == "number")
    return Math.ceil(t * e * i) / i;
  if (typeof t != "string")
    return t;
  const n = t.split(Vs);
  if (n === null || !n.length)
    return t;
  const l = [];
  let r = n.shift(), o = qs.test(r);
  for (; ; ) {
    if (o) {
      const s = parseFloat(r);
      isNaN(s) ? l.push(r) : l.push(Math.ceil(s * e * i) / i);
    } else
      l.push(r);
    if (r = n.shift(), r === void 0)
      return l.join("");
    o = !o;
  }
}
const Xs = (t) => t === "unset" || t === "undefined" || t === "none";
function Ks(t, e) {
  const i = {
    ...ei,
    ...t
  }, n = {
    ...gr,
    ...e
  }, l = {
    left: i.left,
    top: i.top,
    width: i.width,
    height: i.height
  };
  let r = i.body;
  [i, n].forEach((g) => {
    const m = [], b = g.hFlip, _ = g.vFlip;
    let C = g.rotate;
    b ? _ ? C += 2 : (m.push(
      "translate(" + (l.width + l.left).toString() + " " + (0 - l.top).toString() + ")"
    ), m.push("scale(-1 1)"), l.top = l.left = 0) : _ && (m.push(
      "translate(" + (0 - l.left).toString() + " " + (l.height + l.top).toString() + ")"
    ), m.push("scale(1 -1)"), l.top = l.left = 0);
    let v;
    switch (C < 0 && (C -= Math.floor(C / 4) * 4), C = C % 4, C) {
      case 1:
        v = l.height / 2 + l.top, m.unshift(
          "rotate(90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
      case 2:
        m.unshift(
          "rotate(180 " + (l.width / 2 + l.left).toString() + " " + (l.height / 2 + l.top).toString() + ")"
        );
        break;
      case 3:
        v = l.width / 2 + l.left, m.unshift(
          "rotate(-90 " + v.toString() + " " + v.toString() + ")"
        );
        break;
    }
    C % 2 === 1 && (l.left !== l.top && (v = l.left, l.left = l.top, l.top = v), l.width !== l.height && (v = l.width, l.width = l.height, l.height = v)), m.length && (r = '<g transform="' + m.join(" ") + '">' + r + "</g>");
  });
  const o = n.width, s = n.height, u = l.width, a = l.height;
  let f, c;
  o === null ? (c = s === null ? "1em" : s === "auto" ? a : s, f = Sn(c, u / a)) : (f = o === "auto" ? u : o, c = s === null ? Sn(f, a / u) : s === "auto" ? a : s);
  const d = {}, k = (g, m) => {
    Xs(m) || (d[g] = m.toString());
  };
  return k("width", f), k("height", c), d.viewBox = l.left.toString() + " " + l.top.toString() + " " + u.toString() + " " + a.toString(), {
    attributes: d,
    body: r
  };
}
const Qs = /\sid="(\S+)"/g, Ys = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Js = 0;
function Zs(t, e = Ys) {
  const i = [];
  let n;
  for (; n = Qs.exec(t); )
    i.push(n[1]);
  if (!i.length)
    return t;
  const l = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return i.forEach((r) => {
    const o = typeof e == "function" ? e(r) : e + (Js++).toString(), s = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
      "$1" + o + l + "$3"
    );
  }), t = t.replace(new RegExp(l, "g"), ""), t;
}
const yi = /* @__PURE__ */ Object.create(null);
function xs(t, e) {
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
const Ui = /* @__PURE__ */ Object.create(null), bt = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Bt = [];
for (; bt.length > 0; )
  bt.length === 1 || Math.random() > 0.5 ? Bt.push(bt.shift()) : Bt.push(bt.pop());
Ui[""] = Wi({
  resources: ["https://api.iconify.design"].concat(Bt)
});
function $s(t, e) {
  const i = Wi(e);
  return i === null ? !1 : (Ui[t] = i, !0);
}
function Gi(t) {
  return Ui[t];
}
const eu = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let Tn = eu();
function tu(t, e) {
  const i = Gi(t);
  if (!i)
    return 0;
  let n;
  if (!i.maxURL)
    n = 0;
  else {
    let l = 0;
    i.resources.forEach((o) => {
      l = Math.max(l, o.length);
    });
    const r = e + ".json?icons=";
    n = i.maxURL - l - i.path.length - r.length;
  }
  return n;
}
function iu(t) {
  return t === 404;
}
const nu = (t, e, i) => {
  const n = [], l = tu(t, e), r = "icons";
  let o = {
    type: r,
    provider: t,
    prefix: e,
    icons: []
  }, s = 0;
  return i.forEach((u, a) => {
    s += u.length + 1, s >= l && a > 0 && (n.push(o), o = {
      type: r,
      provider: t,
      prefix: e,
      icons: []
    }, s = u.length), o.icons.push(u);
  }), n.push(o), n;
};
function lu(t) {
  if (typeof t == "string") {
    const e = Gi(t);
    if (e)
      return e.path;
  }
  return "/";
}
const ru = (t, e, i) => {
  if (!Tn) {
    i("abort", 424);
    return;
  }
  let n = lu(e.provider);
  switch (e.type) {
    case "icons": {
      const r = e.prefix, s = e.icons.join(","), u = new URLSearchParams({
        icons: s
      });
      n += r + ".json?" + u.toString();
      break;
    }
    case "custom": {
      const r = e.uri;
      n += r.slice(0, 1) === "/" ? r.slice(1) : r;
      break;
    }
    default:
      i("abort", 400);
      return;
  }
  let l = 503;
  Tn(t + n).then((r) => {
    const o = r.status;
    if (o !== 200) {
      setTimeout(() => {
        i(iu(o) ? "abort" : "next", o);
      });
      return;
    }
    return l = 501, r.json();
  }).then((r) => {
    if (typeof r != "object" || r === null) {
      setTimeout(() => {
        r === 404 ? i("abort", r) : i("next", l);
      });
      return;
    }
    setTimeout(() => {
      i("success", r);
    });
  }).catch(() => {
    i("next", l);
  });
}, ou = {
  prepare: nu,
  send: ru
};
function su(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, i = /* @__PURE__ */ Object.create(null);
  t.sort((l, r) => l.provider !== r.provider ? l.provider.localeCompare(r.provider) : l.prefix !== r.prefix ? l.prefix.localeCompare(r.prefix) : l.name.localeCompare(r.name));
  let n = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((l) => {
    if (n.name === l.name && n.prefix === l.prefix && n.provider === l.provider)
      return;
    n = l;
    const r = l.provider, o = l.prefix, s = l.name, u = i[r] || (i[r] = /* @__PURE__ */ Object.create(null)), a = u[o] || (u[o] = $e(r, o));
    let f;
    s in a.icons ? f = e.loaded : o === "" || a.missing.has(s) ? f = e.missing : f = e.pending;
    const c = {
      provider: r,
      prefix: o,
      name: s
    };
    f.push(c);
  }), e;
}
function mr(t, e) {
  t.forEach((i) => {
    const n = i.loaderCallbacks;
    n && (i.loaderCallbacks = n.filter((l) => l.id !== e));
  });
}
function uu(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let i = !1;
    const n = t.provider, l = t.prefix;
    e.forEach((r) => {
      const o = r.icons, s = o.pending.length;
      o.pending = o.pending.filter((u) => {
        if (u.prefix !== l)
          return !0;
        const a = u.name;
        if (t.icons[a])
          o.loaded.push({
            provider: n,
            prefix: l,
            name: a
          });
        else if (t.missing.has(a))
          o.missing.push({
            provider: n,
            prefix: l,
            name: a
          });
        else
          return i = !0, !0;
        return !1;
      }), o.pending.length !== s && (i || mr([t], r.id), r.callback(
        o.loaded.slice(0),
        o.missing.slice(0),
        o.pending.slice(0),
        r.abort
      ));
    });
  }));
}
let au = 0;
function fu(t, e, i) {
  const n = au++, l = mr.bind(null, i, n);
  if (!e.pending.length)
    return l;
  const r = {
    id: n,
    icons: e,
    callback: t,
    abort: l
  };
  return i.forEach((o) => {
    (o.loaderCallbacks || (o.loaderCallbacks = [])).push(r);
  }), l;
}
function cu(t, e = !0, i = !1) {
  const n = [];
  return t.forEach((l) => {
    const r = typeof l == "string" ? $t(l, e, i) : l;
    r && n.push(r);
  }), n;
}
var du = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function ku(t, e, i, n) {
  const l = t.resources.length, r = t.random ? Math.floor(Math.random() * l) : t.index;
  let o;
  if (t.random) {
    let A = t.resources.slice(0);
    for (o = []; A.length > 1; ) {
      const I = Math.floor(Math.random() * A.length);
      o.push(A[I]), A = A.slice(0, I).concat(A.slice(I + 1));
    }
    o = o.concat(A);
  } else
    o = t.resources.slice(r).concat(t.resources.slice(0, r));
  const s = Date.now();
  let u = "pending", a = 0, f, c = null, d = [], k = [];
  typeof n == "function" && k.push(n);
  function g() {
    c && (clearTimeout(c), c = null);
  }
  function m() {
    u === "pending" && (u = "aborted"), g(), d.forEach((A) => {
      A.status === "pending" && (A.status = "aborted");
    }), d = [];
  }
  function b(A, I) {
    I && (k = []), typeof A == "function" && k.push(A);
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
  function C() {
    u = "failed", k.forEach((A) => {
      A(void 0, f);
    });
  }
  function v() {
    d.forEach((A) => {
      A.status === "pending" && (A.status = "aborted");
    }), d = [];
  }
  function y(A, I, j) {
    const V = I !== "success";
    switch (d = d.filter((ie) => ie !== A), u) {
      case "pending":
        break;
      case "failed":
        if (V || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (I === "abort") {
      f = j, C();
      return;
    }
    if (V) {
      f = j, d.length || (o.length ? S() : C());
      return;
    }
    if (g(), v(), !t.random) {
      const ie = t.resources.indexOf(A.resource);
      ie !== -1 && ie !== t.index && (t.index = ie);
    }
    u = "completed", k.forEach((ie) => {
      ie(j);
    });
  }
  function S() {
    if (u !== "pending")
      return;
    g();
    const A = o.shift();
    if (A === void 0) {
      if (d.length) {
        c = setTimeout(() => {
          g(), u === "pending" && (v(), C());
        }, t.timeout);
        return;
      }
      C();
      return;
    }
    const I = {
      status: "pending",
      resource: A,
      callback: (j, V) => {
        y(I, j, V);
      }
    };
    d.push(I), a++, c = setTimeout(S, t.rotate), i(A, e, I.callback);
  }
  return setTimeout(S), _;
}
function hr(t) {
  const e = {
    ...du,
    ...t
  };
  let i = [];
  function n() {
    i = i.filter((s) => s().status === "pending");
  }
  function l(s, u, a) {
    const f = ku(
      e,
      s,
      u,
      (c, d) => {
        n(), a && a(c, d);
      }
    );
    return i.push(f), f;
  }
  function r(s) {
    return i.find((u) => s(u)) || null;
  }
  return {
    query: l,
    find: r,
    setIndex: (s) => {
      e.index = s;
    },
    getIndex: () => e.index,
    cleanup: n
  };
}
function En() {
}
const fi = /* @__PURE__ */ Object.create(null);
function gu(t) {
  if (!fi[t]) {
    const e = Gi(t);
    if (!e)
      return;
    const i = hr(e), n = {
      config: e,
      redundancy: i
    };
    fi[t] = n;
  }
  return fi[t];
}
function mu(t, e, i) {
  let n, l;
  if (typeof t == "string") {
    const r = vi(t);
    if (!r)
      return i(void 0, 424), En;
    l = r.send;
    const o = gu(t);
    o && (n = o.redundancy);
  } else {
    const r = Wi(t);
    if (r) {
      n = hr(r);
      const o = t.resources ? t.resources[0] : "", s = vi(o);
      s && (l = s.send);
    }
  }
  return !n || !l ? (i(void 0, 424), En) : n.query(e, l, i)().abort;
}
const In = "iconify2", St = "iconify", br = St + "-count", On = St + "-version", _r = 36e5, hu = 168;
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
function An(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function Ci(t, e) {
  return Hi(t, br, e.toString());
}
function Si(t) {
  return parseInt(wi(t, br)) || 0;
}
const ti = {
  local: !0,
  session: !0
}, pr = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Vi = !1;
function bu(t) {
  Vi = t;
}
let Nt = typeof window > "u" ? {} : window;
function yr(t) {
  const e = t + "Storage";
  try {
    if (Nt && Nt[e] && typeof Nt[e].length == "number")
      return Nt[e];
  } catch {
  }
  ti[t] = !1;
}
function vr(t, e) {
  const i = yr(t);
  if (!i)
    return;
  const n = wi(i, On);
  if (n !== In) {
    if (n) {
      const s = Si(i);
      for (let u = 0; u < s; u++)
        An(i, St + u.toString());
    }
    Hi(i, On, In), Ci(i, 0);
    return;
  }
  const l = Math.floor(Date.now() / _r) - hu, r = (s) => {
    const u = St + s.toString(), a = wi(i, u);
    if (typeof a == "string") {
      try {
        const f = JSON.parse(a);
        if (typeof f == "object" && typeof f.cached == "number" && f.cached > l && typeof f.provider == "string" && typeof f.data == "object" && typeof f.data.prefix == "string" && // Valid item: run callback
        e(f, s))
          return !0;
      } catch {
      }
      An(i, u);
    }
  };
  let o = Si(i);
  for (let s = o - 1; s >= 0; s--)
    r(s) || (s === o - 1 ? (o--, Ci(i, o)) : pr[t].add(s));
}
function wr() {
  if (!Vi) {
    bu(!0);
    for (const t in ti)
      vr(t, (e) => {
        const i = e.data, n = e.provider, l = i.prefix, r = $e(
          n,
          l
        );
        if (!ji(r, i).length)
          return !1;
        const o = i.lastModified || -1;
        return r.lastModifiedCached = r.lastModifiedCached ? Math.min(r.lastModifiedCached, o) : o, !0;
      });
  }
}
function _u(t, e) {
  const i = t.lastModifiedCached;
  if (
    // Matches or newer
    i && i >= e
  )
    return i === e;
  if (t.lastModifiedCached = e, i)
    for (const n in ti)
      vr(n, (l) => {
        const r = l.data;
        return l.provider !== t.provider || r.prefix !== t.prefix || r.lastModified === e;
      });
  return !0;
}
function pu(t, e) {
  Vi || wr();
  function i(n) {
    let l;
    if (!ti[n] || !(l = yr(n)))
      return;
    const r = pr[n];
    let o;
    if (r.size)
      r.delete(o = Array.from(r).shift());
    else if (o = Si(l), !Ci(l, o + 1))
      return;
    const s = {
      cached: Math.floor(Date.now() / _r),
      provider: t.provider,
      data: e
    };
    return Hi(
      l,
      St + o.toString(),
      JSON.stringify(s)
    );
  }
  e.lastModified && !_u(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), i("local") || i("session"));
}
function Pn() {
}
function yu(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, uu(t);
  }));
}
function vu(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: i, prefix: n } = t, l = t.iconsToLoad;
    delete t.iconsToLoad;
    let r;
    if (!l || !(r = vi(i)))
      return;
    r.prepare(i, n, l).forEach((s) => {
      mu(i, s, (u) => {
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
            }), pu(t, u);
          } catch (a) {
            console.error(a);
          }
        yu(t);
      });
    });
  }));
}
const wu = (t, e) => {
  const i = cu(t, !0, dr()), n = su(i);
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
  const l = /* @__PURE__ */ Object.create(null), r = [];
  let o, s;
  return n.pending.forEach((u) => {
    const { provider: a, prefix: f } = u;
    if (f === s && a === o)
      return;
    o = a, s = f, r.push($e(a, f));
    const c = l[a] || (l[a] = /* @__PURE__ */ Object.create(null));
    c[f] || (c[f] = []);
  }), n.pending.forEach((u) => {
    const { provider: a, prefix: f, name: c } = u, d = $e(a, f), k = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    k.has(c) || (k.add(c), l[a][f].push(c));
  }), r.forEach((u) => {
    const { provider: a, prefix: f } = u;
    l[a][f].length && vu(u, l[a][f]);
  }), e ? fu(e, n, r) : Pn;
};
function Cu(t, e) {
  const i = {
    ...t
  };
  for (const n in e) {
    const l = e[n], r = typeof l;
    n in kr ? (l === null || l && (r === "string" || r === "number")) && (i[n] = l) : r === typeof i[n] && (i[n] = n === "rotate" ? l % 4 : l);
  }
  return i;
}
const Su = /[\s,]+/;
function Tu(t, e) {
  e.split(Su).forEach((i) => {
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
function Eu(t, e = 0) {
  const i = t.replace(/^-?[0-9.]*/, "");
  function n(l) {
    for (; l < 0; )
      l += 4;
    return l % 4;
  }
  if (i === "") {
    const l = parseInt(t);
    return isNaN(l) ? 0 : n(l);
  } else if (i !== t) {
    let l = 0;
    switch (i) {
      case "%":
        l = 25;
        break;
      case "deg":
        l = 90;
    }
    if (l) {
      let r = parseFloat(t.slice(0, t.length - i.length));
      return isNaN(r) ? 0 : (r = r / l, r % 1 === 0 ? n(r) : 0);
    }
  }
  return e;
}
function Iu(t, e) {
  let i = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in e)
    i += " " + n + '="' + e[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + i + ">" + t + "</svg>";
}
function Ou(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Au(t) {
  return "data:image/svg+xml," + Ou(t);
}
function Pu(t) {
  return 'url("' + Au(t) + '")';
}
const Ln = {
  ...gr,
  inline: !1
}, Lu = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Mu = {
  display: "inline-block"
}, Ti = {
  "background-color": "currentColor"
}, Cr = {
  "background-color": "transparent"
}, Mn = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Nn = {
  "-webkit-mask": Ti,
  mask: Ti,
  background: Cr
};
for (const t in Nn) {
  const e = Nn[t];
  for (const i in Mn)
    e[t + "-" + i] = Mn[i];
}
function Nu(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function zu(t, e) {
  const i = Cu(Ln, e), n = e.mode || "svg", l = n === "svg" ? { ...Lu } : {};
  t.body.indexOf("xlink:") === -1 && delete l["xmlns:xlink"];
  let r = typeof e.style == "string" ? e.style : "";
  for (let _ in e) {
    const C = e[_];
    if (C !== void 0)
      switch (_) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          i[_] = C === !0 || C === "true" || C === 1;
          break;
        case "flip":
          typeof C == "string" && Tu(i, C);
          break;
        case "color":
          r = r + (r.length > 0 && r.trim().slice(-1) !== ";" ? ";" : "") + "color: " + C + "; ";
          break;
        case "rotate":
          typeof C == "string" ? i[_] = Eu(C) : typeof C == "number" && (i[_] = C);
          break;
        case "ariaHidden":
        case "aria-hidden":
          C !== !0 && C !== "true" && delete l["aria-hidden"];
          break;
        default:
          if (_.slice(0, 3) === "on:")
            break;
          Ln[_] === void 0 && (l[_] = C);
      }
  }
  const o = Ks(t, i), s = o.attributes;
  if (i.inline && (r = "vertical-align: -0.125em; " + r), n === "svg") {
    Object.assign(l, s), r !== "" && (l.style = r);
    let _ = 0, C = e.id;
    return typeof C == "string" && (C = C.replace(/-/g, "_")), {
      svg: !0,
      attributes: l,
      body: Zs(o.body, C ? () => C + "ID" + _++ : "iconifySvelte")
    };
  }
  const { body: u, width: a, height: f } = t, c = n === "mask" || (n === "bg" ? !1 : u.indexOf("currentColor") !== -1), d = Iu(u, {
    ...s,
    width: a + "",
    height: f + ""
  }), g = {
    "--svg": Pu(d)
  }, m = (_) => {
    const C = s[_];
    C && (g[_] = Nu(C));
  };
  m("width"), m("height"), Object.assign(g, Mu, c ? Ti : Cr);
  let b = "";
  for (const _ in g)
    b += _ + ": " + g[_] + ";";
  return l.style = b + r, {
    svg: !1,
    attributes: l
  };
}
dr(!0);
xs("", ou);
if (typeof document < "u" && typeof window < "u") {
  wr();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, i = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !Hs(n)) && console.error(i);
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
          const l = e[i];
          if (typeof l != "object" || !l || l.resources === void 0)
            continue;
          $s(i, l) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
function Ru(t, e, i, n, l) {
  function r() {
    e.loading && (e.loading.abort(), e.loading = null);
  }
  if (typeof t == "object" && t !== null && typeof t.body == "string")
    return e.name = "", r(), { data: { ...ei, ...t } };
  let o;
  if (typeof t != "string" || (o = $t(t, !1, !0)) === null)
    return r(), null;
  const s = Us(o);
  if (!s)
    return i && (!e.loading || e.loading.name !== t) && (r(), e.name = "", e.loading = {
      name: t,
      abort: wu([o], n)
    }), null;
  r(), e.name !== t && (e.name = t, l && !e.destroyed && l(t));
  const u = ["iconify"];
  return o.prefix !== "" && u.push("iconify--" + o.prefix), o.provider !== "" && u.push("iconify--" + o.provider), { data: s, classes: u };
}
function Du(t, e) {
  return t ? zu({
    ...ei,
    ...t
  }, e) : null;
}
function zn(t) {
  let e;
  function i(r, o) {
    return (
      /*data*/
      r[0].svg ? Fu : Bu
    );
  }
  let n = i(t), l = n(t);
  return {
    c() {
      l.c(), e = ae();
    },
    m(r, o) {
      l.m(r, o), E(r, e, o);
    },
    p(r, o) {
      n === (n = i(r)) && l ? l.p(r, o) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      r && T(e), l.d(r);
    }
  };
}
function Bu(t) {
  let e, i = [
    /*data*/
    t[0].attributes
  ], n = {};
  for (let l = 0; l < i.length; l += 1)
    n = N(n, i[l]);
  return {
    c() {
      e = M("span"), ue(e, n);
    },
    m(l, r) {
      E(l, e, r);
    },
    p(l, r) {
      ue(e, n = fe(i, [r & /*data*/
      1 && /*data*/
      l[0].attributes]));
    },
    d(l) {
      l && T(e);
    }
  };
}
function Fu(t) {
  let e, i = (
    /*data*/
    t[0].body + ""
  ), n = [
    /*data*/
    t[0].attributes
  ], l = {};
  for (let r = 0; r < n.length; r += 1)
    l = N(l, n[r]);
  return {
    c() {
      e = be("svg"), Ft(e, l);
    },
    m(r, o) {
      E(r, e, o), e.innerHTML = i;
    },
    p(r, o) {
      o & /*data*/
      1 && i !== (i = /*data*/
      r[0].body + "") && (e.innerHTML = i), Ft(e, l = fe(n, [o & /*data*/
      1 && /*data*/
      r[0].attributes]));
    },
    d(r) {
      r && T(e);
    }
  };
}
function ju(t) {
  let e, i = (
    /*data*/
    t[0] && zn(t)
  );
  return {
    c() {
      i && i.c(), e = ae();
    },
    m(n, l) {
      i && i.m(n, l), E(n, e, l);
    },
    p(n, [l]) {
      /*data*/
      n[0] ? i ? i.p(n, l) : (i = zn(n), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null);
    },
    i: le,
    o: le,
    d(n) {
      n && T(e), i && i.d(n);
    }
  };
}
function Wu(t, e, i) {
  const n = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let l = !1, r = 0, o;
  const s = (a) => {
    typeof e.onLoad == "function" && e.onLoad(a), Ge()("load", { icon: a });
  };
  function u() {
    i(3, r++, r);
  }
  return Ye(() => {
    i(2, l = !0);
  }), no(() => {
    i(1, n.destroyed = !0, n), n.loading && (n.loading.abort(), i(1, n.loading = null, n));
  }), t.$$set = (a) => {
    i(6, e = N(N({}, e), F(a)));
  }, t.$$.update = () => {
    {
      const a = Ru(e.icon, n, l, u, s);
      i(0, o = a ? Du(a.data, e) : null), o && a.classes && i(
        0,
        o.attributes.class = (typeof e.class == "string" ? e.class + " " : "") + a.classes.join(" "),
        o
      );
    }
  }, e = F(e), [o, n, l, r];
}
class Uu extends te {
  constructor(e) {
    super(), ee(this, e, Wu, ju, J, {});
  }
}
function Gu(t) {
  let e, i;
  return e = new Uu({
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
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*className*/
      2 && (r.class = O(
        "uikit-h-full uikit-w-8 uikit-text-white uikit-bg-black uikit-opacity-30",
        /*className*/
        n[1]
      )), l & /*name*/
      1 && (r.icon = /*name*/
      n[0]), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Hu(t) {
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
      E(i, e, n), t[5](e);
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
      i && T(e), t[5](null);
    }
  };
}
function Vu(t) {
  let e, i, n, l;
  const r = [Hu, Gu], o = [];
  function s(u, a) {
    return (
      /*uikit*/
      u[2] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = r[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), E(u, n, a), l = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), w(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = r[e](u), i.c()), p(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      l || (p(i), l = !0);
    },
    o(u) {
      w(i), l = !1;
    },
    d(u) {
      u && T(n), o[e].d(u);
    }
  };
}
function qu(t, e, i) {
  let { name: n = "" } = e, { className: l = "" } = e, { uikit: r = !0 } = e, { size: o = "sm" } = e, s;
  function u(a) {
    Se[a ? "unshift" : "push"](() => {
      s = a, i(3, s);
    });
  }
  return t.$$set = (a) => {
    "name" in a && i(0, n = a.name), "className" in a && i(1, l = a.className), "uikit" in a && i(2, r = a.uikit), "size" in a && i(4, o = a.size);
  }, t.$$.update = () => {
    t.$$.dirty & /*icondom, name, size*/
    25 && window && window.uikit_icons && s && window.uikit_icons.FnIcon(s, n, { size: o });
  }, [n, l, r, s, o, u];
}
class It extends te {
  constructor(e) {
    super(), ee(this, e, qu, Vu, J, { name: 0, className: 1, uikit: 2, size: 4 });
  }
}
function Xu(t) {
  let e, i, n, l;
  return {
    c() {
      e = M("span"), i = me(
        /*mode*/
        t[1]
      ), n = U(), l = me(
        /*info*/
        t[2]
      ), h(e, "class", "uikit-font-medium");
    },
    m(r, o) {
      E(r, e, o), R(e, i), E(r, n, o), E(r, l, o);
    },
    p(r, o) {
      o & /*mode*/
      2 && we(
        i,
        /*mode*/
        r[1]
      ), o & /*info*/
      4 && we(
        l,
        /*info*/
        r[2]
      );
    },
    d(r) {
      r && (T(e), T(n), T(l));
    }
  };
}
function Ku(t) {
  let e, i;
  return e = new It({
    props: {
      name: "InfoCircleSolid",
      slot: "icon",
      className: "uikit-w-4 uikit-h-4"
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p: le,
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Qu(t) {
  let e, i;
  return e = new zs({
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
        icon: [Ku],
        default: [Xu]
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
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, [l]) {
      const r = {};
      l & /*open*/
      1 && (r.open = /*open*/
      n[0]), l & /*mode*/
      2 && (r.color = /*modeColor*/
      n[3].get(
        /*mode*/
        n[1]
      )), l & /*$$scope, info, mode*/
      134 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Yu(t, e, i) {
  let { mode: n = "info" } = e, { info: l = "a default message" } = e, { open: r = !0 } = e, { duration: o = 0 } = e, s = /* @__PURE__ */ new Map([
    ["debug", ""],
    ["info", "blue"],
    ["success", "green"],
    ["warn", "yellow"],
    ["danger", "red"],
    ["dark", "dark"]
  ]);
  const u = Ge();
  Ye(() => {
    o > 0 && setTimeout(
      () => {
        i(0, r = !1);
      },
      o
    );
  });
  const a = () => {
    u("onEnd");
  };
  return t.$$set = (f) => {
    "mode" in f && i(1, n = f.mode), "info" in f && i(2, l = f.info), "open" in f && i(0, r = f.open), "duration" in f && i(5, o = f.duration);
  }, [r, n, l, s, u, o, a];
}
class Ju extends te {
  constructor(e) {
    super(), ee(this, e, Yu, Qu, J, { mode: 1, info: 2, open: 0, duration: 5 });
  }
}
const Rn = "uikit_msg_panel";
let ci = 0;
const Ak = (t, e, i) => {
  ci += 1;
  let n = window.document.getElementById(Rn);
  n || (n = window.document.createElement("div"), n.id = Rn, n.style.position = "absolute", n.style.top = "5px", n.style.right = "5px", n.style.display = "flex", n.style.flexDirection = "column", n.style.rowGap = "10px", n.style.zIndex = "100", document.body.appendChild(n)), t || (t = window.document.createElement("div"), n.appendChild(t));
  const l = new Ju({
    target: t,
    props: {
      ...e
    }
  });
  if (l.$on("onEnd", () => {
    l.$destroy(), ci -= 1, ci == 0 && document.body.removeChild(n);
  }), i)
    for (let r in i) {
      let o = i[r];
      l.$on(r, (s) => {
        o(s.detail);
      });
    }
  return l;
};
function Zu(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[8].default
  ), l = X(
    n,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = M("div"), l && l.c(), h(
        e,
        "class",
        /*dotClass*/
        t[0]
      );
    },
    m(r, o) {
      E(r, e, o), l && l.m(e, null), i = !0;
    },
    p(r, [o]) {
      l && l.p && (!i || o & /*$$scope*/
      128) && Q(
        l,
        n,
        r,
        /*$$scope*/
        r[7],
        i ? K(
          n,
          /*$$scope*/
          r[7],
          o,
          null
        ) : Y(
          /*$$scope*/
          r[7]
        ),
        null
      ), (!i || o & /*dotClass*/
      1) && h(
        e,
        "class",
        /*dotClass*/
        r[0]
      );
    },
    i(r) {
      i || (p(l, r), i = !0);
    },
    o(r) {
      w(l, r), i = !1;
    },
    d(r) {
      r && T(e), l && l.d(r);
    }
  };
}
function xu(t, e, i) {
  let { $$slots: n = {}, $$scope: l } = e;
  const r = Qe(n);
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
    i(13, e = N(N({}, e), F(_))), "color" in _ && i(1, o = _.color), "rounded" in _ && i(2, s = _.rounded), "size" in _ && i(3, u = _.size), "border" in _ && i(4, a = _.border), "placement" in _ && i(5, f = _.placement), "offset" in _ && i(6, c = _.offset), "$$scope" in _ && i(7, l = _.$$scope);
  }, t.$$.update = () => {
    i(0, b = O("uikit-flex-shrink-0", s ? "uikit-rounded" : "uikit-rounded-full", a && "uikit-border-2 uikit-border-white dark:uikit-border-gray-800", k[u], d[o], r.default && "uikit-inline-flex uikit-items-center uikit-justify-center", f && "uikit-absolute " + g[f], f && c && m[f], e.class));
  }, e = F(e), [b, o, s, u, a, f, c, l, n];
}
class qi extends te {
  constructor(e) {
    super(), ee(this, e, xu, Zu, J, {
      color: 1,
      rounded: 2,
      size: 3,
      border: 4,
      placement: 5,
      offset: 6
    });
  }
}
function $u(t) {
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
  ], l = {};
  for (let r = 0; r < n.length; r += 1)
    l = N(l, n[r]);
  return {
    c() {
      e = M("img"), ue(e, l);
    },
    m(r, o) {
      E(r, e, o);
    },
    p(r, o) {
      ue(e, l = fe(n, [
        o & /*alt*/
        16 && { alt: (
          /*alt*/
          r[4]
        ) },
        o & /*src*/
        2 && !yt(e.src, i = /*src*/
        r[1]) && { src: i },
        o & /*$$restProps*/
        128 && /*$$restProps*/
        r[7],
        o & /*avatarClass*/
        32 && { class: (
          /*avatarClass*/
          r[5]
        ) }
      ]));
    },
    i: le,
    o: le,
    d(r) {
      r && T(e);
    }
  };
}
function ea(t) {
  let e = (
    /*href*/
    t[2] ? "a" : "div"
  ), i, n, l = (
    /*href*/
    (t[2] ? "a" : "div") && di(t)
  );
  return {
    c() {
      l && l.c(), i = ae();
    },
    m(r, o) {
      l && l.m(r, o), E(r, i, o), n = !0;
    },
    p(r, o) {
      /*href*/
      r[2], e ? J(
        e,
        /*href*/
        r[2] ? "a" : "div"
      ) ? (l.d(1), l = di(r), e = /*href*/
      r[2] ? "a" : "div", l.c(), l.m(i.parentNode, i)) : l.p(r, o) : (l = di(r), e = /*href*/
      r[2] ? "a" : "div", l.c(), l.m(i.parentNode, i));
    },
    i(r) {
      n || (p(l, r), n = !0);
    },
    o(r) {
      w(l, r), n = !1;
    },
    d(r) {
      r && T(i), l && l.d(r);
    }
  };
}
function ta(t) {
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
  ), l = n || na(t);
  return {
    c() {
      l && l.c();
    },
    m(r, o) {
      l && l.m(r, o), e = !0;
    },
    p(r, o) {
      n ? n.p && (!e || o & /*$$scope*/
      2048) && Q(
        n,
        i,
        r,
        /*$$scope*/
        r[11],
        e ? K(
          i,
          /*$$scope*/
          r[11],
          o,
          null
        ) : Y(
          /*$$scope*/
          r[11]
        ),
        null
      ) : l && l.p && (!e || o & /*rounded*/
      8) && l.p(r, e ? o : -1);
    },
    i(r) {
      e || (p(l, r), e = !0);
    },
    o(r) {
      w(l, r), e = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function ia(t) {
  let e, i, n;
  return {
    c() {
      e = M("img"), h(
        e,
        "alt",
        /*alt*/
        t[4]
      ), yt(e.src, i = /*src*/
      t[1]) || h(e, "src", i), h(e, "class", n = /*rounded*/
      t[3] ? "uikit-rounded-full" : "uikit-rounded");
    },
    m(l, r) {
      E(l, e, r);
    },
    p(l, r) {
      r & /*alt*/
      16 && h(
        e,
        "alt",
        /*alt*/
        l[4]
      ), r & /*src*/
      2 && !yt(e.src, i = /*src*/
      l[1]) && h(e, "src", i), r & /*rounded*/
      8 && n !== (n = /*rounded*/
      l[3] ? "uikit-rounded-full" : "uikit-rounded") && h(e, "class", n);
    },
    i: le,
    o: le,
    d(l) {
      l && T(e);
    }
  };
}
function na(t) {
  let e, i, n;
  return {
    c() {
      e = be("svg"), i = be("path"), h(i, "fill-rule", "evenodd"), h(i, "d", "M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"), h(i, "clip-rule", "evenodd"), h(e, "class", n = "uikit-w-full uikit-h-full " + /*rounded*/
      (t[3] ? "uikit-rounded-full" : "uikit-rounded")), h(e, "fill", "currentColor"), h(e, "viewBox", "0 0 16 16"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, r) {
      E(l, e, r), R(e, i);
    },
    p(l, r) {
      r & /*rounded*/
      8 && n !== (n = "uikit-w-full uikit-h-full " + /*rounded*/
      (l[3] ? "uikit-rounded-full" : "uikit-rounded")) && h(e, "class", n);
    },
    d(l) {
      l && T(e);
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
  let l = {};
  for (let r = 0; r < n.length; r += 1)
    l = N(l, n[r]);
  return e = new qi({ props: l }), {
    c() {
      $(e.$$.fragment);
    },
    m(r, o) {
      Z(e, r, o), i = !0;
    },
    p(r, o) {
      const s = o & /*rounded, dot*/
      9 ? fe(n, [
        n[0],
        o & /*rounded*/
        8 && { offset: (
          /*rounded*/
          r[3]
        ) },
        o & /*dot*/
        1 && Pe(
          /*dot*/
          r[0]
        )
      ]) : {};
      e.$set(s);
    },
    i(r) {
      i || (p(e.$$.fragment, r), i = !0);
    },
    o(r) {
      w(e.$$.fragment, r), i = !1;
    },
    d(r) {
      x(e, r);
    }
  };
}
function di(t) {
  let e, i, n, l, r, o;
  const s = [ia, ta], u = [];
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
      class: r = "uikit-relative uikit-flex uikit-justify-center uikit-items-center " + /*avatarClass*/
      t[5]
    }
  ], d = {};
  for (let k = 0; k < c.length; k += 1)
    d = N(d, c[k]);
  return {
    c() {
      e = M(
        /*href*/
        t[2] ? "a" : "div"
      ), n.c(), l = U(), f && f.c(), ct(
        /*href*/
        t[2] ? "a" : "div"
      )(e, d);
    },
    m(k, g) {
      E(k, e, g), u[i].m(e, null), R(e, l), f && f.m(e, null), o = !0;
    },
    p(k, g) {
      let m = i;
      i = a(k), i === m ? u[i].p(k, g) : (oe(), w(u[m], 1, 1, () => {
        u[m] = null;
      }), se(), n = u[i], n ? n.p(k, g) : (n = u[i] = s[i](k), n.c()), p(n, 1), n.m(e, l)), /*dot*/
      k[0] ? f ? (f.p(k, g), g & /*dot*/
      1 && p(f, 1)) : (f = Dn(k), f.c(), p(f, 1), f.m(e, null)) : f && (oe(), w(f, 1, 1, () => {
        f = null;
      }), se()), ct(
        /*href*/
        k[2] ? "a" : "div"
      )(e, d = fe(c, [
        (!o || g & /*href*/
        4) && { href: (
          /*href*/
          k[2]
        ) },
        g & /*$$restProps*/
        128 && /*$$restProps*/
        k[7],
        (!o || g & /*avatarClass*/
        32 && r !== (r = "uikit-relative uikit-flex uikit-justify-center uikit-items-center " + /*avatarClass*/
        k[5])) && { class: r }
      ]));
    },
    i(k) {
      o || (p(n), p(f), o = !0);
    },
    o(k) {
      w(n), w(f), o = !1;
    },
    d(k) {
      k && T(e), u[i].d(), f && f.d();
    }
  };
}
function la(t) {
  let e, i, n, l;
  const r = [ea, $u], o = [];
  function s(u, a) {
    return !/*src*/
    u[1] || /*href*/
    u[2] || /*$$slots*/
    u[6].default || /*dot*/
    u[0] ? 0 : 1;
  }
  return e = s(t), i = o[e] = r[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), E(u, n, a), l = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), w(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = r[e](u), i.c()), p(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      l || (p(i), l = !0);
    },
    o(u) {
      w(i), l = !1;
    },
    d(u) {
      u && T(n), o[e].d(u);
    }
  };
}
function ra(t, e, i) {
  const n = ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"];
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e;
  const s = Qe(r);
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
  return t.$$set = (C) => {
    i(14, e = N(N({}, e), F(C))), i(7, l = ne(e, n)), "src" in C && i(1, u = C.src), "href" in C && i(2, a = C.href), "rounded" in C && i(3, f = C.rounded), "border" in C && i(8, c = C.border), "stacked" in C && i(9, d = C.stacked), "dot" in C && i(0, k = C.dot), "alt" in C && i(4, g = C.alt), "size" in C && i(10, m = C.size), "$$scope" in C && i(11, o = C.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*dot*/
    1 && i(0, k = k && {
      placement: "top-right",
      color: "gray",
      size: "lg",
      ...k
    }), i(5, _ = O(f ? "uikit-rounded-full" : "uikit-rounded", c && "uikit-p-1 uikit-ring-2 uikit-ring-gray-300 dark:uikit-ring-gray-500", b[m], d && "uikit-border-2 -uikit-ms-4 uikit-border-white dark:uikit-border-gray-800", "uikit-bg-gray-100 dark:uikit-bg-gray-600 uikit-text-gray-600 dark:uikit-text-gray-300", e.class));
  }, e = F(e), [
    k,
    u,
    a,
    f,
    g,
    _,
    s,
    l,
    c,
    d,
    m,
    o,
    r
  ];
}
class Sr extends te {
  constructor(e) {
    super(), ee(this, e, ra, la, J, {
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
function oa(t) {
  let e, i;
  const n = [
    /*$$props*/
    t[2]
  ];
  let l = {};
  for (let r = 0; r < n.length; r += 1)
    l = N(l, n[r]);
  return e = new Sr({ props: l }), {
    c() {
      $(e.$$.fragment);
    },
    m(r, o) {
      Z(e, r, o), i = !0;
    },
    p(r, o) {
      const s = o & /*$$props*/
      4 ? fe(n, [Pe(
        /*$$props*/
        r[2]
      )]) : {};
      e.$set(s);
    },
    i(r) {
      i || (p(e.$$.fragment, r), i = !0);
    },
    o(r) {
      w(e.$$.fragment, r), i = !1;
    },
    d(r) {
      x(e, r);
    }
  };
}
function sa(t) {
  let e, i;
  const n = [
    /*$$props*/
    t[2]
  ];
  let l = {
    $$slots: { default: [ua] },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < n.length; r += 1)
    l = N(l, n[r]);
  return e = new Sr({ props: l }), {
    c() {
      $(e.$$.fragment);
    },
    m(r, o) {
      Z(e, r, o), i = !0;
    },
    p(r, o) {
      const s = o & /*$$props*/
      4 ? fe(n, [Pe(
        /*$$props*/
        r[2]
      )]) : {};
      o & /*$$scope, domdefault*/
      34 && (s.$$scope = { dirty: o, ctx: r }), e.$set(s);
    },
    i(r) {
      i || (p(e.$$.fragment, r), i = !0);
    },
    o(r) {
      w(e.$$.fragment, r), i = !1;
    },
    d(r) {
      x(e, r);
    }
  };
}
function ua(t) {
  let e;
  return {
    c() {
      e = M("div");
    },
    m(i, n) {
      E(i, e, n), t[3](e);
    },
    p: le,
    d(i) {
      i && T(e), t[3](null);
    }
  };
}
function aa(t) {
  let e, i, n, l;
  const r = [sa, oa], o = [];
  function s(u, a) {
    return (
      /*slotdefault*/
      u[0] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = r[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), E(u, n, a), l = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), w(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = r[e](u), i.c()), p(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      l || (p(i), l = !0);
    },
    o(u) {
      w(i), l = !1;
    },
    d(u) {
      u && T(n), o[e].d(u);
    }
  };
}
function fa(t, e, i) {
  let { slotdefault: n } = e, l;
  const r = () => {
    n && l && (i(1, l.innerHTML = "", l), l.appendChild(n));
  };
  Ye(() => {
    r();
  });
  function o(s) {
    Se[s ? "unshift" : "push"](() => {
      l = s, i(1, l);
    });
  }
  return t.$$set = (s) => {
    i(2, e = N(N({}, e), F(s))), "slotdefault" in s && i(0, n = s.slotdefault);
  }, t.$$.update = () => {
    t.$$.dirty & /*slotdefault, domdefault*/
    3 && n && l && r();
  }, e = F(e), [n, l, e, o];
}
class ca extends te {
  constructor(e) {
    super(), ee(this, e, fa, aa, J, { slotdefault: 0 });
  }
}
const Pk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new ca({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let l in i) {
      let r = i[l];
      n.$on(l, (o) => {
        r(o.detail);
      });
    }
  return n;
};
function da(t) {
  let e, i, n, l, r, o, s, u, a, f, c, d, k, g, m, b, _, C, v, y;
  const S = (
    /*#slots*/
    t[9].default
  ), A = X(
    S,
    t,
    /*$$scope*/
    t[8],
    null
  );
  return {
    c() {
      e = M("div"), i = M("div"), l = U(), r = M("div"), s = U(), u = M("div"), f = U(), c = M("div"), k = U(), g = M("div"), b = U(), _ = M("div"), A && A.c(), h(i, "class", n = O(
        /*top*/
        t[2],
        /*$$props*/
        t[7].classTop
      )), h(r, "class", o = O(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[7].classLeftTop
      )), h(u, "class", a = O(
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
      )), h(_, "class", C = O(
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
    m(I, j) {
      E(I, e, j), R(e, i), R(e, l), R(e, r), R(e, s), R(e, u), R(e, f), R(e, c), R(e, k), R(e, g), R(e, b), R(e, _), A && A.m(_, null), y = !0;
    },
    p(I, [j]) {
      (!y || j & /*top, $$props*/
      132 && n !== (n = O(
        /*top*/
        I[2],
        /*$$props*/
        I[7].classTop
      ))) && h(i, "class", n), (!y || j & /*leftTop, $$props*/
      136 && o !== (o = O(
        /*leftTop*/
        I[3],
        /*$$props*/
        I[7].classLeftTop
      ))) && h(r, "class", o), (!y || j & /*leftMid, $$props*/
      144 && a !== (a = O(
        /*leftMid*/
        I[4],
        /*$$props*/
        I[7].classLeftMid
      ))) && h(u, "class", a), (!y || j & /*leftBot, $$props*/
      160 && d !== (d = O(
        /*leftBot*/
        I[5],
        /*$$props*/
        I[7].classLeftBot
      ))) && h(c, "class", d), (!y || j & /*right, $$props*/
      192 && m !== (m = O(
        /*right*/
        I[6],
        /*$$props*/
        I[7].classRight
      ))) && h(g, "class", m), A && A.p && (!y || j & /*$$scope*/
      256) && Q(
        A,
        S,
        I,
        /*$$scope*/
        I[8],
        y ? K(
          S,
          /*$$scope*/
          I[8],
          j,
          null
        ) : Y(
          /*$$scope*/
          I[8]
        ),
        null
      ), (!y || j & /*slot, $$props*/
      130 && C !== (C = O(
        /*slot*/
        I[1],
        /*$$props*/
        I[7].classSlot
      ))) && h(_, "class", C), (!y || j & /*div, $$props*/
      129 && v !== (v = O(
        /*div*/
        I[0],
        /*$$props*/
        I[7].class
      ))) && h(e, "class", v);
    },
    i(I) {
      y || (p(A, I), y = !0);
    },
    o(I) {
      w(A, I), y = !1;
    },
    d(I) {
      I && T(e), A && A.d(I);
    }
  };
}
function ka(t, e, i) {
  let { $$slots: n = {}, $$scope: l } = e, { div: r = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-xl uikit-h-[600px] uikit-w-[300px] uikit-shadow-xl" } = e, { slot: o = "uikit-rounded-xl uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: s = "uikit-w-[148px] uikit-h-[18px] uikit-bg-gray-800 uikit-top-0 uikit-rounded-b-[1rem] uikit-left-1/2 -uikit-translate-x-1/2 uikit-absolute" } = e, { leftTop: u = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftMid: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: f = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: c = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (d) => {
    i(7, e = N(N({}, e), F(d))), "div" in d && i(0, r = d.div), "slot" in d && i(1, o = d.slot), "top" in d && i(2, s = d.top), "leftTop" in d && i(3, u = d.leftTop), "leftMid" in d && i(4, a = d.leftMid), "leftBot" in d && i(5, f = d.leftBot), "right" in d && i(6, c = d.right), "$$scope" in d && i(8, l = d.$$scope);
  }, e = F(e), [r, o, s, u, a, f, c, e, l, n];
}
class ga extends te {
  constructor(e) {
    super(), ee(this, e, ka, da, J, {
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
function ma(t) {
  let e, i, n, l, r, o, s, u, a, f, c, d, k, g, m, b, _;
  const C = (
    /*#slots*/
    t[8].default
  ), v = X(
    C,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = M("div"), i = M("div"), l = U(), r = M("div"), s = U(), u = M("div"), f = U(), c = M("div"), k = U(), g = M("div"), v && v.c(), h(i, "class", n = O(
        /*top*/
        t[2],
        /*$$props*/
        t[6].classTop
      )), h(r, "class", o = O(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[6].classLeftTop
      )), h(u, "class", a = O(
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
    m(y, S) {
      E(y, e, S), R(e, i), R(e, l), R(e, r), R(e, s), R(e, u), R(e, f), R(e, c), R(e, k), R(e, g), v && v.m(g, null), _ = !0;
    },
    p(y, [S]) {
      (!_ || S & /*top, $$props*/
      68 && n !== (n = O(
        /*top*/
        y[2],
        /*$$props*/
        y[6].classTop
      ))) && h(i, "class", n), (!_ || S & /*leftTop, $$props*/
      72 && o !== (o = O(
        /*leftTop*/
        y[3],
        /*$$props*/
        y[6].classLeftTop
      ))) && h(r, "class", o), (!_ || S & /*leftBot, $$props*/
      80 && a !== (a = O(
        /*leftBot*/
        y[4],
        /*$$props*/
        y[6].classLeftBot
      ))) && h(u, "class", a), (!_ || S & /*right, $$props*/
      96 && d !== (d = O(
        /*right*/
        y[5],
        /*$$props*/
        y[6].classRight
      ))) && h(c, "class", d), v && v.p && (!_ || S & /*$$scope*/
      128) && Q(
        v,
        C,
        y,
        /*$$scope*/
        y[7],
        _ ? K(
          C,
          /*$$scope*/
          y[7],
          S,
          null
        ) : Y(
          /*$$scope*/
          y[7]
        ),
        null
      ), (!_ || S & /*slot, $$props*/
      66 && m !== (m = O(
        /*slot*/
        y[1],
        /*$$props*/
        y[6].classSlot
      ))) && h(g, "class", m), (!_ || S & /*div, $$props*/
      65 && b !== (b = O(
        /*div*/
        y[0],
        /*$$props*/
        y[6].class
      ))) && h(e, "class", b);
    },
    i(y) {
      _ || (p(v, y), _ = !0);
    },
    o(y) {
      w(v, y), _ = !1;
    },
    d(y) {
      y && T(e), v && v.d(y);
    }
  };
}
function ha(t, e, i) {
  let { $$slots: n = {}, $$scope: l } = e, { div: r = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[600px] uikit-w-[300px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: s = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftTop: u = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -luikit-eft-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = N(N({}, e), F(c))), "div" in c && i(0, r = c.div), "slot" in c && i(1, o = c.slot), "top" in c && i(2, s = c.top), "leftTop" in c && i(3, u = c.leftTop), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, l = c.$$scope);
  }, e = F(e), [r, o, s, u, a, f, e, l, n];
}
class ba extends te {
  constructor(e) {
    super(), ee(this, e, ha, ma, J, {
      div: 0,
      slot: 1,
      top: 2,
      leftTop: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function _a(t) {
  let e, i, n, l, r, o, s, u, a, f, c;
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
      e = M("div"), i = M("div"), k && k.c(), r = U(), o = M("div"), u = U(), a = M("div"), h(i, "class", n = O(
        /*inner*/
        t[0],
        /*$$props*/
        t[4].classInner
      )), h(e, "class", l = O(
        /*div*/
        t[3],
        /*$$props*/
        t[4].class
      )), h(o, "class", s = O(
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
      E(g, e, m), R(e, i), k && k.m(i, null), E(g, r, m), E(g, o, m), E(g, u, m), E(g, a, m), c = !0;
    },
    p(g, [m]) {
      k && k.p && (!c || m & /*$$scope*/
      32) && Q(
        k,
        d,
        g,
        /*$$scope*/
        g[5],
        c ? K(
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
      17 && n !== (n = O(
        /*inner*/
        g[0],
        /*$$props*/
        g[4].classInner
      ))) && h(i, "class", n), (!c || m & /*div, $$props*/
      24 && l !== (l = O(
        /*div*/
        g[3],
        /*$$props*/
        g[4].class
      ))) && h(e, "class", l), (!c || m & /*bot, $$props*/
      18 && s !== (s = O(
        /*bot*/
        g[1],
        /*$$props*/
        g[4].classBot
      ))) && h(o, "class", s), (!c || m & /*botUnder, $$props*/
      20 && f !== (f = O(
        /*botUnder*/
        g[2],
        /*$$props*/
        g[4].classBotUnder
      ))) && h(a, "class", f);
    },
    i(g) {
      c || (p(k, g), c = !0);
    },
    o(g) {
      w(k, g), c = !1;
    },
    d(g) {
      g && (T(e), T(r), T(o), T(u), T(a)), k && k.d(g);
    }
  };
}
function pa(t, e, i) {
  let { $$slots: n = {}, $$scope: l } = e, { inner: r = "uikit-rounded-xl uikit-overflow-hidden uikit-h-[140px] md:uikit-h-[262px]" } = e, { bot: o = "uikit-relative uikit-mx-auto uikit-bg-gray-900 dark:uikit-bg-gray-700 uikit-rounded-b-xl uikit-h-[24px] uikit-max-w-[301px] md:uikit-h-[42px] md:uikit-max-w-[512px]" } = e, { botUnder: s = "uikit-relative uikit-mx-auto uikit-bg-gray-800 uikit-rounded-b-xl uikit-h-[55px] uikit-max-w-[83px] md:uikit-h-[95px] md:uikit-max-w-[142px]" } = e, { div: u = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[16px] uikit-rounded-t-xl uikit-h-[172px] uikit-max-w-[301px] md:uikit-h-[294px] md:uikit-max-w-[512px]" } = e;
  return t.$$set = (a) => {
    i(4, e = N(N({}, e), F(a))), "inner" in a && i(0, r = a.inner), "bot" in a && i(1, o = a.bot), "botUnder" in a && i(2, s = a.botUnder), "div" in a && i(3, u = a.div), "$$scope" in a && i(5, l = a.$$scope);
  }, e = F(e), [r, o, s, u, e, l, n];
}
class ya extends te {
  constructor(e) {
    super(), ee(this, e, pa, _a, J, { inner: 0, bot: 1, botUnder: 2, div: 3 });
  }
}
function va(t) {
  let e, i, n, l, r, o, s, u, a, f, c, d, k, g, m, b, _;
  const C = (
    /*#slots*/
    t[8].default
  ), v = X(
    C,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = M("div"), i = M("div"), l = U(), r = M("div"), s = U(), u = M("div"), f = U(), c = M("div"), k = U(), g = M("div"), v && v.c(), h(i, "class", n = O(
        /*top*/
        t[2],
        /*$$props*/
        t[6].classTop
      )), h(r, "class", o = O(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[6].classLeftTop
      )), h(u, "class", a = O(
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
    m(y, S) {
      E(y, e, S), R(e, i), R(e, l), R(e, r), R(e, s), R(e, u), R(e, f), R(e, c), R(e, k), R(e, g), v && v.m(g, null), _ = !0;
    },
    p(y, [S]) {
      (!_ || S & /*top, $$props*/
      68 && n !== (n = O(
        /*top*/
        y[2],
        /*$$props*/
        y[6].classTop
      ))) && h(i, "class", n), (!_ || S & /*leftTop, $$props*/
      72 && o !== (o = O(
        /*leftTop*/
        y[3],
        /*$$props*/
        y[6].classLeftTop
      ))) && h(r, "class", o), (!_ || S & /*leftBot, $$props*/
      80 && a !== (a = O(
        /*leftBot*/
        y[4],
        /*$$props*/
        y[6].classLeftBot
      ))) && h(u, "class", a), (!_ || S & /*right, $$props*/
      96 && d !== (d = O(
        /*right*/
        y[5],
        /*$$props*/
        y[6].classRight
      ))) && h(c, "class", d), v && v.p && (!_ || S & /*$$scope*/
      128) && Q(
        v,
        C,
        y,
        /*$$scope*/
        y[7],
        _ ? K(
          C,
          /*$$scope*/
          y[7],
          S,
          null
        ) : Y(
          /*$$scope*/
          y[7]
        ),
        null
      ), (!_ || S & /*slot, $$props*/
      66 && m !== (m = O(
        /*slot*/
        y[1],
        /*$$props*/
        y[6].classSlot
      ))) && h(g, "class", m), (!_ || S & /*div, $$props*/
      65 && b !== (b = O(
        /*div*/
        y[0],
        /*$$props*/
        y[6].class
      ))) && h(e, "class", b);
    },
    i(y) {
      _ || (p(v, y), _ = !0);
    },
    o(y) {
      w(v, y), _ = !1;
    },
    d(y) {
      y && T(e), v && v.d(y);
    }
  };
}
function wa(t, e, i) {
  let { $$slots: n = {}, $$scope: l } = e, { div: r = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[600px] uikit-w-[300px] uikit-shadow-xl" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: s = "uikit-w-[148px] uikit-h-[18px] uikit-bg-gray-800 uikit-top-0 uikit-rounded-b-[1rem] uikit-left-1/2 -uikit-translate-x-1/2 uikit-absolute" } = e, { leftTop: u = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = N(N({}, e), F(c))), "div" in c && i(0, r = c.div), "slot" in c && i(1, o = c.slot), "top" in c && i(2, s = c.top), "leftTop" in c && i(3, u = c.leftTop), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, l = c.$$scope);
  }, e = F(e), [r, o, s, u, a, f, e, l, n];
}
class Ca extends te {
  constructor(e) {
    super(), ee(this, e, wa, va, J, {
      div: 0,
      slot: 1,
      top: 2,
      leftTop: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function Sa(t) {
  let e, i, n, l, r, o, s, u, a, f;
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
      e = M("div"), i = M("div"), d && d.c(), r = U(), o = M("div"), s = M("div"), h(i, "class", n = O(
        /*inner*/
        t[1],
        /*$$props*/
        t[4].classInner
      )), h(e, "class", l = O(
        /*div*/
        t[0],
        /*$$props*/
        t[4].class
      )), h(s, "class", u = O(
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
      E(k, e, g), R(e, i), d && d.m(i, null), E(k, r, g), E(k, o, g), R(o, s), f = !0;
    },
    p(k, [g]) {
      d && d.p && (!f || g & /*$$scope*/
      32) && Q(
        d,
        c,
        k,
        /*$$scope*/
        k[5],
        f ? K(
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
      18 && n !== (n = O(
        /*inner*/
        k[1],
        /*$$props*/
        k[4].classInner
      ))) && h(i, "class", n), (!f || g & /*div, $$props*/
      17 && l !== (l = O(
        /*div*/
        k[0],
        /*$$props*/
        k[4].class
      ))) && h(e, "class", l), (!f || g & /*botCen, $$props*/
      24 && u !== (u = O(
        /*botCen*/
        k[3],
        /*$$props*/
        k[4].classBotCen
      ))) && h(s, "class", u), (!f || g & /*bot, $$props*/
      20 && a !== (a = O(
        /*bot*/
        k[2],
        /*$$props*/
        k[4].classBot
      ))) && h(o, "class", a);
    },
    i(k) {
      f || (p(d, k), f = !0);
    },
    o(k) {
      w(d, k), f = !1;
    },
    d(k) {
      k && (T(e), T(r), T(o)), d && d.d(k);
    }
  };
}
function Ta(t, e, i) {
  let { $$slots: n = {}, $$scope: l } = e, { div: r = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[8px] uikit-rounded-t-xl uikit-h-[172px] uikit-max-w-[301px] md:uikit-h-[294px] md:uikit-max-w-[512px]" } = e, { inner: o = "uikit-rounded-lg uikit-overflow-hidden uikit-h-[156px] md:uikit-h-[278px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { bot: s = "uikit-relative uikit-mx-auto uikit-bg-gray-900 dark:uikit-bg-gray-700 uikit-rounded-b-xl uikit-rounded-t-sm uikit-h-[17px] uikit-max-w-[351px] md:uikit-h-[21px] md:uikit-max-w-[597px]" } = e, { botCen: u = "uikit-absolute uikit-left-1/2 uikit-top-0 -uikit-translate-x-1/2 uikit-rounded-b-xl uikit-w-[56px] uikit-h-[5px] md:uikit-w-[96px] md:uikit-h-[8px] uikit-bg-gray-800" } = e;
  return t.$$set = (a) => {
    i(4, e = N(N({}, e), F(a))), "div" in a && i(0, r = a.div), "inner" in a && i(1, o = a.inner), "bot" in a && i(2, s = a.bot), "botCen" in a && i(3, u = a.botCen), "$$scope" in a && i(5, l = a.$$scope);
  }, e = F(e), [r, o, s, u, e, l, n];
}
class Ea extends te {
  constructor(e) {
    super(), ee(this, e, Ta, Sa, J, { div: 0, inner: 1, bot: 2, botCen: 3 });
  }
}
function Ia(t) {
  let e, i, n, l, r, o, s, u, a, f, c, d, k, g, m, b, _;
  const C = (
    /*#slots*/
    t[8].default
  ), v = X(
    C,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = M("div"), n = U(), l = M("div"), r = M("div"), s = U(), u = M("div"), f = U(), c = M("div"), v && v.c(), g = U(), m = M("div"), h(e, "class", i = O(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      )), h(r, "class", o = O(
        /*rightTop*/
        t[2],
        /*$$props*/
        t[6].classRightTop
      )), h(u, "class", a = O(
        /*rightBot*/
        t[3],
        /*$$props*/
        t[6].classRightBot
      )), h(c, "class", d = O(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(l, "class", k = O(
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
    m(y, S) {
      E(y, e, S), E(y, n, S), E(y, l, S), R(l, r), R(l, s), R(l, u), R(l, f), R(l, c), v && v.m(c, null), E(y, g, S), E(y, m, S), _ = !0;
    },
    p(y, [S]) {
      (!_ || S & /*div, $$props*/
      65 && i !== (i = O(
        /*div*/
        y[0],
        /*$$props*/
        y[6].class
      ))) && h(e, "class", i), (!_ || S & /*rightTop, $$props*/
      68 && o !== (o = O(
        /*rightTop*/
        y[2],
        /*$$props*/
        y[6].classRightTop
      ))) && h(r, "class", o), (!_ || S & /*rightBot, $$props*/
      72 && a !== (a = O(
        /*rightBot*/
        y[3],
        /*$$props*/
        y[6].classRightBot
      ))) && h(u, "class", a), v && v.p && (!_ || S & /*$$scope*/
      128) && Q(
        v,
        C,
        y,
        /*$$scope*/
        y[7],
        _ ? K(
          C,
          /*$$scope*/
          y[7],
          S,
          null
        ) : Y(
          /*$$scope*/
          y[7]
        ),
        null
      ), (!_ || S & /*slot, $$props*/
      66 && d !== (d = O(
        /*slot*/
        y[1],
        /*$$props*/
        y[6].classSlot
      ))) && h(c, "class", d), (!_ || S & /*top, $$props*/
      80 && k !== (k = O(
        /*top*/
        y[4],
        /*$$props*/
        y[6].classTop
      ))) && h(l, "class", k), (!_ || S & /*bot, $$props*/
      96 && b !== (b = O(
        /*bot*/
        y[5],
        /*$$props*/
        y[6].classBot
      ))) && h(m, "class", b);
    },
    i(y) {
      _ || (p(v, y), _ = !0);
    },
    o(y) {
      w(v, y), _ = !1;
    },
    d(y) {
      y && (T(e), T(n), T(l), T(g), T(m)), v && v.d(y);
    }
  };
}
function Oa(t, e, i) {
  let { $$slots: n = {}, $$scope: l } = e, { div: r = "uikit-relative uikit-mx-auto uikit-bg-gray-800 dark:uikit-bg-gray-700 uikit-rounded-t-[2.5rem] uikit-h-[63px] uikit-max-w-[133px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-h-[193px] uikit-w-[188px]" } = e, { rightTop: s = "uikit-h-[41px] uikit-w-[6px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[16px] uikit-top-[40px] uikit-rounded-r-lg" } = e, { rightBot: u = "uikit-h-[32px] uikit-w-[6px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[16px] uikit-top-[88px] uikit-rounded-r-lg" } = e, { top: a = "uikit-relative uikit-mx-auto uikit-border-gray-900 dark:uikit-bg-gray-800 dark:uikit-border-gray-800 uikit-border-[10px] uikit-rounded-[2.5rem] uikit-h-[213px] uikit-w-[208px]" } = e, { bot: f = "uikit-relative uikit-mx-auto uikit-bg-gray-800 dark:uikit-bg-gray-700 uikit-rounded-b-[2.5rem] uikit-h-[63px] uikit-max-w-[133px]" } = e;
  return t.$$set = (c) => {
    i(6, e = N(N({}, e), F(c))), "div" in c && i(0, r = c.div), "slot" in c && i(1, o = c.slot), "rightTop" in c && i(2, s = c.rightTop), "rightBot" in c && i(3, u = c.rightBot), "top" in c && i(4, a = c.top), "bot" in c && i(5, f = c.bot), "$$scope" in c && i(7, l = c.$$scope);
  }, e = F(e), [r, o, s, u, a, f, e, l, n];
}
class Aa extends te {
  constructor(e) {
    super(), ee(this, e, Oa, Ia, J, {
      div: 0,
      slot: 1,
      rightTop: 2,
      rightBot: 3,
      top: 4,
      bot: 5
    });
  }
}
function Pa(t) {
  let e, i, n, l, r, o, s, u, a, f, c, d, k, g, m, b, _;
  const C = (
    /*#slots*/
    t[8].default
  ), v = X(
    C,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = M("div"), i = M("div"), l = U(), r = M("div"), s = U(), u = M("div"), f = U(), c = M("div"), k = U(), g = M("div"), v && v.c(), h(i, "class", n = O(
        /*leftTop*/
        t[2],
        /*$$props*/
        t[6].classLeftTop
      )), h(r, "class", o = O(
        /*leftMid*/
        t[3],
        /*$$props*/
        t[6].classLeftMid
      )), h(u, "class", a = O(
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
    m(y, S) {
      E(y, e, S), R(e, i), R(e, l), R(e, r), R(e, s), R(e, u), R(e, f), R(e, c), R(e, k), R(e, g), v && v.m(g, null), _ = !0;
    },
    p(y, [S]) {
      (!_ || S & /*leftTop, $$props*/
      68 && n !== (n = O(
        /*leftTop*/
        y[2],
        /*$$props*/
        y[6].classLeftTop
      ))) && h(i, "class", n), (!_ || S & /*leftMid, $$props*/
      72 && o !== (o = O(
        /*leftMid*/
        y[3],
        /*$$props*/
        y[6].classLeftMid
      ))) && h(r, "class", o), (!_ || S & /*leftBot, $$props*/
      80 && a !== (a = O(
        /*leftBot*/
        y[4],
        /*$$props*/
        y[6].classLeftBot
      ))) && h(u, "class", a), (!_ || S & /*right, $$props*/
      96 && d !== (d = O(
        /*right*/
        y[5],
        /*$$props*/
        y[6].classRight
      ))) && h(c, "class", d), v && v.p && (!_ || S & /*$$scope*/
      128) && Q(
        v,
        C,
        y,
        /*$$scope*/
        y[7],
        _ ? K(
          C,
          /*$$scope*/
          y[7],
          S,
          null
        ) : Y(
          /*$$scope*/
          y[7]
        ),
        null
      ), (!_ || S & /*slot, $$props*/
      66 && m !== (m = O(
        /*slot*/
        y[1],
        /*$$props*/
        y[6].classSlot
      ))) && h(g, "class", m), (!_ || S & /*div, $$props*/
      65 && b !== (b = O(
        /*div*/
        y[0],
        /*$$props*/
        y[6].class
      ))) && h(e, "class", b);
    },
    i(y) {
      _ || (p(v, y), _ = !0);
    },
    o(y) {
      w(v, y), _ = !1;
    },
    d(y) {
      y && T(e), v && v.d(y);
    }
  };
}
function La(t, e, i) {
  let { $$slots: n = {}, $$scope: l } = e, { div: r = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[454px] uikit-max-w-[341px] md:uikit-h-[682px] md:uikit-max-w-[512px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-h-[426px] md:uikit-h-[654px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { leftTop: s = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftMid: u = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -ruikit-ight-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = N(N({}, e), F(c))), "div" in c && i(0, r = c.div), "slot" in c && i(1, o = c.slot), "leftTop" in c && i(2, s = c.leftTop), "leftMid" in c && i(3, u = c.leftMid), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, l = c.$$scope);
  }, e = F(e), [r, o, s, u, a, f, e, l, n];
}
class Ma extends te {
  constructor(e) {
    super(), ee(this, e, La, Pa, J, {
      div: 0,
      slot: 1,
      leftTop: 2,
      leftMid: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function Na(t) {
  let e;
  return {
    c() {
      e = M("div"), e.textContent = "Unknow device", h(e, "class", "uikit-border uikit-p-3 uikit-text-xl");
    },
    m(i, n) {
      E(i, e, n);
    },
    p: le,
    i: le,
    o: le,
    d(i) {
      i && T(e);
    }
  };
}
function za(t) {
  let e, i, n;
  var l = (
    /*component*/
    t[0]
  );
  function r(o) {
    return {
      props: {
        $$slots: { default: [Ra] },
        $$scope: { ctx: o }
      }
    };
  }
  return l && (e = $i(l, r(t))), {
    c() {
      e && $(e.$$.fragment), i = ae();
    },
    m(o, s) {
      e && Z(e, o, s), E(o, i, s), n = !0;
    },
    p(o, s) {
      const u = {};
      if (s & /*$$scope*/
      8 && (u.$$scope = { dirty: s, ctx: o }), s & /*component*/
      1 && l !== (l = /*component*/
      o[0])) {
        if (e) {
          oe();
          const a = e;
          w(a.$$.fragment, 1, 0, () => {
            x(a, 1);
          }), se();
        }
        l ? (e = $i(l, r(o)), $(e.$$.fragment), p(e.$$.fragment, 1), Z(e, i.parentNode, i)) : e = null;
      } else
        l && e.$set(u);
    },
    i(o) {
      n || (e && p(e.$$.fragment, o), n = !0);
    },
    o(o) {
      e && w(e.$$.fragment, o), n = !1;
    },
    d(o) {
      o && T(i), e && x(e, o);
    }
  };
}
function Ra(t) {
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
    m(l, r) {
      n && n.m(l, r), e = !0;
    },
    p(l, r) {
      n && n.p && (!e || r & /*$$scope*/
      8) && Q(
        n,
        i,
        l,
        /*$$scope*/
        l[3],
        e ? K(
          i,
          /*$$scope*/
          l[3],
          r,
          null
        ) : Y(
          /*$$scope*/
          l[3]
        ),
        null
      );
    },
    i(l) {
      e || (p(n, l), e = !0);
    },
    o(l) {
      w(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Da(t) {
  let e, i, n, l;
  const r = [za, Na], o = [];
  function s(u, a) {
    return (
      /*component*/
      u[0] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = r[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), E(u, n, a), l = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), w(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = r[e](u), i.c()), p(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      l || (p(i), l = !0);
    },
    o(u) {
      w(i), l = !1;
    },
    d(u) {
      u && T(n), o[e].d(u);
    }
  };
}
function Ba(t, e, i) {
  let { $$slots: n = {}, $$scope: l } = e, { device: r = "default" } = e;
  const o = {
    android: ga,
    ios: Ca,
    tablet: Ma,
    default: ba,
    smartwatch: Aa,
    laptop: Ea,
    desktop: ya
  };
  let s;
  return t.$$set = (u) => {
    "device" in u && i(1, r = u.device), "$$scope" in u && i(3, l = u.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*device*/
    2 && i(0, s = o[r]);
  }, [s, r, n, l];
}
class Fa extends te {
  constructor(e) {
    super(), ee(this, e, Ba, Da, J, { device: 1 });
  }
}
const Lk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Fa({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let l in i) {
      let r = i[l];
      n.$on(l, (o) => {
        r(o.detail);
      });
    }
  return n;
}, ja = (t, e) => {
  const i = (n) => {
    n != null && n.target && t && !t.contains(n.target) && !n.defaultPrevented && e();
  };
  return document.addEventListener("click", i, !0), {
    destroy() {
      document.removeEventListener("click", i, !0);
    }
  };
}, Wa = (t) => ({ hidden: t & /*hidden*/
1 }), Bn = (t) => ({ hidden: (
  /*hidden*/
  t[0]
) });
function Fn(t) {
  let e, i, n, l, r, o, s;
  function u(m, b) {
    if (
      /*backdrop*/
      m[4] && /*activateClickOutside*/
      m[1]
    )
      return Ga;
    if (
      /*backdrop*/
      m[4] && !/*activateClickOutside*/
      m[1]
    )
      return Ua;
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
    g = N(g, k[m]);
  return {
    c() {
      f && f.c(), e = U(), i = M("div"), d && d.c(), ue(i, g);
    },
    m(m, b) {
      f && f.m(m, b), E(m, e, b), E(m, i, b), d && d.m(i, null), r = !0, o || (s = je(
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
      t = m, a === (a = u(t)) && f ? f.p(t, b) : (f && f.d(1), f = a && a(t), f && (f.c(), f.m(e.parentNode, e))), d && d.p && (!r || b & /*$$scope, hidden*/
      16777217) && Q(
        d,
        c,
        t,
        /*$$scope*/
        t[24],
        r ? K(
          c,
          /*$$scope*/
          t[24],
          b,
          Wa
        ) : Y(
          /*$$scope*/
          t[24]
        ),
        Bn
      ), ue(i, g = fe(k, [
        (!r || b & /*id*/
        64) && { id: (
          /*id*/
          t[6]
        ) },
        b & /*$$restProps*/
        32768 && /*$$restProps*/
        t[15],
        (!r || b & /*divClass, width, position, placement, $$props*/
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
        (!r || b & /*id*/
        64) && { "aria-controls": (
          /*id*/
          t[6]
        ) },
        (!r || b & /*id*/
        64) && { "aria-labelledby": (
          /*id*/
          t[6]
        ) }
      ]));
    },
    i(m) {
      r || (p(d, m), m && Oe(() => {
        r && (l || (l = De(
          i,
          /*multiple*/
          t[9],
          /*transitionParams*/
          t[8],
          !0
        )), l.run(1));
      }), r = !0);
    },
    o(m) {
      w(d, m), m && (l || (l = De(
        i,
        /*multiple*/
        t[9],
        /*transitionParams*/
        t[8],
        !1
      )), l.run(0)), r = !1;
    },
    d(m) {
      m && (T(e), T(i)), f && f.d(m), d && d.d(m), m && l && l.end(), o = !1, s();
    }
  };
}
function Ua(t) {
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
      E(i, e, n);
    },
    p: le,
    d(i) {
      i && T(e);
    }
  };
}
function Ga(t) {
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
    m(l, r) {
      E(l, e, r), i || (n = D(
        e,
        "click",
        /*click_handler*/
        t[26]
      ), i = !0);
    },
    p: le,
    d(l) {
      l && T(e), i = !1, n();
    }
  };
}
function Ha(t) {
  let e, i, n = !/*hidden*/
  t[0] && Fn(t);
  return {
    c() {
      n && n.c(), e = ae();
    },
    m(l, r) {
      n && n.m(l, r), E(l, e, r), i = !0;
    },
    p(l, [r]) {
      /*hidden*/
      l[0] ? n && (oe(), w(n, 1, 1, () => {
        n = null;
      }), se()) : n ? (n.p(l, r), r & /*hidden*/
      1 && p(n, 1)) : (n = Fn(l), n.c(), p(n, 1), n.m(e.parentNode, e));
    },
    i(l) {
      i || (p(n), i = !0);
    },
    o(l) {
      w(n), i = !1;
    },
    d(l) {
      l && T(e), n && n.d(l);
    }
  };
}
function Va(t, e, i) {
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
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e, { activateClickOutside: s = !0 } = e, { hidden: u = !0 } = e, { position: a = "uikit-fixed" } = e, { leftOffset: f = "uikit-inset-y-0 uikit-start-0" } = e, { rightOffset: c = "uikit-inset-y-0 uikit-end-0" } = e, { topOffset: d = "uikit-inset-x-0 uikit-top-0" } = e, { bottomOffset: k = "uikit-inset-x-0 uikit-bottom-0" } = e, { width: g = "uikit-w-80" } = e, { backdrop: m = !0 } = e, { bgColor: b = "uikit-bg-gray-900" } = e, { bgOpacity: _ = "uikit-bg-opacity-75" } = e, { placement: C = "left" } = e, { id: v = "drawer-example" } = e, { divClass: y = "uikit-overflow-y-auto uikit-z-50 uikit-p-4 uikit-bg-white dark:uikit-bg-gray-800" } = e, { transitionParams: S = {} } = e, { transitionType: A = "fly" } = e;
  function I(z, B) {
    switch (A) {
      case "slide":
        return Bi(z, B);
      case "blur":
        return Di(z, B);
      case "fade":
        return xt(z, B);
      default:
        return wt(z, B);
    }
  }
  const j = {
    left: f,
    right: c,
    top: d,
    bottom: k
  }, V = () => {
    i(0, u = !u);
  }, ie = () => s && !u && V();
  let P = O("uikit-fixed uikit-top-0 uikit-start-0 uikit-z-50 uikit-w-full uikit-h-full", m && b, m && _);
  function G(z, B) {
    return s ? ja(z, B) : void 0;
  }
  const ke = () => !u && V();
  return t.$$set = (z) => {
    i(16, e = N(N({}, e), F(z))), i(15, l = ne(e, n)), "activateClickOutside" in z && i(1, s = z.activateClickOutside), "hidden" in z && i(0, u = z.hidden), "position" in z && i(2, a = z.position), "leftOffset" in z && i(17, f = z.leftOffset), "rightOffset" in z && i(18, c = z.rightOffset), "topOffset" in z && i(19, d = z.topOffset), "bottomOffset" in z && i(20, k = z.bottomOffset), "width" in z && i(3, g = z.width), "backdrop" in z && i(4, m = z.backdrop), "bgColor" in z && i(21, b = z.bgColor), "bgOpacity" in z && i(22, _ = z.bgOpacity), "placement" in z && i(5, C = z.placement), "id" in z && i(6, v = z.id), "divClass" in z && i(7, y = z.divClass), "transitionParams" in z && i(8, S = z.transitionParams), "transitionType" in z && i(23, A = z.transitionType), "$$scope" in z && i(24, o = z.$$scope);
  }, e = F(e), [
    u,
    s,
    a,
    g,
    m,
    C,
    v,
    y,
    S,
    I,
    j,
    V,
    ie,
    P,
    G,
    l,
    e,
    f,
    c,
    d,
    k,
    b,
    _,
    A,
    o,
    r,
    ke
  ];
}
class qa extends te {
  constructor(e) {
    super(), ee(this, e, Va, Ha, J, {
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
function Xa(t) {
  let e;
  return {
    c() {
      e = M("div");
    },
    m(i, n) {
      E(i, e, n), t[6](e);
    },
    p: le,
    d(i) {
      i && T(e), t[6](null);
    }
  };
}
function Ka(t) {
  let e, i, n;
  const l = [
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
  function r(s) {
    t[7](s);
  }
  let o = {
    $$slots: { default: [Xa] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < l.length; s += 1)
    o = N(o, l[s]);
  return (
    /*hidden*/
    t[1] !== void 0 && (o.hidden = /*hidden*/
    t[1]), e = new qa({ props: o }), Se.push(() => Zt(e, "hidden", r)), {
      c() {
        $(e.$$.fragment);
      },
      m(s, u) {
        Z(e, s, u), n = !0;
      },
      p(s, [u]) {
        const a = u & /*transitionParams, $$props*/
        12 ? fe(l, [
          l[0],
          u & /*transitionParams*/
          4 && {
            transitionParams: (
              /*transitionParams*/
              s[2]
            )
          },
          l[2],
          u & /*$$props*/
          8 && Pe(
            /*$$props*/
            s[3]
          )
        ]) : {};
        u & /*$$scope, domdefault*/
        513 && (a.$$scope = { dirty: u, ctx: s }), !i && u & /*hidden*/
        2 && (i = !0, a.hidden = /*hidden*/
        s[1], Jt(() => i = !1)), e.$set(a);
      },
      i(s) {
        n || (p(e.$$.fragment, s), n = !0);
      },
      o(s) {
        w(e.$$.fragment, s), n = !1;
      },
      d(s) {
        x(e, s);
      }
    }
  );
}
function Qa(t, e, i) {
  let { slotdefault: n } = e, l = !0;
  function r() {
    i(1, l = !l);
  }
  let o = { x: -320, duration: 200, easing: Wo }, s;
  const u = () => {
    n && s && (i(0, s.innerHTML = "", s), s.appendChild(n));
  };
  Ye(() => {
    u();
  });
  function a(c) {
    Se[c ? "unshift" : "push"](() => {
      s = c, i(0, s);
    });
  }
  function f(c) {
    l = c, i(1, l);
  }
  return t.$$set = (c) => {
    i(3, e = N(N({}, e), F(c))), "slotdefault" in c && i(4, n = c.slotdefault);
  }, t.$$.update = () => {
    t.$$.dirty & /*slotdefault, domdefault*/
    17 && n && s && u();
  }, e = F(e), [
    s,
    l,
    o,
    e,
    n,
    r,
    a,
    f
  ];
}
class Ya extends te {
  constructor(e) {
    super(), ee(this, e, Qa, Ka, J, { slotdefault: 4, toggle: 5 });
  }
  get toggle() {
    return this.$$.ctx[5];
  }
}
const Mk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Ya({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let l in i) {
      let r = i[l];
      n.$on(l, (o) => {
        r(o.detail);
      });
    }
  return n;
};
function Ja(t) {
  let e, i;
  return {
    c() {
      e = be("svg"), i = be("path"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M15 19l-7-7 7-7"), h(e, "aria-hidden", "true"), h(e, "class", "uikit-w-5 uikit-h-5 sm:uikit-w-6 sm:uikit-h-6"), h(e, "fill", "none"), h(e, "stroke", "currentColor"), h(e, "viewBox", "0 0 24 24"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      E(n, e, l), R(e, i);
    },
    d(n) {
      n && T(e);
    }
  };
}
function Za(t) {
  let e, i;
  return {
    c() {
      e = be("svg"), i = be("path"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5l7 7-7 7"), h(e, "aria-hidden", "true"), h(e, "class", "uikit-w-5 uikit-h-5 sm:uikit-w-6 sm:uikit-h-6"), h(e, "fill", "none"), h(e, "stroke", "currentColor"), h(e, "viewBox", "0 0 24 24"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, l) {
      E(n, e, l), R(e, i);
    },
    d(n) {
      n && T(e);
    }
  };
}
function xa(t) {
  let e, i, n, l;
  function r(u, a) {
    return (
      /*forward*/
      u[0] ? Za : Ja
    );
  }
  let o = r(t), s = o(t);
  return {
    c() {
      e = M("span"), s.c(), i = U(), n = M("span"), l = me(
        /*name*/
        t[1]
      ), h(n, "class", "uikit-sr-only"), h(e, "class", "uikit-inline-flex uikit-justify-center uikit-items-center uikit-w-8 uikit-h-8 uikit-rounded-full sm:uikit-w-10 sm:uikit-h-10 uikit-bg-white/30 dark:uikit-bg-gray-800/30 group-hover:uikit-bg-white/50 dark:group-hover:uikit-bg-gray-800/60 group-focus:uikit-ring-4 group-focus:uikit-ring-white dark:group-focus:uikit-ring-gray-800/70 group-focus:uikit-outline-none");
    },
    m(u, a) {
      E(u, e, a), s.m(e, null), R(e, i), R(e, n), R(n, l);
    },
    p(u, a) {
      o !== (o = r(u)) && (s.d(1), s = o(u), s && (s.c(), s.m(e, i))), a & /*name*/
      2 && we(
        l,
        /*name*/
        u[1]
      );
    },
    d(u) {
      u && T(e), s.d();
    }
  };
}
function $a(t) {
  let e, i, n, l;
  const r = (
    /*#slots*/
    t[4].default
  ), o = X(
    r,
    t,
    /*$$scope*/
    t[3],
    null
  ), s = o || xa(t);
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
      E(u, e, a), s && s.m(e, null), i = !0, n || (l = D(
        e,
        "click",
        /*click_handler*/
        t[5]
      ), n = !0);
    },
    p(u, [a]) {
      o ? o.p && (!i || a & /*$$scope*/
      8) && Q(
        o,
        r,
        u,
        /*$$scope*/
        u[3],
        i ? K(
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
      i || (p(s, u), i = !0);
    },
    o(u) {
      w(s, u), i = !1;
    },
    d(u) {
      u && T(e), s && s.d(u), n = !1, l();
    }
  };
}
function ef(t, e, i) {
  let { $$slots: n = {}, $$scope: l } = e, { forward: r } = e, { name: o } = e, s;
  function u(a) {
    W.call(this, t, a);
  }
  return t.$$set = (a) => {
    i(6, e = N(N({}, e), F(a))), "forward" in a && i(0, r = a.forward), "name" in a && i(1, o = a.name), "$$scope" in a && i(3, l = a.$$scope);
  }, t.$$.update = () => {
    i(2, s = O("uikit-flex uikit-absolute uikit-top-0 uikit-z-30 uikit-justify-center uikit-items-center uikit-px-4 uikit-h-full uikit-group focus:uikit-outline-none uikit-text-white dark:uikit-text-gray-300", r ? "uikit-end-0" : "uikit-start-0", e.class));
  }, e = F(e), [r, o, s, l, n, u];
}
class Ei extends te {
  constructor(e) {
    super(), ee(this, e, ef, $a, J, { forward: 0, name: 1 });
  }
}
const Ii = ({ lastSlideChange: t, slideDuration: e, slideDurationRatio: i = 1 }) => t && (/* @__PURE__ */ new Date()).getTime() - t.getTime() < e * i ? (console.warn("Can't change slide yet, too soon"), !1) : !0, tf = (t) => ({}), jn = (t) => ({
  ControlButton: Ei,
  changeSlide: (
    /*changeSlide*/
    t[1]
  )
});
function nf(t) {
  let e, i, n, l;
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
      $(e.$$.fragment), i = U(), $(n.$$.fragment);
    },
    m(r, o) {
      Z(e, r, o), E(r, i, o), Z(n, r, o), l = !0;
    },
    p(r, o) {
      const s = {};
      o & /*$$props*/
      4 && (s.class = O(
        /*$$props*/
        r[2].class
      )), e.$set(s);
      const u = {};
      o & /*$$props*/
      4 && (u.class = O(
        /*$$props*/
        r[2].class
      )), n.$set(u);
    },
    i(r) {
      l || (p(e.$$.fragment, r), p(n.$$.fragment, r), l = !0);
    },
    o(r) {
      w(e.$$.fragment, r), w(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && T(i), x(e, r), x(n, r);
    }
  };
}
function lf(t) {
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
  ), l = n || nf(t);
  return {
    c() {
      l && l.c();
    },
    m(r, o) {
      l && l.m(r, o), e = !0;
    },
    p(r, [o]) {
      n ? n.p && (!e || o & /*$$scope*/
      8) && Q(
        n,
        i,
        r,
        /*$$scope*/
        r[3],
        e ? K(
          i,
          /*$$scope*/
          r[3],
          o,
          tf
        ) : Y(
          /*$$scope*/
          r[3]
        ),
        jn
      ) : l && l.p && (!e || o & /*$$props*/
      4) && l.p(r, e ? o : -1);
    },
    i(r) {
      e || (p(l, r), e = !0);
    },
    o(r) {
      w(l, r), e = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function rf(t, e, i) {
  let n, { $$slots: l = {}, $$scope: r } = e;
  const o = Re("state");
  Yt(t, o, (c) => i(7, n = c));
  const { update: s } = o;
  function u(c) {
    Ii({
      lastSlideChange: n.lastSlideChange,
      slideDuration: n.slideDuration,
      slideDurationRatio: 0.75
    }) && s(c ? (d) => (d.forward = !0, d.index = d.index >= d.images.length - 1 ? 0 : d.index + 1, d.lastSlideChange = /* @__PURE__ */ new Date(), { ...d }) : (d) => (d.forward = !1, d.index = d.index <= 0 ? d.images.length - 1 : d.index - 1, d.lastSlideChange = /* @__PURE__ */ new Date(), { ...d }));
  }
  const a = () => u(!1), f = () => u(!0);
  return t.$$set = (c) => {
    i(2, e = N(N({}, e), F(c))), "$$scope" in c && i(3, r = c.$$scope);
  }, e = F(e), [o, u, e, r, l, a, f];
}
class of extends te {
  constructor(e) {
    super(), ee(this, e, rf, lf, J, {});
  }
}
function Wn(t, e, i) {
  const n = t.slice();
  n[8] = e[i], n[11] = i;
  const l = (
    /*$state*/
    n[2].index === /*idx*/
    n[11]
  );
  return n[9] = l, n;
}
const sf = (t) => ({ selected: t & /*$state*/
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
function uf(t) {
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
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*$state, activeClass, inactiveClass*/
      7 && (r.class = O(
        "uikit-bg-gray-100 hover:uikit-bg-gray-300",
        /*selected*/
        n[9] ? (
          /*activeClass*/
          n[0]
        ) : (
          /*inactiveClass*/
          n[1]
        )
      )), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Gn(t) {
  let e, i, n, l, r;
  const o = (
    /*#slots*/
    t[6].default
  ), s = X(
    o,
    t,
    /*$$scope*/
    t[5],
    Un
  ), u = s || uf(t);
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
      e = M("button"), u && u.c(), i = U();
    },
    m(f, c) {
      E(f, e, c), u && u.m(e, null), R(e, i), n = !0, l || (r = D(e, "click", a), l = !0);
    },
    p(f, c) {
      t = f, s ? s.p && (!n || c & /*$$scope, $state*/
      36) && Q(
        s,
        o,
        t,
        /*$$scope*/
        t[5],
        n ? K(
          o,
          /*$$scope*/
          t[5],
          c,
          sf
        ) : Y(
          /*$$scope*/
          t[5]
        ),
        Un
      ) : u && u.p && (!n || c & /*$state, activeClass, inactiveClass*/
      7) && u.p(t, n ? c : -1);
    },
    i(f) {
      n || (p(u, f), n = !0);
    },
    o(f) {
      w(u, f), n = !1;
    },
    d(f) {
      f && T(e), u && u.d(f), l = !1, r();
    }
  };
}
function af(t) {
  let e, i, n, l = _e(
    /*$state*/
    t[2].images
  ), r = [];
  for (let s = 0; s < l.length; s += 1)
    r[s] = Gn(Wn(t, l, s));
  const o = (s) => w(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      e = M("div");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      h(e, "class", i = O(
        "uikit-flex uikit-absolute uikit-bottom-5 uikit-start-1/2 uikit-z-30 uikit-space-x-3 rtl:uikit-space-x-reverse -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
        /*$$props*/
        t[4].class
      ));
    },
    m(s, u) {
      E(s, e, u);
      for (let a = 0; a < r.length; a += 1)
        r[a] && r[a].m(e, null);
      n = !0;
    },
    p(s, [u]) {
      if (u & /*$state, twMerge, activeClass, inactiveClass, $$scope, Indicator*/
      39) {
        l = _e(
          /*$state*/
          s[2].images
        );
        let a;
        for (a = 0; a < l.length; a += 1) {
          const f = Wn(s, l, a);
          r[a] ? (r[a].p(f, u), p(r[a], 1)) : (r[a] = Gn(f), r[a].c(), p(r[a], 1), r[a].m(e, null));
        }
        for (oe(), a = l.length; a < r.length; a += 1)
          o(a);
        se();
      }
      (!n || u & /*$$props*/
      16 && i !== (i = O(
        "uikit-flex uikit-absolute uikit-bottom-5 uikit-start-1/2 uikit-z-30 uikit-space-x-3 rtl:uikit-space-x-reverse -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
        /*$$props*/
        s[4].class
      ))) && h(e, "class", i);
    },
    i(s) {
      if (!n) {
        for (let u = 0; u < l.length; u += 1)
          p(r[u]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let u = 0; u < r.length; u += 1)
        w(r[u]);
      n = !1;
    },
    d(s) {
      s && T(e), Fe(r, s);
    }
  };
}
function ff(t, e, i) {
  let n, { $$slots: l = {}, $$scope: r } = e, { activeClass: o = "uikit-opacity-100" } = e, { inactiveClass: s = "uikit-opacity-60" } = e;
  const u = Re("state");
  Yt(t, u, (f) => i(2, n = f));
  const a = (f) => Jl(u, n.index = f, n);
  return t.$$set = (f) => {
    i(4, e = N(N({}, e), F(f))), "activeClass" in f && i(0, o = f.activeClass), "inactiveClass" in f && i(1, s = f.inactiveClass), "$$scope" in f && i(5, r = f.$$scope);
  }, e = F(e), [
    o,
    s,
    n,
    u,
    e,
    r,
    l,
    a
  ];
}
class cf extends te {
  constructor(e) {
    super(), ee(this, e, ff, af, J, { activeClass: 0, inactiveClass: 1 });
  }
}
function df(t) {
  let e = (
    /*image*/
    t[0]
  ), i, n = Hn(t);
  return {
    c() {
      n.c(), i = ae();
    },
    m(l, r) {
      n.m(l, r), E(l, i, r);
    },
    p(l, r) {
      r & /*image*/
      1 && J(e, e = /*image*/
      l[0]) ? (oe(), w(n, 1, 1, le), se(), n = Hn(l), n.c(), p(n, 1), n.m(i.parentNode, i)) : n.p(l, r);
    },
    d(l) {
      l && T(i), n.d(l);
    }
  };
}
function kf(t) {
  let e = (
    /*image*/
    t[0]
  ), i, n = Vn(t);
  return {
    c() {
      n.c(), i = ae();
    },
    m(l, r) {
      n.m(l, r), E(l, i, r);
    },
    p(l, r) {
      r & /*image*/
      1 && J(e, e = /*image*/
      l[0]) ? (oe(), w(n, 1, 1, le), se(), n = Vn(l), n.c(), p(n, 1), n.m(i.parentNode, i)) : n.p(l, r);
    },
    d(l) {
      l && T(i), n.d(l);
    }
  };
}
function Hn(t) {
  let e, i, n, l, r = [
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
  for (let s = 0; s < r.length; s += 1)
    o = N(o, r[s]);
  return {
    c() {
      e = M("img"), ue(e, o);
    },
    m(s, u) {
      E(s, e, u), l = !0;
    },
    p(s, u) {
      t = s, ue(e, o = fe(r, [
        { alt: "..." },
        u & /*image*/
        1 && /*image*/
        t[0],
        u & /*$$restProps*/
        64 && /*$$restProps*/
        t[6],
        (!l || u & /*imgClass*/
        4) && { class: (
          /*imgClass*/
          t[2]
        ) }
      ]));
    },
    i(s) {
      l || (s && Oe(() => {
        l && (n && n.end(1), i = uo(
          e,
          wt,
          /*transitionSlideIn*/
          t[4]
        ), i.start());
      }), l = !0);
    },
    o(s) {
      i && i.invalidate(), s && (n = ao(
        e,
        wt,
        /*transitionSlideOut*/
        t[3]
      )), l = !1;
    },
    d(s) {
      s && T(e), s && n && n.end();
    }
  };
}
function Vn(t) {
  let e, i, n, l = [
    { alt: "..." },
    /*image*/
    t[0],
    /*$$restProps*/
    t[6],
    { class: (
      /*imgClass*/
      t[2]
    ) }
  ], r = {};
  for (let o = 0; o < l.length; o += 1)
    r = N(r, l[o]);
  return {
    c() {
      e = M("img"), ue(e, r);
    },
    m(o, s) {
      E(o, e, s), n = !0;
    },
    p(o, s) {
      ue(e, r = fe(l, [
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
        n && (i || (i = De(
          e,
          /*transition*/
          t[1],
          {},
          !0
        )), i.run(1));
      }), n = !0);
    },
    o(o) {
      o && (i || (i = De(
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
function gf(t) {
  let e;
  function i(r, o) {
    return (
      /*transition*/
      r[1] ? kf : df
    );
  }
  let n = i(t), l = n(t);
  return {
    c() {
      l.c(), e = ae();
    },
    m(r, o) {
      l.m(r, o), E(r, e, o);
    },
    p(r, [o]) {
      n === (n = i(r)) && l ? l.p(r, o) : (l.d(1), l = n(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    i: le,
    o: le,
    d(r) {
      r && T(e), l.d(r);
    }
  };
}
function mf(t, e, i) {
  let n, l, r;
  const o = ["image", "transition"];
  let s = ne(e, o), u;
  const a = Re("state");
  Yt(t, a, (d) => i(7, u = d));
  let { image: f } = e, { transition: c = null } = e;
  return t.$$set = (d) => {
    i(8, e = N(N({}, e), F(d))), i(6, s = ne(e, o)), "image" in d && i(0, f = d.image), "transition" in d && i(1, c = d.transition);
  }, t.$$.update = () => {
    t.$$.dirty & /*$state*/
    128 && i(4, n = {
      x: u.forward ? "100%" : "-100%",
      opacity: 1,
      width: "100%",
      height: "100%",
      duration: u.slideDuration
    }), t.$$.dirty & /*$state*/
    128 && i(3, l = {
      x: u.forward ? "-100%" : "100%",
      opacity: 0.9,
      width: "100%",
      height: "100%",
      duration: u.slideDuration
    }), i(2, r = O("uikit-absolute uikit-block !uikit-w-full uikit-h-full uikit-object-cover", e.class));
  }, e = F(e), [
    f,
    c,
    r,
    l,
    n,
    a,
    s,
    u
  ];
}
class Tr extends te {
  constructor(e) {
    super(), ee(this, e, mf, gf, J, { image: 0, transition: 1 });
  }
}
const hf = (t) => ({ index: t[0] & /*index*/
1 }), qn = (t) => ({
  index: (
    /*index*/
    t[0]
  ),
  Controls: of,
  Indicators: cf
}), bf = (t) => ({ index: t[0] & /*index*/
1 }), Xn = (t) => ({ Slide: Tr, index: (
  /*index*/
  t[0]
) });
function Kn(t, e, i) {
  const n = t.slice();
  return n[29] = e[i], n;
}
function Qn(t) {
  let e, i = _e(
    /*images*/
    t[1]
  ), n = [];
  for (let l = 0; l < i.length; l += 1)
    n[l] = Yn(Kn(t, i, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ae();
    },
    m(l, r) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, r);
      E(l, e, r);
    },
    p(l, r) {
      if (r[0] & /*images*/
      2) {
        i = _e(
          /*images*/
          l[1]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const s = Kn(l, i, o);
          n[o] ? n[o].p(s, r) : (n[o] = Yn(s), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = i.length;
      }
    },
    d(l) {
      l && T(e), Fe(n, l);
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
    m(n, l) {
      E(n, e, l);
    },
    p(n, l) {
      l[0] & /*images*/
      2 && i !== (i = /*image*/
      n[29].src) && h(e, "href", i);
    },
    d(n) {
      n && T(e);
    }
  };
}
function _f(t) {
  let e, i;
  return e = new Tr({
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
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l[0] & /*images, index*/
      3 && (r.image = /*images*/
      n[1][
        /*index*/
        n[0]
      ]), l[0] & /*imgClass*/
      32 && (r.class = /*imgClass*/
      n[5]), l[0] & /*transition*/
      4 && (r.transition = /*transition*/
      n[2]), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function pf(t) {
  let e, i, n, l, r, o, s, u, a, f, c, d = (
    /*images*/
    t[1].length > 0 && Qn(t)
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
  ), m = g || _f(t);
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
  for (let y = 0; y < b.length; y += 1)
    _ = N(_, b[y]);
  const C = (
    /*#slots*/
    t[18].default
  ), v = X(
    C,
    t,
    /*$$scope*/
    t[17],
    qn
  );
  return {
    c() {
      d && d.c(), e = ae(), i = U(), n = U(), l = M("div"), r = M("div"), m && m.c(), u = U(), v && v.c(), ue(r, _), h(l, "class", "uikit-relative"), h(l, "role", "button"), h(
        l,
        "aria-label",
        /*ariaLabel*/
        t[4]
      ), h(l, "tabindex", "0");
    },
    m(y, S) {
      d && d.m(document.head, null), R(document.head, e), E(y, i, S), E(y, n, S), E(y, l, S), R(l, r), m && m.m(r, null), R(l, u), v && v.m(l, null), t[19](l), a = !0, f || (c = [
        D(document, "mousemove", function() {
          he(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        D(document, "mouseup", function() {
          he(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        D(document, "touchmove", function() {
          he(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        D(document, "touchend", function() {
          he(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        je(s = /*loop*/
        t[10].call(
          null,
          r,
          /*duration*/
          t[3]
        )),
        D(
          l,
          "mousedown",
          /*onDragStart*/
          t[11],
          { passive: !1 }
        ),
        D(
          l,
          "touchstart",
          /*onDragStart*/
          t[11],
          { passive: !1 }
        ),
        D(l, "mousemove", function() {
          he(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        D(l, "mouseup", function() {
          he(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        D(l, "touchmove", function() {
          he(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        D(l, "touchend", function() {
          he(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        })
      ], f = !0);
    },
    p(y, S) {
      t = y, /*images*/
      t[1].length > 0 ? d ? d.p(t, S) : (d = Qn(t), d.c(), d.m(e.parentNode, e)) : d && (d.d(1), d = null), g ? g.p && (!a || S[0] & /*$$scope, index*/
      131073) && Q(
        g,
        k,
        t,
        /*$$scope*/
        t[17],
        a ? K(
          k,
          /*$$scope*/
          t[17],
          S,
          bf
        ) : Y(
          /*$$scope*/
          t[17]
        ),
        Xn
      ) : m && m.p && (!a || S[0] & /*images, index, imgClass, transition*/
      39) && m.p(t, a ? S : [-1, -1]), ue(r, _ = fe(b, [
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
      ])), s && he(s.update) && S[0] & /*duration*/
      8 && s.update.call(
        null,
        /*duration*/
        t[3]
      ), v && v.p && (!a || S[0] & /*$$scope, index*/
      131073) && Q(
        v,
        C,
        t,
        /*$$scope*/
        t[17],
        a ? K(
          C,
          /*$$scope*/
          t[17],
          S,
          hf
        ) : Y(
          /*$$scope*/
          t[17]
        ),
        qn
      ), (!a || S[0] & /*ariaLabel*/
      16) && h(
        l,
        "aria-label",
        /*ariaLabel*/
        t[4]
      );
    },
    i(y) {
      a || (p(m, y), p(v, y), a = !0);
    },
    o(y) {
      w(m, y), w(v, y), a = !1;
    },
    d(y) {
      y && (T(i), T(n), T(l)), d && d.d(y), T(e), m && m.d(y), v && v.d(y), t[19](null), f = !1, Ce(c);
    }
  };
}
const Jn = 0.25;
let Zn = "uikit-grid uikit-overflow-hidden uikit-relative uikit-rounded-lg uikit-h-56 sm:uikit-h-64 xl:uikit-h-80 2xl:uikit-h-96";
function yf(t, e, i) {
  let n, l;
  const r = [
    "images",
    "index",
    "slideDuration",
    "transition",
    "duration",
    "ariaLabel",
    "imgClass"
  ];
  let o = ne(e, r), { $$slots: s = {}, $$scope: u } = e, { images: a } = e, { index: f = 0 } = e, { slideDuration: c = 1e3 } = e, { transition: d = null } = e, { duration: k = 0 } = e, { ariaLabel: g = "Draggable Carousel" } = e, { imgClass: m = "" } = e;
  const b = Ge(), { set: _, subscribe: C, update: v } = it({
    images: a,
    index: f,
    forward: !0,
    slideDuration: c,
    lastSlideChange: /* @__PURE__ */ new Date()
  }), y = {
    set: (L) => _({
      index: L.index,
      images: L.images,
      lastSlideChange: /* @__PURE__ */ new Date(),
      slideDuration: c,
      forward: S
    }),
    subscribe: C,
    update: v
  };
  let S = !0;
  We("state", y), C((L) => {
    i(0, f = L.index), S = L.forward, b("change", a[f]);
  }), Ye(() => {
    b("change", a[f]);
  });
  const A = () => {
    v((L) => Ii({
      lastSlideChange: L.lastSlideChange,
      slideDuration: c,
      slideDurationRatio: Jn
    }) ? (L.index = L.index >= a.length - 1 ? 0 : L.index + 1, L.lastSlideChange = /* @__PURE__ */ new Date(), { ...L }) : L);
  }, I = () => {
    v((L) => Ii({
      lastSlideChange: L.lastSlideChange,
      slideDuration: c,
      slideDurationRatio: Jn
    }) ? (L.index = L.index <= 0 ? a.length - 1 : L.index - 1, L.lastSlideChange = /* @__PURE__ */ new Date(), { ...L }) : L);
  }, j = (L, re) => {
    i(7, ie = L);
    let de;
    return re > 0 && (de = setInterval(A, re)), {
      update: (ye) => {
        clearInterval(de), ye > 0 && (de = setInterval(A, ye));
      },
      destroy: () => clearInterval(de)
    };
  };
  let V, ie, P = 0, G = null;
  const ke = (L) => {
    const re = L == null ? void 0 : L.clientX;
    if (re)
      return re;
    let de = L;
    if (/^touch/.test(de == null ? void 0 : de.type))
      return de.touches[0].clientX;
  }, z = (L) => {
    i(16, G = L), L.cancelable && L.preventDefault();
    const re = ke(L), de = ie.getBoundingClientRect().width;
    re === void 0 || de === void 0 || i(6, V = {
      start: re,
      position: re,
      width: de,
      timestamp: Date.now()
    });
  };
  function B(L) {
    Se[L ? "unshift" : "push"](() => {
      ie = L, i(7, ie);
    });
  }
  return t.$$set = (L) => {
    i(13, e = N(N({}, e), F(L))), i(12, o = ne(e, r)), "images" in L && i(1, a = L.images), "index" in L && i(0, f = L.index), "slideDuration" in L && i(14, c = L.slideDuration), "transition" in L && i(2, d = L.transition), "duration" in L && i(3, k = L.duration), "ariaLabel" in L && i(4, g = L.ariaLabel), "imgClass" in L && i(5, m = L.imgClass), "$$scope" in L && i(17, u = L.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*activeDragGesture*/
    64 && i(9, n = V === void 0 ? void 0 : (L) => {
      const re = ke(L);
      if (!V || re === void 0)
        return;
      const { start: de, width: ye } = V;
      i(15, P = Math.min(100, Math.max(-100, (re - de) / ye * 100))), i(6, V.position = re, V);
    }), t.$$.dirty[0] & /*activeDragGesture, percentOffset, touchEvent*/
    98368 && i(8, l = V === void 0 ? void 0 : (L) => {
      var Le;
      if (V) {
        const { timestamp: Ie, position: Ne, start: pe } = V, q = Date.now() - Ie, ve = Ne - pe;
        Math.abs(ve) >= 30 && q <= 250 && q > 0 ? ve > 0 ? I() : A() : P > 50 ? I() : P < -50 ? A() : (G == null ? void 0 : G.constructor.name) === "TouchEvent" && ((Le = G == null ? void 0 : G.target) == null || Le.dispatchEvent(new Event("click", { bubbles: !0 })));
      }
      i(15, P = 0), i(6, V = void 0), i(16, G = null);
    });
  }, e = F(e), [
    f,
    a,
    d,
    k,
    g,
    m,
    V,
    ie,
    l,
    n,
    j,
    z,
    o,
    e,
    c,
    P,
    G,
    u,
    s,
    B
  ];
}
class vf extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      yf,
      pf,
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
function wf(t) {
  let e, i, n, l;
  return e = new /*Controls*/
  t[4]({}), n = new /*Indicators*/
  t[3]({}), {
    c() {
      $(e.$$.fragment), i = U(), $(n.$$.fragment);
    },
    m(r, o) {
      Z(e, r, o), E(r, i, o), Z(n, r, o), l = !0;
    },
    i(r) {
      l || (p(e.$$.fragment, r), p(n.$$.fragment, r), l = !0);
    },
    o(r) {
      w(e.$$.fragment, r), w(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && T(i), x(e, r), x(n, r);
    }
  };
}
function Cf(t) {
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
    m(l, r) {
      E(l, e, r), Z(i, e, null), n = !0;
    },
    p(l, r) {
      const o = {};
      r & /*images, index*/
      3 && (o.image = /*images*/
      l[0][
        /*index*/
        l[1]
      ]), i.$set(o);
    },
    i(l) {
      n || (p(i.$$.fragment, l), n = !0);
    },
    o(l) {
      w(i.$$.fragment, l), n = !1;
    },
    d(l) {
      l && T(e), x(i);
    }
  };
}
function Sf(t) {
  let e, i, n;
  return i = new vf({
    props: {
      images: (
        /*images*/
        t[0]
      ),
      duration: 3900,
      $$slots: {
        slide: [
          Cf,
          ({ index: l, Slide: r }) => ({ 1: l, 2: r }),
          ({ index: l, Slide: r }) => (l ? 2 : 0) | (r ? 4 : 0)
        ],
        default: [
          wf,
          ({ Indicators: l, Controls: r }) => ({ 3: l, 4: r }),
          ({ Indicators: l, Controls: r }) => (l ? 8 : 0) | (r ? 16 : 0)
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = M("div"), $(i.$$.fragment), h(e, "class", "max-w-4xl space-y-4");
    },
    m(l, r) {
      E(l, e, r), Z(i, e, null), n = !0;
    },
    p(l, [r]) {
      const o = {};
      r & /*images*/
      1 && (o.images = /*images*/
      l[0]), r & /*$$scope, images, index*/
      35 && (o.$$scope = { dirty: r, ctx: l }), i.$set(o);
    },
    i(l) {
      n || (p(i.$$.fragment, l), n = !0);
    },
    o(l) {
      w(i.$$.fragment, l), n = !1;
    },
    d(l) {
      l && T(e), x(i);
    }
  };
}
function Tf(t, e, i) {
  let { images: n = [] } = e;
  return t.$$set = (l) => {
    "images" in l && i(0, n = l.images);
  }, [n];
}
class Ef extends te {
  constructor(e) {
    super(), ee(this, e, Tf, Sf, J, { images: 0 });
  }
}
const Nk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Ef({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let l in i) {
      let r = i[l];
      n.$on(l, (o) => {
        r(o.detail);
      });
    }
  return n;
}, dt = Math.min, xe = Math.max, Vt = Math.round, zt = Math.floor, Xe = (t) => ({
  x: t,
  y: t
}), If = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Of = {
  start: "end",
  end: "start"
};
function Oi(t, e, i) {
  return xe(t, dt(e, i));
}
function Ot(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function et(t) {
  return t.split("-")[0];
}
function At(t) {
  return t.split("-")[1];
}
function Er(t) {
  return t === "x" ? "y" : "x";
}
function Xi(t) {
  return t === "y" ? "height" : "width";
}
function ii(t) {
  return ["top", "bottom"].includes(et(t)) ? "y" : "x";
}
function Ki(t) {
  return Er(ii(t));
}
function Af(t, e, i) {
  i === void 0 && (i = !1);
  const n = At(t), l = Ki(t), r = Xi(l);
  let o = l === "x" ? n === (i ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = qt(o)), [o, qt(o)];
}
function Pf(t) {
  const e = qt(t);
  return [Ai(t), e, Ai(e)];
}
function Ai(t) {
  return t.replace(/start|end/g, (e) => Of[e]);
}
function Lf(t, e, i) {
  const n = ["left", "right"], l = ["right", "left"], r = ["top", "bottom"], o = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return i ? e ? l : n : e ? n : l;
    case "left":
    case "right":
      return e ? r : o;
    default:
      return [];
  }
}
function Mf(t, e, i, n) {
  const l = At(t);
  let r = Lf(et(t), i === "start", n);
  return l && (r = r.map((o) => o + "-" + l), e && (r = r.concat(r.map(Ai)))), r;
}
function qt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => If[e]);
}
function Nf(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ir(t) {
  return typeof t != "number" ? Nf(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Xt(t) {
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
    floating: l
  } = t;
  const r = ii(e), o = Ki(e), s = Xi(o), u = et(e), a = r === "y", f = n.x + n.width / 2 - l.width / 2, c = n.y + n.height / 2 - l.height / 2, d = n[s] / 2 - l[s] / 2;
  let k;
  switch (u) {
    case "top":
      k = {
        x: f,
        y: n.y - l.height
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
        x: n.x - l.width,
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
const zf = async (t, e, i) => {
  const {
    placement: n = "bottom",
    strategy: l = "absolute",
    middleware: r = [],
    platform: o
  } = i, s = r.filter(Boolean), u = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let a = await o.getElementRects({
    reference: t,
    floating: e,
    strategy: l
  }), {
    x: f,
    y: c
  } = xn(a, n, u), d = n, k = {}, g = 0;
  for (let m = 0; m < s.length; m++) {
    const {
      name: b,
      fn: _
    } = s[m], {
      x: C,
      y: v,
      data: y,
      reset: S
    } = await _({
      x: f,
      y: c,
      initialPlacement: n,
      placement: d,
      strategy: l,
      middlewareData: k,
      rects: a,
      platform: o,
      elements: {
        reference: t,
        floating: e
      }
    });
    f = C ?? f, c = v ?? c, k = {
      ...k,
      [b]: {
        ...k[b],
        ...y
      }
    }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (d = S.placement), S.rects && (a = S.rects === !0 ? await o.getElementRects({
      reference: t,
      floating: e,
      strategy: l
    }) : S.rects), {
      x: f,
      y: c
    } = xn(a, d, u)), m = -1);
  }
  return {
    x: f,
    y: c,
    placement: d,
    strategy: l,
    middlewareData: k
  };
};
async function Or(t, e) {
  var i;
  e === void 0 && (e = {});
  const {
    x: n,
    y: l,
    platform: r,
    rects: o,
    elements: s,
    strategy: u
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: c = "floating",
    altBoundary: d = !1,
    padding: k = 0
  } = Ot(e, t), g = Ir(k), b = s[d ? c === "floating" ? "reference" : "floating" : c], _ = Xt(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement(b))) == null || i ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(s.floating)),
    boundary: a,
    rootBoundary: f,
    strategy: u
  })), C = c === "floating" ? {
    ...o.floating,
    x: n,
    y: l
  } : o.reference, v = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(s.floating)), y = await (r.isElement == null ? void 0 : r.isElement(v)) ? await (r.getScale == null ? void 0 : r.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Xt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: C,
    offsetParent: v,
    strategy: u
  }) : C);
  return {
    top: (_.top - S.top + g.top) / y.y,
    bottom: (S.bottom - _.bottom + g.bottom) / y.y,
    left: (_.left - S.left + g.left) / y.x,
    right: (S.right - _.right + g.right) / y.x
  };
}
const Rf = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: i,
      y: n,
      placement: l,
      rects: r,
      platform: o,
      elements: s,
      middlewareData: u
    } = e, {
      element: a,
      padding: f = 0
    } = Ot(t, e) || {};
    if (a == null)
      return {};
    const c = Ir(f), d = {
      x: i,
      y: n
    }, k = Ki(l), g = Xi(k), m = await o.getDimensions(a), b = k === "y", _ = b ? "top" : "left", C = b ? "bottom" : "right", v = b ? "clientHeight" : "clientWidth", y = r.reference[g] + r.reference[k] - d[k] - r.floating[g], S = d[k] - r.reference[k], A = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a));
    let I = A ? A[v] : 0;
    (!I || !await (o.isElement == null ? void 0 : o.isElement(A))) && (I = s.floating[v] || r.floating[g]);
    const j = y / 2 - S / 2, V = I / 2 - m[g] / 2 - 1, ie = dt(c[_], V), P = dt(c[C], V), G = ie, ke = I - m[g] - P, z = I / 2 - m[g] / 2 + j, B = Oi(G, z, ke), L = !u.arrow && At(l) != null && z !== B && r.reference[g] / 2 - (z < G ? ie : P) - m[g] / 2 < 0, re = L ? z < G ? z - G : z - ke : 0;
    return {
      [k]: d[k] + re,
      data: {
        [k]: B,
        centerOffset: z - B - re,
        ...L && {
          alignmentOffset: re
        }
      },
      reset: L
    };
  }
}), Df = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var i, n;
      const {
        placement: l,
        middlewareData: r,
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
      } = Ot(t, e);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const _ = et(l), C = et(s) === s, v = await (u.isRTL == null ? void 0 : u.isRTL(a.floating)), y = d || (C || !m ? [qt(s)] : Pf(s));
      !d && g !== "none" && y.push(...Mf(s, m, g, v));
      const S = [s, ...y], A = await Or(e, b), I = [];
      let j = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (f && I.push(A[_]), c) {
        const G = Af(l, o, v);
        I.push(A[G[0]], A[G[1]]);
      }
      if (j = [...j, {
        placement: l,
        overflows: I
      }], !I.every((G) => G <= 0)) {
        var V, ie;
        const G = (((V = r.flip) == null ? void 0 : V.index) || 0) + 1, ke = S[G];
        if (ke)
          return {
            data: {
              index: G,
              overflows: j
            },
            reset: {
              placement: ke
            }
          };
        let z = (ie = j.filter((B) => B.overflows[0] <= 0).sort((B, L) => B.overflows[1] - L.overflows[1])[0]) == null ? void 0 : ie.placement;
        if (!z)
          switch (k) {
            case "bestFit": {
              var P;
              const B = (P = j.map((L) => [L.placement, L.overflows.filter((re) => re > 0).reduce((re, de) => re + de, 0)]).sort((L, re) => L[1] - re[1])[0]) == null ? void 0 : P[0];
              B && (z = B);
              break;
            }
            case "initialPlacement":
              z = s;
              break;
          }
        if (l !== z)
          return {
            reset: {
              placement: z
            }
          };
      }
      return {};
    }
  };
};
async function Bf(t, e) {
  const {
    placement: i,
    platform: n,
    elements: l
  } = t, r = await (n.isRTL == null ? void 0 : n.isRTL(l.floating)), o = et(i), s = At(i), u = ii(i) === "y", a = ["left", "top"].includes(o) ? -1 : 1, f = r && u ? -1 : 1, c = Ot(e, t);
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
const Ff = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var i, n;
      const {
        x: l,
        y: r,
        placement: o,
        middlewareData: s
      } = e, u = await Bf(e, t);
      return o === ((i = s.offset) == null ? void 0 : i.placement) && (n = s.arrow) != null && n.alignmentOffset ? {} : {
        x: l + u.x,
        y: r + u.y,
        data: {
          ...u,
          placement: o
        }
      };
    }
  };
}, jf = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: i,
        y: n,
        placement: l
      } = e, {
        mainAxis: r = !0,
        crossAxis: o = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: _,
              y: C
            } = b;
            return {
              x: _,
              y: C
            };
          }
        },
        ...u
      } = Ot(t, e), a = {
        x: i,
        y: n
      }, f = await Or(e, u), c = ii(et(l)), d = Er(c);
      let k = a[d], g = a[c];
      if (r) {
        const b = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", C = k + f[b], v = k - f[_];
        k = Oi(C, k, v);
      }
      if (o) {
        const b = c === "y" ? "top" : "left", _ = c === "y" ? "bottom" : "right", C = g + f[b], v = g - f[_];
        g = Oi(C, g, v);
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
function Ke(t) {
  return Ar(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Ee(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function He(t) {
  var e;
  return (e = (Ar(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ar(t) {
  return t instanceof Node || t instanceof Ee(t).Node;
}
function Ue(t) {
  return t instanceof Element || t instanceof Ee(t).Element;
}
function Be(t) {
  return t instanceof HTMLElement || t instanceof Ee(t).HTMLElement;
}
function $n(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Ee(t).ShadowRoot;
}
function Pt(t) {
  const {
    overflow: e,
    overflowX: i,
    overflowY: n,
    display: l
  } = Ae(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + i) && !["inline", "contents"].includes(l);
}
function Wf(t) {
  return ["table", "td", "th"].includes(Ke(t));
}
function Qi(t) {
  const e = Yi(), i = Ae(t);
  return i.transform !== "none" || i.perspective !== "none" || (i.containerType ? i.containerType !== "normal" : !1) || !e && (i.backdropFilter ? i.backdropFilter !== "none" : !1) || !e && (i.filter ? i.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (i.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (i.contain || "").includes(n));
}
function Pr(t) {
  let e = kt(t);
  for (; Be(e) && !ni(e); ) {
    if (Qi(e))
      return e;
    e = kt(e);
  }
  return null;
}
function Yi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ni(t) {
  return ["html", "body", "#document"].includes(Ke(t));
}
function Ae(t) {
  return Ee(t).getComputedStyle(t);
}
function li(t) {
  return Ue(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function kt(t) {
  if (Ke(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    $n(t) && t.host || // Fallback.
    He(t)
  );
  return $n(e) ? e.host : e;
}
function Lr(t) {
  const e = kt(t);
  return ni(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : Be(e) && Pt(e) ? e : Lr(e);
}
function Tt(t, e, i) {
  var n;
  e === void 0 && (e = []), i === void 0 && (i = !0);
  const l = Lr(t), r = l === ((n = t.ownerDocument) == null ? void 0 : n.body), o = Ee(l);
  return r ? e.concat(o, o.visualViewport || [], Pt(l) ? l : [], o.frameElement && i ? Tt(o.frameElement) : []) : e.concat(l, Tt(l, [], i));
}
function Mr(t) {
  const e = Ae(t);
  let i = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const l = Be(t), r = l ? t.offsetWidth : i, o = l ? t.offsetHeight : n, s = Vt(i) !== r || Vt(n) !== o;
  return s && (i = r, n = o), {
    width: i,
    height: n,
    $: s
  };
}
function Ji(t) {
  return Ue(t) ? t : t.contextElement;
}
function ft(t) {
  const e = Ji(t);
  if (!Be(e))
    return Xe(1);
  const i = e.getBoundingClientRect(), {
    width: n,
    height: l,
    $: r
  } = Mr(e);
  let o = (r ? Vt(i.width) : i.width) / n, s = (r ? Vt(i.height) : i.height) / l;
  return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: o,
    y: s
  };
}
const Uf = /* @__PURE__ */ Xe(0);
function Nr(t) {
  const e = Ee(t);
  return !Yi() || !e.visualViewport ? Uf : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Gf(t, e, i) {
  return e === void 0 && (e = !1), !i || e && i !== Ee(t) ? !1 : e;
}
function tt(t, e, i, n) {
  e === void 0 && (e = !1), i === void 0 && (i = !1);
  const l = t.getBoundingClientRect(), r = Ji(t);
  let o = Xe(1);
  e && (n ? Ue(n) && (o = ft(n)) : o = ft(t));
  const s = Gf(r, i, n) ? Nr(r) : Xe(0);
  let u = (l.left + s.x) / o.x, a = (l.top + s.y) / o.y, f = l.width / o.x, c = l.height / o.y;
  if (r) {
    const d = Ee(r), k = n && Ue(n) ? Ee(n) : n;
    let g = d.frameElement;
    for (; g && n && k !== d; ) {
      const m = ft(g), b = g.getBoundingClientRect(), _ = Ae(g), C = b.left + (g.clientLeft + parseFloat(_.paddingLeft)) * m.x, v = b.top + (g.clientTop + parseFloat(_.paddingTop)) * m.y;
      u *= m.x, a *= m.y, f *= m.x, c *= m.y, u += C, a += v, g = Ee(g).frameElement;
    }
  }
  return Xt({
    width: f,
    height: c,
    x: u,
    y: a
  });
}
const Hf = [":popover-open", ":modal"];
function zr(t) {
  let e = !1, i = 0, n = 0;
  function l(r) {
    try {
      e = e || t.matches(r);
    } catch {
    }
  }
  if (Hf.forEach((r) => {
    l(r);
  }), e) {
    const r = Pr(t);
    if (r) {
      const o = r.getBoundingClientRect();
      i = o.x, n = o.y;
    }
  }
  return [e, i, n];
}
function Vf(t) {
  let {
    elements: e,
    rect: i,
    offsetParent: n,
    strategy: l
  } = t;
  const r = He(n), [o] = e ? zr(e.floating) : [!1];
  if (n === r || o)
    return i;
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Xe(1);
  const a = Xe(0), f = Be(n);
  if ((f || !f && l !== "fixed") && ((Ke(n) !== "body" || Pt(r)) && (s = li(n)), Be(n))) {
    const c = tt(n);
    u = ft(n), a.x = c.x + n.clientLeft, a.y = c.y + n.clientTop;
  }
  return {
    width: i.width * u.x,
    height: i.height * u.y,
    x: i.x * u.x - s.scrollLeft * u.x + a.x,
    y: i.y * u.y - s.scrollTop * u.y + a.y
  };
}
function qf(t) {
  return Array.from(t.getClientRects());
}
function Rr(t) {
  return tt(He(t)).left + li(t).scrollLeft;
}
function Xf(t) {
  const e = He(t), i = li(t), n = t.ownerDocument.body, l = xe(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth), r = xe(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -i.scrollLeft + Rr(t);
  const s = -i.scrollTop;
  return Ae(n).direction === "rtl" && (o += xe(e.clientWidth, n.clientWidth) - l), {
    width: l,
    height: r,
    x: o,
    y: s
  };
}
function Kf(t, e) {
  const i = Ee(t), n = He(t), l = i.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, s = 0, u = 0;
  if (l) {
    r = l.width, o = l.height;
    const a = Yi();
    (!a || a && e === "fixed") && (s = l.offsetLeft, u = l.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: s,
    y: u
  };
}
function Qf(t, e) {
  const i = tt(t, !0, e === "fixed"), n = i.top + t.clientTop, l = i.left + t.clientLeft, r = Be(t) ? ft(t) : Xe(1), o = t.clientWidth * r.x, s = t.clientHeight * r.y, u = l * r.x, a = n * r.y;
  return {
    width: o,
    height: s,
    x: u,
    y: a
  };
}
function el(t, e, i) {
  let n;
  if (e === "viewport")
    n = Kf(t, i);
  else if (e === "document")
    n = Xf(He(t));
  else if (Ue(e))
    n = Qf(e, i);
  else {
    const l = Nr(t);
    n = {
      ...e,
      x: e.x - l.x,
      y: e.y - l.y
    };
  }
  return Xt(n);
}
function Dr(t, e) {
  const i = kt(t);
  return i === e || !Ue(i) || ni(i) ? !1 : Ae(i).position === "fixed" || Dr(i, e);
}
function Yf(t, e) {
  const i = e.get(t);
  if (i)
    return i;
  let n = Tt(t, [], !1).filter((s) => Ue(s) && Ke(s) !== "body"), l = null;
  const r = Ae(t).position === "fixed";
  let o = r ? kt(t) : t;
  for (; Ue(o) && !ni(o); ) {
    const s = Ae(o), u = Qi(o);
    !u && s.position === "fixed" && (l = null), (r ? !u && !l : !u && s.position === "static" && !!l && ["absolute", "fixed"].includes(l.position) || Pt(o) && !u && Dr(t, o)) ? n = n.filter((f) => f !== o) : l = s, o = kt(o);
  }
  return e.set(t, n), n;
}
function Jf(t) {
  let {
    element: e,
    boundary: i,
    rootBoundary: n,
    strategy: l
  } = t;
  const o = [...i === "clippingAncestors" ? Yf(e, this._c) : [].concat(i), n], s = o[0], u = o.reduce((a, f) => {
    const c = el(e, f, l);
    return a.top = xe(c.top, a.top), a.right = dt(c.right, a.right), a.bottom = dt(c.bottom, a.bottom), a.left = xe(c.left, a.left), a;
  }, el(e, s, l));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function Zf(t) {
  const {
    width: e,
    height: i
  } = Mr(t);
  return {
    width: e,
    height: i
  };
}
function xf(t, e, i, n) {
  const l = Be(e), r = He(e), o = i === "fixed", s = tt(t, !0, o, e);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Xe(0);
  if (l || !l && !o)
    if ((Ke(e) !== "body" || Pt(r)) && (u = li(e)), l) {
      const m = tt(e, !0, o, e);
      a.x = m.x + e.clientLeft, a.y = m.y + e.clientTop;
    } else
      r && (a.x = Rr(r));
  let f = s.left + u.scrollLeft - a.x, c = s.top + u.scrollTop - a.y;
  const [d, k, g] = zr(n);
  return d && (f += k, c += g, l && (f += e.clientLeft, c += e.clientTop)), {
    x: f,
    y: c,
    width: s.width,
    height: s.height
  };
}
function tl(t, e) {
  return !Be(t) || Ae(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Br(t, e) {
  const i = Ee(t);
  if (!Be(t))
    return i;
  let n = tl(t, e);
  for (; n && Wf(n) && Ae(n).position === "static"; )
    n = tl(n, e);
  return n && (Ke(n) === "html" || Ke(n) === "body" && Ae(n).position === "static" && !Qi(n)) ? i : n || Pr(t) || i;
}
const $f = async function(t) {
  const e = this.getOffsetParent || Br, i = this.getDimensions;
  return {
    reference: xf(t.reference, await e(t.floating), t.strategy, t.floating),
    floating: {
      x: 0,
      y: 0,
      ...await i(t.floating)
    }
  };
};
function ec(t) {
  return Ae(t).direction === "rtl";
}
const tc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Vf,
  getDocumentElement: He,
  getClippingRect: Jf,
  getOffsetParent: Br,
  getElementRects: $f,
  getClientRects: qf,
  getDimensions: Zf,
  getScale: ft,
  isElement: Ue,
  isRTL: ec
};
function ic(t, e) {
  let i = null, n;
  const l = He(t);
  function r() {
    var s;
    clearTimeout(n), (s = i) == null || s.disconnect(), i = null;
  }
  function o(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), r();
    const {
      left: a,
      top: f,
      width: c,
      height: d
    } = t.getBoundingClientRect();
    if (s || e(), !c || !d)
      return;
    const k = zt(f), g = zt(l.clientWidth - (a + c)), m = zt(l.clientHeight - (f + d)), b = zt(a), C = {
      rootMargin: -k + "px " + -g + "px " + -m + "px " + -b + "px",
      threshold: xe(0, dt(1, u)) || 1
    };
    let v = !0;
    function y(S) {
      const A = S[0].intersectionRatio;
      if (A !== u) {
        if (!v)
          return o();
        A ? o(!1, A) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      v = !1;
    }
    try {
      i = new IntersectionObserver(y, {
        ...C,
        // Handle <iframe>s
        root: l.ownerDocument
      });
    } catch {
      i = new IntersectionObserver(y, C);
    }
    i.observe(t);
  }
  return o(!0), r;
}
function il(t, e, i, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: l = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = n, a = Ji(t), f = l || r ? [...a ? Tt(a) : [], ...Tt(e)] : [];
  f.forEach((_) => {
    l && _.addEventListener("scroll", i, {
      passive: !0
    }), r && _.addEventListener("resize", i);
  });
  const c = a && s ? ic(a, i) : null;
  let d = -1, k = null;
  o && (k = new ResizeObserver((_) => {
    let [C] = _;
    C && C.target === a && k && (k.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var v;
      (v = k) == null || v.observe(e);
    })), i();
  }), a && !u && k.observe(a), k.observe(e));
  let g, m = u ? tt(t) : null;
  u && b();
  function b() {
    const _ = tt(t);
    m && (_.x !== m.x || _.y !== m.y || _.width !== m.width || _.height !== m.height) && i(), m = _, g = requestAnimationFrame(b);
  }
  return i(), () => {
    var _;
    f.forEach((C) => {
      l && C.removeEventListener("scroll", i), r && C.removeEventListener("resize", i);
    }), c == null || c(), (_ = k) == null || _.disconnect(), k = null, u && cancelAnimationFrame(g);
  };
}
const nc = jf, lc = Df, rc = Rf, oc = (t, e, i) => {
  const n = /* @__PURE__ */ new Map(), l = {
    platform: tc,
    ...i
  }, r = {
    ...l.platform,
    _c: n
  };
  return zf(t, e, {
    ...l,
    platform: r
  });
};
function nl(t) {
  let e;
  return {
    c() {
      e = M("div");
    },
    m(i, n) {
      E(i, e, n), t[23](e);
    },
    p: le,
    d(i) {
      i && T(e), t[23](null);
    }
  };
}
function ll(t) {
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
  let l = {
    $$slots: { default: [sc] },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < n.length; r += 1)
    l = N(l, n[r]);
  return e = new lt({ props: l }), e.$on("focusin", function() {
    he(qe(
      /*activeContent*/
      t[1],
      /*showHandler*/
      t[7]
    )) && qe(
      /*activeContent*/
      t[1],
      /*showHandler*/
      t[7]
    ).apply(this, arguments);
  }), e.$on("focusout", function() {
    he(qe(
      /*activeContent*/
      t[1],
      /*hideHandler*/
      t[8]
    )) && qe(
      /*activeContent*/
      t[1],
      /*hideHandler*/
      t[8]
    ).apply(this, arguments);
  }), e.$on("mouseenter", function() {
    he(qe(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*showHandler*/
      t[7]
    )) && qe(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*showHandler*/
      t[7]
    ).apply(this, arguments);
  }), e.$on("mouseleave", function() {
    he(qe(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*hideHandler*/
      t[8]
    )) && qe(
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
    m(r, o) {
      Z(e, r, o), i = !0;
    },
    p(r, o) {
      t = r;
      const s = o[0] & /*init, referenceEl, activeContent, $$restProps*/
      2570 ? fe(n, [
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
    i(r) {
      i || (p(e.$$.fragment, r), i = !0);
    },
    o(r) {
      w(e.$$.fragment, r), i = !1;
    },
    d(r) {
      x(e, r);
    }
  };
}
function rl(t) {
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
    m(l, r) {
      E(l, e, r), i || (n = je(
        /*initArrow*/
        t[10].call(null, e)
      ), i = !0);
    },
    p(l, r) {
      r[0] & /*arrowClass*/
      64 && h(
        e,
        "class",
        /*arrowClass*/
        l[6]
      );
    },
    d(l) {
      l && T(e), i = !1, n();
    }
  };
}
function sc(t) {
  let e, i, n;
  const l = (
    /*#slots*/
    t[22].default
  ), r = X(
    l,
    t,
    /*$$scope*/
    t[24],
    null
  );
  let o = (
    /*arrow*/
    t[2] && rl(t)
  );
  return {
    c() {
      r && r.c(), e = U(), o && o.c(), i = ae();
    },
    m(s, u) {
      r && r.m(s, u), E(s, e, u), o && o.m(s, u), E(s, i, u), n = !0;
    },
    p(s, u) {
      r && r.p && (!n || u[0] & /*$$scope*/
      16777216) && Q(
        r,
        l,
        s,
        /*$$scope*/
        s[24],
        n ? K(
          l,
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
      s[2] ? o ? o.p(s, u) : (o = rl(s), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(s) {
      n || (p(r, s), n = !0);
    },
    o(s) {
      w(r, s), n = !1;
    },
    d(s) {
      s && (T(e), T(i)), r && r.d(s), o && o.d(s);
    }
  };
}
function uc(t) {
  let e, i, n, l = !/*referenceEl*/
  t[3] && nl(t), r = (
    /*open*/
    t[0] && /*referenceEl*/
    t[3] && ll(t)
  );
  return {
    c() {
      l && l.c(), e = U(), r && r.c(), i = ae();
    },
    m(o, s) {
      l && l.m(o, s), E(o, e, s), r && r.m(o, s), E(o, i, s), n = !0;
    },
    p(o, s) {
      /*referenceEl*/
      o[3] ? l && (l.d(1), l = null) : l ? l.p(o, s) : (l = nl(o), l.c(), l.m(e.parentNode, e)), /*open*/
      o[0] && /*referenceEl*/
      o[3] ? r ? (r.p(o, s), s[0] & /*open, referenceEl*/
      9 && p(r, 1)) : (r = ll(o), r.c(), p(r, 1), r.m(i.parentNode, i)) : r && (oe(), w(r, 1, 1, () => {
        r = null;
      }), se());
    },
    i(o) {
      n || (p(r), n = !0);
    },
    o(o) {
      w(r), n = !1;
    },
    d(o) {
      o && (T(e), T(i)), l && l.d(o), r && r.d(o);
    }
  };
}
function qe(t, e) {
  return t ? e : () => {
  };
}
function ac(t, e, i) {
  let n;
  const l = [
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
  let r = ne(e, l), { $$slots: o = {}, $$scope: s } = e, { activeContent: u = !1 } = e, { arrow: a = !0 } = e, { offset: f = 8 } = e, { placement: c = "top" } = e, { trigger: d = "hover" } = e, { triggeredBy: k = void 0 } = e, { reference: g = void 0 } = e, { strategy: m = "absolute" } = e, { open: b = !1 } = e, { yOnly: _ = !1 } = e, { middlewares: C = [lc(), nc()] } = e;
  const v = Ge();
  let y, S, A, I, j, V = [], ie = !1;
  const P = () => (ie = !0, setTimeout(() => ie = !1, 250)), G = (q) => {
    S === void 0 && console.error("trigger undefined"), !g && V.includes(q.target) && S !== q.target && (i(3, S = q.target), P()), y && q.type === "focusin" && !b && P(), i(0, b = y && q.type === "click" && !ie ? !b : !0);
  }, ke = (q) => q.matches(":hover"), z = (q) => q.contains(document.activeElement), B = (q) => q != null ? `${q}px` : "", L = (q) => {
    u ? setTimeout(
      () => {
        const ve = [S, A, ...V].filter(Boolean);
        q.type === "mouseleave" && ve.some(ke) || q.type === "focusout" && ve.some(z) || i(0, b = !1);
      },
      100
    ) : i(0, b = !1);
  };
  let re;
  const de = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function ye() {
    oc(S, A, { placement: c, strategy: m, middleware: n }).then(({ x: q, y: ve, middlewareData: Te, placement: H, strategy: ri }) => {
      A.style.position = ri, A.style.left = _ ? "0" : B(q), A.style.top = B(ve), Te.arrow && I instanceof HTMLDivElement && (i(20, I.style.left = B(Te.arrow.x), I), i(20, I.style.top = B(Te.arrow.y), I), i(21, re = de[H.split("-")[0]]), i(20, I.style[re] = B(-I.offsetWidth / 2 - (e.border ? 1 : 0)), I));
    });
  }
  function Le(q, ve) {
    A = q;
    let Te = il(ve, A, ye);
    return {
      update(H) {
        Te(), Te = il(H, A, ye);
      },
      destroy() {
        Te();
      }
    };
  }
  Ye(() => {
    const q = [
      ["focusin", G, !0],
      ["focusout", L, !0],
      ["click", G, y],
      ["mouseenter", G, !y],
      ["mouseleave", L, !y]
    ];
    return k ? V = [...document.querySelectorAll(k)] : V = j.previousElementSibling ? [j.previousElementSibling] : [], V.length || console.error("No triggers found."), V.forEach((ve) => {
      ve.tabIndex < 0 && (ve.tabIndex = 0);
      for (const [Te, H, ri] of q)
        ri && ve.addEventListener(Te, H);
    }), g ? (i(3, S = document.querySelector(g) ?? document.body), S === document.body ? console.error(`Popup reference not found: '${g}'`) : (S.addEventListener("focusout", L), y || S.addEventListener("mouseleave", L))) : i(3, S = V[0]), () => {
      V.forEach((ve) => {
        if (ve)
          for (const [Te, H] of q)
            ve.removeEventListener(Te, H);
      }), S && (S.removeEventListener("focusout", L), S.removeEventListener("mouseleave", L));
    };
  });
  let Ie;
  function Ne(q) {
    return i(20, I = q), {
      destroy() {
        i(20, I = null);
      }
    };
  }
  function pe(q) {
    Se[q ? "unshift" : "push"](() => {
      j = q, i(5, j);
    });
  }
  return t.$$set = (q) => {
    i(36, e = N(N({}, e), F(q))), i(11, r = ne(e, l)), "activeContent" in q && i(1, u = q.activeContent), "arrow" in q && i(2, a = q.arrow), "offset" in q && i(12, f = q.offset), "placement" in q && i(13, c = q.placement), "trigger" in q && i(14, d = q.trigger), "triggeredBy" in q && i(15, k = q.triggeredBy), "reference" in q && i(16, g = q.reference), "strategy" in q && i(17, m = q.strategy), "open" in q && i(0, b = q.open), "yOnly" in q && i(18, _ = q.yOnly), "middlewares" in q && i(19, C = q.middlewares), "$$scope" in q && i(24, s = q.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*trigger*/
    16384 && i(4, y = d === "click"), t.$$.dirty[0] & /*open*/
    1 && v("show", b), t.$$.dirty[0] & /*placement, referenceEl*/
    8200 && c && (i(3, S), i(13, c)), t.$$.dirty[0] & /*middlewares, offset, arrowEl*/
    1576960 && (n = [
      ...C,
      Ff(+f),
      I && rc({ element: I, padding: 10 })
    ]), i(6, Ie = ir("uikit-absolute uikit-pointer-events-none uikit-block uikit-w-[10px] uikit-h-[10px] uikit-rotate-45 uikit-bg-inherit uikit-border-inherit", e.border && re === "bottom" && "uikit-border-b uikit-border-e", e.border && re === "top" && "uikit-border-t uikit-border-s ", e.border && re === "right" && "uikit-border-t uikit-border-e ", e.border && re === "left" && "uikit-border-b uikit-border-s "));
  }, e = F(e), [
    b,
    u,
    a,
    S,
    y,
    j,
    Ie,
    G,
    L,
    Le,
    Ne,
    r,
    f,
    c,
    d,
    k,
    g,
    m,
    _,
    C,
    I,
    re,
    o,
    pe,
    s
  ];
}
class fc extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      ac,
      uc,
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
const cc = (t) => ({}), ol = (t) => ({}), dc = (t) => ({}), sl = (t) => ({});
function ul(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[12].header
  ), l = X(
    n,
    t,
    /*$$scope*/
    t[15],
    sl
  );
  return {
    c() {
      e = M("div"), l && l.c(), h(
        e,
        "class",
        /*headerCls*/
        t[2]
      );
    },
    m(r, o) {
      E(r, e, o), l && l.m(e, null), i = !0;
    },
    p(r, o) {
      l && l.p && (!i || o & /*$$scope*/
      32768) && Q(
        l,
        n,
        r,
        /*$$scope*/
        r[15],
        i ? K(
          n,
          /*$$scope*/
          r[15],
          o,
          dc
        ) : Y(
          /*$$scope*/
          r[15]
        ),
        sl
      );
    },
    i(r) {
      i || (p(l, r), i = !0);
    },
    o(r) {
      w(l, r), i = !1;
    },
    d(r) {
      r && T(e), l && l.d(r);
    }
  };
}
function al(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[12].footer
  ), l = X(
    n,
    t,
    /*$$scope*/
    t[15],
    ol
  );
  return {
    c() {
      e = M("div"), l && l.c(), h(
        e,
        "class",
        /*footerCls*/
        t[4]
      );
    },
    m(r, o) {
      E(r, e, o), l && l.m(e, null), i = !0;
    },
    p(r, o) {
      l && l.p && (!i || o & /*$$scope*/
      32768) && Q(
        l,
        n,
        r,
        /*$$scope*/
        r[15],
        i ? K(
          n,
          /*$$scope*/
          r[15],
          o,
          cc
        ) : Y(
          /*$$scope*/
          r[15]
        ),
        ol
      );
    },
    i(r) {
      i || (p(l, r), i = !0);
    },
    o(r) {
      w(l, r), i = !1;
    },
    d(r) {
      r && T(e), l && l.d(r);
    }
  };
}
function kc(t) {
  let e, i, n, l, r, o = (
    /*$$slots*/
    t[6].header && ul(t)
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
    t[6].footer && al(t)
  );
  return {
    c() {
      o && o.c(), e = U(), i = M("ul"), u && u.c(), n = U(), a && a.c(), l = ae(), h(
        i,
        "class",
        /*ulCls*/
        t[3]
      );
    },
    m(f, c) {
      o && o.m(f, c), E(f, e, c), E(f, i, c), u && u.m(i, null), E(f, n, c), a && a.m(f, c), E(f, l, c), r = !0;
    },
    p(f, c) {
      /*$$slots*/
      f[6].header ? o ? (o.p(f, c), c & /*$$slots*/
      64 && p(o, 1)) : (o = ul(f), o.c(), p(o, 1), o.m(e.parentNode, e)) : o && (oe(), w(o, 1, 1, () => {
        o = null;
      }), se()), u && u.p && (!r || c & /*$$scope*/
      32768) && Q(
        u,
        s,
        f,
        /*$$scope*/
        f[15],
        r ? K(
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
      64 && p(a, 1)) : (a = al(f), a.c(), p(a, 1), a.m(l.parentNode, l)) : a && (oe(), w(a, 1, 1, () => {
        a = null;
      }), se());
    },
    i(f) {
      r || (p(o), p(u, f), p(a), r = !0);
    },
    o(f) {
      w(o), w(u, f), w(a), r = !1;
    },
    d(f) {
      f && (T(e), T(i), T(n), T(l)), o && o.d(f), u && u.d(f), a && a.d(f);
    }
  };
}
function gc(t) {
  let e, i, n;
  const l = [
    { activeContent: !0 },
    /*$$restProps*/
    t[5],
    { class: (
      /*containerCls*/
      t[1]
    ) }
  ];
  function r(s) {
    t[13](s);
  }
  let o = {
    $$slots: { default: [kc] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < l.length; s += 1)
    o = N(o, l[s]);
  return (
    /*open*/
    t[0] !== void 0 && (o.open = /*open*/
    t[0]), e = new fc({ props: o }), Se.push(() => Zt(e, "open", r)), e.$on(
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
        34 ? fe(l, [
          l[0],
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
        s[0], Jt(() => i = !1)), e.$set(a);
      },
      i(s) {
        n || (p(e.$$.fragment, s), n = !0);
      },
      o(s) {
        w(e.$$.fragment, s), n = !1;
      },
      d(s) {
        x(e, s);
      }
    }
  );
}
function mc(t, e, i) {
  const n = ["activeUrl", "open", "containerClass", "headerClass", "footerClass", "activeClass"];
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e;
  const s = Qe(r), u = it("");
  let { activeUrl: a = "" } = e, { open: f = !1 } = e, { containerClass: c = "uikit-divide-y z-50" } = e, { headerClass: d = "uikit-py-1 uikit-overflow-hidden uikit-rounded-t-lg" } = e, { footerClass: k = "uikit-py-1 uikit-overflow-hidden uikit-rounded-b-lg" } = e, { activeClass: g = "uikit-text-primary-700 dark:uikit-text-primary-700 hover:uikit-text-primary-900 dark:hover:uikit-text-primary-900" } = e, m = O(g, e.classActive);
  We("DropdownType", { activeClass: m }), We("activeUrl", u);
  let b = O(c, e.classContainer), _ = O(d, e.classHeader), C = O("py-1", e.class), v = O(k, e.classFooter);
  function y(A) {
    f = A, i(0, f);
  }
  function S(A) {
    W.call(this, t, A);
  }
  return t.$$set = (A) => {
    i(18, e = N(N({}, e), F(A))), i(5, l = ne(e, n)), "activeUrl" in A && i(7, a = A.activeUrl), "open" in A && i(0, f = A.open), "containerClass" in A && i(8, c = A.containerClass), "headerClass" in A && i(9, d = A.headerClass), "footerClass" in A && i(10, k = A.footerClass), "activeClass" in A && i(11, g = A.activeClass), "$$scope" in A && i(15, o = A.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*activeUrl*/
    128 && u.set(a), i(5, l.arrow = l.arrow ?? !1, l), i(5, l.trigger = l.trigger ?? "click", l), i(5, l.placement = l.placement ?? "bottom", l), i(5, l.color = l.color ?? "dropdown", l), i(5, l.shadow = l.shadow ?? !0, l), i(5, l.rounded = l.rounded ?? !0, l);
  }, e = F(e), [
    f,
    b,
    _,
    C,
    v,
    l,
    s,
    a,
    c,
    d,
    k,
    g,
    r,
    y,
    S,
    o
  ];
}
class hc extends te {
  constructor(e) {
    super(), ee(this, e, mc, gc, J, {
      activeUrl: 7,
      open: 0,
      containerClass: 8,
      headerClass: 9,
      footerClass: 10,
      activeClass: 11
    });
  }
}
function bc(t) {
  let e = (
    /*tag*/
    t[2]
  ), i, n, l = (
    /*tag*/
    t[2] && ki(t)
  );
  return {
    c() {
      l && l.c(), i = ae();
    },
    m(r, o) {
      l && l.m(r, o), E(r, i, o), n = !0;
    },
    p(r, o) {
      /*tag*/
      r[2] ? e ? J(
        e,
        /*tag*/
        r[2]
      ) ? (l.d(1), l = ki(r), e = /*tag*/
      r[2], l.c(), l.m(i.parentNode, i)) : l.p(r, o) : (l = ki(r), e = /*tag*/
      r[2], l.c(), l.m(i.parentNode, i)) : e && (l.d(1), l = null, e = /*tag*/
      r[2]);
    },
    i(r) {
      n || (p(l, r), n = !0);
    },
    o(r) {
      w(l, r), n = !1;
    },
    d(r) {
      r && T(i), l && l.d(r);
    }
  };
}
function _c(t) {
  let e, i, n, l;
  const r = (
    /*#slots*/
    t[12].default
  ), o = X(
    r,
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
    u = N(u, s[a]);
  return {
    c() {
      e = M("button"), o && o.c(), ue(e, u);
    },
    m(a, f) {
      E(a, e, f), o && o.m(e, null), e.autofocus && e.focus(), i = !0, n || (l = [
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
      2048) && Q(
        o,
        r,
        a,
        /*$$scope*/
        a[11],
        i ? K(
          r,
          /*$$scope*/
          a[11],
          f,
          null
        ) : Y(
          /*$$scope*/
          a[11]
        ),
        null
      ), ue(e, u = fe(s, [
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
      i || (p(o, a), i = !0);
    },
    o(a) {
      w(o, a), i = !1;
    },
    d(a) {
      a && T(e), o && o.d(a), n = !1, Ce(l);
    }
  };
}
function pc(t) {
  let e, i, n, l;
  const r = (
    /*#slots*/
    t[12].default
  ), o = X(
    r,
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
    u = N(u, s[a]);
  return {
    c() {
      e = M("a"), o && o.c(), ue(e, u);
    },
    m(a, f) {
      E(a, e, f), o && o.m(e, null), i = !0, n || (l = [
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
      2048) && Q(
        o,
        r,
        a,
        /*$$scope*/
        a[11],
        i ? K(
          r,
          /*$$scope*/
          a[11],
          f,
          null
        ) : Y(
          /*$$scope*/
          a[11]
        ),
        null
      ), ue(e, u = fe(s, [
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
      i || (p(o, a), i = !0);
    },
    o(a) {
      w(o, a), i = !1;
    },
    d(a) {
      a && T(e), o && o.d(a), n = !1, Ce(l);
    }
  };
}
function ki(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[12].default
  ), l = X(
    n,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let r = [
    /*$$restProps*/
    t[4],
    { class: (
      /*buttonClass*/
      t[3]
    ) }
  ], o = {};
  for (let s = 0; s < r.length; s += 1)
    o = N(o, r[s]);
  return {
    c() {
      e = M(
        /*tag*/
        t[2]
      ), l && l.c(), ct(
        /*tag*/
        t[2]
      )(e, o);
    },
    m(s, u) {
      E(s, e, u), l && l.m(e, null), i = !0;
    },
    p(s, u) {
      l && l.p && (!i || u[0] & /*$$scope*/
      2048) && Q(
        l,
        n,
        s,
        /*$$scope*/
        s[11],
        i ? K(
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
      ), ct(
        /*tag*/
        s[2]
      )(e, o = fe(r, [
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
      i || (p(l, s), i = !0);
    },
    o(s) {
      w(l, s), i = !1;
    },
    d(s) {
      s && T(e), l && l.d(s);
    }
  };
}
function yc(t) {
  let e, i, n, l;
  const r = [pc, _c, bc], o = [];
  function s(u, a) {
    return (
      /*href*/
      u[0] ? 0 : (
        /*tag*/
        u[2] === "button" ? 1 : 2
      )
    );
  }
  return e = s(t), i = o[e] = r[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), E(u, n, a), l = !0;
    },
    p(u, a) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), w(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = r[e](u), i.c()), p(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      l || (p(i), l = !0);
    },
    o(u) {
      w(i), l = !1;
    },
    d(u) {
      u && T(n), o[e].d(u);
    }
  };
}
function vc(t, e, i) {
  const n = ["pill", "outline", "size", "href", "type", "color", "shadow", "tag", "checked"];
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e;
  const s = Re("group");
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
  }, C = {
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
  }, y = {
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
  }, A = {
    xs: "uikit-px-3 uikit-py-2 uikit-text-xs",
    sm: "uikit-px-4 uikit-py-2 uikit-text-sm",
    md: "uikit-px-5 uikit-py-2.5 uikit-text-sm",
    lg: "uikit-px-5 uikit-py-3 uikit-text-base",
    xl: "uikit-px-6 uikit-py-3.5 uikit-text-base"
  }, I = () => a || k === "alternative" || k === "light";
  let j;
  function V(H) {
    W.call(this, t, H);
  }
  function ie(H) {
    W.call(this, t, H);
  }
  function P(H) {
    W.call(this, t, H);
  }
  function G(H) {
    W.call(this, t, H);
  }
  function ke(H) {
    W.call(this, t, H);
  }
  function z(H) {
    W.call(this, t, H);
  }
  function B(H) {
    W.call(this, t, H);
  }
  function L(H) {
    W.call(this, t, H);
  }
  function re(H) {
    W.call(this, t, H);
  }
  function de(H) {
    W.call(this, t, H);
  }
  function ye(H) {
    W.call(this, t, H);
  }
  function Le(H) {
    W.call(this, t, H);
  }
  function Ie(H) {
    W.call(this, t, H);
  }
  function Ne(H) {
    W.call(this, t, H);
  }
  function pe(H) {
    W.call(this, t, H);
  }
  function q(H) {
    W.call(this, t, H);
  }
  function ve(H) {
    W.call(this, t, H);
  }
  function Te(H) {
    W.call(this, t, H);
  }
  return t.$$set = (H) => {
    i(39, e = N(N({}, e), F(H))), i(4, l = ne(e, n)), "pill" in H && i(5, u = H.pill), "outline" in H && i(6, a = H.outline), "size" in H && i(7, f = H.size), "href" in H && i(0, c = H.href), "type" in H && i(1, d = H.type), "color" in H && i(8, k = H.color), "shadow" in H && i(9, g = H.shadow), "tag" in H && i(2, m = H.tag), "checked" in H && i(10, b = H.checked), "$$scope" in H && i(11, o = H.$$scope);
  }, t.$$.update = () => {
    i(3, j = O(
      "uikit-text-center uikit-font-medium",
      s ? "focus-within:uikit-ring-2" : "focus-within:uikit-ring-4",
      s && "focus-within:uikit-z-10",
      s || "focus-within:uikit-outline-none",
      "uikit-inline-flex uikit-items-center uikit-justify-center " + A[f],
      a && b && "uikit-border dark:uikit-border-gray-900",
      a && b && C[k],
      a && !b && S[k],
      !a && b && C[k],
      !a && !b && _[k],
      k === "alternative" && (s && !b ? "dark:uikit-bg-gray-700 dark:uikit-text-white dark:uikit-border-gray-700 dark:hover:uikit-border-gray-600 dark:hover:uikit-bg-gray-600" : "dark:uikit-bg-transparent dark:uikit-border-gray-600 dark:hover:uikit-border-gray-700"),
      a && k === "dark" && (s ? b ? "uikit-bg-gray-900 uikit-border-gray-800 dark:uikit-border-white dark:uikit-bg-gray-600" : "dark:uikit-text-white uikit-border-gray-800 dark:uikit-border-white" : "dark:uikit-text-gray-400 dark:uikit-border-gray-700"),
      v[k],
      I() && s && "uikit-border-s-0 first:uikit-border-s",
      s ? u && "first:uikit-rounded-s-full last:uikit-rounded-e-full" || "first:uikit-rounded-s-lg last:uikit-rounded-e-lg" : u && "uikit-rounded-full" || "uikit-rounded-lg",
      g && "uikit-shadow-lg",
      g && y[k],
      e.disabled && "uikit-cursor-not-allowed uikit-opacity-50",
      e.class
    ));
  }, e = F(e), [
    c,
    d,
    m,
    j,
    l,
    u,
    a,
    f,
    k,
    g,
    b,
    o,
    r,
    V,
    ie,
    P,
    G,
    ke,
    z,
    B,
    L,
    re,
    de,
    ye,
    Le,
    Ie,
    Ne,
    pe,
    q,
    ve,
    Te
  ];
}
class Kt extends te {
  constructor(e) {
    super(), ee(
      this,
      e,
      vc,
      yc,
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
function wc(t) {
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
    m(l, r) {
      n && n.m(l, r), e = !0;
    },
    p(l, r) {
      n && n.p && (!e || r & /*$$scope*/
      64) && Q(
        n,
        i,
        l,
        /*$$scope*/
        l[6],
        e ? K(
          i,
          /*$$scope*/
          l[6],
          r,
          null
        ) : Y(
          /*$$scope*/
          l[6]
        ),
        null
      );
    },
    i(l) {
      e || (p(n, l), e = !0);
    },
    o(l) {
      w(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Cc(t) {
  let e, i;
  const n = (
    /*#slots*/
    t[7].default
  ), l = X(
    n,
    t,
    /*$$scope*/
    t[6],
    null
  );
  let r = [
    /*$$restProps*/
    t[3],
    { class: (
      /*labelClass*/
      t[2]
    ) }
  ], o = {};
  for (let s = 0; s < r.length; s += 1)
    o = N(o, r[s]);
  return {
    c() {
      e = M("label"), l && l.c(), ue(e, o);
    },
    m(s, u) {
      E(s, e, u), l && l.m(e, null), t[8](e), i = !0;
    },
    p(s, u) {
      l && l.p && (!i || u & /*$$scope*/
      64) && Q(
        l,
        n,
        s,
        /*$$scope*/
        s[6],
        i ? K(
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
      ), ue(e, o = fe(r, [
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
      i || (p(l, s), i = !0);
    },
    o(s) {
      w(l, s), i = !1;
    },
    d(s) {
      s && T(e), l && l.d(s), t[8](null);
    }
  };
}
function Sc(t) {
  let e, i, n, l;
  const r = [Cc, wc], o = [];
  function s(u, a) {
    return (
      /*show*/
      u[0] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = r[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), E(u, n, a), l = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), w(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = r[e](u), i.c()), p(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      l || (p(i), l = !0);
    },
    o(u) {
      w(i), l = !1;
    },
    d(u) {
      u && T(n), o[e].d(u);
    }
  };
}
function Tc(t, e, i) {
  let n;
  const l = ["color", "defaultClass", "show"];
  let r = ne(e, l), { $$slots: o = {}, $$scope: s } = e, { color: u = "gray" } = e, { defaultClass: a = "uikit-text-sm rtl:uikit-text-right uikit-font-medium uikit-block" } = e, { show: f = !0 } = e, c;
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
    i(10, e = N(N({}, e), F(g))), i(3, r = ne(e, l)), "color" in g && i(4, u = g.color), "defaultClass" in g && i(5, a = g.defaultClass), "show" in g && i(0, f = g.show), "$$scope" in g && i(6, s = g.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*node, color*/
    18) {
      const g = c == null ? void 0 : c.control;
      i(4, u = g != null && g.disabled ? "disabled" : u);
    }
    i(2, n = O(a, d[u], e.class));
  }, e = F(e), [
    f,
    c,
    n,
    r,
    u,
    a,
    s,
    o,
    k
  ];
}
class Ec extends te {
  constructor(e) {
    super(), ee(this, e, Tc, Sc, J, { color: 4, defaultClass: 5, show: 0 });
  }
}
function Ic(t) {
  let e, i, n, l, r, o, s, u = [
    { type: "radio" },
    { __value: (
      /*value*/
      t[4]
    ) },
    /*$$restProps*/
    t[8],
    {
      class: i = cl(
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
    a = N(a, u[d]);
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
  return r = Jr(
    /*$$binding_groups*/
    t[22][0]
  ), {
    c() {
      e = M("input"), n = U(), c && c.c(), ue(e, a), r.p(e);
    },
    m(d, k) {
      E(d, e, k), e.autofocus && e.focus(), e.checked = e.__value === /*group*/
      t[0], E(d, n, k), c && c.m(d, k), l = !0, o || (s = [
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
      ue(e, a = fe(u, [
        { type: "radio" },
        (!l || k & /*value*/
        16) && { __value: (
          /*value*/
          d[4]
        ) },
        k & /*$$restProps*/
        256 && /*$$restProps*/
        d[8],
        (!l || k & /*custom, color, $$slots, $$props*/
        198 && i !== (i = cl(
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
      d[0]), c && c.p && (!l || k & /*$$scope*/
      8388608) && Q(
        c,
        f,
        d,
        /*$$scope*/
        d[23],
        l ? K(
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
      l || (p(c, d), l = !0);
    },
    o(d) {
      w(c, d), l = !1;
    },
    d(d) {
      d && (T(e), T(n)), c && c.d(d), r.r(), o = !1, Ce(s);
    }
  };
}
function Oc(t) {
  let e, i;
  return e = new Ec({
    props: {
      class: fl(
        /*inline*/
        t[3],
        /*$$props*/
        t[6].class
      ),
      show: (
        /*$$slots*/
        t[7].default
      ),
      $$slots: { default: [Ic] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, [l]) {
      const r = {};
      l & /*inline, $$props*/
      72 && (r.class = fl(
        /*inline*/
        n[3],
        /*$$props*/
        n[6].class
      )), l & /*$$slots*/
      128 && (r.show = /*$$slots*/
      n[7].default), l & /*$$scope, value, $$restProps, custom, color, $$slots, $$props, group*/
      8389079 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
const Ac = {
  primary: "uikit-text-primary-600 focus:uikit-ring-primary-500 dark:focus:uikit-ring-primary-600",
  secondary: "uikit-text-secondary-600 focus:uikit-ring-secondary-500 dark:focus:uikit-ring-secondary-600",
  red: "uikit-text-red-600 focus:uikit-ring-red-500 dark:focus:uikit-ring-red-600",
  green: "uikit-text-green-600 focus:uikit-ring-green-500 dark:focus:uikit-ring-green-600",
  purple: "uikit-text-purple-600 focus:uikit-ring-purple-500 dark:focus:uikit-ring-purple-600",
  teal: "uikit-text-teal-600 focus:uikit-ring-teal-500 dark:focus:uikit-ring-teal-600",
  yellow: "uikit-text-yellow-400 focus:uikit-ring-yellow-500 dark:focus:uikit-ring-yellow-600",
  orange: "uikit-text-orange-500 focus:uikit-ring-orange-500 dark:focus:uikit-ring-orange-600",
  blue: "uikit-text-blue-600 focus:uikit-ring-blue-500 dark:focus:uikit-ring-blue-600"
}, fl = (t, e) => O(t ? "uikit-inline-flex" : "uikit-flex", "uikit-items-center", e);
let Pc = "uikit-me-2";
const cl = (t, e, i, n, l) => O(
  "uikit-w-4 uikit-h-4 uikit-bg-gray-100 uikit-border-gray-300 dark:uikit-ring-offset-gray-800 focus:uikit-ring-2",
  Pc,
  n ? "dark:uikit-bg-gray-600 dark:uikit-border-gray-500" : "dark:uikit-bg-gray-700 dark:uikit-border-gray-600",
  t && "uikit-sr-only uikit-peer",
  i && "uikit-rounded",
  Ac[e],
  l
);
function Lc(t, e, i) {
  const n = ["color", "custom", "inline", "group", "value"];
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e;
  const s = Qe(r);
  let { color: u = "primary" } = e, { custom: a = !1 } = e, { inline: f = !1 } = e, { group: c = "" } = e, { value: d = "" } = e, k = Re("background");
  const g = [[]];
  function m(P) {
    W.call(this, t, P);
  }
  function b(P) {
    W.call(this, t, P);
  }
  function _(P) {
    W.call(this, t, P);
  }
  function C(P) {
    W.call(this, t, P);
  }
  function v(P) {
    W.call(this, t, P);
  }
  function y(P) {
    W.call(this, t, P);
  }
  function S(P) {
    W.call(this, t, P);
  }
  function A(P) {
    W.call(this, t, P);
  }
  function I(P) {
    W.call(this, t, P);
  }
  function j(P) {
    W.call(this, t, P);
  }
  function V(P) {
    W.call(this, t, P);
  }
  function ie() {
    c = this.__value, i(0, c);
  }
  return t.$$set = (P) => {
    i(6, e = N(N({}, e), F(P))), i(8, l = ne(e, n)), "color" in P && i(1, u = P.color), "custom" in P && i(2, a = P.custom), "inline" in P && i(3, f = P.inline), "group" in P && i(0, c = P.group), "value" in P && i(4, d = P.value), "$$scope" in P && i(23, o = P.$$scope);
  }, e = F(e), [
    c,
    u,
    a,
    f,
    d,
    k,
    e,
    s,
    l,
    r,
    m,
    b,
    _,
    C,
    v,
    y,
    S,
    A,
    I,
    j,
    V,
    ie,
    g,
    o
  ];
}
class Mc extends te {
  constructor(e) {
    super(), ee(this, e, Lc, Oc, J, {
      color: 1,
      custom: 2,
      inline: 3,
      group: 0,
      value: 4
    });
  }
}
function dl(t, e, i) {
  const n = t.slice();
  return n[4] = e[i], n[6] = i, n;
}
function Nc(t) {
  let e = (
    /*group*/
    (t[1] > -1 ? (
      /*items*/
      t[0][
        /*group*/
        t[1]
      ]
    ) : "select a value") + ""
  ), i, n, l;
  return n = new It({
    props: {
      name: "ChevronDownSolid",
      className: "uikit-w-3 uikit-h-3 uikit-ms-2 uikit-text-white dark:uikit-text-white"
    }
  }), {
    c() {
      i = me(e), $(n.$$.fragment);
    },
    m(r, o) {
      E(r, i, o), Z(n, r, o), l = !0;
    },
    p(r, o) {
      (!l || o & /*group, items*/
      3) && e !== (e = /*group*/
      (r[1] > -1 ? (
        /*items*/
        r[0][
          /*group*/
          r[1]
        ]
      ) : "select a value") + "") && we(i, e);
    },
    i(r) {
      l || (p(n.$$.fragment, r), l = !0);
    },
    o(r) {
      w(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && T(i), x(n, r);
    }
  };
}
function zc(t) {
  let e = (
    /*item*/
    t[4] + ""
  ), i;
  return {
    c() {
      i = me(e);
    },
    m(n, l) {
      E(n, i, l);
    },
    p(n, l) {
      l & /*items*/
      1 && e !== (e = /*item*/
      n[4] + "") && we(i, e);
    },
    d(n) {
      n && T(i);
    }
  };
}
function kl(t) {
  let e, i, n, l, r;
  function o(u) {
    t[2](u);
  }
  let s = {
    name: "group1",
    value: (
      /*idx*/
      t[6]
    ),
    $$slots: { default: [zc] },
    $$scope: { ctx: t }
  };
  return (
    /*group*/
    t[1] !== void 0 && (s.group = /*group*/
    t[1]), i = new Mc({ props: s }), Se.push(() => Zt(i, "group", o)), {
      c() {
        e = M("li"), $(i.$$.fragment), l = U();
      },
      m(u, a) {
        E(u, e, a), Z(i, e, null), R(e, l), r = !0;
      },
      p(u, a) {
        const f = {};
        a & /*$$scope, items*/
        129 && (f.$$scope = { dirty: a, ctx: u }), !n && a & /*group*/
        2 && (n = !0, f.group = /*group*/
        u[1], Jt(() => n = !1)), i.$set(f);
      },
      i(u) {
        r || (p(i.$$.fragment, u), r = !0);
      },
      o(u) {
        w(i.$$.fragment, u), r = !1;
      },
      d(u) {
        u && T(e), x(i);
      }
    }
  );
}
function Rc(t) {
  let e, i, n = _e(
    /*items*/
    t[0]
  ), l = [];
  for (let o = 0; o < n.length; o += 1)
    l[o] = kl(dl(t, n, o));
  const r = (o) => w(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      e = ae();
    },
    m(o, s) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(o, s);
      E(o, e, s), i = !0;
    },
    p(o, s) {
      if (s & /*group, items*/
      3) {
        n = _e(
          /*items*/
          o[0]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = dl(o, n, u);
          l[u] ? (l[u].p(a, s), p(l[u], 1)) : (l[u] = kl(a), l[u].c(), p(l[u], 1), l[u].m(e.parentNode, e));
        }
        for (oe(), u = n.length; u < l.length; u += 1)
          r(u);
        se();
      }
    },
    i(o) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          p(l[s]);
        i = !0;
      }
    },
    o(o) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1)
        w(l[s]);
      i = !1;
    },
    d(o) {
      o && T(e), Fe(l, o);
    }
  };
}
function Dc(t) {
  let e, i, n, l;
  return e = new Kt({
    props: {
      $$slots: { default: [Nc] },
      $$scope: { ctx: t }
    }
  }), n = new hc({
    props: {
      class: "uikit-w-44 uikit-p-3 uikit-space-y-3 uikit-text-sm",
      $$slots: { default: [Rc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment), i = U(), $(n.$$.fragment);
    },
    m(r, o) {
      Z(e, r, o), E(r, i, o), Z(n, r, o), l = !0;
    },
    p(r, [o]) {
      const s = {};
      o & /*$$scope, group, items*/
      131 && (s.$$scope = { dirty: o, ctx: r }), e.$set(s);
      const u = {};
      o & /*$$scope, items, group*/
      131 && (u.$$scope = { dirty: o, ctx: r }), n.$set(u);
    },
    i(r) {
      l || (p(e.$$.fragment, r), p(n.$$.fragment, r), l = !0);
    },
    o(r) {
      w(e.$$.fragment, r), w(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && T(i), x(e, r), x(n, r);
    }
  };
}
function Bc(t, e, i) {
  let n = -1;
  const l = Ge();
  let { items: r = [] } = e;
  function o(s) {
    n = s, i(1, n);
  }
  return t.$$set = (s) => {
    "items" in s && i(0, r = s.items);
  }, t.$$.update = () => {
    t.$$.dirty & /*group*/
    2 && n > -1 && l("change", n);
  }, [r, n, o];
}
class Fc extends te {
  constructor(e) {
    super(), ee(this, e, Bc, Dc, J, { items: 0 });
  }
}
const zk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Fc({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let l in i) {
      let r = i[l];
      n.$on(l, (o) => {
        r(o.detail);
      });
    }
  return n;
};
function jc(t) {
  let e, i, n;
  const l = (
    /*#slots*/
    t[9].default
  ), r = X(
    l,
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
  ], s = {};
  for (let u = 0; u < o.length; u += 1)
    s = N(s, o[u]);
  return {
    c() {
      e = M("aside"), r && r.c(), ue(e, s);
    },
    m(u, a) {
      E(u, e, a), r && r.m(e, null), n = !0;
    },
    p(u, [a]) {
      r && r.p && (!n || a & /*$$scope*/
      256) && Q(
        r,
        l,
        u,
        /*$$scope*/
        u[8],
        n ? K(
          l,
          /*$$scope*/
          u[8],
          a,
          null
        ) : Y(
          /*$$scope*/
          u[8]
        ),
        null
      ), ue(e, s = fe(o, [
        a & /*$$restProps*/
        8 && /*$$restProps*/
        u[3],
        (!n || a & /*mode, $$props*/
        17 && i !== (i = O(
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
      n || (p(r, u), n = !0);
    },
    o(u) {
      w(r, u), n = !1;
    },
    d(u) {
      u && T(e), r && r.d(u);
    }
  };
}
function Wc(t, e, i) {
  const n = ["mode", "activeUrl", "nonActiveClass", "activeClass", "ariaLabel"];
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e;
  const s = it("");
  let { mode: u = "normal" } = e, { activeUrl: a = "" } = e, { nonActiveClass: f = "uikit-flex uikit-items-center uikit-p-2 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { activeClass: c = "uikit-flex uikit-items-center uikit-p-2 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-bg-gray-200 dark:uikit-bg-gray-700 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { ariaLabel: d = "Sidebar" } = e;
  We("sidebarContext", { activeClass: c, nonActiveClass: f }), We("activeUrl", s);
  const k = { normal: "uikit-w-64", mini: "uikit-w-12" };
  return t.$$set = (g) => {
    i(4, e = N(N({}, e), F(g))), i(3, l = ne(e, n)), "mode" in g && i(0, u = g.mode), "activeUrl" in g && i(5, a = g.activeUrl), "nonActiveClass" in g && i(6, f = g.nonActiveClass), "activeClass" in g && i(7, c = g.activeClass), "ariaLabel" in g && i(1, d = g.ariaLabel), "$$scope" in g && i(8, o = g.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*activeUrl*/
    32 && s.set(a);
  }, e = F(e), [
    u,
    d,
    k,
    l,
    e,
    a,
    f,
    c,
    o,
    r
  ];
}
class Uc extends te {
  constructor(e) {
    super(), ee(this, e, Wc, jc, J, {
      mode: 0,
      activeUrl: 5,
      nonActiveClass: 6,
      activeClass: 7,
      ariaLabel: 1
    });
  }
}
function Gc(t) {
  let e, i, n;
  const l = (
    /*#slots*/
    t[6].default
  ), r = X(
    l,
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
  ], s = {};
  for (let u = 0; u < o.length; u += 1)
    s = N(s, o[u]);
  return {
    c() {
      e = M("ul"), r && r.c(), ue(e, s);
    },
    m(u, a) {
      E(u, e, a), r && r.m(e, null), n = !0;
    },
    p(u, [a]) {
      r && r.p && (!n || a & /*$$scope*/
      32) && Q(
        r,
        l,
        u,
        /*$$scope*/
        u[5],
        n ? K(
          l,
          /*$$scope*/
          u[5],
          a,
          null
        ) : Y(
          /*$$scope*/
          u[5]
        ),
        null
      ), ue(e, s = fe(o, [
        a & /*$$restProps*/
        2 && /*$$restProps*/
        u[1],
        (!n || a & /*ulClass, $$props*/
        5 && i !== (i = O(
          /*ulClass*/
          u[0],
          /*$$props*/
          u[2].class
        ))) && { class: i }
      ]));
    },
    i(u) {
      n || (p(r, u), n = !0);
    },
    o(u) {
      w(r, u), n = !1;
    },
    d(u) {
      u && T(e), r && r.d(u);
    }
  };
}
function Hc(t, e, i) {
  const n = ["ulClass", "borderClass", "border"];
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e, { ulClass: s = "uikit-space-y-2" } = e, { borderClass: u = "uikit-pt-4 uikit-mt-4 uikit-border-t uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { border: a = !1 } = e;
  return a && (s += " " + u), t.$$set = (f) => {
    i(2, e = N(N({}, e), F(f))), i(1, l = ne(e, n)), "ulClass" in f && i(0, s = f.ulClass), "borderClass" in f && i(3, u = f.borderClass), "border" in f && i(4, a = f.border), "$$scope" in f && i(5, o = f.$$scope);
  }, e = F(e), [s, l, e, u, a, o, r];
}
class Vc extends te {
  constructor(e) {
    super(), ee(this, e, Hc, Gc, J, { ulClass: 0, borderClass: 3, border: 4 });
  }
}
const qc = (t) => ({}), gl = (t) => ({}), Xc = (t) => ({}), ml = (t) => ({});
function hl(t) {
  let e;
  const i = (
    /*#slots*/
    t[13].subtext
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[12],
    gl
  );
  return {
    c() {
      n && n.c();
    },
    m(l, r) {
      n && n.m(l, r), e = !0;
    },
    p(l, r) {
      n && n.p && (!e || r & /*$$scope*/
      4096) && Q(
        n,
        i,
        l,
        /*$$scope*/
        l[12],
        e ? K(
          i,
          /*$$scope*/
          l[12],
          r,
          qc
        ) : Y(
          /*$$scope*/
          l[12]
        ),
        gl
      );
    },
    i(l) {
      e || (p(n, l), e = !0);
    },
    o(l) {
      w(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Kc(t) {
  let e, i, n, l, r, o, s, u, a, f;
  const c = (
    /*#slots*/
    t[13].icon
  ), d = X(
    c,
    t,
    /*$$scope*/
    t[12],
    ml
  );
  let k = (
    /*$$slots*/
    t[7].subtext && /*mode*/
    t[2] === "normal" && hl(t)
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
    m = N(m, g[b]);
  return {
    c() {
      e = M("li"), i = M("a"), d && d.c(), n = U(), l = M("span"), r = me(
        /*label*/
        t[1]
      ), s = U(), k && k.c(), h(l, "class", o = /*spanClass*/
      t[5][
        /*mode*/
        t[2]
      ]), ue(i, m);
    },
    m(b, _) {
      E(b, e, _), R(e, i), d && d.m(i, null), R(i, n), R(i, l), R(l, r), R(i, s), k && k.m(i, null), u = !0, a || (f = [
        D(
          i,
          "blur",
          /*blur_handler*/
          t[14]
        ),
        D(
          i,
          "click",
          /*click_handler*/
          t[22]
        ),
        D(
          i,
          "focus",
          /*focus_handler*/
          t[15]
        ),
        D(
          i,
          "keydown",
          /*keydown_handler*/
          t[16]
        ),
        D(
          i,
          "keypress",
          /*keypress_handler*/
          t[17]
        ),
        D(
          i,
          "keyup",
          /*keyup_handler*/
          t[18]
        ),
        D(
          i,
          "mouseenter",
          /*mouseenter_handler*/
          t[19]
        ),
        D(
          i,
          "mouseleave",
          /*mouseleave_handler*/
          t[20]
        ),
        D(
          i,
          "mouseover",
          /*mouseover_handler*/
          t[21]
        )
      ], a = !0);
    },
    p(b, [_]) {
      d && d.p && (!u || _ & /*$$scope*/
      4096) && Q(
        d,
        c,
        b,
        /*$$scope*/
        b[12],
        u ? K(
          c,
          /*$$scope*/
          b[12],
          _,
          Xc
        ) : Y(
          /*$$scope*/
          b[12]
        ),
        ml
      ), (!u || _ & /*label*/
      2) && we(
        r,
        /*label*/
        b[1]
      ), (!u || _ & /*mode*/
      4 && o !== (o = /*spanClass*/
      b[5][
        /*mode*/
        b[2]
      ])) && h(l, "class", o), /*$$slots*/
      b[7].subtext && /*mode*/
      b[2] === "normal" ? k ? (k.p(b, _), _ & /*$$slots, mode*/
      132 && p(k, 1)) : (k = hl(b), k.c(), p(k, 1), k.m(i, null)) : k && (oe(), w(k, 1, 1, () => {
        k = null;
      }), se()), ue(i, m = fe(g, [
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
      u || (p(d, b), p(k), u = !0);
    },
    o(b) {
      w(d, b), w(k), u = !1;
    },
    d(b) {
      b && T(e), d && d.d(b), k && k.d(), a = !1, Ce(f);
    }
  };
}
function Qc(t, e, i) {
  let n, l;
  const r = ["href", "label", "mode", "activeClass", "nonActiveClass", "onclick"];
  let o = ne(e, r), { $$slots: s = {}, $$scope: u } = e;
  const a = Qe(s);
  let { href: f = "" } = e, { label: c = "" } = e, { mode: d = "normal" } = e, { activeClass: k = void 0 } = e, { nonActiveClass: g = void 0 } = e, { onclick: m = (z) => {
  } } = e;
  const b = Re("sidebarContext") ?? {}, _ = Re("activeUrl");
  let C = "";
  _.subscribe((z) => {
    i(10, C = z);
  });
  const v = {
    normal: "uikit-flex-1 uikit-ms-3 uikit-whitespace-nowrap",
    mini: ""
  }, y = {
    normal: "uikit-flex uikit-items-center",
    mini: "uikit-flex uikit-flex-col uikit-items-center uikit-justify-center uikit-space-y-2"
  };
  function S(z) {
    W.call(this, t, z);
  }
  function A(z) {
    W.call(this, t, z);
  }
  function I(z) {
    W.call(this, t, z);
  }
  function j(z) {
    W.call(this, t, z);
  }
  function V(z) {
    W.call(this, t, z);
  }
  function ie(z) {
    W.call(this, t, z);
  }
  function P(z) {
    W.call(this, t, z);
  }
  function G(z) {
    W.call(this, t, z);
  }
  const ke = (z) => {
    m && m(z);
  };
  return t.$$set = (z) => {
    i(26, e = N(N({}, e), F(z))), i(6, o = ne(e, r)), "href" in z && i(0, f = z.href), "label" in z && i(1, c = z.label), "mode" in z && i(2, d = z.mode), "activeClass" in z && i(8, k = z.activeClass), "nonActiveClass" in z && i(9, g = z.nonActiveClass), "onclick" in z && i(3, m = z.onclick), "$$scope" in z && i(12, u = z.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*sidebarUrl, href*/
    1025 && i(11, n = C ? f === C : !1), i(4, l = O(
      y[d],
      n ? k ?? b.activeClass : g ?? b.nonActiveClass,
      e.class
    ));
  }, e = F(e), [
    f,
    c,
    d,
    m,
    l,
    v,
    o,
    a,
    k,
    g,
    C,
    n,
    u,
    s,
    S,
    A,
    I,
    j,
    V,
    ie,
    P,
    G,
    ke
  ];
}
class Yc extends te {
  constructor(e) {
    super(), ee(this, e, Qc, Kc, J, {
      href: 0,
      label: 1,
      mode: 2,
      activeClass: 8,
      nonActiveClass: 9,
      onclick: 3
    });
  }
}
const Jc = (t) => ({}), bl = (t) => ({}), Zc = (t) => ({}), _l = (t) => ({}), xc = (t) => ({}), pl = (t) => ({});
function $c(t) {
  let e, i;
  return {
    c() {
      e = be("svg"), i = be("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "m1 1 4 4 4-4"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, l) {
      E(n, e, l), R(e, i);
    },
    p: le,
    i: le,
    o: le,
    d(n) {
      n && T(e);
    }
  };
}
function ed(t) {
  let e;
  const i = (
    /*#slots*/
    t[14].arrowdown
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[13],
    bl
  );
  return {
    c() {
      n && n.c();
    },
    m(l, r) {
      n && n.m(l, r), e = !0;
    },
    p(l, r) {
      n && n.p && (!e || r & /*$$scope*/
      8192) && Q(
        n,
        i,
        l,
        /*$$scope*/
        l[13],
        e ? K(
          i,
          /*$$scope*/
          l[13],
          r,
          Jc
        ) : Y(
          /*$$scope*/
          l[13]
        ),
        bl
      );
    },
    i(l) {
      e || (p(n, l), e = !0);
    },
    o(l) {
      w(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function td(t) {
  let e, i, n, l;
  const r = [nd, id], o = [];
  function s(u, a) {
    return (
      /*$$slots*/
      u[11].arrowup ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = r[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), E(u, n, a), l = !0;
    },
    p(u, a) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), w(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = r[e](u), i.c()), p(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      l || (p(i), l = !0);
    },
    o(u) {
      w(i), l = !1;
    },
    d(u) {
      u && T(n), o[e].d(u);
    }
  };
}
function id(t) {
  let e, i;
  return {
    c() {
      e = be("svg"), i = be("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5 5 1 1 5"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(n, l) {
      E(n, e, l), R(e, i);
    },
    p: le,
    i: le,
    o: le,
    d(n) {
      n && T(e);
    }
  };
}
function nd(t) {
  let e;
  const i = (
    /*#slots*/
    t[14].arrowup
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[13],
    _l
  );
  return {
    c() {
      n && n.c();
    },
    m(l, r) {
      n && n.m(l, r), e = !0;
    },
    p(l, r) {
      n && n.p && (!e || r & /*$$scope*/
      8192) && Q(
        n,
        i,
        l,
        /*$$scope*/
        l[13],
        e ? K(
          i,
          /*$$scope*/
          l[13],
          r,
          Zc
        ) : Y(
          /*$$scope*/
          l[13]
        ),
        _l
      );
    },
    i(l) {
      e || (p(n, l), e = !0);
    },
    o(l) {
      w(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function yl(t) {
  let e, i, n, l;
  const r = (
    /*#slots*/
    t[14].default
  ), o = X(
    r,
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
      E(s, e, u), o && o.m(e, null), l = !0;
    },
    p(s, u) {
      t = s, o && o.p && (!l || u & /*$$scope*/
      8192) && Q(
        o,
        r,
        t,
        /*$$scope*/
        t[13],
        l ? K(
          r,
          /*$$scope*/
          t[13],
          u,
          null
        ) : Y(
          /*$$scope*/
          t[13]
        ),
        null
      ), (!l || u & /*mode*/
      4 && i !== (i = /*ulClass*/
      t[6][
        /*mode*/
        t[2]
      ])) && h(e, "class", i);
    },
    i(s) {
      l || (p(o, s), s && Oe(() => {
        l && (n || (n = De(
          e,
          /*multiple*/
          t[7],
          /*transitionParams*/
          t[3],
          !0
        )), n.run(1));
      }), l = !0);
    },
    o(s) {
      w(o, s), s && (n || (n = De(
        e,
        /*multiple*/
        t[7],
        /*transitionParams*/
        t[3],
        !1
      )), n.run(0)), l = !1;
    },
    d(s) {
      s && T(e), o && o.d(s), s && n && n.end();
    }
  };
}
function ld(t) {
  let e, i, n, l, r, o, s, u, a, f, c, d, k, g;
  const m = (
    /*#slots*/
    t[14].icon
  ), b = X(
    m,
    t,
    /*$$scope*/
    t[13],
    pl
  ), _ = [td, ed, $c], C = [];
  function v(I, j) {
    return (
      /*isOpen*/
      I[0] && /*mode*/
      I[2] === "normal" ? 0 : (
        /*$$slots*/
        I[11].arrowdown && /*mode*/
        I[2] === "normal" ? 1 : (
          /*mode*/
          I[2] === "normal" ? 2 : -1
        )
      )
    );
  }
  ~(u = v(t)) && (a = C[u] = _[u](t));
  let y = [
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
  for (let I = 0; I < y.length; I += 1)
    S = N(S, y[I]);
  let A = (
    /*isOpen*/
    t[0] && /*mode*/
    t[2] === "normal" && yl(t)
  );
  return {
    c() {
      e = M("li"), i = M("button"), b && b.c(), n = U(), l = M("span"), r = me(
        /*label*/
        t[1]
      ), s = U(), a && a.c(), c = U(), A && A.c(), h(l, "class", o = /*spanClass*/
      t[5][
        /*mode*/
        t[2]
      ]), ue(i, S);
    },
    m(I, j) {
      E(I, e, j), R(e, i), b && b.m(i, null), R(i, n), R(i, l), R(l, r), R(i, s), ~u && C[u].m(i, null), i.autofocus && i.focus(), R(e, c), A && A.m(e, null), d = !0, k || (g = D(
        i,
        "click",
        /*click_handler*/
        t[15]
      ), k = !0);
    },
    p(I, [j]) {
      b && b.p && (!d || j & /*$$scope*/
      8192) && Q(
        b,
        m,
        I,
        /*$$scope*/
        I[13],
        d ? K(
          m,
          /*$$scope*/
          I[13],
          j,
          xc
        ) : Y(
          /*$$scope*/
          I[13]
        ),
        pl
      ), (!d || j & /*label*/
      2) && we(
        r,
        /*label*/
        I[1]
      ), (!d || j & /*mode*/
      4 && o !== (o = /*spanClass*/
      I[5][
        /*mode*/
        I[2]
      ])) && h(l, "class", o);
      let V = u;
      u = v(I), u === V ? ~u && C[u].p(I, j) : (a && (oe(), w(C[V], 1, 1, () => {
        C[V] = null;
      }), se()), ~u ? (a = C[u], a ? a.p(I, j) : (a = C[u] = _[u](I), a.c()), p(a, 1), a.m(i, null)) : a = null), ue(i, S = fe(y, [
        j & /*$$restProps*/
        512 && /*$$restProps*/
        I[9],
        (!d || j & /*mode, $$props*/
        1028 && f !== (f = O(
          /*btnClass*/
          I[4][
            /*mode*/
            I[2]
          ],
          /*$$props*/
          I[10].class
        ))) && { class: f },
        { "aria-controls": "sidebar-dropdown" }
      ])), /*isOpen*/
      I[0] && /*mode*/
      I[2] === "normal" ? A ? (A.p(I, j), j & /*isOpen, mode*/
      5 && p(A, 1)) : (A = yl(I), A.c(), p(A, 1), A.m(e, null)) : A && (oe(), w(A, 1, 1, () => {
        A = null;
      }), se());
    },
    i(I) {
      d || (p(b, I), p(a), p(A), d = !0);
    },
    o(I) {
      w(b, I), w(a), w(A), d = !1;
    },
    d(I) {
      I && T(e), b && b.d(I), ~u && C[u].d(), A && A.d(), k = !1, g();
    }
  };
}
function rd(t, e, i) {
  const n = ["label", "mode", "transitionType", "transitionParams", "isOpen"];
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e;
  const s = Qe(r);
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
  }, m = (v, y) => {
    switch (f) {
      case "blur":
        return Di(v, y);
      case "fly":
        return wt(v, y);
      case "fade":
        return xt(v, y);
      default:
        return Bi(v, y);
    }
  };
  let { isOpen: b = !1 } = e;
  const _ = () => {
    i(0, b = !b);
  }, C = () => _();
  return t.$$set = (v) => {
    i(10, e = N(N({}, e), F(v))), i(9, l = ne(e, n)), "label" in v && i(1, u = v.label), "mode" in v && i(2, a = v.mode), "transitionType" in v && i(12, f = v.transitionType), "transitionParams" in v && i(3, c = v.transitionParams), "isOpen" in v && i(0, b = v.isOpen), "$$scope" in v && i(13, o = v.$$scope);
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
    l,
    e,
    s,
    f,
    o,
    r,
    C
  ];
}
class od extends te {
  constructor(e) {
    super(), ee(this, e, rd, ld, J, {
      label: 1,
      mode: 2,
      transitionType: 12,
      transitionParams: 3,
      isOpen: 0
    });
  }
}
function sd(t) {
  let e, i, n, l, r, o, s = [
    /*$$restProps*/
    t[5],
    { href: (
      /*href*/
      t[1]
    ) },
    {
      class: l = O(
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
    u = N(u, s[a]);
  return {
    c() {
      e = M("li"), i = M("a"), n = me(
        /*label*/
        t[2]
      ), ue(i, u);
    },
    m(a, f) {
      E(a, e, f), R(e, i), R(i, n), r || (o = [
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
      ], r = !0);
    },
    p(a, [f]) {
      f & /*label*/
      4 && $r(
        n,
        /*label*/
        a[2],
        u.contenteditable
      ), ue(i, u = fe(s, [
        f & /*$$restProps*/
        32 && /*$$restProps*/
        a[5],
        f & /*href*/
        2 && { href: (
          /*href*/
          a[1]
        ) },
        f & /*active, activeClass, aClass, $$props*/
        89 && l !== (l = O(
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
        )) && { class: l }
      ]));
    },
    i: le,
    o: le,
    d(a) {
      a && T(e), r = !1, Ce(o);
    }
  };
}
function ud(t, e, i) {
  const n = ["aClass", "href", "label", "activeClass", "active"];
  let l = ne(e, n), { aClass: r = "uikit-flex uikit-items-center uikit-p-2 uikit-ps-11 uikit-w-full uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg uikit-transition uikit-duration-75 uikit-group hover:uikit-bg-gray-100 dark:uikit-text-white dark:hover:uikit-bg-gray-700" } = e, { href: o = "" } = e, { label: s = "" } = e, { activeClass: u = "uikit-flex uikit-items-center uikit-p-2 uikit-ps-11 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-bg-gray-200 dark:uikit-bg-gray-700 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { active: a = !1 } = e;
  function f(v) {
    W.call(this, t, v);
  }
  function c(v) {
    W.call(this, t, v);
  }
  function d(v) {
    W.call(this, t, v);
  }
  function k(v) {
    W.call(this, t, v);
  }
  function g(v) {
    W.call(this, t, v);
  }
  function m(v) {
    W.call(this, t, v);
  }
  function b(v) {
    W.call(this, t, v);
  }
  function _(v) {
    W.call(this, t, v);
  }
  function C(v) {
    W.call(this, t, v);
  }
  return t.$$set = (v) => {
    i(6, e = N(N({}, e), F(v))), i(5, l = ne(e, n)), "aClass" in v && i(0, r = v.aClass), "href" in v && i(1, o = v.href), "label" in v && i(2, s = v.label), "activeClass" in v && i(3, u = v.activeClass), "active" in v && i(4, a = v.active);
  }, e = F(e), [
    r,
    o,
    s,
    u,
    a,
    l,
    e,
    f,
    c,
    d,
    k,
    g,
    m,
    b,
    _,
    C
  ];
}
class ad extends te {
  constructor(e) {
    super(), ee(this, e, ud, sd, J, {
      aClass: 0,
      href: 1,
      label: 2,
      activeClass: 3,
      active: 4
    });
  }
}
function fd(t) {
  let e, i, n;
  const l = (
    /*#slots*/
    t[5].default
  ), r = X(
    l,
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
  ], s = {};
  for (let u = 0; u < o.length; u += 1)
    s = N(s, o[u]);
  return {
    c() {
      e = M("div"), r && r.c(), ue(e, s);
    },
    m(u, a) {
      E(u, e, a), r && r.m(e, null), n = !0;
    },
    p(u, [a]) {
      r && r.p && (!n || a & /*$$scope*/
      16) && Q(
        r,
        l,
        u,
        /*$$scope*/
        u[4],
        n ? K(
          l,
          /*$$scope*/
          u[4],
          a,
          null
        ) : Y(
          /*$$scope*/
          u[4]
        ),
        null
      ), ue(e, s = fe(o, [
        a & /*$$restProps*/
        4 && /*$$restProps*/
        u[2],
        (!n || a & /*mode, $$props*/
        9 && i !== (i = O(
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
      n || (p(r, u), n = !0);
    },
    o(u) {
      w(r, u), n = !1;
    },
    d(u) {
      u && T(e), r && r.d(u);
    }
  };
}
function cd(t, e, i) {
  const n = ["mode"];
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e, { mode: s = "normal" } = e;
  const u = {
    normal: "uikit-overflow-y-auto uikit-py-4 uikit-px-3 uikit-bg-gray-50 uikit-rounded dark:uikit-bg-gray-800",
    mini: "uikit-overflow-y-auto uikit-py-4 uikit-bg-gray-50 uikit-rounded dark:uikit-bg-gray-800"
  };
  return t.$$set = (a) => {
    i(3, e = N(N({}, e), F(a))), i(2, l = ne(e, n)), "mode" in a && i(0, s = a.mode), "$$scope" in a && i(4, o = a.$$scope);
  }, e = F(e), [s, u, l, e, o, r];
}
class dd extends te {
  constructor(e) {
    super(), ee(this, e, cd, fd, J, { mode: 0 });
  }
}
function vl(t, e, i) {
  const n = t.slice();
  return n[4] = e[i].href, n[5] = e[i].label, n[6] = e[i].tips, n[7] = e[i].icon, n[8] = e[i].children, n[9] = e[i].onclick, n;
}
function wl(t, e, i) {
  const n = t.slice();
  return n[5] = e[i].label, n[4] = e[i].href, n;
}
function kd(t) {
  let e, i;
  return e = new Yc({
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
        subtext: [hd],
        icon: [md]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*items*/
      2 && (r.label = /*label*/
      n[5]), l & /*items*/
      2 && (r.href = /*href*/
      n[4]), l & /*items*/
      2 && (r.onclick = /*onclick*/
      n[9]), l & /*mode*/
      1 && (r.mode = /*mode*/
      n[0]), l & /*activeUrl, items*/
      6 && (r.active = /*activeUrl*/
      n[2] === /*href*/
      n[4]), l & /*$$scope, items*/
      16386 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function gd(t) {
  let e, i;
  return e = new od({
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
        icon: [_d],
        default: [bd]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*mode*/
      1 && (r.mode = /*mode*/
      n[0]), l & /*items*/
      2 && (r.label = /*label*/
      n[5]), l & /*$$scope, items*/
      16386 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function md(t) {
  let e, i, n;
  return e = new It({
    props: {
      name: (
        /*icon*/
        t[7]
      ),
      className: "uikit-w-5 uikit-h-5 uikit-text-gray-500 uikit-transition uikit-duration-75 dark:uikit-text-gray-400 group-hover:uikit-text-gray-900 dark:group-hover:uikit-text-white"
    }
  }), {
    c() {
      $(e.$$.fragment), i = U();
    },
    m(l, r) {
      Z(e, l, r), E(l, i, r), n = !0;
    },
    p(l, r) {
      const o = {};
      r & /*items*/
      2 && (o.name = /*icon*/
      l[7]), e.$set(o);
    },
    i(l) {
      n || (p(e.$$.fragment, l), n = !0);
    },
    o(l) {
      w(e.$$.fragment, l), n = !1;
    },
    d(l) {
      l && T(i), x(e, l);
    }
  };
}
function Cl(t) {
  let e, i = (
    /*tips*/
    t[6] + ""
  ), n;
  return {
    c() {
      e = M("span"), n = me(i), h(e, "class", "uikit-inline-flex uikit-justify-center uikit-items-center uikit-p-3 uikit-ms-3 uikit-w-3 uikit-h-3 uikit-text-sm uikit-font-medium uikit-text-primary-600 uikit-bg-primary-200 uikit-rounded-full dark:uikit-bg-primary-900 dark:uikit-text-primary-200");
    },
    m(l, r) {
      E(l, e, r), R(e, n);
    },
    p(l, r) {
      r & /*items*/
      2 && i !== (i = /*tips*/
      l[6] + "") && we(n, i);
    },
    d(l) {
      l && T(e);
    }
  };
}
function hd(t) {
  let e, i = (
    /*tips*/
    t[6] && Cl(t)
  );
  return {
    c() {
      i && i.c(), e = U();
    },
    m(n, l) {
      i && i.m(n, l), E(n, e, l);
    },
    p(n, l) {
      /*tips*/
      n[6] ? i ? i.p(n, l) : (i = Cl(n), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null);
    },
    d(n) {
      n && T(e), i && i.d(n);
    }
  };
}
function Sl(t) {
  let e, i;
  return e = new ad({
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
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*items*/
      2 && (r.label = /*label*/
      n[5]), l & /*items*/
      2 && (r.href = /*href*/
      n[4]), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function bd(t) {
  let e, i, n = _e(
    /*children*/
    t[8] || []
  ), l = [];
  for (let o = 0; o < n.length; o += 1)
    l[o] = Sl(wl(t, n, o));
  const r = (o) => w(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      e = U();
    },
    m(o, s) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(o, s);
      E(o, e, s), i = !0;
    },
    p(o, s) {
      if (s & /*items*/
      2) {
        n = _e(
          /*children*/
          o[8] || []
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = wl(o, n, u);
          l[u] ? (l[u].p(a, s), p(l[u], 1)) : (l[u] = Sl(a), l[u].c(), p(l[u], 1), l[u].m(e.parentNode, e));
        }
        for (oe(), u = n.length; u < l.length; u += 1)
          r(u);
        se();
      }
    },
    i(o) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          p(l[s]);
        i = !0;
      }
    },
    o(o) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1)
        w(l[s]);
      i = !1;
    },
    d(o) {
      o && T(e), Fe(l, o);
    }
  };
}
function _d(t) {
  let e, i, n;
  return e = new It({
    props: {
      name: (
        /*icon*/
        t[7]
      ),
      className: "uikit-w-5 uikit-h-5 uikit-text-gray-500 uikit-transition uikit-duration-75 dark:uikit-text-gray-400 group-hover:uikit-text-gray-900 dark:group-hover:uikit-text-white"
    }
  }), {
    c() {
      $(e.$$.fragment), i = U();
    },
    m(l, r) {
      Z(e, l, r), E(l, i, r), n = !0;
    },
    p(l, r) {
      const o = {};
      r & /*items*/
      2 && (o.name = /*icon*/
      l[7]), e.$set(o);
    },
    i(l) {
      n || (p(e.$$.fragment, l), n = !0);
    },
    o(l) {
      w(e.$$.fragment, l), n = !1;
    },
    d(l) {
      l && T(i), x(e, l);
    }
  };
}
function Tl(t) {
  let e, i, n, l;
  const r = [gd, kd], o = [];
  function s(u, a) {
    return (
      /*children*/
      u[8] && /*children*/
      u[8].length > 0 ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = r[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), E(u, n, a), l = !0;
    },
    p(u, a) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), w(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = r[e](u), i.c()), p(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      l || (p(i), l = !0);
    },
    o(u) {
      w(i), l = !1;
    },
    d(u) {
      u && T(n), o[e].d(u);
    }
  };
}
function pd(t) {
  let e, i, n = _e(
    /*items*/
    t[1]
  ), l = [];
  for (let o = 0; o < n.length; o += 1)
    l[o] = Tl(vl(t, n, o));
  const r = (o) => w(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      e = ae();
    },
    m(o, s) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(o, s);
      E(o, e, s), i = !0;
    },
    p(o, s) {
      if (s & /*mode, items, activeUrl*/
      7) {
        n = _e(
          /*items*/
          o[1]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = vl(o, n, u);
          l[u] ? (l[u].p(a, s), p(l[u], 1)) : (l[u] = Tl(a), l[u].c(), p(l[u], 1), l[u].m(e.parentNode, e));
        }
        for (oe(), u = n.length; u < l.length; u += 1)
          r(u);
        se();
      }
    },
    i(o) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          p(l[s]);
        i = !0;
      }
    },
    o(o) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1)
        w(l[s]);
      i = !1;
    },
    d(o) {
      o && T(e), Fe(l, o);
    }
  };
}
function yd(t) {
  let e, i;
  return e = new Vc({
    props: {
      $$slots: { default: [pd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*$$scope, items, mode, activeUrl*/
      16391 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function vd(t) {
  let e, i;
  return e = new dd({
    props: {
      mode: (
        /*mode*/
        t[0]
      ),
      $$slots: { default: [yd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*mode*/
      1 && (r.mode = /*mode*/
      n[0]), l & /*$$scope, items, mode, activeUrl*/
      16391 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function wd(t) {
  let e, i;
  return e = new Uc({
    props: {
      mode: (
        /*mode*/
        t[0]
      ),
      activeUrl: (
        /*activeUrl*/
        t[2]
      ),
      $$slots: { default: [vd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, [l]) {
      const r = {};
      l & /*mode*/
      1 && (r.mode = /*mode*/
      n[0]), l & /*activeUrl*/
      4 && (r.activeUrl = /*activeUrl*/
      n[2]), l & /*$$scope, mode, items, activeUrl*/
      16391 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Cd(t, e, i) {
  let { mode: n = "normal" } = e, l;
  Ye(() => {
    i(2, l = window.location.pathname);
  });
  let { items: r = [] } = e;
  function o() {
    i(0, n = n === "normal" ? "mini" : "normal");
  }
  return t.$$set = (s) => {
    "mode" in s && i(0, n = s.mode), "items" in s && i(1, r = s.items);
  }, window && window.location && i(2, l = window.location.pathname), [n, r, l, o];
}
let Sd = class extends te {
  constructor(e) {
    super(), ee(this, e, Cd, wd, J, { mode: 0, items: 1, toggle: 3 });
  }
  get toggle() {
    return this.$$.ctx[3];
  }
};
const Dk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Sd({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let l in i) {
      let r = i[l];
      n.$on(l, (o) => {
        r(o.detail);
      });
    }
  return n;
};
function Td(t) {
  let e, i, n, l, r = [
    /*$$restProps*/
    t[5],
    { role: "status" },
    {
      class: l = O(
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
  for (let s = 0; s < r.length; s += 1)
    o = N(o, r[s]);
  return {
    c() {
      e = be("svg"), i = be("path"), n = be("path"), h(i, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), h(
        i,
        "fill",
        /*currentColor*/
        t[2]
      ), h(n, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), h(
        n,
        "fill",
        /*currentFill*/
        t[1]
      ), Ft(e, o);
    },
    m(s, u) {
      E(s, e, u), R(e, i), R(e, n);
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
      ), Ft(e, o = fe(r, [
        u & /*$$restProps*/
        32 && /*$$restProps*/
        s[5],
        { role: "status" },
        u & /*bg, $$props*/
        65 && l !== (l = O(
          "uikit-inline -uikit-mt-px uikit-animate-spin dark:uikit-text-gray-600",
          /*iconsize*/
          s[3],
          /*bg*/
          s[0],
          /*fillColorClass*/
          s[4],
          /*$$props*/
          s[6].class
        )) && { class: l },
        { viewBox: "0 0 100 101" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" }
      ]));
    },
    i: le,
    o: le,
    d(s) {
      s && T(e);
    }
  };
}
function Ed(t, e, i) {
  const n = ["color", "bg", "customColor", "size", "currentFill", "currentColor"];
  let l = ne(e, n), { color: r = "primary" } = e, { bg: o = "uikit-text-gray-300" } = e, { customColor: s = "" } = e, { size: u = "8" } = e, { currentFill: a = "currentFill" } = e, { currentColor: f = "currentColor" } = e, c = `uikit-w-${u} uikit-h-${u}`;
  a !== "currentFill" && (r = void 0);
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
  let k = r === void 0 ? "" : d[r] ?? d.blue;
  return t.$$set = (g) => {
    i(6, e = N(N({}, e), F(g))), i(5, l = ne(e, n)), "color" in g && i(7, r = g.color), "bg" in g && i(0, o = g.bg), "customColor" in g && i(8, s = g.customColor), "size" in g && i(9, u = g.size), "currentFill" in g && i(1, a = g.currentFill), "currentColor" in g && i(2, f = g.currentColor);
  }, e = F(e), [
    o,
    a,
    f,
    c,
    k,
    l,
    e,
    r,
    s,
    u
  ];
}
class Fr extends te {
  constructor(e) {
    super(), ee(this, e, Ed, Td, J, {
      color: 7,
      bg: 0,
      customColor: 8,
      size: 9,
      currentFill: 1,
      currentColor: 2
    });
  }
}
function Id(t) {
  let e, i;
  return e = new Fr({
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
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*size*/
      1 && (r.size = /*size*/
      n[0]), l & /*color*/
      2 && (r.color = /*color*/
      n[1]), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Od(t) {
  let e, i, n;
  return i = new Kt({
    props: {
      outline: (
        /*buttonoutline*/
        t[3]
      ),
      color: "dark",
      $$slots: { default: [Ad] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = M("div"), $(i.$$.fragment), h(e, "class", "uikit-flex uikit-flex-wrap uikit-items-center uikit-gap-2");
    },
    m(l, r) {
      E(l, e, r), Z(i, e, null), n = !0;
    },
    p(l, r) {
      const o = {};
      r & /*buttonoutline*/
      8 && (o.outline = /*buttonoutline*/
      l[3]), r & /*$$scope, size*/
      17 && (o.$$scope = { dirty: r, ctx: l }), i.$set(o);
    },
    i(l) {
      n || (p(i.$$.fragment, l), n = !0);
    },
    o(l) {
      w(i.$$.fragment, l), n = !1;
    },
    d(l) {
      l && T(e), x(i);
    }
  };
}
function Ad(t) {
  let e, i, n;
  return e = new Fr({
    props: {
      class: "uikit-me-3",
      size: (
        /*size*/
        t[0]
      )
    }
  }), {
    c() {
      $(e.$$.fragment), i = me(`
            Loading ...`);
    },
    m(l, r) {
      Z(e, l, r), E(l, i, r), n = !0;
    },
    p(l, r) {
      const o = {};
      r & /*size*/
      1 && (o.size = /*size*/
      l[0]), e.$set(o);
    },
    i(l) {
      n || (p(e.$$.fragment, l), n = !0);
    },
    o(l) {
      w(e.$$.fragment, l), n = !1;
    },
    d(l) {
      l && T(i), x(e, l);
    }
  };
}
function Pd(t) {
  let e, i, n, l;
  const r = [Od, Id], o = [];
  function s(u, a) {
    return (
      /*button*/
      u[2] ? 0 : 1
    );
  }
  return e = s(t), i = o[e] = r[e](t), {
    c() {
      i.c(), n = ae();
    },
    m(u, a) {
      o[e].m(u, a), E(u, n, a), l = !0;
    },
    p(u, [a]) {
      let f = e;
      e = s(u), e === f ? o[e].p(u, a) : (oe(), w(o[f], 1, 1, () => {
        o[f] = null;
      }), se(), i = o[e], i ? i.p(u, a) : (i = o[e] = r[e](u), i.c()), p(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      l || (p(i), l = !0);
    },
    o(u) {
      w(i), l = !1;
    },
    d(u) {
      u && T(n), o[e].d(u);
    }
  };
}
function Ld(t, e, i) {
  let { size: n = "4" } = e, { color: l = "green" } = e, { button: r = !1 } = e, { buttonoutline: o = !1 } = e;
  return t.$$set = (s) => {
    "size" in s && i(0, n = s.size), "color" in s && i(1, l = s.color), "button" in s && i(2, r = s.button), "buttonoutline" in s && i(3, o = s.buttonoutline);
  }, [n, l, r, o];
}
class Md extends te {
  constructor(e) {
    super(), ee(this, e, Ld, Pd, J, {
      size: 0,
      color: 1,
      button: 2,
      buttonoutline: 3
    });
  }
}
const Bk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Md({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let l in i) {
      let r = i[l];
      n.$on(l, (o) => {
        r(o.detail);
      });
    }
  return n;
}, Nd = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;
function zd(t) {
  function e(i) {
    if (!(i.key === "Tab" || i.keyCode === 9))
      return;
    const l = Array.from(t.querySelectorAll(Nd));
    let r = l.indexOf(document.activeElement ?? t);
    r === -1 && i.shiftKey && (r = 0), r += l.length + (i.shiftKey ? -1 : 1), r %= l.length, l[r].focus(), i.preventDefault();
  }
  return document.addEventListener("keydown", e, !0), {
    destroy() {
      document.removeEventListener("keydown", e, !0);
    }
  };
}
const Rd = (t) => ({}), El = (t) => ({}), Dd = (t) => ({}), Il = (t) => ({});
function Ol(t) {
  let e, i, n, l, r, o, s, u, a, f;
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
    $$slots: { default: [Wd] },
    $$scope: { ctx: t }
  };
  for (let k = 0; k < c.length; k += 1)
    d = N(d, c[k]);
  return r = new lt({ props: d }), {
    c() {
      e = M("div"), i = U(), n = M("div"), l = M("div"), $(r.$$.fragment), h(
        e,
        "class",
        /*backdropCls*/
        t[12]
      ), h(l, "class", o = "uikit-flex uikit-relative " + /*sizes*/
      t[8][
        /*size*/
        t[2]
      ] + " uikit-w-full uikit-max-h-full"), h(n, "class", s = O(
        /*dialogClass*/
        t[4],
        /*$$props*/
        t[14].classDialog,
        .../*getPlacementClasses*/
        t[7]()
      )), h(n, "tabindex", "-1"), h(n, "aria-modal", "true"), h(n, "role", "dialog");
    },
    m(k, g) {
      E(k, e, g), E(k, i, g), E(k, n, g), R(n, l), Z(r, l, null), u = !0, a || (f = [
        D(
          n,
          "keydown",
          /*handleKeys*/
          t[13]
        ),
        D(n, "wheel", Xr(
          /*wheel_handler*/
          t[23]
        ), { passive: !1 }),
        je(
          /*prepareFocus*/
          t[6].call(null, n)
        ),
        je(zd.call(null, n)),
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
      32800 ? fe(c, [
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
      33669130 && (m.$$scope = { dirty: g, ctx: k }), r.$set(m), (!u || g & /*size*/
      4 && o !== (o = "uikit-flex uikit-relative " + /*sizes*/
      k[8][
        /*size*/
        k[2]
      ] + " uikit-w-full uikit-max-h-full")) && h(l, "class", o), (!u || g & /*dialogClass, $$props*/
      16400 && s !== (s = O(
        /*dialogClass*/
        k[4],
        /*$$props*/
        k[14].classDialog,
        .../*getPlacementClasses*/
        k[7]()
      ))) && h(n, "class", s);
    },
    i(k) {
      u || (p(r.$$.fragment, k), u = !0);
    },
    o(k) {
      w(r.$$.fragment, k), u = !1;
    },
    d(k) {
      k && (T(e), T(i), T(n)), x(r), a = !1, Ce(f);
    }
  };
}
function Al(t) {
  let e, i;
  return e = new lt({
    props: {
      color: (
        /*$$restProps*/
        t[15].color
      ),
      class: "uikit-flex uikit-justify-between uikit-items-center uikit-p-4 uikit-rounded-t-lg",
      $$slots: { default: [Fd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*$$restProps*/
      32768 && (r.color = /*$$restProps*/
      n[15].color), l & /*$$scope, $$restProps, dismissable, title*/
      33587210 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Bd(t) {
  let e, i, n;
  return {
    c() {
      e = M("h3"), i = me(
        /*title*/
        t[1]
      ), h(e, "class", n = "uikit-text-xl uikit-font-semibold " + /*$$restProps*/
      (t[15].color ? "" : "uikit-text-gray-900 dark:uikit-text-white") + " uikit-p-0");
    },
    m(l, r) {
      E(l, e, r), R(e, i);
    },
    p(l, r) {
      r & /*title*/
      2 && we(
        i,
        /*title*/
        l[1]
      ), r & /*$$restProps*/
      32768 && n !== (n = "uikit-text-xl uikit-font-semibold " + /*$$restProps*/
      (l[15].color ? "" : "uikit-text-gray-900 dark:uikit-text-white") + " uikit-p-0") && h(e, "class", n);
    },
    d(l) {
      l && T(e);
    }
  };
}
function Pl(t) {
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
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*$$restProps*/
      32768 && (r.color = /*$$restProps*/
      n[15].color), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Fd(t) {
  let e, i, n;
  const l = (
    /*#slots*/
    t[22].header
  ), r = X(
    l,
    t,
    /*$$scope*/
    t[25],
    Il
  ), o = r || Bd(t);
  let s = (
    /*dismissable*/
    t[3] && Pl(t)
  );
  return {
    c() {
      o && o.c(), e = U(), s && s.c(), i = ae();
    },
    m(u, a) {
      o && o.m(u, a), E(u, e, a), s && s.m(u, a), E(u, i, a), n = !0;
    },
    p(u, a) {
      r ? r.p && (!n || a & /*$$scope*/
      33554432) && Q(
        r,
        l,
        u,
        /*$$scope*/
        u[25],
        n ? K(
          l,
          /*$$scope*/
          u[25],
          a,
          Dd
        ) : Y(
          /*$$scope*/
          u[25]
        ),
        Il
      ) : o && o.p && (!n || a & /*$$restProps, title*/
      32770) && o.p(u, n ? a : -1), /*dismissable*/
      u[3] ? s ? (s.p(u, a), a & /*dismissable*/
      8 && p(s, 1)) : (s = Pl(u), s.c(), p(s, 1), s.m(i.parentNode, i)) : s && (oe(), w(s, 1, 1, () => {
        s = null;
      }), se());
    },
    i(u) {
      n || (p(o, u), p(s), n = !0);
    },
    o(u) {
      w(o, u), w(s), n = !1;
    },
    d(u) {
      u && (T(e), T(i)), o && o.d(u), s && s.d(u);
    }
  };
}
function Ll(t) {
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
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*$$restProps*/
      32768 && (r.color = /*$$restProps*/
      n[15].color), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Ml(t) {
  let e, i;
  return e = new lt({
    props: {
      color: (
        /*$$restProps*/
        t[15].color
      ),
      class: "uikit-flex uikit-items-center uikit-p-6 uikit-space-x-2 rtl:uikit-space-x-reverse uikit-rounded-b-lg",
      $$slots: { default: [jd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*$$restProps*/
      32768 && (r.color = /*$$restProps*/
      n[15].color), l & /*$$scope*/
      33554432 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function jd(t) {
  let e;
  const i = (
    /*#slots*/
    t[22].footer
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[25],
    El
  );
  return {
    c() {
      n && n.c();
    },
    m(l, r) {
      n && n.m(l, r), e = !0;
    },
    p(l, r) {
      n && n.p && (!e || r & /*$$scope*/
      33554432) && Q(
        n,
        i,
        l,
        /*$$scope*/
        l[25],
        e ? K(
          i,
          /*$$scope*/
          l[25],
          r,
          Rd
        ) : Y(
          /*$$scope*/
          l[25]
        ),
        El
      );
    },
    i(l) {
      e || (p(n, l), e = !0);
    },
    o(l) {
      w(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function Wd(t) {
  let e, i, n, l, r, o, s, u, a, f = (
    /*$$slots*/
    (t[16].header || /*title*/
    t[1]) && Al(t)
  ), c = (
    /*dismissable*/
    t[3] && !/*$$slots*/
    t[16].header && !/*title*/
    t[1] && Ll(t)
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
    t[16].footer && Ml(t)
  );
  return {
    c() {
      f && f.c(), e = U(), i = M("div"), c && c.c(), n = U(), k && k.c(), r = U(), g && g.c(), o = ae(), h(i, "class", l = O(
        "uikit-p-6 uikit-space-y-6 uikit-flex-1 uikit-overflow-y-auto uikit-overscroll-contain",
        /*$$props*/
        t[14].bodyClass
      )), h(i, "role", "document");
    },
    m(m, b) {
      f && f.m(m, b), E(m, e, b), E(m, i, b), c && c.m(i, null), R(i, n), k && k.m(i, null), E(m, r, b), g && g.m(m, b), E(m, o, b), s = !0, u || (a = [
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
    p(m, b) {
      /*$$slots*/
      m[16].header || /*title*/
      m[1] ? f ? (f.p(m, b), b & /*$$slots, title*/
      65538 && p(f, 1)) : (f = Al(m), f.c(), p(f, 1), f.m(e.parentNode, e)) : f && (oe(), w(f, 1, 1, () => {
        f = null;
      }), se()), /*dismissable*/
      m[3] && !/*$$slots*/
      m[16].header && !/*title*/
      m[1] ? c ? (c.p(m, b), b & /*dismissable, $$slots, title*/
      65546 && p(c, 1)) : (c = Ll(m), c.c(), p(c, 1), c.m(i, n)) : c && (oe(), w(c, 1, 1, () => {
        c = null;
      }), se()), k && k.p && (!s || b & /*$$scope*/
      33554432) && Q(
        k,
        d,
        m,
        /*$$scope*/
        m[25],
        s ? K(
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
      16384 && l !== (l = O(
        "uikit-p-6 uikit-space-y-6 uikit-flex-1 uikit-overflow-y-auto uikit-overscroll-contain",
        /*$$props*/
        m[14].bodyClass
      ))) && h(i, "class", l), /*$$slots*/
      m[16].footer ? g ? (g.p(m, b), b & /*$$slots*/
      65536 && p(g, 1)) : (g = Ml(m), g.c(), p(g, 1), g.m(o.parentNode, o)) : g && (oe(), w(g, 1, 1, () => {
        g = null;
      }), se());
    },
    i(m) {
      s || (p(f), p(c), p(k, m), p(g), s = !0);
    },
    o(m) {
      w(f), w(c), w(k, m), w(g), s = !1;
    },
    d(m) {
      m && (T(e), T(i), T(r), T(o)), f && f.d(m), c && c.d(), k && k.d(m), g && g.d(m), u = !1, Ce(a);
    }
  };
}
function Ud(t) {
  let e, i, n = (
    /*open*/
    t[0] && Ol(t)
  );
  return {
    c() {
      n && n.c(), e = ae();
    },
    m(l, r) {
      n && n.m(l, r), E(l, e, r), i = !0;
    },
    p(l, [r]) {
      /*open*/
      l[0] ? n ? (n.p(l, r), r & /*open*/
      1 && p(n, 1)) : (n = Ol(l), n.c(), p(n, 1), n.m(e.parentNode, e)) : n && (oe(), w(n, 1, 1, () => {
        n = null;
      }), se());
    },
    i(l) {
      i || (p(n), i = !0);
    },
    o(l) {
      w(n), i = !1;
    },
    d(l) {
      l && T(e), n && n.d(l);
    }
  };
}
function Gd(t, e, i) {
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
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e;
  const s = Qe(r);
  let { open: u = !1 } = e, { title: a = "" } = e, { size: f = "md" } = e, { placement: c = "center" } = e, { autoclose: d = !1 } = e, { dismissable: k = !0 } = e, { backdropClass: g = "uikit-fixed uikit-inset-0 uikit-z-40 uikit-bg-gray-900 uikit-bg-opacity-50 dark:uikit-bg-opacity-80" } = e, { defaultClass: m = "uikit-relative uikit-flex uikit-flex-col uikit-mx-auto" } = e, { outsideclose: b = !1 } = e, { dialogClass: _ = "uikit-fixed uikit-top-0 uikit-start-0 uikit-end-0 uikit-h-modal md:uikit-inset-0 md:uikit-h-full uikit-z-50 uikit-w-full uikit-p-4 uikit-flex" } = e;
  const C = Ge();
  function v(B) {
    const L = document.createTreeWalker(B, NodeFilter.SHOW_ELEMENT);
    let re;
    for (; re = L.nextNode(); )
      if (re instanceof HTMLElement) {
        const de = re, [ye, Le] = ie(de);
        (ye || Le) && (de.tabIndex = 0);
      }
    B.focus();
  }
  const y = () => {
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
  }, A = (B) => {
    const L = B.target;
    d && (L == null ? void 0 : L.tagName) === "BUTTON" && j(B);
  }, I = (B) => {
    const L = B.target;
    b && L === B.currentTarget && j(B);
  }, j = (B) => {
    B.preventDefault(), i(0, u = !1);
  };
  let V;
  const ie = (B) => [
    B.scrollWidth > B.clientWidth && ["scroll", "auto"].indexOf(getComputedStyle(B).overflowX) >= 0,
    B.scrollHeight > B.clientHeight && ["scroll", "auto"].indexOf(getComputedStyle(B).overflowY) >= 0
  ];
  let P = O(g, e.classBackdrop);
  function G(B) {
    if (B.key === "Escape" && k)
      return j(B);
  }
  function ke(B) {
    W.call(this, t, B);
  }
  function z(B) {
    W.call(this, t, B);
  }
  return t.$$set = (B) => {
    i(14, e = N(N({}, e), F(B))), i(15, l = ne(e, n)), "open" in B && i(0, u = B.open), "title" in B && i(1, a = B.title), "size" in B && i(2, f = B.size), "placement" in B && i(17, c = B.placement), "autoclose" in B && i(18, d = B.autoclose), "dismissable" in B && i(3, k = B.dismissable), "backdropClass" in B && i(19, g = B.backdropClass), "defaultClass" in B && i(20, m = B.defaultClass), "outsideclose" in B && i(21, b = B.outsideclose), "dialogClass" in B && i(4, _ = B.dialogClass), "$$scope" in B && i(25, o = B.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && C(u ? "open" : "close"), i(5, V = O(m, "uikit-w-full uikit-divide-y", e.class));
  }, e = F(e), [
    u,
    a,
    f,
    k,
    _,
    V,
    v,
    y,
    S,
    A,
    I,
    j,
    P,
    G,
    e,
    l,
    s,
    c,
    d,
    g,
    m,
    b,
    r,
    ke,
    z,
    o
  ];
}
class Hd extends te {
  constructor(e) {
    super(), ee(this, e, Gd, Ud, J, {
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
function Nl(t, e, i) {
  const n = t.slice();
  return n[9] = e[i], n;
}
function zl(t) {
  let e, i = (
    /*item*/
    t[9] + ""
  ), n, l;
  return {
    c() {
      e = M("p"), n = me(i), l = U(), h(e, "class", "uikit-text-base uikit-leading-relaxed uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(r, o) {
      E(r, e, o), R(e, n), R(e, l);
    },
    p(r, o) {
      o & /*descriptions*/
      4 && i !== (i = /*item*/
      r[9] + "") && we(n, i);
    },
    d(r) {
      r && T(e);
    }
  };
}
function Vd(t) {
  let e, i = _e(
    /*descriptions*/
    t[2]
  ), n = [];
  for (let l = 0; l < i.length; l += 1)
    n[l] = zl(Nl(t, i, l));
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ae();
    },
    m(l, r) {
      for (let o = 0; o < n.length; o += 1)
        n[o] && n[o].m(l, r);
      E(l, e, r);
    },
    p(l, r) {
      if (r & /*descriptions*/
      4) {
        i = _e(
          /*descriptions*/
          l[2]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const s = Nl(l, i, o);
          n[o] ? n[o].p(s, r) : (n[o] = zl(s), n[o].c(), n[o].m(e.parentNode, e));
        }
        for (; o < n.length; o += 1)
          n[o].d(1);
        n.length = i.length;
      }
    },
    d(l) {
      l && T(e), Fe(n, l);
    }
  };
}
function Rl(t) {
  let e, i, n, l;
  return e = new Kt({
    props: {
      $$slots: { default: [qd] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), n = new Kt({
    props: {
      color: "alternative",
      $$slots: { default: [Xd] },
      $$scope: { ctx: t }
    }
  }), n.$on(
    "click",
    /*click_handler_1*/
    t[7]
  ), {
    c() {
      $(e.$$.fragment), i = U(), $(n.$$.fragment);
    },
    m(r, o) {
      Z(e, r, o), E(r, i, o), Z(n, r, o), l = !0;
    },
    p(r, o) {
      const s = {};
      o & /*$$scope*/
      4096 && (s.$$scope = { dirty: o, ctx: r }), e.$set(s);
      const u = {};
      o & /*$$scope*/
      4096 && (u.$$scope = { dirty: o, ctx: r }), n.$set(u);
    },
    i(r) {
      l || (p(e.$$.fragment, r), p(n.$$.fragment, r), l = !0);
    },
    o(r) {
      w(e.$$.fragment, r), w(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && T(i), x(e, r), x(n, r);
    }
  };
}
function qd(t) {
  let e;
  return {
    c() {
      e = me("I accept");
    },
    m(i, n) {
      E(i, e, n);
    },
    d(i) {
      i && T(e);
    }
  };
}
function Xd(t) {
  let e;
  return {
    c() {
      e = me("Decline");
    },
    m(i, n) {
      E(i, e, n);
    },
    d(i) {
      i && T(e);
    }
  };
}
function Kd(t) {
  let e, i, n = (
    /*footer*/
    t[1] && Rl(t)
  );
  return {
    c() {
      n && n.c(), e = ae();
    },
    m(l, r) {
      n && n.m(l, r), E(l, e, r), i = !0;
    },
    p(l, r) {
      /*footer*/
      l[1] ? n ? (n.p(l, r), r & /*footer*/
      2 && p(n, 1)) : (n = Rl(l), n.c(), p(n, 1), n.m(e.parentNode, e)) : n && (oe(), w(n, 1, 1, () => {
        n = null;
      }), se());
    },
    i(l) {
      i || (p(n), i = !0);
    },
    o(l) {
      w(n), i = !1;
    },
    d(l) {
      l && T(e), n && n.d(l);
    }
  };
}
function Qd(t) {
  let e, i, n;
  function l(o) {
    t[8](o);
  }
  let r = {
    title: (
      /*title*/
      t[0]
    ),
    autoclose: !0,
    outsideclose: !0,
    $$slots: {
      footer: [Kd],
      default: [Vd]
    },
    $$scope: { ctx: t }
  };
  return (
    /*clickOutsideModal*/
    t[3] !== void 0 && (r.open = /*clickOutsideModal*/
    t[3]), e = new Hd({ props: r }), Se.push(() => Zt(e, "open", l)), {
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
        o[3], Jt(() => i = !1)), e.$set(u);
      },
      i(o) {
        n || (p(e.$$.fragment, o), n = !0);
      },
      o(o) {
        w(e.$$.fragment, o), n = !1;
      },
      d(o) {
        x(e, o);
      }
    }
  );
}
function Yd(t, e, i) {
  let n = !1, { title: l = "" } = e, { footer: r = !1 } = e, { descriptions: o = [] } = e;
  function s() {
    i(3, n = !n);
  }
  let u = Ge();
  const a = (d) => u("success", d), f = (d) => u("fail", d);
  function c(d) {
    n = d, i(3, n);
  }
  return t.$$set = (d) => {
    "title" in d && i(0, l = d.title), "footer" in d && i(1, r = d.footer), "descriptions" in d && i(2, o = d.descriptions);
  }, [
    l,
    r,
    o,
    n,
    u,
    s,
    a,
    f,
    c
  ];
}
class Jd extends te {
  constructor(e) {
    super(), ee(this, e, Yd, Qd, J, {
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
const Fk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new Jd({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let l in i) {
      let r = i[l];
      n.$on(l, (o) => {
        r(o.detail);
      });
    }
  return n;
};
function Dl(t, e, i) {
  const n = t.slice();
  return n[7] = e[i], n;
}
const Zd = (t) => ({ item: t & /*items*/
1 }), Bl = (t) => ({ item: (
  /*items*/
  t[0][0]
) }), xd = (t) => ({ item: t & /*items*/
1 }), Fl = (t) => ({ item: (
  /*item*/
  t[7]
) });
function jl(t) {
  let e;
  const i = (
    /*#slots*/
    t[6].default
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[5],
    Bl
  );
  return {
    c() {
      n && n.c();
    },
    m(l, r) {
      n && n.m(l, r), e = !0;
    },
    p(l, r) {
      n && n.p && (!e || r & /*$$scope, items*/
      33) && Q(
        n,
        i,
        l,
        /*$$scope*/
        l[5],
        e ? K(
          i,
          /*$$scope*/
          l[5],
          r,
          Zd
        ) : Y(
          /*$$scope*/
          l[5]
        ),
        Bl
      );
    },
    i(l) {
      e || (p(n, l), e = !0);
    },
    o(l) {
      w(n, l), e = !1;
    },
    d(l) {
      n && n.d(l);
    }
  };
}
function $d(t) {
  let e, i, n, l, r, o;
  return {
    c() {
      e = M("div"), i = M("img"), o = U(), yt(i.src, n = /*item*/
      t[7].src) || h(i, "src", n), h(i, "alt", l = /*item*/
      t[7].alt), h(i, "class", r = O(
        /*imgClass*/
        t[1],
        /*$$props*/
        t[3].classImg
      ));
    },
    m(s, u) {
      E(s, e, u), R(e, i), E(s, o, u);
    },
    p(s, u) {
      u & /*items*/
      1 && !yt(i.src, n = /*item*/
      s[7].src) && h(i, "src", n), u & /*items*/
      1 && l !== (l = /*item*/
      s[7].alt) && h(i, "alt", l), u & /*imgClass, $$props*/
      10 && r !== (r = O(
        /*imgClass*/
        s[1],
        /*$$props*/
        s[3].classImg
      )) && h(i, "class", r);
    },
    d(s) {
      s && (T(e), T(o));
    }
  };
}
function Wl(t) {
  let e;
  const i = (
    /*#slots*/
    t[6].default
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[5],
    Fl
  ), l = n || $d(t);
  return {
    c() {
      l && l.c();
    },
    m(r, o) {
      l && l.m(r, o), e = !0;
    },
    p(r, o) {
      n ? n.p && (!e || o & /*$$scope, items*/
      33) && Q(
        n,
        i,
        r,
        /*$$scope*/
        r[5],
        e ? K(
          i,
          /*$$scope*/
          r[5],
          o,
          xd
        ) : Y(
          /*$$scope*/
          r[5]
        ),
        Fl
      ) : l && l.p && (!e || o & /*items, imgClass, $$props*/
      11) && l.p(r, e ? o : -1);
    },
    i(r) {
      e || (p(l, r), e = !0);
    },
    o(r) {
      w(l, r), e = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function ek(t) {
  let e, i, n, l, r = _e(
    /*items*/
    t[0]
  ), o = [];
  for (let c = 0; c < r.length; c += 1)
    o[c] = Wl(Dl(t, r, c));
  const s = (c) => w(o[c], 1, 1, () => {
    o[c] = null;
  });
  let u = null;
  r.length || (u = jl(t));
  let a = [
    /*$$restProps*/
    t[4],
    { class: (
      /*divClass*/
      t[2]
    ) }
  ], f = {};
  for (let c = 0; c < a.length; c += 1)
    f = N(f, a[c]);
  return {
    c() {
      e = M("div");
      for (let c = 0; c < o.length; c += 1)
        o[c].c();
      u && u.c(), ue(e, f);
    },
    m(c, d) {
      E(c, e, d);
      for (let k = 0; k < o.length; k += 1)
        o[k] && o[k].m(e, null);
      u && u.m(e, null), i = !0, n || (l = je(tk.call(null, e)), n = !0);
    },
    p(c, [d]) {
      if (d & /*items, twMerge, imgClass, $$props, $$scope*/
      43) {
        r = _e(
          /*items*/
          c[0]
        );
        let k;
        for (k = 0; k < r.length; k += 1) {
          const g = Dl(c, r, k);
          o[k] ? (o[k].p(g, d), p(o[k], 1)) : (o[k] = Wl(g), o[k].c(), p(o[k], 1), o[k].m(e, null));
        }
        for (oe(), k = r.length; k < o.length; k += 1)
          s(k);
        se(), !r.length && u ? u.p(c, d) : r.length ? u && (oe(), w(u, 1, 1, () => {
          u = null;
        }), se()) : (u = jl(c), u.c(), p(u, 1), u.m(e, null));
      }
      ue(e, f = fe(a, [
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
        for (let d = 0; d < r.length; d += 1)
          p(o[d]);
        i = !0;
      }
    },
    o(c) {
      o = o.filter(Boolean);
      for (let d = 0; d < o.length; d += 1)
        w(o[d]);
      i = !1;
    },
    d(c) {
      c && T(e), Fe(o, c), u && u.d(), n = !1, l();
    }
  };
}
function tk(t) {
  getComputedStyle(t).gap === "normal" && (t.style.gap = "inherit");
}
function ik(t, e, i) {
  let n;
  const l = ["items", "imgClass"];
  let r = ne(e, l), { $$slots: o = {}, $$scope: s } = e, { items: u = [] } = e, { imgClass: a = "uikit-h-auto uikit-max-w-full uikit-rounded-lg" } = e;
  return t.$$set = (f) => {
    i(3, e = N(N({}, e), F(f))), i(4, r = ne(e, l)), "items" in f && i(0, u = f.items), "imgClass" in f && i(1, a = f.imgClass), "$$scope" in f && i(5, s = f.$$scope);
  }, t.$$.update = () => {
    i(2, n = O("uikit-grid", e.class));
  }, e = F(e), [u, a, n, e, r, s, o];
}
class nk extends te {
  constructor(e) {
    super(), ee(this, e, ik, ek, J, { items: 0, imgClass: 1 });
  }
}
function lk(t) {
  let e, i;
  return e = new nk({
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
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, [l]) {
      const r = {};
      l & /*images*/
      1 && (r.items = /*images*/
      n[0]), l & /*col*/
      2 && (r.class = O(
        "uikit-gap-4",
        /*colClass*/
        n[2][
          /*col*/
          n[1]
        ]
      )), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function rk(t, e, i) {
  let { images: n = [] } = e, { col: l = "2" } = e;
  const r = {
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
    "images" in o && i(0, n = o.images), "col" in o && i(1, l = o.col);
  }, [n, l, r];
}
class ok extends te {
  constructor(e) {
    super(), ee(this, e, rk, lk, J, { images: 0, col: 1 });
  }
}
const jk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const n = new ok({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let l in i) {
      let r = i[l];
      n.$on(l, (o) => {
        r(o.detail);
      });
    }
  return n;
}, sk = (t) => ({}), Ul = (t) => ({}), uk = (t) => ({ style: t & /*style*/
2 }), Gl = (t) => ({ style: (
  /*style*/
  t[1]
) });
function Hl(t) {
  let e;
  const i = (
    /*#slots*/
    t[9].divider
  ), n = X(
    i,
    t,
    /*$$scope*/
    t[8],
    Ul
  ), l = n || ak();
  return {
    c() {
      l && l.c();
    },
    m(r, o) {
      l && l.m(r, o), e = !0;
    },
    p(r, o) {
      n && n.p && (!e || o & /*$$scope*/
      256) && Q(
        n,
        i,
        r,
        /*$$scope*/
        r[8],
        e ? K(
          i,
          /*$$scope*/
          r[8],
          o,
          sk
        ) : Y(
          /*$$scope*/
          r[8]
        ),
        Ul
      );
    },
    i(r) {
      e || (p(l, r), e = !0);
    },
    o(r) {
      w(l, r), e = !1;
    },
    d(r) {
      l && l.d(r);
    }
  };
}
function ak(t) {
  let e;
  return {
    c() {
      e = M("div"), h(e, "class", "uikit-h-px uikit-bg-gray-200 dark:uikit-bg-gray-700");
    },
    m(i, n) {
      E(i, e, n);
    },
    p: le,
    d(i) {
      i && T(e);
    }
  };
}
function fk(t) {
  let e, i, n, l, r, o, s;
  const u = (
    /*#slots*/
    t[9].default
  ), a = X(
    u,
    t,
    /*$$scope*/
    t[8],
    Gl
  );
  let f = (
    /*divider*/
    t[0] && Hl(t)
  );
  return {
    c() {
      e = M("ul"), a && a.c(), i = U(), f && f.c(), n = U(), l = M("div"), h(
        e,
        "class",
        /*ulClass*/
        t[3]
      ), h(
        l,
        "class",
        /*contentClass*/
        t[2]
      ), h(l, "role", "tabpanel"), h(l, "aria-labelledby", "id-tab");
    },
    m(c, d) {
      E(c, e, d), a && a.m(e, null), E(c, i, d), f && f.m(c, d), E(c, n, d), E(c, l, d), r = !0, o || (s = je(
        /*init*/
        t[4].call(null, l)
      ), o = !0);
    },
    p(c, [d]) {
      a && a.p && (!r || d & /*$$scope, style*/
      258) && Q(
        a,
        u,
        c,
        /*$$scope*/
        c[8],
        r ? K(
          u,
          /*$$scope*/
          c[8],
          d,
          uk
        ) : Y(
          /*$$scope*/
          c[8]
        ),
        Gl
      ), (!r || d & /*ulClass*/
      8) && h(
        e,
        "class",
        /*ulClass*/
        c[3]
      ), /*divider*/
      c[0] ? f ? (f.p(c, d), d & /*divider*/
      1 && p(f, 1)) : (f = Hl(c), f.c(), p(f, 1), f.m(n.parentNode, n)) : f && (oe(), w(f, 1, 1, () => {
        f = null;
      }), se()), (!r || d & /*contentClass*/
      4) && h(
        l,
        "class",
        /*contentClass*/
        c[2]
      );
    },
    i(c) {
      r || (p(a, c), p(f), r = !0);
    },
    o(c) {
      w(a, c), w(f), r = !1;
    },
    d(c) {
      c && (T(e), T(i), T(n), T(l)), a && a.d(c), f && f.d(c), o = !1, s();
    }
  };
}
function ck(t, e, i) {
  let n, { $$slots: l = {}, $$scope: r } = e, { style: o = "none" } = e, { defaultClass: s = "uikit-flex uikit-flex-wrap uikit-space-x-2 rtl:uikit-space-x-reverse" } = e, { contentClass: u = "uikit-p-4 uikit-bg-gray-50 uikit-rounded-lg dark:uikit-bg-gray-800 uikit-mt-4" } = e, { divider: a = !0 } = e, { activeClasses: f = "uikit-p-4 uikit-text-primary-600 uikit-bg-gray-100 uikit-rounded-t-lg dark:uikit-bg-gray-800 dark:uikit-text-primary-500" } = e, { inactiveClasses: c = "uikit-p-4 uikit-text-gray-500 uikit-rounded-t-lg hover:uikit-text-gray-600 hover:uikit-bg-gray-50 dark:uikit-text-gray-400 dark:hover:uikit-bg-gray-800 dark:hover:uikit-text-gray-300" } = e;
  const d = {
    full: "uikit-p-4 uikit-w-full group-first:uikit-rounded-s-lg group-last:uikit-rounded-e-lg uikit-text-gray-900 uikit-bg-gray-100 focus:uikit-ring-4 focus:uikit-ring-primary-300 focus:uikit-outline-none dark:uikit-bg-gray-700 dark:uikit-text-white",
    pill: "uikit-py-3 uikit-px-4 uikit-text-white uikit-bg-primary-600 uikit-rounded-lg",
    underline: "uikit-p-4 uikit-text-primary-600 uikit-border-b-2 uikit-border-primary-600 dark:uikit-text-primary-500 dark:uikit-border-primary-500",
    none: ""
  }, k = {
    full: "uikit-p-4 uikit-w-full group-first:uikit-rounded-s-lg group-last:uikit-rounded-e-lg uikit-text-gray-500 dark:uikit-text-gray-400 uikit-bg-white hover:uikit-text-gray-700 hover:uikit-bg-gray-50 focus:uikit-ring-4 focus:uikit-ring-primary-300 focus:uikit-outline-none dark:hover:uikit-text-white dark:uikit-bg-gray-800 dark:hover:uikit-bg-gray-700",
    pill: "uikit-py-3 uikit-px-4 uikit-text-gray-500 uikit-rounded-lg hover:uikit-text-gray-900 hover:uikit-bg-gray-100 dark:uikit-text-gray-400 dark:hover:uikit-bg-gray-800 dark:hover:uikit-text-white",
    underline: "uikit-p-4 uikit-border-b-2 uikit-border-transparent hover:uikit-text-gray-600 hover:uikit-border-gray-300 dark:hover:uikit-text-gray-300 uikit-text-gray-500 dark:uikit-text-gray-400",
    none: ""
  }, g = {
    activeClasses: d[o] || f,
    inactiveClasses: k[o] || c,
    selected: it()
  };
  We("ctx", g);
  function m(b) {
    return { destroy: g.selected.subscribe((C) => {
      C && b.replaceChildren(C);
    }) };
  }
  return t.$$set = (b) => {
    i(13, e = N(N({}, e), F(b))), "style" in b && i(1, o = b.style), "defaultClass" in b && i(5, s = b.defaultClass), "contentClass" in b && i(2, u = b.contentClass), "divider" in b && i(0, a = b.divider), "activeClasses" in b && i(6, f = b.activeClasses), "inactiveClasses" in b && i(7, c = b.inactiveClasses), "$$scope" in b && i(8, r = b.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*style, divider*/
    3 && i(0, a = ["full", "pill"].includes(o) ? !1 : a), i(3, n = O(s, o === "underline" && "-uikit-mb-px", e.class));
  }, e = F(e), [
    a,
    o,
    u,
    n,
    m,
    s,
    f,
    c,
    r,
    l
  ];
}
class dk extends te {
  constructor(e) {
    super(), ee(this, e, ck, fk, J, {
      style: 1,
      defaultClass: 5,
      contentClass: 2,
      divider: 0,
      activeClasses: 6,
      inactiveClasses: 7
    });
  }
}
const kk = (t) => ({}), Vl = (t) => ({});
function gk(t) {
  let e;
  return {
    c() {
      e = me(
        /*title*/
        t[1]
      );
    },
    m(i, n) {
      E(i, e, n);
    },
    p(i, n) {
      n & /*title*/
      2 && we(
        e,
        /*title*/
        i[1]
      );
    },
    d(i) {
      i && T(e);
    }
  };
}
function ql(t) {
  let e, i, n, l, r;
  const o = (
    /*#slots*/
    t[10].default
  ), s = X(
    o,
    t,
    /*$$scope*/
    t[9],
    null
  );
  return {
    c() {
      e = M("div"), i = M("div"), s && s.c(), h(e, "class", "uikit-hidden tab_content_placeholder");
    },
    m(u, a) {
      E(u, e, a), R(e, i), s && s.m(i, null), n = !0, l || (r = je(
        /*init*/
        t[3].call(null, i)
      ), l = !0);
    },
    p(u, a) {
      s && s.p && (!n || a & /*$$scope*/
      512) && Q(
        s,
        o,
        u,
        /*$$scope*/
        u[9],
        n ? K(
          o,
          /*$$scope*/
          u[9],
          a,
          null
        ) : Y(
          /*$$scope*/
          u[9]
        ),
        null
      );
    },
    i(u) {
      n || (p(s, u), n = !0);
    },
    o(u) {
      w(s, u), n = !1;
    },
    d(u) {
      u && T(e), s && s.d(u), l = !1, r();
    }
  };
}
function mk(t) {
  let e, i, n, l, r, o, s;
  const u = (
    /*#slots*/
    t[10].title
  ), a = X(
    u,
    t,
    /*$$scope*/
    t[9],
    Vl
  ), f = a || gk(t);
  let c = [
    { type: "button" },
    { role: "tab" },
    /*$$restProps*/
    t[5],
    { class: (
      /*buttonClass*/
      t[2]
    ) }
  ], d = {};
  for (let g = 0; g < c.length; g += 1)
    d = N(d, c[g]);
  let k = (
    /*open*/
    t[0] && ql(t)
  );
  return {
    c() {
      e = M("li"), i = M("button"), f && f.c(), n = U(), k && k.c(), ue(i, d), h(e, "class", l = O(
        "group",
        /*$$props*/
        t[4].class
      )), h(e, "role", "presentation");
    },
    m(g, m) {
      E(g, e, m), R(e, i), f && f.m(i, null), i.autofocus && i.focus(), R(e, n), k && k.m(e, null), r = !0, o || (s = [
        D(
          i,
          "click",
          /*click_handler_1*/
          t[21]
        ),
        D(
          i,
          "blur",
          /*blur_handler*/
          t[11]
        ),
        D(
          i,
          "click",
          /*click_handler*/
          t[12]
        ),
        D(
          i,
          "contextmenu",
          /*contextmenu_handler*/
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
      ], o = !0);
    },
    p(g, [m]) {
      a ? a.p && (!r || m & /*$$scope*/
      512) && Q(
        a,
        u,
        g,
        /*$$scope*/
        g[9],
        r ? K(
          u,
          /*$$scope*/
          g[9],
          m,
          kk
        ) : Y(
          /*$$scope*/
          g[9]
        ),
        Vl
      ) : f && f.p && (!r || m & /*title*/
      2) && f.p(g, r ? m : -1), ue(i, d = fe(c, [
        { type: "button" },
        { role: "tab" },
        m & /*$$restProps*/
        32 && /*$$restProps*/
        g[5],
        (!r || m & /*buttonClass*/
        4) && { class: (
          /*buttonClass*/
          g[2]
        ) }
      ])), /*open*/
      g[0] ? k ? (k.p(g, m), m & /*open*/
      1 && p(k, 1)) : (k = ql(g), k.c(), p(k, 1), k.m(e, null)) : k && (oe(), w(k, 1, 1, () => {
        k = null;
      }), se()), (!r || m & /*$$props*/
      16 && l !== (l = O(
        "group",
        /*$$props*/
        g[4].class
      ))) && h(e, "class", l);
    },
    i(g) {
      r || (p(f, g), p(k), r = !0);
    },
    o(g) {
      w(f, g), w(k), r = !1;
    },
    d(g) {
      g && T(e), f && f.d(g), k && k.d(), o = !1, Ce(s);
    }
  };
}
function hk(t, e, i) {
  const n = ["open", "title", "activeClasses", "inactiveClasses", "defaultClass"];
  let l = ne(e, n), { $$slots: r = {}, $$scope: o } = e, { open: s = !1 } = e, { title: u = "Tab title" } = e, { activeClasses: a = void 0 } = e, { inactiveClasses: f = void 0 } = e, { defaultClass: c = "uikit-inline-block uikit-text-sm uikit-font-medium uikit-text-center disabled:uikit-cursor-not-allowed" } = e;
  const d = Re("ctx") ?? {}, k = d.selected ?? it();
  function g(P) {
    return k.set(P), { destroy: k.subscribe((ke) => {
      ke !== P && i(0, s = !1);
    }) };
  }
  let m;
  function b(P) {
    W.call(this, t, P);
  }
  function _(P) {
    W.call(this, t, P);
  }
  function C(P) {
    W.call(this, t, P);
  }
  function v(P) {
    W.call(this, t, P);
  }
  function y(P) {
    W.call(this, t, P);
  }
  function S(P) {
    W.call(this, t, P);
  }
  function A(P) {
    W.call(this, t, P);
  }
  function I(P) {
    W.call(this, t, P);
  }
  function j(P) {
    W.call(this, t, P);
  }
  function V(P) {
    W.call(this, t, P);
  }
  const ie = () => i(0, s = !0);
  return t.$$set = (P) => {
    i(4, e = N(N({}, e), F(P))), i(5, l = ne(e, n)), "open" in P && i(0, s = P.open), "title" in P && i(1, u = P.title), "activeClasses" in P && i(6, a = P.activeClasses), "inactiveClasses" in P && i(7, f = P.inactiveClasses), "defaultClass" in P && i(8, c = P.defaultClass), "$$scope" in P && i(9, o = P.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*defaultClass, open, activeClasses, inactiveClasses*/
    449 && i(2, m = O(
      c,
      s ? a ?? d.activeClasses : f ?? d.inactiveClasses,
      s && "active"
    ));
  }, e = F(e), [
    s,
    u,
    m,
    g,
    e,
    l,
    a,
    f,
    c,
    o,
    r,
    b,
    _,
    C,
    v,
    y,
    S,
    A,
    I,
    j,
    V,
    ie
  ];
}
class bk extends te {
  constructor(e) {
    super(), ee(this, e, hk, mk, J, {
      open: 0,
      title: 1,
      activeClasses: 6,
      inactiveClasses: 7,
      defaultClass: 8
    });
  }
}
function _k(t) {
  let e;
  return {
    c() {
      e = M("div");
    },
    m(i, n) {
      E(i, e, n), t[2](e);
    },
    p: le,
    i: le,
    o: le,
    d(i) {
      i && T(e), t[2](null);
    }
  };
}
function pk(t, e, i) {
  let { dom: n } = e, l;
  function r(o) {
    Se[o ? "unshift" : "push"](() => {
      l = o, i(0, l), i(1, n);
    });
  }
  return t.$$set = (o) => {
    "dom" in o && i(1, n = o.dom);
  }, t.$$.update = () => {
    t.$$.dirty & /*dom, domref*/
    3 && n && l && (i(0, l.innerHTML = "", l), l.appendChild(n));
  }, [l, n, r];
}
class yk extends te {
  constructor(e) {
    super(), ee(this, e, pk, _k, J, { dom: 1 });
  }
}
function Xl(t, e, i) {
  const n = t.slice();
  return n[4] = e[i].icon, n[5] = e[i].label, n[6] = e[i].content, n[8] = i, n;
}
function vk(t) {
  let e, i, n, l;
  return i = new yk({ props: { dom: (
    /*content*/
    t[6]
  ) } }), {
    c() {
      e = M("p"), $(i.$$.fragment), n = U(), h(e, "class", "uikit-text-sm uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(r, o) {
      E(r, e, o), Z(i, e, null), E(r, n, o), l = !0;
    },
    p(r, o) {
      const s = {};
      o & /*pages*/
      2 && (s.dom = /*content*/
      r[6]), i.$set(s);
    },
    i(r) {
      l || (p(i.$$.fragment, r), l = !0);
    },
    o(r) {
      w(i.$$.fragment, r), l = !1;
    },
    d(r) {
      r && (T(e), T(n)), x(i);
    }
  };
}
function wk(t) {
  let e, i, n, l = (
    /*label*/
    t[5] + ""
  ), r, o, s;
  return i = new It({
    props: { size: "sm", name: (
      /*icon*/
      t[4]
    ) }
  }), {
    c() {
      e = M("div"), $(i.$$.fragment), n = U(), r = me(l), o = U(), h(e, "slot", "title"), h(e, "class", "uikit-flex uikit-items-center uikit-gap-2");
    },
    m(u, a) {
      E(u, e, a), Z(i, e, null), R(e, n), R(e, r), R(e, o), s = !0;
    },
    p(u, a) {
      const f = {};
      a & /*pages*/
      2 && (f.name = /*icon*/
      u[4]), i.$set(f), (!s || a & /*pages*/
      2) && l !== (l = /*label*/
      u[5] + "") && we(r, l);
    },
    i(u) {
      s || (p(i.$$.fragment, u), s = !0);
    },
    o(u) {
      w(i.$$.fragment, u), s = !1;
    },
    d(u) {
      u && T(e), x(i);
    }
  };
}
function Kl(t) {
  let e, i;
  return e = new bk({
    props: {
      open: (
        /*idx*/
        t[0] === /*id*/
        t[8]
      ),
      $$slots: {
        title: [wk],
        default: [vk]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*idx*/
      1 && (r.open = /*idx*/
      n[0] === /*id*/
      n[8]), l & /*$$scope, pages*/
      514 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Ck(t) {
  let e, i, n = _e(
    /*pages*/
    t[1]
  ), l = [];
  for (let o = 0; o < n.length; o += 1)
    l[o] = Kl(Xl(t, n, o));
  const r = (o) => w(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      e = ae();
    },
    m(o, s) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(o, s);
      E(o, e, s), i = !0;
    },
    p(o, s) {
      if (s & /*idx, pages*/
      3) {
        n = _e(
          /*pages*/
          o[1]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = Xl(o, n, u);
          l[u] ? (l[u].p(a, s), p(l[u], 1)) : (l[u] = Kl(a), l[u].c(), p(l[u], 1), l[u].m(e.parentNode, e));
        }
        for (oe(), u = n.length; u < l.length; u += 1)
          r(u);
        se();
      }
    },
    i(o) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          p(l[s]);
        i = !0;
      }
    },
    o(o) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1)
        w(l[s]);
      i = !1;
    },
    d(o) {
      o && T(e), Fe(l, o);
    }
  };
}
function Sk(t) {
  let e, i;
  return e = new dk({
    props: {
      style: (
        /*style*/
        t[2]
      ),
      $$slots: { default: [Ck] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      $(e.$$.fragment);
    },
    m(n, l) {
      Z(e, n, l), i = !0;
    },
    p(n, [l]) {
      const r = {};
      l & /*style*/
      4 && (r.style = /*style*/
      n[2]), l & /*$$scope, pages, idx*/
      515 && (r.$$scope = { dirty: l, ctx: n }), e.$set(r);
    },
    i(n) {
      i || (p(e.$$.fragment, n), i = !0);
    },
    o(n) {
      w(e.$$.fragment, n), i = !1;
    },
    d(n) {
      x(e, n);
    }
  };
}
function Tk(t, e, i) {
  let { pages: n = [] } = e, { idx: l = 0 } = e, { style: r = "underline" } = e;
  function o(s) {
    i(0, l = s);
  }
  return t.$$set = (s) => {
    "pages" in s && i(1, n = s.pages), "idx" in s && i(0, l = s.idx), "style" in s && i(2, r = s.style);
  }, [l, n, r, o];
}
class Ek extends te {
  constructor(e) {
    super(), ee(this, e, Tk, Sk, J, { pages: 1, idx: 0, style: 2, change: 3 });
  }
  get change() {
    return this.$$.ctx[3];
  }
}
const Wk = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  let n = new Ek({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let l in i) {
      let r = i[l];
      n.$on(l, (o) => {
        r(o.detail);
      });
    }
  return n;
};
export {
  Ok as FnAccordion,
  Ak as FnAlert,
  Pk as FnAvatar,
  Nk as FnCarousel,
  Lk as FnDeviceMockup,
  Mk as FnDrawer,
  zk as FnDropdown,
  jk as FnGallery,
  Fk as FnModal,
  Dk as FnSidebar,
  Bk as FnSpinner,
  Wk as FnTabs
};
