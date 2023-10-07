var ki = Object.defineProperty;
var vi = (t, e, n) => e in t ? ki(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var rt = (t, e, n) => (vi(t, typeof e != "symbol" ? e + "" : e, n), n);
function D() {
}
function ue(t, e) {
  for (const n in e)
    t[n] = e[n];
  return (
    /** @type {T & S} */
    t
  );
}
function Fn(t) {
  return t();
}
function Ft() {
  return /* @__PURE__ */ Object.create(null);
}
function be(t) {
  t.forEach(Fn);
}
function Ge(t) {
  return typeof t == "function";
}
function K(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Ve;
function Qe(t, e) {
  return t === e ? !0 : (Ve || (Ve = document.createElement("a")), Ve.href = e, t === Ve.href);
}
function yi(t) {
  return Object.keys(t).length === 0;
}
function Mt(t, e, n, i) {
  if (t) {
    const r = Vn(t, e, n, i);
    return t[0](r);
  }
}
function Vn(t, e, n, i) {
  return t[1] && i ? ue(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function jt(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const o = [], l = Math.max(e.dirty.length, r.length);
      for (let u = 0; u < l; u += 1)
        o[u] = e.dirty[u] | r[u];
      return o;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function At(t, e, n, i, r, o) {
  if (r) {
    const l = Vn(e, n, i, o);
    t.p(l, r);
  }
}
function Tt(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function Je(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function Xe(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t)
    !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function Vt(t) {
  return t ?? "";
}
function _i(t) {
  return t && Ge(t.destroy) ? t.destroy : D;
}
function h(t, e) {
  t.appendChild(e);
}
function N(t, e, n) {
  t.insertBefore(e, n || null);
}
function O(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function se(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function y(t) {
  return document.createElement(t);
}
function wi(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function V(t) {
  return document.createTextNode(t);
}
function E() {
  return V(" ");
}
function de() {
  return V("");
}
function Q(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function p(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
const xi = ["width", "height"];
function dt(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : n[i] && n[i].set && xi.indexOf(i) === -1 ? t[i] = e[i] : p(t, i, e[i]);
}
function Ht(t, e) {
  for (const n in e)
    p(t, n, e[n]);
}
function Ci(t, e) {
  Object.keys(e).forEach((n) => {
    Si(t, n, e[n]);
  });
}
function Si(t, e, n) {
  e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : p(t, e, n);
}
function Ye(t) {
  return /-/.test(t) ? Ci : dt;
}
function Ii(t) {
  return Array.from(t.childNodes);
}
function W(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function Se(t, e, n, i) {
  n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
function Mi(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: i });
}
let Oe;
function Pe(t) {
  Oe = t;
}
function Et() {
  if (!Oe)
    throw new Error("Function called outside component initialization");
  return Oe;
}
function Re(t) {
  Et().$$.on_mount.push(t);
}
function ji(t) {
  Et().$$.on_destroy.push(t);
}
function Ie() {
  const t = Et();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const o = Mi(
        /** @type {string} */
        e,
        n,
        { cancelable: i }
      );
      return r.slice().forEach((l) => {
        l.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function ie(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const xe = [], Le = [];
let Ce = [];
const Wt = [], Ai = /* @__PURE__ */ Promise.resolve();
let gt = !1;
function Ti() {
  gt || (gt = !0, Ai.then(Hn));
}
function ht(t) {
  Ce.push(t);
}
const ot = /* @__PURE__ */ new Set();
let we = 0;
function Hn() {
  if (we !== 0)
    return;
  const t = Oe;
  do {
    try {
      for (; we < xe.length; ) {
        const e = xe[we];
        we++, Pe(e), Ei(e.$$);
      }
    } catch (e) {
      throw xe.length = 0, we = 0, e;
    }
    for (Pe(null), xe.length = 0, we = 0; Le.length; )
      Le.pop()();
    for (let e = 0; e < Ce.length; e += 1) {
      const n = Ce[e];
      ot.has(n) || (ot.add(n), n());
    }
    Ce.length = 0;
  } while (xe.length);
  for (; Wt.length; )
    Wt.pop()();
  gt = !1, ot.clear(), Pe(t);
}
function Ei(t) {
  if (t.fragment !== null) {
    t.update(), be(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ht);
  }
}
function Pi(t) {
  const e = [], n = [];
  Ce.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), Ce = e;
}
const qe = /* @__PURE__ */ new Set();
let ke;
function oe() {
  ke = {
    r: 0,
    c: [],
    p: ke
    // parent group
  };
}
function le() {
  ke.r || be(ke.c), ke = ke.p;
}
function T(t, e) {
  t && t.i && (qe.delete(t), t.i(e));
}
function G(t, e, n, i) {
  if (t && t.o) {
    if (qe.has(t))
      return;
    qe.add(t), ke.c.push(() => {
      qe.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function U(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Fe(t, e) {
  const n = {}, i = {}, r = { $$scope: 1 };
  let o = t.length;
  for (; o--; ) {
    const l = t[o], u = e[o];
    if (u) {
      for (const s in l)
        s in u || (i[s] = 1);
      for (const s in u)
        r[s] || (n[s] = u[s], r[s] = 1);
      t[o] = u;
    } else
      for (const s in l)
        r[s] = 1;
  }
  for (const l in i)
    l in n || (n[l] = void 0);
  return n;
}
function zi(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function ge(t) {
  t && t.c();
}
function ae(t, e, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, n), ht(() => {
    const o = t.$$.on_mount.map(Fn).filter(Ge);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : be(o), t.$$.on_mount = [];
  }), r.forEach(ht);
}
function fe(t, e) {
  const n = t.$$;
  n.fragment !== null && (Pi(n.after_update), be(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Oi(t, e) {
  t.$$.dirty[0] === -1 && (xe.push(t), Ti(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ee(t, e, n, i, r, o, l, u = [-1]) {
  const s = Oe;
  Pe(t);
  const a = t.$$ = {
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
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: Ft(),
    dirty: u,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  l && l(a.root);
  let c = !1;
  if (a.ctx = n ? n(t, e.props || {}, (f, g, ...d) => {
    const m = d.length ? d[0] : g;
    return a.ctx && r(a.ctx[f], a.ctx[f] = m) && (!a.skip_bound && a.bound[f] && a.bound[f](m), c && Oi(t, f)), g;
  }) : [], a.update(), c = !0, be(a.before_update), a.fragment = i ? i(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Ii(e.target);
      a.fragment && a.fragment.l(f), f.forEach(O);
    } else
      a.fragment && a.fragment.c();
    e.intro && T(t.$$.fragment), ae(t, e.target, e.anchor), Hn();
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
  $on(e, n) {
    if (!Ge(n))
      return D;
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
    this.$$set && !yi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Li = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Li);
function Ni(t) {
  let e, n, i, r, o, l, u, s, a;
  return {
    c() {
      e = y("div"), n = y("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>', i = E(), r = y("div"), o = y("div"), l = y("span"), l.textContent = "Success", u = E(), s = y("p"), a = V(
        /*msg*/
        t[0]
      ), p(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-emerald-500"), p(l, "class", "uikit-font-semibold uikit-text-emerald-500 dark:uikit-text-emerald-400"), p(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), p(o, "class", "uikit-mx-3"), p(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), p(e, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      N(c, e, f), h(e, n), h(e, i), h(e, r), h(r, o), h(o, l), h(o, u), h(o, s), h(s, a);
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
      c && O(e);
    }
  };
}
function Bi(t, e, n) {
  let { msg: i = "" } = e, { duration: r = 3e3 } = e;
  const o = Ie();
  return Re(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), t.$$set = (l) => {
    "msg" in l && n(0, i = l.msg), "duration" in l && n(1, r = l.duration);
  }, [i, r];
}
class Gi extends te {
  constructor(e) {
    super(), ee(this, e, Bi, Ni, K, { msg: 0, duration: 1 });
  }
}
function Ri(t) {
  let e, n, i, r, o, l, u, s, a;
  return {
    c() {
      e = y("div"), n = y("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', i = E(), r = y("div"), o = y("div"), l = y("span"), l.textContent = "Info", u = E(), s = y("p"), a = V(
        /*msg*/
        t[0]
      ), p(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-blue-500"), p(l, "class", "uikit-font-semibold uikit-text-blue-500 dark:uikit-text-blue-400"), p(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), p(o, "class", "uikit-mx-3"), p(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), p(e, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      N(c, e, f), h(e, n), h(e, i), h(e, r), h(r, o), h(o, l), h(o, u), h(o, s), h(s, a);
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
      c && O(e);
    }
  };
}
function Fi(t, e, n) {
  let { msg: i = "" } = e, { duration: r = 3e3 } = e;
  const o = Ie();
  return Re(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), t.$$set = (l) => {
    "msg" in l && n(0, i = l.msg), "duration" in l && n(1, r = l.duration);
  }, [i, r];
}
class Dt extends te {
  constructor(e) {
    super(), ee(this, e, Fi, Ri, K, { msg: 0, duration: 1 });
  }
}
function Vi(t) {
  let e, n, i, r, o, l, u, s, a;
  return {
    c() {
      e = y("div"), n = y("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', i = E(), r = y("div"), o = y("div"), l = y("span"), l.textContent = "Warning", u = E(), s = y("p"), a = V(
        /*msg*/
        t[0]
      ), p(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-yellow-400"), p(l, "class", "uikit-font-semibold uikit-text-yellow-400 dark:uikit-text-yellow-300"), p(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), p(o, "class", "uikit-mx-3"), p(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), p(e, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      N(c, e, f), h(e, n), h(e, i), h(e, r), h(r, o), h(o, l), h(o, u), h(o, s), h(s, a);
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
      c && O(e);
    }
  };
}
function Hi(t, e, n) {
  let { msg: i = "" } = e, { duration: r = 3e3 } = e;
  const o = Ie();
  return Re(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), t.$$set = (l) => {
    "msg" in l && n(0, i = l.msg), "duration" in l && n(1, r = l.duration);
  }, [i, r];
}
class Wi extends te {
  constructor(e) {
    super(), ee(this, e, Hi, Vi, K, { msg: 0, duration: 1 });
  }
}
function Di(t) {
  let e, n, i, r, o, l, u, s, a;
  return {
    c() {
      e = y("div"), n = y("div"), n.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>', i = E(), r = y("div"), o = y("div"), l = y("span"), l.textContent = "Error", u = E(), s = y("p"), a = V(
        /*msg*/
        t[0]
      ), p(n, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-red-500"), p(l, "class", "uikit-font-semibold uikit-text-red-500 dark:uikit-text-red-400"), p(s, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), p(o, "class", "uikit-mx-3"), p(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), p(e, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      N(c, e, f), h(e, n), h(e, i), h(e, r), h(r, o), h(o, l), h(o, u), h(o, s), h(s, a);
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
      c && O(e);
    }
  };
}
function qi(t, e, n) {
  let { msg: i = "" } = e, { duration: r = 3e3 } = e;
  const o = Ie();
  return Re(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), t.$$set = (l) => {
    "msg" in l && n(0, i = l.msg), "duration" in l && n(1, r = l.duration);
  }, [i, r];
}
let Ui = class extends te {
  constructor(e) {
    super(), ee(this, e, qi, Di, K, { msg: 0, duration: 1 });
  }
};
const qt = "uikit_msg_panel";
let lt = 0;
const yl = (t) => {
  lt += 1;
  let e = window.document.getElementById(qt);
  e || (e = window.document.createElement("div"), e.id = qt, e.style.position = "absolute", e.style.top = "5px", e.style.right = "5px", e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "10px", e.style.zIndex = "100", document.body.appendChild(e));
  const n = window.document.createElement("div");
  e.appendChild(n);
  let i;
  switch (t.type) {
    case "success":
      i = new Gi({
        target: n,
        props: {
          ...t
        }
      });
      break;
    case "info":
      i = new Dt({
        target: n,
        props: {
          ...t
        }
      });
      break;
    case "warn":
      i = new Wi({
        target: n,
        props: {
          ...t
        }
      });
      break;
    case "error":
      i = new Ui({
        target: n,
        props: {
          ...t
        }
      });
      break;
    default:
      i = new Dt({
        target: n,
        props: {
          ...t
        }
      });
      break;
  }
  return i.$on("onEnd", () => {
    i.$destroy(), lt -= 1, lt == 0 && document.body.removeChild(e);
  }), i;
}, He = (t) => Object.entries(t).map(([e, n]) => `${e}: ${n};`).join(" ");
function Zi(t) {
  let e, n, i, r, o, l, u, s, a, c, f, g, d, m, C, v, S, _, A, z;
  return {
    c() {
      e = y("div"), n = y("div"), i = y("div"), r = y("div"), o = V(
        /*title*/
        t[0]
      ), l = E(), u = y("div"), s = y("div"), a = V(
        /*content*/
        t[1]
      ), c = E(), f = y("div"), g = y("div"), d = V(
        /*cancelText*/
        t[2]
      ), C = E(), v = y("div"), S = V(
        /*okText*/
        t[3]
      ), p(r, "class", "modal-title svelte-f901x2"), p(u, "class", "content svelte-f901x2"), p(i, "class", "modal-content-body svelte-f901x2"), p(g, "class", "btn button-left centerLayout svelte-f901x2"), p(g, "style", m = He(
        /*cancelBtnStyle*/
        t[4]
      )), p(v, "class", "btn button-right centerLayout svelte-f901x2"), p(v, "style", _ = He(
        /*okBtnStyle*/
        t[5]
      )), p(f, "class", "confirm-button-wrap svelte-f901x2"), p(n, "class", "confirm-modal-content svelte-f901x2"), p(e, "class", "confirm-modal svelte-f901x2");
    },
    m(P, w) {
      N(P, e, w), h(e, n), h(n, i), h(i, r), h(r, o), h(i, l), h(i, u), h(u, s), h(s, a), h(n, c), h(n, f), h(f, g), h(g, d), h(f, C), h(f, v), h(v, S), t[11](e), A || (z = [
        Q(
          g,
          "click",
          /*onCancelClk*/
          t[8]
        ),
        Q(
          v,
          "click",
          /*onOkClk*/
          t[7]
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
        d,
        /*cancelText*/
        P[2]
      ), w & /*cancelBtnStyle*/
      16 && m !== (m = He(
        /*cancelBtnStyle*/
        P[4]
      )) && p(g, "style", m), w & /*okText*/
      8 && W(
        S,
        /*okText*/
        P[3]
      ), w & /*okBtnStyle*/
      32 && _ !== (_ = He(
        /*okBtnStyle*/
        P[5]
      )) && p(v, "style", _);
    },
    i: D,
    o: D,
    d(P) {
      P && O(e), t[11](null), A = !1, be(z);
    }
  };
}
function Qi(t, e, n) {
  let { title: i = "" } = e, { content: r = "" } = e, { cancelText: o = "取消" } = e, { okText: l = "确定" } = e, { onCancel: u = () => {
  } } = e, { onOk: s = () => {
  } } = e, { cancelBtnStyle: a = "" } = e, { okBtnStyle: c = "" } = e;
  const f = Ie();
  let g;
  const d = () => {
    s(), f("onOk");
  }, m = () => {
    u(), f("onCancel");
  };
  function C(v) {
    Le[v ? "unshift" : "push"](() => {
      g = v, n(6, g);
    });
  }
  return t.$$set = (v) => {
    "title" in v && n(0, i = v.title), "content" in v && n(1, r = v.content), "cancelText" in v && n(2, o = v.cancelText), "okText" in v && n(3, l = v.okText), "onCancel" in v && n(9, u = v.onCancel), "onOk" in v && n(10, s = v.onOk), "cancelBtnStyle" in v && n(4, a = v.cancelBtnStyle), "okBtnStyle" in v && n(5, c = v.okBtnStyle);
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
    C
  ];
}
class Ji extends te {
  constructor(e) {
    super(), ee(this, e, Qi, Zi, K, {
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
const _l = (t) => {
  const e = window.document.createElement("div");
  document.body.appendChild(e);
  const n = new Ji({
    target: e,
    props: {
      ...t
    }
  });
  return n.$on("onOk", () => {
    n.$destroy();
  }), n.$on("onCancel", () => {
    n.$destroy();
  }), n;
}, ze = /^[a-z0-9]+(-[a-z0-9]+)*$/, tt = (t, e, n, i = "") => {
  const r = t.split(":");
  if (t.slice(0, 1) === "@") {
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
    return e && !Ue(a) ? null : a;
  }
  const o = r[0], l = o.split("-");
  if (l.length > 1) {
    const u = {
      provider: i,
      prefix: l.shift(),
      name: l.join("-")
    };
    return e && !Ue(u) ? null : u;
  }
  if (n && i === "") {
    const u = {
      provider: i,
      prefix: "",
      name: o
    };
    return e && !Ue(u, n) ? null : u;
  }
  return null;
}, Ue = (t, e) => t ? !!((t.provider === "" || t.provider.match(ze)) && (e && t.prefix === "" || t.prefix.match(ze)) && t.name.match(ze)) : !1, Wn = Object.freeze(
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
  ...Wn,
  ...Ke
}), mt = Object.freeze({
  ...nt,
  body: "",
  hidden: !1
});
function Xi(t, e) {
  const n = {};
  !t.hFlip != !e.hFlip && (n.hFlip = !0), !t.vFlip != !e.vFlip && (n.vFlip = !0);
  const i = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return i && (n.rotate = i), n;
}
function Ut(t, e) {
  const n = Xi(t, e);
  for (const i in mt)
    i in Ke ? i in t && !(i in n) && (n[i] = Ke[i]) : i in e ? n[i] = e[i] : i in t && (n[i] = t[i]);
  return n;
}
function Yi(t, e) {
  const n = t.icons, i = t.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
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
  return (e || Object.keys(n).concat(Object.keys(i))).forEach(o), r;
}
function Ki(t, e, n) {
  const i = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function l(u) {
    o = Ut(
      i[u] || r[u],
      o
    );
  }
  return l(e), n.forEach(l), Ut(t, o);
}
function Dn(t, e) {
  const n = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return n;
  t.not_found instanceof Array && t.not_found.forEach((r) => {
    e(r, null), n.push(r);
  });
  const i = Yi(t);
  for (const r in i) {
    const o = i[r];
    o && (e(r, Ki(t, r, o)), n.push(r));
  }
  return n;
}
const $i = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Wn
};
function st(t, e) {
  for (const n in e)
    if (n in t && typeof t[n] != typeof e[n])
      return !1;
  return !0;
}
function qn(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !st(t, $i))
    return null;
  const n = e.icons;
  for (const r in n) {
    const o = n[r];
    if (!r.match(ze) || typeof o.body != "string" || !st(
      o,
      mt
    ))
      return null;
  }
  const i = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const r in i) {
    const o = i[r], l = o.parent;
    if (!r.match(ze) || typeof l != "string" || !n[l] && !i[l] || !st(
      o,
      mt
    ))
      return null;
  }
  return e;
}
const Zt = /* @__PURE__ */ Object.create(null);
function er(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function ye(t, e) {
  const n = Zt[t] || (Zt[t] = /* @__PURE__ */ Object.create(null));
  return n[e] || (n[e] = er(t, e));
}
function Pt(t, e) {
  return qn(e) ? Dn(e, (n, i) => {
    i ? t.icons[n] = i : t.missing.add(n);
  }) : [];
}
function tr(t, e, n) {
  try {
    if (typeof n.body == "string")
      return t.icons[e] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Ne = !1;
function Un(t) {
  return typeof t == "boolean" && (Ne = t), Ne;
}
function nr(t) {
  const e = typeof t == "string" ? tt(t, !0, Ne) : t;
  if (e) {
    const n = ye(e.provider, e.prefix), i = e.name;
    return n.icons[i] || (n.missing.has(i) ? null : void 0);
  }
}
function ir(t, e) {
  const n = tt(t, !0, Ne);
  if (!n)
    return !1;
  const i = ye(n.provider, n.prefix);
  return tr(i, n.name, e);
}
function rr(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), Ne && !e && !t.prefix) {
    let r = !1;
    return qn(t) && (t.prefix = "", Dn(t, (o, l) => {
      l && ir(o, l) && (r = !0);
    })), r;
  }
  const n = t.prefix;
  if (!Ue({
    provider: e,
    prefix: n,
    name: "a"
  }))
    return !1;
  const i = ye(e, n);
  return !!Pt(i, t);
}
const Zn = Object.freeze({
  width: null,
  height: null
}), Qn = Object.freeze({
  // Dimensions
  ...Zn,
  // Transformations
  ...Ke
}), or = /(-?[0-9.]*[0-9]+[0-9.]*)/g, lr = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Qt(t, e, n) {
  if (e === 1)
    return t;
  if (n = n || 100, typeof t == "number")
    return Math.ceil(t * e * n) / n;
  if (typeof t != "string")
    return t;
  const i = t.split(or);
  if (i === null || !i.length)
    return t;
  const r = [];
  let o = i.shift(), l = lr.test(o);
  for (; ; ) {
    if (l) {
      const u = parseFloat(o);
      isNaN(u) ? r.push(o) : r.push(Math.ceil(u * e * n) / n);
    } else
      r.push(o);
    if (o = i.shift(), o === void 0)
      return r.join("");
    l = !l;
  }
}
const sr = (t) => t === "unset" || t === "undefined" || t === "none";
function ur(t, e) {
  const n = {
    ...nt,
    ...t
  }, i = {
    ...Qn,
    ...e
  }, r = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let o = n.body;
  [n, i].forEach((m) => {
    const C = [], v = m.hFlip, S = m.vFlip;
    let _ = m.rotate;
    v ? S ? _ += 2 : (C.push(
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
  const g = {}, d = (m, C) => {
    sr(C) || (g[m] = C.toString());
  };
  return d("width", c), d("height", f), g.viewBox = r.left.toString() + " " + r.top.toString() + " " + s.toString() + " " + a.toString(), {
    attributes: g,
    body: o
  };
}
const cr = /\sid="(\S+)"/g, ar = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let fr = 0;
function dr(t, e = ar) {
  const n = [];
  let i;
  for (; i = cr.exec(t); )
    n.push(i[1]);
  if (!n.length)
    return t;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((o) => {
    const l = typeof e == "function" ? e(o) : e + (fr++).toString(), u = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + u + ')([")]|\\.[a-z])', "g"),
      "$1" + l + r + "$3"
    );
  }), t = t.replace(new RegExp(r, "g"), ""), t;
}
const pt = /* @__PURE__ */ Object.create(null);
function gr(t, e) {
  pt[t] = e;
}
function bt(t) {
  return pt[t] || pt[""];
}
function zt(t) {
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
const Ot = /* @__PURE__ */ Object.create(null), je = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Ze = [];
for (; je.length > 0; )
  je.length === 1 || Math.random() > 0.5 ? Ze.push(je.shift()) : Ze.push(je.pop());
Ot[""] = zt({
  resources: ["https://api.iconify.design"].concat(Ze)
});
function hr(t, e) {
  const n = zt(e);
  return n === null ? !1 : (Ot[t] = n, !0);
}
function Lt(t) {
  return Ot[t];
}
const mr = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let Jt = mr();
function pr(t, e) {
  const n = Lt(t);
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
    const o = e + ".json?icons=";
    i = n.maxURL - r - n.path.length - o.length;
  }
  return i;
}
function br(t) {
  return t === 404;
}
const kr = (t, e, n) => {
  const i = [], r = pr(t, e), o = "icons";
  let l = {
    type: o,
    provider: t,
    prefix: e,
    icons: []
  }, u = 0;
  return n.forEach((s, a) => {
    u += s.length + 1, u >= r && a > 0 && (i.push(l), l = {
      type: o,
      provider: t,
      prefix: e,
      icons: []
    }, u = s.length), l.icons.push(s);
  }), i.push(l), i;
};
function vr(t) {
  if (typeof t == "string") {
    const e = Lt(t);
    if (e)
      return e.path;
  }
  return "/";
}
const yr = (t, e, n) => {
  if (!Jt) {
    n("abort", 424);
    return;
  }
  let i = vr(e.provider);
  switch (e.type) {
    case "icons": {
      const o = e.prefix, u = e.icons.join(","), s = new URLSearchParams({
        icons: u
      });
      i += o + ".json?" + s.toString();
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
  Jt(t + i).then((o) => {
    const l = o.status;
    if (l !== 200) {
      setTimeout(() => {
        n(br(l) ? "abort" : "next", l);
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
}, _r = {
  prepare: kr,
  send: yr
};
function wr(t) {
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
    const o = r.provider, l = r.prefix, u = r.name, s = n[o] || (n[o] = /* @__PURE__ */ Object.create(null)), a = s[l] || (s[l] = ye(o, l));
    let c;
    u in a.icons ? c = e.loaded : l === "" || a.missing.has(u) ? c = e.missing : c = e.pending;
    const f = {
      provider: o,
      prefix: l,
      name: u
    };
    c.push(f);
  }), e;
}
function Jn(t, e) {
  t.forEach((n) => {
    const i = n.loaderCallbacks;
    i && (n.loaderCallbacks = i.filter((r) => r.id !== e));
  });
}
function xr(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let n = !1;
    const i = t.provider, r = t.prefix;
    e.forEach((o) => {
      const l = o.icons, u = l.pending.length;
      l.pending = l.pending.filter((s) => {
        if (s.prefix !== r)
          return !0;
        const a = s.name;
        if (t.icons[a])
          l.loaded.push({
            provider: i,
            prefix: r,
            name: a
          });
        else if (t.missing.has(a))
          l.missing.push({
            provider: i,
            prefix: r,
            name: a
          });
        else
          return n = !0, !0;
        return !1;
      }), l.pending.length !== u && (n || Jn([t], o.id), o.callback(
        l.loaded.slice(0),
        l.missing.slice(0),
        l.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let Cr = 0;
function Sr(t, e, n) {
  const i = Cr++, r = Jn.bind(null, n, i);
  if (!e.pending.length)
    return r;
  const o = {
    id: i,
    icons: e,
    callback: t,
    abort: r
  };
  return n.forEach((l) => {
    (l.loaderCallbacks || (l.loaderCallbacks = [])).push(o);
  }), r;
}
function Ir(t, e = !0, n = !1) {
  const i = [];
  return t.forEach((r) => {
    const o = typeof r == "string" ? tt(r, e, n) : r;
    o && i.push(o);
  }), i;
}
var Mr = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function jr(t, e, n, i) {
  const r = t.resources.length, o = t.random ? Math.floor(Math.random() * r) : t.index;
  let l;
  if (t.random) {
    let w = t.resources.slice(0);
    for (l = []; w.length > 1; ) {
      const H = Math.floor(Math.random() * w.length);
      l.push(w[H]), w = w.slice(0, H).concat(w.slice(H + 1));
    }
    l = l.concat(w);
  } else
    l = t.resources.slice(o).concat(t.resources.slice(0, o));
  const u = Date.now();
  let s = "pending", a = 0, c, f = null, g = [], d = [];
  typeof i == "function" && d.push(i);
  function m() {
    f && (clearTimeout(f), f = null);
  }
  function C() {
    s === "pending" && (s = "aborted"), m(), g.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), g = [];
  }
  function v(w, H) {
    H && (d = []), typeof w == "function" && d.push(w);
  }
  function S() {
    return {
      startTime: u,
      payload: e,
      status: s,
      queriesSent: a,
      queriesPending: g.length,
      subscribe: v,
      abort: C
    };
  }
  function _() {
    s = "failed", d.forEach((w) => {
      w(void 0, c);
    });
  }
  function A() {
    g.forEach((w) => {
      w.status === "pending" && (w.status = "aborted");
    }), g = [];
  }
  function z(w, H, L) {
    const F = H !== "success";
    switch (g = g.filter((Z) => Z !== w), s) {
      case "pending":
        break;
      case "failed":
        if (F || !t.dataAfterTimeout)
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
      c = L, g.length || (l.length ? P() : _());
      return;
    }
    if (m(), A(), !t.random) {
      const Z = t.resources.indexOf(w.resource);
      Z !== -1 && Z !== t.index && (t.index = Z);
    }
    s = "completed", d.forEach((Z) => {
      Z(L);
    });
  }
  function P() {
    if (s !== "pending")
      return;
    m();
    const w = l.shift();
    if (w === void 0) {
      if (g.length) {
        f = setTimeout(() => {
          m(), s === "pending" && (A(), _());
        }, t.timeout);
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
    g.push(H), a++, f = setTimeout(P, t.rotate), n(w, e, H.callback);
  }
  return setTimeout(P), S;
}
function Xn(t) {
  const e = {
    ...Mr,
    ...t
  };
  let n = [];
  function i() {
    n = n.filter((u) => u().status === "pending");
  }
  function r(u, s, a) {
    const c = jr(
      e,
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
      e.index = u;
    },
    getIndex: () => e.index,
    cleanup: i
  };
}
function Xt() {
}
const ut = /* @__PURE__ */ Object.create(null);
function Ar(t) {
  if (!ut[t]) {
    const e = Lt(t);
    if (!e)
      return;
    const n = Xn(e), i = {
      config: e,
      redundancy: n
    };
    ut[t] = i;
  }
  return ut[t];
}
function Tr(t, e, n) {
  let i, r;
  if (typeof t == "string") {
    const o = bt(t);
    if (!o)
      return n(void 0, 424), Xt;
    r = o.send;
    const l = Ar(t);
    l && (i = l.redundancy);
  } else {
    const o = zt(t);
    if (o) {
      i = Xn(o);
      const l = t.resources ? t.resources[0] : "", u = bt(l);
      u && (r = u.send);
    }
  }
  return !i || !r ? (n(void 0, 424), Xt) : i.query(e, r, n)().abort;
}
const Yt = "iconify2", Be = "iconify", Yn = Be + "-count", Kt = Be + "-version", Kn = 36e5, Er = 168;
function kt(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function Nt(t, e, n) {
  try {
    return t.setItem(e, n), !0;
  } catch {
  }
}
function $t(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function vt(t, e) {
  return Nt(t, Yn, e.toString());
}
function yt(t) {
  return parseInt(kt(t, Yn)) || 0;
}
const it = {
  local: !0,
  session: !0
}, $n = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Bt = !1;
function Pr(t) {
  Bt = t;
}
let We = typeof window > "u" ? {} : window;
function ei(t) {
  const e = t + "Storage";
  try {
    if (We && We[e] && typeof We[e].length == "number")
      return We[e];
  } catch {
  }
  it[t] = !1;
}
function ti(t, e) {
  const n = ei(t);
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
  const r = Math.floor(Date.now() / Kn) - Er, o = (u) => {
    const s = Be + u.toString(), a = kt(n, s);
    if (typeof a == "string") {
      try {
        const c = JSON.parse(a);
        if (typeof c == "object" && typeof c.cached == "number" && c.cached > r && typeof c.provider == "string" && typeof c.data == "object" && typeof c.data.prefix == "string" && // Valid item: run callback
        e(c, u))
          return !0;
      } catch {
      }
      $t(n, s);
    }
  };
  let l = yt(n);
  for (let u = l - 1; u >= 0; u--)
    o(u) || (u === l - 1 ? (l--, vt(n, l)) : $n[t].add(u));
}
function ni() {
  if (!Bt) {
    Pr(!0);
    for (const t in it)
      ti(t, (e) => {
        const n = e.data, i = e.provider, r = n.prefix, o = ye(
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
function zr(t, e) {
  const n = t.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= e
  )
    return n === e;
  if (t.lastModifiedCached = e, n)
    for (const i in it)
      ti(i, (r) => {
        const o = r.data;
        return r.provider !== t.provider || o.prefix !== t.prefix || o.lastModified === e;
      });
  return !0;
}
function Or(t, e) {
  Bt || ni();
  function n(i) {
    let r;
    if (!it[i] || !(r = ei(i)))
      return;
    const o = $n[i];
    let l;
    if (o.size)
      o.delete(l = Array.from(o).shift());
    else if (l = yt(r), !vt(r, l + 1))
      return;
    const u = {
      cached: Math.floor(Date.now() / Kn),
      provider: t.provider,
      data: e
    };
    return Nt(
      r,
      Be + l.toString(),
      JSON.stringify(u)
    );
  }
  e.lastModified && !zr(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), n("local") || n("session"));
}
function en() {
}
function Lr(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, xr(t);
  }));
}
function Nr(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: n, prefix: i } = t, r = t.iconsToLoad;
    delete t.iconsToLoad;
    let o;
    if (!r || !(o = bt(n)))
      return;
    o.prepare(n, i, r).forEach((u) => {
      Tr(n, u, (s) => {
        if (typeof s != "object")
          u.icons.forEach((a) => {
            t.missing.add(a);
          });
        else
          try {
            const a = Pt(
              t,
              s
            );
            if (!a.length)
              return;
            const c = t.pendingIcons;
            c && a.forEach((f) => {
              c.delete(f);
            }), Or(t, s);
          } catch (a) {
            console.error(a);
          }
        Lr(t);
      });
    });
  }));
}
const Br = (t, e) => {
  const n = Ir(t, !0, Un()), i = wr(n);
  if (!i.pending.length) {
    let s = !0;
    return e && setTimeout(() => {
      s && e(
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
    r[a][c].length && Nr(s, r[a][c]);
  }), e ? Sr(e, i, o) : en;
};
function Gr(t, e) {
  const n = {
    ...t
  };
  for (const i in e) {
    const r = e[i], o = typeof r;
    i in Zn ? (r === null || r && (o === "string" || o === "number")) && (n[i] = r) : o === typeof n[i] && (n[i] = i === "rotate" ? r % 4 : r);
  }
  return n;
}
const Rr = /[\s,]+/;
function Fr(t, e) {
  e.split(Rr).forEach((n) => {
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
function Vr(t, e = 0) {
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
function Hr(t, e) {
  let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in e)
    n += " " + i + '="' + e[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>";
}
function Wr(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Dr(t) {
  return "data:image/svg+xml," + Wr(t);
}
function qr(t) {
  return 'url("' + Dr(t) + '")';
}
const tn = {
  ...Qn,
  inline: !1
}, Ur = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Zr = {
  display: "inline-block"
}, _t = {
  "background-color": "currentColor"
}, ii = {
  "background-color": "transparent"
}, nn = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, rn = {
  "-webkit-mask": _t,
  mask: _t,
  background: ii
};
for (const t in rn) {
  const e = rn[t];
  for (const n in nn)
    e[t + "-" + n] = nn[n];
}
function Qr(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function Jr(t, e) {
  const n = Gr(tn, e), i = e.mode || "svg", r = i === "svg" ? { ...Ur } : {};
  t.body.indexOf("xlink:") === -1 && delete r["xmlns:xlink"];
  let o = typeof e.style == "string" ? e.style : "";
  for (let S in e) {
    const _ = e[S];
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
          typeof _ == "string" && Fr(n, _);
          break;
        case "color":
          o = o + (o.length > 0 && o.trim().slice(-1) !== ";" ? ";" : "") + "color: " + _ + "; ";
          break;
        case "rotate":
          typeof _ == "string" ? n[S] = Vr(_) : typeof _ == "number" && (n[S] = _);
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
  const l = ur(t, n), u = l.attributes;
  if (n.inline && (o = "vertical-align: -0.125em; " + o), i === "svg") {
    Object.assign(r, u), o !== "" && (r.style = o);
    let S = 0, _ = e.id;
    return typeof _ == "string" && (_ = _.replace(/-/g, "_")), {
      svg: !0,
      attributes: r,
      body: dr(l.body, _ ? () => _ + "ID" + S++ : "iconifySvelte")
    };
  }
  const { body: s, width: a, height: c } = t, f = i === "mask" || (i === "bg" ? !1 : s.indexOf("currentColor") !== -1), g = Hr(s, {
    ...u,
    width: a + "",
    height: c + ""
  }), m = {
    "--svg": qr(g)
  }, C = (S) => {
    const _ = u[S];
    _ && (m[S] = Qr(_));
  };
  C("width"), C("height"), Object.assign(m, Zr, f ? _t : ii);
  let v = "";
  for (const S in m)
    v += S + ": " + m[S] + ";";
  return r.style = v + o, {
    svg: !1,
    attributes: r
  };
}
Un(!0);
gr("", _r);
if (typeof document < "u" && typeof window < "u") {
  ni();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((i) => {
      try {
        // Check if item is an object and not null/array
        (typeof i != "object" || i === null || i instanceof Array || // Check for 'icons' and 'prefix'
        typeof i.icons != "object" || typeof i.prefix != "string" || // Add icon set
        !rr(i)) && console.error(n);
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
          hr(n, r) || console.error(i);
        } catch {
          console.error(i);
        }
      }
  }
}
function Xr(t, e, n, i, r) {
  function o() {
    e.loading && (e.loading.abort(), e.loading = null);
  }
  if (typeof t == "object" && t !== null && typeof t.body == "string")
    return e.name = "", o(), { data: { ...nt, ...t } };
  let l;
  if (typeof t != "string" || (l = tt(t, !1, !0)) === null)
    return o(), null;
  const u = nr(l);
  if (!u)
    return n && (!e.loading || e.loading.name !== t) && (o(), e.name = "", e.loading = {
      name: t,
      abort: Br([l], i)
    }), null;
  o(), e.name !== t && (e.name = t, r && !e.destroyed && r(t));
  const s = ["iconify"];
  return l.prefix !== "" && s.push("iconify--" + l.prefix), l.provider !== "" && s.push("iconify--" + l.provider), { data: u, classes: s };
}
function Yr(t, e) {
  return t ? Jr({
    ...nt,
    ...t
  }, e) : null;
}
function on(t) {
  let e;
  function n(o, l) {
    return (
      /*data*/
      o[0].svg ? $r : Kr
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = de();
    },
    m(o, l) {
      r.m(o, l), N(o, e, l);
    },
    p(o, l) {
      i === (i = n(o)) && r ? r.p(o, l) : (r.d(1), r = i(o), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(o) {
      o && O(e), r.d(o);
    }
  };
}
function Kr(t) {
  let e, n = [
    /*data*/
    t[0].attributes
  ], i = {};
  for (let r = 0; r < n.length; r += 1)
    i = ue(i, n[r]);
  return {
    c() {
      e = y("span"), dt(e, i);
    },
    m(r, o) {
      N(r, e, o);
    },
    p(r, o) {
      dt(e, i = Fe(n, [o & /*data*/
      1 && /*data*/
      r[0].attributes]));
    },
    d(r) {
      r && O(e);
    }
  };
}
function $r(t) {
  let e, n = (
    /*data*/
    t[0].body + ""
  ), i = [
    /*data*/
    t[0].attributes
  ], r = {};
  for (let o = 0; o < i.length; o += 1)
    r = ue(r, i[o]);
  return {
    c() {
      e = wi("svg"), Ht(e, r);
    },
    m(o, l) {
      N(o, e, l), e.innerHTML = n;
    },
    p(o, l) {
      l & /*data*/
      1 && n !== (n = /*data*/
      o[0].body + "") && (e.innerHTML = n), Ht(e, r = Fe(i, [l & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && O(e);
    }
  };
}
function eo(t) {
  let e, n = (
    /*data*/
    t[0] && on(t)
  );
  return {
    c() {
      n && n.c(), e = de();
    },
    m(i, r) {
      n && n.m(i, r), N(i, e, r);
    },
    p(i, [r]) {
      /*data*/
      i[0] ? n ? n.p(i, r) : (n = on(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: D,
    o: D,
    d(i) {
      i && O(e), n && n.d(i);
    }
  };
}
function to(t, e, n) {
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
    typeof e.onLoad == "function" && e.onLoad(a), Ie()("load", { icon: a });
  };
  function s() {
    n(3, o++, o);
  }
  return Re(() => {
    n(2, r = !0);
  }), ji(() => {
    n(1, i.destroyed = !0, i), i.loading && (i.loading.abort(), n(1, i.loading = null, i));
  }), t.$$set = (a) => {
    n(6, e = ue(ue({}, e), Je(a)));
  }, t.$$.update = () => {
    {
      const a = Xr(e.icon, i, r, s, u);
      n(0, l = a ? Yr(a.data, e) : null), l && a.classes && n(
        0,
        l.attributes.class = (typeof e.class == "string" ? e.class + " " : "") + a.classes.join(" "),
        l
      );
    }
  }, e = Je(e), [l, i, r, o];
}
class Me extends te {
  constructor(e) {
    super(), ee(this, e, to, eo, K, {});
  }
}
function ri(t) {
  var e, n, i = "";
  if (typeof t == "string" || typeof t == "number")
    i += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = ri(t[e])) && (i && (i += " "), i += n);
    else
      for (e in t)
        t[e] && (i && (i += " "), i += e);
  return i;
}
function no() {
  for (var t, e, n = 0, i = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = ri(t)) && (i && (i += " "), i += e);
  return i;
}
function io() {
  for (var t = 0, e, n, i = ""; t < arguments.length; )
    (e = arguments[t++]) && (n = oi(e)) && (i && (i += " "), i += n);
  return i;
}
function oi(t) {
  if (typeof t == "string")
    return t;
  for (var e, n = "", i = 0; i < t.length; i++)
    t[i] && (e = oi(t[i])) && (n && (n += " "), n += e);
  return n;
}
var Gt = "-";
function ro(t) {
  var e = lo(t), n = t.conflictingClassGroups, i = t.conflictingClassGroupModifiers, r = i === void 0 ? {} : i;
  function o(u) {
    var s = u.split(Gt);
    return s[0] === "" && s.length !== 1 && s.shift(), li(s, e) || oo(u);
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
function li(t, e) {
  var l;
  if (t.length === 0)
    return e.classGroupId;
  var n = t[0], i = e.nextPart.get(n), r = i ? li(t.slice(1), i) : void 0;
  if (r)
    return r;
  if (e.validators.length !== 0) {
    var o = t.join(Gt);
    return (l = e.validators.find(function(u) {
      var s = u.validator;
      return s(o);
    })) == null ? void 0 : l.classGroupId;
  }
}
var ln = /^\[(.+)\]$/;
function oo(t) {
  if (ln.test(t)) {
    var e = ln.exec(t)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function lo(t) {
  var e = t.theme, n = t.prefix, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, r = uo(Object.entries(t.classGroups), n);
  return r.forEach(function(o) {
    var l = o[0], u = o[1];
    wt(u, i, l, e);
  }), i;
}
function wt(t, e, n, i) {
  t.forEach(function(r) {
    if (typeof r == "string") {
      var o = r === "" ? e : sn(e, r);
      o.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if (so(r)) {
        wt(r(i), e, n, i);
        return;
      }
      e.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(function(l) {
      var u = l[0], s = l[1];
      wt(s, sn(e, u), n, i);
    });
  });
}
function sn(t, e) {
  var n = t;
  return e.split(Gt).forEach(function(i) {
    n.nextPart.has(i) || n.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(i);
  }), n;
}
function so(t) {
  return t.isThemeGetter;
}
function uo(t, e) {
  return e ? t.map(function(n) {
    var i = n[0], r = n[1], o = r.map(function(l) {
      return typeof l == "string" ? e + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(u) {
        var s = u[0], a = u[1];
        return [e + s, a];
      })) : l;
    });
    return [i, o];
  }) : t;
}
function co(t) {
  if (t < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var e = 0, n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function r(o, l) {
    n.set(o, l), e++, e > t && (e = 0, i = n, n = /* @__PURE__ */ new Map());
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
var si = "!";
function ao(t) {
  var e = t.separator || ":", n = e.length === 1, i = e[0], r = e.length;
  return function(l) {
    for (var u = [], s = 0, a = 0, c, f = 0; f < l.length; f++) {
      var g = l[f];
      if (s === 0) {
        if (g === i && (n || l.slice(f, f + r) === e)) {
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
    var d = u.length === 0 ? l : l.substring(a), m = d.startsWith(si), C = m ? d.substring(1) : d, v = c && c > a ? c - a : void 0;
    return {
      modifiers: u,
      hasImportantModifier: m,
      baseClassName: C,
      maybePostfixModifierPosition: v
    };
  };
}
function fo(t) {
  if (t.length <= 1)
    return t;
  var e = [], n = [];
  return t.forEach(function(i) {
    var r = i[0] === "[";
    r ? (e.push.apply(e, n.sort().concat([i])), n = []) : n.push(i);
  }), e.push.apply(e, n.sort()), e;
}
function go(t) {
  return {
    cache: co(t.cacheSize),
    splitModifiers: ao(t),
    ...ro(t)
  };
}
var ho = /\s+/;
function mo(t, e) {
  var n = e.splitModifiers, i = e.getClassGroupId, r = e.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return t.trim().split(ho).map(function(l) {
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
    var m = fo(s).join(":"), C = a ? m + si : m;
    return {
      isTailwindClass: !0,
      modifierId: C,
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
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var i, r, o, l = u;
  function u(a) {
    var c = e[0], f = e.slice(1), g = f.reduce(function(d, m) {
      return m(d);
    }, c());
    return i = go(g), r = i.cache.get, o = i.cache.set, l = s, s(a);
  }
  function s(a) {
    var c = r(a);
    if (c)
      return c;
    var f = mo(a, i);
    return o(a, f), f;
  }
  return function() {
    return l(io.apply(null, arguments));
  };
}
function q(t) {
  var e = function(i) {
    return i[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var ui = /^\[(?:([a-z-]+):)?(.+)\]$/i, po = /^\d+\/\d+$/, bo = /* @__PURE__ */ new Set(["px", "full", "screen"]), ko = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, yo = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ce(t) {
  return ve(t) || bo.has(t) || po.test(t) || Ct(t);
}
function Ct(t) {
  return _e(t, "length", Io);
}
function _o(t) {
  return _e(t, "size", ci);
}
function wo(t) {
  return _e(t, "position", ci);
}
function xo(t) {
  return _e(t, "url", Mo);
}
function De(t) {
  return _e(t, "number", ve);
}
function ve(t) {
  return !Number.isNaN(Number(t));
}
function Co(t) {
  return t.endsWith("%") && ve(t.slice(0, -1));
}
function Ae(t) {
  return un(t) || _e(t, "number", un);
}
function R(t) {
  return ui.test(t);
}
function Te() {
  return !0;
}
function pe(t) {
  return ko.test(t);
}
function So(t) {
  return _e(t, "", jo);
}
function _e(t, e, n) {
  var i = ui.exec(t);
  return i ? i[1] ? i[1] === e : n(i[2]) : !1;
}
function Io(t) {
  return vo.test(t);
}
function ci() {
  return !1;
}
function Mo(t) {
  return t.startsWith("url(");
}
function un(t) {
  return Number.isInteger(Number(t));
}
function jo(t) {
  return yo.test(t);
}
function St() {
  var t = q("colors"), e = q("spacing"), n = q("blur"), i = q("brightness"), r = q("borderColor"), o = q("borderRadius"), l = q("borderSpacing"), u = q("borderWidth"), s = q("contrast"), a = q("grayscale"), c = q("hueRotate"), f = q("invert"), g = q("gap"), d = q("gradientColorStops"), m = q("gradientColorStopPositions"), C = q("inset"), v = q("margin"), S = q("opacity"), _ = q("padding"), A = q("saturate"), z = q("scale"), P = q("sepia"), w = q("skew"), H = q("space"), L = q("translate"), F = function() {
    return ["auto", "contain", "none"];
  }, Z = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, M = function() {
    return ["auto", R, e];
  }, x = function() {
    return [R, e];
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
  }, me = function() {
    return [ve, R];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Te],
      spacing: [ce],
      blur: ["none", "", pe, R],
      brightness: ne(),
      borderColor: [t],
      borderRadius: ["none", "", "full", pe, R],
      borderSpacing: x(),
      borderWidth: j(),
      contrast: ne(),
      grayscale: X(),
      hueRotate: me(),
      invert: X(),
      gap: x(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Co, Ct],
      inset: M(),
      margin: M(),
      opacity: ne(),
      padding: x(),
      saturate: ne(),
      scale: ne(),
      sepia: X(),
      skew: me(),
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
        columns: [pe]
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
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
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
        w: ["auto", "min", "max", "fit", R, e]
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
          screen: [pe]
        }, pe, R]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [R, e, "auto", "min", "max", "fit"]
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
        "max-h": [R, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", pe, Ct]
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
        placeholder: [t]
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
        text: [t]
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
        bg: [].concat(I(), [wo])
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
        bg: ["auto", "cover", "contain", _o]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, xo]
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
        outline: [t]
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
        ring: [t]
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
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", pe, So]
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
        "drop-shadow": ["", "none", pe, R]
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
        duration: me()
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
        delay: me()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", R]
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
        fill: [t, "none"]
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
function Ao(t, e) {
  for (var n in e)
    ai(t, n, e[n]);
  return t;
}
var To = Object.prototype.hasOwnProperty, Eo = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function ai(t, e, n) {
  if (!To.call(t, e) || Eo.has(typeof n) || n === null) {
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
    for (var i in n)
      ai(t[e], i, n[i]);
  }
}
function Po(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++)
    n[i - 1] = arguments[i];
  return typeof t == "function" ? xt.apply(void 0, [St, t].concat(n)) : xt.apply(void 0, [function() {
    return Ao(St(), t);
  }].concat(n));
}
var fi = /* @__PURE__ */ xt(St);
function re(...t) {
  return fi(no(t));
}
function zo(t, e) {
  const n = [];
  return e.builders.forEach((i) => {
    const r = i.action(t);
    r && n.push(r);
  }), {
    destroy: () => {
      n.forEach((i) => {
        i.destroy && i.destroy();
      });
    }
  };
}
function cn(t) {
  const e = {};
  return t.forEach((n) => {
    Object.keys(n).forEach((i) => {
      i !== "action" && (e[i] = n[i]);
    });
  }), e;
}
function Oo(t) {
  let e = (
    /*href*/
    t[0] ? "a" : "button"
  ), n, i, r = (
    /*href*/
    (t[0] ? "a" : "button") && ct(t)
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
      o[0], e ? K(
        e,
        /*href*/
        o[0] ? "a" : "button"
      ) ? (r.d(1), r = ct(o), e = /*href*/
      o[0] ? "a" : "button", r.c(), r.m(n.parentNode, n)) : r.p(o, l) : (r = ct(o), e = /*href*/
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
function Lo(t) {
  let e = (
    /*href*/
    t[0] ? "a" : "button"
  ), n, i, r = (
    /*href*/
    (t[0] ? "a" : "button") && at(t)
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
      o[0], e ? K(
        e,
        /*href*/
        o[0] ? "a" : "button"
      ) ? (r.d(1), r = at(o), e = /*href*/
      o[0] ? "a" : "button", r.c(), r.m(n.parentNode, n)) : r.p(o, l) : (r = at(o), e = /*href*/
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
function ct(t) {
  let e, n, i, r, o;
  const l = (
    /*#slots*/
    t[5].default
  ), u = Mt(
    l,
    t,
    /*$$scope*/
    t[4],
    null
  );
  let s = [
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
  ], a = {};
  for (let c = 0; c < s.length; c += 1)
    a = ue(a, s[c]);
  return {
    c() {
      e = y(
        /*href*/
        t[0] ? "a" : "button"
      ), u && u.c(), Ye(
        /*href*/
        t[0] ? "a" : "button"
      )(e, a);
    },
    m(c, f) {
      N(c, e, f), u && u.m(e, null), i = !0, r || (o = [
        Q(
          e,
          "click",
          /*click_handler_1*/
          t[12]
        ),
        Q(
          e,
          "change",
          /*change_handler_1*/
          t[13]
        ),
        Q(
          e,
          "keydown",
          /*keydown_handler_1*/
          t[14]
        ),
        Q(
          e,
          "keyup",
          /*keyup_handler_1*/
          t[15]
        ),
        Q(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[16]
        ),
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[17]
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
      )(e, a = Fe(s, [
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
      c && O(e), u && u.d(c), r = !1, be(o);
    }
  };
}
function at(t) {
  let e, n, i, r, o, l;
  const u = (
    /*#slots*/
    t[5].default
  ), s = Mt(
    u,
    t,
    /*$$scope*/
    t[4],
    null
  );
  let a = [
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
    cn(
      /*builders*/
      t[2]
    ),
    /*$$restProps*/
    t[3]
  ], c = {};
  for (let f = 0; f < a.length; f += 1)
    c = ue(c, a[f]);
  return {
    c() {
      e = y(
        /*href*/
        t[0] ? "a" : "button"
      ), s && s.c(), Ye(
        /*href*/
        t[0] ? "a" : "button"
      )(e, c);
    },
    m(f, g) {
      N(f, e, g), s && s.m(e, null), r = !0, o || (l = [
        Q(
          e,
          "click",
          /*click_handler*/
          t[6]
        ),
        Q(
          e,
          "change",
          /*change_handler*/
          t[7]
        ),
        Q(
          e,
          "keydown",
          /*keydown_handler*/
          t[8]
        ),
        Q(
          e,
          "keyup",
          /*keyup_handler*/
          t[9]
        ),
        Q(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[10]
        ),
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[11]
        ),
        _i(i = zo.call(null, e, { builders: (
          /*builders*/
          t[2]
        ) }))
      ], o = !0);
    },
    p(f, g) {
      s && s.p && (!r || g & /*$$scope*/
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
      )(e, c = Fe(a, [
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
      r || (T(s, f), r = !0);
    },
    o(f) {
      G(s, f), r = !1;
    },
    d(f) {
      f && O(e), s && s.d(f), o = !1, be(l);
    }
  };
}
function No(t) {
  let e, n, i, r;
  const o = [Lo, Oo], l = [];
  function u(s, a) {
    return (
      /*builders*/
      s[2] && /*builders*/
      s[2].length ? 0 : 1
    );
  }
  return e = u(t), n = l[e] = o[e](t), {
    c() {
      n.c(), i = de();
    },
    m(s, a) {
      l[e].m(s, a), N(s, i, a), r = !0;
    },
    p(s, [a]) {
      let c = e;
      e = u(s), e === c ? l[e].p(s, a) : (oe(), G(l[c], 1, 1, () => {
        l[c] = null;
      }), le(), n = l[e], n ? n.p(s, a) : (n = l[e] = o[e](s), n.c()), T(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (T(n), r = !0);
    },
    o(s) {
      G(n), r = !1;
    },
    d(s) {
      s && O(i), l[e].d(s);
    }
  };
}
function Bo(t, e, n) {
  const i = ["href", "type", "builders"];
  let r = Xe(e, i), { $$slots: o = {}, $$scope: l } = e, { href: u = void 0 } = e, { type: s = void 0 } = e, { builders: a = [] } = e;
  function c(w) {
    ie.call(this, t, w);
  }
  function f(w) {
    ie.call(this, t, w);
  }
  function g(w) {
    ie.call(this, t, w);
  }
  function d(w) {
    ie.call(this, t, w);
  }
  function m(w) {
    ie.call(this, t, w);
  }
  function C(w) {
    ie.call(this, t, w);
  }
  function v(w) {
    ie.call(this, t, w);
  }
  function S(w) {
    ie.call(this, t, w);
  }
  function _(w) {
    ie.call(this, t, w);
  }
  function A(w) {
    ie.call(this, t, w);
  }
  function z(w) {
    ie.call(this, t, w);
  }
  function P(w) {
    ie.call(this, t, w);
  }
  return t.$$set = (w) => {
    e = ue(ue({}, e), Je(w)), n(3, r = Xe(e, i)), "href" in w && n(0, u = w.href), "type" in w && n(1, s = w.type), "builders" in w && n(2, a = w.builders), "$$scope" in w && n(4, l = w.$$scope);
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
    C,
    v,
    S,
    _,
    A,
    z,
    P
  ];
}
let Go = class extends te {
  constructor(e) {
    super(), ee(this, e, Bo, No, K, { href: 0, type: 1, builders: 2 });
  }
};
function Ro(t) {
  let e;
  const n = (
    /*#slots*/
    t[5].default
  ), i = Mt(
    n,
    t,
    /*$$scope*/
    t[8],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(r, o) {
      i && i.m(r, o), e = !0;
    },
    p(r, o) {
      i && i.p && (!e || o & /*$$scope*/
      256) && At(
        i,
        n,
        r,
        /*$$scope*/
        r[8],
        e ? jt(
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
      e || (T(i, r), e = !0);
    },
    o(r) {
      G(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Fo(t) {
  let e, n;
  const i = [
    { builders: (
      /*builders*/
      t[3]
    ) },
    {
      class: re(gn({
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
  let r = {
    $$slots: { default: [Ro] },
    $$scope: { ctx: t }
  };
  for (let o = 0; o < i.length; o += 1)
    r = ue(r, i[o]);
  return e = new Go({ props: r }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), e.$on(
    "keydown",
    /*keydown_handler*/
    t[7]
  ), {
    c() {
      ge(e.$$.fragment);
    },
    m(o, l) {
      ae(e, o, l), n = !0;
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
        16 && zi(
          /*$$restProps*/
          o[4]
        )
      ]) : {};
      l & /*$$scope*/
      256 && (u.$$scope = { dirty: l, ctx: o }), e.$set(u);
    },
    i(o) {
      n || (T(e.$$.fragment, o), n = !0);
    },
    o(o) {
      G(e.$$.fragment, o), n = !1;
    },
    d(o) {
      fe(e, o);
    }
  };
}
function Vo(t, e, n) {
  const i = ["class", "variant", "size", "builders"];
  let r = Xe(e, i), { $$slots: o = {}, $$scope: l } = e, { class: u = void 0 } = e, { variant: s = "default" } = e, { size: a = "default" } = e, { builders: c = [] } = e;
  function f(d) {
    ie.call(this, t, d);
  }
  function g(d) {
    ie.call(this, t, d);
  }
  return t.$$set = (d) => {
    e = ue(ue({}, e), Je(d)), n(4, r = Xe(e, i)), "class" in d && n(0, u = d.class), "variant" in d && n(1, s = d.variant), "size" in d && n(2, a = d.size), "builders" in d && n(3, c = d.builders), "$$scope" in d && n(8, l = d.$$scope);
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
class Ho extends te {
  constructor(e) {
    super(), ee(this, e, Vo, Fo, K, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
}
var an = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, $ = (t) => !t || typeof t != "object" || Object.keys(t).length === 0, Wo = (t, e) => JSON.stringify(t) === JSON.stringify(e);
function di(t, e) {
  t.forEach(function(n) {
    Array.isArray(n) ? di(n, e) : e.push(n);
  });
}
function gi(t) {
  let e = [];
  return di(t, e), e;
}
var Do = (...t) => gi(t).filter(Boolean), hi = (t, e) => {
  let n = {}, i = Object.keys(t), r = Object.keys(e);
  for (let o of i)
    if (r.includes(o)) {
      let l = t[o], u = e[o];
      typeof l == "object" && typeof u == "object" ? n[o] = hi(l, u) : n[o] = u + " " + l;
    } else
      n[o] = t[o];
  for (let o of r)
    i.includes(o) || (n[o] = e[o]);
  return n;
}, fn = (t) => !t || typeof t != "string" ? t : t.replace(/\s+/g, " ").trim(), qo = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, mi = (t) => t || void 0, $e = (...t) => mi(gi(t).filter(Boolean).join(" ")), ft = null, et = {}, It = !1, Ee = (...t) => (e) => e.twMerge ? ((!ft || It) && (It = !1, ft = $(et) ? fi : Po(et)), mi(ft($e(t)))) : $e(t), dn = (t, e) => {
  for (let n in e)
    t.hasOwnProperty(n) ? t[n] = $e(t[n], e[n]) : t[n] = e[n];
  return t;
}, Uo = (t, e) => {
  let { extend: n = null, slots: i = {}, variants: r = {}, compoundVariants: o = [], compoundSlots: l = [], defaultVariants: u = {} } = t, s = { ...qo, ...e }, a = n != null && n.base ? $e(n.base, t == null ? void 0 : t.base) : t == null ? void 0 : t.base, c = n != null && n.variants && !$(n.variants) ? hi(r, n.variants) : r, f = n != null && n.defaultVariants && !$(n.defaultVariants) ? { ...n.defaultVariants, ...u } : u;
  !$(s.twMergeConfig) && !Wo(s.twMergeConfig, et) && (It = !0, et = s.twMergeConfig);
  let g = $(i) ? {} : { base: t == null ? void 0 : t.base, ...i }, d = $(n == null ? void 0 : n.slots) ? g : dn(n == null ? void 0 : n.slots, $(g) ? { base: t == null ? void 0 : t.base } : g), m = (v) => {
    if ($(c) && $(i) && $(n == null ? void 0 : n.slots))
      return Ee(a, v == null ? void 0 : v.class, v == null ? void 0 : v.className)(s);
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
      let B = (I = k == null ? void 0 : k[M]) != null ? I : v == null ? void 0 : v[M];
      if (B === null)
        return null;
      let J = an(B), X = Array.isArray(s.responsiveVariants) && s.responsiveVariants.length > 0 || s.responsiveVariants === !0, he = f == null ? void 0 : f[M], ne = [];
      if (typeof J == "object" && X)
        for (let [Y, Rt] of Object.entries(J)) {
          let bi = b[Rt];
          if (Y === "initial") {
            he = Rt;
            continue;
          }
          Array.isArray(s.responsiveVariants) && !s.responsiveVariants.includes(Y) || (ne = S(Y, bi, ne, j));
        }
      let me = b[J] || b[an(he)];
      return typeof ne == "object" && typeof j == "string" && ne[j] ? dn(ne, me) : ne.length > 0 ? (ne.push(me), ne) : me;
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
    for (let M in v)
      v[M] !== void 0 && (P[M] = v[M]);
    let w = (M, x) => {
      var j;
      let k = typeof (v == null ? void 0 : v[M]) == "object" ? { [M]: (j = v[M]) == null ? void 0 : j.initial } : {};
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
      return Do(j, x);
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
      if (typeof d == "object" && !$(d))
        for (let x of Object.keys(d))
          M[x] = (j) => {
            var k, I;
            return Ee(d[x], z(x, j), ((k = F(j)) != null ? k : [])[x], ((I = Z(j)) != null ? I : [])[x], j == null ? void 0 : j.class, j == null ? void 0 : j.className)(s);
          };
      return M;
    }
    return Ee(a, A(), L(), v == null ? void 0 : v.class, v == null ? void 0 : v.className)(s);
  }, C = () => {
    if (!(!c || typeof c != "object"))
      return Object.keys(c);
  };
  return m.variantKeys = C(), m.extend = n, m.base = a, m.slots = d, m.variants = c, m.defaultVariants = f, m.compoundSlots = l, m.compoundVariants = o, m;
};
const gn = Uo({
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
function hn(t, e, n) {
  const i = t.slice();
  return i[3] = e[n].title, i[4] = e[n].items, i[6] = n, i;
}
function mn(t, e, n) {
  const i = t.slice();
  return i[3] = e[n].title, i[7] = e[n].icon, i[8] = e[n].url, i[10] = n, i;
}
function Zo(t) {
  let e, n, i = (
    /*title*/
    t[3] + ""
  ), r, o, l;
  return e = new Me({
    props: {
      class: "uikit-mr-2 uikit-h-4 uikit-w-4",
      icon: (
        /*icon*/
        t[7]
      )
    }
  }), {
    c() {
      ge(e.$$.fragment), n = E(), r = V(i), o = E();
    },
    m(u, s) {
      ae(e, u, s), N(u, n, s), N(u, r, s), N(u, o, s), l = !0;
    },
    p(u, s) {
      const a = {};
      s & /*menus*/
      2 && (a.icon = /*icon*/
      u[7]), e.$set(a), (!l || s & /*menus*/
      2) && i !== (i = /*title*/
      u[3] + "") && W(r, i);
    },
    i(u) {
      l || (T(e.$$.fragment, u), l = !0);
    },
    o(u) {
      G(e.$$.fragment, u), l = !1;
    },
    d(u) {
      u && (O(n), O(r), O(o)), fe(e, u);
    }
  };
}
function pn(t) {
  let e, n;
  return e = new Ho({
    props: {
      variant: "uikit-secondary",
      class: "uikit-w-full uikit-justify-start",
      $$slots: { default: [Zo] },
      $$scope: { ctx: t }
    }
  }), e.$on("click", function() {
    Ge(
      /*onClick*/
      t[2](
        /*url*/
        t[8]
      )
    ) && t[2](
      /*url*/
      t[8]
    ).apply(this, arguments);
  }), {
    c() {
      ge(e.$$.fragment);
    },
    m(i, r) {
      ae(e, i, r), n = !0;
    },
    p(i, r) {
      t = i;
      const o = {};
      r & /*$$scope, menus*/
      2050 && (o.$$scope = { dirty: r, ctx: t }), e.$set(o);
    },
    i(i) {
      n || (T(e.$$.fragment, i), n = !0);
    },
    o(i) {
      G(e.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(e, i);
    }
  };
}
function bn(t) {
  let e, n, i = (
    /*title*/
    t[3] + ""
  ), r, o, l, u, s, a = U(
    /*items*/
    t[4]
  ), c = [];
  for (let g = 0; g < a.length; g += 1)
    c[g] = pn(mn(t, a, g));
  const f = (g) => G(c[g], 1, 1, () => {
    c[g] = null;
  });
  return {
    c() {
      e = y("div"), n = y("h2"), r = V(i), o = E(), l = y("div");
      for (let g = 0; g < c.length; g += 1)
        c[g].c();
      u = E(), p(n, "class", "uikit-mb-2 uikit-px-4 uikit-text-lg uikit-font-semibold uikit-tracking-tight"), p(l, "class", "uikit-space-y-1"), p(e, "class", "uikit-px-3 uikit-py-2 uikit-w-full");
    },
    m(g, d) {
      N(g, e, d), h(e, n), h(n, r), h(e, o), h(e, l);
      for (let m = 0; m < c.length; m += 1)
        c[m] && c[m].m(l, null);
      h(e, u), s = !0;
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
          const C = mn(g, a, m);
          c[m] ? (c[m].p(C, d), T(c[m], 1)) : (c[m] = pn(C), c[m].c(), T(c[m], 1), c[m].m(l, null));
        }
        for (oe(), m = a.length; m < c.length; m += 1)
          f(m);
        le();
      }
    },
    i(g) {
      if (!s) {
        for (let d = 0; d < a.length; d += 1)
          T(c[d]);
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
      g && O(e), se(c, g);
    }
  };
}
function Qo(t) {
  let e, n, i, r, o = U(
    /*menus*/
    t[1]
  ), l = [];
  for (let s = 0; s < o.length; s += 1)
    l[s] = bn(hn(t, o, s));
  const u = (s) => G(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      e = y("div"), n = y("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      p(n, "class", "uikit-space-y-4 uikit-py-4"), p(e, "class", i = re(
        "uikit-pb-12",
        /*className*/
        t[0]
      ));
    },
    m(s, a) {
      N(s, e, a), h(e, n);
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
        for (oe(), c = o.length; c < l.length; c += 1)
          u(c);
        le();
      }
      (!r || a & /*className*/
      1 && i !== (i = re(
        "uikit-pb-12",
        /*className*/
        s[0]
      ))) && p(e, "class", i);
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
      s && O(e), se(l, s);
    }
  };
}
function Jo(t, e, n) {
  let { class: i = void 0 } = e, { menus: r = [] } = e, { onClick: o = (l) => {
    console.log(l);
  } } = e;
  return t.$$set = (l) => {
    "class" in l && n(0, i = l.class), "menus" in l && n(1, r = l.menus), "onClick" in l && n(2, o = l.onClick);
  }, [i, r, o];
}
class xl extends te {
  constructor(e) {
    super(), ee(this, e, Jo, Qo, K, { class: 0, menus: 1, onClick: 2 });
  }
}
function kn(t, e, n) {
  const i = t.slice();
  return i[2] = e[n].type, i[3] = e[n].height, i[4] = e[n].width, i[5] = e[n].items, i[6] = e[n].id, i[8] = n, i;
}
function Xo(t) {
  let e, n, i, r;
  return {
    c() {
      e = y("div"), n = V("content"), p(e, "id", i = `${/*depth*/
      t[1]}${/*i*/
      t[8]}-`), p(e, "class", r = Vt(
        /*width*/
        t[4]
      ) + " svelte-1jbas83");
    },
    m(o, l) {
      N(o, e, l), h(e, n);
    },
    p(o, l) {
      l & /*depth*/
      2 && i !== (i = `${/*depth*/
      o[1]}${/*i*/
      o[8]}-`) && p(e, "id", i), l & /*grids*/
      1 && r !== (r = Vt(
        /*width*/
        o[4]
      ) + " svelte-1jbas83") && p(e, "class", r);
    },
    i: D,
    o: D,
    d(o) {
      o && O(e);
    }
  };
}
function Yo(t) {
  let e, n, i, r;
  return n = new pi({
    props: {
      grids: (
        /*items*/
        t[5]
      ),
      depth: `${/*depth*/
      t[1]}${/*i*/
      t[8]}-`
    }
  }), {
    c() {
      e = y("div"), ge(n.$$.fragment), i = E(), p(e, "class", "uikit-flex uikit-w-full"), Se(
        e,
        "height",
        /*height*/
        t[3] || "200px"
      );
    },
    m(o, l) {
      N(o, e, l), ae(n, e, null), h(e, i), r = !0;
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
        e,
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
      o && O(e), fe(n);
    }
  };
}
function vn(t) {
  let e, n, i, r;
  const o = [Yo, Xo], l = [];
  function u(s, a) {
    return (
      /*type*/
      s[2] === "row" ? 0 : 1
    );
  }
  return e = u(t), n = l[e] = o[e](t), {
    c() {
      n.c(), i = de();
    },
    m(s, a) {
      l[e].m(s, a), N(s, i, a), r = !0;
    },
    p(s, a) {
      let c = e;
      e = u(s), e === c ? l[e].p(s, a) : (oe(), G(l[c], 1, 1, () => {
        l[c] = null;
      }), le(), n = l[e], n ? n.p(s, a) : (n = l[e] = o[e](s), n.c()), T(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (T(n), r = !0);
    },
    o(s) {
      G(n), r = !1;
    },
    d(s) {
      s && O(i), l[e].d(s);
    }
  };
}
function Ko(t) {
  let e, n, i = U(
    /*grids*/
    t[0]
  ), r = [];
  for (let l = 0; l < i.length; l += 1)
    r[l] = vn(kn(t, i, l));
  const o = (l) => G(r[l], 1, 1, () => {
    r[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      e = de();
    },
    m(l, u) {
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(l, u);
      N(l, e, u), n = !0;
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
          r[s] ? (r[s].p(a, u), T(r[s], 1)) : (r[s] = vn(a), r[s].c(), T(r[s], 1), r[s].m(e.parentNode, e));
        }
        for (oe(), s = i.length; s < r.length; s += 1)
          o(s);
        le();
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
      l && O(e), se(r, l);
    }
  };
}
function $o(t, e, n) {
  let { grids: i = [] } = e, { depth: r = "" } = e;
  return t.$$set = (o) => {
    "grids" in o && n(0, i = o.grids), "depth" in o && n(1, r = o.depth);
  }, [i, r];
}
class pi extends te {
  constructor(e) {
    super(), ee(this, e, $o, Ko, K, { grids: 0, depth: 1 });
  }
}
function yn(t, e, n) {
  const i = t.slice();
  return i[10] = e[n].type, i[11] = e[n].title, i[12] = e[n].url, i[13] = e[n].icon, i[14] = e[n].items, i;
}
function _n(t, e, n) {
  const i = t.slice();
  return i[11] = e[n].title, i[12] = e[n].url, i;
}
function wn(t, e, n) {
  const i = t.slice();
  return i[10] = e[n].type, i[11] = e[n].title, i[12] = e[n].url, i[13] = e[n].icon, i[14] = e[n].items, i;
}
function xn(t, e, n) {
  const i = t.slice();
  return i[11] = e[n].title, i[12] = e[n].url, i;
}
function el(t) {
  let e, n, i, r, o = (
    /*title*/
    t[11] + ""
  ), l, u, s, a, c;
  i = new Me({ props: { icon: (
    /*icon*/
    t[13]
  ) } });
  function f() {
    return (
      /*click_handler_2*/
      t[7](
        /*url*/
        t[12]
      )
    );
  }
  return {
    c() {
      e = y("li"), n = y("button"), ge(i.$$.fragment), r = y("span"), l = V(o), u = E(), p(r, "class", "uikit-ml-2"), p(n, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case"), p(e, "class", "nav-item");
    },
    m(g, d) {
      N(g, e, d), h(e, n), ae(i, n, null), h(n, r), h(r, l), h(e, u), s = !0, a || (c = Q(n, "click", f), a = !0);
    },
    p(g, d) {
      t = g;
      const m = {};
      d & /*links*/
      8 && (m.icon = /*icon*/
      t[13]), i.$set(m), (!s || d & /*links*/
      8) && o !== (o = /*title*/
      t[11] + "") && W(l, o);
    },
    i(g) {
      s || (T(i.$$.fragment, g), s = !0);
    },
    o(g) {
      G(i.$$.fragment, g), s = !1;
    },
    d(g) {
      g && O(e), fe(i), a = !1, c();
    }
  };
}
function tl(t) {
  let e, n, i, r = (
    /*title*/
    t[11] + ""
  ), o, l, u, s, a = U(
    /*items*/
    t[14]
  ), c = [];
  for (let f = 0; f < a.length; f += 1)
    c[f] = Cn(xn(t, a, f));
  return {
    c() {
      e = y("li"), n = y("div"), i = y("label"), o = V(r), l = E(), u = y("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      s = E(), p(i, "tabindex", "1"), p(i, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), p(u, "tabindex", "1"), p(u, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), p(n, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), p(e, "class", "nav-item");
    },
    m(f, g) {
      N(f, e, g), h(e, n), h(n, i), h(i, o), h(n, l), h(n, u);
      for (let d = 0; d < c.length; d += 1)
        c[d] && c[d].m(u, null);
      h(e, s);
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
      f && O(e), se(c, f);
    }
  };
}
function Cn(t) {
  let e, n, i = (
    /*title*/
    t[11] + ""
  ), r, o, l, u;
  function s() {
    return (
      /*click_handler_1*/
      t[6](
        /*url*/
        t[12]
      )
    );
  }
  return {
    c() {
      e = y("li"), n = y("button"), r = V(i), o = E();
    },
    m(a, c) {
      N(a, e, c), h(e, n), h(n, r), h(e, o), l || (u = Q(n, "click", s), l = !0);
    },
    p(a, c) {
      t = a, c & /*links*/
      8 && i !== (i = /*title*/
      t[11] + "") && W(r, i);
    },
    d(a) {
      a && O(e), l = !1, u();
    }
  };
}
function Sn(t) {
  let e, n, i, r;
  const o = [tl, el], l = [];
  function u(s, a) {
    return (
      /*type*/
      s[10] === "menu" ? 0 : 1
    );
  }
  return e = u(t), n = l[e] = o[e](t), {
    c() {
      n.c(), i = de();
    },
    m(s, a) {
      l[e].m(s, a), N(s, i, a), r = !0;
    },
    p(s, a) {
      let c = e;
      e = u(s), e === c ? l[e].p(s, a) : (oe(), G(l[c], 1, 1, () => {
        l[c] = null;
      }), le(), n = l[e], n ? n.p(s, a) : (n = l[e] = o[e](s), n.c()), T(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (T(n), r = !0);
    },
    o(s) {
      G(n), r = !1;
    },
    d(s) {
      s && O(i), l[e].d(s);
    }
  };
}
function nl(t) {
  let e, n, i, r, o = (
    /*title*/
    t[11] + ""
  ), l, u, s, a, c;
  i = new Me({ props: { icon: (
    /*icon*/
    t[13]
  ) } });
  function f() {
    return (
      /*click_handler_4*/
      t[9](
        /*url*/
        t[12]
      )
    );
  }
  return {
    c() {
      e = y("li"), n = y("button"), ge(i.$$.fragment), r = y("span"), l = V(o), u = E(), p(r, "class", "uikit-ml-2"), p(n, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case uikit-items-start"), p(e, "class", "uikit-nav-item");
    },
    m(g, d) {
      N(g, e, d), h(e, n), ae(i, n, null), h(n, r), h(r, l), h(e, u), s = !0, a || (c = Q(n, "click", f), a = !0);
    },
    p(g, d) {
      t = g;
      const m = {};
      d & /*links*/
      8 && (m.icon = /*icon*/
      t[13]), i.$set(m), (!s || d & /*links*/
      8) && o !== (o = /*title*/
      t[11] + "") && W(l, o);
    },
    i(g) {
      s || (T(i.$$.fragment, g), s = !0);
    },
    o(g) {
      G(i.$$.fragment, g), s = !1;
    },
    d(g) {
      g && O(e), fe(i), a = !1, c();
    }
  };
}
function il(t) {
  let e, n, i, r = (
    /*title*/
    t[11] + ""
  ), o, l, u, s, a = U(
    /*items*/
    t[14]
  ), c = [];
  for (let f = 0; f < a.length; f += 1)
    c[f] = In(_n(t, a, f));
  return {
    c() {
      e = y("li"), n = y("div"), i = y("label"), o = V(r), l = E(), u = y("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      s = E(), p(i, "tabindex", "1"), p(i, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), p(u, "tabindex", "1"), p(u, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), p(n, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), p(e, "class", "uikit-nav-item uikit-w-full");
    },
    m(f, g) {
      N(f, e, g), h(e, n), h(n, i), h(i, o), h(n, l), h(n, u);
      for (let d = 0; d < c.length; d += 1)
        c[d] && c[d].m(u, null);
      h(e, s);
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
      f && O(e), se(c, f);
    }
  };
}
function In(t) {
  let e, n, i = (
    /*title*/
    t[11] + ""
  ), r, o, l, u;
  function s() {
    return (
      /*click_handler_3*/
      t[8](
        /*url*/
        t[12]
      )
    );
  }
  return {
    c() {
      e = y("li"), n = y("button"), r = V(i), o = E();
    },
    m(a, c) {
      N(a, e, c), h(e, n), h(n, r), h(e, o), l || (u = Q(n, "click", s), l = !0);
    },
    p(a, c) {
      t = a, c & /*links*/
      8 && i !== (i = /*title*/
      t[11] + "") && W(r, i);
    },
    d(a) {
      a && O(e), l = !1, u();
    }
  };
}
function Mn(t) {
  let e, n, i, r;
  const o = [il, nl], l = [];
  function u(s, a) {
    return (
      /*type*/
      s[10] === "menu" ? 0 : 1
    );
  }
  return e = u(t), n = l[e] = o[e](t), {
    c() {
      n.c(), i = de();
    },
    m(s, a) {
      l[e].m(s, a), N(s, i, a), r = !0;
    },
    p(s, a) {
      let c = e;
      e = u(s), e === c ? l[e].p(s, a) : (oe(), G(l[c], 1, 1, () => {
        l[c] = null;
      }), le(), n = l[e], n ? n.p(s, a) : (n = l[e] = o[e](s), n.c()), T(n, 1), n.m(i.parentNode, i));
    },
    i(s) {
      r || (T(n), r = !0);
    },
    o(s) {
      G(n), r = !1;
    },
    d(s) {
      s && O(i), l[e].d(s);
    }
  };
}
function rl(t) {
  let e, n, i, r, o, l, u, s, a, c, f, g, d, m, C, v, S, _, A, z, P, w, H, L = U(
    /*links*/
    t[3]
  ), F = [];
  for (let k = 0; k < L.length; k += 1)
    F[k] = Sn(wn(t, L, k));
  const Z = (k) => G(F[k], 1, 1, () => {
    F[k] = null;
  });
  let M = U(
    /*links*/
    t[3]
  ), x = [];
  for (let k = 0; k < M.length; k += 1)
    x[k] = Mn(yn(t, M, k));
  const j = (k) => G(x[k], 1, 1, () => {
    x[k] = null;
  });
  return {
    c() {
      e = y("nav"), n = y("div"), i = y("div"), r = y("button"), o = V(
        /*logotxt*/
        t[1]
      ), l = E(), u = y("div"), s = y("ul");
      for (let k = 0; k < F.length; k += 1)
        F[k].c();
      a = E(), c = y("div"), f = y("div"), g = y("input"), d = E(), m = y("div"), m.innerHTML = '<label for="my-drawer" class="uikit-btn uikit-btn-ghost uikit-drawer-button"><div class="uikit-ml-1 uikit-mr-1 uikit-h-8 uikit-w-8 uikit-rounded uikit-py-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="uikit-text-gray-900 dark:uikit-text-gray-100"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></div></label>', C = E(), v = y("div"), S = y("label"), _ = E(), A = y("ul");
      for (let k = 0; k < x.length; k += 1)
        x[k].c();
      p(r, "class", "uikit-text-sm uikit-font-bold uikit-leading-relaxed uikit-inline-block uikit-mr-4 uikit-py-2 uikit-whitespace-nowrap uikit-text-slate-700"), p(i, "class", "uikit-relative uikit-flex uikit-justify-between lg:uikit-w-auto lg:uikit-static lg:uikit-block lg:uikit-justify-start"), p(s, "class", "uikit-flex uikit-flex-col lg:uikit-flex-row uikit-list-none lg:uikit-ml-auto"), p(u, "class", "lg:uikit-flex uikit-flex-grow uikit-items-center uikit-hidden"), p(g, "id", "my-drawer"), p(g, "type", "checkbox"), p(g, "class", "uikit-drawer-toggle"), p(m, "class", "uikit-drawer-content"), p(S, "for", "my-drawer"), p(S, "class", "uikit-drawer-overlay"), p(A, "class", "uikit-menu uikit-p-4 uikit-w-80 uikit-min-h-full uikit-bg-base-200 uikit-text-base-content"), p(v, "class", "uikit-drawer-side"), p(f, "class", "uikit-drawer"), p(c, "class", "lg:uikit-hidden"), p(n, "class", "uikit-container uikit-px-4 uikit-mx-auto uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between"), p(e, "class", z = re(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        t[0]
      ));
    },
    m(k, I) {
      N(k, e, I), h(e, n), h(n, i), h(i, r), h(r, o), h(n, l), h(n, u), h(u, s);
      for (let b = 0; b < F.length; b += 1)
        F[b] && F[b].m(s, null);
      h(n, a), h(n, c), h(c, f), h(f, g), h(f, d), h(f, m), h(f, C), h(f, v), h(v, S), h(v, _), h(v, A);
      for (let b = 0; b < x.length; b += 1)
        x[b] && x[b].m(A, null);
      P = !0, w || (H = Q(
        r,
        "click",
        /*click_handler*/
        t[5]
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
        for (oe(), b = L.length; b < F.length; b += 1)
          Z(b);
        le();
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
        for (oe(), b = M.length; b < x.length; b += 1)
          j(b);
        le();
      }
      (!P || I & /*className*/
      1 && z !== (z = re(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        k[0]
      ))) && p(e, "class", z);
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
      k && O(e), se(F, k), se(x, k), w = !1, H();
    }
  };
}
function ol(t, e, n) {
  let { class: i = "" } = e, { logotxt: r = "wwqdrh" } = e, { logourl: o = "#" } = e, { links: l = [] } = e, { onItemClick: u = (d) => {
    window.location.href = d;
  } } = e;
  const s = () => u(o), a = (d) => u(d), c = (d) => u(d), f = (d) => u(d), g = (d) => u(d);
  return t.$$set = (d) => {
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
class ll extends te {
  constructor(e) {
    super(), ee(this, e, ol, rl, K, {
      class: 0,
      logotxt: 1,
      logourl: 2,
      links: 3,
      onItemClick: 4
    });
  }
}
function jn(t, e, n) {
  const i = t.slice();
  return i[7] = e[n], i;
}
function An(t) {
  let e, n = (
    /*item*/
    t[7] + ""
  ), i, r, o;
  function l() {
    return (
      /*click_handler*/
      t[6](
        /*item*/
        t[7]
      )
    );
  }
  return {
    c() {
      e = y("button"), i = V(n), p(e, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(u, s) {
      N(u, e, s), h(e, i), r || (o = Q(e, "click", l), r = !0);
    },
    p(u, s) {
      t = u, s & /*buttons*/
      8 && n !== (n = /*item*/
      t[7] + "") && W(i, n);
    },
    d(u) {
      u && O(e), r = !1, o();
    }
  };
}
function sl(t) {
  let e, n, i, r, o, l, u, s, a, c, f, g, d, m, C, v = U(
    /*buttons*/
    t[3]
  ), S = [];
  for (let _ = 0; _ < v.length; _ += 1)
    S[_] = An(jn(t, v, _));
  return {
    c() {
      e = y("section"), n = y("div"), i = y("div"), r = y("div"), o = y("h2"), l = V(
        /*title*/
        t[0]
      ), u = E(), s = y("p"), a = V(
        /*description*/
        t[1]
      ), c = E(), f = y("div");
      for (let _ = 0; _ < S.length; _ += 1)
        S[_].c();
      g = E(), d = y("img"), p(o, "class", "uikit-font-semibold uikit-text-4xl uikit-text-slate-600"), p(s, "class", "uikit-mt-4 uikit-text-lg uikit-leading-relaxed uikit-text-slate-500"), p(f, "class", "uikit-mt-12"), p(r, "class", "uikit-pt-32 sm:uikit-pt-0"), p(i, "class", "uikit-w-full md:uikit-w-8/12 lg:uikit-w-6/12 xl:uikit-w-6/12 uikit-px-4"), p(n, "class", "uikit-container uikit-mx-auto uikit-items-center uikit-flex uikit-flex-wrap"), p(d, "class", "uikit-absolute uikit-top-0 uikit-b-auto uikit-right-0 uikit-pt-16 sm:uikit-w-6/12 uikit--mt-48 sm:uikit-mt-0 uikit-w-10/12"), Qe(d.src, m = /*cover*/
      t[5]) || p(d, "src", m), p(d, "alt", "..."), Se(d, "max-height", "860px"), p(e, "class", C = re(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        t[2]
      )), Se(e, "max-height", "860px");
    },
    m(_, A) {
      N(_, e, A), h(e, n), h(n, i), h(i, r), h(r, o), h(o, l), h(r, u), h(r, s), h(s, a), h(r, c), h(r, f);
      for (let z = 0; z < S.length; z += 1)
        S[z] && S[z].m(f, null);
      h(e, g), h(e, d);
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
        v = U(
          /*buttons*/
          _[3]
        );
        let z;
        for (z = 0; z < v.length; z += 1) {
          const P = jn(_, v, z);
          S[z] ? S[z].p(P, A) : (S[z] = An(P), S[z].c(), S[z].m(f, null));
        }
        for (; z < S.length; z += 1)
          S[z].d(1);
        S.length = v.length;
      }
      A & /*cover*/
      32 && !Qe(d.src, m = /*cover*/
      _[5]) && p(d, "src", m), A & /*className*/
      4 && C !== (C = re(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        _[2]
      )) && p(e, "class", C);
    },
    i: D,
    o: D,
    d(_) {
      _ && O(e), se(S, _);
    }
  };
}
function ul(t, e, n) {
  let { title: i = "wwqdrh's ui component: uikit" } = e, { description: r = "a cross framework web component, you can visit it in wwqdrh'home" } = e, { class: o = "" } = e, { buttons: l = [] } = e, { buttonClick: u = (c) => {
    console.log(c);
  } } = e, { cover: s = "" } = e;
  const a = (c) => u(c);
  return t.$$set = (c) => {
    "title" in c && n(0, i = c.title), "description" in c && n(1, r = c.description), "class" in c && n(2, o = c.class), "buttons" in c && n(3, l = c.buttons), "buttonClick" in c && n(4, u = c.buttonClick), "cover" in c && n(5, s = c.cover);
  }, [i, r, o, l, u, s, a];
}
class cl extends te {
  constructor(e) {
    super(), ee(this, e, ul, sl, K, {
      title: 0,
      description: 1,
      class: 2,
      buttons: 3,
      buttonClick: 4,
      cover: 5
    });
  }
}
function Tn(t, e, n) {
  const i = t.slice();
  return i[4] = e[n].icon, i[2] = e[n].title, i[3] = e[n].description, i;
}
function En(t) {
  let e, n, i, r, o, l = (
    /*title*/
    t[2] + ""
  ), u, s, a, c = (
    /*description*/
    t[3] + ""
  ), f, g, d;
  return i = new Me({
    props: {
      class: "uikit-w-5 uikit-h-5 uikit-text-primary-600 lg:uikit-w-6 lg:uikit-h-6 dark:uikit-text-primary-300",
      icon: (
        /*icon*/
        t[4]
      )
    }
  }), {
    c() {
      e = y("div"), n = y("div"), ge(i.$$.fragment), r = E(), o = y("h3"), u = V(l), s = E(), a = y("p"), f = V(c), g = E(), p(n, "class", "uikit-flex uikit-justify-center uikit-items-center uikit-mb-4 uikit-w-10 uikit-h-10 uikit-rounded-full uikit-bg-primary-100 lg:uikit-h-12 lg:uikit-w-12 dark:uikit-bg-primary-900"), p(o, "class", "uikit-mb-2 uikit-text-xl uikit-font-bold dark:uikit-text-white"), p(a, "class", "uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(m, C) {
      N(m, e, C), h(e, n), ae(i, n, null), h(e, r), h(e, o), h(o, u), h(e, s), h(e, a), h(a, f), h(e, g), d = !0;
    },
    p(m, C) {
      const v = {};
      C & /*features*/
      2 && (v.icon = /*icon*/
      m[4]), i.$set(v), (!d || C & /*features*/
      2) && l !== (l = /*title*/
      m[2] + "") && W(u, l), (!d || C & /*features*/
      2) && c !== (c = /*description*/
      m[3] + "") && W(f, c);
    },
    i(m) {
      d || (T(i.$$.fragment, m), d = !0);
    },
    o(m) {
      G(i.$$.fragment, m), d = !1;
    },
    d(m) {
      m && O(e), fe(i);
    }
  };
}
function al(t) {
  let e, n, i, r, o, l, u, s, a, c, f, g, d = U(
    /*features*/
    t[1]
  ), m = [];
  for (let v = 0; v < d.length; v += 1)
    m[v] = En(Tn(t, d, v));
  const C = (v) => G(m[v], 1, 1, () => {
    m[v] = null;
  });
  return {
    c() {
      e = y("section"), n = y("div"), i = y("div"), r = y("h2"), o = V(
        /*title*/
        t[2]
      ), l = E(), u = y("p"), s = V(
        /*description*/
        t[3]
      ), a = E(), c = y("div");
      for (let v = 0; v < m.length; v += 1)
        m[v].c();
      p(r, "class", "uikit-mb-4 uikit-text-4xl uikit-font-extrabold uikit-text-gray-900 dark:uikit-text-white"), p(u, "class", "uikit-text-gray-500 sm:uikit-text-xl dark:uikit-text-gray-400"), p(i, "class", "uikit-mb-8 uikit-max-w-screen-md lg:uikit-mb-16"), p(c, "class", "uikit-space-y-8 md:uikit-grid md:uikit-grid-cols-2 lg:uikit-grid-cols-3 md:uikit-gap-12 md:uikit-space-y-0"), p(n, "class", "uikit-py-8 uikit-px-4 uikit-mx-auto uikit-max-w-screen-xl sm:uikit-py-16 lg:uikit-px-6"), p(e, "class", f = re(
        "dark:uikit-bg-gray-800",
        /*className*/
        t[0]
      ));
    },
    m(v, S) {
      N(v, e, S), h(e, n), h(n, i), h(i, r), h(r, o), h(i, l), h(i, u), h(u, s), h(n, a), h(n, c);
      for (let _ = 0; _ < m.length; _ += 1)
        m[_] && m[_].m(c, null);
      g = !0;
    },
    p(v, [S]) {
      if ((!g || S & /*title*/
      4) && W(
        o,
        /*title*/
        v[2]
      ), (!g || S & /*description*/
      8) && W(
        s,
        /*description*/
        v[3]
      ), S & /*features*/
      2) {
        d = U(
          /*features*/
          v[1]
        );
        let _;
        for (_ = 0; _ < d.length; _ += 1) {
          const A = Tn(v, d, _);
          m[_] ? (m[_].p(A, S), T(m[_], 1)) : (m[_] = En(A), m[_].c(), T(m[_], 1), m[_].m(c, null));
        }
        for (oe(), _ = d.length; _ < m.length; _ += 1)
          C(_);
        le();
      }
      (!g || S & /*className*/
      1 && f !== (f = re(
        "dark:uikit-bg-gray-800",
        /*className*/
        v[0]
      ))) && p(e, "class", f);
    },
    i(v) {
      if (!g) {
        for (let S = 0; S < d.length; S += 1)
          T(m[S]);
        g = !0;
      }
    },
    o(v) {
      m = m.filter(Boolean);
      for (let S = 0; S < m.length; S += 1)
        G(m[S]);
      g = !1;
    },
    d(v) {
      v && O(e), se(m, v);
    }
  };
}
function fl(t, e, n) {
  let { class: i = "" } = e, { title: r = "" } = e, { description: o = "" } = e, { features: l = [] } = e;
  return t.$$set = (u) => {
    "class" in u && n(0, i = u.class), "title" in u && n(2, r = u.title), "description" in u && n(3, o = u.description), "features" in u && n(1, l = u.features);
  }, [i, l, r, o];
}
class dl extends te {
  constructor(e) {
    super(), ee(this, e, fl, al, K, {
      class: 0,
      title: 2,
      description: 3,
      features: 1
    });
  }
}
function Pn(t, e, n) {
  const i = t.slice();
  return i[11] = e[n], i[13] = n, i;
}
function zn(t, e, n) {
  const i = t.slice();
  return i[11] = e[n], i;
}
function On(t, e, n) {
  const i = t.slice();
  return i[8] = e[n].icon, i[9] = e[n].description, i;
}
function Ln(t) {
  let e, n, i;
  return n = new Me({ props: { icon: (
    /*icon*/
    t[8]
  ) } }), {
    c() {
      e = y("div"), ge(n.$$.fragment), p(e, "class", "uikit-text-slate-500 uikit-p-3 uikit-text-center uikit-inline-flex uikit-items-center uikit-justify-center uikit-w-16 uikit-h-16 uikit-mb-6 uikit-shadow-lg uikit-rounded-full uikit-bg-white");
    },
    m(r, o) {
      N(r, e, o), ae(n, e, null), i = !0;
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
      r && O(e), fe(n);
    }
  };
}
function Nn(t) {
  let e, n;
  return e = new Me({ props: { icon: (
    /*icon*/
    t[8]
  ) } }), {
    c() {
      ge(e.$$.fragment);
    },
    m(i, r) {
      ae(e, i, r), n = !0;
    },
    p(i, r) {
      const o = {};
      r & /*sections*/
      16 && (o.icon = /*icon*/
      i[8]), e.$set(o);
    },
    i(i) {
      n || (T(e.$$.fragment, i), n = !0);
    },
    o(i) {
      G(e.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(e, i);
    }
  };
}
function Bn(t) {
  let e, n, i, r = (
    /*description*/
    t[9] + ""
  ), o, l, u = (
    /*icon*/
    t[8] && Nn(t)
  );
  return {
    c() {
      e = y("li"), n = y("span"), u && u.c(), i = E(), o = V(r), p(n, "class", "uikit-text-xs uikit-font-semibold uikit-inline-block uikit-py-1 uikit-px-2 uikit-rounded-full uikit-text-slate-500 uikit-bg-slate-50 uikit-mr-3"), p(e, "class", "uikit-py-2");
    },
    m(s, a) {
      N(s, e, a), h(e, n), u && u.m(n, null), h(n, i), h(n, o), l = !0;
    },
    p(s, a) {
      /*icon*/
      s[8] ? u ? (u.p(s, a), a & /*sections*/
      16 && T(u, 1)) : (u = Nn(s), u.c(), T(u, 1), u.m(n, i)) : u && (oe(), G(u, 1, 1, () => {
        u = null;
      }), le()), (!l || a & /*sections*/
      16) && r !== (r = /*description*/
      s[9] + "") && W(o, r);
    },
    i(s) {
      l || (T(u), l = !0);
    },
    o(s) {
      G(u), l = !1;
    },
    d(s) {
      s && O(e), u && u.d();
    }
  };
}
function Gn(t) {
  let e, n = (
    /*item*/
    t[11] + ""
  ), i, r, o;
  function l() {
    return (
      /*click_handler*/
      t[10](
        /*item*/
        t[11]
      )
    );
  }
  return {
    c() {
      e = y("button"), i = V(n), p(e, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(u, s) {
      N(u, e, s), h(e, i), r || (o = Q(e, "click", l), r = !0);
    },
    p(u, s) {
      t = u, s & /*buttons*/
      32 && n !== (n = /*item*/
      t[11] + "") && W(i, n);
    },
    d(u) {
      u && O(e), r = !1, o();
    }
  };
}
function Rn(t) {
  let e, n, i, r, o, l, u, s, a, c, f, g, d, m;
  return {
    c() {
      e = y("div"), n = y("img"), r = E(), o = y("div"), l = y("a"), u = V("❮"), a = E(), c = y("a"), f = V("❯"), d = E(), p(n, "alt", "..."), p(n, "class", "uikit-max-w-full uikit-rounded-lg uikit-shadow-xl"), Se(n, "transform", "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"), Qe(n.src, i = /*item*/
      t[11]) || p(n, "src", i), p(l, "href", s = `#pd-cover-slide-${/*id*/
      t[1]}-${/*i*/
      (t[13] - 1 + /*covers*/
      t[2].length) % /*covers*/
      t[2].length}`), p(l, "class", "uikit-btn uikit-btn-circle"), p(c, "href", g = `#pd-cover-slide-${/*id*/
      t[1]}-${/*i*/
      (t[13] + 1) % /*covers*/
      t[2].length}`), p(c, "class", "uikit-btn uikit-btn-circle"), p(o, "class", "uikit-absolute uikit-flex uikit-justify-between uikit-transform uikit--translate-y-1/2 uikit-left-5 uikit-right-5 uikit-top-1/2"), p(e, "id", m = `pd-cover-slide-${/*id*/
      t[1]}-${/*i*/
      t[13]}`), p(e, "class", "uikit-carousel-item uikit-relative uikit-w-full");
    },
    m(C, v) {
      N(C, e, v), h(e, n), h(e, r), h(e, o), h(o, l), h(l, u), h(o, a), h(o, c), h(c, f), h(e, d);
    },
    p(C, v) {
      v & /*covers*/
      4 && !Qe(n.src, i = /*item*/
      C[11]) && p(n, "src", i), v & /*id, covers*/
      6 && s !== (s = `#pd-cover-slide-${/*id*/
      C[1]}-${/*i*/
      (C[13] - 1 + /*covers*/
      C[2].length) % /*covers*/
      C[2].length}`) && p(l, "href", s), v & /*id, covers*/
      6 && g !== (g = `#pd-cover-slide-${/*id*/
      C[1]}-${/*i*/
      (C[13] + 1) % /*covers*/
      C[2].length}`) && p(c, "href", g), v & /*id*/
      2 && m !== (m = `pd-cover-slide-${/*id*/
      C[1]}-${/*i*/
      C[13]}`) && p(e, "id", m);
    },
    d(C) {
      C && O(e);
    }
  };
}
function gl(t) {
  let e, n, i, r, o, l, u, s, a, c, f, g, d, m, C, v, S, _, A, z, P, w = (
    /*icon*/
    t[8] && Ln(t)
  ), H = U(
    /*sections*/
    t[4]
  ), L = [];
  for (let k = 0; k < H.length; k += 1)
    L[k] = Bn(On(t, H, k));
  const F = (k) => G(L[k], 1, 1, () => {
    L[k] = null;
  });
  let Z = U(
    /*buttons*/
    t[5]
  ), M = [];
  for (let k = 0; k < Z.length; k += 1)
    M[k] = Gn(zn(t, Z, k));
  let x = U(
    /*covers*/
    t[2]
  ), j = [];
  for (let k = 0; k < x.length; k += 1)
    j[k] = Rn(Pn(t, x, k));
  return {
    c() {
      e = y("div"), n = y("div"), i = y("div"), r = y("div"), o = y("div"), w && w.c(), l = E(), u = y("h3"), s = V(
        /*title*/
        t[3]
      ), a = E(), c = y("p"), f = V(
        /*description*/
        t[9]
      ), g = E(), d = y("ul");
      for (let k = 0; k < L.length; k += 1)
        L[k].c();
      m = E(), C = y("div");
      for (let k = 0; k < M.length; k += 1)
        M[k].c();
      v = E(), S = y("div"), _ = y("div");
      for (let k = 0; k < j.length; k += 1)
        j[k].c();
      p(u, "class", "uikit-text-3xl uikit-font-semibold"), p(c, "class", "uikit-mt-4 uikit-text-md uikit-leading-relaxed uikit-text-slate-500"), p(d, "class", "uikit-list-none uikit-mt-6"), p(o, "class", "md:uikit-pr-12"), p(r, "class", "uikit-w-full md:uikit-w-1/3 uikit-ml-auto uikit-px-12 md:uikit-px-4"), p(_, "class", "uikit-carousel uikit-carousel-center uikit-w-full"), p(S, "class", "uikit-w-full md:uikit-w-2/3 uikit-mr-auto uikit-px-4 uikit-pt-24 md:uikit-pt-0"), p(i, "class", A = re(
        "uikit-flex uikit-justify-between uikit-w-full",
        /*rtl*/
        t[6] ? "uikit-flex-row-reverse" : ""
      )), p(n, "class", "uikit-items-center uikit-flex uikit-flex-wrap uikit-w-full"), p(e, "class", z = re(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        t[0]
      ));
    },
    m(k, I) {
      N(k, e, I), h(e, n), h(n, i), h(i, r), h(r, o), w && w.m(o, null), h(o, l), h(o, u), h(u, s), h(o, a), h(o, c), h(c, f), h(o, g), h(o, d);
      for (let b = 0; b < L.length; b += 1)
        L[b] && L[b].m(d, null);
      h(d, m), h(d, C);
      for (let b = 0; b < M.length; b += 1)
        M[b] && M[b].m(C, null);
      h(i, v), h(i, S), h(S, _);
      for (let b = 0; b < j.length; b += 1)
        j[b] && j[b].m(_, null);
      P = !0;
    },
    p(k, [I]) {
      if (/*icon*/
      k[8] ? w ? (w.p(k, I), I & /*icon*/
      256 && T(w, 1)) : (w = Ln(k), w.c(), T(w, 1), w.m(o, l)) : w && (oe(), G(w, 1, 1, () => {
        w = null;
      }), le()), (!P || I & /*title*/
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
          L[b] ? (L[b].p(B, I), T(L[b], 1)) : (L[b] = Bn(B), L[b].c(), T(L[b], 1), L[b].m(d, m));
        }
        for (oe(), b = H.length; b < L.length; b += 1)
          F(b);
        le();
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
          M[b] ? M[b].p(B, I) : (M[b] = Gn(B), M[b].c(), M[b].m(C, null));
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
          j[b] ? j[b].p(B, I) : (j[b] = Rn(B), j[b].c(), j[b].m(_, null));
        }
        for (; b < j.length; b += 1)
          j[b].d(1);
        j.length = x.length;
      }
      (!P || I & /*rtl*/
      64 && A !== (A = re(
        "uikit-flex uikit-justify-between uikit-w-full",
        /*rtl*/
        k[6] ? "uikit-flex-row-reverse" : ""
      ))) && p(i, "class", A), (!P || I & /*className*/
      1 && z !== (z = re(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        k[0]
      ))) && p(e, "class", z);
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
      k && O(e), w && w.d(), se(L, k), se(M, k), se(j, k);
    }
  };
}
function hl(t, e, n) {
  let { class: i = "" } = e, { id: r = "" } = e, { covers: o = [] } = e, { title: l = "" } = e, { icon: u = "" } = e, { description: s = "" } = e, { sections: a = [] } = e, { buttons: c = [] } = e, { rtl: f = !1 } = e, { buttonClick: g = (m) => {
  } } = e;
  const d = (m) => g(m);
  return t.$$set = (m) => {
    "class" in m && n(0, i = m.class), "id" in m && n(1, r = m.id), "covers" in m && n(2, o = m.covers), "title" in m && n(3, l = m.title), "icon" in m && n(8, u = m.icon), "description" in m && n(9, s = m.description), "sections" in m && n(4, a = m.sections), "buttons" in m && n(5, c = m.buttons), "rtl" in m && n(6, f = m.rtl), "buttonClick" in m && n(7, g = m.buttonClick);
  }, [
    i,
    r,
    o,
    l,
    a,
    c,
    f,
    g,
    u,
    s,
    d
  ];
}
class ml extends te {
  constructor(e) {
    super(), ee(this, e, hl, gl, K, {
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
const Cl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: cl,
  Feature: dl,
  Grid: pi,
  Header: ll,
  ProjectDescription: ml
}, Symbol.toStringTag, { value: "Module" }));
function pl(t) {
  let e, n, i, r, o, l;
  return {
    c() {
      e = y("div"), n = y("div"), i = y("span"), r = E(), o = y("button"), l = V(
        /*btnText*/
        t[0]
      ), p(i, "id", "mask-desc"), p(i, "class", "mask-tip-desc svelte-17awz4u"), p(o, "id", "next-step-btn"), p(o, "class", "mask-tip-btn svelte-17awz4u"), p(n, "class", "mask-tip svelte-17awz4u"), Se(e, "display", "none");
    },
    m(u, s) {
      N(u, e, s), h(e, n), h(n, i), h(n, r), h(n, o), h(o, l), t[6](n), t[7](e);
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
      u && O(e), t[6](null), t[7](null);
    }
  };
}
function bl(t, e, n) {
  let i, r, { gapWidth: o = 5 } = e, { isStart: l } = e, { stepArr: u = [] } = e, { btnText: s = "下一步" } = e;
  const a = (g) => {
    if (g.length === 0) {
      n(1, i.style.display = "none", i);
      return;
    }
    const { id: d, desc: m } = g[0];
    var C = document.getElementById(d), v = C.offsetWidth, S = C.offsetHeight, _ = C.offsetLeft, A = C.offsetTop;
    console.log("待镂空元素: ", v, S, _, A);
    var z = document.body.scrollWidth, P = document.body.scrollHeight;
    n(1, i.style.width = z + "px", i), n(1, i.style.height = P + "px", i), n(1, i.style.position = "absolute", i), n(1, i.style.left = 0, i), n(1, i.style.top = 0, i), n(1, i.style.display = "block", i), n(1, i.style.boxSizing = "border-box", i), n(1, i.style.borderColor = "rgba(0, 0, 0, 0.75)", i), n(1, i.style.borderStyle = "solid", i), n(1, i.style.borderLeftWidth = _ - o + "px", i), n(1, i.style.borderRightWidth = z - v - _ - o + "px", i), n(1, i.style.borderTopWidth = A - o + "px", i), n(1, i.style.borderBottomWidth = P - S - A - o + "px", i), n(2, r.style.top = S + o * 2 + 10 + "px", r), n(2, r.style.left = "50%", r);
    var w = document.getElementById("mask-desc");
    w.innerHTML = m;
    var H = document.getElementById("next-step-btn");
    H.onclick = function() {
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
  return t.$$set = (g) => {
    "gapWidth" in g && n(3, o = g.gapWidth), "isStart" in g && n(4, l = g.isStart), "stepArr" in g && n(5, u = g.stepArr), "btnText" in g && n(0, s = g.btnText);
  }, t.$$.update = () => {
    t.$$.dirty & /*isStart, stepArr*/
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
class Sl extends te {
  constructor(e) {
    super(), ee(this, e, bl, pl, K, {
      gapWidth: 3,
      isStart: 4,
      stepArr: 5,
      btnText: 0
    });
  }
}
export {
  Cl as Layout,
  xl as Sidebar,
  Sl as StepMask,
  _l as confirm,
  yl as notify
};
