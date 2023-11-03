var Ie = Object.defineProperty;
var Le = (t, e, n) => e in t ? Ie(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ot = (t, e, n) => (Le(t, typeof e != "symbol" ? e + "" : e, n), n);
function F() {
}
function Y(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function ie(t) {
  return t();
}
function Ft() {
  return /* @__PURE__ */ Object.create(null);
}
function R(t) {
  t.forEach(ie);
}
function re(t) {
  return typeof t == "function";
}
function xt(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Ee(t) {
  return Object.keys(t).length === 0;
}
function At(t) {
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
function E(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function oe(t, e) {
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
function se() {
  return G("");
}
function ft(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function y(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const Te = ["width", "height"];
function Nt(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && Te.indexOf(i) === -1 ? t[i] = e[i] : y(t, i, e[i]);
}
function Dt(t, e) {
  for (const n in e)
    y(t, n, e[n]);
}
function je(t) {
  return Array.from(t.childNodes);
}
function vt(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function Me(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
let U;
function z(t) {
  U = t;
}
function _t() {
  if (!U)
    throw new Error("Function called outside component initialization");
  return U;
}
function Oe(t) {
  _t().$$.on_mount.push(t);
}
function Pe(t) {
  _t().$$.on_destroy.push(t);
}
function Fe() {
  const t = _t();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const o = Me(
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
const B = [], at = [];
let H = [];
const Bt = [], Ae = /* @__PURE__ */ Promise.resolve();
let dt = !1;
function Ne() {
  dt || (dt = !0, Ae.then(ce));
}
function ht(t) {
  H.push(t);
}
const st = /* @__PURE__ */ new Set();
let D = 0;
function ce() {
  if (D !== 0)
    return;
  const t = U;
  do {
    try {
      for (; D < B.length; ) {
        const e = B[D];
        D++, z(e), De(e.$$);
      }
    } catch (e) {
      throw B.length = 0, D = 0, e;
    }
    for (z(null), B.length = 0, D = 0; at.length; )
      at.pop()();
    for (let e = 0; e < H.length; e += 1) {
      const n = H[e];
      st.has(n) || (st.add(n), n());
    }
    H.length = 0;
  } while (B.length);
  for (; Bt.length; )
    Bt.pop()();
  dt = !1, st.clear(), z(t);
}
function De(t) {
  if (t.fragment !== null) {
    t.update(), R(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ht);
  }
}
function Be(t) {
  const e = [], n = [];
  H.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), H = e;
}
const W = /* @__PURE__ */ new Set();
let P;
function Ct() {
  P = {
    r: 0,
    c: [],
    p: P
    // parent group
  };
}
function St() {
  P.r || R(P.c), P = P.p;
}
function L(t, e) {
  t && t.i && (W.delete(t), t.i(e));
}
function A(t, e, n, i) {
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
function le(t, e) {
  const n = {}, i = {}, r = { $$scope: 1 };
  let o = t.length;
  for (; o--; ) {
    const s = t[o], l = e[o];
    if (l) {
      for (const u in s)
        u in l || (i[u] = 1);
      for (const u in l)
        r[u] || (n[u] = l[u], r[u] = 1);
      t[o] = l;
    } else
      for (const u in s)
        r[u] = 1;
  }
  for (const s in i)
    s in n || (n[s] = void 0);
  return n;
}
function He(t) {
  t && t.c();
}
function ue(t, e, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, n), ht(() => {
    const o = t.$$.on_mount.map(ie).filter(re);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : R(o), t.$$.on_mount = [];
  }), r.forEach(ht);
}
function fe(t, e) {
  const n = t.$$;
  n.fragment !== null && (Be(n.after_update), R(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Re(t, e) {
  t.$$.dirty[0] === -1 && (B.push(t), Ne(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function It(t, e, n, i, r, o, s, l = [-1]) {
  const u = U;
  z(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: F,
    not_equal: r,
    bound: Ft(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Ft(),
    dirty: l,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  s && s(c.root);
  let f = !1;
  if (c.ctx = n ? n(t, e.props || {}, (a, d, ...g) => {
    const h = g.length ? g[0] : d;
    return c.ctx && r(c.ctx[a], c.ctx[a] = h) && (!c.skip_bound && c.bound[a] && c.bound[a](h), f && Re(t, a)), d;
  }) : [], c.update(), f = !0, R(c.before_update), c.fragment = i ? i(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const a = je(e.target);
      c.fragment && c.fragment.l(a), a.forEach(E);
    } else
      c.fragment && c.fragment.c();
    e.intro && L(t.$$.fragment), ue(t, e.target, e.anchor), ce();
  }
  z(u);
}
class Lt {
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
    fe(this, 1), this.$destroy = F;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!re(n))
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
    this.$$set && !Ee(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Ve = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ve);
function ze(t) {
  let e, n, i, r, o, s, l, u, c, f, a, d, g, h, k, w, b, p, _, K, T, x, C;
  return {
    c() {
      e = v("div"), n = v("section"), i = v("div"), r = v("div"), o = v("p"), o.textContent = "404 error", s = I(), l = v("h1"), l.textContent = "Page not found", u = I(), c = v("p"), f = G(
        /*message*/
        t[2]
      ), a = I(), d = v("div"), g = v("button"), h = ut("svg"), k = ut("path"), w = I(), b = v("button"), b.textContent = "Go back", p = I(), _ = v("button"), _.textContent = "To home", K = I(), T = v("div"), T.innerHTML = '<div class="uikit-w-full uikit-max-w-lg lg:uikit-mx-auto"></div> <svg width="514" height="164" viewBox="0 0 514 164" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="101" cy="22" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="101" cy="142" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="21" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="141" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="193" cy="82" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="313" cy="82" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="253" cy="22" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="253" cy="142" r="20" stroke="#667085" stroke-width="2"></circle><path d="M1 102C1 90.9543 9.9543 82 21 82H141C152.046 82 161 90.9543 161 102C161 113.046 152.046 122 141 122H21C9.9543 122 1 113.046 1 102Z" stroke="#667085" stroke-width="2"></path><path d="M101 162C89.9543 162 81 153.046 81 142L81 22C81 10.9543 89.9543 2 101 2C112.046 2 121 10.9543 121 22L121 142C121 153.046 112.046 162 101 162Z" stroke="#667085" stroke-width="2"></path><path d="M7.14214 115.995C-0.668351 108.184 -0.668351 95.5211 7.14214 87.7106L86.7107 8.1421C94.5212 0.331614 107.184 0.331607 114.995 8.14209C122.805 15.9526 122.805 28.6159 114.995 36.4264L35.4264 115.995C27.6159 123.805 14.9526 123.805 7.14214 115.995Z" stroke="#667085" stroke-width="2"></path><circle cx="453" cy="22" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="453" cy="142" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="373" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="493" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><path d="M353 102C353 90.9543 361.954 82 373 82H493C504.046 82 513 90.9543 513 102C513 113.046 504.046 122 493 122H373C361.954 122 353 113.046 353 102Z" stroke="#667085" stroke-width="2"></path><path d="M453 162C441.954 162 433 153.046 433 142L433 22C433 10.9543 441.954 2 453 2C464.046 2 473 10.9543 473 22L473 142C473 153.046 464.046 162 453 162Z" stroke="#667085" stroke-width="2"></path><path d="M359.142 115.995C351.332 108.184 351.332 95.5211 359.142 87.7106L438.711 8.1421C446.521 0.331614 459.184 0.331607 466.995 8.14209C474.805 15.9526 474.805 28.6159 466.995 36.4264L387.426 115.995C379.616 123.805 366.953 123.805 359.142 115.995Z" stroke="#667085" stroke-width="2"></path><circle cx="253" cy="82" r="80" stroke="#667085" stroke-width="2"></circle><circle cx="253" cy="82" r="40" stroke="#667085" stroke-width="2"></circle><line x1="8.74228e-08" y1="1" x2="513" y2="1.00004" stroke="#667085" stroke-width="2"></line><line x1="-8.74228e-08" y1="163" x2="513" y2="163" stroke="#667085" stroke-width="2"></line></svg>', y(o, "class", "uikit-text-sm uikit-font-medium uikit-text-blue-500 dark:uikit-text-blue-400"), y(l, "class", "uikit-mt-3 uikit-text-2xl uikit-font-semibold uikit-text-gray-800 dark:uikit-text-white md:uikit-text-3xl"), y(c, "class", "uikit-mt-4 uikit-text-gray-500 dark:uikit-text-gray-400"), y(k, "stroke-linecap", "round"), y(k, "stroke-linejoin", "round"), y(k, "d", "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"), y(h, "xmlns", "http://www.w3.org/2000/svg"), y(h, "fill", "none"), y(h, "viewBox", "0 0 24 24"), y(h, "stroke-width", "1.5"), y(h, "stroke", "currentColor"), y(h, "class", "uikit-w-5 uikit-h-5 uikit-rtl:rotate-180"), y(g, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-1/2 uikit-px-5 uikit-py-2 uikit-text-sm uikit-text-gray-700 uikit-transition-colors uikit-duration-200 uikit-bg-white uikit-border uikit-rounded-lg uikit-gap-x-2 sm:uikit-w-auto dark:uikit-hover:bg-gray-800 dark:uikit-bg-gray-900 hover:uikit-bg-gray-100 dark:uikit-text-gray-200 dark:uikit-border-gray-700"), y(_, "class", "uikit-w-1/2 uikit-px-5 uikit-py-2 uikit-text-sm uikit-tracking-wide uikit-text-white uikit-transition-colors uikit-duration-200 uikit-bg-blue-500 uikit-rounded-lg uikit-shrink-0 sm:uikit-w-auto hover:uikit-bg-blue-600 dark:hover:uikit-bg-blue-500 dark:uikit-bg-blue-600"), y(d, "class", "uikit-flex uikit-items-center uikit-mt-6 uikit-gap-x-3"), y(r, "class", "uikit-w-full lg:uikit-w-1/2"), y(T, "class", "uikit-relative uikit-w-full uikit-mt-12 lg:uikit-w-1/2 lg:uikit-mt-0"), y(i, "class", "uikit-container uikit-min-h-screen uikit-px-6 uikit-py-12 uikit-mx-auto lg:uikit-flex lg:uikit-items-center lg:uikit-gap-12"), y(n, "class", "uikit-bg-white dark:uikit-bg-gray-900"), y(e, "class", "uikit-w-screen uikit-h-screen uikit-px-36");
    },
    m(S, j) {
      M(S, e, j), m(e, n), m(n, i), m(i, r), m(r, o), m(r, s), m(r, l), m(r, u), m(r, c), m(c, f), m(r, a), m(r, d), m(d, g), m(g, h), m(h, k), m(g, w), m(g, b), m(d, p), m(d, _), m(i, K), m(i, T), x || (C = [
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
    p(S, [j]) {
      j & /*message*/
      4 && vt(
        f,
        /*message*/
        S[2]
      );
    },
    i: F,
    o: F,
    d(S) {
      S && E(e), x = !1, R(C);
    }
  };
}
function Qe(t, e, n) {
  let { backurl: i = "" } = e, { homeurl: r = "" } = e, { message: o = "Sorry, the page you are looking for doesn't exist.Here are some helpful links:" } = e;
  const s = () => {
    i !== "" && (window.location.href = i);
  }, l = () => {
    r !== "" && (window.location.href = r);
  };
  return t.$$set = (u) => {
    "backurl" in u && n(0, i = u.backurl), "homeurl" in u && n(1, r = u.homeurl), "message" in u && n(2, o = u.message);
  }, [i, r, o, s, l];
}
class ei extends Lt {
  constructor(e) {
    super(), It(this, e, Qe, ze, xt, { backurl: 0, homeurl: 1, message: 2 });
  }
}
const Q = /^[a-z0-9]+(-[a-z0-9]+)*$/, nt = (t, e, n, i = "") => {
  const r = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (r.length < 2 || r.length > 3)
      return null;
    i = r.shift().slice(1);
  }
  if (r.length > 3 || !r.length)
    return null;
  if (r.length > 1) {
    const l = r.pop(), u = r.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: r.length > 0 ? r[0] : i,
      prefix: u,
      name: l
    };
    return e && !$(c) ? null : c;
  }
  const o = r[0], s = o.split("-");
  if (s.length > 1) {
    const l = {
      provider: i,
      prefix: s.shift(),
      name: s.join("-")
    };
    return e && !$(l) ? null : l;
  }
  if (n && i === "") {
    const l = {
      provider: i,
      prefix: "",
      name: o
    };
    return e && !$(l, n) ? null : l;
  }
  return null;
}, $ = (t, e) => t ? !!((t.provider === "" || t.provider.match(Q)) && (e && t.prefix === "" || t.prefix.match(Q)) && t.name.match(Q)) : !1, ae = Object.freeze(
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
  ...ae,
  ...et
}), gt = Object.freeze({
  ...it,
  body: "",
  hidden: !1
});
function Ue(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const i = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return i && (n.rotate = i), n;
}
function Ht(t, e) {
  const n = Ue(t, e);
  for (const i in gt)
    i in et ? i in t && !(i in n) && (n[i] = et[i]) : i in e ? n[i] = e[i] : i in t && (n[i] = t[i]);
  return n;
}
function Ze(t, e) {
  const n = t.icons, i = t.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  function o(s) {
    if (n[s])
      return r[s] = [];
    if (!(s in r)) {
      r[s] = null;
      const l = i[s] && i[s].parent, u = l && o(l);
      u && (r[s] = [l].concat(u));
    }
    return r[s];
  }
  return (e || Object.keys(n).concat(Object.keys(i))).forEach(o), r;
}
function qe(t, e, n) {
  const i = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function s(l) {
    o = Ht(
      i[l] || r[l],
      o
    );
  }
  return s(e), n.forEach(s), Ht(t, o);
}
function de(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((r) => {
    e(r, null), n.push(r);
  });
  const i = Ze(t);
  for (const r in i) {
    const o = i[r];
    o && (e(r, qe(t, r, o)), n.push(r));
  }
  return n;
}
const Ge = {
  provider: "",
  aliases: {},
  not_found: {},
  ...ae
};
function ct(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function he(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !ct(t, Ge))
    return null;
  const n = e.icons;
  for (const r in n) {
    const o = n[r];
    if (!r.match(Q) || typeof o.body != "string" || !ct(
      o,
      gt
    ))
      return null;
  }
  const i = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const r in i) {
    const o = i[r], s = o.parent;
    if (!r.match(Q) || typeof s != "string" || !n[s] && !i[s] || !ct(
      o,
      gt
    ))
      return null;
  }
  return e;
}
const Rt = /* @__PURE__ */ Object.create(null);
function Ke(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function N(t, e) {
  const n = Rt[t] || (Rt[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = Ke(t, e));
}
function Et(t, e) {
  return he(e) ? de(e, (n, i) => {
    i ? t.icons[n] = i : t.missing.add(n);
  }) : [];
}
function Je(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Z = !1;
function ge(t) {
  return typeof t == "boolean" && (Z = t), Z;
}
function We(t) {
  const e = typeof t == "string" ? nt(t, !0, Z) : t;
  if (e) {
    const n = N(e.provider, e.prefix), i = e.name;
    return n.icons[i] || (n.missing.has(i) ? null : void 0);
  }
}
function $e(t, e) {
  const n = nt(t, !0, Z);
  if (!n)
    return !1;
  const i = N(n.provider, n.prefix);
  return Je(i, n.name, e);
}
function Xe(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), Z && !e && !t.prefix) {
    let r = !1;
    return he(t) && (t.prefix = "", de(t, (o, s) => {
      s && $e(o, s) && (r = !0);
    })), r;
  }
  const n = t.prefix;
  if (!$({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const i = N(e, n);
  return !!Et(i, t);
}
const pe = Object.freeze({
  width: null,
  height: null
}), ke = Object.freeze({
  // Dimensions
  ...pe,
  // Transformations
  ...et
}), Ye = /(-?[0-9.]*[0-9]+[0-9.]*)/g, tn = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Vt(t, e, n) {
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
  let o = i.shift(), s = tn.test(o);
  for (; ; ) {
    if (s) {
      const l = parseFloat(o);
      isNaN(l) ? r.push(o) : r.push(Math.ceil(l * e * n) / n);
    } else
      r.push(o);
    if (o = i.shift(), o === void 0)
      return r.join("");
    s = !s;
  }
}
const en = (t) => t === "unset" || t === "undefined" || t === "none";
function nn(t, e) {
  const n = {
    ...it,
    ...t
  }, i = {
    ...ke,
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
  const s = i.width, l = i.height, u = r.width, c = r.height;
  let f, a;
  s === null ? (a = l === null ? "1em" : l === "auto" ? c : l, f = Vt(a, u / c)) : (f = s === "auto" ? u : s, a = l === null ? Vt(f, c / u) : l === "auto" ? c : l);
  const d = {}, g = (h, k) => {
    en(k) || (d[h] = k.toString());
  };
  return g("width", f), g("height", a), d.viewBox = r.left.toString() + " " + r.top.toString() + " " + u.toString() + " " + c.toString(), {
    attributes: d,
    body: o
  };
}
const rn = /\sid="(\S+)"/g, on = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let sn = 0;
function cn(t, e = on) {
  const n = [];
  let i;
  for (; i = rn.exec(t); )
    n.push(i[1]);
  if (!n.length)
    return t;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((o) => {
    const s = typeof e == "function" ? e(o) : e + (sn++).toString(), l = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + l + ')([")]|\\.[a-z])', "g"),
      "$1" + s + r + "$3"
    );
  }), t = t.replace(new RegExp(r, "g"), ""), t;
}
const pt = /* @__PURE__ */ Object.create(null);
function ln(t, e) {
  pt[t] = e;
}
function kt(t) {
  return pt[t] || pt[""];
}
function Tt(t) {
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
const jt = /* @__PURE__ */ Object.create(null), V = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], X = [];
for (; V.length > 0; )
  V.length === 1 || Math.random() > 0.5 ? X.push(V.shift()) : X.push(V.pop());
jt[""] = Tt({
  resources: ["https://api.iconify.design"].concat(X)
});
function un(t, e) {
  const n = Tt(e);
  return n === null ? !1 : (jt[t] = n, !0);
}
function Mt(t) {
  return jt[t];
}
const fn = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let zt = fn();
function an(t, e) {
  const n = Mt(t);
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
function dn(t) {
  return t === 404;
}
const hn = (t, e, n) => {
  const i = [], r = an(t, e), o = "icons";
  let s = {
    type: o,
    provider: t,
    prefix: e,
    icons: []
  }, l = 0;
  return n.forEach((u, c) => {
    l += u.length + 1, l >= r && c > 0 && (i.push(s), s = {
      type: o,
      provider: t,
      prefix: e,
      icons: []
    }, l = u.length), s.icons.push(u);
  }), i.push(s), i;
};
function gn(t) {
  if (typeof t == "string") {
    const e = Mt(t);
    if (e)
      return e.path;
  }
  return "/";
}
const pn = (t, e, n) => {
  if (!zt) {
    n("abort", 424);
    return;
  }
  let i = gn(e.provider);
  switch (e.type) {
    case "icons": {
      const o = e.prefix, l = e.icons.join(","), u = new URLSearchParams({
        icons: l
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
  zt(t + i).then((o) => {
    const s = o.status;
    if (s !== 200) {
      setTimeout(() => {
        n(dn(s) ? "abort" : "next", s);
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
}, kn = {
  prepare: hn,
  send: pn
};
function mn(t) {
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
    const o = r.provider, s = r.prefix, l = r.name, u = n[o] || (n[o] = /* @__PURE__ */ Object.create(null)), c = u[s] || (u[s] = N(o, s));
    let f;
    l in c.icons ? f = e.loaded : s === "" || c.missing.has(l) ? f = e.missing : f = e.pending;
    const a = {
      provider: o,
      prefix: s,
      name: l
    };
    f.push(a);
  }), e;
}
function me(t, e) {
  t.forEach((n) => {
    const i = n.loaderCallbacks;
    i && (n.loaderCallbacks = i.filter((r) => r.id !== e));
  });
}
function yn(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let n = !1;
    const i = t.provider, r = t.prefix;
    e.forEach((o) => {
      const s = o.icons, l = s.pending.length;
      s.pending = s.pending.filter((u) => {
        if (u.prefix !== r)
          return !0;
        const c = u.name;
        if (t.icons[c])
          s.loaded.push({
            provider: i,
            prefix: r,
            name: c
          });
        else if (t.missing.has(c))
          s.missing.push({
            provider: i,
            prefix: r,
            name: c
          });
        else
          return n = !0, !0;
        return !1;
      }), s.pending.length !== l && (n || me([t], o.id), o.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let wn = 0;
function bn(t, e, n) {
  const i = wn++, r = me.bind(null, n, i);
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
function xn(t, e = !0, n = !1) {
  const i = [];
  return t.forEach((r) => {
    const o = typeof r == "string" ? nt(r, e, n) : r;
    o && i.push(o);
  }), i;
}
var vn = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function _n(t, e, n, i) {
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
  const l = Date.now();
  let u = "pending", c = 0, f, a = null, d = [], g = [];
  typeof i == "function" && g.push(i);
  function h() {
    a && (clearTimeout(a), a = null);
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
      startTime: l,
      payload: e,
      status: u,
      queriesSent: c,
      queriesPending: d.length,
      subscribe: w,
      abort: k
    };
  }
  function p() {
    u = "failed", g.forEach((x) => {
      x(void 0, f);
    });
  }
  function _() {
    d.forEach((x) => {
      x.status === "pending" && (x.status = "aborted");
    }), d = [];
  }
  function K(x, C, S) {
    const j = C !== "success";
    switch (d = d.filter((O) => O !== x), u) {
      case "pending":
        break;
      case "failed":
        if (j || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (C === "abort") {
      f = S, p();
      return;
    }
    if (j) {
      f = S, d.length || (s.length ? T() : p());
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
  function T() {
    if (u !== "pending")
      return;
    h();
    const x = s.shift();
    if (x === void 0) {
      if (d.length) {
        a = setTimeout(() => {
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
      callback: (S, j) => {
        K(C, S, j);
      }
    };
    d.push(C), c++, a = setTimeout(T, t.rotate), n(x, e, C.callback);
  }
  return setTimeout(T), b;
}
function ye(t) {
  const e = {
    ...vn,
    ...t
  };
  let n = [];
  function i() {
    n = n.filter((l) => l().status === "pending");
  }
  function r(l, u, c) {
    const f = _n(
      e,
      l,
      u,
      (a, d) => {
        i(), c && c(a, d);
      }
    );
    return n.push(f), f;
  }
  function o(l) {
    return n.find((u) => l(u)) || null;
  }
  return {
    query: r,
    find: o,
    setIndex: (l) => {
      e.index = l;
    },
    getIndex: () => e.index,
    cleanup: i
  };
}
function Qt() {
}
const lt = /* @__PURE__ */ Object.create(null);
function Cn(t) {
  if (!lt[t]) {
    const e = Mt(t);
    if (!e)
      return;
    const n = ye(e), i = {
      config: e,
      redundancy: n
    };
    lt[t] = i;
  }
  return lt[t];
}
function Sn(t, e, n) {
  let i, r;
  if (typeof t == "string") {
    const o = kt(t);
    if (!o)
      return n(void 0, 424), Qt;
    r = o.send;
    const s = Cn(t);
    s && (i = s.redundancy);
  } else {
    const o = Tt(t);
    if (o) {
      i = ye(o);
      const s = t.resources ? t.resources[0] : "", l = kt(s);
      l && (r = l.send);
    }
  }
  return !i || !r ? (n(void 0, 424), Qt) : i.query(e, r, n)().abort;
}
const Ut = "iconify2", q = "iconify", we = q + "-count", Zt = q + "-version", be = 36e5, In = 168;
function mt(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function Ot(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function qt(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function yt(t, e) {
  return Ot(t, we, e.toString());
}
function wt(t) {
  return parseInt(mt(t, we)) || 0;
}
const rt = {
  local: !0,
  session: !0
}, xe = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Pt = !1;
function Ln(t) {
  Pt = t;
}
let J = typeof window > "u" ? {} : window;
function ve(t) {
  const e = t + "Storage";
  try {
    if (J && J[e] && typeof J[e].length == "number")
      return J[e];
  } catch {
  }
  rt[t] = !1;
}
function _e(t, e) {
  const n = ve(t);
  if (!n)
    return;
  const i = mt(n, Zt);
  if (i !== Ut) {
    if (i) {
      const l = wt(n);
      for (let u = 0; u < l; u++)
        qt(n, q + u.toString());
    }
    Ot(n, Zt, Ut), yt(n, 0);
    return;
  }
  const r = Math.floor(Date.now() / be) - In, o = (l) => {
    const u = q + l.toString(), c = mt(n, u);
    if (typeof c == "string") {
      try {
        const f = JSON.parse(c);
        if (typeof f == "object" && typeof f.cached == "number" && f.cached > r && typeof f.provider == "string" && typeof f.data == "object" && typeof f.data.prefix == "string" && // Valid item: run callback
        e(f, l))
          return !0;
      } catch {
      }
      qt(n, u);
    }
  };
  let s = wt(n);
  for (let l = s - 1; l >= 0; l--)
    o(l) || (l === s - 1 ? (s--, yt(n, s)) : xe[t].add(l));
}
function Ce() {
  if (!Pt) {
    Ln(!0);
    for (const t in rt)
      _e(t, (e) => {
        const n = e.data, i = e.provider, r = n.prefix, o = N(
          i,
          r
        );
        if (!Et(o, n).length)
          return !1;
        const s = n.lastModified || -1;
        return o.lastModifiedCached = o.lastModifiedCached ? Math.min(o.lastModifiedCached, s) : s, !0;
      });
  }
}
function En(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const i in rt)
      _e(i, (r) => {
        const o = r.data;
        return r.provider !== t.provider || o.prefix !== t.prefix || o.lastModified === e;
      });
  return !0;
}
function Tn(t, e) {
  Pt || Ce();
  function n(i) {
    let r;
    if (!rt[i] || !(r = ve(i)))
      return;
    const o = xe[i];
    let s;
    if (o.size)
      o.delete(s = Array.from(o).shift());
    else if (s = wt(r), !yt(r, s + 1))
      return;
    const l = {
      cached: Math.floor(Date.now() / be),
      provider: t.provider,
      data: e
    };
    return Ot(
      r,
      q + s.toString(),
      JSON.stringify(l)
    );
  }
  e.lastModified && !En(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function Gt() {
}
function jn(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, yn(t);
  }));
}
function Mn(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: i } = t, r = t.iconsToLoad;
    delete t.iconsToLoad;
    let o;
    if (!r || !(o = kt(n)))
      return;
    o.prepare(n, i, r).forEach((l) => {
      Sn(n, l, (u) => {
        if (typeof u != "object")
          l.icons.forEach((c) => {
            t.missing.add(c);
          });
        else
          try {
            const c = Et(
              t,
              u
            );
            if (!c.length)
              return;
            const f = t.pendingIcons;
            f && c.forEach((a) => {
              f.delete(a);
            }), Tn(t, u);
          } catch (c) {
            console.error(c);
          }
        jn(t);
      });
    });
  }));
}
const On = (t, e) => {
  const n = xn(t, !0, ge()), i = mn(n);
  if (!i.pending.length) {
    let u = !0;
    return e && setTimeout(() => {
      u && e(
        i.loaded,
        i.missing,
        i.pending,
        Gt
      );
    }), () => {
      u = !1;
    };
  }
  const r = /* @__PURE__ */ Object.create(null), o = [];
  let s, l;
  return i.pending.forEach((u) => {
    const { provider: c, prefix: f } = u;
    if (f === l && c === s)
      return;
    s = c, l = f, o.push(N(c, f));
    const a = r[c] || (r[c] = /* @__PURE__ */ Object.create(null));
    a[f] || (a[f] = []);
  }), i.pending.forEach((u) => {
    const { provider: c, prefix: f, name: a } = u, d = N(c, f), g = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    g.has(a) || (g.add(a), r[c][f].push(a));
  }), o.forEach((u) => {
    const { provider: c, prefix: f } = u;
    r[c][f].length && Mn(u, r[c][f]);
  }), e ? bn(e, i, o) : Gt;
};
function Pn(t, e) {
  const n = {
    ...t
  };
  for (const i in e) {
    const r = e[i], o = typeof r;
    i in pe ? (r === null || r && (o === "string" || o === "number")) && (n[i] = r) : o === typeof n[i] && (n[i] = i === "rotate" ? r % 4 : r);
  }
  return n;
}
const Fn = /[\s,]+/;
function An(t, e) {
  e.split(Fn).forEach((n) => {
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
function Nn(t, e = 0) {
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
function Dn(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in e)
    n += " " + i + '="' + e[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function Bn(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Hn(t) {
  return "data:image/svg+xml," + Bn(t);
}
function Rn(t) {
  return 'url("' + Hn(t) + '")';
}
const Kt = {
  ...ke,
  inline: !1
}, Vn = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, zn = {
  display: "inline-block"
}, bt = {
  "background-color": "currentColor"
}, Se = {
  "background-color": "transparent"
}, Jt = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Wt = {
  "-webkit-mask": bt,
  mask: bt,
  background: Se
};
for (const t in Wt) {
  const e = Wt[t];
  for (const n in Jt)
    e[t + "-" + n] = Jt[n];
}
function Qn(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function Un(t, e) {
  const n = Pn(Kt, e), i = e.mode || "svg", r = i === "svg" ? { ...Vn } : {};
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
          typeof p == "string" && An(n, p);
          break;
        case "color":
          o = o + (o.length > 0 && o.trim().slice(-1) !== ";" ? ";" : "") + "color: " + p + "; ";
          break;
        case "rotate":
          typeof p == "string" ? n[b] = Nn(p) : typeof p == "number" && (n[b] = p);
          break;
        case "ariaHidden":
        case "aria-hidden":
          p !== !0 && p !== "true" && delete r["aria-hidden"];
          break;
        default:
          if (b.slice(0, 3) === "on:")
            break;
          Kt[b] === void 0 && (r[b] = p);
      }
  }
  const s = nn(t, n), l = s.attributes;
  if (n.inline && (o = "vertical-align: -0.125em; " + o), i === "svg") {
    Object.assign(r, l), o !== "" && (r.style = o);
    let b = 0, p = e.id;
    return typeof p == "string" && (p = p.replace(/-/g, "_")), {
      svg: !0,
      attributes: r,
      body: cn(s.body, p ? () => p + "ID" + b++ : "iconifySvelte")
    };
  }
  const { body: u, width: c, height: f } = t, a = i === "mask" || (i === "bg" ? !1 : u.indexOf("currentColor") !== -1), d = Dn(u, {
    ...l,
    width: c + "",
    height: f + ""
  }), h = {
    "--svg": Rn(d)
  }, k = (b) => {
    const p = l[b];
    p && (h[b] = Qn(p));
  };
  k("width"), k("height"), Object.assign(h, zn, a ? bt : Se);
  let w = "";
  for (const b in h)
    w += b + ": " + h[b] + ";";
  return r.style = w + o, {
    svg: !1,
    attributes: r
  };
}
ge(!0);
ln("", kn);
if (typeof document < "u" && typeof window < "u") {
  Ce();
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
          un(n, r) || console.error(i);
        } catch {
          console.error(i);
        }
      }
  }
}
function Zn(t, e, n, i, r) {
  function o() {
    e.loading && (e.loading.abort(), e.loading = null);
  }
  if (typeof t == "object" && t !== null && typeof t.body == "string")
    return e.name = "", o(), { data: { ...it, ...t } };
  let s;
  if (typeof t != "string" || (s = nt(t, !1, !0)) === null)
    return o(), null;
  const l = We(s);
  if (!l)
    return n && (!e.loading || e.loading.name !== t) && (o(), e.name = "", e.loading = {
      name: t,
      abort: On([s], i)
    }), null;
  o(), e.name !== t && (e.name = t, r && !e.destroyed && r(t));
  const u = ["iconify"];
  return s.prefix !== "" && u.push("iconify--" + s.prefix), s.provider !== "" && u.push("iconify--" + s.provider), { data: l, classes: u };
}
function qn(t, e) {
  return t ? Un({
    ...it,
    ...t
  }, e) : null;
}
function $t(t) {
  let e;
  function n(o, s) {
    return (
      /*data*/
      o[0].svg ? Kn : Gn
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = se();
    },
    m(o, s) {
      r.m(o, s), M(o, e, s);
    },
    p(o, s) {
      i === (i = n(o)) && r ? r.p(o, s) : (r.d(1), r = i(o), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(o) {
      o && E(e), r.d(o);
    }
  };
}
function Gn(t) {
  let e, n = [
    /*data*/
    t[0].attributes
  ], i = {};
  for (let r = 0; r < n.length; r += 1)
    i = Y(i, n[r]);
  return {
    c() {
      e = v("span"), Nt(e, i);
    },
    m(r, o) {
      M(r, e, o);
    },
    p(r, o) {
      Nt(e, i = le(n, [o & /*data*/
      1 && /*data*/
      r[0].attributes]));
    },
    d(r) {
      r && E(e);
    }
  };
}
function Kn(t) {
  let e, n = (
    /*data*/
    t[0].body + ""
  ), i = [
    /*data*/
    t[0].attributes
  ], r = {};
  for (let o = 0; o < i.length; o += 1)
    r = Y(r, i[o]);
  return {
    c() {
      e = ut("svg"), Dt(e, r);
    },
    m(o, s) {
      M(o, e, s), e.innerHTML = n;
    },
    p(o, s) {
      s & /*data*/
      1 && n !== (n = /*data*/
      o[0].body + "") && (e.innerHTML = n), Dt(e, r = le(i, [s & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && E(e);
    }
  };
}
function Jn(t) {
  let e, n = (
    /*data*/
    t[0] && $t(t)
  );
  return {
    c() {
      n && n.c(), e = se();
    },
    m(i, r) {
      n && n.m(i, r), M(i, e, r);
    },
    p(i, [r]) {
      /*data*/
      i[0] ? n ? n.p(i, r) : (n = $t(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: F,
    o: F,
    d(i) {
      i && E(e), n && n.d(i);
    }
  };
}
function Wn(t, e, n) {
  const i = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let r = !1, o = 0, s;
  const l = (c) => {
    typeof e.onLoad == "function" && e.onLoad(c), Fe()("load", { icon: c });
  };
  function u() {
    n(3, o++, o);
  }
  return Oe(() => {
    n(2, r = !0);
  }), Pe(() => {
    n(1, i.destroyed = !0, i), i.loading && (i.loading.abort(), n(1, i.loading = null, i));
  }), t.$$set = (c) => {
    n(6, e = Y(Y({}, e), At(c)));
  }, t.$$.update = () => {
    {
      const c = Zn(e.icon, i, r, u, l);
      n(0, s = c ? qn(c.data, e) : null), s && c.classes && n(
        0,
        s.attributes.class = (typeof e.class == "string" ? e.class + " " : "") + c.classes.join(" "),
        s
      );
    }
  }, e = At(e), [s, i, r, o];
}
class $n extends Lt {
  constructor(e) {
    super(), It(this, e, Wn, Jn, xt, {});
  }
}
function Xt(t, e, n) {
  const i = t.slice();
  return i[7] = e[n].title, i[8] = e[n].items, i;
}
function Yt(t, e, n) {
  const i = t.slice();
  return i[7] = e[n].title, i[11] = e[n].icon, i[12] = e[n].url, i[14] = n, i;
}
function te(t) {
  let e, n;
  return e = new $n({
    props: {
      class: "uikit-w-5 uikit-h-5",
      icon: (
        /*icon*/
        t[11]
      )
    }
  }), {
    c() {
      He(e.$$.fragment);
    },
    m(i, r) {
      ue(e, i, r), n = !0;
    },
    p(i, r) {
      const o = {};
      r & /*menus*/
      2 && (o.icon = /*icon*/
      i[11]), e.$set(o);
    },
    i(i) {
      n || (L(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(e, i);
    }
  };
}
function ee(t) {
  let e, n, i, r = (
    /*title*/
    t[7] + ""
  ), o, s, l, u, c = (
    /*icon*/
    t[11] && te(t)
  );
  function f() {
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
      e = v("button"), c && c.c(), n = I(), i = v("span"), o = G(r), y(i, "class", "uikit-mx-2 uikit-text-sm uikit-font-medium"), y(e, "class", "uikit-flex uikit-w-full uikit-items-center uikit-px-3 uikit-py-2 uikit-text-gray-600 uikit-transition-colors uikit-duration-300 uikit-transform uikit-rounded-lg dark:uikit-text-gray-200 hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-800 dark:hover:uikit-text-gray-200 hover:uikit-text-gray-700");
    },
    m(a, d) {
      M(a, e, d), c && c.m(e, null), m(e, n), m(e, i), m(i, o), s = !0, l || (u = ft(e, "click", f), l = !0);
    },
    p(a, d) {
      t = a, /*icon*/
      t[11] ? c ? (c.p(t, d), d & /*menus*/
      2 && L(c, 1)) : (c = te(t), c.c(), L(c, 1), c.m(e, n)) : c && (Ct(), A(c, 1, 1, () => {
        c = null;
      }), St()), (!s || d & /*menus*/
      2) && r !== (r = /*title*/
      t[7] + "") && vt(o, r);
    },
    i(a) {
      s || (L(c), s = !0);
    },
    o(a) {
      A(c), s = !1;
    },
    d(a) {
      a && E(e), c && c.d(), l = !1, u();
    }
  };
}
function ne(t) {
  let e, n, i = (
    /*title*/
    t[7] + ""
  ), r, o, s, l, u = tt(
    /*items*/
    t[8]
  ), c = [];
  for (let a = 0; a < u.length; a += 1)
    c[a] = ee(Yt(t, u, a));
  const f = (a) => A(c[a], 1, 1, () => {
    c[a] = null;
  });
  return {
    c() {
      e = v("div"), n = v("p"), r = G(i), o = I();
      for (let a = 0; a < c.length; a += 1)
        c[a].c();
      s = I(), y(n, "class", "uikit-px-3 uikit-text-xs uikit-text-gray-500 uikit-uppercase dark:uikit-text-gray-400"), y(e, "class", "uikit-space-y-3 uikit-w-full");
    },
    m(a, d) {
      M(a, e, d), m(e, n), m(n, r), m(e, o);
      for (let g = 0; g < c.length; g += 1)
        c[g] && c[g].m(e, null);
      m(e, s), l = !0;
    },
    p(a, d) {
      if ((!l || d & /*menus*/
      2) && i !== (i = /*title*/
      a[7] + "") && vt(r, i), d & /*onClick, menus*/
      6) {
        u = tt(
          /*items*/
          a[8]
        );
        let g;
        for (g = 0; g < u.length; g += 1) {
          const h = Yt(a, u, g);
          c[g] ? (c[g].p(h, d), L(c[g], 1)) : (c[g] = ee(h), c[g].c(), L(c[g], 1), c[g].m(e, s));
        }
        for (Ct(), g = u.length; g < c.length; g += 1)
          f(g);
        St();
      }
    },
    i(a) {
      if (!l) {
        for (let d = 0; d < u.length; d += 1)
          L(c[d]);
        l = !0;
      }
    },
    o(a) {
      c = c.filter(Boolean);
      for (let d = 0; d < c.length; d += 1)
        A(c[d]);
      l = !1;
    },
    d(a) {
      a && E(e), oe(c, a);
    }
  };
}
function Xn(t) {
  let e, n, i, r, o, s, l, u, c, f, a = tt(
    /*menus*/
    t[1]
  ), d = [];
  for (let h = 0; h < a.length; h += 1)
    d[h] = ne(Xt(t, a, h));
  const g = (h) => A(d[h], 1, 1, () => {
    d[h] = null;
  });
  return {
    c() {
      e = v("div"), n = v("aside"), i = v("a"), r = v("div"), r.innerHTML = '<svg viewBox="0 0 106 85" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7393 71.3241L3.41309 81.6338C2.15269 82.8921 0 81.9995 0 80.2184V54.488C0 52.7067 2.15331 51.8141 3.41352 53.0731L13.7393 63.3887C14.262 63.9093 14.6767 64.5277 14.9597 65.2086C15.2427 65.8894 15.3883 66.6193 15.3883 67.3564C15.3883 68.0935 15.2427 68.8234 14.9597 69.5042C14.6767 70.1851 14.262 70.8035 13.7393 71.3241Z" fill="#2563eb"></path><path d="M91.3683 71.3241L101.694 81.6337C102.955 82.8921 105.108 81.9995 105.108 80.2184V54.488C105.108 52.7067 102.954 51.8141 101.694 53.0731L91.3683 63.3887C90.8456 63.9093 90.4309 64.5277 90.1479 65.2086C89.8649 65.8894 89.7192 66.6193 89.7192 67.3564C89.7192 68.0935 89.8649 68.8234 90.1479 69.5042C90.4309 70.1851 90.8456 70.8035 91.3683 71.3241Z" fill="#2563eb"></path><path d="M49.7091 49.6385L6.82642 6.81672C4.30574 4.29962 0 6.0849 0 9.64715V28.0139C0 29.076 0.422407 30.0945 1.1741 30.8449L44.8945 74.4874C46.9238 76.5064 49.6719 77.6402 52.5368 77.6402C55.4017 77.6402 58.1498 76.5064 60.1791 74.4874L103.932 30.8536C104.685 30.1031 105.108 29.084 105.108 28.0213V9.65448C105.108 6.09239 100.802 4.30703 98.2813 6.8238L55.3984 49.6385C54.6437 50.3912 53.6205 50.814 52.5538 50.814C51.487 50.814 50.4638 50.3912 49.7091 49.6385Z" fill="#2563eb"></path></svg>', o = I(), s = v("div"), l = v("nav");
      for (let h = 0; h < d.length; h += 1)
        d[h].c();
      u = I(), c = v("div"), c.textContent = "content", y(r, "class", "uikit-h-7 uikit-w-7"), y(
        i,
        "href",
        /*homeurl*/
        t[0]
      ), y(l, "class", "uikit--mx-3 uikit-space-y-6 uikit-w-full"), y(s, "class", "uikit-flex uikit-flex-col uikit-justify-between uikit-flex-1 uikit-mt-6 uikit-w-full"), y(n, "class", "uikit-flex uikit-flex-col uikit-w-64 uikit-h-full uikit-px-5 uikit-py-8 uikit-overflow-y-auto uikit-bg-white uikit-border-r rtl:uikit-border-r-0 rtl:uikit-border-l dark:uikit-bg-gray-900 dark:uikit-border-gray-700"), y(c, "class", "uikit-flex-grow uikit-px-5 uikit-py-8"), y(e, "class", "uikit-w-screen uikit-h-screen uikit-flex");
    },
    m(h, k) {
      M(h, e, k), m(e, n), m(n, i), m(i, r), m(n, o), m(n, s), m(s, l);
      for (let w = 0; w < d.length; w += 1)
        d[w] && d[w].m(l, null);
      m(e, u), m(e, c), t[6](c), f = !0;
    },
    p(h, [k]) {
      if ((!f || k & /*homeurl*/
      1) && y(
        i,
        "href",
        /*homeurl*/
        h[0]
      ), k & /*menus, onClick*/
      6) {
        a = tt(
          /*menus*/
          h[1]
        );
        let w;
        for (w = 0; w < a.length; w += 1) {
          const b = Xt(h, a, w);
          d[w] ? (d[w].p(b, k), L(d[w], 1)) : (d[w] = ne(b), d[w].c(), L(d[w], 1), d[w].m(l, null));
        }
        for (Ct(), w = a.length; w < d.length; w += 1)
          g(w);
        St();
      }
    },
    i(h) {
      if (!f) {
        for (let k = 0; k < a.length; k += 1)
          L(d[k]);
        f = !0;
      }
    },
    o(h) {
      d = d.filter(Boolean);
      for (let k = 0; k < d.length; k += 1)
        A(d[k]);
      f = !1;
    },
    d(h) {
      h && E(e), oe(d, h), t[6](null);
    }
  };
}
function Yn(t, e, n) {
  let { homeurl: i = "" } = e, { menus: r = [] } = e, { onClick: o = (f) => {
    console.log(f);
  } } = e;
  function s(f) {
    f && (n(3, l.innerHTML = "", l), l.appendChild(f));
  }
  let l;
  const u = (f) => o(f);
  function c(f) {
    at[f ? "unshift" : "push"](() => {
      l = f, n(3, l);
    });
  }
  return t.$$set = (f) => {
    "homeurl" in f && n(0, i = f.homeurl), "menus" in f && n(1, r = f.menus), "onClick" in f && n(2, o = f.onClick);
  }, [i, r, o, l, s, u, c];
}
class ni extends Lt {
  constructor(e) {
    super(), It(this, e, Yn, Xn, xt, {
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
  ni as Dashboard,
  ei as NotFound
};
