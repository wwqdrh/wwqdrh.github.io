var Ri = Object.defineProperty;
var Wi = (t, e, i) => e in t ? Ri(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var Zt = (t, e, i) => (Wi(t, typeof e != "symbol" ? e + "" : e, i), i);
function V() {
}
function Rt(t, e) {
  for (const i in e)
    t[i] = e[i];
  return (
    /** @type {T & S} */
    t
  );
}
function mi(t) {
  return t();
}
function ve() {
  return /* @__PURE__ */ Object.create(null);
}
function kt(t) {
  t.forEach(mi);
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
function Fi(t) {
  return Object.keys(t).length === 0;
}
function we(t) {
  const e = {};
  for (const i in t)
    i[0] !== "$" && (e[i] = t[i]);
  return e;
}
function d(t, e) {
  t.appendChild(e);
}
function z(t, e, i) {
  t.insertBefore(e, i || null);
}
function j(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function tt(t, e) {
  for (let i = 0; i < t.length; i += 1)
    t[i] && t[i].d(e);
}
function k(t) {
  return document.createElement(t);
}
function Vi(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function B(t) {
  return document.createTextNode(t);
}
function M() {
  return B(" ");
}
function bt() {
  return B("");
}
function et(t, e, i, n) {
  return t.addEventListener(e, i, n), () => t.removeEventListener(e, i, n);
}
function m(t, e, i) {
  i == null ? t.removeAttribute(e) : t.getAttribute(e) !== i && t.setAttribute(e, i);
}
const Di = ["width", "height"];
function ye(t, e) {
  const i = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in e)
    e[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = e[n] : n === "__value" ? t.value = t[n] = e[n] : i[n] && i[n].set && Di.indexOf(n) === -1 ? t[n] = e[n] : m(t, n, e[n]);
}
function _e(t, e) {
  for (const i in e)
    m(t, i, e[i]);
}
function qi(t) {
  return Array.from(t.childNodes);
}
function H(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function st(t, e, i, n) {
  i == null ? t.style.removeProperty(e) : t.style.setProperty(e, i, n ? "important" : "");
}
function Ui(t, e, { bubbles: i = !1, cancelable: n = !1 } = {}) {
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
function vt(t) {
  ae().$$.on_mount.push(t);
}
function Zi(t) {
  ae().$$.on_destroy.push(t);
}
function wt() {
  const t = ae();
  return (e, i, { cancelable: n = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const o = Ui(
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
const mt = [], ft = [];
let pt = [];
const xe = [], Qi = /* @__PURE__ */ Promise.resolve();
let Yt = !1;
function Ki() {
  Yt || (Yt = !0, Qi.then(pi));
}
function $t(t) {
  pt.push(t);
}
const Qt = /* @__PURE__ */ new Set();
let ht = 0;
function pi() {
  if (ht !== 0)
    return;
  const t = Et;
  do {
    try {
      for (; ht < mt.length; ) {
        const e = mt[ht];
        ht++, Mt(e), Ji(e.$$);
      }
    } catch (e) {
      throw mt.length = 0, ht = 0, e;
    }
    for (Mt(null), mt.length = 0, ht = 0; ft.length; )
      ft.pop()();
    for (let e = 0; e < pt.length; e += 1) {
      const i = pt[e];
      Qt.has(i) || (Qt.add(i), i());
    }
    pt.length = 0;
  } while (mt.length);
  for (; xe.length; )
    xe.pop()();
  Yt = !1, Qt.clear(), Mt(t);
}
function Ji(t) {
  if (t.fragment !== null) {
    t.update(), kt(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach($t);
  }
}
function Xi(t) {
  const e = [], i = [];
  pt.forEach((n) => t.indexOf(n) === -1 ? e.push(n) : i.push(n)), i.forEach((n) => n()), pt = e;
}
const Bt = /* @__PURE__ */ new Set();
let ct;
function it() {
  ct = {
    r: 0,
    c: [],
    p: ct
    // parent group
  };
}
function nt() {
  ct.r || kt(ct.c), ct = ct.p;
}
function E(t, e) {
  t && t.i && (Bt.delete(t), t.i(e));
}
function G(t, e, i, n) {
  if (t && t.o) {
    if (Bt.has(t))
      return;
    Bt.add(t), ct.c.push(() => {
      Bt.delete(t), n && (i && t.d(1), n());
    }), t.o(e);
  } else
    n && n();
}
function D(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function ki(t, e) {
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
function ut(t) {
  t && t.c();
}
function rt(t, e, i) {
  const { fragment: n, after_update: r } = t.$$;
  n && n.m(e, i), $t(() => {
    const o = t.$$.on_mount.map(mi).filter(ce);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : kt(o), t.$$.on_mount = [];
  }), r.forEach($t);
}
function ot(t, e) {
  const i = t.$$;
  i.fragment !== null && (Xi(i.after_update), kt(i.on_destroy), i.fragment && i.fragment.d(e), i.on_destroy = i.fragment = null, i.ctx = []);
}
function Yi(t, e) {
  t.$$.dirty[0] === -1 && (mt.push(t), Ki(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function K(t, e, i, n, r, o, l, s = [-1]) {
  const u = Et;
  Mt(t);
  const c = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: V,
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
  l && l(c.root);
  let a = !1;
  if (c.ctx = i ? i(t, e.props || {}, (f, g, ...h) => {
    const p = h.length ? h[0] : g;
    return c.ctx && r(c.ctx[f], c.ctx[f] = p) && (!c.skip_bound && c.bound[f] && c.bound[f](p), a && Yi(t, f)), g;
  }) : [], c.update(), a = !0, kt(c.before_update), c.fragment = n ? n(c.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = qi(e.target);
      c.fragment && c.fragment.l(f), f.forEach(j);
    } else
      c.fragment && c.fragment.c();
    e.intro && E(t.$$.fragment), rt(t, e.target, e.anchor), pi();
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
    ot(this, 1), this.$destroy = V;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, i) {
    if (!ce(i))
      return V;
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
    this.$$set && !Fi(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const $i = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add($i);
function tn(t) {
  let e, i, n, r, o, l, s, u, c;
  return {
    c() {
      e = k("div"), i = k("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>', n = M(), r = k("div"), o = k("div"), l = k("span"), l.textContent = "Success", s = M(), u = k("p"), c = B(
        /*msg*/
        t[0]
      ), m(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-emerald-500"), m(l, "class", "uikit-font-semibold uikit-text-emerald-500 dark:uikit-text-emerald-400"), m(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), m(o, "class", "uikit-mx-3"), m(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), m(e, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(a, f) {
      z(a, e, f), d(e, i), d(e, n), d(e, r), d(r, o), d(o, l), d(o, s), d(o, u), d(u, c);
    },
    p(a, [f]) {
      f & /*msg*/
      1 && H(
        c,
        /*msg*/
        a[0]
      );
    },
    i: V,
    o: V,
    d(a) {
      a && j(e);
    }
  };
}
function en(t, e, i) {
  let { msg: n = "" } = e, { duration: r = 3e3 } = e;
  const o = wt();
  return vt(() => {
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
class nn extends J {
  constructor(e) {
    super(), K(this, e, en, tn, Q, { msg: 0, duration: 1 });
  }
}
function rn(t) {
  let e, i, n, r, o, l, s, u, c;
  return {
    c() {
      e = k("div"), i = k("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', n = M(), r = k("div"), o = k("div"), l = k("span"), l.textContent = "Info", s = M(), u = k("p"), c = B(
        /*msg*/
        t[0]
      ), m(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-blue-500"), m(l, "class", "uikit-font-semibold uikit-text-blue-500 dark:uikit-text-blue-400"), m(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), m(o, "class", "uikit-mx-3"), m(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), m(e, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(a, f) {
      z(a, e, f), d(e, i), d(e, n), d(e, r), d(r, o), d(o, l), d(o, s), d(o, u), d(u, c);
    },
    p(a, [f]) {
      f & /*msg*/
      1 && H(
        c,
        /*msg*/
        a[0]
      );
    },
    i: V,
    o: V,
    d(a) {
      a && j(e);
    }
  };
}
function on(t, e, i) {
  let { msg: n = "" } = e, { duration: r = 3e3 } = e;
  const o = wt();
  return vt(() => {
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
class Ce extends J {
  constructor(e) {
    super(), K(this, e, on, rn, Q, { msg: 0, duration: 1 });
  }
}
function ln(t) {
  let e, i, n, r, o, l, s, u, c;
  return {
    c() {
      e = k("div"), i = k("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', n = M(), r = k("div"), o = k("div"), l = k("span"), l.textContent = "Warning", s = M(), u = k("p"), c = B(
        /*msg*/
        t[0]
      ), m(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-yellow-400"), m(l, "class", "uikit-font-semibold uikit-text-yellow-400 dark:uikit-text-yellow-300"), m(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), m(o, "class", "uikit-mx-3"), m(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), m(e, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(a, f) {
      z(a, e, f), d(e, i), d(e, n), d(e, r), d(r, o), d(o, l), d(o, s), d(o, u), d(u, c);
    },
    p(a, [f]) {
      f & /*msg*/
      1 && H(
        c,
        /*msg*/
        a[0]
      );
    },
    i: V,
    o: V,
    d(a) {
      a && j(e);
    }
  };
}
function sn(t, e, i) {
  let { msg: n = "" } = e, { duration: r = 3e3 } = e;
  const o = wt();
  return vt(() => {
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
class un extends J {
  constructor(e) {
    super(), K(this, e, sn, ln, Q, { msg: 0, duration: 1 });
  }
}
function cn(t) {
  let e, i, n, r, o, l, s, u, c;
  return {
    c() {
      e = k("div"), i = k("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>', n = M(), r = k("div"), o = k("div"), l = k("span"), l.textContent = "Error", s = M(), u = k("p"), c = B(
        /*msg*/
        t[0]
      ), m(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-red-500"), m(l, "class", "uikit-font-semibold uikit-text-red-500 dark:uikit-text-red-400"), m(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), m(o, "class", "uikit-mx-3"), m(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), m(e, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(a, f) {
      z(a, e, f), d(e, i), d(e, n), d(e, r), d(r, o), d(o, l), d(o, s), d(o, u), d(u, c);
    },
    p(a, [f]) {
      f & /*msg*/
      1 && H(
        c,
        /*msg*/
        a[0]
      );
    },
    i: V,
    o: V,
    d(a) {
      a && j(e);
    }
  };
}
function an(t, e, i) {
  let { msg: n = "" } = e, { duration: r = 3e3 } = e;
  const o = wt();
  return vt(() => {
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
let fn = class extends J {
  constructor(e) {
    super(), K(this, e, an, cn, Q, { msg: 0, duration: 1 });
  }
};
const Se = "uikit_msg_panel";
let Kt = 0;
const xo = (t) => {
  Kt += 1;
  let e = window.document.getElementById(Se);
  e || (e = window.document.createElement("div"), e.id = Se, e.style.position = "absolute", e.style.top = "5px", e.style.right = "5px", e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "10px", e.style.zIndex = "100", document.body.appendChild(e));
  const i = window.document.createElement("div");
  e.appendChild(i);
  let n;
  switch (t.type) {
    case "success":
      n = new nn({
        target: i,
        props: {
          ...t
        }
      });
      break;
    case "info":
      n = new Ce({
        target: i,
        props: {
          ...t
        }
      });
      break;
    case "warn":
      n = new un({
        target: i,
        props: {
          ...t
        }
      });
      break;
    case "error":
      n = new fn({
        target: i,
        props: {
          ...t
        }
      });
      break;
    default:
      n = new Ce({
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
function dn(t) {
  let e, i, n, r, o, l, s, u, c, a, f, g, h, p, y, b, x, v, T, A;
  return {
    c() {
      e = k("div"), i = k("div"), n = k("div"), r = k("div"), o = B(
        /*title*/
        t[0]
      ), l = M(), s = k("div"), u = k("div"), c = B(
        /*content*/
        t[1]
      ), a = M(), f = k("div"), g = k("div"), h = B(
        /*cancelText*/
        t[2]
      ), y = M(), b = k("div"), x = B(
        /*okText*/
        t[3]
      ), m(r, "class", "modal-title svelte-f901x2"), m(s, "class", "content svelte-f901x2"), m(n, "class", "modal-content-body svelte-f901x2"), m(g, "class", "btn button-left centerLayout svelte-f901x2"), m(g, "style", p = zt(
        /*cancelBtnStyle*/
        t[4]
      )), m(b, "class", "btn button-right centerLayout svelte-f901x2"), m(b, "style", v = zt(
        /*okBtnStyle*/
        t[5]
      )), m(f, "class", "confirm-button-wrap svelte-f901x2"), m(i, "class", "confirm-modal-content svelte-f901x2"), m(e, "class", "confirm-modal svelte-f901x2");
    },
    m(L, C) {
      z(L, e, C), d(e, i), d(i, n), d(n, r), d(r, o), d(n, l), d(n, s), d(s, u), d(u, c), d(i, a), d(i, f), d(f, g), d(g, h), d(f, y), d(f, b), d(b, x), t[11](e), T || (A = [
        et(
          g,
          "click",
          /*onCancelClk*/
          t[8]
        ),
        et(
          b,
          "click",
          /*onOkClk*/
          t[7]
        )
      ], T = !0);
    },
    p(L, [C]) {
      C & /*title*/
      1 && H(
        o,
        /*title*/
        L[0]
      ), C & /*content*/
      2 && H(
        c,
        /*content*/
        L[1]
      ), C & /*cancelText*/
      4 && H(
        h,
        /*cancelText*/
        L[2]
      ), C & /*cancelBtnStyle*/
      16 && p !== (p = zt(
        /*cancelBtnStyle*/
        L[4]
      )) && m(g, "style", p), C & /*okText*/
      8 && H(
        x,
        /*okText*/
        L[3]
      ), C & /*okBtnStyle*/
      32 && v !== (v = zt(
        /*okBtnStyle*/
        L[5]
      )) && m(b, "style", v);
    },
    i: V,
    o: V,
    d(L) {
      L && j(e), t[11](null), T = !1, kt(A);
    }
  };
}
function gn(t, e, i) {
  let { title: n = "" } = e, { content: r = "" } = e, { cancelText: o = "取消" } = e, { okText: l = "确定" } = e, { onCancel: s = () => {
  } } = e, { onOk: u = () => {
  } } = e, { cancelBtnStyle: c = "" } = e, { okBtnStyle: a = "" } = e;
  const f = wt();
  let g;
  const h = () => {
    u(), f("onOk");
  }, p = () => {
    s(), f("onCancel");
  };
  function y(b) {
    ft[b ? "unshift" : "push"](() => {
      g = b, i(6, g);
    });
  }
  return t.$$set = (b) => {
    "title" in b && i(0, n = b.title), "content" in b && i(1, r = b.content), "cancelText" in b && i(2, o = b.cancelText), "okText" in b && i(3, l = b.okText), "onCancel" in b && i(9, s = b.onCancel), "onOk" in b && i(10, u = b.onOk), "cancelBtnStyle" in b && i(4, c = b.cancelBtnStyle), "okBtnStyle" in b && i(5, a = b.okBtnStyle);
  }, [
    n,
    r,
    o,
    l,
    c,
    a,
    g,
    h,
    p,
    s,
    u,
    y
  ];
}
class hn extends J {
  constructor(e) {
    super(), K(this, e, gn, dn, Q, {
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
const Co = (t) => {
  const e = window.document.createElement("div");
  document.body.appendChild(e);
  const i = new hn({
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
function bi(t) {
  var e, i, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (i = bi(t[e])) && (n && (n += " "), n += i);
    else
      for (e in t)
        t[e] && (n && (n += " "), n += e);
  return n;
}
function mn() {
  for (var t, e, i = 0, n = ""; i < arguments.length; )
    (t = arguments[i++]) && (e = bi(t)) && (n && (n += " "), n += e);
  return n;
}
function pn() {
  for (var t = 0, e, i, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (i = vi(e)) && (n && (n += " "), n += i);
  return n;
}
function vi(t) {
  if (typeof t == "string")
    return t;
  for (var e, i = "", n = 0; n < t.length; n++)
    t[n] && (e = vi(t[n])) && (i && (i += " "), i += e);
  return i;
}
var fe = "-";
function kn(t) {
  var e = vn(t), i = t.conflictingClassGroups, n = t.conflictingClassGroupModifiers, r = n === void 0 ? {} : n;
  function o(s) {
    var u = s.split(fe);
    return u[0] === "" && u.length !== 1 && u.shift(), wi(u, e) || bn(s);
  }
  function l(s, u) {
    var c = i[s] || [];
    return u && r[s] ? [].concat(c, r[s]) : c;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: l
  };
}
function wi(t, e) {
  var l;
  if (t.length === 0)
    return e.classGroupId;
  var i = t[0], n = e.nextPart.get(i), r = n ? wi(t.slice(1), n) : void 0;
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
var Ie = /^\[(.+)\]$/;
function bn(t) {
  if (Ie.test(t)) {
    var e = Ie.exec(t)[1], i = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}
function vn(t) {
  var e = t.theme, i = t.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, r = yn(Object.entries(t.classGroups), i);
  return r.forEach(function(o) {
    var l = o[0], s = o[1];
    te(s, n, l, e);
  }), n;
}
function te(t, e, i, n) {
  t.forEach(function(r) {
    if (typeof r == "string") {
      var o = r === "" ? e : Me(e, r);
      o.classGroupId = i;
      return;
    }
    if (typeof r == "function") {
      if (wn(r)) {
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
      te(u, Me(e, s), i, n);
    });
  });
}
function Me(t, e) {
  var i = t;
  return e.split(fe).forEach(function(n) {
    i.nextPart.has(n) || i.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(n);
  }), i;
}
function wn(t) {
  return t.isThemeGetter;
}
function yn(t, e) {
  return e ? t.map(function(i) {
    var n = i[0], r = i[1], o = r.map(function(l) {
      return typeof l == "string" ? e + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(s) {
        var u = s[0], c = s[1];
        return [e + u, c];
      })) : l;
    });
    return [n, o];
  }) : t;
}
function _n(t) {
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
var yi = "!";
function xn(t) {
  var e = t.separator || ":", i = e.length === 1, n = e[0], r = e.length;
  return function(l) {
    for (var s = [], u = 0, c = 0, a, f = 0; f < l.length; f++) {
      var g = l[f];
      if (u === 0) {
        if (g === n && (i || l.slice(f, f + r) === e)) {
          s.push(l.slice(c, f)), c = f + r;
          continue;
        }
        if (g === "/") {
          a = f;
          continue;
        }
      }
      g === "[" ? u++ : g === "]" && u--;
    }
    var h = s.length === 0 ? l : l.substring(c), p = h.startsWith(yi), y = p ? h.substring(1) : h, b = a && a > c ? a - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: p,
      baseClassName: y,
      maybePostfixModifierPosition: b
    };
  };
}
function Cn(t) {
  if (t.length <= 1)
    return t;
  var e = [], i = [];
  return t.forEach(function(n) {
    var r = n[0] === "[";
    r ? (e.push.apply(e, i.sort().concat([n])), i = []) : i.push(n);
  }), e.push.apply(e, i.sort()), e;
}
function Sn(t) {
  return {
    cache: _n(t.cacheSize),
    splitModifiers: xn(t),
    ...kn(t)
  };
}
var In = /\s+/;
function Mn(t, e) {
  var i = e.splitModifiers, n = e.getClassGroupId, r = e.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return t.trim().split(In).map(function(l) {
    var s = i(l), u = s.modifiers, c = s.hasImportantModifier, a = s.baseClassName, f = s.maybePostfixModifierPosition, g = n(f ? a.substring(0, f) : a), h = !!f;
    if (!g) {
      if (!f)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (g = n(a), !g)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      h = !1;
    }
    var p = Cn(u).join(":"), y = c ? p + yi : p;
    return {
      isTailwindClass: !0,
      modifierId: y,
      classGroupId: g,
      originalClassName: l,
      hasPostfixModifier: h
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var s = l.modifierId, u = l.classGroupId, c = l.hasPostfixModifier, a = s + u;
    return o.has(a) ? !1 : (o.add(a), r(u, c).forEach(function(f) {
      return o.add(s + f);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function Tn() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  var n, r, o, l = s;
  function s(c) {
    var a = e[0], f = e.slice(1), g = f.reduce(function(h, p) {
      return p(h);
    }, a());
    return n = Sn(g), r = n.cache.get, o = n.cache.set, l = u, u(c);
  }
  function u(c) {
    var a = r(c);
    if (a)
      return a;
    var f = Mn(c, n);
    return o(c, f), f;
  }
  return function() {
    return l(pn.apply(null, arguments));
  };
}
function F(t) {
  var e = function(n) {
    return n[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var _i = /^\[(?:([a-z-]+):)?(.+)\]$/i, En = /^\d+\/\d+$/, jn = /* @__PURE__ */ new Set(["px", "full", "screen"]), An = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ln = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pn = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function $(t) {
  return at(t) || jn.has(t) || En.test(t) || ee(t);
}
function ee(t) {
  return gt(t, "length", Hn);
}
function zn(t) {
  return gt(t, "size", xi);
}
function On(t) {
  return gt(t, "position", xi);
}
function Nn(t) {
  return gt(t, "url", Rn);
}
function Ot(t) {
  return gt(t, "number", at);
}
function at(t) {
  return !Number.isNaN(Number(t));
}
function Bn(t) {
  return t.endsWith("%") && at(t.slice(0, -1));
}
function Ct(t) {
  return Te(t) || gt(t, "number", Te);
}
function O(t) {
  return _i.test(t);
}
function St() {
  return !0;
}
function lt(t) {
  return An.test(t);
}
function Gn(t) {
  return gt(t, "", Wn);
}
function gt(t, e, i) {
  var n = _i.exec(t);
  return n ? n[1] ? n[1] === e : i(n[2]) : !1;
}
function Hn(t) {
  return Ln.test(t);
}
function xi() {
  return !1;
}
function Rn(t) {
  return t.startsWith("url(");
}
function Te(t) {
  return Number.isInteger(Number(t));
}
function Wn(t) {
  return Pn.test(t);
}
function Fn() {
  var t = F("colors"), e = F("spacing"), i = F("blur"), n = F("brightness"), r = F("borderColor"), o = F("borderRadius"), l = F("borderSpacing"), s = F("borderWidth"), u = F("contrast"), c = F("grayscale"), a = F("hueRotate"), f = F("invert"), g = F("gap"), h = F("gradientColorStops"), p = F("gradientColorStopPositions"), y = F("inset"), b = F("margin"), x = F("opacity"), v = F("padding"), T = F("saturate"), A = F("scale"), L = F("sepia"), C = F("skew"), R = F("space"), P = F("translate"), N = function() {
    return ["auto", "contain", "none"];
  }, q = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, W = function() {
    return ["auto", O, e];
  }, S = function() {
    return [O, e];
  }, U = function() {
    return ["", $];
  }, _ = function() {
    return ["auto", at, O];
  }, I = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, w = function() {
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
    return [at, Ot];
  }, Lt = function() {
    return [at, O];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [St],
      spacing: [$],
      blur: ["none", "", lt, O],
      brightness: xt(),
      borderColor: [t],
      borderRadius: ["none", "", "full", lt, O],
      borderSpacing: S(),
      borderWidth: U(),
      contrast: xt(),
      grayscale: _t(),
      hueRotate: Lt(),
      invert: _t(),
      gap: S(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Bn, ee],
      inset: W(),
      margin: W(),
      opacity: xt(),
      padding: S(),
      saturate: xt(),
      scale: xt(),
      sepia: _t(),
      skew: Lt(),
      space: S(),
      translate: S()
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
        object: [].concat(I(), [O])
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
        inset: [y]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [y]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [y]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [y]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [y]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [y]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [y]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [y]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [y]
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
        "min-w": ["min", "max", "fit", O, $]
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
        "min-h": ["min", "max", "fit", O, $]
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
        "line-clamp": ["none", at, Ot]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", O, $]
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
        "placeholder-opacity": [x]
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
        "text-opacity": [x]
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
        decoration: [].concat(w(), ["wavy"])
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
        "underline-offset": ["auto", O, $]
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
        indent: S()
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
        "bg-opacity": [x]
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
        bg: [].concat(I(), [On])
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
        bg: ["auto", "cover", "contain", zn]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Nn]
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
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(w(), ["hidden"])
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
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: w()
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
        outline: [""].concat(w())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [O, $]
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
        "ring-opacity": [x]
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
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", lt, Gn]
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
        opacity: [x]
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
        grayscale: [c]
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
        saturate: [T]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [L]
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
        "backdrop-grayscale": [c]
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
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [T]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [L]
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
        scale: [A]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [A]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [A]
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
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
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
        stroke: [$, Ot]
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
var Vn = /* @__PURE__ */ Tn(Fn);
function Y(...t) {
  return Vn(mn(t));
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
    const s = r.pop(), u = r.pop(), c = {
      // Allow provider without '@': "provider:prefix:name"
      provider: r.length > 0 ? r[0] : n,
      prefix: u,
      name: s
    };
    return e && !Gt(c) ? null : c;
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
}, Gt = (t, e) => t ? !!((t.provider === "" || t.provider.match(Tt)) && (e && t.prefix === "" || t.prefix.match(Tt)) && t.name.match(Tt)) : !1, Ci = Object.freeze(
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
  ...Ci,
  ...Ft
}), ie = Object.freeze({
  ...Dt,
  body: "",
  hidden: !1
});
function Dn(t, e) {
  const i = {};
  !t.hFlip != !e.hFlip && (i.hFlip = !0), !t.vFlip != !e.vFlip && (i.vFlip = !0);
  const n = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return n && (i.rotate = n), i;
}
function Ee(t, e) {
  const i = Dn(t, e);
  for (const n in ie)
    n in Ft ? n in t && !(n in i) && (i[n] = Ft[n]) : n in e ? i[n] = e[n] : n in t && (i[n] = t[n]);
  return i;
}
function qn(t, e) {
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
function Un(t, e, i) {
  const n = t.icons, r = t.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function l(s) {
    o = Ee(
      n[s] || r[s],
      o
    );
  }
  return l(e), i.forEach(l), Ee(t, o);
}
function Si(t, e) {
  const i = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return i;
  t.not_found instanceof Array && t.not_found.forEach((r) => {
    e(r, null), i.push(r);
  });
  const n = qn(t);
  for (const r in n) {
    const o = n[r];
    o && (e(r, Un(t, r, o)), i.push(r));
  }
  return i;
}
const Zn = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Ci
};
function Jt(t, e) {
  for (const i in e)
    if (i in t && typeof t[i] != typeof e[i])
      return !1;
  return !0;
}
function Ii(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !Jt(t, Zn))
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
const je = /* @__PURE__ */ Object.create(null);
function Qn(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function dt(t, e) {
  const i = je[t] || (je[t] = /* @__PURE__ */ Object.create(null));
  return i[e] || (i[e] = Qn(t, e));
}
function de(t, e) {
  return Ii(e) ? Si(e, (i, n) => {
    n ? t.icons[i] = n : t.missing.add(i);
  }) : [];
}
function Kn(t, e, i) {
  try {
    if (typeof i.body == "string")
      return t.icons[e] = { ...i }, !0;
  } catch {
  }
  return !1;
}
let jt = !1;
function Mi(t) {
  return typeof t == "boolean" && (jt = t), jt;
}
function Jn(t) {
  const e = typeof t == "string" ? Vt(t, !0, jt) : t;
  if (e) {
    const i = dt(e.provider, e.prefix), n = e.name;
    return i.icons[n] || (i.missing.has(n) ? null : void 0);
  }
}
function Xn(t, e) {
  const i = Vt(t, !0, jt);
  if (!i)
    return !1;
  const n = dt(i.provider, i.prefix);
  return Kn(n, i.name, e);
}
function Yn(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), jt && !e && !t.prefix) {
    let r = !1;
    return Ii(t) && (t.prefix = "", Si(t, (o, l) => {
      l && Xn(o, l) && (r = !0);
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
const Ti = Object.freeze({
  width: null,
  height: null
}), Ei = Object.freeze({
  // Dimensions
  ...Ti,
  // Transformations
  ...Ft
}), $n = /(-?[0-9.]*[0-9]+[0-9.]*)/g, tr = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Ae(t, e, i) {
  if (e === 1)
    return t;
  if (i = i || 100, typeof t == "number")
    return Math.ceil(t * e * i) / i;
  if (typeof t != "string")
    return t;
  const n = t.split($n);
  if (n === null || !n.length)
    return t;
  const r = [];
  let o = n.shift(), l = tr.test(o);
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
const er = (t) => t === "unset" || t === "undefined" || t === "none";
function ir(t, e) {
  const i = {
    ...Dt,
    ...t
  }, n = {
    ...Ei,
    ...e
  }, r = {
    left: i.left,
    top: i.top,
    width: i.width,
    height: i.height
  };
  let o = i.body;
  [i, n].forEach((p) => {
    const y = [], b = p.hFlip, x = p.vFlip;
    let v = p.rotate;
    b ? x ? v += 2 : (y.push(
      "translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"
    ), y.push("scale(-1 1)"), r.top = r.left = 0) : x && (y.push(
      "translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"
    ), y.push("scale(1 -1)"), r.top = r.left = 0);
    let T;
    switch (v < 0 && (v -= Math.floor(v / 4) * 4), v = v % 4, v) {
      case 1:
        T = r.height / 2 + r.top, y.unshift(
          "rotate(90 " + T.toString() + " " + T.toString() + ")"
        );
        break;
      case 2:
        y.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        T = r.width / 2 + r.left, y.unshift(
          "rotate(-90 " + T.toString() + " " + T.toString() + ")"
        );
        break;
    }
    v % 2 === 1 && (r.left !== r.top && (T = r.left, r.left = r.top, r.top = T), r.width !== r.height && (T = r.width, r.width = r.height, r.height = T)), y.length && (o = '<g transform="' + y.join(" ") + '">' + o + "</g>");
  });
  const l = n.width, s = n.height, u = r.width, c = r.height;
  let a, f;
  l === null ? (f = s === null ? "1em" : s === "auto" ? c : s, a = Ae(f, u / c)) : (a = l === "auto" ? u : l, f = s === null ? Ae(a, c / u) : s === "auto" ? c : s);
  const g = {}, h = (p, y) => {
    er(y) || (g[p] = y.toString());
  };
  return h("width", a), h("height", f), g.viewBox = r.left.toString() + " " + r.top.toString() + " " + u.toString() + " " + c.toString(), {
    attributes: g,
    body: o
  };
}
const nr = /\sid="(\S+)"/g, rr = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let or = 0;
function lr(t, e = rr) {
  const i = [];
  let n;
  for (; n = nr.exec(t); )
    i.push(n[1]);
  if (!i.length)
    return t;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return i.forEach((o) => {
    const l = typeof e == "function" ? e(o) : e + (or++).toString(), s = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
      "$1" + l + r + "$3"
    );
  }), t = t.replace(new RegExp(r, "g"), ""), t;
}
const ne = /* @__PURE__ */ Object.create(null);
function sr(t, e) {
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
function ur(t, e) {
  const i = ge(e);
  return i === null ? !1 : (he[t] = i, !0);
}
function me(t) {
  return he[t];
}
const cr = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let Le = cr();
function ar(t, e) {
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
function fr(t) {
  return t === 404;
}
const dr = (t, e, i) => {
  const n = [], r = ar(t, e), o = "icons";
  let l = {
    type: o,
    provider: t,
    prefix: e,
    icons: []
  }, s = 0;
  return i.forEach((u, c) => {
    s += u.length + 1, s >= r && c > 0 && (n.push(l), l = {
      type: o,
      provider: t,
      prefix: e,
      icons: []
    }, s = u.length), l.icons.push(u);
  }), n.push(l), n;
};
function gr(t) {
  if (typeof t == "string") {
    const e = me(t);
    if (e)
      return e.path;
  }
  return "/";
}
const hr = (t, e, i) => {
  if (!Le) {
    i("abort", 424);
    return;
  }
  let n = gr(e.provider);
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
  Le(t + n).then((o) => {
    const l = o.status;
    if (l !== 200) {
      setTimeout(() => {
        i(fr(l) ? "abort" : "next", l);
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
}, mr = {
  prepare: dr,
  send: hr
};
function pr(t) {
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
    const o = r.provider, l = r.prefix, s = r.name, u = i[o] || (i[o] = /* @__PURE__ */ Object.create(null)), c = u[l] || (u[l] = dt(o, l));
    let a;
    s in c.icons ? a = e.loaded : l === "" || c.missing.has(s) ? a = e.missing : a = e.pending;
    const f = {
      provider: o,
      prefix: l,
      name: s
    };
    a.push(f);
  }), e;
}
function ji(t, e) {
  t.forEach((i) => {
    const n = i.loaderCallbacks;
    n && (i.loaderCallbacks = n.filter((r) => r.id !== e));
  });
}
function kr(t) {
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
        const c = u.name;
        if (t.icons[c])
          l.loaded.push({
            provider: n,
            prefix: r,
            name: c
          });
        else if (t.missing.has(c))
          l.missing.push({
            provider: n,
            prefix: r,
            name: c
          });
        else
          return i = !0, !0;
        return !1;
      }), l.pending.length !== s && (i || ji([t], o.id), o.callback(
        l.loaded.slice(0),
        l.missing.slice(0),
        l.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let br = 0;
function vr(t, e, i) {
  const n = br++, r = ji.bind(null, i, n);
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
function wr(t, e = !0, i = !1) {
  const n = [];
  return t.forEach((r) => {
    const o = typeof r == "string" ? Vt(r, e, i) : r;
    o && n.push(o);
  }), n;
}
var yr = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function _r(t, e, i, n) {
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
  let u = "pending", c = 0, a, f = null, g = [], h = [];
  typeof n == "function" && h.push(n);
  function p() {
    f && (clearTimeout(f), f = null);
  }
  function y() {
    u === "pending" && (u = "aborted"), p(), g.forEach((C) => {
      C.status === "pending" && (C.status = "aborted");
    }), g = [];
  }
  function b(C, R) {
    R && (h = []), typeof C == "function" && h.push(C);
  }
  function x() {
    return {
      startTime: s,
      payload: e,
      status: u,
      queriesSent: c,
      queriesPending: g.length,
      subscribe: b,
      abort: y
    };
  }
  function v() {
    u = "failed", h.forEach((C) => {
      C(void 0, a);
    });
  }
  function T() {
    g.forEach((C) => {
      C.status === "pending" && (C.status = "aborted");
    }), g = [];
  }
  function A(C, R, P) {
    const N = R !== "success";
    switch (g = g.filter((q) => q !== C), u) {
      case "pending":
        break;
      case "failed":
        if (N || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (R === "abort") {
      a = P, v();
      return;
    }
    if (N) {
      a = P, g.length || (l.length ? L() : v());
      return;
    }
    if (p(), T(), !t.random) {
      const q = t.resources.indexOf(C.resource);
      q !== -1 && q !== t.index && (t.index = q);
    }
    u = "completed", h.forEach((q) => {
      q(P);
    });
  }
  function L() {
    if (u !== "pending")
      return;
    p();
    const C = l.shift();
    if (C === void 0) {
      if (g.length) {
        f = setTimeout(() => {
          p(), u === "pending" && (T(), v());
        }, t.timeout);
        return;
      }
      v();
      return;
    }
    const R = {
      status: "pending",
      resource: C,
      callback: (P, N) => {
        A(R, P, N);
      }
    };
    g.push(R), c++, f = setTimeout(L, t.rotate), i(C, e, R.callback);
  }
  return setTimeout(L), x;
}
function Ai(t) {
  const e = {
    ...yr,
    ...t
  };
  let i = [];
  function n() {
    i = i.filter((s) => s().status === "pending");
  }
  function r(s, u, c) {
    const a = _r(
      e,
      s,
      u,
      (f, g) => {
        n(), c && c(f, g);
      }
    );
    return i.push(a), a;
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
function Pe() {
}
const Xt = /* @__PURE__ */ Object.create(null);
function xr(t) {
  if (!Xt[t]) {
    const e = me(t);
    if (!e)
      return;
    const i = Ai(e), n = {
      config: e,
      redundancy: i
    };
    Xt[t] = n;
  }
  return Xt[t];
}
function Cr(t, e, i) {
  let n, r;
  if (typeof t == "string") {
    const o = re(t);
    if (!o)
      return i(void 0, 424), Pe;
    r = o.send;
    const l = xr(t);
    l && (n = l.redundancy);
  } else {
    const o = ge(t);
    if (o) {
      n = Ai(o);
      const l = t.resources ? t.resources[0] : "", s = re(l);
      s && (r = s.send);
    }
  }
  return !n || !r ? (i(void 0, 424), Pe) : n.query(e, r, i)().abort;
}
const ze = "iconify2", At = "iconify", Li = At + "-count", Oe = At + "-version", Pi = 36e5, Sr = 168;
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
function Ne(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function le(t, e) {
  return pe(t, Li, e.toString());
}
function se(t) {
  return parseInt(oe(t, Li)) || 0;
}
const qt = {
  local: !0,
  session: !0
}, zi = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let ke = !1;
function Ir(t) {
  ke = t;
}
let Nt = typeof window > "u" ? {} : window;
function Oi(t) {
  const e = t + "Storage";
  try {
    if (Nt && Nt[e] && typeof Nt[e].length == "number")
      return Nt[e];
  } catch {
  }
  qt[t] = !1;
}
function Ni(t, e) {
  const i = Oi(t);
  if (!i)
    return;
  const n = oe(i, Oe);
  if (n !== ze) {
    if (n) {
      const s = se(i);
      for (let u = 0; u < s; u++)
        Ne(i, At + u.toString());
    }
    pe(i, Oe, ze), le(i, 0);
    return;
  }
  const r = Math.floor(Date.now() / Pi) - Sr, o = (s) => {
    const u = At + s.toString(), c = oe(i, u);
    if (typeof c == "string") {
      try {
        const a = JSON.parse(c);
        if (typeof a == "object" && typeof a.cached == "number" && a.cached > r && typeof a.provider == "string" && typeof a.data == "object" && typeof a.data.prefix == "string" && // Valid item: run callback
        e(a, s))
          return !0;
      } catch {
      }
      Ne(i, u);
    }
  };
  let l = se(i);
  for (let s = l - 1; s >= 0; s--)
    o(s) || (s === l - 1 ? (l--, le(i, l)) : zi[t].add(s));
}
function Bi() {
  if (!ke) {
    Ir(!0);
    for (const t in qt)
      Ni(t, (e) => {
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
function Mr(t, e) {
  const i = t.lastModifiedCached;
  if (
    // Matches or newer
    i && i >= e
  )
    return i === e;
  if (t.lastModifiedCached = e, i)
    for (const n in qt)
      Ni(n, (r) => {
        const o = r.data;
        return r.provider !== t.provider || o.prefix !== t.prefix || o.lastModified === e;
      });
  return !0;
}
function Tr(t, e) {
  ke || Bi();
  function i(n) {
    let r;
    if (!qt[n] || !(r = Oi(n)))
      return;
    const o = zi[n];
    let l;
    if (o.size)
      o.delete(l = Array.from(o).shift());
    else if (l = se(r), !le(r, l + 1))
      return;
    const s = {
      cached: Math.floor(Date.now() / Pi),
      provider: t.provider,
      data: e
    };
    return pe(
      r,
      At + l.toString(),
      JSON.stringify(s)
    );
  }
  e.lastModified && !Mr(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), i("local") || i("session"));
}
function Be() {
}
function Er(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, kr(t);
  }));
}
function jr(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: i, prefix: n } = t, r = t.iconsToLoad;
    delete t.iconsToLoad;
    let o;
    if (!r || !(o = re(i)))
      return;
    o.prepare(i, n, r).forEach((s) => {
      Cr(i, s, (u) => {
        if (typeof u != "object")
          s.icons.forEach((c) => {
            t.missing.add(c);
          });
        else
          try {
            const c = de(
              t,
              u
            );
            if (!c.length)
              return;
            const a = t.pendingIcons;
            a && c.forEach((f) => {
              a.delete(f);
            }), Tr(t, u);
          } catch (c) {
            console.error(c);
          }
        Er(t);
      });
    });
  }));
}
const Ar = (t, e) => {
  const i = wr(t, !0, Mi()), n = pr(i);
  if (!n.pending.length) {
    let u = !0;
    return e && setTimeout(() => {
      u && e(
        n.loaded,
        n.missing,
        n.pending,
        Be
      );
    }), () => {
      u = !1;
    };
  }
  const r = /* @__PURE__ */ Object.create(null), o = [];
  let l, s;
  return n.pending.forEach((u) => {
    const { provider: c, prefix: a } = u;
    if (a === s && c === l)
      return;
    l = c, s = a, o.push(dt(c, a));
    const f = r[c] || (r[c] = /* @__PURE__ */ Object.create(null));
    f[a] || (f[a] = []);
  }), n.pending.forEach((u) => {
    const { provider: c, prefix: a, name: f } = u, g = dt(c, a), h = g.pendingIcons || (g.pendingIcons = /* @__PURE__ */ new Set());
    h.has(f) || (h.add(f), r[c][a].push(f));
  }), o.forEach((u) => {
    const { provider: c, prefix: a } = u;
    r[c][a].length && jr(u, r[c][a]);
  }), e ? vr(e, n, o) : Be;
};
function Lr(t, e) {
  const i = {
    ...t
  };
  for (const n in e) {
    const r = e[n], o = typeof r;
    n in Ti ? (r === null || r && (o === "string" || o === "number")) && (i[n] = r) : o === typeof i[n] && (i[n] = n === "rotate" ? r % 4 : r);
  }
  return i;
}
const Pr = /[\s,]+/;
function zr(t, e) {
  e.split(Pr).forEach((i) => {
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
function Or(t, e = 0) {
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
function Nr(t, e) {
  let i = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in e)
    i += " " + n + '="' + e[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + i + ">" + t + "</svg>";
}
function Br(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Gr(t) {
  return "data:image/svg+xml," + Br(t);
}
function Hr(t) {
  return 'url("' + Gr(t) + '")';
}
const Ge = {
  ...Ei,
  inline: !1
}, Rr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Wr = {
  display: "inline-block"
}, ue = {
  "background-color": "currentColor"
}, Gi = {
  "background-color": "transparent"
}, He = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Re = {
  "-webkit-mask": ue,
  mask: ue,
  background: Gi
};
for (const t in Re) {
  const e = Re[t];
  for (const i in He)
    e[t + "-" + i] = He[i];
}
function Fr(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function Vr(t, e) {
  const i = Lr(Ge, e), n = e.mode || "svg", r = n === "svg" ? { ...Rr } : {};
  t.body.indexOf("xlink:") === -1 && delete r["xmlns:xlink"];
  let o = typeof e.style == "string" ? e.style : "";
  for (let x in e) {
    const v = e[x];
    if (v !== void 0)
      switch (x) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          i[x] = v === !0 || v === "true" || v === 1;
          break;
        case "flip":
          typeof v == "string" && zr(i, v);
          break;
        case "color":
          o = o + (o.length > 0 && o.trim().slice(-1) !== ";" ? ";" : "") + "color: " + v + "; ";
          break;
        case "rotate":
          typeof v == "string" ? i[x] = Or(v) : typeof v == "number" && (i[x] = v);
          break;
        case "ariaHidden":
        case "aria-hidden":
          v !== !0 && v !== "true" && delete r["aria-hidden"];
          break;
        default:
          if (x.slice(0, 3) === "on:")
            break;
          Ge[x] === void 0 && (r[x] = v);
      }
  }
  const l = ir(t, i), s = l.attributes;
  if (i.inline && (o = "vertical-align: -0.125em; " + o), n === "svg") {
    Object.assign(r, s), o !== "" && (r.style = o);
    let x = 0, v = e.id;
    return typeof v == "string" && (v = v.replace(/-/g, "_")), {
      svg: !0,
      attributes: r,
      body: lr(l.body, v ? () => v + "ID" + x++ : "iconifySvelte")
    };
  }
  const { body: u, width: c, height: a } = t, f = n === "mask" || (n === "bg" ? !1 : u.indexOf("currentColor") !== -1), g = Nr(u, {
    ...s,
    width: c + "",
    height: a + ""
  }), p = {
    "--svg": Hr(g)
  }, y = (x) => {
    const v = s[x];
    v && (p[x] = Fr(v));
  };
  y("width"), y("height"), Object.assign(p, Wr, f ? ue : Gi);
  let b = "";
  for (const x in p)
    b += x + ": " + p[x] + ";";
  return r.style = b + o, {
    svg: !1,
    attributes: r
  };
}
Mi(!0);
sr("", mr);
if (typeof document < "u" && typeof window < "u") {
  Bi();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, i = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !Yn(n)) && console.error(i);
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
          ur(i, r) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
function Dr(t, e, i, n, r) {
  function o() {
    e.loading && (e.loading.abort(), e.loading = null);
  }
  if (typeof t == "object" && t !== null && typeof t.body == "string")
    return e.name = "", o(), { data: { ...Dt, ...t } };
  let l;
  if (typeof t != "string" || (l = Vt(t, !1, !0)) === null)
    return o(), null;
  const s = Jn(l);
  if (!s)
    return i && (!e.loading || e.loading.name !== t) && (o(), e.name = "", e.loading = {
      name: t,
      abort: Ar([l], n)
    }), null;
  o(), e.name !== t && (e.name = t, r && !e.destroyed && r(t));
  const u = ["iconify"];
  return l.prefix !== "" && u.push("iconify--" + l.prefix), l.provider !== "" && u.push("iconify--" + l.provider), { data: s, classes: u };
}
function qr(t, e) {
  return t ? Vr({
    ...Dt,
    ...t
  }, e) : null;
}
function We(t) {
  let e;
  function i(o, l) {
    return (
      /*data*/
      o[0].svg ? Zr : Ur
    );
  }
  let n = i(t), r = n(t);
  return {
    c() {
      r.c(), e = bt();
    },
    m(o, l) {
      r.m(o, l), z(o, e, l);
    },
    p(o, l) {
      n === (n = i(o)) && r ? r.p(o, l) : (r.d(1), r = n(o), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(o) {
      o && j(e), r.d(o);
    }
  };
}
function Ur(t) {
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
      z(r, e, o);
    },
    p(r, o) {
      ye(e, n = ki(i, [o & /*data*/
      1 && /*data*/
      r[0].attributes]));
    },
    d(r) {
      r && j(e);
    }
  };
}
function Zr(t) {
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
      e = Vi("svg"), _e(e, r);
    },
    m(o, l) {
      z(o, e, l), e.innerHTML = i;
    },
    p(o, l) {
      l & /*data*/
      1 && i !== (i = /*data*/
      o[0].body + "") && (e.innerHTML = i), _e(e, r = ki(n, [l & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && j(e);
    }
  };
}
function Qr(t) {
  let e, i = (
    /*data*/
    t[0] && We(t)
  );
  return {
    c() {
      i && i.c(), e = bt();
    },
    m(n, r) {
      i && i.m(n, r), z(n, e, r);
    },
    p(n, [r]) {
      /*data*/
      n[0] ? i ? i.p(n, r) : (i = We(n), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null);
    },
    i: V,
    o: V,
    d(n) {
      n && j(e), i && i.d(n);
    }
  };
}
function Kr(t, e, i) {
  const n = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let r = !1, o = 0, l;
  const s = (c) => {
    typeof e.onLoad == "function" && e.onLoad(c), wt()("load", { icon: c });
  };
  function u() {
    i(3, o++, o);
  }
  return vt(() => {
    i(2, r = !0);
  }), Zi(() => {
    i(1, n.destroyed = !0, n), n.loading && (n.loading.abort(), i(1, n.loading = null, n));
  }), t.$$set = (c) => {
    i(6, e = Rt(Rt({}, e), we(c)));
  }, t.$$.update = () => {
    {
      const c = Dr(e.icon, n, r, u, s);
      i(0, l = c ? qr(c.data, e) : null), l && c.classes && i(
        0,
        l.attributes.class = (typeof e.class == "string" ? e.class + " " : "") + c.classes.join(" "),
        l
      );
    }
  }, e = we(e), [l, n, r, o];
}
class yt extends J {
  constructor(e) {
    super(), K(this, e, Kr, Qr, Q, {});
  }
}
function Fe(t, e, i) {
  const n = t.slice();
  return n[6] = e[i].title, n[7] = e[i].items, n[9] = i, n;
}
function Ve(t, e, i) {
  const n = t.slice();
  return n[6] = e[i].title, n[10] = e[i].icon, n[11] = e[i].url, n[12] = e[i].children, n[14] = i, n;
}
function De(t) {
  let e, i = (
    /*title*/
    t[6] + ""
  ), n;
  return {
    c() {
      e = k("h2"), n = B(i), m(e, "class", "uikit-mb-2 uikit-px-4 uikit-text-lg uikit-font-semibold uikit-tracking-tight");
    },
    m(r, o) {
      z(r, e, o), d(e, n);
    },
    p(r, o) {
      o & /*menus*/
      2 && i !== (i = /*title*/
      r[6] + "") && H(n, i);
    },
    d(r) {
      r && j(e);
    }
  };
}
function qe(t) {
  let e, i, n, r;
  return i = new Hi({
    props: {
      menus: (
        /*children*/
        t[12]
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
      t[9]}-${/*i2*/
      t[14]}`
    }
  }), {
    c() {
      e = k("div"), ut(i.$$.fragment), n = M(), m(e, "class", "uikit-w-full uikit-transition"), st(
        e,
        "height",
        /*isopen*/
        t[0].startsWith(`${/*prefix*/
        t[2]}-${/*i*/
        t[9]}-${/*i2*/
        t[14]}`) ? "" : "0px"
      ), st(
        e,
        "display",
        /*isopen*/
        t[0].startsWith(`${/*prefix*/
        t[2]}-${/*i*/
        t[9]}-${/*i2*/
        t[14]}`) ? "" : "none"
      );
    },
    m(o, l) {
      z(o, e, l), rt(i, e, null), d(e, n), r = !0;
    },
    p(o, l) {
      const s = {};
      l & /*menus*/
      2 && (s.menus = /*children*/
      o[12]), l & /*onClick*/
      8 && (s.onClick = /*onClick*/
      o[3]), l & /*isopen*/
      1 && (s.isopen = /*isopen*/
      o[0]), l & /*prefix*/
      4 && (s.prefix = `${/*prefix*/
      o[2]}-${/*i*/
      o[9]}-${/*i2*/
      o[14]}`), i.$set(s), l & /*isopen, prefix*/
      5 && st(
        e,
        "height",
        /*isopen*/
        o[0].startsWith(`${/*prefix*/
        o[2]}-${/*i*/
        o[9]}-${/*i2*/
        o[14]}`) ? "" : "0px"
      ), l & /*isopen, prefix*/
      5 && st(
        e,
        "display",
        /*isopen*/
        o[0].startsWith(`${/*prefix*/
        o[2]}-${/*i*/
        o[9]}-${/*i2*/
        o[14]}`) ? "" : "none"
      );
    },
    i(o) {
      r || (E(i.$$.fragment, o), r = !0);
    },
    o(o) {
      G(i.$$.fragment, o), r = !1;
    },
    d(o) {
      o && j(e), ot(i);
    }
  };
}
function Ue(t) {
  let e, i, n, r, o, l = (
    /*title*/
    t[6] + ""
  ), s, u, c, a, f, g, h;
  n = new yt({
    props: {
      class: "uikit-mr-2 uikit-h-4 uikit-w-4",
      icon: (
        /*icon*/
        t[10]
      )
    }
  });
  function p() {
    return (
      /*click_handler*/
      t[5](
        /*i*/
        t[9],
        /*i2*/
        t[14],
        /*url*/
        t[11]
      )
    );
  }
  let y = (
    /*children*/
    t[12] && qe(t)
  );
  return {
    c() {
      e = k("button"), i = k("section"), ut(n.$$.fragment), r = M(), o = k("p"), s = B(l), c = M(), y && y.c(), a = bt(), m(i, "class", "uikit-self-center"), m(e, "class", u = `uikit-flex uikit-w-full ${/*isopen*/
      t[0].startsWith(`${/*prefix*/
      t[2]}-${/*i*/
      t[9]}-${/*i2*/
      t[14]}`) ? "uikit-text-green-500 uikit-border-l-green-400 uikit-border-l-4" : ""}`);
    },
    m(b, x) {
      z(b, e, x), d(e, i), rt(n, i, null), d(e, r), d(e, o), d(o, s), z(b, c, x), y && y.m(b, x), z(b, a, x), f = !0, g || (h = et(e, "click", p), g = !0);
    },
    p(b, x) {
      t = b;
      const v = {};
      x & /*menus*/
      2 && (v.icon = /*icon*/
      t[10]), n.$set(v), (!f || x & /*menus*/
      2) && l !== (l = /*title*/
      t[6] + "") && H(s, l), (!f || x & /*isopen, prefix*/
      5 && u !== (u = `uikit-flex uikit-w-full ${/*isopen*/
      t[0].startsWith(`${/*prefix*/
      t[2]}-${/*i*/
      t[9]}-${/*i2*/
      t[14]}`) ? "uikit-text-green-500 uikit-border-l-green-400 uikit-border-l-4" : ""}`)) && m(e, "class", u), /*children*/
      t[12] ? y ? (y.p(t, x), x & /*menus*/
      2 && E(y, 1)) : (y = qe(t), y.c(), E(y, 1), y.m(a.parentNode, a)) : y && (it(), G(y, 1, 1, () => {
        y = null;
      }), nt());
    },
    i(b) {
      f || (E(n.$$.fragment, b), E(y), f = !0);
    },
    o(b) {
      G(n.$$.fragment, b), G(y), f = !1;
    },
    d(b) {
      b && (j(e), j(c), j(a)), ot(n), y && y.d(b), g = !1, h();
    }
  };
}
function Ze(t) {
  let e, i, n, r, o, l = (
    /*title*/
    t[6] && De(t)
  ), s = D(
    /*items*/
    t[7]
  ), u = [];
  for (let a = 0; a < s.length; a += 1)
    u[a] = Ue(Ve(t, s, a));
  const c = (a) => G(u[a], 1, 1, () => {
    u[a] = null;
  });
  return {
    c() {
      e = k("div"), l && l.c(), i = M(), n = k("div");
      for (let a = 0; a < u.length; a += 1)
        u[a].c();
      r = M(), m(n, "class", "uikit-space-y-1"), m(e, "class", "uikit-py-2");
    },
    m(a, f) {
      z(a, e, f), l && l.m(e, null), d(e, i), d(e, n);
      for (let g = 0; g < u.length; g += 1)
        u[g] && u[g].m(n, null);
      d(e, r), o = !0;
    },
    p(a, f) {
      if (/*title*/
      a[6] ? l ? l.p(a, f) : (l = De(a), l.c(), l.m(e, i)) : l && (l.d(1), l = null), f & /*isopen, prefix, menus, onClick*/
      15) {
        s = D(
          /*items*/
          a[7]
        );
        let g;
        for (g = 0; g < s.length; g += 1) {
          const h = Ve(a, s, g);
          u[g] ? (u[g].p(h, f), E(u[g], 1)) : (u[g] = Ue(h), u[g].c(), E(u[g], 1), u[g].m(n, null));
        }
        for (it(), g = s.length; g < u.length; g += 1)
          c(g);
        nt();
      }
    },
    i(a) {
      if (!o) {
        for (let f = 0; f < s.length; f += 1)
          E(u[f]);
        o = !0;
      }
    },
    o(a) {
      u = u.filter(Boolean);
      for (let f = 0; f < u.length; f += 1)
        G(u[f]);
      o = !1;
    },
    d(a) {
      a && j(e), l && l.d(), tt(u, a);
    }
  };
}
function Jr(t) {
  let e, i, n = D(
    /*menus*/
    t[1]
  ), r = [];
  for (let l = 0; l < n.length; l += 1)
    r[l] = Ze(Fe(t, n, l));
  const o = (l) => G(r[l], 1, 1, () => {
    r[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      e = bt();
    },
    m(l, s) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(l, s);
      z(l, e, s), i = !0;
    },
    p(l, [s]) {
      if (s & /*menus, isopen, prefix, onClick*/
      15) {
        n = D(
          /*menus*/
          l[1]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const c = Fe(l, n, u);
          r[u] ? (r[u].p(c, s), E(r[u], 1)) : (r[u] = Ze(c), r[u].c(), E(r[u], 1), r[u].m(e.parentNode, e));
        }
        for (it(), u = n.length; u < r.length; u += 1)
          o(u);
        nt();
      }
    },
    i(l) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          E(r[s]);
        i = !0;
      }
    },
    o(l) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        G(r[s]);
      i = !1;
    },
    d(l) {
      l && j(e), tt(r, l);
    }
  };
}
function Xr(t, e, i) {
  let { menus: n = [] } = e, { prefix: r = "" } = e, { isopen: o = "" } = e, { onClick: l = (c) => {
    console.log(c);
  } } = e;
  function s(c) {
    i(0, o = c);
  }
  const u = (c, a, f) => {
    o === `${r}-${c}-${a}` ? i(0, o = r) : i(0, o = `${r}-${c}-${a}`), l(f);
  };
  return t.$$set = (c) => {
    "menus" in c && i(1, n = c.menus), "prefix" in c && i(2, r = c.prefix), "isopen" in c && i(0, o = c.isopen), "onClick" in c && i(3, l = c.onClick);
  }, [o, n, r, l, s, u];
}
class Hi extends J {
  constructor(e) {
    super(), K(this, e, Xr, Jr, Q, {
      menus: 1,
      prefix: 2,
      isopen: 0,
      onClick: 3,
      open: 4
    });
  }
  get open() {
    return this.$$.ctx[4];
  }
}
function Yr(t) {
  let e, i, n, r, o;
  return n = new Hi({
    props: {
      menus: (
        /*menus*/
        t[1]
      ),
      onClick: (
        /*onClick*/
        t[2]
      ),
      isopen: (
        /*isopen*/
        t[0]
      )
    }
  }), {
    c() {
      e = k("div"), i = k("div"), ut(n.$$.fragment), m(i, "class", "uikit-space-y-4 uikit-py-4 uikit-w-full uikit-px-3"), m(e, "class", r = Y(
        "uikit-pb-12",
        /*className*/
        t[3]
      ));
    },
    m(l, s) {
      z(l, e, s), d(e, i), rt(n, i, null), o = !0;
    },
    p(l, [s]) {
      const u = {};
      s & /*menus*/
      2 && (u.menus = /*menus*/
      l[1]), s & /*onClick*/
      4 && (u.onClick = /*onClick*/
      l[2]), s & /*isopen*/
      1 && (u.isopen = /*isopen*/
      l[0]), n.$set(u), (!o || s & /*className*/
      8 && r !== (r = Y(
        "uikit-pb-12",
        /*className*/
        l[3]
      ))) && m(e, "class", r);
    },
    i(l) {
      o || (E(n.$$.fragment, l), o = !0);
    },
    o(l) {
      G(n.$$.fragment, l), o = !1;
    },
    d(l) {
      l && j(e), ot(n);
    }
  };
}
function $r(t, e, i) {
  let { isopen: n = "" } = e, { menus: r = [] } = e, { onClick: o = (f) => {
    console.log(f);
  } } = e, { class: l = void 0 } = e;
  function s(f) {
    i(0, n = f);
  }
  function u(f) {
    i(0, n = c[f]);
  }
  let c = {};
  const a = () => {
    const f = (g, h) => {
      if (h)
        for (let p = 0; p < h.length; p++) {
          let y = h[p];
          for (let b = 0; b < y.items.length; b++) {
            let x = `${g}-${p}-${b}`;
            c[y.items[b].url] = x, f(x, y.items[b].children);
          }
        }
    };
    f("", r);
  };
  return t.$$set = (f) => {
    "isopen" in f && i(0, n = f.isopen), "menus" in f && i(1, r = f.menus), "onClick" in f && i(2, o = f.onClick), "class" in f && i(3, l = f.class);
  }, t.$$.update = () => {
    t.$$.dirty & /*menus*/
    2 && r && a();
  }, [n, r, o, l, s, u];
}
class So extends J {
  constructor(e) {
    super(), K(this, e, $r, Yr, Q, {
      isopen: 0,
      menus: 1,
      onClick: 2,
      class: 3,
      openbyid: 4,
      openbyurl: 5
    });
  }
  get openbyid() {
    return this.$$.ctx[4];
  }
  get openbyurl() {
    return this.$$.ctx[5];
  }
}
function Qe(t) {
  let e, i, n;
  return {
    c() {
      e = k("button"), e.textContent = "open", m(e, "class", "uikit-btn");
    },
    m(r, o) {
      z(r, e, o), i || (n = et(e, "click", function() {
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
      r && j(e), i = !1, n();
    }
  };
}
function to(t) {
  let e, i, n, r, o, l, s, u, c = !/*handle*/
  t[0] && Qe(t);
  return {
    c() {
      c && c.c(), e = M(), i = k("dialog"), n = k("div"), r = k("form"), r.innerHTML = '<button class="uikit-btn uikit-btn-sm uikit-btn-circle uikit-btn-ghost uikit-absolute uikit-right-2 uikit-top-2">✕</button>', o = M(), l = k("div"), l.innerHTML = '<h3 class="uikit-font-bold uikit-text-lg">Hello!</h3> <p class="uikit-py-4">Press ESC key or click on ✕ button to close</p>', s = M(), u = k("form"), u.innerHTML = "<button>close</button>", m(r, "method", "dialog"), m(n, "class", "uikit-modal-box"), m(u, "method", "dialog"), m(u, "class", "uikit-modal-backdrop"), m(i, "class", "uikit-modal");
    },
    m(a, f) {
      c && c.m(a, f), z(a, e, f), z(a, i, f), d(i, n), d(n, r), d(n, o), d(n, l), t[4](l), d(i, s), d(i, u), t[5](i);
    },
    p(a, [f]) {
      /*handle*/
      a[0] ? c && (c.d(1), c = null) : c ? c.p(a, f) : (c = Qe(a), c.c(), c.m(e.parentNode, e));
    },
    i: V,
    o: V,
    d(a) {
      a && (j(e), j(i)), c && c.d(a), t[4](null), t[5](null);
    }
  };
}
function eo(t, e, i) {
  let { handle: n = void 0 } = e, { content: r = void 0 } = e, o, l;
  vt(() => {
    console.log("here", n), n && n.addEventListener("click", () => {
      console.log("here"), o.showModal();
    }), r && (i(2, l.innerHTML = "", l), l.appendChild(r));
  });
  function s(c) {
    ft[c ? "unshift" : "push"](() => {
      l = c, i(2, l);
    });
  }
  function u(c) {
    ft[c ? "unshift" : "push"](() => {
      o = c, i(1, o);
    });
  }
  return t.$$set = (c) => {
    "handle" in c && i(0, n = c.handle), "content" in c && i(3, r = c.content);
  }, [n, o, l, r, s, u];
}
class Io extends J {
  constructor(e) {
    super(), K(this, e, eo, to, Q, { handle: 0, content: 3 });
  }
}
function Ke(t, e, i) {
  const n = t.slice();
  return n[10] = e[i].type, n[11] = e[i].title, n[12] = e[i].url, n[13] = e[i].icon, n[14] = e[i].items, n;
}
function Je(t, e, i) {
  const n = t.slice();
  return n[11] = e[i].title, n[12] = e[i].url, n;
}
function Xe(t, e, i) {
  const n = t.slice();
  return n[10] = e[i].type, n[11] = e[i].title, n[12] = e[i].url, n[13] = e[i].icon, n[14] = e[i].items, n;
}
function Ye(t, e, i) {
  const n = t.slice();
  return n[11] = e[i].title, n[12] = e[i].url, n;
}
function io(t) {
  let e, i, n, r, o = (
    /*title*/
    t[11] + ""
  ), l, s, u, c, a;
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
      e = k("li"), i = k("button"), ut(n.$$.fragment), r = k("span"), l = B(o), s = M(), m(r, "class", "uikit-ml-2"), m(i, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case"), m(e, "class", "nav-item");
    },
    m(g, h) {
      z(g, e, h), d(e, i), rt(n, i, null), d(i, r), d(r, l), d(e, s), u = !0, c || (a = et(i, "click", f), c = !0);
    },
    p(g, h) {
      t = g;
      const p = {};
      h & /*links*/
      8 && (p.icon = /*icon*/
      t[13]), n.$set(p), (!u || h & /*links*/
      8) && o !== (o = /*title*/
      t[11] + "") && H(l, o);
    },
    i(g) {
      u || (E(n.$$.fragment, g), u = !0);
    },
    o(g) {
      G(n.$$.fragment, g), u = !1;
    },
    d(g) {
      g && j(e), ot(n), c = !1, a();
    }
  };
}
function no(t) {
  let e, i, n, r = (
    /*title*/
    t[11] + ""
  ), o, l, s, u, c = D(
    /*items*/
    t[14]
  ), a = [];
  for (let f = 0; f < c.length; f += 1)
    a[f] = $e(Ye(t, c, f));
  return {
    c() {
      e = k("li"), i = k("div"), n = k("label"), o = B(r), l = M(), s = k("ul");
      for (let f = 0; f < a.length; f += 1)
        a[f].c();
      u = M(), m(n, "tabindex", "1"), m(n, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), m(s, "tabindex", "1"), m(s, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), m(i, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), m(e, "class", "nav-item");
    },
    m(f, g) {
      z(f, e, g), d(e, i), d(i, n), d(n, o), d(i, l), d(i, s);
      for (let h = 0; h < a.length; h += 1)
        a[h] && a[h].m(s, null);
      d(e, u);
    },
    p(f, g) {
      if (g & /*links*/
      8 && r !== (r = /*title*/
      f[11] + "") && H(o, r), g & /*onItemClick, links*/
      24) {
        c = D(
          /*items*/
          f[14]
        );
        let h;
        for (h = 0; h < c.length; h += 1) {
          const p = Ye(f, c, h);
          a[h] ? a[h].p(p, g) : (a[h] = $e(p), a[h].c(), a[h].m(s, null));
        }
        for (; h < a.length; h += 1)
          a[h].d(1);
        a.length = c.length;
      }
    },
    i: V,
    o: V,
    d(f) {
      f && j(e), tt(a, f);
    }
  };
}
function $e(t) {
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
      e = k("li"), i = k("button"), r = B(n), o = M();
    },
    m(c, a) {
      z(c, e, a), d(e, i), d(i, r), d(e, o), l || (s = et(i, "click", u), l = !0);
    },
    p(c, a) {
      t = c, a & /*links*/
      8 && n !== (n = /*title*/
      t[11] + "") && H(r, n);
    },
    d(c) {
      c && j(e), l = !1, s();
    }
  };
}
function ti(t) {
  let e, i, n, r;
  const o = [no, io], l = [];
  function s(u, c) {
    return (
      /*type*/
      u[10] === "menu" ? 0 : 1
    );
  }
  return e = s(t), i = l[e] = o[e](t), {
    c() {
      i.c(), n = bt();
    },
    m(u, c) {
      l[e].m(u, c), z(u, n, c), r = !0;
    },
    p(u, c) {
      let a = e;
      e = s(u), e === a ? l[e].p(u, c) : (it(), G(l[a], 1, 1, () => {
        l[a] = null;
      }), nt(), i = l[e], i ? i.p(u, c) : (i = l[e] = o[e](u), i.c()), E(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (E(i), r = !0);
    },
    o(u) {
      G(i), r = !1;
    },
    d(u) {
      u && j(n), l[e].d(u);
    }
  };
}
function ro(t) {
  let e, i, n, r, o = (
    /*title*/
    t[11] + ""
  ), l, s, u, c, a;
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
      e = k("li"), i = k("button"), ut(n.$$.fragment), r = k("span"), l = B(o), s = M(), m(r, "class", "uikit-ml-2"), m(i, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case uikit-items-start"), m(e, "class", "uikit-nav-item");
    },
    m(g, h) {
      z(g, e, h), d(e, i), rt(n, i, null), d(i, r), d(r, l), d(e, s), u = !0, c || (a = et(i, "click", f), c = !0);
    },
    p(g, h) {
      t = g;
      const p = {};
      h & /*links*/
      8 && (p.icon = /*icon*/
      t[13]), n.$set(p), (!u || h & /*links*/
      8) && o !== (o = /*title*/
      t[11] + "") && H(l, o);
    },
    i(g) {
      u || (E(n.$$.fragment, g), u = !0);
    },
    o(g) {
      G(n.$$.fragment, g), u = !1;
    },
    d(g) {
      g && j(e), ot(n), c = !1, a();
    }
  };
}
function oo(t) {
  let e, i, n, r = (
    /*title*/
    t[11] + ""
  ), o, l, s, u, c = D(
    /*items*/
    t[14]
  ), a = [];
  for (let f = 0; f < c.length; f += 1)
    a[f] = ei(Je(t, c, f));
  return {
    c() {
      e = k("li"), i = k("div"), n = k("label"), o = B(r), l = M(), s = k("ul");
      for (let f = 0; f < a.length; f += 1)
        a[f].c();
      u = M(), m(n, "tabindex", "1"), m(n, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), m(s, "tabindex", "1"), m(s, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), m(i, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), m(e, "class", "uikit-nav-item uikit-w-full");
    },
    m(f, g) {
      z(f, e, g), d(e, i), d(i, n), d(n, o), d(i, l), d(i, s);
      for (let h = 0; h < a.length; h += 1)
        a[h] && a[h].m(s, null);
      d(e, u);
    },
    p(f, g) {
      if (g & /*links*/
      8 && r !== (r = /*title*/
      f[11] + "") && H(o, r), g & /*onItemClick, links*/
      24) {
        c = D(
          /*items*/
          f[14]
        );
        let h;
        for (h = 0; h < c.length; h += 1) {
          const p = Je(f, c, h);
          a[h] ? a[h].p(p, g) : (a[h] = ei(p), a[h].c(), a[h].m(s, null));
        }
        for (; h < a.length; h += 1)
          a[h].d(1);
        a.length = c.length;
      }
    },
    i: V,
    o: V,
    d(f) {
      f && j(e), tt(a, f);
    }
  };
}
function ei(t) {
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
      e = k("li"), i = k("button"), r = B(n), o = M();
    },
    m(c, a) {
      z(c, e, a), d(e, i), d(i, r), d(e, o), l || (s = et(i, "click", u), l = !0);
    },
    p(c, a) {
      t = c, a & /*links*/
      8 && n !== (n = /*title*/
      t[11] + "") && H(r, n);
    },
    d(c) {
      c && j(e), l = !1, s();
    }
  };
}
function ii(t) {
  let e, i, n, r;
  const o = [oo, ro], l = [];
  function s(u, c) {
    return (
      /*type*/
      u[10] === "menu" ? 0 : 1
    );
  }
  return e = s(t), i = l[e] = o[e](t), {
    c() {
      i.c(), n = bt();
    },
    m(u, c) {
      l[e].m(u, c), z(u, n, c), r = !0;
    },
    p(u, c) {
      let a = e;
      e = s(u), e === a ? l[e].p(u, c) : (it(), G(l[a], 1, 1, () => {
        l[a] = null;
      }), nt(), i = l[e], i ? i.p(u, c) : (i = l[e] = o[e](u), i.c()), E(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (E(i), r = !0);
    },
    o(u) {
      G(i), r = !1;
    },
    d(u) {
      u && j(n), l[e].d(u);
    }
  };
}
function lo(t) {
  let e, i, n, r, o, l, s, u, c, a, f, g, h, p, y, b, x, v, T, A, L, C, R, P = D(
    /*links*/
    t[3]
  ), N = [];
  for (let _ = 0; _ < P.length; _ += 1)
    N[_] = ti(Xe(t, P, _));
  const q = (_) => G(N[_], 1, 1, () => {
    N[_] = null;
  });
  let W = D(
    /*links*/
    t[3]
  ), S = [];
  for (let _ = 0; _ < W.length; _ += 1)
    S[_] = ii(Ke(t, W, _));
  const U = (_) => G(S[_], 1, 1, () => {
    S[_] = null;
  });
  return {
    c() {
      e = k("nav"), i = k("div"), n = k("div"), r = k("button"), o = B(
        /*logotxt*/
        t[1]
      ), l = M(), s = k("div"), u = k("ul");
      for (let _ = 0; _ < N.length; _ += 1)
        N[_].c();
      c = M(), a = k("div"), f = k("div"), g = k("input"), h = M(), p = k("div"), p.innerHTML = '<label for="my-drawer" class="uikit-btn uikit-btn-ghost uikit-drawer-button"><div class="uikit-ml-1 uikit-mr-1 uikit-h-8 uikit-w-8 uikit-rounded uikit-py-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="uikit-text-gray-900 dark:uikit-text-gray-100"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></div></label>', y = M(), b = k("div"), x = k("label"), v = M(), T = k("ul");
      for (let _ = 0; _ < S.length; _ += 1)
        S[_].c();
      m(r, "class", "uikit-text-sm uikit-font-bold uikit-leading-relaxed uikit-inline-block uikit-mr-4 uikit-py-2 uikit-whitespace-nowrap uikit-text-slate-700"), m(n, "class", "uikit-relative uikit-flex uikit-justify-between lg:uikit-w-auto lg:uikit-static lg:uikit-block lg:uikit-justify-start"), m(u, "class", "uikit-flex uikit-flex-col lg:uikit-flex-row uikit-list-none lg:uikit-ml-auto"), m(s, "class", "lg:uikit-flex uikit-flex-grow uikit-items-center uikit-hidden"), m(g, "id", "my-drawer"), m(g, "type", "checkbox"), m(g, "class", "uikit-drawer-toggle"), m(p, "class", "uikit-drawer-content"), m(x, "for", "my-drawer"), m(x, "class", "uikit-drawer-overlay"), m(T, "class", "uikit-menu uikit-p-4 uikit-w-80 uikit-min-h-full uikit-bg-base-200 uikit-text-base-content"), m(b, "class", "uikit-drawer-side"), m(f, "class", "uikit-drawer"), m(a, "class", "lg:uikit-hidden"), m(i, "class", "uikit-container uikit-px-4 uikit-mx-auto uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between"), m(e, "class", A = Y(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        t[0]
      ));
    },
    m(_, I) {
      z(_, e, I), d(e, i), d(i, n), d(n, r), d(r, o), d(i, l), d(i, s), d(s, u);
      for (let w = 0; w < N.length; w += 1)
        N[w] && N[w].m(u, null);
      d(i, c), d(i, a), d(a, f), d(f, g), d(f, h), d(f, p), d(f, y), d(f, b), d(b, x), d(b, v), d(b, T);
      for (let w = 0; w < S.length; w += 1)
        S[w] && S[w].m(T, null);
      L = !0, C || (R = et(
        r,
        "click",
        /*click_handler*/
        t[5]
      ), C = !0);
    },
    p(_, [I]) {
      if ((!L || I & /*logotxt*/
      2) && H(
        o,
        /*logotxt*/
        _[1]
      ), I & /*links, onItemClick*/
      24) {
        P = D(
          /*links*/
          _[3]
        );
        let w;
        for (w = 0; w < P.length; w += 1) {
          const Z = Xe(_, P, w);
          N[w] ? (N[w].p(Z, I), E(N[w], 1)) : (N[w] = ti(Z), N[w].c(), E(N[w], 1), N[w].m(u, null));
        }
        for (it(), w = P.length; w < N.length; w += 1)
          q(w);
        nt();
      }
      if (I & /*links, onItemClick*/
      24) {
        W = D(
          /*links*/
          _[3]
        );
        let w;
        for (w = 0; w < W.length; w += 1) {
          const Z = Ke(_, W, w);
          S[w] ? (S[w].p(Z, I), E(S[w], 1)) : (S[w] = ii(Z), S[w].c(), E(S[w], 1), S[w].m(T, null));
        }
        for (it(), w = W.length; w < S.length; w += 1)
          U(w);
        nt();
      }
      (!L || I & /*className*/
      1 && A !== (A = Y(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        _[0]
      ))) && m(e, "class", A);
    },
    i(_) {
      if (!L) {
        for (let I = 0; I < P.length; I += 1)
          E(N[I]);
        for (let I = 0; I < W.length; I += 1)
          E(S[I]);
        L = !0;
      }
    },
    o(_) {
      N = N.filter(Boolean);
      for (let I = 0; I < N.length; I += 1)
        G(N[I]);
      S = S.filter(Boolean);
      for (let I = 0; I < S.length; I += 1)
        G(S[I]);
      L = !1;
    },
    d(_) {
      _ && j(e), tt(N, _), tt(S, _), C = !1, R();
    }
  };
}
function so(t, e, i) {
  let { class: n = "" } = e, { logotxt: r = "wwqdrh" } = e, { logourl: o = "#" } = e, { links: l = [] } = e, { onItemClick: s = (h) => {
    window.location.href = h;
  } } = e;
  const u = () => s(o), c = (h) => s(h), a = (h) => s(h), f = (h) => s(h), g = (h) => s(h);
  return t.$$set = (h) => {
    "class" in h && i(0, n = h.class), "logotxt" in h && i(1, r = h.logotxt), "logourl" in h && i(2, o = h.logourl), "links" in h && i(3, l = h.links), "onItemClick" in h && i(4, s = h.onItemClick);
  }, [
    n,
    r,
    o,
    l,
    s,
    u,
    c,
    a,
    f,
    g
  ];
}
class uo extends J {
  constructor(e) {
    super(), K(this, e, so, lo, Q, {
      class: 0,
      logotxt: 1,
      logourl: 2,
      links: 3,
      onItemClick: 4
    });
  }
}
function ni(t, e, i) {
  const n = t.slice();
  return n[7] = e[i], n;
}
function ri(t) {
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
      e = k("button"), n = B(i), m(e, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(s, u) {
      z(s, e, u), d(e, n), r || (o = et(e, "click", l), r = !0);
    },
    p(s, u) {
      t = s, u & /*buttons*/
      8 && i !== (i = /*item*/
      t[7] + "") && H(n, i);
    },
    d(s) {
      s && j(e), r = !1, o();
    }
  };
}
function co(t) {
  let e, i, n, r, o, l, s, u, c, a, f, g, h, p, y, b = D(
    /*buttons*/
    t[3]
  ), x = [];
  for (let v = 0; v < b.length; v += 1)
    x[v] = ri(ni(t, b, v));
  return {
    c() {
      e = k("section"), i = k("div"), n = k("div"), r = k("div"), o = k("h2"), l = B(
        /*title*/
        t[0]
      ), s = M(), u = k("p"), c = B(
        /*description*/
        t[1]
      ), a = M(), f = k("div");
      for (let v = 0; v < x.length; v += 1)
        x[v].c();
      g = M(), h = k("img"), m(o, "class", "uikit-font-semibold uikit-text-4xl uikit-text-slate-600"), m(u, "class", "uikit-mt-4 uikit-text-lg uikit-leading-relaxed uikit-text-slate-500"), m(f, "class", "uikit-mt-12"), m(r, "class", "uikit-pt-32 sm:uikit-pt-0"), m(n, "class", "uikit-w-full md:uikit-w-8/12 lg:uikit-w-6/12 xl:uikit-w-6/12 uikit-px-4"), m(i, "class", "uikit-container uikit-mx-auto uikit-items-center uikit-flex uikit-flex-wrap"), m(h, "class", "uikit-absolute uikit-top-0 uikit-b-auto uikit-right-0 uikit-pt-16 sm:uikit-w-6/12 uikit--mt-48 sm:uikit-mt-0 uikit-w-10/12"), Wt(h.src, p = /*cover*/
      t[5]) || m(h, "src", p), m(h, "alt", "..."), st(h, "max-height", "860px"), m(e, "class", y = Y(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        t[2]
      )), st(e, "max-height", "860px");
    },
    m(v, T) {
      z(v, e, T), d(e, i), d(i, n), d(n, r), d(r, o), d(o, l), d(r, s), d(r, u), d(u, c), d(r, a), d(r, f);
      for (let A = 0; A < x.length; A += 1)
        x[A] && x[A].m(f, null);
      d(e, g), d(e, h);
    },
    p(v, [T]) {
      if (T & /*title*/
      1 && H(
        l,
        /*title*/
        v[0]
      ), T & /*description*/
      2 && H(
        c,
        /*description*/
        v[1]
      ), T & /*buttonClick, buttons*/
      24) {
        b = D(
          /*buttons*/
          v[3]
        );
        let A;
        for (A = 0; A < b.length; A += 1) {
          const L = ni(v, b, A);
          x[A] ? x[A].p(L, T) : (x[A] = ri(L), x[A].c(), x[A].m(f, null));
        }
        for (; A < x.length; A += 1)
          x[A].d(1);
        x.length = b.length;
      }
      T & /*cover*/
      32 && !Wt(h.src, p = /*cover*/
      v[5]) && m(h, "src", p), T & /*className*/
      4 && y !== (y = Y(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        v[2]
      )) && m(e, "class", y);
    },
    i: V,
    o: V,
    d(v) {
      v && j(e), tt(x, v);
    }
  };
}
function ao(t, e, i) {
  let { title: n = "wwqdrh's ui component: uikit" } = e, { description: r = "a cross framework web component, you can visit it in wwqdrh'home" } = e, { class: o = "" } = e, { buttons: l = [] } = e, { buttonClick: s = (a) => {
    console.log(a);
  } } = e, { cover: u = "" } = e;
  const c = (a) => s(a);
  return t.$$set = (a) => {
    "title" in a && i(0, n = a.title), "description" in a && i(1, r = a.description), "class" in a && i(2, o = a.class), "buttons" in a && i(3, l = a.buttons), "buttonClick" in a && i(4, s = a.buttonClick), "cover" in a && i(5, u = a.cover);
  }, [n, r, o, l, s, u, c];
}
class fo extends J {
  constructor(e) {
    super(), K(this, e, ao, co, Q, {
      title: 0,
      description: 1,
      class: 2,
      buttons: 3,
      buttonClick: 4,
      cover: 5
    });
  }
}
function oi(t, e, i) {
  const n = t.slice();
  return n[4] = e[i].icon, n[2] = e[i].title, n[3] = e[i].description, n;
}
function li(t) {
  let e, i, n, r, o, l = (
    /*title*/
    t[2] + ""
  ), s, u, c, a = (
    /*description*/
    t[3] + ""
  ), f, g, h;
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
      e = k("div"), i = k("div"), ut(n.$$.fragment), r = M(), o = k("h3"), s = B(l), u = M(), c = k("p"), f = B(a), g = M(), m(i, "class", "uikit-flex uikit-justify-center uikit-items-center uikit-mb-4 uikit-w-10 uikit-h-10 uikit-rounded-full uikit-bg-primary-100 lg:uikit-h-12 lg:uikit-w-12 dark:uikit-bg-primary-900"), m(o, "class", "uikit-mb-2 uikit-text-xl uikit-font-bold dark:uikit-text-white"), m(c, "class", "uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(p, y) {
      z(p, e, y), d(e, i), rt(n, i, null), d(e, r), d(e, o), d(o, s), d(e, u), d(e, c), d(c, f), d(e, g), h = !0;
    },
    p(p, y) {
      const b = {};
      y & /*features*/
      2 && (b.icon = /*icon*/
      p[4]), n.$set(b), (!h || y & /*features*/
      2) && l !== (l = /*title*/
      p[2] + "") && H(s, l), (!h || y & /*features*/
      2) && a !== (a = /*description*/
      p[3] + "") && H(f, a);
    },
    i(p) {
      h || (E(n.$$.fragment, p), h = !0);
    },
    o(p) {
      G(n.$$.fragment, p), h = !1;
    },
    d(p) {
      p && j(e), ot(n);
    }
  };
}
function go(t) {
  let e, i, n, r, o, l, s, u, c, a, f, g, h = D(
    /*features*/
    t[1]
  ), p = [];
  for (let b = 0; b < h.length; b += 1)
    p[b] = li(oi(t, h, b));
  const y = (b) => G(p[b], 1, 1, () => {
    p[b] = null;
  });
  return {
    c() {
      e = k("section"), i = k("div"), n = k("div"), r = k("h2"), o = B(
        /*title*/
        t[2]
      ), l = M(), s = k("p"), u = B(
        /*description*/
        t[3]
      ), c = M(), a = k("div");
      for (let b = 0; b < p.length; b += 1)
        p[b].c();
      m(r, "class", "uikit-mb-4 uikit-text-4xl uikit-font-extrabold uikit-text-gray-900 dark:uikit-text-white"), m(s, "class", "uikit-text-gray-500 sm:uikit-text-xl dark:uikit-text-gray-400"), m(n, "class", "uikit-mb-8 uikit-max-w-screen-md lg:uikit-mb-16"), m(a, "class", "uikit-space-y-8 md:uikit-grid md:uikit-grid-cols-2 lg:uikit-grid-cols-3 md:uikit-gap-12 md:uikit-space-y-0"), m(i, "class", "uikit-py-8 uikit-px-4 uikit-mx-auto uikit-max-w-screen-xl sm:uikit-py-16 lg:uikit-px-6"), m(e, "class", f = Y(
        "dark:uikit-bg-gray-800",
        /*className*/
        t[0]
      ));
    },
    m(b, x) {
      z(b, e, x), d(e, i), d(i, n), d(n, r), d(r, o), d(n, l), d(n, s), d(s, u), d(i, c), d(i, a);
      for (let v = 0; v < p.length; v += 1)
        p[v] && p[v].m(a, null);
      g = !0;
    },
    p(b, [x]) {
      if ((!g || x & /*title*/
      4) && H(
        o,
        /*title*/
        b[2]
      ), (!g || x & /*description*/
      8) && H(
        u,
        /*description*/
        b[3]
      ), x & /*features*/
      2) {
        h = D(
          /*features*/
          b[1]
        );
        let v;
        for (v = 0; v < h.length; v += 1) {
          const T = oi(b, h, v);
          p[v] ? (p[v].p(T, x), E(p[v], 1)) : (p[v] = li(T), p[v].c(), E(p[v], 1), p[v].m(a, null));
        }
        for (it(), v = h.length; v < p.length; v += 1)
          y(v);
        nt();
      }
      (!g || x & /*className*/
      1 && f !== (f = Y(
        "dark:uikit-bg-gray-800",
        /*className*/
        b[0]
      ))) && m(e, "class", f);
    },
    i(b) {
      if (!g) {
        for (let x = 0; x < h.length; x += 1)
          E(p[x]);
        g = !0;
      }
    },
    o(b) {
      p = p.filter(Boolean);
      for (let x = 0; x < p.length; x += 1)
        G(p[x]);
      g = !1;
    },
    d(b) {
      b && j(e), tt(p, b);
    }
  };
}
function ho(t, e, i) {
  let { class: n = "" } = e, { title: r = "" } = e, { description: o = "" } = e, { features: l = [] } = e;
  return t.$$set = (s) => {
    "class" in s && i(0, n = s.class), "title" in s && i(2, r = s.title), "description" in s && i(3, o = s.description), "features" in s && i(1, l = s.features);
  }, [n, l, r, o];
}
class mo extends J {
  constructor(e) {
    super(), K(this, e, ho, go, Q, {
      class: 0,
      title: 2,
      description: 3,
      features: 1
    });
  }
}
function si(t, e, i) {
  const n = t.slice();
  return n[11] = e[i], n[13] = i, n;
}
function ui(t, e, i) {
  const n = t.slice();
  return n[11] = e[i], n;
}
function ci(t, e, i) {
  const n = t.slice();
  return n[8] = e[i].icon, n[9] = e[i].description, n;
}
function ai(t) {
  let e, i, n;
  return i = new yt({ props: { icon: (
    /*icon*/
    t[8]
  ) } }), {
    c() {
      e = k("div"), ut(i.$$.fragment), m(e, "class", "uikit-text-slate-500 uikit-p-3 uikit-text-center uikit-inline-flex uikit-items-center uikit-justify-center uikit-w-16 uikit-h-16 uikit-mb-6 uikit-shadow-lg uikit-rounded-full uikit-bg-white");
    },
    m(r, o) {
      z(r, e, o), rt(i, e, null), n = !0;
    },
    p(r, o) {
      const l = {};
      o & /*icon*/
      256 && (l.icon = /*icon*/
      r[8]), i.$set(l);
    },
    i(r) {
      n || (E(i.$$.fragment, r), n = !0);
    },
    o(r) {
      G(i.$$.fragment, r), n = !1;
    },
    d(r) {
      r && j(e), ot(i);
    }
  };
}
function fi(t) {
  let e, i;
  return e = new yt({ props: { icon: (
    /*icon*/
    t[8]
  ) } }), {
    c() {
      ut(e.$$.fragment);
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
      i || (E(e.$$.fragment, n), i = !0);
    },
    o(n) {
      G(e.$$.fragment, n), i = !1;
    },
    d(n) {
      ot(e, n);
    }
  };
}
function di(t) {
  let e, i, n, r = (
    /*description*/
    t[9] + ""
  ), o, l, s = (
    /*icon*/
    t[8] && fi(t)
  );
  return {
    c() {
      e = k("li"), i = k("span"), s && s.c(), n = M(), o = B(r), m(i, "class", "uikit-text-xs uikit-font-semibold uikit-inline-block uikit-py-1 uikit-px-2 uikit-rounded-full uikit-text-slate-500 uikit-bg-slate-50 uikit-mr-3"), m(e, "class", "uikit-py-2");
    },
    m(u, c) {
      z(u, e, c), d(e, i), s && s.m(i, null), d(i, n), d(i, o), l = !0;
    },
    p(u, c) {
      /*icon*/
      u[8] ? s ? (s.p(u, c), c & /*sections*/
      16 && E(s, 1)) : (s = fi(u), s.c(), E(s, 1), s.m(i, n)) : s && (it(), G(s, 1, 1, () => {
        s = null;
      }), nt()), (!l || c & /*sections*/
      16) && r !== (r = /*description*/
      u[9] + "") && H(o, r);
    },
    i(u) {
      l || (E(s), l = !0);
    },
    o(u) {
      G(s), l = !1;
    },
    d(u) {
      u && j(e), s && s.d();
    }
  };
}
function gi(t) {
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
      e = k("button"), n = B(i), m(e, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(s, u) {
      z(s, e, u), d(e, n), r || (o = et(e, "click", l), r = !0);
    },
    p(s, u) {
      t = s, u & /*buttons*/
      32 && i !== (i = /*item*/
      t[11] + "") && H(n, i);
    },
    d(s) {
      s && j(e), r = !1, o();
    }
  };
}
function hi(t) {
  let e, i, n, r, o, l, s, u, c, a, f, g, h, p;
  return {
    c() {
      e = k("div"), i = k("img"), r = M(), o = k("div"), l = k("a"), s = B("❮"), c = M(), a = k("a"), f = B("❯"), h = M(), m(i, "alt", "..."), m(i, "class", "uikit-max-w-full uikit-rounded-lg uikit-shadow-xl"), st(i, "transform", "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"), Wt(i.src, n = /*item*/
      t[11]) || m(i, "src", n), m(l, "href", u = `#pd-cover-slide-${/*id*/
      t[1]}-${/*i*/
      (t[13] - 1 + /*covers*/
      t[2].length) % /*covers*/
      t[2].length}`), m(l, "class", "uikit-btn uikit-btn-circle"), m(a, "href", g = `#pd-cover-slide-${/*id*/
      t[1]}-${/*i*/
      (t[13] + 1) % /*covers*/
      t[2].length}`), m(a, "class", "uikit-btn uikit-btn-circle"), m(o, "class", "uikit-absolute uikit-flex uikit-justify-between uikit-transform uikit--translate-y-1/2 uikit-left-5 uikit-right-5 uikit-top-1/2"), m(e, "id", p = `pd-cover-slide-${/*id*/
      t[1]}-${/*i*/
      t[13]}`), m(e, "class", "uikit-carousel-item uikit-relative uikit-w-full");
    },
    m(y, b) {
      z(y, e, b), d(e, i), d(e, r), d(e, o), d(o, l), d(l, s), d(o, c), d(o, a), d(a, f), d(e, h);
    },
    p(y, b) {
      b & /*covers*/
      4 && !Wt(i.src, n = /*item*/
      y[11]) && m(i, "src", n), b & /*id, covers*/
      6 && u !== (u = `#pd-cover-slide-${/*id*/
      y[1]}-${/*i*/
      (y[13] - 1 + /*covers*/
      y[2].length) % /*covers*/
      y[2].length}`) && m(l, "href", u), b & /*id, covers*/
      6 && g !== (g = `#pd-cover-slide-${/*id*/
      y[1]}-${/*i*/
      (y[13] + 1) % /*covers*/
      y[2].length}`) && m(a, "href", g), b & /*id*/
      2 && p !== (p = `pd-cover-slide-${/*id*/
      y[1]}-${/*i*/
      y[13]}`) && m(e, "id", p);
    },
    d(y) {
      y && j(e);
    }
  };
}
function po(t) {
  let e, i, n, r, o, l, s, u, c, a, f, g, h, p, y, b, x, v, T, A, L, C = (
    /*icon*/
    t[8] && ai(t)
  ), R = D(
    /*sections*/
    t[4]
  ), P = [];
  for (let _ = 0; _ < R.length; _ += 1)
    P[_] = di(ci(t, R, _));
  const N = (_) => G(P[_], 1, 1, () => {
    P[_] = null;
  });
  let q = D(
    /*buttons*/
    t[5]
  ), W = [];
  for (let _ = 0; _ < q.length; _ += 1)
    W[_] = gi(ui(t, q, _));
  let S = D(
    /*covers*/
    t[2]
  ), U = [];
  for (let _ = 0; _ < S.length; _ += 1)
    U[_] = hi(si(t, S, _));
  return {
    c() {
      e = k("div"), i = k("div"), n = k("div"), r = k("div"), o = k("div"), C && C.c(), l = M(), s = k("h3"), u = B(
        /*title*/
        t[3]
      ), c = M(), a = k("p"), f = B(
        /*description*/
        t[9]
      ), g = M(), h = k("ul");
      for (let _ = 0; _ < P.length; _ += 1)
        P[_].c();
      p = M(), y = k("div");
      for (let _ = 0; _ < W.length; _ += 1)
        W[_].c();
      b = M(), x = k("div"), v = k("div");
      for (let _ = 0; _ < U.length; _ += 1)
        U[_].c();
      m(s, "class", "uikit-text-3xl uikit-font-semibold"), m(a, "class", "uikit-mt-4 uikit-text-md uikit-leading-relaxed uikit-text-slate-500"), m(h, "class", "uikit-list-none uikit-mt-6"), m(o, "class", "md:uikit-pr-12"), m(r, "class", "uikit-w-full md:uikit-w-1/3 uikit-ml-auto uikit-px-12 md:uikit-px-4"), m(v, "class", "uikit-carousel uikit-carousel-center uikit-w-full"), m(x, "class", "uikit-w-full md:uikit-w-2/3 uikit-mr-auto uikit-px-4 uikit-pt-24 md:uikit-pt-0"), m(n, "class", T = Y(
        "uikit-flex uikit-justify-between uikit-w-full",
        /*rtl*/
        t[6] ? "uikit-flex-row-reverse" : ""
      )), m(i, "class", "uikit-items-center uikit-flex uikit-flex-wrap uikit-w-full"), m(e, "class", A = Y(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        t[0]
      ));
    },
    m(_, I) {
      z(_, e, I), d(e, i), d(i, n), d(n, r), d(r, o), C && C.m(o, null), d(o, l), d(o, s), d(s, u), d(o, c), d(o, a), d(a, f), d(o, g), d(o, h);
      for (let w = 0; w < P.length; w += 1)
        P[w] && P[w].m(h, null);
      d(h, p), d(h, y);
      for (let w = 0; w < W.length; w += 1)
        W[w] && W[w].m(y, null);
      d(n, b), d(n, x), d(x, v);
      for (let w = 0; w < U.length; w += 1)
        U[w] && U[w].m(v, null);
      L = !0;
    },
    p(_, [I]) {
      if (/*icon*/
      _[8] ? C ? (C.p(_, I), I & /*icon*/
      256 && E(C, 1)) : (C = ai(_), C.c(), E(C, 1), C.m(o, l)) : C && (it(), G(C, 1, 1, () => {
        C = null;
      }), nt()), (!L || I & /*title*/
      8) && H(
        u,
        /*title*/
        _[3]
      ), (!L || I & /*description*/
      512) && H(
        f,
        /*description*/
        _[9]
      ), I & /*sections*/
      16) {
        R = D(
          /*sections*/
          _[4]
        );
        let w;
        for (w = 0; w < R.length; w += 1) {
          const Z = ci(_, R, w);
          P[w] ? (P[w].p(Z, I), E(P[w], 1)) : (P[w] = di(Z), P[w].c(), E(P[w], 1), P[w].m(h, p));
        }
        for (it(), w = R.length; w < P.length; w += 1)
          N(w);
        nt();
      }
      if (I & /*buttonClick, buttons*/
      160) {
        q = D(
          /*buttons*/
          _[5]
        );
        let w;
        for (w = 0; w < q.length; w += 1) {
          const Z = ui(_, q, w);
          W[w] ? W[w].p(Z, I) : (W[w] = gi(Z), W[w].c(), W[w].m(y, null));
        }
        for (; w < W.length; w += 1)
          W[w].d(1);
        W.length = q.length;
      }
      if (I & /*id, covers*/
      6) {
        S = D(
          /*covers*/
          _[2]
        );
        let w;
        for (w = 0; w < S.length; w += 1) {
          const Z = si(_, S, w);
          U[w] ? U[w].p(Z, I) : (U[w] = hi(Z), U[w].c(), U[w].m(v, null));
        }
        for (; w < U.length; w += 1)
          U[w].d(1);
        U.length = S.length;
      }
      (!L || I & /*rtl*/
      64 && T !== (T = Y(
        "uikit-flex uikit-justify-between uikit-w-full",
        /*rtl*/
        _[6] ? "uikit-flex-row-reverse" : ""
      ))) && m(n, "class", T), (!L || I & /*className*/
      1 && A !== (A = Y(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        _[0]
      ))) && m(e, "class", A);
    },
    i(_) {
      if (!L) {
        E(C);
        for (let I = 0; I < R.length; I += 1)
          E(P[I]);
        L = !0;
      }
    },
    o(_) {
      G(C), P = P.filter(Boolean);
      for (let I = 0; I < P.length; I += 1)
        G(P[I]);
      L = !1;
    },
    d(_) {
      _ && j(e), C && C.d(), tt(P, _), tt(W, _), tt(U, _);
    }
  };
}
function ko(t, e, i) {
  let { class: n = "" } = e, { id: r = "" } = e, { covers: o = [] } = e, { title: l = "" } = e, { icon: s = "" } = e, { description: u = "" } = e, { sections: c = [] } = e, { buttons: a = [] } = e, { rtl: f = !1 } = e, { buttonClick: g = (p) => {
  } } = e;
  const h = (p) => g(p);
  return t.$$set = (p) => {
    "class" in p && i(0, n = p.class), "id" in p && i(1, r = p.id), "covers" in p && i(2, o = p.covers), "title" in p && i(3, l = p.title), "icon" in p && i(8, s = p.icon), "description" in p && i(9, u = p.description), "sections" in p && i(4, c = p.sections), "buttons" in p && i(5, a = p.buttons), "rtl" in p && i(6, f = p.rtl), "buttonClick" in p && i(7, g = p.buttonClick);
  }, [
    n,
    r,
    o,
    l,
    c,
    a,
    f,
    g,
    s,
    u,
    h
  ];
}
class bo extends J {
  constructor(e) {
    super(), K(this, e, ko, po, Q, {
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
const Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: fo,
  Feature: mo,
  Header: uo,
  ProjectDescription: bo
}, Symbol.toStringTag, { value: "Module" }));
function vo(t) {
  let e, i, n, r, o, l;
  return {
    c() {
      e = k("div"), i = k("div"), n = k("span"), r = M(), o = k("button"), l = B(
        /*btnText*/
        t[0]
      ), m(n, "id", "mask-desc"), m(n, "class", "mask-tip-desc svelte-17awz4u"), m(o, "id", "next-step-btn"), m(o, "class", "mask-tip-btn svelte-17awz4u"), m(i, "class", "mask-tip svelte-17awz4u"), st(e, "display", "none");
    },
    m(s, u) {
      z(s, e, u), d(e, i), d(i, n), d(i, r), d(i, o), d(o, l), t[6](i), t[7](e);
    },
    p(s, [u]) {
      u & /*btnText*/
      1 && H(
        l,
        /*btnText*/
        s[0]
      );
    },
    i: V,
    o: V,
    d(s) {
      s && j(e), t[6](null), t[7](null);
    }
  };
}
function wo(t, e, i) {
  let n, r, { gapWidth: o = 5 } = e, { isStart: l } = e, { stepArr: s = [] } = e, { btnText: u = "下一步" } = e;
  const c = (g) => {
    if (g.length === 0) {
      i(1, n.style.display = "none", n);
      return;
    }
    const { id: h, desc: p } = g[0];
    var y = document.getElementById(h), b = y.offsetWidth, x = y.offsetHeight, v = y.offsetLeft, T = y.offsetTop;
    console.log("待镂空元素: ", b, x, v, T);
    var A = document.body.scrollWidth, L = document.body.scrollHeight;
    i(1, n.style.width = A + "px", n), i(1, n.style.height = L + "px", n), i(1, n.style.position = "absolute", n), i(1, n.style.left = 0, n), i(1, n.style.top = 0, n), i(1, n.style.display = "block", n), i(1, n.style.boxSizing = "border-box", n), i(1, n.style.borderColor = "rgba(0, 0, 0, 0.75)", n), i(1, n.style.borderStyle = "solid", n), i(1, n.style.borderLeftWidth = v - o + "px", n), i(1, n.style.borderRightWidth = A - b - v - o + "px", n), i(1, n.style.borderTopWidth = T - o + "px", n), i(1, n.style.borderBottomWidth = L - x - T - o + "px", n), i(2, r.style.top = x + o * 2 + 10 + "px", r), i(2, r.style.left = "50%", r);
    var C = document.getElementById("mask-desc");
    C.innerHTML = p;
    var R = document.getElementById("next-step-btn");
    R.onclick = function() {
      g.shift(), c(g);
    };
  };
  function a(g) {
    ft[g ? "unshift" : "push"](() => {
      r = g, i(2, r);
    });
  }
  function f(g) {
    ft[g ? "unshift" : "push"](() => {
      n = g, i(1, n);
    });
  }
  return t.$$set = (g) => {
    "gapWidth" in g && i(3, o = g.gapWidth), "isStart" in g && i(4, l = g.isStart), "stepArr" in g && i(5, s = g.stepArr), "btnText" in g && i(0, u = g.btnText);
  }, t.$$.update = () => {
    t.$$.dirty & /*isStart, stepArr*/
    48 && l && c(s);
  }, [
    u,
    n,
    r,
    o,
    l,
    s,
    a,
    f
  ];
}
class To extends J {
  constructor(e) {
    super(), K(this, e, wo, vo, Q, {
      gapWidth: 3,
      isStart: 4,
      stepArr: 5,
      btnText: 0
    });
  }
}
export {
  Mo as Layout,
  Io as Modal,
  So as Sidebar,
  To as StepMask,
  Co as confirm,
  xo as notify
};
