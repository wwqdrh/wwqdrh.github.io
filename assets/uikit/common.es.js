var ui = Object.defineProperty;
var ci = (e, t, n) => t in e ? ui(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var rt = (e, t, n) => (ci(e, typeof t != "symbol" ? t + "" : t, n), n);
function D() {
}
function re(e, t) {
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
function Ft() {
  return /* @__PURE__ */ Object.create(null);
}
function he(e) {
  e.forEach(Tn);
}
function Be(e) {
  return typeof e == "function";
}
function Y(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let Ve;
function Qe(e, t) {
  return e === t ? !0 : (Ve || (Ve = document.createElement("a")), Ve.href = t, e === Ve.href);
}
function ai(e) {
  return Object.keys(e).length === 0;
}
function Mt(e, t, n, i) {
  if (e) {
    const r = En(e, t, n, i);
    return e[0](r);
  }
}
function En(e, t, n, i) {
  return e[1] && i ? re(n.ctx.slice(), e[1](i(t))) : n.ctx;
}
function At(e, t, n, i) {
  if (e[2] && i) {
    const r = e[2](i(n));
    if (t.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const o = [], l = Math.max(t.dirty.length, r.length);
      for (let u = 0; u < l; u += 1)
        o[u] = t.dirty[u] | r[u];
      return o;
    }
    return t.dirty | r;
  }
  return t.dirty;
}
function jt(e, t, n, i, r, o) {
  if (r) {
    const l = En(t, n, i, o);
    e.p(l, r);
  }
}
function Tt(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let i = 0; i < n; i++)
      t[i] = -1;
    return t;
  }
  return -1;
}
function Je(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function Xe(e, t) {
  const n = {};
  t = new Set(t);
  for (const i in e)
    !t.has(i) && i[0] !== "$" && (n[i] = e[i]);
  return n;
}
function Vt(e) {
  return e ?? "";
}
function fi(e) {
  return e && Be(e.destroy) ? e.destroy : D;
}
function p(e, t) {
  e.appendChild(t);
}
function z(e, t, n) {
  e.insertBefore(t, n || null);
}
function O(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function pe(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function w(e) {
  return document.createElement(e);
}
function di(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function F(e) {
  return document.createTextNode(e);
}
function P() {
  return F(" ");
}
function me() {
  return F("");
}
function J(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function k(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const gi = ["width", "height"];
function dt(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const i in t)
    t[i] == null ? e.removeAttribute(i) : i === "style" ? e.style.cssText = t[i] : i === "__value" ? e.value = e[i] = t[i] : n[i] && n[i].set && gi.indexOf(i) === -1 ? e[i] = t[i] : k(e, i, t[i]);
}
function Wt(e, t) {
  for (const n in t)
    k(e, n, t[n]);
}
function hi(e, t) {
  Object.keys(t).forEach((n) => {
    pi(e, n, t[n]);
  });
}
function pi(e, t, n) {
  t in e ? e[t] = typeof e[t] == "boolean" && n === "" ? !0 : n : k(e, t, n);
}
function Ye(e) {
  return /-/.test(e) ? hi : dt;
}
function mi(e) {
  return Array.from(e.childNodes);
}
function H(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Se(e, t, n, i) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "");
}
function bi(e, t, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: i });
}
let Oe;
function Ee(e) {
  Oe = e;
}
function Et() {
  if (!Oe)
    throw new Error("Function called outside component initialization");
  return Oe;
}
function Ge(e) {
  Et().$$.on_mount.push(e);
}
function ki(e) {
  Et().$$.on_destroy.push(e);
}
function Ie() {
  const e = Et();
  return (t, n, { cancelable: i = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const o = bi(
        /** @type {string} */
        t,
        n,
        { cancelable: i }
      );
      return r.slice().forEach((l) => {
        l.call(e, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function ie(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((i) => i.call(this, t));
}
const xe = [], ze = [];
let Ce = [];
const Ht = [], vi = /* @__PURE__ */ Promise.resolve();
let gt = !1;
function yi() {
  gt || (gt = !0, vi.then(Pn));
}
function ht(e) {
  Ce.push(e);
}
const ot = /* @__PURE__ */ new Set();
let _e = 0;
function Pn() {
  if (_e !== 0)
    return;
  const e = Oe;
  do {
    try {
      for (; _e < xe.length; ) {
        const t = xe[_e];
        _e++, Ee(t), wi(t.$$);
      }
    } catch (t) {
      throw xe.length = 0, _e = 0, t;
    }
    for (Ee(null), xe.length = 0, _e = 0; ze.length; )
      ze.pop()();
    for (let t = 0; t < Ce.length; t += 1) {
      const n = Ce[t];
      ot.has(n) || (ot.add(n), n());
    }
    Ce.length = 0;
  } while (xe.length);
  for (; Ht.length; )
    Ht.pop()();
  gt = !1, ot.clear(), Ee(e);
}
function wi(e) {
  if (e.fragment !== null) {
    e.update(), he(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ht);
  }
}
function _i(e) {
  const t = [], n = [];
  Ce.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), Ce = t;
}
const qe = /* @__PURE__ */ new Set();
let ke;
function se() {
  ke = {
    r: 0,
    c: [],
    p: ke
    // parent group
  };
}
function ue() {
  ke.r || he(ke.c), ke = ke.p;
}
function A(e, t) {
  e && e.i && (qe.delete(e), e.i(t));
}
function B(e, t, n, i) {
  if (e && e.o) {
    if (qe.has(e))
      return;
    qe.add(e), ke.c.push(() => {
      qe.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
function K(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Re(e, t) {
  const n = {}, i = {}, r = { $$scope: 1 };
  let o = e.length;
  for (; o--; ) {
    const l = e[o], u = t[o];
    if (u) {
      for (const s in l)
        s in u || (i[s] = 1);
      for (const s in u)
        r[s] || (n[s] = u[s], r[s] = 1);
      e[o] = u;
    } else
      for (const s in l)
        r[s] = 1;
  }
  for (const l in i)
    l in n || (n[l] = void 0);
  return n;
}
function xi(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function be(e) {
  e && e.c();
}
function ce(e, t, n) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), ht(() => {
    const o = e.$$.on_mount.map(Tn).filter(Be);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : he(o), e.$$.on_mount = [];
  }), r.forEach(ht);
}
function ae(e, t) {
  const n = e.$$;
  n.fragment !== null && (_i(n.after_update), he(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ci(e, t) {
  e.$$.dirty[0] === -1 && (xe.push(e), yi(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ee(e, t, n, i, r, o, l, u = [-1]) {
  const s = Oe;
  Ee(e);
  const a = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: D,
    not_equal: r,
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
    dirty: u,
    skip_bound: !1,
    root: t.target || s.$$.root
  };
  l && l(a.root);
  let c = !1;
  if (a.ctx = n ? n(e, t.props || {}, (f, d, ...h) => {
    const g = h.length ? h[0] : d;
    return a.ctx && r(a.ctx[f], a.ctx[f] = g) && (!a.skip_bound && a.bound[f] && a.bound[f](g), c && Ci(e, f)), d;
  }) : [], a.update(), c = !0, he(a.before_update), a.fragment = i ? i(a.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = mi(t.target);
      a.fragment && a.fragment.l(f), f.forEach(O);
    } else
      a.fragment && a.fragment.c();
    t.intro && A(e.$$.fragment), ce(e, t.target, t.anchor), Pn();
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
    rt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    rt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ae(this, 1), this.$destroy = D;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!Be(n))
      return D;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !ai(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Si = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Si);
function Ii(e) {
  let t, n, i, r, o, l, u, s, a;
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>', i = P(), r = w("div"), o = w("div"), l = w("span"), l.textContent = "Success", u = P(), s = w("p"), a = F(
        /*msg*/
        e[0]
      ), k(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-emerald-500"), k(l, "class", "uikit-font-semibold uikit-text-emerald-500 dark:uikit-text-emerald-400"), k(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), k(o, "class", "uikit-mx-3"), k(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), k(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      z(c, t, f), p(t, n), p(t, i), p(t, r), p(r, o), p(o, l), p(o, u), p(o, s), p(s, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && H(
        a,
        /*msg*/
        c[0]
      );
    },
    i: D,
    o: D,
    d(c) {
      c && O(t);
    }
  };
}
function Mi(e, t, n) {
  let { msg: i = "" } = t, { duration: r = 3e3 } = t;
  const o = Ie();
  return Ge(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), e.$$set = (l) => {
    "msg" in l && n(0, i = l.msg), "duration" in l && n(1, r = l.duration);
  }, [i, r];
}
class Ai extends te {
  constructor(t) {
    super(), ee(this, t, Mi, Ii, Y, { msg: 0, duration: 1 });
  }
}
function ji(e) {
  let t, n, i, r, o, l, u, s, a;
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', i = P(), r = w("div"), o = w("div"), l = w("span"), l.textContent = "Info", u = P(), s = w("p"), a = F(
        /*msg*/
        e[0]
      ), k(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-blue-500"), k(l, "class", "uikit-font-semibold uikit-text-blue-500 dark:uikit-text-blue-400"), k(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), k(o, "class", "uikit-mx-3"), k(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), k(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      z(c, t, f), p(t, n), p(t, i), p(t, r), p(r, o), p(o, l), p(o, u), p(o, s), p(s, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && H(
        a,
        /*msg*/
        c[0]
      );
    },
    i: D,
    o: D,
    d(c) {
      c && O(t);
    }
  };
}
function Ti(e, t, n) {
  let { msg: i = "" } = t, { duration: r = 3e3 } = t;
  const o = Ie();
  return Ge(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), e.$$set = (l) => {
    "msg" in l && n(0, i = l.msg), "duration" in l && n(1, r = l.duration);
  }, [i, r];
}
class Dt extends te {
  constructor(t) {
    super(), ee(this, t, Ti, ji, Y, { msg: 0, duration: 1 });
  }
}
function Ei(e) {
  let t, n, i, r, o, l, u, s, a;
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', i = P(), r = w("div"), o = w("div"), l = w("span"), l.textContent = "Warning", u = P(), s = w("p"), a = F(
        /*msg*/
        e[0]
      ), k(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-yellow-400"), k(l, "class", "uikit-font-semibold uikit-text-yellow-400 dark:uikit-text-yellow-300"), k(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), k(o, "class", "uikit-mx-3"), k(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), k(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      z(c, t, f), p(t, n), p(t, i), p(t, r), p(r, o), p(o, l), p(o, u), p(o, s), p(s, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && H(
        a,
        /*msg*/
        c[0]
      );
    },
    i: D,
    o: D,
    d(c) {
      c && O(t);
    }
  };
}
function Pi(e, t, n) {
  let { msg: i = "" } = t, { duration: r = 3e3 } = t;
  const o = Ie();
  return Ge(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), e.$$set = (l) => {
    "msg" in l && n(0, i = l.msg), "duration" in l && n(1, r = l.duration);
  }, [i, r];
}
class Oi extends te {
  constructor(t) {
    super(), ee(this, t, Pi, Ei, Y, { msg: 0, duration: 1 });
  }
}
function zi(e) {
  let t, n, i, r, o, l, u, s, a;
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>', i = P(), r = w("div"), o = w("div"), l = w("span"), l.textContent = "Error", u = P(), s = w("p"), a = F(
        /*msg*/
        e[0]
      ), k(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-red-500"), k(l, "class", "uikit-font-semibold uikit-text-red-500 dark:uikit-text-red-400"), k(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), k(o, "class", "uikit-mx-3"), k(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), k(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      z(c, t, f), p(t, n), p(t, i), p(t, r), p(r, o), p(o, l), p(o, u), p(o, s), p(s, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && H(
        a,
        /*msg*/
        c[0]
      );
    },
    i: D,
    o: D,
    d(c) {
      c && O(t);
    }
  };
}
function Li(e, t, n) {
  let { msg: i = "" } = t, { duration: r = 3e3 } = t;
  const o = Ie();
  return Ge(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), e.$$set = (l) => {
    "msg" in l && n(0, i = l.msg), "duration" in l && n(1, r = l.duration);
  }, [i, r];
}
let Ni = class extends te {
  constructor(t) {
    super(), ee(this, t, Li, zi, Y, { msg: 0, duration: 1 });
  }
};
const qt = "uikit_msg_panel";
let lt = 0;
const ul = (e) => {
  lt += 1;
  let t = window.document.getElementById(qt);
  t || (t = window.document.createElement("div"), t.id = qt, t.style.position = "absolute", t.style.top = "5px", t.style.right = "5px", t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "10px", t.style.zIndex = "100", document.body.appendChild(t));
  const n = window.document.createElement("div");
  t.appendChild(n);
  let i;
  switch (e.type) {
    case "success":
      i = new Ai({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "info":
      i = new Dt({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "warn":
      i = new Oi({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "error":
      i = new Ni({
        target: n,
        props: {
          ...e
        }
      });
      break;
    default:
      i = new Dt({
        target: n,
        props: {
          ...e
        }
      });
      break;
  }
  return i.$on("onEnd", () => {
    i.$destroy(), lt -= 1, lt == 0 && document.body.removeChild(t);
  }), i;
}, We = (e) => Object.entries(e).map(([t, n]) => `${t}: ${n};`).join(" ");
function Bi(e) {
  let t, n, i, r, o, l, u, s, a, c, f, d, h, g, _, m, v, b, S, I;
  return {
    c() {
      t = w("div"), n = w("div"), i = w("div"), r = w("div"), o = F(
        /*title*/
        e[0]
      ), l = P(), u = w("div"), s = w("div"), a = F(
        /*content*/
        e[1]
      ), c = P(), f = w("div"), d = w("div"), h = F(
        /*cancelText*/
        e[2]
      ), _ = P(), m = w("div"), v = F(
        /*okText*/
        e[3]
      ), k(r, "class", "modal-title svelte-f901x2"), k(u, "class", "content svelte-f901x2"), k(i, "class", "modal-content-body svelte-f901x2"), k(d, "class", "btn button-left centerLayout svelte-f901x2"), k(d, "style", g = We(
        /*cancelBtnStyle*/
        e[4]
      )), k(m, "class", "btn button-right centerLayout svelte-f901x2"), k(m, "style", b = We(
        /*okBtnStyle*/
        e[5]
      )), k(f, "class", "confirm-button-wrap svelte-f901x2"), k(n, "class", "confirm-modal-content svelte-f901x2"), k(t, "class", "confirm-modal svelte-f901x2");
    },
    m(T, y) {
      z(T, t, y), p(t, n), p(n, i), p(i, r), p(r, o), p(i, l), p(i, u), p(u, s), p(s, a), p(n, c), p(n, f), p(f, d), p(d, h), p(f, _), p(f, m), p(m, v), e[11](t), S || (I = [
        J(
          d,
          "click",
          /*onCancelClk*/
          e[8]
        ),
        J(
          m,
          "click",
          /*onOkClk*/
          e[7]
        )
      ], S = !0);
    },
    p(T, [y]) {
      y & /*title*/
      1 && H(
        o,
        /*title*/
        T[0]
      ), y & /*content*/
      2 && H(
        a,
        /*content*/
        T[1]
      ), y & /*cancelText*/
      4 && H(
        h,
        /*cancelText*/
        T[2]
      ), y & /*cancelBtnStyle*/
      16 && g !== (g = We(
        /*cancelBtnStyle*/
        T[4]
      )) && k(d, "style", g), y & /*okText*/
      8 && H(
        v,
        /*okText*/
        T[3]
      ), y & /*okBtnStyle*/
      32 && b !== (b = We(
        /*okBtnStyle*/
        T[5]
      )) && k(m, "style", b);
    },
    i: D,
    o: D,
    d(T) {
      T && O(t), e[11](null), S = !1, he(I);
    }
  };
}
function Gi(e, t, n) {
  let { title: i = "" } = t, { content: r = "" } = t, { cancelText: o = "取消" } = t, { okText: l = "确定" } = t, { onCancel: u = () => {
  } } = t, { onOk: s = () => {
  } } = t, { cancelBtnStyle: a = "" } = t, { okBtnStyle: c = "" } = t;
  const f = Ie();
  let d;
  const h = () => {
    s(), f("onOk");
  }, g = () => {
    u(), f("onCancel");
  };
  function _(m) {
    ze[m ? "unshift" : "push"](() => {
      d = m, n(6, d);
    });
  }
  return e.$$set = (m) => {
    "title" in m && n(0, i = m.title), "content" in m && n(1, r = m.content), "cancelText" in m && n(2, o = m.cancelText), "okText" in m && n(3, l = m.okText), "onCancel" in m && n(9, u = m.onCancel), "onOk" in m && n(10, s = m.onOk), "cancelBtnStyle" in m && n(4, a = m.cancelBtnStyle), "okBtnStyle" in m && n(5, c = m.okBtnStyle);
  }, [
    i,
    r,
    o,
    l,
    a,
    c,
    d,
    h,
    g,
    u,
    s,
    _
  ];
}
class Ri extends te {
  constructor(t) {
    super(), ee(this, t, Gi, Bi, Y, {
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
const cl = (e) => {
  const t = window.document.createElement("div");
  document.body.appendChild(t);
  const n = new Ri({
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
}, Pe = /^[a-z0-9]+(-[a-z0-9]+)*$/, tt = (e, t, n, i = "") => {
  const r = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (r.length < 2 || r.length > 3)
      return null;
    i = r.shift().slice(1);
  }
  if (r.length > 3 || !r.length)
    return null;
  if (r.length > 1) {
    const u = r.pop(), s = r.pop(), a = {
      // Allow provider without '@': "provider:prefix:name"
      provider: r.length > 0 ? r[0] : i,
      prefix: s,
      name: u
    };
    return t && !Ue(a) ? null : a;
  }
  const o = r[0], l = o.split("-");
  if (l.length > 1) {
    const u = {
      provider: i,
      prefix: l.shift(),
      name: l.join("-")
    };
    return t && !Ue(u) ? null : u;
  }
  if (n && i === "") {
    const u = {
      provider: i,
      prefix: "",
      name: o
    };
    return t && !Ue(u, n) ? null : u;
  }
  return null;
}, Ue = (e, t) => e ? !!((e.provider === "" || e.provider.match(Pe)) && (t && e.prefix === "" || e.prefix.match(Pe)) && e.name.match(Pe)) : !1, On = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Ke = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), nt = Object.freeze({
  ...On,
  ...Ke
}), pt = Object.freeze({
  ...nt,
  body: "",
  hidden: !1
});
function Fi(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (n.rotate = i), n;
}
function Ut(e, t) {
  const n = Fi(e, t);
  for (const i in pt)
    i in Ke ? i in e && !(i in n) && (n[i] = Ke[i]) : i in t ? n[i] = t[i] : i in e && (n[i] = e[i]);
  return n;
}
function Vi(e, t) {
  const n = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  function o(l) {
    if (n[l])
      return r[l] = [];
    if (!(l in r)) {
      r[l] = null;
      const u = i[l] && i[l].parent, s = u && o(u);
      s && (r[l] = [u].concat(s));
    }
    return r[l];
  }
  return (t || Object.keys(n).concat(Object.keys(i))).forEach(o), r;
}
function Wi(e, t, n) {
  const i = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function l(u) {
    o = Ut(
      i[u] || r[u],
      o
    );
  }
  return l(t), n.forEach(l), Ut(e, o);
}
function zn(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((r) => {
    t(r, null), n.push(r);
  });
  const i = Vi(e);
  for (const r in i) {
    const o = i[r];
    o && (t(r, Wi(e, r, o)), n.push(r));
  }
  return n;
}
const Hi = {
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
function Ln(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !st(e, Hi))
    return null;
  const n = t.icons;
  for (const r in n) {
    const o = n[r];
    if (!r.match(Pe) || typeof o.body != "string" || !st(
      o,
      pt
    ))
      return null;
  }
  const i = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const r in i) {
    const o = i[r], l = o.parent;
    if (!r.match(Pe) || typeof l != "string" || !n[l] && !i[l] || !st(
      o,
      pt
    ))
      return null;
  }
  return t;
}
const Zt = /* @__PURE__ */ Object.create(null);
function Di(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function ye(e, t) {
  const n = Zt[e] || (Zt[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = Di(e, t));
}
function Pt(e, t) {
  return Ln(t) ? zn(t, (n, i) => {
    i ? e.icons[n] = i : e.missing.add(n);
  }) : [];
}
function qi(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Le = !1;
function Nn(e) {
  return typeof e == "boolean" && (Le = e), Le;
}
function Ui(e) {
  const t = typeof e == "string" ? tt(e, !0, Le) : e;
  if (t) {
    const n = ye(t.provider, t.prefix), i = t.name;
    return n.icons[i] || (n.missing.has(i) ? null : void 0);
  }
}
function Zi(e, t) {
  const n = tt(e, !0, Le);
  if (!n)
    return !1;
  const i = ye(n.provider, n.prefix);
  return qi(i, n.name, t);
}
function Qi(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Le && !t && !e.prefix) {
    let r = !1;
    return Ln(e) && (e.prefix = "", zn(e, (o, l) => {
      l && Zi(o, l) && (r = !0);
    })), r;
  }
  const n = e.prefix;
  if (!Ue({
    provider: t,
    prefix: n,
    name: "a"
  }))
    return !1;
  const i = ye(t, n);
  return !!Pt(i, e);
}
const Bn = Object.freeze({
  width: null,
  height: null
}), Gn = Object.freeze({
  // Dimensions
  ...Bn,
  // Transformations
  ...Ke
}), Ji = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Xi = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Qt(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const i = e.split(Ji);
  if (i === null || !i.length)
    return e;
  const r = [];
  let o = i.shift(), l = Xi.test(o);
  for (; ; ) {
    if (l) {
      const u = parseFloat(o);
      isNaN(u) ? r.push(o) : r.push(Math.ceil(u * t * n) / n);
    } else
      r.push(o);
    if (o = i.shift(), o === void 0)
      return r.join("");
    l = !l;
  }
}
const Yi = (e) => e === "unset" || e === "undefined" || e === "none";
function Ki(e, t) {
  const n = {
    ...nt,
    ...e
  }, i = {
    ...Gn,
    ...t
  }, r = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let o = n.body;
  [n, i].forEach((g) => {
    const _ = [], m = g.hFlip, v = g.vFlip;
    let b = g.rotate;
    m ? v ? b += 2 : (_.push(
      "translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"
    ), _.push("scale(-1 1)"), r.top = r.left = 0) : v && (_.push(
      "translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"
    ), _.push("scale(1 -1)"), r.top = r.left = 0);
    let S;
    switch (b < 0 && (b -= Math.floor(b / 4) * 4), b = b % 4, b) {
      case 1:
        S = r.height / 2 + r.top, _.unshift(
          "rotate(90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
      case 2:
        _.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        S = r.width / 2 + r.left, _.unshift(
          "rotate(-90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
    }
    b % 2 === 1 && (r.left !== r.top && (S = r.left, r.left = r.top, r.top = S), r.width !== r.height && (S = r.width, r.width = r.height, r.height = S)), _.length && (o = '<g transform="' + _.join(" ") + '">' + o + "</g>");
  });
  const l = i.width, u = i.height, s = r.width, a = r.height;
  let c, f;
  l === null ? (f = u === null ? "1em" : u === "auto" ? a : u, c = Qt(f, s / a)) : (c = l === "auto" ? s : l, f = u === null ? Qt(c, a / s) : u === "auto" ? a : u);
  const d = {}, h = (g, _) => {
    Yi(_) || (d[g] = _.toString());
  };
  return h("width", c), h("height", f), d.viewBox = r.left.toString() + " " + r.top.toString() + " " + s.toString() + " " + a.toString(), {
    attributes: d,
    body: o
  };
}
const $i = /\sid="(\S+)"/g, er = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let tr = 0;
function nr(e, t = er) {
  const n = [];
  let i;
  for (; i = $i.exec(e); )
    n.push(i[1]);
  if (!n.length)
    return e;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((o) => {
    const l = typeof t == "function" ? t(o) : t + (tr++).toString(), u = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + u + ')([")]|\\.[a-z])', "g"),
      "$1" + l + r + "$3"
    );
  }), e = e.replace(new RegExp(r, "g"), ""), e;
}
const mt = /* @__PURE__ */ Object.create(null);
function ir(e, t) {
  mt[e] = t;
}
function bt(e) {
  return mt[e] || mt[""];
}
function Ot(e) {
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
], Ze = [];
for (; Me.length > 0; )
  Me.length === 1 || Math.random() > 0.5 ? Ze.push(Me.shift()) : Ze.push(Me.pop());
zt[""] = Ot({
  resources: ["https://api.iconify.design"].concat(Ze)
});
function rr(e, t) {
  const n = Ot(t);
  return n === null ? !1 : (zt[e] = n, !0);
}
function Lt(e) {
  return zt[e];
}
const or = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Jt = or();
function lr(e, t) {
  const n = Lt(e);
  if (!n)
    return 0;
  let i;
  if (!n.maxURL)
    i = 0;
  else {
    let r = 0;
    n.resources.forEach((l) => {
      r = Math.max(r, l.length);
    });
    const o = t + ".json?icons=";
    i = n.maxURL - r - n.path.length - o.length;
  }
  return i;
}
function sr(e) {
  return e === 404;
}
const ur = (e, t, n) => {
  const i = [], r = lr(e, t), o = "icons";
  let l = {
    type: o,
    provider: e,
    prefix: t,
    icons: []
  }, u = 0;
  return n.forEach((s, a) => {
    u += s.length + 1, u >= r && a > 0 && (i.push(l), l = {
      type: o,
      provider: e,
      prefix: t,
      icons: []
    }, u = s.length), l.icons.push(s);
  }), i.push(l), i;
};
function cr(e) {
  if (typeof e == "string") {
    const t = Lt(e);
    if (t)
      return t.path;
  }
  return "/";
}
const ar = (e, t, n) => {
  if (!Jt) {
    n("abort", 424);
    return;
  }
  let i = cr(t.provider);
  switch (t.type) {
    case "icons": {
      const o = t.prefix, u = t.icons.join(","), s = new URLSearchParams({
        icons: u
      });
      i += o + ".json?" + s.toString();
      break;
    }
    case "custom": {
      const o = t.uri;
      i += o.slice(0, 1) === "/" ? o.slice(1) : o;
      break;
    }
    default:
      n("abort", 400);
      return;
  }
  let r = 503;
  Jt(e + i).then((o) => {
    const l = o.status;
    if (l !== 200) {
      setTimeout(() => {
        n(sr(l) ? "abort" : "next", l);
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
}, fr = {
  prepare: ur,
  send: ar
};
function dr(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, n = /* @__PURE__ */ Object.create(null);
  e.sort((r, o) => r.provider !== o.provider ? r.provider.localeCompare(o.provider) : r.prefix !== o.prefix ? r.prefix.localeCompare(o.prefix) : r.name.localeCompare(o.name));
  let i = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((r) => {
    if (i.name === r.name && i.prefix === r.prefix && i.provider === r.provider)
      return;
    i = r;
    const o = r.provider, l = r.prefix, u = r.name, s = n[o] || (n[o] = /* @__PURE__ */ Object.create(null)), a = s[l] || (s[l] = ye(o, l));
    let c;
    u in a.icons ? c = t.loaded : l === "" || a.missing.has(u) ? c = t.missing : c = t.pending;
    const f = {
      provider: o,
      prefix: l,
      name: u
    };
    c.push(f);
  }), t;
}
function Rn(e, t) {
  e.forEach((n) => {
    const i = n.loaderCallbacks;
    i && (n.loaderCallbacks = i.filter((r) => r.id !== t));
  });
}
function gr(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let n = !1;
    const i = e.provider, r = e.prefix;
    t.forEach((o) => {
      const l = o.icons, u = l.pending.length;
      l.pending = l.pending.filter((s) => {
        if (s.prefix !== r)
          return !0;
        const a = s.name;
        if (e.icons[a])
          l.loaded.push({
            provider: i,
            prefix: r,
            name: a
          });
        else if (e.missing.has(a))
          l.missing.push({
            provider: i,
            prefix: r,
            name: a
          });
        else
          return n = !0, !0;
        return !1;
      }), l.pending.length !== u && (n || Rn([e], o.id), o.callback(
        l.loaded.slice(0),
        l.missing.slice(0),
        l.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let hr = 0;
function pr(e, t, n) {
  const i = hr++, r = Rn.bind(null, n, i);
  if (!t.pending.length)
    return r;
  const o = {
    id: i,
    icons: t,
    callback: e,
    abort: r
  };
  return n.forEach((l) => {
    (l.loaderCallbacks || (l.loaderCallbacks = [])).push(o);
  }), r;
}
function mr(e, t = !0, n = !1) {
  const i = [];
  return e.forEach((r) => {
    const o = typeof r == "string" ? tt(r, t, n) : r;
    o && i.push(o);
  }), i;
}
var br = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function kr(e, t, n, i) {
  const r = e.resources.length, o = e.random ? Math.floor(Math.random() * r) : e.index;
  let l;
  if (e.random) {
    let y = e.resources.slice(0);
    for (l = []; y.length > 1; ) {
      const q = Math.floor(Math.random() * y.length);
      l.push(y[q]), y = y.slice(0, q).concat(y.slice(q + 1));
    }
    l = l.concat(y);
  } else
    l = e.resources.slice(o).concat(e.resources.slice(0, o));
  const u = Date.now();
  let s = "pending", a = 0, c, f = null, d = [], h = [];
  typeof i == "function" && h.push(i);
  function g() {
    f && (clearTimeout(f), f = null);
  }
  function _() {
    s === "pending" && (s = "aborted"), g(), d.forEach((y) => {
      y.status === "pending" && (y.status = "aborted");
    }), d = [];
  }
  function m(y, q) {
    q && (h = []), typeof y == "function" && h.push(y);
  }
  function v() {
    return {
      startTime: u,
      payload: t,
      status: s,
      queriesSent: a,
      queriesPending: d.length,
      subscribe: m,
      abort: _
    };
  }
  function b() {
    s = "failed", h.forEach((y) => {
      y(void 0, c);
    });
  }
  function S() {
    d.forEach((y) => {
      y.status === "pending" && (y.status = "aborted");
    }), d = [];
  }
  function I(y, q, M) {
    const R = q !== "success";
    switch (d = d.filter((U) => U !== y), s) {
      case "pending":
        break;
      case "failed":
        if (R || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (q === "abort") {
      c = M, b();
      return;
    }
    if (R) {
      c = M, d.length || (l.length ? T() : b());
      return;
    }
    if (g(), S(), !e.random) {
      const U = e.resources.indexOf(y.resource);
      U !== -1 && U !== e.index && (e.index = U);
    }
    s = "completed", h.forEach((U) => {
      U(M);
    });
  }
  function T() {
    if (s !== "pending")
      return;
    g();
    const y = l.shift();
    if (y === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          g(), s === "pending" && (S(), b());
        }, e.timeout);
        return;
      }
      b();
      return;
    }
    const q = {
      status: "pending",
      resource: y,
      callback: (M, R) => {
        I(q, M, R);
      }
    };
    d.push(q), a++, f = setTimeout(T, e.rotate), n(y, t, q.callback);
  }
  return setTimeout(T), v;
}
function Fn(e) {
  const t = {
    ...br,
    ...e
  };
  let n = [];
  function i() {
    n = n.filter((u) => u().status === "pending");
  }
  function r(u, s, a) {
    const c = kr(
      t,
      u,
      s,
      (f, d) => {
        i(), a && a(f, d);
      }
    );
    return n.push(c), c;
  }
  function o(u) {
    return n.find((s) => u(s)) || null;
  }
  return {
    query: r,
    find: o,
    setIndex: (u) => {
      t.index = u;
    },
    getIndex: () => t.index,
    cleanup: i
  };
}
function Xt() {
}
const ut = /* @__PURE__ */ Object.create(null);
function vr(e) {
  if (!ut[e]) {
    const t = Lt(e);
    if (!t)
      return;
    const n = Fn(t), i = {
      config: t,
      redundancy: n
    };
    ut[e] = i;
  }
  return ut[e];
}
function yr(e, t, n) {
  let i, r;
  if (typeof e == "string") {
    const o = bt(e);
    if (!o)
      return n(void 0, 424), Xt;
    r = o.send;
    const l = vr(e);
    l && (i = l.redundancy);
  } else {
    const o = Ot(e);
    if (o) {
      i = Fn(o);
      const l = e.resources ? e.resources[0] : "", u = bt(l);
      u && (r = u.send);
    }
  }
  return !i || !r ? (n(void 0, 424), Xt) : i.query(t, r, n)().abort;
}
const Yt = "iconify2", Ne = "iconify", Vn = Ne + "-count", Kt = Ne + "-version", Wn = 36e5, wr = 168;
function kt(e, t) {
  try {
    return e.getItem(t);
  } catch {
  }
}
function Nt(e, t, n) {
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
  return Nt(e, Vn, t.toString());
}
function yt(e) {
  return parseInt(kt(e, Vn)) || 0;
}
const it = {
  local: !0,
  session: !0
}, Hn = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Bt = !1;
function _r(e) {
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
  it[e] = !1;
}
function qn(e, t) {
  const n = Dn(e);
  if (!n)
    return;
  const i = kt(n, Kt);
  if (i !== Yt) {
    if (i) {
      const u = yt(n);
      for (let s = 0; s < u; s++)
        $t(n, Ne + s.toString());
    }
    Nt(n, Kt, Yt), vt(n, 0);
    return;
  }
  const r = Math.floor(Date.now() / Wn) - wr, o = (u) => {
    const s = Ne + u.toString(), a = kt(n, s);
    if (typeof a == "string") {
      try {
        const c = JSON.parse(a);
        if (typeof c == "object" && typeof c.cached == "number" && c.cached > r && typeof c.provider == "string" && typeof c.data == "object" && typeof c.data.prefix == "string" && // Valid item: run callback
        t(c, u))
          return !0;
      } catch {
      }
      $t(n, s);
    }
  };
  let l = yt(n);
  for (let u = l - 1; u >= 0; u--)
    o(u) || (u === l - 1 ? (l--, vt(n, l)) : Hn[e].add(u));
}
function Un() {
  if (!Bt) {
    _r(!0);
    for (const e in it)
      qn(e, (t) => {
        const n = t.data, i = t.provider, r = n.prefix, o = ye(
          i,
          r
        );
        if (!Pt(o, n).length)
          return !1;
        const l = n.lastModified || -1;
        return o.lastModifiedCached = o.lastModifiedCached ? Math.min(o.lastModifiedCached, l) : l, !0;
      });
  }
}
function xr(e, t) {
  const n = e.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= t
  )
    return n === t;
  if (e.lastModifiedCached = t, n)
    for (const i in it)
      qn(i, (r) => {
        const o = r.data;
        return r.provider !== e.provider || o.prefix !== e.prefix || o.lastModified === t;
      });
  return !0;
}
function Cr(e, t) {
  Bt || Un();
  function n(i) {
    let r;
    if (!it[i] || !(r = Dn(i)))
      return;
    const o = Hn[i];
    let l;
    if (o.size)
      o.delete(l = Array.from(o).shift());
    else if (l = yt(r), !vt(r, l + 1))
      return;
    const u = {
      cached: Math.floor(Date.now() / Wn),
      provider: e.provider,
      data: t
    };
    return Nt(
      r,
      Ne + l.toString(),
      JSON.stringify(u)
    );
  }
  t.lastModified && !xr(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"));
}
function en() {
}
function Sr(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, gr(e);
  }));
}
function Ir(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: i } = e, r = e.iconsToLoad;
    delete e.iconsToLoad;
    let o;
    if (!r || !(o = bt(n)))
      return;
    o.prepare(n, i, r).forEach((u) => {
      yr(n, u, (s) => {
        if (typeof s != "object")
          u.icons.forEach((a) => {
            e.missing.add(a);
          });
        else
          try {
            const a = Pt(
              e,
              s
            );
            if (!a.length)
              return;
            const c = e.pendingIcons;
            c && a.forEach((f) => {
              c.delete(f);
            }), Cr(e, s);
          } catch (a) {
            console.error(a);
          }
        Sr(e);
      });
    });
  }));
}
const Mr = (e, t) => {
  const n = mr(e, !0, Nn()), i = dr(n);
  if (!i.pending.length) {
    let s = !0;
    return t && setTimeout(() => {
      s && t(
        i.loaded,
        i.missing,
        i.pending,
        en
      );
    }), () => {
      s = !1;
    };
  }
  const r = /* @__PURE__ */ Object.create(null), o = [];
  let l, u;
  return i.pending.forEach((s) => {
    const { provider: a, prefix: c } = s;
    if (c === u && a === l)
      return;
    l = a, u = c, o.push(ye(a, c));
    const f = r[a] || (r[a] = /* @__PURE__ */ Object.create(null));
    f[c] || (f[c] = []);
  }), i.pending.forEach((s) => {
    const { provider: a, prefix: c, name: f } = s, d = ye(a, c), h = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    h.has(f) || (h.add(f), r[a][c].push(f));
  }), o.forEach((s) => {
    const { provider: a, prefix: c } = s;
    r[a][c].length && Ir(s, r[a][c]);
  }), t ? pr(t, i, o) : en;
};
function Ar(e, t) {
  const n = {
    ...e
  };
  for (const i in t) {
    const r = t[i], o = typeof r;
    i in Bn ? (r === null || r && (o === "string" || o === "number")) && (n[i] = r) : o === typeof n[i] && (n[i] = i === "rotate" ? r % 4 : r);
  }
  return n;
}
const jr = /[\s,]+/;
function Tr(e, t) {
  t.split(jr).forEach((n) => {
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
function Er(e, t = 0) {
  const n = e.replace(/^-?[0-9.]*/, "");
  function i(r) {
    for (; r < 0; )
      r += 4;
    return r % 4;
  }
  if (n === "") {
    const r = parseInt(e);
    return isNaN(r) ? 0 : i(r);
  } else if (n !== e) {
    let r = 0;
    switch (n) {
      case "%":
        r = 25;
        break;
      case "deg":
        r = 90;
    }
    if (r) {
      let o = parseFloat(e.slice(0, e.length - n.length));
      return isNaN(o) ? 0 : (o = o / r, o % 1 === 0 ? i(o) : 0);
    }
  }
  return t;
}
function Pr(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t)
    n += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Or(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function zr(e) {
  return "data:image/svg+xml," + Or(e);
}
function Lr(e) {
  return 'url("' + zr(e) + '")';
}
const tn = {
  ...Gn,
  inline: !1
}, Nr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Br = {
  display: "inline-block"
}, wt = {
  "background-color": "currentColor"
}, Zn = {
  "background-color": "transparent"
}, nn = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, rn = {
  "-webkit-mask": wt,
  mask: wt,
  background: Zn
};
for (const e in rn) {
  const t = rn[e];
  for (const n in nn)
    t[e + "-" + n] = nn[n];
}
function Gr(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
function Rr(e, t) {
  const n = Ar(tn, t), i = t.mode || "svg", r = i === "svg" ? { ...Nr } : {};
  e.body.indexOf("xlink:") === -1 && delete r["xmlns:xlink"];
  let o = typeof t.style == "string" ? t.style : "";
  for (let v in t) {
    const b = t[v];
    if (b !== void 0)
      switch (v) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[v] = b === !0 || b === "true" || b === 1;
          break;
        case "flip":
          typeof b == "string" && Tr(n, b);
          break;
        case "color":
          o = o + (o.length > 0 && o.trim().slice(-1) !== ";" ? ";" : "") + "color: " + b + "; ";
          break;
        case "rotate":
          typeof b == "string" ? n[v] = Er(b) : typeof b == "number" && (n[v] = b);
          break;
        case "ariaHidden":
        case "aria-hidden":
          b !== !0 && b !== "true" && delete r["aria-hidden"];
          break;
        default:
          if (v.slice(0, 3) === "on:")
            break;
          tn[v] === void 0 && (r[v] = b);
      }
  }
  const l = Ki(e, n), u = l.attributes;
  if (n.inline && (o = "vertical-align: -0.125em; " + o), i === "svg") {
    Object.assign(r, u), o !== "" && (r.style = o);
    let v = 0, b = t.id;
    return typeof b == "string" && (b = b.replace(/-/g, "_")), {
      svg: !0,
      attributes: r,
      body: nr(l.body, b ? () => b + "ID" + v++ : "iconifySvelte")
    };
  }
  const { body: s, width: a, height: c } = e, f = i === "mask" || (i === "bg" ? !1 : s.indexOf("currentColor") !== -1), d = Pr(s, {
    ...u,
    width: a + "",
    height: c + ""
  }), g = {
    "--svg": Lr(d)
  }, _ = (v) => {
    const b = u[v];
    b && (g[v] = Gr(b));
  };
  _("width"), _("height"), Object.assign(g, Br, f ? wt : Zn);
  let m = "";
  for (const v in g)
    m += v + ": " + g[v] + ";";
  return r.style = m + o, {
    svg: !1,
    attributes: r
  };
}
Nn(!0);
ir("", fr);
if (typeof document < "u" && typeof window < "u") {
  Un();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((i) => {
      try {
        // Check if item is an object and not null/array
        (typeof i != "object" || i === null || i instanceof Array || // Check for 'icons' and 'prefix'
        typeof i.icons != "object" || typeof i.prefix != "string" || // Add icon set
        !Qi(i)) && console.error(n);
      } catch {
        console.error(n);
      }
    });
  }
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let n in t) {
        const i = "IconifyProviders[" + n + "] is invalid.";
        try {
          const r = t[n];
          if (typeof r != "object" || !r || r.resources === void 0)
            continue;
          rr(n, r) || console.error(i);
        } catch {
          console.error(i);
        }
      }
  }
}
function Fr(e, t, n, i, r) {
  function o() {
    t.loading && (t.loading.abort(), t.loading = null);
  }
  if (typeof e == "object" && e !== null && typeof e.body == "string")
    return t.name = "", o(), { data: { ...nt, ...e } };
  let l;
  if (typeof e != "string" || (l = tt(e, !1, !0)) === null)
    return o(), null;
  const u = Ui(l);
  if (!u)
    return n && (!t.loading || t.loading.name !== e) && (o(), t.name = "", t.loading = {
      name: e,
      abort: Mr([l], i)
    }), null;
  o(), t.name !== e && (t.name = e, r && !t.destroyed && r(e));
  const s = ["iconify"];
  return l.prefix !== "" && s.push("iconify--" + l.prefix), l.provider !== "" && s.push("iconify--" + l.provider), { data: u, classes: s };
}
function Vr(e, t) {
  return e ? Rr({
    ...nt,
    ...e
  }, t) : null;
}
function on(e) {
  let t;
  function n(o, l) {
    return (
      /*data*/
      o[0].svg ? Hr : Wr
    );
  }
  let i = n(e), r = i(e);
  return {
    c() {
      r.c(), t = me();
    },
    m(o, l) {
      r.m(o, l), z(o, t, l);
    },
    p(o, l) {
      i === (i = n(o)) && r ? r.p(o, l) : (r.d(1), r = i(o), r && (r.c(), r.m(t.parentNode, t)));
    },
    d(o) {
      o && O(t), r.d(o);
    }
  };
}
function Wr(e) {
  let t, n = [
    /*data*/
    e[0].attributes
  ], i = {};
  for (let r = 0; r < n.length; r += 1)
    i = re(i, n[r]);
  return {
    c() {
      t = w("span"), dt(t, i);
    },
    m(r, o) {
      z(r, t, o);
    },
    p(r, o) {
      dt(t, i = Re(n, [o & /*data*/
      1 && /*data*/
      r[0].attributes]));
    },
    d(r) {
      r && O(t);
    }
  };
}
function Hr(e) {
  let t, n = (
    /*data*/
    e[0].body + ""
  ), i = [
    /*data*/
    e[0].attributes
  ], r = {};
  for (let o = 0; o < i.length; o += 1)
    r = re(r, i[o]);
  return {
    c() {
      t = di("svg"), Wt(t, r);
    },
    m(o, l) {
      z(o, t, l), t.innerHTML = n;
    },
    p(o, l) {
      l & /*data*/
      1 && n !== (n = /*data*/
      o[0].body + "") && (t.innerHTML = n), Wt(t, r = Re(i, [l & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && O(t);
    }
  };
}
function Dr(e) {
  let t, n = (
    /*data*/
    e[0] && on(e)
  );
  return {
    c() {
      n && n.c(), t = me();
    },
    m(i, r) {
      n && n.m(i, r), z(i, t, r);
    },
    p(i, [r]) {
      /*data*/
      i[0] ? n ? n.p(i, r) : (n = on(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: D,
    o: D,
    d(i) {
      i && O(t), n && n.d(i);
    }
  };
}
function qr(e, t, n) {
  const i = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let r = !1, o = 0, l;
  const u = (a) => {
    typeof t.onLoad == "function" && t.onLoad(a), Ie()("load", { icon: a });
  };
  function s() {
    n(3, o++, o);
  }
  return Ge(() => {
    n(2, r = !0);
  }), ki(() => {
    n(1, i.destroyed = !0, i), i.loading && (i.loading.abort(), n(1, i.loading = null, i));
  }), e.$$set = (a) => {
    n(6, t = re(re({}, t), Je(a)));
  }, e.$$.update = () => {
    {
      const a = Fr(t.icon, i, r, s, u);
      n(0, l = a ? Vr(a.data, t) : null), l && a.classes && n(
        0,
        l.attributes.class = (typeof t.class == "string" ? t.class + " " : "") + a.classes.join(" "),
        l
      );
    }
  }, t = Je(t), [l, i, r, o];
}
class Fe extends te {
  constructor(t) {
    super(), ee(this, t, qr, Dr, Y, {});
  }
}
function Qn(e) {
  var t, n, i = "";
  if (typeof e == "string" || typeof e == "number")
    i += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Qn(e[t])) && (i && (i += " "), i += n);
    else
      for (t in e)
        e[t] && (i && (i += " "), i += t);
  return i;
}
function Ur() {
  for (var e, t, n = 0, i = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Qn(e)) && (i && (i += " "), i += t);
  return i;
}
function Zr() {
  for (var e = 0, t, n, i = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Jn(t)) && (i && (i += " "), i += n);
  return i;
}
function Jn(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", i = 0; i < e.length; i++)
    e[i] && (t = Jn(e[i])) && (n && (n += " "), n += t);
  return n;
}
var Gt = "-";
function Qr(e) {
  var t = Xr(e), n = e.conflictingClassGroups, i = e.conflictingClassGroupModifiers, r = i === void 0 ? {} : i;
  function o(u) {
    var s = u.split(Gt);
    return s[0] === "" && s.length !== 1 && s.shift(), Xn(s, t) || Jr(u);
  }
  function l(u, s) {
    var a = n[u] || [];
    return s && r[u] ? [].concat(a, r[u]) : a;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: l
  };
}
function Xn(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], i = t.nextPart.get(n), r = i ? Xn(e.slice(1), i) : void 0;
  if (r)
    return r;
  if (t.validators.length !== 0) {
    var o = e.join(Gt);
    return (l = t.validators.find(function(u) {
      var s = u.validator;
      return s(o);
    })) == null ? void 0 : l.classGroupId;
  }
}
var ln = /^\[(.+)\]$/;
function Jr(e) {
  if (ln.test(e)) {
    var t = ln.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Xr(e) {
  var t = e.theme, n = e.prefix, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, r = Kr(Object.entries(e.classGroups), n);
  return r.forEach(function(o) {
    var l = o[0], u = o[1];
    _t(u, i, l, t);
  }), i;
}
function _t(e, t, n, i) {
  e.forEach(function(r) {
    if (typeof r == "string") {
      var o = r === "" ? t : sn(t, r);
      o.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (Yr(r)) {
        _t(r(i), t, n, i);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(function(l) {
      var u = l[0], s = l[1];
      _t(s, sn(t, u), n, i);
    });
  });
}
function sn(e, t) {
  var n = e;
  return t.split(Gt).forEach(function(i) {
    n.nextPart.has(i) || n.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(i);
  }), n;
}
function Yr(e) {
  return e.isThemeGetter;
}
function Kr(e, t) {
  return t ? e.map(function(n) {
    var i = n[0], r = n[1], o = r.map(function(l) {
      return typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(u) {
        var s = u[0], a = u[1];
        return [t + s, a];
      })) : l;
    });
    return [i, o];
  }) : e;
}
function $r(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function r(o, l) {
    n.set(o, l), t++, t > e && (t = 0, i = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(l) {
      var u = n.get(l);
      if (u !== void 0)
        return u;
      if ((u = i.get(l)) !== void 0)
        return r(l, u), u;
    },
    set: function(l, u) {
      n.has(l) ? n.set(l, u) : r(l, u);
    }
  };
}
var Yn = "!";
function eo(e) {
  var t = e.separator || ":", n = t.length === 1, i = t[0], r = t.length;
  return function(l) {
    for (var u = [], s = 0, a = 0, c, f = 0; f < l.length; f++) {
      var d = l[f];
      if (s === 0) {
        if (d === i && (n || l.slice(f, f + r) === t)) {
          u.push(l.slice(a, f)), a = f + r;
          continue;
        }
        if (d === "/") {
          c = f;
          continue;
        }
      }
      d === "[" ? s++ : d === "]" && s--;
    }
    var h = u.length === 0 ? l : l.substring(a), g = h.startsWith(Yn), _ = g ? h.substring(1) : h, m = c && c > a ? c - a : void 0;
    return {
      modifiers: u,
      hasImportantModifier: g,
      baseClassName: _,
      maybePostfixModifierPosition: m
    };
  };
}
function to(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(i) {
    var r = i[0] === "[";
    r ? (t.push.apply(t, n.sort().concat([i])), n = []) : n.push(i);
  }), t.push.apply(t, n.sort()), t;
}
function no(e) {
  return {
    cache: $r(e.cacheSize),
    splitModifiers: eo(e),
    ...Qr(e)
  };
}
var io = /\s+/;
function ro(e, t) {
  var n = t.splitModifiers, i = t.getClassGroupId, r = t.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return e.trim().split(io).map(function(l) {
    var u = n(l), s = u.modifiers, a = u.hasImportantModifier, c = u.baseClassName, f = u.maybePostfixModifierPosition, d = i(f ? c.substring(0, f) : c), h = !!f;
    if (!d) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (d = i(c), !d)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      h = !1;
    }
    var g = to(s).join(":"), _ = a ? g + Yn : g;
    return {
      isTailwindClass: !0,
      modifierId: _,
      classGroupId: d,
      originalClassName: l,
      hasPostfixModifier: h
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var u = l.modifierId, s = l.classGroupId, a = l.hasPostfixModifier, c = u + s;
    return o.has(c) ? !1 : (o.add(c), r(s, a).forEach(function(f) {
      return o.add(u + f);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function xt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var i, r, o, l = u;
  function u(a) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(h, g) {
      return g(h);
    }, c());
    return i = no(d), r = i.cache.get, o = i.cache.set, l = s, s(a);
  }
  function s(a) {
    var c = r(a);
    if (c)
      return c;
    var f = ro(a, i);
    return o(a, f), f;
  }
  return function() {
    return l(Zr.apply(null, arguments));
  };
}
function W(e) {
  var t = function(i) {
    return i[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Kn = /^\[(?:([a-z-]+):)?(.+)\]$/i, oo = /^\d+\/\d+$/, lo = /* @__PURE__ */ new Set(["px", "full", "screen"]), so = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, uo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, co = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function le(e) {
  return ve(e) || lo.has(e) || oo.test(e) || Ct(e);
}
function Ct(e) {
  return we(e, "length", mo);
}
function ao(e) {
  return we(e, "size", $n);
}
function fo(e) {
  return we(e, "position", $n);
}
function go(e) {
  return we(e, "url", bo);
}
function De(e) {
  return we(e, "number", ve);
}
function ve(e) {
  return !Number.isNaN(Number(e));
}
function ho(e) {
  return e.endsWith("%") && ve(e.slice(0, -1));
}
function Ae(e) {
  return un(e) || we(e, "number", un);
}
function E(e) {
  return Kn.test(e);
}
function je() {
  return !0;
}
function ge(e) {
  return so.test(e);
}
function po(e) {
  return we(e, "", ko);
}
function we(e, t, n) {
  var i = Kn.exec(e);
  return i ? i[1] ? i[1] === t : n(i[2]) : !1;
}
function mo(e) {
  return uo.test(e);
}
function $n() {
  return !1;
}
function bo(e) {
  return e.startsWith("url(");
}
function un(e) {
  return Number.isInteger(Number(e));
}
function ko(e) {
  return co.test(e);
}
function St() {
  var e = W("colors"), t = W("spacing"), n = W("blur"), i = W("brightness"), r = W("borderColor"), o = W("borderRadius"), l = W("borderSpacing"), u = W("borderWidth"), s = W("contrast"), a = W("grayscale"), c = W("hueRotate"), f = W("invert"), d = W("gap"), h = W("gradientColorStops"), g = W("gradientColorStopPositions"), _ = W("inset"), m = W("margin"), v = W("opacity"), b = W("padding"), S = W("saturate"), I = W("scale"), T = W("sepia"), y = W("skew"), q = W("space"), M = W("translate"), R = function() {
    return ["auto", "contain", "none"];
  }, U = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, C = function() {
    return ["auto", E, t];
  }, x = function() {
    return [E, t];
  }, j = function() {
    return ["", le];
  }, L = function() {
    return ["auto", ve, E];
  }, N = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, G = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, V = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Z = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, Q = function() {
    return ["", "0", E];
  }, fe = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ne = function() {
    return [ve, De];
  }, de = function() {
    return [ve, E];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [je],
      spacing: [le],
      blur: ["none", "", ge, E],
      brightness: ne(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ge, E],
      borderSpacing: x(),
      borderWidth: j(),
      contrast: ne(),
      grayscale: Q(),
      hueRotate: de(),
      invert: Q(),
      gap: x(),
      gradientColorStops: [e],
      gradientColorStopPositions: [ho, Ct],
      inset: C(),
      margin: C(),
      opacity: ne(),
      padding: x(),
      saturate: ne(),
      scale: ne(),
      sepia: Q(),
      skew: de(),
      space: x(),
      translate: x()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", E]
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
        columns: [ge]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": fe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": fe()
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
        object: [].concat(N(), [E])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: U()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": U()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": U()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        z: ["auto", Ae]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: C()
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
        flex: ["1", "auto", "initial", "none", E]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Q()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Q()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ae]
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
          span: ["full", Ae]
        }, E]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
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
          span: [Ae]
        }, E]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
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
        "auto-cols": ["auto", "min", "max", "fr", E]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", E]
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
        justify: ["normal"].concat(Z())
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
        content: ["normal"].concat(Z(), ["baseline"])
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
        "place-content": [].concat(Z(), ["baseline"])
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
        p: [b]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [b]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [b]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [b]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [b]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [b]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [b]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [b]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [b]
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
        "space-x": [q]
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
        "space-y": [q]
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
        w: ["auto", "min", "max", "fit", E, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", E, le]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ge]
        }, ge, E]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [E, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", E, le]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [E, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ge, Ct]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", De]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", E]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ve, De]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", E, le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", E]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", E]
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
        decoration: [].concat(G(), ["wavy"])
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
        "underline-offset": ["auto", E, le]
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
        indent: x()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", E]
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
        content: ["none", E]
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
        bg: [].concat(N(), [fo])
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
        bg: ["auto", "cover", "contain", ao]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, go]
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
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [u]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [u]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [u]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [u]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [u]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [u]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [u]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [u]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [u]
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
        border: [].concat(G(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [u]
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
        "divide-y": [u]
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
        divide: G()
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
        outline: [""].concat(G())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [E, le]
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
        ring: j()
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
        shadow: ["", "inner", "none", ge, po]
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
        brightness: [i]
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
        "drop-shadow": ["", "none", ge, E]
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
        saturate: [S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [T]
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
        "backdrop-brightness": [i]
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
        "backdrop-grayscale": [a]
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
        "backdrop-saturate": [S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [T]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", E]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: de()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", E]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: de()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", E]
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
        scale: [I]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [I]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [I]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ae, E]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [y]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [y]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", E]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", E]
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
        "scroll-m": x()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": x()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": x()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": x()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": x()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": x()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": x()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": x()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": x()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": x()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": x()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": x()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": x()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": x()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": x()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": x()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": x()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": x()
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
        "will-change": ["auto", "scroll", "contents", "transform", E]
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
        stroke: [le, De]
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
function vo(e, t) {
  for (var n in t)
    ei(e, n, t[n]);
  return e;
}
var yo = Object.prototype.hasOwnProperty, wo = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function ei(e, t, n) {
  if (!yo.call(e, t) || wo.has(typeof n) || n === null) {
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
    for (var i in n)
      ei(e[t], i, n[i]);
  }
}
function _o(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  return typeof e == "function" ? xt.apply(void 0, [St, e].concat(n)) : xt.apply(void 0, [function() {
    return vo(St(), e);
  }].concat(n));
}
var ti = /* @__PURE__ */ xt(St);
function oe(...e) {
  return ti(Ur(e));
}
function xo(e, t) {
  const n = [];
  return t.builders.forEach((i) => {
    const r = i.action(e);
    r && n.push(r);
  }), {
    destroy: () => {
      n.forEach((i) => {
        i.destroy && i.destroy();
      });
    }
  };
}
function cn(e) {
  const t = {};
  return e.forEach((n) => {
    Object.keys(n).forEach((i) => {
      i !== "action" && (t[i] = n[i]);
    });
  }), t;
}
function Co(e) {
  let t = (
    /*href*/
    e[0] ? "a" : "button"
  ), n, i, r = (
    /*href*/
    (e[0] ? "a" : "button") && ct(e)
  );
  return {
    c() {
      r && r.c(), n = me();
    },
    m(o, l) {
      r && r.m(o, l), z(o, n, l), i = !0;
    },
    p(o, l) {
      /*href*/
      o[0], t ? Y(
        t,
        /*href*/
        o[0] ? "a" : "button"
      ) ? (r.d(1), r = ct(o), t = /*href*/
      o[0] ? "a" : "button", r.c(), r.m(n.parentNode, n)) : r.p(o, l) : (r = ct(o), t = /*href*/
      o[0] ? "a" : "button", r.c(), r.m(n.parentNode, n));
    },
    i(o) {
      i || (A(r, o), i = !0);
    },
    o(o) {
      B(r, o), i = !1;
    },
    d(o) {
      o && O(n), r && r.d(o);
    }
  };
}
function So(e) {
  let t = (
    /*href*/
    e[0] ? "a" : "button"
  ), n, i, r = (
    /*href*/
    (e[0] ? "a" : "button") && at(e)
  );
  return {
    c() {
      r && r.c(), n = me();
    },
    m(o, l) {
      r && r.m(o, l), z(o, n, l), i = !0;
    },
    p(o, l) {
      /*href*/
      o[0], t ? Y(
        t,
        /*href*/
        o[0] ? "a" : "button"
      ) ? (r.d(1), r = at(o), t = /*href*/
      o[0] ? "a" : "button", r.c(), r.m(n.parentNode, n)) : r.p(o, l) : (r = at(o), t = /*href*/
      o[0] ? "a" : "button", r.c(), r.m(n.parentNode, n));
    },
    i(o) {
      i || (A(r, o), i = !0);
    },
    o(o) {
      B(r, o), i = !1;
    },
    d(o) {
      o && O(n), r && r.d(o);
    }
  };
}
function ct(e) {
  let t, n, i, r, o;
  const l = (
    /*#slots*/
    e[5].default
  ), u = Mt(
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
  ], a = {};
  for (let c = 0; c < s.length; c += 1)
    a = re(a, s[c]);
  return {
    c() {
      t = w(
        /*href*/
        e[0] ? "a" : "button"
      ), u && u.c(), Ye(
        /*href*/
        e[0] ? "a" : "button"
      )(t, a);
    },
    m(c, f) {
      z(c, t, f), u && u.m(t, null), i = !0, r || (o = [
        J(
          t,
          "click",
          /*click_handler_1*/
          e[12]
        ),
        J(
          t,
          "change",
          /*change_handler_1*/
          e[13]
        ),
        J(
          t,
          "keydown",
          /*keydown_handler_1*/
          e[14]
        ),
        J(
          t,
          "keyup",
          /*keyup_handler_1*/
          e[15]
        ),
        J(
          t,
          "mouseenter",
          /*mouseenter_handler_1*/
          e[16]
        ),
        J(
          t,
          "mouseleave",
          /*mouseleave_handler_1*/
          e[17]
        )
      ], r = !0);
    },
    p(c, f) {
      u && u.p && (!i || f & /*$$scope*/
      16) && jt(
        u,
        l,
        c,
        /*$$scope*/
        c[4],
        i ? At(
          l,
          /*$$scope*/
          c[4],
          f,
          null
        ) : Tt(
          /*$$scope*/
          c[4]
        ),
        null
      ), Ye(
        /*href*/
        c[0] ? "a" : "button"
      )(t, a = Re(s, [
        (!i || f & /*href, type*/
        3 && n !== (n = /*href*/
        c[0] ? void 0 : (
          /*type*/
          c[1]
        ))) && { type: n },
        (!i || f & /*href*/
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
      i || (A(u, c), i = !0);
    },
    o(c) {
      B(u, c), i = !1;
    },
    d(c) {
      c && O(t), u && u.d(c), r = !1, he(o);
    }
  };
}
function at(e) {
  let t, n, i, r, o, l;
  const u = (
    /*#slots*/
    e[5].default
  ), s = Mt(
    u,
    e,
    /*$$scope*/
    e[4],
    null
  );
  let a = [
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
  for (let f = 0; f < a.length; f += 1)
    c = re(c, a[f]);
  return {
    c() {
      t = w(
        /*href*/
        e[0] ? "a" : "button"
      ), s && s.c(), Ye(
        /*href*/
        e[0] ? "a" : "button"
      )(t, c);
    },
    m(f, d) {
      z(f, t, d), s && s.m(t, null), r = !0, o || (l = [
        J(
          t,
          "click",
          /*click_handler*/
          e[6]
        ),
        J(
          t,
          "change",
          /*change_handler*/
          e[7]
        ),
        J(
          t,
          "keydown",
          /*keydown_handler*/
          e[8]
        ),
        J(
          t,
          "keyup",
          /*keyup_handler*/
          e[9]
        ),
        J(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        J(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[11]
        ),
        fi(i = xo.call(null, t, { builders: (
          /*builders*/
          e[2]
        ) }))
      ], o = !0);
    },
    p(f, d) {
      s && s.p && (!r || d & /*$$scope*/
      16) && jt(
        s,
        u,
        f,
        /*$$scope*/
        f[4],
        r ? At(
          u,
          /*$$scope*/
          f[4],
          d,
          null
        ) : Tt(
          /*$$scope*/
          f[4]
        ),
        null
      ), Ye(
        /*href*/
        f[0] ? "a" : "button"
      )(t, c = Re(a, [
        (!r || d & /*href, type*/
        3 && n !== (n = /*href*/
        f[0] ? void 0 : (
          /*type*/
          f[1]
        ))) && { type: n },
        (!r || d & /*href*/
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
      ])), i && Be(i.update) && d & /*builders*/
      4 && i.update.call(null, { builders: (
        /*builders*/
        f[2]
      ) });
    },
    i(f) {
      r || (A(s, f), r = !0);
    },
    o(f) {
      B(s, f), r = !1;
    },
    d(f) {
      f && O(t), s && s.d(f), o = !1, he(l);
    }
  };
}
function Io(e) {
  let t, n, i, r;
  const o = [So, Co], l = [];
  function u(s, a) {
    return (
      /*builders*/
      s[2] && /*builders*/
      s[2].length ? 0 : 1
    );
  }
  return t = u(e), n = l[t] = o[t](e), {
    c() {
      n.c(), i = me();
    },
    m(s, a) {
      l[t].m(s, a), z(s, i, a), r = !0;
    },
    p(s, [a]) {
      let c = t;
      t = u(s), t === c ? l[t].p(s, a) : (se(), B(l[c], 1, 1, () => {
        l[c] = null;
      }), ue(), n = l[t], n ? n.p(s, a) : (n = l[t] = o[t](s), n.c()), A(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (A(n), r = !0);
    },
    o(s) {
      B(n), r = !1;
    },
    d(s) {
      s && O(i), l[t].d(s);
    }
  };
}
function Mo(e, t, n) {
  const i = ["href", "type", "builders"];
  let r = Xe(t, i), { $$slots: o = {}, $$scope: l } = t, { href: u = void 0 } = t, { type: s = void 0 } = t, { builders: a = [] } = t;
  function c(y) {
    ie.call(this, e, y);
  }
  function f(y) {
    ie.call(this, e, y);
  }
  function d(y) {
    ie.call(this, e, y);
  }
  function h(y) {
    ie.call(this, e, y);
  }
  function g(y) {
    ie.call(this, e, y);
  }
  function _(y) {
    ie.call(this, e, y);
  }
  function m(y) {
    ie.call(this, e, y);
  }
  function v(y) {
    ie.call(this, e, y);
  }
  function b(y) {
    ie.call(this, e, y);
  }
  function S(y) {
    ie.call(this, e, y);
  }
  function I(y) {
    ie.call(this, e, y);
  }
  function T(y) {
    ie.call(this, e, y);
  }
  return e.$$set = (y) => {
    t = re(re({}, t), Je(y)), n(3, r = Xe(t, i)), "href" in y && n(0, u = y.href), "type" in y && n(1, s = y.type), "builders" in y && n(2, a = y.builders), "$$scope" in y && n(4, l = y.$$scope);
  }, [
    u,
    s,
    a,
    r,
    l,
    o,
    c,
    f,
    d,
    h,
    g,
    _,
    m,
    v,
    b,
    S,
    I,
    T
  ];
}
let Ao = class extends te {
  constructor(t) {
    super(), ee(this, t, Mo, Io, Y, { href: 0, type: 1, builders: 2 });
  }
};
function jo(e) {
  let t;
  const n = (
    /*#slots*/
    e[5].default
  ), i = Mt(
    n,
    e,
    /*$$scope*/
    e[8],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, o) {
      i && i.m(r, o), t = !0;
    },
    p(r, o) {
      i && i.p && (!t || o & /*$$scope*/
      256) && jt(
        i,
        n,
        r,
        /*$$scope*/
        r[8],
        t ? At(
          n,
          /*$$scope*/
          r[8],
          o,
          null
        ) : Tt(
          /*$$scope*/
          r[8]
        ),
        null
      );
    },
    i(r) {
      t || (A(i, r), t = !0);
    },
    o(r) {
      B(i, r), t = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function To(e) {
  let t, n;
  const i = [
    { builders: (
      /*builders*/
      e[3]
    ) },
    {
      class: oe(gn({
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
  let r = {
    $$slots: { default: [jo] },
    $$scope: { ctx: e }
  };
  for (let o = 0; o < i.length; o += 1)
    r = re(r, i[o]);
  return t = new Ao({ props: r }), t.$on(
    "click",
    /*click_handler*/
    e[6]
  ), t.$on(
    "keydown",
    /*keydown_handler*/
    e[7]
  ), {
    c() {
      be(t.$$.fragment);
    },
    m(o, l) {
      ce(t, o, l), n = !0;
    },
    p(o, [l]) {
      const u = l & /*builders, cn, buttonVariants, variant, size, className, $$restProps*/
      31 ? Re(i, [
        l & /*builders*/
        8 && { builders: (
          /*builders*/
          o[3]
        ) },
        l & /*cn, buttonVariants, variant, size, className*/
        7 && {
          class: oe(gn({
            variant: (
              /*variant*/
              o[1]
            ),
            size: (
              /*size*/
              o[2]
            ),
            className: (
              /*className*/
              o[0]
            )
          }))
        },
        l & /*$$restProps*/
        16 && xi(
          /*$$restProps*/
          o[4]
        )
      ]) : {};
      l & /*$$scope*/
      256 && (u.$$scope = { dirty: l, ctx: o }), t.$set(u);
    },
    i(o) {
      n || (A(t.$$.fragment, o), n = !0);
    },
    o(o) {
      B(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ae(t, o);
    }
  };
}
function Eo(e, t, n) {
  const i = ["class", "variant", "size", "builders"];
  let r = Xe(t, i), { $$slots: o = {}, $$scope: l } = t, { class: u = void 0 } = t, { variant: s = "default" } = t, { size: a = "default" } = t, { builders: c = [] } = t;
  function f(h) {
    ie.call(this, e, h);
  }
  function d(h) {
    ie.call(this, e, h);
  }
  return e.$$set = (h) => {
    t = re(re({}, t), Je(h)), n(4, r = Xe(t, i)), "class" in h && n(0, u = h.class), "variant" in h && n(1, s = h.variant), "size" in h && n(2, a = h.size), "builders" in h && n(3, c = h.builders), "$$scope" in h && n(8, l = h.$$scope);
  }, [
    u,
    s,
    a,
    c,
    r,
    o,
    f,
    d,
    l
  ];
}
class Po extends te {
  constructor(t) {
    super(), ee(this, t, Eo, To, Y, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
}
var an = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, $ = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Oo = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function ni(e, t) {
  e.forEach(function(n) {
    Array.isArray(n) ? ni(n, t) : t.push(n);
  });
}
function ii(e) {
  let t = [];
  return ni(e, t), t;
}
var zo = (...e) => ii(e).filter(Boolean), ri = (e, t) => {
  let n = {}, i = Object.keys(e), r = Object.keys(t);
  for (let o of i)
    if (r.includes(o)) {
      let l = e[o], u = t[o];
      typeof l == "object" && typeof u == "object" ? n[o] = ri(l, u) : n[o] = u + " " + l;
    } else
      n[o] = e[o];
  for (let o of r)
    i.includes(o) || (n[o] = t[o]);
  return n;
}, fn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), Lo = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, oi = (e) => e || void 0, $e = (...e) => oi(ii(e).filter(Boolean).join(" ")), ft = null, et = {}, It = !1, Te = (...e) => (t) => t.twMerge ? ((!ft || It) && (It = !1, ft = $(et) ? ti : _o(et)), oi(ft($e(e)))) : $e(e), dn = (e, t) => {
  for (let n in t)
    e.hasOwnProperty(n) ? e[n] = $e(e[n], t[n]) : e[n] = t[n];
  return e;
}, No = (e, t) => {
  let { extend: n = null, slots: i = {}, variants: r = {}, compoundVariants: o = [], compoundSlots: l = [], defaultVariants: u = {} } = e, s = { ...Lo, ...t }, a = n != null && n.base ? $e(n.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, c = n != null && n.variants && !$(n.variants) ? ri(r, n.variants) : r, f = n != null && n.defaultVariants && !$(n.defaultVariants) ? { ...n.defaultVariants, ...u } : u;
  !$(s.twMergeConfig) && !Oo(s.twMergeConfig, et) && (It = !0, et = s.twMergeConfig);
  let d = $(i) ? {} : { base: e == null ? void 0 : e.base, ...i }, h = $(n == null ? void 0 : n.slots) ? d : dn(n == null ? void 0 : n.slots, $(d) ? { base: e == null ? void 0 : e.base } : d), g = (m) => {
    if ($(c) && $(i) && $(n == null ? void 0 : n.slots))
      return Te(a, m == null ? void 0 : m.class, m == null ? void 0 : m.className)(s);
    if (o && !Array.isArray(o))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof o}`);
    if (l && !Array.isArray(l))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
    let v = (C, x, j = [], L) => {
      let N = j;
      if (typeof x == "string")
        N = N.concat(fn(x).split(" ").map((G) => `${C}:${G}`));
      else if (Array.isArray(x))
        N = N.concat(x.reduce((G, V) => G.concat(`${C}:${V}`), []));
      else if (typeof x == "object" && typeof L == "string") {
        for (let G in x)
          if (x.hasOwnProperty(G) && G === L) {
            let V = x[G];
            if (V && typeof V == "string") {
              let Z = fn(V);
              N[L] ? N[L] = N[L].concat(Z.split(" ").map((Q) => `${C}:${Q}`)) : N[L] = Z.split(" ").map((Q) => `${C}:${Q}`);
            } else
              Array.isArray(V) && V.length > 0 && (N[L] = V.reduce((Z, Q) => Z.concat(`${C}:${Q}`), []));
          }
      }
      return N;
    }, b = (C, x = c, j = null, L = null) => {
      var N;
      let G = x[C];
      if (!G || $(G))
        return null;
      let V = (N = L == null ? void 0 : L[C]) != null ? N : m == null ? void 0 : m[C];
      if (V === null)
        return null;
      let Z = an(V), Q = Array.isArray(s.responsiveVariants) && s.responsiveVariants.length > 0 || s.responsiveVariants === !0, fe = f == null ? void 0 : f[C], ne = [];
      if (typeof Z == "object" && Q)
        for (let [X, Rt] of Object.entries(Z)) {
          let si = G[Rt];
          if (X === "initial") {
            fe = Rt;
            continue;
          }
          Array.isArray(s.responsiveVariants) && !s.responsiveVariants.includes(X) || (ne = v(X, si, ne, j));
        }
      let de = G[Z] || G[an(fe)];
      return typeof ne == "object" && typeof j == "string" && ne[j] ? dn(ne, de) : ne.length > 0 ? (ne.push(de), ne) : de;
    }, S = () => c ? Object.keys(c).map((C) => b(C, c)) : null, I = (C, x) => {
      if (!c || typeof c != "object")
        return null;
      let j = new Array();
      for (let L in c) {
        let N = b(L, c, C, x), G = C === "base" && typeof N == "string" ? N : N && N[C];
        G && (j[j.length] = G);
      }
      return j;
    }, T = {};
    for (let C in m)
      m[C] !== void 0 && (T[C] = m[C]);
    let y = (C, x) => {
      var j;
      let L = typeof (m == null ? void 0 : m[C]) == "object" ? { [C]: (j = m[C]) == null ? void 0 : j.initial } : {};
      return { ...f, ...T, ...L, ...x };
    }, q = (C = [], x) => {
      let j = [];
      for (let { class: L, className: N, ...G } of C) {
        let V = !0;
        for (let [Z, Q] of Object.entries(G)) {
          let fe = y(Z, x);
          if (Array.isArray(Q)) {
            if (!Q.includes(fe[Z])) {
              V = !1;
              break;
            }
          } else if (fe[Z] !== Q) {
            V = !1;
            break;
          }
        }
        V && (L && j.push(L), N && j.push(N));
      }
      return j;
    }, M = (C) => {
      let x = q(o, C), j = q(n == null ? void 0 : n.compoundVariants, C);
      return zo(j, x);
    }, R = (C) => {
      let x = M(C);
      if (!Array.isArray(x))
        return x;
      let j = {};
      for (let L of x)
        if (typeof L == "string" && (j.base = Te(j.base, L)(s)), typeof L == "object")
          for (let [N, G] of Object.entries(L))
            j[N] = Te(j[N], G)(s);
      return j;
    }, U = (C) => {
      if (l.length < 1)
        return null;
      let x = {};
      for (let { slots: j = [], class: L, className: N, ...G } of l) {
        if (!$(G)) {
          let V = !0;
          for (let Z of Object.keys(G)) {
            let Q = y(Z, C)[Z];
            if (Q === void 0 || Q !== G[Z]) {
              V = !1;
              break;
            }
          }
          if (!V)
            continue;
        }
        for (let V of j)
          x[V] = x[V] || [], x[V].push([L, N]);
      }
      return x;
    };
    if (!$(i) || !$(n == null ? void 0 : n.slots)) {
      let C = {};
      if (typeof h == "object" && !$(h))
        for (let x of Object.keys(h))
          C[x] = (j) => {
            var L, N;
            return Te(h[x], I(x, j), ((L = R(j)) != null ? L : [])[x], ((N = U(j)) != null ? N : [])[x], j == null ? void 0 : j.class, j == null ? void 0 : j.className)(s);
          };
      return C;
    }
    return Te(a, S(), M(), m == null ? void 0 : m.class, m == null ? void 0 : m.className)(s);
  }, _ = () => {
    if (!(!c || typeof c != "object"))
      return Object.keys(c);
  };
  return g.variantKeys = _(), g.extend = n, g.base = a, g.slots = h, g.variants = c, g.defaultVariants = f, g.compoundSlots = l, g.compoundVariants = o, g;
};
const gn = No({
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
function hn(e, t, n) {
  const i = e.slice();
  return i[3] = t[n].title, i[4] = t[n].items, i[6] = n, i;
}
function pn(e, t, n) {
  const i = e.slice();
  return i[3] = t[n].title, i[7] = t[n].icon, i[8] = t[n].url, i[10] = n, i;
}
function Bo(e) {
  let t, n, i = (
    /*title*/
    e[3] + ""
  ), r, o, l;
  return t = new Fe({
    props: {
      class: "uikit-mr-2 uikit-h-4 uikit-w-4",
      icon: (
        /*icon*/
        e[7]
      )
    }
  }), {
    c() {
      be(t.$$.fragment), n = P(), r = F(i), o = P();
    },
    m(u, s) {
      ce(t, u, s), z(u, n, s), z(u, r, s), z(u, o, s), l = !0;
    },
    p(u, s) {
      const a = {};
      s & /*menus*/
      2 && (a.icon = /*icon*/
      u[7]), t.$set(a), (!l || s & /*menus*/
      2) && i !== (i = /*title*/
      u[3] + "") && H(r, i);
    },
    i(u) {
      l || (A(t.$$.fragment, u), l = !0);
    },
    o(u) {
      B(t.$$.fragment, u), l = !1;
    },
    d(u) {
      u && (O(n), O(r), O(o)), ae(t, u);
    }
  };
}
function mn(e) {
  let t, n;
  return t = new Po({
    props: {
      variant: "uikit-secondary",
      class: "uikit-w-full uikit-justify-start",
      $$slots: { default: [Bo] },
      $$scope: { ctx: e }
    }
  }), t.$on("click", function() {
    Be(
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
      be(t.$$.fragment);
    },
    m(i, r) {
      ce(t, i, r), n = !0;
    },
    p(i, r) {
      e = i;
      const o = {};
      r & /*$$scope, menus*/
      2050 && (o.$$scope = { dirty: r, ctx: e }), t.$set(o);
    },
    i(i) {
      n || (A(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(t, i);
    }
  };
}
function bn(e) {
  let t, n, i = (
    /*title*/
    e[3] + ""
  ), r, o, l, u, s, a = K(
    /*items*/
    e[4]
  ), c = [];
  for (let d = 0; d < a.length; d += 1)
    c[d] = mn(pn(e, a, d));
  const f = (d) => B(c[d], 1, 1, () => {
    c[d] = null;
  });
  return {
    c() {
      t = w("div"), n = w("h2"), r = F(i), o = P(), l = w("div");
      for (let d = 0; d < c.length; d += 1)
        c[d].c();
      u = P(), k(n, "class", "uikit-mb-2 uikit-px-4 uikit-text-lg uikit-font-semibold uikit-tracking-tight"), k(l, "class", "uikit-space-y-1"), k(t, "class", "uikit-px-3 uikit-py-2 uikit-w-full");
    },
    m(d, h) {
      z(d, t, h), p(t, n), p(n, r), p(t, o), p(t, l);
      for (let g = 0; g < c.length; g += 1)
        c[g] && c[g].m(l, null);
      p(t, u), s = !0;
    },
    p(d, h) {
      if ((!s || h & /*menus*/
      2) && i !== (i = /*title*/
      d[3] + "") && H(r, i), h & /*onClick, menus*/
      6) {
        a = K(
          /*items*/
          d[4]
        );
        let g;
        for (g = 0; g < a.length; g += 1) {
          const _ = pn(d, a, g);
          c[g] ? (c[g].p(_, h), A(c[g], 1)) : (c[g] = mn(_), c[g].c(), A(c[g], 1), c[g].m(l, null));
        }
        for (se(), g = a.length; g < c.length; g += 1)
          f(g);
        ue();
      }
    },
    i(d) {
      if (!s) {
        for (let h = 0; h < a.length; h += 1)
          A(c[h]);
        s = !0;
      }
    },
    o(d) {
      c = c.filter(Boolean);
      for (let h = 0; h < c.length; h += 1)
        B(c[h]);
      s = !1;
    },
    d(d) {
      d && O(t), pe(c, d);
    }
  };
}
function Go(e) {
  let t, n, i, r, o = K(
    /*menus*/
    e[1]
  ), l = [];
  for (let s = 0; s < o.length; s += 1)
    l[s] = bn(hn(e, o, s));
  const u = (s) => B(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      t = w("div"), n = w("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      k(n, "class", "uikit-space-y-4 uikit-py-4"), k(t, "class", i = oe(
        "uikit-pb-12",
        /*className*/
        e[0]
      ));
    },
    m(s, a) {
      z(s, t, a), p(t, n);
      for (let c = 0; c < l.length; c += 1)
        l[c] && l[c].m(n, null);
      r = !0;
    },
    p(s, [a]) {
      if (a & /*menus, onClick*/
      6) {
        o = K(
          /*menus*/
          s[1]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const f = hn(s, o, c);
          l[c] ? (l[c].p(f, a), A(l[c], 1)) : (l[c] = bn(f), l[c].c(), A(l[c], 1), l[c].m(n, null));
        }
        for (se(), c = o.length; c < l.length; c += 1)
          u(c);
        ue();
      }
      (!r || a & /*className*/
      1 && i !== (i = oe(
        "uikit-pb-12",
        /*className*/
        s[0]
      ))) && k(t, "class", i);
    },
    i(s) {
      if (!r) {
        for (let a = 0; a < o.length; a += 1)
          A(l[a]);
        r = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let a = 0; a < l.length; a += 1)
        B(l[a]);
      r = !1;
    },
    d(s) {
      s && O(t), pe(l, s);
    }
  };
}
function Ro(e, t, n) {
  let { class: i = void 0 } = t, { menus: r = [] } = t, { onClick: o = (l) => {
    console.log(l);
  } } = t;
  return e.$$set = (l) => {
    "class" in l && n(0, i = l.class), "menus" in l && n(1, r = l.menus), "onClick" in l && n(2, o = l.onClick);
  }, [i, r, o];
}
class fl extends te {
  constructor(t) {
    super(), ee(this, t, Ro, Go, Y, { class: 0, menus: 1, onClick: 2 });
  }
}
function kn(e, t, n) {
  const i = e.slice();
  return i[2] = t[n].type, i[3] = t[n].height, i[4] = t[n].width, i[5] = t[n].items, i[6] = t[n].id, i[8] = n, i;
}
function Fo(e) {
  let t, n, i, r;
  return {
    c() {
      t = w("div"), n = F("content"), k(t, "id", i = `${/*depth*/
      e[1]}${/*i*/
      e[8]}-`), k(t, "class", r = Vt(
        /*width*/
        e[4]
      ) + " svelte-1jbas83");
    },
    m(o, l) {
      z(o, t, l), p(t, n);
    },
    p(o, l) {
      l & /*depth*/
      2 && i !== (i = `${/*depth*/
      o[1]}${/*i*/
      o[8]}-`) && k(t, "id", i), l & /*grids*/
      1 && r !== (r = Vt(
        /*width*/
        o[4]
      ) + " svelte-1jbas83") && k(t, "class", r);
    },
    i: D,
    o: D,
    d(o) {
      o && O(t);
    }
  };
}
function Vo(e) {
  let t, n, i, r;
  return n = new li({
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
      t = w("div"), be(n.$$.fragment), i = P(), k(t, "class", "uikit-flex uikit-w-full"), Se(
        t,
        "height",
        /*height*/
        e[3] || "200px"
      );
    },
    m(o, l) {
      z(o, t, l), ce(n, t, null), p(t, i), r = !0;
    },
    p(o, l) {
      const u = {};
      l & /*grids*/
      1 && (u.grids = /*items*/
      o[5]), l & /*depth*/
      2 && (u.depth = `${/*depth*/
      o[1]}${/*i*/
      o[8]}-`), n.$set(u), l & /*grids*/
      1 && Se(
        t,
        "height",
        /*height*/
        o[3] || "200px"
      );
    },
    i(o) {
      r || (A(n.$$.fragment, o), r = !0);
    },
    o(o) {
      B(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && O(t), ae(n);
    }
  };
}
function vn(e) {
  let t, n, i, r;
  const o = [Vo, Fo], l = [];
  function u(s, a) {
    return (
      /*type*/
      s[2] === "row" ? 0 : 1
    );
  }
  return t = u(e), n = l[t] = o[t](e), {
    c() {
      n.c(), i = me();
    },
    m(s, a) {
      l[t].m(s, a), z(s, i, a), r = !0;
    },
    p(s, a) {
      let c = t;
      t = u(s), t === c ? l[t].p(s, a) : (se(), B(l[c], 1, 1, () => {
        l[c] = null;
      }), ue(), n = l[t], n ? n.p(s, a) : (n = l[t] = o[t](s), n.c()), A(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (A(n), r = !0);
    },
    o(s) {
      B(n), r = !1;
    },
    d(s) {
      s && O(i), l[t].d(s);
    }
  };
}
function Wo(e) {
  let t, n, i = K(
    /*grids*/
    e[0]
  ), r = [];
  for (let l = 0; l < i.length; l += 1)
    r[l] = vn(kn(e, i, l));
  const o = (l) => B(r[l], 1, 1, () => {
    r[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      t = me();
    },
    m(l, u) {
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(l, u);
      z(l, t, u), n = !0;
    },
    p(l, [u]) {
      if (u & /*grids, depth*/
      3) {
        i = K(
          /*grids*/
          l[0]
        );
        let s;
        for (s = 0; s < i.length; s += 1) {
          const a = kn(l, i, s);
          r[s] ? (r[s].p(a, u), A(r[s], 1)) : (r[s] = vn(a), r[s].c(), A(r[s], 1), r[s].m(t.parentNode, t));
        }
        for (se(), s = i.length; s < r.length; s += 1)
          o(s);
        ue();
      }
    },
    i(l) {
      if (!n) {
        for (let u = 0; u < i.length; u += 1)
          A(r[u]);
        n = !0;
      }
    },
    o(l) {
      r = r.filter(Boolean);
      for (let u = 0; u < r.length; u += 1)
        B(r[u]);
      n = !1;
    },
    d(l) {
      l && O(t), pe(r, l);
    }
  };
}
function Ho(e, t, n) {
  let { grids: i = [] } = t, { depth: r = "" } = t;
  return e.$$set = (o) => {
    "grids" in o && n(0, i = o.grids), "depth" in o && n(1, r = o.depth);
  }, [i, r];
}
class li extends te {
  constructor(t) {
    super(), ee(this, t, Ho, Wo, Y, { grids: 0, depth: 1 });
  }
}
function yn(e, t, n) {
  const i = e.slice();
  return i[8] = t[n].type, i[9] = t[n].title, i[10] = t[n].url, i[11] = t[n].icon, i[12] = t[n].items, i;
}
function wn(e, t, n) {
  const i = e.slice();
  return i[9] = t[n].title, i[10] = t[n].url, i;
}
function Do(e) {
  let t, n, i, r, o = (
    /*title*/
    e[9] + ""
  ), l, u, s, a, c;
  i = new Fe({ props: { icon: (
    /*icon*/
    e[11]
  ) } });
  function f() {
    return (
      /*click_handler_2*/
      e[7](
        /*url*/
        e[10]
      )
    );
  }
  return {
    c() {
      t = w("li"), n = w("button"), be(i.$$.fragment), r = w("span"), l = F(o), u = P(), k(r, "class", "uikit-ml-2"), k(n, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case"), k(t, "class", "nav-item");
    },
    m(d, h) {
      z(d, t, h), p(t, n), ce(i, n, null), p(n, r), p(r, l), p(t, u), s = !0, a || (c = J(n, "click", f), a = !0);
    },
    p(d, h) {
      e = d;
      const g = {};
      h & /*links*/
      8 && (g.icon = /*icon*/
      e[11]), i.$set(g), (!s || h & /*links*/
      8) && o !== (o = /*title*/
      e[9] + "") && H(l, o);
    },
    i(d) {
      s || (A(i.$$.fragment, d), s = !0);
    },
    o(d) {
      B(i.$$.fragment, d), s = !1;
    },
    d(d) {
      d && O(t), ae(i), a = !1, c();
    }
  };
}
function qo(e) {
  let t, n, i, r = (
    /*title*/
    e[9] + ""
  ), o, l, u, s, a = K(
    /*items*/
    e[12]
  ), c = [];
  for (let f = 0; f < a.length; f += 1)
    c[f] = _n(wn(e, a, f));
  return {
    c() {
      t = w("li"), n = w("div"), i = w("label"), o = F(r), l = P(), u = w("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      s = P(), k(i, "tabindex", "1"), k(i, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), k(u, "tabindex", "1"), k(u, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), k(n, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), k(t, "class", "nav-item");
    },
    m(f, d) {
      z(f, t, d), p(t, n), p(n, i), p(i, o), p(n, l), p(n, u);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(u, null);
      p(t, s);
    },
    p(f, d) {
      if (d & /*links*/
      8 && r !== (r = /*title*/
      f[9] + "") && H(o, r), d & /*onItemClick, links*/
      24) {
        a = K(
          /*items*/
          f[12]
        );
        let h;
        for (h = 0; h < a.length; h += 1) {
          const g = wn(f, a, h);
          c[h] ? c[h].p(g, d) : (c[h] = _n(g), c[h].c(), c[h].m(u, null));
        }
        for (; h < c.length; h += 1)
          c[h].d(1);
        c.length = a.length;
      }
    },
    i: D,
    o: D,
    d(f) {
      f && O(t), pe(c, f);
    }
  };
}
function _n(e) {
  let t, n, i = (
    /*title*/
    e[9] + ""
  ), r, o, l, u;
  function s() {
    return (
      /*click_handler_1*/
      e[6](
        /*url*/
        e[10]
      )
    );
  }
  return {
    c() {
      t = w("li"), n = w("button"), r = F(i), o = P();
    },
    m(a, c) {
      z(a, t, c), p(t, n), p(n, r), p(t, o), l || (u = J(n, "click", s), l = !0);
    },
    p(a, c) {
      e = a, c & /*links*/
      8 && i !== (i = /*title*/
      e[9] + "") && H(r, i);
    },
    d(a) {
      a && O(t), l = !1, u();
    }
  };
}
function xn(e) {
  let t, n, i, r;
  const o = [qo, Do], l = [];
  function u(s, a) {
    return (
      /*type*/
      s[8] === "menu" ? 0 : 1
    );
  }
  return t = u(e), n = l[t] = o[t](e), {
    c() {
      n.c(), i = me();
    },
    m(s, a) {
      l[t].m(s, a), z(s, i, a), r = !0;
    },
    p(s, a) {
      let c = t;
      t = u(s), t === c ? l[t].p(s, a) : (se(), B(l[c], 1, 1, () => {
        l[c] = null;
      }), ue(), n = l[t], n ? n.p(s, a) : (n = l[t] = o[t](s), n.c()), A(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (A(n), r = !0);
    },
    o(s) {
      B(n), r = !1;
    },
    d(s) {
      s && O(i), l[t].d(s);
    }
  };
}
function Uo(e) {
  let t, n, i, r, o, l, u, s, a, c, f, d, h = K(
    /*links*/
    e[3]
  ), g = [];
  for (let m = 0; m < h.length; m += 1)
    g[m] = xn(yn(e, h, m));
  const _ = (m) => B(g[m], 1, 1, () => {
    g[m] = null;
  });
  return {
    c() {
      t = w("nav"), n = w("div"), i = w("div"), r = w("button"), o = F(
        /*logotxt*/
        e[1]
      ), l = P(), u = w("div"), s = w("ul");
      for (let m = 0; m < g.length; m += 1)
        g[m].c();
      k(r, "class", "uikit-text-sm uikit-font-bold uikit-leading-relaxed uikit-inline-block uikit-mr-4 uikit-py-2 uikit-whitespace-nowrap uikit-text-slate-700"), k(i, "class", "uikit-w-full uikit-relative uikit-flex uikit-justify-between lg:uikit-w-auto lg:uikit-static lg:uikit-block lg:uikit-justify-start"), k(s, "class", "uikit-flex uikit-flex-col lg:uikit-flex-row uikit-list-none lg:uikit-ml-auto"), k(u, "class", "lg:uikit-flex uikit-flex-grow uikit-items-center uikit-hidden"), k(n, "class", "uikit-container uikit-px-4 uikit-mx-auto uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between"), k(t, "class", a = oe(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        e[0]
      ));
    },
    m(m, v) {
      z(m, t, v), p(t, n), p(n, i), p(i, r), p(r, o), p(n, l), p(n, u), p(u, s);
      for (let b = 0; b < g.length; b += 1)
        g[b] && g[b].m(s, null);
      c = !0, f || (d = J(
        r,
        "click",
        /*click_handler*/
        e[5]
      ), f = !0);
    },
    p(m, [v]) {
      if ((!c || v & /*logotxt*/
      2) && H(
        o,
        /*logotxt*/
        m[1]
      ), v & /*links, onItemClick*/
      24) {
        h = K(
          /*links*/
          m[3]
        );
        let b;
        for (b = 0; b < h.length; b += 1) {
          const S = yn(m, h, b);
          g[b] ? (g[b].p(S, v), A(g[b], 1)) : (g[b] = xn(S), g[b].c(), A(g[b], 1), g[b].m(s, null));
        }
        for (se(), b = h.length; b < g.length; b += 1)
          _(b);
        ue();
      }
      (!c || v & /*className*/
      1 && a !== (a = oe(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        m[0]
      ))) && k(t, "class", a);
    },
    i(m) {
      if (!c) {
        for (let v = 0; v < h.length; v += 1)
          A(g[v]);
        c = !0;
      }
    },
    o(m) {
      g = g.filter(Boolean);
      for (let v = 0; v < g.length; v += 1)
        B(g[v]);
      c = !1;
    },
    d(m) {
      m && O(t), pe(g, m), f = !1, d();
    }
  };
}
function Zo(e, t, n) {
  let { class: i = "" } = t, { logotxt: r = "wwqdrh" } = t, { logourl: o = "#" } = t, { links: l = [] } = t, { onItemClick: u = (f) => {
    window.location.href = f;
  } } = t;
  const s = () => u(o), a = (f) => u(f), c = (f) => u(f);
  return e.$$set = (f) => {
    "class" in f && n(0, i = f.class), "logotxt" in f && n(1, r = f.logotxt), "logourl" in f && n(2, o = f.logourl), "links" in f && n(3, l = f.links), "onItemClick" in f && n(4, u = f.onItemClick);
  }, [
    i,
    r,
    o,
    l,
    u,
    s,
    a,
    c
  ];
}
class Qo extends te {
  constructor(t) {
    super(), ee(this, t, Zo, Uo, Y, {
      class: 0,
      logotxt: 1,
      logourl: 2,
      links: 3,
      onItemClick: 4
    });
  }
}
function Cn(e, t, n) {
  const i = e.slice();
  return i[7] = t[n], i;
}
function Sn(e) {
  let t, n = (
    /*item*/
    e[7] + ""
  ), i, r, o;
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
      t = w("button"), i = F(n), k(t, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(u, s) {
      z(u, t, s), p(t, i), r || (o = J(t, "click", l), r = !0);
    },
    p(u, s) {
      e = u, s & /*buttons*/
      8 && n !== (n = /*item*/
      e[7] + "") && H(i, n);
    },
    d(u) {
      u && O(t), r = !1, o();
    }
  };
}
function Jo(e) {
  let t, n, i, r, o, l, u, s, a, c, f, d, h, g, _, m = K(
    /*buttons*/
    e[3]
  ), v = [];
  for (let b = 0; b < m.length; b += 1)
    v[b] = Sn(Cn(e, m, b));
  return {
    c() {
      t = w("section"), n = w("div"), i = w("div"), r = w("div"), o = w("h2"), l = F(
        /*title*/
        e[0]
      ), u = P(), s = w("p"), a = F(
        /*description*/
        e[1]
      ), c = P(), f = w("div");
      for (let b = 0; b < v.length; b += 1)
        v[b].c();
      d = P(), h = w("img"), k(o, "class", "uikit-font-semibold uikit-text-4xl uikit-text-slate-600"), k(s, "class", "uikit-mt-4 uikit-text-lg uikit-leading-relaxed uikit-text-slate-500"), k(f, "class", "uikit-mt-12"), k(r, "class", "uikit-pt-32 sm:uikit-pt-0"), k(i, "class", "uikit-w-full md:uikit-w-8/12 lg:uikit-w-6/12 xl:uikit-w-6/12 uikit-px-4"), k(n, "class", "uikit-container uikit-mx-auto uikit-items-center uikit-flex uikit-flex-wrap"), k(h, "class", "uikit-absolute uikit-top-0 uikit-b-auto uikit-right-0 uikit-pt-16 sm:uikit-w-6/12 uikit--mt-48 sm:uikit-mt-0 uikit-w-10/12"), Qe(h.src, g = /*cover*/
      e[5]) || k(h, "src", g), k(h, "alt", "..."), Se(h, "max-height", "860px"), k(t, "class", _ = oe(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        e[2]
      )), Se(t, "max-height", "860px");
    },
    m(b, S) {
      z(b, t, S), p(t, n), p(n, i), p(i, r), p(r, o), p(o, l), p(r, u), p(r, s), p(s, a), p(r, c), p(r, f);
      for (let I = 0; I < v.length; I += 1)
        v[I] && v[I].m(f, null);
      p(t, d), p(t, h);
    },
    p(b, [S]) {
      if (S & /*title*/
      1 && H(
        l,
        /*title*/
        b[0]
      ), S & /*description*/
      2 && H(
        a,
        /*description*/
        b[1]
      ), S & /*buttonClick, buttons*/
      24) {
        m = K(
          /*buttons*/
          b[3]
        );
        let I;
        for (I = 0; I < m.length; I += 1) {
          const T = Cn(b, m, I);
          v[I] ? v[I].p(T, S) : (v[I] = Sn(T), v[I].c(), v[I].m(f, null));
        }
        for (; I < v.length; I += 1)
          v[I].d(1);
        v.length = m.length;
      }
      S & /*cover*/
      32 && !Qe(h.src, g = /*cover*/
      b[5]) && k(h, "src", g), S & /*className*/
      4 && _ !== (_ = oe(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        b[2]
      )) && k(t, "class", _);
    },
    i: D,
    o: D,
    d(b) {
      b && O(t), pe(v, b);
    }
  };
}
function Xo(e, t, n) {
  let { title: i = "wwqdrh's ui component: uikit" } = t, { description: r = "a cross framework web component, you can visit it in wwqdrh'home" } = t, { class: o = "" } = t, { buttons: l = [] } = t, { buttonClick: u = (c) => {
    console.log(c);
  } } = t, { cover: s = "" } = t;
  const a = (c) => u(c);
  return e.$$set = (c) => {
    "title" in c && n(0, i = c.title), "description" in c && n(1, r = c.description), "class" in c && n(2, o = c.class), "buttons" in c && n(3, l = c.buttons), "buttonClick" in c && n(4, u = c.buttonClick), "cover" in c && n(5, s = c.cover);
  }, [i, r, o, l, u, s, a];
}
class Yo extends te {
  constructor(t) {
    super(), ee(this, t, Xo, Jo, Y, {
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
  const i = e.slice();
  return i[4] = t[n].icon, i[2] = t[n].title, i[3] = t[n].description, i;
}
function Mn(e) {
  let t, n, i, r, o, l = (
    /*title*/
    e[2] + ""
  ), u, s, a, c = (
    /*description*/
    e[3] + ""
  ), f, d, h;
  return i = new Fe({
    props: {
      class: "uikit-w-5 uikit-h-5 uikit-text-primary-600 lg:uikit-w-6 lg:uikit-h-6 dark:uikit-text-primary-300",
      icon: (
        /*icon*/
        e[4]
      )
    }
  }), {
    c() {
      t = w("div"), n = w("div"), be(i.$$.fragment), r = P(), o = w("h3"), u = F(l), s = P(), a = w("p"), f = F(c), d = P(), k(n, "class", "uikit-flex uikit-justify-center uikit-items-center uikit-mb-4 uikit-w-10 uikit-h-10 uikit-rounded-full uikit-bg-primary-100 lg:uikit-h-12 lg:uikit-w-12 dark:uikit-bg-primary-900"), k(o, "class", "uikit-mb-2 uikit-text-xl uikit-font-bold dark:uikit-text-white"), k(a, "class", "uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(g, _) {
      z(g, t, _), p(t, n), ce(i, n, null), p(t, r), p(t, o), p(o, u), p(t, s), p(t, a), p(a, f), p(t, d), h = !0;
    },
    p(g, _) {
      const m = {};
      _ & /*features*/
      2 && (m.icon = /*icon*/
      g[4]), i.$set(m), (!h || _ & /*features*/
      2) && l !== (l = /*title*/
      g[2] + "") && H(u, l), (!h || _ & /*features*/
      2) && c !== (c = /*description*/
      g[3] + "") && H(f, c);
    },
    i(g) {
      h || (A(i.$$.fragment, g), h = !0);
    },
    o(g) {
      B(i.$$.fragment, g), h = !1;
    },
    d(g) {
      g && O(t), ae(i);
    }
  };
}
function Ko(e) {
  let t, n, i, r, o, l, u, s, a, c, f, d, h = K(
    /*features*/
    e[1]
  ), g = [];
  for (let m = 0; m < h.length; m += 1)
    g[m] = Mn(In(e, h, m));
  const _ = (m) => B(g[m], 1, 1, () => {
    g[m] = null;
  });
  return {
    c() {
      t = w("section"), n = w("div"), i = w("div"), r = w("h2"), o = F(
        /*title*/
        e[2]
      ), l = P(), u = w("p"), s = F(
        /*description*/
        e[3]
      ), a = P(), c = w("div");
      for (let m = 0; m < g.length; m += 1)
        g[m].c();
      k(r, "class", "uikit-mb-4 uikit-text-4xl uikit-font-extrabold uikit-text-gray-900 dark:uikit-text-white"), k(u, "class", "uikit-text-gray-500 sm:uikit-text-xl dark:uikit-text-gray-400"), k(i, "class", "uikit-mb-8 uikit-max-w-screen-md lg:uikit-mb-16"), k(c, "class", "uikit-space-y-8 md:uikit-grid md:uikit-grid-cols-2 lg:uikit-grid-cols-3 md:uikit-gap-12 md:uikit-space-y-0"), k(n, "class", "uikit-py-8 uikit-px-4 uikit-mx-auto uikit-max-w-screen-xl sm:uikit-py-16 lg:uikit-px-6"), k(t, "class", f = oe(
        "dark:uikit-bg-gray-800",
        /*className*/
        e[0]
      ));
    },
    m(m, v) {
      z(m, t, v), p(t, n), p(n, i), p(i, r), p(r, o), p(i, l), p(i, u), p(u, s), p(n, a), p(n, c);
      for (let b = 0; b < g.length; b += 1)
        g[b] && g[b].m(c, null);
      d = !0;
    },
    p(m, [v]) {
      if ((!d || v & /*title*/
      4) && H(
        o,
        /*title*/
        m[2]
      ), (!d || v & /*description*/
      8) && H(
        s,
        /*description*/
        m[3]
      ), v & /*features*/
      2) {
        h = K(
          /*features*/
          m[1]
        );
        let b;
        for (b = 0; b < h.length; b += 1) {
          const S = In(m, h, b);
          g[b] ? (g[b].p(S, v), A(g[b], 1)) : (g[b] = Mn(S), g[b].c(), A(g[b], 1), g[b].m(c, null));
        }
        for (se(), b = h.length; b < g.length; b += 1)
          _(b);
        ue();
      }
      (!d || v & /*className*/
      1 && f !== (f = oe(
        "dark:uikit-bg-gray-800",
        /*className*/
        m[0]
      ))) && k(t, "class", f);
    },
    i(m) {
      if (!d) {
        for (let v = 0; v < h.length; v += 1)
          A(g[v]);
        d = !0;
      }
    },
    o(m) {
      g = g.filter(Boolean);
      for (let v = 0; v < g.length; v += 1)
        B(g[v]);
      d = !1;
    },
    d(m) {
      m && O(t), pe(g, m);
    }
  };
}
function $o(e, t, n) {
  let { class: i = "" } = t, { title: r = "" } = t, { description: o = "" } = t, { features: l = [] } = t;
  return e.$$set = (u) => {
    "class" in u && n(0, i = u.class), "title" in u && n(2, r = u.title), "description" in u && n(3, o = u.description), "features" in u && n(1, l = u.features);
  }, [i, l, r, o];
}
class el extends te {
  constructor(t) {
    super(), ee(this, t, $o, Ko, Y, {
      class: 0,
      title: 2,
      description: 3,
      features: 1
    });
  }
}
function An(e, t, n) {
  const i = e.slice();
  return i[4] = t[n].icon, i[5] = t[n].description, i;
}
function jn(e) {
  let t, n, i, r, o, l, u, s, a = (
    /*description*/
    e[5] + ""
  ), c, f, d;
  return o = new Fe({ props: { icon: (
    /*icon*/
    e[4]
  ) } }), {
    c() {
      t = w("li"), n = w("div"), i = w("div"), r = w("span"), be(o.$$.fragment), l = P(), u = w("div"), s = w("h4"), c = F(a), f = P(), k(r, "class", "uikit-text-xs uikit-font-semibold uikit-inline-block uikit-py-1 uikit-px-2 uikit-uppercase uikit-rounded-full uikit-text-slate-500 uikit-bg-slate-50 uikit-mr-3"), k(s, "class", "uikit-text-slate-500"), k(n, "class", "uikit-flex uikit-items-center"), k(t, "class", "uikit-py-2");
    },
    m(h, g) {
      z(h, t, g), p(t, n), p(n, i), p(i, r), ce(o, r, null), p(n, l), p(n, u), p(u, s), p(s, c), p(t, f), d = !0;
    },
    p(h, g) {
      const _ = {};
      g & /*sections*/
      8 && (_.icon = /*icon*/
      h[4]), o.$set(_), (!d || g & /*sections*/
      8) && a !== (a = /*description*/
      h[5] + "") && H(c, a);
    },
    i(h) {
      d || (A(o.$$.fragment, h), d = !0);
    },
    o(h) {
      B(o.$$.fragment, h), d = !1;
    },
    d(h) {
      h && O(t), ae(o);
    }
  };
}
function tl(e) {
  let t, n, i, r, o, l, u, s, a, c, f, d, h, g, _, m, v, b, S, I;
  l = new Fe({ props: { icon: (
    /*icon*/
    e[4]
  ) } });
  let T = K(
    /*sections*/
    e[3]
  ), y = [];
  for (let M = 0; M < T.length; M += 1)
    y[M] = jn(An(e, T, M));
  const q = (M) => B(y[M], 1, 1, () => {
    y[M] = null;
  });
  return {
    c() {
      t = w("div"), n = w("div"), i = w("div"), r = w("div"), o = w("div"), be(l.$$.fragment), u = P(), s = w("h3"), a = F(
        /*title*/
        e[2]
      ), c = P(), f = w("p"), d = F(
        /*description*/
        e[5]
      ), h = P(), g = w("ul");
      for (let M = 0; M < y.length; M += 1)
        y[M].c();
      _ = P(), m = w("div"), v = w("img"), k(o, "class", "uikit-text-slate-500 uikit-p-3 uikit-text-center uikit-inline-flex uikit-items-center uikit-justify-center uikit-w-16 uikit-h-16 uikit-mb-6 uikit-shadow-lg uikit-rounded-full uikit-bg-white"), k(s, "class", "uikit-text-3xl uikit-font-semibold"), k(f, "class", "uikit-mt-4 uikit-text-lg uikit-leading-relaxed uikit-text-slate-500"), k(g, "class", "uikit-list-none uikit-mt-6"), k(r, "class", "md:uikit-pr-12"), k(i, "class", "uikit-w-full md:uikit-w-5/12 uikit-ml-auto uikit-px-12 md:uikit-px-4"), k(v, "alt", "..."), k(v, "class", "uikit-max-w-full uikit-rounded-lg uikit-shadow-xl"), Se(v, "transform", "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"), Qe(v.src, b = /*cover*/
      e[1]) || k(v, "src", b), k(m, "class", "uikit-w-full md:uikit-w-6/12 uikit-mr-auto uikit-px-4 uikit-pt-24 md:uikit-pt-0"), k(n, "class", "uikit-items-center uikit-flex uikit-flex-wrap"), k(t, "class", S = oe(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-pb-32 uikit-pt-48",
        /*className*/
        e[0]
      ));
    },
    m(M, R) {
      z(M, t, R), p(t, n), p(n, i), p(i, r), p(r, o), ce(l, o, null), p(r, u), p(r, s), p(s, a), p(r, c), p(r, f), p(f, d), p(r, h), p(r, g);
      for (let U = 0; U < y.length; U += 1)
        y[U] && y[U].m(g, null);
      p(n, _), p(n, m), p(m, v), I = !0;
    },
    p(M, [R]) {
      const U = {};
      if (R & /*icon*/
      16 && (U.icon = /*icon*/
      M[4]), l.$set(U), (!I || R & /*title*/
      4) && H(
        a,
        /*title*/
        M[2]
      ), (!I || R & /*description*/
      32) && H(
        d,
        /*description*/
        M[5]
      ), R & /*sections*/
      8) {
        T = K(
          /*sections*/
          M[3]
        );
        let C;
        for (C = 0; C < T.length; C += 1) {
          const x = An(M, T, C);
          y[C] ? (y[C].p(x, R), A(y[C], 1)) : (y[C] = jn(x), y[C].c(), A(y[C], 1), y[C].m(g, null));
        }
        for (se(), C = T.length; C < y.length; C += 1)
          q(C);
        ue();
      }
      (!I || R & /*cover*/
      2 && !Qe(v.src, b = /*cover*/
      M[1])) && k(v, "src", b), (!I || R & /*className*/
      1 && S !== (S = oe(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-pb-32 uikit-pt-48",
        /*className*/
        M[0]
      ))) && k(t, "class", S);
    },
    i(M) {
      if (!I) {
        A(l.$$.fragment, M);
        for (let R = 0; R < T.length; R += 1)
          A(y[R]);
        I = !0;
      }
    },
    o(M) {
      B(l.$$.fragment, M), y = y.filter(Boolean);
      for (let R = 0; R < y.length; R += 1)
        B(y[R]);
      I = !1;
    },
    d(M) {
      M && O(t), ae(l), pe(y, M);
    }
  };
}
function nl(e, t, n) {
  let { class: i = "" } = t, { cover: r = "" } = t, { title: o = "" } = t, { icon: l = "" } = t, { description: u = "" } = t, { sections: s = [] } = t;
  return e.$$set = (a) => {
    "class" in a && n(0, i = a.class), "cover" in a && n(1, r = a.cover), "title" in a && n(2, o = a.title), "icon" in a && n(4, l = a.icon), "description" in a && n(5, u = a.description), "sections" in a && n(3, s = a.sections);
  }, [i, r, o, s, l, u];
}
class il extends te {
  constructor(t) {
    super(), ee(this, t, nl, tl, Y, {
      class: 0,
      cover: 1,
      title: 2,
      icon: 4,
      description: 5,
      sections: 3
    });
  }
}
const dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Yo,
  Feature: el,
  Grid: li,
  Header: Qo,
  ProjectDescription: il
}, Symbol.toStringTag, { value: "Module" }));
function rl(e) {
  let t, n, i, r, o, l;
  return {
    c() {
      t = w("div"), n = w("div"), i = w("span"), r = P(), o = w("button"), l = F(
        /*btnText*/
        e[0]
      ), k(i, "id", "mask-desc"), k(i, "class", "mask-tip-desc svelte-17awz4u"), k(o, "id", "next-step-btn"), k(o, "class", "mask-tip-btn svelte-17awz4u"), k(n, "class", "mask-tip svelte-17awz4u"), Se(t, "display", "none");
    },
    m(u, s) {
      z(u, t, s), p(t, n), p(n, i), p(n, r), p(n, o), p(o, l), e[6](n), e[7](t);
    },
    p(u, [s]) {
      s & /*btnText*/
      1 && H(
        l,
        /*btnText*/
        u[0]
      );
    },
    i: D,
    o: D,
    d(u) {
      u && O(t), e[6](null), e[7](null);
    }
  };
}
function ol(e, t, n) {
  let i, r, { gapWidth: o = 5 } = t, { isStart: l } = t, { stepArr: u = [] } = t, { btnText: s = "下一步" } = t;
  const a = (d) => {
    if (d.length === 0) {
      n(1, i.style.display = "none", i);
      return;
    }
    const { id: h, desc: g } = d[0];
    var _ = document.getElementById(h), m = _.offsetWidth, v = _.offsetHeight, b = _.offsetLeft, S = _.offsetTop;
    console.log("待镂空元素: ", m, v, b, S);
    var I = document.body.scrollWidth, T = document.body.scrollHeight;
    n(1, i.style.width = I + "px", i), n(1, i.style.height = T + "px", i), n(1, i.style.position = "absolute", i), n(1, i.style.left = 0, i), n(1, i.style.top = 0, i), n(1, i.style.display = "block", i), n(1, i.style.boxSizing = "border-box", i), n(1, i.style.borderColor = "rgba(0, 0, 0, 0.75)", i), n(1, i.style.borderStyle = "solid", i), n(1, i.style.borderLeftWidth = b - o + "px", i), n(1, i.style.borderRightWidth = I - m - b - o + "px", i), n(1, i.style.borderTopWidth = S - o + "px", i), n(1, i.style.borderBottomWidth = T - v - S - o + "px", i), n(2, r.style.top = v + o * 2 + 10 + "px", r), n(2, r.style.left = "50%", r);
    var y = document.getElementById("mask-desc");
    y.innerHTML = g;
    var q = document.getElementById("next-step-btn");
    q.onclick = function() {
      d.shift(), a(d);
    };
  };
  function c(d) {
    ze[d ? "unshift" : "push"](() => {
      r = d, n(2, r);
    });
  }
  function f(d) {
    ze[d ? "unshift" : "push"](() => {
      i = d, n(1, i);
    });
  }
  return e.$$set = (d) => {
    "gapWidth" in d && n(3, o = d.gapWidth), "isStart" in d && n(4, l = d.isStart), "stepArr" in d && n(5, u = d.stepArr), "btnText" in d && n(0, s = d.btnText);
  }, e.$$.update = () => {
    e.$$.dirty & /*isStart, stepArr*/
    48 && l && a(u);
  }, [
    s,
    i,
    r,
    o,
    l,
    u,
    c,
    f
  ];
}
class gl extends te {
  constructor(t) {
    super(), ee(this, t, ol, rl, Y, {
      gapWidth: 3,
      isStart: 4,
      stepArr: 5,
      btnText: 0
    });
  }
}
export {
  dl as Layout,
  fl as Sidebar,
  gl as StepMask,
  cl as confirm,
  ul as notify
};
