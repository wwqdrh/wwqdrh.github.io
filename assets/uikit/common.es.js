var Dn = Object.defineProperty;
var Un = (e, t, n) => t in e ? Dn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Je = (e, t, n) => (Un(e, typeof t != "symbol" ? t + "" : t, n), n);
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
function dn(e) {
  return e();
}
function zt() {
  return /* @__PURE__ */ Object.create(null);
}
function ae(e) {
  e.forEach(dn);
}
function Ie(e) {
  return typeof e == "function";
}
function ee(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Zn(e) {
  return Object.keys(e).length === 0;
}
function yt(e, t, n, r) {
  if (e) {
    const o = pn(e, t, n, r);
    return e[0](o);
  }
}
function pn(e, t, n, r) {
  return e[1] && r ? Y(n.ctx.slice(), e[1](r(t))) : n.ctx;
}
function wt(e, t, n, r) {
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
function xt(e, t, n, r, o, i) {
  if (o) {
    const s = pn(t, n, r, i);
    e.p(s, o);
  }
}
function _t(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let r = 0; r < n; r++)
      t[r] = -1;
    return t;
  }
  return -1;
}
function Ne(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function Ge(e, t) {
  const n = {};
  t = new Set(t);
  for (const r in e)
    !t.has(r) && r[0] !== "$" && (n[r] = e[r]);
  return n;
}
function qn(e) {
  return e && Ie(e.destroy) ? e.destroy : V;
}
function y(e, t) {
  e.appendChild(t);
}
function G(e, t, n) {
  e.insertBefore(t, n || null);
}
function N(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function gn(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function _(e) {
  return document.createElement(e);
}
function Qn(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function X(e) {
  return document.createTextNode(e);
}
function W() {
  return X(" ");
}
function Me() {
  return X("");
}
function Z(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function w(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
const Jn = ["width", "height"];
function rt(e, t) {
  const n = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const r in t)
    t[r] == null ? e.removeAttribute(r) : r === "style" ? e.style.cssText = t[r] : r === "__value" ? e.value = e[r] = t[r] : n[r] && n[r].set && Jn.indexOf(r) === -1 ? e[r] = t[r] : w(e, r, t[r]);
}
function Nt(e, t) {
  for (const n in t)
    w(e, n, t[n]);
}
function Xn(e, t) {
  Object.keys(t).forEach((n) => {
    Yn(e, n, t[n]);
  });
}
function Yn(e, t, n) {
  t in e ? e[t] = typeof e[t] == "boolean" && n === "" ? !0 : n : w(e, t, n);
}
function Re(e) {
  return /-/.test(e) ? Xn : rt;
}
function Kn(e) {
  return Array.from(e.childNodes);
}
function ne(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function $n(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
let ke;
function xe(e) {
  ke = e;
}
function kt() {
  if (!ke)
    throw new Error("Function called outside component initialization");
  return ke;
}
function Ae(e) {
  kt().$$.on_mount.push(e);
}
function er(e) {
  kt().$$.on_destroy.push(e);
}
function me() {
  const e = kt();
  return (t, n, { cancelable: r = !1 } = {}) => {
    const o = e.$$.callbacks[t];
    if (o) {
      const i = $n(
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
function U(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((r) => r.call(this, t));
}
const ge = [], ot = [];
let he = [];
const Gt = [], tr = /* @__PURE__ */ Promise.resolve();
let it = !1;
function nr() {
  it || (it = !0, tr.then(hn));
}
function st(e) {
  he.push(e);
}
const Xe = /* @__PURE__ */ new Set();
let pe = 0;
function hn() {
  if (pe !== 0)
    return;
  const e = ke;
  do {
    try {
      for (; pe < ge.length; ) {
        const t = ge[pe];
        pe++, xe(t), rr(t.$$);
      }
    } catch (t) {
      throw ge.length = 0, pe = 0, t;
    }
    for (xe(null), ge.length = 0, pe = 0; ot.length; )
      ot.pop()();
    for (let t = 0; t < he.length; t += 1) {
      const n = he[t];
      Xe.has(n) || (Xe.add(n), n());
    }
    he.length = 0;
  } while (ge.length);
  for (; Gt.length; )
    Gt.pop()();
  it = !1, Xe.clear(), xe(e);
}
function rr(e) {
  if (e.fragment !== null) {
    e.update(), ae(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(st);
  }
}
function or(e) {
  const t = [], n = [];
  he.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), he = t;
}
const Oe = /* @__PURE__ */ new Set();
let ce;
function Ct() {
  ce = {
    r: 0,
    c: [],
    p: ce
    // parent group
  };
}
function St() {
  ce.r || ae(ce.c), ce = ce.p;
}
function F(e, t) {
  e && e.i && (Oe.delete(e), e.i(t));
}
function q(e, t, n, r) {
  if (e && e.o) {
    if (Oe.has(e))
      return;
    Oe.add(e), ce.c.push(() => {
      Oe.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
function Be(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function je(e, t) {
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
function ir(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function It(e) {
  e && e.c();
}
function De(e, t, n) {
  const { fragment: r, after_update: o } = e.$$;
  r && r.m(t, n), st(() => {
    const i = e.$$.on_mount.map(dn).filter(Ie);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : ae(i), e.$$.on_mount = [];
  }), o.forEach(st);
}
function Ue(e, t) {
  const n = e.$$;
  n.fragment !== null && (or(n.after_update), ae(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function sr(e, t) {
  e.$$.dirty[0] === -1 && (ge.push(e), nr(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function re(e, t, n, r, o, i, s, a = [-1]) {
  const l = ke;
  xe(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: V,
    not_equal: o,
    bound: zt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: zt(),
    dirty: a,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, d, ...g) => {
    const h = g.length ? g[0] : d;
    return u.ctx && o(u.ctx[f], u.ctx[f] = h) && (!u.skip_bound && u.bound[f] && u.bound[f](h), c && sr(e, f)), d;
  }) : [], u.update(), c = !0, ae(u.before_update), u.fragment = r ? r(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = Kn(t.target);
      u.fragment && u.fragment.l(f), f.forEach(N);
    } else
      u.fragment && u.fragment.c();
    t.intro && F(e.$$.fragment), De(e, t.target, t.anchor), hn();
  }
  xe(l);
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
    Je(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Je(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Ue(this, 1), this.$destroy = V;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!Ie(n))
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
    this.$$set && !Zn(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const lr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(lr);
function ar(e) {
  let t, n, r, o, i, s, a, l, u;
  return {
    c() {
      t = _("div"), n = _("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>', r = W(), o = _("div"), i = _("div"), s = _("span"), s.textContent = "Success", a = W(), l = _("p"), u = X(
        /*msg*/
        e[0]
      ), w(n, "class", "flex items-center justify-center w-12 bg-emerald-500"), w(s, "class", "font-semibold text-emerald-500 dark:text-emerald-400"), w(l, "class", "text-sm text-gray-600 dark:text-gray-200"), w(i, "class", "mx-3"), w(o, "class", "px-4 py-2 -mx-3"), w(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(c, f) {
      G(c, t, f), y(t, n), y(t, r), y(t, o), y(o, i), y(i, s), y(i, a), y(i, l), y(l, u);
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
      c && N(t);
    }
  };
}
function cr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const i = me();
  return Ae(() => {
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
class ur extends oe {
  constructor(t) {
    super(), re(this, t, cr, ar, ee, { msg: 0, duration: 1 });
  }
}
function fr(e) {
  let t, n, r, o, i, s, a, l, u;
  return {
    c() {
      t = _("div"), n = _("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', r = W(), o = _("div"), i = _("div"), s = _("span"), s.textContent = "Info", a = W(), l = _("p"), u = X(
        /*msg*/
        e[0]
      ), w(n, "class", "flex items-center justify-center w-12 bg-blue-500"), w(s, "class", "font-semibold text-blue-500 dark:text-blue-400"), w(l, "class", "text-sm text-gray-600 dark:text-gray-200"), w(i, "class", "mx-3"), w(o, "class", "px-4 py-2 -mx-3"), w(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(c, f) {
      G(c, t, f), y(t, n), y(t, r), y(t, o), y(o, i), y(i, s), y(i, a), y(i, l), y(l, u);
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
      c && N(t);
    }
  };
}
function dr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const i = me();
  return Ae(() => {
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
class Rt extends oe {
  constructor(t) {
    super(), re(this, t, dr, fr, ee, { msg: 0, duration: 1 });
  }
}
function pr(e) {
  let t, n, r, o, i, s, a, l, u;
  return {
    c() {
      t = _("div"), n = _("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', r = W(), o = _("div"), i = _("div"), s = _("span"), s.textContent = "Warning", a = W(), l = _("p"), u = X(
        /*msg*/
        e[0]
      ), w(n, "class", "flex items-center justify-center w-12 bg-yellow-400"), w(s, "class", "font-semibold text-yellow-400 dark:text-yellow-300"), w(l, "class", "text-sm text-gray-600 dark:text-gray-200"), w(i, "class", "mx-3"), w(o, "class", "px-4 py-2 -mx-3"), w(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(c, f) {
      G(c, t, f), y(t, n), y(t, r), y(t, o), y(o, i), y(i, s), y(i, a), y(i, l), y(l, u);
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
      c && N(t);
    }
  };
}
function gr(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const i = me();
  return Ae(() => {
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
class hr extends oe {
  constructor(t) {
    super(), re(this, t, gr, pr, ee, { msg: 0, duration: 1 });
  }
}
function mr(e) {
  let t, n, r, o, i, s, a, l, u;
  return {
    c() {
      t = _("div"), n = _("div"), n.innerHTML = '<svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>', r = W(), o = _("div"), i = _("div"), s = _("span"), s.textContent = "Error", a = W(), l = _("p"), u = X(
        /*msg*/
        e[0]
      ), w(n, "class", "flex items-center justify-center w-12 bg-red-500"), w(s, "class", "font-semibold text-red-500 dark:text-red-400"), w(l, "class", "text-sm text-gray-600 dark:text-gray-200"), w(i, "class", "mx-3"), w(o, "class", "px-4 py-2 -mx-3"), w(t, "class", "flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800");
    },
    m(c, f) {
      G(c, t, f), y(t, n), y(t, r), y(t, o), y(o, i), y(i, s), y(i, a), y(i, l), y(l, u);
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
      c && N(t);
    }
  };
}
function br(e, t, n) {
  let { msg: r = "" } = t, { duration: o = 3e3 } = t;
  const i = me();
  return Ae(() => {
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
let vr = class extends oe {
  constructor(t) {
    super(), re(this, t, br, mr, ee, { msg: 0, duration: 1 });
  }
};
const Bt = "uikit_msg_panel";
let Ye = 0;
const Si = (e) => {
  Ye += 1;
  let t = window.document.getElementById(Bt);
  t || (t = window.document.createElement("div"), t.id = Bt, t.style.position = "absolute", t.style.top = "5px", t.style.right = "5px", t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "10px", document.body.appendChild(t));
  const n = window.document.createElement("div");
  t.appendChild(n);
  let r;
  switch (e.type) {
    case "success":
      r = new ur({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "info":
      r = new Rt({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "warn":
      r = new hr({
        target: n,
        props: {
          ...e
        }
      });
      break;
    case "error":
      r = new vr({
        target: n,
        props: {
          ...e
        }
      });
      break;
    default:
      r = new Rt({
        target: n,
        props: {
          ...e
        }
      });
      break;
  }
  return r.$on("onEnd", () => {
    r.$destroy(), Ye -= 1, Ye == 0 && document.body.removeChild(t);
  }), r;
}, Ee = (e) => Object.entries(e).map(([t, n]) => `${t}: ${n};`).join(" ");
function yr(e) {
  let t, n, r, o, i, s, a, l, u, c, f, d, g, h, x, m, C, v, P, J;
  return {
    c() {
      t = _("div"), n = _("div"), r = _("div"), o = _("div"), i = X(
        /*title*/
        e[0]
      ), s = W(), a = _("div"), l = _("div"), u = X(
        /*content*/
        e[1]
      ), c = W(), f = _("div"), d = _("div"), g = X(
        /*cancelText*/
        e[2]
      ), x = W(), m = _("div"), C = X(
        /*okText*/
        e[3]
      ), w(o, "class", "modal-title svelte-f901x2"), w(a, "class", "content svelte-f901x2"), w(r, "class", "modal-content-body svelte-f901x2"), w(d, "class", "btn button-left centerLayout svelte-f901x2"), w(d, "style", h = Ee(
        /*cancelBtnStyle*/
        e[4]
      )), w(m, "class", "btn button-right centerLayout svelte-f901x2"), w(m, "style", v = Ee(
        /*okBtnStyle*/
        e[5]
      )), w(f, "class", "confirm-button-wrap svelte-f901x2"), w(n, "class", "confirm-modal-content svelte-f901x2"), w(t, "class", "confirm-modal svelte-f901x2");
    },
    m(O, p) {
      G(O, t, p), y(t, n), y(n, r), y(r, o), y(o, i), y(r, s), y(r, a), y(a, l), y(l, u), y(n, c), y(n, f), y(f, d), y(d, g), y(f, x), y(f, m), y(m, C), e[11](t), P || (J = [
        Z(
          d,
          "click",
          /*onCancelClk*/
          e[8]
        ),
        Z(
          m,
          "click",
          /*onOkClk*/
          e[7]
        )
      ], P = !0);
    },
    p(O, [p]) {
      p & /*title*/
      1 && ne(
        i,
        /*title*/
        O[0]
      ), p & /*content*/
      2 && ne(
        u,
        /*content*/
        O[1]
      ), p & /*cancelText*/
      4 && ne(
        g,
        /*cancelText*/
        O[2]
      ), p & /*cancelBtnStyle*/
      16 && h !== (h = Ee(
        /*cancelBtnStyle*/
        O[4]
      )) && w(d, "style", h), p & /*okText*/
      8 && ne(
        C,
        /*okText*/
        O[3]
      ), p & /*okBtnStyle*/
      32 && v !== (v = Ee(
        /*okBtnStyle*/
        O[5]
      )) && w(m, "style", v);
    },
    i: V,
    o: V,
    d(O) {
      O && N(t), e[11](null), P = !1, ae(J);
    }
  };
}
function wr(e, t, n) {
  let { title: r = "" } = t, { content: o = "" } = t, { cancelText: i = "取消" } = t, { okText: s = "确定" } = t, { onCancel: a = () => {
  } } = t, { onOk: l = () => {
  } } = t, { cancelBtnStyle: u = "" } = t, { okBtnStyle: c = "" } = t;
  const f = me();
  let d;
  const g = () => {
    l(), f("onOk");
  }, h = () => {
    a(), f("onCancel");
  };
  function x(m) {
    ot[m ? "unshift" : "push"](() => {
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
    x
  ];
}
class xr extends oe {
  constructor(t) {
    super(), re(this, t, wr, yr, ee, {
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
const Ii = (e) => {
  const t = window.document.createElement("div");
  document.body.appendChild(t);
  const n = new xr({
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
}, _e = /^[a-z0-9]+(-[a-z0-9]+)*$/, Ze = (e, t, n, r = "") => {
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
    return t && !Le(u) ? null : u;
  }
  const i = o[0], s = i.split("-");
  if (s.length > 1) {
    const a = {
      provider: r,
      prefix: s.shift(),
      name: s.join("-")
    };
    return t && !Le(a) ? null : a;
  }
  if (n && r === "") {
    const a = {
      provider: r,
      prefix: "",
      name: i
    };
    return t && !Le(a, n) ? null : a;
  }
  return null;
}, Le = (e, t) => e ? !!((e.provider === "" || e.provider.match(_e)) && (t && e.prefix === "" || e.prefix.match(_e)) && e.name.match(_e)) : !1, mn = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Fe = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), qe = Object.freeze({
  ...mn,
  ...Fe
}), lt = Object.freeze({
  ...qe,
  body: "",
  hidden: !1
});
function _r(e, t) {
  const n = {};
  !e.hFlip != !t.hFlip && (n.hFlip = !0), !e.vFlip != !t.vFlip && (n.vFlip = !0);
  const r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return r && (n.rotate = r), n;
}
function Ft(e, t) {
  const n = _r(e, t);
  for (const r in lt)
    r in Fe ? r in e && !(r in n) && (n[r] = Fe[r]) : r in t ? n[r] = t[r] : r in e && (n[r] = e[r]);
  return n;
}
function kr(e, t) {
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
function Cr(e, t, n) {
  const r = e.icons, o = e.aliases || /* @__PURE__ */ Object.create(null);
  let i = {};
  function s(a) {
    i = Ft(
      r[a] || o[a],
      i
    );
  }
  return s(t), n.forEach(s), Ft(e, i);
}
function bn(e, t) {
  const n = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return n;
  e.not_found instanceof Array && e.not_found.forEach((o) => {
    t(o, null), n.push(o);
  });
  const r = kr(e);
  for (const o in r) {
    const i = r[o];
    i && (t(o, Cr(e, o, i)), n.push(o));
  }
  return n;
}
const Sr = {
  provider: "",
  aliases: {},
  not_found: {},
  ...mn
};
function Ke(e, t) {
  for (const n in t)
    if (n in e && typeof e[n] != typeof t[n])
      return !1;
  return !0;
}
function vn(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Ke(e, Sr))
    return null;
  const n = t.icons;
  for (const o in n) {
    const i = n[o];
    if (!o.match(_e) || typeof i.body != "string" || !Ke(
      i,
      lt
    ))
      return null;
  }
  const r = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const o in r) {
    const i = r[o], s = i.parent;
    if (!o.match(_e) || typeof s != "string" || !n[s] && !r[s] || !Ke(
      i,
      lt
    ))
      return null;
  }
  return t;
}
const Vt = /* @__PURE__ */ Object.create(null);
function Ir(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function fe(e, t) {
  const n = Vt[e] || (Vt[e] = /* @__PURE__ */ Object.create(null));
  return n[t] || (n[t] = Ir(e, t));
}
function Mt(e, t) {
  return vn(t) ? bn(t, (n, r) => {
    r ? e.icons[n] = r : e.missing.add(n);
  }) : [];
}
function Mr(e, t, n) {
  try {
    if (typeof n.body == "string")
      return e.icons[t] = { ...n }, !0;
  } catch {
  }
  return !1;
}
let Ce = !1;
function yn(e) {
  return typeof e == "boolean" && (Ce = e), Ce;
}
function Ar(e) {
  const t = typeof e == "string" ? Ze(e, !0, Ce) : e;
  if (t) {
    const n = fe(t.provider, t.prefix), r = t.name;
    return n.icons[r] || (n.missing.has(r) ? null : void 0);
  }
}
function jr(e, t) {
  const n = Ze(e, !0, Ce);
  if (!n)
    return !1;
  const r = fe(n.provider, n.prefix);
  return Mr(r, n.name, t);
}
function Er(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Ce && !t && !e.prefix) {
    let o = !1;
    return vn(e) && (e.prefix = "", bn(e, (i, s) => {
      s && jr(i, s) && (o = !0);
    })), o;
  }
  const n = e.prefix;
  if (!Le({
    provider: t,
    prefix: n,
    name: "a"
  }))
    return !1;
  const r = fe(t, n);
  return !!Mt(r, e);
}
const wn = Object.freeze({
  width: null,
  height: null
}), xn = Object.freeze({
  // Dimensions
  ...wn,
  // Transformations
  ...Fe
}), Tr = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Pr = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Ht(e, t, n) {
  if (t === 1)
    return e;
  if (n = n || 100, typeof e == "number")
    return Math.ceil(e * t * n) / n;
  if (typeof e != "string")
    return e;
  const r = e.split(Tr);
  if (r === null || !r.length)
    return e;
  const o = [];
  let i = r.shift(), s = Pr.test(i);
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
const Or = (e) => e === "unset" || e === "undefined" || e === "none";
function Lr(e, t) {
  const n = {
    ...qe,
    ...e
  }, r = {
    ...xn,
    ...t
  }, o = {
    left: n.left,
    top: n.top,
    width: n.width,
    height: n.height
  };
  let i = n.body;
  [n, r].forEach((h) => {
    const x = [], m = h.hFlip, C = h.vFlip;
    let v = h.rotate;
    m ? C ? v += 2 : (x.push(
      "translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"
    ), x.push("scale(-1 1)"), o.top = o.left = 0) : C && (x.push(
      "translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"
    ), x.push("scale(1 -1)"), o.top = o.left = 0);
    let P;
    switch (v < 0 && (v -= Math.floor(v / 4) * 4), v = v % 4, v) {
      case 1:
        P = o.height / 2 + o.top, x.unshift(
          "rotate(90 " + P.toString() + " " + P.toString() + ")"
        );
        break;
      case 2:
        x.unshift(
          "rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")"
        );
        break;
      case 3:
        P = o.width / 2 + o.left, x.unshift(
          "rotate(-90 " + P.toString() + " " + P.toString() + ")"
        );
        break;
    }
    v % 2 === 1 && (o.left !== o.top && (P = o.left, o.left = o.top, o.top = P), o.width !== o.height && (P = o.width, o.width = o.height, o.height = P)), x.length && (i = '<g transform="' + x.join(" ") + '">' + i + "</g>");
  });
  const s = r.width, a = r.height, l = o.width, u = o.height;
  let c, f;
  s === null ? (f = a === null ? "1em" : a === "auto" ? u : a, c = Ht(f, l / u)) : (c = s === "auto" ? l : s, f = a === null ? Ht(c, u / l) : a === "auto" ? u : a);
  const d = {}, g = (h, x) => {
    Or(x) || (d[h] = x.toString());
  };
  return g("width", c), g("height", f), d.viewBox = o.left.toString() + " " + o.top.toString() + " " + l.toString() + " " + u.toString(), {
    attributes: d,
    body: i
  };
}
const zr = /\sid="(\S+)"/g, Nr = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Gr = 0;
function Rr(e, t = Nr) {
  const n = [];
  let r;
  for (; r = zr.exec(e); )
    n.push(r[1]);
  if (!n.length)
    return e;
  const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return n.forEach((i) => {
    const s = typeof t == "function" ? t(i) : t + (Gr++).toString(), a = i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"),
      "$1" + s + o + "$3"
    );
  }), e = e.replace(new RegExp(o, "g"), ""), e;
}
const at = /* @__PURE__ */ Object.create(null);
function Br(e, t) {
  at[e] = t;
}
function ct(e) {
  return at[e] || at[""];
}
function At(e) {
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
const jt = /* @__PURE__ */ Object.create(null), be = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], ze = [];
for (; be.length > 0; )
  be.length === 1 || Math.random() > 0.5 ? ze.push(be.shift()) : ze.push(be.pop());
jt[""] = At({
  resources: ["https://api.iconify.design"].concat(ze)
});
function Fr(e, t) {
  const n = At(t);
  return n === null ? !1 : (jt[e] = n, !0);
}
function Et(e) {
  return jt[e];
}
const Vr = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let Wt = Vr();
function Hr(e, t) {
  const n = Et(e);
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
function Wr(e) {
  return e === 404;
}
const Dr = (e, t, n) => {
  const r = [], o = Hr(e, t), i = "icons";
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
function Ur(e) {
  if (typeof e == "string") {
    const t = Et(e);
    if (t)
      return t.path;
  }
  return "/";
}
const Zr = (e, t, n) => {
  if (!Wt) {
    n("abort", 424);
    return;
  }
  let r = Ur(t.provider);
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
  Wt(e + r).then((i) => {
    const s = i.status;
    if (s !== 200) {
      setTimeout(() => {
        n(Wr(s) ? "abort" : "next", s);
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
}, qr = {
  prepare: Dr,
  send: Zr
};
function Qr(e) {
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
function _n(e, t) {
  e.forEach((n) => {
    const r = n.loaderCallbacks;
    r && (n.loaderCallbacks = r.filter((o) => o.id !== t));
  });
}
function Jr(e) {
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
      }), s.pending.length !== a && (n || _n([e], i.id), i.callback(
        s.loaded.slice(0),
        s.missing.slice(0),
        s.pending.slice(0),
        i.abort
      ));
    });
  }));
}
let Xr = 0;
function Yr(e, t, n) {
  const r = Xr++, o = _n.bind(null, n, r);
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
function Kr(e, t = !0, n = !1) {
  const r = [];
  return e.forEach((o) => {
    const i = typeof o == "string" ? Ze(o, t, n) : o;
    i && r.push(i);
  }), r;
}
var $r = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function eo(e, t, n, r) {
  const o = e.resources.length, i = e.random ? Math.floor(Math.random() * o) : e.index;
  let s;
  if (e.random) {
    let p = e.resources.slice(0);
    for (s = []; p.length > 1; ) {
      const R = Math.floor(Math.random() * p.length);
      s.push(p[R]), p = p.slice(0, R).concat(p.slice(R + 1));
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
  function x() {
    l === "pending" && (l = "aborted"), h(), d.forEach((p) => {
      p.status === "pending" && (p.status = "aborted");
    }), d = [];
  }
  function m(p, R) {
    R && (g = []), typeof p == "function" && g.push(p);
  }
  function C() {
    return {
      startTime: a,
      payload: t,
      status: l,
      queriesSent: u,
      queriesPending: d.length,
      subscribe: m,
      abort: x
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
  function J(p, R, K) {
    const te = R !== "success";
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
    if (R === "abort") {
      c = K, v();
      return;
    }
    if (te) {
      c = K, d.length || (s.length ? O() : v());
      return;
    }
    if (h(), P(), !e.random) {
      const Q = e.resources.indexOf(p.resource);
      Q !== -1 && Q !== e.index && (e.index = Q);
    }
    l = "completed", g.forEach((Q) => {
      Q(K);
    });
  }
  function O() {
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
    const R = {
      status: "pending",
      resource: p,
      callback: (K, te) => {
        J(R, K, te);
      }
    };
    d.push(R), u++, f = setTimeout(O, e.rotate), n(p, t, R.callback);
  }
  return setTimeout(O), C;
}
function kn(e) {
  const t = {
    ...$r,
    ...e
  };
  let n = [];
  function r() {
    n = n.filter((a) => a().status === "pending");
  }
  function o(a, l, u) {
    const c = eo(
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
function Dt() {
}
const $e = /* @__PURE__ */ Object.create(null);
function to(e) {
  if (!$e[e]) {
    const t = Et(e);
    if (!t)
      return;
    const n = kn(t), r = {
      config: t,
      redundancy: n
    };
    $e[e] = r;
  }
  return $e[e];
}
function no(e, t, n) {
  let r, o;
  if (typeof e == "string") {
    const i = ct(e);
    if (!i)
      return n(void 0, 424), Dt;
    o = i.send;
    const s = to(e);
    s && (r = s.redundancy);
  } else {
    const i = At(e);
    if (i) {
      r = kn(i);
      const s = e.resources ? e.resources[0] : "", a = ct(s);
      a && (o = a.send);
    }
  }
  return !r || !o ? (n(void 0, 424), Dt) : r.query(t, o, n)().abort;
}
const Ut = "iconify2", Se = "iconify", Cn = Se + "-count", Zt = Se + "-version", Sn = 36e5, ro = 168;
function ut(e, t) {
  try {
    return e.getItem(t);
  } catch {
  }
}
function Tt(e, t, n) {
  try {
    return e.setItem(t, n), !0;
  } catch {
  }
}
function qt(e, t) {
  try {
    e.removeItem(t);
  } catch {
  }
}
function ft(e, t) {
  return Tt(e, Cn, t.toString());
}
function dt(e) {
  return parseInt(ut(e, Cn)) || 0;
}
const Qe = {
  local: !0,
  session: !0
}, In = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Pt = !1;
function oo(e) {
  Pt = e;
}
let Te = typeof window > "u" ? {} : window;
function Mn(e) {
  const t = e + "Storage";
  try {
    if (Te && Te[t] && typeof Te[t].length == "number")
      return Te[t];
  } catch {
  }
  Qe[e] = !1;
}
function An(e, t) {
  const n = Mn(e);
  if (!n)
    return;
  const r = ut(n, Zt);
  if (r !== Ut) {
    if (r) {
      const a = dt(n);
      for (let l = 0; l < a; l++)
        qt(n, Se + l.toString());
    }
    Tt(n, Zt, Ut), ft(n, 0);
    return;
  }
  const o = Math.floor(Date.now() / Sn) - ro, i = (a) => {
    const l = Se + a.toString(), u = ut(n, l);
    if (typeof u == "string") {
      try {
        const c = JSON.parse(u);
        if (typeof c == "object" && typeof c.cached == "number" && c.cached > o && typeof c.provider == "string" && typeof c.data == "object" && typeof c.data.prefix == "string" && // Valid item: run callback
        t(c, a))
          return !0;
      } catch {
      }
      qt(n, l);
    }
  };
  let s = dt(n);
  for (let a = s - 1; a >= 0; a--)
    i(a) || (a === s - 1 ? (s--, ft(n, s)) : In[e].add(a));
}
function jn() {
  if (!Pt) {
    oo(!0);
    for (const e in Qe)
      An(e, (t) => {
        const n = t.data, r = t.provider, o = n.prefix, i = fe(
          r,
          o
        );
        if (!Mt(i, n).length)
          return !1;
        const s = n.lastModified || -1;
        return i.lastModifiedCached = i.lastModifiedCached ? Math.min(i.lastModifiedCached, s) : s, !0;
      });
  }
}
function io(e, t) {
  const n = e.lastModifiedCached;
  if (
    // Matches or newer
    n && n >= t
  )
    return n === t;
  if (e.lastModifiedCached = t, n)
    for (const r in Qe)
      An(r, (o) => {
        const i = o.data;
        return o.provider !== e.provider || i.prefix !== e.prefix || i.lastModified === t;
      });
  return !0;
}
function so(e, t) {
  Pt || jn();
  function n(r) {
    let o;
    if (!Qe[r] || !(o = Mn(r)))
      return;
    const i = In[r];
    let s;
    if (i.size)
      i.delete(s = Array.from(i).shift());
    else if (s = dt(o), !ft(o, s + 1))
      return;
    const a = {
      cached: Math.floor(Date.now() / Sn),
      provider: e.provider,
      data: t
    };
    return Tt(
      o,
      Se + s.toString(),
      JSON.stringify(a)
    );
  }
  t.lastModified && !io(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), n("local") || n("session"));
}
function Qt() {
}
function lo(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, Jr(e);
  }));
}
function ao(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: n, prefix: r } = e, o = e.iconsToLoad;
    delete e.iconsToLoad;
    let i;
    if (!o || !(i = ct(n)))
      return;
    i.prepare(n, r, o).forEach((a) => {
      no(n, a, (l) => {
        if (typeof l != "object")
          a.icons.forEach((u) => {
            e.missing.add(u);
          });
        else
          try {
            const u = Mt(
              e,
              l
            );
            if (!u.length)
              return;
            const c = e.pendingIcons;
            c && u.forEach((f) => {
              c.delete(f);
            }), so(e, l);
          } catch (u) {
            console.error(u);
          }
        lo(e);
      });
    });
  }));
}
const co = (e, t) => {
  const n = Kr(e, !0, yn()), r = Qr(n);
  if (!r.pending.length) {
    let l = !0;
    return t && setTimeout(() => {
      l && t(
        r.loaded,
        r.missing,
        r.pending,
        Qt
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
    o[u][c].length && ao(l, o[u][c]);
  }), t ? Yr(t, r, i) : Qt;
};
function uo(e, t) {
  const n = {
    ...e
  };
  for (const r in t) {
    const o = t[r], i = typeof o;
    r in wn ? (o === null || o && (i === "string" || i === "number")) && (n[r] = o) : i === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o);
  }
  return n;
}
const fo = /[\s,]+/;
function po(e, t) {
  t.split(fo).forEach((n) => {
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
function go(e, t = 0) {
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
function ho(e, t) {
  let n = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const r in t)
    n += " " + r + '="' + t[r] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>";
}
function mo(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function bo(e) {
  return "data:image/svg+xml," + mo(e);
}
function vo(e) {
  return 'url("' + bo(e) + '")';
}
const Jt = {
  ...xn,
  inline: !1
}, yo = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, wo = {
  display: "inline-block"
}, pt = {
  "background-color": "currentColor"
}, En = {
  "background-color": "transparent"
}, Xt = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Yt = {
  "-webkit-mask": pt,
  mask: pt,
  background: En
};
for (const e in Yt) {
  const t = Yt[e];
  for (const n in Xt)
    t[e + "-" + n] = Xt[n];
}
function xo(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
function _o(e, t) {
  const n = uo(Jt, t), r = t.mode || "svg", o = r === "svg" ? { ...yo } : {};
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
          typeof v == "string" && po(n, v);
          break;
        case "color":
          i = i + (i.length > 0 && i.trim().slice(-1) !== ";" ? ";" : "") + "color: " + v + "; ";
          break;
        case "rotate":
          typeof v == "string" ? n[C] = go(v) : typeof v == "number" && (n[C] = v);
          break;
        case "ariaHidden":
        case "aria-hidden":
          v !== !0 && v !== "true" && delete o["aria-hidden"];
          break;
        default:
          if (C.slice(0, 3) === "on:")
            break;
          Jt[C] === void 0 && (o[C] = v);
      }
  }
  const s = Lr(e, n), a = s.attributes;
  if (n.inline && (i = "vertical-align: -0.125em; " + i), r === "svg") {
    Object.assign(o, a), i !== "" && (o.style = i);
    let C = 0, v = t.id;
    return typeof v == "string" && (v = v.replace(/-/g, "_")), {
      svg: !0,
      attributes: o,
      body: Rr(s.body, v ? () => v + "ID" + C++ : "iconifySvelte")
    };
  }
  const { body: l, width: u, height: c } = e, f = r === "mask" || (r === "bg" ? !1 : l.indexOf("currentColor") !== -1), d = ho(l, {
    ...a,
    width: u + "",
    height: c + ""
  }), h = {
    "--svg": vo(d)
  }, x = (C) => {
    const v = a[C];
    v && (h[C] = xo(v));
  };
  x("width"), x("height"), Object.assign(h, wo, f ? pt : En);
  let m = "";
  for (const C in h)
    m += C + ": " + h[C] + ";";
  return o.style = m + i, {
    svg: !1,
    attributes: o
  };
}
yn(!0);
Br("", qr);
if (typeof document < "u" && typeof window < "u") {
  jn();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, n = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((r) => {
      try {
        // Check if item is an object and not null/array
        (typeof r != "object" || r === null || r instanceof Array || // Check for 'icons' and 'prefix'
        typeof r.icons != "object" || typeof r.prefix != "string" || // Add icon set
        !Er(r)) && console.error(n);
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
          Fr(n, o) || console.error(r);
        } catch {
          console.error(r);
        }
      }
  }
}
function ko(e, t, n, r, o) {
  function i() {
    t.loading && (t.loading.abort(), t.loading = null);
  }
  if (typeof e == "object" && e !== null && typeof e.body == "string")
    return t.name = "", i(), { data: { ...qe, ...e } };
  let s;
  if (typeof e != "string" || (s = Ze(e, !1, !0)) === null)
    return i(), null;
  const a = Ar(s);
  if (!a)
    return n && (!t.loading || t.loading.name !== e) && (i(), t.name = "", t.loading = {
      name: e,
      abort: co([s], r)
    }), null;
  i(), t.name !== e && (t.name = e, o && !t.destroyed && o(e));
  const l = ["iconify"];
  return s.prefix !== "" && l.push("iconify--" + s.prefix), s.provider !== "" && l.push("iconify--" + s.provider), { data: a, classes: l };
}
function Co(e, t) {
  return e ? _o({
    ...qe,
    ...e
  }, t) : null;
}
function Kt(e) {
  let t;
  function n(i, s) {
    return (
      /*data*/
      i[0].svg ? Io : So
    );
  }
  let r = n(e), o = r(e);
  return {
    c() {
      o.c(), t = Me();
    },
    m(i, s) {
      o.m(i, s), G(i, t, s);
    },
    p(i, s) {
      r === (r = n(i)) && o ? o.p(i, s) : (o.d(1), o = r(i), o && (o.c(), o.m(t.parentNode, t)));
    },
    d(i) {
      i && N(t), o.d(i);
    }
  };
}
function So(e) {
  let t, n = [
    /*data*/
    e[0].attributes
  ], r = {};
  for (let o = 0; o < n.length; o += 1)
    r = Y(r, n[o]);
  return {
    c() {
      t = _("span"), rt(t, r);
    },
    m(o, i) {
      G(o, t, i);
    },
    p(o, i) {
      rt(t, r = je(n, [i & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && N(t);
    }
  };
}
function Io(e) {
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
      t = Qn("svg"), Nt(t, o);
    },
    m(i, s) {
      G(i, t, s), t.innerHTML = n;
    },
    p(i, s) {
      s & /*data*/
      1 && n !== (n = /*data*/
      i[0].body + "") && (t.innerHTML = n), Nt(t, o = je(r, [s & /*data*/
      1 && /*data*/
      i[0].attributes]));
    },
    d(i) {
      i && N(t);
    }
  };
}
function Mo(e) {
  let t, n = (
    /*data*/
    e[0] && Kt(e)
  );
  return {
    c() {
      n && n.c(), t = Me();
    },
    m(r, o) {
      n && n.m(r, o), G(r, t, o);
    },
    p(r, [o]) {
      /*data*/
      r[0] ? n ? n.p(r, o) : (n = Kt(r), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: V,
    o: V,
    d(r) {
      r && N(t), n && n.d(r);
    }
  };
}
function Ao(e, t, n) {
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
    typeof t.onLoad == "function" && t.onLoad(u), me()("load", { icon: u });
  };
  function l() {
    n(3, i++, i);
  }
  return Ae(() => {
    n(2, o = !0);
  }), er(() => {
    n(1, r.destroyed = !0, r), r.loading && (r.loading.abort(), n(1, r.loading = null, r));
  }), e.$$set = (u) => {
    n(6, t = Y(Y({}, t), Ne(u)));
  }, e.$$.update = () => {
    {
      const u = ko(t.icon, r, o, l, a);
      n(0, s = u ? Co(u.data, t) : null), s && u.classes && n(
        0,
        s.attributes.class = (typeof t.class == "string" ? t.class + " " : "") + u.classes.join(" "),
        s
      );
    }
  }, t = Ne(t), [s, r, o, i];
}
class jo extends oe {
  constructor(t) {
    super(), re(this, t, Ao, Mo, ee, {});
  }
}
function Tn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Tn(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e)
        e[t] && (r && (r += " "), r += t);
  return r;
}
function Eo() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Tn(e)) && (r && (r += " "), r += t);
  return r;
}
function To() {
  for (var e = 0, t, n, r = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = Pn(t)) && (r && (r += " "), r += n);
  return r;
}
function Pn(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", r = 0; r < e.length; r++)
    e[r] && (t = Pn(e[r])) && (n && (n += " "), n += t);
  return n;
}
var Ot = "-";
function Po(e) {
  var t = Lo(e), n = e.conflictingClassGroups, r = e.conflictingClassGroupModifiers, o = r === void 0 ? {} : r;
  function i(a) {
    var l = a.split(Ot);
    return l[0] === "" && l.length !== 1 && l.shift(), On(l, t) || Oo(a);
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
function On(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], r = t.nextPart.get(n), o = r ? On(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length !== 0) {
    var i = e.join(Ot);
    return (s = t.validators.find(function(a) {
      var l = a.validator;
      return l(i);
    })) == null ? void 0 : s.classGroupId;
  }
}
var $t = /^\[(.+)\]$/;
function Oo(e) {
  if ($t.test(e)) {
    var t = $t.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Lo(e) {
  var t = e.theme, n = e.prefix, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = No(Object.entries(e.classGroups), n);
  return o.forEach(function(i) {
    var s = i[0], a = i[1];
    gt(a, r, s, t);
  }), r;
}
function gt(e, t, n, r) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var i = o === "" ? t : en(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (zo(o)) {
        gt(o(r), t, n, r);
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
      gt(l, en(t, a), n, r);
    });
  });
}
function en(e, t) {
  var n = e;
  return t.split(Ot).forEach(function(r) {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function zo(e) {
  return e.isThemeGetter;
}
function No(e, t) {
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
function Go(e) {
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
var Ln = "!";
function Ro(e) {
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
    var g = a.length === 0 ? s : s.substring(u), h = g.startsWith(Ln), x = h ? g.substring(1) : g, m = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: x,
      maybePostfixModifierPosition: m
    };
  };
}
function Bo(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(r) {
    var o = r[0] === "[";
    o ? (t.push.apply(t, n.sort().concat([r])), n = []) : n.push(r);
  }), t.push.apply(t, n.sort()), t;
}
function Fo(e) {
  return {
    cache: Go(e.cacheSize),
    splitModifiers: Ro(e),
    ...Po(e)
  };
}
var Vo = /\s+/;
function Ho(e, t) {
  var n = t.splitModifiers, r = t.getClassGroupId, o = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(Vo).map(function(s) {
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
    var h = Bo(l).join(":"), x = u ? h + Ln : h;
    return {
      isTailwindClass: !0,
      modifierId: x,
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
function ht() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r, o, i, s = a;
  function a(u) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(g, h) {
      return h(g);
    }, c());
    return r = Fo(d), o = r.cache.get, i = r.cache.set, s = l, l(u);
  }
  function l(u) {
    var c = o(u);
    if (c)
      return c;
    var f = Ho(u, r);
    return i(u, f), f;
  }
  return function() {
    return s(To.apply(null, arguments));
  };
}
function T(e) {
  var t = function(r) {
    return r[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var zn = /^\[(?:([a-z-]+):)?(.+)\]$/i, Wo = /^\d+\/\d+$/, Do = /* @__PURE__ */ new Set(["px", "full", "screen"]), Uo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Zo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, qo = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function $(e) {
  return ue(e) || Do.has(e) || Wo.test(e) || mt(e);
}
function mt(e) {
  return de(e, "length", $o);
}
function Qo(e) {
  return de(e, "size", Nn);
}
function Jo(e) {
  return de(e, "position", Nn);
}
function Xo(e) {
  return de(e, "url", ei);
}
function Pe(e) {
  return de(e, "number", ue);
}
function ue(e) {
  return !Number.isNaN(Number(e));
}
function Yo(e) {
  return e.endsWith("%") && ue(e.slice(0, -1));
}
function ve(e) {
  return tn(e) || de(e, "number", tn);
}
function I(e) {
  return zn.test(e);
}
function ye() {
  return !0;
}
function le(e) {
  return Uo.test(e);
}
function Ko(e) {
  return de(e, "", ti);
}
function de(e, t, n) {
  var r = zn.exec(e);
  return r ? r[1] ? r[1] === t : n(r[2]) : !1;
}
function $o(e) {
  return Zo.test(e);
}
function Nn() {
  return !1;
}
function ei(e) {
  return e.startsWith("url(");
}
function tn(e) {
  return Number.isInteger(Number(e));
}
function ti(e) {
  return qo.test(e);
}
function bt() {
  var e = T("colors"), t = T("spacing"), n = T("blur"), r = T("brightness"), o = T("borderColor"), i = T("borderRadius"), s = T("borderSpacing"), a = T("borderWidth"), l = T("contrast"), u = T("grayscale"), c = T("hueRotate"), f = T("invert"), d = T("gap"), g = T("gradientColorStops"), h = T("gradientColorStopPositions"), x = T("inset"), m = T("margin"), C = T("opacity"), v = T("padding"), P = T("saturate"), J = T("scale"), O = T("sepia"), p = T("skew"), R = T("space"), K = T("translate"), te = function() {
    return ["auto", "contain", "none"];
  }, Q = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, k = function() {
    return ["auto", I, t];
  }, b = function() {
    return [I, t];
  }, S = function() {
    return ["", $];
  }, M = function() {
    return ["auto", ue, I];
  }, A = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, j = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, E = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, L = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, z = function() {
    return ["", "0", I];
  }, ie = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, D = function() {
    return [ue, Pe];
  }, se = function() {
    return [ue, I];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ye],
      spacing: [$],
      blur: ["none", "", le, I],
      brightness: D(),
      borderColor: [e],
      borderRadius: ["none", "", "full", le, I],
      borderSpacing: b(),
      borderWidth: S(),
      contrast: D(),
      grayscale: z(),
      hueRotate: se(),
      invert: z(),
      gap: b(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Yo, mt],
      inset: k(),
      margin: k(),
      opacity: D(),
      padding: b(),
      saturate: D(),
      scale: D(),
      sepia: z(),
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
        z: ["auto", ve]
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
        grow: z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: z()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ve]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ye]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ve]
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
        "grid-rows": [ye]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ve]
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
        justify: ["normal"].concat(L())
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
        content: ["normal"].concat(L(), ["baseline"])
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
        "place-content": [].concat(L(), ["baseline"])
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
        "space-x": [R]
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
        "space-y": [R]
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
        "min-w": ["min", "max", "fit", I, $]
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
        "min-h": ["min", "max", "fit", I, $]
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
        text: ["base", le, mt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Pe]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ye]
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
        "line-clamp": ["none", ue, Pe]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", I, $]
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
        decoration: ["auto", "from-font", $]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", I, $]
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
        bg: [].concat(A(), [Jo])
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
        bg: ["auto", "cover", "contain", Qo]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Xo]
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
        "outline-offset": [I, $]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [$]
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
        "ring-offset": [$]
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
        shadow: ["", "inner", "none", le, Ko]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ye]
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
        sepia: [O]
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
        "backdrop-sepia": [O]
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
        scale: [J]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [J]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [J]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ve, I]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [K]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [K]
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
        stroke: [$, Pe]
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
function ni(e, t) {
  for (var n in t)
    Gn(e, n, t[n]);
  return e;
}
var ri = Object.prototype.hasOwnProperty, oi = /* @__PURE__ */ new Set(["string", "number", "boolean"]);
function Gn(e, t, n) {
  if (!ri.call(e, t) || oi.has(typeof n) || n === null) {
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
      Gn(e[t], r, n[r]);
  }
}
function ii(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return typeof e == "function" ? ht.apply(void 0, [bt, e].concat(n)) : ht.apply(void 0, [function() {
    return ni(bt(), e);
  }].concat(n));
}
var Rn = /* @__PURE__ */ ht(bt);
function Ve(...e) {
  return Rn(Eo(e));
}
function si(e, t) {
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
function nn(e) {
  const t = {};
  return e.forEach((n) => {
    Object.keys(n).forEach((r) => {
      r !== "action" && (t[r] = n[r]);
    });
  }), t;
}
function li(e) {
  let t = (
    /*href*/
    e[0] ? "a" : "button"
  ), n, r, o = (
    /*href*/
    (e[0] ? "a" : "button") && et(e)
  );
  return {
    c() {
      o && o.c(), n = Me();
    },
    m(i, s) {
      o && o.m(i, s), G(i, n, s), r = !0;
    },
    p(i, s) {
      /*href*/
      i[0], t ? ee(
        t,
        /*href*/
        i[0] ? "a" : "button"
      ) ? (o.d(1), o = et(i), t = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n)) : o.p(i, s) : (o = et(i), t = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n));
    },
    i(i) {
      r || (F(o, i), r = !0);
    },
    o(i) {
      q(o, i), r = !1;
    },
    d(i) {
      i && N(n), o && o.d(i);
    }
  };
}
function ai(e) {
  let t = (
    /*href*/
    e[0] ? "a" : "button"
  ), n, r, o = (
    /*href*/
    (e[0] ? "a" : "button") && tt(e)
  );
  return {
    c() {
      o && o.c(), n = Me();
    },
    m(i, s) {
      o && o.m(i, s), G(i, n, s), r = !0;
    },
    p(i, s) {
      /*href*/
      i[0], t ? ee(
        t,
        /*href*/
        i[0] ? "a" : "button"
      ) ? (o.d(1), o = tt(i), t = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n)) : o.p(i, s) : (o = tt(i), t = /*href*/
      i[0] ? "a" : "button", o.c(), o.m(n.parentNode, n));
    },
    i(i) {
      r || (F(o, i), r = !0);
    },
    o(i) {
      q(o, i), r = !1;
    },
    d(i) {
      i && N(n), o && o.d(i);
    }
  };
}
function et(e) {
  let t, n, r, o, i;
  const s = (
    /*#slots*/
    e[5].default
  ), a = yt(
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
      t = _(
        /*href*/
        e[0] ? "a" : "button"
      ), a && a.c(), Re(
        /*href*/
        e[0] ? "a" : "button"
      )(t, u);
    },
    m(c, f) {
      G(c, t, f), a && a.m(t, null), r = !0, o || (i = [
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
      16) && xt(
        a,
        s,
        c,
        /*$$scope*/
        c[4],
        r ? wt(
          s,
          /*$$scope*/
          c[4],
          f,
          null
        ) : _t(
          /*$$scope*/
          c[4]
        ),
        null
      ), Re(
        /*href*/
        c[0] ? "a" : "button"
      )(t, u = je(l, [
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
      r || (F(a, c), r = !0);
    },
    o(c) {
      q(a, c), r = !1;
    },
    d(c) {
      c && N(t), a && a.d(c), o = !1, ae(i);
    }
  };
}
function tt(e) {
  let t, n, r, o, i, s;
  const a = (
    /*#slots*/
    e[5].default
  ), l = yt(
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
    nn(
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
      t = _(
        /*href*/
        e[0] ? "a" : "button"
      ), l && l.c(), Re(
        /*href*/
        e[0] ? "a" : "button"
      )(t, c);
    },
    m(f, d) {
      G(f, t, d), l && l.m(t, null), o = !0, i || (s = [
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
        qn(r = si.call(null, t, { builders: (
          /*builders*/
          e[2]
        ) }))
      ], i = !0);
    },
    p(f, d) {
      l && l.p && (!o || d & /*$$scope*/
      16) && xt(
        l,
        a,
        f,
        /*$$scope*/
        f[4],
        o ? wt(
          a,
          /*$$scope*/
          f[4],
          d,
          null
        ) : _t(
          /*$$scope*/
          f[4]
        ),
        null
      ), Re(
        /*href*/
        f[0] ? "a" : "button"
      )(t, c = je(u, [
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
        4 && nn(
          /*builders*/
          f[2]
        ),
        d & /*$$restProps*/
        8 && /*$$restProps*/
        f[3]
      ])), r && Ie(r.update) && d & /*builders*/
      4 && r.update.call(null, { builders: (
        /*builders*/
        f[2]
      ) });
    },
    i(f) {
      o || (F(l, f), o = !0);
    },
    o(f) {
      q(l, f), o = !1;
    },
    d(f) {
      f && N(t), l && l.d(f), i = !1, ae(s);
    }
  };
}
function ci(e) {
  let t, n, r, o;
  const i = [ai, li], s = [];
  function a(l, u) {
    return (
      /*builders*/
      l[2] && /*builders*/
      l[2].length ? 0 : 1
    );
  }
  return t = a(e), n = s[t] = i[t](e), {
    c() {
      n.c(), r = Me();
    },
    m(l, u) {
      s[t].m(l, u), G(l, r, u), o = !0;
    },
    p(l, [u]) {
      let c = t;
      t = a(l), t === c ? s[t].p(l, u) : (Ct(), q(s[c], 1, 1, () => {
        s[c] = null;
      }), St(), n = s[t], n ? n.p(l, u) : (n = s[t] = i[t](l), n.c()), F(n, 1), n.m(r.parentNode, r));
    },
    i(l) {
      o || (F(n), o = !0);
    },
    o(l) {
      q(n), o = !1;
    },
    d(l) {
      l && N(r), s[t].d(l);
    }
  };
}
function ui(e, t, n) {
  const r = ["href", "type", "builders"];
  let o = Ge(t, r), { $$slots: i = {}, $$scope: s } = t, { href: a = void 0 } = t, { type: l = void 0 } = t, { builders: u = [] } = t;
  function c(p) {
    U.call(this, e, p);
  }
  function f(p) {
    U.call(this, e, p);
  }
  function d(p) {
    U.call(this, e, p);
  }
  function g(p) {
    U.call(this, e, p);
  }
  function h(p) {
    U.call(this, e, p);
  }
  function x(p) {
    U.call(this, e, p);
  }
  function m(p) {
    U.call(this, e, p);
  }
  function C(p) {
    U.call(this, e, p);
  }
  function v(p) {
    U.call(this, e, p);
  }
  function P(p) {
    U.call(this, e, p);
  }
  function J(p) {
    U.call(this, e, p);
  }
  function O(p) {
    U.call(this, e, p);
  }
  return e.$$set = (p) => {
    t = Y(Y({}, t), Ne(p)), n(3, o = Ge(t, r)), "href" in p && n(0, a = p.href), "type" in p && n(1, l = p.type), "builders" in p && n(2, u = p.builders), "$$scope" in p && n(4, s = p.$$scope);
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
    x,
    m,
    C,
    v,
    P,
    J,
    O
  ];
}
let fi = class extends oe {
  constructor(t) {
    super(), re(this, t, ui, ci, ee, { href: 0, type: 1, builders: 2 });
  }
};
function di(e) {
  let t;
  const n = (
    /*#slots*/
    e[5].default
  ), r = yt(
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
      256) && xt(
        r,
        n,
        o,
        /*$$scope*/
        o[8],
        t ? wt(
          n,
          /*$$scope*/
          o[8],
          i,
          null
        ) : _t(
          /*$$scope*/
          o[8]
        ),
        null
      );
    },
    i(o) {
      t || (F(r, o), t = !0);
    },
    o(o) {
      q(r, o), t = !1;
    },
    d(o) {
      r && r.d(o);
    }
  };
}
function pi(e) {
  let t, n;
  const r = [
    { builders: (
      /*builders*/
      e[3]
    ) },
    {
      class: Ve(ln({
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
    $$slots: { default: [di] },
    $$scope: { ctx: e }
  };
  for (let i = 0; i < r.length; i += 1)
    o = Y(o, r[i]);
  return t = new fi({ props: o }), t.$on(
    "click",
    /*click_handler*/
    e[6]
  ), t.$on(
    "keydown",
    /*keydown_handler*/
    e[7]
  ), {
    c() {
      It(t.$$.fragment);
    },
    m(i, s) {
      De(t, i, s), n = !0;
    },
    p(i, [s]) {
      const a = s & /*builders, cn, buttonVariants, variant, size, className, $$restProps*/
      31 ? je(r, [
        s & /*builders*/
        8 && { builders: (
          /*builders*/
          i[3]
        ) },
        s & /*cn, buttonVariants, variant, size, className*/
        7 && {
          class: Ve(ln({
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
        16 && ir(
          /*$$restProps*/
          i[4]
        )
      ]) : {};
      s & /*$$scope*/
      256 && (a.$$scope = { dirty: s, ctx: i }), t.$set(a);
    },
    i(i) {
      n || (F(t.$$.fragment, i), n = !0);
    },
    o(i) {
      q(t.$$.fragment, i), n = !1;
    },
    d(i) {
      Ue(t, i);
    }
  };
}
function gi(e, t, n) {
  const r = ["class", "variant", "size", "builders"];
  let o = Ge(t, r), { $$slots: i = {}, $$scope: s } = t, { class: a = void 0 } = t, { variant: l = "default" } = t, { size: u = "default" } = t, { builders: c = [] } = t;
  function f(g) {
    U.call(this, e, g);
  }
  function d(g) {
    U.call(this, e, g);
  }
  return e.$$set = (g) => {
    t = Y(Y({}, t), Ne(g)), n(4, o = Ge(t, r)), "class" in g && n(0, a = g.class), "variant" in g && n(1, l = g.variant), "size" in g && n(2, u = g.size), "builders" in g && n(3, c = g.builders), "$$scope" in g && n(8, s = g.$$scope);
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
class hi extends oe {
  constructor(t) {
    super(), re(this, t, gi, pi, ee, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
}
var rn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, H = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, mi = (e, t) => JSON.stringify(e) === JSON.stringify(t);
function Bn(e, t) {
  e.forEach(function(n) {
    Array.isArray(n) ? Bn(n, t) : t.push(n);
  });
}
function Fn(e) {
  let t = [];
  return Bn(e, t), t;
}
var bi = (...e) => Fn(e).filter(Boolean), Vn = (e, t) => {
  let n = {}, r = Object.keys(e), o = Object.keys(t);
  for (let i of r)
    if (o.includes(i)) {
      let s = e[i], a = t[i];
      typeof s == "object" && typeof a == "object" ? n[i] = Vn(s, a) : n[i] = a + " " + s;
    } else
      n[i] = e[i];
  for (let i of o)
    r.includes(i) || (n[i] = t[i]);
  return n;
}, on = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim(), vi = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 }, Hn = (e) => e || void 0, He = (...e) => Hn(Fn(e).filter(Boolean).join(" ")), nt = null, We = {}, vt = !1, we = (...e) => (t) => t.twMerge ? ((!nt || vt) && (vt = !1, nt = H(We) ? Rn : ii(We)), Hn(nt(He(e)))) : He(e), sn = (e, t) => {
  for (let n in t)
    e.hasOwnProperty(n) ? e[n] = He(e[n], t[n]) : e[n] = t[n];
  return e;
}, yi = (e, t) => {
  let { extend: n = null, slots: r = {}, variants: o = {}, compoundVariants: i = [], compoundSlots: s = [], defaultVariants: a = {} } = e, l = { ...vi, ...t }, u = n != null && n.base ? He(n.base, e == null ? void 0 : e.base) : e == null ? void 0 : e.base, c = n != null && n.variants && !H(n.variants) ? Vn(o, n.variants) : o, f = n != null && n.defaultVariants && !H(n.defaultVariants) ? { ...n.defaultVariants, ...a } : a;
  !H(l.twMergeConfig) && !mi(l.twMergeConfig, We) && (vt = !0, We = l.twMergeConfig);
  let d = H(r) ? {} : { base: e == null ? void 0 : e.base, ...r }, g = H(n == null ? void 0 : n.slots) ? d : sn(n == null ? void 0 : n.slots, H(d) ? { base: e == null ? void 0 : e.base } : d), h = (m) => {
    if (H(c) && H(r) && H(n == null ? void 0 : n.slots))
      return we(u, m == null ? void 0 : m.class, m == null ? void 0 : m.className)(l);
    if (i && !Array.isArray(i))
      throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof i}`);
    if (s && !Array.isArray(s))
      throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof s}`);
    let C = (k, b, S = [], M) => {
      let A = S;
      if (typeof b == "string")
        A = A.concat(on(b).split(" ").map((j) => `${k}:${j}`));
      else if (Array.isArray(b))
        A = A.concat(b.reduce((j, E) => j.concat(`${k}:${E}`), []));
      else if (typeof b == "object" && typeof M == "string") {
        for (let j in b)
          if (b.hasOwnProperty(j) && j === M) {
            let E = b[j];
            if (E && typeof E == "string") {
              let L = on(E);
              A[M] ? A[M] = A[M].concat(L.split(" ").map((z) => `${k}:${z}`)) : A[M] = L.split(" ").map((z) => `${k}:${z}`);
            } else
              Array.isArray(E) && E.length > 0 && (A[M] = E.reduce((L, z) => L.concat(`${k}:${z}`), []));
          }
      }
      return A;
    }, v = (k, b = c, S = null, M = null) => {
      var A;
      let j = b[k];
      if (!j || H(j))
        return null;
      let E = (A = M == null ? void 0 : M[k]) != null ? A : m == null ? void 0 : m[k];
      if (E === null)
        return null;
      let L = rn(E), z = Array.isArray(l.responsiveVariants) && l.responsiveVariants.length > 0 || l.responsiveVariants === !0, ie = f == null ? void 0 : f[k], D = [];
      if (typeof L == "object" && z)
        for (let [B, Lt] of Object.entries(L)) {
          let Wn = j[Lt];
          if (B === "initial") {
            ie = Lt;
            continue;
          }
          Array.isArray(l.responsiveVariants) && !l.responsiveVariants.includes(B) || (D = C(B, Wn, D, S));
        }
      let se = j[L] || j[rn(ie)];
      return typeof D == "object" && typeof S == "string" && D[S] ? sn(D, se) : D.length > 0 ? (D.push(se), D) : se;
    }, P = () => c ? Object.keys(c).map((k) => v(k, c)) : null, J = (k, b) => {
      if (!c || typeof c != "object")
        return null;
      let S = new Array();
      for (let M in c) {
        let A = v(M, c, k, b), j = k === "base" && typeof A == "string" ? A : A && A[k];
        j && (S[S.length] = j);
      }
      return S;
    }, O = {};
    for (let k in m)
      m[k] !== void 0 && (O[k] = m[k]);
    let p = (k, b) => {
      var S;
      let M = typeof (m == null ? void 0 : m[k]) == "object" ? { [k]: (S = m[k]) == null ? void 0 : S.initial } : {};
      return { ...f, ...O, ...M, ...b };
    }, R = (k = [], b) => {
      let S = [];
      for (let { class: M, className: A, ...j } of k) {
        let E = !0;
        for (let [L, z] of Object.entries(j)) {
          let ie = p(L, b);
          if (Array.isArray(z)) {
            if (!z.includes(ie[L])) {
              E = !1;
              break;
            }
          } else if (ie[L] !== z) {
            E = !1;
            break;
          }
        }
        E && (M && S.push(M), A && S.push(A));
      }
      return S;
    }, K = (k) => {
      let b = R(i, k), S = R(n == null ? void 0 : n.compoundVariants, k);
      return bi(S, b);
    }, te = (k) => {
      let b = K(k);
      if (!Array.isArray(b))
        return b;
      let S = {};
      for (let M of b)
        if (typeof M == "string" && (S.base = we(S.base, M)(l)), typeof M == "object")
          for (let [A, j] of Object.entries(M))
            S[A] = we(S[A], j)(l);
      return S;
    }, Q = (k) => {
      if (s.length < 1)
        return null;
      let b = {};
      for (let { slots: S = [], class: M, className: A, ...j } of s) {
        if (!H(j)) {
          let E = !0;
          for (let L of Object.keys(j)) {
            let z = p(L, k)[L];
            if (z === void 0 || z !== j[L]) {
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
    if (!H(r) || !H(n == null ? void 0 : n.slots)) {
      let k = {};
      if (typeof g == "object" && !H(g))
        for (let b of Object.keys(g))
          k[b] = (S) => {
            var M, A;
            return we(g[b], J(b, S), ((M = te(S)) != null ? M : [])[b], ((A = Q(S)) != null ? A : [])[b], S == null ? void 0 : S.class, S == null ? void 0 : S.className)(l);
          };
      return k;
    }
    return we(u, P(), K(), m == null ? void 0 : m.class, m == null ? void 0 : m.className)(l);
  }, x = () => {
    if (!(!c || typeof c != "object"))
      return Object.keys(c);
  };
  return h.variantKeys = x(), h.extend = n, h.base = u, h.slots = g, h.variants = c, h.defaultVariants = f, h.compoundSlots = s, h.compoundVariants = i, h;
};
const ln = yi({
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
function an(e, t, n) {
  const r = e.slice();
  return r[3] = t[n].title, r[4] = t[n].items, r[6] = n, r;
}
function cn(e, t, n) {
  const r = e.slice();
  return r[3] = t[n].title, r[7] = t[n].icon, r[8] = t[n].url, r[10] = n, r;
}
function wi(e) {
  let t, n, r = (
    /*title*/
    e[3] + ""
  ), o, i, s;
  return t = new jo({
    props: {
      class: "mr-2 h-4 w-4",
      icon: (
        /*icon*/
        e[7]
      )
    }
  }), {
    c() {
      It(t.$$.fragment), n = W(), o = X(r), i = W();
    },
    m(a, l) {
      De(t, a, l), G(a, n, l), G(a, o, l), G(a, i, l), s = !0;
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
      s || (F(t.$$.fragment, a), s = !0);
    },
    o(a) {
      q(t.$$.fragment, a), s = !1;
    },
    d(a) {
      a && (N(n), N(o), N(i)), Ue(t, a);
    }
  };
}
function un(e) {
  let t, n;
  return t = new hi({
    props: {
      variant: "secondary",
      class: "w-full justify-start",
      $$slots: { default: [wi] },
      $$scope: { ctx: e }
    }
  }), t.$on("click", function() {
    Ie(
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
      It(t.$$.fragment);
    },
    m(r, o) {
      De(t, r, o), n = !0;
    },
    p(r, o) {
      e = r;
      const i = {};
      o & /*$$scope, menus*/
      2050 && (i.$$scope = { dirty: o, ctx: e }), t.$set(i);
    },
    i(r) {
      n || (F(t.$$.fragment, r), n = !0);
    },
    o(r) {
      q(t.$$.fragment, r), n = !1;
    },
    d(r) {
      Ue(t, r);
    }
  };
}
function fn(e) {
  let t, n, r = (
    /*title*/
    e[3] + ""
  ), o, i, s, a, l, u = Be(
    /*items*/
    e[4]
  ), c = [];
  for (let d = 0; d < u.length; d += 1)
    c[d] = un(cn(e, u, d));
  const f = (d) => q(c[d], 1, 1, () => {
    c[d] = null;
  });
  return {
    c() {
      t = _("div"), n = _("h2"), o = X(r), i = W(), s = _("div");
      for (let d = 0; d < c.length; d += 1)
        c[d].c();
      a = W(), w(n, "class", "mb-2 px-4 text-lg font-semibold tracking-tight"), w(s, "class", "space-y-1"), w(t, "class", "px-3 py-2");
    },
    m(d, g) {
      G(d, t, g), y(t, n), y(n, o), y(t, i), y(t, s);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(s, null);
      y(t, a), l = !0;
    },
    p(d, g) {
      if ((!l || g & /*menus*/
      2) && r !== (r = /*title*/
      d[3] + "") && ne(o, r), g & /*onClick, menus*/
      6) {
        u = Be(
          /*items*/
          d[4]
        );
        let h;
        for (h = 0; h < u.length; h += 1) {
          const x = cn(d, u, h);
          c[h] ? (c[h].p(x, g), F(c[h], 1)) : (c[h] = un(x), c[h].c(), F(c[h], 1), c[h].m(s, null));
        }
        for (Ct(), h = u.length; h < c.length; h += 1)
          f(h);
        St();
      }
    },
    i(d) {
      if (!l) {
        for (let g = 0; g < u.length; g += 1)
          F(c[g]);
        l = !0;
      }
    },
    o(d) {
      c = c.filter(Boolean);
      for (let g = 0; g < c.length; g += 1)
        q(c[g]);
      l = !1;
    },
    d(d) {
      d && N(t), gn(c, d);
    }
  };
}
function xi(e) {
  let t, n, r, o, i = Be(
    /*menus*/
    e[1]
  ), s = [];
  for (let l = 0; l < i.length; l += 1)
    s[l] = fn(an(e, i, l));
  const a = (l) => q(s[l], 1, 1, () => {
    s[l] = null;
  });
  return {
    c() {
      t = _("div"), n = _("div");
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      w(n, "class", "space-y-4 py-4"), w(t, "class", r = Ve(
        "pb-12",
        /*className*/
        e[0]
      ));
    },
    m(l, u) {
      G(l, t, u), y(t, n);
      for (let c = 0; c < s.length; c += 1)
        s[c] && s[c].m(n, null);
      o = !0;
    },
    p(l, [u]) {
      if (u & /*menus, onClick*/
      6) {
        i = Be(
          /*menus*/
          l[1]
        );
        let c;
        for (c = 0; c < i.length; c += 1) {
          const f = an(l, i, c);
          s[c] ? (s[c].p(f, u), F(s[c], 1)) : (s[c] = fn(f), s[c].c(), F(s[c], 1), s[c].m(n, null));
        }
        for (Ct(), c = i.length; c < s.length; c += 1)
          a(c);
        St();
      }
      (!o || u & /*className*/
      1 && r !== (r = Ve(
        "pb-12",
        /*className*/
        l[0]
      ))) && w(t, "class", r);
    },
    i(l) {
      if (!o) {
        for (let u = 0; u < i.length; u += 1)
          F(s[u]);
        o = !0;
      }
    },
    o(l) {
      s = s.filter(Boolean);
      for (let u = 0; u < s.length; u += 1)
        q(s[u]);
      o = !1;
    },
    d(l) {
      l && N(t), gn(s, l);
    }
  };
}
function _i(e, t, n) {
  let { class: r = void 0 } = t, { menus: o = [] } = t, { onClick: i = (s) => {
    console.log(s);
  } } = t;
  return e.$$set = (s) => {
    "class" in s && n(0, r = s.class), "menus" in s && n(1, o = s.menus), "onClick" in s && n(2, i = s.onClick);
  }, [r, o, i];
}
class Ai extends oe {
  constructor(t) {
    super(), re(this, t, _i, xi, ee, { class: 0, menus: 1, onClick: 2 });
  }
}
export {
  Ai as Sidebar,
  Ii as confirm,
  Si as notify
};
