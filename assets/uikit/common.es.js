var cr = Object.defineProperty;
var ar = (e, t, n) => t in e ? cr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ot = (e, t, n) => (ar(e, typeof t != "symbol" ? t + "" : t, n), n);
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
function ur(e) {
  return Object.keys(e).length === 0;
}
function Mt(e, t, n, r) {
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
      for (let c = 0; c < i; c += 1)
        l[c] = t.dirty[c] | o[c];
      return l;
    }
    return t.dirty | o;
  }
  return t.dirty;
}
function jt(e, t, n, r, o, l) {
  if (o) {
    const i = En(t, n, r, l);
    e.p(i, o);
  }
}
function Tt(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let r = 0; r < n; r++)
      t[r] = -1;
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
  for (const r in e)
    !t.has(r) && r[0] !== "$" && (n[r] = e[r]);
  return n;
}
function Vt(e) {
  return e ?? "";
}
function fr(e) {
  return e && Be(e.destroy) ? e.destroy : D;
}
function h(e, t) {
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
function dr(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function F(e) {
  return document.createTextNode(e);
}
function E() {
  return F(" ");
}
function me() {
  return F("");
}
function J(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function v(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const gr = ["width", "height"];
function dt(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const r in t)
    t[r] == null ? e.removeAttribute(r) : r === "style" ? e.style.cssText = t[r] : r === "__value" ? e.value = e[r] = t[r] : n[r] && n[r].set && gr.indexOf(r) === -1 ? e[r] = t[r] : v(e, r, t[r]);
}
function Wt(e, t) {
  for (const n in t)
    v(e, n, t[n]);
}
function hr(e, t) {
  Object.keys(t).forEach((n) => {
    pr(e, n, t[n]);
  });
}
function pr(e, t, n) {
  t in e ? e[t] = typeof e[t] == "boolean" && n === "" ? !0 : n : v(e, t, n);
}
function Ye(e) {
  return /-/.test(e) ? hr : dt;
}
function mr(e) {
  return Array.from(e.childNodes);
}
function H(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function Se(e, t, n, r) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "");
}
function br(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
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
function vr(e) {
  Et().$$.on_destroy.push(e);
}
function Ie() {
  const e = Et();
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
function re(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((r) => r.call(this, t));
}
const ke = [], ze = [];
let Ce = [];
const Ht = [], yr = /* @__PURE__ */ Promise.resolve();
let gt = !1;
function wr() {
  gt || (gt = !0, yr.then(Pn));
}
function ht(e) {
  Ce.push(e);
}
const lt = /* @__PURE__ */ new Set();
let xe = 0;
function Pn() {
  if (xe !== 0)
    return;
  const e = Oe;
  do {
    try {
      for (; xe < ke.length; ) {
        const t = ke[xe];
        xe++, Ee(t), _r(t.$$);
      }
    } catch (t) {
      throw ke.length = 0, xe = 0, t;
    }
    for (Ee(null), ke.length = 0, xe = 0; ze.length; )
      ze.pop()();
    for (let t = 0; t < Ce.length; t += 1) {
      const n = Ce[t];
      lt.has(n) || (lt.add(n), n());
    }
    Ce.length = 0;
  } while (ke.length);
  for (; Ht.length; )
    Ht.pop()();
  gt = !1, lt.clear(), Ee(e);
}
function _r(e) {
  if (e.fragment !== null) {
    e.update(), he(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ht);
  }
}
function xr(e) {
  const t = [], n = [];
  Ce.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), Ce = t;
}
const qe = /* @__PURE__ */ new Set();
let ve;
function se() {
  ve = {
    r: 0,
    c: [],
    p: ve
    // parent group
  };
}
function ce() {
  ve.r || he(ve.c), ve = ve.p;
}
function j(e, t) {
  e && e.i && (qe.delete(e), e.i(t));
}
function B(e, t, n, r) {
  if (e && e.o) {
    if (qe.has(e))
      return;
    qe.add(e), ve.c.push(() => {
      qe.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
function K(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Re(e, t) {
  const n = {}, r = {}, o = { $$scope: 1 };
  let l = e.length;
  for (; l--; ) {
    const i = e[l], c = t[l];
    if (c) {
      for (const s in i)
        s in c || (r[s] = 1);
      for (const s in c)
        o[s] || (n[s] = c[s], o[s] = 1);
      e[l] = c;
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
function be(e) {
  e && e.c();
}
function ae(e, t, n) {
  const { fragment: r, after_update: o } = e.$$;
  r && r.m(t, n), ht(() => {
    const l = e.$$.on_mount.map(Tn).filter(Be);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : he(l), e.$$.on_mount = [];
  }), o.forEach(ht);
}
function ue(e, t) {
  const n = e.$$;
  n.fragment !== null && (xr(n.after_update), he(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Cr(e, t) {
  e.$$.dirty[0] === -1 && (ke.push(e), wr(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ee(e, t, n, r, o, l, i, c = [-1]) {
  const s = Oe;
  Ee(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: D,
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
    dirty: c,
    skip_bound: !1,
    root: t.target || s.$$.root
  };
  i && i(u.root);
  let a = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, d, ...g) => {
    const p = g.length ? g[0] : d;
    return u.ctx && o(u.ctx[f], u.ctx[f] = p) && (!u.skip_bound && u.bound[f] && u.bound[f](p), a && Cr(e, f)), d;
  }) : [], u.update(), a = !0, he(u.before_update), u.fragment = r ? r(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = mr(t.target);
      u.fragment && u.fragment.l(f), f.forEach(O);
    } else
      u.fragment && u.fragment.c();
    t.intro && j(e.$$.fragment), ae(e, t.target, t.anchor), Pn();
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
    ue(this, 1), this.$destroy = D;
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
  let t, n, r, o, l, i, c, s, u;
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>', r = E(), o = w("div"), l = w("div"), i = w("span"), i.textContent = "Success", c = E(), s = w("p"), u = F(
        /*msg*/
        e[0]
      ), v(n, "class", "flex items-center justify-center w-12 bg-emerald-500"), v(i, "class", "font-semibold text-emerald-500 dark:text-emerald-400"), v(s, "class", "text-sm text-gray-600 dark:text-gray-200"), v(l, "class", "mx-3"), v(o, "class", "px-4 py-2 -mx-3"), v(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(a, f) {
      z(a, t, f), h(t, n), h(t, r), h(t, o), h(o, l), h(l, i), h(l, c), h(l, s), h(s, u);
    },
    p(a, [f]) {
      f & /*msg*/
      1 && H(
        u,
        /*msg*/
        a[0]
      );
    },
    i: D,
    o: D,
    d(a) {
      a && O(t);
    }
  };
}
function Mr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const l = Ie();
  return Ge(() => {
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
class Ar extends te {
  constructor(t) {
    super(), ee(this, t, Mr, Ir, Y, { msg: 0, duration: 1 });
  }
}
function jr(e) {
  let t, n, r, o, l, i, c, s, u;
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current svelte-18egk3i" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" class="svelte-18egk3i"></path></svg>', r = E(), o = w("div"), l = w("div"), i = w("span"), i.textContent = "Info", c = E(), s = w("p"), u = F(
        /*msg*/
        e[0]
      ), v(n, "class", "flex items-center justify-center w-12 bg-blue-500 svelte-18egk3i"), v(i, "class", "font-semibold text-blue-500 dark:text-blue-400 svelte-18egk3i"), v(s, "class", "text-sm text-gray-600 dark:text-gray-200 svelte-18egk3i"), v(l, "class", "mx-3 svelte-18egk3i"), v(o, "class", "px-4 py-2 -mx-3 svelte-18egk3i"), v(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 svelte-18egk3i");
    },
    m(a, f) {
      z(a, t, f), h(t, n), h(t, r), h(t, o), h(o, l), h(l, i), h(l, c), h(l, s), h(s, u);
    },
    p(a, [f]) {
      f & /*msg*/
      1 && H(
        u,
        /*msg*/
        a[0]
      );
    },
    i: D,
    o: D,
    d(a) {
      a && O(t);
    }
  };
}
function Tr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const l = Ie();
  return Ge(() => {
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
    super(), ee(this, t, Tr, jr, Y, { msg: 0, duration: 1 });
  }
}
function Er(e) {
  let t, n, r, o, l, i, c, s, u;
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', r = E(), o = w("div"), l = w("div"), i = w("span"), i.textContent = "Warning", c = E(), s = w("p"), u = F(
        /*msg*/
        e[0]
      ), v(n, "class", "flex items-center justify-center w-12 bg-yellow-400"), v(i, "class", "font-semibold text-yellow-400 dark:text-yellow-300"), v(s, "class", "text-sm text-gray-600 dark:text-gray-200"), v(l, "class", "mx-3"), v(o, "class", "px-4 py-2 -mx-3"), v(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(a, f) {
      z(a, t, f), h(t, n), h(t, r), h(t, o), h(o, l), h(l, i), h(l, c), h(l, s), h(s, u);
    },
    p(a, [f]) {
      f & /*msg*/
      1 && H(
        u,
        /*msg*/
        a[0]
      );
    },
    i: D,
    o: D,
    d(a) {
      a && O(t);
    }
  };
}
function Pr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const l = Ie();
  return Ge(() => {
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
    super(), ee(this, t, Pr, Er, Y, { msg: 0, duration: 1 });
  }
}
function zr(e) {
  let t, n, r, o, l, i, c, s, u;
  return {
    c() {
      t = w("div"), n = w("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>', r = E(), o = w("div"), l = w("div"), i = w("span"), i.textContent = "Error", c = E(), s = w("p"), u = F(
        /*msg*/
        e[0]
      ), v(n, "class", "flex items-center justify-center w-12 bg-red-500"), v(i, "class", "font-semibold text-red-500 dark:text-red-400"), v(s, "class", "text-sm text-gray-600 dark:text-gray-200"), v(l, "class", "mx-3"), v(o, "class", "px-4 py-2 -mx-3"), v(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(a, f) {
      z(a, t, f), h(t, n), h(t, r), h(t, o), h(o, l), h(l, i), h(l, c), h(l, s), h(s, u);
    },
    p(a, [f]) {
      f & /*msg*/
      1 && H(
        u,
        /*msg*/
        a[0]
      );
    },
    i: D,
    o: D,
    d(a) {
      a && O(t);
    }
  };
}
function Lr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const l = Ie();
  return Ge(() => {
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
    super(), ee(this, t, Lr, zr, Y, { msg: 0, duration: 1 });
  }
};
const qt = "uikit_msg_panel";
let it = 0;
const ci = (e) => {
  it += 1;
  let t = window.document.getElementById(qt);
  t || (t = window.document.createElement("div"), t.id = qt, t.style.position = "absolute", t.style.top = "5px", t.style.right = "5px", t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "10px", t.style.zIndex = "100", document.body.appendChild(t));
  const n = window.document.createElement("div");
  t.appendChild(n);
  let r;
  switch (e.type) {
    case "success":
      r = new Ar({
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
}, We = (e) => Object.entries(e).map(([t, n]) => `${t}: ${n};`).join(" ");
function Br(e) {
  let t, n, r, o, l, i, c, s, u, a, f, d, g, p, x, b, _, m, S, k;
  return {
    c() {
      t = w("div"), n = w("div"), r = w("div"), o = w("div"), l = F(
        /*title*/
        e[0]
      ), i = E(), c = w("div"), s = w("div"), u = F(
        /*content*/
        e[1]
      ), a = E(), f = w("div"), d = w("div"), g = F(
        /*cancelText*/
        e[2]
      ), x = E(), b = w("div"), _ = F(
        /*okText*/
        e[3]
      ), v(o, "class", "modal-title svelte-f901x2"), v(c, "class", "content svelte-f901x2"), v(r, "class", "modal-content-body svelte-f901x2"), v(d, "class", "btn button-left centerLayout svelte-f901x2"), v(d, "style", p = We(
        /*cancelBtnStyle*/
        e[4]
      )), v(b, "class", "btn button-right centerLayout svelte-f901x2"), v(b, "style", m = We(
        /*okBtnStyle*/
        e[5]
      )), v(f, "class", "confirm-button-wrap svelte-f901x2"), v(n, "class", "confirm-modal-content svelte-f901x2"), v(t, "class", "confirm-modal svelte-f901x2");
    },
    m(A, y) {
      z(A, t, y), h(t, n), h(n, r), h(r, o), h(o, l), h(r, i), h(r, c), h(c, s), h(s, u), h(n, a), h(n, f), h(f, d), h(d, g), h(f, x), h(f, b), h(b, _), e[11](t), S || (k = [
        J(
          d,
          "click",
          /*onCancelClk*/
          e[8]
        ),
        J(
          b,
          "click",
          /*onOkClk*/
          e[7]
        )
      ], S = !0);
    },
    p(A, [y]) {
      y & /*title*/
      1 && H(
        l,
        /*title*/
        A[0]
      ), y & /*content*/
      2 && H(
        u,
        /*content*/
        A[1]
      ), y & /*cancelText*/
      4 && H(
        g,
        /*cancelText*/
        A[2]
      ), y & /*cancelBtnStyle*/
      16 && p !== (p = We(
        /*cancelBtnStyle*/
        A[4]
      )) && v(d, "style", p), y & /*okText*/
      8 && H(
        _,
        /*okText*/
        A[3]
      ), y & /*okBtnStyle*/
      32 && m !== (m = We(
        /*okBtnStyle*/
        A[5]
      )) && v(b, "style", m);
    },
    i: D,
    o: D,
    d(A) {
      A && O(t), e[11](null), S = !1, he(k);
    }
  };
}
function Gr(e, t, n) {
  let { title: r = "" } = t, { content: o = "" } = t, { cancelText: l = "取消" } = t, { okText: i = "确定" } = t, { onCancel: c = () => {
  } } = t, { onOk: s = () => {
  } } = t, { cancelBtnStyle: u = "" } = t, { okBtnStyle: a = "" } = t;
  const f = Ie();
  let d;
  const g = () => {
    s(), f("onOk");
  }, p = () => {
    c(), f("onCancel");
  };
  function x(b) {
    ze[b ? "unshift" : "push"](() => {
      d = b, n(6, d);
    });
  }
  return e.$$set = (b) => {
    "title" in b && n(0, r = b.title), "content" in b && n(1, o = b.content), "cancelText" in b && n(2, l = b.cancelText), "okText" in b && n(3, i = b.okText), "onCancel" in b && n(9, c = b.onCancel), "onOk" in b && n(10, s = b.onOk), "cancelBtnStyle" in b && n(4, u = b.cancelBtnStyle), "okBtnStyle" in b && n(5, a = b.okBtnStyle);
  }, [
    r,
    o,
    l,
    i,
    u,
    a,
    d,
    g,
    p,
    c,
    s,
    x
  ];
}
class Rr extends te {
  constructor(t) {
    super(), ee(this, t, Gr, Br, Y, {
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
const ai = (e) => {
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
}, Pe = /^[a-z0-9]+(-[a-z0-9]+)*$/, tt = (e, t, n, r = "") => {
  const o = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (o.length < 2 || o.length > 3)
      return null;
    r = o.shift().slice(1);
  }
  if (o.length > 3 || !o.length)
    return null;
  if (o.length > 1) {
    const c = o.pop(), s = o.pop(), u = {
      // Allow provider without '@': "provider:prefix:name"
      provider: o.length > 0 ? o[0] : r,
      prefix: s,
      name: c
    };
    return t && !Ue(u) ? null : u;
  }
  const l = o[0], i = l.split("-");
  if (i.length > 1) {
    const c = {
      provider: r,
      prefix: i.shift(),
      name: i.join("-")
    };
    return t && !Ue(c) ? null : c;
  }
  if (n && r === "") {
    const c = {
      provider: r,
      prefix: "",
      name: l
    };
    return t && !Ue(c, n) ? null : c;
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
function Fr(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Ut(e, t) {
  const n = Fr(e, t);
  for (const r in pt)
    r in Ke ? r in e && !(r in n) && (n[r] = Ke[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function Vr(e, t) {
  const n = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  function l(i) {
    if (n[i])
      return o[i] = [];
    if (!(i in o)) {
      o[i] = null;
      const c = r[i] && r[i].parent, s = c && l(c);
      s && (o[i] = [c].concat(s));
    }
    return o[i];
  }
  return (t || Object.keys(n).concat(Object.keys(r))).forEach(l), o;
}
function Wr(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let l = {};
  function i(c) {
    l = Ut(
      r[c] || o[c],
      l
    );
  }
  return i(t), n.forEach(i), Ut(e, l);
}
function zn(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = Vr(e);
  for (const o in r) {
    const l = r[o];
    l && (t(o, Wr(e, o, l)), n.push(o));
  }
  return n;
}
const Hr = {
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
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !st(e, Hr))
    return null;
  const n = t.icons;
  for (const o in n) {
    const l = n[o];
    if (!o.match(Pe) || typeof l.body != "string" || !st(
      l,
      pt
    ))
      return null;
  }
  const r = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in r) {
    const l = r[o], i = l.parent;
    if (!o.match(Pe) || typeof i != "string" || !n[i] && !r[i] || !st(
      l,
      pt
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
function we(e, t) {
  const n = Zt[e] || (Zt[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = Dr(e, t));
}
function Pt(e, t) {
  return Ln(t) ? zn(t, (n, r) => {
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
function Nn(e) {
  return typeof e == "boolean" && (Le = e), Le;
}
function Ur(e) {
  const t = typeof e == "string" ? tt(e, !0, Le) : e;
  if (t) {
    const n = we(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function Zr(e, t) {
  const n = tt(e, !0, Le);
  if (!n)
    return !1;
  const r = we(n.provider, n.prefix);
  return qr(r, n.name, t);
}
function Qr(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Le && !t && !e.prefix) {
    let o = !1;
    return Ln(e) && (e.prefix = "", zn(e, (l, i) => {
      i && Zr(l, i) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!Ue({
    provider: t,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = we(t, n);
  return !!Pt(r, e);
}
const Bn = Object.freeze({
  width: null,
  height: null
}), Gn = Object.freeze({
  // Dimensions
  ...Bn,
  // Transformations
  ...Ke
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
      const c = parseFloat(l);
      isNaN(c) ? o.push(l) : o.push(Math.ceil(c * t * n) / n);
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
    ...nt,
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
  let l = n.body;
  [n, r].forEach((p) => {
    const x = [], b = p.hFlip, _ = p.vFlip;
    let m = p.rotate;
    b ? _ ? m += 2 : (x.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), x.push("scale(-1 1)"), o.top = o.left = 0) : _ && (x.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), x.push("scale(1 -1)"), o.top = o.left = 0);
    let S;
    switch (m < 0 && (m -= Math.floor(m / 4) * 4), m = m % 4, m) {
      case 1:
        S = o.height / 2 + o.top, x.unshift(
          "rotate(90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
      case 2:
        x.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        S = o.width / 2 + o.left, x.unshift(
          "rotate(-90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
    }
    m % 2 === 1 && (o.left !== o.top && (S = o.left, o.left = o.top, o.top = S), o.width !== o.height && (S = o.width, o.width = o.height, o.height = S)), x.length && (l = '<g transform="' + x.join(" ") + '">' + l + "</g>");
  });
  const i = r.width, c = r.height, s = o.width, u = o.height;
  let a, f;
  i === null ? (f = c === null ? "1em" : c === "auto" ? u : c, a = Qt(f, s / u)) : (a = i === "auto" ? s : i, f = c === null ? Qt(a, u / s) : c === "auto" ? u : c);
  const d = {}, g = (p, x) => {
    Yr(x) || (d[p] = x.toString());
  };
  return g("width", a), g("height", f), d.viewBox = o.left.toString() + " " + o.top.toString() + " " + s.toString() + " " + u.toString(), {
    attributes: d,
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
    const i = typeof t == "function" ? t(l) : t + (to++).toString(), c = l.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])', "g"),
      "$1" + i + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const mt = /* @__PURE__ */ Object.create(null);
function ro(e, t) {
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
function oo(e, t) {
  const n = Ot(t);
  return n === null ? !1 : (zt[e] = n, !0);
}
function Lt(e) {
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
  const n = Lt(e);
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
const co = (e, t, n) => {
  const r = [], o = io(e, t), l = "icons";
  let i = {
    type: l,
    provider: e,
    prefix: t,
    icons: []
  }, c = 0;
  return n.forEach((s, u) => {
    c += s.length + 1, c >= o && u > 0 && (r.push(i), i = {
      type: l,
      provider: e,
      prefix: t,
      icons: []
    }, c = s.length), i.icons.push(s);
  }), r.push(i), r;
};
function ao(e) {
  if (typeof e == "string") {
    const t = Lt(e);
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
  let r = ao(t.provider);
  switch (t.type) {
    case "icons": {
      const l = t.prefix, c = t.icons.join(","), s = new URLSearchParams({
        icons: c
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
  prepare: co,
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
    const l = o.provider, i = o.prefix, c = o.name, s = n[l] || (n[l] = /* @__PURE__ */ Object.create(null)), u = s[i] || (s[i] = we(l, i));
    let a;
    c in u.icons ? a = t.loaded : i === "" || u.missing.has(c) ? a = t.missing : a = t.pending;
    const f = {
      provider: l,
      prefix: i,
      name: c
    };
    a.push(f);
  }), t;
}
function Rn(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function ho(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let n = !1;
    const r = e.provider, o = e.prefix;
    t.forEach((l) => {
      const i = l.icons, c = i.pending.length;
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
      }), i.pending.length !== c && (n || Rn([e], l.id), l.callback(
        i.loaded.slice(0),
        i.missing.slice(0),
        i.pending.slice(0),
        l.abort
      ));
    });
  }));
}
let po = 0;
function mo(e, t, n) {
  const r = po++, o = Rn.bind(null, n, r);
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
    const l = typeof o == "string" ? tt(o, t, n) : o;
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
    let y = e.resources.slice(0);
    for (i = []; y.length > 1; ) {
      const q = Math.floor(Math.random() * y.length);
      i.push(y[q]), y = y.slice(0, q).concat(y.slice(q + 1));
    }
    i = i.concat(y);
  } else
    i = e.resources.slice(l).concat(e.resources.slice(0, l));
  const c = Date.now();
  let s = "pending", u = 0, a, f = null, d = [], g = [];
  typeof r == "function" && g.push(r);
  function p() {
    f && (clearTimeout(f), f = null);
  }
  function x() {
    s === "pending" && (s = "aborted"), p(), d.forEach((y) => {
      y.status === "pending" && (y.status = "aborted");
    }), d = [];
  }
  function b(y, q) {
    q && (g = []), typeof y == "function" && g.push(y);
  }
  function _() {
    return {
      startTime: c,
      payload: t,
      status: s,
      queriesSent: u,
      queriesPending: d.length,
      subscribe: b,
      abort: x
    };
  }
  function m() {
    s = "failed", g.forEach((y) => {
      y(void 0, a);
    });
  }
  function S() {
    d.forEach((y) => {
      y.status === "pending" && (y.status = "aborted");
    }), d = [];
  }
  function k(y, q, M) {
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
      a = M, m();
      return;
    }
    if (R) {
      a = M, d.length || (i.length ? A() : m());
      return;
    }
    if (p(), S(), !e.random) {
      const U = e.resources.indexOf(y.resource);
      U !== -1 && U !== e.index && (e.index = U);
    }
    s = "completed", g.forEach((U) => {
      U(M);
    });
  }
  function A() {
    if (s !== "pending")
      return;
    p();
    const y = i.shift();
    if (y === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          p(), s === "pending" && (S(), m());
        }, e.timeout);
        return;
      }
      m();
      return;
    }
    const q = {
      status: "pending",
      resource: y,
      callback: (M, R) => {
        k(q, M, R);
      }
    };
    d.push(q), u++, f = setTimeout(A, e.rotate), n(y, t, q.callback);
  }
  return setTimeout(A), _;
}
function Fn(e) {
  const t = {
    ...vo,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((c) => c().status === "pending");
  }
  function o(c, s, u) {
    const a = yo(
      t,
      c,
      s,
      (f, d) => {
        r(), u && u(f, d);
      }
    );
    return n.push(a), a;
  }
  function l(c) {
    return n.find((s) => c(s)) || null;
  }
  return {
    query: o,
    find: l,
    setIndex: (c) => {
      t.index = c;
    },
    getIndex: () => t.index,
    cleanup: r
  };
}
function Xt() {
}
const ct = /* @__PURE__ */ Object.create(null);
function wo(e) {
  if (!ct[e]) {
    const t = Lt(e);
    if (!t)
      return;
    const n = Fn(t), r = {
      config: t,
      redundancy: n
    };
    ct[e] = r;
  }
  return ct[e];
}
function _o(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const l = bt(e);
    if (!l)
      return n(void 0, 424), Xt;
    o = l.send;
    const i = wo(e);
    i && (r = i.redundancy);
  } else {
    const l = Ot(e);
    if (l) {
      r = Fn(l);
      const i = e.resources ? e.resources[0] : "", c = bt(i);
      c && (o = c.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Xt) : r.query(t, o, n)().abort;
}
const Yt = "iconify2", Ne = "iconify", Vn = Ne + "-count", Kt = Ne + "-version", Wn = 36e5, xo = 168;
function vt(e, t) {
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
function yt(e, t) {
  return Nt(e, Vn, t.toString());
}
function wt(e) {
  return parseInt(vt(e, Vn)) || 0;
}
const rt = {
  local: !0,
  session: !0
}, Hn = {
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
  rt[e] = !1;
}
function qn(e, t) {
  const n = Dn(e);
  if (!n)
    return;
  const r = vt(n, Kt);
  if (r !== Yt) {
    if (r) {
      const c = wt(n);
      for (let s = 0; s < c; s++)
        $t(n, Ne + s.toString());
    }
    Nt(n, Kt, Yt), yt(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / Wn) - xo, l = (c) => {
    const s = Ne + c.toString(), u = vt(n, s);
    if (typeof u == "string") {
      try {
        const a = JSON.parse(u);
        if (typeof a == "object" && typeof a.cached == "number" && a.cached > o && typeof a.provider == "string" && typeof a.data == "object" && typeof a.data.prefix == "string" && // Valid item: run callback
        t(a, c))
          return !0;
      } catch {
      }
      $t(n, s);
    }
  };
  let i = wt(n);
  for (let c = i - 1; c >= 0; c--)
    l(c) || (c === i - 1 ? (i--, yt(n, i)) : Hn[e].add(c));
}
function Un() {
  if (!Bt) {
    ko(!0);
    for (const e in rt)
      qn(e, (t) => {
        const n = t.data, r = t.provider, o = n.prefix, l = we(
          r,
          o
        );
        if (!Pt(l, n).length)
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
    for (const r in rt)
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
    if (!rt[r] || !(o = Dn(r)))
      return;
    const l = Hn[r];
    let i;
    if (l.size)
      l.delete(i = Array.from(l).shift());
    else if (i = wt(o), !yt(o, i + 1))
      return;
    const c = {
      cached: Math.floor(Date.now() / Wn),
      provider: e.provider,
      data: t
    };
    return Nt(
      o,
      Ne + i.toString(),
      JSON.stringify(c)
    );
  }
  t.lastModified && !Co(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"));
}
function en() {
}
function Io(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, ho(e);
  }));
}
function Mo(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    delete e.iconsToLoad;
    let l;
    if (!o || !(l = bt(n)))
      return;
    l.prepare(n, r, o).forEach((c) => {
      _o(n, c, (s) => {
        if (typeof s != "object")
          c.icons.forEach((u) => {
            e.missing.add(u);
          });
        else
          try {
            const u = Pt(
              e,
              s
            );
            if (!u.length)
              return;
            const a = e.pendingIcons;
            a && u.forEach((f) => {
              a.delete(f);
            }), So(e, s);
          } catch (u) {
            console.error(u);
          }
        Io(e);
      });
    });
  }));
}
const Ao = (e, t) => {
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
  let i, c;
  return r.pending.forEach((s) => {
    const { provider: u, prefix: a } = s;
    if (a === c && u === i)
      return;
    i = u, c = a, l.push(we(u, a));
    const f = o[u] || (o[u] = /* @__PURE__ */ Object.create(null));
    f[a] || (f[a] = []);
  }), r.pending.forEach((s) => {
    const { provider: u, prefix: a, name: f } = s, d = we(u, a), g = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    g.has(f) || (g.add(f), o[u][a].push(f));
  }), l.forEach((s) => {
    const { provider: u, prefix: a } = s;
    o[u][a].length && Mo(s, o[u][a]);
  }), t ? mo(t, r, l) : en;
};
function jo(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], l = typeof o;
    r in Bn ? (o === null || o && (l === "string" || l === "number")) && (n[r] = o) : l === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
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
function zo(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Lo(e) {
  return "data:image/svg+xml," + zo(e);
}
function No(e) {
  return 'url("' + Lo(e) + '")';
}
const tn = {
  ...Gn,
  inline: !1
}, Bo = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Go = {
  display: "inline-block"
}, _t = {
  "background-color": "currentColor"
}, Zn = {
  "background-color": "transparent"
}, nn = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, rn = {
  "-webkit-mask": _t,
  mask: _t,
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
  const n = jo(tn, t), r = t.mode || "svg", o = r === "svg" ? { ...Bo } : {};
  e.body.indexOf("xlink:") === -1 && delete o["xmlns:xlink"];
  let l = typeof t.style == "string" ? t.style : "";
  for (let _ in t) {
    const m = t[_];
    if (m !== void 0)
      switch (_) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          n[_] = m === !0 || m === "true" || m === 1;
          break;
        case "flip":
          typeof m == "string" && Eo(n, m);
          break;
        case "color":
          l = l + (l.length > 0 && l.trim().slice(-1) !== ";" ? ";" : "") + "color: " + m + "; ";
          break;
        case "rotate":
          typeof m == "string" ? n[_] = Po(m) : typeof m == "number" && (n[_] = m);
          break;
        case "ariaHidden":
        case "aria-hidden":
          m !== !0 && m !== "true" && delete o["aria-hidden"];
          break;
        default:
          if (_.slice(0, 3) === "on:")
            break;
          tn[_] === void 0 && (o[_] = m);
      }
  }
  const i = Kr(e, n), c = i.attributes;
  if (n.inline && (l = "vertical-align: -0.125em; " + l), r === "svg") {
    Object.assign(o, c), l !== "" && (o.style = l);
    let _ = 0, m = t.id;
    return typeof m == "string" && (m = m.replace(/-/g, "_")), {
      svg: !0,
      attributes: o,
      body: no(i.body, m ? () => m + "ID" + _++ : "iconifySvelte")
    };
  }
  const { body: s, width: u, height: a } = e, f = r === "mask" || (r === "bg" ? !1 : s.indexOf("currentColor") !== -1), d = Oo(s, {
    ...c,
    width: u + "",
    height: a + ""
  }), p = {
    "--svg": No(d)
  }, x = (_) => {
    const m = c[_];
    m && (p[_] = Ro(m));
  };
  x("width"), x("height"), Object.assign(p, Go, f ? _t : Zn);
  let b = "";
  for (const _ in p)
    b += _ + ": " + p[_] + ";";
  return o.style = b + l, {
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
    return t.name = "", l(), { data: { ...nt, ...e } };
  let i;
  if (typeof e != "string" || (i = tt(e, !1, !0)) === null)
    return l(), null;
  const c = Ur(i);
  if (!c)
    return n && (!t.loading || t.loading.name !== e) && (l(), t.name = "", t.loading = {
      name: e,
      abort: Ao([i], r)
    }), null;
  l(), t.name !== e && (t.name = e, o && !t.destroyed && o(e));
  const s = ["iconify"];
  return i.prefix !== "" && s.push("iconify--" + i.prefix), i.provider !== "" && s.push("iconify--" + i.provider), { data: c, classes: s };
}
function Wo(e, t) {
  return e ? Fo({
    ...nt,
    ...e
  }, t) : null;
}
function on(e) {
  let t;
  function n(l, i) {
    return (
      /*data*/
      l[0].svg ? Do : Ho
    );
  }
  let r = n(e), o = r(e);
  return {
    c() {
      o.c(), t = me();
    },
    m(l, i) {
      o.m(l, i), z(l, t, i);
    },
    p(l, i) {
      r === (r = n(l)) && o ? o.p(l, i) : (o.d(1), o = r(l), o && (o.c(), o.m(t.parentNode, t)));
    },
    d(l) {
      l && O(t), o.d(l);
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
      t = w("span"), dt(t, r);
    },
    m(o, l) {
      z(o, t, l);
    },
    p(o, l) {
      dt(t, r = Re(n, [l & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && O(t);
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
      t = dr("svg"), Wt(t, o);
    },
    m(l, i) {
      z(l, t, i), t.innerHTML = n;
    },
    p(l, i) {
      i & /*data*/
      1 && n !== (n = /*data*/
      l[0].body + "") && (t.innerHTML = n), Wt(t, o = Re(r, [i & /*data*/
      1 && /*data*/
      l[0].attributes]));
    },
    d(l) {
      l && O(t);
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
      n && n.c(), t = me();
    },
    m(r, o) {
      n && n.m(r, o), z(r, t, o);
    },
    p(r, [o]) {
      /*data*/
      r[0] ? n ? n.p(r, o) : (n = on(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: D,
    o: D,
    d(r) {
      r && O(t), n && n.d(r);
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
  const c = (u) => {
    typeof t.onLoad == "function" && t.onLoad(u), Ie()("load", { icon: u });
  };
  function s() {
    n(3, l++, l);
  }
  return Ge(() => {
    n(2, o = !0);
  }), vr(() => {
    n(1, r.destroyed = !0, r), r.loading && (r.loading.abort(), n(1, r.loading = null, r));
  }), e.$$set = (u) => {
    n(6, t = oe(oe({}, t), Je(u)));
  }, e.$$.update = () => {
    {
      const u = Vo(t.icon, r, o, s, c);
      n(0, i = u ? Wo(u.data, t) : null), i && u.classes && n(
        0,
        i.attributes.class = (typeof t.class == "string" ? t.class + " " : "") + u.classes.join(" "),
        i
      );
    }
  }, t = Je(t), [i, r, o, l];
}
class Fe extends te {
  constructor(t) {
    super(), ee(this, t, Uo, qo, Y, {});
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
var Gt = "-";
function Jo(e) {
  var t = Yo(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function l(c) {
    var s = c.split(Gt);
    return s[0] === "" && s.length !== 1 && s.shift(), Xn(s, t) || Xo(c);
  }
  function i(c, s) {
    var u = n[c] || [];
    return s && o[c] ? [].concat(u, o[c]) : u;
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
    var l = e.join(Gt);
    return (i = t.validators.find(function(c) {
      var s = c.validator;
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
    var i = l[0], c = l[1];
    xt(c, r, i, t);
  }), r;
}
function xt(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var l = o === "" ? t : sn(t, o);
      l.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Ko(o)) {
        xt(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(function(i) {
      var c = i[0], s = i[1];
      xt(s, sn(t, c), n, r);
    });
  });
}
function sn(e, t) {
  var n = e;
  return t.split(Gt).forEach(function(r) {
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
      return typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(function(c) {
        var s = c[0], u = c[1];
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
      var c = n.get(i);
      if (c !== void 0)
        return c;
      if ((c = r.get(i)) !== void 0)
        return o(i, c), c;
    },
    set: function(i, c) {
      n.has(i) ? n.set(i, c) : o(i, c);
    }
  };
}
var Yn = "!";
function tl(e) {
  var t = e.separator || ":", n = t.length === 1, r = t[0], o = t.length;
  return function(i) {
    for (var c = [], s = 0, u = 0, a, f = 0; f < i.length; f++) {
      var d = i[f];
      if (s === 0) {
        if (d === r && (n || i.slice(f, f + o) === t)) {
          c.push(i.slice(u, f)), u = f + o;
          continue;
        }
        if (d === "/") {
          a = f;
          continue;
        }
      }
      d === "[" ? s++ : d === "]" && s--;
    }
    var g = c.length === 0 ? i : i.substring(u), p = g.startsWith(Yn), x = p ? g.substring(1) : g, b = a && a > u ? a - u : void 0;
    return {
      modifiers: c,
      hasImportantModifier: p,
      baseClassName: x,
      maybePostfixModifierPosition: b
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
    var c = n(i), s = c.modifiers, u = c.hasImportantModifier, a = c.baseClassName, f = c.maybePostfixModifierPosition, d = r(f ? a.substring(0, f) : a), g = !!f;
    if (!d) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (d = r(a), !d)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      g = !1;
    }
    var p = nl(s).join(":"), x = u ? p + Yn : p;
    return {
      isTailwindClass: !0,
      modifierId: x,
      classGroupId: d,
      originalClassName: i,
      hasPostfixModifier: g
    };
  }).reverse().filter(function(i) {
    if (!i.isTailwindClass)
      return !0;
    var c = i.modifierId, s = i.classGroupId, u = i.hasPostfixModifier, a = c + s;
    return l.has(a) ? !1 : (l.add(a), o(s, u).forEach(function(f) {
      return l.add(c + f);
    }), !0);
  }).reverse().map(function(i) {
    return i.originalClassName;
  }).join(" ");
}
function kt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, l, i = c;
  function c(u) {
    var a = t[0], f = t.slice(1), d = f.reduce(function(g, p) {
      return p(g);
    }, a());
    return r = rl(d), o = r.cache.get, l = r.cache.set, i = s, s(u);
  }
  function s(u) {
    var a = o(u);
    if (a)
      return a;
    var f = ll(u, r);
    return l(u, f), f;
  }
  return function() {
    return i(Qo.apply(null, arguments));
  };
}
function W(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Kn = /^\[(?:([a-z-]+):)?(.+)\]$/i, il = /^\d+\/\d+$/, sl = /* @__PURE__ */ new Set(["px", "full", "screen"]), cl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, al = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ul = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ie(e) {
  return ye(e) || sl.has(e) || il.test(e) || Ct(e);
}
function Ct(e) {
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
function De(e) {
  return _e(e, "number", ye);
}
function ye(e) {
  return !Number.isNaN(Number(e));
}
function hl(e) {
  return e.endsWith("%") && ye(e.slice(0, -1));
}
function Ae(e) {
  return cn(e) || _e(e, "number", cn);
}
function P(e) {
  return Kn.test(e);
}
function je() {
  return !0;
}
function ge(e) {
  return cl.test(e);
}
function pl(e) {
  return _e(e, "", vl);
}
function _e(e, t, n) {
  var r = Kn.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function ml(e) {
  return al.test(e);
}
function $n() {
  return !1;
}
function bl(e) {
  return e.startsWith("url(");
}
function cn(e) {
  return Number.isInteger(Number(e));
}
function vl(e) {
  return ul.test(e);
}
function St() {
  var e = W("colors"), t = W("spacing"), n = W("blur"), r = W("brightness"), o = W("borderColor"), l = W("borderRadius"), i = W("borderSpacing"), c = W("borderWidth"), s = W("contrast"), u = W("grayscale"), a = W("hueRotate"), f = W("invert"), d = W("gap"), g = W("gradientColorStops"), p = W("gradientColorStopPositions"), x = W("inset"), b = W("margin"), _ = W("opacity"), m = W("padding"), S = W("saturate"), k = W("scale"), A = W("sepia"), y = W("skew"), q = W("space"), M = W("translate"), R = function() {
    return ["auto", "contain", "none"];
  }, U = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, I = function() {
    return ["auto", P, t];
  }, C = function() {
    return [P, t];
  }, T = function() {
    return ["", ie];
  }, L = function() {
    return ["auto", ye, P];
  }, N = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, G = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, V = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Z = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, Q = function() {
    return ["", "0", P];
  }, fe = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, ne = function() {
    return [ye, De];
  }, de = function() {
    return [ye, P];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [je],
      spacing: [ie],
      blur: ["none", "", ge, P],
      brightness: ne(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ge, P],
      borderSpacing: C(),
      borderWidth: T(),
      contrast: ne(),
      grayscale: Q(),
      hueRotate: de(),
      invert: Q(),
      gap: C(),
      gradientColorStops: [e],
      gradientColorStopPositions: [hl, Ct],
      inset: I(),
      margin: I(),
      opacity: ne(),
      padding: C(),
      saturate: ne(),
      scale: ne(),
      sepia: Q(),
      skew: de(),
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
        aspect: ["auto", "square", "video", P]
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
        object: [].concat(N(), [P])
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
        z: ["auto", Ae]
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
        flex: ["1", "auto", "initial", "none", P]
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
        }, P]
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
        }, P]
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
        "auto-cols": ["auto", "min", "max", "fr", P]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", P]
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
        p: [m]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [m]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [m]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [m]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [m]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [m]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [m]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [m]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [m]
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
        w: ["auto", "min", "max", "fit", P, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", P, ie]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ge]
        }, ge, P]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [P, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", P, ie]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [P, t, "min", "max", "fit"]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", P]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ye, De]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", P, ie]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", P]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", P]
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
        "underline-offset": ["auto", P, ie]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", P]
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
        content: ["none", P]
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
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
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
        "divide-x": [c]
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
        "divide-y": [c]
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
        "outline-offset": [P, ie]
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
        ring: T()
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
        shadow: ["", "inner", "none", ge, pl]
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
        "drop-shadow": ["", "none", ge, P]
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
        "hue-rotate": [a]
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
        sepia: [A]
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
        "backdrop-hue-rotate": [a]
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
        "backdrop-saturate": [S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [A]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", P]
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
        ease: ["linear", "in", "out", "in-out", P]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", P]
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
        scale: [k]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [k]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [k]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ae, P]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", P]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", P]
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
        "will-change": ["auto", "scroll", "contents", "transform", P]
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
        stroke: [ie, De]
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
var wl = Object.prototype.hasOwnProperty, _l = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function er(e, t, n) {
  if (!wl.call(e, t) || _l.has(typeof n) || n === null) {
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
  return typeof e == "function" ? kt.apply(void 0, [St, e].concat(n)) : kt.apply(void 0, [function() {
    return yl(St(), e);
  }].concat(n));
}
var tr = /* @__PURE__ */ kt(St);
function le(...e) {
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
function an(e) {
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
    (e[0] ? "a" : "button") && at(e)
  );
  return {
    c() {
      o && o.c(), n = me();
    },
    m(l, i) {
      o && o.m(l, i), z(l, n, i), r = !0;
    },
    p(l, i) {
      /*href*/
      l[0], t ? Y(
        t,
        /*href*/
        l[0] ? "a" : "button"
      ) ? (o.d(1), o = at(l), t = /*href*/
      l[0] ? "a" : "button", o.c(), o.m(n.parentNode, n)) : o.p(l, i) : (o = at(l), t = /*href*/
      l[0] ? "a" : "button", o.c(), o.m(n.parentNode, n));
    },
    i(l) {
      r || (j(o, l), r = !0);
    },
    o(l) {
      B(o, l), r = !1;
    },
    d(l) {
      l && O(n), o && o.d(l);
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
      o && o.c(), n = me();
    },
    m(l, i) {
      o && o.m(l, i), z(l, n, i), r = !0;
    },
    p(l, i) {
      /*href*/
      l[0], t ? Y(
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
      B(o, l), r = !1;
    },
    d(l) {
      l && O(n), o && o.d(l);
    }
  };
}
function at(e) {
  let t, n, r, o, l;
  const i = (
    /*#slots*/
    e[5].default
  ), c = Mt(
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
  for (let a = 0; a < s.length; a += 1)
    u = oe(u, s[a]);
  return {
    c() {
      t = w(
        /*href*/
        e[0] ? "a" : "button"
      ), c && c.c(), Ye(
        /*href*/
        e[0] ? "a" : "button"
      )(t, u);
    },
    m(a, f) {
      z(a, t, f), c && c.m(t, null), r = !0, o || (l = [
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
      ], o = !0);
    },
    p(a, f) {
      c && c.p && (!r || f & /*$$scope*/
      16) && jt(
        c,
        i,
        a,
        /*$$scope*/
        a[4],
        r ? At(
          i,
          /*$$scope*/
          a[4],
          f,
          null
        ) : Tt(
          /*$$scope*/
          a[4]
        ),
        null
      ), Ye(
        /*href*/
        a[0] ? "a" : "button"
      )(t, u = Re(s, [
        (!r || f & /*href, type*/
        3 && n !== (n = /*href*/
        a[0] ? void 0 : (
          /*type*/
          a[1]
        ))) && { type: n },
        (!r || f & /*href*/
        1) && { href: (
          /*href*/
          a[0]
        ) },
        { tabindex: "0" },
        f & /*$$restProps*/
        8 && /*$$restProps*/
        a[3]
      ]));
    },
    i(a) {
      r || (j(c, a), r = !0);
    },
    o(a) {
      B(c, a), r = !1;
    },
    d(a) {
      a && O(t), c && c.d(a), o = !1, he(l);
    }
  };
}
function ut(e) {
  let t, n, r, o, l, i;
  const c = (
    /*#slots*/
    e[5].default
  ), s = Mt(
    c,
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
  ], a = {};
  for (let f = 0; f < u.length; f += 1)
    a = oe(a, u[f]);
  return {
    c() {
      t = w(
        /*href*/
        e[0] ? "a" : "button"
      ), s && s.c(), Ye(
        /*href*/
        e[0] ? "a" : "button"
      )(t, a);
    },
    m(f, d) {
      z(f, t, d), s && s.m(t, null), o = !0, l || (i = [
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
        fr(r = kl.call(null, t, { builders: (
          /*builders*/
          e[2]
        ) }))
      ], l = !0);
    },
    p(f, d) {
      s && s.p && (!o || d & /*$$scope*/
      16) && jt(
        s,
        c,
        f,
        /*$$scope*/
        f[4],
        o ? At(
          c,
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
      )(t, a = Re(u, [
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
      ])), r && Be(r.update) && d & /*builders*/
      4 && r.update.call(null, { builders: (
        /*builders*/
        f[2]
      ) });
    },
    i(f) {
      o || (j(s, f), o = !0);
    },
    o(f) {
      B(s, f), o = !1;
    },
    d(f) {
      f && O(t), s && s.d(f), l = !1, he(i);
    }
  };
}
function Il(e) {
  let t, n, r, o;
  const l = [Sl, Cl], i = [];
  function c(s, u) {
    return (
      /*builders*/
      s[2] && /*builders*/
      s[2].length ? 0 : 1
    );
  }
  return t = c(e), n = i[t] = l[t](e), {
    c() {
      n.c(), r = me();
    },
    m(s, u) {
      i[t].m(s, u), z(s, r, u), o = !0;
    },
    p(s, [u]) {
      let a = t;
      t = c(s), t === a ? i[t].p(s, u) : (se(), B(i[a], 1, 1, () => {
        i[a] = null;
      }), ce(), n = i[t], n ? n.p(s, u) : (n = i[t] = l[t](s), n.c()), j(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      o || (j(n), o = !0);
    },
    o(s) {
      B(n), o = !1;
    },
    d(s) {
      s && O(r), i[t].d(s);
    }
  };
}
function Ml(e, t, n) {
  const r = ["href", "type", "builders"];
  let o = Xe(t, r), { $$slots: l = {}, $$scope: i } = t, { href: c = void 0 } = t, { type: s = void 0 } = t, { builders: u = [] } = t;
  function a(y) {
    re.call(this, e, y);
  }
  function f(y) {
    re.call(this, e, y);
  }
  function d(y) {
    re.call(this, e, y);
  }
  function g(y) {
    re.call(this, e, y);
  }
  function p(y) {
    re.call(this, e, y);
  }
  function x(y) {
    re.call(this, e, y);
  }
  function b(y) {
    re.call(this, e, y);
  }
  function _(y) {
    re.call(this, e, y);
  }
  function m(y) {
    re.call(this, e, y);
  }
  function S(y) {
    re.call(this, e, y);
  }
  function k(y) {
    re.call(this, e, y);
  }
  function A(y) {
    re.call(this, e, y);
  }
  return e.$$set = (y) => {
    t = oe(oe({}, t), Je(y)), n(3, o = Xe(t, r)), "href" in y && n(0, c = y.href), "type" in y && n(1, s = y.type), "builders" in y && n(2, u = y.builders), "$$scope" in y && n(4, i = y.$$scope);
  }, [
    c,
    s,
    u,
    o,
    i,
    l,
    a,
    f,
    d,
    g,
    p,
    x,
    b,
    _,
    m,
    S,
    k,
    A
  ];
}
let Al = class extends te {
  constructor(t) {
    super(), ee(this, t, Ml, Il, Y, { href: 0, type: 1, builders: 2 });
  }
};
function jl(e) {
  let t;
  const n = (
    /*#slots*/
    e[5].default
  ), r = Mt(
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
      256) && jt(
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
        ) : Tt(
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
      B(r, o), t = !1;
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
      class: le(gn({
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
    $$slots: { default: [jl] },
    $$scope: { ctx: e }
  };
  for (let l = 0; l < r.length; l += 1)
    o = oe(o, r[l]);
  return t = new Al({ props: o }), t.$on(
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
    m(l, i) {
      ae(t, l, i), n = !0;
    },
    p(l, [i]) {
      const c = i & /*builders, cn, buttonVariants, variant, size, className, $$restProps*/
      31 ? Re(r, [
        i & /*builders*/
        8 && { builders: (
          /*builders*/
          l[3]
        ) },
        i & /*cn, buttonVariants, variant, size, className*/
        7 && {
          class: le(gn({
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
      256 && (c.$$scope = { dirty: i, ctx: l }), t.$set(c);
    },
    i(l) {
      n || (j(t.$$.fragment, l), n = !0);
    },
    o(l) {
      B(t.$$.fragment, l), n = !1;
    },
    d(l) {
      ue(t, l);
    }
  };
}
function El(e, t, n) {
  const r = ["class", "variant", "size", "builders"];
  let o = Xe(t, r), { $$slots: l = {}, $$scope: i } = t, { class: c = void 0 } = t, { variant: s = "default" } = t, { size: u = "default" } = t, { builders: a = [] } = t;
  function f(g) {
    re.call(this, e, g);
  }
  function d(g) {
    re.call(this, e, g);
  }
  return e.$$set = (g) => {
    t = oe(oe({}, t), Je(g)), n(4, o = Xe(t, r)), "class" in g && n(0, c = g.class), "variant" in g && n(1, s = g.variant), "size" in g && n(2, u = g.size), "builders" in g && n(3, a = g.builders), "$$scope" in g && n(8, i = g.$$scope);
  }, [
    c,
    s,
    u,
    a,
    o,
    l,
    f,
    d,
    i
  ];
}
class Pl extends te {
  constructor(t) {
    super(), ee(this, t, El, Tl, Y, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
}
var un = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, $ = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, Ol = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function nr(e, t) {
  e.forEach(function(n) {
    Array.isArray(n) ? nr(n, t) : t.push(n);
  });
}
function rr(e) {
  let t = [];
  return nr(e, t), t;
}
var zl = (...e) => rr(e).filter(Boolean), or = (e, t) => {
  let n = {}, r = Object.keys(e), o = Object.keys(t);
  for (let l of r)
    if (o.includes(l)) {
      let i = e[l], c = t[l];
      typeof i == "object" && typeof c == "object" ? n[l] = or(i, c) : n[l] = c + " " + i;
    } else
      n[l] = e[l];
  for (let l of o)
    r.includes(l) || (n[l] = t[l]);
  return n;
}, fn = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), Ll = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, lr = (e) => e || void 0, $e = (...e) => lr(rr(e).filter(Boolean).join(" ")), ft = null, et = {}, It = !1, Te = (...e) => (t) => t.twMerge ? ((!ft || It) && (It = !1, ft = $(et) ? tr : xl(et)), lr(ft($e(e)))) : $e(e), dn = (e, t) => {
  for (let n in t)
    e.hasOwnProperty(n) ? e[n] = $e(e[n], t[n]) : e[n] = t[n];
  return e;
}, Nl = (e, t) => {
  let { extend: n = null, slots: r = {}, variants: o = {}, compoundVariants: l = [], compoundSlots: i = [], defaultVariants: c = {} } = e, s = { ...Ll, ...t }, u = n != null && n.base ? $e(n.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, a = n != null && n.variants && !$(n.variants) ? or(o, n.variants) : o, f = n != null && n.defaultVariants && !$(n.defaultVariants) ? { ...n.defaultVariants, ...c } : c;
  !$(s.twMergeConfig) && !Ol(s.twMergeConfig, et) && (It = !0, et = s.twMergeConfig);
  let d = $(r) ? {} : { base: e == null ? void 0 : e.base, ...r }, g = $(n == null ? void 0 : n.slots) ? d : dn(n == null ? void 0 : n.slots, $(d) ? { base: e == null ? void 0 : e.base } : d), p = (b) => {
    if ($(a) && $(r) && $(n == null ? void 0 : n.slots))
      return Te(u, b == null ? void 0 : b.class, b == null ? void 0 : b.className)(s);
    if (l && !Array.isArray(l))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof l}`);
    if (i && !Array.isArray(i))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);
    let _ = (I, C, T = [], L) => {
      let N = T;
      if (typeof C == "string")
        N = N.concat(fn(C).split(" ").map((G) => `${I}:${G}`));
      else if (Array.isArray(C))
        N = N.concat(C.reduce((G, V) => G.concat(`${I}:${V}`), []));
      else if (typeof C == "object" && typeof L == "string") {
        for (let G in C)
          if (C.hasOwnProperty(G) && G === L) {
            let V = C[G];
            if (V && typeof V == "string") {
              let Z = fn(V);
              N[L] ? N[L] = N[L].concat(Z.split(" ").map((Q) => `${I}:${Q}`)) : N[L] = Z.split(" ").map((Q) => `${I}:${Q}`);
            } else
              Array.isArray(V) && V.length > 0 && (N[L] = V.reduce((Z, Q) => Z.concat(`${I}:${Q}`), []));
          }
      }
      return N;
    }, m = (I, C = a, T = null, L = null) => {
      var N;
      let G = C[I];
      if (!G || $(G))
        return null;
      let V = (N = L == null ? void 0 : L[I]) != null ? N : b == null ? void 0 : b[I];
      if (V === null)
        return null;
      let Z = un(V), Q = Array.isArray(s.responsiveVariants) && s.responsiveVariants.length > 0 || s.responsiveVariants === !0, fe = f == null ? void 0 : f[I], ne = [];
      if (typeof Z == "object" && Q)
        for (let [X, Rt] of Object.entries(Z)) {
          let sr = G[Rt];
          if (X === "initial") {
            fe = Rt;
            continue;
          }
          Array.isArray(s.responsiveVariants) && !s.responsiveVariants.includes(X) || (ne = _(X, sr, ne, T));
        }
      let de = G[Z] || G[un(fe)];
      return typeof ne == "object" && typeof T == "string" && ne[T] ? dn(ne, de) : ne.length > 0 ? (ne.push(de), ne) : de;
    }, S = () => a ? Object.keys(a).map((I) => m(I, a)) : null, k = (I, C) => {
      if (!a || typeof a != "object")
        return null;
      let T = new Array();
      for (let L in a) {
        let N = m(L, a, I, C), G = I === "base" && typeof N == "string" ? N : N && N[I];
        G && (T[T.length] = G);
      }
      return T;
    }, A = {};
    for (let I in b)
      b[I] !== void 0 && (A[I] = b[I]);
    let y = (I, C) => {
      var T;
      let L = typeof (b == null ? void 0 : b[I]) == "object" ? { [I]: (T = b[I]) == null ? void 0 : T.initial } : {};
      return { ...f, ...A, ...L, ...C };
    }, q = (I = [], C) => {
      let T = [];
      for (let { class: L, className: N, ...G } of I) {
        let V = !0;
        for (let [Z, Q] of Object.entries(G)) {
          let fe = y(Z, C);
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
        V && (L && T.push(L), N && T.push(N));
      }
      return T;
    }, M = (I) => {
      let C = q(l, I), T = q(n == null ? void 0 : n.compoundVariants, I);
      return zl(T, C);
    }, R = (I) => {
      let C = M(I);
      if (!Array.isArray(C))
        return C;
      let T = {};
      for (let L of C)
        if (typeof L == "string" && (T.base = Te(T.base, L)(s)), typeof L == "object")
          for (let [N, G] of Object.entries(L))
            T[N] = Te(T[N], G)(s);
      return T;
    }, U = (I) => {
      if (i.length < 1)
        return null;
      let C = {};
      for (let { slots: T = [], class: L, className: N, ...G } of i) {
        if (!$(G)) {
          let V = !0;
          for (let Z of Object.keys(G)) {
            let Q = y(Z, I)[Z];
            if (Q === void 0 || Q !== G[Z]) {
              V = !1;
              break;
            }
          }
          if (!V)
            continue;
        }
        for (let V of T)
          C[V] = C[V] || [], C[V].push([L, N]);
      }
      return C;
    };
    if (!$(r) || !$(n == null ? void 0 : n.slots)) {
      let I = {};
      if (typeof g == "object" && !$(g))
        for (let C of Object.keys(g))
          I[C] = (T) => {
            var L, N;
            return Te(g[C], k(C, T), ((L = R(T)) != null ? L : [])[C], ((N = U(T)) != null ? N : [])[C], T == null ? void 0 : T.class, T == null ? void 0 : T.className)(s);
          };
      return I;
    }
    return Te(u, S(), M(), b == null ? void 0 : b.class, b == null ? void 0 : b.className)(s);
  }, x = () => {
    if (!(!a || typeof a != "object"))
      return Object.keys(a);
  };
  return p.variantKeys = x(), p.extend = n, p.base = u, p.slots = g, p.variants = a, p.defaultVariants = f, p.compoundSlots = i, p.compoundVariants = l, p;
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
function hn(e, t, n) {
  const r = e.slice();
  return r[3] = t[n].title, r[4] = t[n].items, r[6] = n, r;
}
function pn(e, t, n) {
  const r = e.slice();
  return r[3] = t[n].title, r[7] = t[n].icon, r[8] = t[n].url, r[10] = n, r;
}
function Bl(e) {
  let t, n, r = (
    /*title*/
    e[3] + ""
  ), o, l, i;
  return t = new Fe({
    props: {
      class: "mr-2 h-4 w-4",
      icon: (
        /*icon*/
        e[7]
      )
    }
  }), {
    c() {
      be(t.$$.fragment), n = E(), o = F(r), l = E();
    },
    m(c, s) {
      ae(t, c, s), z(c, n, s), z(c, o, s), z(c, l, s), i = !0;
    },
    p(c, s) {
      const u = {};
      s & /*menus*/
      2 && (u.icon = /*icon*/
      c[7]), t.$set(u), (!i || s & /*menus*/
      2) && r !== (r = /*title*/
      c[3] + "") && H(o, r);
    },
    i(c) {
      i || (j(t.$$.fragment, c), i = !0);
    },
    o(c) {
      B(t.$$.fragment, c), i = !1;
    },
    d(c) {
      c && (O(n), O(o), O(l)), ue(t, c);
    }
  };
}
function mn(e) {
  let t, n;
  return t = new Pl({
    props: {
      variant: "secondary",
      class: "w-full justify-start",
      $$slots: { default: [Bl] },
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
    m(r, o) {
      ae(t, r, o), n = !0;
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
      B(t.$$.fragment, r), n = !1;
    },
    d(r) {
      ue(t, r);
    }
  };
}
function bn(e) {
  let t, n, r = (
    /*title*/
    e[3] + ""
  ), o, l, i, c, s, u = K(
    /*items*/
    e[4]
  ), a = [];
  for (let d = 0; d < u.length; d += 1)
    a[d] = mn(pn(e, u, d));
  const f = (d) => B(a[d], 1, 1, () => {
    a[d] = null;
  });
  return {
    c() {
      t = w("div"), n = w("h2"), o = F(r), l = E(), i = w("div");
      for (let d = 0; d < a.length; d += 1)
        a[d].c();
      c = E(), v(n, "class", "mb-2 px-4 text-lg font-semibold tracking-tight"), v(i, "class", "space-y-1"), v(t, "class", "px-3 py-2");
    },
    m(d, g) {
      z(d, t, g), h(t, n), h(n, o), h(t, l), h(t, i);
      for (let p = 0; p < a.length; p += 1)
        a[p] && a[p].m(i, null);
      h(t, c), s = !0;
    },
    p(d, g) {
      if ((!s || g & /*menus*/
      2) && r !== (r = /*title*/
      d[3] + "") && H(o, r), g & /*onClick, menus*/
      6) {
        u = K(
          /*items*/
          d[4]
        );
        let p;
        for (p = 0; p < u.length; p += 1) {
          const x = pn(d, u, p);
          a[p] ? (a[p].p(x, g), j(a[p], 1)) : (a[p] = mn(x), a[p].c(), j(a[p], 1), a[p].m(i, null));
        }
        for (se(), p = u.length; p < a.length; p += 1)
          f(p);
        ce();
      }
    },
    i(d) {
      if (!s) {
        for (let g = 0; g < u.length; g += 1)
          j(a[g]);
        s = !0;
      }
    },
    o(d) {
      a = a.filter(Boolean);
      for (let g = 0; g < a.length; g += 1)
        B(a[g]);
      s = !1;
    },
    d(d) {
      d && O(t), pe(a, d);
    }
  };
}
function Gl(e) {
  let t, n, r, o, l = K(
    /*menus*/
    e[1]
  ), i = [];
  for (let s = 0; s < l.length; s += 1)
    i[s] = bn(hn(e, l, s));
  const c = (s) => B(i[s], 1, 1, () => {
    i[s] = null;
  });
  return {
    c() {
      t = w("div"), n = w("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      v(n, "class", "space-y-4 py-4"), v(t, "class", r = le(
        "pb-12",
        /*className*/
        e[0]
      ));
    },
    m(s, u) {
      z(s, t, u), h(t, n);
      for (let a = 0; a < i.length; a += 1)
        i[a] && i[a].m(n, null);
      o = !0;
    },
    p(s, [u]) {
      if (u & /*menus, onClick*/
      6) {
        l = K(
          /*menus*/
          s[1]
        );
        let a;
        for (a = 0; a < l.length; a += 1) {
          const f = hn(s, l, a);
          i[a] ? (i[a].p(f, u), j(i[a], 1)) : (i[a] = bn(f), i[a].c(), j(i[a], 1), i[a].m(n, null));
        }
        for (se(), a = l.length; a < i.length; a += 1)
          c(a);
        ce();
      }
      (!o || u & /*className*/
      1 && r !== (r = le(
        "pb-12",
        /*className*/
        s[0]
      ))) && v(t, "class", r);
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
        B(i[u]);
      o = !1;
    },
    d(s) {
      s && O(t), pe(i, s);
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
class fi extends te {
  constructor(t) {
    super(), ee(this, t, Rl, Gl, Y, { class: 0, menus: 1, onClick: 2 });
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
      t = w("div"), n = F("content"), v(t, "id", r = `${/*depth*/
      e[1]}${/*i*/
      e[8]}-`), v(t, "class", o = Vt(
        /*width*/
        e[4]
      ) + " svelte-1g8c40z");
    },
    m(l, i) {
      z(l, t, i), h(t, n);
    },
    p(l, i) {
      i & /*depth*/
      2 && r !== (r = `${/*depth*/
      l[1]}${/*i*/
      l[8]}-`) && v(t, "id", r), i & /*grids*/
      1 && o !== (o = Vt(
        /*width*/
        l[4]
      ) + " svelte-1g8c40z") && v(t, "class", o);
    },
    i: D,
    o: D,
    d(l) {
      l && O(t);
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
      t = w("div"), be(n.$$.fragment), r = E(), v(t, "class", "flex w-full"), Se(
        t,
        "height",
        /*height*/
        e[3] || "200px"
      );
    },
    m(l, i) {
      z(l, t, i), ae(n, t, null), h(t, r), o = !0;
    },
    p(l, i) {
      const c = {};
      i & /*grids*/
      1 && (c.grids = /*items*/
      l[5]), i & /*depth*/
      2 && (c.depth = `${/*depth*/
      l[1]}${/*i*/
      l[8]}-`), n.$set(c), i & /*grids*/
      1 && Se(
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
      B(n.$$.fragment, l), o = !1;
    },
    d(l) {
      l && O(t), ue(n);
    }
  };
}
function yn(e) {
  let t, n, r, o;
  const l = [Vl, Fl], i = [];
  function c(s, u) {
    return (
      /*type*/
      s[2] === "row" ? 0 : 1
    );
  }
  return t = c(e), n = i[t] = l[t](e), {
    c() {
      n.c(), r = me();
    },
    m(s, u) {
      i[t].m(s, u), z(s, r, u), o = !0;
    },
    p(s, u) {
      let a = t;
      t = c(s), t === a ? i[t].p(s, u) : (se(), B(i[a], 1, 1, () => {
        i[a] = null;
      }), ce(), n = i[t], n ? n.p(s, u) : (n = i[t] = l[t](s), n.c()), j(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      o || (j(n), o = !0);
    },
    o(s) {
      B(n), o = !1;
    },
    d(s) {
      s && O(r), i[t].d(s);
    }
  };
}
function Wl(e) {
  let t, n, r = K(
    /*grids*/
    e[0]
  ), o = [];
  for (let i = 0; i < r.length; i += 1)
    o[i] = yn(vn(e, r, i));
  const l = (i) => B(o[i], 1, 1, () => {
    o[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      t = me();
    },
    m(i, c) {
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(i, c);
      z(i, t, c), n = !0;
    },
    p(i, [c]) {
      if (c & /*grids, depth*/
      3) {
        r = K(
          /*grids*/
          i[0]
        );
        let s;
        for (s = 0; s < r.length; s += 1) {
          const u = vn(i, r, s);
          o[s] ? (o[s].p(u, c), j(o[s], 1)) : (o[s] = yn(u), o[s].c(), j(o[s], 1), o[s].m(t.parentNode, t));
        }
        for (se(), s = r.length; s < o.length; s += 1)
          l(s);
        ce();
      }
    },
    i(i) {
      if (!n) {
        for (let c = 0; c < r.length; c += 1)
          j(o[c]);
        n = !0;
      }
    },
    o(i) {
      o = o.filter(Boolean);
      for (let c = 0; c < o.length; c += 1)
        B(o[c]);
      n = !1;
    },
    d(i) {
      i && O(t), pe(o, i);
    }
  };
}
function Hl(e, t, n) {
  let { grids: r = [] } = t, { depth: o = "" } = t;
  return e.$$set = (l) => {
    "grids" in l && n(0, r = l.grids), "depth" in l && n(1, o = l.depth);
  }, [r, o];
}
class ir extends te {
  constructor(t) {
    super(), ee(this, t, Hl, Wl, Y, { grids: 0, depth: 1 });
  }
}
function wn(e, t, n) {
  const r = e.slice();
  return r[8] = t[n].type, r[9] = t[n].title, r[10] = t[n].url, r[11] = t[n].icon, r[12] = t[n].items, r;
}
function _n(e, t, n) {
  const r = e.slice();
  return r[9] = t[n].title, r[10] = t[n].url, r;
}
function Dl(e) {
  let t, n, r, o, l = (
    /*title*/
    e[9] + ""
  ), i, c, s, u, a;
  r = new Fe({ props: { icon: (
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
      t = w("li"), n = w("button"), be(r.$$.fragment), o = w("span"), i = F(l), c = E(), v(o, "class", "ml-2"), v(n, "class", "btn btn-ghost drawer-button font-normal normal-case"), v(t, "class", "nav-item");
    },
    m(d, g) {
      z(d, t, g), h(t, n), ae(r, n, null), h(n, o), h(o, i), h(t, c), s = !0, u || (a = J(n, "click", f), u = !0);
    },
    p(d, g) {
      e = d;
      const p = {};
      g & /*links*/
      8 && (p.icon = /*icon*/
      e[11]), r.$set(p), (!s || g & /*links*/
      8) && l !== (l = /*title*/
      e[9] + "") && H(i, l);
    },
    i(d) {
      s || (j(r.$$.fragment, d), s = !0);
    },
    o(d) {
      B(r.$$.fragment, d), s = !1;
    },
    d(d) {
      d && O(t), ue(r), u = !1, a();
    }
  };
}
function ql(e) {
  let t, n, r, o = (
    /*title*/
    e[9] + ""
  ), l, i, c, s, u = K(
    /*items*/
    e[12]
  ), a = [];
  for (let f = 0; f < u.length; f += 1)
    a[f] = xn(_n(e, u, f));
  return {
    c() {
      t = w("li"), n = w("div"), r = w("label"), l = F(o), i = E(), c = w("ul");
      for (let f = 0; f < a.length; f += 1)
        a[f].c();
      s = E(), v(r, "tabindex", "1"), v(r, "class", "btn normal-case btn-ghost"), v(c, "tabindex", "1"), v(c, "class", "dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"), v(n, "class", "dropdown dropdown-hover dropdown-bottom dropdown-end"), v(t, "class", "nav-item");
    },
    m(f, d) {
      z(f, t, d), h(t, n), h(n, r), h(r, l), h(n, i), h(n, c);
      for (let g = 0; g < a.length; g += 1)
        a[g] && a[g].m(c, null);
      h(t, s);
    },
    p(f, d) {
      if (d & /*links*/
      8 && o !== (o = /*title*/
      f[9] + "") && H(l, o), d & /*onItemClick, links*/
      24) {
        u = K(
          /*items*/
          f[12]
        );
        let g;
        for (g = 0; g < u.length; g += 1) {
          const p = _n(f, u, g);
          a[g] ? a[g].p(p, d) : (a[g] = xn(p), a[g].c(), a[g].m(c, null));
        }
        for (; g < a.length; g += 1)
          a[g].d(1);
        a.length = u.length;
      }
    },
    i: D,
    o: D,
    d(f) {
      f && O(t), pe(a, f);
    }
  };
}
function xn(e) {
  let t, n, r = (
    /*title*/
    e[9] + ""
  ), o, l, i, c;
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
      t = w("li"), n = w("button"), o = F(r), l = E();
    },
    m(u, a) {
      z(u, t, a), h(t, n), h(n, o), h(t, l), i || (c = J(n, "click", s), i = !0);
    },
    p(u, a) {
      e = u, a & /*links*/
      8 && r !== (r = /*title*/
      e[9] + "") && H(o, r);
    },
    d(u) {
      u && O(t), i = !1, c();
    }
  };
}
function kn(e) {
  let t, n, r, o;
  const l = [ql, Dl], i = [];
  function c(s, u) {
    return (
      /*type*/
      s[8] === "menu" ? 0 : 1
    );
  }
  return t = c(e), n = i[t] = l[t](e), {
    c() {
      n.c(), r = me();
    },
    m(s, u) {
      i[t].m(s, u), z(s, r, u), o = !0;
    },
    p(s, u) {
      let a = t;
      t = c(s), t === a ? i[t].p(s, u) : (se(), B(i[a], 1, 1, () => {
        i[a] = null;
      }), ce(), n = i[t], n ? n.p(s, u) : (n = i[t] = l[t](s), n.c()), j(n, 1), n.m(r.parentNode, r));
    },
    i(s) {
      o || (j(n), o = !0);
    },
    o(s) {
      B(n), o = !1;
    },
    d(s) {
      s && O(r), i[t].d(s);
    }
  };
}
function Ul(e) {
  let t, n, r, o, l, i, c, s, u, a, f, d, g, p, x = K(
    /*links*/
    e[3]
  ), b = [];
  for (let m = 0; m < x.length; m += 1)
    b[m] = kn(wn(e, x, m));
  const _ = (m) => B(b[m], 1, 1, () => {
    b[m] = null;
  });
  return {
    c() {
      t = w("nav"), n = w("div"), r = w("div"), o = w("button"), l = F(
        /*logotxt*/
        e[1]
      ), i = E(), c = w("button"), c.innerHTML = '<i class="fas fa-bars"></i>', s = E(), u = w("div"), a = w("ul");
      for (let m = 0; m < b.length; m += 1)
        b[m].c();
      v(o, "class", "text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-slate-700"), v(c, "class", "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"), v(c, "type", "button"), v(r, "class", "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"), v(a, "class", "flex flex-col lg:flex-row list-none lg:ml-auto"), v(u, "class", "lg:flex flex-grow items-center hidden"), v(n, "class", "container px-4 mx-auto flex flex-wrap items-center justify-between"), v(t, "class", f = le(
        "fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 shadow-lg",
        /*className*/
        e[0]
      ));
    },
    m(m, S) {
      z(m, t, S), h(t, n), h(n, r), h(r, o), h(o, l), h(r, i), h(r, c), h(n, s), h(n, u), h(u, a);
      for (let k = 0; k < b.length; k += 1)
        b[k] && b[k].m(a, null);
      d = !0, g || (p = J(
        o,
        "click",
        /*click_handler*/
        e[5]
      ), g = !0);
    },
    p(m, [S]) {
      if ((!d || S & /*logotxt*/
      2) && H(
        l,
        /*logotxt*/
        m[1]
      ), S & /*links, onItemClick*/
      24) {
        x = K(
          /*links*/
          m[3]
        );
        let k;
        for (k = 0; k < x.length; k += 1) {
          const A = wn(m, x, k);
          b[k] ? (b[k].p(A, S), j(b[k], 1)) : (b[k] = kn(A), b[k].c(), j(b[k], 1), b[k].m(a, null));
        }
        for (se(), k = x.length; k < b.length; k += 1)
          _(k);
        ce();
      }
      (!d || S & /*className*/
      1 && f !== (f = le(
        "fixed z-50 w-full bg-white top-0 flex flex-wrap items-center justify-between px-2 py-3 shadow-lg",
        /*className*/
        m[0]
      ))) && v(t, "class", f);
    },
    i(m) {
      if (!d) {
        for (let S = 0; S < x.length; S += 1)
          j(b[S]);
        d = !0;
      }
    },
    o(m) {
      b = b.filter(Boolean);
      for (let S = 0; S < b.length; S += 1)
        B(b[S]);
      d = !1;
    },
    d(m) {
      m && O(t), pe(b, m), g = !1, p();
    }
  };
}
function Zl(e, t, n) {
  let { class: r = "" } = t, { logotxt: o = "wwqdrh" } = t, { logourl: l = "#" } = t, { links: i = [] } = t, { onItemClick: c = (f) => {
    window.location.href = f;
  } } = t;
  const s = () => c(l), u = (f) => c(f), a = (f) => c(f);
  return e.$$set = (f) => {
    "class" in f && n(0, r = f.class), "logotxt" in f && n(1, o = f.logotxt), "logourl" in f && n(2, l = f.logourl), "links" in f && n(3, i = f.links), "onItemClick" in f && n(4, c = f.onItemClick);
  }, [
    r,
    o,
    l,
    i,
    c,
    s,
    u,
    a
  ];
}
class Ql extends te {
  constructor(t) {
    super(), ee(this, t, Zl, Ul, Y, {
      class: 0,
      logotxt: 1,
      logourl: 2,
      links: 3,
      onItemClick: 4
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
      t = w("button"), r = F(n), v(t, "class", "get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-pink-500 active:bg-pink-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150");
    },
    m(c, s) {
      z(c, t, s), h(t, r), o || (l = J(t, "click", i), o = !0);
    },
    p(c, s) {
      e = c, s & /*buttons*/
      8 && n !== (n = /*item*/
      e[7] + "") && H(r, n);
    },
    d(c) {
      c && O(t), o = !1, l();
    }
  };
}
function Jl(e) {
  let t, n, r, o, l, i, c, s, u, a, f, d, g, p, x, b = K(
    /*buttons*/
    e[3]
  ), _ = [];
  for (let m = 0; m < b.length; m += 1)
    _[m] = Sn(Cn(e, b, m));
  return {
    c() {
      t = w("section"), n = w("div"), r = w("div"), o = w("div"), l = w("h2"), i = F(
        /*title*/
        e[0]
      ), c = E(), s = w("p"), u = F(
        /*description*/
        e[1]
      ), a = E(), f = w("div");
      for (let m = 0; m < _.length; m += 1)
        _[m].c();
      d = E(), g = w("img"), v(l, "class", "font-semibold text-4xl text-slate-600"), v(s, "class", "mt-4 text-lg leading-relaxed text-slate-500"), v(f, "class", "mt-12"), v(o, "class", "pt-32 sm:pt-0"), v(r, "class", "w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4"), v(n, "class", "container mx-auto items-center flex flex-wrap"), v(g, "class", "absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12"), Qe(g.src, p = /*cover*/
      e[5]) || v(g, "src", p), v(g, "alt", "..."), Se(g, "max-height", "860px"), v(t, "class", x = le(
        "header relative items-center flex h-screen",
        /*className*/
        e[2]
      )), Se(t, "max-height", "860px");
    },
    m(m, S) {
      z(m, t, S), h(t, n), h(n, r), h(r, o), h(o, l), h(l, i), h(o, c), h(o, s), h(s, u), h(o, a), h(o, f);
      for (let k = 0; k < _.length; k += 1)
        _[k] && _[k].m(f, null);
      h(t, d), h(t, g);
    },
    p(m, [S]) {
      if (S & /*title*/
      1 && H(
        i,
        /*title*/
        m[0]
      ), S & /*description*/
      2 && H(
        u,
        /*description*/
        m[1]
      ), S & /*buttonClick, buttons*/
      24) {
        b = K(
          /*buttons*/
          m[3]
        );
        let k;
        for (k = 0; k < b.length; k += 1) {
          const A = Cn(m, b, k);
          _[k] ? _[k].p(A, S) : (_[k] = Sn(A), _[k].c(), _[k].m(f, null));
        }
        for (; k < _.length; k += 1)
          _[k].d(1);
        _.length = b.length;
      }
      S & /*cover*/
      32 && !Qe(g.src, p = /*cover*/
      m[5]) && v(g, "src", p), S & /*className*/
      4 && x !== (x = le(
        "header relative items-center flex h-screen",
        /*className*/
        m[2]
      )) && v(t, "class", x);
    },
    i: D,
    o: D,
    d(m) {
      m && O(t), pe(_, m);
    }
  };
}
function Xl(e, t, n) {
  let { title: r = "wwqdrh's ui component: uikit" } = t, { description: o = "a cross framework web component, you can visit it in wwqdrh'home" } = t, { class: l = "" } = t, { buttons: i = [] } = t, { buttonClick: c = (a) => {
    console.log(a);
  } } = t, { cover: s = "" } = t;
  const u = (a) => c(a);
  return e.$$set = (a) => {
    "title" in a && n(0, r = a.title), "description" in a && n(1, o = a.description), "class" in a && n(2, l = a.class), "buttons" in a && n(3, i = a.buttons), "buttonClick" in a && n(4, c = a.buttonClick), "cover" in a && n(5, s = a.cover);
  }, [r, o, l, i, c, s, u];
}
class Yl extends te {
  constructor(t) {
    super(), ee(this, t, Xl, Jl, Y, {
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
  return r[4] = t[n].icon, r[2] = t[n].title, r[3] = t[n].description, r;
}
function Mn(e) {
  let t, n, r, o, l, i = (
    /*title*/
    e[2] + ""
  ), c, s, u, a = (
    /*description*/
    e[3] + ""
  ), f, d, g;
  return r = new Fe({
    props: {
      class: "w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300",
      icon: (
        /*icon*/
        e[4]
      )
    }
  }), {
    c() {
      t = w("div"), n = w("div"), be(r.$$.fragment), o = E(), l = w("h3"), c = F(i), s = E(), u = w("p"), f = F(a), d = E(), v(n, "class", "flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"), v(l, "class", "mb-2 text-xl font-bold dark:text-white"), v(u, "class", "text-gray-500 dark:text-gray-400");
    },
    m(p, x) {
      z(p, t, x), h(t, n), ae(r, n, null), h(t, o), h(t, l), h(l, c), h(t, s), h(t, u), h(u, f), h(t, d), g = !0;
    },
    p(p, x) {
      const b = {};
      x & /*features*/
      2 && (b.icon = /*icon*/
      p[4]), r.$set(b), (!g || x & /*features*/
      2) && i !== (i = /*title*/
      p[2] + "") && H(c, i), (!g || x & /*features*/
      2) && a !== (a = /*description*/
      p[3] + "") && H(f, a);
    },
    i(p) {
      g || (j(r.$$.fragment, p), g = !0);
    },
    o(p) {
      B(r.$$.fragment, p), g = !1;
    },
    d(p) {
      p && O(t), ue(r);
    }
  };
}
function Kl(e) {
  let t, n, r, o, l, i, c, s, u, a, f, d, g = K(
    /*features*/
    e[1]
  ), p = [];
  for (let b = 0; b < g.length; b += 1)
    p[b] = Mn(In(e, g, b));
  const x = (b) => B(p[b], 1, 1, () => {
    p[b] = null;
  });
  return {
    c() {
      t = w("section"), n = w("div"), r = w("div"), o = w("h2"), l = F(
        /*title*/
        e[2]
      ), i = E(), c = w("p"), s = F(
        /*description*/
        e[3]
      ), u = E(), a = w("div");
      for (let b = 0; b < p.length; b += 1)
        p[b].c();
      v(o, "class", "mb-4 text-4xl font-extrabold text-gray-900 dark:text-white"), v(c, "class", "text-gray-500 sm:text-xl dark:text-gray-400"), v(r, "class", "mb-8 max-w-screen-md lg:mb-16"), v(a, "class", "space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"), v(n, "class", "py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"), v(t, "class", f = le(
        " dark:bg-gray-800",
        /*className*/
        e[0]
      ));
    },
    m(b, _) {
      z(b, t, _), h(t, n), h(n, r), h(r, o), h(o, l), h(r, i), h(r, c), h(c, s), h(n, u), h(n, a);
      for (let m = 0; m < p.length; m += 1)
        p[m] && p[m].m(a, null);
      d = !0;
    },
    p(b, [_]) {
      if ((!d || _ & /*title*/
      4) && H(
        l,
        /*title*/
        b[2]
      ), (!d || _ & /*description*/
      8) && H(
        s,
        /*description*/
        b[3]
      ), _ & /*features*/
      2) {
        g = K(
          /*features*/
          b[1]
        );
        let m;
        for (m = 0; m < g.length; m += 1) {
          const S = In(b, g, m);
          p[m] ? (p[m].p(S, _), j(p[m], 1)) : (p[m] = Mn(S), p[m].c(), j(p[m], 1), p[m].m(a, null));
        }
        for (se(), m = g.length; m < p.length; m += 1)
          x(m);
        ce();
      }
      (!d || _ & /*className*/
      1 && f !== (f = le(
        " dark:bg-gray-800",
        /*className*/
        b[0]
      ))) && v(t, "class", f);
    },
    i(b) {
      if (!d) {
        for (let _ = 0; _ < g.length; _ += 1)
          j(p[_]);
        d = !0;
      }
    },
    o(b) {
      p = p.filter(Boolean);
      for (let _ = 0; _ < p.length; _ += 1)
        B(p[_]);
      d = !1;
    },
    d(b) {
      b && O(t), pe(p, b);
    }
  };
}
function $l(e, t, n) {
  let { class: r = "" } = t, { title: o = "" } = t, { description: l = "" } = t, { features: i = [] } = t;
  return e.$$set = (c) => {
    "class" in c && n(0, r = c.class), "title" in c && n(2, o = c.title), "description" in c && n(3, l = c.description), "features" in c && n(1, i = c.features);
  }, [r, i, o, l];
}
class ei extends te {
  constructor(t) {
    super(), ee(this, t, $l, Kl, Y, {
      class: 0,
      title: 2,
      description: 3,
      features: 1
    });
  }
}
function An(e, t, n) {
  const r = e.slice();
  return r[4] = t[n].icon, r[5] = t[n].description, r;
}
function jn(e) {
  let t, n, r, o, l, i, c, s, u = (
    /*description*/
    e[5] + ""
  ), a, f, d;
  return l = new Fe({ props: { icon: (
    /*icon*/
    e[4]
  ) } }), {
    c() {
      t = w("li"), n = w("div"), r = w("div"), o = w("span"), be(l.$$.fragment), i = E(), c = w("div"), s = w("h4"), a = F(u), f = E(), v(o, "class", "text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3"), v(s, "class", "text-slate-500"), v(n, "class", "flex items-center"), v(t, "class", "py-2");
    },
    m(g, p) {
      z(g, t, p), h(t, n), h(n, r), h(r, o), ae(l, o, null), h(n, i), h(n, c), h(c, s), h(s, a), h(t, f), d = !0;
    },
    p(g, p) {
      const x = {};
      p & /*sections*/
      8 && (x.icon = /*icon*/
      g[4]), l.$set(x), (!d || p & /*sections*/
      8) && u !== (u = /*description*/
      g[5] + "") && H(a, u);
    },
    i(g) {
      d || (j(l.$$.fragment, g), d = !0);
    },
    o(g) {
      B(l.$$.fragment, g), d = !1;
    },
    d(g) {
      g && O(t), ue(l);
    }
  };
}
function ti(e) {
  let t, n, r, o, l, i, c, s, u, a, f, d, g, p, x, b, _, m, S, k;
  i = new Fe({ props: { icon: (
    /*icon*/
    e[4]
  ) } });
  let A = K(
    /*sections*/
    e[3]
  ), y = [];
  for (let M = 0; M < A.length; M += 1)
    y[M] = jn(An(e, A, M));
  const q = (M) => B(y[M], 1, 1, () => {
    y[M] = null;
  });
  return {
    c() {
      t = w("div"), n = w("div"), r = w("div"), o = w("div"), l = w("div"), be(i.$$.fragment), c = E(), s = w("h3"), u = F(
        /*title*/
        e[2]
      ), a = E(), f = w("p"), d = F(
        /*description*/
        e[5]
      ), g = E(), p = w("ul");
      for (let M = 0; M < y.length; M += 1)
        y[M].c();
      x = E(), b = w("div"), _ = w("img"), v(l, "class", "text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"), v(s, "class", "text-3xl font-semibold"), v(f, "class", "mt-4 text-lg leading-relaxed text-slate-500"), v(p, "class", "list-none mt-6"), v(o, "class", "md:pr-12"), v(r, "class", "w-full md:w-5/12 ml-auto px-12 md:px-4"), v(_, "alt", "..."), v(_, "class", "max-w-full rounded-lg shadow-xl"), Se(_, "transform", "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"), Qe(_.src, m = /*cover*/
      e[1]) || v(_, "src", m), v(b, "class", "w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0"), v(n, "class", "items-center flex flex-wrap"), v(t, "class", S = le(
        "container mx-auto px-4 pb-32 pt-48",
        /*className*/
        e[0]
      ));
    },
    m(M, R) {
      z(M, t, R), h(t, n), h(n, r), h(r, o), h(o, l), ae(i, l, null), h(o, c), h(o, s), h(s, u), h(o, a), h(o, f), h(f, d), h(o, g), h(o, p);
      for (let U = 0; U < y.length; U += 1)
        y[U] && y[U].m(p, null);
      h(n, x), h(n, b), h(b, _), k = !0;
    },
    p(M, [R]) {
      const U = {};
      if (R & /*icon*/
      16 && (U.icon = /*icon*/
      M[4]), i.$set(U), (!k || R & /*title*/
      4) && H(
        u,
        /*title*/
        M[2]
      ), (!k || R & /*description*/
      32) && H(
        d,
        /*description*/
        M[5]
      ), R & /*sections*/
      8) {
        A = K(
          /*sections*/
          M[3]
        );
        let I;
        for (I = 0; I < A.length; I += 1) {
          const C = An(M, A, I);
          y[I] ? (y[I].p(C, R), j(y[I], 1)) : (y[I] = jn(C), y[I].c(), j(y[I], 1), y[I].m(p, null));
        }
        for (se(), I = A.length; I < y.length; I += 1)
          q(I);
        ce();
      }
      (!k || R & /*cover*/
      2 && !Qe(_.src, m = /*cover*/
      M[1])) && v(_, "src", m), (!k || R & /*className*/
      1 && S !== (S = le(
        "container mx-auto px-4 pb-32 pt-48",
        /*className*/
        M[0]
      ))) && v(t, "class", S);
    },
    i(M) {
      if (!k) {
        j(i.$$.fragment, M);
        for (let R = 0; R < A.length; R += 1)
          j(y[R]);
        k = !0;
      }
    },
    o(M) {
      B(i.$$.fragment, M), y = y.filter(Boolean);
      for (let R = 0; R < y.length; R += 1)
        B(y[R]);
      k = !1;
    },
    d(M) {
      M && O(t), ue(i), pe(y, M);
    }
  };
}
function ni(e, t, n) {
  let { class: r = "" } = t, { cover: o = "" } = t, { title: l = "" } = t, { icon: i = "" } = t, { description: c = "" } = t, { sections: s = [] } = t;
  return e.$$set = (u) => {
    "class" in u && n(0, r = u.class), "cover" in u && n(1, o = u.cover), "title" in u && n(2, l = u.title), "icon" in u && n(4, i = u.icon), "description" in u && n(5, c = u.description), "sections" in u && n(3, s = u.sections);
  }, [r, o, l, s, i, c];
}
class ri extends te {
  constructor(t) {
    super(), ee(this, t, ni, ti, Y, {
      class: 0,
      cover: 1,
      title: 2,
      icon: 4,
      description: 5,
      sections: 3
    });
  }
}
const di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Yl,
  Feature: ei,
  Grid: ir,
  Header: Ql,
  ProjectDescription: ri
}, Symbol.toStringTag, { value: "Module" }));
function oi(e) {
  let t, n, r, o, l, i;
  return {
    c() {
      t = w("div"), n = w("div"), r = w("span"), o = E(), l = w("button"), i = F(
        /*btnText*/
        e[0]
      ), v(r, "id", "mask-desc"), v(r, "class", "mask-tip-desc svelte-17awz4u"), v(l, "id", "next-step-btn"), v(l, "class", "mask-tip-btn svelte-17awz4u"), v(n, "class", "mask-tip svelte-17awz4u"), Se(t, "display", "none");
    },
    m(c, s) {
      z(c, t, s), h(t, n), h(n, r), h(n, o), h(n, l), h(l, i), e[6](n), e[7](t);
    },
    p(c, [s]) {
      s & /*btnText*/
      1 && H(
        i,
        /*btnText*/
        c[0]
      );
    },
    i: D,
    o: D,
    d(c) {
      c && O(t), e[6](null), e[7](null);
    }
  };
}
function li(e, t, n) {
  let r, o, { gapWidth: l = 5 } = t, { isStart: i } = t, { stepArr: c = [] } = t, { btnText: s = "下一步" } = t;
  const u = (d) => {
    if (d.length === 0) {
      n(1, r.style.display = "none", r);
      return;
    }
    const { id: g, desc: p } = d[0];
    var x = document.getElementById(g), b = x.offsetWidth, _ = x.offsetHeight, m = x.offsetLeft, S = x.offsetTop;
    console.log("待镂空元素: ", b, _, m, S);
    var k = document.body.scrollWidth, A = document.body.scrollHeight;
    n(1, r.style.width = k + "px", r), n(1, r.style.height = A + "px", r), n(1, r.style.position = "absolute", r), n(1, r.style.left = 0, r), n(1, r.style.top = 0, r), n(1, r.style.display = "block", r), n(1, r.style.boxSizing = "border-box", r), n(1, r.style.borderColor = "rgba(0, 0, 0, 0.75)", r), n(1, r.style.borderStyle = "solid", r), n(1, r.style.borderLeftWidth = m - l + "px", r), n(1, r.style.borderRightWidth = k - b - m - l + "px", r), n(1, r.style.borderTopWidth = S - l + "px", r), n(1, r.style.borderBottomWidth = A - _ - S - l + "px", r), n(2, o.style.top = _ + l * 2 + 10 + "px", o), n(2, o.style.left = "50%", o);
    var y = document.getElementById("mask-desc");
    y.innerHTML = p;
    var q = document.getElementById("next-step-btn");
    q.onclick = function() {
      d.shift(), u(d);
    };
  };
  function a(d) {
    ze[d ? "unshift" : "push"](() => {
      o = d, n(2, o);
    });
  }
  function f(d) {
    ze[d ? "unshift" : "push"](() => {
      r = d, n(1, r);
    });
  }
  return e.$$set = (d) => {
    "gapWidth" in d && n(3, l = d.gapWidth), "isStart" in d && n(4, i = d.isStart), "stepArr" in d && n(5, c = d.stepArr), "btnText" in d && n(0, s = d.btnText);
  }, e.$$.update = () => {
    e.$$.dirty & /*isStart, stepArr*/
    48 && i && u(c);
  }, [
    s,
    r,
    o,
    l,
    i,
    c,
    a,
    f
  ];
}
class gi extends te {
  constructor(t) {
    super(), ee(this, t, li, oi, Y, {
      gapWidth: 3,
      isStart: 4,
      stepArr: 5,
      btnText: 0
    });
  }
}
export {
  di as Layout,
  fi as Sidebar,
  gi as StepMask,
  ai as confirm,
  ci as notify
};
