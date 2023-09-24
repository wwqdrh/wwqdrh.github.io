var sr = Object.defineProperty;
var ar = (e, t, n) => t in e ? sr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var nt = (e, t, n) => (ar(e, typeof t != "symbol" ? t + "" : t, n), n);
function W() {
}
function oe(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function An(e) {
  return e();
}
function Ft() {
  return /* @__PURE__ */ Object.create(null);
}
function ce(e) {
  e.forEach(An);
}
function Ne(e) {
  return typeof e == "function";
}
function X(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let Re;
function Ue(e, t) {
  return e === t ? !0 : (Re || (Re = document.createElement("a")), Re.href = t, e === Re.href);
}
function cr(e) {
  return Object.keys(e).length === 0;
}
function It(e, t, n, r) {
  if (e) {
    const o = Tn(e, t, n, r);
    return e[0](o);
  }
}
function Tn(e, t, n, r) {
  return e[1] && r ? oe(n.ctx.slice(), e[1](r(t))) : n.ctx;
}
function Mt(e, t, n, r) {
  if (e[2] && r) {
    const o = e[2](r(n));
    if (t.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const i = [], l = Math.max(t.dirty.length, o.length);
      for (let a = 0; a < l; a += 1)
        i[a] = t.dirty[a] | o[a];
      return i;
    }
    return t.dirty | o;
  }
  return t.dirty;
}
function jt(e, t, n, r, o, i) {
  if (o) {
    const l = Tn(t, n, r, i);
    e.p(l, o);
  }
}
function At(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let r = 0; r < n; r++)
      t[r] = -1;
    return t;
  }
  return -1;
}
function Ze(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function Qe(e, t) {
  const n = {};
  t = new Set(t);
  for (const r in e)
    !t.has(r) && r[0] !== "$" && (n[r] = e[r]);
  return n;
}
function Vt(e) {
  return e ?? "";
}
function ur(e) {
  return e && Ne(e.destroy) ? e.destroy : W;
}
function p(e, t) {
  e.appendChild(t);
}
function z(e, t, n) {
  e.insertBefore(t, n || null);
}
function T(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function me(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function w(e) {
  return document.createElement(e);
}
function fr(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function H(e) {
  return document.createTextNode(e);
}
function N() {
  return H(" ");
}
function ue() {
  return H("");
}
function Z(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function v(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const dr = ["width", "height"];
function ut(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const r in t)
    t[r] == null ? e.removeAttribute(r) : r === "style" ? e.style.cssText = t[r] : r === "__value" ? e.value = e[r] = t[r] : n[r] && n[r].set && dr.indexOf(r) === -1 ? e[r] = t[r] : v(e, r, t[r]);
}
function Ht(e, t) {
  for (const n in t)
    v(e, n, t[n]);
}
function gr(e, t) {
  Object.keys(t).forEach((n) => {
    pr(e, n, t[n]);
  });
}
function pr(e, t, n) {
  t in e ? e[t] = typeof e[t] == "boolean" && n === "" ? !0 : n : v(e, t, n);
}
function Je(e) {
  return /-/.test(e) ? gr : ut;
}
function hr(e) {
  return Array.from(e.childNodes);
}
function U(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Pe(e, t, n, r) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "");
}
function mr(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
let Oe;
function Te(e) {
  Oe = e;
}
function Tt() {
  if (!Oe)
    throw new Error("Function called outside component initialization");
  return Oe;
}
function Ge(e) {
  Tt().$$.on_mount.push(e);
}
function br(e) {
  Tt().$$.on_destroy.push(e);
}
function Ce() {
  const e = Tt();
  return (t, n, { cancelable: r = !1 } = {}) => {
    const o = e.$$.callbacks[t];
    if (o) {
      const i = mr(
        /** @type {string} */
        t,
        n,
        { cancelable: r }
      );
      return o.slice().forEach((l) => {
        l.call(e, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function K(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((r) => r.call(this, t));
}
const _e = [], ft = [];
let xe = [];
const Wt = [], vr = /* @__PURE__ */ Promise.resolve();
let dt = !1;
function yr() {
  dt || (dt = !0, vr.then(En));
}
function gt(e) {
  xe.push(e);
}
const rt = /* @__PURE__ */ new Set();
let we = 0;
function En() {
  if (we !== 0)
    return;
  const e = Oe;
  do {
    try {
      for (; we < _e.length; ) {
        const t = _e[we];
        we++, Te(t), wr(t.$$);
      }
    } catch (t) {
      throw _e.length = 0, we = 0, t;
    }
    for (Te(null), _e.length = 0, we = 0; ft.length; )
      ft.pop()();
    for (let t = 0; t < xe.length; t += 1) {
      const n = xe[t];
      rt.has(n) || (rt.add(n), n());
    }
    xe.length = 0;
  } while (_e.length);
  for (; Wt.length; )
    Wt.pop()();
  dt = !1, rt.clear(), Te(e);
}
function wr(e) {
  if (e.fragment !== null) {
    e.update(), ce(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(gt);
  }
}
function _r(e) {
  const t = [], n = [];
  xe.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), xe = t;
}
const We = /* @__PURE__ */ new Set();
let ge;
function fe() {
  ge = {
    r: 0,
    c: [],
    p: ge
    // parent group
  };
}
function de() {
  ge.r || ce(ge.c), ge = ge.p;
}
function E(e, t) {
  e && e.i && (We.delete(e), e.i(t));
}
function R(e, t, n, r) {
  if (e && e.o) {
    if (We.has(e))
      return;
    We.add(e), ge.c.push(() => {
      We.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
function $(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Be(e, t) {
  const n = {}, r = {}, o = { $$scope: 1 };
  let i = e.length;
  for (; i--; ) {
    const l = e[i], a = t[i];
    if (a) {
      for (const s in l)
        s in a || (r[s] = 1);
      for (const s in a)
        o[s] || (n[s] = a[s], o[s] = 1);
      e[i] = a;
    } else
      for (const s in l)
        o[s] = 1;
  }
  for (const l in r)
    l in n || (n[l] = void 0);
  return n;
}
function xr(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function Se(e) {
  e && e.c();
}
function be(e, t, n) {
  const { fragment: r, after_update: o } = e.$$;
  r && r.m(t, n), gt(() => {
    const i = e.$$.on_mount.map(An).filter(Ne);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : ce(i), e.$$.on_mount = [];
  }), o.forEach(gt);
}
function ve(e, t) {
  const n = e.$$;
  n.fragment !== null && (_r(n.after_update), ce(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function kr(e, t) {
  e.$$.dirty[0] === -1 && (_e.push(e), yr(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ne(e, t, n, r, o, i, l, a = [-1]) {
  const s = Oe;
  Te(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: W,
    not_equal: o,
    bound: Ft(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Ft(),
    dirty: a,
    skip_bound: !1,
    root: t.target || s.$$.root
  };
  l && l(u.root);
  let c = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, d, ...g) => {
    const b = g.length ? g[0] : d;
    return u.ctx && o(u.ctx[f], u.ctx[f] = b) && (!u.skip_bound && u.bound[f] && u.bound[f](b), c && kr(e, f)), d;
  }) : [], u.update(), c = !0, ce(u.before_update), u.fragment = r ? r(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = hr(t.target);
      u.fragment && u.fragment.l(f), f.forEach(T);
    } else
      u.fragment && u.fragment.c();
    t.intro && E(e.$$.fragment), be(e, t.target, t.anchor), En();
  }
  Te(s);
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
    nt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    nt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ve(this, 1), this.$destroy = W;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!Ne(n))
      return W;
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
    this.$$set && !cr(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Cr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Cr);
function Sr(e) {
  let t, n, r, o, i, l, a, s, u;
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>', r = N(), o = w("div"), i = w("div"), l = w("span"), l.textContent = "Success", a = N(), s = w("p"), u = H(
        /*msg*/
        e[0]
      ), v(n, "class", "flex items-center justify-center w-12 bg-emerald-500"), v(l, "class", "font-semibold text-emerald-500 dark:text-emerald-400"), v(s, "class", "text-sm text-gray-600 dark:text-gray-200"), v(i, "class", "mx-3"), v(o, "class", "px-4 py-2 -mx-3"), v(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(c, f) {
      z(c, t, f), p(t, n), p(t, r), p(t, o), p(o, i), p(i, l), p(i, a), p(i, s), p(s, u);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && U(
        u,
        /*msg*/
        c[0]
      );
    },
    i: W,
    o: W,
    d(c) {
      c && T(t);
    }
  };
}
function Ir(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const i = Ce();
  return Ge(() => {
    setTimeout(
      () => {
        i("onEnd");
      },
      o
    );
  }), e.$$set = (l) => {
    "msg" in l && n(0, r = l.msg), "duration" in l && n(1, o = l.duration);
  }, [r, o];
}
class Mr extends re {
  constructor(t) {
    super(), ne(this, t, Ir, Sr, X, { msg: 0, duration: 1 });
  }
}
function jr(e) {
  let t, n, r, o, i, l, a, s, u;
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', r = N(), o = w("div"), i = w("div"), l = w("span"), l.textContent = "Info", a = N(), s = w("p"), u = H(
        /*msg*/
        e[0]
      ), v(n, "class", "flex items-center justify-center w-12 bg-blue-500"), v(l, "class", "font-semibold text-blue-500 dark:text-blue-400"), v(s, "class", "text-sm text-gray-600 dark:text-gray-200"), v(i, "class", "mx-3"), v(o, "class", "px-4 py-2 -mx-3"), v(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(c, f) {
      z(c, t, f), p(t, n), p(t, r), p(t, o), p(o, i), p(i, l), p(i, a), p(i, s), p(s, u);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && U(
        u,
        /*msg*/
        c[0]
      );
    },
    i: W,
    o: W,
    d(c) {
      c && T(t);
    }
  };
}
function Ar(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const i = Ce();
  return Ge(() => {
    setTimeout(
      () => {
        i("onEnd");
      },
      o
    );
  }), e.$$set = (l) => {
    "msg" in l && n(0, r = l.msg), "duration" in l && n(1, o = l.duration);
  }, [r, o];
}
class qt extends re {
  constructor(t) {
    super(), ne(this, t, Ar, jr, X, { msg: 0, duration: 1 });
  }
}
function Tr(e) {
  let t, n, r, o, i, l, a, s, u;
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', r = N(), o = w("div"), i = w("div"), l = w("span"), l.textContent = "Warning", a = N(), s = w("p"), u = H(
        /*msg*/
        e[0]
      ), v(n, "class", "flex items-center justify-center w-12 bg-yellow-400"), v(l, "class", "font-semibold text-yellow-400 dark:text-yellow-300"), v(s, "class", "text-sm text-gray-600 dark:text-gray-200"), v(i, "class", "mx-3"), v(o, "class", "px-4 py-2 -mx-3"), v(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(c, f) {
      z(c, t, f), p(t, n), p(t, r), p(t, o), p(o, i), p(i, l), p(i, a), p(i, s), p(s, u);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && U(
        u,
        /*msg*/
        c[0]
      );
    },
    i: W,
    o: W,
    d(c) {
      c && T(t);
    }
  };
}
function Er(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const i = Ce();
  return Ge(() => {
    setTimeout(
      () => {
        i("onEnd");
      },
      o
    );
  }), e.$$set = (l) => {
    "msg" in l && n(0, r = l.msg), "duration" in l && n(1, o = l.duration);
  }, [r, o];
}
class Pr extends re {
  constructor(t) {
    super(), ne(this, t, Er, Tr, X, { msg: 0, duration: 1 });
  }
}
function Or(e) {
  let t, n, r, o, i, l, a, s, u;
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>', r = N(), o = w("div"), i = w("div"), l = w("span"), l.textContent = "Error", a = N(), s = w("p"), u = H(
        /*msg*/
        e[0]
      ), v(n, "class", "flex items-center justify-center w-12 bg-red-500"), v(l, "class", "font-semibold text-red-500 dark:text-red-400"), v(s, "class", "text-sm text-gray-600 dark:text-gray-200"), v(i, "class", "mx-3"), v(o, "class", "px-4 py-2 -mx-3"), v(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(c, f) {
      z(c, t, f), p(t, n), p(t, r), p(t, o), p(o, i), p(i, l), p(i, a), p(i, s), p(s, u);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && U(
        u,
        /*msg*/
        c[0]
      );
    },
    i: W,
    o: W,
    d(c) {
      c && T(t);
    }
  };
}
function Lr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const i = Ce();
  return Ge(() => {
    setTimeout(
      () => {
        i("onEnd");
      },
      o
    );
  }), e.$$set = (l) => {
    "msg" in l && n(0, r = l.msg), "duration" in l && n(1, o = l.duration);
  }, [r, o];
}
let zr = class extends re {
  constructor(t) {
    super(), ne(this, t, Lr, Or, X, { msg: 0, duration: 1 });
  }
};
const Dt = "uikit_msg_panel";
let ot = 0;
const tl = (e) => {
  ot += 1;
  let t = window.document.getElementById(Dt);
  t || (t = window.document.createElement("div"), t.id = Dt, t.style.position = "absolute", t.style.top = "5px", t.style.right = "5px", t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "10px", t.style.zIndex = "100", document.body.appendChild(t));
  const n = window.document.createElement("div");
  t.appendChild(n);
  let r;
  switch (e.type) {
    case "success":
      r = new Mr({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "info":
      r = new qt({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "warn":
      r = new Pr({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "error":
      r = new zr({
        target: n,
        props: {
          ...e
        }
      });
      break;
    default:
      r = new qt({
        target: n,
        props: {
          ...e
        }
      });
      break;
  }
  return r.$on("onEnd", () => {
    r.$destroy(), ot -= 1, ot == 0 && document.body.removeChild(t);
  }), r;
}, Fe = (e) => Object.entries(e).map(([t, n]) => `${t}: ${n};`).join(" ");
function Nr(e) {
  let t, n, r, o, i, l, a, s, u, c, f, d, g, b, x, y, _, h, k, S;
  return {
    c() {
      t = w("div"), n = w("div"), r = w("div"), o = w("div"), i = H(
        /*title*/
        e[0]
      ), l = N(), a = w("div"), s = w("div"), u = H(
        /*content*/
        e[1]
      ), c = N(), f = w("div"), d = w("div"), g = H(
        /*cancelText*/
        e[2]
      ), x = N(), y = w("div"), _ = H(
        /*okText*/
        e[3]
      ), v(o, "class", "modal-title svelte-f901x2"), v(a, "class", "content svelte-f901x2"), v(r, "class", "modal-content-body svelte-f901x2"), v(d, "class", "btn button-left centerLayout svelte-f901x2"), v(d, "style", b = Fe(
        /*cancelBtnStyle*/
        e[4]
      )), v(y, "class", "btn button-right centerLayout svelte-f901x2"), v(y, "style", h = Fe(
        /*okBtnStyle*/
        e[5]
      )), v(f, "class", "confirm-button-wrap svelte-f901x2"), v(n, "class", "confirm-modal-content svelte-f901x2"), v(t, "class", "confirm-modal svelte-f901x2");
    },
    m(B, m) {
      z(B, t, m), p(t, n), p(n, r), p(r, o), p(o, i), p(r, l), p(r, a), p(a, s), p(s, u), p(n, c), p(n, f), p(f, d), p(d, g), p(f, x), p(f, y), p(y, _), e[11](t), k || (S = [
        Z(
          d,
          "click",
          /*onCancelClk*/
          e[8]
        ),
        Z(
          y,
          "click",
          /*onOkClk*/
          e[7]
        )
      ], k = !0);
    },
    p(B, [m]) {
      m & /*title*/
      1 && U(
        i,
        /*title*/
        B[0]
      ), m & /*content*/
      2 && U(
        u,
        /*content*/
        B[1]
      ), m & /*cancelText*/
      4 && U(
        g,
        /*cancelText*/
        B[2]
      ), m & /*cancelBtnStyle*/
      16 && b !== (b = Fe(
        /*cancelBtnStyle*/
        B[4]
      )) && v(d, "style", b), m & /*okText*/
      8 && U(
        _,
        /*okText*/
        B[3]
      ), m & /*okBtnStyle*/
      32 && h !== (h = Fe(
        /*okBtnStyle*/
        B[5]
      )) && v(y, "style", h);
    },
    i: W,
    o: W,
    d(B) {
      B && T(t), e[11](null), k = !1, ce(S);
    }
  };
}
function Gr(e, t, n) {
  let { title: r = "" } = t, { content: o = "" } = t, { cancelText: i = "取消" } = t, { okText: l = "确定" } = t, { onCancel: a = () => {
  } } = t, { onOk: s = () => {
  } } = t, { cancelBtnStyle: u = "" } = t, { okBtnStyle: c = "" } = t;
  const f = Ce();
  let d;
  const g = () => {
    s(), f("onOk");
  }, b = () => {
    a(), f("onCancel");
  };
  function x(y) {
    ft[y ? "unshift" : "push"](() => {
      d = y, n(6, d);
    });
  }
  return e.$$set = (y) => {
    "title" in y && n(0, r = y.title), "content" in y && n(1, o = y.content), "cancelText" in y && n(2, i = y.cancelText), "okText" in y && n(3, l = y.okText), "onCancel" in y && n(9, a = y.onCancel), "onOk" in y && n(10, s = y.onOk), "cancelBtnStyle" in y && n(4, u = y.cancelBtnStyle), "okBtnStyle" in y && n(5, c = y.okBtnStyle);
  }, [
    r,
    o,
    i,
    l,
    u,
    c,
    d,
    g,
    b,
    a,
    s,
    x
  ];
}
class Br extends re {
  constructor(t) {
    super(), ne(this, t, Gr, Nr, X, {
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
const nl = (e) => {
  const t = window.document.createElement("div");
  document.body.appendChild(t);
  const n = new Br({
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
}, Ee = /^[a-z0-9]+(-[a-z0-9]+)*$/, $e = (e, t, n, r = "") => {
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
  const i = o[0], l = i.split("-");
  if (l.length > 1) {
    const a = {
      provider: r,
      prefix: l.shift(),
      name: l.join("-")
    };
    return t && !qe(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: i
    };
    return t && !qe(a, n) ? null : a;
  }
  return null;
}, qe = (e, t) => e ? !!((e.provider === "" || e.provider.match(Ee)) && (t && e.prefix === "" || e.prefix.match(Ee)) && e.name.match(Ee)) : !1, Pn = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Xe = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), et = Object.freeze({
  ...Pn,
  ...Xe
}), pt = Object.freeze({
  ...et,
  body: "",
  hidden: !1
});
function Rr(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Ut(e, t) {
  const n = Rr(e, t);
  for (const r in pt)
    r in Xe ? r in e && !(r in n) && (n[r] = Xe[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function Fr(e, t) {
  const n = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function i(l) {
    if (n[l])
      return o[l] = [];
    if (!(l in o)) {
      o[l] = null;
      const a = r[l] && r[l].parent, s = a && i(a);
      s && (o[l] = [a].concat(s));
    }
    return o[l];
  }
  return (t || Object.keys(n).concat(Object.keys(r))).forEach(i), o;
}
function Vr(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function l(a) {
    i = Ut(
      r[a] || o[a],
      i
    );
  }
  return l(t), n.forEach(l), Ut(e, i);
}
function On(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = Fr(e);
  for (const o in r) {
    const i = r[o];
    i && (t(o, Vr(e, o, i)), n.push(o));
  }
  return n;
}
const Hr = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Pn
};
function it(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function Ln(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !it(e, Hr))
    return null;
  const n = t.icons;
  for (const o in n) {
    const i = n[o];
    if (!o.match(Ee) || typeof i.body != "string" || !it(
      i,
      pt
    ))
      return null;
  }
  const r = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in r) {
    const i = r[o], l = i.parent;
    if (!o.match(Ee) || typeof l != "string" || !n[l] && !r[l] || !it(
      i,
      pt
    ))
      return null;
  }
  return t;
}
const Zt = /* @__PURE__ */ Object.create(null);
function Wr(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function he(e, t) {
  const n = Zt[e] || (Zt[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = Wr(e, t));
}
function Et(e, t) {
  return Ln(t) ? On(t, (n, r) => {
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
let Le = !1;
function zn(e) {
  return typeof e == "boolean" && (Le = e), Le;
}
function Dr(e) {
  const t = typeof e == "string" ? $e(e, !0, Le) : e;
  if (t) {
    const n = he(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Ur(e, t) {
  const n = $e(e, !0, Le);
  if (!n)
    return !1;
  const r = he(n.provider, n.prefix);
  return qr(r, n.name, t);
}
function Zr(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Le && !t && !e.prefix) {
    let o = !1;
    return Ln(e) && (e.prefix = "", On(e, (i, l) => {
      l && Ur(i, l) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!qe({
    provider: t,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = he(t, n);
  return !!Et(r, e);
}
const Nn = Object.freeze({
  width: null,
  height: null
}), Gn = Object.freeze({
  // Dimensions
  ...Nn,
  // Transformations
  ...Xe
}), Qr = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Jr = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Qt(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(Qr);
  if (r === null || !r.length)
    return e;
  const o = [];
  let i = r.shift(), l = Jr.test(i);
  for (; ; ) {
    if (l) {
      const a = parseFloat(i);
      isNaN(a) ? o.push(i) : o.push(Math.ceil(a * t * n) / n);
    } else
      o.push(i);
    if (i = r.shift(), i === void 0)
      return o.join("");
    l = !l;
  }
}
const Xr = (e) => e === "unset" || e === "undefined" || e === "none";
function Yr(e, t) {
  const n = {
    ...et,
    ...e
  }, r = {
    ...Gn,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
  [n, r].forEach((b) => {
    const x = [], y = b.hFlip, _ = b.vFlip;
    let h = b.rotate;
    y ? _ ? h += 2 : (x.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), x.push("scale(-1 1)"), o.top = o.left = 0) : _ && (x.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), x.push("scale(1 -1)"), o.top = o.left = 0);
    let k;
    switch (h < 0 && (h -= Math.floor(h / 4) * 4), h = h % 4, h) {
      case 1:
        k = o.height / 2 + o.top, x.unshift(
          "rotate(90 " + k.toString() + " " + k.toString() + ")"
        );
        break;
      case 2:
        x.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        k = o.width / 2 + o.left, x.unshift(
          "rotate(-90 " + k.toString() + " " + k.toString() + ")"
        );
        break;
    }
    h % 2 === 1 && (o.left !== o.top && (k = o.left, o.left = o.top, o.top = k), o.width !== o.height && (k = o.width, o.width = o.height, o.height = k)), x.length && (i = '<g transform="' + x.join(" ") + '">' + i + "</g>");
  });
  const l = r.width, a = r.height, s = o.width, u = o.height;
  let c, f;
  l === null ? (f = a === null ? "1em" : a === "auto" ? u : a, c = Qt(f, s / u)) : (c = l === "auto" ? s : l, f = a === null ? Qt(c, u / s) : a === "auto" ? u : a);
  const d = {}, g = (b, x) => {
    Xr(x) || (d[b] = x.toString());
  };
  return g("width", c), g("height", f), d.viewBox = o.left.toString() + " " + o.top.toString() + " " + s.toString() + " " + u.toString(), {
    attributes: d,
    body: i
  };
}
const Kr = /\sid="(\S+)"/g, $r = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let eo = 0;
function to(e, t = $r) {
  const n = [];
  let r;
  for (; r = Kr.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const l = typeof t == "function" ? t(i) : t + (eo++).toString(), a = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + l + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const ht = /* @__PURE__ */ Object.create(null);
function no(e, t) {
  ht[e] = t;
}
function mt(e) {
  return ht[e] || ht[""];
}
function Pt(e) {
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
const Ot = /* @__PURE__ */ Object.create(null), Ie = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], De = [];
for (; Ie.length > 0; )
  Ie.length === 1 || Math.random() > 0.5 ? De.push(Ie.shift()) : De.push(Ie.pop());
Ot[""] = Pt({
  resources: ["https://api.iconify.design"].concat(De)
});
function ro(e, t) {
  const n = Pt(t);
  return n === null ? !1 : (Ot[e] = n, !0);
}
function Lt(e) {
  return Ot[e];
}
const oo = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Jt = oo();
function io(e, t) {
  const n = Lt(e);
  if (!n)
    return 0;
  let r;
  if (!n.maxURL)
    r = 0;
  else {
    let o = 0;
    n.resources.forEach((l) => {
      o = Math.max(o, l.length);
    });
    const i = t + ".json?icons=";
    r = n.maxURL - o - n.path.length - i.length;
  }
  return r;
}
function lo(e) {
  return e === 404;
}
const so = (e, t, n) => {
  const r = [], o = io(e, t), i = "icons";
  let l = {
    type: i,
    provider: e,
    prefix: t,
    icons: []
  }, a = 0;
  return n.forEach((s, u) => {
    a += s.length + 1, a >= o && u > 0 && (r.push(l), l = {
      type: i,
      provider: e,
      prefix: t,
      icons: []
    }, a = s.length), l.icons.push(s);
  }), r.push(l), r;
};
function ao(e) {
  if (typeof e == "string") {
    const t = Lt(e);
    if (t)
      return t.path;
  }
  return "/";
}
const co = (e, t, n) => {
  if (!Jt) {
    n("abort", 424);
    return;
  }
  let r = ao(t.provider);
  switch (t.type) {
    case "icons": {
      const i = t.prefix, a = t.icons.join(","), s = new URLSearchParams({
        icons: a
      });
      r += i + ".json?" + s.toString();
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
  Jt(e + r).then((i) => {
    const l = i.status;
    if (l !== 200) {
      setTimeout(() => {
        n(lo(l) ? "abort" : "next", l);
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
}, uo = {
  prepare: so,
  send: co
};
function fo(e) {
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
    const i = o.provider, l = o.prefix, a = o.name, s = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), u = s[l] || (s[l] = he(i, l));
    let c;
    a in u.icons ? c = t.loaded : l === "" || u.missing.has(a) ? c = t.missing : c = t.pending;
    const f = {
      provider: i,
      prefix: l,
      name: a
    };
    c.push(f);
  }), t;
}
function Bn(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function go(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let n = !1;
    const r = e.provider, o = e.prefix;
    t.forEach((i) => {
      const l = i.icons, a = l.pending.length;
      l.pending = l.pending.filter((s) => {
        if (s.prefix !== o)
          return !0;
        const u = s.name;
        if (e.icons[u])
          l.loaded.push({
            provider: r,
            prefix: o,
            name: u
          });
        else if (e.missing.has(u))
          l.missing.push({
            provider: r,
            prefix: o,
            name: u
          });
        else
          return n = !0, !0;
        return !1;
      }), l.pending.length !== a && (n || Bn([e], i.id), i.callback(
        l.loaded.slice(0),
        l.missing.slice(0),
        l.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let po = 0;
function ho(e, t, n) {
  const r = po++, o = Bn.bind(null, n, r);
  if (!t.pending.length)
    return o;
  const i = {
    id: r,
    icons: t,
    callback: e,
    abort: o
  };
  return n.forEach((l) => {
    (l.loaderCallbacks || (l.loaderCallbacks = [])).push(i);
  }), o;
}
function mo(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? $e(o, t, n) : o;
    i && r.push(i);
  }), r;
}
var bo = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function vo(e, t, n, r) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let l;
  if (e.random) {
    let m = e.resources.slice(0);
    for (l = []; m.length > 1; ) {
      const A = Math.floor(Math.random() * m.length);
      l.push(m[A]), m = m.slice(0, A).concat(m.slice(A + 1));
    }
    l = l.concat(m);
  } else
    l = e.resources.slice(i).concat(e.resources.slice(0, i));
  const a = Date.now();
  let s = "pending", u = 0, c, f = null, d = [], g = [];
  typeof r == "function" && g.push(r);
  function b() {
    f && (clearTimeout(f), f = null);
  }
  function x() {
    s === "pending" && (s = "aborted"), b(), d.forEach((m) => {
      m.status === "pending" && (m.status = "aborted");
    }), d = [];
  }
  function y(m, A) {
    A && (g = []), typeof m == "function" && g.push(m);
  }
  function _() {
    return {
      startTime: a,
      payload: t,
      status: s,
      queriesSent: u,
      queriesPending: d.length,
      subscribe: y,
      abort: x
    };
  }
  function h() {
    s = "failed", g.forEach((m) => {
      m(void 0, c);
    });
  }
  function k() {
    d.forEach((m) => {
      m.status === "pending" && (m.status = "aborted");
    }), d = [];
  }
  function S(m, A, P) {
    const ee = A !== "success";
    switch (d = d.filter((te) => te !== m), s) {
      case "pending":
        break;
      case "failed":
        if (ee || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (A === "abort") {
      c = P, h();
      return;
    }
    if (ee) {
      c = P, d.length || (l.length ? B() : h());
      return;
    }
    if (b(), k(), !e.random) {
      const te = e.resources.indexOf(m.resource);
      te !== -1 && te !== e.index && (e.index = te);
    }
    s = "completed", g.forEach((te) => {
      te(P);
    });
  }
  function B() {
    if (s !== "pending")
      return;
    b();
    const m = l.shift();
    if (m === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          b(), s === "pending" && (k(), h());
        }, e.timeout);
        return;
      }
      h();
      return;
    }
    const A = {
      status: "pending",
      resource: m,
      callback: (P, ee) => {
        S(A, P, ee);
      }
    };
    d.push(A), u++, f = setTimeout(B, e.rotate), n(m, t, A.callback);
  }
  return setTimeout(B), _;
}
function Rn(e) {
  const t = {
    ...bo,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, s, u) {
    const c = vo(
      t,
      a,
      s,
      (f, d) => {
        r(), u && u(f, d);
      }
    );
    return n.push(c), c;
  }
  function i(a) {
    return n.find((s) => a(s)) || null;
  }
  return {
    query: o,
    find: i,
    setIndex: (a) => {
      t.index = a;
    },
    getIndex: () => t.index,
    cleanup: r
  };
}
function Xt() {
}
const lt = /* @__PURE__ */ Object.create(null);
function yo(e) {
  if (!lt[e]) {
    const t = Lt(e);
    if (!t)
      return;
    const n = Rn(t), r = {
      config: t,
      redundancy: n
    };
    lt[e] = r;
  }
  return lt[e];
}
function wo(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const i = mt(e);
    if (!i)
      return n(void 0, 424), Xt;
    o = i.send;
    const l = yo(e);
    l && (r = l.redundancy);
  } else {
    const i = Pt(e);
    if (i) {
      r = Rn(i);
      const l = e.resources ? e.resources[0] : "", a = mt(l);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Xt) : r.query(t, o, n)().abort;
}
const Yt = "iconify2", ze = "iconify", Fn = ze + "-count", Kt = ze + "-version", Vn = 36e5, _o = 168;
function bt(e, t) {
  try {
    return e.getItem(t);
  } catch {
  }
}
function zt(e, t, n) {
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
function vt(e, t) {
  return zt(e, Fn, t.toString());
}
function yt(e) {
  return parseInt(bt(e, Fn)) || 0;
}
const tt = {
  local: !0,
  session: !0
}, Hn = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Nt = !1;
function xo(e) {
  Nt = e;
}
let Ve = typeof window > "u" ? {} : window;
function Wn(e) {
  const t = e + "Storage";
  try {
    if (Ve && Ve[t] && typeof Ve[t].length == "number")
      return Ve[t];
  } catch {
  }
  tt[e] = !1;
}
function qn(e, t) {
  const n = Wn(e);
  if (!n)
    return;
  const r = bt(n, Kt);
  if (r !== Yt) {
    if (r) {
      const a = yt(n);
      for (let s = 0; s < a; s++)
        $t(n, ze + s.toString());
    }
    zt(n, Kt, Yt), vt(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / Vn) - _o, i = (a) => {
    const s = ze + a.toString(), u = bt(n, s);
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
  let l = yt(n);
  for (let a = l - 1; a >= 0; a--)
    i(a) || (a === l - 1 ? (l--, vt(n, l)) : Hn[e].add(a));
}
function Dn() {
  if (!Nt) {
    xo(!0);
    for (const e in tt)
      qn(e, (t) => {
        const n = t.data, r = t.provider, o = n.prefix, i = he(
          r,
          o
        );
        if (!Et(i, n).length)
          return !1;
        const l = n.lastModified || -1;
        return i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, l) : l, !0;
      });
  }
}
function ko(e, t) {
  const n = e.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= t
  )
    return n === t;
  if (e.lastModifiedCached = t, n)
    for (const r in tt)
      qn(r, (o) => {
        const i = o.data;
        return o.provider !== e.provider || i.prefix !== e.prefix || i.lastModified === t;
      });
  return !0;
}
function Co(e, t) {
  Nt || Dn();
  function n(r) {
    let o;
    if (!tt[r] || !(o = Wn(r)))
      return;
    const i = Hn[r];
    let l;
    if (i.size)
      i.delete(l = Array.from(i).shift());
    else if (l = yt(o), !vt(o, l + 1))
      return;
    const a = {
      cached: Math.floor(Date.now() / Vn),
      provider: e.provider,
      data: t
    };
    return zt(
      o,
      ze + l.toString(),
      JSON.stringify(a)
    );
  }
  t.lastModified && !ko(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"));
}
function en() {
}
function So(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, go(e);
  }));
}
function Io(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    delete e.iconsToLoad;
    let i;
    if (!o || !(i = mt(n)))
      return;
    i.prepare(n, r, o).forEach((a) => {
      wo(n, a, (s) => {
        if (typeof s != "object")
          a.icons.forEach((u) => {
            e.missing.add(u);
          });
        else
          try {
            const u = Et(
              e,
              s
            );
            if (!u.length)
              return;
            const c = e.pendingIcons;
            c && u.forEach((f) => {
              c.delete(f);
            }), Co(e, s);
          } catch (u) {
            console.error(u);
          }
        So(e);
      });
    });
  }));
}
const Mo = (e, t) => {
  const n = mo(e, !0, zn()), r = fo(n);
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
  const o = /* @__PURE__ */ Object.create(null), i = [];
  let l, a;
  return r.pending.forEach((s) => {
    const { provider: u, prefix: c } = s;
    if (c === a && u === l)
      return;
    l = u, a = c, i.push(he(u, c));
    const f = o[u] || (o[u] = /* @__PURE__ */ Object.create(null));
    f[c] || (f[c] = []);
  }), r.pending.forEach((s) => {
    const { provider: u, prefix: c, name: f } = s, d = he(u, c), g = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    g.has(f) || (g.add(f), o[u][c].push(f));
  }), i.forEach((s) => {
    const { provider: u, prefix: c } = s;
    o[u][c].length && Io(s, o[u][c]);
  }), t ? ho(t, r, i) : en;
};
function jo(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], i = typeof o;
    r in Nn ? (o === null || o && (i === "string" || i === "number")) && (n[r] = o) : i === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const Ao = /[\s,]+/;
function To(e, t) {
  t.split(Ao).forEach((n) => {
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
function Eo(e, t = 0) {
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
function Po(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Oo(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Lo(e) {
  return "data:image/svg+xml," + Oo(e);
}
function zo(e) {
  return 'url("' + Lo(e) + '")';
}
const tn = {
  ...Gn,
  inline: !1
}, No = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Go = {
  display: "inline-block"
}, wt = {
  "background-color": "currentColor"
}, Un = {
  "background-color": "transparent"
}, nn = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, rn = {
  "-webkit-mask": wt,
  mask: wt,
  background: Un
};
for (const e in rn) {
  const t = rn[e];
  for (const n in nn)
    t[e + "-" + n] = nn[n];
}
function Bo(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
function Ro(e, t) {
  const n = jo(tn, t), r = t.mode || "svg", o = r === "svg" ? { ...No } : {};
  e.body.indexOf("xlink:") === -1 && delete o["xmlns:xlink"];
  let i = typeof t.style == "string" ? t.style : "";
  for (let _ in t) {
    const h = t[_];
    if (h !== void 0)
      switch (_) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[_] = h === !0 || h === "true" || h === 1;
          break;
        case "flip":
          typeof h == "string" && To(n, h);
          break;
        case "color":
          i = i + (i.length > 0 && i.trim().slice(-1) !== ";" ? ";" : "") + "color: " + h + "; ";
          break;
        case "rotate":
          typeof h == "string" ? n[_] = Eo(h) : typeof h == "number" && (n[_] = h);
          break;
        case "ariaHidden":
        case "aria-hidden":
          h !== !0 && h !== "true" && delete o["aria-hidden"];
          break;
        default:
          if (_.slice(0, 3) === "on:")
            break;
          tn[_] === void 0 && (o[_] = h);
      }
  }
  const l = Yr(e, n), a = l.attributes;
  if (n.inline && (i = "vertical-align: -0.125em; " + i), r === "svg") {
    Object.assign(o, a), i !== "" && (o.style = i);
    let _ = 0, h = t.id;
    return typeof h == "string" && (h = h.replace(/-/g, "_")), {
      svg: !0,
      attributes: o,
      body: to(l.body, h ? () => h + "ID" + _++ : "iconifySvelte")
    };
  }
  const { body: s, width: u, height: c } = e, f = r === "mask" || (r === "bg" ? !1 : s.indexOf("currentColor") !== -1), d = Po(s, {
    ...a,
    width: u + "",
    height: c + ""
  }), b = {
    "--svg": zo(d)
  }, x = (_) => {
    const h = a[_];
    h && (b[_] = Bo(h));
  };
  x("width"), x("height"), Object.assign(b, Go, f ? wt : Un);
  let y = "";
  for (const _ in b)
    y += _ + ": " + b[_] + ";";
  return o.style = y + i, {
    svg: !1,
    attributes: o
  };
}
zn(!0);
no("", uo);
if (typeof document < "u" && typeof window < "u") {
  Dn();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Zr(r)) && console.error(n);
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
          ro(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function Fo(e, t, n, r, o) {
  function i() {
    t.loading && (t.loading.abort(), t.loading = null);
  }
  if (typeof e == "object" && e !== null && typeof e.body == "string")
    return t.name = "", i(), { data: { ...et, ...e } };
  let l;
  if (typeof e != "string" || (l = $e(e, !1, !0)) === null)
    return i(), null;
  const a = Dr(l);
  if (!a)
    return n && (!t.loading || t.loading.name !== e) && (i(), t.name = "", t.loading = {
      name: e,
      abort: Mo([l], r)
    }), null;
  i(), t.name !== e && (t.name = e, o && !t.destroyed && o(e));
  const s = ["iconify"];
  return l.prefix !== "" && s.push("iconify--" + l.prefix), l.provider !== "" && s.push("iconify--" + l.provider), { data: a, classes: s };
}
function Vo(e, t) {
  return e ? Ro({
    ...et,
    ...e
  }, t) : null;
}
function on(e) {
  let t;
  function n(i, l) {
    return (
      /*data*/
      i[0].svg ? Wo : Ho
    );
  }
  let r = n(e), o = r(e);
  return {
    c() {
      o.c(), t = ue();
    },
    m(i, l) {
      o.m(i, l), z(i, t, l);
    },
    p(i, l) {
      r === (r = n(i)) && o ? o.p(i, l) : (o.d(1), o = r(i), o && (o.c(), o.m(t.parentNode, t)));
    },
    d(i) {
      i && T(t), o.d(i);
    }
  };
}
function Ho(e) {
  let t, n = [
    /*data*/
    e[0].attributes
  ], r = {};
  for (let o = 0; o < n.length; o += 1)
    r = oe(r, n[o]);
  return {
    c() {
      t = w("span"), ut(t, r);
    },
    m(o, i) {
      z(o, t, i);
    },
    p(o, i) {
      ut(t, r = Be(n, [i & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && T(t);
    }
  };
}
function Wo(e) {
  let t, n = (
    /*data*/
    e[0].body + ""
  ), r = [
    /*data*/
    e[0].attributes
  ], o = {};
  for (let i = 0; i < r.length; i += 1)
    o = oe(o, r[i]);
  return {
    c() {
      t = fr("svg"), Ht(t, o);
    },
    m(i, l) {
      z(i, t, l), t.innerHTML = n;
    },
    p(i, l) {
      l & /*data*/
      1 && n !== (n = /*data*/
      i[0].body + "") && (t.innerHTML = n), Ht(t, o = Be(r, [l & /*data*/
      1 && /*data*/
      i[0].attributes]));
    },
    d(i) {
      i && T(t);
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
      n && n.c(), t = ue();
    },
    m(r, o) {
      n && n.m(r, o), z(r, t, o);
    },
    p(r, [o]) {
      /*data*/
      r[0] ? n ? n.p(r, o) : (n = on(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: W,
    o: W,
    d(r) {
      r && T(t), n && n.d(r);
    }
  };
}
function Do(e, t, n) {
  const r = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let o = !1, i = 0, l;
  const a = (u) => {
    typeof t.onLoad == "function" && t.onLoad(u), Ce()("load", { icon: u });
  };
  function s() {
    n(3, i++, i);
  }
  return Ge(() => {
    n(2, o = !0);
  }), br(() => {
    n(1, r.destroyed = !0, r), r.loading && (r.loading.abort(), n(1, r.loading = null, r));
  }), e.$$set = (u) => {
    n(6, t = oe(oe({}, t), Ze(u)));
  }, e.$$.update = () => {
    {
      const u = Fo(t.icon, r, o, s, a);
      n(0, l = u ? Vo(u.data, t) : null), l && u.classes && n(
        0,
        l.attributes.class = (typeof t.class == "string" ? t.class + " " : "") + u.classes.join(" "),
        l
      );
    }
  }, t = Ze(t), [l, r, o, i];
}
class Gt extends re {
  constructor(t) {
    super(), ne(this, t, Do, qo, X, {});
  }
}
function Zn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Zn(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Uo() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Zn(e)) && (r && (r += " "), r += t);
  return r;
}
function Zo() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Qn(t)) && (r && (r += " "), r += n);
  return r;
}
function Qn(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Qn(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Bt = "-";
function Qo(e) {
  var t = Xo(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function i(a) {
    var s = a.split(Bt);
    return s[0] === "" && s.length !== 1 && s.shift(), Jn(s, t) || Jo(a);
  }
  function l(a, s) {
    var u = n[a] || [];
    return s && o[a] ? [].concat(u, o[a]) : u;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: l
  };
}
function Jn(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Jn(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var i = e.join(Bt);
    return (l = t.validators.find(function(a) {
      var s = a.validator;
      return s(i);
    })) == null ? void 0 : l.classGroupId;
  }
}
var ln = /^\[(.+)\]$/;
function Jo(e) {
  if (ln.test(e)) {
    var t = ln.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Xo(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = Ko(Object.entries(e.classGroups), n);
  return o.forEach(function(i) {
    var l = i[0], a = i[1];
    _t(a, r, l, t);
  }), r;
}
function _t(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : sn(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Yo(o)) {
        _t(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(l) {
      var a = l[0], s = l[1];
      _t(s, sn(t, a), n, r);
    });
  });
}
function sn(e, t) {
  var n = e;
  return t.split(Bt).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Yo(e) {
  return e.isThemeGetter;
}
function Ko(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], o = n[1], i = o.map(function(l) {
      return typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(a) {
        var s = a[0], u = a[1];
        return [t + s, u];
      })) : l;
    });
    return [r, i];
  }) : e;
}
function $o(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(i, l) {
    n.set(i, l), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(l) {
      var a = n.get(l);
      if (a !== void 0)
        return a;
      if ((a = r.get(l)) !== void 0)
        return o(l, a), a;
    },
    set: function(l, a) {
      n.has(l) ? n.set(l, a) : o(l, a);
    }
  };
}
var Xn = "!";
function ei(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], o = t.length;
  return function(l) {
    for (var a = [], s = 0, u = 0, c, f = 0; f < l.length; f++) {
      var d = l[f];
      if (s === 0) {
        if (d === r && (n || l.slice(f, f + o) === t)) {
          a.push(l.slice(u, f)), u = f + o;
          continue;
        }
        if (d === "/") {
          c = f;
          continue;
        }
      }
      d === "[" ? s++ : d === "]" && s--;
    }
    var g = a.length === 0 ? l : l.substring(u), b = g.startsWith(Xn), x = b ? g.substring(1) : g, y = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: b,
      baseClassName: x,
      maybePostfixModifierPosition: y
    };
  };
}
function ti(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function ni(e) {
  return {
    cache: $o(e.cacheSize),
    splitModifiers: ei(e),
    ...Qo(e)
  };
}
var ri = /\s+/;
function oi(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(ri).map(function(l) {
    var a = n(l), s = a.modifiers, u = a.hasImportantModifier, c = a.baseClassName, f = a.maybePostfixModifierPosition, d = r(f ? c.substring(0, f) : c), g = !!f;
    if (!d) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (d = r(c), !d)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      g = !1;
    }
    var b = ti(s).join(":"), x = u ? b + Xn : b;
    return {
      isTailwindClass: !0,
      modifierId: x,
      classGroupId: d,
      originalClassName: l,
      hasPostfixModifier: g
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var a = l.modifierId, s = l.classGroupId, u = l.hasPostfixModifier, c = a + s;
    return i.has(c) ? !1 : (i.add(c), o(s, u).forEach(function(f) {
      return i.add(a + f);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function xt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, i, l = a;
  function a(u) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(g, b) {
      return b(g);
    }, c());
    return r = ni(d), o = r.cache.get, i = r.cache.set, l = s, s(u);
  }
  function s(u) {
    var c = o(u);
    if (c)
      return c;
    var f = oi(u, r);
    return i(u, f), f;
  }
  return function() {
    return l(Zo.apply(null, arguments));
  };
}
function V(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Yn = /^\[(?:([a-z-]+):)?(.+)\]$/i, ii = /^\d+\/\d+$/, li = /* @__PURE__ */ new Set(["px", "full", "screen"]), si = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ai = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ci = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ie(e) {
  return pe(e) || li.has(e) || ii.test(e) || kt(e);
}
function kt(e) {
  return ye(e, "length", hi);
}
function ui(e) {
  return ye(e, "size", Kn);
}
function fi(e) {
  return ye(e, "position", Kn);
}
function di(e) {
  return ye(e, "url", mi);
}
function He(e) {
  return ye(e, "number", pe);
}
function pe(e) {
  return !Number.isNaN(Number(e));
}
function gi(e) {
  return e.endsWith("%") && pe(e.slice(0, -1));
}
function Me(e) {
  return an(e) || ye(e, "number", an);
}
function j(e) {
  return Yn.test(e);
}
function je() {
  return !0;
}
function ae(e) {
  return si.test(e);
}
function pi(e) {
  return ye(e, "", bi);
}
function ye(e, t, n) {
  var r = Yn.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function hi(e) {
  return ai.test(e);
}
function Kn() {
  return !1;
}
function mi(e) {
  return e.startsWith("url(");
}
function an(e) {
  return Number.isInteger(Number(e));
}
function bi(e) {
  return ci.test(e);
}
function Ct() {
  var e = V("colors"), t = V("spacing"), n = V("blur"), r = V("brightness"), o = V("borderColor"), i = V("borderRadius"), l = V("borderSpacing"), a = V("borderWidth"), s = V("contrast"), u = V("grayscale"), c = V("hueRotate"), f = V("invert"), d = V("gap"), g = V("gradientColorStops"), b = V("gradientColorStopPositions"), x = V("inset"), y = V("margin"), _ = V("opacity"), h = V("padding"), k = V("saturate"), S = V("scale"), B = V("sepia"), m = V("skew"), A = V("space"), P = V("translate"), ee = function() {
    return ["auto", "contain", "none"];
  }, te = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, I = function() {
    return ["auto", j, t];
  }, C = function() {
    return [j, t];
  }, M = function() {
    return ["", ie];
  }, O = function() {
    return ["auto", pe, j];
  }, L = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, G = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, F = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, q = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, D = function() {
    return ["", "0", j];
  }, le = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Y = function() {
    return [pe, He];
  }, se = function() {
    return [pe, j];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [je],
      spacing: [ie],
      blur: ["none", "", ae, j],
      brightness: Y(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ae, j],
      borderSpacing: C(),
      borderWidth: M(),
      contrast: Y(),
      grayscale: D(),
      hueRotate: se(),
      invert: D(),
      gap: C(),
      gradientColorStops: [e],
      gradientColorStopPositions: [gi, kt],
      inset: I(),
      margin: I(),
      opacity: Y(),
      padding: C(),
      saturate: Y(),
      scale: Y(),
      sepia: D(),
      skew: se(),
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
        aspect: ["auto", "square", "video", j]
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
        columns: [ae]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": le()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": le()
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
        object: [].concat(L(), [j])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: te()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": te()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": te()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ee()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ee()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ee()
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
        inset: [x]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [x]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [x]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [x]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [x]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [x]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [x]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [x]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [x]
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
        z: ["auto", Me]
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
        flex: ["1", "auto", "initial", "none", j]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: D()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: D()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Me]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [je]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Me]
        }, j]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": O()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": O()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [je]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Me]
        }, j]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": O()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": O()
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
        "auto-cols": ["auto", "min", "max", "fr", j]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", j]
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
        p: [h]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [h]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [h]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [h]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [h]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [h]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [h]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [h]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [h]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [y]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [y]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [y]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [y]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [y]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [y]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [y]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [y]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [y]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [A]
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
        "space-y": [A]
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
        w: ["auto", "min", "max", "fit", j, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", j, ie]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ae]
        }, ae, j]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [j, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", j, ie]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [j, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ae, kt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", He]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [je]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", j]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", pe, He]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", j, ie]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", j]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", j]
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
        text: [e]
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
        decoration: [].concat(G(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ie]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", j, ie]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", j]
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
        content: ["none", j]
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
        bg: [].concat(L(), [fi])
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
        bg: ["auto", "cover", "contain", ui]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, di]
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
        from: [b]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [b]
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
        "border-opacity": [_]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(G(), ["hidden"])
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
        "divide-opacity": [_]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: G()
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
        outline: [""].concat(G())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [j, ie]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ie]
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
        "ring-opacity": [_]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ie]
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
        shadow: ["", "inner", "none", ae, pi]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [je]
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
        "mix-blend": F()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": F()
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
        "drop-shadow": ["", "none", ae, j]
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
        sepia: [B]
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
        "backdrop-opacity": [_]
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
        "backdrop-sepia": [B]
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
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", j]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: se()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", j]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: se()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", j]
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
        rotate: [Me, j]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [P]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [P]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [m]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [m]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", j]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", j]
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
        "will-change": ["auto", "scroll", "contents", "transform", j]
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
        stroke: [ie, He]
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
function vi(e, t) {
  for (var n in t)
    $n(e, n, t[n]);
  return e;
}
var yi = Object.prototype.hasOwnProperty, wi = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function $n(e, t, n) {
  if (!yi.call(e, t) || wi.has(typeof n) || n === null) {
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
      $n(e[t], r, n[r]);
  }
}
function _i(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? xt.apply(void 0, [Ct, e].concat(n)) : xt.apply(void 0, [function() {
    return vi(Ct(), e);
  }].concat(n));
}
var er = /* @__PURE__ */ xt(Ct);
function ke(...e) {
  return er(Uo(e));
}
function xi(e, t) {
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
function ki(e) {
  let t = (
    /*href*/
    e[0] ? "a" : "button"
  ), n, r, o = (
    /*href*/
    (e[0] ? "a" : "button") && st(e)
  );
  return {
    c() {
      o && o.c(), n = ue();
    },
    m(i, l) {
      o && o.m(i, l), z(i, n, l), r = !0;
    },
    p(i, l) {
      /*href*/
      i[0], t ? X(
        t,
        /*href*/
        i[0] ? "a" : "button"
      ) ? (o.d(1), o = st(i), t = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n)) : o.p(i, l) : (o = st(i), t = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n));
    },
    i(i) {
      r || (E(o, i), r = !0);
    },
    o(i) {
      R(o, i), r = !1;
    },
    d(i) {
      i && T(n), o && o.d(i);
    }
  };
}
function Ci(e) {
  let t = (
    /*href*/
    e[0] ? "a" : "button"
  ), n, r, o = (
    /*href*/
    (e[0] ? "a" : "button") && at(e)
  );
  return {
    c() {
      o && o.c(), n = ue();
    },
    m(i, l) {
      o && o.m(i, l), z(i, n, l), r = !0;
    },
    p(i, l) {
      /*href*/
      i[0], t ? X(
        t,
        /*href*/
        i[0] ? "a" : "button"
      ) ? (o.d(1), o = at(i), t = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n)) : o.p(i, l) : (o = at(i), t = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n));
    },
    i(i) {
      r || (E(o, i), r = !0);
    },
    o(i) {
      R(o, i), r = !1;
    },
    d(i) {
      i && T(n), o && o.d(i);
    }
  };
}
function st(e) {
  let t, n, r, o, i;
  const l = (
    /*#slots*/
    e[5].default
  ), a = It(
    l,
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
      t = w(
        /*href*/
        e[0] ? "a" : "button"
      ), a && a.c(), Je(
        /*href*/
        e[0] ? "a" : "button"
      )(t, u);
    },
    m(c, f) {
      z(c, t, f), a && a.m(t, null), r = !0, o || (i = [
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
      16) && jt(
        a,
        l,
        c,
        /*$$scope*/
        c[4],
        r ? Mt(
          l,
          /*$$scope*/
          c[4],
          f,
          null
        ) : At(
          /*$$scope*/
          c[4]
        ),
        null
      ), Je(
        /*href*/
        c[0] ? "a" : "button"
      )(t, u = Be(s, [
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
      r || (E(a, c), r = !0);
    },
    o(c) {
      R(a, c), r = !1;
    },
    d(c) {
      c && T(t), a && a.d(c), o = !1, ce(i);
    }
  };
}
function at(e) {
  let t, n, r, o, i, l;
  const a = (
    /*#slots*/
    e[5].default
  ), s = It(
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
      t = w(
        /*href*/
        e[0] ? "a" : "button"
      ), s && s.c(), Je(
        /*href*/
        e[0] ? "a" : "button"
      )(t, c);
    },
    m(f, d) {
      z(f, t, d), s && s.m(t, null), o = !0, i || (l = [
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
        ur(r = xi.call(null, t, { builders: (
          /*builders*/
          e[2]
        ) }))
      ], i = !0);
    },
    p(f, d) {
      s && s.p && (!o || d & /*$$scope*/
      16) && jt(
        s,
        a,
        f,
        /*$$scope*/
        f[4],
        o ? Mt(
          a,
          /*$$scope*/
          f[4],
          d,
          null
        ) : At(
          /*$$scope*/
          f[4]
        ),
        null
      ), Je(
        /*href*/
        f[0] ? "a" : "button"
      )(t, c = Be(u, [
        (!o || d & /*href, type*/
        3 && n !== (n = /*href*/
        f[0] ? void 0 : (
          /*type*/
          f[1]
        ))) && { type: n },
        (!o || d & /*href*/
        1) && { href: (
          /*href*/
          f[0]
        ) },
        { tabindex: "0" },
        d & /*builders*/
        4 && cn(
          /*builders*/
          f[2]
        ),
        d & /*$$restProps*/
        8 && /*$$restProps*/
        f[3]
      ])), r && Ne(r.update) && d & /*builders*/
      4 && r.update.call(null, { builders: (
        /*builders*/
        f[2]
      ) });
    },
    i(f) {
      o || (E(s, f), o = !0);
    },
    o(f) {
      R(s, f), o = !1;
    },
    d(f) {
      f && T(t), s && s.d(f), i = !1, ce(l);
    }
  };
}
function Si(e) {
  let t, n, r, o;
  const i = [Ci, ki], l = [];
  function a(s, u) {
    return (
      /*builders*/
      s[2] && /*builders*/
      s[2].length ? 0 : 1
    );
  }
  return t = a(e), n = l[t] = i[t](e), {
    c() {
      n.c(), r = ue();
    },
    m(s, u) {
      l[t].m(s, u), z(s, r, u), o = !0;
    },
    p(s, [u]) {
      let c = t;
      t = a(s), t === c ? l[t].p(s, u) : (fe(), R(l[c], 1, 1, () => {
        l[c] = null;
      }), de(), n = l[t], n ? n.p(s, u) : (n = l[t] = i[t](s), n.c()), E(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      o || (E(n), o = !0);
    },
    o(s) {
      R(n), o = !1;
    },
    d(s) {
      s && T(r), l[t].d(s);
    }
  };
}
function Ii(e, t, n) {
  const r = ["href", "type", "builders"];
  let o = Qe(t, r), { $$slots: i = {}, $$scope: l } = t, { href: a = void 0 } = t, { type: s = void 0 } = t, { builders: u = [] } = t;
  function c(m) {
    K.call(this, e, m);
  }
  function f(m) {
    K.call(this, e, m);
  }
  function d(m) {
    K.call(this, e, m);
  }
  function g(m) {
    K.call(this, e, m);
  }
  function b(m) {
    K.call(this, e, m);
  }
  function x(m) {
    K.call(this, e, m);
  }
  function y(m) {
    K.call(this, e, m);
  }
  function _(m) {
    K.call(this, e, m);
  }
  function h(m) {
    K.call(this, e, m);
  }
  function k(m) {
    K.call(this, e, m);
  }
  function S(m) {
    K.call(this, e, m);
  }
  function B(m) {
    K.call(this, e, m);
  }
  return e.$$set = (m) => {
    t = oe(oe({}, t), Ze(m)), n(3, o = Qe(t, r)), "href" in m && n(0, a = m.href), "type" in m && n(1, s = m.type), "builders" in m && n(2, u = m.builders), "$$scope" in m && n(4, l = m.$$scope);
  }, [
    a,
    s,
    u,
    o,
    l,
    i,
    c,
    f,
    d,
    g,
    b,
    x,
    y,
    _,
    h,
    k,
    S,
    B
  ];
}
let Mi = class extends re {
  constructor(t) {
    super(), ne(this, t, Ii, Si, X, { href: 0, type: 1, builders: 2 });
  }
};
function ji(e) {
  let t;
  const n = (
    /*#slots*/
    e[5].default
  ), r = It(
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
    m(o, i) {
      r && r.m(o, i), t = !0;
    },
    p(o, i) {
      r && r.p && (!t || i & /*$$scope*/
      256) && jt(
        r,
        n,
        o,
        /*$$scope*/
        o[8],
        t ? Mt(
          n,
          /*$$scope*/
          o[8],
          i,
          null
        ) : At(
          /*$$scope*/
          o[8]
        ),
        null
      );
    },
    i(o) {
      t || (E(r, o), t = !0);
    },
    o(o) {
      R(r, o), t = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function Ai(e) {
  let t, n;
  const r = [
    { builders: (
      /*builders*/
      e[3]
    ) },
    {
      class: ke(gn({
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
    $$slots: { default: [ji] },
    $$scope: { ctx: e }
  };
  for (let i = 0; i < r.length; i += 1)
    o = oe(o, r[i]);
  return t = new Mi({ props: o }), t.$on(
    "click",
    /*click_handler*/
    e[6]
  ), t.$on(
    "keydown",
    /*keydown_handler*/
    e[7]
  ), {
    c() {
      Se(t.$$.fragment);
    },
    m(i, l) {
      be(t, i, l), n = !0;
    },
    p(i, [l]) {
      const a = l & /*builders, cn, buttonVariants, variant, size, className, $$restProps*/
      31 ? Be(r, [
        l & /*builders*/
        8 && { builders: (
          /*builders*/
          i[3]
        ) },
        l & /*cn, buttonVariants, variant, size, className*/
        7 && {
          class: ke(gn({
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
        l & /*$$restProps*/
        16 && xr(
          /*$$restProps*/
          i[4]
        )
      ]) : {};
      l & /*$$scope*/
      256 && (a.$$scope = { dirty: l, ctx: i }), t.$set(a);
    },
    i(i) {
      n || (E(t.$$.fragment, i), n = !0);
    },
    o(i) {
      R(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ve(t, i);
    }
  };
}
function Ti(e, t, n) {
  const r = ["class", "variant", "size", "builders"];
  let o = Qe(t, r), { $$slots: i = {}, $$scope: l } = t, { class: a = void 0 } = t, { variant: s = "default" } = t, { size: u = "default" } = t, { builders: c = [] } = t;
  function f(g) {
    K.call(this, e, g);
  }
  function d(g) {
    K.call(this, e, g);
  }
  return e.$$set = (g) => {
    t = oe(oe({}, t), Ze(g)), n(4, o = Qe(t, r)), "class" in g && n(0, a = g.class), "variant" in g && n(1, s = g.variant), "size" in g && n(2, u = g.size), "builders" in g && n(3, c = g.builders), "$$scope" in g && n(8, l = g.$$scope);
  }, [
    a,
    s,
    u,
    c,
    o,
    i,
    f,
    d,
    l
  ];
}
class Ei extends re {
  constructor(t) {
    super(), ne(this, t, Ti, Ai, X, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
}
var un = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, J = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Pi = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function tr(e, t) {
  e.forEach(function(n) {
    Array.isArray(n) ? tr(n, t) : t.push(n);
  });
}
function nr(e) {
  let t = [];
  return tr(e, t), t;
}
var Oi = (...e) => nr(e).filter(Boolean), rr = (e, t) => {
  let n = {}, r = Object.keys(e), o = Object.keys(t);
  for (let i of r)
    if (o.includes(i)) {
      let l = e[i], a = t[i];
      typeof l == "object" && typeof a == "object" ? n[i] = rr(l, a) : n[i] = a + " " + l;
    } else
      n[i] = e[i];
  for (let i of o)
    r.includes(i) || (n[i] = t[i]);
  return n;
}, fn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), Li = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, or = (e) => e || void 0, Ye = (...e) => or(nr(e).filter(Boolean).join(" ")), ct = null, Ke = {}, St = !1, Ae = (...e) => (t) => t.twMerge ? ((!ct || St) && (St = !1, ct = J(Ke) ? er : _i(Ke)), or(ct(Ye(e)))) : Ye(e), dn = (e, t) => {
  for (let n in t)
    e.hasOwnProperty(n) ? e[n] = Ye(e[n], t[n]) : e[n] = t[n];
  return e;
}, zi = (e, t) => {
  let { extend: n = null, slots: r = {}, variants: o = {}, compoundVariants: i = [], compoundSlots: l = [], defaultVariants: a = {} } = e, s = { ...Li, ...t }, u = n != null && n.base ? Ye(n.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, c = n != null && n.variants && !J(n.variants) ? rr(o, n.variants) : o, f = n != null && n.defaultVariants && !J(n.defaultVariants) ? { ...n.defaultVariants, ...a } : a;
  !J(s.twMergeConfig) && !Pi(s.twMergeConfig, Ke) && (St = !0, Ke = s.twMergeConfig);
  let d = J(r) ? {} : { base: e == null ? void 0 : e.base, ...r }, g = J(n == null ? void 0 : n.slots) ? d : dn(n == null ? void 0 : n.slots, J(d) ? { base: e == null ? void 0 : e.base } : d), b = (y) => {
    if (J(c) && J(r) && J(n == null ? void 0 : n.slots))
      return Ae(u, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(s);
    if (i && !Array.isArray(i))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof i}`);
    if (l && !Array.isArray(l))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
    let _ = (I, C, M = [], O) => {
      let L = M;
      if (typeof C == "string")
        L = L.concat(fn(C).split(" ").map((G) => `${I}:${G}`));
      else if (Array.isArray(C))
        L = L.concat(C.reduce((G, F) => G.concat(`${I}:${F}`), []));
      else if (typeof C == "object" && typeof O == "string") {
        for (let G in C)
          if (C.hasOwnProperty(G) && G === O) {
            let F = C[G];
            if (F && typeof F == "string") {
              let q = fn(F);
              L[O] ? L[O] = L[O].concat(q.split(" ").map((D) => `${I}:${D}`)) : L[O] = q.split(" ").map((D) => `${I}:${D}`);
            } else
              Array.isArray(F) && F.length > 0 && (L[O] = F.reduce((q, D) => q.concat(`${I}:${D}`), []));
          }
      }
      return L;
    }, h = (I, C = c, M = null, O = null) => {
      var L;
      let G = C[I];
      if (!G || J(G))
        return null;
      let F = (L = O == null ? void 0 : O[I]) != null ? L : y == null ? void 0 : y[I];
      if (F === null)
        return null;
      let q = un(F), D = Array.isArray(s.responsiveVariants) && s.responsiveVariants.length > 0 || s.responsiveVariants === !0, le = f == null ? void 0 : f[I], Y = [];
      if (typeof q == "object" && D)
        for (let [Q, Rt] of Object.entries(q)) {
          let lr = G[Rt];
          if (Q === "initial") {
            le = Rt;
            continue;
          }
          Array.isArray(s.responsiveVariants) && !s.responsiveVariants.includes(Q) || (Y = _(Q, lr, Y, M));
        }
      let se = G[q] || G[un(le)];
      return typeof Y == "object" && typeof M == "string" && Y[M] ? dn(Y, se) : Y.length > 0 ? (Y.push(se), Y) : se;
    }, k = () => c ? Object.keys(c).map((I) => h(I, c)) : null, S = (I, C) => {
      if (!c || typeof c != "object")
        return null;
      let M = new Array();
      for (let O in c) {
        let L = h(O, c, I, C), G = I === "base" && typeof L == "string" ? L : L && L[I];
        G && (M[M.length] = G);
      }
      return M;
    }, B = {};
    for (let I in y)
      y[I] !== void 0 && (B[I] = y[I]);
    let m = (I, C) => {
      var M;
      let O = typeof (y == null ? void 0 : y[I]) == "object" ? { [I]: (M = y[I]) == null ? void 0 : M.initial } : {};
      return { ...f, ...B, ...O, ...C };
    }, A = (I = [], C) => {
      let M = [];
      for (let { class: O, className: L, ...G } of I) {
        let F = !0;
        for (let [q, D] of Object.entries(G)) {
          let le = m(q, C);
          if (Array.isArray(D)) {
            if (!D.includes(le[q])) {
              F = !1;
              break;
            }
          } else if (le[q] !== D) {
            F = !1;
            break;
          }
        }
        F && (O && M.push(O), L && M.push(L));
      }
      return M;
    }, P = (I) => {
      let C = A(i, I), M = A(n == null ? void 0 : n.compoundVariants, I);
      return Oi(M, C);
    }, ee = (I) => {
      let C = P(I);
      if (!Array.isArray(C))
        return C;
      let M = {};
      for (let O of C)
        if (typeof O == "string" && (M.base = Ae(M.base, O)(s)), typeof O == "object")
          for (let [L, G] of Object.entries(O))
            M[L] = Ae(M[L], G)(s);
      return M;
    }, te = (I) => {
      if (l.length < 1)
        return null;
      let C = {};
      for (let { slots: M = [], class: O, className: L, ...G } of l) {
        if (!J(G)) {
          let F = !0;
          for (let q of Object.keys(G)) {
            let D = m(q, I)[q];
            if (D === void 0 || D !== G[q]) {
              F = !1;
              break;
            }
          }
          if (!F)
            continue;
        }
        for (let F of M)
          C[F] = C[F] || [], C[F].push([O, L]);
      }
      return C;
    };
    if (!J(r) || !J(n == null ? void 0 : n.slots)) {
      let I = {};
      if (typeof g == "object" && !J(g))
        for (let C of Object.keys(g))
          I[C] = (M) => {
            var O, L;
            return Ae(g[C], S(C, M), ((O = ee(M)) != null ? O : [])[C], ((L = te(M)) != null ? L : [])[C], M == null ? void 0 : M.class, M == null ? void 0 : M.className)(s);
          };
      return I;
    }
    return Ae(u, k(), P(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(s);
  }, x = () => {
    if (!(!c || typeof c != "object"))
      return Object.keys(c);
  };
  return b.variantKeys = x(), b.extend = n, b.base = u, b.slots = g, b.variants = c, b.defaultVariants = f, b.compoundSlots = l, b.compoundVariants = i, b;
};
const gn = zi({
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
function Ni(e) {
  let t, n, r = (
    /*title*/
    e[3] + ""
  ), o, i, l;
  return t = new Gt({
    props: {
      class: "mr-2 h-4 w-4",
      icon: (
        /*icon*/
        e[7]
      )
    }
  }), {
    c() {
      Se(t.$$.fragment), n = N(), o = H(r), i = N();
    },
    m(a, s) {
      be(t, a, s), z(a, n, s), z(a, o, s), z(a, i, s), l = !0;
    },
    p(a, s) {
      const u = {};
      s & /*menus*/
      2 && (u.icon = /*icon*/
      a[7]), t.$set(u), (!l || s & /*menus*/
      2) && r !== (r = /*title*/
      a[3] + "") && U(o, r);
    },
    i(a) {
      l || (E(t.$$.fragment, a), l = !0);
    },
    o(a) {
      R(t.$$.fragment, a), l = !1;
    },
    d(a) {
      a && (T(n), T(o), T(i)), ve(t, a);
    }
  };
}
function mn(e) {
  let t, n;
  return t = new Ei({
    props: {
      variant: "secondary",
      class: "w-full justify-start",
      $$slots: { default: [Ni] },
      $$scope: { ctx: e }
    }
  }), t.$on("click", function() {
    Ne(
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
      Se(t.$$.fragment);
    },
    m(r, o) {
      be(t, r, o), n = !0;
    },
    p(r, o) {
      e = r;
      const i = {};
      o & /*$$scope, menus*/
      2050 && (i.$$scope = { dirty: o, ctx: e }), t.$set(i);
    },
    i(r) {
      n || (E(t.$$.fragment, r), n = !0);
    },
    o(r) {
      R(t.$$.fragment, r), n = !1;
    },
    d(r) {
      ve(t, r);
    }
  };
}
function bn(e) {
  let t, n, r = (
    /*title*/
    e[3] + ""
  ), o, i, l, a, s, u = $(
    /*items*/
    e[4]
  ), c = [];
  for (let d = 0; d < u.length; d += 1)
    c[d] = mn(hn(e, u, d));
  const f = (d) => R(c[d], 1, 1, () => {
    c[d] = null;
  });
  return {
    c() {
      t = w("div"), n = w("h2"), o = H(r), i = N(), l = w("div");
      for (let d = 0; d < c.length; d += 1)
        c[d].c();
      a = N(), v(n, "class", "mb-2 px-4 text-lg font-semibold tracking-tight"), v(l, "class", "space-y-1"), v(t, "class", "px-3 py-2");
    },
    m(d, g) {
      z(d, t, g), p(t, n), p(n, o), p(t, i), p(t, l);
      for (let b = 0; b < c.length; b += 1)
        c[b] && c[b].m(l, null);
      p(t, a), s = !0;
    },
    p(d, g) {
      if ((!s || g & /*menus*/
      2) && r !== (r = /*title*/
      d[3] + "") && U(o, r), g & /*onClick, menus*/
      6) {
        u = $(
          /*items*/
          d[4]
        );
        let b;
        for (b = 0; b < u.length; b += 1) {
          const x = hn(d, u, b);
          c[b] ? (c[b].p(x, g), E(c[b], 1)) : (c[b] = mn(x), c[b].c(), E(c[b], 1), c[b].m(l, null));
        }
        for (fe(), b = u.length; b < c.length; b += 1)
          f(b);
        de();
      }
    },
    i(d) {
      if (!s) {
        for (let g = 0; g < u.length; g += 1)
          E(c[g]);
        s = !0;
      }
    },
    o(d) {
      c = c.filter(Boolean);
      for (let g = 0; g < c.length; g += 1)
        R(c[g]);
      s = !1;
    },
    d(d) {
      d && T(t), me(c, d);
    }
  };
}
function Gi(e) {
  let t, n, r, o, i = $(
    /*menus*/
    e[1]
  ), l = [];
  for (let s = 0; s < i.length; s += 1)
    l[s] = bn(pn(e, i, s));
  const a = (s) => R(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      t = w("div"), n = w("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      v(n, "class", "space-y-4 py-4"), v(t, "class", r = ke(
        "pb-12",
        /*className*/
        e[0]
      ));
    },
    m(s, u) {
      z(s, t, u), p(t, n);
      for (let c = 0; c < l.length; c += 1)
        l[c] && l[c].m(n, null);
      o = !0;
    },
    p(s, [u]) {
      if (u & /*menus, onClick*/
      6) {
        i = $(
          /*menus*/
          s[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = pn(s, i, c);
          l[c] ? (l[c].p(f, u), E(l[c], 1)) : (l[c] = bn(f), l[c].c(), E(l[c], 1), l[c].m(n, null));
        }
        for (fe(), c = i.length; c < l.length; c += 1)
          a(c);
        de();
      }
      (!o || u & /*className*/
      1 && r !== (r = ke(
        "pb-12",
        /*className*/
        s[0]
      ))) && v(t, "class", r);
    },
    i(s) {
      if (!o) {
        for (let u = 0; u < i.length; u += 1)
          E(l[u]);
        o = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let u = 0; u < l.length; u += 1)
        R(l[u]);
      o = !1;
    },
    d(s) {
      s && T(t), me(l, s);
    }
  };
}
function Bi(e, t, n) {
  let { class: r = void 0 } = t, { menus: o = [] } = t, { onClick: i = (l) => {
    console.log(l);
  } } = t;
  return e.$$set = (l) => {
    "class" in l && n(0, r = l.class), "menus" in l && n(1, o = l.menus), "onClick" in l && n(2, i = l.onClick);
  }, [r, o, i];
}
class ol extends re {
  constructor(t) {
    super(), ne(this, t, Bi, Gi, X, { class: 0, menus: 1, onClick: 2 });
  }
}
function vn(e, t, n) {
  const r = e.slice();
  return r[2] = t[n].type, r[3] = t[n].height, r[4] = t[n].width, r[5] = t[n].items, r[6] = t[n].id, r[8] = n, r;
}
function Ri(e) {
  let t, n, r, o;
  return {
    c() {
      t = w("div"), n = H("content"), v(t, "id", r = `${/*depth*/
      e[1]}${/*i*/
      e[8]}-`), v(t, "class", o = Vt(
        /*width*/
        e[4]
      ) + " svelte-xkj320");
    },
    m(i, l) {
      z(i, t, l), p(t, n);
    },
    p(i, l) {
      l & /*depth*/
      2 && r !== (r = `${/*depth*/
      i[1]}${/*i*/
      i[8]}-`) && v(t, "id", r), l & /*grids*/
      1 && o !== (o = Vt(
        /*width*/
        i[4]
      ) + " svelte-xkj320") && v(t, "class", o);
    },
    i: W,
    o: W,
    d(i) {
      i && T(t);
    }
  };
}
function Fi(e) {
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
      t = w("div"), Se(n.$$.fragment), r = N(), v(t, "class", "flex w-full"), Pe(
        t,
        "height",
        /*height*/
        e[3] || "200px"
      );
    },
    m(i, l) {
      z(i, t, l), be(n, t, null), p(t, r), o = !0;
    },
    p(i, l) {
      const a = {};
      l & /*grids*/
      1 && (a.grids = /*items*/
      i[5]), l & /*depth*/
      2 && (a.depth = `${/*depth*/
      i[1]}${/*i*/
      i[8]}-`), n.$set(a), l & /*grids*/
      1 && Pe(
        t,
        "height",
        /*height*/
        i[3] || "200px"
      );
    },
    i(i) {
      o || (E(n.$$.fragment, i), o = !0);
    },
    o(i) {
      R(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && T(t), ve(n);
    }
  };
}
function yn(e) {
  let t, n, r, o;
  const i = [Fi, Ri], l = [];
  function a(s, u) {
    return (
      /*type*/
      s[2] === "row" ? 0 : 1
    );
  }
  return t = a(e), n = l[t] = i[t](e), {
    c() {
      n.c(), r = ue();
    },
    m(s, u) {
      l[t].m(s, u), z(s, r, u), o = !0;
    },
    p(s, u) {
      let c = t;
      t = a(s), t === c ? l[t].p(s, u) : (fe(), R(l[c], 1, 1, () => {
        l[c] = null;
      }), de(), n = l[t], n ? n.p(s, u) : (n = l[t] = i[t](s), n.c()), E(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      o || (E(n), o = !0);
    },
    o(s) {
      R(n), o = !1;
    },
    d(s) {
      s && T(r), l[t].d(s);
    }
  };
}
function Vi(e) {
  let t, n, r = $(
    /*grids*/
    e[0]
  ), o = [];
  for (let l = 0; l < r.length; l += 1)
    o[l] = yn(vn(e, r, l));
  const i = (l) => R(o[l], 1, 1, () => {
    o[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      t = ue();
    },
    m(l, a) {
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(l, a);
      z(l, t, a), n = !0;
    },
    p(l, [a]) {
      if (a & /*grids, depth*/
      3) {
        r = $(
          /*grids*/
          l[0]
        );
        let s;
        for (s = 0; s < r.length; s += 1) {
          const u = vn(l, r, s);
          o[s] ? (o[s].p(u, a), E(o[s], 1)) : (o[s] = yn(u), o[s].c(), E(o[s], 1), o[s].m(t.parentNode, t));
        }
        for (fe(), s = r.length; s < o.length; s += 1)
          i(s);
        de();
      }
    },
    i(l) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          E(o[a]);
        n = !0;
      }
    },
    o(l) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        R(o[a]);
      n = !1;
    },
    d(l) {
      l && T(t), me(o, l);
    }
  };
}
function Hi(e, t, n) {
  let { grids: r = [] } = t, { depth: o = "" } = t;
  return e.$$set = (i) => {
    "grids" in i && n(0, r = i.grids), "depth" in i && n(1, o = i.depth);
  }, [r, o];
}
class ir extends re {
  constructor(t) {
    super(), ne(this, t, Hi, Vi, X, { grids: 0, depth: 1 });
  }
}
function wn(e, t, n) {
  const r = e.slice();
  return r[7] = t[n].type, r[8] = t[n].title, r[9] = t[n].url, r[10] = t[n].icon, r[11] = t[n].items, r;
}
function _n(e, t, n) {
  const r = e.slice();
  return r[8] = t[n].title, r[9] = t[n].url, r;
}
function Wi(e) {
  let t, n, r, o, i = (
    /*title*/
    e[8] + ""
  ), l, a, s, u, c;
  r = new Gt({ props: { icon: (
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
      t = w("li"), n = w("button"), Se(r.$$.fragment), o = w("span"), l = H(i), a = N(), v(o, "class", "ml-2"), v(n, "class", "btn btn-ghost drawer-button font-normal normal-case"), v(t, "class", "nav-item");
    },
    m(d, g) {
      z(d, t, g), p(t, n), be(r, n, null), p(n, o), p(o, l), p(t, a), s = !0, u || (c = Z(n, "click", f), u = !0);
    },
    p(d, g) {
      e = d;
      const b = {};
      g & /*links*/
      4 && (b.icon = /*icon*/
      e[10]), r.$set(b), (!s || g & /*links*/
      4) && i !== (i = /*title*/
      e[8] + "") && U(l, i);
    },
    i(d) {
      s || (E(r.$$.fragment, d), s = !0);
    },
    o(d) {
      R(r.$$.fragment, d), s = !1;
    },
    d(d) {
      d && T(t), ve(r), u = !1, c();
    }
  };
}
function qi(e) {
  let t, n, r, o = (
    /*title*/
    e[8] + ""
  ), i, l, a, s, u = $(
    /*items*/
    e[11]
  ), c = [];
  for (let f = 0; f < u.length; f += 1)
    c[f] = xn(_n(e, u, f));
  return {
    c() {
      t = w("li"), n = w("div"), r = w("label"), i = H(o), l = N(), a = w("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      s = N(), v(r, "tabindex", "1"), v(r, "class", "btn normal-case btn-ghost"), v(a, "tabindex", "1"), v(a, "class", "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"), v(n, "class", "dropdown dropdown-hover dropdown-bottom dropdown-end"), v(t, "class", "nav-item");
    },
    m(f, d) {
      z(f, t, d), p(t, n), p(n, r), p(r, i), p(n, l), p(n, a);
      for (let g = 0; g < c.length; g += 1)
        c[g] && c[g].m(a, null);
      p(t, s);
    },
    p(f, d) {
      if (d & /*links*/
      4 && o !== (o = /*title*/
      f[8] + "") && U(i, o), d & /*onItemClick, links*/
      12) {
        u = $(
          /*items*/
          f[11]
        );
        let g;
        for (g = 0; g < u.length; g += 1) {
          const b = _n(f, u, g);
          c[g] ? c[g].p(b, d) : (c[g] = xn(b), c[g].c(), c[g].m(a, null));
        }
        for (; g < c.length; g += 1)
          c[g].d(1);
        c.length = u.length;
      }
    },
    i: W,
    o: W,
    d(f) {
      f && T(t), me(c, f);
    }
  };
}
function xn(e) {
  let t, n, r = (
    /*title*/
    e[8] + ""
  ), o, i, l, a;
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
      t = w("li"), n = w("button"), o = H(r), i = N();
    },
    m(u, c) {
      z(u, t, c), p(t, n), p(n, o), p(t, i), l || (a = Z(n, "click", s), l = !0);
    },
    p(u, c) {
      e = u, c & /*links*/
      4 && r !== (r = /*title*/
      e[8] + "") && U(o, r);
    },
    d(u) {
      u && T(t), l = !1, a();
    }
  };
}
function kn(e) {
  let t, n, r, o;
  const i = [qi, Wi], l = [];
  function a(s, u) {
    return (
      /*type*/
      s[7] === "menu" ? 0 : 1
    );
  }
  return t = a(e), n = l[t] = i[t](e), {
    c() {
      n.c(), r = ue();
    },
    m(s, u) {
      l[t].m(s, u), z(s, r, u), o = !0;
    },
    p(s, u) {
      let c = t;
      t = a(s), t === c ? l[t].p(s, u) : (fe(), R(l[c], 1, 1, () => {
        l[c] = null;
      }), de(), n = l[t], n ? n.p(s, u) : (n = l[t] = i[t](s), n.c()), E(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      o || (E(n), o = !0);
    },
    o(s) {
      R(n), o = !1;
    },
    d(s) {
      s && T(r), l[t].d(s);
    }
  };
}
function Di(e) {
  let t, n, r, o, i, l, a, s, u, c, f, d, g, b = $(
    /*links*/
    e[2]
  ), x = [];
  for (let _ = 0; _ < b.length; _ += 1)
    x[_] = kn(wn(e, b, _));
  const y = (_) => R(x[_], 1, 1, () => {
    x[_] = null;
  });
  return {
    c() {
      t = w("nav"), n = w("div"), r = w("div"), o = w("button"), i = H(
        /*logotxt*/
        e[0]
      ), l = N(), a = w("button"), a.innerHTML = '<i class="fas fa-bars"></i>', s = N(), u = w("div"), c = w("ul");
      for (let _ = 0; _ < x.length; _ += 1)
        x[_].c();
      v(o, "class", "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-slate-700"), v(a, "class", "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"), v(a, "type", "button"), v(r, "class", "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"), v(c, "class", "flex flex-col lg:flex-row list-none lg:ml-auto"), v(u, "class", "lg:flex flex-grow items-center hidden"), v(n, "class", "container px-4 mx-auto flex flex-wrap items-center justify-between"), v(t, "class", "fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 shadow-lg");
    },
    m(_, h) {
      z(_, t, h), p(t, n), p(n, r), p(r, o), p(o, i), p(r, l), p(r, a), p(n, s), p(n, u), p(u, c);
      for (let k = 0; k < x.length; k += 1)
        x[k] && x[k].m(c, null);
      f = !0, d || (g = Z(
        o,
        "click",
        /*click_handler*/
        e[4]
      ), d = !0);
    },
    p(_, [h]) {
      if ((!f || h & /*logotxt*/
      1) && U(
        i,
        /*logotxt*/
        _[0]
      ), h & /*links, onItemClick*/
      12) {
        b = $(
          /*links*/
          _[2]
        );
        let k;
        for (k = 0; k < b.length; k += 1) {
          const S = wn(_, b, k);
          x[k] ? (x[k].p(S, h), E(x[k], 1)) : (x[k] = kn(S), x[k].c(), E(x[k], 1), x[k].m(c, null));
        }
        for (fe(), k = b.length; k < x.length; k += 1)
          y(k);
        de();
      }
    },
    i(_) {
      if (!f) {
        for (let h = 0; h < b.length; h += 1)
          E(x[h]);
        f = !0;
      }
    },
    o(_) {
      x = x.filter(Boolean);
      for (let h = 0; h < x.length; h += 1)
        R(x[h]);
      f = !1;
    },
    d(_) {
      _ && T(t), me(x, _), d = !1, g();
    }
  };
}
function Ui(e, t, n) {
  let { logotxt: r = "wwqdrh" } = t, { logourl: o = "#" } = t, { links: i = [] } = t, { onItemClick: l = (c) => {
    window.location.href = c;
  } } = t;
  const a = () => l(o), s = (c) => l(c), u = (c) => l(c);
  return e.$$set = (c) => {
    "logotxt" in c && n(0, r = c.logotxt), "logourl" in c && n(1, o = c.logourl), "links" in c && n(2, i = c.links), "onItemClick" in c && n(3, l = c.onItemClick);
  }, [
    r,
    o,
    i,
    l,
    a,
    s,
    u
  ];
}
class Cn extends re {
  constructor(t) {
    super(), ne(this, t, Ui, Di, X, {
      logotxt: 0,
      logourl: 1,
      links: 2,
      onItemClick: 3
    });
  }
}
function Sn(e, t, n) {
  const r = e.slice();
  return r[7] = t[n], r;
}
function In(e) {
  let t, n = (
    /*item*/
    e[7] + ""
  ), r, o, i;
  function l() {
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
      t = w("button"), r = H(n), v(t, "class", "get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150");
    },
    m(a, s) {
      z(a, t, s), p(t, r), o || (i = Z(t, "click", l), o = !0);
    },
    p(a, s) {
      e = a, s & /*buttons*/
      8 && n !== (n = /*item*/
      e[7] + "") && U(r, n);
    },
    d(a) {
      a && T(t), o = !1, i();
    }
  };
}
function Zi(e) {
  let t, n, r, o, i, l, a, s, u, c, f, d, g, b, x, y = $(
    /*buttons*/
    e[3]
  ), _ = [];
  for (let h = 0; h < y.length; h += 1)
    _[h] = In(Sn(e, y, h));
  return {
    c() {
      t = w("section"), n = w("div"), r = w("div"), o = w("div"), i = w("h2"), l = H(
        /*title*/
        e[0]
      ), a = N(), s = w("p"), u = H(
        /*description*/
        e[1]
      ), c = N(), f = w("div");
      for (let h = 0; h < _.length; h += 1)
        _[h].c();
      d = N(), g = w("img"), v(i, "class", "font-semibold text-4xl text-slate-600"), v(s, "class", "mt-4 text-lg leading-relaxed text-slate-500"), v(f, "class", "mt-12"), v(o, "class", "pt-32 sm:pt-0"), v(r, "class", "w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4"), v(n, "class", "container mx-auto items-center flex flex-wrap"), v(g, "class", "absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12"), Ue(g.src, b = /*cover*/
      e[5]) || v(g, "src", b), v(g, "alt", "..."), Pe(g, "max-height", "860px"), v(t, "class", x = ke(
        "header relative items-center flex h-screen",
        /*className*/
        e[2]
      )), Pe(t, "max-height", "860px");
    },
    m(h, k) {
      z(h, t, k), p(t, n), p(n, r), p(r, o), p(o, i), p(i, l), p(o, a), p(o, s), p(s, u), p(o, c), p(o, f);
      for (let S = 0; S < _.length; S += 1)
        _[S] && _[S].m(f, null);
      p(t, d), p(t, g);
    },
    p(h, [k]) {
      if (k & /*title*/
      1 && U(
        l,
        /*title*/
        h[0]
      ), k & /*description*/
      2 && U(
        u,
        /*description*/
        h[1]
      ), k & /*buttonClick, buttons*/
      24) {
        y = $(
          /*buttons*/
          h[3]
        );
        let S;
        for (S = 0; S < y.length; S += 1) {
          const B = Sn(h, y, S);
          _[S] ? _[S].p(B, k) : (_[S] = In(B), _[S].c(), _[S].m(f, null));
        }
        for (; S < _.length; S += 1)
          _[S].d(1);
        _.length = y.length;
      }
      k & /*cover*/
      32 && !Ue(g.src, b = /*cover*/
      h[5]) && v(g, "src", b), k & /*className*/
      4 && x !== (x = ke(
        "header relative items-center flex h-screen",
        /*className*/
        h[2]
      )) && v(t, "class", x);
    },
    i: W,
    o: W,
    d(h) {
      h && T(t), me(_, h);
    }
  };
}
function Qi(e, t, n) {
  let { title: r = "wwqdrh's ui component: uikit" } = t, { description: o = "a cross framework web component, you can visit it in wwqdrh'home" } = t, { class: i = "" } = t, { buttons: l = [] } = t, { buttonClick: a = (c) => {
    console.log(c);
  } } = t, { cover: s = "" } = t;
  const u = (c) => a(c);
  return e.$$set = (c) => {
    "title" in c && n(0, r = c.title), "description" in c && n(1, o = c.description), "class" in c && n(2, i = c.class), "buttons" in c && n(3, l = c.buttons), "buttonClick" in c && n(4, a = c.buttonClick), "cover" in c && n(5, s = c.cover);
  }, [r, o, i, l, a, s, u];
}
class Ji extends re {
  constructor(t) {
    super(), ne(this, t, Qi, Zi, X, {
      title: 0,
      description: 1,
      class: 2,
      buttons: 3,
      buttonClick: 4,
      cover: 5
    });
  }
}
function Mn(e, t, n) {
  const r = e.slice();
  return r[4] = t[n].icon, r[3] = t[n].description, r;
}
function jn(e) {
  let t, n, r, o, i, l, a, s, u = (
    /*description*/
    e[3] + ""
  ), c, f, d;
  return i = new Gt({ props: { icon: (
    /*icon*/
    e[4]
  ) } }), {
    c() {
      t = w("li"), n = w("div"), r = w("div"), o = w("span"), Se(i.$$.fragment), l = N(), a = w("div"), s = w("h4"), c = H(u), f = N(), v(o, "class", "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3"), v(s, "class", "text-slate-500"), v(n, "class", "flex items-center"), v(t, "class", "py-2");
    },
    m(g, b) {
      z(g, t, b), p(t, n), p(n, r), p(r, o), be(i, o, null), p(n, l), p(n, a), p(a, s), p(s, c), p(t, f), d = !0;
    },
    p(g, b) {
      const x = {};
      b & /*sections*/
      4 && (x.icon = /*icon*/
      g[4]), i.$set(x), (!d || b & /*sections*/
      4) && u !== (u = /*description*/
      g[3] + "") && U(c, u);
    },
    i(g) {
      d || (E(i.$$.fragment, g), d = !0);
    },
    o(g) {
      R(i.$$.fragment, g), d = !1;
    },
    d(g) {
      g && T(t), ve(i);
    }
  };
}
function Xi(e) {
  let t, n, r, o, i, l, a, s, u, c, f, d, g, b, x, y, _, h, k = $(
    /*sections*/
    e[2]
  ), S = [];
  for (let m = 0; m < k.length; m += 1)
    S[m] = jn(Mn(e, k, m));
  const B = (m) => R(S[m], 1, 1, () => {
    S[m] = null;
  });
  return {
    c() {
      t = w("div"), n = w("div"), r = w("div"), o = w("div"), i = w("div"), i.innerHTML = '<i class="fas fa-file-alt text-xl"></i>', l = N(), a = w("h3"), s = H(
        /*title*/
        e[1]
      ), u = N(), c = w("p"), f = H(
        /*description*/
        e[3]
      ), d = N(), g = w("ul");
      for (let m = 0; m < S.length; m += 1)
        S[m].c();
      b = N(), x = w("div"), y = w("img"), v(i, "class", "text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"), v(a, "class", "text-3xl font-semibold"), v(c, "class", "mt-4 text-lg leading-relaxed text-slate-500"), v(g, "class", "list-none mt-6"), v(o, "class", "md:pr-12"), v(r, "class", "w-full md:w-5/12 ml-auto px-12 md:px-4"), v(y, "alt", "..."), v(y, "class", "max-w-full rounded-lg shadow-xl"), Pe(y, "transform", "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"), Ue(y.src, _ = /*cover*/
      e[0]) || v(y, "src", _), v(x, "class", "w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0"), v(n, "class", "items-center flex flex-wrap"), v(t, "class", "container mx-auto px-4 pb-32 pt-48");
    },
    m(m, A) {
      z(m, t, A), p(t, n), p(n, r), p(r, o), p(o, i), p(o, l), p(o, a), p(a, s), p(o, u), p(o, c), p(c, f), p(o, d), p(o, g);
      for (let P = 0; P < S.length; P += 1)
        S[P] && S[P].m(g, null);
      p(n, b), p(n, x), p(x, y), h = !0;
    },
    p(m, [A]) {
      if ((!h || A & /*title*/
      2) && U(
        s,
        /*title*/
        m[1]
      ), (!h || A & /*description*/
      8) && U(
        f,
        /*description*/
        m[3]
      ), A & /*sections*/
      4) {
        k = $(
          /*sections*/
          m[2]
        );
        let P;
        for (P = 0; P < k.length; P += 1) {
          const ee = Mn(m, k, P);
          S[P] ? (S[P].p(ee, A), E(S[P], 1)) : (S[P] = jn(ee), S[P].c(), E(S[P], 1), S[P].m(g, null));
        }
        for (fe(), P = k.length; P < S.length; P += 1)
          B(P);
        de();
      }
      (!h || A & /*cover*/
      1 && !Ue(y.src, _ = /*cover*/
      m[0])) && v(y, "src", _);
    },
    i(m) {
      if (!h) {
        for (let A = 0; A < k.length; A += 1)
          E(S[A]);
        h = !0;
      }
    },
    o(m) {
      S = S.filter(Boolean);
      for (let A = 0; A < S.length; A += 1)
        R(S[A]);
      h = !1;
    },
    d(m) {
      m && T(t), me(S, m);
    }
  };
}
function Yi(e, t, n) {
  let { cover: r = "" } = t, { title: o = "" } = t, { description: i = "" } = t, { sections: l = [] } = t;
  return e.$$set = (a) => {
    "cover" in a && n(0, r = a.cover), "title" in a && n(1, o = a.title), "description" in a && n(3, i = a.description), "sections" in a && n(2, l = a.sections);
  }, [r, o, l, i];
}
class Ki extends re {
  constructor(t) {
    super(), ne(this, t, Yi, Xi, X, {
      cover: 0,
      title: 1,
      description: 3,
      sections: 2
    });
  }
}
const il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Ji,
  Feature: Cn,
  Grid: ir,
  Header: Cn,
  ProjectDescription: Ki
}, Symbol.toStringTag, { value: "Module" }));
export {
  il as Layout,
  ol as Sidebar,
  nl as confirm,
  tl as notify
};
