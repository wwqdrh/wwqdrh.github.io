var Sn = Object.defineProperty;
var In = (e, t, i) => t in e ? Sn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var te = (e, t, i) => (In(e, typeof t != "symbol" ? t + "" : t, i), i);
function R() {
}
const Zi = (e) => e;
function Ut(e, t) {
  for (const i in t)
    e[i] = t[i];
  return (
    /** @type {T & S} */
    e
  );
}
function Qi(e) {
  return e();
}
function Ie() {
  return /* @__PURE__ */ Object.create(null);
}
function dt(e) {
  e.forEach(Qi);
}
function Nt(e) {
  return typeof e == "function";
}
function Z(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let Gt;
function it(e, t) {
  return e === t ? !0 : (Gt || (Gt = document.createElement("a")), Gt.href = t, e === Gt.href);
}
function Mn(e) {
  return Object.keys(e).length === 0;
}
function Me(e) {
  const t = {};
  for (const i in e)
    i[0] !== "$" && (t[i] = e[i]);
  return t;
}
const Yi = typeof window < "u";
let Tn = Yi ? () => window.performance.now() : () => Date.now(), me = Yi ? (e) => requestAnimationFrame(e) : R;
const wt = /* @__PURE__ */ new Set();
function Ki(e) {
  wt.forEach((t) => {
    t.c(e) || (wt.delete(t), t.f());
  }), wt.size !== 0 && me(Ki);
}
function jn(e) {
  let t;
  return wt.size === 0 && me(Ki), {
    promise: new Promise((i) => {
      wt.add(t = { c: e, f: i });
    }),
    abort() {
      wt.delete(t);
    }
  };
}
function k(e, t) {
  e.appendChild(t);
}
function Ji(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function En(e) {
  const t = p("style");
  return t.textContent = "/* empty */", An(Ji(e), t), t.sheet;
}
function An(e, t) {
  return k(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function j(e, t, i) {
  e.insertBefore(t, i || null);
}
function T(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function X(e, t) {
  for (let i = 0; i < e.length; i += 1)
    e[i] && e[i].d(t);
}
function p(e) {
  return document.createElement(e);
}
function Ln(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function O(e) {
  return document.createTextNode(e);
}
function M() {
  return O(" ");
}
function pt() {
  return O("");
}
function U(e, t, i, n) {
  return e.addEventListener(t, i, n), () => e.removeEventListener(t, i, n);
}
function g(e, t, i) {
  i == null ? e.removeAttribute(t) : e.getAttribute(t) !== i && e.setAttribute(t, i);
}
const zn = ["width", "height"];
function Te(e, t) {
  const i = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const n in t)
    t[n] == null ? e.removeAttribute(n) : n === "style" ? e.style.cssText = t[n] : n === "__value" ? e.value = e[n] = t[n] : i[n] && i[n].set && zn.indexOf(n) === -1 ? e[n] = t[n] : g(e, n, t[n]);
}
function je(e, t) {
  for (const i in t)
    g(e, i, t[i]);
}
function Pn(e) {
  return Array.from(e.childNodes);
}
function H(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function J(e, t, i, n) {
  i == null ? e.style.removeProperty(t) : e.style.setProperty(t, i, n ? "important" : "");
}
function xt(e, t, i) {
  e.classList.toggle(t, !!i);
}
function Xi(e, t, { bubbles: i = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: i, cancelable: n });
}
const Zt = /* @__PURE__ */ new Map();
let Qt = 0;
function On(e) {
  let t = 5381, i = e.length;
  for (; i--; )
    t = (t << 5) - t ^ e.charCodeAt(i);
  return t >>> 0;
}
function Bn(e, t) {
  const i = { stylesheet: En(t), rules: {} };
  return Zt.set(e, i), i;
}
function Ee(e, t, i, n, l, r, o, s = 0) {
  const u = 16.666 / n;
  let f = `{
`;
  for (let v = 0; v <= 1; v += u) {
    const _ = t + (i - t) * r(v);
    f += v * 100 + `%{${o(_, 1 - _)}}
`;
  }
  const c = f + `100% {${o(i, 1 - i)}}
}`, a = `__svelte_${On(c)}_${s}`, d = Ji(e), { stylesheet: h, rules: m } = Zt.get(d) || Bn(d, e);
  m[a] || (m[a] = !0, h.insertRule(`@keyframes ${a} ${c}`, h.cssRules.length));
  const w = e.style.animation || "";
  return e.style.animation = `${w ? `${w}, ` : ""}${a} ${n}ms linear ${l}ms 1 both`, Qt += 1, a;
}
function Nn(e, t) {
  const i = (e.style.animation || "").split(", "), n = i.filter(
    t ? (r) => r.indexOf(t) < 0 : (r) => r.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), l = i.length - n.length;
  l && (e.style.animation = n.join(", "), Qt -= l, Qt || Hn());
}
function Hn() {
  me(() => {
    Qt || (Zt.forEach((e) => {
      const { ownerNode: t } = e.stylesheet;
      t && T(t);
    }), Zt.clear());
  });
}
let zt;
function At(e) {
  zt = e;
}
function pe() {
  if (!zt)
    throw new Error("Function called outside component initialization");
  return zt;
}
function kt(e) {
  pe().$$.on_mount.push(e);
}
function $i(e) {
  pe().$$.on_destroy.push(e);
}
function Ct() {
  const e = pe();
  return (t, i, { cancelable: n = !1 } = {}) => {
    const l = e.$$.callbacks[t];
    if (l) {
      const r = Xi(
        /** @type {string} */
        t,
        i,
        { cancelable: n }
      );
      return l.slice().forEach((o) => {
        o.call(e, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
const _t = [], ft = [];
let yt = [];
const Ae = [], Gn = /* @__PURE__ */ Promise.resolve();
let oe = !1;
function Rn() {
  oe || (oe = !0, Gn.then(tn));
}
function Pt(e) {
  yt.push(e);
}
const ee = /* @__PURE__ */ new Set();
let vt = 0;
function tn() {
  if (vt !== 0)
    return;
  const e = zt;
  do {
    try {
      for (; vt < _t.length; ) {
        const t = _t[vt];
        vt++, At(t), Wn(t.$$);
      }
    } catch (t) {
      throw _t.length = 0, vt = 0, t;
    }
    for (At(null), _t.length = 0, vt = 0; ft.length; )
      ft.pop()();
    for (let t = 0; t < yt.length; t += 1) {
      const i = yt[t];
      ee.has(i) || (ee.add(i), i());
    }
    yt.length = 0;
  } while (_t.length);
  for (; Ae.length; )
    Ae.pop()();
  oe = !1, ee.clear(), At(e);
}
function Wn(e) {
  if (e.fragment !== null) {
    e.update(), dt(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Pt);
  }
}
function Fn(e) {
  const t = [], i = [];
  yt.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : i.push(n)), i.forEach((n) => n()), yt = t;
}
let Mt;
function Dn() {
  return Mt || (Mt = Promise.resolve(), Mt.then(() => {
    Mt = null;
  })), Mt;
}
function ie(e, t, i) {
  e.dispatchEvent(Xi(`${t ? "intro" : "outro"}${i}`));
}
const Dt = /* @__PURE__ */ new Set();
let at;
function tt() {
  at = {
    r: 0,
    c: [],
    p: at
    // parent group
  };
}
function et() {
  at.r || dt(at.c), at = at.p;
}
function A(e, t) {
  e && e.i && (Dt.delete(e), e.i(t));
}
function P(e, t, i, n) {
  if (e && e.o) {
    if (Dt.has(e))
      return;
    Dt.add(e), at.c.push(() => {
      Dt.delete(e), n && (i && e.d(1), n());
    }), e.o(t);
  } else
    n && n();
}
const Vn = { duration: 0 };
function Le(e, t, i, n) {
  let r = t(e, i, { direction: "both" }), o = n ? 0 : 1, s = null, u = null, f = null, c;
  function a() {
    f && Nn(e, f);
  }
  function d(m, w) {
    const v = (
      /** @type {Program['d']} */
      m.b - o
    );
    return w *= Math.abs(v), {
      a: o,
      b: m.b,
      d: v,
      duration: w,
      start: m.start,
      end: m.start + w,
      group: m.group
    };
  }
  function h(m) {
    const {
      delay: w = 0,
      duration: v = 300,
      easing: _ = Zi,
      tick: b = R,
      css: I
    } = r || Vn, C = {
      start: Tn() + w,
      b: m
    };
    m || (C.group = at, at.r += 1), "inert" in e && (m ? c !== void 0 && (e.inert = c) : (c = /** @type {HTMLElement} */
    e.inert, e.inert = !0)), s || u ? u = C : (I && (a(), f = Ee(e, o, m, v, w, _, I)), m && b(0, 1), s = d(C, v), Pt(() => ie(e, m, "start")), jn((E) => {
      if (u && E > u.start && (s = d(u, v), u = null, ie(e, s.b, "start"), I && (a(), f = Ee(
        e,
        o,
        s.b,
        s.duration,
        0,
        _,
        r.css
      ))), s) {
        if (E >= s.end)
          b(o = s.b, 1 - o), ie(e, s.b, "end"), u || (s.b ? a() : --s.group.r || dt(s.group.c)), s = null;
        else if (E >= s.start) {
          const S = E - s.start;
          o = s.a + s.d * _(S / s.duration), b(o, 1 - o);
        }
      }
      return !!(s || u);
    }));
  }
  return {
    run(m) {
      Nt(r) ? Dn().then(() => {
        r = r({ direction: m ? "in" : "out" }), h(m);
      }) : h(m);
    },
    end() {
      a(), s = u = null;
    }
  };
}
function G(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function en(e, t) {
  const i = {}, n = {}, l = { $$scope: 1 };
  let r = e.length;
  for (; r--; ) {
    const o = e[r], s = t[r];
    if (s) {
      for (const u in o)
        u in s || (n[u] = 1);
      for (const u in s)
        l[u] || (i[u] = s[u], l[u] = 1);
      e[r] = s;
    } else
      for (const u in o)
        l[u] = 1;
  }
  for (const o in n)
    o in i || (i[o] = void 0);
  return i;
}
function ot(e) {
  e && e.c();
}
function nt(e, t, i) {
  const { fragment: n, after_update: l } = e.$$;
  n && n.m(t, i), Pt(() => {
    const r = e.$$.on_mount.map(Qi).filter(Nt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...r) : dt(r), e.$$.on_mount = [];
  }), l.forEach(Pt);
}
function lt(e, t) {
  const i = e.$$;
  i.fragment !== null && (Fn(i.after_update), dt(i.on_destroy), i.fragment && i.fragment.d(t), i.on_destroy = i.fragment = null, i.ctx = []);
}
function qn(e, t) {
  e.$$.dirty[0] === -1 && (_t.push(e), Rn(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Q(e, t, i, n, l, r, o, s = [-1]) {
  const u = zt;
  At(e);
  const f = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: R,
    not_equal: l,
    bound: Ie(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: Ie(),
    dirty: s,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  o && o(f.root);
  let c = !1;
  if (f.ctx = i ? i(e, t.props || {}, (a, d, ...h) => {
    const m = h.length ? h[0] : d;
    return f.ctx && l(f.ctx[a], f.ctx[a] = m) && (!f.skip_bound && f.bound[a] && f.bound[a](m), c && qn(e, a)), d;
  }) : [], f.update(), c = !0, dt(f.before_update), f.fragment = n ? n(f.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = Pn(t.target);
      f.fragment && f.fragment.l(a), a.forEach(T);
    } else
      f.fragment && f.fragment.c();
    t.intro && A(e.$$.fragment), nt(e, t.target, t.anchor), tn();
  }
  At(u);
}
class Y {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    te(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    te(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    lt(this, 1), this.$destroy = R;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, i) {
    if (!Nt(i))
      return R;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(i), () => {
      const l = n.indexOf(i);
      l !== -1 && n.splice(l, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Mn(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Un = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Un);
function Zn(e) {
  let t, i, n, l, r, o, s, u, f;
  return {
    c() {
      t = p("div"), i = p("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"></path></svg>', n = M(), l = p("div"), r = p("div"), o = p("span"), o.textContent = "Success", s = M(), u = p("p"), f = O(
        /*msg*/
        e[0]
      ), g(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-emerald-500"), g(o, "class", "uikit-font-semibold uikit-text-emerald-500 dark:uikit-text-emerald-400"), g(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), g(r, "class", "uikit-mx-3"), g(l, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), g(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, a) {
      j(c, t, a), k(t, i), k(t, n), k(t, l), k(l, r), k(r, o), k(r, s), k(r, u), k(u, f);
    },
    p(c, [a]) {
      a & /*msg*/
      1 && H(
        f,
        /*msg*/
        c[0]
      );
    },
    i: R,
    o: R,
    d(c) {
      c && T(t);
    }
  };
}
function Qn(e, t, i) {
  let { msg: n = "" } = t, { duration: l = 3e3 } = t;
  const r = Ct();
  return kt(() => {
    setTimeout(
      () => {
        r("onEnd");
      },
      l
    );
  }), e.$$set = (o) => {
    "msg" in o && i(0, n = o.msg), "duration" in o && i(1, l = o.duration);
  }, [n, l];
}
class Yn extends Y {
  constructor(t) {
    super(), Q(this, t, Qn, Zn, Z, { msg: 0, duration: 1 });
  }
}
function Kn(e) {
  let t, i, n, l, r, o, s, u, f;
  return {
    c() {
      t = p("div"), i = p("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', n = M(), l = p("div"), r = p("div"), o = p("span"), o.textContent = "Info", s = M(), u = p("p"), f = O(
        /*msg*/
        e[0]
      ), g(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-blue-500"), g(o, "class", "uikit-font-semibold uikit-text-blue-500 dark:uikit-text-blue-400"), g(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), g(r, "class", "uikit-mx-3"), g(l, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), g(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, a) {
      j(c, t, a), k(t, i), k(t, n), k(t, l), k(l, r), k(r, o), k(r, s), k(r, u), k(u, f);
    },
    p(c, [a]) {
      a & /*msg*/
      1 && H(
        f,
        /*msg*/
        c[0]
      );
    },
    i: R,
    o: R,
    d(c) {
      c && T(t);
    }
  };
}
function Jn(e, t, i) {
  let { msg: n = "" } = t, { duration: l = 3e3 } = t;
  const r = Ct();
  return kt(() => {
    setTimeout(
      () => {
        r("onEnd");
      },
      l
    );
  }), e.$$set = (o) => {
    "msg" in o && i(0, n = o.msg), "duration" in o && i(1, l = o.duration);
  }, [n, l];
}
class ze extends Y {
  constructor(t) {
    super(), Q(this, t, Jn, Kn, Z, { msg: 0, duration: 1 });
  }
}
function Xn(e) {
  let t, i, n, l, r, o, s, u, f;
  return {
    c() {
      t = p("div"), i = p("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"></path></svg>', n = M(), l = p("div"), r = p("div"), o = p("span"), o.textContent = "Warning", s = M(), u = p("p"), f = O(
        /*msg*/
        e[0]
      ), g(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-yellow-400"), g(o, "class", "uikit-font-semibold uikit-text-yellow-400 dark:uikit-text-yellow-300"), g(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), g(r, "class", "uikit-mx-3"), g(l, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), g(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, a) {
      j(c, t, a), k(t, i), k(t, n), k(t, l), k(l, r), k(r, o), k(r, s), k(r, u), k(u, f);
    },
    p(c, [a]) {
      a & /*msg*/
      1 && H(
        f,
        /*msg*/
        c[0]
      );
    },
    i: R,
    o: R,
    d(c) {
      c && T(t);
    }
  };
}
function $n(e, t, i) {
  let { msg: n = "" } = t, { duration: l = 3e3 } = t;
  const r = Ct();
  return kt(() => {
    setTimeout(
      () => {
        r("onEnd");
      },
      l
    );
  }), e.$$set = (o) => {
    "msg" in o && i(0, n = o.msg), "duration" in o && i(1, l = o.duration);
  }, [n, l];
}
class tl extends Y {
  constructor(t) {
    super(), Q(this, t, $n, Xn, Z, { msg: 0, duration: 1 });
  }
}
function el(e) {
  let t, i, n, l, r, o, s, u, f;
  return {
    c() {
      t = p("div"), i = p("div"), i.innerHTML = '<svg class="uikit-w-6 uikit-h-6 uikit-text-white uikit-fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"></path></svg>', n = M(), l = p("div"), r = p("div"), o = p("span"), o.textContent = "Error", s = M(), u = p("p"), f = O(
        /*msg*/
        e[0]
      ), g(i, "class", "uikit-flex uikit-items-center uikit-justify-center uikit-w-12 uikit-bg-red-500"), g(o, "class", "uikit-font-semibold uikit-text-red-500 dark:uikit-text-red-400"), g(u, "class", "uikit-text-sm uikit-text-gray-600 dark:uikit-text-gray-200"), g(r, "class", "uikit-mx-3"), g(l, "class", "uikit-px-4 uikit-py-2 uikit--mx-3"), g(t, "class", "uikit-flex uikit-w-full uikit-max-w-sm uikit-overflow-hidden uikit-bg-white uikit-rounded-lg uikit-shadow-md dark:uikit-bg-gray-800");
    },
    m(c, a) {
      j(c, t, a), k(t, i), k(t, n), k(t, l), k(l, r), k(r, o), k(r, s), k(r, u), k(u, f);
    },
    p(c, [a]) {
      a & /*msg*/
      1 && H(
        f,
        /*msg*/
        c[0]
      );
    },
    i: R,
    o: R,
    d(c) {
      c && T(t);
    }
  };
}
function il(e, t, i) {
  let { msg: n = "" } = t, { duration: l = 3e3 } = t;
  const r = Ct();
  return kt(() => {
    setTimeout(
      () => {
        r("onEnd");
      },
      l
    );
  }), e.$$set = (o) => {
    "msg" in o && i(0, n = o.msg), "duration" in o && i(1, l = o.duration);
  }, [n, l];
}
let nl = class extends Y {
  constructor(t) {
    super(), Q(this, t, il, el, Z, { msg: 0, duration: 1 });
  }
};
const Pe = "uikit_msg_panel";
let ne = 0;
const Bo = (e) => {
  ne += 1;
  let t = window.document.getElementById(Pe);
  t || (t = window.document.createElement("div"), t.id = Pe, t.style.position = "absolute", t.style.top = "5px", t.style.right = "5px", t.style.display = "flex", t.style.flexDirection = "column", t.style.rowGap = "10px", t.style.zIndex = "100", document.body.appendChild(t));
  const i = window.document.createElement("div");
  t.appendChild(i);
  let n;
  switch (e.type) {
    case "success":
      n = new Yn({
        target: i,
        props: {
          ...e
        }
      });
      break;
    case "info":
      n = new ze({
        target: i,
        props: {
          ...e
        }
      });
      break;
    case "warn":
      n = new tl({
        target: i,
        props: {
          ...e
        }
      });
      break;
    case "error":
      n = new nl({
        target: i,
        props: {
          ...e
        }
      });
      break;
    default:
      n = new ze({
        target: i,
        props: {
          ...e
        }
      });
      break;
  }
  return n.$on("onEnd", () => {
    n.$destroy(), ne -= 1, ne == 0 && document.body.removeChild(t);
  }), n;
}, Rt = (e) => Object.entries(e).map(([t, i]) => `${t}: ${i};`).join(" ");
function ll(e) {
  let t, i, n, l, r, o, s, u, f, c, a, d, h, m, w, v, _, b, I, C;
  return {
    c() {
      t = p("div"), i = p("div"), n = p("div"), l = p("div"), r = O(
        /*title*/
        e[0]
      ), o = M(), s = p("div"), u = p("div"), f = O(
        /*content*/
        e[1]
      ), c = M(), a = p("div"), d = p("div"), h = O(
        /*cancelText*/
        e[2]
      ), w = M(), v = p("div"), _ = O(
        /*okText*/
        e[3]
      ), g(l, "class", "modal-title svelte-f901x2"), g(s, "class", "content svelte-f901x2"), g(n, "class", "modal-content-body svelte-f901x2"), g(d, "class", "btn button-left centerLayout svelte-f901x2"), g(d, "style", m = Rt(
        /*cancelBtnStyle*/
        e[4]
      )), g(v, "class", "btn button-right centerLayout svelte-f901x2"), g(v, "style", b = Rt(
        /*okBtnStyle*/
        e[5]
      )), g(a, "class", "confirm-button-wrap svelte-f901x2"), g(i, "class", "confirm-modal-content svelte-f901x2"), g(t, "class", "confirm-modal svelte-f901x2");
    },
    m(E, S) {
      j(E, t, S), k(t, i), k(i, n), k(n, l), k(l, r), k(n, o), k(n, s), k(s, u), k(u, f), k(i, c), k(i, a), k(a, d), k(d, h), k(a, w), k(a, v), k(v, _), e[11](t), I || (C = [
        U(
          d,
          "click",
          /*onCancelClk*/
          e[8]
        ),
        U(
          v,
          "click",
          /*onOkClk*/
          e[7]
        )
      ], I = !0);
    },
    p(E, [S]) {
      S & /*title*/
      1 && H(
        r,
        /*title*/
        E[0]
      ), S & /*content*/
      2 && H(
        f,
        /*content*/
        E[1]
      ), S & /*cancelText*/
      4 && H(
        h,
        /*cancelText*/
        E[2]
      ), S & /*cancelBtnStyle*/
      16 && m !== (m = Rt(
        /*cancelBtnStyle*/
        E[4]
      )) && g(d, "style", m), S & /*okText*/
      8 && H(
        _,
        /*okText*/
        E[3]
      ), S & /*okBtnStyle*/
      32 && b !== (b = Rt(
        /*okBtnStyle*/
        E[5]
      )) && g(v, "style", b);
    },
    i: R,
    o: R,
    d(E) {
      E && T(t), e[11](null), I = !1, dt(C);
    }
  };
}
function rl(e, t, i) {
  let { title: n = "" } = t, { content: l = "" } = t, { cancelText: r = "取消" } = t, { okText: o = "确定" } = t, { onCancel: s = () => {
  } } = t, { onOk: u = () => {
  } } = t, { cancelBtnStyle: f = "" } = t, { okBtnStyle: c = "" } = t;
  const a = Ct();
  let d;
  const h = () => {
    u(), a("onOk");
  }, m = () => {
    s(), a("onCancel");
  };
  function w(v) {
    ft[v ? "unshift" : "push"](() => {
      d = v, i(6, d);
    });
  }
  return e.$$set = (v) => {
    "title" in v && i(0, n = v.title), "content" in v && i(1, l = v.content), "cancelText" in v && i(2, r = v.cancelText), "okText" in v && i(3, o = v.okText), "onCancel" in v && i(9, s = v.onCancel), "onOk" in v && i(10, u = v.onOk), "cancelBtnStyle" in v && i(4, f = v.cancelBtnStyle), "okBtnStyle" in v && i(5, c = v.okBtnStyle);
  }, [
    n,
    l,
    r,
    o,
    f,
    c,
    d,
    h,
    m,
    s,
    u,
    w
  ];
}
class ol extends Y {
  constructor(t) {
    super(), Q(this, t, rl, ll, Z, {
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
const No = (e) => {
  const t = window.document.createElement("div");
  document.body.appendChild(t);
  const i = new ol({
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
function nn(e) {
  var t, i, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (i = nn(e[t])) && (n && (n += " "), n += i);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function sl() {
  for (var e, t, i = 0, n = ""; i < arguments.length; )
    (e = arguments[i++]) && (t = nn(e)) && (n && (n += " "), n += t);
  return n;
}
function ul() {
  for (var e = 0, t, i, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (i = ln(t)) && (n && (n += " "), n += i);
  return n;
}
function ln(e) {
  if (typeof e == "string")
    return e;
  for (var t, i = "", n = 0; n < e.length; n++)
    e[n] && (t = ln(e[n])) && (i && (i += " "), i += t);
  return i;
}
var be = "-";
function cl(e) {
  var t = fl(e), i = e.conflictingClassGroups, n = e.conflictingClassGroupModifiers, l = n === void 0 ? {} : n;
  function r(s) {
    var u = s.split(be);
    return u[0] === "" && u.length !== 1 && u.shift(), rn(u, t) || al(s);
  }
  function o(s, u) {
    var f = i[s] || [];
    return u && l[s] ? [].concat(f, l[s]) : f;
  }
  return {
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  };
}
function rn(e, t) {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  var i = e[0], n = t.nextPart.get(i), l = n ? rn(e.slice(1), n) : void 0;
  if (l)
    return l;
  if (t.validators.length !== 0) {
    var r = e.join(be);
    return (o = t.validators.find(function(s) {
      var u = s.validator;
      return u(r);
    })) == null ? void 0 : o.classGroupId;
  }
}
var Oe = /^\[(.+)\]$/;
function al(e) {
  if (Oe.test(e)) {
    var t = Oe.exec(e)[1], i = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}
function fl(e) {
  var t = e.theme, i = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, l = kl(Object.entries(e.classGroups), i);
  return l.forEach(function(r) {
    var o = r[0], s = r[1];
    se(s, n, o, t);
  }), n;
}
function se(e, t, i, n) {
  e.forEach(function(l) {
    if (typeof l == "string") {
      var r = l === "" ? t : Be(t, l);
      r.classGroupId = i;
      return;
    }
    if (typeof l == "function") {
      if (dl(l)) {
        se(l(n), t, i, n);
        return;
      }
      t.validators.push({
        validator: l,
        classGroupId: i
      });
      return;
    }
    Object.entries(l).forEach(function(o) {
      var s = o[0], u = o[1];
      se(u, Be(t, s), i, n);
    });
  });
}
function Be(e, t) {
  var i = e;
  return t.split(be).forEach(function(n) {
    i.nextPart.has(n) || i.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(n);
  }), i;
}
function dl(e) {
  return e.isThemeGetter;
}
function kl(e, t) {
  return t ? e.map(function(i) {
    var n = i[0], l = i[1], r = l.map(function(o) {
      return typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(function(s) {
        var u = s[0], f = s[1];
        return [t + u, f];
      })) : o;
    });
    return [n, r];
  }) : e;
}
function gl(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, i = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function l(r, o) {
    i.set(r, o), t++, t > e && (t = 0, n = i, i = /* @__PURE__ */ new Map());
  }
  return {
    get: function(o) {
      var s = i.get(o);
      if (s !== void 0)
        return s;
      if ((s = n.get(o)) !== void 0)
        return l(o, s), s;
    },
    set: function(o, s) {
      i.has(o) ? i.set(o, s) : l(o, s);
    }
  };
}
var on = "!";
function hl(e) {
  var t = e.separator || ":", i = t.length === 1, n = t[0], l = t.length;
  return function(o) {
    for (var s = [], u = 0, f = 0, c, a = 0; a < o.length; a++) {
      var d = o[a];
      if (u === 0) {
        if (d === n && (i || o.slice(a, a + l) === t)) {
          s.push(o.slice(f, a)), f = a + l;
          continue;
        }
        if (d === "/") {
          c = a;
          continue;
        }
      }
      d === "[" ? u++ : d === "]" && u--;
    }
    var h = s.length === 0 ? o : o.substring(f), m = h.startsWith(on), w = m ? h.substring(1) : h, v = c && c > f ? c - f : void 0;
    return {
      modifiers: s,
      hasImportantModifier: m,
      baseClassName: w,
      maybePostfixModifierPosition: v
    };
  };
}
function ml(e) {
  if (e.length <= 1)
    return e;
  var t = [], i = [];
  return e.forEach(function(n) {
    var l = n[0] === "[";
    l ? (t.push.apply(t, i.sort().concat([n])), i = []) : i.push(n);
  }), t.push.apply(t, i.sort()), t;
}
function pl(e) {
  return {
    cache: gl(e.cacheSize),
    splitModifiers: hl(e),
    ...cl(e)
  };
}
var bl = /\s+/;
function vl(e, t) {
  var i = t.splitModifiers, n = t.getClassGroupId, l = t.getConflictingClassGroupIds, r = /* @__PURE__ */ new Set();
  return e.trim().split(bl).map(function(o) {
    var s = i(o), u = s.modifiers, f = s.hasImportantModifier, c = s.baseClassName, a = s.maybePostfixModifierPosition, d = n(a ? c.substring(0, a) : c), h = !!a;
    if (!d) {
      if (!a)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if (d = n(c), !d)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      h = !1;
    }
    var m = ml(u).join(":"), w = f ? m + on : m;
    return {
      isTailwindClass: !0,
      modifierId: w,
      classGroupId: d,
      originalClassName: o,
      hasPostfixModifier: h
    };
  }).reverse().filter(function(o) {
    if (!o.isTailwindClass)
      return !0;
    var s = o.modifierId, u = o.classGroupId, f = o.hasPostfixModifier, c = s + u;
    return r.has(c) ? !1 : (r.add(c), l(u, f).forEach(function(a) {
      return r.add(s + a);
    }), !0);
  }).reverse().map(function(o) {
    return o.originalClassName;
  }).join(" ");
}
function _l() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  var n, l, r, o = s;
  function s(f) {
    var c = t[0], a = t.slice(1), d = a.reduce(function(h, m) {
      return m(h);
    }, c());
    return n = pl(d), l = n.cache.get, r = n.cache.set, o = u, u(f);
  }
  function u(f) {
    var c = l(f);
    if (c)
      return c;
    var a = vl(f, n);
    return r(f, a), a;
  }
  return function() {
    return o(ul.apply(null, arguments));
  };
}
function q(e) {
  var t = function(n) {
    return n[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var sn = /^\[(?:([a-z-]+):)?(.+)\]$/i, wl = /^\d+\/\d+$/, yl = /* @__PURE__ */ new Set(["px", "full", "screen"]), xl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Cl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Sl = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ut(e) {
  return ht(e) || yl.has(e) || wl.test(e) || ue(e);
}
function ue(e) {
  return bt(e, "length", Al);
}
function Il(e) {
  return bt(e, "size", un);
}
function Ml(e) {
  return bt(e, "position", un);
}
function Tl(e) {
  return bt(e, "url", Ll);
}
function Wt(e) {
  return bt(e, "number", ht);
}
function ht(e) {
  return !Number.isNaN(Number(e));
}
function jl(e) {
  return e.endsWith("%") && ht(e.slice(0, -1));
}
function Tt(e) {
  return Ne(e) || bt(e, "number", Ne);
}
function W(e) {
  return sn.test(e);
}
function jt() {
  return !0;
}
function gt(e) {
  return xl.test(e);
}
function El(e) {
  return bt(e, "", zl);
}
function bt(e, t, i) {
  var n = sn.exec(e);
  return n ? n[1] ? n[1] === t : i(n[2]) : !1;
}
function Al(e) {
  return Cl.test(e);
}
function un() {
  return !1;
}
function Ll(e) {
  return e.startsWith("url(");
}
function Ne(e) {
  return Number.isInteger(Number(e));
}
function zl(e) {
  return Sl.test(e);
}
function Pl() {
  var e = q("colors"), t = q("spacing"), i = q("blur"), n = q("brightness"), l = q("borderColor"), r = q("borderRadius"), o = q("borderSpacing"), s = q("borderWidth"), u = q("contrast"), f = q("grayscale"), c = q("hueRotate"), a = q("invert"), d = q("gap"), h = q("gradientColorStops"), m = q("gradientColorStopPositions"), w = q("inset"), v = q("margin"), _ = q("opacity"), b = q("padding"), I = q("saturate"), C = q("scale"), E = q("sepia"), S = q("skew"), F = q("space"), B = q("translate"), N = function() {
    return ["auto", "contain", "none"];
  }, D = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, V = function() {
    return ["auto", W, t];
  }, L = function() {
    return [W, t];
  }, K = function() {
    return ["", ut];
  }, x = function() {
    return ["auto", ht, W];
  }, z = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, y = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, $ = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, $t = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, St = function() {
    return ["", "0", W];
  }, Se = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, It = function() {
    return [ht, Wt];
  }, Ht = function() {
    return [ht, W];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [jt],
      spacing: [ut],
      blur: ["none", "", gt, W],
      brightness: It(),
      borderColor: [e],
      borderRadius: ["none", "", "full", gt, W],
      borderSpacing: L(),
      borderWidth: K(),
      contrast: It(),
      grayscale: St(),
      hueRotate: Ht(),
      invert: St(),
      gap: L(),
      gradientColorStops: [e],
      gradientColorStopPositions: [jl, ue],
      inset: V(),
      margin: V(),
      opacity: It(),
      padding: L(),
      saturate: It(),
      scale: It(),
      sepia: St(),
      skew: Ht(),
      space: L(),
      translate: L()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", W]
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
        columns: [gt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Se()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Se()
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
        object: [].concat(z(), [W])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
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
        inset: [w]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [w]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [w]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [w]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [w]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [w]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [w]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [w]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [w]
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
        z: ["auto", Tt]
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
        flex: ["1", "auto", "initial", "none", W]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: St()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: St()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Tt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [jt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Tt]
        }, W]
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
        "grid-rows": [jt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Tt]
        }, W]
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
        "auto-cols": ["auto", "min", "max", "fr", W]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", W]
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
        justify: ["normal"].concat($t())
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
        content: ["normal"].concat($t(), ["baseline"])
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
        "place-content": [].concat($t(), ["baseline"])
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
        w: ["auto", "min", "max", "fit", W, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", W, ut]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [gt]
        }, gt, W]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [W, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", W, ut]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [W, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", gt, ue]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Wt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [jt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", W]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ht, Wt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", W, ut]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", W]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", W]
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
        decoration: [].concat(y(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ut]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", W, ut]
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
        indent: L()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W]
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
        content: ["none", W]
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
        bg: [].concat(z(), [Ml])
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
        bg: ["auto", "cover", "contain", Il]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Tl]
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
        rounded: [r]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [r]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [r]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [r]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [r]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [r]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [r]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [r]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [r]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [r]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [r]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [r]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [r]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [r]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [r]
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
        "border-opacity": [_]
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
        "divide-opacity": [_]
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
        border: [l]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [l]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [l]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [l]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [l]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [l]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [l]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [l]
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
        "outline-offset": [W, ut]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ut]
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
        ring: K()
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
        "ring-offset": [ut]
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
        shadow: ["", "inner", "none", gt, El]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [jt]
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
        "mix-blend": $()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": $()
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
        "drop-shadow": ["", "none", gt, W]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
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
        invert: [a]
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
        sepia: [E]
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
        "backdrop-grayscale": [f]
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
        "backdrop-invert": [a]
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
        "backdrop-saturate": [I]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
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
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", W]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Ht()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", W]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Ht()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", W]
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
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Tt, W]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [B]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [B]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [S]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [S]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", W]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W]
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
        "scroll-m": L()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": L()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": L()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": L()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": L()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": L()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": L()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": L()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": L()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": L()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": L()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": L()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": L()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": L()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": L()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": L()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": L()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": L()
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
        "will-change": ["auto", "scroll", "contents", "transform", W]
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
        stroke: [ut, Wt]
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
var Ol = /* @__PURE__ */ _l(Pl);
function st(...e) {
  return Ol(sl(e));
}
const Lt = /^[a-z0-9]+(-[a-z0-9]+)*$/, Kt = (e, t, i, n = "") => {
  const l = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (l.length < 2 || l.length > 3)
      return null;
    n = l.shift().slice(1);
  }
  if (l.length > 3 || !l.length)
    return null;
  if (l.length > 1) {
    const s = l.pop(), u = l.pop(), f = {
      // Allow provider without '@': "provider:prefix:name"
      provider: l.length > 0 ? l[0] : n,
      prefix: u,
      name: s
    };
    return t && !Vt(f) ? null : f;
  }
  const r = l[0], o = r.split("-");
  if (o.length > 1) {
    const s = {
      provider: n,
      prefix: o.shift(),
      name: o.join("-")
    };
    return t && !Vt(s) ? null : s;
  }
  if (i && n === "") {
    const s = {
      provider: n,
      prefix: "",
      name: r
    };
    return t && !Vt(s, i) ? null : s;
  }
  return null;
}, Vt = (e, t) => e ? !!((e.provider === "" || e.provider.match(Lt)) && (t && e.prefix === "" || e.prefix.match(Lt)) && e.name.match(Lt)) : !1, cn = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), Yt = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Jt = Object.freeze({
  ...cn,
  ...Yt
}), ce = Object.freeze({
  ...Jt,
  body: "",
  hidden: !1
});
function Bl(e, t) {
  const i = {};
  !e.hFlip != !t.hFlip && (i.hFlip = !0), !e.vFlip != !t.vFlip && (i.vFlip = !0);
  const n = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return n && (i.rotate = n), i;
}
function He(e, t) {
  const i = Bl(e, t);
  for (const n in ce)
    n in Yt ? n in e && !(n in i) && (i[n] = Yt[n]) : n in t ? i[n] = t[n] : n in e && (i[n] = e[n]);
  return i;
}
function Nl(e, t) {
  const i = e.icons, n = e.aliases || /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  function r(o) {
    if (i[o])
      return l[o] = [];
    if (!(o in l)) {
      l[o] = null;
      const s = n[o] && n[o].parent, u = s && r(s);
      u && (l[o] = [s].concat(u));
    }
    return l[o];
  }
  return (t || Object.keys(i).concat(Object.keys(n))).forEach(r), l;
}
function Hl(e, t, i) {
  const n = e.icons, l = e.aliases || /* @__PURE__ */ Object.create(null);
  let r = {};
  function o(s) {
    r = He(
      n[s] || l[s],
      r
    );
  }
  return o(t), i.forEach(o), He(e, r);
}
function an(e, t) {
  const i = [];
  if (typeof e != "object" || typeof e.icons != "object")
    return i;
  e.not_found instanceof Array && e.not_found.forEach((l) => {
    t(l, null), i.push(l);
  });
  const n = Nl(e);
  for (const l in n) {
    const r = n[l];
    r && (t(l, Hl(e, l, r)), i.push(l));
  }
  return i;
}
const Gl = {
  provider: "",
  aliases: {},
  not_found: {},
  ...cn
};
function le(e, t) {
  for (const i in t)
    if (i in e && typeof e[i] != typeof t[i])
      return !1;
  return !0;
}
function fn(e) {
  if (typeof e != "object" || e === null)
    return null;
  const t = e;
  if (typeof t.prefix != "string" || !e.icons || typeof e.icons != "object" || !le(e, Gl))
    return null;
  const i = t.icons;
  for (const l in i) {
    const r = i[l];
    if (!l.match(Lt) || typeof r.body != "string" || !le(
      r,
      ce
    ))
      return null;
  }
  const n = t.aliases || /* @__PURE__ */ Object.create(null);
  for (const l in n) {
    const r = n[l], o = r.parent;
    if (!l.match(Lt) || typeof o != "string" || !i[o] && !n[o] || !le(
      r,
      ce
    ))
      return null;
  }
  return t;
}
const Ge = /* @__PURE__ */ Object.create(null);
function Rl(e, t) {
  return {
    provider: e,
    prefix: t,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function mt(e, t) {
  const i = Ge[e] || (Ge[e] = /* @__PURE__ */ Object.create(null));
  return i[t] || (i[t] = Rl(e, t));
}
function ve(e, t) {
  return fn(t) ? an(t, (i, n) => {
    n ? e.icons[i] = n : e.missing.add(i);
  }) : [];
}
function Wl(e, t, i) {
  try {
    if (typeof i.body == "string")
      return e.icons[t] = { ...i }, !0;
  } catch {
  }
  return !1;
}
let Ot = !1;
function dn(e) {
  return typeof e == "boolean" && (Ot = e), Ot;
}
function Fl(e) {
  const t = typeof e == "string" ? Kt(e, !0, Ot) : e;
  if (t) {
    const i = mt(t.provider, t.prefix), n = t.name;
    return i.icons[n] || (i.missing.has(n) ? null : void 0);
  }
}
function Dl(e, t) {
  const i = Kt(e, !0, Ot);
  if (!i)
    return !1;
  const n = mt(i.provider, i.prefix);
  return Wl(n, i.name, t);
}
function Vl(e, t) {
  if (typeof e != "object")
    return !1;
  if (typeof t != "string" && (t = e.provider || ""), Ot && !t && !e.prefix) {
    let l = !1;
    return fn(e) && (e.prefix = "", an(e, (r, o) => {
      o && Dl(r, o) && (l = !0);
    })), l;
  }
  const i = e.prefix;
  if (!Vt({
    provider: t,
    prefix: i,
    name: "a"
  }))
    return !1;
  const n = mt(t, i);
  return !!ve(n, e);
}
const kn = Object.freeze({
  width: null,
  height: null
}), gn = Object.freeze({
  // Dimensions
  ...kn,
  // Transformations
  ...Yt
}), ql = /(-?[0-9.]*[0-9]+[0-9.]*)/g, Ul = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function Re(e, t, i) {
  if (t === 1)
    return e;
  if (i = i || 100, typeof e == "number")
    return Math.ceil(e * t * i) / i;
  if (typeof e != "string")
    return e;
  const n = e.split(ql);
  if (n === null || !n.length)
    return e;
  const l = [];
  let r = n.shift(), o = Ul.test(r);
  for (; ; ) {
    if (o) {
      const s = parseFloat(r);
      isNaN(s) ? l.push(r) : l.push(Math.ceil(s * t * i) / i);
    } else
      l.push(r);
    if (r = n.shift(), r === void 0)
      return l.join("");
    o = !o;
  }
}
const Zl = (e) => e === "unset" || e === "undefined" || e === "none";
function Ql(e, t) {
  const i = {
    ...Jt,
    ...e
  }, n = {
    ...gn,
    ...t
  }, l = {
    left: i.left,
    top: i.top,
    width: i.width,
    height: i.height
  };
  let r = i.body;
  [i, n].forEach((m) => {
    const w = [], v = m.hFlip, _ = m.vFlip;
    let b = m.rotate;
    v ? _ ? b += 2 : (w.push(
      "translate(" + (l.width + l.left).toString() + " " + (0 - l.top).toString() + ")"
    ), w.push("scale(-1 1)"), l.top = l.left = 0) : _ && (w.push(
      "translate(" + (0 - l.left).toString() + " " + (l.height + l.top).toString() + ")"
    ), w.push("scale(1 -1)"), l.top = l.left = 0);
    let I;
    switch (b < 0 && (b -= Math.floor(b / 4) * 4), b = b % 4, b) {
      case 1:
        I = l.height / 2 + l.top, w.unshift(
          "rotate(90 " + I.toString() + " " + I.toString() + ")"
        );
        break;
      case 2:
        w.unshift(
          "rotate(180 " + (l.width / 2 + l.left).toString() + " " + (l.height / 2 + l.top).toString() + ")"
        );
        break;
      case 3:
        I = l.width / 2 + l.left, w.unshift(
          "rotate(-90 " + I.toString() + " " + I.toString() + ")"
        );
        break;
    }
    b % 2 === 1 && (l.left !== l.top && (I = l.left, l.left = l.top, l.top = I), l.width !== l.height && (I = l.width, l.width = l.height, l.height = I)), w.length && (r = '<g transform="' + w.join(" ") + '">' + r + "</g>");
  });
  const o = n.width, s = n.height, u = l.width, f = l.height;
  let c, a;
  o === null ? (a = s === null ? "1em" : s === "auto" ? f : s, c = Re(a, u / f)) : (c = o === "auto" ? u : o, a = s === null ? Re(c, f / u) : s === "auto" ? f : s);
  const d = {}, h = (m, w) => {
    Zl(w) || (d[m] = w.toString());
  };
  return h("width", c), h("height", a), d.viewBox = l.left.toString() + " " + l.top.toString() + " " + u.toString() + " " + f.toString(), {
    attributes: d,
    body: r
  };
}
const Yl = /\sid="(\S+)"/g, Kl = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let Jl = 0;
function Xl(e, t = Kl) {
  const i = [];
  let n;
  for (; n = Yl.exec(e); )
    i.push(n[1]);
  if (!i.length)
    return e;
  const l = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return i.forEach((r) => {
    const o = typeof t == "function" ? t(r) : t + (Jl++).toString(), s = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + s + ')([")]|\\.[a-z])', "g"),
      "$1" + o + l + "$3"
    );
  }), e = e.replace(new RegExp(l, "g"), ""), e;
}
const ae = /* @__PURE__ */ Object.create(null);
function $l(e, t) {
  ae[e] = t;
}
function fe(e) {
  return ae[e] || ae[""];
}
function _e(e) {
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
const we = /* @__PURE__ */ Object.create(null), Et = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], qt = [];
for (; Et.length > 0; )
  Et.length === 1 || Math.random() > 0.5 ? qt.push(Et.shift()) : qt.push(Et.pop());
we[""] = _e({
  resources: ["https://api.iconify.design"].concat(qt)
});
function tr(e, t) {
  const i = _e(t);
  return i === null ? !1 : (we[e] = i, !0);
}
function ye(e) {
  return we[e];
}
const er = () => {
  let e;
  try {
    if (e = fetch, typeof e == "function")
      return e;
  } catch {
  }
};
let We = er();
function ir(e, t) {
  const i = ye(e);
  if (!i)
    return 0;
  let n;
  if (!i.maxURL)
    n = 0;
  else {
    let l = 0;
    i.resources.forEach((o) => {
      l = Math.max(l, o.length);
    });
    const r = t + ".json?icons=";
    n = i.maxURL - l - i.path.length - r.length;
  }
  return n;
}
function nr(e) {
  return e === 404;
}
const lr = (e, t, i) => {
  const n = [], l = ir(e, t), r = "icons";
  let o = {
    type: r,
    provider: e,
    prefix: t,
    icons: []
  }, s = 0;
  return i.forEach((u, f) => {
    s += u.length + 1, s >= l && f > 0 && (n.push(o), o = {
      type: r,
      provider: e,
      prefix: t,
      icons: []
    }, s = u.length), o.icons.push(u);
  }), n.push(o), n;
};
function rr(e) {
  if (typeof e == "string") {
    const t = ye(e);
    if (t)
      return t.path;
  }
  return "/";
}
const or = (e, t, i) => {
  if (!We) {
    i("abort", 424);
    return;
  }
  let n = rr(t.provider);
  switch (t.type) {
    case "icons": {
      const r = t.prefix, s = t.icons.join(","), u = new URLSearchParams({
        icons: s
      });
      n += r + ".json?" + u.toString();
      break;
    }
    case "custom": {
      const r = t.uri;
      n += r.slice(0, 1) === "/" ? r.slice(1) : r;
      break;
    }
    default:
      i("abort", 400);
      return;
  }
  let l = 503;
  We(e + n).then((r) => {
    const o = r.status;
    if (o !== 200) {
      setTimeout(() => {
        i(nr(o) ? "abort" : "next", o);
      });
      return;
    }
    return l = 501, r.json();
  }).then((r) => {
    if (typeof r != "object" || r === null) {
      setTimeout(() => {
        r === 404 ? i("abort", r) : i("next", l);
      });
      return;
    }
    setTimeout(() => {
      i("success", r);
    });
  }).catch(() => {
    i("next", l);
  });
}, sr = {
  prepare: lr,
  send: or
};
function ur(e) {
  const t = {
    loaded: [],
    missing: [],
    pending: []
  }, i = /* @__PURE__ */ Object.create(null);
  e.sort((l, r) => l.provider !== r.provider ? l.provider.localeCompare(r.provider) : l.prefix !== r.prefix ? l.prefix.localeCompare(r.prefix) : l.name.localeCompare(r.name));
  let n = {
    provider: "",
    prefix: "",
    name: ""
  };
  return e.forEach((l) => {
    if (n.name === l.name && n.prefix === l.prefix && n.provider === l.provider)
      return;
    n = l;
    const r = l.provider, o = l.prefix, s = l.name, u = i[r] || (i[r] = /* @__PURE__ */ Object.create(null)), f = u[o] || (u[o] = mt(r, o));
    let c;
    s in f.icons ? c = t.loaded : o === "" || f.missing.has(s) ? c = t.missing : c = t.pending;
    const a = {
      provider: r,
      prefix: o,
      name: s
    };
    c.push(a);
  }), t;
}
function hn(e, t) {
  e.forEach((i) => {
    const n = i.loaderCallbacks;
    n && (i.loaderCallbacks = n.filter((l) => l.id !== t));
  });
}
function cr(e) {
  e.pendingCallbacksFlag || (e.pendingCallbacksFlag = !0, setTimeout(() => {
    e.pendingCallbacksFlag = !1;
    const t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
    if (!t.length)
      return;
    let i = !1;
    const n = e.provider, l = e.prefix;
    t.forEach((r) => {
      const o = r.icons, s = o.pending.length;
      o.pending = o.pending.filter((u) => {
        if (u.prefix !== l)
          return !0;
        const f = u.name;
        if (e.icons[f])
          o.loaded.push({
            provider: n,
            prefix: l,
            name: f
          });
        else if (e.missing.has(f))
          o.missing.push({
            provider: n,
            prefix: l,
            name: f
          });
        else
          return i = !0, !0;
        return !1;
      }), o.pending.length !== s && (i || hn([e], r.id), r.callback(
        o.loaded.slice(0),
        o.missing.slice(0),
        o.pending.slice(0),
        r.abort
      ));
    });
  }));
}
let ar = 0;
function fr(e, t, i) {
  const n = ar++, l = hn.bind(null, i, n);
  if (!t.pending.length)
    return l;
  const r = {
    id: n,
    icons: t,
    callback: e,
    abort: l
  };
  return i.forEach((o) => {
    (o.loaderCallbacks || (o.loaderCallbacks = [])).push(r);
  }), l;
}
function dr(e, t = !0, i = !1) {
  const n = [];
  return e.forEach((l) => {
    const r = typeof l == "string" ? Kt(l, t, i) : l;
    r && n.push(r);
  }), n;
}
var kr = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function gr(e, t, i, n) {
  const l = e.resources.length, r = e.random ? Math.floor(Math.random() * l) : e.index;
  let o;
  if (e.random) {
    let S = e.resources.slice(0);
    for (o = []; S.length > 1; ) {
      const F = Math.floor(Math.random() * S.length);
      o.push(S[F]), S = S.slice(0, F).concat(S.slice(F + 1));
    }
    o = o.concat(S);
  } else
    o = e.resources.slice(r).concat(e.resources.slice(0, r));
  const s = Date.now();
  let u = "pending", f = 0, c, a = null, d = [], h = [];
  typeof n == "function" && h.push(n);
  function m() {
    a && (clearTimeout(a), a = null);
  }
  function w() {
    u === "pending" && (u = "aborted"), m(), d.forEach((S) => {
      S.status === "pending" && (S.status = "aborted");
    }), d = [];
  }
  function v(S, F) {
    F && (h = []), typeof S == "function" && h.push(S);
  }
  function _() {
    return {
      startTime: s,
      payload: t,
      status: u,
      queriesSent: f,
      queriesPending: d.length,
      subscribe: v,
      abort: w
    };
  }
  function b() {
    u = "failed", h.forEach((S) => {
      S(void 0, c);
    });
  }
  function I() {
    d.forEach((S) => {
      S.status === "pending" && (S.status = "aborted");
    }), d = [];
  }
  function C(S, F, B) {
    const N = F !== "success";
    switch (d = d.filter((D) => D !== S), u) {
      case "pending":
        break;
      case "failed":
        if (N || !e.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (F === "abort") {
      c = B, b();
      return;
    }
    if (N) {
      c = B, d.length || (o.length ? E() : b());
      return;
    }
    if (m(), I(), !e.random) {
      const D = e.resources.indexOf(S.resource);
      D !== -1 && D !== e.index && (e.index = D);
    }
    u = "completed", h.forEach((D) => {
      D(B);
    });
  }
  function E() {
    if (u !== "pending")
      return;
    m();
    const S = o.shift();
    if (S === void 0) {
      if (d.length) {
        a = setTimeout(() => {
          m(), u === "pending" && (I(), b());
        }, e.timeout);
        return;
      }
      b();
      return;
    }
    const F = {
      status: "pending",
      resource: S,
      callback: (B, N) => {
        C(F, B, N);
      }
    };
    d.push(F), f++, a = setTimeout(E, e.rotate), i(S, t, F.callback);
  }
  return setTimeout(E), _;
}
function mn(e) {
  const t = {
    ...kr,
    ...e
  };
  let i = [];
  function n() {
    i = i.filter((s) => s().status === "pending");
  }
  function l(s, u, f) {
    const c = gr(
      t,
      s,
      u,
      (a, d) => {
        n(), f && f(a, d);
      }
    );
    return i.push(c), c;
  }
  function r(s) {
    return i.find((u) => s(u)) || null;
  }
  return {
    query: l,
    find: r,
    setIndex: (s) => {
      t.index = s;
    },
    getIndex: () => t.index,
    cleanup: n
  };
}
function Fe() {
}
const re = /* @__PURE__ */ Object.create(null);
function hr(e) {
  if (!re[e]) {
    const t = ye(e);
    if (!t)
      return;
    const i = mn(t), n = {
      config: t,
      redundancy: i
    };
    re[e] = n;
  }
  return re[e];
}
function mr(e, t, i) {
  let n, l;
  if (typeof e == "string") {
    const r = fe(e);
    if (!r)
      return i(void 0, 424), Fe;
    l = r.send;
    const o = hr(e);
    o && (n = o.redundancy);
  } else {
    const r = _e(e);
    if (r) {
      n = mn(r);
      const o = e.resources ? e.resources[0] : "", s = fe(o);
      s && (l = s.send);
    }
  }
  return !n || !l ? (i(void 0, 424), Fe) : n.query(t, l, i)().abort;
}
const De = "iconify2", Bt = "iconify", pn = Bt + "-count", Ve = Bt + "-version", bn = 36e5, pr = 168;
function de(e, t) {
  try {
    return e.getItem(t);
  } catch {
  }
}
function xe(e, t, i) {
  try {
    return e.setItem(t, i), !0;
  } catch {
  }
}
function qe(e, t) {
  try {
    e.removeItem(t);
  } catch {
  }
}
function ke(e, t) {
  return xe(e, pn, t.toString());
}
function ge(e) {
  return parseInt(de(e, pn)) || 0;
}
const Xt = {
  local: !0,
  session: !0
}, vn = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Ce = !1;
function br(e) {
  Ce = e;
}
let Ft = typeof window > "u" ? {} : window;
function _n(e) {
  const t = e + "Storage";
  try {
    if (Ft && Ft[t] && typeof Ft[t].length == "number")
      return Ft[t];
  } catch {
  }
  Xt[e] = !1;
}
function wn(e, t) {
  const i = _n(e);
  if (!i)
    return;
  const n = de(i, Ve);
  if (n !== De) {
    if (n) {
      const s = ge(i);
      for (let u = 0; u < s; u++)
        qe(i, Bt + u.toString());
    }
    xe(i, Ve, De), ke(i, 0);
    return;
  }
  const l = Math.floor(Date.now() / bn) - pr, r = (s) => {
    const u = Bt + s.toString(), f = de(i, u);
    if (typeof f == "string") {
      try {
        const c = JSON.parse(f);
        if (typeof c == "object" && typeof c.cached == "number" && c.cached > l && typeof c.provider == "string" && typeof c.data == "object" && typeof c.data.prefix == "string" && // Valid item: run callback
        t(c, s))
          return !0;
      } catch {
      }
      qe(i, u);
    }
  };
  let o = ge(i);
  for (let s = o - 1; s >= 0; s--)
    r(s) || (s === o - 1 ? (o--, ke(i, o)) : vn[e].add(s));
}
function yn() {
  if (!Ce) {
    br(!0);
    for (const e in Xt)
      wn(e, (t) => {
        const i = t.data, n = t.provider, l = i.prefix, r = mt(
          n,
          l
        );
        if (!ve(r, i).length)
          return !1;
        const o = i.lastModified || -1;
        return r.lastModifiedCached = r.lastModifiedCached ? Math.min(r.lastModifiedCached, o) : o, !0;
      });
  }
}
function vr(e, t) {
  const i = e.lastModifiedCached;
  if (
    // Matches or newer
    i && i >= t
  )
    return i === t;
  if (e.lastModifiedCached = t, i)
    for (const n in Xt)
      wn(n, (l) => {
        const r = l.data;
        return l.provider !== e.provider || r.prefix !== e.prefix || r.lastModified === t;
      });
  return !0;
}
function _r(e, t) {
  Ce || yn();
  function i(n) {
    let l;
    if (!Xt[n] || !(l = _n(n)))
      return;
    const r = vn[n];
    let o;
    if (r.size)
      r.delete(o = Array.from(r).shift());
    else if (o = ge(l), !ke(l, o + 1))
      return;
    const s = {
      cached: Math.floor(Date.now() / bn),
      provider: e.provider,
      data: t
    };
    return xe(
      l,
      Bt + o.toString(),
      JSON.stringify(s)
    );
  }
  t.lastModified && !vr(e, t.lastModified) || Object.keys(t.icons).length && (t.not_found && (t = Object.assign({}, t), delete t.not_found), i("local") || i("session"));
}
function Ue() {
}
function wr(e) {
  e.iconsLoaderFlag || (e.iconsLoaderFlag = !0, setTimeout(() => {
    e.iconsLoaderFlag = !1, cr(e);
  }));
}
function yr(e, t) {
  e.iconsToLoad ? e.iconsToLoad = e.iconsToLoad.concat(t).sort() : e.iconsToLoad = t, e.iconsQueueFlag || (e.iconsQueueFlag = !0, setTimeout(() => {
    e.iconsQueueFlag = !1;
    const { provider: i, prefix: n } = e, l = e.iconsToLoad;
    delete e.iconsToLoad;
    let r;
    if (!l || !(r = fe(i)))
      return;
    r.prepare(i, n, l).forEach((s) => {
      mr(i, s, (u) => {
        if (typeof u != "object")
          s.icons.forEach((f) => {
            e.missing.add(f);
          });
        else
          try {
            const f = ve(
              e,
              u
            );
            if (!f.length)
              return;
            const c = e.pendingIcons;
            c && f.forEach((a) => {
              c.delete(a);
            }), _r(e, u);
          } catch (f) {
            console.error(f);
          }
        wr(e);
      });
    });
  }));
}
const xr = (e, t) => {
  const i = dr(e, !0, dn()), n = ur(i);
  if (!n.pending.length) {
    let u = !0;
    return t && setTimeout(() => {
      u && t(
        n.loaded,
        n.missing,
        n.pending,
        Ue
      );
    }), () => {
      u = !1;
    };
  }
  const l = /* @__PURE__ */ Object.create(null), r = [];
  let o, s;
  return n.pending.forEach((u) => {
    const { provider: f, prefix: c } = u;
    if (c === s && f === o)
      return;
    o = f, s = c, r.push(mt(f, c));
    const a = l[f] || (l[f] = /* @__PURE__ */ Object.create(null));
    a[c] || (a[c] = []);
  }), n.pending.forEach((u) => {
    const { provider: f, prefix: c, name: a } = u, d = mt(f, c), h = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    h.has(a) || (h.add(a), l[f][c].push(a));
  }), r.forEach((u) => {
    const { provider: f, prefix: c } = u;
    l[f][c].length && yr(u, l[f][c]);
  }), t ? fr(t, n, r) : Ue;
};
function Cr(e, t) {
  const i = {
    ...e
  };
  for (const n in t) {
    const l = t[n], r = typeof l;
    n in kn ? (l === null || l && (r === "string" || r === "number")) && (i[n] = l) : r === typeof i[n] && (i[n] = n === "rotate" ? l % 4 : l);
  }
  return i;
}
const Sr = /[\s,]+/;
function Ir(e, t) {
  t.split(Sr).forEach((i) => {
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
function Mr(e, t = 0) {
  const i = e.replace(/^-?[0-9.]*/, "");
  function n(l) {
    for (; l < 0; )
      l += 4;
    return l % 4;
  }
  if (i === "") {
    const l = parseInt(e);
    return isNaN(l) ? 0 : n(l);
  } else if (i !== e) {
    let l = 0;
    switch (i) {
      case "%":
        l = 25;
        break;
      case "deg":
        l = 90;
    }
    if (l) {
      let r = parseFloat(e.slice(0, e.length - i.length));
      return isNaN(r) ? 0 : (r = r / l, r % 1 === 0 ? n(r) : 0);
    }
  }
  return t;
}
function Tr(e, t) {
  let i = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const n in t)
    i += " " + n + '="' + t[n] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + i + ">" + e + "</svg>";
}
function jr(e) {
  return e.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Er(e) {
  return "data:image/svg+xml," + jr(e);
}
function Ar(e) {
  return 'url("' + Er(e) + '")';
}
const Ze = {
  ...gn,
  inline: !1
}, Lr = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, zr = {
  display: "inline-block"
}, he = {
  "background-color": "currentColor"
}, xn = {
  "background-color": "transparent"
}, Qe = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Ye = {
  "-webkit-mask": he,
  mask: he,
  background: xn
};
for (const e in Ye) {
  const t = Ye[e];
  for (const i in Qe)
    t[e + "-" + i] = Qe[i];
}
function Pr(e) {
  return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
}
function Or(e, t) {
  const i = Cr(Ze, t), n = t.mode || "svg", l = n === "svg" ? { ...Lr } : {};
  e.body.indexOf("xlink:") === -1 && delete l["xmlns:xlink"];
  let r = typeof t.style == "string" ? t.style : "";
  for (let _ in t) {
    const b = t[_];
    if (b !== void 0)
      switch (_) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          i[_] = b === !0 || b === "true" || b === 1;
          break;
        case "flip":
          typeof b == "string" && Ir(i, b);
          break;
        case "color":
          r = r + (r.length > 0 && r.trim().slice(-1) !== ";" ? ";" : "") + "color: " + b + "; ";
          break;
        case "rotate":
          typeof b == "string" ? i[_] = Mr(b) : typeof b == "number" && (i[_] = b);
          break;
        case "ariaHidden":
        case "aria-hidden":
          b !== !0 && b !== "true" && delete l["aria-hidden"];
          break;
        default:
          if (_.slice(0, 3) === "on:")
            break;
          Ze[_] === void 0 && (l[_] = b);
      }
  }
  const o = Ql(e, i), s = o.attributes;
  if (i.inline && (r = "vertical-align: -0.125em; " + r), n === "svg") {
    Object.assign(l, s), r !== "" && (l.style = r);
    let _ = 0, b = t.id;
    return typeof b == "string" && (b = b.replace(/-/g, "_")), {
      svg: !0,
      attributes: l,
      body: Xl(o.body, b ? () => b + "ID" + _++ : "iconifySvelte")
    };
  }
  const { body: u, width: f, height: c } = e, a = n === "mask" || (n === "bg" ? !1 : u.indexOf("currentColor") !== -1), d = Tr(u, {
    ...s,
    width: f + "",
    height: c + ""
  }), m = {
    "--svg": Ar(d)
  }, w = (_) => {
    const b = s[_];
    b && (m[_] = Pr(b));
  };
  w("width"), w("height"), Object.assign(m, zr, a ? he : xn);
  let v = "";
  for (const _ in m)
    v += _ + ": " + m[_] + ";";
  return l.style = v + r, {
    svg: !1,
    attributes: l
  };
}
dn(!0);
$l("", sr);
if (typeof document < "u" && typeof window < "u") {
  yn();
  const e = window;
  if (e.IconifyPreload !== void 0) {
    const t = e.IconifyPreload, i = "Invalid IconifyPreload syntax.";
    typeof t == "object" && t !== null && (t instanceof Array ? t : [t]).forEach((n) => {
      try {
        // Check if item is an object and not null/array
        (typeof n != "object" || n === null || n instanceof Array || // Check for 'icons' and 'prefix'
        typeof n.icons != "object" || typeof n.prefix != "string" || // Add icon set
        !Vl(n)) && console.error(i);
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
          const l = t[i];
          if (typeof l != "object" || !l || l.resources === void 0)
            continue;
          tr(i, l) || console.error(n);
        } catch {
          console.error(n);
        }
      }
  }
}
function Br(e, t, i, n, l) {
  function r() {
    t.loading && (t.loading.abort(), t.loading = null);
  }
  if (typeof e == "object" && e !== null && typeof e.body == "string")
    return t.name = "", r(), { data: { ...Jt, ...e } };
  let o;
  if (typeof e != "string" || (o = Kt(e, !1, !0)) === null)
    return r(), null;
  const s = Fl(o);
  if (!s)
    return i && (!t.loading || t.loading.name !== e) && (r(), t.name = "", t.loading = {
      name: e,
      abort: xr([o], n)
    }), null;
  r(), t.name !== e && (t.name = e, l && !t.destroyed && l(e));
  const u = ["iconify"];
  return o.prefix !== "" && u.push("iconify--" + o.prefix), o.provider !== "" && u.push("iconify--" + o.provider), { data: s, classes: u };
}
function Nr(e, t) {
  return e ? Or({
    ...Jt,
    ...e
  }, t) : null;
}
function Ke(e) {
  let t;
  function i(r, o) {
    return (
      /*data*/
      r[0].svg ? Gr : Hr
    );
  }
  let n = i(e), l = n(e);
  return {
    c() {
      l.c(), t = pt();
    },
    m(r, o) {
      l.m(r, o), j(r, t, o);
    },
    p(r, o) {
      n === (n = i(r)) && l ? l.p(r, o) : (l.d(1), l = n(r), l && (l.c(), l.m(t.parentNode, t)));
    },
    d(r) {
      r && T(t), l.d(r);
    }
  };
}
function Hr(e) {
  let t, i = [
    /*data*/
    e[0].attributes
  ], n = {};
  for (let l = 0; l < i.length; l += 1)
    n = Ut(n, i[l]);
  return {
    c() {
      t = p("span"), Te(t, n);
    },
    m(l, r) {
      j(l, t, r);
    },
    p(l, r) {
      Te(t, n = en(i, [r & /*data*/
      1 && /*data*/
      l[0].attributes]));
    },
    d(l) {
      l && T(t);
    }
  };
}
function Gr(e) {
  let t, i = (
    /*data*/
    e[0].body + ""
  ), n = [
    /*data*/
    e[0].attributes
  ], l = {};
  for (let r = 0; r < n.length; r += 1)
    l = Ut(l, n[r]);
  return {
    c() {
      t = Ln("svg"), je(t, l);
    },
    m(r, o) {
      j(r, t, o), t.innerHTML = i;
    },
    p(r, o) {
      o & /*data*/
      1 && i !== (i = /*data*/
      r[0].body + "") && (t.innerHTML = i), je(t, l = en(n, [o & /*data*/
      1 && /*data*/
      r[0].attributes]));
    },
    d(r) {
      r && T(t);
    }
  };
}
function Rr(e) {
  let t, i = (
    /*data*/
    e[0] && Ke(e)
  );
  return {
    c() {
      i && i.c(), t = pt();
    },
    m(n, l) {
      i && i.m(n, l), j(n, t, l);
    },
    p(n, [l]) {
      /*data*/
      n[0] ? i ? i.p(n, l) : (i = Ke(n), i.c(), i.m(t.parentNode, t)) : i && (i.d(1), i = null);
    },
    i: R,
    o: R,
    d(n) {
      n && T(t), i && i.d(n);
    }
  };
}
function Wr(e, t, i) {
  const n = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let l = !1, r = 0, o;
  const s = (f) => {
    typeof t.onLoad == "function" && t.onLoad(f), Ct()("load", { icon: f });
  };
  function u() {
    i(3, r++, r);
  }
  return kt(() => {
    i(2, l = !0);
  }), $i(() => {
    i(1, n.destroyed = !0, n), n.loading && (n.loading.abort(), i(1, n.loading = null, n));
  }), e.$$set = (f) => {
    i(6, t = Ut(Ut({}, t), Me(f)));
  }, e.$$.update = () => {
    {
      const f = Br(t.icon, n, l, u, s);
      i(0, o = f ? Nr(f.data, t) : null), o && f.classes && i(
        0,
        o.attributes.class = (typeof t.class == "string" ? t.class + " " : "") + f.classes.join(" "),
        o
      );
    }
  }, t = Me(t), [o, n, l, r];
}
class ct extends Y {
  constructor(t) {
    super(), Q(this, t, Wr, Rr, Z, {});
  }
}
function Je(e, t, i) {
  const n = e.slice();
  return n[7] = t[i].title, n[8] = t[i].items, n[10] = i, n;
}
function Xe(e, t, i) {
  const n = e.slice();
  return n[7] = t[i].title, n[11] = t[i].icon, n[12] = t[i].url, n[13] = t[i].children, n[15] = i, n;
}
function $e(e) {
  let t, i = (
    /*title*/
    e[7] + ""
  ), n;
  return {
    c() {
      t = p("h2"), n = O(i), g(t, "class", "uikit-mb-2 uikit-px-4 uikit-text-lg uikit-font-semibold uikit-tracking-tight");
    },
    m(l, r) {
      j(l, t, r), k(t, n);
    },
    p(l, r) {
      r & /*menus*/
      2 && i !== (i = /*title*/
      l[7] + "") && H(n, i);
    },
    d(l) {
      l && T(t);
    }
  };
}
function ti(e) {
  let t, i, n, l;
  return i = new Cn({
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
      t = p("div"), ot(i.$$.fragment), n = M(), g(t, "class", "uikit-w-full uikit-transition"), J(
        t,
        "height",
        /*isopen*/
        e[0].startsWith(`${/*prefix*/
        e[2]}-${/*i*/
        e[10]}-${/*i2*/
        e[15]}`) ? "" : "0px"
      ), J(
        t,
        "display",
        /*isopen*/
        e[0].startsWith(`${/*prefix*/
        e[2]}-${/*i*/
        e[10]}-${/*i2*/
        e[15]}`) ? "" : "none"
      );
    },
    m(r, o) {
      j(r, t, o), nt(i, t, null), k(t, n), l = !0;
    },
    p(r, o) {
      const s = {};
      o & /*menus*/
      2 && (s.menus = /*children*/
      r[13]), o & /*onClick*/
      8 && (s.onClick = /*onClick*/
      r[3]), o & /*isopen*/
      1 && (s.isopen = /*isopen*/
      r[0]), o & /*prefix*/
      4 && (s.prefix = `${/*prefix*/
      r[2]}-${/*i*/
      r[10]}-${/*i2*/
      r[15]}`), i.$set(s), o & /*isopen, prefix*/
      5 && J(
        t,
        "height",
        /*isopen*/
        r[0].startsWith(`${/*prefix*/
        r[2]}-${/*i*/
        r[10]}-${/*i2*/
        r[15]}`) ? "" : "0px"
      ), o & /*isopen, prefix*/
      5 && J(
        t,
        "display",
        /*isopen*/
        r[0].startsWith(`${/*prefix*/
        r[2]}-${/*i*/
        r[10]}-${/*i2*/
        r[15]}`) ? "" : "none"
      );
    },
    i(r) {
      l || (A(i.$$.fragment, r), l = !0);
    },
    o(r) {
      P(i.$$.fragment, r), l = !1;
    },
    d(r) {
      r && T(t), lt(i);
    }
  };
}
function ei(e) {
  let t, i, n, l, r, o = (
    /*title*/
    e[7] + ""
  ), s, u, f, c = !/*menuisempty*/
  e[4](
    /*children*/
    e[13]
  ), a, d, h, m;
  n = new ct({
    props: {
      class: "uikit-mr-2 uikit-h-4 uikit-w-4",
      icon: (
        /*icon*/
        e[11]
      )
    }
  });
  function w() {
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
  let v = c && ti(e);
  return {
    c() {
      t = p("button"), i = p("section"), ot(n.$$.fragment), l = M(), r = p("p"), s = O(o), f = M(), v && v.c(), a = pt(), g(i, "class", "uikit-self-center"), g(t, "class", u = `uikit-flex uikit-w-full ${/*isopen*/
      e[0].startsWith(`${/*prefix*/
      e[2]}-${/*i*/
      e[10]}-${/*i2*/
      e[15]}`) ? "uikit-text-green-500 uikit-border-l-green-400 uikit-border-l-4" : ""}`);
    },
    m(_, b) {
      j(_, t, b), k(t, i), nt(n, i, null), k(t, l), k(t, r), k(r, s), j(_, f, b), v && v.m(_, b), j(_, a, b), d = !0, h || (m = U(t, "click", w), h = !0);
    },
    p(_, b) {
      e = _;
      const I = {};
      b & /*menus*/
      2 && (I.icon = /*icon*/
      e[11]), n.$set(I), (!d || b & /*menus*/
      2) && o !== (o = /*title*/
      e[7] + "") && H(s, o), (!d || b & /*isopen, prefix*/
      5 && u !== (u = `uikit-flex uikit-w-full ${/*isopen*/
      e[0].startsWith(`${/*prefix*/
      e[2]}-${/*i*/
      e[10]}-${/*i2*/
      e[15]}`) ? "uikit-text-green-500 uikit-border-l-green-400 uikit-border-l-4" : ""}`)) && g(t, "class", u), b & /*menus*/
      2 && (c = !/*menuisempty*/
      e[4](
        /*children*/
        e[13]
      )), c ? v ? (v.p(e, b), b & /*menus*/
      2 && A(v, 1)) : (v = ti(e), v.c(), A(v, 1), v.m(a.parentNode, a)) : v && (tt(), P(v, 1, 1, () => {
        v = null;
      }), et());
    },
    i(_) {
      d || (A(n.$$.fragment, _), A(v), d = !0);
    },
    o(_) {
      P(n.$$.fragment, _), P(v), d = !1;
    },
    d(_) {
      _ && (T(t), T(f), T(a)), lt(n), v && v.d(_), h = !1, m();
    }
  };
}
function ii(e) {
  let t, i, n, l, r, o = (
    /*title*/
    e[7] && $e(e)
  ), s = G(
    /*items*/
    e[8]
  ), u = [];
  for (let c = 0; c < s.length; c += 1)
    u[c] = ei(Xe(e, s, c));
  const f = (c) => P(u[c], 1, 1, () => {
    u[c] = null;
  });
  return {
    c() {
      t = p("div"), o && o.c(), i = M(), n = p("div");
      for (let c = 0; c < u.length; c += 1)
        u[c].c();
      l = M(), g(n, "class", "uikit-space-y-1"), g(t, "class", "uikit-py-2");
    },
    m(c, a) {
      j(c, t, a), o && o.m(t, null), k(t, i), k(t, n);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(n, null);
      k(t, l), r = !0;
    },
    p(c, a) {
      if (/*title*/
      c[7] ? o ? o.p(c, a) : (o = $e(c), o.c(), o.m(t, i)) : o && (o.d(1), o = null), a & /*isopen, prefix, menus, onClick, menuisempty*/
      31) {
        s = G(
          /*items*/
          c[8]
        );
        let d;
        for (d = 0; d < s.length; d += 1) {
          const h = Xe(c, s, d);
          u[d] ? (u[d].p(h, a), A(u[d], 1)) : (u[d] = ei(h), u[d].c(), A(u[d], 1), u[d].m(n, null));
        }
        for (tt(), d = s.length; d < u.length; d += 1)
          f(d);
        et();
      }
    },
    i(c) {
      if (!r) {
        for (let a = 0; a < s.length; a += 1)
          A(u[a]);
        r = !0;
      }
    },
    o(c) {
      u = u.filter(Boolean);
      for (let a = 0; a < u.length; a += 1)
        P(u[a]);
      r = !1;
    },
    d(c) {
      c && T(t), o && o.d(), X(u, c);
    }
  };
}
function Fr(e) {
  let t, i, n = G(
    /*menus*/
    e[1]
  ), l = [];
  for (let o = 0; o < n.length; o += 1)
    l[o] = ii(Je(e, n, o));
  const r = (o) => P(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      t = pt();
    },
    m(o, s) {
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(o, s);
      j(o, t, s), i = !0;
    },
    p(o, [s]) {
      if (s & /*menus, isopen, prefix, onClick, menuisempty*/
      31) {
        n = G(
          /*menus*/
          o[1]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const f = Je(o, n, u);
          l[u] ? (l[u].p(f, s), A(l[u], 1)) : (l[u] = ii(f), l[u].c(), A(l[u], 1), l[u].m(t.parentNode, t));
        }
        for (tt(), u = n.length; u < l.length; u += 1)
          r(u);
        et();
      }
    },
    i(o) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          A(l[s]);
        i = !0;
      }
    },
    o(o) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1)
        P(l[s]);
      i = !1;
    },
    d(o) {
      o && T(t), X(l, o);
    }
  };
}
function Dr(e, t, i) {
  let { menus: n = [] } = t, { prefix: l = "" } = t, { isopen: r = "" } = t, { onClick: o = (c, a) => {
    console.log(c, a);
  } } = t;
  function s(c) {
    i(0, r = c);
  }
  const u = (c) => Array.isArray(c) ? c.length === 0 ? !0 : c[0].items.length === 0 : !c, f = (c, a, d, h) => {
    r === `${l}-${c}-${a}` ? i(0, r = l) : i(0, r = `${l}-${c}-${a}`), o(d, u(h));
  };
  return e.$$set = (c) => {
    "menus" in c && i(1, n = c.menus), "prefix" in c && i(2, l = c.prefix), "isopen" in c && i(0, r = c.isopen), "onClick" in c && i(3, o = c.onClick);
  }, [r, n, l, o, u, s, f];
}
class Cn extends Y {
  constructor(t) {
    super(), Q(this, t, Dr, Fr, Z, {
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
function Vr(e) {
  let t, i, n, l, r;
  return n = new Cn({
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
      t = p("div"), i = p("div"), ot(n.$$.fragment), g(i, "class", "uikit-space-y-4 uikit-py-4 uikit-w-full uikit-px-3"), g(t, "class", l = st(
        "uikit-pb-12",
        /*className*/
        e[2]
      ));
    },
    m(o, s) {
      j(o, t, s), k(t, i), nt(n, i, null), r = !0;
    },
    p(o, [s]) {
      const u = {};
      s & /*menusgroup*/
      8 && (u.menus = /*menusgroup*/
      o[3]), s & /*onClick*/
      2 && (u.onClick = /*onClick*/
      o[1]), s & /*isopen*/
      1 && (u.isopen = /*isopen*/
      o[0]), n.$set(u), (!r || s & /*className*/
      4 && l !== (l = st(
        "uikit-pb-12",
        /*className*/
        o[2]
      ))) && g(t, "class", l);
    },
    i(o) {
      r || (A(n.$$.fragment, o), r = !0);
    },
    o(o) {
      P(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && T(t), lt(n);
    }
  };
}
function qr(e, t, i) {
  let { isopen: n = "" } = t, { menus: l = [] } = t, { onClick: r = (d, h) => {
    console.log(d, h);
  } } = t, { class: o = void 0 } = t;
  function s(d) {
    i(0, n = d);
  }
  function u(d) {
    i(0, n = c[d]);
  }
  let f = [], c = {};
  const a = () => {
    const d = (h, m) => {
      if (!m)
        return;
      let w = [{ title: "", items: [] }], v = 0;
      for (let _ of m) {
        if (_.group) {
          v === w.length ? w.push({ title: "", items: [] }) : w[w.length - 1].items && (w.push({ title: "", items: [] }), v += 1), w[v].title = _.title, v += 1;
          continue;
        }
        w[w.length - 1].items.push({ ..._ });
      }
      for (let _ = 0; _ < w.length; _++) {
        let b = [], I = w[_];
        for (let C = 0; C < I.items.length; C++) {
          let E = `${h}-${_}-${C}`;
          c[I.items[C].url] = E;
          let S = I.items[C];
          S.children ? b.push({
            ...S,
            children: d(E, S.children)
          }) : b.push({ ...S });
        }
        w[_].items = b;
      }
      return w;
    };
    i(3, f = d("", l)), console.log(f);
  };
  return e.$$set = (d) => {
    "isopen" in d && i(0, n = d.isopen), "menus" in d && i(4, l = d.menus), "onClick" in d && i(1, r = d.onClick), "class" in d && i(2, o = d.class);
  }, e.$$.update = () => {
    e.$$.dirty & /*menus*/
    16 && l && a();
  }, [n, r, o, f, l, s, u];
}
class Ho extends Y {
  constructor(t) {
    super(), Q(this, t, qr, Vr, Z, {
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
function ni(e, t, i) {
  const n = e.slice();
  return n[11] = t[i].title, n[12] = t[i].onClick, n;
}
function li(e) {
  let t, i = (
    /*title*/
    e[11] + ""
  ), n, l, r, o;
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
      t = p("button"), n = O(i), l = M(), g(t, "class", "uikit-p-1 hover:uikit-bg-gray-200 uikit-cursor-pointer uikit-w-full uikit-h-full");
    },
    m(u, f) {
      j(u, t, f), k(t, n), k(t, l), r || (o = U(t, "click", s), r = !0);
    },
    p(u, f) {
      e = u, f & /*menus*/
      1 && i !== (i = /*title*/
      e[11] + "") && H(n, i);
    },
    d(u) {
      u && T(t), r = !1, o();
    }
  };
}
function Ur(e) {
  let t, i, n = G(
    /*menus*/
    e[0]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = li(ni(e, n, r));
  return {
    c() {
      t = p("div"), i = p("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      g(i, "class", "uikit-p-2"), g(t, "class", "uikit-fixed uikit-z-10 uikit-bg-white uikit-border-gray-100 uikit-shadow-lg uikit-border-solid uikit-border-2"), xt(t, "uikit-hidden", !/*visible*/
      e[2]);
    },
    m(r, o) {
      j(r, t, o), k(t, i);
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(i, null);
      e[5](t);
    },
    p(r, [o]) {
      if (o & /*visible, menus*/
      5) {
        n = G(
          /*menus*/
          r[0]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const u = ni(r, n, s);
          l[s] ? l[s].p(u, o) : (l[s] = li(u), l[s].c(), l[s].m(i, null));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = n.length;
      }
      o & /*visible*/
      4 && xt(t, "uikit-hidden", !/*visible*/
      r[2]);
    },
    i: R,
    o: R,
    d(r) {
      r && T(t), X(l, r), e[5](null);
    }
  };
}
function Zr(e, t, i) {
  let { target: n } = t, { menus: l = [] } = t, r, o = !1, s = 0, u = 0;
  function f(h) {
    h.preventDefault(), i(2, o = !0), s = h.clientX, u = h.clientY, i(1, r.style.top = `${u}px`, r), i(1, r.style.left = `${s}px`, r);
  }
  function c(h) {
    h.target !== r && i(2, o = !1);
  }
  kt(() => {
    if (n)
      return n.addEventListener("click", c), n.addEventListener("contextmenu", f), () => {
        n.removeEventListener("click", c), n.removeEventListener("contextmenu", f);
      };
  });
  const a = (h, m) => {
    i(2, o = !1), h(m);
  };
  function d(h) {
    ft[h ? "unshift" : "push"](() => {
      r = h, i(1, r);
    });
  }
  return e.$$set = (h) => {
    "target" in h && i(3, n = h.target), "menus" in h && i(0, l = h.menus);
  }, [l, r, o, n, a, d];
}
class Go extends Y {
  constructor(t) {
    super(), Q(this, t, Zr, Ur, Z, { target: 3, menus: 0 });
  }
}
function ri(e) {
  let t, i, n;
  return {
    c() {
      t = p("button"), t.textContent = "open", g(t, "class", "uikit-btn");
    },
    m(l, r) {
      j(l, t, r), i || (n = U(t, "click", function() {
        Nt(
          /*posDialog*/
          e[2].showModal()
        ) && e[2].showModal().apply(this, arguments);
      }), i = !0);
    },
    p(l, r) {
      e = l;
    },
    d(l) {
      l && T(t), i = !1, n();
    }
  };
}
function Qr(e) {
  let t, i, n, l, r, o, s, u, f, c = !/*handle*/
  e[0] && ri(e);
  return {
    c() {
      c && c.c(), t = M(), i = p("dialog"), n = p("div"), l = p("form"), l.innerHTML = '<button class="uikit-btn uikit-btn-sm uikit-btn-circle uikit-btn-ghost uikit-absolute uikit-right-2 uikit-top-2">✕</button>', r = M(), o = p("div"), o.innerHTML = '<h3 class="uikit-font-bold uikit-text-lg">Hello!</h3> <p class="uikit-py-4">Press ESC key or click on ✕ button to close</p>', u = M(), f = p("form"), f.innerHTML = "<button>close</button>", g(l, "method", "dialog"), g(n, "class", s = `uikit-modal-box ${/*className*/
      e[1]}`), g(f, "method", "dialog"), g(f, "class", "uikit-modal-backdrop"), g(i, "class", "uikit-modal");
    },
    m(a, d) {
      c && c.m(a, d), j(a, t, d), j(a, i, d), k(i, n), k(n, l), k(n, r), k(n, o), e[5](o), k(i, u), k(i, f), e[6](i);
    },
    p(a, [d]) {
      /*handle*/
      a[0] ? c && (c.d(1), c = null) : c ? c.p(a, d) : (c = ri(a), c.c(), c.m(t.parentNode, t)), d & /*className*/
      2 && s !== (s = `uikit-modal-box ${/*className*/
      a[1]}`) && g(n, "class", s);
    },
    i: R,
    o: R,
    d(a) {
      a && (T(t), T(i)), c && c.d(a), e[5](null), e[6](null);
    }
  };
}
function Yr(e, t, i) {
  let { handle: n = void 0 } = t, { content: l = void 0 } = t, { class: r = "" } = t, o, s;
  kt(() => {
    n && n.addEventListener("click", () => {
      o.showModal();
    }), l && (i(3, s.innerHTML = "", s), s.appendChild(l));
  });
  function u(c) {
    ft[c ? "unshift" : "push"](() => {
      s = c, i(3, s);
    });
  }
  function f(c) {
    ft[c ? "unshift" : "push"](() => {
      o = c, i(2, o);
    });
  }
  return e.$$set = (c) => {
    "handle" in c && i(0, n = c.handle), "content" in c && i(4, l = c.content), "class" in c && i(1, r = c.class);
  }, [
    n,
    r,
    o,
    s,
    l,
    u,
    f
  ];
}
class Ro extends Y {
  constructor(t) {
    super(), Q(this, t, Yr, Qr, Z, { handle: 0, content: 4, class: 1 });
  }
}
function oi(e, t, i) {
  const n = e.slice();
  return n[10] = t[i].type, n[11] = t[i].title, n[12] = t[i].url, n[13] = t[i].icon, n[14] = t[i].items, n;
}
function si(e, t, i) {
  const n = e.slice();
  return n[11] = t[i].title, n[12] = t[i].url, n;
}
function ui(e, t, i) {
  const n = e.slice();
  return n[10] = t[i].type, n[11] = t[i].title, n[12] = t[i].url, n[13] = t[i].icon, n[14] = t[i].items, n;
}
function ci(e, t, i) {
  const n = e.slice();
  return n[11] = t[i].title, n[12] = t[i].url, n;
}
function Kr(e) {
  let t, i, n, l, r = (
    /*title*/
    e[11] + ""
  ), o, s, u, f, c;
  n = new ct({ props: { icon: (
    /*icon*/
    e[13]
  ) } });
  function a() {
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
      t = p("li"), i = p("button"), ot(n.$$.fragment), l = p("span"), o = O(r), s = M(), g(l, "class", "uikit-ml-2"), g(i, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case"), g(t, "class", "nav-item");
    },
    m(d, h) {
      j(d, t, h), k(t, i), nt(n, i, null), k(i, l), k(l, o), k(t, s), u = !0, f || (c = U(i, "click", a), f = !0);
    },
    p(d, h) {
      e = d;
      const m = {};
      h & /*links*/
      8 && (m.icon = /*icon*/
      e[13]), n.$set(m), (!u || h & /*links*/
      8) && r !== (r = /*title*/
      e[11] + "") && H(o, r);
    },
    i(d) {
      u || (A(n.$$.fragment, d), u = !0);
    },
    o(d) {
      P(n.$$.fragment, d), u = !1;
    },
    d(d) {
      d && T(t), lt(n), f = !1, c();
    }
  };
}
function Jr(e) {
  let t, i, n, l = (
    /*title*/
    e[11] + ""
  ), r, o, s, u, f = G(
    /*items*/
    e[14]
  ), c = [];
  for (let a = 0; a < f.length; a += 1)
    c[a] = ai(ci(e, f, a));
  return {
    c() {
      t = p("li"), i = p("div"), n = p("label"), r = O(l), o = M(), s = p("ul");
      for (let a = 0; a < c.length; a += 1)
        c[a].c();
      u = M(), g(n, "tabindex", "1"), g(n, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), g(s, "tabindex", "1"), g(s, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), g(i, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), g(t, "class", "nav-item");
    },
    m(a, d) {
      j(a, t, d), k(t, i), k(i, n), k(n, r), k(i, o), k(i, s);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(s, null);
      k(t, u);
    },
    p(a, d) {
      if (d & /*links*/
      8 && l !== (l = /*title*/
      a[11] + "") && H(r, l), d & /*onItemClick, links*/
      24) {
        f = G(
          /*items*/
          a[14]
        );
        let h;
        for (h = 0; h < f.length; h += 1) {
          const m = ci(a, f, h);
          c[h] ? c[h].p(m, d) : (c[h] = ai(m), c[h].c(), c[h].m(s, null));
        }
        for (; h < c.length; h += 1)
          c[h].d(1);
        c.length = f.length;
      }
    },
    i: R,
    o: R,
    d(a) {
      a && T(t), X(c, a);
    }
  };
}
function ai(e) {
  let t, i, n = (
    /*title*/
    e[11] + ""
  ), l, r, o, s;
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
      t = p("li"), i = p("button"), l = O(n), r = M();
    },
    m(f, c) {
      j(f, t, c), k(t, i), k(i, l), k(t, r), o || (s = U(i, "click", u), o = !0);
    },
    p(f, c) {
      e = f, c & /*links*/
      8 && n !== (n = /*title*/
      e[11] + "") && H(l, n);
    },
    d(f) {
      f && T(t), o = !1, s();
    }
  };
}
function fi(e) {
  let t, i, n, l;
  const r = [Jr, Kr], o = [];
  function s(u, f) {
    return (
      /*type*/
      u[10] === "menu" ? 0 : 1
    );
  }
  return t = s(e), i = o[t] = r[t](e), {
    c() {
      i.c(), n = pt();
    },
    m(u, f) {
      o[t].m(u, f), j(u, n, f), l = !0;
    },
    p(u, f) {
      let c = t;
      t = s(u), t === c ? o[t].p(u, f) : (tt(), P(o[c], 1, 1, () => {
        o[c] = null;
      }), et(), i = o[t], i ? i.p(u, f) : (i = o[t] = r[t](u), i.c()), A(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      l || (A(i), l = !0);
    },
    o(u) {
      P(i), l = !1;
    },
    d(u) {
      u && T(n), o[t].d(u);
    }
  };
}
function Xr(e) {
  let t, i, n, l, r = (
    /*title*/
    e[11] + ""
  ), o, s, u, f, c;
  n = new ct({ props: { icon: (
    /*icon*/
    e[13]
  ) } });
  function a() {
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
      t = p("li"), i = p("button"), ot(n.$$.fragment), l = p("span"), o = O(r), s = M(), g(l, "class", "uikit-ml-2"), g(i, "class", "uikit-btn uikit-btn-ghost uikit-drawer-button uikit-font-normal uikit-normal-case uikit-items-start"), g(t, "class", "uikit-nav-item");
    },
    m(d, h) {
      j(d, t, h), k(t, i), nt(n, i, null), k(i, l), k(l, o), k(t, s), u = !0, f || (c = U(i, "click", a), f = !0);
    },
    p(d, h) {
      e = d;
      const m = {};
      h & /*links*/
      8 && (m.icon = /*icon*/
      e[13]), n.$set(m), (!u || h & /*links*/
      8) && r !== (r = /*title*/
      e[11] + "") && H(o, r);
    },
    i(d) {
      u || (A(n.$$.fragment, d), u = !0);
    },
    o(d) {
      P(n.$$.fragment, d), u = !1;
    },
    d(d) {
      d && T(t), lt(n), f = !1, c();
    }
  };
}
function $r(e) {
  let t, i, n, l = (
    /*title*/
    e[11] + ""
  ), r, o, s, u, f = G(
    /*items*/
    e[14]
  ), c = [];
  for (let a = 0; a < f.length; a += 1)
    c[a] = di(si(e, f, a));
  return {
    c() {
      t = p("li"), i = p("div"), n = p("label"), r = O(l), o = M(), s = p("ul");
      for (let a = 0; a < c.length; a += 1)
        c[a].c();
      u = M(), g(n, "tabindex", "1"), g(n, "class", "uikit-btn uikit-normal-case uikit-btn-ghost"), g(s, "tabindex", "1"), g(s, "class", "uikit-dropdown-content uikit-z-[1] uikit-menu uikit-p-2 uikit-shadow uikit-bg-base-100 uikit-rounded-box uikit-w-52"), g(i, "class", "uikit-dropdown uikit-dropdown-hover uikit-dropdown-bottom uikit-dropdown-end"), g(t, "class", "uikit-nav-item uikit-w-full");
    },
    m(a, d) {
      j(a, t, d), k(t, i), k(i, n), k(n, r), k(i, o), k(i, s);
      for (let h = 0; h < c.length; h += 1)
        c[h] && c[h].m(s, null);
      k(t, u);
    },
    p(a, d) {
      if (d & /*links*/
      8 && l !== (l = /*title*/
      a[11] + "") && H(r, l), d & /*onItemClick, links*/
      24) {
        f = G(
          /*items*/
          a[14]
        );
        let h;
        for (h = 0; h < f.length; h += 1) {
          const m = si(a, f, h);
          c[h] ? c[h].p(m, d) : (c[h] = di(m), c[h].c(), c[h].m(s, null));
        }
        for (; h < c.length; h += 1)
          c[h].d(1);
        c.length = f.length;
      }
    },
    i: R,
    o: R,
    d(a) {
      a && T(t), X(c, a);
    }
  };
}
function di(e) {
  let t, i, n = (
    /*title*/
    e[11] + ""
  ), l, r, o, s;
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
      t = p("li"), i = p("button"), l = O(n), r = M();
    },
    m(f, c) {
      j(f, t, c), k(t, i), k(i, l), k(t, r), o || (s = U(i, "click", u), o = !0);
    },
    p(f, c) {
      e = f, c & /*links*/
      8 && n !== (n = /*title*/
      e[11] + "") && H(l, n);
    },
    d(f) {
      f && T(t), o = !1, s();
    }
  };
}
function ki(e) {
  let t, i, n, l;
  const r = [$r, Xr], o = [];
  function s(u, f) {
    return (
      /*type*/
      u[10] === "menu" ? 0 : 1
    );
  }
  return t = s(e), i = o[t] = r[t](e), {
    c() {
      i.c(), n = pt();
    },
    m(u, f) {
      o[t].m(u, f), j(u, n, f), l = !0;
    },
    p(u, f) {
      let c = t;
      t = s(u), t === c ? o[t].p(u, f) : (tt(), P(o[c], 1, 1, () => {
        o[c] = null;
      }), et(), i = o[t], i ? i.p(u, f) : (i = o[t] = r[t](u), i.c()), A(i, 1), i.m(n.parentNode, n));
    },
    i(u) {
      l || (A(i), l = !0);
    },
    o(u) {
      P(i), l = !1;
    },
    d(u) {
      u && T(n), o[t].d(u);
    }
  };
}
function to(e) {
  let t, i, n, l, r, o, s, u, f, c, a, d, h, m, w, v, _, b, I, C, E, S, F, B = G(
    /*links*/
    e[3]
  ), N = [];
  for (let x = 0; x < B.length; x += 1)
    N[x] = fi(ui(e, B, x));
  const D = (x) => P(N[x], 1, 1, () => {
    N[x] = null;
  });
  let V = G(
    /*links*/
    e[3]
  ), L = [];
  for (let x = 0; x < V.length; x += 1)
    L[x] = ki(oi(e, V, x));
  const K = (x) => P(L[x], 1, 1, () => {
    L[x] = null;
  });
  return {
    c() {
      t = p("nav"), i = p("div"), n = p("div"), l = p("button"), r = O(
        /*logotxt*/
        e[1]
      ), o = M(), s = p("div"), u = p("ul");
      for (let x = 0; x < N.length; x += 1)
        N[x].c();
      f = M(), c = p("div"), a = p("div"), d = p("input"), h = M(), m = p("div"), m.innerHTML = '<label for="my-drawer" class="uikit-btn uikit-btn-ghost uikit-drawer-button"><div class="uikit-ml-1 uikit-mr-1 uikit-h-8 uikit-w-8 uikit-rounded uikit-py-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="uikit-text-gray-900 dark:uikit-text-gray-100"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg></div></label>', w = M(), v = p("div"), _ = p("label"), b = M(), I = p("ul");
      for (let x = 0; x < L.length; x += 1)
        L[x].c();
      g(l, "class", "uikit-text-sm uikit-font-bold uikit-leading-relaxed uikit-inline-block uikit-mr-4 uikit-py-2 uikit-whitespace-nowrap uikit-text-slate-700"), g(n, "class", "uikit-relative uikit-flex uikit-justify-between lg:uikit-w-auto lg:uikit-static lg:uikit-block lg:uikit-justify-start"), g(u, "class", "uikit-flex uikit-flex-col lg:uikit-flex-row uikit-list-none lg:uikit-ml-auto"), g(s, "class", "lg:uikit-flex uikit-flex-grow uikit-items-center uikit-hidden"), g(d, "id", "my-drawer"), g(d, "type", "checkbox"), g(d, "class", "uikit-drawer-toggle"), g(m, "class", "uikit-drawer-content"), g(_, "for", "my-drawer"), g(_, "class", "uikit-drawer-overlay"), g(I, "class", "uikit-menu uikit-p-4 uikit-w-80 uikit-min-h-full uikit-bg-base-200 uikit-text-base-content"), g(v, "class", "uikit-drawer-side"), g(a, "class", "uikit-drawer"), g(c, "class", "lg:uikit-hidden"), g(i, "class", "uikit-container uikit-px-4 uikit-mx-auto uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between"), g(t, "class", C = st(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        e[0]
      ));
    },
    m(x, z) {
      j(x, t, z), k(t, i), k(i, n), k(n, l), k(l, r), k(i, o), k(i, s), k(s, u);
      for (let y = 0; y < N.length; y += 1)
        N[y] && N[y].m(u, null);
      k(i, f), k(i, c), k(c, a), k(a, d), k(a, h), k(a, m), k(a, w), k(a, v), k(v, _), k(v, b), k(v, I);
      for (let y = 0; y < L.length; y += 1)
        L[y] && L[y].m(I, null);
      E = !0, S || (F = U(
        l,
        "click",
        /*click_handler*/
        e[5]
      ), S = !0);
    },
    p(x, [z]) {
      if ((!E || z & /*logotxt*/
      2) && H(
        r,
        /*logotxt*/
        x[1]
      ), z & /*links, onItemClick*/
      24) {
        B = G(
          /*links*/
          x[3]
        );
        let y;
        for (y = 0; y < B.length; y += 1) {
          const $ = ui(x, B, y);
          N[y] ? (N[y].p($, z), A(N[y], 1)) : (N[y] = fi($), N[y].c(), A(N[y], 1), N[y].m(u, null));
        }
        for (tt(), y = B.length; y < N.length; y += 1)
          D(y);
        et();
      }
      if (z & /*links, onItemClick*/
      24) {
        V = G(
          /*links*/
          x[3]
        );
        let y;
        for (y = 0; y < V.length; y += 1) {
          const $ = oi(x, V, y);
          L[y] ? (L[y].p($, z), A(L[y], 1)) : (L[y] = ki($), L[y].c(), A(L[y], 1), L[y].m(I, null));
        }
        for (tt(), y = V.length; y < L.length; y += 1)
          K(y);
        et();
      }
      (!E || z & /*className*/
      1 && C !== (C = st(
        "uikit-fixed uikit-z-50 uikit-w-full uikit-bg-white uikit-top-0 uikit-flex uikit-flex-wrap uikit-items-center uikit-justify-between uikit-px-2 uikit-py-3 uikit-shadow-lg",
        /*className*/
        x[0]
      ))) && g(t, "class", C);
    },
    i(x) {
      if (!E) {
        for (let z = 0; z < B.length; z += 1)
          A(N[z]);
        for (let z = 0; z < V.length; z += 1)
          A(L[z]);
        E = !0;
      }
    },
    o(x) {
      N = N.filter(Boolean);
      for (let z = 0; z < N.length; z += 1)
        P(N[z]);
      L = L.filter(Boolean);
      for (let z = 0; z < L.length; z += 1)
        P(L[z]);
      E = !1;
    },
    d(x) {
      x && T(t), X(N, x), X(L, x), S = !1, F();
    }
  };
}
function eo(e, t, i) {
  let { class: n = "" } = t, { logotxt: l = "wwqdrh" } = t, { logourl: r = "#" } = t, { links: o = [] } = t, { onItemClick: s = (h) => {
    window.location.href = h;
  } } = t;
  const u = () => s(r), f = (h) => s(h), c = (h) => s(h), a = (h) => s(h), d = (h) => s(h);
  return e.$$set = (h) => {
    "class" in h && i(0, n = h.class), "logotxt" in h && i(1, l = h.logotxt), "logourl" in h && i(2, r = h.logourl), "links" in h && i(3, o = h.links), "onItemClick" in h && i(4, s = h.onItemClick);
  }, [
    n,
    l,
    r,
    o,
    s,
    u,
    f,
    c,
    a,
    d
  ];
}
let io = class extends Y {
  constructor(t) {
    super(), Q(this, t, eo, to, Z, {
      class: 0,
      logotxt: 1,
      logourl: 2,
      links: 3,
      onItemClick: 4
    });
  }
};
function gi(e, t, i) {
  const n = e.slice();
  return n[7] = t[i], n;
}
function hi(e) {
  let t, i = (
    /*item*/
    e[7] + ""
  ), n, l, r;
  function o() {
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
      t = p("button"), n = O(i), g(t, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(s, u) {
      j(s, t, u), k(t, n), l || (r = U(t, "click", o), l = !0);
    },
    p(s, u) {
      e = s, u & /*buttons*/
      8 && i !== (i = /*item*/
      e[7] + "") && H(n, i);
    },
    d(s) {
      s && T(t), l = !1, r();
    }
  };
}
function no(e) {
  let t, i, n, l, r, o, s, u, f, c, a, d, h, m, w, v = G(
    /*buttons*/
    e[3]
  ), _ = [];
  for (let b = 0; b < v.length; b += 1)
    _[b] = hi(gi(e, v, b));
  return {
    c() {
      t = p("section"), i = p("div"), n = p("div"), l = p("div"), r = p("h2"), o = O(
        /*title*/
        e[0]
      ), s = M(), u = p("p"), f = O(
        /*description*/
        e[1]
      ), c = M(), a = p("div");
      for (let b = 0; b < _.length; b += 1)
        _[b].c();
      d = M(), h = p("img"), g(r, "class", "uikit-font-semibold uikit-text-4xl uikit-text-slate-600"), g(u, "class", "uikit-mt-4 uikit-text-lg uikit-leading-relaxed uikit-text-slate-500"), g(a, "class", "uikit-mt-12"), g(l, "class", "uikit-pt-32 sm:uikit-pt-0"), g(n, "class", "uikit-w-full md:uikit-w-8/12 lg:uikit-w-6/12 xl:uikit-w-6/12 uikit-px-4"), g(i, "class", "uikit-container uikit-mx-auto uikit-items-center uikit-flex uikit-flex-wrap"), g(h, "class", "uikit-absolute uikit-top-0 uikit-b-auto uikit-right-0 uikit-pt-16 sm:uikit-w-6/12 uikit--mt-48 sm:uikit-mt-0 uikit-w-10/12"), it(h.src, m = /*cover*/
      e[5]) || g(h, "src", m), g(h, "alt", "..."), J(h, "max-height", "860px"), g(t, "class", w = st(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        e[2]
      )), J(t, "max-height", "860px");
    },
    m(b, I) {
      j(b, t, I), k(t, i), k(i, n), k(n, l), k(l, r), k(r, o), k(l, s), k(l, u), k(u, f), k(l, c), k(l, a);
      for (let C = 0; C < _.length; C += 1)
        _[C] && _[C].m(a, null);
      k(t, d), k(t, h);
    },
    p(b, [I]) {
      if (I & /*title*/
      1 && H(
        o,
        /*title*/
        b[0]
      ), I & /*description*/
      2 && H(
        f,
        /*description*/
        b[1]
      ), I & /*buttonClick, buttons*/
      24) {
        v = G(
          /*buttons*/
          b[3]
        );
        let C;
        for (C = 0; C < v.length; C += 1) {
          const E = gi(b, v, C);
          _[C] ? _[C].p(E, I) : (_[C] = hi(E), _[C].c(), _[C].m(a, null));
        }
        for (; C < _.length; C += 1)
          _[C].d(1);
        _.length = v.length;
      }
      I & /*cover*/
      32 && !it(h.src, m = /*cover*/
      b[5]) && g(h, "src", m), I & /*className*/
      4 && w !== (w = st(
        "uikit-relative uikit-items-center uikit-flex uikit-h-full uikit-w-full",
        /*className*/
        b[2]
      )) && g(t, "class", w);
    },
    i: R,
    o: R,
    d(b) {
      b && T(t), X(_, b);
    }
  };
}
function lo(e, t, i) {
  let { title: n = "wwqdrh's ui component: uikit" } = t, { description: l = "a cross framework web component, you can visit it in wwqdrh'home" } = t, { class: r = "" } = t, { buttons: o = [] } = t, { buttonClick: s = (c) => {
    console.log(c);
  } } = t, { cover: u = "" } = t;
  const f = (c) => s(c);
  return e.$$set = (c) => {
    "title" in c && i(0, n = c.title), "description" in c && i(1, l = c.description), "class" in c && i(2, r = c.class), "buttons" in c && i(3, o = c.buttons), "buttonClick" in c && i(4, s = c.buttonClick), "cover" in c && i(5, u = c.cover);
  }, [n, l, r, o, s, u, f];
}
class ro extends Y {
  constructor(t) {
    super(), Q(this, t, lo, no, Z, {
      title: 0,
      description: 1,
      class: 2,
      buttons: 3,
      buttonClick: 4,
      cover: 5
    });
  }
}
function mi(e, t, i) {
  const n = e.slice();
  return n[4] = t[i].icon, n[2] = t[i].title, n[3] = t[i].description, n;
}
function pi(e) {
  let t, i, n, l, r, o = (
    /*title*/
    e[2] + ""
  ), s, u, f, c = (
    /*description*/
    e[3] + ""
  ), a, d, h;
  return n = new ct({
    props: {
      class: "uikit-w-5 uikit-h-5 uikit-text-primary-600 lg:uikit-w-6 lg:uikit-h-6 dark:uikit-text-primary-300",
      icon: (
        /*icon*/
        e[4]
      )
    }
  }), {
    c() {
      t = p("div"), i = p("div"), ot(n.$$.fragment), l = M(), r = p("h3"), s = O(o), u = M(), f = p("p"), a = O(c), d = M(), g(i, "class", "uikit-flex uikit-justify-center uikit-items-center uikit-mb-4 uikit-w-10 uikit-h-10 uikit-rounded-full uikit-bg-primary-100 lg:uikit-h-12 lg:uikit-w-12 dark:uikit-bg-primary-900"), g(r, "class", "uikit-mb-2 uikit-text-xl uikit-font-bold dark:uikit-text-white"), g(f, "class", "uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(m, w) {
      j(m, t, w), k(t, i), nt(n, i, null), k(t, l), k(t, r), k(r, s), k(t, u), k(t, f), k(f, a), k(t, d), h = !0;
    },
    p(m, w) {
      const v = {};
      w & /*features*/
      2 && (v.icon = /*icon*/
      m[4]), n.$set(v), (!h || w & /*features*/
      2) && o !== (o = /*title*/
      m[2] + "") && H(s, o), (!h || w & /*features*/
      2) && c !== (c = /*description*/
      m[3] + "") && H(a, c);
    },
    i(m) {
      h || (A(n.$$.fragment, m), h = !0);
    },
    o(m) {
      P(n.$$.fragment, m), h = !1;
    },
    d(m) {
      m && T(t), lt(n);
    }
  };
}
function oo(e) {
  let t, i, n, l, r, o, s, u, f, c, a, d, h = G(
    /*features*/
    e[1]
  ), m = [];
  for (let v = 0; v < h.length; v += 1)
    m[v] = pi(mi(e, h, v));
  const w = (v) => P(m[v], 1, 1, () => {
    m[v] = null;
  });
  return {
    c() {
      t = p("section"), i = p("div"), n = p("div"), l = p("h2"), r = O(
        /*title*/
        e[2]
      ), o = M(), s = p("p"), u = O(
        /*description*/
        e[3]
      ), f = M(), c = p("div");
      for (let v = 0; v < m.length; v += 1)
        m[v].c();
      g(l, "class", "uikit-mb-4 uikit-text-4xl uikit-font-extrabold uikit-text-gray-900 dark:uikit-text-white"), g(s, "class", "uikit-text-gray-500 sm:uikit-text-xl dark:uikit-text-gray-400"), g(n, "class", "uikit-mb-8 uikit-max-w-screen-md lg:uikit-mb-16"), g(c, "class", "uikit-space-y-8 md:uikit-grid md:uikit-grid-cols-2 lg:uikit-grid-cols-3 md:uikit-gap-12 md:uikit-space-y-0"), g(i, "class", "uikit-py-8 uikit-px-4 uikit-mx-auto uikit-max-w-screen-xl sm:uikit-py-16 lg:uikit-px-6"), g(t, "class", a = st(
        "dark:uikit-bg-gray-800",
        /*className*/
        e[0]
      ));
    },
    m(v, _) {
      j(v, t, _), k(t, i), k(i, n), k(n, l), k(l, r), k(n, o), k(n, s), k(s, u), k(i, f), k(i, c);
      for (let b = 0; b < m.length; b += 1)
        m[b] && m[b].m(c, null);
      d = !0;
    },
    p(v, [_]) {
      if ((!d || _ & /*title*/
      4) && H(
        r,
        /*title*/
        v[2]
      ), (!d || _ & /*description*/
      8) && H(
        u,
        /*description*/
        v[3]
      ), _ & /*features*/
      2) {
        h = G(
          /*features*/
          v[1]
        );
        let b;
        for (b = 0; b < h.length; b += 1) {
          const I = mi(v, h, b);
          m[b] ? (m[b].p(I, _), A(m[b], 1)) : (m[b] = pi(I), m[b].c(), A(m[b], 1), m[b].m(c, null));
        }
        for (tt(), b = h.length; b < m.length; b += 1)
          w(b);
        et();
      }
      (!d || _ & /*className*/
      1 && a !== (a = st(
        "dark:uikit-bg-gray-800",
        /*className*/
        v[0]
      ))) && g(t, "class", a);
    },
    i(v) {
      if (!d) {
        for (let _ = 0; _ < h.length; _ += 1)
          A(m[_]);
        d = !0;
      }
    },
    o(v) {
      m = m.filter(Boolean);
      for (let _ = 0; _ < m.length; _ += 1)
        P(m[_]);
      d = !1;
    },
    d(v) {
      v && T(t), X(m, v);
    }
  };
}
function so(e, t, i) {
  let { class: n = "" } = t, { title: l = "" } = t, { description: r = "" } = t, { features: o = [] } = t;
  return e.$$set = (s) => {
    "class" in s && i(0, n = s.class), "title" in s && i(2, l = s.title), "description" in s && i(3, r = s.description), "features" in s && i(1, o = s.features);
  }, [n, o, l, r];
}
class uo extends Y {
  constructor(t) {
    super(), Q(this, t, so, oo, Z, {
      class: 0,
      title: 2,
      description: 3,
      features: 1
    });
  }
}
function bi(e, t, i) {
  const n = e.slice();
  return n[11] = t[i], n[13] = i, n;
}
function vi(e, t, i) {
  const n = e.slice();
  return n[11] = t[i], n;
}
function _i(e, t, i) {
  const n = e.slice();
  return n[8] = t[i].icon, n[9] = t[i].description, n;
}
function wi(e) {
  let t, i, n;
  return i = new ct({ props: { icon: (
    /*icon*/
    e[8]
  ) } }), {
    c() {
      t = p("div"), ot(i.$$.fragment), g(t, "class", "uikit-text-slate-500 uikit-p-3 uikit-text-center uikit-inline-flex uikit-items-center uikit-justify-center uikit-w-16 uikit-h-16 uikit-mb-6 uikit-shadow-lg uikit-rounded-full uikit-bg-white");
    },
    m(l, r) {
      j(l, t, r), nt(i, t, null), n = !0;
    },
    p(l, r) {
      const o = {};
      r & /*icon*/
      256 && (o.icon = /*icon*/
      l[8]), i.$set(o);
    },
    i(l) {
      n || (A(i.$$.fragment, l), n = !0);
    },
    o(l) {
      P(i.$$.fragment, l), n = !1;
    },
    d(l) {
      l && T(t), lt(i);
    }
  };
}
function yi(e) {
  let t, i;
  return t = new ct({ props: { icon: (
    /*icon*/
    e[8]
  ) } }), {
    c() {
      ot(t.$$.fragment);
    },
    m(n, l) {
      nt(t, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*sections*/
      16 && (r.icon = /*icon*/
      n[8]), t.$set(r);
    },
    i(n) {
      i || (A(t.$$.fragment, n), i = !0);
    },
    o(n) {
      P(t.$$.fragment, n), i = !1;
    },
    d(n) {
      lt(t, n);
    }
  };
}
function xi(e) {
  let t, i, n, l = (
    /*description*/
    e[9] + ""
  ), r, o, s = (
    /*icon*/
    e[8] && yi(e)
  );
  return {
    c() {
      t = p("li"), i = p("span"), s && s.c(), n = M(), r = O(l), g(i, "class", "uikit-text-xs uikit-font-semibold uikit-inline-block uikit-py-1 uikit-px-2 uikit-rounded-full uikit-text-slate-500 uikit-bg-slate-50 uikit-mr-3"), g(t, "class", "uikit-py-2");
    },
    m(u, f) {
      j(u, t, f), k(t, i), s && s.m(i, null), k(i, n), k(i, r), o = !0;
    },
    p(u, f) {
      /*icon*/
      u[8] ? s ? (s.p(u, f), f & /*sections*/
      16 && A(s, 1)) : (s = yi(u), s.c(), A(s, 1), s.m(i, n)) : s && (tt(), P(s, 1, 1, () => {
        s = null;
      }), et()), (!o || f & /*sections*/
      16) && l !== (l = /*description*/
      u[9] + "") && H(r, l);
    },
    i(u) {
      o || (A(s), o = !0);
    },
    o(u) {
      P(s), o = !1;
    },
    d(u) {
      u && T(t), s && s.d();
    }
  };
}
function Ci(e) {
  let t, i = (
    /*item*/
    e[11] + ""
  ), n, l, r;
  function o() {
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
      t = p("button"), n = O(i), g(t, "class", "uikit-text-white uikit-font-bold uikit-px-6 uikit-py-4 uikit-rounded uikit-outline-none focus:uikit-outline-none uikit-mr-1 uikit-mb-1 uikit-bg-pink-500 active:uikit-bg-pink-600 uikit-uppercase uikit-text-sm uikit-shadow hover:uikit-shadow-lg uikit-ease-linear uikit-transition-all uikit-duration-150");
    },
    m(s, u) {
      j(s, t, u), k(t, n), l || (r = U(t, "click", o), l = !0);
    },
    p(s, u) {
      e = s, u & /*buttons*/
      32 && i !== (i = /*item*/
      e[11] + "") && H(n, i);
    },
    d(s) {
      s && T(t), l = !1, r();
    }
  };
}
function Si(e) {
  let t, i, n, l, r, o, s, u, f, c, a, d, h, m;
  return {
    c() {
      t = p("div"), i = p("img"), l = M(), r = p("div"), o = p("a"), s = O("❮"), f = M(), c = p("a"), a = O("❯"), h = M(), g(i, "alt", "..."), g(i, "class", "uikit-max-w-full uikit-rounded-lg uikit-shadow-xl"), J(i, "transform", "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"), it(i.src, n = /*item*/
      e[11]) || g(i, "src", n), g(o, "href", u = `#pd-cover-slide-${/*id*/
      e[1]}-${/*i*/
      (e[13] - 1 + /*covers*/
      e[2].length) % /*covers*/
      e[2].length}`), g(o, "class", "uikit-btn uikit-btn-circle"), g(c, "href", d = `#pd-cover-slide-${/*id*/
      e[1]}-${/*i*/
      (e[13] + 1) % /*covers*/
      e[2].length}`), g(c, "class", "uikit-btn uikit-btn-circle"), g(r, "class", "uikit-absolute uikit-flex uikit-justify-between uikit-transform uikit--translate-y-1/2 uikit-left-5 uikit-right-5 uikit-top-1/2"), g(t, "id", m = `pd-cover-slide-${/*id*/
      e[1]}-${/*i*/
      e[13]}`), g(t, "class", "uikit-carousel-item uikit-relative uikit-w-full");
    },
    m(w, v) {
      j(w, t, v), k(t, i), k(t, l), k(t, r), k(r, o), k(o, s), k(r, f), k(r, c), k(c, a), k(t, h);
    },
    p(w, v) {
      v & /*covers*/
      4 && !it(i.src, n = /*item*/
      w[11]) && g(i, "src", n), v & /*id, covers*/
      6 && u !== (u = `#pd-cover-slide-${/*id*/
      w[1]}-${/*i*/
      (w[13] - 1 + /*covers*/
      w[2].length) % /*covers*/
      w[2].length}`) && g(o, "href", u), v & /*id, covers*/
      6 && d !== (d = `#pd-cover-slide-${/*id*/
      w[1]}-${/*i*/
      (w[13] + 1) % /*covers*/
      w[2].length}`) && g(c, "href", d), v & /*id*/
      2 && m !== (m = `pd-cover-slide-${/*id*/
      w[1]}-${/*i*/
      w[13]}`) && g(t, "id", m);
    },
    d(w) {
      w && T(t);
    }
  };
}
function co(e) {
  let t, i, n, l, r, o, s, u, f, c, a, d, h, m, w, v, _, b, I, C, E, S = (
    /*icon*/
    e[8] && wi(e)
  ), F = G(
    /*sections*/
    e[4]
  ), B = [];
  for (let x = 0; x < F.length; x += 1)
    B[x] = xi(_i(e, F, x));
  const N = (x) => P(B[x], 1, 1, () => {
    B[x] = null;
  });
  let D = G(
    /*buttons*/
    e[5]
  ), V = [];
  for (let x = 0; x < D.length; x += 1)
    V[x] = Ci(vi(e, D, x));
  let L = G(
    /*covers*/
    e[2]
  ), K = [];
  for (let x = 0; x < L.length; x += 1)
    K[x] = Si(bi(e, L, x));
  return {
    c() {
      t = p("div"), i = p("div"), n = p("div"), l = p("div"), r = p("div"), S && S.c(), o = M(), s = p("h3"), u = O(
        /*title*/
        e[3]
      ), f = M(), c = p("p"), a = O(
        /*description*/
        e[9]
      ), d = M(), h = p("ul");
      for (let x = 0; x < B.length; x += 1)
        B[x].c();
      m = M(), w = p("div");
      for (let x = 0; x < V.length; x += 1)
        V[x].c();
      v = M(), _ = p("div"), b = p("div");
      for (let x = 0; x < K.length; x += 1)
        K[x].c();
      g(s, "class", "uikit-text-3xl uikit-font-semibold"), g(c, "class", "uikit-mt-4 uikit-text-md uikit-leading-relaxed uikit-text-slate-500"), g(h, "class", "uikit-list-none uikit-mt-6"), g(r, "class", "md:uikit-pr-12"), g(l, "class", "uikit-w-full md:uikit-w-1/3 uikit-ml-auto uikit-px-12 md:uikit-px-4"), g(b, "class", "uikit-carousel uikit-carousel-center uikit-w-full"), g(_, "class", "uikit-w-full md:uikit-w-2/3 uikit-mr-auto uikit-px-4 uikit-pt-24 md:uikit-pt-0"), g(n, "class", I = st(
        "uikit-flex uikit-justify-between uikit-w-full",
        /*rtl*/
        e[6] ? "uikit-flex-row-reverse" : ""
      )), g(i, "class", "uikit-items-center uikit-flex uikit-flex-wrap uikit-w-full"), g(t, "class", C = st(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        e[0]
      ));
    },
    m(x, z) {
      j(x, t, z), k(t, i), k(i, n), k(n, l), k(l, r), S && S.m(r, null), k(r, o), k(r, s), k(s, u), k(r, f), k(r, c), k(c, a), k(r, d), k(r, h);
      for (let y = 0; y < B.length; y += 1)
        B[y] && B[y].m(h, null);
      k(h, m), k(h, w);
      for (let y = 0; y < V.length; y += 1)
        V[y] && V[y].m(w, null);
      k(n, v), k(n, _), k(_, b);
      for (let y = 0; y < K.length; y += 1)
        K[y] && K[y].m(b, null);
      E = !0;
    },
    p(x, [z]) {
      if (/*icon*/
      x[8] ? S ? (S.p(x, z), z & /*icon*/
      256 && A(S, 1)) : (S = wi(x), S.c(), A(S, 1), S.m(r, o)) : S && (tt(), P(S, 1, 1, () => {
        S = null;
      }), et()), (!E || z & /*title*/
      8) && H(
        u,
        /*title*/
        x[3]
      ), (!E || z & /*description*/
      512) && H(
        a,
        /*description*/
        x[9]
      ), z & /*sections*/
      16) {
        F = G(
          /*sections*/
          x[4]
        );
        let y;
        for (y = 0; y < F.length; y += 1) {
          const $ = _i(x, F, y);
          B[y] ? (B[y].p($, z), A(B[y], 1)) : (B[y] = xi($), B[y].c(), A(B[y], 1), B[y].m(h, m));
        }
        for (tt(), y = F.length; y < B.length; y += 1)
          N(y);
        et();
      }
      if (z & /*buttonClick, buttons*/
      160) {
        D = G(
          /*buttons*/
          x[5]
        );
        let y;
        for (y = 0; y < D.length; y += 1) {
          const $ = vi(x, D, y);
          V[y] ? V[y].p($, z) : (V[y] = Ci($), V[y].c(), V[y].m(w, null));
        }
        for (; y < V.length; y += 1)
          V[y].d(1);
        V.length = D.length;
      }
      if (z & /*id, covers*/
      6) {
        L = G(
          /*covers*/
          x[2]
        );
        let y;
        for (y = 0; y < L.length; y += 1) {
          const $ = bi(x, L, y);
          K[y] ? K[y].p($, z) : (K[y] = Si($), K[y].c(), K[y].m(b, null));
        }
        for (; y < K.length; y += 1)
          K[y].d(1);
        K.length = L.length;
      }
      (!E || z & /*rtl*/
      64 && I !== (I = st(
        "uikit-flex uikit-justify-between uikit-w-full",
        /*rtl*/
        x[6] ? "uikit-flex-row-reverse" : ""
      ))) && g(n, "class", I), (!E || z & /*className*/
      1 && C !== (C = st(
        "uikit-container uikit-mx-auto uikit-px-4 uikit-py-8",
        /*className*/
        x[0]
      ))) && g(t, "class", C);
    },
    i(x) {
      if (!E) {
        A(S);
        for (let z = 0; z < F.length; z += 1)
          A(B[z]);
        E = !0;
      }
    },
    o(x) {
      P(S), B = B.filter(Boolean);
      for (let z = 0; z < B.length; z += 1)
        P(B[z]);
      E = !1;
    },
    d(x) {
      x && T(t), S && S.d(), X(B, x), X(V, x), X(K, x);
    }
  };
}
function ao(e, t, i) {
  let { class: n = "" } = t, { id: l = "" } = t, { covers: r = [] } = t, { title: o = "" } = t, { icon: s = "" } = t, { description: u = "" } = t, { sections: f = [] } = t, { buttons: c = [] } = t, { rtl: a = !1 } = t, { buttonClick: d = (m) => {
  } } = t;
  const h = (m) => d(m);
  return e.$$set = (m) => {
    "class" in m && i(0, n = m.class), "id" in m && i(1, l = m.id), "covers" in m && i(2, r = m.covers), "title" in m && i(3, o = m.title), "icon" in m && i(8, s = m.icon), "description" in m && i(9, u = m.description), "sections" in m && i(4, f = m.sections), "buttons" in m && i(5, c = m.buttons), "rtl" in m && i(6, a = m.rtl), "buttonClick" in m && i(7, d = m.buttonClick);
  }, [
    n,
    l,
    r,
    o,
    f,
    c,
    a,
    d,
    s,
    u,
    h
  ];
}
class fo extends Y {
  constructor(t) {
    super(), Q(this, t, ao, co, Z, {
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
const Fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: ro,
  Feature: uo,
  Header: io,
  ProjectDescription: fo
}, Symbol.toStringTag, { value: "Module" }));
function ko(e) {
  let t, i, n, l, r, o;
  return {
    c() {
      t = p("div"), i = p("div"), n = p("span"), l = M(), r = p("button"), o = O(
        /*btnText*/
        e[0]
      ), g(n, "id", "mask-desc"), g(n, "class", "mask-tip-desc svelte-17awz4u"), g(r, "id", "next-step-btn"), g(r, "class", "mask-tip-btn svelte-17awz4u"), g(i, "class", "mask-tip svelte-17awz4u"), J(t, "display", "none");
    },
    m(s, u) {
      j(s, t, u), k(t, i), k(i, n), k(i, l), k(i, r), k(r, o), e[6](i), e[7](t);
    },
    p(s, [u]) {
      u & /*btnText*/
      1 && H(
        o,
        /*btnText*/
        s[0]
      );
    },
    i: R,
    o: R,
    d(s) {
      s && T(t), e[6](null), e[7](null);
    }
  };
}
function go(e, t, i) {
  let n, l, { gapWidth: r = 5 } = t, { isStart: o } = t, { stepArr: s = [] } = t, { btnText: u = "下一步" } = t;
  const f = (d) => {
    if (d.length === 0) {
      i(1, n.style.display = "none", n);
      return;
    }
    const { id: h, desc: m } = d[0];
    var w = document.getElementById(h), v = w.offsetWidth, _ = w.offsetHeight, b = w.offsetLeft, I = w.offsetTop;
    console.log("待镂空元素: ", v, _, b, I);
    var C = document.body.scrollWidth, E = document.body.scrollHeight;
    i(1, n.style.width = C + "px", n), i(1, n.style.height = E + "px", n), i(1, n.style.position = "absolute", n), i(1, n.style.left = 0, n), i(1, n.style.top = 0, n), i(1, n.style.display = "block", n), i(1, n.style.boxSizing = "border-box", n), i(1, n.style.borderColor = "rgba(0, 0, 0, 0.75)", n), i(1, n.style.borderStyle = "solid", n), i(1, n.style.borderLeftWidth = b - r + "px", n), i(1, n.style.borderRightWidth = C - v - b - r + "px", n), i(1, n.style.borderTopWidth = I - r + "px", n), i(1, n.style.borderBottomWidth = E - _ - I - r + "px", n), i(2, l.style.top = _ + r * 2 + 10 + "px", l), i(2, l.style.left = "50%", l);
    var S = document.getElementById("mask-desc");
    S.innerHTML = m;
    var F = document.getElementById("next-step-btn");
    F.onclick = function() {
      d.shift(), f(d);
    };
  };
  function c(d) {
    ft[d ? "unshift" : "push"](() => {
      l = d, i(2, l);
    });
  }
  function a(d) {
    ft[d ? "unshift" : "push"](() => {
      n = d, i(1, n);
    });
  }
  return e.$$set = (d) => {
    "gapWidth" in d && i(3, r = d.gapWidth), "isStart" in d && i(4, o = d.isStart), "stepArr" in d && i(5, s = d.stepArr), "btnText" in d && i(0, u = d.btnText);
  }, e.$$.update = () => {
    e.$$.dirty & /*isStart, stepArr*/
    48 && o && f(s);
  }, [
    u,
    n,
    l,
    r,
    o,
    s,
    c,
    a
  ];
}
class Do extends Y {
  constructor(t) {
    super(), Q(this, t, go, ko, Z, {
      gapWidth: 3,
      isStart: 4,
      stepArr: 5,
      btnText: 0
    });
  }
}
function ho(e) {
  let t, i, n = (
    /*Letter*/
    (e[2].substring(0, 1) || "A") + ""
  ), l, r, o;
  return {
    c() {
      t = p("button"), i = p("span"), l = O(n), g(i, "class", "letter svelte-1qpz8gt"), J(i, "font-size", `${/*size*/
      e[0] * 2 / 3}px`), g(t, "class", "icon svelte-1qpz8gt"), J(t, "width", `${/*size*/
      e[0]}px`), J(t, "height", `${/*size*/
      e[0]}px`), J(
        t,
        "background-color",
        /*color*/
        e[1]
      );
    },
    m(s, u) {
      j(s, t, u), k(t, i), k(i, l), r || (o = U(t, "click", function() {
        Nt(
          /*onClick*/
          e[3]
        ) && e[3].apply(this, arguments);
      }), r = !0);
    },
    p(s, [u]) {
      e = s, u & /*Letter*/
      4 && n !== (n = /*Letter*/
      (e[2].substring(0, 1) || "A") + "") && H(l, n), u & /*size*/
      1 && J(i, "font-size", `${/*size*/
      e[0] * 2 / 3}px`), u & /*size*/
      1 && J(t, "width", `${/*size*/
      e[0]}px`), u & /*size*/
      1 && J(t, "height", `${/*size*/
      e[0]}px`), u & /*color*/
      2 && J(
        t,
        "background-color",
        /*color*/
        e[1]
      );
    },
    i: R,
    o: R,
    d(s) {
      s && T(t), r = !1, o();
    }
  };
}
function mo(e, t, i) {
  let { size: n = 128 } = t, { color: l = "green" } = t, { Letter: r = "A" } = t, { onClick: o = () => {
  } } = t;
  return e.$$set = (s) => {
    "size" in s && i(0, n = s.size), "color" in s && i(1, l = s.color), "Letter" in s && i(2, r = s.Letter), "onClick" in s && i(3, o = s.onClick);
  }, [n, l, r, o];
}
class Vo extends Y {
  constructor(t) {
    super(), Q(this, t, mo, ho, Z, { size: 0, color: 1, Letter: 2, onClick: 3 });
  }
}
function po(e) {
  let t, i, n, l, r, o, s, u, f, c, a, d, h, m, w, v, _, b, I, C, E, S, F, B;
  return {
    c() {
      t = p("div"), i = p("div"), n = p("img"), r = M(), o = p("div"), s = M(), u = p("button"), u.innerHTML = '<span class="uikit-absolute uikit-top-1/2 uikit-left-1/2 -uikit-translate-y-1/2 -uikit-translate-x-1/2 uikit-transform"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-6 w-6"><path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path></svg></span>', f = M(), c = p("div"), a = p("div"), d = p("h5"), h = O(
        /*title*/
        e[1]
      ), m = M(), w = p("p"), w.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="-uikit-mt-0.5 uikit-h-5 uikit-w-5 uikit-text-yellow-700"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg>
                5.0`, v = M(), _ = p("p"), b = O(
        /*desc*/
        e[2]
      ), I = M(), C = p("div"), E = M(), S = p("div"), F = p("button"), B = O(
        /*button*/
        e[3]
      ), it(n.src, l = /*covers*/
      e[0][0]) || g(n, "src", l), g(n, "alt", "ui/ux review check"), g(o, "class", "uikit-to-bg-black-10 uikit-absolute uikit-inset-0 uikit-h-full uikit-w-full uikit-bg-gradient-to-tr uikit-from-transparent uikit-via-transparent uikit-to-black/60"), g(u, "class", "!uikit-absolute uikit-top-4 uikit-right-4 uikit-h-8 uikit-max-h-[32px] uikit-w-8 uikit-max-w-[32px] uikit-select-none uikit-rounded-full uikit-text-center uikit-align-middle uikit-font-sans uikit-text-xs uikit-font-medium uikit-uppercase uikit-text-red-500 uikit-transition-all hover:uikit-bg-red-500/10 active:uikit-bg-red-500/30 disabled:uikit-pointer-events-none disabled:uikit-opacity-50 disabled:uikit-shadow-none"), g(u, "type", "button"), g(u, "data-ripple-dark", "true"), g(i, "class", "uikit-relative uikit-mx-4 uikit-mt-4 uikit-overflow-hidden uikit-rounded-xl uikit-bg-blue-gray-500 uikit-bg-clip-border uikit-text-white uikit-shadow-lg uikit-shadow-blue-gray-500/40"), g(d, "class", "uikit-block uikit-font-sans uikit-text-xl uikit-font-medium uikit-leading-snug uikit-tracking-normal uikit-text-blue-gray-900 uikit-antialiased"), g(w, "class", "uikit-flex uikit-items-center uikit-gap-1.5 uikit-font-sans uikit-text-base uikit-font-normal uikit-leading-relaxed uikit-text-blue-gray-900 uikit-antialiased"), g(a, "class", "uikit-mb-3 uikit-flex uikit-items-center uikit-justify-between"), g(_, "class", "uikit-block uikit-font-sans uikit-text-base uikit-font-light uikit-leading-relaxed uikit-text-gray-700 uikit-antialiased"), g(C, "class", "uikit-group uikit-mt-8 uikit-inline-flex uikit-flex-wrap uikit-items-center uikit-gap-3"), g(c, "class", "uikit-p-6"), g(F, "class", "uikit-block uikit-w-full uikit-select-none uikit-rounded-lg uikit-bg-pink-500 uikit-py-3.5 uikit-px-7 uikit-text-center uikit-align-middle uikit-font-sans uikit-text-sm uikit-font-bold uikit-uppercase uikit-text-white uikit-shadow-md uikit-shadow-pink-500/20 uikit-transition-all hover:uikit-shadow-lg hover:uikit-shadow-pink-500/40 focus:uikit-opacity-[0.85] focus:uikit-shadow-none active:uikit-opacity-[0.85] active:uikit-shadow-none disabled:uikit-pointer-events-none disabled:uikit-opacity-50 disabled:uikit-shadow-none"), g(F, "type", "button"), g(F, "data-ripple-light", "true"), g(S, "class", "uikit-p-6 uikit-pt-3"), g(t, "class", "uikit-relative uikit-flex w-full uikit-max-w-[26rem] uikit-flex-col uikit-rounded-xl uikit-bg-white uikit-bg-clip-border uikit-text-gray-700 uikit-shadow-lg");
    },
    m(N, D) {
      j(N, t, D), k(t, i), k(i, n), k(i, r), k(i, o), k(i, s), k(i, u), k(t, f), k(t, c), k(c, a), k(a, d), k(d, h), k(a, m), k(a, w), k(c, v), k(c, _), k(_, b), k(c, I), k(c, C), e[6](C), k(t, E), k(t, S), k(S, F), k(F, B);
    },
    p(N, [D]) {
      D & /*covers*/
      1 && !it(n.src, l = /*covers*/
      N[0][0]) && g(n, "src", l), D & /*title*/
      2 && H(
        h,
        /*title*/
        N[1]
      ), D & /*desc*/
      4 && H(
        b,
        /*desc*/
        N[2]
      ), D & /*button*/
      8 && H(
        B,
        /*button*/
        N[3]
      );
    },
    i: R,
    o: R,
    d(N) {
      N && T(t), e[6](null);
    }
  };
}
function bo(e, t, i) {
  let { covers: n = [
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
  ] } = t, { title: l = "a title" } = t, { desc: r = "a desc desc desc" } = t, { body: o = "" } = t, { button: s = "todo" } = t, u;
  function f(c) {
    ft[c ? "unshift" : "push"](() => {
      u = c, i(4, u), i(5, o);
    });
  }
  return e.$$set = (c) => {
    "covers" in c && i(0, n = c.covers), "title" in c && i(1, l = c.title), "desc" in c && i(2, r = c.desc), "body" in c && i(5, o = c.body), "button" in c && i(3, s = c.button);
  }, e.$$.update = () => {
    e.$$.dirty & /*body, cardbody*/
    48;
  }, [n, l, r, s, u, o, f];
}
class qo extends Y {
  constructor(t) {
    super(), Q(this, t, bo, po, Z, {
      covers: 0,
      title: 1,
      desc: 2,
      body: 5,
      button: 3
    });
  }
}
function Ii(e, t, i) {
  const n = e.slice();
  return n[8] = t[i], n;
}
function Mi(e) {
  let t, i, n, l, r, o, s = (
    /*item*/
    (e[8].title || /*title*/
    e[2]) + ""
  ), u, f, c, a, d = (
    /*item*/
    (e[8].author || /*author*/
    e[3]) + ""
  ), h, m, w = (
    /*item*/
    (e[8].updatetime || /*updatetime*/
    e[4]) + ""
  ), v, _, b, I;
  function C() {
    return (
      /*click_handler*/
      e[7](
        /*item*/
        e[8]
      )
    );
  }
  return {
    c() {
      t = p("div"), i = p("img"), l = M(), r = p("div"), o = p("button"), u = O(s), f = M(), c = p("span"), a = p("p"), h = O(d), m = O(`
                    On: `), v = O(w), _ = M(), g(i, "class", "uikit-object-cover uikit-w-full uikit-h-56 uikit-rounded-lg lg:uikit-w-64"), it(i.src, n = /*item*/
      e[8].cover || /*cover*/
      e[1]) || g(i, "src", n), g(i, "alt", ""), g(o, "class", "uikit-text-xl uikit-font-semibold uikit-text-gray-800 hover:uikit-underline dark:uikit-text-white"), g(c, "class", "uikit-text-sm uikit-text-gray-500 dark:uikit-text-gray-300"), g(r, "class", "uikit-flex uikit-flex-col uikit-justify-between uikit-py-6 lg:uikit-mx-6"), g(t, "class", "lg:uikit-flex uikit-w-full uikit-h-full uikit-shadow-lg");
    },
    m(E, S) {
      j(E, t, S), k(t, i), k(t, l), k(t, r), k(r, o), k(o, u), k(r, f), k(r, c), k(c, a), k(a, h), k(c, m), k(c, v), k(t, _), b || (I = U(o, "click", C), b = !0);
    },
    p(E, S) {
      e = E, S & /*blogs, cover*/
      3 && !it(i.src, n = /*item*/
      e[8].cover || /*cover*/
      e[1]) && g(i, "src", n), S & /*blogs, title*/
      5 && s !== (s = /*item*/
      (e[8].title || /*title*/
      e[2]) + "") && H(u, s), S & /*blogs, author*/
      9 && d !== (d = /*item*/
      (e[8].author || /*author*/
      e[3]) + "") && H(h, d), S & /*blogs, updatetime*/
      17 && w !== (w = /*item*/
      (e[8].updatetime || /*updatetime*/
      e[4]) + "") && H(v, w);
    },
    d(E) {
      E && T(t), b = !1, I();
    }
  };
}
function vo(e) {
  let t, i, n = G(
    /*blogs*/
    e[0]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Mi(Ii(e, n, r));
  return {
    c() {
      t = p("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      g(t, "class", i = /*blogs*/
      e[0].length > 1 ? "uikit-grid uikit-grid-cols-1 uikit-gap-8 uikit-mt-8 md:uikit-mt-16 md:uikit-grid-cols-2" : "uikit-mt-8 md:uikit-mt-16");
    },
    m(r, o) {
      j(r, t, o);
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(t, null);
    },
    p(r, [o]) {
      if (o & /*blogs, updatetime, author, onClick, title, cover*/
      63) {
        n = G(
          /*blogs*/
          r[0]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const u = Ii(r, n, s);
          l[s] ? l[s].p(u, o) : (l[s] = Mi(u), l[s].c(), l[s].m(t, null));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = n.length;
      }
      o & /*blogs*/
      1 && i !== (i = /*blogs*/
      r[0].length > 1 ? "uikit-grid uikit-grid-cols-1 uikit-gap-8 uikit-mt-8 md:uikit-mt-16 md:uikit-grid-cols-2" : "uikit-mt-8 md:uikit-mt-16") && g(t, "class", i);
    },
    i: R,
    o: R,
    d(r) {
      r && T(t), X(l, r);
    }
  };
}
function _o(e, t, i) {
  let { cover: n = "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" } = t, { title: l = "a title" } = t, { url: r = "" } = t, { author: o = "wwqdrh" } = t, { updatetime: s = "N/A" } = t, { blogs: u = [] } = t, { onClick: f = (a) => {
    a && (window.location.href = a);
  } } = t;
  kt(() => {
    u.length === 0 && i(0, u = [{ cover: n, title: l, url: r, author: o, updatetime: s }]);
  });
  const c = (a) => {
    f(a.url);
  };
  return e.$$set = (a) => {
    "cover" in a && i(1, n = a.cover), "title" in a && i(2, l = a.title), "url" in a && i(6, r = a.url), "author" in a && i(3, o = a.author), "updatetime" in a && i(4, s = a.updatetime), "blogs" in a && i(0, u = a.blogs), "onClick" in a && i(5, f = a.onClick);
  }, [u, n, l, o, s, f, r, c];
}
class Uo extends Y {
  constructor(t) {
    super(), Q(this, t, _o, vo, Z, {
      cover: 1,
      title: 2,
      url: 6,
      author: 3,
      updatetime: 4,
      blogs: 0,
      onClick: 5
    });
  }
}
function Ti(e, t, i) {
  const n = e.slice();
  return n[8] = t[i], n;
}
function ji(e, t, i) {
  const n = e.slice();
  return n[13] = t[i], n;
}
function Ei(e, t, i) {
  const n = e.slice();
  return n[8] = t[i], n;
}
function Ai(e, t, i) {
  const n = e.slice();
  return n[8] = t[i], n;
}
function wo(e) {
  let t, i, n, l, r = G(
    /*menus*/
    e[2].slice(0, -1)
  ), o = [];
  for (let c = 0; c < r.length; c += 1)
    o[c] = zi(ji(e, r, c));
  let s = G(
    /*menus*/
    e[2][
      /*menus*/
      e[2].length - 1
    ]
  ), u = [];
  for (let c = 0; c < s.length; c += 1)
    u[c] = Bi(Ti(e, s, c));
  const f = (c) => P(u[c], 1, 1, () => {
    u[c] = null;
  });
  return {
    c() {
      t = p("div");
      for (let c = 0; c < o.length; c += 1)
        o[c].c();
      i = M(), n = p("div");
      for (let c = 0; c < u.length; c += 1)
        u[c].c();
      g(t, "class", "uikit-hidden md:uikit-flex uikit-flex-auto uikit-justify-around"), g(n, "class", "uikit-flex-none uikit-w-20 uikit-flex");
    },
    m(c, a) {
      j(c, t, a);
      for (let d = 0; d < o.length; d += 1)
        o[d] && o[d].m(t, null);
      j(c, i, a), j(c, n, a);
      for (let d = 0; d < u.length; d += 1)
        u[d] && u[d].m(n, null);
      l = !0;
    },
    p(c, a) {
      if (a & /*menus, onClick*/
      12) {
        r = G(
          /*menus*/
          c[2].slice(0, -1)
        );
        let d;
        for (d = 0; d < r.length; d += 1) {
          const h = ji(c, r, d);
          o[d] ? o[d].p(h, a) : (o[d] = zi(h), o[d].c(), o[d].m(t, null));
        }
        for (; d < o.length; d += 1)
          o[d].d(1);
        o.length = r.length;
      }
      if (a & /*onClick, menus*/
      12) {
        s = G(
          /*menus*/
          c[2][
            /*menus*/
            c[2].length - 1
          ]
        );
        let d;
        for (d = 0; d < s.length; d += 1) {
          const h = Ti(c, s, d);
          u[d] ? (u[d].p(h, a), A(u[d], 1)) : (u[d] = Bi(h), u[d].c(), A(u[d], 1), u[d].m(n, null));
        }
        for (tt(), d = s.length; d < u.length; d += 1)
          f(d);
        et();
      }
    },
    i(c) {
      if (!l) {
        for (let a = 0; a < s.length; a += 1)
          A(u[a]);
        l = !0;
      }
    },
    o(c) {
      u = u.filter(Boolean);
      for (let a = 0; a < u.length; a += 1)
        P(u[a]);
      l = !1;
    },
    d(c) {
      c && (T(t), T(i), T(n)), X(o, c), X(u, c);
    }
  };
}
function yo(e) {
  let t, i, n = G(
    /*menus*/
    e[2][
      /*menus*/
      e[2].length - 1
    ]
  ), l = [];
  for (let o = 0; o < n.length; o += 1)
    l[o] = Gi(Ai(e, n, o));
  const r = (o) => P(l[o], 1, 1, () => {
    l[o] = null;
  });
  return {
    c() {
      t = p("div");
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      g(t, "class", "uikit-flex-none uikit-w-20 uikit-flex");
    },
    m(o, s) {
      j(o, t, s);
      for (let u = 0; u < l.length; u += 1)
        l[u] && l[u].m(t, null);
      i = !0;
    },
    p(o, s) {
      if (s & /*onClick, menus*/
      12) {
        n = G(
          /*menus*/
          o[2][
            /*menus*/
            o[2].length - 1
          ]
        );
        let u;
        for (u = 0; u < n.length; u += 1) {
          const f = Ai(o, n, u);
          l[u] ? (l[u].p(f, s), A(l[u], 1)) : (l[u] = Gi(f), l[u].c(), A(l[u], 1), l[u].m(t, null));
        }
        for (tt(), u = n.length; u < l.length; u += 1)
          r(u);
        et();
      }
    },
    i(o) {
      if (!i) {
        for (let s = 0; s < n.length; s += 1)
          A(l[s]);
        i = !0;
      }
    },
    o(o) {
      l = l.filter(Boolean);
      for (let s = 0; s < l.length; s += 1)
        P(l[s]);
      i = !1;
    },
    d(o) {
      o && T(t), X(l, o);
    }
  };
}
function Li(e) {
  let t, i = (
    /*item*/
    e[8].title + ""
  ), n, l, r;
  function o() {
    return (
      /*click_handler_2*/
      e[6](
        /*item*/
        e[8]
      )
    );
  }
  return {
    c() {
      t = p("button"), n = O(i), g(t, "class", "uikit-grid uikit-content-center");
    },
    m(s, u) {
      j(s, t, u), k(t, n), l || (r = U(t, "click", o), l = !0);
    },
    p(s, u) {
      e = s, u & /*menus*/
      4 && i !== (i = /*item*/
      e[8].title + "") && H(n, i);
    },
    d(s) {
      s && T(t), l = !1, r();
    }
  };
}
function zi(e) {
  let t, i, n = G(
    /*section*/
    e[13]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Li(Ei(e, n, r));
  return {
    c() {
      t = p("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      i = M(), g(t, "class", "uikit-flex uikit-space-x-3");
    },
    m(r, o) {
      j(r, t, o);
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(t, null);
      k(t, i);
    },
    p(r, o) {
      if (o & /*onClick, menus*/
      12) {
        n = G(
          /*section*/
          r[13]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const u = Ei(r, n, s);
          l[s] ? l[s].p(u, o) : (l[s] = Li(u), l[s].c(), l[s].m(t, i));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = n.length;
      }
    },
    d(r) {
      r && T(t), X(l, r);
    }
  };
}
function Pi(e) {
  let t, i = (
    /*item*/
    e[8].title + ""
  ), n;
  return {
    c() {
      t = p("div"), n = O(i);
    },
    m(l, r) {
      j(l, t, r), k(t, n);
    },
    p(l, r) {
      r & /*menus*/
      4 && i !== (i = /*item*/
      l[8].title + "") && H(n, i);
    },
    d(l) {
      l && T(t);
    }
  };
}
function Oi(e) {
  let t, i;
  return t = new ct({ props: { icon: (
    /*item*/
    e[8].icon
  ) } }), {
    c() {
      ot(t.$$.fragment);
    },
    m(n, l) {
      nt(t, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*menus*/
      4 && (r.icon = /*item*/
      n[8].icon), t.$set(r);
    },
    i(n) {
      i || (A(t.$$.fragment, n), i = !0);
    },
    o(n) {
      P(t.$$.fragment, n), i = !1;
    },
    d(n) {
      lt(t, n);
    }
  };
}
function Bi(e) {
  let t, i, n, l, r, o, s = (
    /*item*/
    e[8].title && Pi(e)
  ), u = (
    /*item*/
    e[8].icon && Oi(e)
  );
  function f() {
    return (
      /*click_handler_3*/
      e[7](
        /*item*/
        e[8]
      )
    );
  }
  return {
    c() {
      t = p("button"), s && s.c(), i = M(), u && u.c(), n = M(), g(t, "class", "uikit-px-3 uikit-grid uikit-content-center");
    },
    m(c, a) {
      j(c, t, a), s && s.m(t, null), k(t, i), u && u.m(t, null), k(t, n), l = !0, r || (o = U(t, "click", f), r = !0);
    },
    p(c, a) {
      e = c, /*item*/
      e[8].title ? s ? s.p(e, a) : (s = Pi(e), s.c(), s.m(t, i)) : s && (s.d(1), s = null), /*item*/
      e[8].icon ? u ? (u.p(e, a), a & /*menus*/
      4 && A(u, 1)) : (u = Oi(e), u.c(), A(u, 1), u.m(t, n)) : u && (tt(), P(u, 1, 1, () => {
        u = null;
      }), et());
    },
    i(c) {
      l || (A(u), l = !0);
    },
    o(c) {
      P(u), l = !1;
    },
    d(c) {
      c && T(t), s && s.d(), u && u.d(), r = !1, o();
    }
  };
}
function Ni(e) {
  let t, i = (
    /*item*/
    e[8].title + ""
  ), n;
  return {
    c() {
      t = p("div"), n = O(i);
    },
    m(l, r) {
      j(l, t, r), k(t, n);
    },
    p(l, r) {
      r & /*menus*/
      4 && i !== (i = /*item*/
      l[8].title + "") && H(n, i);
    },
    d(l) {
      l && T(t);
    }
  };
}
function Hi(e) {
  let t, i;
  return t = new ct({ props: { icon: (
    /*item*/
    e[8].icon
  ) } }), {
    c() {
      ot(t.$$.fragment);
    },
    m(n, l) {
      nt(t, n, l), i = !0;
    },
    p(n, l) {
      const r = {};
      l & /*menus*/
      4 && (r.icon = /*item*/
      n[8].icon), t.$set(r);
    },
    i(n) {
      i || (A(t.$$.fragment, n), i = !0);
    },
    o(n) {
      P(t.$$.fragment, n), i = !1;
    },
    d(n) {
      lt(t, n);
    }
  };
}
function Gi(e) {
  let t, i, n, l, r, o, s = (
    /*item*/
    e[8].title && Ni(e)
  ), u = (
    /*item*/
    e[8].icon && Hi(e)
  );
  function f() {
    return (
      /*click_handler_1*/
      e[5](
        /*item*/
        e[8]
      )
    );
  }
  return {
    c() {
      t = p("button"), s && s.c(), i = M(), u && u.c(), n = M(), g(t, "class", "uikit-px-3 uikit-grid uikit-content-center");
    },
    m(c, a) {
      j(c, t, a), s && s.m(t, null), k(t, i), u && u.m(t, null), k(t, n), l = !0, r || (o = U(t, "click", f), r = !0);
    },
    p(c, a) {
      e = c, /*item*/
      e[8].title ? s ? s.p(e, a) : (s = Ni(e), s.c(), s.m(t, i)) : s && (s.d(1), s = null), /*item*/
      e[8].icon ? u ? (u.p(e, a), a & /*menus*/
      4 && A(u, 1)) : (u = Hi(e), u.c(), A(u, 1), u.m(t, n)) : u && (tt(), P(u, 1, 1, () => {
        u = null;
      }), et());
    },
    i(c) {
      l || (A(u), l = !0);
    },
    o(c) {
      P(u), l = !1;
    },
    d(c) {
      c && T(t), s && s.d(), u && u.d(), r = !1, o();
    }
  };
}
function xo(e) {
  let t, i, n, l, r, o, s, u, f, c, a;
  const d = [yo, wo], h = [];
  function m(w, v) {
    return (
      /*menus*/
      w[2].length === 1 ? 0 : (
        /*menus*/
        w[2].length > 1 ? 1 : -1
      )
    );
  }
  return ~(s = m(e)) && (u = h[s] = d[s](e)), {
    c() {
      t = p("div"), i = p("div"), n = p("button"), l = p("img"), o = M(), u && u.c(), g(l, "alt", "header-icon"), it(l.src, r = /*icon*/
      e[0]) || g(l, "src", r), g(n, "class", "uikit-grid uikit-content-center"), g(i, "class", "uikit-flex-none uikit-w-20"), g(t, "class", "uikit-w-full uikit-flex uikit-justify-between uikit-text-center uikit-p-6 uikit-font-mono uikit-font-medium");
    },
    m(w, v) {
      j(w, t, v), k(t, i), k(i, n), k(n, l), k(t, o), ~s && h[s].m(t, null), f = !0, c || (a = U(
        n,
        "click",
        /*click_handler*/
        e[4]
      ), c = !0);
    },
    p(w, [v]) {
      (!f || v & /*icon*/
      1 && !it(l.src, r = /*icon*/
      w[0])) && g(l, "src", r);
      let _ = s;
      s = m(w), s === _ ? ~s && h[s].p(w, v) : (u && (tt(), P(h[_], 1, 1, () => {
        h[_] = null;
      }), et()), ~s ? (u = h[s], u ? u.p(w, v) : (u = h[s] = d[s](w), u.c()), A(u, 1), u.m(t, null)) : u = null);
    },
    i(w) {
      f || (A(u), f = !0);
    },
    o(w) {
      P(u), f = !1;
    },
    d(w) {
      w && T(t), ~s && h[s].d(), c = !1, a();
    }
  };
}
function Co(e, t, i) {
  let { icon: n = "" } = t, { home: l = "/" } = t, { menus: r = [] } = t, { onClick: o = (a) => {
    a && (window.location.href = a);
  } } = t;
  const s = () => {
    o(l);
  }, u = (a) => {
    o(a.url);
  }, f = (a) => {
    o(a.url);
  }, c = (a) => {
    o(a.url);
  };
  return e.$$set = (a) => {
    "icon" in a && i(0, n = a.icon), "home" in a && i(1, l = a.home), "menus" in a && i(2, r = a.menus), "onClick" in a && i(3, o = a.onClick);
  }, [
    n,
    l,
    r,
    o,
    s,
    u,
    f,
    c
  ];
}
class Zo extends Y {
  constructor(t) {
    super(), Q(this, t, Co, xo, Z, { icon: 0, home: 1, menus: 2, onClick: 3 });
  }
}
function Ri(e, { delay: t = 0, duration: i = 400, easing: n = Zi } = {}) {
  const l = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: i,
    easing: n,
    css: (r) => `opacity: ${r * l}`
  };
}
function So(e) {
  let t, i;
  return {
    c() {
      t = p("img"), g(t, "class", "uikit-w-full uikit-h-full uikit-object-cover"), it(t.src, i = /*src*/
      e[0]) || g(t, "src", i), g(t, "alt", "");
    },
    m(n, l) {
      j(n, t, l);
    },
    p(n, l) {
      l & /*src*/
      1 && !it(t.src, i = /*src*/
      n[0]) && g(t, "src", i);
    },
    d(n) {
      n && T(t);
    }
  };
}
function Io(e) {
  let t, i, n, l, r, o, s, u;
  return {
    c() {
      t = p("img"), n = M(), l = p("div"), r = p("img"), g(t, "class", "uikit-cursor-zoom-in uikit-w-full uikit-h-full uikit-object-cover"), it(t.src, i = /*src*/
      e[0]) || g(t, "src", i), g(t, "alt", ""), g(r, "class", "uikit-cursor-zoom-out uikit-rounded uikit-max-h-full uikit-max-w-full uikit-object-cover"), it(r.src, o = /*src*/
      e[0]) || g(r, "src", o), g(r, "alt", ""), g(l, "class", "uikit-fixed uikit-z-50 uikit-inset-0 uikit-flex uikit-items-center uikit-justify-center uikit-bg-black uikit-bg-opacity-80"), xt(l, "uikit-hidden", !/*expanded*/
      e[3]);
    },
    m(f, c) {
      j(f, t, c), j(f, n, c), j(f, l, c), k(l, r), s || (u = [
        U(
          t,
          "click",
          /*click_handler*/
          e[6]
        ),
        U(
          l,
          "click",
          /*click_handler_1*/
          e[7]
        )
      ], s = !0);
    },
    p(f, c) {
      c & /*src*/
      1 && !it(t.src, i = /*src*/
      f[0]) && g(t, "src", i), c & /*src*/
      1 && !it(r.src, o = /*src*/
      f[0]) && g(r, "src", o), c & /*expanded*/
      8 && xt(l, "uikit-hidden", !/*expanded*/
      f[3]);
    },
    d(f) {
      f && (T(t), T(n), T(l)), s = !1, dt(u);
    }
  };
}
function Mo(e) {
  let t;
  function i(r, o) {
    return (
      /*full*/
      r[1] ? Io : So
    );
  }
  let n = i(e), l = n(e);
  return {
    c() {
      l.c(), t = pt();
    },
    m(r, o) {
      l.m(r, o), j(r, t, o);
    },
    p(r, [o]) {
      n === (n = i(r)) && l ? l.p(r, o) : (l.d(1), l = n(r), l && (l.c(), l.m(t.parentNode, t)));
    },
    i: R,
    o: R,
    d(r) {
      r && T(t), l.d(r);
    }
  };
}
function To(e, t, i) {
  let { src: n } = t, { full: l = !1 } = t, { onClick: r = (a) => !0 } = t;
  function o() {
    i(3, u = !0);
  }
  function s() {
    i(3, u = !1);
  }
  let u = !1;
  const f = () => {
    r("open") && i(3, u = !0);
  }, c = () => {
    r("close") && i(3, u = !1);
  };
  return e.$$set = (a) => {
    "src" in a && i(0, n = a.src), "full" in a && i(1, l = a.full), "onClick" in a && i(2, r = a.onClick);
  }, [n, l, r, u, o, s, f, c];
}
class jo extends Y {
  constructor(t) {
    super(), Q(this, t, To, Mo, Z, {
      src: 0,
      full: 1,
      onClick: 2,
      open: 4,
      close: 5
    });
  }
  get open() {
    return this.$$.ctx[4];
  }
  get close() {
    return this.$$.ctx[5];
  }
}
function Wi(e, t, i) {
  const n = e.slice();
  return n[11] = t[i], n[13] = i, n;
}
function Fi(e, t, i) {
  const n = e.slice();
  return n[14] = t[i], n[13] = i, n;
}
function Di(e) {
  let t, i, n, l;
  return i = new jo({
    props: {
      onClick: (
        /*func*/
        e[8]
      ),
      src: (
        /*image*/
        e[14]
      ),
      full: !0
    }
  }), {
    c() {
      t = p("div"), ot(i.$$.fragment), g(t, "class", "uikit-w-full uikit-absolute uikit-h-full"), J(
        t,
        "opacity",
        /*i*/
        e[13] === /*currentIndex*/
        e[2] ? 1 : 0
      ), xt(
        t,
        "uikit-hidden",
        /*i*/
        e[13] !== /*currentIndex*/
        e[2]
      );
    },
    m(r, o) {
      j(r, t, o), nt(i, t, null), l = !0;
    },
    p(r, o) {
      const s = {};
      o & /*playing*/
      2 && (s.onClick = /*func*/
      r[8]), o & /*images*/
      1 && (s.src = /*image*/
      r[14]), i.$set(s), (!l || o & /*currentIndex*/
      4) && J(
        t,
        "opacity",
        /*i*/
        r[13] === /*currentIndex*/
        r[2] ? 1 : 0
      ), (!l || o & /*currentIndex*/
      4) && xt(
        t,
        "uikit-hidden",
        /*i*/
        r[13] !== /*currentIndex*/
        r[2]
      );
    },
    i(r) {
      l || (A(i.$$.fragment, r), r && Pt(() => {
        l && (n || (n = Le(t, Ri, { duration: 500 }, !0)), n.run(1));
      }), l = !0);
    },
    o(r) {
      P(i.$$.fragment, r), r && (n || (n = Le(t, Ri, { duration: 500 }, !1)), n.run(0)), l = !1;
    },
    d(r) {
      r && T(t), lt(i), r && n && n.end();
    }
  };
}
function Vi(e) {
  let t, i, n, l;
  function r() {
    return (
      /*click_handler*/
      e[9](
        /*i*/
        e[13]
      )
    );
  }
  return {
    c() {
      t = p("button"), g(t, "class", i = "uikit-w-3 uikit-h-3 uikit-rounded-full " + /*i*/
      (e[13] === /*currentIndex*/
      e[2] ? "uikit-bg-black" : "uikit-bg-gray-400") + " uikit-mx-1");
    },
    m(o, s) {
      j(o, t, s), n || (l = U(t, "click", r), n = !0);
    },
    p(o, s) {
      e = o, s & /*currentIndex*/
      4 && i !== (i = "uikit-w-3 uikit-h-3 uikit-rounded-full " + /*i*/
      (e[13] === /*currentIndex*/
      e[2] ? "uikit-bg-black" : "uikit-bg-gray-400") + " uikit-mx-1") && g(t, "class", i);
    },
    d(o) {
      o && T(t), n = !1, l();
    }
  };
}
function Eo(e) {
  let t, i, n, l, r, o, s, u, f, c, a, d, h = G(
    /*images*/
    e[0]
  ), m = [];
  for (let b = 0; b < h.length; b += 1)
    m[b] = Di(Fi(e, h, b));
  const w = (b) => P(m[b], 1, 1, () => {
    m[b] = null;
  });
  l = new ct({
    props: {
      class: "uikit-h-full uikit-w-8 uikit-text-white uikit-bg-black uikit-opacity-30",
      icon: "mingcute:left-fill"
    }
  }), s = new ct({
    props: {
      class: "uikit-h-full uikit-w-8 uikit-text-white uikit-bg-black uikit-opacity-30",
      icon: "mingcute:right-fill"
    }
  });
  let v = G(
    /*images*/
    e[0]
  ), _ = [];
  for (let b = 0; b < v.length; b += 1)
    _[b] = Vi(Wi(e, v, b));
  return {
    c() {
      t = p("div");
      for (let b = 0; b < m.length; b += 1)
        m[b].c();
      i = M(), n = p("button"), ot(l.$$.fragment), r = M(), o = p("button"), ot(s.$$.fragment), u = M(), f = p("div");
      for (let b = 0; b < _.length; b += 1)
        _[b].c();
      g(n, "class", "uikit-absolute uikit-z-10 uikit-h-full uikit-left-0"), g(o, "class", "uikit-absolute uikit-z-10 uikit-h-full uikit-right-0"), g(f, "class", "uikit-absolute uikit-z-10 uikit-bottom-0 uikit-flex uikit-justify-center uikit-w-full uikit-left-0 uikit-right-0 uikit-p-4"), g(t, "class", "uikit-relative uikit-w-full uikit-h-full uikit-min-h-[300px]");
    },
    m(b, I) {
      j(b, t, I);
      for (let C = 0; C < m.length; C += 1)
        m[C] && m[C].m(t, null);
      k(t, i), k(t, n), nt(l, n, null), k(t, r), k(t, o), nt(s, o, null), k(t, u), k(t, f);
      for (let C = 0; C < _.length; C += 1)
        _[C] && _[C].m(f, null);
      c = !0, a || (d = [
        U(
          n,
          "click",
          /*previous*/
          e[3]
        ),
        U(
          o,
          "click",
          /*next*/
          e[4]
        )
      ], a = !0);
    },
    p(b, [I]) {
      if (I & /*currentIndex, playing, images*/
      7) {
        h = G(
          /*images*/
          b[0]
        );
        let C;
        for (C = 0; C < h.length; C += 1) {
          const E = Fi(b, h, C);
          m[C] ? (m[C].p(E, I), A(m[C], 1)) : (m[C] = Di(E), m[C].c(), A(m[C], 1), m[C].m(t, i));
        }
        for (tt(), C = h.length; C < m.length; C += 1)
          w(C);
        et();
      }
      if (I & /*currentIndex, select, images*/
      37) {
        v = G(
          /*images*/
          b[0]
        );
        let C;
        for (C = 0; C < v.length; C += 1) {
          const E = Wi(b, v, C);
          _[C] ? _[C].p(E, I) : (_[C] = Vi(E), _[C].c(), _[C].m(f, null));
        }
        for (; C < _.length; C += 1)
          _[C].d(1);
        _.length = v.length;
      }
    },
    i(b) {
      if (!c) {
        for (let I = 0; I < h.length; I += 1)
          A(m[I]);
        A(l.$$.fragment, b), A(s.$$.fragment, b), c = !0;
      }
    },
    o(b) {
      m = m.filter(Boolean);
      for (let I = 0; I < m.length; I += 1)
        P(m[I]);
      P(l.$$.fragment, b), P(s.$$.fragment, b), c = !1;
    },
    d(b) {
      b && T(t), X(m, b), lt(l), lt(s), X(_, b), a = !1, dt(d);
    }
  };
}
function Ao(e, t, i) {
  let { autotime: n = 5e3 } = t, { images: l = [
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80",
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9"
  ] } = t, r = !0, o;
  function s() {
    clearInterval(o), i(7, o = setInterval(
      () => {
        c();
      },
      n
    ));
  }
  kt(() => {
    s();
  }), $i(() => {
    clearInterval(o);
  });
  let u = 0;
  function f() {
    i(2, u = (u - 1 + l.length) % l.length), s();
  }
  function c() {
    i(2, u = (u + 1) % l.length), s();
  }
  function a(m) {
    i(2, u = m);
  }
  const d = (m) => (m === "open" ? i(1, r = !1) : m === "close" && i(1, r = !0), !0), h = (m) => a(m);
  return e.$$set = (m) => {
    "autotime" in m && i(6, n = m.autotime), "images" in m && i(0, l = m.images);
  }, e.$$.update = () => {
    e.$$.dirty & /*playing, interval*/
    130 && (r ? s() : clearInterval(o));
  }, [
    l,
    r,
    u,
    f,
    c,
    a,
    n,
    o,
    d,
    h
  ];
}
class Qo extends Y {
  constructor(t) {
    super(), Q(this, t, Ao, Eo, Z, { autotime: 6, images: 0 });
  }
}
function qi(e, t, i) {
  const n = e.slice();
  return n[5] = t[i], n[7] = i, n;
}
function Ui(e) {
  let t, i = (
    /*item*/
    e[5] + ""
  ), n, l, r, o;
  function s() {
    return (
      /*click_handler*/
      e[4](
        /*i*/
        e[7]
      )
    );
  }
  return {
    c() {
      t = p("button"), n = O(i), g(t, "class", l = `${/*openTab*/
      e[3] === /*i*/
      e[7] ? " uikit-text-white" : ""} uikit-flex-1 uikit-py-2 uikit-px-4 uikit-rounded-md focus:uikit-outline-none focus:uikit-shadow-outline-blue uikit-transition-all uikit-duration-300`), J(
        t,
        "background-color",
        /*openTab*/
        e[3] === /*i*/
        e[7] ? (
          /*color*/
          e[1]
        ) : ""
      );
    },
    m(u, f) {
      j(u, t, f), k(t, n), r || (o = U(t, "click", s), r = !0);
    },
    p(u, f) {
      e = u, f & /*tabs*/
      1 && i !== (i = /*item*/
      e[5] + "") && H(n, i), f & /*openTab*/
      8 && l !== (l = `${/*openTab*/
      e[3] === /*i*/
      e[7] ? " uikit-text-white" : ""} uikit-flex-1 uikit-py-2 uikit-px-4 uikit-rounded-md focus:uikit-outline-none focus:uikit-shadow-outline-blue uikit-transition-all uikit-duration-300`) && g(t, "class", l), f & /*openTab, color*/
      10 && J(
        t,
        "background-color",
        /*openTab*/
        e[3] === /*i*/
        e[7] ? (
          /*color*/
          e[1]
        ) : ""
      );
    },
    d(u) {
      u && T(t), r = !1, o();
    }
  };
}
function Lo(e) {
  let t, i, n = G(
    /*tabs*/
    e[0]
  ), l = [];
  for (let r = 0; r < n.length; r += 1)
    l[r] = Ui(qi(e, n, r));
  return {
    c() {
      t = p("div"), i = p("div");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      g(i, "class", "uikit-flex uikit-space-x-4 uikit-p-2 uikit-bg-white uikit-rounded-lg uikit-shadow-md"), g(t, "class", "uikit-w-full uikit-mb-4");
    },
    m(r, o) {
      j(r, t, o), k(t, i);
      for (let s = 0; s < l.length; s += 1)
        l[s] && l[s].m(i, null);
    },
    p(r, [o]) {
      if (o & /*openTab, color, onClick, tabs*/
      15) {
        n = G(
          /*tabs*/
          r[0]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const u = qi(r, n, s);
          l[s] ? l[s].p(u, o) : (l[s] = Ui(u), l[s].c(), l[s].m(i, null));
        }
        for (; s < l.length; s += 1)
          l[s].d(1);
        l.length = n.length;
      }
    },
    i: R,
    o: R,
    d(r) {
      r && T(t), X(l, r);
    }
  };
}
function zo(e, t, i) {
  let { tabs: n = ["default"] } = t, { color: l = "#003333" } = t, { onClick: r = (u) => {
  } } = t, o = 0;
  const s = (u) => {
    i(3, o = u), r(u);
  };
  return e.$$set = (u) => {
    "tabs" in u && i(0, n = u.tabs), "color" in u && i(1, l = u.color), "onClick" in u && i(2, r = u.onClick);
  }, [n, l, r, o, s];
}
class Yo extends Y {
  constructor(t) {
    super(), Q(this, t, zo, Lo, Z, { tabs: 0, color: 1, onClick: 2 });
  }
}
export {
  qo as Card,
  Uo as CardBlog,
  Qo as Carousel,
  Vo as CircleIcon,
  Go as ContextMenu,
  Zo as Header,
  jo as Image,
  Fo as Layout,
  Ro as Modal,
  Ho as Sidebar,
  Do as StepMask,
  Yo as Tabs,
  No as confirm,
  Bo as notify
};
