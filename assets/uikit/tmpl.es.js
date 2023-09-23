var St = Object.defineProperty;
var It = (e, t, n) => t in e ? St(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ie = (e, t, n) => (It(e, typeof t != "symbol" ? t + "" : t, n), n);
function F() {
}
function $(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function et(e) {
  return e();
}
function Oe() {
  return /* @__PURE__ */ Object.create(null);
}
function H(e) {
  e.forEach(et);
}
function tt(e) {
  return typeof e == "function";
}
function ke(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Lt(e) {
  return Object.keys(e).length === 0;
}
function Pe(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function y(e, t) {
  e.appendChild(t);
}
function M(e, t, n) {
  e.insertBefore(t, n || null);
}
function L(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function nt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function v(e) {
  return document.createElement(e);
}
function fe(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function G(e) {
  return document.createTextNode(e);
}
function I() {
  return G(" ");
}
function rt() {
  return G("");
}
function ue(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function w(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const Et = ["width", "height"];
function Fe(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const r in t)
    t[r] == null ? e.removeAttribute(r) : r === "style" ? e.style.cssText = t[r] : r === "__value" ? e.value = e[r] = t[r] : n[r] && n[r].set && Et.indexOf(r) === -1 ? e[r] = t[r] : w(e, r, t[r]);
}
function Ae(e, t) {
  for (const n in t)
    w(e, n, t[n]);
}
function Tt(e) {
  return Array.from(e.childNodes);
}
function ve(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function jt(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
let Q;
function V(e) {
  Q = e;
}
function _e() {
  if (!Q)
    throw new Error("Function called outside component initialization");
  return Q;
}
function Mt(e) {
  _e().$$.on_mount.push(e);
}
function Ot(e) {
  _e().$$.on_destroy.push(e);
}
function Pt() {
  const e = _e();
  return (t, n, { cancelable: r = !1 } = {}) => {
    const o = e.$$.callbacks[t];
    if (o) {
      const i = jt(
        /** @type {string} */
        t,
        n,
        { cancelable: r }
      );
      return o.slice().forEach((s) => {
        s.call(e, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
const D = [], ae = [];
let B = [];
const Ne = [], Ft = /* @__PURE__ */ Promise.resolve();
let de = !1;
function At() {
  de || (de = !0, Ft.then(ot));
}
function he(e) {
  B.push(e);
}
const se = /* @__PURE__ */ new Set();
let N = 0;
function ot() {
  if (N !== 0)
    return;
  const e = Q;
  do {
    try {
      for (; N < D.length; ) {
        const t = D[N];
        N++, V(t), Nt(t.$$);
      }
    } catch (t) {
      throw D.length = 0, N = 0, t;
    }
    for (V(null), D.length = 0, N = 0; ae.length; )
      ae.pop()();
    for (let t = 0; t < B.length; t += 1) {
      const n = B[t];
      se.has(n) || (se.add(n), n());
    }
    B.length = 0;
  } while (D.length);
  for (; Ne.length; )
    Ne.pop()();
  de = !1, se.clear(), V(e);
}
function Nt(e) {
  if (e.fragment !== null) {
    e.update(), H(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(he);
  }
}
function Dt(e) {
  const t = [], n = [];
  B.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), B = t;
}
const W = /* @__PURE__ */ new Set();
let P;
function it() {
  P = {
    r: 0,
    c: [],
    p: P
    // parent group
  };
}
function st() {
  P.r || H(P.c), P = P.p;
}
function j(e, t) {
  e && e.i && (W.delete(e), e.i(t));
}
function U(e, t, n, r) {
  if (e && e.o) {
    if (W.has(e))
      return;
    W.add(e), P.c.push(() => {
      W.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
function ee(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function ct(e, t) {
  const n = {}, r = {}, o = { $$scope: 1 };
  let i = e.length;
  for (; i--; ) {
    const s = e[i], c = t[i];
    if (c) {
      for (const f in s)
        f in c || (r[f] = 1);
      for (const f in c)
        o[f] || (n[f] = c[f], o[f] = 1);
      e[i] = c;
    } else
      for (const f in s)
        o[f] = 1;
  }
  for (const s in r)
    s in n || (n[s] = void 0);
  return n;
}
function Bt(e) {
  e && e.c();
}
function lt(e, t, n) {
  const { fragment: r, after_update: o } = e.$$;
  r && r.m(t, n), he(() => {
    const i = e.$$.on_mount.map(et).filter(tt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : H(i), e.$$.on_mount = [];
  }), o.forEach(he);
}
function ft(e, t) {
  const n = e.$$;
  n.fragment !== null && (Dt(n.after_update), H(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ht(e, t) {
  e.$$.dirty[0] === -1 && (D.push(e), At(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ce(e, t, n, r, o, i, s, c = [-1]) {
  const f = Q;
  V(e);
  const l = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: F,
    not_equal: o,
    bound: Oe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: Oe(),
    dirty: c,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  s && s(l.root);
  let a = !1;
  if (l.ctx = n ? n(e, t.props || {}, (u, d, ...g) => {
    const h = g.length ? g[0] : d;
    return l.ctx && o(l.ctx[u], l.ctx[u] = h) && (!l.skip_bound && l.bound[u] && l.bound[u](h), a && Ht(e, u)), d;
  }) : [], l.update(), a = !0, H(l.before_update), l.fragment = r ? r(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const u = Tt(t.target);
      l.fragment && l.fragment.l(u), u.forEach(L);
    } else
      l.fragment && l.fragment.c();
    t.intro && j(e.$$.fragment), lt(e, t.target, t.anchor), ot();
  }
  V(f);
}
class Se {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ie(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ie(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ft(this, 1), this.$destroy = F;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!tt(n))
      return F;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(n), () => {
      const o = r.indexOf(n);
      o !== -1 && r.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Lt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Rt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Rt);
function Vt(e) {
  let t, n, r, o, i, s, c, f, l, a, u, d, g, h, m, b, x, p, _, K, E, k, C;
  return {
    c() {
      t = v("div"), n = v("section"), r = v("div"), o = v("div"), i = v("p"), i.textContent = "404 error", s = I(), c = v("h1"), c.textContent = "Page not found", f = I(), l = v("p"), a = G(
        /*message*/
        e[2]
      ), u = I(), d = v("div"), g = v("button"), h = fe("svg"), m = fe("path"), b = I(), x = v("button"), x.textContent = "Go back", p = I(), _ = v("button"), _.textContent = "To home", K = I(), E = v("div"), E.innerHTML = '<div class="w-full max-w-lg lg:mx-auto"></div> <svg width="514" height="164" viewBox="0 0 514 164" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="101" cy="22" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="101" cy="142" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="21" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="141" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="193" cy="82" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="313" cy="82" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="253" cy="22" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="253" cy="142" r="20" stroke="#667085" stroke-width="2"></circle><path d="M1 102C1 90.9543 9.9543 82 21 82H141C152.046 82 161 90.9543 161 102C161 113.046 152.046 122 141 122H21C9.9543 122 1 113.046 1 102Z" stroke="#667085" stroke-width="2"></path><path d="M101 162C89.9543 162 81 153.046 81 142L81 22C81 10.9543 89.9543 2 101 2C112.046 2 121 10.9543 121 22L121 142C121 153.046 112.046 162 101 162Z" stroke="#667085" stroke-width="2"></path><path d="M7.14214 115.995C-0.668351 108.184 -0.668351 95.5211 7.14214 87.7106L86.7107 8.1421C94.5212 0.331614 107.184 0.331607 114.995 8.14209C122.805 15.9526 122.805 28.6159 114.995 36.4264L35.4264 115.995C27.6159 123.805 14.9526 123.805 7.14214 115.995Z" stroke="#667085" stroke-width="2"></path><circle cx="453" cy="22" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="453" cy="142" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="373" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><circle cx="493" cy="102" r="20" stroke="#667085" stroke-width="2"></circle><path d="M353 102C353 90.9543 361.954 82 373 82H493C504.046 82 513 90.9543 513 102C513 113.046 504.046 122 493 122H373C361.954 122 353 113.046 353 102Z" stroke="#667085" stroke-width="2"></path><path d="M453 162C441.954 162 433 153.046 433 142L433 22C433 10.9543 441.954 2 453 2C464.046 2 473 10.9543 473 22L473 142C473 153.046 464.046 162 453 162Z" stroke="#667085" stroke-width="2"></path><path d="M359.142 115.995C351.332 108.184 351.332 95.5211 359.142 87.7106L438.711 8.1421C446.521 0.331614 459.184 0.331607 466.995 8.14209C474.805 15.9526 474.805 28.6159 466.995 36.4264L387.426 115.995C379.616 123.805 366.953 123.805 359.142 115.995Z" stroke="#667085" stroke-width="2"></path><circle cx="253" cy="82" r="80" stroke="#667085" stroke-width="2"></circle><circle cx="253" cy="82" r="40" stroke="#667085" stroke-width="2"></circle><line x1="8.74228e-08" y1="1" x2="513" y2="1.00004" stroke="#667085" stroke-width="2"></line><line x1="-8.74228e-08" y1="163" x2="513" y2="163" stroke="#667085" stroke-width="2"></line></svg>', w(i, "class", "text-sm font-medium text-blue-500 dark:text-blue-400"), w(c, "class", "mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"), w(l, "class", "mt-4 text-gray-500 dark:text-gray-400"), w(m, "stroke-linecap", "round"), w(m, "stroke-linejoin", "round"), w(m, "d", "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"), w(h, "xmlns", "http://www.w3.org/2000/svg"), w(h, "fill", "none"), w(h, "viewBox", "0 0 24 24"), w(h, "stroke-width", "1.5"), w(h, "stroke", "currentColor"), w(h, "class", "w-5 h-5 rtl:rotate-180"), w(g, "class", "flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"), w(_, "class", "w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"), w(d, "class", "flex items-center mt-6 gap-x-3"), w(o, "class", "wf-ull lg:w-1/2"), w(E, "class", "relative w-full mt-12 lg:w-1/2 lg:mt-0"), w(r, "class", "container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12"), w(n, "class", "bg-white dark:bg-gray-900"), w(t, "class", "w-screen h-screen px-36");
    },
    m(S, T) {
      M(S, t, T), y(t, n), y(n, r), y(r, o), y(o, i), y(o, s), y(o, c), y(o, f), y(o, l), y(l, a), y(o, u), y(o, d), y(d, g), y(g, h), y(h, m), y(g, b), y(g, x), y(d, p), y(d, _), y(r, K), y(r, E), k || (C = [
        ue(
          x,
          "click",
          /*click_handler*/
          e[3]
        ),
        ue(
          _,
          "click",
          /*click_handler_1*/
          e[4]
        )
      ], k = !0);
    },
    p(S, [T]) {
      T & /*message*/
      4 && ve(
        a,
        /*message*/
        S[2]
      );
    },
    i: F,
    o: F,
    d(S) {
      S && L(t), k = !1, H(C);
    }
  };
}
function zt(e, t, n) {
  let { backurl: r = "" } = t, { homeurl: o = "" } = t, { message: i = "Sorry, the page you are looking for doesn't exist.Here are some helpful links:" } = t;
  const s = () => {
    r !== "" && (window.location.href = r);
  }, c = () => {
    o !== "" && (window.location.href = o);
  };
  return e.$$set = (f) => {
    "backurl" in f && n(0, r = f.backurl), "homeurl" in f && n(1, o = f.homeurl), "message" in f && n(2, i = f.message);
  }, [r, o, i, s, c];
}
class er extends Se {
  constructor(t) {
    super(), Ce(this, t, zt, Vt, ke, { backurl: 0, homeurl: 1, message: 2 });
  }
}
const z = /^[a-z0-9]+(-[a-z0-9]+)*$/, ne = (e, t, n, r = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    r = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const c = o.pop(), f = o.pop(), l = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : r,
      prefix: f,
      name: c
    };
    return t && !X(l) ? null : l;
  }
  const i = o[0], s = i.split("-");
  if (s.length > 1) {
    const c = {
      provider: r,
      prefix: s.shift(),
      name: s.join("-")
    };
    return t && !X(c) ? null : c;
  }
  if (n && r === "") {
    const c = {
      provider: r,
      prefix: "",
      name: i
    };
    return t && !X(c, n) ? null : c;
  }
  return null;
}, X = (e, t) => e ? !!((e.provider === "" || e.provider.match(z)) && (t && e.prefix === "" || e.prefix.match(z)) && e.name.match(z)) : !1, ut = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), te = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), re = Object.freeze({
  ...ut,
  ...te
}), ge = Object.freeze({
  ...re,
  body: "",
  hidden: !1
});
function Qt(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function De(e, t) {
  const n = Qt(e, t);
  for (const r in ge)
    r in te ? r in e && !(r in n) && (n[r] = te[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function Ut(e, t) {
  const n = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function i(s) {
    if (n[s])
      return o[s] = [];
    if (!(s in o)) {
      o[s] = null;
      const c = r[s] && r[s].parent, f = c && i(c);
      f && (o[s] = [c].concat(f));
    }
    return o[s];
  }
  return (t || Object.keys(n).concat(Object.keys(r))).forEach(i), o;
}
function Zt(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function s(c) {
    i = De(
      r[c] || o[c],
      i
    );
  }
  return s(t), n.forEach(s), De(e, i);
}
function at(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = Ut(e);
  for (const o in r) {
    const i = r[o];
    i && (t(o, Zt(e, o, i)), n.push(o));
  }
  return n;
}
const qt = {
  provider: "",
  aliases: {},
  not_found: {},
  ...ut
};
function ce(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function dt(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !ce(e, qt))
    return null;
  const n = t.icons;
  for (const o in n) {
    const i = n[o];
    if (!o.match(z) || typeof i.body != "string" || !ce(
      i,
      ge
    ))
      return null;
  }
  const r = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in r) {
    const i = r[o], s = i.parent;
    if (!o.match(z) || typeof s != "string" || !n[s] && !r[s] || !ce(
      i,
      ge
    ))
      return null;
  }
  return t;
}
const Be = /* @__PURE__ */ Object.create(null);
function Gt(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function A(e, t) {
  const n = Be[e] || (Be[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = Gt(e, t));
}
function Ie(e, t) {
  return dt(t) ? at(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function Kt(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Z = !1;
function ht(e) {
  return typeof e == "boolean" && (Z = e), Z;
}
function Jt(e) {
  const t = typeof e == "string" ? ne(e, !0, Z) : e;
  if (t) {
    const n = A(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Wt(e, t) {
  const n = ne(e, !0, Z);
  if (!n)
    return !1;
  const r = A(n.provider, n.prefix);
  return Kt(r, n.name, t);
}
function Xt(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Z && !t && !e.prefix) {
    let o = !1;
    return dt(e) && (e.prefix = "", at(e, (i, s) => {
      s && Wt(i, s) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!X({
    provider: t,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = A(t, n);
  return !!Ie(r, e);
}
const gt = Object.freeze({
  width: null,
  height: null
}), pt = Object.freeze({
  // Dimensions
  ...gt,
  // Transformations
  ...te
}), Yt = /(-?[0-9.]*[0-9]+[0-9.]*)/g, $t = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function He(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(Yt);
  if (r === null || !r.length)
    return e;
  const o = [];
  let i = r.shift(), s = $t.test(i);
  for (; ; ) {
    if (s) {
      const c = parseFloat(i);
      isNaN(c) ? o.push(i) : o.push(Math.ceil(c * t * n) / n);
    } else
      o.push(i);
    if (i = r.shift(), i === void 0)
      return o.join("");
    s = !s;
  }
}
const en = (e) => e === "unset" || e === "undefined" || e === "none";
function tn(e, t) {
  const n = {
    ...re,
    ...e
  }, r = {
    ...pt,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
  [n, r].forEach((h) => {
    const m = [], b = h.hFlip, x = h.vFlip;
    let p = h.rotate;
    b ? x ? p += 2 : (m.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), m.push("scale(-1 1)"), o.top = o.left = 0) : x && (m.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), m.push("scale(1 -1)"), o.top = o.left = 0);
    let _;
    switch (p < 0 && (p -= Math.floor(p / 4) * 4), p = p % 4, p) {
      case 1:
        _ = o.height / 2 + o.top, m.unshift(
          "rotate(90 " + _.toString() + " " + _.toString() + ")"
        );
        break;
      case 2:
        m.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        _ = o.width / 2 + o.left, m.unshift(
          "rotate(-90 " + _.toString() + " " + _.toString() + ")"
        );
        break;
    }
    p % 2 === 1 && (o.left !== o.top && (_ = o.left, o.left = o.top, o.top = _), o.width !== o.height && (_ = o.width, o.width = o.height, o.height = _)), m.length && (i = '<g transform="' + m.join(" ") + '">' + i + "</g>");
  });
  const s = r.width, c = r.height, f = o.width, l = o.height;
  let a, u;
  s === null ? (u = c === null ? "1em" : c === "auto" ? l : c, a = He(u, f / l)) : (a = s === "auto" ? f : s, u = c === null ? He(a, l / f) : c === "auto" ? l : c);
  const d = {}, g = (h, m) => {
    en(m) || (d[h] = m.toString());
  };
  return g("width", a), g("height", u), d.viewBox = o.left.toString() + " " + o.top.toString() + " " + f.toString() + " " + l.toString(), {
    attributes: d,
    body: i
  };
}
const nn = /\sid="(\S+)"/g, rn = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let on = 0;
function sn(e, t = rn) {
  const n = [];
  let r;
  for (; r = nn.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const s = typeof t == "function" ? t(i) : t + (on++).toString(), c = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + s + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const pe = /* @__PURE__ */ Object.create(null);
function cn(e, t) {
  pe[e] = t;
}
function me(e) {
  return pe[e] || pe[""];
}
function Le(e) {
  let t;
  if (typeof e.resources == "string")
    t = [e.resources];
  else if (t = e.resources, !(t instanceof Array) || !t.length)
    return null;
  return {
    // API hosts
    resources: t,
    // Root path
    path: e.path || "/",
    // URL length limit
    maxURL: e.maxURL || 500,
    // Timeout before next host is used.
    rotate: e.rotate || 750,
    // Timeout before failing query.
    timeout: e.timeout || 5e3,
    // Randomise default API end point.
    random: e.random === !0,
    // Start index
    index: e.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: e.dataAfterTimeout !== !1
  };
}
const Ee = /* @__PURE__ */ Object.create(null), R = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Y = [];
for (; R.length > 0; )
  R.length === 1 || Math.random() > 0.5 ? Y.push(R.shift()) : Y.push(R.pop());
Ee[""] = Le({
  resources: ["https://api.iconify.design"].concat(Y)
});
function ln(e, t) {
  const n = Le(t);
  return n === null ? !1 : (Ee[e] = n, !0);
}
function Te(e) {
  return Ee[e];
}
const fn = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Re = fn();
function un(e, t) {
  const n = Te(e);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let o = 0;
    n.resources.forEach((s) => {
      o = Math.max(o, s.length);
    });
    const i = t + ".json?icons=";
    r = n.maxURL - o - n.path.length - i.length;
  }
  return r;
}
function an(e) {
  return e === 404;
}
const dn = (e, t, n) => {
  const r = [], o = un(e, t), i = "icons";
  let s = {
    type: i,
    provider: e,
    prefix: t,
    icons: []
  }, c = 0;
  return n.forEach((f, l) => {
    c += f.length + 1, c >= o && l > 0 && (r.push(s), s = {
      type: i,
      provider: e,
      prefix: t,
      icons: []
    }, c = f.length), s.icons.push(f);
  }), r.push(s), r;
};
function hn(e) {
  if (typeof e == "string") {
    const t = Te(e);
    if (t)
      return t.path;
  }
  return "/";
}
const gn = (e, t, n) => {
  if (!Re) {
    n("abort", 424);
    return;
  }
  let r = hn(t.provider);
  switch (t.type) {
    case "icons": {
      const i = t.prefix, c = t.icons.join(","), f = new URLSearchParams({
        icons: c
      });
      r += i + ".json?" + f.toString();
      break;
    }
    case "custom": {
      const i = t.uri;
      r += i.slice(0, 1) === "/" ? i.slice(1) : i;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let o = 503;
  Re(e + r).then((i) => {
    const s = i.status;
    if (s !== 200) {
      setTimeout(() => {
        n(an(s) ? "abort" : "next", s);
      });
      return;
    }
    return o = 501, i.json();
  }).then((i) => {
    if (typeof i != "object" || i === null) {
      setTimeout(() => {
        i === 404 ? n("abort", i) : n("next", o);
      });
      return;
    }
    setTimeout(() => {
      n("success", i);
    });
  }).catch(() => {
    n("next", o);
  });
}, pn = {
  prepare: dn,
  send: gn
};
function mn(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  e.sort((o, i) => o.provider !== i.provider ? o.provider.localeCompare(i.provider) : o.prefix !== i.prefix ? o.prefix.localeCompare(i.prefix) : o.name.localeCompare(i.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((o) => {
    if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider)
      return;
    r = o;
    const i = o.provider, s = o.prefix, c = o.name, f = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), l = f[s] || (f[s] = A(i, s));
    let a;
    c in l.icons ? a = t.loaded : s === "" || l.missing.has(c) ? a = t.missing : a = t.pending;
    const u = {
      provider: i,
      prefix: s,
      name: c
    };
    a.push(u);
  }), t;
}
function mt(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function yn(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let n = !1;
    const r = e.provider, o = e.prefix;
    t.forEach((i) => {
      const s = i.icons, c = s.pending.length;
      s.pending = s.pending.filter((f) => {
        if (f.prefix !== o)
          return !0;
        const l = f.name;
        if (e.icons[l])
          s.loaded.push({
            provider: r,
            prefix: o,
            name: l
          });
        else if (e.missing.has(l))
          s.missing.push({
            provider: r,
            prefix: o,
            name: l
          });
        else
          return n = !0, !0;
        return !1;
      }), s.pending.length !== c && (n || mt([e], i.id), i.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let wn = 0;
function bn(e, t, n) {
  const r = wn++, o = mt.bind(null, n, r);
  if (!t.pending.length)
    return o;
  const i = {
    id: r,
    icons: t,
    callback: e,
    abort: o
  };
  return n.forEach((s) => {
    (s.loaderCallbacks || (s.loaderCallbacks = [])).push(i);
  }), o;
}
function xn(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? ne(o, t, n) : o;
    i && r.push(i);
  }), r;
}
var kn = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function vn(e, t, n, r) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let s;
  if (e.random) {
    let k = e.resources.slice(0);
    for (s = []; k.length > 1; ) {
      const C = Math.floor(Math.random() * k.length);
      s.push(k[C]), k = k.slice(0, C).concat(k.slice(C + 1));
    }
    s = s.concat(k);
  } else
    s = e.resources.slice(i).concat(e.resources.slice(0, i));
  const c = Date.now();
  let f = "pending", l = 0, a, u = null, d = [], g = [];
  typeof r == "function" && g.push(r);
  function h() {
    u && (clearTimeout(u), u = null);
  }
  function m() {
    f === "pending" && (f = "aborted"), h(), d.forEach((k) => {
      k.status === "pending" && (k.status = "aborted");
    }), d = [];
  }
  function b(k, C) {
    C && (g = []), typeof k == "function" && g.push(k);
  }
  function x() {
    return {
      startTime: c,
      payload: t,
      status: f,
      queriesSent: l,
      queriesPending: d.length,
      subscribe: b,
      abort: m
    };
  }
  function p() {
    f = "failed", g.forEach((k) => {
      k(void 0, a);
    });
  }
  function _() {
    d.forEach((k) => {
      k.status === "pending" && (k.status = "aborted");
    }), d = [];
  }
  function K(k, C, S) {
    const T = C !== "success";
    switch (d = d.filter((O) => O !== k), f) {
      case "pending":
        break;
      case "failed":
        if (T || !e.dataAfterTimeout)
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
    if (h(), _(), !e.random) {
      const O = e.resources.indexOf(k.resource);
      O !== -1 && O !== e.index && (e.index = O);
    }
    f = "completed", g.forEach((O) => {
      O(S);
    });
  }
  function E() {
    if (f !== "pending")
      return;
    h();
    const k = s.shift();
    if (k === void 0) {
      if (d.length) {
        u = setTimeout(() => {
          h(), f === "pending" && (_(), p());
        }, e.timeout);
        return;
      }
      p();
      return;
    }
    const C = {
      status: "pending",
      resource: k,
      callback: (S, T) => {
        K(C, S, T);
      }
    };
    d.push(C), l++, u = setTimeout(E, e.rotate), n(k, t, C.callback);
  }
  return setTimeout(E), x;
}
function yt(e) {
  const t = {
    ...kn,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((c) => c().status === "pending");
  }
  function o(c, f, l) {
    const a = vn(
      t,
      c,
      f,
      (u, d) => {
        r(), l && l(u, d);
      }
    );
    return n.push(a), a;
  }
  function i(c) {
    return n.find((f) => c(f)) || null;
  }
  return {
    query: o,
    find: i,
    setIndex: (c) => {
      t.index = c;
    },
    getIndex: () => t.index,
    cleanup: r
  };
}
function Ve() {
}
const le = /* @__PURE__ */ Object.create(null);
function _n(e) {
  if (!le[e]) {
    const t = Te(e);
    if (!t)
      return;
    const n = yt(t), r = {
      config: t,
      redundancy: n
    };
    le[e] = r;
  }
  return le[e];
}
function Cn(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const i = me(e);
    if (!i)
      return n(void 0, 424), Ve;
    o = i.send;
    const s = _n(e);
    s && (r = s.redundancy);
  } else {
    const i = Le(e);
    if (i) {
      r = yt(i);
      const s = e.resources ? e.resources[0] : "", c = me(s);
      c && (o = c.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Ve) : r.query(t, o, n)().abort;
}
const ze = "iconify2", q = "iconify", wt = q + "-count", Qe = q + "-version", bt = 36e5, Sn = 168;
function ye(e, t) {
  try {
    return e.getItem(t);
  } catch {
  }
}
function je(e, t, n) {
  try {
    return e.setItem(t, n), !0;
  } catch {
  }
}
function Ue(e, t) {
  try {
    e.removeItem(t);
  } catch {
  }
}
function we(e, t) {
  return je(e, wt, t.toString());
}
function be(e) {
  return parseInt(ye(e, wt)) || 0;
}
const oe = {
  local: !0,
  session: !0
}, xt = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Me = !1;
function In(e) {
  Me = e;
}
let J = typeof window > "u" ? {} : window;
function kt(e) {
  const t = e + "Storage";
  try {
    if (J && J[t] && typeof J[t].length == "number")
      return J[t];
  } catch {
  }
  oe[e] = !1;
}
function vt(e, t) {
  const n = kt(e);
  if (!n)
    return;
  const r = ye(n, Qe);
  if (r !== ze) {
    if (r) {
      const c = be(n);
      for (let f = 0; f < c; f++)
        Ue(n, q + f.toString());
    }
    je(n, Qe, ze), we(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / bt) - Sn, i = (c) => {
    const f = q + c.toString(), l = ye(n, f);
    if (typeof l == "string") {
      try {
        const a = JSON.parse(l);
        if (typeof a == "object" && typeof a.cached == "number" && a.cached > o && typeof a.provider == "string" && typeof a.data == "object" && typeof a.data.prefix == "string" && // Valid item: run callback
        t(a, c))
          return !0;
      } catch {
      }
      Ue(n, f);
    }
  };
  let s = be(n);
  for (let c = s - 1; c >= 0; c--)
    i(c) || (c === s - 1 ? (s--, we(n, s)) : xt[e].add(c));
}
function _t() {
  if (!Me) {
    In(!0);
    for (const e in oe)
      vt(e, (t) => {
        const n = t.data, r = t.provider, o = n.prefix, i = A(
          r,
          o
        );
        if (!Ie(i, n).length)
          return !1;
        const s = n.lastModified || -1;
        return i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, s) : s, !0;
      });
  }
}
function Ln(e, t) {
  const n = e.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= t
  )
    return n === t;
  if (e.lastModifiedCached = t, n)
    for (const r in oe)
      vt(r, (o) => {
        const i = o.data;
        return o.provider !== e.provider || i.prefix !== e.prefix || i.lastModified === t;
      });
  return !0;
}
function En(e, t) {
  Me || _t();
  function n(r) {
    let o;
    if (!oe[r] || !(o = kt(r)))
      return;
    const i = xt[r];
    let s;
    if (i.size)
      i.delete(s = Array.from(i).shift());
    else if (s = be(o), !we(o, s + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / bt),
      provider: e.provider,
      data: t
    };
    return je(
      o,
      q + s.toString(),
      JSON.stringify(c)
    );
  }
  t.lastModified && !Ln(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"));
}
function Ze() {
}
function Tn(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, yn(e);
  }));
}
function jn(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    delete e.iconsToLoad;
    let i;
    if (!o || !(i = me(n)))
      return;
    i.prepare(n, r, o).forEach((c) => {
      Cn(n, c, (f) => {
        if (typeof f != "object")
          c.icons.forEach((l) => {
            e.missing.add(l);
          });
        else
          try {
            const l = Ie(
              e,
              f
            );
            if (!l.length)
              return;
            const a = e.pendingIcons;
            a && l.forEach((u) => {
              a.delete(u);
            }), En(e, f);
          } catch (l) {
            console.error(l);
          }
        Tn(e);
      });
    });
  }));
}
const Mn = (e, t) => {
  const n = xn(e, !0, ht()), r = mn(n);
  if (!r.pending.length) {
    let f = !0;
    return t && setTimeout(() => {
      f && t(
        r.loaded,
        r.missing,
        r.pending,
        Ze
      );
    }), () => {
      f = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), i = [];
  let s, c;
  return r.pending.forEach((f) => {
    const { provider: l, prefix: a } = f;
    if (a === c && l === s)
      return;
    s = l, c = a, i.push(A(l, a));
    const u = o[l] || (o[l] = /* @__PURE__ */ Object.create(null));
    u[a] || (u[a] = []);
  }), r.pending.forEach((f) => {
    const { provider: l, prefix: a, name: u } = f, d = A(l, a), g = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    g.has(u) || (g.add(u), o[l][a].push(u));
  }), i.forEach((f) => {
    const { provider: l, prefix: a } = f;
    o[l][a].length && jn(f, o[l][a]);
  }), t ? bn(t, r, i) : Ze;
};
function On(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], i = typeof o;
    r in gt ? (o === null || o && (i === "string" || i === "number")) && (n[r] = o) : i === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const Pn = /[\s,]+/;
function Fn(e, t) {
  t.split(Pn).forEach((n) => {
    switch (n.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function An(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function r(o) {
    for (; o < 0; )
      o += 4;
    return o % 4;
  }
  if (n === "") {
    const o = parseInt(e);
    return isNaN(o) ? 0 : r(o);
  } else if (n !== e) {
    let o = 0;
    switch (n) {
      case "%":
        o = 25;
        break;
      case "deg":
        o = 90;
    }
    if (o) {
      let i = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(i) ? 0 : (i = i / o, i % 1 === 0 ? r(i) : 0);
    }
  }
  return t;
}
function Nn(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Dn(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Bn(e) {
  return "data:image/svg+xml," + Dn(e);
}
function Hn(e) {
  return 'url("' + Bn(e) + '")';
}
const qe = {
  ...pt,
  inline: !1
}, Rn = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Vn = {
  display: "inline-block"
}, xe = {
  "background-color": "currentColor"
}, Ct = {
  "background-color": "transparent"
}, Ge = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Ke = {
  "-webkit-mask": xe,
  mask: xe,
  background: Ct
};
for (const e in Ke) {
  const t = Ke[e];
  for (const n in Ge)
    t[e + "-" + n] = Ge[n];
}
function zn(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
function Qn(e, t) {
  const n = On(qe, t), r = t.mode || "svg", o = r === "svg" ? { ...Rn } : {};
  e.body.indexOf("xlink:") === -1 && delete o["xmlns:xlink"];
  let i = typeof t.style == "string" ? t.style : "";
  for (let x in t) {
    const p = t[x];
    if (p !== void 0)
      switch (x) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[x] = p === !0 || p === "true" || p === 1;
          break;
        case "flip":
          typeof p == "string" && Fn(n, p);
          break;
        case "color":
          i = i + (i.length > 0 && i.trim().slice(-1) !== ";" ? ";" : "") + "color: " + p + "; ";
          break;
        case "rotate":
          typeof p == "string" ? n[x] = An(p) : typeof p == "number" && (n[x] = p);
          break;
        case "ariaHidden":
        case "aria-hidden":
          p !== !0 && p !== "true" && delete o["aria-hidden"];
          break;
        default:
          if (x.slice(0, 3) === "on:")
            break;
          qe[x] === void 0 && (o[x] = p);
      }
  }
  const s = tn(e, n), c = s.attributes;
  if (n.inline && (i = "vertical-align: -0.125em; " + i), r === "svg") {
    Object.assign(o, c), i !== "" && (o.style = i);
    let x = 0, p = t.id;
    return typeof p == "string" && (p = p.replace(/-/g, "_")), {
      svg: !0,
      attributes: o,
      body: sn(s.body, p ? () => p + "ID" + x++ : "iconifySvelte")
    };
  }
  const { body: f, width: l, height: a } = e, u = r === "mask" || (r === "bg" ? !1 : f.indexOf("currentColor") !== -1), d = Nn(f, {
    ...c,
    width: l + "",
    height: a + ""
  }), h = {
    "--svg": Hn(d)
  }, m = (x) => {
    const p = c[x];
    p && (h[x] = zn(p));
  };
  m("width"), m("height"), Object.assign(h, Vn, u ? xe : Ct);
  let b = "";
  for (const x in h)
    b += x + ": " + h[x] + ";";
  return o.style = b + i, {
    svg: !1,
    attributes: o
  };
}
ht(!0);
cn("", pn);
if (typeof document < "u" && typeof window < "u") {
  _t();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Xt(r)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let n in t) {
        const r = "IconifyProviders[" + n + "] is invalid.";
        try {
          const o = t[n];
          if (typeof o != "object" || !o || o.resources === void 0)
            continue;
          ln(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function Un(e, t, n, r, o) {
  function i() {
    t.loading && (t.loading.abort(), t.loading = null);
  }
  if (typeof e == "object" && e !== null && typeof e.body == "string")
    return t.name = "", i(), { data: { ...re, ...e } };
  let s;
  if (typeof e != "string" || (s = ne(e, !1, !0)) === null)
    return i(), null;
  const c = Jt(s);
  if (!c)
    return n && (!t.loading || t.loading.name !== e) && (i(), t.name = "", t.loading = {
      name: e,
      abort: Mn([s], r)
    }), null;
  i(), t.name !== e && (t.name = e, o && !t.destroyed && o(e));
  const f = ["iconify"];
  return s.prefix !== "" && f.push("iconify--" + s.prefix), s.provider !== "" && f.push("iconify--" + s.provider), { data: c, classes: f };
}
function Zn(e, t) {
  return e ? Qn({
    ...re,
    ...e
  }, t) : null;
}
function Je(e) {
  let t;
  function n(i, s) {
    return (
      /*data*/
      i[0].svg ? Gn : qn
    );
  }
  let r = n(e), o = r(e);
  return {
    c() {
      o.c(), t = rt();
    },
    m(i, s) {
      o.m(i, s), M(i, t, s);
    },
    p(i, s) {
      r === (r = n(i)) && o ? o.p(i, s) : (o.d(1), o = r(i), o && (o.c(), o.m(t.parentNode, t)));
    },
    d(i) {
      i && L(t), o.d(i);
    }
  };
}
function qn(e) {
  let t, n = [
    /*data*/
    e[0].attributes
  ], r = {};
  for (let o = 0; o < n.length; o += 1)
    r = $(r, n[o]);
  return {
    c() {
      t = v("span"), Fe(t, r);
    },
    m(o, i) {
      M(o, t, i);
    },
    p(o, i) {
      Fe(t, r = ct(n, [i & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && L(t);
    }
  };
}
function Gn(e) {
  let t, n = (
    /*data*/
    e[0].body + ""
  ), r = [
    /*data*/
    e[0].attributes
  ], o = {};
  for (let i = 0; i < r.length; i += 1)
    o = $(o, r[i]);
  return {
    c() {
      t = fe("svg"), Ae(t, o);
    },
    m(i, s) {
      M(i, t, s), t.innerHTML = n;
    },
    p(i, s) {
      s & /*data*/
      1 && n !== (n = /*data*/
      i[0].body + "") && (t.innerHTML = n), Ae(t, o = ct(r, [s & /*data*/
      1 && /*data*/
      i[0].attributes]));
    },
    d(i) {
      i && L(t);
    }
  };
}
function Kn(e) {
  let t, n = (
    /*data*/
    e[0] && Je(e)
  );
  return {
    c() {
      n && n.c(), t = rt();
    },
    m(r, o) {
      n && n.m(r, o), M(r, t, o);
    },
    p(r, [o]) {
      /*data*/
      r[0] ? n ? n.p(r, o) : (n = Je(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: F,
    o: F,
    d(r) {
      r && L(t), n && n.d(r);
    }
  };
}
function Jn(e, t, n) {
  const r = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let o = !1, i = 0, s;
  const c = (l) => {
    typeof t.onLoad == "function" && t.onLoad(l), Pt()("load", { icon: l });
  };
  function f() {
    n(3, i++, i);
  }
  return Mt(() => {
    n(2, o = !0);
  }), Ot(() => {
    n(1, r.destroyed = !0, r), r.loading && (r.loading.abort(), n(1, r.loading = null, r));
  }), e.$$set = (l) => {
    n(6, t = $($({}, t), Pe(l)));
  }, e.$$.update = () => {
    {
      const l = Un(t.icon, r, o, f, c);
      n(0, s = l ? Zn(l.data, t) : null), s && l.classes && n(
        0,
        s.attributes.class = (typeof t.class == "string" ? t.class + " " : "") + l.classes.join(" "),
        s
      );
    }
  }, t = Pe(t), [s, r, o, i];
}
class Wn extends Se {
  constructor(t) {
    super(), Ce(this, t, Jn, Kn, ke, {});
  }
}
function We(e, t, n) {
  const r = e.slice();
  return r[7] = t[n].title, r[8] = t[n].items, r;
}
function Xe(e, t, n) {
  const r = e.slice();
  return r[7] = t[n].title, r[11] = t[n].icon, r[12] = t[n].url, r[14] = n, r;
}
function Ye(e) {
  let t, n, r, o, i = (
    /*title*/
    e[7] + ""
  ), s, c, f, l;
  n = new Wn({
    props: { class: "w-5 h-5", icon: (
      /*icon*/
      e[11]
    ) }
  });
  function a() {
    return (
      /*click_handler*/
      e[5](
        /*url*/
        e[12]
      )
    );
  }
  return {
    c() {
      t = v("button"), Bt(n.$$.fragment), r = I(), o = v("span"), s = G(i), w(o, "class", "mx-2 text-sm font-medium"), w(t, "class", "flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700");
    },
    m(u, d) {
      M(u, t, d), lt(n, t, null), y(t, r), y(t, o), y(o, s), c = !0, f || (l = ue(t, "click", a), f = !0);
    },
    p(u, d) {
      e = u;
      const g = {};
      d & /*menus*/
      2 && (g.icon = /*icon*/
      e[11]), n.$set(g), (!c || d & /*menus*/
      2) && i !== (i = /*title*/
      e[7] + "") && ve(s, i);
    },
    i(u) {
      c || (j(n.$$.fragment, u), c = !0);
    },
    o(u) {
      U(n.$$.fragment, u), c = !1;
    },
    d(u) {
      u && L(t), ft(n), f = !1, l();
    }
  };
}
function $e(e) {
  let t, n, r = (
    /*title*/
    e[7] + ""
  ), o, i, s, c, f = ee(
    /*items*/
    e[8]
  ), l = [];
  for (let u = 0; u < f.length; u += 1)
    l[u] = Ye(Xe(e, f, u));
  const a = (u) => U(l[u], 1, 1, () => {
    l[u] = null;
  });
  return {
    c() {
      t = v("div"), n = v("p"), o = G(r), i = I();
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      s = I(), w(n, "class", "px-3 text-xs text-gray-500 uppercase dark:text-gray-400"), w(t, "class", "space-y-3");
    },
    m(u, d) {
      M(u, t, d), y(t, n), y(n, o), y(t, i);
      for (let g = 0; g < l.length; g += 1)
        l[g] && l[g].m(t, null);
      y(t, s), c = !0;
    },
    p(u, d) {
      if ((!c || d & /*menus*/
      2) && r !== (r = /*title*/
      u[7] + "") && ve(o, r), d & /*onClick, menus*/
      6) {
        f = ee(
          /*items*/
          u[8]
        );
        let g;
        for (g = 0; g < f.length; g += 1) {
          const h = Xe(u, f, g);
          l[g] ? (l[g].p(h, d), j(l[g], 1)) : (l[g] = Ye(h), l[g].c(), j(l[g], 1), l[g].m(t, s));
        }
        for (it(), g = f.length; g < l.length; g += 1)
          a(g);
        st();
      }
    },
    i(u) {
      if (!c) {
        for (let d = 0; d < f.length; d += 1)
          j(l[d]);
        c = !0;
      }
    },
    o(u) {
      l = l.filter(Boolean);
      for (let d = 0; d < l.length; d += 1)
        U(l[d]);
      c = !1;
    },
    d(u) {
      u && L(t), nt(l, u);
    }
  };
}
function Xn(e) {
  let t, n, r, o, i, s, c, f, l, a, u = ee(
    /*menus*/
    e[1]
  ), d = [];
  for (let h = 0; h < u.length; h += 1)
    d[h] = $e(We(e, u, h));
  const g = (h) => U(d[h], 1, 1, () => {
    d[h] = null;
  });
  return {
    c() {
      t = v("div"), n = v("aside"), r = v("a"), o = v("div"), o.innerHTML = '<svg viewBox="0 0 106 85" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7393 71.3241L3.41309 81.6338C2.15269 82.8921 0 81.9995 0 80.2184V54.488C0 52.7067 2.15331 51.8141 3.41352 53.0731L13.7393 63.3887C14.262 63.9093 14.6767 64.5277 14.9597 65.2086C15.2427 65.8894 15.3883 66.6193 15.3883 67.3564C15.3883 68.0935 15.2427 68.8234 14.9597 69.5042C14.6767 70.1851 14.262 70.8035 13.7393 71.3241Z" fill="#2563eb"></path><path d="M91.3683 71.3241L101.694 81.6337C102.955 82.8921 105.108 81.9995 105.108 80.2184V54.488C105.108 52.7067 102.954 51.8141 101.694 53.0731L91.3683 63.3887C90.8456 63.9093 90.4309 64.5277 90.1479 65.2086C89.8649 65.8894 89.7192 66.6193 89.7192 67.3564C89.7192 68.0935 89.8649 68.8234 90.1479 69.5042C90.4309 70.1851 90.8456 70.8035 91.3683 71.3241Z" fill="#2563eb"></path><path d="M49.7091 49.6385L6.82642 6.81672C4.30574 4.29962 0 6.0849 0 9.64715V28.0139C0 29.076 0.422407 30.0945 1.1741 30.8449L44.8945 74.4874C46.9238 76.5064 49.6719 77.6402 52.5368 77.6402C55.4017 77.6402 58.1498 76.5064 60.1791 74.4874L103.932 30.8536C104.685 30.1031 105.108 29.084 105.108 28.0213V9.65448C105.108 6.09239 100.802 4.30703 98.2813 6.8238L55.3984 49.6385C54.6437 50.3912 53.6205 50.814 52.5538 50.814C51.487 50.814 50.4638 50.3912 49.7091 49.6385Z" fill="#2563eb"></path></svg>', i = I(), s = v("div"), c = v("nav");
      for (let h = 0; h < d.length; h += 1)
        d[h].c();
      f = I(), l = v("div"), l.textContent = "content", w(o, "class", "h-7 w-7"), w(
        r,
        "href",
        /*homeurl*/
        e[0]
      ), w(c, "class", "-mx-3 space-y-6"), w(s, "class", "flex flex-col justify-between flex-1 mt-6"), w(n, "class", "flex flex-col w-64 h-full px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700"), w(l, "class", "flex-grow px-5 py-8"), w(t, "class", "w-screen h-screen flex");
    },
    m(h, m) {
      M(h, t, m), y(t, n), y(n, r), y(r, o), y(n, i), y(n, s), y(s, c);
      for (let b = 0; b < d.length; b += 1)
        d[b] && d[b].m(c, null);
      y(t, f), y(t, l), e[6](l), a = !0;
    },
    p(h, [m]) {
      if ((!a || m & /*homeurl*/
      1) && w(
        r,
        "href",
        /*homeurl*/
        h[0]
      ), m & /*menus, onClick*/
      6) {
        u = ee(
          /*menus*/
          h[1]
        );
        let b;
        for (b = 0; b < u.length; b += 1) {
          const x = We(h, u, b);
          d[b] ? (d[b].p(x, m), j(d[b], 1)) : (d[b] = $e(x), d[b].c(), j(d[b], 1), d[b].m(c, null));
        }
        for (it(), b = u.length; b < d.length; b += 1)
          g(b);
        st();
      }
    },
    i(h) {
      if (!a) {
        for (let m = 0; m < u.length; m += 1)
          j(d[m]);
        a = !0;
      }
    },
    o(h) {
      d = d.filter(Boolean);
      for (let m = 0; m < d.length; m += 1)
        U(d[m]);
      a = !1;
    },
    d(h) {
      h && L(t), nt(d, h), e[6](null);
    }
  };
}
function Yn(e, t, n) {
  let { homeurl: r = "" } = t, { menus: o = [] } = t, { onClick: i = (a) => {
    console.log(a);
  } } = t;
  function s(a) {
    a && (n(3, c.innerHTML = "", c), c.appendChild(a));
  }
  let c;
  const f = (a) => i(a);
  function l(a) {
    ae[a ? "unshift" : "push"](() => {
      c = a, n(3, c);
    });
  }
  return e.$$set = (a) => {
    "homeurl" in a && n(0, r = a.homeurl), "menus" in a && n(1, o = a.menus), "onClick" in a && n(2, i = a.onClick);
  }, [r, o, i, c, s, f, l];
}
class tr extends Se {
  constructor(t) {
    super(), Ce(this, t, Yn, Xn, ke, {
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
  tr as Dashboard,
  er as NotFound
};
