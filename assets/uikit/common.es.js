var bi = Object.defineProperty;
var ki = (e, t, n) => t in e ? bi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var rt = (e, t, n) => (ki(e, typeof t != "symbol" ? t + "" : t, n), n);
function D() {
}
function le(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function Rn(e) {
  return e();
}
function Ft() {
  return /* @__PURE__ */ Object.create(null);
}
function be(e) {
  e.forEach(Rn);
}
function Ge(e) {
  return typeof e == "function";
}
function K(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let Ve;
function Qe(e, t) {
  return e === t ? !0 : (Ve || (Ve = document.createElement("a")), Ve.href = t, e === Ve.href);
}
function vi(e) {
  return Object.keys(e).length === 0;
}
function Mt(e, t, n, i) {
  if (e) {
    const r = Fn(e, t, n, i);
    return e[0](r);
  }
}
function Fn(e, t, n, i) {
  return e[1] && i ? le(n.ctx.slice(), e[1](i(t))) : n.ctx;
}
function jt(e, t, n, i) {
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
function At(e, t, n, i, r, o) {
  if (r) {
    const l = Fn(t, n, i, o);
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
function yi(e) {
  return e && Ge(e.destroy) ? e.destroy : D;
}
function h(e, t) {
  e.appendChild(t);
}
function N(e, t, n) {
  e.insertBefore(t, n || null);
}
function O(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function oe(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function v(e) {
  return document.createElement(e);
}
function _i(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function V(e) {
  return document.createTextNode(e);
}
function E() {
  return V(" ");
}
function de() {
  return V("");
}
function Q(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function m(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const wi = ["width", "height"];
function dt(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const i in t)
    t[i] == null ? e.removeAttribute(i) : i === "style" ? e.style.cssText = t[i] : i === "__value" ? e.value = e[i] = t[i] : n[i] && n[i].set && wi.indexOf(i) === -1 ? e[i] = t[i] : m(e, i, t[i]);
}
function Ht(e, t) {
  for (const n in t)
    m(e, n, t[n]);
}
function xi(e, t) {
  Object.keys(t).forEach((n) => {
    Ci(e, n, t[n]);
  });
}
function Ci(e, t, n) {
  t in e ? e[t] = typeof e[t] == "boolean" && n === "" ? !0 : n : m(e, t, n);
}
function Ye(e) {
  return /-/.test(e) ? xi : dt;
}
function Si(e) {
  return Array.from(e.childNodes);
}
function W(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Se(e, t, n, i) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "");
}
function Ii(e, t, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: i });
}
let Oe;
function Pe(e) {
  Oe = e;
}
function Et() {
  if (!Oe)
    throw new Error("Function called outside component initialization");
  return Oe;
}
function Re(e) {
  Et().$$.on_mount.push(e);
}
function Mi(e) {
  Et().$$.on_destroy.push(e);
}
function Ie() {
  const e = Et();
  return (t, n, { cancelable: i = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const o = Ii(
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
const xe = [], Le = [];
let Ce = [];
const Wt = [], ji = /* @__PURE__ */ Promise.resolve();
let gt = !1;
function Ai() {
  gt || (gt = !0, ji.then(Vn));
}
function ht(e) {
  Ce.push(e);
}
const ot = /* @__PURE__ */ new Set();
let we = 0;
function Vn() {
  if (we !== 0)
    return;
  const e = Oe;
  do {
    try {
      for (; we < xe.length; ) {
        const t = xe[we];
        we++, Pe(t), Ti(t.$$);
      }
    } catch (t) {
      throw xe.length = 0, we = 0, t;
    }
    for (Pe(null), xe.length = 0, we = 0; Le.length; )
      Le.pop()();
    for (let t = 0; t < Ce.length; t += 1) {
      const n = Ce[t];
      ot.has(n) || (ot.add(n), n());
    }
    Ce.length = 0;
  } while (xe.length);
  for (; Wt.length; )
    Wt.pop()();
  gt = !1, ot.clear(), Pe(e);
}
function Ti(e) {
  if (e.fragment !== null) {
    e.update(), be(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ht);
  }
}
function Ei(e) {
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
  ke.r || be(ke.c), ke = ke.p;
}
function T(e, t) {
  e && e.i && (qe.delete(e), e.i(t));
}
function G(e, t, n, i) {
  if (e && e.o) {
    if (qe.has(e))
      return;
    qe.add(e), ke.c.push(() => {
      qe.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
function U(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Fe(e, t) {
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
function Pi(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function ge(e) {
  e && e.c();
}
function ae(e, t, n) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), ht(() => {
    const o = e.$$.on_mount.map(Rn).filter(Ge);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : be(o), e.$$.on_mount = [];
  }), r.forEach(ht);
}
function fe(e, t) {
  const n = e.$$;
  n.fragment !== null && (Ei(n.after_update), be(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function zi(e, t) {
  e.$$.dirty[0] === -1 && (xe.push(e), Ai(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ee(e, t, n, i, r, o, l, u = [-1]) {
  const s = Oe;
  Pe(e);
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
  if (a.ctx = n ? n(e, t.props || {}, (f, d, ...g) => {
    const p = g.length ? g[0] : d;
    return a.ctx && r(a.ctx[f], a.ctx[f] = p) && (!a.skip_bound && a.bound[f] && a.bound[f](p), c && zi(e, f)), d;
  }) : [], a.update(), c = !0, be(a.before_update), a.fragment = i ? i(a.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = Si(t.target);
      a.fragment && a.fragment.l(f), f.forEach(O);
    } else
      a.fragment && a.fragment.c();
    t.intro && T(e.$$.fragment), ae(e, t.target, t.anchor), Vn();
  }
  Pe(s);
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
    fe(this, 1), this.$destroy = D;
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
    this.$$set && !vi(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Oi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Oi);
function Li(e) {
  let t, n, i, r, o, l, u, s, a;
  return {
    c() {
      t = v("div"), n = v("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>', i = E(), r = v("div"), o = v("div"), l = v("span"), l.textContent = "Success", u = E(), s = v("p"), a = V(
        /*msg*/
        e[0]
      ), m(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-emerald-500"), m(l, "class", "uikit-font-semibold uikit-text-emerald-500 dark:uikit-text-emerald-400"), m(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), m(o, "class", "uikit-mx-3"), m(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), m(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      N(c, t, f), h(t, n), h(t, i), h(t, r), h(r, o), h(o, l), h(o, u), h(o, s), h(s, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && W(
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
function Ni(e, t, n) {
  let { msg: i = "" } = t, { duration: r = 3e3 } = t;
  const o = Ie();
  return Re(() => {
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
class Bi extends te {
  constructor(t) {
    super(), ee(this, t, Ni, Li, K, { msg: 0, duration: 1 });
  }
}
function Gi(e) {
  let t, n, i, r, o, l, u, s, a;
  return {
    c() {
      t = v("div"), n = v("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', i = E(), r = v("div"), o = v("div"), l = v("span"), l.textContent = "Info", u = E(), s = v("p"), a = V(
        /*msg*/
        e[0]
      ), m(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-blue-500"), m(l, "class", "uikit-font-semibold uikit-text-blue-500 dark:uikit-text-blue-400"), m(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), m(o, "class", "uikit-mx-3"), m(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), m(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      N(c, t, f), h(t, n), h(t, i), h(t, r), h(r, o), h(o, l), h(o, u), h(o, s), h(s, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && W(
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
function Ri(e, t, n) {
  let { msg: i = "" } = t, { duration: r = 3e3 } = t;
  const o = Ie();
  return Re(() => {
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
    super(), ee(this, t, Ri, Gi, K, { msg: 0, duration: 1 });
  }
}
function Fi(e) {
  let t, n, i, r, o, l, u, s, a;
  return {
    c() {
      t = v("div"), n = v("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', i = E(), r = v("div"), o = v("div"), l = v("span"), l.textContent = "Warning", u = E(), s = v("p"), a = V(
        /*msg*/
        e[0]
      ), m(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-yellow-400"), m(l, "class", "uikit-font-semibold uikit-text-yellow-400 dark:uikit-text-yellow-300"), m(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), m(o, "class", "uikit-mx-3"), m(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), m(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      N(c, t, f), h(t, n), h(t, i), h(t, r), h(r, o), h(o, l), h(o, u), h(o, s), h(s, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && W(
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
function Vi(e, t, n) {
  let { msg: i = "" } = t, { duration: r = 3e3 } = t;
  const o = Ie();
  return Re(() => {
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
class Hi extends te {
  constructor(t) {
    super(), ee(this, t, Vi, Fi, K, { msg: 0, duration: 1 });
  }
}
function Wi(e) {
  let t, n, i, r, o, l, u, s, a;
  return {
    c() {
      t = v("div"), n = v("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>', i = E(), r = v("div"), o = v("div"), l = v("span"), l.textContent = "Error", u = E(), s = v("p"), a = V(
        /*msg*/
        e[0]
      ), m(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-red-500"), m(l, "class", "uikit-font-semibold uikit-text-red-500 dark:uikit-text-red-400"), m(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), m(o, "class", "uikit-mx-3"), m(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), m(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      N(c, t, f), h(t, n), h(t, i), h(t, r), h(r, o), h(o, l), h(o, u), h(o, s), h(s, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && W(
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
function Di(e, t, n) {
  let { msg: i = "" } = t, { duration: r = 3e3 } = t;
  const o = Ie();
  return Re(() => {
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
let qi = class extends te {
  constructor(t) {
    super(), ee(this, t, Di, Wi, K, { msg: 0, duration: 1 });
  }
};
const qt = "uikit_msg_panel";
let lt = 0;
const vl = (e) => {
  lt += 1;
  let t = window.document.getElementById(qt);
  t || (t = window.document.createElement("div"), t.id = qt, t.style.position = "absolute", t.style.top = "5px", t.style.right = "5px", t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "10px", t.style.zIndex = "100", document.body.appendChild(t));
  const n = window.document.createElement("div");
  t.appendChild(n);
  let i;
  switch (e.type) {
    case "success":
      i = new Bi({
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
      i = new Hi({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "error":
      i = new qi({
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
}, He = (e) => Object.entries(e).map(([t, n]) => `${t}: ${n};`).join(" ");
function Ui(e) {
  let t, n, i, r, o, l, u, s, a, c, f, d, g, p, C, y, S, _, A, z;
  return {
    c() {
      t = v("div"), n = v("div"), i = v("div"), r = v("div"), o = V(
        /*title*/
        e[0]
      ), l = E(), u = v("div"), s = v("div"), a = V(
        /*content*/
        e[1]
      ), c = E(), f = v("div"), d = v("div"), g = V(
        /*cancelText*/
        e[2]
      ), C = E(), y = v("div"), S = V(
        /*okText*/
        e[3]
      ), m(r, "class", "modal-title svelte-f901x2"), m(u, "class", "content svelte-f901x2"), m(i, "class", "modal-content-body svelte-f901x2"), m(d, "class", "btn button-left centerLayout svelte-f901x2"), m(d, "style", p = He(
        /*cancelBtnStyle*/
        e[4]
      )), m(y, "class", "btn button-right centerLayout svelte-f901x2"), m(y, "style", _ = He(
        /*okBtnStyle*/
        e[5]
      )), m(f, "class", "confirm-button-wrap svelte-f901x2"), m(n, "class", "confirm-modal-content svelte-f901x2"), m(t, "class", "confirm-modal svelte-f901x2");
    },
    m(P, w) {
      N(P, t, w), h(t, n), h(n, i), h(i, r), h(r, o), h(i, l), h(i, u), h(u, s), h(s, a), h(n, c), h(n, f), h(f, d), h(d, g), h(f, C), h(f, y), h(y, S), e[11](t), A || (z = [
        Q(
          d,
          "click",
          /*onCancelClk*/
          e[8]
        ),
        Q(
          y,
          "click",
          /*onOkClk*/
          e[7]
        )
      ], A = !0);
    },
    p(P, [w]) {
      w & /*title*/
      1 && W(
        o,
        /*title*/
        P[0]
      ), w & /*content*/
      2 && W(
        a,
        /*content*/
        P[1]
      ), w & /*cancelText*/
      4 && W(
        g,
        /*cancelText*/
        P[2]
      ), w & /*cancelBtnStyle*/
      16 && p !== (p = He(
        /*cancelBtnStyle*/
        P[4]
      )) && m(d, "style", p), w & /*okText*/
      8 && W(
        S,
        /*okText*/
        P[3]
      ), w & /*okBtnStyle*/
      32 && _ !== (_ = He(
        /*okBtnStyle*/
        P[5]
      )) && m(y, "style", _);
    },
    i: D,
    o: D,
    d(P) {
      P && O(t), e[11](null), A = !1, be(z);
    }
  };
}
function Zi(e, t, n) {
  let { title: i = "" } = t, { content: r = "" } = t, { cancelText: o = "取消" } = t, { okText: l = "确定" } = t, { onCancel: u = () => {
  } } = t, { onOk: s = () => {
  } } = t, { cancelBtnStyle: a = "" } = t, { okBtnStyle: c = "" } = t;
  const f = Ie();
  let d;
  const g = () => {
    s(), f("onOk");
  }, p = () => {
    u(), f("onCancel");
  };
  function C(y) {
    Le[y ? "unshift" : "push"](() => {
      d = y, n(6, d);
    });
  }
  return e.$$set = (y) => {
    "title" in y && n(0, i = y.title), "content" in y && n(1, r = y.content), "cancelText" in y && n(2, o = y.cancelText), "okText" in y && n(3, l = y.okText), "onCancel" in y && n(9, u = y.onCancel), "onOk" in y && n(10, s = y.onOk), "cancelBtnStyle" in y && n(4, a = y.cancelBtnStyle), "okBtnStyle" in y && n(5, c = y.okBtnStyle);
  }, [
    i,
    r,
    o,
    l,
    a,
    c,
    d,
    g,
    p,
    u,
    s,
    C
  ];
}
class Qi extends te {
  constructor(t) {
    super(), ee(this, t, Zi, Ui, K, {
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
const yl = (e) => {
  const t = window.document.createElement("div");
  document.body.appendChild(t);
  const n = new Qi({
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
}, ze = /^[a-z0-9]+(-[a-z0-9]+)*$/, tt = (e, t, n, i = "") => {
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
}, Ue = (e, t) => e ? !!((e.provider === "" || e.provider.match(ze)) && (t && e.prefix === "" || e.prefix.match(ze)) && e.name.match(ze)) : !1, Hn = Object.freeze(
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
  ...Hn,
  ...Ke
}), pt = Object.freeze({
  ...nt,
  body: "",
  hidden: !1
});
function Ji(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (n.rotate = i), n;
}
function Ut(e, t) {
  const n = Ji(e, t);
  for (const i in pt)
    i in Ke ? i in e && !(i in n) && (n[i] = Ke[i]) : i in t ? n[i] = t[i] : i in e && (n[i] = e[i]);
  return n;
}
function Xi(e, t) {
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
function Yi(e, t, n) {
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
function Wn(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((r) => {
    t(r, null), n.push(r);
  });
  const i = Xi(e);
  for (const r in i) {
    const o = i[r];
    o && (t(r, Yi(e, r, o)), n.push(r));
  }
  return n;
}
const Ki = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Hn
};
function st(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function Dn(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !st(e, Ki))
    return null;
  const n = t.icons;
  for (const r in n) {
    const o = n[r];
    if (!r.match(ze) || typeof o.body != "string" || !st(
      o,
      pt
    ))
      return null;
  }
  const i = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const r in i) {
    const o = i[r], l = o.parent;
    if (!r.match(ze) || typeof l != "string" || !n[l] && !i[l] || !st(
      o,
      pt
    ))
      return null;
  }
  return t;
}
const Zt = /* @__PURE__ */ Object.create(null);
function $i(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function ye(e, t) {
  const n = Zt[e] || (Zt[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = $i(e, t));
}
function Pt(e, t) {
  return Dn(t) ? Wn(t, (n, i) => {
    i ? e.icons[n] = i : e.missing.add(n);
  }) : [];
}
function er(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Ne = !1;
function qn(e) {
  return typeof e == "boolean" && (Ne = e), Ne;
}
function tr(e) {
  const t = typeof e == "string" ? tt(e, !0, Ne) : e;
  if (t) {
    const n = ye(t.provider, t.prefix), i = t.name;
    return n.icons[i] || (n.missing.has(i) ? null : void 0);
  }
}
function nr(e, t) {
  const n = tt(e, !0, Ne);
  if (!n)
    return !1;
  const i = ye(n.provider, n.prefix);
  return er(i, n.name, t);
}
function ir(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Ne && !t && !e.prefix) {
    let r = !1;
    return Dn(e) && (e.prefix = "", Wn(e, (o, l) => {
      l && nr(o, l) && (r = !0);
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
const Un = Object.freeze({
  width: null,
  height: null
}), Zn = Object.freeze({
  // Dimensions
  ...Un,
  // Transformations
  ...Ke
}), rr = /(-?[0-9.]*[0-9]+[0-9.]*)/g, or = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Qt(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const i = e.split(rr);
  if (i === null || !i.length)
    return e;
  const r = [];
  let o = i.shift(), l = or.test(o);
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
const lr = (e) => e === "unset" || e === "undefined" || e === "none";
function sr(e, t) {
  const n = {
    ...nt,
    ...e
  }, i = {
    ...Zn,
    ...t
  }, r = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let o = n.body;
  [n, i].forEach((p) => {
    const C = [], y = p.hFlip, S = p.vFlip;
    let _ = p.rotate;
    y ? S ? _ += 2 : (C.push(
      "translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"
    ), C.push("scale(-1 1)"), r.top = r.left = 0) : S && (C.push(
      "translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"
    ), C.push("scale(1 -1)"), r.top = r.left = 0);
    let A;
    switch (_ < 0 && (_ -= Math.floor(_ / 4) * 4), _ = _ % 4, _) {
      case 1:
        A = r.height / 2 + r.top, C.unshift(
          "rotate(90 " + A.toString() + " " + A.toString() + ")"
        );
        break;
      case 2:
        C.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        A = r.width / 2 + r.left, C.unshift(
          "rotate(-90 " + A.toString() + " " + A.toString() + ")"
        );
        break;
    }
    _ % 2 === 1 && (r.left !== r.top && (A = r.left, r.left = r.top, r.top = A), r.width !== r.height && (A = r.width, r.width = r.height, r.height = A)), C.length && (o = '<g transform="' + C.join(" ") + '">' + o + "</g>");
  });
  const l = i.width, u = i.height, s = r.width, a = r.height;
  let c, f;
  l === null ? (f = u === null ? "1em" : u === "auto" ? a : u, c = Qt(f, s / a)) : (c = l === "auto" ? s : l, f = u === null ? Qt(c, a / s) : u === "auto" ? a : u);
  const d = {}, g = (p, C) => {
    lr(C) || (d[p] = C.toString());
  };
  return g("width", c), g("height", f), d.viewBox = r.left.toString() + " " + r.top.toString() + " " + s.toString() + " " + a.toString(), {
    attributes: d,
    body: o
  };
}
const ur = /\sid="(\S+)"/g, cr = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let ar = 0;
function fr(e, t = cr) {
  const n = [];
  let i;
  for (; i = ur.exec(e); )
    n.push(i[1]);
  if (!n.length)
    return e;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((o) => {
    const l = typeof t == "function" ? t(o) : t + (ar++).toString(), u = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + u + ')([")]|\\.[a-z])', "g"),
      "$1" + l + r + "$3"
    );
  }), e = e.replace(new RegExp(r, "g"), ""), e;
}
const mt = /* @__PURE__ */ Object.create(null);
function dr(e, t) {
  mt[e] = t;
}
function bt(e) {
  return mt[e] || mt[""];
}
function zt(e) {
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
const Ot = /* @__PURE__ */ Object.create(null), je = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Ze = [];
for (; je.length > 0; )
  je.length === 1 || Math.random() > 0.5 ? Ze.push(je.shift()) : Ze.push(je.pop());
Ot[""] = zt({
  resources: ["https://api.iconify.design"].concat(Ze)
});
function gr(e, t) {
  const n = zt(t);
  return n === null ? !1 : (Ot[e] = n, !0);
}
function Lt(e) {
  return Ot[e];
}
const hr = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Jt = hr();
function pr(e, t) {
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
function mr(e) {
  return e === 404;
}
const br = (e, t, n) => {
  const i = [], r = pr(e, t), o = "icons";
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
function kr(e) {
  if (typeof e == "string") {
    const t = Lt(e);
    if (t)
      return t.path;
  }
  return "/";
}
const vr = (e, t, n) => {
  if (!Jt) {
    n("abort", 424);
    return;
  }
  let i = kr(t.provider);
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
        n(mr(l) ? "abort" : "next", l);
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
}, yr = {
  prepare: br,
  send: vr
};
function _r(e) {
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
function Qn(e, t) {
  e.forEach((n) => {
    const i = n.loaderCallbacks;
    i && (n.loaderCallbacks = i.filter((r) => r.id !== t));
  });
}
function wr(e) {
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
      }), l.pending.length !== u && (n || Qn([e], o.id), o.callback(
        l.loaded.slice(0),
        l.missing.slice(0),
        l.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let xr = 0;
function Cr(e, t, n) {
  const i = xr++, r = Qn.bind(null, n, i);
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
function Sr(e, t = !0, n = !1) {
  const i = [];
  return e.forEach((r) => {
    const o = typeof r == "string" ? tt(r, t, n) : r;
    o && i.push(o);
  }), i;
}
var Ir = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Mr(e, t, n, i) {
  const r = e.resources.length, o = e.random ? Math.floor(Math.random() * r) : e.index;
  let l;
  if (e.random) {
    let w = e.resources.slice(0);
    for (l = []; w.length > 1; ) {
      const H = Math.floor(Math.random() * w.length);
      l.push(w[H]), w = w.slice(0, H).concat(w.slice(H + 1));
    }
    l = l.concat(w);
  } else
    l = e.resources.slice(o).concat(e.resources.slice(0, o));
  const u = Date.now();
  let s = "pending", a = 0, c, f = null, d = [], g = [];
  typeof i == "function" && g.push(i);
  function p() {
    f && (clearTimeout(f), f = null);
  }
  function C() {
    s === "pending" && (s = "aborted"), p(), d.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), d = [];
  }
  function y(w, H) {
    H && (g = []), typeof w == "function" && g.push(w);
  }
  function S() {
    return {
      startTime: u,
      payload: t,
      status: s,
      queriesSent: a,
      queriesPending: d.length,
      subscribe: y,
      abort: C
    };
  }
  function _() {
    s = "failed", g.forEach((w) => {
      w(void 0, c);
    });
  }
  function A() {
    d.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), d = [];
  }
  function z(w, H, L) {
    const F = H !== "success";
    switch (d = d.filter((Z) => Z !== w), s) {
      case "pending":
        break;
      case "failed":
        if (F || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (H === "abort") {
      c = L, _();
      return;
    }
    if (F) {
      c = L, d.length || (l.length ? P() : _());
      return;
    }
    if (p(), A(), !e.random) {
      const Z = e.resources.indexOf(w.resource);
      Z !== -1 && Z !== e.index && (e.index = Z);
    }
    s = "completed", g.forEach((Z) => {
      Z(L);
    });
  }
  function P() {
    if (s !== "pending")
      return;
    p();
    const w = l.shift();
    if (w === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          p(), s === "pending" && (A(), _());
        }, e.timeout);
        return;
      }
      _();
      return;
    }
    const H = {
      status: "pending",
      resource: w,
      callback: (L, F) => {
        z(H, L, F);
      }
    };
    d.push(H), a++, f = setTimeout(P, e.rotate), n(w, t, H.callback);
  }
  return setTimeout(P), S;
}
function Jn(e) {
  const t = {
    ...Ir,
    ...e
  };
  let n = [];
  function i() {
    n = n.filter((u) => u().status === "pending");
  }
  function r(u, s, a) {
    const c = Mr(
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
function jr(e) {
  if (!ut[e]) {
    const t = Lt(e);
    if (!t)
      return;
    const n = Jn(t), i = {
      config: t,
      redundancy: n
    };
    ut[e] = i;
  }
  return ut[e];
}
function Ar(e, t, n) {
  let i, r;
  if (typeof e == "string") {
    const o = bt(e);
    if (!o)
      return n(void 0, 424), Xt;
    r = o.send;
    const l = jr(e);
    l && (i = l.redundancy);
  } else {
    const o = zt(e);
    if (o) {
      i = Jn(o);
      const l = e.resources ? e.resources[0] : "", u = bt(l);
      u && (r = u.send);
    }
  }
  return !i || !r ? (n(void 0, 424), Xt) : i.query(t, r, n)().abort;
}
const Yt = "iconify2", Be = "iconify", Xn = Be + "-count", Kt = Be + "-version", Yn = 36e5, Tr = 168;
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
  return Nt(e, Xn, t.toString());
}
function yt(e) {
  return parseInt(kt(e, Xn)) || 0;
}
const it = {
  local: !0,
  session: !0
}, Kn = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Bt = !1;
function Er(e) {
  Bt = e;
}
let We = typeof window > "u" ? {} : window;
function $n(e) {
  const t = e + "Storage";
  try {
    if (We && We[t] && typeof We[t].length == "number")
      return We[t];
  } catch {
  }
  it[e] = !1;
}
function ei(e, t) {
  const n = $n(e);
  if (!n)
    return;
  const i = kt(n, Kt);
  if (i !== Yt) {
    if (i) {
      const u = yt(n);
      for (let s = 0; s < u; s++)
        $t(n, Be + s.toString());
    }
    Nt(n, Kt, Yt), vt(n, 0);
    return;
  }
  const r = Math.floor(Date.now() / Yn) - Tr, o = (u) => {
    const s = Be + u.toString(), a = kt(n, s);
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
    o(u) || (u === l - 1 ? (l--, vt(n, l)) : Kn[e].add(u));
}
function ti() {
  if (!Bt) {
    Er(!0);
    for (const e in it)
      ei(e, (t) => {
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
function Pr(e, t) {
  const n = e.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= t
  )
    return n === t;
  if (e.lastModifiedCached = t, n)
    for (const i in it)
      ei(i, (r) => {
        const o = r.data;
        return r.provider !== e.provider || o.prefix !== e.prefix || o.lastModified === t;
      });
  return !0;
}
function zr(e, t) {
  Bt || ti();
  function n(i) {
    let r;
    if (!it[i] || !(r = $n(i)))
      return;
    const o = Kn[i];
    let l;
    if (o.size)
      o.delete(l = Array.from(o).shift());
    else if (l = yt(r), !vt(r, l + 1))
      return;
    const u = {
      cached: Math.floor(Date.now() / Yn),
      provider: e.provider,
      data: t
    };
    return Nt(
      r,
      Be + l.toString(),
      JSON.stringify(u)
    );
  }
  t.lastModified && !Pr(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"));
}
function en() {
}
function Or(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, wr(e);
  }));
}
function Lr(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: i } = e, r = e.iconsToLoad;
    delete e.iconsToLoad;
    let o;
    if (!r || !(o = bt(n)))
      return;
    o.prepare(n, i, r).forEach((u) => {
      Ar(n, u, (s) => {
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
            }), zr(e, s);
          } catch (a) {
            console.error(a);
          }
        Or(e);
      });
    });
  }));
}
const Nr = (e, t) => {
  const n = Sr(e, !0, qn()), i = _r(n);
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
    const { provider: a, prefix: c, name: f } = s, d = ye(a, c), g = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    g.has(f) || (g.add(f), r[a][c].push(f));
  }), o.forEach((s) => {
    const { provider: a, prefix: c } = s;
    r[a][c].length && Lr(s, r[a][c]);
  }), t ? Cr(t, i, o) : en;
};
function Br(e, t) {
  const n = {
    ...e
  };
  for (const i in t) {
    const r = t[i], o = typeof r;
    i in Un ? (r === null || r && (o === "string" || o === "number")) && (n[i] = r) : o === typeof n[i] && (n[i] = i === "rotate" ? r % 4 : r);
  }
  return n;
}
const Gr = /[\s,]+/;
function Rr(e, t) {
  t.split(Gr).forEach((n) => {
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
function Fr(e, t = 0) {
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
function Vr(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t)
    n += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Hr(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Wr(e) {
  return "data:image/svg+xml," + Hr(e);
}
function Dr(e) {
  return 'url("' + Wr(e) + '")';
}
const tn = {
  ...Zn,
  inline: !1
}, qr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Ur = {
  display: "inline-block"
}, _t = {
  "background-color": "currentColor"
}, ni = {
  "background-color": "transparent"
}, nn = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, rn = {
  "-webkit-mask": _t,
  mask: _t,
  background: ni
};
for (const e in rn) {
  const t = rn[e];
  for (const n in nn)
    t[e + "-" + n] = nn[n];
}
function Zr(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
function Qr(e, t) {
  const n = Br(tn, t), i = t.mode || "svg", r = i === "svg" ? { ...qr } : {};
  e.body.indexOf("xlink:") === -1 && delete r["xmlns:xlink"];
  let o = typeof t.style == "string" ? t.style : "";
  for (let S in t) {
    const _ = t[S];
    if (_ !== void 0)
      switch (S) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[S] = _ === !0 || _ === "true" || _ === 1;
          break;
        case "flip":
          typeof _ == "string" && Rr(n, _);
          break;
        case "color":
          o = o + (o.length > 0 && o.trim().slice(-1) !== ";" ? ";" : "") + "color: " + _ + "; ";
          break;
        case "rotate":
          typeof _ == "string" ? n[S] = Fr(_) : typeof _ == "number" && (n[S] = _);
          break;
        case "ariaHidden":
        case "aria-hidden":
          _ !== !0 && _ !== "true" && delete r["aria-hidden"];
          break;
        default:
          if (S.slice(0, 3) === "on:")
            break;
          tn[S] === void 0 && (r[S] = _);
      }
  }
  const l = sr(e, n), u = l.attributes;
  if (n.inline && (o = "vertical-align: -0.125em; " + o), i === "svg") {
    Object.assign(r, u), o !== "" && (r.style = o);
    let S = 0, _ = t.id;
    return typeof _ == "string" && (_ = _.replace(/-/g, "_")), {
      svg: !0,
      attributes: r,
      body: fr(l.body, _ ? () => _ + "ID" + S++ : "iconifySvelte")
    };
  }
  const { body: s, width: a, height: c } = e, f = i === "mask" || (i === "bg" ? !1 : s.indexOf("currentColor") !== -1), d = Vr(s, {
    ...u,
    width: a + "",
    height: c + ""
  }), p = {
    "--svg": Dr(d)
  }, C = (S) => {
    const _ = u[S];
    _ && (p[S] = Zr(_));
  };
  C("width"), C("height"), Object.assign(p, Ur, f ? _t : ni);
  let y = "";
  for (const S in p)
    y += S + ": " + p[S] + ";";
  return r.style = y + o, {
    svg: !1,
    attributes: r
  };
}
qn(!0);
dr("", yr);
if (typeof document < "u" && typeof window < "u") {
  ti();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((i) => {
      try {
        // Check if item is an object and not null/array
        (typeof i != "object" || i === null || i instanceof Array || // Check for 'icons' and 'prefix'
        typeof i.icons != "object" || typeof i.prefix != "string" || // Add icon set
        !ir(i)) && console.error(n);
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
          gr(n, r) || console.error(i);
        } catch {
          console.error(i);
        }
      }
  }
}
function Jr(e, t, n, i, r) {
  function o() {
    t.loading && (t.loading.abort(), t.loading = null);
  }
  if (typeof e == "object" && e !== null && typeof e.body == "string")
    return t.name = "", o(), { data: { ...nt, ...e } };
  let l;
  if (typeof e != "string" || (l = tt(e, !1, !0)) === null)
    return o(), null;
  const u = tr(l);
  if (!u)
    return n && (!t.loading || t.loading.name !== e) && (o(), t.name = "", t.loading = {
      name: e,
      abort: Nr([l], i)
    }), null;
  o(), t.name !== e && (t.name = e, r && !t.destroyed && r(e));
  const s = ["iconify"];
  return l.prefix !== "" && s.push("iconify--" + l.prefix), l.provider !== "" && s.push("iconify--" + l.provider), { data: u, classes: s };
}
function Xr(e, t) {
  return e ? Qr({
    ...nt,
    ...e
  }, t) : null;
}
function on(e) {
  let t;
  function n(o, l) {
    return (
      /*data*/
      o[0].svg ? Kr : Yr
    );
  }
  let i = n(e), r = i(e);
  return {
    c() {
      r.c(), t = de();
    },
    m(o, l) {
      r.m(o, l), N(o, t, l);
    },
    p(o, l) {
      i === (i = n(o)) && r ? r.p(o, l) : (r.d(1), r = i(o), r && (r.c(), r.m(t.parentNode, t)));
    },
    d(o) {
      o && O(t), r.d(o);
    }
  };
}
function Yr(e) {
  let t, n = [
    /*data*/
    e[0].attributes
  ], i = {};
  for (let r = 0; r < n.length; r += 1)
    i = le(i, n[r]);
  return {
    c() {
      t = v("span"), dt(t, i);
    },
    m(r, o) {
      N(r, t, o);
    },
    p(r, o) {
      dt(t, i = Fe(n, [o & /*data*/
      1 && /*data*/
      r[0].attributes]));
    },
    d(r) {
      r && O(t);
    }
  };
}
function Kr(e) {
  let t, n = (
    /*data*/
    e[0].body + ""
  ), i = [
    /*data*/
    e[0].attributes
  ], r = {};
  for (let o = 0; o < i.length; o += 1)
    r = le(r, i[o]);
  return {
    c() {
      t = _i("svg"), Ht(t, r);
    },
    m(o, l) {
      N(o, t, l), t.innerHTML = n;
    },
    p(o, l) {
      l & /*data*/
      1 && n !== (n = /*data*/
      o[0].body + "") && (t.innerHTML = n), Ht(t, r = Fe(i, [l & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && O(t);
    }
  };
}
function $r(e) {
  let t, n = (
    /*data*/
    e[0] && on(e)
  );
  return {
    c() {
      n && n.c(), t = de();
    },
    m(i, r) {
      n && n.m(i, r), N(i, t, r);
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
function eo(e, t, n) {
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
  return Re(() => {
    n(2, r = !0);
  }), Mi(() => {
    n(1, i.destroyed = !0, i), i.loading && (i.loading.abort(), n(1, i.loading = null, i));
  }), e.$$set = (a) => {
    n(6, t = le(le({}, t), Je(a)));
  }, e.$$.update = () => {
    {
      const a = Jr(t.icon, i, r, s, u);
      n(0, l = a ? Xr(a.data, t) : null), l && a.classes && n(
        0,
        l.attributes.class = (typeof t.class == "string" ? t.class + " " : "") + a.classes.join(" "),
        l
      );
    }
  }, t = Je(t), [l, i, r, o];
}
class Me extends te {
  constructor(t) {
    super(), ee(this, t, eo, $r, K, {});
  }
}
function ii(e) {
  var t, n, i = "";
  if (typeof e == "string" || typeof e == "number")
    i += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = ii(e[t])) && (i && (i += " "), i += n);
    else
      for (t in e)
        e[t] && (i && (i += " "), i += t);
  return i;
}
function to() {
  for (var e, t, n = 0, i = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = ii(e)) && (i && (i += " "), i += t);
  return i;
}
function no() {
  for (var e = 0, t, n, i = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = ri(t)) && (i && (i += " "), i += n);
  return i;
}
function ri(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", i = 0; i < e.length; i++)
    e[i] && (t = ri(e[i])) && (n && (n += " "), n += t);
  return n;
}
var Gt = "-";
function io(e) {
  var t = oo(e), n = e.conflictingClassGroups, i = e.conflictingClassGroupModifiers, r = i === void 0 ? {} : i;
  function o(u) {
    var s = u.split(Gt);
    return s[0] === "" && s.length !== 1 && s.shift(), oi(s, t) || ro(u);
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
function oi(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], i = t.nextPart.get(n), r = i ? oi(e.slice(1), i) : void 0;
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
function ro(e) {
  if (ln.test(e)) {
    var t = ln.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function oo(e) {
  var t = e.theme, n = e.prefix, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, r = so(Object.entries(e.classGroups), n);
  return r.forEach(function(o) {
    var l = o[0], u = o[1];
    wt(u, i, l, t);
  }), i;
}
function wt(e, t, n, i) {
  e.forEach(function(r) {
    if (typeof r == "string") {
      var o = r === "" ? t : sn(t, r);
      o.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (lo(r)) {
        wt(r(i), t, n, i);
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
      wt(s, sn(t, u), n, i);
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
function lo(e) {
  return e.isThemeGetter;
}
function so(e, t) {
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
function uo(e) {
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
var li = "!";
function co(e) {
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
    var g = u.length === 0 ? l : l.substring(a), p = g.startsWith(li), C = p ? g.substring(1) : g, y = c && c > a ? c - a : void 0;
    return {
      modifiers: u,
      hasImportantModifier: p,
      baseClassName: C,
      maybePostfixModifierPosition: y
    };
  };
}
function ao(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(i) {
    var r = i[0] === "[";
    r ? (t.push.apply(t, n.sort().concat([i])), n = []) : n.push(i);
  }), t.push.apply(t, n.sort()), t;
}
function fo(e) {
  return {
    cache: uo(e.cacheSize),
    splitModifiers: co(e),
    ...io(e)
  };
}
var go = /\s+/;
function ho(e, t) {
  var n = t.splitModifiers, i = t.getClassGroupId, r = t.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return e.trim().split(go).map(function(l) {
    var u = n(l), s = u.modifiers, a = u.hasImportantModifier, c = u.baseClassName, f = u.maybePostfixModifierPosition, d = i(f ? c.substring(0, f) : c), g = !!f;
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
      g = !1;
    }
    var p = ao(s).join(":"), C = a ? p + li : p;
    return {
      isTailwindClass: !0,
      modifierId: C,
      classGroupId: d,
      originalClassName: l,
      hasPostfixModifier: g
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
    var c = t[0], f = t.slice(1), d = f.reduce(function(g, p) {
      return p(g);
    }, c());
    return i = fo(d), r = i.cache.get, o = i.cache.set, l = s, s(a);
  }
  function s(a) {
    var c = r(a);
    if (c)
      return c;
    var f = ho(a, i);
    return o(a, f), f;
  }
  return function() {
    return l(no.apply(null, arguments));
  };
}
function q(e) {
  var t = function(i) {
    return i[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var si = /^\[(?:([a-z-]+):)?(.+)\]$/i, po = /^\d+\/\d+$/, mo = /* @__PURE__ */ new Set(["px", "full", "screen"]), bo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ko = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vo = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ce(e) {
  return ve(e) || mo.has(e) || po.test(e) || Ct(e);
}
function Ct(e) {
  return _e(e, "length", So);
}
function yo(e) {
  return _e(e, "size", ui);
}
function _o(e) {
  return _e(e, "position", ui);
}
function wo(e) {
  return _e(e, "url", Io);
}
function De(e) {
  return _e(e, "number", ve);
}
function ve(e) {
  return !Number.isNaN(Number(e));
}
function xo(e) {
  return e.endsWith("%") && ve(e.slice(0, -1));
}
function Ae(e) {
  return un(e) || _e(e, "number", un);
}
function R(e) {
  return si.test(e);
}
function Te() {
  return !0;
}
function me(e) {
  return bo.test(e);
}
function Co(e) {
  return _e(e, "", Mo);
}
function _e(e, t, n) {
  var i = si.exec(e);
  return i ? i[1] ? i[1] === t : n(i[2]) : !1;
}
function So(e) {
  return ko.test(e);
}
function ui() {
  return !1;
}
function Io(e) {
  return e.startsWith("url(");
}
function un(e) {
  return Number.isInteger(Number(e));
}
function Mo(e) {
  return vo.test(e);
}
function St() {
  var e = q("colors"), t = q("spacing"), n = q("blur"), i = q("brightness"), r = q("borderColor"), o = q("borderRadius"), l = q("borderSpacing"), u = q("borderWidth"), s = q("contrast"), a = q("grayscale"), c = q("hueRotate"), f = q("invert"), d = q("gap"), g = q("gradientColorStops"), p = q("gradientColorStopPositions"), C = q("inset"), y = q("margin"), S = q("opacity"), _ = q("padding"), A = q("saturate"), z = q("scale"), P = q("sepia"), w = q("skew"), H = q("space"), L = q("translate"), F = function() {
    return ["auto", "contain", "none"];
  }, Z = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, M = function() {
    return ["auto", R, t];
  }, x = function() {
    return [R, t];
  }, j = function() {
    return ["", ce];
  }, k = function() {
    return ["auto", ve, R];
  }, I = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, b = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, B = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, X = function() {
    return ["", "0", R];
  }, he = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ne = function() {
    return [ve, De];
  }, pe = function() {
    return [ve, R];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Te],
      spacing: [ce],
      blur: ["none", "", me, R],
      brightness: ne(),
      borderColor: [e],
      borderRadius: ["none", "", "full", me, R],
      borderSpacing: x(),
      borderWidth: j(),
      contrast: ne(),
      grayscale: X(),
      hueRotate: pe(),
      invert: X(),
      gap: x(),
      gradientColorStops: [e],
      gradientColorStopPositions: [xo, Ct],
      inset: M(),
      margin: M(),
      opacity: ne(),
      padding: x(),
      saturate: ne(),
      scale: ne(),
      sepia: X(),
      skew: pe(),
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
        aspect: ["auto", "square", "video", R]
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
        columns: [me]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": he()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": he()
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
        object: [].concat(I(), [R])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
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
        inset: [C]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [C]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [C]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [C]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [C]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [C]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [C]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [C]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [C]
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
        basis: M()
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
        flex: ["1", "auto", "initial", "none", R]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: X()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: X()
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
        "grid-cols": [Te]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ae]
        }, R]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": k()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": k()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Te]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ae]
        }, R]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": k()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": k()
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
        "auto-cols": ["auto", "min", "max", "fr", R]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", R]
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
        justify: ["normal"].concat(J())
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
        content: ["normal"].concat(J(), ["baseline"])
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
        "place-content": [].concat(J(), ["baseline"])
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
        p: [_]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [_]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [_]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [_]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [_]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [_]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [_]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [_]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [_]
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
        "space-x": [H]
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
        "space-y": [H]
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
        w: ["auto", "min", "max", "fit", R, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", R, ce]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [me]
        }, me, R]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [R, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", R, ce]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [R, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", me, Ct]
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
        font: [Te]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", R]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", R, ce]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", R]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", R]
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
        "placeholder-opacity": [S]
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
        "text-opacity": [S]
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
        decoration: [].concat(b(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ce]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", R, ce]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", R]
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
        content: ["none", R]
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
        "bg-opacity": [S]
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
        bg: [].concat(I(), [_o])
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
        bg: ["auto", "cover", "contain", yo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, wo]
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
        from: [p]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [p]
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
        "border-opacity": [S]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(b(), ["hidden"])
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
        "divide-opacity": [S]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: b()
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
        outline: [""].concat(b())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [R, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ce]
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
        "ring-opacity": [S]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ce]
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
        shadow: ["", "inner", "none", me, Co]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Te]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": B()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": B()
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
        "drop-shadow": ["", "none", me, R]
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
        saturate: [A]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [P]
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
        "backdrop-opacity": [S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [A]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [P]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", R]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: pe()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", R]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: pe()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", R]
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
        scale: [z]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [z]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [z]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ae, R]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", R]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", R]
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
        "will-change": ["auto", "scroll", "contents", "transform", R]
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
        stroke: [ce, De]
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
function jo(e, t) {
  for (var n in t)
    ci(e, n, t[n]);
  return e;
}
var Ao = Object.prototype.hasOwnProperty, To = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function ci(e, t, n) {
  if (!Ao.call(e, t) || To.has(typeof n) || n === null) {
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
      ci(e[t], i, n[i]);
  }
}
function Eo(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  return typeof e == "function" ? xt.apply(void 0, [St, e].concat(n)) : xt.apply(void 0, [function() {
    return jo(St(), e);
  }].concat(n));
}
var ai = /* @__PURE__ */ xt(St);
function re(...e) {
  return ai(to(e));
}
function Po(e, t) {
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
function zo(e) {
  let t = (
    /*href*/
    e[0] ? "a" : "button"
  ), n, i, r = (
    /*href*/
    (e[0] ? "a" : "button") && ct(e)
  );
  return {
    c() {
      r && r.c(), n = de();
    },
    m(o, l) {
      r && r.m(o, l), N(o, n, l), i = !0;
    },
    p(o, l) {
      /*href*/
      o[0], t ? K(
        t,
        /*href*/
        o[0] ? "a" : "button"
      ) ? (r.d(1), r = ct(o), t = /*href*/
      o[0] ? "a" : "button", r.c(), r.m(n.parentNode, n)) : r.p(o, l) : (r = ct(o), t = /*href*/
      o[0] ? "a" : "button", r.c(), r.m(n.parentNode, n));
    },
    i(o) {
      i || (T(r, o), i = !0);
    },
    o(o) {
      G(r, o), i = !1;
    },
    d(o) {
      o && O(n), r && r.d(o);
    }
  };
}
function Oo(e) {
  let t = (
    /*href*/
    e[0] ? "a" : "button"
  ), n, i, r = (
    /*href*/
    (e[0] ? "a" : "button") && at(e)
  );
  return {
    c() {
      r && r.c(), n = de();
    },
    m(o, l) {
      r && r.m(o, l), N(o, n, l), i = !0;
    },
    p(o, l) {
      /*href*/
      o[0], t ? K(
        t,
        /*href*/
        o[0] ? "a" : "button"
      ) ? (r.d(1), r = at(o), t = /*href*/
      o[0] ? "a" : "button", r.c(), r.m(n.parentNode, n)) : r.p(o, l) : (r = at(o), t = /*href*/
      o[0] ? "a" : "button", r.c(), r.m(n.parentNode, n));
    },
    i(o) {
      i || (T(r, o), i = !0);
    },
    o(o) {
      G(r, o), i = !1;
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
    a = le(a, s[c]);
  return {
    c() {
      t = v(
        /*href*/
        e[0] ? "a" : "button"
      ), u && u.c(), Ye(
        /*href*/
        e[0] ? "a" : "button"
      )(t, a);
    },
    m(c, f) {
      N(c, t, f), u && u.m(t, null), i = !0, r || (o = [
        Q(
          t,
          "click",
          /*click_handler_1*/
          e[12]
        ),
        Q(
          t,
          "change",
          /*change_handler_1*/
          e[13]
        ),
        Q(
          t,
          "keydown",
          /*keydown_handler_1*/
          e[14]
        ),
        Q(
          t,
          "keyup",
          /*keyup_handler_1*/
          e[15]
        ),
        Q(
          t,
          "mouseenter",
          /*mouseenter_handler_1*/
          e[16]
        ),
        Q(
          t,
          "mouseleave",
          /*mouseleave_handler_1*/
          e[17]
        )
      ], r = !0);
    },
    p(c, f) {
      u && u.p && (!i || f & /*$$scope*/
      16) && At(
        u,
        l,
        c,
        /*$$scope*/
        c[4],
        i ? jt(
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
      )(t, a = Fe(s, [
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
      i || (T(u, c), i = !0);
    },
    o(c) {
      G(u, c), i = !1;
    },
    d(c) {
      c && O(t), u && u.d(c), r = !1, be(o);
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
    c = le(c, a[f]);
  return {
    c() {
      t = v(
        /*href*/
        e[0] ? "a" : "button"
      ), s && s.c(), Ye(
        /*href*/
        e[0] ? "a" : "button"
      )(t, c);
    },
    m(f, d) {
      N(f, t, d), s && s.m(t, null), r = !0, o || (l = [
        Q(
          t,
          "click",
          /*click_handler*/
          e[6]
        ),
        Q(
          t,
          "change",
          /*change_handler*/
          e[7]
        ),
        Q(
          t,
          "keydown",
          /*keydown_handler*/
          e[8]
        ),
        Q(
          t,
          "keyup",
          /*keyup_handler*/
          e[9]
        ),
        Q(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        Q(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[11]
        ),
        yi(i = Po.call(null, t, { builders: (
          /*builders*/
          e[2]
        ) }))
      ], o = !0);
    },
    p(f, d) {
      s && s.p && (!r || d & /*$$scope*/
      16) && At(
        s,
        u,
        f,
        /*$$scope*/
        f[4],
        r ? jt(
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
      )(t, c = Fe(a, [
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
      ])), i && Ge(i.update) && d & /*builders*/
      4 && i.update.call(null, { builders: (
        /*builders*/
        f[2]
      ) });
    },
    i(f) {
      r || (T(s, f), r = !0);
    },
    o(f) {
      G(s, f), r = !1;
    },
    d(f) {
      f && O(t), s && s.d(f), o = !1, be(l);
    }
  };
}
function Lo(e) {
  let t, n, i, r;
  const o = [Oo, zo], l = [];
  function u(s, a) {
    return (
      /*builders*/
      s[2] && /*builders*/
      s[2].length ? 0 : 1
    );
  }
  return t = u(e), n = l[t] = o[t](e), {
    c() {
      n.c(), i = de();
    },
    m(s, a) {
      l[t].m(s, a), N(s, i, a), r = !0;
    },
    p(s, [a]) {
      let c = t;
      t = u(s), t === c ? l[t].p(s, a) : (se(), G(l[c], 1, 1, () => {
        l[c] = null;
      }), ue(), n = l[t], n ? n.p(s, a) : (n = l[t] = o[t](s), n.c()), T(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (T(n), r = !0);
    },
    o(s) {
      G(n), r = !1;
    },
    d(s) {
      s && O(i), l[t].d(s);
    }
  };
}
function No(e, t, n) {
  const i = ["href", "type", "builders"];
  let r = Xe(t, i), { $$slots: o = {}, $$scope: l } = t, { href: u = void 0 } = t, { type: s = void 0 } = t, { builders: a = [] } = t;
  function c(w) {
    ie.call(this, e, w);
  }
  function f(w) {
    ie.call(this, e, w);
  }
  function d(w) {
    ie.call(this, e, w);
  }
  function g(w) {
    ie.call(this, e, w);
  }
  function p(w) {
    ie.call(this, e, w);
  }
  function C(w) {
    ie.call(this, e, w);
  }
  function y(w) {
    ie.call(this, e, w);
  }
  function S(w) {
    ie.call(this, e, w);
  }
  function _(w) {
    ie.call(this, e, w);
  }
  function A(w) {
    ie.call(this, e, w);
  }
  function z(w) {
    ie.call(this, e, w);
  }
  function P(w) {
    ie.call(this, e, w);
  }
  return e.$$set = (w) => {
    t = le(le({}, t), Je(w)), n(3, r = Xe(t, i)), "href" in w && n(0, u = w.href), "type" in w && n(1, s = w.type), "builders" in w && n(2, a = w.builders), "$$scope" in w && n(4, l = w.$$scope);
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
    g,
    p,
    C,
    y,
    S,
    _,
    A,
    z,
    P
  ];
}
let Bo = class extends te {
  constructor(t) {
    super(), ee(this, t, No, Lo, K, { href: 0, type: 1, builders: 2 });
  }
};
function Go(e) {
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
      256) && At(
        i,
        n,
        r,
        /*$$scope*/
        r[8],
        t ? jt(
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
      t || (T(i, r), t = !0);
    },
    o(r) {
      G(i, r), t = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ro(e) {
  let t, n;
  const i = [
    { builders: (
      /*builders*/
      e[3]
    ) },
    {
      class: re(gn({
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
    $$slots: { default: [Go] },
    $$scope: { ctx: e }
  };
  for (let o = 0; o < i.length; o += 1)
    r = le(r, i[o]);
  return t = new Bo({ props: r }), t.$on(
    "click",
    /*click_handler*/
    e[6]
  ), t.$on(
    "keydown",
    /*keydown_handler*/
    e[7]
  ), {
    c() {
      ge(t.$$.fragment);
    },
    m(o, l) {
      ae(t, o, l), n = !0;
    },
    p(o, [l]) {
      const u = l & /*builders, cn, buttonVariants, variant, size, className, $$restProps*/
      31 ? Fe(i, [
        l & /*builders*/
        8 && { builders: (
          /*builders*/
          o[3]
        ) },
        l & /*cn, buttonVariants, variant, size, className*/
        7 && {
          class: re(gn({
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
        16 && Pi(
          /*$$restProps*/
          o[4]
        )
      ]) : {};
      l & /*$$scope*/
      256 && (u.$$scope = { dirty: l, ctx: o }), t.$set(u);
    },
    i(o) {
      n || (T(t.$$.fragment, o), n = !0);
    },
    o(o) {
      G(t.$$.fragment, o), n = !1;
    },
    d(o) {
      fe(t, o);
    }
  };
}
function Fo(e, t, n) {
  const i = ["class", "variant", "size", "builders"];
  let r = Xe(t, i), { $$slots: o = {}, $$scope: l } = t, { class: u = void 0 } = t, { variant: s = "default" } = t, { size: a = "default" } = t, { builders: c = [] } = t;
  function f(g) {
    ie.call(this, e, g);
  }
  function d(g) {
    ie.call(this, e, g);
  }
  return e.$$set = (g) => {
    t = le(le({}, t), Je(g)), n(4, r = Xe(t, i)), "class" in g && n(0, u = g.class), "variant" in g && n(1, s = g.variant), "size" in g && n(2, a = g.size), "builders" in g && n(3, c = g.builders), "$$scope" in g && n(8, l = g.$$scope);
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
class Vo extends te {
  constructor(t) {
    super(), ee(this, t, Fo, Ro, K, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
}
var an = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, $ = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Ho = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function fi(e, t) {
  e.forEach(function(n) {
    Array.isArray(n) ? fi(n, t) : t.push(n);
  });
}
function di(e) {
  let t = [];
  return fi(e, t), t;
}
var Wo = (...e) => di(e).filter(Boolean), gi = (e, t) => {
  let n = {}, i = Object.keys(e), r = Object.keys(t);
  for (let o of i)
    if (r.includes(o)) {
      let l = e[o], u = t[o];
      typeof l == "object" && typeof u == "object" ? n[o] = gi(l, u) : n[o] = u + " " + l;
    } else
      n[o] = e[o];
  for (let o of r)
    i.includes(o) || (n[o] = t[o]);
  return n;
}, fn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), Do = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, hi = (e) => e || void 0, $e = (...e) => hi(di(e).filter(Boolean).join(" ")), ft = null, et = {}, It = !1, Ee = (...e) => (t) => t.twMerge ? ((!ft || It) && (It = !1, ft = $(et) ? ai : Eo(et)), hi(ft($e(e)))) : $e(e), dn = (e, t) => {
  for (let n in t)
    e.hasOwnProperty(n) ? e[n] = $e(e[n], t[n]) : e[n] = t[n];
  return e;
}, qo = (e, t) => {
  let { extend: n = null, slots: i = {}, variants: r = {}, compoundVariants: o = [], compoundSlots: l = [], defaultVariants: u = {} } = e, s = { ...Do, ...t }, a = n != null && n.base ? $e(n.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, c = n != null && n.variants && !$(n.variants) ? gi(r, n.variants) : r, f = n != null && n.defaultVariants && !$(n.defaultVariants) ? { ...n.defaultVariants, ...u } : u;
  !$(s.twMergeConfig) && !Ho(s.twMergeConfig, et) && (It = !0, et = s.twMergeConfig);
  let d = $(i) ? {} : { base: e == null ? void 0 : e.base, ...i }, g = $(n == null ? void 0 : n.slots) ? d : dn(n == null ? void 0 : n.slots, $(d) ? { base: e == null ? void 0 : e.base } : d), p = (y) => {
    if ($(c) && $(i) && $(n == null ? void 0 : n.slots))
      return Ee(a, y == null ? void 0 : y.class, y == null ? void 0 : y.className)(s);
    if (o && !Array.isArray(o))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof o}`);
    if (l && !Array.isArray(l))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
    let S = (M, x, j = [], k) => {
      let I = j;
      if (typeof x == "string")
        I = I.concat(fn(x).split(" ").map((b) => `${M}:${b}`));
      else if (Array.isArray(x))
        I = I.concat(x.reduce((b, B) => b.concat(`${M}:${B}`), []));
      else if (typeof x == "object" && typeof k == "string") {
        for (let b in x)
          if (x.hasOwnProperty(b) && b === k) {
            let B = x[b];
            if (B && typeof B == "string") {
              let J = fn(B);
              I[k] ? I[k] = I[k].concat(J.split(" ").map((X) => `${M}:${X}`)) : I[k] = J.split(" ").map((X) => `${M}:${X}`);
            } else
              Array.isArray(B) && B.length > 0 && (I[k] = B.reduce((J, X) => J.concat(`${M}:${X}`), []));
          }
      }
      return I;
    }, _ = (M, x = c, j = null, k = null) => {
      var I;
      let b = x[M];
      if (!b || $(b))
        return null;
      let B = (I = k == null ? void 0 : k[M]) != null ? I : y == null ? void 0 : y[M];
      if (B === null)
        return null;
      let J = an(B), X = Array.isArray(s.responsiveVariants) && s.responsiveVariants.length > 0 || s.responsiveVariants === !0, he = f == null ? void 0 : f[M], ne = [];
      if (typeof J == "object" && X)
        for (let [Y, Rt] of Object.entries(J)) {
          let mi = b[Rt];
          if (Y === "initial") {
            he = Rt;
            continue;
          }
          Array.isArray(s.responsiveVariants) && !s.responsiveVariants.includes(Y) || (ne = S(Y, mi, ne, j));
        }
      let pe = b[J] || b[an(he)];
      return typeof ne == "object" && typeof j == "string" && ne[j] ? dn(ne, pe) : ne.length > 0 ? (ne.push(pe), ne) : pe;
    }, A = () => c ? Object.keys(c).map((M) => _(M, c)) : null, z = (M, x) => {
      if (!c || typeof c != "object")
        return null;
      let j = new Array();
      for (let k in c) {
        let I = _(k, c, M, x), b = M === "base" && typeof I == "string" ? I : I && I[M];
        b && (j[j.length] = b);
      }
      return j;
    }, P = {};
    for (let M in y)
      y[M] !== void 0 && (P[M] = y[M]);
    let w = (M, x) => {
      var j;
      let k = typeof (y == null ? void 0 : y[M]) == "object" ? { [M]: (j = y[M]) == null ? void 0 : j.initial } : {};
      return { ...f, ...P, ...k, ...x };
    }, H = (M = [], x) => {
      let j = [];
      for (let { class: k, className: I, ...b } of M) {
        let B = !0;
        for (let [J, X] of Object.entries(b)) {
          let he = w(J, x);
          if (Array.isArray(X)) {
            if (!X.includes(he[J])) {
              B = !1;
              break;
            }
          } else if (he[J] !== X) {
            B = !1;
            break;
          }
        }
        B && (k && j.push(k), I && j.push(I));
      }
      return j;
    }, L = (M) => {
      let x = H(o, M), j = H(n == null ? void 0 : n.compoundVariants, M);
      return Wo(j, x);
    }, F = (M) => {
      let x = L(M);
      if (!Array.isArray(x))
        return x;
      let j = {};
      for (let k of x)
        if (typeof k == "string" && (j.base = Ee(j.base, k)(s)), typeof k == "object")
          for (let [I, b] of Object.entries(k))
            j[I] = Ee(j[I], b)(s);
      return j;
    }, Z = (M) => {
      if (l.length < 1)
        return null;
      let x = {};
      for (let { slots: j = [], class: k, className: I, ...b } of l) {
        if (!$(b)) {
          let B = !0;
          for (let J of Object.keys(b)) {
            let X = w(J, M)[J];
            if (X === void 0 || X !== b[J]) {
              B = !1;
              break;
            }
          }
          if (!B)
            continue;
        }
        for (let B of j)
          x[B] = x[B] || [], x[B].push([k, I]);
      }
      return x;
    };
    if (!$(i) || !$(n == null ? void 0 : n.slots)) {
      let M = {};
      if (typeof g == "object" && !$(g))
        for (let x of Object.keys(g))
          M[x] = (j) => {
            var k, I;
            return Ee(g[x], z(x, j), ((k = F(j)) != null ? k : [])[x], ((I = Z(j)) != null ? I : [])[x], j == null ? void 0 : j.class, j == null ? void 0 : j.className)(s);
          };
      return M;
    }
    return Ee(a, A(), L(), y == null ? void 0 : y.class, y == null ? void 0 : y.className)(s);
  }, C = () => {
    if (!(!c || typeof c != "object"))
      return Object.keys(c);
  };
  return p.variantKeys = C(), p.extend = n, p.base = a, p.slots = g, p.variants = c, p.defaultVariants = f, p.compoundSlots = l, p.compoundVariants = o, p;
};
const gn = qo({
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
function Uo(e) {
  let t, n, i = (
    /*title*/
    e[3] + ""
  ), r, o, l;
  return t = new Me({
    props: {
      class: "uikit-mr-2 uikit-h-4 uikit-w-4",
      icon: (
        /*icon*/
        e[7]
      )
    }
  }), {
    c() {
      ge(t.$$.fragment), n = E(), r = V(i), o = E();
    },
    m(u, s) {
      ae(t, u, s), N(u, n, s), N(u, r, s), N(u, o, s), l = !0;
    },
    p(u, s) {
      const a = {};
      s & /*menus*/
      2 && (a.icon = /*icon*/
      u[7]), t.$set(a), (!l || s & /*menus*/
      2) && i !== (i = /*title*/
      u[3] + "") && W(r, i);
    },
    i(u) {
      l || (T(t.$$.fragment, u), l = !0);
    },
    o(u) {
      G(t.$$.fragment, u), l = !1;
    },
    d(u) {
      u && (O(n), O(r), O(o)), fe(t, u);
    }
  };
}
function mn(e) {
  let t, n;
  return t = new Vo({
    props: {
      variant: "uikit-secondary",
      class: "uikit-w-full uikit-justify-start",
      $$slots: { default: [Uo] },
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
      ge(t.$$.fragment);
    },
    m(i, r) {
      ae(t, i, r), n = !0;
    },
    p(i, r) {
      e = i;
      const o = {};
      r & /*$$scope, menus*/
      2050 && (o.$$scope = { dirty: r, ctx: e }), t.$set(o);
    },
    i(i) {
      n || (T(t.$$.fragment, i), n = !0);
    },
    o(i) {
      G(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function bn(e) {
  let t, n, i = (
    /*title*/
    e[3] + ""
  ), r, o, l, u, s, a = U(
    /*items*/
    e[4]
  ), c = [];
  for (let d = 0; d < a.length; d += 1)
    c[d] = mn(pn(e, a, d));
  const f = (d) => G(c[d], 1, 1, () => {
    c[d] = null;
  });
  return {
    c() {
      t = v("div"), n = v("h2"), r = V(i), o = E(), l = v("div");
      for (let d = 0; d < c.length; d += 1)
        c[d].c();
      u = E(), m(n, "class", "uikit-mb-2 uikit-px-4 uikit-text-lg uikit-font-semibold uikit-tracking-tight"), m(l, "class", "uikit-space-y-1"), m(t, "class", "uikit-px-3 uikit-py-2 uikit-w-full");
    },
    m(d, g) {
      N(d, t, g), h(t, n), h(n, r), h(t, o), h(t, l);
      for (let p = 0; p < c.length; p += 1)
        c[p] && c[p].m(l, null);
      h(t, u), s = !0;
    },
    p(d, g) {
      if ((!s || g & /*menus*/
      2) && i !== (i = /*title*/
      d[3] + "") && W(r, i), g & /*onClick, menus*/
      6) {
        a = U(
          /*items*/
          d[4]
        );
        let p;
        for (p = 0; p < a.length; p += 1) {
          const C = pn(d, a, p);
          c[p] ? (c[p].p(C, g), T(c[p], 1)) : (c[p] = mn(C), c[p].c(), T(c[p], 1), c[p].m(l, null));
        }
        for (se(), p = a.length; p < c.length; p += 1)
          f(p);
        ue();
      }
    },
    i(d) {
      if (!s) {
        for (let g = 0; g < a.length; g += 1)
          T(c[g]);
        s = !0;
      }
    },
    o(d) {
      c = c.filter(Boolean);
      for (let g = 0; g < c.length; g += 1)
        G(c[g]);
      s = !1;
    },
    d(d) {
      d && O(t), oe(c, d);
    }
  };
}
function Zo(e) {
  let t, n, i, r, o = U(
    /*menus*/
    e[1]
  ), l = [];
  for (let s = 0; s < o.length; s += 1)
    l[s] = bn(hn(e, o, s));
  const u = (s) => G(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      t = v("div"), n = v("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      m(n, "class", "uikit-space-y-4 uikit-py-4"), m(t, "class", i = re(
        "uikit-pb-12",
        /*className*/
        e[0]
      ));
    },
    m(s, a) {
      N(s, t, a), h(t, n);
      for (let c = 0; c < l.length; c += 1)
        l[c] && l[c].m(n, null);
      r = !0;
    },
    p(s, [a]) {
      if (a & /*menus, onClick*/
      6) {
        o = U(
          /*menus*/
          s[1]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const f = hn(s, o, c);
          l[c] ? (l[c].p(f, a), T(l[c], 1)) : (l[c] = bn(f), l[c].c(), T(l[c], 1), l[c].m(n, null));
        }
        for (se(), c = o.length; c < l.length; c += 1)
          u(c);
        ue();
      }
      (!r || a & /*className*/
      1 && i !== (i = re(
        "uikit-pb-12",
        /*className*/
        s[0]
      ))) && m(t, "class", i);
    },
    i(s) {
      if (!r) {
        for (let a = 0; a < o.length; a += 1)
          T(l[a]);
        r = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let a = 0; a < l.length; a += 1)
        G(l[a]);
      r = !1;
    },
    d(s) {
      s && O(t), oe(l, s);
    }
  };
}
function Qo(e, t, n) {
  let { class: i = void 0 } = t, { menus: r = [] } = t, { onClick: o = (l) => {
    console.log(l);
  } } = t;
  return e.$$set = (l) => {
    "class" in l && n(0, i = l.class), "menus" in l && n(1, r = l.menus), "onClick" in l && n(2, o = l.onClick);
  }, [i, r, o];
}
class wl extends te {
  constructor(t) {
    super(), ee(this, t, Qo, Zo, K, { class: 0, menus: 1, onClick: 2 });
  }
}
function kn(e, t, n) {
  const i = e.slice();
  return i[2] = t[n].type, i[3] = t[n].height, i[4] = t[n].width, i[5] = t[n].items, i[6] = t[n].id, i[8] = n, i;
}
function Jo(e) {
  let t, n, i, r;
  return {
    c() {
      t = v("div"), n = V("content"), m(t, "id", i = `${/*depth*/
      e[1]}${/*i*/
      e[8]}-`), m(t, "class", r = Vt(
        /*width*/
        e[4]
      ) + " svelte-1jbas83");
    },
    m(o, l) {
      N(o, t, l), h(t, n);
    },
    p(o, l) {
      l & /*depth*/
      2 && i !== (i = `${/*depth*/
      o[1]}${/*i*/
      o[8]}-`) && m(t, "id", i), l & /*grids*/
      1 && r !== (r = Vt(
        /*width*/
        o[4]
      ) + " svelte-1jbas83") && m(t, "class", r);
    },
    i: D,
    o: D,
    d(o) {
      o && O(t);
    }
  };
}
function Xo(e) {
  let t, n, i, r;
  return n = new pi({
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
      t = v("div"), ge(n.$$.fragment), i = E(), m(t, "class", "uikit-flex uikit-w-full"), Se(
        t,
        "height",
        /*height*/
        e[3] || "200px"
      );
    },
    m(o, l) {
      N(o, t, l), ae(n, t, null), h(t, i), r = !0;
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
      r || (T(n.$$.fragment, o), r = !0);
    },
    o(o) {
      G(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && O(t), fe(n);
    }
  };
}
function vn(e) {
  let t, n, i, r;
  const o = [Xo, Jo], l = [];
  function u(s, a) {
    return (
      /*type*/
      s[2] === "row" ? 0 : 1
    );
  }
  return t = u(e), n = l[t] = o[t](e), {
    c() {
      n.c(), i = de();
    },
    m(s, a) {
      l[t].m(s, a), N(s, i, a), r = !0;
    },
    p(s, a) {
      let c = t;
      t = u(s), t === c ? l[t].p(s, a) : (se(), G(l[c], 1, 1, () => {
        l[c] = null;
      }), ue(), n = l[t], n ? n.p(s, a) : (n = l[t] = o[t](s), n.c()), T(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (T(n), r = !0);
    },
    o(s) {
      G(n), r = !1;
    },
    d(s) {
      s && O(i), l[t].d(s);
    }
  };
}
function Yo(e) {
  let t, n, i = U(
    /*grids*/
    e[0]
  ), r = [];
  for (let l = 0; l < i.length; l += 1)
    r[l] = vn(kn(e, i, l));
  const o = (l) => G(r[l], 1, 1, () => {
    r[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      t = de();
    },
    m(l, u) {
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(l, u);
      N(l, t, u), n = !0;
    },
    p(l, [u]) {
      if (u & /*grids, depth*/
      3) {
        i = U(
          /*grids*/
          l[0]
        );
        let s;
        for (s = 0; s < i.length; s += 1) {
          const a = kn(l, i, s);
          r[s] ? (r[s].p(a, u), T(r[s], 1)) : (r[s] = vn(a), r[s].c(), T(r[s], 1), r[s].m(t.parentNode, t));
        }
        for (se(), s = i.length; s < r.length; s += 1)
          o(s);
        ue();
      }
    },
    i(l) {
      if (!n) {
        for (let u = 0; u < i.length; u += 1)
          T(r[u]);
        n = !0;
      }
    },
    o(l) {
      r = r.filter(Boolean);
      for (let u = 0; u < r.length; u += 1)
        G(r[u]);
      n = !1;
    },
    d(l) {
      l && O(t), oe(r, l);
    }
  };
}
function Ko(e, t, n) {
  let { grids: i = [] } = t, { depth: r = "" } = t;
  return e.$$set = (o) => {
    "grids" in o && n(0, i = o.grids), "depth" in o && n(1, r = o.depth);
  }, [i, r];
}
class pi extends te {
  constructor(t) {
    super(), ee(this, t, Ko, Yo, K, { grids: 0, depth: 1 });
  }
}
function yn(e, t, n) {
  const i = e.slice();
  return i[10] = t[n].type, i[11] = t[n].title, i[12] = t[n].url, i[13] = t[n].icon, i[14] = t[n].items, i;
}
function _n(e, t, n) {
  const i = e.slice();
  return i[11] = t[n].title, i[12] = t[n].url, i;
}
function wn(e, t, n) {
  const i = e.slice();
  return i[10] = t[n].type, i[11] = t[n].title, i[12] = t[n].url, i[13] = t[n].icon, i[14] = t[n].items, i;
}
function xn(e, t, n) {
  const i = e.slice();
  return i[11] = t[n].title, i[12] = t[n].url, i;
}
function $o(e) {
  let t, n, i, r, o = (
    /*title*/
    e[11] + ""
  ), l, u, s, a, c;
  i = new Me({ props: { icon: (
    /*icon*/
    e[13]
  ) } });
  function f() {
    return (
      /*click_handler_2*/
      e[7](
        /*url*/
        e[12]
      )
    );
  }
  return {
    c() {
      t = v("li"), n = v("button"), ge(i.$$.fragment), r = v("span"), l = V(o), u = E(), m(r, "class", "uikit-ml-2"), m(n, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case"), m(t, "class", "nav-item");
    },
    m(d, g) {
      N(d, t, g), h(t, n), ae(i, n, null), h(n, r), h(r, l), h(t, u), s = !0, a || (c = Q(n, "click", f), a = !0);
    },
    p(d, g) {
      e = d;
      const p = {};
      g & /*links*/
      8 && (p.icon = /*icon*/
      e[13]), i.$set(p), (!s || g & /*links*/
      8) && o !== (o = /*title*/
      e[11] + "") && W(l, o);
    },
    i(d) {
      s || (T(i.$$.fragment, d), s = !0);
    },
    o(d) {
      G(i.$$.fragment, d), s = !1;
    },
    d(d) {
      d && O(t), fe(i), a = !1, c();
    }
  };
}
function el(e) {
  let t, n, i, r = (
    /*title*/
    e[11] + ""
  ), o, l, u, s, a = U(
    /*items*/
    e[14]
  ), c = [];
  for (let f = 0; f < a.length; f += 1)
    c[f] = Cn(xn(e, a, f));
  return {
    c() {
      t = v("li"), n = v("div"), i = v("label"), o = V(r), l = E(), u = v("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      s = E(), m(i, "tabindex", "1"), m(i, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), m(u, "tabindex", "1"), m(u, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), m(n, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), m(t, "class", "nav-item");
    },
    m(f, d) {
      N(f, t, d), h(t, n), h(n, i), h(i, o), h(n, l), h(n, u);
      for (let g = 0; g < c.length; g += 1)
        c[g] && c[g].m(u, null);
      h(t, s);
    },
    p(f, d) {
      if (d & /*links*/
      8 && r !== (r = /*title*/
      f[11] + "") && W(o, r), d & /*onItemClick, links*/
      24) {
        a = U(
          /*items*/
          f[14]
        );
        let g;
        for (g = 0; g < a.length; g += 1) {
          const p = xn(f, a, g);
          c[g] ? c[g].p(p, d) : (c[g] = Cn(p), c[g].c(), c[g].m(u, null));
        }
        for (; g < c.length; g += 1)
          c[g].d(1);
        c.length = a.length;
      }
    },
    i: D,
    o: D,
    d(f) {
      f && O(t), oe(c, f);
    }
  };
}
function Cn(e) {
  let t, n, i = (
    /*title*/
    e[11] + ""
  ), r, o, l, u;
  function s() {
    return (
      /*click_handler_1*/
      e[6](
        /*url*/
        e[12]
      )
    );
  }
  return {
    c() {
      t = v("li"), n = v("button"), r = V(i), o = E();
    },
    m(a, c) {
      N(a, t, c), h(t, n), h(n, r), h(t, o), l || (u = Q(n, "click", s), l = !0);
    },
    p(a, c) {
      e = a, c & /*links*/
      8 && i !== (i = /*title*/
      e[11] + "") && W(r, i);
    },
    d(a) {
      a && O(t), l = !1, u();
    }
  };
}
function Sn(e) {
  let t, n, i, r;
  const o = [el, $o], l = [];
  function u(s, a) {
    return (
      /*type*/
      s[10] === "menu" ? 0 : 1
    );
  }
  return t = u(e), n = l[t] = o[t](e), {
    c() {
      n.c(), i = de();
    },
    m(s, a) {
      l[t].m(s, a), N(s, i, a), r = !0;
    },
    p(s, a) {
      let c = t;
      t = u(s), t === c ? l[t].p(s, a) : (se(), G(l[c], 1, 1, () => {
        l[c] = null;
      }), ue(), n = l[t], n ? n.p(s, a) : (n = l[t] = o[t](s), n.c()), T(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (T(n), r = !0);
    },
    o(s) {
      G(n), r = !1;
    },
    d(s) {
      s && O(i), l[t].d(s);
    }
  };
}
function tl(e) {
  let t, n, i, r, o = (
    /*title*/
    e[11] + ""
  ), l, u, s, a, c;
  i = new Me({ props: { icon: (
    /*icon*/
    e[13]
  ) } });
  function f() {
    return (
      /*click_handler_4*/
      e[9](
        /*url*/
        e[12]
      )
    );
  }
  return {
    c() {
      t = v("li"), n = v("button"), ge(i.$$.fragment), r = v("span"), l = V(o), u = E(), m(r, "class", "uikit-ml-2"), m(n, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case uikit-items-start"), m(t, "class", "uikit-nav-item");
    },
    m(d, g) {
      N(d, t, g), h(t, n), ae(i, n, null), h(n, r), h(r, l), h(t, u), s = !0, a || (c = Q(n, "click", f), a = !0);
    },
    p(d, g) {
      e = d;
      const p = {};
      g & /*links*/
      8 && (p.icon = /*icon*/
      e[13]), i.$set(p), (!s || g & /*links*/
      8) && o !== (o = /*title*/
      e[11] + "") && W(l, o);
    },
    i(d) {
      s || (T(i.$$.fragment, d), s = !0);
    },
    o(d) {
      G(i.$$.fragment, d), s = !1;
    },
    d(d) {
      d && O(t), fe(i), a = !1, c();
    }
  };
}
function nl(e) {
  let t, n, i, r = (
    /*title*/
    e[11] + ""
  ), o, l, u, s, a = U(
    /*items*/
    e[14]
  ), c = [];
  for (let f = 0; f < a.length; f += 1)
    c[f] = In(_n(e, a, f));
  return {
    c() {
      t = v("li"), n = v("div"), i = v("label"), o = V(r), l = E(), u = v("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      s = E(), m(i, "tabindex", "1"), m(i, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), m(u, "tabindex", "1"), m(u, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), m(n, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), m(t, "class", "uikit-nav-item uikit-w-full");
    },
    m(f, d) {
      N(f, t, d), h(t, n), h(n, i), h(i, o), h(n, l), h(n, u);
      for (let g = 0; g < c.length; g += 1)
        c[g] && c[g].m(u, null);
      h(t, s);
    },
    p(f, d) {
      if (d & /*links*/
      8 && r !== (r = /*title*/
      f[11] + "") && W(o, r), d & /*onItemClick, links*/
      24) {
        a = U(
          /*items*/
          f[14]
        );
        let g;
        for (g = 0; g < a.length; g += 1) {
          const p = _n(f, a, g);
          c[g] ? c[g].p(p, d) : (c[g] = In(p), c[g].c(), c[g].m(u, null));
        }
        for (; g < c.length; g += 1)
          c[g].d(1);
        c.length = a.length;
      }
    },
    i: D,
    o: D,
    d(f) {
      f && O(t), oe(c, f);
    }
  };
}
function In(e) {
  let t, n, i = (
    /*title*/
    e[11] + ""
  ), r, o, l, u;
  function s() {
    return (
      /*click_handler_3*/
      e[8](
        /*url*/
        e[12]
      )
    );
  }
  return {
    c() {
      t = v("li"), n = v("button"), r = V(i), o = E();
    },
    m(a, c) {
      N(a, t, c), h(t, n), h(n, r), h(t, o), l || (u = Q(n, "click", s), l = !0);
    },
    p(a, c) {
      e = a, c & /*links*/
      8 && i !== (i = /*title*/
      e[11] + "") && W(r, i);
    },
    d(a) {
      a && O(t), l = !1, u();
    }
  };
}
function Mn(e) {
  let t, n, i, r;
  const o = [nl, tl], l = [];
  function u(s, a) {
    return (
      /*type*/
      s[10] === "menu" ? 0 : 1
    );
  }
  return t = u(e), n = l[t] = o[t](e), {
    c() {
      n.c(), i = de();
    },
    m(s, a) {
      l[t].m(s, a), N(s, i, a), r = !0;
    },
    p(s, a) {
      let c = t;
      t = u(s), t === c ? l[t].p(s, a) : (se(), G(l[c], 1, 1, () => {
        l[c] = null;
      }), ue(), n = l[t], n ? n.p(s, a) : (n = l[t] = o[t](s), n.c()), T(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (T(n), r = !0);
    },
    o(s) {
      G(n), r = !1;
    },
    d(s) {
      s && O(i), l[t].d(s);
    }
  };
}
function il(e) {
  let t, n, i, r, o, l, u, s, a, c, f, d, g, p, C, y, S, _, A, z, P, w, H, L = U(
    /*links*/
    e[3]
  ), F = [];
  for (let k = 0; k < L.length; k += 1)
    F[k] = Sn(wn(e, L, k));
  const Z = (k) => G(F[k], 1, 1, () => {
    F[k] = null;
  });
  let M = U(
    /*links*/
    e[3]
  ), x = [];
  for (let k = 0; k < M.length; k += 1)
    x[k] = Mn(yn(e, M, k));
  const j = (k) => G(x[k], 1, 1, () => {
    x[k] = null;
  });
  return {
    c() {
      t = v("nav"), n = v("div"), i = v("div"), r = v("button"), o = V(
        /*logotxt*/
        e[1]
      ), l = E(), u = v("div"), s = v("ul");
      for (let k = 0; k < F.length; k += 1)
        F[k].c();
      a = E(), c = v("div"), f = v("div"), d = v("input"), g = E(), p = v("div"), p.innerHTML = '<label for="my-drawer" class="uikit-btn uikit-btn-ghost uikit-drawer-button"><div class="uikit-ml-1 uikit-mr-1 uikit-h-8 uikit-w-8 uikit-rounded uikit-py-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="uikit-text-gray-900 dark:uikit-text-gray-100"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></div></label>', C = E(), y = v("div"), S = v("label"), _ = E(), A = v("ul");
      for (let k = 0; k < x.length; k += 1)
        x[k].c();
      m(r, "class", "uikit-text-sm uikit-font-bold uikit-leading-relaxed uikit-inline-block uikit-mr-4 uikit-py-2 uikit-whitespace-nowrap uikit-text-slate-700"), m(i, "class", "uikit-relative uikit-flex uikit-justify-between lg:uikit-w-auto lg:uikit-static lg:uikit-block lg:uikit-justify-start"), m(s, "class", "uikit-flex uikit-flex-col lg:uikit-flex-row uikit-list-none lg:uikit-ml-auto"), m(u, "class", "lg:uikit-flex uikit-flex-grow uikit-items-center uikit-hidden"), m(d, "id", "my-drawer"), m(d, "type", "checkbox"), m(d, "class", "uikit-drawer-toggle"), m(p, "class", "uikit-drawer-content"), m(S, "for", "my-drawer"), m(S, "class", "uikit-drawer-overlay"), m(A, "class", "uikit-menu uikit-p-4 uikit-w-80 uikit-min-h-full uikit-bg-base-200 uikit-text-base-content"), m(y, "class", "uikit-drawer-side"), m(f, "class", "uikit-drawer"), m(c, "class", "lg:uikit-hidden"), m(n, "class", "uikit-container uikit-px-4 uikit-mx-auto uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between"), m(t, "class", z = re(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        e[0]
      ));
    },
    m(k, I) {
      N(k, t, I), h(t, n), h(n, i), h(i, r), h(r, o), h(n, l), h(n, u), h(u, s);
      for (let b = 0; b < F.length; b += 1)
        F[b] && F[b].m(s, null);
      h(n, a), h(n, c), h(c, f), h(f, d), h(f, g), h(f, p), h(f, C), h(f, y), h(y, S), h(y, _), h(y, A);
      for (let b = 0; b < x.length; b += 1)
        x[b] && x[b].m(A, null);
      P = !0, w || (H = Q(
        r,
        "click",
        /*click_handler*/
        e[5]
      ), w = !0);
    },
    p(k, [I]) {
      if ((!P || I & /*logotxt*/
      2) && W(
        o,
        /*logotxt*/
        k[1]
      ), I & /*links, onItemClick*/
      24) {
        L = U(
          /*links*/
          k[3]
        );
        let b;
        for (b = 0; b < L.length; b += 1) {
          const B = wn(k, L, b);
          F[b] ? (F[b].p(B, I), T(F[b], 1)) : (F[b] = Sn(B), F[b].c(), T(F[b], 1), F[b].m(s, null));
        }
        for (se(), b = L.length; b < F.length; b += 1)
          Z(b);
        ue();
      }
      if (I & /*links, onItemClick*/
      24) {
        M = U(
          /*links*/
          k[3]
        );
        let b;
        for (b = 0; b < M.length; b += 1) {
          const B = yn(k, M, b);
          x[b] ? (x[b].p(B, I), T(x[b], 1)) : (x[b] = Mn(B), x[b].c(), T(x[b], 1), x[b].m(A, null));
        }
        for (se(), b = M.length; b < x.length; b += 1)
          j(b);
        ue();
      }
      (!P || I & /*className*/
      1 && z !== (z = re(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        k[0]
      ))) && m(t, "class", z);
    },
    i(k) {
      if (!P) {
        for (let I = 0; I < L.length; I += 1)
          T(F[I]);
        for (let I = 0; I < M.length; I += 1)
          T(x[I]);
        P = !0;
      }
    },
    o(k) {
      F = F.filter(Boolean);
      for (let I = 0; I < F.length; I += 1)
        G(F[I]);
      x = x.filter(Boolean);
      for (let I = 0; I < x.length; I += 1)
        G(x[I]);
      P = !1;
    },
    d(k) {
      k && O(t), oe(F, k), oe(x, k), w = !1, H();
    }
  };
}
function rl(e, t, n) {
  let { class: i = "" } = t, { logotxt: r = "wwqdrh" } = t, { logourl: o = "#" } = t, { links: l = [] } = t, { onItemClick: u = (g) => {
    window.location.href = g;
  } } = t;
  const s = () => u(o), a = (g) => u(g), c = (g) => u(g), f = (g) => u(g), d = (g) => u(g);
  return e.$$set = (g) => {
    "class" in g && n(0, i = g.class), "logotxt" in g && n(1, r = g.logotxt), "logourl" in g && n(2, o = g.logourl), "links" in g && n(3, l = g.links), "onItemClick" in g && n(4, u = g.onItemClick);
  }, [
    i,
    r,
    o,
    l,
    u,
    s,
    a,
    c,
    f,
    d
  ];
}
class ol extends te {
  constructor(t) {
    super(), ee(this, t, rl, il, K, {
      class: 0,
      logotxt: 1,
      logourl: 2,
      links: 3,
      onItemClick: 4
    });
  }
}
function jn(e, t, n) {
  const i = e.slice();
  return i[7] = t[n], i;
}
function An(e) {
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
      t = v("button"), i = V(n), m(t, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(u, s) {
      N(u, t, s), h(t, i), r || (o = Q(t, "click", l), r = !0);
    },
    p(u, s) {
      e = u, s & /*buttons*/
      8 && n !== (n = /*item*/
      e[7] + "") && W(i, n);
    },
    d(u) {
      u && O(t), r = !1, o();
    }
  };
}
function ll(e) {
  let t, n, i, r, o, l, u, s, a, c, f, d, g, p, C, y = U(
    /*buttons*/
    e[3]
  ), S = [];
  for (let _ = 0; _ < y.length; _ += 1)
    S[_] = An(jn(e, y, _));
  return {
    c() {
      t = v("section"), n = v("div"), i = v("div"), r = v("div"), o = v("h2"), l = V(
        /*title*/
        e[0]
      ), u = E(), s = v("p"), a = V(
        /*description*/
        e[1]
      ), c = E(), f = v("div");
      for (let _ = 0; _ < S.length; _ += 1)
        S[_].c();
      d = E(), g = v("img"), m(o, "class", "uikit-font-semibold uikit-text-4xl uikit-text-slate-600"), m(s, "class", "uikit-mt-4 uikit-text-lg uikit-leading-relaxed uikit-text-slate-500"), m(f, "class", "uikit-mt-12"), m(r, "class", "uikit-pt-32 sm:uikit-pt-0"), m(i, "class", "uikit-w-full md:uikit-w-8/12 lg:uikit-w-6/12 xl:uikit-w-6/12 uikit-px-4"), m(n, "class", "uikit-container uikit-mx-auto uikit-items-center uikit-flex uikit-flex-wrap"), m(g, "class", "uikit-absolute uikit-top-0 uikit-b-auto uikit-right-0 uikit-pt-16 sm:uikit-w-6/12 uikit--mt-48 sm:uikit-mt-0 uikit-w-10/12"), Qe(g.src, p = /*cover*/
      e[5]) || m(g, "src", p), m(g, "alt", "..."), Se(g, "max-height", "860px"), m(t, "class", C = re(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        e[2]
      )), Se(t, "max-height", "860px");
    },
    m(_, A) {
      N(_, t, A), h(t, n), h(n, i), h(i, r), h(r, o), h(o, l), h(r, u), h(r, s), h(s, a), h(r, c), h(r, f);
      for (let z = 0; z < S.length; z += 1)
        S[z] && S[z].m(f, null);
      h(t, d), h(t, g);
    },
    p(_, [A]) {
      if (A & /*title*/
      1 && W(
        l,
        /*title*/
        _[0]
      ), A & /*description*/
      2 && W(
        a,
        /*description*/
        _[1]
      ), A & /*buttonClick, buttons*/
      24) {
        y = U(
          /*buttons*/
          _[3]
        );
        let z;
        for (z = 0; z < y.length; z += 1) {
          const P = jn(_, y, z);
          S[z] ? S[z].p(P, A) : (S[z] = An(P), S[z].c(), S[z].m(f, null));
        }
        for (; z < S.length; z += 1)
          S[z].d(1);
        S.length = y.length;
      }
      A & /*cover*/
      32 && !Qe(g.src, p = /*cover*/
      _[5]) && m(g, "src", p), A & /*className*/
      4 && C !== (C = re(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        _[2]
      )) && m(t, "class", C);
    },
    i: D,
    o: D,
    d(_) {
      _ && O(t), oe(S, _);
    }
  };
}
function sl(e, t, n) {
  let { title: i = "wwqdrh's ui component: uikit" } = t, { description: r = "a cross framework web component, you can visit it in wwqdrh'home" } = t, { class: o = "" } = t, { buttons: l = [] } = t, { buttonClick: u = (c) => {
    console.log(c);
  } } = t, { cover: s = "" } = t;
  const a = (c) => u(c);
  return e.$$set = (c) => {
    "title" in c && n(0, i = c.title), "description" in c && n(1, r = c.description), "class" in c && n(2, o = c.class), "buttons" in c && n(3, l = c.buttons), "buttonClick" in c && n(4, u = c.buttonClick), "cover" in c && n(5, s = c.cover);
  }, [i, r, o, l, u, s, a];
}
class ul extends te {
  constructor(t) {
    super(), ee(this, t, sl, ll, K, {
      title: 0,
      description: 1,
      class: 2,
      buttons: 3,
      buttonClick: 4,
      cover: 5
    });
  }
}
function Tn(e, t, n) {
  const i = e.slice();
  return i[4] = t[n].icon, i[2] = t[n].title, i[3] = t[n].description, i;
}
function En(e) {
  let t, n, i, r, o, l = (
    /*title*/
    e[2] + ""
  ), u, s, a, c = (
    /*description*/
    e[3] + ""
  ), f, d, g;
  return i = new Me({
    props: {
      class: "uikit-w-5 uikit-h-5 uikit-text-primary-600 lg:uikit-w-6 lg:uikit-h-6 dark:uikit-text-primary-300",
      icon: (
        /*icon*/
        e[4]
      )
    }
  }), {
    c() {
      t = v("div"), n = v("div"), ge(i.$$.fragment), r = E(), o = v("h3"), u = V(l), s = E(), a = v("p"), f = V(c), d = E(), m(n, "class", "uikit-flex uikit-justify-center uikit-items-center uikit-mb-4 uikit-w-10 uikit-h-10 uikit-rounded-full uikit-bg-primary-100 lg:uikit-h-12 lg:uikit-w-12 dark:uikit-bg-primary-900"), m(o, "class", "uikit-mb-2 uikit-text-xl uikit-font-bold dark:uikit-text-white"), m(a, "class", "uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(p, C) {
      N(p, t, C), h(t, n), ae(i, n, null), h(t, r), h(t, o), h(o, u), h(t, s), h(t, a), h(a, f), h(t, d), g = !0;
    },
    p(p, C) {
      const y = {};
      C & /*features*/
      2 && (y.icon = /*icon*/
      p[4]), i.$set(y), (!g || C & /*features*/
      2) && l !== (l = /*title*/
      p[2] + "") && W(u, l), (!g || C & /*features*/
      2) && c !== (c = /*description*/
      p[3] + "") && W(f, c);
    },
    i(p) {
      g || (T(i.$$.fragment, p), g = !0);
    },
    o(p) {
      G(i.$$.fragment, p), g = !1;
    },
    d(p) {
      p && O(t), fe(i);
    }
  };
}
function cl(e) {
  let t, n, i, r, o, l, u, s, a, c, f, d, g = U(
    /*features*/
    e[1]
  ), p = [];
  for (let y = 0; y < g.length; y += 1)
    p[y] = En(Tn(e, g, y));
  const C = (y) => G(p[y], 1, 1, () => {
    p[y] = null;
  });
  return {
    c() {
      t = v("section"), n = v("div"), i = v("div"), r = v("h2"), o = V(
        /*title*/
        e[2]
      ), l = E(), u = v("p"), s = V(
        /*description*/
        e[3]
      ), a = E(), c = v("div");
      for (let y = 0; y < p.length; y += 1)
        p[y].c();
      m(r, "class", "uikit-mb-4 uikit-text-4xl uikit-font-extrabold uikit-text-gray-900 dark:uikit-text-white"), m(u, "class", "uikit-text-gray-500 sm:uikit-text-xl dark:uikit-text-gray-400"), m(i, "class", "uikit-mb-8 uikit-max-w-screen-md lg:uikit-mb-16"), m(c, "class", "uikit-space-y-8 md:uikit-grid md:uikit-grid-cols-2 lg:uikit-grid-cols-3 md:uikit-gap-12 md:uikit-space-y-0"), m(n, "class", "uikit-py-8 uikit-px-4 uikit-mx-auto uikit-max-w-screen-xl sm:uikit-py-16 lg:uikit-px-6"), m(t, "class", f = re(
        "dark:uikit-bg-gray-800",
        /*className*/
        e[0]
      ));
    },
    m(y, S) {
      N(y, t, S), h(t, n), h(n, i), h(i, r), h(r, o), h(i, l), h(i, u), h(u, s), h(n, a), h(n, c);
      for (let _ = 0; _ < p.length; _ += 1)
        p[_] && p[_].m(c, null);
      d = !0;
    },
    p(y, [S]) {
      if ((!d || S & /*title*/
      4) && W(
        o,
        /*title*/
        y[2]
      ), (!d || S & /*description*/
      8) && W(
        s,
        /*description*/
        y[3]
      ), S & /*features*/
      2) {
        g = U(
          /*features*/
          y[1]
        );
        let _;
        for (_ = 0; _ < g.length; _ += 1) {
          const A = Tn(y, g, _);
          p[_] ? (p[_].p(A, S), T(p[_], 1)) : (p[_] = En(A), p[_].c(), T(p[_], 1), p[_].m(c, null));
        }
        for (se(), _ = g.length; _ < p.length; _ += 1)
          C(_);
        ue();
      }
      (!d || S & /*className*/
      1 && f !== (f = re(
        "dark:uikit-bg-gray-800",
        /*className*/
        y[0]
      ))) && m(t, "class", f);
    },
    i(y) {
      if (!d) {
        for (let S = 0; S < g.length; S += 1)
          T(p[S]);
        d = !0;
      }
    },
    o(y) {
      p = p.filter(Boolean);
      for (let S = 0; S < p.length; S += 1)
        G(p[S]);
      d = !1;
    },
    d(y) {
      y && O(t), oe(p, y);
    }
  };
}
function al(e, t, n) {
  let { class: i = "" } = t, { title: r = "" } = t, { description: o = "" } = t, { features: l = [] } = t;
  return e.$$set = (u) => {
    "class" in u && n(0, i = u.class), "title" in u && n(2, r = u.title), "description" in u && n(3, o = u.description), "features" in u && n(1, l = u.features);
  }, [i, l, r, o];
}
class fl extends te {
  constructor(t) {
    super(), ee(this, t, al, cl, K, {
      class: 0,
      title: 2,
      description: 3,
      features: 1
    });
  }
}
function Pn(e, t, n) {
  const i = e.slice();
  return i[11] = t[n], i[13] = n, i;
}
function zn(e, t, n) {
  const i = e.slice();
  return i[11] = t[n], i;
}
function On(e, t, n) {
  const i = e.slice();
  return i[8] = t[n].icon, i[9] = t[n].description, i;
}
function Ln(e) {
  let t, n, i;
  return n = new Me({ props: { icon: (
    /*icon*/
    e[8]
  ) } }), {
    c() {
      t = v("div"), ge(n.$$.fragment), m(t, "class", "uikit-text-slate-500 uikit-p-3 uikit-text-center uikit-inline-flex uikit-items-center uikit-justify-center uikit-w-16 uikit-h-16 uikit-mb-6 uikit-shadow-lg uikit-rounded-full uikit-bg-white");
    },
    m(r, o) {
      N(r, t, o), ae(n, t, null), i = !0;
    },
    p(r, o) {
      const l = {};
      o & /*icon*/
      256 && (l.icon = /*icon*/
      r[8]), n.$set(l);
    },
    i(r) {
      i || (T(n.$$.fragment, r), i = !0);
    },
    o(r) {
      G(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && O(t), fe(n);
    }
  };
}
function Nn(e) {
  let t, n, i, r, o, l, u, s, a = (
    /*description*/
    e[9] + ""
  ), c, f;
  return o = new Me({ props: { icon: (
    /*icon*/
    e[8]
  ) } }), {
    c() {
      t = v("li"), n = v("div"), i = v("div"), r = v("span"), ge(o.$$.fragment), l = E(), u = v("div"), s = v("h4"), c = V(a), m(r, "class", "uikit-text-xs uikit-font-semibold uikit-inline-block uikit-py-1 uikit-px-2 uikit-uppercase uikit-rounded-full uikit-text-slate-500 uikit-bg-slate-50 uikit-mr-3"), m(s, "class", "uikit-text-slate-500"), m(n, "class", "uikit-flex uikit-items-center"), m(t, "class", "uikit-py-2");
    },
    m(d, g) {
      N(d, t, g), h(t, n), h(n, i), h(i, r), ae(o, r, null), h(n, l), h(n, u), h(u, s), h(s, c), f = !0;
    },
    p(d, g) {
      const p = {};
      g & /*sections*/
      16 && (p.icon = /*icon*/
      d[8]), o.$set(p), (!f || g & /*sections*/
      16) && a !== (a = /*description*/
      d[9] + "") && W(c, a);
    },
    i(d) {
      f || (T(o.$$.fragment, d), f = !0);
    },
    o(d) {
      G(o.$$.fragment, d), f = !1;
    },
    d(d) {
      d && O(t), fe(o);
    }
  };
}
function Bn(e) {
  let t, n = (
    /*item*/
    e[11] + ""
  ), i, r, o;
  function l() {
    return (
      /*click_handler*/
      e[10](
        /*item*/
        e[11]
      )
    );
  }
  return {
    c() {
      t = v("button"), i = V(n), m(t, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(u, s) {
      N(u, t, s), h(t, i), r || (o = Q(t, "click", l), r = !0);
    },
    p(u, s) {
      e = u, s & /*buttons*/
      32 && n !== (n = /*item*/
      e[11] + "") && W(i, n);
    },
    d(u) {
      u && O(t), r = !1, o();
    }
  };
}
function Gn(e) {
  let t, n, i, r, o, l, u, s, a, c, f, d, g, p;
  return {
    c() {
      t = v("div"), n = v("img"), r = E(), o = v("div"), l = v("a"), u = V("❮"), a = E(), c = v("a"), f = V("❯"), g = E(), m(n, "alt", "..."), m(n, "class", "uikit-max-w-full uikit-rounded-lg uikit-shadow-xl"), Se(n, "transform", "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"), Qe(n.src, i = /*item*/
      e[11]) || m(n, "src", i), m(l, "href", s = `#pd-cover-slide-${/*id*/
      e[1]}-${/*i*/
      (e[13] - 1 + /*covers*/
      e[2].length) % /*covers*/
      e[2].length}`), m(l, "class", "uikit-btn uikit-btn-circle"), m(c, "href", d = `#pd-cover-slide-${/*id*/
      e[1]}-${/*i*/
      (e[13] + 1) % /*covers*/
      e[2].length}`), m(c, "class", "uikit-btn uikit-btn-circle"), m(o, "class", "uikit-absolute uikit-flex uikit-justify-between uikit-transform uikit--translate-y-1/2 uikit-left-5 uikit-right-5 uikit-top-1/2"), m(t, "id", p = `pd-cover-slide-${/*id*/
      e[1]}-${/*i*/
      e[13]}`), m(t, "class", "uikit-carousel-item uikit-relative uikit-w-full");
    },
    m(C, y) {
      N(C, t, y), h(t, n), h(t, r), h(t, o), h(o, l), h(l, u), h(o, a), h(o, c), h(c, f), h(t, g);
    },
    p(C, y) {
      y & /*covers*/
      4 && !Qe(n.src, i = /*item*/
      C[11]) && m(n, "src", i), y & /*id, covers*/
      6 && s !== (s = `#pd-cover-slide-${/*id*/
      C[1]}-${/*i*/
      (C[13] - 1 + /*covers*/
      C[2].length) % /*covers*/
      C[2].length}`) && m(l, "href", s), y & /*id, covers*/
      6 && d !== (d = `#pd-cover-slide-${/*id*/
      C[1]}-${/*i*/
      (C[13] + 1) % /*covers*/
      C[2].length}`) && m(c, "href", d), y & /*id*/
      2 && p !== (p = `pd-cover-slide-${/*id*/
      C[1]}-${/*i*/
      C[13]}`) && m(t, "id", p);
    },
    d(C) {
      C && O(t);
    }
  };
}
function dl(e) {
  let t, n, i, r, o, l, u, s, a, c, f, d, g, p, C, y, S, _, A, z, P, w = (
    /*icon*/
    e[8] && Ln(e)
  ), H = U(
    /*sections*/
    e[4]
  ), L = [];
  for (let k = 0; k < H.length; k += 1)
    L[k] = Nn(On(e, H, k));
  const F = (k) => G(L[k], 1, 1, () => {
    L[k] = null;
  });
  let Z = U(
    /*buttons*/
    e[5]
  ), M = [];
  for (let k = 0; k < Z.length; k += 1)
    M[k] = Bn(zn(e, Z, k));
  let x = U(
    /*covers*/
    e[2]
  ), j = [];
  for (let k = 0; k < x.length; k += 1)
    j[k] = Gn(Pn(e, x, k));
  return {
    c() {
      t = v("div"), n = v("div"), i = v("div"), r = v("div"), o = v("div"), w && w.c(), l = E(), u = v("h3"), s = V(
        /*title*/
        e[3]
      ), a = E(), c = v("p"), f = V(
        /*description*/
        e[9]
      ), d = E(), g = v("ul");
      for (let k = 0; k < L.length; k += 1)
        L[k].c();
      p = E(), C = v("div");
      for (let k = 0; k < M.length; k += 1)
        M[k].c();
      y = E(), S = v("div"), _ = v("div");
      for (let k = 0; k < j.length; k += 1)
        j[k].c();
      m(u, "class", "uikit-text-3xl uikit-font-semibold"), m(c, "class", "uikit-mt-4 uikit-text-md uikit-leading-relaxed uikit-text-slate-500"), m(g, "class", "uikit-list-none uikit-mt-6"), m(o, "class", "md:uikit-pr-12"), m(r, "class", "uikit-w-full md:uikit-w-1/3 uikit-ml-auto uikit-px-12 md:uikit-px-4"), m(_, "class", "uikit-carousel uikit-carousel-center uikit-w-full"), m(S, "class", "uikit-w-full md:uikit-w-2/3 uikit-mr-auto uikit-px-4 uikit-pt-24 md:uikit-pt-0"), m(i, "class", A = re(
        "uikit-flex uikit-justify-between",
        /*rtl*/
        e[6] ? "uikit-flex-row-reverse" : ""
      )), m(n, "class", "uikit-items-center uikit-flex uikit-flex-wrap"), m(t, "class", z = re(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        e[0]
      ));
    },
    m(k, I) {
      N(k, t, I), h(t, n), h(n, i), h(i, r), h(r, o), w && w.m(o, null), h(o, l), h(o, u), h(u, s), h(o, a), h(o, c), h(c, f), h(o, d), h(o, g);
      for (let b = 0; b < L.length; b += 1)
        L[b] && L[b].m(g, null);
      h(g, p), h(g, C);
      for (let b = 0; b < M.length; b += 1)
        M[b] && M[b].m(C, null);
      h(i, y), h(i, S), h(S, _);
      for (let b = 0; b < j.length; b += 1)
        j[b] && j[b].m(_, null);
      P = !0;
    },
    p(k, [I]) {
      if (/*icon*/
      k[8] ? w ? (w.p(k, I), I & /*icon*/
      256 && T(w, 1)) : (w = Ln(k), w.c(), T(w, 1), w.m(o, l)) : w && (se(), G(w, 1, 1, () => {
        w = null;
      }), ue()), (!P || I & /*title*/
      8) && W(
        s,
        /*title*/
        k[3]
      ), (!P || I & /*description*/
      512) && W(
        f,
        /*description*/
        k[9]
      ), I & /*sections*/
      16) {
        H = U(
          /*sections*/
          k[4]
        );
        let b;
        for (b = 0; b < H.length; b += 1) {
          const B = On(k, H, b);
          L[b] ? (L[b].p(B, I), T(L[b], 1)) : (L[b] = Nn(B), L[b].c(), T(L[b], 1), L[b].m(g, p));
        }
        for (se(), b = H.length; b < L.length; b += 1)
          F(b);
        ue();
      }
      if (I & /*buttonClick, buttons*/
      160) {
        Z = U(
          /*buttons*/
          k[5]
        );
        let b;
        for (b = 0; b < Z.length; b += 1) {
          const B = zn(k, Z, b);
          M[b] ? M[b].p(B, I) : (M[b] = Bn(B), M[b].c(), M[b].m(C, null));
        }
        for (; b < M.length; b += 1)
          M[b].d(1);
        M.length = Z.length;
      }
      if (I & /*id, covers*/
      6) {
        x = U(
          /*covers*/
          k[2]
        );
        let b;
        for (b = 0; b < x.length; b += 1) {
          const B = Pn(k, x, b);
          j[b] ? j[b].p(B, I) : (j[b] = Gn(B), j[b].c(), j[b].m(_, null));
        }
        for (; b < j.length; b += 1)
          j[b].d(1);
        j.length = x.length;
      }
      (!P || I & /*rtl*/
      64 && A !== (A = re(
        "uikit-flex uikit-justify-between",
        /*rtl*/
        k[6] ? "uikit-flex-row-reverse" : ""
      ))) && m(i, "class", A), (!P || I & /*className*/
      1 && z !== (z = re(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        k[0]
      ))) && m(t, "class", z);
    },
    i(k) {
      if (!P) {
        T(w);
        for (let I = 0; I < H.length; I += 1)
          T(L[I]);
        P = !0;
      }
    },
    o(k) {
      G(w), L = L.filter(Boolean);
      for (let I = 0; I < L.length; I += 1)
        G(L[I]);
      P = !1;
    },
    d(k) {
      k && O(t), w && w.d(), oe(L, k), oe(M, k), oe(j, k);
    }
  };
}
function gl(e, t, n) {
  let { class: i = "" } = t, { id: r = "" } = t, { covers: o = [] } = t, { title: l = "" } = t, { icon: u = "" } = t, { description: s = "" } = t, { sections: a = [] } = t, { buttons: c = [] } = t, { rtl: f = !1 } = t, { buttonClick: d = (p) => {
  } } = t;
  const g = (p) => d(p);
  return e.$$set = (p) => {
    "class" in p && n(0, i = p.class), "id" in p && n(1, r = p.id), "covers" in p && n(2, o = p.covers), "title" in p && n(3, l = p.title), "icon" in p && n(8, u = p.icon), "description" in p && n(9, s = p.description), "sections" in p && n(4, a = p.sections), "buttons" in p && n(5, c = p.buttons), "rtl" in p && n(6, f = p.rtl), "buttonClick" in p && n(7, d = p.buttonClick);
  }, [
    i,
    r,
    o,
    l,
    a,
    c,
    f,
    d,
    u,
    s,
    g
  ];
}
class hl extends te {
  constructor(t) {
    super(), ee(this, t, gl, dl, K, {
      class: 0,
      id: 1,
      covers: 2,
      title: 3,
      icon: 8,
      description: 9,
      sections: 4,
      buttons: 5,
      rtl: 6,
      buttonClick: 7
    });
  }
}
const xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: ul,
  Feature: fl,
  Grid: pi,
  Header: ol,
  ProjectDescription: hl
}, Symbol.toStringTag, { value: "Module" }));
function pl(e) {
  let t, n, i, r, o, l;
  return {
    c() {
      t = v("div"), n = v("div"), i = v("span"), r = E(), o = v("button"), l = V(
        /*btnText*/
        e[0]
      ), m(i, "id", "mask-desc"), m(i, "class", "mask-tip-desc svelte-17awz4u"), m(o, "id", "next-step-btn"), m(o, "class", "mask-tip-btn svelte-17awz4u"), m(n, "class", "mask-tip svelte-17awz4u"), Se(t, "display", "none");
    },
    m(u, s) {
      N(u, t, s), h(t, n), h(n, i), h(n, r), h(n, o), h(o, l), e[6](n), e[7](t);
    },
    p(u, [s]) {
      s & /*btnText*/
      1 && W(
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
function ml(e, t, n) {
  let i, r, { gapWidth: o = 5 } = t, { isStart: l } = t, { stepArr: u = [] } = t, { btnText: s = "下一步" } = t;
  const a = (d) => {
    if (d.length === 0) {
      n(1, i.style.display = "none", i);
      return;
    }
    const { id: g, desc: p } = d[0];
    var C = document.getElementById(g), y = C.offsetWidth, S = C.offsetHeight, _ = C.offsetLeft, A = C.offsetTop;
    console.log("待镂空元素: ", y, S, _, A);
    var z = document.body.scrollWidth, P = document.body.scrollHeight;
    n(1, i.style.width = z + "px", i), n(1, i.style.height = P + "px", i), n(1, i.style.position = "absolute", i), n(1, i.style.left = 0, i), n(1, i.style.top = 0, i), n(1, i.style.display = "block", i), n(1, i.style.boxSizing = "border-box", i), n(1, i.style.borderColor = "rgba(0, 0, 0, 0.75)", i), n(1, i.style.borderStyle = "solid", i), n(1, i.style.borderLeftWidth = _ - o + "px", i), n(1, i.style.borderRightWidth = z - y - _ - o + "px", i), n(1, i.style.borderTopWidth = A - o + "px", i), n(1, i.style.borderBottomWidth = P - S - A - o + "px", i), n(2, r.style.top = S + o * 2 + 10 + "px", r), n(2, r.style.left = "50%", r);
    var w = document.getElementById("mask-desc");
    w.innerHTML = p;
    var H = document.getElementById("next-step-btn");
    H.onclick = function() {
      d.shift(), a(d);
    };
  };
  function c(d) {
    Le[d ? "unshift" : "push"](() => {
      r = d, n(2, r);
    });
  }
  function f(d) {
    Le[d ? "unshift" : "push"](() => {
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
class Cl extends te {
  constructor(t) {
    super(), ee(this, t, ml, pl, K, {
      gapWidth: 3,
      isStart: 4,
      stepArr: 5,
      btnText: 0
    });
  }
}
export {
  xl as Layout,
  wl as Sidebar,
  Cl as StepMask,
  yl as confirm,
  vl as notify
};
