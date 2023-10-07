var Se = Object.defineProperty;
var Ie = (t, e, n) => e in t ? Se(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ot = (t, e, n) => (Ie(t, typeof e != "symbol" ? e + "" : e, n), n);
function F() {
}
function $(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function te(t) {
  return t();
}
function Ot() {
  return /* @__PURE__ */ Object.create(null);
}
function H(t) {
  t.forEach(te);
}
function ee(t) {
  return typeof t == "function";
}
function xt(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Le(t) {
  return Object.keys(t).length === 0;
}
function Pt(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function m(t, e) {
  t.appendChild(e);
}
function M(t, e, n) {
  t.insertBefore(e, n || null);
}
function L(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function ne(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function v(t) {
  return document.createElement(t);
}
function ut(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function G(t) {
  return document.createTextNode(t);
}
function I() {
  return G(" ");
}
function ie() {
  return G("");
}
function ft(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function y(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Ee = ["width", "height"];
function Ft(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && Ee.indexOf(i) === -1 ? t[i] = e[i] : y(t, i, e[i]);
}
function At(t, e) {
  for (const n in e)
    y(t, n, e[n]);
}
function Te(t) {
  return Array.from(t.childNodes);
}
function vt(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function je(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
let Q;
function V(t) {
  Q = t;
}
function _t() {
  if (!Q)
    throw new Error("Function called outside component initialization");
  return Q;
}
function Me(t) {
  _t().$$.on_mount.push(t);
}
function Oe(t) {
  _t().$$.on_destroy.push(t);
}
function Pe() {
  const t = _t();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const o = je(
        /** @type {string} */
        e,
        n,
        { cancelable: i }
      );
      return r.slice().forEach((s) => {
        s.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const D = [], at = [];
let B = [];
const Nt = [], Fe = /* @__PURE__ */ Promise.resolve();
let dt = !1;
function Ae() {
  dt || (dt = !0, Fe.then(re));
}
function ht(t) {
  B.push(t);
}
const st = /* @__PURE__ */ new Set();
let N = 0;
function re() {
  if (N !== 0)
    return;
  const t = Q;
  do {
    try {
      for (; N < D.length; ) {
        const e = D[N];
        N++, V(e), Ne(e.$$);
      }
    } catch (e) {
      throw D.length = 0, N = 0, e;
    }
    for (V(null), D.length = 0, N = 0; at.length; )
      at.pop()();
    for (let e = 0; e < B.length; e += 1) {
      const n = B[e];
      st.has(n) || (st.add(n), n());
    }
    B.length = 0;
  } while (D.length);
  for (; Nt.length; )
    Nt.pop()();
  dt = !1, st.clear(), V(t);
}
function Ne(t) {
  if (t.fragment !== null) {
    t.update(), H(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ht);
  }
}
function De(t) {
  const e = [], n = [];
  B.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), B = e;
}
const W = /* @__PURE__ */ new Set();
let P;
function oe() {
  P = {
    r: 0,
    c: [],
    p: P
    // parent group
  };
}
function se() {
  P.r || H(P.c), P = P.p;
}
function j(t, e) {
  t && t.i && (W.delete(t), t.i(e));
}
function U(t, e, n, i) {
  if (t && t.o) {
    if (W.has(t))
      return;
    W.add(t), P.c.push(() => {
      W.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function tt(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function ce(t, e) {
  const n = {}, i = {}, r = { $$scope: 1 };
  let o = t.length;
  for (; o--; ) {
    const s = t[o], c = e[o];
    if (c) {
      for (const u in s)
        u in c || (i[u] = 1);
      for (const u in c)
        r[u] || (n[u] = c[u], r[u] = 1);
      t[o] = c;
    } else
      for (const u in s)
        r[u] = 1;
  }
  for (const s in i)
    s in n || (n[s] = void 0);
  return n;
}
function Be(t) {
  t && t.c();
}
function le(t, e, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, n), ht(() => {
    const o = t.$$.on_mount.map(te).filter(ee);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : H(o), t.$$.on_mount = [];
  }), r.forEach(ht);
}
function ue(t, e) {
  const n = t.$$;
  n.fragment !== null && (De(n.after_update), H(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function He(t, e) {
  t.$$.dirty[0] === -1 && (D.push(t), Ae(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ct(t, e, n, i, r, o, s, c = [-1]) {
  const u = Q;
  V(t);
  const l = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: F,
    not_equal: r,
    bound: Ot(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Ot(),
    dirty: c,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  s && s(l.root);
  let a = !1;
  if (l.ctx = n ? n(t, e.props || {}, (f, d, ...g) => {
    const h = g.length ? g[0] : d;
    return l.ctx && r(l.ctx[f], l.ctx[f] = h) && (!l.skip_bound && l.bound[f] && l.bound[f](h), a && He(t, f)), d;
  }) : [], l.update(), a = !0, H(l.before_update), l.fragment = i ? i(l.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Te(e.target);
      l.fragment && l.fragment.l(f), f.forEach(L);
    } else
      l.fragment && l.fragment.c();
    e.intro && j(t.$$.fragment), le(t, e.target, e.anchor), re();
  }
  V(u);
}
class St {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ot(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ot(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ue(this, 1), this.$destroy = F;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!ee(n))
      return F;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !Le(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Re = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Re);
function Ve(t) {
  let e, n, i, r, o, s, c, u, l, a, f, d, g, h, k, w, b, p, _, K, E, x, C;
  return {
    c() {
      e = v("div"), n = v("section"), i = v("div"), r = v("div"), o = v("p"), o.textContent = "404 error", s = I(), c = v("h1"), c.textContent = "Page not found", u = I(), l = v("p"), a = G(
        /*message*/
        t[2]
      ), f = I(), d = v("div"), g = v("button"), h = ut("svg"), k = ut("path"), w = I(), b = v("button"), b.textContent = "Go back", p = I(), _ = v("button"), _.textContent = "To home", K = I(), E = v("div"), E.innerHTML = '<div class="uikit-w-full uikit-max-w-lg lg:uikit-mx-auto"></div> <svg width="514" height="164" viewBox="0 0 514 164" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="101" cy="22" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="101" cy="142" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="21" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="141" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="193" cy="82" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="313" cy="82" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="253" cy="22" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="253" cy="142" r="20" stroke="#667085" stroke-width="2"></circle><path d="M1 102C1 90.9543 9.9543 82 21 82H141C152.046 82 161 90.9543 161 102C161 113.046 152.046 122 141 122H21C9.9543 122 1 113.046 1 102Z" stroke="#667085" stroke-width="2"></path><path d="M101 162C89.9543 162 81 153.046 81 142L81 22C81 10.9543 89.9543 2 101 2C112.046 2 121 10.9543 121 22L121 142C121 153.046 112.046 162 101 162Z" stroke="#667085" stroke-width="2"></path><path d="M7.14214 115.995C-0.668351 108.184 -0.668351 95.5211 7.14214 87.7106L86.7107 8.1421C94.5212 0.331614 107.184 0.331607 114.995 8.14209C122.805 15.9526 122.805 28.6159 114.995 36.4264L35.4264 115.995C27.6159 123.805 14.9526 123.805 7.14214 115.995Z" stroke="#667085" stroke-width="2"></path><circle cx="453" cy="22" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="453" cy="142" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="373" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="493" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><path d="M353 102C353 90.9543 361.954 82 373 82H493C504.046 82 513 90.9543 513 102C513 113.046 504.046 122 493 122H373C361.954 122 353 113.046 353 102Z" stroke="#667085" stroke-width="2"></path><path d="M453 162C441.954 162 433 153.046 433 142L433 22C433 10.9543 441.954 2 453 2C464.046 2 473 10.9543 473 22L473 142C473 153.046 464.046 162 453 162Z" stroke="#667085" stroke-width="2"></path><path d="M359.142 115.995C351.332 108.184 351.332 95.5211 359.142 87.7106L438.711 8.1421C446.521 0.331614 459.184 0.331607 466.995 8.14209C474.805 15.9526 474.805 28.6159 466.995 36.4264L387.426 115.995C379.616 123.805 366.953 123.805 359.142 115.995Z" stroke="#667085" stroke-width="2"></path><circle cx="253" cy="82" r="80" stroke="#667085" stroke-width="2"></circle><circle cx="253" cy="82" r="40" stroke="#667085" stroke-width="2"></circle><line x1="8.74228e-08" y1="1" x2="513" y2="1.00004" stroke="#667085" stroke-width="2"></line><line x1="-8.74228e-08" y1="163" x2="513" y2="163" stroke="#667085" stroke-width="2"></line></svg>', y(o, "class", "uikit-text-sm uikit-font-medium uikit-text-blue-500 dark:uikit-text-blue-400"), y(c, "class", "uikit-mt-3 uikit-text-2xl uikit-font-semibold uikit-text-gray-800 dark:uikit-text-white md:uikit-text-3xl"), y(l, "class", "uikit-mt-4 uikit-text-gray-500 dark:uikit-text-gray-400"), y(k, "stroke-linecap", "round"), y(k, "stroke-linejoin", "round"), y(k, "d", "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"), y(h, "xmlns", "http://www.w3.org/2000/svg"), y(h, "fill", "none"), y(h, "viewBox", "0 0 24 24"), y(h, "stroke-width", "1.5"), y(h, "stroke", "currentColor"), y(h, "class", "uikit-w-5 uikit-h-5 uikit-rtl:rotate-180"), y(g, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-1/2 uikit-px-5 uikit-py-2 uikit-text-sm uikit-text-gray-700 uikit-transition-colors uikit-duration-200 uikit-bg-white uikit-border uikit-rounded-lg uikit-gap-x-2 sm:uikit-w-auto dark:uikit-hover:bg-gray-800 dark:uikit-bg-gray-900 hover:uikit-bg-gray-100 dark:uikit-text-gray-200 dark:uikit-border-gray-700"), y(_, "class", "uikit-w-1/2 uikit-px-5 uikit-py-2 uikit-text-sm uikit-tracking-wide uikit-text-white uikit-transition-colors uikit-duration-200 uikit-bg-blue-500 uikit-rounded-lg uikit-shrink-0 sm:uikit-w-auto hover:uikit-bg-blue-600 dark:hover:uikit-bg-blue-500 dark:uikit-bg-blue-600"), y(d, "class", "uikit-flex uikit-items-center uikit-mt-6 uikit-gap-x-3"), y(r, "class", "uikit-w-full lg:uikit-w-1/2"), y(E, "class", "uikit-relative uikit-w-full uikit-mt-12 lg:uikit-w-1/2 lg:uikit-mt-0"), y(i, "class", "uikit-container uikit-min-h-screen uikit-px-6 uikit-py-12 uikit-mx-auto lg:uikit-flex lg:uikit-items-center lg:uikit-gap-12"), y(n, "class", "uikit-bg-white dark:uikit-bg-gray-900"), y(e, "class", "uikit-w-screen uikit-h-screen uikit-px-36");
    },
    m(S, T) {
      M(S, e, T), m(e, n), m(n, i), m(i, r), m(r, o), m(r, s), m(r, c), m(r, u), m(r, l), m(l, a), m(r, f), m(r, d), m(d, g), m(g, h), m(h, k), m(g, w), m(g, b), m(d, p), m(d, _), m(i, K), m(i, E), x || (C = [
        ft(
          b,
          "click",
          /*click_handler*/
          t[3]
        ),
        ft(
          _,
          "click",
          /*click_handler_1*/
          t[4]
        )
      ], x = !0);
    },
    p(S, [T]) {
      T & /*message*/
      4 && vt(
        a,
        /*message*/
        S[2]
      );
    },
    i: F,
    o: F,
    d(S) {
      S && L(e), x = !1, H(C);
    }
  };
}
function ze(t, e, n) {
  let { backurl: i = "" } = e, { homeurl: r = "" } = e, { message: o = "Sorry, the page you are looking for doesn't exist.Here are some helpful links:" } = e;
  const s = () => {
    i !== "" && (window.location.href = i);
  }, c = () => {
    r !== "" && (window.location.href = r);
  };
  return t.$$set = (u) => {
    "backurl" in u && n(0, i = u.backurl), "homeurl" in u && n(1, r = u.homeurl), "message" in u && n(2, o = u.message);
  }, [i, r, o, s, c];
}
class ti extends St {
  constructor(e) {
    super(), Ct(this, e, ze, Ve, xt, { backurl: 0, homeurl: 1, message: 2 });
  }
}
const z = /^[a-z0-9]+(-[a-z0-9]+)*$/, nt = (t, e, n, i = "") => {
  const r = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (r.length < 2 || r.length > 3)
      return null;
    i = r.shift().slice(1);
  }
  if (r.length > 3 || !r.length)
    return null;
  if (r.length > 1) {
    const c = r.pop(), u = r.pop(), l = {
      // Allow provider without '@': "provider:prefix:name"
      provider: r.length > 0 ? r[0] : i,
      prefix: u,
      name: c
    };
    return e && !X(l) ? null : l;
  }
  const o = r[0], s = o.split("-");
  if (s.length > 1) {
    const c = {
      provider: i,
      prefix: s.shift(),
      name: s.join("-")
    };
    return e && !X(c) ? null : c;
  }
  if (n && i === "") {
    const c = {
      provider: i,
      prefix: "",
      name: o
    };
    return e && !X(c, n) ? null : c;
  }
  return null;
}, X = (t, e) => t ? !!((t.provider === "" || t.provider.match(z)) && (e && t.prefix === "" || t.prefix.match(z)) && t.name.match(z)) : !1, fe = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), et = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), it = Object.freeze({
  ...fe,
  ...et
}), gt = Object.freeze({
  ...it,
  body: "",
  hidden: !1
});
function Qe(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const i = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return i && (n.rotate = i), n;
}
function Dt(t, e) {
  const n = Qe(t, e);
  for (const i in gt)
    i in et ? i in t && !(i in n) && (n[i] = et[i]) : i in e ? n[i] = e[i] : i in t && (n[i] = t[i]);
  return n;
}
function Ue(t, e) {
  const n = t.icons, i = t.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  function o(s) {
    if (n[s])
      return r[s] = [];
    if (!(s in r)) {
      r[s] = null;
      const c = i[s] && i[s].parent, u = c && o(c);
      u && (r[s] = [c].concat(u));
    }
    return r[s];
  }
  return (e || Object.keys(n).concat(Object.keys(i))).forEach(o), r;
}
function Ze(t, e, n) {
  const i = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function s(c) {
    o = Dt(
      i[c] || r[c],
      o
    );
  }
  return s(e), n.forEach(s), Dt(t, o);
}
function ae(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((r) => {
    e(r, null), n.push(r);
  });
  const i = Ue(t);
  for (const r in i) {
    const o = i[r];
    o && (e(r, Ze(t, r, o)), n.push(r));
  }
  return n;
}
const qe = {
  provider: "",
  aliases: {},
  not_found: {},
  ...fe
};
function ct(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function de(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !ct(t, qe))
    return null;
  const n = e.icons;
  for (const r in n) {
    const o = n[r];
    if (!r.match(z) || typeof o.body != "string" || !ct(
      o,
      gt
    ))
      return null;
  }
  const i = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const r in i) {
    const o = i[r], s = o.parent;
    if (!r.match(z) || typeof s != "string" || !n[s] && !i[s] || !ct(
      o,
      gt
    ))
      return null;
  }
  return e;
}
const Bt = /* @__PURE__ */ Object.create(null);
function Ge(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function A(t, e) {
  const n = Bt[t] || (Bt[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = Ge(t, e));
}
function It(t, e) {
  return de(e) ? ae(e, (n, i) => {
    i ? t.icons[n] = i : t.missing.add(n);
  }) : [];
}
function Ke(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Z = !1;
function he(t) {
  return typeof t == "boolean" && (Z = t), Z;
}
function Je(t) {
  const e = typeof t == "string" ? nt(t, !0, Z) : t;
  if (e) {
    const n = A(e.provider, e.prefix), i = e.name;
    return n.icons[i] || (n.missing.has(i) ? null : void 0);
  }
}
function We(t, e) {
  const n = nt(t, !0, Z);
  if (!n)
    return !1;
  const i = A(n.provider, n.prefix);
  return Ke(i, n.name, e);
}
function Xe(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), Z && !e && !t.prefix) {
    let r = !1;
    return de(t) && (t.prefix = "", ae(t, (o, s) => {
      s && We(o, s) && (r = !0);
    })), r;
  }
  const n = t.prefix;
  if (!X({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const i = A(e, n);
  return !!It(i, t);
}
const ge = Object.freeze({
  width: null,
  height: null
}), pe = Object.freeze({
  // Dimensions
  ...ge,
  // Transformations
  ...et
}), Ye = /(-?[0-9.]*[0-9]+[0-9.]*)/g, $e = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Ht(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const i = t.split(Ye);
  if (i === null || !i.length)
    return t;
  const r = [];
  let o = i.shift(), s = $e.test(o);
  for (; ; ) {
    if (s) {
      const c = parseFloat(o);
      isNaN(c) ? r.push(o) : r.push(Math.ceil(c * e * n) / n);
    } else
      r.push(o);
    if (o = i.shift(), o === void 0)
      return r.join("");
    s = !s;
  }
}
const tn = (t) => t === "unset" || t === "undefined" || t === "none";
function en(t, e) {
  const n = {
    ...it,
    ...t
  }, i = {
    ...pe,
    ...e
  }, r = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let o = n.body;
  [n, i].forEach((h) => {
    const k = [], w = h.hFlip, b = h.vFlip;
    let p = h.rotate;
    w ? b ? p += 2 : (k.push(
      "translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"
    ), k.push("scale(-1 1)"), r.top = r.left = 0) : b && (k.push(
      "translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"
    ), k.push("scale(1 -1)"), r.top = r.left = 0);
    let _;
    switch (p < 0 && (p -= Math.floor(p / 4) * 4), p = p % 4, p) {
      case 1:
        _ = r.height / 2 + r.top, k.unshift(
          "rotate(90 " + _.toString() + " " + _.toString() + ")"
        );
        break;
      case 2:
        k.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        _ = r.width / 2 + r.left, k.unshift(
          "rotate(-90 " + _.toString() + " " + _.toString() + ")"
        );
        break;
    }
    p % 2 === 1 && (r.left !== r.top && (_ = r.left, r.left = r.top, r.top = _), r.width !== r.height && (_ = r.width, r.width = r.height, r.height = _)), k.length && (o = '<g transform="' + k.join(" ") + '">' + o + "</g>");
  });
  const s = i.width, c = i.height, u = r.width, l = r.height;
  let a, f;
  s === null ? (f = c === null ? "1em" : c === "auto" ? l : c, a = Ht(f, u / l)) : (a = s === "auto" ? u : s, f = c === null ? Ht(a, l / u) : c === "auto" ? l : c);
  const d = {}, g = (h, k) => {
    tn(k) || (d[h] = k.toString());
  };
  return g("width", a), g("height", f), d.viewBox = r.left.toString() + " " + r.top.toString() + " " + u.toString() + " " + l.toString(), {
    attributes: d,
    body: o
  };
}
const nn = /\sid="(\S+)"/g, rn = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let on = 0;
function sn(t, e = rn) {
  const n = [];
  let i;
  for (; i = nn.exec(t); )
    n.push(i[1]);
  if (!n.length)
    return t;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((o) => {
    const s = typeof e == "function" ? e(o) : e + (on++).toString(), c = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + s + r + "$3"
    );
  }), t = t.replace(new RegExp(r, "g"), ""), t;
}
const pt = /* @__PURE__ */ Object.create(null);
function cn(t, e) {
  pt[t] = e;
}
function kt(t) {
  return pt[t] || pt[""];
}
function Lt(t) {
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
const Et = /* @__PURE__ */ Object.create(null), R = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Y = [];
for (; R.length > 0; )
  R.length === 1 || Math.random() > 0.5 ? Y.push(R.shift()) : Y.push(R.pop());
Et[""] = Lt({
  resources: ["https://api.iconify.design"].concat(Y)
});
function ln(t, e) {
  const n = Lt(e);
  return n === null ? !1 : (Et[t] = n, !0);
}
function Tt(t) {
  return Et[t];
}
const un = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let Rt = un();
function fn(t, e) {
  const n = Tt(t);
  if (!n)
    return 0;
  let i;
  if (!n.maxURL)
    i = 0;
  else {
    let r = 0;
    n.resources.forEach((s) => {
      r = Math.max(r, s.length);
    });
    const o = e + ".json?icons=";
    i = n.maxURL - r - n.path.length - o.length;
  }
  return i;
}
function an(t) {
  return t === 404;
}
const dn = (t, e, n) => {
  const i = [], r = fn(t, e), o = "icons";
  let s = {
    type: o,
    provider: t,
    prefix: e,
    icons: []
  }, c = 0;
  return n.forEach((u, l) => {
    c += u.length + 1, c >= r && l > 0 && (i.push(s), s = {
      type: o,
      provider: t,
      prefix: e,
      icons: []
    }, c = u.length), s.icons.push(u);
  }), i.push(s), i;
};
function hn(t) {
  if (typeof t == "string") {
    const e = Tt(t);
    if (e)
      return e.path;
  }
  return "/";
}
const gn = (t, e, n) => {
  if (!Rt) {
    n("abort", 424);
    return;
  }
  let i = hn(e.provider);
  switch (e.type) {
    case "icons": {
      const o = e.prefix, c = e.icons.join(","), u = new URLSearchParams({
        icons: c
      });
      i += o + ".json?" + u.toString();
      break;
    }
    case "custom": {
      const o = e.uri;
      i += o.slice(0, 1) === "/" ? o.slice(1) : o;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let r = 503;
  Rt(t + i).then((o) => {
    const s = o.status;
    if (s !== 200) {
      setTimeout(() => {
        n(an(s) ? "abort" : "next", s);
      });
      return;
    }
    return r = 501, o.json();
  }).then((o) => {
    if (typeof o != "object" || o === null) {
      setTimeout(() => {
        o === 404 ? n("abort", o) : n("next", r);
      });
      return;
    }
    setTimeout(() => {
      n("success", o);
    });
  }).catch(() => {
    n("next", r);
  });
}, pn = {
  prepare: dn,
  send: gn
};
function kn(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  t.sort((r, o) => r.provider !== o.provider ? r.provider.localeCompare(o.provider) : r.prefix !== o.prefix ? r.prefix.localeCompare(o.prefix) : r.name.localeCompare(o.name));
  let i = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((r) => {
    if (i.name === r.name && i.prefix === r.prefix && i.provider === r.provider)
      return;
    i = r;
    const o = r.provider, s = r.prefix, c = r.name, u = n[o] || (n[o] = /* @__PURE__ */ Object.create(null)), l = u[s] || (u[s] = A(o, s));
    let a;
    c in l.icons ? a = e.loaded : s === "" || l.missing.has(c) ? a = e.missing : a = e.pending;
    const f = {
      provider: o,
      prefix: s,
      name: c
    };
    a.push(f);
  }), e;
}
function ke(t, e) {
  t.forEach((n) => {
    const i = n.loaderCallbacks;
    i && (n.loaderCallbacks = i.filter((r) => r.id !== e));
  });
}
function mn(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let n = !1;
    const i = t.provider, r = t.prefix;
    e.forEach((o) => {
      const s = o.icons, c = s.pending.length;
      s.pending = s.pending.filter((u) => {
        if (u.prefix !== r)
          return !0;
        const l = u.name;
        if (t.icons[l])
          s.loaded.push({
            provider: i,
            prefix: r,
            name: l
          });
        else if (t.missing.has(l))
          s.missing.push({
            provider: i,
            prefix: r,
            name: l
          });
        else
          return n = !0, !0;
        return !1;
      }), s.pending.length !== c && (n || ke([t], o.id), o.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let yn = 0;
function wn(t, e, n) {
  const i = yn++, r = ke.bind(null, n, i);
  if (!e.pending.length)
    return r;
  const o = {
    id: i,
    icons: e,
    callback: t,
    abort: r
  };
  return n.forEach((s) => {
    (s.loaderCallbacks || (s.loaderCallbacks = [])).push(o);
  }), r;
}
function bn(t, e = !0, n = !1) {
  const i = [];
  return t.forEach((r) => {
    const o = typeof r == "string" ? nt(r, e, n) : r;
    o && i.push(o);
  }), i;
}
var xn = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function vn(t, e, n, i) {
  const r = t.resources.length, o = t.random ? Math.floor(Math.random() * r) : t.index;
  let s;
  if (t.random) {
    let x = t.resources.slice(0);
    for (s = []; x.length > 1; ) {
      const C = Math.floor(Math.random() * x.length);
      s.push(x[C]), x = x.slice(0, C).concat(x.slice(C + 1));
    }
    s = s.concat(x);
  } else
    s = t.resources.slice(o).concat(t.resources.slice(0, o));
  const c = Date.now();
  let u = "pending", l = 0, a, f = null, d = [], g = [];
  typeof i == "function" && g.push(i);
  function h() {
    f && (clearTimeout(f), f = null);
  }
  function k() {
    u === "pending" && (u = "aborted"), h(), d.forEach((x) => {
      x.status === "pending" && (x.status = "aborted");
    }), d = [];
  }
  function w(x, C) {
    C && (g = []), typeof x == "function" && g.push(x);
  }
  function b() {
    return {
      startTime: c,
      payload: e,
      status: u,
      queriesSent: l,
      queriesPending: d.length,
      subscribe: w,
      abort: k
    };
  }
  function p() {
    u = "failed", g.forEach((x) => {
      x(void 0, a);
    });
  }
  function _() {
    d.forEach((x) => {
      x.status === "pending" && (x.status = "aborted");
    }), d = [];
  }
  function K(x, C, S) {
    const T = C !== "success";
    switch (d = d.filter((O) => O !== x), u) {
      case "pending":
        break;
      case "failed":
        if (T || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (C === "abort") {
      a = S, p();
      return;
    }
    if (T) {
      a = S, d.length || (s.length ? E() : p());
      return;
    }
    if (h(), _(), !t.random) {
      const O = t.resources.indexOf(x.resource);
      O !== -1 && O !== t.index && (t.index = O);
    }
    u = "completed", g.forEach((O) => {
      O(S);
    });
  }
  function E() {
    if (u !== "pending")
      return;
    h();
    const x = s.shift();
    if (x === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          h(), u === "pending" && (_(), p());
        }, t.timeout);
        return;
      }
      p();
      return;
    }
    const C = {
      status: "pending",
      resource: x,
      callback: (S, T) => {
        K(C, S, T);
      }
    };
    d.push(C), l++, f = setTimeout(E, t.rotate), n(x, e, C.callback);
  }
  return setTimeout(E), b;
}
function me(t) {
  const e = {
    ...xn,
    ...t
  };
  let n = [];
  function i() {
    n = n.filter((c) => c().status === "pending");
  }
  function r(c, u, l) {
    const a = vn(
      e,
      c,
      u,
      (f, d) => {
        i(), l && l(f, d);
      }
    );
    return n.push(a), a;
  }
  function o(c) {
    return n.find((u) => c(u)) || null;
  }
  return {
    query: r,
    find: o,
    setIndex: (c) => {
      e.index = c;
    },
    getIndex: () => e.index,
    cleanup: i
  };
}
function Vt() {
}
const lt = /* @__PURE__ */ Object.create(null);
function _n(t) {
  if (!lt[t]) {
    const e = Tt(t);
    if (!e)
      return;
    const n = me(e), i = {
      config: e,
      redundancy: n
    };
    lt[t] = i;
  }
  return lt[t];
}
function Cn(t, e, n) {
  let i, r;
  if (typeof t == "string") {
    const o = kt(t);
    if (!o)
      return n(void 0, 424), Vt;
    r = o.send;
    const s = _n(t);
    s && (i = s.redundancy);
  } else {
    const o = Lt(t);
    if (o) {
      i = me(o);
      const s = t.resources ? t.resources[0] : "", c = kt(s);
      c && (r = c.send);
    }
  }
  return !i || !r ? (n(void 0, 424), Vt) : i.query(e, r, n)().abort;
}
const zt = "iconify2", q = "iconify", ye = q + "-count", Qt = q + "-version", we = 36e5, Sn = 168;
function mt(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function jt(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function Ut(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function yt(t, e) {
  return jt(t, ye, e.toString());
}
function wt(t) {
  return parseInt(mt(t, ye)) || 0;
}
const rt = {
  local: !0,
  session: !0
}, be = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Mt = !1;
function In(t) {
  Mt = t;
}
let J = typeof window > "u" ? {} : window;
function xe(t) {
  const e = t + "Storage";
  try {
    if (J && J[e] && typeof J[e].length == "number")
      return J[e];
  } catch {
  }
  rt[t] = !1;
}
function ve(t, e) {
  const n = xe(t);
  if (!n)
    return;
  const i = mt(n, Qt);
  if (i !== zt) {
    if (i) {
      const c = wt(n);
      for (let u = 0; u < c; u++)
        Ut(n, q + u.toString());
    }
    jt(n, Qt, zt), yt(n, 0);
    return;
  }
  const r = Math.floor(Date.now() / we) - Sn, o = (c) => {
    const u = q + c.toString(), l = mt(n, u);
    if (typeof l == "string") {
      try {
        const a = JSON.parse(l);
        if (typeof a == "object" && typeof a.cached == "number" && a.cached > r && typeof a.provider == "string" && typeof a.data == "object" && typeof a.data.prefix == "string" && // Valid item: run callback
        e(a, c))
          return !0;
      } catch {
      }
      Ut(n, u);
    }
  };
  let s = wt(n);
  for (let c = s - 1; c >= 0; c--)
    o(c) || (c === s - 1 ? (s--, yt(n, s)) : be[t].add(c));
}
function _e() {
  if (!Mt) {
    In(!0);
    for (const t in rt)
      ve(t, (e) => {
        const n = e.data, i = e.provider, r = n.prefix, o = A(
          i,
          r
        );
        if (!It(o, n).length)
          return !1;
        const s = n.lastModified || -1;
        return o.lastModifiedCached = o.lastModifiedCached ? Math.min(o.lastModifiedCached, s) : s, !0;
      });
  }
}
function Ln(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const i in rt)
      ve(i, (r) => {
        const o = r.data;
        return r.provider !== t.provider || o.prefix !== t.prefix || o.lastModified === e;
      });
  return !0;
}
function En(t, e) {
  Mt || _e();
  function n(i) {
    let r;
    if (!rt[i] || !(r = xe(i)))
      return;
    const o = be[i];
    let s;
    if (o.size)
      o.delete(s = Array.from(o).shift());
    else if (s = wt(r), !yt(r, s + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / we),
      provider: t.provider,
      data: e
    };
    return jt(
      r,
      q + s.toString(),
      JSON.stringify(c)
    );
  }
  e.lastModified && !Ln(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function Zt() {
}
function Tn(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, mn(t);
  }));
}
function jn(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: i } = t, r = t.iconsToLoad;
    delete t.iconsToLoad;
    let o;
    if (!r || !(o = kt(n)))
      return;
    o.prepare(n, i, r).forEach((c) => {
      Cn(n, c, (u) => {
        if (typeof u != "object")
          c.icons.forEach((l) => {
            t.missing.add(l);
          });
        else
          try {
            const l = It(
              t,
              u
            );
            if (!l.length)
              return;
            const a = t.pendingIcons;
            a && l.forEach((f) => {
              a.delete(f);
            }), En(t, u);
          } catch (l) {
            console.error(l);
          }
        Tn(t);
      });
    });
  }));
}
const Mn = (t, e) => {
  const n = bn(t, !0, he()), i = kn(n);
  if (!i.pending.length) {
    let u = !0;
    return e && setTimeout(() => {
      u && e(
        i.loaded,
        i.missing,
        i.pending,
        Zt
      );
    }), () => {
      u = !1;
    };
  }
  const r = /* @__PURE__ */ Object.create(null), o = [];
  let s, c;
  return i.pending.forEach((u) => {
    const { provider: l, prefix: a } = u;
    if (a === c && l === s)
      return;
    s = l, c = a, o.push(A(l, a));
    const f = r[l] || (r[l] = /* @__PURE__ */ Object.create(null));
    f[a] || (f[a] = []);
  }), i.pending.forEach((u) => {
    const { provider: l, prefix: a, name: f } = u, d = A(l, a), g = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    g.has(f) || (g.add(f), r[l][a].push(f));
  }), o.forEach((u) => {
    const { provider: l, prefix: a } = u;
    r[l][a].length && jn(u, r[l][a]);
  }), e ? wn(e, i, o) : Zt;
};
function On(t, e) {
  const n = {
    ...t
  };
  for (const i in e) {
    const r = e[i], o = typeof r;
    i in ge ? (r === null || r && (o === "string" || o === "number")) && (n[i] = r) : o === typeof n[i] && (n[i] = i === "rotate" ? r % 4 : r);
  }
  return n;
}
const Pn = /[\s,]+/;
function Fn(t, e) {
  e.split(Pn).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
function An(t, e = 0) {
  const n = t.replace(/^-?[0-9.]*/, "");
  function i(r) {
    for (; r < 0; )
      r += 4;
    return r % 4;
  }
  if (n === "") {
    const r = parseInt(t);
    return isNaN(r) ? 0 : i(r);
  } else if (n !== t) {
    let r = 0;
    switch (n) {
      case "%":
        r = 25;
        break;
      case "deg":
        r = 90;
    }
    if (r) {
      let o = parseFloat(t.slice(0, t.length - n.length));
      return isNaN(o) ? 0 : (o = o / r, o % 1 === 0 ? i(o) : 0);
    }
  }
  return e;
}
function Nn(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in e)
    n += " " + i + '="' + e[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function Dn(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Bn(t) {
  return "data:image/svg+xml," + Dn(t);
}
function Hn(t) {
  return 'url("' + Bn(t) + '")';
}
const qt = {
  ...pe,
  inline: !1
}, Rn = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Vn = {
  display: "inline-block"
}, bt = {
  "background-color": "currentColor"
}, Ce = {
  "background-color": "transparent"
}, Gt = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Kt = {
  "-webkit-mask": bt,
  mask: bt,
  background: Ce
};
for (const t in Kt) {
  const e = Kt[t];
  for (const n in Gt)
    e[t + "-" + n] = Gt[n];
}
function zn(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function Qn(t, e) {
  const n = On(qt, e), i = e.mode || "svg", r = i === "svg" ? { ...Rn } : {};
  t.body.indexOf("xlink:") === -1 && delete r["xmlns:xlink"];
  let o = typeof e.style == "string" ? e.style : "";
  for (let b in e) {
    const p = e[b];
    if (p !== void 0)
      switch (b) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[b] = p === !0 || p === "true" || p === 1;
          break;
        case "flip":
          typeof p == "string" && Fn(n, p);
          break;
        case "color":
          o = o + (o.length > 0 && o.trim().slice(-1) !== ";" ? ";" : "") + "color: " + p + "; ";
          break;
        case "rotate":
          typeof p == "string" ? n[b] = An(p) : typeof p == "number" && (n[b] = p);
          break;
        case "ariaHidden":
        case "aria-hidden":
          p !== !0 && p !== "true" && delete r["aria-hidden"];
          break;
        default:
          if (b.slice(0, 3) === "on:")
            break;
          qt[b] === void 0 && (r[b] = p);
      }
  }
  const s = en(t, n), c = s.attributes;
  if (n.inline && (o = "vertical-align: -0.125em; " + o), i === "svg") {
    Object.assign(r, c), o !== "" && (r.style = o);
    let b = 0, p = e.id;
    return typeof p == "string" && (p = p.replace(/-/g, "_")), {
      svg: !0,
      attributes: r,
      body: sn(s.body, p ? () => p + "ID" + b++ : "iconifySvelte")
    };
  }
  const { body: u, width: l, height: a } = t, f = i === "mask" || (i === "bg" ? !1 : u.indexOf("currentColor") !== -1), d = Nn(u, {
    ...c,
    width: l + "",
    height: a + ""
  }), h = {
    "--svg": Hn(d)
  }, k = (b) => {
    const p = c[b];
    p && (h[b] = zn(p));
  };
  k("width"), k("height"), Object.assign(h, Vn, f ? bt : Ce);
  let w = "";
  for (const b in h)
    w += b + ": " + h[b] + ";";
  return r.style = w + o, {
    svg: !1,
    attributes: r
  };
}
he(!0);
cn("", pn);
if (typeof document < "u" && typeof window < "u") {
  _e();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((i) => {
      try {
        // Check if item is an object and not null/array
        (typeof i != "object" || i === null || i instanceof Array || // Check for 'icons' and 'prefix'
        typeof i.icons != "object" || typeof i.prefix != "string" || // Add icon set
        !Xe(i)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let n in e) {
        const i = "IconifyProviders[" + n + "] is invalid.";
        try {
          const r = e[n];
          if (typeof r != "object" || !r || r.resources === void 0)
            continue;
          ln(n, r) || console.error(i);
        } catch {
          console.error(i);
        }
      }
  }
}
function Un(t, e, n, i, r) {
  function o() {
    e.loading && (e.loading.abort(), e.loading = null);
  }
  if (typeof t == "object" && t !== null && typeof t.body == "string")
    return e.name = "", o(), { data: { ...it, ...t } };
  let s;
  if (typeof t != "string" || (s = nt(t, !1, !0)) === null)
    return o(), null;
  const c = Je(s);
  if (!c)
    return n && (!e.loading || e.loading.name !== t) && (o(), e.name = "", e.loading = {
      name: t,
      abort: Mn([s], i)
    }), null;
  o(), e.name !== t && (e.name = t, r && !e.destroyed && r(t));
  const u = ["iconify"];
  return s.prefix !== "" && u.push("iconify--" + s.prefix), s.provider !== "" && u.push("iconify--" + s.provider), { data: c, classes: u };
}
function Zn(t, e) {
  return t ? Qn({
    ...it,
    ...t
  }, e) : null;
}
function Jt(t) {
  let e;
  function n(o, s) {
    return (
      /*data*/
      o[0].svg ? Gn : qn
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = ie();
    },
    m(o, s) {
      r.m(o, s), M(o, e, s);
    },
    p(o, s) {
      i === (i = n(o)) && r ? r.p(o, s) : (r.d(1), r = i(o), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(o) {
      o && L(e), r.d(o);
    }
  };
}
function qn(t) {
  let e, n = [
    /*data*/
    t[0].attributes
  ], i = {};
  for (let r = 0; r < n.length; r += 1)
    i = $(i, n[r]);
  return {
    c() {
      e = v("span"), Ft(e, i);
    },
    m(r, o) {
      M(r, e, o);
    },
    p(r, o) {
      Ft(e, i = ce(n, [o & /*data*/
      1 && /*data*/
      r[0].attributes]));
    },
    d(r) {
      r && L(e);
    }
  };
}
function Gn(t) {
  let e, n = (
    /*data*/
    t[0].body + ""
  ), i = [
    /*data*/
    t[0].attributes
  ], r = {};
  for (let o = 0; o < i.length; o += 1)
    r = $(r, i[o]);
  return {
    c() {
      e = ut("svg"), At(e, r);
    },
    m(o, s) {
      M(o, e, s), e.innerHTML = n;
    },
    p(o, s) {
      s & /*data*/
      1 && n !== (n = /*data*/
      o[0].body + "") && (e.innerHTML = n), At(e, r = ce(i, [s & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && L(e);
    }
  };
}
function Kn(t) {
  let e, n = (
    /*data*/
    t[0] && Jt(t)
  );
  return {
    c() {
      n && n.c(), e = ie();
    },
    m(i, r) {
      n && n.m(i, r), M(i, e, r);
    },
    p(i, [r]) {
      /*data*/
      i[0] ? n ? n.p(i, r) : (n = Jt(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: F,
    o: F,
    d(i) {
      i && L(e), n && n.d(i);
    }
  };
}
function Jn(t, e, n) {
  const i = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let r = !1, o = 0, s;
  const c = (l) => {
    typeof e.onLoad == "function" && e.onLoad(l), Pe()("load", { icon: l });
  };
  function u() {
    n(3, o++, o);
  }
  return Me(() => {
    n(2, r = !0);
  }), Oe(() => {
    n(1, i.destroyed = !0, i), i.loading && (i.loading.abort(), n(1, i.loading = null, i));
  }), t.$$set = (l) => {
    n(6, e = $($({}, e), Pt(l)));
  }, t.$$.update = () => {
    {
      const l = Un(e.icon, i, r, u, c);
      n(0, s = l ? Zn(l.data, e) : null), s && l.classes && n(
        0,
        s.attributes.class = (typeof e.class == "string" ? e.class + " " : "") + l.classes.join(" "),
        s
      );
    }
  }, e = Pt(e), [s, i, r, o];
}
class Wn extends St {
  constructor(e) {
    super(), Ct(this, e, Jn, Kn, xt, {});
  }
}
function Wt(t, e, n) {
  const i = t.slice();
  return i[7] = e[n].title, i[8] = e[n].items, i;
}
function Xt(t, e, n) {
  const i = t.slice();
  return i[7] = e[n].title, i[11] = e[n].icon, i[12] = e[n].url, i[14] = n, i;
}
function Yt(t) {
  let e, n, i, r, o = (
    /*title*/
    t[7] + ""
  ), s, c, u, l;
  n = new Wn({
    props: {
      class: "uikit-w-5 uikit-h-5",
      icon: (
        /*icon*/
        t[11]
      )
    }
  });
  function a() {
    return (
      /*click_handler*/
      t[5](
        /*url*/
        t[12]
      )
    );
  }
  return {
    c() {
      e = v("button"), Be(n.$$.fragment), i = I(), r = v("span"), s = G(o), y(r, "class", "uikit-mx-2 uikit-text-sm uikit-font-medium"), y(e, "class", "uikit-flex uikit-items-center uikit-px-3 uikit-py-2 uikit-text-gray-600 uikit-transition-colors uikit-duration-300 uikit-transform uikit-rounded-lg dark:uikit-text-gray-200 hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-800 dark:hover:uikit-text-gray-200 hover:uikit-text-gray-700");
    },
    m(f, d) {
      M(f, e, d), le(n, e, null), m(e, i), m(e, r), m(r, s), c = !0, u || (l = ft(e, "click", a), u = !0);
    },
    p(f, d) {
      t = f;
      const g = {};
      d & /*menus*/
      2 && (g.icon = /*icon*/
      t[11]), n.$set(g), (!c || d & /*menus*/
      2) && o !== (o = /*title*/
      t[7] + "") && vt(s, o);
    },
    i(f) {
      c || (j(n.$$.fragment, f), c = !0);
    },
    o(f) {
      U(n.$$.fragment, f), c = !1;
    },
    d(f) {
      f && L(e), ue(n), u = !1, l();
    }
  };
}
function $t(t) {
  let e, n, i = (
    /*title*/
    t[7] + ""
  ), r, o, s, c, u = tt(
    /*items*/
    t[8]
  ), l = [];
  for (let f = 0; f < u.length; f += 1)
    l[f] = Yt(Xt(t, u, f));
  const a = (f) => U(l[f], 1, 1, () => {
    l[f] = null;
  });
  return {
    c() {
      e = v("div"), n = v("p"), r = G(i), o = I();
      for (let f = 0; f < l.length; f += 1)
        l[f].c();
      s = I(), y(n, "class", "uikit-px-3 uikit-text-xs uikit-text-gray-500 uikit-uppercase dark:uikit-text-gray-400"), y(e, "class", "uikit-space-y-3");
    },
    m(f, d) {
      M(f, e, d), m(e, n), m(n, r), m(e, o);
      for (let g = 0; g < l.length; g += 1)
        l[g] && l[g].m(e, null);
      m(e, s), c = !0;
    },
    p(f, d) {
      if ((!c || d & /*menus*/
      2) && i !== (i = /*title*/
      f[7] + "") && vt(r, i), d & /*onClick, menus*/
      6) {
        u = tt(
          /*items*/
          f[8]
        );
        let g;
        for (g = 0; g < u.length; g += 1) {
          const h = Xt(f, u, g);
          l[g] ? (l[g].p(h, d), j(l[g], 1)) : (l[g] = Yt(h), l[g].c(), j(l[g], 1), l[g].m(e, s));
        }
        for (oe(), g = u.length; g < l.length; g += 1)
          a(g);
        se();
      }
    },
    i(f) {
      if (!c) {
        for (let d = 0; d < u.length; d += 1)
          j(l[d]);
        c = !0;
      }
    },
    o(f) {
      l = l.filter(Boolean);
      for (let d = 0; d < l.length; d += 1)
        U(l[d]);
      c = !1;
    },
    d(f) {
      f && L(e), ne(l, f);
    }
  };
}
function Xn(t) {
  let e, n, i, r, o, s, c, u, l, a, f = tt(
    /*menus*/
    t[1]
  ), d = [];
  for (let h = 0; h < f.length; h += 1)
    d[h] = $t(Wt(t, f, h));
  const g = (h) => U(d[h], 1, 1, () => {
    d[h] = null;
  });
  return {
    c() {
      e = v("div"), n = v("aside"), i = v("a"), r = v("div"), r.innerHTML = '<svg viewBox="0 0 106 85" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7393 71.3241L3.41309 81.6338C2.15269 82.8921 0 81.9995 0 80.2184V54.488C0 52.7067 2.15331 51.8141 3.41352 53.0731L13.7393 63.3887C14.262 63.9093 14.6767 64.5277 14.9597 65.2086C15.2427 65.8894 15.3883 66.6193 15.3883 67.3564C15.3883 68.0935 15.2427 68.8234 14.9597 69.5042C14.6767 70.1851 14.262 70.8035 13.7393 71.3241Z" fill="#2563eb"></path><path d="M91.3683 71.3241L101.694 81.6337C102.955 82.8921 105.108 81.9995 105.108 80.2184V54.488C105.108 52.7067 102.954 51.8141 101.694 53.0731L91.3683 63.3887C90.8456 63.9093 90.4309 64.5277 90.1479 65.2086C89.8649 65.8894 89.7192 66.6193 89.7192 67.3564C89.7192 68.0935 89.8649 68.8234 90.1479 69.5042C90.4309 70.1851 90.8456 70.8035 91.3683 71.3241Z" fill="#2563eb"></path><path d="M49.7091 49.6385L6.82642 6.81672C4.30574 4.29962 0 6.0849 0 9.64715V28.0139C0 29.076 0.422407 30.0945 1.1741 30.8449L44.8945 74.4874C46.9238 76.5064 49.6719 77.6402 52.5368 77.6402C55.4017 77.6402 58.1498 76.5064 60.1791 74.4874L103.932 30.8536C104.685 30.1031 105.108 29.084 105.108 28.0213V9.65448C105.108 6.09239 100.802 4.30703 98.2813 6.8238L55.3984 49.6385C54.6437 50.3912 53.6205 50.814 52.5538 50.814C51.487 50.814 50.4638 50.3912 49.7091 49.6385Z" fill="#2563eb"></path></svg>', o = I(), s = v("div"), c = v("nav");
      for (let h = 0; h < d.length; h += 1)
        d[h].c();
      u = I(), l = v("div"), l.textContent = "content", y(r, "class", "uikit-h-7 uikit-w-7"), y(
        i,
        "href",
        /*homeurl*/
        t[0]
      ), y(c, "class", "uikit--mx-3 uikit-space-y-6"), y(s, "class", "uikit-flex uikit-flex-col uikit-justify-between uikit-flex-1 uikit-mt-6"), y(n, "class", "uikit-flex uikit-flex-col uikit-w-64 uikit-h-full uikit-px-5 uikit-py-8 uikit-overflow-y-auto uikit-bg-white uikit-border-r rtl:uikit-border-r-0 rtl:uikit-border-l dark:uikit-bg-gray-900 dark:uikit-border-gray-700"), y(l, "class", "uikit-flex-grow uikit-px-5 uikit-py-8"), y(e, "class", "uikit-w-screen uikit-h-screen uikit-flex");
    },
    m(h, k) {
      M(h, e, k), m(e, n), m(n, i), m(i, r), m(n, o), m(n, s), m(s, c);
      for (let w = 0; w < d.length; w += 1)
        d[w] && d[w].m(c, null);
      m(e, u), m(e, l), t[6](l), a = !0;
    },
    p(h, [k]) {
      if ((!a || k & /*homeurl*/
      1) && y(
        i,
        "href",
        /*homeurl*/
        h[0]
      ), k & /*menus, onClick*/
      6) {
        f = tt(
          /*menus*/
          h[1]
        );
        let w;
        for (w = 0; w < f.length; w += 1) {
          const b = Wt(h, f, w);
          d[w] ? (d[w].p(b, k), j(d[w], 1)) : (d[w] = $t(b), d[w].c(), j(d[w], 1), d[w].m(c, null));
        }
        for (oe(), w = f.length; w < d.length; w += 1)
          g(w);
        se();
      }
    },
    i(h) {
      if (!a) {
        for (let k = 0; k < f.length; k += 1)
          j(d[k]);
        a = !0;
      }
    },
    o(h) {
      d = d.filter(Boolean);
      for (let k = 0; k < d.length; k += 1)
        U(d[k]);
      a = !1;
    },
    d(h) {
      h && L(e), ne(d, h), t[6](null);
    }
  };
}
function Yn(t, e, n) {
  let { homeurl: i = "" } = e, { menus: r = [] } = e, { onClick: o = (a) => {
    console.log(a);
  } } = e;
  function s(a) {
    a && (n(3, c.innerHTML = "", c), c.appendChild(a));
  }
  let c;
  const u = (a) => o(a);
  function l(a) {
    at[a ? "unshift" : "push"](() => {
      c = a, n(3, c);
    });
  }
  return t.$$set = (a) => {
    "homeurl" in a && n(0, i = a.homeurl), "menus" in a && n(1, r = a.menus), "onClick" in a && n(2, o = a.onClick);
  }, [i, r, o, c, s, u, l];
}
class ei extends St {
  constructor(e) {
    super(), Ct(this, e, Yn, Xn, xt, {
      homeurl: 0,
      menus: 1,
      onClick: 2,
      setContent: 4
    });
  }
  get setContent() {
    return this.$$.ctx[4];
  }
}
export {
  ei as Dashboard,
  ti as NotFound
};
