var Qn = Object.defineProperty;
var Jn = (e, t, n) => t in e ? Qn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ke = (e, t, n) => (Jn(e, typeof t != "symbol" ? t + "" : t, n), n);
function V() {
}
function Y(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function bn(e) {
  return e();
}
function Nt() {
  return /* @__PURE__ */ Object.create(null);
}
function ae(e) {
  e.forEach(bn);
}
function Ae(e) {
  return typeof e == "function";
}
function K(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Xn(e) {
  return Object.keys(e).length === 0;
}
function xt(e, t, n, r) {
  if (e) {
    const o = vn(e, t, n, r);
    return e[0](o);
  }
}
function vn(e, t, n, r) {
  return e[1] && r ? Y(n.ctx.slice(), e[1](r(t))) : n.ctx;
}
function kt(e, t, n, r) {
  if (e[2] && r) {
    const o = e[2](r(n));
    if (t.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const i = [], s = Math.max(t.dirty.length, o.length);
      for (let a = 0; a < s; a += 1)
        i[a] = t.dirty[a] | o[a];
      return i;
    }
    return t.dirty | o;
  }
  return t.dirty;
}
function Ct(e, t, n, r, o, i) {
  if (o) {
    const s = vn(t, n, r, i);
    e.p(s, o);
  }
}
function St(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let r = 0; r < n; r++)
      t[r] = -1;
    return t;
  }
  return -1;
}
function Ve(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function He(e, t) {
  const n = {};
  t = new Set(t);
  for (const r in e)
    !t.has(r) && r[0] !== "$" && (n[r] = e[r]);
  return n;
}
function Gt(e) {
  return e ?? "";
}
function Yn(e) {
  return e && Ae(e.destroy) ? e.destroy : V;
}
function y(e, t) {
  e.appendChild(t);
}
function L(e, t, n) {
  e.insertBefore(t, n || null);
}
function O(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function It(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function x(e) {
  return document.createElement(e);
}
function Kn(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function J(e) {
  return document.createTextNode(e);
}
function W() {
  return J(" ");
}
function de() {
  return J("");
}
function q(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function w(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const $n = ["width", "height"];
function st(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const r in t)
    t[r] == null ? e.removeAttribute(r) : r === "style" ? e.style.cssText = t[r] : r === "__value" ? e.value = e[r] = t[r] : n[r] && n[r].set && $n.indexOf(r) === -1 ? e[r] = t[r] : w(e, r, t[r]);
}
function Rt(e, t) {
  for (const n in t)
    w(e, n, t[n]);
}
function er(e, t) {
  Object.keys(t).forEach((n) => {
    tr(e, n, t[n]);
  });
}
function tr(e, t, n) {
  t in e ? e[t] = typeof e[t] == "boolean" && n === "" ? !0 : n : w(e, t, n);
}
function We(e) {
  return /-/.test(e) ? er : st;
}
function nr(e) {
  return Array.from(e.childNodes);
}
function ne(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Bt(e, t, n, r) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "");
}
function rr(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
let Se;
function ke(e) {
  Se = e;
}
function Mt() {
  if (!Se)
    throw new Error("Function called outside component initialization");
  return Se;
}
function je(e) {
  Mt().$$.on_mount.push(e);
}
function or(e) {
  Mt().$$.on_destroy.push(e);
}
function ve() {
  const e = Mt();
  return (t, n, { cancelable: r = !1 } = {}) => {
    const o = e.$$.callbacks[t];
    if (o) {
      const i = rr(
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
function Z(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((r) => r.call(this, t));
}
const he = [], lt = [];
let me = [];
const Ft = [], ir = /* @__PURE__ */ Promise.resolve();
let at = !1;
function sr() {
  at || (at = !0, ir.then(yn));
}
function ct(e) {
  me.push(e);
}
const $e = /* @__PURE__ */ new Set();
let ge = 0;
function yn() {
  if (ge !== 0)
    return;
  const e = Se;
  do {
    try {
      for (; ge < he.length; ) {
        const t = he[ge];
        ge++, ke(t), lr(t.$$);
      }
    } catch (t) {
      throw he.length = 0, ge = 0, t;
    }
    for (ke(null), he.length = 0, ge = 0; lt.length; )
      lt.pop()();
    for (let t = 0; t < me.length; t += 1) {
      const n = me[t];
      $e.has(n) || ($e.add(n), n());
    }
    me.length = 0;
  } while (he.length);
  for (; Ft.length; )
    Ft.pop()();
  at = !1, $e.clear(), ke(e);
}
function lr(e) {
  if (e.fragment !== null) {
    e.update(), ae(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ct);
  }
}
function ar(e) {
  const t = [], n = [];
  me.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), me = t;
}
const Re = /* @__PURE__ */ new Set();
let ce;
function Ee() {
  ce = {
    r: 0,
    c: [],
    p: ce
    // parent group
  };
}
function Te() {
  ce.r || ae(ce.c), ce = ce.p;
}
function z(e, t) {
  e && e.i && (Re.delete(e), e.i(t));
}
function B(e, t, n, r) {
  if (e && e.o) {
    if (Re.has(e))
      return;
    Re.add(e), ce.c.push(() => {
      Re.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
function be(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Pe(e, t) {
  const n = {}, r = {}, o = { $$scope: 1 };
  let i = e.length;
  for (; i--; ) {
    const s = e[i], a = t[i];
    if (a) {
      for (const l in s)
        l in a || (r[l] = 1);
      for (const l in a)
        o[l] || (n[l] = a[l], o[l] = 1);
      e[i] = a;
    } else
      for (const l in s)
        o[l] = 1;
  }
  for (const s in r)
    s in n || (n[s] = void 0);
  return n;
}
function cr(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function Qe(e) {
  e && e.c();
}
function Oe(e, t, n) {
  const { fragment: r, after_update: o } = e.$$;
  r && r.m(t, n), ct(() => {
    const i = e.$$.on_mount.map(bn).filter(Ae);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : ae(i), e.$$.on_mount = [];
  }), o.forEach(ct);
}
function Le(e, t) {
  const n = e.$$;
  n.fragment !== null && (ar(n.after_update), ae(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ur(e, t) {
  e.$$.dirty[0] === -1 && (he.push(e), sr(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function re(e, t, n, r, o, i, s, a = [-1]) {
  const l = Se;
  ke(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: V,
    not_equal: o,
    bound: Nt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Nt(),
    dirty: a,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, d, ...g) => {
    const h = g.length ? g[0] : d;
    return u.ctx && o(u.ctx[f], u.ctx[f] = h) && (!u.skip_bound && u.bound[f] && u.bound[f](h), c && ur(e, f)), d;
  }) : [], u.update(), c = !0, ae(u.before_update), u.fragment = r ? r(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = nr(t.target);
      u.fragment && u.fragment.l(f), f.forEach(O);
    } else
      u.fragment && u.fragment.c();
    t.intro && z(e.$$.fragment), Oe(e, t.target, t.anchor), yn();
  }
  ke(l);
}
class oe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ke(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Ke(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Le(this, 1), this.$destroy = V;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!Ae(n))
      return V;
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
    this.$$set && !Xn(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const fr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(fr);
function dr(e) {
  let t, n, r, o, i, s, a, l, u;
  return {
    c() {
      t = x("div"), n = x("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>', r = W(), o = x("div"), i = x("div"), s = x("span"), s.textContent = "Success", a = W(), l = x("p"), u = J(
        /*msg*/
        e[0]
      ), w(n, "class", "flex items-center justify-center w-12 bg-emerald-500"), w(s, "class", "font-semibold text-emerald-500 dark:text-emerald-400"), w(l, "class", "text-sm text-gray-600 dark:text-gray-200"), w(i, "class", "mx-3"), w(o, "class", "px-4 py-2 -mx-3"), w(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(c, f) {
      L(c, t, f), y(t, n), y(t, r), y(t, o), y(o, i), y(i, s), y(i, a), y(i, l), y(l, u);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && ne(
        u,
        /*msg*/
        c[0]
      );
    },
    i: V,
    o: V,
    d(c) {
      c && O(t);
    }
  };
}
function pr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const i = ve();
  return je(() => {
    setTimeout(
      () => {
        i("onEnd");
      },
      o
    );
  }), e.$$set = (s) => {
    "msg" in s && n(0, r = s.msg), "duration" in s && n(1, o = s.duration);
  }, [r, o];
}
class gr extends oe {
  constructor(t) {
    super(), re(this, t, pr, dr, K, { msg: 0, duration: 1 });
  }
}
function hr(e) {
  let t, n, r, o, i, s, a, l, u;
  return {
    c() {
      t = x("div"), n = x("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', r = W(), o = x("div"), i = x("div"), s = x("span"), s.textContent = "Info", a = W(), l = x("p"), u = J(
        /*msg*/
        e[0]
      ), w(n, "class", "flex items-center justify-center w-12 bg-blue-500"), w(s, "class", "font-semibold text-blue-500 dark:text-blue-400"), w(l, "class", "text-sm text-gray-600 dark:text-gray-200"), w(i, "class", "mx-3"), w(o, "class", "px-4 py-2 -mx-3"), w(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(c, f) {
      L(c, t, f), y(t, n), y(t, r), y(t, o), y(o, i), y(i, s), y(i, a), y(i, l), y(l, u);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && ne(
        u,
        /*msg*/
        c[0]
      );
    },
    i: V,
    o: V,
    d(c) {
      c && O(t);
    }
  };
}
function mr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const i = ve();
  return je(() => {
    setTimeout(
      () => {
        i("onEnd");
      },
      o
    );
  }), e.$$set = (s) => {
    "msg" in s && n(0, r = s.msg), "duration" in s && n(1, o = s.duration);
  }, [r, o];
}
class Vt extends oe {
  constructor(t) {
    super(), re(this, t, mr, hr, K, { msg: 0, duration: 1 });
  }
}
function br(e) {
  let t, n, r, o, i, s, a, l, u;
  return {
    c() {
      t = x("div"), n = x("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', r = W(), o = x("div"), i = x("div"), s = x("span"), s.textContent = "Warning", a = W(), l = x("p"), u = J(
        /*msg*/
        e[0]
      ), w(n, "class", "flex items-center justify-center w-12 bg-yellow-400"), w(s, "class", "font-semibold text-yellow-400 dark:text-yellow-300"), w(l, "class", "text-sm text-gray-600 dark:text-gray-200"), w(i, "class", "mx-3"), w(o, "class", "px-4 py-2 -mx-3"), w(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(c, f) {
      L(c, t, f), y(t, n), y(t, r), y(t, o), y(o, i), y(i, s), y(i, a), y(i, l), y(l, u);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && ne(
        u,
        /*msg*/
        c[0]
      );
    },
    i: V,
    o: V,
    d(c) {
      c && O(t);
    }
  };
}
function vr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const i = ve();
  return je(() => {
    setTimeout(
      () => {
        i("onEnd");
      },
      o
    );
  }), e.$$set = (s) => {
    "msg" in s && n(0, r = s.msg), "duration" in s && n(1, o = s.duration);
  }, [r, o];
}
class yr extends oe {
  constructor(t) {
    super(), re(this, t, vr, br, K, { msg: 0, duration: 1 });
  }
}
function wr(e) {
  let t, n, r, o, i, s, a, l, u;
  return {
    c() {
      t = x("div"), n = x("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>', r = W(), o = x("div"), i = x("div"), s = x("span"), s.textContent = "Error", a = W(), l = x("p"), u = J(
        /*msg*/
        e[0]
      ), w(n, "class", "flex items-center justify-center w-12 bg-red-500"), w(s, "class", "font-semibold text-red-500 dark:text-red-400"), w(l, "class", "text-sm text-gray-600 dark:text-gray-200"), w(i, "class", "mx-3"), w(o, "class", "px-4 py-2 -mx-3"), w(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(c, f) {
      L(c, t, f), y(t, n), y(t, r), y(t, o), y(o, i), y(i, s), y(i, a), y(i, l), y(l, u);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && ne(
        u,
        /*msg*/
        c[0]
      );
    },
    i: V,
    o: V,
    d(c) {
      c && O(t);
    }
  };
}
function _r(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const i = ve();
  return je(() => {
    setTimeout(
      () => {
        i("onEnd");
      },
      o
    );
  }), e.$$set = (s) => {
    "msg" in s && n(0, r = s.msg), "duration" in s && n(1, o = s.duration);
  }, [r, o];
}
let xr = class extends oe {
  constructor(t) {
    super(), re(this, t, _r, wr, K, { msg: 0, duration: 1 });
  }
};
const Ht = "uikit_msg_panel";
let et = 0;
const Li = (e) => {
  et += 1;
  let t = window.document.getElementById(Ht);
  t || (t = window.document.createElement("div"), t.id = Ht, t.style.position = "absolute", t.style.top = "5px", t.style.right = "5px", t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "10px", document.body.appendChild(t));
  const n = window.document.createElement("div");
  t.appendChild(n);
  let r;
  switch (e.type) {
    case "success":
      r = new gr({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "info":
      r = new Vt({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "warn":
      r = new yr({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "error":
      r = new xr({
        target: n,
        props: {
          ...e
        }
      });
      break;
    default:
      r = new Vt({
        target: n,
        props: {
          ...e
        }
      });
      break;
  }
  return r.$on("onEnd", () => {
    r.$destroy(), et -= 1, et == 0 && document.body.removeChild(t);
  }), r;
}, ze = (e) => Object.entries(e).map(([t, n]) => `${t}: ${n};`).join(" ");
function kr(e) {
  let t, n, r, o, i, s, a, l, u, c, f, d, g, h, _, m, C, v, P, X;
  return {
    c() {
      t = x("div"), n = x("div"), r = x("div"), o = x("div"), i = J(
        /*title*/
        e[0]
      ), s = W(), a = x("div"), l = x("div"), u = J(
        /*content*/
        e[1]
      ), c = W(), f = x("div"), d = x("div"), g = J(
        /*cancelText*/
        e[2]
      ), _ = W(), m = x("div"), C = J(
        /*okText*/
        e[3]
      ), w(o, "class", "modal-title svelte-f901x2"), w(a, "class", "content svelte-f901x2"), w(r, "class", "modal-content-body svelte-f901x2"), w(d, "class", "btn button-left centerLayout svelte-f901x2"), w(d, "style", h = ze(
        /*cancelBtnStyle*/
        e[4]
      )), w(m, "class", "btn button-right centerLayout svelte-f901x2"), w(m, "style", v = ze(
        /*okBtnStyle*/
        e[5]
      )), w(f, "class", "confirm-button-wrap svelte-f901x2"), w(n, "class", "confirm-modal-content svelte-f901x2"), w(t, "class", "confirm-modal svelte-f901x2");
    },
    m(N, p) {
      L(N, t, p), y(t, n), y(n, r), y(r, o), y(o, i), y(r, s), y(r, a), y(a, l), y(l, u), y(n, c), y(n, f), y(f, d), y(d, g), y(f, _), y(f, m), y(m, C), e[11](t), P || (X = [
        q(
          d,
          "click",
          /*onCancelClk*/
          e[8]
        ),
        q(
          m,
          "click",
          /*onOkClk*/
          e[7]
        )
      ], P = !0);
    },
    p(N, [p]) {
      p & /*title*/
      1 && ne(
        i,
        /*title*/
        N[0]
      ), p & /*content*/
      2 && ne(
        u,
        /*content*/
        N[1]
      ), p & /*cancelText*/
      4 && ne(
        g,
        /*cancelText*/
        N[2]
      ), p & /*cancelBtnStyle*/
      16 && h !== (h = ze(
        /*cancelBtnStyle*/
        N[4]
      )) && w(d, "style", h), p & /*okText*/
      8 && ne(
        C,
        /*okText*/
        N[3]
      ), p & /*okBtnStyle*/
      32 && v !== (v = ze(
        /*okBtnStyle*/
        N[5]
      )) && w(m, "style", v);
    },
    i: V,
    o: V,
    d(N) {
      N && O(t), e[11](null), P = !1, ae(X);
    }
  };
}
function Cr(e, t, n) {
  let { title: r = "" } = t, { content: o = "" } = t, { cancelText: i = "取消" } = t, { okText: s = "确定" } = t, { onCancel: a = () => {
  } } = t, { onOk: l = () => {
  } } = t, { cancelBtnStyle: u = "" } = t, { okBtnStyle: c = "" } = t;
  const f = ve();
  let d;
  const g = () => {
    l(), f("onOk");
  }, h = () => {
    a(), f("onCancel");
  };
  function _(m) {
    lt[m ? "unshift" : "push"](() => {
      d = m, n(6, d);
    });
  }
  return e.$$set = (m) => {
    "title" in m && n(0, r = m.title), "content" in m && n(1, o = m.content), "cancelText" in m && n(2, i = m.cancelText), "okText" in m && n(3, s = m.okText), "onCancel" in m && n(9, a = m.onCancel), "onOk" in m && n(10, l = m.onOk), "cancelBtnStyle" in m && n(4, u = m.cancelBtnStyle), "okBtnStyle" in m && n(5, c = m.okBtnStyle);
  }, [
    r,
    o,
    i,
    s,
    u,
    c,
    d,
    g,
    h,
    a,
    l,
    _
  ];
}
class Sr extends oe {
  constructor(t) {
    super(), re(this, t, Cr, kr, K, {
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
const zi = (e) => {
  const t = window.document.createElement("div");
  document.body.appendChild(t);
  const n = new Sr({
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
};
function Wt(e, t, n) {
  const r = e.slice();
  return r[2] = t[n].type, r[3] = t[n].height, r[4] = t[n].width, r[5] = t[n].items, r[6] = t[n].id, r[8] = n, r;
}
function Ir(e) {
  let t, n, r, o;
  return {
    c() {
      t = x("div"), n = J("content"), w(t, "id", r = `${/*depth*/
      e[1]}${/*i*/
      e[8]}-`), w(t, "class", o = Gt(
        /*width*/
        e[4]
      ) + " svelte-xkj320");
    },
    m(i, s) {
      L(i, t, s), y(t, n);
    },
    p(i, s) {
      s & /*depth*/
      2 && r !== (r = `${/*depth*/
      i[1]}${/*i*/
      i[8]}-`) && w(t, "id", r), s & /*grids*/
      1 && o !== (o = Gt(
        /*width*/
        i[4]
      ) + " svelte-xkj320") && w(t, "class", o);
    },
    i: V,
    o: V,
    d(i) {
      i && O(t);
    }
  };
}
function Mr(e) {
  let t, n, r, o;
  return n = new Er({
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
      t = x("div"), Qe(n.$$.fragment), r = W(), w(t, "class", "flex w-full"), Bt(
        t,
        "height",
        /*height*/
        e[3] || "200px"
      );
    },
    m(i, s) {
      L(i, t, s), Oe(n, t, null), y(t, r), o = !0;
    },
    p(i, s) {
      const a = {};
      s & /*grids*/
      1 && (a.grids = /*items*/
      i[5]), s & /*depth*/
      2 && (a.depth = `${/*depth*/
      i[1]}${/*i*/
      i[8]}-`), n.$set(a), s & /*grids*/
      1 && Bt(
        t,
        "height",
        /*height*/
        i[3] || "200px"
      );
    },
    i(i) {
      o || (z(n.$$.fragment, i), o = !0);
    },
    o(i) {
      B(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && O(t), Le(n);
    }
  };
}
function Dt(e) {
  let t, n, r, o;
  const i = [Mr, Ir], s = [];
  function a(l, u) {
    return (
      /*type*/
      l[2] === "row" ? 0 : 1
    );
  }
  return t = a(e), n = s[t] = i[t](e), {
    c() {
      n.c(), r = de();
    },
    m(l, u) {
      s[t].m(l, u), L(l, r, u), o = !0;
    },
    p(l, u) {
      let c = t;
      t = a(l), t === c ? s[t].p(l, u) : (Ee(), B(s[c], 1, 1, () => {
        s[c] = null;
      }), Te(), n = s[t], n ? n.p(l, u) : (n = s[t] = i[t](l), n.c()), z(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      o || (z(n), o = !0);
    },
    o(l) {
      B(n), o = !1;
    },
    d(l) {
      l && O(r), s[t].d(l);
    }
  };
}
function Ar(e) {
  let t, n, r = be(
    /*grids*/
    e[0]
  ), o = [];
  for (let s = 0; s < r.length; s += 1)
    o[s] = Dt(Wt(e, r, s));
  const i = (s) => B(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      t = de();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      L(s, t, a), n = !0;
    },
    p(s, [a]) {
      if (a & /*grids, depth*/
      3) {
        r = be(
          /*grids*/
          s[0]
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const u = Wt(s, r, l);
          o[l] ? (o[l].p(u, a), z(o[l], 1)) : (o[l] = Dt(u), o[l].c(), z(o[l], 1), o[l].m(t.parentNode, t));
        }
        for (Ee(), l = r.length; l < o.length; l += 1)
          i(l);
        Te();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < r.length; a += 1)
          z(o[a]);
        n = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        B(o[a]);
      n = !1;
    },
    d(s) {
      s && O(t), It(o, s);
    }
  };
}
function jr(e, t, n) {
  let { grids: r = [] } = t, { depth: o = "" } = t;
  return e.$$set = (i) => {
    "grids" in i && n(0, r = i.grids), "depth" in i && n(1, o = i.depth);
  }, [r, o];
}
class Er extends oe {
  constructor(t) {
    super(), re(this, t, jr, Ar, K, { grids: 0, depth: 1 });
  }
}
const Ce = /^[a-z0-9]+(-[a-z0-9]+)*$/, Je = (e, t, n, r = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    r = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const a = o.pop(), l = o.pop(), u = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : r,
      prefix: l,
      name: a
    };
    return t && !Be(u) ? null : u;
  }
  const i = o[0], s = i.split("-");
  if (s.length > 1) {
    const a = {
      provider: r,
      prefix: s.shift(),
      name: s.join("-")
    };
    return t && !Be(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: i
    };
    return t && !Be(a, n) ? null : a;
  }
  return null;
}, Be = (e, t) => e ? !!((e.provider === "" || e.provider.match(Ce)) && (t && e.prefix === "" || e.prefix.match(Ce)) && e.name.match(Ce)) : !1, wn = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), De = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Xe = Object.freeze({
  ...wn,
  ...De
}), ut = Object.freeze({
  ...Xe,
  body: "",
  hidden: !1
});
function Tr(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Ut(e, t) {
  const n = Tr(e, t);
  for (const r in ut)
    r in De ? r in e && !(r in n) && (n[r] = De[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function Pr(e, t) {
  const n = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function i(s) {
    if (n[s])
      return o[s] = [];
    if (!(s in o)) {
      o[s] = null;
      const a = r[s] && r[s].parent, l = a && i(a);
      l && (o[s] = [a].concat(l));
    }
    return o[s];
  }
  return (t || Object.keys(n).concat(Object.keys(r))).forEach(i), o;
}
function Or(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function s(a) {
    i = Ut(
      r[a] || o[a],
      i
    );
  }
  return s(t), n.forEach(s), Ut(e, i);
}
function _n(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = Pr(e);
  for (const o in r) {
    const i = r[o];
    i && (t(o, Or(e, o, i)), n.push(o));
  }
  return n;
}
const Lr = {
  provider: "",
  aliases: {},
  not_found: {},
  ...wn
};
function tt(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function xn(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !tt(e, Lr))
    return null;
  const n = t.icons;
  for (const o in n) {
    const i = n[o];
    if (!o.match(Ce) || typeof i.body != "string" || !tt(
      i,
      ut
    ))
      return null;
  }
  const r = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in r) {
    const i = r[o], s = i.parent;
    if (!o.match(Ce) || typeof s != "string" || !n[s] && !r[s] || !tt(
      i,
      ut
    ))
      return null;
  }
  return t;
}
const Zt = /* @__PURE__ */ Object.create(null);
function zr(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function fe(e, t) {
  const n = Zt[e] || (Zt[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = zr(e, t));
}
function At(e, t) {
  return xn(t) ? _n(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function Nr(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Ie = !1;
function kn(e) {
  return typeof e == "boolean" && (Ie = e), Ie;
}
function Gr(e) {
  const t = typeof e == "string" ? Je(e, !0, Ie) : e;
  if (t) {
    const n = fe(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Rr(e, t) {
  const n = Je(e, !0, Ie);
  if (!n)
    return !1;
  const r = fe(n.provider, n.prefix);
  return Nr(r, n.name, t);
}
function Br(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Ie && !t && !e.prefix) {
    let o = !1;
    return xn(e) && (e.prefix = "", _n(e, (i, s) => {
      s && Rr(i, s) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!Be({
    provider: t,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = fe(t, n);
  return !!At(r, e);
}
const Cn = Object.freeze({
  width: null,
  height: null
}), Sn = Object.freeze({
  // Dimensions
  ...Cn,
  // Transformations
  ...De
}), Fr = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Vr = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function qt(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(Fr);
  if (r === null || !r.length)
    return e;
  const o = [];
  let i = r.shift(), s = Vr.test(i);
  for (; ; ) {
    if (s) {
      const a = parseFloat(i);
      isNaN(a) ? o.push(i) : o.push(Math.ceil(a * t * n) / n);
    } else
      o.push(i);
    if (i = r.shift(), i === void 0)
      return o.join("");
    s = !s;
  }
}
const Hr = (e) => e === "unset" || e === "undefined" || e === "none";
function Wr(e, t) {
  const n = {
    ...Xe,
    ...e
  }, r = {
    ...Sn,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
  [n, r].forEach((h) => {
    const _ = [], m = h.hFlip, C = h.vFlip;
    let v = h.rotate;
    m ? C ? v += 2 : (_.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), _.push("scale(-1 1)"), o.top = o.left = 0) : C && (_.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), _.push("scale(1 -1)"), o.top = o.left = 0);
    let P;
    switch (v < 0 && (v -= Math.floor(v / 4) * 4), v = v % 4, v) {
      case 1:
        P = o.height / 2 + o.top, _.unshift(
          "rotate(90 " + P.toString() + " " + P.toString() + ")"
        );
        break;
      case 2:
        _.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        P = o.width / 2 + o.left, _.unshift(
          "rotate(-90 " + P.toString() + " " + P.toString() + ")"
        );
        break;
    }
    v % 2 === 1 && (o.left !== o.top && (P = o.left, o.left = o.top, o.top = P), o.width !== o.height && (P = o.width, o.width = o.height, o.height = P)), _.length && (i = '<g transform="' + _.join(" ") + '">' + i + "</g>");
  });
  const s = r.width, a = r.height, l = o.width, u = o.height;
  let c, f;
  s === null ? (f = a === null ? "1em" : a === "auto" ? u : a, c = qt(f, l / u)) : (c = s === "auto" ? l : s, f = a === null ? qt(c, u / l) : a === "auto" ? u : a);
  const d = {}, g = (h, _) => {
    Hr(_) || (d[h] = _.toString());
  };
  return g("width", c), g("height", f), d.viewBox = o.left.toString() + " " + o.top.toString() + " " + l.toString() + " " + u.toString(), {
    attributes: d,
    body: i
  };
}
const Dr = /\sid="(\S+)"/g, Ur = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Zr = 0;
function qr(e, t = Ur) {
  const n = [];
  let r;
  for (; r = Dr.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const s = typeof t == "function" ? t(i) : t + (Zr++).toString(), a = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + s + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const ft = /* @__PURE__ */ Object.create(null);
function Qr(e, t) {
  ft[e] = t;
}
function dt(e) {
  return ft[e] || ft[""];
}
function jt(e) {
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
const Et = /* @__PURE__ */ Object.create(null), ye = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Fe = [];
for (; ye.length > 0; )
  ye.length === 1 || Math.random() > 0.5 ? Fe.push(ye.shift()) : Fe.push(ye.pop());
Et[""] = jt({
  resources: ["https://api.iconify.design"].concat(Fe)
});
function Jr(e, t) {
  const n = jt(t);
  return n === null ? !1 : (Et[e] = n, !0);
}
function Tt(e) {
  return Et[e];
}
const Xr = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Qt = Xr();
function Yr(e, t) {
  const n = Tt(e);
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
function Kr(e) {
  return e === 404;
}
const $r = (e, t, n) => {
  const r = [], o = Yr(e, t), i = "icons";
  let s = {
    type: i,
    provider: e,
    prefix: t,
    icons: []
  }, a = 0;
  return n.forEach((l, u) => {
    a += l.length + 1, a >= o && u > 0 && (r.push(s), s = {
      type: i,
      provider: e,
      prefix: t,
      icons: []
    }, a = l.length), s.icons.push(l);
  }), r.push(s), r;
};
function eo(e) {
  if (typeof e == "string") {
    const t = Tt(e);
    if (t)
      return t.path;
  }
  return "/";
}
const to = (e, t, n) => {
  if (!Qt) {
    n("abort", 424);
    return;
  }
  let r = eo(t.provider);
  switch (t.type) {
    case "icons": {
      const i = t.prefix, a = t.icons.join(","), l = new URLSearchParams({
        icons: a
      });
      r += i + ".json?" + l.toString();
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
  Qt(e + r).then((i) => {
    const s = i.status;
    if (s !== 200) {
      setTimeout(() => {
        n(Kr(s) ? "abort" : "next", s);
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
}, no = {
  prepare: $r,
  send: to
};
function ro(e) {
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
    const i = o.provider, s = o.prefix, a = o.name, l = n[i] || (n[i] = /* @__PURE__ */ Object.create(null)), u = l[s] || (l[s] = fe(i, s));
    let c;
    a in u.icons ? c = t.loaded : s === "" || u.missing.has(a) ? c = t.missing : c = t.pending;
    const f = {
      provider: i,
      prefix: s,
      name: a
    };
    c.push(f);
  }), t;
}
function In(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function oo(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let n = !1;
    const r = e.provider, o = e.prefix;
    t.forEach((i) => {
      const s = i.icons, a = s.pending.length;
      s.pending = s.pending.filter((l) => {
        if (l.prefix !== o)
          return !0;
        const u = l.name;
        if (e.icons[u])
          s.loaded.push({
            provider: r,
            prefix: o,
            name: u
          });
        else if (e.missing.has(u))
          s.missing.push({
            provider: r,
            prefix: o,
            name: u
          });
        else
          return n = !0, !0;
        return !1;
      }), s.pending.length !== a && (n || In([e], i.id), i.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let io = 0;
function so(e, t, n) {
  const r = io++, o = In.bind(null, n, r);
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
function lo(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? Je(o, t, n) : o;
    i && r.push(i);
  }), r;
}
var ao = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function co(e, t, n, r) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let s;
  if (e.random) {
    let p = e.resources.slice(0);
    for (s = []; p.length > 1; ) {
      const F = Math.floor(Math.random() * p.length);
      s.push(p[F]), p = p.slice(0, F).concat(p.slice(F + 1));
    }
    s = s.concat(p);
  } else
    s = e.resources.slice(i).concat(e.resources.slice(0, i));
  const a = Date.now();
  let l = "pending", u = 0, c, f = null, d = [], g = [];
  typeof r == "function" && g.push(r);
  function h() {
    f && (clearTimeout(f), f = null);
  }
  function _() {
    l === "pending" && (l = "aborted"), h(), d.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }), d = [];
  }
  function m(p, F) {
    F && (g = []), typeof p == "function" && g.push(p);
  }
  function C() {
    return {
      startTime: a,
      payload: t,
      status: l,
      queriesSent: u,
      queriesPending: d.length,
      subscribe: m,
      abort: _
    };
  }
  function v() {
    l = "failed", g.forEach((p) => {
      p(void 0, c);
    });
  }
  function P() {
    d.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }), d = [];
  }
  function X(p, F, $) {
    const te = F !== "success";
    switch (d = d.filter((Q) => Q !== p), l) {
      case "pending":
        break;
      case "failed":
        if (te || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (F === "abort") {
      c = $, v();
      return;
    }
    if (te) {
      c = $, d.length || (s.length ? N() : v());
      return;
    }
    if (h(), P(), !e.random) {
      const Q = e.resources.indexOf(p.resource);
      Q !== -1 && Q !== e.index && (e.index = Q);
    }
    l = "completed", g.forEach((Q) => {
      Q($);
    });
  }
  function N() {
    if (l !== "pending")
      return;
    h();
    const p = s.shift();
    if (p === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          h(), l === "pending" && (P(), v());
        }, e.timeout);
        return;
      }
      v();
      return;
    }
    const F = {
      status: "pending",
      resource: p,
      callback: ($, te) => {
        X(F, $, te);
      }
    };
    d.push(F), u++, f = setTimeout(N, e.rotate), n(p, t, F.callback);
  }
  return setTimeout(N), C;
}
function Mn(e) {
  const t = {
    ...ao,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, l, u) {
    const c = co(
      t,
      a,
      l,
      (f, d) => {
        r(), u && u(f, d);
      }
    );
    return n.push(c), c;
  }
  function i(a) {
    return n.find((l) => a(l)) || null;
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
function Jt() {
}
const nt = /* @__PURE__ */ Object.create(null);
function uo(e) {
  if (!nt[e]) {
    const t = Tt(e);
    if (!t)
      return;
    const n = Mn(t), r = {
      config: t,
      redundancy: n
    };
    nt[e] = r;
  }
  return nt[e];
}
function fo(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const i = dt(e);
    if (!i)
      return n(void 0, 424), Jt;
    o = i.send;
    const s = uo(e);
    s && (r = s.redundancy);
  } else {
    const i = jt(e);
    if (i) {
      r = Mn(i);
      const s = e.resources ? e.resources[0] : "", a = dt(s);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Jt) : r.query(t, o, n)().abort;
}
const Xt = "iconify2", Me = "iconify", An = Me + "-count", Yt = Me + "-version", jn = 36e5, po = 168;
function pt(e, t) {
  try {
    return e.getItem(t);
  } catch {
  }
}
function Pt(e, t, n) {
  try {
    return e.setItem(t, n), !0;
  } catch {
  }
}
function Kt(e, t) {
  try {
    e.removeItem(t);
  } catch {
  }
}
function gt(e, t) {
  return Pt(e, An, t.toString());
}
function ht(e) {
  return parseInt(pt(e, An)) || 0;
}
const Ye = {
  local: !0,
  session: !0
}, En = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Ot = !1;
function go(e) {
  Ot = e;
}
let Ne = typeof window > "u" ? {} : window;
function Tn(e) {
  const t = e + "Storage";
  try {
    if (Ne && Ne[t] && typeof Ne[t].length == "number")
      return Ne[t];
  } catch {
  }
  Ye[e] = !1;
}
function Pn(e, t) {
  const n = Tn(e);
  if (!n)
    return;
  const r = pt(n, Yt);
  if (r !== Xt) {
    if (r) {
      const a = ht(n);
      for (let l = 0; l < a; l++)
        Kt(n, Me + l.toString());
    }
    Pt(n, Yt, Xt), gt(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / jn) - po, i = (a) => {
    const l = Me + a.toString(), u = pt(n, l);
    if (typeof u == "string") {
      try {
        const c = JSON.parse(u);
        if (typeof c == "object" && typeof c.cached == "number" && c.cached > o && typeof c.provider == "string" && typeof c.data == "object" && typeof c.data.prefix == "string" && // Valid item: run callback
        t(c, a))
          return !0;
      } catch {
      }
      Kt(n, l);
    }
  };
  let s = ht(n);
  for (let a = s - 1; a >= 0; a--)
    i(a) || (a === s - 1 ? (s--, gt(n, s)) : En[e].add(a));
}
function On() {
  if (!Ot) {
    go(!0);
    for (const e in Ye)
      Pn(e, (t) => {
        const n = t.data, r = t.provider, o = n.prefix, i = fe(
          r,
          o
        );
        if (!At(i, n).length)
          return !1;
        const s = n.lastModified || -1;
        return i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, s) : s, !0;
      });
  }
}
function ho(e, t) {
  const n = e.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= t
  )
    return n === t;
  if (e.lastModifiedCached = t, n)
    for (const r in Ye)
      Pn(r, (o) => {
        const i = o.data;
        return o.provider !== e.provider || i.prefix !== e.prefix || i.lastModified === t;
      });
  return !0;
}
function mo(e, t) {
  Ot || On();
  function n(r) {
    let o;
    if (!Ye[r] || !(o = Tn(r)))
      return;
    const i = En[r];
    let s;
    if (i.size)
      i.delete(s = Array.from(i).shift());
    else if (s = ht(o), !gt(o, s + 1))
      return;
    const a = {
      cached: Math.floor(Date.now() / jn),
      provider: e.provider,
      data: t
    };
    return Pt(
      o,
      Me + s.toString(),
      JSON.stringify(a)
    );
  }
  t.lastModified && !ho(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"));
}
function $t() {
}
function bo(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, oo(e);
  }));
}
function vo(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    delete e.iconsToLoad;
    let i;
    if (!o || !(i = dt(n)))
      return;
    i.prepare(n, r, o).forEach((a) => {
      fo(n, a, (l) => {
        if (typeof l != "object")
          a.icons.forEach((u) => {
            e.missing.add(u);
          });
        else
          try {
            const u = At(
              e,
              l
            );
            if (!u.length)
              return;
            const c = e.pendingIcons;
            c && u.forEach((f) => {
              c.delete(f);
            }), mo(e, l);
          } catch (u) {
            console.error(u);
          }
        bo(e);
      });
    });
  }));
}
const yo = (e, t) => {
  const n = lo(e, !0, kn()), r = ro(n);
  if (!r.pending.length) {
    let l = !0;
    return t && setTimeout(() => {
      l && t(
        r.loaded,
        r.missing,
        r.pending,
        $t
      );
    }), () => {
      l = !1;
    };
  }
  const o = /* @__PURE__ */ Object.create(null), i = [];
  let s, a;
  return r.pending.forEach((l) => {
    const { provider: u, prefix: c } = l;
    if (c === a && u === s)
      return;
    s = u, a = c, i.push(fe(u, c));
    const f = o[u] || (o[u] = /* @__PURE__ */ Object.create(null));
    f[c] || (f[c] = []);
  }), r.pending.forEach((l) => {
    const { provider: u, prefix: c, name: f } = l, d = fe(u, c), g = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    g.has(f) || (g.add(f), o[u][c].push(f));
  }), i.forEach((l) => {
    const { provider: u, prefix: c } = l;
    o[u][c].length && vo(l, o[u][c]);
  }), t ? so(t, r, i) : $t;
};
function wo(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], i = typeof o;
    r in Cn ? (o === null || o && (i === "string" || i === "number")) && (n[r] = o) : i === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const _o = /[\s,]+/;
function xo(e, t) {
  t.split(_o).forEach((n) => {
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
function ko(e, t = 0) {
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
function Co(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function So(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Io(e) {
  return "data:image/svg+xml," + So(e);
}
function Mo(e) {
  return 'url("' + Io(e) + '")';
}
const en = {
  ...Sn,
  inline: !1
}, Ao = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, jo = {
  display: "inline-block"
}, mt = {
  "background-color": "currentColor"
}, Ln = {
  "background-color": "transparent"
}, tn = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, nn = {
  "-webkit-mask": mt,
  mask: mt,
  background: Ln
};
for (const e in nn) {
  const t = nn[e];
  for (const n in tn)
    t[e + "-" + n] = tn[n];
}
function Eo(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
function To(e, t) {
  const n = wo(en, t), r = t.mode || "svg", o = r === "svg" ? { ...Ao } : {};
  e.body.indexOf("xlink:") === -1 && delete o["xmlns:xlink"];
  let i = typeof t.style == "string" ? t.style : "";
  for (let C in t) {
    const v = t[C];
    if (v !== void 0)
      switch (C) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[C] = v === !0 || v === "true" || v === 1;
          break;
        case "flip":
          typeof v == "string" && xo(n, v);
          break;
        case "color":
          i = i + (i.length > 0 && i.trim().slice(-1) !== ";" ? ";" : "") + "color: " + v + "; ";
          break;
        case "rotate":
          typeof v == "string" ? n[C] = ko(v) : typeof v == "number" && (n[C] = v);
          break;
        case "ariaHidden":
        case "aria-hidden":
          v !== !0 && v !== "true" && delete o["aria-hidden"];
          break;
        default:
          if (C.slice(0, 3) === "on:")
            break;
          en[C] === void 0 && (o[C] = v);
      }
  }
  const s = Wr(e, n), a = s.attributes;
  if (n.inline && (i = "vertical-align: -0.125em; " + i), r === "svg") {
    Object.assign(o, a), i !== "" && (o.style = i);
    let C = 0, v = t.id;
    return typeof v == "string" && (v = v.replace(/-/g, "_")), {
      svg: !0,
      attributes: o,
      body: qr(s.body, v ? () => v + "ID" + C++ : "iconifySvelte")
    };
  }
  const { body: l, width: u, height: c } = e, f = r === "mask" || (r === "bg" ? !1 : l.indexOf("currentColor") !== -1), d = Co(l, {
    ...a,
    width: u + "",
    height: c + ""
  }), h = {
    "--svg": Mo(d)
  }, _ = (C) => {
    const v = a[C];
    v && (h[C] = Eo(v));
  };
  _("width"), _("height"), Object.assign(h, jo, f ? mt : Ln);
  let m = "";
  for (const C in h)
    m += C + ": " + h[C] + ";";
  return o.style = m + i, {
    svg: !1,
    attributes: o
  };
}
kn(!0);
Qr("", no);
if (typeof document < "u" && typeof window < "u") {
  On();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Br(r)) && console.error(n);
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
          Jr(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function Po(e, t, n, r, o) {
  function i() {
    t.loading && (t.loading.abort(), t.loading = null);
  }
  if (typeof e == "object" && e !== null && typeof e.body == "string")
    return t.name = "", i(), { data: { ...Xe, ...e } };
  let s;
  if (typeof e != "string" || (s = Je(e, !1, !0)) === null)
    return i(), null;
  const a = Gr(s);
  if (!a)
    return n && (!t.loading || t.loading.name !== e) && (i(), t.name = "", t.loading = {
      name: e,
      abort: yo([s], r)
    }), null;
  i(), t.name !== e && (t.name = e, o && !t.destroyed && o(e));
  const l = ["iconify"];
  return s.prefix !== "" && l.push("iconify--" + s.prefix), s.provider !== "" && l.push("iconify--" + s.provider), { data: a, classes: l };
}
function Oo(e, t) {
  return e ? To({
    ...Xe,
    ...e
  }, t) : null;
}
function rn(e) {
  let t;
  function n(i, s) {
    return (
      /*data*/
      i[0].svg ? zo : Lo
    );
  }
  let r = n(e), o = r(e);
  return {
    c() {
      o.c(), t = de();
    },
    m(i, s) {
      o.m(i, s), L(i, t, s);
    },
    p(i, s) {
      r === (r = n(i)) && o ? o.p(i, s) : (o.d(1), o = r(i), o && (o.c(), o.m(t.parentNode, t)));
    },
    d(i) {
      i && O(t), o.d(i);
    }
  };
}
function Lo(e) {
  let t, n = [
    /*data*/
    e[0].attributes
  ], r = {};
  for (let o = 0; o < n.length; o += 1)
    r = Y(r, n[o]);
  return {
    c() {
      t = x("span"), st(t, r);
    },
    m(o, i) {
      L(o, t, i);
    },
    p(o, i) {
      st(t, r = Pe(n, [i & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && O(t);
    }
  };
}
function zo(e) {
  let t, n = (
    /*data*/
    e[0].body + ""
  ), r = [
    /*data*/
    e[0].attributes
  ], o = {};
  for (let i = 0; i < r.length; i += 1)
    o = Y(o, r[i]);
  return {
    c() {
      t = Kn("svg"), Rt(t, o);
    },
    m(i, s) {
      L(i, t, s), t.innerHTML = n;
    },
    p(i, s) {
      s & /*data*/
      1 && n !== (n = /*data*/
      i[0].body + "") && (t.innerHTML = n), Rt(t, o = Pe(r, [s & /*data*/
      1 && /*data*/
      i[0].attributes]));
    },
    d(i) {
      i && O(t);
    }
  };
}
function No(e) {
  let t, n = (
    /*data*/
    e[0] && rn(e)
  );
  return {
    c() {
      n && n.c(), t = de();
    },
    m(r, o) {
      n && n.m(r, o), L(r, t, o);
    },
    p(r, [o]) {
      /*data*/
      r[0] ? n ? n.p(r, o) : (n = rn(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: V,
    o: V,
    d(r) {
      r && O(t), n && n.d(r);
    }
  };
}
function Go(e, t, n) {
  const r = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let o = !1, i = 0, s;
  const a = (u) => {
    typeof t.onLoad == "function" && t.onLoad(u), ve()("load", { icon: u });
  };
  function l() {
    n(3, i++, i);
  }
  return je(() => {
    n(2, o = !0);
  }), or(() => {
    n(1, r.destroyed = !0, r), r.loading && (r.loading.abort(), n(1, r.loading = null, r));
  }), e.$$set = (u) => {
    n(6, t = Y(Y({}, t), Ve(u)));
  }, e.$$.update = () => {
    {
      const u = Po(t.icon, r, o, l, a);
      n(0, s = u ? Oo(u.data, t) : null), s && u.classes && n(
        0,
        s.attributes.class = (typeof t.class == "string" ? t.class + " " : "") + u.classes.join(" "),
        s
      );
    }
  }, t = Ve(t), [s, r, o, i];
}
class Ro extends oe {
  constructor(t) {
    super(), re(this, t, Go, No, K, {});
  }
}
function zn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = zn(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Bo() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = zn(e)) && (r && (r += " "), r += t);
  return r;
}
function Fo() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Nn(t)) && (r && (r += " "), r += n);
  return r;
}
function Nn(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Nn(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Lt = "-";
function Vo(e) {
  var t = Wo(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function i(a) {
    var l = a.split(Lt);
    return l[0] === "" && l.length !== 1 && l.shift(), Gn(l, t) || Ho(a);
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
function Gn(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? Gn(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var i = e.join(Lt);
    return (s = t.validators.find(function(a) {
      var l = a.validator;
      return l(i);
    })) == null ? void 0 : s.classGroupId;
  }
}
var on = /^\[(.+)\]$/;
function Ho(e) {
  if (on.test(e)) {
    var t = on.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Wo(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = Uo(Object.entries(e.classGroups), n);
  return o.forEach(function(i) {
    var s = i[0], a = i[1];
    bt(a, r, s, t);
  }), r;
}
function bt(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : sn(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Do(o)) {
        bt(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(s) {
      var a = s[0], l = s[1];
      bt(l, sn(t, a), n, r);
    });
  });
}
function sn(e, t) {
  var n = e;
  return t.split(Lt).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Do(e) {
  return e.isThemeGetter;
}
function Uo(e, t) {
  return t ? e.map(function(n) {
    var r = n[0], o = n[1], i = o.map(function(s) {
      return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(a) {
        var l = a[0], u = a[1];
        return [t + l, u];
      })) : s;
    });
    return [r, i];
  }) : e;
}
function Zo(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(i, s) {
    n.set(i, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
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
var Rn = "!";
function qo(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], o = t.length;
  return function(s) {
    for (var a = [], l = 0, u = 0, c, f = 0; f < s.length; f++) {
      var d = s[f];
      if (l === 0) {
        if (d === r && (n || s.slice(f, f + o) === t)) {
          a.push(s.slice(u, f)), u = f + o;
          continue;
        }
        if (d === "/") {
          c = f;
          continue;
        }
      }
      d === "[" ? l++ : d === "]" && l--;
    }
    var g = a.length === 0 ? s : s.substring(u), h = g.startsWith(Rn), _ = h ? g.substring(1) : g, m = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: _,
      maybePostfixModifierPosition: m
    };
  };
}
function Qo(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function Jo(e) {
  return {
    cache: Zo(e.cacheSize),
    splitModifiers: qo(e),
    ...Vo(e)
  };
}
var Xo = /\s+/;
function Yo(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(Xo).map(function(s) {
    var a = n(s), l = a.modifiers, u = a.hasImportantModifier, c = a.baseClassName, f = a.maybePostfixModifierPosition, d = r(f ? c.substring(0, f) : c), g = !!f;
    if (!d) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (d = r(c), !d)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      g = !1;
    }
    var h = Qo(l).join(":"), _ = u ? h + Rn : h;
    return {
      isTailwindClass: !0,
      modifierId: _,
      classGroupId: d,
      originalClassName: s,
      hasPostfixModifier: g
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
function vt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, i, s = a;
  function a(u) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(g, h) {
      return h(g);
    }, c());
    return r = Jo(d), o = r.cache.get, i = r.cache.set, s = l, l(u);
  }
  function l(u) {
    var c = o(u);
    if (c)
      return c;
    var f = Yo(u, r);
    return i(u, f), f;
  }
  return function() {
    return s(Fo.apply(null, arguments));
  };
}
function T(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Bn = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ko = /^\d+\/\d+$/, $o = /* @__PURE__ */ new Set(["px", "full", "screen"]), ei = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ti = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ni = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ee(e) {
  return ue(e) || $o.has(e) || Ko.test(e) || yt(e);
}
function yt(e) {
  return pe(e, "length", ai);
}
function ri(e) {
  return pe(e, "size", Fn);
}
function oi(e) {
  return pe(e, "position", Fn);
}
function ii(e) {
  return pe(e, "url", ci);
}
function Ge(e) {
  return pe(e, "number", ue);
}
function ue(e) {
  return !Number.isNaN(Number(e));
}
function si(e) {
  return e.endsWith("%") && ue(e.slice(0, -1));
}
function we(e) {
  return ln(e) || pe(e, "number", ln);
}
function I(e) {
  return Bn.test(e);
}
function _e() {
  return !0;
}
function le(e) {
  return ei.test(e);
}
function li(e) {
  return pe(e, "", ui);
}
function pe(e, t, n) {
  var r = Bn.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function ai(e) {
  return ti.test(e);
}
function Fn() {
  return !1;
}
function ci(e) {
  return e.startsWith("url(");
}
function ln(e) {
  return Number.isInteger(Number(e));
}
function ui(e) {
  return ni.test(e);
}
function wt() {
  var e = T("colors"), t = T("spacing"), n = T("blur"), r = T("brightness"), o = T("borderColor"), i = T("borderRadius"), s = T("borderSpacing"), a = T("borderWidth"), l = T("contrast"), u = T("grayscale"), c = T("hueRotate"), f = T("invert"), d = T("gap"), g = T("gradientColorStops"), h = T("gradientColorStopPositions"), _ = T("inset"), m = T("margin"), C = T("opacity"), v = T("padding"), P = T("saturate"), X = T("scale"), N = T("sepia"), p = T("skew"), F = T("space"), $ = T("translate"), te = function() {
    return ["auto", "contain", "none"];
  }, Q = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, k = function() {
    return ["auto", I, t];
  }, b = function() {
    return [I, t];
  }, S = function() {
    return ["", ee];
  }, M = function() {
    return ["auto", ue, I];
  }, A = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, j = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, E = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, G = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, R = function() {
    return ["", "0", I];
  }, ie = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, U = function() {
    return [ue, Ge];
  }, se = function() {
    return [ue, I];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [_e],
      spacing: [ee],
      blur: ["none", "", le, I],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", le, I],
      borderSpacing: b(),
      borderWidth: S(),
      contrast: U(),
      grayscale: R(),
      hueRotate: se(),
      invert: R(),
      gap: b(),
      gradientColorStops: [e],
      gradientColorStopPositions: [si, yt],
      inset: k(),
      margin: k(),
      opacity: U(),
      padding: b(),
      saturate: U(),
      scale: U(),
      sepia: R(),
      skew: se(),
      space: b(),
      translate: b()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", I]
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
        columns: [le]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ie()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ie()
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
        object: [].concat(A(), [I])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Q()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Q()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Q()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: te()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": te()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": te()
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
        inset: [_]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [_]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [_]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [_]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [_]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [_]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [_]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [_]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [_]
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
        z: ["auto", we]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: k()
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
        flex: ["1", "auto", "initial", "none", I]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: R()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: R()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", we]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [_e]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", we]
        }, I]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": M()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": M()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [_e]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [we]
        }, I]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": M()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": M()
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
        "auto-cols": ["auto", "min", "max", "fr", I]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", I]
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
        justify: ["normal"].concat(G())
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
        content: ["normal"].concat(G(), ["baseline"])
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
        "place-content": [].concat(G(), ["baseline"])
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
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [m]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [m]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [m]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [m]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [m]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [m]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [m]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [m]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [m]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [F]
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
        "space-y": [F]
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
        w: ["auto", "min", "max", "fit", I, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", I, ee]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [le]
        }, le, I]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [I, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", I, ee]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [I, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", le, yt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ge]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_e]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", I]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ue, Ge]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", I, ee]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", I]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", I]
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
        "placeholder-opacity": [C]
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
        "text-opacity": [C]
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
        decoration: [].concat(j(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ee]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", I, ee]
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
        indent: b()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", I]
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
        content: ["none", I]
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
        "bg-opacity": [C]
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
        bg: [].concat(A(), [oi])
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
        bg: ["auto", "cover", "contain", ri]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ii]
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
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(j(), ["hidden"])
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
        "divide-opacity": [C]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: j()
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
        outline: [""].concat(j())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [I, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ee]
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
        ring: S()
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
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ee]
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
        shadow: ["", "inner", "none", le, li]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [_e]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": E()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": E()
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
        "drop-shadow": ["", "none", le, I]
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
        saturate: [P]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [N]
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
        "backdrop-opacity": [C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [P]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [N]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", I]
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
        ease: ["linear", "in", "out", "in-out", I]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", I]
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
        scale: [X]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [X]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [X]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [we, I]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [$]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [$]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [p]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [p]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", I]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", I]
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
        "scroll-m": b()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": b()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": b()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": b()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": b()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": b()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": b()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": b()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": b()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": b()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": b()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": b()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": b()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": b()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": b()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": b()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": b()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": b()
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
        "will-change": ["auto", "scroll", "contents", "transform", I]
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
        stroke: [ee, Ge]
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
function fi(e, t) {
  for (var n in t)
    Vn(e, n, t[n]);
  return e;
}
var di = Object.prototype.hasOwnProperty, pi = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function Vn(e, t, n) {
  if (!di.call(e, t) || pi.has(typeof n) || n === null) {
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
      Vn(e[t], r, n[r]);
  }
}
function gi(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? vt.apply(void 0, [wt, e].concat(n)) : vt.apply(void 0, [function() {
    return fi(wt(), e);
  }].concat(n));
}
var Hn = /* @__PURE__ */ vt(wt);
function Ue(...e) {
  return Hn(Bo(e));
}
function hi(e, t) {
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
function an(e) {
  const t = {};
  return e.forEach((n) => {
    Object.keys(n).forEach((r) => {
      r !== "action" && (t[r] = n[r]);
    });
  }), t;
}
function mi(e) {
  let t = (
    /*href*/
    e[0] ? "a" : "button"
  ), n, r, o = (
    /*href*/
    (e[0] ? "a" : "button") && rt(e)
  );
  return {
    c() {
      o && o.c(), n = de();
    },
    m(i, s) {
      o && o.m(i, s), L(i, n, s), r = !0;
    },
    p(i, s) {
      /*href*/
      i[0], t ? K(
        t,
        /*href*/
        i[0] ? "a" : "button"
      ) ? (o.d(1), o = rt(i), t = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n)) : o.p(i, s) : (o = rt(i), t = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n));
    },
    i(i) {
      r || (z(o, i), r = !0);
    },
    o(i) {
      B(o, i), r = !1;
    },
    d(i) {
      i && O(n), o && o.d(i);
    }
  };
}
function bi(e) {
  let t = (
    /*href*/
    e[0] ? "a" : "button"
  ), n, r, o = (
    /*href*/
    (e[0] ? "a" : "button") && ot(e)
  );
  return {
    c() {
      o && o.c(), n = de();
    },
    m(i, s) {
      o && o.m(i, s), L(i, n, s), r = !0;
    },
    p(i, s) {
      /*href*/
      i[0], t ? K(
        t,
        /*href*/
        i[0] ? "a" : "button"
      ) ? (o.d(1), o = ot(i), t = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n)) : o.p(i, s) : (o = ot(i), t = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n));
    },
    i(i) {
      r || (z(o, i), r = !0);
    },
    o(i) {
      B(o, i), r = !1;
    },
    d(i) {
      i && O(n), o && o.d(i);
    }
  };
}
function rt(e) {
  let t, n, r, o, i;
  const s = (
    /*#slots*/
    e[5].default
  ), a = xt(
    s,
    e,
    /*$$scope*/
    e[4],
    null
  );
  let l = [
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
  for (let c = 0; c < l.length; c += 1)
    u = Y(u, l[c]);
  return {
    c() {
      t = x(
        /*href*/
        e[0] ? "a" : "button"
      ), a && a.c(), We(
        /*href*/
        e[0] ? "a" : "button"
      )(t, u);
    },
    m(c, f) {
      L(c, t, f), a && a.m(t, null), r = !0, o || (i = [
        q(
          t,
          "click",
          /*click_handler_1*/
          e[12]
        ),
        q(
          t,
          "change",
          /*change_handler_1*/
          e[13]
        ),
        q(
          t,
          "keydown",
          /*keydown_handler_1*/
          e[14]
        ),
        q(
          t,
          "keyup",
          /*keyup_handler_1*/
          e[15]
        ),
        q(
          t,
          "mouseenter",
          /*mouseenter_handler_1*/
          e[16]
        ),
        q(
          t,
          "mouseleave",
          /*mouseleave_handler_1*/
          e[17]
        )
      ], o = !0);
    },
    p(c, f) {
      a && a.p && (!r || f & /*$$scope*/
      16) && Ct(
        a,
        s,
        c,
        /*$$scope*/
        c[4],
        r ? kt(
          s,
          /*$$scope*/
          c[4],
          f,
          null
        ) : St(
          /*$$scope*/
          c[4]
        ),
        null
      ), We(
        /*href*/
        c[0] ? "a" : "button"
      )(t, u = Pe(l, [
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
      r || (z(a, c), r = !0);
    },
    o(c) {
      B(a, c), r = !1;
    },
    d(c) {
      c && O(t), a && a.d(c), o = !1, ae(i);
    }
  };
}
function ot(e) {
  let t, n, r, o, i, s;
  const a = (
    /*#slots*/
    e[5].default
  ), l = xt(
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
    an(
      /*builders*/
      e[2]
    ),
    /*$$restProps*/
    e[3]
  ], c = {};
  for (let f = 0; f < u.length; f += 1)
    c = Y(c, u[f]);
  return {
    c() {
      t = x(
        /*href*/
        e[0] ? "a" : "button"
      ), l && l.c(), We(
        /*href*/
        e[0] ? "a" : "button"
      )(t, c);
    },
    m(f, d) {
      L(f, t, d), l && l.m(t, null), o = !0, i || (s = [
        q(
          t,
          "click",
          /*click_handler*/
          e[6]
        ),
        q(
          t,
          "change",
          /*change_handler*/
          e[7]
        ),
        q(
          t,
          "keydown",
          /*keydown_handler*/
          e[8]
        ),
        q(
          t,
          "keyup",
          /*keyup_handler*/
          e[9]
        ),
        q(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        q(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[11]
        ),
        Yn(r = hi.call(null, t, { builders: (
          /*builders*/
          e[2]
        ) }))
      ], i = !0);
    },
    p(f, d) {
      l && l.p && (!o || d & /*$$scope*/
      16) && Ct(
        l,
        a,
        f,
        /*$$scope*/
        f[4],
        o ? kt(
          a,
          /*$$scope*/
          f[4],
          d,
          null
        ) : St(
          /*$$scope*/
          f[4]
        ),
        null
      ), We(
        /*href*/
        f[0] ? "a" : "button"
      )(t, c = Pe(u, [
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
        4 && an(
          /*builders*/
          f[2]
        ),
        d & /*$$restProps*/
        8 && /*$$restProps*/
        f[3]
      ])), r && Ae(r.update) && d & /*builders*/
      4 && r.update.call(null, { builders: (
        /*builders*/
        f[2]
      ) });
    },
    i(f) {
      o || (z(l, f), o = !0);
    },
    o(f) {
      B(l, f), o = !1;
    },
    d(f) {
      f && O(t), l && l.d(f), i = !1, ae(s);
    }
  };
}
function vi(e) {
  let t, n, r, o;
  const i = [bi, mi], s = [];
  function a(l, u) {
    return (
      /*builders*/
      l[2] && /*builders*/
      l[2].length ? 0 : 1
    );
  }
  return t = a(e), n = s[t] = i[t](e), {
    c() {
      n.c(), r = de();
    },
    m(l, u) {
      s[t].m(l, u), L(l, r, u), o = !0;
    },
    p(l, [u]) {
      let c = t;
      t = a(l), t === c ? s[t].p(l, u) : (Ee(), B(s[c], 1, 1, () => {
        s[c] = null;
      }), Te(), n = s[t], n ? n.p(l, u) : (n = s[t] = i[t](l), n.c()), z(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      o || (z(n), o = !0);
    },
    o(l) {
      B(n), o = !1;
    },
    d(l) {
      l && O(r), s[t].d(l);
    }
  };
}
function yi(e, t, n) {
  const r = ["href", "type", "builders"];
  let o = He(t, r), { $$slots: i = {}, $$scope: s } = t, { href: a = void 0 } = t, { type: l = void 0 } = t, { builders: u = [] } = t;
  function c(p) {
    Z.call(this, e, p);
  }
  function f(p) {
    Z.call(this, e, p);
  }
  function d(p) {
    Z.call(this, e, p);
  }
  function g(p) {
    Z.call(this, e, p);
  }
  function h(p) {
    Z.call(this, e, p);
  }
  function _(p) {
    Z.call(this, e, p);
  }
  function m(p) {
    Z.call(this, e, p);
  }
  function C(p) {
    Z.call(this, e, p);
  }
  function v(p) {
    Z.call(this, e, p);
  }
  function P(p) {
    Z.call(this, e, p);
  }
  function X(p) {
    Z.call(this, e, p);
  }
  function N(p) {
    Z.call(this, e, p);
  }
  return e.$$set = (p) => {
    t = Y(Y({}, t), Ve(p)), n(3, o = He(t, r)), "href" in p && n(0, a = p.href), "type" in p && n(1, l = p.type), "builders" in p && n(2, u = p.builders), "$$scope" in p && n(4, s = p.$$scope);
  }, [
    a,
    l,
    u,
    o,
    s,
    i,
    c,
    f,
    d,
    g,
    h,
    _,
    m,
    C,
    v,
    P,
    X,
    N
  ];
}
let wi = class extends oe {
  constructor(t) {
    super(), re(this, t, yi, vi, K, { href: 0, type: 1, builders: 2 });
  }
};
function _i(e) {
  let t;
  const n = (
    /*#slots*/
    e[5].default
  ), r = xt(
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
      256) && Ct(
        r,
        n,
        o,
        /*$$scope*/
        o[8],
        t ? kt(
          n,
          /*$$scope*/
          o[8],
          i,
          null
        ) : St(
          /*$$scope*/
          o[8]
        ),
        null
      );
    },
    i(o) {
      t || (z(r, o), t = !0);
    },
    o(o) {
      B(r, o), t = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function xi(e) {
  let t, n;
  const r = [
    { builders: (
      /*builders*/
      e[3]
    ) },
    {
      class: Ue(dn({
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
    $$slots: { default: [_i] },
    $$scope: { ctx: e }
  };
  for (let i = 0; i < r.length; i += 1)
    o = Y(o, r[i]);
  return t = new wi({ props: o }), t.$on(
    "click",
    /*click_handler*/
    e[6]
  ), t.$on(
    "keydown",
    /*keydown_handler*/
    e[7]
  ), {
    c() {
      Qe(t.$$.fragment);
    },
    m(i, s) {
      Oe(t, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*builders, cn, buttonVariants, variant, size, className, $$restProps*/
      31 ? Pe(r, [
        s & /*builders*/
        8 && { builders: (
          /*builders*/
          i[3]
        ) },
        s & /*cn, buttonVariants, variant, size, className*/
        7 && {
          class: Ue(dn({
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
        16 && cr(
          /*$$restProps*/
          i[4]
        )
      ]) : {};
      s & /*$$scope*/
      256 && (a.$$scope = { dirty: s, ctx: i }), t.$set(a);
    },
    i(i) {
      n || (z(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Le(t, i);
    }
  };
}
function ki(e, t, n) {
  const r = ["class", "variant", "size", "builders"];
  let o = He(t, r), { $$slots: i = {}, $$scope: s } = t, { class: a = void 0 } = t, { variant: l = "default" } = t, { size: u = "default" } = t, { builders: c = [] } = t;
  function f(g) {
    Z.call(this, e, g);
  }
  function d(g) {
    Z.call(this, e, g);
  }
  return e.$$set = (g) => {
    t = Y(Y({}, t), Ve(g)), n(4, o = He(t, r)), "class" in g && n(0, a = g.class), "variant" in g && n(1, l = g.variant), "size" in g && n(2, u = g.size), "builders" in g && n(3, c = g.builders), "$$scope" in g && n(8, s = g.$$scope);
  }, [
    a,
    l,
    u,
    c,
    o,
    i,
    f,
    d,
    s
  ];
}
class Ci extends oe {
  constructor(t) {
    super(), re(this, t, ki, xi, K, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
}
var cn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, D = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Si = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Wn(e, t) {
  e.forEach(function(n) {
    Array.isArray(n) ? Wn(n, t) : t.push(n);
  });
}
function Dn(e) {
  let t = [];
  return Wn(e, t), t;
}
var Ii = (...e) => Dn(e).filter(Boolean), Un = (e, t) => {
  let n = {}, r = Object.keys(e), o = Object.keys(t);
  for (let i of r)
    if (o.includes(i)) {
      let s = e[i], a = t[i];
      typeof s == "object" && typeof a == "object" ? n[i] = Un(s, a) : n[i] = a + " " + s;
    } else
      n[i] = e[i];
  for (let i of o)
    r.includes(i) || (n[i] = t[i]);
  return n;
}, un = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), Mi = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Zn = (e) => e || void 0, Ze = (...e) => Zn(Dn(e).filter(Boolean).join(" ")), it = null, qe = {}, _t = !1, xe = (...e) => (t) => t.twMerge ? ((!it || _t) && (_t = !1, it = D(qe) ? Hn : gi(qe)), Zn(it(Ze(e)))) : Ze(e), fn = (e, t) => {
  for (let n in t)
    e.hasOwnProperty(n) ? e[n] = Ze(e[n], t[n]) : e[n] = t[n];
  return e;
}, Ai = (e, t) => {
  let { extend: n = null, slots: r = {}, variants: o = {}, compoundVariants: i = [], compoundSlots: s = [], defaultVariants: a = {} } = e, l = { ...Mi, ...t }, u = n != null && n.base ? Ze(n.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, c = n != null && n.variants && !D(n.variants) ? Un(o, n.variants) : o, f = n != null && n.defaultVariants && !D(n.defaultVariants) ? { ...n.defaultVariants, ...a } : a;
  !D(l.twMergeConfig) && !Si(l.twMergeConfig, qe) && (_t = !0, qe = l.twMergeConfig);
  let d = D(r) ? {} : { base: e == null ? void 0 : e.base, ...r }, g = D(n == null ? void 0 : n.slots) ? d : fn(n == null ? void 0 : n.slots, D(d) ? { base: e == null ? void 0 : e.base } : d), h = (m) => {
    if (D(c) && D(r) && D(n == null ? void 0 : n.slots))
      return xe(u, m == null ? void 0 : m.class, m == null ? void 0 : m.className)(l);
    if (i && !Array.isArray(i))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof i}`);
    if (s && !Array.isArray(s))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
    let C = (k, b, S = [], M) => {
      let A = S;
      if (typeof b == "string")
        A = A.concat(un(b).split(" ").map((j) => `${k}:${j}`));
      else if (Array.isArray(b))
        A = A.concat(b.reduce((j, E) => j.concat(`${k}:${E}`), []));
      else if (typeof b == "object" && typeof M == "string") {
        for (let j in b)
          if (b.hasOwnProperty(j) && j === M) {
            let E = b[j];
            if (E && typeof E == "string") {
              let G = un(E);
              A[M] ? A[M] = A[M].concat(G.split(" ").map((R) => `${k}:${R}`)) : A[M] = G.split(" ").map((R) => `${k}:${R}`);
            } else
              Array.isArray(E) && E.length > 0 && (A[M] = E.reduce((G, R) => G.concat(`${k}:${R}`), []));
          }
      }
      return A;
    }, v = (k, b = c, S = null, M = null) => {
      var A;
      let j = b[k];
      if (!j || D(j))
        return null;
      let E = (A = M == null ? void 0 : M[k]) != null ? A : m == null ? void 0 : m[k];
      if (E === null)
        return null;
      let G = cn(E), R = Array.isArray(l.responsiveVariants) && l.responsiveVariants.length > 0 || l.responsiveVariants === !0, ie = f == null ? void 0 : f[k], U = [];
      if (typeof G == "object" && R)
        for (let [H, zt] of Object.entries(G)) {
          let qn = j[zt];
          if (H === "initial") {
            ie = zt;
            continue;
          }
          Array.isArray(l.responsiveVariants) && !l.responsiveVariants.includes(H) || (U = C(H, qn, U, S));
        }
      let se = j[G] || j[cn(ie)];
      return typeof U == "object" && typeof S == "string" && U[S] ? fn(U, se) : U.length > 0 ? (U.push(se), U) : se;
    }, P = () => c ? Object.keys(c).map((k) => v(k, c)) : null, X = (k, b) => {
      if (!c || typeof c != "object")
        return null;
      let S = new Array();
      for (let M in c) {
        let A = v(M, c, k, b), j = k === "base" && typeof A == "string" ? A : A && A[k];
        j && (S[S.length] = j);
      }
      return S;
    }, N = {};
    for (let k in m)
      m[k] !== void 0 && (N[k] = m[k]);
    let p = (k, b) => {
      var S;
      let M = typeof (m == null ? void 0 : m[k]) == "object" ? { [k]: (S = m[k]) == null ? void 0 : S.initial } : {};
      return { ...f, ...N, ...M, ...b };
    }, F = (k = [], b) => {
      let S = [];
      for (let { class: M, className: A, ...j } of k) {
        let E = !0;
        for (let [G, R] of Object.entries(j)) {
          let ie = p(G, b);
          if (Array.isArray(R)) {
            if (!R.includes(ie[G])) {
              E = !1;
              break;
            }
          } else if (ie[G] !== R) {
            E = !1;
            break;
          }
        }
        E && (M && S.push(M), A && S.push(A));
      }
      return S;
    }, $ = (k) => {
      let b = F(i, k), S = F(n == null ? void 0 : n.compoundVariants, k);
      return Ii(S, b);
    }, te = (k) => {
      let b = $(k);
      if (!Array.isArray(b))
        return b;
      let S = {};
      for (let M of b)
        if (typeof M == "string" && (S.base = xe(S.base, M)(l)), typeof M == "object")
          for (let [A, j] of Object.entries(M))
            S[A] = xe(S[A], j)(l);
      return S;
    }, Q = (k) => {
      if (s.length < 1)
        return null;
      let b = {};
      for (let { slots: S = [], class: M, className: A, ...j } of s) {
        if (!D(j)) {
          let E = !0;
          for (let G of Object.keys(j)) {
            let R = p(G, k)[G];
            if (R === void 0 || R !== j[G]) {
              E = !1;
              break;
            }
          }
          if (!E)
            continue;
        }
        for (let E of S)
          b[E] = b[E] || [], b[E].push([M, A]);
      }
      return b;
    };
    if (!D(r) || !D(n == null ? void 0 : n.slots)) {
      let k = {};
      if (typeof g == "object" && !D(g))
        for (let b of Object.keys(g))
          k[b] = (S) => {
            var M, A;
            return xe(g[b], X(b, S), ((M = te(S)) != null ? M : [])[b], ((A = Q(S)) != null ? A : [])[b], S == null ? void 0 : S.class, S == null ? void 0 : S.className)(l);
          };
      return k;
    }
    return xe(u, P(), $(), m == null ? void 0 : m.class, m == null ? void 0 : m.className)(l);
  }, _ = () => {
    if (!(!c || typeof c != "object"))
      return Object.keys(c);
  };
  return h.variantKeys = _(), h.extend = n, h.base = u, h.slots = g, h.variants = c, h.defaultVariants = f, h.compoundSlots = s, h.compoundVariants = i, h;
};
const dn = Ai({
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
function gn(e, t, n) {
  const r = e.slice();
  return r[3] = t[n].title, r[7] = t[n].icon, r[8] = t[n].url, r[10] = n, r;
}
function ji(e) {
  let t, n, r = (
    /*title*/
    e[3] + ""
  ), o, i, s;
  return t = new Ro({
    props: {
      class: "mr-2 h-4 w-4",
      icon: (
        /*icon*/
        e[7]
      )
    }
  }), {
    c() {
      Qe(t.$$.fragment), n = W(), o = J(r), i = W();
    },
    m(a, l) {
      Oe(t, a, l), L(a, n, l), L(a, o, l), L(a, i, l), s = !0;
    },
    p(a, l) {
      const u = {};
      l & /*menus*/
      2 && (u.icon = /*icon*/
      a[7]), t.$set(u), (!s || l & /*menus*/
      2) && r !== (r = /*title*/
      a[3] + "") && ne(o, r);
    },
    i(a) {
      s || (z(t.$$.fragment, a), s = !0);
    },
    o(a) {
      B(t.$$.fragment, a), s = !1;
    },
    d(a) {
      a && (O(n), O(o), O(i)), Le(t, a);
    }
  };
}
function hn(e) {
  let t, n;
  return t = new Ci({
    props: {
      variant: "secondary",
      class: "w-full justify-start",
      $$slots: { default: [ji] },
      $$scope: { ctx: e }
    }
  }), t.$on("click", function() {
    Ae(
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
      Qe(t.$$.fragment);
    },
    m(r, o) {
      Oe(t, r, o), n = !0;
    },
    p(r, o) {
      e = r;
      const i = {};
      o & /*$$scope, menus*/
      2050 && (i.$$scope = { dirty: o, ctx: e }), t.$set(i);
    },
    i(r) {
      n || (z(t.$$.fragment, r), n = !0);
    },
    o(r) {
      B(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Le(t, r);
    }
  };
}
function mn(e) {
  let t, n, r = (
    /*title*/
    e[3] + ""
  ), o, i, s, a, l, u = be(
    /*items*/
    e[4]
  ), c = [];
  for (let d = 0; d < u.length; d += 1)
    c[d] = hn(gn(e, u, d));
  const f = (d) => B(c[d], 1, 1, () => {
    c[d] = null;
  });
  return {
    c() {
      t = x("div"), n = x("h2"), o = J(r), i = W(), s = x("div");
      for (let d = 0; d < c.length; d += 1)
        c[d].c();
      a = W(), w(n, "class", "mb-2 px-4 text-lg font-semibold tracking-tight"), w(s, "class", "space-y-1"), w(t, "class", "px-3 py-2");
    },
    m(d, g) {
      L(d, t, g), y(t, n), y(n, o), y(t, i), y(t, s);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(s, null);
      y(t, a), l = !0;
    },
    p(d, g) {
      if ((!l || g & /*menus*/
      2) && r !== (r = /*title*/
      d[3] + "") && ne(o, r), g & /*onClick, menus*/
      6) {
        u = be(
          /*items*/
          d[4]
        );
        let h;
        for (h = 0; h < u.length; h += 1) {
          const _ = gn(d, u, h);
          c[h] ? (c[h].p(_, g), z(c[h], 1)) : (c[h] = hn(_), c[h].c(), z(c[h], 1), c[h].m(s, null));
        }
        for (Ee(), h = u.length; h < c.length; h += 1)
          f(h);
        Te();
      }
    },
    i(d) {
      if (!l) {
        for (let g = 0; g < u.length; g += 1)
          z(c[g]);
        l = !0;
      }
    },
    o(d) {
      c = c.filter(Boolean);
      for (let g = 0; g < c.length; g += 1)
        B(c[g]);
      l = !1;
    },
    d(d) {
      d && O(t), It(c, d);
    }
  };
}
function Ei(e) {
  let t, n, r, o, i = be(
    /*menus*/
    e[1]
  ), s = [];
  for (let l = 0; l < i.length; l += 1)
    s[l] = mn(pn(e, i, l));
  const a = (l) => B(s[l], 1, 1, () => {
    s[l] = null;
  });
  return {
    c() {
      t = x("div"), n = x("div");
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      w(n, "class", "space-y-4 py-4"), w(t, "class", r = Ue(
        "pb-12",
        /*className*/
        e[0]
      ));
    },
    m(l, u) {
      L(l, t, u), y(t, n);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(n, null);
      o = !0;
    },
    p(l, [u]) {
      if (u & /*menus, onClick*/
      6) {
        i = be(
          /*menus*/
          l[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = pn(l, i, c);
          s[c] ? (s[c].p(f, u), z(s[c], 1)) : (s[c] = mn(f), s[c].c(), z(s[c], 1), s[c].m(n, null));
        }
        for (Ee(), c = i.length; c < s.length; c += 1)
          a(c);
        Te();
      }
      (!o || u & /*className*/
      1 && r !== (r = Ue(
        "pb-12",
        /*className*/
        l[0]
      ))) && w(t, "class", r);
    },
    i(l) {
      if (!o) {
        for (let u = 0; u < i.length; u += 1)
          z(s[u]);
        o = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let u = 0; u < s.length; u += 1)
        B(s[u]);
      o = !1;
    },
    d(l) {
      l && O(t), It(s, l);
    }
  };
}
function Ti(e, t, n) {
  let { class: r = void 0 } = t, { menus: o = [] } = t, { onClick: i = (s) => {
    console.log(s);
  } } = t;
  return e.$$set = (s) => {
    "class" in s && n(0, r = s.class), "menus" in s && n(1, o = s.menus), "onClick" in s && n(2, i = s.onClick);
  }, [r, o, i];
}
class Gi extends oe {
  constructor(t) {
    super(), re(this, t, Ti, Ei, K, { class: 0, menus: 1, onClick: 2 });
  }
}
export {
  Er as Grid,
  Gi as Sidebar,
  zi as confirm,
  Li as notify
};
