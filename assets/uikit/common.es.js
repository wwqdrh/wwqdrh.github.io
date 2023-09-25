var hi = Object.defineProperty;
var pi = (e, t, n) => t in e ? hi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var rt = (e, t, n) => (pi(e, typeof t != "symbol" ? t + "" : t, n), n);
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
function Nn(e) {
  return e();
}
function Ft() {
  return /* @__PURE__ */ Object.create(null);
}
function be(e) {
  e.forEach(Nn);
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
function mi(e) {
  return Object.keys(e).length === 0;
}
function Mt(e, t, n, i) {
  if (e) {
    const r = Bn(e, t, n, i);
    return e[0](r);
  }
}
function Bn(e, t, n, i) {
  return e[1] && i ? oe(n.ctx.slice(), e[1](i(t))) : n.ctx;
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
    const l = Bn(t, n, i, o);
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
function bi(e) {
  return e && Ge(e.destroy) ? e.destroy : D;
}
function h(e, t) {
  e.appendChild(t);
}
function B(e, t, n) {
  e.insertBefore(t, n || null);
}
function L(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function se(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function k(e) {
  return document.createElement(e);
}
function ki(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function F(e) {
  return document.createTextNode(e);
}
function T() {
  return F(" ");
}
function de() {
  return F("");
}
function X(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function p(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const vi = ["width", "height"];
function dt(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const i in t)
    t[i] == null ? e.removeAttribute(i) : i === "style" ? e.style.cssText = t[i] : i === "__value" ? e.value = e[i] = t[i] : n[i] && n[i].set && vi.indexOf(i) === -1 ? e[i] = t[i] : p(e, i, t[i]);
}
function Ht(e, t) {
  for (const n in t)
    p(e, n, t[n]);
}
function yi(e, t) {
  Object.keys(t).forEach((n) => {
    _i(e, n, t[n]);
  });
}
function _i(e, t, n) {
  t in e ? e[t] = typeof e[t] == "boolean" && n === "" ? !0 : n : p(e, t, n);
}
function Ye(e) {
  return /-/.test(e) ? yi : dt;
}
function wi(e) {
  return Array.from(e.childNodes);
}
function W(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Se(e, t, n, i) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "");
}
function xi(e, t, { bubbles: n = !1, cancelable: i = !1 } = {}) {
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
function Ci(e) {
  Et().$$.on_destroy.push(e);
}
function Ie() {
  const e = Et();
  return (t, n, { cancelable: i = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const o = xi(
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
const Wt = [], Si = /* @__PURE__ */ Promise.resolve();
let gt = !1;
function Ii() {
  gt || (gt = !0, Si.then(Gn));
}
function ht(e) {
  Ce.push(e);
}
const ot = /* @__PURE__ */ new Set();
let we = 0;
function Gn() {
  if (we !== 0)
    return;
  const e = Oe;
  do {
    try {
      for (; we < xe.length; ) {
        const t = xe[we];
        we++, Pe(t), Mi(t.$$);
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
function Mi(e) {
  if (e.fragment !== null) {
    e.update(), be(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ht);
  }
}
function Ai(e) {
  const t = [], n = [];
  Ce.forEach((i) => e.indexOf(i) === -1 ? t.push(i) : n.push(i)), n.forEach((i) => i()), Ce = t;
}
const qe = /* @__PURE__ */ new Set();
let ke;
function ue() {
  ke = {
    r: 0,
    c: [],
    p: ke
    // parent group
  };
}
function ce() {
  ke.r || be(ke.c), ke = ke.p;
}
function z(e, t) {
  e && e.i && (qe.delete(e), e.i(t));
}
function R(e, t, n, i) {
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
function ji(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function ge(e) {
  e && e.c();
}
function ae(e, t, n) {
  const { fragment: i, after_update: r } = e.$$;
  i && i.m(t, n), ht(() => {
    const o = e.$$.on_mount.map(Nn).filter(Ge);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : be(o), e.$$.on_mount = [];
  }), r.forEach(ht);
}
function fe(e, t) {
  const n = e.$$;
  n.fragment !== null && (Ai(n.after_update), be(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ti(e, t) {
  e.$$.dirty[0] === -1 && (xe.push(e), Ii(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
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
  if (a.ctx = n ? n(e, t.props || {}, (f, g, ...d) => {
    const m = d.length ? d[0] : g;
    return a.ctx && r(a.ctx[f], a.ctx[f] = m) && (!a.skip_bound && a.bound[f] && a.bound[f](m), c && Ti(e, f)), g;
  }) : [], a.update(), c = !0, be(a.before_update), a.fragment = i ? i(a.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = wi(t.target);
      a.fragment && a.fragment.l(f), f.forEach(L);
    } else
      a.fragment && a.fragment.c();
    t.intro && z(e.$$.fragment), ae(e, t.target, t.anchor), Gn();
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
    this.$$set && !mi(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ei = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ei);
function Pi(e) {
  let t, n, i, r, o, l, u, s, a;
  return {
    c() {
      t = k("div"), n = k("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>', i = T(), r = k("div"), o = k("div"), l = k("span"), l.textContent = "Success", u = T(), s = k("p"), a = F(
        /*msg*/
        e[0]
      ), p(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-emerald-500"), p(l, "class", "uikit-font-semibold uikit-text-emerald-500 dark:uikit-text-emerald-400"), p(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), p(o, "class", "uikit-mx-3"), p(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), p(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      B(c, t, f), h(t, n), h(t, i), h(t, r), h(r, o), h(o, l), h(o, u), h(o, s), h(s, a);
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
      c && L(t);
    }
  };
}
function zi(e, t, n) {
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
class Oi extends te {
  constructor(t) {
    super(), ee(this, t, zi, Pi, K, { msg: 0, duration: 1 });
  }
}
function Li(e) {
  let t, n, i, r, o, l, u, s, a;
  return {
    c() {
      t = k("div"), n = k("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', i = T(), r = k("div"), o = k("div"), l = k("span"), l.textContent = "Info", u = T(), s = k("p"), a = F(
        /*msg*/
        e[0]
      ), p(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-blue-500"), p(l, "class", "uikit-font-semibold uikit-text-blue-500 dark:uikit-text-blue-400"), p(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), p(o, "class", "uikit-mx-3"), p(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), p(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      B(c, t, f), h(t, n), h(t, i), h(t, r), h(r, o), h(o, l), h(o, u), h(o, s), h(s, a);
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
      c && L(t);
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
class Dt extends te {
  constructor(t) {
    super(), ee(this, t, Ni, Li, K, { msg: 0, duration: 1 });
  }
}
function Bi(e) {
  let t, n, i, r, o, l, u, s, a;
  return {
    c() {
      t = k("div"), n = k("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', i = T(), r = k("div"), o = k("div"), l = k("span"), l.textContent = "Warning", u = T(), s = k("p"), a = F(
        /*msg*/
        e[0]
      ), p(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-yellow-400"), p(l, "class", "uikit-font-semibold uikit-text-yellow-400 dark:uikit-text-yellow-300"), p(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), p(o, "class", "uikit-mx-3"), p(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), p(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      B(c, t, f), h(t, n), h(t, i), h(t, r), h(r, o), h(o, l), h(o, u), h(o, s), h(s, a);
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
      c && L(t);
    }
  };
}
function Gi(e, t, n) {
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
class Ri extends te {
  constructor(t) {
    super(), ee(this, t, Gi, Bi, K, { msg: 0, duration: 1 });
  }
}
function Fi(e) {
  let t, n, i, r, o, l, u, s, a;
  return {
    c() {
      t = k("div"), n = k("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>', i = T(), r = k("div"), o = k("div"), l = k("span"), l.textContent = "Error", u = T(), s = k("p"), a = F(
        /*msg*/
        e[0]
      ), p(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-red-500"), p(l, "class", "uikit-font-semibold uikit-text-red-500 dark:uikit-text-red-400"), p(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), p(o, "class", "uikit-mx-3"), p(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), p(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      B(c, t, f), h(t, n), h(t, i), h(t, r), h(r, o), h(o, l), h(o, u), h(o, s), h(s, a);
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
      c && L(t);
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
let Hi = class extends te {
  constructor(t) {
    super(), ee(this, t, Vi, Fi, K, { msg: 0, duration: 1 });
  }
};
const qt = "uikit_msg_panel";
let lt = 0;
const ml = (e) => {
  lt += 1;
  let t = window.document.getElementById(qt);
  t || (t = window.document.createElement("div"), t.id = qt, t.style.position = "absolute", t.style.top = "5px", t.style.right = "5px", t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "10px", t.style.zIndex = "100", document.body.appendChild(t));
  const n = window.document.createElement("div");
  t.appendChild(n);
  let i;
  switch (e.type) {
    case "success":
      i = new Oi({
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
      i = new Ri({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "error":
      i = new Hi({
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
function Wi(e) {
  let t, n, i, r, o, l, u, s, a, c, f, g, d, m, x, b, S, v, j, O;
  return {
    c() {
      t = k("div"), n = k("div"), i = k("div"), r = k("div"), o = F(
        /*title*/
        e[0]
      ), l = T(), u = k("div"), s = k("div"), a = F(
        /*content*/
        e[1]
      ), c = T(), f = k("div"), g = k("div"), d = F(
        /*cancelText*/
        e[2]
      ), x = T(), b = k("div"), S = F(
        /*okText*/
        e[3]
      ), p(r, "class", "modal-title svelte-f901x2"), p(u, "class", "content svelte-f901x2"), p(i, "class", "modal-content-body svelte-f901x2"), p(g, "class", "btn button-left centerLayout svelte-f901x2"), p(g, "style", m = He(
        /*cancelBtnStyle*/
        e[4]
      )), p(b, "class", "btn button-right centerLayout svelte-f901x2"), p(b, "style", v = He(
        /*okBtnStyle*/
        e[5]
      )), p(f, "class", "confirm-button-wrap svelte-f901x2"), p(n, "class", "confirm-modal-content svelte-f901x2"), p(t, "class", "confirm-modal svelte-f901x2");
    },
    m(P, C) {
      B(P, t, C), h(t, n), h(n, i), h(i, r), h(r, o), h(i, l), h(i, u), h(u, s), h(s, a), h(n, c), h(n, f), h(f, g), h(g, d), h(f, x), h(f, b), h(b, S), e[11](t), j || (O = [
        X(
          g,
          "click",
          /*onCancelClk*/
          e[8]
        ),
        X(
          b,
          "click",
          /*onOkClk*/
          e[7]
        )
      ], j = !0);
    },
    p(P, [C]) {
      C & /*title*/
      1 && W(
        o,
        /*title*/
        P[0]
      ), C & /*content*/
      2 && W(
        a,
        /*content*/
        P[1]
      ), C & /*cancelText*/
      4 && W(
        d,
        /*cancelText*/
        P[2]
      ), C & /*cancelBtnStyle*/
      16 && m !== (m = He(
        /*cancelBtnStyle*/
        P[4]
      )) && p(g, "style", m), C & /*okText*/
      8 && W(
        S,
        /*okText*/
        P[3]
      ), C & /*okBtnStyle*/
      32 && v !== (v = He(
        /*okBtnStyle*/
        P[5]
      )) && p(b, "style", v);
    },
    i: D,
    o: D,
    d(P) {
      P && L(t), e[11](null), j = !1, be(O);
    }
  };
}
function Di(e, t, n) {
  let { title: i = "" } = t, { content: r = "" } = t, { cancelText: o = "取消" } = t, { okText: l = "确定" } = t, { onCancel: u = () => {
  } } = t, { onOk: s = () => {
  } } = t, { cancelBtnStyle: a = "" } = t, { okBtnStyle: c = "" } = t;
  const f = Ie();
  let g;
  const d = () => {
    s(), f("onOk");
  }, m = () => {
    u(), f("onCancel");
  };
  function x(b) {
    Le[b ? "unshift" : "push"](() => {
      g = b, n(6, g);
    });
  }
  return e.$$set = (b) => {
    "title" in b && n(0, i = b.title), "content" in b && n(1, r = b.content), "cancelText" in b && n(2, o = b.cancelText), "okText" in b && n(3, l = b.okText), "onCancel" in b && n(9, u = b.onCancel), "onOk" in b && n(10, s = b.onOk), "cancelBtnStyle" in b && n(4, a = b.cancelBtnStyle), "okBtnStyle" in b && n(5, c = b.okBtnStyle);
  }, [
    i,
    r,
    o,
    l,
    a,
    c,
    g,
    d,
    m,
    u,
    s,
    x
  ];
}
class qi extends te {
  constructor(t) {
    super(), ee(this, t, Di, Wi, K, {
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
const bl = (e) => {
  const t = window.document.createElement("div");
  document.body.appendChild(t);
  const n = new qi({
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
}, Ue = (e, t) => e ? !!((e.provider === "" || e.provider.match(ze)) && (t && e.prefix === "" || e.prefix.match(ze)) && e.name.match(ze)) : !1, Rn = Object.freeze(
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
  ...Rn,
  ...Ke
}), pt = Object.freeze({
  ...nt,
  body: "",
  hidden: !1
});
function Ui(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (n.rotate = i), n;
}
function Ut(e, t) {
  const n = Ui(e, t);
  for (const i in pt)
    i in Ke ? i in e && !(i in n) && (n[i] = Ke[i]) : i in t ? n[i] = t[i] : i in e && (n[i] = e[i]);
  return n;
}
function Zi(e, t) {
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
function Qi(e, t, n) {
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
function Fn(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((r) => {
    t(r, null), n.push(r);
  });
  const i = Zi(e);
  for (const r in i) {
    const o = i[r];
    o && (t(r, Qi(e, r, o)), n.push(r));
  }
  return n;
}
const Ji = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Rn
};
function st(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function Vn(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !st(e, Ji))
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
function Xi(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function ye(e, t) {
  const n = Zt[e] || (Zt[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = Xi(e, t));
}
function Pt(e, t) {
  return Vn(t) ? Fn(t, (n, i) => {
    i ? e.icons[n] = i : e.missing.add(n);
  }) : [];
}
function Yi(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Ne = !1;
function Hn(e) {
  return typeof e == "boolean" && (Ne = e), Ne;
}
function Ki(e) {
  const t = typeof e == "string" ? tt(e, !0, Ne) : e;
  if (t) {
    const n = ye(t.provider, t.prefix), i = t.name;
    return n.icons[i] || (n.missing.has(i) ? null : void 0);
  }
}
function $i(e, t) {
  const n = tt(e, !0, Ne);
  if (!n)
    return !1;
  const i = ye(n.provider, n.prefix);
  return Yi(i, n.name, t);
}
function er(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Ne && !t && !e.prefix) {
    let r = !1;
    return Vn(e) && (e.prefix = "", Fn(e, (o, l) => {
      l && $i(o, l) && (r = !0);
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
const Wn = Object.freeze({
  width: null,
  height: null
}), Dn = Object.freeze({
  // Dimensions
  ...Wn,
  // Transformations
  ...Ke
}), tr = /(-?[0-9.]*[0-9]+[0-9.]*)/g, nr = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Qt(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const i = e.split(tr);
  if (i === null || !i.length)
    return e;
  const r = [];
  let o = i.shift(), l = nr.test(o);
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
const ir = (e) => e === "unset" || e === "undefined" || e === "none";
function rr(e, t) {
  const n = {
    ...nt,
    ...e
  }, i = {
    ...Dn,
    ...t
  }, r = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let o = n.body;
  [n, i].forEach((m) => {
    const x = [], b = m.hFlip, S = m.vFlip;
    let v = m.rotate;
    b ? S ? v += 2 : (x.push(
      "translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"
    ), x.push("scale(-1 1)"), r.top = r.left = 0) : S && (x.push(
      "translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"
    ), x.push("scale(1 -1)"), r.top = r.left = 0);
    let j;
    switch (v < 0 && (v -= Math.floor(v / 4) * 4), v = v % 4, v) {
      case 1:
        j = r.height / 2 + r.top, x.unshift(
          "rotate(90 " + j.toString() + " " + j.toString() + ")"
        );
        break;
      case 2:
        x.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        j = r.width / 2 + r.left, x.unshift(
          "rotate(-90 " + j.toString() + " " + j.toString() + ")"
        );
        break;
    }
    v % 2 === 1 && (r.left !== r.top && (j = r.left, r.left = r.top, r.top = j), r.width !== r.height && (j = r.width, r.width = r.height, r.height = j)), x.length && (o = '<g transform="' + x.join(" ") + '">' + o + "</g>");
  });
  const l = i.width, u = i.height, s = r.width, a = r.height;
  let c, f;
  l === null ? (f = u === null ? "1em" : u === "auto" ? a : u, c = Qt(f, s / a)) : (c = l === "auto" ? s : l, f = u === null ? Qt(c, a / s) : u === "auto" ? a : u);
  const g = {}, d = (m, x) => {
    ir(x) || (g[m] = x.toString());
  };
  return d("width", c), d("height", f), g.viewBox = r.left.toString() + " " + r.top.toString() + " " + s.toString() + " " + a.toString(), {
    attributes: g,
    body: o
  };
}
const or = /\sid="(\S+)"/g, lr = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let sr = 0;
function ur(e, t = lr) {
  const n = [];
  let i;
  for (; i = or.exec(e); )
    n.push(i[1]);
  if (!n.length)
    return e;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((o) => {
    const l = typeof t == "function" ? t(o) : t + (sr++).toString(), u = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + u + ')([")]|\\.[a-z])', "g"),
      "$1" + l + r + "$3"
    );
  }), e = e.replace(new RegExp(r, "g"), ""), e;
}
const mt = /* @__PURE__ */ Object.create(null);
function cr(e, t) {
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
const Ot = /* @__PURE__ */ Object.create(null), Ae = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Ze = [];
for (; Ae.length > 0; )
  Ae.length === 1 || Math.random() > 0.5 ? Ze.push(Ae.shift()) : Ze.push(Ae.pop());
Ot[""] = zt({
  resources: ["https://api.iconify.design"].concat(Ze)
});
function ar(e, t) {
  const n = zt(t);
  return n === null ? !1 : (Ot[e] = n, !0);
}
function Lt(e) {
  return Ot[e];
}
const fr = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Jt = fr();
function dr(e, t) {
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
function gr(e) {
  return e === 404;
}
const hr = (e, t, n) => {
  const i = [], r = dr(e, t), o = "icons";
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
function pr(e) {
  if (typeof e == "string") {
    const t = Lt(e);
    if (t)
      return t.path;
  }
  return "/";
}
const mr = (e, t, n) => {
  if (!Jt) {
    n("abort", 424);
    return;
  }
  let i = pr(t.provider);
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
        n(gr(l) ? "abort" : "next", l);
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
}, br = {
  prepare: hr,
  send: mr
};
function kr(e) {
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
function qn(e, t) {
  e.forEach((n) => {
    const i = n.loaderCallbacks;
    i && (n.loaderCallbacks = i.filter((r) => r.id !== t));
  });
}
function vr(e) {
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
      }), l.pending.length !== u && (n || qn([e], o.id), o.callback(
        l.loaded.slice(0),
        l.missing.slice(0),
        l.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let yr = 0;
function _r(e, t, n) {
  const i = yr++, r = qn.bind(null, n, i);
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
function wr(e, t = !0, n = !1) {
  const i = [];
  return e.forEach((r) => {
    const o = typeof r == "string" ? tt(r, t, n) : r;
    o && i.push(o);
  }), i;
}
var xr = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Cr(e, t, n, i) {
  const r = e.resources.length, o = e.random ? Math.floor(Math.random() * r) : e.index;
  let l;
  if (e.random) {
    let C = e.resources.slice(0);
    for (l = []; C.length > 1; ) {
      const E = Math.floor(Math.random() * C.length);
      l.push(C[E]), C = C.slice(0, E).concat(C.slice(E + 1));
    }
    l = l.concat(C);
  } else
    l = e.resources.slice(o).concat(e.resources.slice(0, o));
  const u = Date.now();
  let s = "pending", a = 0, c, f = null, g = [], d = [];
  typeof i == "function" && d.push(i);
  function m() {
    f && (clearTimeout(f), f = null);
  }
  function x() {
    s === "pending" && (s = "aborted"), m(), g.forEach((C) => {
      C.status === "pending" && (C.status = "aborted");
    }), g = [];
  }
  function b(C, E) {
    E && (d = []), typeof C == "function" && d.push(C);
  }
  function S() {
    return {
      startTime: u,
      payload: t,
      status: s,
      queriesSent: a,
      queriesPending: g.length,
      subscribe: b,
      abort: x
    };
  }
  function v() {
    s = "failed", d.forEach((C) => {
      C(void 0, c);
    });
  }
  function j() {
    g.forEach((C) => {
      C.status === "pending" && (C.status = "aborted");
    }), g = [];
  }
  function O(C, E, Z) {
    const N = E !== "success";
    switch (g = g.filter((V) => V !== C), s) {
      case "pending":
        break;
      case "failed":
        if (N || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (E === "abort") {
      c = Z, v();
      return;
    }
    if (N) {
      c = Z, g.length || (l.length ? P() : v());
      return;
    }
    if (m(), j(), !e.random) {
      const V = e.resources.indexOf(C.resource);
      V !== -1 && V !== e.index && (e.index = V);
    }
    s = "completed", d.forEach((V) => {
      V(Z);
    });
  }
  function P() {
    if (s !== "pending")
      return;
    m();
    const C = l.shift();
    if (C === void 0) {
      if (g.length) {
        f = setTimeout(() => {
          m(), s === "pending" && (j(), v());
        }, e.timeout);
        return;
      }
      v();
      return;
    }
    const E = {
      status: "pending",
      resource: C,
      callback: (Z, N) => {
        O(E, Z, N);
      }
    };
    g.push(E), a++, f = setTimeout(P, e.rotate), n(C, t, E.callback);
  }
  return setTimeout(P), S;
}
function Un(e) {
  const t = {
    ...xr,
    ...e
  };
  let n = [];
  function i() {
    n = n.filter((u) => u().status === "pending");
  }
  function r(u, s, a) {
    const c = Cr(
      t,
      u,
      s,
      (f, g) => {
        i(), a && a(f, g);
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
function Sr(e) {
  if (!ut[e]) {
    const t = Lt(e);
    if (!t)
      return;
    const n = Un(t), i = {
      config: t,
      redundancy: n
    };
    ut[e] = i;
  }
  return ut[e];
}
function Ir(e, t, n) {
  let i, r;
  if (typeof e == "string") {
    const o = bt(e);
    if (!o)
      return n(void 0, 424), Xt;
    r = o.send;
    const l = Sr(e);
    l && (i = l.redundancy);
  } else {
    const o = zt(e);
    if (o) {
      i = Un(o);
      const l = e.resources ? e.resources[0] : "", u = bt(l);
      u && (r = u.send);
    }
  }
  return !i || !r ? (n(void 0, 424), Xt) : i.query(t, r, n)().abort;
}
const Yt = "iconify2", Be = "iconify", Zn = Be + "-count", Kt = Be + "-version", Qn = 36e5, Mr = 168;
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
  return Nt(e, Zn, t.toString());
}
function yt(e) {
  return parseInt(kt(e, Zn)) || 0;
}
const it = {
  local: !0,
  session: !0
}, Jn = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Bt = !1;
function Ar(e) {
  Bt = e;
}
let We = typeof window > "u" ? {} : window;
function Xn(e) {
  const t = e + "Storage";
  try {
    if (We && We[t] && typeof We[t].length == "number")
      return We[t];
  } catch {
  }
  it[e] = !1;
}
function Yn(e, t) {
  const n = Xn(e);
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
  const r = Math.floor(Date.now() / Qn) - Mr, o = (u) => {
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
    o(u) || (u === l - 1 ? (l--, vt(n, l)) : Jn[e].add(u));
}
function Kn() {
  if (!Bt) {
    Ar(!0);
    for (const e in it)
      Yn(e, (t) => {
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
function jr(e, t) {
  const n = e.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= t
  )
    return n === t;
  if (e.lastModifiedCached = t, n)
    for (const i in it)
      Yn(i, (r) => {
        const o = r.data;
        return r.provider !== e.provider || o.prefix !== e.prefix || o.lastModified === t;
      });
  return !0;
}
function Tr(e, t) {
  Bt || Kn();
  function n(i) {
    let r;
    if (!it[i] || !(r = Xn(i)))
      return;
    const o = Jn[i];
    let l;
    if (o.size)
      o.delete(l = Array.from(o).shift());
    else if (l = yt(r), !vt(r, l + 1))
      return;
    const u = {
      cached: Math.floor(Date.now() / Qn),
      provider: e.provider,
      data: t
    };
    return Nt(
      r,
      Be + l.toString(),
      JSON.stringify(u)
    );
  }
  t.lastModified && !jr(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"));
}
function en() {
}
function Er(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, vr(e);
  }));
}
function Pr(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: i } = e, r = e.iconsToLoad;
    delete e.iconsToLoad;
    let o;
    if (!r || !(o = bt(n)))
      return;
    o.prepare(n, i, r).forEach((u) => {
      Ir(n, u, (s) => {
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
            }), Tr(e, s);
          } catch (a) {
            console.error(a);
          }
        Er(e);
      });
    });
  }));
}
const zr = (e, t) => {
  const n = wr(e, !0, Hn()), i = kr(n);
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
    const { provider: a, prefix: c, name: f } = s, g = ye(a, c), d = g.pendingIcons || (g.pendingIcons = /* @__PURE__ */ new Set());
    d.has(f) || (d.add(f), r[a][c].push(f));
  }), o.forEach((s) => {
    const { provider: a, prefix: c } = s;
    r[a][c].length && Pr(s, r[a][c]);
  }), t ? _r(t, i, o) : en;
};
function Or(e, t) {
  const n = {
    ...e
  };
  for (const i in t) {
    const r = t[i], o = typeof r;
    i in Wn ? (r === null || r && (o === "string" || o === "number")) && (n[i] = r) : o === typeof n[i] && (n[i] = i === "rotate" ? r % 4 : r);
  }
  return n;
}
const Lr = /[\s,]+/;
function Nr(e, t) {
  t.split(Lr).forEach((n) => {
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
function Br(e, t = 0) {
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
function Gr(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t)
    n += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function Rr(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Fr(e) {
  return "data:image/svg+xml," + Rr(e);
}
function Vr(e) {
  return 'url("' + Fr(e) + '")';
}
const tn = {
  ...Dn,
  inline: !1
}, Hr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Wr = {
  display: "inline-block"
}, _t = {
  "background-color": "currentColor"
}, $n = {
  "background-color": "transparent"
}, nn = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, rn = {
  "-webkit-mask": _t,
  mask: _t,
  background: $n
};
for (const e in rn) {
  const t = rn[e];
  for (const n in nn)
    t[e + "-" + n] = nn[n];
}
function Dr(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
function qr(e, t) {
  const n = Or(tn, t), i = t.mode || "svg", r = i === "svg" ? { ...Hr } : {};
  e.body.indexOf("xlink:") === -1 && delete r["xmlns:xlink"];
  let o = typeof t.style == "string" ? t.style : "";
  for (let S in t) {
    const v = t[S];
    if (v !== void 0)
      switch (S) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[S] = v === !0 || v === "true" || v === 1;
          break;
        case "flip":
          typeof v == "string" && Nr(n, v);
          break;
        case "color":
          o = o + (o.length > 0 && o.trim().slice(-1) !== ";" ? ";" : "") + "color: " + v + "; ";
          break;
        case "rotate":
          typeof v == "string" ? n[S] = Br(v) : typeof v == "number" && (n[S] = v);
          break;
        case "ariaHidden":
        case "aria-hidden":
          v !== !0 && v !== "true" && delete r["aria-hidden"];
          break;
        default:
          if (S.slice(0, 3) === "on:")
            break;
          tn[S] === void 0 && (r[S] = v);
      }
  }
  const l = rr(e, n), u = l.attributes;
  if (n.inline && (o = "vertical-align: -0.125em; " + o), i === "svg") {
    Object.assign(r, u), o !== "" && (r.style = o);
    let S = 0, v = t.id;
    return typeof v == "string" && (v = v.replace(/-/g, "_")), {
      svg: !0,
      attributes: r,
      body: ur(l.body, v ? () => v + "ID" + S++ : "iconifySvelte")
    };
  }
  const { body: s, width: a, height: c } = e, f = i === "mask" || (i === "bg" ? !1 : s.indexOf("currentColor") !== -1), g = Gr(s, {
    ...u,
    width: a + "",
    height: c + ""
  }), m = {
    "--svg": Vr(g)
  }, x = (S) => {
    const v = u[S];
    v && (m[S] = Dr(v));
  };
  x("width"), x("height"), Object.assign(m, Wr, f ? _t : $n);
  let b = "";
  for (const S in m)
    b += S + ": " + m[S] + ";";
  return r.style = b + o, {
    svg: !1,
    attributes: r
  };
}
Hn(!0);
cr("", br);
if (typeof document < "u" && typeof window < "u") {
  Kn();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((i) => {
      try {
        // Check if item is an object and not null/array
        (typeof i != "object" || i === null || i instanceof Array || // Check for 'icons' and 'prefix'
        typeof i.icons != "object" || typeof i.prefix != "string" || // Add icon set
        !er(i)) && console.error(n);
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
          ar(n, r) || console.error(i);
        } catch {
          console.error(i);
        }
      }
  }
}
function Ur(e, t, n, i, r) {
  function o() {
    t.loading && (t.loading.abort(), t.loading = null);
  }
  if (typeof e == "object" && e !== null && typeof e.body == "string")
    return t.name = "", o(), { data: { ...nt, ...e } };
  let l;
  if (typeof e != "string" || (l = tt(e, !1, !0)) === null)
    return o(), null;
  const u = Ki(l);
  if (!u)
    return n && (!t.loading || t.loading.name !== e) && (o(), t.name = "", t.loading = {
      name: e,
      abort: zr([l], i)
    }), null;
  o(), t.name !== e && (t.name = e, r && !t.destroyed && r(e));
  const s = ["iconify"];
  return l.prefix !== "" && s.push("iconify--" + l.prefix), l.provider !== "" && s.push("iconify--" + l.provider), { data: u, classes: s };
}
function Zr(e, t) {
  return e ? qr({
    ...nt,
    ...e
  }, t) : null;
}
function on(e) {
  let t;
  function n(o, l) {
    return (
      /*data*/
      o[0].svg ? Jr : Qr
    );
  }
  let i = n(e), r = i(e);
  return {
    c() {
      r.c(), t = de();
    },
    m(o, l) {
      r.m(o, l), B(o, t, l);
    },
    p(o, l) {
      i === (i = n(o)) && r ? r.p(o, l) : (r.d(1), r = i(o), r && (r.c(), r.m(t.parentNode, t)));
    },
    d(o) {
      o && L(t), r.d(o);
    }
  };
}
function Qr(e) {
  let t, n = [
    /*data*/
    e[0].attributes
  ], i = {};
  for (let r = 0; r < n.length; r += 1)
    i = oe(i, n[r]);
  return {
    c() {
      t = k("span"), dt(t, i);
    },
    m(r, o) {
      B(r, t, o);
    },
    p(r, o) {
      dt(t, i = Fe(n, [o & /*data*/
      1 && /*data*/
      r[0].attributes]));
    },
    d(r) {
      r && L(t);
    }
  };
}
function Jr(e) {
  let t, n = (
    /*data*/
    e[0].body + ""
  ), i = [
    /*data*/
    e[0].attributes
  ], r = {};
  for (let o = 0; o < i.length; o += 1)
    r = oe(r, i[o]);
  return {
    c() {
      t = ki("svg"), Ht(t, r);
    },
    m(o, l) {
      B(o, t, l), t.innerHTML = n;
    },
    p(o, l) {
      l & /*data*/
      1 && n !== (n = /*data*/
      o[0].body + "") && (t.innerHTML = n), Ht(t, r = Fe(i, [l & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && L(t);
    }
  };
}
function Xr(e) {
  let t, n = (
    /*data*/
    e[0] && on(e)
  );
  return {
    c() {
      n && n.c(), t = de();
    },
    m(i, r) {
      n && n.m(i, r), B(i, t, r);
    },
    p(i, [r]) {
      /*data*/
      i[0] ? n ? n.p(i, r) : (n = on(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: D,
    o: D,
    d(i) {
      i && L(t), n && n.d(i);
    }
  };
}
function Yr(e, t, n) {
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
  }), Ci(() => {
    n(1, i.destroyed = !0, i), i.loading && (i.loading.abort(), n(1, i.loading = null, i));
  }), e.$$set = (a) => {
    n(6, t = oe(oe({}, t), Je(a)));
  }, e.$$.update = () => {
    {
      const a = Ur(t.icon, i, r, s, u);
      n(0, l = a ? Zr(a.data, t) : null), l && a.classes && n(
        0,
        l.attributes.class = (typeof t.class == "string" ? t.class + " " : "") + a.classes.join(" "),
        l
      );
    }
  }, t = Je(t), [l, i, r, o];
}
class Me extends te {
  constructor(t) {
    super(), ee(this, t, Yr, Xr, K, {});
  }
}
function ei(e) {
  var t, n, i = "";
  if (typeof e == "string" || typeof e == "number")
    i += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = ei(e[t])) && (i && (i += " "), i += n);
    else
      for (t in e)
        e[t] && (i && (i += " "), i += t);
  return i;
}
function Kr() {
  for (var e, t, n = 0, i = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = ei(e)) && (i && (i += " "), i += t);
  return i;
}
function $r() {
  for (var e = 0, t, n, i = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = ti(t)) && (i && (i += " "), i += n);
  return i;
}
function ti(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", i = 0; i < e.length; i++)
    e[i] && (t = ti(e[i])) && (n && (n += " "), n += t);
  return n;
}
var Gt = "-";
function eo(e) {
  var t = no(e), n = e.conflictingClassGroups, i = e.conflictingClassGroupModifiers, r = i === void 0 ? {} : i;
  function o(u) {
    var s = u.split(Gt);
    return s[0] === "" && s.length !== 1 && s.shift(), ni(s, t) || to(u);
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
function ni(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], i = t.nextPart.get(n), r = i ? ni(e.slice(1), i) : void 0;
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
function to(e) {
  if (ln.test(e)) {
    var t = ln.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function no(e) {
  var t = e.theme, n = e.prefix, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, r = ro(Object.entries(e.classGroups), n);
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
      if (io(r)) {
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
function io(e) {
  return e.isThemeGetter;
}
function ro(e, t) {
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
function oo(e) {
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
var ii = "!";
function lo(e) {
  var t = e.separator || ":", n = t.length === 1, i = t[0], r = t.length;
  return function(l) {
    for (var u = [], s = 0, a = 0, c, f = 0; f < l.length; f++) {
      var g = l[f];
      if (s === 0) {
        if (g === i && (n || l.slice(f, f + r) === t)) {
          u.push(l.slice(a, f)), a = f + r;
          continue;
        }
        if (g === "/") {
          c = f;
          continue;
        }
      }
      g === "[" ? s++ : g === "]" && s--;
    }
    var d = u.length === 0 ? l : l.substring(a), m = d.startsWith(ii), x = m ? d.substring(1) : d, b = c && c > a ? c - a : void 0;
    return {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: x,
      maybePostfixModifierPosition: b
    };
  };
}
function so(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(i) {
    var r = i[0] === "[";
    r ? (t.push.apply(t, n.sort().concat([i])), n = []) : n.push(i);
  }), t.push.apply(t, n.sort()), t;
}
function uo(e) {
  return {
    cache: oo(e.cacheSize),
    splitModifiers: lo(e),
    ...eo(e)
  };
}
var co = /\s+/;
function ao(e, t) {
  var n = t.splitModifiers, i = t.getClassGroupId, r = t.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return e.trim().split(co).map(function(l) {
    var u = n(l), s = u.modifiers, a = u.hasImportantModifier, c = u.baseClassName, f = u.maybePostfixModifierPosition, g = i(f ? c.substring(0, f) : c), d = !!f;
    if (!g) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (g = i(c), !g)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      d = !1;
    }
    var m = so(s).join(":"), x = a ? m + ii : m;
    return {
      isTailwindClass: !0,
      modifierId: x,
      classGroupId: g,
      originalClassName: l,
      hasPostfixModifier: d
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
    var c = t[0], f = t.slice(1), g = f.reduce(function(d, m) {
      return m(d);
    }, c());
    return i = uo(g), r = i.cache.get, o = i.cache.set, l = s, s(a);
  }
  function s(a) {
    var c = r(a);
    if (c)
      return c;
    var f = ao(a, i);
    return o(a, f), f;
  }
  return function() {
    return l($r.apply(null, arguments));
  };
}
function q(e) {
  var t = function(i) {
    return i[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var ri = /^\[(?:([a-z-]+):)?(.+)\]$/i, fo = /^\d+\/\d+$/, go = /* @__PURE__ */ new Set(["px", "full", "screen"]), ho = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, po = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, mo = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function le(e) {
  return ve(e) || go.has(e) || fo.test(e) || Ct(e);
}
function Ct(e) {
  return _e(e, "length", wo);
}
function bo(e) {
  return _e(e, "size", oi);
}
function ko(e) {
  return _e(e, "position", oi);
}
function vo(e) {
  return _e(e, "url", xo);
}
function De(e) {
  return _e(e, "number", ve);
}
function ve(e) {
  return !Number.isNaN(Number(e));
}
function yo(e) {
  return e.endsWith("%") && ve(e.slice(0, -1));
}
function je(e) {
  return un(e) || _e(e, "number", un);
}
function G(e) {
  return ri.test(e);
}
function Te() {
  return !0;
}
function me(e) {
  return ho.test(e);
}
function _o(e) {
  return _e(e, "", Co);
}
function _e(e, t, n) {
  var i = ri.exec(e);
  return i ? i[1] ? i[1] === t : n(i[2]) : !1;
}
function wo(e) {
  return po.test(e);
}
function oi() {
  return !1;
}
function xo(e) {
  return e.startsWith("url(");
}
function un(e) {
  return Number.isInteger(Number(e));
}
function Co(e) {
  return mo.test(e);
}
function St() {
  var e = q("colors"), t = q("spacing"), n = q("blur"), i = q("brightness"), r = q("borderColor"), o = q("borderRadius"), l = q("borderSpacing"), u = q("borderWidth"), s = q("contrast"), a = q("grayscale"), c = q("hueRotate"), f = q("invert"), g = q("gap"), d = q("gradientColorStops"), m = q("gradientColorStopPositions"), x = q("inset"), b = q("margin"), S = q("opacity"), v = q("padding"), j = q("saturate"), O = q("scale"), P = q("sepia"), C = q("skew"), E = q("space"), Z = q("translate"), N = function() {
    return ["auto", "contain", "none"];
  }, V = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, w = function() {
    return ["auto", G, t];
  }, y = function() {
    return [G, t];
  }, A = function() {
    return ["", le];
  }, _ = function() {
    return ["auto", ve, G];
  }, M = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, I = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, H = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Q = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, J = function() {
    return ["", "0", G];
  }, he = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ne = function() {
    return [ve, De];
  }, pe = function() {
    return [ve, G];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Te],
      spacing: [le],
      blur: ["none", "", me, G],
      brightness: ne(),
      borderColor: [e],
      borderRadius: ["none", "", "full", me, G],
      borderSpacing: y(),
      borderWidth: A(),
      contrast: ne(),
      grayscale: J(),
      hueRotate: pe(),
      invert: J(),
      gap: y(),
      gradientColorStops: [e],
      gradientColorStopPositions: [yo, Ct],
      inset: w(),
      margin: w(),
      opacity: ne(),
      padding: y(),
      saturate: ne(),
      scale: ne(),
      sepia: J(),
      skew: pe(),
      space: y(),
      translate: y()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", G]
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
        object: [].concat(M(), [G])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: V()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": V()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": V()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        z: ["auto", je]
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
        flex: ["1", "auto", "initial", "none", G]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: J()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: J()
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
        "grid-cols": [Te]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", je]
        }, G]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": _()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": _()
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
          span: [je]
        }, G]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": _()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": _()
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
        "auto-cols": ["auto", "min", "max", "fr", G]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", G]
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
        "space-x": [E]
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
        "space-y": [E]
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
        w: ["auto", "min", "max", "fit", G, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", G, le]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [me]
        }, me, G]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [G, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", G, le]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [G, t, "min", "max", "fit"]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", G, le]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", G]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", G]
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
        decoration: [].concat(I(), ["wavy"])
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
        "underline-offset": ["auto", G, le]
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
        indent: y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
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
        content: ["none", G]
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
        bg: [].concat(M(), [ko])
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
        bg: ["auto", "cover", "contain", bo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vo]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
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
        border: [].concat(I(), ["hidden"])
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
        divide: I()
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
        outline: [""].concat(I())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [G, le]
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
        ring: A()
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
        shadow: ["", "inner", "none", me, _o]
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
        "mix-blend": H()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H()
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
        "drop-shadow": ["", "none", me, G]
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
        saturate: [j]
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
        "backdrop-saturate": [j]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
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
        ease: ["linear", "in", "out", "in-out", G]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", G]
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
        scale: [O]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [O]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [O]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [je, G]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Z]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Z]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [C]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [C]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
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
        "scroll-m": y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": y()
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
        "will-change": ["auto", "scroll", "contents", "transform", G]
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
function So(e, t) {
  for (var n in t)
    li(e, n, t[n]);
  return e;
}
var Io = Object.prototype.hasOwnProperty, Mo = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function li(e, t, n) {
  if (!Io.call(e, t) || Mo.has(typeof n) || n === null) {
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
      li(e[t], i, n[i]);
  }
}
function Ao(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i];
  return typeof e == "function" ? xt.apply(void 0, [St, e].concat(n)) : xt.apply(void 0, [function() {
    return So(St(), e);
  }].concat(n));
}
var si = /* @__PURE__ */ xt(St);
function re(...e) {
  return si(Kr(e));
}
function jo(e, t) {
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
function To(e) {
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
      r && r.m(o, l), B(o, n, l), i = !0;
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
      i || (z(r, o), i = !0);
    },
    o(o) {
      R(r, o), i = !1;
    },
    d(o) {
      o && L(n), r && r.d(o);
    }
  };
}
function Eo(e) {
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
      r && r.m(o, l), B(o, n, l), i = !0;
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
      i || (z(r, o), i = !0);
    },
    o(o) {
      R(r, o), i = !1;
    },
    d(o) {
      o && L(n), r && r.d(o);
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
    a = oe(a, s[c]);
  return {
    c() {
      t = k(
        /*href*/
        e[0] ? "a" : "button"
      ), u && u.c(), Ye(
        /*href*/
        e[0] ? "a" : "button"
      )(t, a);
    },
    m(c, f) {
      B(c, t, f), u && u.m(t, null), i = !0, r || (o = [
        X(
          t,
          "click",
          /*click_handler_1*/
          e[12]
        ),
        X(
          t,
          "change",
          /*change_handler_1*/
          e[13]
        ),
        X(
          t,
          "keydown",
          /*keydown_handler_1*/
          e[14]
        ),
        X(
          t,
          "keyup",
          /*keyup_handler_1*/
          e[15]
        ),
        X(
          t,
          "mouseenter",
          /*mouseenter_handler_1*/
          e[16]
        ),
        X(
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
      i || (z(u, c), i = !0);
    },
    o(c) {
      R(u, c), i = !1;
    },
    d(c) {
      c && L(t), u && u.d(c), r = !1, be(o);
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
    c = oe(c, a[f]);
  return {
    c() {
      t = k(
        /*href*/
        e[0] ? "a" : "button"
      ), s && s.c(), Ye(
        /*href*/
        e[0] ? "a" : "button"
      )(t, c);
    },
    m(f, g) {
      B(f, t, g), s && s.m(t, null), r = !0, o || (l = [
        X(
          t,
          "click",
          /*click_handler*/
          e[6]
        ),
        X(
          t,
          "change",
          /*change_handler*/
          e[7]
        ),
        X(
          t,
          "keydown",
          /*keydown_handler*/
          e[8]
        ),
        X(
          t,
          "keyup",
          /*keyup_handler*/
          e[9]
        ),
        X(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        X(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[11]
        ),
        bi(i = jo.call(null, t, { builders: (
          /*builders*/
          e[2]
        ) }))
      ], o = !0);
    },
    p(f, g) {
      s && s.p && (!r || g & /*$$scope*/
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
          g,
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
        (!r || g & /*href, type*/
        3 && n !== (n = /*href*/
        f[0] ? void 0 : (
          /*type*/
          f[1]
        ))) && { type: n },
        (!r || g & /*href*/
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
      ])), i && Ge(i.update) && g & /*builders*/
      4 && i.update.call(null, { builders: (
        /*builders*/
        f[2]
      ) });
    },
    i(f) {
      r || (z(s, f), r = !0);
    },
    o(f) {
      R(s, f), r = !1;
    },
    d(f) {
      f && L(t), s && s.d(f), o = !1, be(l);
    }
  };
}
function Po(e) {
  let t, n, i, r;
  const o = [Eo, To], l = [];
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
      l[t].m(s, a), B(s, i, a), r = !0;
    },
    p(s, [a]) {
      let c = t;
      t = u(s), t === c ? l[t].p(s, a) : (ue(), R(l[c], 1, 1, () => {
        l[c] = null;
      }), ce(), n = l[t], n ? n.p(s, a) : (n = l[t] = o[t](s), n.c()), z(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (z(n), r = !0);
    },
    o(s) {
      R(n), r = !1;
    },
    d(s) {
      s && L(i), l[t].d(s);
    }
  };
}
function zo(e, t, n) {
  const i = ["href", "type", "builders"];
  let r = Xe(t, i), { $$slots: o = {}, $$scope: l } = t, { href: u = void 0 } = t, { type: s = void 0 } = t, { builders: a = [] } = t;
  function c(C) {
    ie.call(this, e, C);
  }
  function f(C) {
    ie.call(this, e, C);
  }
  function g(C) {
    ie.call(this, e, C);
  }
  function d(C) {
    ie.call(this, e, C);
  }
  function m(C) {
    ie.call(this, e, C);
  }
  function x(C) {
    ie.call(this, e, C);
  }
  function b(C) {
    ie.call(this, e, C);
  }
  function S(C) {
    ie.call(this, e, C);
  }
  function v(C) {
    ie.call(this, e, C);
  }
  function j(C) {
    ie.call(this, e, C);
  }
  function O(C) {
    ie.call(this, e, C);
  }
  function P(C) {
    ie.call(this, e, C);
  }
  return e.$$set = (C) => {
    t = oe(oe({}, t), Je(C)), n(3, r = Xe(t, i)), "href" in C && n(0, u = C.href), "type" in C && n(1, s = C.type), "builders" in C && n(2, a = C.builders), "$$scope" in C && n(4, l = C.$$scope);
  }, [
    u,
    s,
    a,
    r,
    l,
    o,
    c,
    f,
    g,
    d,
    m,
    x,
    b,
    S,
    v,
    j,
    O,
    P
  ];
}
let Oo = class extends te {
  constructor(t) {
    super(), ee(this, t, zo, Po, K, { href: 0, type: 1, builders: 2 });
  }
};
function Lo(e) {
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
      t || (z(i, r), t = !0);
    },
    o(r) {
      R(i, r), t = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function No(e) {
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
    $$slots: { default: [Lo] },
    $$scope: { ctx: e }
  };
  for (let o = 0; o < i.length; o += 1)
    r = oe(r, i[o]);
  return t = new Oo({ props: r }), t.$on(
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
        16 && ji(
          /*$$restProps*/
          o[4]
        )
      ]) : {};
      l & /*$$scope*/
      256 && (u.$$scope = { dirty: l, ctx: o }), t.$set(u);
    },
    i(o) {
      n || (z(t.$$.fragment, o), n = !0);
    },
    o(o) {
      R(t.$$.fragment, o), n = !1;
    },
    d(o) {
      fe(t, o);
    }
  };
}
function Bo(e, t, n) {
  const i = ["class", "variant", "size", "builders"];
  let r = Xe(t, i), { $$slots: o = {}, $$scope: l } = t, { class: u = void 0 } = t, { variant: s = "default" } = t, { size: a = "default" } = t, { builders: c = [] } = t;
  function f(d) {
    ie.call(this, e, d);
  }
  function g(d) {
    ie.call(this, e, d);
  }
  return e.$$set = (d) => {
    t = oe(oe({}, t), Je(d)), n(4, r = Xe(t, i)), "class" in d && n(0, u = d.class), "variant" in d && n(1, s = d.variant), "size" in d && n(2, a = d.size), "builders" in d && n(3, c = d.builders), "$$scope" in d && n(8, l = d.$$scope);
  }, [
    u,
    s,
    a,
    c,
    r,
    o,
    f,
    g,
    l
  ];
}
class Go extends te {
  constructor(t) {
    super(), ee(this, t, Bo, No, K, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
}
var an = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, $ = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Ro = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function ui(e, t) {
  e.forEach(function(n) {
    Array.isArray(n) ? ui(n, t) : t.push(n);
  });
}
function ci(e) {
  let t = [];
  return ui(e, t), t;
}
var Fo = (...e) => ci(e).filter(Boolean), ai = (e, t) => {
  let n = {}, i = Object.keys(e), r = Object.keys(t);
  for (let o of i)
    if (r.includes(o)) {
      let l = e[o], u = t[o];
      typeof l == "object" && typeof u == "object" ? n[o] = ai(l, u) : n[o] = u + " " + l;
    } else
      n[o] = e[o];
  for (let o of r)
    i.includes(o) || (n[o] = t[o]);
  return n;
}, fn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), Vo = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, fi = (e) => e || void 0, $e = (...e) => fi(ci(e).filter(Boolean).join(" ")), ft = null, et = {}, It = !1, Ee = (...e) => (t) => t.twMerge ? ((!ft || It) && (It = !1, ft = $(et) ? si : Ao(et)), fi(ft($e(e)))) : $e(e), dn = (e, t) => {
  for (let n in t)
    e.hasOwnProperty(n) ? e[n] = $e(e[n], t[n]) : e[n] = t[n];
  return e;
}, Ho = (e, t) => {
  let { extend: n = null, slots: i = {}, variants: r = {}, compoundVariants: o = [], compoundSlots: l = [], defaultVariants: u = {} } = e, s = { ...Vo, ...t }, a = n != null && n.base ? $e(n.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, c = n != null && n.variants && !$(n.variants) ? ai(r, n.variants) : r, f = n != null && n.defaultVariants && !$(n.defaultVariants) ? { ...n.defaultVariants, ...u } : u;
  !$(s.twMergeConfig) && !Ro(s.twMergeConfig, et) && (It = !0, et = s.twMergeConfig);
  let g = $(i) ? {} : { base: e == null ? void 0 : e.base, ...i }, d = $(n == null ? void 0 : n.slots) ? g : dn(n == null ? void 0 : n.slots, $(g) ? { base: e == null ? void 0 : e.base } : g), m = (b) => {
    if ($(c) && $(i) && $(n == null ? void 0 : n.slots))
      return Ee(a, b == null ? void 0 : b.class, b == null ? void 0 : b.className)(s);
    if (o && !Array.isArray(o))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof o}`);
    if (l && !Array.isArray(l))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof l}`);
    let S = (w, y, A = [], _) => {
      let M = A;
      if (typeof y == "string")
        M = M.concat(fn(y).split(" ").map((I) => `${w}:${I}`));
      else if (Array.isArray(y))
        M = M.concat(y.reduce((I, H) => I.concat(`${w}:${H}`), []));
      else if (typeof y == "object" && typeof _ == "string") {
        for (let I in y)
          if (y.hasOwnProperty(I) && I === _) {
            let H = y[I];
            if (H && typeof H == "string") {
              let Q = fn(H);
              M[_] ? M[_] = M[_].concat(Q.split(" ").map((J) => `${w}:${J}`)) : M[_] = Q.split(" ").map((J) => `${w}:${J}`);
            } else
              Array.isArray(H) && H.length > 0 && (M[_] = H.reduce((Q, J) => Q.concat(`${w}:${J}`), []));
          }
      }
      return M;
    }, v = (w, y = c, A = null, _ = null) => {
      var M;
      let I = y[w];
      if (!I || $(I))
        return null;
      let H = (M = _ == null ? void 0 : _[w]) != null ? M : b == null ? void 0 : b[w];
      if (H === null)
        return null;
      let Q = an(H), J = Array.isArray(s.responsiveVariants) && s.responsiveVariants.length > 0 || s.responsiveVariants === !0, he = f == null ? void 0 : f[w], ne = [];
      if (typeof Q == "object" && J)
        for (let [Y, Rt] of Object.entries(Q)) {
          let gi = I[Rt];
          if (Y === "initial") {
            he = Rt;
            continue;
          }
          Array.isArray(s.responsiveVariants) && !s.responsiveVariants.includes(Y) || (ne = S(Y, gi, ne, A));
        }
      let pe = I[Q] || I[an(he)];
      return typeof ne == "object" && typeof A == "string" && ne[A] ? dn(ne, pe) : ne.length > 0 ? (ne.push(pe), ne) : pe;
    }, j = () => c ? Object.keys(c).map((w) => v(w, c)) : null, O = (w, y) => {
      if (!c || typeof c != "object")
        return null;
      let A = new Array();
      for (let _ in c) {
        let M = v(_, c, w, y), I = w === "base" && typeof M == "string" ? M : M && M[w];
        I && (A[A.length] = I);
      }
      return A;
    }, P = {};
    for (let w in b)
      b[w] !== void 0 && (P[w] = b[w]);
    let C = (w, y) => {
      var A;
      let _ = typeof (b == null ? void 0 : b[w]) == "object" ? { [w]: (A = b[w]) == null ? void 0 : A.initial } : {};
      return { ...f, ...P, ..._, ...y };
    }, E = (w = [], y) => {
      let A = [];
      for (let { class: _, className: M, ...I } of w) {
        let H = !0;
        for (let [Q, J] of Object.entries(I)) {
          let he = C(Q, y);
          if (Array.isArray(J)) {
            if (!J.includes(he[Q])) {
              H = !1;
              break;
            }
          } else if (he[Q] !== J) {
            H = !1;
            break;
          }
        }
        H && (_ && A.push(_), M && A.push(M));
      }
      return A;
    }, Z = (w) => {
      let y = E(o, w), A = E(n == null ? void 0 : n.compoundVariants, w);
      return Fo(A, y);
    }, N = (w) => {
      let y = Z(w);
      if (!Array.isArray(y))
        return y;
      let A = {};
      for (let _ of y)
        if (typeof _ == "string" && (A.base = Ee(A.base, _)(s)), typeof _ == "object")
          for (let [M, I] of Object.entries(_))
            A[M] = Ee(A[M], I)(s);
      return A;
    }, V = (w) => {
      if (l.length < 1)
        return null;
      let y = {};
      for (let { slots: A = [], class: _, className: M, ...I } of l) {
        if (!$(I)) {
          let H = !0;
          for (let Q of Object.keys(I)) {
            let J = C(Q, w)[Q];
            if (J === void 0 || J !== I[Q]) {
              H = !1;
              break;
            }
          }
          if (!H)
            continue;
        }
        for (let H of A)
          y[H] = y[H] || [], y[H].push([_, M]);
      }
      return y;
    };
    if (!$(i) || !$(n == null ? void 0 : n.slots)) {
      let w = {};
      if (typeof d == "object" && !$(d))
        for (let y of Object.keys(d))
          w[y] = (A) => {
            var _, M;
            return Ee(d[y], O(y, A), ((_ = N(A)) != null ? _ : [])[y], ((M = V(A)) != null ? M : [])[y], A == null ? void 0 : A.class, A == null ? void 0 : A.className)(s);
          };
      return w;
    }
    return Ee(a, j(), Z(), b == null ? void 0 : b.class, b == null ? void 0 : b.className)(s);
  }, x = () => {
    if (!(!c || typeof c != "object"))
      return Object.keys(c);
  };
  return m.variantKeys = x(), m.extend = n, m.base = a, m.slots = d, m.variants = c, m.defaultVariants = f, m.compoundSlots = l, m.compoundVariants = o, m;
};
const gn = Ho({
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
function Wo(e) {
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
      ge(t.$$.fragment), n = T(), r = F(i), o = T();
    },
    m(u, s) {
      ae(t, u, s), B(u, n, s), B(u, r, s), B(u, o, s), l = !0;
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
      l || (z(t.$$.fragment, u), l = !0);
    },
    o(u) {
      R(t.$$.fragment, u), l = !1;
    },
    d(u) {
      u && (L(n), L(r), L(o)), fe(t, u);
    }
  };
}
function mn(e) {
  let t, n;
  return t = new Go({
    props: {
      variant: "uikit-secondary",
      class: "uikit-w-full uikit-justify-start",
      $$slots: { default: [Wo] },
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
      n || (z(t.$$.fragment, i), n = !0);
    },
    o(i) {
      R(t.$$.fragment, i), n = !1;
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
  for (let g = 0; g < a.length; g += 1)
    c[g] = mn(pn(e, a, g));
  const f = (g) => R(c[g], 1, 1, () => {
    c[g] = null;
  });
  return {
    c() {
      t = k("div"), n = k("h2"), r = F(i), o = T(), l = k("div");
      for (let g = 0; g < c.length; g += 1)
        c[g].c();
      u = T(), p(n, "class", "uikit-mb-2 uikit-px-4 uikit-text-lg uikit-font-semibold uikit-tracking-tight"), p(l, "class", "uikit-space-y-1"), p(t, "class", "uikit-px-3 uikit-py-2 uikit-w-full");
    },
    m(g, d) {
      B(g, t, d), h(t, n), h(n, r), h(t, o), h(t, l);
      for (let m = 0; m < c.length; m += 1)
        c[m] && c[m].m(l, null);
      h(t, u), s = !0;
    },
    p(g, d) {
      if ((!s || d & /*menus*/
      2) && i !== (i = /*title*/
      g[3] + "") && W(r, i), d & /*onClick, menus*/
      6) {
        a = U(
          /*items*/
          g[4]
        );
        let m;
        for (m = 0; m < a.length; m += 1) {
          const x = pn(g, a, m);
          c[m] ? (c[m].p(x, d), z(c[m], 1)) : (c[m] = mn(x), c[m].c(), z(c[m], 1), c[m].m(l, null));
        }
        for (ue(), m = a.length; m < c.length; m += 1)
          f(m);
        ce();
      }
    },
    i(g) {
      if (!s) {
        for (let d = 0; d < a.length; d += 1)
          z(c[d]);
        s = !0;
      }
    },
    o(g) {
      c = c.filter(Boolean);
      for (let d = 0; d < c.length; d += 1)
        R(c[d]);
      s = !1;
    },
    d(g) {
      g && L(t), se(c, g);
    }
  };
}
function Do(e) {
  let t, n, i, r, o = U(
    /*menus*/
    e[1]
  ), l = [];
  for (let s = 0; s < o.length; s += 1)
    l[s] = bn(hn(e, o, s));
  const u = (s) => R(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      t = k("div"), n = k("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      p(n, "class", "uikit-space-y-4 uikit-py-4"), p(t, "class", i = re(
        "uikit-pb-12",
        /*className*/
        e[0]
      ));
    },
    m(s, a) {
      B(s, t, a), h(t, n);
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
          l[c] ? (l[c].p(f, a), z(l[c], 1)) : (l[c] = bn(f), l[c].c(), z(l[c], 1), l[c].m(n, null));
        }
        for (ue(), c = o.length; c < l.length; c += 1)
          u(c);
        ce();
      }
      (!r || a & /*className*/
      1 && i !== (i = re(
        "uikit-pb-12",
        /*className*/
        s[0]
      ))) && p(t, "class", i);
    },
    i(s) {
      if (!r) {
        for (let a = 0; a < o.length; a += 1)
          z(l[a]);
        r = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let a = 0; a < l.length; a += 1)
        R(l[a]);
      r = !1;
    },
    d(s) {
      s && L(t), se(l, s);
    }
  };
}
function qo(e, t, n) {
  let { class: i = void 0 } = t, { menus: r = [] } = t, { onClick: o = (l) => {
    console.log(l);
  } } = t;
  return e.$$set = (l) => {
    "class" in l && n(0, i = l.class), "menus" in l && n(1, r = l.menus), "onClick" in l && n(2, o = l.onClick);
  }, [i, r, o];
}
class vl extends te {
  constructor(t) {
    super(), ee(this, t, qo, Do, K, { class: 0, menus: 1, onClick: 2 });
  }
}
function kn(e, t, n) {
  const i = e.slice();
  return i[2] = t[n].type, i[3] = t[n].height, i[4] = t[n].width, i[5] = t[n].items, i[6] = t[n].id, i[8] = n, i;
}
function Uo(e) {
  let t, n, i, r;
  return {
    c() {
      t = k("div"), n = F("content"), p(t, "id", i = `${/*depth*/
      e[1]}${/*i*/
      e[8]}-`), p(t, "class", r = Vt(
        /*width*/
        e[4]
      ) + " svelte-1jbas83");
    },
    m(o, l) {
      B(o, t, l), h(t, n);
    },
    p(o, l) {
      l & /*depth*/
      2 && i !== (i = `${/*depth*/
      o[1]}${/*i*/
      o[8]}-`) && p(t, "id", i), l & /*grids*/
      1 && r !== (r = Vt(
        /*width*/
        o[4]
      ) + " svelte-1jbas83") && p(t, "class", r);
    },
    i: D,
    o: D,
    d(o) {
      o && L(t);
    }
  };
}
function Zo(e) {
  let t, n, i, r;
  return n = new di({
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
      t = k("div"), ge(n.$$.fragment), i = T(), p(t, "class", "uikit-flex uikit-w-full"), Se(
        t,
        "height",
        /*height*/
        e[3] || "200px"
      );
    },
    m(o, l) {
      B(o, t, l), ae(n, t, null), h(t, i), r = !0;
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
      r || (z(n.$$.fragment, o), r = !0);
    },
    o(o) {
      R(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && L(t), fe(n);
    }
  };
}
function vn(e) {
  let t, n, i, r;
  const o = [Zo, Uo], l = [];
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
      l[t].m(s, a), B(s, i, a), r = !0;
    },
    p(s, a) {
      let c = t;
      t = u(s), t === c ? l[t].p(s, a) : (ue(), R(l[c], 1, 1, () => {
        l[c] = null;
      }), ce(), n = l[t], n ? n.p(s, a) : (n = l[t] = o[t](s), n.c()), z(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (z(n), r = !0);
    },
    o(s) {
      R(n), r = !1;
    },
    d(s) {
      s && L(i), l[t].d(s);
    }
  };
}
function Qo(e) {
  let t, n, i = U(
    /*grids*/
    e[0]
  ), r = [];
  for (let l = 0; l < i.length; l += 1)
    r[l] = vn(kn(e, i, l));
  const o = (l) => R(r[l], 1, 1, () => {
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
      B(l, t, u), n = !0;
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
          r[s] ? (r[s].p(a, u), z(r[s], 1)) : (r[s] = vn(a), r[s].c(), z(r[s], 1), r[s].m(t.parentNode, t));
        }
        for (ue(), s = i.length; s < r.length; s += 1)
          o(s);
        ce();
      }
    },
    i(l) {
      if (!n) {
        for (let u = 0; u < i.length; u += 1)
          z(r[u]);
        n = !0;
      }
    },
    o(l) {
      r = r.filter(Boolean);
      for (let u = 0; u < r.length; u += 1)
        R(r[u]);
      n = !1;
    },
    d(l) {
      l && L(t), se(r, l);
    }
  };
}
function Jo(e, t, n) {
  let { grids: i = [] } = t, { depth: r = "" } = t;
  return e.$$set = (o) => {
    "grids" in o && n(0, i = o.grids), "depth" in o && n(1, r = o.depth);
  }, [i, r];
}
class di extends te {
  constructor(t) {
    super(), ee(this, t, Jo, Qo, K, { grids: 0, depth: 1 });
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
function Xo(e) {
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
      t = k("li"), n = k("button"), ge(i.$$.fragment), r = k("span"), l = F(o), u = T(), p(r, "class", "uikit-ml-2"), p(n, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case"), p(t, "class", "nav-item");
    },
    m(g, d) {
      B(g, t, d), h(t, n), ae(i, n, null), h(n, r), h(r, l), h(t, u), s = !0, a || (c = X(n, "click", f), a = !0);
    },
    p(g, d) {
      e = g;
      const m = {};
      d & /*links*/
      8 && (m.icon = /*icon*/
      e[13]), i.$set(m), (!s || d & /*links*/
      8) && o !== (o = /*title*/
      e[11] + "") && W(l, o);
    },
    i(g) {
      s || (z(i.$$.fragment, g), s = !0);
    },
    o(g) {
      R(i.$$.fragment, g), s = !1;
    },
    d(g) {
      g && L(t), fe(i), a = !1, c();
    }
  };
}
function Yo(e) {
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
      t = k("li"), n = k("div"), i = k("label"), o = F(r), l = T(), u = k("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      s = T(), p(i, "tabindex", "1"), p(i, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), p(u, "tabindex", "1"), p(u, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), p(n, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), p(t, "class", "nav-item");
    },
    m(f, g) {
      B(f, t, g), h(t, n), h(n, i), h(i, o), h(n, l), h(n, u);
      for (let d = 0; d < c.length; d += 1)
        c[d] && c[d].m(u, null);
      h(t, s);
    },
    p(f, g) {
      if (g & /*links*/
      8 && r !== (r = /*title*/
      f[11] + "") && W(o, r), g & /*onItemClick, links*/
      24) {
        a = U(
          /*items*/
          f[14]
        );
        let d;
        for (d = 0; d < a.length; d += 1) {
          const m = xn(f, a, d);
          c[d] ? c[d].p(m, g) : (c[d] = Cn(m), c[d].c(), c[d].m(u, null));
        }
        for (; d < c.length; d += 1)
          c[d].d(1);
        c.length = a.length;
      }
    },
    i: D,
    o: D,
    d(f) {
      f && L(t), se(c, f);
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
      t = k("li"), n = k("button"), r = F(i), o = T();
    },
    m(a, c) {
      B(a, t, c), h(t, n), h(n, r), h(t, o), l || (u = X(n, "click", s), l = !0);
    },
    p(a, c) {
      e = a, c & /*links*/
      8 && i !== (i = /*title*/
      e[11] + "") && W(r, i);
    },
    d(a) {
      a && L(t), l = !1, u();
    }
  };
}
function Sn(e) {
  let t, n, i, r;
  const o = [Yo, Xo], l = [];
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
      l[t].m(s, a), B(s, i, a), r = !0;
    },
    p(s, a) {
      let c = t;
      t = u(s), t === c ? l[t].p(s, a) : (ue(), R(l[c], 1, 1, () => {
        l[c] = null;
      }), ce(), n = l[t], n ? n.p(s, a) : (n = l[t] = o[t](s), n.c()), z(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (z(n), r = !0);
    },
    o(s) {
      R(n), r = !1;
    },
    d(s) {
      s && L(i), l[t].d(s);
    }
  };
}
function Ko(e) {
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
      t = k("li"), n = k("button"), ge(i.$$.fragment), r = k("span"), l = F(o), u = T(), p(r, "class", "uikit-ml-2"), p(n, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case uikit-items-start"), p(t, "class", "uikit-nav-item");
    },
    m(g, d) {
      B(g, t, d), h(t, n), ae(i, n, null), h(n, r), h(r, l), h(t, u), s = !0, a || (c = X(n, "click", f), a = !0);
    },
    p(g, d) {
      e = g;
      const m = {};
      d & /*links*/
      8 && (m.icon = /*icon*/
      e[13]), i.$set(m), (!s || d & /*links*/
      8) && o !== (o = /*title*/
      e[11] + "") && W(l, o);
    },
    i(g) {
      s || (z(i.$$.fragment, g), s = !0);
    },
    o(g) {
      R(i.$$.fragment, g), s = !1;
    },
    d(g) {
      g && L(t), fe(i), a = !1, c();
    }
  };
}
function $o(e) {
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
      t = k("li"), n = k("div"), i = k("label"), o = F(r), l = T(), u = k("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      s = T(), p(i, "tabindex", "1"), p(i, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), p(u, "tabindex", "1"), p(u, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), p(n, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), p(t, "class", "uikit-nav-item uikit-w-full");
    },
    m(f, g) {
      B(f, t, g), h(t, n), h(n, i), h(i, o), h(n, l), h(n, u);
      for (let d = 0; d < c.length; d += 1)
        c[d] && c[d].m(u, null);
      h(t, s);
    },
    p(f, g) {
      if (g & /*links*/
      8 && r !== (r = /*title*/
      f[11] + "") && W(o, r), g & /*onItemClick, links*/
      24) {
        a = U(
          /*items*/
          f[14]
        );
        let d;
        for (d = 0; d < a.length; d += 1) {
          const m = _n(f, a, d);
          c[d] ? c[d].p(m, g) : (c[d] = In(m), c[d].c(), c[d].m(u, null));
        }
        for (; d < c.length; d += 1)
          c[d].d(1);
        c.length = a.length;
      }
    },
    i: D,
    o: D,
    d(f) {
      f && L(t), se(c, f);
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
      t = k("li"), n = k("button"), r = F(i), o = T();
    },
    m(a, c) {
      B(a, t, c), h(t, n), h(n, r), h(t, o), l || (u = X(n, "click", s), l = !0);
    },
    p(a, c) {
      e = a, c & /*links*/
      8 && i !== (i = /*title*/
      e[11] + "") && W(r, i);
    },
    d(a) {
      a && L(t), l = !1, u();
    }
  };
}
function Mn(e) {
  let t, n, i, r;
  const o = [$o, Ko], l = [];
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
      l[t].m(s, a), B(s, i, a), r = !0;
    },
    p(s, a) {
      let c = t;
      t = u(s), t === c ? l[t].p(s, a) : (ue(), R(l[c], 1, 1, () => {
        l[c] = null;
      }), ce(), n = l[t], n ? n.p(s, a) : (n = l[t] = o[t](s), n.c()), z(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (z(n), r = !0);
    },
    o(s) {
      R(n), r = !1;
    },
    d(s) {
      s && L(i), l[t].d(s);
    }
  };
}
function el(e) {
  let t, n, i, r, o, l, u, s, a, c, f, g, d, m, x, b, S, v, j, O, P, C, E, Z = U(
    /*links*/
    e[3]
  ), N = [];
  for (let _ = 0; _ < Z.length; _ += 1)
    N[_] = Sn(wn(e, Z, _));
  const V = (_) => R(N[_], 1, 1, () => {
    N[_] = null;
  });
  let w = U(
    /*links*/
    e[3]
  ), y = [];
  for (let _ = 0; _ < w.length; _ += 1)
    y[_] = Mn(yn(e, w, _));
  const A = (_) => R(y[_], 1, 1, () => {
    y[_] = null;
  });
  return {
    c() {
      t = k("nav"), n = k("div"), i = k("div"), r = k("button"), o = F(
        /*logotxt*/
        e[1]
      ), l = T(), u = k("div"), s = k("ul");
      for (let _ = 0; _ < N.length; _ += 1)
        N[_].c();
      a = T(), c = k("div"), f = k("div"), g = k("input"), d = T(), m = k("div"), m.innerHTML = '<label for="my-drawer" class="uikit-btn uikit-btn-ghost uikit-drawer-button"><div class="uikit-ml-1 uikit-mr-1 uikit-h-8 uikit-w-8 uikit-rounded uikit-py-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="uikit-text-gray-900 dark:uikit-text-gray-100"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></div></label>', x = T(), b = k("div"), S = k("label"), v = T(), j = k("ul");
      for (let _ = 0; _ < y.length; _ += 1)
        y[_].c();
      p(r, "class", "uikit-text-sm uikit-font-bold uikit-leading-relaxed uikit-inline-block uikit-mr-4 uikit-py-2 uikit-whitespace-nowrap uikit-text-slate-700"), p(i, "class", "uikit-relative uikit-flex uikit-justify-between lg:uikit-w-auto lg:uikit-static lg:uikit-block lg:uikit-justify-start"), p(s, "class", "uikit-flex uikit-flex-col lg:uikit-flex-row uikit-list-none lg:uikit-ml-auto"), p(u, "class", "lg:uikit-flex uikit-flex-grow uikit-items-center uikit-hidden"), p(g, "id", "my-drawer"), p(g, "type", "checkbox"), p(g, "class", "uikit-drawer-toggle"), p(m, "class", "uikit-drawer-content"), p(S, "for", "my-drawer"), p(S, "class", "uikit-drawer-overlay"), p(j, "class", "uikit-menu uikit-p-4 uikit-w-80 uikit-min-h-full uikit-bg-base-200 uikit-text-base-content"), p(b, "class", "uikit-drawer-side"), p(f, "class", "uikit-drawer"), p(c, "class", "lg:uikit-hidden"), p(n, "class", "uikit-container uikit-px-4 uikit-mx-auto uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between"), p(t, "class", O = re(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        e[0]
      ));
    },
    m(_, M) {
      B(_, t, M), h(t, n), h(n, i), h(i, r), h(r, o), h(n, l), h(n, u), h(u, s);
      for (let I = 0; I < N.length; I += 1)
        N[I] && N[I].m(s, null);
      h(n, a), h(n, c), h(c, f), h(f, g), h(f, d), h(f, m), h(f, x), h(f, b), h(b, S), h(b, v), h(b, j);
      for (let I = 0; I < y.length; I += 1)
        y[I] && y[I].m(j, null);
      P = !0, C || (E = X(
        r,
        "click",
        /*click_handler*/
        e[5]
      ), C = !0);
    },
    p(_, [M]) {
      if ((!P || M & /*logotxt*/
      2) && W(
        o,
        /*logotxt*/
        _[1]
      ), M & /*links, onItemClick*/
      24) {
        Z = U(
          /*links*/
          _[3]
        );
        let I;
        for (I = 0; I < Z.length; I += 1) {
          const H = wn(_, Z, I);
          N[I] ? (N[I].p(H, M), z(N[I], 1)) : (N[I] = Sn(H), N[I].c(), z(N[I], 1), N[I].m(s, null));
        }
        for (ue(), I = Z.length; I < N.length; I += 1)
          V(I);
        ce();
      }
      if (M & /*links, onItemClick*/
      24) {
        w = U(
          /*links*/
          _[3]
        );
        let I;
        for (I = 0; I < w.length; I += 1) {
          const H = yn(_, w, I);
          y[I] ? (y[I].p(H, M), z(y[I], 1)) : (y[I] = Mn(H), y[I].c(), z(y[I], 1), y[I].m(j, null));
        }
        for (ue(), I = w.length; I < y.length; I += 1)
          A(I);
        ce();
      }
      (!P || M & /*className*/
      1 && O !== (O = re(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        _[0]
      ))) && p(t, "class", O);
    },
    i(_) {
      if (!P) {
        for (let M = 0; M < Z.length; M += 1)
          z(N[M]);
        for (let M = 0; M < w.length; M += 1)
          z(y[M]);
        P = !0;
      }
    },
    o(_) {
      N = N.filter(Boolean);
      for (let M = 0; M < N.length; M += 1)
        R(N[M]);
      y = y.filter(Boolean);
      for (let M = 0; M < y.length; M += 1)
        R(y[M]);
      P = !1;
    },
    d(_) {
      _ && L(t), se(N, _), se(y, _), C = !1, E();
    }
  };
}
function tl(e, t, n) {
  let { class: i = "" } = t, { logotxt: r = "wwqdrh" } = t, { logourl: o = "#" } = t, { links: l = [] } = t, { onItemClick: u = (d) => {
    window.location.href = d;
  } } = t;
  const s = () => u(o), a = (d) => u(d), c = (d) => u(d), f = (d) => u(d), g = (d) => u(d);
  return e.$$set = (d) => {
    "class" in d && n(0, i = d.class), "logotxt" in d && n(1, r = d.logotxt), "logourl" in d && n(2, o = d.logourl), "links" in d && n(3, l = d.links), "onItemClick" in d && n(4, u = d.onItemClick);
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
    g
  ];
}
class nl extends te {
  constructor(t) {
    super(), ee(this, t, tl, el, K, {
      class: 0,
      logotxt: 1,
      logourl: 2,
      links: 3,
      onItemClick: 4
    });
  }
}
function An(e, t, n) {
  const i = e.slice();
  return i[7] = t[n], i;
}
function jn(e) {
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
      t = k("button"), i = F(n), p(t, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(u, s) {
      B(u, t, s), h(t, i), r || (o = X(t, "click", l), r = !0);
    },
    p(u, s) {
      e = u, s & /*buttons*/
      8 && n !== (n = /*item*/
      e[7] + "") && W(i, n);
    },
    d(u) {
      u && L(t), r = !1, o();
    }
  };
}
function il(e) {
  let t, n, i, r, o, l, u, s, a, c, f, g, d, m, x, b = U(
    /*buttons*/
    e[3]
  ), S = [];
  for (let v = 0; v < b.length; v += 1)
    S[v] = jn(An(e, b, v));
  return {
    c() {
      t = k("section"), n = k("div"), i = k("div"), r = k("div"), o = k("h2"), l = F(
        /*title*/
        e[0]
      ), u = T(), s = k("p"), a = F(
        /*description*/
        e[1]
      ), c = T(), f = k("div");
      for (let v = 0; v < S.length; v += 1)
        S[v].c();
      g = T(), d = k("img"), p(o, "class", "uikit-font-semibold uikit-text-4xl uikit-text-slate-600"), p(s, "class", "uikit-mt-4 uikit-text-lg uikit-leading-relaxed uikit-text-slate-500"), p(f, "class", "uikit-mt-12"), p(r, "class", "uikit-pt-32 sm:uikit-pt-0"), p(i, "class", "uikit-w-full md:uikit-w-8/12 lg:uikit-w-6/12 xl:uikit-w-6/12 uikit-px-4"), p(n, "class", "uikit-container uikit-mx-auto uikit-items-center uikit-flex uikit-flex-wrap"), p(d, "class", "uikit-absolute uikit-top-0 uikit-b-auto uikit-right-0 uikit-pt-16 sm:uikit-w-6/12 uikit--mt-48 sm:uikit-mt-0 uikit-w-10/12"), Qe(d.src, m = /*cover*/
      e[5]) || p(d, "src", m), p(d, "alt", "..."), Se(d, "max-height", "860px"), p(t, "class", x = re(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        e[2]
      )), Se(t, "max-height", "860px");
    },
    m(v, j) {
      B(v, t, j), h(t, n), h(n, i), h(i, r), h(r, o), h(o, l), h(r, u), h(r, s), h(s, a), h(r, c), h(r, f);
      for (let O = 0; O < S.length; O += 1)
        S[O] && S[O].m(f, null);
      h(t, g), h(t, d);
    },
    p(v, [j]) {
      if (j & /*title*/
      1 && W(
        l,
        /*title*/
        v[0]
      ), j & /*description*/
      2 && W(
        a,
        /*description*/
        v[1]
      ), j & /*buttonClick, buttons*/
      24) {
        b = U(
          /*buttons*/
          v[3]
        );
        let O;
        for (O = 0; O < b.length; O += 1) {
          const P = An(v, b, O);
          S[O] ? S[O].p(P, j) : (S[O] = jn(P), S[O].c(), S[O].m(f, null));
        }
        for (; O < S.length; O += 1)
          S[O].d(1);
        S.length = b.length;
      }
      j & /*cover*/
      32 && !Qe(d.src, m = /*cover*/
      v[5]) && p(d, "src", m), j & /*className*/
      4 && x !== (x = re(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        v[2]
      )) && p(t, "class", x);
    },
    i: D,
    o: D,
    d(v) {
      v && L(t), se(S, v);
    }
  };
}
function rl(e, t, n) {
  let { title: i = "wwqdrh's ui component: uikit" } = t, { description: r = "a cross framework web component, you can visit it in wwqdrh'home" } = t, { class: o = "" } = t, { buttons: l = [] } = t, { buttonClick: u = (c) => {
    console.log(c);
  } } = t, { cover: s = "" } = t;
  const a = (c) => u(c);
  return e.$$set = (c) => {
    "title" in c && n(0, i = c.title), "description" in c && n(1, r = c.description), "class" in c && n(2, o = c.class), "buttons" in c && n(3, l = c.buttons), "buttonClick" in c && n(4, u = c.buttonClick), "cover" in c && n(5, s = c.cover);
  }, [i, r, o, l, u, s, a];
}
class ol extends te {
  constructor(t) {
    super(), ee(this, t, rl, il, K, {
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
  ), f, g, d;
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
      t = k("div"), n = k("div"), ge(i.$$.fragment), r = T(), o = k("h3"), u = F(l), s = T(), a = k("p"), f = F(c), g = T(), p(n, "class", "uikit-flex uikit-justify-center uikit-items-center uikit-mb-4 uikit-w-10 uikit-h-10 uikit-rounded-full uikit-bg-primary-100 lg:uikit-h-12 lg:uikit-w-12 dark:uikit-bg-primary-900"), p(o, "class", "uikit-mb-2 uikit-text-xl uikit-font-bold dark:uikit-text-white"), p(a, "class", "uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(m, x) {
      B(m, t, x), h(t, n), ae(i, n, null), h(t, r), h(t, o), h(o, u), h(t, s), h(t, a), h(a, f), h(t, g), d = !0;
    },
    p(m, x) {
      const b = {};
      x & /*features*/
      2 && (b.icon = /*icon*/
      m[4]), i.$set(b), (!d || x & /*features*/
      2) && l !== (l = /*title*/
      m[2] + "") && W(u, l), (!d || x & /*features*/
      2) && c !== (c = /*description*/
      m[3] + "") && W(f, c);
    },
    i(m) {
      d || (z(i.$$.fragment, m), d = !0);
    },
    o(m) {
      R(i.$$.fragment, m), d = !1;
    },
    d(m) {
      m && L(t), fe(i);
    }
  };
}
function ll(e) {
  let t, n, i, r, o, l, u, s, a, c, f, g, d = U(
    /*features*/
    e[1]
  ), m = [];
  for (let b = 0; b < d.length; b += 1)
    m[b] = En(Tn(e, d, b));
  const x = (b) => R(m[b], 1, 1, () => {
    m[b] = null;
  });
  return {
    c() {
      t = k("section"), n = k("div"), i = k("div"), r = k("h2"), o = F(
        /*title*/
        e[2]
      ), l = T(), u = k("p"), s = F(
        /*description*/
        e[3]
      ), a = T(), c = k("div");
      for (let b = 0; b < m.length; b += 1)
        m[b].c();
      p(r, "class", "uikit-mb-4 uikit-text-4xl uikit-font-extrabold uikit-text-gray-900 dark:uikit-text-white"), p(u, "class", "uikit-text-gray-500 sm:uikit-text-xl dark:uikit-text-gray-400"), p(i, "class", "uikit-mb-8 uikit-max-w-screen-md lg:uikit-mb-16"), p(c, "class", "uikit-space-y-8 md:uikit-grid md:uikit-grid-cols-2 lg:uikit-grid-cols-3 md:uikit-gap-12 md:uikit-space-y-0"), p(n, "class", "uikit-py-8 uikit-px-4 uikit-mx-auto uikit-max-w-screen-xl sm:uikit-py-16 lg:uikit-px-6"), p(t, "class", f = re(
        "dark:uikit-bg-gray-800",
        /*className*/
        e[0]
      ));
    },
    m(b, S) {
      B(b, t, S), h(t, n), h(n, i), h(i, r), h(r, o), h(i, l), h(i, u), h(u, s), h(n, a), h(n, c);
      for (let v = 0; v < m.length; v += 1)
        m[v] && m[v].m(c, null);
      g = !0;
    },
    p(b, [S]) {
      if ((!g || S & /*title*/
      4) && W(
        o,
        /*title*/
        b[2]
      ), (!g || S & /*description*/
      8) && W(
        s,
        /*description*/
        b[3]
      ), S & /*features*/
      2) {
        d = U(
          /*features*/
          b[1]
        );
        let v;
        for (v = 0; v < d.length; v += 1) {
          const j = Tn(b, d, v);
          m[v] ? (m[v].p(j, S), z(m[v], 1)) : (m[v] = En(j), m[v].c(), z(m[v], 1), m[v].m(c, null));
        }
        for (ue(), v = d.length; v < m.length; v += 1)
          x(v);
        ce();
      }
      (!g || S & /*className*/
      1 && f !== (f = re(
        "dark:uikit-bg-gray-800",
        /*className*/
        b[0]
      ))) && p(t, "class", f);
    },
    i(b) {
      if (!g) {
        for (let S = 0; S < d.length; S += 1)
          z(m[S]);
        g = !0;
      }
    },
    o(b) {
      m = m.filter(Boolean);
      for (let S = 0; S < m.length; S += 1)
        R(m[S]);
      g = !1;
    },
    d(b) {
      b && L(t), se(m, b);
    }
  };
}
function sl(e, t, n) {
  let { class: i = "" } = t, { title: r = "" } = t, { description: o = "" } = t, { features: l = [] } = t;
  return e.$$set = (u) => {
    "class" in u && n(0, i = u.class), "title" in u && n(2, r = u.title), "description" in u && n(3, o = u.description), "features" in u && n(1, l = u.features);
  }, [i, l, r, o];
}
class ul extends te {
  constructor(t) {
    super(), ee(this, t, sl, ll, K, {
      class: 0,
      title: 2,
      description: 3,
      features: 1
    });
  }
}
function Pn(e, t, n) {
  const i = e.slice();
  return i[8] = t[n], i[10] = n, i;
}
function zn(e, t, n) {
  const i = e.slice();
  return i[6] = t[n].icon, i[7] = t[n].description, i;
}
function On(e) {
  let t, n, i, r, o, l, u, s, a = (
    /*description*/
    e[7] + ""
  ), c, f, g;
  return o = new Me({ props: { icon: (
    /*icon*/
    e[6]
  ) } }), {
    c() {
      t = k("li"), n = k("div"), i = k("div"), r = k("span"), ge(o.$$.fragment), l = T(), u = k("div"), s = k("h4"), c = F(a), f = T(), p(r, "class", "uikit-text-xs uikit-font-semibold uikit-inline-block uikit-py-1 uikit-px-2 uikit-uppercase uikit-rounded-full uikit-text-slate-500 uikit-bg-slate-50 uikit-mr-3"), p(s, "class", "uikit-text-slate-500"), p(n, "class", "uikit-flex uikit-items-center"), p(t, "class", "uikit-py-2");
    },
    m(d, m) {
      B(d, t, m), h(t, n), h(n, i), h(i, r), ae(o, r, null), h(n, l), h(n, u), h(u, s), h(s, c), h(t, f), g = !0;
    },
    p(d, m) {
      const x = {};
      m & /*sections*/
      16 && (x.icon = /*icon*/
      d[6]), o.$set(x), (!g || m & /*sections*/
      16) && a !== (a = /*description*/
      d[7] + "") && W(c, a);
    },
    i(d) {
      g || (z(o.$$.fragment, d), g = !0);
    },
    o(d) {
      R(o.$$.fragment, d), g = !1;
    },
    d(d) {
      d && L(t), fe(o);
    }
  };
}
function Ln(e) {
  let t, n, i, r, o, l, u, s, a, c, f, g, d, m;
  return {
    c() {
      t = k("div"), n = k("img"), r = T(), o = k("div"), l = k("a"), u = F("❮"), a = T(), c = k("a"), f = F("❯"), d = T(), p(n, "alt", "..."), p(n, "class", "uikit-max-w-full uikit-rounded-lg uikit-shadow-xl"), Se(n, "transform", "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"), Qe(n.src, i = /*item*/
      e[8]) || p(n, "src", i), p(l, "href", s = `#pd-cover-slide-${/*id*/
      e[1]}-${/*i*/
      (e[10] - 1 + /*covers*/
      e[2].length) % /*covers*/
      e[2].length}`), p(l, "class", "uikit-btn uikit-btn-circle"), p(c, "href", g = `#pd-cover-slide-${/*id*/
      e[1]}-${/*i*/
      (e[10] + 1) % /*covers*/
      e[2].length}`), p(c, "class", "uikit-btn uikit-btn-circle"), p(o, "class", "uikit-absolute uikit-flex uikit-justify-between uikit-transform uikit--translate-y-1/2 uikit-left-5 uikit-right-5 uikit-top-1/2"), p(t, "id", m = `pd-cover-slide-${/*id*/
      e[1]}-${/*i*/
      e[10]}`), p(t, "class", "uikit-carousel-item uikit-relative uikit-w-full");
    },
    m(x, b) {
      B(x, t, b), h(t, n), h(t, r), h(t, o), h(o, l), h(l, u), h(o, a), h(o, c), h(c, f), h(t, d);
    },
    p(x, b) {
      b & /*covers*/
      4 && !Qe(n.src, i = /*item*/
      x[8]) && p(n, "src", i), b & /*id, covers*/
      6 && s !== (s = `#pd-cover-slide-${/*id*/
      x[1]}-${/*i*/
      (x[10] - 1 + /*covers*/
      x[2].length) % /*covers*/
      x[2].length}`) && p(l, "href", s), b & /*id, covers*/
      6 && g !== (g = `#pd-cover-slide-${/*id*/
      x[1]}-${/*i*/
      (x[10] + 1) % /*covers*/
      x[2].length}`) && p(c, "href", g), b & /*id*/
      2 && m !== (m = `pd-cover-slide-${/*id*/
      x[1]}-${/*i*/
      x[10]}`) && p(t, "id", m);
    },
    d(x) {
      x && L(t);
    }
  };
}
function cl(e) {
  let t, n, i, r, o, l, u, s, a, c, f, g, d, m, x, b, S, v, j, O, P;
  u = new Me({ props: { icon: (
    /*icon*/
    e[6]
  ) } });
  let C = U(
    /*sections*/
    e[4]
  ), E = [];
  for (let w = 0; w < C.length; w += 1)
    E[w] = On(zn(e, C, w));
  const Z = (w) => R(E[w], 1, 1, () => {
    E[w] = null;
  });
  let N = U(
    /*covers*/
    e[2]
  ), V = [];
  for (let w = 0; w < N.length; w += 1)
    V[w] = Ln(Pn(e, N, w));
  return {
    c() {
      t = k("div"), n = k("div"), i = k("div"), r = k("div"), o = k("div"), l = k("div"), ge(u.$$.fragment), s = T(), a = k("h3"), c = F(
        /*title*/
        e[3]
      ), f = T(), g = k("p"), d = F(
        /*description*/
        e[7]
      ), m = T(), x = k("ul");
      for (let w = 0; w < E.length; w += 1)
        E[w].c();
      b = T(), S = k("div"), v = k("div");
      for (let w = 0; w < V.length; w += 1)
        V[w].c();
      p(l, "class", "uikit-text-slate-500 uikit-p-3 uikit-text-center uikit-inline-flex uikit-items-center uikit-justify-center uikit-w-16 uikit-h-16 uikit-mb-6 uikit-shadow-lg uikit-rounded-full uikit-bg-white"), p(a, "class", "uikit-text-3xl uikit-font-semibold"), p(g, "class", "uikit-mt-4 uikit-text-md uikit-leading-relaxed uikit-text-slate-500"), p(x, "class", "uikit-list-none uikit-mt-6"), p(o, "class", "md:uikit-pr-12"), p(r, "class", "uikit-w-full md:uikit-w-1/3 uikit-ml-auto uikit-px-12 md:uikit-px-4"), p(v, "class", "uikit-carousel uikit-carousel-center uikit-w-full"), p(S, "class", "uikit-w-full md:uikit-w-2/3 uikit-mr-auto uikit-px-4 uikit-pt-24 md:uikit-pt-0"), p(i, "class", j = re(
        "uikit-flex",
        /*rtl*/
        e[5] ? "uikit-flex-row-reverse" : ""
      )), p(n, "class", "uikit-items-center uikit-flex uikit-flex-wrap"), p(t, "class", O = re(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        e[0]
      ));
    },
    m(w, y) {
      B(w, t, y), h(t, n), h(n, i), h(i, r), h(r, o), h(o, l), ae(u, l, null), h(o, s), h(o, a), h(a, c), h(o, f), h(o, g), h(g, d), h(o, m), h(o, x);
      for (let A = 0; A < E.length; A += 1)
        E[A] && E[A].m(x, null);
      h(i, b), h(i, S), h(S, v);
      for (let A = 0; A < V.length; A += 1)
        V[A] && V[A].m(v, null);
      P = !0;
    },
    p(w, [y]) {
      const A = {};
      if (y & /*icon*/
      64 && (A.icon = /*icon*/
      w[6]), u.$set(A), (!P || y & /*title*/
      8) && W(
        c,
        /*title*/
        w[3]
      ), (!P || y & /*description*/
      128) && W(
        d,
        /*description*/
        w[7]
      ), y & /*sections*/
      16) {
        C = U(
          /*sections*/
          w[4]
        );
        let _;
        for (_ = 0; _ < C.length; _ += 1) {
          const M = zn(w, C, _);
          E[_] ? (E[_].p(M, y), z(E[_], 1)) : (E[_] = On(M), E[_].c(), z(E[_], 1), E[_].m(x, null));
        }
        for (ue(), _ = C.length; _ < E.length; _ += 1)
          Z(_);
        ce();
      }
      if (y & /*id, covers*/
      6) {
        N = U(
          /*covers*/
          w[2]
        );
        let _;
        for (_ = 0; _ < N.length; _ += 1) {
          const M = Pn(w, N, _);
          V[_] ? V[_].p(M, y) : (V[_] = Ln(M), V[_].c(), V[_].m(v, null));
        }
        for (; _ < V.length; _ += 1)
          V[_].d(1);
        V.length = N.length;
      }
      (!P || y & /*rtl*/
      32 && j !== (j = re(
        "uikit-flex",
        /*rtl*/
        w[5] ? "uikit-flex-row-reverse" : ""
      ))) && p(i, "class", j), (!P || y & /*className*/
      1 && O !== (O = re(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        w[0]
      ))) && p(t, "class", O);
    },
    i(w) {
      if (!P) {
        z(u.$$.fragment, w);
        for (let y = 0; y < C.length; y += 1)
          z(E[y]);
        P = !0;
      }
    },
    o(w) {
      R(u.$$.fragment, w), E = E.filter(Boolean);
      for (let y = 0; y < E.length; y += 1)
        R(E[y]);
      P = !1;
    },
    d(w) {
      w && L(t), fe(u), se(E, w), se(V, w);
    }
  };
}
function al(e, t, n) {
  let { class: i = "" } = t, { id: r = "" } = t, { covers: o = [] } = t, { title: l = "" } = t, { icon: u = "" } = t, { description: s = "" } = t, { sections: a = [] } = t, { rtl: c = !1 } = t;
  return e.$$set = (f) => {
    "class" in f && n(0, i = f.class), "id" in f && n(1, r = f.id), "covers" in f && n(2, o = f.covers), "title" in f && n(3, l = f.title), "icon" in f && n(6, u = f.icon), "description" in f && n(7, s = f.description), "sections" in f && n(4, a = f.sections), "rtl" in f && n(5, c = f.rtl);
  }, [i, r, o, l, a, c, u, s];
}
class fl extends te {
  constructor(t) {
    super(), ee(this, t, al, cl, K, {
      class: 0,
      id: 1,
      covers: 2,
      title: 3,
      icon: 6,
      description: 7,
      sections: 4,
      rtl: 5
    });
  }
}
const yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: ol,
  Feature: ul,
  Grid: di,
  Header: nl,
  ProjectDescription: fl
}, Symbol.toStringTag, { value: "Module" }));
function dl(e) {
  let t, n, i, r, o, l;
  return {
    c() {
      t = k("div"), n = k("div"), i = k("span"), r = T(), o = k("button"), l = F(
        /*btnText*/
        e[0]
      ), p(i, "id", "mask-desc"), p(i, "class", "mask-tip-desc svelte-17awz4u"), p(o, "id", "next-step-btn"), p(o, "class", "mask-tip-btn svelte-17awz4u"), p(n, "class", "mask-tip svelte-17awz4u"), Se(t, "display", "none");
    },
    m(u, s) {
      B(u, t, s), h(t, n), h(n, i), h(n, r), h(n, o), h(o, l), e[6](n), e[7](t);
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
      u && L(t), e[6](null), e[7](null);
    }
  };
}
function gl(e, t, n) {
  let i, r, { gapWidth: o = 5 } = t, { isStart: l } = t, { stepArr: u = [] } = t, { btnText: s = "下一步" } = t;
  const a = (g) => {
    if (g.length === 0) {
      n(1, i.style.display = "none", i);
      return;
    }
    const { id: d, desc: m } = g[0];
    var x = document.getElementById(d), b = x.offsetWidth, S = x.offsetHeight, v = x.offsetLeft, j = x.offsetTop;
    console.log("待镂空元素: ", b, S, v, j);
    var O = document.body.scrollWidth, P = document.body.scrollHeight;
    n(1, i.style.width = O + "px", i), n(1, i.style.height = P + "px", i), n(1, i.style.position = "absolute", i), n(1, i.style.left = 0, i), n(1, i.style.top = 0, i), n(1, i.style.display = "block", i), n(1, i.style.boxSizing = "border-box", i), n(1, i.style.borderColor = "rgba(0, 0, 0, 0.75)", i), n(1, i.style.borderStyle = "solid", i), n(1, i.style.borderLeftWidth = v - o + "px", i), n(1, i.style.borderRightWidth = O - b - v - o + "px", i), n(1, i.style.borderTopWidth = j - o + "px", i), n(1, i.style.borderBottomWidth = P - S - j - o + "px", i), n(2, r.style.top = S + o * 2 + 10 + "px", r), n(2, r.style.left = "50%", r);
    var C = document.getElementById("mask-desc");
    C.innerHTML = m;
    var E = document.getElementById("next-step-btn");
    E.onclick = function() {
      g.shift(), a(g);
    };
  };
  function c(g) {
    Le[g ? "unshift" : "push"](() => {
      r = g, n(2, r);
    });
  }
  function f(g) {
    Le[g ? "unshift" : "push"](() => {
      i = g, n(1, i);
    });
  }
  return e.$$set = (g) => {
    "gapWidth" in g && n(3, o = g.gapWidth), "isStart" in g && n(4, l = g.isStart), "stepArr" in g && n(5, u = g.stepArr), "btnText" in g && n(0, s = g.btnText);
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
class _l extends te {
  constructor(t) {
    super(), ee(this, t, gl, dl, K, {
      gapWidth: 3,
      isStart: 4,
      stepArr: 5,
      btnText: 0
    });
  }
}
export {
  yl as Layout,
  vl as Sidebar,
  _l as StepMask,
  bl as confirm,
  ml as notify
};
