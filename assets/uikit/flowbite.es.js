var or = Object.defineProperty;
var lr = (t, e, r) => e in t ? or(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Je = (t, e, r) => (lr(t, typeof e != "symbol" ? e + "" : e, r), r);
function O() {
}
const Wt = (t) => t;
function I(t, e) {
  for (const r in e)
    t[r] = e[r];
  return (
    /** @type {T & S} */
    t
  );
}
function Ut(t) {
  return t();
}
function mt() {
  return /* @__PURE__ */ Object.create(null);
}
function de(t) {
  t.forEach(Ut);
}
function Fe(t) {
  return typeof t == "function";
}
function J(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let Te;
function et(t, e) {
  return t === e ? !0 : (Te || (Te = document.createElement("a")), Te.href = e, t === Te.href);
}
function sr(t) {
  return Object.keys(t).length === 0;
}
function ar(t, ...e) {
  if (t == null) {
    for (const i of e)
      i(void 0);
    return O;
  }
  const r = t.subscribe(...e);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function ur(t, e, r) {
  t.$$.on_destroy.push(ar(e, r));
}
function V(t, e, r, i) {
  if (t) {
    const n = Vt(t, e, r, i);
    return t[0](n);
  }
}
function Vt(t, e, r, i) {
  return t[1] && i ? I(r.ctx.slice(), t[1](i(e))) : r.ctx;
}
function q(t, e, r, i) {
  if (t[2] && i) {
    const n = t[2](i(r));
    if (e.dirty === void 0)
      return n;
    if (typeof n == "object") {
      const o = [], l = Math.max(e.dirty.length, n.length);
      for (let s = 0; s < l; s += 1)
        o[s] = e.dirty[s] | n[s];
      return o;
    }
    return e.dirty | n;
  }
  return e.dirty;
}
function D(t, e, r, i, n, o) {
  if (n) {
    const l = Vt(e, r, i, o);
    t.p(l, n);
  }
}
function Z(t) {
  if (t.ctx.length > 32) {
    const e = [], r = t.ctx.length / 32;
    for (let i = 0; i < r; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function T(t) {
  const e = {};
  for (const r in t)
    r[0] !== "$" && (e[r] = t[r]);
  return e;
}
function U(t, e) {
  const r = {};
  e = new Set(e);
  for (const i in t)
    !e.has(i) && i[0] !== "$" && (r[i] = t[i]);
  return r;
}
function st(t) {
  const e = {};
  for (const r in t)
    e[r] = !0;
  return e;
}
function cr(t, e, r) {
  return t.set(r), e;
}
function fr(t) {
  return t && Fe(t.destroy) ? t.destroy : O;
}
function tt(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const qt = typeof window < "u";
let dr = qt ? () => window.performance.now() : () => Date.now(), at = qt ? (t) => requestAnimationFrame(t) : O;
const we = /* @__PURE__ */ new Set();
function Dt(t) {
  we.forEach((e) => {
    e.c(t) || (we.delete(e), e.f());
  }), we.size !== 0 && at(Dt);
}
function gr(t) {
  let e;
  return we.size === 0 && at(Dt), {
    promise: new Promise((r) => {
      we.add(e = { c: t, f: r });
    }),
    abort() {
      we.delete(e);
    }
  };
}
function R(t, e) {
  t.appendChild(e);
}
function Zt(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && /** @type {ShadowRoot} */
  e.host ? (
    /** @type {ShadowRoot} */
    e
  ) : t.ownerDocument;
}
function mr(t) {
  const e = F("style");
  return e.textContent = "/* empty */", br(Zt(t), e), e.sheet;
}
function br(t, e) {
  return R(
    /** @type {Document} */
    t.head || t,
    e
  ), e.sheet;
}
function M(t, e, r) {
  t.insertBefore(e, r || null);
}
function S(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ht(t, e) {
  for (let r = 0; r < t.length; r += 1)
    t[r] && t[r].d(e);
}
function F(t) {
  return document.createElement(t);
}
function oe(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function fe(t) {
  return document.createTextNode(t);
}
function ae() {
  return fe(" ");
}
function ue() {
  return fe("");
}
function B(t, e, r, i) {
  return t.addEventListener(e, r, i), () => t.removeEventListener(e, r, i);
}
function b(t, e, r) {
  r == null ? t.removeAttribute(e) : t.getAttribute(e) !== r && t.setAttribute(e, r);
}
const kr = ["width", "height"];
function ke(t, e) {
  const r = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null ? t.removeAttribute(i) : i === "style" ? t.style.cssText = e[i] : i === "__value" ? t.value = t[i] = e[i] : r[i] && r[i].set && kr.indexOf(i) === -1 ? t[i] = e[i] : b(t, i, e[i]);
}
function bt(t, e) {
  for (const r in e)
    b(t, r, e[r]);
}
function hr(t, e) {
  Object.keys(e).forEach((r) => {
    _r(t, r, e[r]);
  });
}
function _r(t, e, r) {
  e in t ? t[e] = typeof t[e] == "boolean" && r === "" ? !0 : r : b(t, e, r);
}
function We(t) {
  return /-/.test(t) ? hr : ke;
}
function pr(t) {
  return Array.from(t.childNodes);
}
function ze(t, e) {
  e = "" + e, t.data !== e && (t.data = /** @type {string} */
  e);
}
function Jt(t, e, { bubbles: r = !1, cancelable: i = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: r, cancelable: i });
}
const Ue = /* @__PURE__ */ new Map();
let Ve = 0;
function vr(t) {
  let e = 5381, r = t.length;
  for (; r--; )
    e = (e << 5) - e ^ t.charCodeAt(r);
  return e >>> 0;
}
function yr(t, e) {
  const r = { stylesheet: mr(e), rules: {} };
  return Ue.set(t, r), r;
}
function kt(t, e, r, i, n, o, l, s = 0) {
  const a = 16.666 / i;
  let u = `{
`;
  for (let v = 0; v <= 1; v += a) {
    const h = e + (r - e) * o(v);
    u += v * 100 + `%{${l(h, 1 - h)}}
`;
  }
  const c = u + `100% {${l(r, 1 - r)}}
}`, d = `__svelte_${vr(c)}_${s}`, g = Zt(t), { stylesheet: f, rules: m } = Ue.get(g) || yr(g, t);
  m[d] || (m[d] = !0, f.insertRule(`@keyframes ${d} ${c}`, f.cssRules.length));
  const p = t.style.animation || "";
  return t.style.animation = `${p ? `${p}, ` : ""}${d} ${i}ms linear ${n}ms 1 both`, Ve += 1, d;
}
function wr(t, e) {
  const r = (t.style.animation || "").split(", "), i = r.filter(
    e ? (o) => o.indexOf(e) < 0 : (o) => o.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), n = r.length - i.length;
  n && (t.style.animation = i.join(", "), Ve -= n, Ve || Cr());
}
function Cr() {
  at(() => {
    Ve || (Ue.forEach((t) => {
      const { ownerNode: e } = t.stylesheet;
      e && S(e);
    }), Ue.clear());
  });
}
let je;
function Ne(t) {
  je = t;
}
function Ze() {
  if (!je)
    throw new Error("Function called outside component initialization");
  return je;
}
function Xt(t) {
  Ze().$$.on_mount.push(t);
}
function ut() {
  const t = Ze();
  return (e, r, { cancelable: i = !1 } = {}) => {
    const n = t.$$.callbacks[e];
    if (n) {
      const o = Jt(
        /** @type {string} */
        e,
        r,
        { cancelable: i }
      );
      return n.slice().forEach((l) => {
        l.call(t, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function rt(t, e) {
  return Ze().$$.context.set(t, e), e;
}
function ct(t) {
  return Ze().$$.context.get(t);
}
function j(t, e) {
  const r = t.$$.callbacks[e.type];
  r && r.slice().forEach((i) => i.call(this, e));
}
const ye = [], it = [];
let Ce = [];
const ht = [], zr = /* @__PURE__ */ Promise.resolve();
let nt = !1;
function xr() {
  nt || (nt = !0, zr.then(Kt));
}
function xe(t) {
  Ce.push(t);
}
const Xe = /* @__PURE__ */ new Set();
let pe = 0;
function Kt() {
  if (pe !== 0)
    return;
  const t = je;
  do {
    try {
      for (; pe < ye.length; ) {
        const e = ye[pe];
        pe++, Ne(e), Ar(e.$$);
      }
    } catch (e) {
      throw ye.length = 0, pe = 0, e;
    }
    for (Ne(null), ye.length = 0, pe = 0; it.length; )
      it.pop()();
    for (let e = 0; e < Ce.length; e += 1) {
      const r = Ce[e];
      Xe.has(r) || (Xe.add(r), r());
    }
    Ce.length = 0;
  } while (ye.length);
  for (; ht.length; )
    ht.pop()();
  nt = !1, Xe.clear(), Ne(t);
}
function Ar(t) {
  if (t.fragment !== null) {
    t.update(), de(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(xe);
  }
}
function Sr(t) {
  const e = [], r = [];
  Ce.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : r.push(i)), r.forEach((i) => i()), Ce = e;
}
let Ie;
function Mr() {
  return Ie || (Ie = Promise.resolve(), Ie.then(() => {
    Ie = null;
  })), Ie;
}
function Ke(t, e, r) {
  t.dispatchEvent(Jt(`${e ? "intro" : "outro"}${r}`));
}
const Be = /* @__PURE__ */ new Set();
let se;
function Q() {
  se = {
    r: 0,
    c: [],
    p: se
    // parent group
  };
}
function Y() {
  se.r || de(se.c), se = se.p;
}
function _(t, e) {
  t && t.i && (Be.delete(t), t.i(e));
}
function y(t, e, r, i) {
  if (t && t.o) {
    if (Be.has(t))
      return;
    Be.add(t), se.c.push(() => {
      Be.delete(t), i && (r && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
const Er = { duration: 0 };
function qe(t, e, r, i) {
  let o = e(t, r, { direction: "both" }), l = i ? 0 : 1, s = null, a = null, u = null, c;
  function d() {
    u && wr(t, u);
  }
  function g(m, p) {
    const v = (
      /** @type {Program['d']} */
      m.b - l
    );
    return p *= Math.abs(v), {
      a: l,
      b: m.b,
      d: v,
      duration: p,
      start: m.start,
      end: m.start + p,
      group: m.group
    };
  }
  function f(m) {
    const {
      delay: p = 0,
      duration: v = 300,
      easing: h = Wt,
      tick: k = O,
      css: w
    } = o || Er, L = {
      start: dr() + p,
      b: m
    };
    m || (L.group = se, se.r += 1), "inert" in t && (m ? c !== void 0 && (t.inert = c) : (c = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), s || a ? a = L : (w && (d(), u = kt(t, l, m, v, p, h, w)), m && k(0, 1), s = g(L, v), xe(() => Ke(t, m, "start")), gr((z) => {
      if (a && z > a.start && (s = g(a, v), a = null, Ke(t, s.b, "start"), w && (d(), u = kt(
        t,
        l,
        s.b,
        s.duration,
        0,
        h,
        o.css
      ))), s) {
        if (z >= s.end)
          k(l = s.b, 1 - l), Ke(t, s.b, "end"), a || (s.b ? d() : --s.group.r || de(s.group.c)), s = null;
        else if (z >= s.start) {
          const G = z - s.start;
          l = s.a + s.d * h(G / s.duration), k(l, 1 - l);
        }
      }
      return !!(s || a);
    }));
  }
  return {
    run(m) {
      Fe(o) ? Mr().then(() => {
        o = o({ direction: m ? "in" : "out" }), f(m);
      }) : f(m);
    },
    end() {
      d(), s = a = null;
    }
  };
}
function De(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function $(t, e) {
  const r = {}, i = {}, n = { $$scope: 1 };
  let o = t.length;
  for (; o--; ) {
    const l = t[o], s = e[o];
    if (s) {
      for (const a in l)
        a in s || (i[a] = 1);
      for (const a in s)
        n[a] || (r[a] = s[a], n[a] = 1);
      t[o] = s;
    } else
      for (const a in l)
        n[a] = 1;
  }
  for (const l in i)
    l in r || (r[l] = void 0);
  return r;
}
function Ae(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function le(t) {
  t && t.c();
}
function te(t, e, r) {
  const { fragment: i, after_update: n } = t.$$;
  i && i.m(e, r), xe(() => {
    const o = t.$$.on_mount.map(Ut).filter(Fe);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : de(o), t.$$.on_mount = [];
  }), n.forEach(xe);
}
function re(t, e) {
  const r = t.$$;
  r.fragment !== null && (Sr(r.after_update), de(r.on_destroy), r.fragment && r.fragment.d(e), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ir(t, e) {
  t.$$.dirty[0] === -1 && (ye.push(t), xr(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ie(t, e, r, i, n, o, l, s = [-1]) {
  const a = je;
  Ne(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: O,
    not_equal: n,
    bound: mt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: mt(),
    dirty: s,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  l && l(u.root);
  let c = !1;
  if (u.ctx = r ? r(t, e.props || {}, (d, g, ...f) => {
    const m = f.length ? f[0] : g;
    return u.ctx && n(u.ctx[d], u.ctx[d] = m) && (!u.skip_bound && u.bound[d] && u.bound[d](m), c && Ir(t, d)), g;
  }) : [], u.update(), c = !0, de(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const d = pr(e.target);
      u.fragment && u.fragment.l(d), d.forEach(S);
    } else
      u.fragment && u.fragment.c();
    e.intro && _(t.$$.fragment), te(t, e.target, e.anchor), Kt();
  }
  Ne(a);
}
class ne {
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
    re(this, 1), this.$destroy = O;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, r) {
    if (!Fe(r))
      return O;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(r), () => {
      const n = i.indexOf(r);
      n !== -1 && i.splice(n, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !sr(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const Pr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Pr);
const ve = [];
function Qt(t, e = O) {
  let r;
  const i = /* @__PURE__ */ new Set();
  function n(s) {
    if (J(t, s) && (t = s, r)) {
      const a = !ve.length;
      for (const u of i)
        u[1](), ve.push(u, t);
      if (a) {
        for (let u = 0; u < ve.length; u += 2)
          ve[u][0](ve[u + 1]);
        ve.length = 0;
      }
    }
  }
  function o(s) {
    n(s(t));
  }
  function l(s, a = O) {
    const u = [s, a];
    return i.add(u), i.size === 1 && (r = e(n, o) || O), s(t), () => {
      i.delete(u), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: n, update: o, subscribe: l };
}
function Gr() {
  for (var t = 0, e, r, i = ""; t < arguments.length; )
    (e = arguments[t++]) && (r = Yt(e)) && (i && (i += " "), i += r);
  return i;
}
function Yt(t) {
  if (typeof t == "string")
    return t;
  for (var e, r = "", i = 0; i < t.length; i++)
    t[i] && (e = Yt(t[i])) && (r && (r += " "), r += e);
  return r;
}
var ft = "-";
function Nr(t) {
  var e = Fr(t), r = t.conflictingClassGroups, i = t.conflictingClassGroupModifiers, n = i === void 0 ? {} : i;
  function o(s) {
    var a = s.split(ft);
    return a[0] === "" && a.length !== 1 && a.shift(), $t(a, e) || jr(s);
  }
  function l(s, a) {
    var u = r[s] || [];
    return a && n[s] ? [].concat(u, n[s]) : u;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: l
  };
}
function $t(t, e) {
  var l;
  if (t.length === 0)
    return e.classGroupId;
  var r = t[0], i = e.nextPart.get(r), n = i ? $t(t.slice(1), i) : void 0;
  if (n)
    return n;
  if (e.validators.length !== 0) {
    var o = t.join(ft);
    return (l = e.validators.find(function(s) {
      var a = s.validator;
      return a(o);
    })) == null ? void 0 : l.classGroupId;
  }
}
var _t = /^\[(.+)\]$/;
function jr(t) {
  if (_t.test(t)) {
    var e = _t.exec(t)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Fr(t) {
  var e = t.theme, r = t.prefix, i = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, n = Or(Object.entries(t.classGroups), r);
  return n.forEach(function(o) {
    var l = o[0], s = o[1];
    ot(s, i, l, e);
  }), i;
}
function ot(t, e, r, i) {
  t.forEach(function(n) {
    if (typeof n == "string") {
      var o = n === "" ? e : pt(e, n);
      o.classGroupId = r;
      return;
    }
    if (typeof n == "function") {
      if (Lr(n)) {
        ot(n(i), e, r, i);
        return;
      }
      e.validators.push({
        validator: n,
        classGroupId: r
      });
      return;
    }
    Object.entries(n).forEach(function(l) {
      var s = l[0], a = l[1];
      ot(a, pt(e, s), r, i);
    });
  });
}
function pt(t, e) {
  var r = t;
  return e.split(ft).forEach(function(i) {
    r.nextPart.has(i) || r.nextPart.set(i, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(i);
  }), r;
}
function Lr(t) {
  return t.isThemeGetter;
}
function Or(t, e) {
  return e ? t.map(function(r) {
    var i = r[0], n = r[1], o = n.map(function(l) {
      return typeof l == "string" ? e + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(function(s) {
        var a = s[0], u = s[1];
        return [e + a, u];
      })) : l;
    });
    return [i, o];
  }) : t;
}
function Tr(t) {
  if (t < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var e = 0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function n(o, l) {
    r.set(o, l), e++, e > t && (e = 0, i = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(l) {
      var s = r.get(l);
      if (s !== void 0)
        return s;
      if ((s = i.get(l)) !== void 0)
        return n(l, s), s;
    },
    set: function(l, s) {
      r.has(l) ? r.set(l, s) : n(l, s);
    }
  };
}
var er = "!";
function Rr(t) {
  var e = t.separator || ":", r = e.length === 1, i = e[0], n = e.length;
  return function(l) {
    for (var s = [], a = 0, u = 0, c, d = 0; d < l.length; d++) {
      var g = l[d];
      if (a === 0) {
        if (g === i && (r || l.slice(d, d + n) === e)) {
          s.push(l.slice(u, d)), u = d + n;
          continue;
        }
        if (g === "/") {
          c = d;
          continue;
        }
      }
      g === "[" ? a++ : g === "]" && a--;
    }
    var f = s.length === 0 ? l : l.substring(u), m = f.startsWith(er), p = m ? f.substring(1) : f, v = c && c > u ? c - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: v
    };
  };
}
function Br(t) {
  if (t.length <= 1)
    return t;
  var e = [], r = [];
  return t.forEach(function(i) {
    var n = i[0] === "[";
    n ? (e.push.apply(e, r.sort().concat([i])), r = []) : r.push(i);
  }), e.push.apply(e, r.sort()), e;
}
function Wr(t) {
  return {
    cache: Tr(t.cacheSize),
    splitModifiers: Rr(t),
    ...Nr(t)
  };
}
var Ur = /\s+/;
function Vr(t, e) {
  var r = e.splitModifiers, i = e.getClassGroupId, n = e.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return t.trim().split(Ur).map(function(l) {
    var s = r(l), a = s.modifiers, u = s.hasImportantModifier, c = s.baseClassName, d = s.maybePostfixModifierPosition, g = i(d ? c.substring(0, d) : c), f = !!d;
    if (!g) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      if (g = i(c), !g)
        return {
          isTailwindClass: !1,
          originalClassName: l
        };
      f = !1;
    }
    var m = Br(a).join(":"), p = u ? m + er : m;
    return {
      isTailwindClass: !0,
      modifierId: p,
      classGroupId: g,
      originalClassName: l,
      hasPostfixModifier: f
    };
  }).reverse().filter(function(l) {
    if (!l.isTailwindClass)
      return !0;
    var s = l.modifierId, a = l.classGroupId, u = l.hasPostfixModifier, c = s + a;
    return o.has(c) ? !1 : (o.add(c), n(a, u).forEach(function(d) {
      return o.add(s + d);
    }), !0);
  }).reverse().map(function(l) {
    return l.originalClassName;
  }).join(" ");
}
function qr() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  var i, n, o, l = s;
  function s(u) {
    var c = e[0], d = e.slice(1), g = d.reduce(function(f, m) {
      return m(f);
    }, c());
    return i = Wr(g), n = i.cache.get, o = i.cache.set, l = a, a(u);
  }
  function a(u) {
    var c = n(u);
    if (c)
      return c;
    var d = Vr(u, i);
    return o(u, d), d;
  }
  return function() {
    return l(Gr.apply(null, arguments));
  };
}
function N(t) {
  var e = function(i) {
    return i[t] || [];
  };
  return e.isThemeGetter = !0, e;
}
var tr = /^\[(?:([a-z-]+):)?(.+)\]$/i, Dr = /^\d+\/\d+$/, Zr = /* @__PURE__ */ new Set(["px", "full", "screen"]), Hr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Jr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ee(t) {
  return be(t) || Zr.has(t) || Dr.test(t) || lt(t);
}
function lt(t) {
  return he(t, "length", ti);
}
function Kr(t) {
  return he(t, "size", rr);
}
function Qr(t) {
  return he(t, "position", rr);
}
function Yr(t) {
  return he(t, "url", ri);
}
function Re(t) {
  return he(t, "number", be);
}
function be(t) {
  return !Number.isNaN(Number(t));
}
function $r(t) {
  return t.endsWith("%") && be(t.slice(0, -1));
}
function Pe(t) {
  return vt(t) || he(t, "number", vt);
}
function E(t) {
  return tr.test(t);
}
function Ge() {
  return !0;
}
function ce(t) {
  return Hr.test(t);
}
function ei(t) {
  return he(t, "", ii);
}
function he(t, e, r) {
  var i = tr.exec(t);
  return i ? i[1] ? i[1] === e : r(i[2]) : !1;
}
function ti(t) {
  return Jr.test(t);
}
function rr() {
  return !1;
}
function ri(t) {
  return t.startsWith("url(");
}
function vt(t) {
  return Number.isInteger(Number(t));
}
function ii(t) {
  return Xr.test(t);
}
function ni() {
  var t = N("colors"), e = N("spacing"), r = N("blur"), i = N("brightness"), n = N("borderColor"), o = N("borderRadius"), l = N("borderSpacing"), s = N("borderWidth"), a = N("contrast"), u = N("grayscale"), c = N("hueRotate"), d = N("invert"), g = N("gap"), f = N("gradientColorStops"), m = N("gradientColorStopPositions"), p = N("inset"), v = N("margin"), h = N("opacity"), k = N("padding"), w = N("saturate"), L = N("scale"), z = N("sepia"), G = N("skew"), A = N("space"), K = N("translate"), ge = function() {
    return ["auto", "contain", "none"];
  }, H = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, x = function() {
    return ["auto", E, e];
  }, P = function() {
    return [E, e];
  }, Le = function() {
    return ["", ee];
  }, _e = function() {
    return ["auto", be, E];
  }, Se = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, C = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, me = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, He = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, Me = function() {
    return ["", "0", E];
  }, gt = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Ee = function() {
    return [be, Re];
  }, Oe = function() {
    return [be, E];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [Ge],
      spacing: [ee],
      blur: ["none", "", ce, E],
      brightness: Ee(),
      borderColor: [t],
      borderRadius: ["none", "", "full", ce, E],
      borderSpacing: P(),
      borderWidth: Le(),
      contrast: Ee(),
      grayscale: Me(),
      hueRotate: Oe(),
      invert: Me(),
      gap: P(),
      gradientColorStops: [t],
      gradientColorStopPositions: [$r, lt],
      inset: x(),
      margin: x(),
      opacity: Ee(),
      padding: P(),
      saturate: Ee(),
      scale: Ee(),
      sepia: Me(),
      skew: Oe(),
      space: P(),
      translate: P()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", E]
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
        columns: [ce]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": gt()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": gt()
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
        object: [].concat(Se(), [E])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: H()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": H()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": H()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ge()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ge()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ge()
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
        inset: [p]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [p]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [p]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [p]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [p]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [p]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [p]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [p]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [p]
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
        z: ["auto", Pe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: x()
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
        flex: ["1", "auto", "initial", "none", E]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Me()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Me()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Pe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Ge]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Pe]
        }, E]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": _e()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": _e()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Ge]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Pe]
        }, E]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": _e()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": _e()
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
        "auto-cols": ["auto", "min", "max", "fr", E]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", E]
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
        justify: ["normal"].concat(He())
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
        content: ["normal"].concat(He(), ["baseline"])
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
        "place-content": [].concat(He(), ["baseline"])
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
        p: [k]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [k]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [k]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [k]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [k]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [k]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [k]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [k]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [k]
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
        "space-x": [A]
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
        "space-y": [A]
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
        w: ["auto", "min", "max", "fit", E, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", E, ee]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [ce]
        }, ce, E]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [E, e, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", E, ee]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [E, e, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ce, lt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Re]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ge]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", E]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", be, Re]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", E, ee]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", E]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", E]
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
        "placeholder-opacity": [h]
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
        "text-opacity": [h]
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
        decoration: [].concat(C(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ee]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", E, ee]
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
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", E]
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
        content: ["none", E]
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
        "bg-opacity": [h]
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
        bg: [].concat(Se(), [Qr])
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
        bg: ["auto", "cover", "contain", Kr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Yr]
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
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
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
        "border-opacity": [h]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(C(), ["hidden"])
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
        "divide-opacity": [h]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: C()
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
        outline: [""].concat(C())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [E, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ee]
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
        ring: Le()
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
        "ring-opacity": [h]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ee]
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
        shadow: ["", "inner", "none", ce, ei]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Ge]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [h]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": me()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": me()
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
        blur: [r]
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
        contrast: [a]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ce, E]
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
        invert: [d]
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
        sepia: [z]
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
        "backdrop-blur": [r]
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
        "backdrop-contrast": [a]
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
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [h]
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
        "backdrop-sepia": [z]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", E]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Oe()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", E]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Oe()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", E]
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
        scale: [L]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [L]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [L]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Pe, E]
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
        "skew-x": [G]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [G]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", E]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", E]
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
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
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
        "will-change": ["auto", "scroll", "contents", "transform", E]
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
        stroke: [ee, Re]
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
var W = /* @__PURE__ */ qr(ni);
function oi(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function ir(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function li(t, { delay: e = 0, duration: r = 400, easing: i = oi, amount: n = 5, opacity: o = 0 } = {}) {
  const l = getComputedStyle(t), s = +l.opacity, a = l.filter === "none" ? "" : l.filter, u = s * (1 - o), [c, d] = tt(n);
  return {
    delay: e,
    duration: r,
    easing: i,
    css: (g, f) => `opacity: ${s - u * f}; filter: ${a} blur(${f * c}${d});`
  };
}
function nr(t, { delay: e = 0, duration: r = 400, easing: i = Wt } = {}) {
  const n = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: r,
    easing: i,
    css: (o) => `opacity: ${o * n}`
  };
}
function si(t, { delay: e = 0, duration: r = 400, easing: i = ir, x: n = 0, y: o = 0, opacity: l = 0 } = {}) {
  const s = getComputedStyle(t), a = +s.opacity, u = s.transform === "none" ? "" : s.transform, c = a * (1 - l), [d, g] = tt(n), [f, m] = tt(o);
  return {
    delay: e,
    duration: r,
    easing: i,
    css: (p, v) => `
			transform: ${u} translate(${(1 - p) * d}${g}, ${(1 - p) * f}${m});
			opacity: ${a - c * v}`
  };
}
function ai(t, { delay: e = 0, duration: r = 400, easing: i = ir, axis: n = "y" } = {}) {
  const o = getComputedStyle(t), l = +o.opacity, s = n === "y" ? "height" : "width", a = parseFloat(o[s]), u = n === "y" ? ["top", "bottom"] : ["left", "right"], c = u.map(
    (h) => `${h[0].toUpperCase()}${h.slice(1)}`
  ), d = parseFloat(o[`padding${c[0]}`]), g = parseFloat(o[`padding${c[1]}`]), f = parseFloat(o[`margin${c[0]}`]), m = parseFloat(o[`margin${c[1]}`]), p = parseFloat(
    o[`border${c[0]}Width`]
  ), v = parseFloat(
    o[`border${c[1]}Width`]
  );
  return {
    delay: e,
    duration: r,
    easing: i,
    css: (h) => `overflow: hidden;opacity: ${Math.min(h * 20, 1) * l};${s}: ${h * a}px;padding-${u[0]}: ${h * d}px;padding-${u[1]}: ${h * g}px;margin-${u[0]}: ${h * f}px;margin-${u[1]}: ${h * m}px;border-${u[0]}-width: ${h * p}px;border-${u[1]}-width: ${h * v}px;`
  };
}
const ui = (t) => ({}), yt = (t) => ({}), ci = (t) => ({}), wt = (t) => ({}), fi = (t) => ({}), Ct = (t) => ({});
function di(t) {
  let e;
  const r = (
    /*#slots*/
    t[22].arrowdown
  ), i = V(
    r,
    t,
    /*$$scope*/
    t[21],
    yt
  ), n = i || mi();
  return {
    c() {
      n && n.c();
    },
    m(o, l) {
      n && n.m(o, l), e = !0;
    },
    p(o, l) {
      i && i.p && (!e || l & /*$$scope*/
      2097152) && D(
        i,
        r,
        o,
        /*$$scope*/
        o[21],
        e ? q(
          r,
          /*$$scope*/
          o[21],
          l,
          ui
        ) : Z(
          /*$$scope*/
          o[21]
        ),
        yt
      );
    },
    i(o) {
      e || (_(n, o), e = !0);
    },
    o(o) {
      y(n, o), e = !1;
    },
    d(o) {
      n && n.d(o);
    }
  };
}
function gi(t) {
  let e;
  const r = (
    /*#slots*/
    t[22].arrowup
  ), i = V(
    r,
    t,
    /*$$scope*/
    t[21],
    wt
  ), n = i || bi();
  return {
    c() {
      n && n.c();
    },
    m(o, l) {
      n && n.m(o, l), e = !0;
    },
    p(o, l) {
      i && i.p && (!e || l & /*$$scope*/
      2097152) && D(
        i,
        r,
        o,
        /*$$scope*/
        o[21],
        e ? q(
          r,
          /*$$scope*/
          o[21],
          l,
          ci
        ) : Z(
          /*$$scope*/
          o[21]
        ),
        wt
      );
    },
    i(o) {
      e || (_(n, o), e = !0);
    },
    o(o) {
      y(n, o), e = !1;
    },
    d(o) {
      n && n.d(o);
    }
  };
}
function mi(t) {
  let e, r;
  return {
    c() {
      e = oe("svg"), r = oe("path"), b(r, "stroke", "currentColor"), b(r, "stroke-linecap", "round"), b(r, "stroke-linejoin", "round"), b(r, "stroke-width", "2"), b(r, "d", "m1 1 4 4 4-4"), b(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), b(e, "aria-hidden", "true"), b(e, "xmlns", "http://www.w3.org/2000/svg"), b(e, "fill", "none"), b(e, "viewBox", "0 0 10 6");
    },
    m(i, n) {
      M(i, e, n), R(e, r);
    },
    p: O,
    d(i) {
      i && S(e);
    }
  };
}
function bi(t) {
  let e, r;
  return {
    c() {
      e = oe("svg"), r = oe("path"), b(r, "stroke", "currentColor"), b(r, "stroke-linecap", "round"), b(r, "stroke-linejoin", "round"), b(r, "stroke-width", "2"), b(r, "d", "M9 5 5 1 1 5"), b(e, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), b(e, "aria-hidden", "true"), b(e, "xmlns", "http://www.w3.org/2000/svg"), b(e, "fill", "none"), b(e, "viewBox", "0 0 10 6");
    },
    m(i, n) {
      M(i, e, n), R(e, r);
    },
    p: O,
    d(i) {
      i && S(e);
    }
  };
}
function ki(t) {
  let e, r, i;
  const n = (
    /*#slots*/
    t[22].default
  ), o = V(
    n,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = F("div"), r = F("div"), o && o.c(), b(
        r,
        "class",
        /*contentClass*/
        t[3]
      ), b(e, "class", "uikit-hidden");
    },
    m(l, s) {
      M(l, e, s), R(e, r), o && o.m(r, null), i = !0;
    },
    p(l, s) {
      o && o.p && (!i || s & /*$$scope*/
      2097152) && D(
        o,
        n,
        l,
        /*$$scope*/
        l[21],
        i ? q(
          n,
          /*$$scope*/
          l[21],
          s,
          null
        ) : Z(
          /*$$scope*/
          l[21]
        ),
        null
      ), (!i || s & /*contentClass*/
      8) && b(
        r,
        "class",
        /*contentClass*/
        l[3]
      );
    },
    i(l) {
      i || (_(o, l), i = !0);
    },
    o(l) {
      y(o, l), i = !1;
    },
    d(l) {
      l && S(e), o && o.d(l);
    }
  };
}
function hi(t) {
  let e, r, i, n;
  const o = (
    /*#slots*/
    t[22].default
  ), l = V(
    o,
    t,
    /*$$scope*/
    t[21],
    null
  );
  return {
    c() {
      e = F("div"), r = F("div"), l && l.c(), b(
        r,
        "class",
        /*contentClass*/
        t[3]
      );
    },
    m(s, a) {
      M(s, e, a), R(e, r), l && l.m(r, null), n = !0;
    },
    p(s, a) {
      t = s, l && l.p && (!n || a & /*$$scope*/
      2097152) && D(
        l,
        o,
        t,
        /*$$scope*/
        t[21],
        n ? q(
          o,
          /*$$scope*/
          t[21],
          a,
          null
        ) : Z(
          /*$$scope*/
          t[21]
        ),
        null
      ), (!n || a & /*contentClass*/
      8) && b(
        r,
        "class",
        /*contentClass*/
        t[3]
      );
    },
    i(s) {
      n || (_(l, s), s && xe(() => {
        n && (i || (i = qe(
          e,
          /*multiple*/
          t[4],
          /*transitionParams*/
          t[1],
          !0
        )), i.run(1));
      }), n = !0);
    },
    o(s) {
      y(l, s), s && (i || (i = qe(
        e,
        /*multiple*/
        t[4],
        /*transitionParams*/
        t[1],
        !1
      )), i.run(0)), n = !1;
    },
    d(s) {
      s && S(e), l && l.d(s), s && i && i.end();
    }
  };
}
function _i(t) {
  let e, r, i, n, o, l, s, a, u, c, d, g;
  const f = (
    /*#slots*/
    t[22].header
  ), m = V(
    f,
    t,
    /*$$scope*/
    t[21],
    Ct
  ), p = [gi, di], v = [];
  function h(z, G) {
    return (
      /*open*/
      z[0] ? 0 : 1
    );
  }
  n = h(t), o = v[n] = p[n](t);
  const k = [hi, ki], w = [];
  function L(z, G) {
    return (
      /*open*/
      z[0] ? 0 : 1
    );
  }
  return s = L(t), a = w[s] = k[s](t), {
    c() {
      e = F("h2"), r = F("button"), m && m.c(), i = ae(), o.c(), l = ae(), a.c(), u = ue(), b(r, "type", "button"), b(
        r,
        "class",
        /*buttonClass*/
        t[2]
      ), b(
        r,
        "aria-expanded",
        /*open*/
        t[0]
      ), b(e, "class", "group");
    },
    m(z, G) {
      M(z, e, G), R(e, r), m && m.m(r, null), R(r, i), v[n].m(r, null), M(z, l, G), w[s].m(z, G), M(z, u, G), c = !0, d || (g = B(
        r,
        "click",
        /*handleToggle*/
        t[6]
      ), d = !0);
    },
    p(z, [G]) {
      m && m.p && (!c || G & /*$$scope*/
      2097152) && D(
        m,
        f,
        z,
        /*$$scope*/
        z[21],
        c ? q(
          f,
          /*$$scope*/
          z[21],
          G,
          fi
        ) : Z(
          /*$$scope*/
          z[21]
        ),
        Ct
      );
      let A = n;
      n = h(z), n === A ? v[n].p(z, G) : (Q(), y(v[A], 1, 1, () => {
        v[A] = null;
      }), Y(), o = v[n], o ? o.p(z, G) : (o = v[n] = p[n](z), o.c()), _(o, 1), o.m(r, null)), (!c || G & /*buttonClass*/
      4) && b(
        r,
        "class",
        /*buttonClass*/
        z[2]
      ), (!c || G & /*open*/
      1) && b(
        r,
        "aria-expanded",
        /*open*/
        z[0]
      );
      let K = s;
      s = L(z), s === K ? w[s].p(z, G) : (Q(), y(w[K], 1, 1, () => {
        w[K] = null;
      }), Y(), a = w[s], a ? a.p(z, G) : (a = w[s] = k[s](z), a.c()), _(a, 1), a.m(u.parentNode, u));
    },
    i(z) {
      c || (_(m, z), _(o), _(a), c = !0);
    },
    o(z) {
      y(m, z), y(o), y(a), c = !1;
    },
    d(z) {
      z && (S(e), S(l), S(u)), m && m.d(z), v[n].d(), w[s].d(z), d = !1, g();
    }
  };
}
function pi(t, e, r) {
  let i, n, { $$slots: o = {}, $$scope: l } = e, { open: s = !1 } = e, { activeClass: a = void 0 } = e, { inactiveClass: u = void 0 } = e, { defaultClass: c = "uikit-flex uikit-items-center uikit-justify-between uikit-w-full uikit-font-medium uikit-text-left group-first:uikit-rounded-t-xl uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { transitionType: d = "slide" } = e, { transitionParams: g = {} } = e, { paddingFlush: f = "uikit-py-5" } = e, { paddingDefault: m = "uikit-p-5" } = e, { textFlushOpen: p = "uikit-text-gray-900 dark:uikit-text-white" } = e, { textFlushDefault: v = "uikit-text-gray-500 dark:uikit-text-gray-400" } = e, { borderClass: h = "uikit-border-s uikit-border-e group-first:uikit-border-t" } = e, { borderOpenClass: k = "uikit-border-s uikit-border-e" } = e, { borderBottomClass: w = "uikit-border-b" } = e, { borderSharedClass: L = "uikit-border-gray-200 dark:uikit-border-gray-700" } = e, { classActive: z = void 0 } = e, { classInactive: G = void 0 } = e, A = W(a, z), K = W(u, G);
  const ge = (C, me) => {
    switch (d) {
      case "blur":
        return li(C, me);
      case "fly":
        return si(C, me);
      case "fade":
        return nr(C, me);
      default:
        return ai(C, me);
    }
  }, H = ct("ctx") ?? {}, x = {}, P = H.selected ?? Qt();
  ur(t, P, (C) => r(23, n = C));
  let Le = s;
  s = !1, Xt(() => (Le && cr(P, n = x, n), P.subscribe((C) => r(0, s = C === x))));
  const _e = (C) => P.set(s ? {} : x);
  let Se;
  return t.$$set = (C) => {
    r(29, e = I(I({}, e), T(C))), "open" in C && r(0, s = C.open), "activeClass" in C && r(7, a = C.activeClass), "inactiveClass" in C && r(8, u = C.inactiveClass), "defaultClass" in C && r(9, c = C.defaultClass), "transitionType" in C && r(10, d = C.transitionType), "transitionParams" in C && r(1, g = C.transitionParams), "paddingFlush" in C && r(11, f = C.paddingFlush), "paddingDefault" in C && r(12, m = C.paddingDefault), "textFlushOpen" in C && r(13, p = C.textFlushOpen), "textFlushDefault" in C && r(14, v = C.textFlushDefault), "borderClass" in C && r(15, h = C.borderClass), "borderOpenClass" in C && r(16, k = C.borderOpenClass), "borderBottomClass" in C && r(17, w = C.borderBottomClass), "borderSharedClass" in C && r(18, L = C.borderSharedClass), "classActive" in C && r(19, z = C.classActive), "classInactive" in C && r(20, G = C.classInactive), "$$scope" in C && r(21, l = C.$$scope);
  }, t.$$.update = () => {
    r(2, Se = W([
      c,
      H.flush || h,
      w,
      L,
      H.flush ? f : m,
      s && (H.flush ? p : A || H.activeClass),
      !s && (H.flush ? v : K || H.inactiveClass),
      e.class
    ])), t.$$.dirty & /*paddingFlush, paddingDefault, borderOpenClass, borderBottomClass, borderSharedClass*/
    464896 && r(3, i = W([
      H.flush ? f : m,
      H.flush ? "" : k,
      w,
      L
    ]));
  }, e = T(e), [
    s,
    g,
    Se,
    i,
    ge,
    P,
    _e,
    a,
    u,
    c,
    d,
    f,
    m,
    p,
    v,
    h,
    k,
    w,
    L,
    z,
    G,
    l,
    o
  ];
}
class vi extends ne {
  constructor(e) {
    super(), ie(this, e, pi, _i, J, {
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
function Qe(t) {
  let e, r, i, n, o;
  const l = (
    /*#slots*/
    t[12].default
  ), s = V(
    l,
    t,
    /*$$scope*/
    t[11],
    null
  );
  let a = [
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
  ], u = {};
  for (let c = 0; c < a.length; c += 1)
    u = I(u, a[c]);
  return {
    c() {
      e = F(
        /*tag*/
        t[1]
      ), s && s.c(), We(
        /*tag*/
        t[1]
      )(e, u);
    },
    m(c, d) {
      M(c, e, d), s && s.m(e, null), t[18](e), i = !0, n || (o = [
        fr(r = /*use*/
        t[2].call(
          null,
          e,
          /*options*/
          t[3]
        )),
        B(
          e,
          "click",
          /*click_handler*/
          t[13]
        ),
        B(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[14]
        ),
        B(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[15]
        ),
        B(
          e,
          "focusin",
          /*focusin_handler*/
          t[16]
        ),
        B(
          e,
          "focusout",
          /*focusout_handler*/
          t[17]
        )
      ], n = !0);
    },
    p(c, d) {
      s && s.p && (!i || d & /*$$scope*/
      2048) && D(
        s,
        l,
        c,
        /*$$scope*/
        c[11],
        i ? q(
          l,
          /*$$scope*/
          c[11],
          d,
          null
        ) : Z(
          /*$$scope*/
          c[11]
        ),
        null
      ), We(
        /*tag*/
        c[1]
      )(e, u = $(a, [
        (!i || d & /*role*/
        16) && { role: (
          /*role*/
          c[4]
        ) },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        c[6],
        (!i || d & /*divClass*/
        32) && { class: (
          /*divClass*/
          c[5]
        ) }
      ])), r && Fe(r.update) && d & /*options*/
      8 && r.update.call(
        null,
        /*options*/
        c[3]
      );
    },
    i(c) {
      i || (_(s, c), i = !0);
    },
    o(c) {
      y(s, c), i = !1;
    },
    d(c) {
      c && S(e), s && s.d(c), t[18](null), n = !1, de(o);
    }
  };
}
function yi(t) {
  let e = (
    /*tag*/
    t[1]
  ), r, i, n = (
    /*tag*/
    t[1] && Qe(t)
  );
  return {
    c() {
      n && n.c(), r = ue();
    },
    m(o, l) {
      n && n.m(o, l), M(o, r, l), i = !0;
    },
    p(o, [l]) {
      /*tag*/
      o[1] ? e ? J(
        e,
        /*tag*/
        o[1]
      ) ? (n.d(1), n = Qe(o), e = /*tag*/
      o[1], n.c(), n.m(r.parentNode, r)) : n.p(o, l) : (n = Qe(o), e = /*tag*/
      o[1], n.c(), n.m(r.parentNode, r)) : e && (n.d(1), n = null, e = /*tag*/
      o[1]);
    },
    i(o) {
      i || (_(n, o), i = !0);
    },
    o(o) {
      y(n, o), i = !1;
    },
    d(o) {
      o && S(r), n && n.d(o);
    }
  };
}
function wi(t, e, r) {
  const i = ["tag", "color", "rounded", "border", "shadow", "node", "use", "options", "role"];
  let n = U(e, i), { $$slots: o = {}, $$scope: l } = e;
  const s = () => {
  };
  rt("background", !0);
  let { tag: a = n.href ? "a" : "div" } = e, { color: u = "default" } = e, { rounded: c = !1 } = e, { border: d = !1 } = e, { shadow: g = !1 } = e, { node: f = void 0 } = e, { use: m = s } = e, { options: p = {} } = e, { role: v = void 0 } = e;
  const h = {
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
  }, k = {
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
  let L;
  function z(x) {
    j.call(this, t, x);
  }
  function G(x) {
    j.call(this, t, x);
  }
  function A(x) {
    j.call(this, t, x);
  }
  function K(x) {
    j.call(this, t, x);
  }
  function ge(x) {
    j.call(this, t, x);
  }
  function H(x) {
    it[x ? "unshift" : "push"](() => {
      f = x, r(0, f);
    });
  }
  return t.$$set = (x) => {
    r(23, e = I(I({}, e), T(x))), r(6, n = U(e, i)), "tag" in x && r(1, a = x.tag), "color" in x && r(7, u = x.color), "rounded" in x && r(8, c = x.rounded), "border" in x && r(9, d = x.border), "shadow" in x && r(10, g = x.shadow), "node" in x && r(0, f = x.node), "use" in x && r(2, m = x.use), "options" in x && r(3, p = x.options), "role" in x && r(4, v = x.role), "$$scope" in x && r(11, l = x.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*color*/
    128 && r(7, u = u ?? "default"), t.$$.dirty & /*color*/
    128 && rt("color", u), r(5, L = W(h[u], k[u], c && "uikit-rounded-lg", d && "uikit-border", w[u], g && "uikit-shadow-md", e.class));
  }, e = T(e), [
    f,
    a,
    m,
    p,
    v,
    L,
    n,
    u,
    c,
    d,
    g,
    l,
    o,
    z,
    G,
    A,
    K,
    ge,
    H
  ];
}
class dt extends ne {
  constructor(e) {
    super(), ie(this, e, wi, yi, J, {
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
function zt(t, e, r) {
  const i = t.slice();
  return i[10] = e[r], i;
}
function xt(t, e, r) {
  const i = t.slice();
  return i[13] = e[r], i;
}
function At(t) {
  let e, r = (
    /*desc*/
    t[13] + ""
  ), i;
  return {
    c() {
      e = F("p"), i = fe(r), b(e, "class", "mb-2 text-gray-500 dark:text-gray-400");
    },
    m(n, o) {
      M(n, e, o), R(e, i);
    },
    p(n, o) {
      o & /*items*/
      1 && r !== (r = /*desc*/
      n[13] + "") && ze(i, r);
    },
    d(n) {
      n && S(e);
    }
  };
}
function Ci(t) {
  let e, r = De(
    /*item*/
    t[10].descriptions
  ), i = [];
  for (let n = 0; n < r.length; n += 1)
    i[n] = At(xt(t, r, n));
  return {
    c() {
      for (let n = 0; n < i.length; n += 1)
        i[n].c();
      e = ae();
    },
    m(n, o) {
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(n, o);
      M(n, e, o);
    },
    p(n, o) {
      if (o & /*items*/
      1) {
        r = De(
          /*item*/
          n[10].descriptions
        );
        let l;
        for (l = 0; l < r.length; l += 1) {
          const s = xt(n, r, l);
          i[l] ? i[l].p(s, o) : (i[l] = At(s), i[l].c(), i[l].m(e.parentNode, e));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = r.length;
      }
    },
    d(n) {
      n && S(e), Ht(i, n);
    }
  };
}
function zi(t) {
  let e, r = (
    /*item*/
    (t[10].title || "a title") + ""
  ), i;
  return {
    c() {
      e = F("span"), i = fe(r), b(e, "slot", "header");
    },
    m(n, o) {
      M(n, e, o), R(e, i);
    },
    p(n, o) {
      o & /*items*/
      1 && r !== (r = /*item*/
      (n[10].title || "a title") + "") && ze(i, r);
    },
    d(n) {
      n && S(e);
    }
  };
}
function St(t) {
  let e, r;
  return e = new vi({
    props: {
      $$slots: {
        header: [zi],
        default: [Ci]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, n) {
      te(e, i, n), r = !0;
    },
    p(i, n) {
      const o = {};
      n & /*$$scope, items*/
      65537 && (o.$$scope = { dirty: n, ctx: i }), e.$set(o);
    },
    i(i) {
      r || (_(e.$$.fragment, i), r = !0);
    },
    o(i) {
      y(e.$$.fragment, i), r = !1;
    },
    d(i) {
      re(e, i);
    }
  };
}
function xi(t) {
  let e, r, i = De(
    /*items*/
    t[0]
  ), n = [];
  for (let l = 0; l < i.length; l += 1)
    n[l] = St(zt(t, i, l));
  const o = (l) => y(n[l], 1, 1, () => {
    n[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < n.length; l += 1)
        n[l].c();
      e = ue();
    },
    m(l, s) {
      for (let a = 0; a < n.length; a += 1)
        n[a] && n[a].m(l, s);
      M(l, e, s), r = !0;
    },
    p(l, s) {
      if (s & /*items*/
      1) {
        i = De(
          /*items*/
          l[0]
        );
        let a;
        for (a = 0; a < i.length; a += 1) {
          const u = zt(l, i, a);
          n[a] ? (n[a].p(u, s), _(n[a], 1)) : (n[a] = St(u), n[a].c(), _(n[a], 1), n[a].m(e.parentNode, e));
        }
        for (Q(), a = i.length; a < n.length; a += 1)
          o(a);
        Y();
      }
    },
    i(l) {
      if (!r) {
        for (let s = 0; s < i.length; s += 1)
          _(n[s]);
        r = !0;
      }
    },
    o(l) {
      n = n.filter(Boolean);
      for (let s = 0; s < n.length; s += 1)
        y(n[s]);
      r = !1;
    },
    d(l) {
      l && S(e), Ht(n, l);
    }
  };
}
function Ai(t) {
  let e, r;
  const i = [
    /*$$restProps*/
    t[2],
    { class: (
      /*frameClass*/
      t[1]
    ) },
    { color: "none" }
  ];
  let n = {
    $$slots: { default: [xi] },
    $$scope: { ctx: t }
  };
  for (let o = 0; o < i.length; o += 1)
    n = I(n, i[o]);
  return e = new dt({ props: n }), {
    c() {
      le(e.$$.fragment);
    },
    m(o, l) {
      te(e, o, l), r = !0;
    },
    p(o, [l]) {
      const s = l & /*$$restProps, frameClass*/
      6 ? $(i, [
        l & /*$$restProps*/
        4 && Ae(
          /*$$restProps*/
          o[2]
        ),
        l & /*frameClass*/
        2 && { class: (
          /*frameClass*/
          o[1]
        ) },
        i[2]
      ]) : {};
      l & /*$$scope, items*/
      65537 && (s.$$scope = { dirty: l, ctx: o }), e.$set(s);
    },
    i(o) {
      r || (_(e.$$.fragment, o), r = !0);
    },
    o(o) {
      y(e.$$.fragment, o), r = !1;
    },
    d(o) {
      re(e, o);
    }
  };
}
function Si(t, e, r) {
  const i = ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass", "items"];
  let n = U(e, i), { multiple: o = !1 } = e, { flush: l = !1 } = e, { activeClass: s = "uikit-bg-gray-100 dark:uikit-bg-gray-800 uikit-text-gray-900 dark:uikit-text-white focus:uikit-ring-4 focus:uikit-ring-gray-200 dark:focus:uikit-ring-gray-800" } = e, { inactiveClass: a = "uikit-text-gray-500 dark:uikit-text-gray-400 hover:uikit-bg-gray-100 hover:dark:uikit-bg-gray-800" } = e, { defaultClass: u = "uikit-text-gray-500 dark:uikit-text-gray-400" } = e, { items: c = [] } = e;
  const d = {
    flush: l,
    activeClass: W(s, e.classActive),
    inactiveClass: W(a, e.classInactive),
    selected: o ? void 0 : Qt()
  };
  rt("ctx", d);
  let g;
  return t.$$set = (f) => {
    r(9, e = I(I({}, e), T(f))), r(2, n = U(e, i)), "multiple" in f && r(3, o = f.multiple), "flush" in f && r(4, l = f.flush), "activeClass" in f && r(5, s = f.activeClass), "inactiveClass" in f && r(6, a = f.inactiveClass), "defaultClass" in f && r(7, u = f.defaultClass), "items" in f && r(0, c = f.items);
  }, t.$$.update = () => {
    r(1, g = W(u, e.class));
  }, e = T(e), [
    c,
    g,
    n,
    o,
    l,
    s,
    a,
    u
  ];
}
class Mi extends ne {
  constructor(e) {
    super(), ie(this, e, Si, Ai, J, {
      multiple: 3,
      flush: 4,
      activeClass: 5,
      inactiveClass: 6,
      defaultClass: 7,
      items: 0
    });
  }
}
const xn = (t, e) => (t || (t = window.document.createElement("div"), document.body.appendChild(t)), new Mi({
  target: t,
  props: {
    ...e
  }
})), Ei = (t) => ({}), Mt = (t) => ({ close: (
  /*close*/
  t[4]
) }), Ii = (t) => ({}), Et = (t) => ({ close: (
  /*close*/
  t[4]
) });
function Pi(t) {
  let e, r;
  const i = [
    /*$$restProps*/
    t[5]
  ];
  let n = {
    $$slots: { default: [Ni] },
    $$scope: { ctx: t }
  };
  for (let o = 0; o < i.length; o += 1)
    n = I(n, i[o]);
  return e = new dt({ props: n }), {
    c() {
      le(e.$$.fragment);
    },
    m(o, l) {
      te(e, o, l), r = !0;
    },
    p(o, l) {
      const s = l & /*$$restProps*/
      32 ? $(i, [Ae(
        /*$$restProps*/
        o[5]
      )]) : {};
      l & /*$$scope*/
      128 && (s.$$scope = { dirty: l, ctx: o }), e.$set(s);
    },
    i(o) {
      r || (_(e.$$.fragment, o), r = !0);
    },
    o(o) {
      y(e.$$.fragment, o), r = !1;
    },
    d(o) {
      re(e, o);
    }
  };
}
function Gi(t) {
  let e, r, i = (
    /*open*/
    t[0] && It(t)
  );
  return {
    c() {
      i && i.c(), e = ue();
    },
    m(n, o) {
      i && i.m(n, o), M(n, e, o), r = !0;
    },
    p(n, o) {
      /*open*/
      n[0] ? i ? (i.p(n, o), o & /*open*/
      1 && _(i, 1)) : (i = It(n), i.c(), _(i, 1), i.m(e.parentNode, e)) : i && (Q(), y(i, 1, 1, () => {
        i = null;
      }), Y());
    },
    i(n) {
      r || (_(i), r = !0);
    },
    o(n) {
      y(i), r = !1;
    },
    d(n) {
      n && S(e), i && i.d(n);
    }
  };
}
function Ni(t) {
  let e;
  const r = (
    /*#slots*/
    t[6].default
  ), i = V(
    r,
    t,
    /*$$scope*/
    t[7],
    Mt
  );
  return {
    c() {
      i && i.c();
    },
    m(n, o) {
      i && i.m(n, o), e = !0;
    },
    p(n, o) {
      i && i.p && (!e || o & /*$$scope*/
      128) && D(
        i,
        r,
        n,
        /*$$scope*/
        n[7],
        e ? q(
          r,
          /*$$scope*/
          n[7],
          o,
          Ei
        ) : Z(
          /*$$scope*/
          n[7]
        ),
        Mt
      );
    },
    i(n) {
      e || (_(i, n), e = !0);
    },
    o(n) {
      y(i, n), e = !1;
    },
    d(n) {
      i && i.d(n);
    }
  };
}
function It(t) {
  let e, r, i, n;
  const o = [
    /*$$restProps*/
    t[5]
  ];
  let l = {
    $$slots: { default: [ji] },
    $$scope: { ctx: t }
  };
  for (let s = 0; s < o.length; s += 1)
    l = I(l, o[s]);
  return r = new dt({ props: l }), {
    c() {
      e = F("div"), le(r.$$.fragment);
    },
    m(s, a) {
      M(s, e, a), te(r, e, null), n = !0;
    },
    p(s, a) {
      t = s;
      const u = a & /*$$restProps*/
      32 ? $(o, [Ae(
        /*$$restProps*/
        t[5]
      )]) : {};
      a & /*$$scope*/
      128 && (u.$$scope = { dirty: a, ctx: t }), r.$set(u);
    },
    i(s) {
      n || (_(r.$$.fragment, s), s && xe(() => {
        n && (i || (i = qe(
          e,
          /*transition*/
          t[1],
          /*params*/
          t[2],
          !0
        )), i.run(1));
      }), n = !0);
    },
    o(s) {
      y(r.$$.fragment, s), s && (i || (i = qe(
        e,
        /*transition*/
        t[1],
        /*params*/
        t[2],
        !1
      )), i.run(0)), n = !1;
    },
    d(s) {
      s && S(e), re(r), s && i && i.end();
    }
  };
}
function ji(t) {
  let e;
  const r = (
    /*#slots*/
    t[6].default
  ), i = V(
    r,
    t,
    /*$$scope*/
    t[7],
    Et
  );
  return {
    c() {
      i && i.c();
    },
    m(n, o) {
      i && i.m(n, o), e = !0;
    },
    p(n, o) {
      i && i.p && (!e || o & /*$$scope*/
      128) && D(
        i,
        r,
        n,
        /*$$scope*/
        n[7],
        e ? q(
          r,
          /*$$scope*/
          n[7],
          o,
          Ii
        ) : Z(
          /*$$scope*/
          n[7]
        ),
        Et
      );
    },
    i(n) {
      e || (_(i, n), e = !0);
    },
    o(n) {
      y(i, n), e = !1;
    },
    d(n) {
      i && i.d(n);
    }
  };
}
function Fi(t) {
  let e, r, i, n;
  const o = [Gi, Pi], l = [];
  function s(a, u) {
    return (
      /*dismissable*/
      a[3] ? 0 : 1
    );
  }
  return e = s(t), r = l[e] = o[e](t), {
    c() {
      r.c(), i = ue();
    },
    m(a, u) {
      l[e].m(a, u), M(a, i, u), n = !0;
    },
    p(a, [u]) {
      let c = e;
      e = s(a), e === c ? l[e].p(a, u) : (Q(), y(l[c], 1, 1, () => {
        l[c] = null;
      }), Y(), r = l[e], r ? r.p(a, u) : (r = l[e] = o[e](a), r.c()), _(r, 1), r.m(i.parentNode, i));
    },
    i(a) {
      n || (_(r), n = !0);
    },
    o(a) {
      y(r), n = !1;
    },
    d(a) {
      a && S(i), l[e].d(a);
    }
  };
}
function Li(t, e, r) {
  const i = ["transition", "params", "open", "dismissable"];
  let n = U(e, i), { $$slots: o = {}, $$scope: l } = e, { transition: s = nr } = e, { params: a = {} } = e, { open: u = !0 } = e, { dismissable: c = !1 } = e;
  const d = ut();
  function g(f) {
    f != null && f.stopPropagation && f.stopPropagation(), r(0, u = !1);
  }
  return t.$$set = (f) => {
    e = I(I({}, e), T(f)), r(5, n = U(e, i)), "transition" in f && r(1, s = f.transition), "params" in f && r(2, a = f.params), "open" in f && r(0, u = f.open), "dismissable" in f && r(3, c = f.dismissable), "$$scope" in f && r(7, l = f.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*open*/
    1 && d(u ? "open" : "close");
  }, [u, s, a, c, g, n, o, l];
}
class Oi extends ne {
  constructor(e) {
    super(), ie(this, e, Li, Fi, J, {
      transition: 1,
      params: 2,
      open: 0,
      dismissable: 3
    });
  }
}
const Ti = (t) => ({ svgSize: t & /*size*/
4 }), Pt = (t) => ({
  svgSize: (
    /*svgSizes*/
    t[5][
      /*size*/
      t[2]
    ]
  )
}), Ri = (t) => ({ svgSize: t & /*size*/
4 }), Gt = (t) => ({
  svgSize: (
    /*svgSizes*/
    t[5][
      /*size*/
      t[2]
    ]
  )
});
function Bi(t) {
  let e, r, i, n, o, l, s = (
    /*name*/
    t[0] && Nt(t)
  );
  const a = (
    /*#slots*/
    t[9].default
  ), u = V(
    a,
    t,
    /*$$scope*/
    t[8],
    Pt
  );
  let c = [
    { type: "button" },
    /*$$restProps*/
    t[6],
    { class: (
      /*buttonClass*/
      t[4]
    ) },
    {
      "aria-label": i = /*ariaLabel*/
      t[1] ?? /*name*/
      t[0]
    }
  ], d = {};
  for (let g = 0; g < c.length; g += 1)
    d = I(d, c[g]);
  return {
    c() {
      e = F("button"), s && s.c(), r = ae(), u && u.c(), ke(e, d);
    },
    m(g, f) {
      M(g, e, f), s && s.m(e, null), R(e, r), u && u.m(e, null), e.autofocus && e.focus(), n = !0, o || (l = B(
        e,
        "click",
        /*click_handler*/
        t[10]
      ), o = !0);
    },
    p(g, f) {
      /*name*/
      g[0] ? s ? s.p(g, f) : (s = Nt(g), s.c(), s.m(e, r)) : s && (s.d(1), s = null), u && u.p && (!n || f & /*$$scope, size*/
      260) && D(
        u,
        a,
        g,
        /*$$scope*/
        g[8],
        n ? q(
          a,
          /*$$scope*/
          g[8],
          f,
          Ti
        ) : Z(
          /*$$scope*/
          g[8]
        ),
        Pt
      ), ke(e, d = $(c, [
        { type: "button" },
        f & /*$$restProps*/
        64 && /*$$restProps*/
        g[6],
        (!n || f & /*buttonClass*/
        16) && { class: (
          /*buttonClass*/
          g[4]
        ) },
        (!n || f & /*ariaLabel, name*/
        3 && i !== (i = /*ariaLabel*/
        g[1] ?? /*name*/
        g[0])) && { "aria-label": i }
      ]));
    },
    i(g) {
      n || (_(u, g), n = !0);
    },
    o(g) {
      y(u, g), n = !1;
    },
    d(g) {
      g && S(e), s && s.d(), u && u.d(g), o = !1, l();
    }
  };
}
function Wi(t) {
  let e, r, i, n, o = (
    /*name*/
    t[0] && jt(t)
  );
  const l = (
    /*#slots*/
    t[9].default
  ), s = V(
    l,
    t,
    /*$$scope*/
    t[8],
    Gt
  );
  let a = [
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
      "aria-label": i = /*ariaLabel*/
      t[1] ?? /*name*/
      t[0]
    }
  ], u = {};
  for (let c = 0; c < a.length; c += 1)
    u = I(u, a[c]);
  return {
    c() {
      e = F("a"), o && o.c(), r = ae(), s && s.c(), ke(e, u);
    },
    m(c, d) {
      M(c, e, d), o && o.m(e, null), R(e, r), s && s.m(e, null), n = !0;
    },
    p(c, d) {
      /*name*/
      c[0] ? o ? o.p(c, d) : (o = jt(c), o.c(), o.m(e, r)) : o && (o.d(1), o = null), s && s.p && (!n || d & /*$$scope, size*/
      260) && D(
        s,
        l,
        c,
        /*$$scope*/
        c[8],
        n ? q(
          l,
          /*$$scope*/
          c[8],
          d,
          Ri
        ) : Z(
          /*$$scope*/
          c[8]
        ),
        Gt
      ), ke(e, u = $(a, [
        (!n || d & /*href*/
        8) && { href: (
          /*href*/
          c[3]
        ) },
        d & /*$$restProps*/
        64 && /*$$restProps*/
        c[6],
        (!n || d & /*buttonClass*/
        16) && { class: (
          /*buttonClass*/
          c[4]
        ) },
        (!n || d & /*ariaLabel, name*/
        3 && i !== (i = /*ariaLabel*/
        c[1] ?? /*name*/
        c[0])) && { "aria-label": i }
      ]));
    },
    i(c) {
      n || (_(s, c), n = !0);
    },
    o(c) {
      y(s, c), n = !1;
    },
    d(c) {
      c && S(e), o && o.d(), s && s.d(c);
    }
  };
}
function Nt(t) {
  let e, r;
  return {
    c() {
      e = F("span"), r = fe(
        /*name*/
        t[0]
      ), b(e, "class", "sr-only");
    },
    m(i, n) {
      M(i, e, n), R(e, r);
    },
    p(i, n) {
      n & /*name*/
      1 && ze(
        r,
        /*name*/
        i[0]
      );
    },
    d(i) {
      i && S(e);
    }
  };
}
function jt(t) {
  let e, r;
  return {
    c() {
      e = F("span"), r = fe(
        /*name*/
        t[0]
      ), b(e, "class", "sr-only");
    },
    m(i, n) {
      M(i, e, n), R(e, r);
    },
    p(i, n) {
      n & /*name*/
      1 && ze(
        r,
        /*name*/
        i[0]
      );
    },
    d(i) {
      i && S(e);
    }
  };
}
function Ui(t) {
  let e, r, i, n;
  const o = [Wi, Bi], l = [];
  function s(a, u) {
    return (
      /*href*/
      a[3] ? 0 : 1
    );
  }
  return e = s(t), r = l[e] = o[e](t), {
    c() {
      r.c(), i = ue();
    },
    m(a, u) {
      l[e].m(a, u), M(a, i, u), n = !0;
    },
    p(a, [u]) {
      let c = e;
      e = s(a), e === c ? l[e].p(a, u) : (Q(), y(l[c], 1, 1, () => {
        l[c] = null;
      }), Y(), r = l[e], r ? r.p(a, u) : (r = l[e] = o[e](a), r.c()), _(r, 1), r.m(i.parentNode, i));
    },
    i(a) {
      n || (_(r), n = !0);
    },
    o(a) {
      y(r), n = !1;
    },
    d(a) {
      a && S(i), l[e].d(a);
    }
  };
}
function Vi(t, e, r) {
  const i = ["color", "name", "ariaLabel", "size", "href"];
  let n = U(e, i), { $$slots: o = {}, $$scope: l } = e;
  const s = ct("background");
  let { color: a = "default" } = e, { name: u = void 0 } = e, { ariaLabel: c = void 0 } = e, { size: d = "md" } = e, { href: g = void 0 } = e;
  const f = {
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
  }, m = {
    xs: "uikit-m-0.5 uikit-rounded-sm focus:uikit-ring-1 uikit-p-0.5",
    sm: "uikit-m-0.5 uikit-rounded focus:uikit-ring-1 uikit-p-0.5",
    md: "uikit-m-0.5 uikit-rounded-lg focus:uikit-ring-2 uikit-p-1.5",
    lg: "uikit-m-0.5 uikit-rounded-lg focus:uikit-ring-2 uikit-p-2.5"
  };
  let p;
  const v = {
    xs: "uikit-w-3 uikit-h-3",
    sm: "uikit-w-3.5 uikit-h-3.5",
    md: "uikit-w-5 uikit-h-5",
    lg: "uikit-w-5 uikit-h-5"
  };
  function h(k) {
    j.call(this, t, k);
  }
  return t.$$set = (k) => {
    r(14, e = I(I({}, e), T(k))), r(6, n = U(e, i)), "color" in k && r(7, a = k.color), "name" in k && r(0, u = k.name), "ariaLabel" in k && r(1, c = k.ariaLabel), "size" in k && r(2, d = k.size), "href" in k && r(3, g = k.href), "$$scope" in k && r(8, l = k.$$scope);
  }, t.$$.update = () => {
    r(4, p = W(
      "focus:uikit-outline-none uikit-whitespace-normal",
      m[d],
      f[a],
      a === "default" && (s ? "hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-600" : "hover:uikit-bg-gray-100 dark:hover:uikit-bg-gray-700"),
      e.class
    ));
  }, e = T(e), [
    u,
    c,
    d,
    g,
    p,
    v,
    n,
    a,
    l,
    o,
    h
  ];
}
class qi extends ne {
  constructor(e) {
    super(), ie(this, e, Vi, Ui, J, {
      color: 7,
      name: 0,
      ariaLabel: 1,
      size: 2,
      href: 3
    });
  }
}
function Di(t) {
  let e, r, i;
  return {
    c() {
      e = oe("svg"), r = oe("path"), b(r, "fill-rule", "evenodd"), b(r, "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"), b(r, "clip-rule", "evenodd"), b(e, "class", i = /*svgSize*/
      t[4]), b(e, "fill", "currentColor"), b(e, "viewBox", "0 0 20 20"), b(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, o) {
      M(n, e, o), R(e, r);
    },
    p(n, o) {
      o & /*svgSize*/
      16 && i !== (i = /*svgSize*/
      n[4]) && b(e, "class", i);
    },
    d(n) {
      n && S(e);
    }
  };
}
function Zi(t) {
  let e, r;
  const i = [
    { name: (
      /*name*/
      t[0]
    ) },
    /*$$restProps*/
    t[1],
    {
      class: W(
        "uikit-ms-auto",
        /*$$props*/
        t[2].class
      )
    }
  ];
  let n = {
    $$slots: {
      default: [
        Di,
        ({ svgSize: o }) => ({ 4: o }),
        ({ svgSize: o }) => o ? 16 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let o = 0; o < i.length; o += 1)
    n = I(n, i[o]);
  return e = new qi({ props: n }), e.$on(
    "click",
    /*click_handler*/
    t[3]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(o, l) {
      te(e, o, l), r = !0;
    },
    p(o, [l]) {
      const s = l & /*name, $$restProps, twMerge, $$props*/
      7 ? $(i, [
        l & /*name*/
        1 && { name: (
          /*name*/
          o[0]
        ) },
        l & /*$$restProps*/
        2 && Ae(
          /*$$restProps*/
          o[1]
        ),
        l & /*twMerge, $$props*/
        4 && {
          class: W(
            "uikit-ms-auto",
            /*$$props*/
            o[2].class
          )
        }
      ]) : {};
      l & /*$$scope, svgSize*/
      48 && (s.$$scope = { dirty: l, ctx: o }), e.$set(s);
    },
    i(o) {
      r || (_(e.$$.fragment, o), r = !0);
    },
    o(o) {
      y(e.$$.fragment, o), r = !1;
    },
    d(o) {
      re(e, o);
    }
  };
}
function Hi(t, e, r) {
  const i = ["name"];
  let n = U(e, i), { name: o = "Close" } = e;
  function l(s) {
    j.call(this, t, s);
  }
  return t.$$set = (s) => {
    r(2, e = I(I({}, e), T(s))), r(1, n = U(e, i)), "name" in s && r(0, o = s.name);
  }, e = T(e), [o, n, e, l];
}
class Ji extends ne {
  constructor(e) {
    super(), ie(this, e, Hi, Zi, J, { name: 0 });
  }
}
const Xi = (t) => ({ close: t & /*close*/
1048576 }), Ft = (t) => ({ close: (
  /*close*/
  t[20]
) }), Ki = (t) => ({}), Lt = (t) => ({});
function Ot(t) {
  let e;
  const r = (
    /*#slots*/
    t[7].icon
  ), i = V(
    r,
    t,
    /*$$scope*/
    t[18],
    Lt
  );
  return {
    c() {
      i && i.c();
    },
    m(n, o) {
      i && i.m(n, o), e = !0;
    },
    p(n, o) {
      i && i.p && (!e || o & /*$$scope*/
      262144) && D(
        i,
        r,
        n,
        /*$$scope*/
        n[18],
        e ? q(
          r,
          /*$$scope*/
          n[18],
          o,
          Ki
        ) : Z(
          /*$$scope*/
          n[18]
        ),
        Lt
      );
    },
    i(n) {
      e || (_(i, n), e = !0);
    },
    o(n) {
      y(i, n), e = !1;
    },
    d(n) {
      i && i.d(n);
    }
  };
}
function Qi(t) {
  let e;
  const r = (
    /*#slots*/
    t[7].default
  ), i = V(
    r,
    t,
    /*$$scope*/
    t[18],
    null
  );
  return {
    c() {
      i && i.c();
    },
    m(n, o) {
      i && i.m(n, o), e = !0;
    },
    p(n, o) {
      i && i.p && (!e || o & /*$$scope*/
      262144) && D(
        i,
        r,
        n,
        /*$$scope*/
        n[18],
        e ? q(
          r,
          /*$$scope*/
          n[18],
          o,
          null
        ) : Z(
          /*$$scope*/
          n[18]
        ),
        null
      );
    },
    i(n) {
      e || (_(i, n), e = !0);
    },
    o(n) {
      y(i, n), e = !1;
    },
    d(n) {
      i && i.d(n);
    }
  };
}
function Yi(t) {
  let e, r;
  const i = (
    /*#slots*/
    t[7].default
  ), n = V(
    i,
    t,
    /*$$scope*/
    t[18],
    null
  );
  return {
    c() {
      e = F("div"), n && n.c();
    },
    m(o, l) {
      M(o, e, l), n && n.m(e, null), r = !0;
    },
    p(o, l) {
      n && n.p && (!r || l & /*$$scope*/
      262144) && D(
        n,
        i,
        o,
        /*$$scope*/
        o[18],
        r ? q(
          i,
          /*$$scope*/
          o[18],
          l,
          null
        ) : Z(
          /*$$scope*/
          o[18]
        ),
        null
      );
    },
    i(o) {
      r || (_(n, o), r = !0);
    },
    o(o) {
      y(n, o), r = !1;
    },
    d(o) {
      o && S(e), n && n.d(o);
    }
  };
}
function Tt(t) {
  let e;
  const r = (
    /*#slots*/
    t[7]["close-button"]
  ), i = V(
    r,
    t,
    /*$$scope*/
    t[18],
    Ft
  ), n = i || $i(t);
  return {
    c() {
      n && n.c();
    },
    m(o, l) {
      n && n.m(o, l), e = !0;
    },
    p(o, l) {
      i ? i.p && (!e || l & /*$$scope, close*/
      1310720) && D(
        i,
        r,
        o,
        /*$$scope*/
        o[18],
        e ? q(
          r,
          /*$$scope*/
          o[18],
          l,
          Xi
        ) : Z(
          /*$$scope*/
          o[18]
        ),
        Ft
      ) : n && n.p && (!e || l & /*$$restProps, close*/
      1048608) && n.p(o, e ? l : -1);
    },
    i(o) {
      e || (_(n, o), e = !0);
    },
    o(o) {
      y(n, o), e = !1;
    },
    d(o) {
      n && n.d(o);
    }
  };
}
function $i(t) {
  let e, r;
  function i(...n) {
    return (
      /*click_handler_1*/
      t[8](
        /*close*/
        t[20],
        ...n
      )
    );
  }
  return e = new Ji({
    props: {
      name: "",
      class: "uikit-ms-auto -uikit-me-1.5 -uikit-my-1.5 dark:hover:uikit-bg-gray-700",
      color: (
        /*$$restProps*/
        t[5].color
      )
    }
  }), e.$on("click", i), e.$on(
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
      le(e.$$.fragment);
    },
    m(n, o) {
      te(e, n, o), r = !0;
    },
    p(n, o) {
      t = n;
      const l = {};
      o & /*$$restProps*/
      32 && (l.color = /*$$restProps*/
      t[5].color), e.$set(l);
    },
    i(n) {
      r || (_(e.$$.fragment, n), r = !0);
    },
    o(n) {
      y(e.$$.fragment, n), r = !1;
    },
    d(n) {
      re(e, n);
    }
  };
}
function en(t) {
  let e, r, i, n, o, l, s = (
    /*$$slots*/
    t[4].icon && Ot(t)
  );
  const a = [Yi, Qi], u = [];
  function c(g, f) {
    return (
      /*$$slots*/
      g[4].icon || /*dismissable*/
      g[1] ? 0 : 1
    );
  }
  r = c(t), i = u[r] = a[r](t);
  let d = (
    /*dismissable*/
    t[1] && Tt(t)
  );
  return {
    c() {
      s && s.c(), e = ae(), i.c(), n = ae(), d && d.c(), o = ue();
    },
    m(g, f) {
      s && s.m(g, f), M(g, e, f), u[r].m(g, f), M(g, n, f), d && d.m(g, f), M(g, o, f), l = !0;
    },
    p(g, f) {
      /*$$slots*/
      g[4].icon ? s ? (s.p(g, f), f & /*$$slots*/
      16 && _(s, 1)) : (s = Ot(g), s.c(), _(s, 1), s.m(e.parentNode, e)) : s && (Q(), y(s, 1, 1, () => {
        s = null;
      }), Y());
      let m = r;
      r = c(g), r === m ? u[r].p(g, f) : (Q(), y(u[m], 1, 1, () => {
        u[m] = null;
      }), Y(), i = u[r], i ? i.p(g, f) : (i = u[r] = a[r](g), i.c()), _(i, 1), i.m(n.parentNode, n)), /*dismissable*/
      g[1] ? d ? (d.p(g, f), f & /*dismissable*/
      2 && _(d, 1)) : (d = Tt(g), d.c(), _(d, 1), d.m(o.parentNode, o)) : d && (Q(), y(d, 1, 1, () => {
        d = null;
      }), Y());
    },
    i(g) {
      l || (_(s), _(i), _(d), l = !0);
    },
    o(g) {
      y(s), y(i), y(d), l = !1;
    },
    d(g) {
      g && (S(e), S(n), S(o)), s && s.d(g), u[r].d(g), d && d.d(g);
    }
  };
}
function tn(t) {
  let e, r;
  const i = [
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
        en,
        ({ close: o }) => ({ 20: o }),
        ({ close: o }) => o ? 1048576 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  for (let o = 0; o < i.length; o += 1)
    n = I(n, i[o]);
  return e = new Oi({ props: n }), e.$on(
    "close",
    /*close_handler*/
    t[17]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(o, l) {
      te(e, o, l), r = !0;
    },
    p(o, [l]) {
      const s = l & /*dismissable, open, $$restProps, divClass*/
      39 ? $(i, [
        l & /*dismissable*/
        2 && { dismissable: (
          /*dismissable*/
          o[1]
        ) },
        l & /*open*/
        1 && { open: (
          /*open*/
          o[0]
        ) },
        i[2],
        i[3],
        i[4],
        l & /*$$restProps*/
        32 && Ae(
          /*$$restProps*/
          o[5]
        ),
        l & /*divClass*/
        4 && { class: (
          /*divClass*/
          o[2]
        ) }
      ]) : {};
      l & /*$$scope, $$restProps, close, dismissable, $$slots*/
      1310770 && (s.$$scope = { dirty: l, ctx: o }), e.$set(s);
    },
    i(o) {
      r || (_(e.$$.fragment, o), r = !0);
    },
    o(o) {
      y(e.$$.fragment, o), r = !1;
    },
    d(o) {
      re(e, o);
    }
  };
}
function rn(t, e, r) {
  const i = ["open", "dismissable", "defaultClass"];
  let n = U(e, i), { $$slots: o = {}, $$scope: l } = e;
  const s = st(o);
  let { open: a = !0 } = e, { dismissable: u = !1 } = e, { defaultClass: c = "uikit-p-4 uikit-gap-3 uikit-text-sm" } = e, d;
  const g = ut(), f = (A, K) => {
    g("onEnd"), A(K);
  };
  function m(A) {
    j.call(this, t, A);
  }
  function p(A) {
    j.call(this, t, A);
  }
  function v(A) {
    j.call(this, t, A);
  }
  function h(A) {
    j.call(this, t, A);
  }
  function k(A) {
    j.call(this, t, A);
  }
  function w(A) {
    j.call(this, t, A);
  }
  function L(A) {
    j.call(this, t, A);
  }
  function z(A) {
    j.call(this, t, A);
  }
  function G(A) {
    j.call(this, t, A);
  }
  return t.$$set = (A) => {
    r(19, e = I(I({}, e), T(A))), r(5, n = U(e, i)), "open" in A && r(0, a = A.open), "dismissable" in A && r(1, u = A.dismissable), "defaultClass" in A && r(6, c = A.defaultClass), "$$scope" in A && r(18, l = A.$$scope);
  }, t.$$.update = () => {
    r(2, d = W(c, (s.icon || u) && "uikit-flex uikit-items-center", e.class));
  }, e = T(e), [
    a,
    u,
    d,
    g,
    s,
    n,
    c,
    o,
    f,
    m,
    p,
    v,
    h,
    k,
    w,
    L,
    z,
    G,
    l
  ];
}
class nn extends ne {
  constructor(e) {
    super(), ie(this, e, rn, tn, J, { open: 0, dismissable: 1, defaultClass: 6 });
  }
}
function on(t) {
  let e, r, i, n, o, l = [
    { xmlns: "http://www.w3.org/2000/svg" },
    { fill: "currentColor" },
    /*$$restProps*/
    t[4],
    {
      class: i = W(
        "shrink-0",
        /*sizes*/
        t[3][
          /*size*/
          t[0]
        ],
        /*$$props*/
        t[5].class
      )
    },
    { role: (
      /*role*/
      t[1]
    ) },
    { "aria-label": (
      /*ariaLabel*/
      t[2]
    ) },
    { viewBox: "0 0 20 20" }
  ], s = {};
  for (let a = 0; a < l.length; a += 1)
    s = I(s, l[a]);
  return {
    c() {
      e = oe("svg"), r = oe("path"), b(r, "fill", "currentColor"), b(r, "d", "M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"), bt(e, s);
    },
    m(a, u) {
      M(a, e, u), R(e, r), n || (o = [
        B(
          e,
          "click",
          /*click_handler*/
          t[6]
        ),
        B(
          e,
          "keydown",
          /*keydown_handler*/
          t[7]
        ),
        B(
          e,
          "keyup",
          /*keyup_handler*/
          t[8]
        ),
        B(
          e,
          "focus",
          /*focus_handler*/
          t[9]
        ),
        B(
          e,
          "blur",
          /*blur_handler*/
          t[10]
        ),
        B(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[11]
        ),
        B(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[12]
        ),
        B(
          e,
          "mouseover",
          /*mouseover_handler*/
          t[13]
        ),
        B(
          e,
          "mouseout",
          /*mouseout_handler*/
          t[14]
        )
      ], n = !0);
    },
    p(a, [u]) {
      bt(e, s = $(l, [
        { xmlns: "http://www.w3.org/2000/svg" },
        { fill: "currentColor" },
        u & /*$$restProps*/
        16 && /*$$restProps*/
        a[4],
        u & /*size, $$props*/
        33 && i !== (i = W(
          "shrink-0",
          /*sizes*/
          a[3][
            /*size*/
            a[0]
          ],
          /*$$props*/
          a[5].class
        )) && { class: i },
        u & /*role*/
        2 && { role: (
          /*role*/
          a[1]
        ) },
        u & /*ariaLabel*/
        4 && { "aria-label": (
          /*ariaLabel*/
          a[2]
        ) },
        { viewBox: "0 0 20 20" }
      ]));
    },
    i: O,
    o: O,
    d(a) {
      a && S(e), n = !1, de(o);
    }
  };
}
function ln(t, e, r) {
  const i = ["size", "role", "ariaLabel"];
  let n = U(e, i);
  const o = ct("iconCtx") ?? {}, l = {
    xs: "uikit-w-3 uikit-h-3",
    sm: "uikit-w-4 uikit-h-4",
    md: "uikit-w-5 uikit-h-5",
    lg: "uikit-w-6 uikit-h-6",
    xl: "uikit-w-8 uikit-h-8"
  };
  let { size: s = o.size || "md" } = e, { role: a = o.role || "img" } = e, { ariaLabel: u = "info circle solid" } = e;
  function c(w) {
    j.call(this, t, w);
  }
  function d(w) {
    j.call(this, t, w);
  }
  function g(w) {
    j.call(this, t, w);
  }
  function f(w) {
    j.call(this, t, w);
  }
  function m(w) {
    j.call(this, t, w);
  }
  function p(w) {
    j.call(this, t, w);
  }
  function v(w) {
    j.call(this, t, w);
  }
  function h(w) {
    j.call(this, t, w);
  }
  function k(w) {
    j.call(this, t, w);
  }
  return t.$$set = (w) => {
    r(5, e = I(I({}, e), T(w))), r(4, n = U(e, i)), "size" in w && r(0, s = w.size), "role" in w && r(1, a = w.role), "ariaLabel" in w && r(2, u = w.ariaLabel);
  }, e = T(e), [
    s,
    a,
    u,
    l,
    n,
    e,
    c,
    d,
    g,
    f,
    m,
    p,
    v,
    h,
    k
  ];
}
class sn extends ne {
  constructor(e) {
    super(), ie(this, e, ln, on, J, { size: 0, role: 1, ariaLabel: 2 });
  }
}
function an(t) {
  let e, r, i, n;
  return {
    c() {
      e = F("span"), r = fe(
        /*mode*/
        t[1]
      ), i = ae(), n = fe(
        /*info*/
        t[2]
      ), b(e, "class", "uikit-font-medium");
    },
    m(o, l) {
      M(o, e, l), R(e, r), M(o, i, l), M(o, n, l);
    },
    p(o, l) {
      l & /*mode*/
      2 && ze(
        r,
        /*mode*/
        o[1]
      ), l & /*info*/
      4 && ze(
        n,
        /*info*/
        o[2]
      );
    },
    d(o) {
      o && (S(e), S(i), S(n));
    }
  };
}
function un(t) {
  let e, r;
  return e = new sn({
    props: {
      slot: "icon",
      class: "uikit-w-4 uikit-h-4"
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, n) {
      te(e, i, n), r = !0;
    },
    p: O,
    i(i) {
      r || (_(e.$$.fragment, i), r = !0);
    },
    o(i) {
      y(e.$$.fragment, i), r = !1;
    },
    d(i) {
      re(e, i);
    }
  };
}
function cn(t) {
  let e, r;
  return e = new nn({
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
        icon: [un],
        default: [an]
      },
      $$scope: { ctx: t }
    }
  }), e.$on(
    "onEnd",
    /*onEnd_handler*/
    t[6]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(i, n) {
      te(e, i, n), r = !0;
    },
    p(i, [n]) {
      const o = {};
      n & /*open*/
      1 && (o.open = /*open*/
      i[0]), n & /*mode*/
      2 && (o.color = /*modeColor*/
      i[3].get(
        /*mode*/
        i[1]
      )), n & /*$$scope, info, mode*/
      134 && (o.$$scope = { dirty: n, ctx: i }), e.$set(o);
    },
    i(i) {
      r || (_(e.$$.fragment, i), r = !0);
    },
    o(i) {
      y(e.$$.fragment, i), r = !1;
    },
    d(i) {
      re(e, i);
    }
  };
}
function fn(t, e, r) {
  let { mode: i = "info" } = e, { info: n = "a default message" } = e, { open: o = !0 } = e, { duration: l = 0 } = e, s = /* @__PURE__ */ new Map([
    ["debug", ""],
    ["info", "blue"],
    ["success", "green"],
    ["warn", "yellow"],
    ["danger", "red"],
    ["dark", "dark"]
  ]);
  const a = ut();
  Xt(() => {
    l > 0 && setTimeout(
      () => {
        r(0, o = !1);
      },
      l
    );
  });
  const u = () => {
    a("onEnd");
  };
  return t.$$set = (c) => {
    "mode" in c && r(1, i = c.mode), "info" in c && r(2, n = c.info), "open" in c && r(0, o = c.open), "duration" in c && r(5, l = c.duration);
  }, [o, i, n, s, a, l, u];
}
class dn extends ne {
  constructor(e) {
    super(), ie(this, e, fn, cn, J, { mode: 1, info: 2, open: 0, duration: 5 });
  }
}
const Rt = "uikit_msg_panel";
let Ye = 0;
const An = (t, e) => {
  Ye += 1;
  let r = window.document.getElementById(Rt);
  r || (r = window.document.createElement("div"), r.id = Rt, r.style.position = "absolute", r.style.top = "5px", r.style.right = "5px", r.style.display = "flex", r.style.flexDirection = "column", r.style.rowGap = "10px", r.style.zIndex = "100", document.body.appendChild(r)), t || (t = window.document.createElement("div"), r.appendChild(t));
  const i = new dn({
    target: t,
    props: {
      ...e
    }
  });
  return i.$on("onEnd", () => {
    i.$destroy(), Ye -= 1, Ye == 0 && document.body.removeChild(r);
  }), i;
};
function gn(t) {
  let e, r;
  const i = (
    /*#slots*/
    t[8].default
  ), n = V(
    i,
    t,
    /*$$scope*/
    t[7],
    null
  );
  return {
    c() {
      e = F("div"), n && n.c(), b(
        e,
        "class",
        /*dotClass*/
        t[0]
      );
    },
    m(o, l) {
      M(o, e, l), n && n.m(e, null), r = !0;
    },
    p(o, [l]) {
      n && n.p && (!r || l & /*$$scope*/
      128) && D(
        n,
        i,
        o,
        /*$$scope*/
        o[7],
        r ? q(
          i,
          /*$$scope*/
          o[7],
          l,
          null
        ) : Z(
          /*$$scope*/
          o[7]
        ),
        null
      ), (!r || l & /*dotClass*/
      1) && b(
        e,
        "class",
        /*dotClass*/
        o[0]
      );
    },
    i(o) {
      r || (_(n, o), r = !0);
    },
    o(o) {
      y(n, o), r = !1;
    },
    d(o) {
      o && S(e), n && n.d(o);
    }
  };
}
function mn(t, e, r) {
  let { $$slots: i = {}, $$scope: n } = e;
  const o = st(i);
  let { color: l = "gray" } = e, { rounded: s = !1 } = e, { size: a = "md" } = e, { border: u = !1 } = e, { placement: c = void 0 } = e, { offset: d = !0 } = e;
  const g = {
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
  }, f = {
    xs: "uikit-w-2 uikit-h-2",
    sm: "uikit-w-2.5 uikit-h-2.5",
    md: "uikit-w-3 uikit-h-3",
    lg: "uikit-w-3.5 uikit-h-3.5",
    xl: "uikit-w-6 uikit-h-6"
  }, m = {
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
  }, p = {
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
  let v;
  return t.$$set = (h) => {
    r(13, e = I(I({}, e), T(h))), "color" in h && r(1, l = h.color), "rounded" in h && r(2, s = h.rounded), "size" in h && r(3, a = h.size), "border" in h && r(4, u = h.border), "placement" in h && r(5, c = h.placement), "offset" in h && r(6, d = h.offset), "$$scope" in h && r(7, n = h.$$scope);
  }, t.$$.update = () => {
    r(0, v = W("uikit-flex-shrink-0", s ? "uikit-rounded" : "uikit-rounded-full", u && "uikit-border-2 uikit-border-white dark:uikit-border-gray-800", f[a], g[l], o.default && "uikit-inline-flex uikit-items-center uikit-justify-center", c && "uikit-absolute " + m[c], c && d && p[c], e.class));
  }, e = T(e), [v, l, s, a, u, c, d, n, i];
}
class bn extends ne {
  constructor(e) {
    super(), ie(this, e, mn, gn, J, {
      color: 1,
      rounded: 2,
      size: 3,
      border: 4,
      placement: 5,
      offset: 6
    });
  }
}
function kn(t) {
  let e, r, i = [
    { alt: (
      /*alt*/
      t[4]
    ) },
    { src: r = /*src*/
    t[1] },
    /*$$restProps*/
    t[7],
    { class: (
      /*avatarClass*/
      t[5]
    ) }
  ], n = {};
  for (let o = 0; o < i.length; o += 1)
    n = I(n, i[o]);
  return {
    c() {
      e = F("img"), ke(e, n);
    },
    m(o, l) {
      M(o, e, l);
    },
    p(o, l) {
      ke(e, n = $(i, [
        l & /*alt*/
        16 && { alt: (
          /*alt*/
          o[4]
        ) },
        l & /*src*/
        2 && !et(e.src, r = /*src*/
        o[1]) && { src: r },
        l & /*$$restProps*/
        128 && /*$$restProps*/
        o[7],
        l & /*avatarClass*/
        32 && { class: (
          /*avatarClass*/
          o[5]
        ) }
      ]));
    },
    i: O,
    o: O,
    d(o) {
      o && S(e);
    }
  };
}
function hn(t) {
  let e = (
    /*href*/
    t[2] ? "a" : "div"
  ), r, i, n = (
    /*href*/
    (t[2] ? "a" : "div") && $e(t)
  );
  return {
    c() {
      n && n.c(), r = ue();
    },
    m(o, l) {
      n && n.m(o, l), M(o, r, l), i = !0;
    },
    p(o, l) {
      /*href*/
      o[2], e ? J(
        e,
        /*href*/
        o[2] ? "a" : "div"
      ) ? (n.d(1), n = $e(o), e = /*href*/
      o[2] ? "a" : "div", n.c(), n.m(r.parentNode, r)) : n.p(o, l) : (n = $e(o), e = /*href*/
      o[2] ? "a" : "div", n.c(), n.m(r.parentNode, r));
    },
    i(o) {
      i || (_(n, o), i = !0);
    },
    o(o) {
      y(n, o), i = !1;
    },
    d(o) {
      o && S(r), n && n.d(o);
    }
  };
}
function _n(t) {
  let e;
  const r = (
    /*#slots*/
    t[12].default
  ), i = V(
    r,
    t,
    /*$$scope*/
    t[11],
    null
  ), n = i || vn(t);
  return {
    c() {
      n && n.c();
    },
    m(o, l) {
      n && n.m(o, l), e = !0;
    },
    p(o, l) {
      i ? i.p && (!e || l & /*$$scope*/
      2048) && D(
        i,
        r,
        o,
        /*$$scope*/
        o[11],
        e ? q(
          r,
          /*$$scope*/
          o[11],
          l,
          null
        ) : Z(
          /*$$scope*/
          o[11]
        ),
        null
      ) : n && n.p && (!e || l & /*rounded*/
      8) && n.p(o, e ? l : -1);
    },
    i(o) {
      e || (_(n, o), e = !0);
    },
    o(o) {
      y(n, o), e = !1;
    },
    d(o) {
      n && n.d(o);
    }
  };
}
function pn(t) {
  let e, r, i;
  return {
    c() {
      e = F("img"), b(
        e,
        "alt",
        /*alt*/
        t[4]
      ), et(e.src, r = /*src*/
      t[1]) || b(e, "src", r), b(e, "class", i = /*rounded*/
      t[3] ? "uikit-rounded-full" : "uikit-rounded");
    },
    m(n, o) {
      M(n, e, o);
    },
    p(n, o) {
      o & /*alt*/
      16 && b(
        e,
        "alt",
        /*alt*/
        n[4]
      ), o & /*src*/
      2 && !et(e.src, r = /*src*/
      n[1]) && b(e, "src", r), o & /*rounded*/
      8 && i !== (i = /*rounded*/
      n[3] ? "uikit-rounded-full" : "uikit-rounded") && b(e, "class", i);
    },
    i: O,
    o: O,
    d(n) {
      n && S(e);
    }
  };
}
function vn(t) {
  let e, r, i;
  return {
    c() {
      e = oe("svg"), r = oe("path"), b(r, "fill-rule", "evenodd"), b(r, "d", "M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"), b(r, "clip-rule", "evenodd"), b(e, "class", i = "uikit-w-full uikit-h-full " + /*rounded*/
      (t[3] ? "uikit-rounded-full" : "uikit-rounded")), b(e, "fill", "currentColor"), b(e, "viewBox", "0 0 16 16"), b(e, "xmlns", "http://www.w3.org/2000/svg");
    },
    m(n, o) {
      M(n, e, o), R(e, r);
    },
    p(n, o) {
      o & /*rounded*/
      8 && i !== (i = "uikit-w-full uikit-h-full " + /*rounded*/
      (n[3] ? "uikit-rounded-full" : "uikit-rounded")) && b(e, "class", i);
    },
    d(n) {
      n && S(e);
    }
  };
}
function Bt(t) {
  let e, r;
  const i = [
    { border: !0 },
    { offset: (
      /*rounded*/
      t[3]
    ) },
    /*dot*/
    t[0]
  ];
  let n = {};
  for (let o = 0; o < i.length; o += 1)
    n = I(n, i[o]);
  return e = new bn({ props: n }), {
    c() {
      le(e.$$.fragment);
    },
    m(o, l) {
      te(e, o, l), r = !0;
    },
    p(o, l) {
      const s = l & /*rounded, dot*/
      9 ? $(i, [
        i[0],
        l & /*rounded*/
        8 && { offset: (
          /*rounded*/
          o[3]
        ) },
        l & /*dot*/
        1 && Ae(
          /*dot*/
          o[0]
        )
      ]) : {};
      e.$set(s);
    },
    i(o) {
      r || (_(e.$$.fragment, o), r = !0);
    },
    o(o) {
      y(e.$$.fragment, o), r = !1;
    },
    d(o) {
      re(e, o);
    }
  };
}
function $e(t) {
  let e, r, i, n, o, l;
  const s = [pn, _n], a = [];
  function u(f, m) {
    return (
      /*src*/
      f[1] ? 0 : 1
    );
  }
  r = u(t), i = a[r] = s[r](t);
  let c = (
    /*dot*/
    t[0] && Bt(t)
  ), d = [
    { href: (
      /*href*/
      t[2]
    ) },
    /*$$restProps*/
    t[7],
    {
      class: o = "uikit-relative uikit-flex uikit-justify-center uikit-items-center " + /*avatarClass*/
      t[5]
    }
  ], g = {};
  for (let f = 0; f < d.length; f += 1)
    g = I(g, d[f]);
  return {
    c() {
      e = F(
        /*href*/
        t[2] ? "a" : "div"
      ), i.c(), n = ae(), c && c.c(), We(
        /*href*/
        t[2] ? "a" : "div"
      )(e, g);
    },
    m(f, m) {
      M(f, e, m), a[r].m(e, null), R(e, n), c && c.m(e, null), l = !0;
    },
    p(f, m) {
      let p = r;
      r = u(f), r === p ? a[r].p(f, m) : (Q(), y(a[p], 1, 1, () => {
        a[p] = null;
      }), Y(), i = a[r], i ? i.p(f, m) : (i = a[r] = s[r](f), i.c()), _(i, 1), i.m(e, n)), /*dot*/
      f[0] ? c ? (c.p(f, m), m & /*dot*/
      1 && _(c, 1)) : (c = Bt(f), c.c(), _(c, 1), c.m(e, null)) : c && (Q(), y(c, 1, 1, () => {
        c = null;
      }), Y()), We(
        /*href*/
        f[2] ? "a" : "div"
      )(e, g = $(d, [
        (!l || m & /*href*/
        4) && { href: (
          /*href*/
          f[2]
        ) },
        m & /*$$restProps*/
        128 && /*$$restProps*/
        f[7],
        (!l || m & /*avatarClass*/
        32 && o !== (o = "uikit-relative uikit-flex uikit-justify-center uikit-items-center " + /*avatarClass*/
        f[5])) && { class: o }
      ]));
    },
    i(f) {
      l || (_(i), _(c), l = !0);
    },
    o(f) {
      y(i), y(c), l = !1;
    },
    d(f) {
      f && S(e), a[r].d(), c && c.d();
    }
  };
}
function yn(t) {
  let e, r, i, n;
  const o = [hn, kn], l = [];
  function s(a, u) {
    return !/*src*/
    a[1] || /*href*/
    a[2] || /*$$slots*/
    a[6].default || /*dot*/
    a[0] ? 0 : 1;
  }
  return e = s(t), r = l[e] = o[e](t), {
    c() {
      r.c(), i = ue();
    },
    m(a, u) {
      l[e].m(a, u), M(a, i, u), n = !0;
    },
    p(a, [u]) {
      let c = e;
      e = s(a), e === c ? l[e].p(a, u) : (Q(), y(l[c], 1, 1, () => {
        l[c] = null;
      }), Y(), r = l[e], r ? r.p(a, u) : (r = l[e] = o[e](a), r.c()), _(r, 1), r.m(i.parentNode, i));
    },
    i(a) {
      n || (_(r), n = !0);
    },
    o(a) {
      y(r), n = !1;
    },
    d(a) {
      a && S(i), l[e].d(a);
    }
  };
}
function wn(t, e, r) {
  const i = ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"];
  let n = U(e, i), { $$slots: o = {}, $$scope: l } = e;
  const s = st(o);
  let { src: a = "" } = e, { href: u = void 0 } = e, { rounded: c = !1 } = e, { border: d = !1 } = e, { stacked: g = !1 } = e, { dot: f = void 0 } = e, { alt: m = "" } = e, { size: p = "md" } = e;
  const v = {
    xs: "uikit-w-6 uikit-h-6",
    sm: "uikit-w-8 uikit-h-8",
    md: "uikit-w-10 uikit-h-10",
    lg: "uikit-w-20 uikit-h-20",
    xl: "uikit-w-36 uikit-h-36",
    none: ""
  };
  let h;
  return t.$$set = (k) => {
    r(14, e = I(I({}, e), T(k))), r(7, n = U(e, i)), "src" in k && r(1, a = k.src), "href" in k && r(2, u = k.href), "rounded" in k && r(3, c = k.rounded), "border" in k && r(8, d = k.border), "stacked" in k && r(9, g = k.stacked), "dot" in k && r(0, f = k.dot), "alt" in k && r(4, m = k.alt), "size" in k && r(10, p = k.size), "$$scope" in k && r(11, l = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*dot*/
    1 && r(0, f = f && {
      placement: "top-right",
      color: "gray",
      size: "lg",
      ...f
    }), r(5, h = W(c ? "uikit-rounded-full" : "uikit-rounded", d && "uikit-p-1 uikit-ring-2 uikit-ring-gray-300 dark:uikit-ring-gray-500", v[p], g && "uikit-border-2 -uikit-ms-4 uikit-border-white dark:uikit-border-gray-800", "uikit-bg-gray-100 dark:uikit-bg-gray-600 uikit-text-gray-600 dark:uikit-text-gray-300", e.class));
  }, e = T(e), [
    f,
    a,
    u,
    c,
    m,
    h,
    s,
    n,
    d,
    g,
    p,
    l,
    o
  ];
}
class Cn extends ne {
  constructor(e) {
    super(), ie(this, e, wn, yn, J, {
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
const Sn = (t, e) => (t || (t = window.document.createElement("div"), document.body.appendChild(t)), new Cn({
  target: t,
  props: {
    ...e
    // $$slots,
  }
}));
export {
  xn as FnAccordion,
  An as FnAlert,
  Sn as FnAvatar
};
