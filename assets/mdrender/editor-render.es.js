var sr = Object.defineProperty;
var or = (t, e, n) => e in t ? sr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var D = (t, e, n) => (or(t, typeof e != "symbol" ? e + "" : e, n), n), ar = (t, e, n) => {
  if (!e.has(t))
    throw TypeError("Cannot " + n);
};
var he = (t, e, n) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, n);
};
var Kt = (t, e, n) => (ar(t, e, "access private method"), n);
const lr = {};
let Vt, gi = !1, fi = !1, mi = !1;
function Me(t) {
  t == "mathjax" ? gi = !0 : t == "graph" ? fi = !0 : t == "diagram" && (mi = !0);
}
function Ie(t) {
  return t == "mathjax" ? gi : t == "graph" ? fi : t == "diagram" && mi;
}
function gt() {
}
function te(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function bi(t) {
  return t();
}
function hn() {
  return /* @__PURE__ */ Object.create(null);
}
function It(t) {
  t.forEach(bi);
}
function ki(t) {
  return typeof t == "function";
}
function ee(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function dn(t, e, n, i) {
  return t[1] && i ? te(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function gn(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t)
    e.has(i) || i[0] === "$" || (n[i] = t[i]);
  return n;
}
function R(t, e) {
  t.appendChild(e);
}
function Y(t, e, n) {
  t.insertBefore(e, n || null);
}
function Q(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function ne(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function B(t) {
  return document.createElement(t);
}
function Xe(t) {
  return document.createTextNode(t);
}
function X() {
  return Xe(" ");
}
function Ye() {
  return Xe("");
}
function Ct(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function I(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function fn(t, e) {
  t.value = e ?? "";
}
function At(t, e, n) {
  t.classList.toggle(e, !!n);
}
class xi {
  constructor(e = !1) {
    D(this, "is_svg", !1);
    D(this, "e");
    D(this, "n");
    D(this, "t");
    D(this, "a");
    this.is_svg = e, this.e = this.n = null;
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    var r;
    this.e || (this.is_svg ? this.e = (r = n.nodeName, document.createElementNS("http://www.w3.org/2000/svg", r)) : this.e = B(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(e)), this.i(i);
  }
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      Y(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(Q);
  }
}
function Qt(t) {
  Vt = t;
}
function Ze() {
  if (!Vt)
    throw new Error("Function called outside component initialization");
  return Vt;
}
function cr() {
  const t = Ze();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const s = function(o, a, { bubbles: l = !1, cancelable: p = !1 } = {}) {
        return new CustomEvent(o, { detail: a, bubbles: l, cancelable: p });
      }(e, n, { cancelable: i });
      return r.slice().forEach((o) => {
        o.call(t, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
const qt = [], Et = [];
let Ut = [];
const mn = [], ur = Promise.resolve();
let Fe = !1;
function Ke(t) {
  Ut.push(t);
}
const Le = /* @__PURE__ */ new Set();
let jt = 0;
function wi() {
  if (jt !== 0)
    return;
  const t = Vt;
  do {
    try {
      for (; jt < qt.length; ) {
        const e = qt[jt];
        jt++, Qt(e), pr(e.$$);
      }
    } catch (e) {
      throw qt.length = 0, jt = 0, e;
    }
    for (Qt(null), qt.length = 0, jt = 0; Et.length; )
      Et.pop()();
    for (let e = 0; e < Ut.length; e += 1) {
      const n = Ut[e];
      Le.has(n) || (Le.add(n), n());
    }
    Ut.length = 0;
  } while (qt.length);
  for (; mn.length; )
    mn.pop()();
  Fe = !1, Le.clear(), Qt(t);
}
function pr(t) {
  if (t.fragment !== null) {
    t.update(), It(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Ke);
  }
}
const be = /* @__PURE__ */ new Set();
let St;
function Tt() {
  St = { r: 0, c: [], p: St };
}
function Mt() {
  St.r || It(St.c), St = St.p;
}
function H(t, e) {
  t && t.i && (be.delete(t), t.i(e));
}
function W(t, e, n, i) {
  if (t && t.o) {
    if (be.has(t))
      return;
    be.add(t), St.c.push(() => {
      be.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function ct(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function yi(t, e) {
  const n = {}, i = {}, r = { $$scope: 1 };
  let s = t.length;
  for (; s--; ) {
    const o = t[s], a = e[s];
    if (a) {
      for (const l in o)
        l in a || (i[l] = 1);
      for (const l in a)
        r[l] || (n[l] = a[l], r[l] = 1);
      t[s] = a;
    } else
      for (const l in o)
        r[l] = 1;
  }
  for (const o in i)
    o in n || (n[o] = void 0);
  return n;
}
function _i(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function wt(t) {
  t && t.c();
}
function ft(t, e, n) {
  const { fragment: i, after_update: r } = t.$$;
  i && i.m(e, n), Ke(() => {
    const s = t.$$.on_mount.map(bi).filter(ki);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : It(s), t.$$.on_mount = [];
  }), r.forEach(Ke);
}
function mt(t, e) {
  const n = t.$$;
  n.fragment !== null && (function(i) {
    const r = [], s = [];
    Ut.forEach((o) => i.indexOf(o) === -1 ? r.push(o) : s.push(o)), s.forEach((o) => o()), Ut = r;
  }(n.after_update), It(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function hr(t, e) {
  t.$$.dirty[0] === -1 && (qt.push(t), Fe || (Fe = !0, ur.then(wi)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function ie(t, e, n, i, r, s, o = null, a = [-1]) {
  const l = Vt;
  Qt(t);
  const p = t.$$ = { fragment: null, ctx: [], props: s, update: gt, not_equal: r, bound: hn(), on_mount: [], on_destroy: [], on_disconnect: [], before_update: [], after_update: [], context: new Map(e.context || (l ? l.$$.context : [])), callbacks: hn(), dirty: a, skip_bound: !1, root: e.target || l.$$.root };
  o && o(p.root);
  let u = !1;
  if (p.ctx = n ? n(t, e.props || {}, (h, d, ...f) => {
    const g = f.length ? f[0] : d;
    return p.ctx && r(p.ctx[h], p.ctx[h] = g) && (!p.skip_bound && p.bound[h] && p.bound[h](g), u && hr(t, h)), d;
  }) : [], p.update(), u = !0, It(p.before_update), p.fragment = !!i && i(p.ctx), e.target) {
    if (e.hydrate) {
      const h = function(d) {
        return Array.from(d.childNodes);
      }(e.target);
      p.fragment && p.fragment.l(h), h.forEach(Q);
    } else
      p.fragment && p.fragment.c();
    e.intro && H(t.$$.fragment), ft(t, e.target, e.anchor), wi();
  }
  Qt(l);
}
class re {
  constructor() {
    D(this, "$$");
    D(this, "$$set");
  }
  $destroy() {
    mt(this, 1), this.$destroy = gt;
  }
  $on(e, n) {
    if (!ki(n))
      return gt;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  $set(e) {
    var n;
    this.$$set && (n = e, Object.keys(n).length !== 0) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function dr() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add("4");
let Lt = { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
function bn(t) {
  Lt = t;
}
const vi = /[&<>"']/, gr = new RegExp(vi.source, "g"), $i = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, fr = new RegExp($i.source, "g"), mr = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, kn = (t) => mr[t];
function at(t, e) {
  if (e) {
    if (vi.test(t))
      return t.replace(gr, kn);
  } else if ($i.test(t))
    return t.replace(fr, kn);
  return t;
}
const br = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, kr = /(^|[^\[])\^/g;
function F(t, e) {
  let n = typeof t == "string" ? t : t.source;
  e = e || "";
  const i = { replace: (r, s) => {
    let o = typeof s == "string" ? s : s.source;
    return o = o.replace(kr, "$1"), n = n.replace(r, o), i;
  }, getRegex: () => new RegExp(n, e) };
  return i;
}
function xn(t) {
  try {
    t = encodeURI(t).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return t;
}
const Xt = { exec: () => null };
function wn(t, e) {
  const n = t.replace(/\|/g, (s, o, a) => {
    let l = !1, p = o;
    for (; --p >= 0 && a[p] === "\\"; )
      l = !l;
    return l ? "|" : " |";
  }), i = n.split(/ \|/);
  let r = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i[i.length - 1].trim() && i.pop(), e)
    if (i.length > e)
      i.splice(e);
    else
      for (; i.length < e; )
        i.push("");
  for (; r < i.length; r++)
    i[r] = i[r].trim().replace(/\\\|/g, "|");
  return i;
}
function Gt(t, e, n) {
  const i = t.length;
  if (i === 0)
    return "";
  let r = 0;
  for (; r < i; ) {
    const s = t.charAt(i - r - 1);
    if (s !== e || n) {
      if (s === e || !n)
        break;
      r++;
    } else
      r++;
  }
  return t.slice(0, i - r);
}
function yn(t, e, n, i) {
  const r = e.href, s = e.title ? at(e.title) : null, o = t[1].replace(/\\([\[\]])/g, "$1");
  if (t[0].charAt(0) !== "!") {
    i.state.inLink = !0;
    const a = { type: "link", raw: n, href: r, title: s, text: o, tokens: i.inlineTokens(o) };
    return i.state.inLink = !1, a;
  }
  return { type: "image", raw: n, href: r, title: s, text: at(o) };
}
class we {
  constructor(e) {
    D(this, "options");
    D(this, "rules");
    D(this, "lexer");
    this.options = e || Lt;
  }
  space(e) {
    const n = this.rules.block.newline.exec(e);
    if (n && n[0].length > 0)
      return { type: "space", raw: n[0] };
  }
  code(e) {
    const n = this.rules.block.code.exec(e);
    if (n) {
      const i = n[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: n[0], codeBlockStyle: "indented", text: this.options.pedantic ? i : Gt(i, `
`) };
    }
  }
  fences(e) {
    const n = this.rules.block.fences.exec(e);
    if (n) {
      const i = n[0], r = function(s, o) {
        const a = s.match(/^(\s+)(?:```)/);
        if (a === null)
          return o;
        const l = a[1];
        return o.split(`
`).map((p) => {
          const u = p.match(/^\s+/);
          if (u === null)
            return p;
          const [h] = u;
          return h.length >= l.length ? p.slice(l.length) : p;
        }).join(`
`);
      }(i, n[3] || "");
      return { type: "code", raw: i, lang: n[2] ? n[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : n[2], text: r };
    }
  }
  heading(e) {
    const n = this.rules.block.heading.exec(e);
    if (n) {
      let i = n[2].trim();
      if (/#$/.test(i)) {
        const r = Gt(i, "#");
        this.options.pedantic ? i = r.trim() : r && !/ $/.test(r) || (i = r.trim());
      }
      return { type: "heading", raw: n[0], depth: n[1].length, text: i, tokens: this.lexer.inline(i) };
    }
  }
  hr(e) {
    const n = this.rules.block.hr.exec(e);
    if (n)
      return { type: "hr", raw: Gt(n[0], `
`) };
  }
  blockquote(e) {
    const n = this.rules.block.blockquote.exec(e);
    if (n) {
      let i = Gt(n[0], `
`).split(`
`), r = "", s = "";
      const o = [];
      for (; i.length > 0; ) {
        let a = !1;
        const l = [];
        let p;
        for (p = 0; p < i.length; p++)
          if (/^ {0,3}>/.test(i[p]))
            l.push(i[p]), a = !0;
          else {
            if (a)
              break;
            l.push(i[p]);
          }
        i = i.slice(p);
        const u = l.join(`
`), h = u.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, `
    $1`).replace(/^ {0,3}>[ \t]?/gm, "");
        r = r ? `${r}
${u}` : u, s = s ? `${s}
${h}` : h;
        const d = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(h, o, !0), this.lexer.state.top = d, i.length === 0)
          break;
        const f = o[o.length - 1];
        if ((f == null ? void 0 : f.type) === "code")
          break;
        if ((f == null ? void 0 : f.type) === "blockquote") {
          const g = f, x = g.raw + `
` + i.join(`
`), C = this.blockquote(x);
          o[o.length - 1] = C, r = r.substring(0, r.length - g.raw.length) + C.raw, s = s.substring(0, s.length - g.text.length) + C.text;
          break;
        }
        if ((f == null ? void 0 : f.type) === "list") {
          const g = f, x = g.raw + `
` + i.join(`
`), C = this.list(x);
          o[o.length - 1] = C, r = r.substring(0, r.length - f.raw.length) + C.raw, s = s.substring(0, s.length - g.raw.length) + C.raw, i = x.substring(o[o.length - 1].raw.length).split(`
`);
        }
      }
      return { type: "blockquote", raw: r, tokens: o, text: s };
    }
  }
  list(e) {
    let n = this.rules.block.list.exec(e);
    if (n) {
      let i = n[1].trim();
      const r = i.length > 1, s = { type: "list", raw: "", ordered: r, start: r ? +i.slice(0, -1) : "", loose: !1, items: [] };
      i = r ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = r ? i : "[*+-]");
      const o = new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let a = "", l = "", p = !1;
      for (; e; ) {
        let u = !1;
        if (!(n = o.exec(e)) || this.rules.block.hr.test(e))
          break;
        a = n[0], e = e.substring(a.length);
        let h = n[2].split(`
`, 1)[0].replace(/^\t+/, (c) => " ".repeat(3 * c.length)), d = e.split(`
`, 1)[0], f = 0;
        this.options.pedantic ? (f = 2, l = h.trimStart()) : (f = n[2].search(/[^ ]/), f = f > 4 ? 1 : f, l = h.slice(f), f += n[1].length);
        let g = !1;
        if (!h && /^ *$/.test(d) && (a += d + `
`, e = e.substring(d.length + 1), u = !0), !u) {
          const c = new RegExp(`^ {0,${Math.min(3, f - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), v = new RegExp(`^ {0,${Math.min(3, f - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), b = new RegExp(`^ {0,${Math.min(3, f - 1)}}(?:\`\`\`|~~~)`), m = new RegExp(`^ {0,${Math.min(3, f - 1)}}#`);
          for (; e; ) {
            const w = e.split(`
`, 1)[0];
            if (d = w, this.options.pedantic && (d = d.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), b.test(d) || m.test(d) || c.test(d) || v.test(e))
              break;
            if (d.search(/[^ ]/) >= f || !d.trim())
              l += `
` + d.slice(f);
            else {
              if (g || h.search(/[^ ]/) >= 4 || b.test(h) || m.test(h) || v.test(h))
                break;
              l += `
` + d;
            }
            g || d.trim() || (g = !0), a += w + `
`, e = e.substring(w.length + 1), h = d.slice(f);
          }
        }
        s.loose || (p ? s.loose = !0 : /\n *\n *$/.test(a) && (p = !0));
        let x, C = null;
        this.options.gfm && (C = /^\[[ xX]\] /.exec(l), C && (x = C[0] !== "[ ] ", l = l.replace(/^\[[ xX]\] +/, ""))), s.items.push({ type: "list_item", raw: a, task: !!C, checked: x, loose: !1, text: l, tokens: [] }), s.raw += a;
      }
      s.items[s.items.length - 1].raw = a.trimEnd(), s.items[s.items.length - 1].text = l.trimEnd(), s.raw = s.raw.trimEnd();
      for (let u = 0; u < s.items.length; u++)
        if (this.lexer.state.top = !1, s.items[u].tokens = this.lexer.blockTokens(s.items[u].text, []), !s.loose) {
          const h = s.items[u].tokens.filter((f) => f.type === "space"), d = h.length > 0 && h.some((f) => /\n.*\n/.test(f.raw));
          s.loose = d;
        }
      if (s.loose)
        for (let u = 0; u < s.items.length; u++)
          s.items[u].loose = !0;
      return s;
    }
  }
  html(e) {
    const n = this.rules.block.html.exec(e);
    if (n)
      return { type: "html", block: !0, raw: n[0], pre: n[1] === "pre" || n[1] === "script" || n[1] === "style", text: n[0] };
  }
  def(e) {
    const n = this.rules.block.def.exec(e);
    if (n) {
      const i = n[1].toLowerCase().replace(/\s+/g, " "), r = n[2] ? n[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", s = n[3] ? n[3].substring(1, n[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : n[3];
      return { type: "def", tag: i, raw: n[0], href: r, title: s };
    }
  }
  table(e) {
    const n = this.rules.block.table.exec(e);
    if (!n || !/[:|]/.test(n[2]))
      return;
    const i = wn(n[1]), r = n[2].replace(/^\||\| *$/g, "").split("|"), s = n[3] && n[3].trim() ? n[3].replace(/\n[ \t]*$/, "").split(`
`) : [], o = { type: "table", raw: n[0], header: [], align: [], rows: [] };
    if (i.length === r.length) {
      for (const a of r)
        /^ *-+: *$/.test(a) ? o.align.push("right") : /^ *:-+: *$/.test(a) ? o.align.push("center") : /^ *:-+ *$/.test(a) ? o.align.push("left") : o.align.push(null);
      for (let a = 0; a < i.length; a++)
        o.header.push({ text: i[a], tokens: this.lexer.inline(i[a]), header: !0, align: o.align[a] });
      for (const a of s)
        o.rows.push(wn(a, o.header.length).map((l, p) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: o.align[p] })));
      return o;
    }
  }
  lheading(e) {
    const n = this.rules.block.lheading.exec(e);
    if (n)
      return { type: "heading", raw: n[0], depth: n[2].charAt(0) === "=" ? 1 : 2, text: n[1], tokens: this.lexer.inline(n[1]) };
  }
  paragraph(e) {
    const n = this.rules.block.paragraph.exec(e);
    if (n) {
      const i = n[1].charAt(n[1].length - 1) === `
` ? n[1].slice(0, -1) : n[1];
      return { type: "paragraph", raw: n[0], text: i, tokens: this.lexer.inline(i) };
    }
  }
  text(e) {
    const n = this.rules.block.text.exec(e);
    if (n)
      return { type: "text", raw: n[0], text: n[0], tokens: this.lexer.inline(n[0]) };
  }
  escape(e) {
    const n = this.rules.inline.escape.exec(e);
    if (n)
      return { type: "escape", raw: n[0], text: at(n[1]) };
  }
  tag(e) {
    const n = this.rules.inline.tag.exec(e);
    if (n)
      return !this.lexer.state.inLink && /^<a /i.test(n[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(n[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(n[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: n[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: n[0] };
  }
  link(e) {
    const n = this.rules.inline.link.exec(e);
    if (n) {
      const i = n[2].trim();
      if (!this.options.pedantic && /^</.test(i)) {
        if (!/>$/.test(i))
          return;
        const o = Gt(i.slice(0, -1), "\\");
        if ((i.length - o.length) % 2 == 0)
          return;
      } else {
        const o = function(a, l) {
          if (a.indexOf(l[1]) === -1)
            return -1;
          let p = 0;
          for (let u = 0; u < a.length; u++)
            if (a[u] === "\\")
              u++;
            else if (a[u] === l[0])
              p++;
            else if (a[u] === l[1] && (p--, p < 0))
              return u;
          return -1;
        }(n[2], "()");
        if (o > -1) {
          const a = (n[0].indexOf("!") === 0 ? 5 : 4) + n[1].length + o;
          n[2] = n[2].substring(0, o), n[0] = n[0].substring(0, a).trim(), n[3] = "";
        }
      }
      let r = n[2], s = "";
      if (this.options.pedantic) {
        const o = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);
        o && (r = o[1], s = o[3]);
      } else
        s = n[3] ? n[3].slice(1, -1) : "";
      return r = r.trim(), /^</.test(r) && (r = this.options.pedantic && !/>$/.test(i) ? r.slice(1) : r.slice(1, -1)), yn(n, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: s && s.replace(this.rules.inline.anyPunctuation, "$1") }, n[0], this.lexer);
    }
  }
  reflink(e, n) {
    let i;
    if ((i = this.rules.inline.reflink.exec(e)) || (i = this.rules.inline.nolink.exec(e))) {
      const r = n[(i[2] || i[1]).replace(/\s+/g, " ").toLowerCase()];
      if (!r) {
        const s = i[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return yn(i, r, i[0], this.lexer);
    }
  }
  emStrong(e, n, i = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (r && !(r[3] && i.match(/[\p{L}\p{N}]/u)) && (!(r[1] || r[2]) || !i || this.rules.inline.punctuation.exec(i))) {
      const s = [...r[0]].length - 1;
      let o, a, l = s, p = 0;
      const u = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (u.lastIndex = 0, n = n.slice(-1 * e.length + s); (r = u.exec(n)) != null; ) {
        if (o = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !o)
          continue;
        if (a = [...o].length, r[3] || r[4]) {
          l += a;
          continue;
        }
        if ((r[5] || r[6]) && s % 3 && !((s + a) % 3)) {
          p += a;
          continue;
        }
        if (l -= a, l > 0)
          continue;
        a = Math.min(a, a + l + p);
        const h = [...r[0]][0].length, d = e.slice(0, s + r.index + h + a);
        if (Math.min(s, a) % 2) {
          const g = d.slice(1, -1);
          return { type: "em", raw: d, text: g, tokens: this.lexer.inlineTokens(g) };
        }
        const f = d.slice(2, -2);
        return { type: "strong", raw: d, text: f, tokens: this.lexer.inlineTokens(f) };
      }
    }
  }
  codespan(e) {
    const n = this.rules.inline.code.exec(e);
    if (n) {
      let i = n[2].replace(/\n/g, " ");
      const r = /[^ ]/.test(i), s = /^ /.test(i) && / $/.test(i);
      return r && s && (i = i.substring(1, i.length - 1)), i = at(i, !0), { type: "codespan", raw: n[0], text: i };
    }
  }
  br(e) {
    const n = this.rules.inline.br.exec(e);
    if (n)
      return { type: "br", raw: n[0] };
  }
  del(e) {
    const n = this.rules.inline.del.exec(e);
    if (n)
      return { type: "del", raw: n[0], text: n[2], tokens: this.lexer.inlineTokens(n[2]) };
  }
  autolink(e) {
    const n = this.rules.inline.autolink.exec(e);
    if (n) {
      let i, r;
      return n[2] === "@" ? (i = at(n[1]), r = "mailto:" + i) : (i = at(n[1]), r = i), { type: "link", raw: n[0], text: i, href: r, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(e) {
    var i;
    let n;
    if (n = this.rules.inline.url.exec(e)) {
      let r, s;
      if (n[2] === "@")
        r = at(n[0]), s = "mailto:" + r;
      else {
        let o;
        do
          o = n[0], n[0] = ((i = this.rules.inline._backpedal.exec(n[0])) == null ? void 0 : i[0]) ?? "";
        while (o !== n[0]);
        r = at(n[0]), s = n[1] === "www." ? "http://" + n[0] : n[0];
      }
      return { type: "link", raw: n[0], text: r, href: s, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  inlineText(e) {
    const n = this.rules.inline.text.exec(e);
    if (n) {
      let i;
      return i = this.lexer.state.inRawBlock ? n[0] : at(n[0]), { type: "text", raw: n[0], text: i };
    }
  }
}
const le = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ai = /(?:[*+-]|\d{1,9}[.)])/, Ei = F(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, Ai).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), Ve = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, tn = /(?!\s*\])(?:\\.|[^\[\]\\])+/, xr = F(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", tn).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), wr = F(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ai).getRegex(), Ee = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", en = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, yr = F("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", en).replace("tag", Ee).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), _n = F(Ve).replace("hr", le).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ee).getRegex(), nn = { blockquote: F(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", _n).getRegex(), code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, def: xr, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, hr: le, html: yr, lheading: Ei, list: wr, newline: /^(?: *(?:\n|$))+/, paragraph: _n, table: Xt, text: /^[^\n]+/ }, vn = F("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", le).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ee).getRegex(), _r = { ...nn, table: vn, paragraph: F(Ve).replace("hr", le).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", vn).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ee).getRegex() }, vr = { ...nn, html: F(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", en).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Xt, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: F(Ve).replace("hr", le).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Ei).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Si = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ni = /^( {2,}|\\)\n(?!\s*$)/, ce = "\\p{P}\\p{S}", $r = F(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, ce).getRegex(), Ar = F(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, ce).getRegex(), Er = F("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, ce).getRegex(), Sr = F("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, ce).getRegex(), Nr = F(/\\([punct])/, "gu").replace(/punct/g, ce).getRegex(), Cr = F(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Tr = F(en).replace("(?:-->|$)", "-->").getRegex(), Mr = F("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Tr).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), ye = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Ir = F(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", ye).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), $n = F(/^!?\[(label)\]\[(ref)\]/).replace("label", ye).replace("ref", tn).getRegex(), An = F(/^!?\[(ref)\](?:\[\])?/).replace("ref", tn).getRegex(), rn = { _backpedal: Xt, anyPunctuation: Nr, autolink: Cr, blockSkip: /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g, br: Ni, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, del: Xt, emStrongLDelim: Ar, emStrongRDelimAst: Er, emStrongRDelimUnd: Sr, escape: Si, link: Ir, nolink: An, punctuation: $r, reflink: $n, reflinkSearch: F("reflink|nolink(?!\\()", "g").replace("reflink", $n).replace("nolink", An).getRegex(), tag: Mr, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, url: Xt }, Lr = { ...rn, link: F(/^!?\[(label)\]\((.*?)\)/).replace("label", ye).getRegex(), reflink: F(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", ye).getRegex() }, Ge = { ...rn, escape: F(Si).replace("])", "~|])").getRegex(), url: F(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ }, Or = { ...Ge, br: F(Ni).replace("{2,}", "*").getRegex(), text: F(Ge.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, de = { normal: nn, gfm: _r, pedantic: vr }, Jt = { normal: rn, gfm: Ge, breaks: Or, pedantic: Lr };
class ut {
  constructor(e) {
    D(this, "tokens");
    D(this, "options");
    D(this, "state");
    D(this, "tokenizer");
    D(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Lt, this.options.tokenizer = this.options.tokenizer || new we(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    const n = { block: de.normal, inline: Jt.normal };
    this.options.pedantic ? (n.block = de.pedantic, n.inline = Jt.pedantic) : this.options.gfm && (n.block = de.gfm, this.options.breaks ? n.inline = Jt.breaks : n.inline = Jt.gfm), this.tokenizer.rules = n;
  }
  static get rules() {
    return { block: de, inline: Jt };
  }
  static lex(e, n) {
    return new ut(n).lex(e);
  }
  static lexInline(e, n) {
    return new ut(n).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    for (let n = 0; n < this.inlineQueue.length; n++) {
      const i = this.inlineQueue[n];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, n = [], i = !1) {
    let r, s, o;
    for (e = this.options.pedantic ? e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e.replace(/^( *)(\t+)/gm, (a, l, p) => l + "    ".repeat(p.length)); e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => !!(r = a.call({ lexer: this }, e, n)) && (e = e.substring(r.raw.length), n.push(r), !0))))
        if (r = this.tokenizer.space(e))
          e = e.substring(r.raw.length), r.raw.length === 1 && n.length > 0 ? n[n.length - 1].raw += `
` : n.push(r);
        else if (r = this.tokenizer.code(e))
          e = e.substring(r.raw.length), s = n[n.length - 1], !s || s.type !== "paragraph" && s.type !== "text" ? n.push(r) : (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
        else if (r = this.tokenizer.fences(e))
          e = e.substring(r.raw.length), n.push(r);
        else if (r = this.tokenizer.heading(e))
          e = e.substring(r.raw.length), n.push(r);
        else if (r = this.tokenizer.hr(e))
          e = e.substring(r.raw.length), n.push(r);
        else if (r = this.tokenizer.blockquote(e))
          e = e.substring(r.raw.length), n.push(r);
        else if (r = this.tokenizer.list(e))
          e = e.substring(r.raw.length), n.push(r);
        else if (r = this.tokenizer.html(e))
          e = e.substring(r.raw.length), n.push(r);
        else if (r = this.tokenizer.def(e))
          e = e.substring(r.raw.length), s = n[n.length - 1], !s || s.type !== "paragraph" && s.type !== "text" ? this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }) : (s.raw += `
` + r.raw, s.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = s.text);
        else if (r = this.tokenizer.table(e))
          e = e.substring(r.raw.length), n.push(r);
        else if (r = this.tokenizer.lheading(e))
          e = e.substring(r.raw.length), n.push(r);
        else {
          if (o = e, this.options.extensions && this.options.extensions.startBlock) {
            let a = 1 / 0;
            const l = e.slice(1);
            let p;
            this.options.extensions.startBlock.forEach((u) => {
              p = u.call({ lexer: this }, l), typeof p == "number" && p >= 0 && (a = Math.min(a, p));
            }), a < 1 / 0 && a >= 0 && (o = e.substring(0, a + 1));
          }
          if (this.state.top && (r = this.tokenizer.paragraph(o)))
            s = n[n.length - 1], i && (s == null ? void 0 : s.type) === "paragraph" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : n.push(r), i = o.length !== e.length, e = e.substring(r.raw.length);
          else if (r = this.tokenizer.text(e))
            e = e.substring(r.raw.length), s = n[n.length - 1], s && s.type === "text" ? (s.raw += `
` + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = s.text) : n.push(r);
          else if (e) {
            const a = "Infinite loop on byte: " + e.charCodeAt(0);
            if (this.options.silent)
              break;
            throw new Error(a);
          }
        }
    return this.state.top = !0, n;
  }
  inline(e, n = []) {
    return this.inlineQueue.push({ src: e, tokens: n }), n;
  }
  inlineTokens(e, n = []) {
    let i, r, s, o, a, l, p = e;
    if (this.tokens.links) {
      const u = Object.keys(this.tokens.links);
      if (u.length > 0)
        for (; (o = this.tokenizer.rules.inline.reflinkSearch.exec(p)) != null; )
          u.includes(o[0].slice(o[0].lastIndexOf("[") + 1, -1)) && (p = p.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + p.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (o = this.tokenizer.rules.inline.blockSkip.exec(p)) != null; )
      p = p.slice(0, o.index) + "[" + "a".repeat(o[0].length - 2) + "]" + p.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (o = this.tokenizer.rules.inline.anyPunctuation.exec(p)) != null; )
      p = p.slice(0, o.index) + "++" + p.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (a || (l = ""), a = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((u) => !!(i = u.call({ lexer: this }, e, n)) && (e = e.substring(i.raw.length), n.push(i), !0))))
        if (i = this.tokenizer.escape(e))
          e = e.substring(i.raw.length), n.push(i);
        else if (i = this.tokenizer.tag(e))
          e = e.substring(i.raw.length), r = n[n.length - 1], r && i.type === "text" && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : n.push(i);
        else if (i = this.tokenizer.link(e))
          e = e.substring(i.raw.length), n.push(i);
        else if (i = this.tokenizer.reflink(e, this.tokens.links))
          e = e.substring(i.raw.length), r = n[n.length - 1], r && i.type === "text" && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : n.push(i);
        else if (i = this.tokenizer.emStrong(e, p, l))
          e = e.substring(i.raw.length), n.push(i);
        else if (i = this.tokenizer.codespan(e))
          e = e.substring(i.raw.length), n.push(i);
        else if (i = this.tokenizer.br(e))
          e = e.substring(i.raw.length), n.push(i);
        else if (i = this.tokenizer.del(e))
          e = e.substring(i.raw.length), n.push(i);
        else if (i = this.tokenizer.autolink(e))
          e = e.substring(i.raw.length), n.push(i);
        else if (this.state.inLink || !(i = this.tokenizer.url(e))) {
          if (s = e, this.options.extensions && this.options.extensions.startInline) {
            let u = 1 / 0;
            const h = e.slice(1);
            let d;
            this.options.extensions.startInline.forEach((f) => {
              d = f.call({ lexer: this }, h), typeof d == "number" && d >= 0 && (u = Math.min(u, d));
            }), u < 1 / 0 && u >= 0 && (s = e.substring(0, u + 1));
          }
          if (i = this.tokenizer.inlineText(s))
            e = e.substring(i.raw.length), i.raw.slice(-1) !== "_" && (l = i.raw.slice(-1)), a = !0, r = n[n.length - 1], r && r.type === "text" ? (r.raw += i.raw, r.text += i.text) : n.push(i);
          else if (e) {
            const u = "Infinite loop on byte: " + e.charCodeAt(0);
            if (this.options.silent)
              break;
            throw new Error(u);
          }
        } else
          e = e.substring(i.raw.length), n.push(i);
    return n;
  }
}
class _e {
  constructor(e) {
    D(this, "options");
    D(this, "parser");
    this.options = e || Lt;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: n, escaped: i }) {
    var o;
    const r = (o = (n || "").match(/^\S*/)) == null ? void 0 : o[0], s = e.replace(/\n$/, "") + `
`;
    return r ? '<pre><code class="language-' + at(r) + '">' + (i ? s : at(s, !0)) + `</code></pre>
` : "<pre><code>" + (i ? s : at(s, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  heading({ tokens: e, depth: n }) {
    return `<h${n}>${this.parser.parseInline(e)}</h${n}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    const n = e.ordered, i = e.start;
    let r = "";
    for (let o = 0; o < e.items.length; o++) {
      const a = e.items[o];
      r += this.listitem(a);
    }
    const s = n ? "ol" : "ul";
    return "<" + s + (n && i !== 1 ? ' start="' + i + '"' : "") + `>
` + r + "</" + s + `>
`;
  }
  listitem(e) {
    let n = "";
    if (e.task) {
      const i = this.checkbox({ checked: !!e.checked });
      e.loose ? e.tokens.length > 0 && e.tokens[0].type === "paragraph" ? (e.tokens[0].text = i + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = i + " " + e.tokens[0].tokens[0].text)) : e.tokens.unshift({ type: "text", raw: i + " ", text: i + " " }) : n += i + " ";
    }
    return n += this.parser.parse(e.tokens, !!e.loose), `<li>${n}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let n = "", i = "";
    for (let s = 0; s < e.header.length; s++)
      i += this.tablecell(e.header[s]);
    n += this.tablerow({ text: i });
    let r = "";
    for (let s = 0; s < e.rows.length; s++) {
      const o = e.rows[s];
      i = "";
      for (let a = 0; a < o.length; a++)
        i += this.tablecell(o[a]);
      r += this.tablerow({ text: i });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + n + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    const n = this.parser.parseInline(e.tokens), i = e.header ? "th" : "td";
    return (e.align ? `<${i} align="${e.align}">` : `<${i}>`) + n + `</${i}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${e}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: n, tokens: i }) {
    const r = this.parser.parseInline(i), s = xn(e);
    if (s === null)
      return r;
    let o = '<a href="' + (e = s) + '"';
    return n && (o += ' title="' + n + '"'), o += ">" + r + "</a>", o;
  }
  image({ href: e, title: n, text: i }) {
    const r = xn(e);
    if (r === null)
      return i;
    let s = `<img src="${e = r}" alt="${i}"`;
    return n && (s += ` title="${n}"`), s += ">", s;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : e.text;
  }
}
class sn {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
}
class pt {
  constructor(e) {
    D(this, "options");
    D(this, "renderer");
    D(this, "textRenderer");
    this.options = e || Lt, this.options.renderer = this.options.renderer || new _e(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new sn();
  }
  static parse(e, n) {
    return new pt(n).parse(e);
  }
  static parseInline(e, n) {
    return new pt(n).parseInline(e);
  }
  parse(e, n = !0) {
    let i = "";
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
        const a = s, l = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(a.type)) {
          i += l || "";
          continue;
        }
      }
      const o = s;
      switch (o.type) {
        case "space":
          i += this.renderer.space(o);
          continue;
        case "hr":
          i += this.renderer.hr(o);
          continue;
        case "heading":
          i += this.renderer.heading(o);
          continue;
        case "code":
          i += this.renderer.code(o);
          continue;
        case "table":
          i += this.renderer.table(o);
          continue;
        case "blockquote":
          i += this.renderer.blockquote(o);
          continue;
        case "list":
          i += this.renderer.list(o);
          continue;
        case "html":
          i += this.renderer.html(o);
          continue;
        case "paragraph":
          i += this.renderer.paragraph(o);
          continue;
        case "text": {
          let a = o, l = this.renderer.text(a);
          for (; r + 1 < e.length && e[r + 1].type === "text"; )
            a = e[++r], l += `
` + this.renderer.text(a);
          i += n ? this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l }] }) : l;
          continue;
        }
        default: {
          const a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent)
            return "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
  parseInline(e, n) {
    n = n || this.renderer;
    let i = "";
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
        const a = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (a !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          i += a || "";
          continue;
        }
      }
      const o = s;
      switch (o.type) {
        case "escape":
        case "text":
          i += n.text(o);
          break;
        case "html":
          i += n.html(o);
          break;
        case "link":
          i += n.link(o);
          break;
        case "image":
          i += n.image(o);
          break;
        case "strong":
          i += n.strong(o);
          break;
        case "em":
          i += n.em(o);
          break;
        case "codespan":
          i += n.codespan(o);
          break;
        case "br":
          i += n.br(o);
          break;
        case "del":
          i += n.del(o);
          break;
        default: {
          const a = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent)
            return "";
          throw new Error(a);
        }
      }
    }
    return i;
  }
}
class Yt {
  constructor(e) {
    D(this, "options");
    this.options = e || Lt;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
}
D(Yt, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]));
var $e, Ti, ae, Je, Ae, Mi;
class Ci {
  constructor(...e) {
    he(this, $e);
    he(this, ae);
    he(this, Ae);
    D(this, "defaults", { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null });
    D(this, "options", this.setOptions);
    D(this, "parse", Kt(this, ae, Je).call(this, ut.lex, pt.parse));
    D(this, "parseInline", Kt(this, ae, Je).call(this, ut.lexInline, pt.parseInline));
    D(this, "Parser", pt);
    D(this, "Renderer", _e);
    D(this, "TextRenderer", sn);
    D(this, "Lexer", ut);
    D(this, "Tokenizer", we);
    D(this, "Hooks", Yt);
    this.use(...e);
  }
  walkTokens(e, n) {
    var r, s;
    let i = [];
    for (const o of e)
      switch (i = i.concat(n.call(this, o)), o.type) {
        case "table": {
          const a = o;
          for (const l of a.header)
            i = i.concat(this.walkTokens(l.tokens, n));
          for (const l of a.rows)
            for (const p of l)
              i = i.concat(this.walkTokens(p.tokens, n));
          break;
        }
        case "list": {
          const a = o;
          i = i.concat(this.walkTokens(a.items, n));
          break;
        }
        default: {
          const a = o;
          (s = (r = this.defaults.extensions) == null ? void 0 : r.childTokens) != null && s[a.type] ? this.defaults.extensions.childTokens[a.type].forEach((l) => {
            const p = a[l].flat(1 / 0);
            i = i.concat(this.walkTokens(p, n));
          }) : a.tokens && (i = i.concat(this.walkTokens(a.tokens, n)));
        }
      }
    return i;
  }
  use(...e) {
    const n = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((i) => {
      const r = { ...i };
      if (r.async = this.defaults.async || r.async || !1, i.extensions && (i.extensions.forEach((s) => {
        if (!s.name)
          throw new Error("extension name required");
        if ("renderer" in s) {
          const o = n.renderers[s.name];
          n.renderers[s.name] = o ? function(...a) {
            let l = s.renderer.apply(this, a);
            return l === !1 && (l = o.apply(this, a)), l;
          } : s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          const o = n[s.level];
          o ? o.unshift(s.tokenizer) : n[s.level] = [s.tokenizer], s.start && (s.level === "block" ? n.startBlock ? n.startBlock.push(s.start) : n.startBlock = [s.start] : s.level === "inline" && (n.startInline ? n.startInline.push(s.start) : n.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (n.childTokens[s.name] = s.childTokens);
      }), r.extensions = n), i.renderer) {
        const s = this.defaults.renderer || new _e(this.defaults);
        for (const o in i.renderer) {
          if (!(o in s))
            throw new Error(`renderer '${o}' does not exist`);
          if (["options", "parser"].includes(o))
            continue;
          const a = o;
          let l = i.renderer[a];
          const p = s[a];
          s[a] = (...u) => {
            i.useNewRenderer || (l = Kt(this, $e, Ti).call(this, l, a, s));
            let h = l.apply(s, u);
            return h === !1 && (h = p.apply(s, u)), h || "";
          };
        }
        r.renderer = s;
      }
      if (i.tokenizer) {
        const s = this.defaults.tokenizer || new we(this.defaults);
        for (const o in i.tokenizer) {
          if (!(o in s))
            throw new Error(`tokenizer '${o}' does not exist`);
          if (["options", "rules", "lexer"].includes(o))
            continue;
          const a = o, l = i.tokenizer[a], p = s[a];
          s[a] = (...u) => {
            let h = l.apply(s, u);
            return h === !1 && (h = p.apply(s, u)), h;
          };
        }
        r.tokenizer = s;
      }
      if (i.hooks) {
        const s = this.defaults.hooks || new Yt();
        for (const o in i.hooks) {
          if (!(o in s))
            throw new Error(`hook '${o}' does not exist`);
          if (o === "options")
            continue;
          const a = o, l = i.hooks[a], p = s[a];
          Yt.passThroughHooks.has(o) ? s[a] = (u) => {
            if (this.defaults.async)
              return Promise.resolve(l.call(s, u)).then((d) => p.call(s, d));
            const h = l.call(s, u);
            return p.call(s, h);
          } : s[a] = (...u) => {
            let h = l.apply(s, u);
            return h === !1 && (h = p.apply(s, u)), h;
          };
        }
        r.hooks = s;
      }
      if (i.walkTokens) {
        const s = this.defaults.walkTokens, o = i.walkTokens;
        r.walkTokens = function(a) {
          let l = [];
          return l.push(o.call(this, a)), s && (l = l.concat(s.call(this, a))), l;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, n) {
    return ut.lex(e, n ?? this.defaults);
  }
  parser(e, n) {
    return pt.parse(e, n ?? this.defaults);
  }
}
$e = new WeakSet(), Ti = function(e, n, i) {
  switch (n) {
    case "heading":
      return function(r) {
        return r.type && r.type === n ? e(i.parser.parseInline(r.tokens), r.depth, function(s) {
          return s.replace(br, (o, a) => (a = a.toLowerCase()) === "colon" ? ":" : a.charAt(0) === "#" ? a.charAt(1) === "x" ? String.fromCharCode(parseInt(a.substring(2), 16)) : String.fromCharCode(+a.substring(1)) : "");
        }(i.parser.parseInline(r.tokens, i.parser.textRenderer))) : e.apply(this, arguments);
      };
    case "code":
      return function(r) {
        return r.type && r.type === n ? e(r.text, r.lang, !!r.escaped) : e.apply(this, arguments);
      };
    case "table":
      return function(r) {
        if (!r.type || r.type !== n)
          return e.apply(this, arguments);
        let s = "", o = "";
        for (let l = 0; l < r.header.length; l++)
          o += this.tablecell({ text: r.header[l].text, tokens: r.header[l].tokens, header: !0, align: r.align[l] });
        s += this.tablerow({ text: o });
        let a = "";
        for (let l = 0; l < r.rows.length; l++) {
          const p = r.rows[l];
          o = "";
          for (let u = 0; u < p.length; u++)
            o += this.tablecell({ text: p[u].text, tokens: p[u].tokens, header: !1, align: r.align[u] });
          a += this.tablerow({ text: o });
        }
        return e(s, a);
      };
    case "blockquote":
      return function(r) {
        if (!r.type || r.type !== n)
          return e.apply(this, arguments);
        const s = this.parser.parse(r.tokens);
        return e(s);
      };
    case "list":
      return function(r) {
        if (!r.type || r.type !== n)
          return e.apply(this, arguments);
        const s = r.ordered, o = r.start, a = r.loose;
        let l = "";
        for (let p = 0; p < r.items.length; p++) {
          const u = r.items[p], h = u.checked, d = u.task;
          let f = "";
          if (u.task) {
            const g = this.checkbox({ checked: !!h });
            a ? u.tokens.length > 0 && u.tokens[0].type === "paragraph" ? (u.tokens[0].text = g + " " + u.tokens[0].text, u.tokens[0].tokens && u.tokens[0].tokens.length > 0 && u.tokens[0].tokens[0].type === "text" && (u.tokens[0].tokens[0].text = g + " " + u.tokens[0].tokens[0].text)) : u.tokens.unshift({ type: "text", text: g + " " }) : f += g + " ";
          }
          f += this.parser.parse(u.tokens, a), l += this.listitem({ type: "list_item", raw: f, text: f, task: d, checked: !!h, loose: a, tokens: u.tokens });
        }
        return e(l, s, o);
      };
    case "html":
      return function(r) {
        return r.type && r.type === n ? e(r.text, r.block) : e.apply(this, arguments);
      };
    case "paragraph":
    case "strong":
    case "em":
    case "del":
      return function(r) {
        return r.type && r.type === n ? e(this.parser.parseInline(r.tokens)) : e.apply(this, arguments);
      };
    case "escape":
    case "codespan":
    case "text":
      return function(r) {
        return r.type && r.type === n ? e(r.text) : e.apply(this, arguments);
      };
    case "link":
      return function(r) {
        return r.type && r.type === n ? e(r.href, r.title, this.parser.parseInline(r.tokens)) : e.apply(this, arguments);
      };
    case "image":
      return function(r) {
        return r.type && r.type === n ? e(r.href, r.title, r.text) : e.apply(this, arguments);
      };
  }
  return e;
}, ae = new WeakSet(), Je = function(e, n) {
  return (i, r) => {
    const s = { ...r }, o = { ...this.defaults, ...s };
    this.defaults.async === !0 && s.async === !1 && (o.silent, o.async = !0);
    const a = Kt(this, Ae, Mi).call(this, !!o.silent, !!o.async);
    if (i == null)
      return a(new Error("marked(): input parameter is undefined or null"));
    if (typeof i != "string")
      return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(i) + ", string expected"));
    if (o.hooks && (o.hooks.options = o), o.async)
      return Promise.resolve(o.hooks ? o.hooks.preprocess(i) : i).then((l) => e(l, o)).then((l) => o.hooks ? o.hooks.processAllTokens(l) : l).then((l) => o.walkTokens ? Promise.all(this.walkTokens(l, o.walkTokens)).then(() => l) : l).then((l) => n(l, o)).then((l) => o.hooks ? o.hooks.postprocess(l) : l).catch(a);
    try {
      o.hooks && (i = o.hooks.preprocess(i));
      let l = e(i, o);
      o.hooks && (l = o.hooks.processAllTokens(l)), o.walkTokens && this.walkTokens(l, o.walkTokens);
      let p = n(l, o);
      return o.hooks && (p = o.hooks.postprocess(p)), p;
    } catch (l) {
      return a(l);
    }
  };
}, Ae = new WeakSet(), Mi = function(e, n) {
  return (i) => {
    if (i.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      const r = "<p>An error occurred:</p><pre>" + at(i.message + "", !0) + "</pre>";
      return n ? Promise.resolve(r) : r;
    }
    if (n)
      return Promise.reject(i);
    throw i;
  };
};
const vt = new Ci();
function Z(t, e) {
  return vt.parse(t, e);
}
function jr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Ii(t) {
  return t instanceof Map ? t.clear = t.delete = t.set = () => {
    throw new Error("map is read-only");
  } : t instanceof Set && (t.add = t.clear = t.delete = () => {
    throw new Error("set is read-only");
  }), Object.freeze(t), Object.getOwnPropertyNames(t).forEach((e) => {
    const n = t[e], i = typeof n;
    i !== "object" && i !== "function" || Object.isFrozen(n) || Ii(n);
  }), t;
}
Z.options = Z.setOptions = (t) => (vt.setOptions(t), Z.defaults = vt.defaults, bn(Z.defaults), Z), Z.getDefaults = dr, Z.defaults = Lt, Z.use = (...t) => (vt.use(...t), Z.defaults = vt.defaults, bn(Z.defaults), Z), Z.walkTokens = (t, e) => vt.walkTokens(t, e), Z.parseInline = vt.parseInline, Z.Parser = pt, Z.parser = pt.parse, Z.Renderer = _e, Z.TextRenderer = sn, Z.Lexer = ut, Z.lexer = ut.lex, Z.Tokenizer = we, Z.Hooks = Yt, Z.parse = Z, Z.options, Z.setOptions, Z.use, Z.walkTokens, Z.parseInline, pt.parse, ut.lex;
class En {
  constructor(e) {
    e.data === void 0 && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1;
  }
  ignoreMatch() {
    this.isMatchIgnored = !0;
  }
}
function Li(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function kt(t, ...e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const i in t)
    n[i] = t[i];
  return e.forEach((i) => {
    for (const r in i)
      n[r] = i[r];
  }), n;
}
const Sn = (t) => !!t.scope;
class Rr {
  constructor(e, n) {
    this.buffer = "", this.classPrefix = n.classPrefix, e.walk(this);
  }
  addText(e) {
    this.buffer += Li(e);
  }
  openNode(e) {
    if (!Sn(e))
      return;
    const n = ((i, { prefix: r }) => {
      if (i.startsWith("language:"))
        return i.replace("language:", "language-");
      if (i.includes(".")) {
        const s = i.split(".");
        return [`${r}${s.shift()}`, ...s.map((o, a) => `${o}${"_".repeat(a + 1)}`)].join(" ");
      }
      return `${r}${i}`;
    })(e.scope, { prefix: this.classPrefix });
    this.span(n);
  }
  closeNode(e) {
    Sn(e) && (this.buffer += "</span>");
  }
  value() {
    return this.buffer;
  }
  span(e) {
    this.buffer += `<span class="${e}">`;
  }
}
const Nn = (t = {}) => {
  const e = { children: [] };
  return Object.assign(e, t), e;
};
class on {
  constructor() {
    this.rootNode = Nn(), this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  add(e) {
    this.top.children.push(e);
  }
  openNode(e) {
    const n = Nn({ scope: e });
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
  walk(e) {
    return this.constructor._walk(e, this.rootNode);
  }
  static _walk(e, n) {
    return typeof n == "string" ? e.addText(n) : n.children && (e.openNode(n), n.children.forEach((i) => this._walk(e, i)), e.closeNode(n)), e;
  }
  static _collapse(e) {
    typeof e != "string" && e.children && (e.children.every((n) => typeof n == "string") ? e.children = [e.children.join("")] : e.children.forEach((n) => {
      on._collapse(n);
    }));
  }
}
class zr extends on {
  constructor(e) {
    super(), this.options = e;
  }
  addText(e) {
    e !== "" && this.add(e);
  }
  startScope(e) {
    this.openNode(e);
  }
  endScope() {
    this.closeNode();
  }
  __addSublanguage(e, n) {
    const i = e.root;
    n && (i.scope = `language:${n}`), this.add(i);
  }
  toHTML() {
    return new Rr(this, this.options).value();
  }
  finalize() {
    return this.closeAllNodes(), !0;
  }
}
function se(t) {
  return t ? typeof t == "string" ? t : t.source : null;
}
function Oi(t) {
  return Ot("(?=", t, ")");
}
function Br(t) {
  return Ot("(?:", t, ")*");
}
function qr(t) {
  return Ot("(?:", t, ")?");
}
function Ot(...t) {
  return t.map((e) => se(e)).join("");
}
function an(...t) {
  return "(" + (function(n) {
    const i = n[n.length - 1];
    return typeof i == "object" && i.constructor === Object ? (n.splice(n.length - 1, 1), i) : {};
  }(t).capture ? "" : "?:") + t.map((n) => se(n)).join("|") + ")";
}
function ji(t) {
  return new RegExp(t.toString() + "|").exec("").length - 1;
}
const Pr = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function We(t, { joinWith: e }) {
  let n = 0;
  return t.map((i) => {
    n += 1;
    const r = n;
    let s = se(i), o = "";
    for (; s.length > 0; ) {
      const a = Pr.exec(s);
      if (!a) {
        o += s;
        break;
      }
      o += s.substring(0, a.index), s = s.substring(a.index + a[0].length), a[0][0] === "\\" && a[1] ? o += "\\" + String(Number(a[1]) + r) : (o += a[0], a[0] === "(" && n++);
    }
    return o;
  }).map((i) => `(${i})`).join(e);
}
const Ri = "[a-zA-Z]\\w*", ln = "[a-zA-Z_]\\w*", zi = "\\b\\d+(\\.\\d+)?", Bi = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", qi = "\\b(0b[01]+)", oe = { begin: "\\\\[\\s\\S]", relevance: 0 }, Dr = { scope: "string", begin: "'", end: "'", illegal: "\\n", contains: [oe] }, Hr = { scope: "string", begin: '"', end: '"', illegal: "\\n", contains: [oe] }, Se = (t, e, n = {}) => {
  const i = kt({ scope: "comment", begin: t, end: e, contains: [] }, n);
  i.contains.push({ scope: "doctag", begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)", end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/, excludeBegin: !0, relevance: 0 });
  const r = an("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
  return i.contains.push({ begin: Ot(/[ ]+/, "(", r, /[.]?[:]?([.][ ]|[ ])/, "){3}") }), i;
}, Ur = Se("//", "$"), Zr = Se("/\\*", "\\*/"), Fr = Se("#", "$"), Kr = { scope: "number", begin: zi, relevance: 0 }, Gr = { scope: "number", begin: Bi, relevance: 0 }, Jr = { scope: "number", begin: qi, relevance: 0 }, Wr = { scope: "regexp", begin: /\/(?=[^/\n]*\/)/, end: /\/[gimuy]*/, contains: [oe, { begin: /\[/, end: /\]/, relevance: 0, contains: [oe] }] }, Qr = { scope: "title", begin: Ri, relevance: 0 }, Xr = { scope: "title", begin: ln, relevance: 0 }, Yr = { begin: "\\.\\s*" + ln, relevance: 0 };
var ge = Object.freeze({ __proto__: null, APOS_STRING_MODE: Dr, BACKSLASH_ESCAPE: oe, BINARY_NUMBER_MODE: Jr, BINARY_NUMBER_RE: qi, COMMENT: Se, C_BLOCK_COMMENT_MODE: Zr, C_LINE_COMMENT_MODE: Ur, C_NUMBER_MODE: Gr, C_NUMBER_RE: Bi, END_SAME_AS_BEGIN: (t) => Object.assign(t, { "on:begin": (e, n) => {
  n.data._beginMatch = e[1];
}, "on:end": (e, n) => {
  n.data._beginMatch !== e[1] && n.ignoreMatch();
} }), HASH_COMMENT_MODE: Fr, IDENT_RE: Ri, MATCH_NOTHING_RE: /\b\B/, METHOD_GUARD: Yr, NUMBER_MODE: Kr, NUMBER_RE: zi, PHRASAL_WORDS_MODE: { begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/ }, QUOTE_STRING_MODE: Hr, REGEXP_MODE: Wr, RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", SHEBANG: (t = {}) => {
  const e = /^#![ ]*\//;
  return t.binary && (t.begin = Ot(e, /.*\b/, t.binary, /\b.*/)), kt({ scope: "meta", begin: e, end: /$/, relevance: 0, "on:begin": (n, i) => {
    n.index !== 0 && i.ignoreMatch();
  } }, t);
}, TITLE_MODE: Qr, UNDERSCORE_IDENT_RE: ln, UNDERSCORE_TITLE_MODE: Xr });
function Vr(t, e) {
  t.input[t.index - 1] === "." && e.ignoreMatch();
}
function ts(t, e) {
  t.className !== void 0 && (t.scope = t.className, delete t.className);
}
function es(t, e) {
  e && t.beginKeywords && (t.begin = "\\b(" + t.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", t.__beforeBegin = Vr, t.keywords = t.keywords || t.beginKeywords, delete t.beginKeywords, t.relevance === void 0 && (t.relevance = 0));
}
function ns(t, e) {
  Array.isArray(t.illegal) && (t.illegal = an(...t.illegal));
}
function is(t, e) {
  if (t.match) {
    if (t.begin || t.end)
      throw new Error("begin & end are not supported with match");
    t.begin = t.match, delete t.match;
  }
}
function rs(t, e) {
  t.relevance === void 0 && (t.relevance = 1);
}
const ss = (t, e) => {
  if (!t.beforeMatch)
    return;
  if (t.starts)
    throw new Error("beforeMatch cannot be used with starts");
  const n = Object.assign({}, t);
  Object.keys(t).forEach((i) => {
    delete t[i];
  }), t.keywords = n.keywords, t.begin = Ot(n.beforeMatch, Oi(n.begin)), t.starts = { relevance: 0, contains: [Object.assign(n, { endsParent: !0 })] }, t.relevance = 0, delete n.beforeMatch;
}, os = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"], as = "keyword";
function Pi(t, e, n = as) {
  const i = /* @__PURE__ */ Object.create(null);
  return typeof t == "string" ? r(n, t.split(" ")) : Array.isArray(t) ? r(n, t) : Object.keys(t).forEach((s) => {
    Object.assign(i, Pi(t[s], e, s));
  }), i;
  function r(s, o) {
    e && (o = o.map((a) => a.toLowerCase())), o.forEach((a) => {
      const l = a.split("|");
      i[l[0]] = [s, ls(l[0], l[1])];
    });
  }
}
function ls(t, e) {
  return e ? Number(e) : function(n) {
    return os.includes(n.toLowerCase());
  }(t) ? 0 : 1;
}
const Cn = {}, Nt = (t) => {
}, Rt = (t, e) => {
  Cn[`${t}/${e}`] || (Cn[`${t}/${e}`] = !0);
}, fe = new Error();
function Tn(t, e, { key: n }) {
  let i = 0;
  const r = t[n], s = {}, o = {};
  for (let a = 1; a <= e.length; a++)
    o[a + i] = r[a], s[a + i] = !0, i += ji(e[a - 1]);
  t[n] = o, t[n]._emit = s, t[n]._multi = !0;
}
function cs(t) {
  (function(e) {
    e.scope && typeof e.scope == "object" && e.scope !== null && (e.beginScope = e.scope, delete e.scope);
  })(t), typeof t.beginScope == "string" && (t.beginScope = { _wrap: t.beginScope }), typeof t.endScope == "string" && (t.endScope = { _wrap: t.endScope }), function(e) {
    if (Array.isArray(e.begin)) {
      if (e.skip || e.excludeBegin || e.returnBegin)
        throw Nt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), fe;
      if (typeof e.beginScope != "object" || e.beginScope === null)
        throw Nt("beginScope must be object"), fe;
      Tn(e, e.begin, { key: "beginScope" }), e.begin = We(e.begin, { joinWith: "" });
    }
  }(t), function(e) {
    if (Array.isArray(e.end)) {
      if (e.skip || e.excludeEnd || e.returnEnd)
        throw Nt("skip, excludeEnd, returnEnd not compatible with endScope: {}"), fe;
      if (typeof e.endScope != "object" || e.endScope === null)
        throw Nt("endScope must be object"), fe;
      Tn(e, e.end, { key: "endScope" }), e.end = We(e.end, { joinWith: "" });
    }
  }(t);
}
function us(t) {
  function e(r, s) {
    return new RegExp(se(r), "m" + (t.case_insensitive ? "i" : "") + (t.unicodeRegex ? "u" : "") + (s ? "g" : ""));
  }
  class n {
    constructor() {
      this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
    }
    addRule(s, o) {
      o.position = this.position++, this.matchIndexes[this.matchAt] = o, this.regexes.push([o, s]), this.matchAt += ji(s) + 1;
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null);
      const s = this.regexes.map((o) => o[1]);
      this.matcherRe = e(We(s, { joinWith: "|" }), !0), this.lastIndex = 0;
    }
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const o = this.matcherRe.exec(s);
      if (!o)
        return null;
      const a = o.findIndex((p, u) => u > 0 && p !== void 0), l = this.matchIndexes[a];
      return o.splice(0, a), Object.assign(o, l);
    }
  }
  class i {
    constructor() {
      this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
    }
    getMatcher(s) {
      if (this.multiRegexes[s])
        return this.multiRegexes[s];
      const o = new n();
      return this.rules.slice(s).forEach(([a, l]) => o.addRule(a, l)), o.compile(), this.multiRegexes[s] = o, o;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    addRule(s, o) {
      this.rules.push([s, o]), o.type === "begin" && this.count++;
    }
    exec(s) {
      const o = this.getMatcher(this.regexIndex);
      o.lastIndex = this.lastIndex;
      let a = o.exec(s);
      if (this.resumingScanAtSamePosition() && !(a && a.index === this.lastIndex)) {
        const l = this.getMatcher(0);
        l.lastIndex = this.lastIndex + 1, a = l.exec(s);
      }
      return a && (this.regexIndex += a.position + 1, this.regexIndex === this.count && this.considerAll()), a;
    }
  }
  if (t.compilerExtensions || (t.compilerExtensions = []), t.contains && t.contains.includes("self"))
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  return t.classNameAliases = kt(t.classNameAliases || {}), function r(s, o) {
    const a = s;
    if (s.isCompiled)
      return a;
    [ts, is, cs, ss].forEach((p) => p(s, o)), t.compilerExtensions.forEach((p) => p(s, o)), s.__beforeBegin = null, [es, ns, rs].forEach((p) => p(s, o)), s.isCompiled = !0;
    let l = null;
    return typeof s.keywords == "object" && s.keywords.$pattern && (s.keywords = Object.assign({}, s.keywords), l = s.keywords.$pattern, delete s.keywords.$pattern), l = l || /\w+/, s.keywords && (s.keywords = Pi(s.keywords, t.case_insensitive)), a.keywordPatternRe = e(l, !0), o && (s.begin || (s.begin = /\B|\b/), a.beginRe = e(a.begin), s.end || s.endsWithParent || (s.end = /\B|\b/), s.end && (a.endRe = e(a.end)), a.terminatorEnd = se(a.end) || "", s.endsWithParent && o.terminatorEnd && (a.terminatorEnd += (s.end ? "|" : "") + o.terminatorEnd)), s.illegal && (a.illegalRe = e(s.illegal)), s.contains || (s.contains = []), s.contains = [].concat(...s.contains.map((p) => function(u) {
      return u.variants && !u.cachedVariants && (u.cachedVariants = u.variants.map((h) => kt(u, { variants: null }, h))), u.cachedVariants ? u.cachedVariants : Di(u) ? kt(u, { starts: u.starts ? kt(u.starts) : null }) : Object.isFrozen(u) ? kt(u) : u;
    }(p === "self" ? s : p))), s.contains.forEach((p) => {
      r(p, a);
    }), s.starts && r(s.starts, o), a.matcher = function(p) {
      const u = new i();
      return p.contains.forEach((h) => u.addRule(h.begin, { rule: h, type: "begin" })), p.terminatorEnd && u.addRule(p.terminatorEnd, { type: "end" }), p.illegal && u.addRule(p.illegal, { type: "illegal" }), u;
    }(a), a;
  }(t);
}
function Di(t) {
  return !!t && (t.endsWithParent || Di(t.starts));
}
class ps extends Error {
  constructor(e, n) {
    super(e), this.name = "HTMLInjectionError", this.html = n;
  }
}
const Oe = Li, Mn = kt, In = Symbol("nomatch"), Hi = (t) => {
  const e = /* @__PURE__ */ Object.create(null), n = /* @__PURE__ */ Object.create(null), i = [];
  let r = !0;
  const s = "Could not find the language '{}', did you forget to load/include a language module?", o = { disableAutodetect: !0, name: "Plain text", contains: [] };
  let a = { ignoreUnescapedHTML: !1, throwUnescapedHTML: !1, noHighlightRe: /^(no-?highlight)$/i, languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i, classPrefix: "hljs-", cssSelector: "pre code", languages: null, __emitter: zr };
  function l(b) {
    return a.noHighlightRe.test(b);
  }
  function p(b, m, w) {
    let y = "", E = "";
    typeof m == "object" ? (y = b, w = m.ignoreIllegals, E = m.language) : (Rt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Rt("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), E = b, y = m), w === void 0 && (w = !0);
    const S = { code: y, language: E };
    v("before:highlight", S);
    const L = S.result ? S.result : u(S.language, S.code, w);
    return L.code = S.code, v("after:highlight", L), L;
  }
  function u(b, m, w, y) {
    const E = /* @__PURE__ */ Object.create(null);
    function S() {
      if (!j.keywords)
        return void nt.addText(G);
      let $ = 0;
      j.keywordPatternRe.lastIndex = 0;
      let M = j.keywordPatternRe.exec(G), K = "";
      for (; M; ) {
        K += G.substring($, M.index);
        const J = _.case_insensitive ? M[0].toLowerCase() : M[0], it = (U = J, j.keywords[U]);
        if (it) {
          const [ht, Te] = it;
          if (nt.addText(K), K = "", E[J] = (E[J] || 0) + 1, E[J] <= 7 && (ue += Te), ht.startsWith("_"))
            K += M[0];
          else {
            const pe = _.classNameAliases[ht] || ht;
            T(M[0], pe);
          }
        } else
          K += M[0];
        $ = j.keywordPatternRe.lastIndex, M = j.keywordPatternRe.exec(G);
      }
      var U;
      K += G.substring($), nt.addText(K);
    }
    function L() {
      j.subLanguage != null ? function() {
        if (G === "")
          return;
        let $ = null;
        if (typeof j.subLanguage == "string") {
          if (!e[j.subLanguage])
            return void nt.addText(G);
          $ = u(j.subLanguage, G, !0, pn[j.subLanguage]), pn[j.subLanguage] = $._top;
        } else
          $ = h(G, j.subLanguage.length ? j.subLanguage : null);
        j.relevance > 0 && (ue += $.relevance), nt.__addSublanguage($._emitter, $.language);
      }() : S(), G = "";
    }
    function T($, M) {
      $ !== "" && (nt.startScope(M), nt.addText($), nt.endScope());
    }
    function k($, M) {
      let K = 1;
      const U = M.length - 1;
      for (; K <= U; ) {
        if (!$._emit[K]) {
          K++;
          continue;
        }
        const J = _.classNameAliases[$[K]] || $[K], it = M[K];
        J ? T(it, J) : (G = it, S(), G = ""), K++;
      }
    }
    function q($, M) {
      return $.scope && typeof $.scope == "string" && nt.openNode(_.classNameAliases[$.scope] || $.scope), $.beginScope && ($.beginScope._wrap ? (T(G, _.classNameAliases[$.beginScope._wrap] || $.beginScope._wrap), G = "") : $.beginScope._multi && (k($.beginScope, M), G = "")), j = Object.create($, { parent: { value: j } }), j;
    }
    function P($, M, K) {
      let U = function(J, it) {
        const ht = J && J.exec(it);
        return ht && ht.index === 0;
      }($.endRe, K);
      if (U) {
        if ($["on:end"]) {
          const J = new En($);
          $["on:end"](M, J), J.isMatchIgnored && (U = !1);
        }
        if (U) {
          for (; $.endsParent && $.parent; )
            $ = $.parent;
          return $;
        }
      }
      if ($.endsWithParent)
        return P($.parent, M, K);
    }
    function O($) {
      return j.matcher.regexIndex === 0 ? (G += $[0], 1) : (Ce = !0, 0);
    }
    function V($) {
      const M = $[0], K = m.substring($.index), U = P(j, $, K);
      if (!U)
        return In;
      const J = j;
      j.endScope && j.endScope._wrap ? (L(), T(M, j.endScope._wrap)) : j.endScope && j.endScope._multi ? (L(), k(j.endScope, $)) : J.skip ? G += M : (J.returnEnd || J.excludeEnd || (G += M), L(), J.excludeEnd && (G = M));
      do
        j.scope && nt.closeNode(), j.skip || j.subLanguage || (ue += j.relevance), j = j.parent;
      while (j !== U.parent);
      return U.starts && q(U.starts, $), J.returnEnd ? 0 : M.length;
    }
    let A = {};
    function z($, M) {
      const K = M && M[0];
      if (G += $, K == null)
        return L(), 0;
      if (A.type === "begin" && M.type === "end" && A.index === M.index && K === "") {
        if (G += m.slice(M.index, M.index + 1), !r) {
          const U = new Error(`0 width match regex (${b})`);
          throw U.languageName = b, U.badRule = A.rule, U;
        }
        return 1;
      }
      if (A = M, M.type === "begin")
        return function(U) {
          const J = U[0], it = U.rule, ht = new En(it), Te = [it.__beforeBegin, it["on:begin"]];
          for (const pe of Te)
            if (pe && (pe(U, ht), ht.isMatchIgnored))
              return O(J);
          return it.skip ? G += J : (it.excludeBegin && (G += J), L(), it.returnBegin || it.excludeBegin || (G = J)), q(it, U), it.returnBegin ? 0 : J.length;
        }(M);
      if (M.type === "illegal" && !w) {
        const U = new Error('Illegal lexeme "' + K + '" for mode "' + (j.scope || "<unnamed>") + '"');
        throw U.mode = j, U;
      }
      if (M.type === "end") {
        const U = V(M);
        if (U !== In)
          return U;
      }
      if (M.type === "illegal" && K === "")
        return 1;
      if (Ne > 1e5 && Ne > 3 * M.index)
        throw new Error("potential infinite loop, way more iterations than matches");
      return G += K, K.length;
    }
    const _ = x(b);
    if (!_)
      throw Nt(s.replace("{}", b)), new Error('Unknown language: "' + b + '"');
    const et = us(_);
    let Ft = "", j = y || et;
    const pn = {}, nt = new a.__emitter(a);
    (function() {
      const $ = [];
      for (let M = j; M !== _; M = M.parent)
        M.scope && $.unshift(M.scope);
      $.forEach((M) => nt.openNode(M));
    })();
    let G = "", ue = 0, _t = 0, Ne = 0, Ce = !1;
    try {
      if (_.__emitTokens)
        _.__emitTokens(m, nt);
      else {
        for (j.matcher.considerAll(); ; ) {
          Ne++, Ce ? Ce = !1 : j.matcher.considerAll(), j.matcher.lastIndex = _t;
          const $ = j.matcher.exec(m);
          if (!$)
            break;
          const M = z(m.substring(_t, $.index), $);
          _t = $.index + M;
        }
        z(m.substring(_t));
      }
      return nt.finalize(), Ft = nt.toHTML(), { language: b, value: Ft, relevance: ue, illegal: !1, _emitter: nt, _top: j };
    } catch ($) {
      if ($.message && $.message.includes("Illegal"))
        return { language: b, value: Oe(m), illegal: !0, relevance: 0, _illegalBy: { message: $.message, index: _t, context: m.slice(_t - 100, _t + 100), mode: $.mode, resultSoFar: Ft }, _emitter: nt };
      if (r)
        return { language: b, value: Oe(m), illegal: !1, relevance: 0, errorRaised: $, _emitter: nt, _top: j };
      throw $;
    }
  }
  function h(b, m) {
    m = m || a.languages || Object.keys(e);
    const w = function(k) {
      const q = { value: Oe(k), illegal: !1, relevance: 0, _top: o, _emitter: new a.__emitter(a) };
      return q._emitter.addText(k), q;
    }(b), y = m.filter(x).filter(c).map((k) => u(k, b, !1));
    y.unshift(w);
    const E = y.sort((k, q) => {
      if (k.relevance !== q.relevance)
        return q.relevance - k.relevance;
      if (k.language && q.language) {
        if (x(k.language).supersetOf === q.language)
          return 1;
        if (x(q.language).supersetOf === k.language)
          return -1;
      }
      return 0;
    }), [S, L] = E, T = S;
    return T.secondBest = L, T;
  }
  function d(b) {
    let m = null;
    const w = function(S) {
      let L = S.className + " ";
      L += S.parentNode ? S.parentNode.className : "";
      const T = a.languageDetectRe.exec(L);
      if (T) {
        const k = x(T[1]);
        return k || s.replace("{}", T[1]), k ? T[1] : "no-highlight";
      }
      return L.split(/\s+/).find((k) => l(k) || x(k));
    }(b);
    if (l(w) || (v("before:highlightElement", { el: b, language: w }), b.dataset.highlighted))
      return;
    if (b.children.length > 0 && (a.ignoreUnescapedHTML, a.throwUnescapedHTML))
      throw new ps("One of your code blocks includes unescaped HTML.", b.innerHTML);
    m = b;
    const y = m.textContent, E = w ? p(y, { language: w, ignoreIllegals: !0 }) : h(y);
    b.innerHTML = E.value, b.dataset.highlighted = "yes", function(S, L, T) {
      const k = L && n[L] || T;
      S.classList.add("hljs"), S.classList.add(`language-${k}`);
    }(b, w, E.language), b.result = { language: E.language, re: E.relevance, relevance: E.relevance }, E.secondBest && (b.secondBest = { language: E.secondBest.language, relevance: E.secondBest.relevance }), v("after:highlightElement", { el: b, result: E, text: y });
  }
  let f = !1;
  function g() {
    if (document.readyState === "loading")
      return void (f = !0);
    document.querySelectorAll(a.cssSelector).forEach(d);
  }
  function x(b) {
    return b = (b || "").toLowerCase(), e[b] || e[n[b]];
  }
  function C(b, { languageName: m }) {
    typeof b == "string" && (b = [b]), b.forEach((w) => {
      n[w.toLowerCase()] = m;
    });
  }
  function c(b) {
    const m = x(b);
    return m && !m.disableAutodetect;
  }
  function v(b, m) {
    const w = b;
    i.forEach((y) => {
      y[w] && y[w](m);
    });
  }
  typeof window < "u" && window.addEventListener && window.addEventListener("DOMContentLoaded", function() {
    f && g();
  }, !1), Object.assign(t, { highlight: p, highlightAuto: h, highlightAll: g, highlightElement: d, highlightBlock: function(b) {
    return Rt("10.7.0", "highlightBlock will be removed entirely in v12.0"), Rt("10.7.0", "Please use highlightElement now."), d(b);
  }, configure: function(b) {
    a = Mn(a, b);
  }, initHighlighting: () => {
    g(), Rt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  }, initHighlightingOnLoad: function() {
    g(), Rt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }, registerLanguage: function(b, m) {
    let w = null;
    try {
      w = m(t);
    } catch (y) {
      if (Nt("Language definition for '{}' could not be registered.".replace("{}", b)), !r)
        throw y;
      Nt(y), w = o;
    }
    w.name || (w.name = b), e[b] = w, w.rawDefinition = m.bind(null, t), w.aliases && C(w.aliases, { languageName: b });
  }, unregisterLanguage: function(b) {
    delete e[b];
    for (const m of Object.keys(n))
      n[m] === b && delete n[m];
  }, listLanguages: function() {
    return Object.keys(e);
  }, getLanguage: x, registerAliases: C, autoDetection: c, inherit: Mn, addPlugin: function(b) {
    (function(m) {
      m["before:highlightBlock"] && !m["before:highlightElement"] && (m["before:highlightElement"] = (w) => {
        m["before:highlightBlock"](Object.assign({ block: w.el }, w));
      }), m["after:highlightBlock"] && !m["after:highlightElement"] && (m["after:highlightElement"] = (w) => {
        m["after:highlightBlock"](Object.assign({ block: w.el }, w));
      });
    })(b), i.push(b);
  }, removePlugin: function(b) {
    const m = i.indexOf(b);
    m !== -1 && i.splice(m, 1);
  } }), t.debugMode = () => {
    r = !1;
  }, t.safeMode = () => {
    r = !0;
  }, t.versionString = "11.9.0", t.regex = { concat: Ot, lookahead: Oi, either: an, optional: qr, anyNumberOfTimes: Br };
  for (const b in ge)
    typeof ge[b] == "object" && Ii(ge[b]);
  return Object.assign(t, ge), t;
}, Dt = Hi({});
Dt.newInstance = () => Hi({});
var hs = Dt;
Dt.HighlightJS = Dt, Dt.default = Dt;
const xt = jr(hs), Ln = "[A-Za-z$_][0-9A-Za-z$_]*", ds = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"], gs = ["true", "false", "null", "undefined", "NaN", "Infinity"], Ui = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"], Zi = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"], Fi = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], fs = ["arguments", "this", "super", "console", "window", "document", "localStorage", "sessionStorage", "module", "global"], ms = [].concat(Fi, Ui, Zi);
function On(t) {
  return (t || "").match(/\S*/)[0];
}
function jn(t) {
  return (e) => {
    typeof e == "string" && e !== t.text && (t.escaped = !0, t.text = e);
  };
}
xt.registerLanguage("javascript", function(t) {
  const e = t.regex, n = Ln, i = "<>", r = "</>", s = { begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (P, O) => {
    const V = P[0].length + P.index, A = P.input[V];
    if (A === "<" || A === ",")
      return void O.ignoreMatch();
    let z;
    A === ">" && (((et, { after: Ft }) => {
      const j = "</" + et[0].slice(1);
      return et.input.indexOf(j, Ft) !== -1;
    })(P, { after: V }) || O.ignoreMatch());
    const _ = P.input.substring(V);
    ((z = _.match(/^\s*=/)) || (z = _.match(/^\s+extends\s+/)) && z.index === 0) && O.ignoreMatch();
  } }, o = { $pattern: Ln, keyword: ds, literal: gs, built_in: ms, "variable.language": fs }, a = "[0-9](_?[0-9])*", l = `\\.(${a})`, p = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", u = { className: "number", variants: [{ begin: `(\\b(${p})((${l})|\\.)?|(${l}))[eE][+-]?(${a})\\b` }, { begin: `\\b(${p})\\b((${l})\\b|\\.)?|(${l})\\b` }, { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" }, { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" }, { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" }, { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" }, { begin: "\\b0[0-7]+n?\\b" }], relevance: 0 }, h = { className: "subst", begin: "\\$\\{", end: "\\}", keywords: o, contains: [] }, d = { begin: "html`", end: "", starts: { end: "`", returnEnd: !1, contains: [t.BACKSLASH_ESCAPE, h], subLanguage: "xml" } }, f = { begin: "css`", end: "", starts: { end: "`", returnEnd: !1, contains: [t.BACKSLASH_ESCAPE, h], subLanguage: "css" } }, g = { begin: "gql`", end: "", starts: { end: "`", returnEnd: !1, contains: [t.BACKSLASH_ESCAPE, h], subLanguage: "graphql" } }, x = { className: "string", begin: "`", end: "`", contains: [t.BACKSLASH_ESCAPE, h] }, C = { className: "comment", variants: [t.COMMENT(/\/\*\*(?!\/)/, "\\*/", { relevance: 0, contains: [{ begin: "(?=@[A-Za-z]+)", relevance: 0, contains: [{ className: "doctag", begin: "@[A-Za-z]+" }, { className: "type", begin: "\\{", end: "\\}", excludeEnd: !0, excludeBegin: !0, relevance: 0 }, { className: "variable", begin: n + "(?=\\s*(-)|$)", endsParent: !0, relevance: 0 }, { begin: /(?=[^\n])\s/, relevance: 0 }] }] }), t.C_BLOCK_COMMENT_MODE, t.C_LINE_COMMENT_MODE] }, c = [t.APOS_STRING_MODE, t.QUOTE_STRING_MODE, d, f, g, x, { match: /\$\d+/ }, u];
  h.contains = c.concat({ begin: /\{/, end: /\}/, keywords: o, contains: ["self"].concat(c) });
  const v = [].concat(C, h.contains), b = v.concat([{ begin: /\(/, end: /\)/, keywords: o, contains: ["self"].concat(v) }]), m = { className: "params", begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: o, contains: b }, w = { variants: [{ match: [/class/, /\s+/, n, /\s+/, /extends/, /\s+/, e.concat(n, "(", e.concat(/\./, n), ")*")], scope: { 1: "keyword", 3: "title.class", 5: "keyword", 7: "title.class.inherited" } }, { match: [/class/, /\s+/, n], scope: { 1: "keyword", 3: "title.class" } }] }, y = { relevance: 0, match: e.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/), className: "title.class", keywords: { _: [...Ui, ...Zi] } }, E = { variants: [{ match: [/function/, /\s+/, n, /(?=\s*\()/] }, { match: [/function/, /\s*(?=\()/] }], className: { 1: "keyword", 3: "title.function" }, label: "func.def", contains: [m], illegal: /%/ }, S = { match: e.concat(/\b/, function(P) {
    return e.concat("(?!", P.join("|"), ")");
  }([...Fi, "super", "import"]), n, e.lookahead(/\(/)), className: "title.function", relevance: 0 }, L = { begin: e.concat(/\./, e.lookahead(e.concat(n, /(?![0-9A-Za-z$_(])/))), end: n, excludeBegin: !0, keywords: "prototype", className: "property", relevance: 0 }, T = { match: [/get|set/, /\s+/, n, /(?=\()/], className: { 1: "keyword", 3: "title.function" }, contains: [{ begin: /\(\)/ }, m] }, k = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + t.UNDERSCORE_IDENT_RE + ")\\s*=>", q = { match: [/const|var|let/, /\s+/, n, /\s*/, /=\s*/, /(async\s*)?/, e.lookahead(k)], keywords: "async", className: { 1: "keyword", 3: "title.function" }, contains: [m] };
  return { name: "JavaScript", aliases: ["js", "jsx", "mjs", "cjs"], keywords: o, exports: { PARAMS_CONTAINS: b, CLASS_REFERENCE: y }, illegal: /#(?![$_A-z])/, contains: [t.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }), { label: "use_strict", className: "meta", relevance: 10, begin: /^\s*['"]use (strict|asm)['"]/ }, t.APOS_STRING_MODE, t.QUOTE_STRING_MODE, d, f, g, x, C, { match: /\$\d+/ }, u, y, { className: "attr", begin: n + e.lookahead(":"), relevance: 0 }, q, { begin: "(" + t.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*", keywords: "return throw case", relevance: 0, contains: [C, t.REGEXP_MODE, { className: "function", begin: k, returnBegin: !0, end: "\\s*=>", contains: [{ className: "params", variants: [{ begin: t.UNDERSCORE_IDENT_RE, relevance: 0 }, { className: null, begin: /\(\s*\)/, skip: !0 }, { begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: o, contains: b }] }] }, { begin: /,/, relevance: 0 }, { match: /\s+/, relevance: 0 }, { variants: [{ begin: i, end: r }, { match: /<[A-Za-z0-9\\._:-]+\s*\/>/ }, { begin: s.begin, "on:begin": s.isTrulyOpeningTag, end: s.end }], subLanguage: "xml", contains: [{ begin: s.begin, end: s.end, skip: !0, contains: ["self"] }] }] }, E, { beginKeywords: "while if switch catch for" }, { begin: "\\b(?!function)" + t.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{", returnBegin: !0, label: "func.def", contains: [m, t.inherit(t.TITLE_MODE, { begin: n, className: "title.function" })] }, { match: /\.\.\./, relevance: 0 }, L, { match: "\\$" + n, relevance: 0 }, { match: [/\bconstructor(?=\s*\()/], className: { 1: "title.function" }, contains: [m] }, S, { relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: "variable.constant" }, w, T, { match: /\$[(.]/ }] };
}), xt.registerLanguage("python", function(t) {
  const e = t.regex, n = /[\p{XID_Start}_]\p{XID_Continue}*/u, i = ["and", "as", "assert", "async", "await", "break", "case", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "match", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"], r = { $pattern: /[A-Za-z]\w+|__\w+__/, keyword: i, built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"], literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"], type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"] }, s = { className: "meta", begin: /^(>>>|\.\.\.) / }, o = { className: "subst", begin: /\{/, end: /\}/, keywords: r, illegal: /#/ }, a = { begin: /\{\{/, relevance: 0 }, l = { className: "string", contains: [t.BACKSLASH_ESCAPE], variants: [{ begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/, end: /'''/, contains: [t.BACKSLASH_ESCAPE, s], relevance: 10 }, { begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/, end: /"""/, contains: [t.BACKSLASH_ESCAPE, s], relevance: 10 }, { begin: /([fF][rR]|[rR][fF]|[fF])'''/, end: /'''/, contains: [t.BACKSLASH_ESCAPE, s, a, o] }, { begin: /([fF][rR]|[rR][fF]|[fF])"""/, end: /"""/, contains: [t.BACKSLASH_ESCAPE, s, a, o] }, { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 }, { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 }, { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ }, { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ }, { begin: /([fF][rR]|[rR][fF]|[fF])'/, end: /'/, contains: [t.BACKSLASH_ESCAPE, a, o] }, { begin: /([fF][rR]|[rR][fF]|[fF])"/, end: /"/, contains: [t.BACKSLASH_ESCAPE, a, o] }, t.APOS_STRING_MODE, t.QUOTE_STRING_MODE] }, p = "[0-9](_?[0-9])*", u = `(\\b(${p}))?\\.(${p})|\\b(${p})\\.`, h = `\\b|${i.join("|")}`, d = { className: "number", relevance: 0, variants: [{ begin: `(\\b(${p})|(${u}))[eE][+-]?(${p})[jJ]?(?=${h})` }, { begin: `(${u})[jJ]?` }, { begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${h})` }, { begin: `\\b0[bB](_?[01])+[lL]?(?=${h})` }, { begin: `\\b0[oO](_?[0-7])+[lL]?(?=${h})` }, { begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${h})` }, { begin: `\\b(${p})[jJ](?=${h})` }] }, f = { className: "comment", begin: e.lookahead(/# type:/), end: /$/, keywords: r, contains: [{ begin: /# type:/ }, { begin: /#/, end: /\b\B/, endsWithParent: !0 }] }, g = { className: "params", variants: [{ className: "", begin: /\(\s*\)/, skip: !0 }, { begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: r, contains: ["self", s, d, l, t.HASH_COMMENT_MODE] }] };
  return o.contains = [l, d, s], { name: "Python", aliases: ["py", "gyp", "ipython"], unicodeRegex: !0, keywords: r, illegal: /(<\/|\?)|=>/, contains: [s, d, { begin: /\bself\b/ }, { beginKeywords: "if", relevance: 0 }, l, f, t.HASH_COMMENT_MODE, { match: [/\bdef/, /\s+/, n], scope: { 1: "keyword", 3: "title.function" }, contains: [g] }, { variants: [{ match: [/\bclass/, /\s+/, n, /\s*/, /\(\s*/, n, /\s*\)/] }, { match: [/\bclass/, /\s+/, n] }], scope: { 1: "keyword", 3: "title.class", 6: "title.class.inherited" } }, { className: "meta", begin: /^[\t ]*@/, end: /(?=#)|$/, contains: [d, g, l] }] };
}), xt.registerLanguage("cpp", function(t) {
  const e = t.regex, n = t.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }), i = "decltype\\(auto\\)", r = "[a-zA-Z_]\\w*::", s = "(?!struct)(" + i + "|" + e.optional(r) + "[a-zA-Z_]\\w*" + e.optional("<[^<>]+>") + ")", o = { className: "type", begin: "\\b[a-z\\d_]*_t\\b" }, a = { className: "string", variants: [{ begin: '(u8?|U|L)?"', end: '"', illegal: "\\n", contains: [t.BACKSLASH_ESCAPE] }, { begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)", end: "'", illegal: "." }, t.END_SAME_AS_BEGIN({ begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, end: /\)([^()\\ ]{0,16})"/ })] }, l = { className: "number", variants: [{ begin: "\\b(0b[01']+)" }, { begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)" }, { begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" }], relevance: 0 }, p = { className: "meta", begin: /#\s*[a-z]+\b/, end: /$/, keywords: { keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include" }, contains: [{ begin: /\\\n/, relevance: 0 }, t.inherit(a, { className: "string" }), { className: "string", begin: /<.*?>/ }, n, t.C_BLOCK_COMMENT_MODE] }, u = { className: "title", begin: e.optional(r) + t.IDENT_RE, relevance: 0 }, h = e.optional(r) + t.IDENT_RE + "\\s*\\(", d = { type: ["bool", "char", "char16_t", "char32_t", "char8_t", "double", "float", "int", "long", "short", "void", "wchar_t", "unsigned", "signed", "const", "static"], keyword: ["alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel", "atomic_commit", "atomic_noexcept", "auto", "bitand", "bitor", "break", "case", "catch", "class", "co_await", "co_return", "co_yield", "compl", "concept", "const_cast|10", "consteval", "constexpr", "constinit", "continue", "decltype", "default", "delete", "do", "dynamic_cast|10", "else", "enum", "explicit", "export", "extern", "false", "final", "for", "friend", "goto", "if", "import", "inline", "module", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "override", "private", "protected", "public", "reflexpr", "register", "reinterpret_cast|10", "requires", "return", "sizeof", "static_assert", "static_cast|10", "struct", "switch", "synchronized", "template", "this", "thread_local", "throw", "transaction_safe", "transaction_safe_dynamic", "true", "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile", "while", "xor", "xor_eq"], literal: ["NULL", "false", "nullopt", "nullptr", "true"], built_in: ["_Pragma"], _type_hints: ["any", "auto_ptr", "barrier", "binary_semaphore", "bitset", "complex", "condition_variable", "condition_variable_any", "counting_semaphore", "deque", "false_type", "future", "imaginary", "initializer_list", "istringstream", "jthread", "latch", "lock_guard", "multimap", "multiset", "mutex", "optional", "ostringstream", "packaged_task", "pair", "promise", "priority_queue", "queue", "recursive_mutex", "recursive_timed_mutex", "scoped_lock", "set", "shared_future", "shared_lock", "shared_mutex", "shared_timed_mutex", "shared_ptr", "stack", "string_view", "stringstream", "timed_mutex", "thread", "true_type", "tuple", "unique_lock", "unique_ptr", "unordered_map", "unordered_multimap", "unordered_multiset", "unordered_set", "variant", "vector", "weak_ptr", "wstring", "wstring_view"] }, f = { className: "function.dispatch", relevance: 0, keywords: { _hint: ["abort", "abs", "acos", "apply", "as_const", "asin", "atan", "atan2", "calloc", "ceil", "cerr", "cin", "clog", "cos", "cosh", "cout", "declval", "endl", "exchange", "exit", "exp", "fabs", "floor", "fmod", "forward", "fprintf", "fputs", "free", "frexp", "fscanf", "future", "invoke", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "labs", "launder", "ldexp", "log", "log10", "make_pair", "make_shared", "make_shared_for_overwrite", "make_tuple", "make_unique", "malloc", "memchr", "memcmp", "memcpy", "memset", "modf", "move", "pow", "printf", "putchar", "puts", "realloc", "scanf", "sin", "sinh", "snprintf", "sprintf", "sqrt", "sscanf", "std", "stderr", "stdin", "stdout", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "swap", "tan", "tanh", "terminate", "to_underlying", "tolower", "toupper", "vfprintf", "visit", "vprintf", "vsprintf"] }, begin: e.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, t.IDENT_RE, e.lookahead(/(<[^<>]+>|)\s*\(/)) }, g = [f, p, o, n, t.C_BLOCK_COMMENT_MODE, l, a], x = { variants: [{ begin: /=/, end: /;/ }, { begin: /\(/, end: /\)/ }, { beginKeywords: "new throw return else", end: /;/ }], keywords: d, contains: g.concat([{ begin: /\(/, end: /\)/, keywords: d, contains: g.concat(["self"]), relevance: 0 }]), relevance: 0 }, C = { className: "function", begin: "(" + s + "[\\*&\\s]+)+" + h, returnBegin: !0, end: /[{;=]/, excludeEnd: !0, keywords: d, illegal: /[^\w\s\*&:<>.]/, contains: [{ begin: i, keywords: d, relevance: 0 }, { begin: h, returnBegin: !0, contains: [u], relevance: 0 }, { begin: /::/, relevance: 0 }, { begin: /:/, endsWithParent: !0, contains: [a, l] }, { relevance: 0, match: /,/ }, { className: "params", begin: /\(/, end: /\)/, keywords: d, relevance: 0, contains: [n, t.C_BLOCK_COMMENT_MODE, a, l, o, { begin: /\(/, end: /\)/, keywords: d, relevance: 0, contains: ["self", n, t.C_BLOCK_COMMENT_MODE, a, l, o] }] }, o, n, t.C_BLOCK_COMMENT_MODE, p] };
  return { name: "C++", aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"], keywords: d, illegal: "</", classNameAliases: { "function.dispatch": "built_in" }, contains: [].concat(x, C, f, g, [p, { begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)", end: ">", keywords: d, contains: ["self", o] }, { begin: t.IDENT_RE + "::", keywords: d }, { match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/], className: { 1: "keyword", 3: "title.class" } }]) };
}), xt.registerLanguage("json", function(t) {
  const e = ["true", "false", "null"], n = { scope: "literal", beginKeywords: e.join(" ") };
  return { name: "JSON", keywords: { literal: e }, contains: [{ className: "attr", begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/, relevance: 1.01 }, { match: /[{}[\],:]/, className: "punctuation", relevance: 0 }, t.QUOTE_STRING_MODE, n, t.C_NUMBER_MODE, t.C_LINE_COMMENT_MODE, t.C_BLOCK_COMMENT_MODE], illegal: "\\S" };
}), xt.registerLanguage("yaml", function(t) {
  const e = "true false yes no null", n = "[\\w#;/?:@&=+$,.~*'()[\\]]+", i = { className: "string", relevance: 0, variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /\S+/ }], contains: [t.BACKSLASH_ESCAPE, { className: "template-variable", variants: [{ begin: /\{\{/, end: /\}\}/ }, { begin: /%\{/, end: /\}/ }] }] }, r = t.inherit(i, { variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /[^\s,{}[\]]+/ }] }), s = { className: "number", begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b" }, o = { end: ",", endsWithParent: !0, excludeEnd: !0, keywords: e, relevance: 0 }, a = { begin: /\{/, end: /\}/, contains: [o], illegal: "\\n", relevance: 0 }, l = { begin: "\\[", end: "\\]", contains: [o], illegal: "\\n", relevance: 0 }, p = [{ className: "attr", variants: [{ begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)" }, { begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)' }, { begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)" }] }, { className: "meta", begin: "^---\\s*$", relevance: 10 }, { className: "string", begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*" }, { begin: "<%[%=-]?", end: "[%-]?%>", subLanguage: "ruby", excludeBegin: !0, excludeEnd: !0, relevance: 0 }, { className: "type", begin: "!\\w+!" + n }, { className: "type", begin: "!<" + n + ">" }, { className: "type", begin: "!" + n }, { className: "type", begin: "!!" + n }, { className: "meta", begin: "&" + t.UNDERSCORE_IDENT_RE + "$" }, { className: "meta", begin: "\\*" + t.UNDERSCORE_IDENT_RE + "$" }, { className: "bullet", begin: "-(?=[ ]|$)", relevance: 0 }, t.HASH_COMMENT_MODE, { beginKeywords: e, keywords: { literal: e } }, s, { className: "number", begin: t.C_NUMBER_RE + "\\b", relevance: 0 }, a, l, i], u = [...p];
  return u.pop(), u.push(r), o.contains = u, { name: "YAML", case_insensitive: !0, aliases: ["yml"], contains: p };
});
const Ki = /[&<>"']/, bs = new RegExp(Ki.source, "g"), Gi = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, ks = new RegExp(Gi.source, "g"), xs = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Rn = (t) => xs[t];
function zn(t, e) {
  if (e) {
    if (Ki.test(t))
      return t.replace(bs, Rn);
  } else if (Gi.test(t))
    return t.replace(ks, Rn);
  return t;
}
const Bn = [{ type: "note", icon: '<svg class="octicon octicon-info mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>' }, { type: "tip", icon: '<svg class="octicon octicon-light-bulb mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>' }, { type: "important", icon: '<svg class="octicon octicon-report mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>' }, { type: "warning", icon: '<svg class="octicon octicon-alert mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>' }, { type: "caution", icon: '<svg class="octicon octicon-stop mr-2" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>' }];
function qn(t) {
  return `^(?:\\[\\!${t.toUpperCase()}\\])[s]*?
?`;
}
function ws(t) {
  return t.slice(0, 1).toUpperCase() + t.slice(1).toLowerCase();
}
const Ji = /\$\$(.*?)\$\$|\$(.*?)\$/g;
async function Pn(t) {
  let e = await async function() {
    if (window.MathJax && window.MathJax.tex2chtml)
      return "ok";
    if (window.MathJax && !window.MathJax.tex2chtml) {
      const i = (r) => new Promise((s) => {
        setTimeout(s, r);
      });
      for (; !window.MathJax || !window.MathJax.tex2chtml; )
        await i(100);
      return "ok";
    }
    return new Promise((i, r) => {
      window.MathJax = { tex: { inlineMath: [["$", "$"]] }, svg: { fontCache: "global" }, startup: { typeset: !1 } };
      const s = document.createElement("script");
      s.async = !0, s.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js", s.id = "MathJax-script", s.onload = async () => {
        const o = (a) => new Promise((l) => {
          setTimeout(l, a);
        });
        for (; !window.MathJax || !window.MathJax.tex2chtml; )
          await o(100);
        i();
      }, s.onerror = () => r(new Error("Failed to load mathjax")), document.head.appendChild(s);
    });
  }();
  e !== "ok" && await e;
  let n = t;
  if (window.MathJax) {
    const i = t.match(Ji);
    i && i.forEach((r) => {
      const s = r.startsWith("$$") && r.endsWith("$$"), o = s ? r.slice(2, -2) : r.slice(1, -1), a = window.MathJax.tex2chtml(o, { display: s }).innerHTML;
      n = n.replace(r, a);
    });
  }
  return n;
}
class cn {
  constructor(e, n = !1, i = 500, r = 200) {
    D(this, "boardid", "uikit-charts-board");
    this.board = null, this.objects = [], this.data_points = {}, this.data_polygons = {}, this.data_circles = {}, this.data_lines = {}, this.data_text = {}, this.data_arrows = {}, this.data_dot_arrows = {}, this.new_point_id = 0, this.new_circle_id = 0, this.new_line_id = 0, this.brddom = document.createElement("div"), this.brddom.innerHTML = ((s, o = 500, a = 200, l = !1) => `
<div style="position:'relative';display:${l ? "block" : "none"}">
    <div style="position:'absolute'; top: 0">
        <button id="jxgbox-addpoint">添加点</button>
        <button id="jxgbox-addcircle">添加圆</button>
    </div>
    <div id="${s}" class="jxgbox" style="width:${o}px; height:${a}px;">
    </div>
</div>
    `)(this.boardid, i, r, !!n), document.body.appendChild(this.brddom), document.getElementById("jxgbox-addpoint").addEventListener("click", this.addNewPoint.bind(this)), document.getElementById("jxgbox-addcircle").addEventListener("click", this.addNewCircle.bind(this)), this.board = window.JXG.JSXGraph.initBoard(this.boardid, { boundingbox: [-5, 2, 5, -2], keepAspectRatio: !0, showCopyright: !1, showNavigation: !1, showScreenshot: !1 }), e.forEach((s) => {
      switch (s.type) {
        case "text":
          this.setText(s.name, s.target, s.text, s.color);
          break;
        case "polygon":
          this.setPolygon(s.name, s.points, s.color);
          break;
        case "point":
          this.setPoint(s.x, s.y, s.name, s.color, s.show_label);
          break;
        case "circle":
          this.setCircle(s.center, s.len, s.name, s.object);
          break;
        case "line":
          this.setLine(s.points, s.name, s.color);
          break;
        case "arrow":
          this.setArrow(s.points, s.name, s.color);
          break;
        case "dotarrow":
          this.setDotArrow(s.points, s.name, s.color);
      }
    });
  }
  static fromPlain(e = [], n = !1, i = 400, r = 200) {
    let s = [], o = 0, a = 0, l = 0, p = 0, u = 0;
    for (let C of e) {
      if (!C)
        continue;
      let c = C.split(":", 2), v = c[0].split(","), b = c[1].split(",");
      switch (v[0]) {
        case "rect":
          b[0], i = Number.parseInt(b[1]), r = Number.parseInt(b[2]);
          var h = b[3] || "black", d = v[1];
          s.push({ type: "point", name: d, x: 0, y: 0, color: h }, { type: "point", name: `p${p}0`, x: -i / 2, y: -r / 2, color: h }, { type: "point", name: `p${p}1`, x: i / 2, y: -r / 2, color: h }, { type: "point", name: `p${p}2`, x: i / 2, y: r / 2, color: h }, { type: "point", name: `p${p}3`, x: -i / 2, y: r / 2, color: h }), s.push({ type: "polygon", name: `rect${p}`, points: [`p${p}0`, `p${p}1`, `p${p}2`, `p${p}3`], color: h }), p += 1;
        case "point":
          if (b[0] == "center") {
            let y = b[1] || "black";
            s.push({ type: "point", name: v[1] || `point${o}`, x: 0, y: 0, color: y }), o += 1;
          }
          break;
        case "arrow":
          var f = Number.parseInt(b[1]) * (Math.PI / 180), g = Number.parseInt(b[2]), x = (h = b[3] || "black", v[1] || `arrow${a}`);
          s.push({ type: "point", name: x, show_label: !0, x: Math.cos(f) * g, y: Math.sin(f) * g, color: h }), s.push({ type: "arrow", name: `arrow${a}`, points: ["o", x], color: h }), a += 1;
          break;
        case "dotarrow":
          f = Number.parseInt(b[1]) * (Math.PI / 180), g = Number.parseInt(b[2]), h = b[3] || "black", x = v[1] || `arrow${u}`, s.push({ type: "point", name: x, show_label: !0, x: Math.cos(f) * g, y: Math.sin(f) * g, color: h }), s.push({ type: "dotarrow", name: `arrow${u}`, points: ["o", x], color: h }), u += 1;
          break;
        case "text":
          let m = b[0], w = b[1];
          h = b[2] || "black", d = v[1] || `text${l}`, s.push({ type: "text", name: d, target: m, text: w, color: h }), l += 1;
      }
    }
    return new cn(s, n, i, r);
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
  setPoint(e, n, i, r = "black", s = !1) {
    const o = this.board.create("point", [e, n], { name: i, visible: !1, withLabel: s, strokeColor: r, fillColor: r });
    this.objects.push(o), this.data_points[i] = { name: i, x: e, y: n, show_label: s };
  }
  setPolygon(e, n, i = "black") {
    const r = this.board.create("regularpolygon", n.map((s) => this.objects.find((o) => o.name === s)), { name: e, strokeColor: i, fillColor: i });
    this.objects.push(r), this.data_polygons[e] = { name: e, points: n, color: i };
  }
  setText(e, n, i, r = "black") {
    const s = this.board.create("text", [0, -1, i], { anchor: n, strokeColor: r, fillColor: r });
    this.objects.push(s), this.data_text[e] = { name: e, target: n, text: i, color: r };
  }
  setCircle(e, n, i, r) {
    const s = this.board.create("circle", [e, n], { ...r });
    s.on("drag", () => {
      let o = s.center.name, a = s.center.coords.usrCoords;
      this.data_points[o] ? (this.data_points[o].x = a[0], this.data_points[o].y = a[1]) : (this.data_circles[i].center = [a[1], a[2]], this.data_circles[i].len = a[0]);
    }), this.objects.push(s), this.data_circles[i] = { name: i, center: e, len: n };
  }
  setLine(e, n, i = "black") {
    const r = this.board.create("line", e.map((s) => this.objects.find((o) => o.name === s)), { strokeColor: i, fillColor: i });
    this.objects.push(r), this.data_lines[n] = { points: e };
  }
  setArrow(e, n, i = "black") {
    const r = this.board.create("arrow", e.map((s) => this.objects.find((o) => o.name === s)), { strokeColor: i, fillColor: i });
    this.objects.push(r), this.data_arrows[n] = { points: e };
  }
  setDotArrow(e, n, i = "black") {
    const r = this.board.create("arrow", e.map((s) => this.objects.find((o) => o.name === s)), { dash: 2, strokeColor: i, fillColor: i });
    this.objects.push(r), this.data_dot_arrows[n] = { points: e };
  }
  getDataUri() {
    return this.board.renderer.dumpToDataURI();
  }
  getImage() {
    let e = document.createElement("img");
    return e.style.margin = "0 auto", e.src = this.getDataUri(), e;
  }
  getRawData() {
    let e = [];
    for (let n in this.data_points)
      e.push({ type: "point", ...this.data_points[n] });
    for (let n in this.data_circles)
      e.push({ type: "circle", ...this.data_circles[n] });
    for (let n in this.data_lines)
      e.push({ type: "line", ...this.data_lines[n] });
    return e;
  }
}
function ys(t = {}) {
  return { async: !0, async walkTokens(e) {
    let n = e.raw.match(/<graph>([\s\S]*?)<\/graph>/);
    if (!n)
      return;
    let i = await async function() {
      return window.JXG ? "ok" : new Promise((s, o) => {
        const a = document.createElement("script");
        a.async = !0, a.src = "https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js", a.onload = () => s(), a.onerror = () => o(new Error("Failed to load jsxgraph")), document.head.appendChild(a);
      });
    }();
    i !== "ok" && await i;
    let r = cn.fromPlain(n[1].split(`
`)).getImage();
    Object.assign(e, { type: "jsxgraph", meta: { renderedStr: r.outerHTML } });
  }, extensions: [{ name: "jsxgraph", level: "block", renderer: ({ meta: e, tokens: n = [] }) => `<p>${e.renderedStr}</p>` }] };
}
const Wi = ["abstract", "attention", "bug", "caution", "danger", "error", "example", "failure", "hint", "info", "note", "question", "quote", "success", "tip", "warning"], je = new RegExp(`^!!!\\s+(${Wi.join("|")})(?:\\s+)?(.*)$`), _s = /^!!!\s*$/, vs = { unicode: !1, emojis: { favorite: "favorite" }, renderer: (t) => `<span class="material-symbols-outlined">
            ${t.emoji}
        </span>` };
function $s(t = {}) {
  return { async: !0, async walkTokens(e) {
    let n = e.raw.match(/<diagram>([\s\S]*?)<\/diagram>/);
    if (!n)
      return;
    let i = await async function() {
      return window.mermaid ? "ok" : new Promise((s, o) => {
        const a = document.createElement("script");
        a.type = "module", a.textContent = `
            import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
            window.mermaid = mermaid;
            window.mermaid.initialize({ startOnLoad: false });
            window.mermaidLoaded = true;
        `, a.onerror = () => o(new Error("Failed to load jsxgraph")), document.head.appendChild(a);
        const l = setInterval(() => {
          window.mermaidLoaded && (clearInterval(l), s());
        }, 100);
      });
    }();
    i !== "ok" && await i;
    let r = await window.mermaid.render("mermaid-diagram-1", n[1]);
    Object.assign(e, { type: "diagram", meta: { diagram: r.svg } });
  }, extensions: [{ name: "diagram", level: "block", renderer: ({ meta: e, tokens: n = [] }) => `<pre style="background-color:white">${e.diagram}</pre>` }] };
}
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Dn(t) {
  return t == null;
}
var As = function(t, e) {
  var n, i, r, s;
  if (e)
    for (n = 0, i = (s = Object.keys(e)).length; n < i; n += 1)
      t[r = s[n]] = e[r];
  return t;
}, st = { isNothing: Dn, isObject: function(t) {
  return typeof t == "object" && t !== null;
}, toArray: function(t) {
  return Array.isArray(t) ? t : Dn(t) ? [] : [t];
}, repeat: function(t, e) {
  var n, i = "";
  for (n = 0; n < e; n += 1)
    i += t;
  return i;
}, isNegativeZero: function(t) {
  return t === 0 && Number.NEGATIVE_INFINITY === 1 / t;
}, extend: As };
function Qi(t, e) {
  var n = "", i = t.reason || "(unknown reason)";
  return t.mark ? (t.mark.name && (n += 'in "' + t.mark.name + '" '), n += "(" + (t.mark.line + 1) + ":" + (t.mark.column + 1) + ")", !e && t.mark.snippet && (n += `

` + t.mark.snippet), i + " " + n) : i;
}
function Wt(t, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t, this.mark = e, this.message = Qi(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
Wt.prototype = Object.create(Error.prototype), Wt.prototype.constructor = Wt, Wt.prototype.toString = function(t) {
  return this.name + ": " + Qi(this, t);
};
var dt = Wt;
function Re(t, e, n, i, r) {
  var s = "", o = "", a = Math.floor(r / 2) - 1;
  return i - e > a && (e = i - a + (s = " ... ").length), n - i > a && (n = i + a - (o = " ...").length), { str: s + t.slice(e, n).replace(/\t/g, "→") + o, pos: i - e + s.length };
}
function ze(t, e) {
  return st.repeat(" ", e - t.length) + t;
}
var Es = function(t, e) {
  if (e = Object.create(e || null), !t.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var n, i = /\r?\n|\r|\0/g, r = [0], s = [], o = -1; n = i.exec(t.buffer); )
    s.push(n.index), r.push(n.index + n[0].length), t.position <= n.index && o < 0 && (o = r.length - 2);
  o < 0 && (o = r.length - 1);
  var a, l, p = "", u = Math.min(t.line + e.linesAfter, s.length).toString().length, h = e.maxLength - (e.indent + u + 3);
  for (a = 1; a <= e.linesBefore && !(o - a < 0); a++)
    l = Re(t.buffer, r[o - a], s[o - a], t.position - (r[o] - r[o - a]), h), p = st.repeat(" ", e.indent) + ze((t.line - a + 1).toString(), u) + " | " + l.str + `
` + p;
  for (l = Re(t.buffer, r[o], s[o], t.position, h), p += st.repeat(" ", e.indent) + ze((t.line + 1).toString(), u) + " | " + l.str + `
`, p += st.repeat("-", e.indent + u + 3 + l.pos) + `^
`, a = 1; a <= e.linesAfter && !(o + a >= s.length); a++)
    l = Re(t.buffer, r[o + a], s[o + a], t.position - (r[o] - r[o + a]), h), p += st.repeat(" ", e.indent) + ze((t.line + a + 1).toString(), u) + " | " + l.str + `
`;
  return p.replace(/\n$/, "");
}, Ss = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], Ns = ["scalar", "sequence", "mapping"], rt = function(t, e) {
  if (e = e || {}, Object.keys(e).forEach((n) => {
    if (Ss.indexOf(n) === -1)
      throw new dt('Unknown option "' + n + '" is met in definition of "' + t + '" YAML type.');
  }), this.options = e, this.tag = t, this.kind = e.kind || null, this.resolve = e.resolve || (() => !0), this.construct = e.construct || ((n) => n), this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || !1, this.styleAliases = function(n) {
    var i = {};
    return n !== null && Object.keys(n).forEach((r) => {
      n[r].forEach((s) => {
        i[String(s)] = r;
      });
    }), i;
  }(e.styleAliases || null), Ns.indexOf(this.kind) === -1)
    throw new dt('Unknown kind "' + this.kind + '" is specified for "' + t + '" YAML type.');
};
function Hn(t, e) {
  var n = [];
  return t[e].forEach((i) => {
    var r = n.length;
    n.forEach((s, o) => {
      s.tag === i.tag && s.kind === i.kind && s.multi === i.multi && (r = o);
    }), n[r] = i;
  }), n;
}
function Qe(t) {
  return this.extend(t);
}
Qe.prototype.extend = function(t) {
  var e = [], n = [];
  if (t instanceof rt)
    n.push(t);
  else if (Array.isArray(t))
    n = n.concat(t);
  else {
    if (!t || !Array.isArray(t.implicit) && !Array.isArray(t.explicit))
      throw new dt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    t.implicit && (e = e.concat(t.implicit)), t.explicit && (n = n.concat(t.explicit));
  }
  e.forEach((r) => {
    if (!(r instanceof rt))
      throw new dt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (r.loadKind && r.loadKind !== "scalar")
      throw new dt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (r.multi)
      throw new dt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), n.forEach((r) => {
    if (!(r instanceof rt))
      throw new dt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var i = Object.create(Qe.prototype);
  return i.implicit = (this.implicit || []).concat(e), i.explicit = (this.explicit || []).concat(n), i.compiledImplicit = Hn(i, "implicit"), i.compiledExplicit = Hn(i, "explicit"), i.compiledTypeMap = function() {
    var r, s, o = { scalar: {}, sequence: {}, mapping: {}, fallback: {}, multi: { scalar: [], sequence: [], mapping: [], fallback: [] } };
    function a(l) {
      l.multi ? (o.multi[l.kind].push(l), o.multi.fallback.push(l)) : o[l.kind][l.tag] = o.fallback[l.tag] = l;
    }
    for (r = 0, s = arguments.length; r < s; r += 1)
      arguments[r].forEach(a);
    return o;
  }(i.compiledImplicit, i.compiledExplicit), i;
};
var Cs = new Qe({ explicit: [new rt("tag:yaml.org,2002:str", { kind: "scalar", construct: (t) => t !== null ? t : "" }), new rt("tag:yaml.org,2002:seq", { kind: "sequence", construct: (t) => t !== null ? t : [] }), new rt("tag:yaml.org,2002:map", { kind: "mapping", construct: (t) => t !== null ? t : {} })] }), Ts = new rt("tag:yaml.org,2002:null", { kind: "scalar", resolve: function(t) {
  if (t === null)
    return !0;
  var e = t.length;
  return e === 1 && t === "~" || e === 4 && (t === "null" || t === "Null" || t === "NULL");
}, construct: function() {
  return null;
}, predicate: function(t) {
  return t === null;
}, represent: { canonical: () => "~", lowercase: () => "null", uppercase: () => "NULL", camelcase: () => "Null", empty: () => "" }, defaultStyle: "lowercase" }), Ms = new rt("tag:yaml.org,2002:bool", { kind: "scalar", resolve: function(t) {
  if (t === null)
    return !1;
  var e = t.length;
  return e === 4 && (t === "true" || t === "True" || t === "TRUE") || e === 5 && (t === "false" || t === "False" || t === "FALSE");
}, construct: function(t) {
  return t === "true" || t === "True" || t === "TRUE";
}, predicate: function(t) {
  return Object.prototype.toString.call(t) === "[object Boolean]";
}, represent: { lowercase: (t) => t ? "true" : "false", uppercase: (t) => t ? "TRUE" : "FALSE", camelcase: (t) => t ? "True" : "False" }, defaultStyle: "lowercase" });
function Is(t) {
  return 48 <= t && t <= 55;
}
function Ls(t) {
  return 48 <= t && t <= 57;
}
var Os = new rt("tag:yaml.org,2002:int", { kind: "scalar", resolve: function(t) {
  if (t === null)
    return !1;
  var e, n, i = t.length, r = 0, s = !1;
  if (!i)
    return !1;
  if ((e = t[r]) !== "-" && e !== "+" || (e = t[++r]), e === "0") {
    if (r + 1 === i)
      return !0;
    if ((e = t[++r]) === "b") {
      for (r++; r < i; r++)
        if ((e = t[r]) !== "_") {
          if (e !== "0" && e !== "1")
            return !1;
          s = !0;
        }
      return s && e !== "_";
    }
    if (e === "x") {
      for (r++; r < i; r++)
        if ((e = t[r]) !== "_") {
          if (!(48 <= (n = t.charCodeAt(r)) && n <= 57 || 65 <= n && n <= 70 || 97 <= n && n <= 102))
            return !1;
          s = !0;
        }
      return s && e !== "_";
    }
    if (e === "o") {
      for (r++; r < i; r++)
        if ((e = t[r]) !== "_") {
          if (!Is(t.charCodeAt(r)))
            return !1;
          s = !0;
        }
      return s && e !== "_";
    }
  }
  if (e === "_")
    return !1;
  for (; r < i; r++)
    if ((e = t[r]) !== "_") {
      if (!Ls(t.charCodeAt(r)))
        return !1;
      s = !0;
    }
  return !(!s || e === "_");
}, construct: function(t) {
  var e, n = t, i = 1;
  if (n.indexOf("_") !== -1 && (n = n.replace(/_/g, "")), (e = n[0]) !== "-" && e !== "+" || (e === "-" && (i = -1), e = (n = n.slice(1))[0]), n === "0")
    return 0;
  if (e === "0") {
    if (n[1] === "b")
      return i * parseInt(n.slice(2), 2);
    if (n[1] === "x")
      return i * parseInt(n.slice(2), 16);
    if (n[1] === "o")
      return i * parseInt(n.slice(2), 8);
  }
  return i * parseInt(n, 10);
}, predicate: function(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && t % 1 == 0 && !st.isNegativeZero(t);
}, represent: { binary: (t) => t >= 0 ? "0b" + t.toString(2) : "-0b" + t.toString(2).slice(1), octal: (t) => t >= 0 ? "0o" + t.toString(8) : "-0o" + t.toString(8).slice(1), decimal: (t) => t.toString(10), hexadecimal: (t) => t >= 0 ? "0x" + t.toString(16).toUpperCase() : "-0x" + t.toString(16).toUpperCase().slice(1) }, defaultStyle: "decimal", styleAliases: { binary: [2, "bin"], octal: [8, "oct"], decimal: [10, "dec"], hexadecimal: [16, "hex"] } }), js = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), Rs = /^[-+]?[0-9]+e/, zs = new rt("tag:yaml.org,2002:float", { kind: "scalar", resolve: function(t) {
  return t !== null && !(!js.test(t) || t[t.length - 1] === "_");
}, construct: function(t) {
  var e, n;
  return n = (e = t.replace(/_/g, "").toLowerCase())[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? n === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : n * parseFloat(e, 10);
}, predicate: function(t) {
  return Object.prototype.toString.call(t) === "[object Number]" && (t % 1 != 0 || st.isNegativeZero(t));
}, represent: function(t, e) {
  var n;
  if (isNaN(t))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === t)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (st.isNegativeZero(t))
    return "-0.0";
  return n = t.toString(10), Rs.test(n) ? n.replace("e", ".e") : n;
}, defaultStyle: "lowercase" }), Bs = Cs.extend({ implicit: [Ts, Ms, Os, zs] }), Un = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), Zn = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"), qs = new rt("tag:yaml.org,2002:timestamp", { kind: "scalar", resolve: function(t) {
  return t !== null && (Un.exec(t) !== null || Zn.exec(t) !== null);
}, construct: function(t) {
  var e, n, i, r, s, o, a, l, p = 0, u = null;
  if ((e = Un.exec(t)) === null && (e = Zn.exec(t)), e === null)
    throw new Error("Date resolve error");
  if (n = +e[1], i = +e[2] - 1, r = +e[3], !e[4])
    return new Date(Date.UTC(n, i, r));
  if (s = +e[4], o = +e[5], a = +e[6], e[7]) {
    for (p = e[7].slice(0, 3); p.length < 3; )
      p += "0";
    p = +p;
  }
  return e[9] && (u = 6e4 * (60 * +e[10] + +(e[11] || 0)), e[9] === "-" && (u = -u)), l = new Date(Date.UTC(n, i, r, s, o, a, p)), u && l.setTime(l.getTime() - u), l;
}, instanceOf: Date, represent: function(t) {
  return t.toISOString();
} }), Ps = new rt("tag:yaml.org,2002:merge", { kind: "scalar", resolve: function(t) {
  return t === "<<" || t === null;
} }), Be = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`, Ds = new rt("tag:yaml.org,2002:binary", { kind: "scalar", resolve: function(t) {
  if (t === null)
    return !1;
  var e, n, i = 0, r = t.length, s = Be;
  for (n = 0; n < r; n++)
    if (!((e = s.indexOf(t.charAt(n))) > 64)) {
      if (e < 0)
        return !1;
      i += 6;
    }
  return i % 8 == 0;
}, construct: function(t) {
  var e, n, i = t.replace(/[\r\n=]/g, ""), r = i.length, s = Be, o = 0, a = [];
  for (e = 0; e < r; e++)
    e % 4 == 0 && e && (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(255 & o)), o = o << 6 | s.indexOf(i.charAt(e));
  return (n = r % 4 * 6) === 0 ? (a.push(o >> 16 & 255), a.push(o >> 8 & 255), a.push(255 & o)) : n === 18 ? (a.push(o >> 10 & 255), a.push(o >> 2 & 255)) : n === 12 && a.push(o >> 4 & 255), new Uint8Array(a);
}, predicate: function(t) {
  return Object.prototype.toString.call(t) === "[object Uint8Array]";
}, represent: function(t) {
  var e, n, i = "", r = 0, s = t.length, o = Be;
  for (e = 0; e < s; e++)
    e % 3 == 0 && e && (i += o[r >> 18 & 63], i += o[r >> 12 & 63], i += o[r >> 6 & 63], i += o[63 & r]), r = (r << 8) + t[e];
  return (n = s % 3) === 0 ? (i += o[r >> 18 & 63], i += o[r >> 12 & 63], i += o[r >> 6 & 63], i += o[63 & r]) : n === 2 ? (i += o[r >> 10 & 63], i += o[r >> 4 & 63], i += o[r << 2 & 63], i += o[64]) : n === 1 && (i += o[r >> 2 & 63], i += o[r << 4 & 63], i += o[64], i += o[64]), i;
} }), Hs = Object.prototype.hasOwnProperty, Us = Object.prototype.toString, Zs = new rt("tag:yaml.org,2002:omap", { kind: "sequence", resolve: function(t) {
  if (t === null)
    return !0;
  var e, n, i, r, s, o = [], a = t;
  for (e = 0, n = a.length; e < n; e += 1) {
    if (i = a[e], s = !1, Us.call(i) !== "[object Object]")
      return !1;
    for (r in i)
      if (Hs.call(i, r)) {
        if (s)
          return !1;
        s = !0;
      }
    if (!s || o.indexOf(r) !== -1)
      return !1;
    o.push(r);
  }
  return !0;
}, construct: function(t) {
  return t !== null ? t : [];
} }), Fs = Object.prototype.toString, Ks = new rt("tag:yaml.org,2002:pairs", { kind: "sequence", resolve: function(t) {
  if (t === null)
    return !0;
  var e, n, i, r, s, o = t;
  for (s = new Array(o.length), e = 0, n = o.length; e < n; e += 1) {
    if (i = o[e], Fs.call(i) !== "[object Object]" || (r = Object.keys(i)).length !== 1)
      return !1;
    s[e] = [r[0], i[r[0]]];
  }
  return !0;
}, construct: function(t) {
  if (t === null)
    return [];
  var e, n, i, r, s, o = t;
  for (s = new Array(o.length), e = 0, n = o.length; e < n; e += 1)
    i = o[e], r = Object.keys(i), s[e] = [r[0], i[r[0]]];
  return s;
} }), Gs = Object.prototype.hasOwnProperty, Js = new rt("tag:yaml.org,2002:set", { kind: "mapping", resolve: function(t) {
  if (t === null)
    return !0;
  var e, n = t;
  for (e in n)
    if (Gs.call(n, e) && n[e] !== null)
      return !1;
  return !0;
}, construct: function(t) {
  return t !== null ? t : {};
} }), Ws = Bs.extend({ implicit: [qs, Ps], explicit: [Ds, Zs, Ks, Js] }), yt = Object.prototype.hasOwnProperty, me = 1, Fn = 2, Xi = 3, ke = 4, qe = 1, Qs = 2, Kn = 3, Xs = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Ys = /[\x85\u2028\u2029]/, Vs = /[,\[\]\{\}]/, Yi = /^(?:!|!!|![a-z\-]+!)$/i, Vi = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Gn(t) {
  return Object.prototype.toString.call(t);
}
function lt(t) {
  return t === 10 || t === 13;
}
function $t(t) {
  return t === 9 || t === 32;
}
function ot(t) {
  return t === 9 || t === 32 || t === 10 || t === 13;
}
function Pt(t) {
  return t === 44 || t === 91 || t === 93 || t === 123 || t === 125;
}
function to(t) {
  var e;
  return 48 <= t && t <= 57 ? t - 48 : 97 <= (e = 32 | t) && e <= 102 ? e - 97 + 10 : -1;
}
function Jn(t) {
  return t === 48 ? "\0" : t === 97 ? "\x07" : t === 98 ? "\b" : t === 116 || t === 9 ? "	" : t === 110 ? `
` : t === 118 ? "\v" : t === 102 ? "\f" : t === 114 ? "\r" : t === 101 ? "\x1B" : t === 32 ? " " : t === 34 ? '"' : t === 47 ? "/" : t === 92 ? "\\" : t === 78 ? "" : t === 95 ? " " : t === 76 ? "\u2028" : t === 80 ? "\u2029" : "";
}
function eo(t) {
  return t <= 65535 ? String.fromCharCode(t) : String.fromCharCode(55296 + (t - 65536 >> 10), 56320 + (t - 65536 & 1023));
}
for (var tr = new Array(256), er = new Array(256), zt = 0; zt < 256; zt++)
  tr[zt] = Jn(zt) ? 1 : 0, er[zt] = Jn(zt);
function no(t, e) {
  this.input = t, this.filename = e.filename || null, this.schema = e.schema || Ws, this.onWarning = e.onWarning || null, this.legacy = e.legacy || !1, this.json = e.json || !1, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function nr(t, e) {
  var n = { name: t.filename, buffer: t.input.slice(0, -1), position: t.position, line: t.line, column: t.position - t.lineStart };
  return n.snippet = Es(n), new dt(e, n);
}
function N(t, e) {
  throw nr(t, e);
}
function ve(t, e) {
  t.onWarning && t.onWarning.call(null, nr(t, e));
}
var Wn = { YAML: function(t, e, n) {
  var i, r, s;
  t.version !== null && N(t, "duplication of %YAML directive"), n.length !== 1 && N(t, "YAML directive accepts exactly one argument"), (i = /^([0-9]+)\.([0-9]+)$/.exec(n[0])) === null && N(t, "ill-formed argument of the YAML directive"), r = parseInt(i[1], 10), s = parseInt(i[2], 10), r !== 1 && N(t, "unacceptable YAML version of the document"), t.version = n[0], t.checkLineBreaks = s < 2, s !== 1 && s !== 2 && ve(t, "unsupported YAML version of the document");
}, TAG: function(t, e, n) {
  var i, r;
  n.length !== 2 && N(t, "TAG directive accepts exactly two arguments"), i = n[0], r = n[1], Yi.test(i) || N(t, "ill-formed tag handle (first argument) of the TAG directive"), yt.call(t.tagMap, i) && N(t, 'there is a previously declared suffix for "' + i + '" tag handle'), Vi.test(r) || N(t, "ill-formed tag prefix (second argument) of the TAG directive");
  try {
    r = decodeURIComponent(r);
  } catch {
    N(t, "tag prefix is malformed: " + r);
  }
  t.tagMap[i] = r;
} };
function bt(t, e, n, i) {
  var r, s, o, a;
  if (e < n) {
    if (a = t.input.slice(e, n), i)
      for (r = 0, s = a.length; r < s; r += 1)
        (o = a.charCodeAt(r)) === 9 || 32 <= o && o <= 1114111 || N(t, "expected valid JSON character");
    else
      Xs.test(a) && N(t, "the stream contains non-printable characters");
    t.result += a;
  }
}
function Qn(t, e, n, i) {
  var r, s, o, a;
  for (st.isObject(n) || N(t, "cannot merge mappings; the provided source object is unacceptable"), o = 0, a = (r = Object.keys(n)).length; o < a; o += 1)
    s = r[o], yt.call(e, s) || (e[s] = n[s], i[s] = !0);
}
function Bt(t, e, n, i, r, s, o, a, l) {
  var p, u;
  if (Array.isArray(r))
    for (p = 0, u = (r = Array.prototype.slice.call(r)).length; p < u; p += 1)
      Array.isArray(r[p]) && N(t, "nested arrays are not supported inside keys"), typeof r == "object" && Gn(r[p]) === "[object Object]" && (r[p] = "[object Object]");
  if (typeof r == "object" && Gn(r) === "[object Object]" && (r = "[object Object]"), r = String(r), e === null && (e = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(s))
      for (p = 0, u = s.length; p < u; p += 1)
        Qn(t, e, s[p], n);
    else
      Qn(t, e, s, n);
  else
    t.json || yt.call(n, r) || !yt.call(e, r) || (t.line = o || t.line, t.lineStart = a || t.lineStart, t.position = l || t.position, N(t, "duplicated mapping key")), r === "__proto__" ? Object.defineProperty(e, r, { configurable: !0, enumerable: !0, writable: !0, value: s }) : e[r] = s, delete n[r];
  return e;
}
function un(t) {
  var e;
  (e = t.input.charCodeAt(t.position)) === 10 ? t.position++ : e === 13 ? (t.position++, t.input.charCodeAt(t.position) === 10 && t.position++) : N(t, "a line break is expected"), t.line += 1, t.lineStart = t.position, t.firstTabInLine = -1;
}
function tt(t, e, n) {
  for (var i = 0, r = t.input.charCodeAt(t.position); r !== 0; ) {
    for (; $t(r); )
      r === 9 && t.firstTabInLine === -1 && (t.firstTabInLine = t.position), r = t.input.charCodeAt(++t.position);
    if (e && r === 35)
      do
        r = t.input.charCodeAt(++t.position);
      while (r !== 10 && r !== 13 && r !== 0);
    if (!lt(r))
      break;
    for (un(t), r = t.input.charCodeAt(t.position), i++, t.lineIndent = 0; r === 32; )
      t.lineIndent++, r = t.input.charCodeAt(++t.position);
  }
  return n !== -1 && i !== 0 && t.lineIndent < n && ve(t, "deficient indentation"), i;
}
function xe(t) {
  var e, n = t.position;
  return !((e = t.input.charCodeAt(n)) !== 45 && e !== 46 || e !== t.input.charCodeAt(n + 1) || e !== t.input.charCodeAt(n + 2) || (n += 3, (e = t.input.charCodeAt(n)) !== 0 && !ot(e)));
}
function Pe(t, e) {
  e === 1 ? t.result += " " : e > 1 && (t.result += st.repeat(`
`, e - 1));
}
function Xn(t, e) {
  var n, i, r = t.tag, s = t.anchor, o = [], a = !1;
  if (t.firstTabInLine !== -1)
    return !1;
  for (t.anchor !== null && (t.anchorMap[t.anchor] = o), i = t.input.charCodeAt(t.position); i !== 0 && (t.firstTabInLine !== -1 && (t.position = t.firstTabInLine, N(t, "tab characters must not be used in indentation")), i === 45) && ot(t.input.charCodeAt(t.position + 1)); )
    if (a = !0, t.position++, tt(t, !0, -1) && t.lineIndent <= e)
      o.push(null), i = t.input.charCodeAt(t.position);
    else if (n = t.line, Ht(t, e, Xi, !1, !0), o.push(t.result), tt(t, !0, -1), i = t.input.charCodeAt(t.position), (t.line === n || t.lineIndent > e) && i !== 0)
      N(t, "bad indentation of a sequence entry");
    else if (t.lineIndent < e)
      break;
  return !!a && (t.tag = r, t.anchor = s, t.kind = "sequence", t.result = o, !0);
}
function io(t) {
  var e, n, i, r, s = !1, o = !1;
  if ((r = t.input.charCodeAt(t.position)) !== 33)
    return !1;
  if (t.tag !== null && N(t, "duplication of a tag property"), (r = t.input.charCodeAt(++t.position)) === 60 ? (s = !0, r = t.input.charCodeAt(++t.position)) : r === 33 ? (o = !0, n = "!!", r = t.input.charCodeAt(++t.position)) : n = "!", e = t.position, s) {
    do
      r = t.input.charCodeAt(++t.position);
    while (r !== 0 && r !== 62);
    t.position < t.length ? (i = t.input.slice(e, t.position), r = t.input.charCodeAt(++t.position)) : N(t, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; r !== 0 && !ot(r); )
      r === 33 && (o ? N(t, "tag suffix cannot contain exclamation marks") : (n = t.input.slice(e - 1, t.position + 1), Yi.test(n) || N(t, "named tag handle cannot contain such characters"), o = !0, e = t.position + 1)), r = t.input.charCodeAt(++t.position);
    i = t.input.slice(e, t.position), Vs.test(i) && N(t, "tag suffix cannot contain flow indicator characters");
  }
  i && !Vi.test(i) && N(t, "tag name cannot contain such characters: " + i);
  try {
    i = decodeURIComponent(i);
  } catch {
    N(t, "tag name is malformed: " + i);
  }
  return s ? t.tag = i : yt.call(t.tagMap, n) ? t.tag = t.tagMap[n] + i : n === "!" ? t.tag = "!" + i : n === "!!" ? t.tag = "tag:yaml.org,2002:" + i : N(t, 'undeclared tag handle "' + n + '"'), !0;
}
function ro(t) {
  var e, n;
  if ((n = t.input.charCodeAt(t.position)) !== 38)
    return !1;
  for (t.anchor !== null && N(t, "duplication of an anchor property"), n = t.input.charCodeAt(++t.position), e = t.position; n !== 0 && !ot(n) && !Pt(n); )
    n = t.input.charCodeAt(++t.position);
  return t.position === e && N(t, "name of an anchor node must contain at least one character"), t.anchor = t.input.slice(e, t.position), !0;
}
function Ht(t, e, n, i, r) {
  var s, o, a, l, p, u, h, d, f, g = 1, x = !1, C = !1;
  if (t.listener !== null && t.listener("open", t), t.tag = null, t.anchor = null, t.kind = null, t.result = null, s = o = a = ke === n || Xi === n, i && tt(t, !0, -1) && (x = !0, t.lineIndent > e ? g = 1 : t.lineIndent === e ? g = 0 : t.lineIndent < e && (g = -1)), g === 1)
    for (; io(t) || ro(t); )
      tt(t, !0, -1) ? (x = !0, a = s, t.lineIndent > e ? g = 1 : t.lineIndent === e ? g = 0 : t.lineIndent < e && (g = -1)) : a = !1;
  if (a && (a = x || r), g !== 1 && ke !== n || (d = me === n || Fn === n ? e : e + 1, f = t.position - t.lineStart, g === 1 ? a && (Xn(t, f) || function(c, v, b) {
    var m, w, y, E, S, L, T, k = c.tag, q = c.anchor, P = {}, O = /* @__PURE__ */ Object.create(null), V = null, A = null, z = null, _ = !1, et = !1;
    if (c.firstTabInLine !== -1)
      return !1;
    for (c.anchor !== null && (c.anchorMap[c.anchor] = P), T = c.input.charCodeAt(c.position); T !== 0; ) {
      if (_ || c.firstTabInLine === -1 || (c.position = c.firstTabInLine, N(c, "tab characters must not be used in indentation")), m = c.input.charCodeAt(c.position + 1), y = c.line, T !== 63 && T !== 58 || !ot(m)) {
        if (E = c.line, S = c.lineStart, L = c.position, !Ht(c, b, Fn, !1, !0))
          break;
        if (c.line === y) {
          for (T = c.input.charCodeAt(c.position); $t(T); )
            T = c.input.charCodeAt(++c.position);
          if (T === 58)
            ot(T = c.input.charCodeAt(++c.position)) || N(c, "a whitespace character is expected after the key-value separator within a block mapping"), _ && (Bt(c, P, O, V, A, null, E, S, L), V = A = z = null), et = !0, _ = !1, w = !1, V = c.tag, A = c.result;
          else {
            if (!et)
              return c.tag = k, c.anchor = q, !0;
            N(c, "can not read an implicit mapping pair; a colon is missed");
          }
        } else {
          if (!et)
            return c.tag = k, c.anchor = q, !0;
          N(c, "can not read a block mapping entry; a multiline key may not be an implicit key");
        }
      } else
        T === 63 ? (_ && (Bt(c, P, O, V, A, null, E, S, L), V = A = z = null), et = !0, _ = !0, w = !0) : _ ? (_ = !1, w = !0) : N(c, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), c.position += 1, T = m;
      if ((c.line === y || c.lineIndent > v) && (_ && (E = c.line, S = c.lineStart, L = c.position), Ht(c, v, ke, !0, w) && (_ ? A = c.result : z = c.result), _ || (Bt(c, P, O, V, A, z, E, S, L), V = A = z = null), tt(c, !0, -1), T = c.input.charCodeAt(c.position)), (c.line === y || c.lineIndent > v) && T !== 0)
        N(c, "bad indentation of a mapping entry");
      else if (c.lineIndent < v)
        break;
    }
    return _ && Bt(c, P, O, V, A, null, E, S, L), et && (c.tag = k, c.anchor = q, c.kind = "mapping", c.result = P), et;
  }(t, f, d)) || function(c, v) {
    var b, m, w, y, E, S, L, T, k, q, P, O, V = !0, A = c.tag, z = c.anchor, _ = /* @__PURE__ */ Object.create(null);
    if ((O = c.input.charCodeAt(c.position)) === 91)
      E = 93, T = !1, y = [];
    else {
      if (O !== 123)
        return !1;
      E = 125, T = !0, y = {};
    }
    for (c.anchor !== null && (c.anchorMap[c.anchor] = y), O = c.input.charCodeAt(++c.position); O !== 0; ) {
      if (tt(c, !0, v), (O = c.input.charCodeAt(c.position)) === E)
        return c.position++, c.tag = A, c.anchor = z, c.kind = T ? "mapping" : "sequence", c.result = y, !0;
      V ? O === 44 && N(c, "expected the node content, but found ','") : N(c, "missed comma between flow collection entries"), P = null, S = L = !1, O === 63 && ot(c.input.charCodeAt(c.position + 1)) && (S = L = !0, c.position++, tt(c, !0, v)), b = c.line, m = c.lineStart, w = c.position, Ht(c, v, me, !1, !0), q = c.tag, k = c.result, tt(c, !0, v), O = c.input.charCodeAt(c.position), !L && c.line !== b || O !== 58 || (S = !0, O = c.input.charCodeAt(++c.position), tt(c, !0, v), Ht(c, v, me, !1, !0), P = c.result), T ? Bt(c, y, _, q, k, P, b, m, w) : S ? y.push(Bt(c, null, _, q, k, P, b, m, w)) : y.push(k), tt(c, !0, v), (O = c.input.charCodeAt(c.position)) === 44 ? (V = !0, O = c.input.charCodeAt(++c.position)) : V = !1;
    }
    N(c, "unexpected end of the stream within a flow collection");
  }(t, d) ? C = !0 : (o && function(c, v) {
    var b, m, w, y, E, S = qe, L = !1, T = !1, k = v, q = 0, P = !1;
    if ((y = c.input.charCodeAt(c.position)) === 124)
      m = !1;
    else {
      if (y !== 62)
        return !1;
      m = !0;
    }
    for (c.kind = "scalar", c.result = ""; y !== 0; )
      if ((y = c.input.charCodeAt(++c.position)) === 43 || y === 45)
        qe === S ? S = y === 43 ? Kn : Qs : N(c, "repeat of a chomping mode identifier");
      else {
        if (!((w = 48 <= (E = y) && E <= 57 ? E - 48 : -1) >= 0))
          break;
        w === 0 ? N(c, "bad explicit indentation width of a block scalar; it cannot be less than one") : T ? N(c, "repeat of an indentation width identifier") : (k = v + w - 1, T = !0);
      }
    if ($t(y)) {
      do
        y = c.input.charCodeAt(++c.position);
      while ($t(y));
      if (y === 35)
        do
          y = c.input.charCodeAt(++c.position);
        while (!lt(y) && y !== 0);
    }
    for (; y !== 0; ) {
      for (un(c), c.lineIndent = 0, y = c.input.charCodeAt(c.position); (!T || c.lineIndent < k) && y === 32; )
        c.lineIndent++, y = c.input.charCodeAt(++c.position);
      if (!T && c.lineIndent > k && (k = c.lineIndent), lt(y))
        q++;
      else {
        if (c.lineIndent < k) {
          S === Kn ? c.result += st.repeat(`
`, L ? 1 + q : q) : S === qe && L && (c.result += `
`);
          break;
        }
        for (m ? $t(y) ? (P = !0, c.result += st.repeat(`
`, L ? 1 + q : q)) : P ? (P = !1, c.result += st.repeat(`
`, q + 1)) : q === 0 ? L && (c.result += " ") : c.result += st.repeat(`
`, q) : c.result += st.repeat(`
`, L ? 1 + q : q), L = !0, T = !0, q = 0, b = c.position; !lt(y) && y !== 0; )
          y = c.input.charCodeAt(++c.position);
        bt(c, b, c.position, !1);
      }
    }
    return !0;
  }(t, d) || function(c, v) {
    var b, m, w;
    if ((b = c.input.charCodeAt(c.position)) !== 39)
      return !1;
    for (c.kind = "scalar", c.result = "", c.position++, m = w = c.position; (b = c.input.charCodeAt(c.position)) !== 0; )
      if (b === 39) {
        if (bt(c, m, c.position, !0), (b = c.input.charCodeAt(++c.position)) !== 39)
          return !0;
        m = c.position, c.position++, w = c.position;
      } else
        lt(b) ? (bt(c, m, w, !0), Pe(c, tt(c, !1, v)), m = w = c.position) : c.position === c.lineStart && xe(c) ? N(c, "unexpected end of the document within a single quoted scalar") : (c.position++, w = c.position);
    N(c, "unexpected end of the stream within a single quoted scalar");
  }(t, d) || function(c, v) {
    var b, m, w, y, E, S, L;
    if ((S = c.input.charCodeAt(c.position)) !== 34)
      return !1;
    for (c.kind = "scalar", c.result = "", c.position++, b = m = c.position; (S = c.input.charCodeAt(c.position)) !== 0; ) {
      if (S === 34)
        return bt(c, b, c.position, !0), c.position++, !0;
      if (S === 92) {
        if (bt(c, b, c.position, !0), lt(S = c.input.charCodeAt(++c.position)))
          tt(c, !1, v);
        else if (S < 256 && tr[S])
          c.result += er[S], c.position++;
        else if ((E = (L = S) === 120 ? 2 : L === 117 ? 4 : L === 85 ? 8 : 0) > 0) {
          for (w = E, y = 0; w > 0; w--)
            (E = to(S = c.input.charCodeAt(++c.position))) >= 0 ? y = (y << 4) + E : N(c, "expected hexadecimal character");
          c.result += eo(y), c.position++;
        } else
          N(c, "unknown escape sequence");
        b = m = c.position;
      } else
        lt(S) ? (bt(c, b, m, !0), Pe(c, tt(c, !1, v)), b = m = c.position) : c.position === c.lineStart && xe(c) ? N(c, "unexpected end of the document within a double quoted scalar") : (c.position++, m = c.position);
    }
    N(c, "unexpected end of the stream within a double quoted scalar");
  }(t, d) ? C = !0 : function(c) {
    var v, b, m;
    if ((m = c.input.charCodeAt(c.position)) !== 42)
      return !1;
    for (m = c.input.charCodeAt(++c.position), v = c.position; m !== 0 && !ot(m) && !Pt(m); )
      m = c.input.charCodeAt(++c.position);
    return c.position === v && N(c, "name of an alias node must contain at least one character"), b = c.input.slice(v, c.position), yt.call(c.anchorMap, b) || N(c, 'unidentified alias "' + b + '"'), c.result = c.anchorMap[b], tt(c, !0, -1), !0;
  }(t) ? (C = !0, t.tag === null && t.anchor === null || N(t, "alias node should not have any properties")) : function(c, v, b) {
    var m, w, y, E, S, L, T, k, q = c.kind, P = c.result;
    if (ot(k = c.input.charCodeAt(c.position)) || Pt(k) || k === 35 || k === 38 || k === 42 || k === 33 || k === 124 || k === 62 || k === 39 || k === 34 || k === 37 || k === 64 || k === 96 || (k === 63 || k === 45) && (ot(m = c.input.charCodeAt(c.position + 1)) || b && Pt(m)))
      return !1;
    for (c.kind = "scalar", c.result = "", w = y = c.position, E = !1; k !== 0; ) {
      if (k === 58) {
        if (ot(m = c.input.charCodeAt(c.position + 1)) || b && Pt(m))
          break;
      } else if (k === 35) {
        if (ot(c.input.charCodeAt(c.position - 1)))
          break;
      } else {
        if (c.position === c.lineStart && xe(c) || b && Pt(k))
          break;
        if (lt(k)) {
          if (S = c.line, L = c.lineStart, T = c.lineIndent, tt(c, !1, -1), c.lineIndent >= v) {
            E = !0, k = c.input.charCodeAt(c.position);
            continue;
          }
          c.position = y, c.line = S, c.lineStart = L, c.lineIndent = T;
          break;
        }
      }
      E && (bt(c, w, y, !1), Pe(c, c.line - S), w = y = c.position, E = !1), $t(k) || (y = c.position + 1), k = c.input.charCodeAt(++c.position);
    }
    return bt(c, w, y, !1), !!c.result || (c.kind = q, c.result = P, !1);
  }(t, d, me === n) && (C = !0, t.tag === null && (t.tag = "?")), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : g === 0 && (C = a && Xn(t, f))), t.tag === null)
    t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
  else if (t.tag === "?") {
    for (t.result !== null && t.kind !== "scalar" && N(t, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t.kind + '"'), l = 0, p = t.implicitTypes.length; l < p; l += 1)
      if ((h = t.implicitTypes[l]).resolve(t.result)) {
        t.result = h.construct(t.result), t.tag = h.tag, t.anchor !== null && (t.anchorMap[t.anchor] = t.result);
        break;
      }
  } else if (t.tag !== "!") {
    if (yt.call(t.typeMap[t.kind || "fallback"], t.tag))
      h = t.typeMap[t.kind || "fallback"][t.tag];
    else
      for (h = null, l = 0, p = (u = t.typeMap.multi[t.kind || "fallback"]).length; l < p; l += 1)
        if (t.tag.slice(0, u[l].tag.length) === u[l].tag) {
          h = u[l];
          break;
        }
    h || N(t, "unknown tag !<" + t.tag + ">"), t.result !== null && h.kind !== t.kind && N(t, "unacceptable node kind for !<" + t.tag + '> tag; it should be "' + h.kind + '", not "' + t.kind + '"'), h.resolve(t.result, t.tag) ? (t.result = h.construct(t.result, t.tag), t.anchor !== null && (t.anchorMap[t.anchor] = t.result)) : N(t, "cannot resolve a node with !<" + t.tag + "> explicit tag");
  }
  return t.listener !== null && t.listener("close", t), t.tag !== null || t.anchor !== null || C;
}
function so(t) {
  var e, n, i, r, s = t.position, o = !1;
  for (t.version = null, t.checkLineBreaks = t.legacy, t.tagMap = /* @__PURE__ */ Object.create(null), t.anchorMap = /* @__PURE__ */ Object.create(null); (r = t.input.charCodeAt(t.position)) !== 0 && (tt(t, !0, -1), r = t.input.charCodeAt(t.position), !(t.lineIndent > 0 || r !== 37)); ) {
    for (o = !0, r = t.input.charCodeAt(++t.position), e = t.position; r !== 0 && !ot(r); )
      r = t.input.charCodeAt(++t.position);
    for (i = [], (n = t.input.slice(e, t.position)).length < 1 && N(t, "directive name must not be less than one character in length"); r !== 0; ) {
      for (; $t(r); )
        r = t.input.charCodeAt(++t.position);
      if (r === 35) {
        do
          r = t.input.charCodeAt(++t.position);
        while (r !== 0 && !lt(r));
        break;
      }
      if (lt(r))
        break;
      for (e = t.position; r !== 0 && !ot(r); )
        r = t.input.charCodeAt(++t.position);
      i.push(t.input.slice(e, t.position));
    }
    r !== 0 && un(t), yt.call(Wn, n) ? Wn[n](t, n, i) : ve(t, 'unknown document directive "' + n + '"');
  }
  tt(t, !0, -1), t.lineIndent === 0 && t.input.charCodeAt(t.position) === 45 && t.input.charCodeAt(t.position + 1) === 45 && t.input.charCodeAt(t.position + 2) === 45 ? (t.position += 3, tt(t, !0, -1)) : o && N(t, "directives end mark is expected"), Ht(t, t.lineIndent - 1, ke, !1, !0), tt(t, !0, -1), t.checkLineBreaks && Ys.test(t.input.slice(s, t.position)) && ve(t, "non-ASCII line breaks are interpreted as content"), t.documents.push(t.result), t.position === t.lineStart && xe(t) ? t.input.charCodeAt(t.position) === 46 && (t.position += 3, tt(t, !0, -1)) : t.position < t.length - 1 && N(t, "end of the stream or a document separator is expected");
}
function Yn(t, e) {
  e = e || {}, (t = String(t)).length !== 0 && (t.charCodeAt(t.length - 1) !== 10 && t.charCodeAt(t.length - 1) !== 13 && (t += `
`), t.charCodeAt(0) === 65279 && (t = t.slice(1)));
  var n = new no(t, e), i = t.indexOf("\0");
  for (i !== -1 && (n.position = i, N(n, "null byte is not allowed in input")), n.input += "\0"; n.input.charCodeAt(n.position) === 32; )
    n.lineIndent += 1, n.position += 1;
  for (; n.position < n.length - 1; )
    so(n);
  return n.documents;
}
var oo = function(t, e) {
  var n = Yn(t, e);
  if (n.length !== 0) {
    if (n.length === 1)
      return n[0];
    throw new dt("expected a single document in the stream, but found more");
  }
};
const ao = [function(t) {
  if (typeof t == "function" && (t = { highlight: t }), !t || typeof t.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof t.langPrefix != "string" && (t.langPrefix = "language-"), { async: !!t.async, walkTokens(e) {
    if (e.type !== "code")
      return;
    const n = On(e.lang);
    if (t.async)
      return Promise.resolve(t.highlight(e.text, n, e.lang || "")).then(jn(e));
    const i = t.highlight(e.text, n, e.lang || "");
    if (i instanceof Promise)
      throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
    jn(e)(i);
  }, useNewRenderer: !0, renderer: { code({ text: e, lang: n, escaped: i }) {
    const r = On(n), s = r ? ` class="${t.langPrefix}${zn(r)}"` : "";
    return e = e.replace(/\n$/, ""), `<pre><code${s}>${i ? e : zn(e, !0)}
</code></pre>`;
  } } };
}({ langPrefix: "hljs language-", highlight(t, e, n) {
  if (e && xt.getLanguage(e))
    try {
      return xt.highlight(t, { language: e, ignoreIllegals: !0 }).value;
    } catch {
    }
  return xt.highlightAuto(t).value;
} }), function(t = {}) {
  const { className: e = "markdown-alert", variants: n = [] } = t, i = function(r) {
    return r.length ? Object.values([...Bn, ...r].reduce((s, o) => (s[o.type] = o, s), {})) : Bn;
  }(n);
  return { walkTokens(r) {
    var o, a, l, p;
    if (r.type !== "blockquote")
      return;
    const s = i.find(({ type: u }) => new RegExp(qn(u)).test(r.text));
    if (s) {
      const { type: u, icon: h, title: d = ws(u), titleClassName: f = `${e}-title` } = s;
      Object.assign(r, { type: "alert", meta: { className: e, variant: u, icon: h, title: d, titleClassName: f } });
      const g = (o = r.tokens) == null ? void 0 : o[0], x = (a = g.raw) == null ? void 0 : a.replace(new RegExp(qn(u)), "").trim();
      x ? (g.tokens = this.Lexer.lexInline(x), (l = r.tokens) == null || l.splice(0, 1, g)) : (p = r.tokens) == null || p.shift();
    }
  }, extensions: [{ name: "alert", level: "block", renderer({ meta: r, tokens: s = [] }) {
    let o = `<div class="${r.className} ${r.className}-${r.variant}">
`;
    return o += `<p class="${r.titleClassName}">`, o += r.icon, o += r.title, o += `</p>
`, o += this.parser.parse(s), o += `</div>
`, o;
  } }] };
}(), function(t = {}) {
  let e = { nodeName: "div", className: "admonition", title: { nodeName: "p" }, ...t };
  return { extensions: [{ name: "admonition", level: "block", start(n) {
    var r;
    return (r = n.match(new RegExp(`(^|[\\r\\n])!!!\\s+(${Wi.join("|")})(?:\\s+)?(.*)`))) == null ? void 0 : r.index;
  }, tokenizer(n, i) {
    const r = n.split(/\n/);
    if (je.test(r[0])) {
      const s = { x: -1, y: -1 }, o = [];
      for (let a = 0, l = r.length; a < l; a++)
        je.test(r[a]) ? s.x = a : _s.test(r[a]) && (s.y = a, s.x >= 0 && (o.push({ ...s }), s.x = -1, s.y = -1));
      if (o.length) {
        const a = o[0], [l, p, u] = je.exec(r[a.x]) || [], h = r.slice(a.x + 1, a.y).join(`
`), d = { type: "admonition", raw: r.slice(a.x, a.y + 1).join(`
`), icon: p, title: u, text: h, titleTokens: [], tokens: [], childTokens: ["title", "text"] };
        return this.lexer.inlineTokens(d.title, d.titleTokens), this.lexer.blockTokens(d.text, d.tokens), d;
      }
    }
  }, renderer(n) {
    return `<${e.nodeName} class="${e.className} ${e.className}-${n.icon}">
        <${e.title.nodeName} class="${e.className}-title">${this.parser.parseInline(n.titleTokens, null)}</${e.title.nodeName}>
        ${this.parser.parse(n.tokens)}
        </${e.nodeName}>`;
  } }] };
}(), function(t) {
  if (!(t = { ...vs, ...t }).emojis)
    throw new Error("Must provide emojis to markedEmoji");
  const e = Object.keys(t.emojis).map((r) => r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), n = new RegExp(`:(${e}):`), i = new RegExp(`^${n.source}`);
  return { extensions: [{ name: "emoji", level: "inline", start: (r) => {
    var s;
    return (s = r.match(n)) == null ? void 0 : s.index;
  }, tokenizer(r, s) {
    const o = i.exec(r);
    if (!o)
      return;
    const a = o[1];
    let l = t.emojis[a], p = t.renderer ? void 0 : t.unicode;
    if (typeof l != "string" && !t.renderer)
      if (typeof l.char == "string")
        l = l.char, p = !0;
      else {
        if (typeof l.url != "string")
          return;
        l = l.url, p = !1;
      }
    return { type: "emoji", raw: o[0], name: a, emoji: l, unicode: p };
  }, renderer: (r) => t.renderer ? t.renderer(r) : r.unicode ? r.emoji : `<img alt="${r.name}" src="${r.emoji}" class="marked-emoji-img">` }] };
}()], lo = { baseUrl: null, breaks: !1, gfm: !0, headerIds: !0, headerPrefix: "", highlight: null, langPrefix: "language-", mangle: !0, pedantic: !1, renderer: null, sanitize: !1, sanitizer: null, silent: !1, smartLists: !1, smartypants: !1, tokenizer: null, xhtml: !1 }, co = (t) => {
  const e = { frontMatter: {}, content: "" };
  if (!t.startsWith("---"))
    return e.content = t, e;
  const n = t.indexOf(`
---`, 4);
  if (n === -1)
    return e.content = t, e;
  const i = t.slice(4, n);
  try {
    e.frontMatter = oo(i);
  } catch {
  }
  return e.content = t.slice(n + 4).trim(), e;
}, uo = async (t, e = [], n = !1, i = {}) => {
  let r = new Ci().use(...ao, ...e);
  return (Ie("mathjax") || i.mathjax) && r.use((window.renderMathJax = Pn, { async: !0, async walkTokens(s) {
    if (s.type !== "text" || !s.raw || !s.raw.match(Ji))
      return;
    let o = await Pn(s.raw);
    Object.assign(s, { type: "mathjaxext", meta: { renderedStr: o } });
  }, extensions: [{ name: "mathjaxext", level: "block", renderer: ({ meta: s, tokens: o = [] }) => `<p>${s.renderedStr}</p>` }] })), (Ie("graph") || i.graph) && r.use(ys()), (Ie("diagram") || i.diagram) && r.use($s()), n ? await r.parseInline(t) : await r.parse(t);
}, po = (t) => ({}), Vn = (t) => ({});
function ti(t) {
  let e, n, i;
  return { c() {
    e = B("button"), e.innerHTML = '<span class="material-symbols-outlined">print</span>';
  }, m(r, s) {
    Y(r, e, s), n || (i = Ct(e, "click", t[14]), n = !0);
  }, p: gt, d(r) {
    r && Q(e), n = !1, i();
  } };
}
function ho(t) {
  let e, n, i, r, s, o;
  const a = t[13].slotHead, l = function(p, u, h, d) {
    if (p) {
      const f = dn(p, u, h, d);
      return p[0](f);
    }
  }(a, t, t[12], Vn);
  return { c() {
    e = B("div"), l && l.c(), n = X(), i = new xi(!1), r = X(), s = B("style"), s.innerHTML = "", i.a = r, I(e, "class", "uie-prose uie-max-w-full uie-w-full uie-h-full uie-overflow-scroll uie-flex uie-flex-col uie-mx-auto uie-bg-white uie-text-black dark:uie-bg-gray-900 dark:uie-text-[#E7E7E7] uie-text-wrap}"), At(e, "uie-shadow-lg", t[2]), At(e, "uie-inline", t[0]);
  }, m(p, u) {
    Y(p, e, u), l && l.m(e, null), R(e, n), i.m(t[3], e), R(e, r), R(e, s), t[17](s), t[18](e), o = !0;
  }, p(p, u) {
    l && l.p && (!o || 4096 & u) && function(h, d, f, g, x, C) {
      if (x) {
        const c = dn(d, f, g, C);
        h.p(c, x);
      }
    }(l, a, p, p[12], o ? function(h, d, f, g) {
      if (h[2] && g) {
        const x = h[2](g(f));
        if (d.dirty === void 0)
          return x;
        if (typeof x == "object") {
          const C = [], c = Math.max(d.dirty.length, x.length);
          for (let v = 0; v < c; v += 1)
            C[v] = d.dirty[v] | x[v];
          return C;
        }
        return d.dirty | x;
      }
      return d.dirty;
    }(a, p[12], u, po) : function(h) {
      if (h.ctx.length > 32) {
        const d = [], f = h.ctx.length / 32;
        for (let g = 0; g < f; g++)
          d[g] = -1;
        return d;
      }
      return -1;
    }(p[12]), Vn), (!o || 8 & u) && i.p(p[3]), (!o || 4 & u) && At(e, "uie-shadow-lg", p[2]), (!o || 1 & u) && At(e, "uie-inline", p[0]);
  }, i(p) {
    o || (H(l, p), o = !0);
  }, o(p) {
    W(l, p), o = !1;
  }, d(p) {
    p && Q(e), l && l.d(p), t[17](null), t[18](null);
  } };
}
function go(t) {
  let e, n, i, r;
  return { c() {
    e = B("div"), n = new xi(!1), i = X(), r = B("style"), r.innerHTML = "", n.a = i, I(e, "class", "uie-prose uie-max-w-full uie-w-full uie-h-full uie-overflow-scroll uie-inline uie-mx-auto uie-bg-white uie-text-black dark:uie-bg-gray-900 dark:uie-text-[#E7E7E7] uie-text-wrap}"), At(e, "uie-shadow-lg", t[2]);
  }, m(s, o) {
    Y(s, e, o), n.m(t[3], e), R(e, i), R(e, r), t[15](r), t[16](e);
  }, p(s, o) {
    8 & o && n.p(s[3]), 4 & o && At(e, "uie-shadow-lg", s[2]);
  }, i: gt, o: gt, d(s) {
    s && Q(e), t[15](null), t[16](null);
  } };
}
function fo(t) {
  let e, n, i, r, s, o = t[1] && ti(t);
  const a = [go, ho], l = [];
  function p(u, h) {
    return u[0] ? 0 : 1;
  }
  return n = p(t), i = l[n] = a[n](t), { c() {
    o && o.c(), e = X(), i.c(), r = Ye();
  }, m(u, h) {
    o && o.m(u, h), Y(u, e, h), l[n].m(u, h), Y(u, r, h), s = !0;
  }, p(u, [h]) {
    u[1] ? o ? o.p(u, h) : (o = ti(u), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    let d = n;
    n = p(u), n === d ? l[n].p(u, h) : (Tt(), W(l[d], 1, 1, () => {
      l[d] = null;
    }), Mt(), i = l[n], i ? i.p(u, h) : (i = l[n] = a[n](u), i.c()), H(i, 1), i.m(r.parentNode, r));
  }, i(u) {
    s || (H(i), s = !0);
  }, o(u) {
    W(i), s = !1;
  }, d(u) {
    u && (Q(e), Q(r)), o && o.d(u), l[n].d(u);
  } };
}
function mo(t, e, n) {
  let i, r, { $$slots: s = {}, $$scope: o } = e, { source: a = "" } = e, { options: l = {} } = e, { extensions: p = [] } = e, { inline: u = !1 } = e, { printable: h = !1 } = e;
  const d = cr();
  let f, g, { theme: x = "" } = e, { shadow: C = !1 } = e, c, v;
  var b;
  return function(m, w) {
    Ze().$$.context.set(m, w);
  }(lr, { getOptions: () => r }), b = () => {
    n(10, g = !0);
  }, Ze().$$.on_mount.push(b), t.$$set = (m) => {
    "source" in m && n(6, a = m.source), "options" in m && n(7, l = m.options), "extensions" in m && n(8, p = m.extensions), "inline" in m && n(0, u = m.inline), "printable" in m && n(1, h = m.printable), "theme" in m && n(9, x = m.theme), "shadow" in m && n(2, C = m.shadow), "$$scope" in m && n(12, o = m.$$scope);
  }, t.$$.update = () => {
    528 & t.$$.dirty && v && x && ((m, w) => {
      try {
        m.innerHTML = w;
      } catch {
        m.styleSheet.cssText = w;
      }
      document.getElementsByTagName("head")[0].appendChild(m);
    })(v, x), 64 & t.$$.dirty && n(11, i = Array.isArray(a)), 128 & t.$$.dirty && (r = { ...lo, ...l }), 2112 & t.$$.dirty && (i ? n(3, f = a) : (async () => {
      const { frontmatter: m, content: w } = co(a);
      n(3, f = await uo(w, p, u, l));
    })()), 3080 & t.$$.dirty && g && !i && d("parsed", { tokens: f });
  }, [u, h, C, f, v, c, a, l, p, x, g, i, o, s, () => {
    if (!c)
      return;
    const m = document.body.innerHTML;
    document.body.innerHTML = c.outerHTML;
    const w = document.getElementsByTagName("p");
    for (let y = w.length - 1; y >= 0; y--) {
      const E = w[y];
      E.innerHTML.trim() === "" && E.parentNode.removeChild(E);
    }
    window.print(), document.body.innerHTML = m;
  }, function(m) {
    Et[m ? "unshift" : "push"](() => {
      v = m, n(4, v);
    });
  }, function(m) {
    Et[m ? "unshift" : "push"](() => {
      c = m, n(5, c);
    });
  }, function(m) {
    Et[m ? "unshift" : "push"](() => {
      v = m, n(4, v);
    });
  }, function(m) {
    Et[m ? "unshift" : "push"](() => {
      c = m, n(5, c);
    });
  }];
}
class ir extends re {
  constructor(e) {
    super(), ie(this, e, mo, fo, ee, { source: 6, options: 7, extensions: 8, inline: 0, printable: 1, theme: 9, shadow: 2 });
  }
}
function bo(t) {
  let e;
  return { c() {
    e = B("div");
  }, m(n, i) {
    Y(n, e, i), t[2](e);
  }, p: gt, i: gt, o: gt, d(n) {
    n && Q(e), t[2](null);
  } };
}
function ko(t, e, n) {
  let i, { content: r } = e;
  return t.$$set = (s) => {
    "content" in s && n(1, r = s.content);
  }, t.$$.update = () => {
    3 & t.$$.dirty && r && i && (n(0, i.innerHTML = "", i), typeof r == "string" ? n(0, i.textContent = r, i) : r.$$ && r.$$.root ? i.appendChild(r.$$.root) : r && i.appendChild(r));
  }, [i, r, function(s) {
    Et[s ? "unshift" : "push"](() => {
      i = s, n(0, i), n(1, r);
    });
  }];
}
class xo extends re {
  constructor(e) {
    super(), ie(this, e, ko, bo, ee, { content: 1 });
  }
}
function wo(t) {
  let e, n;
  const i = [{ source: t[0] }, { inline: t[1] }, { printable: t[3] }, { onHtmlUpdate: t[4] }, t[5]];
  let r = {};
  for (let s = 0; s < i.length; s += 1)
    r = te(r, i[s]);
  return e = new ir({ props: r }), { c() {
    wt(e.$$.fragment);
  }, m(s, o) {
    ft(e, s, o), n = !0;
  }, p(s, o) {
    const a = 59 & o ? yi(i, [1 & o && { source: s[0] }, 2 & o && { inline: s[1] }, 8 & o && { printable: s[3] }, 16 & o && { onHtmlUpdate: s[4] }, 32 & o && _i(s[5])]) : {};
    e.$set(a);
  }, i(s) {
    n || (H(e.$$.fragment, s), n = !0);
  }, o(s) {
    W(e.$$.fragment, s), n = !1;
  }, d(s) {
    mt(e, s);
  } };
}
function yo(t) {
  let e, n;
  const i = [{ source: t[0] }, { inline: t[1] }, { printable: t[3] }, { onHtmlUpdate: t[4] }, t[5]];
  let r = { $$slots: { slotHead: [_o] }, $$scope: { ctx: t } };
  for (let s = 0; s < i.length; s += 1)
    r = te(r, i[s]);
  return e = new ir({ props: r }), { c() {
    wt(e.$$.fragment);
  }, m(s, o) {
    ft(e, s, o), n = !0;
  }, p(s, o) {
    const a = 59 & o ? yi(i, [1 & o && { source: s[0] }, 2 & o && { inline: s[1] }, 8 & o && { printable: s[3] }, 16 & o && { onHtmlUpdate: s[4] }, 32 & o && _i(s[5])]) : {};
    68 & o && (a.$$scope = { dirty: o, ctx: s }), e.$set(a);
  }, i(s) {
    n || (H(e.$$.fragment, s), n = !0);
  }, o(s) {
    W(e.$$.fragment, s), n = !1;
  }, d(s) {
    mt(e, s);
  } };
}
function _o(t) {
  let e, n, i;
  return n = new xo({ props: { content: t[2] } }), { c() {
    e = B("div"), wt(n.$$.fragment), I(e, "slot", "slotHead");
  }, m(r, s) {
    Y(r, e, s), ft(n, e, null), i = !0;
  }, p(r, s) {
    const o = {};
    4 & s && (o.content = r[2]), n.$set(o);
  }, i(r) {
    i || (H(n.$$.fragment, r), i = !0);
  }, o(r) {
    W(n.$$.fragment, r), i = !1;
  }, d(r) {
    r && Q(e), mt(n);
  } };
}
function vo(t) {
  let e, n, i, r;
  const s = [yo, wo], o = [];
  function a(l, p) {
    return l[1] ? 1 : 0;
  }
  return e = a(t), n = o[e] = s[e](t), { c() {
    n.c(), i = Ye();
  }, m(l, p) {
    o[e].m(l, p), Y(l, i, p), r = !0;
  }, p(l, [p]) {
    let u = e;
    e = a(l), e === u ? o[e].p(l, p) : (Tt(), W(o[u], 1, 1, () => {
      o[u] = null;
    }), Mt(), n = o[e], n ? n.p(l, p) : (n = o[e] = s[e](l), n.c()), H(n, 1), n.m(i.parentNode, i));
  }, i(l) {
    r || (H(n), r = !0);
  }, o(l) {
    W(n), r = !1;
  }, d(l) {
    l && Q(i), o[e].d(l);
  } };
}
function $o(t, e, n) {
  const i = ["source", "inline", "slotHead", "printable", "onHtmlUpdate"];
  let r = gn(e, i), { source: s = "" } = e, { inline: o = !1 } = e, { slotHead: a } = e, { printable: l = !1 } = e, { onHtmlUpdate: p = () => {
  } } = e;
  return t.$$set = (u) => {
    e = te(te({}, e), function(h) {
      const d = {};
      for (const f in h)
        f[0] !== "$" && (d[f] = h[f]);
      return d;
    }(u)), n(5, r = gn(e, i)), "source" in u && n(0, s = u.source), "inline" in u && n(1, o = u.inline), "slotHead" in u && n(2, a = u.slotHead), "printable" in u && n(3, l = u.printable), "onHtmlUpdate" in u && n(4, p = u.onHtmlUpdate);
  }, [s, o, a, l, p, r];
}
class Zt extends re {
  constructor(e) {
    super(), ie(this, e, $o, vo, ee, { source: 0, inline: 1, slotHead: 2, printable: 3, onHtmlUpdate: 4 });
  }
}
function ei(t, e, n) {
  const i = t.slice();
  return i[11] = e[n].answer, i[13] = n, i;
}
function ni(t, e, n) {
  const i = t.slice();
  return i[14] = e[n].question, i[15] = e[n].choices, i[16] = e[n].answers, i[17] = e[n].mode, i[13] = n, i;
}
function ii(t, e, n) {
  const i = t.slice();
  return i[19] = e[n], i[21] = n, i;
}
function ri(t) {
  let e, n, i, r, s, o, a, l, p, u, h;
  function d() {
    return t[8](t[13], t[19]);
  }
  return o = new Zt({ props: { inline: !0, options: t[2], source: t[19] } }), { c() {
    e = B("div"), n = B("input"), r = X(), s = B("label"), wt(o.$$.fragment), a = X(), l = B("div"), l.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg>', I(n, "data-char", "65"), I(n, "class", "answer__input"), I(n, "type", i = t[17] === "multi" ? "checkbox" : "radio"), I(n, "id", `quiz_${t[13]}_${t[21]}`), I(n, "name", `quiz_${t[13]}`), n.value = t[21], I(l, "class", "answer__tick"), I(s, "class", "answer__label"), I(s, "for", `quiz_${t[13]}_${t[21]}`), I(e, "class", "answer");
  }, m(f, g) {
    Y(f, e, g), R(e, n), R(e, r), R(e, s), ft(o, s, null), R(s, a), R(s, l), p = !0, u || (h = Ct(n, "change", d), u = !0);
  }, p(f, g) {
    t = f, (!p || 1 & g && i !== (i = t[17] === "multi" ? "checkbox" : "radio")) && I(n, "type", i);
    const x = {};
    1 & g && (x.source = t[19]), o.$set(x);
  }, i(f) {
    p || (H(o.$$.fragment, f), p = !0);
  }, o(f) {
    W(o.$$.fragment, f), p = !1;
  }, d(f) {
    f && Q(e), mt(o), u = !1, h();
  } };
}
function si(t) {
  let e, n, i, r, s, o, a, l;
  s = new Zt({ props: { inline: !0, options: t[2], source: typeof t[14] == "string" ? t[14] : t[14].join("<br/>") } });
  let p = ct(li(t[15], t[16])), u = [];
  for (let d = 0; d < p.length; d += 1)
    u[d] = ri(ii(t, p, d));
  const h = (d) => W(u[d], 1, 1, () => {
    u[d] = null;
  });
  return { c() {
    e = B("div"), n = B("div"), n.textContent = "📝", i = X(), r = B("div"), wt(s.$$.fragment), o = X(), a = B("div");
    for (let d = 0; d < u.length; d += 1)
      u[d].c();
    I(n, "class", "question__emoji"), I(r, "class", "quiz__question"), I(a, "class", "uie-flex uie-flex-col uie-space-y-3 lg:uie-space-y-0"), I(e, "data-question", t[13] + 1), I(e, "class", `quiz__step--${t[13] + 1} quiz__step`), At(e, "quiz__step--current", t[13] === 0);
  }, m(d, f) {
    Y(d, e, f), R(e, n), R(e, i), R(e, r), ft(s, r, null), R(e, o), R(e, a);
    for (let g = 0; g < u.length; g += 1)
      u[g] && u[g].m(a, null);
    l = !0;
  }, p(d, f) {
    const g = {};
    if (1 & f && (g.source = typeof d[14] == "string" ? d[14] : d[14].join("<br/>")), s.$set(g), 7 & f) {
      let x;
      for (p = ct(li(d[15], d[16])), x = 0; x < p.length; x += 1) {
        const C = ii(d, p, x);
        u[x] ? (u[x].p(C, f), H(u[x], 1)) : (u[x] = ri(C), u[x].c(), H(u[x], 1), u[x].m(a, null));
      }
      for (Tt(), x = p.length; x < u.length; x += 1)
        h(x);
      Mt();
    }
  }, i(d) {
    if (!l) {
      H(s.$$.fragment, d);
      for (let f = 0; f < p.length; f += 1)
        H(u[f]);
      l = !0;
    }
  }, o(d) {
    W(s.$$.fragment, d), u = u.filter(Boolean);
    for (let f = 0; f < u.length; f += 1)
      W(u[f]);
    l = !1;
  }, d(d) {
    d && Q(e), mt(s), ne(u, d);
  } };
}
function oi(t) {
  let e, n, i, r;
  return n = new Zt({ props: { inline: !0, options: t[2], source: t[11] } }), { c() {
    e = B("div"), wt(n.$$.fragment), i = X(), I(e, "class", "answer__label");
  }, m(s, o) {
    Y(s, e, o), ft(n, e, null), R(e, i), r = !0;
  }, p(s, o) {
    const a = {};
    2 & o && (a.source = s[11]), n.$set(a);
  }, i(s) {
    r || (H(n.$$.fragment, s), r = !0);
  }, o(s) {
    W(n.$$.fragment, s), r = !1;
  }, d(s) {
    s && Q(e), mt(n);
  } };
}
function Ao(t) {
  let e, n, i, r, s, o, a, l, p, u, h, d, f, g, x, C, c, v, b, m, w, y, E, S, L, T = ct(t[0]), k = [];
  for (let A = 0; A < T.length; A += 1)
    k[A] = si(ni(t, T, A));
  const q = (A) => W(k[A], 1, 1, () => {
    k[A] = null;
  });
  let P = ct(t[1]), O = [];
  for (let A = 0; A < P.length; A += 1)
    O[A] = oi(ei(t, P, A));
  const V = (A) => W(O[A], 1, 1, () => {
    O[A] = null;
  });
  return { c() {
    e = B("div"), n = B("form"), i = B("div");
    for (let A = 0; A < k.length; A += 1)
      k[A].c();
    r = X(), s = B("div"), o = B("h1"), o.textContent = "Summary", a = X(), l = B("div");
    for (let A = 0; A < O.length; A += 1)
      O[A].c();
    p = X(), u = B("div"), h = B("a"), h.textContent = "Submit", g = X(), x = B("footer"), C = B("section"), c = B("div"), c.innerHTML = '<div class="progress__inner"></div>', v = X(), b = B("div"), m = B("div"), m.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path></svg>', w = X(), y = B("div"), y.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24"><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg>', I(o, "class", "quiz__question"), I(l, "id", "summary"), I(h, "href", "#"), I(h, "class", "submit"), I(u, "class", "submit__container"), I(s, "data-question", d = t[0].length + 1), I(s, "class", f = `quiz__step--${t[0].length + 1} quiz__step quiz__summary`), I(i, "class", "quiz__inner"), I(n, "class", "quiz"), I(e, "class", "container"), I(c, "class", "progress"), I(m, "class", "navigation__btn navigation__btn--left"), I(y, "class", "navigation__btn navigation__btn--right"), I(b, "class", "navigation"), I(C, "class", "bottom__container"), I(x, "class", "bottom");
  }, m(A, z) {
    Y(A, e, z), R(e, n), R(n, i);
    for (let _ = 0; _ < k.length; _ += 1)
      k[_] && k[_].m(i, null);
    R(i, r), R(i, s), R(s, o), R(s, a), R(s, l);
    for (let _ = 0; _ < O.length; _ += 1)
      O[_] && O[_].m(l, null);
    R(s, p), R(s, u), R(u, h), Y(A, g, z), Y(A, x, z), R(x, C), R(C, c), R(C, v), R(C, b), R(b, m), R(b, w), R(b, y), E = !0, S || (L = [Ct(h, "click", t[5]), Ct(m, "click", t[4]), Ct(y, "click", t[3])], S = !0);
  }, p(A, [z]) {
    if (7 & z) {
      let _;
      for (T = ct(A[0]), _ = 0; _ < T.length; _ += 1) {
        const et = ni(A, T, _);
        k[_] ? (k[_].p(et, z), H(k[_], 1)) : (k[_] = si(et), k[_].c(), H(k[_], 1), k[_].m(i, r));
      }
      for (Tt(), _ = T.length; _ < k.length; _ += 1)
        q(_);
      Mt();
    }
    if (6 & z) {
      let _;
      for (P = ct(A[1]), _ = 0; _ < P.length; _ += 1) {
        const et = ei(A, P, _);
        O[_] ? (O[_].p(et, z), H(O[_], 1)) : (O[_] = oi(et), O[_].c(), H(O[_], 1), O[_].m(l, null));
      }
      for (Tt(), _ = P.length; _ < O.length; _ += 1)
        V(_);
      Mt();
    }
    (!E || 1 & z && d !== (d = A[0].length + 1)) && I(s, "data-question", d), (!E || 1 & z && f !== (f = `quiz__step--${A[0].length + 1} quiz__step quiz__summary`)) && I(s, "class", f);
  }, i(A) {
    if (!E) {
      for (let z = 0; z < T.length; z += 1)
        H(k[z]);
      for (let z = 0; z < P.length; z += 1)
        H(O[z]);
      E = !0;
    }
  }, o(A) {
    k = k.filter(Boolean);
    for (let z = 0; z < k.length; z += 1)
      W(k[z]);
    O = O.filter(Boolean);
    for (let z = 0; z < O.length; z += 1)
      W(O[z]);
    E = !1;
  }, d(A) {
    A && (Q(e), Q(g), Q(x)), ne(k, A), ne(O, A), S = !1, It(L);
  } };
}
const ai = '<div class="thanks"><div class="thanks__tick">✔ </div><h1 class="thanks__title">Thank you!</h1></div>';
function li(t, e) {
  t || (t = []), e || (e = []);
  let n = [...t, ...e];
  for (let i = n.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [n[i], n[r]] = [n[r], n[i]];
  }
  return n;
}
function Eo(t, e, n) {
  let { quizs: i = [] } = e, { hasmath: r = !1 } = e, { hasgraph: s = !1 } = e, o = 0, a = !1, l = [];
  const p = { mathjax: r, graph: s };
  return t.$$set = (u) => {
    "quizs" in u && n(0, i = u.quizs), "hasmath" in u && n(6, r = u.hasmath), "hasgraph" in u && n(7, s = u.hasgraph);
  }, t.$$.update = () => {
    1 & t.$$.dirty && i.length > 0 && (o = i.length, n(1, l = new Array(i.length).fill({})));
  }, [i, l, p, function(u) {
    var h = Number(document.querySelector(".quiz__step--current").getAttribute("data-question"));
    if (document.querySelectorAll(".quiz__step--current input:checked").length == 0 || h == o + 1 || a == 1)
      return !1;
    h + 1 == o + 1 && this.classList.add("navigation__btn--disabled");
    var d = 100 * h / o;
    document.querySelector(".progress__inner").style.width = d + "%";
    var f = document.querySelector(".quiz__step--current");
    f.style.display = "none", setTimeout(() => {
      f.classList.remove("quiz__step--current");
      var g = document.querySelector(".quiz__step--" + (h + 1));
      h += 1, g.style.display = "block", g.classList.add("quiz__step--current");
    }, 300), (h = Number(document.querySelector(".quiz__step--current").getAttribute("data-question"))) > 1 && document.querySelector(".navigation__btn--left").classList.remove("navigation__btn--disabled");
  }, function(u) {
    var h = Number(document.querySelector(".quiz__step--current").getAttribute("data-question"));
    if (h == 1 || a == 1)
      return this.classList.add("navigation__btn--disabled"), !1;
    document.querySelector(".navigation__btn--right").classList.remove("navigation__btn--disabled");
    var d = document.querySelector(".quiz__step--current");
    d.style.display = "none", setTimeout(() => {
      d.classList.remove("quiz__step--current");
      var g = document.querySelector(".quiz__step--" + (h - 1));
      g.style.display = "block", h -= 1, g.classList.add("quiz__step--current");
    }, 300), (h = Number(document.querySelector(".quiz__step--current").getAttribute("data-question"))) == 1 && this.classList.add("navigation__btn--disabled");
    var f = 100 * (h - 1) / o + 1;
    document.querySelector(".progress__inner").style.width = f + "%", document.querySelector(".quiz__step--current").addEventListener("keyup", keypressEvent);
  }, function(u) {
    u.preventDefault();
    var h = document.querySelector(".quiz");
    h && h.remove();
    var d = document.querySelector(".container");
    d && ai && d.appendChild(ai), a = !0, document.querySelectorAll(".navigation__btn").forEach((f) => {
      f.classList.add("navigation__btn--disabled");
    });
  }, r, s, (u, h) => {
    n(1, l[u].answer = h, l);
  }];
}
function ci(t, e, n) {
  const i = t.slice();
  return i[13] = e[n], i[14] = e, i[15] = n, i;
}
function ui(t, e, n) {
  const i = t.slice();
  return i[16] = e[n], i[18] = n, i;
}
function pi(t) {
  let e, n, i, r, s, o, a;
  return n = new Zt({ props: { inline: !0, options: t[6], source: t[16] } }), s = new Zt({ props: { inline: !0, options: t[6], source: t[3][t[18]] || "---" } }), { c() {
    e = B("p"), wt(n.$$.fragment), i = X(), r = B("p"), wt(s.$$.fragment), o = X(), I(e, "class", "uie-inline"), I(r, "class", "uie-inline");
  }, m(l, p) {
    Y(l, e, p), ft(n, e, null), Y(l, i, p), Y(l, r, p), ft(s, r, null), R(r, o), a = !0;
  }, p(l, p) {
    const u = {};
    1 & p && (u.source = l[16]), n.$set(u);
    const h = {};
    8 & p && (h.source = l[3][l[18]] || "---"), s.$set(h);
  }, i(l) {
    a || (H(n.$$.fragment, l), H(s.$$.fragment, l), a = !0);
  }, o(l) {
    W(n.$$.fragment, l), W(s.$$.fragment, l), a = !1;
  }, d(l) {
    l && (Q(e), Q(i), Q(r)), mt(n), mt(s);
  } };
}
function hi(t) {
  let e, n, i = t[16] !== "" && pi(t);
  return { c() {
    i && i.c(), e = Ye();
  }, m(r, s) {
    i && i.m(r, s), Y(r, e, s), n = !0;
  }, p(r, s) {
    r[16] !== "" ? i ? (i.p(r, s), 1 & s && H(i, 1)) : (i = pi(r), i.c(), H(i, 1), i.m(e.parentNode, e)) : i && (Tt(), W(i, 1, 1, () => {
      i = null;
    }), Mt());
  }, i(r) {
    n || (H(i), n = !0);
  }, o(r) {
    W(i), n = !1;
  }, d(r) {
    r && Q(e), i && i.d(r);
  } };
}
function di(t) {
  let e, n, i, r, s, o, a, l, p, u, h, d = t[13] + "";
  function f() {
    t[11].call(n, t[15]);
  }
  function g() {
    return t[12](t[13]);
  }
  return { c() {
    e = B("div"), n = B("input"), r = X(), s = B("label"), o = Xe(d), a = X(), l = B("div"), l.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg>', p = X(), I(n, "class", "answer__input"), I(n, "type", "checkbox"), I(n, "id", `quiz_${t[15]}`), n.__value = i = t[13], fn(n, n.__value), I(l, "class", "answer__tick"), I(s, "class", "answer__label"), I(s, "for", `quiz_${t[15]}`), I(e, "class", "answer");
  }, m(x, C) {
    Y(x, e, C), R(e, n), n.checked = t[5][t[15]], R(e, r), R(e, s), R(s, o), R(s, a), R(s, l), R(e, p), u || (h = [Ct(n, "change", f), Ct(n, "change", g)], u = !0);
  }, p(x, C) {
    t = x, 2 & C && i !== (i = t[13]) && (n.__value = i, fn(n, n.__value)), 32 & C && (n.checked = t[5][t[15]]), 2 & C && d !== (d = t[13] + "") && function(c, v) {
      v = "" + v, c.data !== v && (c.data = v);
    }(o, d);
  }, d(x) {
    x && Q(e), u = !1, It(h);
  } };
}
function So(t) {
  let e, n, i, r, s, o, a = ct(t[0].split("___")), l = [];
  for (let d = 0; d < a.length; d += 1)
    l[d] = hi(ui(t, a, d));
  const p = (d) => W(l[d], 1, 1, () => {
    l[d] = null;
  });
  let u = ct(t[1]), h = [];
  for (let d = 0; d < u.length; d += 1)
    h[d] = di(ci(t, u, d));
  return { c() {
    e = B("div"), n = B("div");
    for (let d = 0; d < l.length; d += 1)
      l[d].c();
    i = X(), r = B("div"), s = B("div");
    for (let d = 0; d < h.length; d += 1)
      h[d].c();
    I(s, "class", "uie-flex uie-flex-col uie-space-y-3 lg:uie-space-y-0"), I(r, "class", "uie-flex uie-justify-center"), I(e, "class", "uie-flex uie-flex-col");
  }, m(d, f) {
    Y(d, e, f), R(e, n);
    for (let g = 0; g < l.length; g += 1)
      l[g] && l[g].m(n, null);
    R(e, i), R(e, r), R(r, s);
    for (let g = 0; g < h.length; g += 1)
      h[g] && h[g].m(s, null);
    o = !0;
  }, p(d, [f]) {
    if (73 & f) {
      let g;
      for (a = ct(d[0].split("___")), g = 0; g < a.length; g += 1) {
        const x = ui(d, a, g);
        l[g] ? (l[g].p(x, f), H(l[g], 1)) : (l[g] = hi(x), l[g].c(), H(l[g], 1), l[g].m(n, null));
      }
      for (Tt(), g = a.length; g < l.length; g += 1)
        p(g);
      Mt();
    }
    if (446 & f) {
      let g;
      for (u = ct(d[1]), g = 0; g < u.length; g += 1) {
        const x = ci(d, u, g);
        h[g] ? h[g].p(x, f) : (h[g] = di(x), h[g].c(), h[g].m(s, null));
      }
      for (; g < h.length; g += 1)
        h[g].d(1);
      h.length = u.length;
    }
  }, i(d) {
    if (!o) {
      for (let f = 0; f < a.length; f += 1)
        H(l[f]);
      o = !0;
    }
  }, o(d) {
    l = l.filter(Boolean);
    for (let f = 0; f < l.length; f += 1)
      W(l[f]);
    o = !1;
  }, d(d) {
    d && Q(e), ne(l, d), ne(h, d);
  } };
}
function No(t, e, n) {
  let { question: i = "这是一道填空题，1+1 = ___, 2 + 2 = ___" } = e, { choices: r = ["1", "2", "3", "4", "5"] } = e, { answer: s = ["2", "4"] } = e, { hasmath: o = !1 } = e, { hasgraph: a = !1 } = e;
  const l = { mathjax: o, graph: a };
  let p = {}, u = 0;
  const h = () => {
    for (let g = 0; g < s.length; g++)
      if (s[g] !== p[g])
        return !1;
    return !0;
  };
  var d = {};
  const f = () => {
    n(3, p = {}), n(4, u = 0), n(5, d = {});
  };
  return t.$$set = (g) => {
    "question" in g && n(0, i = g.question), "choices" in g && n(1, r = g.choices), "answer" in g && n(2, s = g.answer), "hasmath" in g && n(9, o = g.hasmath), "hasgraph" in g && n(10, a = g.hasgraph);
  }, [i, r, s, p, u, d, l, h, f, o, a, function(g) {
    d[g] = this.checked, n(5, d);
  }, (g) => {
    if (n(3, p[u] = g, p), n(4, u += 1), u >= s.length) {
      if (!h())
        return f(), alert("打错了哦，请再再接再厉"), !1;
      alert("恭喜你，全部答对了");
    }
  }];
}
if (typeof window < "u" && window.document !== void 0) {
  const t = document.currentScript;
  var De = "", He = "", Ue = "";
  if (t)
    De = t.getAttribute("math"), He = t.getAttribute("graph"), Ue = t.getAttribute("diagram");
  else {
    const e = new URLSearchParams(new URL(import.meta.url).search);
    try {
      De = e.get("math") || sessionStorage.getItem("uikit_editor_math");
    } catch {
    }
    try {
      He = e.get("graph") || sessionStorage.getItem("uikit_editor_graph");
    } catch {
    }
    try {
      Ue = e.get("diagram") || sessionStorage.getItem("uikit_editor_diagram");
    } catch {
    }
  }
  De && Me("mathjax"), He && Me("graph"), Ue && Me("diagram");
}
const rr = { MdRender: Zt, QuizChoice: class extends re {
  constructor(t) {
    super(), ie(this, t, Eo, Ao, ee, { quizs: 0, hasmath: 6, hasgraph: 7 });
  }
}, QuizBlank: class extends re {
  constructor(t) {
    super(), ie(this, t, No, So, ee, { question: 0, choices: 1, answer: 2, hasmath: 9, hasgraph: 10 });
  }
} };
function To(t) {
  for (let e in t)
    rr[e] = t[e];
}
const Mo = (t, e, n, i) => {
  let r = rr[t];
  if (!r)
    return;
  e || (e = window.document.createElement("div"), document.body.appendChild(e));
  let s = function(a) {
    let l = {}, p = a.getElementsByTagName("div");
    for (let u = 0; u < p.length; u++) {
      let h = p[u].getAttribute("data-slot");
      h && (l[h] = p[u], p[u].parentNode.removeChild(p[u]));
    }
    return l;
  }(e);
  const o = new r({ target: e, props: { ...n, ...s } });
  if (i)
    for (let a in i) {
      let l = i[a];
      o.$on(a, (p) => {
        l(p.detail);
      });
    }
  return o;
};
export {
  xt as hljs,
  Mo as kit,
  co as parseFrontMatter,
  uo as parseSource,
  To as registerModel
};
