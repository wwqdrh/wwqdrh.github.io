var Cr = Object.defineProperty;
var Nr = (e, t, n) => t in e ? Cr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var B = (e, t, n) => (Nr(e, typeof t != "symbol" ? t + "" : t, n), n), Sr = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var ft = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
};
var Ke = (e, t, n) => (Sr(e, t, "access private method"), n);
import { E as He, H as Ti, t as f, r as Mi, u as Tr, v as Nn, w as Mr, x as Ir, y as jr, z as Or, A as Lr, e as Rr, S as Br } from "./editor-core.js";
import { j as zr } from "./editor-json.js";
import { y as Pr } from "./editor-yaml.js";
import { p as Dr } from "./editor-python.js";
import { j as Hr } from "./editor-javascript.js";
function ue() {
}
function it(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function Ii(e) {
  return e();
}
function Sn() {
  return /* @__PURE__ */ Object.create(null);
}
function We(e) {
  e.forEach(Ii);
}
function ji(e) {
  return typeof e == "function";
}
function rt(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Tn(e, t, n, r) {
  return e[1] && r ? it(n.ctx.slice(), e[1](r(t))) : n.ctx;
}
function Nt(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function mt(e) {
  return e ?? "";
}
function L(e, t) {
  e.appendChild(t);
}
function pe(e, t, n) {
  e.insertBefore(t, n || null);
}
function ae(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function U(e) {
  return document.createElement(e);
}
function Bt(e) {
  return document.createTextNode(e);
}
function ne() {
  return Bt(" ");
}
function Oi() {
  return Bt("");
}
function $t(e, t, n, r) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
function R(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Ue(e, t, n) {
  e.classList.toggle(t, !!n);
}
class Li {
  constructor(t = !1) {
    B(this, "is_svg", !1);
    B(this, "e");
    B(this, "n");
    B(this, "t");
    B(this, "a");
    this.is_svg = t, this.e = this.n = null;
  }
  c(t) {
    this.h(t);
  }
  m(t, n, r = null) {
    var i;
    this.e || (this.is_svg ? this.e = (i = n.nodeName, document.createElementNS("http://www.w3.org/2000/svg", i)) : this.e = U(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(t)), this.i(r);
  }
  h(t) {
    this.e.innerHTML = t, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
  }
  i(t) {
    for (let n = 0; n < this.n.length; n += 1)
      pe(this.t, this.n[n], t);
  }
  p(t) {
    this.d(), this.h(t), this.i(this.a);
  }
  d() {
    this.n.forEach(ae);
  }
}
let ot;
function et(e) {
  ot = e;
}
function zt() {
  if (!ot)
    throw new Error("Function called outside component initialization");
  return ot;
}
function gn(e) {
  zt().$$.on_mount.push(e);
}
function fn() {
  const e = zt();
  return (t, n, { cancelable: r = !1 } = {}) => {
    const i = e.$$.callbacks[t];
    if (i) {
      const o = function(s, a, { bubbles: c = !1, cancelable: u = !1 } = {}) {
        return new CustomEvent(s, { detail: a, bubbles: c, cancelable: u });
      }(t, n, { cancelable: r });
      return i.slice().forEach((s) => {
        s.call(e, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
const Pe = [], be = [];
let qe = [];
const Mn = [], Ri = Promise.resolve();
let on = !1;
function Bi() {
  on || (on = !0, Ri.then(zi));
}
function sn(e) {
  qe.push(e);
}
const Ut = /* @__PURE__ */ new Set();
let Oe = 0;
function zi() {
  if (Oe !== 0)
    return;
  const e = ot;
  do {
    try {
      for (; Oe < Pe.length; ) {
        const t = Pe[Oe];
        Oe++, et(t), Ur(t.$$);
      }
    } catch (t) {
      throw Pe.length = 0, Oe = 0, t;
    }
    for (et(null), Pe.length = 0, Oe = 0; be.length; )
      be.pop()();
    for (let t = 0; t < qe.length; t += 1) {
      const n = qe[t];
      Ut.has(n) || (Ut.add(n), n());
    }
    qe.length = 0;
  } while (Pe.length);
  for (; Mn.length; )
    Mn.pop()();
  on = !1, Ut.clear(), et(e);
}
function Ur(e) {
  if (e.fragment !== null) {
    e.update(), We(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(sn);
  }
}
const At = /* @__PURE__ */ new Set();
let Te;
function Pi() {
  Te = { r: 0, c: [], p: Te };
}
function Di() {
  Te.r || We(Te.c), Te = Te.p;
}
function me(e, t) {
  e && e.i && (At.delete(e), e.i(t));
}
function Ae(e, t, n, r) {
  if (e && e.o) {
    if (At.has(e))
      return;
    At.add(e), Te.c.push(() => {
      At.delete(e), r && (n && e.d(1), r());
    }), e.o(t);
  } else
    r && r();
}
function an(e) {
  e && e.c();
}
function St(e, t, n) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), sn(() => {
    const o = e.$$.on_mount.map(Ii).filter(ji);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : We(o), e.$$.on_mount = [];
  }), i.forEach(sn);
}
function Tt(e, t) {
  const n = e.$$;
  n.fragment !== null && (function(r) {
    const i = [], o = [];
    qe.forEach((s) => r.indexOf(s) === -1 ? i.push(s) : o.push(s)), o.forEach((s) => s()), qe = i;
  }(n.after_update), We(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function st(e, t, n, r, i, o, s = null, a = [-1]) {
  const c = ot;
  et(e);
  const u = e.$$ = { fragment: null, ctx: [], props: o, update: ue, not_equal: i, bound: Sn(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(t.context || (c ? c.$$.context : [])), callbacks: Sn(), dirty: a, skip_bound: !1, root: t.target || c.$$.root };
  s && s(u.root);
  let p = !1;
  if (u.ctx = n ? n(e, t.props || {}, (d, g, ...b) => {
    const x = b.length ? b[0] : g;
    return u.ctx && i(u.ctx[d], u.ctx[d] = x) && (!u.skip_bound && u.bound[d] && u.bound[d](x), p && function(w, M) {
      w.$$.dirty[0] === -1 && (Pe.push(w), Bi(), w.$$.dirty.fill(0)), w.$$.dirty[M / 31 | 0] |= 1 << M % 31;
    }(e, d)), g;
  }) : [], u.update(), p = !0, We(u.before_update), u.fragment = !!r && r(u.ctx), t.target) {
    if (t.hydrate) {
      const d = function(g) {
        return Array.from(g.childNodes);
      }(t.target);
      u.fragment && u.fragment.l(d), d.forEach(ae);
    } else
      u.fragment && u.fragment.c();
    t.intro && me(e.$$.fragment), St(e, t.target, t.anchor), zi();
  }
  et(c);
}
class at {
  constructor() {
    B(this, "$$");
    B(this, "$$set");
  }
  $destroy() {
    Tt(this, 1), this.$destroy = ue;
  }
  $on(t, n) {
    if (!ji(n))
      return ue;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  $set(t) {
    var n;
    this.$$set && (n = t, Object.keys(n).length !== 0) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add("4");
const Zr = { default: `def main():
    pass

if __name__ == "__main__":
    main()
` }, ge = "#DDDDDD", Ye = "#B9D2FF", bt = "#b0b0b0", In = "#808080", Zt = "#000000", Hi = "#fc6d24", Ce = "#fda331", Ft = "#8abeb7", jn = "#b5bd68", Ge = "#6fb3d2", Je = "#cc99cc", On = Hi, Ln = "#292d30", xt = Ye + "30", qt = ge, Rn = ge, Bn = [He.theme({ "&": { color: ge, backgroundColor: "#2E3235" }, ".cm-content": { caretColor: Rn }, ".cm-cursor, .cm-dropCursor": { borderLeftColor: Rn }, "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: "#202325" }, ".cm-panels": { backgroundColor: Ln, color: bt }, ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" }, ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" }, ".cm-searchMatch": { backgroundColor: Ye, outline: `1px solid ${bt}`, color: Zt }, ".cm-searchMatch.cm-searchMatch-selected": { backgroundColor: "#e0e0e0", color: Zt }, ".cm-activeLine": { backgroundColor: xt }, ".cm-selectionMatch": { backgroundColor: xt }, "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": { outline: `1px solid ${bt}` }, "&.cm-focused .cm-matchingBracket": { backgroundColor: Ye, color: Zt }, ".cm-gutters": { borderRight: "1px solid #ffffff10", color: In, backgroundColor: Ln }, ".cm-activeLineGutter": { backgroundColor: xt }, ".cm-foldPlaceholder": { backgroundColor: "transparent", border: "none", color: Ye }, ".cm-tooltip": { border: "none", backgroundColor: qt }, ".cm-tooltip .cm-tooltip-arrow:before": { borderTopColor: "transparent", borderBottomColor: "transparent" }, ".cm-tooltip .cm-tooltip-arrow:after": { borderTopColor: qt, borderBottomColor: qt }, ".cm-tooltip-autocomplete": { "& > ul > li[aria-selected]": { backgroundColor: xt, color: bt } } }, { dark: !0 }), Mi(Ti.define([{ tag: f.keyword, color: Ce }, { tag: [f.name, f.deleted, f.character, f.propertyName, f.macroName], color: jn }, { tag: [f.variableName], color: Ge }, { tag: [f.function(f.variableName)], color: Ce }, { tag: [f.labelName], color: Hi }, { tag: [f.color, f.constant(f.name), f.standard(f.name)], color: Ce }, { tag: [f.definition(f.name), f.separator], color: Je }, { tag: [f.brace], color: Je }, { tag: [f.annotation], color: On }, { tag: [f.number, f.changed, f.annotation, f.modifier, f.self, f.namespace], color: Ce }, { tag: [f.typeName, f.className], color: Ge }, { tag: [f.operator, f.operatorKeyword], color: Je }, { tag: [f.tagName], color: Ce }, { tag: [f.squareBracket], color: Je }, { tag: [f.angleBracket], color: Je }, { tag: [f.attributeName], color: Ge }, { tag: [f.regexp], color: Ce }, { tag: [f.quote], color: ge }, { tag: [f.string], color: jn }, { tag: f.link, color: "#6987AF", textDecoration: "underline", textUnderlinePosition: "under" }, { tag: [f.url, f.escape, f.special(f.string)], color: Ft }, { tag: [f.meta], color: "#A54543" }, { tag: [f.comment], color: In, fontStyle: "italic" }, { tag: f.monospace, color: ge }, { tag: f.strong, fontWeight: "bold", color: Ce }, { tag: f.emphasis, fontStyle: "italic", color: Ge }, { tag: f.strikethrough, textDecoration: "line-through" }, { tag: f.heading, fontWeight: "bold", color: ge }, { tag: f.special(f.heading1), fontWeight: "bold", color: ge }, { tag: f.heading1, fontWeight: "bold", color: ge }, { tag: [f.heading2, f.heading3, f.heading4], fontWeight: "bold", color: ge }, { tag: [f.heading5, f.heading6], color: ge }, { tag: [f.atom, f.bool, f.special(f.variableName)], color: Ft }, { tag: [f.processingInstruction, f.inserted], color: Ft }, { tag: [f.contentSeparator], color: Ge }, { tag: f.invalid, color: Ye, borderBottom: `1px dotted ${On}` }]))], zn = "#2e3440", Ui = "#3b4252", Pn = "#434c5e", kt = "#4c566a", ln = "#e5e9f0", cn = "#eceff4", Wt = "#8fbcbb", Dn = "#88c0d0", he = "#5e81ac", Le = "#d08770", Kt = "#ebcb8b", Hn = "#a3be8c", Un = "#d30102", mn = cn, Gt = mn, Jt = ln, Fr = mn, Zn = Ui, qr = [He.theme({ "&": { color: zn, backgroundColor: "#ffffff" }, ".cm-content": { caretColor: Zn }, ".cm-cursor, .cm-dropCursor": { borderLeftColor: Zn }, "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": { backgroundColor: Fr }, ".cm-panels": { backgroundColor: mn, color: kt }, ".cm-panels.cm-panels-top": { borderBottom: "2px solid black" }, ".cm-panels.cm-panels-bottom": { borderTop: "2px solid black" }, ".cm-searchMatch": { backgroundColor: "#72a1ff59", outline: `1px solid ${kt}` }, ".cm-searchMatch.cm-searchMatch-selected": { backgroundColor: ln }, ".cm-activeLine": { backgroundColor: Gt }, ".cm-selectionMatch": { backgroundColor: ln }, "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": { outline: `1px solid ${kt}` }, "&.cm-focused .cm-matchingBracket": { backgroundColor: cn }, ".cm-gutters": { backgroundColor: cn, color: zn, border: "none" }, ".cm-activeLineGutter": { backgroundColor: Gt }, ".cm-foldPlaceholder": { backgroundColor: "transparent", border: "none", color: "#ddd" }, ".cm-tooltip": { border: "none", backgroundColor: Jt }, ".cm-tooltip .cm-tooltip-arrow:before": { borderTopColor: "transparent", borderBottomColor: "transparent" }, ".cm-tooltip .cm-tooltip-arrow:after": { borderTopColor: Jt, borderBottomColor: Jt }, ".cm-tooltip-autocomplete": { "& > ul > li[aria-selected]": { backgroundColor: Gt, color: kt } } }, { dark: !1 }), Mi(Ti.define([{ tag: f.keyword, color: he }, { tag: [f.name, f.deleted, f.character, f.propertyName, f.macroName], color: Le }, { tag: [f.variableName], color: Le }, { tag: [f.function(f.variableName)], color: he }, { tag: [f.labelName], color: "#81a1c1" }, { tag: [f.color, f.constant(f.name), f.standard(f.name)], color: he }, { tag: [f.definition(f.name), f.separator], color: Hn }, { tag: [f.brace], color: Wt }, { tag: [f.annotation], color: Un }, { tag: [f.number, f.changed, f.annotation, f.modifier, f.self, f.namespace], color: Dn }, { tag: [f.typeName, f.className], color: Kt }, { tag: [f.operator, f.operatorKeyword], color: Hn }, { tag: [f.tagName], color: "#b48ead" }, { tag: [f.squareBracket], color: "#bf616a" }, { tag: [f.angleBracket], color: Le }, { tag: [f.attributeName], color: Kt }, { tag: [f.regexp], color: he }, { tag: [f.quote], color: Ui }, { tag: [f.string], color: Le }, { tag: f.link, color: Wt, textDecoration: "underline", textUnderlinePosition: "under" }, { tag: [f.url, f.escape, f.special(f.string)], color: Le }, { tag: [f.meta], color: Dn }, { tag: [f.comment], color: Pn, fontStyle: "italic" }, { tag: f.strong, fontWeight: "bold", color: he }, { tag: f.emphasis, fontStyle: "italic", color: he }, { tag: f.strikethrough, textDecoration: "line-through" }, { tag: f.heading, fontWeight: "bold", color: he }, { tag: f.special(f.heading1), fontWeight: "bold", color: he }, { tag: f.heading1, fontWeight: "bold", color: he }, { tag: [f.heading2, f.heading3, f.heading4], fontWeight: "bold", color: he }, { tag: [f.heading5, f.heading6], color: he }, { tag: [f.atom, f.bool, f.special(f.variableName)], color: Le }, { tag: [f.processingInstruction, f.inserted], color: Wt }, { tag: [f.contentSeparator], color: Kt }, { tag: f.invalid, color: Pn, borderBottom: `1px dotted ${Un}` }]))];
function Wr(e) {
  let t, n, r, i, o, s;
  return { c() {
    t = U("div"), n = U("div"), n.innerHTML = '<div class="scm-loading__spinner svelte-kcx0g9"></div> <p class="scm-loading__text svelte-kcx0g9">Loading editor...</p>', r = ne(), i = U("pre"), o = Bt(e[0]), R(n, "class", "scm-waiting__loading scm-loading svelte-kcx0g9"), R(i, "class", "scm-pre cm-editor svelte-kcx0g9"), R(t, "class", s = "scm-waiting " + e[3].class + " svelte-kcx0g9");
  }, m(a, c) {
    pe(a, t, c), L(t, n), L(t, r), L(t, i), L(i, o);
  }, p(a, c) {
    1 & c[0] && function(u, p) {
      p = "" + p, u.data !== p && (u.data = p);
    }(o, a[0]), 8 & c[0] && s !== (s = "scm-waiting " + a[3].class + " svelte-kcx0g9") && R(t, "class", s);
  }, d(a) {
    a && ae(t);
  } };
}
function Kr(e) {
  let t, n;
  return { c() {
    t = U("div"), R(t, "class", n = "uie-w-full uie-h-full codemirror-wrapper uie-shadow-lg " + e[3].class + " svelte-kcx0g9");
  }, m(r, i) {
    pe(r, t, i), e[22](t);
  }, p(r, i) {
    8 & i[0] && n !== (n = "uie-w-full uie-h-full codemirror-wrapper uie-shadow-lg " + r[3].class + " svelte-kcx0g9") && R(t, "class", n);
  }, d(r) {
    r && ae(t), e[22](null);
  } };
}
function Gr(e) {
  let t, n = function(i, o) {
    return i[2] ? Kr : Wr;
  }(e), r = n(e);
  return { c() {
    r.c(), t = Oi();
  }, m(i, o) {
    r.m(i, o), pe(i, t, o);
  }, p(i, o) {
    r.p(i, o);
  }, i: ue, o: ue, d(i) {
    i && ae(t), r.d(i);
  } };
}
function Jr(e, t, n) {
  let r, { $$slots: i = {}, $$scope: o } = t;
  const s = function(E) {
    const A = {};
    for (const re in E)
      A[re] = !0;
    return A;
  }(i);
  let { value: a = "" } = t, { lang: c } = t, { snippet: u = "" } = t, { extensions: p = [] } = t, { useTab: d = !0 } = t, { tabSize: g = 4 } = t, { theme: b = "basicLight" } = t, { styles: x } = t, { lineWrapping: w = !1 } = t, { editable: M = !0 } = t, { readonly: l = !1 } = t, { placeholder: _ } = t, { competions: m = [] } = t;
  function h() {
    if (!v)
      return "";
    let E = v.state.selection.ranges;
    return a.slice(E[0].from, E[0].to);
  }
  function y(E = "default") {
    E === "default" && n(0, a = function(A) {
      return A === "python" ? Zr.default : "";
    }(c));
  }
  const k = typeof window < "u", S = fn();
  let N, v, I = !1, $ = !1, O = !0, P = !0;
  var K;
  function X() {
    const E = v.state.doc.toString();
    E !== a && ($ = !0, n(0, a = E), S("change", a));
  }
  function J(E) {
    let A = E.matchBefore(/^(\S+( +\S+)*)?$/);
    return E.state.sliceDoc(0, E.to), A && (A.from != A.to || E.explicit) ? { from: A.from, options: m } : null;
  }
  function V(E) {
    return Nn.create({ doc: E ?? void 0, extensions: [...r] });
  }
  function D(E, A, re, H, z, ve, Y) {
    const ee = [Mr.of(" ".repeat(A)), He.editable.of(z), Nn.readOnly.of(ve)];
    if (E && ee.push(Ir.of([jr])), H && ee.push(Or(H)), re && ee.push(He.lineWrapping), typeof Y == "string")
      Y === "json" ? ee.push(zr()) : Y === "yaml" ? ee.push(Pr()) : Y === "python" ? ee.push(Dr()) : Y === "javascript" && ee.push(Hr());
    else if (Y)
      try {
        Y && ee.push(Y);
      } catch {
      }
    return m.length > 0 && ee.push(Lr({ override: [J] })), ee;
  }
  function le(E, A) {
    const re = [He.theme({ "&": { height: "100%" }, ...A || {} })];
    var H;
    return typeof E == "string" ? re.push((H = E) === "basicDark" ? Bn : H === "basicLight" ? qr : Bn) : E && re.push(E), re;
  }
  return gn(() => n(20, v = function() {
    const E = ((A, re, H) => {
      let z;
      return (ve, ...Y) => {
        const ee = ve;
        z ? clearTimeout(z) : H && A.apply(ee, Y), z = setTimeout(() => {
          H || A.apply(ee, Y), z = null;
        }, re || 100);
      };
    })(X, 300);
    return new He({ parent: N || document.body, state: V(a), dispatch(A) {
      v.update([A]), !I && A.docChanged && E();
    } });
  }())), K = () => v == null ? void 0 : v.destroy(), zt().$$.on_destroy.push(K), e.$$set = (E) => {
    "value" in E && n(0, a = E.value), "lang" in E && n(4, c = E.lang), "snippet" in E && n(5, u = E.snippet), "extensions" in E && n(6, p = E.extensions), "useTab" in E && n(7, d = E.useTab), "tabSize" in E && n(8, g = E.tabSize), "theme" in E && n(9, b = E.theme), "styles" in E && n(10, x = E.styles), "lineWrapping" in E && n(11, w = E.lineWrapping), "editable" in E && n(12, M = E.editable), "readonly" in E && n(13, l = E.readonly), "placeholder" in E && n(14, _ = E.placeholder), "competions" in E && n(15, m = E.competions);
  }, e.$$.update = () => {
    32720 & e.$$.dirty[0] && n(21, r = [Tr, ...D(d, g, w, _, M, l, c), ...le(b, x), ...p]), 1048577 & e.$$.dirty[0] && v && function(E) {
      P ? P = !1 : $ ? $ = !1 : (I = !0, v.setState(V(E)), I = !1);
    }(a), 3145728 & e.$$.dirty[0] && v && r && (O ? O = !1 : v.dispatch({ effects: Br.reconfigure.of(r) })), 32 & e.$$.dirty[0] && u !== "" && y(u);
  }, [a, N, k, s, c, u, p, d, g, b, x, w, M, l, _, m, function() {
    return a;
  }, h, function(E) {
    if (!v || h() === "")
      return;
    let A = v.state.changeByRange((re) => {
      let H = { from: re.from, to: re.to, insert: E };
      return { changes: H, range: Rr.cursor(H.from + E.length) };
    });
    v.dispatch(A);
  }, y, v, r, function(E) {
    be[E ? "unshift" : "push"](() => {
      N = E, n(1, N);
    });
  }];
}
class Zi extends at {
  constructor(t) {
    super(), st(this, t, Jr, Gr, rt, { value: 0, lang: 4, snippet: 5, extensions: 6, useTab: 7, tabSize: 8, theme: 9, styles: 10, lineWrapping: 11, editable: 12, readonly: 13, placeholder: 14, competions: 15, getvalue: 16, getSelect: 17, updateSelect: 18, loadSnippet: 19 }, null, [-1, -1]);
  }
  get getvalue() {
    return this.$$.ctx[16];
  }
  get getSelect() {
    return this.$$.ctx[17];
  }
  get updateSelect() {
    return this.$$.ctx[18];
  }
  get loadSnippet() {
    return this.$$.ctx[19];
  }
}
function Xr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Fi(e) {
  return e instanceof Map ? e.clear = e.delete = e.set = () => {
    throw new Error("map is read-only");
  } : e instanceof Set && (e.add = e.clear = e.delete = () => {
    throw new Error("set is read-only");
  }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach((t) => {
    const n = e[t], r = typeof n;
    r !== "object" && r !== "function" || Object.isFrozen(n) || Fi(n);
  }), e;
}
class Fn {
  constructor(t) {
    t.data === void 0 && (t.data = {}), this.data = t.data, this.isMatchIgnored = !1;
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function qi(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function $e(e, ...t) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    n[r] = e[r];
  return t.forEach((r) => {
    for (const i in r)
      n[i] = r[i];
  }), n;
}
const qn = (e) => !!e.scope;
class Qr {
  constructor(t, n) {
    this.buffer = "", this.classPrefix = n.classPrefix, t.walk(this);
  }
  addText(t) {
    this.buffer += qi(t);
  }
  openNode(t) {
    if (!qn(t))
      return;
    const n = ((r, { prefix: i }) => {
      if (r.startsWith("language:"))
        return r.replace("language:", "language-");
      if (r.includes(".")) {
        const o = r.split(".");
        return [`${i}${o.shift()}`, ...o.map((s, a) => `${s}${"_".repeat(a + 1)}`)].join(" ");
      }
      return `${i}${r}`;
    })(t.scope, { prefix: this.classPrefix });
    this.span(n);
  }
  closeNode(t) {
    qn(t) && (this.buffer += "</span>");
  }
  value() {
    return this.buffer;
  }
  span(t) {
    this.buffer += `<span class="${t}">`;
  }
}
const Wn = (e = {}) => {
  const t = { children: [] };
  return Object.assign(t, e), t;
};
class bn {
  constructor() {
    this.rootNode = Wn(), this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  add(t) {
    this.top.children.push(t);
  }
  openNode(t) {
    const n = Wn({ scope: t });
    this.add(n), this.stack.push(n);
  }
  closeNode() {
    if (this.stack.length > 1)
      return this.stack.pop();
  }
  closeAllNodes() {
    for (; this.closeNode(); )
      ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  walk(t) {
    return this.constructor._walk(t, this.rootNode);
  }
  static _walk(t, n) {
    return typeof n == "string" ? t.addText(n) : n.children && (t.openNode(n), n.children.forEach((r) => this._walk(t, r)), t.closeNode(n)), t;
  }
  static _collapse(t) {
    typeof t != "string" && t.children && (t.children.every((n) => typeof n == "string") ? t.children = [t.children.join("")] : t.children.forEach((n) => {
      bn._collapse(n);
    }));
  }
}
class Yr extends bn {
  constructor(t) {
    super(), this.options = t;
  }
  addText(t) {
    t !== "" && this.add(t);
  }
  startScope(t) {
    this.openNode(t);
  }
  endScope() {
    this.closeNode();
  }
  __addSublanguage(t, n) {
    const r = t.root;
    n && (r.scope = `language:${n}`), this.add(r);
  }
  toHTML() {
    return new Qr(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function lt(e) {
  return e ? typeof e == "string" ? e : e.source : null;
}
function Wi(e) {
  return Ie("(?=", e, ")");
}
function Vr(e) {
  return Ie("(?:", e, ")*");
}
function eo(e) {
  return Ie("(?:", e, ")?");
}
function Ie(...e) {
  return e.map((t) => lt(t)).join("");
}
function xn(...e) {
  return "(" + (function(n) {
    const r = n[n.length - 1];
    return typeof r == "object" && r.constructor === Object ? (n.splice(n.length - 1, 1), r) : {};
  }(e).capture ? "" : "?:") + e.map((n) => lt(n)).join("|") + ")";
}
function Ki(e) {
  return new RegExp(e.toString() + "|").exec("").length - 1;
}
const to = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function un(e, { joinWith: t }) {
  let n = 0;
  return e.map((r) => {
    n += 1;
    const i = n;
    let o = lt(r), s = "";
    for (; o.length > 0; ) {
      const a = to.exec(o);
      if (!a) {
        s += o;
        break;
      }
      s += o.substring(0, a.index), o = o.substring(a.index + a[0].length), a[0][0] === "\\" && a[1] ? s += "\\" + String(Number(a[1]) + i) : (s += a[0], a[0] === "(" && n++);
    }
    return s;
  }).map((r) => `(${r})`).join(t);
}
const Gi = "[a-zA-Z]\\w*", kn = "[a-zA-Z_]\\w*", Ji = "\\b\\d+(\\.\\d+)?", Xi = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Qi = "\\b(0b[01]+)", ct = { begin: "\\\\[\\s\\S]", relevance: 0 }, no = { scope: "string", begin: "'", end: "'", illegal: "\\n", contains: [ct] }, io = { scope: "string", begin: '"', end: '"', illegal: "\\n", contains: [ct] }, Pt = (e, t, n = {}) => {
  const r = $e({ scope: "comment", begin: e, end: t, contains: [] }, n);
  r.contains.push({ scope: "doctag", begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)", end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/, excludeBegin: !0, relevance: 0 });
  const i = xn("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
  return r.contains.push({ begin: Ie(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), r;
}, ro = Pt("//", "$"), oo = Pt("/\\*", "\\*/"), so = Pt("#", "$"), ao = { scope: "number", begin: Ji, relevance: 0 }, lo = { scope: "number", begin: Xi, relevance: 0 }, co = { scope: "number", begin: Qi, relevance: 0 }, uo = { scope: "regexp", begin: /\/(?=[^/\n]*\/)/, end: /\/[gimuy]*/, contains: [ct, { begin: /\[/, end: /\]/, relevance: 0, contains: [ct] }] }, po = { scope: "title", begin: Gi, relevance: 0 }, ho = { scope: "title", begin: kn, relevance: 0 }, go = { begin: "\\.\\s*" + kn, relevance: 0 };
var wt = Object.freeze({ __proto__: null, APOS_STRING_MODE: no, BACKSLASH_ESCAPE: ct, BINARY_NUMBER_MODE: co, BINARY_NUMBER_RE: Qi, COMMENT: Pt, C_BLOCK_COMMENT_MODE: oo, C_LINE_COMMENT_MODE: ro, C_NUMBER_MODE: lo, C_NUMBER_RE: Xi, END_SAME_AS_BEGIN: (e) => Object.assign(e, { "on:begin": (t, n) => {
  n.data._beginMatch = t[1];
}, "on:end": (t, n) => {
  n.data._beginMatch !== t[1] && n.ignoreMatch();
} }), HASH_COMMENT_MODE: so, IDENT_RE: Gi, MATCH_NOTHING_RE: /\b\B/, METHOD_GUARD: go, NUMBER_MODE: ao, NUMBER_RE: Ji, PHRASAL_WORDS_MODE: { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, QUOTE_STRING_MODE: io, REGEXP_MODE: uo, RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", SHEBANG: (e = {}) => {
  const t = /^#![ ]*\//;
  return e.binary && (e.begin = Ie(t, /.*\b/, e.binary, /\b.*/)), $e({ scope: "meta", begin: t, end: /$/, relevance: 0, "on:begin": (n, r) => {
    n.index !== 0 && r.ignoreMatch();
  } }, e);
}, TITLE_MODE: po, UNDERSCORE_IDENT_RE: kn, UNDERSCORE_TITLE_MODE: ho });
function fo(e, t) {
  e.input[e.index - 1] === "." && t.ignoreMatch();
}
function mo(e, t) {
  e.className !== void 0 && (e.scope = e.className, delete e.className);
}
function bo(e, t) {
  t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = fo, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, e.relevance === void 0 && (e.relevance = 0));
}
function xo(e, t) {
  Array.isArray(e.illegal) && (e.illegal = xn(...e.illegal));
}
function ko(e, t) {
  if (e.match) {
    if (e.begin || e.end)
      throw new Error("begin & end are not supported with match");
    e.begin = e.match, delete e.match;
  }
}
function wo(e, t) {
  e.relevance === void 0 && (e.relevance = 1);
}
const yo = (e, t) => {
  if (!e.beforeMatch)
    return;
  if (e.starts)
    throw new Error("beforeMatch cannot be used with starts");
  const n = Object.assign({}, e);
  Object.keys(e).forEach((r) => {
    delete e[r];
  }), e.keywords = n.keywords, e.begin = Ie(n.beforeMatch, Wi(n.begin)), e.starts = { relevance: 0, contains: [Object.assign(n, { endsParent: !0 })] }, e.relevance = 0, delete n.beforeMatch;
}, vo = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"], _o = "keyword";
function Yi(e, t, n = _o) {
  const r = /* @__PURE__ */ Object.create(null);
  return typeof e == "string" ? i(n, e.split(" ")) : Array.isArray(e) ? i(n, e) : Object.keys(e).forEach((o) => {
    Object.assign(r, Yi(e[o], t, o));
  }), r;
  function i(o, s) {
    t && (s = s.map((a) => a.toLowerCase())), s.forEach((a) => {
      const c = a.split("|");
      r[c[0]] = [o, $o(c[0], c[1])];
    });
  }
}
function $o(e, t) {
  return t ? Number(t) : function(n) {
    return vo.includes(n.toLowerCase());
  }(e) ? 0 : 1;
}
const Kn = {}, Me = (e) => {
}, Re = (e, t) => {
  Kn[`${e}/${t}`] || (Kn[`${e}/${t}`] = !0);
}, yt = new Error();
function Gn(e, t, { key: n }) {
  let r = 0;
  const i = e[n], o = {}, s = {};
  for (let a = 1; a <= t.length; a++)
    s[a + r] = i[a], o[a + r] = !0, r += Ki(t[a - 1]);
  e[n] = s, e[n]._emit = o, e[n]._multi = !0;
}
function Ao(e) {
  (function(t) {
    t.scope && typeof t.scope == "object" && t.scope !== null && (t.beginScope = t.scope, delete t.scope);
  })(e), typeof e.beginScope == "string" && (e.beginScope = { _wrap: e.beginScope }), typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }), function(t) {
    if (Array.isArray(t.begin)) {
      if (t.skip || t.excludeBegin || t.returnBegin)
        throw Me("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), yt;
      if (typeof t.beginScope != "object" || t.beginScope === null)
        throw Me("beginScope must be object"), yt;
      Gn(t, t.begin, { key: "beginScope" }), t.begin = un(t.begin, { joinWith: "" });
    }
  }(e), function(t) {
    if (Array.isArray(t.end)) {
      if (t.skip || t.excludeEnd || t.returnEnd)
        throw Me("skip, excludeEnd, returnEnd not compatible with endScope: {}"), yt;
      if (typeof t.endScope != "object" || t.endScope === null)
        throw Me("endScope must be object"), yt;
      Gn(t, t.end, { key: "endScope" }), t.end = un(t.end, { joinWith: "" });
    }
  }(e);
}
function Eo(e) {
  function t(i, o) {
    return new RegExp(lt(i), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (o ? "g" : ""));
  }
  class n {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    addRule(o, s) {
      s.position = this.position++, this.matchIndexes[this.matchAt] = s, this.regexes.push([s, o]), this.matchAt += Ki(o) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const o = this.regexes.map((s) => s[1]);
      this.matcherRe = t(un(o, { joinWith: "|" }), !0), this.lastIndex = 0;
    }
    exec(o) {
      this.matcherRe.lastIndex = this.lastIndex;
      const s = this.matcherRe.exec(o);
      if (!s)
        return null;
      const a = s.findIndex((u, p) => p > 0 && u !== void 0), c = this.matchIndexes[a];
      return s.splice(0, a), Object.assign(s, c);
    }
  }
  class r {
    constructor() {
      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
    }
    getMatcher(o) {
      if (this.multiRegexes[o])
        return this.multiRegexes[o];
      const s = new n();
      return this.rules.slice(o).forEach(([a, c]) => s.addRule(a, c)), s.compile(), this.multiRegexes[o] = s, s;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    addRule(o, s) {
      this.rules.push([o, s]), s.type === "begin" && this.count++;
    }
    exec(o) {
      const s = this.getMatcher(this.regexIndex);
      s.lastIndex = this.lastIndex;
      let a = s.exec(o);
      if (this.resumingScanAtSamePosition() && !(a && a.index === this.lastIndex)) {
        const c = this.getMatcher(0);
        c.lastIndex = this.lastIndex + 1, a = c.exec(o);
      }
      return a && (this.regexIndex += a.position + 1, this.regexIndex === this.count && this.considerAll()), a;
    }
  }
  if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  return e.classNameAliases = $e(e.classNameAliases || {}), function i(o, s) {
    const a = o;
    if (o.isCompiled)
      return a;
    [mo, ko, Ao, yo].forEach((u) => u(o, s)), e.compilerExtensions.forEach((u) => u(o, s)), o.__beforeBegin = null, [bo, xo, wo].forEach((u) => u(o, s)), o.isCompiled = !0;
    let c = null;
    return typeof o.keywords == "object" && o.keywords.$pattern && (o.keywords = Object.assign({}, o.keywords), c = o.keywords.$pattern, delete o.keywords.$pattern), c = c || /\w+/, o.keywords && (o.keywords = Yi(o.keywords, e.case_insensitive)), a.keywordPatternRe = t(c, !0), s && (o.begin || (o.begin = /\B|\b/), a.beginRe = t(a.begin), o.end || o.endsWithParent || (o.end = /\B|\b/), o.end && (a.endRe = t(a.end)), a.terminatorEnd = lt(a.end) || "", o.endsWithParent && s.terminatorEnd && (a.terminatorEnd += (o.end ? "|" : "") + s.terminatorEnd)), o.illegal && (a.illegalRe = t(o.illegal)), o.contains || (o.contains = []), o.contains = [].concat(...o.contains.map((u) => function(p) {
      return p.variants && !p.cachedVariants && (p.cachedVariants = p.variants.map((d) => $e(p, { variants: null }, d))), p.cachedVariants ? p.cachedVariants : Vi(p) ? $e(p, { starts: p.starts ? $e(p.starts) : null }) : Object.isFrozen(p) ? $e(p) : p;
    }(u === "self" ? o : u))), o.contains.forEach((u) => {
      i(u, a);
    }), o.starts && i(o.starts, s), a.matcher = function(u) {
      const p = new r();
      return u.contains.forEach((d) => p.addRule(d.begin, { rule: d, type: "begin" })), u.terminatorEnd && p.addRule(u.terminatorEnd, { type: "end" }), u.illegal && p.addRule(u.illegal, { type: "illegal" }), p;
    }(a), a;
  }(e);
}
function Vi(e) {
  return !!e && (e.endsWithParent || Vi(e.starts));
}
class Co extends Error {
  constructor(t, n) {
    super(t), this.name = "HTMLInjectionError", this.html = n;
  }
}
const Xt = qi, Jn = $e, Xn = Symbol("nomatch"), er = (e) => {
  const t = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), r = [];
  let i = !0;
  const o = "Could not find the language '{}', did you forget to load/include a language module?", s = { disableAutodetect: !0, name: "Plain text", contains: [] };
  let a = { ignoreUnescapedHTML: !1, throwUnescapedHTML: !1, noHighlightRe: /^(no-?highlight)$/i, languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i, classPrefix: "hljs-", cssSelector: "pre code", languages: null, __emitter: Yr };
  function c(m) {
    return a.noHighlightRe.test(m);
  }
  function u(m, h, y) {
    let k = "", S = "";
    typeof h == "object" ? (k = m, y = h.ignoreIllegals, S = h.language) : (Re("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Re("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), S = m, k = h), y === void 0 && (y = !0);
    const N = { code: k, language: S };
    _("before:highlight", N);
    const v = N.result ? N.result : p(N.language, N.code, y);
    return v.code = N.code, _("after:highlight", v), v;
  }
  function p(m, h, y, k) {
    const S = /* @__PURE__ */ Object.create(null);
    function N() {
      if (!A.keywords)
        return void H.addText(z);
      let C = 0;
      A.keywordPatternRe.lastIndex = 0;
      let j = A.keywordPatternRe.exec(z), W = "";
      for (; j; ) {
        W += z.substring(C, j.index);
        const G = D.case_insensitive ? j[0].toLowerCase() : j[0], te = (Z = G, A.keywords[Z]);
        if (te) {
          const [we, Ht] = te;
          if (H.addText(W), W = "", S[G] = (S[G] || 0) + 1, S[G] <= 7 && (ve += Ht), we.startsWith("_"))
            W += j[0];
          else {
            const gt = D.classNameAliases[we] || we;
            I(j[0], gt);
          }
        } else
          W += j[0];
        C = A.keywordPatternRe.lastIndex, j = A.keywordPatternRe.exec(z);
      }
      var Z;
      W += z.substring(C), H.addText(W);
    }
    function v() {
      A.subLanguage != null ? function() {
        if (z === "")
          return;
        let C = null;
        if (typeof A.subLanguage == "string") {
          if (!t[A.subLanguage])
            return void H.addText(z);
          C = p(A.subLanguage, z, !0, re[A.subLanguage]), re[A.subLanguage] = C._top;
        } else
          C = d(z, A.subLanguage.length ? A.subLanguage : null);
        A.relevance > 0 && (ve += C.relevance), H.__addSublanguage(C._emitter, C.language);
      }() : N(), z = "";
    }
    function I(C, j) {
      C !== "" && (H.startScope(j), H.addText(C), H.endScope());
    }
    function $(C, j) {
      let W = 1;
      const Z = j.length - 1;
      for (; W <= Z; ) {
        if (!C._emit[W]) {
          W++;
          continue;
        }
        const G = D.classNameAliases[C[W]] || C[W], te = j[W];
        G ? I(te, G) : (z = te, N(), z = ""), W++;
      }
    }
    function O(C, j) {
      return C.scope && typeof C.scope == "string" && H.openNode(D.classNameAliases[C.scope] || C.scope), C.beginScope && (C.beginScope._wrap ? (I(z, D.classNameAliases[C.beginScope._wrap] || C.beginScope._wrap), z = "") : C.beginScope._multi && ($(C.beginScope, j), z = "")), A = Object.create(C, { parent: { value: A } }), A;
    }
    function P(C, j, W) {
      let Z = function(G, te) {
        const we = G && G.exec(te);
        return we && we.index === 0;
      }(C.endRe, W);
      if (Z) {
        if (C["on:end"]) {
          const G = new Fn(C);
          C["on:end"](j, G), G.isMatchIgnored && (Z = !1);
        }
        if (Z) {
          for (; C.endsParent && C.parent; )
            C = C.parent;
          return C;
        }
      }
      if (C.endsWithParent)
        return P(C.parent, j, W);
    }
    function K(C) {
      return A.matcher.regexIndex === 0 ? (z += C[0], 1) : (ht = !0, 0);
    }
    function X(C) {
      const j = C[0], W = h.substring(C.index), Z = P(A, C, W);
      if (!Z)
        return Xn;
      const G = A;
      A.endScope && A.endScope._wrap ? (v(), I(j, A.endScope._wrap)) : A.endScope && A.endScope._multi ? (v(), $(A.endScope, C)) : G.skip ? z += j : (G.returnEnd || G.excludeEnd || (z += j), v(), G.excludeEnd && (z = j));
      do
        A.scope && H.closeNode(), A.skip || A.subLanguage || (ve += A.relevance), A = A.parent;
      while (A !== Z.parent);
      return Z.starts && O(Z.starts, C), G.returnEnd ? 0 : j.length;
    }
    let J = {};
    function V(C, j) {
      const W = j && j[0];
      if (z += C, W == null)
        return v(), 0;
      if (J.type === "begin" && j.type === "end" && J.index === j.index && W === "") {
        if (z += h.slice(j.index, j.index + 1), !i) {
          const Z = new Error(`0 width match regex (${m})`);
          throw Z.languageName = m, Z.badRule = J.rule, Z;
        }
        return 1;
      }
      if (J = j, j.type === "begin")
        return function(Z) {
          const G = Z[0], te = Z.rule, we = new Fn(te), Ht = [te.__beforeBegin, te["on:begin"]];
          for (const gt of Ht)
            if (gt && (gt(Z, we), we.isMatchIgnored))
              return K(G);
          return te.skip ? z += G : (te.excludeBegin && (z += G), v(), te.returnBegin || te.excludeBegin || (z = G)), O(te, Z), te.returnBegin ? 0 : G.length;
        }(j);
      if (j.type === "illegal" && !y) {
        const Z = new Error('Illegal lexeme "' + W + '" for mode "' + (A.scope || "<unnamed>") + '"');
        throw Z.mode = A, Z;
      }
      if (j.type === "end") {
        const Z = X(j);
        if (Z !== Xn)
          return Z;
      }
      if (j.type === "illegal" && W === "")
        return 1;
      if (ee > 1e5 && ee > 3 * j.index)
        throw new Error("potential infinite loop, way more iterations than matches");
      return z += W, W.length;
    }
    const D = w(m);
    if (!D)
      throw Me(o.replace("{}", m)), new Error('Unknown language: "' + m + '"');
    const le = Eo(D);
    let E = "", A = k || le;
    const re = {}, H = new a.__emitter(a);
    (function() {
      const C = [];
      for (let j = A; j !== D; j = j.parent)
        j.scope && C.unshift(j.scope);
      C.forEach((j) => H.openNode(j));
    })();
    let z = "", ve = 0, Y = 0, ee = 0, ht = !1;
    try {
      if (D.__emitTokens)
        D.__emitTokens(h, H);
      else {
        for (A.matcher.considerAll(); ; ) {
          ee++, ht ? ht = !1 : A.matcher.considerAll(), A.matcher.lastIndex = Y;
          const C = A.matcher.exec(h);
          if (!C)
            break;
          const j = V(h.substring(Y, C.index), C);
          Y = C.index + j;
        }
        V(h.substring(Y));
      }
      return H.finalize(), E = H.toHTML(), { language: m, value: E, relevance: ve, illegal: !1, _emitter: H, _top: A };
    } catch (C) {
      if (C.message && C.message.includes("Illegal"))
        return { language: m, value: Xt(h), illegal: !0, relevance: 0, _illegalBy: { message: C.message, index: Y, context: h.slice(Y - 100, Y + 100), mode: C.mode, resultSoFar: E }, _emitter: H };
      if (i)
        return { language: m, value: Xt(h), illegal: !1, relevance: 0, errorRaised: C, _emitter: H, _top: A };
      throw C;
    }
  }
  function d(m, h) {
    h = h || a.languages || Object.keys(t);
    const y = function($) {
      const O = { value: Xt($), illegal: !1, relevance: 0, _top: s, _emitter: new a.__emitter(a) };
      return O._emitter.addText($), O;
    }(m), k = h.filter(w).filter(l).map(($) => p($, m, !1));
    k.unshift(y);
    const S = k.sort(($, O) => {
      if ($.relevance !== O.relevance)
        return O.relevance - $.relevance;
      if ($.language && O.language) {
        if (w($.language).supersetOf === O.language)
          return 1;
        if (w(O.language).supersetOf === $.language)
          return -1;
      }
      return 0;
    }), [N, v] = S, I = N;
    return I.secondBest = v, I;
  }
  function g(m) {
    let h = null;
    const y = function(N) {
      let v = N.className + " ";
      v += N.parentNode ? N.parentNode.className : "";
      const I = a.languageDetectRe.exec(v);
      if (I) {
        const $ = w(I[1]);
        return $ || o.replace("{}", I[1]), $ ? I[1] : "no-highlight";
      }
      return v.split(/\s+/).find(($) => c($) || w($));
    }(m);
    if (c(y) || (_("before:highlightElement", { el: m, language: y }), m.dataset.highlighted))
      return;
    if (m.children.length > 0 && (a.ignoreUnescapedHTML, a.throwUnescapedHTML))
      throw new Co("One of your code blocks includes unescaped HTML.", m.innerHTML);
    h = m;
    const k = h.textContent, S = y ? u(k, { language: y, ignoreIllegals: !0 }) : d(k);
    m.innerHTML = S.value, m.dataset.highlighted = "yes", function(N, v, I) {
      const $ = v && n[v] || I;
      N.classList.add("hljs"), N.classList.add(`language-${$}`);
    }(m, y, S.language), m.result = { language: S.language, re: S.relevance, relevance: S.relevance }, S.secondBest && (m.secondBest = { language: S.secondBest.language, relevance: S.secondBest.relevance }), _("after:highlightElement", { el: m, result: S, text: k });
  }
  let b = !1;
  function x() {
    if (document.readyState === "loading")
      return void (b = !0);
    document.querySelectorAll(a.cssSelector).forEach(g);
  }
  function w(m) {
    return m = (m || "").toLowerCase(), t[m] || t[n[m]];
  }
  function M(m, { languageName: h }) {
    typeof m == "string" && (m = [m]), m.forEach((y) => {
      n[y.toLowerCase()] = h;
    });
  }
  function l(m) {
    const h = w(m);
    return h && !h.disableAutodetect;
  }
  function _(m, h) {
    const y = m;
    r.forEach((k) => {
      k[y] && k[y](h);
    });
  }
  typeof window < "u" && window.addEventListener && window.addEventListener("DOMContentLoaded", function() {
    b && x();
  }, !1), Object.assign(e, { highlight: u, highlightAuto: d, highlightAll: x, highlightElement: g, highlightBlock: function(m) {
    return Re("10.7.0", "highlightBlock will be removed entirely in v12.0"), Re("10.7.0", "Please use highlightElement now."), g(m);
  }, configure: function(m) {
    a = Jn(a, m);
  }, initHighlighting: () => {
    x(), Re("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  }, initHighlightingOnLoad: function() {
    x(), Re("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }, registerLanguage: function(m, h) {
    let y = null;
    try {
      y = h(e);
    } catch (k) {
      if (Me("Language definition for '{}' could not be registered.".replace("{}", m)), !i)
        throw k;
      Me(k), y = s;
    }
    y.name || (y.name = m), t[m] = y, y.rawDefinition = h.bind(null, e), y.aliases && M(y.aliases, { languageName: m });
  }, unregisterLanguage: function(m) {
    delete t[m];
    for (const h of Object.keys(n))
      n[h] === m && delete n[h];
  }, listLanguages: function() {
    return Object.keys(t);
  }, getLanguage: w, registerAliases: M, autoDetection: l, inherit: Jn, addPlugin: function(m) {
    (function(h) {
      h["before:highlightBlock"] && !h["before:highlightElement"] && (h["before:highlightElement"] = (y) => {
        h["before:highlightBlock"](Object.assign({ block: y.el }, y));
      }), h["after:highlightBlock"] && !h["after:highlightElement"] && (h["after:highlightElement"] = (y) => {
        h["after:highlightBlock"](Object.assign({ block: y.el }, y));
      });
    })(m), r.push(m);
  }, removePlugin: function(m) {
    const h = r.indexOf(m);
    h !== -1 && r.splice(h, 1);
  } }), e.debugMode = () => {
    i = !1;
  }, e.safeMode = () => {
    i = !0;
  }, e.versionString = "11.9.0", e.regex = { concat: Ie, lookahead: Wi, either: xn, optional: eo, anyNumberOfTimes: Vr };
  for (const m in wt)
    typeof wt[m] == "object" && Fi(wt[m]);
  return Object.assign(e, wt), e;
}, Ze = er({});
Ze.newInstance = () => er({});
var No = Ze;
Ze.HighlightJS = Ze, Ze.default = Ze;
const de = Xr(No), Qn = "[A-Za-z$_][0-9A-Za-z$_]*", So = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"], To = ["true", "false", "null", "undefined", "NaN", "Infinity"], tr = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"], nr = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"], ir = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], Mo = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"], Io = [].concat(ir, tr, nr);
function rr(e) {
  const t = e.regex, n = Qn, r = "<>", i = "</>", o = { begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (P, K) => {
    const X = P[0].length + P.index, J = P.input[X];
    if (J === "<" || J === ",")
      return void K.ignoreMatch();
    let V;
    J === ">" && (((le, { after: E }) => {
      const A = "</" + le[0].slice(1);
      return le.input.indexOf(A, E) !== -1;
    })(P, { after: X }) || K.ignoreMatch());
    const D = P.input.substring(X);
    ((V = D.match(/^\s*=/)) || (V = D.match(/^\s+extends\s+/)) && V.index === 0) && K.ignoreMatch();
  } }, s = { $pattern: Qn, keyword: So, literal: To, built_in: Io, "variable.language": Mo }, a = "[0-9](_?[0-9])*", c = `\\.(${a})`, u = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", p = { className: "number", variants: [{ begin: `(\\b(${u})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b` }, { begin: `\\b(${u})\\b((${c})\\b|\\.)?|(${c})\\b` }, { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" }, { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" }, { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" }, { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" }, { begin: "\\b0[0-7]+n?\\b" }], relevance: 0 }, d = { className: "subst", begin: "\\$\\{", end: "\\}", keywords: s, contains: [] }, g = { begin: "html`", end: "", starts: { end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, d], subLanguage: "xml" } }, b = { begin: "css`", end: "", starts: { end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, d], subLanguage: "css" } }, x = { begin: "gql`", end: "", starts: { end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, d], subLanguage: "graphql" } }, w = { className: "string", begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE, d] }, M = { className: "comment", variants: [e.COMMENT(/\/\*\*(?!\/)/, "\\*/", { relevance: 0, contains: [{ begin: "(?=@[A-Za-z]+)", relevance: 0, contains: [{ className: "doctag", begin: "@[A-Za-z]+" }, { className: "type", begin: "\\{", end: "\\}", excludeEnd: !0, excludeBegin: !0, relevance: 0 }, { className: "variable", begin: n + "(?=\\s*(-)|$)", endsParent: !0, relevance: 0 }, { begin: /(?=[^\n])\s/, relevance: 0 }] }] }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE] }, l = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, g, b, x, w, { match: /\$\d+/ }, p];
  d.contains = l.concat({ begin: /\{/, end: /\}/, keywords: s, contains: ["self"].concat(l) });
  const _ = [].concat(M, d.contains), m = _.concat([{ begin: /\(/, end: /\)/, keywords: s, contains: ["self"].concat(_) }]), h = { className: "params", begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: s, contains: m }, y = { variants: [{ match: [/class/, /\s+/, n, /\s+/, /extends/, /\s+/, t.concat(n, "(", t.concat(/\./, n), ")*")], scope: { 1: "keyword", 3: "title.class", 5: "keyword", 7: "title.class.inherited" } }, { match: [/class/, /\s+/, n], scope: { 1: "keyword", 3: "title.class" } }] }, k = { relevance: 0, match: t.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/), className: "title.class", keywords: { _: [...tr, ...nr] } }, S = { variants: [{ match: [/function/, /\s+/, n, /(?=\s*\()/] }, { match: [/function/, /\s*(?=\()/] }], className: { 1: "keyword", 3: "title.function" }, label: "func.def", contains: [h], illegal: /%/ }, N = { match: t.concat(/\b/, function(P) {
    return t.concat("(?!", P.join("|"), ")");
  }([...ir, "super", "import"]), n, t.lookahead(/\(/)), className: "title.function", relevance: 0 }, v = { begin: t.concat(/\./, t.lookahead(t.concat(n, /(?![0-9A-Za-z$_(])/))), end: n, excludeBegin: !0, keywords: "prototype", className: "property", relevance: 0 }, I = { match: [/get|set/, /\s+/, n, /(?=\()/], className: { 1: "keyword", 3: "title.function" }, contains: [{ begin: /\(\)/ }, h] }, $ = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", O = { match: [/const|var|let/, /\s+/, n, /\s*/, /=\s*/, /(async\s*)?/, t.lookahead($)], keywords: "async", className: { 1: "keyword", 3: "title.function" }, contains: [h] };
  return { name: "JavaScript", aliases: ["js", "jsx", "mjs", "cjs"], keywords: s, exports: { PARAMS_CONTAINS: m, CLASS_REFERENCE: k }, illegal: /#(?![$_A-z])/, contains: [e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }), { label: "use_strict", className: "meta", relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, g, b, x, w, M, { match: /\$\d+/ }, p, k, { className: "attr", begin: n + t.lookahead(":"), relevance: 0 }, O, { begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*", keywords: "return throw case", relevance: 0, contains: [M, e.REGEXP_MODE, { className: "function", begin: $, returnBegin: !0, end: "\\s*=>", contains: [{ className: "params", variants: [{ begin: e.UNDERSCORE_IDENT_RE, relevance: 0 }, { className: null, begin: /\(\s*\)/, skip: !0 }, { begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: s, contains: m }] }] }, { begin: /,/, relevance: 0 }, { match: /\s+/, relevance: 0 }, { variants: [{ begin: r, end: i }, { match: /<[A-Za-z0-9\\._:-]+\s*\/>/ }, { begin: o.begin, "on:begin": o.isTrulyOpeningTag, end: o.end }], subLanguage: "xml", contains: [{ begin: o.begin, end: o.end, skip: !0, contains: ["self"] }] }] }, S, { beginKeywords: "while if switch catch for" }, { begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{", returnBegin: !0, label: "func.def", contains: [h, e.inherit(e.TITLE_MODE, { begin: n, className: "title.function" })] }, { match: /\.\.\./, relevance: 0 }, v, { match: "\\$" + n, relevance: 0 }, { match: [/\bconstructor(?=\s*\()/], className: { 1: "title.function" }, contains: [h] }, N, { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: "variable.constant" }, y, I, { match: /\$[(.]/ }] };
}
function or(e) {
  const t = e.regex, n = /[\p{XID_Start}_]\p{XID_Continue}*/u, r = ["and", "as", "assert", "async", "await", "break", "case", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "match", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"], i = { $pattern: /[A-Za-z]\w+|__\w+__/, keyword: r, built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"], literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"], type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"] }, o = { className: "meta", begin: /^(>>>|\.\.\.) / }, s = { className: "subst", begin: /\{/, end: /\}/, keywords: i, illegal: /#/ }, a = { begin: /\{\{/, relevance: 0 }, c = { className: "string", contains: [e.BACKSLASH_ESCAPE], variants: [{ begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/, end: /'''/, contains: [e.BACKSLASH_ESCAPE, o], relevance: 10 }, { begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/, end: /"""/, contains: [e.BACKSLASH_ESCAPE, o], relevance: 10 }, { begin: /([fF][rR]|[rR][fF]|[fF])'''/, end: /'''/, contains: [e.BACKSLASH_ESCAPE, o, a, s] }, { begin: /([fF][rR]|[rR][fF]|[fF])"""/, end: /"""/, contains: [e.BACKSLASH_ESCAPE, o, a, s] }, { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 }, { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 }, { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ }, { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ }, { begin: /([fF][rR]|[rR][fF]|[fF])'/, end: /'/, contains: [e.BACKSLASH_ESCAPE, a, s] }, { begin: /([fF][rR]|[rR][fF]|[fF])"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, a, s] }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE] }, u = "[0-9](_?[0-9])*", p = `(\\b(${u}))?\\.(${u})|\\b(${u})\\.`, d = `\\b|${r.join("|")}`, g = { className: "number", relevance: 0, variants: [{ begin: `(\\b(${u})|(${p}))[eE][+-]?(${u})[jJ]?(?=${d})` }, { begin: `(${p})[jJ]?` }, { begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})` }, { begin: `\\b0[bB](_?[01])+[lL]?(?=${d})` }, { begin: `\\b0[oO](_?[0-7])+[lL]?(?=${d})` }, { begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})` }, { begin: `\\b(${u})[jJ](?=${d})` }] }, b = { className: "comment", begin: t.lookahead(/# type:/), end: /$/, keywords: i, contains: [{ begin: /# type:/ }, { begin: /#/, end: /\b\B/, endsWithParent: !0 }] }, x = { className: "params", variants: [{ className: "", begin: /\(\s*\)/, skip: !0 }, { begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: i, contains: ["self", o, g, c, e.HASH_COMMENT_MODE] }] };
  return s.contains = [c, g, o], { name: "Python", aliases: ["py", "gyp", "ipython"], unicodeRegex: !0, keywords: i, illegal: /(<\/|\?)|=>/, contains: [o, g, { begin: /\bself\b/ }, { beginKeywords: "if", relevance: 0 }, c, b, e.HASH_COMMENT_MODE, { match: [/\bdef/, /\s+/, n], scope: { 1: "keyword", 3: "title.function" }, contains: [x] }, { variants: [{ match: [/\bclass/, /\s+/, n, /\s*/, /\(\s*/, n, /\s*\)/] }, { match: [/\bclass/, /\s+/, n] }], scope: { 1: "keyword", 3: "title.class", 6: "title.class.inherited" } }, { className: "meta", begin: /^[\t ]*@/, end: /(?=#)|$/, contains: [g, x, c] }] };
}
function jo(e) {
  let t, n, r, i, o, s, a;
  return { c() {
    t = U("div"), n = U("pre"), r = Bt(` 
        `), i = U("code"), R(i, "class", o = mt(e[0]) + " svelte-6xpzt7"), R(n, "class", "uie-w-full uie-h-full uie-overflow-scroll uie-text-left"), R(t, "role", "code"), R(t, "tabindex", "-1"), R(t, "class", s = mt(`uie-relative uie-prose ui-w-full ui-h-full ${e[4].class}`) + " svelte-6xpzt7"), R(t, "style", a = e[4].style);
  }, m(c, u) {
    pe(c, t, u), L(t, n), L(n, r), L(n, i), i.innerHTML = e[1], e[11](i), e[12](n);
  }, p(c, [u]) {
    2 & u && (i.innerHTML = c[1]), 1 & u && o !== (o = mt(c[0]) + " svelte-6xpzt7") && R(i, "class", o), 16 & u && s !== (s = mt(`uie-relative uie-prose ui-w-full ui-h-full ${c[4].class}`) + " svelte-6xpzt7") && R(t, "class", s), 16 & u && a !== (a = c[4].style) && R(t, "style", a);
  }, i: ue, o: ue, d(c) {
    c && ae(t), e[11](null), e[12](null);
  } };
}
function Yn(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Oo(e, t, n) {
  de.registerLanguage("javascript", rr), de.registerLanguage("python", or);
  let { lang: r = "javascript" } = t, { text: i = "" } = t, { url: o = "" } = t, { speed: s = 100 } = t, { step: a = 5 } = t, { isend: c = !0 } = t, u, p, d = "", g = 0, b = !1;
  const x = async () => {
    if (c)
      n(1, d = de.highlight(r, i).value);
    else
      for (; ; )
        if (b) {
          if (g += a, g > i.length)
            break;
          n(1, d = de.highlight(r, i.slice(0, g)).value += '<span class="cursor">|</span>'), await (Bi(), Ri), u.scrollIntoView({ behavior: "smooth", block: "end" }), await Yn(s);
        } else
          await Yn(1e3);
  };
  return gn(() => {
    o !== "" ? fetch(o).then((w) => w.text()).then((w) => {
      n(5, i = w), x();
    }).catch(() => {
      n(5, i = "get data fail"), x();
    }) : x();
  }), e.$$set = (w) => {
    n(4, t = it(it({}, t), Nt(w))), "lang" in w && n(0, r = w.lang), "text" in w && n(5, i = w.text), "url" in w && n(6, o = w.url), "speed" in w && n(7, s = w.speed), "step" in w && n(8, a = w.step), "isend" in w && n(9, c = w.isend);
  }, t = Nt(t), [r, d, u, p, t, i, o, s, a, c, function() {
    b = !b;
  }, function(w) {
    be[w ? "unshift" : "push"](() => {
      u = w, n(2, u);
    });
  }, function(w) {
    be[w ? "unshift" : "push"](() => {
      p = w, n(3, p);
    });
  }];
}
const Lo = {};
function Qt(e) {
  return e != "mathjax" && e != "graph" && e != "diagram" && !1;
}
function Ro() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
let je = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function Vn(e) {
  je = e;
}
const sr = /[&<>"']/, Bo = new RegExp(sr.source, "g"), ar = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, zo = new RegExp(ar.source, "g"), Po = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ei = (e) => Po[e];
function ce(e, t) {
  if (t) {
    if (sr.test(e))
      return e.replace(Bo, ei);
  } else if (ar.test(e))
    return e.replace(zo, ei);
  return e;
}
const Do = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, Ho = /(^|[^\[])\^/g;
function q(e, t) {
  let n = typeof e == "string" ? e : e.source;
  t = t || "";
  const r = { replace: (i, o) => {
    let s = typeof o == "string" ? o : o.source;
    return s = s.replace(Ho, "$1"), n = n.replace(i, s), r;
  }, getRegex: () => new RegExp(n, t) };
  return r;
}
function ti(e) {
  try {
    e = encodeURI(e).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return e;
}
const tt = { exec: () => null };
function ni(e, t) {
  const n = e.replace(/\|/g, (o, s, a) => {
    let c = !1, u = s;
    for (; --u >= 0 && a[u] === "\\"; )
      c = !c;
    return c ? "|" : " |";
  }), r = n.split(/ \|/);
  let i = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), t)
    if (r.length > t)
      r.splice(t);
    else
      for (; r.length < t; )
        r.push("");
  for (; i < r.length; i++)
    r[i] = r[i].trim().replace(/\\\|/g, "|");
  return r;
}
function Xe(e, t, n) {
  const r = e.length;
  if (r === 0)
    return "";
  let i = 0;
  for (; i < r; ) {
    const o = e.charAt(r - i - 1);
    if (o !== t || n) {
      if (o === t || !n)
        break;
      i++;
    } else
      i++;
  }
  return e.slice(0, r - i);
}
function ii(e, t, n, r) {
  const i = t.href, o = t.title ? ce(t.title) : null, s = e[1].replace(/\\([\[\]])/g, "$1");
  if (e[0].charAt(0) !== "!") {
    r.state.inLink = !0;
    const a = { type: "link", raw: n, href: i, title: o, text: s, tokens: r.inlineTokens(s) };
    return r.state.inLink = !1, a;
  }
  return { type: "image", raw: n, href: i, title: o, text: ce(s) };
}
class Mt {
  constructor(t) {
    B(this, "options");
    B(this, "rules");
    B(this, "lexer");
    this.options = t || je;
  }
  space(t) {
    const n = this.rules.block.newline.exec(t);
    if (n && n[0].length > 0)
      return { type: "space", raw: n[0] };
  }
  code(t) {
    const n = this.rules.block.code.exec(t);
    if (n) {
      const r = n[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: n[0], codeBlockStyle: "indented", text: this.options.pedantic ? r : Xe(r, `
`) };
    }
  }
  fences(t) {
    const n = this.rules.block.fences.exec(t);
    if (n) {
      const r = n[0], i = function(o, s) {
        const a = o.match(/^(\s+)(?:```)/);
        if (a === null)
          return s;
        const c = a[1];
        return s.split(`
`).map((u) => {
          const p = u.match(/^\s+/);
          if (p === null)
            return u;
          const [d] = p;
          return d.length >= c.length ? u.slice(c.length) : u;
        }).join(`
`);
      }(r, n[3] || "");
      return { type: "code", raw: r, lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : n[2], text: i };
    }
  }
  heading(t) {
    const n = this.rules.block.heading.exec(t);
    if (n) {
      let r = n[2].trim();
      if (/#$/.test(r)) {
        const i = Xe(r, "#");
        this.options.pedantic ? r = i.trim() : i && !/ $/.test(i) || (r = i.trim());
      }
      return { type: "heading", raw: n[0], depth: n[1].length, text: r, tokens: this.lexer.inline(r) };
    }
  }
  hr(t) {
    const n = this.rules.block.hr.exec(t);
    if (n)
      return { type: "hr", raw: Xe(n[0], `
`) };
  }
  blockquote(t) {
    const n = this.rules.block.blockquote.exec(t);
    if (n) {
      let r = Xe(n[0], `
`).split(`
`), i = "", o = "";
      const s = [];
      for (; r.length > 0; ) {
        let a = !1;
        const c = [];
        let u;
        for (u = 0; u < r.length; u++)
          if (/^ {0,3}>/.test(r[u]))
            c.push(r[u]), a = !0;
          else {
            if (a)
              break;
            c.push(r[u]);
          }
        r = r.slice(u);
        const p = c.join(`
`), d = p.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`).replace(/^ {0,3}>[ \t]?/gm, "");
        i = i ? `${i}
${p}` : p, o = o ? `${o}
${d}` : d;
        const g = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, s, !0), this.lexer.state.top = g, r.length === 0)
          break;
        const b = s[s.length - 1];
        if ((b == null ? void 0 : b.type) === "code")
          break;
        if ((b == null ? void 0 : b.type) === "blockquote") {
          const x = b, w = x.raw + `
` + r.join(`
`), M = this.blockquote(w);
          s[s.length - 1] = M, i = i.substring(0, i.length - x.raw.length) + M.raw, o = o.substring(0, o.length - x.text.length) + M.text;
          break;
        }
        if ((b == null ? void 0 : b.type) === "list") {
          const x = b, w = x.raw + `
` + r.join(`
`), M = this.list(w);
          s[s.length - 1] = M, i = i.substring(0, i.length - b.raw.length) + M.raw, o = o.substring(0, o.length - x.raw.length) + M.raw, r = w.substring(s[s.length - 1].raw.length).split(`
`);
        }
      }
      return { type: "blockquote", raw: i, tokens: s, text: o };
    }
  }
  list(t) {
    let n = this.rules.block.list.exec(t);
    if (n) {
      let r = n[1].trim();
      const i = r.length > 1, o = { type: "list", raw: "", ordered: i, start: i ? +r.slice(0, -1) : "", loose: !1, items: [] };
      r = i ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = i ? r : "[*+-]");
      const s = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let a = "", c = "", u = !1;
      for (; t; ) {
        let p = !1;
        if (!(n = s.exec(t)) || this.rules.block.hr.test(t))
          break;
        a = n[0], t = t.substring(a.length);
        let d = n[2].split(`
`, 1)[0].replace(/^\t+/, (l) => " ".repeat(3 * l.length)), g = t.split(`
`, 1)[0], b = 0;
        this.options.pedantic ? (b = 2, c = d.trimStart()) : (b = n[2].search(/[^ ]/), b = b > 4 ? 1 : b, c = d.slice(b), b += n[1].length);
        let x = !1;
        if (!d && /^ *$/.test(g) && (a += g + `
`, t = t.substring(g.length + 1), p = !0), !p) {
          const l = new RegExp(`^ {0,${Math.min(3, b - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), _ = new RegExp(`^ {0,${Math.min(3, b - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), m = new RegExp(`^ {0,${Math.min(3, b - 1)}}(?:\`\`\`|~~~)`), h = new RegExp(`^ {0,${Math.min(3, b - 1)}}#`);
          for (; t; ) {
            const y = t.split(`
`, 1)[0];
            if (g = y, this.options.pedantic && (g = g.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), m.test(g) || h.test(g) || l.test(g) || _.test(t))
              break;
            if (g.search(/[^ ]/) >= b || !g.trim())
              c += `
` + g.slice(b);
            else {
              if (x || d.search(/[^ ]/) >= 4 || m.test(d) || h.test(d) || _.test(d))
                break;
              c += `
` + g;
            }
            x || g.trim() || (x = !0), a += y + `
`, t = t.substring(y.length + 1), d = g.slice(b);
          }
        }
        o.loose || (u ? o.loose = !0 : /\n *\n *$/.test(a) && (u = !0));
        let w, M = null;
        this.options.gfm && (M = /^\[[ xX]\] /.exec(c), M && (w = M[0] !== "[ ] ", c = c.replace(/^\[[ xX]\] +/, ""))), o.items.push({ type: "list_item", raw: a, task: !!M, checked: w, loose: !1, text: c, tokens: [] }), o.raw += a;
      }
      o.items[o.items.length - 1].raw = a.trimEnd(), o.items[o.items.length - 1].text = c.trimEnd(), o.raw = o.raw.trimEnd();
      for (let p = 0; p < o.items.length; p++)
        if (this.lexer.state.top = !1, o.items[p].tokens = this.lexer.blockTokens(o.items[p].text, []), !o.loose) {
          const d = o.items[p].tokens.filter((b) => b.type === "space"), g = d.length > 0 && d.some((b) => /\n.*\n/.test(b.raw));
          o.loose = g;
        }
      if (o.loose)
        for (let p = 0; p < o.items.length; p++)
          o.items[p].loose = !0;
      return o;
    }
  }
  html(t) {
    const n = this.rules.block.html.exec(t);
    if (n)
      return { type: "html", block: !0, raw: n[0], pre: n[1] === "pre" || n[1] === "script" || n[1] === "style", text: n[0] };
  }
  def(t) {
    const n = this.rules.block.def.exec(t);
    if (n) {
      const r = n[1].toLowerCase().replace(/\s+/g, " "), i = n[2] ? n[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : n[3];
      return { type: "def", tag: r, raw: n[0], href: i, title: o };
    }
  }
  table(t) {
    const n = this.rules.block.table.exec(t);
    if (!n || !/[:|]/.test(n[2]))
      return;
    const r = ni(n[1]), i = n[2].replace(/^\||\| *$/g, "").split("|"), o = n[3] && n[3].trim() ? n[3].replace(/\n[ \t]*$/, "").split(`
`) : [], s = { type: "table", raw: n[0], header: [], align: [], rows: [] };
    if (r.length === i.length) {
      for (const a of i)
        /^ *-+: *$/.test(a) ? s.align.push("right") : /^ *:-+: *$/.test(a) ? s.align.push("center") : /^ *:-+ *$/.test(a) ? s.align.push("left") : s.align.push(null);
      for (let a = 0; a < r.length; a++)
        s.header.push({ text: r[a], tokens: this.lexer.inline(r[a]), header: !0, align: s.align[a] });
      for (const a of o)
        s.rows.push(ni(a, s.header.length).map((c, u) => ({ text: c, tokens: this.lexer.inline(c), header: !1, align: s.align[u] })));
      return s;
    }
  }
  lheading(t) {
    const n = this.rules.block.lheading.exec(t);
    if (n)
      return { type: "heading", raw: n[0], depth: n[2].charAt(0) === "=" ? 1 : 2, text: n[1], tokens: this.lexer.inline(n[1]) };
  }
  paragraph(t) {
    const n = this.rules.block.paragraph.exec(t);
    if (n) {
      const r = n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1];
      return { type: "paragraph", raw: n[0], text: r, tokens: this.lexer.inline(r) };
    }
  }
  text(t) {
    const n = this.rules.block.text.exec(t);
    if (n)
      return { type: "text", raw: n[0], text: n[0], tokens: this.lexer.inline(n[0]) };
  }
  escape(t) {
    const n = this.rules.inline.escape.exec(t);
    if (n)
      return { type: "escape", raw: n[0], text: ce(n[1]) };
  }
  tag(t) {
    const n = this.rules.inline.tag.exec(t);
    if (n)
      return !this.lexer.state.inLink && /^<a /i.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(n[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: n[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: n[0] };
  }
  link(t) {
    const n = this.rules.inline.link.exec(t);
    if (n) {
      const r = n[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r))
          return;
        const s = Xe(r.slice(0, -1), "\\");
        if ((r.length - s.length) % 2 == 0)
          return;
      } else {
        const s = function(a, c) {
          if (a.indexOf(c[1]) === -1)
            return -1;
          let u = 0;
          for (let p = 0; p < a.length; p++)
            if (a[p] === "\\")
              p++;
            else if (a[p] === c[0])
              u++;
            else if (a[p] === c[1] && (u--, u < 0))
              return p;
          return -1;
        }(n[2], "()");
        if (s > -1) {
          const a = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + s;
          n[2] = n[2].substring(0, s), n[0] = n[0].substring(0, a).trim(), n[3] = "";
        }
      }
      let i = n[2], o = "";
      if (this.options.pedantic) {
        const s = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
        s && (i = s[1], o = s[3]);
      } else
        o = n[3] ? n[3].slice(1, -1) : "";
      return i = i.trim(), /^</.test(i) && (i = this.options.pedantic && !/>$/.test(r) ? i.slice(1) : i.slice(1, -1)), ii(n, { href: i && i.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, n[0], this.lexer);
    }
  }
  reflink(t, n) {
    let r;
    if ((r = this.rules.inline.reflink.exec(t)) || (r = this.rules.inline.nolink.exec(t))) {
      const i = n[(r[2] || r[1]).replace(/\s+/g, " ").toLowerCase()];
      if (!i) {
        const o = r[0].charAt(0);
        return { type: "text", raw: o, text: o };
      }
      return ii(r, i, r[0], this.lexer);
    }
  }
  emStrong(t, n, r = "") {
    let i = this.rules.inline.emStrongLDelim.exec(t);
    if (i && !(i[3] && r.match(/[\p{L}\p{N}]/u)) && (!(i[1] || i[2]) || !r || this.rules.inline.punctuation.exec(r))) {
      const o = [...i[0]].length - 1;
      let s, a, c = o, u = 0;
      const p = i[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (p.lastIndex = 0, n = n.slice(-1 * t.length + o); (i = p.exec(n)) != null; ) {
        if (s = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !s)
          continue;
        if (a = [...s].length, i[3] || i[4]) {
          c += a;
          continue;
        }
        if ((i[5] || i[6]) && o % 3 && !((o + a) % 3)) {
          u += a;
          continue;
        }
        if (c -= a, c > 0)
          continue;
        a = Math.min(a, a + c + u);
        const d = [...i[0]][0].length, g = t.slice(0, o + i.index + d + a);
        if (Math.min(o, a) % 2) {
          const x = g.slice(1, -1);
          return { type: "em", raw: g, text: x, tokens: this.lexer.inlineTokens(x) };
        }
        const b = g.slice(2, -2);
        return { type: "strong", raw: g, text: b, tokens: this.lexer.inlineTokens(b) };
      }
    }
  }
  codespan(t) {
    const n = this.rules.inline.code.exec(t);
    if (n) {
      let r = n[2].replace(/\n/g, " ");
      const i = /[^ ]/.test(r), o = /^ /.test(r) && / $/.test(r);
      return i && o && (r = r.substring(1, r.length - 1)), r = ce(r, !0), { type: "codespan", raw: n[0], text: r };
    }
  }
  br(t) {
    const n = this.rules.inline.br.exec(t);
    if (n)
      return { type: "br", raw: n[0] };
  }
  del(t) {
    const n = this.rules.inline.del.exec(t);
    if (n)
      return { type: "del", raw: n[0], text: n[2], tokens: this.lexer.inlineTokens(n[2]) };
  }
  autolink(t) {
    const n = this.rules.inline.autolink.exec(t);
    if (n) {
      let r, i;
      return n[2] === "@" ? (r = ce(n[1]), i = "mailto:" + r) : (r = ce(n[1]), i = r), { type: "link", raw: n[0], text: r, href: i, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  url(t) {
    var r;
    let n;
    if (n = this.rules.inline.url.exec(t)) {
      let i, o;
      if (n[2] === "@")
        i = ce(n[0]), o = "mailto:" + i;
      else {
        let s;
        do
          s = n[0], n[0] = ((r = this.rules.inline._backpedal.exec(n[0])) == null ? void 0 : r[0]) ?? "";
        while (s !== n[0]);
        i = ce(n[0]), o = n[1] === "www." ? "http://" + n[0] : n[0];
      }
      return { type: "link", raw: n[0], text: i, href: o, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  inlineText(t) {
    const n = this.rules.inline.text.exec(t);
    if (n) {
      let r;
      return r = this.lexer.state.inRawBlock ? n[0] : ce(n[0]), { type: "text", raw: n[0], text: r };
    }
  }
}
const pt = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, lr = /(?:[*+-]|\d{1,9}[.)])/, cr = q(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, lr).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), wn = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, yn = /(?!\s*\])(?:\\.|[^\[\]\\])+/, Uo = q(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", yn).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Zo = q(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, lr).getRegex(), Dt = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", vn = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Fo = q("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", vn).replace("tag", Dt).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ri = q(wn).replace("hr", pt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Dt).getRegex(), _n = { blockquote: q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ri).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: Uo, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: pt, html: Fo, lheading: cr, list: Zo, newline: /^(?: *(?:\n|$))+/, paragraph: ri, table: tt, text: /^[^\n]+/ }, oi = q("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", pt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Dt).getRegex(), qo = { ..._n, table: oi, paragraph: q(wn).replace("hr", pt).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", oi).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Dt).getRegex() }, Wo = { ..._n, html: q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", vn).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: tt, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: q(wn).replace("hr", pt).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", cr).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, ur = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, pr = /^( {2,}|\\)\n(?!\s*$)/, dt = "\\p{P}\\p{S}", Ko = q(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, dt).getRegex(), Go = q(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, dt).getRegex(), Jo = q("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, dt).getRegex(), Xo = q("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, dt).getRegex(), Qo = q(/\\([punct])/, "gu").replace(/punct/g, dt).getRegex(), Yo = q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Vo = q(vn).replace("(?:-->|$)", "-->").getRegex(), es = q("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Vo).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), It = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, ts = q(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", It).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), si = q(/^!?\[(label)\]\[(ref)\]/).replace("label", It).replace("ref", yn).getRegex(), ai = q(/^!?\[(ref)\](?:\[\])?/).replace("ref", yn).getRegex(), $n = { _backpedal: tt, anyPunctuation: Qo, autolink: Yo, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: pr, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: tt, emStrongLDelim: Go, emStrongRDelimAst: Jo, emStrongRDelimUnd: Xo, escape: ur, link: ts, nolink: ai, punctuation: Ko, reflink: si, reflinkSearch: q("reflink|nolink(?!\\()", "g").replace("reflink", si).replace("nolink", ai).getRegex(), tag: es, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: tt }, ns = { ...$n, link: q(/^!?\[(label)\]\((.*?)\)/).replace("label", It).getRegex(), reflink: q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", It).getRegex() }, pn = { ...$n, escape: q(ur).replace("])", "~|])").getRegex(), url: q(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, is = { ...pn, br: q(pr).replace("{2,}", "*").getRegex(), text: q(pn.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, vt = { normal: _n, gfm: qo, pedantic: Wo }, Qe = { normal: $n, gfm: pn, breaks: is, pedantic: ns };
class xe {
  constructor(t) {
    B(this, "tokens");
    B(this, "options");
    B(this, "state");
    B(this, "tokenizer");
    B(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || je, this.options.tokenizer = this.options.tokenizer || new Mt(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const n = { block: vt.normal, inline: Qe.normal };
    this.options.pedantic ? (n.block = vt.pedantic, n.inline = Qe.pedantic) : this.options.gfm && (n.block = vt.gfm, this.options.breaks ? n.inline = Qe.breaks : n.inline = Qe.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: vt, inline: Qe };
  }
  static lex(t, n) {
    return new xe(n).lex(t);
  }
  static lexInline(t, n) {
    return new xe(n).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(/\r\n|\r/g, `
`), this.blockTokens(t, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const r = this.inlineQueue[n];
      this.inlineTokens(r.src, r.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, n = [], r = !1) {
    let i, o, s;
    for (t = this.options.pedantic ? t.replace(/\t/g, "    ").replace(/^ +$/gm, "") : t.replace(/^( *)(\t+)/gm, (a, c, u) => c + "    ".repeat(u.length)); t; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => !!(i = a.call({ lexer: this }, t, n)) && (t = t.substring(i.raw.length), n.push(i), !0))))
        if (i = this.tokenizer.space(t))
          t = t.substring(i.raw.length), i.raw.length === 1 && n.length > 0 ? n[n.length - 1].raw += `
` : n.push(i);
        else if (i = this.tokenizer.code(t))
          t = t.substring(i.raw.length), o = n[n.length - 1], !o || o.type !== "paragraph" && o.type !== "text" ? n.push(i) : (o.raw += `
` + i.raw, o.text += `
` + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = o.text);
        else if (i = this.tokenizer.fences(t))
          t = t.substring(i.raw.length), n.push(i);
        else if (i = this.tokenizer.heading(t))
          t = t.substring(i.raw.length), n.push(i);
        else if (i = this.tokenizer.hr(t))
          t = t.substring(i.raw.length), n.push(i);
        else if (i = this.tokenizer.blockquote(t))
          t = t.substring(i.raw.length), n.push(i);
        else if (i = this.tokenizer.list(t))
          t = t.substring(i.raw.length), n.push(i);
        else if (i = this.tokenizer.html(t))
          t = t.substring(i.raw.length), n.push(i);
        else if (i = this.tokenizer.def(t))
          t = t.substring(i.raw.length), o = n[n.length - 1], !o || o.type !== "paragraph" && o.type !== "text" ? this.tokens.links[i.tag] || (this.tokens.links[i.tag] = { href: i.href, title: i.title }) : (o.raw += `
` + i.raw, o.text += `
` + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = o.text);
        else if (i = this.tokenizer.table(t))
          t = t.substring(i.raw.length), n.push(i);
        else if (i = this.tokenizer.lheading(t))
          t = t.substring(i.raw.length), n.push(i);
        else {
          if (s = t, this.options.extensions && this.options.extensions.startBlock) {
            let a = 1 / 0;
            const c = t.slice(1);
            let u;
            this.options.extensions.startBlock.forEach((p) => {
              u = p.call({ lexer: this }, c), typeof u == "number" && u >= 0 && (a = Math.min(a, u));
            }), a < 1 / 0 && a >= 0 && (s = t.substring(0, a + 1));
          }
          if (this.state.top && (i = this.tokenizer.paragraph(s)))
            o = n[n.length - 1], r && (o == null ? void 0 : o.type) === "paragraph" ? (o.raw += `
` + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = o.text) : n.push(i), r = s.length !== t.length, t = t.substring(i.raw.length);
          else if (i = this.tokenizer.text(t))
            t = t.substring(i.raw.length), o = n[n.length - 1], o && o.type === "text" ? (o.raw += `
` + i.raw, o.text += `
` + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = o.text) : n.push(i);
          else if (t) {
            const a = "Infinite loop on byte: " + t.charCodeAt(0);
            if (this.options.silent)
              break;
            throw new Error(a);
          }
        }
    return this.state.top = !0, n;
  }
  inline(t, n = []) {
    return this.inlineQueue.push({ src: t, tokens: n }), n;
  }
  inlineTokens(t, n = []) {
    let r, i, o, s, a, c, u = t;
    if (this.tokens.links) {
      const p = Object.keys(this.tokens.links);
      if (p.length > 0)
        for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(u)) != null; )
          p.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (u = u.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(u)) != null; )
      u = u.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(u)) != null; )
      u = u.slice(0, s.index) + "++" + u.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; t; )
      if (a || (c = ""), a = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((p) => !!(r = p.call({ lexer: this }, t, n)) && (t = t.substring(r.raw.length), n.push(r), !0))))
        if (r = this.tokenizer.escape(t))
          t = t.substring(r.raw.length), n.push(r);
        else if (r = this.tokenizer.tag(t))
          t = t.substring(r.raw.length), i = n[n.length - 1], i && r.type === "text" && i.type === "text" ? (i.raw += r.raw, i.text += r.text) : n.push(r);
        else if (r = this.tokenizer.link(t))
          t = t.substring(r.raw.length), n.push(r);
        else if (r = this.tokenizer.reflink(t, this.tokens.links))
          t = t.substring(r.raw.length), i = n[n.length - 1], i && r.type === "text" && i.type === "text" ? (i.raw += r.raw, i.text += r.text) : n.push(r);
        else if (r = this.tokenizer.emStrong(t, u, c))
          t = t.substring(r.raw.length), n.push(r);
        else if (r = this.tokenizer.codespan(t))
          t = t.substring(r.raw.length), n.push(r);
        else if (r = this.tokenizer.br(t))
          t = t.substring(r.raw.length), n.push(r);
        else if (r = this.tokenizer.del(t))
          t = t.substring(r.raw.length), n.push(r);
        else if (r = this.tokenizer.autolink(t))
          t = t.substring(r.raw.length), n.push(r);
        else if (this.state.inLink || !(r = this.tokenizer.url(t))) {
          if (o = t, this.options.extensions && this.options.extensions.startInline) {
            let p = 1 / 0;
            const d = t.slice(1);
            let g;
            this.options.extensions.startInline.forEach((b) => {
              g = b.call({ lexer: this }, d), typeof g == "number" && g >= 0 && (p = Math.min(p, g));
            }), p < 1 / 0 && p >= 0 && (o = t.substring(0, p + 1));
          }
          if (r = this.tokenizer.inlineText(o))
            t = t.substring(r.raw.length), r.raw.slice(-1) !== "_" && (c = r.raw.slice(-1)), a = !0, i = n[n.length - 1], i && i.type === "text" ? (i.raw += r.raw, i.text += r.text) : n.push(r);
          else if (t) {
            const p = "Infinite loop on byte: " + t.charCodeAt(0);
            if (this.options.silent)
              break;
            throw new Error(p);
          }
        } else
          t = t.substring(r.raw.length), n.push(r);
    return n;
  }
}
class jt {
  constructor(t) {
    B(this, "options");
    B(this, "parser");
    this.options = t || je;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: n, escaped: r }) {
    var s;
    const i = (s = (n || "").match(/^\S*/)) == null ? void 0 : s[0], o = t.replace(/\n$/, "") + `
`;
    return i ? '<pre><code class="language-' + ce(i) + '">' + (r ? o : ce(o, !0)) + `</code></pre>
` : "<pre><code>" + (r ? o : ce(o, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  heading({ tokens: t, depth: n }) {
    return `<h${n}>${this.parser.parseInline(t)}</h${n}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    const n = t.ordered, r = t.start;
    let i = "";
    for (let s = 0; s < t.items.length; s++) {
      const a = t.items[s];
      i += this.listitem(a);
    }
    const o = n ? "ol" : "ul";
    return "<" + o + (n && r !== 1 ? ' start="' + r + '"' : "") + `>
` + i + "</" + o + `>
`;
  }
  listitem(t) {
    let n = "";
    if (t.task) {
      const r = this.checkbox({ checked: !!t.checked });
      t.loose ? t.tokens.length > 0 && t.tokens[0].type === "paragraph" ? (t.tokens[0].text = r + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = r + " " + t.tokens[0].tokens[0].text)) : t.tokens.unshift({ type: "text", raw: r + " ", text: r + " " }) : n += r + " ";
    }
    return n += this.parser.parse(t.tokens, !!t.loose), `<li>${n}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let n = "", r = "";
    for (let o = 0; o < t.header.length; o++)
      r += this.tablecell(t.header[o]);
    n += this.tablerow({ text: r });
    let i = "";
    for (let o = 0; o < t.rows.length; o++) {
      const s = t.rows[o];
      r = "";
      for (let a = 0; a < s.length; a++)
        r += this.tablecell(s[a]);
      i += this.tablerow({ text: r });
    }
    return i && (i = `<tbody>${i}</tbody>`), `<table>
<thead>
` + n + `</thead>
` + i + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    const n = this.parser.parseInline(t.tokens), r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + n + `</${r}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${t}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: n, tokens: r }) {
    const i = this.parser.parseInline(r), o = ti(t);
    if (o === null)
      return i;
    let s = '<a href="' + (t = o) + '"';
    return n && (s += ' title="' + n + '"'), s += ">" + i + "</a>", s;
  }
  image({ href: t, title: n, text: r }) {
    const i = ti(t);
    if (i === null)
      return r;
    let o = `<img src="${t = i}" alt="${r}"`;
    return n && (o += ` title="${n}"`), o += ">", o;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : t.text;
  }
}
class An {
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}
class ke {
  constructor(t) {
    B(this, "options");
    B(this, "renderer");
    B(this, "textRenderer");
    this.options = t || je, this.options.renderer = this.options.renderer || new jt(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new An();
  }
  static parse(t, n) {
    return new ke(n).parse(t);
  }
  static parseInline(t, n) {
    return new ke(n).parseInline(t);
  }
  parse(t, n = !0) {
    let r = "";
    for (let i = 0; i < t.length; i++) {
      const o = t[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const a = o, c = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (c !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          r += c || "";
          continue;
        }
      }
      const s = o;
      switch (s.type) {
        case "space":
          r += this.renderer.space(s);
          continue;
        case "hr":
          r += this.renderer.hr(s);
          continue;
        case "heading":
          r += this.renderer.heading(s);
          continue;
        case "code":
          r += this.renderer.code(s);
          continue;
        case "table":
          r += this.renderer.table(s);
          continue;
        case "blockquote":
          r += this.renderer.blockquote(s);
          continue;
        case "list":
          r += this.renderer.list(s);
          continue;
        case "html":
          r += this.renderer.html(s);
          continue;
        case "paragraph":
          r += this.renderer.paragraph(s);
          continue;
        case "text": {
          let a = s, c = this.renderer.text(a);
          for (; i + 1 < t.length && t[i + 1].type === "text"; )
            a = t[++i], c += `
` + this.renderer.text(a);
          r += n ? this.renderer.paragraph({ type: "paragraph", raw: c, text: c, tokens: [{ type: "text", raw: c, text: c }] }) : c;
          continue;
        }
        default: {
          const a = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent)
            return "";
          throw new Error(a);
        }
      }
    }
    return r;
  }
  parseInline(t, n) {
    n = n || this.renderer;
    let r = "";
    for (let i = 0; i < t.length; i++) {
      const o = t[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[o.type]) {
        const a = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          r += a || "";
          continue;
        }
      }
      const s = o;
      switch (s.type) {
        case "escape":
        case "text":
          r += n.text(s);
          break;
        case "html":
          r += n.html(s);
          break;
        case "link":
          r += n.link(s);
          break;
        case "image":
          r += n.image(s);
          break;
        case "strong":
          r += n.strong(s);
          break;
        case "em":
          r += n.em(s);
          break;
        case "codespan":
          r += n.codespan(s);
          break;
        case "br":
          r += n.br(s);
          break;
        case "del":
          r += n.del(s);
          break;
        default: {
          const a = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent)
            return "";
          throw new Error(a);
        }
      }
    }
    return r;
  }
}
class nt {
  constructor(t) {
    B(this, "options");
    this.options = t || je;
  }
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
}
B(nt, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
var Lt, hr, ut, dn, Rt, gr;
class dr {
  constructor(...t) {
    ft(this, Lt);
    ft(this, ut);
    ft(this, Rt);
    B(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null });
    B(this, "options", this.setOptions);
    B(this, "parse", Ke(this, ut, dn).call(this, xe.lex, ke.parse));
    B(this, "parseInline", Ke(this, ut, dn).call(this, xe.lexInline, ke.parseInline));
    B(this, "Parser", ke);
    B(this, "Renderer", jt);
    B(this, "TextRenderer", An);
    B(this, "Lexer", xe);
    B(this, "Tokenizer", Mt);
    B(this, "Hooks", nt);
    this.use(...t);
  }
  walkTokens(t, n) {
    var i, o;
    let r = [];
    for (const s of t)
      switch (r = r.concat(n.call(this, s)), s.type) {
        case "table": {
          const a = s;
          for (const c of a.header)
            r = r.concat(this.walkTokens(c.tokens, n));
          for (const c of a.rows)
            for (const u of c)
              r = r.concat(this.walkTokens(u.tokens, n));
          break;
        }
        case "list": {
          const a = s;
          r = r.concat(this.walkTokens(a.items, n));
          break;
        }
        default: {
          const a = s;
          (o = (i = this.defaults.extensions) == null ? void 0 : i.childTokens) != null && o[a.type] ? this.defaults.extensions.childTokens[a.type].forEach((c) => {
            const u = a[c].flat(1 / 0);
            r = r.concat(this.walkTokens(u, n));
          }) : a.tokens && (r = r.concat(this.walkTokens(a.tokens, n)));
        }
      }
    return r;
  }
  use(...t) {
    const n = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((r) => {
      const i = { ...r };
      if (i.async = this.defaults.async || i.async || !1, r.extensions && (r.extensions.forEach((o) => {
        if (!o.name)
          throw new Error("extension name required");
        if ("renderer" in o) {
          const s = n.renderers[o.name];
          n.renderers[o.name] = s ? function(...a) {
            let c = o.renderer.apply(this, a);
            return c === !1 && (c = s.apply(this, a)), c;
          } : o.renderer;
        }
        if ("tokenizer" in o) {
          if (!o.level || o.level !== "block" && o.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const s = n[o.level];
          s ? s.unshift(o.tokenizer) : n[o.level] = [o.tokenizer], o.start && (o.level === "block" ? n.startBlock ? n.startBlock.push(o.start) : n.startBlock = [o.start] : o.level === "inline" && (n.startInline ? n.startInline.push(o.start) : n.startInline = [o.start]));
        }
        "childTokens" in o && o.childTokens && (n.childTokens[o.name] = o.childTokens);
      }), i.extensions = n), r.renderer) {
        const o = this.defaults.renderer || new jt(this.defaults);
        for (const s in r.renderer) {
          if (!(s in o))
            throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s))
            continue;
          const a = s;
          let c = r.renderer[a];
          const u = o[a];
          o[a] = (...p) => {
            r.useNewRenderer || (c = Ke(this, Lt, hr).call(this, c, a, o));
            let d = c.apply(o, p);
            return d === !1 && (d = u.apply(o, p)), d || "";
          };
        }
        i.renderer = o;
      }
      if (r.tokenizer) {
        const o = this.defaults.tokenizer || new Mt(this.defaults);
        for (const s in r.tokenizer) {
          if (!(s in o))
            throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s))
            continue;
          const a = s, c = r.tokenizer[a], u = o[a];
          o[a] = (...p) => {
            let d = c.apply(o, p);
            return d === !1 && (d = u.apply(o, p)), d;
          };
        }
        i.tokenizer = o;
      }
      if (r.hooks) {
        const o = this.defaults.hooks || new nt();
        for (const s in r.hooks) {
          if (!(s in o))
            throw new Error(`hook '${s}' does not exist`);
          if (s === "options")
            continue;
          const a = s, c = r.hooks[a], u = o[a];
          nt.passThroughHooks.has(s) ? o[a] = (p) => {
            if (this.defaults.async)
              return Promise.resolve(c.call(o, p)).then((g) => u.call(o, g));
            const d = c.call(o, p);
            return u.call(o, d);
          } : o[a] = (...p) => {
            let d = c.apply(o, p);
            return d === !1 && (d = u.apply(o, p)), d;
          };
        }
        i.hooks = o;
      }
      if (r.walkTokens) {
        const o = this.defaults.walkTokens, s = r.walkTokens;
        i.walkTokens = function(a) {
          let c = [];
          return c.push(s.call(this, a)), o && (c = c.concat(o.call(this, a))), c;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, n) {
    return xe.lex(t, n ?? this.defaults);
  }
  parser(t, n) {
    return ke.parse(t, n ?? this.defaults);
  }
}
Lt = new WeakSet(), hr = function(t, n, r) {
  switch (n) {
    case "heading":
      return function(i) {
        return i.type && i.type === n ? t(r.parser.parseInline(i.tokens), i.depth, function(o) {
          return o.replace(Do, (s, a) => (a = a.toLowerCase()) === "colon" ? ":" : a.charAt(0) === "#" ? a.charAt(1) === "x" ? String.fromCharCode(parseInt(a.substring(2), 16)) : String.fromCharCode(+a.substring(1)) : "");
        }(r.parser.parseInline(i.tokens, r.parser.textRenderer))) : t.apply(this, arguments);
      };
    case "code":
      return function(i) {
        return i.type && i.type === n ? t(i.text, i.lang, !!i.escaped) : t.apply(this, arguments);
      };
    case "table":
      return function(i) {
        if (!i.type || i.type !== n)
          return t.apply(this, arguments);
        let o = "", s = "";
        for (let c = 0; c < i.header.length; c++)
          s += this.tablecell({ text: i.header[c].text, tokens: i.header[c].tokens, header: !0, align: i.align[c] });
        o += this.tablerow({ text: s });
        let a = "";
        for (let c = 0; c < i.rows.length; c++) {
          const u = i.rows[c];
          s = "";
          for (let p = 0; p < u.length; p++)
            s += this.tablecell({ text: u[p].text, tokens: u[p].tokens, header: !1, align: i.align[p] });
          a += this.tablerow({ text: s });
        }
        return t(o, a);
      };
    case "blockquote":
      return function(i) {
        if (!i.type || i.type !== n)
          return t.apply(this, arguments);
        const o = this.parser.parse(i.tokens);
        return t(o);
      };
    case "list":
      return function(i) {
        if (!i.type || i.type !== n)
          return t.apply(this, arguments);
        const o = i.ordered, s = i.start, a = i.loose;
        let c = "";
        for (let u = 0; u < i.items.length; u++) {
          const p = i.items[u], d = p.checked, g = p.task;
          let b = "";
          if (p.task) {
            const x = this.checkbox({ checked: !!d });
            a ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = x + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = x + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({ type: "text", text: x + " " }) : b += x + " ";
          }
          b += this.parser.parse(p.tokens, a), c += this.listitem({ type: "list_item", raw: b, text: b, task: g, checked: !!d, loose: a, tokens: p.tokens });
        }
        return t(c, o, s);
      };
    case "html":
      return function(i) {
        return i.type && i.type === n ? t(i.text, i.block) : t.apply(this, arguments);
      };
    case "paragraph":
    case "strong":
    case "em":
    case "del":
      return function(i) {
        return i.type && i.type === n ? t(this.parser.parseInline(i.tokens)) : t.apply(this, arguments);
      };
    case "escape":
    case "codespan":
    case "text":
      return function(i) {
        return i.type && i.type === n ? t(i.text) : t.apply(this, arguments);
      };
    case "link":
      return function(i) {
        return i.type && i.type === n ? t(i.href, i.title, this.parser.parseInline(i.tokens)) : t.apply(this, arguments);
      };
    case "image":
      return function(i) {
        return i.type && i.type === n ? t(i.href, i.title, i.text) : t.apply(this, arguments);
      };
  }
  return t;
}, ut = new WeakSet(), dn = function(t, n) {
  return (r, i) => {
    const o = { ...i }, s = { ...this.defaults, ...o };
    this.defaults.async === !0 && o.async === !1 && (s.silent, s.async = !0);
    const a = Ke(this, Rt, gr).call(this, !!s.silent, !!s.async);
    if (r == null)
      return a(new Error("marked(): input parameter is undefined or null"));
    if (typeof r != "string")
      return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
    if (s.hooks && (s.hooks.options = s), s.async)
      return Promise.resolve(s.hooks ? s.hooks.preprocess(r) : r).then((c) => t(c, s)).then((c) => s.hooks ? s.hooks.processAllTokens(c) : c).then((c) => s.walkTokens ? Promise.all(this.walkTokens(c, s.walkTokens)).then(() => c) : c).then((c) => n(c, s)).then((c) => s.hooks ? s.hooks.postprocess(c) : c).catch(a);
    try {
      s.hooks && (r = s.hooks.preprocess(r));
      let c = t(r, s);
      s.hooks && (c = s.hooks.processAllTokens(c)), s.walkTokens && this.walkTokens(c, s.walkTokens);
      let u = n(c, s);
      return s.hooks && (u = s.hooks.postprocess(u)), u;
    } catch (c) {
      return a(c);
    }
  };
}, Rt = new WeakSet(), gr = function(t, n) {
  return (r) => {
    if (r.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
      const i = "<p>An error occurred:</p><pre>" + ce(r.message + "", !0) + "</pre>";
      return n ? Promise.resolve(i) : i;
    }
    if (n)
      return Promise.reject(r);
    throw r;
  };
};
const Ne = new dr();
function F(e, t) {
  return Ne.parse(e, t);
}
function li(e) {
  return (e || "").match(/\S*/)[0];
}
function ci(e) {
  return (t) => {
    typeof t == "string" && t !== e.text && (e.escaped = !0, e.text = t);
  };
}
F.options = F.setOptions = (e) => (Ne.setOptions(e), F.defaults = Ne.defaults, Vn(F.defaults), F), F.getDefaults = Ro, F.defaults = je, F.use = (...e) => (Ne.use(...e), F.defaults = Ne.defaults, Vn(F.defaults), F), F.walkTokens = (e, t) => Ne.walkTokens(e, t), F.parseInline = Ne.parseInline, F.Parser = ke, F.parser = ke.parse, F.Renderer = jt, F.TextRenderer = An, F.Lexer = xe, F.lexer = xe.lex, F.Tokenizer = Mt, F.Hooks = nt, F.parse = F, F.options, F.setOptions, F.use, F.walkTokens, F.parseInline, ke.parse, xe.lex, de.registerLanguage("javascript", rr), de.registerLanguage("python", or), de.registerLanguage("cpp", function(e) {
  const t = e.regex, n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), r = "decltype\\(auto\\)", i = "[a-zA-Z_]\\w*::", o = "(?!struct)(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")", s = { className: "type", begin: "\\b[a-z\\d_]*_t\\b" }, a = { className: "string", variants: [{ begin: '(u8?|U|L)?"', end: '"', illegal: "\\n", contains: [e.BACKSLASH_ESCAPE] }, { begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)", end: "'", illegal: "." }, e.END_SAME_AS_BEGIN({ begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, end: /\)([^()\\ ]{0,16})"/ })] }, c = { className: "number", variants: [{ begin: "\\b(0b[01']+)" }, { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)" }, { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }], relevance: 0 }, u = { className: "meta", begin: /#\s*[a-z]+\b/, end: /$/, keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" }, contains: [{ begin: /\\\n/, relevance: 0 }, e.inherit(a, { className: "string" }), { className: "string", begin: /<.*?>/ }, n, e.C_BLOCK_COMMENT_MODE] }, p = { className: "title", begin: t.optional(i) + e.IDENT_RE, relevance: 0 }, d = t.optional(i) + e.IDENT_RE + "\\s*\\(", g = { type: ["bool", "char", "char16_t", "char32_t", "char8_t", "double", "float", "int", "long", "short", "void", "wchar_t", "unsigned", "signed", "const", "static"], keyword: ["alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel", "atomic_commit", "atomic_noexcept", "auto", "bitand", "bitor", "break", "case", "catch", "class", "co_await", "co_return", "co_yield", "compl", "concept", "const_cast|10", "consteval", "constexpr", "constinit", "continue", "decltype", "default", "delete", "do", "dynamic_cast|10", "else", "enum", "explicit", "export", "extern", "false", "final", "for", "friend", "goto", "if", "import", "inline", "module", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "override", "private", "protected", "public", "reflexpr", "register", "reinterpret_cast|10", "requires", "return", "sizeof", "static_assert", "static_cast|10", "struct", "switch", "synchronized", "template", "this", "thread_local", "throw", "transaction_safe", "transaction_safe_dynamic", "true", "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile", "while", "xor", "xor_eq"], literal: ["NULL", "false", "nullopt", "nullptr", "true"], built_in: ["_Pragma"], _type_hints: ["any", "auto_ptr", "barrier", "binary_semaphore", "bitset", "complex", "condition_variable", "condition_variable_any", "counting_semaphore", "deque", "false_type", "future", "imaginary", "initializer_list", "istringstream", "jthread", "latch", "lock_guard", "multimap", "multiset", "mutex", "optional", "ostringstream", "packaged_task", "pair", "promise", "priority_queue", "queue", "recursive_mutex", "recursive_timed_mutex", "scoped_lock", "set", "shared_future", "shared_lock", "shared_mutex", "shared_timed_mutex", "shared_ptr", "stack", "string_view", "stringstream", "timed_mutex", "thread", "true_type", "tuple", "unique_lock", "unique_ptr", "unordered_map", "unordered_multimap", "unordered_multiset", "unordered_set", "variant", "vector", "weak_ptr", "wstring", "wstring_view"] }, b = { className: "function.dispatch", relevance: 0, keywords: { _hint: ["abort", "abs", "acos", "apply", "as_const", "asin", "atan", "atan2", "calloc", "ceil", "cerr", "cin", "clog", "cos", "cosh", "cout", "declval", "endl", "exchange", "exit", "exp", "fabs", "floor", "fmod", "forward", "fprintf", "fputs", "free", "frexp", "fscanf", "future", "invoke", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "labs", "launder", "ldexp", "log", "log10", "make_pair", "make_shared", "make_shared_for_overwrite", "make_tuple", "make_unique", "malloc", "memchr", "memcmp", "memcpy", "memset", "modf", "move", "pow", "printf", "putchar", "puts", "realloc", "scanf", "sin", "sinh", "snprintf", "sprintf", "sqrt", "sscanf", "std", "stderr", "stdin", "stdout", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "swap", "tan", "tanh", "terminate", "to_underlying", "tolower", "toupper", "vfprintf", "visit", "vprintf", "vsprintf"] }, begin: t.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, t.lookahead(/(<[^<>]+>|)\s*\(/)) }, x = [b, u, s, n, e.C_BLOCK_COMMENT_MODE, c, a], w = { variants: [{ begin: /=/, end: /;/ }, { begin: /\(/, end: /\)/ }, { beginKeywords: "new throw return else", end: /;/ }], keywords: g, contains: x.concat([{ begin: /\(/, end: /\)/, keywords: g, contains: x.concat(["self"]), relevance: 0 }]), relevance: 0 }, M = { className: "function", begin: "(" + o + "[\\*&\\s]+)+" + d, returnBegin: !0, end: /[{;=]/, excludeEnd: !0, keywords: g, illegal: /[^\w\s\*&:<>.]/, contains: [{ begin: r, keywords: g, relevance: 0 }, { begin: d, returnBegin: !0, contains: [p], relevance: 0 }, { begin: /::/, relevance: 0 }, { begin: /:/, endsWithParent: !0, contains: [a, c] }, { relevance: 0, match: /,/ }, { className: "params", begin: /\(/, end: /\)/, keywords: g, relevance: 0, contains: [n, e.C_BLOCK_COMMENT_MODE, a, c, s, { begin: /\(/, end: /\)/, keywords: g, relevance: 0, contains: ["self", n, e.C_BLOCK_COMMENT_MODE, a, c, s] }] }, s, n, e.C_BLOCK_COMMENT_MODE, u] };
  return { name: "C++", aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"], keywords: g, illegal: "</", classNameAliases: { "function.dispatch": "built_in" }, contains: [].concat(w, M, b, x, [u, { begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)", end: ">", keywords: g, contains: ["self", s] }, { begin: e.IDENT_RE + "::", keywords: g }, { match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/], className: { 1: "keyword", 3: "title.class" } }]) };
}), de.registerLanguage("json", function(e) {
  const t = ["true", "false", "null"], n = { scope: "literal", beginKeywords: t.join(" ") };
  return { name: "JSON", keywords: { literal: t }, contains: [{ className: "attr", begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/, relevance: 1.01 }, { match: /[{}[\],:]/, className: "punctuation", relevance: 0 }, e.QUOTE_STRING_MODE, n, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], illegal: "\\S" };
}), de.registerLanguage("yaml", function(e) {
  const t = "true false yes no null", n = "[\\w#;/?:@&=+$,.~*'()[\\]]+", r = { className: "string", relevance: 0, variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /\S+/ }], contains: [e.BACKSLASH_ESCAPE, { className: "template-variable", variants: [{ begin: /\{\{/, end: /\}\}/ }, { begin: /%\{/, end: /\}/ }] }] }, i = e.inherit(r, { variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /[^\s,{}[\]]+/ }] }), o = { className: "number", begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b" }, s = { end: ",", endsWithParent: !0, excludeEnd: !0, keywords: t, relevance: 0 }, a = { begin: /\{/, end: /\}/, contains: [s], illegal: "\\n", relevance: 0 }, c = { begin: "\\[", end: "\\]", contains: [s], illegal: "\\n", relevance: 0 }, u = [{ className: "attr", variants: [{ begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)" }, { begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)' }, { begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)" }] }, { className: "meta", begin: "^---\\s*$", relevance: 10 }, { className: "string", begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*" }, { begin: "<%[%=-]?", end: "[%-]?%>", subLanguage: "ruby", excludeBegin: !0, excludeEnd: !0, relevance: 0 }, { className: "type", begin: "!\\w+!" + n }, { className: "type", begin: "!<" + n + ">" }, { className: "type", begin: "!" + n }, { className: "type", begin: "!!" + n }, { className: "meta", begin: "&" + e.UNDERSCORE_IDENT_RE + "$" }, { className: "meta", begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$" }, { className: "bullet", begin: "-(?=[ ]|$)", relevance: 0 }, e.HASH_COMMENT_MODE, { beginKeywords: t, keywords: { literal: t } }, o, { className: "number", begin: e.C_NUMBER_RE + "\\b", relevance: 0 }, a, c, r], p = [...u];
  return p.pop(), p.push(i), s.contains = p, { name: "YAML", case_insensitive: !0, aliases: ["yml"], contains: u };
});
const fr = /[&<>"']/, rs = new RegExp(fr.source, "g"), mr = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, os = new RegExp(mr.source, "g"), ss = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ui = (e) => ss[e];
function pi(e, t) {
  if (t) {
    if (fr.test(e))
      return e.replace(rs, ui);
  } else if (mr.test(e))
    return e.replace(os, ui);
  return e;
}
const di = [{ type: "note", icon: '<svg class="octicon octicon-info mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>' }, { type: "tip", icon: '<svg class="octicon octicon-light-bulb mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>' }, { type: "important", icon: '<svg class="octicon octicon-report mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>' }, { type: "warning", icon: '<svg class="octicon octicon-alert mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>' }, { type: "caution", icon: '<svg class="octicon octicon-stop mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>' }];
function hi(e) {
  return `^(?:\\[\\!${e.toUpperCase()}\\])[s]*?
?`;
}
function as(e) {
  return e.slice(0, 1).toUpperCase() + e.slice(1).toLowerCase();
}
const br = /\$\$(.*?)\$\$|\$(.*?)\$/g;
async function gi(e) {
  let t = await async function() {
    if (window.MathJax && window.MathJax.tex2chtml)
      return "ok";
    if (window.MathJax && !window.MathJax.tex2chtml) {
      const r = (i) => new Promise((o) => {
        setTimeout(o, i);
      });
      for (; !window.MathJax || !window.MathJax.tex2chtml; )
        await r(100);
      return "ok";
    }
    return new Promise((r, i) => {
      window.MathJax = { tex: { inlineMath: [["$", "$"]] }, svg: { fontCache: "global" }, startup: { typeset: !1 } };
      const o = document.createElement("script");
      o.async = !0, o.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js", o.id = "MathJax-script", o.onload = async () => {
        const s = (a) => new Promise((c) => {
          setTimeout(c, a);
        });
        for (; !window.MathJax || !window.MathJax.tex2chtml; )
          await s(100);
        r();
      }, o.onerror = () => i(new Error("Failed to load mathjax")), document.head.appendChild(o);
    });
  }();
  t !== "ok" && await t;
  let n = e;
  if (window.MathJax) {
    const r = e.match(br);
    r && r.forEach((i) => {
      const o = i.startsWith("$$") && i.endsWith("$$"), s = o ? i.slice(2, -2) : i.slice(1, -1), a = window.MathJax.tex2chtml(s, { display: o }).innerHTML;
      n = n.replace(i, a);
    });
  }
  return n;
}
class En {
  constructor(t, n = !1, r = 500, i = 200) {
    B(this, "boardid", "uikit-charts-board");
    this.board = null, this.objects = [], this.data_points = {}, this.data_polygons = {}, this.data_circles = {}, this.data_lines = {}, this.data_text = {}, this.data_arrows = {}, this.data_dot_arrows = {}, this.new_point_id = 0, this.new_circle_id = 0, this.new_line_id = 0, this.brddom = document.createElement("div"), this.brddom.innerHTML = ((o, s = 500, a = 200, c = !1) => `
<div style="position:'relative';display:${c ? "block" : "none"}">
    <div style="position:'absolute'; top: 0">
        <button id="jxgbox-addpoint">添加点</button>
        <button id="jxgbox-addcircle">添加圆</button>
    </div>
    <div id="${o}" class="jxgbox" style="width:${s}px; height:${a}px;">
    </div>
</div>
    `)(this.boardid, r, i, !!n), document.body.appendChild(this.brddom), document.getElementById("jxgbox-addpoint").addEventListener("click", this.addNewPoint.bind(this)), document.getElementById("jxgbox-addcircle").addEventListener("click", this.addNewCircle.bind(this)), this.board = window.JXG.JSXGraph.initBoard(this.boardid, { boundingbox: [-5, 2, 5, -2], keepAspectRatio: !0, showCopyright: !1, showNavigation: !1, showScreenshot: !1 }), t.forEach((o) => {
      switch (o.type) {
        case "text":
          this.setText(o.name, o.target, o.text, o.color);
          break;
        case "polygon":
          this.setPolygon(o.name, o.points, o.color);
          break;
        case "point":
          this.setPoint(o.x, o.y, o.name, o.color, o.show_label);
          break;
        case "circle":
          this.setCircle(o.center, o.len, o.name, o.object);
          break;
        case "line":
          this.setLine(o.points, o.name, o.color);
          break;
        case "arrow":
          this.setArrow(o.points, o.name, o.color);
          break;
        case "dotarrow":
          this.setDotArrow(o.points, o.name, o.color);
      }
    });
  }
  static fromPlain(t = [], n = !1, r = 400, i = 200) {
    let o = [], s = 0, a = 0, c = 0, u = 0, p = 0;
    for (let M of t) {
      if (!M)
        continue;
      let l = M.split(":", 2), _ = l[0].split(","), m = l[1].split(",");
      switch (_[0]) {
        case "rect":
          m[0], r = Number.parseInt(m[1]), i = Number.parseInt(m[2]);
          var d = m[3] || "black", g = _[1];
          o.push({ type: "point", name: g, x: 0, y: 0, color: d }, { type: "point", name: `p${u}0`, x: -r / 2, y: -i / 2, color: d }, { type: "point", name: `p${u}1`, x: r / 2, y: -i / 2, color: d }, { type: "point", name: `p${u}2`, x: r / 2, y: i / 2, color: d }, { type: "point", name: `p${u}3`, x: -r / 2, y: i / 2, color: d }), o.push({ type: "polygon", name: `rect${u}`, points: [`p${u}0`, `p${u}1`, `p${u}2`, `p${u}3`], color: d }), u += 1;
        case "point":
          if (m[0] == "center") {
            let k = m[1] || "black";
            o.push({ type: "point", name: _[1] || `point${s}`, x: 0, y: 0, color: k }), s += 1;
          }
          break;
        case "arrow":
          var b = Number.parseInt(m[1]) * (Math.PI / 180), x = Number.parseInt(m[2]), w = (d = m[3] || "black", _[1] || `arrow${a}`);
          o.push({ type: "point", name: w, show_label: !0, x: Math.cos(b) * x, y: Math.sin(b) * x, color: d }), o.push({ type: "arrow", name: `arrow${a}`, points: ["o", w], color: d }), a += 1;
          break;
        case "dotarrow":
          b = Number.parseInt(m[1]) * (Math.PI / 180), x = Number.parseInt(m[2]), d = m[3] || "black", w = _[1] || `arrow${p}`, o.push({ type: "point", name: w, show_label: !0, x: Math.cos(b) * x, y: Math.sin(b) * x, color: d }), o.push({ type: "dotarrow", name: `arrow${p}`, points: ["o", w], color: d }), p += 1;
          break;
        case "text":
          let h = m[0], y = m[1];
          d = m[2] || "black", g = _[1] || `text${c}`, o.push({ type: "text", name: g, target: h, text: y, color: d }), c += 1;
      }
    }
    return new En(o, n, r, i);
  }
  clean() {
    document.body.removeChild(this.brddom);
  }
  addNewPoint() {
    this.new_point_id += 1, this.setPoint(0, 0, `new_point_${this.new_point_id}`);
  }
  addNewCircle() {
    this.new_circle_id += 1, this.setCircle([0, 0], 1, `new_circle_${this.new_circle_id}`);
  }
  setPoint(t, n, r, i = "black", o = !1) {
    const s = this.board.create("point", [t, n], { name: r, visible: !1, withLabel: o, strokeColor: i, fillColor: i });
    this.objects.push(s), this.data_points[r] = { name: r, x: t, y: n, show_label: o };
  }
  setPolygon(t, n, r = "black") {
    const i = this.board.create("regularpolygon", n.map((o) => this.objects.find((s) => s.name === o)), { name: t, strokeColor: r, fillColor: r });
    this.objects.push(i), this.data_polygons[t] = { name: t, points: n, color: r };
  }
  setText(t, n, r, i = "black") {
    const o = this.board.create("text", [0, -1, r], { anchor: n, strokeColor: i, fillColor: i });
    this.objects.push(o), this.data_text[t] = { name: t, target: n, text: r, color: i };
  }
  setCircle(t, n, r, i) {
    const o = this.board.create("circle", [t, n], { ...i });
    o.on("drag", () => {
      let s = o.center.name, a = o.center.coords.usrCoords;
      this.data_points[s] ? (this.data_points[s].x = a[0], this.data_points[s].y = a[1]) : (this.data_circles[r].center = [a[1], a[2]], this.data_circles[r].len = a[0]);
    }), this.objects.push(o), this.data_circles[r] = { name: r, center: t, len: n };
  }
  setLine(t, n, r = "black") {
    const i = this.board.create("line", t.map((o) => this.objects.find((s) => s.name === o)), { strokeColor: r, fillColor: r });
    this.objects.push(i), this.data_lines[n] = { points: t };
  }
  setArrow(t, n, r = "black") {
    const i = this.board.create("arrow", t.map((o) => this.objects.find((s) => s.name === o)), { strokeColor: r, fillColor: r });
    this.objects.push(i), this.data_arrows[n] = { points: t };
  }
  setDotArrow(t, n, r = "black") {
    const i = this.board.create("arrow", t.map((o) => this.objects.find((s) => s.name === o)), { dash: 2, strokeColor: r, fillColor: r });
    this.objects.push(i), this.data_dot_arrows[n] = { points: t };
  }
  getDataUri() {
    return this.board.renderer.dumpToDataURI();
  }
  getImage() {
    let t = document.createElement("img");
    return t.style.margin = "0 auto", t.src = this.getDataUri(), t;
  }
  getRawData() {
    let t = [];
    for (let n in this.data_points)
      t.push({ type: "point", ...this.data_points[n] });
    for (let n in this.data_circles)
      t.push({ type: "circle", ...this.data_circles[n] });
    for (let n in this.data_lines)
      t.push({ type: "line", ...this.data_lines[n] });
    return t;
  }
}
function ls(e = {}) {
  return { async: !0, async walkTokens(t) {
    let n = t.raw.match(/<graph>([\s\S]*?)<\/graph>/);
    if (!n)
      return;
    let r = await async function() {
      return window.JXG ? "ok" : new Promise((o, s) => {
        const a = document.createElement("script");
        a.async = !0, a.src = "https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js", a.onload = () => o(), a.onerror = () => s(new Error("Failed to load jsxgraph")), document.head.appendChild(a);
      });
    }();
    r !== "ok" && await r;
    let i = En.fromPlain(n[1].split(`
`)).getImage();
    Object.assign(t, { type: "jsxgraph", meta: { renderedStr: i.outerHTML } });
  }, extensions: [{ name: "jsxgraph", level: "block", renderer: ({ meta: t, tokens: n = [] }) => `<p>${t.renderedStr}</p>` }] };
}
const xr = ["abstract", "attention", "bug", "caution", "danger", "error", "example", "failure", "hint", "info", "note", "question", "quote", "success", "tip", "warning"], Yt = new RegExp(`^!!!\\s+(${xr.join("|")})(?:\\s+)?(.*)$`), cs = /^!!!\s*$/, us = { unicode: !1, emojis: { favorite: "favorite" }, renderer: (e) => `<span class="material-symbols-outlined">
            ${e.emoji}
        </span>` };
function ps(e = {}) {
  return { async: !0, async walkTokens(t) {
    let n = t.raw.match(/<diagram>([\s\S]*?)<\/diagram>/);
    if (!n)
      return;
    let r = await async function() {
      return window.mermaid ? "ok" : new Promise((o, s) => {
        const a = document.createElement("script");
        a.type = "module", a.textContent = `
            import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
            window.mermaid = mermaid;
            window.mermaid.initialize({ startOnLoad: false });
            window.mermaidLoaded = true;
        `, a.onerror = () => s(new Error("Failed to load jsxgraph")), document.head.appendChild(a);
        const c = setInterval(() => {
          window.mermaidLoaded && (clearInterval(c), o());
        }, 100);
      });
    }();
    r !== "ok" && await r;
    let i = await window.mermaid.render("mermaid-diagram-1", n[1]);
    Object.assign(t, { type: "diagram", meta: { diagram: i.svg } });
  }, extensions: [{ name: "diagram", level: "block", renderer: ({ meta: t, tokens: n = [] }) => `<pre style="background-color:white">${t.diagram}</pre>` }] };
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function fi(e) {
  return e == null;
}
var ds = function(e, t) {
  var n, r, i, o;
  if (t)
    for (n = 0, r = (o = Object.keys(t)).length; n < r; n += 1)
      e[i = o[n]] = t[i];
  return e;
}, oe = { isNothing: fi, isObject: function(e) {
  return typeof e == "object" && e !== null;
}, toArray: function(e) {
  return Array.isArray(e) ? e : fi(e) ? [] : [e];
}, repeat: function(e, t) {
  var n, r = "";
  for (n = 0; n < t; n += 1)
    r += e;
  return r;
}, isNegativeZero: function(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}, extend: ds };
function kr(e, t) {
  var n = "", r = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (n += 'in "' + e.mark.name + '" '), n += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (n += `

` + e.mark.snippet), r + " " + n) : r;
}
function Ve(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = kr(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Ve.prototype = Object.create(Error.prototype), Ve.prototype.constructor = Ve, Ve.prototype.toString = function(e) {
  return this.name + ": " + kr(this, e);
};
var ye = Ve;
function Vt(e, t, n, r, i) {
  var o = "", s = "", a = Math.floor(i / 2) - 1;
  return r - t > a && (t = r - a + (o = " ... ").length), n - r > a && (n = r + a - (s = " ...").length), { str: o + e.slice(t, n).replace(/\t/g, "→") + s, pos: r - t + o.length };
}
function en(e, t) {
  return oe.repeat(" ", t - e.length) + e;
}
var hs = function(e, t) {
  if (t = Object.create(t || null), !e.buffer)
    return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var n, r = /\r?\n|\r|\0/g, i = [0], o = [], s = -1; n = r.exec(e.buffer); )
    o.push(n.index), i.push(n.index + n[0].length), e.position <= n.index && s < 0 && (s = i.length - 2);
  s < 0 && (s = i.length - 1);
  var a, c, u = "", p = Math.min(e.line + t.linesAfter, o.length).toString().length, d = t.maxLength - (t.indent + p + 3);
  for (a = 1; a <= t.linesBefore && !(s - a < 0); a++)
    c = Vt(e.buffer, i[s - a], o[s - a], e.position - (i[s] - i[s - a]), d), u = oe.repeat(" ", t.indent) + en((e.line - a + 1).toString(), p) + " | " + c.str + `
` + u;
  for (c = Vt(e.buffer, i[s], o[s], e.position, d), u += oe.repeat(" ", t.indent) + en((e.line + 1).toString(), p) + " | " + c.str + `
`, u += oe.repeat("-", t.indent + p + 3 + c.pos) + `^
`, a = 1; a <= t.linesAfter && !(s + a >= o.length); a++)
    c = Vt(e.buffer, i[s + a], o[s + a], e.position - (i[s] - i[s + a]), d), u += oe.repeat(" ", t.indent) + en((e.line + a + 1).toString(), p) + " | " + c.str + `
`;
  return u.replace(/\n$/, "");
}, gs = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], fs = ["scalar", "sequence", "mapping"], ie = function(e, t) {
  if (t = t || {}, Object.keys(t).forEach((n) => {
    if (gs.indexOf(n) === -1)
      throw new ye('Unknown option "' + n + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || (() => !0), this.construct = t.construct || ((n) => n), this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = function(n) {
    var r = {};
    return n !== null && Object.keys(n).forEach((i) => {
      n[i].forEach((o) => {
        r[String(o)] = i;
      });
    }), r;
  }(t.styleAliases || null), fs.indexOf(this.kind) === -1)
    throw new ye('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
};
function mi(e, t) {
  var n = [];
  return e[t].forEach((r) => {
    var i = n.length;
    n.forEach((o, s) => {
      o.tag === r.tag && o.kind === r.kind && o.multi === r.multi && (i = s);
    }), n[i] = r;
  }), n;
}
function hn(e) {
  return this.extend(e);
}
hn.prototype.extend = function(e) {
  var t = [], n = [];
  if (e instanceof ie)
    n.push(e);
  else if (Array.isArray(e))
    n = n.concat(e);
  else {
    if (!e || !Array.isArray(e.implicit) && !Array.isArray(e.explicit))
      throw new ye("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    e.implicit && (t = t.concat(e.implicit)), e.explicit && (n = n.concat(e.explicit));
  }
  t.forEach((i) => {
    if (!(i instanceof ie))
      throw new ye("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (i.loadKind && i.loadKind !== "scalar")
      throw new ye("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (i.multi)
      throw new ye("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach((i) => {
    if (!(i instanceof ie))
      throw new ye("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var r = Object.create(hn.prototype);
  return r.implicit = (this.implicit || []).concat(t), r.explicit = (this.explicit || []).concat(n), r.compiledImplicit = mi(r, "implicit"), r.compiledExplicit = mi(r, "explicit"), r.compiledTypeMap = function() {
    var i, o, s = { scalar: {}, sequence: {}, mapping: {}, fallback: {}, multi: { scalar: [], sequence: [], mapping: [], fallback: [] } };
    function a(c) {
      c.multi ? (s.multi[c.kind].push(c), s.multi.fallback.push(c)) : s[c.kind][c.tag] = s.fallback[c.tag] = c;
    }
    for (i = 0, o = arguments.length; i < o; i += 1)
      arguments[i].forEach(a);
    return s;
  }(r.compiledImplicit, r.compiledExplicit), r;
};
var ms = new hn({ explicit: [new ie("tag:yaml.org,2002:str", { kind: "scalar", construct: (e) => e !== null ? e : "" }), new ie("tag:yaml.org,2002:seq", { kind: "sequence", construct: (e) => e !== null ? e : [] }), new ie("tag:yaml.org,2002:map", { kind: "mapping", construct: (e) => e !== null ? e : {} })] }), bs = new ie("tag:yaml.org,2002:null", { kind: "scalar", resolve: function(e) {
  if (e === null)
    return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}, construct: function() {
  return null;
}, predicate: function(e) {
  return e === null;
}, represent: { canonical: () => "~", lowercase: () => "null", uppercase: () => "NULL", camelcase: () => "Null", empty: () => "" }, defaultStyle: "lowercase" }), xs = new ie("tag:yaml.org,2002:bool", { kind: "scalar", resolve: function(e) {
  if (e === null)
    return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}, construct: function(e) {
  return e === "true" || e === "True" || e === "TRUE";
}, predicate: function(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}, represent: { lowercase: (e) => e ? "true" : "false", uppercase: (e) => e ? "TRUE" : "FALSE", camelcase: (e) => e ? "True" : "False" }, defaultStyle: "lowercase" });
function ks(e) {
  return 48 <= e && e <= 55;
}
function ws(e) {
  return 48 <= e && e <= 57;
}
var ys = new ie("tag:yaml.org,2002:int", { kind: "scalar", resolve: function(e) {
  if (e === null)
    return !1;
  var t, n, r = e.length, i = 0, o = !1;
  if (!r)
    return !1;
  if ((t = e[i]) !== "-" && t !== "+" || (t = e[++i]), t === "0") {
    if (i + 1 === r)
      return !0;
    if ((t = e[++i]) === "b") {
      for (i++; i < r; i++)
        if ((t = e[i]) !== "_") {
          if (t !== "0" && t !== "1")
            return !1;
          o = !0;
        }
      return o && t !== "_";
    }
    if (t === "x") {
      for (i++; i < r; i++)
        if ((t = e[i]) !== "_") {
          if (!(48 <= (n = e.charCodeAt(i)) && n <= 57 || 65 <= n && n <= 70 || 97 <= n && n <= 102))
            return !1;
          o = !0;
        }
      return o && t !== "_";
    }
    if (t === "o") {
      for (i++; i < r; i++)
        if ((t = e[i]) !== "_") {
          if (!ks(e.charCodeAt(i)))
            return !1;
          o = !0;
        }
      return o && t !== "_";
    }
  }
  if (t === "_")
    return !1;
  for (; i < r; i++)
    if ((t = e[i]) !== "_") {
      if (!ws(e.charCodeAt(i)))
        return !1;
      o = !0;
    }
  return !(!o || t === "_");
}, construct: function(e) {
  var t, n = e, r = 1;
  if (n.indexOf("_") !== -1 && (n = n.replace(/_/g, "")), (t = n[0]) !== "-" && t !== "+" || (t === "-" && (r = -1), t = (n = n.slice(1))[0]), n === "0")
    return 0;
  if (t === "0") {
    if (n[1] === "b")
      return r * parseInt(n.slice(2), 2);
    if (n[1] === "x")
      return r * parseInt(n.slice(2), 16);
    if (n[1] === "o")
      return r * parseInt(n.slice(2), 8);
  }
  return r * parseInt(n, 10);
}, predicate: function(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 == 0 && !oe.isNegativeZero(e);
}, represent: { binary: (e) => e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1), octal: (e) => e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1), decimal: (e) => e.toString(10), hexadecimal: (e) => e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1) }, defaultStyle: "decimal", styleAliases: { binary: [2, "bin"], octal: [8, "oct"], decimal: [10, "dec"], hexadecimal: [16, "hex"] } }), vs = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), _s = /^[-+]?[0-9]+e/, $s = new ie("tag:yaml.org,2002:float", { kind: "scalar", resolve: function(e) {
  return e !== null && !(!vs.test(e) || e[e.length - 1] === "_");
}, construct: function(e) {
  var t, n;
  return n = (t = e.replace(/_/g, "").toLowerCase())[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? n === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : n * parseFloat(t, 10);
}, predicate: function(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 != 0 || oe.isNegativeZero(e));
}, represent: function(e, t) {
  var n;
  if (isNaN(e))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (oe.isNegativeZero(e))
    return "-0.0";
  return n = e.toString(10), _s.test(n) ? n.replace("e", ".e") : n;
}, defaultStyle: "lowercase" }), As = ms.extend({ implicit: [bs, xs, ys, $s] }), bi = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), xi = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"), Es = new ie("tag:yaml.org,2002:timestamp", { kind: "scalar", resolve: function(e) {
  return e !== null && (bi.exec(e) !== null || xi.exec(e) !== null);
}, construct: function(e) {
  var t, n, r, i, o, s, a, c, u = 0, p = null;
  if ((t = bi.exec(e)) === null && (t = xi.exec(e)), t === null)
    throw new Error("Date resolve error");
  if (n = +t[1], r = +t[2] - 1, i = +t[3], !t[4])
    return new Date(Date.UTC(n, r, i));
  if (o = +t[4], s = +t[5], a = +t[6], t[7]) {
    for (u = t[7].slice(0, 3); u.length < 3; )
      u += "0";
    u = +u;
  }
  return t[9] && (p = 6e4 * (60 * +t[10] + +(t[11] || 0)), t[9] === "-" && (p = -p)), c = new Date(Date.UTC(n, r, i, o, s, a, u)), p && c.setTime(c.getTime() - p), c;
}, instanceOf: Date, represent: function(e) {
  return e.toISOString();
} }), Cs = new ie("tag:yaml.org,2002:merge", { kind: "scalar", resolve: function(e) {
  return e === "<<" || e === null;
} }), tn = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`, Ns = new ie("tag:yaml.org,2002:binary", { kind: "scalar", resolve: function(e) {
  if (e === null)
    return !1;
  var t, n, r = 0, i = e.length, o = tn;
  for (n = 0; n < i; n++)
    if (!((t = o.indexOf(e.charAt(n))) > 64)) {
      if (t < 0)
        return !1;
      r += 6;
    }
  return r % 8 == 0;
}, construct: function(e) {
  var t, n, r = e.replace(/[\r\n=]/g, ""), i = r.length, o = tn, s = 0, a = [];
  for (t = 0; t < i; t++)
    t % 4 == 0 && t && (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(255 & s)), s = s << 6 | o.indexOf(r.charAt(t));
  return (n = i % 4 * 6) === 0 ? (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(255 & s)) : n === 18 ? (a.push(s >> 10 & 255), a.push(s >> 2 & 255)) : n === 12 && a.push(s >> 4 & 255), new Uint8Array(a);
}, predicate: function(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}, represent: function(e) {
  var t, n, r = "", i = 0, o = e.length, s = tn;
  for (t = 0; t < o; t++)
    t % 3 == 0 && t && (r += s[i >> 18 & 63], r += s[i >> 12 & 63], r += s[i >> 6 & 63], r += s[63 & i]), i = (i << 8) + e[t];
  return (n = o % 3) === 0 ? (r += s[i >> 18 & 63], r += s[i >> 12 & 63], r += s[i >> 6 & 63], r += s[63 & i]) : n === 2 ? (r += s[i >> 10 & 63], r += s[i >> 4 & 63], r += s[i << 2 & 63], r += s[64]) : n === 1 && (r += s[i >> 2 & 63], r += s[i << 4 & 63], r += s[64], r += s[64]), r;
} }), Ss = Object.prototype.hasOwnProperty, Ts = Object.prototype.toString, Ms = new ie("tag:yaml.org,2002:omap", { kind: "sequence", resolve: function(e) {
  if (e === null)
    return !0;
  var t, n, r, i, o, s = [], a = e;
  for (t = 0, n = a.length; t < n; t += 1) {
    if (r = a[t], o = !1, Ts.call(r) !== "[object Object]")
      return !1;
    for (i in r)
      if (Ss.call(r, i)) {
        if (o)
          return !1;
        o = !0;
      }
    if (!o || s.indexOf(i) !== -1)
      return !1;
    s.push(i);
  }
  return !0;
}, construct: function(e) {
  return e !== null ? e : [];
} }), Is = Object.prototype.toString, js = new ie("tag:yaml.org,2002:pairs", { kind: "sequence", resolve: function(e) {
  if (e === null)
    return !0;
  var t, n, r, i, o, s = e;
  for (o = new Array(s.length), t = 0, n = s.length; t < n; t += 1) {
    if (r = s[t], Is.call(r) !== "[object Object]" || (i = Object.keys(r)).length !== 1)
      return !1;
    o[t] = [i[0], r[i[0]]];
  }
  return !0;
}, construct: function(e) {
  if (e === null)
    return [];
  var t, n, r, i, o, s = e;
  for (o = new Array(s.length), t = 0, n = s.length; t < n; t += 1)
    r = s[t], i = Object.keys(r), o[t] = [i[0], r[i[0]]];
  return o;
} }), Os = Object.prototype.hasOwnProperty, Ls = new ie("tag:yaml.org,2002:set", { kind: "mapping", resolve: function(e) {
  if (e === null)
    return !0;
  var t, n = e;
  for (t in n)
    if (Os.call(n, t) && n[t] !== null)
      return !1;
  return !0;
}, construct: function(e) {
  return e !== null ? e : {};
} }), Rs = As.extend({ implicit: [Es, Cs], explicit: [Ns, Ms, js, Ls] }), Ee = Object.prototype.hasOwnProperty, _t = 1, ki = 2, wr = 3, Et = 4, nn = 1, Bs = 2, wi = 3, zs = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Ps = /[\x85\u2028\u2029]/, Ds = /[,\[\]\{\}]/, yr = /^(?:!|!!|![a-z\-]+!)$/i, vr = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function yi(e) {
  return Object.prototype.toString.call(e);
}
function fe(e) {
  return e === 10 || e === 13;
}
function Se(e) {
  return e === 9 || e === 32;
}
function se(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function De(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function Hs(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : 97 <= (t = 32 | e) && t <= 102 ? t - 97 + 10 : -1;
}
function vi(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function Us(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(55296 + (e - 65536 >> 10), 56320 + (e - 65536 & 1023));
}
for (var _r = new Array(256), $r = new Array(256), Be = 0; Be < 256; Be++)
  _r[Be] = vi(Be) ? 1 : 0, $r[Be] = vi(Be);
function Zs(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || Rs, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Ar(e, t) {
  var n = { name: e.filename, buffer: e.input.slice(0, -1), position: e.position, line: e.line, column: e.position - e.lineStart };
  return n.snippet = hs(n), new ye(t, n);
}
function T(e, t) {
  throw Ar(e, t);
}
function Ot(e, t) {
  e.onWarning && e.onWarning.call(null, Ar(e, t));
}
var _i = { YAML: function(e, t, n) {
  var r, i, o;
  e.version !== null && T(e, "duplication of %YAML directive"), n.length !== 1 && T(e, "YAML directive accepts exactly one argument"), (r = /^([0-9]+)\.([0-9]+)$/.exec(n[0])) === null && T(e, "ill-formed argument of the YAML directive"), i = parseInt(r[1], 10), o = parseInt(r[2], 10), i !== 1 && T(e, "unacceptable YAML version of the document"), e.version = n[0], e.checkLineBreaks = o < 2, o !== 1 && o !== 2 && Ot(e, "unsupported YAML version of the document");
}, TAG: function(e, t, n) {
  var r, i;
  n.length !== 2 && T(e, "TAG directive accepts exactly two arguments"), r = n[0], i = n[1], yr.test(r) || T(e, "ill-formed tag handle (first argument) of the TAG directive"), Ee.call(e.tagMap, r) && T(e, 'there is a previously declared suffix for "' + r + '" tag handle'), vr.test(i) || T(e, "ill-formed tag prefix (second argument) of the TAG directive");
  try {
    i = decodeURIComponent(i);
  } catch {
    T(e, "tag prefix is malformed: " + i);
  }
  e.tagMap[r] = i;
} };
function _e(e, t, n, r) {
  var i, o, s, a;
  if (t < n) {
    if (a = e.input.slice(t, n), r)
      for (i = 0, o = a.length; i < o; i += 1)
        (s = a.charCodeAt(i)) === 9 || 32 <= s && s <= 1114111 || T(e, "expected valid JSON character");
    else
      zs.test(a) && T(e, "the stream contains non-printable characters");
    e.result += a;
  }
}
function $i(e, t, n, r) {
  var i, o, s, a;
  for (oe.isObject(n) || T(e, "cannot merge mappings; the provided source object is unacceptable"), s = 0, a = (i = Object.keys(n)).length; s < a; s += 1)
    o = i[s], Ee.call(t, o) || (t[o] = n[o], r[o] = !0);
}
function ze(e, t, n, r, i, o, s, a, c) {
  var u, p;
  if (Array.isArray(i))
    for (u = 0, p = (i = Array.prototype.slice.call(i)).length; u < p; u += 1)
      Array.isArray(i[u]) && T(e, "nested arrays are not supported inside keys"), typeof i == "object" && yi(i[u]) === "[object Object]" && (i[u] = "[object Object]");
  if (typeof i == "object" && yi(i) === "[object Object]" && (i = "[object Object]"), i = String(i), t === null && (t = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(o))
      for (u = 0, p = o.length; u < p; u += 1)
        $i(e, t, o[u], n);
    else
      $i(e, t, o, n);
  else
    e.json || Ee.call(n, i) || !Ee.call(t, i) || (e.line = s || e.line, e.lineStart = a || e.lineStart, e.position = c || e.position, T(e, "duplicated mapping key")), i === "__proto__" ? Object.defineProperty(t, i, { configurable: !0, enumerable: !0, writable: !0, value: o }) : t[i] = o, delete n[i];
  return t;
}
function Cn(e) {
  var t;
  (t = e.input.charCodeAt(e.position)) === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : T(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
function Q(e, t, n) {
  for (var r = 0, i = e.input.charCodeAt(e.position); i !== 0; ) {
    for (; Se(i); )
      i === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), i = e.input.charCodeAt(++e.position);
    if (t && i === 35)
      do
        i = e.input.charCodeAt(++e.position);
      while (i !== 10 && i !== 13 && i !== 0);
    if (!fe(i))
      break;
    for (Cn(e), i = e.input.charCodeAt(e.position), r++, e.lineIndent = 0; i === 32; )
      e.lineIndent++, i = e.input.charCodeAt(++e.position);
  }
  return n !== -1 && r !== 0 && e.lineIndent < n && Ot(e, "deficient indentation"), r;
}
function Ct(e) {
  var t, n = e.position;
  return !((t = e.input.charCodeAt(n)) !== 45 && t !== 46 || t !== e.input.charCodeAt(n + 1) || t !== e.input.charCodeAt(n + 2) || (n += 3, (t = e.input.charCodeAt(n)) !== 0 && !se(t)));
}
function rn(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += oe.repeat(`
`, t - 1));
}
function Ai(e, t) {
  var n, r, i = e.tag, o = e.anchor, s = [], a = !1;
  if (e.firstTabInLine !== -1)
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = s), r = e.input.charCodeAt(e.position); r !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, T(e, "tab characters must not be used in indentation")), r === 45) && se(e.input.charCodeAt(e.position + 1)); )
    if (a = !0, e.position++, Q(e, !0, -1) && e.lineIndent <= t)
      s.push(null), r = e.input.charCodeAt(e.position);
    else if (n = e.line, Fe(e, t, wr, !1, !0), s.push(e.result), Q(e, !0, -1), r = e.input.charCodeAt(e.position), (e.line === n || e.lineIndent > t) && r !== 0)
      T(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  return !!a && (e.tag = i, e.anchor = o, e.kind = "sequence", e.result = s, !0);
}
function Fs(e) {
  var t, n, r, i, o = !1, s = !1;
  if ((i = e.input.charCodeAt(e.position)) !== 33)
    return !1;
  if (e.tag !== null && T(e, "duplication of a tag property"), (i = e.input.charCodeAt(++e.position)) === 60 ? (o = !0, i = e.input.charCodeAt(++e.position)) : i === 33 ? (s = !0, n = "!!", i = e.input.charCodeAt(++e.position)) : n = "!", t = e.position, o) {
    do
      i = e.input.charCodeAt(++e.position);
    while (i !== 0 && i !== 62);
    e.position < e.length ? (r = e.input.slice(t, e.position), i = e.input.charCodeAt(++e.position)) : T(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; i !== 0 && !se(i); )
      i === 33 && (s ? T(e, "tag suffix cannot contain exclamation marks") : (n = e.input.slice(t - 1, e.position + 1), yr.test(n) || T(e, "named tag handle cannot contain such characters"), s = !0, t = e.position + 1)), i = e.input.charCodeAt(++e.position);
    r = e.input.slice(t, e.position), Ds.test(r) && T(e, "tag suffix cannot contain flow indicator characters");
  }
  r && !vr.test(r) && T(e, "tag name cannot contain such characters: " + r);
  try {
    r = decodeURIComponent(r);
  } catch {
    T(e, "tag name is malformed: " + r);
  }
  return o ? e.tag = r : Ee.call(e.tagMap, n) ? e.tag = e.tagMap[n] + r : n === "!" ? e.tag = "!" + r : n === "!!" ? e.tag = "tag:yaml.org,2002:" + r : T(e, 'undeclared tag handle "' + n + '"'), !0;
}
function qs(e) {
  var t, n;
  if ((n = e.input.charCodeAt(e.position)) !== 38)
    return !1;
  for (e.anchor !== null && T(e, "duplication of an anchor property"), n = e.input.charCodeAt(++e.position), t = e.position; n !== 0 && !se(n) && !De(n); )
    n = e.input.charCodeAt(++e.position);
  return e.position === t && T(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
function Fe(e, t, n, r, i) {
  var o, s, a, c, u, p, d, g, b, x = 1, w = !1, M = !1;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, o = s = a = Et === n || wr === n, r && Q(e, !0, -1) && (w = !0, e.lineIndent > t ? x = 1 : e.lineIndent === t ? x = 0 : e.lineIndent < t && (x = -1)), x === 1)
    for (; Fs(e) || qs(e); )
      Q(e, !0, -1) ? (w = !0, a = o, e.lineIndent > t ? x = 1 : e.lineIndent === t ? x = 0 : e.lineIndent < t && (x = -1)) : a = !1;
  if (a && (a = w || i), x !== 1 && Et !== n || (g = _t === n || ki === n ? t : t + 1, b = e.position - e.lineStart, x === 1 ? a && (Ai(e, b) || function(l, _, m) {
    var h, y, k, S, N, v, I, $ = l.tag, O = l.anchor, P = {}, K = /* @__PURE__ */ Object.create(null), X = null, J = null, V = null, D = !1, le = !1;
    if (l.firstTabInLine !== -1)
      return !1;
    for (l.anchor !== null && (l.anchorMap[l.anchor] = P), I = l.input.charCodeAt(l.position); I !== 0; ) {
      if (D || l.firstTabInLine === -1 || (l.position = l.firstTabInLine, T(l, "tab characters must not be used in indentation")), h = l.input.charCodeAt(l.position + 1), k = l.line, I !== 63 && I !== 58 || !se(h)) {
        if (S = l.line, N = l.lineStart, v = l.position, !Fe(l, m, ki, !1, !0))
          break;
        if (l.line === k) {
          for (I = l.input.charCodeAt(l.position); Se(I); )
            I = l.input.charCodeAt(++l.position);
          if (I === 58)
            se(I = l.input.charCodeAt(++l.position)) || T(l, "a whitespace character is expected after the key-value separator within a block mapping"), D && (ze(l, P, K, X, J, null, S, N, v), X = J = V = null), le = !0, D = !1, y = !1, X = l.tag, J = l.result;
          else {
            if (!le)
              return l.tag = $, l.anchor = O, !0;
            T(l, "can not read an implicit mapping pair; a colon is missed");
          }
        } else {
          if (!le)
            return l.tag = $, l.anchor = O, !0;
          T(l, "can not read a block mapping entry; a multiline key may not be an implicit key");
        }
      } else
        I === 63 ? (D && (ze(l, P, K, X, J, null, S, N, v), X = J = V = null), le = !0, D = !0, y = !0) : D ? (D = !1, y = !0) : T(l, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), l.position += 1, I = h;
      if ((l.line === k || l.lineIndent > _) && (D && (S = l.line, N = l.lineStart, v = l.position), Fe(l, _, Et, !0, y) && (D ? J = l.result : V = l.result), D || (ze(l, P, K, X, J, V, S, N, v), X = J = V = null), Q(l, !0, -1), I = l.input.charCodeAt(l.position)), (l.line === k || l.lineIndent > _) && I !== 0)
        T(l, "bad indentation of a mapping entry");
      else if (l.lineIndent < _)
        break;
    }
    return D && ze(l, P, K, X, J, null, S, N, v), le && (l.tag = $, l.anchor = O, l.kind = "mapping", l.result = P), le;
  }(e, b, g)) || function(l, _) {
    var m, h, y, k, S, N, v, I, $, O, P, K, X = !0, J = l.tag, V = l.anchor, D = /* @__PURE__ */ Object.create(null);
    if ((K = l.input.charCodeAt(l.position)) === 91)
      S = 93, I = !1, k = [];
    else {
      if (K !== 123)
        return !1;
      S = 125, I = !0, k = {};
    }
    for (l.anchor !== null && (l.anchorMap[l.anchor] = k), K = l.input.charCodeAt(++l.position); K !== 0; ) {
      if (Q(l, !0, _), (K = l.input.charCodeAt(l.position)) === S)
        return l.position++, l.tag = J, l.anchor = V, l.kind = I ? "mapping" : "sequence", l.result = k, !0;
      X ? K === 44 && T(l, "expected the node content, but found ','") : T(l, "missed comma between flow collection entries"), P = null, N = v = !1, K === 63 && se(l.input.charCodeAt(l.position + 1)) && (N = v = !0, l.position++, Q(l, !0, _)), m = l.line, h = l.lineStart, y = l.position, Fe(l, _, _t, !1, !0), O = l.tag, $ = l.result, Q(l, !0, _), K = l.input.charCodeAt(l.position), !v && l.line !== m || K !== 58 || (N = !0, K = l.input.charCodeAt(++l.position), Q(l, !0, _), Fe(l, _, _t, !1, !0), P = l.result), I ? ze(l, k, D, O, $, P, m, h, y) : N ? k.push(ze(l, null, D, O, $, P, m, h, y)) : k.push($), Q(l, !0, _), (K = l.input.charCodeAt(l.position)) === 44 ? (X = !0, K = l.input.charCodeAt(++l.position)) : X = !1;
    }
    T(l, "unexpected end of the stream within a flow collection");
  }(e, g) ? M = !0 : (s && function(l, _) {
    var m, h, y, k, S, N = nn, v = !1, I = !1, $ = _, O = 0, P = !1;
    if ((k = l.input.charCodeAt(l.position)) === 124)
      h = !1;
    else {
      if (k !== 62)
        return !1;
      h = !0;
    }
    for (l.kind = "scalar", l.result = ""; k !== 0; )
      if ((k = l.input.charCodeAt(++l.position)) === 43 || k === 45)
        nn === N ? N = k === 43 ? wi : Bs : T(l, "repeat of a chomping mode identifier");
      else {
        if (!((y = 48 <= (S = k) && S <= 57 ? S - 48 : -1) >= 0))
          break;
        y === 0 ? T(l, "bad explicit indentation width of a block scalar; it cannot be less than one") : I ? T(l, "repeat of an indentation width identifier") : ($ = _ + y - 1, I = !0);
      }
    if (Se(k)) {
      do
        k = l.input.charCodeAt(++l.position);
      while (Se(k));
      if (k === 35)
        do
          k = l.input.charCodeAt(++l.position);
        while (!fe(k) && k !== 0);
    }
    for (; k !== 0; ) {
      for (Cn(l), l.lineIndent = 0, k = l.input.charCodeAt(l.position); (!I || l.lineIndent < $) && k === 32; )
        l.lineIndent++, k = l.input.charCodeAt(++l.position);
      if (!I && l.lineIndent > $ && ($ = l.lineIndent), fe(k))
        O++;
      else {
        if (l.lineIndent < $) {
          N === wi ? l.result += oe.repeat(`
`, v ? 1 + O : O) : N === nn && v && (l.result += `
`);
          break;
        }
        for (h ? Se(k) ? (P = !0, l.result += oe.repeat(`
`, v ? 1 + O : O)) : P ? (P = !1, l.result += oe.repeat(`
`, O + 1)) : O === 0 ? v && (l.result += " ") : l.result += oe.repeat(`
`, O) : l.result += oe.repeat(`
`, v ? 1 + O : O), v = !0, I = !0, O = 0, m = l.position; !fe(k) && k !== 0; )
          k = l.input.charCodeAt(++l.position);
        _e(l, m, l.position, !1);
      }
    }
    return !0;
  }(e, g) || function(l, _) {
    var m, h, y;
    if ((m = l.input.charCodeAt(l.position)) !== 39)
      return !1;
    for (l.kind = "scalar", l.result = "", l.position++, h = y = l.position; (m = l.input.charCodeAt(l.position)) !== 0; )
      if (m === 39) {
        if (_e(l, h, l.position, !0), (m = l.input.charCodeAt(++l.position)) !== 39)
          return !0;
        h = l.position, l.position++, y = l.position;
      } else
        fe(m) ? (_e(l, h, y, !0), rn(l, Q(l, !1, _)), h = y = l.position) : l.position === l.lineStart && Ct(l) ? T(l, "unexpected end of the document within a single quoted scalar") : (l.position++, y = l.position);
    T(l, "unexpected end of the stream within a single quoted scalar");
  }(e, g) || function(l, _) {
    var m, h, y, k, S, N, v;
    if ((N = l.input.charCodeAt(l.position)) !== 34)
      return !1;
    for (l.kind = "scalar", l.result = "", l.position++, m = h = l.position; (N = l.input.charCodeAt(l.position)) !== 0; ) {
      if (N === 34)
        return _e(l, m, l.position, !0), l.position++, !0;
      if (N === 92) {
        if (_e(l, m, l.position, !0), fe(N = l.input.charCodeAt(++l.position)))
          Q(l, !1, _);
        else if (N < 256 && _r[N])
          l.result += $r[N], l.position++;
        else if ((S = (v = N) === 120 ? 2 : v === 117 ? 4 : v === 85 ? 8 : 0) > 0) {
          for (y = S, k = 0; y > 0; y--)
            (S = Hs(N = l.input.charCodeAt(++l.position))) >= 0 ? k = (k << 4) + S : T(l, "expected hexadecimal character");
          l.result += Us(k), l.position++;
        } else
          T(l, "unknown escape sequence");
        m = h = l.position;
      } else
        fe(N) ? (_e(l, m, h, !0), rn(l, Q(l, !1, _)), m = h = l.position) : l.position === l.lineStart && Ct(l) ? T(l, "unexpected end of the document within a double quoted scalar") : (l.position++, h = l.position);
    }
    T(l, "unexpected end of the stream within a double quoted scalar");
  }(e, g) ? M = !0 : function(l) {
    var _, m, h;
    if ((h = l.input.charCodeAt(l.position)) !== 42)
      return !1;
    for (h = l.input.charCodeAt(++l.position), _ = l.position; h !== 0 && !se(h) && !De(h); )
      h = l.input.charCodeAt(++l.position);
    return l.position === _ && T(l, "name of an alias node must contain at least one character"), m = l.input.slice(_, l.position), Ee.call(l.anchorMap, m) || T(l, 'unidentified alias "' + m + '"'), l.result = l.anchorMap[m], Q(l, !0, -1), !0;
  }(e) ? (M = !0, e.tag === null && e.anchor === null || T(e, "alias node should not have any properties")) : function(l, _, m) {
    var h, y, k, S, N, v, I, $, O = l.kind, P = l.result;
    if (se($ = l.input.charCodeAt(l.position)) || De($) || $ === 35 || $ === 38 || $ === 42 || $ === 33 || $ === 124 || $ === 62 || $ === 39 || $ === 34 || $ === 37 || $ === 64 || $ === 96 || ($ === 63 || $ === 45) && (se(h = l.input.charCodeAt(l.position + 1)) || m && De(h)))
      return !1;
    for (l.kind = "scalar", l.result = "", y = k = l.position, S = !1; $ !== 0; ) {
      if ($ === 58) {
        if (se(h = l.input.charCodeAt(l.position + 1)) || m && De(h))
          break;
      } else if ($ === 35) {
        if (se(l.input.charCodeAt(l.position - 1)))
          break;
      } else {
        if (l.position === l.lineStart && Ct(l) || m && De($))
          break;
        if (fe($)) {
          if (N = l.line, v = l.lineStart, I = l.lineIndent, Q(l, !1, -1), l.lineIndent >= _) {
            S = !0, $ = l.input.charCodeAt(l.position);
            continue;
          }
          l.position = k, l.line = N, l.lineStart = v, l.lineIndent = I;
          break;
        }
      }
      S && (_e(l, y, k, !1), rn(l, l.line - N), y = k = l.position, S = !1), Se($) || (k = l.position + 1), $ = l.input.charCodeAt(++l.position);
    }
    return _e(l, y, k, !1), !!l.result || (l.kind = O, l.result = P, !1);
  }(e, g, _t === n) && (M = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : x === 0 && (M = a && Ai(e, b))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && T(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), c = 0, u = e.implicitTypes.length; c < u; c += 1)
      if ((d = e.implicitTypes[c]).resolve(e.result)) {
        e.result = d.construct(e.result), e.tag = d.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (Ee.call(e.typeMap[e.kind || "fallback"], e.tag))
      d = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (d = null, c = 0, u = (p = e.typeMap.multi[e.kind || "fallback"]).length; c < u; c += 1)
        if (e.tag.slice(0, p[c].tag.length) === p[c].tag) {
          d = p[c];
          break;
        }
    d || T(e, "unknown tag !<" + e.tag + ">"), e.result !== null && d.kind !== e.kind && T(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + d.kind + '", not "' + e.kind + '"'), d.resolve(e.result, e.tag) ? (e.result = d.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : T(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || M;
}
function Ws(e) {
  var t, n, r, i, o = e.position, s = !1;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (i = e.input.charCodeAt(e.position)) !== 0 && (Q(e, !0, -1), i = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || i !== 37)); ) {
    for (s = !0, i = e.input.charCodeAt(++e.position), t = e.position; i !== 0 && !se(i); )
      i = e.input.charCodeAt(++e.position);
    for (r = [], (n = e.input.slice(t, e.position)).length < 1 && T(e, "directive name must not be less than one character in length"); i !== 0; ) {
      for (; Se(i); )
        i = e.input.charCodeAt(++e.position);
      if (i === 35) {
        do
          i = e.input.charCodeAt(++e.position);
        while (i !== 0 && !fe(i));
        break;
      }
      if (fe(i))
        break;
      for (t = e.position; i !== 0 && !se(i); )
        i = e.input.charCodeAt(++e.position);
      r.push(e.input.slice(t, e.position));
    }
    i !== 0 && Cn(e), Ee.call(_i, n) ? _i[n](e, n, r) : Ot(e, 'unknown document directive "' + n + '"');
  }
  Q(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, Q(e, !0, -1)) : s && T(e, "directives end mark is expected"), Fe(e, e.lineIndent - 1, Et, !1, !0), Q(e, !0, -1), e.checkLineBreaks && Ps.test(e.input.slice(o, e.position)) && Ot(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Ct(e) ? e.input.charCodeAt(e.position) === 46 && (e.position += 3, Q(e, !0, -1)) : e.position < e.length - 1 && T(e, "end of the stream or a document separator is expected");
}
function Ei(e, t) {
  t = t || {}, (e = String(e)).length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var n = new Zs(e, t), r = e.indexOf("\0");
  for (r !== -1 && (n.position = r, T(n, "null byte is not allowed in input")), n.input += "\0"; n.input.charCodeAt(n.position) === 32; )
    n.lineIndent += 1, n.position += 1;
  for (; n.position < n.length - 1; )
    Ws(n);
  return n.documents;
}
var Ks = function(e, t) {
  var n = Ei(e, t);
  if (n.length !== 0) {
    if (n.length === 1)
      return n[0];
    throw new ye("expected a single document in the stream, but found more");
  }
};
const Gs = [function(e) {
  if (typeof e == "function" && (e = { highlight: e }), !e || typeof e.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof e.langPrefix != "string" && (e.langPrefix = "language-"), { async: !!e.async, walkTokens(t) {
    if (t.type !== "code")
      return;
    const n = li(t.lang);
    if (e.async)
      return Promise.resolve(e.highlight(t.text, n, t.lang || "")).then(ci(t));
    const r = e.highlight(t.text, n, t.lang || "");
    if (r instanceof Promise)
      throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
    ci(t)(r);
  }, useNewRenderer: !0, renderer: { code({ text: t, lang: n, escaped: r }) {
    const i = li(n), o = i ? ` class="${e.langPrefix}${pi(i)}"` : "";
    return t = t.replace(/\n$/, ""), `<pre><code${o}>${r ? t : pi(t, !0)}
</code></pre>`;
  } } };
}({ langPrefix: "hljs language-", highlight(e, t, n) {
  if (t && de.getLanguage(t))
    try {
      return de.highlight(e, { language: t, ignoreIllegals: !0 }).value;
    } catch {
    }
  return de.highlightAuto(e).value;
} }), function(e = {}) {
  const { className: t = "markdown-alert", variants: n = [] } = e, r = function(i) {
    return i.length ? Object.values([...di, ...i].reduce((o, s) => (o[s.type] = s, o), {})) : di;
  }(n);
  return { walkTokens(i) {
    var s, a, c, u;
    if (i.type !== "blockquote")
      return;
    const o = r.find(({ type: p }) => new RegExp(hi(p)).test(i.text));
    if (o) {
      const { type: p, icon: d, title: g = as(p), titleClassName: b = `${t}-title` } = o;
      Object.assign(i, { type: "alert", meta: { className: t, variant: p, icon: d, title: g, titleClassName: b } });
      const x = (s = i.tokens) == null ? void 0 : s[0], w = (a = x.raw) == null ? void 0 : a.replace(new RegExp(hi(p)), "").trim();
      w ? (x.tokens = this.Lexer.lexInline(w), (c = i.tokens) == null || c.splice(0, 1, x)) : (u = i.tokens) == null || u.shift();
    }
  }, extensions: [{ name: "alert", level: "block", renderer({ meta: i, tokens: o = [] }) {
    let s = `<div class="${i.className} ${i.className}-${i.variant}">
`;
    return s += `<p class="${i.titleClassName}">`, s += i.icon, s += i.title, s += `</p>
`, s += this.parser.parse(o), s += `</div>
`, s;
  } }] };
}(), function(e = {}) {
  let t = { nodeName: "div", className: "admonition", title: { nodeName: "p" }, ...e };
  return { extensions: [{ name: "admonition", level: "block", start(n) {
    var i;
    return (i = n.match(new RegExp(`(^|[\\r\\n])!!!\\s+(${xr.join("|")})(?:\\s+)?(.*)`))) == null ? void 0 : i.index;
  }, tokenizer(n, r) {
    const i = n.split(/\n/);
    if (Yt.test(i[0])) {
      const o = { x: -1, y: -1 }, s = [];
      for (let a = 0, c = i.length; a < c; a++)
        Yt.test(i[a]) ? o.x = a : cs.test(i[a]) && (o.y = a, o.x >= 0 && (s.push({ ...o }), o.x = -1, o.y = -1));
      if (s.length) {
        const a = s[0], [c, u, p] = Yt.exec(i[a.x]) || [], d = i.slice(a.x + 1, a.y).join(`
`), g = { type: "admonition", raw: i.slice(a.x, a.y + 1).join(`
`), icon: u, title: p, text: d, titleTokens: [], tokens: [], childTokens: ["title", "text"] };
        return this.lexer.inlineTokens(g.title, g.titleTokens), this.lexer.blockTokens(g.text, g.tokens), g;
      }
    }
  }, renderer(n) {
    return `<${t.nodeName} class="${t.className} ${t.className}-${n.icon}">
        <${t.title.nodeName} class="${t.className}-title">${this.parser.parseInline(n.titleTokens, null)}</${t.title.nodeName}>
        ${this.parser.parse(n.tokens)}
        </${t.nodeName}>`;
  } }] };
}(), function(e) {
  if (!(e = { ...us, ...e }).emojis)
    throw new Error("Must provide emojis to markedEmoji");
  const t = Object.keys(e.emojis).map((i) => i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), n = new RegExp(`:(${t}):`), r = new RegExp(`^${n.source}`);
  return { extensions: [{ name: "emoji", level: "inline", start: (i) => {
    var o;
    return (o = i.match(n)) == null ? void 0 : o.index;
  }, tokenizer(i, o) {
    const s = r.exec(i);
    if (!s)
      return;
    const a = s[1];
    let c = e.emojis[a], u = e.renderer ? void 0 : e.unicode;
    if (typeof c != "string" && !e.renderer)
      if (typeof c.char == "string")
        c = c.char, u = !0;
      else {
        if (typeof c.url != "string")
          return;
        c = c.url, u = !1;
      }
    return { type: "emoji", raw: s[0], name: a, emoji: c, unicode: u };
  }, renderer: (i) => e.renderer ? e.renderer(i) : i.unicode ? i.emoji : `<img alt="${i.name}" src="${i.emoji}" class="marked-emoji-img">` }] };
}()], Js = { baseUrl: null, breaks: !1, gfm: !0, headerIds: !0, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: !0, pedantic: !1, renderer: null, sanitize: !1, sanitizer: null, silent: !1, smartLists: !1, smartypants: !1, tokenizer: null, xhtml: !1 }, Xs = async (e, t = [], n = !1, r = {}) => {
  let i = new dr().use(...Gs, ...t);
  return (Qt("mathjax") || r.mathjax) && i.use((window.renderMathJax = gi, { async: !0, async walkTokens(o) {
    if (o.type !== "text" || !o.raw || !o.raw.match(br))
      return;
    let s = await gi(o.raw);
    Object.assign(o, { type: "mathjaxext", meta: { renderedStr: s } });
  }, extensions: [{ name: "mathjaxext", level: "block", renderer: ({ meta: o, tokens: s = [] }) => `<p>${o.renderedStr}</p>` }] })), (Qt("graph") || r.graph) && i.use(ls()), (Qt("diagram") || r.diagram) && i.use(ps()), n ? await i.parseInline(e) : await i.parse(e);
}, Qs = (e) => ({}), Ci = (e) => ({});
function Ni(e) {
  let t, n, r;
  return { c() {
    t = U("button"), t.innerHTML = '<span class="material-symbols-outlined">print</span>';
  }, m(i, o) {
    pe(i, t, o), n || (r = $t(t, "click", e[14]), n = !0);
  }, p: ue, d(i) {
    i && ae(t), n = !1, r();
  } };
}
function Ys(e) {
  let t, n, r, i, o, s;
  const a = e[13].slotHead, c = function(u, p, d, g) {
    if (u) {
      const b = Tn(u, p, d, g);
      return u[0](b);
    }
  }(a, e, e[12], Ci);
  return { c() {
    t = U("div"), c && c.c(), n = ne(), r = new Li(!1), i = ne(), o = U("style"), o.innerHTML = "", r.a = i, R(t, "class", "uie-prose uie-max-w-full uie-w-full uie-h-full uie-overflow-scroll uie-flex uie-flex-col uie-mx-auto uie-bg-white uie-text-black dark:uie-bg-gray-900 dark:uie-text-[#E7E7E7] uie-text-wrap}"), Ue(t, "uie-shadow-lg", e[2]), Ue(t, "uie-inline", e[0]);
  }, m(u, p) {
    pe(u, t, p), c && c.m(t, null), L(t, n), r.m(e[3], t), L(t, i), L(t, o), e[17](o), e[18](t), s = !0;
  }, p(u, p) {
    c && c.p && (!s || 4096 & p) && function(d, g, b, x, w, M) {
      if (w) {
        const l = Tn(g, b, x, M);
        d.p(l, w);
      }
    }(c, a, u, u[12], s ? function(d, g, b, x) {
      if (d[2] && x) {
        const w = d[2](x(b));
        if (g.dirty === void 0)
          return w;
        if (typeof w == "object") {
          const M = [], l = Math.max(g.dirty.length, w.length);
          for (let _ = 0; _ < l; _ += 1)
            M[_] = g.dirty[_] | w[_];
          return M;
        }
        return g.dirty | w;
      }
      return g.dirty;
    }(a, u[12], p, Qs) : function(d) {
      if (d.ctx.length > 32) {
        const g = [], b = d.ctx.length / 32;
        for (let x = 0; x < b; x++)
          g[x] = -1;
        return g;
      }
      return -1;
    }(u[12]), Ci), (!s || 8 & p) && r.p(u[3]), (!s || 4 & p) && Ue(t, "uie-shadow-lg", u[2]), (!s || 1 & p) && Ue(t, "uie-inline", u[0]);
  }, i(u) {
    s || (me(c, u), s = !0);
  }, o(u) {
    Ae(c, u), s = !1;
  }, d(u) {
    u && ae(t), c && c.d(u), e[17](null), e[18](null);
  } };
}
function Vs(e) {
  let t, n, r, i;
  return { c() {
    t = U("div"), n = new Li(!1), r = ne(), i = U("style"), i.innerHTML = "", n.a = r, R(t, "class", "uie-prose uie-max-w-full uie-w-full uie-h-full uie-overflow-scroll uie-inline uie-mx-auto uie-bg-white uie-text-black dark:uie-bg-gray-900 dark:uie-text-[#E7E7E7] uie-text-wrap}"), Ue(t, "uie-shadow-lg", e[2]);
  }, m(o, s) {
    pe(o, t, s), n.m(e[3], t), L(t, r), L(t, i), e[15](i), e[16](t);
  }, p(o, s) {
    8 & s && n.p(o[3]), 4 & s && Ue(t, "uie-shadow-lg", o[2]);
  }, i: ue, o: ue, d(o) {
    o && ae(t), e[15](null), e[16](null);
  } };
}
function ea(e) {
  let t, n, r, i, o, s = e[1] && Ni(e);
  const a = [Vs, Ys], c = [];
  function u(p, d) {
    return p[0] ? 0 : 1;
  }
  return n = u(e), r = c[n] = a[n](e), { c() {
    s && s.c(), t = ne(), r.c(), i = Oi();
  }, m(p, d) {
    s && s.m(p, d), pe(p, t, d), c[n].m(p, d), pe(p, i, d), o = !0;
  }, p(p, [d]) {
    p[1] ? s ? s.p(p, d) : (s = Ni(p), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null);
    let g = n;
    n = u(p), n === g ? c[n].p(p, d) : (Pi(), Ae(c[g], 1, 1, () => {
      c[g] = null;
    }), Di(), r = c[n], r ? r.p(p, d) : (r = c[n] = a[n](p), r.c()), me(r, 1), r.m(i.parentNode, i));
  }, i(p) {
    o || (me(r), o = !0);
  }, o(p) {
    Ae(r), o = !1;
  }, d(p) {
    p && (ae(t), ae(i)), s && s.d(p), c[n].d(p);
  } };
}
function ta(e, t, n) {
  let r, i, { $$slots: o = {}, $$scope: s } = t, { source: a = "" } = t, { options: c = {} } = t, { extensions: u = [] } = t, { inline: p = !1 } = t, { printable: d = !1 } = t;
  const g = fn();
  let b, x, { theme: w = "" } = t, { shadow: M = !1 } = t, l, _;
  const m = async () => {
    const { frontmatter: h, content: y } = ((k) => {
      const S = { frontMatter: {}, content: "" };
      if (!k.startsWith("---"))
        return S.content = k, S;
      const N = k.indexOf(`
---`, 4);
      if (N === -1)
        return S.content = k, S;
      const v = k.slice(4, N);
      try {
        S.frontMatter = Ks(v);
      } catch {
      }
      return S.content = k.slice(N + 4).trim(), S;
    })(a);
    n(3, b = await Xs(y, u, p, c));
  };
  return function(h, y) {
    zt().$$.context.set(h, y);
  }(Lo, { getOptions: () => i }), gn(() => {
    n(10, x = !0);
  }), e.$$set = (h) => {
    "source" in h && n(6, a = h.source), "options" in h && n(7, c = h.options), "extensions" in h && n(8, u = h.extensions), "inline" in h && n(0, p = h.inline), "printable" in h && n(1, d = h.printable), "theme" in h && n(9, w = h.theme), "shadow" in h && n(2, M = h.shadow), "$$scope" in h && n(12, s = h.$$scope);
  }, e.$$.update = () => {
    528 & e.$$.dirty && _ && w && ((h, y) => {
      try {
        h.innerHTML = y;
      } catch {
        h.styleSheet.cssText = y;
      }
      document.getElementsByTagName("head")[0].appendChild(h);
    })(_, w), 64 & e.$$.dirty && n(11, r = Array.isArray(a)), 128 & e.$$.dirty && (i = { ...Js, ...c }), 2112 & e.$$.dirty && (r ? n(3, b = a) : m()), 3080 & e.$$.dirty && x && !r && g("parsed", { tokens: b });
  }, [p, d, M, b, _, l, a, c, u, w, x, r, s, o, () => {
    if (!l)
      return;
    const h = document.body.innerHTML;
    document.body.innerHTML = l.outerHTML;
    const y = document.getElementsByTagName("p");
    for (let k = y.length - 1; k >= 0; k--) {
      const S = y[k];
      S.innerHTML.trim() === "" && S.parentNode.removeChild(S);
    }
    window.print(), document.body.innerHTML = h;
  }, function(h) {
    be[h ? "unshift" : "push"](() => {
      _ = h, n(4, _);
    });
  }, function(h) {
    be[h ? "unshift" : "push"](() => {
      l = h, n(5, l);
    });
  }, function(h) {
    be[h ? "unshift" : "push"](() => {
      _ = h, n(4, _);
    });
  }, function(h) {
    be[h ? "unshift" : "push"](() => {
      l = h, n(5, l);
    });
  }];
}
class na extends at {
  constructor(t) {
    super(), st(this, t, ta, ea, rt, { source: 6, options: 7, extensions: 8, inline: 0, printable: 1, theme: 9, shadow: 2 });
  }
}
function Er(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = Er(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function ia(e) {
  let t, n, r, i, o, s, a, c, u, p, d, g, b, x, w, M, l, _, m, h, y, k, S, N;
  return { c() {
    t = U("div"), n = U("button"), n.innerHTML = '<span class="uie-sr-only">Preview</span> <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="uie-w-4 uie-h-4"><path fill="currentColor" d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5c-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1M12.22 17c-4.31.1-7.12-3.59-8-5c1-1.61 3.61-4.9 7.61-5c4.29-.11 7.11 3.59 8 5c-1.03 1.61-3.61 4.9-7.61 5"></path><path fill="currentColor" d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5m0 5a1.5 1.5 0 1 1 1.5-1.5a1.5 1.5 0 0 1-1.5 1.5"></path></svg>', r = ne(), i = U("button"), i.innerHTML = '<span class="uie-sr-only">Bold</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uie-w-4 uie-h-4"><path d="M14 12a4 4 0 0 0 0-8H6v8"></path><path d="M15 20a4 4 0 0 0 0-8H6v8Z"></path></svg>', o = ne(), s = U("button"), s.innerHTML = '<span class="uie-sr-only">Italic</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uie-w-4 uie-h-4"><line x1="19" x2="10" y1="4" y2="4"></line><line x1="14" x2="5" y1="20" y2="20"></line><line x1="15" x2="9" y1="4" y2="20"></line></svg>', a = ne(), c = U("button"), c.innerHTML = '<span class="uie-sr-only">Underline</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uie-w-4 uie-h-4"><path d="M6 4v6a6 6 0 0 0 12 0V4"></path><line x1="4" x2="20" y1="20" y2="20"></line></svg>', u = ne(), p = U("button"), p.innerHTML = '<span class="uie-sr-only">Left Align</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uie-w-4 uie-h-4"><line x1="21" x2="3" y1="6" y2="6"></line><line x1="15" x2="3" y1="12" y2="12"></line><line x1="17" x2="3" y1="18" y2="18"></line></svg>', d = ne(), g = U("button"), g.innerHTML = '<span class="uie-sr-only">Center Align</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uie-w-4 uie-h-4"><line x1="21" x2="3" y1="6" y2="6"></line><line x1="17" x2="7" y1="12" y2="12"></line><line x1="19" x2="5" y1="18" y2="18"></line></svg>', b = ne(), x = U("button"), x.innerHTML = '<span class="uie-sr-only">Right Align</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uie-w-4 uie-h-4"><line x1="21" x2="3" y1="6" y2="6"></line><line x1="21" x2="9" y1="12" y2="12"></line><line x1="21" x2="7" y1="18" y2="18"></line></svg>', w = ne(), M = U("button"), M.innerHTML = '<span class="uie-sr-only">Bulleted List</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uie-w-4 uie-h-4"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg>', l = ne(), _ = U("button"), _.innerHTML = '<span class="uie-sr-only">Add Link</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uie-w-4 uie-h-4"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>', m = ne(), h = U("button"), h.innerHTML = '<span class="uie-sr-only">Image</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uie-w-4 uie-h-4"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>', y = ne(), k = U("button"), k.innerHTML = '<span class="uie-sr-only">Emoji</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="uie-w-4 uie-h-4"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>', R(n, "class", "uie-inline-flex uie-items-center uie-justify-center uie-rounded-md uie-text-sm uie-font-medium uie-ring-offset-background uie-transition-colors uie-focus-visible:outline-none uie-focus-visible:ring-2 uie-focus-visible:ring-ring uie-focus-visible:ring-offset-2 uie-disabled:pointer-events-none uie-disabled:opacity-50 uie-hover:bg-accent uie-hover:text-accent-foreground uie-h-10 uie-px-4 uie-py-2 uie-text-gray-600 dark:uie-text-gray-400"), R(i, "class", "uie-inline-flex uie-items-center uie-justify-center uie-rounded-md uie-text-sm uie-font-medium uie-ring-offset-background uie-transition-colors uie-focus-visible:outline-none uie-focus-visible:ring-2 uie-focus-visible:ring-ring uie-focus-visible:ring-offset-2 uie-disabled:pointer-events-none uie-disabled:opacity-50 uie-hover:bg-accent uie-hover:text-accent-foreground uie-h-10 uie-px-4 uie-py-2 uie-text-gray-600 dark:uie-text-gray-400"), R(s, "class", "uie-inline-flex uie-items-center uie-justify-center uie-rounded-md uie-text-sm uie-font-medium uie-ring-offset-background uie-transition-colors uie-focus-visible:outline-none uie-focus-visible:ring-2 uie-focus-visible:ring-ring uie-focus-visible:ring-offset-2 uie-disabled:pointer-events-none uie-disabled:opacity-50 uie-hover:bg-accent uie-hover:text-accent-foreground uie-h-10 uie-px-4 uie-py-2 uie-text-gray-600 dark:uie-text-gray-400"), R(c, "class", "uie-inline-flex uie-items-center uie-justify-center uie-rounded-md uie-text-sm uie-font-medium uie-ring-offset-background uie-transition-colors uie-focus-visible:outline-none uie-focus-visible:ring-2 uie-focus-visible:ring-ring uie-focus-visible:ring-offset-2 uie-disabled:pointer-events-none uie-disabled:opacity-50 uie-hover:bg-accent uie-hover:text-accent-foreground uie-h-10 uie-px-4 uie-py-2 uie-text-gray-600 dark:uie-text-gray-400"), R(p, "class", "uie-inline-flex uie-items-center uie-justify-center uie-rounded-md uie-text-sm uie-font-medium uie-ring-offset-background uie-transition-colors uie-focus-visible:outline-none uie-focus-visible:ring-2 uie-focus-visible:ring-ring uie-focus-visible:ring-offset-2 uie-disabled:pointer-events-none uie-disabled:opacity-50 uie-hover:bg-accent uie-hover:text-accent-foreground uie-h-10 uie-px-4 uie-py-2 uie-text-gray-600 dark:uie-text-gray-400"), R(g, "class", "uie-inline-flex uie-items-center uie-justify-center uie-rounded-md uie-text-sm uie-font-medium uie-ring-offset-background uie-transition-colors uie-focus-visible:outline-none uie-focus-visible:ring-2 uie-focus-visible:ring-ring uie-focus-visible:ring-offset-2 uie-disabled:pointer-events-none uie-disabled:opacity-50 uie-hover:bg-accent uie-hover:text-accent-foreground uie-h-10 uie-px-4 uie-py-2 uie-text-gray-600 dark:uie-text-gray-400"), R(x, "class", "uie-inline-flex uie-items-center uie-justify-center uie-rounded-md uie-text-sm uie-font-medium uie-ring-offset-background uie-transition-colors uie-focus-visible:outline-none uie-focus-visible:ring-2 uie-focus-visible:ring-ring uie-focus-visible:ring-offset-2 uie-disabled:pointer-events-none uie-disabled:opacity-50 uie-hover:bg-accent uie-hover:text-accent-foreground uie-h-10 uie-px-4 uie-py-2 uie-text-gray-600 dark:uie-text-gray-400"), R(M, "class", "uie-inline-flex uie-items-center uie-justify-center uie-rounded-md uie-text-sm uie-font-medium uie-ring-offset-background uie-transition-colors uie-focus-visible:outline-none uie-focus-visible:ring-2 uie-focus-visible:ring-ring uie-focus-visible:ring-offset-2 uie-disabled:pointer-events-none uie-disabled:opacity-50 uie-hover:bg-accent uie-hover:text-accent-foreground uie-h-10 uie-px-4 uie-py-2 uie-text-gray-600 dark:uie-text-gray-400"), R(_, "class", "uie-inline-flex uie-items-center uie-justify-center uie-rounded-md uie-text-sm uie-font-medium uie-ring-offset-background uie-transition-colors uie-focus-visible:outline-none uie-focus-visible:ring-2 uie-focus-visible:ring-ring uie-focus-visible:ring-offset-2 uie-disabled:pointer-events-none uie-disabled:opacity-50 uie-hover:bg-accent uie-hover:text-accent-foreground uie-h-10 uie-px-4 uie-py-2 uie-text-gray-600 dark:uie-text-gray-400"), R(h, "class", "uie-inline-flex uie-items-center uie-justify-center uie-rounded-md uie-text-sm uie-font-medium uie-ring-offset-background uie-transition-colors uie-focus-visible:outline-none uie-focus-visible:ring-2 uie-focus-visible:ring-ring uie-focus-visible:ring-offset-2 uie-disabled:pointer-events-none uie-disabled:opacity-50 uie-hover:bg-accent uie-hover:text-accent-foreground uie-h-10 uie-px-4 uie-py-2 uie-text-gray-600 dark:uie-text-gray-400"), R(k, "class", "uie-inline-flex uie-items-center uie-justify-center uie-rounded-md uie-text-sm uie-font-medium uie-ring-offset-background uie-transition-colors uie-focus-visible:outline-none uie-focus-visible:ring-2 uie-focus-visible:ring-ring uie-focus-visible:ring-offset-2 uie-disabled:pointer-events-none uie-disabled:opacity-50 uie-hover:bg-accent uie-hover:text-accent-foreground uie-h-10 uie-px-4 uie-py-2 uie-text-gray-600 dark:uie-text-gray-400"), R(t, "class", "uie-flex uie-max-h-full uie-space-x-2 uie-p-2 uie-border-b uie-border-gray-200 dark:uie-border-gray-800");
  }, m(v, I) {
    pe(v, t, I), L(t, n), L(t, r), L(t, i), L(t, o), L(t, s), L(t, a), L(t, c), L(t, u), L(t, p), L(t, d), L(t, g), L(t, b), L(t, x), L(t, w), L(t, M), L(t, l), L(t, _), L(t, m), L(t, h), L(t, y), L(t, k), S || (N = [$t(n, "click", e[1]), $t(i, "click", e[2]), $t(s, "click", e[3])], S = !0);
  }, p: ue, i: ue, o: ue, d(v) {
    v && ae(t), S = !1, We(N);
  } };
}
function ra(e) {
  const t = fn();
  return [t, (n) => {
    t("preview", n);
  }, (n) => {
    t("bold", n);
  }, (n) => {
    t("italic", n);
  }];
}
class oa extends at {
  constructor(t) {
    super(), st(this, t, ra, ia, rt, {});
  }
}
function Si(e) {
  let t, n, r;
  return n = new na({ props: { theme: e[1], source: e[2] } }), { c() {
    t = U("div"), an(n.$$.fragment), R(t, "class", "uie-w-1/2 uie-flex-1");
  }, m(i, o) {
    pe(i, t, o), St(n, t, null), r = !0;
  }, p(i, o) {
    const s = {};
    2 & o && (s.theme = i[1]), 4 & o && (s.source = i[2]), n.$set(s);
  }, i(i) {
    r || (me(n.$$.fragment, i), r = !0);
  }, o(i) {
    Ae(n.$$.fragment, i), r = !1;
  }, d(i) {
    i && ae(t), Tt(n);
  } };
}
function sa(e) {
  let t, n, r, i, o, s, a, c, u, p;
  n = new oa({}), n.$on("preview", e[9]), n.$on("bold", e[10]), n.$on("italic", e[11]), n.$on("theme", e[12]);
  let d = { value: e[2] };
  s = new Zi({ props: d }), e[13](s), s.$on("change", e[14]);
  let g = e[0] && Si(e);
  return { c() {
    t = U("div"), an(n.$$.fragment), r = ne(), i = U("div"), o = U("div"), an(s.$$.fragment), c = ne(), g && g.c(), R(o, "class", a = (e[0] ? "uie-w-1/2" : "uie-w-full") + " uie-flex-1"), R(i, "class", "uie-flex uie-w-full uie-h-full uie-max-h-[800px] uie-overflow-scroll"), R(t, "class", u = e[6]("uie-w-full uie-min-w-[800px] uie-h-full uie-mx-auto uie-bg-white dark:uie-bg-gray-900 uie-shadow-lg uie-rounded-lg uie-overflow-hidden", e[7].class));
  }, m(b, x) {
    pe(b, t, x), St(n, t, null), L(t, r), L(t, i), L(i, o), St(s, o, null), L(i, c), g && g.m(i, null), p = !0;
  }, p(b, [x]) {
    const w = {};
    4 & x && (w.value = b[2]), s.$set(w), (!p || 1 & x && a !== (a = (b[0] ? "uie-w-1/2" : "uie-w-full") + " uie-flex-1")) && R(o, "class", a), b[0] ? g ? (g.p(b, x), 1 & x && me(g, 1)) : (g = Si(b), g.c(), me(g, 1), g.m(i, null)) : g && (Pi(), Ae(g, 1, 1, () => {
      g = null;
    }), Di()), (!p || 128 & x && u !== (u = b[6]("uie-w-full uie-min-w-[800px] uie-h-full uie-mx-auto uie-bg-white dark:uie-bg-gray-900 uie-shadow-lg uie-rounded-lg uie-overflow-hidden", b[7].class))) && R(t, "class", u);
  }, i(b) {
    p || (me(n.$$.fragment, b), me(s.$$.fragment, b), me(g), p = !0);
  }, o(b) {
    Ae(n.$$.fragment, b), Ae(s.$$.fragment, b), Ae(g), p = !1;
  }, d(b) {
    b && ae(t), Tt(n), e[13](null), Tt(s), g && g.d();
  } };
}
function aa(e, t, n) {
  let r, { preview: i = !0 } = t, { theme: o = "purple" } = t, { source: s = `
# 这是一个标题
## 这是2标题
#### 这是4标题

这是一个段落。
* 第一层级
    * 第二层级
    * 第三层级

- [x] 1
- [ ] 2

1. ad
2. das
---

| And this is | A table |
|-------------|---------|
| With two    | columns |

\`\`\`javascript
console.log("helloworld!")
\`\`\`

\`\`\`python
print("helloworld!")
\`\`\`
    ` } = t;
  function a() {
    return r ? r.getSelect() : "";
  }
  function c(u) {
    return r ? r.updateSelect(u) : "";
  }
  return e.$$set = (u) => {
    n(7, t = it(it({}, t), Nt(u))), "preview" in u && n(0, i = u.preview), "theme" in u && n(1, o = u.theme), "source" in u && n(2, s = u.source);
  }, t = Nt(t), [i, o, s, a, c, r, (...u) => function() {
    for (var p, d, g = 0, b = "", x = arguments.length; g < x; g++)
      (p = arguments[g]) && (d = Er(p)) && (b && (b += " "), b += d);
    return b;
  }(u), t, function() {
    n(0, i = !0);
  }, () => {
    n(0, i = !i);
  }, () => {
    c(`**${a()}**`);
  }, () => {
    c(`*${a()}*`);
  }, (u) => {
    n(1, o = u.detail.value || "purple");
  }, function(u) {
    be[u ? "unshift" : "push"](() => {
      r = u, n(5, r);
    });
  }, (u) => {
    u.detail && n(2, s = u.detail);
  }];
}
const ga = { CodeEditor: Zi, CodeTyper: class extends at {
  constructor(e) {
    super(), st(this, e, Oo, jo, rt, { lang: 0, text: 5, url: 6, speed: 7, step: 8, isend: 9, toggle: 10 });
  }
  get toggle() {
    return this.$$.ctx[10];
  }
}, MdEditor: class extends at {
  constructor(e) {
    super(), st(this, e, aa, sa, rt, { preview: 0, theme: 1, source: 2, togglePreview: 8, getSelect: 3, updateSelect: 4 });
  }
  get togglePreview() {
    return this.$$.ctx[8];
  }
  get getSelect() {
    return this.$$.ctx[3];
  }
  get updateSelect() {
    return this.$$.ctx[4];
  }
} };
export {
  ga as models
};
