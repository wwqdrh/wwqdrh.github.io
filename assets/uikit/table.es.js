var hl = Object.defineProperty;
var pl = (t, e, n) => e in t ? hl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var H = (t, e, n) => (pl(t, typeof e != "symbol" ? e + "" : e, n), n);
function $e() {
}
const Wr = (t) => t;
function C(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function Li(t) {
  return t();
}
function co() {
  return /* @__PURE__ */ Object.create(null);
}
function He(t) {
  t.forEach(Li);
}
function wt(t) {
  return typeof t == "function";
}
function X(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function bl(t) {
  return Object.keys(t).length === 0;
}
function or(t, ...e) {
  if (t == null) {
    for (const r of e)
      r(void 0);
    return $e;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function we(t) {
  let e;
  return or(t, (n) => e = n)(), e;
}
function De(t, e, n) {
  t.$$.on_destroy.push(or(e, n));
}
function x(t, e, n, r) {
  if (t) {
    const o = ji(t, e, n, r);
    return t[0](o);
  }
}
function ji(t, e, n, r) {
  return t[1] && r ? C(n.ctx.slice(), t[1](r(e))) : n.ctx;
}
function ee(t, e, n, r) {
  if (t[2] && r) {
    const o = t[2](r(n));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const i = [], s = Math.max(e.dirty.length, o.length);
      for (let a = 0; a < s; a += 1)
        i[a] = e.dirty[a] | o[a];
      return i;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function te(t, e, n, r, o, i) {
  if (o) {
    const s = ji(e, n, r, i);
    t.p(s, o);
  }
}
function ne(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let r = 0; r < n; r++)
      e[r] = -1;
    return e;
  }
  return -1;
}
function ue(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function B(t, e) {
  const n = {};
  e = new Set(e);
  for (const r in t)
    !e.has(r) && r[0] !== "$" && (n[r] = t[r]);
  return n;
}
function _r(t, e, n) {
  return t.set(n), e;
}
function ot(t) {
  return t && wt(t.destroy) ? t.destroy : $e;
}
const zi = typeof window < "u";
let Gr = zi ? () => window.performance.now() : () => Date.now(), Vr = zi ? (t) => requestAnimationFrame(t) : $e;
const xt = /* @__PURE__ */ new Set();
function Bi(t) {
  xt.forEach((e) => {
    e.c(t) || (xt.delete(e), e.f());
  }), xt.size !== 0 && Vr(Bi);
}
function Hr(t) {
  let e;
  return xt.size === 0 && Vr(Bi), {
    promise: new Promise((n) => {
      xt.add(e = { c: t, f: n });
    }),
    abort() {
      xt.delete(e);
    }
  };
}
function Ye(t, e) {
  t.appendChild(e);
}
function Wi(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function gl(t) {
  const e = me("style");
  return e.textContent = "/* empty */", _l(Wi(t), e), e.sheet;
}
function _l(t, e) {
  return Ye(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function R(t, e, n) {
  t.insertBefore(e, n || null);
}
function S(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function on(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function me(t) {
  return document.createElement(t);
}
function Gi(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Ve(t) {
  return document.createTextNode(t);
}
function We() {
  return Ve(" ");
}
function Ce() {
  return Ve("");
}
function oe(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function et(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const vl = ["width", "height"];
function U(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const r in e)
    e[r] == null ? t.removeAttribute(r) : r === "style" ? t.style.cssText = e[r] : r === "__value" ? t.value = t[r] = e[r] : n[r] && n[r].set && vl.indexOf(r) === -1 ? t[r] = e[r] : et(t, r, e[r]);
}
function zn(t, e) {
  for (const n in e)
    et(t, n, e[n]);
}
function kl(t, e) {
  Object.keys(e).forEach((n) => {
    wl(t, n, e[n]);
  });
}
function wl(t, e, n) {
  e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : et(t, e, n);
}
function Bn(t) {
  return /-/.test(t) ? kl : U;
}
function yl(t) {
  return Array.from(t.childNodes);
}
function Lt(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function fo(t, e) {
  t.value = e ?? "";
}
function Vi(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
function Wn(t, e) {
  return new t(e);
}
const Gn = /* @__PURE__ */ new Map();
let Vn = 0;
function Cl(t) {
  let e = 5381, n = t.length;
  for (; n--; )
    e = (e << 5) - e ^ t.charCodeAt(n);
  return e >>> 0;
}
function Al(t, e) {
  const n = { stylesheet: gl(e), rules: {} };
  return Gn.set(t, n), n;
}
function Hn(t, e, n, r, o, i, s, a = 0) {
  const l = 16.666 / r;
  let u = `{
`;
  for (let p = 0; p <= 1; p += l) {
    const k = e + (n - e) * i(p);
    u += p * 100 + `%{${s(k, 1 - k)}}
`;
  }
  const c = u + `100% {${s(n, 1 - n)}}
}`, f = `__svelte_${Cl(c)}_${a}`, m = Wi(t), { stylesheet: d, rules: h } = Gn.get(m) || Al(m, t);
  h[f] || (h[f] = !0, d.insertRule(`@keyframes ${f} ${c}`, d.cssRules.length));
  const b = t.style.animation || "";
  return t.style.animation = `${b ? `${b}, ` : ""}${f} ${r}ms linear ${o}ms 1 both`, Vn += 1, f;
}
function Kn(t, e) {
  const n = (t.style.animation || "").split(", "), r = n.filter(
    e ? (i) => i.indexOf(e) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = n.length - r.length;
  o && (t.style.animation = r.join(", "), Vn -= o, Vn || El());
}
function El() {
  Vr(() => {
    Vn || (Gn.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && S(e);
    }), Gn.clear());
  });
}
let vn;
function gn(t) {
  vn = t;
}
function wn() {
  if (!vn)
    throw new Error("Function called outside component initialization");
  return vn;
}
function Rr(t) {
  wn().$$.on_mount.push(t);
}
function Hi(t) {
  wn().$$.on_destroy.push(t);
}
function Tl() {
  const t = wn();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const o = t.$$.callbacks[e];
    if (o) {
      const i = Vi(
        /** @type {string} */
        e,
        n,
        { cancelable: r }
      );
      return o.slice().forEach((s) => {
        s.call(t, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function Bt(t, e) {
  return wn().$$.context.set(t, e), e;
}
function Nt(t) {
  return wn().$$.context.get(t);
}
function ce(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((r) => r.call(this, e));
}
const Jt = [], dt = [];
let en = [];
const Or = [], Ki = /* @__PURE__ */ Promise.resolve();
let Ir = !1;
function Ui() {
  Ir || (Ir = !0, Ki.then(qi));
}
function pn() {
  return Ui(), Ki;
}
function vt(t) {
  en.push(t);
}
function Wt(t) {
  Or.push(t);
}
const vr = /* @__PURE__ */ new Set();
let qt = 0;
function qi() {
  if (qt !== 0)
    return;
  const t = vn;
  do {
    try {
      for (; qt < Jt.length; ) {
        const e = Jt[qt];
        qt++, gn(e), Sl(e.$$);
      }
    } catch (e) {
      throw Jt.length = 0, qt = 0, e;
    }
    for (gn(null), Jt.length = 0, qt = 0; dt.length; )
      dt.pop()();
    for (let e = 0; e < en.length; e += 1) {
      const n = en[e];
      vr.has(n) || (vr.add(n), n());
    }
    en.length = 0;
  } while (Jt.length);
  for (; Or.length; )
    Or.pop()();
  Ir = !1, vr.clear(), gn(t);
}
function Sl(t) {
  if (t.fragment !== null) {
    t.update(), He(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(vt);
  }
}
function Rl(t) {
  const e = [], n = [];
  en.forEach((r) => t.indexOf(r) === -1 ? e.push(r) : n.push(r)), n.forEach((r) => r()), en = e;
}
let an;
function Kr() {
  return an || (an = Promise.resolve(), an.then(() => {
    an = null;
  })), an;
}
function Dt(t, e, n) {
  t.dispatchEvent(Vi(`${e ? "intro" : "outro"}${n}`));
}
const Mn = /* @__PURE__ */ new Set();
let ht;
function Ie() {
  ht = {
    r: 0,
    c: [],
    p: ht
    // parent group
  };
}
function Ne() {
  ht.r || He(ht.c), ht = ht.p;
}
function g(t, e) {
  t && t.i && (Mn.delete(t), t.i(e));
}
function _(t, e, n, r) {
  if (t && t.o) {
    if (Mn.has(t))
      return;
    Mn.add(t), ht.c.push(() => {
      Mn.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
const Ur = { duration: 0 };
function Xi(t, e, n) {
  const r = { direction: "in" };
  let o = e(t, n, r), i = !1, s, a, l = 0;
  function u() {
    s && Kn(t, s);
  }
  function c() {
    const {
      delay: m = 0,
      duration: d = 300,
      easing: h = Wr,
      tick: b = $e,
      css: p
    } = o || Ur;
    p && (s = Hn(t, 0, 1, d, m, h, p, l++)), b(0, 1);
    const k = Gr() + m, y = k + d;
    a && a.abort(), i = !0, vt(() => Dt(t, !0, "start")), a = Hr((I) => {
      if (i) {
        if (I >= y)
          return b(1, 0), Dt(t, !0, "end"), u(), i = !1;
        if (I >= k) {
          const T = h((I - k) / d);
          b(T, 1 - T);
        }
      }
      return i;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, Kn(t), wt(o) ? (o = o(r), Kr().then(c)) : c());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (u(), i = !1);
    }
  };
}
function Yi(t, e, n) {
  const r = { direction: "out" };
  let o = e(t, n, r), i = !0, s;
  const a = ht;
  a.r += 1;
  let l;
  function u() {
    const {
      delay: c = 0,
      duration: f = 300,
      easing: m = Wr,
      tick: d = $e,
      css: h
    } = o || Ur;
    h && (s = Hn(t, 1, 0, f, c, m, h));
    const b = Gr() + c, p = b + f;
    vt(() => Dt(t, !1, "start")), "inert" in t && (l = /** @type {HTMLElement} */
    t.inert, t.inert = !0), Hr((k) => {
      if (i) {
        if (k >= p)
          return d(0, 1), Dt(t, !1, "end"), --a.r || He(a.c), !1;
        if (k >= b) {
          const y = m((k - b) / f);
          d(1 - y, y);
        }
      }
      return i;
    });
  }
  return wt(o) ? Kr().then(() => {
    o = o(r), u();
  }) : u(), {
    end(c) {
      c && "inert" in t && (t.inert = l), c && o.tick && o.tick(1, 0), i && (s && Kn(t, s), i = !1);
    }
  };
}
function mo(t, e, n, r) {
  let i = e(t, n, { direction: "both" }), s = r ? 0 : 1, a = null, l = null, u = null, c;
  function f() {
    u && Kn(t, u);
  }
  function m(h, b) {
    const p = (
      /** @type {Program['d']} */
      h.b - s
    );
    return b *= Math.abs(p), {
      a: s,
      b: h.b,
      d: p,
      duration: b,
      start: h.start,
      end: h.start + b,
      group: h.group
    };
  }
  function d(h) {
    const {
      delay: b = 0,
      duration: p = 300,
      easing: k = Wr,
      tick: y = $e,
      css: I
    } = i || Ur, T = {
      start: Gr() + b,
      b: h
    };
    h || (T.group = ht, ht.r += 1), "inert" in t && (h ? c !== void 0 && (t.inert = c) : (c = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || l ? l = T : (I && (f(), u = Hn(t, s, h, p, b, k, I)), h && y(0, 1), a = m(T, p), vt(() => Dt(t, h, "start")), Hr((q) => {
      if (l && q > l.start && (a = m(l, p), l = null, Dt(t, a.b, "start"), I && (f(), u = Hn(
        t,
        s,
        a.b,
        a.duration,
        0,
        k,
        i.css
      ))), a) {
        if (q >= a.end)
          y(s = a.b, 1 - s), Dt(t, a.b, "end"), l || (a.b ? f() : --a.group.r || He(a.group.c)), a = null;
        else if (q >= a.start) {
          const M = q - a.start;
          s = a.a + a.d * k(M / a.duration), y(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(h) {
      wt(i) ? Kr().then(() => {
        i = i({ direction: h ? "in" : "out" }), d(h);
      }) : d(h);
    },
    end() {
      f(), a = l = null;
    }
  };
}
function qe(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function ir(t, e) {
  _(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function sr(t, e, n, r, o, i, s, a, l, u, c, f) {
  let m = t.length, d = i.length, h = m;
  const b = {};
  for (; h--; )
    b[t[h].key] = h;
  const p = [], k = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), I = [];
  for (h = d; h--; ) {
    const G = f(o, i, h), de = n(G);
    let J = s.get(de);
    J ? r && I.push(() => J.p(G, e)) : (J = u(de, G), J.c()), k.set(de, p[h] = J), de in b && y.set(de, Math.abs(h - b[de]));
  }
  const T = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set();
  function M(G) {
    g(G, 1), G.m(a, c), s.set(G.key, G), c = G.first, d--;
  }
  for (; m && d; ) {
    const G = p[d - 1], de = t[m - 1], J = G.key, K = de.key;
    G === de ? (c = G.first, m--, d--) : k.has(K) ? !s.has(J) || T.has(J) ? M(G) : q.has(K) ? m-- : y.get(J) > y.get(K) ? (q.add(J), M(G)) : (T.add(K), m--) : (l(de, s), m--);
  }
  for (; m--; ) {
    const G = t[m];
    k.has(G.key) || l(G, s);
  }
  for (; d; )
    M(p[d - 1]);
  return He(I), p;
}
function Y(t, e) {
  const n = {}, r = {}, o = { $$scope: 1 };
  let i = t.length;
  for (; i--; ) {
    const s = t[i], a = e[i];
    if (a) {
      for (const l in s)
        l in a || (r[l] = 1);
      for (const l in a)
        o[l] || (n[l] = a[l], o[l] = 1);
      t[i] = a;
    } else
      for (const l in s)
        o[l] = 1;
  }
  for (const s in r)
    s in n || (n[s] = void 0);
  return n;
}
function Ke(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Gt(t, e, n) {
  const r = t.$$.props[e];
  r !== void 0 && (t.$$.bound[r] = n, n(t.$$.ctx[r]));
}
function j(t) {
  t && t.c();
}
function D(t, e, n) {
  const { fragment: r, after_update: o } = t.$$;
  r && r.m(e, n), vt(() => {
    const i = t.$$.on_mount.map(Li).filter(wt);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : He(i), t.$$.on_mount = [];
  }), o.forEach(vt);
}
function L(t, e) {
  const n = t.$$;
  n.fragment !== null && (Rl(n.after_update), He(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ol(t, e) {
  t.$$.dirty[0] === -1 && (Jt.push(t), Ui(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ie(t, e, n, r, o, i, s, a = [-1]) {
  const l = vn;
  gn(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: $e,
    not_equal: o,
    bound: co(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: co(),
    dirty: a,
    skip_bound: !1,
    root: e.target || l.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = n ? n(t, e.props || {}, (f, m, ...d) => {
    const h = d.length ? d[0] : m;
    return u.ctx && o(u.ctx[f], u.ctx[f] = h) && (!u.skip_bound && u.bound[f] && u.bound[f](h), c && Ol(t, f)), m;
  }) : [], u.update(), c = !0, He(u.before_update), u.fragment = r ? r(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = yl(e.target);
      u.fragment && u.fragment.l(f), f.forEach(S);
    } else
      u.fragment && u.fragment.c();
    e.intro && g(t.$$.fragment), D(t, e.target, e.anchor), qi();
  }
  gn(l);
}
class se {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    H(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    H(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    L(this, 1), this.$destroy = $e;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!wt(n))
      return $e;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !bl(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Il = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Il);
function Zi(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = Zi(t[e])) && (r && (r += " "), r += n);
    else
      for (e in t)
        t[e] && (r && (r += " "), r += e);
  return r;
}
function Nl() {
  for (var t, e, n = 0, r = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = Zi(t)) && (r && (r += " "), r += e);
  return r;
}
function Pl() {
  for (var t = 0, e, n, r = ""; t < arguments.length; )
    (e = arguments[t++]) && (n = Ji(e)) && (r && (r += " "), r += n);
  return r;
}
function Ji(t) {
  if (typeof t == "string")
    return t;
  for (var e, n = "", r = 0; r < t.length; r++)
    t[r] && (e = Ji(t[r])) && (n && (n += " "), n += e);
  return n;
}
var qr = "-";
function $l(t) {
  var e = Ml(t), n = t.conflictingClassGroups, r = t.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function i(a) {
    var l = a.split(qr);
    return l[0] === "" && l.length !== 1 && l.shift(), Qi(l, e) || Fl(a);
  }
  function s(a, l) {
    var u = n[a] || [];
    return l && o[a] ? [].concat(u, o[a]) : u;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: s
  };
}
function Qi(t, e) {
  var s;
  if (t.length === 0)
    return e.classGroupId;
  var n = t[0], r = e.nextPart.get(n), o = r ? Qi(t.slice(1), r) : void 0;
  if (o)
    return o;
  if (e.validators.length !== 0) {
    var i = t.join(qr);
    return (s = e.validators.find(function(a) {
      var l = a.validator;
      return l(i);
    })) == null ? void 0 : s.classGroupId;
  }
}
var ho = /^\[(.+)\]$/;
function Fl(t) {
  if (ho.test(t)) {
    var e = ho.exec(t)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Ml(t) {
  var e = t.theme, n = t.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = Ll(Object.entries(t.classGroups), n);
  return o.forEach(function(i) {
    var s = i[0], a = i[1];
    Nr(a, r, s, e);
  }), r;
}
function Nr(t, e, n, r) {
  t.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? e : po(e, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Dl(o)) {
        Nr(o(r), e, n, r);
        return;
      }
      e.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(s) {
      var a = s[0], l = s[1];
      Nr(l, po(e, a), n, r);
    });
  });
}
function po(t, e) {
  var n = t;
  return e.split(qr).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Dl(t) {
  return t.isThemeGetter;
}
function Ll(t, e) {
  return e ? t.map(function(n) {
    var r = n[0], o = n[1], i = o.map(function(s) {
      return typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(a) {
        var l = a[0], u = a[1];
        return [e + l, u];
      })) : s;
    });
    return [r, i];
  }) : t;
}
function jl(t) {
  if (t < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var e = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(i, s) {
    n.set(i, s), e++, e > t && (e = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(s) {
      var a = n.get(s);
      if (a !== void 0)
        return a;
      if ((a = r.get(s)) !== void 0)
        return o(s, a), a;
    },
    set: function(s, a) {
      n.has(s) ? n.set(s, a) : o(s, a);
    }
  };
}
var xi = "!";
function zl(t) {
  var e = t.separator || ":", n = e.length === 1, r = e[0], o = e.length;
  return function(s) {
    for (var a = [], l = 0, u = 0, c, f = 0; f < s.length; f++) {
      var m = s[f];
      if (l === 0) {
        if (m === r && (n || s.slice(f, f + o) === e)) {
          a.push(s.slice(u, f)), u = f + o;
          continue;
        }
        if (m === "/") {
          c = f;
          continue;
        }
      }
      m === "[" ? l++ : m === "]" && l--;
    }
    var d = a.length === 0 ? s : s.substring(u), h = d.startsWith(xi), b = h ? d.substring(1) : d, p = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: b,
      maybePostfixModifierPosition: p
    };
  };
}
function Bl(t) {
  if (t.length <= 1)
    return t;
  var e = [], n = [];
  return t.forEach(function(r) {
    var o = r[0] === "[";
    o ? (e.push.apply(e, n.sort().concat([r])), n = []) : n.push(r);
  }), e.push.apply(e, n.sort()), e;
}
function Wl(t) {
  return {
    cache: jl(t.cacheSize),
    splitModifiers: zl(t),
    ...$l(t)
  };
}
var Gl = /\s+/;
function Vl(t, e) {
  var n = e.splitModifiers, r = e.getClassGroupId, o = e.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return t.trim().split(Gl).map(function(s) {
    var a = n(s), l = a.modifiers, u = a.hasImportantModifier, c = a.baseClassName, f = a.maybePostfixModifierPosition, m = r(f ? c.substring(0, f) : c), d = !!f;
    if (!m) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (m = r(c), !m)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      d = !1;
    }
    var h = Bl(l).join(":"), b = u ? h + xi : h;
    return {
      isTailwindClass: !0,
      modifierId: b,
      classGroupId: m,
      originalClassName: s,
      hasPostfixModifier: d
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var a = s.modifierId, l = s.classGroupId, u = s.hasPostfixModifier, c = a + l;
    return i.has(c) ? !1 : (i.add(c), o(l, u).forEach(function(f) {
      return i.add(a + f);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function Pr() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var r, o, i, s = a;
  function a(u) {
    var c = e[0], f = e.slice(1), m = f.reduce(function(d, h) {
      return h(d);
    }, c());
    return r = Wl(m), o = r.cache.get, i = r.cache.set, s = l, l(u);
  }
  function l(u) {
    var c = o(u);
    if (c)
      return c;
    var f = Vl(u, r);
    return i(u, f), f;
  }
  return function() {
    return s(Pl.apply(null, arguments));
  };
}
function Be(t) {
  var e = function(r) {
    return r[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var es = /^\[(?:([a-z-]+):)?(.+)\]$/i, Hl = /^\d+\/\d+$/, Kl = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ul = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ql = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xl = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ct(t) {
  return Mt(t) || Kl.has(t) || Hl.test(t) || $r(t);
}
function $r(t) {
  return Vt(t, "length", ea);
}
function Yl(t) {
  return Vt(t, "size", ts);
}
function Zl(t) {
  return Vt(t, "position", ts);
}
function Jl(t) {
  return Vt(t, "url", ta);
}
function On(t) {
  return Vt(t, "number", Mt);
}
function Mt(t) {
  return !Number.isNaN(Number(t));
}
function Ql(t) {
  return t.endsWith("%") && Mt(t.slice(0, -1));
}
function un(t) {
  return bo(t) || Vt(t, "number", bo);
}
function ve(t) {
  return es.test(t);
}
function cn() {
  return !0;
}
function At(t) {
  return Ul.test(t);
}
function xl(t) {
  return Vt(t, "", na);
}
function Vt(t, e, n) {
  var r = es.exec(t);
  return r ? r[1] ? r[1] === e : n(r[2]) : !1;
}
function ea(t) {
  return ql.test(t);
}
function ts() {
  return !1;
}
function ta(t) {
  return t.startsWith("url(");
}
function bo(t) {
  return Number.isInteger(Number(t));
}
function na(t) {
  return Xl.test(t);
}
function Fr() {
  var t = Be("colors"), e = Be("spacing"), n = Be("blur"), r = Be("brightness"), o = Be("borderColor"), i = Be("borderRadius"), s = Be("borderSpacing"), a = Be("borderWidth"), l = Be("contrast"), u = Be("grayscale"), c = Be("hueRotate"), f = Be("invert"), m = Be("gap"), d = Be("gradientColorStops"), h = Be("gradientColorStopPositions"), b = Be("inset"), p = Be("margin"), k = Be("opacity"), y = Be("padding"), I = Be("saturate"), T = Be("scale"), q = Be("sepia"), M = Be("skew"), G = Be("space"), de = Be("translate"), J = function() {
    return ["auto", "contain", "none"];
  }, K = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, w = function() {
    return ["auto", ve, e];
  }, v = function() {
    return [ve, e];
  }, E = function() {
    return ["", ct];
  }, P = function() {
    return ["auto", Mt, ve];
  }, A = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, $ = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, W = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Q = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, le = function() {
    return ["", "0", ve];
  }, Re = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Te = function() {
    return [Mt, On];
  }, Fe = function() {
    return [Mt, ve];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [cn],
      spacing: [ct],
      blur: ["none", "", At, ve],
      brightness: Te(),
      borderColor: [t],
      borderRadius: ["none", "", "full", At, ve],
      borderSpacing: v(),
      borderWidth: E(),
      contrast: Te(),
      grayscale: le(),
      hueRotate: Fe(),
      invert: le(),
      gap: v(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Ql, $r],
      inset: w(),
      margin: w(),
      opacity: Te(),
      padding: v(),
      saturate: Te(),
      scale: Te(),
      sepia: le(),
      skew: Fe(),
      space: v(),
      translate: v()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ve]
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
        columns: [At]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Re()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Re()
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
        object: [].concat(A(), [ve])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: K()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": K()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": K()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: J()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": J()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": J()
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
        inset: [b]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [b]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [b]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [b]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [b]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [b]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [b]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [b]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [b]
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
        z: ["auto", un]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: w()
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
        flex: ["1", "auto", "initial", "none", ve]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: le()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: le()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", un]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [cn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", un]
        }, ve]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": P()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": P()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [cn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [un]
        }, ve]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": P()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": P()
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
        "auto-cols": ["auto", "min", "max", "fr", ve]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ve]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(Q())
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
        content: ["normal"].concat(Q(), ["baseline"])
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
        "place-content": [].concat(Q(), ["baseline"])
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
        "space-x": [G]
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
        "space-y": [G]
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
        w: ["auto", "min", "max", "fit", ve, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", ve, ct]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [At]
        }, At, ve]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ve, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", ve, ct]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ve, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", At, $r]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", On]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [cn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ve]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Mt, On]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ve, ct]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ve]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ve]
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
        text: [t]
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
        decoration: [].concat($(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ct]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ve, ct]
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
        indent: v()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ve]
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
        content: ["none", ve]
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
        bg: [].concat(A(), [Zl])
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
        bg: ["auto", "cover", "contain", Yl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Jl]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [h]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [d]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [d]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [d]
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
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
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
        border: [].concat($(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
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
        "divide-y": [a]
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
        divide: $()
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
        outline: [""].concat($())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ve, ct]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ct]
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
        ring: E()
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
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ct]
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
        shadow: ["", "inner", "none", At, xl]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [cn]
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
        "mix-blend": W()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": W()
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
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", At, ve]
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
        invert: [f]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [I]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [q]
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
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
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
        "backdrop-invert": [f]
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
        "backdrop-saturate": [I]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [q]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ve]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Fe()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ve]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Fe()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ve]
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
        scale: [T]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [T]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [T]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [un, ve]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [de]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [de]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [M]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [M]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ve]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ve]
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
        "scroll-m": v()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": v()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": v()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": v()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": v()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": v()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": v()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": v()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": v()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": v()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": v()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": v()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": v()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": v()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": v()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": v()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": v()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": v()
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
        "will-change": ["auto", "scroll", "contents", "transform", ve]
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
        stroke: [ct, On]
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
function ra(t, e) {
  for (var n in e)
    ns(t, n, e[n]);
  return t;
}
var oa = Object.prototype.hasOwnProperty, ia = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function ns(t, e, n) {
  if (!oa.call(t, e) || ia.has(typeof n) || n === null) {
    t[e] = n;
    return;
  }
  if (Array.isArray(n) && Array.isArray(t[e])) {
    t[e] = t[e].concat(n);
    return;
  }
  if (typeof n == "object" && typeof t[e] == "object") {
    if (t[e] === null) {
      t[e] = n;
      return;
    }
    for (var r in n)
      ns(t[e], r, n[r]);
  }
}
function sa(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return typeof t == "function" ? Pr.apply(void 0, [Fr, t].concat(n)) : Pr.apply(void 0, [function() {
    return ra(Fr(), t);
  }].concat(n));
}
var rs = /* @__PURE__ */ Pr(Fr);
function la(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function re(...t) {
  return rs(Nl(t));
}
const os = (t, e = { y: -8, x: 0, start: 0.95, duration: 150 }) => {
  const n = getComputedStyle(t), r = n.transform === "none" ? "" : n.transform, o = (s, a, l) => {
    const [u, c] = a, [f, m] = l;
    return (s - u) / (c - u) * (m - f) + f;
  }, i = (s) => Object.keys(s).reduce((a, l) => s[l] === void 0 ? a : a + `${l}:${s[l]};`, "");
  return {
    duration: e.duration ?? 200,
    delay: 0,
    css: (s) => {
      const a = o(s, [0, 1], [e.y ?? 5, 0]), l = o(s, [0, 1], [e.x ?? 0, 0]), u = o(s, [0, 1], [e.start ?? 0.95, 1]);
      return i({
        transform: `${r} translate3d(${l}px, ${a}px, 0) scale(${u})`,
        opacity: s
      });
    },
    easing: la
  };
};
function aa(t) {
  let e, n, r, o;
  const i = (
    /*#slots*/
    t[3].default
  ), s = x(
    i,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let a = [
    {
      class: r = re(
        "uikit-w-full uikit-caption-bottom uikit-text-sm",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], l = {};
  for (let u = 0; u < a.length; u += 1)
    l = C(l, a[u]);
  return {
    c() {
      e = me("div"), n = me("table"), s && s.c(), U(n, l), et(e, "class", "uikit-w-full uikit-overflow-auto");
    },
    m(u, c) {
      R(u, e, c), Ye(e, n), s && s.m(n, null), o = !0;
    },
    p(u, [c]) {
      s && s.p && (!o || c & /*$$scope*/
      4) && te(
        s,
        i,
        u,
        /*$$scope*/
        u[2],
        o ? ee(
          i,
          /*$$scope*/
          u[2],
          c,
          null
        ) : ne(
          /*$$scope*/
          u[2]
        ),
        null
      ), U(n, l = Y(a, [
        (!o || c & /*className*/
        1 && r !== (r = re(
          "uikit-w-full uikit-caption-bottom uikit-text-sm",
          /*className*/
          u[0]
        ))) && { class: r },
        c & /*$$restProps*/
        2 && /*$$restProps*/
        u[1]
      ]));
    },
    i(u) {
      o || (g(s, u), o = !0);
    },
    o(u) {
      _(s, u), o = !1;
    },
    d(u) {
      u && S(e), s && s.d(u);
    }
  };
}
function ua(t, e, n) {
  const r = ["class"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = C(C({}, e), ue(l)), n(1, o = B(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, s = l.$$scope);
  }, [a, o, s, i];
}
let ca = class extends se {
  constructor(e) {
    super(), ie(this, e, ua, aa, X, { class: 0 });
  }
};
function fa(t) {
  let e, n, r;
  const o = (
    /*#slots*/
    t[3].default
  ), i = x(
    o,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let s = [
    {
      class: n = re(
        "[&_tr:last-child]:uikit-border-0",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = C(a, s[l]);
  return {
    c() {
      e = me("tbody"), i && i.c(), U(e, a);
    },
    m(l, u) {
      R(l, e, u), i && i.m(e, null), r = !0;
    },
    p(l, [u]) {
      i && i.p && (!r || u & /*$$scope*/
      4) && te(
        i,
        o,
        l,
        /*$$scope*/
        l[2],
        r ? ee(
          o,
          /*$$scope*/
          l[2],
          u,
          null
        ) : ne(
          /*$$scope*/
          l[2]
        ),
        null
      ), U(e, a = Y(s, [
        (!r || u & /*className*/
        1 && n !== (n = re(
          "[&_tr:last-child]:uikit-border-0",
          /*className*/
          l[0]
        ))) && { class: n },
        u & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (g(i, l), r = !0);
    },
    o(l) {
      _(i, l), r = !1;
    },
    d(l) {
      l && S(e), i && i.d(l);
    }
  };
}
function da(t, e, n) {
  const r = ["class"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = C(C({}, e), ue(l)), n(1, o = B(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, s = l.$$scope);
  }, [a, o, s, i];
}
let ma = class extends se {
  constructor(e) {
    super(), ie(this, e, da, fa, X, { class: 0 });
  }
};
function ha(t) {
  let e, n, r;
  const o = (
    /*#slots*/
    t[3].default
  ), i = x(
    o,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let s = [
    {
      class: n = re(
        "uikit-p-4 uikit-align-middle [&:has([role=checkbox])]:uikit-pr-0",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = C(a, s[l]);
  return {
    c() {
      e = me("td"), i && i.c(), U(e, a);
    },
    m(l, u) {
      R(l, e, u), i && i.m(e, null), r = !0;
    },
    p(l, [u]) {
      i && i.p && (!r || u & /*$$scope*/
      4) && te(
        i,
        o,
        l,
        /*$$scope*/
        l[2],
        r ? ee(
          o,
          /*$$scope*/
          l[2],
          u,
          null
        ) : ne(
          /*$$scope*/
          l[2]
        ),
        null
      ), U(e, a = Y(s, [
        (!r || u & /*className*/
        1 && n !== (n = re(
          "uikit-p-4 uikit-align-middle [&:has([role=checkbox])]:uikit-pr-0",
          /*className*/
          l[0]
        ))) && { class: n },
        u & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (g(i, l), r = !0);
    },
    o(l) {
      _(i, l), r = !1;
    },
    d(l) {
      l && S(e), i && i.d(l);
    }
  };
}
function pa(t, e, n) {
  const r = ["class"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = C(C({}, e), ue(l)), n(1, o = B(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, s = l.$$scope);
  }, [a, o, s, i];
}
let is = class extends se {
  constructor(e) {
    super(), ie(this, e, pa, ha, X, { class: 0 });
  }
};
function ba(t) {
  let e, n, r;
  const o = (
    /*#slots*/
    t[3].default
  ), i = x(
    o,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let s = [
    {
      class: n = re(
        "uikit-h-12 uikit-px-4 uikit-text-left uikit-align-middle uikit-font-medium uikit-text-muted-foreground [&:has([role=checkbox])]:uikit-pr-0",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = C(a, s[l]);
  return {
    c() {
      e = me("th"), i && i.c(), U(e, a);
    },
    m(l, u) {
      R(l, e, u), i && i.m(e, null), r = !0;
    },
    p(l, [u]) {
      i && i.p && (!r || u & /*$$scope*/
      4) && te(
        i,
        o,
        l,
        /*$$scope*/
        l[2],
        r ? ee(
          o,
          /*$$scope*/
          l[2],
          u,
          null
        ) : ne(
          /*$$scope*/
          l[2]
        ),
        null
      ), U(e, a = Y(s, [
        (!r || u & /*className*/
        1 && n !== (n = re(
          "uikit-h-12 uikit-px-4 uikit-text-left uikit-align-middle uikit-font-medium uikit-text-muted-foreground [&:has([role=checkbox])]:uikit-pr-0",
          /*className*/
          l[0]
        ))) && { class: n },
        u & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (g(i, l), r = !0);
    },
    o(l) {
      _(i, l), r = !1;
    },
    d(l) {
      l && S(e), i && i.d(l);
    }
  };
}
function ga(t, e, n) {
  const r = ["class"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = C(C({}, e), ue(l)), n(1, o = B(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, s = l.$$scope);
  }, [a, o, s, i];
}
let ss = class extends se {
  constructor(e) {
    super(), ie(this, e, ga, ba, X, { class: 0 });
  }
};
function _a(t) {
  let e, n, r;
  const o = (
    /*#slots*/
    t[3].default
  ), i = x(
    o,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let s = [
    {
      class: n = re(
        "[&_tr]:uikit-border-b",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = C(a, s[l]);
  return {
    c() {
      e = me("thead"), i && i.c(), U(e, a);
    },
    m(l, u) {
      R(l, e, u), i && i.m(e, null), r = !0;
    },
    p(l, [u]) {
      i && i.p && (!r || u & /*$$scope*/
      4) && te(
        i,
        o,
        l,
        /*$$scope*/
        l[2],
        r ? ee(
          o,
          /*$$scope*/
          l[2],
          u,
          null
        ) : ne(
          /*$$scope*/
          l[2]
        ),
        null
      ), U(e, a = Y(s, [
        (!r || u & /*className*/
        1 && n !== (n = re(
          "[&_tr]:uikit-border-b",
          /*className*/
          l[0]
        ))) && { class: n },
        u & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (g(i, l), r = !0);
    },
    o(l) {
      _(i, l), r = !1;
    },
    d(l) {
      l && S(e), i && i.d(l);
    }
  };
}
function va(t, e, n) {
  const r = ["class"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = C(C({}, e), ue(l)), n(1, o = B(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, s = l.$$scope);
  }, [a, o, s, i];
}
let ka = class extends se {
  constructor(e) {
    super(), ie(this, e, va, _a, X, { class: 0 });
  }
};
function wa(t) {
  let e, n, r;
  const o = (
    /*#slots*/
    t[3].default
  ), i = x(
    o,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let s = [
    {
      class: n = re(
        "uikit-border-b uikit-transition-colors hover:uikit-bg-muted/50 data-[state=selected]:uikit-bg-muted",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = C(a, s[l]);
  return {
    c() {
      e = me("tr"), i && i.c(), U(e, a);
    },
    m(l, u) {
      R(l, e, u), i && i.m(e, null), r = !0;
    },
    p(l, [u]) {
      i && i.p && (!r || u & /*$$scope*/
      4) && te(
        i,
        o,
        l,
        /*$$scope*/
        l[2],
        r ? ee(
          o,
          /*$$scope*/
          l[2],
          u,
          null
        ) : ne(
          /*$$scope*/
          l[2]
        ),
        null
      ), U(e, a = Y(s, [
        (!r || u & /*className*/
        1 && n !== (n = re(
          "uikit-border-b uikit-transition-colors hover:uikit-bg-muted/50 data-[state=selected]:uikit-bg-muted",
          /*className*/
          l[0]
        ))) && { class: n },
        u & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (g(i, l), r = !0);
    },
    o(l) {
      _(i, l), r = !1;
    },
    d(l) {
      l && S(e), i && i.d(l);
    }
  };
}
function ya(t, e, n) {
  const r = ["class"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = C(C({}, e), ue(l)), n(1, o = B(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, s = l.$$scope);
  }, [a, o, s, i];
}
let ls = class extends se {
  constructor(e) {
    super(), ie(this, e, ya, wa, X, { class: 0 });
  }
};
function go(t, e, n) {
  const r = t.slice();
  return r[2] = e[n], r[4] = n, r;
}
function _o(t, e, n) {
  const r = t.slice();
  return r[5] = e[n], r;
}
function vo(t, e, n) {
  const r = t.slice();
  return r[5] = e[n], r;
}
function Ca(t) {
  let e;
  return {
    c() {
      e = Ve("#");
    },
    m(n, r) {
      R(n, e, r);
    },
    d(n) {
      n && S(e);
    }
  };
}
function Aa(t) {
  let e = (
    /*item*/
    t[5] + ""
  ), n;
  return {
    c() {
      n = Ve(e);
    },
    m(r, o) {
      R(r, n, o);
    },
    p(r, o) {
      o & /*heads*/
      1 && e !== (e = /*item*/
      r[5] + "") && Lt(n, e);
    },
    d(r) {
      r && S(n);
    }
  };
}
function ko(t) {
  let e, n;
  return e = new ss({
    props: {
      $$slots: { default: [Aa] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, o) {
      const i = {};
      o & /*$$scope, heads*/
      1025 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Ea(t) {
  let e, n, r, o;
  e = new ss({
    props: {
      class: "w-[100px]",
      $$slots: { default: [Ca] },
      $$scope: { ctx: t }
    }
  });
  let i = qe(
    /*heads*/
    t[0]
  ), s = [];
  for (let l = 0; l < i.length; l += 1)
    s[l] = ko(vo(t, i, l));
  const a = (l) => _(s[l], 1, 1, () => {
    s[l] = null;
  });
  return {
    c() {
      j(e.$$.fragment), n = We();
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      r = Ce();
    },
    m(l, u) {
      D(e, l, u), R(l, n, u);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(l, u);
      R(l, r, u), o = !0;
    },
    p(l, u) {
      const c = {};
      if (u & /*$$scope*/
      1024 && (c.$$scope = { dirty: u, ctx: l }), e.$set(c), u & /*heads*/
      1) {
        i = qe(
          /*heads*/
          l[0]
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const m = vo(l, i, f);
          s[f] ? (s[f].p(m, u), g(s[f], 1)) : (s[f] = ko(m), s[f].c(), g(s[f], 1), s[f].m(r.parentNode, r));
        }
        for (Ie(), f = i.length; f < s.length; f += 1)
          a(f);
        Ne();
      }
    },
    i(l) {
      if (!o) {
        g(e.$$.fragment, l);
        for (let u = 0; u < i.length; u += 1)
          g(s[u]);
        o = !0;
      }
    },
    o(l) {
      _(e.$$.fragment, l), s = s.filter(Boolean);
      for (let u = 0; u < s.length; u += 1)
        _(s[u]);
      o = !1;
    },
    d(l) {
      l && (S(n), S(r)), L(e, l), on(s, l);
    }
  };
}
function Ta(t) {
  let e, n;
  return e = new ls({
    props: {
      $$slots: { default: [Ea] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, o) {
      const i = {};
      o & /*$$scope, heads*/
      1025 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Sa(t) {
  let e = (
    /*i*/
    t[4] + ""
  ), n;
  return {
    c() {
      n = Ve(e);
    },
    m(r, o) {
      R(r, n, o);
    },
    p(r, o) {
      o & /*data*/
      2 && e !== (e = /*i*/
      r[4] + "") && Lt(n, e);
    },
    d(r) {
      r && S(n);
    }
  };
}
function Ra(t) {
  let e = (
    /*row*/
    t[2][
      /*item*/
      t[5]
    ] + ""
  ), n;
  return {
    c() {
      n = Ve(e);
    },
    m(r, o) {
      R(r, n, o);
    },
    p(r, o) {
      o & /*data, heads*/
      3 && e !== (e = /*row*/
      r[2][
        /*item*/
        r[5]
      ] + "") && Lt(n, e);
    },
    d(r) {
      r && S(n);
    }
  };
}
function wo(t) {
  let e, n;
  return e = new is({
    props: {
      $$slots: { default: [Ra] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, o) {
      const i = {};
      o & /*$$scope, data, heads*/
      1027 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Oa(t) {
  let e, n, r, o;
  e = new is({
    props: {
      $$slots: { default: [Sa] },
      $$scope: { ctx: t }
    }
  });
  let i = qe(
    /*heads*/
    t[0]
  ), s = [];
  for (let l = 0; l < i.length; l += 1)
    s[l] = wo(_o(t, i, l));
  const a = (l) => _(s[l], 1, 1, () => {
    s[l] = null;
  });
  return {
    c() {
      j(e.$$.fragment), n = We();
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      r = We();
    },
    m(l, u) {
      D(e, l, u), R(l, n, u);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(l, u);
      R(l, r, u), o = !0;
    },
    p(l, u) {
      const c = {};
      if (u & /*$$scope, data*/
      1026 && (c.$$scope = { dirty: u, ctx: l }), e.$set(c), u & /*data, heads*/
      3) {
        i = qe(
          /*heads*/
          l[0]
        );
        let f;
        for (f = 0; f < i.length; f += 1) {
          const m = _o(l, i, f);
          s[f] ? (s[f].p(m, u), g(s[f], 1)) : (s[f] = wo(m), s[f].c(), g(s[f], 1), s[f].m(r.parentNode, r));
        }
        for (Ie(), f = i.length; f < s.length; f += 1)
          a(f);
        Ne();
      }
    },
    i(l) {
      if (!o) {
        g(e.$$.fragment, l);
        for (let u = 0; u < i.length; u += 1)
          g(s[u]);
        o = !0;
      }
    },
    o(l) {
      _(e.$$.fragment, l), s = s.filter(Boolean);
      for (let u = 0; u < s.length; u += 1)
        _(s[u]);
      o = !1;
    },
    d(l) {
      l && (S(n), S(r)), L(e, l), on(s, l);
    }
  };
}
function yo(t, e) {
  let n, r, o;
  return r = new ls({
    props: {
      $$slots: { default: [Oa] },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ce(), j(r.$$.fragment), this.first = n;
    },
    m(i, s) {
      R(i, n, s), D(r, i, s), o = !0;
    },
    p(i, s) {
      e = i;
      const a = {};
      s & /*$$scope, heads, data*/
      1027 && (a.$$scope = { dirty: s, ctx: e }), r.$set(a);
    },
    i(i) {
      o || (g(r.$$.fragment, i), o = !0);
    },
    o(i) {
      _(r.$$.fragment, i), o = !1;
    },
    d(i) {
      i && S(n), L(r, i);
    }
  };
}
function Ia(t) {
  let e = [], n = /* @__PURE__ */ new Map(), r, o, i = qe(
    /*data*/
    t[1]
  );
  const s = (a) => (
    /*i*/
    a[4]
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = go(t, i, a), u = s(l);
    n.set(u, e[a] = yo(u, l));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      r = Ce();
    },
    m(a, l) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, l);
      R(a, r, l), o = !0;
    },
    p(a, l) {
      l & /*heads, data*/
      3 && (i = qe(
        /*data*/
        a[1]
      ), Ie(), e = sr(e, l, s, 1, a, i, n, r.parentNode, ir, yo, r, go), Ne());
    },
    i(a) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          g(e[l]);
        o = !0;
      }
    },
    o(a) {
      for (let l = 0; l < e.length; l += 1)
        _(e[l]);
      o = !1;
    },
    d(a) {
      a && S(r);
      for (let l = 0; l < e.length; l += 1)
        e[l].d(a);
    }
  };
}
function Na(t) {
  let e, n, r, o;
  return e = new ka({
    props: {
      $$slots: { default: [Ta] },
      $$scope: { ctx: t }
    }
  }), r = new ma({
    props: {
      $$slots: { default: [Ia] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = We(), j(r.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), R(i, n, s), D(r, i, s), o = !0;
    },
    p(i, s) {
      const a = {};
      s & /*$$scope, heads*/
      1025 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
      const l = {};
      s & /*$$scope, data, heads*/
      1027 && (l.$$scope = { dirty: s, ctx: i }), r.$set(l);
    },
    i(i) {
      o || (g(e.$$.fragment, i), g(r.$$.fragment, i), o = !0);
    },
    o(i) {
      _(e.$$.fragment, i), _(r.$$.fragment, i), o = !1;
    },
    d(i) {
      i && S(n), L(e, i), L(r, i);
    }
  };
}
function Pa(t) {
  let e, n;
  return e = new ca({
    props: {
      $$slots: { default: [Na] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, [o]) {
      const i = {};
      o & /*$$scope, data, heads*/
      1027 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function $a(t, e, n) {
  let { heads: r = [] } = e, { data: o = [] } = e;
  return t.$$set = (i) => {
    "heads" in i && n(0, r = i.heads), "data" in i && n(1, o = i.data);
  }, [r, o];
}
class Fa extends se {
  constructor(e) {
    super(), ie(this, e, $a, Pa, X, { heads: 0, data: 1 });
  }
}
const Xt = [];
function pt(t, e) {
  return {
    subscribe: be(t, e).subscribe
  };
}
function be(t, e = $e) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (X(t, a) && (t = a, n)) {
      const l = !Xt.length;
      for (const u of r)
        u[1](), Xt.push(u, t);
      if (l) {
        for (let u = 0; u < Xt.length; u += 2)
          Xt[u][0](Xt[u + 1]);
        Xt.length = 0;
      }
    }
  }
  function i(a) {
    o(a(t));
  }
  function s(a, l = $e) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = e(o, i) || $e), a(t), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function he(t, e, n) {
  const r = !Array.isArray(t), o = r ? [t] : t;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = e.length < 2;
  return pt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = $e;
    const m = () => {
      if (c)
        return;
      f();
      const h = e(r ? u[0] : u, s, a);
      i ? s(h) : f = wt(h) ? h : $e;
    }, d = o.map(
      (h, b) => or(
        h,
        (p) => {
          u[b] = p, c &= ~(1 << b), l && m();
        },
        () => {
          c |= 1 << b;
        }
      )
    );
    return l = !0, m(), function() {
      He(d), f(), l = !1;
    };
  });
}
function Co(t) {
  return {
    subscribe: t.subscribe.bind(t)
  };
}
const as = (t) => {
  const e = Object.entries(t), n = e.map(([r]) => r);
  return he(e.map(([, r]) => r), (r) => Object.fromEntries(r.map((o, i) => [n[i], o])));
}, Ma = (t) => t & /*$values*/
1, Da = (t) => ({}), Ao = (t) => ({ .../*$values*/
t[0] });
function La(t) {
  let e;
  const n = (
    /*#slots*/
    t[3].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[2],
    Ao
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, [i]) {
      r && r.p && (!e || i & /*$$scope, $values*/
      5) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[2],
        Ma(i) || !e ? ne(
          /*$$scope*/
          o[2]
        ) : ee(
          n,
          /*$$scope*/
          o[2],
          i,
          Da
        ),
        Ao
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function ja(t, e, n) {
  const r = [];
  let o = B(e, r), i, { $$slots: s = {}, $$scope: a } = e;
  const l = as(o);
  return De(t, l, (u) => n(0, i = u)), t.$$set = (u) => {
    e = C(C({}, e), ue(u)), n(4, o = B(e, r)), "$$scope" in u && n(2, a = u.$$scope);
  }, [i, l, a, s];
}
class yn extends se {
  constructor(e) {
    super(), ie(this, e, ja, La, X, {});
  }
}
function Eo(t, e, n) {
  const r = t.slice();
  return r[5] = e[n], r;
}
function za(t) {
  let e, n, r;
  const o = [
    /*props*/
    t[2] ?? {}
  ];
  var i = (
    /*config*/
    t[1].component
  );
  function s(a) {
    let l = {
      $$slots: { default: [Wa] },
      $$scope: { ctx: a }
    };
    for (let u = 0; u < o.length; u += 1)
      l = C(l, o[u]);
    return { props: l };
  }
  return i && (e = Wn(i, s(t)), t[4](e)), {
    c() {
      e && j(e.$$.fragment), n = Ce();
    },
    m(a, l) {
      e && D(e, a, l), R(a, n, l), r = !0;
    },
    p(a, l) {
      const u = l & /*props*/
      4 ? Y(o, [Ke(
        /*props*/
        a[2] ?? {}
      )]) : {};
      if (l & /*$$scope, config*/
      258 && (u.$$scope = { dirty: l, ctx: a }), l & /*config*/
      2 && i !== (i = /*config*/
      a[1].component)) {
        if (e) {
          Ie();
          const c = e;
          _(c.$$.fragment, 1, 0, () => {
            L(c, 1);
          }), Ne();
        }
        i ? (e = Wn(i, s(a)), a[4](e), j(e.$$.fragment), g(e.$$.fragment, 1), D(e, n.parentNode, n)) : e = null;
      } else
        i && e.$set(u);
    },
    i(a) {
      r || (e && g(e.$$.fragment, a), r = !0);
    },
    o(a) {
      e && _(e.$$.fragment, a), r = !1;
    },
    d(a) {
      a && S(n), t[4](null), e && L(e, a);
    }
  };
}
function Ba(t) {
  let e, n, r;
  const o = [
    /*props*/
    t[2] ?? {}
  ];
  var i = (
    /*config*/
    t[1].component
  );
  function s(a) {
    let l = {};
    for (let u = 0; u < o.length; u += 1)
      l = C(l, o[u]);
    return { props: l };
  }
  return i && (e = Wn(i, s()), t[3](e)), {
    c() {
      e && j(e.$$.fragment), n = Ce();
    },
    m(a, l) {
      e && D(e, a, l), R(a, n, l), r = !0;
    },
    p(a, l) {
      const u = l & /*props*/
      4 ? Y(o, [Ke(
        /*props*/
        a[2] ?? {}
      )]) : {};
      if (l & /*config*/
      2 && i !== (i = /*config*/
      a[1].component)) {
        if (e) {
          Ie();
          const c = e;
          _(c.$$.fragment, 1, 0, () => {
            L(c, 1);
          }), Ne();
        }
        i ? (e = Wn(i, s()), a[3](e), j(e.$$.fragment), g(e.$$.fragment, 1), D(e, n.parentNode, n)) : e = null;
      } else
        i && e.$set(u);
    },
    i(a) {
      r || (e && g(e.$$.fragment, a), r = !0);
    },
    o(a) {
      e && _(e.$$.fragment, a), r = !1;
    },
    d(a) {
      a && S(n), t[3](null), e && L(e, a);
    }
  };
}
function To(t) {
  let e, n;
  return e = new Ht({ props: { of: (
    /*child*/
    t[5]
  ) } }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, o) {
      const i = {};
      o & /*config*/
      2 && (i.of = /*child*/
      r[5]), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Wa(t) {
  let e, n, r = qe(
    /*config*/
    t[1].children
  ), o = [];
  for (let s = 0; s < r.length; s += 1)
    o[s] = To(Eo(t, r, s));
  const i = (s) => _(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      e = Ce();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      R(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*config*/
      2) {
        r = qe(
          /*config*/
          s[1].children
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const u = Eo(s, r, l);
          o[l] ? (o[l].p(u, a), g(o[l], 1)) : (o[l] = To(u), o[l].c(), g(o[l], 1), o[l].m(e.parentNode, e));
        }
        for (Ie(), l = r.length; l < o.length; l += 1)
          i(l);
        Ne();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          g(o[a]);
        n = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        _(o[a]);
      n = !1;
    },
    d(s) {
      s && S(e), on(o, s);
    }
  };
}
function Ga(t) {
  let e, n, r, o;
  const i = [Ba, za], s = [];
  function a(l, u) {
    return (
      /*config*/
      l[1].children.length === 0 ? 0 : 1
    );
  }
  return e = a(t), n = s[e] = i[e](t), {
    c() {
      n.c(), r = Ce();
    },
    m(l, u) {
      s[e].m(l, u), R(l, r, u), o = !0;
    },
    p(l, [u]) {
      let c = e;
      e = a(l), e === c ? s[e].p(l, u) : (Ie(), _(s[c], 1, 1, () => {
        s[c] = null;
      }), Ne(), n = s[e], n ? n.p(l, u) : (n = s[e] = i[e](l), n.c()), g(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      o || (g(n), o = !0);
    },
    o(l) {
      _(n), o = !1;
    },
    d(l) {
      l && S(r), s[e].d(l);
    }
  };
}
function Va(t, e, n) {
  let { instance: r = void 0 } = e, { config: o } = e, { props: i = void 0 } = e;
  function s(l) {
    dt[l ? "unshift" : "push"](() => {
      r = l, n(0, r);
    });
  }
  function a(l) {
    dt[l ? "unshift" : "push"](() => {
      r = l, n(0, r);
    });
  }
  return t.$$set = (l) => {
    "instance" in l && n(0, r = l.instance), "config" in l && n(1, o = l.config), "props" in l && n(2, i = l.props);
  }, [r, o, i, s, a];
}
class us extends se {
  constructor(e) {
    super(), ie(this, e, Va, Ga, X, { instance: 0, config: 1, props: 2 });
  }
}
const Xr = (t) => (t == null ? void 0 : t.subscribe) instanceof Function, Ha = pt(void 0);
function Ka(t) {
  let e, n, r;
  function o(s) {
    t[3](s);
  }
  let i = {
    config: (
      /*config*/
      t[0]
    ),
    props: (
      /*config*/
      t[0].props
    )
  };
  return (
    /*instance*/
    t[1] !== void 0 && (i.instance = /*instance*/
    t[1]), e = new us({ props: i }), dt.push(() => Gt(e, "instance", o)), {
      c() {
        j(e.$$.fragment);
      },
      m(s, a) {
        D(e, s, a), r = !0;
      },
      p(s, a) {
        const l = {};
        a & /*config*/
        1 && (l.config = /*config*/
        s[0]), a & /*config*/
        1 && (l.props = /*config*/
        s[0].props), !n && a & /*instance*/
        2 && (n = !0, l.instance = /*instance*/
        s[1], Wt(() => n = !1)), e.$set(l);
      },
      i(s) {
        r || (g(e.$$.fragment, s), r = !0);
      },
      o(s) {
        _(e.$$.fragment, s), r = !1;
      },
      d(s) {
        L(e, s);
      }
    }
  );
}
function Ua(t) {
  let e, n;
  return e = new yn({
    props: {
      props: (
        /*config*/
        t[0].props
      ),
      $$slots: {
        default: [
          qa,
          ({ props: r }) => ({ 4: r }),
          ({ props: r }) => r ? 16 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, o) {
      const i = {};
      o & /*config*/
      1 && (i.props = /*config*/
      r[0].props), o & /*$$scope, config, props, instance*/
      51 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function qa(t) {
  let e, n, r;
  function o(s) {
    t[2](s);
  }
  let i = {
    config: (
      /*config*/
      t[0]
    ),
    props: (
      /*props*/
      t[4]
    )
  };
  return (
    /*instance*/
    t[1] !== void 0 && (i.instance = /*instance*/
    t[1]), e = new us({ props: i }), dt.push(() => Gt(e, "instance", o)), {
      c() {
        j(e.$$.fragment);
      },
      m(s, a) {
        D(e, s, a), r = !0;
      },
      p(s, a) {
        const l = {};
        a & /*config*/
        1 && (l.config = /*config*/
        s[0]), a & /*props*/
        16 && (l.props = /*props*/
        s[4]), !n && a & /*instance*/
        2 && (n = !0, l.instance = /*instance*/
        s[1], Wt(() => n = !1)), e.$set(l);
      },
      i(s) {
        r || (g(e.$$.fragment, s), r = !0);
      },
      o(s) {
        _(e.$$.fragment, s), r = !1;
      },
      d(s) {
        L(e, s);
      }
    }
  );
}
function Xa(t) {
  let e, n, r, o, i;
  const s = [Ua, Ka], a = [];
  function l(u, c) {
    return c & /*config*/
    1 && (e = null), e == null && (e = !!Xr(
      /*config*/
      u[0].props
    )), e ? 0 : 1;
  }
  return n = l(t, -1), r = a[n] = s[n](t), {
    c() {
      r.c(), o = Ce();
    },
    m(u, c) {
      a[n].m(u, c), R(u, o, c), i = !0;
    },
    p(u, [c]) {
      let f = n;
      n = l(u, c), n === f ? a[n].p(u, c) : (Ie(), _(a[f], 1, 1, () => {
        a[f] = null;
      }), Ne(), r = a[n], r ? r.p(u, c) : (r = a[n] = s[n](u), r.c()), g(r, 1), r.m(o.parentNode, o));
    },
    i(u) {
      i || (g(r), i = !0);
    },
    o(u) {
      _(r), i = !1;
    },
    d(u) {
      u && S(o), a[n].d(u);
    }
  };
}
function Ya(t, e, n) {
  let { config: r } = e, o;
  Rr(function() {
    return r.eventHandlers.forEach(([l, u]) => {
      const c = o.$$.callbacks[l] ?? [];
      c.push(u), n(1, o.$$.callbacks[l] = c, o);
    }), function() {
      r.eventHandlers.forEach(([u, c]) => {
        const f = o.$$.callbacks[u], m = f.findIndex((d) => d === c);
        f.splice(m, 1);
      });
    };
  });
  function i(a) {
    o = a, n(1, o);
  }
  function s(a) {
    o = a, n(1, o);
  }
  return t.$$set = (a) => {
    "config" in a && n(0, r = a.config);
  }, [
    r,
    o,
    i,
    s
  ];
}
class Za extends se {
  constructor(e) {
    super(), ie(this, e, Ya, Xa, X, { config: 0 });
  }
}
function Ja(t) {
  let e, n;
  return e = new Za({ props: { config: (
    /*config*/
    t[0]
  ) } }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, o) {
      const i = {};
      o & /*config*/
      1 && (i.config = /*config*/
      r[0]), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Qa(t) {
  let e;
  return {
    c() {
      e = Ve(
        /*config*/
        t[0]
      );
    },
    m(n, r) {
      R(n, e, r);
    },
    p(n, r) {
      r & /*config*/
      1 && Lt(
        e,
        /*config*/
        n[0]
      );
    },
    i: $e,
    o: $e,
    d(n) {
      n && S(e);
    }
  };
}
function xa(t) {
  let e;
  return {
    c() {
      e = Ve(
        /*$readableConfig*/
        t[1]
      );
    },
    m(n, r) {
      R(n, e, r);
    },
    p(n, r) {
      r & /*$readableConfig*/
      2 && Lt(
        e,
        /*$readableConfig*/
        n[1]
      );
    },
    i: $e,
    o: $e,
    d(n) {
      n && S(e);
    }
  };
}
function eu(t) {
  let e, n, r, o, i;
  const s = [xa, Qa, Ja], a = [];
  function l(u, c) {
    return c & /*config*/
    1 && (e = null), e == null && (e = !!Xr(
      /*config*/
      u[0]
    )), e ? 0 : typeof /*config*/
    u[0] != "object" ? 1 : 2;
  }
  return n = l(t, -1), r = a[n] = s[n](t), {
    c() {
      r.c(), o = Ce();
    },
    m(u, c) {
      a[n].m(u, c), R(u, o, c), i = !0;
    },
    p(u, [c]) {
      let f = n;
      n = l(u, c), n === f ? a[n].p(u, c) : (Ie(), _(a[f], 1, 1, () => {
        a[f] = null;
      }), Ne(), r = a[n], r ? r.p(u, c) : (r = a[n] = s[n](u), r.c()), g(r, 1), r.m(o.parentNode, o));
    },
    i(u) {
      i || (g(r), i = !0);
    },
    o(u) {
      _(r), i = !1;
    },
    d(u) {
      u && S(o), a[n].d(u);
    }
  };
}
function tu(t, e, n) {
  let r, { of: o } = e;
  const i = Xr(o) ? o : Ha;
  return De(t, i, (s) => n(1, r = s)), t.$$set = (s) => {
    "of" in s && n(0, o = s.of);
  }, [o, r, i];
}
class Ht extends se {
  constructor(e) {
    super(), ie(this, e, tu, eu, X, { of: 0 });
  }
}
class nu {
  constructor(e, n) {
    H(this, "component");
    H(this, "props");
    H(this, "eventHandlers", []);
    H(this, "children", []);
    this.component = e, this.props = n;
  }
  on(e, n) {
    return this.eventHandlers.push([e, n]), this;
  }
  slot(...e) {
    return this.children = e, this;
  }
}
function kr(t, e) {
  return new nu(t, e);
}
class cs {
  constructor({ header: e, footer: n, height: r, plugins: o }) {
    H(this, "header");
    H(this, "footer");
    H(this, "height");
    H(this, "plugins");
    this.header = e, this.footer = n, this.height = r, this.plugins = o;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isFlat() {
    return "__flat" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isDisplay() {
    return "__display" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isGroup() {
    return "__group" in this;
  }
}
class fs extends cs {
  constructor({ header: n, footer: r, plugins: o, id: i }) {
    super({ header: n, footer: r, plugins: o, height: 1 });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    H(this, "__flat", !0);
    H(this, "id");
    this.id = i ?? String(n);
  }
}
class ru extends fs {
  constructor({ header: n, footer: r, plugins: o, cell: i, accessor: s, id: a }) {
    super({ header: n, footer: r, plugins: o, id: "Initialization not complete" });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    H(this, "__data", !0);
    H(this, "cell");
    H(this, "accessorKey");
    H(this, "accessorFn");
    if (this.cell = i, s instanceof Function ? this.accessorFn = s : this.accessorKey = s, a === void 0 && this.accessorKey === void 0 && n === void 0)
      throw new Error("A column id, string accessor, or header is required");
    const l = typeof this.accessorKey == "string" ? this.accessorKey : null;
    this.id = a ?? l ?? String(n);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getValue(n) {
    if (this.accessorFn !== void 0)
      return this.accessorFn(n);
    if (this.accessorKey !== void 0)
      return n[this.accessorKey];
  }
}
class ou extends fs {
  constructor({ header: n, footer: r, plugins: o, id: i, cell: s, data: a }) {
    super({ header: n, footer: r, plugins: o, id: i });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    H(this, "__display", !0);
    H(this, "cell");
    H(this, "data");
    this.cell = s, this.data = a;
  }
}
class iu extends cs {
  constructor({ header: n, footer: r, columns: o, plugins: i }) {
    const s = Math.max(...o.map((a) => a.height)) + 1;
    super({ header: n, footer: r, height: s, plugins: i });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    H(this, "__group", !0);
    H(this, "columns");
    H(this, "ids");
    this.columns = o, this.ids = ds(o);
  }
}
const ds = (t) => t.flatMap((e) => e.isFlat() ? [e.id] : e.isGroup() ? e.ids : []), ms = (t) => t.flatMap((e) => e.isFlat() ? [e] : e.isGroup() ? ms(e.columns) : []), su = (t) => {
  const e = /* @__PURE__ */ new Map();
  return t.forEach((n) => {
    e.set(n, (e.get(n) ?? 0) + 1);
  }), e;
}, lu = (t) => Array.from(su(t).entries()).filter(([, e]) => e !== 1).map(([e]) => e), au = (t) => Object.entries(t).map(([e, n]) => `${e}:${n}`).join(";"), uu = (t, e) => t.style === void 0 && e.style === void 0 ? { ...t, ...e } : {
  ...t,
  ...e,
  style: {
    ...typeof t.style == "object" ? t.style : {},
    ...typeof e.style == "object" ? e.style : {}
  }
}, Dn = (t) => t.style === void 0 || typeof t.style != "object" ? t : {
  ...t,
  style: au(t.style)
};
class lr {
  constructor({ id: e }) {
    H(this, "id");
    H(this, "attrsForName", {});
    H(this, "propsForName", {});
    H(this, "state");
    this.id = e;
  }
  attrs() {
    return he(Object.values(this.attrsForName), (e) => {
      let n = {};
      return e.forEach((r) => {
        n = uu(n, r);
      }), Dn(n);
    });
  }
  props() {
    return as(this.propsForName);
  }
  injectState(e) {
    this.state = e;
  }
  applyHook(e, n) {
    n.props !== void 0 && (this.propsForName[e] = n.props), n.attrs !== void 0 && (this.attrsForName[e] = n.attrs);
  }
}
class hs extends lr {
  constructor({ id: n, row: r }) {
    super({ id: n });
    H(this, "row");
    this.row = r;
  }
  attrs() {
    return he(super.attrs(), (n) => ({
      ...n,
      role: "cell"
    }));
  }
  rowColId() {
    return `${this.row.id}:${this.column.id}`;
  }
  dataRowColId() {
    if (this.row.isData())
      return `${this.row.dataId}:${this.column.id}`;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isDisplay() {
    return "__display" in this;
  }
}
class Yr extends hs {
  constructor({ row: n, column: r, label: o, value: i }) {
    super({ id: r.id, row: n });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    H(this, "__data", !0);
    H(this, "column");
    H(this, "label");
    H(this, "value");
    this.column = r, this.label = o, this.value = i;
  }
  render() {
    if (this.label === void 0)
      return `${this.value}`;
    if (this.state === void 0)
      throw new Error("Missing `state` reference");
    return this.label(this, this.state);
  }
  clone() {
    return new Yr({
      row: this.row,
      column: this.column,
      label: this.label,
      value: this.value
    });
  }
}
class Zr extends hs {
  constructor({ row: n, column: r, label: o }) {
    super({ id: r.id, row: n });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    H(this, "__display", !0);
    H(this, "column");
    H(this, "label");
    this.column = r, this.label = o;
  }
  render() {
    if (this.state === void 0)
      throw new Error("Missing `state` reference");
    return this.label(this, this.state);
  }
  clone() {
    return new Zr({
      row: this.row,
      column: this.column,
      label: this.label
    });
  }
}
const So = (t) => t !== null, Tt = (t) => t !== void 0;
class cu extends lr {
  constructor({ id: n, cells: r, cellForId: o, depth: i = 0, parentRow: s }) {
    super({ id: n });
    H(this, "cells");
    /**
     * Get the cell with a given column id.
     *
     * **This includes hidden cells.**
     */
    H(this, "cellForId");
    H(this, "depth");
    H(this, "parentRow");
    H(this, "subRows");
    this.cells = r, this.cellForId = o, this.depth = i, this.parentRow = s;
  }
  attrs() {
    return he(super.attrs(), (n) => ({
      ...n,
      role: "row"
    }));
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isDisplay() {
    return "__display" in this;
  }
}
class Jr extends cu {
  constructor({ id: n, dataId: r, original: o, cells: i, cellForId: s, depth: a = 0, parentRow: l }) {
    super({ id: n, cells: i, cellForId: s, depth: a, parentRow: l });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    H(this, "__data", !0);
    H(this, "dataId");
    H(this, "original");
    this.dataId = r, this.original = o;
  }
  clone({ includeCells: n = !1, includeSubRows: r = !1 } = {}) {
    var i;
    const o = new Jr({
      id: this.id,
      dataId: this.dataId,
      cellForId: this.cellForId,
      cells: this.cells,
      original: this.original,
      depth: this.depth
    });
    if (n) {
      const s = Object.fromEntries(Object.entries(o.cellForId).map(([l, u]) => {
        const c = u.clone();
        return c.row = o, [l, c];
      })), a = o.cells.map(({ id: l }) => s[l]);
      o.cellForId = s, o.cells = a;
    }
    if (r) {
      const s = (i = this.subRows) == null ? void 0 : i.map((a) => a.clone({ includeCells: n, includeSubRows: r }));
      o.subRows = s;
    } else
      o.subRows = this.subRows;
    return o;
  }
}
const fu = (t, e, { rowDataId: n } = {}) => {
  const r = t.map((o, i) => {
    const s = i.toString();
    return new Jr({
      id: s,
      dataId: n !== void 0 ? n(o, i) : s,
      original: o,
      cells: [],
      cellForId: {}
    });
  });
  return t.forEach((o, i) => {
    const s = e.map((a) => {
      if (a.isData()) {
        const l = a, u = l.getValue(o);
        return new Yr({
          row: r[i],
          column: l,
          label: a.cell,
          value: u
        });
      }
      if (a.isDisplay()) {
        const l = a;
        return new Zr({
          row: r[i],
          column: l,
          label: a.cell
        });
      }
      throw new Error("Unrecognized `FlatColumn` implementation");
    });
    r[i].cells = s, e.forEach((a, l) => {
      r[i].cellForId[a.id] = s[l];
    });
  }), r;
}, du = (t, e) => {
  const n = t.map((r) => {
    const o = r.clone();
    return o.cells = [], o.cellForId = {}, o;
  });
  return t.length === 0 || e.length === 0 ? t : (t.forEach((r, o) => {
    const i = r.cells.map((a) => {
      const l = a.clone();
      return l.row = n[o], l;
    }), s = e.map((a) => i.find((l) => l.id === a)).filter(Tt);
    n[o].cells = s, i.forEach((a) => {
      n[o].cellForId[a.id] = a;
    });
  }), n);
}, ps = " ";
class bs extends lr {
  constructor({ id: n, label: r, colspan: o, colstart: i }) {
    super({ id: n });
    H(this, "label");
    H(this, "colspan");
    H(this, "colstart");
    this.label = r, this.colspan = o, this.colstart = i;
  }
  render() {
    if (this.label instanceof Function) {
      if (this.state === void 0)
        throw new Error("Missing `state` reference");
      return this.label(this, this.state);
    }
    return this.label;
  }
  attrs() {
    return he(super.attrs(), (n) => ({
      ...n,
      role: "columnheader",
      colspan: this.colspan
    }));
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isFlat() {
    return "__flat" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isData() {
    return "__data" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isFlatDisplay() {
    return "__flat" in this && "__display" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isGroup() {
    return "__group" in this;
  }
  // TODO Workaround for https://github.com/vitejs/vite/issues/9528
  isGroupDisplay() {
    return "__group" in this && "__display" in this;
  }
}
class ar extends bs {
  constructor({ id: n, label: r, colstart: o }) {
    super({ id: n, label: r, colspan: 1, colstart: o });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    H(this, "__flat", !0);
  }
  clone() {
    return new ar({
      id: this.id,
      label: this.label,
      colstart: this.colstart
    });
  }
}
class Qr extends ar {
  constructor({ id: n, label: r, accessorKey: o, accessorFn: i, colstart: s }) {
    super({ id: n, label: r, colstart: s });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    H(this, "__data", !0);
    H(this, "accessorKey");
    H(this, "accessorFn");
    this.accessorKey = o, this.accessorFn = i;
  }
  clone() {
    return new Qr({
      id: this.id,
      label: this.label,
      accessorFn: this.accessorFn,
      accessorKey: this.accessorKey,
      colstart: this.colstart
    });
  }
}
class ur extends ar {
  constructor({ id: n, label: r = ps, colstart: o }) {
    super({ id: n, label: r, colstart: o });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    H(this, "__display", !0);
  }
  clone() {
    return new ur({
      id: this.id,
      label: this.label,
      colstart: this.colstart
    });
  }
}
class cr extends bs {
  constructor({ label: n, ids: r, allIds: o, colspan: i, colstart: s }) {
    super({ id: `[${r.join(",")}]`, label: n, colspan: i, colstart: s });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    H(this, "__group", !0);
    H(this, "ids");
    H(this, "allId");
    H(this, "allIds");
    this.ids = r, this.allId = `[${o.join(",")}]`, this.allIds = o;
  }
  setIds(n) {
    this.ids = n, this.id = `[${this.ids.join(",")}]`;
  }
  pushId(n) {
    this.ids = [...this.ids, n], this.id = `[${this.ids.join(",")}]`;
  }
  clone() {
    return new cr({
      label: this.label,
      ids: this.ids,
      allIds: this.allIds,
      colspan: this.colspan,
      colstart: this.colstart
    });
  }
}
class xr extends cr {
  constructor({ label: n = ps, ids: r, allIds: o, colspan: i = 1, colstart: s }) {
    super({ label: n, ids: r, allIds: o, colspan: i, colstart: s });
    // TODO Workaround for https://github.com/vitejs/vite/issues/9528
    H(this, "__display", !0);
  }
  clone() {
    return new xr({
      label: this.label,
      ids: this.ids,
      allIds: this.allIds,
      colspan: this.colspan,
      colstart: this.colstart
    });
  }
}
const mu = (t) => t.reduce((e, n) => e + n, 0), gs = (t, e) => {
  const n = [];
  for (let r = 0; r < e; r++)
    n.push(Array(t).fill(null));
  return n;
}, Ro = (t) => {
  const e = t.length;
  if (e === 0)
    return t;
  const n = t[0].length, r = gs(e, n);
  for (let o = 0; o < n; o++)
    for (let i = 0; i < e; i++)
      r[o][i] = t[i][o];
  return r;
};
class eo extends lr {
  constructor({ id: n, cells: r }) {
    super({ id: n });
    H(this, "cells");
    this.cells = r;
  }
  attrs() {
    return he(super.attrs(), (n) => ({
      ...n,
      role: "row"
    }));
  }
  clone() {
    return new eo({
      id: this.id,
      cells: this.cells
    });
  }
}
const hu = (t, e = []) => {
  const n = pu(t);
  let r = Ro(n);
  return r = bu(r, e), gu(r), _u(Ro(r));
}, pu = (t) => {
  const e = mu(t.map((i) => i.isGroup() ? i.ids.length : 1)), n = Math.max(...t.map((i) => i.height)), r = gs(e, n);
  let o = 0;
  return t.forEach((i) => {
    const s = n - i.height;
    _s(r, i, s, o), o += i.isGroup() ? i.ids.length : 1;
  }), r.map((i, s) => i.map((a, l) => {
    var c;
    if (a !== null)
      return a;
    if (s === n - 1)
      return new ur({ id: l.toString(), colstart: l });
    const u = ((c = r[n - 1][l]) == null ? void 0 : c.id) ?? l.toString();
    return new xr({ ids: [], allIds: [u], colstart: l });
  }));
}, _s = (t, e, n, r) => {
  if (e.isData()) {
    t[t.length - 1][r] = new Qr({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      label: e.header,
      accessorFn: e.accessorFn,
      accessorKey: e.accessorKey,
      id: e.id,
      colstart: r
    });
    return;
  }
  if (e.isDisplay()) {
    t[t.length - 1][r] = new ur({
      id: e.id,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      label: e.header,
      colstart: r
    });
    return;
  }
  if (e.isGroup()) {
    for (let i = 0; i < e.ids.length; i++)
      t[n][r + i] = new cr({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: e.header,
        colspan: 1,
        allIds: e.ids,
        ids: [],
        colstart: r
      });
    let o = 0;
    e.columns.forEach((i) => {
      _s(t, i, n + 1, r + o), o += i.isGroup() ? i.ids.length : 1;
    });
    return;
  }
}, bu = (t, e) => {
  if (e.length === 0)
    return t;
  const n = [];
  return e.forEach((r, o) => {
    const i = t.find((s) => {
      const a = s[s.length - 1];
      if (!a.isFlat())
        throw new Error("The last element of each column must be a `FlatHeaderCell`");
      return a.id === r;
    });
    i !== void 0 && n.push(i.map((s) => {
      const a = s.clone();
      return a.colstart = o, a;
    }));
  }), n;
}, gu = (t) => {
  t.forEach((e) => {
    const n = e[e.length - 1];
    if (!n.isFlat())
      throw new Error("The last element of each column must be a `FlatHeaderCell`");
    e.forEach((r) => {
      r.isGroup() && r.pushId(n.id);
    });
  });
}, _u = (t) => t.map((e, n) => new eo({ id: n.toString(), cells: vu(e) })), vu = (t) => {
  if (t.length === 0)
    return t;
  const e = [];
  let n = 0, r = 1;
  for (; n < t.length; ) {
    const o = t[n].clone();
    if (!o.isGroup()) {
      e.push(o), n++;
      continue;
    }
    r = n + 1;
    const i = [...o.ids];
    for (; r < t.length; ) {
      const s = t[r];
      if (!s.isGroup() || o.allId !== s.allId)
        break;
      i.push(...s.ids), r++;
    }
    o.setIds(i), o.colspan = r - n, e.push(o), n = r;
  }
  return e;
}, ku = (t, e, { rowDataId: n } = {}) => {
  const { data: r, plugins: o } = t, i = ms(e), s = pt(i), a = he([r, s], ([F, N]) => fu(F, N, { rowDataId: n })), l = be([]), u = be(), c = be([]), f = be([]), m = be({
    role: "table"
  }), d = be({}), h = be({
    role: "rowgroup"
  }), b = {
    data: r,
    columns: e,
    flatColumns: i,
    tableAttrs: m,
    tableHeadAttrs: d,
    tableBodyAttrs: h,
    visibleColumns: l,
    headerRows: u,
    originalRows: a,
    rows: c,
    pageRows: f
  }, p = Object.fromEntries(Object.entries(o).map(([F, N]) => {
    const fe = Object.fromEntries(i.map((Pe) => {
      var Je;
      const Ze = (Je = Pe.plugins) == null ? void 0 : Je[F];
      if (Ze !== void 0)
        return [Pe.id, Ze];
    }).filter(Tt));
    return [
      F,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      N({ pluginName: F, tableState: b, columnOptions: fe })
    ];
  })), k = Object.fromEntries(Object.entries(p).map(([F, N]) => [
    F,
    N.pluginState
  ])), y = {
    data: r,
    columns: e,
    flatColumns: i,
    tableAttrs: m,
    tableHeadAttrs: d,
    tableBodyAttrs: h,
    visibleColumns: l,
    headerRows: u,
    originalRows: a,
    rows: c,
    pageRows: f,
    pluginStates: k
  }, I = Object.values(p).map((F) => F.deriveTableAttrs).filter(Tt);
  let T = pt({
    role: "table"
  });
  I.forEach((F) => {
    T = F(T);
  });
  const q = he(T, (F) => {
    const N = Dn(F);
    return m.set(N), N;
  }), M = Object.values(p).map((F) => F.deriveTableBodyAttrs).filter(Tt);
  let G = pt({});
  M.forEach((F) => {
    G = F(G);
  });
  const de = he(G, (F) => {
    const N = Dn(F);
    return d.set(N), N;
  }), J = Object.values(p).map((F) => F.deriveTableBodyAttrs).filter(Tt);
  let K = pt({
    role: "rowgroup"
  });
  J.forEach((F) => {
    K = F(K);
  });
  const w = he(K, (F) => {
    const N = Dn(F);
    return h.set(N), N;
  }), v = Object.values(p).map((F) => F.deriveFlatColumns).filter(Tt);
  let E = s;
  v.forEach((F) => {
    E = F(E);
  });
  const P = he(E, (F) => (l.set(F), F)), A = he([a, P], ([F, N]) => du(F, N.map((fe) => fe.id))), $ = Object.values(p).map((F) => F.deriveRows).filter(Tt);
  let W = A;
  $.forEach((F) => {
    W = F(W);
  });
  const Q = he(W, (F) => (F.forEach((N) => {
    N.injectState(y), N.cells.forEach((fe) => {
      fe.injectState(y);
    });
  }), Object.entries(p).forEach(([N, fe]) => {
    F.forEach((Pe) => {
      var Ze;
      ((Ze = fe.hooks) == null ? void 0 : Ze["tbody.tr"]) !== void 0 && Pe.applyHook(N, fe.hooks["tbody.tr"](Pe)), Pe.cells.forEach((Je) => {
        var it;
        ((it = fe.hooks) == null ? void 0 : it["tbody.tr.td"]) !== void 0 && Je.applyHook(N, fe.hooks["tbody.tr.td"](Je));
      });
    });
  }), c.set(F), F)), le = Object.values(p).map((F) => F.derivePageRows).filter(Tt);
  let Re = Q;
  le.forEach((F) => {
    Re = F(Re);
  });
  const Te = he(Re, (F) => (F.forEach((N) => {
    N.injectState(y), N.cells.forEach((fe) => {
      fe.injectState(y);
    });
  }), Object.entries(p).forEach(([N, fe]) => {
    F.forEach((Pe) => {
      var Ze;
      ((Ze = fe.hooks) == null ? void 0 : Ze["tbody.tr"]) !== void 0 && Pe.applyHook(N, fe.hooks["tbody.tr"](Pe)), Pe.cells.forEach((Je) => {
        var it;
        ((it = fe.hooks) == null ? void 0 : it["tbody.tr.td"]) !== void 0 && Je.applyHook(N, fe.hooks["tbody.tr.td"](Je));
      });
    });
  }), f.set(F), F)), Fe = he(P, (F) => {
    const N = hu(e, F.map((fe) => fe.id));
    return N.forEach((fe) => {
      fe.injectState(y), fe.cells.forEach((Pe) => {
        Pe.injectState(y);
      });
    }), Object.entries(p).forEach(([fe, Pe]) => {
      N.forEach((Ze) => {
        var Je;
        ((Je = Pe.hooks) == null ? void 0 : Je["thead.tr"]) !== void 0 && Ze.applyHook(fe, Pe.hooks["thead.tr"](Ze)), Ze.cells.forEach((it) => {
          var Kt;
          ((Kt = Pe.hooks) == null ? void 0 : Kt["thead.tr.th"]) !== void 0 && it.applyHook(fe, Pe.hooks["thead.tr.th"](it));
        });
      });
    }), u.set(N), N;
  });
  return {
    tableAttrs: q,
    tableHeadAttrs: de,
    tableBodyAttrs: w,
    visibleColumns: P,
    flatColumns: i,
    headerRows: Fe,
    originalRows: a,
    rows: Q,
    pageRows: Te,
    pluginStates: k
  };
};
let wu = class {
  constructor(e, n) {
    H(this, "data");
    H(this, "plugins");
    this.data = e, this.plugins = n;
  }
  createColumns(e) {
    const n = ds(e), r = lu(n);
    if (r.length !== 0)
      throw new Error(`Duplicate column ids not allowed: "${r.join('", "')}"`);
    return e;
  }
  column(e) {
    return new ru(e);
  }
  group(e) {
    return new iu(e);
  }
  display(e) {
    return new ou(e);
  }
  createViewModel(e, n) {
    return ku(this, e, n);
  }
};
const yu = (t, e = {}) => new wu(t, e);
pt(void 0);
const vs = (t = {}) => {
  const e = (m) => Object.fromEntries(Object.entries(m).filter(([, d]) => d)), { subscribe: n, update: r, set: o } = be(e(t)), i = (m) => {
    r((d) => {
      const h = m(d);
      return e(h);
    });
  };
  return {
    subscribe: n,
    update: i,
    set: (m) => i(() => m),
    toggle: (m) => {
      r((d) => d[m] === !0 ? (delete d[m], d) : {
        ...d,
        [m]: !0
      });
    },
    add: (m) => {
      r((d) => ({
        ...d,
        [m]: !0
      }));
    },
    addAll: (m) => {
      r((d) => ({
        ...d,
        ...Object.fromEntries(m.map((h) => [h, !0]))
      }));
    },
    remove: (m) => {
      r((d) => (delete d[m], d));
    },
    removeAll: (m) => {
      r((d) => {
        for (const h of m)
          delete d[h];
        return d;
      });
    },
    clear: () => {
      o({});
    }
  };
}, Cu = (t) => t instanceof MouseEvent ? t.shiftKey : !1, Au = ({ initialHiddenColumnIds: t = [] } = {}) => () => {
  const e = be(t);
  return {
    pluginState: { hiddenColumnIds: e },
    deriveFlatColumns: (o) => he([o, e], ([i, s]) => s.length === 0 ? i : i.filter((a) => !s.includes(a.id)))
  };
}, Eu = 1, Tu = ({ items: t, initialPageSize: e, initialPageIndex: n, serverSide: r }) => {
  const o = be(e), i = (d) => {
    o.update((h) => {
      const b = d(h);
      return Math.max(b, Eu);
    });
  }, s = (d) => i(() => d), a = be(n);
  function l([d, h]) {
    const b = Math.ceil(h / d);
    return a.update((p) => b > 0 && p >= b ? b - 1 : p), b;
  }
  const u = be(0);
  let c;
  if (r)
    c = he([o, u], l);
  else {
    const d = he(t, (h) => h.length);
    c = he([o, d], l);
  }
  const f = he(a, (d) => d > 0), m = he([a, c], ([d, h]) => d < h - 1);
  return {
    pageSize: {
      subscribe: o.subscribe,
      update: i,
      set: s
    },
    pageIndex: a,
    pageCount: c,
    serverItemCount: u,
    hasPreviousPage: f,
    hasNextPage: m
  };
}, Su = ({ initialPageIndex: t = 0, initialPageSize: e = 10, serverSide: n = !1 } = {}) => () => {
  const r = be([]), o = be([]), { pageSize: i, pageIndex: s, pageCount: a, serverItemCount: l, hasPreviousPage: u, hasNextPage: c } = Tu({
    items: r,
    initialPageIndex: t,
    initialPageSize: e,
    serverSide: n
  });
  return {
    pluginState: {
      pageSize: i,
      pageIndex: s,
      pageCount: a,
      serverItemCount: l,
      hasPreviousPage: u,
      hasNextPage: c
    },
    derivePageRows: (d) => he([d, i, s], ([h, b, p]) => {
      if (r.set(h), n)
        return o.set(h), h;
      const k = p * b, y = h.slice(k, k + b);
      return o.set(y), y;
    })
  };
}, tn = (t, e, n) => t.isData() && (!n || t.subRows === void 0) ? e[t.dataId] === !0 : t.subRows === void 0 ? !1 : t.subRows.every((r) => tn(r, e, n)), Mr = (t, e, n) => t.isData() && (!n || t.subRows === void 0) ? e[t.dataId] === !0 : t.subRows === void 0 ? !1 : t.subRows.some((r) => Mr(r, e, n)), ks = (t, e, n, r) => {
  t.isData() && (n[t.dataId] = e, !r) || t.subRows !== void 0 && t.subRows.forEach((o) => {
    ks(o, e, n, r);
  });
}, Ru = (t, e, n) => {
  const { subscribe: r } = he(e, (s) => {
    if (t.isData()) {
      if (!n)
        return s[t.dataId] === !0;
      if (s[t.dataId] === !0)
        return !0;
    }
    return tn(t, s, n);
  }), o = (s) => {
    e.update((a) => {
      const l = tn(t, a, n), u = { ...a };
      return ks(t, s(l), u, n), t.parentRow !== void 0 && t.parentRow.isData() && (u[t.parentRow.dataId] = tn(t.parentRow, u, n)), u;
    });
  };
  return {
    subscribe: r,
    update: o,
    set: (s) => o(() => s)
  };
}, Ou = ({ initialSelectedDataIds: t = {}, linkDataSubRows: e = !0 } = {}) => ({ tableState: n }) => {
  const r = vs(t), o = (h) => {
    const b = Ru(h, r, e), p = he([b, r], ([y, I]) => y ? !1 : Mr(h, I, e)), k = he(r, (y) => tn(h, y, e));
    return {
      isSelected: b,
      isSomeSubRowsSelected: p,
      isAllSubRowsSelected: k
    };
  }, i = he([n.rows, r], ([h, b]) => h.every((p) => p.isData() ? b[p.dataId] === !0 : !0)), s = (h) => {
    if (h) {
      const p = we(n.rows).map((k) => k.isData() ? k.dataId : null).filter(So);
      r.addAll(p);
    } else
      r.clear();
  }, a = {
    subscribe: i.subscribe,
    update(h) {
      const b = we(i);
      s(h(b));
    },
    set: s
  }, l = he([n.rows, r], ([h, b]) => h.some((p) => p.isData() ? b[p.dataId] === !0 : !1)), u = he([n.pageRows, r], ([h, b]) => h.every((p) => p.isData() ? b[p.dataId] === !0 : !0)), c = (h) => {
    const p = we(n.pageRows).map((k) => k.isData() ? k.dataId : null).filter(So);
    h ? r.addAll(p) : r.removeAll(p);
  }, f = {
    subscribe: u.subscribe,
    update(h) {
      const b = we(u);
      c(h(b));
    },
    set: c
  }, m = he([n.pageRows, r], ([h, b]) => h.some((p) => p.isData() ? b[p.dataId] === !0 : !1));
  return {
    pluginState: {
      selectedDataIds: r,
      getRowState: o,
      allRowsSelected: a,
      someRowsSelected: l,
      allPageRowsSelected: f,
      somePageRowsSelected: m
    },
    hooks: {
      "tbody.tr": (h) => ({ props: he(r, (p) => {
        const k = Mr(h, p, e), y = tn(h, p, e);
        return {
          selected: h.isData() ? p[h.dataId] === !0 : y,
          someSubRowsSelected: k,
          allSubRowsSelected: y
        };
      }) })
    }
  };
}, Ln = (t, e) => Array.isArray(t) && Array.isArray(e) ? Iu(t, e) : typeof t == "number" && typeof e == "number" ? t - e : t < e ? -1 : t > e ? 1 : 0, Iu = (t, e) => {
  const n = Math.min(t.length, e.length);
  for (let r = 0; r < n; r++) {
    const o = Ln(t[r], e[r]);
    if (o !== 0)
      return o;
  }
  return 0;
}, Nu = ["asc", "desc", void 0], Pu = (t) => {
  const { subscribe: e, update: n, set: r } = be(t);
  return {
    subscribe: e,
    update: n,
    set: r,
    toggleId: (s, { multiSort: a = !0, toggleOrder: l = Nu } = {}) => {
      n((u) => {
        const c = u.findIndex((p) => p.id === s), f = u[c], m = f == null ? void 0 : f.order, h = (l.findIndex((p) => p === m) + 1) % l.length, b = l[h];
        return a ? c === -1 && b !== void 0 ? [...u, { id: s, order: b }] : b === void 0 ? [...u.slice(0, c), ...u.slice(c + 1)] : [
          ...u.slice(0, c),
          { id: s, order: b },
          ...u.slice(c + 1)
        ] : b === void 0 ? [] : [{ id: s, order: b }];
      });
    },
    clearId: (s) => {
      n((a) => {
        const l = a.findIndex((u) => u.id === s);
        return l === -1 ? a : [...a.slice(0, l), ...a.slice(l + 1)];
      });
    }
  };
}, ws = (t, e, n) => {
  const r = [...t];
  r.sort((o, i) => {
    var s, a, l;
    for (const u of e) {
      const c = ((s = n[u.id]) == null ? void 0 : s.invert) ?? !1, f = o.cellForId[u.id], m = i.cellForId[u.id];
      let d = 0;
      const h = (a = n[u.id]) == null ? void 0 : a.compareFn, b = (l = n[u.id]) == null ? void 0 : l.getSortValue;
      if (!f.isData())
        return 0;
      const p = f.value, k = m.value;
      if (h !== void 0)
        d = h(p, k);
      else if (b !== void 0) {
        const y = b(p), I = b(k);
        d = Ln(y, I);
      } else
        typeof p == "string" || typeof p == "number" ? d = Ln(p, k) : p instanceof Date && k instanceof Date && (d = Ln(p.getTime(), k.getTime()));
      if (d !== 0) {
        let y = 1;
        return u.order === "desc" && (y *= -1), c && (y *= -1), d * y;
      }
    }
    return 0;
  });
  for (let o = 0; o < r.length; o++) {
    const { subRows: i } = r[o];
    if (i === void 0)
      continue;
    const s = ws(i, e, n), a = r[o].clone();
    a.subRows = s, r[o] = a;
  }
  return r;
}, $u = ({ initialSortKeys: t = [], disableMultiSort: e = !1, isMultiSortEvent: n = Cu, toggleOrder: r, serverSide: o = !1 } = {}) => ({ columnOptions: i }) => {
  const s = Object.entries(i).filter(([, f]) => f.disable === !0).map(([f]) => f), a = Pu(t), l = be([]);
  return {
    pluginState: { sortKeys: a, preSortedRows: l },
    deriveRows: (f) => he([f, a], ([m, d]) => (l.set(m), o ? m : ws(m, d, i))),
    hooks: {
      "thead.tr.th": (f) => {
        const m = s.includes(f.id);
        return { props: he(a, (h) => {
          const b = h.find((y) => y.id === f.id), p = (y) => {
            f.isData() && (m || a.toggleId(f.id, {
              multiSort: e ? !1 : n(y),
              toggleOrder: r
            }));
          }, k = () => {
            f.isData() && (s.includes(f.id) || a.clearId(f.id));
          };
          return {
            order: b == null ? void 0 : b.order,
            toggle: p,
            clear: k,
            disabled: m
          };
        }) };
      },
      "tbody.tr.td": (f) => ({ props: he(a, (d) => {
        const h = d.find((b) => b.id === f.id);
        return {
          order: h == null ? void 0 : h.order
        };
      }) })
    }
  };
}, ys = (t, e, n, { tableCellMatches: r, fn: o, includeHiddenColumns: i }) => t.map((a) => {
  const { subRows: l } = a;
  if (l === void 0)
    return a;
  const u = ys(l, e, n, {
    tableCellMatches: r,
    fn: o,
    includeHiddenColumns: i
  }), c = a.clone();
  return c.subRows = u, c;
}).filter((a) => {
  var u;
  return (((u = a.subRows) == null ? void 0 : u.length) ?? 0) !== 0 ? !0 : Object.values(a.cellForId).map((c) => {
    const f = n[c.id];
    if ((f == null ? void 0 : f.exclude) === !0 || a.cells.find((b) => b.id === c.id) === void 0 && !i || !c.isData())
      return !1;
    let d = c.value;
    (f == null ? void 0 : f.getFilterValue) !== void 0 && (d = f == null ? void 0 : f.getFilterValue(d));
    const h = o({ value: String(d), filterValue: e });
    if (h) {
      const b = c.dataRowColId();
      b !== void 0 && (r[b] = h);
    }
    return h;
  }).includes(!0);
}), Fu = ({ fn: t = Mu, initialFilterValue: e = "", includeHiddenColumns: n = !1, serverSide: r = !1 } = {}) => ({ columnOptions: o }) => {
  const i = be(e), s = be([]), a = vs();
  return {
    pluginState: { filterValue: i, preFilteredRows: s },
    deriveRows: (c) => he([c, i], ([f, m]) => {
      s.set(f), a.clear();
      const d = {}, h = ys(f, m, o, {
        tableCellMatches: d,
        fn: t,
        includeHiddenColumns: n
      });
      return a.set(d), r ? f : h;
    }),
    hooks: {
      "tbody.tr.td": (c) => ({ props: he([i, a], ([m, d]) => {
        const h = c.dataRowColId();
        return {
          matches: m !== "" && h !== void 0 && (d[h] ?? !1)
        };
      }) })
    }
  };
}, Mu = ({ filterValue: t, value: e }) => t === "" ? !0 : String(e).toLowerCase().startsWith(String(t).toLowerCase());
function Du(t) {
  let e, n, r, o;
  const i = (
    /*#slots*/
    t[3].default
  ), s = x(
    i,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let a = [
    {
      class: r = re(
        "w-full caption-bottom text-sm",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], l = {};
  for (let u = 0; u < a.length; u += 1)
    l = C(l, a[u]);
  return {
    c() {
      e = me("div"), n = me("table"), s && s.c(), U(n, l), et(e, "class", "w-full overflow-auto");
    },
    m(u, c) {
      R(u, e, c), Ye(e, n), s && s.m(n, null), o = !0;
    },
    p(u, [c]) {
      s && s.p && (!o || c & /*$$scope*/
      4) && te(
        s,
        i,
        u,
        /*$$scope*/
        u[2],
        o ? ee(
          i,
          /*$$scope*/
          u[2],
          c,
          null
        ) : ne(
          /*$$scope*/
          u[2]
        ),
        null
      ), U(n, l = Y(a, [
        (!o || c & /*className*/
        1 && r !== (r = re(
          "w-full caption-bottom text-sm",
          /*className*/
          u[0]
        ))) && { class: r },
        c & /*$$restProps*/
        2 && /*$$restProps*/
        u[1]
      ]));
    },
    i(u) {
      o || (g(s, u), o = !0);
    },
    o(u) {
      _(s, u), o = !1;
    },
    d(u) {
      u && S(e), s && s.d(u);
    }
  };
}
function Lu(t, e, n) {
  const r = ["class"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = C(C({}, e), ue(l)), n(1, o = B(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, s = l.$$scope);
  }, [a, o, s, i];
}
class ju extends se {
  constructor(e) {
    super(), ie(this, e, Lu, Du, X, { class: 0 });
  }
}
function zu(t) {
  let e, n, r;
  const o = (
    /*#slots*/
    t[3].default
  ), i = x(
    o,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let s = [
    {
      class: n = re(
        "[&_tr:last-child]:border-0",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = C(a, s[l]);
  return {
    c() {
      e = me("tbody"), i && i.c(), U(e, a);
    },
    m(l, u) {
      R(l, e, u), i && i.m(e, null), r = !0;
    },
    p(l, [u]) {
      i && i.p && (!r || u & /*$$scope*/
      4) && te(
        i,
        o,
        l,
        /*$$scope*/
        l[2],
        r ? ee(
          o,
          /*$$scope*/
          l[2],
          u,
          null
        ) : ne(
          /*$$scope*/
          l[2]
        ),
        null
      ), U(e, a = Y(s, [
        (!r || u & /*className*/
        1 && n !== (n = re(
          "[&_tr:last-child]:border-0",
          /*className*/
          l[0]
        ))) && { class: n },
        u & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (g(i, l), r = !0);
    },
    o(l) {
      _(i, l), r = !1;
    },
    d(l) {
      l && S(e), i && i.d(l);
    }
  };
}
function Bu(t, e, n) {
  const r = ["class"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = C(C({}, e), ue(l)), n(1, o = B(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, s = l.$$scope);
  }, [a, o, s, i];
}
class Wu extends se {
  constructor(e) {
    super(), ie(this, e, Bu, zu, X, { class: 0 });
  }
}
function Gu(t) {
  let e, n, r;
  const o = (
    /*#slots*/
    t[3].default
  ), i = x(
    o,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let s = [
    {
      class: n = re(
        "p-4 align-middle [&:has([role=checkbox])]:pr-0",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = C(a, s[l]);
  return {
    c() {
      e = me("td"), i && i.c(), U(e, a);
    },
    m(l, u) {
      R(l, e, u), i && i.m(e, null), r = !0;
    },
    p(l, [u]) {
      i && i.p && (!r || u & /*$$scope*/
      4) && te(
        i,
        o,
        l,
        /*$$scope*/
        l[2],
        r ? ee(
          o,
          /*$$scope*/
          l[2],
          u,
          null
        ) : ne(
          /*$$scope*/
          l[2]
        ),
        null
      ), U(e, a = Y(s, [
        (!r || u & /*className*/
        1 && n !== (n = re(
          "p-4 align-middle [&:has([role=checkbox])]:pr-0",
          /*className*/
          l[0]
        ))) && { class: n },
        u & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (g(i, l), r = !0);
    },
    o(l) {
      _(i, l), r = !1;
    },
    d(l) {
      l && S(e), i && i.d(l);
    }
  };
}
function Vu(t, e, n) {
  const r = ["class"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = C(C({}, e), ue(l)), n(1, o = B(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, s = l.$$scope);
  }, [a, o, s, i];
}
class Hu extends se {
  constructor(e) {
    super(), ie(this, e, Vu, Gu, X, { class: 0 });
  }
}
function Ku(t) {
  let e, n, r;
  const o = (
    /*#slots*/
    t[3].default
  ), i = x(
    o,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let s = [
    {
      class: n = re(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = C(a, s[l]);
  return {
    c() {
      e = me("th"), i && i.c(), U(e, a);
    },
    m(l, u) {
      R(l, e, u), i && i.m(e, null), r = !0;
    },
    p(l, [u]) {
      i && i.p && (!r || u & /*$$scope*/
      4) && te(
        i,
        o,
        l,
        /*$$scope*/
        l[2],
        r ? ee(
          o,
          /*$$scope*/
          l[2],
          u,
          null
        ) : ne(
          /*$$scope*/
          l[2]
        ),
        null
      ), U(e, a = Y(s, [
        (!r || u & /*className*/
        1 && n !== (n = re(
          "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
          /*className*/
          l[0]
        ))) && { class: n },
        u & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (g(i, l), r = !0);
    },
    o(l) {
      _(i, l), r = !1;
    },
    d(l) {
      l && S(e), i && i.d(l);
    }
  };
}
function Uu(t, e, n) {
  const r = ["class"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = C(C({}, e), ue(l)), n(1, o = B(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, s = l.$$scope);
  }, [a, o, s, i];
}
class qu extends se {
  constructor(e) {
    super(), ie(this, e, Uu, Ku, X, { class: 0 });
  }
}
function Xu(t) {
  let e, n, r;
  const o = (
    /*#slots*/
    t[3].default
  ), i = x(
    o,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let s = [
    {
      class: n = re(
        "[&_tr]:border-b",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = C(a, s[l]);
  return {
    c() {
      e = me("thead"), i && i.c(), U(e, a);
    },
    m(l, u) {
      R(l, e, u), i && i.m(e, null), r = !0;
    },
    p(l, [u]) {
      i && i.p && (!r || u & /*$$scope*/
      4) && te(
        i,
        o,
        l,
        /*$$scope*/
        l[2],
        r ? ee(
          o,
          /*$$scope*/
          l[2],
          u,
          null
        ) : ne(
          /*$$scope*/
          l[2]
        ),
        null
      ), U(e, a = Y(s, [
        (!r || u & /*className*/
        1 && n !== (n = re(
          "[&_tr]:border-b",
          /*className*/
          l[0]
        ))) && { class: n },
        u & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (g(i, l), r = !0);
    },
    o(l) {
      _(i, l), r = !1;
    },
    d(l) {
      l && S(e), i && i.d(l);
    }
  };
}
function Yu(t, e, n) {
  const r = ["class"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = C(C({}, e), ue(l)), n(1, o = B(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, s = l.$$scope);
  }, [a, o, s, i];
}
class Zu extends se {
  constructor(e) {
    super(), ie(this, e, Yu, Xu, X, { class: 0 });
  }
}
function Ju(t) {
  let e, n, r;
  const o = (
    /*#slots*/
    t[3].default
  ), i = x(
    o,
    t,
    /*$$scope*/
    t[2],
    null
  );
  let s = [
    {
      class: n = re(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = C(a, s[l]);
  return {
    c() {
      e = me("tr"), i && i.c(), U(e, a);
    },
    m(l, u) {
      R(l, e, u), i && i.m(e, null), r = !0;
    },
    p(l, [u]) {
      i && i.p && (!r || u & /*$$scope*/
      4) && te(
        i,
        o,
        l,
        /*$$scope*/
        l[2],
        r ? ee(
          o,
          /*$$scope*/
          l[2],
          u,
          null
        ) : ne(
          /*$$scope*/
          l[2]
        ),
        null
      ), U(e, a = Y(s, [
        (!r || u & /*className*/
        1 && n !== (n = re(
          "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
          /*className*/
          l[0]
        ))) && { class: n },
        u & /*$$restProps*/
        2 && /*$$restProps*/
        l[1]
      ]));
    },
    i(l) {
      r || (g(i, l), r = !0);
    },
    o(l) {
      _(i, l), r = !1;
    },
    d(l) {
      l && S(e), i && i.d(l);
    }
  };
}
function Qu(t, e, n) {
  const r = ["class"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e;
  return t.$$set = (l) => {
    e = C(C({}, e), ue(l)), n(1, o = B(e, r)), "class" in l && n(0, a = l.class), "$$scope" in l && n(2, s = l.$$scope);
  }, [a, o, s, i];
}
class Cs extends se {
  constructor(e) {
    super(), ie(this, e, Qu, Ju, X, { class: 0 });
  }
}
function xu(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
function Oo(t) {
  function e(n) {
    return n(t), () => {
    };
  }
  return { subscribe: e };
}
const In = (t) => new Proxy(t, {
  get(e, n, r) {
    return Reflect.get(e, n, r);
  },
  ownKeys(e) {
    return Reflect.ownKeys(e).filter((n) => n !== "action");
  }
}), Io = (t) => typeof t == "function";
function xe(t, e) {
  const { stores: n, action: r, returned: o } = e ?? {}, i = (() => {
    if (n && o)
      return he(n, (a) => {
        const l = o(a);
        if (Io(l)) {
          const u = (...c) => In({
            ...l(...c),
            [`data-melt-${t}`]: "",
            action: r ?? at
          });
          return u.action = r ?? at, u;
        }
        return In({
          ...l,
          [`data-melt-${t}`]: "",
          action: r ?? at
        });
      });
    {
      const a = o, l = a == null ? void 0 : a();
      if (Io(l)) {
        const u = (...c) => In({
          ...l(...c),
          [`data-melt-${t}`]: "",
          action: r ?? at
        });
        return u.action = r ?? at, Oo(u);
      }
      return Oo(In({
        ...l,
        [`data-melt-${t}`]: "",
        action: r ?? at
      }));
    }
  })(), s = r ?? (() => {
  });
  return s.subscribe = i.subscribe, s;
}
function ec(t) {
  const e = (i) => i ? `${t}-${i}` : t, n = (i) => `data-melt-${t}${i ? `-${i}` : ""}`, r = (i) => `[data-melt-${t}${i ? `-${i}` : ""}]`;
  return {
    name: e,
    attribute: n,
    selector: r,
    getEl: (i) => document.querySelector(r(i))
  };
}
const Qt = typeof document < "u", As = (t) => typeof t == "function";
function Z(t) {
  return t instanceof HTMLElement;
}
function gt(t) {
  const e = t.getAttribute("aria-disabled"), n = t.getAttribute("disabled"), r = t.hasAttribute("data-disabled");
  return !!(e === "true" || n !== null || r);
}
function ft(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function at() {
}
function _t(t, e, n, r) {
  const o = Array.isArray(e) ? e : [e];
  return o.forEach((i) => t.addEventListener(i, n, r)), () => {
    o.forEach((i) => t.removeEventListener(i, n, r));
  };
}
function ke(t, e, n, r) {
  const o = Array.isArray(e) ? e : [e];
  if (typeof n == "function") {
    const i = nc((s) => n(s));
    return o.forEach((s) => t.addEventListener(s, i, r)), () => {
      o.forEach((s) => t.removeEventListener(s, i, r));
    };
  }
  return () => void 0;
}
function tc(t) {
  const e = t.currentTarget;
  if (!Z(e))
    return null;
  const n = new CustomEvent(`m-${t.type}`, {
    detail: {
      originalEvent: t
    },
    cancelable: !0
  });
  return e.dispatchEvent(n), n;
}
function nc(t) {
  return (e) => {
    const n = tc(e);
    if (!(n != null && n.defaultPrevented))
      return t(e);
  };
}
function rc(t) {
  t.setAttribute("data-highlighted", "");
}
function Yt(t) {
  t.removeAttribute("data-highlighted");
}
function oc(t, ...e) {
  const n = {};
  for (const r of Object.keys(t))
    e.includes(r) || (n[r] = t[r]);
  return n;
}
const Un = (t, e) => {
  const n = (o, i) => {
    t.update((s) => {
      const a = o(s);
      let l = a;
      return e && (l = e({ curr: s, next: a })), i == null || i(l), l;
    });
  };
  return {
    ...t,
    update: n,
    set: (o) => {
      n(() => o);
    }
  };
};
function jn(t) {
  return new Promise((e) => setTimeout(e, t));
}
function bn(t) {
  return Object.keys(t).reduce((e, n) => t[n] === void 0 ? e : e + `${n}:${t[n]};`, "");
}
let ic = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Es = (t = 21) => {
  let e = "", n = t;
  for (; n--; )
    e += ic[Math.random() * 64 | 0];
  return e;
};
function Nn() {
  return Es(10);
}
const Le = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control"
}, sc = [Le.ARROW_DOWN, Le.PAGE_UP, Le.HOME], lc = [Le.ARROW_UP, Le.PAGE_DOWN, Le.END], No = [...sc, ...lc], qn = [Le.ENTER, Le.SPACE];
function ac(t, e = 500) {
  let n = null;
  return function(...r) {
    const o = () => {
      n = null, t(...r);
    };
    n && clearTimeout(n), n = setTimeout(o, e);
  };
}
const Ts = () => typeof window < "u";
function uc() {
  const t = navigator.userAgentData;
  return (t == null ? void 0 : t.platform) ?? navigator.platform;
}
const Ss = (t) => Ts() && t.test(uc()), cc = () => Ts() && !!navigator.maxTouchPoints, fc = () => Ss(/^Mac/) && !cc(), dc = () => Ss(/mac|iphone|ipad|ipod/i), mc = () => dc() && !fc(), wr = "data-melt-scroll-lock";
function Po(t, e) {
  if (!t)
    return;
  const n = t.style.cssText;
  return Object.assign(t.style, e), () => {
    t.style.cssText = n;
  };
}
function hc(t, e, n) {
  if (!t)
    return;
  const r = t.style.getPropertyValue(e);
  return t.style.setProperty(e, n), () => {
    r ? t.style.setProperty(e, r) : t.style.removeProperty(e);
  };
}
function pc(t) {
  const e = t.getBoundingClientRect().left;
  return Math.round(e) + t.scrollLeft ? "paddingLeft" : "paddingRight";
}
function bc(t) {
  const e = t ?? document, n = e.defaultView ?? window, { documentElement: r, body: o } = e;
  if (o.hasAttribute(wr))
    return at;
  o.setAttribute(wr, "");
  const s = n.innerWidth - r.clientWidth, a = () => hc(r, "--scrollbar-width", `${s}px`), l = pc(r), u = n.getComputedStyle(o)[l], c = () => Po(o, {
    overflow: "hidden",
    [l]: `calc(${u} + ${s}px)`
  }), f = () => {
    const { scrollX: d, scrollY: h, visualViewport: b } = n, p = (b == null ? void 0 : b.offsetLeft) ?? 0, k = (b == null ? void 0 : b.offsetTop) ?? 0, y = Po(o, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(h - Math.floor(k))}px`,
      left: `${-(d - Math.floor(p))}px`,
      right: "0",
      [l]: `calc(${u} + ${s}px)`
    });
    return () => {
      y == null || y(), n.scrollTo(d, h);
    };
  }, m = [a(), mc() ? f() : c()];
  return () => {
    m.forEach((d) => d == null ? void 0 : d()), o.removeAttribute(wr);
  };
}
function $o(t) {
  const { open: e, forceVisible: n, activeTrigger: r } = t;
  return he([e, n, r], ([o, i, s]) => (o || i) && s !== null);
}
function Rs(t, e) {
  let n = [];
  const r = (a) => {
    n.push(a);
  }, o = () => {
    n.forEach((a) => a()), n = [];
  }, i = he(t, (a) => (o(), e(a, r)));
  return Hi(o), {
    ...i,
    subscribe: (...a) => {
      const l = i.subscribe(...a);
      return () => {
        l(), o();
      };
    }
  };
}
function Et(t, e) {
  const n = Rs(t, (r, o) => ({
    stores: r,
    onUnsubscribe: o
  })).subscribe(({ stores: r, onUnsubscribe: o }) => {
    const i = e(r);
    i && o(i);
  });
  return Hi(n), n;
}
function fr(t) {
  const e = {};
  return Object.keys(t).forEach((n) => {
    const r = n, o = t[r];
    e[r] = be(o);
  }), e;
}
function Xe(t) {
  if (!Qt)
    return;
  const e = document.activeElement;
  Z(e) && e !== t && (e.tabIndex = -1, t.tabIndex = 0, jn(1).then(() => t.focus()));
}
function Os() {
  return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'));
}
function gc(t) {
  const e = Os(), r = e.indexOf(t) + 1, o = e[r];
  return r < e.length && Z(o) ? o : null;
}
function _c(t) {
  const e = Os(), r = e.indexOf(t) - 1, o = e[r];
  return r >= 0 && Z(o) ? o : null;
}
const vc = {
  onMatch: Xe
};
function kc(t = {}) {
  const e = { ...vc, ...t }, n = be([]), r = ac(() => {
    n.update(() => []);
  });
  return {
    typed: n,
    resetTyped: r,
    handleTypeaheadSearch: (i, s) => {
      const a = document.activeElement;
      if (!Z(a))
        return;
      const l = we(n);
      if (!Array.isArray(l))
        return;
      l.push(i.toLowerCase()), n.update(() => l);
      const u = s.filter((p) => !(p.getAttribute("disabled") === "true" || p.getAttribute("aria-disabled") === "true" || p.hasAttribute("data-disabled"))), f = l.length > 1 && l.every((p) => p === l[0]) ? l[0] : l.join(""), m = a ? u.indexOf(a) : -1;
      let d = xu(u, Math.max(m, 0));
      f.length === 1 && (d = d.filter((p) => p !== a));
      const b = d.find((p) => p.innerText.toLowerCase().startsWith(f.toLowerCase()));
      Z(b) && b !== a && e.onMatch(b), r();
    }
  };
}
function wc(t) {
  let e = t.parentElement;
  for (; Z(e) && !e.hasAttribute("data-portal"); )
    e = e.parentElement;
  return e || "body";
}
function yc(t, e) {
  const n = wc(t);
  return e !== void 0 ? e : n === "body" ? document.body : null;
}
const Cc = {
  disabled: !1,
  required: !1,
  name: void 0,
  value: "on",
  defaultChecked: !1
};
function Ac(t) {
  const e = { ...Cc, ...t }, n = fr(oc(e, "checked", "defaultChecked")), { disabled: r, name: o, required: i, value: s } = n, a = e.checked ?? be(e.defaultChecked), l = Un(a, e == null ? void 0 : e.onCheckedChange), u = xe("checkbox", {
    stores: [l, r, i],
    returned: ([d, h, b]) => ({
      "data-disabled": h,
      "data-state": d === "indeterminate" ? "indeterminate" : d ? "checked" : "unchecked",
      type: "button",
      role: "checkbox",
      "aria-checked": d === "indeterminate" ? "mixed" : d,
      "aria-required": b
    }),
    action: (d) => ({
      destroy: ft(ke(d, "keydown", (b) => {
        b.key === Le.ENTER && b.preventDefault();
      }), ke(d, "click", () => {
        we(r) || l.update((b) => b === "indeterminate" ? !0 : !b);
      }))
    })
  }), c = xe("checkbox-input", {
    stores: [l, o, s, i, r],
    returned: ([d, h, b, p, k]) => ({
      type: "checkbox",
      "aria-hidden": !0,
      hidden: !0,
      tabindex: -1,
      name: h,
      value: b,
      checked: d === "indeterminate" ? !1 : d,
      required: p,
      disabled: k,
      style: bn({
        position: "absolute",
        opacity: 0,
        "pointer-events": "none",
        margin: 0,
        transform: "translateX(-100%)"
      })
    })
  }), f = he(l, (d) => d === "indeterminate"), m = he(l, (d) => d === !0);
  return {
    elements: {
      root: u,
      input: c
    },
    states: {
      checked: l
    },
    helpers: {
      isIndeterminate: f,
      isChecked: m
    },
    options: n
  };
}
const Ec = pt(void 0, (t) => {
  function e(r) {
    t(r), t(void 0);
  }
  return _t(document, "pointerdown", e, {
    passive: !1,
    capture: !0
  });
}), Tc = (t, e = {}) => {
  let n = { enabled: !0, ...e };
  function r() {
    return typeof n.enabled == "boolean" ? n.enabled : we(n.enabled);
  }
  const o = Ec.subscribe((i) => {
    var a;
    if (!r() || !i || i.target === t)
      return;
    const s = i.composedPath();
    if (!s.includes(t)) {
      if (n.ignore) {
        if (As(n.ignore)) {
          if (n.ignore(i))
            return;
        } else if (Array.isArray(n.ignore) && n.ignore.length > 0 && n.ignore.some((l) => l && (i.target === l || s.includes(l))))
          return;
      }
      (a = n.handler) == null || a.call(n, i);
    }
  });
  return {
    update(i) {
      n = { ...n, ...i };
    },
    destroy() {
      o();
    }
  };
}, Sc = pt(void 0, (t) => {
  function e(r) {
    r && r.key === Le.ESCAPE && t(r), t(void 0);
  }
  return _t(document, "keydown", e, {
    passive: !1,
    capture: !0
  });
}), Rc = (t, e = {}) => {
  t.dataset.escapee = "";
  let n = { enabled: !0, ...e };
  function r() {
    return typeof n.enabled == "boolean" ? n.enabled : we(n.enabled);
  }
  const o = Sc.subscribe((i) => {
    var a;
    if (!i || !r())
      return;
    const s = i.target;
    if (!(!Z(s) || s.closest("[data-escapee]") !== t)) {
      if (n.ignore) {
        if (As(n.ignore)) {
          if (n.ignore(i))
            return;
        } else if (Array.isArray(n.ignore) && n.ignore.length > 0 && n.ignore.some((l) => l && s === l))
          return;
      }
      (a = n.handler) == null || a.call(n, i);
    }
  });
  return {
    update(i) {
      n = { ...n, ...i };
    },
    destroy() {
      t.removeAttribute("data-escapee"), o();
    }
  };
}, St = Math.min, nt = Math.max, Xn = Math.round, Pn = Math.floor, Rt = (t) => ({
  x: t,
  y: t
}), Oc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ic = {
  start: "end",
  end: "start"
};
function Dr(t, e, n) {
  return nt(t, St(e, n));
}
function sn(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ot(t) {
  return t.split("-")[0];
}
function ln(t) {
  return t.split("-")[1];
}
function Is(t) {
  return t === "x" ? "y" : "x";
}
function to(t) {
  return t === "y" ? "height" : "width";
}
function Cn(t) {
  return ["top", "bottom"].includes(Ot(t)) ? "y" : "x";
}
function no(t) {
  return Is(Cn(t));
}
function Nc(t, e, n) {
  n === void 0 && (n = !1);
  const r = ln(t), o = no(t), i = to(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = Yn(s)), [s, Yn(s)];
}
function Pc(t) {
  const e = Yn(t);
  return [Lr(t), e, Lr(e)];
}
function Lr(t) {
  return t.replace(/start|end/g, (e) => Ic[e]);
}
function $c(t, e, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? o : r : e ? r : o;
    case "left":
    case "right":
      return e ? i : s;
    default:
      return [];
  }
}
function Fc(t, e, n, r) {
  const o = ln(t);
  let i = $c(Ot(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(Lr)))), i;
}
function Yn(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Oc[e]);
}
function Mc(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Ns(t) {
  return typeof t != "number" ? Mc(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Zn(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function Fo(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const i = Cn(e), s = no(e), a = to(s), l = Ot(e), u = i === "y", c = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, m = r[a] / 2 - o[a] / 2;
  let d;
  switch (l) {
    case "top":
      d = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      d = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (ln(e)) {
    case "start":
      d[s] -= m * (n && u ? -1 : 1);
      break;
    case "end":
      d[s] += m * (n && u ? -1 : 1);
      break;
  }
  return d;
}
const Dc = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let u = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: c,
    y: f
  } = Fo(u, r, l), m = r, d = {}, h = 0;
  for (let b = 0; b < a.length; b++) {
    const {
      name: p,
      fn: k
    } = a[b], {
      x: y,
      y: I,
      data: T,
      reset: q
    } = await k({
      x: c,
      y: f,
      initialPlacement: r,
      placement: m,
      strategy: o,
      middlewareData: d,
      rects: u,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    c = y ?? c, f = I ?? f, d = {
      ...d,
      [p]: {
        ...d[p],
        ...T
      }
    }, q && h <= 50 && (h++, typeof q == "object" && (q.placement && (m = q.placement), q.rects && (u = q.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : q.rects), {
      x: c,
      y: f
    } = Fo(u, m, l)), b = -1);
  }
  return {
    x: c,
    y: f,
    placement: m,
    strategy: o,
    middlewareData: d
  };
};
async function ro(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = t, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: m = !1,
    padding: d = 0
  } = sn(e, t), h = Ns(d), p = a[m ? f === "floating" ? "reference" : "floating" : f], k = Zn(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(p))) == null || n ? p : p.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), y = f === "floating" ? {
    ...s.floating,
    x: r,
    y: o
  } : s.reference, I = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), T = await (i.isElement == null ? void 0 : i.isElement(I)) ? await (i.getScale == null ? void 0 : i.getScale(I)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, q = Zn(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: I,
    strategy: l
  }) : y);
  return {
    top: (k.top - q.top + h.top) / T.y,
    bottom: (q.bottom - k.bottom + h.bottom) / T.y,
    left: (k.left - q.left + h.left) / T.x,
    right: (q.right - k.right + h.right) / T.x
  };
}
const Lc = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = e, {
      element: u,
      padding: c = 0
    } = sn(t, e) || {};
    if (u == null)
      return {};
    const f = Ns(c), m = {
      x: n,
      y: r
    }, d = no(o), h = to(d), b = await s.getDimensions(u), p = d === "y", k = p ? "top" : "left", y = p ? "bottom" : "right", I = p ? "clientHeight" : "clientWidth", T = i.reference[h] + i.reference[d] - m[d] - i.floating[h], q = m[d] - i.reference[d], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let G = M ? M[I] : 0;
    (!G || !await (s.isElement == null ? void 0 : s.isElement(M))) && (G = a.floating[I] || i.floating[h]);
    const de = T / 2 - q / 2, J = G / 2 - b[h] / 2 - 1, K = St(f[k], J), w = St(f[y], J), v = K, E = G - b[h] - w, P = G / 2 - b[h] / 2 + de, A = Dr(v, P, E), $ = !l.arrow && ln(o) != null && P !== A && i.reference[h] / 2 - (P < v ? K : w) - b[h] / 2 < 0, W = $ ? P < v ? P - v : P - E : 0;
    return {
      [d]: m[d] + W,
      data: {
        [d]: A,
        centerOffset: P - A - W,
        ...$ && {
          alignmentOffset: W
        }
      },
      reset: $
    };
  }
}), jc = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: u
      } = e, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: m,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: b = !0,
        ...p
      } = sn(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const k = Ot(o), y = Ot(a) === a, I = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), T = m || (y || !b ? [Yn(a)] : Pc(a));
      !m && h !== "none" && T.push(...Fc(a, b, h, I));
      const q = [a, ...T], M = await ro(e, p), G = [];
      let de = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && G.push(M[k]), f) {
        const v = Nc(o, s, I);
        G.push(M[v[0]], M[v[1]]);
      }
      if (de = [...de, {
        placement: o,
        overflows: G
      }], !G.every((v) => v <= 0)) {
        var J, K;
        const v = (((J = i.flip) == null ? void 0 : J.index) || 0) + 1, E = q[v];
        if (E)
          return {
            data: {
              index: v,
              overflows: de
            },
            reset: {
              placement: E
            }
          };
        let P = (K = de.filter((A) => A.overflows[0] <= 0).sort((A, $) => A.overflows[1] - $.overflows[1])[0]) == null ? void 0 : K.placement;
        if (!P)
          switch (d) {
            case "bestFit": {
              var w;
              const A = (w = de.map(($) => [$.placement, $.overflows.filter((W) => W > 0).reduce((W, Q) => W + Q, 0)]).sort(($, W) => $[1] - W[1])[0]) == null ? void 0 : w[0];
              A && (P = A);
              break;
            }
            case "initialPlacement":
              P = a;
              break;
          }
        if (o !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
};
async function zc(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Ot(n), a = ln(n), l = Cn(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, f = sn(e, t);
  let {
    mainAxis: m,
    crossAxis: d,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return a && typeof h == "number" && (d = a === "end" ? h * -1 : h), l ? {
    x: d * c,
    y: m * u
  } : {
    x: m * u,
    y: d * c
  };
}
const Bc = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = e, l = await zc(e, t);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, Wc = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: o
      } = e, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (p) => {
            let {
              x: k,
              y
            } = p;
            return {
              x: k,
              y
            };
          }
        },
        ...l
      } = sn(t, e), u = {
        x: n,
        y: r
      }, c = await ro(e, l), f = Cn(Ot(o)), m = Is(f);
      let d = u[m], h = u[f];
      if (i) {
        const p = m === "y" ? "top" : "left", k = m === "y" ? "bottom" : "right", y = d + c[p], I = d - c[k];
        d = Dr(y, d, I);
      }
      if (s) {
        const p = f === "y" ? "top" : "left", k = f === "y" ? "bottom" : "right", y = h + c[p], I = h - c[k];
        h = Dr(y, h, I);
      }
      const b = a.fn({
        ...e,
        [m]: d,
        [f]: h
      });
      return {
        ...b,
        data: {
          x: b.x - n,
          y: b.y - r
        }
      };
    }
  };
}, Gc = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: i
      } = e, {
        apply: s = () => {
        },
        ...a
      } = sn(t, e), l = await ro(e, a), u = Ot(n), c = ln(n), f = Cn(n) === "y", {
        width: m,
        height: d
      } = r.floating;
      let h, b;
      u === "top" || u === "bottom" ? (h = u, b = c === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (b = u, h = c === "end" ? "top" : "bottom");
      const p = d - l[h], k = m - l[b], y = !e.middlewareData.shift;
      let I = p, T = k;
      if (f) {
        const M = m - l.left - l.right;
        T = c || y ? St(k, M) : M;
      } else {
        const M = d - l.top - l.bottom;
        I = c || y ? St(p, M) : M;
      }
      if (y && !c) {
        const M = nt(l.left, 0), G = nt(l.right, 0), de = nt(l.top, 0), J = nt(l.bottom, 0);
        f ? T = m - 2 * (M !== 0 || G !== 0 ? M + G : nt(l.left, l.right)) : I = d - 2 * (de !== 0 || J !== 0 ? de + J : nt(l.top, l.bottom));
      }
      await s({
        ...e,
        availableWidth: T,
        availableHeight: I
      });
      const q = await o.getDimensions(i.floating);
      return m !== q.width || d !== q.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function It(t) {
  return Ps(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function rt(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function yt(t) {
  var e;
  return (e = (Ps(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Ps(t) {
  return t instanceof Node || t instanceof rt(t).Node;
}
function kt(t) {
  return t instanceof Element || t instanceof rt(t).Element;
}
function bt(t) {
  return t instanceof HTMLElement || t instanceof rt(t).HTMLElement;
}
function Mo(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof rt(t).ShadowRoot;
}
function An(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = ut(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o);
}
function Vc(t) {
  return ["table", "td", "th"].includes(It(t));
}
function oo(t) {
  const e = io(), n = ut(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function $s(t) {
  let e = rn(t);
  for (; bt(e) && !dr(e); ) {
    if (oo(e))
      return e;
    e = rn(e);
  }
  return null;
}
function io() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function dr(t) {
  return ["html", "body", "#document"].includes(It(t));
}
function ut(t) {
  return rt(t).getComputedStyle(t);
}
function mr(t) {
  return kt(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function rn(t) {
  if (It(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    Mo(t) && t.host || // Fallback.
    yt(t)
  );
  return Mo(e) ? e.host : e;
}
function Fs(t) {
  const e = rn(t);
  return dr(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : bt(e) && An(e) ? e : Fs(e);
}
function kn(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = Fs(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = rt(o);
  return i ? e.concat(s, s.visualViewport || [], An(o) ? o : [], s.frameElement && n ? kn(s.frameElement) : []) : e.concat(o, kn(o, [], n));
}
function Ms(t) {
  const e = ut(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = bt(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, a = Xn(n) !== i || Xn(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function so(t) {
  return kt(t) ? t : t.contextElement;
}
function nn(t) {
  const e = so(t);
  if (!bt(e))
    return Rt(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Ms(e);
  let s = (i ? Xn(n.width) : n.width) / r, a = (i ? Xn(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const Hc = /* @__PURE__ */ Rt(0);
function Ds(t) {
  const e = rt(t);
  return !io() || !e.visualViewport ? Hc : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Kc(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== rt(t) ? !1 : e;
}
function jt(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = so(t);
  let s = Rt(1);
  e && (r ? kt(r) && (s = nn(r)) : s = nn(t));
  const a = Kc(i, n, r) ? Ds(i) : Rt(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, f = o.height / s.y;
  if (i) {
    const m = rt(i), d = r && kt(r) ? rt(r) : r;
    let h = m.frameElement;
    for (; h && r && d !== m; ) {
      const b = nn(h), p = h.getBoundingClientRect(), k = ut(h), y = p.left + (h.clientLeft + parseFloat(k.paddingLeft)) * b.x, I = p.top + (h.clientTop + parseFloat(k.paddingTop)) * b.y;
      l *= b.x, u *= b.y, c *= b.x, f *= b.y, l += y, u += I, h = rt(h).frameElement;
    }
  }
  return Zn({
    width: c,
    height: f,
    x: l,
    y: u
  });
}
const Uc = [":popover-open", ":modal"];
function Ls(t) {
  let e = !1, n = 0, r = 0;
  function o(i) {
    try {
      e = e || t.matches(i);
    } catch {
    }
  }
  if (Uc.forEach((i) => {
    o(i);
  }), e) {
    const i = $s(t);
    if (i) {
      const s = i.getBoundingClientRect();
      n = s.x, r = s.y;
    }
  }
  return [e, n, r];
}
function qc(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i = yt(r), [s] = e ? Ls(e.floating) : [!1];
  if (r === i || s)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = Rt(1);
  const u = Rt(0), c = bt(r);
  if ((c || !c && o !== "fixed") && ((It(r) !== "body" || An(i)) && (a = mr(r)), bt(r))) {
    const f = jt(r);
    l = nn(r), u.x = f.x + r.clientLeft, u.y = f.y + r.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - a.scrollLeft * l.x + u.x,
    y: n.y * l.y - a.scrollTop * l.y + u.y
  };
}
function Xc(t) {
  return Array.from(t.getClientRects());
}
function js(t) {
  return jt(yt(t)).left + mr(t).scrollLeft;
}
function Yc(t) {
  const e = yt(t), n = mr(t), r = t.ownerDocument.body, o = nt(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = nt(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + js(t);
  const a = -n.scrollTop;
  return ut(r).direction === "rtl" && (s += nt(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function Zc(t, e) {
  const n = rt(t), r = yt(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = io();
    (!u || u && e === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Jc(t, e) {
  const n = jt(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = bt(t) ? nn(t) : Rt(1), s = t.clientWidth * i.x, a = t.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Do(t, e, n) {
  let r;
  if (e === "viewport")
    r = Zc(t, n);
  else if (e === "document")
    r = Yc(yt(t));
  else if (kt(e))
    r = Jc(e, n);
  else {
    const o = Ds(t);
    r = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return Zn(r);
}
function zs(t, e) {
  const n = rn(t);
  return n === e || !kt(n) || dr(n) ? !1 : ut(n).position === "fixed" || zs(n, e);
}
function Qc(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = kn(t, [], !1).filter((a) => kt(a) && It(a) !== "body"), o = null;
  const i = ut(t).position === "fixed";
  let s = i ? rn(t) : t;
  for (; kt(s) && !dr(s); ) {
    const a = ut(s), l = oo(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || An(s) && !l && zs(t, s)) ? r = r.filter((c) => c !== s) : o = a, s = rn(s);
  }
  return e.set(t, r), r;
}
function xc(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const s = [...n === "clippingAncestors" ? Qc(e, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const f = Do(e, c, o);
    return u.top = nt(f.top, u.top), u.right = St(f.right, u.right), u.bottom = St(f.bottom, u.bottom), u.left = nt(f.left, u.left), u;
  }, Do(e, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ef(t) {
  const {
    width: e,
    height: n
  } = Ms(t);
  return {
    width: e,
    height: n
  };
}
function tf(t, e, n, r) {
  const o = bt(e), i = yt(e), s = n === "fixed", a = jt(t, !0, s, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Rt(0);
  if (o || !o && !s)
    if ((It(e) !== "body" || An(i)) && (l = mr(e)), o) {
      const b = jt(e, !0, s, e);
      u.x = b.x + e.clientLeft, u.y = b.y + e.clientTop;
    } else
      i && (u.x = js(i));
  let c = a.left + l.scrollLeft - u.x, f = a.top + l.scrollTop - u.y;
  const [m, d, h] = Ls(r);
  return m && (c += d, f += h, o && (c += e.clientLeft, f += e.clientTop)), {
    x: c,
    y: f,
    width: a.width,
    height: a.height
  };
}
function Lo(t, e) {
  return !bt(t) || ut(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Bs(t, e) {
  const n = rt(t);
  if (!bt(t))
    return n;
  let r = Lo(t, e);
  for (; r && Vc(r) && ut(r).position === "static"; )
    r = Lo(r, e);
  return r && (It(r) === "html" || It(r) === "body" && ut(r).position === "static" && !oo(r)) ? n : r || $s(t) || n;
}
const nf = async function(t) {
  const e = this.getOffsetParent || Bs, n = this.getDimensions;
  return {
    reference: tf(t.reference, await e(t.floating), t.strategy, t.floating),
    floating: {
      x: 0,
      y: 0,
      ...await n(t.floating)
    }
  };
};
function rf(t) {
  return ut(t).direction === "rtl";
}
const of = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qc,
  getDocumentElement: yt,
  getClippingRect: xc,
  getOffsetParent: Bs,
  getElementRects: nf,
  getClientRects: Xc,
  getDimensions: ef,
  getScale: nn,
  isElement: kt,
  isRTL: rf
};
function sf(t, e) {
  let n = null, r;
  const o = yt(t);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const {
      left: u,
      top: c,
      width: f,
      height: m
    } = t.getBoundingClientRect();
    if (a || e(), !f || !m)
      return;
    const d = Pn(c), h = Pn(o.clientWidth - (u + f)), b = Pn(o.clientHeight - (c + m)), p = Pn(u), y = {
      rootMargin: -d + "px " + -h + "px " + -b + "px " + -p + "px",
      threshold: nt(0, St(1, l)) || 1
    };
    let I = !0;
    function T(q) {
      const M = q[0].intersectionRatio;
      if (M !== l) {
        if (!I)
          return s();
        M ? s(!1, M) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 100);
      }
      I = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, y);
    }
    n.observe(t);
  }
  return s(!0), i;
}
function lf(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = so(t), c = o || i ? [...u ? kn(u) : [], ...kn(e)] : [];
  c.forEach((k) => {
    o && k.addEventListener("scroll", n, {
      passive: !0
    }), i && k.addEventListener("resize", n);
  });
  const f = u && a ? sf(u, n) : null;
  let m = -1, d = null;
  s && (d = new ResizeObserver((k) => {
    let [y] = k;
    y && y.target === u && d && (d.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      var I;
      (I = d) == null || I.observe(e);
    })), n();
  }), u && !l && d.observe(u), d.observe(e));
  let h, b = l ? jt(t) : null;
  l && p();
  function p() {
    const k = jt(t);
    b && (k.x !== b.x || k.y !== b.y || k.width !== b.width || k.height !== b.height) && n(), b = k, h = requestAnimationFrame(p);
  }
  return n(), () => {
    var k;
    c.forEach((y) => {
      o && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
    }), f == null || f(), (k = d) == null || k.disconnect(), d = null, l && cancelAnimationFrame(h);
  };
}
const af = Wc, uf = jc, cf = Gc, ff = Lc, df = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: of,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return Dc(t, e, {
    ...o,
    platform: i
  });
}, mf = {
  strategy: "absolute",
  placement: "top",
  gutter: 5,
  flip: !0,
  sameWidth: !1,
  overflowPadding: 8
}, hf = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function pf(t, e, n = {}) {
  if (!e || !t)
    return {
      destroy: at
    };
  const r = { ...mf, ...n }, o = e.querySelector("[data-arrow=true]"), i = [];
  r.flip && i.push(uf({
    boundary: r.boundary,
    padding: r.overflowPadding
  }));
  const s = Z(o) ? o.offsetHeight / 2 : 0;
  if (r.gutter || r.offset) {
    const l = r.gutter ? { mainAxis: r.gutter } : r.offset;
    (l == null ? void 0 : l.mainAxis) != null && (l.mainAxis += s), i.push(Bc(l));
  }
  i.push(af({
    boundary: r.boundary,
    crossAxis: r.overlap,
    padding: r.overflowPadding
  })), o && i.push(ff({ element: o, padding: 8 })), i.push(cf({
    padding: r.overflowPadding,
    apply({ rects: l, availableHeight: u, availableWidth: c }) {
      r.sameWidth && Object.assign(e.style, {
        width: `${Math.round(l.reference.width)}px`,
        minWidth: "unset"
      }), r.fitViewport && Object.assign(e.style, {
        maxWidth: `${c}px`,
        maxHeight: `${u}px`
      });
    }
  }));
  function a() {
    if (!t || !e)
      return;
    const { placement: l, strategy: u } = r;
    df(t, e, {
      placement: l,
      middleware: i,
      strategy: u
    }).then((c) => {
      const f = Math.round(c.x), m = Math.round(c.y);
      if (Object.assign(e.style, {
        top: `${m}px`,
        left: `${f}px`
      }), Z(o) && c.middlewareData.arrow) {
        const { x: d, y: h } = c.middlewareData.arrow, b = c.placement.split("-")[0];
        Object.assign(o.style, {
          position: "absolute",
          left: d != null ? `${d}px` : "",
          top: h != null ? `${h}px` : "",
          [b]: `calc(100% - ${s}px)`,
          transform: hf[b],
          backgroundColor: "inherit",
          zIndex: "inherit"
        });
      }
      return c;
    });
  }
  return Object.assign(e.style, {
    position: r.strategy
  }), {
    destroy: lf(t, e, a)
  };
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var Ws = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], Jn = /* @__PURE__ */ Ws.join(","), Gs = typeof Element > "u", zt = Gs ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Qn = !Gs && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t == null ? void 0 : t.ownerDocument;
}, xn = function t(e, n) {
  var r;
  n === void 0 && (n = !0);
  var o = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), i = o === "" || o === "true", s = i || n && e && t(e.parentNode);
  return s;
}, bf = function(e) {
  var n, r = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
  return r === "" || r === "true";
}, Vs = function(e, n, r) {
  if (xn(e))
    return [];
  var o = Array.prototype.slice.apply(e.querySelectorAll(Jn));
  return n && zt.call(e, Jn) && o.unshift(e), o = o.filter(r), o;
}, Hs = function t(e, n, r) {
  for (var o = [], i = Array.from(e); i.length; ) {
    var s = i.shift();
    if (!xn(s, !1))
      if (s.tagName === "SLOT") {
        var a = s.assignedElements(), l = a.length ? a : s.children, u = t(l, !0, r);
        r.flatten ? o.push.apply(o, u) : o.push({
          scopeParent: s,
          candidates: u
        });
      } else {
        var c = zt.call(s, Jn);
        c && r.filter(s) && (n || !e.includes(s)) && o.push(s);
        var f = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), m = !xn(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
        if (f && m) {
          var d = t(f === !0 ? s.children : f.children, !0, r);
          r.flatten ? o.push.apply(o, d) : o.push({
            scopeParent: s,
            candidates: d
          });
        } else
          i.unshift.apply(i, s.children);
      }
  }
  return o;
}, Ks = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, Ft = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || bf(e)) && !Ks(e) ? 0 : e.tabIndex;
}, gf = function(e, n) {
  var r = Ft(e);
  return r < 0 && n && !Ks(e) ? 0 : r;
}, _f = function(e, n) {
  return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, Us = function(e) {
  return e.tagName === "INPUT";
}, vf = function(e) {
  return Us(e) && e.type === "hidden";
}, kf = function(e) {
  var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, wf = function(e, n) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === n)
      return e[r];
}, yf = function(e) {
  if (!e.name)
    return !0;
  var n = e.form || Qn(e), r = function(a) {
    return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = r(window.CSS.escape(e.name));
  else
    try {
      o = r(e.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var i = wf(o, e.form);
  return !i || i === e;
}, Cf = function(e) {
  return Us(e) && e.type === "radio";
}, Af = function(e) {
  return Cf(e) && !yf(e);
}, Ef = function(e) {
  var n, r = e && Qn(e), o = (n = r) === null || n === void 0 ? void 0 : n.host, i = !1;
  if (r && r !== e) {
    var s, a, l;
    for (i = !!((s = o) !== null && s !== void 0 && (a = s.ownerDocument) !== null && a !== void 0 && a.contains(o) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !i && o; ) {
      var u, c, f;
      r = Qn(o), o = (u = r) === null || u === void 0 ? void 0 : u.host, i = !!((c = o) !== null && c !== void 0 && (f = c.ownerDocument) !== null && f !== void 0 && f.contains(o));
    }
  }
  return i;
}, jo = function(e) {
  var n = e.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, Tf = function(e, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var i = zt.call(e, "details>summary:first-of-type"), s = i ? e.parentElement : e;
  if (zt.call(s, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var a = e; e; ) {
        var l = e.parentElement, u = Qn(e);
        if (l && !l.shadowRoot && o(l) === !0)
          return jo(e);
        e.assignedSlot ? e = e.assignedSlot : !l && u !== e.ownerDocument ? e = u.host : e = l;
      }
      e = a;
    }
    if (Ef(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return jo(e);
  return !1;
}, Sf = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var n = e.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return zt.call(n, "fieldset[disabled] *") ? !0 : !o.contains(e);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, er = function(e, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  xn(n) || vf(n) || Tf(n, e) || // For a details element with a summary, the summary element gets the focus
  kf(n) || Sf(n));
}, jr = function(e, n) {
  return !(Af(n) || Ft(n) < 0 || !er(e, n));
}, Rf = function(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Of = function t(e) {
  var n = [], r = [];
  return e.forEach(function(o, i) {
    var s = !!o.scopeParent, a = s ? o.scopeParent : o, l = gf(a, s), u = s ? t(o.candidates) : a;
    l === 0 ? s ? n.push.apply(n, u) : n.push(a) : r.push({
      documentOrder: i,
      tabIndex: l,
      item: o,
      isScope: s,
      content: u
    });
  }), r.sort(_f).reduce(function(o, i) {
    return i.isScope ? o.push.apply(o, i.content) : o.push(i.content), o;
  }, []).concat(n);
}, If = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Hs([e], n.includeContainer, {
    filter: jr.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Rf
  }) : r = Vs(e, n.includeContainer, jr.bind(null, n)), Of(r);
}, Nf = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = Hs([e], n.includeContainer, {
    filter: er.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = Vs(e, n.includeContainer, er.bind(null, n)), r;
}, Zt = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return zt.call(e, Jn) === !1 ? !1 : jr(n, e);
}, Pf = /* @__PURE__ */ Ws.concat("iframe").join(","), yr = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return zt.call(e, Pf) === !1 ? !1 : er(n, e);
};
/*!
* focus-trap 7.5.2
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function zo(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Bo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zo(Object(n), !0).forEach(function(r) {
      $f(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zo(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function $f(t, e, n) {
  return e = Mf(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Ff(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Mf(t) {
  var e = Ff(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var Wo = {
  activateTrap: function(e, n) {
    if (e.length > 0) {
      var r = e[e.length - 1];
      r !== n && r.pause();
    }
    var o = e.indexOf(n);
    o === -1 || e.splice(o, 1), e.push(n);
  },
  deactivateTrap: function(e, n) {
    var r = e.indexOf(n);
    r !== -1 && e.splice(r, 1), e.length > 0 && e[e.length - 1].unpause();
  }
}, Df = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, Lf = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, _n = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, jf = function(e) {
  return _n(e) && !e.shiftKey;
}, zf = function(e) {
  return _n(e) && e.shiftKey;
}, Go = function(e) {
  return setTimeout(e, 0);
}, Vo = function(e, n) {
  var r = -1;
  return e.every(function(o, i) {
    return n(o) ? (r = i, !1) : !0;
  }), r;
}, fn = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return typeof e == "function" ? e.apply(void 0, r) : e;
}, $n = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, Bf = [], Wf = function(e, n) {
  var r = (n == null ? void 0 : n.document) || document, o = (n == null ? void 0 : n.trapStack) || Bf, i = Bo({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: jf,
    isKeyBackward: zf
  }, n), s = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, a, l = function(w, v, E) {
    return w && w[v] !== void 0 ? w[v] : i[E || v];
  }, u = function(w, v) {
    var E = typeof (v == null ? void 0 : v.composedPath) == "function" ? v.composedPath() : void 0;
    return s.containerGroups.findIndex(function(P) {
      var A = P.container, $ = P.tabbableNodes;
      return A.contains(w) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (E == null ? void 0 : E.includes(A)) || $.find(function(W) {
        return W === w;
      });
    });
  }, c = function(w) {
    var v = i[w];
    if (typeof v == "function") {
      for (var E = arguments.length, P = new Array(E > 1 ? E - 1 : 0), A = 1; A < E; A++)
        P[A - 1] = arguments[A];
      v = v.apply(void 0, P);
    }
    if (v === !0 && (v = void 0), !v) {
      if (v === void 0 || v === !1)
        return v;
      throw new Error("`".concat(w, "` was specified but was not a node, or did not return a node"));
    }
    var $ = v;
    if (typeof v == "string" && ($ = r.querySelector(v), !$))
      throw new Error("`".concat(w, "` as selector refers to no known node"));
    return $;
  }, f = function() {
    var w = c("initialFocus");
    if (w === !1)
      return !1;
    if (w === void 0 || !yr(w, i.tabbableOptions))
      if (u(r.activeElement) >= 0)
        w = r.activeElement;
      else {
        var v = s.tabbableGroups[0], E = v && v.firstTabbableNode;
        w = E || c("fallbackFocus");
      }
    if (!w)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return w;
  }, m = function() {
    if (s.containerGroups = s.containers.map(function(w) {
      var v = If(w, i.tabbableOptions), E = Nf(w, i.tabbableOptions), P = v.length > 0 ? v[0] : void 0, A = v.length > 0 ? v[v.length - 1] : void 0, $ = E.find(function(le) {
        return Zt(le);
      }), W = E.slice().reverse().find(function(le) {
        return Zt(le);
      }), Q = !!v.find(function(le) {
        return Ft(le) > 0;
      });
      return {
        container: w,
        tabbableNodes: v,
        focusableNodes: E,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Q,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: P,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: A,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: $,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: W,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(Re) {
          var Te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Fe = v.indexOf(Re);
          return Fe < 0 ? Te ? E.slice(E.indexOf(Re) + 1).find(function(F) {
            return Zt(F);
          }) : E.slice(0, E.indexOf(Re)).reverse().find(function(F) {
            return Zt(F);
          }) : v[Fe + (Te ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(w) {
      return w.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !c("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(w) {
      return w.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, d = function K(w) {
    if (w !== !1 && w !== r.activeElement) {
      if (!w || !w.focus) {
        K(f());
        return;
      }
      w.focus({
        preventScroll: !!i.preventScroll
      }), s.mostRecentlyFocusedNode = w, Df(w) && w.select();
    }
  }, h = function(w) {
    var v = c("setReturnFocus", w);
    return v || (v === !1 ? !1 : w);
  }, b = function(w) {
    var v = w.target, E = w.event, P = w.isBackward, A = P === void 0 ? !1 : P;
    v = v || $n(E), m();
    var $ = null;
    if (s.tabbableGroups.length > 0) {
      var W = u(v, E), Q = W >= 0 ? s.containerGroups[W] : void 0;
      if (W < 0)
        A ? $ = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : $ = s.tabbableGroups[0].firstTabbableNode;
      else if (A) {
        var le = Vo(s.tabbableGroups, function(fe) {
          var Pe = fe.firstTabbableNode;
          return v === Pe;
        });
        if (le < 0 && (Q.container === v || yr(v, i.tabbableOptions) && !Zt(v, i.tabbableOptions) && !Q.nextTabbableNode(v, !1)) && (le = W), le >= 0) {
          var Re = le === 0 ? s.tabbableGroups.length - 1 : le - 1, Te = s.tabbableGroups[Re];
          $ = Ft(v) >= 0 ? Te.lastTabbableNode : Te.lastDomTabbableNode;
        } else
          _n(E) || ($ = Q.nextTabbableNode(v, !1));
      } else {
        var Fe = Vo(s.tabbableGroups, function(fe) {
          var Pe = fe.lastTabbableNode;
          return v === Pe;
        });
        if (Fe < 0 && (Q.container === v || yr(v, i.tabbableOptions) && !Zt(v, i.tabbableOptions) && !Q.nextTabbableNode(v)) && (Fe = W), Fe >= 0) {
          var F = Fe === s.tabbableGroups.length - 1 ? 0 : Fe + 1, N = s.tabbableGroups[F];
          $ = Ft(v) >= 0 ? N.firstTabbableNode : N.firstDomTabbableNode;
        } else
          _n(E) || ($ = Q.nextTabbableNode(v));
      }
    } else
      $ = c("fallbackFocus");
    return $;
  }, p = function(w) {
    var v = $n(w);
    if (!(u(v, w) >= 0)) {
      if (fn(i.clickOutsideDeactivates, w)) {
        a.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: i.returnFocusOnDeactivate
        });
        return;
      }
      fn(i.allowOutsideClick, w) || w.preventDefault();
    }
  }, k = function(w) {
    var v = $n(w), E = u(v, w) >= 0;
    if (E || v instanceof Document)
      E && (s.mostRecentlyFocusedNode = v);
    else {
      w.stopImmediatePropagation();
      var P, A = !0;
      if (s.mostRecentlyFocusedNode)
        if (Ft(s.mostRecentlyFocusedNode) > 0) {
          var $ = u(s.mostRecentlyFocusedNode), W = s.containerGroups[$].tabbableNodes;
          if (W.length > 0) {
            var Q = W.findIndex(function(le) {
              return le === s.mostRecentlyFocusedNode;
            });
            Q >= 0 && (i.isKeyForward(s.recentNavEvent) ? Q + 1 < W.length && (P = W[Q + 1], A = !1) : Q - 1 >= 0 && (P = W[Q - 1], A = !1));
          }
        } else
          s.containerGroups.some(function(le) {
            return le.tabbableNodes.some(function(Re) {
              return Ft(Re) > 0;
            });
          }) || (A = !1);
      else
        A = !1;
      A && (P = b({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: i.isKeyBackward(s.recentNavEvent)
      })), d(P || s.mostRecentlyFocusedNode || f());
    }
    s.recentNavEvent = void 0;
  }, y = function(w) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = w;
    var E = b({
      event: w,
      isBackward: v
    });
    E && (_n(w) && w.preventDefault(), d(E));
  }, I = function(w) {
    if (Lf(w) && fn(i.escapeDeactivates, w) !== !1) {
      w.preventDefault(), a.deactivate();
      return;
    }
    (i.isKeyForward(w) || i.isKeyBackward(w)) && y(w, i.isKeyBackward(w));
  }, T = function(w) {
    var v = $n(w);
    u(v, w) >= 0 || fn(i.clickOutsideDeactivates, w) || fn(i.allowOutsideClick, w) || (w.preventDefault(), w.stopImmediatePropagation());
  }, q = function() {
    if (s.active)
      return Wo.activateTrap(o, a), s.delayInitialFocusTimer = i.delayInitialFocus ? Go(function() {
        d(f());
      }) : d(f()), r.addEventListener("focusin", k, !0), r.addEventListener("mousedown", p, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", p, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", T, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", I, {
        capture: !0,
        passive: !1
      }), a;
  }, M = function() {
    if (s.active)
      return r.removeEventListener("focusin", k, !0), r.removeEventListener("mousedown", p, !0), r.removeEventListener("touchstart", p, !0), r.removeEventListener("click", T, !0), r.removeEventListener("keydown", I, !0), a;
  }, G = function(w) {
    var v = w.some(function(E) {
      var P = Array.from(E.removedNodes);
      return P.some(function(A) {
        return A === s.mostRecentlyFocusedNode;
      });
    });
    v && d(f());
  }, de = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(G) : void 0, J = function() {
    de && (de.disconnect(), s.active && !s.paused && s.containers.map(function(w) {
      de.observe(w, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return a = {
    get active() {
      return s.active;
    },
    get paused() {
      return s.paused;
    },
    activate: function(w) {
      if (s.active)
        return this;
      var v = l(w, "onActivate"), E = l(w, "onPostActivate"), P = l(w, "checkCanFocusTrap");
      P || m(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = r.activeElement, v == null || v();
      var A = function() {
        P && m(), q(), J(), E == null || E();
      };
      return P ? (P(s.containers.concat()).then(A, A), this) : (A(), this);
    },
    deactivate: function(w) {
      if (!s.active)
        return this;
      var v = Bo({
        onDeactivate: i.onDeactivate,
        onPostDeactivate: i.onPostDeactivate,
        checkCanReturnFocus: i.checkCanReturnFocus
      }, w);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, M(), s.active = !1, s.paused = !1, J(), Wo.deactivateTrap(o, a);
      var E = l(v, "onDeactivate"), P = l(v, "onPostDeactivate"), A = l(v, "checkCanReturnFocus"), $ = l(v, "returnFocus", "returnFocusOnDeactivate");
      E == null || E();
      var W = function() {
        Go(function() {
          $ && d(h(s.nodeFocusedBeforeActivation)), P == null || P();
        });
      };
      return $ && A ? (A(h(s.nodeFocusedBeforeActivation)).then(W, W), this) : (W(), this);
    },
    pause: function(w) {
      if (s.paused || !s.active)
        return this;
      var v = l(w, "onPause"), E = l(w, "onPostPause");
      return s.paused = !0, v == null || v(), M(), J(), E == null || E(), this;
    },
    unpause: function(w) {
      if (!s.paused || !s.active)
        return this;
      var v = l(w, "onUnpause"), E = l(w, "onPostUnpause");
      return s.paused = !1, v == null || v(), m(), q(), J(), E == null || E(), this;
    },
    updateContainerElements: function(w) {
      var v = [].concat(w).filter(Boolean);
      return s.containers = v.map(function(E) {
        return typeof E == "string" ? r.querySelector(E) : E;
      }), s.active && m(), J(), this;
    }
  }, a.updateContainerElements(e), a;
};
function Gf(t = {}) {
  let e;
  const { immediate: n, ...r } = t, o = be(!1), i = be(!1), s = (f) => e == null ? void 0 : e.activate(f), a = (f) => {
    e == null || e.deactivate(f);
  }, l = () => {
    e && (e.pause(), i.set(!0));
  }, u = () => {
    e && (e.unpause(), i.set(!1));
  };
  return {
    useFocusTrap: (f) => (e = Wf(f, {
      ...r,
      onActivate() {
        var m;
        o.set(!0), (m = t.onActivate) == null || m.call(t);
      },
      onDeactivate() {
        var m;
        o.set(!1), (m = t.onDeactivate) == null || m.call(t);
      }
    }), n && s(), {
      destroy() {
        a(), e = void 0;
      }
    }),
    hasFocus: Co(o),
    isPaused: Co(i),
    activate: s,
    deactivate: a,
    pause: l,
    unpause: u
  };
}
const Vf = {
  floating: {},
  focusTrap: {},
  clickOutside: {},
  escapeKeydown: {},
  portal: "body"
}, Ho = (t, e) => {
  t.dataset.escapee = "";
  const { anchorElement: n, open: r, options: o } = e;
  if (!n || !r || !o)
    return { destroy: at };
  const i = { ...Vf, ...o }, s = [];
  if (i.portal !== null) {
    const l = Hf(t, i.portal);
    l != null && l.destroy && s.push(l.destroy);
  }
  if (s.push(pf(n, t, i.floating).destroy), i.focusTrap !== null) {
    const { useFocusTrap: l } = Gf({
      immediate: !0,
      escapeDeactivates: !1,
      allowOutsideClick: !0,
      returnFocusOnDeactivate: !1,
      fallbackFocus: t,
      ...i.focusTrap
    }), u = l(t);
    u != null && u.destroy && s.push(u.destroy);
  }
  i.clickOutside !== null && s.push(Tc(t, {
    enabled: r,
    handler: (l) => {
      l.defaultPrevented || Z(n) && !n.contains(l.target) && (r.set(!1), n.focus());
    },
    ...i.clickOutside
  }).destroy), i.escapeKeydown !== null && s.push(Rc(t, {
    enabled: r,
    handler: (l) => {
      l.defaultPrevented || r.set(!1);
    },
    ...i.escapeKeydown
  }).destroy);
  const a = ft(...s);
  return {
    destroy() {
      a();
    }
  };
}, Hf = (t, e = "body") => {
  let n;
  if (!Z(e) && typeof e != "string")
    return {
      destroy: at
    };
  async function r(i) {
    if (e = i, typeof e == "string") {
      if (n = document.querySelector(e), n === null && (await pn(), n = document.querySelector(e)), n === null)
        throw new Error(`No element found matching css selector: "${e}"`);
    } else if (e instanceof HTMLElement)
      n = e;
    else
      throw new TypeError(`Unknown portal target type: ${e === null ? "null" : typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);
    t.dataset.portal = "", n.appendChild(t), t.hidden = !1;
  }
  function o() {
    t.remove();
  }
  return r(e), {
    update: r,
    destroy: o
  };
}, Kf = {
  ltr: [...qn, Le.ARROW_RIGHT],
  rtl: [...qn, Le.ARROW_LEFT]
}, Uf = {
  ltr: [Le.ARROW_LEFT],
  rtl: [Le.ARROW_RIGHT]
}, qf = {
  arrowSize: 8,
  positioning: {
    placement: "bottom"
  },
  preventScroll: !0,
  closeOnEscape: !0,
  closeOnOutsideClick: !0,
  portal: "body",
  loop: !1,
  dir: "ltr",
  defaultOpen: !1,
  typeahead: !0
};
function Xf(t) {
  const { name: e, selector: n } = ec(t.selector), { preventScroll: r, arrowSize: o, positioning: i, closeOnEscape: s, closeOnOutsideClick: a, portal: l, forceVisible: u, typeahead: c } = t.rootOptions, f = t.rootOpen, m = t.rootActiveTrigger, d = t.nextFocusable, h = t.prevFocusable, b = be(!1), p = be(0), k = be(null), y = be("right"), I = be(null), T = Rs([y, k], ([O, V]) => (z) => O === (V == null ? void 0 : V.side) && Yf(z, V == null ? void 0 : V.area)), { typed: q, handleTypeaheadSearch: M } = kc(), G = {
    menu: Nn(),
    trigger: Nn()
  }, de = $o({
    open: f,
    forceVisible: u,
    activeTrigger: m
  }), J = xe(e(), {
    stores: [de, l],
    returned: ([O, V]) => ({
      role: "menu",
      hidden: O ? void 0 : !0,
      style: bn({
        display: O ? void 0 : "none"
      }),
      id: G.menu,
      "aria-labelledby": G.trigger,
      "data-state": O ? "open" : "closed",
      "data-portal": V ? "" : void 0,
      tabindex: -1
    }),
    action: (O) => {
      let V = at;
      const z = Et([de, m, i, a, l, s], ([_e, je, Me, Ae, Ee, pe]) => {
        V(), !(!_e || !je) && pn().then(() => {
          mn(O, n);
          const Oe = Ho(O, {
            anchorElement: je,
            open: f,
            options: {
              floating: Me,
              clickOutside: Ae ? void 0 : null,
              portal: yc(O, Ee),
              escapeKeydown: pe ? void 0 : null
            }
          });
          Oe && Oe.destroy && (V = Oe.destroy);
        });
      }), ge = ft(ke(O, "keydown", (_e) => {
        const je = _e.target, Me = _e.currentTarget;
        if (!Z(je) || !Z(Me) || !(je.closest('[role="menu"]') === Me))
          return;
        if (No.includes(_e.key) && Uo(_e), _e.key === Le.TAB) {
          _e.preventDefault(), f.set(!1), Ko(_e, d, h);
          return;
        }
        const Ee = _e.key.length === 1;
        !(_e.ctrlKey || _e.altKey || _e.metaKey) && Ee && we(c) === !0 && M(_e.key, $t(Me));
      }));
      return {
        destroy() {
          z(), ge(), V();
        }
      };
    }
  }), K = xe(e("trigger"), {
    stores: [f],
    returned: ([O]) => ({
      "aria-controls": G.menu,
      "aria-expanded": O,
      "data-state": O ? "open" : "closed",
      id: G.trigger,
      tabindex: 0
    }),
    action: (O) => (Fn(O), {
      destroy: ft(ke(O, "click", (z) => {
        const ge = we(f), _e = z.currentTarget;
        Z(_e) && (Te(_e), ge || z.preventDefault());
      }), ke(O, "keydown", (z) => {
        const ge = z.currentTarget;
        if (!Z(ge) || !(qn.includes(z.key) || z.key === Le.ARROW_DOWN))
          return;
        z.preventDefault(), Te(ge);
        const _e = ge.getAttribute("aria-controls");
        if (!_e)
          return;
        const je = document.getElementById(_e);
        if (!je)
          return;
        const Me = $t(je);
        Me.length && Xe(Me[0]);
      }))
    })
  }), w = xe(e("arrow"), {
    stores: o,
    returned: (O) => ({
      "data-arrow": !0,
      style: bn({
        position: "absolute",
        width: `var(--arrow-size, ${O}px)`,
        height: `var(--arrow-size, ${O}px)`
      })
    })
  }), v = xe(e("item"), {
    returned: () => ({
      role: "menuitem",
      tabindex: -1,
      "data-orientation": "vertical"
    }),
    action: (O) => (mn(O, n), Fn(O), {
      destroy: ft(ke(O, "pointerdown", (z) => {
        const ge = z.currentTarget;
        if (Z(ge) && gt(ge)) {
          z.preventDefault();
          return;
        }
      }), ke(O, "click", (z) => {
        const ge = z.currentTarget;
        if (Z(ge)) {
          if (gt(ge)) {
            z.preventDefault();
            return;
          }
          if (z.defaultPrevented) {
            Xe(ge);
            return;
          }
          jn(1).then(() => {
            f.set(!1);
          });
        }
      }), ke(O, "keydown", (z) => {
        Kt(z);
      }), ke(O, "pointermove", (z) => {
        Je(z);
      }), ke(O, "pointerleave", (z) => {
        it(z);
      }), ke(O, "focusin", (z) => {
        Fe(z);
      }), ke(O, "focusout", (z) => {
        F(z);
      }))
    })
  }), E = xe(e("group"), {
    returned: () => (O) => ({
      role: "group",
      "aria-labelledby": O
    })
  }), P = xe(e("group-label"), {
    returned: () => (O) => ({
      id: O
    })
  }), A = {
    defaultChecked: !1,
    disabled: !1
  }, $ = (O) => {
    const V = { ...A, ...O }, z = V.checked ?? be(V.defaultChecked ?? null), ge = Un(z, V.onCheckedChange), _e = be(V.disabled);
    return {
      elements: {
        checkboxItem: xe(e("checkbox-item"), {
          stores: [ge, _e],
          returned: ([Me, Ae]) => ({
            role: "menuitemcheckbox",
            tabindex: -1,
            "data-orientation": "vertical",
            "aria-checked": br(Me) ? "mixed" : Me ? "true" : "false",
            "data-disabled": Ae ? "" : void 0,
            "data-state": fl(Me)
          }),
          action: (Me) => (mn(Me, n), Fn(Me), {
            destroy: ft(ke(Me, "pointerdown", (Ee) => {
              const pe = Ee.currentTarget;
              if (Z(pe) && gt(pe)) {
                Ee.preventDefault();
                return;
              }
            }), ke(Me, "click", (Ee) => {
              const pe = Ee.currentTarget;
              if (Z(pe)) {
                if (gt(pe)) {
                  Ee.preventDefault();
                  return;
                }
                if (Ee.defaultPrevented) {
                  Xe(pe);
                  return;
                }
                ge.update((Oe) => br(Oe) ? !0 : !Oe), pn().then(() => {
                  f.set(!1);
                });
              }
            }), ke(Me, "keydown", (Ee) => {
              Kt(Ee);
            }), ke(Me, "pointermove", (Ee) => {
              const pe = Ee.currentTarget;
              if (Z(pe)) {
                if (gt(pe)) {
                  fe(Ee);
                  return;
                }
                Je(Ee, pe);
              }
            }), ke(Me, "pointerleave", (Ee) => {
              it(Ee);
            }), ke(Me, "focusin", (Ee) => {
              Fe(Ee);
            }), ke(Me, "focusout", (Ee) => {
              F(Ee);
            }))
          })
        })
      },
      states: {
        checked: ge
      },
      options: {
        disabled: _e
      }
    };
  }, W = (O = {}) => {
    const V = O.value ?? be(O.defaultValue ?? null), z = Un(V, O.onValueChange), ge = xe(e("radio-group"), {
      returned: () => ({
        role: "group"
      })
    }), _e = {
      disabled: !1
    }, je = xe(e("radio-item"), {
      stores: [z],
      returned: ([Ae]) => (Ee) => {
        const { value: pe, disabled: Oe } = { ..._e, ...Ee }, st = Ae === pe;
        return {
          disabled: Oe,
          role: "menuitemradio",
          "data-state": st ? "checked" : "unchecked",
          "aria-checked": st,
          "data-disabled": Oe ? "" : void 0,
          "data-value": pe,
          "data-orientation": "vertical",
          tabindex: -1
        };
      },
      action: (Ae) => (mn(Ae, n), {
        destroy: ft(ke(Ae, "pointerdown", (pe) => {
          const Oe = pe.currentTarget;
          if (!Z(Oe))
            return;
          const st = Ae.dataset.value;
          if (Ae.dataset.disabled || st === void 0) {
            pe.preventDefault();
            return;
          }
        }), ke(Ae, "click", (pe) => {
          const Oe = pe.currentTarget;
          if (!Z(Oe))
            return;
          const st = Ae.dataset.value;
          if (Ae.dataset.disabled || st === void 0) {
            pe.preventDefault();
            return;
          }
          if (pe.defaultPrevented) {
            if (!Z(Oe))
              return;
            Xe(Oe);
            return;
          }
          z.set(st), pn().then(() => {
            f.set(!1);
          });
        }), ke(Ae, "keydown", (pe) => {
          Kt(pe);
        }), ke(Ae, "pointermove", (pe) => {
          const Oe = pe.currentTarget;
          if (!Z(Oe))
            return;
          const st = Ae.dataset.value;
          if (Ae.dataset.disabled || st === void 0) {
            fe(pe);
            return;
          }
          Je(pe, Oe);
        }), ke(Ae, "pointerleave", (pe) => {
          it(pe);
        }), ke(Ae, "focusin", (pe) => {
          Fe(pe);
        }), ke(Ae, "focusout", (pe) => {
          F(pe);
        }))
      })
    }), Me = he(z, (Ae) => (Ee) => Ae === Ee);
    return {
      elements: {
        radioGroup: ge,
        radioItem: je
      },
      states: {
        value: z
      },
      helpers: {
        isChecked: Me
      }
    };
  }, { elements: { root: Q } } = ed({
    orientation: "horizontal"
  }), le = {
    ...qf,
    disabled: !1,
    positioning: {
      placement: "right-start",
      gutter: 8
    }
  }, Re = (O) => {
    const V = { ...le, ...O }, z = be(!1), ge = fr(V), { positioning: _e, arrowSize: je, disabled: Me } = ge, Ae = be(null), Ee = be(null), pe = be(0), Oe = {
      menu: Nn(),
      trigger: Nn()
    };
    Rr(() => {
      const ye = document.getElementById(Oe.trigger);
      ye && Ae.set(ye);
    });
    const st = $o({
      open: z,
      forceVisible: u,
      activeTrigger: Ae
    }), Sn = xe(e("submenu"), {
      stores: [st],
      returned: ([ye]) => ({
        role: "menu",
        hidden: ye ? void 0 : !0,
        style: bn({
          display: ye ? void 0 : "none"
        }),
        id: Oe.menu,
        "aria-labelledby": Oe.trigger,
        "data-state": ye ? "open" : "closed",
        tabindex: -1
      }),
      action: (ye) => {
        let lt = at;
        const tt = Et([st, _e], ([ae, Se]) => {
          if (lt(), !ae)
            return;
          const Ge = we(Ae);
          Ge && pn().then(() => {
            const Ue = ao(Ge), mt = Ho(ye, {
              anchorElement: Ge,
              open: z,
              options: {
                floating: Se,
                portal: Z(Ue) ? Ue : void 0,
                clickOutside: null,
                focusTrap: null
              }
            });
            mt && mt.destroy && (lt = mt.destroy);
          });
        }), ze = ft(ke(ye, "keydown", (ae) => {
          if (ae.key === Le.ESCAPE)
            return;
          const Se = ae.target, Ge = ae.currentTarget;
          if (!Z(Se) || !Z(Ge) || !(Se.closest('[role="menu"]') === Ge))
            return;
          if (No.includes(ae.key)) {
            ae.stopImmediatePropagation(), Uo(ae);
            return;
          }
          const mt = Uf.ltr.includes(ae.key), Ut = ae.ctrlKey || ae.altKey || ae.metaKey, Rn = ae.key.length === 1;
          if (mt) {
            const uo = we(Ae);
            ae.preventDefault(), z.update(() => (uo && Xe(uo), !1));
            return;
          }
          if (ae.key === Le.TAB) {
            ae.preventDefault(), f.set(!1), Ko(ae, d, h);
            return;
          }
          !Ut && Rn && we(c) === !0 && M(ae.key, $t(Ge));
        }), ke(ye, "pointermove", (ae) => {
          Ze(ae);
        }), ke(ye, "focusout", (ae) => {
          const Se = we(Ae);
          if (we(b)) {
            const Ge = ae.target, Ue = document.getElementById(Oe.menu);
            if (!Z(Ue) || !Z(Ge))
              return;
            !Ue.contains(Ge) && Ge !== Se && z.set(!1);
          } else {
            const Ge = ae.currentTarget, Ue = ae.relatedTarget;
            if (!Z(Ue) || !Z(Ge))
              return;
            !Ge.contains(Ue) && Ue !== Se && z.set(!1);
          }
        }));
        return {
          destroy() {
            tt(), lt(), ze();
          }
        };
      }
    }), dl = xe(e("subtrigger"), {
      stores: [z, Me],
      returned: ([ye, lt]) => ({
        role: "menuitem",
        id: Oe.trigger,
        tabindex: -1,
        "aria-controls": Oe.menu,
        "aria-expanded": ye,
        "data-state": ye ? "open" : "closed",
        "data-disabled": lt ? "" : void 0,
        "aria-haspopop": "menu"
      }),
      action: (ye) => {
        mn(ye, n), Fn(ye);
        const lt = () => {
          Cr(Ee), window.clearTimeout(we(pe)), k.set(null);
        }, tt = ft(ke(ye, "click", (ze) => {
          if (ze.defaultPrevented)
            return;
          const ae = ze.currentTarget;
          !Z(ae) || gt(ae) || (Xe(ae), we(z) || z.update((Se) => Se || (Ae.set(ae), !Se)));
        }), ke(ye, "keydown", (ze) => {
          const ae = we(q), Se = ze.currentTarget;
          if (!(!Z(Se) || gt(Se) || ae.length > 0 && ze.key === Le.SPACE) && Kf.ltr.includes(ze.key)) {
            if (!we(z)) {
              Se.click(), ze.preventDefault();
              return;
            }
            const Ue = Se.getAttribute("aria-controls");
            if (!Ue)
              return;
            const mt = document.getElementById(Ue);
            if (!Z(mt))
              return;
            const Ut = $t(mt)[0];
            Xe(Ut);
          }
        }), ke(ye, "pointermove", (ze) => {
          if (!dn(ze) || (N(ze), ze.defaultPrevented))
            return;
          const ae = ze.currentTarget;
          if (!Z(ae))
            return;
          Xe(ae);
          const Se = we(Ee);
          !we(z) && !Se && !gt(ae) && Ee.set(window.setTimeout(() => {
            z.update(() => (Ae.set(ae), !0)), Cr(Ee);
          }, 100));
        }), ke(ye, "pointerleave", (ze) => {
          if (!dn(ze))
            return;
          Cr(Ee);
          const ae = document.getElementById(Oe.menu), Se = ae == null ? void 0 : ae.getBoundingClientRect();
          if (Se) {
            const Ge = ae == null ? void 0 : ae.dataset.side, Ue = Ge === "right", mt = Ue ? -5 : 5, Ut = Se[Ue ? "left" : "right"], Rn = Se[Ue ? "right" : "left"];
            k.set({
              area: [
                // Apply a bleed on clientX to ensure that our exit point is
                // consistently within polygon bounds
                { x: ze.clientX + mt, y: ze.clientY },
                { x: Ut, y: Se.top },
                { x: Rn, y: Se.top },
                { x: Rn, y: Se.bottom },
                { x: Ut, y: Se.bottom }
              ],
              side: Ge
            }), window.clearTimeout(we(pe)), pe.set(window.setTimeout(() => {
              k.set(null);
            }, 300));
          } else {
            if (Pe(ze), ze.defaultPrevented)
              return;
            k.set(null);
          }
        }), ke(ye, "focusout", (ze) => {
          const ae = ze.currentTarget;
          if (!Z(ae))
            return;
          Yt(ae);
          const Se = ze.relatedTarget;
          if (!Z(Se))
            return;
          const Ge = ae.getAttribute("aria-controls");
          if (!Ge)
            return;
          const Ue = document.getElementById(Ge);
          Ue && !Ue.contains(Se) && z.set(!1);
        }), ke(ye, "focusin", (ze) => {
          Fe(ze);
        }));
        return {
          destroy() {
            lt(), tt();
          }
        };
      }
    }), ml = xe(e("subarrow"), {
      stores: je,
      returned: (ye) => ({
        "data-arrow": !0,
        style: bn({
          position: "absolute",
          width: `var(--arrow-size, ${ye}px)`,
          height: `var(--arrow-size, ${ye}px)`
        })
      })
    });
    return Et([f], ([ye]) => {
      ye || (Ae.set(null), z.set(!1));
    }), Et([k], ([ye]) => {
      !Qt || ye || window.clearTimeout(we(pe));
    }), Et([z], ([ye]) => {
      Qt && jn(1).then(() => {
        const lt = document.getElementById(Oe.menu);
        if (lt) {
          if (ye && we(b)) {
            const tt = $t(lt);
            if (!tt.length)
              return;
            Xe(tt[0]);
          }
          if (!ye) {
            const tt = we(I);
            tt && lt.contains(tt) && Yt(tt);
          }
          if (lt && !ye) {
            const tt = document.getElementById(Oe.trigger);
            if (!tt || document.activeElement === tt)
              return;
            Yt(tt);
          }
        }
      });
    }), {
      elements: {
        subTrigger: dl,
        subMenu: Sn,
        subArrow: ml
      },
      states: {
        subOpen: z
      },
      options: ge
    };
  };
  Rr(() => {
    const O = document.getElementById(G.trigger);
    Z(O) && we(f) && m.set(O);
    const V = [], z = () => b.set(!1), ge = () => {
      b.set(!0), V.push(ft(_t(document, "pointerdown", z, { capture: !0, once: !0 }), _t(document, "pointermove", z, { capture: !0, once: !0 })));
    }, _e = (je) => {
      if (je.key === Le.ESCAPE && we(s)) {
        f.set(!1);
        return;
      }
    };
    return V.push(_t(document, "keydown", ge, { capture: !0 })), V.push(_t(document, "keydown", _e)), () => {
      V.forEach((je) => je());
    };
  }), Et([f, I], ([O, V]) => {
    !O && V && Yt(V);
  }), Et([f, m, r], ([O, V, z]) => {
    if (!Qt)
      return;
    const ge = [];
    return t.removeScroll && O && z && ge.push(bc()), !O && V && Xe(V), jn(1).then(() => {
      const _e = document.getElementById(G.menu);
      if (_e && O && we(b)) {
        if (t.disableFocusFirstItem) {
          Xe(_e);
          return;
        }
        const je = $t(_e);
        if (!je.length)
          return;
        Xe(je[0]);
      } else if (V)
        Xe(V);
      else {
        if (t.disableTriggerRefocus)
          return;
        const je = document.getElementById(G.trigger);
        if (!je)
          return;
        Xe(je);
      }
    }), () => {
      ge.forEach((_e) => _e());
    };
  }), Et(f, (O) => {
    if (!Qt)
      return;
    const V = () => b.set(!1), z = (ge) => {
      if (b.set(!0), ge.key === Le.ESCAPE && O) {
        f.set(!1);
        return;
      }
    };
    return ft(_t(document, "pointerdown", V, { capture: !0, once: !0 }), _t(document, "pointermove", V, { capture: !0, once: !0 }), _t(document, "keydown", z, { capture: !0 }));
  });
  function Te(O) {
    f.update((V) => {
      const z = !V;
      return z && (d.set(gc(O)), h.set(_c(O)), m.set(O)), z;
    });
  }
  function Fe(O) {
    const V = O.currentTarget;
    if (!Z(V))
      return;
    const z = we(I);
    z && Yt(z), rc(V), I.set(V);
  }
  function F(O) {
    const V = O.currentTarget;
    Z(V) && Yt(V);
  }
  function N(O) {
    gr(O) && O.preventDefault();
  }
  function fe(O) {
    if (gr(O))
      return;
    const V = O.target;
    if (!Z(V))
      return;
    const z = ao(V);
    z && Xe(z);
  }
  function Pe(O) {
    gr(O) && O.preventDefault();
  }
  function Ze(O) {
    if (!dn(O))
      return;
    const V = O.target, z = O.currentTarget;
    if (!Z(z) || !Z(V))
      return;
    const ge = we(p), _e = ge !== O.clientX;
    if (z.contains(V) && _e) {
      const je = O.clientX > ge ? "right" : "left";
      y.set(je), p.set(O.clientX);
    }
  }
  function Je(O, V = null) {
    if (!dn(O) || (N(O), O.defaultPrevented))
      return;
    if (V) {
      Xe(V);
      return;
    }
    const z = O.currentTarget;
    Z(z) && Xe(z);
  }
  function it(O) {
    dn(O) && fe(O);
  }
  function Kt(O) {
    if (we(q).length > 0 && O.key === Le.SPACE) {
      O.preventDefault();
      return;
    }
    if (qn.includes(O.key)) {
      O.preventDefault();
      const ge = O.currentTarget;
      if (!Z(ge))
        return;
      ge.click();
    }
  }
  function br(O) {
    return O === "indeterminate";
  }
  function fl(O) {
    return br(O) ? "indeterminate" : O ? "checked" : "unchecked";
  }
  function gr(O) {
    return we(T)(O);
  }
  function ao(O) {
    const V = O.closest('[role="menu"]');
    return Z(V) ? V : null;
  }
  return {
    trigger: K,
    menu: J,
    open: f,
    item: v,
    group: E,
    groupLabel: P,
    arrow: w,
    options: t.rootOptions,
    createCheckboxItem: $,
    createSubmenu: Re,
    createMenuRadioGroup: W,
    separator: Q,
    rootIds: G,
    handleTypeaheadSearch: M
  };
}
function Ko(t, e, n) {
  if (t.shiftKey) {
    const r = we(n);
    r && (t.preventDefault(), r.focus(), n.set(null));
  } else {
    const r = we(e);
    r && (t.preventDefault(), r.focus(), e.set(null));
  }
}
function $t(t) {
  return Array.from(t.querySelectorAll(`[data-melt-menu-id="${t.id}"]`)).filter((e) => Z(e));
}
function Fn(t) {
  !t || !gt(t) || (t.setAttribute("data-disabled", ""), t.setAttribute("aria-disabled", "true"));
}
function Cr(t) {
  if (!Qt)
    return;
  const e = we(t);
  e && (window.clearTimeout(e), t.set(null));
}
function dn(t) {
  return t.pointerType === "mouse";
}
function mn(t, e) {
  if (!t)
    return;
  const n = t.closest(`${e()}, ${e("submenu")}`);
  Z(n) && t.setAttribute("data-melt-menu-id", n.id);
}
function Uo(t) {
  t.preventDefault();
  const e = document.activeElement, n = t.currentTarget;
  if (!Z(e) || !Z(n))
    return;
  const r = $t(n);
  if (!r.length)
    return;
  const o = r.filter((a) => !(a.hasAttribute("data-disabled") || a.getAttribute("disabled") === "true")), i = o.indexOf(e);
  let s;
  switch (t.key) {
    case Le.ARROW_DOWN:
      s = i < o.length - 1 ? i + 1 : i;
      break;
    case Le.ARROW_UP:
      s = i > 0 ? i - 1 : 0;
      break;
    case Le.HOME:
      s = 0;
      break;
    case Le.END:
      s = o.length - 1;
      break;
    default:
      return;
  }
  Xe(o[s]);
}
function Yf(t, e) {
  if (!e)
    return !1;
  const n = { x: t.clientX, y: t.clientY };
  return Zf(n, e);
}
function Zf(t, e) {
  const { x: n, y: r } = t;
  let o = !1;
  for (let i = 0, s = e.length - 1; i < e.length; s = i++) {
    const a = e[i].x, l = e[i].y, u = e[s].x, c = e[s].y;
    l > r != c > r && n < (u - a) * (r - l) / (c - l) + a && (o = !o);
  }
  return o;
}
const Jf = {
  arrowSize: 8,
  positioning: {
    placement: "bottom"
  },
  preventScroll: !0,
  closeOnEscape: !0,
  closeOnOutsideClick: !0,
  portal: void 0,
  loop: !1,
  dir: "ltr",
  defaultOpen: !1,
  forceVisible: !1,
  typeahead: !0
};
function Qf(t) {
  const e = { ...Jf, ...t }, n = fr(e), r = e.open ?? be(e.defaultOpen), o = Un(r, e == null ? void 0 : e.onOpenChange), i = be(null), s = be(null), a = be(null), { trigger: l, menu: u, item: c, arrow: f, createSubmenu: m, createCheckboxItem: d, createMenuRadioGroup: h, separator: b, group: p, groupLabel: k } = Xf({
    rootOptions: n,
    rootOpen: o,
    rootActiveTrigger: i,
    nextFocusable: s,
    prevFocusable: a,
    disableTriggerRefocus: !0,
    selector: "dropdown-menu",
    removeScroll: !0
  });
  return {
    elements: {
      trigger: l,
      menu: u,
      item: c,
      arrow: f,
      separator: b,
      group: p,
      groupLabel: k
    },
    states: {
      open: o
    },
    builders: {
      createCheckboxItem: d,
      createSubmenu: m,
      createMenuRadioGroup: h
    },
    options: n
  };
}
const xf = {
  orientation: "horizontal",
  decorative: !1
}, ed = (t) => {
  const e = { ...xf, ...t }, n = fr(e), { orientation: r, decorative: o } = n;
  return {
    elements: {
      root: xe("separator", {
        stores: [r, o],
        returned: ([s, a]) => ({
          role: a ? "none" : "separator",
          "aria-orientation": s === "vertical" ? s : void 0,
          "aria-hidden": a,
          "data-orientation": s
        })
      })
    },
    options: n
  };
};
function qs() {
  return Es(10);
}
function hr(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 && (e[n] = r);
  }
  return e;
}
function pr(t) {
  return function(e, n) {
    if (n === void 0)
      return;
    t[e].set(n);
  };
}
function td(t, e) {
  const n = [];
  return e.builders.forEach((r) => {
    const o = r.action(t);
    o && n.push(o);
  }), {
    destroy: () => {
      n.forEach((r) => {
        r.destroy && r.destroy();
      });
    }
  };
}
function qo(t) {
  const e = {};
  return t.forEach((n) => {
    Object.keys(n).forEach((r) => {
      r !== "action" && (e[r] = n[r]);
    });
  }), e;
}
function Xo(t) {
  return t ? { "aria-disabled": !0, "data-disabled": "" } : {};
}
function En() {
  const t = Tl();
  return (e) => {
    const { originalEvent: n } = e.detail, { cancelable: r } = e, o = n.type;
    t(o, { originalEvent: n, currentTarget: n.currentTarget }, { cancelable: r }) || e.preventDefault();
  };
}
function nd(t) {
  let e = (
    /*href*/
    t[0] ? "a" : "button"
  ), n, r, o = (
    /*href*/
    (t[0] ? "a" : "button") && Ar(t)
  );
  return {
    c() {
      o && o.c(), n = Ce();
    },
    m(i, s) {
      o && o.m(i, s), R(i, n, s), r = !0;
    },
    p(i, s) {
      /*href*/
      i[0], e ? X(
        e,
        /*href*/
        i[0] ? "a" : "button"
      ) ? (o.d(1), o = Ar(i), e = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n)) : o.p(i, s) : (o = Ar(i), e = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n));
    },
    i(i) {
      r || (g(o, i), r = !0);
    },
    o(i) {
      _(o, i), r = !1;
    },
    d(i) {
      i && S(n), o && o.d(i);
    }
  };
}
function rd(t) {
  let e = (
    /*href*/
    t[0] ? "a" : "button"
  ), n, r, o = (
    /*href*/
    (t[0] ? "a" : "button") && Er(t)
  );
  return {
    c() {
      o && o.c(), n = Ce();
    },
    m(i, s) {
      o && o.m(i, s), R(i, n, s), r = !0;
    },
    p(i, s) {
      /*href*/
      i[0], e ? X(
        e,
        /*href*/
        i[0] ? "a" : "button"
      ) ? (o.d(1), o = Er(i), e = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n)) : o.p(i, s) : (o = Er(i), e = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n));
    },
    i(i) {
      r || (g(o, i), r = !0);
    },
    o(i) {
      _(o, i), r = !1;
    },
    d(i) {
      i && S(n), o && o.d(i);
    }
  };
}
function Ar(t) {
  let e, n, r, o, i;
  const s = (
    /*#slots*/
    t[5].default
  ), a = x(
    s,
    t,
    /*$$scope*/
    t[4],
    null
  );
  let l = [
    {
      type: n = /*href*/
      t[0] ? void 0 : (
        /*type*/
        t[1]
      )
    },
    { href: (
      /*href*/
      t[0]
    ) },
    { tabindex: "0" },
    /*$$restProps*/
    t[3]
  ], u = {};
  for (let c = 0; c < l.length; c += 1)
    u = C(u, l[c]);
  return {
    c() {
      e = me(
        /*href*/
        t[0] ? "a" : "button"
      ), a && a.c(), Bn(
        /*href*/
        t[0] ? "a" : "button"
      )(e, u);
    },
    m(c, f) {
      R(c, e, f), a && a.m(e, null), r = !0, o || (i = [
        oe(
          e,
          "click",
          /*click_handler_1*/
          t[12]
        ),
        oe(
          e,
          "change",
          /*change_handler_1*/
          t[13]
        ),
        oe(
          e,
          "keydown",
          /*keydown_handler_1*/
          t[14]
        ),
        oe(
          e,
          "keyup",
          /*keyup_handler_1*/
          t[15]
        ),
        oe(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[16]
        ),
        oe(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[17]
        )
      ], o = !0);
    },
    p(c, f) {
      a && a.p && (!r || f & /*$$scope*/
      16) && te(
        a,
        s,
        c,
        /*$$scope*/
        c[4],
        r ? ee(
          s,
          /*$$scope*/
          c[4],
          f,
          null
        ) : ne(
          /*$$scope*/
          c[4]
        ),
        null
      ), Bn(
        /*href*/
        c[0] ? "a" : "button"
      )(e, u = Y(l, [
        (!r || f & /*href, type*/
        3 && n !== (n = /*href*/
        c[0] ? void 0 : (
          /*type*/
          c[1]
        ))) && { type: n },
        (!r || f & /*href*/
        1) && { href: (
          /*href*/
          c[0]
        ) },
        { tabindex: "0" },
        f & /*$$restProps*/
        8 && /*$$restProps*/
        c[3]
      ]));
    },
    i(c) {
      r || (g(a, c), r = !0);
    },
    o(c) {
      _(a, c), r = !1;
    },
    d(c) {
      c && S(e), a && a.d(c), o = !1, He(i);
    }
  };
}
function Er(t) {
  let e, n, r, o, i, s;
  const a = (
    /*#slots*/
    t[5].default
  ), l = x(
    a,
    t,
    /*$$scope*/
    t[4],
    null
  );
  let u = [
    {
      type: n = /*href*/
      t[0] ? void 0 : (
        /*type*/
        t[1]
      )
    },
    { href: (
      /*href*/
      t[0]
    ) },
    { tabindex: "0" },
    qo(
      /*builders*/
      t[2]
    ),
    /*$$restProps*/
    t[3]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = C(c, u[f]);
  return {
    c() {
      e = me(
        /*href*/
        t[0] ? "a" : "button"
      ), l && l.c(), Bn(
        /*href*/
        t[0] ? "a" : "button"
      )(e, c);
    },
    m(f, m) {
      R(f, e, m), l && l.m(e, null), o = !0, i || (s = [
        oe(
          e,
          "click",
          /*click_handler*/
          t[6]
        ),
        oe(
          e,
          "change",
          /*change_handler*/
          t[7]
        ),
        oe(
          e,
          "keydown",
          /*keydown_handler*/
          t[8]
        ),
        oe(
          e,
          "keyup",
          /*keyup_handler*/
          t[9]
        ),
        oe(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[10]
        ),
        oe(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[11]
        ),
        ot(r = td.call(null, e, { builders: (
          /*builders*/
          t[2]
        ) }))
      ], i = !0);
    },
    p(f, m) {
      l && l.p && (!o || m & /*$$scope*/
      16) && te(
        l,
        a,
        f,
        /*$$scope*/
        f[4],
        o ? ee(
          a,
          /*$$scope*/
          f[4],
          m,
          null
        ) : ne(
          /*$$scope*/
          f[4]
        ),
        null
      ), Bn(
        /*href*/
        f[0] ? "a" : "button"
      )(e, c = Y(u, [
        (!o || m & /*href, type*/
        3 && n !== (n = /*href*/
        f[0] ? void 0 : (
          /*type*/
          f[1]
        ))) && { type: n },
        (!o || m & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) },
        { tabindex: "0" },
        m & /*builders*/
        4 && qo(
          /*builders*/
          f[2]
        ),
        m & /*$$restProps*/
        8 && /*$$restProps*/
        f[3]
      ])), r && wt(r.update) && m & /*builders*/
      4 && r.update.call(null, { builders: (
        /*builders*/
        f[2]
      ) });
    },
    i(f) {
      o || (g(l, f), o = !0);
    },
    o(f) {
      _(l, f), o = !1;
    },
    d(f) {
      f && S(e), l && l.d(f), i = !1, He(s);
    }
  };
}
function od(t) {
  let e, n, r, o;
  const i = [rd, nd], s = [];
  function a(l, u) {
    return (
      /*builders*/
      l[2] && /*builders*/
      l[2].length ? 0 : 1
    );
  }
  return e = a(t), n = s[e] = i[e](t), {
    c() {
      n.c(), r = Ce();
    },
    m(l, u) {
      s[e].m(l, u), R(l, r, u), o = !0;
    },
    p(l, [u]) {
      let c = e;
      e = a(l), e === c ? s[e].p(l, u) : (Ie(), _(s[c], 1, 1, () => {
        s[c] = null;
      }), Ne(), n = s[e], n ? n.p(l, u) : (n = s[e] = i[e](l), n.c()), g(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      o || (g(n), o = !0);
    },
    o(l) {
      _(n), o = !1;
    },
    d(l) {
      l && S(r), s[e].d(l);
    }
  };
}
function id(t, e, n) {
  const r = ["href", "type", "builders"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { href: a = void 0 } = e, { type: l = void 0 } = e, { builders: u = [] } = e;
  function c(M) {
    ce.call(this, t, M);
  }
  function f(M) {
    ce.call(this, t, M);
  }
  function m(M) {
    ce.call(this, t, M);
  }
  function d(M) {
    ce.call(this, t, M);
  }
  function h(M) {
    ce.call(this, t, M);
  }
  function b(M) {
    ce.call(this, t, M);
  }
  function p(M) {
    ce.call(this, t, M);
  }
  function k(M) {
    ce.call(this, t, M);
  }
  function y(M) {
    ce.call(this, t, M);
  }
  function I(M) {
    ce.call(this, t, M);
  }
  function T(M) {
    ce.call(this, t, M);
  }
  function q(M) {
    ce.call(this, t, M);
  }
  return t.$$set = (M) => {
    e = C(C({}, e), ue(M)), n(3, o = B(e, r)), "href" in M && n(0, a = M.href), "type" in M && n(1, l = M.type), "builders" in M && n(2, u = M.builders), "$$scope" in M && n(4, s = M.$$scope);
  }, [
    a,
    l,
    u,
    o,
    s,
    i,
    c,
    f,
    m,
    d,
    h,
    b,
    p,
    k,
    y,
    I,
    T,
    q
  ];
}
let Xs = class extends se {
  constructor(e) {
    super(), ie(this, e, id, od, X, { href: 0, type: 1, builders: 2 });
  }
};
const Ys = "Checkbox", Zs = {
  set: sd,
  get: ld
};
function sd(t) {
  const e = Ac(hr(t));
  return Bt(Ys, { ...e }), {
    ...e,
    updateOption: pr(e.options)
  };
}
function ld() {
  return Nt(Ys);
}
const ad = (t) => ({ builder: t & /*$root*/
2 }), Yo = (t) => ({ builder: (
  /*builder*/
  t[15]
) }), ud = (t) => ({ builder: t & /*$root*/
2 }), Zo = (t) => ({ builder: (
  /*$root*/
  t[1]
) });
function cd(t) {
  const e = t.slice(), n = (
    /*$root*/
    e[1]
  );
  return e[15] = n, e;
}
function fd(t) {
  let e, n, r, o;
  const i = (
    /*#slots*/
    t[12].default
  ), s = x(
    i,
    t,
    /*$$scope*/
    t[11],
    Yo
  );
  let a = [
    /*builder*/
    t[15],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let u = 0; u < a.length; u += 1)
    l = C(l, a[u]);
  return {
    c() {
      e = me("button"), s && s.c(), U(e, l);
    },
    m(u, c) {
      R(u, e, c), s && s.m(e, null), e.autofocus && e.focus(), n = !0, r || (o = [
        ot(
          /*builder*/
          t[15].action(e)
        ),
        oe(
          e,
          "m-click",
          /*dispatch*/
          t[3]
        ),
        oe(
          e,
          "m-keydown",
          /*dispatch*/
          t[3]
        )
      ], r = !0);
    },
    p(u, c) {
      s && s.p && (!n || c & /*$$scope, $root*/
      2050) && te(
        s,
        i,
        u,
        /*$$scope*/
        u[11],
        n ? ee(
          i,
          /*$$scope*/
          u[11],
          c,
          ad
        ) : ne(
          /*$$scope*/
          u[11]
        ),
        Yo
      ), U(e, l = Y(a, [
        c & /*$root*/
        2 && /*builder*/
        u[15],
        c & /*$$restProps*/
        16 && /*$$restProps*/
        u[4]
      ]));
    },
    i(u) {
      n || (g(s, u), n = !0);
    },
    o(u) {
      _(s, u), n = !1;
    },
    d(u) {
      u && S(e), s && s.d(u), r = !1, He(o);
    }
  };
}
function dd(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[11],
    Zo
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope, $root*/
      2050) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[11],
        e ? ee(
          n,
          /*$$scope*/
          o[11],
          i,
          ud
        ) : ne(
          /*$$scope*/
          o[11]
        ),
        Zo
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function md(t) {
  let e, n, r, o;
  const i = [dd, fd], s = [];
  function a(u, c) {
    return (
      /*asChild*/
      u[0] ? 0 : 1
    );
  }
  function l(u, c) {
    return c === 1 ? cd(u) : u;
  }
  return e = a(t), n = s[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ce();
    },
    m(u, c) {
      s[e].m(u, c), R(u, r, c), o = !0;
    },
    p(u, [c]) {
      let f = e;
      e = a(u), e === f ? s[e].p(l(u, e), c) : (Ie(), _(s[f], 1, 1, () => {
        s[f] = null;
      }), Ne(), n = s[e], n ? n.p(l(u, e), c) : (n = s[e] = i[e](l(u, e)), n.c()), g(n, 1), n.m(r.parentNode, r));
    },
    i(u) {
      o || (g(n), o = !0);
    },
    o(u) {
      _(n), o = !1;
    },
    d(u) {
      u && S(r), s[e].d(u);
    }
  };
}
function hd(t, e, n) {
  const r = ["checked", "disabled", "name", "required", "value", "onCheckedChange", "asChild"];
  let o = B(e, r), i, { $$slots: s = {}, $$scope: a } = e, { checked: l = void 0 } = e, { disabled: u = void 0 } = e, { name: c = void 0 } = e, { required: f = void 0 } = e, { value: m = void 0 } = e, { onCheckedChange: d = void 0 } = e, { asChild: h = !1 } = e;
  const { elements: { root: b }, states: { checked: p }, updateOption: k } = Zs.set({
    defaultChecked: l,
    disabled: u,
    name: c,
    required: f,
    value: m,
    onCheckedChange: ({ next: I }) => (l !== I && (d == null || d(I), n(5, l = I)), I)
  });
  De(t, b, (I) => n(1, i = I));
  const y = En();
  return t.$$set = (I) => {
    e = C(C({}, e), ue(I)), n(4, o = B(e, r)), "checked" in I && n(5, l = I.checked), "disabled" in I && n(6, u = I.disabled), "name" in I && n(7, c = I.name), "required" in I && n(8, f = I.required), "value" in I && n(9, m = I.value), "onCheckedChange" in I && n(10, d = I.onCheckedChange), "asChild" in I && n(0, h = I.asChild), "$$scope" in I && n(11, a = I.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*checked*/
    32 && l !== void 0 && p.set(l), t.$$.dirty & /*disabled*/
    64 && k("disabled", u), t.$$.dirty & /*name*/
    128 && k("name", c), t.$$.dirty & /*required*/
    256 && k("required", f), t.$$.dirty & /*value*/
    512 && k("value", m);
  }, [
    h,
    i,
    b,
    y,
    o,
    l,
    u,
    c,
    f,
    m,
    d,
    a,
    s
  ];
}
let pd = class extends se {
  constructor(e) {
    super(), ie(this, e, hd, md, X, {
      checked: 5,
      disabled: 6,
      name: 7,
      required: 8,
      value: 9,
      onCheckedChange: 10,
      asChild: 0
    });
  }
};
const bd = (t) => ({
  isChecked: t & /*$isChecked*/
  1,
  isIndeterminate: t & /*$isIndeterminate*/
  2
}), Jo = (t) => ({
  isChecked: (
    /*$isChecked*/
    t[0]
  ),
  isIndeterminate: (
    /*$isIndeterminate*/
    t[1]
  )
});
function gd(t) {
  let e, n;
  const r = (
    /*#slots*/
    t[6].default
  ), o = x(
    r,
    t,
    /*$$scope*/
    t[5],
    Jo
  );
  let i = [
    /*$$restProps*/
    t[4]
  ], s = {};
  for (let a = 0; a < i.length; a += 1)
    s = C(s, i[a]);
  return {
    c() {
      e = me("div"), o && o.c(), U(e, s);
    },
    m(a, l) {
      R(a, e, l), o && o.m(e, null), n = !0;
    },
    p(a, [l]) {
      o && o.p && (!n || l & /*$$scope, $isChecked, $isIndeterminate*/
      35) && te(
        o,
        r,
        a,
        /*$$scope*/
        a[5],
        n ? ee(
          r,
          /*$$scope*/
          a[5],
          l,
          bd
        ) : ne(
          /*$$scope*/
          a[5]
        ),
        Jo
      ), U(e, s = Y(i, [l & /*$$restProps*/
      16 && /*$$restProps*/
      a[4]]));
    },
    i(a) {
      n || (g(o, a), n = !0);
    },
    o(a) {
      _(o, a), n = !1;
    },
    d(a) {
      a && S(e), o && o.d(a);
    }
  };
}
function _d(t, e, n) {
  const r = [];
  let o = B(e, r), i, s, { $$slots: a = {}, $$scope: l } = e;
  const { helpers: { isChecked: u, isIndeterminate: c } } = Zs.get();
  return De(t, u, (f) => n(0, i = f)), De(t, c, (f) => n(1, s = f)), t.$$set = (f) => {
    e = C(C({}, e), ue(f)), n(4, o = B(e, r)), "$$scope" in f && n(5, l = f.$$scope);
  }, [
    i,
    s,
    u,
    c,
    o,
    l,
    a
  ];
}
class vd extends se {
  constructor(e) {
    super(), ie(this, e, _d, gd, X, {});
  }
}
const Js = "DropdownMenu", lo = "DropdownSubmenu", Qs = "DropdownRadioGroup", xs = "DropdownCheckboxItem", el = "DropdownRadioItem", tl = "DropdownGroup", Ct = {
  get: Pt,
  set: kd,
  setSub: wd,
  getContent: Td,
  setRadioGroup: yd,
  setRadioItem: Cd,
  getSubTrigger: Ed,
  getSubContent: Sd,
  setCheckboxItem: Rd,
  getCheckboxIndicator: Od,
  getRadioIndicator: Ad,
  setGroup: Id,
  getGroupLabel: Nd,
  setArrow: Pd
};
function Pt() {
  return Nt(Js);
}
function kd(t) {
  const e = Qf({ ...hr(t), forceVisible: !0 });
  return Bt(Js, e), {
    ...e,
    updateOption: pr(e.options)
  };
}
function wd(t) {
  const { builders: { createSubmenu: e } } = Pt(), n = e(hr(t));
  return Bt(lo, n), {
    ...n,
    updateOption: pr(n.options)
  };
}
function yd(t) {
  const { builders: { createMenuRadioGroup: e } } = Pt(), n = e(t);
  return Bt(Qs, n), n;
}
function Cd(t) {
  const e = Nt(Qs);
  return Bt(el, { isChecked: e.helpers.isChecked, value: t }), e;
}
function Ad() {
  return Nt(el);
}
function Ed() {
  return Nt(lo);
}
function Td(t = 5) {
  const e = Pt();
  return e.options.positioning.update((n) => ({ ...n, gutter: t })), e;
}
function Sd(t = -1) {
  const e = Nt(lo);
  return e.options.positioning.update((n) => ({ ...n, gutter: t })), e;
}
function Rd(t) {
  const { builders: { createCheckboxItem: e } } = Pt(), n = e(hr(t));
  return Bt(xs, n.states.checked), {
    ...n,
    updateOption: pr(n.options)
  };
}
function Od() {
  return Nt(xs);
}
function Id() {
  const { elements: { group: t } } = Pt(), e = qs();
  return Bt(tl, e), { group: t, id: e };
}
function Nd() {
  const t = Nt(tl) ?? qs(), { elements: { groupLabel: e } } = Pt();
  return { groupLabel: e, id: t };
}
function Pd(t = 8) {
  const e = Pt();
  return e.options.arrowSize.set(t), e;
}
function $d(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[11],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, [i]) {
      r && r.p && (!e || i & /*$$scope*/
      2048) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[11],
        e ? ee(
          n,
          /*$$scope*/
          o[11],
          i,
          null
        ) : ne(
          /*$$scope*/
          o[11]
        ),
        null
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Fd(t, e, n) {
  let { $$slots: r = {}, $$scope: o } = e, { closeOnOutsideClick: i = void 0 } = e, { closeOnEscape: s = void 0 } = e, { portal: a = void 0 } = e, { forceVisible: l = void 0 } = e, { open: u = void 0 } = e, { onOpenChange: c = void 0 } = e, { preventScroll: f = void 0 } = e, { arrowSize: m = void 0 } = e, { positioning: d = void 0 } = e, { loop: h = void 0 } = e, { dir: b = void 0 } = e;
  const { states: { open: p }, updateOption: k } = Ct.set({
    closeOnOutsideClick: i,
    closeOnEscape: s,
    portal: a,
    forceVisible: l,
    defaultOpen: u,
    preventScroll: f,
    arrowSize: m,
    positioning: d,
    loop: h,
    dir: b,
    onOpenChange: ({ next: y }) => (u !== y && (c == null || c(y), n(0, u = y)), y)
  });
  return t.$$set = (y) => {
    "closeOnOutsideClick" in y && n(1, i = y.closeOnOutsideClick), "closeOnEscape" in y && n(2, s = y.closeOnEscape), "portal" in y && n(3, a = y.portal), "forceVisible" in y && n(4, l = y.forceVisible), "open" in y && n(0, u = y.open), "onOpenChange" in y && n(5, c = y.onOpenChange), "preventScroll" in y && n(6, f = y.preventScroll), "arrowSize" in y && n(7, m = y.arrowSize), "positioning" in y && n(8, d = y.positioning), "loop" in y && n(9, h = y.loop), "dir" in y && n(10, b = y.dir), "$$scope" in y && n(11, o = y.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && u !== void 0 && p.set(u), t.$$.dirty & /*closeOnOutsideClick*/
    2 && k("closeOnOutsideClick", i), t.$$.dirty & /*closeOnEscape*/
    4 && k("closeOnEscape", s), t.$$.dirty & /*portal*/
    8 && k("portal", a), t.$$.dirty & /*forceVisible*/
    16 && k("forceVisible", l), t.$$.dirty & /*preventScroll*/
    64 && k("preventScroll", f), t.$$.dirty & /*arrowSize*/
    128 && k("arrowSize", m), t.$$.dirty & /*positioning*/
    256 && k("positioning", d), t.$$.dirty & /*loop*/
    512 && k("loop", h), t.$$.dirty & /*dir*/
    1024 && k("dir", b);
  }, [
    u,
    i,
    s,
    a,
    l,
    c,
    f,
    m,
    d,
    h,
    b,
    o,
    r
  ];
}
class nl extends se {
  constructor(e) {
    super(), ie(this, e, Fd, $d, X, {
      closeOnOutsideClick: 1,
      closeOnEscape: 2,
      portal: 3,
      forceVisible: 4,
      open: 0,
      onOpenChange: 5,
      preventScroll: 6,
      arrowSize: 7,
      positioning: 8,
      loop: 9,
      dir: 10
    });
  }
}
const Md = (t) => ({ builder: t & /*$item*/
4 }), Qo = (t) => ({ builder: (
  /*builder*/
  t[8]
) }), Dd = (t) => ({ builder: t & /*$item*/
4 }), xo = (t) => ({ builder: (
  /*$item*/
  t[2]
) });
function Ld(t) {
  const e = t.slice(), n = (
    /*$item*/
    e[2]
  );
  return e[8] = n, e;
}
function jd(t) {
  let e, n, r, o;
  const i = (
    /*#slots*/
    t[7].default
  ), s = x(
    i,
    t,
    /*$$scope*/
    t[6],
    Qo
  );
  let a = [
    /*builder*/
    t[8],
    /*$$restProps*/
    t[5],
    Xo(
      /*disabled*/
      t[1]
    )
  ], l = {};
  for (let u = 0; u < a.length; u += 1)
    l = C(l, a[u]);
  return {
    c() {
      e = me("div"), s && s.c(), U(e, l);
    },
    m(u, c) {
      R(u, e, c), s && s.m(e, null), n = !0, r || (o = [
        ot(
          /*builder*/
          t[8].action(e)
        ),
        oe(
          e,
          "m-click",
          /*dispatch*/
          t[4]
        ),
        oe(
          e,
          "m-focusin",
          /*dispatch*/
          t[4]
        ),
        oe(
          e,
          "m-focusout",
          /*dispatch*/
          t[4]
        ),
        oe(
          e,
          "m-keydown",
          /*dispatch*/
          t[4]
        ),
        oe(
          e,
          "m-pointerdown",
          /*dispatch*/
          t[4]
        ),
        oe(
          e,
          "m-pointerleave",
          /*dispatch*/
          t[4]
        ),
        oe(
          e,
          "m-pointermove",
          /*dispatch*/
          t[4]
        )
      ], r = !0);
    },
    p(u, c) {
      s && s.p && (!n || c & /*$$scope, $item*/
      68) && te(
        s,
        i,
        u,
        /*$$scope*/
        u[6],
        n ? ee(
          i,
          /*$$scope*/
          u[6],
          c,
          Md
        ) : ne(
          /*$$scope*/
          u[6]
        ),
        Qo
      ), U(e, l = Y(a, [
        c & /*$item*/
        4 && /*builder*/
        u[8],
        c & /*$$restProps*/
        32 && /*$$restProps*/
        u[5],
        c & /*disabled*/
        2 && Xo(
          /*disabled*/
          u[1]
        )
      ]));
    },
    i(u) {
      n || (g(s, u), n = !0);
    },
    o(u) {
      _(s, u), n = !1;
    },
    d(u) {
      u && S(e), s && s.d(u), r = !1, He(o);
    }
  };
}
function zd(t) {
  let e;
  const n = (
    /*#slots*/
    t[7].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[6],
    xo
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope, $item*/
      68) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[6],
        e ? ee(
          n,
          /*$$scope*/
          o[6],
          i,
          Dd
        ) : ne(
          /*$$scope*/
          o[6]
        ),
        xo
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Bd(t) {
  let e, n, r, o;
  const i = [zd, jd], s = [];
  function a(u, c) {
    return (
      /*asChild*/
      u[0] ? 0 : 1
    );
  }
  function l(u, c) {
    return c === 1 ? Ld(u) : u;
  }
  return e = a(t), n = s[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ce();
    },
    m(u, c) {
      s[e].m(u, c), R(u, r, c), o = !0;
    },
    p(u, [c]) {
      let f = e;
      e = a(u), e === f ? s[e].p(l(u, e), c) : (Ie(), _(s[f], 1, 1, () => {
        s[f] = null;
      }), Ne(), n = s[e], n ? n.p(l(u, e), c) : (n = s[e] = i[e](l(u, e)), n.c()), g(n, 1), n.m(r.parentNode, r));
    },
    i(u) {
      o || (g(n), o = !0);
    },
    o(u) {
      _(n), o = !1;
    },
    d(u) {
      u && S(r), s[e].d(u);
    }
  };
}
function Wd(t, e, n) {
  const r = ["asChild", "disabled"];
  let o = B(e, r), i, { $$slots: s = {}, $$scope: a } = e, { asChild: l = !1 } = e, { disabled: u = !1 } = e;
  const { elements: { item: c } } = Ct.get();
  De(t, c, (m) => n(2, i = m));
  const f = En();
  return t.$$set = (m) => {
    e = C(C({}, e), ue(m)), n(5, o = B(e, r)), "asChild" in m && n(0, l = m.asChild), "disabled" in m && n(1, u = m.disabled), "$$scope" in m && n(6, a = m.$$scope);
  }, [l, u, i, c, f, o, a, s];
}
class Gd extends se {
  constructor(e) {
    super(), ie(this, e, Wd, Bd, X, { asChild: 0, disabled: 1 });
  }
}
const Vd = (t) => ({ builder: t & /*$group*/
2 }), ei = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), Hd = (t) => ({ builder: t & /*$group*/
2 }), ti = (t) => ({
  builder: (
    /*$group*/
    t[1](
      /*id*/
      t[3]
    )
  )
});
function Kd(t) {
  const e = t.slice(), n = (
    /*$group*/
    e[1](
      /*id*/
      e[3]
    )
  );
  return e[7] = n, e;
}
function Ud(t) {
  let e, n, r, o;
  const i = (
    /*#slots*/
    t[6].default
  ), s = x(
    i,
    t,
    /*$$scope*/
    t[5],
    ei
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let u = 0; u < a.length; u += 1)
    l = C(l, a[u]);
  return {
    c() {
      e = me("div"), s && s.c(), U(e, l);
    },
    m(u, c) {
      R(u, e, c), s && s.m(e, null), n = !0, r || (o = ot(
        /*builder*/
        t[7].action(e)
      ), r = !0);
    },
    p(u, c) {
      s && s.p && (!n || c & /*$$scope, $group*/
      34) && te(
        s,
        i,
        u,
        /*$$scope*/
        u[5],
        n ? ee(
          i,
          /*$$scope*/
          u[5],
          c,
          Vd
        ) : ne(
          /*$$scope*/
          u[5]
        ),
        ei
      ), U(e, l = Y(a, [
        c & /*$group*/
        2 && /*builder*/
        u[7],
        c & /*$$restProps*/
        16 && /*$$restProps*/
        u[4]
      ]));
    },
    i(u) {
      n || (g(s, u), n = !0);
    },
    o(u) {
      _(s, u), n = !1;
    },
    d(u) {
      u && S(e), s && s.d(u), r = !1, o();
    }
  };
}
function qd(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[5],
    ti
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope, $group*/
      34) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[5],
        e ? ee(
          n,
          /*$$scope*/
          o[5],
          i,
          Hd
        ) : ne(
          /*$$scope*/
          o[5]
        ),
        ti
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Xd(t) {
  let e, n, r, o;
  const i = [qd, Ud], s = [];
  function a(u, c) {
    return (
      /*asChild*/
      u[0] ? 0 : 1
    );
  }
  function l(u, c) {
    return c === 1 ? Kd(u) : u;
  }
  return e = a(t), n = s[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ce();
    },
    m(u, c) {
      s[e].m(u, c), R(u, r, c), o = !0;
    },
    p(u, [c]) {
      let f = e;
      e = a(u), e === f ? s[e].p(l(u, e), c) : (Ie(), _(s[f], 1, 1, () => {
        s[f] = null;
      }), Ne(), n = s[e], n ? n.p(l(u, e), c) : (n = s[e] = i[e](l(u, e)), n.c()), g(n, 1), n.m(r.parentNode, r));
    },
    i(u) {
      o || (g(n), o = !0);
    },
    o(u) {
      _(n), o = !1;
    },
    d(u) {
      u && S(r), s[e].d(u);
    }
  };
}
function Yd(t, e, n) {
  const r = ["asChild"];
  let o = B(e, r), i, { $$slots: s = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const { group: u, id: c } = Ct.setGroup();
  return De(t, u, (f) => n(1, i = f)), t.$$set = (f) => {
    e = C(C({}, e), ue(f)), n(4, o = B(e, r)), "asChild" in f && n(0, l = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [l, i, u, c, o, a, s];
}
class Zd extends se {
  constructor(e) {
    super(), ie(this, e, Yd, Xd, X, { asChild: 0 });
  }
}
const Jd = (t) => ({ builder: t & /*$groupLabel*/
2 }), ni = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), Qd = (t) => ({ builder: t & /*$groupLabel*/
2 }), ri = (t) => ({
  builder: (
    /*$groupLabel*/
    t[1](
      /*id*/
      t[3]
    )
  )
});
function xd(t) {
  const e = t.slice(), n = (
    /*$groupLabel*/
    e[1](
      /*id*/
      e[3]
    )
  );
  return e[7] = n, e;
}
function em(t) {
  let e, n, r, o;
  const i = (
    /*#slots*/
    t[6].default
  ), s = x(
    i,
    t,
    /*$$scope*/
    t[5],
    ni
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let u = 0; u < a.length; u += 1)
    l = C(l, a[u]);
  return {
    c() {
      e = me("div"), s && s.c(), U(e, l);
    },
    m(u, c) {
      R(u, e, c), s && s.m(e, null), n = !0, r || (o = ot(
        /*builder*/
        t[7].action(e)
      ), r = !0);
    },
    p(u, c) {
      s && s.p && (!n || c & /*$$scope, $groupLabel*/
      34) && te(
        s,
        i,
        u,
        /*$$scope*/
        u[5],
        n ? ee(
          i,
          /*$$scope*/
          u[5],
          c,
          Jd
        ) : ne(
          /*$$scope*/
          u[5]
        ),
        ni
      ), U(e, l = Y(a, [
        c & /*$groupLabel*/
        2 && /*builder*/
        u[7],
        c & /*$$restProps*/
        16 && /*$$restProps*/
        u[4]
      ]));
    },
    i(u) {
      n || (g(s, u), n = !0);
    },
    o(u) {
      _(s, u), n = !1;
    },
    d(u) {
      u && S(e), s && s.d(u), r = !1, o();
    }
  };
}
function tm(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[5],
    ri
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope, $groupLabel*/
      34) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[5],
        e ? ee(
          n,
          /*$$scope*/
          o[5],
          i,
          Qd
        ) : ne(
          /*$$scope*/
          o[5]
        ),
        ri
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function nm(t) {
  let e, n, r, o;
  const i = [tm, em], s = [];
  function a(u, c) {
    return (
      /*asChild*/
      u[0] ? 0 : 1
    );
  }
  function l(u, c) {
    return c === 1 ? xd(u) : u;
  }
  return e = a(t), n = s[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ce();
    },
    m(u, c) {
      s[e].m(u, c), R(u, r, c), o = !0;
    },
    p(u, [c]) {
      let f = e;
      e = a(u), e === f ? s[e].p(l(u, e), c) : (Ie(), _(s[f], 1, 1, () => {
        s[f] = null;
      }), Ne(), n = s[e], n ? n.p(l(u, e), c) : (n = s[e] = i[e](l(u, e)), n.c()), g(n, 1), n.m(r.parentNode, r));
    },
    i(u) {
      o || (g(n), o = !0);
    },
    o(u) {
      _(n), o = !1;
    },
    d(u) {
      u && S(r), s[e].d(u);
    }
  };
}
function rm(t, e, n) {
  const r = ["asChild"];
  let o = B(e, r), i, { $$slots: s = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const { groupLabel: u, id: c } = Ct.getGroupLabel();
  return De(t, u, (f) => n(1, i = f)), t.$$set = (f) => {
    e = C(C({}, e), ue(f)), n(4, o = B(e, r)), "asChild" in f && n(0, l = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [l, i, u, c, o, a, s];
}
class om extends se {
  constructor(e) {
    super(), ie(this, e, rm, nm, X, { asChild: 0 });
  }
}
const im = (t) => ({ builder: t & /*$menu*/
256 }), oi = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), sm = (t) => ({ builder: t & /*$menu*/
256 }), ii = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), lm = (t) => ({ builder: t & /*$menu*/
256 }), si = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), am = (t) => ({ builder: t & /*$menu*/
256 }), li = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), um = (t) => ({ builder: t & /*$menu*/
256 }), ai = (t) => ({ builder: (
  /*builder*/
  t[16]
) }), cm = (t) => ({ builder: t & /*$menu*/
256 }), ui = (t) => ({ builder: (
  /*builder*/
  t[16]
) });
function fm(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function dm(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function mm(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function hm(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function pm(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function bm(t) {
  const e = t.slice(), n = (
    /*$menu*/
    e[8]
  );
  return e[16] = n, e;
}
function gm(t) {
  let e, n, r, o;
  const i = (
    /*#slots*/
    t[15].default
  ), s = x(
    i,
    t,
    /*$$scope*/
    t[14],
    oi
  );
  let a = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], l = {};
  for (let u = 0; u < a.length; u += 1)
    l = C(l, a[u]);
  return {
    c() {
      e = me("div"), s && s.c(), U(e, l);
    },
    m(u, c) {
      R(u, e, c), s && s.m(e, null), n = !0, r || (o = [
        ot(
          /*builder*/
          t[16].action(e)
        ),
        oe(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], r = !0);
    },
    p(u, c) {
      s && s.p && (!n || c & /*$$scope, $menu*/
      16640) && te(
        s,
        i,
        u,
        /*$$scope*/
        u[14],
        n ? ee(
          i,
          /*$$scope*/
          u[14],
          c,
          im
        ) : ne(
          /*$$scope*/
          u[14]
        ),
        oi
      ), U(e, l = Y(a, [
        c & /*$menu*/
        256 && /*builder*/
        u[16],
        c & /*$$restProps*/
        4096 && /*$$restProps*/
        u[12]
      ]));
    },
    i(u) {
      n || (g(s, u), n = !0);
    },
    o(u) {
      _(s, u), n = !1;
    },
    d(u) {
      u && S(e), s && s.d(u), r = !1, He(o);
    }
  };
}
function _m(t) {
  let e, n, r, o, i;
  const s = (
    /*#slots*/
    t[15].default
  ), a = x(
    s,
    t,
    /*$$scope*/
    t[14],
    ii
  );
  let l = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], u = {};
  for (let c = 0; c < l.length; c += 1)
    u = C(u, l[c]);
  return {
    c() {
      e = me("div"), a && a.c(), U(e, u);
    },
    m(c, f) {
      R(c, e, f), a && a.m(e, null), r = !0, o || (i = [
        ot(
          /*builder*/
          t[16].action(e)
        ),
        oe(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], o = !0);
    },
    p(c, f) {
      t = c, a && a.p && (!r || f & /*$$scope, $menu*/
      16640) && te(
        a,
        s,
        t,
        /*$$scope*/
        t[14],
        r ? ee(
          s,
          /*$$scope*/
          t[14],
          f,
          sm
        ) : ne(
          /*$$scope*/
          t[14]
        ),
        ii
      ), U(e, u = Y(l, [
        f & /*$menu*/
        256 && /*builder*/
        t[16],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(c) {
      r || (g(a, c), n && n.end(1), r = !0);
    },
    o(c) {
      _(a, c), c && (n = Yi(
        e,
        /*outTransition*/
        t[4],
        /*outTransitionConfig*/
        t[5]
      )), r = !1;
    },
    d(c) {
      c && S(e), a && a.d(c), c && n && n.end(), o = !1, He(i);
    }
  };
}
function vm(t) {
  let e, n, r, o, i;
  const s = (
    /*#slots*/
    t[15].default
  ), a = x(
    s,
    t,
    /*$$scope*/
    t[14],
    si
  );
  let l = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], u = {};
  for (let c = 0; c < l.length; c += 1)
    u = C(u, l[c]);
  return {
    c() {
      e = me("div"), a && a.c(), U(e, u);
    },
    m(c, f) {
      R(c, e, f), a && a.m(e, null), r = !0, o || (i = [
        ot(
          /*builder*/
          t[16].action(e)
        ),
        oe(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], o = !0);
    },
    p(c, f) {
      t = c, a && a.p && (!r || f & /*$$scope, $menu*/
      16640) && te(
        a,
        s,
        t,
        /*$$scope*/
        t[14],
        r ? ee(
          s,
          /*$$scope*/
          t[14],
          f,
          lm
        ) : ne(
          /*$$scope*/
          t[14]
        ),
        si
      ), U(e, u = Y(l, [
        f & /*$menu*/
        256 && /*builder*/
        t[16],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(c) {
      r || (g(a, c), c && (n || vt(() => {
        n = Xi(
          e,
          /*inTransition*/
          t[2],
          /*inTransitionConfig*/
          t[3]
        ), n.start();
      })), r = !0);
    },
    o(c) {
      _(a, c), r = !1;
    },
    d(c) {
      c && S(e), a && a.d(c), o = !1, He(i);
    }
  };
}
function km(t) {
  let e, n, r, o, i, s;
  const a = (
    /*#slots*/
    t[15].default
  ), l = x(
    a,
    t,
    /*$$scope*/
    t[14],
    li
  );
  let u = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = C(c, u[f]);
  return {
    c() {
      e = me("div"), l && l.c(), U(e, c);
    },
    m(f, m) {
      R(f, e, m), l && l.m(e, null), o = !0, i || (s = [
        ot(
          /*builder*/
          t[16].action(e)
        ),
        oe(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], i = !0);
    },
    p(f, m) {
      t = f, l && l.p && (!o || m & /*$$scope, $menu*/
      16640) && te(
        l,
        a,
        t,
        /*$$scope*/
        t[14],
        o ? ee(
          a,
          /*$$scope*/
          t[14],
          m,
          am
        ) : ne(
          /*$$scope*/
          t[14]
        ),
        li
      ), U(e, c = Y(u, [
        m & /*$menu*/
        256 && /*builder*/
        t[16],
        m & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(f) {
      o || (g(l, f), f && vt(() => {
        o && (r && r.end(1), n = Xi(
          e,
          /*inTransition*/
          t[2],
          /*inTransitionConfig*/
          t[3]
        ), n.start());
      }), o = !0);
    },
    o(f) {
      _(l, f), n && n.invalidate(), f && (r = Yi(
        e,
        /*outTransition*/
        t[4],
        /*outTransitionConfig*/
        t[5]
      )), o = !1;
    },
    d(f) {
      f && S(e), l && l.d(f), f && r && r.end(), i = !1, He(s);
    }
  };
}
function wm(t) {
  let e, n, r, o, i;
  const s = (
    /*#slots*/
    t[15].default
  ), a = x(
    s,
    t,
    /*$$scope*/
    t[14],
    ai
  );
  let l = [
    /*builder*/
    t[16],
    /*$$restProps*/
    t[12]
  ], u = {};
  for (let c = 0; c < l.length; c += 1)
    u = C(u, l[c]);
  return {
    c() {
      e = me("div"), a && a.c(), U(e, u);
    },
    m(c, f) {
      R(c, e, f), a && a.m(e, null), r = !0, o || (i = [
        ot(
          /*builder*/
          t[16].action(e)
        ),
        oe(
          e,
          "m-keydown",
          /*dispatch*/
          t[11]
        )
      ], o = !0);
    },
    p(c, f) {
      t = c, a && a.p && (!r || f & /*$$scope, $menu*/
      16640) && te(
        a,
        s,
        t,
        /*$$scope*/
        t[14],
        r ? ee(
          s,
          /*$$scope*/
          t[14],
          f,
          um
        ) : ne(
          /*$$scope*/
          t[14]
        ),
        ai
      ), U(e, u = Y(l, [
        f & /*$menu*/
        256 && /*builder*/
        t[16],
        f & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12]
      ]));
    },
    i(c) {
      r || (g(a, c), c && vt(() => {
        r && (n || (n = mo(
          e,
          /*transition*/
          t[0],
          /*transitionConfig*/
          t[1],
          !0
        )), n.run(1));
      }), r = !0);
    },
    o(c) {
      _(a, c), c && (n || (n = mo(
        e,
        /*transition*/
        t[0],
        /*transitionConfig*/
        t[1],
        !1
      )), n.run(0)), r = !1;
    },
    d(c) {
      c && S(e), a && a.d(c), c && n && n.end(), o = !1, He(i);
    }
  };
}
function ym(t) {
  let e;
  const n = (
    /*#slots*/
    t[15].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[14],
    ui
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope, $menu*/
      16640) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[14],
        e ? ee(
          n,
          /*$$scope*/
          o[14],
          i,
          cm
        ) : ne(
          /*$$scope*/
          o[14]
        ),
        ui
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Cm(t) {
  let e, n, r, o;
  const i = [
    ym,
    wm,
    km,
    vm,
    _m,
    gm
  ], s = [];
  function a(u, c) {
    return (
      /*asChild*/
      u[6] && /*$open*/
      u[7] ? 0 : (
        /*transition*/
        u[0] && /*$open*/
        u[7] ? 1 : (
          /*inTransition*/
          u[2] && /*outTransition*/
          u[4] && /*$open*/
          u[7] ? 2 : (
            /*inTransition*/
            u[2] && /*$open*/
            u[7] ? 3 : (
              /*outTransition*/
              u[4] && /*$open*/
              u[7] ? 4 : (
                /*$open*/
                u[7] ? 5 : -1
              )
            )
          )
        )
      )
    );
  }
  function l(u, c) {
    if (c === 0)
      return bm(u);
    if (c === 1)
      return pm(u);
    if (c === 2)
      return hm(u);
    if (c === 3)
      return mm(u);
    if (c === 4)
      return dm(u);
    if (c === 5)
      return fm(u);
  }
  return ~(e = a(t)) && (n = s[e] = i[e](l(t, e))), {
    c() {
      n && n.c(), r = Ce();
    },
    m(u, c) {
      ~e && s[e].m(u, c), R(u, r, c), o = !0;
    },
    p(u, [c]) {
      let f = e;
      e = a(u), e === f ? ~e && s[e].p(l(u, e), c) : (n && (Ie(), _(s[f], 1, 1, () => {
        s[f] = null;
      }), Ne()), ~e ? (n = s[e], n ? n.p(l(u, e), c) : (n = s[e] = i[e](l(u, e)), n.c()), g(n, 1), n.m(r.parentNode, r)) : n = null);
    },
    i(u) {
      o || (g(n), o = !0);
    },
    o(u) {
      _(n), o = !1;
    },
    d(u) {
      u && S(r), ~e && s[e].d(u);
    }
  };
}
function Am(t, e, n) {
  const r = [
    "sideOffset",
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild"
  ];
  let o = B(e, r), i, s, { $$slots: a = {}, $$scope: l } = e, { sideOffset: u = 5 } = e, { transition: c = void 0 } = e, { transitionConfig: f = void 0 } = e, { inTransition: m = void 0 } = e, { inTransitionConfig: d = void 0 } = e, { outTransition: h = void 0 } = e, { outTransitionConfig: b = void 0 } = e, { asChild: p = !1 } = e;
  const { elements: { menu: k }, states: { open: y } } = Ct.getContent(u);
  De(t, k, (T) => n(8, s = T)), De(t, y, (T) => n(7, i = T));
  const I = En();
  return t.$$set = (T) => {
    e = C(C({}, e), ue(T)), n(12, o = B(e, r)), "sideOffset" in T && n(13, u = T.sideOffset), "transition" in T && n(0, c = T.transition), "transitionConfig" in T && n(1, f = T.transitionConfig), "inTransition" in T && n(2, m = T.inTransition), "inTransitionConfig" in T && n(3, d = T.inTransitionConfig), "outTransition" in T && n(4, h = T.outTransition), "outTransitionConfig" in T && n(5, b = T.outTransitionConfig), "asChild" in T && n(6, p = T.asChild), "$$scope" in T && n(14, l = T.$$scope);
  }, [
    c,
    f,
    m,
    d,
    h,
    b,
    p,
    i,
    s,
    k,
    y,
    I,
    o,
    u,
    l,
    a
  ];
}
class rl extends se {
  constructor(e) {
    super(), ie(this, e, Am, Cm, X, {
      sideOffset: 13,
      transition: 0,
      transitionConfig: 1,
      inTransition: 2,
      inTransitionConfig: 3,
      outTransition: 4,
      outTransitionConfig: 5,
      asChild: 6
    });
  }
}
const Em = (t) => ({ builder: t & /*$trigger*/
2 }), ci = (t) => ({ builder: (
  /*builder*/
  t[7]
) }), Tm = (t) => ({ builder: t & /*$trigger*/
2 }), fi = (t) => ({ builder: (
  /*$trigger*/
  t[1]
) });
function Sm(t) {
  const e = t.slice(), n = (
    /*$trigger*/
    e[1]
  );
  return e[7] = n, e;
}
function Rm(t) {
  let e, n, r, o;
  const i = (
    /*#slots*/
    t[6].default
  ), s = x(
    i,
    t,
    /*$$scope*/
    t[5],
    ci
  );
  let a = [
    /*builder*/
    t[7],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let u = 0; u < a.length; u += 1)
    l = C(l, a[u]);
  return {
    c() {
      e = me("button"), s && s.c(), U(e, l);
    },
    m(u, c) {
      R(u, e, c), s && s.m(e, null), e.autofocus && e.focus(), n = !0, r || (o = [
        ot(
          /*builder*/
          t[7].action(e)
        ),
        oe(
          e,
          "m-keydown",
          /*dispatch*/
          t[3]
        ),
        oe(
          e,
          "m-pointerdown",
          /*dispatch*/
          t[3]
        )
      ], r = !0);
    },
    p(u, c) {
      s && s.p && (!n || c & /*$$scope, $trigger*/
      34) && te(
        s,
        i,
        u,
        /*$$scope*/
        u[5],
        n ? ee(
          i,
          /*$$scope*/
          u[5],
          c,
          Em
        ) : ne(
          /*$$scope*/
          u[5]
        ),
        ci
      ), U(e, l = Y(a, [
        c & /*$trigger*/
        2 && /*builder*/
        u[7],
        c & /*$$restProps*/
        16 && /*$$restProps*/
        u[4]
      ]));
    },
    i(u) {
      n || (g(s, u), n = !0);
    },
    o(u) {
      _(s, u), n = !1;
    },
    d(u) {
      u && S(e), s && s.d(u), r = !1, He(o);
    }
  };
}
function Om(t) {
  let e;
  const n = (
    /*#slots*/
    t[6].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[5],
    fi
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope, $trigger*/
      34) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[5],
        e ? ee(
          n,
          /*$$scope*/
          o[5],
          i,
          Tm
        ) : ne(
          /*$$scope*/
          o[5]
        ),
        fi
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Im(t) {
  let e, n, r, o;
  const i = [Om, Rm], s = [];
  function a(u, c) {
    return (
      /*asChild*/
      u[0] ? 0 : 1
    );
  }
  function l(u, c) {
    return c === 1 ? Sm(u) : u;
  }
  return e = a(t), n = s[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ce();
    },
    m(u, c) {
      s[e].m(u, c), R(u, r, c), o = !0;
    },
    p(u, [c]) {
      let f = e;
      e = a(u), e === f ? s[e].p(l(u, e), c) : (Ie(), _(s[f], 1, 1, () => {
        s[f] = null;
      }), Ne(), n = s[e], n ? n.p(l(u, e), c) : (n = s[e] = i[e](l(u, e)), n.c()), g(n, 1), n.m(r.parentNode, r));
    },
    i(u) {
      o || (g(n), o = !0);
    },
    o(u) {
      _(n), o = !1;
    },
    d(u) {
      u && S(r), s[e].d(u);
    }
  };
}
function Nm(t, e, n) {
  const r = ["asChild"];
  let o = B(e, r), i, { $$slots: s = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const { elements: { trigger: u } } = Ct.get();
  De(t, u, (f) => n(1, i = f));
  const c = En();
  return t.$$set = (f) => {
    e = C(C({}, e), ue(f)), n(4, o = B(e, r)), "asChild" in f && n(0, l = f.asChild), "$$scope" in f && n(5, a = f.$$scope);
  }, [l, i, u, c, o, a, s];
}
class ol extends se {
  constructor(e) {
    super(), ie(this, e, Nm, Im, X, { asChild: 0 });
  }
}
const Pm = (t) => ({ builder: t & /*$separator*/
2 }), di = (t) => ({ builder: (
  /*$separator*/
  t[1]
) });
function $m(t) {
  let e, n, r, o = [
    /*$separator*/
    t[1],
    /*$$restProps*/
    t[3]
  ], i = {};
  for (let s = 0; s < o.length; s += 1)
    i = C(i, o[s]);
  return {
    c() {
      e = me("div"), U(e, i);
    },
    m(s, a) {
      R(s, e, a), n || (r = ot(
        /*$separator*/
        t[1].action(e)
      ), n = !0);
    },
    p(s, a) {
      U(e, i = Y(o, [
        a & /*$separator*/
        2 && /*$separator*/
        s[1],
        a & /*$$restProps*/
        8 && /*$$restProps*/
        s[3]
      ]));
    },
    i: $e,
    o: $e,
    d(s) {
      s && S(e), n = !1, r();
    }
  };
}
function Fm(t) {
  let e;
  const n = (
    /*#slots*/
    t[5].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[4],
    di
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope, $separator*/
      18) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[4],
        e ? ee(
          n,
          /*$$scope*/
          o[4],
          i,
          Pm
        ) : ne(
          /*$$scope*/
          o[4]
        ),
        di
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Mm(t) {
  let e, n, r, o;
  const i = [Fm, $m], s = [];
  function a(l, u) {
    return (
      /*asChild*/
      l[0] ? 0 : 1
    );
  }
  return e = a(t), n = s[e] = i[e](t), {
    c() {
      n.c(), r = Ce();
    },
    m(l, u) {
      s[e].m(l, u), R(l, r, u), o = !0;
    },
    p(l, [u]) {
      let c = e;
      e = a(l), e === c ? s[e].p(l, u) : (Ie(), _(s[c], 1, 1, () => {
        s[c] = null;
      }), Ne(), n = s[e], n ? n.p(l, u) : (n = s[e] = i[e](l), n.c()), g(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      o || (g(n), o = !0);
    },
    o(l) {
      _(n), o = !1;
    },
    d(l) {
      l && S(r), s[e].d(l);
    }
  };
}
function Dm(t, e, n) {
  const r = ["asChild"];
  let o = B(e, r), i, { $$slots: s = {}, $$scope: a } = e, { asChild: l = !1 } = e;
  const u = Ct.get().elements.separator;
  return De(t, u, (c) => n(1, i = c)), t.$$set = (c) => {
    e = C(C({}, e), ue(c)), n(3, o = B(e, r)), "asChild" in c && n(0, l = c.asChild), "$$scope" in c && n(4, a = c.$$scope);
  }, [l, i, u, o, a, s];
}
class Lm extends se {
  constructor(e) {
    super(), ie(this, e, Dm, Mm, X, { asChild: 0 });
  }
}
const jm = (t) => ({ builder: t & /*$checkboxItem*/
2 }), mi = (t) => ({ builder: (
  /*builder*/
  t[12]
) }), zm = (t) => ({ builder: t & /*$checkboxItem*/
2 }), hi = (t) => ({ builder: (
  /*$checkboxItem*/
  t[1]
) });
function Bm(t) {
  const e = t.slice(), n = (
    /*$checkboxItem*/
    e[1]
  );
  return e[12] = n, e;
}
function Wm(t) {
  let e, n, r, o;
  const i = (
    /*#slots*/
    t[9].default
  ), s = x(
    i,
    t,
    /*$$scope*/
    t[8],
    mi
  );
  let a = [
    /*builder*/
    t[12],
    /*$$restProps*/
    t[4]
  ], l = {};
  for (let u = 0; u < a.length; u += 1)
    l = C(l, a[u]);
  return {
    c() {
      e = me("div"), s && s.c(), U(e, l);
    },
    m(u, c) {
      R(u, e, c), s && s.m(e, null), n = !0, r || (o = [
        ot(
          /*builder*/
          t[12].action(e)
        ),
        oe(
          e,
          "m-click",
          /*dispatch*/
          t[3]
        ),
        oe(
          e,
          "m-focusin",
          /*dispatch*/
          t[3]
        ),
        oe(
          e,
          "m-focusout",
          /*dispatch*/
          t[3]
        ),
        oe(
          e,
          "m-keydown",
          /*dispatch*/
          t[3]
        ),
        oe(
          e,
          "m-pointerdown",
          /*dispatch*/
          t[3]
        ),
        oe(
          e,
          "m-pointerleave",
          /*dispatch*/
          t[3]
        ),
        oe(
          e,
          "m-pointermove",
          /*dispatch*/
          t[3]
        )
      ], r = !0);
    },
    p(u, c) {
      s && s.p && (!n || c & /*$$scope, $checkboxItem*/
      258) && te(
        s,
        i,
        u,
        /*$$scope*/
        u[8],
        n ? ee(
          i,
          /*$$scope*/
          u[8],
          c,
          jm
        ) : ne(
          /*$$scope*/
          u[8]
        ),
        mi
      ), U(e, l = Y(a, [
        c & /*$checkboxItem*/
        2 && /*builder*/
        u[12],
        c & /*$$restProps*/
        16 && /*$$restProps*/
        u[4]
      ]));
    },
    i(u) {
      n || (g(s, u), n = !0);
    },
    o(u) {
      _(s, u), n = !1;
    },
    d(u) {
      u && S(e), s && s.d(u), r = !1, He(o);
    }
  };
}
function Gm(t) {
  let e;
  const n = (
    /*#slots*/
    t[9].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[8],
    hi
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope, $checkboxItem*/
      258) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[8],
        e ? ee(
          n,
          /*$$scope*/
          o[8],
          i,
          zm
        ) : ne(
          /*$$scope*/
          o[8]
        ),
        hi
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Vm(t) {
  let e, n, r, o;
  const i = [Gm, Wm], s = [];
  function a(u, c) {
    return (
      /*asChild*/
      u[0] ? 0 : 1
    );
  }
  function l(u, c) {
    return c === 1 ? Bm(u) : u;
  }
  return e = a(t), n = s[e] = i[e](l(t, e)), {
    c() {
      n.c(), r = Ce();
    },
    m(u, c) {
      s[e].m(u, c), R(u, r, c), o = !0;
    },
    p(u, [c]) {
      let f = e;
      e = a(u), e === f ? s[e].p(l(u, e), c) : (Ie(), _(s[f], 1, 1, () => {
        s[f] = null;
      }), Ne(), n = s[e], n ? n.p(l(u, e), c) : (n = s[e] = i[e](l(u, e)), n.c()), g(n, 1), n.m(r.parentNode, r));
    },
    i(u) {
      o || (g(n), o = !0);
    },
    o(u) {
      _(n), o = !1;
    },
    d(u) {
      u && S(r), s[e].d(u);
    }
  };
}
function Hm(t, e, n) {
  const r = ["checked", "onCheckedChange", "disabled", "asChild"];
  let o = B(e, r), i, { $$slots: s = {}, $$scope: a } = e, { checked: l = void 0 } = e, { onCheckedChange: u = void 0 } = e, { disabled: c = void 0 } = e, { asChild: f = !1 } = e;
  const { elements: { checkboxItem: m }, states: { checked: d }, updateOption: h } = Ct.setCheckboxItem({
    disabled: c,
    defaultChecked: l,
    onCheckedChange: ({ next: p }) => (u == null || u(p), n(5, l = p), p)
  });
  De(t, m, (p) => n(1, i = p));
  const b = En();
  return t.$$set = (p) => {
    e = C(C({}, e), ue(p)), n(4, o = B(e, r)), "checked" in p && n(5, l = p.checked), "onCheckedChange" in p && n(6, u = p.onCheckedChange), "disabled" in p && n(7, c = p.disabled), "asChild" in p && n(0, f = p.asChild), "$$scope" in p && n(8, a = p.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*checked*/
    32 && l !== void 0 && d.set(l), t.$$.dirty & /*disabled*/
    128 && h("disabled", c);
  }, [
    f,
    i,
    m,
    b,
    o,
    l,
    u,
    c,
    a,
    s
  ];
}
class Km extends se {
  constructor(e) {
    super(), ie(this, e, Hm, Vm, X, {
      checked: 5,
      onCheckedChange: 6,
      disabled: 7,
      asChild: 0
    });
  }
}
const Um = (t) => ({ checked: t & /*$checked*/
1 }), pi = (t) => ({ checked: (
  /*$checked*/
  t[0]
) });
function bi(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[3],
    pi
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope, $checked*/
      9) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[3],
        e ? ee(
          n,
          /*$$scope*/
          o[3],
          i,
          Um
        ) : ne(
          /*$$scope*/
          o[3]
        ),
        pi
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function qm(t) {
  let e, n, r = (
    /*$checked*/
    t[0] && bi(t)
  ), o = [
    /*$$restProps*/
    t[2]
  ], i = {};
  for (let s = 0; s < o.length; s += 1)
    i = C(i, o[s]);
  return {
    c() {
      e = me("div"), r && r.c(), U(e, i);
    },
    m(s, a) {
      R(s, e, a), r && r.m(e, null), n = !0;
    },
    p(s, [a]) {
      /*$checked*/
      s[0] ? r ? (r.p(s, a), a & /*$checked*/
      1 && g(r, 1)) : (r = bi(s), r.c(), g(r, 1), r.m(e, null)) : r && (Ie(), _(r, 1, 1, () => {
        r = null;
      }), Ne()), U(e, i = Y(o, [a & /*$$restProps*/
      4 && /*$$restProps*/
      s[2]]));
    },
    i(s) {
      n || (g(r), n = !0);
    },
    o(s) {
      _(r), n = !1;
    },
    d(s) {
      s && S(e), r && r.d();
    }
  };
}
function Xm(t, e, n) {
  const r = [];
  let o = B(e, r), i, { $$slots: s = {}, $$scope: a } = e;
  const l = Ct.getCheckboxIndicator();
  return De(t, l, (u) => n(0, i = u)), t.$$set = (u) => {
    e = C(C({}, e), ue(u)), n(2, o = B(e, r)), "$$scope" in u && n(3, a = u.$$scope);
  }, [i, l, o, a, s];
}
class Ym extends se {
  constructor(e) {
    super(), ie(this, e, Xm, qm, X, {});
  }
}
function Zm(t) {
  let e;
  const n = (
    /*#slots*/
    t[3].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[11],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope*/
      2048) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[11],
        e ? ee(
          n,
          /*$$scope*/
          o[11],
          i,
          null
        ) : ne(
          /*$$scope*/
          o[11]
        ),
        null
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Jm(t) {
  let e, n;
  const r = [
    {
      class: re(
        "uikit-relative uikit-flex uikit-cursor-default uikit-select-none uikit-items-center uikit-rounded-sm uikit-px-2 uikit-py-1.5 uikit-text-sm uikit-outline-none data-[highlighted]:uikit-bg-accent data-[highlighted]:uikit-text-accent-foreground data-[disabled]:uikit-pointer-events-none data-[disabled]:uikit-opacity-50",
        /*inset*/
        t[1] && "uikit-pl-8",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[2]
  ];
  let o = {
    $$slots: { default: [Zm] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    o = C(o, r[i]);
  return e = new Gd({ props: o }), e.$on(
    "click",
    /*click_handler*/
    t[4]
  ), e.$on(
    "keydown",
    /*keydown_handler*/
    t[5]
  ), e.$on(
    "focusin",
    /*focusin_handler*/
    t[6]
  ), e.$on(
    "focusout",
    /*focusout_handler*/
    t[7]
  ), e.$on(
    "pointerdown",
    /*pointerdown_handler*/
    t[8]
  ), e.$on(
    "pointerleave",
    /*pointerleave_handler*/
    t[9]
  ), e.$on(
    "pointermove",
    /*pointermove_handler*/
    t[10]
  ), {
    c() {
      j(e.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*cn, inset, className, $$restProps*/
      7 ? Y(r, [
        s & /*cn, inset, className*/
        3 && {
          class: re(
            "uikit-relative uikit-flex uikit-cursor-default uikit-select-none uikit-items-center uikit-rounded-sm uikit-px-2 uikit-py-1.5 uikit-text-sm uikit-outline-none data-[highlighted]:uikit-bg-accent data-[highlighted]:uikit-text-accent-foreground data-[disabled]:uikit-pointer-events-none data-[disabled]:uikit-opacity-50",
            /*inset*/
            i[1] && "uikit-pl-8",
            /*className*/
            i[0]
          )
        },
        s & /*$$restProps*/
        4 && Ke(
          /*$$restProps*/
          i[2]
        )
      ]) : {};
      s & /*$$scope*/
      2048 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (g(e.$$.fragment, i), n = !0);
    },
    o(i) {
      _(e.$$.fragment, i), n = !1;
    },
    d(i) {
      L(e, i);
    }
  };
}
function Qm(t, e, n) {
  const r = ["class", "inset"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e, { inset: l = void 0 } = e;
  function u(p) {
    ce.call(this, t, p);
  }
  function c(p) {
    ce.call(this, t, p);
  }
  function f(p) {
    ce.call(this, t, p);
  }
  function m(p) {
    ce.call(this, t, p);
  }
  function d(p) {
    ce.call(this, t, p);
  }
  function h(p) {
    ce.call(this, t, p);
  }
  function b(p) {
    ce.call(this, t, p);
  }
  return t.$$set = (p) => {
    e = C(C({}, e), ue(p)), n(2, o = B(e, r)), "class" in p && n(0, a = p.class), "inset" in p && n(1, l = p.inset), "$$scope" in p && n(11, s = p.$$scope);
  }, [
    a,
    l,
    o,
    i,
    u,
    c,
    f,
    m,
    d,
    h,
    b,
    s
  ];
}
class zr extends se {
  constructor(e) {
    super(), ie(this, e, Qm, Jm, X, { class: 0, inset: 1 });
  }
}
function xm(t) {
  let e;
  const n = (
    /*#slots*/
    t[3].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[4],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope*/
      16) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[4],
        e ? ee(
          n,
          /*$$scope*/
          o[4],
          i,
          null
        ) : ne(
          /*$$scope*/
          o[4]
        ),
        null
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function eh(t) {
  let e, n;
  const r = [
    {
      class: re(
        "uikit-px-2 uikit-py-1.5 uikit-text-sm uikit-font-semibold",
        /*inset*/
        t[1] && "uikit-pl-8",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[2]
  ];
  let o = {
    $$slots: { default: [xm] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    o = C(o, r[i]);
  return e = new om({ props: o }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*cn, inset, className, $$restProps*/
      7 ? Y(r, [
        s & /*cn, inset, className*/
        3 && {
          class: re(
            "uikit-px-2 uikit-py-1.5 uikit-text-sm uikit-font-semibold",
            /*inset*/
            i[1] && "uikit-pl-8",
            /*className*/
            i[0]
          )
        },
        s & /*$$restProps*/
        4 && Ke(
          /*$$restProps*/
          i[2]
        )
      ]) : {};
      s & /*$$scope*/
      16 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (g(e.$$.fragment, i), n = !0);
    },
    o(i) {
      _(e.$$.fragment, i), n = !1;
    },
    d(i) {
      L(e, i);
    }
  };
}
function th(t, e, n) {
  const r = ["class", "inset"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e, { inset: l = void 0 } = e;
  return t.$$set = (u) => {
    e = C(C({}, e), ue(u)), n(2, o = B(e, r)), "class" in u && n(0, a = u.class), "inset" in u && n(1, l = u.inset), "$$scope" in u && n(4, s = u.$$scope);
  }, [a, l, o, i, s];
}
class nh extends se {
  constructor(e) {
    super(), ie(this, e, th, eh, X, { class: 0, inset: 1 });
  }
}
function rh(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope*/
      64) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[6],
        e ? ee(
          n,
          /*$$scope*/
          o[6],
          i,
          null
        ) : ne(
          /*$$scope*/
          o[6]
        ),
        null
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function oh(t) {
  let e, n;
  const r = [
    { transition: (
      /*transition*/
      t[1]
    ) },
    {
      transitionConfig: (
        /*transitionConfig*/
        t[2]
      )
    },
    {
      class: re(
        "uikit-z-50 uikit-min-w-[8rem] uikit-rounded-md uikit-border uikit-bg-popover uikit-p-1 uikit-text-popover-foreground uikit-shadow-md focus:uikit-outline-none",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[3]
  ];
  let o = {
    $$slots: { default: [rh] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    o = C(o, r[i]);
  return e = new rl({
    props: o
  }), e.$on(
    "keydown",
    /*keydown_handler*/
    t[5]
  ), {
    c() {
      j(e.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*transition, transitionConfig, cn, className, $$restProps*/
      15 ? Y(r, [
        s & /*transition*/
        2 && { transition: (
          /*transition*/
          i[1]
        ) },
        s & /*transitionConfig*/
        4 && {
          transitionConfig: (
            /*transitionConfig*/
            i[2]
          )
        },
        s & /*cn, className*/
        1 && {
          class: re(
            "uikit-z-50 uikit-min-w-[8rem] uikit-rounded-md uikit-border uikit-bg-popover uikit-p-1 uikit-text-popover-foreground uikit-shadow-md focus:uikit-outline-none",
            /*className*/
            i[0]
          )
        },
        s & /*$$restProps*/
        8 && Ke(
          /*$$restProps*/
          i[3]
        )
      ]) : {};
      s & /*$$scope*/
      64 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (g(e.$$.fragment, i), n = !0);
    },
    o(i) {
      _(e.$$.fragment, i), n = !1;
    },
    d(i) {
      L(e, i);
    }
  };
}
function ih(t, e, n) {
  const r = ["class", "transition", "transitionConfig"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e, { transition: l = os } = e, { transitionConfig: u = void 0 } = e;
  function c(f) {
    ce.call(this, t, f);
  }
  return t.$$set = (f) => {
    e = C(C({}, e), ue(f)), n(3, o = B(e, r)), "class" in f && n(0, a = f.class), "transition" in f && n(1, l = f.transition), "transitionConfig" in f && n(2, u = f.transitionConfig), "$$scope" in f && n(6, s = f.$$scope);
  }, [
    a,
    l,
    u,
    o,
    i,
    c,
    s
  ];
}
let sh = class extends se {
  constructor(e) {
    super(), ie(this, e, ih, oh, X, {
      class: 0,
      transition: 1,
      transitionConfig: 2
    });
  }
};
const gi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function _i(t, e, n) {
  const r = t.slice();
  return r[10] = e[n][0], r[11] = e[n][1], r;
}
function Tr(t) {
  let e, n = [
    /*attrs*/
    t[11]
  ], r = {};
  for (let o = 0; o < n.length; o += 1)
    r = C(r, n[o]);
  return {
    c() {
      e = Gi(
        /*tag*/
        t[10]
      ), zn(e, r);
    },
    m(o, i) {
      R(o, e, i);
    },
    p(o, i) {
      zn(e, r = Y(n, [i & /*iconNode*/
      32 && /*attrs*/
      o[11]]));
    },
    d(o) {
      o && S(e);
    }
  };
}
function vi(t) {
  let e = (
    /*tag*/
    t[10]
  ), n, r = (
    /*tag*/
    t[10] && Tr(t)
  );
  return {
    c() {
      r && r.c(), n = Ce();
    },
    m(o, i) {
      r && r.m(o, i), R(o, n, i);
    },
    p(o, i) {
      /*tag*/
      o[10] ? e ? X(
        e,
        /*tag*/
        o[10]
      ) ? (r.d(1), r = Tr(o), e = /*tag*/
      o[10], r.c(), r.m(n.parentNode, n)) : r.p(o, i) : (r = Tr(o), e = /*tag*/
      o[10], r.c(), r.m(n.parentNode, n)) : e && (r.d(1), r = null, e = /*tag*/
      o[10]);
    },
    d(o) {
      o && S(n), r && r.d(o);
    }
  };
}
function lh(t) {
  let e, n, r, o, i, s = qe(
    /*iconNode*/
    t[5]
  ), a = [];
  for (let m = 0; m < s.length; m += 1)
    a[m] = vi(_i(t, s, m));
  const l = (
    /*#slots*/
    t[9].default
  ), u = x(
    l,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let c = [
    gi,
    /*$$restProps*/
    t[6],
    { width: (
      /*size*/
      t[2]
    ) },
    { height: (
      /*size*/
      t[2]
    ) },
    { stroke: (
      /*color*/
      t[1]
    ) },
    {
      "stroke-width": r = /*absoluteStrokeWidth*/
      t[4] ? Number(
        /*strokeWidth*/
        t[3]
      ) * 24 / Number(
        /*size*/
        t[2]
      ) : (
        /*strokeWidth*/
        t[3]
      )
    },
    {
      class: o = `lucide-icon lucide lucide-${/*name*/
      t[0]} ${/*$$props*/
      t[7].class ?? ""}`
    }
  ], f = {};
  for (let m = 0; m < c.length; m += 1)
    f = C(f, c[m]);
  return {
    c() {
      e = Gi("svg");
      for (let m = 0; m < a.length; m += 1)
        a[m].c();
      n = Ce(), u && u.c(), zn(e, f);
    },
    m(m, d) {
      R(m, e, d);
      for (let h = 0; h < a.length; h += 1)
        a[h] && a[h].m(e, null);
      Ye(e, n), u && u.m(e, null), i = !0;
    },
    p(m, [d]) {
      if (d & /*iconNode*/
      32) {
        s = qe(
          /*iconNode*/
          m[5]
        );
        let h;
        for (h = 0; h < s.length; h += 1) {
          const b = _i(m, s, h);
          a[h] ? a[h].p(b, d) : (a[h] = vi(b), a[h].c(), a[h].m(e, n));
        }
        for (; h < a.length; h += 1)
          a[h].d(1);
        a.length = s.length;
      }
      u && u.p && (!i || d & /*$$scope*/
      256) && te(
        u,
        l,
        m,
        /*$$scope*/
        m[8],
        i ? ee(
          l,
          /*$$scope*/
          m[8],
          d,
          null
        ) : ne(
          /*$$scope*/
          m[8]
        ),
        null
      ), zn(e, f = Y(c, [
        gi,
        d & /*$$restProps*/
        64 && /*$$restProps*/
        m[6],
        (!i || d & /*size*/
        4) && { width: (
          /*size*/
          m[2]
        ) },
        (!i || d & /*size*/
        4) && { height: (
          /*size*/
          m[2]
        ) },
        (!i || d & /*color*/
        2) && { stroke: (
          /*color*/
          m[1]
        ) },
        (!i || d & /*absoluteStrokeWidth, strokeWidth, size*/
        28 && r !== (r = /*absoluteStrokeWidth*/
        m[4] ? Number(
          /*strokeWidth*/
          m[3]
        ) * 24 / Number(
          /*size*/
          m[2]
        ) : (
          /*strokeWidth*/
          m[3]
        ))) && { "stroke-width": r },
        (!i || d & /*name, $$props*/
        129 && o !== (o = `lucide-icon lucide lucide-${/*name*/
        m[0]} ${/*$$props*/
        m[7].class ?? ""}`)) && { class: o }
      ]));
    },
    i(m) {
      i || (g(u, m), i = !0);
    },
    o(m) {
      _(u, m), i = !1;
    },
    d(m) {
      m && S(e), on(a, m), u && u.d(m);
    }
  };
}
function ah(t, e, n) {
  const r = ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { name: a } = e, { color: l = "currentColor" } = e, { size: u = 24 } = e, { strokeWidth: c = 2 } = e, { absoluteStrokeWidth: f = !1 } = e, { iconNode: m } = e;
  return t.$$set = (d) => {
    n(7, e = C(C({}, e), ue(d))), n(6, o = B(e, r)), "name" in d && n(0, a = d.name), "color" in d && n(1, l = d.color), "size" in d && n(2, u = d.size), "strokeWidth" in d && n(3, c = d.strokeWidth), "absoluteStrokeWidth" in d && n(4, f = d.absoluteStrokeWidth), "iconNode" in d && n(5, m = d.iconNode), "$$scope" in d && n(8, s = d.$$scope);
  }, e = ue(e), [
    a,
    l,
    u,
    c,
    f,
    m,
    o,
    e,
    s,
    i
  ];
}
class uh extends se {
  constructor(e) {
    super(), ie(this, e, ah, lh, X, {
      name: 0,
      color: 1,
      size: 2,
      strokeWidth: 3,
      absoluteStrokeWidth: 4,
      iconNode: 5
    });
  }
}
const Tn = uh;
function ch(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope*/
      8) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[3],
        e ? ee(
          n,
          /*$$scope*/
          o[3],
          i,
          null
        ) : ne(
          /*$$scope*/
          o[3]
        ),
        null
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function fh(t) {
  let e, n;
  const r = [
    { name: "arrow-up-down" },
    /*$$props*/
    t[1],
    { iconNode: (
      /*iconNode*/
      t[0]
    ) }
  ];
  let o = {
    $$slots: { default: [ch] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    o = C(o, r[i]);
  return e = new Tn({ props: o }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*$$props, iconNode*/
      3 ? Y(r, [
        r[0],
        s & /*$$props*/
        2 && Ke(
          /*$$props*/
          i[1]
        ),
        s & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          i[0]
        ) }
      ]) : {};
      s & /*$$scope*/
      8 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (g(e.$$.fragment, i), n = !0);
    },
    o(i) {
      _(e.$$.fragment, i), n = !1;
    },
    d(i) {
      L(e, i);
    }
  };
}
function dh(t, e, n) {
  let { $$slots: r = {}, $$scope: o } = e;
  const i = [
    ["path", { d: "m21 16-4 4-4-4" }],
    ["path", { d: "M17 20V4" }],
    ["path", { d: "m3 8 4-4 4 4" }],
    ["path", { d: "M7 4v16" }]
  ];
  return t.$$set = (s) => {
    n(1, e = C(C({}, e), ue(s))), "$$scope" in s && n(3, o = s.$$scope);
  }, e = ue(e), [i, e, r, o];
}
class mh extends se {
  constructor(e) {
    super(), ie(this, e, dh, fh, X, {});
  }
}
const hh = mh;
function ph(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope*/
      8) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[3],
        e ? ee(
          n,
          /*$$scope*/
          o[3],
          i,
          null
        ) : ne(
          /*$$scope*/
          o[3]
        ),
        null
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function bh(t) {
  let e, n;
  const r = [
    { name: "check" },
    /*$$props*/
    t[1],
    { iconNode: (
      /*iconNode*/
      t[0]
    ) }
  ];
  let o = {
    $$slots: { default: [ph] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    o = C(o, r[i]);
  return e = new Tn({ props: o }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*$$props, iconNode*/
      3 ? Y(r, [
        r[0],
        s & /*$$props*/
        2 && Ke(
          /*$$props*/
          i[1]
        ),
        s & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          i[0]
        ) }
      ]) : {};
      s & /*$$scope*/
      8 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (g(e.$$.fragment, i), n = !0);
    },
    o(i) {
      _(e.$$.fragment, i), n = !1;
    },
    d(i) {
      L(e, i);
    }
  };
}
function gh(t, e, n) {
  let { $$slots: r = {}, $$scope: o } = e;
  const i = [["polyline", { points: "20 6 9 17 4 12" }]];
  return t.$$set = (s) => {
    n(1, e = C(C({}, e), ue(s))), "$$scope" in s && n(3, o = s.$$scope);
  }, e = ue(e), [i, e, r, o];
}
class _h extends se {
  constructor(e) {
    super(), ie(this, e, gh, bh, X, {});
  }
}
const il = _h;
function vh(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope*/
      8) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[3],
        e ? ee(
          n,
          /*$$scope*/
          o[3],
          i,
          null
        ) : ne(
          /*$$scope*/
          o[3]
        ),
        null
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function kh(t) {
  let e, n;
  const r = [
    { name: "chevron-down" },
    /*$$props*/
    t[1],
    { iconNode: (
      /*iconNode*/
      t[0]
    ) }
  ];
  let o = {
    $$slots: { default: [vh] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    o = C(o, r[i]);
  return e = new Tn({ props: o }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*$$props, iconNode*/
      3 ? Y(r, [
        r[0],
        s & /*$$props*/
        2 && Ke(
          /*$$props*/
          i[1]
        ),
        s & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          i[0]
        ) }
      ]) : {};
      s & /*$$scope*/
      8 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (g(e.$$.fragment, i), n = !0);
    },
    o(i) {
      _(e.$$.fragment, i), n = !1;
    },
    d(i) {
      L(e, i);
    }
  };
}
function wh(t, e, n) {
  let { $$slots: r = {}, $$scope: o } = e;
  const i = [["path", { d: "m6 9 6 6 6-6" }]];
  return t.$$set = (s) => {
    n(1, e = C(C({}, e), ue(s))), "$$scope" in s && n(3, o = s.$$scope);
  }, e = ue(e), [i, e, r, o];
}
class yh extends se {
  constructor(e) {
    super(), ie(this, e, wh, kh, X, {});
  }
}
const Ch = yh;
function Ah(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope*/
      8) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[3],
        e ? ee(
          n,
          /*$$scope*/
          o[3],
          i,
          null
        ) : ne(
          /*$$scope*/
          o[3]
        ),
        null
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Eh(t) {
  let e, n;
  const r = [
    { name: "minus" },
    /*$$props*/
    t[1],
    { iconNode: (
      /*iconNode*/
      t[0]
    ) }
  ];
  let o = {
    $$slots: { default: [Ah] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    o = C(o, r[i]);
  return e = new Tn({ props: o }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*$$props, iconNode*/
      3 ? Y(r, [
        r[0],
        s & /*$$props*/
        2 && Ke(
          /*$$props*/
          i[1]
        ),
        s & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          i[0]
        ) }
      ]) : {};
      s & /*$$scope*/
      8 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (g(e.$$.fragment, i), n = !0);
    },
    o(i) {
      _(e.$$.fragment, i), n = !1;
    },
    d(i) {
      L(e, i);
    }
  };
}
function Th(t, e, n) {
  let { $$slots: r = {}, $$scope: o } = e;
  const i = [["path", { d: "M5 12h14" }]];
  return t.$$set = (s) => {
    n(1, e = C(C({}, e), ue(s))), "$$scope" in s && n(3, o = s.$$scope);
  }, e = ue(e), [i, e, r, o];
}
class Sh extends se {
  constructor(e) {
    super(), ie(this, e, Th, Eh, X, {});
  }
}
const Rh = Sh;
function Oh(t) {
  let e;
  const n = (
    /*#slots*/
    t[2].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope*/
      8) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[3],
        e ? ee(
          n,
          /*$$scope*/
          o[3],
          i,
          null
        ) : ne(
          /*$$scope*/
          o[3]
        ),
        null
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Ih(t) {
  let e, n;
  const r = [
    { name: "more-horizontal" },
    /*$$props*/
    t[1],
    { iconNode: (
      /*iconNode*/
      t[0]
    ) }
  ];
  let o = {
    $$slots: { default: [Oh] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    o = C(o, r[i]);
  return e = new Tn({ props: o }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*$$props, iconNode*/
      3 ? Y(r, [
        r[0],
        s & /*$$props*/
        2 && Ke(
          /*$$props*/
          i[1]
        ),
        s & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          i[0]
        ) }
      ]) : {};
      s & /*$$scope*/
      8 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (g(e.$$.fragment, i), n = !0);
    },
    o(i) {
      _(e.$$.fragment, i), n = !1;
    },
    d(i) {
      L(e, i);
    }
  };
}
function Nh(t, e, n) {
  let { $$slots: r = {}, $$scope: o } = e;
  const i = [
    ["circle", { cx: "12", cy: "12", r: "1" }],
    ["circle", { cx: "19", cy: "12", r: "1" }],
    ["circle", { cx: "5", cy: "12", r: "1" }]
  ];
  return t.$$set = (s) => {
    n(1, e = C(C({}, e), ue(s))), "$$scope" in s && n(3, o = s.$$scope);
  }, e = ue(e), [i, e, r, o];
}
class Ph extends se {
  constructor(e) {
    super(), ie(this, e, Nh, Ih, X, {});
  }
}
const $h = Ph;
function Fh(t) {
  let e, n;
  const r = [
    {
      class: re(
        "uikit--mx-1 uikit-my-1 uikit-h-px uikit-bg-muted",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[1]
  ];
  let o = {};
  for (let i = 0; i < r.length; i += 1)
    o = C(o, r[i]);
  return e = new Lm({
    props: o
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*cn, className, $$restProps*/
      3 ? Y(r, [
        s & /*cn, className*/
        1 && {
          class: re(
            "uikit--mx-1 uikit-my-1 uikit-h-px uikit-bg-muted",
            /*className*/
            i[0]
          )
        },
        s & /*$$restProps*/
        2 && Ke(
          /*$$restProps*/
          i[1]
        )
      ]) : {};
      e.$set(a);
    },
    i(i) {
      n || (g(e.$$.fragment, i), n = !0);
    },
    o(i) {
      _(e.$$.fragment, i), n = !1;
    },
    d(i) {
      L(e, i);
    }
  };
}
function Mh(t, e, n) {
  const r = ["class"];
  let o = B(e, r), { class: i = void 0 } = e;
  return t.$$set = (s) => {
    e = C(C({}, e), ue(s)), n(1, o = B(e, r)), "class" in s && n(0, i = s.class);
  }, [i, o];
}
class Dh extends se {
  constructor(e) {
    super(), ie(this, e, Mh, Fh, X, { class: 0 });
  }
}
const Lh = nl, jh = ol, zh = Zd;
function Bh(t) {
  let e;
  const n = (
    /*#slots*/
    t[5].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[8],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope*/
      256) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[8],
        e ? ee(
          n,
          /*$$scope*/
          o[8],
          i,
          null
        ) : ne(
          /*$$scope*/
          o[8]
        ),
        null
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Wh(t) {
  let e, n;
  const r = [
    { builders: (
      /*builders*/
      t[3]
    ) },
    {
      class: re(Ci({
        variant: (
          /*variant*/
          t[1]
        ),
        size: (
          /*size*/
          t[2]
        ),
        className: (
          /*className*/
          t[0]
        )
      }))
    },
    /*$$restProps*/
    t[4]
  ];
  let o = {
    $$slots: { default: [Bh] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    o = C(o, r[i]);
  return e = new Xs({ props: o }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), e.$on(
    "keydown",
    /*keydown_handler*/
    t[7]
  ), {
    c() {
      j(e.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*builders, cn, buttonVariants, variant, size, className, $$restProps*/
      31 ? Y(r, [
        s & /*builders*/
        8 && { builders: (
          /*builders*/
          i[3]
        ) },
        s & /*cn, buttonVariants, variant, size, className*/
        7 && {
          class: re(Ci({
            variant: (
              /*variant*/
              i[1]
            ),
            size: (
              /*size*/
              i[2]
            ),
            className: (
              /*className*/
              i[0]
            )
          }))
        },
        s & /*$$restProps*/
        16 && Ke(
          /*$$restProps*/
          i[4]
        )
      ]) : {};
      s & /*$$scope*/
      256 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (g(e.$$.fragment, i), n = !0);
    },
    o(i) {
      _(e.$$.fragment, i), n = !1;
    },
    d(i) {
      L(e, i);
    }
  };
}
function Gh(t, e, n) {
  const r = ["class", "variant", "size", "builders"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e, { variant: l = "default" } = e, { size: u = "default" } = e, { builders: c = [] } = e;
  function f(d) {
    ce.call(this, t, d);
  }
  function m(d) {
    ce.call(this, t, d);
  }
  return t.$$set = (d) => {
    e = C(C({}, e), ue(d)), n(4, o = B(e, r)), "class" in d && n(0, a = d.class), "variant" in d && n(1, l = d.variant), "size" in d && n(2, u = d.size), "builders" in d && n(3, c = d.builders), "$$scope" in d && n(8, s = d.$$scope);
  }, [
    a,
    l,
    u,
    c,
    o,
    i,
    f,
    m,
    s
  ];
}
let Vh = class extends se {
  constructor(e) {
    super(), ie(this, e, Gh, Wh, X, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
};
var ki = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, Qe = (t) => !t || typeof t != "object" || Object.keys(t).length === 0, Hh = (t, e) => JSON.stringify(t) === JSON.stringify(e);
function sl(t, e) {
  t.forEach(function(n) {
    Array.isArray(n) ? sl(n, e) : e.push(n);
  });
}
function ll(t) {
  let e = [];
  return sl(t, e), e;
}
var Kh = (...t) => ll(t).filter(Boolean), al = (t, e) => {
  let n = {}, r = Object.keys(t), o = Object.keys(e);
  for (let i of r)
    if (o.includes(i)) {
      let s = t[i], a = e[i];
      typeof s == "object" && typeof a == "object" ? n[i] = al(s, a) : n[i] = a + " " + s;
    } else
      n[i] = t[i];
  for (let i of o)
    r.includes(i) || (n[i] = e[i]);
  return n;
}, wi = (t) => !t || typeof t != "string" ? t : t.replace(/\s+/g, " ").trim(), Uh = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, ul = (t) => t || void 0, tr = (...t) => ul(ll(t).filter(Boolean).join(" ")), Sr = null, nr = {}, Br = !1, hn = (...t) => (e) => e.twMerge ? ((!Sr || Br) && (Br = !1, Sr = Qe(nr) ? rs : sa(nr)), ul(Sr(tr(t)))) : tr(t), yi = (t, e) => {
  for (let n in e)
    t.hasOwnProperty(n) ? t[n] = tr(t[n], e[n]) : t[n] = e[n];
  return t;
}, cl = (t, e) => {
  let { extend: n = null, slots: r = {}, variants: o = {}, compoundVariants: i = [], compoundSlots: s = [], defaultVariants: a = {} } = t, l = { ...Uh, ...e }, u = n != null && n.base ? tr(n.base, t == null ? void 0 : t.base) : t == null ? void 0 : t.base, c = n != null && n.variants && !Qe(n.variants) ? al(o, n.variants) : o, f = n != null && n.defaultVariants && !Qe(n.defaultVariants) ? { ...n.defaultVariants, ...a } : a;
  !Qe(l.twMergeConfig) && !Hh(l.twMergeConfig, nr) && (Br = !0, nr = l.twMergeConfig);
  let m = Qe(r) ? {} : { base: t == null ? void 0 : t.base, ...r }, d = Qe(n == null ? void 0 : n.slots) ? m : yi(n == null ? void 0 : n.slots, Qe(m) ? { base: t == null ? void 0 : t.base } : m), h = (p) => {
    if (Qe(c) && Qe(r) && Qe(n == null ? void 0 : n.slots))
      return hn(u, p == null ? void 0 : p.class, p == null ? void 0 : p.className)(l);
    if (i && !Array.isArray(i))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof i}`);
    if (s && !Array.isArray(s))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
    let k = (w, v, E = [], P) => {
      let A = E;
      if (typeof v == "string")
        A = A.concat(wi(v).split(" ").map(($) => `${w}:${$}`));
      else if (Array.isArray(v))
        A = A.concat(v.reduce(($, W) => $.concat(`${w}:${W}`), []));
      else if (typeof v == "object" && typeof P == "string") {
        for (let $ in v)
          if (v.hasOwnProperty($) && $ === P) {
            let W = v[$];
            if (W && typeof W == "string") {
              let Q = wi(W);
              A[P] ? A[P] = A[P].concat(Q.split(" ").map((le) => `${w}:${le}`)) : A[P] = Q.split(" ").map((le) => `${w}:${le}`);
            } else
              Array.isArray(W) && W.length > 0 && (A[P] = W.reduce((Q, le) => Q.concat(`${w}:${le}`), []));
          }
      }
      return A;
    }, y = (w, v = c, E = null, P = null) => {
      var A;
      let $ = v[w];
      if (!$ || Qe($))
        return null;
      let W = (A = P == null ? void 0 : P[w]) != null ? A : p == null ? void 0 : p[w];
      if (W === null)
        return null;
      let Q = ki(W), le = Array.isArray(l.responsiveVariants) && l.responsiveVariants.length > 0 || l.responsiveVariants === !0, Re = f == null ? void 0 : f[w], Te = [];
      if (typeof Q == "object" && le)
        for (let [F, N] of Object.entries(Q)) {
          let fe = $[N];
          if (F === "initial") {
            Re = N;
            continue;
          }
          Array.isArray(l.responsiveVariants) && !l.responsiveVariants.includes(F) || (Te = k(F, fe, Te, E));
        }
      let Fe = $[Q] || $[ki(Re)];
      return typeof Te == "object" && typeof E == "string" && Te[E] ? yi(Te, Fe) : Te.length > 0 ? (Te.push(Fe), Te) : Fe;
    }, I = () => c ? Object.keys(c).map((w) => y(w, c)) : null, T = (w, v) => {
      if (!c || typeof c != "object")
        return null;
      let E = new Array();
      for (let P in c) {
        let A = y(P, c, w, v), $ = w === "base" && typeof A == "string" ? A : A && A[w];
        $ && (E[E.length] = $);
      }
      return E;
    }, q = {};
    for (let w in p)
      p[w] !== void 0 && (q[w] = p[w]);
    let M = (w, v) => {
      var E;
      let P = typeof (p == null ? void 0 : p[w]) == "object" ? { [w]: (E = p[w]) == null ? void 0 : E.initial } : {};
      return { ...f, ...q, ...P, ...v };
    }, G = (w = [], v) => {
      let E = [];
      for (let { class: P, className: A, ...$ } of w) {
        let W = !0;
        for (let [Q, le] of Object.entries($)) {
          let Re = M(Q, v);
          if (Array.isArray(le)) {
            if (!le.includes(Re[Q])) {
              W = !1;
              break;
            }
          } else if (Re[Q] !== le) {
            W = !1;
            break;
          }
        }
        W && (P && E.push(P), A && E.push(A));
      }
      return E;
    }, de = (w) => {
      let v = G(i, w), E = G(n == null ? void 0 : n.compoundVariants, w);
      return Kh(E, v);
    }, J = (w) => {
      let v = de(w);
      if (!Array.isArray(v))
        return v;
      let E = {};
      for (let P of v)
        if (typeof P == "string" && (E.base = hn(E.base, P)(l)), typeof P == "object")
          for (let [A, $] of Object.entries(P))
            E[A] = hn(E[A], $)(l);
      return E;
    }, K = (w) => {
      if (s.length < 1)
        return null;
      let v = {};
      for (let { slots: E = [], class: P, className: A, ...$ } of s) {
        if (!Qe($)) {
          let W = !0;
          for (let Q of Object.keys($)) {
            let le = M(Q, w)[Q];
            if (le === void 0 || le !== $[Q]) {
              W = !1;
              break;
            }
          }
          if (!W)
            continue;
        }
        for (let W of E)
          v[W] = v[W] || [], v[W].push([P, A]);
      }
      return v;
    };
    if (!Qe(r) || !Qe(n == null ? void 0 : n.slots)) {
      let w = {};
      if (typeof d == "object" && !Qe(d))
        for (let v of Object.keys(d))
          w[v] = (E) => {
            var P, A;
            return hn(d[v], T(v, E), ((P = J(E)) != null ? P : [])[v], ((A = K(E)) != null ? A : [])[v], E == null ? void 0 : E.class, E == null ? void 0 : E.className)(l);
          };
      return w;
    }
    return hn(u, I(), de(), p == null ? void 0 : p.class, p == null ? void 0 : p.className)(l);
  }, b = () => {
    if (!(!c || typeof c != "object"))
      return Object.keys(c);
  };
  return h.variantKeys = b(), h.extend = n, h.base = u, h.slots = d, h.variants = c, h.defaultVariants = f, h.compoundSlots = s, h.compoundVariants = i, h;
};
const Ci = cl({
  base: "uikit-inline-flex uikit-items-center uikit-justify-center uikit-rounded-md uikit-text-sm uikit-font-medium uikit-whitespace-nowrap uikit-ring-offset-background uikit-transition-colors focus-visible:uikit-outline-none focus-visible:uikit-ring-2 focus-visible:uikit-ring-ring focus-visible:uikit-ring-offset-2 disabled:uikit-pointer-events-none disabled:uikit-opacity-50",
  variants: {
    variant: {
      default: "uikit-bg-primary uikit-text-primary-foreground hover:uikit-bg-primary/90",
      destructive: "uikit-bg-destructive uikit-text-destructive-foreground hover:uikit-bg-destructive/90",
      outline: "uikit-border uikit-border-input uikit-bg-background hover:uikit-bg-accent hover:uikit-text-accent-foreground",
      secondary: "uikit-bg-secondary uikit-text-secondary-foreground hover:uikit-bg-secondary/80",
      ghost: "hover:uikit-bg-accent hover:uikit-text-accent-foreground",
      link: "uikit-text-primary uikit-underline-offset-4 hover:uikit-underline"
    },
    size: {
      default: "uikit-h-10 uikit-px-4 uikit-py-2",
      sm: "uikit-h-9 uikit-rounded-md uikit-px-3",
      lg: "uikit-h-11 uikit-rounded-md uikit-px-8",
      icon: "uikit-h-10 uikit-w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function qh(t) {
  let e, n, r, o;
  return r = new $h({ props: { class: "w-4 h-4" } }), {
    c() {
      e = me("span"), e.textContent = "Open menu", n = We(), j(r.$$.fragment), et(e, "class", "uikit-sr-only");
    },
    m(i, s) {
      R(i, e, s), R(i, n, s), D(r, i, s), o = !0;
    },
    p: $e,
    i(i) {
      o || (g(r.$$.fragment, i), o = !0);
    },
    o(i) {
      _(r.$$.fragment, i), o = !1;
    },
    d(i) {
      i && (S(e), S(n)), L(r, i);
    }
  };
}
function Xh(t) {
  let e, n;
  return e = new Vh({
    props: {
      variant: "ghost",
      builders: [
        /*builder*/
        t[2]
      ],
      size: "icon",
      class: "relative w-8 h-8 p-0",
      $$slots: { default: [qh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, o) {
      const i = {};
      o & /*builder*/
      4 && (i.builders = [
        /*builder*/
        r[2]
      ]), o & /*$$scope*/
      8 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Yh(t) {
  let e;
  return {
    c() {
      e = Ve("Actions");
    },
    m(n, r) {
      R(n, e, r);
    },
    d(n) {
      n && S(e);
    }
  };
}
function Zh(t) {
  let e;
  return {
    c() {
      e = Ve("Copy payment ID");
    },
    m(n, r) {
      R(n, e, r);
    },
    d(n) {
      n && S(e);
    }
  };
}
function Jh(t) {
  let e, n, r, o;
  return e = new nh({
    props: {
      $$slots: { default: [Yh] },
      $$scope: { ctx: t }
    }
  }), r = new zr({
    props: {
      $$slots: { default: [Zh] },
      $$scope: { ctx: t }
    }
  }), r.$on(
    "click",
    /*click_handler*/
    t[1]
  ), {
    c() {
      j(e.$$.fragment), n = We(), j(r.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), R(i, n, s), D(r, i, s), o = !0;
    },
    p(i, s) {
      const a = {};
      s & /*$$scope*/
      8 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
      const l = {};
      s & /*$$scope*/
      8 && (l.$$scope = { dirty: s, ctx: i }), r.$set(l);
    },
    i(i) {
      o || (g(e.$$.fragment, i), g(r.$$.fragment, i), o = !0);
    },
    o(i) {
      _(e.$$.fragment, i), _(r.$$.fragment, i), o = !1;
    },
    d(i) {
      i && S(n), L(e, i), L(r, i);
    }
  };
}
function Qh(t) {
  let e;
  return {
    c() {
      e = Ve("View customer");
    },
    m(n, r) {
      R(n, e, r);
    },
    d(n) {
      n && S(e);
    }
  };
}
function xh(t) {
  let e;
  return {
    c() {
      e = Ve("View payment details");
    },
    m(n, r) {
      R(n, e, r);
    },
    d(n) {
      n && S(e);
    }
  };
}
function ep(t) {
  let e, n, r, o, i, s, a, l;
  return e = new zh({
    props: {
      $$slots: { default: [Jh] },
      $$scope: { ctx: t }
    }
  }), r = new Dh({}), i = new zr({
    props: {
      $$slots: { default: [Qh] },
      $$scope: { ctx: t }
    }
  }), a = new zr({
    props: {
      $$slots: { default: [xh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = We(), j(r.$$.fragment), o = We(), j(i.$$.fragment), s = We(), j(a.$$.fragment);
    },
    m(u, c) {
      D(e, u, c), R(u, n, c), D(r, u, c), R(u, o, c), D(i, u, c), R(u, s, c), D(a, u, c), l = !0;
    },
    p(u, c) {
      const f = {};
      c & /*$$scope, id*/
      9 && (f.$$scope = { dirty: c, ctx: u }), e.$set(f);
      const m = {};
      c & /*$$scope*/
      8 && (m.$$scope = { dirty: c, ctx: u }), i.$set(m);
      const d = {};
      c & /*$$scope*/
      8 && (d.$$scope = { dirty: c, ctx: u }), a.$set(d);
    },
    i(u) {
      l || (g(e.$$.fragment, u), g(r.$$.fragment, u), g(i.$$.fragment, u), g(a.$$.fragment, u), l = !0);
    },
    o(u) {
      _(e.$$.fragment, u), _(r.$$.fragment, u), _(i.$$.fragment, u), _(a.$$.fragment, u), l = !1;
    },
    d(u) {
      u && (S(n), S(o), S(s)), L(e, u), L(r, u), L(i, u), L(a, u);
    }
  };
}
function tp(t) {
  let e, n, r, o;
  return e = new jh({
    props: {
      asChild: !0,
      $$slots: {
        default: [
          Xh,
          ({ builder: i }) => ({ 2: i }),
          ({ builder: i }) => i ? 4 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), r = new sh({
    props: {
      $$slots: { default: [ep] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = We(), j(r.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), R(i, n, s), D(r, i, s), o = !0;
    },
    p(i, s) {
      const a = {};
      s & /*$$scope, builder*/
      12 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
      const l = {};
      s & /*$$scope, id*/
      9 && (l.$$scope = { dirty: s, ctx: i }), r.$set(l);
    },
    i(i) {
      o || (g(e.$$.fragment, i), g(r.$$.fragment, i), o = !0);
    },
    o(i) {
      _(e.$$.fragment, i), _(r.$$.fragment, i), o = !1;
    },
    d(i) {
      i && S(n), L(e, i), L(r, i);
    }
  };
}
function np(t) {
  let e, n;
  return e = new Lh({
    props: {
      $$slots: { default: [tp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, [o]) {
      const i = {};
      o & /*$$scope, id*/
      9 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function rp(t, e, n) {
  let { id: r } = e;
  const o = () => navigator.clipboard.writeText(r);
  return t.$$set = (i) => {
    "id" in i && n(0, r = i.id);
  }, [r, o];
}
class op extends se {
  constructor(e) {
    super(), ie(this, e, rp, np, X, { id: 0 });
  }
}
function ip(t) {
  let e;
  const n = (
    /*#slots*/
    t[5].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[8],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope*/
      256) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[8],
        e ? ee(
          n,
          /*$$scope*/
          o[8],
          i,
          null
        ) : ne(
          /*$$scope*/
          o[8]
        ),
        null
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function sp(t) {
  let e, n;
  const r = [
    { builders: (
      /*builders*/
      t[3]
    ) },
    {
      class: re(Ai({
        variant: (
          /*variant*/
          t[1]
        ),
        size: (
          /*size*/
          t[2]
        ),
        className: (
          /*className*/
          t[0]
        )
      }))
    },
    /*$$restProps*/
    t[4]
  ];
  let o = {
    $$slots: { default: [ip] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    o = C(o, r[i]);
  return e = new Xs({ props: o }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), e.$on(
    "keydown",
    /*keydown_handler*/
    t[7]
  ), {
    c() {
      j(e.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*builders, cn, buttonVariants, variant, size, className, $$restProps*/
      31 ? Y(r, [
        s & /*builders*/
        8 && { builders: (
          /*builders*/
          i[3]
        ) },
        s & /*cn, buttonVariants, variant, size, className*/
        7 && {
          class: re(Ai({
            variant: (
              /*variant*/
              i[1]
            ),
            size: (
              /*size*/
              i[2]
            ),
            className: (
              /*className*/
              i[0]
            )
          }))
        },
        s & /*$$restProps*/
        16 && Ke(
          /*$$restProps*/
          i[4]
        )
      ]) : {};
      s & /*$$scope*/
      256 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (g(e.$$.fragment, i), n = !0);
    },
    o(i) {
      _(e.$$.fragment, i), n = !1;
    },
    d(i) {
      L(e, i);
    }
  };
}
function lp(t, e, n) {
  const r = ["class", "variant", "size", "builders"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e, { variant: l = "default" } = e, { size: u = "default" } = e, { builders: c = [] } = e;
  function f(d) {
    ce.call(this, t, d);
  }
  function m(d) {
    ce.call(this, t, d);
  }
  return t.$$set = (d) => {
    e = C(C({}, e), ue(d)), n(4, o = B(e, r)), "class" in d && n(0, a = d.class), "variant" in d && n(1, l = d.variant), "size" in d && n(2, u = d.size), "builders" in d && n(3, c = d.builders), "$$scope" in d && n(8, s = d.$$scope);
  }, [
    a,
    l,
    u,
    c,
    o,
    i,
    f,
    m,
    s
  ];
}
class rr extends se {
  constructor(e) {
    super(), ie(this, e, lp, sp, X, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
}
const Ai = cl({
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function ap(t) {
  let e;
  const n = (
    /*#slots*/
    t[4].default
  ), r = x(
    n,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(o, i) {
      r && r.m(o, i), e = !0;
    },
    p(o, i) {
      r && r.p && (!e || i & /*$$scope*/
      64) && te(
        r,
        n,
        o,
        /*$$scope*/
        o[6],
        e ? ee(
          n,
          /*$$scope*/
          o[6],
          i,
          null
        ) : ne(
          /*$$scope*/
          o[6]
        ),
        null
      );
    },
    i(o) {
      e || (g(r, o), e = !0);
    },
    o(o) {
      _(r, o), e = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function up(t) {
  let e, n;
  const r = [
    { transition: (
      /*transition*/
      t[1]
    ) },
    {
      transitionConfig: (
        /*transitionConfig*/
        t[2]
      )
    },
    {
      class: re(
        "uikit-z-50 uikit-min-w-[8rem] uikit-rounded-md uikit-border uikit-bg-popover uikit-p-1 uikit-text-popover-foreground uikit-shadow-md focus:uikit-outline-none",
        /*className*/
        t[0]
      )
    },
    /*$$restProps*/
    t[3]
  ];
  let o = {
    $$slots: { default: [ap] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < r.length; i += 1)
    o = C(o, r[i]);
  return e = new rl({
    props: o
  }), e.$on(
    "keydown",
    /*keydown_handler*/
    t[5]
  ), {
    c() {
      j(e.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*transition, transitionConfig, cn, className, $$restProps*/
      15 ? Y(r, [
        s & /*transition*/
        2 && { transition: (
          /*transition*/
          i[1]
        ) },
        s & /*transitionConfig*/
        4 && {
          transitionConfig: (
            /*transitionConfig*/
            i[2]
          )
        },
        s & /*cn, className*/
        1 && {
          class: re(
            "uikit-z-50 uikit-min-w-[8rem] uikit-rounded-md uikit-border uikit-bg-popover uikit-p-1 uikit-text-popover-foreground uikit-shadow-md focus:uikit-outline-none",
            /*className*/
            i[0]
          )
        },
        s & /*$$restProps*/
        8 && Ke(
          /*$$restProps*/
          i[3]
        )
      ]) : {};
      s & /*$$scope*/
      64 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      n || (g(e.$$.fragment, i), n = !0);
    },
    o(i) {
      _(e.$$.fragment, i), n = !1;
    },
    d(i) {
      L(e, i);
    }
  };
}
function cp(t, e, n) {
  const r = ["class", "transition", "transitionConfig"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e, { transition: l = os } = e, { transitionConfig: u = void 0 } = e;
  function c(f) {
    ce.call(this, t, f);
  }
  return t.$$set = (f) => {
    e = C(C({}, e), ue(f)), n(3, o = B(e, r)), "class" in f && n(0, a = f.class), "transition" in f && n(1, l = f.transition), "transitionConfig" in f && n(2, u = f.transitionConfig), "$$scope" in f && n(6, s = f.$$scope);
  }, [
    a,
    l,
    u,
    o,
    i,
    c,
    s
  ];
}
class fp extends se {
  constructor(e) {
    super(), ie(this, e, cp, up, X, {
      class: 0,
      transition: 1,
      transitionConfig: 2
    });
  }
}
function dp(t) {
  let e, n;
  return e = new il({ props: { class: "uikit-h-4 uikit-w-4" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p: $e,
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function mp(t) {
  let e, n, r, o;
  n = new Ym({
    props: {
      $$slots: { default: [dp] },
      $$scope: { ctx: t }
    }
  });
  const i = (
    /*#slots*/
    t[3].default
  ), s = x(
    i,
    t,
    /*$$scope*/
    t[12],
    null
  );
  return {
    c() {
      e = me("span"), j(n.$$.fragment), r = We(), s && s.c(), et(e, "class", "uikit-absolute uikit-left-2 uikit-flex uikit-h-3.5 uikit-w-3.5 uikit-items-center uikit-justify-center");
    },
    m(a, l) {
      R(a, e, l), D(n, e, null), R(a, r, l), s && s.m(a, l), o = !0;
    },
    p(a, l) {
      const u = {};
      l & /*$$scope*/
      4096 && (u.$$scope = { dirty: l, ctx: a }), n.$set(u), s && s.p && (!o || l & /*$$scope*/
      4096) && te(
        s,
        i,
        a,
        /*$$scope*/
        a[12],
        o ? ee(
          i,
          /*$$scope*/
          a[12],
          l,
          null
        ) : ne(
          /*$$scope*/
          a[12]
        ),
        null
      );
    },
    i(a) {
      o || (g(n.$$.fragment, a), g(s, a), o = !0);
    },
    o(a) {
      _(n.$$.fragment, a), _(s, a), o = !1;
    },
    d(a) {
      a && (S(e), S(r)), L(n), s && s.d(a);
    }
  };
}
function hp(t) {
  let e, n, r;
  const o = [
    {
      class: re(
        "uikit-relative uikit-flex uikit-cursor-default uikit-select-none uikit-items-center uikit-rounded-sm uikit-py-1.5 uikit-pl-8 uikit-pr-2 uikit-text-sm uikit-outline-none data-[highlighted]:uikit-bg-accent data-[highlighted]:uikit-text-accent-foreground data-[disabled]:uikit-pointer-events-none data-[disabled]:uikit-opacity-50",
        /*className*/
        t[1]
      )
    },
    /*$$restProps*/
    t[2]
  ];
  function i(a) {
    t[4](a);
  }
  let s = {
    $$slots: { default: [mp] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < o.length; a += 1)
    s = C(s, o[a]);
  return (
    /*checked*/
    t[0] !== void 0 && (s.checked = /*checked*/
    t[0]), e = new Km({
      props: s
    }), dt.push(() => Gt(e, "checked", i)), e.$on(
      "click",
      /*click_handler*/
      t[5]
    ), e.$on(
      "keydown",
      /*keydown_handler*/
      t[6]
    ), e.$on(
      "focusin",
      /*focusin_handler*/
      t[7]
    ), e.$on(
      "focusout",
      /*focusout_handler*/
      t[8]
    ), e.$on(
      "pointerdown",
      /*pointerdown_handler*/
      t[9]
    ), e.$on(
      "pointerleave",
      /*pointerleave_handler*/
      t[10]
    ), e.$on(
      "pointermove",
      /*pointermove_handler*/
      t[11]
    ), {
      c() {
        j(e.$$.fragment);
      },
      m(a, l) {
        D(e, a, l), r = !0;
      },
      p(a, [l]) {
        const u = l & /*cn, className, $$restProps*/
        6 ? Y(o, [
          l & /*cn, className*/
          2 && {
            class: re(
              "uikit-relative uikit-flex uikit-cursor-default uikit-select-none uikit-items-center uikit-rounded-sm uikit-py-1.5 uikit-pl-8 uikit-pr-2 uikit-text-sm uikit-outline-none data-[highlighted]:uikit-bg-accent data-[highlighted]:uikit-text-accent-foreground data-[disabled]:uikit-pointer-events-none data-[disabled]:uikit-opacity-50",
              /*className*/
              a[1]
            )
          },
          l & /*$$restProps*/
          4 && Ke(
            /*$$restProps*/
            a[2]
          )
        ]) : {};
        l & /*$$scope*/
        4096 && (u.$$scope = { dirty: l, ctx: a }), !n && l & /*checked*/
        1 && (n = !0, u.checked = /*checked*/
        a[0], Wt(() => n = !1)), e.$set(u);
      },
      i(a) {
        r || (g(e.$$.fragment, a), r = !0);
      },
      o(a) {
        _(e.$$.fragment, a), r = !1;
      },
      d(a) {
        L(e, a);
      }
    }
  );
}
function pp(t, e, n) {
  const r = ["class", "checked"];
  let o = B(e, r), { $$slots: i = {}, $$scope: s } = e, { class: a = void 0 } = e, { checked: l = void 0 } = e;
  function u(k) {
    l = k, n(0, l);
  }
  function c(k) {
    ce.call(this, t, k);
  }
  function f(k) {
    ce.call(this, t, k);
  }
  function m(k) {
    ce.call(this, t, k);
  }
  function d(k) {
    ce.call(this, t, k);
  }
  function h(k) {
    ce.call(this, t, k);
  }
  function b(k) {
    ce.call(this, t, k);
  }
  function p(k) {
    ce.call(this, t, k);
  }
  return t.$$set = (k) => {
    e = C(C({}, e), ue(k)), n(2, o = B(e, r)), "class" in k && n(1, a = k.class), "checked" in k && n(0, l = k.checked), "$$scope" in k && n(12, s = k.$$scope);
  }, [
    l,
    a,
    o,
    i,
    u,
    c,
    f,
    m,
    d,
    h,
    b,
    p,
    s
  ];
}
class bp extends se {
  constructor(e) {
    super(), ie(this, e, pp, hp, X, { class: 1, checked: 0 });
  }
}
const gp = nl, _p = ol;
function vp(t) {
  let e, n, r, o, i = [
    {
      class: n = re(
        "uikit-flex uikit-h-10 uikit-w-full uikit-rounded-md uikit-border uikit-border-input uikit-bg-transparent uikit-px-3 uikit-py-2 uikit-text-sm uikit-ring-offset-background file:uikit-border-0 file:uikit-bg-transparent file:uikit-text-sm file:uikit-font-medium placeholder:uikit-text-muted-foreground focus-visible:uikit-outline-none focus-visible:uikit-ring-2 focus-visible:uikit-ring-ring focus-visible:uikit-ring-offset-2 disabled:uikit-cursor-not-allowed disabled:uikit-opacity-50",
        /*className*/
        t[1]
      )
    },
    /*$$restProps*/
    t[2]
  ], s = {};
  for (let a = 0; a < i.length; a += 1)
    s = C(s, i[a]);
  return {
    c() {
      e = me("input"), U(e, s);
    },
    m(a, l) {
      R(a, e, l), e.autofocus && e.focus(), fo(
        e,
        /*value*/
        t[0]
      ), r || (o = [
        oe(
          e,
          "input",
          /*input_input_handler*/
          t[15]
        ),
        oe(
          e,
          "blur",
          /*blur_handler*/
          t[3]
        ),
        oe(
          e,
          "change",
          /*change_handler*/
          t[4]
        ),
        oe(
          e,
          "click",
          /*click_handler*/
          t[5]
        ),
        oe(
          e,
          "focus",
          /*focus_handler*/
          t[6]
        ),
        oe(
          e,
          "keydown",
          /*keydown_handler*/
          t[7]
        ),
        oe(
          e,
          "keypress",
          /*keypress_handler*/
          t[8]
        ),
        oe(
          e,
          "keyup",
          /*keyup_handler*/
          t[9]
        ),
        oe(
          e,
          "mouseover",
          /*mouseover_handler*/
          t[10]
        ),
        oe(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[11]
        ),
        oe(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[12]
        ),
        oe(
          e,
          "paste",
          /*paste_handler*/
          t[13]
        ),
        oe(
          e,
          "input",
          /*input_handler*/
          t[14]
        )
      ], r = !0);
    },
    p(a, [l]) {
      U(e, s = Y(i, [
        l & /*className*/
        2 && n !== (n = re(
          "uikit-flex uikit-h-10 uikit-w-full uikit-rounded-md uikit-border uikit-border-input uikit-bg-transparent uikit-px-3 uikit-py-2 uikit-text-sm uikit-ring-offset-background file:uikit-border-0 file:uikit-bg-transparent file:uikit-text-sm file:uikit-font-medium placeholder:uikit-text-muted-foreground focus-visible:uikit-outline-none focus-visible:uikit-ring-2 focus-visible:uikit-ring-ring focus-visible:uikit-ring-offset-2 disabled:uikit-cursor-not-allowed disabled:uikit-opacity-50",
          /*className*/
          a[1]
        )) && { class: n },
        l & /*$$restProps*/
        4 && /*$$restProps*/
        a[2]
      ])), l & /*value*/
      1 && e.value !== /*value*/
      a[0] && fo(
        e,
        /*value*/
        a[0]
      );
    },
    i: $e,
    o: $e,
    d(a) {
      a && S(e), r = !1, He(o);
    }
  };
}
function kp(t, e, n) {
  const r = ["class", "value"];
  let o = B(e, r), { class: i = void 0 } = e, { value: s = void 0 } = e;
  function a(T) {
    ce.call(this, t, T);
  }
  function l(T) {
    ce.call(this, t, T);
  }
  function u(T) {
    ce.call(this, t, T);
  }
  function c(T) {
    ce.call(this, t, T);
  }
  function f(T) {
    ce.call(this, t, T);
  }
  function m(T) {
    ce.call(this, t, T);
  }
  function d(T) {
    ce.call(this, t, T);
  }
  function h(T) {
    ce.call(this, t, T);
  }
  function b(T) {
    ce.call(this, t, T);
  }
  function p(T) {
    ce.call(this, t, T);
  }
  function k(T) {
    ce.call(this, t, T);
  }
  function y(T) {
    ce.call(this, t, T);
  }
  function I() {
    s = this.value, n(0, s);
  }
  return t.$$set = (T) => {
    e = C(C({}, e), ue(T)), n(2, o = B(e, r)), "class" in T && n(1, i = T.class), "value" in T && n(0, s = T.value);
  }, [
    s,
    i,
    o,
    a,
    l,
    u,
    c,
    f,
    m,
    d,
    h,
    b,
    p,
    k,
    y,
    I
  ];
}
class wp extends se {
  constructor(e) {
    super(), ie(this, e, kp, vp, X, { class: 1, value: 0 });
  }
}
function yp(t) {
  let e, n;
  return e = new Rh({ props: { class: "uikit-h-4 uikit-w-4" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Cp(t) {
  let e, n;
  return e = new il({ props: { class: "uikit-h-4 uikit-w-4" } }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Ap(t) {
  let e, n, r, o;
  const i = [Cp, yp], s = [];
  function a(l, u) {
    return (
      /*isChecked*/
      l[5] ? 0 : (
        /*isIndeterminate*/
        l[6] ? 1 : -1
      )
    );
  }
  return ~(e = a(t)) && (n = s[e] = i[e](t)), {
    c() {
      n && n.c(), r = Ce();
    },
    m(l, u) {
      ~e && s[e].m(l, u), R(l, r, u), o = !0;
    },
    p(l, u) {
      let c = e;
      e = a(l), e !== c && (n && (Ie(), _(s[c], 1, 1, () => {
        s[c] = null;
      }), Ne()), ~e ? (n = s[e], n || (n = s[e] = i[e](l), n.c()), g(n, 1), n.m(r.parentNode, r)) : n = null);
    },
    i(l) {
      o || (g(n), o = !0);
    },
    o(l) {
      _(n), o = !1;
    },
    d(l) {
      l && S(r), ~e && s[e].d(l);
    }
  };
}
function Ep(t) {
  let e, n;
  return e = new vd({
    props: {
      class: re("uikit-flex uikit-items-center uikit-justify-center uikit-text-current uikit-h-4 uikit-w-4"),
      $$slots: {
        default: [
          Ap,
          ({ isChecked: r, isIndeterminate: o }) => ({ 5: r, 6: o }),
          ({ isChecked: r, isIndeterminate: o }) => (r ? 32 : 0) | (o ? 64 : 0)
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, o) {
      const i = {};
      o & /*$$scope, isChecked, isIndeterminate*/
      224 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Tp(t) {
  let e, n, r;
  const o = [
    {
      class: re(
        "uikit-peer uikit-h-4 uikit-w-4 uikit-shrink-0 uikit-rounded-sm uikit-border uikit-border-primary uikit-ring-offset-background focus-visible:uikit-outline-none focus-visible:uikit-ring-2 focus-visible:uikit-ring-ring focus-visible:uikit-ring-offset-2 disabled:uikit-cursor-not-allowed disabled:uikit-opacity-50 data-[state=checked]:uikit-bg-primary data-[state=checked]uikit-text-primary-foreground",
        /*className*/
        t[1]
      )
    },
    /*$$restProps*/
    t[2]
  ];
  function i(a) {
    t[3](a);
  }
  let s = {
    $$slots: { default: [Ep] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < o.length; a += 1)
    s = C(s, o[a]);
  return (
    /*checked*/
    t[0] !== void 0 && (s.checked = /*checked*/
    t[0]), e = new pd({ props: s }), dt.push(() => Gt(e, "checked", i)), e.$on(
      "click",
      /*click_handler*/
      t[4]
    ), {
      c() {
        j(e.$$.fragment);
      },
      m(a, l) {
        D(e, a, l), r = !0;
      },
      p(a, [l]) {
        const u = l & /*cn, className, $$restProps*/
        6 ? Y(o, [
          l & /*cn, className*/
          2 && {
            class: re(
              "uikit-peer uikit-h-4 uikit-w-4 uikit-shrink-0 uikit-rounded-sm uikit-border uikit-border-primary uikit-ring-offset-background focus-visible:uikit-outline-none focus-visible:uikit-ring-2 focus-visible:uikit-ring-ring focus-visible:uikit-ring-offset-2 disabled:uikit-cursor-not-allowed disabled:uikit-opacity-50 data-[state=checked]:uikit-bg-primary data-[state=checked]uikit-text-primary-foreground",
              /*className*/
              a[1]
            )
          },
          l & /*$$restProps*/
          4 && Ke(
            /*$$restProps*/
            a[2]
          )
        ]) : {};
        l & /*$$scope*/
        128 && (u.$$scope = { dirty: l, ctx: a }), !n && l & /*checked*/
        1 && (n = !0, u.checked = /*checked*/
        a[0], Wt(() => n = !1)), e.$set(u);
      },
      i(a) {
        r || (g(e.$$.fragment, a), r = !0);
      },
      o(a) {
        _(e.$$.fragment, a), r = !1;
      },
      d(a) {
        L(e, a);
      }
    }
  );
}
function Sp(t, e, n) {
  const r = ["class", "checked"];
  let o = B(e, r), { class: i = void 0 } = e, { checked: s = !1 } = e;
  function a(u) {
    s = u, n(0, s);
  }
  function l(u) {
    ce.call(this, t, u);
  }
  return t.$$set = (u) => {
    e = C(C({}, e), ue(u)), n(2, o = B(e, r)), "class" in u && n(1, i = u.class), "checked" in u && n(0, s = u.checked);
  }, [
    s,
    i,
    o,
    a,
    l
  ];
}
class Rp extends se {
  constructor(e) {
    super(), ie(this, e, Sp, Tp, X, { class: 1, checked: 0 });
  }
}
function Op(t) {
  let e, n, r;
  function o(s) {
    t[2](s);
  }
  let i = {};
  return (
    /*$checked*/
    t[1] !== void 0 && (i.checked = /*$checked*/
    t[1]), e = new Rp({ props: i }), dt.push(() => Gt(e, "checked", o)), {
      c() {
        j(e.$$.fragment);
      },
      m(s, a) {
        D(e, s, a), r = !0;
      },
      p(s, [a]) {
        const l = {};
        !n && a & /*$checked*/
        2 && (n = !0, l.checked = /*$checked*/
        s[1], Wt(() => n = !1)), e.$set(l);
      },
      i(s) {
        r || (g(e.$$.fragment, s), r = !0);
      },
      o(s) {
        _(e.$$.fragment, s), r = !1;
      },
      d(s) {
        L(e, s);
      }
    }
  );
}
function Ip(t, e, n) {
  let r, o = $e, i = () => (o(), o = or(s, (l) => n(1, r = l)), s);
  t.$$.on_destroy.push(() => o());
  let { checked: s } = e;
  i();
  function a(l) {
    r = l, s.set(r);
  }
  return t.$$set = (l) => {
    "checked" in l && i(n(0, s = l.checked));
  }, [s, r, a];
}
class Ei extends se {
  constructor(e) {
    super(), ie(this, e, Ip, Op, X, { checked: 0 });
  }
}
function Ti(t, e, n) {
  const r = t.slice();
  return r[37] = e[n], r;
}
function Si(t, e, n) {
  const r = t.slice();
  return r[41] = e[n], r;
}
function Ri(t, e, n) {
  const r = t.slice();
  return r[45] = e[n], r;
}
function Oi(t, e, n) {
  const r = t.slice();
  return r[41] = e[n], r;
}
function Ii(t, e, n) {
  const r = t.slice();
  return r[51] = e[n], r[52] = e, r[53] = n, r;
}
function Np(t) {
  let e, n, r;
  return n = new Ch({ props: { class: "ml-2 h-4 w-4" } }), {
    c() {
      e = Ve("Columns "), j(n.$$.fragment);
    },
    m(o, i) {
      R(o, e, i), D(n, o, i), r = !0;
    },
    p: $e,
    i(o) {
      r || (g(n.$$.fragment, o), r = !0);
    },
    o(o) {
      _(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && S(e), L(n, o);
    }
  };
}
function Pp(t) {
  let e, n;
  return e = new rr({
    props: {
      variant: "outline",
      class: "ml-auto",
      builders: [
        /*builder*/
        t[54]
      ],
      $$slots: { default: [Np] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, o) {
      const i = {};
      o[1] & /*builder*/
      8388608 && (i.builders = [
        /*builder*/
        r[54]
      ]), o[1] & /*$$scope*/
      16777216 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Ni(t) {
  let e, n, r;
  function o(s) {
    t[28](
      s,
      /*col*/
      t[51]
    );
  }
  let i = {
    $$slots: { default: [$p] },
    $$scope: { ctx: t }
  };
  return (
    /*hideForId*/
    t[1][
      /*col*/
      t[51].id
    ] !== void 0 && (i.checked = /*hideForId*/
    t[1][
      /*col*/
      t[51].id
    ]), e = new bp({ props: i }), dt.push(() => Gt(e, "checked", o)), {
      c() {
        j(e.$$.fragment);
      },
      m(s, a) {
        D(e, s, a), r = !0;
      },
      p(s, a) {
        t = s;
        const l = {};
        a[1] & /*$$scope*/
        16777216 && (l.$$scope = { dirty: a, ctx: t }), !n && a[0] & /*hideForId, flatColumns*/
        131074 && (n = !0, l.checked = /*hideForId*/
        t[1][
          /*col*/
          t[51].id
        ], Wt(() => n = !1)), e.$set(l);
      },
      i(s) {
        r || (g(e.$$.fragment, s), r = !0);
      },
      o(s) {
        _(e.$$.fragment, s), r = !1;
      },
      d(s) {
        L(e, s);
      }
    }
  );
}
function $p(t) {
  let e = (
    /*col*/
    t[51].header + ""
  ), n, r;
  return {
    c() {
      n = Ve(e), r = We();
    },
    m(o, i) {
      R(o, n, i), R(o, r, i);
    },
    p: $e,
    d(o) {
      o && (S(n), S(r));
    }
  };
}
function Pi(t) {
  let e = (
    /*heads*/
    t[0].includes(
      /*col*/
      t[51].id
    )
  ), n, r, o = e && Ni(t);
  return {
    c() {
      o && o.c(), n = Ce();
    },
    m(i, s) {
      o && o.m(i, s), R(i, n, s), r = !0;
    },
    p(i, s) {
      s[0] & /*heads*/
      1 && (e = /*heads*/
      i[0].includes(
        /*col*/
        i[51].id
      )), e ? o ? (o.p(i, s), s[0] & /*heads*/
      1 && g(o, 1)) : (o = Ni(i), o.c(), g(o, 1), o.m(n.parentNode, n)) : o && (Ie(), _(o, 1, 1, () => {
        o = null;
      }), Ne());
    },
    i(i) {
      r || (g(o), r = !0);
    },
    o(i) {
      _(o), r = !1;
    },
    d(i) {
      i && S(n), o && o.d(i);
    }
  };
}
function Fp(t) {
  let e, n, r = qe(
    /*flatColumns*/
    t[17]
  ), o = [];
  for (let s = 0; s < r.length; s += 1)
    o[s] = Pi(Ii(t, r, s));
  const i = (s) => _(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      e = Ce();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      R(s, e, a), n = !0;
    },
    p(s, a) {
      if (a[0] & /*hideForId, flatColumns, heads*/
      131075) {
        r = qe(
          /*flatColumns*/
          s[17]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const u = Ii(s, r, l);
          o[l] ? (o[l].p(u, a), g(o[l], 1)) : (o[l] = Pi(u), o[l].c(), g(o[l], 1), o[l].m(e.parentNode, e));
        }
        for (Ie(), l = r.length; l < o.length; l += 1)
          i(l);
        Ne();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          g(o[a]);
        n = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        _(o[a]);
      n = !1;
    },
    d(s) {
      s && S(e), on(o, s);
    }
  };
}
function Mp(t) {
  let e, n, r, o;
  return e = new _p({
    props: {
      asChild: !0,
      $$slots: {
        default: [
          Pp,
          ({ builder: i }) => ({ 54: i }),
          ({ builder: i }) => [0, i ? 8388608 : 0]
        ]
      },
      $$scope: { ctx: t }
    }
  }), r = new fp({
    props: {
      $$slots: { default: [Fp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = We(), j(r.$$.fragment);
    },
    m(i, s) {
      D(e, i, s), R(i, n, s), D(r, i, s), o = !0;
    },
    p(i, s) {
      const a = {};
      s[1] & /*$$scope, builder*/
      25165824 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
      const l = {};
      s[0] & /*hideForId, heads*/
      3 | s[1] & /*$$scope*/
      16777216 && (l.$$scope = { dirty: s, ctx: i }), r.$set(l);
    },
    i(i) {
      o || (g(e.$$.fragment, i), g(r.$$.fragment, i), o = !0);
    },
    o(i) {
      _(e.$$.fragment, i), _(r.$$.fragment, i), o = !1;
    },
    d(i) {
      i && S(n), L(e, i), L(r, i);
    }
  };
}
function Dp(t) {
  let e, n;
  return e = new Ht({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, o) {
      const i = {};
      o[0] & /*$headerRows*/
      16 && (i.of = /*cell*/
      r[41].render()), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Lp(t) {
  let e, n;
  return e = new rr({
    props: {
      variant: "ghost",
      $$slots: { default: [zp] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    wt(
      /*props*/
      t[50].sort.toggle
    ) && t[50].sort.toggle.apply(this, arguments);
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, o) {
      t = r;
      const i = {};
      o[0] & /*$sortKeys, $headerRows*/
      48 | o[1] & /*$$scope*/
      16777216 && (i.$$scope = { dirty: o, ctx: t }), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function jp(t) {
  let e, n, r;
  return n = new Ht({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      e = me("div"), j(n.$$.fragment), et(e, "class", "text-right font-medium");
    },
    m(o, i) {
      R(o, e, i), D(n, e, null), r = !0;
    },
    p(o, i) {
      const s = {};
      i[0] & /*$headerRows*/
      16 && (s.of = /*cell*/
      o[41].render()), n.$set(s);
    },
    i(o) {
      r || (g(n.$$.fragment, o), r = !0);
    },
    o(o) {
      _(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && S(e), L(n);
    }
  };
}
function zp(t) {
  var i;
  let e, n, r, o;
  return e = new Ht({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), r = new hh({
    props: {
      class: re(
        /*$sortKeys*/
        ((i = t[5][0]) == null ? void 0 : i.id) === /*cell*/
        t[41].id && "text-foreground",
        "ml-2 h-4 w-4"
      )
    }
  }), {
    c() {
      j(e.$$.fragment), n = We(), j(r.$$.fragment);
    },
    m(s, a) {
      D(e, s, a), R(s, n, a), D(r, s, a), o = !0;
    },
    p(s, a) {
      var c;
      const l = {};
      a[0] & /*$headerRows*/
      16 && (l.of = /*cell*/
      s[41].render()), e.$set(l);
      const u = {};
      a[0] & /*$sortKeys, $headerRows*/
      48 && (u.class = re(
        /*$sortKeys*/
        ((c = s[5][0]) == null ? void 0 : c.id) === /*cell*/
        s[41].id && "text-foreground",
        "ml-2 h-4 w-4"
      )), r.$set(u);
    },
    i(s) {
      o || (g(e.$$.fragment, s), g(r.$$.fragment, s), o = !0);
    },
    o(s) {
      _(e.$$.fragment, s), _(r.$$.fragment, s), o = !1;
    },
    d(s) {
      s && S(n), L(e, s), L(r, s);
    }
  };
}
function Bp(t) {
  let e, n, r, o;
  const i = [jp, Lp, Dp], s = [];
  function a(l, u) {
    return (
      /*cell*/
      l[41].id === "amount" ? 0 : (
        /*cell*/
        l[41].id === "email" ? 1 : 2
      )
    );
  }
  return e = a(t), n = s[e] = i[e](t), {
    c() {
      n.c(), r = Ce();
    },
    m(l, u) {
      s[e].m(l, u), R(l, r, u), o = !0;
    },
    p(l, u) {
      let c = e;
      e = a(l), e === c ? s[e].p(l, u) : (Ie(), _(s[c], 1, 1, () => {
        s[c] = null;
      }), Ne(), n = s[e], n ? n.p(l, u) : (n = s[e] = i[e](l), n.c()), g(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      o || (g(n), o = !0);
    },
    o(l) {
      _(n), o = !1;
    },
    d(l) {
      l && S(r), s[e].d(l);
    }
  };
}
function Wp(t) {
  let e, n, r;
  const o = [
    /*attrs*/
    t[44],
    {
      class: re("[&:has([role=checkbox])]:pl-3")
    }
  ];
  let i = {
    $$slots: { default: [Bp] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < o.length; s += 1)
    i = C(i, o[s]);
  return e = new qu({ props: i }), {
    c() {
      j(e.$$.fragment), n = We();
    },
    m(s, a) {
      D(e, s, a), R(s, n, a), r = !0;
    },
    p(s, a) {
      const l = a[1] & /*attrs*/
      8192 ? Y(o, [
        a[1] & /*attrs*/
        8192 && Ke(
          /*attrs*/
          s[44]
        ),
        a & /*cn*/
        0 && {
          class: re("[&:has([role=checkbox])]:pl-3")
        }
      ]) : {};
      a[0] & /*$headerRows, $sortKeys*/
      48 | a[1] & /*$$scope, props*/
      17301504 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      r || (g(e.$$.fragment, s), r = !0);
    },
    o(s) {
      _(e.$$.fragment, s), r = !1;
    },
    d(s) {
      s && S(n), L(e, s);
    }
  };
}
function $i(t, e) {
  let n, r, o;
  return r = new yn({
    props: {
      attrs: (
        /*cell*/
        e[41].attrs()
      ),
      props: (
        /*cell*/
        e[41].props()
      ),
      $$slots: {
        default: [
          Wp,
          ({ attrs: i, props: s }) => ({ 44: i, 50: s }),
          ({ attrs: i, props: s }) => [0, (i ? 8192 : 0) | (s ? 524288 : 0)]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ce(), j(r.$$.fragment), this.first = n;
    },
    m(i, s) {
      R(i, n, s), D(r, i, s), o = !0;
    },
    p(i, s) {
      e = i;
      const a = {};
      s[0] & /*$headerRows*/
      16 && (a.attrs = /*cell*/
      e[41].attrs()), s[0] & /*$headerRows*/
      16 && (a.props = /*cell*/
      e[41].props()), s[0] & /*$headerRows, $sortKeys*/
      48 | s[1] & /*$$scope, attrs, props*/
      17309696 && (a.$$scope = { dirty: s, ctx: e }), r.$set(a);
    },
    i(i) {
      o || (g(r.$$.fragment, i), o = !0);
    },
    o(i) {
      _(r.$$.fragment, i), o = !1;
    },
    d(i) {
      i && S(n), L(r, i);
    }
  };
}
function Gp(t) {
  let e = [], n = /* @__PURE__ */ new Map(), r, o, i = qe(
    /*headerRow*/
    t[45].cells
  );
  const s = (a) => (
    /*cell*/
    a[41].id
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Oi(t, i, a), u = s(l);
    n.set(u, e[a] = $i(u, l));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      r = Ce();
    },
    m(a, l) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, l);
      R(a, r, l), o = !0;
    },
    p(a, l) {
      l[0] & /*$headerRows, $sortKeys*/
      48 | l[1] & /*attrs, props*/
      532480 && (i = qe(
        /*headerRow*/
        a[45].cells
      ), Ie(), e = sr(e, l, s, 1, a, i, n, r.parentNode, ir, $i, r, Oi), Ne());
    },
    i(a) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          g(e[l]);
        o = !0;
      }
    },
    o(a) {
      for (let l = 0; l < e.length; l += 1)
        _(e[l]);
      o = !1;
    },
    d(a) {
      a && S(r);
      for (let l = 0; l < e.length; l += 1)
        e[l].d(a);
    }
  };
}
function Vp(t) {
  let e, n, r;
  return e = new Cs({
    props: {
      $$slots: { default: [Gp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment), n = We();
    },
    m(o, i) {
      D(e, o, i), R(o, n, i), r = !0;
    },
    p(o, i) {
      const s = {};
      i[0] & /*$headerRows, $sortKeys*/
      48 | i[1] & /*$$scope*/
      16777216 && (s.$$scope = { dirty: i, ctx: o }), e.$set(s);
    },
    i(o) {
      r || (g(e.$$.fragment, o), r = !0);
    },
    o(o) {
      _(e.$$.fragment, o), r = !1;
    },
    d(o) {
      o && S(n), L(e, o);
    }
  };
}
function Fi(t) {
  let e, n;
  return e = new yn({
    props: {
      rowAttrs: (
        /*headerRow*/
        t[45].attrs()
      ),
      $$slots: { default: [Vp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, o) {
      const i = {};
      o[0] & /*$headerRows*/
      16 && (i.rowAttrs = /*headerRow*/
      r[45].attrs()), o[0] & /*$headerRows, $sortKeys*/
      48 | o[1] & /*$$scope*/
      16777216 && (i.$$scope = { dirty: o, ctx: r }), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Hp(t) {
  let e, n, r = qe(
    /*$headerRows*/
    t[4]
  ), o = [];
  for (let s = 0; s < r.length; s += 1)
    o[s] = Fi(Ri(t, r, s));
  const i = (s) => _(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      e = Ce();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      R(s, e, a), n = !0;
    },
    p(s, a) {
      if (a[0] & /*$headerRows, $sortKeys*/
      48 | a[1] & /*attrs, props*/
      532480) {
        r = qe(
          /*$headerRows*/
          s[4]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const u = Ri(s, r, l);
          o[l] ? (o[l].p(u, a), g(o[l], 1)) : (o[l] = Fi(u), o[l].c(), g(o[l], 1), o[l].m(e.parentNode, e));
        }
        for (Ie(), l = r.length; l < o.length; l += 1)
          i(l);
        Ne();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          g(o[a]);
        n = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        _(o[a]);
      n = !1;
    },
    d(s) {
      s && S(e), on(o, s);
    }
  };
}
function Kp(t) {
  let e, n;
  return e = new Ht({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      j(e.$$.fragment);
    },
    m(r, o) {
      D(e, r, o), n = !0;
    },
    p(r, o) {
      const i = {};
      o[0] & /*$pageRows*/
      128 && (i.of = /*cell*/
      r[41].render()), e.$set(i);
    },
    i(r) {
      n || (g(e.$$.fragment, r), n = !0);
    },
    o(r) {
      _(e.$$.fragment, r), n = !1;
    },
    d(r) {
      L(e, r);
    }
  };
}
function Up(t) {
  let e, n, r;
  return n = new Ht({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      e = me("div"), j(n.$$.fragment), et(e, "class", "capitalize");
    },
    m(o, i) {
      R(o, e, i), D(n, e, null), r = !0;
    },
    p(o, i) {
      const s = {};
      i[0] & /*$pageRows*/
      128 && (s.of = /*cell*/
      o[41].render()), n.$set(s);
    },
    i(o) {
      r || (g(n.$$.fragment, o), r = !0);
    },
    o(o) {
      _(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && S(e), L(n);
    }
  };
}
function qp(t) {
  let e, n, r;
  return n = new Ht({ props: { of: (
    /*cell*/
    t[41].render()
  ) } }), {
    c() {
      e = me("div"), j(n.$$.fragment), et(e, "class", "text-right font-medium");
    },
    m(o, i) {
      R(o, e, i), D(n, e, null), r = !0;
    },
    p(o, i) {
      const s = {};
      i[0] & /*$pageRows*/
      128 && (s.of = /*cell*/
      o[41].render()), n.$set(s);
    },
    i(o) {
      r || (g(n.$$.fragment, o), r = !0);
    },
    o(o) {
      _(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && S(e), L(n);
    }
  };
}
function Xp(t) {
  let e, n, r, o;
  const i = [qp, Up, Kp], s = [];
  function a(l, u) {
    return (
      /*cell*/
      l[41].id === "amount" ? 0 : (
        /*cell*/
        l[41].id === "status" ? 1 : 2
      )
    );
  }
  return e = a(t), n = s[e] = i[e](t), {
    c() {
      n.c(), r = Ce();
    },
    m(l, u) {
      s[e].m(l, u), R(l, r, u), o = !0;
    },
    p(l, u) {
      let c = e;
      e = a(l), e === c ? s[e].p(l, u) : (Ie(), _(s[c], 1, 1, () => {
        s[c] = null;
      }), Ne(), n = s[e], n ? n.p(l, u) : (n = s[e] = i[e](l), n.c()), g(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      o || (g(n), o = !0);
    },
    o(l) {
      _(n), o = !1;
    },
    d(l) {
      l && S(r), s[e].d(l);
    }
  };
}
function Yp(t) {
  let e, n, r;
  const o = [
    { class: "[&:has([role=checkbox])]:pl-3" },
    /*attrs*/
    t[44]
  ];
  let i = {
    $$slots: { default: [Xp] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < o.length; s += 1)
    i = C(i, o[s]);
  return e = new Hu({ props: i }), {
    c() {
      j(e.$$.fragment), n = We();
    },
    m(s, a) {
      D(e, s, a), R(s, n, a), r = !0;
    },
    p(s, a) {
      const l = a[1] & /*attrs*/
      8192 ? Y(o, [o[0], Ke(
        /*attrs*/
        s[44]
      )]) : {};
      a[0] & /*$pageRows*/
      128 | a[1] & /*$$scope*/
      16777216 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      r || (g(e.$$.fragment, s), r = !0);
    },
    o(s) {
      _(e.$$.fragment, s), r = !1;
    },
    d(s) {
      s && S(n), L(e, s);
    }
  };
}
function Mi(t, e) {
  let n, r, o;
  return r = new yn({
    props: {
      attrs: (
        /*cell*/
        e[41].attrs()
      ),
      $$slots: {
        default: [
          Yp,
          ({ attrs: i }) => ({ 44: i }),
          ({ attrs: i }) => [0, i ? 8192 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ce(), j(r.$$.fragment), this.first = n;
    },
    m(i, s) {
      R(i, n, s), D(r, i, s), o = !0;
    },
    p(i, s) {
      e = i;
      const a = {};
      s[0] & /*$pageRows*/
      128 && (a.attrs = /*cell*/
      e[41].attrs()), s[0] & /*$pageRows*/
      128 | s[1] & /*$$scope, attrs*/
      16785408 && (a.$$scope = { dirty: s, ctx: e }), r.$set(a);
    },
    i(i) {
      o || (g(r.$$.fragment, i), o = !0);
    },
    o(i) {
      _(r.$$.fragment, i), o = !1;
    },
    d(i) {
      i && S(n), L(r, i);
    }
  };
}
function Zp(t) {
  let e = [], n = /* @__PURE__ */ new Map(), r, o, i = qe(
    /*row*/
    t[37].cells
  );
  const s = (a) => (
    /*cell*/
    a[41].id
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Si(t, i, a), u = s(l);
    n.set(u, e[a] = Mi(u, l));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      r = Ce();
    },
    m(a, l) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, l);
      R(a, r, l), o = !0;
    },
    p(a, l) {
      l[0] & /*$pageRows*/
      128 | l[1] & /*attrs*/
      8192 && (i = qe(
        /*row*/
        a[37].cells
      ), Ie(), e = sr(e, l, s, 1, a, i, n, r.parentNode, ir, Mi, r, Si), Ne());
    },
    i(a) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          g(e[l]);
        o = !0;
      }
    },
    o(a) {
      for (let l = 0; l < e.length; l += 1)
        _(e[l]);
      o = !1;
    },
    d(a) {
      a && S(r);
      for (let l = 0; l < e.length; l += 1)
        e[l].d(a);
    }
  };
}
function Jp(t) {
  let e, n, r;
  const o = [
    /*rowAttrs*/
    t[40],
    {
      "data-state": (
        /*$selectedDataIds*/
        t[8][
          /*row*/
          t[37].id
        ] && "selected"
      )
    }
  ];
  let i = {
    $$slots: { default: [Zp] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < o.length; s += 1)
    i = C(i, o[s]);
  return e = new Cs({ props: i }), {
    c() {
      j(e.$$.fragment), n = We();
    },
    m(s, a) {
      D(e, s, a), R(s, n, a), r = !0;
    },
    p(s, a) {
      const l = a[0] & /*$selectedDataIds, $pageRows*/
      384 | a[1] & /*rowAttrs*/
      512 ? Y(o, [
        a[1] & /*rowAttrs*/
        512 && Ke(
          /*rowAttrs*/
          s[40]
        ),
        a[0] & /*$selectedDataIds, $pageRows*/
        384 && {
          "data-state": (
            /*$selectedDataIds*/
            s[8][
              /*row*/
              s[37].id
            ] && "selected"
          )
        }
      ]) : {};
      a[0] & /*$pageRows*/
      128 | a[1] & /*$$scope*/
      16777216 && (l.$$scope = { dirty: a, ctx: s }), e.$set(l);
    },
    i(s) {
      r || (g(e.$$.fragment, s), r = !0);
    },
    o(s) {
      _(e.$$.fragment, s), r = !1;
    },
    d(s) {
      s && S(n), L(e, s);
    }
  };
}
function Di(t, e) {
  let n, r, o;
  return r = new yn({
    props: {
      rowAttrs: (
        /*row*/
        e[37].attrs()
      ),
      $$slots: {
        default: [
          Jp,
          ({ rowAttrs: i }) => ({ 40: i }),
          ({ rowAttrs: i }) => [0, i ? 512 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = Ce(), j(r.$$.fragment), this.first = n;
    },
    m(i, s) {
      R(i, n, s), D(r, i, s), o = !0;
    },
    p(i, s) {
      e = i;
      const a = {};
      s[0] & /*$pageRows*/
      128 && (a.rowAttrs = /*row*/
      e[37].attrs()), s[0] & /*$selectedDataIds, $pageRows*/
      384 | s[1] & /*$$scope, rowAttrs*/
      16777728 && (a.$$scope = { dirty: s, ctx: e }), r.$set(a);
    },
    i(i) {
      o || (g(r.$$.fragment, i), o = !0);
    },
    o(i) {
      _(r.$$.fragment, i), o = !1;
    },
    d(i) {
      i && S(n), L(r, i);
    }
  };
}
function Qp(t) {
  let e = [], n = /* @__PURE__ */ new Map(), r, o, i = qe(
    /*$pageRows*/
    t[7]
  );
  const s = (a) => (
    /*row*/
    a[37].id
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = Ti(t, i, a), u = s(l);
    n.set(u, e[a] = Di(u, l));
  }
  return {
    c() {
      for (let a = 0; a < e.length; a += 1)
        e[a].c();
      r = Ce();
    },
    m(a, l) {
      for (let u = 0; u < e.length; u += 1)
        e[u] && e[u].m(a, l);
      R(a, r, l), o = !0;
    },
    p(a, l) {
      l[0] & /*$pageRows, $selectedDataIds*/
      384 | l[1] & /*rowAttrs, attrs*/
      8704 && (i = qe(
        /*$pageRows*/
        a[7]
      ), Ie(), e = sr(e, l, s, 1, a, i, n, r.parentNode, ir, Di, r, Ti), Ne());
    },
    i(a) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          g(e[l]);
        o = !0;
      }
    },
    o(a) {
      for (let l = 0; l < e.length; l += 1)
        _(e[l]);
      o = !1;
    },
    d(a) {
      a && S(r);
      for (let l = 0; l < e.length; l += 1)
        e[l].d(a);
    }
  };
}
function xp(t) {
  let e, n, r, o;
  e = new Zu({
    props: {
      $$slots: { default: [Hp] },
      $$scope: { ctx: t }
    }
  });
  const i = [
    /*$tableBodyAttrs*/
    t[6]
  ];
  let s = {
    $$slots: { default: [Qp] },
    $$scope: { ctx: t }
  };
  for (let a = 0; a < i.length; a += 1)
    s = C(s, i[a]);
  return r = new Wu({ props: s }), {
    c() {
      j(e.$$.fragment), n = We(), j(r.$$.fragment);
    },
    m(a, l) {
      D(e, a, l), R(a, n, l), D(r, a, l), o = !0;
    },
    p(a, l) {
      const u = {};
      l[0] & /*$headerRows, $sortKeys*/
      48 | l[1] & /*$$scope*/
      16777216 && (u.$$scope = { dirty: l, ctx: a }), e.$set(u);
      const c = l[0] & /*$tableBodyAttrs*/
      64 ? Y(i, [Ke(
        /*$tableBodyAttrs*/
        a[6]
      )]) : {};
      l[0] & /*$pageRows, $selectedDataIds*/
      384 | l[1] & /*$$scope*/
      16777216 && (c.$$scope = { dirty: l, ctx: a }), r.$set(c);
    },
    i(a) {
      o || (g(e.$$.fragment, a), g(r.$$.fragment, a), o = !0);
    },
    o(a) {
      _(e.$$.fragment, a), _(r.$$.fragment, a), o = !1;
    },
    d(a) {
      a && S(n), L(e, a), L(r, a);
    }
  };
}
function eb(t) {
  let e;
  return {
    c() {
      e = Ve("Previous");
    },
    m(n, r) {
      R(n, e, r);
    },
    d(n) {
      n && S(e);
    }
  };
}
function tb(t) {
  let e;
  return {
    c() {
      e = Ve("Next");
    },
    m(n, r) {
      R(n, e, r);
    },
    d(n) {
      n && S(e);
    }
  };
}
function nb(t) {
  let e, n, r, o, i, s, a, l, u, c, f, m, d = Object.keys(
    /*$selectedDataIds*/
    t[8]
  ).length + "", h, b, p = " ", k, y, I = (
    /*$rows*/
    t[9].length + ""
  ), T, q, M, G, de, J, K;
  function w(A) {
    t[27](A);
  }
  let v = {
    class: "max-w-sm",
    placeholder: "Filter value...",
    type: "text"
  };
  /*$filterValue*/
  t[2] !== void 0 && (v.value = /*$filterValue*/
  t[2]), r = new wp({ props: v }), dt.push(() => Gt(r, "value", w)), s = new gp({
    props: {
      $$slots: { default: [Mp] },
      $$scope: { ctx: t }
    }
  });
  const E = [
    /*$tableAttrs*/
    t[3]
  ];
  let P = {
    $$slots: { default: [xp] },
    $$scope: { ctx: t }
  };
  for (let A = 0; A < E.length; A += 1)
    P = C(P, E[A]);
  return u = new ju({ props: P }), G = new rr({
    props: {
      variant: "outline",
      size: "sm",
      disabled: !/*$hasPreviousPage*/
      t[11],
      $$slots: { default: [eb] },
      $$scope: { ctx: t }
    }
  }), G.$on(
    "click",
    /*click_handler*/
    t[29]
  ), J = new rr({
    props: {
      variant: "outline",
      size: "sm",
      disabled: !/*$hasNextPage*/
      t[12],
      $$slots: { default: [tb] },
      $$scope: { ctx: t }
    }
  }), J.$on(
    "click",
    /*click_handler_1*/
    t[30]
  ), {
    c() {
      e = me("div"), n = me("div"), j(r.$$.fragment), i = We(), j(s.$$.fragment), a = We(), l = me("div"), j(u.$$.fragment), c = We(), f = me("div"), m = me("div"), h = Ve(d), b = Ve(" of"), k = Ve(p), y = We(), T = Ve(I), q = Ve(" row(s) selected."), M = We(), j(G.$$.fragment), de = We(), j(J.$$.fragment), et(n, "class", "flex items-center py-4"), et(l, "class", "rounded-md border"), et(m, "class", "flex-1 text-sm text-muted-foreground"), et(f, "class", "flex items-center justify-end space-x-2 py-4"), et(e, "class", "w-full");
    },
    m(A, $) {
      R(A, e, $), Ye(e, n), D(r, n, null), Ye(n, i), D(s, n, null), Ye(e, a), Ye(e, l), D(u, l, null), Ye(e, c), Ye(e, f), Ye(f, m), Ye(m, h), Ye(m, b), Ye(m, k), Ye(m, y), Ye(m, T), Ye(m, q), Ye(f, M), D(G, f, null), Ye(f, de), D(J, f, null), K = !0;
    },
    p(A, $) {
      const W = {};
      !o && $[0] & /*$filterValue*/
      4 && (o = !0, W.value = /*$filterValue*/
      A[2], Wt(() => o = !1)), r.$set(W);
      const Q = {};
      $[0] & /*hideForId, heads*/
      3 | $[1] & /*$$scope*/
      16777216 && (Q.$$scope = { dirty: $, ctx: A }), s.$set(Q);
      const le = $[0] & /*$tableAttrs*/
      8 ? Y(E, [Ke(
        /*$tableAttrs*/
        A[3]
      )]) : {};
      $[0] & /*$tableBodyAttrs, $pageRows, $selectedDataIds, $headerRows, $sortKeys*/
      496 | $[1] & /*$$scope*/
      16777216 && (le.$$scope = { dirty: $, ctx: A }), u.$set(le), (!K || $[0] & /*$selectedDataIds*/
      256) && d !== (d = Object.keys(
        /*$selectedDataIds*/
        A[8]
      ).length + "") && Lt(h, d), (!K || $[0] & /*$rows*/
      512) && I !== (I = /*$rows*/
      A[9].length + "") && Lt(T, I);
      const Re = {};
      $[0] & /*$hasPreviousPage*/
      2048 && (Re.disabled = !/*$hasPreviousPage*/
      A[11]), $[1] & /*$$scope*/
      16777216 && (Re.$$scope = { dirty: $, ctx: A }), G.$set(Re);
      const Te = {};
      $[0] & /*$hasNextPage*/
      4096 && (Te.disabled = !/*$hasNextPage*/
      A[12]), $[1] & /*$$scope*/
      16777216 && (Te.$$scope = { dirty: $, ctx: A }), J.$set(Te);
    },
    i(A) {
      K || (g(r.$$.fragment, A), g(s.$$.fragment, A), g(u.$$.fragment, A), g(G.$$.fragment, A), g(J.$$.fragment, A), K = !0);
    },
    o(A) {
      _(r.$$.fragment, A), _(s.$$.fragment, A), _(u.$$.fragment, A), _(G.$$.fragment, A), _(J.$$.fragment, A), K = !1;
    },
    d(A) {
      A && S(e), L(r), L(s), L(u), L(G), L(J);
    }
  };
}
function rb(t, e, n) {
  let r, o, i, s, a, l, u, c, f, m, d, h, { heads: b = [] } = e, { data: p = [] } = e;
  const k = yu(pt(p), {
    sort: $u({ disableMultiSort: !0 }),
    page: Su(),
    filter: Fu({
      fn: ({ filterValue: N, value: fe }) => fe.includes(N)
    }),
    select: Ou(),
    hide: Au()
  });
  let y = [
    k.column({
      header: (N, { pluginStates: fe }) => {
        const { allPageRowsSelected: Pe } = fe.select;
        return kr(Ei, { checked: Pe });
      },
      accessor: "#",
      cell: ({ row: N }, { pluginStates: fe }) => {
        const { getRowState: Pe } = fe.select, { isSelected: Ze } = Pe(N);
        return kr(Ei, { checked: Ze });
      },
      plugins: {
        sort: { disable: !0 },
        filter: { exclude: !0 }
      }
    })
  ];
  for (let N of b)
    y.push(k.column({
      header: N,
      accessor: N,
      plugins: {
        sort: { disable: !0 },
        filter: { exclude: !0 }
      }
    }));
  y.push(k.column({
    header: "",
    accessor: ({ id: N }) => N,
    cell: (N) => kr(op, { id: N.value }),
    plugins: { sort: { disable: !0 } }
  }));
  const I = k.createColumns(y), { headerRows: T, pageRows: q, tableAttrs: M, tableBodyAttrs: G, flatColumns: de, pluginStates: J, rows: K } = k.createViewModel(I);
  De(t, T, (N) => n(4, s = N)), De(t, q, (N) => n(7, u = N)), De(t, M, (N) => n(3, i = N)), De(t, G, (N) => n(6, l = N)), De(t, K, (N) => n(9, f = N));
  const { sortKeys: w } = J.sort;
  De(t, w, (N) => n(5, a = N));
  const { hiddenColumnIds: v } = J.hide;
  De(t, v, (N) => n(31, r = N));
  const E = de.map((N) => N.id);
  let P = Object.fromEntries(E.map((N) => [N, !0]));
  const { hasNextPage: A, hasPreviousPage: $, pageIndex: W } = J.page;
  De(t, A, (N) => n(12, h = N)), De(t, $, (N) => n(11, d = N)), De(t, W, (N) => n(10, m = N));
  const { filterValue: Q } = J.filter;
  De(t, Q, (N) => n(2, o = N));
  const { selectedDataIds: le } = J.select;
  De(t, le, (N) => n(8, c = N));
  function Re(N) {
    o = N, Q.set(o);
  }
  function Te(N, fe) {
    t.$$.not_equal(P[fe.id], N) && (P[fe.id] = N, n(1, P));
  }
  const Fe = () => _r(W, m = m - 1, m), F = () => _r(W, m = m + 1, m);
  return t.$$set = (N) => {
    "heads" in N && n(0, b = N.heads), "data" in N && n(26, p = N.data);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*hideForId*/
    2 && _r(v, r = Object.entries(P).filter(([, N]) => !N).map(([N]) => N), r);
  }, [
    b,
    P,
    o,
    i,
    s,
    a,
    l,
    u,
    c,
    f,
    m,
    d,
    h,
    T,
    q,
    M,
    G,
    de,
    K,
    w,
    v,
    A,
    $,
    W,
    Q,
    le,
    p,
    Re,
    Te,
    Fe,
    F
  ];
}
class ob extends se {
  constructor(e) {
    super(), ie(this, e, rb, nb, X, { heads: 0, data: 26 }, null, [-1, -1]);
  }
}
const gb = (t, e, n) => (t || (t = window.document.createElement("div")), new Fa({
  target: t,
  props: {
    heads: e,
    data: n
  }
})), _b = (t, e, n) => (t || (t = window.document.createElement("div")), new ob({
  target: t,
  props: {
    heads: e,
    data: n
  }
}));
export {
  _b as RenderEditTable,
  gb as RenderTable
};
