var Vi = Object.defineProperty;
var Di = (e, t, i) => t in e ? Vi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var Qt = (e, t, i) => (Di(e, typeof t != "symbol" ? t + "" : t, i), i);
function R() {
}
function Wt(e, t) {
  for (const i in t)
    e[i] = t[i];
  return (
    /** @type {T & S} */
    e
  );
}
function bi(e) {
  return e();
}
function ve() {
  return /* @__PURE__ */ Object.create(null);
}
function vt(e) {
  e.forEach(bi);
}
function Vt(e) {
  return typeof e == "function";
}
function Q(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let Pt;
function bt(e, t) {
  return e === t ? !0 : (Pt || (Pt = document.createElement("a")), Pt.href = t, e === Pt.href);
}
function qi(e) {
  return Object.keys(e).length === 0;
}
function we(e) {
  const t = {};
  for (const i in e)
    i[0] !== "$" && (t[i] = e[i]);
  return t;
}
function g(e, t) {
  e.appendChild(t);
}
function z(e, t, i) {
  e.insertBefore(t, i || null);
}
function L(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function et(e, t) {
  for (let i = 0; i < e.length; i += 1)
    e[i] && e[i].d(t);
}
function m(e) {
  return document.createElement(e);
}
function Ui(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function N(e) {
  return document.createTextNode(e);
}
function S() {
  return N(" ");
}
function wt() {
  return N("");
}
function $(e, t, i, n) {
  return e.addEventListener(t, i, n), () => e.removeEventListener(t, i, n);
}
function k(e, t, i) {
  i == null ? e.removeAttribute(t) : e.getAttribute(t) !== i && e.setAttribute(t, i);
}
const Zi = ["width", "height"];
function ye(e, t) {
  const i = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const n in t)
    t[n] == null ? e.removeAttribute(n) : n === "style" ? e.style.cssText = t[n] : n === "__value" ? e.value = e[n] = t[n] : i[n] && i[n].set && Zi.indexOf(n) === -1 ? e[n] = t[n] : k(e, n, t[n]);
}
function _e(e, t) {
  for (const i in t)
    k(e, i, t[i]);
}
function Qi(e) {
  return Array.from(e.childNodes);
}
function H(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function X(e, t, i, n) {
  i == null ? e.style.removeProperty(t) : e.style.setProperty(t, i, n ? "important" : "");
}
function xe(e, t, i) {
  e.classList.toggle(t, !!i);
}
function Ki(e, t, { bubbles: i = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: i, cancelable: n });
}
let At;
function Tt(e) {
  At = e;
}
function ae() {
  if (!At)
    throw new Error("Function called outside component initialization");
  return At;
}
function gt(e) {
  ae().$$.on_mount.push(e);
}
function Ji(e) {
  ae().$$.on_destroy.push(e);
}
function yt() {
  const e = ae();
  return (t, i, { cancelable: n = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const o = Ki(
        /** @type {string} */
        t,
        i,
        { cancelable: n }
      );
      return r.slice().forEach((l) => {
        l.call(e, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const mt = [], ot = [];
let pt = [];
const Ce = [], Xi = /* @__PURE__ */ Promise.resolve();
let $t = !1;
function Yi() {
  $t || ($t = !0, Xi.then(vi));
}
function te(e) {
  pt.push(e);
}
const Kt = /* @__PURE__ */ new Set();
let kt = 0;
function vi() {
  if (kt !== 0)
    return;
  const e = At;
  do {
    try {
      for (; kt < mt.length; ) {
        const t = mt[kt];
        kt++, Tt(t), $i(t.$$);
      }
    } catch (t) {
      throw mt.length = 0, kt = 0, t;
    }
    for (Tt(null), mt.length = 0, kt = 0; ot.length; )
      ot.pop()();
    for (let t = 0; t < pt.length; t += 1) {
      const i = pt[t];
      Kt.has(i) || (Kt.add(i), i());
    }
    pt.length = 0;
  } while (mt.length);
  for (; Ce.length; )
    Ce.pop()();
  $t = !1, Kt.clear(), Tt(e);
}
function $i(e) {
  if (e.fragment !== null) {
    e.update(), vt(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(te);
  }
}
function tn(e) {
  const t = [], i = [];
  pt.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : i.push(n)), i.forEach((n) => n()), pt = t;
}
const Gt = /* @__PURE__ */ new Set();
let at;
function nt() {
  at = {
    r: 0,
    c: [],
    p: at
    // parent group
  };
}
function rt() {
  at.r || vt(at.c), at = at.p;
}
function O(e, t) {
  e && e.i && (Gt.delete(e), e.i(t));
}
function W(e, t, i, n) {
  if (e && e.o) {
    if (Gt.has(e))
      return;
    Gt.add(e), at.c.push(() => {
      Gt.delete(e), n && (i && e.d(1), n());
    }), e.o(t);
  } else
    n && n();
}
function q(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function wi(e, t) {
  const i = {}, n = {}, r = { $$scope: 1 };
  let o = e.length;
  for (; o--; ) {
    const l = e[o], s = t[o];
    if (s) {
      for (const u in l)
        u in s || (n[u] = 1);
      for (const u in s)
        r[u] || (i[u] = s[u], r[u] = 1);
      e[o] = s;
    } else
      for (const u in l)
        r[u] = 1;
  }
  for (const l in n)
    l in i || (i[l] = void 0);
  return i;
}
function ct(e) {
  e && e.c();
}
function lt(e, t, i) {
  const { fragment: n, after_update: r } = e.$$;
  n && n.m(t, i), te(() => {
    const o = e.$$.on_mount.map(bi).filter(Vt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : vt(o), e.$$.on_mount = [];
  }), r.forEach(te);
}
function st(e, t) {
  const i = e.$$;
  i.fragment !== null && (tn(i.after_update), vt(i.on_destroy), i.fragment && i.fragment.d(t), i.on_destroy = i.fragment = null, i.ctx = []);
}
function en(e, t) {
  e.$$.dirty[0] === -1 && (mt.push(e), Yi(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function K(e, t, i, n, r, o, l, s = [-1]) {
  const u = At;
  Tt(e);
  const a = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: R,
    not_equal: r,
    bound: ve(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: ve(),
    dirty: s,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  l && l(a.root);
  let c = !1;
  if (a.ctx = i ? i(e, t.props || {}, (f, d, ...h) => {
    const p = h.length ? h[0] : d;
    return a.ctx && r(a.ctx[f], a.ctx[f] = p) && (!a.skip_bound && a.bound[f] && a.bound[f](p), c && en(e, f)), d;
  }) : [], a.update(), c = !0, vt(a.before_update), a.fragment = n ? n(a.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = Qi(t.target);
      a.fragment && a.fragment.l(f), f.forEach(L);
    } else
      a.fragment && a.fragment.c();
    t.intro && O(e.$$.fragment), lt(e, t.target, t.anchor), vi();
  }
  Tt(u);
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
    Qt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Qt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    st(this, 1), this.$destroy = R;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, i) {
    if (!Vt(i))
      return R;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(i), () => {
      const r = n.indexOf(i);
      r !== -1 && n.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !qi(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const nn = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(nn);
function rn(e) {
  let t, i, n, r, o, l, s, u, a;
  return {
    c() {
      t = m("div"), i = m("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>', n = S(), r = m("div"), o = m("div"), l = m("span"), l.textContent = "Success", s = S(), u = m("p"), a = N(
        /*msg*/
        e[0]
      ), k(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-emerald-500"), k(l, "class", "uikit-font-semibold uikit-text-emerald-500 dark:uikit-text-emerald-400"), k(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), k(o, "class", "uikit-mx-3"), k(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), k(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      z(c, t, f), g(t, i), g(t, n), g(t, r), g(r, o), g(o, l), g(o, s), g(o, u), g(u, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && H(
        a,
        /*msg*/
        c[0]
      );
    },
    i: R,
    o: R,
    d(c) {
      c && L(t);
    }
  };
}
function on(e, t, i) {
  let { msg: n = "" } = t, { duration: r = 3e3 } = t;
  const o = yt();
  return gt(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), e.$$set = (l) => {
    "msg" in l && i(0, n = l.msg), "duration" in l && i(1, r = l.duration);
  }, [n, r];
}
class ln extends J {
  constructor(t) {
    super(), K(this, t, on, rn, Q, { msg: 0, duration: 1 });
  }
}
function sn(e) {
  let t, i, n, r, o, l, s, u, a;
  return {
    c() {
      t = m("div"), i = m("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', n = S(), r = m("div"), o = m("div"), l = m("span"), l.textContent = "Info", s = S(), u = m("p"), a = N(
        /*msg*/
        e[0]
      ), k(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-blue-500"), k(l, "class", "uikit-font-semibold uikit-text-blue-500 dark:uikit-text-blue-400"), k(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), k(o, "class", "uikit-mx-3"), k(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), k(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      z(c, t, f), g(t, i), g(t, n), g(t, r), g(r, o), g(o, l), g(o, s), g(o, u), g(u, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && H(
        a,
        /*msg*/
        c[0]
      );
    },
    i: R,
    o: R,
    d(c) {
      c && L(t);
    }
  };
}
function un(e, t, i) {
  let { msg: n = "" } = t, { duration: r = 3e3 } = t;
  const o = yt();
  return gt(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), e.$$set = (l) => {
    "msg" in l && i(0, n = l.msg), "duration" in l && i(1, r = l.duration);
  }, [n, r];
}
class Se extends J {
  constructor(t) {
    super(), K(this, t, un, sn, Q, { msg: 0, duration: 1 });
  }
}
function cn(e) {
  let t, i, n, r, o, l, s, u, a;
  return {
    c() {
      t = m("div"), i = m("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', n = S(), r = m("div"), o = m("div"), l = m("span"), l.textContent = "Warning", s = S(), u = m("p"), a = N(
        /*msg*/
        e[0]
      ), k(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-yellow-400"), k(l, "class", "uikit-font-semibold uikit-text-yellow-400 dark:uikit-text-yellow-300"), k(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), k(o, "class", "uikit-mx-3"), k(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), k(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      z(c, t, f), g(t, i), g(t, n), g(t, r), g(r, o), g(o, l), g(o, s), g(o, u), g(u, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && H(
        a,
        /*msg*/
        c[0]
      );
    },
    i: R,
    o: R,
    d(c) {
      c && L(t);
    }
  };
}
function an(e, t, i) {
  let { msg: n = "" } = t, { duration: r = 3e3 } = t;
  const o = yt();
  return gt(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), e.$$set = (l) => {
    "msg" in l && i(0, n = l.msg), "duration" in l && i(1, r = l.duration);
  }, [n, r];
}
class fn extends J {
  constructor(t) {
    super(), K(this, t, an, cn, Q, { msg: 0, duration: 1 });
  }
}
function dn(e) {
  let t, i, n, r, o, l, s, u, a;
  return {
    c() {
      t = m("div"), i = m("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>', n = S(), r = m("div"), o = m("div"), l = m("span"), l.textContent = "Error", s = S(), u = m("p"), a = N(
        /*msg*/
        e[0]
      ), k(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-red-500"), k(l, "class", "uikit-font-semibold uikit-text-red-500 dark:uikit-text-red-400"), k(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), k(o, "class", "uikit-mx-3"), k(r, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), k(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, f) {
      z(c, t, f), g(t, i), g(t, n), g(t, r), g(r, o), g(o, l), g(o, s), g(o, u), g(u, a);
    },
    p(c, [f]) {
      f & /*msg*/
      1 && H(
        a,
        /*msg*/
        c[0]
      );
    },
    i: R,
    o: R,
    d(c) {
      c && L(t);
    }
  };
}
function gn(e, t, i) {
  let { msg: n = "" } = t, { duration: r = 3e3 } = t;
  const o = yt();
  return gt(() => {
    setTimeout(
      () => {
        o("onEnd");
      },
      r
    );
  }), e.$$set = (l) => {
    "msg" in l && i(0, n = l.msg), "duration" in l && i(1, r = l.duration);
  }, [n, r];
}
let hn = class extends J {
  constructor(t) {
    super(), K(this, t, gn, dn, Q, { msg: 0, duration: 1 });
  }
};
const Ie = "uikit_msg_panel";
let Jt = 0;
const jo = (e) => {
  Jt += 1;
  let t = window.document.getElementById(Ie);
  t || (t = window.document.createElement("div"), t.id = Ie, t.style.position = "absolute", t.style.top = "5px", t.style.right = "5px", t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "10px", t.style.zIndex = "100", document.body.appendChild(t));
  const i = window.document.createElement("div");
  t.appendChild(i);
  let n;
  switch (e.type) {
    case "success":
      n = new ln({
        target: i,
        props: {
          ...e
        }
      });
      break;
    case "info":
      n = new Se({
        target: i,
        props: {
          ...e
        }
      });
      break;
    case "warn":
      n = new fn({
        target: i,
        props: {
          ...e
        }
      });
      break;
    case "error":
      n = new hn({
        target: i,
        props: {
          ...e
        }
      });
      break;
    default:
      n = new Se({
        target: i,
        props: {
          ...e
        }
      });
      break;
  }
  return n.$on("onEnd", () => {
    n.$destroy(), Jt -= 1, Jt == 0 && document.body.removeChild(t);
  }), n;
}, Ot = (e) => Object.entries(e).map(([t, i]) => `${t}: ${i};`).join(" ");
function kn(e) {
  let t, i, n, r, o, l, s, u, a, c, f, d, h, p, _, b, w, v, I, T;
  return {
    c() {
      t = m("div"), i = m("div"), n = m("div"), r = m("div"), o = N(
        /*title*/
        e[0]
      ), l = S(), s = m("div"), u = m("div"), a = N(
        /*content*/
        e[1]
      ), c = S(), f = m("div"), d = m("div"), h = N(
        /*cancelText*/
        e[2]
      ), _ = S(), b = m("div"), w = N(
        /*okText*/
        e[3]
      ), k(r, "class", "modal-title svelte-f901x2"), k(s, "class", "content svelte-f901x2"), k(n, "class", "modal-content-body svelte-f901x2"), k(d, "class", "btn button-left centerLayout svelte-f901x2"), k(d, "style", p = Ot(
        /*cancelBtnStyle*/
        e[4]
      )), k(b, "class", "btn button-right centerLayout svelte-f901x2"), k(b, "style", v = Ot(
        /*okBtnStyle*/
        e[5]
      )), k(f, "class", "confirm-button-wrap svelte-f901x2"), k(i, "class", "confirm-modal-content svelte-f901x2"), k(t, "class", "confirm-modal svelte-f901x2");
    },
    m(A, C) {
      z(A, t, C), g(t, i), g(i, n), g(n, r), g(r, o), g(n, l), g(n, s), g(s, u), g(u, a), g(i, c), g(i, f), g(f, d), g(d, h), g(f, _), g(f, b), g(b, w), e[11](t), I || (T = [
        $(
          d,
          "click",
          /*onCancelClk*/
          e[8]
        ),
        $(
          b,
          "click",
          /*onOkClk*/
          e[7]
        )
      ], I = !0);
    },
    p(A, [C]) {
      C & /*title*/
      1 && H(
        o,
        /*title*/
        A[0]
      ), C & /*content*/
      2 && H(
        a,
        /*content*/
        A[1]
      ), C & /*cancelText*/
      4 && H(
        h,
        /*cancelText*/
        A[2]
      ), C & /*cancelBtnStyle*/
      16 && p !== (p = Ot(
        /*cancelBtnStyle*/
        A[4]
      )) && k(d, "style", p), C & /*okText*/
      8 && H(
        w,
        /*okText*/
        A[3]
      ), C & /*okBtnStyle*/
      32 && v !== (v = Ot(
        /*okBtnStyle*/
        A[5]
      )) && k(b, "style", v);
    },
    i: R,
    o: R,
    d(A) {
      A && L(t), e[11](null), I = !1, vt(T);
    }
  };
}
function mn(e, t, i) {
  let { title: n = "" } = t, { content: r = "" } = t, { cancelText: o = "取消" } = t, { okText: l = "确定" } = t, { onCancel: s = () => {
  } } = t, { onOk: u = () => {
  } } = t, { cancelBtnStyle: a = "" } = t, { okBtnStyle: c = "" } = t;
  const f = yt();
  let d;
  const h = () => {
    u(), f("onOk");
  }, p = () => {
    s(), f("onCancel");
  };
  function _(b) {
    ot[b ? "unshift" : "push"](() => {
      d = b, i(6, d);
    });
  }
  return e.$$set = (b) => {
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
    _
  ];
}
class pn extends J {
  constructor(t) {
    super(), K(this, t, mn, kn, Q, {
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
const zo = (e) => {
  const t = window.document.createElement("div");
  document.body.appendChild(t);
  const i = new pn({
    target: t,
    props: {
      ...e
    }
  });
  return i.$on("onOk", () => {
    i.$destroy();
  }), i.$on("onCancel", () => {
    i.$destroy();
  }), i;
};
function yi(e) {
  var t, i, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (i = yi(e[t])) && (n && (n += " "), n += i);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function bn() {
  for (var e, t, i = 0, n = ""; i < arguments.length; )
    (e = arguments[i++]) && (t = yi(e)) && (n && (n += " "), n += t);
  return n;
}
function vn() {
  for (var e = 0, t, i, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (i = _i(t)) && (n && (n += " "), n += i);
  return n;
}
function _i(e) {
  if (typeof e == "string")
    return e;
  for (var t, i = "", n = 0; n < e.length; n++)
    e[n] && (t = _i(e[n])) && (i && (i += " "), i += t);
  return i;
}
var fe = "-";
function wn(e) {
  var t = _n(e), i = e.conflictingClassGroups, n = e.conflictingClassGroupModifiers, r = n === void 0 ? {} : n;
  function o(s) {
    var u = s.split(fe);
    return u[0] === "" && u.length !== 1 && u.shift(), xi(u, t) || yn(s);
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
function xi(e, t) {
  var l;
  if (e.length === 0)
    return t.classGroupId;
  var i = e[0], n = t.nextPart.get(i), r = n ? xi(e.slice(1), n) : void 0;
  if (r)
    return r;
  if (t.validators.length !== 0) {
    var o = e.join(fe);
    return (l = t.validators.find(function(s) {
      var u = s.validator;
      return u(o);
    })) == null ? void 0 : l.classGroupId;
  }
}
var Me = /^\[(.+)\]$/;
function yn(e) {
  if (Me.test(e)) {
    var t = Me.exec(e)[1], i = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}
function _n(e) {
  var t = e.theme, i = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, r = Cn(Object.entries(e.classGroups), i);
  return r.forEach(function(o) {
    var l = o[0], s = o[1];
    ee(s, n, l, t);
  }), n;
}
function ee(e, t, i, n) {
  e.forEach(function(r) {
    if (typeof r == "string") {
      var o = r === "" ? t : Te(t, r);
      o.classGroupId = i;
      return;
    }
    if (typeof r == "function") {
      if (xn(r)) {
        ee(r(n), t, i, n);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: i
      });
      return;
    }
    Object.entries(r).forEach(function(l) {
      var s = l[0], u = l[1];
      ee(u, Te(t, s), i, n);
    });
  });
}
function Te(e, t) {
  var i = e;
  return t.split(fe).forEach(function(n) {
    i.nextPart.has(n) || i.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(n);
  }), i;
}
function xn(e) {
  return e.isThemeGetter;
}
function Cn(e, t) {
  return t ? e.map(function(i) {
    var n = i[0], r = i[1], o = r.map(function(l) {
      return typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(s) {
        var u = s[0], a = s[1];
        return [t + u, a];
      })) : l;
    });
    return [n, o];
  }) : e;
}
function Sn(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function r(o, l) {
    i.set(o, l), t++, t > e && (t = 0, n = i, i = /* @__PURE__ */ new Map());
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
function In(e) {
  var t = e.separator || ":", i = t.length === 1, n = t[0], r = t.length;
  return function(l) {
    for (var s = [], u = 0, a = 0, c, f = 0; f < l.length; f++) {
      var d = l[f];
      if (u === 0) {
        if (d === n && (i || l.slice(f, f + r) === t)) {
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
    var h = s.length === 0 ? l : l.substring(a), p = h.startsWith(Ci), _ = p ? h.substring(1) : h, b = c && c > a ? c - a : void 0;
    return {
      modifiers: s,
      hasImportantModifier: p,
      baseClassName: _,
      maybePostfixModifierPosition: b
    };
  };
}
function Mn(e) {
  if (e.length <= 1)
    return e;
  var t = [], i = [];
  return e.forEach(function(n) {
    var r = n[0] === "[";
    r ? (t.push.apply(t, i.sort().concat([n])), i = []) : i.push(n);
  }), t.push.apply(t, i.sort()), t;
}
function Tn(e) {
  return {
    cache: Sn(e.cacheSize),
    splitModifiers: In(e),
    ...wn(e)
  };
}
var En = /\s+/;
function An(e, t) {
  var i = t.splitModifiers, n = t.getClassGroupId, r = t.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return e.trim().split(En).map(function(l) {
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
    var p = Mn(u).join(":"), _ = a ? p + Ci : p;
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
    var s = l.modifierId, u = l.classGroupId, a = l.hasPostfixModifier, c = s + u;
    return o.has(c) ? !1 : (o.add(c), r(u, a).forEach(function(f) {
      return o.add(s + f);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function Ln() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  var n, r, o, l = s;
  function s(a) {
    var c = t[0], f = t.slice(1), d = f.reduce(function(h, p) {
      return p(h);
    }, c());
    return n = Tn(d), r = n.cache.get, o = n.cache.set, l = u, u(a);
  }
  function u(a) {
    var c = r(a);
    if (c)
      return c;
    var f = An(a, n);
    return o(a, f), f;
  }
  return function() {
    return l(vn.apply(null, arguments));
  };
}
function D(e) {
  var t = function(n) {
    return n[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Si = /^\[(?:([a-z-]+):)?(.+)\]$/i, jn = /^\d+\/\d+$/, zn = /* @__PURE__ */ new Set(["px", "full", "screen"]), Pn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, On = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Nn = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function it(e) {
  return ft(e) || zn.has(e) || jn.test(e) || ie(e);
}
function ie(e) {
  return ht(e, "length", Fn);
}
function Bn(e) {
  return ht(e, "size", Ii);
}
function Gn(e) {
  return ht(e, "position", Ii);
}
function Hn(e) {
  return ht(e, "url", Vn);
}
function Nt(e) {
  return ht(e, "number", ft);
}
function ft(e) {
  return !Number.isNaN(Number(e));
}
function Rn(e) {
  return e.endsWith("%") && ft(e.slice(0, -1));
}
function St(e) {
  return Ee(e) || ht(e, "number", Ee);
}
function B(e) {
  return Si.test(e);
}
function It() {
  return !0;
}
function ut(e) {
  return Pn.test(e);
}
function Wn(e) {
  return ht(e, "", Dn);
}
function ht(e, t, i) {
  var n = Si.exec(e);
  return n ? n[1] ? n[1] === t : i(n[2]) : !1;
}
function Fn(e) {
  return On.test(e);
}
function Ii() {
  return !1;
}
function Vn(e) {
  return e.startsWith("url(");
}
function Ee(e) {
  return Number.isInteger(Number(e));
}
function Dn(e) {
  return Nn.test(e);
}
function qn() {
  var e = D("colors"), t = D("spacing"), i = D("blur"), n = D("brightness"), r = D("borderColor"), o = D("borderRadius"), l = D("borderSpacing"), s = D("borderWidth"), u = D("contrast"), a = D("grayscale"), c = D("hueRotate"), f = D("invert"), d = D("gap"), h = D("gradientColorStops"), p = D("gradientColorStopPositions"), _ = D("inset"), b = D("margin"), w = D("opacity"), v = D("padding"), I = D("saturate"), T = D("scale"), A = D("sepia"), C = D("skew"), G = D("space"), j = D("translate"), P = function() {
    return ["auto", "contain", "none"];
  }, F = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, V = function() {
    return ["auto", B, t];
  }, M = function() {
    return [B, t];
  }, U = function() {
    return ["", it];
  }, x = function() {
    return ["auto", ft, B];
  }, E = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, y = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, Z = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Zt = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, xt = function() {
    return ["", "0", B];
  }, be = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Ct = function() {
    return [ft, Nt];
  }, zt = function() {
    return [ft, B];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [It],
      spacing: [it],
      blur: ["none", "", ut, B],
      brightness: Ct(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ut, B],
      borderSpacing: M(),
      borderWidth: U(),
      contrast: Ct(),
      grayscale: xt(),
      hueRotate: zt(),
      invert: xt(),
      gap: M(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Rn, ie],
      inset: V(),
      margin: V(),
      opacity: Ct(),
      padding: M(),
      saturate: Ct(),
      scale: Ct(),
      sepia: xt(),
      skew: zt(),
      space: M(),
      translate: M()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", B]
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
        columns: [ut]
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
        object: [].concat(E(), [B])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: F()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": F()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": F()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
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
        z: ["auto", St]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: V()
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
        flex: ["1", "auto", "initial", "none", B]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: xt()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: xt()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", St]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [It]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", St]
        }, B]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": x()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": x()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [It]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [St]
        }, B]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": x()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": x()
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
        "auto-cols": ["auto", "min", "max", "fr", B]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", B]
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
        justify: ["normal"].concat(Zt())
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
        content: ["normal"].concat(Zt(), ["baseline"])
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
        "place-content": [].concat(Zt(), ["baseline"])
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
        "space-x": [G]
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
        "space-y": [G]
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
        w: ["auto", "min", "max", "fit", B, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", B, it]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ut]
        }, ut, B]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [B, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", B, it]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [B, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ut, ie]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Nt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [It]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", B]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ft, Nt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", B, it]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", B]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", B]
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
        text: [e]
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
        decoration: ["auto", "from-font", it]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", B, it]
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
        indent: M()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", B]
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
        content: ["none", B]
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
        bg: [].concat(E(), [Gn])
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
        "outline-offset": [B, it]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [it]
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
        ring: [e]
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
        "ring-offset": [it]
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
        shadow: ["", "inner", "none", ut, Wn]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [It]
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
        "drop-shadow": ["", "none", ut, B]
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
        saturate: [I]
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
        "backdrop-saturate": [I]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", B]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: zt()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", B]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: zt()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", B]
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
        scale: [T]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [T]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [T]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [St, B]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [j]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [j]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", B]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", B]
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
        "scroll-m": M()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": M()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": M()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": M()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": M()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": M()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": M()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": M()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": M()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": M()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": M()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": M()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": M()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": M()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": M()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": M()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": M()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": M()
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
        "will-change": ["auto", "scroll", "contents", "transform", B]
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
        stroke: [it, Nt]
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
var Un = /* @__PURE__ */ Ln(qn);
function tt(...e) {
  return Un(bn(e));
}
const Et = /^[a-z0-9]+(-[a-z0-9]+)*$/, Dt = (e, t, i, n = "") => {
  const r = e.split(":");
  if (e.slice(0, 1) === "@") {
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
    return t && !Ht(a) ? null : a;
  }
  const o = r[0], l = o.split("-");
  if (l.length > 1) {
    const s = {
      provider: n,
      prefix: l.shift(),
      name: l.join("-")
    };
    return t && !Ht(s) ? null : s;
  }
  if (i && n === "") {
    const s = {
      provider: n,
      prefix: "",
      name: o
    };
    return t && !Ht(s, i) ? null : s;
  }
  return null;
}, Ht = (e, t) => e ? !!((e.provider === "" || e.provider.match(Et)) && (t && e.prefix === "" || e.prefix.match(Et)) && e.name.match(Et)) : !1, Mi = Object.freeze(
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
}), qt = Object.freeze({
  ...Mi,
  ...Ft
}), ne = Object.freeze({
  ...qt,
  body: "",
  hidden: !1
});
function Zn(e, t) {
  const i = {};
  !e.hFlip != !t.hFlip && (i.hFlip = !0), !e.vFlip != !t.vFlip && (i.vFlip = !0);
  const n = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return n && (i.rotate = n), i;
}
function Ae(e, t) {
  const i = Zn(e, t);
  for (const n in ne)
    n in Ft ? n in e && !(n in i) && (i[n] = Ft[n]) : n in t ? i[n] = t[n] : n in e && (i[n] = e[n]);
  return i;
}
function Qn(e, t) {
  const i = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
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
  return (t || Object.keys(i).concat(Object.keys(n))).forEach(o), r;
}
function Kn(e, t, i) {
  const n = e.icons, r = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function l(s) {
    o = Ae(
      n[s] || r[s],
      o
    );
  }
  return l(t), i.forEach(l), Ae(e, o);
}
function Ti(e, t) {
  const i = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return i;
  e.not_found instanceof Array && e.not_found.forEach((r) => {
    t(r, null), i.push(r);
  });
  const n = Qn(e);
  for (const r in n) {
    const o = n[r];
    o && (t(r, Kn(e, r, o)), i.push(r));
  }
  return i;
}
const Jn = {
  provider: "",
  aliases: {},
  not_found: {},
  ...Mi
};
function Xt(e, t) {
  for (const i in t)
    if (i in e && typeof e[i] != typeof t[i])
      return !1;
  return !0;
}
function Ei(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !Xt(e, Jn))
    return null;
  const i = t.icons;
  for (const r in i) {
    const o = i[r];
    if (!r.match(Et) || typeof o.body != "string" || !Xt(
      o,
      ne
    ))
      return null;
  }
  const n = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const r in n) {
    const o = n[r], l = o.parent;
    if (!r.match(Et) || typeof l != "string" || !i[l] && !n[l] || !Xt(
      o,
      ne
    ))
      return null;
  }
  return t;
}
const Le = /* @__PURE__ */ Object.create(null);
function Xn(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function dt(e, t) {
  const i = Le[e] || (Le[e] = /* @__PURE__ */ Object.create(null));
  return i[t] || (i[t] = Xn(e, t));
}
function de(e, t) {
  return Ei(t) ? Ti(t, (i, n) => {
    n ? e.icons[i] = n : e.missing.add(i);
  }) : [];
}
function Yn(e, t, i) {
  try {
    if (typeof i.body == "string")
      return e.icons[t] = { ...i }, !0;
  } catch {
  }
  return !1;
}
let Lt = !1;
function Ai(e) {
  return typeof e == "boolean" && (Lt = e), Lt;
}
function $n(e) {
  const t = typeof e == "string" ? Dt(e, !0, Lt) : e;
  if (t) {
    const i = dt(t.provider, t.prefix), n = t.name;
    return i.icons[n] || (i.missing.has(n) ? null : void 0);
  }
}
function tr(e, t) {
  const i = Dt(e, !0, Lt);
  if (!i)
    return !1;
  const n = dt(i.provider, i.prefix);
  return Yn(n, i.name, t);
}
function er(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Lt && !t && !e.prefix) {
    let r = !1;
    return Ei(e) && (e.prefix = "", Ti(e, (o, l) => {
      l && tr(o, l) && (r = !0);
    })), r;
  }
  const i = e.prefix;
  if (!Ht({
    provider: t,
    prefix: i,
    name: "a"
  }))
    return !1;
  const n = dt(t, i);
  return !!de(n, e);
}
const Li = Object.freeze({
  width: null,
  height: null
}), ji = Object.freeze({
  // Dimensions
  ...Li,
  // Transformations
  ...Ft
}), ir = /(-?[0-9.]*[0-9]+[0-9.]*)/g, nr = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function je(e, t, i) {
  if (t === 1)
    return e;
  if (i = i || 100, typeof e == "number")
    return Math.ceil(e * t * i) / i;
  if (typeof e != "string")
    return e;
  const n = e.split(ir);
  if (n === null || !n.length)
    return e;
  const r = [];
  let o = n.shift(), l = nr.test(o);
  for (; ; ) {
    if (l) {
      const s = parseFloat(o);
      isNaN(s) ? r.push(o) : r.push(Math.ceil(s * t * i) / i);
    } else
      r.push(o);
    if (o = n.shift(), o === void 0)
      return r.join("");
    l = !l;
  }
}
const rr = (e) => e === "unset" || e === "undefined" || e === "none";
function or(e, t) {
  const i = {
    ...qt,
    ...e
  }, n = {
    ...ji,
    ...t
  }, r = {
    left: i.left,
    top: i.top,
    width: i.width,
    height: i.height
  };
  let o = i.body;
  [i, n].forEach((p) => {
    const _ = [], b = p.hFlip, w = p.vFlip;
    let v = p.rotate;
    b ? w ? v += 2 : (_.push(
      "translate(" + (r.width + r.left).toString() + " " + (0 - r.top).toString() + ")"
    ), _.push("scale(-1 1)"), r.top = r.left = 0) : w && (_.push(
      "translate(" + (0 - r.left).toString() + " " + (r.height + r.top).toString() + ")"
    ), _.push("scale(1 -1)"), r.top = r.left = 0);
    let I;
    switch (v < 0 && (v -= Math.floor(v / 4) * 4), v = v % 4, v) {
      case 1:
        I = r.height / 2 + r.top, _.unshift(
          "rotate(90 " + I.toString() + " " + I.toString() + ")"
        );
        break;
      case 2:
        _.unshift(
          "rotate(180 " + (r.width / 2 + r.left).toString() + " " + (r.height / 2 + r.top).toString() + ")"
        );
        break;
      case 3:
        I = r.width / 2 + r.left, _.unshift(
          "rotate(-90 " + I.toString() + " " + I.toString() + ")"
        );
        break;
    }
    v % 2 === 1 && (r.left !== r.top && (I = r.left, r.left = r.top, r.top = I), r.width !== r.height && (I = r.width, r.width = r.height, r.height = I)), _.length && (o = '<g transform="' + _.join(" ") + '">' + o + "</g>");
  });
  const l = n.width, s = n.height, u = r.width, a = r.height;
  let c, f;
  l === null ? (f = s === null ? "1em" : s === "auto" ? a : s, c = je(f, u / a)) : (c = l === "auto" ? u : l, f = s === null ? je(c, a / u) : s === "auto" ? a : s);
  const d = {}, h = (p, _) => {
    rr(_) || (d[p] = _.toString());
  };
  return h("width", c), h("height", f), d.viewBox = r.left.toString() + " " + r.top.toString() + " " + u.toString() + " " + a.toString(), {
    attributes: d,
    body: o
  };
}
const lr = /\sid="(\S+)"/g, sr = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let ur = 0;
function cr(e, t = sr) {
  const i = [];
  let n;
  for (; n = lr.exec(e); )
    i.push(n[1]);
  if (!i.length)
    return e;
  const r = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return i.forEach((o) => {
    const l = typeof t == "function" ? t(o) : t + (ur++).toString(), s = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
      "$1" + l + r + "$3"
    );
  }), e = e.replace(new RegExp(r, "g"), ""), e;
}
const re = /* @__PURE__ */ Object.create(null);
function ar(e, t) {
  re[e] = t;
}
function oe(e) {
  return re[e] || re[""];
}
function ge(e) {
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
const he = /* @__PURE__ */ Object.create(null), Mt = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], Rt = [];
for (; Mt.length > 0; )
  Mt.length === 1 || Math.random() > 0.5 ? Rt.push(Mt.shift()) : Rt.push(Mt.pop());
he[""] = ge({
  resources: ["https://api.iconify.design"].concat(Rt)
});
function fr(e, t) {
  const i = ge(t);
  return i === null ? !1 : (he[e] = i, !0);
}
function ke(e) {
  return he[e];
}
const dr = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let ze = dr();
function gr(e, t) {
  const i = ke(e);
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
    const o = t + ".json?icons=";
    n = i.maxURL - r - i.path.length - o.length;
  }
  return n;
}
function hr(e) {
  return e === 404;
}
const kr = (e, t, i) => {
  const n = [], r = gr(e, t), o = "icons";
  let l = {
    type: o,
    provider: e,
    prefix: t,
    icons: []
  }, s = 0;
  return i.forEach((u, a) => {
    s += u.length + 1, s >= r && a > 0 && (n.push(l), l = {
      type: o,
      provider: e,
      prefix: t,
      icons: []
    }, s = u.length), l.icons.push(u);
  }), n.push(l), n;
};
function mr(e) {
  if (typeof e == "string") {
    const t = ke(e);
    if (t)
      return t.path;
  }
  return "/";
}
const pr = (e, t, i) => {
  if (!ze) {
    i("abort", 424);
    return;
  }
  let n = mr(t.provider);
  switch (t.type) {
    case "icons": {
      const o = t.prefix, s = t.icons.join(","), u = new URLSearchParams({
        icons: s
      });
      n += o + ".json?" + u.toString();
      break;
    }
    case "custom": {
      const o = t.uri;
      n += o.slice(0, 1) === "/" ? o.slice(1) : o;
      break;
    }
    default:
      i("abort", 400);
      return;
  }
  let r = 503;
  ze(e + n).then((o) => {
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
  prepare: kr,
  send: pr
};
function vr(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, i = /* @__PURE__ */ Object.create(null);
  e.sort((r, o) => r.provider !== o.provider ? r.provider.localeCompare(o.provider) : r.prefix !== o.prefix ? r.prefix.localeCompare(o.prefix) : r.name.localeCompare(o.name));
  let n = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((r) => {
    if (n.name === r.name && n.prefix === r.prefix && n.provider === r.provider)
      return;
    n = r;
    const o = r.provider, l = r.prefix, s = r.name, u = i[o] || (i[o] = /* @__PURE__ */ Object.create(null)), a = u[l] || (u[l] = dt(o, l));
    let c;
    s in a.icons ? c = t.loaded : l === "" || a.missing.has(s) ? c = t.missing : c = t.pending;
    const f = {
      provider: o,
      prefix: l,
      name: s
    };
    c.push(f);
  }), t;
}
function zi(e, t) {
  e.forEach((i) => {
    const n = i.loaderCallbacks;
    n && (i.loaderCallbacks = n.filter((r) => r.id !== t));
  });
}
function wr(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let i = !1;
    const n = e.provider, r = e.prefix;
    t.forEach((o) => {
      const l = o.icons, s = l.pending.length;
      l.pending = l.pending.filter((u) => {
        if (u.prefix !== r)
          return !0;
        const a = u.name;
        if (e.icons[a])
          l.loaded.push({
            provider: n,
            prefix: r,
            name: a
          });
        else if (e.missing.has(a))
          l.missing.push({
            provider: n,
            prefix: r,
            name: a
          });
        else
          return i = !0, !0;
        return !1;
      }), l.pending.length !== s && (i || zi([e], o.id), o.callback(
        l.loaded.slice(0),
        l.missing.slice(0),
        l.pending.slice(0),
        o.abort
      ));
    });
  }));
}
let yr = 0;
function _r(e, t, i) {
  const n = yr++, r = zi.bind(null, i, n);
  if (!t.pending.length)
    return r;
  const o = {
    id: n,
    icons: t,
    callback: e,
    abort: r
  };
  return i.forEach((l) => {
    (l.loaderCallbacks || (l.loaderCallbacks = [])).push(o);
  }), r;
}
function xr(e, t = !0, i = !1) {
  const n = [];
  return e.forEach((r) => {
    const o = typeof r == "string" ? Dt(r, t, i) : r;
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
function Sr(e, t, i, n) {
  const r = e.resources.length, o = e.random ? Math.floor(Math.random() * r) : e.index;
  let l;
  if (e.random) {
    let C = e.resources.slice(0);
    for (l = []; C.length > 1; ) {
      const G = Math.floor(Math.random() * C.length);
      l.push(C[G]), C = C.slice(0, G).concat(C.slice(G + 1));
    }
    l = l.concat(C);
  } else
    l = e.resources.slice(o).concat(e.resources.slice(0, o));
  const s = Date.now();
  let u = "pending", a = 0, c, f = null, d = [], h = [];
  typeof n == "function" && h.push(n);
  function p() {
    f && (clearTimeout(f), f = null);
  }
  function _() {
    u === "pending" && (u = "aborted"), p(), d.forEach((C) => {
      C.status === "pending" && (C.status = "aborted");
    }), d = [];
  }
  function b(C, G) {
    G && (h = []), typeof C == "function" && h.push(C);
  }
  function w() {
    return {
      startTime: s,
      payload: t,
      status: u,
      queriesSent: a,
      queriesPending: d.length,
      subscribe: b,
      abort: _
    };
  }
  function v() {
    u = "failed", h.forEach((C) => {
      C(void 0, c);
    });
  }
  function I() {
    d.forEach((C) => {
      C.status === "pending" && (C.status = "aborted");
    }), d = [];
  }
  function T(C, G, j) {
    const P = G !== "success";
    switch (d = d.filter((F) => F !== C), u) {
      case "pending":
        break;
      case "failed":
        if (P || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (G === "abort") {
      c = j, v();
      return;
    }
    if (P) {
      c = j, d.length || (l.length ? A() : v());
      return;
    }
    if (p(), I(), !e.random) {
      const F = e.resources.indexOf(C.resource);
      F !== -1 && F !== e.index && (e.index = F);
    }
    u = "completed", h.forEach((F) => {
      F(j);
    });
  }
  function A() {
    if (u !== "pending")
      return;
    p();
    const C = l.shift();
    if (C === void 0) {
      if (d.length) {
        f = setTimeout(() => {
          p(), u === "pending" && (I(), v());
        }, e.timeout);
        return;
      }
      v();
      return;
    }
    const G = {
      status: "pending",
      resource: C,
      callback: (j, P) => {
        T(G, j, P);
      }
    };
    d.push(G), a++, f = setTimeout(A, e.rotate), i(C, t, G.callback);
  }
  return setTimeout(A), w;
}
function Pi(e) {
  const t = {
    ...Cr,
    ...e
  };
  let i = [];
  function n() {
    i = i.filter((s) => s().status === "pending");
  }
  function r(s, u, a) {
    const c = Sr(
      t,
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
      t.index = s;
    },
    getIndex: () => t.index,
    cleanup: n
  };
}
function Pe() {
}
const Yt = /* @__PURE__ */ Object.create(null);
function Ir(e) {
  if (!Yt[e]) {
    const t = ke(e);
    if (!t)
      return;
    const i = Pi(t), n = {
      config: t,
      redundancy: i
    };
    Yt[e] = n;
  }
  return Yt[e];
}
function Mr(e, t, i) {
  let n, r;
  if (typeof e == "string") {
    const o = oe(e);
    if (!o)
      return i(void 0, 424), Pe;
    r = o.send;
    const l = Ir(e);
    l && (n = l.redundancy);
  } else {
    const o = ge(e);
    if (o) {
      n = Pi(o);
      const l = e.resources ? e.resources[0] : "", s = oe(l);
      s && (r = s.send);
    }
  }
  return !n || !r ? (i(void 0, 424), Pe) : n.query(t, r, i)().abort;
}
const Oe = "iconify2", jt = "iconify", Oi = jt + "-count", Ne = jt + "-version", Ni = 36e5, Tr = 168;
function le(e, t) {
  try {
    return e.getItem(t);
  } catch {
  }
}
function me(e, t, i) {
  try {
    return e.setItem(t, i), !0;
  } catch {
  }
}
function Be(e, t) {
  try {
    e.removeItem(t);
  } catch {
  }
}
function se(e, t) {
  return me(e, Oi, t.toString());
}
function ue(e) {
  return parseInt(le(e, Oi)) || 0;
}
const Ut = {
  local: !0,
  session: !0
}, Bi = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let pe = !1;
function Er(e) {
  pe = e;
}
let Bt = typeof window > "u" ? {} : window;
function Gi(e) {
  const t = e + "Storage";
  try {
    if (Bt && Bt[t] && typeof Bt[t].length == "number")
      return Bt[t];
  } catch {
  }
  Ut[e] = !1;
}
function Hi(e, t) {
  const i = Gi(e);
  if (!i)
    return;
  const n = le(i, Ne);
  if (n !== Oe) {
    if (n) {
      const s = ue(i);
      for (let u = 0; u < s; u++)
        Be(i, jt + u.toString());
    }
    me(i, Ne, Oe), se(i, 0);
    return;
  }
  const r = Math.floor(Date.now() / Ni) - Tr, o = (s) => {
    const u = jt + s.toString(), a = le(i, u);
    if (typeof a == "string") {
      try {
        const c = JSON.parse(a);
        if (typeof c == "object" && typeof c.cached == "number" && c.cached > r && typeof c.provider == "string" && typeof c.data == "object" && typeof c.data.prefix == "string" && // Valid item: run callback
        t(c, s))
          return !0;
      } catch {
      }
      Be(i, u);
    }
  };
  let l = ue(i);
  for (let s = l - 1; s >= 0; s--)
    o(s) || (s === l - 1 ? (l--, se(i, l)) : Bi[e].add(s));
}
function Ri() {
  if (!pe) {
    Er(!0);
    for (const e in Ut)
      Hi(e, (t) => {
        const i = t.data, n = t.provider, r = i.prefix, o = dt(
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
function Ar(e, t) {
  const i = e.lastModifiedCached;
  if (
    // Matches or newer
    i && i >= t
  )
    return i === t;
  if (e.lastModifiedCached = t, i)
    for (const n in Ut)
      Hi(n, (r) => {
        const o = r.data;
        return r.provider !== e.provider || o.prefix !== e.prefix || o.lastModified === t;
      });
  return !0;
}
function Lr(e, t) {
  pe || Ri();
  function i(n) {
    let r;
    if (!Ut[n] || !(r = Gi(n)))
      return;
    const o = Bi[n];
    let l;
    if (o.size)
      o.delete(l = Array.from(o).shift());
    else if (l = ue(r), !se(r, l + 1))
      return;
    const s = {
      cached: Math.floor(Date.now() / Ni),
      provider: e.provider,
      data: t
    };
    return me(
      r,
      jt + l.toString(),
      JSON.stringify(s)
    );
  }
  t.lastModified && !Ar(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), i("local") || i("session"));
}
function Ge() {
}
function jr(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, wr(e);
  }));
}
function zr(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: i, prefix: n } = e, r = e.iconsToLoad;
    delete e.iconsToLoad;
    let o;
    if (!r || !(o = oe(i)))
      return;
    o.prepare(i, n, r).forEach((s) => {
      Mr(i, s, (u) => {
        if (typeof u != "object")
          s.icons.forEach((a) => {
            e.missing.add(a);
          });
        else
          try {
            const a = de(
              e,
              u
            );
            if (!a.length)
              return;
            const c = e.pendingIcons;
            c && a.forEach((f) => {
              c.delete(f);
            }), Lr(e, u);
          } catch (a) {
            console.error(a);
          }
        jr(e);
      });
    });
  }));
}
const Pr = (e, t) => {
  const i = xr(e, !0, Ai()), n = vr(i);
  if (!n.pending.length) {
    let u = !0;
    return t && setTimeout(() => {
      u && t(
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
    r[a][c].length && zr(u, r[a][c]);
  }), t ? _r(t, n, o) : Ge;
};
function Or(e, t) {
  const i = {
    ...e
  };
  for (const n in t) {
    const r = t[n], o = typeof r;
    n in Li ? (r === null || r && (o === "string" || o === "number")) && (i[n] = r) : o === typeof i[n] && (i[n] = n === "rotate" ? r % 4 : r);
  }
  return i;
}
const Nr = /[\s,]+/;
function Br(e, t) {
  t.split(Nr).forEach((i) => {
    switch (i.trim()) {
      case "horizontal":
        e.hFlip = !0;
        break;
      case "vertical":
        e.vFlip = !0;
        break;
    }
  });
}
function Gr(e, t = 0) {
  const i = e.replace(/^-?[0-9.]*/, "");
  function n(r) {
    for (; r < 0; )
      r += 4;
    return r % 4;
  }
  if (i === "") {
    const r = parseInt(e);
    return isNaN(r) ? 0 : n(r);
  } else if (i !== e) {
    let r = 0;
    switch (i) {
      case "%":
        r = 25;
        break;
      case "deg":
        r = 90;
    }
    if (r) {
      let o = parseFloat(e.slice(0, e.length - i.length));
      return isNaN(o) ? 0 : (o = o / r, o % 1 === 0 ? n(o) : 0);
    }
  }
  return t;
}
function Hr(e, t) {
  let i = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in t)
    i += " " + n + '="' + t[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + i + ">" + e + "</svg>";
}
function Rr(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Wr(e) {
  return "data:image/svg+xml," + Rr(e);
}
function Fr(e) {
  return 'url("' + Wr(e) + '")';
}
const He = {
  ...ji,
  inline: !1
}, Vr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Dr = {
  display: "inline-block"
}, ce = {
  "background-color": "currentColor"
}, Wi = {
  "background-color": "transparent"
}, Re = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, We = {
  "-webkit-mask": ce,
  mask: ce,
  background: Wi
};
for (const e in We) {
  const t = We[e];
  for (const i in Re)
    t[e + "-" + i] = Re[i];
}
function qr(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
function Ur(e, t) {
  const i = Or(He, t), n = t.mode || "svg", r = n === "svg" ? { ...Vr } : {};
  e.body.indexOf("xlink:") === -1 && delete r["xmlns:xlink"];
  let o = typeof t.style == "string" ? t.style : "";
  for (let w in t) {
    const v = t[w];
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
  const l = or(e, i), s = l.attributes;
  if (i.inline && (o = "vertical-align: -0.125em; " + o), n === "svg") {
    Object.assign(r, s), o !== "" && (r.style = o);
    let w = 0, v = t.id;
    return typeof v == "string" && (v = v.replace(/-/g, "_")), {
      svg: !0,
      attributes: r,
      body: cr(l.body, v ? () => v + "ID" + w++ : "iconifySvelte")
    };
  }
  const { body: u, width: a, height: c } = e, f = n === "mask" || (n === "bg" ? !1 : u.indexOf("currentColor") !== -1), d = Hr(u, {
    ...s,
    width: a + "",
    height: c + ""
  }), p = {
    "--svg": Fr(d)
  }, _ = (w) => {
    const v = s[w];
    v && (p[w] = qr(v));
  };
  _("width"), _("height"), Object.assign(p, Dr, f ? ce : Wi);
  let b = "";
  for (const w in p)
    b += w + ": " + p[w] + ";";
  return r.style = b + o, {
    svg: !1,
    attributes: r
  };
}
Ai(!0);
ar("", br);
if (typeof document < "u" && typeof window < "u") {
  Ri();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, i = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((n) => {
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
  if (e.IconifyProviders !== void 0) {
    const t = e.IconifyProviders;
    if (typeof t == "object" && t !== null)
      for (let i in t) {
        const n = "IconifyProviders[" + i + "] is invalid.";
        try {
          const r = t[i];
          if (typeof r != "object" || !r || r.resources === void 0)
            continue;
          fr(i, r) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
function Zr(e, t, i, n, r) {
  function o() {
    t.loading && (t.loading.abort(), t.loading = null);
  }
  if (typeof e == "object" && e !== null && typeof e.body == "string")
    return t.name = "", o(), { data: { ...qt, ...e } };
  let l;
  if (typeof e != "string" || (l = Dt(e, !1, !0)) === null)
    return o(), null;
  const s = $n(l);
  if (!s)
    return i && (!t.loading || t.loading.name !== e) && (o(), t.name = "", t.loading = {
      name: e,
      abort: Pr([l], n)
    }), null;
  o(), t.name !== e && (t.name = e, r && !t.destroyed && r(e));
  const u = ["iconify"];
  return l.prefix !== "" && u.push("iconify--" + l.prefix), l.provider !== "" && u.push("iconify--" + l.provider), { data: s, classes: u };
}
function Qr(e, t) {
  return e ? Ur({
    ...qt,
    ...e
  }, t) : null;
}
function Fe(e) {
  let t;
  function i(o, l) {
    return (
      /*data*/
      o[0].svg ? Jr : Kr
    );
  }
  let n = i(e), r = n(e);
  return {
    c() {
      r.c(), t = wt();
    },
    m(o, l) {
      r.m(o, l), z(o, t, l);
    },
    p(o, l) {
      n === (n = i(o)) && r ? r.p(o, l) : (r.d(1), r = n(o), r && (r.c(), r.m(t.parentNode, t)));
    },
    d(o) {
      o && L(t), r.d(o);
    }
  };
}
function Kr(e) {
  let t, i = [
    /*data*/
    e[0].attributes
  ], n = {};
  for (let r = 0; r < i.length; r += 1)
    n = Wt(n, i[r]);
  return {
    c() {
      t = m("span"), ye(t, n);
    },
    m(r, o) {
      z(r, t, o);
    },
    p(r, o) {
      ye(t, n = wi(i, [o & /*data*/
      1 && /*data*/
      r[0].attributes]));
    },
    d(r) {
      r && L(t);
    }
  };
}
function Jr(e) {
  let t, i = (
    /*data*/
    e[0].body + ""
  ), n = [
    /*data*/
    e[0].attributes
  ], r = {};
  for (let o = 0; o < n.length; o += 1)
    r = Wt(r, n[o]);
  return {
    c() {
      t = Ui("svg"), _e(t, r);
    },
    m(o, l) {
      z(o, t, l), t.innerHTML = i;
    },
    p(o, l) {
      l & /*data*/
      1 && i !== (i = /*data*/
      o[0].body + "") && (t.innerHTML = i), _e(t, r = wi(n, [l & /*data*/
      1 && /*data*/
      o[0].attributes]));
    },
    d(o) {
      o && L(t);
    }
  };
}
function Xr(e) {
  let t, i = (
    /*data*/
    e[0] && Fe(e)
  );
  return {
    c() {
      i && i.c(), t = wt();
    },
    m(n, r) {
      i && i.m(n, r), z(n, t, r);
    },
    p(n, [r]) {
      /*data*/
      n[0] ? i ? i.p(n, r) : (i = Fe(n), i.c(), i.m(t.parentNode, t)) : i && (i.d(1), i = null);
    },
    i: R,
    o: R,
    d(n) {
      n && L(t), i && i.d(n);
    }
  };
}
function Yr(e, t, i) {
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
    typeof t.onLoad == "function" && t.onLoad(a), yt()("load", { icon: a });
  };
  function u() {
    i(3, o++, o);
  }
  return gt(() => {
    i(2, r = !0);
  }), Ji(() => {
    i(1, n.destroyed = !0, n), n.loading && (n.loading.abort(), i(1, n.loading = null, n));
  }), e.$$set = (a) => {
    i(6, t = Wt(Wt({}, t), we(a)));
  }, e.$$.update = () => {
    {
      const a = Zr(t.icon, n, r, u, s);
      i(0, l = a ? Qr(a.data, t) : null), l && a.classes && i(
        0,
        l.attributes.class = (typeof t.class == "string" ? t.class + " " : "") + a.classes.join(" "),
        l
      );
    }
  }, t = we(t), [l, n, r, o];
}
class _t extends J {
  constructor(t) {
    super(), K(this, t, Yr, Xr, Q, {});
  }
}
function Ve(e, t, i) {
  const n = e.slice();
  return n[7] = t[i].title, n[8] = t[i].items, n[10] = i, n;
}
function De(e, t, i) {
  const n = e.slice();
  return n[7] = t[i].title, n[11] = t[i].icon, n[12] = t[i].url, n[13] = t[i].children, n[15] = i, n;
}
function qe(e) {
  let t, i = (
    /*title*/
    e[7] + ""
  ), n;
  return {
    c() {
      t = m("h2"), n = N(i), k(t, "class", "uikit-mb-2 uikit-px-4 uikit-text-lg uikit-font-semibold uikit-tracking-tight");
    },
    m(r, o) {
      z(r, t, o), g(t, n);
    },
    p(r, o) {
      o & /*menus*/
      2 && i !== (i = /*title*/
      r[7] + "") && H(n, i);
    },
    d(r) {
      r && L(t);
    }
  };
}
function Ue(e) {
  let t, i, n, r;
  return i = new Fi({
    props: {
      menus: (
        /*children*/
        e[13]
      ),
      onClick: (
        /*onClick*/
        e[3]
      ),
      isopen: (
        /*isopen*/
        e[0]
      ),
      prefix: `${/*prefix*/
      e[2]}-${/*i*/
      e[10]}-${/*i2*/
      e[15]}`
    }
  }), {
    c() {
      t = m("div"), ct(i.$$.fragment), n = S(), k(t, "class", "uikit-w-full uikit-transition"), X(
        t,
        "height",
        /*isopen*/
        e[0].startsWith(`${/*prefix*/
        e[2]}-${/*i*/
        e[10]}-${/*i2*/
        e[15]}`) ? "" : "0px"
      ), X(
        t,
        "display",
        /*isopen*/
        e[0].startsWith(`${/*prefix*/
        e[2]}-${/*i*/
        e[10]}-${/*i2*/
        e[15]}`) ? "" : "none"
      );
    },
    m(o, l) {
      z(o, t, l), lt(i, t, null), g(t, n), r = !0;
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
      5 && X(
        t,
        "height",
        /*isopen*/
        o[0].startsWith(`${/*prefix*/
        o[2]}-${/*i*/
        o[10]}-${/*i2*/
        o[15]}`) ? "" : "0px"
      ), l & /*isopen, prefix*/
      5 && X(
        t,
        "display",
        /*isopen*/
        o[0].startsWith(`${/*prefix*/
        o[2]}-${/*i*/
        o[10]}-${/*i2*/
        o[15]}`) ? "" : "none"
      );
    },
    i(o) {
      r || (O(i.$$.fragment, o), r = !0);
    },
    o(o) {
      W(i.$$.fragment, o), r = !1;
    },
    d(o) {
      o && L(t), st(i);
    }
  };
}
function Ze(e) {
  let t, i, n, r, o, l = (
    /*title*/
    e[7] + ""
  ), s, u, a, c = !/*menuisempty*/
  e[4](
    /*children*/
    e[13]
  ), f, d, h, p;
  n = new _t({
    props: {
      class: "uikit-mr-2 uikit-h-4 uikit-w-4",
      icon: (
        /*icon*/
        e[11]
      )
    }
  });
  function _() {
    return (
      /*click_handler*/
      e[6](
        /*i*/
        e[10],
        /*i2*/
        e[15],
        /*url*/
        e[12],
        /*children*/
        e[13]
      )
    );
  }
  let b = c && Ue(e);
  return {
    c() {
      t = m("button"), i = m("section"), ct(n.$$.fragment), r = S(), o = m("p"), s = N(l), a = S(), b && b.c(), f = wt(), k(i, "class", "uikit-self-center"), k(t, "class", u = `uikit-flex uikit-w-full ${/*isopen*/
      e[0].startsWith(`${/*prefix*/
      e[2]}-${/*i*/
      e[10]}-${/*i2*/
      e[15]}`) ? "uikit-text-green-500 uikit-border-l-green-400 uikit-border-l-4" : ""}`);
    },
    m(w, v) {
      z(w, t, v), g(t, i), lt(n, i, null), g(t, r), g(t, o), g(o, s), z(w, a, v), b && b.m(w, v), z(w, f, v), d = !0, h || (p = $(t, "click", _), h = !0);
    },
    p(w, v) {
      e = w;
      const I = {};
      v & /*menus*/
      2 && (I.icon = /*icon*/
      e[11]), n.$set(I), (!d || v & /*menus*/
      2) && l !== (l = /*title*/
      e[7] + "") && H(s, l), (!d || v & /*isopen, prefix*/
      5 && u !== (u = `uikit-flex uikit-w-full ${/*isopen*/
      e[0].startsWith(`${/*prefix*/
      e[2]}-${/*i*/
      e[10]}-${/*i2*/
      e[15]}`) ? "uikit-text-green-500 uikit-border-l-green-400 uikit-border-l-4" : ""}`)) && k(t, "class", u), v & /*menus*/
      2 && (c = !/*menuisempty*/
      e[4](
        /*children*/
        e[13]
      )), c ? b ? (b.p(e, v), v & /*menus*/
      2 && O(b, 1)) : (b = Ue(e), b.c(), O(b, 1), b.m(f.parentNode, f)) : b && (nt(), W(b, 1, 1, () => {
        b = null;
      }), rt());
    },
    i(w) {
      d || (O(n.$$.fragment, w), O(b), d = !0);
    },
    o(w) {
      W(n.$$.fragment, w), W(b), d = !1;
    },
    d(w) {
      w && (L(t), L(a), L(f)), st(n), b && b.d(w), h = !1, p();
    }
  };
}
function Qe(e) {
  let t, i, n, r, o, l = (
    /*title*/
    e[7] && qe(e)
  ), s = q(
    /*items*/
    e[8]
  ), u = [];
  for (let c = 0; c < s.length; c += 1)
    u[c] = Ze(De(e, s, c));
  const a = (c) => W(u[c], 1, 1, () => {
    u[c] = null;
  });
  return {
    c() {
      t = m("div"), l && l.c(), i = S(), n = m("div");
      for (let c = 0; c < u.length; c += 1)
        u[c].c();
      r = S(), k(n, "class", "uikit-space-y-1"), k(t, "class", "uikit-py-2");
    },
    m(c, f) {
      z(c, t, f), l && l.m(t, null), g(t, i), g(t, n);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(n, null);
      g(t, r), o = !0;
    },
    p(c, f) {
      if (/*title*/
      c[7] ? l ? l.p(c, f) : (l = qe(c), l.c(), l.m(t, i)) : l && (l.d(1), l = null), f & /*isopen, prefix, menus, onClick, menuisempty*/
      31) {
        s = q(
          /*items*/
          c[8]
        );
        let d;
        for (d = 0; d < s.length; d += 1) {
          const h = De(c, s, d);
          u[d] ? (u[d].p(h, f), O(u[d], 1)) : (u[d] = Ze(h), u[d].c(), O(u[d], 1), u[d].m(n, null));
        }
        for (nt(), d = s.length; d < u.length; d += 1)
          a(d);
        rt();
      }
    },
    i(c) {
      if (!o) {
        for (let f = 0; f < s.length; f += 1)
          O(u[f]);
        o = !0;
      }
    },
    o(c) {
      u = u.filter(Boolean);
      for (let f = 0; f < u.length; f += 1)
        W(u[f]);
      o = !1;
    },
    d(c) {
      c && L(t), l && l.d(), et(u, c);
    }
  };
}
function $r(e) {
  let t, i, n = q(
    /*menus*/
    e[1]
  ), r = [];
  for (let l = 0; l < n.length; l += 1)
    r[l] = Qe(Ve(e, n, l));
  const o = (l) => W(r[l], 1, 1, () => {
    r[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      t = wt();
    },
    m(l, s) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(l, s);
      z(l, t, s), i = !0;
    },
    p(l, [s]) {
      if (s & /*menus, isopen, prefix, onClick, menuisempty*/
      31) {
        n = q(
          /*menus*/
          l[1]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const a = Ve(l, n, u);
          r[u] ? (r[u].p(a, s), O(r[u], 1)) : (r[u] = Qe(a), r[u].c(), O(r[u], 1), r[u].m(t.parentNode, t));
        }
        for (nt(), u = n.length; u < r.length; u += 1)
          o(u);
        rt();
      }
    },
    i(l) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          O(r[s]);
        i = !0;
      }
    },
    o(l) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        W(r[s]);
      i = !1;
    },
    d(l) {
      l && L(t), et(r, l);
    }
  };
}
function to(e, t, i) {
  let { menus: n = [] } = t, { prefix: r = "" } = t, { isopen: o = "" } = t, { onClick: l = (c, f) => {
    console.log(c, f);
  } } = t;
  function s(c) {
    i(0, o = c);
  }
  const u = (c) => Array.isArray(c) ? c.length === 0 ? !0 : c[0].items.length === 0 : !c, a = (c, f, d, h) => {
    o === `${r}-${c}-${f}` ? i(0, o = r) : i(0, o = `${r}-${c}-${f}`), l(d, u(h));
  };
  return e.$$set = (c) => {
    "menus" in c && i(1, n = c.menus), "prefix" in c && i(2, r = c.prefix), "isopen" in c && i(0, o = c.isopen), "onClick" in c && i(3, l = c.onClick);
  }, [o, n, r, l, u, s, a];
}
class Fi extends J {
  constructor(t) {
    super(), K(this, t, to, $r, Q, {
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
function eo(e) {
  let t, i, n, r, o;
  return n = new Fi({
    props: {
      menus: (
        /*menusgroup*/
        e[3]
      ),
      onClick: (
        /*onClick*/
        e[1]
      ),
      isopen: (
        /*isopen*/
        e[0]
      )
    }
  }), {
    c() {
      t = m("div"), i = m("div"), ct(n.$$.fragment), k(i, "class", "uikit-space-y-4 uikit-py-4 uikit-w-full uikit-px-3"), k(t, "class", r = tt(
        "uikit-pb-12",
        /*className*/
        e[2]
      ));
    },
    m(l, s) {
      z(l, t, s), g(t, i), lt(n, i, null), o = !0;
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
      4 && r !== (r = tt(
        "uikit-pb-12",
        /*className*/
        l[2]
      ))) && k(t, "class", r);
    },
    i(l) {
      o || (O(n.$$.fragment, l), o = !0);
    },
    o(l) {
      W(n.$$.fragment, l), o = !1;
    },
    d(l) {
      l && L(t), st(n);
    }
  };
}
function io(e, t, i) {
  let { isopen: n = "" } = t, { menus: r = [] } = t, { onClick: o = (d, h) => {
    console.log(d, h);
  } } = t, { class: l = void 0 } = t;
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
      let _ = [{ title: "", items: [] }], b = 0;
      for (let w of p) {
        if (w.group) {
          b === _.length ? _.push({ title: "", items: [] }) : _[_.length - 1].items && (_.push({ title: "", items: [] }), b += 1), _[b].title = w.title, b += 1;
          continue;
        }
        _[_.length - 1].items.push({ ...w });
      }
      for (let w = 0; w < _.length; w++) {
        let v = [], I = _[w];
        for (let T = 0; T < I.items.length; T++) {
          let A = `${h}-${w}-${T}`;
          c[I.items[T].url] = A;
          let C = I.items[T];
          C.children ? v.push({
            ...C,
            children: d(A, C.children)
          }) : v.push({ ...C });
        }
        _[w].items = v;
      }
      return _;
    };
    i(3, a = d("", r)), console.log(a);
  };
  return e.$$set = (d) => {
    "isopen" in d && i(0, n = d.isopen), "menus" in d && i(4, r = d.menus), "onClick" in d && i(1, o = d.onClick), "class" in d && i(2, l = d.class);
  }, e.$$.update = () => {
    e.$$.dirty & /*menus*/
    16 && r && f();
  }, [n, o, l, a, r, s, u];
}
class Po extends J {
  constructor(t) {
    super(), K(this, t, io, eo, Q, {
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
function Ke(e, t, i) {
  const n = e.slice();
  return n[11] = t[i].title, n[12] = t[i].onClick, n;
}
function Je(e) {
  let t, i = (
    /*title*/
    e[11] + ""
  ), n, r, o, l;
  function s() {
    return (
      /*click_handler*/
      e[4](
        /*onClick*/
        e[12],
        /*title*/
        e[11]
      )
    );
  }
  return {
    c() {
      t = m("button"), n = N(i), r = S(), k(t, "class", "uikit-p-1 hover:uikit-bg-gray-200 uikit-cursor-pointer uikit-w-full uikit-h-full");
    },
    m(u, a) {
      z(u, t, a), g(t, n), g(t, r), o || (l = $(t, "click", s), o = !0);
    },
    p(u, a) {
      e = u, a & /*menus*/
      1 && i !== (i = /*title*/
      e[11] + "") && H(n, i);
    },
    d(u) {
      u && L(t), o = !1, l();
    }
  };
}
function no(e) {
  let t, i, n = q(
    /*menus*/
    e[0]
  ), r = [];
  for (let o = 0; o < n.length; o += 1)
    r[o] = Je(Ke(e, n, o));
  return {
    c() {
      t = m("div"), i = m("div");
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      k(i, "class", "uikit-p-2"), k(t, "class", "uikit-fixed uikit-z-10 uikit-bg-white uikit-border-gray-100 uikit-shadow-lg uikit-border-solid uikit-border-2"), xe(t, "uikit-hidden", !/*visible*/
      e[2]);
    },
    m(o, l) {
      z(o, t, l), g(t, i);
      for (let s = 0; s < r.length; s += 1)
        r[s] && r[s].m(i, null);
      e[5](t);
    },
    p(o, [l]) {
      if (l & /*visible, menus*/
      5) {
        n = q(
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
      4 && xe(t, "uikit-hidden", !/*visible*/
      o[2]);
    },
    i: R,
    o: R,
    d(o) {
      o && L(t), et(r, o), e[5](null);
    }
  };
}
function ro(e, t, i) {
  let { target: n } = t, { menus: r = [] } = t, o, l = !1, s = 0, u = 0;
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
    ot[h ? "unshift" : "push"](() => {
      o = h, i(1, o);
    });
  }
  return e.$$set = (h) => {
    "target" in h && i(3, n = h.target), "menus" in h && i(0, r = h.menus);
  }, [r, o, l, n, f, d];
}
class Oo extends J {
  constructor(t) {
    super(), K(this, t, ro, no, Q, { target: 3, menus: 0 });
  }
}
function Xe(e) {
  let t, i, n;
  return {
    c() {
      t = m("button"), t.textContent = "open", k(t, "class", "uikit-btn");
    },
    m(r, o) {
      z(r, t, o), i || (n = $(t, "click", function() {
        Vt(
          /*posDialog*/
          e[2].showModal()
        ) && e[2].showModal().apply(this, arguments);
      }), i = !0);
    },
    p(r, o) {
      e = r;
    },
    d(r) {
      r && L(t), i = !1, n();
    }
  };
}
function oo(e) {
  let t, i, n, r, o, l, s, u, a, c = !/*handle*/
  e[0] && Xe(e);
  return {
    c() {
      c && c.c(), t = S(), i = m("dialog"), n = m("div"), r = m("form"), r.innerHTML = '<button class="uikit-btn uikit-btn-sm uikit-btn-circle uikit-btn-ghost uikit-absolute uikit-right-2 uikit-top-2">✕</button>', o = S(), l = m("div"), l.innerHTML = '<h3 class="uikit-font-bold uikit-text-lg">Hello!</h3> <p class="uikit-py-4">Press ESC key or click on ✕ button to close</p>', u = S(), a = m("form"), a.innerHTML = "<button>close</button>", k(r, "method", "dialog"), k(n, "class", s = `uikit-modal-box ${/*className*/
      e[1]}`), k(a, "method", "dialog"), k(a, "class", "uikit-modal-backdrop"), k(i, "class", "uikit-modal");
    },
    m(f, d) {
      c && c.m(f, d), z(f, t, d), z(f, i, d), g(i, n), g(n, r), g(n, o), g(n, l), e[5](l), g(i, u), g(i, a), e[6](i);
    },
    p(f, [d]) {
      /*handle*/
      f[0] ? c && (c.d(1), c = null) : c ? c.p(f, d) : (c = Xe(f), c.c(), c.m(t.parentNode, t)), d & /*className*/
      2 && s !== (s = `uikit-modal-box ${/*className*/
      f[1]}`) && k(n, "class", s);
    },
    i: R,
    o: R,
    d(f) {
      f && (L(t), L(i)), c && c.d(f), e[5](null), e[6](null);
    }
  };
}
function lo(e, t, i) {
  let { handle: n = void 0 } = t, { content: r = void 0 } = t, { class: o = "" } = t, l, s;
  gt(() => {
    n && n.addEventListener("click", () => {
      l.showModal();
    }), r && (i(3, s.innerHTML = "", s), s.appendChild(r));
  });
  function u(c) {
    ot[c ? "unshift" : "push"](() => {
      s = c, i(3, s);
    });
  }
  function a(c) {
    ot[c ? "unshift" : "push"](() => {
      l = c, i(2, l);
    });
  }
  return e.$$set = (c) => {
    "handle" in c && i(0, n = c.handle), "content" in c && i(4, r = c.content), "class" in c && i(1, o = c.class);
  }, [
    n,
    o,
    l,
    s,
    r,
    u,
    a
  ];
}
class No extends J {
  constructor(t) {
    super(), K(this, t, lo, oo, Q, { handle: 0, content: 4, class: 1 });
  }
}
function Ye(e, t, i) {
  const n = e.slice();
  return n[10] = t[i].type, n[11] = t[i].title, n[12] = t[i].url, n[13] = t[i].icon, n[14] = t[i].items, n;
}
function $e(e, t, i) {
  const n = e.slice();
  return n[11] = t[i].title, n[12] = t[i].url, n;
}
function ti(e, t, i) {
  const n = e.slice();
  return n[10] = t[i].type, n[11] = t[i].title, n[12] = t[i].url, n[13] = t[i].icon, n[14] = t[i].items, n;
}
function ei(e, t, i) {
  const n = e.slice();
  return n[11] = t[i].title, n[12] = t[i].url, n;
}
function so(e) {
  let t, i, n, r, o = (
    /*title*/
    e[11] + ""
  ), l, s, u, a, c;
  n = new _t({ props: { icon: (
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
      t = m("li"), i = m("button"), ct(n.$$.fragment), r = m("span"), l = N(o), s = S(), k(r, "class", "uikit-ml-2"), k(i, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case"), k(t, "class", "nav-item");
    },
    m(d, h) {
      z(d, t, h), g(t, i), lt(n, i, null), g(i, r), g(r, l), g(t, s), u = !0, a || (c = $(i, "click", f), a = !0);
    },
    p(d, h) {
      e = d;
      const p = {};
      h & /*links*/
      8 && (p.icon = /*icon*/
      e[13]), n.$set(p), (!u || h & /*links*/
      8) && o !== (o = /*title*/
      e[11] + "") && H(l, o);
    },
    i(d) {
      u || (O(n.$$.fragment, d), u = !0);
    },
    o(d) {
      W(n.$$.fragment, d), u = !1;
    },
    d(d) {
      d && L(t), st(n), a = !1, c();
    }
  };
}
function uo(e) {
  let t, i, n, r = (
    /*title*/
    e[11] + ""
  ), o, l, s, u, a = q(
    /*items*/
    e[14]
  ), c = [];
  for (let f = 0; f < a.length; f += 1)
    c[f] = ii(ei(e, a, f));
  return {
    c() {
      t = m("li"), i = m("div"), n = m("label"), o = N(r), l = S(), s = m("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      u = S(), k(n, "tabindex", "1"), k(n, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), k(s, "tabindex", "1"), k(s, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), k(i, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), k(t, "class", "nav-item");
    },
    m(f, d) {
      z(f, t, d), g(t, i), g(i, n), g(n, o), g(i, l), g(i, s);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(s, null);
      g(t, u);
    },
    p(f, d) {
      if (d & /*links*/
      8 && r !== (r = /*title*/
      f[11] + "") && H(o, r), d & /*onItemClick, links*/
      24) {
        a = q(
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
    i: R,
    o: R,
    d(f) {
      f && L(t), et(c, f);
    }
  };
}
function ii(e) {
  let t, i, n = (
    /*title*/
    e[11] + ""
  ), r, o, l, s;
  function u() {
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
      t = m("li"), i = m("button"), r = N(n), o = S();
    },
    m(a, c) {
      z(a, t, c), g(t, i), g(i, r), g(t, o), l || (s = $(i, "click", u), l = !0);
    },
    p(a, c) {
      e = a, c & /*links*/
      8 && n !== (n = /*title*/
      e[11] + "") && H(r, n);
    },
    d(a) {
      a && L(t), l = !1, s();
    }
  };
}
function ni(e) {
  let t, i, n, r;
  const o = [uo, so], l = [];
  function s(u, a) {
    return (
      /*type*/
      u[10] === "menu" ? 0 : 1
    );
  }
  return t = s(e), i = l[t] = o[t](e), {
    c() {
      i.c(), n = wt();
    },
    m(u, a) {
      l[t].m(u, a), z(u, n, a), r = !0;
    },
    p(u, a) {
      let c = t;
      t = s(u), t === c ? l[t].p(u, a) : (nt(), W(l[c], 1, 1, () => {
        l[c] = null;
      }), rt(), i = l[t], i ? i.p(u, a) : (i = l[t] = o[t](u), i.c()), O(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (O(i), r = !0);
    },
    o(u) {
      W(i), r = !1;
    },
    d(u) {
      u && L(n), l[t].d(u);
    }
  };
}
function co(e) {
  let t, i, n, r, o = (
    /*title*/
    e[11] + ""
  ), l, s, u, a, c;
  n = new _t({ props: { icon: (
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
      t = m("li"), i = m("button"), ct(n.$$.fragment), r = m("span"), l = N(o), s = S(), k(r, "class", "uikit-ml-2"), k(i, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case uikit-items-start"), k(t, "class", "uikit-nav-item");
    },
    m(d, h) {
      z(d, t, h), g(t, i), lt(n, i, null), g(i, r), g(r, l), g(t, s), u = !0, a || (c = $(i, "click", f), a = !0);
    },
    p(d, h) {
      e = d;
      const p = {};
      h & /*links*/
      8 && (p.icon = /*icon*/
      e[13]), n.$set(p), (!u || h & /*links*/
      8) && o !== (o = /*title*/
      e[11] + "") && H(l, o);
    },
    i(d) {
      u || (O(n.$$.fragment, d), u = !0);
    },
    o(d) {
      W(n.$$.fragment, d), u = !1;
    },
    d(d) {
      d && L(t), st(n), a = !1, c();
    }
  };
}
function ao(e) {
  let t, i, n, r = (
    /*title*/
    e[11] + ""
  ), o, l, s, u, a = q(
    /*items*/
    e[14]
  ), c = [];
  for (let f = 0; f < a.length; f += 1)
    c[f] = ri($e(e, a, f));
  return {
    c() {
      t = m("li"), i = m("div"), n = m("label"), o = N(r), l = S(), s = m("ul");
      for (let f = 0; f < c.length; f += 1)
        c[f].c();
      u = S(), k(n, "tabindex", "1"), k(n, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), k(s, "tabindex", "1"), k(s, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), k(i, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), k(t, "class", "uikit-nav-item uikit-w-full");
    },
    m(f, d) {
      z(f, t, d), g(t, i), g(i, n), g(n, o), g(i, l), g(i, s);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(s, null);
      g(t, u);
    },
    p(f, d) {
      if (d & /*links*/
      8 && r !== (r = /*title*/
      f[11] + "") && H(o, r), d & /*onItemClick, links*/
      24) {
        a = q(
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
    i: R,
    o: R,
    d(f) {
      f && L(t), et(c, f);
    }
  };
}
function ri(e) {
  let t, i, n = (
    /*title*/
    e[11] + ""
  ), r, o, l, s;
  function u() {
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
      t = m("li"), i = m("button"), r = N(n), o = S();
    },
    m(a, c) {
      z(a, t, c), g(t, i), g(i, r), g(t, o), l || (s = $(i, "click", u), l = !0);
    },
    p(a, c) {
      e = a, c & /*links*/
      8 && n !== (n = /*title*/
      e[11] + "") && H(r, n);
    },
    d(a) {
      a && L(t), l = !1, s();
    }
  };
}
function oi(e) {
  let t, i, n, r;
  const o = [ao, co], l = [];
  function s(u, a) {
    return (
      /*type*/
      u[10] === "menu" ? 0 : 1
    );
  }
  return t = s(e), i = l[t] = o[t](e), {
    c() {
      i.c(), n = wt();
    },
    m(u, a) {
      l[t].m(u, a), z(u, n, a), r = !0;
    },
    p(u, a) {
      let c = t;
      t = s(u), t === c ? l[t].p(u, a) : (nt(), W(l[c], 1, 1, () => {
        l[c] = null;
      }), rt(), i = l[t], i ? i.p(u, a) : (i = l[t] = o[t](u), i.c()), O(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      r || (O(i), r = !0);
    },
    o(u) {
      W(i), r = !1;
    },
    d(u) {
      u && L(n), l[t].d(u);
    }
  };
}
function fo(e) {
  let t, i, n, r, o, l, s, u, a, c, f, d, h, p, _, b, w, v, I, T, A, C, G, j = q(
    /*links*/
    e[3]
  ), P = [];
  for (let x = 0; x < j.length; x += 1)
    P[x] = ni(ti(e, j, x));
  const F = (x) => W(P[x], 1, 1, () => {
    P[x] = null;
  });
  let V = q(
    /*links*/
    e[3]
  ), M = [];
  for (let x = 0; x < V.length; x += 1)
    M[x] = oi(Ye(e, V, x));
  const U = (x) => W(M[x], 1, 1, () => {
    M[x] = null;
  });
  return {
    c() {
      t = m("nav"), i = m("div"), n = m("div"), r = m("button"), o = N(
        /*logotxt*/
        e[1]
      ), l = S(), s = m("div"), u = m("ul");
      for (let x = 0; x < P.length; x += 1)
        P[x].c();
      a = S(), c = m("div"), f = m("div"), d = m("input"), h = S(), p = m("div"), p.innerHTML = '<label for="my-drawer" class="uikit-btn uikit-btn-ghost uikit-drawer-button"><div class="uikit-ml-1 uikit-mr-1 uikit-h-8 uikit-w-8 uikit-rounded uikit-py-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="uikit-text-gray-900 dark:uikit-text-gray-100"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></div></label>', _ = S(), b = m("div"), w = m("label"), v = S(), I = m("ul");
      for (let x = 0; x < M.length; x += 1)
        M[x].c();
      k(r, "class", "uikit-text-sm uikit-font-bold uikit-leading-relaxed uikit-inline-block uikit-mr-4 uikit-py-2 uikit-whitespace-nowrap uikit-text-slate-700"), k(n, "class", "uikit-relative uikit-flex uikit-justify-between lg:uikit-w-auto lg:uikit-static lg:uikit-block lg:uikit-justify-start"), k(u, "class", "uikit-flex uikit-flex-col lg:uikit-flex-row uikit-list-none lg:uikit-ml-auto"), k(s, "class", "lg:uikit-flex uikit-flex-grow uikit-items-center uikit-hidden"), k(d, "id", "my-drawer"), k(d, "type", "checkbox"), k(d, "class", "uikit-drawer-toggle"), k(p, "class", "uikit-drawer-content"), k(w, "for", "my-drawer"), k(w, "class", "uikit-drawer-overlay"), k(I, "class", "uikit-menu uikit-p-4 uikit-w-80 uikit-min-h-full uikit-bg-base-200 uikit-text-base-content"), k(b, "class", "uikit-drawer-side"), k(f, "class", "uikit-drawer"), k(c, "class", "lg:uikit-hidden"), k(i, "class", "uikit-container uikit-px-4 uikit-mx-auto uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between"), k(t, "class", T = tt(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        e[0]
      ));
    },
    m(x, E) {
      z(x, t, E), g(t, i), g(i, n), g(n, r), g(r, o), g(i, l), g(i, s), g(s, u);
      for (let y = 0; y < P.length; y += 1)
        P[y] && P[y].m(u, null);
      g(i, a), g(i, c), g(c, f), g(f, d), g(f, h), g(f, p), g(f, _), g(f, b), g(b, w), g(b, v), g(b, I);
      for (let y = 0; y < M.length; y += 1)
        M[y] && M[y].m(I, null);
      A = !0, C || (G = $(
        r,
        "click",
        /*click_handler*/
        e[5]
      ), C = !0);
    },
    p(x, [E]) {
      if ((!A || E & /*logotxt*/
      2) && H(
        o,
        /*logotxt*/
        x[1]
      ), E & /*links, onItemClick*/
      24) {
        j = q(
          /*links*/
          x[3]
        );
        let y;
        for (y = 0; y < j.length; y += 1) {
          const Z = ti(x, j, y);
          P[y] ? (P[y].p(Z, E), O(P[y], 1)) : (P[y] = ni(Z), P[y].c(), O(P[y], 1), P[y].m(u, null));
        }
        for (nt(), y = j.length; y < P.length; y += 1)
          F(y);
        rt();
      }
      if (E & /*links, onItemClick*/
      24) {
        V = q(
          /*links*/
          x[3]
        );
        let y;
        for (y = 0; y < V.length; y += 1) {
          const Z = Ye(x, V, y);
          M[y] ? (M[y].p(Z, E), O(M[y], 1)) : (M[y] = oi(Z), M[y].c(), O(M[y], 1), M[y].m(I, null));
        }
        for (nt(), y = V.length; y < M.length; y += 1)
          U(y);
        rt();
      }
      (!A || E & /*className*/
      1 && T !== (T = tt(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        x[0]
      ))) && k(t, "class", T);
    },
    i(x) {
      if (!A) {
        for (let E = 0; E < j.length; E += 1)
          O(P[E]);
        for (let E = 0; E < V.length; E += 1)
          O(M[E]);
        A = !0;
      }
    },
    o(x) {
      P = P.filter(Boolean);
      for (let E = 0; E < P.length; E += 1)
        W(P[E]);
      M = M.filter(Boolean);
      for (let E = 0; E < M.length; E += 1)
        W(M[E]);
      A = !1;
    },
    d(x) {
      x && L(t), et(P, x), et(M, x), C = !1, G();
    }
  };
}
function go(e, t, i) {
  let { class: n = "" } = t, { logotxt: r = "wwqdrh" } = t, { logourl: o = "#" } = t, { links: l = [] } = t, { onItemClick: s = (h) => {
    window.location.href = h;
  } } = t;
  const u = () => s(o), a = (h) => s(h), c = (h) => s(h), f = (h) => s(h), d = (h) => s(h);
  return e.$$set = (h) => {
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
  constructor(t) {
    super(), K(this, t, go, fo, Q, {
      class: 0,
      logotxt: 1,
      logourl: 2,
      links: 3,
      onItemClick: 4
    });
  }
}
function li(e, t, i) {
  const n = e.slice();
  return n[7] = t[i], n;
}
function si(e) {
  let t, i = (
    /*item*/
    e[7] + ""
  ), n, r, o;
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
      t = m("button"), n = N(i), k(t, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(s, u) {
      z(s, t, u), g(t, n), r || (o = $(t, "click", l), r = !0);
    },
    p(s, u) {
      e = s, u & /*buttons*/
      8 && i !== (i = /*item*/
      e[7] + "") && H(n, i);
    },
    d(s) {
      s && L(t), r = !1, o();
    }
  };
}
function ko(e) {
  let t, i, n, r, o, l, s, u, a, c, f, d, h, p, _, b = q(
    /*buttons*/
    e[3]
  ), w = [];
  for (let v = 0; v < b.length; v += 1)
    w[v] = si(li(e, b, v));
  return {
    c() {
      t = m("section"), i = m("div"), n = m("div"), r = m("div"), o = m("h2"), l = N(
        /*title*/
        e[0]
      ), s = S(), u = m("p"), a = N(
        /*description*/
        e[1]
      ), c = S(), f = m("div");
      for (let v = 0; v < w.length; v += 1)
        w[v].c();
      d = S(), h = m("img"), k(o, "class", "uikit-font-semibold uikit-text-4xl uikit-text-slate-600"), k(u, "class", "uikit-mt-4 uikit-text-lg uikit-leading-relaxed uikit-text-slate-500"), k(f, "class", "uikit-mt-12"), k(r, "class", "uikit-pt-32 sm:uikit-pt-0"), k(n, "class", "uikit-w-full md:uikit-w-8/12 lg:uikit-w-6/12 xl:uikit-w-6/12 uikit-px-4"), k(i, "class", "uikit-container uikit-mx-auto uikit-items-center uikit-flex uikit-flex-wrap"), k(h, "class", "uikit-absolute uikit-top-0 uikit-b-auto uikit-right-0 uikit-pt-16 sm:uikit-w-6/12 uikit--mt-48 sm:uikit-mt-0 uikit-w-10/12"), bt(h.src, p = /*cover*/
      e[5]) || k(h, "src", p), k(h, "alt", "..."), X(h, "max-height", "860px"), k(t, "class", _ = tt(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        e[2]
      )), X(t, "max-height", "860px");
    },
    m(v, I) {
      z(v, t, I), g(t, i), g(i, n), g(n, r), g(r, o), g(o, l), g(r, s), g(r, u), g(u, a), g(r, c), g(r, f);
      for (let T = 0; T < w.length; T += 1)
        w[T] && w[T].m(f, null);
      g(t, d), g(t, h);
    },
    p(v, [I]) {
      if (I & /*title*/
      1 && H(
        l,
        /*title*/
        v[0]
      ), I & /*description*/
      2 && H(
        a,
        /*description*/
        v[1]
      ), I & /*buttonClick, buttons*/
      24) {
        b = q(
          /*buttons*/
          v[3]
        );
        let T;
        for (T = 0; T < b.length; T += 1) {
          const A = li(v, b, T);
          w[T] ? w[T].p(A, I) : (w[T] = si(A), w[T].c(), w[T].m(f, null));
        }
        for (; T < w.length; T += 1)
          w[T].d(1);
        w.length = b.length;
      }
      I & /*cover*/
      32 && !bt(h.src, p = /*cover*/
      v[5]) && k(h, "src", p), I & /*className*/
      4 && _ !== (_ = tt(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        v[2]
      )) && k(t, "class", _);
    },
    i: R,
    o: R,
    d(v) {
      v && L(t), et(w, v);
    }
  };
}
function mo(e, t, i) {
  let { title: n = "wwqdrh's ui component: uikit" } = t, { description: r = "a cross framework web component, you can visit it in wwqdrh'home" } = t, { class: o = "" } = t, { buttons: l = [] } = t, { buttonClick: s = (c) => {
    console.log(c);
  } } = t, { cover: u = "" } = t;
  const a = (c) => s(c);
  return e.$$set = (c) => {
    "title" in c && i(0, n = c.title), "description" in c && i(1, r = c.description), "class" in c && i(2, o = c.class), "buttons" in c && i(3, l = c.buttons), "buttonClick" in c && i(4, s = c.buttonClick), "cover" in c && i(5, u = c.cover);
  }, [n, r, o, l, s, u, a];
}
class po extends J {
  constructor(t) {
    super(), K(this, t, mo, ko, Q, {
      title: 0,
      description: 1,
      class: 2,
      buttons: 3,
      buttonClick: 4,
      cover: 5
    });
  }
}
function ui(e, t, i) {
  const n = e.slice();
  return n[4] = t[i].icon, n[2] = t[i].title, n[3] = t[i].description, n;
}
function ci(e) {
  let t, i, n, r, o, l = (
    /*title*/
    e[2] + ""
  ), s, u, a, c = (
    /*description*/
    e[3] + ""
  ), f, d, h;
  return n = new _t({
    props: {
      class: "uikit-w-5 uikit-h-5 uikit-text-primary-600 lg:uikit-w-6 lg:uikit-h-6 dark:uikit-text-primary-300",
      icon: (
        /*icon*/
        e[4]
      )
    }
  }), {
    c() {
      t = m("div"), i = m("div"), ct(n.$$.fragment), r = S(), o = m("h3"), s = N(l), u = S(), a = m("p"), f = N(c), d = S(), k(i, "class", "uikit-flex uikit-justify-center uikit-items-center uikit-mb-4 uikit-w-10 uikit-h-10 uikit-rounded-full uikit-bg-primary-100 lg:uikit-h-12 lg:uikit-w-12 dark:uikit-bg-primary-900"), k(o, "class", "uikit-mb-2 uikit-text-xl uikit-font-bold dark:uikit-text-white"), k(a, "class", "uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(p, _) {
      z(p, t, _), g(t, i), lt(n, i, null), g(t, r), g(t, o), g(o, s), g(t, u), g(t, a), g(a, f), g(t, d), h = !0;
    },
    p(p, _) {
      const b = {};
      _ & /*features*/
      2 && (b.icon = /*icon*/
      p[4]), n.$set(b), (!h || _ & /*features*/
      2) && l !== (l = /*title*/
      p[2] + "") && H(s, l), (!h || _ & /*features*/
      2) && c !== (c = /*description*/
      p[3] + "") && H(f, c);
    },
    i(p) {
      h || (O(n.$$.fragment, p), h = !0);
    },
    o(p) {
      W(n.$$.fragment, p), h = !1;
    },
    d(p) {
      p && L(t), st(n);
    }
  };
}
function bo(e) {
  let t, i, n, r, o, l, s, u, a, c, f, d, h = q(
    /*features*/
    e[1]
  ), p = [];
  for (let b = 0; b < h.length; b += 1)
    p[b] = ci(ui(e, h, b));
  const _ = (b) => W(p[b], 1, 1, () => {
    p[b] = null;
  });
  return {
    c() {
      t = m("section"), i = m("div"), n = m("div"), r = m("h2"), o = N(
        /*title*/
        e[2]
      ), l = S(), s = m("p"), u = N(
        /*description*/
        e[3]
      ), a = S(), c = m("div");
      for (let b = 0; b < p.length; b += 1)
        p[b].c();
      k(r, "class", "uikit-mb-4 uikit-text-4xl uikit-font-extrabold uikit-text-gray-900 dark:uikit-text-white"), k(s, "class", "uikit-text-gray-500 sm:uikit-text-xl dark:uikit-text-gray-400"), k(n, "class", "uikit-mb-8 uikit-max-w-screen-md lg:uikit-mb-16"), k(c, "class", "uikit-space-y-8 md:uikit-grid md:uikit-grid-cols-2 lg:uikit-grid-cols-3 md:uikit-gap-12 md:uikit-space-y-0"), k(i, "class", "uikit-py-8 uikit-px-4 uikit-mx-auto uikit-max-w-screen-xl sm:uikit-py-16 lg:uikit-px-6"), k(t, "class", f = tt(
        "dark:uikit-bg-gray-800",
        /*className*/
        e[0]
      ));
    },
    m(b, w) {
      z(b, t, w), g(t, i), g(i, n), g(n, r), g(r, o), g(n, l), g(n, s), g(s, u), g(i, a), g(i, c);
      for (let v = 0; v < p.length; v += 1)
        p[v] && p[v].m(c, null);
      d = !0;
    },
    p(b, [w]) {
      if ((!d || w & /*title*/
      4) && H(
        o,
        /*title*/
        b[2]
      ), (!d || w & /*description*/
      8) && H(
        u,
        /*description*/
        b[3]
      ), w & /*features*/
      2) {
        h = q(
          /*features*/
          b[1]
        );
        let v;
        for (v = 0; v < h.length; v += 1) {
          const I = ui(b, h, v);
          p[v] ? (p[v].p(I, w), O(p[v], 1)) : (p[v] = ci(I), p[v].c(), O(p[v], 1), p[v].m(c, null));
        }
        for (nt(), v = h.length; v < p.length; v += 1)
          _(v);
        rt();
      }
      (!d || w & /*className*/
      1 && f !== (f = tt(
        "dark:uikit-bg-gray-800",
        /*className*/
        b[0]
      ))) && k(t, "class", f);
    },
    i(b) {
      if (!d) {
        for (let w = 0; w < h.length; w += 1)
          O(p[w]);
        d = !0;
      }
    },
    o(b) {
      p = p.filter(Boolean);
      for (let w = 0; w < p.length; w += 1)
        W(p[w]);
      d = !1;
    },
    d(b) {
      b && L(t), et(p, b);
    }
  };
}
function vo(e, t, i) {
  let { class: n = "" } = t, { title: r = "" } = t, { description: o = "" } = t, { features: l = [] } = t;
  return e.$$set = (s) => {
    "class" in s && i(0, n = s.class), "title" in s && i(2, r = s.title), "description" in s && i(3, o = s.description), "features" in s && i(1, l = s.features);
  }, [n, l, r, o];
}
class wo extends J {
  constructor(t) {
    super(), K(this, t, vo, bo, Q, {
      class: 0,
      title: 2,
      description: 3,
      features: 1
    });
  }
}
function ai(e, t, i) {
  const n = e.slice();
  return n[11] = t[i], n[13] = i, n;
}
function fi(e, t, i) {
  const n = e.slice();
  return n[11] = t[i], n;
}
function di(e, t, i) {
  const n = e.slice();
  return n[8] = t[i].icon, n[9] = t[i].description, n;
}
function gi(e) {
  let t, i, n;
  return i = new _t({ props: { icon: (
    /*icon*/
    e[8]
  ) } }), {
    c() {
      t = m("div"), ct(i.$$.fragment), k(t, "class", "uikit-text-slate-500 uikit-p-3 uikit-text-center uikit-inline-flex uikit-items-center uikit-justify-center uikit-w-16 uikit-h-16 uikit-mb-6 uikit-shadow-lg uikit-rounded-full uikit-bg-white");
    },
    m(r, o) {
      z(r, t, o), lt(i, t, null), n = !0;
    },
    p(r, o) {
      const l = {};
      o & /*icon*/
      256 && (l.icon = /*icon*/
      r[8]), i.$set(l);
    },
    i(r) {
      n || (O(i.$$.fragment, r), n = !0);
    },
    o(r) {
      W(i.$$.fragment, r), n = !1;
    },
    d(r) {
      r && L(t), st(i);
    }
  };
}
function hi(e) {
  let t, i;
  return t = new _t({ props: { icon: (
    /*icon*/
    e[8]
  ) } }), {
    c() {
      ct(t.$$.fragment);
    },
    m(n, r) {
      lt(t, n, r), i = !0;
    },
    p(n, r) {
      const o = {};
      r & /*sections*/
      16 && (o.icon = /*icon*/
      n[8]), t.$set(o);
    },
    i(n) {
      i || (O(t.$$.fragment, n), i = !0);
    },
    o(n) {
      W(t.$$.fragment, n), i = !1;
    },
    d(n) {
      st(t, n);
    }
  };
}
function ki(e) {
  let t, i, n, r = (
    /*description*/
    e[9] + ""
  ), o, l, s = (
    /*icon*/
    e[8] && hi(e)
  );
  return {
    c() {
      t = m("li"), i = m("span"), s && s.c(), n = S(), o = N(r), k(i, "class", "uikit-text-xs uikit-font-semibold uikit-inline-block uikit-py-1 uikit-px-2 uikit-rounded-full uikit-text-slate-500 uikit-bg-slate-50 uikit-mr-3"), k(t, "class", "uikit-py-2");
    },
    m(u, a) {
      z(u, t, a), g(t, i), s && s.m(i, null), g(i, n), g(i, o), l = !0;
    },
    p(u, a) {
      /*icon*/
      u[8] ? s ? (s.p(u, a), a & /*sections*/
      16 && O(s, 1)) : (s = hi(u), s.c(), O(s, 1), s.m(i, n)) : s && (nt(), W(s, 1, 1, () => {
        s = null;
      }), rt()), (!l || a & /*sections*/
      16) && r !== (r = /*description*/
      u[9] + "") && H(o, r);
    },
    i(u) {
      l || (O(s), l = !0);
    },
    o(u) {
      W(s), l = !1;
    },
    d(u) {
      u && L(t), s && s.d();
    }
  };
}
function mi(e) {
  let t, i = (
    /*item*/
    e[11] + ""
  ), n, r, o;
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
      t = m("button"), n = N(i), k(t, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(s, u) {
      z(s, t, u), g(t, n), r || (o = $(t, "click", l), r = !0);
    },
    p(s, u) {
      e = s, u & /*buttons*/
      32 && i !== (i = /*item*/
      e[11] + "") && H(n, i);
    },
    d(s) {
      s && L(t), r = !1, o();
    }
  };
}
function pi(e) {
  let t, i, n, r, o, l, s, u, a, c, f, d, h, p;
  return {
    c() {
      t = m("div"), i = m("img"), r = S(), o = m("div"), l = m("a"), s = N("❮"), a = S(), c = m("a"), f = N("❯"), h = S(), k(i, "alt", "..."), k(i, "class", "uikit-max-w-full uikit-rounded-lg uikit-shadow-xl"), X(i, "transform", "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"), bt(i.src, n = /*item*/
      e[11]) || k(i, "src", n), k(l, "href", u = `#pd-cover-slide-${/*id*/
      e[1]}-${/*i*/
      (e[13] - 1 + /*covers*/
      e[2].length) % /*covers*/
      e[2].length}`), k(l, "class", "uikit-btn uikit-btn-circle"), k(c, "href", d = `#pd-cover-slide-${/*id*/
      e[1]}-${/*i*/
      (e[13] + 1) % /*covers*/
      e[2].length}`), k(c, "class", "uikit-btn uikit-btn-circle"), k(o, "class", "uikit-absolute uikit-flex uikit-justify-between uikit-transform uikit--translate-y-1/2 uikit-left-5 uikit-right-5 uikit-top-1/2"), k(t, "id", p = `pd-cover-slide-${/*id*/
      e[1]}-${/*i*/
      e[13]}`), k(t, "class", "uikit-carousel-item uikit-relative uikit-w-full");
    },
    m(_, b) {
      z(_, t, b), g(t, i), g(t, r), g(t, o), g(o, l), g(l, s), g(o, a), g(o, c), g(c, f), g(t, h);
    },
    p(_, b) {
      b & /*covers*/
      4 && !bt(i.src, n = /*item*/
      _[11]) && k(i, "src", n), b & /*id, covers*/
      6 && u !== (u = `#pd-cover-slide-${/*id*/
      _[1]}-${/*i*/
      (_[13] - 1 + /*covers*/
      _[2].length) % /*covers*/
      _[2].length}`) && k(l, "href", u), b & /*id, covers*/
      6 && d !== (d = `#pd-cover-slide-${/*id*/
      _[1]}-${/*i*/
      (_[13] + 1) % /*covers*/
      _[2].length}`) && k(c, "href", d), b & /*id*/
      2 && p !== (p = `pd-cover-slide-${/*id*/
      _[1]}-${/*i*/
      _[13]}`) && k(t, "id", p);
    },
    d(_) {
      _ && L(t);
    }
  };
}
function yo(e) {
  let t, i, n, r, o, l, s, u, a, c, f, d, h, p, _, b, w, v, I, T, A, C = (
    /*icon*/
    e[8] && gi(e)
  ), G = q(
    /*sections*/
    e[4]
  ), j = [];
  for (let x = 0; x < G.length; x += 1)
    j[x] = ki(di(e, G, x));
  const P = (x) => W(j[x], 1, 1, () => {
    j[x] = null;
  });
  let F = q(
    /*buttons*/
    e[5]
  ), V = [];
  for (let x = 0; x < F.length; x += 1)
    V[x] = mi(fi(e, F, x));
  let M = q(
    /*covers*/
    e[2]
  ), U = [];
  for (let x = 0; x < M.length; x += 1)
    U[x] = pi(ai(e, M, x));
  return {
    c() {
      t = m("div"), i = m("div"), n = m("div"), r = m("div"), o = m("div"), C && C.c(), l = S(), s = m("h3"), u = N(
        /*title*/
        e[3]
      ), a = S(), c = m("p"), f = N(
        /*description*/
        e[9]
      ), d = S(), h = m("ul");
      for (let x = 0; x < j.length; x += 1)
        j[x].c();
      p = S(), _ = m("div");
      for (let x = 0; x < V.length; x += 1)
        V[x].c();
      b = S(), w = m("div"), v = m("div");
      for (let x = 0; x < U.length; x += 1)
        U[x].c();
      k(s, "class", "uikit-text-3xl uikit-font-semibold"), k(c, "class", "uikit-mt-4 uikit-text-md uikit-leading-relaxed uikit-text-slate-500"), k(h, "class", "uikit-list-none uikit-mt-6"), k(o, "class", "md:uikit-pr-12"), k(r, "class", "uikit-w-full md:uikit-w-1/3 uikit-ml-auto uikit-px-12 md:uikit-px-4"), k(v, "class", "uikit-carousel uikit-carousel-center uikit-w-full"), k(w, "class", "uikit-w-full md:uikit-w-2/3 uikit-mr-auto uikit-px-4 uikit-pt-24 md:uikit-pt-0"), k(n, "class", I = tt(
        "uikit-flex uikit-justify-between uikit-w-full",
        /*rtl*/
        e[6] ? "uikit-flex-row-reverse" : ""
      )), k(i, "class", "uikit-items-center uikit-flex uikit-flex-wrap uikit-w-full"), k(t, "class", T = tt(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        e[0]
      ));
    },
    m(x, E) {
      z(x, t, E), g(t, i), g(i, n), g(n, r), g(r, o), C && C.m(o, null), g(o, l), g(o, s), g(s, u), g(o, a), g(o, c), g(c, f), g(o, d), g(o, h);
      for (let y = 0; y < j.length; y += 1)
        j[y] && j[y].m(h, null);
      g(h, p), g(h, _);
      for (let y = 0; y < V.length; y += 1)
        V[y] && V[y].m(_, null);
      g(n, b), g(n, w), g(w, v);
      for (let y = 0; y < U.length; y += 1)
        U[y] && U[y].m(v, null);
      A = !0;
    },
    p(x, [E]) {
      if (/*icon*/
      x[8] ? C ? (C.p(x, E), E & /*icon*/
      256 && O(C, 1)) : (C = gi(x), C.c(), O(C, 1), C.m(o, l)) : C && (nt(), W(C, 1, 1, () => {
        C = null;
      }), rt()), (!A || E & /*title*/
      8) && H(
        u,
        /*title*/
        x[3]
      ), (!A || E & /*description*/
      512) && H(
        f,
        /*description*/
        x[9]
      ), E & /*sections*/
      16) {
        G = q(
          /*sections*/
          x[4]
        );
        let y;
        for (y = 0; y < G.length; y += 1) {
          const Z = di(x, G, y);
          j[y] ? (j[y].p(Z, E), O(j[y], 1)) : (j[y] = ki(Z), j[y].c(), O(j[y], 1), j[y].m(h, p));
        }
        for (nt(), y = G.length; y < j.length; y += 1)
          P(y);
        rt();
      }
      if (E & /*buttonClick, buttons*/
      160) {
        F = q(
          /*buttons*/
          x[5]
        );
        let y;
        for (y = 0; y < F.length; y += 1) {
          const Z = fi(x, F, y);
          V[y] ? V[y].p(Z, E) : (V[y] = mi(Z), V[y].c(), V[y].m(_, null));
        }
        for (; y < V.length; y += 1)
          V[y].d(1);
        V.length = F.length;
      }
      if (E & /*id, covers*/
      6) {
        M = q(
          /*covers*/
          x[2]
        );
        let y;
        for (y = 0; y < M.length; y += 1) {
          const Z = ai(x, M, y);
          U[y] ? U[y].p(Z, E) : (U[y] = pi(Z), U[y].c(), U[y].m(v, null));
        }
        for (; y < U.length; y += 1)
          U[y].d(1);
        U.length = M.length;
      }
      (!A || E & /*rtl*/
      64 && I !== (I = tt(
        "uikit-flex uikit-justify-between uikit-w-full",
        /*rtl*/
        x[6] ? "uikit-flex-row-reverse" : ""
      ))) && k(n, "class", I), (!A || E & /*className*/
      1 && T !== (T = tt(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        x[0]
      ))) && k(t, "class", T);
    },
    i(x) {
      if (!A) {
        O(C);
        for (let E = 0; E < G.length; E += 1)
          O(j[E]);
        A = !0;
      }
    },
    o(x) {
      W(C), j = j.filter(Boolean);
      for (let E = 0; E < j.length; E += 1)
        W(j[E]);
      A = !1;
    },
    d(x) {
      x && L(t), C && C.d(), et(j, x), et(V, x), et(U, x);
    }
  };
}
function _o(e, t, i) {
  let { class: n = "" } = t, { id: r = "" } = t, { covers: o = [] } = t, { title: l = "" } = t, { icon: s = "" } = t, { description: u = "" } = t, { sections: a = [] } = t, { buttons: c = [] } = t, { rtl: f = !1 } = t, { buttonClick: d = (p) => {
  } } = t;
  const h = (p) => d(p);
  return e.$$set = (p) => {
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
  constructor(t) {
    super(), K(this, t, _o, yo, Q, {
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
const Bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: po,
  Feature: wo,
  Header: ho,
  ProjectDescription: xo
}, Symbol.toStringTag, { value: "Module" }));
function Co(e) {
  let t, i, n, r, o, l;
  return {
    c() {
      t = m("div"), i = m("div"), n = m("span"), r = S(), o = m("button"), l = N(
        /*btnText*/
        e[0]
      ), k(n, "id", "mask-desc"), k(n, "class", "mask-tip-desc svelte-17awz4u"), k(o, "id", "next-step-btn"), k(o, "class", "mask-tip-btn svelte-17awz4u"), k(i, "class", "mask-tip svelte-17awz4u"), X(t, "display", "none");
    },
    m(s, u) {
      z(s, t, u), g(t, i), g(i, n), g(i, r), g(i, o), g(o, l), e[6](i), e[7](t);
    },
    p(s, [u]) {
      u & /*btnText*/
      1 && H(
        l,
        /*btnText*/
        s[0]
      );
    },
    i: R,
    o: R,
    d(s) {
      s && L(t), e[6](null), e[7](null);
    }
  };
}
function So(e, t, i) {
  let n, r, { gapWidth: o = 5 } = t, { isStart: l } = t, { stepArr: s = [] } = t, { btnText: u = "下一步" } = t;
  const a = (d) => {
    if (d.length === 0) {
      i(1, n.style.display = "none", n);
      return;
    }
    const { id: h, desc: p } = d[0];
    var _ = document.getElementById(h), b = _.offsetWidth, w = _.offsetHeight, v = _.offsetLeft, I = _.offsetTop;
    console.log("待镂空元素: ", b, w, v, I);
    var T = document.body.scrollWidth, A = document.body.scrollHeight;
    i(1, n.style.width = T + "px", n), i(1, n.style.height = A + "px", n), i(1, n.style.position = "absolute", n), i(1, n.style.left = 0, n), i(1, n.style.top = 0, n), i(1, n.style.display = "block", n), i(1, n.style.boxSizing = "border-box", n), i(1, n.style.borderColor = "rgba(0, 0, 0, 0.75)", n), i(1, n.style.borderStyle = "solid", n), i(1, n.style.borderLeftWidth = v - o + "px", n), i(1, n.style.borderRightWidth = T - b - v - o + "px", n), i(1, n.style.borderTopWidth = I - o + "px", n), i(1, n.style.borderBottomWidth = A - w - I - o + "px", n), i(2, r.style.top = w + o * 2 + 10 + "px", r), i(2, r.style.left = "50%", r);
    var C = document.getElementById("mask-desc");
    C.innerHTML = p;
    var G = document.getElementById("next-step-btn");
    G.onclick = function() {
      d.shift(), a(d);
    };
  };
  function c(d) {
    ot[d ? "unshift" : "push"](() => {
      r = d, i(2, r);
    });
  }
  function f(d) {
    ot[d ? "unshift" : "push"](() => {
      n = d, i(1, n);
    });
  }
  return e.$$set = (d) => {
    "gapWidth" in d && i(3, o = d.gapWidth), "isStart" in d && i(4, l = d.isStart), "stepArr" in d && i(5, s = d.stepArr), "btnText" in d && i(0, u = d.btnText);
  }, e.$$.update = () => {
    e.$$.dirty & /*isStart, stepArr*/
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
class Go extends J {
  constructor(t) {
    super(), K(this, t, So, Co, Q, {
      gapWidth: 3,
      isStart: 4,
      stepArr: 5,
      btnText: 0
    });
  }
}
function Io(e) {
  let t, i, n = (
    /*Letter*/
    (e[2].substring(0, 1) || "A") + ""
  ), r, o, l;
  return {
    c() {
      t = m("button"), i = m("span"), r = N(n), k(i, "class", "letter svelte-1qpz8gt"), X(i, "font-size", `${/*size*/
      e[0] * 2 / 3}px`), k(t, "class", "icon svelte-1qpz8gt"), X(t, "width", `${/*size*/
      e[0]}px`), X(t, "height", `${/*size*/
      e[0]}px`), X(
        t,
        "background-color",
        /*color*/
        e[1]
      );
    },
    m(s, u) {
      z(s, t, u), g(t, i), g(i, r), o || (l = $(t, "click", function() {
        Vt(
          /*onClick*/
          e[3]
        ) && e[3].apply(this, arguments);
      }), o = !0);
    },
    p(s, [u]) {
      e = s, u & /*Letter*/
      4 && n !== (n = /*Letter*/
      (e[2].substring(0, 1) || "A") + "") && H(r, n), u & /*size*/
      1 && X(i, "font-size", `${/*size*/
      e[0] * 2 / 3}px`), u & /*size*/
      1 && X(t, "width", `${/*size*/
      e[0]}px`), u & /*size*/
      1 && X(t, "height", `${/*size*/
      e[0]}px`), u & /*color*/
      2 && X(
        t,
        "background-color",
        /*color*/
        e[1]
      );
    },
    i: R,
    o: R,
    d(s) {
      s && L(t), o = !1, l();
    }
  };
}
function Mo(e, t, i) {
  let { size: n = 128 } = t, { color: r = "green" } = t, { Letter: o = "A" } = t, { onClick: l = () => {
  } } = t;
  return e.$$set = (s) => {
    "size" in s && i(0, n = s.size), "color" in s && i(1, r = s.color), "Letter" in s && i(2, o = s.Letter), "onClick" in s && i(3, l = s.onClick);
  }, [n, r, o, l];
}
class Ho extends J {
  constructor(t) {
    super(), K(this, t, Mo, Io, Q, { size: 0, color: 1, Letter: 2, onClick: 3 });
  }
}
function To(e) {
  let t, i, n, r, o, l, s, u, a, c, f, d, h, p, _, b, w, v, I, T, A, C, G, j;
  return {
    c() {
      t = m("div"), i = m("div"), n = m("img"), o = S(), l = m("div"), s = S(), u = m("button"), u.innerHTML = '<span class="uikit-absolute uikit-top-1/2 uikit-left-1/2 -uikit-translate-y-1/2 -uikit-translate-x-1/2 uikit-transform"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path></svg></span>', a = S(), c = m("div"), f = m("div"), d = m("h5"), h = N(
        /*title*/
        e[1]
      ), p = S(), _ = m("p"), _.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="-uikit-mt-0.5 uikit-h-5 uikit-w-5 uikit-text-yellow-700"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg>
                5.0`, b = S(), w = m("p"), v = N(
        /*desc*/
        e[2]
      ), I = S(), T = m("div"), A = S(), C = m("div"), G = m("button"), j = N(
        /*button*/
        e[3]
      ), bt(n.src, r = /*covers*/
      e[0][0]) || k(n, "src", r), k(n, "alt", "ui/ux review check"), k(l, "class", "uikit-to-bg-black-10 uikit-absolute uikit-inset-0 uikit-h-full uikit-w-full uikit-bg-gradient-to-tr uikit-from-transparent uikit-via-transparent uikit-to-black/60"), k(u, "class", "!uikit-absolute uikit-top-4 uikit-right-4 uikit-h-8 uikit-max-h-[32px] uikit-w-8 uikit-max-w-[32px] uikit-select-none uikit-rounded-full uikit-text-center uikit-align-middle uikit-font-sans uikit-text-xs uikit-font-medium uikit-uppercase uikit-text-red-500 uikit-transition-all hover:uikit-bg-red-500/10 active:uikit-bg-red-500/30 disabled:uikit-pointer-events-none disabled:uikit-opacity-50 disabled:uikit-shadow-none"), k(u, "type", "button"), k(u, "data-ripple-dark", "true"), k(i, "class", "uikit-relative uikit-mx-4 uikit-mt-4 uikit-overflow-hidden uikit-rounded-xl uikit-bg-blue-gray-500 uikit-bg-clip-border uikit-text-white uikit-shadow-lg uikit-shadow-blue-gray-500/40"), k(d, "class", "uikit-block uikit-font-sans uikit-text-xl uikit-font-medium uikit-leading-snug uikit-tracking-normal uikit-text-blue-gray-900 uikit-antialiased"), k(_, "class", "uikit-flex uikit-items-center uikit-gap-1.5 uikit-font-sans uikit-text-base uikit-font-normal uikit-leading-relaxed uikit-text-blue-gray-900 uikit-antialiased"), k(f, "class", "uikit-mb-3 uikit-flex uikit-items-center uikit-justify-between"), k(w, "class", "uikit-block uikit-font-sans uikit-text-base uikit-font-light uikit-leading-relaxed uikit-text-gray-700 uikit-antialiased"), k(T, "class", "uikit-group uikit-mt-8 uikit-inline-flex uikit-flex-wrap uikit-items-center uikit-gap-3"), k(c, "class", "uikit-p-6"), k(G, "class", "uikit-block uikit-w-full uikit-select-none uikit-rounded-lg uikit-bg-pink-500 uikit-py-3.5 uikit-px-7 uikit-text-center uikit-align-middle uikit-font-sans uikit-text-sm uikit-font-bold uikit-uppercase uikit-text-white uikit-shadow-md uikit-shadow-pink-500/20 uikit-transition-all hover:uikit-shadow-lg hover:uikit-shadow-pink-500/40 focus:uikit-opacity-[0.85] focus:uikit-shadow-none active:uikit-opacity-[0.85] active:uikit-shadow-none disabled:uikit-pointer-events-none disabled:uikit-opacity-50 disabled:uikit-shadow-none"), k(G, "type", "button"), k(G, "data-ripple-light", "true"), k(C, "class", "uikit-p-6 uikit-pt-3"), k(t, "class", "uikit-relative uikit-flex w-full uikit-max-w-[26rem] uikit-flex-col uikit-rounded-xl uikit-bg-white uikit-bg-clip-border uikit-text-gray-700 uikit-shadow-lg");
    },
    m(P, F) {
      z(P, t, F), g(t, i), g(i, n), g(i, o), g(i, l), g(i, s), g(i, u), g(t, a), g(t, c), g(c, f), g(f, d), g(d, h), g(f, p), g(f, _), g(c, b), g(c, w), g(w, v), g(c, I), g(c, T), e[6](T), g(t, A), g(t, C), g(C, G), g(G, j);
    },
    p(P, [F]) {
      F & /*covers*/
      1 && !bt(n.src, r = /*covers*/
      P[0][0]) && k(n, "src", r), F & /*title*/
      2 && H(
        h,
        /*title*/
        P[1]
      ), F & /*desc*/
      4 && H(
        v,
        /*desc*/
        P[2]
      ), F & /*button*/
      8 && H(
        j,
        /*button*/
        P[3]
      );
    },
    i: R,
    o: R,
    d(P) {
      P && L(t), e[6](null);
    }
  };
}
function Eo(e, t, i) {
  let { covers: n = [
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
  ] } = t, { title: r = "a title" } = t, { desc: o = "a desc desc desc" } = t, { body: l = "" } = t, { button: s = "todo" } = t, u;
  function a(c) {
    ot[c ? "unshift" : "push"](() => {
      u = c, i(4, u), i(5, l);
    });
  }
  return e.$$set = (c) => {
    "covers" in c && i(0, n = c.covers), "title" in c && i(1, r = c.title), "desc" in c && i(2, o = c.desc), "body" in c && i(5, l = c.body), "button" in c && i(3, s = c.button);
  }, e.$$.update = () => {
    e.$$.dirty & /*body, cardbody*/
    48;
  }, [n, r, o, s, u, l, a];
}
class Ro extends J {
  constructor(t) {
    super(), K(this, t, Eo, To, Q, {
      covers: 0,
      title: 1,
      desc: 2,
      body: 5,
      button: 3
    });
  }
}
export {
  Ro as Card,
  Ho as CircleIcon,
  Oo as ContextMenu,
  Bo as Layout,
  No as Modal,
  Po as Sidebar,
  Go as StepMask,
  zo as confirm,
  jo as notify
};
