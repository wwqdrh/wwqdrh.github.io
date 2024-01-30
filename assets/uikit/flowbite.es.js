var Mt = Object.defineProperty;
var St = (e, t, r) => t in e ? Mt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var je = (e, t, r) => (St(e, typeof t != "symbol" ? t + "" : t, r), r);
function T() {
}
const ut = (e) => e;
function B(e, t) {
  for (const r in t)
    e[r] = t[r];
  return (
    /** @type {T & S} */
    e
  );
}
function dt(e) {
  return e();
}
function Xe() {
  return /* @__PURE__ */ Object.create(null);
}
function X(e) {
  e.forEach(dt);
}
function xe(e) {
  return typeof e == "function";
}
function ue(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function It(e) {
  return Object.keys(e).length === 0;
}
function zt(e, ...t) {
  if (e == null) {
    for (const n of t)
      n(void 0);
    return T;
  }
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function Gt(e, t, r) {
  e.$$.on_destroy.push(zt(t, r));
}
function K(e, t, r, n) {
  if (e) {
    const i = ct(e, t, r, n);
    return e[0](i);
  }
}
function ct(e, t, r, n) {
  return e[1] && n ? B(r.ctx.slice(), e[1](n(t))) : r.ctx;
}
function Q(e, t, r, n) {
  if (e[2] && n) {
    const i = e[2](n(r));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const o = [], s = Math.max(t.dirty.length, i.length);
      for (let a = 0; a < s; a += 1)
        o[a] = t.dirty[a] | i[a];
      return o;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function Y(e, t, r, n, i, o) {
  if (i) {
    const s = ct(t, r, n, o);
    e.p(s, i);
  }
}
function $(e) {
  if (e.ctx.length > 32) {
    const t = [], r = e.ctx.length / 32;
    for (let n = 0; n < r; n++)
      t[n] = -1;
    return t;
  }
  return -1;
}
function le(e) {
  const t = {};
  for (const r in e)
    r[0] !== "$" && (t[r] = e[r]);
  return t;
}
function Se(e, t) {
  const r = {};
  t = new Set(t);
  for (const n in e)
    !t.has(n) && n[0] !== "$" && (r[n] = e[n]);
  return r;
}
function Et(e, t, r) {
  return e.set(r), t;
}
function Pt(e) {
  return e && xe(e.destroy) ? e.destroy : T;
}
function Le(e) {
  const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return t ? [parseFloat(t[1]), t[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
const ft = typeof window < "u";
let Ot = ft ? () => window.performance.now() : () => Date.now(), De = ft ? (e) => requestAnimationFrame(e) : T;
const ae = /* @__PURE__ */ new Set();
function gt(e) {
  ae.forEach((t) => {
    t.c(e) || (ae.delete(t), t.f());
  }), ae.size !== 0 && De(gt);
}
function Tt(e) {
  let t;
  return ae.size === 0 && De(gt), {
    promise: new Promise((r) => {
      ae.add(t = { c: e, f: r });
    }),
    abort() {
      ae.delete(t);
    }
  };
}
function J(e, t) {
  e.appendChild(t);
}
function bt(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function jt(e) {
  const t = O("style");
  return t.textContent = "/* empty */", Rt(bt(e), t), t.sheet;
}
function Rt(e, t) {
  return J(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function z(e, t, r) {
  e.insertBefore(t, r || null);
}
function M(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function O(e) {
  return document.createElement(e);
}
function Ie(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function pt(e) {
  return document.createTextNode(e);
}
function Z() {
  return pt(" ");
}
function mt() {
  return pt("");
}
function oe(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function v(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
const Ft = ["width", "height"];
function Nt(e, t) {
  const r = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const n in t)
    t[n] == null ? e.removeAttribute(n) : n === "style" ? e.style.cssText = t[n] : n === "__value" ? e.value = e[n] = t[n] : r[n] && r[n].set && Ft.indexOf(n) === -1 ? e[n] = t[n] : v(e, n, t[n]);
}
function Lt(e, t) {
  Object.keys(t).forEach((r) => {
    Wt(e, r, t[r]);
  });
}
function Wt(e, t, r) {
  t in e ? e[t] = typeof e[t] == "boolean" && r === "" ? !0 : r : v(e, t, r);
}
function Ke(e) {
  return /-/.test(e) ? Lt : Nt;
}
function Bt(e) {
  return Array.from(e.childNodes);
}
function Ut(e, t, { bubbles: r = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: r, cancelable: n });
}
const ze = /* @__PURE__ */ new Map();
let Ge = 0;
function Vt(e) {
  let t = 5381, r = e.length;
  for (; r--; )
    t = (t << 5) - t ^ e.charCodeAt(r);
  return t >>> 0;
}
function qt(e, t) {
  const r = { stylesheet: jt(t), rules: {} };
  return ze.set(e, r), r;
}
function Qe(e, t, r, n, i, o, s, a = 0) {
  const l = 16.666 / n;
  let u = `{
`;
  for (let m = 0; m <= 1; m += l) {
    const _ = t + (r - t) * o(m);
    u += m * 100 + `%{${s(_, 1 - _)}}
`;
  }
  const d = u + `100% {${s(r, 1 - r)}}
}`, c = `__svelte_${Vt(d)}_${a}`, y = bt(e), { stylesheet: b, rules: f } = ze.get(y) || qt(y, e);
  f[c] || (f[c] = !0, b.insertRule(`@keyframes ${c} ${d}`, b.cssRules.length));
  const k = e.style.animation || "";
  return e.style.animation = `${k ? `${k}, ` : ""}${c} ${n}ms linear ${i}ms 1 both`, Ge += 1, c;
}
function Dt(e, t) {
  const r = (e.style.animation || "").split(", "), n = r.filter(
    t ? (o) => o.indexOf(t) < 0 : (o) => o.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), i = r.length - n.length;
  i && (e.style.animation = n.join(", "), Ge -= i, Ge || Ht());
}
function Ht() {
  De(() => {
    Ge || (ze.forEach((e) => {
      const { ownerNode: t } = e.stylesheet;
      t && M(t);
    }), ze.clear());
  });
}
let ye;
function he(e) {
  ye = e;
}
function He() {
  if (!ye)
    throw new Error("Function called outside component initialization");
  return ye;
}
function Zt(e) {
  He().$$.on_mount.push(e);
}
function We(e, t) {
  return He().$$.context.set(e, t), t;
}
function Jt(e) {
  return He().$$.context.get(e);
}
function ge(e, t) {
  const r = e.$$.callbacks[t.type];
  r && r.slice().forEach((n) => n.call(this, t));
}
const ie = [], Be = [];
let se = [];
const Ye = [], Xt = /* @__PURE__ */ Promise.resolve();
let Ue = !1;
function Kt() {
  Ue || (Ue = !0, Xt.then(ht));
}
function ve(e) {
  se.push(e);
}
const Re = /* @__PURE__ */ new Set();
let re = 0;
function ht() {
  if (re !== 0)
    return;
  const e = ye;
  do {
    try {
      for (; re < ie.length; ) {
        const t = ie[re];
        re++, he(t), Qt(t.$$);
      }
    } catch (t) {
      throw ie.length = 0, re = 0, t;
    }
    for (he(null), ie.length = 0, re = 0; Be.length; )
      Be.pop()();
    for (let t = 0; t < se.length; t += 1) {
      const r = se[t];
      Re.has(r) || (Re.add(r), r());
    }
    se.length = 0;
  } while (ie.length);
  for (; Ye.length; )
    Ye.pop()();
  Ue = !1, Re.clear(), he(e);
}
function Qt(e) {
  if (e.fragment !== null) {
    e.update(), X(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(ve);
  }
}
function Yt(e) {
  const t = [], r = [];
  se.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach((n) => n()), se = t;
}
let be;
function $t() {
  return be || (be = Promise.resolve(), be.then(() => {
    be = null;
  })), be;
}
function Fe(e, t, r) {
  e.dispatchEvent(Ut(`${t ? "intro" : "outro"}${r}`));
}
const Me = /* @__PURE__ */ new Set();
let W;
function $e() {
  W = {
    r: 0,
    c: [],
    p: W
    // parent group
  };
}
function et() {
  W.r || X(W.c), W = W.p;
}
function E(e, t) {
  e && e.i && (Me.delete(e), e.i(t));
}
function P(e, t, r, n) {
  if (e && e.o) {
    if (Me.has(e))
      return;
    Me.add(e), W.c.push(() => {
      Me.delete(e), n && (r && e.d(1), n());
    }), e.o(t);
  } else
    n && n();
}
const er = { duration: 0 };
function tt(e, t, r, n) {
  let o = t(e, r, { direction: "both" }), s = n ? 0 : 1, a = null, l = null, u = null, d;
  function c() {
    u && Dt(e, u);
  }
  function y(f, k) {
    const m = (
      /** @type {Program['d']} */
      f.b - s
    );
    return k *= Math.abs(m), {
      a: s,
      b: f.b,
      d: m,
      duration: k,
      start: f.start,
      end: f.start + k,
      group: f.group
    };
  }
  function b(f) {
    const {
      delay: k = 0,
      duration: m = 300,
      easing: _ = ut,
      tick: S = T,
      css: I
    } = o || er, G = {
      start: Ot() + k,
      b: f
    };
    f || (G.group = W, W.r += 1), "inert" in e && (f ? d !== void 0 && (e.inert = d) : (d = /** @type {HTMLElement} */
    e.inert, e.inert = !0)), a || l ? l = G : (I && (c(), u = Qe(e, s, f, m, k, _, I)), f && S(0, 1), a = y(G, m), ve(() => Fe(e, f, "start")), Tt((p) => {
      if (l && p > l.start && (a = y(l, m), l = null, Fe(e, a.b, "start"), I && (c(), u = Qe(
        e,
        s,
        a.b,
        a.duration,
        0,
        _,
        o.css
      ))), a) {
        if (p >= a.end)
          S(s = a.b, 1 - s), Fe(e, a.b, "end"), l || (a.b ? c() : --a.group.r || X(a.group.c)), a = null;
        else if (p >= a.start) {
          const C = p - a.start;
          s = a.a + a.d * _(C / a.duration), S(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(f) {
      xe(o) ? $t().then(() => {
        o = o({ direction: f ? "in" : "out" }), b(f);
      }) : b(f);
    },
    end() {
      c(), a = l = null;
    }
  };
}
function yt(e, t) {
  const r = {}, n = {}, i = { $$scope: 1 };
  let o = e.length;
  for (; o--; ) {
    const s = e[o], a = t[o];
    if (a) {
      for (const l in s)
        l in a || (n[l] = 1);
      for (const l in a)
        i[l] || (r[l] = a[l], i[l] = 1);
      e[o] = a;
    } else
      for (const l in s)
        i[l] = 1;
  }
  for (const s in n)
    s in r || (r[s] = void 0);
  return r;
}
function tr(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function Ee(e) {
  e && e.c();
}
function ke(e, t, r) {
  const { fragment: n, after_update: i } = e.$$;
  n && n.m(t, r), ve(() => {
    const o = e.$$.on_mount.map(dt).filter(xe);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : X(o), e.$$.on_mount = [];
  }), i.forEach(ve);
}
function _e(e, t) {
  const r = e.$$;
  r.fragment !== null && (Yt(r.after_update), X(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function rr(e, t) {
  e.$$.dirty[0] === -1 && (ie.push(e), Kt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Pe(e, t, r, n, i, o, s, a = [-1]) {
  const l = ye;
  he(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: T,
    not_equal: i,
    bound: Xe(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Xe(),
    dirty: a,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  s && s(u.root);
  let d = !1;
  if (u.ctx = r ? r(e, t.props || {}, (c, y, ...b) => {
    const f = b.length ? b[0] : y;
    return u.ctx && i(u.ctx[c], u.ctx[c] = f) && (!u.skip_bound && u.bound[c] && u.bound[c](f), d && rr(e, c)), y;
  }) : [], u.update(), d = !0, X(u.before_update), u.fragment = n ? n(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const c = Bt(t.target);
      u.fragment && u.fragment.l(c), c.forEach(M);
    } else
      u.fragment && u.fragment.c();
    t.intro && E(e.$$.fragment), ke(e, t.target, t.anchor), ht();
  }
  he(l);
}
class Oe {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    je(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    je(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    _e(this, 1), this.$destroy = T;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, r) {
    if (!xe(r))
      return T;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(r), () => {
      const i = n.indexOf(r);
      i !== -1 && n.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !It(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const nr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(nr);
const ne = [];
function vt(e, t = T) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function i(a) {
    if (ue(e, a) && (e = a, r)) {
      const l = !ne.length;
      for (const u of n)
        u[1](), ne.push(u, e);
      if (l) {
        for (let u = 0; u < ne.length; u += 2)
          ne[u][0](ne[u + 1]);
        ne.length = 0;
      }
    }
  }
  function o(a) {
    i(a(e));
  }
  function s(a, l = T) {
    const u = [a, l];
    return n.add(u), n.size === 1 && (r = t(i, o) || T), a(e), () => {
      n.delete(u), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
function or() {
  for (var e = 0, t, r, n = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = kt(t)) && (n && (n += " "), n += r);
  return n;
}
function kt(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", n = 0; n < e.length; n++)
    e[n] && (t = kt(e[n])) && (r && (r += " "), r += t);
  return r;
}
var Ze = "-";
function ir(e) {
  var t = sr(e), r = e.conflictingClassGroups, n = e.conflictingClassGroupModifiers, i = n === void 0 ? {} : n;
  function o(a) {
    var l = a.split(Ze);
    return l[0] === "" && l.length !== 1 && l.shift(), _t(l, t) || ar(a);
  }
  function s(a, l) {
    var u = r[a] || [];
    return l && i[a] ? [].concat(u, i[a]) : u;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  };
}
function _t(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], n = t.nextPart.get(r), i = n ? _t(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length !== 0) {
    var o = e.join(Ze);
    return (s = t.validators.find(function(a) {
      var l = a.validator;
      return l(o);
    })) == null ? void 0 : s.classGroupId;
  }
}
var rt = /^\[(.+)\]$/;
function ar(e) {
  if (rt.test(e)) {
    var t = rt.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function sr(e) {
  var t = e.theme, r = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, i = ur(Object.entries(e.classGroups), r);
  return i.forEach(function(o) {
    var s = o[0], a = o[1];
    Ve(a, n, s, t);
  }), n;
}
function Ve(e, t, r, n) {
  e.forEach(function(i) {
    if (typeof i == "string") {
      var o = i === "" ? t : nt(t, i);
      o.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (lr(i)) {
        Ve(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(function(s) {
      var a = s[0], l = s[1];
      Ve(l, nt(t, a), r, n);
    });
  });
}
function nt(e, t) {
  var r = e;
  return t.split(Ze).forEach(function(n) {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function lr(e) {
  return e.isThemeGetter;
}
function ur(e, t) {
  return t ? e.map(function(r) {
    var n = r[0], i = r[1], o = i.map(function(s) {
      return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(a) {
        var l = a[0], u = a[1];
        return [t + l, u];
      })) : s;
    });
    return [n, o];
  }) : e;
}
function dr(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function i(o, s) {
    r.set(o, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(s) {
      var a = r.get(s);
      if (a !== void 0)
        return a;
      if ((a = n.get(s)) !== void 0)
        return i(s, a), a;
    },
    set: function(s, a) {
      r.has(s) ? r.set(s, a) : i(s, a);
    }
  };
}
var xt = "!";
function cr(e) {
  var t = e.separator || ":", r = t.length === 1, n = t[0], i = t.length;
  return function(s) {
    for (var a = [], l = 0, u = 0, d, c = 0; c < s.length; c++) {
      var y = s[c];
      if (l === 0) {
        if (y === n && (r || s.slice(c, c + i) === t)) {
          a.push(s.slice(u, c)), u = c + i;
          continue;
        }
        if (y === "/") {
          d = c;
          continue;
        }
      }
      y === "[" ? l++ : y === "]" && l--;
    }
    var b = a.length === 0 ? s : s.substring(u), f = b.startsWith(xt), k = f ? b.substring(1) : b, m = d && d > u ? d - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: f,
      baseClassName: k,
      maybePostfixModifierPosition: m
    };
  };
}
function fr(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(n) {
    var i = n[0] === "[";
    i ? (t.push.apply(t, r.sort().concat([n])), r = []) : r.push(n);
  }), t.push.apply(t, r.sort()), t;
}
function gr(e) {
  return {
    cache: dr(e.cacheSize),
    splitModifiers: cr(e),
    ...ir(e)
  };
}
var br = /\s+/;
function pr(e, t) {
  var r = t.splitModifiers, n = t.getClassGroupId, i = t.getConflictingClassGroupIds, o = /* @__PURE__ */ new Set();
  return e.trim().split(br).map(function(s) {
    var a = r(s), l = a.modifiers, u = a.hasImportantModifier, d = a.baseClassName, c = a.maybePostfixModifierPosition, y = n(c ? d.substring(0, c) : d), b = !!c;
    if (!y) {
      if (!c)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (y = n(d), !y)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      b = !1;
    }
    var f = fr(l).join(":"), k = u ? f + xt : f;
    return {
      isTailwindClass: !0,
      modifierId: k,
      classGroupId: y,
      originalClassName: s,
      hasPostfixModifier: b
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var a = s.modifierId, l = s.classGroupId, u = s.hasPostfixModifier, d = a + l;
    return o.has(d) ? !1 : (o.add(d), i(l, u).forEach(function(c) {
      return o.add(a + c);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function mr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n, i, o, s = a;
  function a(u) {
    var d = t[0], c = t.slice(1), y = c.reduce(function(b, f) {
      return f(b);
    }, d());
    return n = gr(y), i = n.cache.get, o = n.cache.set, s = l, l(u);
  }
  function l(u) {
    var d = i(u);
    if (d)
      return d;
    var c = pr(u, n);
    return o(u, c), c;
  }
  return function() {
    return s(or.apply(null, arguments));
  };
}
function A(e) {
  var t = function(n) {
    return n[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var wt = /^\[(?:([a-z-]+):)?(.+)\]$/i, hr = /^\d+\/\d+$/, yr = /* @__PURE__ */ new Set(["px", "full", "screen"]), vr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, kr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, _r = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function F(e) {
  return H(e) || yr.has(e) || hr.test(e) || qe(e);
}
function qe(e) {
  return ee(e, "length", Sr);
}
function xr(e) {
  return ee(e, "size", Ct);
}
function wr(e) {
  return ee(e, "position", Ct);
}
function Cr(e) {
  return ee(e, "url", Ir);
}
function Ae(e) {
  return ee(e, "number", H);
}
function H(e) {
  return !Number.isNaN(Number(e));
}
function Ar(e) {
  return e.endsWith("%") && H(e.slice(0, -1));
}
function pe(e) {
  return ot(e) || ee(e, "number", ot);
}
function x(e) {
  return wt.test(e);
}
function me() {
  return !0;
}
function U(e) {
  return vr.test(e);
}
function Mr(e) {
  return ee(e, "", zr);
}
function ee(e, t, r) {
  var n = wt.exec(e);
  return n ? n[1] ? n[1] === t : r(n[2]) : !1;
}
function Sr(e) {
  return kr.test(e);
}
function Ct() {
  return !1;
}
function Ir(e) {
  return e.startsWith("url(");
}
function ot(e) {
  return Number.isInteger(Number(e));
}
function zr(e) {
  return _r.test(e);
}
function Gr() {
  var e = A("colors"), t = A("spacing"), r = A("blur"), n = A("brightness"), i = A("borderColor"), o = A("borderRadius"), s = A("borderSpacing"), a = A("borderWidth"), l = A("contrast"), u = A("grayscale"), d = A("hueRotate"), c = A("invert"), y = A("gap"), b = A("gradientColorStops"), f = A("gradientColorStopPositions"), k = A("inset"), m = A("margin"), _ = A("opacity"), S = A("padding"), I = A("saturate"), G = A("scale"), p = A("sepia"), C = A("skew"), N = A("space"), L = A("translate"), q = function() {
    return ["auto", "contain", "none"];
  }, j = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, h = function() {
    return ["auto", x, t];
  }, w = function() {
    return [x, t];
  }, we = function() {
    return ["", F];
  }, te = function() {
    return ["auto", H, x];
  }, de = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, g = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, D = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Te = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, ce = function() {
    return ["", "0", x];
  }, Je = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, fe = function() {
    return [H, Ae];
  }, Ce = function() {
    return [H, x];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [me],
      spacing: [F],
      blur: ["none", "", U, x],
      brightness: fe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", U, x],
      borderSpacing: w(),
      borderWidth: we(),
      contrast: fe(),
      grayscale: ce(),
      hueRotate: Ce(),
      invert: ce(),
      gap: w(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ar, qe],
      inset: h(),
      margin: h(),
      opacity: fe(),
      padding: w(),
      saturate: fe(),
      scale: fe(),
      sepia: ce(),
      skew: Ce(),
      space: w(),
      translate: w()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", x]
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
        columns: [U]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Je()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Je()
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
        object: [].concat(de(), [x])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: j()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": j()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": j()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: q()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": q()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": q()
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
        inset: [k]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [k]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [k]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [k]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [k]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [k]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [k]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [k]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [k]
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
        z: ["auto", pe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: h()
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
        flex: ["1", "auto", "initial", "none", x]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ce()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ce()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", pe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [me]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", pe]
        }, x]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": te()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": te()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [me]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [pe]
        }, x]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": te()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": te()
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
        "auto-cols": ["auto", "min", "max", "fr", x]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", x]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [y]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [y]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [y]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(Te())
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
        content: ["normal"].concat(Te(), ["baseline"])
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
        "place-content": [].concat(Te(), ["baseline"])
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
        p: [S]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [S]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [S]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [S]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [S]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [S]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [S]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [S]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [S]
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
        "space-x": [N]
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
        "space-y": [N]
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
        w: ["auto", "min", "max", "fit", x, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", x, F]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [U]
        }, U, x]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [x, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", x, F]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [x, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", U, qe]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ae]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [me]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", x]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", H, Ae]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", x, F]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", x]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", x]
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
        decoration: [].concat(g(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", F]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", x, F]
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
        indent: w()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", x]
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
        content: ["none", x]
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
        bg: [].concat(de(), [wr])
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
        bg: ["auto", "cover", "contain", xr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Cr]
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
        from: [f]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [f]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [b]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [b]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [b]
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
        "border-opacity": [_]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(g(), ["hidden"])
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
        "divide-opacity": [_]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: g()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(g())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [x, F]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [F]
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
        ring: we()
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
        "ring-offset": [F]
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
        shadow: ["", "inner", "none", U, Mr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [me]
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
        "mix-blend": D()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": D()
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
        brightness: [n]
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
        "drop-shadow": ["", "none", U, x]
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
        "hue-rotate": [d]
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
        saturate: [I]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [p]
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
        "backdrop-brightness": [n]
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
        "backdrop-hue-rotate": [d]
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
        "backdrop-sepia": [p]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", x]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Ce()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", x]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Ce()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", x]
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
        scale: [G]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [G]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [G]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [pe, x]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", x]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", x]
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
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
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
        "will-change": ["auto", "scroll", "contents", "transform", x]
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
        stroke: [F, Ae]
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
var V = /* @__PURE__ */ mr(Gr);
function Ne(e) {
  let t, r, n, i, o;
  const s = (
    /*#slots*/
    e[12].default
  ), a = K(
    s,
    e,
    /*$$scope*/
    e[11],
    null
  );
  let l = [
    { role: (
      /*role*/
      e[4]
    ) },
    /*$$restProps*/
    e[6],
    { class: (
      /*divClass*/
      e[5]
    ) }
  ], u = {};
  for (let d = 0; d < l.length; d += 1)
    u = B(u, l[d]);
  return {
    c() {
      t = O(
        /*tag*/
        e[1]
      ), a && a.c(), Ke(
        /*tag*/
        e[1]
      )(t, u);
    },
    m(d, c) {
      z(d, t, c), a && a.m(t, null), e[18](t), n = !0, i || (o = [
        Pt(r = /*use*/
        e[2].call(
          null,
          t,
          /*options*/
          e[3]
        )),
        oe(
          t,
          "click",
          /*click_handler*/
          e[13]
        ),
        oe(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[14]
        ),
        oe(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[15]
        ),
        oe(
          t,
          "focusin",
          /*focusin_handler*/
          e[16]
        ),
        oe(
          t,
          "focusout",
          /*focusout_handler*/
          e[17]
        )
      ], i = !0);
    },
    p(d, c) {
      a && a.p && (!n || c & /*$$scope*/
      2048) && Y(
        a,
        s,
        d,
        /*$$scope*/
        d[11],
        n ? Q(
          s,
          /*$$scope*/
          d[11],
          c,
          null
        ) : $(
          /*$$scope*/
          d[11]
        ),
        null
      ), Ke(
        /*tag*/
        d[1]
      )(t, u = yt(l, [
        (!n || c & /*role*/
        16) && { role: (
          /*role*/
          d[4]
        ) },
        c & /*$$restProps*/
        64 && /*$$restProps*/
        d[6],
        (!n || c & /*divClass*/
        32) && { class: (
          /*divClass*/
          d[5]
        ) }
      ])), r && xe(r.update) && c & /*options*/
      8 && r.update.call(
        null,
        /*options*/
        d[3]
      );
    },
    i(d) {
      n || (E(a, d), n = !0);
    },
    o(d) {
      P(a, d), n = !1;
    },
    d(d) {
      d && M(t), a && a.d(d), e[18](null), i = !1, X(o);
    }
  };
}
function Er(e) {
  let t = (
    /*tag*/
    e[1]
  ), r, n, i = (
    /*tag*/
    e[1] && Ne(e)
  );
  return {
    c() {
      i && i.c(), r = mt();
    },
    m(o, s) {
      i && i.m(o, s), z(o, r, s), n = !0;
    },
    p(o, [s]) {
      /*tag*/
      o[1] ? t ? ue(
        t,
        /*tag*/
        o[1]
      ) ? (i.d(1), i = Ne(o), t = /*tag*/
      o[1], i.c(), i.m(r.parentNode, r)) : i.p(o, s) : (i = Ne(o), t = /*tag*/
      o[1], i.c(), i.m(r.parentNode, r)) : t && (i.d(1), i = null, t = /*tag*/
      o[1]);
    },
    i(o) {
      n || (E(i, o), n = !0);
    },
    o(o) {
      P(i, o), n = !1;
    },
    d(o) {
      o && M(r), i && i.d(o);
    }
  };
}
function Pr(e, t, r) {
  const n = ["tag", "color", "rounded", "border", "shadow", "node", "use", "options", "role"];
  let i = Se(t, n), { $$slots: o = {}, $$scope: s } = t;
  const a = () => {
  };
  We("background", !0);
  let { tag: l = i.href ? "a" : "div" } = t, { color: u = "default" } = t, { rounded: d = !1 } = t, { border: c = !1 } = t, { shadow: y = !1 } = t, { node: b = void 0 } = t, { use: f = a } = t, { options: k = {} } = t, { role: m = void 0 } = t;
  const _ = {
    gray: "bg-gray-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    yellow: "bg-yellow-50 dark:bg-gray-800 ",
    green: "bg-green-50 dark:bg-gray-800 ",
    indigo: "bg-indigo-50 dark:bg-gray-800 ",
    purple: "bg-purple-50 dark:bg-gray-800 ",
    pink: "bg-pink-50 dark:bg-gray-800 ",
    blue: "bg-blue-50 dark:bg-gray-800 ",
    light: "bg-gray-50 dark:bg-gray-700",
    dark: "bg-gray-50 dark:bg-gray-800",
    default: "bg-white dark:bg-gray-800",
    dropdown: "bg-white dark:bg-gray-700",
    navbar: "bg-white dark:bg-gray-900",
    navbarUl: "bg-gray-50 dark:bg-gray-800",
    form: "bg-gray-50 dark:bg-gray-700",
    primary: "bg-primary-50 dark:bg-gray-800 ",
    orange: "bg-orange-50 dark:bg-orange-800",
    none: ""
  }, S = {
    gray: "text-gray-800 dark:text-gray-300",
    red: "text-red-800 dark:text-red-400",
    yellow: "text-yellow-800 dark:text-yellow-300",
    green: "text-green-800 dark:text-green-400",
    indigo: "text-indigo-800 dark:text-indigo-400",
    purple: "text-purple-800 dark:text-purple-400",
    pink: "text-pink-800 dark:text-pink-400",
    blue: "text-blue-800 dark:text-blue-400",
    light: "text-gray-700 dark:text-gray-300",
    dark: "text-gray-700 dark:text-gray-300",
    default: "text-gray-500 dark:text-gray-400",
    dropdown: "text-gray-700 dark:text-gray-200",
    navbar: "text-gray-700 dark:text-gray-200",
    navbarUl: "text-gray-700 dark:text-gray-400",
    form: "text-gray-900 dark:text-white",
    primary: "text-primary-800 dark:text-primary-400",
    orange: "text-orange-800 dark:text-orange-400",
    none: ""
  }, I = {
    gray: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800",
    red: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800",
    yellow: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800",
    green: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800",
    indigo: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800",
    purple: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800",
    pink: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800",
    blue: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800",
    light: "border-gray-500 divide-gray-500",
    dark: "border-gray-500 divide-gray-500",
    default: "border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
    dropdown: "border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    navbar: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    navbarUl: "border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700",
    form: "border-gray-300 dark:border-gray-700 divide-gray-300 dark:divide-gray-700",
    primary: "border-primary-500 dark:border-primary-200  divide-primary-500 dark:divide-primary-200 ",
    orange: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800",
    none: ""
  };
  let G;
  function p(h) {
    ge.call(this, e, h);
  }
  function C(h) {
    ge.call(this, e, h);
  }
  function N(h) {
    ge.call(this, e, h);
  }
  function L(h) {
    ge.call(this, e, h);
  }
  function q(h) {
    ge.call(this, e, h);
  }
  function j(h) {
    Be[h ? "unshift" : "push"](() => {
      b = h, r(0, b);
    });
  }
  return e.$$set = (h) => {
    r(23, t = B(B({}, t), le(h))), r(6, i = Se(t, n)), "tag" in h && r(1, l = h.tag), "color" in h && r(7, u = h.color), "rounded" in h && r(8, d = h.rounded), "border" in h && r(9, c = h.border), "shadow" in h && r(10, y = h.shadow), "node" in h && r(0, b = h.node), "use" in h && r(2, f = h.use), "options" in h && r(3, k = h.options), "role" in h && r(4, m = h.role), "$$scope" in h && r(11, s = h.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*color*/
    128 && r(7, u = u ?? "default"), e.$$.dirty & /*color*/
    128 && We("color", u), r(5, G = V(_[u], S[u], d && "rounded-lg", c && "border", I[u], y && "shadow-md", t.class));
  }, t = le(t), [
    b,
    l,
    f,
    k,
    m,
    G,
    i,
    u,
    d,
    c,
    y,
    s,
    o,
    p,
    C,
    N,
    L,
    q,
    j
  ];
}
class Or extends Oe {
  constructor(t) {
    super(), Pe(this, t, Pr, Er, ue, {
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
function Tr(e) {
  let t;
  const r = (
    /*#slots*/
    e[7].default
  ), n = K(
    r,
    e,
    /*$$scope*/
    e[8],
    null
  );
  return {
    c() {
      n && n.c();
    },
    m(i, o) {
      n && n.m(i, o), t = !0;
    },
    p(i, o) {
      n && n.p && (!t || o & /*$$scope*/
      256) && Y(
        n,
        r,
        i,
        /*$$scope*/
        i[8],
        t ? Q(
          r,
          /*$$scope*/
          i[8],
          o,
          null
        ) : $(
          /*$$scope*/
          i[8]
        ),
        null
      );
    },
    i(i) {
      t || (E(n, i), t = !0);
    },
    o(i) {
      P(n, i), t = !1;
    },
    d(i) {
      n && n.d(i);
    }
  };
}
function jr(e) {
  let t, r;
  const n = [
    /*$$restProps*/
    e[1],
    { class: (
      /*frameClass*/
      e[0]
    ) },
    { color: "none" }
  ];
  let i = {
    $$slots: { default: [Tr] },
    $$scope: { ctx: e }
  };
  for (let o = 0; o < n.length; o += 1)
    i = B(i, n[o]);
  return t = new Or({ props: i }), {
    c() {
      Ee(t.$$.fragment);
    },
    m(o, s) {
      ke(t, o, s), r = !0;
    },
    p(o, [s]) {
      const a = s & /*$$restProps, frameClass*/
      3 ? yt(n, [
        s & /*$$restProps*/
        2 && tr(
          /*$$restProps*/
          o[1]
        ),
        s & /*frameClass*/
        1 && { class: (
          /*frameClass*/
          o[0]
        ) },
        n[2]
      ]) : {};
      s & /*$$scope*/
      256 && (a.$$scope = { dirty: s, ctx: o }), t.$set(a);
    },
    i(o) {
      r || (E(t.$$.fragment, o), r = !0);
    },
    o(o) {
      P(t.$$.fragment, o), r = !1;
    },
    d(o) {
      _e(t, o);
    }
  };
}
function Rr(e, t, r) {
  const n = ["multiple", "flush", "activeClass", "inactiveClass", "defaultClass"];
  let i = Se(t, n), { $$slots: o = {}, $$scope: s } = t, { multiple: a = !1 } = t, { flush: l = !1 } = t, { activeClass: u = "uikit-bg-gray-100 dark:uikit-bg-gray-800 uikit-text-gray-900 dark:uikit-text-white focus:uikit-ring-4 focus:uikit-ring-gray-200 dark:focus:uikit-ring-gray-800" } = t, { inactiveClass: d = "uikit-text-gray-500 dark:uikit-text-gray-400 hover:uikit-bg-gray-100 hover:dark:uikit-bg-gray-800" } = t, { defaultClass: c = "uikit-text-gray-500 dark:uikit-text-gray-400" } = t;
  const y = {
    flush: l,
    activeClass: V(u, t.classActive),
    inactiveClass: V(d, t.classInactive),
    selected: a ? void 0 : vt()
  };
  We("ctx", y);
  let b;
  return e.$$set = (f) => {
    r(10, t = B(B({}, t), le(f))), r(1, i = Se(t, n)), "multiple" in f && r(2, a = f.multiple), "flush" in f && r(3, l = f.flush), "activeClass" in f && r(4, u = f.activeClass), "inactiveClass" in f && r(5, d = f.inactiveClass), "defaultClass" in f && r(6, c = f.defaultClass), "$$scope" in f && r(8, s = f.$$scope);
  }, e.$$.update = () => {
    r(0, b = V(c, t.class));
  }, t = le(t), [
    b,
    i,
    a,
    l,
    u,
    d,
    c,
    o,
    s
  ];
}
class Fr extends Oe {
  constructor(t) {
    super(), Pe(this, t, Rr, jr, ue, {
      multiple: 2,
      flush: 3,
      activeClass: 4,
      inactiveClass: 5,
      defaultClass: 6
    });
  }
}
function Nr(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function At(e) {
  const t = e - 1;
  return t * t * t + 1;
}
function Lr(e, { delay: t = 0, duration: r = 400, easing: n = Nr, amount: i = 5, opacity: o = 0 } = {}) {
  const s = getComputedStyle(e), a = +s.opacity, l = s.filter === "none" ? "" : s.filter, u = a * (1 - o), [d, c] = Le(i);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (y, b) => `opacity: ${a - u * b}; filter: ${l} blur(${b * d}${c});`
  };
}
function Wr(e, { delay: t = 0, duration: r = 400, easing: n = ut } = {}) {
  const i = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (o) => `opacity: ${o * i}`
  };
}
function Br(e, { delay: t = 0, duration: r = 400, easing: n = At, x: i = 0, y: o = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(e), l = +a.opacity, u = a.transform === "none" ? "" : a.transform, d = l * (1 - s), [c, y] = Le(i), [b, f] = Le(o);
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (k, m) => `
			transform: ${u} translate(${(1 - k) * c}${y}, ${(1 - k) * b}${f});
			opacity: ${l - d * m}`
  };
}
function Ur(e, { delay: t = 0, duration: r = 400, easing: n = At, axis: i = "y" } = {}) {
  const o = getComputedStyle(e), s = +o.opacity, a = i === "y" ? "height" : "width", l = parseFloat(o[a]), u = i === "y" ? ["top", "bottom"] : ["left", "right"], d = u.map(
    (_) => `${_[0].toUpperCase()}${_.slice(1)}`
  ), c = parseFloat(o[`padding${d[0]}`]), y = parseFloat(o[`padding${d[1]}`]), b = parseFloat(o[`margin${d[0]}`]), f = parseFloat(o[`margin${d[1]}`]), k = parseFloat(
    o[`border${d[0]}Width`]
  ), m = parseFloat(
    o[`border${d[1]}Width`]
  );
  return {
    delay: t,
    duration: r,
    easing: n,
    css: (_) => `overflow: hidden;opacity: ${Math.min(_ * 20, 1) * s};${a}: ${_ * l}px;padding-${u[0]}: ${_ * c}px;padding-${u[1]}: ${_ * y}px;margin-${u[0]}: ${_ * b}px;margin-${u[1]}: ${_ * f}px;border-${u[0]}-width: ${_ * k}px;border-${u[1]}-width: ${_ * m}px;`
  };
}
const Vr = (e) => ({}), it = (e) => ({}), qr = (e) => ({}), at = (e) => ({}), Dr = (e) => ({}), st = (e) => ({});
function Hr(e) {
  let t;
  const r = (
    /*#slots*/
    e[22].arrowdown
  ), n = K(
    r,
    e,
    /*$$scope*/
    e[21],
    it
  ), i = n || Jr();
  return {
    c() {
      i && i.c();
    },
    m(o, s) {
      i && i.m(o, s), t = !0;
    },
    p(o, s) {
      n && n.p && (!t || s & /*$$scope*/
      2097152) && Y(
        n,
        r,
        o,
        /*$$scope*/
        o[21],
        t ? Q(
          r,
          /*$$scope*/
          o[21],
          s,
          Vr
        ) : $(
          /*$$scope*/
          o[21]
        ),
        it
      );
    },
    i(o) {
      t || (E(i, o), t = !0);
    },
    o(o) {
      P(i, o), t = !1;
    },
    d(o) {
      i && i.d(o);
    }
  };
}
function Zr(e) {
  let t;
  const r = (
    /*#slots*/
    e[22].arrowup
  ), n = K(
    r,
    e,
    /*$$scope*/
    e[21],
    at
  ), i = n || Xr();
  return {
    c() {
      i && i.c();
    },
    m(o, s) {
      i && i.m(o, s), t = !0;
    },
    p(o, s) {
      n && n.p && (!t || s & /*$$scope*/
      2097152) && Y(
        n,
        r,
        o,
        /*$$scope*/
        o[21],
        t ? Q(
          r,
          /*$$scope*/
          o[21],
          s,
          qr
        ) : $(
          /*$$scope*/
          o[21]
        ),
        at
      );
    },
    i(o) {
      t || (E(i, o), t = !0);
    },
    o(o) {
      P(i, o), t = !1;
    },
    d(o) {
      i && i.d(o);
    }
  };
}
function Jr(e) {
  let t, r;
  return {
    c() {
      t = Ie("svg"), r = Ie("path"), v(r, "stroke", "currentColor"), v(r, "stroke-linecap", "round"), v(r, "stroke-linejoin", "round"), v(r, "stroke-width", "2"), v(r, "d", "m1 1 4 4 4-4"), v(t, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), v(t, "aria-hidden", "true"), v(t, "xmlns", "http://www.w3.org/2000/svg"), v(t, "fill", "none"), v(t, "viewBox", "0 0 10 6");
    },
    m(n, i) {
      z(n, t, i), J(t, r);
    },
    p: T,
    d(n) {
      n && M(t);
    }
  };
}
function Xr(e) {
  let t, r;
  return {
    c() {
      t = Ie("svg"), r = Ie("path"), v(r, "stroke", "currentColor"), v(r, "stroke-linecap", "round"), v(r, "stroke-linejoin", "round"), v(r, "stroke-width", "2"), v(r, "d", "M9 5 5 1 1 5"), v(t, "class", "uikit-w-3 uikit-h-3 uikit-text-gray-800 dark:uikit-text-white"), v(t, "aria-hidden", "true"), v(t, "xmlns", "http://www.w3.org/2000/svg"), v(t, "fill", "none"), v(t, "viewBox", "0 0 10 6");
    },
    m(n, i) {
      z(n, t, i), J(t, r);
    },
    p: T,
    d(n) {
      n && M(t);
    }
  };
}
function Kr(e) {
  let t, r, n;
  const i = (
    /*#slots*/
    e[22].default
  ), o = K(
    i,
    e,
    /*$$scope*/
    e[21],
    null
  );
  return {
    c() {
      t = O("div"), r = O("div"), o && o.c(), v(
        r,
        "class",
        /*contentClass*/
        e[3]
      ), v(t, "class", "uikit-hidden");
    },
    m(s, a) {
      z(s, t, a), J(t, r), o && o.m(r, null), n = !0;
    },
    p(s, a) {
      o && o.p && (!n || a & /*$$scope*/
      2097152) && Y(
        o,
        i,
        s,
        /*$$scope*/
        s[21],
        n ? Q(
          i,
          /*$$scope*/
          s[21],
          a,
          null
        ) : $(
          /*$$scope*/
          s[21]
        ),
        null
      ), (!n || a & /*contentClass*/
      8) && v(
        r,
        "class",
        /*contentClass*/
        s[3]
      );
    },
    i(s) {
      n || (E(o, s), n = !0);
    },
    o(s) {
      P(o, s), n = !1;
    },
    d(s) {
      s && M(t), o && o.d(s);
    }
  };
}
function Qr(e) {
  let t, r, n, i;
  const o = (
    /*#slots*/
    e[22].default
  ), s = K(
    o,
    e,
    /*$$scope*/
    e[21],
    null
  );
  return {
    c() {
      t = O("div"), r = O("div"), s && s.c(), v(
        r,
        "class",
        /*contentClass*/
        e[3]
      );
    },
    m(a, l) {
      z(a, t, l), J(t, r), s && s.m(r, null), i = !0;
    },
    p(a, l) {
      e = a, s && s.p && (!i || l & /*$$scope*/
      2097152) && Y(
        s,
        o,
        e,
        /*$$scope*/
        e[21],
        i ? Q(
          o,
          /*$$scope*/
          e[21],
          l,
          null
        ) : $(
          /*$$scope*/
          e[21]
        ),
        null
      ), (!i || l & /*contentClass*/
      8) && v(
        r,
        "class",
        /*contentClass*/
        e[3]
      );
    },
    i(a) {
      i || (E(s, a), a && ve(() => {
        i && (n || (n = tt(
          t,
          /*multiple*/
          e[4],
          /*transitionParams*/
          e[1],
          !0
        )), n.run(1));
      }), i = !0);
    },
    o(a) {
      P(s, a), a && (n || (n = tt(
        t,
        /*multiple*/
        e[4],
        /*transitionParams*/
        e[1],
        !1
      )), n.run(0)), i = !1;
    },
    d(a) {
      a && M(t), s && s.d(a), a && n && n.end();
    }
  };
}
function Yr(e) {
  let t, r, n, i, o, s, a, l, u, d, c, y;
  const b = (
    /*#slots*/
    e[22].header
  ), f = K(
    b,
    e,
    /*$$scope*/
    e[21],
    st
  ), k = [Zr, Hr], m = [];
  function _(p, C) {
    return (
      /*open*/
      p[0] ? 0 : 1
    );
  }
  i = _(e), o = m[i] = k[i](e);
  const S = [Qr, Kr], I = [];
  function G(p, C) {
    return (
      /*open*/
      p[0] ? 0 : 1
    );
  }
  return a = G(e), l = I[a] = S[a](e), {
    c() {
      t = O("h2"), r = O("button"), f && f.c(), n = Z(), o.c(), s = Z(), l.c(), u = mt(), v(r, "type", "button"), v(
        r,
        "class",
        /*buttonClass*/
        e[2]
      ), v(
        r,
        "aria-expanded",
        /*open*/
        e[0]
      ), v(t, "class", "group");
    },
    m(p, C) {
      z(p, t, C), J(t, r), f && f.m(r, null), J(r, n), m[i].m(r, null), z(p, s, C), I[a].m(p, C), z(p, u, C), d = !0, c || (y = oe(
        r,
        "click",
        /*handleToggle*/
        e[6]
      ), c = !0);
    },
    p(p, [C]) {
      f && f.p && (!d || C & /*$$scope*/
      2097152) && Y(
        f,
        b,
        p,
        /*$$scope*/
        p[21],
        d ? Q(
          b,
          /*$$scope*/
          p[21],
          C,
          Dr
        ) : $(
          /*$$scope*/
          p[21]
        ),
        st
      );
      let N = i;
      i = _(p), i === N ? m[i].p(p, C) : ($e(), P(m[N], 1, 1, () => {
        m[N] = null;
      }), et(), o = m[i], o ? o.p(p, C) : (o = m[i] = k[i](p), o.c()), E(o, 1), o.m(r, null)), (!d || C & /*buttonClass*/
      4) && v(
        r,
        "class",
        /*buttonClass*/
        p[2]
      ), (!d || C & /*open*/
      1) && v(
        r,
        "aria-expanded",
        /*open*/
        p[0]
      );
      let L = a;
      a = G(p), a === L ? I[a].p(p, C) : ($e(), P(I[L], 1, 1, () => {
        I[L] = null;
      }), et(), l = I[a], l ? l.p(p, C) : (l = I[a] = S[a](p), l.c()), E(l, 1), l.m(u.parentNode, u));
    },
    i(p) {
      d || (E(f, p), E(o), E(l), d = !0);
    },
    o(p) {
      P(f, p), P(o), P(l), d = !1;
    },
    d(p) {
      p && (M(t), M(s), M(u)), f && f.d(p), m[i].d(), I[a].d(p), c = !1, y();
    }
  };
}
function $r(e, t, r) {
  let n, i, { $$slots: o = {}, $$scope: s } = t, { open: a = !1 } = t, { activeClass: l = void 0 } = t, { inactiveClass: u = void 0 } = t, { defaultClass: d = "uikit-flex uikit-items-center uikit-justify-between uikit-w-full uikit-font-medium uikit-text-left group-first:uikit-rounded-t-xl uikit-border-gray-200 dark:uikit-border-gray-700" } = t, { transitionType: c = "slide" } = t, { transitionParams: y = {} } = t, { paddingFlush: b = "uikit-py-5" } = t, { paddingDefault: f = "uikit-p-5" } = t, { textFlushOpen: k = "uikit-text-gray-900 dark:uikit-text-white" } = t, { textFlushDefault: m = "uikit-text-gray-500 dark:uikit-text-gray-400" } = t, { borderClass: _ = "uikit-border-s uikit-border-e group-first:uikit-border-t" } = t, { borderOpenClass: S = "uikit-border-s uikit-border-e" } = t, { borderBottomClass: I = "uikit-border-b" } = t, { borderSharedClass: G = "uikit-border-gray-200 dark:uikit-border-gray-700" } = t, { classActive: p = void 0 } = t, { classInactive: C = void 0 } = t, N = V(l, p), L = V(u, C);
  const q = (g, D) => {
    switch (c) {
      case "blur":
        return Lr(g, D);
      case "fly":
        return Br(g, D);
      case "fade":
        return Wr(g, D);
      default:
        return Ur(g, D);
    }
  }, j = Jt("ctx") ?? {}, h = {}, w = j.selected ?? vt();
  Gt(e, w, (g) => r(23, i = g));
  let we = a;
  a = !1, Zt(() => (we && Et(w, i = h, i), w.subscribe((g) => r(0, a = g === h))));
  const te = (g) => w.set(a ? {} : h);
  let de;
  return e.$$set = (g) => {
    r(29, t = B(B({}, t), le(g))), "open" in g && r(0, a = g.open), "activeClass" in g && r(7, l = g.activeClass), "inactiveClass" in g && r(8, u = g.inactiveClass), "defaultClass" in g && r(9, d = g.defaultClass), "transitionType" in g && r(10, c = g.transitionType), "transitionParams" in g && r(1, y = g.transitionParams), "paddingFlush" in g && r(11, b = g.paddingFlush), "paddingDefault" in g && r(12, f = g.paddingDefault), "textFlushOpen" in g && r(13, k = g.textFlushOpen), "textFlushDefault" in g && r(14, m = g.textFlushDefault), "borderClass" in g && r(15, _ = g.borderClass), "borderOpenClass" in g && r(16, S = g.borderOpenClass), "borderBottomClass" in g && r(17, I = g.borderBottomClass), "borderSharedClass" in g && r(18, G = g.borderSharedClass), "classActive" in g && r(19, p = g.classActive), "classInactive" in g && r(20, C = g.classInactive), "$$scope" in g && r(21, s = g.$$scope);
  }, e.$$.update = () => {
    r(2, de = V([
      d,
      j.flush || _,
      I,
      G,
      j.flush ? b : f,
      a && (j.flush ? k : N || j.activeClass),
      !a && (j.flush ? m : L || j.inactiveClass),
      t.class
    ])), e.$$.dirty & /*paddingFlush, paddingDefault, borderOpenClass, borderBottomClass, borderSharedClass*/
    464896 && r(3, n = V([
      j.flush ? b : f,
      j.flush ? "" : S,
      I,
      G
    ]));
  }, t = le(t), [
    a,
    y,
    de,
    n,
    q,
    w,
    te,
    l,
    u,
    d,
    c,
    b,
    f,
    k,
    m,
    _,
    S,
    I,
    G,
    p,
    C,
    s,
    o
  ];
}
class lt extends Oe {
  constructor(t) {
    super(), Pe(this, t, $r, Yr, ue, {
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
function en(e) {
  let t, r, n;
  return {
    c() {
      t = O("p"), t.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
            necessitatibus sint explicabo ...`, r = Z(), n = O("p"), n.innerHTML = `Check out this guide to learn how to <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a>
            and start developing websites even faster with components on top of Tailwind
            CSS.`, v(t, "class", "mb-2 text-gray-500 dark:text-gray-400"), v(n, "class", "text-gray-500 dark:text-gray-400");
    },
    m(i, o) {
      z(i, t, o), z(i, r, o), z(i, n, o);
    },
    p: T,
    d(i) {
      i && (M(t), M(r), M(n));
    }
  };
}
function tn(e) {
  let t;
  return {
    c() {
      t = O("span"), t.textContent = "My Header 1", v(t, "slot", "header");
    },
    m(r, n) {
      z(r, t, n);
    },
    p: T,
    d(r) {
      r && M(t);
    }
  };
}
function rn(e) {
  let t, r, n, i, o, s, a;
  return {
    c() {
      t = O("p"), t.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
            necessitatibus sint explicabo ...`, r = Z(), n = O("p"), n.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
            necessitatibus sint explicabo ...`, i = Z(), o = O("p"), o.textContent = "Learn more about these technologies:", s = Z(), a = O("ul"), a.innerHTML = '<li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 dark:text-blue-500 hover:underline">Lorem ipsum</a></li> <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>', v(t, "class", "mb-2 text-gray-500 dark:text-gray-400"), v(n, "class", "mb-2 text-gray-500 dark:text-gray-400"), v(o, "class", "mb-2 text-gray-500 dark:text-gray-400"), v(a, "class", "list-disc ps-5 dark:text-gray-400 text-gray-500");
    },
    m(l, u) {
      z(l, t, u), z(l, r, u), z(l, n, u), z(l, i, u), z(l, o, u), z(l, s, u), z(l, a, u);
    },
    p: T,
    d(l) {
      l && (M(t), M(r), M(n), M(i), M(o), M(s), M(a));
    }
  };
}
function nn(e) {
  let t;
  return {
    c() {
      t = O("span"), t.textContent = "My Header 2", v(t, "slot", "header");
    },
    m(r, n) {
      z(r, t, n);
    },
    p: T,
    d(r) {
      r && M(t);
    }
  };
}
function on(e) {
  let t, r, n, i;
  return t = new lt({
    props: {
      $$slots: {
        header: [tn],
        default: [en]
      },
      $$scope: { ctx: e }
    }
  }), n = new lt({
    props: {
      $$slots: {
        header: [nn],
        default: [rn]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ee(t.$$.fragment), r = Z(), Ee(n.$$.fragment);
    },
    m(o, s) {
      ke(t, o, s), z(o, r, s), ke(n, o, s), i = !0;
    },
    p(o, s) {
      const a = {};
      s & /*$$scope*/
      1 && (a.$$scope = { dirty: s, ctx: o }), t.$set(a);
      const l = {};
      s & /*$$scope*/
      1 && (l.$$scope = { dirty: s, ctx: o }), n.$set(l);
    },
    i(o) {
      i || (E(t.$$.fragment, o), E(n.$$.fragment, o), i = !0);
    },
    o(o) {
      P(t.$$.fragment, o), P(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && M(r), _e(t, o), _e(n, o);
    }
  };
}
function an(e) {
  let t, r;
  return t = new Fr({
    props: {
      $$slots: { default: [on] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ee(t.$$.fragment);
    },
    m(n, i) {
      ke(t, n, i), r = !0;
    },
    p(n, [i]) {
      const o = {};
      i & /*$$scope*/
      1 && (o.$$scope = { dirty: i, ctx: n }), t.$set(o);
    },
    i(n) {
      r || (E(t.$$.fragment, n), r = !0);
    },
    o(n) {
      P(t.$$.fragment, n), r = !1;
    },
    d(n) {
      _e(t, n);
    }
  };
}
class ln extends Oe {
  constructor(t) {
    super(), Pe(this, t, null, an, ue, {});
  }
}
export {
  ln as Accordion
};
