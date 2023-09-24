var ar = Object.defineProperty;
var cr = (e, t, n) => t in e ? ar(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ot = (e, t, n) => (cr(e, typeof t != "symbol" ? t + "" : t, n), n);
function D() {
}
function oe(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function Tn(e) {
  return e();
}
function Vt() {
  return /* @__PURE__ */ Object.create(null);
}
function fe(e) {
  e.forEach(Tn);
}
function Ge(e) {
  return typeof e == "function";
}
function X(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let Fe;
function Ze(e, t) {
  return e === t ? !0 : (Fe || (Fe = document.createElement("a")), Fe.href = t, e === Fe.href);
}
function ur(e) {
  return Object.keys(e).length === 0;
}
function jt(e, t, n, r) {
  if (e) {
    const o = En(e, t, n, r);
    return e[0](o);
  }
}
function En(e, t, n, r) {
  return e[1] && r ? oe(n.ctx.slice(), e[1](r(t))) : n.ctx;
}
function At(e, t, n, r) {
  if (e[2] && r) {
    const o = e[2](r(n));
    if (t.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const l = [], i = Math.max(t.dirty.length, o.length);
      for (let a = 0; a < i; a += 1)
        l[a] = t.dirty[a] | o[a];
      return l;
    }
    return t.dirty | o;
  }
  return t.dirty;
}
function Tt(e, t, n, r, o, l) {
  if (o) {
    const i = En(t, n, r, l);
    e.p(i, o);
  }
}
function Et(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let r = 0; r < n; r++)
      t[r] = -1;
    return t;
  }
  return -1;
}
function Qe(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function Je(e, t) {
  const n = {};
  t = new Set(t);
  for (const r in e)
    !t.has(r) && r[0] !== "$" && (n[r] = e[r]);
  return n;
}
function Ce(e) {
  return e ?? "";
}
function fr(e) {
  return e && Ge(e.destroy) ? e.destroy : D;
}
function p(e, t) {
  e.appendChild(t);
}
function O(e, t, n) {
  e.insertBefore(t, n || null);
}
function E(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function de(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function x(e) {
  return document.createElement(e);
}
function dr(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function F(e) {
  return document.createTextNode(e);
}
function T() {
  return F(" ");
}
function ge() {
  return F("");
}
function Z(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function m(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const gr = ["width", "height"];
function dt(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const r in t)
    t[r] == null ? e.removeAttribute(r) : r === "style" ? e.style.cssText = t[r] : r === "__value" ? e.value = e[r] = t[r] : n[r] && n[r].set && gr.indexOf(r) === -1 ? e[r] = t[r] : m(e, r, t[r]);
}
function Ht(e, t) {
  for (const n in t)
    m(e, n, t[n]);
}
function pr(e, t) {
  Object.keys(t).forEach((n) => {
    hr(e, n, t[n]);
  });
}
function hr(e, t, n) {
  t in e ? e[t] = typeof e[t] == "boolean" && n === "" ? !0 : n : m(e, t, n);
}
function Xe(e) {
  return /-/.test(e) ? pr : dt;
}
function mr(e) {
  return Array.from(e.childNodes);
}
function W(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Oe(e, t, n, r) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "");
}
function br(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
let Le;
function Ee(e) {
  Le = e;
}
function Pt() {
  if (!Le)
    throw new Error("Function called outside component initialization");
  return Le;
}
function Be(e) {
  Pt().$$.on_mount.push(e);
}
function vr(e) {
  Pt().$$.on_destroy.push(e);
}
function Ie() {
  const e = Pt();
  return (t, n, { cancelable: r = !1 } = {}) => {
    const o = e.$$.callbacks[t];
    if (o) {
      const l = br(
        /** @type {string} */
        t,
        n,
        { cancelable: r }
      );
      return o.slice().forEach((i) => {
        i.call(e, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function $(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((r) => r.call(this, t));
}
const xe = [], gt = [];
let ke = [];
const Wt = [], yr = /* @__PURE__ */ Promise.resolve();
let pt = !1;
function _r() {
  pt || (pt = !0, yr.then(Pn));
}
function ht(e) {
  ke.push(e);
}
const lt = /* @__PURE__ */ new Set();
let we = 0;
function Pn() {
  if (we !== 0)
    return;
  const e = Le;
  do {
    try {
      for (; we < xe.length; ) {
        const t = xe[we];
        we++, Ee(t), wr(t.$$);
      }
    } catch (t) {
      throw xe.length = 0, we = 0, t;
    }
    for (Ee(null), xe.length = 0, we = 0; gt.length; )
      gt.pop()();
    for (let t = 0; t < ke.length; t += 1) {
      const n = ke[t];
      lt.has(n) || (lt.add(n), n());
    }
    ke.length = 0;
  } while (xe.length);
  for (; Wt.length; )
    Wt.pop()();
  pt = !1, lt.clear(), Ee(e);
}
function wr(e) {
  if (e.fragment !== null) {
    e.update(), fe(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ht);
  }
}
function xr(e) {
  const t = [], n = [];
  ke.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), ke = t;
}
const De = /* @__PURE__ */ new Set();
let me;
function ie() {
  me = {
    r: 0,
    c: [],
    p: me
    // parent group
  };
}
function se() {
  me.r || fe(me.c), me = me.p;
}
function j(e, t) {
  e && e.i && (De.delete(e), e.i(t));
}
function G(e, t, n, r) {
  if (e && e.o) {
    if (De.has(e))
      return;
    De.add(e), me.c.push(() => {
      De.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
function J(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Re(e, t) {
  const n = {}, r = {}, o = { $$scope: 1 };
  let l = e.length;
  for (; l--; ) {
    const i = e[l], a = t[l];
    if (a) {
      for (const s in i)
        s in a || (r[s] = 1);
      for (const s in a)
        o[s] || (n[s] = a[s], o[s] = 1);
      e[l] = a;
    } else
      for (const s in i)
        o[s] = 1;
  }
  for (const i in r)
    i in n || (n[i] = void 0);
  return n;
}
function kr(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function ye(e) {
  e && e.c();
}
function pe(e, t, n) {
  const { fragment: r, after_update: o } = e.$$;
  r && r.m(t, n), ht(() => {
    const l = e.$$.on_mount.map(Tn).filter(Ge);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : fe(l), e.$$.on_mount = [];
  }), o.forEach(ht);
}
function he(e, t) {
  const n = e.$$;
  n.fragment !== null && (xr(n.after_update), fe(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Cr(e, t) {
  e.$$.dirty[0] === -1 && (xe.push(e), _r(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ee(e, t, n, r, o, l, i, a = [-1]) {
  const s = Le;
  Ee(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: D,
    not_equal: o,
    bound: Vt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Vt(),
    dirty: a,
    skip_bound: !1,
    root: t.target || s.$$.root
  };
  i && i(u.root);
  let c = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, g, ...d) => {
    const h = d.length ? d[0] : g;
    return u.ctx && o(u.ctx[f], u.ctx[f] = h) && (!u.skip_bound && u.bound[f] && u.bound[f](h), c && Cr(e, f)), g;
  }) : [], u.update(), c = !0, fe(u.before_update), u.fragment = r ? r(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = mr(t.target);
      u.fragment && u.fragment.l(f), f.forEach(E);
    } else
      u.fragment && u.fragment.c();
    t.intro && j(e.$$.fragment), pe(e, t.target, t.anchor), Pn();
  }
  Ee(s);
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
    he(this, 1), this.$destroy = D;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!Ge(n))
      return D;
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
    this.$$set && !ur(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Sr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Sr);
function Ir(e) {
  let t, n, r, o, l, i, a, s, u;
  return {
    c() {
      t = x("div"), n = x("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current svelte-cid3ab" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" class="svelte-cid3ab"></path></svg>', r = T(), o = x("div"), l = x("div"), i = x("span"), i.textContent = "Success", a = T(), s = x("p"), u = F(
        /*msg*/
        e[0]
      ), m(n, "class", "flex items-center justify-center w-12 bg-emerald-500 svelte-cid3ab"), m(i, "class", "font-semibold text-emerald-500 dark:text-emerald-400 svelte-cid3ab"), m(s, "class", "text-sm text-gray-600 dark:text-gray-200 svelte-cid3ab"), m(l, "class", "mx-3 svelte-cid3ab"), m(o, "class", "px-4 py-2 -mx-3 svelte-cid3ab"), m(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 svelte-cid3ab");
    },
    m(c, f) {
      O(c, t, f), p(t, n), p(t, r), p(t, o), p(o, l), p(l, i), p(l, a), p(l, s), p(s, u);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && W(
        u,
        /*msg*/
        c[0]
      );
    },
    i: D,
    o: D,
    d(c) {
      c && E(t);
    }
  };
}
function Mr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const l = Ie();
  return Be(() => {
    setTimeout(
      () => {
        l("onEnd");
      },
      o
    );
  }), e.$$set = (i) => {
    "msg" in i && n(0, r = i.msg), "duration" in i && n(1, o = i.duration);
  }, [r, o];
}
class jr extends te {
  constructor(t) {
    super(), ee(this, t, Mr, Ir, X, { msg: 0, duration: 1 });
  }
}
function Ar(e) {
  let t, n, r, o, l, i, a, s, u;
  return {
    c() {
      t = x("div"), n = x("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current svelte-cid3ab" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" class="svelte-cid3ab"></path></svg>', r = T(), o = x("div"), l = x("div"), i = x("span"), i.textContent = "Info", a = T(), s = x("p"), u = F(
        /*msg*/
        e[0]
      ), m(n, "class", "flex items-center justify-center w-12 bg-blue-500 svelte-cid3ab"), m(i, "class", "font-semibold text-blue-500 dark:text-blue-400 svelte-cid3ab"), m(s, "class", "text-sm text-gray-600 dark:text-gray-200 svelte-cid3ab"), m(l, "class", "mx-3 svelte-cid3ab"), m(o, "class", "px-4 py-2 -mx-3 svelte-cid3ab"), m(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 svelte-cid3ab");
    },
    m(c, f) {
      O(c, t, f), p(t, n), p(t, r), p(t, o), p(o, l), p(l, i), p(l, a), p(l, s), p(s, u);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && W(
        u,
        /*msg*/
        c[0]
      );
    },
    i: D,
    o: D,
    d(c) {
      c && E(t);
    }
  };
}
function Tr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const l = Ie();
  return Be(() => {
    setTimeout(
      () => {
        l("onEnd");
      },
      o
    );
  }), e.$$set = (i) => {
    "msg" in i && n(0, r = i.msg), "duration" in i && n(1, o = i.duration);
  }, [r, o];
}
class Dt extends te {
  constructor(t) {
    super(), ee(this, t, Tr, Ar, X, { msg: 0, duration: 1 });
  }
}
function Er(e) {
  let t, n, r, o, l, i, a, s, u;
  return {
    c() {
      t = x("div"), n = x("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current svelte-cid3ab" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" class="svelte-cid3ab"></path></svg>', r = T(), o = x("div"), l = x("div"), i = x("span"), i.textContent = "Warning", a = T(), s = x("p"), u = F(
        /*msg*/
        e[0]
      ), m(n, "class", "flex items-center justify-center w-12 bg-yellow-400 svelte-cid3ab"), m(i, "class", "font-semibold text-yellow-400 dark:text-yellow-300 svelte-cid3ab"), m(s, "class", "text-sm text-gray-600 dark:text-gray-200 svelte-cid3ab"), m(l, "class", "mx-3 svelte-cid3ab"), m(o, "class", "px-4 py-2 -mx-3 svelte-cid3ab"), m(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 svelte-cid3ab");
    },
    m(c, f) {
      O(c, t, f), p(t, n), p(t, r), p(t, o), p(o, l), p(l, i), p(l, a), p(l, s), p(s, u);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && W(
        u,
        /*msg*/
        c[0]
      );
    },
    i: D,
    o: D,
    d(c) {
      c && E(t);
    }
  };
}
function Pr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const l = Ie();
  return Be(() => {
    setTimeout(
      () => {
        l("onEnd");
      },
      o
    );
  }), e.$$set = (i) => {
    "msg" in i && n(0, r = i.msg), "duration" in i && n(1, o = i.duration);
  }, [r, o];
}
class Or extends te {
  constructor(t) {
    super(), ee(this, t, Pr, Er, X, { msg: 0, duration: 1 });
  }
}
function Lr(e) {
  let t, n, r, o, l, i, a, s, u;
  return {
    c() {
      t = x("div"), n = x("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current svelte-cid3ab" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" class="svelte-cid3ab"></path></svg>', r = T(), o = x("div"), l = x("div"), i = x("span"), i.textContent = "Error", a = T(), s = x("p"), u = F(
        /*msg*/
        e[0]
      ), m(n, "class", "flex items-center justify-center w-12 bg-red-500 svelte-cid3ab"), m(i, "class", "font-semibold text-red-500 dark:text-red-400 svelte-cid3ab"), m(s, "class", "text-sm text-gray-600 dark:text-gray-200 svelte-cid3ab"), m(l, "class", "mx-3 svelte-cid3ab"), m(o, "class", "px-4 py-2 -mx-3 svelte-cid3ab"), m(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 svelte-cid3ab");
    },
    m(c, f) {
      O(c, t, f), p(t, n), p(t, r), p(t, o), p(o, l), p(l, i), p(l, a), p(l, s), p(s, u);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && W(
        u,
        /*msg*/
        c[0]
      );
    },
    i: D,
    o: D,
    d(c) {
      c && E(t);
    }
  };
}
function zr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const l = Ie();
  return Be(() => {
    setTimeout(
      () => {
        l("onEnd");
      },
      o
    );
  }), e.$$set = (i) => {
    "msg" in i && n(0, r = i.msg), "duration" in i && n(1, o = i.duration);
  }, [r, o];
}
let Nr = class extends te {
  constructor(t) {
    super(), ee(this, t, zr, Lr, X, { msg: 0, duration: 1 });
  }
};
const qt = "uikit_msg_panel";
let it = 0;
const ii = (e) => {
  it += 1;
  let t = window.document.getElementById(qt);
  t || (t = window.document.createElement("div"), t.id = qt, t.style.position = "absolute", t.style.top = "5px", t.style.right = "5px", t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "10px", t.style.zIndex = "100", document.body.appendChild(t));
  const n = window.document.createElement("div");
  t.appendChild(n);
  let r;
  switch (e.type) {
    case "success":
      r = new jr({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "info":
      r = new Dt({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "warn":
      r = new Or({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "error":
      r = new Nr({
        target: n,
        props: {
          ...e
        }
      });
      break;
    default:
      r = new Dt({
        target: n,
        props: {
          ...e
        }
      });
      break;
  }
  return r.$on("onEnd", () => {
    r.$destroy(), it -= 1, it == 0 && document.body.removeChild(t);
  }), r;
}, Ve = (e) => Object.entries(e).map(([t, n]) => `${t}: ${n};`).join(" ");
function Gr(e) {
  let t, n, r, o, l, i, a, s, u, c, f, g, d, h, b, _, v, y, k, S;
  return {
    c() {
      t = x("div"), n = x("div"), r = x("div"), o = x("div"), l = F(
        /*title*/
        e[0]
      ), i = T(), a = x("div"), s = x("div"), u = F(
        /*content*/
        e[1]
      ), c = T(), f = x("div"), g = x("div"), d = F(
        /*cancelText*/
        e[2]
      ), b = T(), _ = x("div"), v = F(
        /*okText*/
        e[3]
      ), m(o, "class", "modal-title svelte-f901x2"), m(a, "class", "content svelte-f901x2"), m(r, "class", "modal-content-body svelte-f901x2"), m(g, "class", "btn button-left centerLayout svelte-f901x2"), m(g, "style", h = Ve(
        /*cancelBtnStyle*/
        e[4]
      )), m(_, "class", "btn button-right centerLayout svelte-f901x2"), m(_, "style", y = Ve(
        /*okBtnStyle*/
        e[5]
      )), m(f, "class", "confirm-button-wrap svelte-f901x2"), m(n, "class", "confirm-modal-content svelte-f901x2"), m(t, "class", "confirm-modal svelte-f901x2");
    },
    m(R, w) {
      O(R, t, w), p(t, n), p(n, r), p(r, o), p(o, l), p(r, i), p(r, a), p(a, s), p(s, u), p(n, c), p(n, f), p(f, g), p(g, d), p(f, b), p(f, _), p(_, v), e[11](t), k || (S = [
        Z(
          g,
          "click",
          /*onCancelClk*/
          e[8]
        ),
        Z(
          _,
          "click",
          /*onOkClk*/
          e[7]
        )
      ], k = !0);
    },
    p(R, [w]) {
      w & /*title*/
      1 && W(
        l,
        /*title*/
        R[0]
      ), w & /*content*/
      2 && W(
        u,
        /*content*/
        R[1]
      ), w & /*cancelText*/
      4 && W(
        d,
        /*cancelText*/
        R[2]
      ), w & /*cancelBtnStyle*/
      16 && h !== (h = Ve(
        /*cancelBtnStyle*/
        R[4]
      )) && m(g, "style", h), w & /*okText*/
      8 && W(
        v,
        /*okText*/
        R[3]
      ), w & /*okBtnStyle*/
      32 && y !== (y = Ve(
        /*okBtnStyle*/
        R[5]
      )) && m(_, "style", y);
    },
    i: D,
    o: D,
    d(R) {
      R && E(t), e[11](null), k = !1, fe(S);
    }
  };
}
function Br(e, t, n) {
  let { title: r = "" } = t, { content: o = "" } = t, { cancelText: l = "取消" } = t, { okText: i = "确定" } = t, { onCancel: a = () => {
  } } = t, { onOk: s = () => {
  } } = t, { cancelBtnStyle: u = "" } = t, { okBtnStyle: c = "" } = t;
  const f = Ie();
  let g;
  const d = () => {
    s(), f("onOk");
  }, h = () => {
    a(), f("onCancel");
  };
  function b(_) {
    gt[_ ? "unshift" : "push"](() => {
      g = _, n(6, g);
    });
  }
  return e.$$set = (_) => {
    "title" in _ && n(0, r = _.title), "content" in _ && n(1, o = _.content), "cancelText" in _ && n(2, l = _.cancelText), "okText" in _ && n(3, i = _.okText), "onCancel" in _ && n(9, a = _.onCancel), "onOk" in _ && n(10, s = _.onOk), "cancelBtnStyle" in _ && n(4, u = _.cancelBtnStyle), "okBtnStyle" in _ && n(5, c = _.okBtnStyle);
  }, [
    r,
    o,
    l,
    i,
    u,
    c,
    g,
    d,
    h,
    a,
    s,
    b
  ];
}
class Rr extends te {
  constructor(t) {
    super(), ee(this, t, Br, Gr, X, {
      title: 0,
      content: 1,
      cancelText: 2,
      okText: 3,
      onCancel: 9,
      onOk: 10,
      cancelBtnStyle: 4,
      okBtnStyle: 5
    });
  }
}
const si = (e) => {
  const t = window.document.createElement("div");
  document.body.appendChild(t);
  const n = new Rr({
    target: t,
    props: {
      ...e
    }
  });
  return n.$on("onOk", () => {
    n.$destroy();
  }), n.$on("onCancel", () => {
    n.$destroy();
  }), n;
}, Pe = /^[a-z0-9]+(-[a-z0-9]+)*$/, et = (e, t, n, r = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    r = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const a = o.pop(), s = o.pop(), u = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : r,
      prefix: s,
      name: a
    };
    return t && !qe(u) ? null : u;
  }
  const l = o[0], i = l.split("-");
  if (i.length > 1) {
    const a = {
      provider: r,
      prefix: i.shift(),
      name: i.join("-")
    };
    return t && !qe(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: l
    };
    return t && !qe(a, n) ? null : a;
  }
  return null;
}, qe = (e, t) => e ? !!((e.provider === "" || e.provider.match(Pe)) && (t && e.prefix === "" || e.prefix.match(Pe)) && e.name.match(Pe)) : !1, On = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Ye = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), tt = Object.freeze({
  ...On,
  ...Ye
}), mt = Object.freeze({
  ...tt,
  body: "",
  hidden: !1
});
function Fr(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Ut(e, t) {
  const n = Fr(e, t);
  for (const r in mt)
    r in Ye ? r in e && !(r in n) && (n[r] = Ye[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function Vr(e, t) {
  const n = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function l(i) {
    if (n[i])
      return o[i] = [];
    if (!(i in o)) {
      o[i] = null;
      const a = r[i] && r[i].parent, s = a && l(a);
      s && (o[i] = [a].concat(s));
    }
    return o[i];
  }
  return (t || Object.keys(n).concat(Object.keys(r))).forEach(l), o;
}
function Hr(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let l = {};
  function i(a) {
    l = Ut(
      r[a] || o[a],
      l
    );
  }
  return i(t), n.forEach(i), Ut(e, l);
}
function Ln(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = Vr(e);
  for (const o in r) {
    const l = r[o];
    l && (t(o, Hr(e, o, l)), n.push(o));
  }
  return n;
}
const Wr = {
  provider: "",
  aliases: {},
  not_found: {},
  ...On
};
function st(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function zn(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !st(e, Wr))
    return null;
  const n = t.icons;
  for (const o in n) {
    const l = n[o];
    if (!o.match(Pe) || typeof l.body != "string" || !st(
      l,
      mt
    ))
      return null;
  }
  const r = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in r) {
    const l = r[o], i = l.parent;
    if (!o.match(Pe) || typeof i != "string" || !n[i] && !r[i] || !st(
      l,
      mt
    ))
      return null;
  }
  return t;
}
const Zt = /* @__PURE__ */ Object.create(null);
function Dr(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function ve(e, t) {
  const n = Zt[e] || (Zt[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = Dr(e, t));
}
function Ot(e, t) {
  return zn(t) ? Ln(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function qr(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let ze = !1;
function Nn(e) {
  return typeof e == "boolean" && (ze = e), ze;
}
function Ur(e) {
  const t = typeof e == "string" ? et(e, !0, ze) : e;
  if (t) {
    const n = ve(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Zr(e, t) {
  const n = et(e, !0, ze);
  if (!n)
    return !1;
  const r = ve(n.provider, n.prefix);
  return qr(r, n.name, t);
}
function Qr(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), ze && !t && !e.prefix) {
    let o = !1;
    return zn(e) && (e.prefix = "", Ln(e, (l, i) => {
      i && Zr(l, i) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!qe({
    provider: t,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = ve(t, n);
  return !!Ot(r, e);
}
const Gn = Object.freeze({
  width: null,
  height: null
}), Bn = Object.freeze({
  // Dimensions
  ...Gn,
  // Transformations
  ...Ye
}), Jr = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Xr = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Qt(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(Jr);
  if (r === null || !r.length)
    return e;
  const o = [];
  let l = r.shift(), i = Xr.test(l);
  for (; ; ) {
    if (i) {
      const a = parseFloat(l);
      isNaN(a) ? o.push(l) : o.push(Math.ceil(a * t * n) / n);
    } else
      o.push(l);
    if (l = r.shift(), l === void 0)
      return o.join("");
    i = !i;
  }
}
const Yr = (e) => e === "unset" || e === "undefined" || e === "none";
function Kr(e, t) {
  const n = {
    ...tt,
    ...e
  }, r = {
    ...Bn,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let l = n.body;
  [n, r].forEach((h) => {
    const b = [], _ = h.hFlip, v = h.vFlip;
    let y = h.rotate;
    _ ? v ? y += 2 : (b.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), b.push("scale(-1 1)"), o.top = o.left = 0) : v && (b.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), b.push("scale(1 -1)"), o.top = o.left = 0);
    let k;
    switch (y < 0 && (y -= Math.floor(y / 4) * 4), y = y % 4, y) {
      case 1:
        k = o.height / 2 + o.top, b.unshift(
          "rotate(90 " + k.toString() + " " + k.toString() + ")"
        );
        break;
      case 2:
        b.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        k = o.width / 2 + o.left, b.unshift(
          "rotate(-90 " + k.toString() + " " + k.toString() + ")"
        );
        break;
    }
    y % 2 === 1 && (o.left !== o.top && (k = o.left, o.left = o.top, o.top = k), o.width !== o.height && (k = o.width, o.width = o.height, o.height = k)), b.length && (l = '<g transform="' + b.join(" ") + '">' + l + "</g>");
  });
  const i = r.width, a = r.height, s = o.width, u = o.height;
  let c, f;
  i === null ? (f = a === null ? "1em" : a === "auto" ? u : a, c = Qt(f, s / u)) : (c = i === "auto" ? s : i, f = a === null ? Qt(c, u / s) : a === "auto" ? u : a);
  const g = {}, d = (h, b) => {
    Yr(b) || (g[h] = b.toString());
  };
  return d("width", c), d("height", f), g.viewBox = o.left.toString() + " " + o.top.toString() + " " + s.toString() + " " + u.toString(), {
    attributes: g,
    body: l
  };
}
const $r = /\sid="(\S+)"/g, eo = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let to = 0;
function no(e, t = eo) {
  const n = [];
  let r;
  for (; r = $r.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((l) => {
    const i = typeof t == "function" ? t(l) : t + (to++).toString(), a = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + i + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const bt = /* @__PURE__ */ Object.create(null);
function ro(e, t) {
  bt[e] = t;
}
function vt(e) {
  return bt[e] || bt[""];
}
function Lt(e) {
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
const zt = /* @__PURE__ */ Object.create(null), Me = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Ue = [];
for (; Me.length > 0; )
  Me.length === 1 || Math.random() > 0.5 ? Ue.push(Me.shift()) : Ue.push(Me.pop());
zt[""] = Lt({
  resources: ["https://api.iconify.design"].concat(Ue)
});
function oo(e, t) {
  const n = Lt(t);
  return n === null ? !1 : (zt[e] = n, !0);
}
function Nt(e) {
  return zt[e];
}
const lo = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Jt = lo();
function io(e, t) {
  const n = Nt(e);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let o = 0;
    n.resources.forEach((i) => {
      o = Math.max(o, i.length);
    });
    const l = t + ".json?icons=";
    r = n.maxURL - o - n.path.length - l.length;
  }
  return r;
}
function so(e) {
  return e === 404;
}
const ao = (e, t, n) => {
  const r = [], o = io(e, t), l = "icons";
  let i = {
    type: l,
    provider: e,
    prefix: t,
    icons: []
  }, a = 0;
  return n.forEach((s, u) => {
    a += s.length + 1, a >= o && u > 0 && (r.push(i), i = {
      type: l,
      provider: e,
      prefix: t,
      icons: []
    }, a = s.length), i.icons.push(s);
  }), r.push(i), r;
};
function co(e) {
  if (typeof e == "string") {
    const t = Nt(e);
    if (t)
      return t.path;
  }
  return "/";
}
const uo = (e, t, n) => {
  if (!Jt) {
    n("abort", 424);
    return;
  }
  let r = co(t.provider);
  switch (t.type) {
    case "icons": {
      const l = t.prefix, a = t.icons.join(","), s = new URLSearchParams({
        icons: a
      });
      r += l + ".json?" + s.toString();
      break;
    }
    case "custom": {
      const l = t.uri;
      r += l.slice(0, 1) === "/" ? l.slice(1) : l;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let o = 503;
  Jt(e + r).then((l) => {
    const i = l.status;
    if (i !== 200) {
      setTimeout(() => {
        n(so(i) ? "abort" : "next", i);
      });
      return;
    }
    return o = 501, l.json();
  }).then((l) => {
    if (typeof l != "object" || l === null) {
      setTimeout(() => {
        l === 404 ? n("abort", l) : n("next", o);
      });
      return;
    }
    setTimeout(() => {
      n("success", l);
    });
  }).catch(() => {
    n("next", o);
  });
}, fo = {
  prepare: ao,
  send: uo
};
function go(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  e.sort((o, l) => o.provider !== l.provider ? o.provider.localeCompare(l.provider) : o.prefix !== l.prefix ? o.prefix.localeCompare(l.prefix) : o.name.localeCompare(l.name));
  let r = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((o) => {
    if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider)
      return;
    r = o;
    const l = o.provider, i = o.prefix, a = o.name, s = n[l] || (n[l] = /* @__PURE__ */ Object.create(null)), u = s[i] || (s[i] = ve(l, i));
    let c;
    a in u.icons ? c = t.loaded : i === "" || u.missing.has(a) ? c = t.missing : c = t.pending;
    const f = {
      provider: l,
      prefix: i,
      name: a
    };
    c.push(f);
  }), t;
}
function Rn(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function po(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let n = !1;
    const r = e.provider, o = e.prefix;
    t.forEach((l) => {
      const i = l.icons, a = i.pending.length;
      i.pending = i.pending.filter((s) => {
        if (s.prefix !== o)
          return !0;
        const u = s.name;
        if (e.icons[u])
          i.loaded.push({
            provider: r,
            prefix: o,
            name: u
          });
        else if (e.missing.has(u))
          i.missing.push({
            provider: r,
            prefix: o,
            name: u
          });
        else
          return n = !0, !0;
        return !1;
      }), i.pending.length !== a && (n || Rn([e], l.id), l.callback(
        i.loaded.slice(0),
        i.missing.slice(0),
        i.pending.slice(0),
        l.abort
      ));
    });
  }));
}
let ho = 0;
function mo(e, t, n) {
  const r = ho++, o = Rn.bind(null, n, r);
  if (!t.pending.length)
    return o;
  const l = {
    id: r,
    icons: t,
    callback: e,
    abort: o
  };
  return n.forEach((i) => {
    (i.loaderCallbacks || (i.loaderCallbacks = [])).push(l);
  }), o;
}
function bo(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const l = typeof o == "string" ? et(o, t, n) : o;
    l && r.push(l);
  }), r;
}
var vo = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function yo(e, t, n, r) {
  const o = e.resources.length, l = e.random ? Math.floor(Math.random() * o) : e.index;
  let i;
  if (e.random) {
    let w = e.resources.slice(0);
    for (i = []; w.length > 1; ) {
      const P = Math.floor(Math.random() * w.length);
      i.push(w[P]), w = w.slice(0, P).concat(w.slice(P + 1));
    }
    i = i.concat(w);
  } else
    i = e.resources.slice(l).concat(e.resources.slice(0, l));
  const a = Date.now();
  let s = "pending", u = 0, c, f = null, g = [], d = [];
  typeof r == "function" && d.push(r);
  function h() {
    f && (clearTimeout(f), f = null);
  }
  function b() {
    s === "pending" && (s = "aborted"), h(), g.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), g = [];
  }
  function _(w, P) {
    P && (d = []), typeof w == "function" && d.push(w);
  }
  function v() {
    return {
      startTime: a,
      payload: t,
      status: s,
      queriesSent: u,
      queriesPending: g.length,
      subscribe: _,
      abort: b
    };
  }
  function y() {
    s = "failed", d.forEach((w) => {
      w(void 0, c);
    });
  }
  function k() {
    g.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), g = [];
  }
  function S(w, P, L) {
    const ne = P !== "success";
    switch (g = g.filter((re) => re !== w), s) {
      case "pending":
        break;
      case "failed":
        if (ne || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (P === "abort") {
      c = L, y();
      return;
    }
    if (ne) {
      c = L, g.length || (i.length ? R() : y());
      return;
    }
    if (h(), k(), !e.random) {
      const re = e.resources.indexOf(w.resource);
      re !== -1 && re !== e.index && (e.index = re);
    }
    s = "completed", d.forEach((re) => {
      re(L);
    });
  }
  function R() {
    if (s !== "pending")
      return;
    h();
    const w = i.shift();
    if (w === void 0) {
      if (g.length) {
        f = setTimeout(() => {
          h(), s === "pending" && (k(), y());
        }, e.timeout);
        return;
      }
      y();
      return;
    }
    const P = {
      status: "pending",
      resource: w,
      callback: (L, ne) => {
        S(P, L, ne);
      }
    };
    g.push(P), u++, f = setTimeout(R, e.rotate), n(w, t, P.callback);
  }
  return setTimeout(R), v;
}
function Fn(e) {
  const t = {
    ...vo,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, s, u) {
    const c = yo(
      t,
      a,
      s,
      (f, g) => {
        r(), u && u(f, g);
      }
    );
    return n.push(c), c;
  }
  function l(a) {
    return n.find((s) => a(s)) || null;
  }
  return {
    query: o,
    find: l,
    setIndex: (a) => {
      t.index = a;
    },
    getIndex: () => t.index,
    cleanup: r
  };
}
function Xt() {
}
const at = /* @__PURE__ */ Object.create(null);
function _o(e) {
  if (!at[e]) {
    const t = Nt(e);
    if (!t)
      return;
    const n = Fn(t), r = {
      config: t,
      redundancy: n
    };
    at[e] = r;
  }
  return at[e];
}
function wo(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const l = vt(e);
    if (!l)
      return n(void 0, 424), Xt;
    o = l.send;
    const i = _o(e);
    i && (r = i.redundancy);
  } else {
    const l = Lt(e);
    if (l) {
      r = Fn(l);
      const i = e.resources ? e.resources[0] : "", a = vt(i);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Xt) : r.query(t, o, n)().abort;
}
const Yt = "iconify2", Ne = "iconify", Vn = Ne + "-count", Kt = Ne + "-version", Hn = 36e5, xo = 168;
function yt(e, t) {
  try {
    return e.getItem(t);
  } catch {
  }
}
function Gt(e, t, n) {
  try {
    return e.setItem(t, n), !0;
  } catch {
  }
}
function $t(e, t) {
  try {
    e.removeItem(t);
  } catch {
  }
}
function _t(e, t) {
  return Gt(e, Vn, t.toString());
}
function wt(e) {
  return parseInt(yt(e, Vn)) || 0;
}
const nt = {
  local: !0,
  session: !0
}, Wn = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Bt = !1;
function ko(e) {
  Bt = e;
}
let He = typeof window > "u" ? {} : window;
function Dn(e) {
  const t = e + "Storage";
  try {
    if (He && He[t] && typeof He[t].length == "number")
      return He[t];
  } catch {
  }
  nt[e] = !1;
}
function qn(e, t) {
  const n = Dn(e);
  if (!n)
    return;
  const r = yt(n, Kt);
  if (r !== Yt) {
    if (r) {
      const a = wt(n);
      for (let s = 0; s < a; s++)
        $t(n, Ne + s.toString());
    }
    Gt(n, Kt, Yt), _t(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / Hn) - xo, l = (a) => {
    const s = Ne + a.toString(), u = yt(n, s);
    if (typeof u == "string") {
      try {
        const c = JSON.parse(u);
        if (typeof c == "object" && typeof c.cached == "number" && c.cached > o && typeof c.provider == "string" && typeof c.data == "object" && typeof c.data.prefix == "string" && // Valid item: run callback
        t(c, a))
          return !0;
      } catch {
      }
      $t(n, s);
    }
  };
  let i = wt(n);
  for (let a = i - 1; a >= 0; a--)
    l(a) || (a === i - 1 ? (i--, _t(n, i)) : Wn[e].add(a));
}
function Un() {
  if (!Bt) {
    ko(!0);
    for (const e in nt)
      qn(e, (t) => {
        const n = t.data, r = t.provider, o = n.prefix, l = ve(
          r,
          o
        );
        if (!Ot(l, n).length)
          return !1;
        const i = n.lastModified || -1;
        return l.lastModifiedCached = l.lastModifiedCached ? Math.min(l.lastModifiedCached, i) : i, !0;
      });
  }
}
function Co(e, t) {
  const n = e.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= t
  )
    return n === t;
  if (e.lastModifiedCached = t, n)
    for (const r in nt)
      qn(r, (o) => {
        const l = o.data;
        return o.provider !== e.provider || l.prefix !== e.prefix || l.lastModified === t;
      });
  return !0;
}
function So(e, t) {
  Bt || Un();
  function n(r) {
    let o;
    if (!nt[r] || !(o = Dn(r)))
      return;
    const l = Wn[r];
    let i;
    if (l.size)
      l.delete(i = Array.from(l).shift());
    else if (i = wt(o), !_t(o, i + 1))
      return;
    const a = {
      cached: Math.floor(Date.now() / Hn),
      provider: e.provider,
      data: t
    };
    return Gt(
      o,
      Ne + i.toString(),
      JSON.stringify(a)
    );
  }
  t.lastModified && !Co(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"));
}
function en() {
}
function Io(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, po(e);
  }));
}
function Mo(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    delete e.iconsToLoad;
    let l;
    if (!o || !(l = vt(n)))
      return;
    l.prepare(n, r, o).forEach((a) => {
      wo(n, a, (s) => {
        if (typeof s != "object")
          a.icons.forEach((u) => {
            e.missing.add(u);
          });
        else
          try {
            const u = Ot(
              e,
              s
            );
            if (!u.length)
              return;
            const c = e.pendingIcons;
            c && u.forEach((f) => {
              c.delete(f);
            }), So(e, s);
          } catch (u) {
            console.error(u);
          }
        Io(e);
      });
    });
  }));
}
const jo = (e, t) => {
  const n = bo(e, !0, Nn()), r = go(n);
  if (!r.pending.length) {
    let s = !0;
    return t && setTimeout(() => {
      s && t(
        r.loaded,
        r.missing,
        r.pending,
        en
      );
    }), () => {
      s = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), l = [];
  let i, a;
  return r.pending.forEach((s) => {
    const { provider: u, prefix: c } = s;
    if (c === a && u === i)
      return;
    i = u, a = c, l.push(ve(u, c));
    const f = o[u] || (o[u] = /* @__PURE__ */ Object.create(null));
    f[c] || (f[c] = []);
  }), r.pending.forEach((s) => {
    const { provider: u, prefix: c, name: f } = s, g = ve(u, c), d = g.pendingIcons || (g.pendingIcons = /* @__PURE__ */ new Set());
    d.has(f) || (d.add(f), o[u][c].push(f));
  }), l.forEach((s) => {
    const { provider: u, prefix: c } = s;
    o[u][c].length && Mo(s, o[u][c]);
  }), t ? mo(t, r, l) : en;
};
function Ao(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], l = typeof o;
    r in Gn ? (o === null || o && (l === "string" || l === "number")) && (n[r] = o) : l === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const To = /[\s,]+/;
function Eo(e, t) {
  t.split(To).forEach((n) => {
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
function Po(e, t = 0) {
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
      let l = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(l) ? 0 : (l = l / o, l % 1 === 0 ? r(l) : 0);
    }
  }
  return t;
}
function Oo(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Lo(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function zo(e) {
  return "data:image/svg+xml," + Lo(e);
}
function No(e) {
  return 'url("' + zo(e) + '")';
}
const tn = {
  ...Bn,
  inline: !1
}, Go = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Bo = {
  display: "inline-block"
}, xt = {
  "background-color": "currentColor"
}, Zn = {
  "background-color": "transparent"
}, nn = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, rn = {
  "-webkit-mask": xt,
  mask: xt,
  background: Zn
};
for (const e in rn) {
  const t = rn[e];
  for (const n in nn)
    t[e + "-" + n] = nn[n];
}
function Ro(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
function Fo(e, t) {
  const n = Ao(tn, t), r = t.mode || "svg", o = r === "svg" ? { ...Go } : {};
  e.body.indexOf("xlink:") === -1 && delete o["xmlns:xlink"];
  let l = typeof t.style == "string" ? t.style : "";
  for (let v in t) {
    const y = t[v];
    if (y !== void 0)
      switch (v) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[v] = y === !0 || y === "true" || y === 1;
          break;
        case "flip":
          typeof y == "string" && Eo(n, y);
          break;
        case "color":
          l = l + (l.length > 0 && l.trim().slice(-1) !== ";" ? ";" : "") + "color: " + y + "; ";
          break;
        case "rotate":
          typeof y == "string" ? n[v] = Po(y) : typeof y == "number" && (n[v] = y);
          break;
        case "ariaHidden":
        case "aria-hidden":
          y !== !0 && y !== "true" && delete o["aria-hidden"];
          break;
        default:
          if (v.slice(0, 3) === "on:")
            break;
          tn[v] === void 0 && (o[v] = y);
      }
  }
  const i = Kr(e, n), a = i.attributes;
  if (n.inline && (l = "vertical-align: -0.125em; " + l), r === "svg") {
    Object.assign(o, a), l !== "" && (o.style = l);
    let v = 0, y = t.id;
    return typeof y == "string" && (y = y.replace(/-/g, "_")), {
      svg: !0,
      attributes: o,
      body: no(i.body, y ? () => y + "ID" + v++ : "iconifySvelte")
    };
  }
  const { body: s, width: u, height: c } = e, f = r === "mask" || (r === "bg" ? !1 : s.indexOf("currentColor") !== -1), g = Oo(s, {
    ...a,
    width: u + "",
    height: c + ""
  }), h = {
    "--svg": No(g)
  }, b = (v) => {
    const y = a[v];
    y && (h[v] = Ro(y));
  };
  b("width"), b("height"), Object.assign(h, Bo, f ? xt : Zn);
  let _ = "";
  for (const v in h)
    _ += v + ": " + h[v] + ";";
  return o.style = _ + l, {
    svg: !1,
    attributes: o
  };
}
Nn(!0);
ro("", fo);
if (typeof document < "u" && typeof window < "u") {
  Un();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Qr(r)) && console.error(n);
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
          oo(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function Vo(e, t, n, r, o) {
  function l() {
    t.loading && (t.loading.abort(), t.loading = null);
  }
  if (typeof e == "object" && e !== null && typeof e.body == "string")
    return t.name = "", l(), { data: { ...tt, ...e } };
  let i;
  if (typeof e != "string" || (i = et(e, !1, !0)) === null)
    return l(), null;
  const a = Ur(i);
  if (!a)
    return n && (!t.loading || t.loading.name !== e) && (l(), t.name = "", t.loading = {
      name: e,
      abort: jo([i], r)
    }), null;
  l(), t.name !== e && (t.name = e, o && !t.destroyed && o(e));
  const s = ["iconify"];
  return i.prefix !== "" && s.push("iconify--" + i.prefix), i.provider !== "" && s.push("iconify--" + i.provider), { data: a, classes: s };
}
function Ho(e, t) {
  return e ? Fo({
    ...tt,
    ...e
  }, t) : null;
}
function on(e) {
  let t;
  function n(l, i) {
    return (
      /*data*/
      l[0].svg ? Do : Wo
    );
  }
  let r = n(e), o = r(e);
  return {
    c() {
      o.c(), t = ge();
    },
    m(l, i) {
      o.m(l, i), O(l, t, i);
    },
    p(l, i) {
      r === (r = n(l)) && o ? o.p(l, i) : (o.d(1), o = r(l), o && (o.c(), o.m(t.parentNode, t)));
    },
    d(l) {
      l && E(t), o.d(l);
    }
  };
}
function Wo(e) {
  let t, n = [
    /*data*/
    e[0].attributes
  ], r = {};
  for (let o = 0; o < n.length; o += 1)
    r = oe(r, n[o]);
  return {
    c() {
      t = x("span"), dt(t, r);
    },
    m(o, l) {
      O(o, t, l);
    },
    p(o, l) {
      dt(t, r = Re(n, [l & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && E(t);
    }
  };
}
function Do(e) {
  let t, n = (
    /*data*/
    e[0].body + ""
  ), r = [
    /*data*/
    e[0].attributes
  ], o = {};
  for (let l = 0; l < r.length; l += 1)
    o = oe(o, r[l]);
  return {
    c() {
      t = dr("svg"), Ht(t, o);
    },
    m(l, i) {
      O(l, t, i), t.innerHTML = n;
    },
    p(l, i) {
      i & /*data*/
      1 && n !== (n = /*data*/
      l[0].body + "") && (t.innerHTML = n), Ht(t, o = Re(r, [i & /*data*/
      1 && /*data*/
      l[0].attributes]));
    },
    d(l) {
      l && E(t);
    }
  };
}
function qo(e) {
  let t, n = (
    /*data*/
    e[0] && on(e)
  );
  return {
    c() {
      n && n.c(), t = ge();
    },
    m(r, o) {
      n && n.m(r, o), O(r, t, o);
    },
    p(r, [o]) {
      /*data*/
      r[0] ? n ? n.p(r, o) : (n = on(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: D,
    o: D,
    d(r) {
      r && E(t), n && n.d(r);
    }
  };
}
function Uo(e, t, n) {
  const r = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let o = !1, l = 0, i;
  const a = (u) => {
    typeof t.onLoad == "function" && t.onLoad(u), Ie()("load", { icon: u });
  };
  function s() {
    n(3, l++, l);
  }
  return Be(() => {
    n(2, o = !0);
  }), vr(() => {
    n(1, r.destroyed = !0, r), r.loading && (r.loading.abort(), n(1, r.loading = null, r));
  }), e.$$set = (u) => {
    n(6, t = oe(oe({}, t), Qe(u)));
  }, e.$$.update = () => {
    {
      const u = Vo(t.icon, r, o, s, a);
      n(0, i = u ? Ho(u.data, t) : null), i && u.classes && n(
        0,
        i.attributes.class = (typeof t.class == "string" ? t.class + " " : "") + u.classes.join(" "),
        i
      );
    }
  }, t = Qe(t), [i, r, o, l];
}
class rt extends te {
  constructor(t) {
    super(), ee(this, t, Uo, qo, X, {});
  }
}
function Qn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Qn(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Zo() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Qn(e)) && (r && (r += " "), r += t);
  return r;
}
function Qo() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Jn(t)) && (r && (r += " "), r += n);
  return r;
}
function Jn(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Jn(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Rt = "-";
function Jo(e) {
  var t = Yo(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function l(a) {
    var s = a.split(Rt);
    return s[0] === "" && s.length !== 1 && s.shift(), Xn(s, t) || Xo(a);
  }
  function i(a, s) {
    var u = n[a] || [];
    return s && o[a] ? [].concat(u, o[a]) : u;
  }
  return {
    getClassGroupId: l,
    getConflictingClassGroupIds: i
  };
}
function Xn(e, t) {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Xn(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var l = e.join(Rt);
    return (i = t.validators.find(function(a) {
      var s = a.validator;
      return s(l);
    })) == null ? void 0 : i.classGroupId;
  }
}
var ln = /^\[(.+)\]$/;
function Xo(e) {
  if (ln.test(e)) {
    var t = ln.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Yo(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = $o(Object.entries(e.classGroups), n);
  return o.forEach(function(l) {
    var i = l[0], a = l[1];
    kt(a, r, i, t);
  }), r;
}
function kt(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var l = o === "" ? t : sn(t, o);
      l.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Ko(o)) {
        kt(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(i) {
      var a = i[0], s = i[1];
      kt(s, sn(t, a), n, r);
    });
  });
}
function sn(e, t) {
  var n = e;
  return t.split(Rt).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Ko(e) {
  return e.isThemeGetter;
}
function $o(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], o = n[1], l = o.map(function(i) {
      return typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(function(a) {
        var s = a[0], u = a[1];
        return [t + s, u];
      })) : i;
    });
    return [r, l];
  }) : e;
}
function el(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(l, i) {
    n.set(l, i), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(i) {
      var a = n.get(i);
      if (a !== void 0)
        return a;
      if ((a = r.get(i)) !== void 0)
        return o(i, a), a;
    },
    set: function(i, a) {
      n.has(i) ? n.set(i, a) : o(i, a);
    }
  };
}
var Yn = "!";
function tl(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], o = t.length;
  return function(i) {
    for (var a = [], s = 0, u = 0, c, f = 0; f < i.length; f++) {
      var g = i[f];
      if (s === 0) {
        if (g === r && (n || i.slice(f, f + o) === t)) {
          a.push(i.slice(u, f)), u = f + o;
          continue;
        }
        if (g === "/") {
          c = f;
          continue;
        }
      }
      g === "[" ? s++ : g === "]" && s--;
    }
    var d = a.length === 0 ? i : i.substring(u), h = d.startsWith(Yn), b = h ? d.substring(1) : d, _ = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: b,
      maybePostfixModifierPosition: _
    };
  };
}
function nl(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function rl(e) {
  return {
    cache: el(e.cacheSize),
    splitModifiers: tl(e),
    ...Jo(e)
  };
}
var ol = /\s+/;
function ll(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, l = /* @__PURE__ */ new Set();
  return e.trim().split(ol).map(function(i) {
    var a = n(i), s = a.modifiers, u = a.hasImportantModifier, c = a.baseClassName, f = a.maybePostfixModifierPosition, g = r(f ? c.substring(0, f) : c), d = !!f;
    if (!g) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (g = r(c), !g)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      d = !1;
    }
    var h = nl(s).join(":"), b = u ? h + Yn : h;
    return {
      isTailwindClass: !0,
      modifierId: b,
      classGroupId: g,
      originalClassName: i,
      hasPostfixModifier: d
    };
  }).reverse().filter(function(i) {
    if (!i.isTailwindClass)
      return !0;
    var a = i.modifierId, s = i.classGroupId, u = i.hasPostfixModifier, c = a + s;
    return l.has(c) ? !1 : (l.add(c), o(s, u).forEach(function(f) {
      return l.add(a + f);
    }), !0);
  }).reverse().map(function(i) {
    return i.originalClassName;
  }).join(" ");
}
function Ct() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, l, i = a;
  function a(u) {
    var c = t[0], f = t.slice(1), g = f.reduce(function(d, h) {
      return h(d);
    }, c());
    return r = rl(g), o = r.cache.get, l = r.cache.set, i = s, s(u);
  }
  function s(u) {
    var c = o(u);
    if (c)
      return c;
    var f = ll(u, r);
    return l(u, f), f;
  }
  return function() {
    return i(Qo.apply(null, arguments));
  };
}
function H(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Kn = /^\[(?:([a-z-]+):)?(.+)\]$/i, il = /^\d+\/\d+$/, sl = /* @__PURE__ */ new Set(["px", "full", "screen"]), al = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, cl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ul = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function le(e) {
  return be(e) || sl.has(e) || il.test(e) || St(e);
}
function St(e) {
  return _e(e, "length", ml);
}
function fl(e) {
  return _e(e, "size", $n);
}
function dl(e) {
  return _e(e, "position", $n);
}
function gl(e) {
  return _e(e, "url", bl);
}
function We(e) {
  return _e(e, "number", be);
}
function be(e) {
  return !Number.isNaN(Number(e));
}
function pl(e) {
  return e.endsWith("%") && be(e.slice(0, -1));
}
function je(e) {
  return an(e) || _e(e, "number", an);
}
function A(e) {
  return Kn.test(e);
}
function Ae() {
  return !0;
}
function ue(e) {
  return al.test(e);
}
function hl(e) {
  return _e(e, "", vl);
}
function _e(e, t, n) {
  var r = Kn.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function ml(e) {
  return cl.test(e);
}
function $n() {
  return !1;
}
function bl(e) {
  return e.startsWith("url(");
}
function an(e) {
  return Number.isInteger(Number(e));
}
function vl(e) {
  return ul.test(e);
}
function It() {
  var e = H("colors"), t = H("spacing"), n = H("blur"), r = H("brightness"), o = H("borderColor"), l = H("borderRadius"), i = H("borderSpacing"), a = H("borderWidth"), s = H("contrast"), u = H("grayscale"), c = H("hueRotate"), f = H("invert"), g = H("gap"), d = H("gradientColorStops"), h = H("gradientColorStopPositions"), b = H("inset"), _ = H("margin"), v = H("opacity"), y = H("padding"), k = H("saturate"), S = H("scale"), R = H("sepia"), w = H("skew"), P = H("space"), L = H("translate"), ne = function() {
    return ["auto", "contain", "none"];
  }, re = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, I = function() {
    return ["auto", A, t];
  }, C = function() {
    return [A, t];
  }, M = function() {
    return ["", le];
  }, z = function() {
    return ["auto", be, A];
  }, N = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, B = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, V = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, q = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, U = function() {
    return ["", "0", A];
  }, ae = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, K = function() {
    return [be, We];
  }, ce = function() {
    return [be, A];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Ae],
      spacing: [le],
      blur: ["none", "", ue, A],
      brightness: K(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ue, A],
      borderSpacing: C(),
      borderWidth: M(),
      contrast: K(),
      grayscale: U(),
      hueRotate: ce(),
      invert: U(),
      gap: C(),
      gradientColorStops: [e],
      gradientColorStopPositions: [pl, St],
      inset: I(),
      margin: I(),
      opacity: K(),
      padding: C(),
      saturate: K(),
      scale: K(),
      sepia: U(),
      skew: ce(),
      space: C(),
      translate: C()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", A]
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
        columns: [ue]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ae()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ae()
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
        object: [].concat(N(), [A])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: re()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": re()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": re()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ne()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ne()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ne()
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
        z: ["auto", je]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: I()
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
        flex: ["1", "auto", "initial", "none", A]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: U()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: U()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", je]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ae]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", je]
        }, A]
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
        "grid-rows": [Ae]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [je]
        }, A]
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
        "auto-cols": ["auto", "min", "max", "fr", A]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", A]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(q())
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
        content: ["normal"].concat(q(), ["baseline"])
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
        "place-content": [].concat(q(), ["baseline"])
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
        m: [_]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [_]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [_]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [_]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [_]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [_]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [_]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [_]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [_]
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
        w: ["auto", "min", "max", "fit", A, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", A, le]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ue]
        }, ue, A]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [A, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", A, le]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [A, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ue, St]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", We]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ae]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", A]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", be, We]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", A, le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", A]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", A]
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
        "placeholder-opacity": [v]
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
        "text-opacity": [v]
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
        decoration: [].concat(B(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", le]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", A, le]
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
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", A]
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
        content: ["none", A]
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
        "bg-opacity": [v]
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
        bg: [].concat(N(), [dl])
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
        bg: ["auto", "cover", "contain", fl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, gl]
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
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(B(), ["hidden"])
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
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: B()
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
        outline: [""].concat(B())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [A, le]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [le]
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
        ring: M()
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
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [le]
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
        shadow: ["", "inner", "none", ue, hl]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ae]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": V()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": V()
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
        contrast: [s]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ue, A]
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
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [R]
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
        "backdrop-invert": [f]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [R]
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
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", A]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ce()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", A]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ce()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", A]
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
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [je, A]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [L]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [L]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [w]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [w]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", A]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", A]
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
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
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
        "will-change": ["auto", "scroll", "contents", "transform", A]
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
        stroke: [le, We]
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
function yl(e, t) {
  for (var n in t)
    er(e, n, t[n]);
  return e;
}
var _l = Object.prototype.hasOwnProperty, wl = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function er(e, t, n) {
  if (!_l.call(e, t) || wl.has(typeof n) || n === null) {
    e[t] = n;
    return;
  }
  if (Array.isArray(n) && Array.isArray(e[t])) {
    e[t] = e[t].concat(n);
    return;
  }
  if (typeof n == "object" && typeof e[t] == "object") {
    if (e[t] === null) {
      e[t] = n;
      return;
    }
    for (var r in n)
      er(e[t], r, n[r]);
  }
}
function xl(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? Ct.apply(void 0, [It, e].concat(n)) : Ct.apply(void 0, [function() {
    return yl(It(), e);
  }].concat(n));
}
var tr = /* @__PURE__ */ Ct(It);
function Se(...e) {
  return tr(Zo(e));
}
function kl(e, t) {
  const n = [];
  return t.builders.forEach((r) => {
    const o = r.action(e);
    o && n.push(o);
  }), {
    destroy: () => {
      n.forEach((r) => {
        r.destroy && r.destroy();
      });
    }
  };
}
function cn(e) {
  const t = {};
  return e.forEach((n) => {
    Object.keys(n).forEach((r) => {
      r !== "action" && (t[r] = n[r]);
    });
  }), t;
}
function Cl(e) {
  let t = (
    /*href*/
    e[0] ? "a" : "button"
  ), n, r, o = (
    /*href*/
    (e[0] ? "a" : "button") && ct(e)
  );
  return {
    c() {
      o && o.c(), n = ge();
    },
    m(l, i) {
      o && o.m(l, i), O(l, n, i), r = !0;
    },
    p(l, i) {
      /*href*/
      l[0], t ? X(
        t,
        /*href*/
        l[0] ? "a" : "button"
      ) ? (o.d(1), o = ct(l), t = /*href*/
      l[0] ? "a" : "button", o.c(), o.m(n.parentNode, n)) : o.p(l, i) : (o = ct(l), t = /*href*/
      l[0] ? "a" : "button", o.c(), o.m(n.parentNode, n));
    },
    i(l) {
      r || (j(o, l), r = !0);
    },
    o(l) {
      G(o, l), r = !1;
    },
    d(l) {
      l && E(n), o && o.d(l);
    }
  };
}
function Sl(e) {
  let t = (
    /*href*/
    e[0] ? "a" : "button"
  ), n, r, o = (
    /*href*/
    (e[0] ? "a" : "button") && ut(e)
  );
  return {
    c() {
      o && o.c(), n = ge();
    },
    m(l, i) {
      o && o.m(l, i), O(l, n, i), r = !0;
    },
    p(l, i) {
      /*href*/
      l[0], t ? X(
        t,
        /*href*/
        l[0] ? "a" : "button"
      ) ? (o.d(1), o = ut(l), t = /*href*/
      l[0] ? "a" : "button", o.c(), o.m(n.parentNode, n)) : o.p(l, i) : (o = ut(l), t = /*href*/
      l[0] ? "a" : "button", o.c(), o.m(n.parentNode, n));
    },
    i(l) {
      r || (j(o, l), r = !0);
    },
    o(l) {
      G(o, l), r = !1;
    },
    d(l) {
      l && E(n), o && o.d(l);
    }
  };
}
function ct(e) {
  let t, n, r, o, l;
  const i = (
    /*#slots*/
    e[5].default
  ), a = jt(
    i,
    e,
    /*$$scope*/
    e[4],
    null
  );
  let s = [
    {
      type: n = /*href*/
      e[0] ? void 0 : (
        /*type*/
        e[1]
      )
    },
    { href: (
      /*href*/
      e[0]
    ) },
    { tabindex: "0" },
    /*$$restProps*/
    e[3]
  ], u = {};
  for (let c = 0; c < s.length; c += 1)
    u = oe(u, s[c]);
  return {
    c() {
      t = x(
        /*href*/
        e[0] ? "a" : "button"
      ), a && a.c(), Xe(
        /*href*/
        e[0] ? "a" : "button"
      )(t, u);
    },
    m(c, f) {
      O(c, t, f), a && a.m(t, null), r = !0, o || (l = [
        Z(
          t,
          "click",
          /*click_handler_1*/
          e[12]
        ),
        Z(
          t,
          "change",
          /*change_handler_1*/
          e[13]
        ),
        Z(
          t,
          "keydown",
          /*keydown_handler_1*/
          e[14]
        ),
        Z(
          t,
          "keyup",
          /*keyup_handler_1*/
          e[15]
        ),
        Z(
          t,
          "mouseenter",
          /*mouseenter_handler_1*/
          e[16]
        ),
        Z(
          t,
          "mouseleave",
          /*mouseleave_handler_1*/
          e[17]
        )
      ], o = !0);
    },
    p(c, f) {
      a && a.p && (!r || f & /*$$scope*/
      16) && Tt(
        a,
        i,
        c,
        /*$$scope*/
        c[4],
        r ? At(
          i,
          /*$$scope*/
          c[4],
          f,
          null
        ) : Et(
          /*$$scope*/
          c[4]
        ),
        null
      ), Xe(
        /*href*/
        c[0] ? "a" : "button"
      )(t, u = Re(s, [
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
      r || (j(a, c), r = !0);
    },
    o(c) {
      G(a, c), r = !1;
    },
    d(c) {
      c && E(t), a && a.d(c), o = !1, fe(l);
    }
  };
}
function ut(e) {
  let t, n, r, o, l, i;
  const a = (
    /*#slots*/
    e[5].default
  ), s = jt(
    a,
    e,
    /*$$scope*/
    e[4],
    null
  );
  let u = [
    {
      type: n = /*href*/
      e[0] ? void 0 : (
        /*type*/
        e[1]
      )
    },
    { href: (
      /*href*/
      e[0]
    ) },
    { tabindex: "0" },
    cn(
      /*builders*/
      e[2]
    ),
    /*$$restProps*/
    e[3]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = oe(c, u[f]);
  return {
    c() {
      t = x(
        /*href*/
        e[0] ? "a" : "button"
      ), s && s.c(), Xe(
        /*href*/
        e[0] ? "a" : "button"
      )(t, c);
    },
    m(f, g) {
      O(f, t, g), s && s.m(t, null), o = !0, l || (i = [
        Z(
          t,
          "click",
          /*click_handler*/
          e[6]
        ),
        Z(
          t,
          "change",
          /*change_handler*/
          e[7]
        ),
        Z(
          t,
          "keydown",
          /*keydown_handler*/
          e[8]
        ),
        Z(
          t,
          "keyup",
          /*keyup_handler*/
          e[9]
        ),
        Z(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        Z(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[11]
        ),
        fr(r = kl.call(null, t, { builders: (
          /*builders*/
          e[2]
        ) }))
      ], l = !0);
    },
    p(f, g) {
      s && s.p && (!o || g & /*$$scope*/
      16) && Tt(
        s,
        a,
        f,
        /*$$scope*/
        f[4],
        o ? At(
          a,
          /*$$scope*/
          f[4],
          g,
          null
        ) : Et(
          /*$$scope*/
          f[4]
        ),
        null
      ), Xe(
        /*href*/
        f[0] ? "a" : "button"
      )(t, c = Re(u, [
        (!o || g & /*href, type*/
        3 && n !== (n = /*href*/
        f[0] ? void 0 : (
          /*type*/
          f[1]
        ))) && { type: n },
        (!o || g & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) },
        { tabindex: "0" },
        g & /*builders*/
        4 && cn(
          /*builders*/
          f[2]
        ),
        g & /*$$restProps*/
        8 && /*$$restProps*/
        f[3]
      ])), r && Ge(r.update) && g & /*builders*/
      4 && r.update.call(null, { builders: (
        /*builders*/
        f[2]
      ) });
    },
    i(f) {
      o || (j(s, f), o = !0);
    },
    o(f) {
      G(s, f), o = !1;
    },
    d(f) {
      f && E(t), s && s.d(f), l = !1, fe(i);
    }
  };
}
function Il(e) {
  let t, n, r, o;
  const l = [Sl, Cl], i = [];
  function a(s, u) {
    return (
      /*builders*/
      s[2] && /*builders*/
      s[2].length ? 0 : 1
    );
  }
  return t = a(e), n = i[t] = l[t](e), {
    c() {
      n.c(), r = ge();
    },
    m(s, u) {
      i[t].m(s, u), O(s, r, u), o = !0;
    },
    p(s, [u]) {
      let c = t;
      t = a(s), t === c ? i[t].p(s, u) : (ie(), G(i[c], 1, 1, () => {
        i[c] = null;
      }), se(), n = i[t], n ? n.p(s, u) : (n = i[t] = l[t](s), n.c()), j(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      o || (j(n), o = !0);
    },
    o(s) {
      G(n), o = !1;
    },
    d(s) {
      s && E(r), i[t].d(s);
    }
  };
}
function Ml(e, t, n) {
  const r = ["href", "type", "builders"];
  let o = Je(t, r), { $$slots: l = {}, $$scope: i } = t, { href: a = void 0 } = t, { type: s = void 0 } = t, { builders: u = [] } = t;
  function c(w) {
    $.call(this, e, w);
  }
  function f(w) {
    $.call(this, e, w);
  }
  function g(w) {
    $.call(this, e, w);
  }
  function d(w) {
    $.call(this, e, w);
  }
  function h(w) {
    $.call(this, e, w);
  }
  function b(w) {
    $.call(this, e, w);
  }
  function _(w) {
    $.call(this, e, w);
  }
  function v(w) {
    $.call(this, e, w);
  }
  function y(w) {
    $.call(this, e, w);
  }
  function k(w) {
    $.call(this, e, w);
  }
  function S(w) {
    $.call(this, e, w);
  }
  function R(w) {
    $.call(this, e, w);
  }
  return e.$$set = (w) => {
    t = oe(oe({}, t), Qe(w)), n(3, o = Je(t, r)), "href" in w && n(0, a = w.href), "type" in w && n(1, s = w.type), "builders" in w && n(2, u = w.builders), "$$scope" in w && n(4, i = w.$$scope);
  }, [
    a,
    s,
    u,
    o,
    i,
    l,
    c,
    f,
    g,
    d,
    h,
    b,
    _,
    v,
    y,
    k,
    S,
    R
  ];
}
let jl = class extends te {
  constructor(t) {
    super(), ee(this, t, Ml, Il, X, { href: 0, type: 1, builders: 2 });
  }
};
function Al(e) {
  let t;
  const n = (
    /*#slots*/
    e[5].default
  ), r = jt(
    n,
    e,
    /*$$scope*/
    e[8],
    null
  );
  return {
    c() {
      r && r.c();
    },
    m(o, l) {
      r && r.m(o, l), t = !0;
    },
    p(o, l) {
      r && r.p && (!t || l & /*$$scope*/
      256) && Tt(
        r,
        n,
        o,
        /*$$scope*/
        o[8],
        t ? At(
          n,
          /*$$scope*/
          o[8],
          l,
          null
        ) : Et(
          /*$$scope*/
          o[8]
        ),
        null
      );
    },
    i(o) {
      t || (j(r, o), t = !0);
    },
    o(o) {
      G(r, o), t = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Tl(e) {
  let t, n;
  const r = [
    { builders: (
      /*builders*/
      e[3]
    ) },
    {
      class: Se(gn({
        variant: (
          /*variant*/
          e[1]
        ),
        size: (
          /*size*/
          e[2]
        ),
        className: (
          /*className*/
          e[0]
        )
      }))
    },
    /*$$restProps*/
    e[4]
  ];
  let o = {
    $$slots: { default: [Al] },
    $$scope: { ctx: e }
  };
  for (let l = 0; l < r.length; l += 1)
    o = oe(o, r[l]);
  return t = new jl({ props: o }), t.$on(
    "click",
    /*click_handler*/
    e[6]
  ), t.$on(
    "keydown",
    /*keydown_handler*/
    e[7]
  ), {
    c() {
      ye(t.$$.fragment);
    },
    m(l, i) {
      pe(t, l, i), n = !0;
    },
    p(l, [i]) {
      const a = i & /*builders, cn, buttonVariants, variant, size, className, $$restProps*/
      31 ? Re(r, [
        i & /*builders*/
        8 && { builders: (
          /*builders*/
          l[3]
        ) },
        i & /*cn, buttonVariants, variant, size, className*/
        7 && {
          class: Se(gn({
            variant: (
              /*variant*/
              l[1]
            ),
            size: (
              /*size*/
              l[2]
            ),
            className: (
              /*className*/
              l[0]
            )
          }))
        },
        i & /*$$restProps*/
        16 && kr(
          /*$$restProps*/
          l[4]
        )
      ]) : {};
      i & /*$$scope*/
      256 && (a.$$scope = { dirty: i, ctx: l }), t.$set(a);
    },
    i(l) {
      n || (j(t.$$.fragment, l), n = !0);
    },
    o(l) {
      G(t.$$.fragment, l), n = !1;
    },
    d(l) {
      he(t, l);
    }
  };
}
function El(e, t, n) {
  const r = ["class", "variant", "size", "builders"];
  let o = Je(t, r), { $$slots: l = {}, $$scope: i } = t, { class: a = void 0 } = t, { variant: s = "default" } = t, { size: u = "default" } = t, { builders: c = [] } = t;
  function f(d) {
    $.call(this, e, d);
  }
  function g(d) {
    $.call(this, e, d);
  }
  return e.$$set = (d) => {
    t = oe(oe({}, t), Qe(d)), n(4, o = Je(t, r)), "class" in d && n(0, a = d.class), "variant" in d && n(1, s = d.variant), "size" in d && n(2, u = d.size), "builders" in d && n(3, c = d.builders), "$$scope" in d && n(8, i = d.$$scope);
  }, [
    a,
    s,
    u,
    c,
    o,
    l,
    f,
    g,
    i
  ];
}
class Pl extends te {
  constructor(t) {
    super(), ee(this, t, El, Tl, X, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
}
var un = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Y = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Ol = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function nr(e, t) {
  e.forEach(function(n) {
    Array.isArray(n) ? nr(n, t) : t.push(n);
  });
}
function rr(e) {
  let t = [];
  return nr(e, t), t;
}
var Ll = (...e) => rr(e).filter(Boolean), or = (e, t) => {
  let n = {}, r = Object.keys(e), o = Object.keys(t);
  for (let l of r)
    if (o.includes(l)) {
      let i = e[l], a = t[l];
      typeof i == "object" && typeof a == "object" ? n[l] = or(i, a) : n[l] = a + " " + i;
    } else
      n[l] = e[l];
  for (let l of o)
    r.includes(l) || (n[l] = t[l]);
  return n;
}, fn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), zl = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, lr = (e) => e || void 0, Ke = (...e) => lr(rr(e).filter(Boolean).join(" ")), ft = null, $e = {}, Mt = !1, Te = (...e) => (t) => t.twMerge ? ((!ft || Mt) && (Mt = !1, ft = Y($e) ? tr : xl($e)), lr(ft(Ke(e)))) : Ke(e), dn = (e, t) => {
  for (let n in t)
    e.hasOwnProperty(n) ? e[n] = Ke(e[n], t[n]) : e[n] = t[n];
  return e;
}, Nl = (e, t) => {
  let { extend: n = null, slots: r = {}, variants: o = {}, compoundVariants: l = [], compoundSlots: i = [], defaultVariants: a = {} } = e, s = { ...zl, ...t }, u = n != null && n.base ? Ke(n.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, c = n != null && n.variants && !Y(n.variants) ? or(o, n.variants) : o, f = n != null && n.defaultVariants && !Y(n.defaultVariants) ? { ...n.defaultVariants, ...a } : a;
  !Y(s.twMergeConfig) && !Ol(s.twMergeConfig, $e) && (Mt = !0, $e = s.twMergeConfig);
  let g = Y(r) ? {} : { base: e == null ? void 0 : e.base, ...r }, d = Y(n == null ? void 0 : n.slots) ? g : dn(n == null ? void 0 : n.slots, Y(g) ? { base: e == null ? void 0 : e.base } : g), h = (_) => {
    if (Y(c) && Y(r) && Y(n == null ? void 0 : n.slots))
      return Te(u, _ == null ? void 0 : _.class, _ == null ? void 0 : _.className)(s);
    if (l && !Array.isArray(l))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof l}`);
    if (i && !Array.isArray(i))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);
    let v = (I, C, M = [], z) => {
      let N = M;
      if (typeof C == "string")
        N = N.concat(fn(C).split(" ").map((B) => `${I}:${B}`));
      else if (Array.isArray(C))
        N = N.concat(C.reduce((B, V) => B.concat(`${I}:${V}`), []));
      else if (typeof C == "object" && typeof z == "string") {
        for (let B in C)
          if (C.hasOwnProperty(B) && B === z) {
            let V = C[B];
            if (V && typeof V == "string") {
              let q = fn(V);
              N[z] ? N[z] = N[z].concat(q.split(" ").map((U) => `${I}:${U}`)) : N[z] = q.split(" ").map((U) => `${I}:${U}`);
            } else
              Array.isArray(V) && V.length > 0 && (N[z] = V.reduce((q, U) => q.concat(`${I}:${U}`), []));
          }
      }
      return N;
    }, y = (I, C = c, M = null, z = null) => {
      var N;
      let B = C[I];
      if (!B || Y(B))
        return null;
      let V = (N = z == null ? void 0 : z[I]) != null ? N : _ == null ? void 0 : _[I];
      if (V === null)
        return null;
      let q = un(V), U = Array.isArray(s.responsiveVariants) && s.responsiveVariants.length > 0 || s.responsiveVariants === !0, ae = f == null ? void 0 : f[I], K = [];
      if (typeof q == "object" && U)
        for (let [Q, Ft] of Object.entries(q)) {
          let sr = B[Ft];
          if (Q === "initial") {
            ae = Ft;
            continue;
          }
          Array.isArray(s.responsiveVariants) && !s.responsiveVariants.includes(Q) || (K = v(Q, sr, K, M));
        }
      let ce = B[q] || B[un(ae)];
      return typeof K == "object" && typeof M == "string" && K[M] ? dn(K, ce) : K.length > 0 ? (K.push(ce), K) : ce;
    }, k = () => c ? Object.keys(c).map((I) => y(I, c)) : null, S = (I, C) => {
      if (!c || typeof c != "object")
        return null;
      let M = new Array();
      for (let z in c) {
        let N = y(z, c, I, C), B = I === "base" && typeof N == "string" ? N : N && N[I];
        B && (M[M.length] = B);
      }
      return M;
    }, R = {};
    for (let I in _)
      _[I] !== void 0 && (R[I] = _[I]);
    let w = (I, C) => {
      var M;
      let z = typeof (_ == null ? void 0 : _[I]) == "object" ? { [I]: (M = _[I]) == null ? void 0 : M.initial } : {};
      return { ...f, ...R, ...z, ...C };
    }, P = (I = [], C) => {
      let M = [];
      for (let { class: z, className: N, ...B } of I) {
        let V = !0;
        for (let [q, U] of Object.entries(B)) {
          let ae = w(q, C);
          if (Array.isArray(U)) {
            if (!U.includes(ae[q])) {
              V = !1;
              break;
            }
          } else if (ae[q] !== U) {
            V = !1;
            break;
          }
        }
        V && (z && M.push(z), N && M.push(N));
      }
      return M;
    }, L = (I) => {
      let C = P(l, I), M = P(n == null ? void 0 : n.compoundVariants, I);
      return Ll(M, C);
    }, ne = (I) => {
      let C = L(I);
      if (!Array.isArray(C))
        return C;
      let M = {};
      for (let z of C)
        if (typeof z == "string" && (M.base = Te(M.base, z)(s)), typeof z == "object")
          for (let [N, B] of Object.entries(z))
            M[N] = Te(M[N], B)(s);
      return M;
    }, re = (I) => {
      if (i.length < 1)
        return null;
      let C = {};
      for (let { slots: M = [], class: z, className: N, ...B } of i) {
        if (!Y(B)) {
          let V = !0;
          for (let q of Object.keys(B)) {
            let U = w(q, I)[q];
            if (U === void 0 || U !== B[q]) {
              V = !1;
              break;
            }
          }
          if (!V)
            continue;
        }
        for (let V of M)
          C[V] = C[V] || [], C[V].push([z, N]);
      }
      return C;
    };
    if (!Y(r) || !Y(n == null ? void 0 : n.slots)) {
      let I = {};
      if (typeof d == "object" && !Y(d))
        for (let C of Object.keys(d))
          I[C] = (M) => {
            var z, N;
            return Te(d[C], S(C, M), ((z = ne(M)) != null ? z : [])[C], ((N = re(M)) != null ? N : [])[C], M == null ? void 0 : M.class, M == null ? void 0 : M.className)(s);
          };
      return I;
    }
    return Te(u, k(), L(), _ == null ? void 0 : _.class, _ == null ? void 0 : _.className)(s);
  }, b = () => {
    if (!(!c || typeof c != "object"))
      return Object.keys(c);
  };
  return h.variantKeys = b(), h.extend = n, h.base = u, h.slots = d, h.variants = c, h.defaultVariants = f, h.compoundSlots = i, h.compoundVariants = l, h;
};
const gn = Nl({
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
function pn(e, t, n) {
  const r = e.slice();
  return r[3] = t[n].title, r[4] = t[n].items, r[6] = n, r;
}
function hn(e, t, n) {
  const r = e.slice();
  return r[3] = t[n].title, r[7] = t[n].icon, r[8] = t[n].url, r[10] = n, r;
}
function Gl(e) {
  let t, n, r = (
    /*title*/
    e[3] + ""
  ), o, l, i;
  return t = new rt({
    props: {
      class: "mr-2 h-4 w-4",
      icon: (
        /*icon*/
        e[7]
      )
    }
  }), {
    c() {
      ye(t.$$.fragment), n = T(), o = F(r), l = T();
    },
    m(a, s) {
      pe(t, a, s), O(a, n, s), O(a, o, s), O(a, l, s), i = !0;
    },
    p(a, s) {
      const u = {};
      s & /*menus*/
      2 && (u.icon = /*icon*/
      a[7]), t.$set(u), (!i || s & /*menus*/
      2) && r !== (r = /*title*/
      a[3] + "") && W(o, r);
    },
    i(a) {
      i || (j(t.$$.fragment, a), i = !0);
    },
    o(a) {
      G(t.$$.fragment, a), i = !1;
    },
    d(a) {
      a && (E(n), E(o), E(l)), he(t, a);
    }
  };
}
function mn(e) {
  let t, n;
  return t = new Pl({
    props: {
      variant: "secondary",
      class: "w-full justify-start",
      $$slots: { default: [Gl] },
      $$scope: { ctx: e }
    }
  }), t.$on("click", function() {
    Ge(
      /*onClick*/
      e[2](
        /*url*/
        e[8]
      )
    ) && e[2](
      /*url*/
      e[8]
    ).apply(this, arguments);
  }), {
    c() {
      ye(t.$$.fragment);
    },
    m(r, o) {
      pe(t, r, o), n = !0;
    },
    p(r, o) {
      e = r;
      const l = {};
      o & /*$$scope, menus*/
      2050 && (l.$$scope = { dirty: o, ctx: e }), t.$set(l);
    },
    i(r) {
      n || (j(t.$$.fragment, r), n = !0);
    },
    o(r) {
      G(t.$$.fragment, r), n = !1;
    },
    d(r) {
      he(t, r);
    }
  };
}
function bn(e) {
  let t, n, r = (
    /*title*/
    e[3] + ""
  ), o, l, i, a, s, u = J(
    /*items*/
    e[4]
  ), c = [];
  for (let g = 0; g < u.length; g += 1)
    c[g] = mn(hn(e, u, g));
  const f = (g) => G(c[g], 1, 1, () => {
    c[g] = null;
  });
  return {
    c() {
      t = x("div"), n = x("h2"), o = F(r), l = T(), i = x("div");
      for (let g = 0; g < c.length; g += 1)
        c[g].c();
      a = T(), m(n, "class", "mb-2 px-4 text-lg font-semibold tracking-tight svelte-cid3ab"), m(i, "class", "space-y-1 svelte-cid3ab"), m(t, "class", "px-3 py-2 svelte-cid3ab");
    },
    m(g, d) {
      O(g, t, d), p(t, n), p(n, o), p(t, l), p(t, i);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(i, null);
      p(t, a), s = !0;
    },
    p(g, d) {
      if ((!s || d & /*menus*/
      2) && r !== (r = /*title*/
      g[3] + "") && W(o, r), d & /*onClick, menus*/
      6) {
        u = J(
          /*items*/
          g[4]
        );
        let h;
        for (h = 0; h < u.length; h += 1) {
          const b = hn(g, u, h);
          c[h] ? (c[h].p(b, d), j(c[h], 1)) : (c[h] = mn(b), c[h].c(), j(c[h], 1), c[h].m(i, null));
        }
        for (ie(), h = u.length; h < c.length; h += 1)
          f(h);
        se();
      }
    },
    i(g) {
      if (!s) {
        for (let d = 0; d < u.length; d += 1)
          j(c[d]);
        s = !0;
      }
    },
    o(g) {
      c = c.filter(Boolean);
      for (let d = 0; d < c.length; d += 1)
        G(c[d]);
      s = !1;
    },
    d(g) {
      g && E(t), de(c, g);
    }
  };
}
function Bl(e) {
  let t, n, r, o, l = J(
    /*menus*/
    e[1]
  ), i = [];
  for (let s = 0; s < l.length; s += 1)
    i[s] = bn(pn(e, l, s));
  const a = (s) => G(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      t = x("div"), n = x("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      m(n, "class", "space-y-4 py-4 svelte-cid3ab"), m(t, "class", r = Ce(Se(
        "pb-12",
        /*className*/
        e[0]
      )) + " svelte-cid3ab");
    },
    m(s, u) {
      O(s, t, u), p(t, n);
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(n, null);
      o = !0;
    },
    p(s, [u]) {
      if (u & /*menus, onClick*/
      6) {
        l = J(
          /*menus*/
          s[1]
        );
        let c;
        for (c = 0; c < l.length; c += 1) {
          const f = pn(s, l, c);
          i[c] ? (i[c].p(f, u), j(i[c], 1)) : (i[c] = bn(f), i[c].c(), j(i[c], 1), i[c].m(n, null));
        }
        for (ie(), c = l.length; c < i.length; c += 1)
          a(c);
        se();
      }
      (!o || u & /*className*/
      1 && r !== (r = Ce(Se(
        "pb-12",
        /*className*/
        s[0]
      )) + " svelte-cid3ab")) && m(t, "class", r);
    },
    i(s) {
      if (!o) {
        for (let u = 0; u < l.length; u += 1)
          j(i[u]);
        o = !0;
      }
    },
    o(s) {
      i = i.filter(Boolean);
      for (let u = 0; u < i.length; u += 1)
        G(i[u]);
      o = !1;
    },
    d(s) {
      s && E(t), de(i, s);
    }
  };
}
function Rl(e, t, n) {
  let { class: r = void 0 } = t, { menus: o = [] } = t, { onClick: l = (i) => {
    console.log(i);
  } } = t;
  return e.$$set = (i) => {
    "class" in i && n(0, r = i.class), "menus" in i && n(1, o = i.menus), "onClick" in i && n(2, l = i.onClick);
  }, [r, o, l];
}
class ci extends te {
  constructor(t) {
    super(), ee(this, t, Rl, Bl, X, { class: 0, menus: 1, onClick: 2 });
  }
}
function vn(e, t, n) {
  const r = e.slice();
  return r[2] = t[n].type, r[3] = t[n].height, r[4] = t[n].width, r[5] = t[n].items, r[6] = t[n].id, r[8] = n, r;
}
function Fl(e) {
  let t, n, r, o;
  return {
    c() {
      t = x("div"), n = F("content"), m(t, "id", r = `${/*depth*/
      e[1]}${/*i*/
      e[8]}-`), m(t, "class", o = Ce(
        /*width*/
        e[4]
      ) + " svelte-119i16y");
    },
    m(l, i) {
      O(l, t, i), p(t, n);
    },
    p(l, i) {
      i & /*depth*/
      2 && r !== (r = `${/*depth*/
      l[1]}${/*i*/
      l[8]}-`) && m(t, "id", r), i & /*grids*/
      1 && o !== (o = Ce(
        /*width*/
        l[4]
      ) + " svelte-119i16y") && m(t, "class", o);
    },
    i: D,
    o: D,
    d(l) {
      l && E(t);
    }
  };
}
function Vl(e) {
  let t, n, r, o;
  return n = new ir({
    props: {
      grids: (
        /*items*/
        e[5]
      ),
      depth: `${/*depth*/
      e[1]}${/*i*/
      e[8]}-`
    }
  }), {
    c() {
      t = x("div"), ye(n.$$.fragment), r = T(), m(t, "class", "flex w-full svelte-119i16y"), Oe(
        t,
        "height",
        /*height*/
        e[3] || "200px"
      );
    },
    m(l, i) {
      O(l, t, i), pe(n, t, null), p(t, r), o = !0;
    },
    p(l, i) {
      const a = {};
      i & /*grids*/
      1 && (a.grids = /*items*/
      l[5]), i & /*depth*/
      2 && (a.depth = `${/*depth*/
      l[1]}${/*i*/
      l[8]}-`), n.$set(a), i & /*grids*/
      1 && Oe(
        t,
        "height",
        /*height*/
        l[3] || "200px"
      );
    },
    i(l) {
      o || (j(n.$$.fragment, l), o = !0);
    },
    o(l) {
      G(n.$$.fragment, l), o = !1;
    },
    d(l) {
      l && E(t), he(n);
    }
  };
}
function yn(e) {
  let t, n, r, o;
  const l = [Vl, Fl], i = [];
  function a(s, u) {
    return (
      /*type*/
      s[2] === "row" ? 0 : 1
    );
  }
  return t = a(e), n = i[t] = l[t](e), {
    c() {
      n.c(), r = ge();
    },
    m(s, u) {
      i[t].m(s, u), O(s, r, u), o = !0;
    },
    p(s, u) {
      let c = t;
      t = a(s), t === c ? i[t].p(s, u) : (ie(), G(i[c], 1, 1, () => {
        i[c] = null;
      }), se(), n = i[t], n ? n.p(s, u) : (n = i[t] = l[t](s), n.c()), j(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      o || (j(n), o = !0);
    },
    o(s) {
      G(n), o = !1;
    },
    d(s) {
      s && E(r), i[t].d(s);
    }
  };
}
function Hl(e) {
  let t, n, r = J(
    /*grids*/
    e[0]
  ), o = [];
  for (let i = 0; i < r.length; i += 1)
    o[i] = yn(vn(e, r, i));
  const l = (i) => G(o[i], 1, 1, () => {
    o[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      t = ge();
    },
    m(i, a) {
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(i, a);
      O(i, t, a), n = !0;
    },
    p(i, [a]) {
      if (a & /*grids, depth*/
      3) {
        r = J(
          /*grids*/
          i[0]
        );
        let s;
        for (s = 0; s < r.length; s += 1) {
          const u = vn(i, r, s);
          o[s] ? (o[s].p(u, a), j(o[s], 1)) : (o[s] = yn(u), o[s].c(), j(o[s], 1), o[s].m(t.parentNode, t));
        }
        for (ie(), s = r.length; s < o.length; s += 1)
          l(s);
        se();
      }
    },
    i(i) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          j(o[a]);
        n = !0;
      }
    },
    o(i) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        G(o[a]);
      n = !1;
    },
    d(i) {
      i && E(t), de(o, i);
    }
  };
}
function Wl(e, t, n) {
  let { grids: r = [] } = t, { depth: o = "" } = t;
  return e.$$set = (l) => {
    "grids" in l && n(0, r = l.grids), "depth" in l && n(1, o = l.depth);
  }, [r, o];
}
class ir extends te {
  constructor(t) {
    super(), ee(this, t, Wl, Hl, X, { grids: 0, depth: 1 });
  }
}
function _n(e, t, n) {
  const r = e.slice();
  return r[7] = t[n].type, r[8] = t[n].title, r[9] = t[n].url, r[10] = t[n].icon, r[11] = t[n].items, r;
}
function wn(e, t, n) {
  const r = e.slice();
  return r[8] = t[n].title, r[9] = t[n].url, r;
}
function Dl(e) {
  let t, n, r, o, l = (
    /*title*/
    e[8] + ""
  ), i, a, s, u, c;
  r = new rt({ props: { icon: (
    /*icon*/
    e[10]
  ) } });
  function f() {
    return (
      /*click_handler_2*/
      e[6](
        /*url*/
        e[9]
      )
    );
  }
  return {
    c() {
      t = x("li"), n = x("button"), ye(r.$$.fragment), o = x("span"), i = F(l), a = T(), m(o, "class", "ml-2 svelte-cid3ab"), m(n, "class", "btn btn-ghost drawer-button font-normal normal-case svelte-cid3ab"), m(t, "class", "nav-item svelte-cid3ab");
    },
    m(g, d) {
      O(g, t, d), p(t, n), pe(r, n, null), p(n, o), p(o, i), p(t, a), s = !0, u || (c = Z(n, "click", f), u = !0);
    },
    p(g, d) {
      e = g;
      const h = {};
      d & /*links*/
      4 && (h.icon = /*icon*/
      e[10]), r.$set(h), (!s || d & /*links*/
      4) && l !== (l = /*title*/
      e[8] + "") && W(i, l);
    },
    i(g) {
      s || (j(r.$$.fragment, g), s = !0);
    },
    o(g) {
      G(r.$$.fragment, g), s = !1;
    },
    d(g) {
      g && E(t), he(r), u = !1, c();
    }
  };
}
function ql(e) {
  let t, n, r, o = (
    /*title*/
    e[8] + ""
  ), l, i, a, s, u = J(
    /*items*/
    e[11]
  ), c = [];
  for (let f = 0; f < u.length; f += 1)
    c[f] = xn(wn(e, u, f));
  return {
    c() {
      t = x("li"), n = x("div"), r = x("label"), l = F(o), i = T(), a = x("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      s = T(), m(r, "tabindex", "1"), m(r, "class", "btn normal-case btn-ghost svelte-cid3ab"), m(a, "tabindex", "1"), m(a, "class", "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 svelte-cid3ab"), m(n, "class", "dropdown dropdown-hover dropdown-bottom dropdown-end svelte-cid3ab"), m(t, "class", "nav-item svelte-cid3ab");
    },
    m(f, g) {
      O(f, t, g), p(t, n), p(n, r), p(r, l), p(n, i), p(n, a);
      for (let d = 0; d < c.length; d += 1)
        c[d] && c[d].m(a, null);
      p(t, s);
    },
    p(f, g) {
      if (g & /*links*/
      4 && o !== (o = /*title*/
      f[8] + "") && W(l, o), g & /*onItemClick, links*/
      12) {
        u = J(
          /*items*/
          f[11]
        );
        let d;
        for (d = 0; d < u.length; d += 1) {
          const h = wn(f, u, d);
          c[d] ? c[d].p(h, g) : (c[d] = xn(h), c[d].c(), c[d].m(a, null));
        }
        for (; d < c.length; d += 1)
          c[d].d(1);
        c.length = u.length;
      }
    },
    i: D,
    o: D,
    d(f) {
      f && E(t), de(c, f);
    }
  };
}
function xn(e) {
  let t, n, r = (
    /*title*/
    e[8] + ""
  ), o, l, i, a;
  function s() {
    return (
      /*click_handler_1*/
      e[5](
        /*url*/
        e[9]
      )
    );
  }
  return {
    c() {
      t = x("li"), n = x("button"), o = F(r), l = T(), m(n, "class", "svelte-cid3ab"), m(t, "class", "svelte-cid3ab");
    },
    m(u, c) {
      O(u, t, c), p(t, n), p(n, o), p(t, l), i || (a = Z(n, "click", s), i = !0);
    },
    p(u, c) {
      e = u, c & /*links*/
      4 && r !== (r = /*title*/
      e[8] + "") && W(o, r);
    },
    d(u) {
      u && E(t), i = !1, a();
    }
  };
}
function kn(e) {
  let t, n, r, o;
  const l = [ql, Dl], i = [];
  function a(s, u) {
    return (
      /*type*/
      s[7] === "menu" ? 0 : 1
    );
  }
  return t = a(e), n = i[t] = l[t](e), {
    c() {
      n.c(), r = ge();
    },
    m(s, u) {
      i[t].m(s, u), O(s, r, u), o = !0;
    },
    p(s, u) {
      let c = t;
      t = a(s), t === c ? i[t].p(s, u) : (ie(), G(i[c], 1, 1, () => {
        i[c] = null;
      }), se(), n = i[t], n ? n.p(s, u) : (n = i[t] = l[t](s), n.c()), j(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      o || (j(n), o = !0);
    },
    o(s) {
      G(n), o = !1;
    },
    d(s) {
      s && E(r), i[t].d(s);
    }
  };
}
function Ul(e) {
  let t, n, r, o, l, i, a, s, u, c, f, g, d, h = J(
    /*links*/
    e[2]
  ), b = [];
  for (let v = 0; v < h.length; v += 1)
    b[v] = kn(_n(e, h, v));
  const _ = (v) => G(b[v], 1, 1, () => {
    b[v] = null;
  });
  return {
    c() {
      t = x("nav"), n = x("div"), r = x("div"), o = x("button"), l = F(
        /*logotxt*/
        e[0]
      ), i = T(), a = x("button"), a.innerHTML = '<i class="fas fa-bars svelte-cid3ab"></i>', s = T(), u = x("div"), c = x("ul");
      for (let v = 0; v < b.length; v += 1)
        b[v].c();
      m(o, "class", "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-slate-700 svelte-cid3ab"), m(a, "class", "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none svelte-cid3ab"), m(a, "type", "button"), m(r, "class", "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start svelte-cid3ab"), m(c, "class", "flex flex-col lg:flex-row list-none lg:ml-auto svelte-cid3ab"), m(u, "class", "lg:flex flex-grow items-center hidden svelte-cid3ab"), m(n, "class", "container px-4 mx-auto flex flex-wrap items-center justify-between svelte-cid3ab"), m(t, "class", "fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 shadow-lg svelte-cid3ab");
    },
    m(v, y) {
      O(v, t, y), p(t, n), p(n, r), p(r, o), p(o, l), p(r, i), p(r, a), p(n, s), p(n, u), p(u, c);
      for (let k = 0; k < b.length; k += 1)
        b[k] && b[k].m(c, null);
      f = !0, g || (d = Z(
        o,
        "click",
        /*click_handler*/
        e[4]
      ), g = !0);
    },
    p(v, [y]) {
      if ((!f || y & /*logotxt*/
      1) && W(
        l,
        /*logotxt*/
        v[0]
      ), y & /*links, onItemClick*/
      12) {
        h = J(
          /*links*/
          v[2]
        );
        let k;
        for (k = 0; k < h.length; k += 1) {
          const S = _n(v, h, k);
          b[k] ? (b[k].p(S, y), j(b[k], 1)) : (b[k] = kn(S), b[k].c(), j(b[k], 1), b[k].m(c, null));
        }
        for (ie(), k = h.length; k < b.length; k += 1)
          _(k);
        se();
      }
    },
    i(v) {
      if (!f) {
        for (let y = 0; y < h.length; y += 1)
          j(b[y]);
        f = !0;
      }
    },
    o(v) {
      b = b.filter(Boolean);
      for (let y = 0; y < b.length; y += 1)
        G(b[y]);
      f = !1;
    },
    d(v) {
      v && E(t), de(b, v), g = !1, d();
    }
  };
}
function Zl(e, t, n) {
  let { logotxt: r = "wwqdrh" } = t, { logourl: o = "#" } = t, { links: l = [] } = t, { onItemClick: i = (c) => {
    window.location.href = c;
  } } = t;
  const a = () => i(o), s = (c) => i(c), u = (c) => i(c);
  return e.$$set = (c) => {
    "logotxt" in c && n(0, r = c.logotxt), "logourl" in c && n(1, o = c.logourl), "links" in c && n(2, l = c.links), "onItemClick" in c && n(3, i = c.onItemClick);
  }, [
    r,
    o,
    l,
    i,
    a,
    s,
    u
  ];
}
class Ql extends te {
  constructor(t) {
    super(), ee(this, t, Zl, Ul, X, {
      logotxt: 0,
      logourl: 1,
      links: 2,
      onItemClick: 3
    });
  }
}
function Cn(e, t, n) {
  const r = e.slice();
  return r[7] = t[n], r;
}
function Sn(e) {
  let t, n = (
    /*item*/
    e[7] + ""
  ), r, o, l;
  function i() {
    return (
      /*click_handler*/
      e[6](
        /*item*/
        e[7]
      )
    );
  }
  return {
    c() {
      t = x("button"), r = F(n), m(t, "class", "get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 svelte-cid3ab");
    },
    m(a, s) {
      O(a, t, s), p(t, r), o || (l = Z(t, "click", i), o = !0);
    },
    p(a, s) {
      e = a, s & /*buttons*/
      8 && n !== (n = /*item*/
      e[7] + "") && W(r, n);
    },
    d(a) {
      a && E(t), o = !1, l();
    }
  };
}
function Jl(e) {
  let t, n, r, o, l, i, a, s, u, c, f, g, d, h, b, _ = J(
    /*buttons*/
    e[3]
  ), v = [];
  for (let y = 0; y < _.length; y += 1)
    v[y] = Sn(Cn(e, _, y));
  return {
    c() {
      t = x("section"), n = x("div"), r = x("div"), o = x("div"), l = x("h2"), i = F(
        /*title*/
        e[0]
      ), a = T(), s = x("p"), u = F(
        /*description*/
        e[1]
      ), c = T(), f = x("div");
      for (let y = 0; y < v.length; y += 1)
        v[y].c();
      g = T(), d = x("img"), m(l, "class", "font-semibold text-4xl text-slate-600 svelte-cid3ab"), m(s, "class", "mt-4 text-lg leading-relaxed text-slate-500 svelte-cid3ab"), m(f, "class", "mt-12 svelte-cid3ab"), m(o, "class", "pt-32 sm:pt-0 svelte-cid3ab"), m(r, "class", "w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 svelte-cid3ab"), m(n, "class", "container mx-auto items-center flex flex-wrap svelte-cid3ab"), m(d, "class", "absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 svelte-cid3ab"), Ze(d.src, h = /*cover*/
      e[5]) || m(d, "src", h), m(d, "alt", "..."), Oe(d, "max-height", "860px"), m(t, "class", b = Ce(Se(
        "header relative items-center flex h-screen",
        /*className*/
        e[2]
      )) + " svelte-cid3ab"), Oe(t, "max-height", "860px");
    },
    m(y, k) {
      O(y, t, k), p(t, n), p(n, r), p(r, o), p(o, l), p(l, i), p(o, a), p(o, s), p(s, u), p(o, c), p(o, f);
      for (let S = 0; S < v.length; S += 1)
        v[S] && v[S].m(f, null);
      p(t, g), p(t, d);
    },
    p(y, [k]) {
      if (k & /*title*/
      1 && W(
        i,
        /*title*/
        y[0]
      ), k & /*description*/
      2 && W(
        u,
        /*description*/
        y[1]
      ), k & /*buttonClick, buttons*/
      24) {
        _ = J(
          /*buttons*/
          y[3]
        );
        let S;
        for (S = 0; S < _.length; S += 1) {
          const R = Cn(y, _, S);
          v[S] ? v[S].p(R, k) : (v[S] = Sn(R), v[S].c(), v[S].m(f, null));
        }
        for (; S < v.length; S += 1)
          v[S].d(1);
        v.length = _.length;
      }
      k & /*cover*/
      32 && !Ze(d.src, h = /*cover*/
      y[5]) && m(d, "src", h), k & /*className*/
      4 && b !== (b = Ce(Se(
        "header relative items-center flex h-screen",
        /*className*/
        y[2]
      )) + " svelte-cid3ab") && m(t, "class", b);
    },
    i: D,
    o: D,
    d(y) {
      y && E(t), de(v, y);
    }
  };
}
function Xl(e, t, n) {
  let { title: r = "wwqdrh's ui component: uikit" } = t, { description: o = "a cross framework web component, you can visit it in wwqdrh'home" } = t, { class: l = "" } = t, { buttons: i = [] } = t, { buttonClick: a = (c) => {
    console.log(c);
  } } = t, { cover: s = "" } = t;
  const u = (c) => a(c);
  return e.$$set = (c) => {
    "title" in c && n(0, r = c.title), "description" in c && n(1, o = c.description), "class" in c && n(2, l = c.class), "buttons" in c && n(3, i = c.buttons), "buttonClick" in c && n(4, a = c.buttonClick), "cover" in c && n(5, s = c.cover);
  }, [r, o, l, i, a, s, u];
}
class Yl extends te {
  constructor(t) {
    super(), ee(this, t, Xl, Jl, X, {
      title: 0,
      description: 1,
      class: 2,
      buttons: 3,
      buttonClick: 4,
      cover: 5
    });
  }
}
function In(e, t, n) {
  const r = e.slice();
  return r[3] = t[n].icon, r[1] = t[n].title, r[2] = t[n].description, r;
}
function Mn(e) {
  let t, n, r, o, l, i = (
    /*title*/
    e[1] + ""
  ), a, s, u, c = (
    /*description*/
    e[2] + ""
  ), f, g, d;
  return r = new rt({
    props: {
      class: "w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",
      icon: (
        /*icon*/
        e[3]
      )
    }
  }), {
    c() {
      t = x("div"), n = x("div"), ye(r.$$.fragment), o = T(), l = x("h3"), a = F(i), s = T(), u = x("p"), f = F(c), g = T(), m(n, "class", "flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900 svelte-cid3ab"), m(l, "class", "mb-2 text-xl font-bold dark:text-white svelte-cid3ab"), m(u, "class", "text-gray-500 dark:text-gray-400 svelte-cid3ab"), m(t, "class", "svelte-cid3ab");
    },
    m(h, b) {
      O(h, t, b), p(t, n), pe(r, n, null), p(t, o), p(t, l), p(l, a), p(t, s), p(t, u), p(u, f), p(t, g), d = !0;
    },
    p(h, b) {
      const _ = {};
      b & /*features*/
      1 && (_.icon = /*icon*/
      h[3]), r.$set(_), (!d || b & /*features*/
      1) && i !== (i = /*title*/
      h[1] + "") && W(a, i), (!d || b & /*features*/
      1) && c !== (c = /*description*/
      h[2] + "") && W(f, c);
    },
    i(h) {
      d || (j(r.$$.fragment, h), d = !0);
    },
    o(h) {
      G(r.$$.fragment, h), d = !1;
    },
    d(h) {
      h && E(t), he(r);
    }
  };
}
function Kl(e) {
  let t, n, r, o, l, i, a, s, u, c, f, g = J(
    /*features*/
    e[0]
  ), d = [];
  for (let b = 0; b < g.length; b += 1)
    d[b] = Mn(In(e, g, b));
  const h = (b) => G(d[b], 1, 1, () => {
    d[b] = null;
  });
  return {
    c() {
      t = x("section"), n = x("div"), r = x("div"), o = x("h2"), l = F(
        /*title*/
        e[1]
      ), i = T(), a = x("p"), s = F(
        /*description*/
        e[2]
      ), u = T(), c = x("div");
      for (let b = 0; b < d.length; b += 1)
        d[b].c();
      m(o, "class", "mb-4 text-4xl font-extrabold text-gray-900 dark:text-white svelte-cid3ab"), m(a, "class", "text-gray-500 sm:text-xl dark:text-gray-400 svelte-cid3ab"), m(r, "class", "mb-8 max-w-screen-md lg:mb-16 svelte-cid3ab"), m(c, "class", "space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 svelte-cid3ab"), m(n, "class", "py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 svelte-cid3ab"), m(t, "class", "bg-gray-50 dark:bg-gray-800 svelte-cid3ab");
    },
    m(b, _) {
      O(b, t, _), p(t, n), p(n, r), p(r, o), p(o, l), p(r, i), p(r, a), p(a, s), p(n, u), p(n, c);
      for (let v = 0; v < d.length; v += 1)
        d[v] && d[v].m(c, null);
      f = !0;
    },
    p(b, [_]) {
      if ((!f || _ & /*title*/
      2) && W(
        l,
        /*title*/
        b[1]
      ), (!f || _ & /*description*/
      4) && W(
        s,
        /*description*/
        b[2]
      ), _ & /*features*/
      1) {
        g = J(
          /*features*/
          b[0]
        );
        let v;
        for (v = 0; v < g.length; v += 1) {
          const y = In(b, g, v);
          d[v] ? (d[v].p(y, _), j(d[v], 1)) : (d[v] = Mn(y), d[v].c(), j(d[v], 1), d[v].m(c, null));
        }
        for (ie(), v = g.length; v < d.length; v += 1)
          h(v);
        se();
      }
    },
    i(b) {
      if (!f) {
        for (let _ = 0; _ < g.length; _ += 1)
          j(d[_]);
        f = !0;
      }
    },
    o(b) {
      d = d.filter(Boolean);
      for (let _ = 0; _ < d.length; _ += 1)
        G(d[_]);
      f = !1;
    },
    d(b) {
      b && E(t), de(d, b);
    }
  };
}
function $l(e, t, n) {
  let { title: r = "" } = t, { description: o = "" } = t, { features: l = [] } = t;
  return e.$$set = (i) => {
    "title" in i && n(1, r = i.title), "description" in i && n(2, o = i.description), "features" in i && n(0, l = i.features);
  }, [l, r, o];
}
class ei extends te {
  constructor(t) {
    super(), ee(this, t, $l, Kl, X, { title: 1, description: 2, features: 0 });
  }
}
function jn(e, t, n) {
  const r = e.slice();
  return r[4] = t[n].icon, r[3] = t[n].description, r;
}
function An(e) {
  let t, n, r, o, l, i, a, s, u = (
    /*description*/
    e[3] + ""
  ), c, f, g;
  return l = new rt({ props: { icon: (
    /*icon*/
    e[4]
  ) } }), {
    c() {
      t = x("li"), n = x("div"), r = x("div"), o = x("span"), ye(l.$$.fragment), i = T(), a = x("div"), s = x("h4"), c = F(u), f = T(), m(o, "class", "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3 svelte-cid3ab"), m(r, "class", "svelte-cid3ab"), m(s, "class", "text-slate-500 svelte-cid3ab"), m(a, "class", "svelte-cid3ab"), m(n, "class", "flex items-center svelte-cid3ab"), m(t, "class", "py-2 svelte-cid3ab");
    },
    m(d, h) {
      O(d, t, h), p(t, n), p(n, r), p(r, o), pe(l, o, null), p(n, i), p(n, a), p(a, s), p(s, c), p(t, f), g = !0;
    },
    p(d, h) {
      const b = {};
      h & /*sections*/
      4 && (b.icon = /*icon*/
      d[4]), l.$set(b), (!g || h & /*sections*/
      4) && u !== (u = /*description*/
      d[3] + "") && W(c, u);
    },
    i(d) {
      g || (j(l.$$.fragment, d), g = !0);
    },
    o(d) {
      G(l.$$.fragment, d), g = !1;
    },
    d(d) {
      d && E(t), he(l);
    }
  };
}
function ti(e) {
  let t, n, r, o, l, i, a, s, u, c, f, g, d, h, b, _, v, y, k = J(
    /*sections*/
    e[2]
  ), S = [];
  for (let w = 0; w < k.length; w += 1)
    S[w] = An(jn(e, k, w));
  const R = (w) => G(S[w], 1, 1, () => {
    S[w] = null;
  });
  return {
    c() {
      t = x("div"), n = x("div"), r = x("div"), o = x("div"), l = x("div"), l.innerHTML = '<i class="fas fa-file-alt text-xl svelte-cid3ab"></i>', i = T(), a = x("h3"), s = F(
        /*title*/
        e[1]
      ), u = T(), c = x("p"), f = F(
        /*description*/
        e[3]
      ), g = T(), d = x("ul");
      for (let w = 0; w < S.length; w += 1)
        S[w].c();
      h = T(), b = x("div"), _ = x("img"), m(l, "class", "text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white svelte-cid3ab"), m(a, "class", "text-3xl font-semibold svelte-cid3ab"), m(c, "class", "mt-4 text-lg leading-relaxed text-slate-500 svelte-cid3ab"), m(d, "class", "list-none mt-6 svelte-cid3ab"), m(o, "class", "md:pr-12 svelte-cid3ab"), m(r, "class", "w-full md:w-5/12 ml-auto px-12 md:px-4 svelte-cid3ab"), m(_, "alt", "..."), m(_, "class", "max-w-full rounded-lg shadow-xl svelte-cid3ab"), Oe(_, "transform", "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"), Ze(_.src, v = /*cover*/
      e[0]) || m(_, "src", v), m(b, "class", "w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0 svelte-cid3ab"), m(n, "class", "items-center flex flex-wrap svelte-cid3ab"), m(t, "class", "container mx-auto px-4 pb-32 pt-48 svelte-cid3ab");
    },
    m(w, P) {
      O(w, t, P), p(t, n), p(n, r), p(r, o), p(o, l), p(o, i), p(o, a), p(a, s), p(o, u), p(o, c), p(c, f), p(o, g), p(o, d);
      for (let L = 0; L < S.length; L += 1)
        S[L] && S[L].m(d, null);
      p(n, h), p(n, b), p(b, _), y = !0;
    },
    p(w, [P]) {
      if ((!y || P & /*title*/
      2) && W(
        s,
        /*title*/
        w[1]
      ), (!y || P & /*description*/
      8) && W(
        f,
        /*description*/
        w[3]
      ), P & /*sections*/
      4) {
        k = J(
          /*sections*/
          w[2]
        );
        let L;
        for (L = 0; L < k.length; L += 1) {
          const ne = jn(w, k, L);
          S[L] ? (S[L].p(ne, P), j(S[L], 1)) : (S[L] = An(ne), S[L].c(), j(S[L], 1), S[L].m(d, null));
        }
        for (ie(), L = k.length; L < S.length; L += 1)
          R(L);
        se();
      }
      (!y || P & /*cover*/
      1 && !Ze(_.src, v = /*cover*/
      w[0])) && m(_, "src", v);
    },
    i(w) {
      if (!y) {
        for (let P = 0; P < k.length; P += 1)
          j(S[P]);
        y = !0;
      }
    },
    o(w) {
      S = S.filter(Boolean);
      for (let P = 0; P < S.length; P += 1)
        G(S[P]);
      y = !1;
    },
    d(w) {
      w && E(t), de(S, w);
    }
  };
}
function ni(e, t, n) {
  let { cover: r = "" } = t, { title: o = "" } = t, { description: l = "" } = t, { sections: i = [] } = t;
  return e.$$set = (a) => {
    "cover" in a && n(0, r = a.cover), "title" in a && n(1, o = a.title), "description" in a && n(3, l = a.description), "sections" in a && n(2, i = a.sections);
  }, [r, o, i, l];
}
class ri extends te {
  constructor(t) {
    super(), ee(this, t, ni, ti, X, {
      cover: 0,
      title: 1,
      description: 3,
      sections: 2
    });
  }
}
const ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Yl,
  Feature: ei,
  Grid: ir,
  Header: Ql,
  ProjectDescription: ri
}, Symbol.toStringTag, { value: "Module" }));
export {
  ui as Layout,
  ci as Sidebar,
  si as confirm,
  ii as notify
};
