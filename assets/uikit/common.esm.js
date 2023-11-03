var Vi = Object.defineProperty;
var Di = (t, e, i) => e in t ? Vi(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var Zt = (t, e, i) => (Di(t, typeof e != "symbol" ? e + "" : e, i), i);
function F() {
}
function Rt(t, e) {
  for (const i in e)
    t[i] = e[i];
  return (
    /** @type {T & S} */
    t
  );
}
function bi(t) {
  return t();
}
function ve() {
  return /* @__PURE__ */ Object.create(null);
}
function bt(t) {
  t.forEach(bi);
}
function ce(t) {
  return typeof t == "function";
}
function Q(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Pt;
function Wt(t, e) {
  return t === e ? !0 : (Pt || (Pt = document.createElement("a")), Pt.href = e, t === Pt.href);
}
function qi(t) {
  return Object.keys(t).length === 0;
}
function we(t) {
  const e = {};
  for (const i in t)
    i[0] !== "$" && (e[i] = t[i]);
  return e;
}
function g(t, e) {
  t.appendChild(e);
}
function L(t, e, i) {
  t.insertBefore(e, i || null);
}
function A(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function $(t, e) {
  for (let i = 0; i < t.length; i += 1)
    t[i] && t[i].d(e);
}
function k(t) {
  return document.createElement(t);
}
function Ui(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function N(t) {
  return document.createTextNode(t);
}
function M() {
  return N(" ");
}
function vt() {
  return N("");
}
function tt(t, e, i, n) {
  return t.addEventListener(e, i, n), () => t.removeEventListener(e, i, n);
}
function m(t, e, i) {
  i == null ? t.removeAttribute(e) : t.getAttribute(e) !== i && t.setAttribute(e, i);
}
const Zi = ["width", "height"];
function ye(t, e) {
  const i = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in e)
    e[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = e[n] : n === "__value" ? t.value = t[n] = e[n] : i[n] && i[n].set && Zi.indexOf(n) === -1 ? t[n] = e[n] : m(t, n, e[n]);
}
function _e(t, e) {
  for (const i in e)
    m(t, i, e[i]);
}
function Qi(t) {
  return Array.from(t.childNodes);
}
function G(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function st(t, e, i, n) {
  i == null ? t.style.removeProperty(e) : t.style.setProperty(e, i, n ? "important" : "");
}
function xe(t, e, i) {
  t.classList.toggle(e, !!i);
}
function Ki(t, e, { bubbles: i = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: i, cancelable: n });
}
let Et;
function Mt(t) {
  Et = t;
}
function ae() {
  if (!Et)
    throw new Error("Function called outside component initialization");
  return Et;
}
function gt(t) {
  ae().$$.on_mount.push(t);
}
function Ji(t) {
  ae().$$.on_destroy.push(t);
}
function wt() {
  const t = ae();
  return (e, i, { cancelable: n = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const o = Ki(
        /** @type {string} */
        e,
        i,
        { cancelable: n }
      );
      return r.slice().forEach((l) => {
        l.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const pt = [], ut = [];
let kt = [];
const Ce = [], Xi = /* @__PURE__ */ Promise.resolve();
let Yt = !1;
function Yi() {
  Yt || (Yt = !0, Xi.then(vi));
}
function $t(t) {
  kt.push(t);
}
const Qt = /* @__PURE__ */ new Set();
let mt = 0;
function vi() {
  if (mt !== 0)
    return;
  const t = Et;
  do {
    try {
      for (; mt < pt.length; ) {
        const e = pt[mt];
        mt++, Mt(e), $i(e.$$);
      }
    } catch (e) {
      throw pt.length = 0, mt = 0, e;
    }
    for (Mt(null), pt.length = 0, mt = 0; ut.length; )
      ut.pop()();
    for (let e = 0; e < kt.length; e += 1) {
      const i = kt[e];
      Qt.has(i) || (Qt.add(i), i());
    }
    kt.length = 0;
  } while (pt.length);
  for (; Ce.length; )
    Ce.pop()();
  Yt = !1, Qt.clear(), Mt(t);
}
function $i(t) {
  if (t.fragment !== null) {
    t.update(), bt(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach($t);
  }
}
function tn(t) {
  const e = [], i = [];
  kt.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : i.push(n)), i.forEach((n) => n()), kt = e;
}
const Bt = /* @__PURE__ */ new Set();
let at;
function it() {
  at = {
    r: 0,
    c: [],
    p: at
    // parent group
  };
}
function nt() {
  at.r || bt(at.c), at = at.p;
}
function P(t, e) {
  t && t.i && (Bt.delete(t), t.i(e));
}
function H(t, e, i, n) {
  if (t && t.o) {
    if (Bt.has(t))
      return;
    Bt.add(t), at.c.push(() => {
      Bt.delete(t), n && (i && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function D(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function wi(t, e) {
  const i = {}, n = {}, r = { $$scope: 1 };
  let o = t.length;
  for (; o--; ) {
    const l = t[o], s = e[o];
    if (s) {
      for (const u in l)
        u in s || (n[u] = 1);
      for (const u in s)
        r[u] || (i[u] = s[u], r[u] = 1);
      t[o] = s;
    } else
      for (const u in l)
        r[u] = 1;
  }
  for (const l in n)
    l in i || (i[l] = void 0);
  return i;
}
function ct(t) {
  t && t.c();
}
function rt(t, e, i) {
  const { fragment: n, after_update: r } = t.$$;
  n && n.m(e, i), $t(() => {
    const o = t.$$.on_mount.map(bi).filter(ce);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : bt(o), t.$$.on_mount = [];
  }), r.forEach($t);
}
function ot(t, e) {
  const i = t.$$;
  i.fragment !== null && (tn(i.after_update), bt(i.on_destroy), i.fragment && i.fragment.d(e), i.on_destroy = i.fragment = null, i.ctx = []);
}
function en(t, e) {
  t.$$.dirty[0] === -1 && (pt.push(t), Yi(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function K(t, e, i, n, r, o, l, s = [-1]) {
  const u = Et;
  Mt(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: F,
    not_equal: r,
    bound: ve(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: ve(),
    dirty: s,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  l && l(a.root);
  let c = !1;
  if (a.ctx = i ? i(t, e.props || {}, (f, d, ...h) => {
    const p = h.length ? h[0] : d;
    return a.ctx && r(a.ctx[f], a.ctx[f] = p) && (!a.skip_bound && a.bound[f] && a.bound[f](p), c && en(t, f)), d;
  }) : [], a.update(), c = !0, bt(a.before_update), a.fragment = n ? n(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Qi(e.target);
      a.fragment && a.fragment.l(f), f.forEach(A);
    } else
      a.fragment && a.fragment.c();
    e.intro && P(t.$$.fragment), rt(t, e.target, e.anchor), vi();
  }
  Mt(u);
}
class J {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Zt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Zt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ot(this, 1), this.$destroy = F;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, i) {
    if (!ce(i))
      return F;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(i), () => {
      const r = n.indexOf(i);
      r !== -1 && n.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !qi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const nn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(nn);
function rn(t) {
  let e, i, n, r, o, l, s, u, a;
  return {
    c() {
      e = k("div"), i = k("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>', n = M(), r = k("div"), o = k("div"), l = k("span"), l.textContent = "Success", s = M(), u = k("p"), a = N(
        /*msg*/
        t[0]
      ), m(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-emerald-500"), m(l, "class", "uikit-font-semibold uikit-text-emerald-500 dark:uikit-text-emerald-400"), m(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), m(o, "class", "uikit-mx-3"), m(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), m(e, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      L(c, e, f), g(e, i), g(e, n), g(e, r), g(r, o), g(o, l), g(o, s), g(o, u), g(u, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && G(
        a,
        /*msg*/
        c[0]
      );
    },
    i: F,
    o: F,
    d(c) {
      c && A(e);
    }
  };
}
function on(t, e, i) {
  let { msg: n = "" } = e, { duration: r = 3e3 } = e;
  const o = wt();
  return gt(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), t.$$set = (l) => {
    "msg" in l && i(0, n = l.msg), "duration" in l && i(1, r = l.duration);
  }, [n, r];
}
class ln extends J {
  constructor(e) {
    super(), K(this, e, on, rn, Q, { msg: 0, duration: 1 });
  }
}
function sn(t) {
  let e, i, n, r, o, l, s, u, a;
  return {
    c() {
      e = k("div"), i = k("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', n = M(), r = k("div"), o = k("div"), l = k("span"), l.textContent = "Info", s = M(), u = k("p"), a = N(
        /*msg*/
        t[0]
      ), m(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-blue-500"), m(l, "class", "uikit-font-semibold uikit-text-blue-500 dark:uikit-text-blue-400"), m(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), m(o, "class", "uikit-mx-3"), m(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), m(e, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      L(c, e, f), g(e, i), g(e, n), g(e, r), g(r, o), g(o, l), g(o, s), g(o, u), g(u, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && G(
        a,
        /*msg*/
        c[0]
      );
    },
    i: F,
    o: F,
    d(c) {
      c && A(e);
    }
  };
}
function un(t, e, i) {
  let { msg: n = "" } = e, { duration: r = 3e3 } = e;
  const o = wt();
  return gt(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), t.$$set = (l) => {
    "msg" in l && i(0, n = l.msg), "duration" in l && i(1, r = l.duration);
  }, [n, r];
}
class Se extends J {
  constructor(e) {
    super(), K(this, e, un, sn, Q, { msg: 0, duration: 1 });
  }
}
function cn(t) {
  let e, i, n, r, o, l, s, u, a;
  return {
    c() {
      e = k("div"), i = k("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', n = M(), r = k("div"), o = k("div"), l = k("span"), l.textContent = "Warning", s = M(), u = k("p"), a = N(
        /*msg*/
        t[0]
      ), m(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-yellow-400"), m(l, "class", "uikit-font-semibold uikit-text-yellow-400 dark:uikit-text-yellow-300"), m(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), m(o, "class", "uikit-mx-3"), m(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), m(e, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      L(c, e, f), g(e, i), g(e, n), g(e, r), g(r, o), g(o, l), g(o, s), g(o, u), g(u, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && G(
        a,
        /*msg*/
        c[0]
      );
    },
    i: F,
    o: F,
    d(c) {
      c && A(e);
    }
  };
}
function an(t, e, i) {
  let { msg: n = "" } = e, { duration: r = 3e3 } = e;
  const o = wt();
  return gt(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), t.$$set = (l) => {
    "msg" in l && i(0, n = l.msg), "duration" in l && i(1, r = l.duration);
  }, [n, r];
}
class fn extends J {
  constructor(e) {
    super(), K(this, e, an, cn, Q, { msg: 0, duration: 1 });
  }
}
function dn(t) {
  let e, i, n, r, o, l, s, u, a;
  return {
    c() {
      e = k("div"), i = k("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>', n = M(), r = k("div"), o = k("div"), l = k("span"), l.textContent = "Error", s = M(), u = k("p"), a = N(
        /*msg*/
        t[0]
      ), m(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-red-500"), m(l, "class", "uikit-font-semibold uikit-text-red-500 dark:uikit-text-red-400"), m(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), m(o, "class", "uikit-mx-3"), m(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), m(e, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      L(c, e, f), g(e, i), g(e, n), g(e, r), g(r, o), g(o, l), g(o, s), g(o, u), g(u, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && G(
        a,
        /*msg*/
        c[0]
      );
    },
    i: F,
    o: F,
    d(c) {
      c && A(e);
    }
  };
}
function gn(t, e, i) {
  let { msg: n = "" } = e, { duration: r = 3e3 } = e;
  const o = wt();
  return gt(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), t.$$set = (l) => {
    "msg" in l && i(0, n = l.msg), "duration" in l && i(1, r = l.duration);
  }, [n, r];
}
let hn = class extends J {
  constructor(e) {
    super(), K(this, e, gn, dn, Q, { msg: 0, duration: 1 });
  }
};
const Ie = "uikit_msg_panel";
let Kt = 0;
const To = (t) => {
  Kt += 1;
  let e = window.document.getElementById(Ie);
  e || (e = window.document.createElement("div"), e.id = Ie, e.style.position = "absolute", e.style.top = "5px", e.style.right = "5px", e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "10px", e.style.zIndex = "100", document.body.appendChild(e));
  const i = window.document.createElement("div");
  e.appendChild(i);
  let n;
  switch (t.type) {
    case "success":
      n = new ln({
        target: i,
        props: {
          ...t
        }
      });
      break;
    case "info":
      n = new Se({
        target: i,
        props: {
          ...t
        }
      });
      break;
    case "warn":
      n = new fn({
        target: i,
        props: {
          ...t
        }
      });
      break;
    case "error":
      n = new hn({
        target: i,
        props: {
          ...t
        }
      });
      break;
    default:
      n = new Se({
        target: i,
        props: {
          ...t
        }
      });
      break;
  }
  return n.$on("onEnd", () => {
    n.$destroy(), Kt -= 1, Kt == 0 && document.body.removeChild(e);
  }), n;
}, zt = (t) => Object.entries(t).map(([e, i]) => `${e}: ${i};`).join(" ");
function mn(t) {
  let e, i, n, r, o, l, s, u, a, c, f, d, h, p, x, b, w, v, S, E;
  return {
    c() {
      e = k("div"), i = k("div"), n = k("div"), r = k("div"), o = N(
        /*title*/
        t[0]
      ), l = M(), s = k("div"), u = k("div"), a = N(
        /*content*/
        t[1]
      ), c = M(), f = k("div"), d = k("div"), h = N(
        /*cancelText*/
        t[2]
      ), x = M(), b = k("div"), w = N(
        /*okText*/
        t[3]
      ), m(r, "class", "modal-title svelte-f901x2"), m(s, "class", "content svelte-f901x2"), m(n, "class", "modal-content-body svelte-f901x2"), m(d, "class", "btn button-left centerLayout svelte-f901x2"), m(d, "style", p = zt(
        /*cancelBtnStyle*/
        t[4]
      )), m(b, "class", "btn button-right centerLayout svelte-f901x2"), m(b, "style", v = zt(
        /*okBtnStyle*/
        t[5]
      )), m(f, "class", "confirm-button-wrap svelte-f901x2"), m(i, "class", "confirm-modal-content svelte-f901x2"), m(e, "class", "confirm-modal svelte-f901x2");
    },
    m(j, C) {
      L(j, e, C), g(e, i), g(i, n), g(n, r), g(r, o), g(n, l), g(n, s), g(s, u), g(u, a), g(i, c), g(i, f), g(f, d), g(d, h), g(f, x), g(f, b), g(b, w), t[11](e), S || (E = [
        tt(
          d,
          "click",
          /*onCancelClk*/
          t[8]
        ),
        tt(
          b,
          "click",
          /*onOkClk*/
          t[7]
        )
      ], S = !0);
    },
    p(j, [C]) {
      C & /*title*/
      1 && G(
        o,
        /*title*/
        j[0]
      ), C & /*content*/
      2 && G(
        a,
        /*content*/
        j[1]
      ), C & /*cancelText*/
      4 && G(
        h,
        /*cancelText*/
        j[2]
      ), C & /*cancelBtnStyle*/
      16 && p !== (p = zt(
        /*cancelBtnStyle*/
        j[4]
      )) && m(d, "style", p), C & /*okText*/
      8 && G(
        w,
        /*okText*/
        j[3]
      ), C & /*okBtnStyle*/
      32 && v !== (v = zt(
        /*okBtnStyle*/
        j[5]
      )) && m(b, "style", v);
    },
    i: F,
    o: F,
    d(j) {
      j && A(e), t[11](null), S = !1, bt(E);
    }
  };
}
function pn(t, e, i) {
  let { title: n = "" } = e, { content: r = "" } = e, { cancelText: o = "取消" } = e, { okText: l = "确定" } = e, { onCancel: s = () => {
  } } = e, { onOk: u = () => {
  } } = e, { cancelBtnStyle: a = "" } = e, { okBtnStyle: c = "" } = e;
  const f = wt();
  let d;
  const h = () => {
    u(), f("onOk");
  }, p = () => {
    s(), f("onCancel");
  };
  function x(b) {
    ut[b ? "unshift" : "push"](() => {
      d = b, i(6, d);
    });
  }
  return t.$$set = (b) => {
    "title" in b && i(0, n = b.title), "content" in b && i(1, r = b.content), "cancelText" in b && i(2, o = b.cancelText), "okText" in b && i(3, l = b.okText), "onCancel" in b && i(9, s = b.onCancel), "onOk" in b && i(10, u = b.onOk), "cancelBtnStyle" in b && i(4, a = b.cancelBtnStyle), "okBtnStyle" in b && i(5, c = b.okBtnStyle);
  }, [
    n,
    r,
    o,
    l,
    a,
    c,
    d,
    h,
    p,
    s,
    u,
    x
  ];
}
class kn extends J {
  constructor(e) {
    super(), K(this, e, pn, mn, Q, {
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
const Eo = (t) => {
  const e = window.document.createElement("div");
  document.body.appendChild(e);
  const i = new kn({
    target: e,
    props: {
      ...t
    }
  });
  return i.$on("onOk", () => {
    i.$destroy();
  }), i.$on("onCancel", () => {
    i.$destroy();
  }), i;
};
function yi(t) {
  var e, i, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (i = yi(t[e])) && (n && (n += " "), n += i);
    else
      for (e in t)
        t[e] && (n && (n += " "), n += e);
  return n;
}
function bn() {
  for (var t, e, i = 0, n = ""; i < arguments.length; )
    (t = arguments[i++]) && (e = yi(t)) && (n && (n += " "), n += e);
  return n;
}
function vn() {
  for (var t = 0, e, i, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (i = _i(e)) && (n && (n += " "), n += i);
  return n;
}
function _i(t) {
  if (typeof t == "string")
    return t;
  for (var e, i = "", n = 0; n < t.length; n++)
    t[n] && (e = _i(t[n])) && (i && (i += " "), i += e);
  return i;
}
var fe = "-";
function wn(t) {
  var e = _n(t), i = t.conflictingClassGroups, n = t.conflictingClassGroupModifiers, r = n === void 0 ? {} : n;
  function o(s) {
    var u = s.split(fe);
    return u[0] === "" && u.length !== 1 && u.shift(), xi(u, e) || yn(s);
  }
  function l(s, u) {
    var a = i[s] || [];
    return u && r[s] ? [].concat(a, r[s]) : a;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: l
  };
}
function xi(t, e) {
  var l;
  if (t.length === 0)
    return e.classGroupId;
  var i = t[0], n = e.nextPart.get(i), r = n ? xi(t.slice(1), n) : void 0;
  if (r)
    return r;
  if (e.validators.length !== 0) {
    var o = t.join(fe);
    return (l = e.validators.find(function(s) {
      var u = s.validator;
      return u(o);
    })) == null ? void 0 : l.classGroupId;
  }
}
var Me = /^\[(.+)\]$/;
function yn(t) {
  if (Me.test(t)) {
    var e = Me.exec(t)[1], i = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}
function _n(t) {
  var e = t.theme, i = t.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, r = Cn(Object.entries(t.classGroups), i);
  return r.forEach(function(o) {
    var l = o[0], s = o[1];
    te(s, n, l, e);
  }), n;
}
function te(t, e, i, n) {
  t.forEach(function(r) {
    if (typeof r == "string") {
      var o = r === "" ? e : Te(e, r);
      o.classGroupId = i;
      return;
    }
    if (typeof r == "function") {
      if (xn(r)) {
        te(r(n), e, i, n);
        return;
      }
      e.validators.push({
        validator: r,
        classGroupId: i
      });
      return;
    }
    Object.entries(r).forEach(function(l) {
      var s = l[0], u = l[1];
      te(u, Te(e, s), i, n);
    });
  });
}
function Te(t, e) {
  var i = t;
  return e.split(fe).forEach(function(n) {
    i.nextPart.has(n) || i.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(n);
  }), i;
}
function xn(t) {
  return t.isThemeGetter;
}
function Cn(t, e) {
  return e ? t.map(function(i) {
    var n = i[0], r = i[1], o = r.map(function(l) {
      return typeof l == "string" ? e + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(s) {
        var u = s[0], a = s[1];
        return [e + u, a];
      })) : l;
    });
    return [n, o];
  }) : t;
}
function Sn(t) {
  if (t < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var e = 0, i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function r(o, l) {
    i.set(o, l), e++, e > t && (e = 0, n = i, i = /* @__PURE__ */ new Map());
  }
  return {
    get: function(l) {
      var s = i.get(l);
      if (s !== void 0)
        return s;
      if ((s = n.get(l)) !== void 0)
        return r(l, s), s;
    },
    set: function(l, s) {
      i.has(l) ? i.set(l, s) : r(l, s);
    }
  };
}
var Ci = "!";
function In(t) {
  var e = t.separator || ":", i = e.length === 1, n = e[0], r = e.length;
  return function(l) {
    for (var s = [], u = 0, a = 0, c, f = 0; f < l.length; f++) {
      var d = l[f];
      if (u === 0) {
        if (d === n && (i || l.slice(f, f + r) === e)) {
          s.push(l.slice(a, f)), a = f + r;
          continue;
        }
        if (d === "/") {
          c = f;
          continue;
        }
      }
      d === "[" ? u++ : d === "]" && u--;
    }
    var h = s.length === 0 ? l : l.substring(a), p = h.startsWith(Ci), x = p ? h.substring(1) : h, b = c && c > a ? c - a : void 0;
    return {
      modifiers: s,
      hasImportantModifier: p,
      baseClassName: x,
      maybePostfixModifierPosition: b
    };
  };
}
function Mn(t) {
  if (t.length <= 1)
    return t;
  var e = [], i = [];
  return t.forEach(function(n) {
    var r = n[0] === "[";
    r ? (e.push.apply(e, i.sort().concat([n])), i = []) : i.push(n);
  }), e.push.apply(e, i.sort()), e;
}
function Tn(t) {
  return {
    cache: Sn(t.cacheSize),
    splitModifiers: In(t),
    ...wn(t)
  };
}
var En = /\s+/;
function jn(t, e) {
  var i = e.splitModifiers, n = e.getClassGroupId, r = e.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return t.trim().split(En).map(function(l) {
    var s = i(l), u = s.modifiers, a = s.hasImportantModifier, c = s.baseClassName, f = s.maybePostfixModifierPosition, d = n(f ? c.substring(0, f) : c), h = !!f;
    if (!d) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (d = n(c), !d)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      h = !1;
    }
    var p = Mn(u).join(":"), x = a ? p + Ci : p;
    return {
      isTailwindClass: !0,
      modifierId: x,
      classGroupId: d,
      originalClassName: l,
      hasPostfixModifier: h
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var s = l.modifierId, u = l.classGroupId, a = l.hasPostfixModifier, c = s + u;
    return o.has(c) ? !1 : (o.add(c), r(u, a).forEach(function(f) {
      return o.add(s + f);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function An() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  var n, r, o, l = s;
  function s(a) {
    var c = e[0], f = e.slice(1), d = f.reduce(function(h, p) {
      return p(h);
    }, c());
    return n = Tn(d), r = n.cache.get, o = n.cache.set, l = u, u(a);
  }
  function u(a) {
    var c = r(a);
    if (c)
      return c;
    var f = jn(a, n);
    return o(a, f), f;
  }
  return function() {
    return l(vn.apply(null, arguments));
  };
}
function V(t) {
  var e = function(n) {
    return n[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var Si = /^\[(?:([a-z-]+):)?(.+)\]$/i, Ln = /^\d+\/\d+$/, Pn = /* @__PURE__ */ new Set(["px", "full", "screen"]), zn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, On = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Nn = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function et(t) {
  return ft(t) || Pn.has(t) || Ln.test(t) || ee(t);
}
function ee(t) {
  return ht(t, "length", Fn);
}
function Bn(t) {
  return ht(t, "size", Ii);
}
function Gn(t) {
  return ht(t, "position", Ii);
}
function Hn(t) {
  return ht(t, "url", Vn);
}
function Ot(t) {
  return ht(t, "number", ft);
}
function ft(t) {
  return !Number.isNaN(Number(t));
}
function Rn(t) {
  return t.endsWith("%") && ft(t.slice(0, -1));
}
function Ct(t) {
  return Ee(t) || ht(t, "number", Ee);
}
function O(t) {
  return Si.test(t);
}
function St() {
  return !0;
}
function lt(t) {
  return zn.test(t);
}
function Wn(t) {
  return ht(t, "", Dn);
}
function ht(t, e, i) {
  var n = Si.exec(t);
  return n ? n[1] ? n[1] === e : i(n[2]) : !1;
}
function Fn(t) {
  return On.test(t);
}
function Ii() {
  return !1;
}
function Vn(t) {
  return t.startsWith("url(");
}
function Ee(t) {
  return Number.isInteger(Number(t));
}
function Dn(t) {
  return Nn.test(t);
}
function qn() {
  var t = V("colors"), e = V("spacing"), i = V("blur"), n = V("brightness"), r = V("borderColor"), o = V("borderRadius"), l = V("borderSpacing"), s = V("borderWidth"), u = V("contrast"), a = V("grayscale"), c = V("hueRotate"), f = V("invert"), d = V("gap"), h = V("gradientColorStops"), p = V("gradientColorStopPositions"), x = V("inset"), b = V("margin"), w = V("opacity"), v = V("padding"), S = V("saturate"), E = V("scale"), j = V("sepia"), C = V("skew"), R = V("space"), z = V("translate"), B = function() {
    return ["auto", "contain", "none"];
  }, q = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, W = function() {
    return ["auto", O, e];
  }, I = function() {
    return [O, e];
  }, U = function() {
    return ["", et];
  }, _ = function() {
    return ["auto", ft, O];
  }, T = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, y = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, Z = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Ut = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, _t = function() {
    return ["", "0", O];
  }, be = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, xt = function() {
    return [ft, Ot];
  }, Lt = function() {
    return [ft, O];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [St],
      spacing: [et],
      blur: ["none", "", lt, O],
      brightness: xt(),
      borderColor: [t],
      borderRadius: ["none", "", "full", lt, O],
      borderSpacing: I(),
      borderWidth: U(),
      contrast: xt(),
      grayscale: _t(),
      hueRotate: Lt(),
      invert: _t(),
      gap: I(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Rn, ee],
      inset: W(),
      margin: W(),
      opacity: xt(),
      padding: I(),
      saturate: xt(),
      scale: xt(),
      sepia: _t(),
      skew: Lt(),
      space: I(),
      translate: I()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", O]
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
        columns: [lt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": be()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": be()
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
        object: [].concat(T(), [O])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: q()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": q()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": q()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: B()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": B()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": B()
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
        z: ["auto", Ct]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: W()
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
        flex: ["1", "auto", "initial", "none", O]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: _t()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: _t()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ct]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [St]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ct]
        }, O]
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
        "grid-rows": [St]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ct]
        }, O]
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
        "auto-cols": ["auto", "min", "max", "fr", O]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", O]
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
        justify: ["normal"].concat(Ut())
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
        content: ["normal"].concat(Ut(), ["baseline"])
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
        "place-content": [].concat(Ut(), ["baseline"])
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
        w: ["auto", "min", "max", "fit", O, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", O, et]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [lt]
        }, lt, O]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [O, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", O, et]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [O, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", lt, ee]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ot]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [St]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", O]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ft, Ot]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", O, et]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", O]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", O]
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
        "placeholder-opacity": [w]
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
        "text-opacity": [w]
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
        decoration: [].concat(y(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", et]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", O, et]
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
        indent: I()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O]
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
        content: ["none", O]
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
        "bg-opacity": [w]
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
        bg: [].concat(T(), [Gn])
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
        bg: ["auto", "cover", "contain", Bn]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Hn]
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
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [w]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(y(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
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
        "divide-y": [s]
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
        "divide-opacity": [w]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: y()
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
        outline: [""].concat(y())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [O, et]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [et]
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
        ring: U()
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
        "ring-opacity": [w]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [et]
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
        shadow: ["", "inner", "none", lt, Wn]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [St]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": Z()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z()
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
        blur: [i]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [u]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", lt, O]
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
        sepia: [j]
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
        "backdrop-blur": [i]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [u]
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
        "backdrop-opacity": [w]
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
        "backdrop-sepia": [j]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", O]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Lt()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", O]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Lt()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", O]
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
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ct, O]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [z]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [z]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", O]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O]
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
        "scroll-m": I()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": I()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": I()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": I()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": I()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": I()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": I()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": I()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": I()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": I()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": I()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": I()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": I()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": I()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": I()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": I()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": I()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": I()
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
        "will-change": ["auto", "scroll", "contents", "transform", O]
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
        stroke: [et, Ot]
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
var Un = /* @__PURE__ */ An(qn);
function Y(...t) {
  return Un(bn(t));
}
const Tt = /^[a-z0-9]+(-[a-z0-9]+)*$/, Vt = (t, e, i, n = "") => {
  const r = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (r.length < 2 || r.length > 3)
      return null;
    n = r.shift().slice(1);
  }
  if (r.length > 3 || !r.length)
    return null;
  if (r.length > 1) {
    const s = r.pop(), u = r.pop(), a = {
      // Allow provider without '@': "provider:prefix:name"
      provider: r.length > 0 ? r[0] : n,
      prefix: u,
      name: s
    };
    return e && !Gt(a) ? null : a;
  }
  const o = r[0], l = o.split("-");
  if (l.length > 1) {
    const s = {
      provider: n,
      prefix: l.shift(),
      name: l.join("-")
    };
    return e && !Gt(s) ? null : s;
  }
  if (i && n === "") {
    const s = {
      provider: n,
      prefix: "",
      name: o
    };
    return e && !Gt(s, i) ? null : s;
  }
  return null;
}, Gt = (t, e) => t ? !!((t.provider === "" || t.provider.match(Tt)) && (e && t.prefix === "" || t.prefix.match(Tt)) && t.name.match(Tt)) : !1, Mi = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Ft = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Dt = Object.freeze({
  ...Mi,
  ...Ft
}), ie = Object.freeze({
  ...Dt,
  body: "",
  hidden: !1
});
function Zn(t, e) {
  const i = {};
  !t.hFlip != !e.hFlip && (i.hFlip = !0), !t.vFlip != !e.vFlip && (i.vFlip = !0);
  const n = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return n && (i.rotate = n), i;
}
function je(t, e) {
  const i = Zn(t, e);
  for (const n in ie)
    n in Ft ? n in t && !(n in i) && (i[n] = Ft[n]) : n in e ? i[n] = e[n] : n in t && (i[n] = t[n]);
  return i;
}
function Qn(t, e) {
  const i = t.icons, n = t.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  function o(l) {
    if (i[l])
      return r[l] = [];
    if (!(l in r)) {
      r[l] = null;
      const s = n[l] && n[l].parent, u = s && o(s);
      u && (r[l] = [s].concat(u));
    }
    return r[l];
  }
  return (e || Object.keys(i).concat(Object.keys(n))).forEach(o), r;
}
function Kn(t, e, i) {
  const n = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function l(s) {
    o = je(
      n[s] || r[s],
      o
    );
  }
  return l(e), i.forEach(l), je(t, o);
}
function Ti(t, e) {
  const i = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return i;
  t.not_found instanceof Array && t.not_found.forEach((r) => {
    e(r, null), i.push(r);
  });
  const n = Qn(t);
  for (const r in n) {
    const o = n[r];
    o && (e(r, Kn(t, r, o)), i.push(r));
  }
  return i;
}
const Jn = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Mi
};
function Jt(t, e) {
  for (const i in e)
    if (i in t && typeof t[i] != typeof e[i])
      return !1;
  return !0;
}
function Ei(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !Jt(t, Jn))
    return null;
  const i = e.icons;
  for (const r in i) {
    const o = i[r];
    if (!r.match(Tt) || typeof o.body != "string" || !Jt(
      o,
      ie
    ))
      return null;
  }
  const n = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const r in n) {
    const o = n[r], l = o.parent;
    if (!r.match(Tt) || typeof l != "string" || !i[l] && !n[l] || !Jt(
      o,
      ie
    ))
      return null;
  }
  return e;
}
const Ae = /* @__PURE__ */ Object.create(null);
function Xn(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function dt(t, e) {
  const i = Ae[t] || (Ae[t] = /* @__PURE__ */ Object.create(null));
  return i[e] || (i[e] = Xn(t, e));
}
function de(t, e) {
  return Ei(e) ? Ti(e, (i, n) => {
    n ? t.icons[i] = n : t.missing.add(i);
  }) : [];
}
function Yn(t, e, i) {
  try {
    if (typeof i.body == "string")
      return t.icons[e] = { ...i }, !0;
  } catch {
  }
  return !1;
}
let jt = !1;
function ji(t) {
  return typeof t == "boolean" && (jt = t), jt;
}
function $n(t) {
  const e = typeof t == "string" ? Vt(t, !0, jt) : t;
  if (e) {
    const i = dt(e.provider, e.prefix), n = e.name;
    return i.icons[n] || (i.missing.has(n) ? null : void 0);
  }
}
function tr(t, e) {
  const i = Vt(t, !0, jt);
  if (!i)
    return !1;
  const n = dt(i.provider, i.prefix);
  return Yn(n, i.name, e);
}
function er(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), jt && !e && !t.prefix) {
    let r = !1;
    return Ei(t) && (t.prefix = "", Ti(t, (o, l) => {
      l && tr(o, l) && (r = !0);
    })), r;
  }
  const i = t.prefix;
  if (!Gt({
    provider: e,
    prefix: i,
    name: "a"
  }))
    return !1;
  const n = dt(e, i);
  return !!de(n, t);
}
const Ai = Object.freeze({
  width: null,
  height: null
}), Li = Object.freeze({
  // Dimensions
  ...Ai,
  // Transformations
  ...Ft
}), ir = /(-?[0-9.]*[0-9]+[0-9.]*)/g, nr = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Le(t, e, i) {
  if (e === 1)
    return t;
  if (i = i || 100, typeof t == "number")
    return Math.ceil(t * e * i) / i;
  if (typeof t != "string")
    return t;
  const n = t.split(ir);
  if (n === null || !n.length)
    return t;
  const r = [];
  let o = n.shift(), l = nr.test(o);
  for (; ; ) {
    if (l) {
      const s = parseFloat(o);
      isNaN(s) ? r.push(o) : r.push(Math.ceil(s * e * i) / i);
    } else
      r.push(o);
    if (o = n.shift(), o === void 0)
      return r.join("");
    l = !l;
  }
}
const rr = (t) => t === "unset" || t === "undefined" || t === "none";
function or(t, e) {
  const i = {
    ...Dt,
    ...t
  }, n = {
    ...Li,
    ...e
  }, r = {
    left: i.left,
    top: i.top,
    width: i.width,
    height: i.height
  };
  let o = i.body;
  [i, n].forEach((p) => {
    const x = [], b = p.hFlip, w = p.vFlip;
    let v = p.rotate;
    b ? w ? v += 2 : (x.push(
      "translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"
    ), x.push("scale(-1 1)"), r.top = r.left = 0) : w && (x.push(
      "translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"
    ), x.push("scale(1 -1)"), r.top = r.left = 0);
    let S;
    switch (v < 0 && (v -= Math.floor(v / 4) * 4), v = v % 4, v) {
      case 1:
        S = r.height / 2 + r.top, x.unshift(
          "rotate(90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
      case 2:
        x.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        S = r.width / 2 + r.left, x.unshift(
          "rotate(-90 " + S.toString() + " " + S.toString() + ")"
        );
        break;
    }
    v % 2 === 1 && (r.left !== r.top && (S = r.left, r.left = r.top, r.top = S), r.width !== r.height && (S = r.width, r.width = r.height, r.height = S)), x.length && (o = '<g transform="' + x.join(" ") + '">' + o + "</g>");
  });
  const l = n.width, s = n.height, u = r.width, a = r.height;
  let c, f;
  l === null ? (f = s === null ? "1em" : s === "auto" ? a : s, c = Le(f, u / a)) : (c = l === "auto" ? u : l, f = s === null ? Le(c, a / u) : s === "auto" ? a : s);
  const d = {}, h = (p, x) => {
    rr(x) || (d[p] = x.toString());
  };
  return h("width", c), h("height", f), d.viewBox = r.left.toString() + " " + r.top.toString() + " " + u.toString() + " " + a.toString(), {
    attributes: d,
    body: o
  };
}
const lr = /\sid="(\S+)"/g, sr = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let ur = 0;
function cr(t, e = sr) {
  const i = [];
  let n;
  for (; n = lr.exec(t); )
    i.push(n[1]);
  if (!i.length)
    return t;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return i.forEach((o) => {
    const l = typeof e == "function" ? e(o) : e + (ur++).toString(), s = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
      "$1" + l + r + "$3"
    );
  }), t = t.replace(new RegExp(r, "g"), ""), t;
}
const ne = /* @__PURE__ */ Object.create(null);
function ar(t, e) {
  ne[t] = e;
}
function re(t) {
  return ne[t] || ne[""];
}
function ge(t) {
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
const he = /* @__PURE__ */ Object.create(null), It = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Ht = [];
for (; It.length > 0; )
  It.length === 1 || Math.random() > 0.5 ? Ht.push(It.shift()) : Ht.push(It.pop());
he[""] = ge({
  resources: ["https://api.iconify.design"].concat(Ht)
});
function fr(t, e) {
  const i = ge(e);
  return i === null ? !1 : (he[t] = i, !0);
}
function me(t) {
  return he[t];
}
const dr = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let Pe = dr();
function gr(t, e) {
  const i = me(t);
  if (!i)
    return 0;
  let n;
  if (!i.maxURL)
    n = 0;
  else {
    let r = 0;
    i.resources.forEach((l) => {
      r = Math.max(r, l.length);
    });
    const o = e + ".json?icons=";
    n = i.maxURL - r - i.path.length - o.length;
  }
  return n;
}
function hr(t) {
  return t === 404;
}
const mr = (t, e, i) => {
  const n = [], r = gr(t, e), o = "icons";
  let l = {
    type: o,
    provider: t,
    prefix: e,
    icons: []
  }, s = 0;
  return i.forEach((u, a) => {
    s += u.length + 1, s >= r && a > 0 && (n.push(l), l = {
      type: o,
      provider: t,
      prefix: e,
      icons: []
    }, s = u.length), l.icons.push(u);
  }), n.push(l), n;
};
function pr(t) {
  if (typeof t == "string") {
    const e = me(t);
    if (e)
      return e.path;
  }
  return "/";
}
const kr = (t, e, i) => {
  if (!Pe) {
    i("abort", 424);
    return;
  }
  let n = pr(e.provider);
  switch (e.type) {
    case "icons": {
      const o = e.prefix, s = e.icons.join(","), u = new URLSearchParams({
        icons: s
      });
      n += o + ".json?" + u.toString();
      break;
    }
    case "custom": {
      const o = e.uri;
      n += o.slice(0, 1) === "/" ? o.slice(1) : o;
      break;
    }
    default:
      i("abort", 400);
      return;
  }
  let r = 503;
  Pe(t + n).then((o) => {
    const l = o.status;
    if (l !== 200) {
      setTimeout(() => {
        i(hr(l) ? "abort" : "next", l);
      });
      return;
    }
    return r = 501, o.json();
  }).then((o) => {
    if (typeof o != "object" || o === null) {
      setTimeout(() => {
        o === 404 ? i("abort", o) : i("next", r);
      });
      return;
    }
    setTimeout(() => {
      i("success", o);
    });
  }).catch(() => {
    i("next", r);
  });
}, br = {
  prepare: mr,
  send: kr
};
function vr(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, i = /* @__PURE__ */ Object.create(null);
  t.sort((r, o) => r.provider !== o.provider ? r.provider.localeCompare(o.provider) : r.prefix !== o.prefix ? r.prefix.localeCompare(o.prefix) : r.name.localeCompare(o.name));
  let n = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((r) => {
    if (n.name === r.name && n.prefix === r.prefix && n.provider === r.provider)
      return;
    n = r;
    const o = r.provider, l = r.prefix, s = r.name, u = i[o] || (i[o] = /* @__PURE__ */ Object.create(null)), a = u[l] || (u[l] = dt(o, l));
    let c;
    s in a.icons ? c = e.loaded : l === "" || a.missing.has(s) ? c = e.missing : c = e.pending;
    const f = {
      provider: o,
      prefix: l,
      name: s
    };
    c.push(f);
  }), e;
}
function Pi(t, e) {
  t.forEach((i) => {
    const n = i.loaderCallbacks;
    n && (i.loaderCallbacks = n.filter((r) => r.id !== e));
  });
}
function wr(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let i = !1;
    const n = t.provider, r = t.prefix;
    e.forEach((o) => {
      const l = o.icons, s = l.pending.length;
      l.pending = l.pending.filter((u) => {
        if (u.prefix !== r)
          return !0;
        const a = u.name;
        if (t.icons[a])
          l.loaded.push({
            provider: n,
            prefix: r,
            name: a
          });
        else if (t.missing.has(a))
          l.missing.push({
            provider: n,
            prefix: r,
            name: a
          });
        else
          return i = !0, !0;
        return !1;
      }), l.pending.length !== s && (i || Pi([t], o.id), o.callback(
        l.loaded.slice(0),
        l.missing.slice(0),
        l.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let yr = 0;
function _r(t, e, i) {
  const n = yr++, r = Pi.bind(null, i, n);
  if (!e.pending.length)
    return r;
  const o = {
    id: n,
    icons: e,
    callback: t,
    abort: r
  };
  return i.forEach((l) => {
    (l.loaderCallbacks || (l.loaderCallbacks = [])).push(o);
  }), r;
}
function xr(t, e = !0, i = !1) {
  const n = [];
  return t.forEach((r) => {
    const o = typeof r == "string" ? Vt(r, e, i) : r;
    o && n.push(o);
  }), n;
}
var Cr = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Sr(t, e, i, n) {
  const r = t.resources.length, o = t.random ? Math.floor(Math.random() * r) : t.index;
  let l;
  if (t.random) {
    let C = t.resources.slice(0);
    for (l = []; C.length > 1; ) {
      const R = Math.floor(Math.random() * C.length);
      l.push(C[R]), C = C.slice(0, R).concat(C.slice(R + 1));
    }
    l = l.concat(C);
  } else
    l = t.resources.slice(o).concat(t.resources.slice(0, o));
  const s = Date.now();
  let u = "pending", a = 0, c, f = null, d = [], h = [];
  typeof n == "function" && h.push(n);
  function p() {
    f && (clearTimeout(f), f = null);
  }
  function x() {
    u === "pending" && (u = "aborted"), p(), d.forEach((C) => {
      C.status === "pending" && (C.status = "aborted");
    }), d = [];
  }
  function b(C, R) {
    R && (h = []), typeof C == "function" && h.push(C);
  }
  function w() {
    return {
      startTime: s,
      payload: e,
      status: u,
      queriesSent: a,
      queriesPending: d.length,
      subscribe: b,
      abort: x
    };
  }
  function v() {
    u = "failed", h.forEach((C) => {
      C(void 0, c);
    });
  }
  function S() {
    d.forEach((C) => {
      C.status === "pending" && (C.status = "aborted");
    }), d = [];
  }
  function E(C, R, z) {
    const B = R !== "success";
    switch (d = d.filter((q) => q !== C), u) {
      case "pending":
        break;
      case "failed":
        if (B || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (R === "abort") {
      c = z, v();
      return;
    }
    if (B) {
      c = z, d.length || (l.length ? j() : v());
      return;
    }
    if (p(), S(), !t.random) {
      const q = t.resources.indexOf(C.resource);
      q !== -1 && q !== t.index && (t.index = q);
    }
    u = "completed", h.forEach((q) => {
      q(z);
    });
  }
  function j() {
    if (u !== "pending")
      return;
    p();
    const C = l.shift();
    if (C === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          p(), u === "pending" && (S(), v());
        }, t.timeout);
        return;
      }
      v();
      return;
    }
    const R = {
      status: "pending",
      resource: C,
      callback: (z, B) => {
        E(R, z, B);
      }
    };
    d.push(R), a++, f = setTimeout(j, t.rotate), i(C, e, R.callback);
  }
  return setTimeout(j), w;
}
function zi(t) {
  const e = {
    ...Cr,
    ...t
  };
  let i = [];
  function n() {
    i = i.filter((s) => s().status === "pending");
  }
  function r(s, u, a) {
    const c = Sr(
      e,
      s,
      u,
      (f, d) => {
        n(), a && a(f, d);
      }
    );
    return i.push(c), c;
  }
  function o(s) {
    return i.find((u) => s(u)) || null;
  }
  return {
    query: r,
    find: o,
    setIndex: (s) => {
      e.index = s;
    },
    getIndex: () => e.index,
    cleanup: n
  };
}
function ze() {
}
const Xt = /* @__PURE__ */ Object.create(null);
function Ir(t) {
  if (!Xt[t]) {
    const e = me(t);
    if (!e)
      return;
    const i = zi(e), n = {
      config: e,
      redundancy: i
    };
    Xt[t] = n;
  }
  return Xt[t];
}
function Mr(t, e, i) {
  let n, r;
  if (typeof t == "string") {
    const o = re(t);
    if (!o)
      return i(void 0, 424), ze;
    r = o.send;
    const l = Ir(t);
    l && (n = l.redundancy);
  } else {
    const o = ge(t);
    if (o) {
      n = zi(o);
      const l = t.resources ? t.resources[0] : "", s = re(l);
      s && (r = s.send);
    }
  }
  return !n || !r ? (i(void 0, 424), ze) : n.query(e, r, i)().abort;
}
const Oe = "iconify2", At = "iconify", Oi = At + "-count", Ne = At + "-version", Ni = 36e5, Tr = 168;
function oe(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function pe(t, e, i) {
  try {
    return t.setItem(e, i), !0;
  } catch {
  }
}
function Be(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function le(t, e) {
  return pe(t, Oi, e.toString());
}
function se(t) {
  return parseInt(oe(t, Oi)) || 0;
}
const qt = {
  local: !0,
  session: !0
}, Bi = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let ke = !1;
function Er(t) {
  ke = t;
}
let Nt = typeof window > "u" ? {} : window;
function Gi(t) {
  const e = t + "Storage";
  try {
    if (Nt && Nt[e] && typeof Nt[e].length == "number")
      return Nt[e];
  } catch {
  }
  qt[t] = !1;
}
function Hi(t, e) {
  const i = Gi(t);
  if (!i)
    return;
  const n = oe(i, Ne);
  if (n !== Oe) {
    if (n) {
      const s = se(i);
      for (let u = 0; u < s; u++)
        Be(i, At + u.toString());
    }
    pe(i, Ne, Oe), le(i, 0);
    return;
  }
  const r = Math.floor(Date.now() / Ni) - Tr, o = (s) => {
    const u = At + s.toString(), a = oe(i, u);
    if (typeof a == "string") {
      try {
        const c = JSON.parse(a);
        if (typeof c == "object" && typeof c.cached == "number" && c.cached > r && typeof c.provider == "string" && typeof c.data == "object" && typeof c.data.prefix == "string" && // Valid item: run callback
        e(c, s))
          return !0;
      } catch {
      }
      Be(i, u);
    }
  };
  let l = se(i);
  for (let s = l - 1; s >= 0; s--)
    o(s) || (s === l - 1 ? (l--, le(i, l)) : Bi[t].add(s));
}
function Ri() {
  if (!ke) {
    Er(!0);
    for (const t in qt)
      Hi(t, (e) => {
        const i = e.data, n = e.provider, r = i.prefix, o = dt(
          n,
          r
        );
        if (!de(o, i).length)
          return !1;
        const l = i.lastModified || -1;
        return o.lastModifiedCached = o.lastModifiedCached ? Math.min(o.lastModifiedCached, l) : l, !0;
      });
  }
}
function jr(t, e) {
  const i = t.lastModifiedCached;
  if (
    // Matches or newer
    i && i >= e
  )
    return i === e;
  if (t.lastModifiedCached = e, i)
    for (const n in qt)
      Hi(n, (r) => {
        const o = r.data;
        return r.provider !== t.provider || o.prefix !== t.prefix || o.lastModified === e;
      });
  return !0;
}
function Ar(t, e) {
  ke || Ri();
  function i(n) {
    let r;
    if (!qt[n] || !(r = Gi(n)))
      return;
    const o = Bi[n];
    let l;
    if (o.size)
      o.delete(l = Array.from(o).shift());
    else if (l = se(r), !le(r, l + 1))
      return;
    const s = {
      cached: Math.floor(Date.now() / Ni),
      provider: t.provider,
      data: e
    };
    return pe(
      r,
      At + l.toString(),
      JSON.stringify(s)
    );
  }
  e.lastModified && !jr(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), i("local") || i("session"));
}
function Ge() {
}
function Lr(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, wr(t);
  }));
}
function Pr(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: i, prefix: n } = t, r = t.iconsToLoad;
    delete t.iconsToLoad;
    let o;
    if (!r || !(o = re(i)))
      return;
    o.prepare(i, n, r).forEach((s) => {
      Mr(i, s, (u) => {
        if (typeof u != "object")
          s.icons.forEach((a) => {
            t.missing.add(a);
          });
        else
          try {
            const a = de(
              t,
              u
            );
            if (!a.length)
              return;
            const c = t.pendingIcons;
            c && a.forEach((f) => {
              c.delete(f);
            }), Ar(t, u);
          } catch (a) {
            console.error(a);
          }
        Lr(t);
      });
    });
  }));
}
const zr = (t, e) => {
  const i = xr(t, !0, ji()), n = vr(i);
  if (!n.pending.length) {
    let u = !0;
    return e && setTimeout(() => {
      u && e(
        n.loaded,
        n.missing,
        n.pending,
        Ge
      );
    }), () => {
      u = !1;
    };
  }
  const r = /* @__PURE__ */ Object.create(null), o = [];
  let l, s;
  return n.pending.forEach((u) => {
    const { provider: a, prefix: c } = u;
    if (c === s && a === l)
      return;
    l = a, s = c, o.push(dt(a, c));
    const f = r[a] || (r[a] = /* @__PURE__ */ Object.create(null));
    f[c] || (f[c] = []);
  }), n.pending.forEach((u) => {
    const { provider: a, prefix: c, name: f } = u, d = dt(a, c), h = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    h.has(f) || (h.add(f), r[a][c].push(f));
  }), o.forEach((u) => {
    const { provider: a, prefix: c } = u;
    r[a][c].length && Pr(u, r[a][c]);
  }), e ? _r(e, n, o) : Ge;
};
function Or(t, e) {
  const i = {
    ...t
  };
  for (const n in e) {
    const r = e[n], o = typeof r;
    n in Ai ? (r === null || r && (o === "string" || o === "number")) && (i[n] = r) : o === typeof i[n] && (i[n] = n === "rotate" ? r % 4 : r);
  }
  return i;
}
const Nr = /[\s,]+/;
function Br(t, e) {
  e.split(Nr).forEach((i) => {
    switch (i.trim()) {
      case "horizontal":
        t.hFlip = !0;
        break;
      case "vertical":
        t.vFlip = !0;
        break;
    }
  });
}
function Gr(t, e = 0) {
  const i = t.replace(/^-?[0-9.]*/, "");
  function n(r) {
    for (; r < 0; )
      r += 4;
    return r % 4;
  }
  if (i === "") {
    const r = parseInt(t);
    return isNaN(r) ? 0 : n(r);
  } else if (i !== t) {
    let r = 0;
    switch (i) {
      case "%":
        r = 25;
        break;
      case "deg":
        r = 90;
    }
    if (r) {
      let o = parseFloat(t.slice(0, t.length - i.length));
      return isNaN(o) ? 0 : (o = o / r, o % 1 === 0 ? n(o) : 0);
    }
  }
  return e;
}
function Hr(t, e) {
  let i = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in e)
    i += " " + n + '="' + e[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + i + ">" + t + "</svg>";
}
function Rr(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Wr(t) {
  return "data:image/svg+xml," + Rr(t);
}
function Fr(t) {
  return 'url("' + Wr(t) + '")';
}
const He = {
  ...Li,
  inline: !1
}, Vr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Dr = {
  display: "inline-block"
}, ue = {
  "background-color": "currentColor"
}, Wi = {
  "background-color": "transparent"
}, Re = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, We = {
  "-webkit-mask": ue,
  mask: ue,
  background: Wi
};
for (const t in We) {
  const e = We[t];
  for (const i in Re)
    e[t + "-" + i] = Re[i];
}
function qr(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function Ur(t, e) {
  const i = Or(He, e), n = e.mode || "svg", r = n === "svg" ? { ...Vr } : {};
  t.body.indexOf("xlink:") === -1 && delete r["xmlns:xlink"];
  let o = typeof e.style == "string" ? e.style : "";
  for (let w in e) {
    const v = e[w];
    if (v !== void 0)
      switch (w) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          i[w] = v === !0 || v === "true" || v === 1;
          break;
        case "flip":
          typeof v == "string" && Br(i, v);
          break;
        case "color":
          o = o + (o.length > 0 && o.trim().slice(-1) !== ";" ? ";" : "") + "color: " + v + "; ";
          break;
        case "rotate":
          typeof v == "string" ? i[w] = Gr(v) : typeof v == "number" && (i[w] = v);
          break;
        case "ariaHidden":
        case "aria-hidden":
          v !== !0 && v !== "true" && delete r["aria-hidden"];
          break;
        default:
          if (w.slice(0, 3) === "on:")
            break;
          He[w] === void 0 && (r[w] = v);
      }
  }
  const l = or(t, i), s = l.attributes;
  if (i.inline && (o = "vertical-align: -0.125em; " + o), n === "svg") {
    Object.assign(r, s), o !== "" && (r.style = o);
    let w = 0, v = e.id;
    return typeof v == "string" && (v = v.replace(/-/g, "_")), {
      svg: !0,
      attributes: r,
      body: cr(l.body, v ? () => v + "ID" + w++ : "iconifySvelte")
    };
  }
  const { body: u, width: a, height: c } = t, f = n === "mask" || (n === "bg" ? !1 : u.indexOf("currentColor") !== -1), d = Hr(u, {
    ...s,
    width: a + "",
    height: c + ""
  }), p = {
    "--svg": Fr(d)
  }, x = (w) => {
    const v = s[w];
    v && (p[w] = qr(v));
  };
  x("width"), x("height"), Object.assign(p, Dr, f ? ue : Wi);
  let b = "";
  for (const w in p)
    b += w + ": " + p[w] + ";";
  return r.style = b + o, {
    svg: !1,
    attributes: r
  };
}
ji(!0);
ar("", br);
if (typeof document < "u" && typeof window < "u") {
  Ri();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, i = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !er(n)) && console.error(i);
      } catch {
        console.error(i);
      }
    });
  }
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let i in e) {
        const n = "IconifyProviders[" + i + "] is invalid.";
        try {
          const r = e[i];
          if (typeof r != "object" || !r || r.resources === void 0)
            continue;
          fr(i, r) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
function Zr(t, e, i, n, r) {
  function o() {
    e.loading && (e.loading.abort(), e.loading = null);
  }
  if (typeof t == "object" && t !== null && typeof t.body == "string")
    return e.name = "", o(), { data: { ...Dt, ...t } };
  let l;
  if (typeof t != "string" || (l = Vt(t, !1, !0)) === null)
    return o(), null;
  const s = $n(l);
  if (!s)
    return i && (!e.loading || e.loading.name !== t) && (o(), e.name = "", e.loading = {
      name: t,
      abort: zr([l], n)
    }), null;
  o(), e.name !== t && (e.name = t, r && !e.destroyed && r(t));
  const u = ["iconify"];
  return l.prefix !== "" && u.push("iconify--" + l.prefix), l.provider !== "" && u.push("iconify--" + l.provider), { data: s, classes: u };
}
function Qr(t, e) {
  return t ? Ur({
    ...Dt,
    ...t
  }, e) : null;
}
function Fe(t) {
  let e;
  function i(o, l) {
    return (
      /*data*/
      o[0].svg ? Jr : Kr
    );
  }
  let n = i(t), r = n(t);
  return {
    c() {
      r.c(), e = vt();
    },
    m(o, l) {
      r.m(o, l), L(o, e, l);
    },
    p(o, l) {
      n === (n = i(o)) && r ? r.p(o, l) : (r.d(1), r = n(o), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(o) {
      o && A(e), r.d(o);
    }
  };
}
function Kr(t) {
  let e, i = [
    /*data*/
    t[0].attributes
  ], n = {};
  for (let r = 0; r < i.length; r += 1)
    n = Rt(n, i[r]);
  return {
    c() {
      e = k("span"), ye(e, n);
    },
    m(r, o) {
      L(r, e, o);
    },
    p(r, o) {
      ye(e, n = wi(i, [o & /*data*/
      1 && /*data*/
      r[0].attributes]));
    },
    d(r) {
      r && A(e);
    }
  };
}
function Jr(t) {
  let e, i = (
    /*data*/
    t[0].body + ""
  ), n = [
    /*data*/
    t[0].attributes
  ], r = {};
  for (let o = 0; o < n.length; o += 1)
    r = Rt(r, n[o]);
  return {
    c() {
      e = Ui("svg"), _e(e, r);
    },
    m(o, l) {
      L(o, e, l), e.innerHTML = i;
    },
    p(o, l) {
      l & /*data*/
      1 && i !== (i = /*data*/
      o[0].body + "") && (e.innerHTML = i), _e(e, r = wi(n, [l & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && A(e);
    }
  };
}
function Xr(t) {
  let e, i = (
    /*data*/
    t[0] && Fe(t)
  );
  return {
    c() {
      i && i.c(), e = vt();
    },
    m(n, r) {
      i && i.m(n, r), L(n, e, r);
    },
    p(n, [r]) {
      /*data*/
      n[0] ? i ? i.p(n, r) : (i = Fe(n), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null);
    },
    i: F,
    o: F,
    d(n) {
      n && A(e), i && i.d(n);
    }
  };
}
function Yr(t, e, i) {
  const n = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let r = !1, o = 0, l;
  const s = (a) => {
    typeof e.onLoad == "function" && e.onLoad(a), wt()("load", { icon: a });
  };
  function u() {
    i(3, o++, o);
  }
  return gt(() => {
    i(2, r = !0);
  }), Ji(() => {
    i(1, n.destroyed = !0, n), n.loading && (n.loading.abort(), i(1, n.loading = null, n));
  }), t.$$set = (a) => {
    i(6, e = Rt(Rt({}, e), we(a)));
  }, t.$$.update = () => {
    {
      const a = Zr(e.icon, n, r, u, s);
      i(0, l = a ? Qr(a.data, e) : null), l && a.classes && i(
        0,
        l.attributes.class = (typeof e.class == "string" ? e.class + " " : "") + a.classes.join(" "),
        l
      );
    }
  }, e = we(e), [l, n, r, o];
}
class yt extends J {
  constructor(e) {
    super(), K(this, e, Yr, Xr, Q, {});
  }
}
function Ve(t, e, i) {
  const n = t.slice();
  return n[7] = e[i].title, n[8] = e[i].items, n[10] = i, n;
}
function De(t, e, i) {
  const n = t.slice();
  return n[7] = e[i].title, n[11] = e[i].icon, n[12] = e[i].url, n[13] = e[i].children, n[15] = i, n;
}
function qe(t) {
  let e, i = (
    /*title*/
    t[7] + ""
  ), n;
  return {
    c() {
      e = k("h2"), n = N(i), m(e, "class", "uikit-mb-2 uikit-px-4 uikit-text-lg uikit-font-semibold uikit-tracking-tight");
    },
    m(r, o) {
      L(r, e, o), g(e, n);
    },
    p(r, o) {
      o & /*menus*/
      2 && i !== (i = /*title*/
      r[7] + "") && G(n, i);
    },
    d(r) {
      r && A(e);
    }
  };
}
function Ue(t) {
  let e, i, n, r;
  return i = new Fi({
    props: {
      menus: (
        /*children*/
        t[13]
      ),
      onClick: (
        /*onClick*/
        t[3]
      ),
      isopen: (
        /*isopen*/
        t[0]
      ),
      prefix: `${/*prefix*/
      t[2]}-${/*i*/
      t[10]}-${/*i2*/
      t[15]}`
    }
  }), {
    c() {
      e = k("div"), ct(i.$$.fragment), n = M(), m(e, "class", "uikit-w-full uikit-transition"), st(
        e,
        "height",
        /*isopen*/
        t[0].startsWith(`${/*prefix*/
        t[2]}-${/*i*/
        t[10]}-${/*i2*/
        t[15]}`) ? "" : "0px"
      ), st(
        e,
        "display",
        /*isopen*/
        t[0].startsWith(`${/*prefix*/
        t[2]}-${/*i*/
        t[10]}-${/*i2*/
        t[15]}`) ? "" : "none"
      );
    },
    m(o, l) {
      L(o, e, l), rt(i, e, null), g(e, n), r = !0;
    },
    p(o, l) {
      const s = {};
      l & /*menus*/
      2 && (s.menus = /*children*/
      o[13]), l & /*onClick*/
      8 && (s.onClick = /*onClick*/
      o[3]), l & /*isopen*/
      1 && (s.isopen = /*isopen*/
      o[0]), l & /*prefix*/
      4 && (s.prefix = `${/*prefix*/
      o[2]}-${/*i*/
      o[10]}-${/*i2*/
      o[15]}`), i.$set(s), l & /*isopen, prefix*/
      5 && st(
        e,
        "height",
        /*isopen*/
        o[0].startsWith(`${/*prefix*/
        o[2]}-${/*i*/
        o[10]}-${/*i2*/
        o[15]}`) ? "" : "0px"
      ), l & /*isopen, prefix*/
      5 && st(
        e,
        "display",
        /*isopen*/
        o[0].startsWith(`${/*prefix*/
        o[2]}-${/*i*/
        o[10]}-${/*i2*/
        o[15]}`) ? "" : "none"
      );
    },
    i(o) {
      r || (P(i.$$.fragment, o), r = !0);
    },
    o(o) {
      H(i.$$.fragment, o), r = !1;
    },
    d(o) {
      o && A(e), ot(i);
    }
  };
}
function Ze(t) {
  let e, i, n, r, o, l = (
    /*title*/
    t[7] + ""
  ), s, u, a, c = !/*menuisempty*/
  t[4](
    /*children*/
    t[13]
  ), f, d, h, p;
  n = new yt({
    props: {
      class: "uikit-mr-2 uikit-h-4 uikit-w-4",
      icon: (
        /*icon*/
        t[11]
      )
    }
  });
  function x() {
    return (
      /*click_handler*/
      t[6](
        /*i*/
        t[10],
        /*i2*/
        t[15],
        /*url*/
        t[12],
        /*children*/
        t[13]
      )
    );
  }
  let b = c && Ue(t);
  return {
    c() {
      e = k("button"), i = k("section"), ct(n.$$.fragment), r = M(), o = k("p"), s = N(l), a = M(), b && b.c(), f = vt(), m(i, "class", "uikit-self-center"), m(e, "class", u = `uikit-flex uikit-w-full ${/*isopen*/
      t[0].startsWith(`${/*prefix*/
      t[2]}-${/*i*/
      t[10]}-${/*i2*/
      t[15]}`) ? "uikit-text-green-500 uikit-border-l-green-400 uikit-border-l-4" : ""}`);
    },
    m(w, v) {
      L(w, e, v), g(e, i), rt(n, i, null), g(e, r), g(e, o), g(o, s), L(w, a, v), b && b.m(w, v), L(w, f, v), d = !0, h || (p = tt(e, "click", x), h = !0);
    },
    p(w, v) {
      t = w;
      const S = {};
      v & /*menus*/
      2 && (S.icon = /*icon*/
      t[11]), n.$set(S), (!d || v & /*menus*/
      2) && l !== (l = /*title*/
      t[7] + "") && G(s, l), (!d || v & /*isopen, prefix*/
      5 && u !== (u = `uikit-flex uikit-w-full ${/*isopen*/
      t[0].startsWith(`${/*prefix*/
      t[2]}-${/*i*/
      t[10]}-${/*i2*/
      t[15]}`) ? "uikit-text-green-500 uikit-border-l-green-400 uikit-border-l-4" : ""}`)) && m(e, "class", u), v & /*menus*/
      2 && (c = !/*menuisempty*/
      t[4](
        /*children*/
        t[13]
      )), c ? b ? (b.p(t, v), v & /*menus*/
      2 && P(b, 1)) : (b = Ue(t), b.c(), P(b, 1), b.m(f.parentNode, f)) : b && (it(), H(b, 1, 1, () => {
        b = null;
      }), nt());
    },
    i(w) {
      d || (P(n.$$.fragment, w), P(b), d = !0);
    },
    o(w) {
      H(n.$$.fragment, w), H(b), d = !1;
    },
    d(w) {
      w && (A(e), A(a), A(f)), ot(n), b && b.d(w), h = !1, p();
    }
  };
}
function Qe(t) {
  let e, i, n, r, o, l = (
    /*title*/
    t[7] && qe(t)
  ), s = D(
    /*items*/
    t[8]
  ), u = [];
  for (let c = 0; c < s.length; c += 1)
    u[c] = Ze(De(t, s, c));
  const a = (c) => H(u[c], 1, 1, () => {
    u[c] = null;
  });
  return {
    c() {
      e = k("div"), l && l.c(), i = M(), n = k("div");
      for (let c = 0; c < u.length; c += 1)
        u[c].c();
      r = M(), m(n, "class", "uikit-space-y-1"), m(e, "class", "uikit-py-2");
    },
    m(c, f) {
      L(c, e, f), l && l.m(e, null), g(e, i), g(e, n);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(n, null);
      g(e, r), o = !0;
    },
    p(c, f) {
      if (/*title*/
      c[7] ? l ? l.p(c, f) : (l = qe(c), l.c(), l.m(e, i)) : l && (l.d(1), l = null), f & /*isopen, prefix, menus, onClick, menuisempty*/
      31) {
        s = D(
          /*items*/
          c[8]
        );
        let d;
        for (d = 0; d < s.length; d += 1) {
          const h = De(c, s, d);
          u[d] ? (u[d].p(h, f), P(u[d], 1)) : (u[d] = Ze(h), u[d].c(), P(u[d], 1), u[d].m(n, null));
        }
        for (it(), d = s.length; d < u.length; d += 1)
          a(d);
        nt();
      }
    },
    i(c) {
      if (!o) {
        for (let f = 0; f < s.length; f += 1)
          P(u[f]);
        o = !0;
      }
    },
    o(c) {
      u = u.filter(Boolean);
      for (let f = 0; f < u.length; f += 1)
        H(u[f]);
      o = !1;
    },
    d(c) {
      c && A(e), l && l.d(), $(u, c);
    }
  };
}
function $r(t) {
  let e, i, n = D(
    /*menus*/
    t[1]
  ), r = [];
  for (let l = 0; l < n.length; l += 1)
    r[l] = Qe(Ve(t, n, l));
  const o = (l) => H(r[l], 1, 1, () => {
    r[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      e = vt();
    },
    m(l, s) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(l, s);
      L(l, e, s), i = !0;
    },
    p(l, [s]) {
      if (s & /*menus, isopen, prefix, onClick, menuisempty*/
      31) {
        n = D(
          /*menus*/
          l[1]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = Ve(l, n, u);
          r[u] ? (r[u].p(a, s), P(r[u], 1)) : (r[u] = Qe(a), r[u].c(), P(r[u], 1), r[u].m(e.parentNode, e));
        }
        for (it(), u = n.length; u < r.length; u += 1)
          o(u);
        nt();
      }
    },
    i(l) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          P(r[s]);
        i = !0;
      }
    },
    o(l) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        H(r[s]);
      i = !1;
    },
    d(l) {
      l && A(e), $(r, l);
    }
  };
}
function to(t, e, i) {
  let { menus: n = [] } = e, { prefix: r = "" } = e, { isopen: o = "" } = e, { onClick: l = (c, f) => {
    console.log(c, f);
  } } = e;
  function s(c) {
    i(0, o = c);
  }
  const u = (c) => Array.isArray(c) ? c.length === 0 ? !0 : c[0].items.length === 0 : !c, a = (c, f, d, h) => {
    o === `${r}-${c}-${f}` ? i(0, o = r) : i(0, o = `${r}-${c}-${f}`), l(d, u(h));
  };
  return t.$$set = (c) => {
    "menus" in c && i(1, n = c.menus), "prefix" in c && i(2, r = c.prefix), "isopen" in c && i(0, o = c.isopen), "onClick" in c && i(3, l = c.onClick);
  }, [o, n, r, l, u, s, a];
}
class Fi extends J {
  constructor(e) {
    super(), K(this, e, to, $r, Q, {
      menus: 1,
      prefix: 2,
      isopen: 0,
      onClick: 3,
      open: 5
    });
  }
  get open() {
    return this.$$.ctx[5];
  }
}
function eo(t) {
  let e, i, n, r, o;
  return n = new Fi({
    props: {
      menus: (
        /*menusgroup*/
        t[3]
      ),
      onClick: (
        /*onClick*/
        t[1]
      ),
      isopen: (
        /*isopen*/
        t[0]
      )
    }
  }), {
    c() {
      e = k("div"), i = k("div"), ct(n.$$.fragment), m(i, "class", "uikit-space-y-4 uikit-py-4 uikit-w-full uikit-px-3"), m(e, "class", r = Y(
        "uikit-pb-12",
        /*className*/
        t[2]
      ));
    },
    m(l, s) {
      L(l, e, s), g(e, i), rt(n, i, null), o = !0;
    },
    p(l, [s]) {
      const u = {};
      s & /*menusgroup*/
      8 && (u.menus = /*menusgroup*/
      l[3]), s & /*onClick*/
      2 && (u.onClick = /*onClick*/
      l[1]), s & /*isopen*/
      1 && (u.isopen = /*isopen*/
      l[0]), n.$set(u), (!o || s & /*className*/
      4 && r !== (r = Y(
        "uikit-pb-12",
        /*className*/
        l[2]
      ))) && m(e, "class", r);
    },
    i(l) {
      o || (P(n.$$.fragment, l), o = !0);
    },
    o(l) {
      H(n.$$.fragment, l), o = !1;
    },
    d(l) {
      l && A(e), ot(n);
    }
  };
}
function io(t, e, i) {
  let { isopen: n = "" } = e, { menus: r = [] } = e, { onClick: o = (d, h) => {
    console.log(d, h);
  } } = e, { class: l = void 0 } = e;
  function s(d) {
    i(0, n = d);
  }
  function u(d) {
    i(0, n = c[d]);
  }
  let a = [], c = {};
  const f = () => {
    const d = (h, p) => {
      if (!p)
        return;
      let x = [{ title: "", items: [] }], b = 0;
      for (let w of p) {
        if (w.group) {
          b === x.length ? x.push({ title: "", items: [] }) : x[x.length - 1].items && (x.push({ title: "", items: [] }), b += 1), x[b].title = w.title, b += 1;
          continue;
        }
        x[x.length - 1].items.push({ ...w });
      }
      for (let w = 0; w < x.length; w++) {
        let v = [], S = x[w];
        for (let E = 0; E < S.items.length; E++) {
          let j = `${h}-${w}-${E}`;
          c[S.items[E].url] = j;
          let C = S.items[E];
          C.children ? v.push({
            ...C,
            children: d(j, C.children)
          }) : v.push({ ...C });
        }
        x[w].items = v;
      }
      return x;
    };
    i(3, a = d("", r)), console.log(a);
  };
  return t.$$set = (d) => {
    "isopen" in d && i(0, n = d.isopen), "menus" in d && i(4, r = d.menus), "onClick" in d && i(1, o = d.onClick), "class" in d && i(2, l = d.class);
  }, t.$$.update = () => {
    t.$$.dirty & /*menus*/
    16 && r && f();
  }, [n, o, l, a, r, s, u];
}
class jo extends J {
  constructor(e) {
    super(), K(this, e, io, eo, Q, {
      isopen: 0,
      menus: 4,
      onClick: 1,
      class: 2,
      openbyid: 5,
      openbyurl: 6
    });
  }
  get openbyid() {
    return this.$$.ctx[5];
  }
  get openbyurl() {
    return this.$$.ctx[6];
  }
}
function Ke(t, e, i) {
  const n = t.slice();
  return n[11] = e[i].title, n[12] = e[i].onClick, n;
}
function Je(t) {
  let e, i = (
    /*title*/
    t[11] + ""
  ), n, r, o, l;
  function s() {
    return (
      /*click_handler*/
      t[4](
        /*onClick*/
        t[12],
        /*title*/
        t[11]
      )
    );
  }
  return {
    c() {
      e = k("button"), n = N(i), r = M(), m(e, "class", "uikit-p-1 hover:uikit-bg-gray-200 uikit-cursor-pointer uikit-w-full uikit-h-full");
    },
    m(u, a) {
      L(u, e, a), g(e, n), g(e, r), o || (l = tt(e, "click", s), o = !0);
    },
    p(u, a) {
      t = u, a & /*menus*/
      1 && i !== (i = /*title*/
      t[11] + "") && G(n, i);
    },
    d(u) {
      u && A(e), o = !1, l();
    }
  };
}
function no(t) {
  let e, i, n = D(
    /*menus*/
    t[0]
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = Je(Ke(t, n, o));
  return {
    c() {
      e = k("div"), i = k("div");
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      m(i, "class", "uikit-p-2"), m(e, "class", "uikit-fixed uikit-z-10 uikit-bg-white uikit-border-gray-100 uikit-shadow-lg uikit-border-solid uikit-border-2"), xe(e, "uikit-hidden", !/*visible*/
      t[2]);
    },
    m(o, l) {
      L(o, e, l), g(e, i);
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(i, null);
      t[5](e);
    },
    p(o, [l]) {
      if (l & /*visible, menus*/
      5) {
        n = D(
          /*menus*/
          o[0]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const u = Ke(o, n, s);
          r[s] ? r[s].p(u, l) : (r[s] = Je(u), r[s].c(), r[s].m(i, null));
        }
        for (; s < r.length; s += 1)
          r[s].d(1);
        r.length = n.length;
      }
      l & /*visible*/
      4 && xe(e, "uikit-hidden", !/*visible*/
      o[2]);
    },
    i: F,
    o: F,
    d(o) {
      o && A(e), $(r, o), t[5](null);
    }
  };
}
function ro(t, e, i) {
  let { target: n } = e, { menus: r = [] } = e, o, l = !1, s = 0, u = 0;
  function a(h) {
    h.preventDefault(), i(2, l = !0), s = h.clientX, u = h.clientY, i(1, o.style.top = `${u}px`, o), i(1, o.style.left = `${s}px`, o);
  }
  function c(h) {
    h.target !== o && i(2, l = !1);
  }
  gt(() => {
    if (n)
      return n.addEventListener("click", c), n.addEventListener("contextmenu", a), () => {
        n.removeEventListener("click", c), n.removeEventListener("contextmenu", a);
      };
  });
  const f = (h, p) => {
    i(2, l = !1), h(p);
  };
  function d(h) {
    ut[h ? "unshift" : "push"](() => {
      o = h, i(1, o);
    });
  }
  return t.$$set = (h) => {
    "target" in h && i(3, n = h.target), "menus" in h && i(0, r = h.menus);
  }, [r, o, l, n, f, d];
}
class Ao extends J {
  constructor(e) {
    super(), K(this, e, ro, no, Q, { target: 3, menus: 0 });
  }
}
function Xe(t) {
  let e, i, n;
  return {
    c() {
      e = k("button"), e.textContent = "open", m(e, "class", "uikit-btn");
    },
    m(r, o) {
      L(r, e, o), i || (n = tt(e, "click", function() {
        ce(
          /*posDialog*/
          t[1].showModal()
        ) && t[1].showModal().apply(this, arguments);
      }), i = !0);
    },
    p(r, o) {
      t = r;
    },
    d(r) {
      r && A(e), i = !1, n();
    }
  };
}
function oo(t) {
  let e, i, n, r, o, l, s, u, a = !/*handle*/
  t[0] && Xe(t);
  return {
    c() {
      a && a.c(), e = M(), i = k("dialog"), n = k("div"), r = k("form"), r.innerHTML = '<button class="uikit-btn uikit-btn-sm uikit-btn-circle uikit-btn-ghost uikit-absolute uikit-right-2 uikit-top-2">✕</button>', o = M(), l = k("div"), l.innerHTML = '<h3 class="uikit-font-bold uikit-text-lg">Hello!</h3> <p class="uikit-py-4">Press ESC key or click on ✕ button to close</p>', s = M(), u = k("form"), u.innerHTML = "<button>close</button>", m(r, "method", "dialog"), m(n, "class", "uikit-modal-box"), m(u, "method", "dialog"), m(u, "class", "uikit-modal-backdrop"), m(i, "class", "uikit-modal");
    },
    m(c, f) {
      a && a.m(c, f), L(c, e, f), L(c, i, f), g(i, n), g(n, r), g(n, o), g(n, l), t[4](l), g(i, s), g(i, u), t[5](i);
    },
    p(c, [f]) {
      /*handle*/
      c[0] ? a && (a.d(1), a = null) : a ? a.p(c, f) : (a = Xe(c), a.c(), a.m(e.parentNode, e));
    },
    i: F,
    o: F,
    d(c) {
      c && (A(e), A(i)), a && a.d(c), t[4](null), t[5](null);
    }
  };
}
function lo(t, e, i) {
  let { handle: n = void 0 } = e, { content: r = void 0 } = e, o, l;
  gt(() => {
    console.log("here", n), n && n.addEventListener("click", () => {
      console.log("here"), o.showModal();
    }), r && (i(2, l.innerHTML = "", l), l.appendChild(r));
  });
  function s(a) {
    ut[a ? "unshift" : "push"](() => {
      l = a, i(2, l);
    });
  }
  function u(a) {
    ut[a ? "unshift" : "push"](() => {
      o = a, i(1, o);
    });
  }
  return t.$$set = (a) => {
    "handle" in a && i(0, n = a.handle), "content" in a && i(3, r = a.content);
  }, [n, o, l, r, s, u];
}
class Lo extends J {
  constructor(e) {
    super(), K(this, e, lo, oo, Q, { handle: 0, content: 3 });
  }
}
function Ye(t, e, i) {
  const n = t.slice();
  return n[10] = e[i].type, n[11] = e[i].title, n[12] = e[i].url, n[13] = e[i].icon, n[14] = e[i].items, n;
}
function $e(t, e, i) {
  const n = t.slice();
  return n[11] = e[i].title, n[12] = e[i].url, n;
}
function ti(t, e, i) {
  const n = t.slice();
  return n[10] = e[i].type, n[11] = e[i].title, n[12] = e[i].url, n[13] = e[i].icon, n[14] = e[i].items, n;
}
function ei(t, e, i) {
  const n = t.slice();
  return n[11] = e[i].title, n[12] = e[i].url, n;
}
function so(t) {
  let e, i, n, r, o = (
    /*title*/
    t[11] + ""
  ), l, s, u, a, c;
  n = new yt({ props: { icon: (
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
      e = k("li"), i = k("button"), ct(n.$$.fragment), r = k("span"), l = N(o), s = M(), m(r, "class", "uikit-ml-2"), m(i, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case"), m(e, "class", "nav-item");
    },
    m(d, h) {
      L(d, e, h), g(e, i), rt(n, i, null), g(i, r), g(r, l), g(e, s), u = !0, a || (c = tt(i, "click", f), a = !0);
    },
    p(d, h) {
      t = d;
      const p = {};
      h & /*links*/
      8 && (p.icon = /*icon*/
      t[13]), n.$set(p), (!u || h & /*links*/
      8) && o !== (o = /*title*/
      t[11] + "") && G(l, o);
    },
    i(d) {
      u || (P(n.$$.fragment, d), u = !0);
    },
    o(d) {
      H(n.$$.fragment, d), u = !1;
    },
    d(d) {
      d && A(e), ot(n), a = !1, c();
    }
  };
}
function uo(t) {
  let e, i, n, r = (
    /*title*/
    t[11] + ""
  ), o, l, s, u, a = D(
    /*items*/
    t[14]
  ), c = [];
  for (let f = 0; f < a.length; f += 1)
    c[f] = ii(ei(t, a, f));
  return {
    c() {
      e = k("li"), i = k("div"), n = k("label"), o = N(r), l = M(), s = k("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      u = M(), m(n, "tabindex", "1"), m(n, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), m(s, "tabindex", "1"), m(s, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), m(i, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), m(e, "class", "nav-item");
    },
    m(f, d) {
      L(f, e, d), g(e, i), g(i, n), g(n, o), g(i, l), g(i, s);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(s, null);
      g(e, u);
    },
    p(f, d) {
      if (d & /*links*/
      8 && r !== (r = /*title*/
      f[11] + "") && G(o, r), d & /*onItemClick, links*/
      24) {
        a = D(
          /*items*/
          f[14]
        );
        let h;
        for (h = 0; h < a.length; h += 1) {
          const p = ei(f, a, h);
          c[h] ? c[h].p(p, d) : (c[h] = ii(p), c[h].c(), c[h].m(s, null));
        }
        for (; h < c.length; h += 1)
          c[h].d(1);
        c.length = a.length;
      }
    },
    i: F,
    o: F,
    d(f) {
      f && A(e), $(c, f);
    }
  };
}
function ii(t) {
  let e, i, n = (
    /*title*/
    t[11] + ""
  ), r, o, l, s;
  function u() {
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
      e = k("li"), i = k("button"), r = N(n), o = M();
    },
    m(a, c) {
      L(a, e, c), g(e, i), g(i, r), g(e, o), l || (s = tt(i, "click", u), l = !0);
    },
    p(a, c) {
      t = a, c & /*links*/
      8 && n !== (n = /*title*/
      t[11] + "") && G(r, n);
    },
    d(a) {
      a && A(e), l = !1, s();
    }
  };
}
function ni(t) {
  let e, i, n, r;
  const o = [uo, so], l = [];
  function s(u, a) {
    return (
      /*type*/
      u[10] === "menu" ? 0 : 1
    );
  }
  return e = s(t), i = l[e] = o[e](t), {
    c() {
      i.c(), n = vt();
    },
    m(u, a) {
      l[e].m(u, a), L(u, n, a), r = !0;
    },
    p(u, a) {
      let c = e;
      e = s(u), e === c ? l[e].p(u, a) : (it(), H(l[c], 1, 1, () => {
        l[c] = null;
      }), nt(), i = l[e], i ? i.p(u, a) : (i = l[e] = o[e](u), i.c()), P(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (P(i), r = !0);
    },
    o(u) {
      H(i), r = !1;
    },
    d(u) {
      u && A(n), l[e].d(u);
    }
  };
}
function co(t) {
  let e, i, n, r, o = (
    /*title*/
    t[11] + ""
  ), l, s, u, a, c;
  n = new yt({ props: { icon: (
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
      e = k("li"), i = k("button"), ct(n.$$.fragment), r = k("span"), l = N(o), s = M(), m(r, "class", "uikit-ml-2"), m(i, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case uikit-items-start"), m(e, "class", "uikit-nav-item");
    },
    m(d, h) {
      L(d, e, h), g(e, i), rt(n, i, null), g(i, r), g(r, l), g(e, s), u = !0, a || (c = tt(i, "click", f), a = !0);
    },
    p(d, h) {
      t = d;
      const p = {};
      h & /*links*/
      8 && (p.icon = /*icon*/
      t[13]), n.$set(p), (!u || h & /*links*/
      8) && o !== (o = /*title*/
      t[11] + "") && G(l, o);
    },
    i(d) {
      u || (P(n.$$.fragment, d), u = !0);
    },
    o(d) {
      H(n.$$.fragment, d), u = !1;
    },
    d(d) {
      d && A(e), ot(n), a = !1, c();
    }
  };
}
function ao(t) {
  let e, i, n, r = (
    /*title*/
    t[11] + ""
  ), o, l, s, u, a = D(
    /*items*/
    t[14]
  ), c = [];
  for (let f = 0; f < a.length; f += 1)
    c[f] = ri($e(t, a, f));
  return {
    c() {
      e = k("li"), i = k("div"), n = k("label"), o = N(r), l = M(), s = k("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      u = M(), m(n, "tabindex", "1"), m(n, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), m(s, "tabindex", "1"), m(s, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), m(i, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), m(e, "class", "uikit-nav-item uikit-w-full");
    },
    m(f, d) {
      L(f, e, d), g(e, i), g(i, n), g(n, o), g(i, l), g(i, s);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(s, null);
      g(e, u);
    },
    p(f, d) {
      if (d & /*links*/
      8 && r !== (r = /*title*/
      f[11] + "") && G(o, r), d & /*onItemClick, links*/
      24) {
        a = D(
          /*items*/
          f[14]
        );
        let h;
        for (h = 0; h < a.length; h += 1) {
          const p = $e(f, a, h);
          c[h] ? c[h].p(p, d) : (c[h] = ri(p), c[h].c(), c[h].m(s, null));
        }
        for (; h < c.length; h += 1)
          c[h].d(1);
        c.length = a.length;
      }
    },
    i: F,
    o: F,
    d(f) {
      f && A(e), $(c, f);
    }
  };
}
function ri(t) {
  let e, i, n = (
    /*title*/
    t[11] + ""
  ), r, o, l, s;
  function u() {
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
      e = k("li"), i = k("button"), r = N(n), o = M();
    },
    m(a, c) {
      L(a, e, c), g(e, i), g(i, r), g(e, o), l || (s = tt(i, "click", u), l = !0);
    },
    p(a, c) {
      t = a, c & /*links*/
      8 && n !== (n = /*title*/
      t[11] + "") && G(r, n);
    },
    d(a) {
      a && A(e), l = !1, s();
    }
  };
}
function oi(t) {
  let e, i, n, r;
  const o = [ao, co], l = [];
  function s(u, a) {
    return (
      /*type*/
      u[10] === "menu" ? 0 : 1
    );
  }
  return e = s(t), i = l[e] = o[e](t), {
    c() {
      i.c(), n = vt();
    },
    m(u, a) {
      l[e].m(u, a), L(u, n, a), r = !0;
    },
    p(u, a) {
      let c = e;
      e = s(u), e === c ? l[e].p(u, a) : (it(), H(l[c], 1, 1, () => {
        l[c] = null;
      }), nt(), i = l[e], i ? i.p(u, a) : (i = l[e] = o[e](u), i.c()), P(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (P(i), r = !0);
    },
    o(u) {
      H(i), r = !1;
    },
    d(u) {
      u && A(n), l[e].d(u);
    }
  };
}
function fo(t) {
  let e, i, n, r, o, l, s, u, a, c, f, d, h, p, x, b, w, v, S, E, j, C, R, z = D(
    /*links*/
    t[3]
  ), B = [];
  for (let _ = 0; _ < z.length; _ += 1)
    B[_] = ni(ti(t, z, _));
  const q = (_) => H(B[_], 1, 1, () => {
    B[_] = null;
  });
  let W = D(
    /*links*/
    t[3]
  ), I = [];
  for (let _ = 0; _ < W.length; _ += 1)
    I[_] = oi(Ye(t, W, _));
  const U = (_) => H(I[_], 1, 1, () => {
    I[_] = null;
  });
  return {
    c() {
      e = k("nav"), i = k("div"), n = k("div"), r = k("button"), o = N(
        /*logotxt*/
        t[1]
      ), l = M(), s = k("div"), u = k("ul");
      for (let _ = 0; _ < B.length; _ += 1)
        B[_].c();
      a = M(), c = k("div"), f = k("div"), d = k("input"), h = M(), p = k("div"), p.innerHTML = '<label for="my-drawer" class="uikit-btn uikit-btn-ghost uikit-drawer-button"><div class="uikit-ml-1 uikit-mr-1 uikit-h-8 uikit-w-8 uikit-rounded uikit-py-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="uikit-text-gray-900 dark:uikit-text-gray-100"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></div></label>', x = M(), b = k("div"), w = k("label"), v = M(), S = k("ul");
      for (let _ = 0; _ < I.length; _ += 1)
        I[_].c();
      m(r, "class", "uikit-text-sm uikit-font-bold uikit-leading-relaxed uikit-inline-block uikit-mr-4 uikit-py-2 uikit-whitespace-nowrap uikit-text-slate-700"), m(n, "class", "uikit-relative uikit-flex uikit-justify-between lg:uikit-w-auto lg:uikit-static lg:uikit-block lg:uikit-justify-start"), m(u, "class", "uikit-flex uikit-flex-col lg:uikit-flex-row uikit-list-none lg:uikit-ml-auto"), m(s, "class", "lg:uikit-flex uikit-flex-grow uikit-items-center uikit-hidden"), m(d, "id", "my-drawer"), m(d, "type", "checkbox"), m(d, "class", "uikit-drawer-toggle"), m(p, "class", "uikit-drawer-content"), m(w, "for", "my-drawer"), m(w, "class", "uikit-drawer-overlay"), m(S, "class", "uikit-menu uikit-p-4 uikit-w-80 uikit-min-h-full uikit-bg-base-200 uikit-text-base-content"), m(b, "class", "uikit-drawer-side"), m(f, "class", "uikit-drawer"), m(c, "class", "lg:uikit-hidden"), m(i, "class", "uikit-container uikit-px-4 uikit-mx-auto uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between"), m(e, "class", E = Y(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        t[0]
      ));
    },
    m(_, T) {
      L(_, e, T), g(e, i), g(i, n), g(n, r), g(r, o), g(i, l), g(i, s), g(s, u);
      for (let y = 0; y < B.length; y += 1)
        B[y] && B[y].m(u, null);
      g(i, a), g(i, c), g(c, f), g(f, d), g(f, h), g(f, p), g(f, x), g(f, b), g(b, w), g(b, v), g(b, S);
      for (let y = 0; y < I.length; y += 1)
        I[y] && I[y].m(S, null);
      j = !0, C || (R = tt(
        r,
        "click",
        /*click_handler*/
        t[5]
      ), C = !0);
    },
    p(_, [T]) {
      if ((!j || T & /*logotxt*/
      2) && G(
        o,
        /*logotxt*/
        _[1]
      ), T & /*links, onItemClick*/
      24) {
        z = D(
          /*links*/
          _[3]
        );
        let y;
        for (y = 0; y < z.length; y += 1) {
          const Z = ti(_, z, y);
          B[y] ? (B[y].p(Z, T), P(B[y], 1)) : (B[y] = ni(Z), B[y].c(), P(B[y], 1), B[y].m(u, null));
        }
        for (it(), y = z.length; y < B.length; y += 1)
          q(y);
        nt();
      }
      if (T & /*links, onItemClick*/
      24) {
        W = D(
          /*links*/
          _[3]
        );
        let y;
        for (y = 0; y < W.length; y += 1) {
          const Z = Ye(_, W, y);
          I[y] ? (I[y].p(Z, T), P(I[y], 1)) : (I[y] = oi(Z), I[y].c(), P(I[y], 1), I[y].m(S, null));
        }
        for (it(), y = W.length; y < I.length; y += 1)
          U(y);
        nt();
      }
      (!j || T & /*className*/
      1 && E !== (E = Y(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        _[0]
      ))) && m(e, "class", E);
    },
    i(_) {
      if (!j) {
        for (let T = 0; T < z.length; T += 1)
          P(B[T]);
        for (let T = 0; T < W.length; T += 1)
          P(I[T]);
        j = !0;
      }
    },
    o(_) {
      B = B.filter(Boolean);
      for (let T = 0; T < B.length; T += 1)
        H(B[T]);
      I = I.filter(Boolean);
      for (let T = 0; T < I.length; T += 1)
        H(I[T]);
      j = !1;
    },
    d(_) {
      _ && A(e), $(B, _), $(I, _), C = !1, R();
    }
  };
}
function go(t, e, i) {
  let { class: n = "" } = e, { logotxt: r = "wwqdrh" } = e, { logourl: o = "#" } = e, { links: l = [] } = e, { onItemClick: s = (h) => {
    window.location.href = h;
  } } = e;
  const u = () => s(o), a = (h) => s(h), c = (h) => s(h), f = (h) => s(h), d = (h) => s(h);
  return t.$$set = (h) => {
    "class" in h && i(0, n = h.class), "logotxt" in h && i(1, r = h.logotxt), "logourl" in h && i(2, o = h.logourl), "links" in h && i(3, l = h.links), "onItemClick" in h && i(4, s = h.onItemClick);
  }, [
    n,
    r,
    o,
    l,
    s,
    u,
    a,
    c,
    f,
    d
  ];
}
class ho extends J {
  constructor(e) {
    super(), K(this, e, go, fo, Q, {
      class: 0,
      logotxt: 1,
      logourl: 2,
      links: 3,
      onItemClick: 4
    });
  }
}
function li(t, e, i) {
  const n = t.slice();
  return n[7] = e[i], n;
}
function si(t) {
  let e, i = (
    /*item*/
    t[7] + ""
  ), n, r, o;
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
      e = k("button"), n = N(i), m(e, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(s, u) {
      L(s, e, u), g(e, n), r || (o = tt(e, "click", l), r = !0);
    },
    p(s, u) {
      t = s, u & /*buttons*/
      8 && i !== (i = /*item*/
      t[7] + "") && G(n, i);
    },
    d(s) {
      s && A(e), r = !1, o();
    }
  };
}
function mo(t) {
  let e, i, n, r, o, l, s, u, a, c, f, d, h, p, x, b = D(
    /*buttons*/
    t[3]
  ), w = [];
  for (let v = 0; v < b.length; v += 1)
    w[v] = si(li(t, b, v));
  return {
    c() {
      e = k("section"), i = k("div"), n = k("div"), r = k("div"), o = k("h2"), l = N(
        /*title*/
        t[0]
      ), s = M(), u = k("p"), a = N(
        /*description*/
        t[1]
      ), c = M(), f = k("div");
      for (let v = 0; v < w.length; v += 1)
        w[v].c();
      d = M(), h = k("img"), m(o, "class", "uikit-font-semibold uikit-text-4xl uikit-text-slate-600"), m(u, "class", "uikit-mt-4 uikit-text-lg uikit-leading-relaxed uikit-text-slate-500"), m(f, "class", "uikit-mt-12"), m(r, "class", "uikit-pt-32 sm:uikit-pt-0"), m(n, "class", "uikit-w-full md:uikit-w-8/12 lg:uikit-w-6/12 xl:uikit-w-6/12 uikit-px-4"), m(i, "class", "uikit-container uikit-mx-auto uikit-items-center uikit-flex uikit-flex-wrap"), m(h, "class", "uikit-absolute uikit-top-0 uikit-b-auto uikit-right-0 uikit-pt-16 sm:uikit-w-6/12 uikit--mt-48 sm:uikit-mt-0 uikit-w-10/12"), Wt(h.src, p = /*cover*/
      t[5]) || m(h, "src", p), m(h, "alt", "..."), st(h, "max-height", "860px"), m(e, "class", x = Y(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        t[2]
      )), st(e, "max-height", "860px");
    },
    m(v, S) {
      L(v, e, S), g(e, i), g(i, n), g(n, r), g(r, o), g(o, l), g(r, s), g(r, u), g(u, a), g(r, c), g(r, f);
      for (let E = 0; E < w.length; E += 1)
        w[E] && w[E].m(f, null);
      g(e, d), g(e, h);
    },
    p(v, [S]) {
      if (S & /*title*/
      1 && G(
        l,
        /*title*/
        v[0]
      ), S & /*description*/
      2 && G(
        a,
        /*description*/
        v[1]
      ), S & /*buttonClick, buttons*/
      24) {
        b = D(
          /*buttons*/
          v[3]
        );
        let E;
        for (E = 0; E < b.length; E += 1) {
          const j = li(v, b, E);
          w[E] ? w[E].p(j, S) : (w[E] = si(j), w[E].c(), w[E].m(f, null));
        }
        for (; E < w.length; E += 1)
          w[E].d(1);
        w.length = b.length;
      }
      S & /*cover*/
      32 && !Wt(h.src, p = /*cover*/
      v[5]) && m(h, "src", p), S & /*className*/
      4 && x !== (x = Y(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        v[2]
      )) && m(e, "class", x);
    },
    i: F,
    o: F,
    d(v) {
      v && A(e), $(w, v);
    }
  };
}
function po(t, e, i) {
  let { title: n = "wwqdrh's ui component: uikit" } = e, { description: r = "a cross framework web component, you can visit it in wwqdrh'home" } = e, { class: o = "" } = e, { buttons: l = [] } = e, { buttonClick: s = (c) => {
    console.log(c);
  } } = e, { cover: u = "" } = e;
  const a = (c) => s(c);
  return t.$$set = (c) => {
    "title" in c && i(0, n = c.title), "description" in c && i(1, r = c.description), "class" in c && i(2, o = c.class), "buttons" in c && i(3, l = c.buttons), "buttonClick" in c && i(4, s = c.buttonClick), "cover" in c && i(5, u = c.cover);
  }, [n, r, o, l, s, u, a];
}
class ko extends J {
  constructor(e) {
    super(), K(this, e, po, mo, Q, {
      title: 0,
      description: 1,
      class: 2,
      buttons: 3,
      buttonClick: 4,
      cover: 5
    });
  }
}
function ui(t, e, i) {
  const n = t.slice();
  return n[4] = e[i].icon, n[2] = e[i].title, n[3] = e[i].description, n;
}
function ci(t) {
  let e, i, n, r, o, l = (
    /*title*/
    t[2] + ""
  ), s, u, a, c = (
    /*description*/
    t[3] + ""
  ), f, d, h;
  return n = new yt({
    props: {
      class: "uikit-w-5 uikit-h-5 uikit-text-primary-600 lg:uikit-w-6 lg:uikit-h-6 dark:uikit-text-primary-300",
      icon: (
        /*icon*/
        t[4]
      )
    }
  }), {
    c() {
      e = k("div"), i = k("div"), ct(n.$$.fragment), r = M(), o = k("h3"), s = N(l), u = M(), a = k("p"), f = N(c), d = M(), m(i, "class", "uikit-flex uikit-justify-center uikit-items-center uikit-mb-4 uikit-w-10 uikit-h-10 uikit-rounded-full uikit-bg-primary-100 lg:uikit-h-12 lg:uikit-w-12 dark:uikit-bg-primary-900"), m(o, "class", "uikit-mb-2 uikit-text-xl uikit-font-bold dark:uikit-text-white"), m(a, "class", "uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(p, x) {
      L(p, e, x), g(e, i), rt(n, i, null), g(e, r), g(e, o), g(o, s), g(e, u), g(e, a), g(a, f), g(e, d), h = !0;
    },
    p(p, x) {
      const b = {};
      x & /*features*/
      2 && (b.icon = /*icon*/
      p[4]), n.$set(b), (!h || x & /*features*/
      2) && l !== (l = /*title*/
      p[2] + "") && G(s, l), (!h || x & /*features*/
      2) && c !== (c = /*description*/
      p[3] + "") && G(f, c);
    },
    i(p) {
      h || (P(n.$$.fragment, p), h = !0);
    },
    o(p) {
      H(n.$$.fragment, p), h = !1;
    },
    d(p) {
      p && A(e), ot(n);
    }
  };
}
function bo(t) {
  let e, i, n, r, o, l, s, u, a, c, f, d, h = D(
    /*features*/
    t[1]
  ), p = [];
  for (let b = 0; b < h.length; b += 1)
    p[b] = ci(ui(t, h, b));
  const x = (b) => H(p[b], 1, 1, () => {
    p[b] = null;
  });
  return {
    c() {
      e = k("section"), i = k("div"), n = k("div"), r = k("h2"), o = N(
        /*title*/
        t[2]
      ), l = M(), s = k("p"), u = N(
        /*description*/
        t[3]
      ), a = M(), c = k("div");
      for (let b = 0; b < p.length; b += 1)
        p[b].c();
      m(r, "class", "uikit-mb-4 uikit-text-4xl uikit-font-extrabold uikit-text-gray-900 dark:uikit-text-white"), m(s, "class", "uikit-text-gray-500 sm:uikit-text-xl dark:uikit-text-gray-400"), m(n, "class", "uikit-mb-8 uikit-max-w-screen-md lg:uikit-mb-16"), m(c, "class", "uikit-space-y-8 md:uikit-grid md:uikit-grid-cols-2 lg:uikit-grid-cols-3 md:uikit-gap-12 md:uikit-space-y-0"), m(i, "class", "uikit-py-8 uikit-px-4 uikit-mx-auto uikit-max-w-screen-xl sm:uikit-py-16 lg:uikit-px-6"), m(e, "class", f = Y(
        "dark:uikit-bg-gray-800",
        /*className*/
        t[0]
      ));
    },
    m(b, w) {
      L(b, e, w), g(e, i), g(i, n), g(n, r), g(r, o), g(n, l), g(n, s), g(s, u), g(i, a), g(i, c);
      for (let v = 0; v < p.length; v += 1)
        p[v] && p[v].m(c, null);
      d = !0;
    },
    p(b, [w]) {
      if ((!d || w & /*title*/
      4) && G(
        o,
        /*title*/
        b[2]
      ), (!d || w & /*description*/
      8) && G(
        u,
        /*description*/
        b[3]
      ), w & /*features*/
      2) {
        h = D(
          /*features*/
          b[1]
        );
        let v;
        for (v = 0; v < h.length; v += 1) {
          const S = ui(b, h, v);
          p[v] ? (p[v].p(S, w), P(p[v], 1)) : (p[v] = ci(S), p[v].c(), P(p[v], 1), p[v].m(c, null));
        }
        for (it(), v = h.length; v < p.length; v += 1)
          x(v);
        nt();
      }
      (!d || w & /*className*/
      1 && f !== (f = Y(
        "dark:uikit-bg-gray-800",
        /*className*/
        b[0]
      ))) && m(e, "class", f);
    },
    i(b) {
      if (!d) {
        for (let w = 0; w < h.length; w += 1)
          P(p[w]);
        d = !0;
      }
    },
    o(b) {
      p = p.filter(Boolean);
      for (let w = 0; w < p.length; w += 1)
        H(p[w]);
      d = !1;
    },
    d(b) {
      b && A(e), $(p, b);
    }
  };
}
function vo(t, e, i) {
  let { class: n = "" } = e, { title: r = "" } = e, { description: o = "" } = e, { features: l = [] } = e;
  return t.$$set = (s) => {
    "class" in s && i(0, n = s.class), "title" in s && i(2, r = s.title), "description" in s && i(3, o = s.description), "features" in s && i(1, l = s.features);
  }, [n, l, r, o];
}
class wo extends J {
  constructor(e) {
    super(), K(this, e, vo, bo, Q, {
      class: 0,
      title: 2,
      description: 3,
      features: 1
    });
  }
}
function ai(t, e, i) {
  const n = t.slice();
  return n[11] = e[i], n[13] = i, n;
}
function fi(t, e, i) {
  const n = t.slice();
  return n[11] = e[i], n;
}
function di(t, e, i) {
  const n = t.slice();
  return n[8] = e[i].icon, n[9] = e[i].description, n;
}
function gi(t) {
  let e, i, n;
  return i = new yt({ props: { icon: (
    /*icon*/
    t[8]
  ) } }), {
    c() {
      e = k("div"), ct(i.$$.fragment), m(e, "class", "uikit-text-slate-500 uikit-p-3 uikit-text-center uikit-inline-flex uikit-items-center uikit-justify-center uikit-w-16 uikit-h-16 uikit-mb-6 uikit-shadow-lg uikit-rounded-full uikit-bg-white");
    },
    m(r, o) {
      L(r, e, o), rt(i, e, null), n = !0;
    },
    p(r, o) {
      const l = {};
      o & /*icon*/
      256 && (l.icon = /*icon*/
      r[8]), i.$set(l);
    },
    i(r) {
      n || (P(i.$$.fragment, r), n = !0);
    },
    o(r) {
      H(i.$$.fragment, r), n = !1;
    },
    d(r) {
      r && A(e), ot(i);
    }
  };
}
function hi(t) {
  let e, i;
  return e = new yt({ props: { icon: (
    /*icon*/
    t[8]
  ) } }), {
    c() {
      ct(e.$$.fragment);
    },
    m(n, r) {
      rt(e, n, r), i = !0;
    },
    p(n, r) {
      const o = {};
      r & /*sections*/
      16 && (o.icon = /*icon*/
      n[8]), e.$set(o);
    },
    i(n) {
      i || (P(e.$$.fragment, n), i = !0);
    },
    o(n) {
      H(e.$$.fragment, n), i = !1;
    },
    d(n) {
      ot(e, n);
    }
  };
}
function mi(t) {
  let e, i, n, r = (
    /*description*/
    t[9] + ""
  ), o, l, s = (
    /*icon*/
    t[8] && hi(t)
  );
  return {
    c() {
      e = k("li"), i = k("span"), s && s.c(), n = M(), o = N(r), m(i, "class", "uikit-text-xs uikit-font-semibold uikit-inline-block uikit-py-1 uikit-px-2 uikit-rounded-full uikit-text-slate-500 uikit-bg-slate-50 uikit-mr-3"), m(e, "class", "uikit-py-2");
    },
    m(u, a) {
      L(u, e, a), g(e, i), s && s.m(i, null), g(i, n), g(i, o), l = !0;
    },
    p(u, a) {
      /*icon*/
      u[8] ? s ? (s.p(u, a), a & /*sections*/
      16 && P(s, 1)) : (s = hi(u), s.c(), P(s, 1), s.m(i, n)) : s && (it(), H(s, 1, 1, () => {
        s = null;
      }), nt()), (!l || a & /*sections*/
      16) && r !== (r = /*description*/
      u[9] + "") && G(o, r);
    },
    i(u) {
      l || (P(s), l = !0);
    },
    o(u) {
      H(s), l = !1;
    },
    d(u) {
      u && A(e), s && s.d();
    }
  };
}
function pi(t) {
  let e, i = (
    /*item*/
    t[11] + ""
  ), n, r, o;
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
      e = k("button"), n = N(i), m(e, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(s, u) {
      L(s, e, u), g(e, n), r || (o = tt(e, "click", l), r = !0);
    },
    p(s, u) {
      t = s, u & /*buttons*/
      32 && i !== (i = /*item*/
      t[11] + "") && G(n, i);
    },
    d(s) {
      s && A(e), r = !1, o();
    }
  };
}
function ki(t) {
  let e, i, n, r, o, l, s, u, a, c, f, d, h, p;
  return {
    c() {
      e = k("div"), i = k("img"), r = M(), o = k("div"), l = k("a"), s = N("❮"), a = M(), c = k("a"), f = N("❯"), h = M(), m(i, "alt", "..."), m(i, "class", "uikit-max-w-full uikit-rounded-lg uikit-shadow-xl"), st(i, "transform", "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"), Wt(i.src, n = /*item*/
      t[11]) || m(i, "src", n), m(l, "href", u = `#pd-cover-slide-${/*id*/
      t[1]}-${/*i*/
      (t[13] - 1 + /*covers*/
      t[2].length) % /*covers*/
      t[2].length}`), m(l, "class", "uikit-btn uikit-btn-circle"), m(c, "href", d = `#pd-cover-slide-${/*id*/
      t[1]}-${/*i*/
      (t[13] + 1) % /*covers*/
      t[2].length}`), m(c, "class", "uikit-btn uikit-btn-circle"), m(o, "class", "uikit-absolute uikit-flex uikit-justify-between uikit-transform uikit--translate-y-1/2 uikit-left-5 uikit-right-5 uikit-top-1/2"), m(e, "id", p = `pd-cover-slide-${/*id*/
      t[1]}-${/*i*/
      t[13]}`), m(e, "class", "uikit-carousel-item uikit-relative uikit-w-full");
    },
    m(x, b) {
      L(x, e, b), g(e, i), g(e, r), g(e, o), g(o, l), g(l, s), g(o, a), g(o, c), g(c, f), g(e, h);
    },
    p(x, b) {
      b & /*covers*/
      4 && !Wt(i.src, n = /*item*/
      x[11]) && m(i, "src", n), b & /*id, covers*/
      6 && u !== (u = `#pd-cover-slide-${/*id*/
      x[1]}-${/*i*/
      (x[13] - 1 + /*covers*/
      x[2].length) % /*covers*/
      x[2].length}`) && m(l, "href", u), b & /*id, covers*/
      6 && d !== (d = `#pd-cover-slide-${/*id*/
      x[1]}-${/*i*/
      (x[13] + 1) % /*covers*/
      x[2].length}`) && m(c, "href", d), b & /*id*/
      2 && p !== (p = `pd-cover-slide-${/*id*/
      x[1]}-${/*i*/
      x[13]}`) && m(e, "id", p);
    },
    d(x) {
      x && A(e);
    }
  };
}
function yo(t) {
  let e, i, n, r, o, l, s, u, a, c, f, d, h, p, x, b, w, v, S, E, j, C = (
    /*icon*/
    t[8] && gi(t)
  ), R = D(
    /*sections*/
    t[4]
  ), z = [];
  for (let _ = 0; _ < R.length; _ += 1)
    z[_] = mi(di(t, R, _));
  const B = (_) => H(z[_], 1, 1, () => {
    z[_] = null;
  });
  let q = D(
    /*buttons*/
    t[5]
  ), W = [];
  for (let _ = 0; _ < q.length; _ += 1)
    W[_] = pi(fi(t, q, _));
  let I = D(
    /*covers*/
    t[2]
  ), U = [];
  for (let _ = 0; _ < I.length; _ += 1)
    U[_] = ki(ai(t, I, _));
  return {
    c() {
      e = k("div"), i = k("div"), n = k("div"), r = k("div"), o = k("div"), C && C.c(), l = M(), s = k("h3"), u = N(
        /*title*/
        t[3]
      ), a = M(), c = k("p"), f = N(
        /*description*/
        t[9]
      ), d = M(), h = k("ul");
      for (let _ = 0; _ < z.length; _ += 1)
        z[_].c();
      p = M(), x = k("div");
      for (let _ = 0; _ < W.length; _ += 1)
        W[_].c();
      b = M(), w = k("div"), v = k("div");
      for (let _ = 0; _ < U.length; _ += 1)
        U[_].c();
      m(s, "class", "uikit-text-3xl uikit-font-semibold"), m(c, "class", "uikit-mt-4 uikit-text-md uikit-leading-relaxed uikit-text-slate-500"), m(h, "class", "uikit-list-none uikit-mt-6"), m(o, "class", "md:uikit-pr-12"), m(r, "class", "uikit-w-full md:uikit-w-1/3 uikit-ml-auto uikit-px-12 md:uikit-px-4"), m(v, "class", "uikit-carousel uikit-carousel-center uikit-w-full"), m(w, "class", "uikit-w-full md:uikit-w-2/3 uikit-mr-auto uikit-px-4 uikit-pt-24 md:uikit-pt-0"), m(n, "class", S = Y(
        "uikit-flex uikit-justify-between uikit-w-full",
        /*rtl*/
        t[6] ? "uikit-flex-row-reverse" : ""
      )), m(i, "class", "uikit-items-center uikit-flex uikit-flex-wrap uikit-w-full"), m(e, "class", E = Y(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        t[0]
      ));
    },
    m(_, T) {
      L(_, e, T), g(e, i), g(i, n), g(n, r), g(r, o), C && C.m(o, null), g(o, l), g(o, s), g(s, u), g(o, a), g(o, c), g(c, f), g(o, d), g(o, h);
      for (let y = 0; y < z.length; y += 1)
        z[y] && z[y].m(h, null);
      g(h, p), g(h, x);
      for (let y = 0; y < W.length; y += 1)
        W[y] && W[y].m(x, null);
      g(n, b), g(n, w), g(w, v);
      for (let y = 0; y < U.length; y += 1)
        U[y] && U[y].m(v, null);
      j = !0;
    },
    p(_, [T]) {
      if (/*icon*/
      _[8] ? C ? (C.p(_, T), T & /*icon*/
      256 && P(C, 1)) : (C = gi(_), C.c(), P(C, 1), C.m(o, l)) : C && (it(), H(C, 1, 1, () => {
        C = null;
      }), nt()), (!j || T & /*title*/
      8) && G(
        u,
        /*title*/
        _[3]
      ), (!j || T & /*description*/
      512) && G(
        f,
        /*description*/
        _[9]
      ), T & /*sections*/
      16) {
        R = D(
          /*sections*/
          _[4]
        );
        let y;
        for (y = 0; y < R.length; y += 1) {
          const Z = di(_, R, y);
          z[y] ? (z[y].p(Z, T), P(z[y], 1)) : (z[y] = mi(Z), z[y].c(), P(z[y], 1), z[y].m(h, p));
        }
        for (it(), y = R.length; y < z.length; y += 1)
          B(y);
        nt();
      }
      if (T & /*buttonClick, buttons*/
      160) {
        q = D(
          /*buttons*/
          _[5]
        );
        let y;
        for (y = 0; y < q.length; y += 1) {
          const Z = fi(_, q, y);
          W[y] ? W[y].p(Z, T) : (W[y] = pi(Z), W[y].c(), W[y].m(x, null));
        }
        for (; y < W.length; y += 1)
          W[y].d(1);
        W.length = q.length;
      }
      if (T & /*id, covers*/
      6) {
        I = D(
          /*covers*/
          _[2]
        );
        let y;
        for (y = 0; y < I.length; y += 1) {
          const Z = ai(_, I, y);
          U[y] ? U[y].p(Z, T) : (U[y] = ki(Z), U[y].c(), U[y].m(v, null));
        }
        for (; y < U.length; y += 1)
          U[y].d(1);
        U.length = I.length;
      }
      (!j || T & /*rtl*/
      64 && S !== (S = Y(
        "uikit-flex uikit-justify-between uikit-w-full",
        /*rtl*/
        _[6] ? "uikit-flex-row-reverse" : ""
      ))) && m(n, "class", S), (!j || T & /*className*/
      1 && E !== (E = Y(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        _[0]
      ))) && m(e, "class", E);
    },
    i(_) {
      if (!j) {
        P(C);
        for (let T = 0; T < R.length; T += 1)
          P(z[T]);
        j = !0;
      }
    },
    o(_) {
      H(C), z = z.filter(Boolean);
      for (let T = 0; T < z.length; T += 1)
        H(z[T]);
      j = !1;
    },
    d(_) {
      _ && A(e), C && C.d(), $(z, _), $(W, _), $(U, _);
    }
  };
}
function _o(t, e, i) {
  let { class: n = "" } = e, { id: r = "" } = e, { covers: o = [] } = e, { title: l = "" } = e, { icon: s = "" } = e, { description: u = "" } = e, { sections: a = [] } = e, { buttons: c = [] } = e, { rtl: f = !1 } = e, { buttonClick: d = (p) => {
  } } = e;
  const h = (p) => d(p);
  return t.$$set = (p) => {
    "class" in p && i(0, n = p.class), "id" in p && i(1, r = p.id), "covers" in p && i(2, o = p.covers), "title" in p && i(3, l = p.title), "icon" in p && i(8, s = p.icon), "description" in p && i(9, u = p.description), "sections" in p && i(4, a = p.sections), "buttons" in p && i(5, c = p.buttons), "rtl" in p && i(6, f = p.rtl), "buttonClick" in p && i(7, d = p.buttonClick);
  }, [
    n,
    r,
    o,
    l,
    a,
    c,
    f,
    d,
    s,
    u,
    h
  ];
}
class xo extends J {
  constructor(e) {
    super(), K(this, e, _o, yo, Q, {
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
const Po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: ko,
  Feature: wo,
  Header: ho,
  ProjectDescription: xo
}, Symbol.toStringTag, { value: "Module" }));
function Co(t) {
  let e, i, n, r, o, l;
  return {
    c() {
      e = k("div"), i = k("div"), n = k("span"), r = M(), o = k("button"), l = N(
        /*btnText*/
        t[0]
      ), m(n, "id", "mask-desc"), m(n, "class", "mask-tip-desc svelte-17awz4u"), m(o, "id", "next-step-btn"), m(o, "class", "mask-tip-btn svelte-17awz4u"), m(i, "class", "mask-tip svelte-17awz4u"), st(e, "display", "none");
    },
    m(s, u) {
      L(s, e, u), g(e, i), g(i, n), g(i, r), g(i, o), g(o, l), t[6](i), t[7](e);
    },
    p(s, [u]) {
      u & /*btnText*/
      1 && G(
        l,
        /*btnText*/
        s[0]
      );
    },
    i: F,
    o: F,
    d(s) {
      s && A(e), t[6](null), t[7](null);
    }
  };
}
function So(t, e, i) {
  let n, r, { gapWidth: o = 5 } = e, { isStart: l } = e, { stepArr: s = [] } = e, { btnText: u = "下一步" } = e;
  const a = (d) => {
    if (d.length === 0) {
      i(1, n.style.display = "none", n);
      return;
    }
    const { id: h, desc: p } = d[0];
    var x = document.getElementById(h), b = x.offsetWidth, w = x.offsetHeight, v = x.offsetLeft, S = x.offsetTop;
    console.log("待镂空元素: ", b, w, v, S);
    var E = document.body.scrollWidth, j = document.body.scrollHeight;
    i(1, n.style.width = E + "px", n), i(1, n.style.height = j + "px", n), i(1, n.style.position = "absolute", n), i(1, n.style.left = 0, n), i(1, n.style.top = 0, n), i(1, n.style.display = "block", n), i(1, n.style.boxSizing = "border-box", n), i(1, n.style.borderColor = "rgba(0, 0, 0, 0.75)", n), i(1, n.style.borderStyle = "solid", n), i(1, n.style.borderLeftWidth = v - o + "px", n), i(1, n.style.borderRightWidth = E - b - v - o + "px", n), i(1, n.style.borderTopWidth = S - o + "px", n), i(1, n.style.borderBottomWidth = j - w - S - o + "px", n), i(2, r.style.top = w + o * 2 + 10 + "px", r), i(2, r.style.left = "50%", r);
    var C = document.getElementById("mask-desc");
    C.innerHTML = p;
    var R = document.getElementById("next-step-btn");
    R.onclick = function() {
      d.shift(), a(d);
    };
  };
  function c(d) {
    ut[d ? "unshift" : "push"](() => {
      r = d, i(2, r);
    });
  }
  function f(d) {
    ut[d ? "unshift" : "push"](() => {
      n = d, i(1, n);
    });
  }
  return t.$$set = (d) => {
    "gapWidth" in d && i(3, o = d.gapWidth), "isStart" in d && i(4, l = d.isStart), "stepArr" in d && i(5, s = d.stepArr), "btnText" in d && i(0, u = d.btnText);
  }, t.$$.update = () => {
    t.$$.dirty & /*isStart, stepArr*/
    48 && l && a(s);
  }, [
    u,
    n,
    r,
    o,
    l,
    s,
    c,
    f
  ];
}
class zo extends J {
  constructor(e) {
    super(), K(this, e, So, Co, Q, {
      gapWidth: 3,
      isStart: 4,
      stepArr: 5,
      btnText: 0
    });
  }
}
export {
  Ao as ContextMenu,
  Po as Layout,
  Lo as Modal,
  jo as Sidebar,
  zo as StepMask,
  Eo as confirm,
  To as notify
};
