var Zr = Object.defineProperty;
var xr = (t, e, i) => e in t ? Zr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var ri = (t, e, i) => (xr(t, typeof e != "symbol" ? e + "" : e, i), i);
function oe() {
}
const Yt = (t) => t;
function N(t, e) {
  for (const i in e)
    t[i] = e[i];
  return (
    /** @type {T & S} */
    t
  );
}
function lr(t) {
  return t();
}
function tn() {
  return /* @__PURE__ */ Object.create(null);
}
function Ce(t) {
  t.forEach(lr);
}
function _e(t) {
  return typeof t == "function";
}
function V(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Nt;
function vt(t, e) {
  return t === e ? !0 : (Nt || (Nt = document.createElement("a")), Nt.href = e, t === Nt.href);
}
function $r(t) {
  return Object.keys(t).length === 0;
}
function eo(t, ...e) {
  if (t == null) {
    for (const l of e)
      l(void 0);
    return oe;
  }
  const i = t.subscribe(...e);
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
function Jt(t, e, i) {
  t.$$.on_destroy.push(eo(e, i));
}
function Y(t, e, i, l) {
  if (t) {
    const n = rr(t, e, i, l);
    return t[0](n);
  }
}
function rr(t, e, i, l) {
  return t[1] && l ? N(i.ctx.slice(), t[1](l(e))) : i.ctx;
}
function J(t, e, i, l) {
  if (t[2] && l) {
    const n = t[2](l(i));
    if (e.dirty === void 0)
      return n;
    if (typeof n == "object") {
      const r = [], o = Math.max(e.dirty.length, n.length);
      for (let u = 0; u < o; u += 1)
        r[u] = e.dirty[u] | n[u];
      return r;
    }
    return e.dirty | n;
  }
  return e.dirty;
}
function Z(t, e, i, l, n, r) {
  if (n) {
    const o = rr(e, i, l, r);
    t.p(o, n);
  }
}
function x(t) {
  if (t.ctx.length > 32) {
    const e = [], i = t.ctx.length / 32;
    for (let l = 0; l < i; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function B(t) {
  const e = {};
  for (const i in t)
    i[0] !== "$" && (e[i] = t[i]);
  return e;
}
function ne(t, e) {
  const i = {};
  e = new Set(e);
  for (const l in t)
    !e.has(l) && l[0] !== "$" && (i[l] = t[l]);
  return i;
}
function Ye(t) {
  const e = {};
  for (const i in t)
    e[i] = !0;
  return e;
}
function or(t, e, i) {
  return t.set(i), e;
}
function Be(t) {
  return t && _e(t.destroy) ? t.destroy : oe;
}
function mi(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const to = ["", !0, 1, "true", "contenteditable"], sr = typeof window < "u";
let Li = sr ? () => window.performance.now() : () => Date.now(), Ni = sr ? (t) => requestAnimationFrame(t) : oe;
const at = /* @__PURE__ */ new Set();
function ur(t) {
  at.forEach((e) => {
    e.c(t) || (at.delete(e), e.f());
  }), at.size !== 0 && Ni(ur);
}
function zi(t) {
  let e;
  return at.size === 0 && Ni(ur), {
    promise: new Promise((i) => {
      at.add(e = { c: t, f: i });
    }),
    abort() {
      at.delete(e);
    }
  };
}
function R(t, e) {
  t.appendChild(e);
}
function ar(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function io(t) {
  const e = L("style");
  return e.textContent = "/* empty */", no(ar(t), e), e.sheet;
}
function no(t, e) {
  return R(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function T(t, e, i) {
  t.insertBefore(e, i || null);
}
function S(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ie(t, e) {
  for (let i = 0; i < t.length; i += 1)
    t[i] && t[i].d(e);
}
function L(t) {
  return document.createElement(t);
}
function pe(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ke(t) {
  return document.createTextNode(t);
}
function G() {
  return ke(" ");
}
function ue() {
  return ke("");
}
function D(t, e, i, l) {
  return t.addEventListener(e, i, l), () => t.removeEventListener(e, i, l);
}
function lo(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function nn(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function h(t, e, i) {
  i == null ? t.removeAttribute(e) : t.getAttribute(e) !== i && t.setAttribute(e, i);
}
const ro = ["width", "height"];
function ae(t, e) {
  const i = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const l in e)
    e[l] == null ? t.removeAttribute(l) : l === "style" ? t.style.cssText = e[l] : l === "__value" ? t.value = t[l] = e[l] : i[l] && i[l].set && ro.indexOf(l) === -1 ? t[l] = e[l] : h(t, l, e[l]);
}
function Wt(t, e) {
  for (const i in e)
    h(t, i, e[i]);
}
function oo(t, e) {
  Object.keys(e).forEach((i) => {
    so(t, i, e[i]);
  });
}
function so(t, e, i) {
  e in t ? t[e] = typeof t[e] == "boolean" && i === "" ? !0 : i : h(t, e, i);
}
function Fe(t) {
  return /-/.test(t) ? oo : ae;
}
function uo(t) {
  let e;
  return {
    /* push */
    p(...i) {
      e = i, e.forEach((l) => t.push(l));
    },
    /* remove */
    r() {
      e.forEach((i) => t.splice(t.indexOf(i), 1));
    }
  };
}
function ao(t) {
  return Array.from(t.childNodes);
}
function be(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function fo(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = /** @type {string} */
  e);
}
function co(t, e, i) {
  ~to.indexOf(i) ? fo(t, e) : be(t, e);
}
function fr(t, e, { bubbles: i = !1, cancelable: l = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: i, cancelable: l });
}
function ln(t, e) {
  return new t(e);
}
const Ut = /* @__PURE__ */ new Map();
let Gt = 0;
function ko(t) {
  let e = 5381, i = t.length;
  for (; i--; )
    e = (e << 5) - e ^ t.charCodeAt(i);
  return e >>> 0;
}
function go(t, e) {
  const i = { stylesheet: io(e), rules: {} };
  return Ut.set(t, i), i;
}
function Ht(t, e, i, l, n, r, o, u = 0) {
  const s = 16.666 / l;
  let a = `{
`;
  for (let b = 0; b <= 1; b += s) {
    const p = e + (i - e) * r(b);
    a += b * 100 + `%{${o(p, 1 - p)}}
`;
  }
  const f = a + `100% {${o(i, 1 - i)}}
}`, c = `__svelte_${ko(f)}_${u}`, d = ar(t), { stylesheet: k, rules: g } = Ut.get(d) || go(d, t);
  g[c] || (g[c] = !0, k.insertRule(`@keyframes ${c} ${f}`, k.cssRules.length));
  const m = t.style.animation || "";
  return t.style.animation = `${m ? `${m}, ` : ""}${c} ${l}ms linear ${n}ms 1 both`, Gt += 1, c;
}
function Vt(t, e) {
  const i = (t.style.animation || "").split(", "), l = i.filter(
    e ? (r) => r.indexOf(e) < 0 : (r) => r.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), n = i.length - l.length;
  n && (t.style.animation = l.join(", "), Gt -= n, Gt || mo());
}
function mo() {
  Ni(() => {
    Gt || (Ut.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && S(e);
    }), Ut.clear());
  });
}
let wt;
function pt(t) {
  wt = t;
}
function It() {
  if (!wt)
    throw new Error("Function called outside component initialization");
  return wt;
}
function Je(t) {
  It().$$.on_mount.push(t);
}
function ho(t) {
  It().$$.on_destroy.push(t);
}
function He() {
  const t = It();
  return (e, i, { cancelable: l = !1 } = {}) => {
    const n = t.$$.callbacks[e];
    if (n) {
      const r = fr(
        /** @type {string} */
        e,
        i,
        { cancelable: l }
      );
      return n.slice().forEach((o) => {
        o.call(t, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function Ue(t, e) {
  return It().$$.context.set(t, e), e;
}
function Pe(t) {
  return It().$$.context.get(t);
}
function F(t, e) {
  const i = t.$$.callbacks[e.type];
  i && i.slice().forEach((l) => l.call(this, e));
}
const ut = [], Se = [];
let ft = [];
const hi = [], bo = /* @__PURE__ */ Promise.resolve();
let bi = !1;
function _o() {
  bi || (bi = !0, bo.then(cr));
}
function Me(t) {
  ft.push(t);
}
function At(t) {
  hi.push(t);
}
const oi = /* @__PURE__ */ new Set();
let ot = 0;
function cr() {
  if (ot !== 0)
    return;
  const t = wt;
  do {
    try {
      for (; ot < ut.length; ) {
        const e = ut[ot];
        ot++, pt(e), po(e.$$);
      }
    } catch (e) {
      throw ut.length = 0, ot = 0, e;
    }
    for (pt(null), ut.length = 0, ot = 0; Se.length; )
      Se.pop()();
    for (let e = 0; e < ft.length; e += 1) {
      const i = ft[e];
      oi.has(i) || (oi.add(i), i());
    }
    ft.length = 0;
  } while (ut.length);
  for (; hi.length; )
    hi.pop()();
  bi = !1, oi.clear(), pt(t);
}
function po(t) {
  if (t.fragment !== null) {
    t.update(), Ce(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Me);
  }
}
function yo(t) {
  const e = [], i = [];
  ft.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : i.push(l)), i.forEach((l) => l()), ft = e;
}
let mt;
function Ri() {
  return mt || (mt = Promise.resolve(), mt.then(() => {
    mt = null;
  })), mt;
}
function xe(t, e, i) {
  t.dispatchEvent(fr(`${e ? "intro" : "outro"}${i}`));
}
const Bt = /* @__PURE__ */ new Set();
let De;
function le() {
  De = {
    r: 0,
    c: [],
    p: De
    // parent group
  };
}
function re() {
  De.r || Ce(De.c), De = De.p;
}
function _(t, e) {
  t && t.i && (Bt.delete(t), t.i(e));
}
function y(t, e, i, l) {
  if (t && t.o) {
    if (Bt.has(t))
      return;
    Bt.add(t), De.c.push(() => {
      Bt.delete(t), l && (i && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
const Di = { duration: 0 };
function vo(t, e, i) {
  const l = { direction: "in" };
  let n = e(t, i, l), r = !1, o, u, s = 0;
  function a() {
    o && Vt(t, o);
  }
  function f() {
    const {
      delay: d = 0,
      duration: k = 300,
      easing: g = Yt,
      tick: m = oe,
      css: b
    } = n || Di;
    b && (o = Ht(t, 0, 1, k, d, g, b, s++)), m(0, 1);
    const p = Li() + d, C = p + k;
    u && u.abort(), r = !0, Me(() => xe(t, !0, "start")), u = zi((w) => {
      if (r) {
        if (w >= C)
          return m(1, 0), xe(t, !0, "end"), a(), r = !1;
        if (w >= p) {
          const v = g((w - p) / k);
          m(v, 1 - v);
        }
      }
      return r;
    });
  }
  let c = !1;
  return {
    start() {
      c || (c = !0, Vt(t), _e(n) ? (n = n(l), Ri().then(f)) : f());
    },
    invalidate() {
      c = !1;
    },
    end() {
      r && (a(), r = !1);
    }
  };
}
function wo(t, e, i) {
  const l = { direction: "out" };
  let n = e(t, i, l), r = !0, o;
  const u = De;
  u.r += 1;
  let s;
  function a() {
    const {
      delay: f = 0,
      duration: c = 300,
      easing: d = Yt,
      tick: k = oe,
      css: g
    } = n || Di;
    g && (o = Ht(t, 1, 0, c, f, d, g));
    const m = Li() + f, b = m + c;
    Me(() => xe(t, !1, "start")), "inert" in t && (s = /** @type {HTMLElement} */
    t.inert, t.inert = !0), zi((p) => {
      if (r) {
        if (p >= b)
          return k(0, 1), xe(t, !1, "end"), --u.r || Ce(u.c), !1;
        if (p >= m) {
          const C = d((p - m) / c);
          k(1 - C, C);
        }
      }
      return r;
    });
  }
  return _e(n) ? Ri().then(() => {
    n = n(l), a();
  }) : a(), {
    end(f) {
      f && "inert" in t && (t.inert = s), f && n.tick && n.tick(1, 0), r && (o && Vt(t, o), r = !1);
    }
  };
}
function je(t, e, i, l) {
  let r = e(t, i, { direction: "both" }), o = l ? 0 : 1, u = null, s = null, a = null, f;
  function c() {
    a && Vt(t, a);
  }
  function d(g, m) {
    const b = (
      /** @type {Program['d']} */
      g.b - o
    );
    return m *= Math.abs(b), {
      a: o,
      b: g.b,
      d: b,
      duration: m,
      start: g.start,
      end: g.start + m,
      group: g.group
    };
  }
  function k(g) {
    const {
      delay: m = 0,
      duration: b = 300,
      easing: p = Yt,
      tick: C = oe,
      css: w
    } = r || Di, v = {
      start: Li() + m,
      b: g
    };
    g || (v.group = De, De.r += 1), "inert" in t && (g ? f !== void 0 && (t.inert = f) : (f = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), u || s ? s = v : (w && (c(), a = Ht(t, o, g, b, m, p, w)), g && C(0, 1), u = d(v, b), Me(() => xe(t, g, "start")), zi((E) => {
      if (s && E > s.start && (u = d(s, b), s = null, xe(t, u.b, "start"), w && (c(), a = Ht(
        t,
        o,
        u.b,
        u.duration,
        0,
        p,
        r.css
      ))), u) {
        if (E >= u.end)
          C(o = u.b, 1 - o), xe(t, u.b, "end"), s || (u.b ? c() : --u.group.r || Ce(u.group.c)), u = null;
        else if (E >= u.start) {
          const O = E - u.start;
          o = u.a + u.d * p(O / u.duration), C(o, 1 - o);
        }
      }
      return !!(u || s);
    }));
  }
  return {
    run(g) {
      _e(r) ? Ri().then(() => {
        r = r({ direction: g ? "in" : "out" }), k(g);
      }) : k(g);
    },
    end() {
      c(), u = s = null;
    }
  };
}
function ge(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function fe(t, e) {
  const i = {}, l = {}, n = { $$scope: 1 };
  let r = t.length;
  for (; r--; ) {
    const o = t[r], u = e[r];
    if (u) {
      for (const s in o)
        s in u || (l[s] = 1);
      for (const s in u)
        n[s] || (i[s] = u[s], n[s] = 1);
      t[r] = u;
    } else
      for (const s in o)
        n[s] = 1;
  }
  for (const o in l)
    o in i || (i[o] = void 0);
  return i;
}
function Ae(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Ot(t, e, i) {
  const l = t.$$.props[e];
  l !== void 0 && (t.$$.bound[l] = i, i(t.$$.ctx[l]));
}
function K(t) {
  t && t.c();
}
function X(t, e, i) {
  const { fragment: l, after_update: n } = t.$$;
  l && l.m(e, i), Me(() => {
    const r = t.$$.on_mount.map(lr).filter(_e);
    t.$$.on_destroy ? t.$$.on_destroy.push(...r) : Ce(r), t.$$.on_mount = [];
  }), n.forEach(Me);
}
function Q(t, e) {
  const i = t.$$;
  i.fragment !== null && (yo(i.after_update), Ce(i.on_destroy), i.fragment && i.fragment.d(e), i.on_destroy = i.fragment = null, i.ctx = []);
}
function Co(t, e) {
  t.$$.dirty[0] === -1 && (ut.push(t), _o(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function te(t, e, i, l, n, r, o, u = [-1]) {
  const s = wt;
  pt(t);
  const a = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: oe,
    not_equal: n,
    bound: tn(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: tn(),
    dirty: u,
    skip_bound: !1,
    root: e.target || s.$$.root
  };
  o && o(a.root);
  let f = !1;
  if (a.ctx = i ? i(t, e.props || {}, (c, d, ...k) => {
    const g = k.length ? k[0] : d;
    return a.ctx && n(a.ctx[c], a.ctx[c] = g) && (!a.skip_bound && a.bound[c] && a.bound[c](g), f && Co(t, c)), d;
  }) : [], a.update(), f = !0, Ce(a.before_update), a.fragment = l ? l(a.ctx) : !1, e.target) {
    if (e.hydrate) {
      const c = ao(e.target);
      a.fragment && a.fragment.l(c), c.forEach(S);
    } else
      a.fragment && a.fragment.c();
    e.intro && _(t.$$.fragment), X(t, e.target, e.anchor), cr();
  }
  pt(s);
}
class ie {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ri(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ri(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Q(this, 1), this.$destroy = oe;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, i) {
    if (!_e(i))
      return oe;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(i), () => {
      const n = l.indexOf(i);
      n !== -1 && l.splice(n, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !$r(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const So = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(So);
const st = [];
function nt(t, e = oe) {
  let i;
  const l = /* @__PURE__ */ new Set();
  function n(u) {
    if (V(t, u) && (t = u, i)) {
      const s = !st.length;
      for (const a of l)
        a[1](), st.push(a, t);
      if (s) {
        for (let a = 0; a < st.length; a += 2)
          st[a][0](st[a + 1]);
        st.length = 0;
      }
    }
  }
  function r(u) {
    n(u(t));
  }
  function o(u, s = oe) {
    const a = [u, s];
    return l.add(a), l.size === 1 && (i = e(n, r) || oe), u(t), () => {
      l.delete(a), l.size === 0 && i && (i(), i = null);
    };
  }
  return { set: n, update: r, subscribe: o };
}
function dr() {
  for (var t = 0, e, i, l = ""; t < arguments.length; )
    (e = arguments[t++]) && (i = kr(e)) && (l && (l += " "), l += i);
  return l;
}
function kr(t) {
  if (typeof t == "string")
    return t;
  for (var e, i = "", l = 0; l < t.length; l++)
    t[l] && (e = kr(t[l])) && (i && (i += " "), i += e);
  return i;
}
var Bi = "-";
function To(t) {
  var e = Io(t), i = t.conflictingClassGroups, l = t.conflictingClassGroupModifiers, n = l === void 0 ? {} : l;
  function r(u) {
    var s = u.split(Bi);
    return s[0] === "" && s.length !== 1 && s.shift(), gr(s, e) || Eo(u);
  }
  function o(u, s) {
    var a = i[u] || [];
    return s && n[u] ? [].concat(a, n[u]) : a;
  }
  return {
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  };
}
function gr(t, e) {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  var i = t[0], l = e.nextPart.get(i), n = l ? gr(t.slice(1), l) : void 0;
  if (n)
    return n;
  if (e.validators.length !== 0) {
    var r = t.join(Bi);
    return (o = e.validators.find(function(u) {
      var s = u.validator;
      return s(r);
    })) == null ? void 0 : o.classGroupId;
  }
}
var rn = /^\[(.+)\]$/;
function Eo(t) {
  if (rn.test(t)) {
    var e = rn.exec(t)[1], i = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (i)
      return "arbitrary.." + i;
  }
}
function Io(t) {
  var e = t.theme, i = t.prefix, l = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, n = Oo(Object.entries(t.classGroups), i);
  return n.forEach(function(r) {
    var o = r[0], u = r[1];
    _i(u, l, o, e);
  }), l;
}
function _i(t, e, i, l) {
  t.forEach(function(n) {
    if (typeof n == "string") {
      var r = n === "" ? e : on(e, n);
      r.classGroupId = i;
      return;
    }
    if (typeof n == "function") {
      if (Ao(n)) {
        _i(n(l), e, i, l);
        return;
      }
      e.validators.push({
        validator: n,
        classGroupId: i
      });
      return;
    }
    Object.entries(n).forEach(function(o) {
      var u = o[0], s = o[1];
      _i(s, on(e, u), i, l);
    });
  });
}
function on(t, e) {
  var i = t;
  return e.split(Bi).forEach(function(l) {
    i.nextPart.has(l) || i.nextPart.set(l, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), i = i.nextPart.get(l);
  }), i;
}
function Ao(t) {
  return t.isThemeGetter;
}
function Oo(t, e) {
  return e ? t.map(function(i) {
    var l = i[0], n = i[1], r = n.map(function(o) {
      return typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(function(u) {
        var s = u[0], a = u[1];
        return [e + s, a];
      })) : o;
    });
    return [l, r];
  }) : t;
}
function Po(t) {
  if (t < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var e = 0, i = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
  function n(r, o) {
    i.set(r, o), e++, e > t && (e = 0, l = i, i = /* @__PURE__ */ new Map());
  }
  return {
    get: function(o) {
      var u = i.get(o);
      if (u !== void 0)
        return u;
      if ((u = l.get(o)) !== void 0)
        return n(o, u), u;
    },
    set: function(o, u) {
      i.has(o) ? i.set(o, u) : n(o, u);
    }
  };
}
var mr = "!";
function Mo(t) {
  var e = t.separator || ":", i = e.length === 1, l = e[0], n = e.length;
  return function(o) {
    for (var u = [], s = 0, a = 0, f, c = 0; c < o.length; c++) {
      var d = o[c];
      if (s === 0) {
        if (d === l && (i || o.slice(c, c + n) === e)) {
          u.push(o.slice(a, c)), a = c + n;
          continue;
        }
        if (d === "/") {
          f = c;
          continue;
        }
      }
      d === "[" ? s++ : d === "]" && s--;
    }
    var k = u.length === 0 ? o : o.substring(a), g = k.startsWith(mr), m = g ? k.substring(1) : k, b = f && f > a ? f - a : void 0;
    return {
      modifiers: u,
      hasImportantModifier: g,
      baseClassName: m,
      maybePostfixModifierPosition: b
    };
  };
}
function Lo(t) {
  if (t.length <= 1)
    return t;
  var e = [], i = [];
  return t.forEach(function(l) {
    var n = l[0] === "[";
    n ? (e.push.apply(e, i.sort().concat([l])), i = []) : i.push(l);
  }), e.push.apply(e, i.sort()), e;
}
function No(t) {
  return {
    cache: Po(t.cacheSize),
    splitModifiers: Mo(t),
    ...To(t)
  };
}
var zo = /\s+/;
function Ro(t, e) {
  var i = e.splitModifiers, l = e.getClassGroupId, n = e.getConflictingClassGroupIds, r = /* @__PURE__ */ new Set();
  return t.trim().split(zo).map(function(o) {
    var u = i(o), s = u.modifiers, a = u.hasImportantModifier, f = u.baseClassName, c = u.maybePostfixModifierPosition, d = l(c ? f.substring(0, c) : f), k = !!c;
    if (!d) {
      if (!c)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if (d = l(f), !d)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      k = !1;
    }
    var g = Lo(s).join(":"), m = a ? g + mr : g;
    return {
      isTailwindClass: !0,
      modifierId: m,
      classGroupId: d,
      originalClassName: o,
      hasPostfixModifier: k
    };
  }).reverse().filter(function(o) {
    if (!o.isTailwindClass)
      return !0;
    var u = o.modifierId, s = o.classGroupId, a = o.hasPostfixModifier, f = u + s;
    return r.has(f) ? !1 : (r.add(f), n(s, a).forEach(function(c) {
      return r.add(u + c);
    }), !0);
  }).reverse().map(function(o) {
    return o.originalClassName;
  }).join(" ");
}
function Do() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  var l, n, r, o = u;
  function u(a) {
    var f = e[0], c = e.slice(1), d = c.reduce(function(k, g) {
      return g(k);
    }, f());
    return l = No(d), n = l.cache.get, r = l.cache.set, o = s, s(a);
  }
  function s(a) {
    var f = n(a);
    if (f)
      return f;
    var c = Ro(a, l);
    return r(a, c), c;
  }
  return function() {
    return o(dr.apply(null, arguments));
  };
}
function he(t) {
  var e = function(l) {
    return l[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var hr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Bo = /^\d+\/\d+$/, Fo = /* @__PURE__ */ new Set(["px", "full", "screen"]), jo = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Wo = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Uo = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ze(t) {
  return Ze(t) || Fo.has(t) || Bo.test(t) || pi(t);
}
function pi(t) {
  return lt(t, "length", Qo);
}
function Go(t) {
  return lt(t, "size", br);
}
function Ho(t) {
  return lt(t, "position", br);
}
function Vo(t) {
  return lt(t, "url", Ko);
}
function zt(t) {
  return lt(t, "number", Ze);
}
function Ze(t) {
  return !Number.isNaN(Number(t));
}
function qo(t) {
  return t.endsWith("%") && Ze(t.slice(0, -1));
}
function ht(t) {
  return sn(t) || lt(t, "number", sn);
}
function ce(t) {
  return hr.test(t);
}
function bt() {
  return !0;
}
function qe(t) {
  return jo.test(t);
}
function Xo(t) {
  return lt(t, "", Yo);
}
function lt(t, e, i) {
  var l = hr.exec(t);
  return l ? l[1] ? l[1] === e : i(l[2]) : !1;
}
function Qo(t) {
  return Wo.test(t);
}
function br() {
  return !1;
}
function Ko(t) {
  return t.startsWith("url(");
}
function sn(t) {
  return Number.isInteger(Number(t));
}
function Yo(t) {
  return Uo.test(t);
}
function Jo() {
  var t = he("colors"), e = he("spacing"), i = he("blur"), l = he("brightness"), n = he("borderColor"), r = he("borderRadius"), o = he("borderSpacing"), u = he("borderWidth"), s = he("contrast"), a = he("grayscale"), f = he("hueRotate"), c = he("invert"), d = he("gap"), k = he("gradientColorStops"), g = he("gradientColorStopPositions"), m = he("inset"), b = he("margin"), p = he("opacity"), C = he("padding"), w = he("saturate"), v = he("scale"), E = he("sepia"), O = he("skew"), I = he("space"), U = he("translate"), $ = function() {
    return ["auto", "contain", "none"];
  }, W = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, P = function() {
    return ["auto", ce, e];
  }, H = function() {
    return [ce, e];
  }, me = function() {
    return ["", ze];
  }, z = function() {
    return ["auto", Ze, ce];
  }, j = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, M = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, se = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, de = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, ve = function() {
    return ["", "0", ce];
  }, Ne = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Oe = function() {
    return [Ze, zt];
  }, Re = function() {
    return [Ze, ce];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [bt],
      spacing: [ze],
      blur: ["none", "", qe, ce],
      brightness: Oe(),
      borderColor: [t],
      borderRadius: ["none", "", "full", qe, ce],
      borderSpacing: H(),
      borderWidth: me(),
      contrast: Oe(),
      grayscale: ve(),
      hueRotate: Re(),
      invert: ve(),
      gap: H(),
      gradientColorStops: [t],
      gradientColorStopPositions: [qo, pi],
      inset: P(),
      margin: P(),
      opacity: Oe(),
      padding: H(),
      saturate: Oe(),
      scale: Oe(),
      sepia: ve(),
      skew: Re(),
      space: H(),
      translate: H()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ce]
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
        columns: [qe]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Ne()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Ne()
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
        object: [].concat(j(), [ce])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: W()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": W()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": W()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: $()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": $()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": $()
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
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
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
        z: ["auto", ht]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: P()
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
        flex: ["1", "auto", "initial", "none", ce]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ve()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ve()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ht]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [bt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ht]
        }, ce]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [bt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ht]
        }, ce]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        "auto-cols": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ce]
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
        justify: ["normal"].concat(de())
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
        content: ["normal"].concat(de(), ["baseline"])
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
        "place-content": [].concat(de(), ["baseline"])
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
        p: [C]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [C]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [C]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [C]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [C]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [C]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [C]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [C]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [C]
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
        "space-x": [I]
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
        "space-y": [I]
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
        w: ["auto", "min", "max", "fit", ce, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", ce, ze]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [qe]
        }, qe, ce]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ce, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", ce, ze]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ce, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", qe, pi]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", zt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [bt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Ze, zt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ce, ze]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ce]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ce]
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
        "placeholder-opacity": [p]
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
        "text-opacity": [p]
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
        decoration: [].concat(M(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ze]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ce, ze]
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
        indent: H()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce]
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
        content: ["none", ce]
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
        "bg-opacity": [p]
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
        bg: [].concat(j(), [Ho])
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
        bg: ["auto", "cover", "contain", Go]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Vo]
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
        from: [k]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [k]
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
        "border-opacity": [p]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(M(), ["hidden"])
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
        "divide-opacity": [p]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: M()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [n]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [n]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [n]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [n]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [n]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [n]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [n]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [n]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(M())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ce, ze]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ze]
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
        ring: me()
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
        "ring-opacity": [p]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ze]
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
        shadow: ["", "inner", "none", qe, Xo]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [bt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [p]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": se()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": se()
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
        brightness: [l]
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
        "drop-shadow": ["", "none", qe, ce]
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
        "hue-rotate": [f]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
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
        "backdrop-brightness": [l]
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
        "backdrop-hue-rotate": [f]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [p]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Re()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ce]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Re()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ce]
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
        scale: [v]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [v]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [v]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ht, ce]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [U]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [U]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [O]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [O]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ce]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce]
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
        "scroll-m": H()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": H()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": H()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": H()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": H()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": H()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": H()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": H()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": H()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": H()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": H()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": H()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": H()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": H()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": H()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": H()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": H()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": H()
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
        "will-change": ["auto", "scroll", "contents", "transform", ce]
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
        stroke: [ze, zt]
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
var A = /* @__PURE__ */ Do(Jo);
function Zo(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function _r(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function xo(t) {
  const e = Math.cos(t * Math.PI * 0.5);
  return Math.abs(e) < 1e-14 ? 1 : 1 - e;
}
function Fi(t, { delay: e = 0, duration: i = 400, easing: l = Zo, amount: n = 5, opacity: r = 0 } = {}) {
  const o = getComputedStyle(t), u = +o.opacity, s = o.filter === "none" ? "" : o.filter, a = u * (1 - r), [f, c] = mi(n);
  return {
    delay: e,
    duration: i,
    easing: l,
    css: (d, k) => `opacity: ${u - a * k}; filter: ${s} blur(${k * f}${c});`
  };
}
function Zt(t, { delay: e = 0, duration: i = 400, easing: l = Yt } = {}) {
  const n = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: i,
    easing: l,
    css: (r) => `opacity: ${r * n}`
  };
}
function Ct(t, { delay: e = 0, duration: i = 400, easing: l = _r, x: n = 0, y: r = 0, opacity: o = 0 } = {}) {
  const u = getComputedStyle(t), s = +u.opacity, a = u.transform === "none" ? "" : u.transform, f = s * (1 - o), [c, d] = mi(n), [k, g] = mi(r);
  return {
    delay: e,
    duration: i,
    easing: l,
    css: (m, b) => `
			transform: ${a} translate(${(1 - m) * c}${d}, ${(1 - m) * k}${g});
			opacity: ${s - f * b}`
  };
}
function ji(t, { delay: e = 0, duration: i = 400, easing: l = _r, axis: n = "y" } = {}) {
  const r = getComputedStyle(t), o = +r.opacity, u = n === "y" ? "height" : "width", s = parseFloat(r[u]), a = n === "y" ? ["top", "bottom"] : ["left", "right"], f = a.map(
    (p) => `${p[0].toUpperCase()}${p.slice(1)}`
  ), c = parseFloat(r[`padding${f[0]}`]), d = parseFloat(r[`padding${f[1]}`]), k = parseFloat(r[`margin${f[0]}`]), g = parseFloat(r[`margin${f[1]}`]), m = parseFloat(
    r[`border${f[0]}Width`]
  ), b = parseFloat(
    r[`border${f[1]}Width`]
  );
  return {
    delay: e,
    duration: i,
    easing: l,
    css: (p) => `overflow: hidden;opacity: ${Math.min(p * 20, 1) * o};${u}: ${p * s}px;padding-${a[0]}: ${p * c}px;padding-${a[1]}: ${p * d}px;margin-${a[0]}: ${p * k}px;margin-${a[1]}: ${p * g}px;border-${a[0]}-width: ${p * m}px;border-${a[1]}-width: ${p * b}px;`
  };
}
const $o = (t) => ({}), un = (t) => ({}), es = (t) => ({}), an = (t) => ({}), ts = (t) => ({}), fn = (t) => ({});
function is(t) {
  let e;
  const i = (
    /*#slots*/
    t[22].arrowdown
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[21],
    un
  ), n = l || ls();
  return {
    c() {
      n && n.c();
    },
    m(r, o) {
      n && n.m(r, o), e = !0;
    },
    p(r, o) {
      l && l.p && (!e || o & /*$$scope*/
      2097152) && Z(
        l,
        i,
        r,
        /*$$scope*/
        r[21],
        e ? J(
          i,
          /*$$scope*/
          r[21],
          o,
          $o
        ) : x(
          /*$$scope*/
          r[21]
        ),
        un
      );
    },
    i(r) {
      e || (_(n, r), e = !0);
    },
    o(r) {
      y(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function ns(t) {
  let e;
  const i = (
    /*#slots*/
    t[22].arrowup
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[21],
    an
  ), n = l || rs();
  return {
    c() {
      n && n.c();
    },
    m(r, o) {
      n && n.m(r, o), e = !0;
    },
    p(r, o) {
      l && l.p && (!e || o & /*$$scope*/
      2097152) && Z(
        l,
        i,
        r,
        /*$$scope*/
        r[21],
        e ? J(
          i,
          /*$$scope*/
          r[21],
          o,
          es
        ) : x(
          /*$$scope*/
          r[21]
        ),
        an
      );
    },
    i(r) {
      e || (_(n, r), e = !0);
    },
    o(r) {
      y(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function ls(t) {
  let e, i;
  return {
    c() {
      e = pe("svg"), i = pe("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "m1 1 4 4 4-4"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(l, n) {
      T(l, e, n), R(e, i);
    },
    p: oe,
    d(l) {
      l && S(e);
    }
  };
}
function rs(t) {
  let e, i;
  return {
    c() {
      e = pe("svg"), i = pe("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5 5 1 1 5"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(l, n) {
      T(l, e, n), R(e, i);
    },
    p: oe,
    d(l) {
      l && S(e);
    }
  };
}
function os(t) {
  let e, i, l;
  const n = (
    /*#slots*/
    t[22].default
  ), r = Y(
    n,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = L("div"), i = L("div"), r && r.c(), h(
        i,
        "class",
        /*contentClass*/
        t[3]
      ), h(e, "class", "uikit-hidden");
    },
    m(o, u) {
      T(o, e, u), R(e, i), r && r.m(i, null), l = !0;
    },
    p(o, u) {
      r && r.p && (!l || u & /*$$scope*/
      2097152) && Z(
        r,
        n,
        o,
        /*$$scope*/
        o[21],
        l ? J(
          n,
          /*$$scope*/
          o[21],
          u,
          null
        ) : x(
          /*$$scope*/
          o[21]
        ),
        null
      ), (!l || u & /*contentClass*/
      8) && h(
        i,
        "class",
        /*contentClass*/
        o[3]
      );
    },
    i(o) {
      l || (_(r, o), l = !0);
    },
    o(o) {
      y(r, o), l = !1;
    },
    d(o) {
      o && S(e), r && r.d(o);
    }
  };
}
function ss(t) {
  let e, i, l, n;
  const r = (
    /*#slots*/
    t[22].default
  ), o = Y(
    r,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = L("div"), i = L("div"), o && o.c(), h(
        i,
        "class",
        /*contentClass*/
        t[3]
      );
    },
    m(u, s) {
      T(u, e, s), R(e, i), o && o.m(i, null), n = !0;
    },
    p(u, s) {
      t = u, o && o.p && (!n || s & /*$$scope*/
      2097152) && Z(
        o,
        r,
        t,
        /*$$scope*/
        t[21],
        n ? J(
          r,
          /*$$scope*/
          t[21],
          s,
          null
        ) : x(
          /*$$scope*/
          t[21]
        ),
        null
      ), (!n || s & /*contentClass*/
      8) && h(
        i,
        "class",
        /*contentClass*/
        t[3]
      );
    },
    i(u) {
      n || (_(o, u), u && Me(() => {
        n && (l || (l = je(
          e,
          /*multiple*/
          t[4],
          /*transitionParams*/
          t[1],
          !0
        )), l.run(1));
      }), n = !0);
    },
    o(u) {
      y(o, u), u && (l || (l = je(
        e,
        /*multiple*/
        t[4],
        /*transitionParams*/
        t[1],
        !1
      )), l.run(0)), n = !1;
    },
    d(u) {
      u && S(e), o && o.d(u), u && l && l.end();
    }
  };
}
function us(t) {
  let e, i, l, n, r, o, u, s, a, f, c, d;
  const k = (
    /*#slots*/
    t[22].header
  ), g = Y(
    k,
    t,
    /*$$scope*/
    t[21],
    fn
  ), m = [ns, is], b = [];
  function p(E, O) {
    return (
      /*open*/
      E[0] ? 0 : 1
    );
  }
  n = p(t), r = b[n] = m[n](t);
  const C = [ss, os], w = [];
  function v(E, O) {
    return (
      /*open*/
      E[0] ? 0 : 1
    );
  }
  return u = v(t), s = w[u] = C[u](t), {
    c() {
      e = L("h2"), i = L("button"), g && g.c(), l = G(), r.c(), o = G(), s.c(), a = ue(), h(i, "type", "button"), h(
        i,
        "class",
        /*buttonClass*/
        t[2]
      ), h(
        i,
        "aria-expanded",
        /*open*/
        t[0]
      ), h(e, "class", "group");
    },
    m(E, O) {
      T(E, e, O), R(e, i), g && g.m(i, null), R(i, l), b[n].m(i, null), T(E, o, O), w[u].m(E, O), T(E, a, O), f = !0, c || (d = D(
        i,
        "click",
        /*handleToggle*/
        t[6]
      ), c = !0);
    },
    p(E, [O]) {
      g && g.p && (!f || O & /*$$scope*/
      2097152) && Z(
        g,
        k,
        E,
        /*$$scope*/
        E[21],
        f ? J(
          k,
          /*$$scope*/
          E[21],
          O,
          ts
        ) : x(
          /*$$scope*/
          E[21]
        ),
        fn
      );
      let I = n;
      n = p(E), n === I ? b[n].p(E, O) : (le(), y(b[I], 1, 1, () => {
        b[I] = null;
      }), re(), r = b[n], r ? r.p(E, O) : (r = b[n] = m[n](E), r.c()), _(r, 1), r.m(i, null)), (!f || O & /*buttonClass*/
      4) && h(
        i,
        "class",
        /*buttonClass*/
        E[2]
      ), (!f || O & /*open*/
      1) && h(
        i,
        "aria-expanded",
        /*open*/
        E[0]
      );
      let U = u;
      u = v(E), u === U ? w[u].p(E, O) : (le(), y(w[U], 1, 1, () => {
        w[U] = null;
      }), re(), s = w[u], s ? s.p(E, O) : (s = w[u] = C[u](E), s.c()), _(s, 1), s.m(a.parentNode, a));
    },
    i(E) {
      f || (_(g, E), _(r), _(s), f = !0);
    },
    o(E) {
      y(g, E), y(r), y(s), f = !1;
    },
    d(E) {
      E && (S(e), S(o), S(a)), g && g.d(E), b[n].d(), w[u].d(E), c = !1, d();
    }
  };
}
function as(t, e, i) {
  let l, n, { $$slots: r = {}, $$scope: o } = e, { open: u = !1 } = e, { activeClass: s = void 0 } = e, { inactiveClass: a = void 0 } = e, { defaultClass: f = "uikit-flex uikit-items-center uikit-justify-between uikit-w-full uikit-font-medium uikit-text-left group-first:uikit-rounded-t-xl uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { transitionType: c = "slide" } = e, { transitionParams: d = {} } = e, { paddingFlush: k = "uikit-py-5" } = e, { paddingDefault: g = "uikit-p-5" } = e, { textFlushOpen: m = "uikit-text-gray-900 dark:uikit-text-white" } = e, { textFlushDefault: b = "uikit-text-gray-500 dark:uikit-text-gray-400" } = e, { borderClass: p = "uikit-border-s uikit-border-e group-first:uikit-border-t" } = e, { borderOpenClass: C = "uikit-border-s uikit-border-e" } = e, { borderBottomClass: w = "uikit-border-b" } = e, { borderSharedClass: v = "uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { classActive: E = void 0 } = e, { classInactive: O = void 0 } = e, I = A(s, E), U = A(a, O);
  const $ = (M, se) => {
    switch (c) {
      case "blur":
        return Fi(M, se);
      case "fly":
        return Ct(M, se);
      case "fade":
        return Zt(M, se);
      default:
        return ji(M, se);
    }
  }, W = Pe("ctx") ?? {}, P = {}, H = W.selected ?? nt();
  Jt(t, H, (M) => i(23, n = M));
  let me = u;
  u = !1, Je(() => (me && or(H, n = P, n), H.subscribe((M) => i(0, u = M === P))));
  const z = (M) => H.set(u ? {} : P);
  let j;
  return t.$$set = (M) => {
    i(29, e = N(N({}, e), B(M))), "open" in M && i(0, u = M.open), "activeClass" in M && i(7, s = M.activeClass), "inactiveClass" in M && i(8, a = M.inactiveClass), "defaultClass" in M && i(9, f = M.defaultClass), "transitionType" in M && i(10, c = M.transitionType), "transitionParams" in M && i(1, d = M.transitionParams), "paddingFlush" in M && i(11, k = M.paddingFlush), "paddingDefault" in M && i(12, g = M.paddingDefault), "textFlushOpen" in M && i(13, m = M.textFlushOpen), "textFlushDefault" in M && i(14, b = M.textFlushDefault), "borderClass" in M && i(15, p = M.borderClass), "borderOpenClass" in M && i(16, C = M.borderOpenClass), "borderBottomClass" in M && i(17, w = M.borderBottomClass), "borderSharedClass" in M && i(18, v = M.borderSharedClass), "classActive" in M && i(19, E = M.classActive), "classInactive" in M && i(20, O = M.classInactive), "$$scope" in M && i(21, o = M.$$scope);
  }, t.$$.update = () => {
    i(2, j = A([
      f,
      W.flush || p,
      w,
      v,
      W.flush ? k : g,
      u && (W.flush ? m : I || W.activeClass),
      !u && (W.flush ? b : U || W.inactiveClass),
      e.class
    ])), t.$$.dirty & /*paddingFlush, paddingDefault, borderOpenClass, borderBottomClass, borderSharedClass*/
    464896 && i(3, l = A([
      W.flush ? k : g,
      W.flush ? "" : C,
      w,
      v
    ]));
  }, e = B(e), [
    u,
    d,
    j,
    l,
    $,
    H,
    z,
    s,
    a,
    f,
    c,
    k,
    g,
    m,
    b,
    p,
    C,
    w,
    v,
    E,
    O,
    o,
    r
  ];
}
class fs extends ie {
  constructor(e) {
    super(), te(this, e, as, us, V, {
      open: 0,
      activeClass: 7,
      inactiveClass: 8,
      defaultClass: 9,
      transitionType: 10,
      transitionParams: 1,
      paddingFlush: 11,
      paddingDefault: 12,
      textFlushOpen: 13,
      textFlushDefault: 14,
      borderClass: 15,
      borderOpenClass: 16,
      borderBottomClass: 17,
      borderSharedClass: 18,
      classActive: 19,
      classInactive: 20
    });
  }
}
function si(t) {
  let e, i, l, n, r;
  const o = (
    /*#slots*/
    t[12].default
  ), u = Y(
    o,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let s = [
    { role: (
      /*role*/
      t[4]
    ) },
    /*$$restProps*/
    t[6],
    { class: (
      /*divClass*/
      t[5]
    ) }
  ], a = {};
  for (let f = 0; f < s.length; f += 1)
    a = N(a, s[f]);
  return {
    c() {
      e = L(
        /*tag*/
        t[1]
      ), u && u.c(), Fe(
        /*tag*/
        t[1]
      )(e, a);
    },
    m(f, c) {
      T(f, e, c), u && u.m(e, null), t[18](e), l = !0, n || (r = [
        Be(i = /*use*/
        t[2].call(
          null,
          e,
          /*options*/
          t[3]
        )),
        D(
          e,
          "click",
          /*click_handler*/
          t[13]
        ),
        D(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[14]
        ),
        D(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[15]
        ),
        D(
          e,
          "focusin",
          /*focusin_handler*/
          t[16]
        ),
        D(
          e,
          "focusout",
          /*focusout_handler*/
          t[17]
        )
      ], n = !0);
    },
    p(f, c) {
      u && u.p && (!l || c & /*$$scope*/
      2048) && Z(
        u,
        o,
        f,
        /*$$scope*/
        f[11],
        l ? J(
          o,
          /*$$scope*/
          f[11],
          c,
          null
        ) : x(
          /*$$scope*/
          f[11]
        ),
        null
      ), Fe(
        /*tag*/
        f[1]
      )(e, a = fe(s, [
        (!l || c & /*role*/
        16) && { role: (
          /*role*/
          f[4]
        ) },
        c & /*$$restProps*/
        64 && /*$$restProps*/
        f[6],
        (!l || c & /*divClass*/
        32) && { class: (
          /*divClass*/
          f[5]
        ) }
      ])), i && _e(i.update) && c & /*options*/
      8 && i.update.call(
        null,
        /*options*/
        f[3]
      );
    },
    i(f) {
      l || (_(u, f), l = !0);
    },
    o(f) {
      y(u, f), l = !1;
    },
    d(f) {
      f && S(e), u && u.d(f), t[18](null), n = !1, Ce(r);
    }
  };
}
function cs(t) {
  let e = (
    /*tag*/
    t[1]
  ), i, l, n = (
    /*tag*/
    t[1] && si(t)
  );
  return {
    c() {
      n && n.c(), i = ue();
    },
    m(r, o) {
      n && n.m(r, o), T(r, i, o), l = !0;
    },
    p(r, [o]) {
      /*tag*/
      r[1] ? e ? V(
        e,
        /*tag*/
        r[1]
      ) ? (n.d(1), n = si(r), e = /*tag*/
      r[1], n.c(), n.m(i.parentNode, i)) : n.p(r, o) : (n = si(r), e = /*tag*/
      r[1], n.c(), n.m(i.parentNode, i)) : e && (n.d(1), n = null, e = /*tag*/
      r[1]);
    },
    i(r) {
      l || (_(n, r), l = !0);
    },
    o(r) {
      y(n, r), l = !1;
    },
    d(r) {
      r && S(i), n && n.d(r);
    }
  };
}
function ds(t, e, i) {
  const l = ["tag", "color", "rounded", "border", "shadow", "node", "use", "options", "role"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e;
  const u = () => {
  };
  Ue("background", !0);
  let { tag: s = n.href ? "a" : "div" } = e, { color: a = "default" } = e, { rounded: f = !1 } = e, { border: c = !1 } = e, { shadow: d = !1 } = e, { node: k = void 0 } = e, { use: g = u } = e, { options: m = {} } = e, { role: b = void 0 } = e;
  const p = {
    gray: "uikit-bg-gray-50 dark:uikit-bg-gray-800",
    red: "uikit-bg-red-50 dark:uikit-bg-gray-800",
    yellow: "uikit-bg-yellow-50 dark:uikit-bg-gray-800 ",
    green: "uikit-bg-green-50 dark:uikit-bg-gray-800 ",
    indigo: "uikit-bg-indigo-50 dark:uikit-bg-gray-800 ",
    purple: "uikit-bg-purple-50 dark:uikit-bg-gray-800 ",
    pink: "uikit-bg-pink-50 dark:uikit-bg-gray-800 ",
    blue: "uikit-bg-blue-50 dark:uikit-bg-gray-800 ",
    light: "uikit-bg-gray-50 dark:uikit-bg-gray-700",
    dark: "uikit-bg-gray-50 dark:uikit-bg-gray-800",
    default: "uikit-bg-white dark:uikit-bg-gray-800",
    dropdown: "uikit-bg-white dark:uikit-bg-gray-700",
    navbar: "uikit-bg-white dark:uikit-bg-gray-900",
    navbarUl: "uikit-bg-gray-50 dark:uikit-bg-gray-800",
    form: "uikit-bg-gray-50 dark:uikit-bg-gray-700",
    primary: "uikit-bg-primary-50 dark:uikit-bg-gray-800 ",
    orange: "uikit-bg-orange-50 dark:uikit-bg-orange-800",
    none: ""
  }, C = {
    gray: "uikit-text-gray-800 dark:uikit-text-gray-300",
    red: "uikit-text-red-800 dark:uikit-text-red-400",
    yellow: "uikit-text-yellow-800 dark:uikit-text-yellow-300",
    green: "uikit-text-green-800 dark:uikit-text-green-400",
    indigo: "uikit-text-indigo-800 dark:uikit-text-indigo-400",
    purple: "uikit-text-purple-800 dark:uikit-text-purple-400",
    pink: "uikit-text-pink-800 dark:uikit-text-pink-400",
    blue: "uikit-text-blue-800 dark:uikit-text-blue-400",
    light: "uikit-text-gray-700 dark:uikit-text-gray-300",
    dark: "uikit-text-gray-700 dark:uikit-text-gray-300",
    default: "uikit-text-gray-500 dark:uikit-text-gray-400",
    dropdown: "uikit-text-gray-700 dark:uikit-text-gray-200",
    navbar: "uikit-text-gray-700 dark:uikit-text-gray-200",
    navbarUl: "uikit-text-gray-700 dark:uikit-text-gray-400",
    form: "uikit-text-gray-900 dark:uikit-text-white",
    primary: "uikit-text-primary-800 dark:uikit-text-primary-400",
    orange: "uikit-text-orange-800 dark:uikit-text-orange-400",
    none: ""
  }, w = {
    gray: "uikit-border-gray-300 dark:uikit-border-gray-800 uikit-divide-gray-300 dark:uikit-divide-gray-800",
    red: "uikit-border-red-300 dark:uikit-border-red-800 uikit-divide-red-300 dark:uikit-divide-red-800",
    yellow: "uikit-border-yellow-300 dark:uikit-border-yellow-800 uikit-divide-yellow-300 dark:uikit-divide-yellow-800",
    green: "uikit-border-green-300 dark:uikit-border-green-800 uikit-divide-green-300 dark:uikit-divide-green-800",
    indigo: "uikit-border-indigo-300 dark:uikit-border-indigo-800 uikit-divide-indigo-300 dark:uikit-divide-indigo-800",
    purple: "uikit-border-purple-300 dark:uikit-border-purple-800 uikit-divide-purple-300 dark:uikit-divide-purple-800",
    pink: "uikit-border-pink-300 dark:uikit-border-pink-800 uikit-divide-pink-300 dark:uikit-divide-pink-800",
    blue: "uikit-border-blue-300 dark:uikit-border-blue-800 uikit-divide-blue-300 dark:uikit-divide-blue-800",
    light: "uikit-border-gray-500 uikit-divide-gray-500",
    dark: "uikit-border-gray-500 uikit-divide-gray-500",
    default: "uikit-border-gray-200 dark:uikit-border-gray-700 uikit-divide-gray-200 dark:uikit-divide-gray-700",
    dropdown: "uikit-border-gray-100 dark:uikit-border-gray-600 uikit-divide-gray-100 dark:uikit-divide-gray-600",
    navbar: "uikit-border-gray-100 dark:uikit-border-gray-700 uikit-divide-gray-100 dark:uikit-divide-gray-700",
    navbarUl: "uikit-border-gray-100 dark:uikit-border-gray-700 uikit-divide-gray-100 dark:uikit-divide-gray-700",
    form: "uikit-border-gray-300 dark:uikit-border-gray-700 uikit-divide-gray-300 dark:uikit-divide-gray-700",
    primary: "uikit-border-primary-500 dark:uikit-border-primary-200  uikit-divide-primary-500 dark:uikit-divide-primary-200 ",
    orange: "uikit-border-orange-300 dark:uikit-border-orange-800 uikit-divide-orange-300 dark:uikit-divide-orange-800",
    none: ""
  };
  let v;
  function E(P) {
    F.call(this, t, P);
  }
  function O(P) {
    F.call(this, t, P);
  }
  function I(P) {
    F.call(this, t, P);
  }
  function U(P) {
    F.call(this, t, P);
  }
  function $(P) {
    F.call(this, t, P);
  }
  function W(P) {
    Se[P ? "unshift" : "push"](() => {
      k = P, i(0, k);
    });
  }
  return t.$$set = (P) => {
    i(23, e = N(N({}, e), B(P))), i(6, n = ne(e, l)), "tag" in P && i(1, s = P.tag), "color" in P && i(7, a = P.color), "rounded" in P && i(8, f = P.rounded), "border" in P && i(9, c = P.border), "shadow" in P && i(10, d = P.shadow), "node" in P && i(0, k = P.node), "use" in P && i(2, g = P.use), "options" in P && i(3, m = P.options), "role" in P && i(4, b = P.role), "$$scope" in P && i(11, o = P.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*color*/
    128 && i(7, a = a ?? "default"), t.$$.dirty & /*color*/
    128 && Ue("color", a), i(5, v = A(p[a], C[a], f && "uikit-rounded-lg", c && "uikit-border", w[a], d && "uikit-shadow-md", e.class));
  }, e = B(e), [
    k,
    s,
    g,
    m,
    b,
    v,
    n,
    a,
    f,
    c,
    d,
    o,
    r,
    E,
    O,
    I,
    U,
    $,
    W
  ];
}
class rt extends ie {
  constructor(e) {
    super(), te(this, e, ds, cs, V, {
      tag: 1,
      color: 7,
      rounded: 8,
      border: 9,
      shadow: 10,
      node: 0,
      use: 2,
      options: 3,
      role: 4
    });
  }
}
function cn(t, e, i) {
  const l = t.slice();
  return l[10] = e[i], l;
}
function dn(t, e, i) {
  const l = t.slice();
  return l[13] = e[i], l;
}
function kn(t) {
  let e, i = (
    /*desc*/
    t[13] + ""
  ), l;
  return {
    c() {
      e = L("p"), l = ke(i), h(e, "class", "mb-2 text-gray-500 dark:text-gray-400");
    },
    m(n, r) {
      T(n, e, r), R(e, l);
    },
    p(n, r) {
      r & /*items*/
      1 && i !== (i = /*desc*/
      n[13] + "") && be(l, i);
    },
    d(n) {
      n && S(e);
    }
  };
}
function ks(t) {
  let e, i = ge(
    /*item*/
    t[10].descriptions
  ), l = [];
  for (let n = 0; n < i.length; n += 1)
    l[n] = kn(dn(t, i, n));
  return {
    c() {
      for (let n = 0; n < l.length; n += 1)
        l[n].c();
      e = G();
    },
    m(n, r) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(n, r);
      T(n, e, r);
    },
    p(n, r) {
      if (r & /*items*/
      1) {
        i = ge(
          /*item*/
          n[10].descriptions
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = dn(n, i, o);
          l[o] ? l[o].p(u, r) : (l[o] = kn(u), l[o].c(), l[o].m(e.parentNode, e));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = i.length;
      }
    },
    d(n) {
      n && S(e), Ie(l, n);
    }
  };
}
function gs(t) {
  let e, i = (
    /*item*/
    (t[10].title || "a title") + ""
  ), l;
  return {
    c() {
      e = L("span"), l = ke(i), h(e, "slot", "header");
    },
    m(n, r) {
      T(n, e, r), R(e, l);
    },
    p(n, r) {
      r & /*items*/
      1 && i !== (i = /*item*/
      (n[10].title || "a title") + "") && be(l, i);
    },
    d(n) {
      n && S(e);
    }
  };
}
function gn(t) {
  let e, i;
  return e = new fs({
    props: {
      $$slots: {
        header: [gs],
        default: [ks]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*$$scope, items*/
      65537 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function ms(t) {
  let e, i, l = ge(
    /*items*/
    t[0]
  ), n = [];
  for (let o = 0; o < l.length; o += 1)
    n[o] = gn(cn(t, l, o));
  const r = (o) => y(n[o], 1, 1, () => {
    n[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      e = ue();
    },
    m(o, u) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, u);
      T(o, e, u), i = !0;
    },
    p(o, u) {
      if (u & /*items*/
      1) {
        l = ge(
          /*items*/
          o[0]
        );
        let s;
        for (s = 0; s < l.length; s += 1) {
          const a = cn(o, l, s);
          n[s] ? (n[s].p(a, u), _(n[s], 1)) : (n[s] = gn(a), n[s].c(), _(n[s], 1), n[s].m(e.parentNode, e));
        }
        for (le(), s = l.length; s < n.length; s += 1)
          r(s);
        re();
      }
    },
    i(o) {
      if (!i) {
        for (let u = 0; u < l.length; u += 1)
          _(n[u]);
        i = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let u = 0; u < n.length; u += 1)
        y(n[u]);
      i = !1;
    },
    d(o) {
      o && S(e), Ie(n, o);
    }
  };
}
function hs(t) {
  let e, i;
  const l = [
    /*$$restProps*/
    t[2],
    { class: (
      /*frameClass*/
      t[1]
    ) },
    { color: "none" }
  ];
  let n = {
    $$slots: { default: [ms] },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < l.length; r += 1)
    n = N(n, l[r]);
  return e = new rt({ props: n }), {
    c() {
      K(e.$$.fragment);
    },
    m(r, o) {
      X(e, r, o), i = !0;
    },
    p(r, [o]) {
      const u = o & /*$$restProps, frameClass*/
      6 ? fe(l, [
        o & /*$$restProps*/
        4 && Ae(
          /*$$restProps*/
          r[2]
        ),
        o & /*frameClass*/
        2 && { class: (
          /*frameClass*/
          r[1]
        ) },
        l[2]
      ]) : {};
      o & /*$$scope, items*/
      65537 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
    },
    i(r) {
      i || (_(e.$$.fragment, r), i = !0);
    },
    o(r) {
      y(e.$$.fragment, r), i = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function bs(t, e, i) {
  const l = ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass", "items"];
  let n = ne(e, l), { multiple: r = !1 } = e, { flush: o = !1 } = e, { activeClass: u = "uikit-bg-gray-100 dark:uikit-bg-gray-800 uikit-text-gray-900 dark:uikit-text-white focus:uikit-ring-4 focus:uikit-ring-gray-200 dark:focus:uikit-ring-gray-800" } = e, { inactiveClass: s = "uikit-text-gray-500 dark:uikit-text-gray-400 hover:uikit-bg-gray-100 hover:dark:uikit-bg-gray-800" } = e, { defaultClass: a = "uikit-text-gray-500 dark:uikit-text-gray-400" } = e, { items: f = [] } = e;
  const c = {
    flush: o,
    activeClass: A(u, e.classActive),
    inactiveClass: A(s, e.classInactive),
    selected: r ? void 0 : nt()
  };
  Ue("ctx", c);
  let d;
  return t.$$set = (k) => {
    i(9, e = N(N({}, e), B(k))), i(2, n = ne(e, l)), "multiple" in k && i(3, r = k.multiple), "flush" in k && i(4, o = k.flush), "activeClass" in k && i(5, u = k.activeClass), "inactiveClass" in k && i(6, s = k.inactiveClass), "defaultClass" in k && i(7, a = k.defaultClass), "items" in k && i(0, f = k.items);
  }, t.$$.update = () => {
    i(1, d = A(a, e.class));
  }, e = B(e), [
    f,
    d,
    n,
    r,
    o,
    u,
    s,
    a
  ];
}
class _s extends ie {
  constructor(e) {
    super(), te(this, e, bs, hs, V, {
      multiple: 3,
      flush: 4,
      activeClass: 5,
      inactiveClass: 6,
      defaultClass: 7,
      items: 0
    });
  }
}
const c0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new _s({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
}, ps = (t) => ({}), mn = (t) => ({ close: (
  /*close*/
  t[4]
) }), ys = (t) => ({}), hn = (t) => ({ close: (
  /*close*/
  t[4]
) });
function vs(t) {
  let e, i;
  const l = [
    /*$$restProps*/
    t[5]
  ];
  let n = {
    $$slots: { default: [Cs] },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < l.length; r += 1)
    n = N(n, l[r]);
  return e = new rt({ props: n }), {
    c() {
      K(e.$$.fragment);
    },
    m(r, o) {
      X(e, r, o), i = !0;
    },
    p(r, o) {
      const u = o & /*$$restProps*/
      32 ? fe(l, [Ae(
        /*$$restProps*/
        r[5]
      )]) : {};
      o & /*$$scope*/
      128 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
    },
    i(r) {
      i || (_(e.$$.fragment, r), i = !0);
    },
    o(r) {
      y(e.$$.fragment, r), i = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function ws(t) {
  let e, i, l = (
    /*open*/
    t[0] && bn(t)
  );
  return {
    c() {
      l && l.c(), e = ue();
    },
    m(n, r) {
      l && l.m(n, r), T(n, e, r), i = !0;
    },
    p(n, r) {
      /*open*/
      n[0] ? l ? (l.p(n, r), r & /*open*/
      1 && _(l, 1)) : (l = bn(n), l.c(), _(l, 1), l.m(e.parentNode, e)) : l && (le(), y(l, 1, 1, () => {
        l = null;
      }), re());
    },
    i(n) {
      i || (_(l), i = !0);
    },
    o(n) {
      y(l), i = !1;
    },
    d(n) {
      n && S(e), l && l.d(n);
    }
  };
}
function Cs(t) {
  let e;
  const i = (
    /*#slots*/
    t[6].default
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[7],
    mn
  );
  return {
    c() {
      l && l.c();
    },
    m(n, r) {
      l && l.m(n, r), e = !0;
    },
    p(n, r) {
      l && l.p && (!e || r & /*$$scope*/
      128) && Z(
        l,
        i,
        n,
        /*$$scope*/
        n[7],
        e ? J(
          i,
          /*$$scope*/
          n[7],
          r,
          ps
        ) : x(
          /*$$scope*/
          n[7]
        ),
        mn
      );
    },
    i(n) {
      e || (_(l, n), e = !0);
    },
    o(n) {
      y(l, n), e = !1;
    },
    d(n) {
      l && l.d(n);
    }
  };
}
function bn(t) {
  let e, i, l, n;
  const r = [
    /*$$restProps*/
    t[5]
  ];
  let o = {
    $$slots: { default: [Ss] },
    $$scope: { ctx: t }
  };
  for (let u = 0; u < r.length; u += 1)
    o = N(o, r[u]);
  return i = new rt({ props: o }), {
    c() {
      e = L("div"), K(i.$$.fragment);
    },
    m(u, s) {
      T(u, e, s), X(i, e, null), n = !0;
    },
    p(u, s) {
      t = u;
      const a = s & /*$$restProps*/
      32 ? fe(r, [Ae(
        /*$$restProps*/
        t[5]
      )]) : {};
      s & /*$$scope*/
      128 && (a.$$scope = { dirty: s, ctx: t }), i.$set(a);
    },
    i(u) {
      n || (_(i.$$.fragment, u), u && Me(() => {
        n && (l || (l = je(
          e,
          /*transition*/
          t[1],
          /*params*/
          t[2],
          !0
        )), l.run(1));
      }), n = !0);
    },
    o(u) {
      y(i.$$.fragment, u), u && (l || (l = je(
        e,
        /*transition*/
        t[1],
        /*params*/
        t[2],
        !1
      )), l.run(0)), n = !1;
    },
    d(u) {
      u && S(e), Q(i), u && l && l.end();
    }
  };
}
function Ss(t) {
  let e;
  const i = (
    /*#slots*/
    t[6].default
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[7],
    hn
  );
  return {
    c() {
      l && l.c();
    },
    m(n, r) {
      l && l.m(n, r), e = !0;
    },
    p(n, r) {
      l && l.p && (!e || r & /*$$scope*/
      128) && Z(
        l,
        i,
        n,
        /*$$scope*/
        n[7],
        e ? J(
          i,
          /*$$scope*/
          n[7],
          r,
          ys
        ) : x(
          /*$$scope*/
          n[7]
        ),
        hn
      );
    },
    i(n) {
      e || (_(l, n), e = !0);
    },
    o(n) {
      y(l, n), e = !1;
    },
    d(n) {
      l && l.d(n);
    }
  };
}
function Ts(t) {
  let e, i, l, n;
  const r = [ws, vs], o = [];
  function u(s, a) {
    return (
      /*dismissable*/
      s[3] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = r[e](t), {
    c() {
      i.c(), l = ue();
    },
    m(s, a) {
      o[e].m(s, a), T(s, l, a), n = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (le(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), re(), i = o[e], i ? i.p(s, a) : (i = o[e] = r[e](s), i.c()), _(i, 1), i.m(l.parentNode, l));
    },
    i(s) {
      n || (_(i), n = !0);
    },
    o(s) {
      y(i), n = !1;
    },
    d(s) {
      s && S(l), o[e].d(s);
    }
  };
}
function Es(t, e, i) {
  const l = ["transition", "params", "open", "dismissable"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e, { transition: u = Zt } = e, { params: s = {} } = e, { open: a = !0 } = e, { dismissable: f = !1 } = e;
  const c = He();
  function d(k) {
    k != null && k.stopPropagation && k.stopPropagation(), i(0, a = !1);
  }
  return t.$$set = (k) => {
    e = N(N({}, e), B(k)), i(5, n = ne(e, l)), "transition" in k && i(1, u = k.transition), "params" in k && i(2, s = k.params), "open" in k && i(0, a = k.open), "dismissable" in k && i(3, f = k.dismissable), "$$scope" in k && i(7, o = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && c(a ? "open" : "close");
  }, [a, u, s, f, d, n, r, o];
}
class Is extends ie {
  constructor(e) {
    super(), te(this, e, Es, Ts, V, {
      transition: 1,
      params: 2,
      open: 0,
      dismissable: 3
    });
  }
}
const As = (t) => ({ svgSize: t & /*size*/
4 }), _n = (t) => ({
  svgSize: (
    /*svgSizes*/
    t[5][
      /*size*/
      t[2]
    ]
  )
}), Os = (t) => ({ svgSize: t & /*size*/
4 }), pn = (t) => ({
  svgSize: (
    /*svgSizes*/
    t[5][
      /*size*/
      t[2]
    ]
  )
});
function Ps(t) {
  let e, i, l, n, r, o, u = (
    /*name*/
    t[0] && yn(t)
  );
  const s = (
    /*#slots*/
    t[9].default
  ), a = Y(
    s,
    t,
    /*$$scope*/
    t[8],
    _n
  );
  let f = [
    { type: "button" },
    /*$$restProps*/
    t[6],
    { class: (
      /*buttonClass*/
      t[4]
    ) },
    {
      "aria-label": l = /*ariaLabel*/
      t[1] ?? /*name*/
      t[0]
    }
  ], c = {};
  for (let d = 0; d < f.length; d += 1)
    c = N(c, f[d]);
  return {
    c() {
      e = L("button"), u && u.c(), i = G(), a && a.c(), ae(e, c);
    },
    m(d, k) {
      T(d, e, k), u && u.m(e, null), R(e, i), a && a.m(e, null), e.autofocus && e.focus(), n = !0, r || (o = D(
        e,
        "click",
        /*click_handler*/
        t[10]
      ), r = !0);
    },
    p(d, k) {
      /*name*/
      d[0] ? u ? u.p(d, k) : (u = yn(d), u.c(), u.m(e, i)) : u && (u.d(1), u = null), a && a.p && (!n || k & /*$$scope, size*/
      260) && Z(
        a,
        s,
        d,
        /*$$scope*/
        d[8],
        n ? J(
          s,
          /*$$scope*/
          d[8],
          k,
          As
        ) : x(
          /*$$scope*/
          d[8]
        ),
        _n
      ), ae(e, c = fe(f, [
        { type: "button" },
        k & /*$$restProps*/
        64 && /*$$restProps*/
        d[6],
        (!n || k & /*buttonClass*/
        16) && { class: (
          /*buttonClass*/
          d[4]
        ) },
        (!n || k & /*ariaLabel, name*/
        3 && l !== (l = /*ariaLabel*/
        d[1] ?? /*name*/
        d[0])) && { "aria-label": l }
      ]));
    },
    i(d) {
      n || (_(a, d), n = !0);
    },
    o(d) {
      y(a, d), n = !1;
    },
    d(d) {
      d && S(e), u && u.d(), a && a.d(d), r = !1, o();
    }
  };
}
function Ms(t) {
  let e, i, l, n, r = (
    /*name*/
    t[0] && vn(t)
  );
  const o = (
    /*#slots*/
    t[9].default
  ), u = Y(
    o,
    t,
    /*$$scope*/
    t[8],
    pn
  );
  let s = [
    { href: (
      /*href*/
      t[3]
    ) },
    /*$$restProps*/
    t[6],
    { class: (
      /*buttonClass*/
      t[4]
    ) },
    {
      "aria-label": l = /*ariaLabel*/
      t[1] ?? /*name*/
      t[0]
    }
  ], a = {};
  for (let f = 0; f < s.length; f += 1)
    a = N(a, s[f]);
  return {
    c() {
      e = L("a"), r && r.c(), i = G(), u && u.c(), ae(e, a);
    },
    m(f, c) {
      T(f, e, c), r && r.m(e, null), R(e, i), u && u.m(e, null), n = !0;
    },
    p(f, c) {
      /*name*/
      f[0] ? r ? r.p(f, c) : (r = vn(f), r.c(), r.m(e, i)) : r && (r.d(1), r = null), u && u.p && (!n || c & /*$$scope, size*/
      260) && Z(
        u,
        o,
        f,
        /*$$scope*/
        f[8],
        n ? J(
          o,
          /*$$scope*/
          f[8],
          c,
          Os
        ) : x(
          /*$$scope*/
          f[8]
        ),
        pn
      ), ae(e, a = fe(s, [
        (!n || c & /*href*/
        8) && { href: (
          /*href*/
          f[3]
        ) },
        c & /*$$restProps*/
        64 && /*$$restProps*/
        f[6],
        (!n || c & /*buttonClass*/
        16) && { class: (
          /*buttonClass*/
          f[4]
        ) },
        (!n || c & /*ariaLabel, name*/
        3 && l !== (l = /*ariaLabel*/
        f[1] ?? /*name*/
        f[0])) && { "aria-label": l }
      ]));
    },
    i(f) {
      n || (_(u, f), n = !0);
    },
    o(f) {
      y(u, f), n = !1;
    },
    d(f) {
      f && S(e), r && r.d(), u && u.d(f);
    }
  };
}
function yn(t) {
  let e, i;
  return {
    c() {
      e = L("span"), i = ke(
        /*name*/
        t[0]
      ), h(e, "class", "uikit-sr-only");
    },
    m(l, n) {
      T(l, e, n), R(e, i);
    },
    p(l, n) {
      n & /*name*/
      1 && be(
        i,
        /*name*/
        l[0]
      );
    },
    d(l) {
      l && S(e);
    }
  };
}
function vn(t) {
  let e, i;
  return {
    c() {
      e = L("span"), i = ke(
        /*name*/
        t[0]
      ), h(e, "class", "uikit-sr-only");
    },
    m(l, n) {
      T(l, e, n), R(e, i);
    },
    p(l, n) {
      n & /*name*/
      1 && be(
        i,
        /*name*/
        l[0]
      );
    },
    d(l) {
      l && S(e);
    }
  };
}
function Ls(t) {
  let e, i, l, n;
  const r = [Ms, Ps], o = [];
  function u(s, a) {
    return (
      /*href*/
      s[3] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = r[e](t), {
    c() {
      i.c(), l = ue();
    },
    m(s, a) {
      o[e].m(s, a), T(s, l, a), n = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (le(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), re(), i = o[e], i ? i.p(s, a) : (i = o[e] = r[e](s), i.c()), _(i, 1), i.m(l.parentNode, l));
    },
    i(s) {
      n || (_(i), n = !0);
    },
    o(s) {
      y(i), n = !1;
    },
    d(s) {
      s && S(l), o[e].d(s);
    }
  };
}
function Ns(t, e, i) {
  const l = ["color", "name", "ariaLabel", "size", "href"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e;
  const u = Pe("background");
  let { color: s = "default" } = e, { name: a = void 0 } = e, { ariaLabel: f = void 0 } = e, { size: c = "md" } = e, { href: d = void 0 } = e;
  const k = {
    dark: "uikit-text-gray-500 hover:uikit-text-gray-900 hover:uikit-bg-gray-200 dark:uikit-text-gray-400 dark:hover:uikit-text-white dark:hover:uikit-bg-gray-600",
    gray: "uikit-text-gray-500 focus:uikit-ring-gray-400 hover:uikit-bg-gray-200 dark:hover:uikit-bg-gray-800 dark:hover:uikit-text-gray-300",
    red: "uikit-text-red-500 focus:uikit-ring-red-400 hover:uikit-bg-red-200 dark:hover:uikit-bg-red-800 dark:hover:uikit-text-red-300",
    yellow: "uikit-text-yellow-500 focus:uikit-ring-yellow-400 hover:uikit-bg-yellow-200 dark:hover:uikit-bg-yellow-800 dark:hover:uikit-text-yellow-300",
    green: "uikit-text-green-500 focus:uikit-ring-green-400 hover:uikit-bg-green-200 dark:hover:uikit-bg-green-800 dark:hover:uikit-text-green-300",
    indigo: "uikit-text-indigo-500 focus:uikit-ring-indigo-400 hover:uikit-bg-indigo-200 dark:hover:uikit-bg-indigo-800 dark:hover:uikit-text-indigo-300",
    purple: "uikit-text-purple-500 focus:uikit-ring-purple-400 hover:uikit-bg-purple-200 dark:hover:uikit-bg-purple-800 dark:hover:uikit-text-purple-300",
    pink: "uikit-text-pink-500 focus:uikit-ring-pink-400 hover:uikit-bg-pink-200 dark:hover:uikit-bg-pink-800 dark:hover:uikit-text-pink-300",
    blue: "uikit-text-blue-500 focus:uikit-ring-blue-400 hover:uikit-bg-blue-200 dark:hover:uikit-bg-blue-800 dark:hover:uikit-text-blue-300",
    primary: "uikit-text-primary-500 focus:uikit-ring-primary-400 hover:uikit-bg-primary-200 dark:hover:uikit-bg-primary-800 dark:hover:uikit-text-primary-300",
    default: "focus:uikit-ring-gray-400"
  }, g = {
    xs: "uikit-m-0.5 uikit-rounded-sm focus:uikit-ring-1 uikit-p-0.5",
    sm: "uikit-m-0.5 uikit-rounded focus:uikit-ring-1 uikit-p-0.5",
    md: "uikit-m-0.5 uikit-rounded-lg focus:uikit-ring-2 uikit-p-1.5",
    lg: "uikit-m-0.5 uikit-rounded-lg focus:uikit-ring-2 uikit-p-2.5"
  };
  let m;
  const b = {
    xs: "uikit-w-3 uikit-h-3",
    sm: "uikit-w-3.5 uikit-h-3.5",
    md: "uikit-w-5 uikit-h-5",
    lg: "uikit-w-5 uikit-h-5"
  };
  function p(C) {
    F.call(this, t, C);
  }
  return t.$$set = (C) => {
    i(14, e = N(N({}, e), B(C))), i(6, n = ne(e, l)), "color" in C && i(7, s = C.color), "name" in C && i(0, a = C.name), "ariaLabel" in C && i(1, f = C.ariaLabel), "size" in C && i(2, c = C.size), "href" in C && i(3, d = C.href), "$$scope" in C && i(8, o = C.$$scope);
  }, t.$$.update = () => {
    i(4, m = A(
      "focus:uikit-outline-none uikit-whitespace-normal",
      g[c],
      k[s],
      s === "default" && (u ? "hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-600" : "hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700"),
      e.class
    ));
  }, e = B(e), [
    a,
    f,
    c,
    d,
    m,
    b,
    n,
    s,
    o,
    r,
    p
  ];
}
class zs extends ie {
  constructor(e) {
    super(), te(this, e, Ns, Ls, V, {
      color: 7,
      name: 0,
      ariaLabel: 1,
      size: 2,
      href: 3
    });
  }
}
function Rs(t) {
  let e, i, l;
  return {
    c() {
      e = pe("svg"), i = pe("path"), h(i, "fill-rule", "evenodd"), h(i, "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"), h(i, "clip-rule", "evenodd"), h(e, "class", l = /*svgSize*/
      t[4]), h(e, "fill", "currentColor"), h(e, "viewBox", "0 0 20 20"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, r) {
      T(n, e, r), R(e, i);
    },
    p(n, r) {
      r & /*svgSize*/
      16 && l !== (l = /*svgSize*/
      n[4]) && h(e, "class", l);
    },
    d(n) {
      n && S(e);
    }
  };
}
function Ds(t) {
  let e, i;
  const l = [
    { name: (
      /*name*/
      t[0]
    ) },
    /*$$restProps*/
    t[1],
    {
      class: A(
        "uikit-ms-auto",
        /*$$props*/
        t[2].class
      )
    }
  ];
  let n = {
    $$slots: {
      default: [
        Rs,
        ({ svgSize: r }) => ({ 4: r }),
        ({ svgSize: r }) => r ? 16 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < l.length; r += 1)
    n = N(n, l[r]);
  return e = new zs({ props: n }), e.$on(
    "click",
    /*click_handler*/
    t[3]
  ), {
    c() {
      K(e.$$.fragment);
    },
    m(r, o) {
      X(e, r, o), i = !0;
    },
    p(r, [o]) {
      const u = o & /*name, $$restProps, twMerge, $$props*/
      7 ? fe(l, [
        o & /*name*/
        1 && { name: (
          /*name*/
          r[0]
        ) },
        o & /*$$restProps*/
        2 && Ae(
          /*$$restProps*/
          r[1]
        ),
        o & /*twMerge, $$props*/
        4 && {
          class: A(
            "uikit-ms-auto",
            /*$$props*/
            r[2].class
          )
        }
      ]) : {};
      o & /*$$scope, svgSize*/
      48 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
    },
    i(r) {
      i || (_(e.$$.fragment, r), i = !0);
    },
    o(r) {
      y(e.$$.fragment, r), i = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function Bs(t, e, i) {
  const l = ["name"];
  let n = ne(e, l), { name: r = "Close" } = e;
  function o(u) {
    F.call(this, t, u);
  }
  return t.$$set = (u) => {
    i(2, e = N(N({}, e), B(u))), i(1, n = ne(e, l)), "name" in u && i(0, r = u.name);
  }, e = B(e), [r, n, e, o];
}
class Wi extends ie {
  constructor(e) {
    super(), te(this, e, Bs, Ds, V, { name: 0 });
  }
}
const Fs = (t) => ({ close: t & /*close*/
1048576 }), wn = (t) => ({ close: (
  /*close*/
  t[20]
) }), js = (t) => ({}), Cn = (t) => ({});
function Sn(t) {
  let e;
  const i = (
    /*#slots*/
    t[7].icon
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[18],
    Cn
  );
  return {
    c() {
      l && l.c();
    },
    m(n, r) {
      l && l.m(n, r), e = !0;
    },
    p(n, r) {
      l && l.p && (!e || r & /*$$scope*/
      262144) && Z(
        l,
        i,
        n,
        /*$$scope*/
        n[18],
        e ? J(
          i,
          /*$$scope*/
          n[18],
          r,
          js
        ) : x(
          /*$$scope*/
          n[18]
        ),
        Cn
      );
    },
    i(n) {
      e || (_(l, n), e = !0);
    },
    o(n) {
      y(l, n), e = !1;
    },
    d(n) {
      l && l.d(n);
    }
  };
}
function Ws(t) {
  let e;
  const i = (
    /*#slots*/
    t[7].default
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[18],
    null
  );
  return {
    c() {
      l && l.c();
    },
    m(n, r) {
      l && l.m(n, r), e = !0;
    },
    p(n, r) {
      l && l.p && (!e || r & /*$$scope*/
      262144) && Z(
        l,
        i,
        n,
        /*$$scope*/
        n[18],
        e ? J(
          i,
          /*$$scope*/
          n[18],
          r,
          null
        ) : x(
          /*$$scope*/
          n[18]
        ),
        null
      );
    },
    i(n) {
      e || (_(l, n), e = !0);
    },
    o(n) {
      y(l, n), e = !1;
    },
    d(n) {
      l && l.d(n);
    }
  };
}
function Us(t) {
  let e, i;
  const l = (
    /*#slots*/
    t[7].default
  ), n = Y(
    l,
    t,
    /*$$scope*/
    t[18],
    null
  );
  return {
    c() {
      e = L("div"), n && n.c();
    },
    m(r, o) {
      T(r, e, o), n && n.m(e, null), i = !0;
    },
    p(r, o) {
      n && n.p && (!i || o & /*$$scope*/
      262144) && Z(
        n,
        l,
        r,
        /*$$scope*/
        r[18],
        i ? J(
          l,
          /*$$scope*/
          r[18],
          o,
          null
        ) : x(
          /*$$scope*/
          r[18]
        ),
        null
      );
    },
    i(r) {
      i || (_(n, r), i = !0);
    },
    o(r) {
      y(n, r), i = !1;
    },
    d(r) {
      r && S(e), n && n.d(r);
    }
  };
}
function Tn(t) {
  let e;
  const i = (
    /*#slots*/
    t[7]["close-button"]
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[18],
    wn
  ), n = l || Gs(t);
  return {
    c() {
      n && n.c();
    },
    m(r, o) {
      n && n.m(r, o), e = !0;
    },
    p(r, o) {
      l ? l.p && (!e || o & /*$$scope, close*/
      1310720) && Z(
        l,
        i,
        r,
        /*$$scope*/
        r[18],
        e ? J(
          i,
          /*$$scope*/
          r[18],
          o,
          Fs
        ) : x(
          /*$$scope*/
          r[18]
        ),
        wn
      ) : n && n.p && (!e || o & /*$$restProps, close*/
      1048608) && n.p(r, e ? o : -1);
    },
    i(r) {
      e || (_(n, r), e = !0);
    },
    o(r) {
      y(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Gs(t) {
  let e, i;
  function l(...n) {
    return (
      /*click_handler_1*/
      t[8](
        /*close*/
        t[20],
        ...n
      )
    );
  }
  return e = new Wi({
    props: {
      name: "",
      class: "uikit-ms-auto -uikit-me-1.5 -uikit-my-1.5 dark:hover:uikit-bg-gray-700",
      color: (
        /*$$restProps*/
        t[5].color
      )
    }
  }), e.$on("click", l), e.$on(
    "click",
    /*click_handler*/
    t[9]
  ), e.$on(
    "change",
    /*change_handler*/
    t[10]
  ), e.$on(
    "keydown",
    /*keydown_handler*/
    t[11]
  ), e.$on(
    "keyup",
    /*keyup_handler*/
    t[12]
  ), e.$on(
    "focus",
    /*focus_handler*/
    t[13]
  ), e.$on(
    "blur",
    /*blur_handler*/
    t[14]
  ), e.$on(
    "mouseenter",
    /*mouseenter_handler*/
    t[15]
  ), e.$on(
    "mouseleave",
    /*mouseleave_handler*/
    t[16]
  ), {
    c() {
      K(e.$$.fragment);
    },
    m(n, r) {
      X(e, n, r), i = !0;
    },
    p(n, r) {
      t = n;
      const o = {};
      r & /*$$restProps*/
      32 && (o.color = /*$$restProps*/
      t[5].color), e.$set(o);
    },
    i(n) {
      i || (_(e.$$.fragment, n), i = !0);
    },
    o(n) {
      y(e.$$.fragment, n), i = !1;
    },
    d(n) {
      Q(e, n);
    }
  };
}
function Hs(t) {
  let e, i, l, n, r, o, u = (
    /*$$slots*/
    t[4].icon && Sn(t)
  );
  const s = [Us, Ws], a = [];
  function f(d, k) {
    return (
      /*$$slots*/
      d[4].icon || /*dismissable*/
      d[1] ? 0 : 1
    );
  }
  i = f(t), l = a[i] = s[i](t);
  let c = (
    /*dismissable*/
    t[1] && Tn(t)
  );
  return {
    c() {
      u && u.c(), e = G(), l.c(), n = G(), c && c.c(), r = ue();
    },
    m(d, k) {
      u && u.m(d, k), T(d, e, k), a[i].m(d, k), T(d, n, k), c && c.m(d, k), T(d, r, k), o = !0;
    },
    p(d, k) {
      /*$$slots*/
      d[4].icon ? u ? (u.p(d, k), k & /*$$slots*/
      16 && _(u, 1)) : (u = Sn(d), u.c(), _(u, 1), u.m(e.parentNode, e)) : u && (le(), y(u, 1, 1, () => {
        u = null;
      }), re());
      let g = i;
      i = f(d), i === g ? a[i].p(d, k) : (le(), y(a[g], 1, 1, () => {
        a[g] = null;
      }), re(), l = a[i], l ? l.p(d, k) : (l = a[i] = s[i](d), l.c()), _(l, 1), l.m(n.parentNode, n)), /*dismissable*/
      d[1] ? c ? (c.p(d, k), k & /*dismissable*/
      2 && _(c, 1)) : (c = Tn(d), c.c(), _(c, 1), c.m(r.parentNode, r)) : c && (le(), y(c, 1, 1, () => {
        c = null;
      }), re());
    },
    i(d) {
      o || (_(u), _(l), _(c), o = !0);
    },
    o(d) {
      y(u), y(l), y(c), o = !1;
    },
    d(d) {
      d && (S(e), S(n), S(r)), u && u.d(d), a[i].d(d), c && c.d(d);
    }
  };
}
function Vs(t) {
  let e, i;
  const l = [
    { dismissable: (
      /*dismissable*/
      t[1]
    ) },
    { open: (
      /*open*/
      t[0]
    ) },
    { color: "primary" },
    { role: "alert" },
    { rounded: !0 },
    /*$$restProps*/
    t[5],
    { class: (
      /*divClass*/
      t[2]
    ) }
  ];
  let n = {
    $$slots: {
      default: [
        Hs,
        ({ close: r }) => ({ 20: r }),
        ({ close: r }) => r ? 1048576 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < l.length; r += 1)
    n = N(n, l[r]);
  return e = new Is({ props: n }), e.$on(
    "close",
    /*close_handler*/
    t[17]
  ), {
    c() {
      K(e.$$.fragment);
    },
    m(r, o) {
      X(e, r, o), i = !0;
    },
    p(r, [o]) {
      const u = o & /*dismissable, open, $$restProps, divClass*/
      39 ? fe(l, [
        o & /*dismissable*/
        2 && { dismissable: (
          /*dismissable*/
          r[1]
        ) },
        o & /*open*/
        1 && { open: (
          /*open*/
          r[0]
        ) },
        l[2],
        l[3],
        l[4],
        o & /*$$restProps*/
        32 && Ae(
          /*$$restProps*/
          r[5]
        ),
        o & /*divClass*/
        4 && { class: (
          /*divClass*/
          r[2]
        ) }
      ]) : {};
      o & /*$$scope, $$restProps, close, dismissable, $$slots*/
      1310770 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
    },
    i(r) {
      i || (_(e.$$.fragment, r), i = !0);
    },
    o(r) {
      y(e.$$.fragment, r), i = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function qs(t, e, i) {
  const l = ["open", "dismissable", "defaultClass"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e;
  const u = Ye(r);
  let { open: s = !0 } = e, { dismissable: a = !1 } = e, { defaultClass: f = "uikit-p-4 uikit-gap-3 uikit-text-sm" } = e, c;
  const d = He(), k = (I, U) => {
    d("onEnd"), I(U);
  };
  function g(I) {
    F.call(this, t, I);
  }
  function m(I) {
    F.call(this, t, I);
  }
  function b(I) {
    F.call(this, t, I);
  }
  function p(I) {
    F.call(this, t, I);
  }
  function C(I) {
    F.call(this, t, I);
  }
  function w(I) {
    F.call(this, t, I);
  }
  function v(I) {
    F.call(this, t, I);
  }
  function E(I) {
    F.call(this, t, I);
  }
  function O(I) {
    F.call(this, t, I);
  }
  return t.$$set = (I) => {
    i(19, e = N(N({}, e), B(I))), i(5, n = ne(e, l)), "open" in I && i(0, s = I.open), "dismissable" in I && i(1, a = I.dismissable), "defaultClass" in I && i(6, f = I.defaultClass), "$$scope" in I && i(18, o = I.$$scope);
  }, t.$$.update = () => {
    i(2, c = A(f, (u.icon || a) && "uikit-flex uikit-items-center", e.class));
  }, e = B(e), [
    s,
    a,
    c,
    d,
    u,
    n,
    f,
    r,
    k,
    g,
    m,
    b,
    p,
    C,
    w,
    v,
    E,
    O,
    o
  ];
}
class Xs extends ie {
  constructor(e) {
    super(), te(this, e, qs, Vs, V, { open: 0, dismissable: 1, defaultClass: 6 });
  }
}
const yt = /^[a-z0-9]+(-[a-z0-9]+)*$/, xt = (t, e, i, l = "") => {
  const n = t.split(":");
  if (t.slice(0, 1) === "@") {
    if (n.length < 2 || n.length > 3)
      return null;
    l = n.shift().slice(1);
  }
  if (n.length > 3 || !n.length)
    return null;
  if (n.length > 1) {
    const u = n.pop(), s = n.pop(), a = {
      // Allow provider without '@': "provider:prefix:name"
      provider: n.length > 0 ? n[0] : l,
      prefix: s,
      name: u
    };
    return e && !Ft(a) ? null : a;
  }
  const r = n[0], o = r.split("-");
  if (o.length > 1) {
    const u = {
      provider: l,
      prefix: o.shift(),
      name: o.join("-")
    };
    return e && !Ft(u) ? null : u;
  }
  if (i && l === "") {
    const u = {
      provider: l,
      prefix: "",
      name: r
    };
    return e && !Ft(u, i) ? null : u;
  }
  return null;
}, Ft = (t, e) => t ? !!((t.provider === "" || t.provider.match(yt)) && (e && t.prefix === "" || t.prefix.match(yt)) && t.name.match(yt)) : !1, pr = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
), qt = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), $t = Object.freeze({
  ...pr,
  ...qt
}), yi = Object.freeze({
  ...$t,
  body: "",
  hidden: !1
});
function Qs(t, e) {
  const i = {};
  !t.hFlip != !e.hFlip && (i.hFlip = !0), !t.vFlip != !e.vFlip && (i.vFlip = !0);
  const l = ((t.rotate || 0) + (e.rotate || 0)) % 4;
  return l && (i.rotate = l), i;
}
function En(t, e) {
  const i = Qs(t, e);
  for (const l in yi)
    l in qt ? l in t && !(l in i) && (i[l] = qt[l]) : l in e ? i[l] = e[l] : l in t && (i[l] = t[l]);
  return i;
}
function Ks(t, e) {
  const i = t.icons, l = t.aliases || /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null);
  function r(o) {
    if (i[o])
      return n[o] = [];
    if (!(o in n)) {
      n[o] = null;
      const u = l[o] && l[o].parent, s = u && r(u);
      s && (n[o] = [u].concat(s));
    }
    return n[o];
  }
  return (e || Object.keys(i).concat(Object.keys(l))).forEach(r), n;
}
function Ys(t, e, i) {
  const l = t.icons, n = t.aliases || /* @__PURE__ */ Object.create(null);
  let r = {};
  function o(u) {
    r = En(
      l[u] || n[u],
      r
    );
  }
  return o(e), i.forEach(o), En(t, r);
}
function yr(t, e) {
  const i = [];
  if (typeof t != "object" || typeof t.icons != "object")
    return i;
  t.not_found instanceof Array && t.not_found.forEach((n) => {
    e(n, null), i.push(n);
  });
  const l = Ks(t);
  for (const n in l) {
    const r = l[n];
    r && (e(n, Ys(t, n, r)), i.push(n));
  }
  return i;
}
const Js = {
  provider: "",
  aliases: {},
  not_found: {},
  ...pr
};
function ui(t, e) {
  for (const i in e)
    if (i in t && typeof t[i] != typeof e[i])
      return !1;
  return !0;
}
function vr(t) {
  if (typeof t != "object" || t === null)
    return null;
  const e = t;
  if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !ui(t, Js))
    return null;
  const i = e.icons;
  for (const n in i) {
    const r = i[n];
    if (!n.match(yt) || typeof r.body != "string" || !ui(
      r,
      yi
    ))
      return null;
  }
  const l = e.aliases || /* @__PURE__ */ Object.create(null);
  for (const n in l) {
    const r = l[n], o = r.parent;
    if (!n.match(yt) || typeof o != "string" || !i[o] && !l[o] || !ui(
      r,
      yi
    ))
      return null;
  }
  return e;
}
const In = /* @__PURE__ */ Object.create(null);
function Zs(t, e) {
  return {
    provider: t,
    prefix: e,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function et(t, e) {
  const i = In[t] || (In[t] = /* @__PURE__ */ Object.create(null));
  return i[e] || (i[e] = Zs(t, e));
}
function Ui(t, e) {
  return vr(e) ? yr(e, (i, l) => {
    l ? t.icons[i] = l : t.missing.add(i);
  }) : [];
}
function xs(t, e, i) {
  try {
    if (typeof i.body == "string")
      return t.icons[e] = { ...i }, !0;
  } catch {
  }
  return !1;
}
let St = !1;
function wr(t) {
  return typeof t == "boolean" && (St = t), St;
}
function $s(t) {
  const e = typeof t == "string" ? xt(t, !0, St) : t;
  if (e) {
    const i = et(e.provider, e.prefix), l = e.name;
    return i.icons[l] || (i.missing.has(l) ? null : void 0);
  }
}
function eu(t, e) {
  const i = xt(t, !0, St);
  if (!i)
    return !1;
  const l = et(i.provider, i.prefix);
  return xs(l, i.name, e);
}
function tu(t, e) {
  if (typeof t != "object")
    return !1;
  if (typeof e != "string" && (e = t.provider || ""), St && !e && !t.prefix) {
    let n = !1;
    return vr(t) && (t.prefix = "", yr(t, (r, o) => {
      o && eu(r, o) && (n = !0);
    })), n;
  }
  const i = t.prefix;
  if (!Ft({
    provider: e,
    prefix: i,
    name: "a"
  }))
    return !1;
  const l = et(e, i);
  return !!Ui(l, t);
}
const Cr = Object.freeze({
  width: null,
  height: null
}), Sr = Object.freeze({
  // Dimensions
  ...Cr,
  // Transformations
  ...qt
}), iu = /(-?[0-9.]*[0-9]+[0-9.]*)/g, nu = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function An(t, e, i) {
  if (e === 1)
    return t;
  if (i = i || 100, typeof t == "number")
    return Math.ceil(t * e * i) / i;
  if (typeof t != "string")
    return t;
  const l = t.split(iu);
  if (l === null || !l.length)
    return t;
  const n = [];
  let r = l.shift(), o = nu.test(r);
  for (; ; ) {
    if (o) {
      const u = parseFloat(r);
      isNaN(u) ? n.push(r) : n.push(Math.ceil(u * e * i) / i);
    } else
      n.push(r);
    if (r = l.shift(), r === void 0)
      return n.join("");
    o = !o;
  }
}
const lu = (t) => t === "unset" || t === "undefined" || t === "none";
function ru(t, e) {
  const i = {
    ...$t,
    ...t
  }, l = {
    ...Sr,
    ...e
  }, n = {
    left: i.left,
    top: i.top,
    width: i.width,
    height: i.height
  };
  let r = i.body;
  [i, l].forEach((g) => {
    const m = [], b = g.hFlip, p = g.vFlip;
    let C = g.rotate;
    b ? p ? C += 2 : (m.push(
      "translate(" + (n.width + n.left).toString() + " " + (0 - n.top).toString() + ")"
    ), m.push("scale(-1 1)"), n.top = n.left = 0) : p && (m.push(
      "translate(" + (0 - n.left).toString() + " " + (n.height + n.top).toString() + ")"
    ), m.push("scale(1 -1)"), n.top = n.left = 0);
    let w;
    switch (C < 0 && (C -= Math.floor(C / 4) * 4), C = C % 4, C) {
      case 1:
        w = n.height / 2 + n.top, m.unshift(
          "rotate(90 " + w.toString() + " " + w.toString() + ")"
        );
        break;
      case 2:
        m.unshift(
          "rotate(180 " + (n.width / 2 + n.left).toString() + " " + (n.height / 2 + n.top).toString() + ")"
        );
        break;
      case 3:
        w = n.width / 2 + n.left, m.unshift(
          "rotate(-90 " + w.toString() + " " + w.toString() + ")"
        );
        break;
    }
    C % 2 === 1 && (n.left !== n.top && (w = n.left, n.left = n.top, n.top = w), n.width !== n.height && (w = n.width, n.width = n.height, n.height = w)), m.length && (r = '<g transform="' + m.join(" ") + '">' + r + "</g>");
  });
  const o = l.width, u = l.height, s = n.width, a = n.height;
  let f, c;
  o === null ? (c = u === null ? "1em" : u === "auto" ? a : u, f = An(c, s / a)) : (f = o === "auto" ? s : o, c = u === null ? An(f, a / s) : u === "auto" ? a : u);
  const d = {}, k = (g, m) => {
    lu(m) || (d[g] = m.toString());
  };
  return k("width", f), k("height", c), d.viewBox = n.left.toString() + " " + n.top.toString() + " " + s.toString() + " " + a.toString(), {
    attributes: d,
    body: r
  };
}
const ou = /\sid="(\S+)"/g, su = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let uu = 0;
function au(t, e = su) {
  const i = [];
  let l;
  for (; l = ou.exec(t); )
    i.push(l[1]);
  if (!i.length)
    return t;
  const n = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return i.forEach((r) => {
    const o = typeof e == "function" ? e(r) : e + (uu++).toString(), u = r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + u + ')([")]|\\.[a-z])', "g"),
      "$1" + o + n + "$3"
    );
  }), t = t.replace(new RegExp(n, "g"), ""), t;
}
const vi = /* @__PURE__ */ Object.create(null);
function fu(t, e) {
  vi[t] = e;
}
function wi(t) {
  return vi[t] || vi[""];
}
function Gi(t) {
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
const Hi = /* @__PURE__ */ Object.create(null), _t = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
], jt = [];
for (; _t.length > 0; )
  _t.length === 1 || Math.random() > 0.5 ? jt.push(_t.shift()) : jt.push(_t.pop());
Hi[""] = Gi({
  resources: ["https://api.iconify.design"].concat(jt)
});
function cu(t, e) {
  const i = Gi(e);
  return i === null ? !1 : (Hi[t] = i, !0);
}
function Vi(t) {
  return Hi[t];
}
const du = () => {
  let t;
  try {
    if (t = fetch, typeof t == "function")
      return t;
  } catch {
  }
};
let On = du();
function ku(t, e) {
  const i = Vi(t);
  if (!i)
    return 0;
  let l;
  if (!i.maxURL)
    l = 0;
  else {
    let n = 0;
    i.resources.forEach((o) => {
      n = Math.max(n, o.length);
    });
    const r = e + ".json?icons=";
    l = i.maxURL - n - i.path.length - r.length;
  }
  return l;
}
function gu(t) {
  return t === 404;
}
const mu = (t, e, i) => {
  const l = [], n = ku(t, e), r = "icons";
  let o = {
    type: r,
    provider: t,
    prefix: e,
    icons: []
  }, u = 0;
  return i.forEach((s, a) => {
    u += s.length + 1, u >= n && a > 0 && (l.push(o), o = {
      type: r,
      provider: t,
      prefix: e,
      icons: []
    }, u = s.length), o.icons.push(s);
  }), l.push(o), l;
};
function hu(t) {
  if (typeof t == "string") {
    const e = Vi(t);
    if (e)
      return e.path;
  }
  return "/";
}
const bu = (t, e, i) => {
  if (!On) {
    i("abort", 424);
    return;
  }
  let l = hu(e.provider);
  switch (e.type) {
    case "icons": {
      const r = e.prefix, u = e.icons.join(","), s = new URLSearchParams({
        icons: u
      });
      l += r + ".json?" + s.toString();
      break;
    }
    case "custom": {
      const r = e.uri;
      l += r.slice(0, 1) === "/" ? r.slice(1) : r;
      break;
    }
    default:
      i("abort", 400);
      return;
  }
  let n = 503;
  On(t + l).then((r) => {
    const o = r.status;
    if (o !== 200) {
      setTimeout(() => {
        i(gu(o) ? "abort" : "next", o);
      });
      return;
    }
    return n = 501, r.json();
  }).then((r) => {
    if (typeof r != "object" || r === null) {
      setTimeout(() => {
        r === 404 ? i("abort", r) : i("next", n);
      });
      return;
    }
    setTimeout(() => {
      i("success", r);
    });
  }).catch(() => {
    i("next", n);
  });
}, _u = {
  prepare: mu,
  send: bu
};
function pu(t) {
  const e = {
    loaded: [],
    missing: [],
    pending: []
  }, i = /* @__PURE__ */ Object.create(null);
  t.sort((n, r) => n.provider !== r.provider ? n.provider.localeCompare(r.provider) : n.prefix !== r.prefix ? n.prefix.localeCompare(r.prefix) : n.name.localeCompare(r.name));
  let l = {
    provider: "",
    prefix: "",
    name: ""
  };
  return t.forEach((n) => {
    if (l.name === n.name && l.prefix === n.prefix && l.provider === n.provider)
      return;
    l = n;
    const r = n.provider, o = n.prefix, u = n.name, s = i[r] || (i[r] = /* @__PURE__ */ Object.create(null)), a = s[o] || (s[o] = et(r, o));
    let f;
    u in a.icons ? f = e.loaded : o === "" || a.missing.has(u) ? f = e.missing : f = e.pending;
    const c = {
      provider: r,
      prefix: o,
      name: u
    };
    f.push(c);
  }), e;
}
function Tr(t, e) {
  t.forEach((i) => {
    const l = i.loaderCallbacks;
    l && (i.loaderCallbacks = l.filter((n) => n.id !== e));
  });
}
function yu(t) {
  t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0, setTimeout(() => {
    t.pendingCallbacksFlag = !1;
    const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
    if (!e.length)
      return;
    let i = !1;
    const l = t.provider, n = t.prefix;
    e.forEach((r) => {
      const o = r.icons, u = o.pending.length;
      o.pending = o.pending.filter((s) => {
        if (s.prefix !== n)
          return !0;
        const a = s.name;
        if (t.icons[a])
          o.loaded.push({
            provider: l,
            prefix: n,
            name: a
          });
        else if (t.missing.has(a))
          o.missing.push({
            provider: l,
            prefix: n,
            name: a
          });
        else
          return i = !0, !0;
        return !1;
      }), o.pending.length !== u && (i || Tr([t], r.id), r.callback(
        o.loaded.slice(0),
        o.missing.slice(0),
        o.pending.slice(0),
        r.abort
      ));
    });
  }));
}
let vu = 0;
function wu(t, e, i) {
  const l = vu++, n = Tr.bind(null, i, l);
  if (!e.pending.length)
    return n;
  const r = {
    id: l,
    icons: e,
    callback: t,
    abort: n
  };
  return i.forEach((o) => {
    (o.loaderCallbacks || (o.loaderCallbacks = [])).push(r);
  }), n;
}
function Cu(t, e = !0, i = !1) {
  const l = [];
  return t.forEach((n) => {
    const r = typeof n == "string" ? xt(n, e, i) : n;
    r && l.push(r);
  }), l;
}
var Su = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: !1,
  dataAfterTimeout: !1
};
function Tu(t, e, i, l) {
  const n = t.resources.length, r = t.random ? Math.floor(Math.random() * n) : t.index;
  let o;
  if (t.random) {
    let O = t.resources.slice(0);
    for (o = []; O.length > 1; ) {
      const I = Math.floor(Math.random() * O.length);
      o.push(O[I]), O = O.slice(0, I).concat(O.slice(I + 1));
    }
    o = o.concat(O);
  } else
    o = t.resources.slice(r).concat(t.resources.slice(0, r));
  const u = Date.now();
  let s = "pending", a = 0, f, c = null, d = [], k = [];
  typeof l == "function" && k.push(l);
  function g() {
    c && (clearTimeout(c), c = null);
  }
  function m() {
    s === "pending" && (s = "aborted"), g(), d.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), d = [];
  }
  function b(O, I) {
    I && (k = []), typeof O == "function" && k.push(O);
  }
  function p() {
    return {
      startTime: u,
      payload: e,
      status: s,
      queriesSent: a,
      queriesPending: d.length,
      subscribe: b,
      abort: m
    };
  }
  function C() {
    s = "failed", k.forEach((O) => {
      O(void 0, f);
    });
  }
  function w() {
    d.forEach((O) => {
      O.status === "pending" && (O.status = "aborted");
    }), d = [];
  }
  function v(O, I, U) {
    const $ = I !== "success";
    switch (d = d.filter((W) => W !== O), s) {
      case "pending":
        break;
      case "failed":
        if ($ || !t.dataAfterTimeout)
          return;
        break;
      default:
        return;
    }
    if (I === "abort") {
      f = U, C();
      return;
    }
    if ($) {
      f = U, d.length || (o.length ? E() : C());
      return;
    }
    if (g(), w(), !t.random) {
      const W = t.resources.indexOf(O.resource);
      W !== -1 && W !== t.index && (t.index = W);
    }
    s = "completed", k.forEach((W) => {
      W(U);
    });
  }
  function E() {
    if (s !== "pending")
      return;
    g();
    const O = o.shift();
    if (O === void 0) {
      if (d.length) {
        c = setTimeout(() => {
          g(), s === "pending" && (w(), C());
        }, t.timeout);
        return;
      }
      C();
      return;
    }
    const I = {
      status: "pending",
      resource: O,
      callback: (U, $) => {
        v(I, U, $);
      }
    };
    d.push(I), a++, c = setTimeout(E, t.rotate), i(O, e, I.callback);
  }
  return setTimeout(E), p;
}
function Er(t) {
  const e = {
    ...Su,
    ...t
  };
  let i = [];
  function l() {
    i = i.filter((u) => u().status === "pending");
  }
  function n(u, s, a) {
    const f = Tu(
      e,
      u,
      s,
      (c, d) => {
        l(), a && a(c, d);
      }
    );
    return i.push(f), f;
  }
  function r(u) {
    return i.find((s) => u(s)) || null;
  }
  return {
    query: n,
    find: r,
    setIndex: (u) => {
      e.index = u;
    },
    getIndex: () => e.index,
    cleanup: l
  };
}
function Pn() {
}
const ai = /* @__PURE__ */ Object.create(null);
function Eu(t) {
  if (!ai[t]) {
    const e = Vi(t);
    if (!e)
      return;
    const i = Er(e), l = {
      config: e,
      redundancy: i
    };
    ai[t] = l;
  }
  return ai[t];
}
function Iu(t, e, i) {
  let l, n;
  if (typeof t == "string") {
    const r = wi(t);
    if (!r)
      return i(void 0, 424), Pn;
    n = r.send;
    const o = Eu(t);
    o && (l = o.redundancy);
  } else {
    const r = Gi(t);
    if (r) {
      l = Er(r);
      const o = t.resources ? t.resources[0] : "", u = wi(o);
      u && (n = u.send);
    }
  }
  return !l || !n ? (i(void 0, 424), Pn) : l.query(e, n, i)().abort;
}
const Mn = "iconify2", Tt = "iconify", Ir = Tt + "-count", Ln = Tt + "-version", Ar = 36e5, Au = 168;
function Ci(t, e) {
  try {
    return t.getItem(e);
  } catch {
  }
}
function qi(t, e, i) {
  try {
    return t.setItem(e, i), !0;
  } catch {
  }
}
function Nn(t, e) {
  try {
    t.removeItem(e);
  } catch {
  }
}
function Si(t, e) {
  return qi(t, Ir, e.toString());
}
function Ti(t) {
  return parseInt(Ci(t, Ir)) || 0;
}
const ei = {
  local: !0,
  session: !0
}, Or = {
  local: /* @__PURE__ */ new Set(),
  session: /* @__PURE__ */ new Set()
};
let Xi = !1;
function Ou(t) {
  Xi = t;
}
let Rt = typeof window > "u" ? {} : window;
function Pr(t) {
  const e = t + "Storage";
  try {
    if (Rt && Rt[e] && typeof Rt[e].length == "number")
      return Rt[e];
  } catch {
  }
  ei[t] = !1;
}
function Mr(t, e) {
  const i = Pr(t);
  if (!i)
    return;
  const l = Ci(i, Ln);
  if (l !== Mn) {
    if (l) {
      const u = Ti(i);
      for (let s = 0; s < u; s++)
        Nn(i, Tt + s.toString());
    }
    qi(i, Ln, Mn), Si(i, 0);
    return;
  }
  const n = Math.floor(Date.now() / Ar) - Au, r = (u) => {
    const s = Tt + u.toString(), a = Ci(i, s);
    if (typeof a == "string") {
      try {
        const f = JSON.parse(a);
        if (typeof f == "object" && typeof f.cached == "number" && f.cached > n && typeof f.provider == "string" && typeof f.data == "object" && typeof f.data.prefix == "string" && // Valid item: run callback
        e(f, u))
          return !0;
      } catch {
      }
      Nn(i, s);
    }
  };
  let o = Ti(i);
  for (let u = o - 1; u >= 0; u--)
    r(u) || (u === o - 1 ? (o--, Si(i, o)) : Or[t].add(u));
}
function Lr() {
  if (!Xi) {
    Ou(!0);
    for (const t in ei)
      Mr(t, (e) => {
        const i = e.data, l = e.provider, n = i.prefix, r = et(
          l,
          n
        );
        if (!Ui(r, i).length)
          return !1;
        const o = i.lastModified || -1;
        return r.lastModifiedCached = r.lastModifiedCached ? Math.min(r.lastModifiedCached, o) : o, !0;
      });
  }
}
function Pu(t, e) {
  const i = t.lastModifiedCached;
  if (
    // Matches or newer
    i && i >= e
  )
    return i === e;
  if (t.lastModifiedCached = e, i)
    for (const l in ei)
      Mr(l, (n) => {
        const r = n.data;
        return n.provider !== t.provider || r.prefix !== t.prefix || r.lastModified === e;
      });
  return !0;
}
function Mu(t, e) {
  Xi || Lr();
  function i(l) {
    let n;
    if (!ei[l] || !(n = Pr(l)))
      return;
    const r = Or[l];
    let o;
    if (r.size)
      r.delete(o = Array.from(r).shift());
    else if (o = Ti(n), !Si(n, o + 1))
      return;
    const u = {
      cached: Math.floor(Date.now() / Ar),
      provider: t.provider,
      data: e
    };
    return qi(
      n,
      Tt + o.toString(),
      JSON.stringify(u)
    );
  }
  e.lastModified && !Pu(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e), delete e.not_found), i("local") || i("session"));
}
function zn() {
}
function Lu(t) {
  t.iconsLoaderFlag || (t.iconsLoaderFlag = !0, setTimeout(() => {
    t.iconsLoaderFlag = !1, yu(t);
  }));
}
function Nu(t, e) {
  t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e, t.iconsQueueFlag || (t.iconsQueueFlag = !0, setTimeout(() => {
    t.iconsQueueFlag = !1;
    const { provider: i, prefix: l } = t, n = t.iconsToLoad;
    delete t.iconsToLoad;
    let r;
    if (!n || !(r = wi(i)))
      return;
    r.prepare(i, l, n).forEach((u) => {
      Iu(i, u, (s) => {
        if (typeof s != "object")
          u.icons.forEach((a) => {
            t.missing.add(a);
          });
        else
          try {
            const a = Ui(
              t,
              s
            );
            if (!a.length)
              return;
            const f = t.pendingIcons;
            f && a.forEach((c) => {
              f.delete(c);
            }), Mu(t, s);
          } catch (a) {
            console.error(a);
          }
        Lu(t);
      });
    });
  }));
}
const zu = (t, e) => {
  const i = Cu(t, !0, wr()), l = pu(i);
  if (!l.pending.length) {
    let s = !0;
    return e && setTimeout(() => {
      s && e(
        l.loaded,
        l.missing,
        l.pending,
        zn
      );
    }), () => {
      s = !1;
    };
  }
  const n = /* @__PURE__ */ Object.create(null), r = [];
  let o, u;
  return l.pending.forEach((s) => {
    const { provider: a, prefix: f } = s;
    if (f === u && a === o)
      return;
    o = a, u = f, r.push(et(a, f));
    const c = n[a] || (n[a] = /* @__PURE__ */ Object.create(null));
    c[f] || (c[f] = []);
  }), l.pending.forEach((s) => {
    const { provider: a, prefix: f, name: c } = s, d = et(a, f), k = d.pendingIcons || (d.pendingIcons = /* @__PURE__ */ new Set());
    k.has(c) || (k.add(c), n[a][f].push(c));
  }), r.forEach((s) => {
    const { provider: a, prefix: f } = s;
    n[a][f].length && Nu(s, n[a][f]);
  }), e ? wu(e, l, r) : zn;
};
function Ru(t, e) {
  const i = {
    ...t
  };
  for (const l in e) {
    const n = e[l], r = typeof n;
    l in Cr ? (n === null || n && (r === "string" || r === "number")) && (i[l] = n) : r === typeof i[l] && (i[l] = l === "rotate" ? n % 4 : n);
  }
  return i;
}
const Du = /[\s,]+/;
function Bu(t, e) {
  e.split(Du).forEach((i) => {
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
function Fu(t, e = 0) {
  const i = t.replace(/^-?[0-9.]*/, "");
  function l(n) {
    for (; n < 0; )
      n += 4;
    return n % 4;
  }
  if (i === "") {
    const n = parseInt(t);
    return isNaN(n) ? 0 : l(n);
  } else if (i !== t) {
    let n = 0;
    switch (i) {
      case "%":
        n = 25;
        break;
      case "deg":
        n = 90;
    }
    if (n) {
      let r = parseFloat(t.slice(0, t.length - i.length));
      return isNaN(r) ? 0 : (r = r / n, r % 1 === 0 ? l(r) : 0);
    }
  }
  return e;
}
function ju(t, e) {
  let i = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const l in e)
    i += " " + l + '="' + e[l] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + i + ">" + t + "</svg>";
}
function Wu(t) {
  return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function Uu(t) {
  return "data:image/svg+xml," + Wu(t);
}
function Gu(t) {
  return 'url("' + Uu(t) + '")';
}
const Rn = {
  ...Sr,
  inline: !1
}, Hu = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": !0,
  role: "img"
}, Vu = {
  display: "inline-block"
}, Ei = {
  "background-color": "currentColor"
}, Nr = {
  "background-color": "transparent"
}, Dn = {
  image: "var(--svg)",
  repeat: "no-repeat",
  size: "100% 100%"
}, Bn = {
  "-webkit-mask": Ei,
  mask: Ei,
  background: Nr
};
for (const t in Bn) {
  const e = Bn[t];
  for (const i in Dn)
    e[t + "-" + i] = Dn[i];
}
function qu(t) {
  return t + (t.match(/^[-0-9.]+$/) ? "px" : "");
}
function Xu(t, e) {
  const i = Ru(Rn, e), l = e.mode || "svg", n = l === "svg" ? { ...Hu } : {};
  t.body.indexOf("xlink:") === -1 && delete n["xmlns:xlink"];
  let r = typeof e.style == "string" ? e.style : "";
  for (let p in e) {
    const C = e[p];
    if (C !== void 0)
      switch (p) {
        case "icon":
        case "style":
        case "onLoad":
        case "mode":
          break;
        case "inline":
        case "hFlip":
        case "vFlip":
          i[p] = C === !0 || C === "true" || C === 1;
          break;
        case "flip":
          typeof C == "string" && Bu(i, C);
          break;
        case "color":
          r = r + (r.length > 0 && r.trim().slice(-1) !== ";" ? ";" : "") + "color: " + C + "; ";
          break;
        case "rotate":
          typeof C == "string" ? i[p] = Fu(C) : typeof C == "number" && (i[p] = C);
          break;
        case "ariaHidden":
        case "aria-hidden":
          C !== !0 && C !== "true" && delete n["aria-hidden"];
          break;
        default:
          if (p.slice(0, 3) === "on:")
            break;
          Rn[p] === void 0 && (n[p] = C);
      }
  }
  const o = ru(t, i), u = o.attributes;
  if (i.inline && (r = "vertical-align: -0.125em; " + r), l === "svg") {
    Object.assign(n, u), r !== "" && (n.style = r);
    let p = 0, C = e.id;
    return typeof C == "string" && (C = C.replace(/-/g, "_")), {
      svg: !0,
      attributes: n,
      body: au(o.body, C ? () => C + "ID" + p++ : "iconifySvelte")
    };
  }
  const { body: s, width: a, height: f } = t, c = l === "mask" || (l === "bg" ? !1 : s.indexOf("currentColor") !== -1), d = ju(s, {
    ...u,
    width: a + "",
    height: f + ""
  }), g = {
    "--svg": Gu(d)
  }, m = (p) => {
    const C = u[p];
    C && (g[p] = qu(C));
  };
  m("width"), m("height"), Object.assign(g, Vu, c ? Ei : Nr);
  let b = "";
  for (const p in g)
    b += p + ": " + g[p] + ";";
  return n.style = b + r, {
    svg: !1,
    attributes: n
  };
}
wr(!0);
fu("", _u);
if (typeof document < "u" && typeof window < "u") {
  Lr();
  const t = window;
  if (t.IconifyPreload !== void 0) {
    const e = t.IconifyPreload, i = "Invalid IconifyPreload syntax.";
    typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach((l) => {
      try {
        // Check if item is an object and not null/array
        (typeof l != "object" || l === null || l instanceof Array || // Check for 'icons' and 'prefix'
        typeof l.icons != "object" || typeof l.prefix != "string" || // Add icon set
        !tu(l)) && console.error(i);
      } catch {
        console.error(i);
      }
    });
  }
  if (t.IconifyProviders !== void 0) {
    const e = t.IconifyProviders;
    if (typeof e == "object" && e !== null)
      for (let i in e) {
        const l = "IconifyProviders[" + i + "] is invalid.";
        try {
          const n = e[i];
          if (typeof n != "object" || !n || n.resources === void 0)
            continue;
          cu(i, n) || console.error(l);
        } catch {
          console.error(l);
        }
      }
  }
}
function Qu(t, e, i, l, n) {
  function r() {
    e.loading && (e.loading.abort(), e.loading = null);
  }
  if (typeof t == "object" && t !== null && typeof t.body == "string")
    return e.name = "", r(), { data: { ...$t, ...t } };
  let o;
  if (typeof t != "string" || (o = xt(t, !1, !0)) === null)
    return r(), null;
  const u = $s(o);
  if (!u)
    return i && (!e.loading || e.loading.name !== t) && (r(), e.name = "", e.loading = {
      name: t,
      abort: zu([o], l)
    }), null;
  r(), e.name !== t && (e.name = t, n && !e.destroyed && n(t));
  const s = ["iconify"];
  return o.prefix !== "" && s.push("iconify--" + o.prefix), o.provider !== "" && s.push("iconify--" + o.provider), { data: u, classes: s };
}
function Ku(t, e) {
  return t ? Xu({
    ...$t,
    ...t
  }, e) : null;
}
function Fn(t) {
  let e;
  function i(r, o) {
    return (
      /*data*/
      r[0].svg ? Ju : Yu
    );
  }
  let l = i(t), n = l(t);
  return {
    c() {
      n.c(), e = ue();
    },
    m(r, o) {
      n.m(r, o), T(r, e, o);
    },
    p(r, o) {
      l === (l = i(r)) && n ? n.p(r, o) : (n.d(1), n = l(r), n && (n.c(), n.m(e.parentNode, e)));
    },
    d(r) {
      r && S(e), n.d(r);
    }
  };
}
function Yu(t) {
  let e, i = [
    /*data*/
    t[0].attributes
  ], l = {};
  for (let n = 0; n < i.length; n += 1)
    l = N(l, i[n]);
  return {
    c() {
      e = L("span"), ae(e, l);
    },
    m(n, r) {
      T(n, e, r);
    },
    p(n, r) {
      ae(e, l = fe(i, [r & /*data*/
      1 && /*data*/
      n[0].attributes]));
    },
    d(n) {
      n && S(e);
    }
  };
}
function Ju(t) {
  let e, i = (
    /*data*/
    t[0].body + ""
  ), l = [
    /*data*/
    t[0].attributes
  ], n = {};
  for (let r = 0; r < l.length; r += 1)
    n = N(n, l[r]);
  return {
    c() {
      e = pe("svg"), Wt(e, n);
    },
    m(r, o) {
      T(r, e, o), e.innerHTML = i;
    },
    p(r, o) {
      o & /*data*/
      1 && i !== (i = /*data*/
      r[0].body + "") && (e.innerHTML = i), Wt(e, n = fe(l, [o & /*data*/
      1 && /*data*/
      r[0].attributes]));
    },
    d(r) {
      r && S(e);
    }
  };
}
function Zu(t) {
  let e, i = (
    /*data*/
    t[0] && Fn(t)
  );
  return {
    c() {
      i && i.c(), e = ue();
    },
    m(l, n) {
      i && i.m(l, n), T(l, e, n);
    },
    p(l, [n]) {
      /*data*/
      l[0] ? i ? i.p(l, n) : (i = Fn(l), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null);
    },
    i: oe,
    o: oe,
    d(l) {
      l && S(e), i && i.d(l);
    }
  };
}
function xu(t, e, i) {
  const l = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: !1
  };
  let n = !1, r = 0, o;
  const u = (a) => {
    typeof e.onLoad == "function" && e.onLoad(a), He()("load", { icon: a });
  };
  function s() {
    i(3, r++, r);
  }
  return Je(() => {
    i(2, n = !0);
  }), ho(() => {
    i(1, l.destroyed = !0, l), l.loading && (l.loading.abort(), i(1, l.loading = null, l));
  }), t.$$set = (a) => {
    i(6, e = N(N({}, e), B(a)));
  }, t.$$.update = () => {
    {
      const a = Qu(e.icon, l, n, s, u);
      i(0, o = a ? Ku(a.data, e) : null), o && a.classes && i(
        0,
        o.attributes.class = (typeof e.class == "string" ? e.class + " " : "") + a.classes.join(" "),
        o
      );
    }
  }, e = B(e), [o, l, n, r];
}
class $u extends ie {
  constructor(e) {
    super(), te(this, e, xu, Zu, V, {});
  }
}
function ea(t) {
  let e, i;
  return e = new $u({
    props: {
      class: A(
        "uikit-h-full uikit-w-8 uikit-text-white uikit-bg-black uikit-opacity-30",
        /*className*/
        t[1]
      ),
      icon: (
        /*defaultname*/
        t[0]
      )
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*className*/
      2 && (r.class = A(
        "uikit-h-full uikit-w-8 uikit-text-white uikit-bg-black uikit-opacity-30",
        /*className*/
        l[1]
      )), n & /*defaultname*/
      1 && (r.icon = /*defaultname*/
      l[0]), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function ta(t) {
  let e;
  return {
    c() {
      e = L("div"), h(
        e,
        "class",
        /*className*/
        t[1]
      );
    },
    m(i, l) {
      T(i, e, l), t[6](e);
    },
    p(i, l) {
      l & /*className*/
      2 && h(
        e,
        "class",
        /*className*/
        i[1]
      );
    },
    i: oe,
    o: oe,
    d(i) {
      i && S(e), t[6](null);
    }
  };
}
function ia(t) {
  let e, i, l, n;
  const r = [ta, ea], o = [];
  function u(s, a) {
    return (
      /*uikit*/
      s[2] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = r[e](t), {
    c() {
      i.c(), l = ue();
    },
    m(s, a) {
      o[e].m(s, a), T(s, l, a), n = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (le(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), re(), i = o[e], i ? i.p(s, a) : (i = o[e] = r[e](s), i.c()), _(i, 1), i.m(l.parentNode, l));
    },
    i(s) {
      n || (_(i), n = !0);
    },
    o(s) {
      y(i), n = !1;
    },
    d(s) {
      s && S(l), o[e].d(s);
    }
  };
}
function na(t, e, i) {
  let { name: l = "" } = e, { defaultname: n = "eos-icons:loading" } = e, { className: r = "" } = e, { uikit: o = !0 } = e, { size: u = "sm" } = e, s;
  function a(f) {
    Se[f ? "unshift" : "push"](() => {
      s = f, i(3, s);
    });
  }
  return t.$$set = (f) => {
    "name" in f && i(4, l = f.name), "defaultname" in f && i(0, n = f.defaultname), "className" in f && i(1, r = f.className), "uikit" in f && i(2, o = f.uikit), "size" in f && i(5, u = f.size);
  }, t.$$.update = () => {
    t.$$.dirty & /*icondom, name, size*/
    56 && window && window.uikit_icons && s && window.uikit_icons.FnIcon(s, l, { size: u });
  }, [n, r, o, s, l, u, a];
}
class gt extends ie {
  constructor(e) {
    super(), te(this, e, na, ia, V, {
      name: 4,
      defaultname: 0,
      className: 1,
      uikit: 2,
      size: 5
    });
  }
}
function la(t) {
  let e, i, l, n;
  return {
    c() {
      e = L("span"), i = ke(
        /*mode*/
        t[1]
      ), l = G(), n = ke(
        /*info*/
        t[2]
      ), h(e, "class", "uikit-font-medium");
    },
    m(r, o) {
      T(r, e, o), R(e, i), T(r, l, o), T(r, n, o);
    },
    p(r, o) {
      o & /*mode*/
      2 && be(
        i,
        /*mode*/
        r[1]
      ), o & /*info*/
      4 && be(
        n,
        /*info*/
        r[2]
      );
    },
    d(r) {
      r && (S(e), S(l), S(n));
    }
  };
}
function ra(t) {
  let e, i;
  return e = new gt({
    props: {
      name: "InfoCircleSolid",
      slot: "icon",
      className: "uikit-w-4 uikit-h-4"
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p: oe,
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function oa(t) {
  let e, i;
  return e = new Xs({
    props: {
      open: (
        /*open*/
        t[0]
      ),
      border: !0,
      dismissable: !0,
      color: (
        /*modeColor*/
        t[3].get(
          /*mode*/
          t[1]
        )
      ),
      $$slots: {
        icon: [ra],
        default: [la]
      },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "onEnd",
    /*onEnd_handler*/
    t[6]
  ), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, [n]) {
      const r = {};
      n & /*open*/
      1 && (r.open = /*open*/
      l[0]), n & /*mode*/
      2 && (r.color = /*modeColor*/
      l[3].get(
        /*mode*/
        l[1]
      )), n & /*$$scope, info, mode*/
      134 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function sa(t, e, i) {
  let { mode: l = "info" } = e, { info: n = "a default message" } = e, { open: r = !0 } = e, { duration: o = 0 } = e, u = /* @__PURE__ */ new Map([
    ["debug", ""],
    ["info", "blue"],
    ["success", "green"],
    ["warn", "yellow"],
    ["danger", "red"],
    ["dark", "dark"]
  ]);
  const s = He();
  Je(() => {
    o > 0 && setTimeout(
      () => {
        i(0, r = !1);
      },
      o
    );
  });
  const a = () => {
    s("onEnd");
  };
  return t.$$set = (f) => {
    "mode" in f && i(1, l = f.mode), "info" in f && i(2, n = f.info), "open" in f && i(0, r = f.open), "duration" in f && i(5, o = f.duration);
  }, [r, l, n, u, s, o, a];
}
class ua extends ie {
  constructor(e) {
    super(), te(this, e, sa, oa, V, { mode: 1, info: 2, open: 0, duration: 5 });
  }
}
const jn = "uikit_msg_panel";
let fi = 0;
const d0 = (t, e, i) => {
  fi += 1;
  let l = window.document.getElementById(jn);
  l || (l = window.document.createElement("div"), l.id = jn, l.style.position = "absolute", l.style.top = "5px", l.style.right = "5px", l.style.display = "flex", l.style.flexDirection = "column", l.style.rowGap = "10px", l.style.zIndex = "100", document.body.appendChild(l)), t || (t = window.document.createElement("div"), l.appendChild(t));
  const n = new ua({
    target: t,
    props: {
      ...e
    }
  });
  if (n.$on("onEnd", () => {
    n.$destroy(), fi -= 1, fi == 0 && document.body.removeChild(l);
  }), i)
    for (let r in i) {
      let o = i[r];
      n.$on(r, (u) => {
        o(u.detail);
      });
    }
  return n;
};
function aa(t) {
  let e, i;
  const l = (
    /*#slots*/
    t[8].default
  ), n = Y(
    l,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = L("div"), n && n.c(), h(
        e,
        "class",
        /*dotClass*/
        t[0]
      );
    },
    m(r, o) {
      T(r, e, o), n && n.m(e, null), i = !0;
    },
    p(r, [o]) {
      n && n.p && (!i || o & /*$$scope*/
      128) && Z(
        n,
        l,
        r,
        /*$$scope*/
        r[7],
        i ? J(
          l,
          /*$$scope*/
          r[7],
          o,
          null
        ) : x(
          /*$$scope*/
          r[7]
        ),
        null
      ), (!i || o & /*dotClass*/
      1) && h(
        e,
        "class",
        /*dotClass*/
        r[0]
      );
    },
    i(r) {
      i || (_(n, r), i = !0);
    },
    o(r) {
      y(n, r), i = !1;
    },
    d(r) {
      r && S(e), n && n.d(r);
    }
  };
}
function fa(t, e, i) {
  let { $$slots: l = {}, $$scope: n } = e;
  const r = Ye(l);
  let { color: o = "gray" } = e, { rounded: u = !1 } = e, { size: s = "md" } = e, { border: a = !1 } = e, { placement: f = void 0 } = e, { offset: c = !0 } = e;
  const d = {
    gray: "uikit-bg-gray-200",
    dark: "uikit-bg-gray-900 dark:uikit-bg-gray-700",
    blue: "uikit-bg-blue-600",
    orange: "uikit-bg-orange-600",
    green: "uikit-bg-green-500",
    red: "uikit-bg-red-500",
    purple: "uikit-bg-purple-500",
    indigo: "uikit-bg-indigo-500",
    yellow: "uikit-bg-yellow-300",
    teal: "uikit-bg-teal-500",
    none: ""
  }, k = {
    xs: "uikit-w-2 uikit-h-2",
    sm: "uikit-w-2.5 uikit-h-2.5",
    md: "uikit-w-3 uikit-h-3",
    lg: "uikit-w-3.5 uikit-h-3.5",
    xl: "uikit-w-6 uikit-h-6"
  }, g = {
    // top
    "top-left": "uikit-top-0 uikit-start-0",
    "top-center": "uikit-top-0 uikit-start-1/2 -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
    "top-right": "uikit-top-0 uikit-end-0",
    // center
    "center-left": "uikit-top-1/2 -uikit-translate-y-1/2 uikit-start-0",
    center: "top-1/2 -uikit-translate-y-1/2 uikit-start-1/2 -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
    "center-right": "uikit-top-1/2 -uikit-translate-y-1/2 uikit-end-0",
    // bottom
    "bottom-left": "uikit-bottom-0 uikit-start-0",
    "bottom-center": "uikit-bottom-0 uikit-start-1/2 -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
    "bottom-right": "uikit-bottom-0 uikit-end-0"
  }, m = {
    // top
    "top-left": "-uikit-translate-x-1/3 rtl:uikit-translate-x-1/3 -uikit-translate-y-1/3",
    "top-center": "-uikit-translate-y-1/3",
    "top-right": "uikit-translate-x-1/3 rtl:-uikit-translate-x-1/3 -uikit-translate-y-1/3",
    // center
    "center-left": "-uikit-translate-x-1/3 rtl:uikit-translate-x-1/3",
    center: "",
    "center-right": "uikit-translate-x-1/3 rtl:-uikit-translate-x-1/3",
    // bottom
    "bottom-left": "-uikit-translate-x-1/3 rtl:uikit-translate-x-1/3 uikit-translate-y-1/3",
    "bottom-center": "uikit-translate-y-1/3",
    "bottom-right": "uikit-translate-x-1/3 rtl:-uikit-translate-x-1/3 uikit-translate-y-1/3"
  };
  let b;
  return t.$$set = (p) => {
    i(13, e = N(N({}, e), B(p))), "color" in p && i(1, o = p.color), "rounded" in p && i(2, u = p.rounded), "size" in p && i(3, s = p.size), "border" in p && i(4, a = p.border), "placement" in p && i(5, f = p.placement), "offset" in p && i(6, c = p.offset), "$$scope" in p && i(7, n = p.$$scope);
  }, t.$$.update = () => {
    i(0, b = A("uikit-flex-shrink-0", u ? "uikit-rounded" : "uikit-rounded-full", a && "uikit-border-2 uikit-border-white dark:uikit-border-gray-800", k[s], d[o], r.default && "uikit-inline-flex uikit-items-center uikit-justify-center", f && "uikit-absolute " + g[f], f && c && m[f], e.class));
  }, e = B(e), [b, o, u, s, a, f, c, n, l];
}
class Qi extends ie {
  constructor(e) {
    super(), te(this, e, fa, aa, V, {
      color: 1,
      rounded: 2,
      size: 3,
      border: 4,
      placement: 5,
      offset: 6
    });
  }
}
function ca(t) {
  let e, i, l = [
    { alt: (
      /*alt*/
      t[4]
    ) },
    { src: i = /*src*/
    t[1] },
    /*$$restProps*/
    t[7],
    { class: (
      /*avatarClass*/
      t[5]
    ) }
  ], n = {};
  for (let r = 0; r < l.length; r += 1)
    n = N(n, l[r]);
  return {
    c() {
      e = L("img"), ae(e, n);
    },
    m(r, o) {
      T(r, e, o);
    },
    p(r, o) {
      ae(e, n = fe(l, [
        o & /*alt*/
        16 && { alt: (
          /*alt*/
          r[4]
        ) },
        o & /*src*/
        2 && !vt(e.src, i = /*src*/
        r[1]) && { src: i },
        o & /*$$restProps*/
        128 && /*$$restProps*/
        r[7],
        o & /*avatarClass*/
        32 && { class: (
          /*avatarClass*/
          r[5]
        ) }
      ]));
    },
    i: oe,
    o: oe,
    d(r) {
      r && S(e);
    }
  };
}
function da(t) {
  let e = (
    /*href*/
    t[2] ? "a" : "div"
  ), i, l, n = (
    /*href*/
    (t[2] ? "a" : "div") && ci(t)
  );
  return {
    c() {
      n && n.c(), i = ue();
    },
    m(r, o) {
      n && n.m(r, o), T(r, i, o), l = !0;
    },
    p(r, o) {
      /*href*/
      r[2], e ? V(
        e,
        /*href*/
        r[2] ? "a" : "div"
      ) ? (n.d(1), n = ci(r), e = /*href*/
      r[2] ? "a" : "div", n.c(), n.m(i.parentNode, i)) : n.p(r, o) : (n = ci(r), e = /*href*/
      r[2] ? "a" : "div", n.c(), n.m(i.parentNode, i));
    },
    i(r) {
      l || (_(n, r), l = !0);
    },
    o(r) {
      y(n, r), l = !1;
    },
    d(r) {
      r && S(i), n && n.d(r);
    }
  };
}
function ka(t) {
  let e;
  const i = (
    /*#slots*/
    t[12].default
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[11],
    null
  ), n = l || ma(t);
  return {
    c() {
      n && n.c();
    },
    m(r, o) {
      n && n.m(r, o), e = !0;
    },
    p(r, o) {
      l ? l.p && (!e || o & /*$$scope*/
      2048) && Z(
        l,
        i,
        r,
        /*$$scope*/
        r[11],
        e ? J(
          i,
          /*$$scope*/
          r[11],
          o,
          null
        ) : x(
          /*$$scope*/
          r[11]
        ),
        null
      ) : n && n.p && (!e || o & /*rounded*/
      8) && n.p(r, e ? o : -1);
    },
    i(r) {
      e || (_(n, r), e = !0);
    },
    o(r) {
      y(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function ga(t) {
  let e, i, l;
  return {
    c() {
      e = L("img"), h(
        e,
        "alt",
        /*alt*/
        t[4]
      ), vt(e.src, i = /*src*/
      t[1]) || h(e, "src", i), h(e, "class", l = /*rounded*/
      t[3] ? "uikit-rounded-full" : "uikit-rounded");
    },
    m(n, r) {
      T(n, e, r);
    },
    p(n, r) {
      r & /*alt*/
      16 && h(
        e,
        "alt",
        /*alt*/
        n[4]
      ), r & /*src*/
      2 && !vt(e.src, i = /*src*/
      n[1]) && h(e, "src", i), r & /*rounded*/
      8 && l !== (l = /*rounded*/
      n[3] ? "uikit-rounded-full" : "uikit-rounded") && h(e, "class", l);
    },
    i: oe,
    o: oe,
    d(n) {
      n && S(e);
    }
  };
}
function ma(t) {
  let e, i, l;
  return {
    c() {
      e = pe("svg"), i = pe("path"), h(i, "fill-rule", "evenodd"), h(i, "d", "M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"), h(i, "clip-rule", "evenodd"), h(e, "class", l = "uikit-w-full uikit-h-full " + /*rounded*/
      (t[3] ? "uikit-rounded-full" : "uikit-rounded")), h(e, "fill", "currentColor"), h(e, "viewBox", "0 0 16 16"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, r) {
      T(n, e, r), R(e, i);
    },
    p(n, r) {
      r & /*rounded*/
      8 && l !== (l = "uikit-w-full uikit-h-full " + /*rounded*/
      (n[3] ? "uikit-rounded-full" : "uikit-rounded")) && h(e, "class", l);
    },
    d(n) {
      n && S(e);
    }
  };
}
function Wn(t) {
  let e, i;
  const l = [
    { border: !0 },
    { offset: (
      /*rounded*/
      t[3]
    ) },
    /*dot*/
    t[0]
  ];
  let n = {};
  for (let r = 0; r < l.length; r += 1)
    n = N(n, l[r]);
  return e = new Qi({ props: n }), {
    c() {
      K(e.$$.fragment);
    },
    m(r, o) {
      X(e, r, o), i = !0;
    },
    p(r, o) {
      const u = o & /*rounded, dot*/
      9 ? fe(l, [
        l[0],
        o & /*rounded*/
        8 && { offset: (
          /*rounded*/
          r[3]
        ) },
        o & /*dot*/
        1 && Ae(
          /*dot*/
          r[0]
        )
      ]) : {};
      e.$set(u);
    },
    i(r) {
      i || (_(e.$$.fragment, r), i = !0);
    },
    o(r) {
      y(e.$$.fragment, r), i = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function ci(t) {
  let e, i, l, n, r, o;
  const u = [ga, ka], s = [];
  function a(k, g) {
    return (
      /*src*/
      k[1] ? 0 : 1
    );
  }
  i = a(t), l = s[i] = u[i](t);
  let f = (
    /*dot*/
    t[0] && Wn(t)
  ), c = [
    { href: (
      /*href*/
      t[2]
    ) },
    /*$$restProps*/
    t[7],
    {
      class: r = "uikit-relative uikit-flex uikit-justify-center uikit-items-center " + /*avatarClass*/
      t[5]
    }
  ], d = {};
  for (let k = 0; k < c.length; k += 1)
    d = N(d, c[k]);
  return {
    c() {
      e = L(
        /*href*/
        t[2] ? "a" : "div"
      ), l.c(), n = G(), f && f.c(), Fe(
        /*href*/
        t[2] ? "a" : "div"
      )(e, d);
    },
    m(k, g) {
      T(k, e, g), s[i].m(e, null), R(e, n), f && f.m(e, null), o = !0;
    },
    p(k, g) {
      let m = i;
      i = a(k), i === m ? s[i].p(k, g) : (le(), y(s[m], 1, 1, () => {
        s[m] = null;
      }), re(), l = s[i], l ? l.p(k, g) : (l = s[i] = u[i](k), l.c()), _(l, 1), l.m(e, n)), /*dot*/
      k[0] ? f ? (f.p(k, g), g & /*dot*/
      1 && _(f, 1)) : (f = Wn(k), f.c(), _(f, 1), f.m(e, null)) : f && (le(), y(f, 1, 1, () => {
        f = null;
      }), re()), Fe(
        /*href*/
        k[2] ? "a" : "div"
      )(e, d = fe(c, [
        (!o || g & /*href*/
        4) && { href: (
          /*href*/
          k[2]
        ) },
        g & /*$$restProps*/
        128 && /*$$restProps*/
        k[7],
        (!o || g & /*avatarClass*/
        32 && r !== (r = "uikit-relative uikit-flex uikit-justify-center uikit-items-center " + /*avatarClass*/
        k[5])) && { class: r }
      ]));
    },
    i(k) {
      o || (_(l), _(f), o = !0);
    },
    o(k) {
      y(l), y(f), o = !1;
    },
    d(k) {
      k && S(e), s[i].d(), f && f.d();
    }
  };
}
function ha(t) {
  let e, i, l, n;
  const r = [da, ca], o = [];
  function u(s, a) {
    return !/*src*/
    s[1] || /*href*/
    s[2] || /*$$slots*/
    s[6].default || /*dot*/
    s[0] ? 0 : 1;
  }
  return e = u(t), i = o[e] = r[e](t), {
    c() {
      i.c(), l = ue();
    },
    m(s, a) {
      o[e].m(s, a), T(s, l, a), n = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (le(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), re(), i = o[e], i ? i.p(s, a) : (i = o[e] = r[e](s), i.c()), _(i, 1), i.m(l.parentNode, l));
    },
    i(s) {
      n || (_(i), n = !0);
    },
    o(s) {
      y(i), n = !1;
    },
    d(s) {
      s && S(l), o[e].d(s);
    }
  };
}
function ba(t, e, i) {
  const l = ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e;
  const u = Ye(r);
  let { src: s = "" } = e, { href: a = void 0 } = e, { rounded: f = !1 } = e, { border: c = !1 } = e, { stacked: d = !1 } = e, { dot: k = void 0 } = e, { alt: g = "" } = e, { size: m = "md" } = e;
  const b = {
    xs: "uikit-w-6 uikit-h-6",
    sm: "uikit-w-8 uikit-h-8",
    md: "uikit-w-10 uikit-h-10",
    lg: "uikit-w-20 uikit-h-20",
    xl: "uikit-w-36 uikit-h-36",
    none: ""
  };
  let p;
  return t.$$set = (C) => {
    i(14, e = N(N({}, e), B(C))), i(7, n = ne(e, l)), "src" in C && i(1, s = C.src), "href" in C && i(2, a = C.href), "rounded" in C && i(3, f = C.rounded), "border" in C && i(8, c = C.border), "stacked" in C && i(9, d = C.stacked), "dot" in C && i(0, k = C.dot), "alt" in C && i(4, g = C.alt), "size" in C && i(10, m = C.size), "$$scope" in C && i(11, o = C.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*dot*/
    1 && i(0, k = k && {
      placement: "top-right",
      color: "gray",
      size: "lg",
      ...k
    }), i(5, p = A(f ? "uikit-rounded-full" : "uikit-rounded", c && "uikit-p-1 uikit-ring-2 uikit-ring-gray-300 dark:uikit-ring-gray-500", b[m], d && "uikit-border-2 -uikit-ms-4 uikit-border-white dark:uikit-border-gray-800", "uikit-bg-gray-100 dark:uikit-bg-gray-600 uikit-text-gray-600 dark:uikit-text-gray-300", e.class));
  }, e = B(e), [
    k,
    s,
    a,
    f,
    g,
    p,
    u,
    n,
    c,
    d,
    m,
    o,
    r
  ];
}
class zr extends ie {
  constructor(e) {
    super(), te(this, e, ba, ha, V, {
      src: 1,
      href: 2,
      rounded: 3,
      border: 8,
      stacked: 9,
      dot: 0,
      alt: 4,
      size: 10
    });
  }
}
function _a(t) {
  let e, i;
  const l = [
    /*$$props*/
    t[2]
  ];
  let n = {};
  for (let r = 0; r < l.length; r += 1)
    n = N(n, l[r]);
  return e = new zr({ props: n }), {
    c() {
      K(e.$$.fragment);
    },
    m(r, o) {
      X(e, r, o), i = !0;
    },
    p(r, o) {
      const u = o & /*$$props*/
      4 ? fe(l, [Ae(
        /*$$props*/
        r[2]
      )]) : {};
      e.$set(u);
    },
    i(r) {
      i || (_(e.$$.fragment, r), i = !0);
    },
    o(r) {
      y(e.$$.fragment, r), i = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function pa(t) {
  let e, i;
  const l = [
    /*$$props*/
    t[2]
  ];
  let n = {
    $$slots: { default: [ya] },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < l.length; r += 1)
    n = N(n, l[r]);
  return e = new zr({ props: n }), {
    c() {
      K(e.$$.fragment);
    },
    m(r, o) {
      X(e, r, o), i = !0;
    },
    p(r, o) {
      const u = o & /*$$props*/
      4 ? fe(l, [Ae(
        /*$$props*/
        r[2]
      )]) : {};
      o & /*$$scope, domdefault*/
      34 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
    },
    i(r) {
      i || (_(e.$$.fragment, r), i = !0);
    },
    o(r) {
      y(e.$$.fragment, r), i = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function ya(t) {
  let e;
  return {
    c() {
      e = L("div");
    },
    m(i, l) {
      T(i, e, l), t[3](e);
    },
    p: oe,
    d(i) {
      i && S(e), t[3](null);
    }
  };
}
function va(t) {
  let e, i, l, n;
  const r = [pa, _a], o = [];
  function u(s, a) {
    return (
      /*slotdefault*/
      s[0] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = r[e](t), {
    c() {
      i.c(), l = ue();
    },
    m(s, a) {
      o[e].m(s, a), T(s, l, a), n = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (le(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), re(), i = o[e], i ? i.p(s, a) : (i = o[e] = r[e](s), i.c()), _(i, 1), i.m(l.parentNode, l));
    },
    i(s) {
      n || (_(i), n = !0);
    },
    o(s) {
      y(i), n = !1;
    },
    d(s) {
      s && S(l), o[e].d(s);
    }
  };
}
function wa(t, e, i) {
  let { slotdefault: l } = e, n;
  const r = () => {
    l && n && (i(1, n.innerHTML = "", n), n.appendChild(l));
  };
  Je(() => {
    r();
  });
  function o(u) {
    Se[u ? "unshift" : "push"](() => {
      n = u, i(1, n);
    });
  }
  return t.$$set = (u) => {
    i(2, e = N(N({}, e), B(u))), "slotdefault" in u && i(0, l = u.slotdefault);
  }, t.$$.update = () => {
    t.$$.dirty & /*slotdefault, domdefault*/
    3 && l && n && r();
  }, e = B(e), [l, n, e, o];
}
class Ca extends ie {
  constructor(e) {
    super(), te(this, e, wa, va, V, { slotdefault: 0 });
  }
}
const k0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new Ca({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
};
function Sa(t) {
  let e, i, l, n, r, o, u, s, a, f, c, d, k, g, m, b, p, C, w, v;
  const E = (
    /*#slots*/
    t[9].default
  ), O = Y(
    E,
    t,
    /*$$scope*/
    t[8],
    null
  );
  return {
    c() {
      e = L("div"), i = L("div"), n = G(), r = L("div"), u = G(), s = L("div"), f = G(), c = L("div"), k = G(), g = L("div"), b = G(), p = L("div"), O && O.c(), h(i, "class", l = A(
        /*top*/
        t[2],
        /*$$props*/
        t[7].classTop
      )), h(r, "class", o = A(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[7].classLeftTop
      )), h(s, "class", a = A(
        /*leftMid*/
        t[4],
        /*$$props*/
        t[7].classLeftMid
      )), h(c, "class", d = A(
        /*leftBot*/
        t[5],
        /*$$props*/
        t[7].classLeftBot
      )), h(g, "class", m = A(
        /*right*/
        t[6],
        /*$$props*/
        t[7].classRight
      )), h(p, "class", C = A(
        /*slot*/
        t[1],
        /*$$props*/
        t[7].classSlot
      )), h(e, "class", w = A(
        /*div*/
        t[0],
        /*$$props*/
        t[7].class
      ));
    },
    m(I, U) {
      T(I, e, U), R(e, i), R(e, n), R(e, r), R(e, u), R(e, s), R(e, f), R(e, c), R(e, k), R(e, g), R(e, b), R(e, p), O && O.m(p, null), v = !0;
    },
    p(I, [U]) {
      (!v || U & /*top, $$props*/
      132 && l !== (l = A(
        /*top*/
        I[2],
        /*$$props*/
        I[7].classTop
      ))) && h(i, "class", l), (!v || U & /*leftTop, $$props*/
      136 && o !== (o = A(
        /*leftTop*/
        I[3],
        /*$$props*/
        I[7].classLeftTop
      ))) && h(r, "class", o), (!v || U & /*leftMid, $$props*/
      144 && a !== (a = A(
        /*leftMid*/
        I[4],
        /*$$props*/
        I[7].classLeftMid
      ))) && h(s, "class", a), (!v || U & /*leftBot, $$props*/
      160 && d !== (d = A(
        /*leftBot*/
        I[5],
        /*$$props*/
        I[7].classLeftBot
      ))) && h(c, "class", d), (!v || U & /*right, $$props*/
      192 && m !== (m = A(
        /*right*/
        I[6],
        /*$$props*/
        I[7].classRight
      ))) && h(g, "class", m), O && O.p && (!v || U & /*$$scope*/
      256) && Z(
        O,
        E,
        I,
        /*$$scope*/
        I[8],
        v ? J(
          E,
          /*$$scope*/
          I[8],
          U,
          null
        ) : x(
          /*$$scope*/
          I[8]
        ),
        null
      ), (!v || U & /*slot, $$props*/
      130 && C !== (C = A(
        /*slot*/
        I[1],
        /*$$props*/
        I[7].classSlot
      ))) && h(p, "class", C), (!v || U & /*div, $$props*/
      129 && w !== (w = A(
        /*div*/
        I[0],
        /*$$props*/
        I[7].class
      ))) && h(e, "class", w);
    },
    i(I) {
      v || (_(O, I), v = !0);
    },
    o(I) {
      y(O, I), v = !1;
    },
    d(I) {
      I && S(e), O && O.d(I);
    }
  };
}
function Ta(t, e, i) {
  let { $$slots: l = {}, $$scope: n } = e, { div: r = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-xl uikit-h-[600px] uikit-w-[300px] uikit-shadow-xl" } = e, { slot: o = "uikit-rounded-xl uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: u = "uikit-w-[148px] uikit-h-[18px] uikit-bg-gray-800 uikit-top-0 uikit-rounded-b-[1rem] uikit-left-1/2 -uikit-translate-x-1/2 uikit-absolute" } = e, { leftTop: s = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftMid: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: f = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: c = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (d) => {
    i(7, e = N(N({}, e), B(d))), "div" in d && i(0, r = d.div), "slot" in d && i(1, o = d.slot), "top" in d && i(2, u = d.top), "leftTop" in d && i(3, s = d.leftTop), "leftMid" in d && i(4, a = d.leftMid), "leftBot" in d && i(5, f = d.leftBot), "right" in d && i(6, c = d.right), "$$scope" in d && i(8, n = d.$$scope);
  }, e = B(e), [r, o, u, s, a, f, c, e, n, l];
}
class Ea extends ie {
  constructor(e) {
    super(), te(this, e, Ta, Sa, V, {
      div: 0,
      slot: 1,
      top: 2,
      leftTop: 3,
      leftMid: 4,
      leftBot: 5,
      right: 6
    });
  }
}
function Ia(t) {
  let e, i, l, n, r, o, u, s, a, f, c, d, k, g, m, b, p;
  const C = (
    /*#slots*/
    t[8].default
  ), w = Y(
    C,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = L("div"), i = L("div"), n = G(), r = L("div"), u = G(), s = L("div"), f = G(), c = L("div"), k = G(), g = L("div"), w && w.c(), h(i, "class", l = A(
        /*top*/
        t[2],
        /*$$props*/
        t[6].classTop
      )), h(r, "class", o = A(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[6].classLeftTop
      )), h(s, "class", a = A(
        /*leftBot*/
        t[4],
        /*$$props*/
        t[6].classLeftBot
      )), h(c, "class", d = A(
        /*right*/
        t[5],
        /*$$props*/
        t[6].classRight
      )), h(g, "class", m = A(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(e, "class", b = A(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      ));
    },
    m(v, E) {
      T(v, e, E), R(e, i), R(e, n), R(e, r), R(e, u), R(e, s), R(e, f), R(e, c), R(e, k), R(e, g), w && w.m(g, null), p = !0;
    },
    p(v, [E]) {
      (!p || E & /*top, $$props*/
      68 && l !== (l = A(
        /*top*/
        v[2],
        /*$$props*/
        v[6].classTop
      ))) && h(i, "class", l), (!p || E & /*leftTop, $$props*/
      72 && o !== (o = A(
        /*leftTop*/
        v[3],
        /*$$props*/
        v[6].classLeftTop
      ))) && h(r, "class", o), (!p || E & /*leftBot, $$props*/
      80 && a !== (a = A(
        /*leftBot*/
        v[4],
        /*$$props*/
        v[6].classLeftBot
      ))) && h(s, "class", a), (!p || E & /*right, $$props*/
      96 && d !== (d = A(
        /*right*/
        v[5],
        /*$$props*/
        v[6].classRight
      ))) && h(c, "class", d), w && w.p && (!p || E & /*$$scope*/
      128) && Z(
        w,
        C,
        v,
        /*$$scope*/
        v[7],
        p ? J(
          C,
          /*$$scope*/
          v[7],
          E,
          null
        ) : x(
          /*$$scope*/
          v[7]
        ),
        null
      ), (!p || E & /*slot, $$props*/
      66 && m !== (m = A(
        /*slot*/
        v[1],
        /*$$props*/
        v[6].classSlot
      ))) && h(g, "class", m), (!p || E & /*div, $$props*/
      65 && b !== (b = A(
        /*div*/
        v[0],
        /*$$props*/
        v[6].class
      ))) && h(e, "class", b);
    },
    i(v) {
      p || (_(w, v), p = !0);
    },
    o(v) {
      y(w, v), p = !1;
    },
    d(v) {
      v && S(e), w && w.d(v);
    }
  };
}
function Aa(t, e, i) {
  let { $$slots: l = {}, $$scope: n } = e, { div: r = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[600px] uikit-w-[300px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: u = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftTop: s = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -luikit-eft-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = N(N({}, e), B(c))), "div" in c && i(0, r = c.div), "slot" in c && i(1, o = c.slot), "top" in c && i(2, u = c.top), "leftTop" in c && i(3, s = c.leftTop), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, n = c.$$scope);
  }, e = B(e), [r, o, u, s, a, f, e, n, l];
}
class Oa extends ie {
  constructor(e) {
    super(), te(this, e, Aa, Ia, V, {
      div: 0,
      slot: 1,
      top: 2,
      leftTop: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function Pa(t) {
  let e, i, l, n, r, o, u, s, a, f, c;
  const d = (
    /*#slots*/
    t[6].default
  ), k = Y(
    d,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      e = L("div"), i = L("div"), k && k.c(), r = G(), o = L("div"), s = G(), a = L("div"), h(i, "class", l = A(
        /*inner*/
        t[0],
        /*$$props*/
        t[4].classInner
      )), h(e, "class", n = A(
        /*div*/
        t[3],
        /*$$props*/
        t[4].class
      )), h(o, "class", u = A(
        /*bot*/
        t[1],
        /*$$props*/
        t[4].classBot
      )), h(a, "class", f = A(
        /*botUnder*/
        t[2],
        /*$$props*/
        t[4].classBotUnder
      ));
    },
    m(g, m) {
      T(g, e, m), R(e, i), k && k.m(i, null), T(g, r, m), T(g, o, m), T(g, s, m), T(g, a, m), c = !0;
    },
    p(g, [m]) {
      k && k.p && (!c || m & /*$$scope*/
      32) && Z(
        k,
        d,
        g,
        /*$$scope*/
        g[5],
        c ? J(
          d,
          /*$$scope*/
          g[5],
          m,
          null
        ) : x(
          /*$$scope*/
          g[5]
        ),
        null
      ), (!c || m & /*inner, $$props*/
      17 && l !== (l = A(
        /*inner*/
        g[0],
        /*$$props*/
        g[4].classInner
      ))) && h(i, "class", l), (!c || m & /*div, $$props*/
      24 && n !== (n = A(
        /*div*/
        g[3],
        /*$$props*/
        g[4].class
      ))) && h(e, "class", n), (!c || m & /*bot, $$props*/
      18 && u !== (u = A(
        /*bot*/
        g[1],
        /*$$props*/
        g[4].classBot
      ))) && h(o, "class", u), (!c || m & /*botUnder, $$props*/
      20 && f !== (f = A(
        /*botUnder*/
        g[2],
        /*$$props*/
        g[4].classBotUnder
      ))) && h(a, "class", f);
    },
    i(g) {
      c || (_(k, g), c = !0);
    },
    o(g) {
      y(k, g), c = !1;
    },
    d(g) {
      g && (S(e), S(r), S(o), S(s), S(a)), k && k.d(g);
    }
  };
}
function Ma(t, e, i) {
  let { $$slots: l = {}, $$scope: n } = e, { inner: r = "uikit-rounded-xl uikit-overflow-hidden uikit-h-[140px] md:uikit-h-[262px]" } = e, { bot: o = "uikit-relative uikit-mx-auto uikit-bg-gray-900 dark:uikit-bg-gray-700 uikit-rounded-b-xl uikit-h-[24px] uikit-max-w-[301px] md:uikit-h-[42px] md:uikit-max-w-[512px]" } = e, { botUnder: u = "uikit-relative uikit-mx-auto uikit-bg-gray-800 uikit-rounded-b-xl uikit-h-[55px] uikit-max-w-[83px] md:uikit-h-[95px] md:uikit-max-w-[142px]" } = e, { div: s = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[16px] uikit-rounded-t-xl uikit-h-[172px] uikit-max-w-[301px] md:uikit-h-[294px] md:uikit-max-w-[512px]" } = e;
  return t.$$set = (a) => {
    i(4, e = N(N({}, e), B(a))), "inner" in a && i(0, r = a.inner), "bot" in a && i(1, o = a.bot), "botUnder" in a && i(2, u = a.botUnder), "div" in a && i(3, s = a.div), "$$scope" in a && i(5, n = a.$$scope);
  }, e = B(e), [r, o, u, s, e, n, l];
}
class La extends ie {
  constructor(e) {
    super(), te(this, e, Ma, Pa, V, { inner: 0, bot: 1, botUnder: 2, div: 3 });
  }
}
function Na(t) {
  let e, i, l, n, r, o, u, s, a, f, c, d, k, g, m, b, p;
  const C = (
    /*#slots*/
    t[8].default
  ), w = Y(
    C,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = L("div"), i = L("div"), n = G(), r = L("div"), u = G(), s = L("div"), f = G(), c = L("div"), k = G(), g = L("div"), w && w.c(), h(i, "class", l = A(
        /*top*/
        t[2],
        /*$$props*/
        t[6].classTop
      )), h(r, "class", o = A(
        /*leftTop*/
        t[3],
        /*$$props*/
        t[6].classLeftTop
      )), h(s, "class", a = A(
        /*leftBot*/
        t[4],
        /*$$props*/
        t[6].classLeftBot
      )), h(c, "class", d = A(
        /*right*/
        t[5],
        /*$$props*/
        t[6].classRight
      )), h(g, "class", m = A(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(e, "class", b = A(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      ));
    },
    m(v, E) {
      T(v, e, E), R(e, i), R(e, n), R(e, r), R(e, u), R(e, s), R(e, f), R(e, c), R(e, k), R(e, g), w && w.m(g, null), p = !0;
    },
    p(v, [E]) {
      (!p || E & /*top, $$props*/
      68 && l !== (l = A(
        /*top*/
        v[2],
        /*$$props*/
        v[6].classTop
      ))) && h(i, "class", l), (!p || E & /*leftTop, $$props*/
      72 && o !== (o = A(
        /*leftTop*/
        v[3],
        /*$$props*/
        v[6].classLeftTop
      ))) && h(r, "class", o), (!p || E & /*leftBot, $$props*/
      80 && a !== (a = A(
        /*leftBot*/
        v[4],
        /*$$props*/
        v[6].classLeftBot
      ))) && h(s, "class", a), (!p || E & /*right, $$props*/
      96 && d !== (d = A(
        /*right*/
        v[5],
        /*$$props*/
        v[6].classRight
      ))) && h(c, "class", d), w && w.p && (!p || E & /*$$scope*/
      128) && Z(
        w,
        C,
        v,
        /*$$scope*/
        v[7],
        p ? J(
          C,
          /*$$scope*/
          v[7],
          E,
          null
        ) : x(
          /*$$scope*/
          v[7]
        ),
        null
      ), (!p || E & /*slot, $$props*/
      66 && m !== (m = A(
        /*slot*/
        v[1],
        /*$$props*/
        v[6].classSlot
      ))) && h(g, "class", m), (!p || E & /*div, $$props*/
      65 && b !== (b = A(
        /*div*/
        v[0],
        /*$$props*/
        v[6].class
      ))) && h(e, "class", b);
    },
    i(v) {
      p || (_(w, v), p = !0);
    },
    o(v) {
      y(w, v), p = !1;
    },
    d(v) {
      v && S(e), w && w.d(v);
    }
  };
}
function za(t, e, i) {
  let { $$slots: l = {}, $$scope: n } = e, { div: r = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[600px] uikit-w-[300px] uikit-shadow-xl" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-w-[272px] uikit-h-[572px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { top: u = "uikit-w-[148px] uikit-h-[18px] uikit-bg-gray-800 uikit-top-0 uikit-rounded-b-[1rem] uikit-left-1/2 -uikit-translate-x-1/2 uikit-absolute" } = e, { leftTop: s = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 uikit-absolute -uikit-right-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = N(N({}, e), B(c))), "div" in c && i(0, r = c.div), "slot" in c && i(1, o = c.slot), "top" in c && i(2, u = c.top), "leftTop" in c && i(3, s = c.leftTop), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, n = c.$$scope);
  }, e = B(e), [r, o, u, s, a, f, e, n, l];
}
class Ra extends ie {
  constructor(e) {
    super(), te(this, e, za, Na, V, {
      div: 0,
      slot: 1,
      top: 2,
      leftTop: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function Da(t) {
  let e, i, l, n, r, o, u, s, a, f;
  const c = (
    /*#slots*/
    t[6].default
  ), d = Y(
    c,
    t,
    /*$$scope*/
    t[5],
    null
  );
  return {
    c() {
      e = L("div"), i = L("div"), d && d.c(), r = G(), o = L("div"), u = L("div"), h(i, "class", l = A(
        /*inner*/
        t[1],
        /*$$props*/
        t[4].classInner
      )), h(e, "class", n = A(
        /*div*/
        t[0],
        /*$$props*/
        t[4].class
      )), h(u, "class", s = A(
        /*botCen*/
        t[3],
        /*$$props*/
        t[4].classBotCen
      )), h(o, "class", a = A(
        /*bot*/
        t[2],
        /*$$props*/
        t[4].classBot
      ));
    },
    m(k, g) {
      T(k, e, g), R(e, i), d && d.m(i, null), T(k, r, g), T(k, o, g), R(o, u), f = !0;
    },
    p(k, [g]) {
      d && d.p && (!f || g & /*$$scope*/
      32) && Z(
        d,
        c,
        k,
        /*$$scope*/
        k[5],
        f ? J(
          c,
          /*$$scope*/
          k[5],
          g,
          null
        ) : x(
          /*$$scope*/
          k[5]
        ),
        null
      ), (!f || g & /*inner, $$props*/
      18 && l !== (l = A(
        /*inner*/
        k[1],
        /*$$props*/
        k[4].classInner
      ))) && h(i, "class", l), (!f || g & /*div, $$props*/
      17 && n !== (n = A(
        /*div*/
        k[0],
        /*$$props*/
        k[4].class
      ))) && h(e, "class", n), (!f || g & /*botCen, $$props*/
      24 && s !== (s = A(
        /*botCen*/
        k[3],
        /*$$props*/
        k[4].classBotCen
      ))) && h(u, "class", s), (!f || g & /*bot, $$props*/
      20 && a !== (a = A(
        /*bot*/
        k[2],
        /*$$props*/
        k[4].classBot
      ))) && h(o, "class", a);
    },
    i(k) {
      f || (_(d, k), f = !0);
    },
    o(k) {
      y(d, k), f = !1;
    },
    d(k) {
      k && (S(e), S(r), S(o)), d && d.d(k);
    }
  };
}
function Ba(t, e, i) {
  let { $$slots: l = {}, $$scope: n } = e, { div: r = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[8px] uikit-rounded-t-xl uikit-h-[172px] uikit-max-w-[301px] md:uikit-h-[294px] md:uikit-max-w-[512px]" } = e, { inner: o = "uikit-rounded-lg uikit-overflow-hidden uikit-h-[156px] md:uikit-h-[278px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { bot: u = "uikit-relative uikit-mx-auto uikit-bg-gray-900 dark:uikit-bg-gray-700 uikit-rounded-b-xl uikit-rounded-t-sm uikit-h-[17px] uikit-max-w-[351px] md:uikit-h-[21px] md:uikit-max-w-[597px]" } = e, { botCen: s = "uikit-absolute uikit-left-1/2 uikit-top-0 -uikit-translate-x-1/2 uikit-rounded-b-xl uikit-w-[56px] uikit-h-[5px] md:uikit-w-[96px] md:uikit-h-[8px] uikit-bg-gray-800" } = e;
  return t.$$set = (a) => {
    i(4, e = N(N({}, e), B(a))), "div" in a && i(0, r = a.div), "inner" in a && i(1, o = a.inner), "bot" in a && i(2, u = a.bot), "botCen" in a && i(3, s = a.botCen), "$$scope" in a && i(5, n = a.$$scope);
  }, e = B(e), [r, o, u, s, e, n, l];
}
class Fa extends ie {
  constructor(e) {
    super(), te(this, e, Ba, Da, V, { div: 0, inner: 1, bot: 2, botCen: 3 });
  }
}
function ja(t) {
  let e, i, l, n, r, o, u, s, a, f, c, d, k, g, m, b, p;
  const C = (
    /*#slots*/
    t[8].default
  ), w = Y(
    C,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = L("div"), l = G(), n = L("div"), r = L("div"), u = G(), s = L("div"), f = G(), c = L("div"), w && w.c(), g = G(), m = L("div"), h(e, "class", i = A(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      )), h(r, "class", o = A(
        /*rightTop*/
        t[2],
        /*$$props*/
        t[6].classRightTop
      )), h(s, "class", a = A(
        /*rightBot*/
        t[3],
        /*$$props*/
        t[6].classRightBot
      )), h(c, "class", d = A(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(n, "class", k = A(
        /*top*/
        t[4],
        /*$$props*/
        t[6].classTop
      )), h(m, "class", b = A(
        /*bot*/
        t[5],
        /*$$props*/
        t[6].classBot
      ));
    },
    m(v, E) {
      T(v, e, E), T(v, l, E), T(v, n, E), R(n, r), R(n, u), R(n, s), R(n, f), R(n, c), w && w.m(c, null), T(v, g, E), T(v, m, E), p = !0;
    },
    p(v, [E]) {
      (!p || E & /*div, $$props*/
      65 && i !== (i = A(
        /*div*/
        v[0],
        /*$$props*/
        v[6].class
      ))) && h(e, "class", i), (!p || E & /*rightTop, $$props*/
      68 && o !== (o = A(
        /*rightTop*/
        v[2],
        /*$$props*/
        v[6].classRightTop
      ))) && h(r, "class", o), (!p || E & /*rightBot, $$props*/
      72 && a !== (a = A(
        /*rightBot*/
        v[3],
        /*$$props*/
        v[6].classRightBot
      ))) && h(s, "class", a), w && w.p && (!p || E & /*$$scope*/
      128) && Z(
        w,
        C,
        v,
        /*$$scope*/
        v[7],
        p ? J(
          C,
          /*$$scope*/
          v[7],
          E,
          null
        ) : x(
          /*$$scope*/
          v[7]
        ),
        null
      ), (!p || E & /*slot, $$props*/
      66 && d !== (d = A(
        /*slot*/
        v[1],
        /*$$props*/
        v[6].classSlot
      ))) && h(c, "class", d), (!p || E & /*top, $$props*/
      80 && k !== (k = A(
        /*top*/
        v[4],
        /*$$props*/
        v[6].classTop
      ))) && h(n, "class", k), (!p || E & /*bot, $$props*/
      96 && b !== (b = A(
        /*bot*/
        v[5],
        /*$$props*/
        v[6].classBot
      ))) && h(m, "class", b);
    },
    i(v) {
      p || (_(w, v), p = !0);
    },
    o(v) {
      y(w, v), p = !1;
    },
    d(v) {
      v && (S(e), S(l), S(n), S(g), S(m)), w && w.d(v);
    }
  };
}
function Wa(t, e, i) {
  let { $$slots: l = {}, $$scope: n } = e, { div: r = "uikit-relative uikit-mx-auto uikit-bg-gray-800 dark:uikit-bg-gray-700 uikit-rounded-t-[2.5rem] uikit-h-[63px] uikit-max-w-[133px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-h-[193px] uikit-w-[188px]" } = e, { rightTop: u = "uikit-h-[41px] uikit-w-[6px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[16px] uikit-top-[40px] uikit-rounded-r-lg" } = e, { rightBot: s = "uikit-h-[32px] uikit-w-[6px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-right-[16px] uikit-top-[88px] uikit-rounded-r-lg" } = e, { top: a = "uikit-relative uikit-mx-auto uikit-border-gray-900 dark:uikit-bg-gray-800 dark:uikit-border-gray-800 uikit-border-[10px] uikit-rounded-[2.5rem] uikit-h-[213px] uikit-w-[208px]" } = e, { bot: f = "uikit-relative uikit-mx-auto uikit-bg-gray-800 dark:uikit-bg-gray-700 uikit-rounded-b-[2.5rem] uikit-h-[63px] uikit-max-w-[133px]" } = e;
  return t.$$set = (c) => {
    i(6, e = N(N({}, e), B(c))), "div" in c && i(0, r = c.div), "slot" in c && i(1, o = c.slot), "rightTop" in c && i(2, u = c.rightTop), "rightBot" in c && i(3, s = c.rightBot), "top" in c && i(4, a = c.top), "bot" in c && i(5, f = c.bot), "$$scope" in c && i(7, n = c.$$scope);
  }, e = B(e), [r, o, u, s, a, f, e, n, l];
}
class Ua extends ie {
  constructor(e) {
    super(), te(this, e, Wa, ja, V, {
      div: 0,
      slot: 1,
      rightTop: 2,
      rightBot: 3,
      top: 4,
      bot: 5
    });
  }
}
function Ga(t) {
  let e, i, l, n, r, o, u, s, a, f, c, d, k, g, m, b, p;
  const C = (
    /*#slots*/
    t[8].default
  ), w = Y(
    C,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = L("div"), i = L("div"), n = G(), r = L("div"), u = G(), s = L("div"), f = G(), c = L("div"), k = G(), g = L("div"), w && w.c(), h(i, "class", l = A(
        /*leftTop*/
        t[2],
        /*$$props*/
        t[6].classLeftTop
      )), h(r, "class", o = A(
        /*leftMid*/
        t[3],
        /*$$props*/
        t[6].classLeftMid
      )), h(s, "class", a = A(
        /*leftBot*/
        t[4],
        /*$$props*/
        t[6].classLeftBot
      )), h(c, "class", d = A(
        /*right*/
        t[5],
        /*$$props*/
        t[6].classRight
      )), h(g, "class", m = A(
        /*slot*/
        t[1],
        /*$$props*/
        t[6].classSlot
      )), h(e, "class", b = A(
        /*div*/
        t[0],
        /*$$props*/
        t[6].class
      ));
    },
    m(v, E) {
      T(v, e, E), R(e, i), R(e, n), R(e, r), R(e, u), R(e, s), R(e, f), R(e, c), R(e, k), R(e, g), w && w.m(g, null), p = !0;
    },
    p(v, [E]) {
      (!p || E & /*leftTop, $$props*/
      68 && l !== (l = A(
        /*leftTop*/
        v[2],
        /*$$props*/
        v[6].classLeftTop
      ))) && h(i, "class", l), (!p || E & /*leftMid, $$props*/
      72 && o !== (o = A(
        /*leftMid*/
        v[3],
        /*$$props*/
        v[6].classLeftMid
      ))) && h(r, "class", o), (!p || E & /*leftBot, $$props*/
      80 && a !== (a = A(
        /*leftBot*/
        v[4],
        /*$$props*/
        v[6].classLeftBot
      ))) && h(s, "class", a), (!p || E & /*right, $$props*/
      96 && d !== (d = A(
        /*right*/
        v[5],
        /*$$props*/
        v[6].classRight
      ))) && h(c, "class", d), w && w.p && (!p || E & /*$$scope*/
      128) && Z(
        w,
        C,
        v,
        /*$$scope*/
        v[7],
        p ? J(
          C,
          /*$$scope*/
          v[7],
          E,
          null
        ) : x(
          /*$$scope*/
          v[7]
        ),
        null
      ), (!p || E & /*slot, $$props*/
      66 && m !== (m = A(
        /*slot*/
        v[1],
        /*$$props*/
        v[6].classSlot
      ))) && h(g, "class", m), (!p || E & /*div, $$props*/
      65 && b !== (b = A(
        /*div*/
        v[0],
        /*$$props*/
        v[6].class
      ))) && h(e, "class", b);
    },
    i(v) {
      p || (_(w, v), p = !0);
    },
    o(v) {
      y(w, v), p = !1;
    },
    d(v) {
      v && S(e), w && w.d(v);
    }
  };
}
function Ha(t, e, i) {
  let { $$slots: l = {}, $$scope: n } = e, { div: r = "uikit-relative uikit-mx-auto uikit-border-gray-800 dark:uikit-border-gray-800 uikit-bg-gray-800 uikit-border-[14px] uikit-rounded-[2.5rem] uikit-h-[454px] uikit-max-w-[341px] md:uikit-h-[682px] md:uikit-max-w-[512px]" } = e, { slot: o = "uikit-rounded-[2rem] uikit-overflow-hidden uikit-h-[426px] md:uikit-h-[654px] uikit-bg-white dark:uikit-bg-gray-800" } = e, { leftTop: u = "uikit-h-[32px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[72px] uikit-rounded-l-lg" } = e, { leftMid: s = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[124px] uikit-rounded-l-lg" } = e, { leftBot: a = "uikit-h-[46px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -uikit-left-[17px] uikit-top-[178px] uikit-rounded-l-lg" } = e, { right: f = "uikit-h-[64px] uikit-w-[3px] uikit-bg-gray-800 dark:uikit-bg-gray-800 uikit-absolute -ruikit-ight-[17px] uikit-top-[142px] uikit-rounded-r-lg" } = e;
  return t.$$set = (c) => {
    i(6, e = N(N({}, e), B(c))), "div" in c && i(0, r = c.div), "slot" in c && i(1, o = c.slot), "leftTop" in c && i(2, u = c.leftTop), "leftMid" in c && i(3, s = c.leftMid), "leftBot" in c && i(4, a = c.leftBot), "right" in c && i(5, f = c.right), "$$scope" in c && i(7, n = c.$$scope);
  }, e = B(e), [r, o, u, s, a, f, e, n, l];
}
class Va extends ie {
  constructor(e) {
    super(), te(this, e, Ha, Ga, V, {
      div: 0,
      slot: 1,
      leftTop: 2,
      leftMid: 3,
      leftBot: 4,
      right: 5
    });
  }
}
function qa(t) {
  let e;
  return {
    c() {
      e = L("div"), e.textContent = "Unknow device", h(e, "class", "uikit-border uikit-p-3 uikit-text-xl");
    },
    m(i, l) {
      T(i, e, l);
    },
    p: oe,
    i: oe,
    o: oe,
    d(i) {
      i && S(e);
    }
  };
}
function Xa(t) {
  let e, i, l;
  var n = (
    /*component*/
    t[0]
  );
  function r(o) {
    return {
      props: {
        $$slots: { default: [Qa] },
        $$scope: { ctx: o }
      }
    };
  }
  return n && (e = ln(n, r(t))), {
    c() {
      e && K(e.$$.fragment), i = ue();
    },
    m(o, u) {
      e && X(e, o, u), T(o, i, u), l = !0;
    },
    p(o, u) {
      const s = {};
      if (u & /*$$scope*/
      8 && (s.$$scope = { dirty: u, ctx: o }), u & /*component*/
      1 && n !== (n = /*component*/
      o[0])) {
        if (e) {
          le();
          const a = e;
          y(a.$$.fragment, 1, 0, () => {
            Q(a, 1);
          }), re();
        }
        n ? (e = ln(n, r(o)), K(e.$$.fragment), _(e.$$.fragment, 1), X(e, i.parentNode, i)) : e = null;
      } else
        n && e.$set(s);
    },
    i(o) {
      l || (e && _(e.$$.fragment, o), l = !0);
    },
    o(o) {
      e && y(e.$$.fragment, o), l = !1;
    },
    d(o) {
      o && S(i), e && Q(e, o);
    }
  };
}
function Qa(t) {
  let e;
  const i = (
    /*#slots*/
    t[2].default
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[3],
    null
  );
  return {
    c() {
      l && l.c();
    },
    m(n, r) {
      l && l.m(n, r), e = !0;
    },
    p(n, r) {
      l && l.p && (!e || r & /*$$scope*/
      8) && Z(
        l,
        i,
        n,
        /*$$scope*/
        n[3],
        e ? J(
          i,
          /*$$scope*/
          n[3],
          r,
          null
        ) : x(
          /*$$scope*/
          n[3]
        ),
        null
      );
    },
    i(n) {
      e || (_(l, n), e = !0);
    },
    o(n) {
      y(l, n), e = !1;
    },
    d(n) {
      l && l.d(n);
    }
  };
}
function Ka(t) {
  let e, i, l, n;
  const r = [Xa, qa], o = [];
  function u(s, a) {
    return (
      /*component*/
      s[0] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = r[e](t), {
    c() {
      i.c(), l = ue();
    },
    m(s, a) {
      o[e].m(s, a), T(s, l, a), n = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (le(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), re(), i = o[e], i ? i.p(s, a) : (i = o[e] = r[e](s), i.c()), _(i, 1), i.m(l.parentNode, l));
    },
    i(s) {
      n || (_(i), n = !0);
    },
    o(s) {
      y(i), n = !1;
    },
    d(s) {
      s && S(l), o[e].d(s);
    }
  };
}
function Ya(t, e, i) {
  let { $$slots: l = {}, $$scope: n } = e, { device: r = "default" } = e;
  const o = {
    android: Ea,
    ios: Ra,
    tablet: Va,
    default: Oa,
    smartwatch: Ua,
    laptop: Fa,
    desktop: La
  };
  let u;
  return t.$$set = (s) => {
    "device" in s && i(1, r = s.device), "$$scope" in s && i(3, n = s.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*device*/
    2 && i(0, u = o[r]);
  }, [u, r, l, n];
}
class Ja extends ie {
  constructor(e) {
    super(), te(this, e, Ya, Ka, V, { device: 1 });
  }
}
const g0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new Ja({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
}, Za = (t, e) => {
  const i = (l) => {
    l != null && l.target && t && !t.contains(l.target) && !l.defaultPrevented && e();
  };
  return document.addEventListener("click", i, !0), {
    destroy() {
      document.removeEventListener("click", i, !0);
    }
  };
}, xa = (t) => ({ hidden: t & /*hidden*/
1 }), Un = (t) => ({ hidden: (
  /*hidden*/
  t[0]
) });
function Gn(t) {
  let e, i, l, n, r, o, u;
  function s(m, b) {
    if (
      /*backdrop*/
      m[4] && /*activateClickOutside*/
      m[1]
    )
      return ef;
    if (
      /*backdrop*/
      m[4] && !/*activateClickOutside*/
      m[1]
    )
      return $a;
  }
  let a = s(t), f = a && a(t);
  const c = (
    /*#slots*/
    t[25].default
  ), d = Y(
    c,
    t,
    /*$$scope*/
    t[24],
    Un
  );
  let k = [
    { id: (
      /*id*/
      t[6]
    ) },
    /*$$restProps*/
    t[15],
    {
      class: l = A(
        /*divClass*/
        t[7],
        /*width*/
        t[3],
        /*position*/
        t[2],
        /*placements*/
        t[10][
          /*placement*/
          t[5]
        ],
        /*$$props*/
        t[16].class
      )
    },
    { tabindex: "-1" },
    { "aria-controls": (
      /*id*/
      t[6]
    ) },
    { "aria-labelledby": (
      /*id*/
      t[6]
    ) }
  ], g = {};
  for (let m = 0; m < k.length; m += 1)
    g = N(g, k[m]);
  return {
    c() {
      f && f.c(), e = G(), i = L("div"), d && d.c(), ae(i, g);
    },
    m(m, b) {
      f && f.m(m, b), T(m, e, b), T(m, i, b), d && d.m(i, null), r = !0, o || (u = Be(
        /*clickOutsideWrapper*/
        t[14].call(
          null,
          i,
          /*handleClickOutside*/
          t[12]
        )
      ), o = !0);
    },
    p(m, b) {
      t = m, a === (a = s(t)) && f ? f.p(t, b) : (f && f.d(1), f = a && a(t), f && (f.c(), f.m(e.parentNode, e))), d && d.p && (!r || b & /*$$scope, hidden*/
      16777217) && Z(
        d,
        c,
        t,
        /*$$scope*/
        t[24],
        r ? J(
          c,
          /*$$scope*/
          t[24],
          b,
          xa
        ) : x(
          /*$$scope*/
          t[24]
        ),
        Un
      ), ae(i, g = fe(k, [
        (!r || b & /*id*/
        64) && { id: (
          /*id*/
          t[6]
        ) },
        b & /*$$restProps*/
        32768 && /*$$restProps*/
        t[15],
        (!r || b & /*divClass, width, position, placement, $$props*/
        65708 && l !== (l = A(
          /*divClass*/
          t[7],
          /*width*/
          t[3],
          /*position*/
          t[2],
          /*placements*/
          t[10][
            /*placement*/
            t[5]
          ],
          /*$$props*/
          t[16].class
        ))) && { class: l },
        { tabindex: "-1" },
        (!r || b & /*id*/
        64) && { "aria-controls": (
          /*id*/
          t[6]
        ) },
        (!r || b & /*id*/
        64) && { "aria-labelledby": (
          /*id*/
          t[6]
        ) }
      ]));
    },
    i(m) {
      r || (_(d, m), m && Me(() => {
        r && (n || (n = je(
          i,
          /*multiple*/
          t[9],
          /*transitionParams*/
          t[8],
          !0
        )), n.run(1));
      }), r = !0);
    },
    o(m) {
      y(d, m), m && (n || (n = je(
        i,
        /*multiple*/
        t[9],
        /*transitionParams*/
        t[8],
        !1
      )), n.run(0)), r = !1;
    },
    d(m) {
      m && (S(e), S(i)), f && f.d(m), d && d.d(m), m && n && n.end(), o = !1, u();
    }
  };
}
function $a(t) {
  let e;
  return {
    c() {
      e = L("div"), h(e, "role", "presentation"), h(
        e,
        "class",
        /*backdropDivClass*/
        t[13]
      );
    },
    m(i, l) {
      T(i, e, l);
    },
    p: oe,
    d(i) {
      i && S(e);
    }
  };
}
function ef(t) {
  let e, i, l;
  return {
    c() {
      e = L("div"), h(e, "role", "presentation"), h(
        e,
        "class",
        /*backdropDivClass*/
        t[13]
      );
    },
    m(n, r) {
      T(n, e, r), i || (l = D(
        e,
        "click",
        /*click_handler*/
        t[26]
      ), i = !0);
    },
    p: oe,
    d(n) {
      n && S(e), i = !1, l();
    }
  };
}
function tf(t) {
  let e, i, l = !/*hidden*/
  t[0] && Gn(t);
  return {
    c() {
      l && l.c(), e = ue();
    },
    m(n, r) {
      l && l.m(n, r), T(n, e, r), i = !0;
    },
    p(n, [r]) {
      /*hidden*/
      n[0] ? l && (le(), y(l, 1, 1, () => {
        l = null;
      }), re()) : l ? (l.p(n, r), r & /*hidden*/
      1 && _(l, 1)) : (l = Gn(n), l.c(), _(l, 1), l.m(e.parentNode, e));
    },
    i(n) {
      i || (_(l), i = !0);
    },
    o(n) {
      y(l), i = !1;
    },
    d(n) {
      n && S(e), l && l.d(n);
    }
  };
}
function nf(t, e, i) {
  const l = [
    "activateClickOutside",
    "hidden",
    "position",
    "leftOffset",
    "rightOffset",
    "topOffset",
    "bottomOffset",
    "width",
    "backdrop",
    "bgColor",
    "bgOpacity",
    "placement",
    "id",
    "divClass",
    "transitionParams",
    "transitionType"
  ];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e, { activateClickOutside: u = !0 } = e, { hidden: s = !0 } = e, { position: a = "uikit-fixed" } = e, { leftOffset: f = "uikit-inset-y-0 uikit-start-0" } = e, { rightOffset: c = "uikit-inset-y-0 uikit-end-0" } = e, { topOffset: d = "uikit-inset-x-0 uikit-top-0" } = e, { bottomOffset: k = "uikit-inset-x-0 uikit-bottom-0" } = e, { width: g = "uikit-w-80" } = e, { backdrop: m = !0 } = e, { bgColor: b = "uikit-bg-gray-900" } = e, { bgOpacity: p = "uikit-bg-opacity-75" } = e, { placement: C = "left" } = e, { id: w = "drawer-example" } = e, { divClass: v = "uikit-overflow-y-auto uikit-z-50 uikit-p-4 uikit-bg-white dark:uikit-bg-gray-800" } = e, { transitionParams: E = {} } = e, { transitionType: O = "fly" } = e;
  function I(z, j) {
    switch (O) {
      case "slide":
        return ji(z, j);
      case "blur":
        return Fi(z, j);
      case "fade":
        return Zt(z, j);
      default:
        return Ct(z, j);
    }
  }
  const U = {
    left: f,
    right: c,
    top: d,
    bottom: k
  }, $ = () => {
    i(0, s = !s);
  }, W = () => u && !s && $();
  let P = A("uikit-fixed uikit-top-0 uikit-start-0 uikit-z-50 uikit-w-full uikit-h-full", m && b, m && p);
  function H(z, j) {
    return u ? Za(z, j) : void 0;
  }
  const me = () => !s && $();
  return t.$$set = (z) => {
    i(16, e = N(N({}, e), B(z))), i(15, n = ne(e, l)), "activateClickOutside" in z && i(1, u = z.activateClickOutside), "hidden" in z && i(0, s = z.hidden), "position" in z && i(2, a = z.position), "leftOffset" in z && i(17, f = z.leftOffset), "rightOffset" in z && i(18, c = z.rightOffset), "topOffset" in z && i(19, d = z.topOffset), "bottomOffset" in z && i(20, k = z.bottomOffset), "width" in z && i(3, g = z.width), "backdrop" in z && i(4, m = z.backdrop), "bgColor" in z && i(21, b = z.bgColor), "bgOpacity" in z && i(22, p = z.bgOpacity), "placement" in z && i(5, C = z.placement), "id" in z && i(6, w = z.id), "divClass" in z && i(7, v = z.divClass), "transitionParams" in z && i(8, E = z.transitionParams), "transitionType" in z && i(23, O = z.transitionType), "$$scope" in z && i(24, o = z.$$scope);
  }, e = B(e), [
    s,
    u,
    a,
    g,
    m,
    C,
    w,
    v,
    E,
    I,
    U,
    $,
    W,
    P,
    H,
    n,
    e,
    f,
    c,
    d,
    k,
    b,
    p,
    O,
    o,
    r,
    me
  ];
}
class lf extends ie {
  constructor(e) {
    super(), te(this, e, nf, tf, V, {
      activateClickOutside: 1,
      hidden: 0,
      position: 2,
      leftOffset: 17,
      rightOffset: 18,
      topOffset: 19,
      bottomOffset: 20,
      width: 3,
      backdrop: 4,
      bgColor: 21,
      bgOpacity: 22,
      placement: 5,
      id: 6,
      divClass: 7,
      transitionParams: 8,
      transitionType: 23
    });
  }
}
function rf(t) {
  let e;
  return {
    c() {
      e = L("div");
    },
    m(i, l) {
      T(i, e, l), t[6](e);
    },
    p: oe,
    d(i) {
      i && S(e), t[6](null);
    }
  };
}
function of(t) {
  let e, i, l;
  const n = [
    { transitionType: "fly" },
    {
      transitionParams: (
        /*transitionParams*/
        t[2]
      )
    },
    { id: "sidebar1" },
    /*$$props*/
    t[3]
  ];
  function r(u) {
    t[7](u);
  }
  let o = {
    $$slots: { default: [rf] },
    $$scope: { ctx: t }
  };
  for (let u = 0; u < n.length; u += 1)
    o = N(o, n[u]);
  return (
    /*hidden*/
    t[1] !== void 0 && (o.hidden = /*hidden*/
    t[1]), e = new lf({ props: o }), Se.push(() => Ot(e, "hidden", r)), {
      c() {
        K(e.$$.fragment);
      },
      m(u, s) {
        X(e, u, s), l = !0;
      },
      p(u, [s]) {
        const a = s & /*transitionParams, $$props*/
        12 ? fe(n, [
          n[0],
          s & /*transitionParams*/
          4 && {
            transitionParams: (
              /*transitionParams*/
              u[2]
            )
          },
          n[2],
          s & /*$$props*/
          8 && Ae(
            /*$$props*/
            u[3]
          )
        ]) : {};
        s & /*$$scope, domdefault*/
        513 && (a.$$scope = { dirty: s, ctx: u }), !i && s & /*hidden*/
        2 && (i = !0, a.hidden = /*hidden*/
        u[1], At(() => i = !1)), e.$set(a);
      },
      i(u) {
        l || (_(e.$$.fragment, u), l = !0);
      },
      o(u) {
        y(e.$$.fragment, u), l = !1;
      },
      d(u) {
        Q(e, u);
      }
    }
  );
}
function sf(t, e, i) {
  let { slotdefault: l } = e, n = !0;
  function r() {
    i(1, n = !n);
  }
  let o = { x: -320, duration: 200, easing: xo }, u;
  const s = () => {
    l && u && (i(0, u.innerHTML = "", u), u.appendChild(l));
  };
  Je(() => {
    s();
  });
  function a(c) {
    Se[c ? "unshift" : "push"](() => {
      u = c, i(0, u);
    });
  }
  function f(c) {
    n = c, i(1, n);
  }
  return t.$$set = (c) => {
    i(3, e = N(N({}, e), B(c))), "slotdefault" in c && i(4, l = c.slotdefault);
  }, t.$$.update = () => {
    t.$$.dirty & /*slotdefault, domdefault*/
    17 && l && u && s();
  }, e = B(e), [
    u,
    n,
    o,
    e,
    l,
    r,
    a,
    f
  ];
}
class uf extends ie {
  constructor(e) {
    super(), te(this, e, sf, of, V, { slotdefault: 4, toggle: 5 });
  }
  get toggle() {
    return this.$$.ctx[5];
  }
}
const m0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new uf({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
};
function af(t) {
  let e, i;
  return {
    c() {
      e = pe("svg"), i = pe("path"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M15 19l-7-7 7-7"), h(e, "aria-hidden", "true"), h(e, "class", "uikit-w-5 uikit-h-5 sm:uikit-w-6 sm:uikit-h-6"), h(e, "fill", "none"), h(e, "stroke", "currentColor"), h(e, "viewBox", "0 0 24 24"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, n) {
      T(l, e, n), R(e, i);
    },
    d(l) {
      l && S(e);
    }
  };
}
function ff(t) {
  let e, i;
  return {
    c() {
      e = pe("svg"), i = pe("path"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5l7 7-7 7"), h(e, "aria-hidden", "true"), h(e, "class", "uikit-w-5 uikit-h-5 sm:uikit-w-6 sm:uikit-h-6"), h(e, "fill", "none"), h(e, "stroke", "currentColor"), h(e, "viewBox", "0 0 24 24"), h(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(l, n) {
      T(l, e, n), R(e, i);
    },
    d(l) {
      l && S(e);
    }
  };
}
function cf(t) {
  let e, i, l, n;
  function r(s, a) {
    return (
      /*forward*/
      s[0] ? ff : af
    );
  }
  let o = r(t), u = o(t);
  return {
    c() {
      e = L("span"), u.c(), i = G(), l = L("span"), n = ke(
        /*name*/
        t[1]
      ), h(l, "class", "uikit-sr-only"), h(e, "class", "uikit-inline-flex uikit-justify-center uikit-items-center uikit-w-8 uikit-h-8 uikit-rounded-full sm:uikit-w-10 sm:uikit-h-10 uikit-bg-white/30 dark:uikit-bg-gray-800/30 group-hover:uikit-bg-white/50 dark:group-hover:uikit-bg-gray-800/60 group-focus:uikit-ring-4 group-focus:uikit-ring-white dark:group-focus:uikit-ring-gray-800/70 group-focus:uikit-outline-none");
    },
    m(s, a) {
      T(s, e, a), u.m(e, null), R(e, i), R(e, l), R(l, n);
    },
    p(s, a) {
      o !== (o = r(s)) && (u.d(1), u = o(s), u && (u.c(), u.m(e, i))), a & /*name*/
      2 && be(
        n,
        /*name*/
        s[1]
      );
    },
    d(s) {
      s && S(e), u.d();
    }
  };
}
function df(t) {
  let e, i, l, n;
  const r = (
    /*#slots*/
    t[4].default
  ), o = Y(
    r,
    t,
    /*$$scope*/
    t[3],
    null
  ), u = o || cf(t);
  return {
    c() {
      e = L("button"), u && u.c(), h(e, "type", "button"), h(
        e,
        "class",
        /*buttonCls*/
        t[2]
      );
    },
    m(s, a) {
      T(s, e, a), u && u.m(e, null), i = !0, l || (n = D(
        e,
        "click",
        /*click_handler*/
        t[5]
      ), l = !0);
    },
    p(s, [a]) {
      o ? o.p && (!i || a & /*$$scope*/
      8) && Z(
        o,
        r,
        s,
        /*$$scope*/
        s[3],
        i ? J(
          r,
          /*$$scope*/
          s[3],
          a,
          null
        ) : x(
          /*$$scope*/
          s[3]
        ),
        null
      ) : u && u.p && (!i || a & /*name, forward*/
      3) && u.p(s, i ? a : -1), (!i || a & /*buttonCls*/
      4) && h(
        e,
        "class",
        /*buttonCls*/
        s[2]
      );
    },
    i(s) {
      i || (_(u, s), i = !0);
    },
    o(s) {
      y(u, s), i = !1;
    },
    d(s) {
      s && S(e), u && u.d(s), l = !1, n();
    }
  };
}
function kf(t, e, i) {
  let { $$slots: l = {}, $$scope: n } = e, { forward: r } = e, { name: o } = e, u;
  function s(a) {
    F.call(this, t, a);
  }
  return t.$$set = (a) => {
    i(6, e = N(N({}, e), B(a))), "forward" in a && i(0, r = a.forward), "name" in a && i(1, o = a.name), "$$scope" in a && i(3, n = a.$$scope);
  }, t.$$.update = () => {
    i(2, u = A("uikit-flex uikit-absolute uikit-top-0 uikit-z-30 uikit-justify-center uikit-items-center uikit-px-4 uikit-h-full uikit-group focus:uikit-outline-none uikit-text-white dark:uikit-text-gray-300", r ? "uikit-end-0" : "uikit-start-0", e.class));
  }, e = B(e), [r, o, u, n, l, s];
}
class Ii extends ie {
  constructor(e) {
    super(), te(this, e, kf, df, V, { forward: 0, name: 1 });
  }
}
const Ai = ({ lastSlideChange: t, slideDuration: e, slideDurationRatio: i = 1 }) => t && (/* @__PURE__ */ new Date()).getTime() - t.getTime() < e * i ? (console.warn("Can't change slide yet, too soon"), !1) : !0, gf = (t) => ({}), Hn = (t) => ({
  ControlButton: Ii,
  changeSlide: (
    /*changeSlide*/
    t[1]
  )
});
function mf(t) {
  let e, i, l, n;
  return e = new Ii({
    props: {
      name: "Previous",
      forward: !1,
      class: A(
        /*$$props*/
        t[2].class
      )
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[5]
  ), l = new Ii({
    props: {
      name: "Next",
      forward: !0,
      class: A(
        /*$$props*/
        t[2].class
      )
    }
  }), l.$on(
    "click",
    /*click_handler_1*/
    t[6]
  ), {
    c() {
      K(e.$$.fragment), i = G(), K(l.$$.fragment);
    },
    m(r, o) {
      X(e, r, o), T(r, i, o), X(l, r, o), n = !0;
    },
    p(r, o) {
      const u = {};
      o & /*$$props*/
      4 && (u.class = A(
        /*$$props*/
        r[2].class
      )), e.$set(u);
      const s = {};
      o & /*$$props*/
      4 && (s.class = A(
        /*$$props*/
        r[2].class
      )), l.$set(s);
    },
    i(r) {
      n || (_(e.$$.fragment, r), _(l.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), y(l.$$.fragment, r), n = !1;
    },
    d(r) {
      r && S(i), Q(e, r), Q(l, r);
    }
  };
}
function hf(t) {
  let e;
  const i = (
    /*#slots*/
    t[4].default
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[3],
    Hn
  ), n = l || mf(t);
  return {
    c() {
      n && n.c();
    },
    m(r, o) {
      n && n.m(r, o), e = !0;
    },
    p(r, [o]) {
      l ? l.p && (!e || o & /*$$scope*/
      8) && Z(
        l,
        i,
        r,
        /*$$scope*/
        r[3],
        e ? J(
          i,
          /*$$scope*/
          r[3],
          o,
          gf
        ) : x(
          /*$$scope*/
          r[3]
        ),
        Hn
      ) : n && n.p && (!e || o & /*$$props*/
      4) && n.p(r, e ? o : -1);
    },
    i(r) {
      e || (_(n, r), e = !0);
    },
    o(r) {
      y(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function bf(t, e, i) {
  let l, { $$slots: n = {}, $$scope: r } = e;
  const o = Pe("state");
  Jt(t, o, (c) => i(7, l = c));
  const { update: u } = o;
  function s(c) {
    Ai({
      lastSlideChange: l.lastSlideChange,
      slideDuration: l.slideDuration,
      slideDurationRatio: 0.75
    }) && u(c ? (d) => (d.forward = !0, d.index = d.index >= d.images.length - 1 ? 0 : d.index + 1, d.lastSlideChange = /* @__PURE__ */ new Date(), { ...d }) : (d) => (d.forward = !1, d.index = d.index <= 0 ? d.images.length - 1 : d.index - 1, d.lastSlideChange = /* @__PURE__ */ new Date(), { ...d }));
  }
  const a = () => s(!1), f = () => s(!0);
  return t.$$set = (c) => {
    i(2, e = N(N({}, e), B(c))), "$$scope" in c && i(3, r = c.$$scope);
  }, e = B(e), [o, s, e, r, n, a, f];
}
class _f extends ie {
  constructor(e) {
    super(), te(this, e, bf, hf, V, {});
  }
}
function Vn(t, e, i) {
  const l = t.slice();
  l[8] = e[i], l[11] = i;
  const n = (
    /*$state*/
    l[2].index === /*idx*/
    l[11]
  );
  return l[9] = n, l;
}
const pf = (t) => ({ selected: t & /*$state*/
4 }), qn = (t) => ({
  Indicator: Qi,
  selected: (
    /*selected*/
    t[9]
  ),
  index: (
    /*idx*/
    t[11]
  )
});
function yf(t) {
  let e, i;
  return e = new Qi({
    props: {
      class: A(
        "uikit-bg-gray-100 hover:uikit-bg-gray-300",
        /*selected*/
        t[9] ? (
          /*activeClass*/
          t[0]
        ) : (
          /*inactiveClass*/
          t[1]
        )
      )
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*$state, activeClass, inactiveClass*/
      7 && (r.class = A(
        "uikit-bg-gray-100 hover:uikit-bg-gray-300",
        /*selected*/
        l[9] ? (
          /*activeClass*/
          l[0]
        ) : (
          /*inactiveClass*/
          l[1]
        )
      )), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function Xn(t) {
  let e, i, l, n, r;
  const o = (
    /*#slots*/
    t[6].default
  ), u = Y(
    o,
    t,
    /*$$scope*/
    t[5],
    qn
  ), s = u || yf(t);
  function a() {
    return (
      /*click_handler*/
      t[7](
        /*idx*/
        t[11]
      )
    );
  }
  return {
    c() {
      e = L("button"), s && s.c(), i = G();
    },
    m(f, c) {
      T(f, e, c), s && s.m(e, null), R(e, i), l = !0, n || (r = D(e, "click", a), n = !0);
    },
    p(f, c) {
      t = f, u ? u.p && (!l || c & /*$$scope, $state*/
      36) && Z(
        u,
        o,
        t,
        /*$$scope*/
        t[5],
        l ? J(
          o,
          /*$$scope*/
          t[5],
          c,
          pf
        ) : x(
          /*$$scope*/
          t[5]
        ),
        qn
      ) : s && s.p && (!l || c & /*$state, activeClass, inactiveClass*/
      7) && s.p(t, l ? c : -1);
    },
    i(f) {
      l || (_(s, f), l = !0);
    },
    o(f) {
      y(s, f), l = !1;
    },
    d(f) {
      f && S(e), s && s.d(f), n = !1, r();
    }
  };
}
function vf(t) {
  let e, i, l, n = ge(
    /*$state*/
    t[2].images
  ), r = [];
  for (let u = 0; u < n.length; u += 1)
    r[u] = Xn(Vn(t, n, u));
  const o = (u) => y(r[u], 1, 1, () => {
    r[u] = null;
  });
  return {
    c() {
      e = L("div");
      for (let u = 0; u < r.length; u += 1)
        r[u].c();
      h(e, "class", i = A(
        "uikit-flex uikit-absolute uikit-bottom-5 uikit-start-1/2 uikit-z-30 uikit-space-x-3 rtl:uikit-space-x-reverse -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
        /*$$props*/
        t[4].class
      ));
    },
    m(u, s) {
      T(u, e, s);
      for (let a = 0; a < r.length; a += 1)
        r[a] && r[a].m(e, null);
      l = !0;
    },
    p(u, [s]) {
      if (s & /*$state, twMerge, activeClass, inactiveClass, $$scope, Indicator*/
      39) {
        n = ge(
          /*$state*/
          u[2].images
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const f = Vn(u, n, a);
          r[a] ? (r[a].p(f, s), _(r[a], 1)) : (r[a] = Xn(f), r[a].c(), _(r[a], 1), r[a].m(e, null));
        }
        for (le(), a = n.length; a < r.length; a += 1)
          o(a);
        re();
      }
      (!l || s & /*$$props*/
      16 && i !== (i = A(
        "uikit-flex uikit-absolute uikit-bottom-5 uikit-start-1/2 uikit-z-30 uikit-space-x-3 rtl:uikit-space-x-reverse -uikit-translate-x-1/2 rtl:uikit-translate-x-1/2",
        /*$$props*/
        u[4].class
      ))) && h(e, "class", i);
    },
    i(u) {
      if (!l) {
        for (let s = 0; s < n.length; s += 1)
          _(r[s]);
        l = !0;
      }
    },
    o(u) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1)
        y(r[s]);
      l = !1;
    },
    d(u) {
      u && S(e), Ie(r, u);
    }
  };
}
function wf(t, e, i) {
  let l, { $$slots: n = {}, $$scope: r } = e, { activeClass: o = "uikit-opacity-100" } = e, { inactiveClass: u = "uikit-opacity-60" } = e;
  const s = Pe("state");
  Jt(t, s, (f) => i(2, l = f));
  const a = (f) => or(s, l.index = f, l);
  return t.$$set = (f) => {
    i(4, e = N(N({}, e), B(f))), "activeClass" in f && i(0, o = f.activeClass), "inactiveClass" in f && i(1, u = f.inactiveClass), "$$scope" in f && i(5, r = f.$$scope);
  }, e = B(e), [
    o,
    u,
    l,
    s,
    e,
    r,
    n,
    a
  ];
}
class Cf extends ie {
  constructor(e) {
    super(), te(this, e, wf, vf, V, { activeClass: 0, inactiveClass: 1 });
  }
}
function Sf(t) {
  let e = (
    /*image*/
    t[0]
  ), i, l = Qn(t);
  return {
    c() {
      l.c(), i = ue();
    },
    m(n, r) {
      l.m(n, r), T(n, i, r);
    },
    p(n, r) {
      r & /*image*/
      1 && V(e, e = /*image*/
      n[0]) ? (le(), y(l, 1, 1, oe), re(), l = Qn(n), l.c(), _(l, 1), l.m(i.parentNode, i)) : l.p(n, r);
    },
    d(n) {
      n && S(i), l.d(n);
    }
  };
}
function Tf(t) {
  let e = (
    /*image*/
    t[0]
  ), i, l = Kn(t);
  return {
    c() {
      l.c(), i = ue();
    },
    m(n, r) {
      l.m(n, r), T(n, i, r);
    },
    p(n, r) {
      r & /*image*/
      1 && V(e, e = /*image*/
      n[0]) ? (le(), y(l, 1, 1, oe), re(), l = Kn(n), l.c(), _(l, 1), l.m(i.parentNode, i)) : l.p(n, r);
    },
    d(n) {
      n && S(i), l.d(n);
    }
  };
}
function Qn(t) {
  let e, i, l, n, r = [
    { alt: "..." },
    /*image*/
    t[0],
    /*$$restProps*/
    t[6],
    { class: (
      /*imgClass*/
      t[2]
    ) }
  ], o = {};
  for (let u = 0; u < r.length; u += 1)
    o = N(o, r[u]);
  return {
    c() {
      e = L("img"), ae(e, o);
    },
    m(u, s) {
      T(u, e, s), n = !0;
    },
    p(u, s) {
      t = u, ae(e, o = fe(r, [
        { alt: "..." },
        s & /*image*/
        1 && /*image*/
        t[0],
        s & /*$$restProps*/
        64 && /*$$restProps*/
        t[6],
        (!n || s & /*imgClass*/
        4) && { class: (
          /*imgClass*/
          t[2]
        ) }
      ]));
    },
    i(u) {
      n || (u && Me(() => {
        n && (l && l.end(1), i = vo(
          e,
          Ct,
          /*transitionSlideIn*/
          t[4]
        ), i.start());
      }), n = !0);
    },
    o(u) {
      i && i.invalidate(), u && (l = wo(
        e,
        Ct,
        /*transitionSlideOut*/
        t[3]
      )), n = !1;
    },
    d(u) {
      u && S(e), u && l && l.end();
    }
  };
}
function Kn(t) {
  let e, i, l, n = [
    { alt: "..." },
    /*image*/
    t[0],
    /*$$restProps*/
    t[6],
    { class: (
      /*imgClass*/
      t[2]
    ) }
  ], r = {};
  for (let o = 0; o < n.length; o += 1)
    r = N(r, n[o]);
  return {
    c() {
      e = L("img"), ae(e, r);
    },
    m(o, u) {
      T(o, e, u), l = !0;
    },
    p(o, u) {
      ae(e, r = fe(n, [
        { alt: "..." },
        u & /*image*/
        1 && /*image*/
        o[0],
        u & /*$$restProps*/
        64 && /*$$restProps*/
        o[6],
        (!l || u & /*imgClass*/
        4) && { class: (
          /*imgClass*/
          o[2]
        ) }
      ]));
    },
    i(o) {
      l || (o && Me(() => {
        l && (i || (i = je(
          e,
          /*transition*/
          t[1],
          {},
          !0
        )), i.run(1));
      }), l = !0);
    },
    o(o) {
      o && (i || (i = je(
        e,
        /*transition*/
        t[1],
        {},
        !1
      )), i.run(0)), l = !1;
    },
    d(o) {
      o && S(e), o && i && i.end();
    }
  };
}
function Ef(t) {
  let e;
  function i(r, o) {
    return (
      /*transition*/
      r[1] ? Tf : Sf
    );
  }
  let l = i(t), n = l(t);
  return {
    c() {
      n.c(), e = ue();
    },
    m(r, o) {
      n.m(r, o), T(r, e, o);
    },
    p(r, [o]) {
      l === (l = i(r)) && n ? n.p(r, o) : (n.d(1), n = l(r), n && (n.c(), n.m(e.parentNode, e)));
    },
    i: oe,
    o: oe,
    d(r) {
      r && S(e), n.d(r);
    }
  };
}
function If(t, e, i) {
  let l, n, r;
  const o = ["image", "transition"];
  let u = ne(e, o), s;
  const a = Pe("state");
  Jt(t, a, (d) => i(7, s = d));
  let { image: f } = e, { transition: c = null } = e;
  return t.$$set = (d) => {
    i(8, e = N(N({}, e), B(d))), i(6, u = ne(e, o)), "image" in d && i(0, f = d.image), "transition" in d && i(1, c = d.transition);
  }, t.$$.update = () => {
    t.$$.dirty & /*$state*/
    128 && i(4, l = {
      x: s.forward ? "100%" : "-100%",
      opacity: 1,
      width: "100%",
      height: "100%",
      duration: s.slideDuration
    }), t.$$.dirty & /*$state*/
    128 && i(3, n = {
      x: s.forward ? "-100%" : "100%",
      opacity: 0.9,
      width: "100%",
      height: "100%",
      duration: s.slideDuration
    }), i(2, r = A("uikit-absolute uikit-block !uikit-w-full uikit-h-full uikit-object-cover", e.class));
  }, e = B(e), [
    f,
    c,
    r,
    n,
    l,
    a,
    u,
    s
  ];
}
class Rr extends ie {
  constructor(e) {
    super(), te(this, e, If, Ef, V, { image: 0, transition: 1 });
  }
}
const Af = (t) => ({ index: t[0] & /*index*/
1 }), Yn = (t) => ({
  index: (
    /*index*/
    t[0]
  ),
  Controls: _f,
  Indicators: Cf
}), Of = (t) => ({ index: t[0] & /*index*/
1 }), Jn = (t) => ({ Slide: Rr, index: (
  /*index*/
  t[0]
) });
function Zn(t, e, i) {
  const l = t.slice();
  return l[29] = e[i], l;
}
function xn(t) {
  let e, i = ge(
    /*images*/
    t[1]
  ), l = [];
  for (let n = 0; n < i.length; n += 1)
    l[n] = $n(Zn(t, i, n));
  return {
    c() {
      for (let n = 0; n < l.length; n += 1)
        l[n].c();
      e = ue();
    },
    m(n, r) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(n, r);
      T(n, e, r);
    },
    p(n, r) {
      if (r[0] & /*images*/
      2) {
        i = ge(
          /*images*/
          n[1]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Zn(n, i, o);
          l[o] ? l[o].p(u, r) : (l[o] = $n(u), l[o].c(), l[o].m(e.parentNode, e));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = i.length;
      }
    },
    d(n) {
      n && S(e), Ie(l, n);
    }
  };
}
function $n(t) {
  let e, i;
  return {
    c() {
      e = L("link"), h(e, "rel", "preload"), h(e, "href", i = /*image*/
      t[29].src), h(e, "as", "image");
    },
    m(l, n) {
      T(l, e, n);
    },
    p(l, n) {
      n[0] & /*images*/
      2 && i !== (i = /*image*/
      l[29].src) && h(e, "href", i);
    },
    d(l) {
      l && S(e);
    }
  };
}
function Pf(t) {
  let e, i;
  return e = new Rr({
    props: {
      image: (
        /*images*/
        t[1][
          /*index*/
          t[0]
        ]
      ),
      class: (
        /*imgClass*/
        t[5]
      ),
      transition: (
        /*transition*/
        t[2]
      )
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n[0] & /*images, index*/
      3 && (r.image = /*images*/
      l[1][
        /*index*/
        l[0]
      ]), n[0] & /*imgClass*/
      32 && (r.class = /*imgClass*/
      l[5]), n[0] & /*transition*/
      4 && (r.transition = /*transition*/
      l[2]), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function Mf(t) {
  let e, i, l, n, r, o, u, s, a, f, c, d = (
    /*images*/
    t[1].length > 0 && xn(t)
  );
  const k = (
    /*#slots*/
    t[18].slide
  ), g = Y(
    k,
    t,
    /*$$scope*/
    t[17],
    Jn
  ), m = g || Pf(t);
  let b = [
    /*$$restProps*/
    t[12],
    {
      class: o = A(
        tl,
        /*activeDragGesture*/
        t[6] === void 0 ? "uikit-transition-transform" : "",
        /*$$props*/
        t[13].class
      )
    }
  ], p = {};
  for (let v = 0; v < b.length; v += 1)
    p = N(p, b[v]);
  const C = (
    /*#slots*/
    t[18].default
  ), w = Y(
    C,
    t,
    /*$$scope*/
    t[17],
    Yn
  );
  return {
    c() {
      d && d.c(), e = ue(), i = G(), l = G(), n = L("div"), r = L("div"), m && m.c(), s = G(), w && w.c(), ae(r, p), h(n, "class", "uikit-relative"), h(n, "role", "button"), h(
        n,
        "aria-label",
        /*ariaLabel*/
        t[4]
      ), h(n, "tabindex", "0");
    },
    m(v, E) {
      d && d.m(document.head, null), R(document.head, e), T(v, i, E), T(v, l, E), T(v, n, E), R(n, r), m && m.m(r, null), R(n, s), w && w.m(n, null), t[19](n), a = !0, f || (c = [
        D(document, "mousemove", function() {
          _e(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        D(document, "mouseup", function() {
          _e(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        D(document, "touchmove", function() {
          _e(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        D(document, "touchend", function() {
          _e(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        Be(u = /*loop*/
        t[10].call(
          null,
          r,
          /*duration*/
          t[3]
        )),
        D(
          n,
          "mousedown",
          /*onDragStart*/
          t[11],
          { passive: !1 }
        ),
        D(
          n,
          "touchstart",
          /*onDragStart*/
          t[11],
          { passive: !1 }
        ),
        D(n, "mousemove", function() {
          _e(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        D(n, "mouseup", function() {
          _e(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        }),
        D(n, "touchmove", function() {
          _e(
            /*onDragMove*/
            t[9]
          ) && t[9].apply(this, arguments);
        }),
        D(n, "touchend", function() {
          _e(
            /*onDragStop*/
            t[8]
          ) && t[8].apply(this, arguments);
        })
      ], f = !0);
    },
    p(v, E) {
      t = v, /*images*/
      t[1].length > 0 ? d ? d.p(t, E) : (d = xn(t), d.c(), d.m(e.parentNode, e)) : d && (d.d(1), d = null), g ? g.p && (!a || E[0] & /*$$scope, index*/
      131073) && Z(
        g,
        k,
        t,
        /*$$scope*/
        t[17],
        a ? J(
          k,
          /*$$scope*/
          t[17],
          E,
          Of
        ) : x(
          /*$$scope*/
          t[17]
        ),
        Jn
      ) : m && m.p && (!a || E[0] & /*images, index, imgClass, transition*/
      39) && m.p(t, a ? E : [-1, -1]), ae(r, p = fe(b, [
        E[0] & /*$$restProps*/
        4096 && /*$$restProps*/
        t[12],
        (!a || E[0] & /*activeDragGesture, $$props*/
        8256 && o !== (o = A(
          tl,
          /*activeDragGesture*/
          t[6] === void 0 ? "uikit-transition-transform" : "",
          /*$$props*/
          t[13].class
        ))) && { class: o }
      ])), u && _e(u.update) && E[0] & /*duration*/
      8 && u.update.call(
        null,
        /*duration*/
        t[3]
      ), w && w.p && (!a || E[0] & /*$$scope, index*/
      131073) && Z(
        w,
        C,
        t,
        /*$$scope*/
        t[17],
        a ? J(
          C,
          /*$$scope*/
          t[17],
          E,
          Af
        ) : x(
          /*$$scope*/
          t[17]
        ),
        Yn
      ), (!a || E[0] & /*ariaLabel*/
      16) && h(
        n,
        "aria-label",
        /*ariaLabel*/
        t[4]
      );
    },
    i(v) {
      a || (_(m, v), _(w, v), a = !0);
    },
    o(v) {
      y(m, v), y(w, v), a = !1;
    },
    d(v) {
      v && (S(i), S(l), S(n)), d && d.d(v), S(e), m && m.d(v), w && w.d(v), t[19](null), f = !1, Ce(c);
    }
  };
}
const el = 0.25;
let tl = "uikit-grid uikit-overflow-hidden uikit-relative uikit-rounded-lg uikit-h-56 sm:uikit-h-64 xl:uikit-h-80 2xl:uikit-h-96";
function Lf(t, e, i) {
  let l, n;
  const r = [
    "images",
    "index",
    "slideDuration",
    "transition",
    "duration",
    "ariaLabel",
    "imgClass"
  ];
  let o = ne(e, r), { $$slots: u = {}, $$scope: s } = e, { images: a } = e, { index: f = 0 } = e, { slideDuration: c = 1e3 } = e, { transition: d = null } = e, { duration: k = 0 } = e, { ariaLabel: g = "Draggable Carousel" } = e, { imgClass: m = "" } = e;
  const b = He(), { set: p, subscribe: C, update: w } = nt({
    images: a,
    index: f,
    forward: !0,
    slideDuration: c,
    lastSlideChange: /* @__PURE__ */ new Date()
  }), v = {
    set: (M) => p({
      index: M.index,
      images: M.images,
      lastSlideChange: /* @__PURE__ */ new Date(),
      slideDuration: c,
      forward: E
    }),
    subscribe: C,
    update: w
  };
  let E = !0;
  Ue("state", v), C((M) => {
    i(0, f = M.index), E = M.forward, b("change", a[f]);
  }), Je(() => {
    b("change", a[f]);
  });
  const O = () => {
    w((M) => Ai({
      lastSlideChange: M.lastSlideChange,
      slideDuration: c,
      slideDurationRatio: el
    }) ? (M.index = M.index >= a.length - 1 ? 0 : M.index + 1, M.lastSlideChange = /* @__PURE__ */ new Date(), { ...M }) : M);
  }, I = () => {
    w((M) => Ai({
      lastSlideChange: M.lastSlideChange,
      slideDuration: c,
      slideDurationRatio: el
    }) ? (M.index = M.index <= 0 ? a.length - 1 : M.index - 1, M.lastSlideChange = /* @__PURE__ */ new Date(), { ...M }) : M);
  }, U = (M, se) => {
    i(7, W = M);
    let de;
    return se > 0 && (de = setInterval(O, se)), {
      update: (ve) => {
        clearInterval(de), ve > 0 && (de = setInterval(O, ve));
      },
      destroy: () => clearInterval(de)
    };
  };
  let $, W, P = 0, H = null;
  const me = (M) => {
    const se = M == null ? void 0 : M.clientX;
    if (se)
      return se;
    let de = M;
    if (/^touch/.test(de == null ? void 0 : de.type))
      return de.touches[0].clientX;
  }, z = (M) => {
    i(16, H = M), M.cancelable && M.preventDefault();
    const se = me(M), de = W.getBoundingClientRect().width;
    se === void 0 || de === void 0 || i(6, $ = {
      start: se,
      position: se,
      width: de,
      timestamp: Date.now()
    });
  };
  function j(M) {
    Se[M ? "unshift" : "push"](() => {
      W = M, i(7, W);
    });
  }
  return t.$$set = (M) => {
    i(13, e = N(N({}, e), B(M))), i(12, o = ne(e, r)), "images" in M && i(1, a = M.images), "index" in M && i(0, f = M.index), "slideDuration" in M && i(14, c = M.slideDuration), "transition" in M && i(2, d = M.transition), "duration" in M && i(3, k = M.duration), "ariaLabel" in M && i(4, g = M.ariaLabel), "imgClass" in M && i(5, m = M.imgClass), "$$scope" in M && i(17, s = M.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*activeDragGesture*/
    64 && i(9, l = $ === void 0 ? void 0 : (M) => {
      const se = me(M);
      if (!$ || se === void 0)
        return;
      const { start: de, width: ve } = $;
      i(15, P = Math.min(100, Math.max(-100, (se - de) / ve * 100))), i(6, $.position = se, $);
    }), t.$$.dirty[0] & /*activeDragGesture, percentOffset, touchEvent*/
    98368 && i(8, n = $ === void 0 ? void 0 : (M) => {
      var Ne;
      if ($) {
        const { timestamp: Oe, position: Re, start: ye } = $, ee = Date.now() - Oe, we = Re - ye;
        Math.abs(we) >= 30 && ee <= 250 && ee > 0 ? we > 0 ? I() : O() : P > 50 ? I() : P < -50 ? O() : (H == null ? void 0 : H.constructor.name) === "TouchEvent" && ((Ne = H == null ? void 0 : H.target) == null || Ne.dispatchEvent(new Event("click", { bubbles: !0 })));
      }
      i(15, P = 0), i(6, $ = void 0), i(16, H = null);
    });
  }, e = B(e), [
    f,
    a,
    d,
    k,
    g,
    m,
    $,
    W,
    n,
    l,
    U,
    z,
    o,
    e,
    c,
    P,
    H,
    s,
    u,
    j
  ];
}
class Nf extends ie {
  constructor(e) {
    super(), te(
      this,
      e,
      Lf,
      Mf,
      V,
      {
        images: 1,
        index: 0,
        slideDuration: 14,
        transition: 2,
        duration: 3,
        ariaLabel: 4,
        imgClass: 5
      },
      null,
      [-1, -1]
    );
  }
}
function zf(t) {
  let e, i, l, n;
  return e = new /*Controls*/
  t[4]({}), l = new /*Indicators*/
  t[3]({}), {
    c() {
      K(e.$$.fragment), i = G(), K(l.$$.fragment);
    },
    m(r, o) {
      X(e, r, o), T(r, i, o), X(l, r, o), n = !0;
    },
    i(r) {
      n || (_(e.$$.fragment, r), _(l.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), y(l.$$.fragment, r), n = !1;
    },
    d(r) {
      r && S(i), Q(e, r), Q(l, r);
    }
  };
}
function Rf(t) {
  let e, i, l;
  return i = new /*Slide*/
  t[2]({
    props: {
      image: (
        /*images*/
        t[0][
          /*index*/
          t[1]
        ]
      )
    }
  }), {
    c() {
      e = L("div"), K(i.$$.fragment), h(e, "slot", "slide");
    },
    m(n, r) {
      T(n, e, r), X(i, e, null), l = !0;
    },
    p(n, r) {
      const o = {};
      r & /*images, index*/
      3 && (o.image = /*images*/
      n[0][
        /*index*/
        n[1]
      ]), i.$set(o);
    },
    i(n) {
      l || (_(i.$$.fragment, n), l = !0);
    },
    o(n) {
      y(i.$$.fragment, n), l = !1;
    },
    d(n) {
      n && S(e), Q(i);
    }
  };
}
function Df(t) {
  let e, i, l;
  return i = new Nf({
    props: {
      images: (
        /*images*/
        t[0]
      ),
      duration: 3900,
      $$slots: {
        slide: [
          Rf,
          ({ index: n, Slide: r }) => ({ 1: n, 2: r }),
          ({ index: n, Slide: r }) => (n ? 2 : 0) | (r ? 4 : 0)
        ],
        default: [
          zf,
          ({ Indicators: n, Controls: r }) => ({ 3: n, 4: r }),
          ({ Indicators: n, Controls: r }) => (n ? 8 : 0) | (r ? 16 : 0)
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = L("div"), K(i.$$.fragment), h(e, "class", "max-w-4xl space-y-4");
    },
    m(n, r) {
      T(n, e, r), X(i, e, null), l = !0;
    },
    p(n, [r]) {
      const o = {};
      r & /*images*/
      1 && (o.images = /*images*/
      n[0]), r & /*$$scope, images, index*/
      35 && (o.$$scope = { dirty: r, ctx: n }), i.$set(o);
    },
    i(n) {
      l || (_(i.$$.fragment, n), l = !0);
    },
    o(n) {
      y(i.$$.fragment, n), l = !1;
    },
    d(n) {
      n && S(e), Q(i);
    }
  };
}
function Bf(t, e, i) {
  let { images: l = [] } = e;
  return t.$$set = (n) => {
    "images" in n && i(0, l = n.images);
  }, [l];
}
class Ff extends ie {
  constructor(e) {
    super(), te(this, e, Bf, Df, V, { images: 0 });
  }
}
const h0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new Ff({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
}, dt = Math.min, $e = Math.max, Xt = Math.round, Dt = Math.floor, Qe = (t) => ({
  x: t,
  y: t
}), jf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Wf = {
  start: "end",
  end: "start"
};
function Oi(t, e, i) {
  return $e(t, dt(e, i));
}
function Pt(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function tt(t) {
  return t.split("-")[0];
}
function Mt(t) {
  return t.split("-")[1];
}
function Dr(t) {
  return t === "x" ? "y" : "x";
}
function Ki(t) {
  return t === "y" ? "height" : "width";
}
function ti(t) {
  return ["top", "bottom"].includes(tt(t)) ? "y" : "x";
}
function Yi(t) {
  return Dr(ti(t));
}
function Uf(t, e, i) {
  i === void 0 && (i = !1);
  const l = Mt(t), n = Yi(t), r = Ki(n);
  let o = n === "x" ? l === (i ? "end" : "start") ? "right" : "left" : l === "start" ? "bottom" : "top";
  return e.reference[r] > e.floating[r] && (o = Qt(o)), [o, Qt(o)];
}
function Gf(t) {
  const e = Qt(t);
  return [Pi(t), e, Pi(e)];
}
function Pi(t) {
  return t.replace(/start|end/g, (e) => Wf[e]);
}
function Hf(t, e, i) {
  const l = ["left", "right"], n = ["right", "left"], r = ["top", "bottom"], o = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return i ? e ? n : l : e ? l : n;
    case "left":
    case "right":
      return e ? r : o;
    default:
      return [];
  }
}
function Vf(t, e, i, l) {
  const n = Mt(t);
  let r = Hf(tt(t), i === "start", l);
  return n && (r = r.map((o) => o + "-" + n), e && (r = r.concat(r.map(Pi)))), r;
}
function Qt(t) {
  return t.replace(/left|right|bottom|top/g, (e) => jf[e]);
}
function qf(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function Br(t) {
  return typeof t != "number" ? qf(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function Kt(t) {
  return {
    ...t,
    top: t.y,
    left: t.x,
    right: t.x + t.width,
    bottom: t.y + t.height
  };
}
function il(t, e, i) {
  let {
    reference: l,
    floating: n
  } = t;
  const r = ti(e), o = Yi(e), u = Ki(o), s = tt(e), a = r === "y", f = l.x + l.width / 2 - n.width / 2, c = l.y + l.height / 2 - n.height / 2, d = l[u] / 2 - n[u] / 2;
  let k;
  switch (s) {
    case "top":
      k = {
        x: f,
        y: l.y - n.height
      };
      break;
    case "bottom":
      k = {
        x: f,
        y: l.y + l.height
      };
      break;
    case "right":
      k = {
        x: l.x + l.width,
        y: c
      };
      break;
    case "left":
      k = {
        x: l.x - n.width,
        y: c
      };
      break;
    default:
      k = {
        x: l.x,
        y: l.y
      };
  }
  switch (Mt(e)) {
    case "start":
      k[o] -= d * (i && a ? -1 : 1);
      break;
    case "end":
      k[o] += d * (i && a ? -1 : 1);
      break;
  }
  return k;
}
const Xf = async (t, e, i) => {
  const {
    placement: l = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o
  } = i, u = r.filter(Boolean), s = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let a = await o.getElementRects({
    reference: t,
    floating: e,
    strategy: n
  }), {
    x: f,
    y: c
  } = il(a, l, s), d = l, k = {}, g = 0;
  for (let m = 0; m < u.length; m++) {
    const {
      name: b,
      fn: p
    } = u[m], {
      x: C,
      y: w,
      data: v,
      reset: E
    } = await p({
      x: f,
      y: c,
      initialPlacement: l,
      placement: d,
      strategy: n,
      middlewareData: k,
      rects: a,
      platform: o,
      elements: {
        reference: t,
        floating: e
      }
    });
    f = C ?? f, c = w ?? c, k = {
      ...k,
      [b]: {
        ...k[b],
        ...v
      }
    }, E && g <= 50 && (g++, typeof E == "object" && (E.placement && (d = E.placement), E.rects && (a = E.rects === !0 ? await o.getElementRects({
      reference: t,
      floating: e,
      strategy: n
    }) : E.rects), {
      x: f,
      y: c
    } = il(a, d, s)), m = -1);
  }
  return {
    x: f,
    y: c,
    placement: d,
    strategy: n,
    middlewareData: k
  };
};
async function Fr(t, e) {
  var i;
  e === void 0 && (e = {});
  const {
    x: l,
    y: n,
    platform: r,
    rects: o,
    elements: u,
    strategy: s
  } = t, {
    boundary: a = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: c = "floating",
    altBoundary: d = !1,
    padding: k = 0
  } = Pt(e, t), g = Br(k), b = u[d ? c === "floating" ? "reference" : "floating" : c], p = Kt(await r.getClippingRect({
    element: (i = await (r.isElement == null ? void 0 : r.isElement(b))) == null || i ? b : b.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(u.floating)),
    boundary: a,
    rootBoundary: f,
    strategy: s
  })), C = c === "floating" ? {
    ...o.floating,
    x: l,
    y: n
  } : o.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(u.floating)), v = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Kt(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: C,
    offsetParent: w,
    strategy: s
  }) : C);
  return {
    top: (p.top - E.top + g.top) / v.y,
    bottom: (E.bottom - p.bottom + g.bottom) / v.y,
    left: (p.left - E.left + g.left) / v.x,
    right: (E.right - p.right + g.right) / v.x
  };
}
const Qf = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: i,
      y: l,
      placement: n,
      rects: r,
      platform: o,
      elements: u,
      middlewareData: s
    } = e, {
      element: a,
      padding: f = 0
    } = Pt(t, e) || {};
    if (a == null)
      return {};
    const c = Br(f), d = {
      x: i,
      y: l
    }, k = Yi(n), g = Ki(k), m = await o.getDimensions(a), b = k === "y", p = b ? "top" : "left", C = b ? "bottom" : "right", w = b ? "clientHeight" : "clientWidth", v = r.reference[g] + r.reference[k] - d[k] - r.floating[g], E = d[k] - r.reference[k], O = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a));
    let I = O ? O[w] : 0;
    (!I || !await (o.isElement == null ? void 0 : o.isElement(O))) && (I = u.floating[w] || r.floating[g]);
    const U = v / 2 - E / 2, $ = I / 2 - m[g] / 2 - 1, W = dt(c[p], $), P = dt(c[C], $), H = W, me = I - m[g] - P, z = I / 2 - m[g] / 2 + U, j = Oi(H, z, me), M = !s.arrow && Mt(n) != null && z !== j && r.reference[g] / 2 - (z < H ? W : P) - m[g] / 2 < 0, se = M ? z < H ? z - H : z - me : 0;
    return {
      [k]: d[k] + se,
      data: {
        [k]: j,
        centerOffset: z - j - se,
        ...M && {
          alignmentOffset: se
        }
      },
      reset: M
    };
  }
}), Kf = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var i, l;
      const {
        placement: n,
        middlewareData: r,
        rects: o,
        initialPlacement: u,
        platform: s,
        elements: a
      } = e, {
        mainAxis: f = !0,
        crossAxis: c = !0,
        fallbackPlacements: d,
        fallbackStrategy: k = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: m = !0,
        ...b
      } = Pt(t, e);
      if ((i = r.arrow) != null && i.alignmentOffset)
        return {};
      const p = tt(n), C = tt(u) === u, w = await (s.isRTL == null ? void 0 : s.isRTL(a.floating)), v = d || (C || !m ? [Qt(u)] : Gf(u));
      !d && g !== "none" && v.push(...Vf(u, m, g, w));
      const E = [u, ...v], O = await Fr(e, b), I = [];
      let U = ((l = r.flip) == null ? void 0 : l.overflows) || [];
      if (f && I.push(O[p]), c) {
        const H = Uf(n, o, w);
        I.push(O[H[0]], O[H[1]]);
      }
      if (U = [...U, {
        placement: n,
        overflows: I
      }], !I.every((H) => H <= 0)) {
        var $, W;
        const H = ((($ = r.flip) == null ? void 0 : $.index) || 0) + 1, me = E[H];
        if (me)
          return {
            data: {
              index: H,
              overflows: U
            },
            reset: {
              placement: me
            }
          };
        let z = (W = U.filter((j) => j.overflows[0] <= 0).sort((j, M) => j.overflows[1] - M.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!z)
          switch (k) {
            case "bestFit": {
              var P;
              const j = (P = U.map((M) => [M.placement, M.overflows.filter((se) => se > 0).reduce((se, de) => se + de, 0)]).sort((M, se) => M[1] - se[1])[0]) == null ? void 0 : P[0];
              j && (z = j);
              break;
            }
            case "initialPlacement":
              z = u;
              break;
          }
        if (n !== z)
          return {
            reset: {
              placement: z
            }
          };
      }
      return {};
    }
  };
};
async function Yf(t, e) {
  const {
    placement: i,
    platform: l,
    elements: n
  } = t, r = await (l.isRTL == null ? void 0 : l.isRTL(n.floating)), o = tt(i), u = Mt(i), s = ti(i) === "y", a = ["left", "top"].includes(o) ? -1 : 1, f = r && s ? -1 : 1, c = Pt(e, t);
  let {
    mainAxis: d,
    crossAxis: k,
    alignmentAxis: g
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...c
  };
  return u && typeof g == "number" && (k = u === "end" ? g * -1 : g), s ? {
    x: k * f,
    y: d * a
  } : {
    x: d * a,
    y: k * f
  };
}
const Jf = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var i, l;
      const {
        x: n,
        y: r,
        placement: o,
        middlewareData: u
      } = e, s = await Yf(e, t);
      return o === ((i = u.offset) == null ? void 0 : i.placement) && (l = u.arrow) != null && l.alignmentOffset ? {} : {
        x: n + s.x,
        y: r + s.y,
        data: {
          ...s,
          placement: o
        }
      };
    }
  };
}, Zf = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: i,
        y: l,
        placement: n
      } = e, {
        mainAxis: r = !0,
        crossAxis: o = !1,
        limiter: u = {
          fn: (b) => {
            let {
              x: p,
              y: C
            } = b;
            return {
              x: p,
              y: C
            };
          }
        },
        ...s
      } = Pt(t, e), a = {
        x: i,
        y: l
      }, f = await Fr(e, s), c = ti(tt(n)), d = Dr(c);
      let k = a[d], g = a[c];
      if (r) {
        const b = d === "y" ? "top" : "left", p = d === "y" ? "bottom" : "right", C = k + f[b], w = k - f[p];
        k = Oi(C, k, w);
      }
      if (o) {
        const b = c === "y" ? "top" : "left", p = c === "y" ? "bottom" : "right", C = g + f[b], w = g - f[p];
        g = Oi(C, g, w);
      }
      const m = u.fn({
        ...e,
        [d]: k,
        [c]: g
      });
      return {
        ...m,
        data: {
          x: m.x - i,
          y: m.y - l
        }
      };
    }
  };
};
function Ke(t) {
  return jr(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function Ee(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Ve(t) {
  var e;
  return (e = (jr(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function jr(t) {
  return t instanceof Node || t instanceof Ee(t).Node;
}
function Ge(t) {
  return t instanceof Element || t instanceof Ee(t).Element;
}
function We(t) {
  return t instanceof HTMLElement || t instanceof Ee(t).HTMLElement;
}
function nl(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof Ee(t).ShadowRoot;
}
function Lt(t) {
  const {
    overflow: e,
    overflowX: i,
    overflowY: l,
    display: n
  } = Le(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + l + i) && !["inline", "contents"].includes(n);
}
function xf(t) {
  return ["table", "td", "th"].includes(Ke(t));
}
function Ji(t) {
  const e = Zi(), i = Le(t);
  return i.transform !== "none" || i.perspective !== "none" || (i.containerType ? i.containerType !== "normal" : !1) || !e && (i.backdropFilter ? i.backdropFilter !== "none" : !1) || !e && (i.filter ? i.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((l) => (i.willChange || "").includes(l)) || ["paint", "layout", "strict", "content"].some((l) => (i.contain || "").includes(l));
}
function Wr(t) {
  let e = kt(t);
  for (; We(e) && !ii(e); ) {
    if (Ji(e))
      return e;
    e = kt(e);
  }
  return null;
}
function Zi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function ii(t) {
  return ["html", "body", "#document"].includes(Ke(t));
}
function Le(t) {
  return Ee(t).getComputedStyle(t);
}
function ni(t) {
  return Ge(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function kt(t) {
  if (Ke(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    nl(t) && t.host || // Fallback.
    Ve(t)
  );
  return nl(e) ? e.host : e;
}
function Ur(t) {
  const e = kt(t);
  return ii(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : We(e) && Lt(e) ? e : Ur(e);
}
function Et(t, e, i) {
  var l;
  e === void 0 && (e = []), i === void 0 && (i = !0);
  const n = Ur(t), r = n === ((l = t.ownerDocument) == null ? void 0 : l.body), o = Ee(n);
  return r ? e.concat(o, o.visualViewport || [], Lt(n) ? n : [], o.frameElement && i ? Et(o.frameElement) : []) : e.concat(n, Et(n, [], i));
}
function Gr(t) {
  const e = Le(t);
  let i = parseFloat(e.width) || 0, l = parseFloat(e.height) || 0;
  const n = We(t), r = n ? t.offsetWidth : i, o = n ? t.offsetHeight : l, u = Xt(i) !== r || Xt(l) !== o;
  return u && (i = r, l = o), {
    width: i,
    height: l,
    $: u
  };
}
function xi(t) {
  return Ge(t) ? t : t.contextElement;
}
function ct(t) {
  const e = xi(t);
  if (!We(e))
    return Qe(1);
  const i = e.getBoundingClientRect(), {
    width: l,
    height: n,
    $: r
  } = Gr(e);
  let o = (r ? Xt(i.width) : i.width) / l, u = (r ? Xt(i.height) : i.height) / n;
  return (!o || !Number.isFinite(o)) && (o = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: o,
    y: u
  };
}
const $f = /* @__PURE__ */ Qe(0);
function Hr(t) {
  const e = Ee(t);
  return !Zi() || !e.visualViewport ? $f : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function ec(t, e, i) {
  return e === void 0 && (e = !1), !i || e && i !== Ee(t) ? !1 : e;
}
function it(t, e, i, l) {
  e === void 0 && (e = !1), i === void 0 && (i = !1);
  const n = t.getBoundingClientRect(), r = xi(t);
  let o = Qe(1);
  e && (l ? Ge(l) && (o = ct(l)) : o = ct(t));
  const u = ec(r, i, l) ? Hr(r) : Qe(0);
  let s = (n.left + u.x) / o.x, a = (n.top + u.y) / o.y, f = n.width / o.x, c = n.height / o.y;
  if (r) {
    const d = Ee(r), k = l && Ge(l) ? Ee(l) : l;
    let g = d.frameElement;
    for (; g && l && k !== d; ) {
      const m = ct(g), b = g.getBoundingClientRect(), p = Le(g), C = b.left + (g.clientLeft + parseFloat(p.paddingLeft)) * m.x, w = b.top + (g.clientTop + parseFloat(p.paddingTop)) * m.y;
      s *= m.x, a *= m.y, f *= m.x, c *= m.y, s += C, a += w, g = Ee(g).frameElement;
    }
  }
  return Kt({
    width: f,
    height: c,
    x: s,
    y: a
  });
}
const tc = [":popover-open", ":modal"];
function Vr(t) {
  let e = !1, i = 0, l = 0;
  function n(r) {
    try {
      e = e || t.matches(r);
    } catch {
    }
  }
  if (tc.forEach((r) => {
    n(r);
  }), e) {
    const r = Wr(t);
    if (r) {
      const o = r.getBoundingClientRect();
      i = o.x, l = o.y;
    }
  }
  return [e, i, l];
}
function ic(t) {
  let {
    elements: e,
    rect: i,
    offsetParent: l,
    strategy: n
  } = t;
  const r = Ve(l), [o] = e ? Vr(e.floating) : [!1];
  if (l === r || o)
    return i;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = Qe(1);
  const a = Qe(0), f = We(l);
  if ((f || !f && n !== "fixed") && ((Ke(l) !== "body" || Lt(r)) && (u = ni(l)), We(l))) {
    const c = it(l);
    s = ct(l), a.x = c.x + l.clientLeft, a.y = c.y + l.clientTop;
  }
  return {
    width: i.width * s.x,
    height: i.height * s.y,
    x: i.x * s.x - u.scrollLeft * s.x + a.x,
    y: i.y * s.y - u.scrollTop * s.y + a.y
  };
}
function nc(t) {
  return Array.from(t.getClientRects());
}
function qr(t) {
  return it(Ve(t)).left + ni(t).scrollLeft;
}
function lc(t) {
  const e = Ve(t), i = ni(t), l = t.ownerDocument.body, n = $e(e.scrollWidth, e.clientWidth, l.scrollWidth, l.clientWidth), r = $e(e.scrollHeight, e.clientHeight, l.scrollHeight, l.clientHeight);
  let o = -i.scrollLeft + qr(t);
  const u = -i.scrollTop;
  return Le(l).direction === "rtl" && (o += $e(e.clientWidth, l.clientWidth) - n), {
    width: n,
    height: r,
    x: o,
    y: u
  };
}
function rc(t, e) {
  const i = Ee(t), l = Ve(t), n = i.visualViewport;
  let r = l.clientWidth, o = l.clientHeight, u = 0, s = 0;
  if (n) {
    r = n.width, o = n.height;
    const a = Zi();
    (!a || a && e === "fixed") && (u = n.offsetLeft, s = n.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: u,
    y: s
  };
}
function oc(t, e) {
  const i = it(t, !0, e === "fixed"), l = i.top + t.clientTop, n = i.left + t.clientLeft, r = We(t) ? ct(t) : Qe(1), o = t.clientWidth * r.x, u = t.clientHeight * r.y, s = n * r.x, a = l * r.y;
  return {
    width: o,
    height: u,
    x: s,
    y: a
  };
}
function ll(t, e, i) {
  let l;
  if (e === "viewport")
    l = rc(t, i);
  else if (e === "document")
    l = lc(Ve(t));
  else if (Ge(e))
    l = oc(e, i);
  else {
    const n = Hr(t);
    l = {
      ...e,
      x: e.x - n.x,
      y: e.y - n.y
    };
  }
  return Kt(l);
}
function Xr(t, e) {
  const i = kt(t);
  return i === e || !Ge(i) || ii(i) ? !1 : Le(i).position === "fixed" || Xr(i, e);
}
function sc(t, e) {
  const i = e.get(t);
  if (i)
    return i;
  let l = Et(t, [], !1).filter((u) => Ge(u) && Ke(u) !== "body"), n = null;
  const r = Le(t).position === "fixed";
  let o = r ? kt(t) : t;
  for (; Ge(o) && !ii(o); ) {
    const u = Le(o), s = Ji(o);
    !s && u.position === "fixed" && (n = null), (r ? !s && !n : !s && u.position === "static" && !!n && ["absolute", "fixed"].includes(n.position) || Lt(o) && !s && Xr(t, o)) ? l = l.filter((f) => f !== o) : n = u, o = kt(o);
  }
  return e.set(t, l), l;
}
function uc(t) {
  let {
    element: e,
    boundary: i,
    rootBoundary: l,
    strategy: n
  } = t;
  const o = [...i === "clippingAncestors" ? sc(e, this._c) : [].concat(i), l], u = o[0], s = o.reduce((a, f) => {
    const c = ll(e, f, n);
    return a.top = $e(c.top, a.top), a.right = dt(c.right, a.right), a.bottom = dt(c.bottom, a.bottom), a.left = $e(c.left, a.left), a;
  }, ll(e, u, n));
  return {
    width: s.right - s.left,
    height: s.bottom - s.top,
    x: s.left,
    y: s.top
  };
}
function ac(t) {
  const {
    width: e,
    height: i
  } = Gr(t);
  return {
    width: e,
    height: i
  };
}
function fc(t, e, i, l) {
  const n = We(e), r = Ve(e), o = i === "fixed", u = it(t, !0, o, e);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = Qe(0);
  if (n || !n && !o)
    if ((Ke(e) !== "body" || Lt(r)) && (s = ni(e)), n) {
      const m = it(e, !0, o, e);
      a.x = m.x + e.clientLeft, a.y = m.y + e.clientTop;
    } else
      r && (a.x = qr(r));
  let f = u.left + s.scrollLeft - a.x, c = u.top + s.scrollTop - a.y;
  const [d, k, g] = Vr(l);
  return d && (f += k, c += g, n && (f += e.clientLeft, c += e.clientTop)), {
    x: f,
    y: c,
    width: u.width,
    height: u.height
  };
}
function rl(t, e) {
  return !We(t) || Le(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function Qr(t, e) {
  const i = Ee(t);
  if (!We(t))
    return i;
  let l = rl(t, e);
  for (; l && xf(l) && Le(l).position === "static"; )
    l = rl(l, e);
  return l && (Ke(l) === "html" || Ke(l) === "body" && Le(l).position === "static" && !Ji(l)) ? i : l || Wr(t) || i;
}
const cc = async function(t) {
  const e = this.getOffsetParent || Qr, i = this.getDimensions;
  return {
    reference: fc(t.reference, await e(t.floating), t.strategy, t.floating),
    floating: {
      x: 0,
      y: 0,
      ...await i(t.floating)
    }
  };
};
function dc(t) {
  return Le(t).direction === "rtl";
}
const kc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ic,
  getDocumentElement: Ve,
  getClippingRect: uc,
  getOffsetParent: Qr,
  getElementRects: cc,
  getClientRects: nc,
  getDimensions: ac,
  getScale: ct,
  isElement: Ge,
  isRTL: dc
};
function gc(t, e) {
  let i = null, l;
  const n = Ve(t);
  function r() {
    var u;
    clearTimeout(l), (u = i) == null || u.disconnect(), i = null;
  }
  function o(u, s) {
    u === void 0 && (u = !1), s === void 0 && (s = 1), r();
    const {
      left: a,
      top: f,
      width: c,
      height: d
    } = t.getBoundingClientRect();
    if (u || e(), !c || !d)
      return;
    const k = Dt(f), g = Dt(n.clientWidth - (a + c)), m = Dt(n.clientHeight - (f + d)), b = Dt(a), C = {
      rootMargin: -k + "px " + -g + "px " + -m + "px " + -b + "px",
      threshold: $e(0, dt(1, s)) || 1
    };
    let w = !0;
    function v(E) {
      const O = E[0].intersectionRatio;
      if (O !== s) {
        if (!w)
          return o();
        O ? o(!1, O) : l = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      w = !1;
    }
    try {
      i = new IntersectionObserver(v, {
        ...C,
        // Handle <iframe>s
        root: n.ownerDocument
      });
    } catch {
      i = new IntersectionObserver(v, C);
    }
    i.observe(t);
  }
  return o(!0), r;
}
function ol(t, e, i, l) {
  l === void 0 && (l = {});
  const {
    ancestorScroll: n = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: s = !1
  } = l, a = xi(t), f = n || r ? [...a ? Et(a) : [], ...Et(e)] : [];
  f.forEach((p) => {
    n && p.addEventListener("scroll", i, {
      passive: !0
    }), r && p.addEventListener("resize", i);
  });
  const c = a && u ? gc(a, i) : null;
  let d = -1, k = null;
  o && (k = new ResizeObserver((p) => {
    let [C] = p;
    C && C.target === a && k && (k.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var w;
      (w = k) == null || w.observe(e);
    })), i();
  }), a && !s && k.observe(a), k.observe(e));
  let g, m = s ? it(t) : null;
  s && b();
  function b() {
    const p = it(t);
    m && (p.x !== m.x || p.y !== m.y || p.width !== m.width || p.height !== m.height) && i(), m = p, g = requestAnimationFrame(b);
  }
  return i(), () => {
    var p;
    f.forEach((C) => {
      n && C.removeEventListener("scroll", i), r && C.removeEventListener("resize", i);
    }), c == null || c(), (p = k) == null || p.disconnect(), k = null, s && cancelAnimationFrame(g);
  };
}
const mc = Zf, hc = Kf, bc = Qf, _c = (t, e, i) => {
  const l = /* @__PURE__ */ new Map(), n = {
    platform: kc,
    ...i
  }, r = {
    ...n.platform,
    _c: l
  };
  return Xf(t, e, {
    ...n,
    platform: r
  });
};
function sl(t) {
  let e;
  return {
    c() {
      e = L("div");
    },
    m(i, l) {
      T(i, e, l), t[23](e);
    },
    p: oe,
    d(i) {
      i && S(e), t[23](null);
    }
  };
}
function ul(t) {
  let e, i;
  const l = [
    { use: (
      /*init*/
      t[9]
    ) },
    { options: (
      /*referenceEl*/
      t[3]
    ) },
    { role: "tooltip" },
    {
      tabindex: (
        /*activeContent*/
        t[1] ? -1 : void 0
      )
    },
    /*$$restProps*/
    t[11]
  ];
  let n = {
    $$slots: { default: [pc] },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < l.length; r += 1)
    n = N(n, l[r]);
  return e = new rt({ props: n }), e.$on("focusin", function() {
    _e(Xe(
      /*activeContent*/
      t[1],
      /*showHandler*/
      t[7]
    )) && Xe(
      /*activeContent*/
      t[1],
      /*showHandler*/
      t[7]
    ).apply(this, arguments);
  }), e.$on("focusout", function() {
    _e(Xe(
      /*activeContent*/
      t[1],
      /*hideHandler*/
      t[8]
    )) && Xe(
      /*activeContent*/
      t[1],
      /*hideHandler*/
      t[8]
    ).apply(this, arguments);
  }), e.$on("mouseenter", function() {
    _e(Xe(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*showHandler*/
      t[7]
    )) && Xe(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*showHandler*/
      t[7]
    ).apply(this, arguments);
  }), e.$on("mouseleave", function() {
    _e(Xe(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*hideHandler*/
      t[8]
    )) && Xe(
      /*activeContent*/
      t[1] && !/*clickable*/
      t[4],
      /*hideHandler*/
      t[8]
    ).apply(this, arguments);
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(r, o) {
      X(e, r, o), i = !0;
    },
    p(r, o) {
      t = r;
      const u = o[0] & /*init, referenceEl, activeContent, $$restProps*/
      2570 ? fe(l, [
        o[0] & /*init*/
        512 && { use: (
          /*init*/
          t[9]
        ) },
        o[0] & /*referenceEl*/
        8 && { options: (
          /*referenceEl*/
          t[3]
        ) },
        l[2],
        o[0] & /*activeContent*/
        2 && {
          tabindex: (
            /*activeContent*/
            t[1] ? -1 : void 0
          )
        },
        o[0] & /*$$restProps*/
        2048 && Ae(
          /*$$restProps*/
          t[11]
        )
      ]) : {};
      o[0] & /*$$scope, arrowClass, arrow*/
      16777284 && (u.$$scope = { dirty: o, ctx: t }), e.$set(u);
    },
    i(r) {
      i || (_(e.$$.fragment, r), i = !0);
    },
    o(r) {
      y(e.$$.fragment, r), i = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function al(t) {
  let e, i, l;
  return {
    c() {
      e = L("div"), h(
        e,
        "class",
        /*arrowClass*/
        t[6]
      );
    },
    m(n, r) {
      T(n, e, r), i || (l = Be(
        /*initArrow*/
        t[10].call(null, e)
      ), i = !0);
    },
    p(n, r) {
      r[0] & /*arrowClass*/
      64 && h(
        e,
        "class",
        /*arrowClass*/
        n[6]
      );
    },
    d(n) {
      n && S(e), i = !1, l();
    }
  };
}
function pc(t) {
  let e, i, l;
  const n = (
    /*#slots*/
    t[22].default
  ), r = Y(
    n,
    t,
    /*$$scope*/
    t[24],
    null
  );
  let o = (
    /*arrow*/
    t[2] && al(t)
  );
  return {
    c() {
      r && r.c(), e = G(), o && o.c(), i = ue();
    },
    m(u, s) {
      r && r.m(u, s), T(u, e, s), o && o.m(u, s), T(u, i, s), l = !0;
    },
    p(u, s) {
      r && r.p && (!l || s[0] & /*$$scope*/
      16777216) && Z(
        r,
        n,
        u,
        /*$$scope*/
        u[24],
        l ? J(
          n,
          /*$$scope*/
          u[24],
          s,
          null
        ) : x(
          /*$$scope*/
          u[24]
        ),
        null
      ), /*arrow*/
      u[2] ? o ? o.p(u, s) : (o = al(u), o.c(), o.m(i.parentNode, i)) : o && (o.d(1), o = null);
    },
    i(u) {
      l || (_(r, u), l = !0);
    },
    o(u) {
      y(r, u), l = !1;
    },
    d(u) {
      u && (S(e), S(i)), r && r.d(u), o && o.d(u);
    }
  };
}
function yc(t) {
  let e, i, l, n = !/*referenceEl*/
  t[3] && sl(t), r = (
    /*open*/
    t[0] && /*referenceEl*/
    t[3] && ul(t)
  );
  return {
    c() {
      n && n.c(), e = G(), r && r.c(), i = ue();
    },
    m(o, u) {
      n && n.m(o, u), T(o, e, u), r && r.m(o, u), T(o, i, u), l = !0;
    },
    p(o, u) {
      /*referenceEl*/
      o[3] ? n && (n.d(1), n = null) : n ? n.p(o, u) : (n = sl(o), n.c(), n.m(e.parentNode, e)), /*open*/
      o[0] && /*referenceEl*/
      o[3] ? r ? (r.p(o, u), u[0] & /*open, referenceEl*/
      9 && _(r, 1)) : (r = ul(o), r.c(), _(r, 1), r.m(i.parentNode, i)) : r && (le(), y(r, 1, 1, () => {
        r = null;
      }), re());
    },
    i(o) {
      l || (_(r), l = !0);
    },
    o(o) {
      y(r), l = !1;
    },
    d(o) {
      o && (S(e), S(i)), n && n.d(o), r && r.d(o);
    }
  };
}
function Xe(t, e) {
  return t ? e : () => {
  };
}
function vc(t, e, i) {
  let l;
  const n = [
    "activeContent",
    "arrow",
    "offset",
    "placement",
    "trigger",
    "triggeredBy",
    "reference",
    "strategy",
    "open",
    "yOnly",
    "middlewares"
  ];
  let r = ne(e, n), { $$slots: o = {}, $$scope: u } = e, { activeContent: s = !1 } = e, { arrow: a = !0 } = e, { offset: f = 8 } = e, { placement: c = "top" } = e, { trigger: d = "hover" } = e, { triggeredBy: k = void 0 } = e, { reference: g = void 0 } = e, { strategy: m = "absolute" } = e, { open: b = !1 } = e, { yOnly: p = !1 } = e, { middlewares: C = [hc(), mc()] } = e;
  const w = He();
  let v, E, O, I, U, $ = [], W = !1;
  const P = () => (W = !0, setTimeout(() => W = !1, 250)), H = (ee) => {
    E === void 0 && console.error("trigger undefined"), !g && $.includes(ee.target) && E !== ee.target && (i(3, E = ee.target), P()), v && ee.type === "focusin" && !b && P(), i(0, b = v && ee.type === "click" && !W ? !b : !0);
  }, me = (ee) => ee.matches(":hover"), z = (ee) => ee.contains(document.activeElement), j = (ee) => ee != null ? `${ee}px` : "", M = (ee) => {
    s ? setTimeout(
      () => {
        const we = [E, O, ...$].filter(Boolean);
        ee.type === "mouseleave" && we.some(me) || ee.type === "focusout" && we.some(z) || i(0, b = !1);
      },
      100
    ) : i(0, b = !1);
  };
  let se;
  const de = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function ve() {
    _c(E, O, { placement: c, strategy: m, middleware: l }).then(({ x: ee, y: we, middlewareData: Te, placement: q, strategy: li }) => {
      O.style.position = li, O.style.left = p ? "0" : j(ee), O.style.top = j(we), Te.arrow && I instanceof HTMLDivElement && (i(20, I.style.left = j(Te.arrow.x), I), i(20, I.style.top = j(Te.arrow.y), I), i(21, se = de[q.split("-")[0]]), i(20, I.style[se] = j(-I.offsetWidth / 2 - (e.border ? 1 : 0)), I));
    });
  }
  function Ne(ee, we) {
    O = ee;
    let Te = ol(we, O, ve);
    return {
      update(q) {
        Te(), Te = ol(q, O, ve);
      },
      destroy() {
        Te();
      }
    };
  }
  Je(() => {
    const ee = [
      ["focusin", H, !0],
      ["focusout", M, !0],
      ["click", H, v],
      ["mouseenter", H, !v],
      ["mouseleave", M, !v]
    ];
    return k ? $ = [...document.querySelectorAll(k)] : $ = U.previousElementSibling ? [U.previousElementSibling] : [], $.length || console.error("No triggers found."), $.forEach((we) => {
      we.tabIndex < 0 && (we.tabIndex = 0);
      for (const [Te, q, li] of ee)
        li && we.addEventListener(Te, q);
    }), g ? (i(3, E = document.querySelector(g) ?? document.body), E === document.body ? console.error(`Popup reference not found: '${g}'`) : (E.addEventListener("focusout", M), v || E.addEventListener("mouseleave", M))) : i(3, E = $[0]), () => {
      $.forEach((we) => {
        if (we)
          for (const [Te, q] of ee)
            we.removeEventListener(Te, q);
      }), E && (E.removeEventListener("focusout", M), E.removeEventListener("mouseleave", M));
    };
  });
  let Oe;
  function Re(ee) {
    return i(20, I = ee), {
      destroy() {
        i(20, I = null);
      }
    };
  }
  function ye(ee) {
    Se[ee ? "unshift" : "push"](() => {
      U = ee, i(5, U);
    });
  }
  return t.$$set = (ee) => {
    i(36, e = N(N({}, e), B(ee))), i(11, r = ne(e, n)), "activeContent" in ee && i(1, s = ee.activeContent), "arrow" in ee && i(2, a = ee.arrow), "offset" in ee && i(12, f = ee.offset), "placement" in ee && i(13, c = ee.placement), "trigger" in ee && i(14, d = ee.trigger), "triggeredBy" in ee && i(15, k = ee.triggeredBy), "reference" in ee && i(16, g = ee.reference), "strategy" in ee && i(17, m = ee.strategy), "open" in ee && i(0, b = ee.open), "yOnly" in ee && i(18, p = ee.yOnly), "middlewares" in ee && i(19, C = ee.middlewares), "$$scope" in ee && i(24, u = ee.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*trigger*/
    16384 && i(4, v = d === "click"), t.$$.dirty[0] & /*open*/
    1 && w("show", b), t.$$.dirty[0] & /*placement, referenceEl*/
    8200 && c && (i(3, E), i(13, c)), t.$$.dirty[0] & /*middlewares, offset, arrowEl*/
    1576960 && (l = [
      ...C,
      Jf(+f),
      I && bc({ element: I, padding: 10 })
    ]), i(6, Oe = dr("uikit-absolute uikit-pointer-events-none uikit-block uikit-w-[10px] uikit-h-[10px] uikit-rotate-45 uikit-bg-inherit uikit-border-inherit", e.border && se === "bottom" && "uikit-border-b uikit-border-e", e.border && se === "top" && "uikit-border-t uikit-border-s ", e.border && se === "right" && "uikit-border-t uikit-border-e ", e.border && se === "left" && "uikit-border-b uikit-border-s "));
  }, e = B(e), [
    b,
    s,
    a,
    E,
    v,
    U,
    Oe,
    H,
    M,
    Ne,
    Re,
    r,
    f,
    c,
    d,
    k,
    g,
    m,
    p,
    C,
    I,
    se,
    o,
    ye,
    u
  ];
}
class Kr extends ie {
  constructor(e) {
    super(), te(
      this,
      e,
      vc,
      yc,
      V,
      {
        activeContent: 1,
        arrow: 2,
        offset: 12,
        placement: 13,
        trigger: 14,
        triggeredBy: 15,
        reference: 16,
        strategy: 17,
        open: 0,
        yOnly: 18,
        middlewares: 19
      },
      null,
      [-1, -1]
    );
  }
}
const wc = (t) => ({}), fl = (t) => ({}), Cc = (t) => ({}), cl = (t) => ({});
function dl(t) {
  let e, i;
  const l = (
    /*#slots*/
    t[12].header
  ), n = Y(
    l,
    t,
    /*$$scope*/
    t[15],
    cl
  );
  return {
    c() {
      e = L("div"), n && n.c(), h(
        e,
        "class",
        /*headerCls*/
        t[2]
      );
    },
    m(r, o) {
      T(r, e, o), n && n.m(e, null), i = !0;
    },
    p(r, o) {
      n && n.p && (!i || o & /*$$scope*/
      32768) && Z(
        n,
        l,
        r,
        /*$$scope*/
        r[15],
        i ? J(
          l,
          /*$$scope*/
          r[15],
          o,
          Cc
        ) : x(
          /*$$scope*/
          r[15]
        ),
        cl
      );
    },
    i(r) {
      i || (_(n, r), i = !0);
    },
    o(r) {
      y(n, r), i = !1;
    },
    d(r) {
      r && S(e), n && n.d(r);
    }
  };
}
function kl(t) {
  let e, i;
  const l = (
    /*#slots*/
    t[12].footer
  ), n = Y(
    l,
    t,
    /*$$scope*/
    t[15],
    fl
  );
  return {
    c() {
      e = L("div"), n && n.c(), h(
        e,
        "class",
        /*footerCls*/
        t[4]
      );
    },
    m(r, o) {
      T(r, e, o), n && n.m(e, null), i = !0;
    },
    p(r, o) {
      n && n.p && (!i || o & /*$$scope*/
      32768) && Z(
        n,
        l,
        r,
        /*$$scope*/
        r[15],
        i ? J(
          l,
          /*$$scope*/
          r[15],
          o,
          wc
        ) : x(
          /*$$scope*/
          r[15]
        ),
        fl
      );
    },
    i(r) {
      i || (_(n, r), i = !0);
    },
    o(r) {
      y(n, r), i = !1;
    },
    d(r) {
      r && S(e), n && n.d(r);
    }
  };
}
function Sc(t) {
  let e, i, l, n, r, o = (
    /*$$slots*/
    t[6].header && dl(t)
  );
  const u = (
    /*#slots*/
    t[12].default
  ), s = Y(
    u,
    t,
    /*$$scope*/
    t[15],
    null
  );
  let a = (
    /*$$slots*/
    t[6].footer && kl(t)
  );
  return {
    c() {
      o && o.c(), e = G(), i = L("ul"), s && s.c(), l = G(), a && a.c(), n = ue(), h(
        i,
        "class",
        /*ulCls*/
        t[3]
      );
    },
    m(f, c) {
      o && o.m(f, c), T(f, e, c), T(f, i, c), s && s.m(i, null), T(f, l, c), a && a.m(f, c), T(f, n, c), r = !0;
    },
    p(f, c) {
      /*$$slots*/
      f[6].header ? o ? (o.p(f, c), c & /*$$slots*/
      64 && _(o, 1)) : (o = dl(f), o.c(), _(o, 1), o.m(e.parentNode, e)) : o && (le(), y(o, 1, 1, () => {
        o = null;
      }), re()), s && s.p && (!r || c & /*$$scope*/
      32768) && Z(
        s,
        u,
        f,
        /*$$scope*/
        f[15],
        r ? J(
          u,
          /*$$scope*/
          f[15],
          c,
          null
        ) : x(
          /*$$scope*/
          f[15]
        ),
        null
      ), /*$$slots*/
      f[6].footer ? a ? (a.p(f, c), c & /*$$slots*/
      64 && _(a, 1)) : (a = kl(f), a.c(), _(a, 1), a.m(n.parentNode, n)) : a && (le(), y(a, 1, 1, () => {
        a = null;
      }), re());
    },
    i(f) {
      r || (_(o), _(s, f), _(a), r = !0);
    },
    o(f) {
      y(o), y(s, f), y(a), r = !1;
    },
    d(f) {
      f && (S(e), S(i), S(l), S(n)), o && o.d(f), s && s.d(f), a && a.d(f);
    }
  };
}
function Tc(t) {
  let e, i, l;
  const n = [
    { activeContent: !0 },
    /*$$restProps*/
    t[5],
    { class: (
      /*containerCls*/
      t[1]
    ) }
  ];
  function r(u) {
    t[13](u);
  }
  let o = {
    $$slots: { default: [Sc] },
    $$scope: { ctx: t }
  };
  for (let u = 0; u < n.length; u += 1)
    o = N(o, n[u]);
  return (
    /*open*/
    t[0] !== void 0 && (o.open = /*open*/
    t[0]), e = new Kr({ props: o }), Se.push(() => Ot(e, "open", r)), e.$on(
      "show",
      /*show_handler*/
      t[14]
    ), {
      c() {
        K(e.$$.fragment);
      },
      m(u, s) {
        X(e, u, s), l = !0;
      },
      p(u, [s]) {
        const a = s & /*$$restProps, containerCls*/
        34 ? fe(n, [
          n[0],
          s & /*$$restProps*/
          32 && Ae(
            /*$$restProps*/
            u[5]
          ),
          s & /*containerCls*/
          2 && { class: (
            /*containerCls*/
            u[1]
          ) }
        ]) : {};
        s & /*$$scope, $$slots*/
        32832 && (a.$$scope = { dirty: s, ctx: u }), !i && s & /*open*/
        1 && (i = !0, a.open = /*open*/
        u[0], At(() => i = !1)), e.$set(a);
      },
      i(u) {
        l || (_(e.$$.fragment, u), l = !0);
      },
      o(u) {
        y(e.$$.fragment, u), l = !1;
      },
      d(u) {
        Q(e, u);
      }
    }
  );
}
function Ec(t, e, i) {
  const l = ["activeUrl", "open", "containerClass", "headerClass", "footerClass", "activeClass"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e;
  const u = Ye(r), s = nt("");
  let { activeUrl: a = "" } = e, { open: f = !1 } = e, { containerClass: c = "uikit-divide-y z-50" } = e, { headerClass: d = "uikit-py-1 uikit-overflow-hidden uikit-rounded-t-lg" } = e, { footerClass: k = "uikit-py-1 uikit-overflow-hidden uikit-rounded-b-lg" } = e, { activeClass: g = "uikit-text-primary-700 dark:uikit-text-primary-700 hover:uikit-text-primary-900 dark:hover:uikit-text-primary-900" } = e, m = A(g, e.classActive);
  Ue("DropdownType", { activeClass: m }), Ue("activeUrl", s);
  let b = A(c, e.classContainer), p = A(d, e.classHeader), C = A("py-1", e.class), w = A(k, e.classFooter);
  function v(O) {
    f = O, i(0, f);
  }
  function E(O) {
    F.call(this, t, O);
  }
  return t.$$set = (O) => {
    i(18, e = N(N({}, e), B(O))), i(5, n = ne(e, l)), "activeUrl" in O && i(7, a = O.activeUrl), "open" in O && i(0, f = O.open), "containerClass" in O && i(8, c = O.containerClass), "headerClass" in O && i(9, d = O.headerClass), "footerClass" in O && i(10, k = O.footerClass), "activeClass" in O && i(11, g = O.activeClass), "$$scope" in O && i(15, o = O.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*activeUrl*/
    128 && s.set(a), i(5, n.arrow = n.arrow ?? !1, n), i(5, n.trigger = n.trigger ?? "click", n), i(5, n.placement = n.placement ?? "bottom", n), i(5, n.color = n.color ?? "dropdown", n), i(5, n.shadow = n.shadow ?? !0, n), i(5, n.rounded = n.rounded ?? !0, n);
  }, e = B(e), [
    f,
    b,
    p,
    C,
    w,
    n,
    u,
    a,
    c,
    d,
    k,
    g,
    r,
    v,
    E,
    o
  ];
}
class $i extends ie {
  constructor(e) {
    super(), te(this, e, Ec, Tc, V, {
      activeUrl: 7,
      open: 0,
      containerClass: 8,
      headerClass: 9,
      footerClass: 10,
      activeClass: 11
    });
  }
}
function Ic(t) {
  let e;
  const i = (
    /*#slots*/
    t[5].default
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[4],
    null
  );
  return {
    c() {
      l && l.c();
    },
    m(n, r) {
      l && l.m(n, r), e = !0;
    },
    p(n, r) {
      l && l.p && (!e || r & /*$$scope*/
      16) && Z(
        l,
        i,
        n,
        /*$$scope*/
        n[4],
        e ? J(
          i,
          /*$$scope*/
          n[4],
          r,
          null
        ) : x(
          /*$$scope*/
          n[4]
        ),
        null
      );
    },
    i(n) {
      e || (_(l, n), e = !0);
    },
    o(n) {
      y(l, n), e = !1;
    },
    d(n) {
      l && l.d(n);
    }
  };
}
function Ac(t) {
  let e = (
    /*tag*/
    t[0]
  ), i, l, n = (
    /*tag*/
    t[0] && di(t)
  );
  return {
    c() {
      n && n.c(), i = ue();
    },
    m(r, o) {
      n && n.m(r, o), T(r, i, o), l = !0;
    },
    p(r, o) {
      /*tag*/
      r[0] ? e ? V(
        e,
        /*tag*/
        r[0]
      ) ? (n.d(1), n = di(r), e = /*tag*/
      r[0], n.c(), n.m(i.parentNode, i)) : n.p(r, o) : (n = di(r), e = /*tag*/
      r[0], n.c(), n.m(i.parentNode, i)) : e && (n.d(1), n = null, e = /*tag*/
      r[0]);
    },
    i(r) {
      l || (_(n, r), l = !0);
    },
    o(r) {
      y(n, r), l = !1;
    },
    d(r) {
      r && S(i), n && n.d(r);
    }
  };
}
function di(t) {
  let e, i, l, n;
  const r = (
    /*#slots*/
    t[5].default
  ), o = Y(
    r,
    t,
    /*$$scope*/
    t[4],
    null
  );
  let u = [
    /*$$restProps*/
    t[3]
  ], s = {};
  for (let a = 0; a < u.length; a += 1)
    s = N(s, u[a]);
  return {
    c() {
      e = L(
        /*tag*/
        t[0]
      ), o && o.c(), Fe(
        /*tag*/
        t[0]
      )(e, s);
    },
    m(a, f) {
      T(a, e, f), o && o.m(e, null), i = !0, l || (n = Be(
        /*use*/
        t[2].call(null, e)
      ), l = !0);
    },
    p(a, f) {
      o && o.p && (!i || f & /*$$scope*/
      16) && Z(
        o,
        r,
        a,
        /*$$scope*/
        a[4],
        i ? J(
          r,
          /*$$scope*/
          a[4],
          f,
          null
        ) : x(
          /*$$scope*/
          a[4]
        ),
        null
      ), Fe(
        /*tag*/
        a[0]
      )(e, s = fe(u, [f & /*$$restProps*/
      8 && /*$$restProps*/
      a[3]]));
    },
    i(a) {
      i || (_(o, a), i = !0);
    },
    o(a) {
      y(o, a), i = !1;
    },
    d(a) {
      a && S(e), o && o.d(a), l = !1, n();
    }
  };
}
function Oc(t) {
  let e, i, l, n;
  const r = [Ac, Ic], o = [];
  function u(s, a) {
    return (
      /*show*/
      s[1] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = r[e](t), {
    c() {
      i.c(), l = ue();
    },
    m(s, a) {
      o[e].m(s, a), T(s, l, a), n = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (le(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), re(), i = o[e], i ? i.p(s, a) : (i = o[e] = r[e](s), i.c()), _(i, 1), i.m(l.parentNode, l));
    },
    i(s) {
      n || (_(i), n = !0);
    },
    o(s) {
      y(i), n = !1;
    },
    d(s) {
      s && S(l), o[e].d(s);
    }
  };
}
function Pc(t, e, i) {
  const l = ["tag", "show", "use"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e, { tag: u = "div" } = e, { show: s } = e, { use: a = () => {
  } } = e;
  return t.$$set = (f) => {
    e = N(N({}, e), B(f)), i(3, n = ne(e, l)), "tag" in f && i(0, u = f.tag), "show" in f && i(1, s = f.show), "use" in f && i(2, a = f.use), "$$scope" in f && i(4, o = f.$$scope);
  }, [u, s, a, n, o, r];
}
class Mc extends ie {
  constructor(e) {
    super(), te(this, e, Pc, Oc, V, { tag: 0, show: 1, use: 2 });
  }
}
function ki(t) {
  let e, i, l, n, r, o;
  const u = (
    /*#slots*/
    t[10].default
  ), s = Y(
    u,
    t,
    /*$$scope*/
    t[19],
    null
  );
  let a = [
    { href: (
      /*href*/
      t[0]
    ) },
    {
      type: i = /*href*/
      t[0] ? void 0 : "button"
    },
    {
      role: l = /*href*/
      t[0] ? "link" : "button"
    },
    /*$$restProps*/
    t[5],
    { class: (
      /*liClass*/
      t[3]
    ) }
  ], f = {};
  for (let c = 0; c < a.length; c += 1)
    f = N(f, a[c]);
  return {
    c() {
      e = L(
        /*href*/
        t[0] ? "a" : "button"
      ), s && s.c(), Fe(
        /*href*/
        t[0] ? "a" : "button"
      )(e, f);
    },
    m(c, d) {
      T(c, e, d), s && s.m(e, null), n = !0, r || (o = [
        D(
          e,
          "click",
          /*click_handler*/
          t[18]
        ),
        D(
          e,
          "change",
          /*change_handler*/
          t[11]
        ),
        D(
          e,
          "keydown",
          /*keydown_handler*/
          t[12]
        ),
        D(
          e,
          "keyup",
          /*keyup_handler*/
          t[13]
        ),
        D(
          e,
          "focus",
          /*focus_handler*/
          t[14]
        ),
        D(
          e,
          "blur",
          /*blur_handler*/
          t[15]
        ),
        D(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[16]
        ),
        D(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[17]
        )
      ], r = !0);
    },
    p(c, d) {
      s && s.p && (!n || d & /*$$scope*/
      524288) && Z(
        s,
        u,
        c,
        /*$$scope*/
        c[19],
        n ? J(
          u,
          /*$$scope*/
          c[19],
          d,
          null
        ) : x(
          /*$$scope*/
          c[19]
        ),
        null
      ), Fe(
        /*href*/
        c[0] ? "a" : "button"
      )(e, f = fe(a, [
        (!n || d & /*href*/
        1) && { href: (
          /*href*/
          c[0]
        ) },
        (!n || d & /*href*/
        1 && i !== (i = /*href*/
        c[0] ? void 0 : "button")) && { type: i },
        (!n || d & /*href*/
        1 && l !== (l = /*href*/
        c[0] ? "link" : "button")) && { role: l },
        d & /*$$restProps*/
        32 && /*$$restProps*/
        c[5],
        (!n || d & /*liClass*/
        8) && { class: (
          /*liClass*/
          c[3]
        ) }
      ]));
    },
    i(c) {
      n || (_(s, c), n = !0);
    },
    o(c) {
      y(s, c), n = !1;
    },
    d(c) {
      c && S(e), s && s.d(c), r = !1, Ce(o);
    }
  };
}
function Lc(t) {
  let e = (
    /*href*/
    t[0] ? "a" : "button"
  ), i, l, n = (
    /*href*/
    (t[0] ? "a" : "button") && ki(t)
  );
  return {
    c() {
      n && n.c(), i = ue();
    },
    m(r, o) {
      n && n.m(r, o), T(r, i, o), l = !0;
    },
    p(r, o) {
      /*href*/
      r[0], e ? V(
        e,
        /*href*/
        r[0] ? "a" : "button"
      ) ? (n.d(1), n = ki(r), e = /*href*/
      r[0] ? "a" : "button", n.c(), n.m(i.parentNode, i)) : n.p(r, o) : (n = ki(r), e = /*href*/
      r[0] ? "a" : "button", n.c(), n.m(i.parentNode, i));
    },
    i(r) {
      l || (_(n, r), l = !0);
    },
    o(r) {
      y(n, r), l = !1;
    },
    d(r) {
      r && S(i), n && n.d(r);
    }
  };
}
function Nc(t) {
  let e, i;
  return e = new Mc({
    props: {
      tag: "li",
      show: (
        /*wrap*/
        t[2]
      ),
      use: (
        /*init*/
        t[4]
      ),
      $$slots: { default: [Lc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, [n]) {
      const r = {};
      n & /*wrap*/
      4 && (r.show = /*wrap*/
      l[2]), n & /*$$scope, href, $$restProps, liClass, onclick*/
      524331 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function zc(t, e, i) {
  let l, n;
  const r = ["defaultClass", "href", "activeClass", "onclick"];
  let o = ne(e, r), { $$slots: u = {}, $$scope: s } = e, { defaultClass: a = "uikit-font-medium uikit-py-2 uikit-px-4 uikit-text-sm hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-600" } = e, { href: f = void 0 } = e, { activeClass: c = void 0 } = e, { onclick: d = void 0 } = e;
  const k = Pe("DropdownType") ?? {}, g = Pe("activeUrl");
  let m = "";
  g.subscribe((W) => {
    i(8, m = W);
  });
  let b = !0;
  function p(W) {
    var P;
    i(2, b = ((P = W.parentElement) == null ? void 0 : P.tagName) === "UL");
  }
  function C(W) {
    F.call(this, t, W);
  }
  function w(W) {
    F.call(this, t, W);
  }
  function v(W) {
    F.call(this, t, W);
  }
  function E(W) {
    F.call(this, t, W);
  }
  function O(W) {
    F.call(this, t, W);
  }
  function I(W) {
    F.call(this, t, W);
  }
  function U(W) {
    F.call(this, t, W);
  }
  const $ = () => {
    d && d();
  };
  return t.$$set = (W) => {
    i(22, e = N(N({}, e), B(W))), i(5, o = ne(e, r)), "defaultClass" in W && i(6, a = W.defaultClass), "href" in W && i(0, f = W.href), "activeClass" in W && i(7, c = W.activeClass), "onclick" in W && i(1, d = W.onclick), "$$scope" in W && i(19, s = W.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*sidebarUrl, href*/
    257 && i(9, l = m ? f === m : !1), i(3, n = A(a, f ? "uikit-block" : "uikit-w-full uikit-text-left", l && (c ?? k.activeClass), e.class));
  }, e = B(e), [
    f,
    d,
    b,
    n,
    p,
    o,
    a,
    c,
    m,
    l,
    u,
    C,
    w,
    v,
    E,
    O,
    I,
    U,
    $,
    s
  ];
}
class en extends ie {
  constructor(e) {
    super(), te(this, e, zc, Nc, V, {
      defaultClass: 6,
      href: 0,
      activeClass: 7,
      onclick: 1
    });
  }
}
function Rc(t) {
  let e = (
    /*tag*/
    t[2]
  ), i, l, n = (
    /*tag*/
    t[2] && gi(t)
  );
  return {
    c() {
      n && n.c(), i = ue();
    },
    m(r, o) {
      n && n.m(r, o), T(r, i, o), l = !0;
    },
    p(r, o) {
      /*tag*/
      r[2] ? e ? V(
        e,
        /*tag*/
        r[2]
      ) ? (n.d(1), n = gi(r), e = /*tag*/
      r[2], n.c(), n.m(i.parentNode, i)) : n.p(r, o) : (n = gi(r), e = /*tag*/
      r[2], n.c(), n.m(i.parentNode, i)) : e && (n.d(1), n = null, e = /*tag*/
      r[2]);
    },
    i(r) {
      l || (_(n, r), l = !0);
    },
    o(r) {
      y(n, r), l = !1;
    },
    d(r) {
      r && S(i), n && n.d(r);
    }
  };
}
function Dc(t) {
  let e, i, l, n;
  const r = (
    /*#slots*/
    t[12].default
  ), o = Y(
    r,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let u = [
    { type: (
      /*type*/
      t[1]
    ) },
    /*$$restProps*/
    t[4],
    { class: (
      /*buttonClass*/
      t[3]
    ) }
  ], s = {};
  for (let a = 0; a < u.length; a += 1)
    s = N(s, u[a]);
  return {
    c() {
      e = L("button"), o && o.c(), ae(e, s);
    },
    m(a, f) {
      T(a, e, f), o && o.m(e, null), e.autofocus && e.focus(), i = !0, l || (n = [
        D(
          e,
          "click",
          /*click_handler_1*/
          t[22]
        ),
        D(
          e,
          "change",
          /*change_handler_1*/
          t[23]
        ),
        D(
          e,
          "keydown",
          /*keydown_handler_1*/
          t[24]
        ),
        D(
          e,
          "keyup",
          /*keyup_handler_1*/
          t[25]
        ),
        D(
          e,
          "touchstart",
          /*touchstart_handler_1*/
          t[26],
          { passive: !0 }
        ),
        D(
          e,
          "touchend",
          /*touchend_handler_1*/
          t[27]
        ),
        D(
          e,
          "touchcancel",
          /*touchcancel_handler_1*/
          t[28]
        ),
        D(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[29]
        ),
        D(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[30]
        )
      ], l = !0);
    },
    p(a, f) {
      o && o.p && (!i || f[0] & /*$$scope*/
      2048) && Z(
        o,
        r,
        a,
        /*$$scope*/
        a[11],
        i ? J(
          r,
          /*$$scope*/
          a[11],
          f,
          null
        ) : x(
          /*$$scope*/
          a[11]
        ),
        null
      ), ae(e, s = fe(u, [
        (!i || f[0] & /*type*/
        2) && { type: (
          /*type*/
          a[1]
        ) },
        f[0] & /*$$restProps*/
        16 && /*$$restProps*/
        a[4],
        (!i || f[0] & /*buttonClass*/
        8) && { class: (
          /*buttonClass*/
          a[3]
        ) }
      ]));
    },
    i(a) {
      i || (_(o, a), i = !0);
    },
    o(a) {
      y(o, a), i = !1;
    },
    d(a) {
      a && S(e), o && o.d(a), l = !1, Ce(n);
    }
  };
}
function Bc(t) {
  let e, i, l, n;
  const r = (
    /*#slots*/
    t[12].default
  ), o = Y(
    r,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let u = [
    { href: (
      /*href*/
      t[0]
    ) },
    /*$$restProps*/
    t[4],
    { class: (
      /*buttonClass*/
      t[3]
    ) },
    { role: "button" }
  ], s = {};
  for (let a = 0; a < u.length; a += 1)
    s = N(s, u[a]);
  return {
    c() {
      e = L("a"), o && o.c(), ae(e, s);
    },
    m(a, f) {
      T(a, e, f), o && o.m(e, null), i = !0, l || (n = [
        D(
          e,
          "click",
          /*click_handler*/
          t[13]
        ),
        D(
          e,
          "change",
          /*change_handler*/
          t[14]
        ),
        D(
          e,
          "keydown",
          /*keydown_handler*/
          t[15]
        ),
        D(
          e,
          "keyup",
          /*keyup_handler*/
          t[16]
        ),
        D(
          e,
          "touchstart",
          /*touchstart_handler*/
          t[17],
          { passive: !0 }
        ),
        D(
          e,
          "touchend",
          /*touchend_handler*/
          t[18]
        ),
        D(
          e,
          "touchcancel",
          /*touchcancel_handler*/
          t[19]
        ),
        D(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[20]
        ),
        D(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[21]
        )
      ], l = !0);
    },
    p(a, f) {
      o && o.p && (!i || f[0] & /*$$scope*/
      2048) && Z(
        o,
        r,
        a,
        /*$$scope*/
        a[11],
        i ? J(
          r,
          /*$$scope*/
          a[11],
          f,
          null
        ) : x(
          /*$$scope*/
          a[11]
        ),
        null
      ), ae(e, s = fe(u, [
        (!i || f[0] & /*href*/
        1) && { href: (
          /*href*/
          a[0]
        ) },
        f[0] & /*$$restProps*/
        16 && /*$$restProps*/
        a[4],
        (!i || f[0] & /*buttonClass*/
        8) && { class: (
          /*buttonClass*/
          a[3]
        ) },
        { role: "button" }
      ]));
    },
    i(a) {
      i || (_(o, a), i = !0);
    },
    o(a) {
      y(o, a), i = !1;
    },
    d(a) {
      a && S(e), o && o.d(a), l = !1, Ce(n);
    }
  };
}
function gi(t) {
  let e, i;
  const l = (
    /*#slots*/
    t[12].default
  ), n = Y(
    l,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let r = [
    /*$$restProps*/
    t[4],
    { class: (
      /*buttonClass*/
      t[3]
    ) }
  ], o = {};
  for (let u = 0; u < r.length; u += 1)
    o = N(o, r[u]);
  return {
    c() {
      e = L(
        /*tag*/
        t[2]
      ), n && n.c(), Fe(
        /*tag*/
        t[2]
      )(e, o);
    },
    m(u, s) {
      T(u, e, s), n && n.m(e, null), i = !0;
    },
    p(u, s) {
      n && n.p && (!i || s[0] & /*$$scope*/
      2048) && Z(
        n,
        l,
        u,
        /*$$scope*/
        u[11],
        i ? J(
          l,
          /*$$scope*/
          u[11],
          s,
          null
        ) : x(
          /*$$scope*/
          u[11]
        ),
        null
      ), Fe(
        /*tag*/
        u[2]
      )(e, o = fe(r, [
        s[0] & /*$$restProps*/
        16 && /*$$restProps*/
        u[4],
        (!i || s[0] & /*buttonClass*/
        8) && { class: (
          /*buttonClass*/
          u[3]
        ) }
      ]));
    },
    i(u) {
      i || (_(n, u), i = !0);
    },
    o(u) {
      y(n, u), i = !1;
    },
    d(u) {
      u && S(e), n && n.d(u);
    }
  };
}
function Fc(t) {
  let e, i, l, n;
  const r = [Bc, Dc, Rc], o = [];
  function u(s, a) {
    return (
      /*href*/
      s[0] ? 0 : (
        /*tag*/
        s[2] === "button" ? 1 : 2
      )
    );
  }
  return e = u(t), i = o[e] = r[e](t), {
    c() {
      i.c(), l = ue();
    },
    m(s, a) {
      o[e].m(s, a), T(s, l, a), n = !0;
    },
    p(s, a) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (le(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), re(), i = o[e], i ? i.p(s, a) : (i = o[e] = r[e](s), i.c()), _(i, 1), i.m(l.parentNode, l));
    },
    i(s) {
      n || (_(i), n = !0);
    },
    o(s) {
      y(i), n = !1;
    },
    d(s) {
      s && S(l), o[e].d(s);
    }
  };
}
function jc(t, e, i) {
  const l = ["pill", "outline", "size", "href", "type", "color", "shadow", "tag", "checked"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e;
  const u = Pe("group");
  let { pill: s = !1 } = e, { outline: a = !1 } = e, { size: f = u ? "sm" : "md" } = e, { href: c = void 0 } = e, { type: d = "button" } = e, { color: k = u ? a ? "dark" : "alternative" : "primary" } = e, { shadow: g = !1 } = e, { tag: m = "button" } = e, { checked: b = void 0 } = e;
  const p = {
    alternative: "uikit-text-gray-900 uikit-bg-white uikit-border uikit-border-gray-200 hover:uikit-bg-gray-100 dark:uikit-bg-gray-800 dark:uikit-text-gray-400 hover:uikit-text-primary-700 focus-within:uikit-text-primary-700 dark:focus-within:uikit-text-white dark:hover:uikit-text-white",
    blue: "uikit-text-white uikit-bg-blue-700 hover:uikit-bg-blue-800 dark:uikit-bg-blue-600 dark:hover:uikit-bg-blue-700",
    dark: "uikit-text-white uikit-bg-gray-800 hover:uikit-bg-gray-900 dark:uikit-bg-gray-800 dark:hover:uikit-bg-gray-700",
    green: "uikit-text-white uikit-bg-green-700 hover:uikit-bg-green-800 dark:uikit-bg-green-600 dark:hover:uikit-bg-green-700",
    light: "uikit-text-gray-900 uikit-bg-white uikit-border uikit-border-gray-300 hover:uikit-bg-gray-100 dark:uikit-bg-gray-800 dark:uikit-text-white dark:uikit-border-gray-600 dark:hover:uikit-bg-gray-700 dark:hover:uikit-border-gray-600",
    primary: "uikit-text-white uikit-bg-primary-700 hover:uikit-bg-primary-800 dark:uikit-bg-primary-600 dark:hover:uikit-bg-primary-700",
    purple: "uikit-text-white uikit-bg-purple-700 hover:uikit-bg-purple-800 dark:uikit-bg-purple-600 dark:hover:uikit-bg-purple-700",
    red: "uikit-text-white uikit-bg-red-700 hover:uikit-bg-red-800 dark:uikit-bg-red-600 dark:hover:uikit-bg-red-700",
    yellow: "uikit-text-white uikit-bg-yellow-400 hover:uikit-bg-yellow-500 ",
    none: ""
  }, C = {
    alternative: "uikit-text-primary-700 uikit-border dark:uikit-text-primary-500 uikit-bg-gray-100 dark:uikit-bg-gray-700 uikit-border-gray-300 uikit-shadow-gray-300 dark:uikit-shadow-gray-800 uikit-shadow-inner",
    blue: "uikit-text-blue-900 uikit-bg-blue-400 dark:uikit-bg-blue-500 uikit-shadow-blue-700 dark:uikit-shadow-blue-800 uikit-shadow-inner",
    dark: "uikit-text-white uikit-bg-gray-500 dark:uikit-bg-gray-600 uikit-shadow-gray-800 dark:uikit-shadow-gray-900 uikit-shadow-inner",
    green: "uikit-text-green-900 uikit-bg-green-400 dark:uikit-bg-green-500 uikit-shadow-green-700 dark:uikit-shadow-green-800 uikit-shadow-inner",
    light: "uikit-text-gray-900 uikit-bg-gray-100 uikit-border uikit-border-gray-300 dark:uikit-bg-gray-500 dark:uikit-text-gray-900 dark:uikit-border-gray-700 uikit-shadow-gray-300 dark:uikit-shadow-gray-700 uikit-shadow-inner",
    primary: "uikit-text-primary-900 uikit-bg-primary-400 dark:uikit-bg-primary-500 uikit-shadow-primary-700 dark:uikit-shadow-primary-800 uikit-shadow-inner",
    purple: "uikit-text-purple-900 uikit-bg-purple-400 dark:uikit-bg-purple-500 uikit-shadow-purple-700 dark:uikit-shadow-purple-800 uikit-shadow-inner",
    red: "uikit-text-red-900 uikit-bg-red-400 dark:uikit-bg-red-500 uikit-shadow-red-700 dark:uikit-shadow-red-800 uikit-shadow-inner",
    yellow: "uikit-text-yellow-900 uikit-bg-yellow-300 dark:uikit-bg-yellow-400 uikit-shadow-yellow-500 dark:uikit-shadow-yellow-700 uikit-shadow-inner",
    none: ""
  }, w = {
    alternative: "focus-within:uikit-ring-gray-200 dark:focus-within:uikit-ring-gray-700",
    blue: "focus-within:uikit-ring-blue-300 dark:focus-within:uikit-ring-blue-800",
    dark: "focus-within:uikit-ring-gray-300 dark:focus-within:uikit-ring-gray-700",
    green: "focus-within:uikit-ring-green-300 dark:focus-within:uikit-ring-green-800",
    light: "focus-within:uikit-ring-gray-200 dark:focus-within:uikit-ring-gray-700",
    primary: "focus-within:uikit-ring-primary-300 dark:focus-within:uikit-ring-primary-800",
    purple: "focus-within:uikit-ring-purple-300 dark:focus-within:uikit-ring-purple-900",
    red: "focus-within:uikit-ring-red-300 dark:focus-within:uikit-ring-red-900",
    yellow: "focus-within:uikit-ring-yellow-300 dark:focus-within:uikit-ring-yellow-900",
    none: ""
  }, v = {
    alternative: "uikit-shadow-gray-500/50 dark:uikit-shadow-gray-800/80",
    blue: "uikit-shadow-blue-500/50 dark:uikit-shadow-blue-800/80",
    dark: "uikit-shadow-gray-500/50 dark:uikit-shadow-gray-800/80",
    green: "uikit-shadow-green-500/50 dark:uikit-shadow-green-800/80",
    light: "uikit-shadow-gray-500/50 dark:uikit-shadow-gray-800/80",
    primary: "uikit-shadow-primary-500/50 dark:uikit-shadow-primary-800/80",
    purple: "uikit-shadow-purple-500/50 dark:uikit-shadow-purple-800/80",
    red: "uikit-shadow-red-500/50 dark:uikit-shadow-red-800/80 ",
    yellow: "uikit-shadow-yellow-500/50 dark:uikit-shadow-yellow-800/80 ",
    none: ""
  }, E = {
    alternative: "uikit-text-gray-900 dark:uikit-text-gray-400 hover:uikit-text-white uikit-border uikit-border-gray-800 hover:uikit-bg-gray-900 focus-within:uikit-bg-gray-900 focus-within:uikit-text-white focus-within:uikit-ring-gray-300 dark:uikit-border-gray-600 dark:hover:uikit-text-white dark:hover:uikit-bg-gray-600 dark:focus-within:uikit-ring-gray-800",
    blue: "uikit-text-blue-700 hover:uikit-text-white uikit-border uikit-border-blue-700 hover:uikit-bg-blue-800 dark:uikit-border-blue-500 dark:uikit-text-blue-500 dark:hover:uikit-text-white dark:hover:uikit-bg-blue-600",
    dark: "uikit-text-gray-900 hover:uikit-text-white uikit-border uikit-border-gray-800 hover:uikit-bg-gray-900 focus-within:uikit-bg-gray-900 focus-within:uikit-text-white dark:uikit-border-gray-600 dark:hover:uikit-text-white dark:hover:uikit-bg-gray-600",
    green: "uikit-text-green-700 hover:uikit-text-white uikit-border uikit-border-green-700 hover:uikit-bg-green-800 dark:uikit-border-green-500 dark:uikit-text-green-500 dark:hover:uikit-text-white dark:hover:uikit-bg-green-600",
    light: "uikit-text-gray-500 hover:uikit-text-gray-900 uikit-bg-white uikit-border uikit-border-gray-200 dark:uikit-border-gray-600 dark:hover:uikit-text-white dark:uikit-text-gray-400 hover:uikit-bg-gray-50 dark:uikit-bg-gray-700 dark:hover:uikit-bg-gray-600",
    primary: "uikit-text-primary-700 hover:uikit-text-white uikit-border uikit-border-primary-700 hover:uikit-bg-primary-700 dark:uikit-border-primary-500 dark:uikit-text-primary-500 dark:hover:uikit-text-white dark:hover:uikit-bg-primary-600",
    purple: "uikit-text-purple-700 hover:uikit-text-white uikit-border uikit-border-purple-700 hover:uikit-bg-purple-800 dark:uikit-border-purple-400 dark:uikit-text-purple-400 dark:hover:uikit-text-white dark:hover:uikit-bg-purple-500",
    red: "uikit-text-red-700 hover:uikit-text-white uikit-border uikit-border-red-700 hover:uikit-bg-red-800 dark:uikit-border-red-500 dark:uikit-text-red-500 dark:hover:uikit-text-white dark:hover:uikit-bg-red-600",
    yellow: "uikit-text-yellow-400 hover:uikit-text-white uikit-border uikit-border-yellow-400 hover:uikit-bg-yellow-500 dark:uikit-border-yellow-300 dark:uikit-text-yellow-300 dark:hover:uikit-text-white dark:hover:uikit-bg-yellow-400",
    none: ""
  }, O = {
    xs: "uikit-px-3 uikit-py-2 uikit-text-xs",
    sm: "uikit-px-4 uikit-py-2 uikit-text-sm",
    md: "uikit-px-5 uikit-py-2.5 uikit-text-sm",
    lg: "uikit-px-5 uikit-py-3 uikit-text-base",
    xl: "uikit-px-6 uikit-py-3.5 uikit-text-base"
  }, I = () => a || k === "alternative" || k === "light";
  let U;
  function $(q) {
    F.call(this, t, q);
  }
  function W(q) {
    F.call(this, t, q);
  }
  function P(q) {
    F.call(this, t, q);
  }
  function H(q) {
    F.call(this, t, q);
  }
  function me(q) {
    F.call(this, t, q);
  }
  function z(q) {
    F.call(this, t, q);
  }
  function j(q) {
    F.call(this, t, q);
  }
  function M(q) {
    F.call(this, t, q);
  }
  function se(q) {
    F.call(this, t, q);
  }
  function de(q) {
    F.call(this, t, q);
  }
  function ve(q) {
    F.call(this, t, q);
  }
  function Ne(q) {
    F.call(this, t, q);
  }
  function Oe(q) {
    F.call(this, t, q);
  }
  function Re(q) {
    F.call(this, t, q);
  }
  function ye(q) {
    F.call(this, t, q);
  }
  function ee(q) {
    F.call(this, t, q);
  }
  function we(q) {
    F.call(this, t, q);
  }
  function Te(q) {
    F.call(this, t, q);
  }
  return t.$$set = (q) => {
    i(39, e = N(N({}, e), B(q))), i(4, n = ne(e, l)), "pill" in q && i(5, s = q.pill), "outline" in q && i(6, a = q.outline), "size" in q && i(7, f = q.size), "href" in q && i(0, c = q.href), "type" in q && i(1, d = q.type), "color" in q && i(8, k = q.color), "shadow" in q && i(9, g = q.shadow), "tag" in q && i(2, m = q.tag), "checked" in q && i(10, b = q.checked), "$$scope" in q && i(11, o = q.$$scope);
  }, t.$$.update = () => {
    i(3, U = A(
      "uikit-text-center uikit-font-medium",
      u ? "focus-within:uikit-ring-2" : "focus-within:uikit-ring-4",
      u && "focus-within:uikit-z-10",
      u || "focus-within:uikit-outline-none",
      "uikit-inline-flex uikit-items-center uikit-justify-center " + O[f],
      a && b && "uikit-border dark:uikit-border-gray-900",
      a && b && C[k],
      a && !b && E[k],
      !a && b && C[k],
      !a && !b && p[k],
      k === "alternative" && (u && !b ? "dark:uikit-bg-gray-700 dark:uikit-text-white dark:uikit-border-gray-700 dark:hover:uikit-border-gray-600 dark:hover:uikit-bg-gray-600" : "dark:uikit-bg-transparent dark:uikit-border-gray-600 dark:hover:uikit-border-gray-700"),
      a && k === "dark" && (u ? b ? "uikit-bg-gray-900 uikit-border-gray-800 dark:uikit-border-white dark:uikit-bg-gray-600" : "dark:uikit-text-white uikit-border-gray-800 dark:uikit-border-white" : "dark:uikit-text-gray-400 dark:uikit-border-gray-700"),
      w[k],
      I() && u && "uikit-border-s-0 first:uikit-border-s",
      u ? s && "first:uikit-rounded-s-full last:uikit-rounded-e-full" || "first:uikit-rounded-s-lg last:uikit-rounded-e-lg" : s && "uikit-rounded-full" || "uikit-rounded-lg",
      g && "uikit-shadow-lg",
      g && v[k],
      e.disabled && "uikit-cursor-not-allowed uikit-opacity-50",
      e.class
    ));
  }, e = B(e), [
    c,
    d,
    m,
    U,
    n,
    s,
    a,
    f,
    k,
    g,
    b,
    o,
    r,
    $,
    W,
    P,
    H,
    me,
    z,
    j,
    M,
    se,
    de,
    ve,
    Ne,
    Oe,
    Re,
    ye,
    ee,
    we,
    Te
  ];
}
class Mi extends ie {
  constructor(e) {
    super(), te(
      this,
      e,
      jc,
      Fc,
      V,
      {
        pill: 5,
        outline: 6,
        size: 7,
        href: 0,
        type: 1,
        color: 8,
        shadow: 9,
        tag: 2,
        checked: 10
      },
      null,
      [-1, -1]
    );
  }
}
function Wc(t) {
  let e;
  const i = (
    /*#slots*/
    t[7].default
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      l && l.c();
    },
    m(n, r) {
      l && l.m(n, r), e = !0;
    },
    p(n, r) {
      l && l.p && (!e || r & /*$$scope*/
      64) && Z(
        l,
        i,
        n,
        /*$$scope*/
        n[6],
        e ? J(
          i,
          /*$$scope*/
          n[6],
          r,
          null
        ) : x(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      e || (_(l, n), e = !0);
    },
    o(n) {
      y(l, n), e = !1;
    },
    d(n) {
      l && l.d(n);
    }
  };
}
function Uc(t) {
  let e, i;
  const l = (
    /*#slots*/
    t[7].default
  ), n = Y(
    l,
    t,
    /*$$scope*/
    t[6],
    null
  );
  let r = [
    /*$$restProps*/
    t[3],
    { class: (
      /*labelClass*/
      t[2]
    ) }
  ], o = {};
  for (let u = 0; u < r.length; u += 1)
    o = N(o, r[u]);
  return {
    c() {
      e = L("label"), n && n.c(), ae(e, o);
    },
    m(u, s) {
      T(u, e, s), n && n.m(e, null), t[8](e), i = !0;
    },
    p(u, s) {
      n && n.p && (!i || s & /*$$scope*/
      64) && Z(
        n,
        l,
        u,
        /*$$scope*/
        u[6],
        i ? J(
          l,
          /*$$scope*/
          u[6],
          s,
          null
        ) : x(
          /*$$scope*/
          u[6]
        ),
        null
      ), ae(e, o = fe(r, [
        s & /*$$restProps*/
        8 && /*$$restProps*/
        u[3],
        (!i || s & /*labelClass*/
        4) && { class: (
          /*labelClass*/
          u[2]
        ) }
      ]));
    },
    i(u) {
      i || (_(n, u), i = !0);
    },
    o(u) {
      y(n, u), i = !1;
    },
    d(u) {
      u && S(e), n && n.d(u), t[8](null);
    }
  };
}
function Gc(t) {
  let e, i, l, n;
  const r = [Uc, Wc], o = [];
  function u(s, a) {
    return (
      /*show*/
      s[0] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = r[e](t), {
    c() {
      i.c(), l = ue();
    },
    m(s, a) {
      o[e].m(s, a), T(s, l, a), n = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (le(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), re(), i = o[e], i ? i.p(s, a) : (i = o[e] = r[e](s), i.c()), _(i, 1), i.m(l.parentNode, l));
    },
    i(s) {
      n || (_(i), n = !0);
    },
    o(s) {
      y(i), n = !1;
    },
    d(s) {
      s && S(l), o[e].d(s);
    }
  };
}
function Hc(t, e, i) {
  let l;
  const n = ["color", "defaultClass", "show"];
  let r = ne(e, n), { $$slots: o = {}, $$scope: u } = e, { color: s = "gray" } = e, { defaultClass: a = "uikit-text-sm rtl:uikit-text-right uikit-font-medium uikit-block" } = e, { show: f = !0 } = e, c;
  const d = {
    gray: "uikit-text-gray-900 dark:uikit-text-gray-300",
    green: "uikit-text-green-700 dark:uikit-text-green-500",
    red: "uikit-text-red-700 dark:uikit-text-red-500",
    disabled: "uikit-text-gray-400 dark:uikit-text-gray-500"
  };
  function k(g) {
    Se[g ? "unshift" : "push"](() => {
      c = g, i(1, c);
    });
  }
  return t.$$set = (g) => {
    i(10, e = N(N({}, e), B(g))), i(3, r = ne(e, n)), "color" in g && i(4, s = g.color), "defaultClass" in g && i(5, a = g.defaultClass), "show" in g && i(0, f = g.show), "$$scope" in g && i(6, u = g.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*node, color*/
    18) {
      const g = c == null ? void 0 : c.control;
      i(4, s = g != null && g.disabled ? "disabled" : s);
    }
    i(2, l = A(a, d[s], e.class));
  }, e = B(e), [
    f,
    c,
    l,
    r,
    s,
    a,
    u,
    o,
    k
  ];
}
class Vc extends ie {
  constructor(e) {
    super(), te(this, e, Hc, Gc, V, { color: 4, defaultClass: 5, show: 0 });
  }
}
function qc(t) {
  let e, i, l, n, r, o, u, s = [
    { type: "radio" },
    { __value: (
      /*value*/
      t[4]
    ) },
    /*$$restProps*/
    t[8],
    {
      class: i = ml(
        /*custom*/
        t[2],
        /*color*/
        t[1],
        !1,
        /*background*/
        t[5],
        /*$$slots*/
        t[7].default || /*$$props*/
        t[6].class
      )
    }
  ], a = {};
  for (let d = 0; d < s.length; d += 1)
    a = N(a, s[d]);
  const f = (
    /*#slots*/
    t[9].default
  ), c = Y(
    f,
    t,
    /*$$scope*/
    t[23],
    null
  );
  return r = uo(
    /*$$binding_groups*/
    t[22][0]
  ), {
    c() {
      e = L("input"), l = G(), c && c.c(), ae(e, a), r.p(e);
    },
    m(d, k) {
      T(d, e, k), e.autofocus && e.focus(), e.checked = e.__value === /*group*/
      t[0], T(d, l, k), c && c.m(d, k), n = !0, o || (u = [
        D(
          e,
          "change",
          /*input_change_handler*/
          t[21]
        ),
        D(
          e,
          "blur",
          /*blur_handler*/
          t[10]
        ),
        D(
          e,
          "change",
          /*change_handler*/
          t[11]
        ),
        D(
          e,
          "click",
          /*click_handler*/
          t[12]
        ),
        D(
          e,
          "focus",
          /*focus_handler*/
          t[13]
        ),
        D(
          e,
          "keydown",
          /*keydown_handler*/
          t[14]
        ),
        D(
          e,
          "keypress",
          /*keypress_handler*/
          t[15]
        ),
        D(
          e,
          "keyup",
          /*keyup_handler*/
          t[16]
        ),
        D(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[17]
        ),
        D(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[18]
        ),
        D(
          e,
          "mouseover",
          /*mouseover_handler*/
          t[19]
        ),
        D(
          e,
          "paste",
          /*paste_handler*/
          t[20]
        )
      ], o = !0);
    },
    p(d, k) {
      ae(e, a = fe(s, [
        { type: "radio" },
        (!n || k & /*value*/
        16) && { __value: (
          /*value*/
          d[4]
        ) },
        k & /*$$restProps*/
        256 && /*$$restProps*/
        d[8],
        (!n || k & /*custom, color, $$slots, $$props*/
        198 && i !== (i = ml(
          /*custom*/
          d[2],
          /*color*/
          d[1],
          !1,
          /*background*/
          d[5],
          /*$$slots*/
          d[7].default || /*$$props*/
          d[6].class
        ))) && { class: i }
      ])), k & /*group*/
      1 && (e.checked = e.__value === /*group*/
      d[0]), c && c.p && (!n || k & /*$$scope*/
      8388608) && Z(
        c,
        f,
        d,
        /*$$scope*/
        d[23],
        n ? J(
          f,
          /*$$scope*/
          d[23],
          k,
          null
        ) : x(
          /*$$scope*/
          d[23]
        ),
        null
      );
    },
    i(d) {
      n || (_(c, d), n = !0);
    },
    o(d) {
      y(c, d), n = !1;
    },
    d(d) {
      d && (S(e), S(l)), c && c.d(d), r.r(), o = !1, Ce(u);
    }
  };
}
function Xc(t) {
  let e, i;
  return e = new Vc({
    props: {
      class: gl(
        /*inline*/
        t[3],
        /*$$props*/
        t[6].class
      ),
      show: (
        /*$$slots*/
        t[7].default
      ),
      $$slots: { default: [qc] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, [n]) {
      const r = {};
      n & /*inline, $$props*/
      72 && (r.class = gl(
        /*inline*/
        l[3],
        /*$$props*/
        l[6].class
      )), n & /*$$slots*/
      128 && (r.show = /*$$slots*/
      l[7].default), n & /*$$scope, value, $$restProps, custom, color, $$slots, $$props, group*/
      8389079 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
const Qc = {
  primary: "uikit-text-primary-600 focus:uikit-ring-primary-500 dark:focus:uikit-ring-primary-600",
  secondary: "uikit-text-secondary-600 focus:uikit-ring-secondary-500 dark:focus:uikit-ring-secondary-600",
  red: "uikit-text-red-600 focus:uikit-ring-red-500 dark:focus:uikit-ring-red-600",
  green: "uikit-text-green-600 focus:uikit-ring-green-500 dark:focus:uikit-ring-green-600",
  purple: "uikit-text-purple-600 focus:uikit-ring-purple-500 dark:focus:uikit-ring-purple-600",
  teal: "uikit-text-teal-600 focus:uikit-ring-teal-500 dark:focus:uikit-ring-teal-600",
  yellow: "uikit-text-yellow-400 focus:uikit-ring-yellow-500 dark:focus:uikit-ring-yellow-600",
  orange: "uikit-text-orange-500 focus:uikit-ring-orange-500 dark:focus:uikit-ring-orange-600",
  blue: "uikit-text-blue-600 focus:uikit-ring-blue-500 dark:focus:uikit-ring-blue-600"
}, gl = (t, e) => A(t ? "uikit-inline-flex" : "uikit-flex", "uikit-items-center", e);
let Kc = "uikit-me-2";
const ml = (t, e, i, l, n) => A(
  "uikit-w-4 uikit-h-4 uikit-bg-gray-100 uikit-border-gray-300 dark:uikit-ring-offset-gray-800 focus:uikit-ring-2",
  Kc,
  l ? "dark:uikit-bg-gray-600 dark:uikit-border-gray-500" : "dark:uikit-bg-gray-700 dark:uikit-border-gray-600",
  t && "uikit-sr-only uikit-peer",
  i && "uikit-rounded",
  Qc[e],
  n
);
function Yc(t, e, i) {
  const l = ["color", "custom", "inline", "group", "value"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e;
  const u = Ye(r);
  let { color: s = "primary" } = e, { custom: a = !1 } = e, { inline: f = !1 } = e, { group: c = "" } = e, { value: d = "" } = e, k = Pe("background");
  const g = [[]];
  function m(P) {
    F.call(this, t, P);
  }
  function b(P) {
    F.call(this, t, P);
  }
  function p(P) {
    F.call(this, t, P);
  }
  function C(P) {
    F.call(this, t, P);
  }
  function w(P) {
    F.call(this, t, P);
  }
  function v(P) {
    F.call(this, t, P);
  }
  function E(P) {
    F.call(this, t, P);
  }
  function O(P) {
    F.call(this, t, P);
  }
  function I(P) {
    F.call(this, t, P);
  }
  function U(P) {
    F.call(this, t, P);
  }
  function $(P) {
    F.call(this, t, P);
  }
  function W() {
    c = this.__value, i(0, c);
  }
  return t.$$set = (P) => {
    i(6, e = N(N({}, e), B(P))), i(8, n = ne(e, l)), "color" in P && i(1, s = P.color), "custom" in P && i(2, a = P.custom), "inline" in P && i(3, f = P.inline), "group" in P && i(0, c = P.group), "value" in P && i(4, d = P.value), "$$scope" in P && i(23, o = P.$$scope);
  }, e = B(e), [
    c,
    s,
    a,
    f,
    d,
    k,
    e,
    u,
    n,
    r,
    m,
    b,
    p,
    C,
    w,
    v,
    E,
    O,
    I,
    U,
    $,
    W,
    g,
    o
  ];
}
class Jc extends ie {
  constructor(e) {
    super(), te(this, e, Yc, Xc, V, {
      color: 1,
      custom: 2,
      inline: 3,
      group: 0,
      value: 4
    });
  }
}
function hl(t, e, i) {
  const l = t.slice();
  return l[5] = e[i].label, l[6] = e[i].onclick, l[7] = e[i].children, l;
}
function bl(t, e, i) {
  const l = t.slice();
  return l[5] = e[i].label, l[6] = e[i].onclick, l;
}
function Zc(t) {
  let e, i;
  return e = new en({
    props: {
      onclick: (
        /*onclick*/
        t[6]
      ),
      $$slots: { default: [$c] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*items*/
      2 && (r.onclick = /*onclick*/
      l[6]), n & /*$$scope, items*/
      4098 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function xc(t) {
  let e, i, l, n;
  return e = new en({
    props: {
      class: "uikit-flex uikit-items-center uikit-justify-between",
      $$slots: { default: [ed] },
      $$scope: { ctx: t }
    }
  }), l = new $i({
    props: {
      placement: "right-start",
      $$slots: { default: [id] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment), i = G(), K(l.$$.fragment);
    },
    m(r, o) {
      X(e, r, o), T(r, i, o), X(l, r, o), n = !0;
    },
    p(r, o) {
      const u = {};
      o & /*$$scope, items*/
      4098 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
      const s = {};
      o & /*$$scope, items*/
      4098 && (s.$$scope = { dirty: o, ctx: r }), l.$set(s);
    },
    i(r) {
      n || (_(e.$$.fragment, r), _(l.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), y(l.$$.fragment, r), n = !1;
    },
    d(r) {
      r && S(i), Q(e, r), Q(l, r);
    }
  };
}
function $c(t) {
  let e = (
    /*label*/
    t[5] + ""
  ), i;
  return {
    c() {
      i = ke(e);
    },
    m(l, n) {
      T(l, i, n);
    },
    p(l, n) {
      n & /*items*/
      2 && e !== (e = /*label*/
      l[5] + "") && be(i, e);
    },
    d(l) {
      l && S(i);
    }
  };
}
function ed(t) {
  let e = (
    /*label*/
    t[5] + ""
  ), i, l, n, r;
  return n = new gt({
    props: {
      name: "ChevronRightSolid",
      className: "uikit-w-3 uikit-h-3 uikit-ms-2 uikit-text-primary-700 dark:uikit-text-white"
    }
  }), {
    c() {
      i = ke(e), l = G(), K(n.$$.fragment);
    },
    m(o, u) {
      T(o, i, u), T(o, l, u), X(n, o, u), r = !0;
    },
    p(o, u) {
      (!r || u & /*items*/
      2) && e !== (e = /*label*/
      o[5] + "") && be(i, e);
    },
    i(o) {
      r || (_(n.$$.fragment, o), r = !0);
    },
    o(o) {
      y(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && (S(i), S(l)), Q(n, o);
    }
  };
}
function td(t) {
  let e = (
    /*label*/
    t[5] + ""
  ), i;
  return {
    c() {
      i = ke(e);
    },
    m(l, n) {
      T(l, i, n);
    },
    p(l, n) {
      n & /*items*/
      2 && e !== (e = /*label*/
      l[5] + "") && be(i, e);
    },
    d(l) {
      l && S(i);
    }
  };
}
function _l(t) {
  let e, i;
  return e = new en({
    props: {
      onclick: (
        /*onclick*/
        t[6]
      ),
      $$slots: { default: [td] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*items*/
      2 && (r.onclick = /*onclick*/
      l[6]), n & /*$$scope, items*/
      4098 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function id(t) {
  let e, i, l = ge(
    /*children*/
    t[7]
  ), n = [];
  for (let o = 0; o < l.length; o += 1)
    n[o] = _l(bl(t, l, o));
  const r = (o) => y(n[o], 1, 1, () => {
    n[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      e = G();
    },
    m(o, u) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, u);
      T(o, e, u), i = !0;
    },
    p(o, u) {
      if (u & /*items*/
      2) {
        l = ge(
          /*children*/
          o[7]
        );
        let s;
        for (s = 0; s < l.length; s += 1) {
          const a = bl(o, l, s);
          n[s] ? (n[s].p(a, u), _(n[s], 1)) : (n[s] = _l(a), n[s].c(), _(n[s], 1), n[s].m(e.parentNode, e));
        }
        for (le(), s = l.length; s < n.length; s += 1)
          r(s);
        re();
      }
    },
    i(o) {
      if (!i) {
        for (let u = 0; u < l.length; u += 1)
          _(n[u]);
        i = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let u = 0; u < n.length; u += 1)
        y(n[u]);
      i = !1;
    },
    d(o) {
      o && S(e), Ie(n, o);
    }
  };
}
function pl(t) {
  let e, i, l, n;
  const r = [xc, Zc], o = [];
  function u(s, a) {
    return (
      /*children*/
      s[7] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = r[e](t), {
    c() {
      i.c(), l = ue();
    },
    m(s, a) {
      o[e].m(s, a), T(s, l, a), n = !0;
    },
    p(s, a) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (le(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), re(), i = o[e], i ? i.p(s, a) : (i = o[e] = r[e](s), i.c()), _(i, 1), i.m(l.parentNode, l));
    },
    i(s) {
      n || (_(i), n = !0);
    },
    o(s) {
      y(i), n = !1;
    },
    d(s) {
      s && S(l), o[e].d(s);
    }
  };
}
function nd(t) {
  let e, i, l = ge(
    /*items*/
    t[1]
  ), n = [];
  for (let o = 0; o < l.length; o += 1)
    n[o] = pl(hl(t, l, o));
  const r = (o) => y(n[o], 1, 1, () => {
    n[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      e = ue();
    },
    m(o, u) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, u);
      T(o, e, u), i = !0;
    },
    p(o, u) {
      if (u & /*items*/
      2) {
        l = ge(
          /*items*/
          o[1]
        );
        let s;
        for (s = 0; s < l.length; s += 1) {
          const a = hl(o, l, s);
          n[s] ? (n[s].p(a, u), _(n[s], 1)) : (n[s] = pl(a), n[s].c(), _(n[s], 1), n[s].m(e.parentNode, e));
        }
        for (le(), s = l.length; s < n.length; s += 1)
          r(s);
        re();
      }
    },
    i(o) {
      if (!i) {
        for (let u = 0; u < l.length; u += 1)
          _(n[u]);
        i = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let u = 0; u < n.length; u += 1)
        y(n[u]);
      i = !1;
    },
    d(o) {
      o && S(e), Ie(n, o);
    }
  };
}
function ld(t) {
  let e, i, l, n, r, o, u, s;
  function a(c) {
    t[4](c);
  }
  let f = {
    class: "uikit-w-44 uikit-p-3 uikit-space-y-3 uikit-text-sm",
    $$slots: { default: [nd] },
    $$scope: { ctx: t }
  };
  return (
    /*dropdownOpen*/
    t[3] !== void 0 && (f.open = /*dropdownOpen*/
    t[3]), n = new $i({ props: f }), Se.push(() => Ot(n, "open", a)), {
      c() {
        e = L("button"), i = ke(
          /*title*/
          t[0]
        ), l = G(), K(n.$$.fragment);
      },
      m(c, d) {
        T(c, e, d), R(e, i), T(c, l, d), X(n, c, d), o = !0, u || (s = D(
          e,
          "click",
          /*toggle*/
          t[2]
        ), u = !0);
      },
      p(c, [d]) {
        (!o || d & /*title*/
        1) && be(
          i,
          /*title*/
          c[0]
        );
        const k = {};
        d & /*$$scope, items*/
        4098 && (k.$$scope = { dirty: d, ctx: c }), !r && d & /*dropdownOpen*/
        8 && (r = !0, k.open = /*dropdownOpen*/
        c[3], At(() => r = !1)), n.$set(k);
      },
      i(c) {
        o || (_(n.$$.fragment, c), o = !0);
      },
      o(c) {
        y(n.$$.fragment, c), o = !1;
      },
      d(c) {
        c && (S(e), S(l)), Q(n, c), u = !1, s();
      }
    }
  );
}
function rd(t, e, i) {
  let { title: l = "title" } = e, { items: n = [] } = e, r = !1;
  function o() {
    i(3, r = !r);
  }
  function u(s) {
    r = s, i(3, r);
  }
  return t.$$set = (s) => {
    "title" in s && i(0, l = s.title), "items" in s && i(1, n = s.items);
  }, [l, n, o, r, u];
}
class Yr extends ie {
  constructor(e) {
    super(), te(this, e, rd, ld, V, { title: 0, items: 1, toggle: 2 });
  }
  get toggle() {
    return this.$$.ctx[2];
  }
}
function yl(t, e, i) {
  const l = t.slice();
  return l[4] = e[i], l[6] = i, l;
}
function od(t) {
  let e = (
    /*item*/
    t[4] + ""
  ), i;
  return {
    c() {
      i = ke(e);
    },
    m(l, n) {
      T(l, i, n);
    },
    p(l, n) {
      n & /*items*/
      1 && e !== (e = /*item*/
      l[4] + "") && be(i, e);
    },
    d(l) {
      l && S(i);
    }
  };
}
function vl(t) {
  let e, i, l, n, r;
  function o(s) {
    t[2](s);
  }
  let u = {
    name: "group1",
    value: (
      /*idx*/
      t[6]
    ),
    $$slots: { default: [od] },
    $$scope: { ctx: t }
  };
  return (
    /*group*/
    t[1] !== void 0 && (u.group = /*group*/
    t[1]), i = new Jc({ props: u }), Se.push(() => Ot(i, "group", o)), {
      c() {
        e = L("li"), K(i.$$.fragment), n = G();
      },
      m(s, a) {
        T(s, e, a), X(i, e, null), R(e, n), r = !0;
      },
      p(s, a) {
        const f = {};
        a & /*$$scope, items*/
        129 && (f.$$scope = { dirty: a, ctx: s }), !l && a & /*group*/
        2 && (l = !0, f.group = /*group*/
        s[1], At(() => l = !1)), i.$set(f);
      },
      i(s) {
        r || (_(i.$$.fragment, s), r = !0);
      },
      o(s) {
        y(i.$$.fragment, s), r = !1;
      },
      d(s) {
        s && S(e), Q(i);
      }
    }
  );
}
function sd(t) {
  let e, i, l = ge(
    /*items*/
    t[0]
  ), n = [];
  for (let o = 0; o < l.length; o += 1)
    n[o] = vl(yl(t, l, o));
  const r = (o) => y(n[o], 1, 1, () => {
    n[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      e = ue();
    },
    m(o, u) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, u);
      T(o, e, u), i = !0;
    },
    p(o, u) {
      if (u & /*group, items*/
      3) {
        l = ge(
          /*items*/
          o[0]
        );
        let s;
        for (s = 0; s < l.length; s += 1) {
          const a = yl(o, l, s);
          n[s] ? (n[s].p(a, u), _(n[s], 1)) : (n[s] = vl(a), n[s].c(), _(n[s], 1), n[s].m(e.parentNode, e));
        }
        for (le(), s = l.length; s < n.length; s += 1)
          r(s);
        re();
      }
    },
    i(o) {
      if (!i) {
        for (let u = 0; u < l.length; u += 1)
          _(n[u]);
        i = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let u = 0; u < n.length; u += 1)
        y(n[u]);
      i = !1;
    },
    d(o) {
      o && S(e), Ie(n, o);
    }
  };
}
function ud(t) {
  let e, i = (
    /*group*/
    (t[1] > -1 ? (
      /*items*/
      t[0][
        /*group*/
        t[1]
      ]
    ) : "") + ""
  ), l, n, r, o;
  return r = new $i({
    props: {
      class: "uikit-w-44 uikit-p-3 uikit-space-y-3 uikit-text-sm",
      $$slots: { default: [sd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = L("button"), l = ke(i), n = G(), K(r.$$.fragment);
    },
    m(u, s) {
      T(u, e, s), R(e, l), T(u, n, s), X(r, u, s), o = !0;
    },
    p(u, [s]) {
      (!o || s & /*group, items*/
      3) && i !== (i = /*group*/
      (u[1] > -1 ? (
        /*items*/
        u[0][
          /*group*/
          u[1]
        ]
      ) : "") + "") && be(l, i);
      const a = {};
      s & /*$$scope, items, group*/
      131 && (a.$$scope = { dirty: s, ctx: u }), r.$set(a);
    },
    i(u) {
      o || (_(r.$$.fragment, u), o = !0);
    },
    o(u) {
      y(r.$$.fragment, u), o = !1;
    },
    d(u) {
      u && (S(e), S(n)), Q(r, u);
    }
  };
}
function ad(t, e, i) {
  let l = -1;
  const n = He();
  let { items: r = [] } = e;
  function o(u) {
    l = u, i(1, l);
  }
  return t.$$set = (u) => {
    "items" in u && i(0, r = u.items);
  }, t.$$.update = () => {
    t.$$.dirty & /*group*/
    2 && l > -1 && n("change", l);
  }, [r, l, o];
}
class fd extends ie {
  constructor(e) {
    super(), te(this, e, ad, ud, V, { items: 0 });
  }
}
function wl(t, e, i) {
  const l = t.slice();
  return l[1] = e[i].title, l[2] = e[i].data, l;
}
function Cl(t) {
  let e, i;
  return e = new Yr({
    props: {
      title: (
        /*title*/
        t[1]
      ),
      items: (
        /*data*/
        t[2]
      )
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*items*/
      1 && (r.title = /*title*/
      l[1]), n & /*items*/
      1 && (r.items = /*data*/
      l[2]), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function cd(t) {
  let e, i, l = ge(
    /*items*/
    t[0]
  ), n = [];
  for (let o = 0; o < l.length; o += 1)
    n[o] = Cl(wl(t, l, o));
  const r = (o) => y(n[o], 1, 1, () => {
    n[o] = null;
  });
  return {
    c() {
      e = L("div");
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      h(e, "class", "uikit-flex uikit-w-full");
    },
    m(o, u) {
      T(o, e, u);
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(e, null);
      i = !0;
    },
    p(o, [u]) {
      if (u & /*items*/
      1) {
        l = ge(
          /*items*/
          o[0]
        );
        let s;
        for (s = 0; s < l.length; s += 1) {
          const a = wl(o, l, s);
          n[s] ? (n[s].p(a, u), _(n[s], 1)) : (n[s] = Cl(a), n[s].c(), _(n[s], 1), n[s].m(e, null));
        }
        for (le(), s = l.length; s < n.length; s += 1)
          r(s);
        re();
      }
    },
    i(o) {
      if (!i) {
        for (let u = 0; u < l.length; u += 1)
          _(n[u]);
        i = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let u = 0; u < n.length; u += 1)
        y(n[u]);
      i = !1;
    },
    d(o) {
      o && S(e), Ie(n, o);
    }
  };
}
function dd(t, e, i) {
  let { items: l = [] } = e;
  return t.$$set = (n) => {
    "items" in n && i(0, l = n.items);
  }, [l];
}
class kd extends ie {
  constructor(e) {
    super(), te(this, e, dd, cd, V, { items: 0 });
  }
}
const b0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new Yr({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
}, _0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new kd({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
}, p0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new fd({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
};
function gd(t) {
  let e, i, l;
  const n = (
    /*#slots*/
    t[9].default
  ), r = Y(
    n,
    t,
    /*$$scope*/
    t[8],
    null
  );
  let o = [
    /*$$restProps*/
    t[3],
    {
      class: i = A(
        /*asideClass*/
        t[2][
          /*mode*/
          t[0]
        ],
        /*$$props*/
        t[4].class,
        "uikit-duration-100"
      )
    },
    { "aria-label": (
      /*ariaLabel*/
      t[1]
    ) }
  ], u = {};
  for (let s = 0; s < o.length; s += 1)
    u = N(u, o[s]);
  return {
    c() {
      e = L("aside"), r && r.c(), ae(e, u);
    },
    m(s, a) {
      T(s, e, a), r && r.m(e, null), l = !0;
    },
    p(s, [a]) {
      r && r.p && (!l || a & /*$$scope*/
      256) && Z(
        r,
        n,
        s,
        /*$$scope*/
        s[8],
        l ? J(
          n,
          /*$$scope*/
          s[8],
          a,
          null
        ) : x(
          /*$$scope*/
          s[8]
        ),
        null
      ), ae(e, u = fe(o, [
        a & /*$$restProps*/
        8 && /*$$restProps*/
        s[3],
        (!l || a & /*mode, $$props*/
        17 && i !== (i = A(
          /*asideClass*/
          s[2][
            /*mode*/
            s[0]
          ],
          /*$$props*/
          s[4].class,
          "uikit-duration-100"
        ))) && { class: i },
        (!l || a & /*ariaLabel*/
        2) && { "aria-label": (
          /*ariaLabel*/
          s[1]
        ) }
      ]));
    },
    i(s) {
      l || (_(r, s), l = !0);
    },
    o(s) {
      y(r, s), l = !1;
    },
    d(s) {
      s && S(e), r && r.d(s);
    }
  };
}
function md(t, e, i) {
  const l = ["mode", "activeUrl", "nonActiveClass", "activeClass", "ariaLabel"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e;
  const u = nt("");
  let { mode: s = "normal" } = e, { activeUrl: a = "" } = e, { nonActiveClass: f = "uikit-flex uikit-items-center uikit-p-2 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { activeClass: c = "uikit-flex uikit-items-center uikit-p-2 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-bg-gray-200 dark:uikit-bg-gray-700 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { ariaLabel: d = "Sidebar" } = e;
  Ue("sidebarContext", { activeClass: c, nonActiveClass: f }), Ue("activeUrl", u);
  const k = { normal: "uikit-w-64", mini: "uikit-w-12" };
  return t.$$set = (g) => {
    i(4, e = N(N({}, e), B(g))), i(3, n = ne(e, l)), "mode" in g && i(0, s = g.mode), "activeUrl" in g && i(5, a = g.activeUrl), "nonActiveClass" in g && i(6, f = g.nonActiveClass), "activeClass" in g && i(7, c = g.activeClass), "ariaLabel" in g && i(1, d = g.ariaLabel), "$$scope" in g && i(8, o = g.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*activeUrl*/
    32 && u.set(a);
  }, e = B(e), [
    s,
    d,
    k,
    n,
    e,
    a,
    f,
    c,
    o,
    r
  ];
}
class hd extends ie {
  constructor(e) {
    super(), te(this, e, md, gd, V, {
      mode: 0,
      activeUrl: 5,
      nonActiveClass: 6,
      activeClass: 7,
      ariaLabel: 1
    });
  }
}
function bd(t) {
  let e, i, l;
  const n = (
    /*#slots*/
    t[6].default
  ), r = Y(
    n,
    t,
    /*$$scope*/
    t[5],
    null
  );
  let o = [
    /*$$restProps*/
    t[1],
    {
      class: i = A(
        /*ulClass*/
        t[0],
        /*$$props*/
        t[2].class
      )
    }
  ], u = {};
  for (let s = 0; s < o.length; s += 1)
    u = N(u, o[s]);
  return {
    c() {
      e = L("ul"), r && r.c(), ae(e, u);
    },
    m(s, a) {
      T(s, e, a), r && r.m(e, null), l = !0;
    },
    p(s, [a]) {
      r && r.p && (!l || a & /*$$scope*/
      32) && Z(
        r,
        n,
        s,
        /*$$scope*/
        s[5],
        l ? J(
          n,
          /*$$scope*/
          s[5],
          a,
          null
        ) : x(
          /*$$scope*/
          s[5]
        ),
        null
      ), ae(e, u = fe(o, [
        a & /*$$restProps*/
        2 && /*$$restProps*/
        s[1],
        (!l || a & /*ulClass, $$props*/
        5 && i !== (i = A(
          /*ulClass*/
          s[0],
          /*$$props*/
          s[2].class
        ))) && { class: i }
      ]));
    },
    i(s) {
      l || (_(r, s), l = !0);
    },
    o(s) {
      y(r, s), l = !1;
    },
    d(s) {
      s && S(e), r && r.d(s);
    }
  };
}
function _d(t, e, i) {
  const l = ["ulClass", "borderClass", "border"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e, { ulClass: u = "uikit-space-y-2" } = e, { borderClass: s = "uikit-pt-4 uikit-mt-4 uikit-border-t uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { border: a = !1 } = e;
  return a && (u += " " + s), t.$$set = (f) => {
    i(2, e = N(N({}, e), B(f))), i(1, n = ne(e, l)), "ulClass" in f && i(0, u = f.ulClass), "borderClass" in f && i(3, s = f.borderClass), "border" in f && i(4, a = f.border), "$$scope" in f && i(5, o = f.$$scope);
  }, e = B(e), [u, n, e, s, a, o, r];
}
class pd extends ie {
  constructor(e) {
    super(), te(this, e, _d, bd, V, { ulClass: 0, borderClass: 3, border: 4 });
  }
}
const yd = (t) => ({}), Sl = (t) => ({}), vd = (t) => ({}), Tl = (t) => ({});
function El(t) {
  let e;
  const i = (
    /*#slots*/
    t[13].subtext
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[12],
    Sl
  );
  return {
    c() {
      l && l.c();
    },
    m(n, r) {
      l && l.m(n, r), e = !0;
    },
    p(n, r) {
      l && l.p && (!e || r & /*$$scope*/
      4096) && Z(
        l,
        i,
        n,
        /*$$scope*/
        n[12],
        e ? J(
          i,
          /*$$scope*/
          n[12],
          r,
          yd
        ) : x(
          /*$$scope*/
          n[12]
        ),
        Sl
      );
    },
    i(n) {
      e || (_(l, n), e = !0);
    },
    o(n) {
      y(l, n), e = !1;
    },
    d(n) {
      l && l.d(n);
    }
  };
}
function wd(t) {
  let e, i, l, n, r, o, u, s, a, f;
  const c = (
    /*#slots*/
    t[13].icon
  ), d = Y(
    c,
    t,
    /*$$scope*/
    t[12],
    Tl
  );
  let k = (
    /*$$slots*/
    t[7].subtext && /*mode*/
    t[2] === "normal" && El(t)
  ), g = [
    /*$$restProps*/
    t[6],
    { href: (
      /*href*/
      t[0]
    ) },
    { class: (
      /*aClass*/
      t[4]
    ) }
  ], m = {};
  for (let b = 0; b < g.length; b += 1)
    m = N(m, g[b]);
  return {
    c() {
      e = L("li"), i = L("a"), d && d.c(), l = G(), n = L("span"), r = ke(
        /*label*/
        t[1]
      ), u = G(), k && k.c(), h(n, "class", o = /*spanClass*/
      t[5][
        /*mode*/
        t[2]
      ]), ae(i, m);
    },
    m(b, p) {
      T(b, e, p), R(e, i), d && d.m(i, null), R(i, l), R(i, n), R(n, r), R(i, u), k && k.m(i, null), s = !0, a || (f = [
        D(
          i,
          "blur",
          /*blur_handler*/
          t[14]
        ),
        D(
          i,
          "click",
          /*click_handler*/
          t[22]
        ),
        D(
          i,
          "focus",
          /*focus_handler*/
          t[15]
        ),
        D(
          i,
          "keydown",
          /*keydown_handler*/
          t[16]
        ),
        D(
          i,
          "keypress",
          /*keypress_handler*/
          t[17]
        ),
        D(
          i,
          "keyup",
          /*keyup_handler*/
          t[18]
        ),
        D(
          i,
          "mouseenter",
          /*mouseenter_handler*/
          t[19]
        ),
        D(
          i,
          "mouseleave",
          /*mouseleave_handler*/
          t[20]
        ),
        D(
          i,
          "mouseover",
          /*mouseover_handler*/
          t[21]
        )
      ], a = !0);
    },
    p(b, [p]) {
      d && d.p && (!s || p & /*$$scope*/
      4096) && Z(
        d,
        c,
        b,
        /*$$scope*/
        b[12],
        s ? J(
          c,
          /*$$scope*/
          b[12],
          p,
          vd
        ) : x(
          /*$$scope*/
          b[12]
        ),
        Tl
      ), (!s || p & /*label*/
      2) && be(
        r,
        /*label*/
        b[1]
      ), (!s || p & /*mode*/
      4 && o !== (o = /*spanClass*/
      b[5][
        /*mode*/
        b[2]
      ])) && h(n, "class", o), /*$$slots*/
      b[7].subtext && /*mode*/
      b[2] === "normal" ? k ? (k.p(b, p), p & /*$$slots, mode*/
      132 && _(k, 1)) : (k = El(b), k.c(), _(k, 1), k.m(i, null)) : k && (le(), y(k, 1, 1, () => {
        k = null;
      }), re()), ae(i, m = fe(g, [
        p & /*$$restProps*/
        64 && /*$$restProps*/
        b[6],
        (!s || p & /*href*/
        1) && { href: (
          /*href*/
          b[0]
        ) },
        (!s || p & /*aClass*/
        16) && { class: (
          /*aClass*/
          b[4]
        ) }
      ]));
    },
    i(b) {
      s || (_(d, b), _(k), s = !0);
    },
    o(b) {
      y(d, b), y(k), s = !1;
    },
    d(b) {
      b && S(e), d && d.d(b), k && k.d(), a = !1, Ce(f);
    }
  };
}
function Cd(t, e, i) {
  let l, n;
  const r = ["href", "label", "mode", "activeClass", "nonActiveClass", "onclick"];
  let o = ne(e, r), { $$slots: u = {}, $$scope: s } = e;
  const a = Ye(u);
  let { href: f = "" } = e, { label: c = "" } = e, { mode: d = "normal" } = e, { activeClass: k = void 0 } = e, { nonActiveClass: g = void 0 } = e, { onclick: m = (z) => {
  } } = e;
  const b = Pe("sidebarContext") ?? {}, p = Pe("activeUrl");
  let C = "";
  p.subscribe((z) => {
    i(10, C = z);
  });
  const w = {
    normal: "uikit-flex-1 uikit-ms-3 uikit-whitespace-nowrap",
    mini: ""
  }, v = {
    normal: "uikit-flex uikit-items-center",
    mini: "uikit-flex uikit-flex-col uikit-items-center uikit-justify-center uikit-space-y-2"
  };
  function E(z) {
    F.call(this, t, z);
  }
  function O(z) {
    F.call(this, t, z);
  }
  function I(z) {
    F.call(this, t, z);
  }
  function U(z) {
    F.call(this, t, z);
  }
  function $(z) {
    F.call(this, t, z);
  }
  function W(z) {
    F.call(this, t, z);
  }
  function P(z) {
    F.call(this, t, z);
  }
  function H(z) {
    F.call(this, t, z);
  }
  const me = (z) => {
    m && m(z);
  };
  return t.$$set = (z) => {
    i(26, e = N(N({}, e), B(z))), i(6, o = ne(e, r)), "href" in z && i(0, f = z.href), "label" in z && i(1, c = z.label), "mode" in z && i(2, d = z.mode), "activeClass" in z && i(8, k = z.activeClass), "nonActiveClass" in z && i(9, g = z.nonActiveClass), "onclick" in z && i(3, m = z.onclick), "$$scope" in z && i(12, s = z.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*sidebarUrl, href*/
    1025 && i(11, l = C ? f === C : !1), i(4, n = A(
      v[d],
      l ? k ?? b.activeClass : g ?? b.nonActiveClass,
      e.class
    ));
  }, e = B(e), [
    f,
    c,
    d,
    m,
    n,
    w,
    o,
    a,
    k,
    g,
    C,
    l,
    s,
    u,
    E,
    O,
    I,
    U,
    $,
    W,
    P,
    H,
    me
  ];
}
class Sd extends ie {
  constructor(e) {
    super(), te(this, e, Cd, wd, V, {
      href: 0,
      label: 1,
      mode: 2,
      activeClass: 8,
      nonActiveClass: 9,
      onclick: 3
    });
  }
}
const Td = (t) => ({}), Il = (t) => ({}), Ed = (t) => ({}), Al = (t) => ({}), Id = (t) => ({}), Ol = (t) => ({});
function Ad(t) {
  let e, i;
  return {
    c() {
      e = pe("svg"), i = pe("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "m1 1 4 4 4-4"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(l, n) {
      T(l, e, n), R(e, i);
    },
    p: oe,
    i: oe,
    o: oe,
    d(l) {
      l && S(e);
    }
  };
}
function Od(t) {
  let e;
  const i = (
    /*#slots*/
    t[14].arrowdown
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[13],
    Il
  );
  return {
    c() {
      l && l.c();
    },
    m(n, r) {
      l && l.m(n, r), e = !0;
    },
    p(n, r) {
      l && l.p && (!e || r & /*$$scope*/
      8192) && Z(
        l,
        i,
        n,
        /*$$scope*/
        n[13],
        e ? J(
          i,
          /*$$scope*/
          n[13],
          r,
          Td
        ) : x(
          /*$$scope*/
          n[13]
        ),
        Il
      );
    },
    i(n) {
      e || (_(l, n), e = !0);
    },
    o(n) {
      y(l, n), e = !1;
    },
    d(n) {
      l && l.d(n);
    }
  };
}
function Pd(t) {
  let e, i, l, n;
  const r = [Ld, Md], o = [];
  function u(s, a) {
    return (
      /*$$slots*/
      s[11].arrowup ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = r[e](t), {
    c() {
      i.c(), l = ue();
    },
    m(s, a) {
      o[e].m(s, a), T(s, l, a), n = !0;
    },
    p(s, a) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (le(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), re(), i = o[e], i ? i.p(s, a) : (i = o[e] = r[e](s), i.c()), _(i, 1), i.m(l.parentNode, l));
    },
    i(s) {
      n || (_(i), n = !0);
    },
    o(s) {
      y(i), n = !1;
    },
    d(s) {
      s && S(l), o[e].d(s);
    }
  };
}
function Md(t) {
  let e, i;
  return {
    c() {
      e = pe("svg"), i = pe("path"), h(i, "stroke", "currentColor"), h(i, "stroke-linecap", "round"), h(i, "stroke-linejoin", "round"), h(i, "stroke-width", "2"), h(i, "d", "M9 5 5 1 1 5"), h(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), h(e, "aria-hidden", "true"), h(e, "xmlns", "http://www.w3.org/2000/svg"), h(e, "fill", "none"), h(e, "viewBox", "0 0 10 6");
    },
    m(l, n) {
      T(l, e, n), R(e, i);
    },
    p: oe,
    i: oe,
    o: oe,
    d(l) {
      l && S(e);
    }
  };
}
function Ld(t) {
  let e;
  const i = (
    /*#slots*/
    t[14].arrowup
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[13],
    Al
  );
  return {
    c() {
      l && l.c();
    },
    m(n, r) {
      l && l.m(n, r), e = !0;
    },
    p(n, r) {
      l && l.p && (!e || r & /*$$scope*/
      8192) && Z(
        l,
        i,
        n,
        /*$$scope*/
        n[13],
        e ? J(
          i,
          /*$$scope*/
          n[13],
          r,
          Ed
        ) : x(
          /*$$scope*/
          n[13]
        ),
        Al
      );
    },
    i(n) {
      e || (_(l, n), e = !0);
    },
    o(n) {
      y(l, n), e = !1;
    },
    d(n) {
      l && l.d(n);
    }
  };
}
function Pl(t) {
  let e, i, l, n;
  const r = (
    /*#slots*/
    t[14].default
  ), o = Y(
    r,
    t,
    /*$$scope*/
    t[13],
    null
  );
  return {
    c() {
      e = L("ul"), o && o.c(), h(e, "class", i = /*ulClass*/
      t[6][
        /*mode*/
        t[2]
      ]);
    },
    m(u, s) {
      T(u, e, s), o && o.m(e, null), n = !0;
    },
    p(u, s) {
      t = u, o && o.p && (!n || s & /*$$scope*/
      8192) && Z(
        o,
        r,
        t,
        /*$$scope*/
        t[13],
        n ? J(
          r,
          /*$$scope*/
          t[13],
          s,
          null
        ) : x(
          /*$$scope*/
          t[13]
        ),
        null
      ), (!n || s & /*mode*/
      4 && i !== (i = /*ulClass*/
      t[6][
        /*mode*/
        t[2]
      ])) && h(e, "class", i);
    },
    i(u) {
      n || (_(o, u), u && Me(() => {
        n && (l || (l = je(
          e,
          /*multiple*/
          t[7],
          /*transitionParams*/
          t[3],
          !0
        )), l.run(1));
      }), n = !0);
    },
    o(u) {
      y(o, u), u && (l || (l = je(
        e,
        /*multiple*/
        t[7],
        /*transitionParams*/
        t[3],
        !1
      )), l.run(0)), n = !1;
    },
    d(u) {
      u && S(e), o && o.d(u), u && l && l.end();
    }
  };
}
function Nd(t) {
  let e, i, l, n, r, o, u, s, a, f, c, d, k, g;
  const m = (
    /*#slots*/
    t[14].icon
  ), b = Y(
    m,
    t,
    /*$$scope*/
    t[13],
    Ol
  ), p = [Pd, Od, Ad], C = [];
  function w(I, U) {
    return (
      /*isOpen*/
      I[0] && /*mode*/
      I[2] === "normal" ? 0 : (
        /*$$slots*/
        I[11].arrowdown && /*mode*/
        I[2] === "normal" ? 1 : (
          /*mode*/
          I[2] === "normal" ? 2 : -1
        )
      )
    );
  }
  ~(s = w(t)) && (a = C[s] = p[s](t));
  let v = [
    /*$$restProps*/
    t[9],
    {
      class: f = A(
        /*btnClass*/
        t[4][
          /*mode*/
          t[2]
        ],
        /*$$props*/
        t[10].class
      )
    },
    { "aria-controls": "sidebar-dropdown" }
  ], E = {};
  for (let I = 0; I < v.length; I += 1)
    E = N(E, v[I]);
  let O = (
    /*isOpen*/
    t[0] && /*mode*/
    t[2] === "normal" && Pl(t)
  );
  return {
    c() {
      e = L("li"), i = L("button"), b && b.c(), l = G(), n = L("span"), r = ke(
        /*label*/
        t[1]
      ), u = G(), a && a.c(), c = G(), O && O.c(), h(n, "class", o = /*spanClass*/
      t[5][
        /*mode*/
        t[2]
      ]), ae(i, E);
    },
    m(I, U) {
      T(I, e, U), R(e, i), b && b.m(i, null), R(i, l), R(i, n), R(n, r), R(i, u), ~s && C[s].m(i, null), i.autofocus && i.focus(), R(e, c), O && O.m(e, null), d = !0, k || (g = D(
        i,
        "click",
        /*click_handler*/
        t[15]
      ), k = !0);
    },
    p(I, [U]) {
      b && b.p && (!d || U & /*$$scope*/
      8192) && Z(
        b,
        m,
        I,
        /*$$scope*/
        I[13],
        d ? J(
          m,
          /*$$scope*/
          I[13],
          U,
          Id
        ) : x(
          /*$$scope*/
          I[13]
        ),
        Ol
      ), (!d || U & /*label*/
      2) && be(
        r,
        /*label*/
        I[1]
      ), (!d || U & /*mode*/
      4 && o !== (o = /*spanClass*/
      I[5][
        /*mode*/
        I[2]
      ])) && h(n, "class", o);
      let $ = s;
      s = w(I), s === $ ? ~s && C[s].p(I, U) : (a && (le(), y(C[$], 1, 1, () => {
        C[$] = null;
      }), re()), ~s ? (a = C[s], a ? a.p(I, U) : (a = C[s] = p[s](I), a.c()), _(a, 1), a.m(i, null)) : a = null), ae(i, E = fe(v, [
        U & /*$$restProps*/
        512 && /*$$restProps*/
        I[9],
        (!d || U & /*mode, $$props*/
        1028 && f !== (f = A(
          /*btnClass*/
          I[4][
            /*mode*/
            I[2]
          ],
          /*$$props*/
          I[10].class
        ))) && { class: f },
        { "aria-controls": "sidebar-dropdown" }
      ])), /*isOpen*/
      I[0] && /*mode*/
      I[2] === "normal" ? O ? (O.p(I, U), U & /*isOpen, mode*/
      5 && _(O, 1)) : (O = Pl(I), O.c(), _(O, 1), O.m(e, null)) : O && (le(), y(O, 1, 1, () => {
        O = null;
      }), re());
    },
    i(I) {
      d || (_(b, I), _(a), _(O), d = !0);
    },
    o(I) {
      y(b, I), y(a), y(O), d = !1;
    },
    d(I) {
      I && S(e), b && b.d(I), ~s && C[s].d(), O && O.d(), k = !1, g();
    }
  };
}
function zd(t, e, i) {
  const l = ["label", "mode", "transitionType", "transitionParams", "isOpen"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e;
  const u = Ye(r);
  let { label: s = "" } = e, { mode: a = "normal" } = e, { transitionType: f = "slide" } = e, { transitionParams: c = {} } = e;
  const d = {
    normal: "uikit-flex uikit-items-center uikit-p-2 uikit-w-full uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg uikit-transition uikit-duration-75 uikit-group hover:uikit-bg-gray-100 dark:uikit-text-white dark:hover:uikit-bg-gray-700",
    mini: "uikit-flex uikit-flex-col uikit-items-center uikit-mx-auto uikit-justify-center uikit-space-y-2"
  }, k = {
    normal: "uikit-flex-1 uikit-ms-3 uikit-text-left uikit-whitespace-nowrap",
    mini: "uikit-flex-1"
  }, g = {
    normal: "uikit-py-2 uikit-space-y-2",
    mini: "uikit-hidden"
  }, m = (w, v) => {
    switch (f) {
      case "blur":
        return Fi(w, v);
      case "fly":
        return Ct(w, v);
      case "fade":
        return Zt(w, v);
      default:
        return ji(w, v);
    }
  };
  let { isOpen: b = !1 } = e;
  const p = () => {
    i(0, b = !b);
  }, C = () => p();
  return t.$$set = (w) => {
    i(10, e = N(N({}, e), B(w))), i(9, n = ne(e, l)), "label" in w && i(1, s = w.label), "mode" in w && i(2, a = w.mode), "transitionType" in w && i(12, f = w.transitionType), "transitionParams" in w && i(3, c = w.transitionParams), "isOpen" in w && i(0, b = w.isOpen), "$$scope" in w && i(13, o = w.$$scope);
  }, e = B(e), [
    b,
    s,
    a,
    c,
    d,
    k,
    g,
    m,
    p,
    n,
    e,
    u,
    f,
    o,
    r,
    C
  ];
}
class Rd extends ie {
  constructor(e) {
    super(), te(this, e, zd, Nd, V, {
      label: 1,
      mode: 2,
      transitionType: 12,
      transitionParams: 3,
      isOpen: 0
    });
  }
}
function Dd(t) {
  let e, i, l, n, r, o, u = [
    /*$$restProps*/
    t[5],
    { href: (
      /*href*/
      t[1]
    ) },
    {
      class: n = A(
        /*active*/
        t[4] ? (
          /*activeClass*/
          t[3]
        ) : (
          /*aClass*/
          t[0]
        ),
        /*$$props*/
        t[6].class
      )
    }
  ], s = {};
  for (let a = 0; a < u.length; a += 1)
    s = N(s, u[a]);
  return {
    c() {
      e = L("li"), i = L("a"), l = ke(
        /*label*/
        t[2]
      ), ae(i, s);
    },
    m(a, f) {
      T(a, e, f), R(e, i), R(i, l), r || (o = [
        D(
          i,
          "blur",
          /*blur_handler*/
          t[7]
        ),
        D(
          i,
          "click",
          /*click_handler*/
          t[8]
        ),
        D(
          i,
          "focus",
          /*focus_handler*/
          t[9]
        ),
        D(
          i,
          "keydown",
          /*keydown_handler*/
          t[10]
        ),
        D(
          i,
          "keypress",
          /*keypress_handler*/
          t[11]
        ),
        D(
          i,
          "keyup",
          /*keyup_handler*/
          t[12]
        ),
        D(
          i,
          "mouseenter",
          /*mouseenter_handler*/
          t[13]
        ),
        D(
          i,
          "mouseleave",
          /*mouseleave_handler*/
          t[14]
        ),
        D(
          i,
          "mouseover",
          /*mouseover_handler*/
          t[15]
        )
      ], r = !0);
    },
    p(a, [f]) {
      f & /*label*/
      4 && co(
        l,
        /*label*/
        a[2],
        s.contenteditable
      ), ae(i, s = fe(u, [
        f & /*$$restProps*/
        32 && /*$$restProps*/
        a[5],
        f & /*href*/
        2 && { href: (
          /*href*/
          a[1]
        ) },
        f & /*active, activeClass, aClass, $$props*/
        89 && n !== (n = A(
          /*active*/
          a[4] ? (
            /*activeClass*/
            a[3]
          ) : (
            /*aClass*/
            a[0]
          ),
          /*$$props*/
          a[6].class
        )) && { class: n }
      ]));
    },
    i: oe,
    o: oe,
    d(a) {
      a && S(e), r = !1, Ce(o);
    }
  };
}
function Bd(t, e, i) {
  const l = ["aClass", "href", "label", "activeClass", "active"];
  let n = ne(e, l), { aClass: r = "uikit-flex uikit-items-center uikit-p-2 uikit-ps-11 uikit-w-full uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-rounded-lg uikit-transition uikit-duration-75 uikit-group hover:uikit-bg-gray-100 dark:uikit-text-white dark:hover:uikit-bg-gray-700" } = e, { href: o = "" } = e, { label: u = "" } = e, { activeClass: s = "uikit-flex uikit-items-center uikit-p-2 uikit-ps-11 uikit-text-base uikit-font-normal uikit-text-gray-900 uikit-bg-gray-200 dark:uikit-bg-gray-700 uikit-rounded-lg dark:uikit-text-white hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700" } = e, { active: a = !1 } = e;
  function f(w) {
    F.call(this, t, w);
  }
  function c(w) {
    F.call(this, t, w);
  }
  function d(w) {
    F.call(this, t, w);
  }
  function k(w) {
    F.call(this, t, w);
  }
  function g(w) {
    F.call(this, t, w);
  }
  function m(w) {
    F.call(this, t, w);
  }
  function b(w) {
    F.call(this, t, w);
  }
  function p(w) {
    F.call(this, t, w);
  }
  function C(w) {
    F.call(this, t, w);
  }
  return t.$$set = (w) => {
    i(6, e = N(N({}, e), B(w))), i(5, n = ne(e, l)), "aClass" in w && i(0, r = w.aClass), "href" in w && i(1, o = w.href), "label" in w && i(2, u = w.label), "activeClass" in w && i(3, s = w.activeClass), "active" in w && i(4, a = w.active);
  }, e = B(e), [
    r,
    o,
    u,
    s,
    a,
    n,
    e,
    f,
    c,
    d,
    k,
    g,
    m,
    b,
    p,
    C
  ];
}
class Fd extends ie {
  constructor(e) {
    super(), te(this, e, Bd, Dd, V, {
      aClass: 0,
      href: 1,
      label: 2,
      activeClass: 3,
      active: 4
    });
  }
}
function jd(t) {
  let e, i, l;
  const n = (
    /*#slots*/
    t[5].default
  ), r = Y(
    n,
    t,
    /*$$scope*/
    t[4],
    null
  );
  let o = [
    /*$$restProps*/
    t[2],
    {
      class: i = A(
        /*divClass*/
        t[1][
          /*mode*/
          t[0]
        ],
        /*$$props*/
        t[3].class
      )
    }
  ], u = {};
  for (let s = 0; s < o.length; s += 1)
    u = N(u, o[s]);
  return {
    c() {
      e = L("div"), r && r.c(), ae(e, u);
    },
    m(s, a) {
      T(s, e, a), r && r.m(e, null), l = !0;
    },
    p(s, [a]) {
      r && r.p && (!l || a & /*$$scope*/
      16) && Z(
        r,
        n,
        s,
        /*$$scope*/
        s[4],
        l ? J(
          n,
          /*$$scope*/
          s[4],
          a,
          null
        ) : x(
          /*$$scope*/
          s[4]
        ),
        null
      ), ae(e, u = fe(o, [
        a & /*$$restProps*/
        4 && /*$$restProps*/
        s[2],
        (!l || a & /*mode, $$props*/
        9 && i !== (i = A(
          /*divClass*/
          s[1][
            /*mode*/
            s[0]
          ],
          /*$$props*/
          s[3].class
        ))) && { class: i }
      ]));
    },
    i(s) {
      l || (_(r, s), l = !0);
    },
    o(s) {
      y(r, s), l = !1;
    },
    d(s) {
      s && S(e), r && r.d(s);
    }
  };
}
function Wd(t, e, i) {
  const l = ["mode"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e, { mode: u = "normal" } = e;
  const s = {
    normal: "uikit-overflow-y-auto uikit-py-4 uikit-px-3 uikit-bg-gray-50 uikit-rounded dark:uikit-bg-gray-800",
    mini: "uikit-overflow-y-auto uikit-py-4 uikit-bg-gray-50 uikit-rounded dark:uikit-bg-gray-800"
  };
  return t.$$set = (a) => {
    i(3, e = N(N({}, e), B(a))), i(2, n = ne(e, l)), "mode" in a && i(0, u = a.mode), "$$scope" in a && i(4, o = a.$$scope);
  }, e = B(e), [u, s, n, e, o, r];
}
class Ud extends ie {
  constructor(e) {
    super(), te(this, e, Wd, jd, V, { mode: 0 });
  }
}
function Ml(t, e, i) {
  const l = t.slice();
  return l[4] = e[i].href, l[5] = e[i].label, l[6] = e[i].tips, l[7] = e[i].icon, l[8] = e[i].children, l[9] = e[i].onclick, l;
}
function Ll(t, e, i) {
  const l = t.slice();
  return l[5] = e[i].label, l[4] = e[i].href, l;
}
function Gd(t) {
  let e, i;
  return e = new Sd({
    props: {
      label: (
        /*label*/
        t[5]
      ),
      href: (
        /*href*/
        t[4]
      ),
      onclick: (
        /*onclick*/
        t[9]
      ),
      mode: (
        /*mode*/
        t[0]
      ),
      active: (
        /*activeUrl*/
        t[2] === /*href*/
        t[4]
      ),
      $$slots: {
        subtext: [qd],
        icon: [Vd]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*items*/
      2 && (r.label = /*label*/
      l[5]), n & /*items*/
      2 && (r.href = /*href*/
      l[4]), n & /*items*/
      2 && (r.onclick = /*onclick*/
      l[9]), n & /*mode*/
      1 && (r.mode = /*mode*/
      l[0]), n & /*activeUrl, items*/
      6 && (r.active = /*activeUrl*/
      l[2] === /*href*/
      l[4]), n & /*$$scope, items*/
      16386 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function Hd(t) {
  let e, i;
  return e = new Rd({
    props: {
      mode: (
        /*mode*/
        t[0]
      ),
      label: (
        /*label*/
        t[5]
      ),
      $$slots: {
        icon: [Qd],
        default: [Xd]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*mode*/
      1 && (r.mode = /*mode*/
      l[0]), n & /*items*/
      2 && (r.label = /*label*/
      l[5]), n & /*$$scope, items*/
      16386 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function Vd(t) {
  let e, i, l;
  return e = new gt({
    props: {
      name: (
        /*icon*/
        t[7]
      ),
      className: "uikit-w-5 uikit-h-5 uikit-text-gray-500 uikit-transition uikit-duration-75 dark:uikit-text-gray-400 group-hover:uikit-text-gray-900 dark:group-hover:uikit-text-white"
    }
  }), {
    c() {
      K(e.$$.fragment), i = G();
    },
    m(n, r) {
      X(e, n, r), T(n, i, r), l = !0;
    },
    p(n, r) {
      const o = {};
      r & /*items*/
      2 && (o.name = /*icon*/
      n[7]), e.$set(o);
    },
    i(n) {
      l || (_(e.$$.fragment, n), l = !0);
    },
    o(n) {
      y(e.$$.fragment, n), l = !1;
    },
    d(n) {
      n && S(i), Q(e, n);
    }
  };
}
function Nl(t) {
  let e, i = (
    /*tips*/
    t[6] + ""
  ), l;
  return {
    c() {
      e = L("span"), l = ke(i), h(e, "class", "uikit-inline-flex uikit-justify-center uikit-items-center uikit-p-3 uikit-ms-3 uikit-w-3 uikit-h-3 uikit-text-sm uikit-font-medium uikit-text-primary-600 uikit-bg-primary-200 uikit-rounded-full dark:uikit-bg-primary-900 dark:uikit-text-primary-200");
    },
    m(n, r) {
      T(n, e, r), R(e, l);
    },
    p(n, r) {
      r & /*items*/
      2 && i !== (i = /*tips*/
      n[6] + "") && be(l, i);
    },
    d(n) {
      n && S(e);
    }
  };
}
function qd(t) {
  let e, i = (
    /*tips*/
    t[6] && Nl(t)
  );
  return {
    c() {
      i && i.c(), e = G();
    },
    m(l, n) {
      i && i.m(l, n), T(l, e, n);
    },
    p(l, n) {
      /*tips*/
      l[6] ? i ? i.p(l, n) : (i = Nl(l), i.c(), i.m(e.parentNode, e)) : i && (i.d(1), i = null);
    },
    d(l) {
      l && S(e), i && i.d(l);
    }
  };
}
function zl(t) {
  let e, i;
  return e = new Fd({
    props: {
      label: (
        /*label*/
        t[5]
      ),
      href: (
        /*href*/
        t[4]
      )
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*items*/
      2 && (r.label = /*label*/
      l[5]), n & /*items*/
      2 && (r.href = /*href*/
      l[4]), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function Xd(t) {
  let e, i, l = ge(
    /*children*/
    t[8] || []
  ), n = [];
  for (let o = 0; o < l.length; o += 1)
    n[o] = zl(Ll(t, l, o));
  const r = (o) => y(n[o], 1, 1, () => {
    n[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      e = G();
    },
    m(o, u) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, u);
      T(o, e, u), i = !0;
    },
    p(o, u) {
      if (u & /*items*/
      2) {
        l = ge(
          /*children*/
          o[8] || []
        );
        let s;
        for (s = 0; s < l.length; s += 1) {
          const a = Ll(o, l, s);
          n[s] ? (n[s].p(a, u), _(n[s], 1)) : (n[s] = zl(a), n[s].c(), _(n[s], 1), n[s].m(e.parentNode, e));
        }
        for (le(), s = l.length; s < n.length; s += 1)
          r(s);
        re();
      }
    },
    i(o) {
      if (!i) {
        for (let u = 0; u < l.length; u += 1)
          _(n[u]);
        i = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let u = 0; u < n.length; u += 1)
        y(n[u]);
      i = !1;
    },
    d(o) {
      o && S(e), Ie(n, o);
    }
  };
}
function Qd(t) {
  let e, i, l;
  return e = new gt({
    props: {
      name: (
        /*icon*/
        t[7]
      ),
      className: "uikit-w-5 uikit-h-5 uikit-text-gray-500 uikit-transition uikit-duration-75 dark:uikit-text-gray-400 group-hover:uikit-text-gray-900 dark:group-hover:uikit-text-white"
    }
  }), {
    c() {
      K(e.$$.fragment), i = G();
    },
    m(n, r) {
      X(e, n, r), T(n, i, r), l = !0;
    },
    p(n, r) {
      const o = {};
      r & /*items*/
      2 && (o.name = /*icon*/
      n[7]), e.$set(o);
    },
    i(n) {
      l || (_(e.$$.fragment, n), l = !0);
    },
    o(n) {
      y(e.$$.fragment, n), l = !1;
    },
    d(n) {
      n && S(i), Q(e, n);
    }
  };
}
function Rl(t) {
  let e, i, l, n;
  const r = [Hd, Gd], o = [];
  function u(s, a) {
    return (
      /*children*/
      s[8] && /*children*/
      s[8].length > 0 ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = r[e](t), {
    c() {
      i.c(), l = ue();
    },
    m(s, a) {
      o[e].m(s, a), T(s, l, a), n = !0;
    },
    p(s, a) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (le(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), re(), i = o[e], i ? i.p(s, a) : (i = o[e] = r[e](s), i.c()), _(i, 1), i.m(l.parentNode, l));
    },
    i(s) {
      n || (_(i), n = !0);
    },
    o(s) {
      y(i), n = !1;
    },
    d(s) {
      s && S(l), o[e].d(s);
    }
  };
}
function Kd(t) {
  let e, i, l = ge(
    /*items*/
    t[1]
  ), n = [];
  for (let o = 0; o < l.length; o += 1)
    n[o] = Rl(Ml(t, l, o));
  const r = (o) => y(n[o], 1, 1, () => {
    n[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      e = ue();
    },
    m(o, u) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, u);
      T(o, e, u), i = !0;
    },
    p(o, u) {
      if (u & /*mode, items, activeUrl*/
      7) {
        l = ge(
          /*items*/
          o[1]
        );
        let s;
        for (s = 0; s < l.length; s += 1) {
          const a = Ml(o, l, s);
          n[s] ? (n[s].p(a, u), _(n[s], 1)) : (n[s] = Rl(a), n[s].c(), _(n[s], 1), n[s].m(e.parentNode, e));
        }
        for (le(), s = l.length; s < n.length; s += 1)
          r(s);
        re();
      }
    },
    i(o) {
      if (!i) {
        for (let u = 0; u < l.length; u += 1)
          _(n[u]);
        i = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let u = 0; u < n.length; u += 1)
        y(n[u]);
      i = !1;
    },
    d(o) {
      o && S(e), Ie(n, o);
    }
  };
}
function Yd(t) {
  let e, i;
  return e = new pd({
    props: {
      $$slots: { default: [Kd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*$$scope, items, mode, activeUrl*/
      16391 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function Jd(t) {
  let e, i;
  return e = new Ud({
    props: {
      mode: (
        /*mode*/
        t[0]
      ),
      $$slots: { default: [Yd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*mode*/
      1 && (r.mode = /*mode*/
      l[0]), n & /*$$scope, items, mode, activeUrl*/
      16391 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function Zd(t) {
  let e, i;
  return e = new hd({
    props: {
      mode: (
        /*mode*/
        t[0]
      ),
      activeUrl: (
        /*activeUrl*/
        t[2]
      ),
      $$slots: { default: [Jd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, [n]) {
      const r = {};
      n & /*mode*/
      1 && (r.mode = /*mode*/
      l[0]), n & /*activeUrl*/
      4 && (r.activeUrl = /*activeUrl*/
      l[2]), n & /*$$scope, mode, items, activeUrl*/
      16391 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function xd(t, e, i) {
  let { mode: l = "normal" } = e, n;
  Je(() => {
    i(2, n = window.location.pathname);
  });
  let { items: r = [] } = e;
  function o() {
    i(0, l = l === "normal" ? "mini" : "normal");
  }
  return t.$$set = (u) => {
    "mode" in u && i(0, l = u.mode), "items" in u && i(1, r = u.items);
  }, window && window.location && i(2, n = window.location.pathname), [l, r, n, o];
}
let $d = class extends ie {
  constructor(e) {
    super(), te(this, e, xd, Zd, V, { mode: 0, items: 1, toggle: 3 });
  }
  get toggle() {
    return this.$$.ctx[3];
  }
};
const v0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new $d({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
};
function ek(t) {
  let e, i, l, n, r = [
    /*$$restProps*/
    t[5],
    { role: "status" },
    {
      class: n = A(
        "uikit-inline -uikit-mt-px uikit-animate-spin dark:uikit-text-gray-600",
        /*iconsize*/
        t[3],
        /*bg*/
        t[0],
        /*fillColorClass*/
        t[4],
        /*$$props*/
        t[6].class
      )
    },
    { viewBox: "0 0 100 101" },
    { fill: "none" },
    { xmlns: "http://www.w3.org/2000/svg" }
  ], o = {};
  for (let u = 0; u < r.length; u += 1)
    o = N(o, r[u]);
  return {
    c() {
      e = pe("svg"), i = pe("path"), l = pe("path"), h(i, "d", "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"), h(
        i,
        "fill",
        /*currentColor*/
        t[2]
      ), h(l, "d", "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"), h(
        l,
        "fill",
        /*currentFill*/
        t[1]
      ), Wt(e, o);
    },
    m(u, s) {
      T(u, e, s), R(e, i), R(e, l);
    },
    p(u, [s]) {
      s & /*currentColor*/
      4 && h(
        i,
        "fill",
        /*currentColor*/
        u[2]
      ), s & /*currentFill*/
      2 && h(
        l,
        "fill",
        /*currentFill*/
        u[1]
      ), Wt(e, o = fe(r, [
        s & /*$$restProps*/
        32 && /*$$restProps*/
        u[5],
        { role: "status" },
        s & /*bg, $$props*/
        65 && n !== (n = A(
          "uikit-inline -uikit-mt-px uikit-animate-spin dark:uikit-text-gray-600",
          /*iconsize*/
          u[3],
          /*bg*/
          u[0],
          /*fillColorClass*/
          u[4],
          /*$$props*/
          u[6].class
        )) && { class: n },
        { viewBox: "0 0 100 101" },
        { fill: "none" },
        { xmlns: "http://www.w3.org/2000/svg" }
      ]));
    },
    i: oe,
    o: oe,
    d(u) {
      u && S(e);
    }
  };
}
function tk(t, e, i) {
  const l = ["color", "bg", "customColor", "size", "currentFill", "currentColor"];
  let n = ne(e, l), { color: r = "primary" } = e, { bg: o = "uikit-text-gray-300" } = e, { customColor: u = "" } = e, { size: s = "8" } = e, { currentFill: a = "currentFill" } = e, { currentColor: f = "currentColor" } = e, c = `uikit-w-${s} uikit-h-${s}`;
  a !== "currentFill" && (r = void 0);
  const d = {
    primary: "uikit-fill-primary-600",
    blue: "uikit-fill-blue-600",
    gray: "uikit-fill-gray-600 dark:uikit-fill-gray-300",
    green: "uikit-fill-green-500",
    red: "uikit-fill-red-600",
    yellow: "uikit-fill-yellow-400",
    pink: "uikit-fill-pink-600",
    purple: "uikit-fill-purple-600",
    white: "uikit-fill-white",
    custom: u
  };
  let k = r === void 0 ? "" : d[r] ?? d.blue;
  return t.$$set = (g) => {
    i(6, e = N(N({}, e), B(g))), i(5, n = ne(e, l)), "color" in g && i(7, r = g.color), "bg" in g && i(0, o = g.bg), "customColor" in g && i(8, u = g.customColor), "size" in g && i(9, s = g.size), "currentFill" in g && i(1, a = g.currentFill), "currentColor" in g && i(2, f = g.currentColor);
  }, e = B(e), [
    o,
    a,
    f,
    c,
    k,
    n,
    e,
    r,
    u,
    s
  ];
}
class Jr extends ie {
  constructor(e) {
    super(), te(this, e, tk, ek, V, {
      color: 7,
      bg: 0,
      customColor: 8,
      size: 9,
      currentFill: 1,
      currentColor: 2
    });
  }
}
function ik(t) {
  let e, i;
  return e = new Jr({
    props: {
      size: (
        /*size*/
        t[0]
      ),
      color: (
        /*color*/
        t[1]
      )
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*size*/
      1 && (r.size = /*size*/
      l[0]), n & /*color*/
      2 && (r.color = /*color*/
      l[1]), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function nk(t) {
  let e, i, l;
  return i = new Mi({
    props: {
      outline: (
        /*buttonoutline*/
        t[3]
      ),
      color: "dark",
      $$slots: { default: [lk] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = L("div"), K(i.$$.fragment), h(e, "class", "uikit-flex uikit-flex-wrap uikit-items-center uikit-gap-2");
    },
    m(n, r) {
      T(n, e, r), X(i, e, null), l = !0;
    },
    p(n, r) {
      const o = {};
      r & /*buttonoutline*/
      8 && (o.outline = /*buttonoutline*/
      n[3]), r & /*$$scope, size*/
      17 && (o.$$scope = { dirty: r, ctx: n }), i.$set(o);
    },
    i(n) {
      l || (_(i.$$.fragment, n), l = !0);
    },
    o(n) {
      y(i.$$.fragment, n), l = !1;
    },
    d(n) {
      n && S(e), Q(i);
    }
  };
}
function lk(t) {
  let e, i, l;
  return e = new Jr({
    props: {
      class: "uikit-me-3",
      size: (
        /*size*/
        t[0]
      )
    }
  }), {
    c() {
      K(e.$$.fragment), i = ke(`
            Loading ...`);
    },
    m(n, r) {
      X(e, n, r), T(n, i, r), l = !0;
    },
    p(n, r) {
      const o = {};
      r & /*size*/
      1 && (o.size = /*size*/
      n[0]), e.$set(o);
    },
    i(n) {
      l || (_(e.$$.fragment, n), l = !0);
    },
    o(n) {
      y(e.$$.fragment, n), l = !1;
    },
    d(n) {
      n && S(i), Q(e, n);
    }
  };
}
function rk(t) {
  let e, i, l, n;
  const r = [nk, ik], o = [];
  function u(s, a) {
    return (
      /*button*/
      s[2] ? 0 : 1
    );
  }
  return e = u(t), i = o[e] = r[e](t), {
    c() {
      i.c(), l = ue();
    },
    m(s, a) {
      o[e].m(s, a), T(s, l, a), n = !0;
    },
    p(s, [a]) {
      let f = e;
      e = u(s), e === f ? o[e].p(s, a) : (le(), y(o[f], 1, 1, () => {
        o[f] = null;
      }), re(), i = o[e], i ? i.p(s, a) : (i = o[e] = r[e](s), i.c()), _(i, 1), i.m(l.parentNode, l));
    },
    i(s) {
      n || (_(i), n = !0);
    },
    o(s) {
      y(i), n = !1;
    },
    d(s) {
      s && S(l), o[e].d(s);
    }
  };
}
function ok(t, e, i) {
  let { size: l = "4" } = e, { color: n = "green" } = e, { button: r = !1 } = e, { buttonoutline: o = !1 } = e;
  return t.$$set = (u) => {
    "size" in u && i(0, l = u.size), "color" in u && i(1, n = u.color), "button" in u && i(2, r = u.button), "buttonoutline" in u && i(3, o = u.buttonoutline);
  }, [l, n, r, o];
}
class sk extends ie {
  constructor(e) {
    super(), te(this, e, ok, rk, V, {
      size: 0,
      color: 1,
      button: 2,
      buttonoutline: 3
    });
  }
}
const w0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new sk({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
}, uk = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`;
function ak(t) {
  function e(i) {
    if (!(i.key === "Tab" || i.keyCode === 9))
      return;
    const n = Array.from(t.querySelectorAll(uk));
    let r = n.indexOf(document.activeElement ?? t);
    r === -1 && i.shiftKey && (r = 0), r += n.length + (i.shiftKey ? -1 : 1), r %= n.length, n[r].focus(), i.preventDefault();
  }
  return document.addEventListener("keydown", e, !0), {
    destroy() {
      document.removeEventListener("keydown", e, !0);
    }
  };
}
const fk = (t) => ({}), Dl = (t) => ({}), ck = (t) => ({}), Bl = (t) => ({});
function Fl(t) {
  let e, i, l, n, r, o, u, s, a, f;
  const c = [
    { rounded: !0 },
    { shadow: !0 },
    /*$$restProps*/
    t[15],
    { class: (
      /*frameClass*/
      t[5]
    ) }
  ];
  let d = {
    $$slots: { default: [mk] },
    $$scope: { ctx: t }
  };
  for (let k = 0; k < c.length; k += 1)
    d = N(d, c[k]);
  return r = new rt({ props: d }), {
    c() {
      e = L("div"), i = G(), l = L("div"), n = L("div"), K(r.$$.fragment), h(
        e,
        "class",
        /*backdropCls*/
        t[12]
      ), h(n, "class", o = "uikit-flex uikit-relative " + /*sizes*/
      t[8][
        /*size*/
        t[2]
      ] + " uikit-w-full uikit-max-h-full"), h(l, "class", u = A(
        /*dialogClass*/
        t[4],
        /*$$props*/
        t[14].classDialog,
        .../*getPlacementClasses*/
        t[7]()
      )), h(l, "tabindex", "-1"), h(l, "aria-modal", "true"), h(l, "role", "dialog");
    },
    m(k, g) {
      T(k, e, g), T(k, i, g), T(k, l, g), R(l, n), X(r, n, null), s = !0, a || (f = [
        D(
          l,
          "keydown",
          /*handleKeys*/
          t[13]
        ),
        D(l, "wheel", lo(
          /*wheel_handler*/
          t[23]
        ), { passive: !1 }),
        Be(
          /*prepareFocus*/
          t[6].call(null, l)
        ),
        Be(ak.call(null, l)),
        D(
          l,
          "click",
          /*onAutoClose*/
          t[9]
        ),
        D(
          l,
          "mousedown",
          /*onOutsideClose*/
          t[10]
        )
      ], a = !0);
    },
    p(k, g) {
      const m = g & /*$$restProps, frameClass*/
      32800 ? fe(c, [
        c[0],
        c[1],
        g & /*$$restProps*/
        32768 && Ae(
          /*$$restProps*/
          k[15]
        ),
        g & /*frameClass*/
        32 && { class: (
          /*frameClass*/
          k[5]
        ) }
      ]) : {};
      g & /*$$scope, $$restProps, $$slots, $$props, dismissable, title*/
      33669130 && (m.$$scope = { dirty: g, ctx: k }), r.$set(m), (!s || g & /*size*/
      4 && o !== (o = "uikit-flex uikit-relative " + /*sizes*/
      k[8][
        /*size*/
        k[2]
      ] + " uikit-w-full uikit-max-h-full")) && h(n, "class", o), (!s || g & /*dialogClass, $$props*/
      16400 && u !== (u = A(
        /*dialogClass*/
        k[4],
        /*$$props*/
        k[14].classDialog,
        .../*getPlacementClasses*/
        k[7]()
      ))) && h(l, "class", u);
    },
    i(k) {
      s || (_(r.$$.fragment, k), s = !0);
    },
    o(k) {
      y(r.$$.fragment, k), s = !1;
    },
    d(k) {
      k && (S(e), S(i), S(l)), Q(r), a = !1, Ce(f);
    }
  };
}
function jl(t) {
  let e, i;
  return e = new rt({
    props: {
      color: (
        /*$$restProps*/
        t[15].color
      ),
      class: "uikit-flex uikit-justify-between uikit-items-center uikit-p-4 uikit-rounded-t-lg",
      $$slots: { default: [kk] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*$$restProps*/
      32768 && (r.color = /*$$restProps*/
      l[15].color), n & /*$$scope, $$restProps, dismissable, title*/
      33587210 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function dk(t) {
  let e, i, l;
  return {
    c() {
      e = L("h3"), i = ke(
        /*title*/
        t[1]
      ), h(e, "class", l = "uikit-text-xl uikit-font-semibold " + /*$$restProps*/
      (t[15].color ? "" : "uikit-text-gray-900 dark:uikit-text-white") + " uikit-p-0");
    },
    m(n, r) {
      T(n, e, r), R(e, i);
    },
    p(n, r) {
      r & /*title*/
      2 && be(
        i,
        /*title*/
        n[1]
      ), r & /*$$restProps*/
      32768 && l !== (l = "uikit-text-xl uikit-font-semibold " + /*$$restProps*/
      (n[15].color ? "" : "uikit-text-gray-900 dark:uikit-text-white") + " uikit-p-0") && h(e, "class", l);
    },
    d(n) {
      n && S(e);
    }
  };
}
function Wl(t) {
  let e, i;
  return e = new Wi({
    props: {
      name: "Close modal",
      color: (
        /*$$restProps*/
        t[15].color
      )
    }
  }), e.$on(
    "click",
    /*hide*/
    t[11]
  ), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*$$restProps*/
      32768 && (r.color = /*$$restProps*/
      l[15].color), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function kk(t) {
  let e, i, l;
  const n = (
    /*#slots*/
    t[22].header
  ), r = Y(
    n,
    t,
    /*$$scope*/
    t[25],
    Bl
  ), o = r || dk(t);
  let u = (
    /*dismissable*/
    t[3] && Wl(t)
  );
  return {
    c() {
      o && o.c(), e = G(), u && u.c(), i = ue();
    },
    m(s, a) {
      o && o.m(s, a), T(s, e, a), u && u.m(s, a), T(s, i, a), l = !0;
    },
    p(s, a) {
      r ? r.p && (!l || a & /*$$scope*/
      33554432) && Z(
        r,
        n,
        s,
        /*$$scope*/
        s[25],
        l ? J(
          n,
          /*$$scope*/
          s[25],
          a,
          ck
        ) : x(
          /*$$scope*/
          s[25]
        ),
        Bl
      ) : o && o.p && (!l || a & /*$$restProps, title*/
      32770) && o.p(s, l ? a : -1), /*dismissable*/
      s[3] ? u ? (u.p(s, a), a & /*dismissable*/
      8 && _(u, 1)) : (u = Wl(s), u.c(), _(u, 1), u.m(i.parentNode, i)) : u && (le(), y(u, 1, 1, () => {
        u = null;
      }), re());
    },
    i(s) {
      l || (_(o, s), _(u), l = !0);
    },
    o(s) {
      y(o, s), y(u), l = !1;
    },
    d(s) {
      s && (S(e), S(i)), o && o.d(s), u && u.d(s);
    }
  };
}
function Ul(t) {
  let e, i;
  return e = new Wi({
    props: {
      name: "Close modal",
      class: "uikit-absolute uikit-top-3 uikit-end-2.5",
      color: (
        /*$$restProps*/
        t[15].color
      )
    }
  }), e.$on(
    "click",
    /*hide*/
    t[11]
  ), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*$$restProps*/
      32768 && (r.color = /*$$restProps*/
      l[15].color), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function Gl(t) {
  let e, i;
  return e = new rt({
    props: {
      color: (
        /*$$restProps*/
        t[15].color
      ),
      class: "uikit-flex uikit-items-center uikit-p-6 uikit-space-x-2 rtl:uikit-space-x-reverse uikit-rounded-b-lg",
      $$slots: { default: [gk] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*$$restProps*/
      32768 && (r.color = /*$$restProps*/
      l[15].color), n & /*$$scope*/
      33554432 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function gk(t) {
  let e;
  const i = (
    /*#slots*/
    t[22].footer
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[25],
    Dl
  );
  return {
    c() {
      l && l.c();
    },
    m(n, r) {
      l && l.m(n, r), e = !0;
    },
    p(n, r) {
      l && l.p && (!e || r & /*$$scope*/
      33554432) && Z(
        l,
        i,
        n,
        /*$$scope*/
        n[25],
        e ? J(
          i,
          /*$$scope*/
          n[25],
          r,
          fk
        ) : x(
          /*$$scope*/
          n[25]
        ),
        Dl
      );
    },
    i(n) {
      e || (_(l, n), e = !0);
    },
    o(n) {
      y(l, n), e = !1;
    },
    d(n) {
      l && l.d(n);
    }
  };
}
function mk(t) {
  let e, i, l, n, r, o, u, s, a, f = (
    /*$$slots*/
    (t[16].header || /*title*/
    t[1]) && jl(t)
  ), c = (
    /*dismissable*/
    t[3] && !/*$$slots*/
    t[16].header && !/*title*/
    t[1] && Ul(t)
  );
  const d = (
    /*#slots*/
    t[22].default
  ), k = Y(
    d,
    t,
    /*$$scope*/
    t[25],
    null
  );
  let g = (
    /*$$slots*/
    t[16].footer && Gl(t)
  );
  return {
    c() {
      f && f.c(), e = G(), i = L("div"), c && c.c(), l = G(), k && k.c(), r = G(), g && g.c(), o = ue(), h(i, "class", n = A(
        "uikit-p-6 uikit-space-y-6 uikit-flex-1 uikit-overflow-y-auto uikit-overscroll-contain",
        /*$$props*/
        t[14].bodyClass
      )), h(i, "role", "document");
    },
    m(m, b) {
      f && f.m(m, b), T(m, e, b), T(m, i, b), c && c.m(i, null), R(i, l), k && k.m(i, null), T(m, r, b), g && g.m(m, b), T(m, o, b), u = !0, s || (a = [
        D(i, "keydown", nn(
          /*handleKeys*/
          t[13]
        )),
        D(i, "wheel", nn(
          /*wheel_handler_1*/
          t[24]
        ), { passive: !0 })
      ], s = !0);
    },
    p(m, b) {
      /*$$slots*/
      m[16].header || /*title*/
      m[1] ? f ? (f.p(m, b), b & /*$$slots, title*/
      65538 && _(f, 1)) : (f = jl(m), f.c(), _(f, 1), f.m(e.parentNode, e)) : f && (le(), y(f, 1, 1, () => {
        f = null;
      }), re()), /*dismissable*/
      m[3] && !/*$$slots*/
      m[16].header && !/*title*/
      m[1] ? c ? (c.p(m, b), b & /*dismissable, $$slots, title*/
      65546 && _(c, 1)) : (c = Ul(m), c.c(), _(c, 1), c.m(i, l)) : c && (le(), y(c, 1, 1, () => {
        c = null;
      }), re()), k && k.p && (!u || b & /*$$scope*/
      33554432) && Z(
        k,
        d,
        m,
        /*$$scope*/
        m[25],
        u ? J(
          d,
          /*$$scope*/
          m[25],
          b,
          null
        ) : x(
          /*$$scope*/
          m[25]
        ),
        null
      ), (!u || b & /*$$props*/
      16384 && n !== (n = A(
        "uikit-p-6 uikit-space-y-6 uikit-flex-1 uikit-overflow-y-auto uikit-overscroll-contain",
        /*$$props*/
        m[14].bodyClass
      ))) && h(i, "class", n), /*$$slots*/
      m[16].footer ? g ? (g.p(m, b), b & /*$$slots*/
      65536 && _(g, 1)) : (g = Gl(m), g.c(), _(g, 1), g.m(o.parentNode, o)) : g && (le(), y(g, 1, 1, () => {
        g = null;
      }), re());
    },
    i(m) {
      u || (_(f), _(c), _(k, m), _(g), u = !0);
    },
    o(m) {
      y(f), y(c), y(k, m), y(g), u = !1;
    },
    d(m) {
      m && (S(e), S(i), S(r), S(o)), f && f.d(m), c && c.d(), k && k.d(m), g && g.d(m), s = !1, Ce(a);
    }
  };
}
function hk(t) {
  let e, i, l = (
    /*open*/
    t[0] && Fl(t)
  );
  return {
    c() {
      l && l.c(), e = ue();
    },
    m(n, r) {
      l && l.m(n, r), T(n, e, r), i = !0;
    },
    p(n, [r]) {
      /*open*/
      n[0] ? l ? (l.p(n, r), r & /*open*/
      1 && _(l, 1)) : (l = Fl(n), l.c(), _(l, 1), l.m(e.parentNode, e)) : l && (le(), y(l, 1, 1, () => {
        l = null;
      }), re());
    },
    i(n) {
      i || (_(l), i = !0);
    },
    o(n) {
      y(l), i = !1;
    },
    d(n) {
      n && S(e), l && l.d(n);
    }
  };
}
function bk(t, e, i) {
  const l = [
    "open",
    "title",
    "size",
    "placement",
    "autoclose",
    "dismissable",
    "backdropClass",
    "defaultClass",
    "outsideclose",
    "dialogClass"
  ];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e;
  const u = Ye(r);
  let { open: s = !1 } = e, { title: a = "" } = e, { size: f = "md" } = e, { placement: c = "center" } = e, { autoclose: d = !1 } = e, { dismissable: k = !0 } = e, { backdropClass: g = "uikit-fixed uikit-inset-0 uikit-z-40 uikit-bg-gray-900 uikit-bg-opacity-50 dark:uikit-bg-opacity-80" } = e, { defaultClass: m = "uikit-relative uikit-flex uikit-flex-col uikit-mx-auto" } = e, { outsideclose: b = !1 } = e, { dialogClass: p = "uikit-fixed uikit-top-0 uikit-start-0 uikit-end-0 uikit-h-modal md:uikit-inset-0 md:uikit-h-full uikit-z-50 uikit-w-full uikit-p-4 uikit-flex" } = e;
  const C = He();
  function w(j) {
    const M = document.createTreeWalker(j, NodeFilter.SHOW_ELEMENT);
    let se;
    for (; se = M.nextNode(); )
      if (se instanceof HTMLElement) {
        const de = se, [ve, Ne] = W(de);
        (ve || Ne) && (de.tabIndex = 0);
      }
    j.focus();
  }
  const v = () => {
    switch (c) {
      case "top-left":
        return ["uikit-justify-start", "uikit-items-start"];
      case "top-center":
        return ["uikit-justify-center", "uikit-items-start"];
      case "top-right":
        return ["uikit-justify-end", "uikit-items-start"];
      case "center-left":
        return ["uikit-justify-start", "uikit-items-center"];
      case "center":
        return ["uikit-justify-center", "uikit-items-center"];
      case "center-right":
        return ["uikit-justify-end", "uikit-items-center"];
      case "bottom-left":
        return ["uikit-justify-start", "uikit-items-end"];
      case "bottom-center":
        return ["uikit-justify-center", "uikit-items-end"];
      case "bottom-right":
        return ["uikit-justify-end", "uikit-items-end"];
      default:
        return ["uikit-justify-center", "uikit-items-center"];
    }
  }, E = {
    xs: "uikit-max-w-md",
    sm: "uikit-max-w-lg",
    md: "uikit-max-w-2xl",
    lg: "uikit-max-w-4xl",
    xl: "uikit-max-w-7xl"
  }, O = (j) => {
    const M = j.target;
    d && (M == null ? void 0 : M.tagName) === "BUTTON" && U(j);
  }, I = (j) => {
    const M = j.target;
    b && M === j.currentTarget && U(j);
  }, U = (j) => {
    j.preventDefault(), i(0, s = !1);
  };
  let $;
  const W = (j) => [
    j.scrollWidth > j.clientWidth && ["scroll", "auto"].indexOf(getComputedStyle(j).overflowX) >= 0,
    j.scrollHeight > j.clientHeight && ["scroll", "auto"].indexOf(getComputedStyle(j).overflowY) >= 0
  ];
  let P = A(g, e.classBackdrop);
  function H(j) {
    if (j.key === "Escape" && k)
      return U(j);
  }
  function me(j) {
    F.call(this, t, j);
  }
  function z(j) {
    F.call(this, t, j);
  }
  return t.$$set = (j) => {
    i(14, e = N(N({}, e), B(j))), i(15, n = ne(e, l)), "open" in j && i(0, s = j.open), "title" in j && i(1, a = j.title), "size" in j && i(2, f = j.size), "placement" in j && i(17, c = j.placement), "autoclose" in j && i(18, d = j.autoclose), "dismissable" in j && i(3, k = j.dismissable), "backdropClass" in j && i(19, g = j.backdropClass), "defaultClass" in j && i(20, m = j.defaultClass), "outsideclose" in j && i(21, b = j.outsideclose), "dialogClass" in j && i(4, p = j.dialogClass), "$$scope" in j && i(25, o = j.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && C(s ? "open" : "close"), i(5, $ = A(m, "uikit-w-full uikit-divide-y", e.class));
  }, e = B(e), [
    s,
    a,
    f,
    k,
    p,
    $,
    w,
    v,
    E,
    O,
    I,
    U,
    P,
    H,
    e,
    n,
    u,
    c,
    d,
    g,
    m,
    b,
    r,
    me,
    z,
    o
  ];
}
class _k extends ie {
  constructor(e) {
    super(), te(this, e, bk, hk, V, {
      open: 0,
      title: 1,
      size: 2,
      placement: 17,
      autoclose: 18,
      dismissable: 3,
      backdropClass: 19,
      defaultClass: 20,
      outsideclose: 21,
      dialogClass: 4
    });
  }
}
function Hl(t, e, i) {
  const l = t.slice();
  return l[9] = e[i], l;
}
function Vl(t) {
  let e, i = (
    /*item*/
    t[9] + ""
  ), l, n;
  return {
    c() {
      e = L("p"), l = ke(i), n = G(), h(e, "class", "uikit-text-base uikit-leading-relaxed uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(r, o) {
      T(r, e, o), R(e, l), R(e, n);
    },
    p(r, o) {
      o & /*descriptions*/
      4 && i !== (i = /*item*/
      r[9] + "") && be(l, i);
    },
    d(r) {
      r && S(e);
    }
  };
}
function pk(t) {
  let e, i = ge(
    /*descriptions*/
    t[2]
  ), l = [];
  for (let n = 0; n < i.length; n += 1)
    l[n] = Vl(Hl(t, i, n));
  return {
    c() {
      for (let n = 0; n < l.length; n += 1)
        l[n].c();
      e = ue();
    },
    m(n, r) {
      for (let o = 0; o < l.length; o += 1)
        l[o] && l[o].m(n, r);
      T(n, e, r);
    },
    p(n, r) {
      if (r & /*descriptions*/
      4) {
        i = ge(
          /*descriptions*/
          n[2]
        );
        let o;
        for (o = 0; o < i.length; o += 1) {
          const u = Hl(n, i, o);
          l[o] ? l[o].p(u, r) : (l[o] = Vl(u), l[o].c(), l[o].m(e.parentNode, e));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = i.length;
      }
    },
    d(n) {
      n && S(e), Ie(l, n);
    }
  };
}
function ql(t) {
  let e, i, l, n;
  return e = new Mi({
    props: {
      $$slots: { default: [yk] },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "click",
    /*click_handler*/
    t[6]
  ), l = new Mi({
    props: {
      color: "alternative",
      $$slots: { default: [vk] },
      $$scope: { ctx: t }
    }
  }), l.$on(
    "click",
    /*click_handler_1*/
    t[7]
  ), {
    c() {
      K(e.$$.fragment), i = G(), K(l.$$.fragment);
    },
    m(r, o) {
      X(e, r, o), T(r, i, o), X(l, r, o), n = !0;
    },
    p(r, o) {
      const u = {};
      o & /*$$scope*/
      4096 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
      const s = {};
      o & /*$$scope*/
      4096 && (s.$$scope = { dirty: o, ctx: r }), l.$set(s);
    },
    i(r) {
      n || (_(e.$$.fragment, r), _(l.$$.fragment, r), n = !0);
    },
    o(r) {
      y(e.$$.fragment, r), y(l.$$.fragment, r), n = !1;
    },
    d(r) {
      r && S(i), Q(e, r), Q(l, r);
    }
  };
}
function yk(t) {
  let e;
  return {
    c() {
      e = ke("I accept");
    },
    m(i, l) {
      T(i, e, l);
    },
    d(i) {
      i && S(e);
    }
  };
}
function vk(t) {
  let e;
  return {
    c() {
      e = ke("Decline");
    },
    m(i, l) {
      T(i, e, l);
    },
    d(i) {
      i && S(e);
    }
  };
}
function wk(t) {
  let e, i, l = (
    /*footer*/
    t[1] && ql(t)
  );
  return {
    c() {
      l && l.c(), e = ue();
    },
    m(n, r) {
      l && l.m(n, r), T(n, e, r), i = !0;
    },
    p(n, r) {
      /*footer*/
      n[1] ? l ? (l.p(n, r), r & /*footer*/
      2 && _(l, 1)) : (l = ql(n), l.c(), _(l, 1), l.m(e.parentNode, e)) : l && (le(), y(l, 1, 1, () => {
        l = null;
      }), re());
    },
    i(n) {
      i || (_(l), i = !0);
    },
    o(n) {
      y(l), i = !1;
    },
    d(n) {
      n && S(e), l && l.d(n);
    }
  };
}
function Ck(t) {
  let e, i, l;
  function n(o) {
    t[8](o);
  }
  let r = {
    title: (
      /*title*/
      t[0]
    ),
    autoclose: !0,
    outsideclose: !0,
    $$slots: {
      footer: [wk],
      default: [pk]
    },
    $$scope: { ctx: t }
  };
  return (
    /*clickOutsideModal*/
    t[3] !== void 0 && (r.open = /*clickOutsideModal*/
    t[3]), e = new _k({ props: r }), Se.push(() => Ot(e, "open", n)), {
      c() {
        K(e.$$.fragment);
      },
      m(o, u) {
        X(e, o, u), l = !0;
      },
      p(o, [u]) {
        const s = {};
        u & /*title*/
        1 && (s.title = /*title*/
        o[0]), u & /*$$scope, footer, descriptions*/
        4102 && (s.$$scope = { dirty: u, ctx: o }), !i && u & /*clickOutsideModal*/
        8 && (i = !0, s.open = /*clickOutsideModal*/
        o[3], At(() => i = !1)), e.$set(s);
      },
      i(o) {
        l || (_(e.$$.fragment, o), l = !0);
      },
      o(o) {
        y(e.$$.fragment, o), l = !1;
      },
      d(o) {
        Q(e, o);
      }
    }
  );
}
function Sk(t, e, i) {
  let l = !1, { title: n = "" } = e, { footer: r = !1 } = e, { descriptions: o = [] } = e;
  function u() {
    i(3, l = !l);
  }
  let s = He();
  const a = (d) => s("success", d), f = (d) => s("fail", d);
  function c(d) {
    l = d, i(3, l);
  }
  return t.$$set = (d) => {
    "title" in d && i(0, n = d.title), "footer" in d && i(1, r = d.footer), "descriptions" in d && i(2, o = d.descriptions);
  }, [
    n,
    r,
    o,
    l,
    s,
    u,
    a,
    f,
    c
  ];
}
class Tk extends ie {
  constructor(e) {
    super(), te(this, e, Sk, Ck, V, {
      title: 0,
      footer: 1,
      descriptions: 2,
      toggle: 5
    });
  }
  get toggle() {
    return this.$$.ctx[5];
  }
}
const C0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new Tk({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
};
function Xl(t, e, i) {
  const l = t.slice();
  return l[7] = e[i], l;
}
const Ek = (t) => ({ item: t & /*items*/
1 }), Ql = (t) => ({ item: (
  /*items*/
  t[0][0]
) }), Ik = (t) => ({ item: t & /*items*/
1 }), Kl = (t) => ({ item: (
  /*item*/
  t[7]
) });
function Yl(t) {
  let e;
  const i = (
    /*#slots*/
    t[6].default
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[5],
    Ql
  );
  return {
    c() {
      l && l.c();
    },
    m(n, r) {
      l && l.m(n, r), e = !0;
    },
    p(n, r) {
      l && l.p && (!e || r & /*$$scope, items*/
      33) && Z(
        l,
        i,
        n,
        /*$$scope*/
        n[5],
        e ? J(
          i,
          /*$$scope*/
          n[5],
          r,
          Ek
        ) : x(
          /*$$scope*/
          n[5]
        ),
        Ql
      );
    },
    i(n) {
      e || (_(l, n), e = !0);
    },
    o(n) {
      y(l, n), e = !1;
    },
    d(n) {
      l && l.d(n);
    }
  };
}
function Ak(t) {
  let e, i, l, n, r, o;
  return {
    c() {
      e = L("div"), i = L("img"), o = G(), vt(i.src, l = /*item*/
      t[7].src) || h(i, "src", l), h(i, "alt", n = /*item*/
      t[7].alt), h(i, "class", r = A(
        /*imgClass*/
        t[1],
        /*$$props*/
        t[3].classImg
      ));
    },
    m(u, s) {
      T(u, e, s), R(e, i), T(u, o, s);
    },
    p(u, s) {
      s & /*items*/
      1 && !vt(i.src, l = /*item*/
      u[7].src) && h(i, "src", l), s & /*items*/
      1 && n !== (n = /*item*/
      u[7].alt) && h(i, "alt", n), s & /*imgClass, $$props*/
      10 && r !== (r = A(
        /*imgClass*/
        u[1],
        /*$$props*/
        u[3].classImg
      )) && h(i, "class", r);
    },
    d(u) {
      u && (S(e), S(o));
    }
  };
}
function Jl(t) {
  let e;
  const i = (
    /*#slots*/
    t[6].default
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[5],
    Kl
  ), n = l || Ak(t);
  return {
    c() {
      n && n.c();
    },
    m(r, o) {
      n && n.m(r, o), e = !0;
    },
    p(r, o) {
      l ? l.p && (!e || o & /*$$scope, items*/
      33) && Z(
        l,
        i,
        r,
        /*$$scope*/
        r[5],
        e ? J(
          i,
          /*$$scope*/
          r[5],
          o,
          Ik
        ) : x(
          /*$$scope*/
          r[5]
        ),
        Kl
      ) : n && n.p && (!e || o & /*items, imgClass, $$props*/
      11) && n.p(r, e ? o : -1);
    },
    i(r) {
      e || (_(n, r), e = !0);
    },
    o(r) {
      y(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Ok(t) {
  let e, i, l, n, r = ge(
    /*items*/
    t[0]
  ), o = [];
  for (let c = 0; c < r.length; c += 1)
    o[c] = Jl(Xl(t, r, c));
  const u = (c) => y(o[c], 1, 1, () => {
    o[c] = null;
  });
  let s = null;
  r.length || (s = Yl(t));
  let a = [
    /*$$restProps*/
    t[4],
    { class: (
      /*divClass*/
      t[2]
    ) }
  ], f = {};
  for (let c = 0; c < a.length; c += 1)
    f = N(f, a[c]);
  return {
    c() {
      e = L("div");
      for (let c = 0; c < o.length; c += 1)
        o[c].c();
      s && s.c(), ae(e, f);
    },
    m(c, d) {
      T(c, e, d);
      for (let k = 0; k < o.length; k += 1)
        o[k] && o[k].m(e, null);
      s && s.m(e, null), i = !0, l || (n = Be(Pk.call(null, e)), l = !0);
    },
    p(c, [d]) {
      if (d & /*items, twMerge, imgClass, $$props, $$scope*/
      43) {
        r = ge(
          /*items*/
          c[0]
        );
        let k;
        for (k = 0; k < r.length; k += 1) {
          const g = Xl(c, r, k);
          o[k] ? (o[k].p(g, d), _(o[k], 1)) : (o[k] = Jl(g), o[k].c(), _(o[k], 1), o[k].m(e, null));
        }
        for (le(), k = r.length; k < o.length; k += 1)
          u(k);
        re(), !r.length && s ? s.p(c, d) : r.length ? s && (le(), y(s, 1, 1, () => {
          s = null;
        }), re()) : (s = Yl(c), s.c(), _(s, 1), s.m(e, null));
      }
      ae(e, f = fe(a, [
        d & /*$$restProps*/
        16 && /*$$restProps*/
        c[4],
        (!i || d & /*divClass*/
        4) && { class: (
          /*divClass*/
          c[2]
        ) }
      ]));
    },
    i(c) {
      if (!i) {
        for (let d = 0; d < r.length; d += 1)
          _(o[d]);
        i = !0;
      }
    },
    o(c) {
      o = o.filter(Boolean);
      for (let d = 0; d < o.length; d += 1)
        y(o[d]);
      i = !1;
    },
    d(c) {
      c && S(e), Ie(o, c), s && s.d(), l = !1, n();
    }
  };
}
function Pk(t) {
  getComputedStyle(t).gap === "normal" && (t.style.gap = "inherit");
}
function Mk(t, e, i) {
  let l;
  const n = ["items", "imgClass"];
  let r = ne(e, n), { $$slots: o = {}, $$scope: u } = e, { items: s = [] } = e, { imgClass: a = "uikit-h-auto uikit-max-w-full uikit-rounded-lg" } = e;
  return t.$$set = (f) => {
    i(3, e = N(N({}, e), B(f))), i(4, r = ne(e, n)), "items" in f && i(0, s = f.items), "imgClass" in f && i(1, a = f.imgClass), "$$scope" in f && i(5, u = f.$$scope);
  }, t.$$.update = () => {
    i(2, l = A("uikit-grid", e.class));
  }, e = B(e), [s, a, l, e, r, u, o];
}
class Lk extends ie {
  constructor(e) {
    super(), te(this, e, Mk, Ok, V, { items: 0, imgClass: 1 });
  }
}
function Nk(t) {
  let e, i;
  return e = new Lk({
    props: {
      items: (
        /*images*/
        t[0]
      ),
      class: A(
        "uikit-gap-4",
        /*colClass*/
        t[2][
          /*col*/
          t[1]
        ]
      )
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, [n]) {
      const r = {};
      n & /*images*/
      1 && (r.items = /*images*/
      l[0]), n & /*col*/
      2 && (r.class = A(
        "uikit-gap-4",
        /*colClass*/
        l[2][
          /*col*/
          l[1]
        ]
      )), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function zk(t, e, i) {
  let { images: l = [] } = e, { col: n = "2" } = e;
  const r = {
    1: "uikit-grid-cols-1",
    2: "uikit-grid-cols-2",
    3: "uikit-grid-cols-3",
    4: "uikit-grid-cols-4",
    5: "uikit-grid-cols-5",
    6: "uikit-grid-cols-6",
    7: "uikit-grid-cols-7",
    8: "uikit-grid-cols-8",
    9: "uikit-grid-cols-9",
    10: "uikit-grid-cols-10",
    11: "uikit-grid-cols-11",
    12: "uikit-grid-cols-12"
  };
  return t.$$set = (o) => {
    "images" in o && i(0, l = o.images), "col" in o && i(1, n = o.col);
  }, [l, n, r];
}
class Rk extends ie {
  constructor(e) {
    super(), te(this, e, zk, Nk, V, { images: 0, col: 1 });
  }
}
const S0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new Rk({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
}, Dk = (t) => ({}), Zl = (t) => ({}), Bk = (t) => ({ style: t & /*style*/
2 }), xl = (t) => ({ style: (
  /*style*/
  t[1]
) });
function $l(t) {
  let e;
  const i = (
    /*#slots*/
    t[9].divider
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[8],
    Zl
  ), n = l || Fk();
  return {
    c() {
      n && n.c();
    },
    m(r, o) {
      n && n.m(r, o), e = !0;
    },
    p(r, o) {
      l && l.p && (!e || o & /*$$scope*/
      256) && Z(
        l,
        i,
        r,
        /*$$scope*/
        r[8],
        e ? J(
          i,
          /*$$scope*/
          r[8],
          o,
          Dk
        ) : x(
          /*$$scope*/
          r[8]
        ),
        Zl
      );
    },
    i(r) {
      e || (_(n, r), e = !0);
    },
    o(r) {
      y(n, r), e = !1;
    },
    d(r) {
      n && n.d(r);
    }
  };
}
function Fk(t) {
  let e;
  return {
    c() {
      e = L("div"), h(e, "class", "uikit-h-px uikit-bg-gray-200 dark:uikit-bg-gray-700");
    },
    m(i, l) {
      T(i, e, l);
    },
    p: oe,
    d(i) {
      i && S(e);
    }
  };
}
function jk(t) {
  let e, i, l, n, r, o, u;
  const s = (
    /*#slots*/
    t[9].default
  ), a = Y(
    s,
    t,
    /*$$scope*/
    t[8],
    xl
  );
  let f = (
    /*divider*/
    t[0] && $l(t)
  );
  return {
    c() {
      e = L("ul"), a && a.c(), i = G(), f && f.c(), l = G(), n = L("div"), h(
        e,
        "class",
        /*ulClass*/
        t[3]
      ), h(
        n,
        "class",
        /*contentClass*/
        t[2]
      ), h(n, "role", "tabpanel"), h(n, "aria-labelledby", "id-tab");
    },
    m(c, d) {
      T(c, e, d), a && a.m(e, null), T(c, i, d), f && f.m(c, d), T(c, l, d), T(c, n, d), r = !0, o || (u = Be(
        /*init*/
        t[4].call(null, n)
      ), o = !0);
    },
    p(c, [d]) {
      a && a.p && (!r || d & /*$$scope, style*/
      258) && Z(
        a,
        s,
        c,
        /*$$scope*/
        c[8],
        r ? J(
          s,
          /*$$scope*/
          c[8],
          d,
          Bk
        ) : x(
          /*$$scope*/
          c[8]
        ),
        xl
      ), (!r || d & /*ulClass*/
      8) && h(
        e,
        "class",
        /*ulClass*/
        c[3]
      ), /*divider*/
      c[0] ? f ? (f.p(c, d), d & /*divider*/
      1 && _(f, 1)) : (f = $l(c), f.c(), _(f, 1), f.m(l.parentNode, l)) : f && (le(), y(f, 1, 1, () => {
        f = null;
      }), re()), (!r || d & /*contentClass*/
      4) && h(
        n,
        "class",
        /*contentClass*/
        c[2]
      );
    },
    i(c) {
      r || (_(a, c), _(f), r = !0);
    },
    o(c) {
      y(a, c), y(f), r = !1;
    },
    d(c) {
      c && (S(e), S(i), S(l), S(n)), a && a.d(c), f && f.d(c), o = !1, u();
    }
  };
}
function Wk(t, e, i) {
  let l, { $$slots: n = {}, $$scope: r } = e, { style: o = "none" } = e, { defaultClass: u = "uikit-flex uikit-flex-wrap uikit-space-x-2 rtl:uikit-space-x-reverse" } = e, { contentClass: s = "uikit-p-4 uikit-bg-gray-50 uikit-rounded-lg dark:uikit-bg-gray-800 uikit-mt-4" } = e, { divider: a = !0 } = e, { activeClasses: f = "uikit-p-4 uikit-text-primary-600 uikit-bg-gray-100 uikit-rounded-t-lg dark:uikit-bg-gray-800 dark:uikit-text-primary-500" } = e, { inactiveClasses: c = "uikit-p-4 uikit-text-gray-500 uikit-rounded-t-lg hover:uikit-text-gray-600 hover:uikit-bg-gray-50 dark:uikit-text-gray-400 dark:hover:uikit-bg-gray-800 dark:hover:uikit-text-gray-300" } = e;
  const d = {
    full: "uikit-p-4 uikit-w-full group-first:uikit-rounded-s-lg group-last:uikit-rounded-e-lg uikit-text-gray-900 uikit-bg-gray-100 focus:uikit-ring-4 focus:uikit-ring-primary-300 focus:uikit-outline-none dark:uikit-bg-gray-700 dark:uikit-text-white",
    pill: "uikit-py-3 uikit-px-4 uikit-text-white uikit-bg-primary-600 uikit-rounded-lg",
    underline: "uikit-p-4 uikit-text-primary-600 uikit-border-b-2 uikit-border-primary-600 dark:uikit-text-primary-500 dark:uikit-border-primary-500",
    none: ""
  }, k = {
    full: "uikit-p-4 uikit-w-full group-first:uikit-rounded-s-lg group-last:uikit-rounded-e-lg uikit-text-gray-500 dark:uikit-text-gray-400 uikit-bg-white hover:uikit-text-gray-700 hover:uikit-bg-gray-50 focus:uikit-ring-4 focus:uikit-ring-primary-300 focus:uikit-outline-none dark:hover:uikit-text-white dark:uikit-bg-gray-800 dark:hover:uikit-bg-gray-700",
    pill: "uikit-py-3 uikit-px-4 uikit-text-gray-500 uikit-rounded-lg hover:uikit-text-gray-900 hover:uikit-bg-gray-100 dark:uikit-text-gray-400 dark:hover:uikit-bg-gray-800 dark:hover:uikit-text-white",
    underline: "uikit-p-4 uikit-border-b-2 uikit-border-transparent hover:uikit-text-gray-600 hover:uikit-border-gray-300 dark:hover:uikit-text-gray-300 uikit-text-gray-500 dark:uikit-text-gray-400",
    none: ""
  }, g = {
    activeClasses: d[o] || f,
    inactiveClasses: k[o] || c,
    selected: nt()
  };
  Ue("ctx", g);
  function m(b) {
    return { destroy: g.selected.subscribe((C) => {
      C && b.replaceChildren(C);
    }) };
  }
  return t.$$set = (b) => {
    i(13, e = N(N({}, e), B(b))), "style" in b && i(1, o = b.style), "defaultClass" in b && i(5, u = b.defaultClass), "contentClass" in b && i(2, s = b.contentClass), "divider" in b && i(0, a = b.divider), "activeClasses" in b && i(6, f = b.activeClasses), "inactiveClasses" in b && i(7, c = b.inactiveClasses), "$$scope" in b && i(8, r = b.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*style, divider*/
    3 && i(0, a = ["full", "pill"].includes(o) ? !1 : a), i(3, l = A(u, o === "underline" && "-uikit-mb-px", e.class));
  }, e = B(e), [
    a,
    o,
    s,
    l,
    m,
    u,
    f,
    c,
    r,
    n
  ];
}
class Uk extends ie {
  constructor(e) {
    super(), te(this, e, Wk, jk, V, {
      style: 1,
      defaultClass: 5,
      contentClass: 2,
      divider: 0,
      activeClasses: 6,
      inactiveClasses: 7
    });
  }
}
const Gk = (t) => ({}), er = (t) => ({});
function Hk(t) {
  let e;
  return {
    c() {
      e = ke(
        /*title*/
        t[1]
      );
    },
    m(i, l) {
      T(i, e, l);
    },
    p(i, l) {
      l & /*title*/
      2 && be(
        e,
        /*title*/
        i[1]
      );
    },
    d(i) {
      i && S(e);
    }
  };
}
function tr(t) {
  let e, i, l, n, r;
  const o = (
    /*#slots*/
    t[10].default
  ), u = Y(
    o,
    t,
    /*$$scope*/
    t[9],
    null
  );
  return {
    c() {
      e = L("div"), i = L("div"), u && u.c(), h(e, "class", "uikit-hidden tab_content_placeholder");
    },
    m(s, a) {
      T(s, e, a), R(e, i), u && u.m(i, null), l = !0, n || (r = Be(
        /*init*/
        t[3].call(null, i)
      ), n = !0);
    },
    p(s, a) {
      u && u.p && (!l || a & /*$$scope*/
      512) && Z(
        u,
        o,
        s,
        /*$$scope*/
        s[9],
        l ? J(
          o,
          /*$$scope*/
          s[9],
          a,
          null
        ) : x(
          /*$$scope*/
          s[9]
        ),
        null
      );
    },
    i(s) {
      l || (_(u, s), l = !0);
    },
    o(s) {
      y(u, s), l = !1;
    },
    d(s) {
      s && S(e), u && u.d(s), n = !1, r();
    }
  };
}
function Vk(t) {
  let e, i, l, n, r, o, u;
  const s = (
    /*#slots*/
    t[10].title
  ), a = Y(
    s,
    t,
    /*$$scope*/
    t[9],
    er
  ), f = a || Hk(t);
  let c = [
    { type: "button" },
    { role: "tab" },
    /*$$restProps*/
    t[5],
    { class: (
      /*buttonClass*/
      t[2]
    ) }
  ], d = {};
  for (let g = 0; g < c.length; g += 1)
    d = N(d, c[g]);
  let k = (
    /*open*/
    t[0] && tr(t)
  );
  return {
    c() {
      e = L("li"), i = L("button"), f && f.c(), l = G(), k && k.c(), ae(i, d), h(e, "class", n = A(
        "group",
        /*$$props*/
        t[4].class
      )), h(e, "role", "presentation");
    },
    m(g, m) {
      T(g, e, m), R(e, i), f && f.m(i, null), i.autofocus && i.focus(), R(e, l), k && k.m(e, null), r = !0, o || (u = [
        D(
          i,
          "click",
          /*click_handler_1*/
          t[21]
        ),
        D(
          i,
          "blur",
          /*blur_handler*/
          t[11]
        ),
        D(
          i,
          "click",
          /*click_handler*/
          t[12]
        ),
        D(
          i,
          "contextmenu",
          /*contextmenu_handler*/
          t[13]
        ),
        D(
          i,
          "focus",
          /*focus_handler*/
          t[14]
        ),
        D(
          i,
          "keydown",
          /*keydown_handler*/
          t[15]
        ),
        D(
          i,
          "keypress",
          /*keypress_handler*/
          t[16]
        ),
        D(
          i,
          "keyup",
          /*keyup_handler*/
          t[17]
        ),
        D(
          i,
          "mouseenter",
          /*mouseenter_handler*/
          t[18]
        ),
        D(
          i,
          "mouseleave",
          /*mouseleave_handler*/
          t[19]
        ),
        D(
          i,
          "mouseover",
          /*mouseover_handler*/
          t[20]
        )
      ], o = !0);
    },
    p(g, [m]) {
      a ? a.p && (!r || m & /*$$scope*/
      512) && Z(
        a,
        s,
        g,
        /*$$scope*/
        g[9],
        r ? J(
          s,
          /*$$scope*/
          g[9],
          m,
          Gk
        ) : x(
          /*$$scope*/
          g[9]
        ),
        er
      ) : f && f.p && (!r || m & /*title*/
      2) && f.p(g, r ? m : -1), ae(i, d = fe(c, [
        { type: "button" },
        { role: "tab" },
        m & /*$$restProps*/
        32 && /*$$restProps*/
        g[5],
        (!r || m & /*buttonClass*/
        4) && { class: (
          /*buttonClass*/
          g[2]
        ) }
      ])), /*open*/
      g[0] ? k ? (k.p(g, m), m & /*open*/
      1 && _(k, 1)) : (k = tr(g), k.c(), _(k, 1), k.m(e, null)) : k && (le(), y(k, 1, 1, () => {
        k = null;
      }), re()), (!r || m & /*$$props*/
      16 && n !== (n = A(
        "group",
        /*$$props*/
        g[4].class
      ))) && h(e, "class", n);
    },
    i(g) {
      r || (_(f, g), _(k), r = !0);
    },
    o(g) {
      y(f, g), y(k), r = !1;
    },
    d(g) {
      g && S(e), f && f.d(g), k && k.d(), o = !1, Ce(u);
    }
  };
}
function qk(t, e, i) {
  const l = ["open", "title", "activeClasses", "inactiveClasses", "defaultClass"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e, { open: u = !1 } = e, { title: s = "Tab title" } = e, { activeClasses: a = void 0 } = e, { inactiveClasses: f = void 0 } = e, { defaultClass: c = "uikit-inline-block uikit-text-sm uikit-font-medium uikit-text-center disabled:uikit-cursor-not-allowed" } = e;
  const d = Pe("ctx") ?? {}, k = d.selected ?? nt();
  function g(P) {
    return k.set(P), { destroy: k.subscribe((me) => {
      me !== P && i(0, u = !1);
    }) };
  }
  let m;
  function b(P) {
    F.call(this, t, P);
  }
  function p(P) {
    F.call(this, t, P);
  }
  function C(P) {
    F.call(this, t, P);
  }
  function w(P) {
    F.call(this, t, P);
  }
  function v(P) {
    F.call(this, t, P);
  }
  function E(P) {
    F.call(this, t, P);
  }
  function O(P) {
    F.call(this, t, P);
  }
  function I(P) {
    F.call(this, t, P);
  }
  function U(P) {
    F.call(this, t, P);
  }
  function $(P) {
    F.call(this, t, P);
  }
  const W = () => i(0, u = !0);
  return t.$$set = (P) => {
    i(4, e = N(N({}, e), B(P))), i(5, n = ne(e, l)), "open" in P && i(0, u = P.open), "title" in P && i(1, s = P.title), "activeClasses" in P && i(6, a = P.activeClasses), "inactiveClasses" in P && i(7, f = P.inactiveClasses), "defaultClass" in P && i(8, c = P.defaultClass), "$$scope" in P && i(9, o = P.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*defaultClass, open, activeClasses, inactiveClasses*/
    449 && i(2, m = A(
      c,
      u ? a ?? d.activeClasses : f ?? d.inactiveClasses,
      u && "active"
    ));
  }, e = B(e), [
    u,
    s,
    m,
    g,
    e,
    n,
    a,
    f,
    c,
    o,
    r,
    b,
    p,
    C,
    w,
    v,
    E,
    O,
    I,
    U,
    $,
    W
  ];
}
class Xk extends ie {
  constructor(e) {
    super(), te(this, e, qk, Vk, V, {
      open: 0,
      title: 1,
      activeClasses: 6,
      inactiveClasses: 7,
      defaultClass: 8
    });
  }
}
function Qk(t) {
  let e;
  return {
    c() {
      e = L("div");
    },
    m(i, l) {
      T(i, e, l), t[2](e);
    },
    p: oe,
    i: oe,
    o: oe,
    d(i) {
      i && S(e), t[2](null);
    }
  };
}
function Kk(t, e, i) {
  let { dom: l } = e, n;
  function r(o) {
    Se[o ? "unshift" : "push"](() => {
      n = o, i(0, n), i(1, l);
    });
  }
  return t.$$set = (o) => {
    "dom" in o && i(1, l = o.dom);
  }, t.$$.update = () => {
    t.$$.dirty & /*dom, domref*/
    3 && l && n && (i(0, n.innerHTML = "", n), n.appendChild(l));
  }, [n, l, r];
}
class Yk extends ie {
  constructor(e) {
    super(), te(this, e, Kk, Qk, V, { dom: 1 });
  }
}
function ir(t, e, i) {
  const l = t.slice();
  return l[4] = e[i].icon, l[5] = e[i].label, l[6] = e[i].content, l[8] = i, l;
}
function Jk(t) {
  let e, i, l, n;
  return i = new Yk({ props: { dom: (
    /*content*/
    t[6]
  ) } }), {
    c() {
      e = L("p"), K(i.$$.fragment), l = G(), h(e, "class", "uikit-text-sm uikit-text-gray-500 dark:uikit-text-gray-400");
    },
    m(r, o) {
      T(r, e, o), X(i, e, null), T(r, l, o), n = !0;
    },
    p(r, o) {
      const u = {};
      o & /*pages*/
      2 && (u.dom = /*content*/
      r[6]), i.$set(u);
    },
    i(r) {
      n || (_(i.$$.fragment, r), n = !0);
    },
    o(r) {
      y(i.$$.fragment, r), n = !1;
    },
    d(r) {
      r && (S(e), S(l)), Q(i);
    }
  };
}
function Zk(t) {
  let e, i, l, n = (
    /*label*/
    t[5] + ""
  ), r, o, u;
  return i = new gt({
    props: { size: "sm", name: (
      /*icon*/
      t[4]
    ) }
  }), {
    c() {
      e = L("div"), K(i.$$.fragment), l = G(), r = ke(n), o = G(), h(e, "slot", "title"), h(e, "class", "uikit-flex uikit-items-center uikit-gap-2");
    },
    m(s, a) {
      T(s, e, a), X(i, e, null), R(e, l), R(e, r), R(e, o), u = !0;
    },
    p(s, a) {
      const f = {};
      a & /*pages*/
      2 && (f.name = /*icon*/
      s[4]), i.$set(f), (!u || a & /*pages*/
      2) && n !== (n = /*label*/
      s[5] + "") && be(r, n);
    },
    i(s) {
      u || (_(i.$$.fragment, s), u = !0);
    },
    o(s) {
      y(i.$$.fragment, s), u = !1;
    },
    d(s) {
      s && S(e), Q(i);
    }
  };
}
function nr(t) {
  let e, i;
  return e = new Xk({
    props: {
      open: (
        /*idx*/
        t[0] === /*id*/
        t[8]
      ),
      $$slots: {
        title: [Zk],
        default: [Jk]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, n) {
      const r = {};
      n & /*idx*/
      1 && (r.open = /*idx*/
      l[0] === /*id*/
      l[8]), n & /*$$scope, pages*/
      514 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function xk(t) {
  let e, i, l = ge(
    /*pages*/
    t[1]
  ), n = [];
  for (let o = 0; o < l.length; o += 1)
    n[o] = nr(ir(t, l, o));
  const r = (o) => y(n[o], 1, 1, () => {
    n[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      e = ue();
    },
    m(o, u) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, u);
      T(o, e, u), i = !0;
    },
    p(o, u) {
      if (u & /*idx, pages*/
      3) {
        l = ge(
          /*pages*/
          o[1]
        );
        let s;
        for (s = 0; s < l.length; s += 1) {
          const a = ir(o, l, s);
          n[s] ? (n[s].p(a, u), _(n[s], 1)) : (n[s] = nr(a), n[s].c(), _(n[s], 1), n[s].m(e.parentNode, e));
        }
        for (le(), s = l.length; s < n.length; s += 1)
          r(s);
        re();
      }
    },
    i(o) {
      if (!i) {
        for (let u = 0; u < l.length; u += 1)
          _(n[u]);
        i = !0;
      }
    },
    o(o) {
      n = n.filter(Boolean);
      for (let u = 0; u < n.length; u += 1)
        y(n[u]);
      i = !1;
    },
    d(o) {
      o && S(e), Ie(n, o);
    }
  };
}
function $k(t) {
  let e, i;
  return e = new Uk({
    props: {
      style: (
        /*style*/
        t[2]
      ),
      $$slots: { default: [xk] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      K(e.$$.fragment);
    },
    m(l, n) {
      X(e, l, n), i = !0;
    },
    p(l, [n]) {
      const r = {};
      n & /*style*/
      4 && (r.style = /*style*/
      l[2]), n & /*$$scope, pages, idx*/
      515 && (r.$$scope = { dirty: n, ctx: l }), e.$set(r);
    },
    i(l) {
      i || (_(e.$$.fragment, l), i = !0);
    },
    o(l) {
      y(e.$$.fragment, l), i = !1;
    },
    d(l) {
      Q(e, l);
    }
  };
}
function e0(t, e, i) {
  let { pages: l = [] } = e, { idx: n = 0 } = e, { style: r = "underline" } = e;
  function o(u) {
    i(0, n = u);
  }
  return t.$$set = (u) => {
    "pages" in u && i(1, l = u.pages), "idx" in u && i(0, n = u.idx), "style" in u && i(2, r = u.style);
  }, [n, l, r, o];
}
class t0 extends ie {
  constructor(e) {
    super(), te(this, e, e0, $k, V, { pages: 1, idx: 0, style: 2, change: 3 });
  }
  get change() {
    return this.$$.ctx[3];
  }
}
const T0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  let l = new t0({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
}, E0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new gt({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
};
function i0(t) {
  let e;
  const i = (
    /*#slots*/
    t[4].default
  ), l = Y(
    i,
    t,
    /*$$scope*/
    t[6],
    null
  );
  return {
    c() {
      l && l.c();
    },
    m(n, r) {
      l && l.m(n, r), e = !0;
    },
    p(n, r) {
      l && l.p && (!e || r & /*$$scope*/
      64) && Z(
        l,
        i,
        n,
        /*$$scope*/
        n[6],
        e ? J(
          i,
          /*$$scope*/
          n[6],
          r,
          null
        ) : x(
          /*$$scope*/
          n[6]
        ),
        null
      );
    },
    i(n) {
      e || (_(l, n), e = !0);
    },
    o(n) {
      y(l, n), e = !1;
    },
    d(n) {
      l && l.d(n);
    }
  };
}
function n0(t) {
  let e, i;
  const l = [
    { rounded: !0 },
    { shadow: !0 },
    /*$$restProps*/
    t[1],
    { class: (
      /*toolTipClass*/
      t[0]
    ) }
  ];
  let n = {
    $$slots: { default: [i0] },
    $$scope: { ctx: t }
  };
  for (let r = 0; r < l.length; r += 1)
    n = N(n, l[r]);
  return e = new Kr({ props: n }), e.$on(
    "show",
    /*show_handler*/
    t[5]
  ), {
    c() {
      K(e.$$.fragment);
    },
    m(r, o) {
      X(e, r, o), i = !0;
    },
    p(r, [o]) {
      const u = o & /*$$restProps, toolTipClass*/
      3 ? fe(l, [
        l[0],
        l[1],
        o & /*$$restProps*/
        2 && Ae(
          /*$$restProps*/
          r[1]
        ),
        o & /*toolTipClass*/
        1 && { class: (
          /*toolTipClass*/
          r[0]
        ) }
      ]) : {};
      o & /*$$scope*/
      64 && (u.$$scope = { dirty: o, ctx: r }), e.$set(u);
    },
    i(r) {
      i || (_(e.$$.fragment, r), i = !0);
    },
    o(r) {
      y(e.$$.fragment, r), i = !1;
    },
    d(r) {
      Q(e, r);
    }
  };
}
function l0(t, e, i) {
  const l = ["type", "defaultClass"];
  let n = ne(e, l), { $$slots: r = {}, $$scope: o } = e, { type: u = "dark" } = e, { defaultClass: s = "uikit-py-2 uikit-px-3 uikit-text-sm uikit-font-medium" } = e;
  const a = {
    dark: "uikit-bg-gray-900 uikit-text-white dark:uikit-bg-gray-700",
    light: "uikit-border-gray-200 uikit-bg-white uikit-text-gray-900",
    auto: "uikit-bg-white uikit-text-gray-900 dark:uikit-bg-gray-700 dark:uikit-text-white border-gray-200 dark:border-gray-700",
    custom: ""
  };
  let f;
  function c(d) {
    F.call(this, t, d);
  }
  return t.$$set = (d) => {
    i(8, e = N(N({}, e), B(d))), i(1, n = ne(e, l)), "type" in d && i(2, u = d.type), "defaultClass" in d && i(3, s = d.defaultClass), "$$scope" in d && i(6, o = d.$$scope);
  }, t.$$.update = () => {
    n.color ? i(2, u = "custom") : i(1, n.color = "none", n), ["light", "auto"].includes(u) && i(1, n.border = !0, n), i(0, f = A("tooltip", s, a[u], e.class));
  }, e = B(e), [f, n, u, s, r, c, o];
}
class r0 extends ie {
  constructor(e) {
    super(), te(this, e, l0, n0, V, { type: 2, defaultClass: 3 });
  }
}
function o0(t) {
  let e;
  return {
    c() {
      e = ke(
        /*message*/
        t[1]
      );
    },
    m(i, l) {
      T(i, e, l);
    },
    p(i, l) {
      l & /*message*/
      2 && be(
        e,
        /*message*/
        i[1]
      );
    },
    d(i) {
      i && S(e);
    }
  };
}
function s0(t) {
  let e, i, l, n, r;
  return n = new r0({
    props: {
      reference: (
        /*ref*/
        t[0]
      ),
      trigger: "click",
      placement: (
        /*placement*/
        t[2]
      ),
      triggeredBy: "#" + /*id*/
      t[4],
      $$slots: { default: [o0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = L("button"), i = ke("tooltip"), l = G(), K(n.$$.fragment), h(
        e,
        "id",
        /*id*/
        t[4]
      ), h(e, "class", "uikit-hidden");
    },
    m(o, u) {
      T(o, e, u), R(e, i), t[6](e), T(o, l, u), X(n, o, u), r = !0;
    },
    p(o, [u]) {
      const s = {};
      u & /*ref*/
      1 && (s.reference = /*ref*/
      o[0]), u & /*placement*/
      4 && (s.placement = /*placement*/
      o[2]), u & /*$$scope, message*/
      258 && (s.$$scope = { dirty: u, ctx: o }), n.$set(s);
    },
    i(o) {
      r || (_(n.$$.fragment, o), r = !0);
    },
    o(o) {
      y(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && (S(e), S(l)), t[6](null), Q(n, o);
    }
  };
}
function u0(t, e, i) {
  let { ref: l = "" } = e, { message: n = "a tooltip" } = e, { placement: r = "top" } = e, o;
  function u() {
    o && o.click();
  }
  let a = "tooltip" + ((c) => {
    c = c || 32;
    var d = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", k = d.length, g = "";
    for (let m = 0; m < c; m++)
      g += d.charAt(Math.floor(Math.random() * k));
    return g;
  })(5);
  function f(c) {
    Se[c ? "unshift" : "push"](() => {
      o = c, i(3, o);
    });
  }
  return t.$$set = (c) => {
    "ref" in c && i(0, l = c.ref), "message" in c && i(1, n = c.message), "placement" in c && i(2, r = c.placement);
  }, [l, n, r, o, a, u, f];
}
class a0 extends ie {
  constructor(e) {
    super(), te(this, e, u0, s0, V, {
      ref: 0,
      message: 1,
      placement: 2,
      show: 5
    });
  }
  get show() {
    return this.$$.ctx[5];
  }
}
const I0 = (t, e, i) => {
  t || (t = window.document.createElement("div"), document.body.appendChild(t));
  const l = new a0({
    target: t,
    props: {
      ...e
    }
  });
  if (i)
    for (let n in i) {
      let r = i[n];
      l.$on(n, (o) => {
        r(o.detail);
      });
    }
  return l;
};
export {
  c0 as FnAccordion,
  d0 as FnAlert,
  k0 as FnAvatar,
  h0 as FnCarousel,
  g0 as FnDeviceMockup,
  m0 as FnDrawer,
  b0 as FnDropdown,
  _0 as FnDropdownMenu,
  p0 as FnDropdownSelect,
  S0 as FnGallery,
  E0 as FnIcon,
  C0 as FnModal,
  v0 as FnSidebar,
  w0 as FnSpinner,
  T0 as FnTabs,
  I0 as FnTooltip
};
